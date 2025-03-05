import { utf8Length, utf8Read, utf8Write } from "./utf8";
import {
  int64ToString,
  readInt32,
  readUInt32,
  uInt64ToString,
  varint32read,
  varint64read,
  writeVarint32,
  writeVarint64,
  int64FromString,
  int64Length,
  writeFixed32,
  writeByte,
  zzDecode,
  zzEncode
} from "./varint";
var WireType = /* @__PURE__ */ ((WireType2) => {
  WireType2[WireType2["Varint"] = 0] = "Varint";
  WireType2[WireType2["Fixed64"] = 1] = "Fixed64";
  WireType2[WireType2["Bytes"] = 2] = "Bytes";
  WireType2[WireType2["Fixed32"] = 5] = "Fixed32";
  return WireType2;
})(WireType || {});
class BinaryReader {
  buf;
  pos;
  type;
  len;
  assertBounds() {
    if (this.pos > this.len) throw new RangeError("premature EOF");
  }
  constructor(buf) {
    this.buf = buf ? new Uint8Array(buf) : new Uint8Array(0);
    this.pos = 0;
    this.type = 0;
    this.len = this.buf.length;
  }
  tag() {
    const tag = this.uint32(), fieldNo = tag >>> 3, wireType = tag & 7;
    if (fieldNo <= 0 || wireType < 0 || wireType > 5)
      throw new Error(
        "illegal tag: field no " + fieldNo + " wire type " + wireType
      );
    return [fieldNo, wireType, tag];
  }
  skip(length) {
    if (typeof length === "number") {
      if (this.pos + length > this.len) throw indexOutOfRange(this, length);
      this.pos += length;
    } else {
      do {
        if (this.pos >= this.len) throw indexOutOfRange(this);
      } while (this.buf[this.pos++] & 128);
    }
    return this;
  }
  skipType(wireType) {
    switch (wireType) {
      case 0 /* Varint */:
        this.skip();
        break;
      case 1 /* Fixed64 */:
        this.skip(8);
        break;
      case 2 /* Bytes */:
        this.skip(this.uint32());
        break;
      case 3:
        while ((wireType = this.uint32() & 7) !== 4) {
          this.skipType(wireType);
        }
        break;
      case 5 /* Fixed32 */:
        this.skip(4);
        break;
      default:
        throw Error("invalid wire type " + wireType + " at offset " + this.pos);
    }
    return this;
  }
  uint32() {
    return varint32read.bind(this)();
  }
  int32() {
    return this.uint32() | 0;
  }
  sint32() {
    const num = this.uint32();
    return num % 2 === 1 ? (num + 1) / -2 : num / 2;
  }
  fixed32() {
    const val = readUInt32(this.buf, this.pos);
    this.pos += 4;
    return val;
  }
  sfixed32() {
    const val = readInt32(this.buf, this.pos);
    this.pos += 4;
    return val;
  }
  int64() {
    const [lo, hi] = varint64read.bind(this)();
    return BigInt(int64ToString(lo, hi));
  }
  uint64() {
    const [lo, hi] = varint64read.bind(this)();
    return BigInt(uInt64ToString(lo, hi));
  }
  sint64() {
    let [lo, hi] = varint64read.bind(this)();
    [lo, hi] = zzDecode(lo, hi);
    return BigInt(int64ToString(lo, hi));
  }
  fixed64() {
    const lo = this.sfixed32();
    const hi = this.sfixed32();
    return BigInt(uInt64ToString(lo, hi));
  }
  sfixed64() {
    const lo = this.sfixed32();
    const hi = this.sfixed32();
    return BigInt(int64ToString(lo, hi));
  }
  float() {
    throw new Error("float not supported");
  }
  double() {
    throw new Error("double not supported");
  }
  bool() {
    const [lo, hi] = varint64read.bind(this)();
    return lo !== 0 || hi !== 0;
  }
  bytes() {
    const len = this.uint32(), start = this.pos;
    this.pos += len;
    this.assertBounds();
    return this.buf.subarray(start, start + len);
  }
  string() {
    const bytes = this.bytes();
    return utf8Read(bytes, 0, bytes.length);
  }
}
class Op {
  fn;
  len;
  val;
  next;
  constructor(fn, len, val) {
    this.fn = fn;
    this.len = len;
    this.val = val;
  }
  proceed(buf, pos) {
    if (this.fn) {
      this.fn(this.val, buf, pos);
    }
  }
}
class State {
  head;
  tail;
  len;
  next;
  constructor(writer) {
    this.head = writer.head;
    this.tail = writer.tail;
    this.len = writer.len;
    this.next = writer.states;
  }
}
class BinaryWriter {
  len = 0;
  head;
  tail;
  states;
  constructor() {
    this.head = new Op(null, 0, 0);
    this.tail = this.head;
    this.states = null;
  }
  static create() {
    return new BinaryWriter();
  }
  static alloc(size) {
    if (typeof Uint8Array !== "undefined") {
      return pool(
        (size2) => new Uint8Array(size2),
        Uint8Array.prototype.subarray
      )(size);
    } else {
      return new Array(size);
    }
  }
  _push(fn, len, val) {
    this.tail = this.tail.next = new Op(fn, len, val);
    this.len += len;
    return this;
  }
  finish() {
    let head = this.head.next, pos = 0;
    const buf = BinaryWriter.alloc(this.len);
    while (head) {
      head.proceed(buf, pos);
      pos += head.len;
      head = head.next;
    }
    return buf;
  }
  fork() {
    this.states = new State(this);
    this.head = this.tail = new Op(null, 0, 0);
    this.len = 0;
    return this;
  }
  reset() {
    if (this.states) {
      this.head = this.states.head;
      this.tail = this.states.tail;
      this.len = this.states.len;
      this.states = this.states.next;
    } else {
      this.head = this.tail = new Op(null, 0, 0);
      this.len = 0;
    }
    return this;
  }
  ldelim() {
    const head = this.head, tail = this.tail, len = this.len;
    this.reset().uint32(len);
    if (len) {
      this.tail.next = head.next;
      this.tail = tail;
      this.len += len;
    }
    return this;
  }
  tag(fieldNo, type) {
    return this.uint32((fieldNo << 3 | type) >>> 0);
  }
  uint32(value) {
    this.len += (this.tail = this.tail.next = new Op(
      writeVarint32,
      (value = value >>> 0) < 128 ? 1 : value < 16384 ? 2 : value < 2097152 ? 3 : value < 268435456 ? 4 : 5,
      value
    )).len;
    return this;
  }
  int32(value) {
    return value < 0 ? this._push(writeVarint64, 10, int64FromString(value.toString())) : this.uint32(value);
  }
  sint32(value) {
    return this.uint32((value << 1 ^ value >> 31) >>> 0);
  }
  int64(value) {
    const { lo, hi } = int64FromString(value.toString());
    return this._push(writeVarint64, int64Length(lo, hi), { lo, hi });
  }
  // uint64 is the same with int64
  uint64 = BinaryWriter.prototype.int64;
  sint64(value) {
    let { lo, hi } = int64FromString(value.toString());
    [lo, hi] = zzEncode(lo, hi);
    return this._push(writeVarint64, int64Length(lo, hi), { lo, hi });
  }
  fixed64(value) {
    const { lo, hi } = int64FromString(value.toString());
    return this._push(writeFixed32, 4, lo)._push(writeFixed32, 4, hi);
  }
  // sfixed64 is the same with fixed64
  sfixed64 = BinaryWriter.prototype.fixed64;
  bool(value) {
    return this._push(writeByte, 1, value ? 1 : 0);
  }
  fixed32(value) {
    return this._push(writeFixed32, 4, value >>> 0);
  }
  // sfixed32 is the same with fixed32
  sfixed32 = BinaryWriter.prototype.fixed32;
  float(value) {
    throw new Error("float not supported" + value);
  }
  double(value) {
    throw new Error("double not supported" + value);
  }
  bytes(value) {
    const len = value.length >>> 0;
    if (!len) return this._push(writeByte, 1, 0);
    return this.uint32(len)._push(writeBytes, len, value);
  }
  string(value) {
    const len = utf8Length(value);
    return len ? this.uint32(len)._push(utf8Write, len, value) : this._push(writeByte, 1, 0);
  }
}
function writeBytes(val, buf, pos) {
  if (typeof Uint8Array !== "undefined") {
    buf.set(val, pos);
  } else {
    for (let i = 0; i < val.length; ++i) buf[pos + i] = val[i];
  }
}
function pool(alloc, slice, size) {
  const SIZE = size || 8192;
  const MAX = SIZE >>> 1;
  let slab = null;
  let offset = SIZE;
  return function pool_alloc(size2) {
    if (size2 < 1 || size2 > MAX) return alloc(size2);
    if (offset + size2 > SIZE) {
      slab = alloc(SIZE);
      offset = 0;
    }
    const buf = slice.call(slab, offset, offset += size2);
    if (offset & 7)
      offset = (offset | 7) + 1;
    return buf;
  };
}
function indexOutOfRange(reader, writeLength) {
  return RangeError(
    "index out of range: " + reader.pos + " + " + (writeLength || 1) + " > " + reader.len
  );
}
export {
  BinaryReader,
  BinaryWriter,
  WireType
};
