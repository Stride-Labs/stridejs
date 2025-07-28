"use strict";
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
var commitment_exports = {};
__export(commitment_exports, {
  MerklePath: () => MerklePath,
  MerklePrefix: () => MerklePrefix,
  MerkleProof: () => MerkleProof,
  MerkleRoot: () => MerkleRoot
});
module.exports = __toCommonJS(commitment_exports);
var import_proofs = require("../../../../cosmos/ics23/v1/proofs");
var import_binary = require("../../../../binary");
var import_helpers = require("../../../../helpers");
function createBaseMerkleRoot() {
  return {
    hash: new Uint8Array()
  };
}
const MerkleRoot = {
  typeUrl: "/ibc.core.commitment.v1.MerkleRoot",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.hash.length !== 0) {
      writer.uint32(10).bytes(message.hash);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMerkleRoot();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hash = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMerkleRoot();
    message.hash = object.hash ?? new Uint8Array();
    return message;
  },
  fromAmino(object) {
    const message = createBaseMerkleRoot();
    if (object.hash !== void 0 && object.hash !== null) {
      message.hash = (0, import_helpers.bytesFromBase64)(object.hash);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.hash = message.hash ? (0, import_helpers.base64FromBytes)(message.hash) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return MerkleRoot.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MerkleRoot",
      value: MerkleRoot.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MerkleRoot.decode(message.value);
  },
  toProto(message) {
    return MerkleRoot.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.core.commitment.v1.MerkleRoot",
      value: MerkleRoot.encode(message).finish()
    };
  }
};
function createBaseMerklePrefix() {
  return {
    keyPrefix: new Uint8Array()
  };
}
const MerklePrefix = {
  typeUrl: "/ibc.core.commitment.v1.MerklePrefix",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.keyPrefix.length !== 0) {
      writer.uint32(10).bytes(message.keyPrefix);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMerklePrefix();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.keyPrefix = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMerklePrefix();
    message.keyPrefix = object.keyPrefix ?? new Uint8Array();
    return message;
  },
  fromAmino(object) {
    const message = createBaseMerklePrefix();
    if (object.key_prefix !== void 0 && object.key_prefix !== null) {
      message.keyPrefix = (0, import_helpers.bytesFromBase64)(object.key_prefix);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.key_prefix = message.keyPrefix ? (0, import_helpers.base64FromBytes)(message.keyPrefix) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return MerklePrefix.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MerklePrefix",
      value: MerklePrefix.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MerklePrefix.decode(message.value);
  },
  toProto(message) {
    return MerklePrefix.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.core.commitment.v1.MerklePrefix",
      value: MerklePrefix.encode(message).finish()
    };
  }
};
function createBaseMerklePath() {
  return {
    keyPath: []
  };
}
const MerklePath = {
  typeUrl: "/ibc.core.commitment.v1.MerklePath",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    for (const v of message.keyPath) {
      writer.uint32(10).string(v);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMerklePath();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.keyPath.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMerklePath();
    message.keyPath = object.keyPath?.map((e) => e) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseMerklePath();
    message.keyPath = object.key_path?.map((e) => e) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.keyPath) {
      obj.key_path = message.keyPath.map((e) => e);
    } else {
      obj.key_path = message.keyPath;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return MerklePath.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MerklePath",
      value: MerklePath.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MerklePath.decode(message.value);
  },
  toProto(message) {
    return MerklePath.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.core.commitment.v1.MerklePath",
      value: MerklePath.encode(message).finish()
    };
  }
};
function createBaseMerkleProof() {
  return {
    proofs: []
  };
}
const MerkleProof = {
  typeUrl: "/ibc.core.commitment.v1.MerkleProof",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    for (const v of message.proofs) {
      import_proofs.CommitmentProof.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMerkleProof();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proofs.push(import_proofs.CommitmentProof.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMerkleProof();
    message.proofs = object.proofs?.map((e) => import_proofs.CommitmentProof.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseMerkleProof();
    message.proofs = object.proofs?.map((e) => import_proofs.CommitmentProof.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.proofs) {
      obj.proofs = message.proofs.map((e) => e ? import_proofs.CommitmentProof.toAmino(e) : void 0);
    } else {
      obj.proofs = message.proofs;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return MerkleProof.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MerkleProof",
      value: MerkleProof.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MerkleProof.decode(message.value);
  },
  toProto(message) {
    return MerkleProof.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.core.commitment.v1.MerkleProof",
      value: MerkleProof.encode(message).finish()
    };
  }
};
// Proper CommonJS exports for dynamic imports
module.exports = {
  MerklePath,
  MerklePrefix,
  MerkleProof,
  MerkleRoot
};
