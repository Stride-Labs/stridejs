import { PageRequest, PageResponse } from "../../cosmos/base/query/v1beta1/pagination";
import { EpochInfo } from "./genesis";
import { BinaryReader, BinaryWriter } from "../../binary";
function createBaseQueryEpochsInfoRequest() {
  return {
    pagination: void 0
  };
}
const QueryEpochsInfoRequest = {
  typeUrl: "/stride.epochs.QueryEpochsInfoRequest",
  encode(message, writer = BinaryWriter.create()) {
    if (message.pagination !== void 0) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryEpochsInfoRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryEpochsInfoRequest();
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryEpochsInfoRequest();
    if (object.pagination !== void 0 && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryEpochsInfoRequest.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryEpochsInfoRequest.decode(message.value);
  },
  toProto(message) {
    return QueryEpochsInfoRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.epochs.QueryEpochsInfoRequest",
      value: QueryEpochsInfoRequest.encode(message).finish()
    };
  }
};
function createBaseQueryEpochsInfoResponse() {
  return {
    epochs: [],
    pagination: void 0
  };
}
const QueryEpochsInfoResponse = {
  typeUrl: "/stride.epochs.QueryEpochsInfoResponse",
  encode(message, writer = BinaryWriter.create()) {
    for (const v of message.epochs) {
      EpochInfo.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== void 0) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryEpochsInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.epochs.push(EpochInfo.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryEpochsInfoResponse();
    message.epochs = object.epochs?.map((e) => EpochInfo.fromPartial(e)) || [];
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryEpochsInfoResponse();
    message.epochs = object.epochs?.map((e) => EpochInfo.fromAmino(e)) || [];
    if (object.pagination !== void 0 && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.epochs) {
      obj.epochs = message.epochs.map((e) => e ? EpochInfo.toAmino(e) : void 0);
    } else {
      obj.epochs = message.epochs;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryEpochsInfoResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryEpochsInfoResponse.decode(message.value);
  },
  toProto(message) {
    return QueryEpochsInfoResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.epochs.QueryEpochsInfoResponse",
      value: QueryEpochsInfoResponse.encode(message).finish()
    };
  }
};
function createBaseQueryCurrentEpochRequest() {
  return {
    identifier: ""
  };
}
const QueryCurrentEpochRequest = {
  typeUrl: "/stride.epochs.QueryCurrentEpochRequest",
  encode(message, writer = BinaryWriter.create()) {
    if (message.identifier !== "") {
      writer.uint32(10).string(message.identifier);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryCurrentEpochRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.identifier = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryCurrentEpochRequest();
    message.identifier = object.identifier ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryCurrentEpochRequest();
    if (object.identifier !== void 0 && object.identifier !== null) {
      message.identifier = object.identifier;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.identifier = message.identifier === "" ? void 0 : message.identifier;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryCurrentEpochRequest.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryCurrentEpochRequest.decode(message.value);
  },
  toProto(message) {
    return QueryCurrentEpochRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.epochs.QueryCurrentEpochRequest",
      value: QueryCurrentEpochRequest.encode(message).finish()
    };
  }
};
function createBaseQueryCurrentEpochResponse() {
  return {
    currentEpoch: BigInt(0)
  };
}
const QueryCurrentEpochResponse = {
  typeUrl: "/stride.epochs.QueryCurrentEpochResponse",
  encode(message, writer = BinaryWriter.create()) {
    if (message.currentEpoch !== BigInt(0)) {
      writer.uint32(8).int64(message.currentEpoch);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryCurrentEpochResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.currentEpoch = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryCurrentEpochResponse();
    message.currentEpoch = object.currentEpoch !== void 0 && object.currentEpoch !== null ? BigInt(object.currentEpoch.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryCurrentEpochResponse();
    if (object.current_epoch !== void 0 && object.current_epoch !== null) {
      message.currentEpoch = BigInt(object.current_epoch);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.current_epoch = message.currentEpoch !== BigInt(0) ? message.currentEpoch.toString() : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryCurrentEpochResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryCurrentEpochResponse.decode(message.value);
  },
  toProto(message) {
    return QueryCurrentEpochResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.epochs.QueryCurrentEpochResponse",
      value: QueryCurrentEpochResponse.encode(message).finish()
    };
  }
};
function createBaseQueryEpochInfoRequest() {
  return {
    identifier: ""
  };
}
const QueryEpochInfoRequest = {
  typeUrl: "/stride.epochs.QueryEpochInfoRequest",
  encode(message, writer = BinaryWriter.create()) {
    if (message.identifier !== "") {
      writer.uint32(10).string(message.identifier);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryEpochInfoRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.identifier = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryEpochInfoRequest();
    message.identifier = object.identifier ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryEpochInfoRequest();
    if (object.identifier !== void 0 && object.identifier !== null) {
      message.identifier = object.identifier;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.identifier = message.identifier === "" ? void 0 : message.identifier;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryEpochInfoRequest.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryEpochInfoRequest.decode(message.value);
  },
  toProto(message) {
    return QueryEpochInfoRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.epochs.QueryEpochInfoRequest",
      value: QueryEpochInfoRequest.encode(message).finish()
    };
  }
};
function createBaseQueryEpochInfoResponse() {
  return {
    epoch: EpochInfo.fromPartial({})
  };
}
const QueryEpochInfoResponse = {
  typeUrl: "/stride.epochs.QueryEpochInfoResponse",
  encode(message, writer = BinaryWriter.create()) {
    if (message.epoch !== void 0) {
      EpochInfo.encode(message.epoch, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryEpochInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.epoch = EpochInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryEpochInfoResponse();
    message.epoch = object.epoch !== void 0 && object.epoch !== null ? EpochInfo.fromPartial(object.epoch) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryEpochInfoResponse();
    if (object.epoch !== void 0 && object.epoch !== null) {
      message.epoch = EpochInfo.fromAmino(object.epoch);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.epoch = message.epoch ? EpochInfo.toAmino(message.epoch) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryEpochInfoResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryEpochInfoResponse.decode(message.value);
  },
  toProto(message) {
    return QueryEpochInfoResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.epochs.QueryEpochInfoResponse",
      value: QueryEpochInfoResponse.encode(message).finish()
    };
  }
};
export {
  QueryCurrentEpochRequest,
  QueryCurrentEpochResponse,
  QueryEpochInfoRequest,
  QueryEpochInfoResponse,
  QueryEpochsInfoRequest,
  QueryEpochsInfoResponse
};
