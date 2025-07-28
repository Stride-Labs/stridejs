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
  QueryStrdBurnerAddressRequest: () => QueryStrdBurnerAddressRequest,
  QueryStrdBurnerAddressResponse: () => QueryStrdBurnerAddressResponse,
  QueryTotalStrdBurnedRequest: () => QueryTotalStrdBurnedRequest,
  QueryTotalStrdBurnedResponse: () => QueryTotalStrdBurnedResponse
});
module.exports = __toCommonJS(query_exports);
var import_binary = require("../../binary");
function createBaseQueryStrdBurnerAddressRequest() {
  return {};
}
const QueryStrdBurnerAddressRequest = {
  typeUrl: "/stride.strdburner.QueryStrdBurnerAddressRequest",
  encode(_, writer = import_binary.BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryStrdBurnerAddressRequest();
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
    const message = createBaseQueryStrdBurnerAddressRequest();
    return message;
  },
  fromAmino(_) {
    const message = createBaseQueryStrdBurnerAddressRequest();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return QueryStrdBurnerAddressRequest.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryStrdBurnerAddressRequest.decode(message.value);
  },
  toProto(message) {
    return QueryStrdBurnerAddressRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.strdburner.QueryStrdBurnerAddressRequest",
      value: QueryStrdBurnerAddressRequest.encode(message).finish()
    };
  }
};
function createBaseQueryStrdBurnerAddressResponse() {
  return {
    address: ""
  };
}
const QueryStrdBurnerAddressResponse = {
  typeUrl: "/stride.strdburner.QueryStrdBurnerAddressResponse",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryStrdBurnerAddressResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryStrdBurnerAddressResponse();
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryStrdBurnerAddressResponse();
    if (object.address !== void 0 && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.address = message.address === "" ? void 0 : message.address;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryStrdBurnerAddressResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryStrdBurnerAddressResponse.decode(message.value);
  },
  toProto(message) {
    return QueryStrdBurnerAddressResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.strdburner.QueryStrdBurnerAddressResponse",
      value: QueryStrdBurnerAddressResponse.encode(message).finish()
    };
  }
};
function createBaseQueryTotalStrdBurnedRequest() {
  return {};
}
const QueryTotalStrdBurnedRequest = {
  typeUrl: "/stride.strdburner.QueryTotalStrdBurnedRequest",
  encode(_, writer = import_binary.BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalStrdBurnedRequest();
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
    const message = createBaseQueryTotalStrdBurnedRequest();
    return message;
  },
  fromAmino(_) {
    const message = createBaseQueryTotalStrdBurnedRequest();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return QueryTotalStrdBurnedRequest.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryTotalStrdBurnedRequest.decode(message.value);
  },
  toProto(message) {
    return QueryTotalStrdBurnedRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.strdburner.QueryTotalStrdBurnedRequest",
      value: QueryTotalStrdBurnedRequest.encode(message).finish()
    };
  }
};
function createBaseQueryTotalStrdBurnedResponse() {
  return {
    totalBurned: ""
  };
}
const QueryTotalStrdBurnedResponse = {
  typeUrl: "/stride.strdburner.QueryTotalStrdBurnedResponse",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.totalBurned !== "") {
      writer.uint32(10).string(message.totalBurned);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalStrdBurnedResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.totalBurned = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryTotalStrdBurnedResponse();
    message.totalBurned = object.totalBurned ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryTotalStrdBurnedResponse();
    if (object.total_burned !== void 0 && object.total_burned !== null) {
      message.totalBurned = object.total_burned;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.total_burned = message.totalBurned === "" ? void 0 : message.totalBurned;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryTotalStrdBurnedResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryTotalStrdBurnedResponse.decode(message.value);
  },
  toProto(message) {
    return QueryTotalStrdBurnedResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.strdburner.QueryTotalStrdBurnedResponse",
      value: QueryTotalStrdBurnedResponse.encode(message).finish()
    };
  }
};
// Removed broken CommonJS export annotation
