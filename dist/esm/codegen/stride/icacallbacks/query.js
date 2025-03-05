import { PageRequest, PageResponse } from "../../cosmos/base/query/v1beta1/pagination";
import { Params } from "./params";
import { CallbackData } from "./callback_data";
import { BinaryReader, BinaryWriter } from "../../binary";
function createBaseQueryParamsRequest() {
  return {};
}
const QueryParamsRequest = {
  typeUrl: "/stride.icacallbacks.QueryParamsRequest",
  encode(_, writer = BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
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
    const message = createBaseQueryParamsRequest();
    return message;
  },
  fromAmino(_) {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return QueryParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryParamsRequest.decode(message.value);
  },
  toProto(message) {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.icacallbacks.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryParamsResponse() {
  return {
    params: Params.fromPartial({})
  };
}
const QueryParamsResponse = {
  typeUrl: "/stride.icacallbacks.QueryParamsResponse",
  encode(message, writer = BinaryWriter.create()) {
    if (message.params !== void 0) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== void 0 && object.params !== null ? Params.fromPartial(object.params) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryParamsResponse();
    if (object.params !== void 0 && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.params = message.params ? Params.toAmino(message.params) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message) {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.icacallbacks.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetCallbackDataRequest() {
  return {
    callbackKey: ""
  };
}
const QueryGetCallbackDataRequest = {
  typeUrl: "/stride.icacallbacks.QueryGetCallbackDataRequest",
  encode(message, writer = BinaryWriter.create()) {
    if (message.callbackKey !== "") {
      writer.uint32(10).string(message.callbackKey);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryGetCallbackDataRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.callbackKey = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryGetCallbackDataRequest();
    message.callbackKey = object.callbackKey ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryGetCallbackDataRequest();
    if (object.callback_key !== void 0 && object.callback_key !== null) {
      message.callbackKey = object.callback_key;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.callback_key = message.callbackKey === "" ? void 0 : message.callbackKey;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryGetCallbackDataRequest.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryGetCallbackDataRequest.decode(message.value);
  },
  toProto(message) {
    return QueryGetCallbackDataRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.icacallbacks.QueryGetCallbackDataRequest",
      value: QueryGetCallbackDataRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetCallbackDataResponse() {
  return {
    callbackData: CallbackData.fromPartial({})
  };
}
const QueryGetCallbackDataResponse = {
  typeUrl: "/stride.icacallbacks.QueryGetCallbackDataResponse",
  encode(message, writer = BinaryWriter.create()) {
    if (message.callbackData !== void 0) {
      CallbackData.encode(message.callbackData, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryGetCallbackDataResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.callbackData = CallbackData.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryGetCallbackDataResponse();
    message.callbackData = object.callbackData !== void 0 && object.callbackData !== null ? CallbackData.fromPartial(object.callbackData) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryGetCallbackDataResponse();
    if (object.callback_data !== void 0 && object.callback_data !== null) {
      message.callbackData = CallbackData.fromAmino(object.callback_data);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.callback_data = message.callbackData ? CallbackData.toAmino(message.callbackData) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryGetCallbackDataResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryGetCallbackDataResponse.decode(message.value);
  },
  toProto(message) {
    return QueryGetCallbackDataResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.icacallbacks.QueryGetCallbackDataResponse",
      value: QueryGetCallbackDataResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllCallbackDataRequest() {
  return {
    pagination: void 0
  };
}
const QueryAllCallbackDataRequest = {
  typeUrl: "/stride.icacallbacks.QueryAllCallbackDataRequest",
  encode(message, writer = BinaryWriter.create()) {
    if (message.pagination !== void 0) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryAllCallbackDataRequest();
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
    const message = createBaseQueryAllCallbackDataRequest();
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryAllCallbackDataRequest();
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
    return QueryAllCallbackDataRequest.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryAllCallbackDataRequest.decode(message.value);
  },
  toProto(message) {
    return QueryAllCallbackDataRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.icacallbacks.QueryAllCallbackDataRequest",
      value: QueryAllCallbackDataRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllCallbackDataResponse() {
  return {
    callbackData: [],
    pagination: void 0
  };
}
const QueryAllCallbackDataResponse = {
  typeUrl: "/stride.icacallbacks.QueryAllCallbackDataResponse",
  encode(message, writer = BinaryWriter.create()) {
    for (const v of message.callbackData) {
      CallbackData.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== void 0) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryAllCallbackDataResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.callbackData.push(CallbackData.decode(reader, reader.uint32()));
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
    const message = createBaseQueryAllCallbackDataResponse();
    message.callbackData = object.callbackData?.map((e) => CallbackData.fromPartial(e)) || [];
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryAllCallbackDataResponse();
    message.callbackData = object.callback_data?.map((e) => CallbackData.fromAmino(e)) || [];
    if (object.pagination !== void 0 && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.callbackData) {
      obj.callback_data = message.callbackData.map((e) => e ? CallbackData.toAmino(e) : void 0);
    } else {
      obj.callback_data = message.callbackData;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryAllCallbackDataResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryAllCallbackDataResponse.decode(message.value);
  },
  toProto(message) {
    return QueryAllCallbackDataResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.icacallbacks.QueryAllCallbackDataResponse",
      value: QueryAllCallbackDataResponse.encode(message).finish()
    };
  }
};
export {
  QueryAllCallbackDataRequest,
  QueryAllCallbackDataResponse,
  QueryGetCallbackDataRequest,
  QueryGetCallbackDataResponse,
  QueryParamsRequest,
  QueryParamsResponse
};
