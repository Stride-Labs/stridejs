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
  QueryAllTokenizeShareRecordsRequest: () => QueryAllTokenizeShareRecordsRequest,
  QueryAllTokenizeShareRecordsResponse: () => QueryAllTokenizeShareRecordsResponse,
  QueryLastTokenizeShareRecordIdRequest: () => QueryLastTokenizeShareRecordIdRequest,
  QueryLastTokenizeShareRecordIdResponse: () => QueryLastTokenizeShareRecordIdResponse,
  QueryLiquidValidatorRequest: () => QueryLiquidValidatorRequest,
  QueryLiquidValidatorResponse: () => QueryLiquidValidatorResponse,
  QueryParamsRequest: () => QueryParamsRequest,
  QueryParamsResponse: () => QueryParamsResponse,
  QueryTokenizeShareLockInfo: () => QueryTokenizeShareLockInfo,
  QueryTokenizeShareLockInfoResponse: () => QueryTokenizeShareLockInfoResponse,
  QueryTokenizeShareRecordByDenomRequest: () => QueryTokenizeShareRecordByDenomRequest,
  QueryTokenizeShareRecordByDenomResponse: () => QueryTokenizeShareRecordByDenomResponse,
  QueryTokenizeShareRecordByIdRequest: () => QueryTokenizeShareRecordByIdRequest,
  QueryTokenizeShareRecordByIdResponse: () => QueryTokenizeShareRecordByIdResponse,
  QueryTokenizeShareRecordRewardRequest: () => QueryTokenizeShareRecordRewardRequest,
  QueryTokenizeShareRecordRewardResponse: () => QueryTokenizeShareRecordRewardResponse,
  QueryTokenizeShareRecordsOwnedRequest: () => QueryTokenizeShareRecordsOwnedRequest,
  QueryTokenizeShareRecordsOwnedResponse: () => QueryTokenizeShareRecordsOwnedResponse,
  QueryTotalLiquidStaked: () => QueryTotalLiquidStaked,
  QueryTotalLiquidStakedResponse: () => QueryTotalLiquidStakedResponse,
  QueryTotalTokenizeSharedAssetsRequest: () => QueryTotalTokenizeSharedAssetsRequest,
  QueryTotalTokenizeSharedAssetsResponse: () => QueryTotalTokenizeSharedAssetsResponse
});
module.exports = __toCommonJS(query_exports);
var import_pagination = require("../../../cosmos/base/query/v1beta1/pagination");
var import_liquid = require("./liquid");
var import_coin = require("../../../cosmos/base/v1beta1/coin");
var import_binary = require("../../../binary");
function createBaseQueryLiquidValidatorRequest() {
  return {
    validatorAddr: ""
  };
}
const QueryLiquidValidatorRequest = {
  typeUrl: "/gaia.liquid.v1beta1.QueryLiquidValidatorRequest",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.validatorAddr !== "") {
      writer.uint32(10).string(message.validatorAddr);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryLiquidValidatorRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddr = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryLiquidValidatorRequest();
    message.validatorAddr = object.validatorAddr ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryLiquidValidatorRequest();
    if (object.validator_addr !== void 0 && object.validator_addr !== null) {
      message.validatorAddr = object.validator_addr;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.validator_addr = message.validatorAddr === "" ? void 0 : message.validatorAddr;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryLiquidValidatorRequest.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryLiquidValidatorRequest.decode(message.value);
  },
  toProto(message) {
    return QueryLiquidValidatorRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/gaia.liquid.v1beta1.QueryLiquidValidatorRequest",
      value: QueryLiquidValidatorRequest.encode(message).finish()
    };
  }
};
function createBaseQueryLiquidValidatorResponse() {
  return {
    liquidValidator: import_liquid.LiquidValidator.fromPartial({})
  };
}
const QueryLiquidValidatorResponse = {
  typeUrl: "/gaia.liquid.v1beta1.QueryLiquidValidatorResponse",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.liquidValidator !== void 0) {
      import_liquid.LiquidValidator.encode(message.liquidValidator, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryLiquidValidatorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.liquidValidator = import_liquid.LiquidValidator.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryLiquidValidatorResponse();
    message.liquidValidator = object.liquidValidator !== void 0 && object.liquidValidator !== null ? import_liquid.LiquidValidator.fromPartial(object.liquidValidator) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryLiquidValidatorResponse();
    if (object.liquid_validator !== void 0 && object.liquid_validator !== null) {
      message.liquidValidator = import_liquid.LiquidValidator.fromAmino(object.liquid_validator);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.liquid_validator = message.liquidValidator ? import_liquid.LiquidValidator.toAmino(message.liquidValidator) : import_liquid.LiquidValidator.toAmino(import_liquid.LiquidValidator.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object) {
    return QueryLiquidValidatorResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryLiquidValidatorResponse.decode(message.value);
  },
  toProto(message) {
    return QueryLiquidValidatorResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/gaia.liquid.v1beta1.QueryLiquidValidatorResponse",
      value: QueryLiquidValidatorResponse.encode(message).finish()
    };
  }
};
function createBaseQueryParamsRequest() {
  return {};
}
const QueryParamsRequest = {
  typeUrl: "/gaia.liquid.v1beta1.QueryParamsRequest",
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
      typeUrl: "/gaia.liquid.v1beta1.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryParamsResponse() {
  return {
    params: import_liquid.Params.fromPartial({})
  };
}
const QueryParamsResponse = {
  typeUrl: "/gaia.liquid.v1beta1.QueryParamsResponse",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.params !== void 0) {
      import_liquid.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
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
          message.params = import_liquid.Params.decode(reader, reader.uint32());
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
    message.params = object.params !== void 0 && object.params !== null ? import_liquid.Params.fromPartial(object.params) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryParamsResponse();
    if (object.params !== void 0 && object.params !== null) {
      message.params = import_liquid.Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.params = message.params ? import_liquid.Params.toAmino(message.params) : import_liquid.Params.toAmino(import_liquid.Params.fromPartial({}));
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
      typeUrl: "/gaia.liquid.v1beta1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryTokenizeShareRecordByIdRequest() {
  return {
    id: BigInt(0)
  };
}
const QueryTokenizeShareRecordByIdRequest = {
  typeUrl: "/gaia.liquid.v1beta1.QueryTokenizeShareRecordByIdRequest",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryTokenizeShareRecordByIdRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryTokenizeShareRecordByIdRequest();
    message.id = object.id !== void 0 && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryTokenizeShareRecordByIdRequest();
    if (object.id !== void 0 && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryTokenizeShareRecordByIdRequest.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryTokenizeShareRecordByIdRequest.decode(message.value);
  },
  toProto(message) {
    return QueryTokenizeShareRecordByIdRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/gaia.liquid.v1beta1.QueryTokenizeShareRecordByIdRequest",
      value: QueryTokenizeShareRecordByIdRequest.encode(message).finish()
    };
  }
};
function createBaseQueryTokenizeShareRecordByIdResponse() {
  return {
    record: import_liquid.TokenizeShareRecord.fromPartial({})
  };
}
const QueryTokenizeShareRecordByIdResponse = {
  typeUrl: "/gaia.liquid.v1beta1.QueryTokenizeShareRecordByIdResponse",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.record !== void 0) {
      import_liquid.TokenizeShareRecord.encode(message.record, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryTokenizeShareRecordByIdResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.record = import_liquid.TokenizeShareRecord.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryTokenizeShareRecordByIdResponse();
    message.record = object.record !== void 0 && object.record !== null ? import_liquid.TokenizeShareRecord.fromPartial(object.record) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryTokenizeShareRecordByIdResponse();
    if (object.record !== void 0 && object.record !== null) {
      message.record = import_liquid.TokenizeShareRecord.fromAmino(object.record);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.record = message.record ? import_liquid.TokenizeShareRecord.toAmino(message.record) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryTokenizeShareRecordByIdResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryTokenizeShareRecordByIdResponse.decode(message.value);
  },
  toProto(message) {
    return QueryTokenizeShareRecordByIdResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/gaia.liquid.v1beta1.QueryTokenizeShareRecordByIdResponse",
      value: QueryTokenizeShareRecordByIdResponse.encode(message).finish()
    };
  }
};
function createBaseQueryTokenizeShareRecordByDenomRequest() {
  return {
    denom: ""
  };
}
const QueryTokenizeShareRecordByDenomRequest = {
  typeUrl: "/gaia.liquid.v1beta1.QueryTokenizeShareRecordByDenomRequest",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryTokenizeShareRecordByDenomRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryTokenizeShareRecordByDenomRequest();
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryTokenizeShareRecordByDenomRequest();
    if (object.denom !== void 0 && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.denom = message.denom === "" ? void 0 : message.denom;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryTokenizeShareRecordByDenomRequest.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryTokenizeShareRecordByDenomRequest.decode(message.value);
  },
  toProto(message) {
    return QueryTokenizeShareRecordByDenomRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/gaia.liquid.v1beta1.QueryTokenizeShareRecordByDenomRequest",
      value: QueryTokenizeShareRecordByDenomRequest.encode(message).finish()
    };
  }
};
function createBaseQueryTokenizeShareRecordByDenomResponse() {
  return {
    record: import_liquid.TokenizeShareRecord.fromPartial({})
  };
}
const QueryTokenizeShareRecordByDenomResponse = {
  typeUrl: "/gaia.liquid.v1beta1.QueryTokenizeShareRecordByDenomResponse",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.record !== void 0) {
      import_liquid.TokenizeShareRecord.encode(message.record, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryTokenizeShareRecordByDenomResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.record = import_liquid.TokenizeShareRecord.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryTokenizeShareRecordByDenomResponse();
    message.record = object.record !== void 0 && object.record !== null ? import_liquid.TokenizeShareRecord.fromPartial(object.record) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryTokenizeShareRecordByDenomResponse();
    if (object.record !== void 0 && object.record !== null) {
      message.record = import_liquid.TokenizeShareRecord.fromAmino(object.record);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.record = message.record ? import_liquid.TokenizeShareRecord.toAmino(message.record) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryTokenizeShareRecordByDenomResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryTokenizeShareRecordByDenomResponse.decode(message.value);
  },
  toProto(message) {
    return QueryTokenizeShareRecordByDenomResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/gaia.liquid.v1beta1.QueryTokenizeShareRecordByDenomResponse",
      value: QueryTokenizeShareRecordByDenomResponse.encode(message).finish()
    };
  }
};
function createBaseQueryTokenizeShareRecordsOwnedRequest() {
  return {
    owner: ""
  };
}
const QueryTokenizeShareRecordsOwnedRequest = {
  typeUrl: "/gaia.liquid.v1beta1.QueryTokenizeShareRecordsOwnedRequest",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryTokenizeShareRecordsOwnedRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryTokenizeShareRecordsOwnedRequest();
    message.owner = object.owner ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryTokenizeShareRecordsOwnedRequest();
    if (object.owner !== void 0 && object.owner !== null) {
      message.owner = object.owner;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.owner = message.owner === "" ? void 0 : message.owner;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryTokenizeShareRecordsOwnedRequest.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryTokenizeShareRecordsOwnedRequest.decode(message.value);
  },
  toProto(message) {
    return QueryTokenizeShareRecordsOwnedRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/gaia.liquid.v1beta1.QueryTokenizeShareRecordsOwnedRequest",
      value: QueryTokenizeShareRecordsOwnedRequest.encode(message).finish()
    };
  }
};
function createBaseQueryTokenizeShareRecordsOwnedResponse() {
  return {
    records: []
  };
}
const QueryTokenizeShareRecordsOwnedResponse = {
  typeUrl: "/gaia.liquid.v1beta1.QueryTokenizeShareRecordsOwnedResponse",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    for (const v of message.records) {
      import_liquid.TokenizeShareRecord.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryTokenizeShareRecordsOwnedResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.records.push(import_liquid.TokenizeShareRecord.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryTokenizeShareRecordsOwnedResponse();
    message.records = object.records?.map((e) => import_liquid.TokenizeShareRecord.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryTokenizeShareRecordsOwnedResponse();
    message.records = object.records?.map((e) => import_liquid.TokenizeShareRecord.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.records) {
      obj.records = message.records.map((e) => e ? import_liquid.TokenizeShareRecord.toAmino(e) : void 0);
    } else {
      obj.records = message.records;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return QueryTokenizeShareRecordsOwnedResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryTokenizeShareRecordsOwnedResponse.decode(message.value);
  },
  toProto(message) {
    return QueryTokenizeShareRecordsOwnedResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/gaia.liquid.v1beta1.QueryTokenizeShareRecordsOwnedResponse",
      value: QueryTokenizeShareRecordsOwnedResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllTokenizeShareRecordsRequest() {
  return {
    pagination: void 0
  };
}
const QueryAllTokenizeShareRecordsRequest = {
  typeUrl: "/gaia.liquid.v1beta1.QueryAllTokenizeShareRecordsRequest",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.pagination !== void 0) {
      import_pagination.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryAllTokenizeShareRecordsRequest();
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
    const message = createBaseQueryAllTokenizeShareRecordsRequest();
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? import_pagination.PageRequest.fromPartial(object.pagination) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryAllTokenizeShareRecordsRequest();
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
    return QueryAllTokenizeShareRecordsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryAllTokenizeShareRecordsRequest.decode(message.value);
  },
  toProto(message) {
    return QueryAllTokenizeShareRecordsRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/gaia.liquid.v1beta1.QueryAllTokenizeShareRecordsRequest",
      value: QueryAllTokenizeShareRecordsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllTokenizeShareRecordsResponse() {
  return {
    records: [],
    pagination: void 0
  };
}
const QueryAllTokenizeShareRecordsResponse = {
  typeUrl: "/gaia.liquid.v1beta1.QueryAllTokenizeShareRecordsResponse",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    for (const v of message.records) {
      import_liquid.TokenizeShareRecord.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== void 0) {
      import_pagination.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryAllTokenizeShareRecordsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.records.push(import_liquid.TokenizeShareRecord.decode(reader, reader.uint32()));
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
    const message = createBaseQueryAllTokenizeShareRecordsResponse();
    message.records = object.records?.map((e) => import_liquid.TokenizeShareRecord.fromPartial(e)) || [];
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? import_pagination.PageResponse.fromPartial(object.pagination) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryAllTokenizeShareRecordsResponse();
    message.records = object.records?.map((e) => import_liquid.TokenizeShareRecord.fromAmino(e)) || [];
    if (object.pagination !== void 0 && object.pagination !== null) {
      message.pagination = import_pagination.PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.records) {
      obj.records = message.records.map((e) => e ? import_liquid.TokenizeShareRecord.toAmino(e) : void 0);
    } else {
      obj.records = message.records;
    }
    obj.pagination = message.pagination ? import_pagination.PageResponse.toAmino(message.pagination) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryAllTokenizeShareRecordsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryAllTokenizeShareRecordsResponse.decode(message.value);
  },
  toProto(message) {
    return QueryAllTokenizeShareRecordsResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/gaia.liquid.v1beta1.QueryAllTokenizeShareRecordsResponse",
      value: QueryAllTokenizeShareRecordsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryLastTokenizeShareRecordIdRequest() {
  return {};
}
const QueryLastTokenizeShareRecordIdRequest = {
  typeUrl: "/gaia.liquid.v1beta1.QueryLastTokenizeShareRecordIdRequest",
  encode(_, writer = import_binary.BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryLastTokenizeShareRecordIdRequest();
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
    const message = createBaseQueryLastTokenizeShareRecordIdRequest();
    return message;
  },
  fromAmino(_) {
    const message = createBaseQueryLastTokenizeShareRecordIdRequest();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return QueryLastTokenizeShareRecordIdRequest.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryLastTokenizeShareRecordIdRequest.decode(message.value);
  },
  toProto(message) {
    return QueryLastTokenizeShareRecordIdRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/gaia.liquid.v1beta1.QueryLastTokenizeShareRecordIdRequest",
      value: QueryLastTokenizeShareRecordIdRequest.encode(message).finish()
    };
  }
};
function createBaseQueryLastTokenizeShareRecordIdResponse() {
  return {
    id: BigInt(0)
  };
}
const QueryLastTokenizeShareRecordIdResponse = {
  typeUrl: "/gaia.liquid.v1beta1.QueryLastTokenizeShareRecordIdResponse",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryLastTokenizeShareRecordIdResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryLastTokenizeShareRecordIdResponse();
    message.id = object.id !== void 0 && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryLastTokenizeShareRecordIdResponse();
    if (object.id !== void 0 && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryLastTokenizeShareRecordIdResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryLastTokenizeShareRecordIdResponse.decode(message.value);
  },
  toProto(message) {
    return QueryLastTokenizeShareRecordIdResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/gaia.liquid.v1beta1.QueryLastTokenizeShareRecordIdResponse",
      value: QueryLastTokenizeShareRecordIdResponse.encode(message).finish()
    };
  }
};
function createBaseQueryTotalTokenizeSharedAssetsRequest() {
  return {};
}
const QueryTotalTokenizeSharedAssetsRequest = {
  typeUrl: "/gaia.liquid.v1beta1.QueryTotalTokenizeSharedAssetsRequest",
  encode(_, writer = import_binary.BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalTokenizeSharedAssetsRequest();
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
    const message = createBaseQueryTotalTokenizeSharedAssetsRequest();
    return message;
  },
  fromAmino(_) {
    const message = createBaseQueryTotalTokenizeSharedAssetsRequest();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return QueryTotalTokenizeSharedAssetsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryTotalTokenizeSharedAssetsRequest.decode(message.value);
  },
  toProto(message) {
    return QueryTotalTokenizeSharedAssetsRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/gaia.liquid.v1beta1.QueryTotalTokenizeSharedAssetsRequest",
      value: QueryTotalTokenizeSharedAssetsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryTotalTokenizeSharedAssetsResponse() {
  return {
    value: import_coin.Coin.fromPartial({})
  };
}
const QueryTotalTokenizeSharedAssetsResponse = {
  typeUrl: "/gaia.liquid.v1beta1.QueryTotalTokenizeSharedAssetsResponse",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.value !== void 0) {
      import_coin.Coin.encode(message.value, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalTokenizeSharedAssetsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.value = import_coin.Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryTotalTokenizeSharedAssetsResponse();
    message.value = object.value !== void 0 && object.value !== null ? import_coin.Coin.fromPartial(object.value) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryTotalTokenizeSharedAssetsResponse();
    if (object.value !== void 0 && object.value !== null) {
      message.value = import_coin.Coin.fromAmino(object.value);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.value = message.value ? import_coin.Coin.toAmino(message.value) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryTotalTokenizeSharedAssetsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryTotalTokenizeSharedAssetsResponse.decode(message.value);
  },
  toProto(message) {
    return QueryTotalTokenizeSharedAssetsResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/gaia.liquid.v1beta1.QueryTotalTokenizeSharedAssetsResponse",
      value: QueryTotalTokenizeSharedAssetsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryTotalLiquidStaked() {
  return {};
}
const QueryTotalLiquidStaked = {
  typeUrl: "/gaia.liquid.v1beta1.QueryTotalLiquidStaked",
  encode(_, writer = import_binary.BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalLiquidStaked();
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
    const message = createBaseQueryTotalLiquidStaked();
    return message;
  },
  fromAmino(_) {
    const message = createBaseQueryTotalLiquidStaked();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return QueryTotalLiquidStaked.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryTotalLiquidStaked.decode(message.value);
  },
  toProto(message) {
    return QueryTotalLiquidStaked.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/gaia.liquid.v1beta1.QueryTotalLiquidStaked",
      value: QueryTotalLiquidStaked.encode(message).finish()
    };
  }
};
function createBaseQueryTotalLiquidStakedResponse() {
  return {
    tokens: ""
  };
}
const QueryTotalLiquidStakedResponse = {
  typeUrl: "/gaia.liquid.v1beta1.QueryTotalLiquidStakedResponse",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.tokens !== "") {
      writer.uint32(10).string(message.tokens);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalLiquidStakedResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokens = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryTotalLiquidStakedResponse();
    message.tokens = object.tokens ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryTotalLiquidStakedResponse();
    if (object.tokens !== void 0 && object.tokens !== null) {
      message.tokens = object.tokens;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.tokens = message.tokens === "" ? void 0 : message.tokens;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryTotalLiquidStakedResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryTotalLiquidStakedResponse.decode(message.value);
  },
  toProto(message) {
    return QueryTotalLiquidStakedResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/gaia.liquid.v1beta1.QueryTotalLiquidStakedResponse",
      value: QueryTotalLiquidStakedResponse.encode(message).finish()
    };
  }
};
function createBaseQueryTokenizeShareLockInfo() {
  return {
    address: ""
  };
}
const QueryTokenizeShareLockInfo = {
  typeUrl: "/gaia.liquid.v1beta1.QueryTokenizeShareLockInfo",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryTokenizeShareLockInfo();
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
    const message = createBaseQueryTokenizeShareLockInfo();
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryTokenizeShareLockInfo();
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
    return QueryTokenizeShareLockInfo.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryTokenizeShareLockInfo.decode(message.value);
  },
  toProto(message) {
    return QueryTokenizeShareLockInfo.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/gaia.liquid.v1beta1.QueryTokenizeShareLockInfo",
      value: QueryTokenizeShareLockInfo.encode(message).finish()
    };
  }
};
function createBaseQueryTokenizeShareLockInfoResponse() {
  return {
    status: "",
    expirationTime: ""
  };
}
const QueryTokenizeShareLockInfoResponse = {
  typeUrl: "/gaia.liquid.v1beta1.QueryTokenizeShareLockInfoResponse",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.status !== "") {
      writer.uint32(10).string(message.status);
    }
    if (message.expirationTime !== "") {
      writer.uint32(18).string(message.expirationTime);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryTokenizeShareLockInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.status = reader.string();
          break;
        case 2:
          message.expirationTime = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryTokenizeShareLockInfoResponse();
    message.status = object.status ?? "";
    message.expirationTime = object.expirationTime ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryTokenizeShareLockInfoResponse();
    if (object.status !== void 0 && object.status !== null) {
      message.status = object.status;
    }
    if (object.expiration_time !== void 0 && object.expiration_time !== null) {
      message.expirationTime = object.expiration_time;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.status = message.status === "" ? void 0 : message.status;
    obj.expiration_time = message.expirationTime === "" ? void 0 : message.expirationTime;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryTokenizeShareLockInfoResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryTokenizeShareLockInfoResponse.decode(message.value);
  },
  toProto(message) {
    return QueryTokenizeShareLockInfoResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/gaia.liquid.v1beta1.QueryTokenizeShareLockInfoResponse",
      value: QueryTokenizeShareLockInfoResponse.encode(message).finish()
    };
  }
};
function createBaseQueryTokenizeShareRecordRewardRequest() {
  return {
    ownerAddress: ""
  };
}
const QueryTokenizeShareRecordRewardRequest = {
  typeUrl: "/gaia.liquid.v1beta1.QueryTokenizeShareRecordRewardRequest",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.ownerAddress !== "") {
      writer.uint32(10).string(message.ownerAddress);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryTokenizeShareRecordRewardRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ownerAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryTokenizeShareRecordRewardRequest();
    message.ownerAddress = object.ownerAddress ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryTokenizeShareRecordRewardRequest();
    if (object.owner_address !== void 0 && object.owner_address !== null) {
      message.ownerAddress = object.owner_address;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.owner_address = message.ownerAddress === "" ? void 0 : message.ownerAddress;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryTokenizeShareRecordRewardRequest.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryTokenizeShareRecordRewardRequest.decode(message.value);
  },
  toProto(message) {
    return QueryTokenizeShareRecordRewardRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/gaia.liquid.v1beta1.QueryTokenizeShareRecordRewardRequest",
      value: QueryTokenizeShareRecordRewardRequest.encode(message).finish()
    };
  }
};
function createBaseQueryTokenizeShareRecordRewardResponse() {
  return {
    rewards: [],
    total: []
  };
}
const QueryTokenizeShareRecordRewardResponse = {
  typeUrl: "/gaia.liquid.v1beta1.QueryTokenizeShareRecordRewardResponse",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    for (const v of message.rewards) {
      import_liquid.TokenizeShareRecordReward.encode(v, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.total) {
      import_coin.DecCoin.encode(v, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryTokenizeShareRecordRewardResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rewards.push(import_liquid.TokenizeShareRecordReward.decode(reader, reader.uint32()));
          break;
        case 2:
          message.total.push(import_coin.DecCoin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryTokenizeShareRecordRewardResponse();
    message.rewards = object.rewards?.map((e) => import_liquid.TokenizeShareRecordReward.fromPartial(e)) || [];
    message.total = object.total?.map((e) => import_coin.DecCoin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryTokenizeShareRecordRewardResponse();
    message.rewards = object.rewards?.map((e) => import_liquid.TokenizeShareRecordReward.fromAmino(e)) || [];
    message.total = object.total?.map((e) => import_coin.DecCoin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.rewards) {
      obj.rewards = message.rewards.map((e) => e ? import_liquid.TokenizeShareRecordReward.toAmino(e) : void 0);
    } else {
      obj.rewards = message.rewards;
    }
    if (message.total) {
      obj.total = message.total.map((e) => e ? import_coin.DecCoin.toAmino(e) : void 0);
    } else {
      obj.total = message.total;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return QueryTokenizeShareRecordRewardResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryTokenizeShareRecordRewardResponse.decode(message.value);
  },
  toProto(message) {
    return QueryTokenizeShareRecordRewardResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/gaia.liquid.v1beta1.QueryTokenizeShareRecordRewardResponse",
      value: QueryTokenizeShareRecordRewardResponse.encode(message).finish()
    };
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  QueryAllTokenizeShareRecordsRequest,
  QueryAllTokenizeShareRecordsResponse,
  QueryLastTokenizeShareRecordIdRequest,
  QueryLastTokenizeShareRecordIdResponse,
  QueryLiquidValidatorRequest,
  QueryLiquidValidatorResponse,
  QueryParamsRequest,
  QueryParamsResponse,
  QueryTokenizeShareLockInfo,
  QueryTokenizeShareLockInfoResponse,
  QueryTokenizeShareRecordByDenomRequest,
  QueryTokenizeShareRecordByDenomResponse,
  QueryTokenizeShareRecordByIdRequest,
  QueryTokenizeShareRecordByIdResponse,
  QueryTokenizeShareRecordRewardRequest,
  QueryTokenizeShareRecordRewardResponse,
  QueryTokenizeShareRecordsOwnedRequest,
  QueryTokenizeShareRecordsOwnedResponse,
  QueryTotalLiquidStaked,
  QueryTotalLiquidStakedResponse,
  QueryTotalTokenizeSharedAssetsRequest,
  QueryTotalTokenizeSharedAssetsResponse
});
