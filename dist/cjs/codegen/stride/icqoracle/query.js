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
  QueryParamsRequest: () => QueryParamsRequest,
  QueryParamsResponse: () => QueryParamsResponse,
  QueryTokenPriceForQuoteDenomRequest: () => QueryTokenPriceForQuoteDenomRequest,
  QueryTokenPriceForQuoteDenomResponse: () => QueryTokenPriceForQuoteDenomResponse,
  QueryTokenPriceRequest: () => QueryTokenPriceRequest,
  QueryTokenPriceResponse: () => QueryTokenPriceResponse,
  QueryTokenPricesRequest: () => QueryTokenPricesRequest,
  QueryTokenPricesResponse: () => QueryTokenPricesResponse,
  TokenPriceResponse: () => TokenPriceResponse
});
module.exports = __toCommonJS(query_exports);
var import_pagination = require("../../cosmos/base/query/v1beta1/pagination");
var import_icqoracle = require("./icqoracle");
var import_timestamp = require("../../google/protobuf/timestamp");
var import_binary = require("../../binary");
var import_math = require("@cosmjs/math");
var import_helpers = require("../../helpers");
function createBaseQueryTokenPriceRequest() {
  return {
    baseDenom: "",
    quoteDenom: "",
    poolId: BigInt(0)
  };
}
const QueryTokenPriceRequest = {
  typeUrl: "/stride.icqoracle.QueryTokenPriceRequest",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.baseDenom !== "") {
      writer.uint32(10).string(message.baseDenom);
    }
    if (message.quoteDenom !== "") {
      writer.uint32(18).string(message.quoteDenom);
    }
    if (message.poolId !== BigInt(0)) {
      writer.uint32(24).uint64(message.poolId);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryTokenPriceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.baseDenom = reader.string();
          break;
        case 2:
          message.quoteDenom = reader.string();
          break;
        case 3:
          message.poolId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryTokenPriceRequest();
    message.baseDenom = object.baseDenom ?? "";
    message.quoteDenom = object.quoteDenom ?? "";
    message.poolId = object.poolId !== void 0 && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryTokenPriceRequest();
    if (object.base_denom !== void 0 && object.base_denom !== null) {
      message.baseDenom = object.base_denom;
    }
    if (object.quote_denom !== void 0 && object.quote_denom !== null) {
      message.quoteDenom = object.quote_denom;
    }
    if (object.pool_id !== void 0 && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.base_denom = message.baseDenom === "" ? void 0 : message.baseDenom;
    obj.quote_denom = message.quoteDenom === "" ? void 0 : message.quoteDenom;
    obj.pool_id = message.poolId !== BigInt(0) ? message.poolId?.toString() : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryTokenPriceRequest.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryTokenPriceRequest.decode(message.value);
  },
  toProto(message) {
    return QueryTokenPriceRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.icqoracle.QueryTokenPriceRequest",
      value: QueryTokenPriceRequest.encode(message).finish()
    };
  }
};
function createBaseQueryTokenPriceResponse() {
  return {
    tokenPrice: TokenPriceResponse.fromPartial({})
  };
}
const QueryTokenPriceResponse = {
  typeUrl: "/stride.icqoracle.QueryTokenPriceResponse",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.tokenPrice !== void 0) {
      TokenPriceResponse.encode(message.tokenPrice, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryTokenPriceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokenPrice = TokenPriceResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryTokenPriceResponse();
    message.tokenPrice = object.tokenPrice !== void 0 && object.tokenPrice !== null ? TokenPriceResponse.fromPartial(object.tokenPrice) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryTokenPriceResponse();
    if (object.token_price !== void 0 && object.token_price !== null) {
      message.tokenPrice = TokenPriceResponse.fromAmino(object.token_price);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.token_price = message.tokenPrice ? TokenPriceResponse.toAmino(message.tokenPrice) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryTokenPriceResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryTokenPriceResponse.decode(message.value);
  },
  toProto(message) {
    return QueryTokenPriceResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.icqoracle.QueryTokenPriceResponse",
      value: QueryTokenPriceResponse.encode(message).finish()
    };
  }
};
function createBaseQueryTokenPricesRequest() {
  return {
    pagination: void 0
  };
}
const QueryTokenPricesRequest = {
  typeUrl: "/stride.icqoracle.QueryTokenPricesRequest",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.pagination !== void 0) {
      import_pagination.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryTokenPricesRequest();
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
    const message = createBaseQueryTokenPricesRequest();
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? import_pagination.PageRequest.fromPartial(object.pagination) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryTokenPricesRequest();
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
    return QueryTokenPricesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryTokenPricesRequest.decode(message.value);
  },
  toProto(message) {
    return QueryTokenPricesRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.icqoracle.QueryTokenPricesRequest",
      value: QueryTokenPricesRequest.encode(message).finish()
    };
  }
};
function createBaseQueryTokenPricesResponse() {
  return {
    tokenPrices: [],
    pagination: void 0
  };
}
const QueryTokenPricesResponse = {
  typeUrl: "/stride.icqoracle.QueryTokenPricesResponse",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    for (const v of message.tokenPrices) {
      TokenPriceResponse.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== void 0) {
      import_pagination.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryTokenPricesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokenPrices.push(TokenPriceResponse.decode(reader, reader.uint32()));
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
    const message = createBaseQueryTokenPricesResponse();
    message.tokenPrices = object.tokenPrices?.map((e) => TokenPriceResponse.fromPartial(e)) || [];
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? import_pagination.PageResponse.fromPartial(object.pagination) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryTokenPricesResponse();
    message.tokenPrices = object.token_prices?.map((e) => TokenPriceResponse.fromAmino(e)) || [];
    if (object.pagination !== void 0 && object.pagination !== null) {
      message.pagination = import_pagination.PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.tokenPrices) {
      obj.token_prices = message.tokenPrices.map((e) => e ? TokenPriceResponse.toAmino(e) : void 0);
    } else {
      obj.token_prices = message.tokenPrices;
    }
    obj.pagination = message.pagination ? import_pagination.PageResponse.toAmino(message.pagination) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryTokenPricesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryTokenPricesResponse.decode(message.value);
  },
  toProto(message) {
    return QueryTokenPricesResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.icqoracle.QueryTokenPricesResponse",
      value: QueryTokenPricesResponse.encode(message).finish()
    };
  }
};
function createBaseQueryParamsRequest() {
  return {};
}
const QueryParamsRequest = {
  typeUrl: "/stride.icqoracle.QueryParamsRequest",
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
      typeUrl: "/stride.icqoracle.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryParamsResponse() {
  return {
    params: import_icqoracle.Params.fromPartial({})
  };
}
const QueryParamsResponse = {
  typeUrl: "/stride.icqoracle.QueryParamsResponse",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.params !== void 0) {
      import_icqoracle.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
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
          message.params = import_icqoracle.Params.decode(reader, reader.uint32());
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
    message.params = object.params !== void 0 && object.params !== null ? import_icqoracle.Params.fromPartial(object.params) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryParamsResponse();
    if (object.params !== void 0 && object.params !== null) {
      message.params = import_icqoracle.Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.params = message.params ? import_icqoracle.Params.toAmino(message.params) : void 0;
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
      typeUrl: "/stride.icqoracle.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryTokenPriceForQuoteDenomRequest() {
  return {
    baseDenom: "",
    quoteDenom: ""
  };
}
const QueryTokenPriceForQuoteDenomRequest = {
  typeUrl: "/stride.icqoracle.QueryTokenPriceForQuoteDenomRequest",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.baseDenom !== "") {
      writer.uint32(10).string(message.baseDenom);
    }
    if (message.quoteDenom !== "") {
      writer.uint32(18).string(message.quoteDenom);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryTokenPriceForQuoteDenomRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.baseDenom = reader.string();
          break;
        case 2:
          message.quoteDenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryTokenPriceForQuoteDenomRequest();
    message.baseDenom = object.baseDenom ?? "";
    message.quoteDenom = object.quoteDenom ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryTokenPriceForQuoteDenomRequest();
    if (object.base_denom !== void 0 && object.base_denom !== null) {
      message.baseDenom = object.base_denom;
    }
    if (object.quote_denom !== void 0 && object.quote_denom !== null) {
      message.quoteDenom = object.quote_denom;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.base_denom = message.baseDenom === "" ? void 0 : message.baseDenom;
    obj.quote_denom = message.quoteDenom === "" ? void 0 : message.quoteDenom;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryTokenPriceForQuoteDenomRequest.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryTokenPriceForQuoteDenomRequest.decode(message.value);
  },
  toProto(message) {
    return QueryTokenPriceForQuoteDenomRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.icqoracle.QueryTokenPriceForQuoteDenomRequest",
      value: QueryTokenPriceForQuoteDenomRequest.encode(message).finish()
    };
  }
};
function createBaseQueryTokenPriceForQuoteDenomResponse() {
  return {
    price: ""
  };
}
const QueryTokenPriceForQuoteDenomResponse = {
  typeUrl: "/stride.icqoracle.QueryTokenPriceForQuoteDenomResponse",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.price !== "") {
      writer.uint32(10).string(import_math.Decimal.fromUserInput(message.price, 18).atomics);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryTokenPriceForQuoteDenomResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.price = import_math.Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryTokenPriceForQuoteDenomResponse();
    message.price = object.price ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryTokenPriceForQuoteDenomResponse();
    if (object.price !== void 0 && object.price !== null) {
      message.price = object.price;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.price = message.price === "" ? void 0 : message.price;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryTokenPriceForQuoteDenomResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryTokenPriceForQuoteDenomResponse.decode(message.value);
  },
  toProto(message) {
    return QueryTokenPriceForQuoteDenomResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.icqoracle.QueryTokenPriceForQuoteDenomResponse",
      value: QueryTokenPriceForQuoteDenomResponse.encode(message).finish()
    };
  }
};
function createBaseTokenPriceResponse() {
  return {
    baseDenomUnwrapped: "",
    quoteDenomUnwrapped: "",
    baseDenom: "",
    quoteDenom: "",
    baseDenomDecimals: BigInt(0),
    quoteDenomDecimals: BigInt(0),
    osmosisBaseDenom: "",
    osmosisQuoteDenom: "",
    osmosisPoolId: BigInt(0),
    spotPrice: "",
    lastRequestTime: /* @__PURE__ */ new Date(),
    lastResponseTime: /* @__PURE__ */ new Date(),
    queryInProgress: false
  };
}
const TokenPriceResponse = {
  typeUrl: "/stride.icqoracle.TokenPriceResponse",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.baseDenomUnwrapped !== "") {
      writer.uint32(10).string(message.baseDenomUnwrapped);
    }
    if (message.quoteDenomUnwrapped !== "") {
      writer.uint32(18).string(message.quoteDenomUnwrapped);
    }
    if (message.baseDenom !== "") {
      writer.uint32(26).string(message.baseDenom);
    }
    if (message.quoteDenom !== "") {
      writer.uint32(34).string(message.quoteDenom);
    }
    if (message.baseDenomDecimals !== BigInt(0)) {
      writer.uint32(40).int64(message.baseDenomDecimals);
    }
    if (message.quoteDenomDecimals !== BigInt(0)) {
      writer.uint32(48).int64(message.quoteDenomDecimals);
    }
    if (message.osmosisBaseDenom !== "") {
      writer.uint32(58).string(message.osmosisBaseDenom);
    }
    if (message.osmosisQuoteDenom !== "") {
      writer.uint32(66).string(message.osmosisQuoteDenom);
    }
    if (message.osmosisPoolId !== BigInt(0)) {
      writer.uint32(72).uint64(message.osmosisPoolId);
    }
    if (message.spotPrice !== "") {
      writer.uint32(82).string(import_math.Decimal.fromUserInput(message.spotPrice, 18).atomics);
    }
    if (message.lastRequestTime !== void 0) {
      import_timestamp.Timestamp.encode((0, import_helpers.toTimestamp)(message.lastRequestTime), writer.uint32(90).fork()).ldelim();
    }
    if (message.lastResponseTime !== void 0) {
      import_timestamp.Timestamp.encode((0, import_helpers.toTimestamp)(message.lastResponseTime), writer.uint32(98).fork()).ldelim();
    }
    if (message.queryInProgress === true) {
      writer.uint32(104).bool(message.queryInProgress);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseTokenPriceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.baseDenomUnwrapped = reader.string();
          break;
        case 2:
          message.quoteDenomUnwrapped = reader.string();
          break;
        case 3:
          message.baseDenom = reader.string();
          break;
        case 4:
          message.quoteDenom = reader.string();
          break;
        case 5:
          message.baseDenomDecimals = reader.int64();
          break;
        case 6:
          message.quoteDenomDecimals = reader.int64();
          break;
        case 7:
          message.osmosisBaseDenom = reader.string();
          break;
        case 8:
          message.osmosisQuoteDenom = reader.string();
          break;
        case 9:
          message.osmosisPoolId = reader.uint64();
          break;
        case 10:
          message.spotPrice = import_math.Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 11:
          message.lastRequestTime = (0, import_helpers.fromTimestamp)(import_timestamp.Timestamp.decode(reader, reader.uint32()));
          break;
        case 12:
          message.lastResponseTime = (0, import_helpers.fromTimestamp)(import_timestamp.Timestamp.decode(reader, reader.uint32()));
          break;
        case 13:
          message.queryInProgress = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseTokenPriceResponse();
    message.baseDenomUnwrapped = object.baseDenomUnwrapped ?? "";
    message.quoteDenomUnwrapped = object.quoteDenomUnwrapped ?? "";
    message.baseDenom = object.baseDenom ?? "";
    message.quoteDenom = object.quoteDenom ?? "";
    message.baseDenomDecimals = object.baseDenomDecimals !== void 0 && object.baseDenomDecimals !== null ? BigInt(object.baseDenomDecimals.toString()) : BigInt(0);
    message.quoteDenomDecimals = object.quoteDenomDecimals !== void 0 && object.quoteDenomDecimals !== null ? BigInt(object.quoteDenomDecimals.toString()) : BigInt(0);
    message.osmosisBaseDenom = object.osmosisBaseDenom ?? "";
    message.osmosisQuoteDenom = object.osmosisQuoteDenom ?? "";
    message.osmosisPoolId = object.osmosisPoolId !== void 0 && object.osmosisPoolId !== null ? BigInt(object.osmosisPoolId.toString()) : BigInt(0);
    message.spotPrice = object.spotPrice ?? "";
    message.lastRequestTime = object.lastRequestTime ?? void 0;
    message.lastResponseTime = object.lastResponseTime ?? void 0;
    message.queryInProgress = object.queryInProgress ?? false;
    return message;
  },
  fromAmino(object) {
    const message = createBaseTokenPriceResponse();
    if (object.base_denom_unwrapped !== void 0 && object.base_denom_unwrapped !== null) {
      message.baseDenomUnwrapped = object.base_denom_unwrapped;
    }
    if (object.quote_denom_unwrapped !== void 0 && object.quote_denom_unwrapped !== null) {
      message.quoteDenomUnwrapped = object.quote_denom_unwrapped;
    }
    if (object.base_denom !== void 0 && object.base_denom !== null) {
      message.baseDenom = object.base_denom;
    }
    if (object.quote_denom !== void 0 && object.quote_denom !== null) {
      message.quoteDenom = object.quote_denom;
    }
    if (object.base_denom_decimals !== void 0 && object.base_denom_decimals !== null) {
      message.baseDenomDecimals = BigInt(object.base_denom_decimals);
    }
    if (object.quote_denom_decimals !== void 0 && object.quote_denom_decimals !== null) {
      message.quoteDenomDecimals = BigInt(object.quote_denom_decimals);
    }
    if (object.osmosis_base_denom !== void 0 && object.osmosis_base_denom !== null) {
      message.osmosisBaseDenom = object.osmosis_base_denom;
    }
    if (object.osmosis_quote_denom !== void 0 && object.osmosis_quote_denom !== null) {
      message.osmosisQuoteDenom = object.osmosis_quote_denom;
    }
    if (object.osmosis_pool_id !== void 0 && object.osmosis_pool_id !== null) {
      message.osmosisPoolId = BigInt(object.osmosis_pool_id);
    }
    if (object.spot_price !== void 0 && object.spot_price !== null) {
      message.spotPrice = object.spot_price;
    }
    if (object.last_request_time !== void 0 && object.last_request_time !== null) {
      message.lastRequestTime = (0, import_helpers.fromTimestamp)(import_timestamp.Timestamp.fromAmino(object.last_request_time));
    }
    if (object.last_response_time !== void 0 && object.last_response_time !== null) {
      message.lastResponseTime = (0, import_helpers.fromTimestamp)(import_timestamp.Timestamp.fromAmino(object.last_response_time));
    }
    if (object.query_in_progress !== void 0 && object.query_in_progress !== null) {
      message.queryInProgress = object.query_in_progress;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.base_denom_unwrapped = message.baseDenomUnwrapped === "" ? void 0 : message.baseDenomUnwrapped;
    obj.quote_denom_unwrapped = message.quoteDenomUnwrapped === "" ? void 0 : message.quoteDenomUnwrapped;
    obj.base_denom = message.baseDenom === "" ? void 0 : message.baseDenom;
    obj.quote_denom = message.quoteDenom === "" ? void 0 : message.quoteDenom;
    obj.base_denom_decimals = message.baseDenomDecimals !== BigInt(0) ? message.baseDenomDecimals?.toString() : void 0;
    obj.quote_denom_decimals = message.quoteDenomDecimals !== BigInt(0) ? message.quoteDenomDecimals?.toString() : void 0;
    obj.osmosis_base_denom = message.osmosisBaseDenom === "" ? void 0 : message.osmosisBaseDenom;
    obj.osmosis_quote_denom = message.osmosisQuoteDenom === "" ? void 0 : message.osmosisQuoteDenom;
    obj.osmosis_pool_id = message.osmosisPoolId !== BigInt(0) ? message.osmosisPoolId?.toString() : void 0;
    obj.spot_price = message.spotPrice === "" ? void 0 : message.spotPrice;
    obj.last_request_time = message.lastRequestTime ? import_timestamp.Timestamp.toAmino((0, import_helpers.toTimestamp)(message.lastRequestTime)) : void 0;
    obj.last_response_time = message.lastResponseTime ? import_timestamp.Timestamp.toAmino((0, import_helpers.toTimestamp)(message.lastResponseTime)) : void 0;
    obj.query_in_progress = message.queryInProgress === false ? void 0 : message.queryInProgress;
    return obj;
  },
  fromAminoMsg(object) {
    return TokenPriceResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return TokenPriceResponse.decode(message.value);
  },
  toProto(message) {
    return TokenPriceResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.icqoracle.TokenPriceResponse",
      value: TokenPriceResponse.encode(message).finish()
    };
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  QueryParamsRequest,
  QueryParamsResponse,
  QueryTokenPriceForQuoteDenomRequest,
  QueryTokenPriceForQuoteDenomResponse,
  QueryTokenPriceRequest,
  QueryTokenPriceResponse,
  QueryTokenPricesRequest,
  QueryTokenPricesResponse,
  TokenPriceResponse
});
