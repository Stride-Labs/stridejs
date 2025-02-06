import { RequestDeliverTx, ResponseDeliverTx, RequestBeginBlock, ResponseBeginBlock, RequestEndBlock, ResponseEndBlock, ResponseCommit } from "../../../../tendermint/abci/types";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { bytesFromBase64, base64FromBytes } from "../../../../helpers";
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
  encode(message, writer = BinaryWriter.create()) {
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
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
      message.key = bytesFromBase64(object.key);
    }
    if (object.value !== void 0 && object.value !== null) {
      message.value = bytesFromBase64(object.value);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.store_key = message.storeKey === "" ? void 0 : message.storeKey;
    obj.delete = message.delete === false ? void 0 : message.delete;
    obj.key = message.key ? base64FromBytes(message.key) : void 0;
    obj.value = message.value ? base64FromBytes(message.value) : void 0;
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
  encode(message, writer = BinaryWriter.create()) {
    if (message.requestBeginBlock !== void 0) {
      RequestBeginBlock.encode(message.requestBeginBlock, writer.uint32(10).fork()).ldelim();
    }
    if (message.responseBeginBlock !== void 0) {
      ResponseBeginBlock.encode(message.responseBeginBlock, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.deliverTxs) {
      BlockMetadata_DeliverTx.encode(v, writer.uint32(26).fork()).ldelim();
    }
    if (message.requestEndBlock !== void 0) {
      RequestEndBlock.encode(message.requestEndBlock, writer.uint32(34).fork()).ldelim();
    }
    if (message.responseEndBlock !== void 0) {
      ResponseEndBlock.encode(message.responseEndBlock, writer.uint32(42).fork()).ldelim();
    }
    if (message.responseCommit !== void 0) {
      ResponseCommit.encode(message.responseCommit, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseBlockMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.requestBeginBlock = RequestBeginBlock.decode(reader, reader.uint32());
          break;
        case 2:
          message.responseBeginBlock = ResponseBeginBlock.decode(reader, reader.uint32());
          break;
        case 3:
          message.deliverTxs.push(BlockMetadata_DeliverTx.decode(reader, reader.uint32()));
          break;
        case 4:
          message.requestEndBlock = RequestEndBlock.decode(reader, reader.uint32());
          break;
        case 5:
          message.responseEndBlock = ResponseEndBlock.decode(reader, reader.uint32());
          break;
        case 6:
          message.responseCommit = ResponseCommit.decode(reader, reader.uint32());
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
    message.requestBeginBlock = object.requestBeginBlock !== void 0 && object.requestBeginBlock !== null ? RequestBeginBlock.fromPartial(object.requestBeginBlock) : void 0;
    message.responseBeginBlock = object.responseBeginBlock !== void 0 && object.responseBeginBlock !== null ? ResponseBeginBlock.fromPartial(object.responseBeginBlock) : void 0;
    message.deliverTxs = object.deliverTxs?.map((e) => BlockMetadata_DeliverTx.fromPartial(e)) || [];
    message.requestEndBlock = object.requestEndBlock !== void 0 && object.requestEndBlock !== null ? RequestEndBlock.fromPartial(object.requestEndBlock) : void 0;
    message.responseEndBlock = object.responseEndBlock !== void 0 && object.responseEndBlock !== null ? ResponseEndBlock.fromPartial(object.responseEndBlock) : void 0;
    message.responseCommit = object.responseCommit !== void 0 && object.responseCommit !== null ? ResponseCommit.fromPartial(object.responseCommit) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseBlockMetadata();
    if (object.request_begin_block !== void 0 && object.request_begin_block !== null) {
      message.requestBeginBlock = RequestBeginBlock.fromAmino(object.request_begin_block);
    }
    if (object.response_begin_block !== void 0 && object.response_begin_block !== null) {
      message.responseBeginBlock = ResponseBeginBlock.fromAmino(object.response_begin_block);
    }
    message.deliverTxs = object.deliver_txs?.map((e) => BlockMetadata_DeliverTx.fromAmino(e)) || [];
    if (object.request_end_block !== void 0 && object.request_end_block !== null) {
      message.requestEndBlock = RequestEndBlock.fromAmino(object.request_end_block);
    }
    if (object.response_end_block !== void 0 && object.response_end_block !== null) {
      message.responseEndBlock = ResponseEndBlock.fromAmino(object.response_end_block);
    }
    if (object.response_commit !== void 0 && object.response_commit !== null) {
      message.responseCommit = ResponseCommit.fromAmino(object.response_commit);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.request_begin_block = message.requestBeginBlock ? RequestBeginBlock.toAmino(message.requestBeginBlock) : void 0;
    obj.response_begin_block = message.responseBeginBlock ? ResponseBeginBlock.toAmino(message.responseBeginBlock) : void 0;
    if (message.deliverTxs) {
      obj.deliver_txs = message.deliverTxs.map((e) => e ? BlockMetadata_DeliverTx.toAmino(e) : void 0);
    } else {
      obj.deliver_txs = message.deliverTxs;
    }
    obj.request_end_block = message.requestEndBlock ? RequestEndBlock.toAmino(message.requestEndBlock) : void 0;
    obj.response_end_block = message.responseEndBlock ? ResponseEndBlock.toAmino(message.responseEndBlock) : void 0;
    obj.response_commit = message.responseCommit ? ResponseCommit.toAmino(message.responseCommit) : void 0;
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
  encode(message, writer = BinaryWriter.create()) {
    if (message.request !== void 0) {
      RequestDeliverTx.encode(message.request, writer.uint32(10).fork()).ldelim();
    }
    if (message.response !== void 0) {
      ResponseDeliverTx.encode(message.response, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseBlockMetadata_DeliverTx();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.request = RequestDeliverTx.decode(reader, reader.uint32());
          break;
        case 2:
          message.response = ResponseDeliverTx.decode(reader, reader.uint32());
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
    message.request = object.request !== void 0 && object.request !== null ? RequestDeliverTx.fromPartial(object.request) : void 0;
    message.response = object.response !== void 0 && object.response !== null ? ResponseDeliverTx.fromPartial(object.response) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseBlockMetadata_DeliverTx();
    if (object.request !== void 0 && object.request !== null) {
      message.request = RequestDeliverTx.fromAmino(object.request);
    }
    if (object.response !== void 0 && object.response !== null) {
      message.response = ResponseDeliverTx.fromAmino(object.response);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.request = message.request ? RequestDeliverTx.toAmino(message.request) : void 0;
    obj.response = message.response ? ResponseDeliverTx.toAmino(message.response) : void 0;
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
export {
  BlockMetadata,
  BlockMetadata_DeliverTx,
  StoreKVPair
};
