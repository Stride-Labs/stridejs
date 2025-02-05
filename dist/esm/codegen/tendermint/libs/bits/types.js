import { BinaryReader, BinaryWriter } from "../../../binary";
function createBaseBitArray() {
  return {
    bits: BigInt(0),
    elems: []
  };
}
const BitArray = {
  typeUrl: "/tendermint.libs.bits.BitArray",
  encode(message, writer = BinaryWriter.create()) {
    if (message.bits !== BigInt(0)) {
      writer.uint32(8).int64(message.bits);
    }
    writer.uint32(18).fork();
    for (const v of message.elems) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseBitArray();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bits = reader.int64();
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.elems.push(reader.uint64());
            }
          } else {
            message.elems.push(reader.uint64());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseBitArray();
    message.bits = object.bits !== void 0 && object.bits !== null ? BigInt(object.bits.toString()) : BigInt(0);
    message.elems = object.elems?.map((e) => BigInt(e.toString())) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseBitArray();
    if (object.bits !== void 0 && object.bits !== null) {
      message.bits = BigInt(object.bits);
    }
    message.elems = object.elems?.map((e) => BigInt(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.bits = message.bits !== BigInt(0) ? message.bits?.toString() : void 0;
    if (message.elems) {
      obj.elems = message.elems.map((e) => e.toString());
    } else {
      obj.elems = message.elems;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return BitArray.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return BitArray.decode(message.value);
  },
  toProto(message) {
    return BitArray.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/tendermint.libs.bits.BitArray",
      value: BitArray.encode(message).finish()
    };
  }
};
export {
  BitArray
};
