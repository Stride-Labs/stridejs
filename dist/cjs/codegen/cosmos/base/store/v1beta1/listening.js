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
  BlockMetadata_DeliverTx: () => BlockMetadata_DeliverTx,
  StoreKVPair: () => StoreKVPair
});
module.exports = __toCommonJS(listening_exports);
var import_types = require("../../../../tendermint/abci/types");
var import_binary = require("../../../../binary");
var import_helpers = require("../../../../helpers");
function createBaseStoreKVPair() {
  return {
    storeKey: "",
    delete: false,
    key: new Uint8Array(),
    value: new Uint8Array()
  };
}
const StoreKVPair = {
  typeUrl: "/cosmos.base.store.v1beta1.StoreKVPair",
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
      typeUrl: "/cosmos.base.store.v1beta1.StoreKVPair",
      value: StoreKVPair.encode(message).finish()
    };
  }
};
function createBaseBlockMetadata() {
  return {
    requestBeginBlock: void 0,
    responseBeginBlock: void 0,
    deliverTxs: [],
    requestEndBlock: void 0,
    responseEndBlock: void 0,
    responseCommit: void 0
  };
}
const BlockMetadata = {
  typeUrl: "/cosmos.base.store.v1beta1.BlockMetadata",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.requestBeginBlock !== void 0) {
      import_types.RequestBeginBlock.encode(message.requestBeginBlock, writer.uint32(10).fork()).ldelim();
    }
    if (message.responseBeginBlock !== void 0) {
      import_types.ResponseBeginBlock.encode(message.responseBeginBlock, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.deliverTxs) {
      BlockMetadata_DeliverTx.encode(v, writer.uint32(26).fork()).ldelim();
    }
    if (message.requestEndBlock !== void 0) {
      import_types.RequestEndBlock.encode(message.requestEndBlock, writer.uint32(34).fork()).ldelim();
    }
    if (message.responseEndBlock !== void 0) {
      import_types.ResponseEndBlock.encode(message.responseEndBlock, writer.uint32(42).fork()).ldelim();
    }
    if (message.responseCommit !== void 0) {
      import_types.ResponseCommit.encode(message.responseCommit, writer.uint32(50).fork()).ldelim();
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
        case 1:
          message.requestBeginBlock = import_types.RequestBeginBlock.decode(reader, reader.uint32());
          break;
        case 2:
          message.responseBeginBlock = import_types.ResponseBeginBlock.decode(reader, reader.uint32());
          break;
        case 3:
          message.deliverTxs.push(BlockMetadata_DeliverTx.decode(reader, reader.uint32()));
          break;
        case 4:
          message.requestEndBlock = import_types.RequestEndBlock.decode(reader, reader.uint32());
          break;
        case 5:
          message.responseEndBlock = import_types.ResponseEndBlock.decode(reader, reader.uint32());
          break;
        case 6:
          message.responseCommit = import_types.ResponseCommit.decode(reader, reader.uint32());
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
    message.requestBeginBlock = object.requestBeginBlock !== void 0 && object.requestBeginBlock !== null ? import_types.RequestBeginBlock.fromPartial(object.requestBeginBlock) : void 0;
    message.responseBeginBlock = object.responseBeginBlock !== void 0 && object.responseBeginBlock !== null ? import_types.ResponseBeginBlock.fromPartial(object.responseBeginBlock) : void 0;
    message.deliverTxs = object.deliverTxs?.map((e) => BlockMetadata_DeliverTx.fromPartial(e)) || [];
    message.requestEndBlock = object.requestEndBlock !== void 0 && object.requestEndBlock !== null ? import_types.RequestEndBlock.fromPartial(object.requestEndBlock) : void 0;
    message.responseEndBlock = object.responseEndBlock !== void 0 && object.responseEndBlock !== null ? import_types.ResponseEndBlock.fromPartial(object.responseEndBlock) : void 0;
    message.responseCommit = object.responseCommit !== void 0 && object.responseCommit !== null ? import_types.ResponseCommit.fromPartial(object.responseCommit) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseBlockMetadata();
    if (object.request_begin_block !== void 0 && object.request_begin_block !== null) {
      message.requestBeginBlock = import_types.RequestBeginBlock.fromAmino(object.request_begin_block);
    }
    if (object.response_begin_block !== void 0 && object.response_begin_block !== null) {
      message.responseBeginBlock = import_types.ResponseBeginBlock.fromAmino(object.response_begin_block);
    }
    message.deliverTxs = object.deliver_txs?.map((e) => BlockMetadata_DeliverTx.fromAmino(e)) || [];
    if (object.request_end_block !== void 0 && object.request_end_block !== null) {
      message.requestEndBlock = import_types.RequestEndBlock.fromAmino(object.request_end_block);
    }
    if (object.response_end_block !== void 0 && object.response_end_block !== null) {
      message.responseEndBlock = import_types.ResponseEndBlock.fromAmino(object.response_end_block);
    }
    if (object.response_commit !== void 0 && object.response_commit !== null) {
      message.responseCommit = import_types.ResponseCommit.fromAmino(object.response_commit);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.request_begin_block = message.requestBeginBlock ? import_types.RequestBeginBlock.toAmino(message.requestBeginBlock) : void 0;
    obj.response_begin_block = message.responseBeginBlock ? import_types.ResponseBeginBlock.toAmino(message.responseBeginBlock) : void 0;
    if (message.deliverTxs) {
      obj.deliver_txs = message.deliverTxs.map((e) => e ? BlockMetadata_DeliverTx.toAmino(e) : void 0);
    } else {
      obj.deliver_txs = message.deliverTxs;
    }
    obj.request_end_block = message.requestEndBlock ? import_types.RequestEndBlock.toAmino(message.requestEndBlock) : void 0;
    obj.response_end_block = message.responseEndBlock ? import_types.ResponseEndBlock.toAmino(message.responseEndBlock) : void 0;
    obj.response_commit = message.responseCommit ? import_types.ResponseCommit.toAmino(message.responseCommit) : void 0;
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
      typeUrl: "/cosmos.base.store.v1beta1.BlockMetadata",
      value: BlockMetadata.encode(message).finish()
    };
  }
};
function createBaseBlockMetadata_DeliverTx() {
  return {
    request: void 0,
    response: void 0
  };
}
const BlockMetadata_DeliverTx = {
  typeUrl: "/cosmos.base.store.v1beta1.DeliverTx",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.request !== void 0) {
      import_types.RequestDeliverTx.encode(message.request, writer.uint32(10).fork()).ldelim();
    }
    if (message.response !== void 0) {
      import_types.ResponseDeliverTx.encode(message.response, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseBlockMetadata_DeliverTx();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.request = import_types.RequestDeliverTx.decode(reader, reader.uint32());
          break;
        case 2:
          message.response = import_types.ResponseDeliverTx.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseBlockMetadata_DeliverTx();
    message.request = object.request !== void 0 && object.request !== null ? import_types.RequestDeliverTx.fromPartial(object.request) : void 0;
    message.response = object.response !== void 0 && object.response !== null ? import_types.ResponseDeliverTx.fromPartial(object.response) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseBlockMetadata_DeliverTx();
    if (object.request !== void 0 && object.request !== null) {
      message.request = import_types.RequestDeliverTx.fromAmino(object.request);
    }
    if (object.response !== void 0 && object.response !== null) {
      message.response = import_types.ResponseDeliverTx.fromAmino(object.response);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.request = message.request ? import_types.RequestDeliverTx.toAmino(message.request) : void 0;
    obj.response = message.response ? import_types.ResponseDeliverTx.toAmino(message.response) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return BlockMetadata_DeliverTx.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/DeliverTx",
      value: BlockMetadata_DeliverTx.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return BlockMetadata_DeliverTx.decode(message.value);
  },
  toProto(message) {
    return BlockMetadata_DeliverTx.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.base.store.v1beta1.DeliverTx",
      value: BlockMetadata_DeliverTx.encode(message).finish()
    };
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  BlockMetadata,
  BlockMetadata_DeliverTx,
  StoreKVPair
});
