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
var proof_exports = {};
__export(proof_exports, {
  DominoOp: () => DominoOp,
  Proof: () => Proof,
  ProofOp: () => ProofOp,
  ProofOps: () => ProofOps,
  ValueOp: () => ValueOp
});
module.exports = __toCommonJS(proof_exports);
var import_binary = require("../../binary");
var import_helpers = require("../../helpers");
function createBaseProof() {
  return {
    total: BigInt(0),
    index: BigInt(0),
    leafHash: new Uint8Array(),
    aunts: []
  };
}
const Proof = {
  typeUrl: "/tendermint.crypto.Proof",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.total !== BigInt(0)) {
      writer.uint32(8).int64(message.total);
    }
    if (message.index !== BigInt(0)) {
      writer.uint32(16).int64(message.index);
    }
    if (message.leafHash.length !== 0) {
      writer.uint32(26).bytes(message.leafHash);
    }
    for (const v of message.aunts) {
      writer.uint32(34).bytes(v);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseProof();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.total = reader.int64();
          break;
        case 2:
          message.index = reader.int64();
          break;
        case 3:
          message.leafHash = reader.bytes();
          break;
        case 4:
          message.aunts.push(reader.bytes());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseProof();
    message.total = object.total !== void 0 && object.total !== null ? BigInt(object.total.toString()) : BigInt(0);
    message.index = object.index !== void 0 && object.index !== null ? BigInt(object.index.toString()) : BigInt(0);
    message.leafHash = object.leafHash ?? new Uint8Array();
    message.aunts = object.aunts?.map((e) => e) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseProof();
    if (object.total !== void 0 && object.total !== null) {
      message.total = BigInt(object.total);
    }
    if (object.index !== void 0 && object.index !== null) {
      message.index = BigInt(object.index);
    }
    if (object.leaf_hash !== void 0 && object.leaf_hash !== null) {
      message.leafHash = (0, import_helpers.bytesFromBase64)(object.leaf_hash);
    }
    message.aunts = object.aunts?.map((e) => (0, import_helpers.bytesFromBase64)(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.total = message.total !== BigInt(0) ? message.total?.toString() : void 0;
    obj.index = message.index !== BigInt(0) ? message.index?.toString() : void 0;
    obj.leaf_hash = message.leafHash ? (0, import_helpers.base64FromBytes)(message.leafHash) : void 0;
    if (message.aunts) {
      obj.aunts = message.aunts.map((e) => (0, import_helpers.base64FromBytes)(e));
    } else {
      obj.aunts = message.aunts;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return Proof.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return Proof.decode(message.value);
  },
  toProto(message) {
    return Proof.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/tendermint.crypto.Proof",
      value: Proof.encode(message).finish()
    };
  }
};
function createBaseValueOp() {
  return {
    key: new Uint8Array(),
    proof: void 0
  };
}
const ValueOp = {
  typeUrl: "/tendermint.crypto.ValueOp",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.key.length !== 0) {
      writer.uint32(10).bytes(message.key);
    }
    if (message.proof !== void 0) {
      Proof.encode(message.proof, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseValueOp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.bytes();
          break;
        case 2:
          message.proof = Proof.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseValueOp();
    message.key = object.key ?? new Uint8Array();
    message.proof = object.proof !== void 0 && object.proof !== null ? Proof.fromPartial(object.proof) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseValueOp();
    if (object.key !== void 0 && object.key !== null) {
      message.key = (0, import_helpers.bytesFromBase64)(object.key);
    }
    if (object.proof !== void 0 && object.proof !== null) {
      message.proof = Proof.fromAmino(object.proof);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.key = message.key ? (0, import_helpers.base64FromBytes)(message.key) : void 0;
    obj.proof = message.proof ? Proof.toAmino(message.proof) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return ValueOp.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return ValueOp.decode(message.value);
  },
  toProto(message) {
    return ValueOp.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/tendermint.crypto.ValueOp",
      value: ValueOp.encode(message).finish()
    };
  }
};
function createBaseDominoOp() {
  return {
    key: "",
    input: "",
    output: ""
  };
}
const DominoOp = {
  typeUrl: "/tendermint.crypto.DominoOp",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.input !== "") {
      writer.uint32(18).string(message.input);
    }
    if (message.output !== "") {
      writer.uint32(26).string(message.output);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseDominoOp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.input = reader.string();
          break;
        case 3:
          message.output = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseDominoOp();
    message.key = object.key ?? "";
    message.input = object.input ?? "";
    message.output = object.output ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseDominoOp();
    if (object.key !== void 0 && object.key !== null) {
      message.key = object.key;
    }
    if (object.input !== void 0 && object.input !== null) {
      message.input = object.input;
    }
    if (object.output !== void 0 && object.output !== null) {
      message.output = object.output;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.key = message.key === "" ? void 0 : message.key;
    obj.input = message.input === "" ? void 0 : message.input;
    obj.output = message.output === "" ? void 0 : message.output;
    return obj;
  },
  fromAminoMsg(object) {
    return DominoOp.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return DominoOp.decode(message.value);
  },
  toProto(message) {
    return DominoOp.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/tendermint.crypto.DominoOp",
      value: DominoOp.encode(message).finish()
    };
  }
};
function createBaseProofOp() {
  return {
    type: "",
    key: new Uint8Array(),
    data: new Uint8Array()
  };
}
const ProofOp = {
  typeUrl: "/tendermint.crypto.ProofOp",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.type !== "") {
      writer.uint32(10).string(message.type);
    }
    if (message.key.length !== 0) {
      writer.uint32(18).bytes(message.key);
    }
    if (message.data.length !== 0) {
      writer.uint32(26).bytes(message.data);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseProofOp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.string();
          break;
        case 2:
          message.key = reader.bytes();
          break;
        case 3:
          message.data = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseProofOp();
    message.type = object.type ?? "";
    message.key = object.key ?? new Uint8Array();
    message.data = object.data ?? new Uint8Array();
    return message;
  },
  fromAmino(object) {
    const message = createBaseProofOp();
    if (object.type !== void 0 && object.type !== null) {
      message.type = object.type;
    }
    if (object.key !== void 0 && object.key !== null) {
      message.key = (0, import_helpers.bytesFromBase64)(object.key);
    }
    if (object.data !== void 0 && object.data !== null) {
      message.data = (0, import_helpers.bytesFromBase64)(object.data);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.type = message.type === "" ? void 0 : message.type;
    obj.key = message.key ? (0, import_helpers.base64FromBytes)(message.key) : void 0;
    obj.data = message.data ? (0, import_helpers.base64FromBytes)(message.data) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return ProofOp.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return ProofOp.decode(message.value);
  },
  toProto(message) {
    return ProofOp.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/tendermint.crypto.ProofOp",
      value: ProofOp.encode(message).finish()
    };
  }
};
function createBaseProofOps() {
  return {
    ops: []
  };
}
const ProofOps = {
  typeUrl: "/tendermint.crypto.ProofOps",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    for (const v of message.ops) {
      ProofOp.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseProofOps();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ops.push(ProofOp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseProofOps();
    message.ops = object.ops?.map((e) => ProofOp.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseProofOps();
    message.ops = object.ops?.map((e) => ProofOp.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.ops) {
      obj.ops = message.ops.map((e) => e ? ProofOp.toAmino(e) : void 0);
    } else {
      obj.ops = message.ops;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return ProofOps.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return ProofOps.decode(message.value);
  },
  toProto(message) {
    return ProofOps.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/tendermint.crypto.ProofOps",
      value: ProofOps.encode(message).finish()
    };
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  DominoOp,
  Proof,
  ProofOp,
  ProofOps,
  ValueOp
});
