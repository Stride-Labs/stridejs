var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var proofs_exports = {};
__export(proofs_exports, {
  BatchEntry: () => BatchEntry,
  BatchProof: () => BatchProof,
  CommitmentProof: () => CommitmentProof,
  CompressedBatchEntry: () => CompressedBatchEntry,
  CompressedBatchProof: () => CompressedBatchProof,
  CompressedExistenceProof: () => CompressedExistenceProof,
  CompressedNonExistenceProof: () => CompressedNonExistenceProof,
  ExistenceProof: () => ExistenceProof,
  HashOp: () => HashOp,
  HashOpAmino: () => HashOpAmino,
  HashOpSDKType: () => HashOpSDKType,
  InnerOp: () => InnerOp,
  InnerSpec: () => InnerSpec,
  LeafOp: () => LeafOp,
  LengthOp: () => LengthOp,
  LengthOpAmino: () => LengthOpAmino,
  LengthOpSDKType: () => LengthOpSDKType,
  NonExistenceProof: () => NonExistenceProof,
  ProofSpec: () => ProofSpec,
  hashOpFromJSON: () => hashOpFromJSON,
  hashOpToJSON: () => hashOpToJSON,
  lengthOpFromJSON: () => lengthOpFromJSON,
  lengthOpToJSON: () => lengthOpToJSON
});
module.exports = __toCommonJS(proofs_exports);
var import_binary = require("../../../binary");
var import_helpers = require("../../../helpers");
var HashOp = /* @__PURE__ */ ((HashOp2) => {
  HashOp2[HashOp2["NO_HASH"] = 0] = "NO_HASH";
  HashOp2[HashOp2["SHA256"] = 1] = "SHA256";
  HashOp2[HashOp2["SHA512"] = 2] = "SHA512";
  HashOp2[HashOp2["KECCAK"] = 3] = "KECCAK";
  HashOp2[HashOp2["RIPEMD160"] = 4] = "RIPEMD160";
  HashOp2[HashOp2["BITCOIN"] = 5] = "BITCOIN";
  HashOp2[HashOp2["SHA512_256"] = 6] = "SHA512_256";
  HashOp2[HashOp2["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return HashOp2;
})(HashOp || {});
const HashOpSDKType = HashOp;
const HashOpAmino = HashOp;
function hashOpFromJSON(object) {
  switch (object) {
    case 0:
    case "NO_HASH":
      return 0 /* NO_HASH */;
    case 1:
    case "SHA256":
      return 1 /* SHA256 */;
    case 2:
    case "SHA512":
      return 2 /* SHA512 */;
    case 3:
    case "KECCAK":
      return 3 /* KECCAK */;
    case 4:
    case "RIPEMD160":
      return 4 /* RIPEMD160 */;
    case 5:
    case "BITCOIN":
      return 5 /* BITCOIN */;
    case 6:
    case "SHA512_256":
      return 6 /* SHA512_256 */;
    case -1:
    case "UNRECOGNIZED":
    default:
      return -1 /* UNRECOGNIZED */;
  }
}
function hashOpToJSON(object) {
  switch (object) {
    case 0 /* NO_HASH */:
      return "NO_HASH";
    case 1 /* SHA256 */:
      return "SHA256";
    case 2 /* SHA512 */:
      return "SHA512";
    case 3 /* KECCAK */:
      return "KECCAK";
    case 4 /* RIPEMD160 */:
      return "RIPEMD160";
    case 5 /* BITCOIN */:
      return "BITCOIN";
    case 6 /* SHA512_256 */:
      return "SHA512_256";
    case -1 /* UNRECOGNIZED */:
    default:
      return "UNRECOGNIZED";
  }
}
var LengthOp = /* @__PURE__ */ ((LengthOp2) => {
  LengthOp2[LengthOp2["NO_PREFIX"] = 0] = "NO_PREFIX";
  LengthOp2[LengthOp2["VAR_PROTO"] = 1] = "VAR_PROTO";
  LengthOp2[LengthOp2["VAR_RLP"] = 2] = "VAR_RLP";
  LengthOp2[LengthOp2["FIXED32_BIG"] = 3] = "FIXED32_BIG";
  LengthOp2[LengthOp2["FIXED32_LITTLE"] = 4] = "FIXED32_LITTLE";
  LengthOp2[LengthOp2["FIXED64_BIG"] = 5] = "FIXED64_BIG";
  LengthOp2[LengthOp2["FIXED64_LITTLE"] = 6] = "FIXED64_LITTLE";
  LengthOp2[LengthOp2["REQUIRE_32_BYTES"] = 7] = "REQUIRE_32_BYTES";
  LengthOp2[LengthOp2["REQUIRE_64_BYTES"] = 8] = "REQUIRE_64_BYTES";
  LengthOp2[LengthOp2["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return LengthOp2;
})(LengthOp || {});
const LengthOpSDKType = LengthOp;
const LengthOpAmino = LengthOp;
function lengthOpFromJSON(object) {
  switch (object) {
    case 0:
    case "NO_PREFIX":
      return 0 /* NO_PREFIX */;
    case 1:
    case "VAR_PROTO":
      return 1 /* VAR_PROTO */;
    case 2:
    case "VAR_RLP":
      return 2 /* VAR_RLP */;
    case 3:
    case "FIXED32_BIG":
      return 3 /* FIXED32_BIG */;
    case 4:
    case "FIXED32_LITTLE":
      return 4 /* FIXED32_LITTLE */;
    case 5:
    case "FIXED64_BIG":
      return 5 /* FIXED64_BIG */;
    case 6:
    case "FIXED64_LITTLE":
      return 6 /* FIXED64_LITTLE */;
    case 7:
    case "REQUIRE_32_BYTES":
      return 7 /* REQUIRE_32_BYTES */;
    case 8:
    case "REQUIRE_64_BYTES":
      return 8 /* REQUIRE_64_BYTES */;
    case -1:
    case "UNRECOGNIZED":
    default:
      return -1 /* UNRECOGNIZED */;
  }
}
function lengthOpToJSON(object) {
  switch (object) {
    case 0 /* NO_PREFIX */:
      return "NO_PREFIX";
    case 1 /* VAR_PROTO */:
      return "VAR_PROTO";
    case 2 /* VAR_RLP */:
      return "VAR_RLP";
    case 3 /* FIXED32_BIG */:
      return "FIXED32_BIG";
    case 4 /* FIXED32_LITTLE */:
      return "FIXED32_LITTLE";
    case 5 /* FIXED64_BIG */:
      return "FIXED64_BIG";
    case 6 /* FIXED64_LITTLE */:
      return "FIXED64_LITTLE";
    case 7 /* REQUIRE_32_BYTES */:
      return "REQUIRE_32_BYTES";
    case 8 /* REQUIRE_64_BYTES */:
      return "REQUIRE_64_BYTES";
    case -1 /* UNRECOGNIZED */:
    default:
      return "UNRECOGNIZED";
  }
}
function createBaseExistenceProof() {
  return {
    key: new Uint8Array(),
    value: new Uint8Array(),
    leaf: void 0,
    path: []
  };
}
const ExistenceProof = {
  typeUrl: "/cosmos.ics23.v1.ExistenceProof",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.key.length !== 0) {
      writer.uint32(10).bytes(message.key);
    }
    if (message.value.length !== 0) {
      writer.uint32(18).bytes(message.value);
    }
    if (message.leaf !== void 0) {
      LeafOp.encode(message.leaf, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.path) {
      InnerOp.encode(v, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseExistenceProof();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.bytes();
          break;
        case 2:
          message.value = reader.bytes();
          break;
        case 3:
          message.leaf = LeafOp.decode(reader, reader.uint32());
          break;
        case 4:
          message.path.push(InnerOp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseExistenceProof();
    message.key = object.key ?? new Uint8Array();
    message.value = object.value ?? new Uint8Array();
    message.leaf = object.leaf !== void 0 && object.leaf !== null ? LeafOp.fromPartial(object.leaf) : void 0;
    message.path = object.path?.map((e) => InnerOp.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseExistenceProof();
    if (object.key !== void 0 && object.key !== null) {
      message.key = (0, import_helpers.bytesFromBase64)(object.key);
    }
    if (object.value !== void 0 && object.value !== null) {
      message.value = (0, import_helpers.bytesFromBase64)(object.value);
    }
    if (object.leaf !== void 0 && object.leaf !== null) {
      message.leaf = LeafOp.fromAmino(object.leaf);
    }
    message.path = object.path?.map((e) => InnerOp.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.key = message.key ? (0, import_helpers.base64FromBytes)(message.key) : void 0;
    obj.value = message.value ? (0, import_helpers.base64FromBytes)(message.value) : void 0;
    obj.leaf = message.leaf ? LeafOp.toAmino(message.leaf) : void 0;
    if (message.path) {
      obj.path = message.path.map((e) => e ? InnerOp.toAmino(e) : void 0);
    } else {
      obj.path = message.path;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return ExistenceProof.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/ExistenceProof",
      value: ExistenceProof.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return ExistenceProof.decode(message.value);
  },
  toProto(message) {
    return ExistenceProof.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.ics23.v1.ExistenceProof",
      value: ExistenceProof.encode(message).finish()
    };
  }
};
function createBaseNonExistenceProof() {
  return {
    key: new Uint8Array(),
    left: void 0,
    right: void 0
  };
}
const NonExistenceProof = {
  typeUrl: "/cosmos.ics23.v1.NonExistenceProof",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.key.length !== 0) {
      writer.uint32(10).bytes(message.key);
    }
    if (message.left !== void 0) {
      ExistenceProof.encode(message.left, writer.uint32(18).fork()).ldelim();
    }
    if (message.right !== void 0) {
      ExistenceProof.encode(message.right, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseNonExistenceProof();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.bytes();
          break;
        case 2:
          message.left = ExistenceProof.decode(reader, reader.uint32());
          break;
        case 3:
          message.right = ExistenceProof.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseNonExistenceProof();
    message.key = object.key ?? new Uint8Array();
    message.left = object.left !== void 0 && object.left !== null ? ExistenceProof.fromPartial(object.left) : void 0;
    message.right = object.right !== void 0 && object.right !== null ? ExistenceProof.fromPartial(object.right) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseNonExistenceProof();
    if (object.key !== void 0 && object.key !== null) {
      message.key = (0, import_helpers.bytesFromBase64)(object.key);
    }
    if (object.left !== void 0 && object.left !== null) {
      message.left = ExistenceProof.fromAmino(object.left);
    }
    if (object.right !== void 0 && object.right !== null) {
      message.right = ExistenceProof.fromAmino(object.right);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.key = message.key ? (0, import_helpers.base64FromBytes)(message.key) : void 0;
    obj.left = message.left ? ExistenceProof.toAmino(message.left) : void 0;
    obj.right = message.right ? ExistenceProof.toAmino(message.right) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return NonExistenceProof.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/NonExistenceProof",
      value: NonExistenceProof.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return NonExistenceProof.decode(message.value);
  },
  toProto(message) {
    return NonExistenceProof.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.ics23.v1.NonExistenceProof",
      value: NonExistenceProof.encode(message).finish()
    };
  }
};
function createBaseCommitmentProof() {
  return {
    exist: void 0,
    nonexist: void 0,
    batch: void 0,
    compressed: void 0
  };
}
const CommitmentProof = {
  typeUrl: "/cosmos.ics23.v1.CommitmentProof",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.exist !== void 0) {
      ExistenceProof.encode(message.exist, writer.uint32(10).fork()).ldelim();
    }
    if (message.nonexist !== void 0) {
      NonExistenceProof.encode(message.nonexist, writer.uint32(18).fork()).ldelim();
    }
    if (message.batch !== void 0) {
      BatchProof.encode(message.batch, writer.uint32(26).fork()).ldelim();
    }
    if (message.compressed !== void 0) {
      CompressedBatchProof.encode(message.compressed, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseCommitmentProof();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.exist = ExistenceProof.decode(reader, reader.uint32());
          break;
        case 2:
          message.nonexist = NonExistenceProof.decode(reader, reader.uint32());
          break;
        case 3:
          message.batch = BatchProof.decode(reader, reader.uint32());
          break;
        case 4:
          message.compressed = CompressedBatchProof.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseCommitmentProof();
    message.exist = object.exist !== void 0 && object.exist !== null ? ExistenceProof.fromPartial(object.exist) : void 0;
    message.nonexist = object.nonexist !== void 0 && object.nonexist !== null ? NonExistenceProof.fromPartial(object.nonexist) : void 0;
    message.batch = object.batch !== void 0 && object.batch !== null ? BatchProof.fromPartial(object.batch) : void 0;
    message.compressed = object.compressed !== void 0 && object.compressed !== null ? CompressedBatchProof.fromPartial(object.compressed) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseCommitmentProof();
    if (object.exist !== void 0 && object.exist !== null) {
      message.exist = ExistenceProof.fromAmino(object.exist);
    }
    if (object.nonexist !== void 0 && object.nonexist !== null) {
      message.nonexist = NonExistenceProof.fromAmino(object.nonexist);
    }
    if (object.batch !== void 0 && object.batch !== null) {
      message.batch = BatchProof.fromAmino(object.batch);
    }
    if (object.compressed !== void 0 && object.compressed !== null) {
      message.compressed = CompressedBatchProof.fromAmino(object.compressed);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.exist = message.exist ? ExistenceProof.toAmino(message.exist) : void 0;
    obj.nonexist = message.nonexist ? NonExistenceProof.toAmino(message.nonexist) : void 0;
    obj.batch = message.batch ? BatchProof.toAmino(message.batch) : void 0;
    obj.compressed = message.compressed ? CompressedBatchProof.toAmino(message.compressed) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return CommitmentProof.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/CommitmentProof",
      value: CommitmentProof.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return CommitmentProof.decode(message.value);
  },
  toProto(message) {
    return CommitmentProof.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.ics23.v1.CommitmentProof",
      value: CommitmentProof.encode(message).finish()
    };
  }
};
function createBaseLeafOp() {
  return {
    hash: 0,
    prehashKey: 0,
    prehashValue: 0,
    length: 0,
    prefix: new Uint8Array()
  };
}
const LeafOp = {
  typeUrl: "/cosmos.ics23.v1.LeafOp",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.hash !== 0) {
      writer.uint32(8).int32(message.hash);
    }
    if (message.prehashKey !== 0) {
      writer.uint32(16).int32(message.prehashKey);
    }
    if (message.prehashValue !== 0) {
      writer.uint32(24).int32(message.prehashValue);
    }
    if (message.length !== 0) {
      writer.uint32(32).int32(message.length);
    }
    if (message.prefix.length !== 0) {
      writer.uint32(42).bytes(message.prefix);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseLeafOp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hash = reader.int32();
          break;
        case 2:
          message.prehashKey = reader.int32();
          break;
        case 3:
          message.prehashValue = reader.int32();
          break;
        case 4:
          message.length = reader.int32();
          break;
        case 5:
          message.prefix = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseLeafOp();
    message.hash = object.hash ?? 0;
    message.prehashKey = object.prehashKey ?? 0;
    message.prehashValue = object.prehashValue ?? 0;
    message.length = object.length ?? 0;
    message.prefix = object.prefix ?? new Uint8Array();
    return message;
  },
  fromAmino(object) {
    const message = createBaseLeafOp();
    if (object.hash !== void 0 && object.hash !== null) {
      message.hash = object.hash;
    }
    if (object.prehash_key !== void 0 && object.prehash_key !== null) {
      message.prehashKey = object.prehash_key;
    }
    if (object.prehash_value !== void 0 && object.prehash_value !== null) {
      message.prehashValue = object.prehash_value;
    }
    if (object.length !== void 0 && object.length !== null) {
      message.length = object.length;
    }
    if (object.prefix !== void 0 && object.prefix !== null) {
      message.prefix = (0, import_helpers.bytesFromBase64)(object.prefix);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.hash = message.hash === 0 ? void 0 : message.hash;
    obj.prehash_key = message.prehashKey === 0 ? void 0 : message.prehashKey;
    obj.prehash_value = message.prehashValue === 0 ? void 0 : message.prehashValue;
    obj.length = message.length === 0 ? void 0 : message.length;
    obj.prefix = message.prefix ? (0, import_helpers.base64FromBytes)(message.prefix) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return LeafOp.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/LeafOp",
      value: LeafOp.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return LeafOp.decode(message.value);
  },
  toProto(message) {
    return LeafOp.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.ics23.v1.LeafOp",
      value: LeafOp.encode(message).finish()
    };
  }
};
function createBaseInnerOp() {
  return {
    hash: 0,
    prefix: new Uint8Array(),
    suffix: new Uint8Array()
  };
}
const InnerOp = {
  typeUrl: "/cosmos.ics23.v1.InnerOp",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.hash !== 0) {
      writer.uint32(8).int32(message.hash);
    }
    if (message.prefix.length !== 0) {
      writer.uint32(18).bytes(message.prefix);
    }
    if (message.suffix.length !== 0) {
      writer.uint32(26).bytes(message.suffix);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseInnerOp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hash = reader.int32();
          break;
        case 2:
          message.prefix = reader.bytes();
          break;
        case 3:
          message.suffix = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseInnerOp();
    message.hash = object.hash ?? 0;
    message.prefix = object.prefix ?? new Uint8Array();
    message.suffix = object.suffix ?? new Uint8Array();
    return message;
  },
  fromAmino(object) {
    const message = createBaseInnerOp();
    if (object.hash !== void 0 && object.hash !== null) {
      message.hash = object.hash;
    }
    if (object.prefix !== void 0 && object.prefix !== null) {
      message.prefix = (0, import_helpers.bytesFromBase64)(object.prefix);
    }
    if (object.suffix !== void 0 && object.suffix !== null) {
      message.suffix = (0, import_helpers.bytesFromBase64)(object.suffix);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.hash = message.hash === 0 ? void 0 : message.hash;
    obj.prefix = message.prefix ? (0, import_helpers.base64FromBytes)(message.prefix) : void 0;
    obj.suffix = message.suffix ? (0, import_helpers.base64FromBytes)(message.suffix) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return InnerOp.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/InnerOp",
      value: InnerOp.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return InnerOp.decode(message.value);
  },
  toProto(message) {
    return InnerOp.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.ics23.v1.InnerOp",
      value: InnerOp.encode(message).finish()
    };
  }
};
function createBaseProofSpec() {
  return {
    leafSpec: void 0,
    innerSpec: void 0,
    maxDepth: 0,
    minDepth: 0
  };
}
const ProofSpec = {
  typeUrl: "/cosmos.ics23.v1.ProofSpec",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.leafSpec !== void 0) {
      LeafOp.encode(message.leafSpec, writer.uint32(10).fork()).ldelim();
    }
    if (message.innerSpec !== void 0) {
      InnerSpec.encode(message.innerSpec, writer.uint32(18).fork()).ldelim();
    }
    if (message.maxDepth !== 0) {
      writer.uint32(24).int32(message.maxDepth);
    }
    if (message.minDepth !== 0) {
      writer.uint32(32).int32(message.minDepth);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseProofSpec();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.leafSpec = LeafOp.decode(reader, reader.uint32());
          break;
        case 2:
          message.innerSpec = InnerSpec.decode(reader, reader.uint32());
          break;
        case 3:
          message.maxDepth = reader.int32();
          break;
        case 4:
          message.minDepth = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseProofSpec();
    message.leafSpec = object.leafSpec !== void 0 && object.leafSpec !== null ? LeafOp.fromPartial(object.leafSpec) : void 0;
    message.innerSpec = object.innerSpec !== void 0 && object.innerSpec !== null ? InnerSpec.fromPartial(object.innerSpec) : void 0;
    message.maxDepth = object.maxDepth ?? 0;
    message.minDepth = object.minDepth ?? 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseProofSpec();
    if (object.leaf_spec !== void 0 && object.leaf_spec !== null) {
      message.leafSpec = LeafOp.fromAmino(object.leaf_spec);
    }
    if (object.inner_spec !== void 0 && object.inner_spec !== null) {
      message.innerSpec = InnerSpec.fromAmino(object.inner_spec);
    }
    if (object.max_depth !== void 0 && object.max_depth !== null) {
      message.maxDepth = object.max_depth;
    }
    if (object.min_depth !== void 0 && object.min_depth !== null) {
      message.minDepth = object.min_depth;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.leaf_spec = message.leafSpec ? LeafOp.toAmino(message.leafSpec) : void 0;
    obj.inner_spec = message.innerSpec ? InnerSpec.toAmino(message.innerSpec) : void 0;
    obj.max_depth = message.maxDepth === 0 ? void 0 : message.maxDepth;
    obj.min_depth = message.minDepth === 0 ? void 0 : message.minDepth;
    return obj;
  },
  fromAminoMsg(object) {
    return ProofSpec.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/ProofSpec",
      value: ProofSpec.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return ProofSpec.decode(message.value);
  },
  toProto(message) {
    return ProofSpec.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.ics23.v1.ProofSpec",
      value: ProofSpec.encode(message).finish()
    };
  }
};
function createBaseInnerSpec() {
  return {
    childOrder: [],
    childSize: 0,
    minPrefixLength: 0,
    maxPrefixLength: 0,
    emptyChild: new Uint8Array(),
    hash: 0
  };
}
const InnerSpec = {
  typeUrl: "/cosmos.ics23.v1.InnerSpec",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    writer.uint32(10).fork();
    for (const v of message.childOrder) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.childSize !== 0) {
      writer.uint32(16).int32(message.childSize);
    }
    if (message.minPrefixLength !== 0) {
      writer.uint32(24).int32(message.minPrefixLength);
    }
    if (message.maxPrefixLength !== 0) {
      writer.uint32(32).int32(message.maxPrefixLength);
    }
    if (message.emptyChild.length !== 0) {
      writer.uint32(42).bytes(message.emptyChild);
    }
    if (message.hash !== 0) {
      writer.uint32(48).int32(message.hash);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseInnerSpec();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.childOrder.push(reader.int32());
            }
          } else {
            message.childOrder.push(reader.int32());
          }
          break;
        case 2:
          message.childSize = reader.int32();
          break;
        case 3:
          message.minPrefixLength = reader.int32();
          break;
        case 4:
          message.maxPrefixLength = reader.int32();
          break;
        case 5:
          message.emptyChild = reader.bytes();
          break;
        case 6:
          message.hash = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseInnerSpec();
    message.childOrder = object.childOrder?.map((e) => e) || [];
    message.childSize = object.childSize ?? 0;
    message.minPrefixLength = object.minPrefixLength ?? 0;
    message.maxPrefixLength = object.maxPrefixLength ?? 0;
    message.emptyChild = object.emptyChild ?? new Uint8Array();
    message.hash = object.hash ?? 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseInnerSpec();
    message.childOrder = object.child_order?.map((e) => e) || [];
    if (object.child_size !== void 0 && object.child_size !== null) {
      message.childSize = object.child_size;
    }
    if (object.min_prefix_length !== void 0 && object.min_prefix_length !== null) {
      message.minPrefixLength = object.min_prefix_length;
    }
    if (object.max_prefix_length !== void 0 && object.max_prefix_length !== null) {
      message.maxPrefixLength = object.max_prefix_length;
    }
    if (object.empty_child !== void 0 && object.empty_child !== null) {
      message.emptyChild = (0, import_helpers.bytesFromBase64)(object.empty_child);
    }
    if (object.hash !== void 0 && object.hash !== null) {
      message.hash = object.hash;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.childOrder) {
      obj.child_order = message.childOrder.map((e) => e);
    } else {
      obj.child_order = message.childOrder;
    }
    obj.child_size = message.childSize === 0 ? void 0 : message.childSize;
    obj.min_prefix_length = message.minPrefixLength === 0 ? void 0 : message.minPrefixLength;
    obj.max_prefix_length = message.maxPrefixLength === 0 ? void 0 : message.maxPrefixLength;
    obj.empty_child = message.emptyChild ? (0, import_helpers.base64FromBytes)(message.emptyChild) : void 0;
    obj.hash = message.hash === 0 ? void 0 : message.hash;
    return obj;
  },
  fromAminoMsg(object) {
    return InnerSpec.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/InnerSpec",
      value: InnerSpec.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return InnerSpec.decode(message.value);
  },
  toProto(message) {
    return InnerSpec.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.ics23.v1.InnerSpec",
      value: InnerSpec.encode(message).finish()
    };
  }
};
function createBaseBatchProof() {
  return {
    entries: []
  };
}
const BatchProof = {
  typeUrl: "/cosmos.ics23.v1.BatchProof",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    for (const v of message.entries) {
      BatchEntry.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseBatchProof();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.entries.push(BatchEntry.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseBatchProof();
    message.entries = object.entries?.map((e) => BatchEntry.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseBatchProof();
    message.entries = object.entries?.map((e) => BatchEntry.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.entries) {
      obj.entries = message.entries.map((e) => e ? BatchEntry.toAmino(e) : void 0);
    } else {
      obj.entries = message.entries;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return BatchProof.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/BatchProof",
      value: BatchProof.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return BatchProof.decode(message.value);
  },
  toProto(message) {
    return BatchProof.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.ics23.v1.BatchProof",
      value: BatchProof.encode(message).finish()
    };
  }
};
function createBaseBatchEntry() {
  return {
    exist: void 0,
    nonexist: void 0
  };
}
const BatchEntry = {
  typeUrl: "/cosmos.ics23.v1.BatchEntry",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.exist !== void 0) {
      ExistenceProof.encode(message.exist, writer.uint32(10).fork()).ldelim();
    }
    if (message.nonexist !== void 0) {
      NonExistenceProof.encode(message.nonexist, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseBatchEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.exist = ExistenceProof.decode(reader, reader.uint32());
          break;
        case 2:
          message.nonexist = NonExistenceProof.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseBatchEntry();
    message.exist = object.exist !== void 0 && object.exist !== null ? ExistenceProof.fromPartial(object.exist) : void 0;
    message.nonexist = object.nonexist !== void 0 && object.nonexist !== null ? NonExistenceProof.fromPartial(object.nonexist) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseBatchEntry();
    if (object.exist !== void 0 && object.exist !== null) {
      message.exist = ExistenceProof.fromAmino(object.exist);
    }
    if (object.nonexist !== void 0 && object.nonexist !== null) {
      message.nonexist = NonExistenceProof.fromAmino(object.nonexist);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.exist = message.exist ? ExistenceProof.toAmino(message.exist) : void 0;
    obj.nonexist = message.nonexist ? NonExistenceProof.toAmino(message.nonexist) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return BatchEntry.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/BatchEntry",
      value: BatchEntry.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return BatchEntry.decode(message.value);
  },
  toProto(message) {
    return BatchEntry.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.ics23.v1.BatchEntry",
      value: BatchEntry.encode(message).finish()
    };
  }
};
function createBaseCompressedBatchProof() {
  return {
    entries: [],
    lookupInners: []
  };
}
const CompressedBatchProof = {
  typeUrl: "/cosmos.ics23.v1.CompressedBatchProof",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    for (const v of message.entries) {
      CompressedBatchEntry.encode(v, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.lookupInners) {
      InnerOp.encode(v, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseCompressedBatchProof();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.entries.push(CompressedBatchEntry.decode(reader, reader.uint32()));
          break;
        case 2:
          message.lookupInners.push(InnerOp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseCompressedBatchProof();
    message.entries = object.entries?.map((e) => CompressedBatchEntry.fromPartial(e)) || [];
    message.lookupInners = object.lookupInners?.map((e) => InnerOp.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseCompressedBatchProof();
    message.entries = object.entries?.map((e) => CompressedBatchEntry.fromAmino(e)) || [];
    message.lookupInners = object.lookup_inners?.map((e) => InnerOp.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.entries) {
      obj.entries = message.entries.map((e) => e ? CompressedBatchEntry.toAmino(e) : void 0);
    } else {
      obj.entries = message.entries;
    }
    if (message.lookupInners) {
      obj.lookup_inners = message.lookupInners.map((e) => e ? InnerOp.toAmino(e) : void 0);
    } else {
      obj.lookup_inners = message.lookupInners;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return CompressedBatchProof.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/CompressedBatchProof",
      value: CompressedBatchProof.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return CompressedBatchProof.decode(message.value);
  },
  toProto(message) {
    return CompressedBatchProof.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.ics23.v1.CompressedBatchProof",
      value: CompressedBatchProof.encode(message).finish()
    };
  }
};
function createBaseCompressedBatchEntry() {
  return {
    exist: void 0,
    nonexist: void 0
  };
}
const CompressedBatchEntry = {
  typeUrl: "/cosmos.ics23.v1.CompressedBatchEntry",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.exist !== void 0) {
      CompressedExistenceProof.encode(message.exist, writer.uint32(10).fork()).ldelim();
    }
    if (message.nonexist !== void 0) {
      CompressedNonExistenceProof.encode(message.nonexist, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseCompressedBatchEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.exist = CompressedExistenceProof.decode(reader, reader.uint32());
          break;
        case 2:
          message.nonexist = CompressedNonExistenceProof.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseCompressedBatchEntry();
    message.exist = object.exist !== void 0 && object.exist !== null ? CompressedExistenceProof.fromPartial(object.exist) : void 0;
    message.nonexist = object.nonexist !== void 0 && object.nonexist !== null ? CompressedNonExistenceProof.fromPartial(object.nonexist) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseCompressedBatchEntry();
    if (object.exist !== void 0 && object.exist !== null) {
      message.exist = CompressedExistenceProof.fromAmino(object.exist);
    }
    if (object.nonexist !== void 0 && object.nonexist !== null) {
      message.nonexist = CompressedNonExistenceProof.fromAmino(object.nonexist);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.exist = message.exist ? CompressedExistenceProof.toAmino(message.exist) : void 0;
    obj.nonexist = message.nonexist ? CompressedNonExistenceProof.toAmino(message.nonexist) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return CompressedBatchEntry.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/CompressedBatchEntry",
      value: CompressedBatchEntry.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return CompressedBatchEntry.decode(message.value);
  },
  toProto(message) {
    return CompressedBatchEntry.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.ics23.v1.CompressedBatchEntry",
      value: CompressedBatchEntry.encode(message).finish()
    };
  }
};
function createBaseCompressedExistenceProof() {
  return {
    key: new Uint8Array(),
    value: new Uint8Array(),
    leaf: void 0,
    path: []
  };
}
const CompressedExistenceProof = {
  typeUrl: "/cosmos.ics23.v1.CompressedExistenceProof",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.key.length !== 0) {
      writer.uint32(10).bytes(message.key);
    }
    if (message.value.length !== 0) {
      writer.uint32(18).bytes(message.value);
    }
    if (message.leaf !== void 0) {
      LeafOp.encode(message.leaf, writer.uint32(26).fork()).ldelim();
    }
    writer.uint32(34).fork();
    for (const v of message.path) {
      writer.int32(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseCompressedExistenceProof();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.bytes();
          break;
        case 2:
          message.value = reader.bytes();
          break;
        case 3:
          message.leaf = LeafOp.decode(reader, reader.uint32());
          break;
        case 4:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.path.push(reader.int32());
            }
          } else {
            message.path.push(reader.int32());
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
    const message = createBaseCompressedExistenceProof();
    message.key = object.key ?? new Uint8Array();
    message.value = object.value ?? new Uint8Array();
    message.leaf = object.leaf !== void 0 && object.leaf !== null ? LeafOp.fromPartial(object.leaf) : void 0;
    message.path = object.path?.map((e) => e) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseCompressedExistenceProof();
    if (object.key !== void 0 && object.key !== null) {
      message.key = (0, import_helpers.bytesFromBase64)(object.key);
    }
    if (object.value !== void 0 && object.value !== null) {
      message.value = (0, import_helpers.bytesFromBase64)(object.value);
    }
    if (object.leaf !== void 0 && object.leaf !== null) {
      message.leaf = LeafOp.fromAmino(object.leaf);
    }
    message.path = object.path?.map((e) => e) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.key = message.key ? (0, import_helpers.base64FromBytes)(message.key) : void 0;
    obj.value = message.value ? (0, import_helpers.base64FromBytes)(message.value) : void 0;
    obj.leaf = message.leaf ? LeafOp.toAmino(message.leaf) : void 0;
    if (message.path) {
      obj.path = message.path.map((e) => e);
    } else {
      obj.path = message.path;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return CompressedExistenceProof.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/CompressedExistenceProof",
      value: CompressedExistenceProof.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return CompressedExistenceProof.decode(message.value);
  },
  toProto(message) {
    return CompressedExistenceProof.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.ics23.v1.CompressedExistenceProof",
      value: CompressedExistenceProof.encode(message).finish()
    };
  }
};
function createBaseCompressedNonExistenceProof() {
  return {
    key: new Uint8Array(),
    left: void 0,
    right: void 0
  };
}
const CompressedNonExistenceProof = {
  typeUrl: "/cosmos.ics23.v1.CompressedNonExistenceProof",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.key.length !== 0) {
      writer.uint32(10).bytes(message.key);
    }
    if (message.left !== void 0) {
      CompressedExistenceProof.encode(message.left, writer.uint32(18).fork()).ldelim();
    }
    if (message.right !== void 0) {
      CompressedExistenceProof.encode(message.right, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseCompressedNonExistenceProof();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.bytes();
          break;
        case 2:
          message.left = CompressedExistenceProof.decode(reader, reader.uint32());
          break;
        case 3:
          message.right = CompressedExistenceProof.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseCompressedNonExistenceProof();
    message.key = object.key ?? new Uint8Array();
    message.left = object.left !== void 0 && object.left !== null ? CompressedExistenceProof.fromPartial(object.left) : void 0;
    message.right = object.right !== void 0 && object.right !== null ? CompressedExistenceProof.fromPartial(object.right) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseCompressedNonExistenceProof();
    if (object.key !== void 0 && object.key !== null) {
      message.key = (0, import_helpers.bytesFromBase64)(object.key);
    }
    if (object.left !== void 0 && object.left !== null) {
      message.left = CompressedExistenceProof.fromAmino(object.left);
    }
    if (object.right !== void 0 && object.right !== null) {
      message.right = CompressedExistenceProof.fromAmino(object.right);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.key = message.key ? (0, import_helpers.base64FromBytes)(message.key) : void 0;
    obj.left = message.left ? CompressedExistenceProof.toAmino(message.left) : void 0;
    obj.right = message.right ? CompressedExistenceProof.toAmino(message.right) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return CompressedNonExistenceProof.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/CompressedNonExistenceProof",
      value: CompressedNonExistenceProof.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return CompressedNonExistenceProof.decode(message.value);
  },
  toProto(message) {
    return CompressedNonExistenceProof.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.ics23.v1.CompressedNonExistenceProof",
      value: CompressedNonExistenceProof.encode(message).finish()
    };
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  BatchEntry,
  BatchProof,
  CommitmentProof,
  CompressedBatchEntry,
  CompressedBatchProof,
  CompressedExistenceProof,
  CompressedNonExistenceProof,
  ExistenceProof,
  HashOp,
  HashOpAmino,
  HashOpSDKType,
  InnerOp,
  InnerSpec,
  LeafOp,
  LengthOp,
  LengthOpAmino,
  LengthOpSDKType,
  NonExistenceProof,
  ProofSpec,
  hashOpFromJSON,
  hashOpToJSON,
  lengthOpFromJSON,
  lengthOpToJSON
});
