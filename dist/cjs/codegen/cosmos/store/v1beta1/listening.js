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
var listening_exports = {};
__export(listening_exports, {
  BlockMetadata: () => BlockMetadata,
  StoreKVPair: () => StoreKVPair
});
module.exports = __toCommonJS(listening_exports);
var import_types = require("../../../tendermint/abci/types");
var import_binary = require("../../../binary");
var import_helpers = require("../../../helpers");
function createBaseStoreKVPair() {
  return {
    storeKey: "",
    delete: false,
    key: new Uint8Array(),
    value: new Uint8Array()
  };
}
const StoreKVPair = {
  typeUrl: "/cosmos.store.v1beta1.StoreKVPair",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.storeKey !== "") {
      writer.uint32(10).string(message.storeKey);
    }
    if (message.delete === true) {
      writer.uint32(16).bool(message.delete);
    }
    if (message.key.length !== 0) {
      writer.uint32(26).bytes(message.key);
    }
    if (message.value.length !== 0) {
      writer.uint32(34).bytes(message.value);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseStoreKVPair();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.storeKey = reader.string();
          break;
        case 2:
          message.delete = reader.bool();
          break;
        case 3:
          message.key = reader.bytes();
          break;
        case 4:
          message.value = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseStoreKVPair();
    message.storeKey = object.storeKey ?? "";
    message.delete = object.delete ?? false;
    message.key = object.key ?? new Uint8Array();
    message.value = object.value ?? new Uint8Array();
    return message;
  },
  fromAmino(object) {
    const message = createBaseStoreKVPair();
    if (object.store_key !== void 0 && object.store_key !== null) {
      message.storeKey = object.store_key;
    }
    if (object.delete !== void 0 && object.delete !== null) {
      message.delete = object.delete;
    }
    if (object.key !== void 0 && object.key !== null) {
      message.key = (0, import_helpers.bytesFromBase64)(object.key);
    }
    if (object.value !== void 0 && object.value !== null) {
      message.value = (0, import_helpers.bytesFromBase64)(object.value);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.store_key = message.storeKey === "" ? void 0 : message.storeKey;
    obj.delete = message.delete === false ? void 0 : message.delete;
    obj.key = message.key ? (0, import_helpers.base64FromBytes)(message.key) : void 0;
    obj.value = message.value ? (0, import_helpers.base64FromBytes)(message.value) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return StoreKVPair.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/StoreKVPair",
      value: StoreKVPair.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return StoreKVPair.decode(message.value);
  },
  toProto(message) {
    return StoreKVPair.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.store.v1beta1.StoreKVPair",
      value: StoreKVPair.encode(message).finish()
    };
  }
};
function createBaseBlockMetadata() {
  return {
    responseCommit: void 0,
    requestFinalizeBlock: void 0,
    responseFinalizeBlock: void 0
  };
}
const BlockMetadata = {
  typeUrl: "/cosmos.store.v1beta1.BlockMetadata",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.responseCommit !== void 0) {
      import_types.ResponseCommit.encode(message.responseCommit, writer.uint32(50).fork()).ldelim();
    }
    if (message.requestFinalizeBlock !== void 0) {
      import_types.RequestFinalizeBlock.encode(message.requestFinalizeBlock, writer.uint32(58).fork()).ldelim();
    }
    if (message.responseFinalizeBlock !== void 0) {
      import_types.ResponseFinalizeBlock.encode(message.responseFinalizeBlock, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseBlockMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 6:
          message.responseCommit = import_types.ResponseCommit.decode(reader, reader.uint32());
          break;
        case 7:
          message.requestFinalizeBlock = import_types.RequestFinalizeBlock.decode(reader, reader.uint32());
          break;
        case 8:
          message.responseFinalizeBlock = import_types.ResponseFinalizeBlock.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseBlockMetadata();
    message.responseCommit = object.responseCommit !== void 0 && object.responseCommit !== null ? import_types.ResponseCommit.fromPartial(object.responseCommit) : void 0;
    message.requestFinalizeBlock = object.requestFinalizeBlock !== void 0 && object.requestFinalizeBlock !== null ? import_types.RequestFinalizeBlock.fromPartial(object.requestFinalizeBlock) : void 0;
    message.responseFinalizeBlock = object.responseFinalizeBlock !== void 0 && object.responseFinalizeBlock !== null ? import_types.ResponseFinalizeBlock.fromPartial(object.responseFinalizeBlock) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseBlockMetadata();
    if (object.response_commit !== void 0 && object.response_commit !== null) {
      message.responseCommit = import_types.ResponseCommit.fromAmino(object.response_commit);
    }
    if (object.request_finalize_block !== void 0 && object.request_finalize_block !== null) {
      message.requestFinalizeBlock = import_types.RequestFinalizeBlock.fromAmino(object.request_finalize_block);
    }
    if (object.response_finalize_block !== void 0 && object.response_finalize_block !== null) {
      message.responseFinalizeBlock = import_types.ResponseFinalizeBlock.fromAmino(object.response_finalize_block);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.response_commit = message.responseCommit ? import_types.ResponseCommit.toAmino(message.responseCommit) : void 0;
    obj.request_finalize_block = message.requestFinalizeBlock ? import_types.RequestFinalizeBlock.toAmino(message.requestFinalizeBlock) : void 0;
    obj.response_finalize_block = message.responseFinalizeBlock ? import_types.ResponseFinalizeBlock.toAmino(message.responseFinalizeBlock) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return BlockMetadata.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/BlockMetadata",
      value: BlockMetadata.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return BlockMetadata.decode(message.value);
  },
  toProto(message) {
    return BlockMetadata.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.store.v1beta1.BlockMetadata",
      value: BlockMetadata.encode(message).finish()
    };
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  BlockMetadata,
  StoreKVPair
});
