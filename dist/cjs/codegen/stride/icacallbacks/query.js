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
var query_exports = {};
__export(query_exports, {
  QueryAllCallbackDataRequest: () => QueryAllCallbackDataRequest,
  QueryAllCallbackDataResponse: () => QueryAllCallbackDataResponse,
  QueryGetCallbackDataRequest: () => QueryGetCallbackDataRequest,
  QueryGetCallbackDataResponse: () => QueryGetCallbackDataResponse,
  QueryParamsRequest: () => QueryParamsRequest,
  QueryParamsResponse: () => QueryParamsResponse
});
module.exports = __toCommonJS(query_exports);
var import_pagination = require("../../cosmos/base/query/v1beta1/pagination");
var import_params = require("./params");
var import_callback_data = require("./callback_data");
var import_binary = require("../../binary");
function createBaseQueryParamsRequest() {
  return {};
}
const QueryParamsRequest = {
  typeUrl: "/stride.icacallbacks.QueryParamsRequest",
  encode(_, writer = import_binary.BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
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
    params: import_params.Params.fromPartial({})
  };
}
const QueryParamsResponse = {
  typeUrl: "/stride.icacallbacks.QueryParamsResponse",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.params !== void 0) {
      import_params.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = import_params.Params.decode(reader, reader.uint32());
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
    message.params = object.params !== void 0 && object.params !== null ? import_params.Params.fromPartial(object.params) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryParamsResponse();
    if (object.params !== void 0 && object.params !== null) {
      message.params = import_params.Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.params = message.params ? import_params.Params.toAmino(message.params) : void 0;
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
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.callbackKey !== "") {
      writer.uint32(10).string(message.callbackKey);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
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
    callbackData: import_callback_data.CallbackData.fromPartial({})
  };
}
const QueryGetCallbackDataResponse = {
  typeUrl: "/stride.icacallbacks.QueryGetCallbackDataResponse",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.callbackData !== void 0) {
      import_callback_data.CallbackData.encode(message.callbackData, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryGetCallbackDataResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.callbackData = import_callback_data.CallbackData.decode(reader, reader.uint32());
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
    message.callbackData = object.callbackData !== void 0 && object.callbackData !== null ? import_callback_data.CallbackData.fromPartial(object.callbackData) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryGetCallbackDataResponse();
    if (object.callback_data !== void 0 && object.callback_data !== null) {
      message.callbackData = import_callback_data.CallbackData.fromAmino(object.callback_data);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.callback_data = message.callbackData ? import_callback_data.CallbackData.toAmino(message.callbackData) : void 0;
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
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.pagination !== void 0) {
      import_pagination.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryAllCallbackDataRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = import_pagination.PageRequest.decode(reader, reader.uint32());
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
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? import_pagination.PageRequest.fromPartial(object.pagination) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryAllCallbackDataRequest();
    if (object.pagination !== void 0 && object.pagination !== null) {
      message.pagination = import_pagination.PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.pagination = message.pagination ? import_pagination.PageRequest.toAmino(message.pagination) : void 0;
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
  encode(message, writer = import_binary.BinaryWriter.create()) {
    for (const v of message.callbackData) {
      import_callback_data.CallbackData.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== void 0) {
      import_pagination.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryAllCallbackDataResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.callbackData.push(import_callback_data.CallbackData.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = import_pagination.PageResponse.decode(reader, reader.uint32());
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
    message.callbackData = object.callbackData?.map((e) => import_callback_data.CallbackData.fromPartial(e)) || [];
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? import_pagination.PageResponse.fromPartial(object.pagination) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryAllCallbackDataResponse();
    message.callbackData = object.callback_data?.map((e) => import_callback_data.CallbackData.fromAmino(e)) || [];
    if (object.pagination !== void 0 && object.pagination !== null) {
      message.pagination = import_pagination.PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.callbackData) {
      obj.callback_data = message.callbackData.map((e) => e ? import_callback_data.CallbackData.toAmino(e) : void 0);
    } else {
      obj.callback_data = message.callbackData;
    }
    obj.pagination = message.pagination ? import_pagination.PageResponse.toAmino(message.pagination) : void 0;
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
// Removed broken CommonJS export annotation
