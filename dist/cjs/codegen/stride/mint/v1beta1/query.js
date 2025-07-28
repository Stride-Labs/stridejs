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
  QueryEpochProvisionsRequest: () => QueryEpochProvisionsRequest,
  QueryEpochProvisionsResponse: () => QueryEpochProvisionsResponse,
  QueryParamsRequest: () => QueryParamsRequest,
  QueryParamsResponse: () => QueryParamsResponse
});
module.exports = __toCommonJS(query_exports);
var import_mint = require("./mint");
var import_binary = require("../../../binary");
var import_helpers = require("../../../helpers");
function createBaseQueryParamsRequest() {
  return {};
}
const QueryParamsRequest = {
  typeUrl: "/stride.mint.v1beta1.QueryParamsRequest",
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
      typeUrl: "/stride.mint.v1beta1.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryParamsResponse() {
  return {
    params: import_mint.Params.fromPartial({})
  };
}
const QueryParamsResponse = {
  typeUrl: "/stride.mint.v1beta1.QueryParamsResponse",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.params !== void 0) {
      import_mint.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
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
          message.params = import_mint.Params.decode(reader, reader.uint32());
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
    message.params = object.params !== void 0 && object.params !== null ? import_mint.Params.fromPartial(object.params) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryParamsResponse();
    if (object.params !== void 0 && object.params !== null) {
      message.params = import_mint.Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.params = message.params ? import_mint.Params.toAmino(message.params) : void 0;
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
      typeUrl: "/stride.mint.v1beta1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryEpochProvisionsRequest() {
  return {};
}
const QueryEpochProvisionsRequest = {
  typeUrl: "/stride.mint.v1beta1.QueryEpochProvisionsRequest",
  encode(_, writer = import_binary.BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryEpochProvisionsRequest();
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
    const message = createBaseQueryEpochProvisionsRequest();
    return message;
  },
  fromAmino(_) {
    const message = createBaseQueryEpochProvisionsRequest();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return QueryEpochProvisionsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryEpochProvisionsRequest.decode(message.value);
  },
  toProto(message) {
    return QueryEpochProvisionsRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.mint.v1beta1.QueryEpochProvisionsRequest",
      value: QueryEpochProvisionsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryEpochProvisionsResponse() {
  return {
    epochProvisions: new Uint8Array()
  };
}
const QueryEpochProvisionsResponse = {
  typeUrl: "/stride.mint.v1beta1.QueryEpochProvisionsResponse",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.epochProvisions.length !== 0) {
      writer.uint32(10).bytes(message.epochProvisions);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryEpochProvisionsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.epochProvisions = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryEpochProvisionsResponse();
    message.epochProvisions = object.epochProvisions ?? new Uint8Array();
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryEpochProvisionsResponse();
    if (object.epoch_provisions !== void 0 && object.epoch_provisions !== null) {
      message.epochProvisions = (0, import_helpers.bytesFromBase64)(object.epoch_provisions);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.epoch_provisions = message.epochProvisions ? (0, import_helpers.base64FromBytes)(message.epochProvisions) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryEpochProvisionsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryEpochProvisionsResponse.decode(message.value);
  },
  toProto(message) {
    return QueryEpochProvisionsResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.mint.v1beta1.QueryEpochProvisionsResponse",
      value: QueryEpochProvisionsResponse.encode(message).finish()
    };
  }
};
// Removed broken CommonJS export annotation
