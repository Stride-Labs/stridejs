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
  QueryTokenPricesRequest: () => QueryTokenPricesRequest,
  QueryTokenPricesResponse: () => QueryTokenPricesResponse,
  TokenPriceResponse: () => TokenPriceResponse
});
module.exports = __toCommonJS(query_exports);
var import_pagination = require("../../cosmos/base/query/v1beta1/pagination");
var import_icqoracle = require("./icqoracle");
var import_binary = require("../../binary");
var import_math = require("@cosmjs/math");
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
function createBaseTokenPriceResponse() {
  return {
    baseDenomUnwrapped: "",
    quoteDenomUnwrapped: "",
    tokenPrice: import_icqoracle.TokenPrice.fromPartial({})
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
    if (message.tokenPrice !== void 0) {
      import_icqoracle.TokenPrice.encode(message.tokenPrice, writer.uint32(26).fork()).ldelim();
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
          message.tokenPrice = import_icqoracle.TokenPrice.decode(reader, reader.uint32());
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
    message.tokenPrice = object.tokenPrice !== void 0 && object.tokenPrice !== null ? import_icqoracle.TokenPrice.fromPartial(object.tokenPrice) : void 0;
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
    if (object.token_price !== void 0 && object.token_price !== null) {
      message.tokenPrice = import_icqoracle.TokenPrice.fromAmino(object.token_price);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.base_denom_unwrapped = message.baseDenomUnwrapped === "" ? void 0 : message.baseDenomUnwrapped;
    obj.quote_denom_unwrapped = message.quoteDenomUnwrapped === "" ? void 0 : message.quoteDenomUnwrapped;
    obj.token_price = message.tokenPrice ? import_icqoracle.TokenPrice.toAmino(message.tokenPrice) : void 0;
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  QueryParamsRequest,
  QueryParamsResponse,
  QueryTokenPriceForQuoteDenomRequest,
  QueryTokenPriceForQuoteDenomResponse,
  QueryTokenPriceRequest,
  QueryTokenPricesRequest,
  QueryTokenPricesResponse,
  TokenPriceResponse
});
