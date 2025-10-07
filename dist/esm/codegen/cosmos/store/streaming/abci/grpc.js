import { RequestFinalizeBlock, ResponseFinalizeBlock, ResponseCommit } from "../../../../tendermint/abci/types";
import { StoreKVPair } from "../../v1beta1/listening";
import { BinaryReader, BinaryWriter } from "../../../../binary";
function createBaseListenFinalizeBlockRequest() {
  return {
    req: void 0,
    res: void 0
  };
}
const ListenFinalizeBlockRequest = {
  typeUrl: "/cosmos.store.streaming.abci.ListenFinalizeBlockRequest",
  encode(message, writer = BinaryWriter.create()) {
    if (message.req !== void 0) {
      RequestFinalizeBlock.encode(message.req, writer.uint32(10).fork()).ldelim();
    }
    if (message.res !== void 0) {
      ResponseFinalizeBlock.encode(message.res, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseListenFinalizeBlockRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.req = RequestFinalizeBlock.decode(reader, reader.uint32());
          break;
        case 2:
          message.res = ResponseFinalizeBlock.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseListenFinalizeBlockRequest();
    message.req = object.req !== void 0 && object.req !== null ? RequestFinalizeBlock.fromPartial(object.req) : void 0;
    message.res = object.res !== void 0 && object.res !== null ? ResponseFinalizeBlock.fromPartial(object.res) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseListenFinalizeBlockRequest();
    if (object.req !== void 0 && object.req !== null) {
      message.req = RequestFinalizeBlock.fromAmino(object.req);
    }
    if (object.res !== void 0 && object.res !== null) {
      message.res = ResponseFinalizeBlock.fromAmino(object.res);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.req = message.req ? RequestFinalizeBlock.toAmino(message.req) : void 0;
    obj.res = message.res ? ResponseFinalizeBlock.toAmino(message.res) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return ListenFinalizeBlockRequest.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/ListenFinalizeBlockRequest",
      value: ListenFinalizeBlockRequest.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return ListenFinalizeBlockRequest.decode(message.value);
  },
  toProto(message) {
    return ListenFinalizeBlockRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.store.streaming.abci.ListenFinalizeBlockRequest",
      value: ListenFinalizeBlockRequest.encode(message).finish()
    };
  }
};
function createBaseListenFinalizeBlockResponse() {
  return {};
}
const ListenFinalizeBlockResponse = {
  typeUrl: "/cosmos.store.streaming.abci.ListenFinalizeBlockResponse",
  encode(_, writer = BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseListenFinalizeBlockResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_) {
    const message = createBaseListenFinalizeBlockResponse();
    return message;
  },
  fromAmino(_) {
    const message = createBaseListenFinalizeBlockResponse();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return ListenFinalizeBlockResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/ListenFinalizeBlockResponse",
      value: ListenFinalizeBlockResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return ListenFinalizeBlockResponse.decode(message.value);
  },
  toProto(message) {
    return ListenFinalizeBlockResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.store.streaming.abci.ListenFinalizeBlockResponse",
      value: ListenFinalizeBlockResponse.encode(message).finish()
    };
  }
};
function createBaseListenCommitRequest() {
  return {
    blockHeight: BigInt(0),
    res: void 0,
    changeSet: []
  };
}
const ListenCommitRequest = {
  typeUrl: "/cosmos.store.streaming.abci.ListenCommitRequest",
  encode(message, writer = BinaryWriter.create()) {
    if (message.blockHeight !== BigInt(0)) {
      writer.uint32(8).int64(message.blockHeight);
    }
    if (message.res !== void 0) {
      ResponseCommit.encode(message.res, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.changeSet) {
      StoreKVPair.encode(v, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseListenCommitRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.blockHeight = reader.int64();
          break;
        case 2:
          message.res = ResponseCommit.decode(reader, reader.uint32());
          break;
        case 3:
          message.changeSet.push(StoreKVPair.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseListenCommitRequest();
    message.blockHeight = object.blockHeight !== void 0 && object.blockHeight !== null ? BigInt(object.blockHeight.toString()) : BigInt(0);
    message.res = object.res !== void 0 && object.res !== null ? ResponseCommit.fromPartial(object.res) : void 0;
    message.changeSet = object.changeSet?.map((e) => StoreKVPair.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseListenCommitRequest();
    if (object.block_height !== void 0 && object.block_height !== null) {
      message.blockHeight = BigInt(object.block_height);
    }
    if (object.res !== void 0 && object.res !== null) {
      message.res = ResponseCommit.fromAmino(object.res);
    }
    message.changeSet = object.change_set?.map((e) => StoreKVPair.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.block_height = message.blockHeight !== BigInt(0) ? message.blockHeight?.toString() : void 0;
    obj.res = message.res ? ResponseCommit.toAmino(message.res) : void 0;
    if (message.changeSet) {
      obj.change_set = message.changeSet.map((e) => e ? StoreKVPair.toAmino(e) : void 0);
    } else {
      obj.change_set = message.changeSet;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return ListenCommitRequest.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/ListenCommitRequest",
      value: ListenCommitRequest.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return ListenCommitRequest.decode(message.value);
  },
  toProto(message) {
    return ListenCommitRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.store.streaming.abci.ListenCommitRequest",
      value: ListenCommitRequest.encode(message).finish()
    };
  }
};
function createBaseListenCommitResponse() {
  return {};
}
const ListenCommitResponse = {
  typeUrl: "/cosmos.store.streaming.abci.ListenCommitResponse",
  encode(_, writer = BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseListenCommitResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_) {
    const message = createBaseListenCommitResponse();
    return message;
  },
  fromAmino(_) {
    const message = createBaseListenCommitResponse();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return ListenCommitResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/ListenCommitResponse",
      value: ListenCommitResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return ListenCommitResponse.decode(message.value);
  },
  toProto(message) {
    return ListenCommitResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.store.streaming.abci.ListenCommitResponse",
      value: ListenCommitResponse.encode(message).finish()
    };
  }
};
export {
  ListenCommitRequest,
  ListenCommitResponse,
  ListenFinalizeBlockRequest,
  ListenFinalizeBlockResponse
};
