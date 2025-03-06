import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { TokenPrice, TokenPriceAmino, TokenPriceSDKType, Params, ParamsAmino, ParamsSDKType } from "./icqoracle";
import { BinaryReader, BinaryWriter } from "../../binary";
import { Decimal } from "@cosmjs/math";
/**
 * QueryTokenPriceRequest is the request type for the Query/TokenPrice RPC
 * method
 */
export interface QueryTokenPriceRequest {
  baseDenom: string;
  quoteDenom: string;
  poolId: bigint;
}
export interface QueryTokenPriceRequestProtoMsg {
  typeUrl: "/stride.icqoracle.QueryTokenPriceRequest";
  value: Uint8Array;
}
/**
 * QueryTokenPriceRequest is the request type for the Query/TokenPrice RPC
 * method
 */
export interface QueryTokenPriceRequestAmino {
  base_denom?: string;
  quote_denom?: string;
  pool_id?: string;
}
export interface QueryTokenPriceRequestAminoMsg {
  type: "/stride.icqoracle.QueryTokenPriceRequest";
  value: QueryTokenPriceRequestAmino;
}
/**
 * QueryTokenPriceRequest is the request type for the Query/TokenPrice RPC
 * method
 */
export interface QueryTokenPriceRequestSDKType {
  base_denom: string;
  quote_denom: string;
  pool_id: bigint;
}
/**
 * QueryTokenPricesRequest is the request type for the Query/TokenPrices RPC
 * method
 */
export interface QueryTokenPricesRequest {
  pagination?: PageRequest;
}
export interface QueryTokenPricesRequestProtoMsg {
  typeUrl: "/stride.icqoracle.QueryTokenPricesRequest";
  value: Uint8Array;
}
/**
 * QueryTokenPricesRequest is the request type for the Query/TokenPrices RPC
 * method
 */
export interface QueryTokenPricesRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryTokenPricesRequestAminoMsg {
  type: "/stride.icqoracle.QueryTokenPricesRequest";
  value: QueryTokenPricesRequestAmino;
}
/**
 * QueryTokenPricesRequest is the request type for the Query/TokenPrices RPC
 * method
 */
export interface QueryTokenPricesRequestSDKType {
  pagination?: PageRequestSDKType;
}
/** TokenPriceResponse adds human readable info on to of TokenPrice */
export interface TokenPriceResponse {
  /** If IBC token, base denom unwrapped (e.g. ibc/... -> uatom) */
  baseDenomUnwrapped: string;
  /** If IBC token, Quote denom unwrapped (e.g. ibc/... -> uatom) */
  quoteDenomUnwrapped: string;
  /** The token price object with the remaining price metadata */
  tokenPrice: TokenPrice;
}
export interface TokenPriceResponseProtoMsg {
  typeUrl: "/stride.icqoracle.TokenPriceResponse";
  value: Uint8Array;
}
/** TokenPriceResponse adds human readable info on to of TokenPrice */
export interface TokenPriceResponseAmino {
  /** If IBC token, base denom unwrapped (e.g. ibc/... -> uatom) */
  base_denom_unwrapped?: string;
  /** If IBC token, Quote denom unwrapped (e.g. ibc/... -> uatom) */
  quote_denom_unwrapped?: string;
  /** The token price object with the remaining price metadata */
  token_price?: TokenPriceAmino;
}
export interface TokenPriceResponseAminoMsg {
  type: "/stride.icqoracle.TokenPriceResponse";
  value: TokenPriceResponseAmino;
}
/** TokenPriceResponse adds human readable info on to of TokenPrice */
export interface TokenPriceResponseSDKType {
  base_denom_unwrapped: string;
  quote_denom_unwrapped: string;
  token_price: TokenPriceSDKType;
}
/**
 * QueryTokenPricesResponse is the response type for the Query/TokenPrices RPC
 * method
 */
export interface QueryTokenPricesResponse {
  tokenPrices: TokenPriceResponse[];
  pagination?: PageResponse;
}
export interface QueryTokenPricesResponseProtoMsg {
  typeUrl: "/stride.icqoracle.QueryTokenPricesResponse";
  value: Uint8Array;
}
/**
 * QueryTokenPricesResponse is the response type for the Query/TokenPrices RPC
 * method
 */
export interface QueryTokenPricesResponseAmino {
  token_prices?: TokenPriceResponseAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryTokenPricesResponseAminoMsg {
  type: "/stride.icqoracle.QueryTokenPricesResponse";
  value: QueryTokenPricesResponseAmino;
}
/**
 * QueryTokenPricesResponse is the response type for the Query/TokenPrices RPC
 * method
 */
export interface QueryTokenPricesResponseSDKType {
  token_prices: TokenPriceResponseSDKType[];
  pagination?: PageResponseSDKType;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/stride.icqoracle.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/stride.icqoracle.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method */
export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse is the response type for the Query/Params RPC method */
export interface QueryParamsResponse {
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/stride.icqoracle.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method */
export interface QueryParamsResponseAmino {
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/stride.icqoracle.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
/**
 * QueryTokenPriceForQuoteDenomRequest is the request type for the
 * Query/TokenPriceForQuoteDenom RPC method
 */
export interface QueryTokenPriceForQuoteDenomRequest {
  baseDenom: string;
  quoteDenom: string;
}
export interface QueryTokenPriceForQuoteDenomRequestProtoMsg {
  typeUrl: "/stride.icqoracle.QueryTokenPriceForQuoteDenomRequest";
  value: Uint8Array;
}
/**
 * QueryTokenPriceForQuoteDenomRequest is the request type for the
 * Query/TokenPriceForQuoteDenom RPC method
 */
export interface QueryTokenPriceForQuoteDenomRequestAmino {
  base_denom?: string;
  quote_denom?: string;
}
export interface QueryTokenPriceForQuoteDenomRequestAminoMsg {
  type: "/stride.icqoracle.QueryTokenPriceForQuoteDenomRequest";
  value: QueryTokenPriceForQuoteDenomRequestAmino;
}
/**
 * QueryTokenPriceForQuoteDenomRequest is the request type for the
 * Query/TokenPriceForQuoteDenom RPC method
 */
export interface QueryTokenPriceForQuoteDenomRequestSDKType {
  base_denom: string;
  quote_denom: string;
}
/**
 * QueryTokenPriceForQuoteDenomResponse is the response type for the
 * Query/TokenPriceForQuoteDenom RPC method
 */
export interface QueryTokenPriceForQuoteDenomResponse {
  price: string;
}
export interface QueryTokenPriceForQuoteDenomResponseProtoMsg {
  typeUrl: "/stride.icqoracle.QueryTokenPriceForQuoteDenomResponse";
  value: Uint8Array;
}
/**
 * QueryTokenPriceForQuoteDenomResponse is the response type for the
 * Query/TokenPriceForQuoteDenom RPC method
 */
export interface QueryTokenPriceForQuoteDenomResponseAmino {
  price?: string;
}
export interface QueryTokenPriceForQuoteDenomResponseAminoMsg {
  type: "/stride.icqoracle.QueryTokenPriceForQuoteDenomResponse";
  value: QueryTokenPriceForQuoteDenomResponseAmino;
}
/**
 * QueryTokenPriceForQuoteDenomResponse is the response type for the
 * Query/TokenPriceForQuoteDenom RPC method
 */
export interface QueryTokenPriceForQuoteDenomResponseSDKType {
  price: string;
}
function createBaseQueryTokenPriceRequest(): QueryTokenPriceRequest {
  return {
    baseDenom: "",
    quoteDenom: "",
    poolId: BigInt(0)
  };
}
export const QueryTokenPriceRequest = {
  typeUrl: "/stride.icqoracle.QueryTokenPriceRequest",
  encode(message: QueryTokenPriceRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTokenPriceRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  fromPartial(object: Partial<QueryTokenPriceRequest>): QueryTokenPriceRequest {
    const message = createBaseQueryTokenPriceRequest();
    message.baseDenom = object.baseDenom ?? "";
    message.quoteDenom = object.quoteDenom ?? "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryTokenPriceRequestAmino): QueryTokenPriceRequest {
    const message = createBaseQueryTokenPriceRequest();
    if (object.base_denom !== undefined && object.base_denom !== null) {
      message.baseDenom = object.base_denom;
    }
    if (object.quote_denom !== undefined && object.quote_denom !== null) {
      message.quoteDenom = object.quote_denom;
    }
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    return message;
  },
  toAmino(message: QueryTokenPriceRequest): QueryTokenPriceRequestAmino {
    const obj: any = {};
    obj.base_denom = message.baseDenom === "" ? undefined : message.baseDenom;
    obj.quote_denom = message.quoteDenom === "" ? undefined : message.quoteDenom;
    obj.pool_id = message.poolId !== BigInt(0) ? message.poolId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryTokenPriceRequestAminoMsg): QueryTokenPriceRequest {
    return QueryTokenPriceRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTokenPriceRequestProtoMsg): QueryTokenPriceRequest {
    return QueryTokenPriceRequest.decode(message.value);
  },
  toProto(message: QueryTokenPriceRequest): Uint8Array {
    return QueryTokenPriceRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTokenPriceRequest): QueryTokenPriceRequestProtoMsg {
    return {
      typeUrl: "/stride.icqoracle.QueryTokenPriceRequest",
      value: QueryTokenPriceRequest.encode(message).finish()
    };
  }
};
function createBaseQueryTokenPricesRequest(): QueryTokenPricesRequest {
  return {
    pagination: undefined
  };
}
export const QueryTokenPricesRequest = {
  typeUrl: "/stride.icqoracle.QueryTokenPricesRequest",
  encode(message: QueryTokenPricesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTokenPricesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTokenPricesRequest();
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
  fromPartial(object: Partial<QueryTokenPricesRequest>): QueryTokenPricesRequest {
    const message = createBaseQueryTokenPricesRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryTokenPricesRequestAmino): QueryTokenPricesRequest {
    const message = createBaseQueryTokenPricesRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryTokenPricesRequest): QueryTokenPricesRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryTokenPricesRequestAminoMsg): QueryTokenPricesRequest {
    return QueryTokenPricesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTokenPricesRequestProtoMsg): QueryTokenPricesRequest {
    return QueryTokenPricesRequest.decode(message.value);
  },
  toProto(message: QueryTokenPricesRequest): Uint8Array {
    return QueryTokenPricesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTokenPricesRequest): QueryTokenPricesRequestProtoMsg {
    return {
      typeUrl: "/stride.icqoracle.QueryTokenPricesRequest",
      value: QueryTokenPricesRequest.encode(message).finish()
    };
  }
};
function createBaseTokenPriceResponse(): TokenPriceResponse {
  return {
    baseDenomUnwrapped: "",
    quoteDenomUnwrapped: "",
    tokenPrice: TokenPrice.fromPartial({})
  };
}
export const TokenPriceResponse = {
  typeUrl: "/stride.icqoracle.TokenPriceResponse",
  encode(message: TokenPriceResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.baseDenomUnwrapped !== "") {
      writer.uint32(10).string(message.baseDenomUnwrapped);
    }
    if (message.quoteDenomUnwrapped !== "") {
      writer.uint32(18).string(message.quoteDenomUnwrapped);
    }
    if (message.tokenPrice !== undefined) {
      TokenPrice.encode(message.tokenPrice, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TokenPriceResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
          message.tokenPrice = TokenPrice.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<TokenPriceResponse>): TokenPriceResponse {
    const message = createBaseTokenPriceResponse();
    message.baseDenomUnwrapped = object.baseDenomUnwrapped ?? "";
    message.quoteDenomUnwrapped = object.quoteDenomUnwrapped ?? "";
    message.tokenPrice = object.tokenPrice !== undefined && object.tokenPrice !== null ? TokenPrice.fromPartial(object.tokenPrice) : undefined;
    return message;
  },
  fromAmino(object: TokenPriceResponseAmino): TokenPriceResponse {
    const message = createBaseTokenPriceResponse();
    if (object.base_denom_unwrapped !== undefined && object.base_denom_unwrapped !== null) {
      message.baseDenomUnwrapped = object.base_denom_unwrapped;
    }
    if (object.quote_denom_unwrapped !== undefined && object.quote_denom_unwrapped !== null) {
      message.quoteDenomUnwrapped = object.quote_denom_unwrapped;
    }
    if (object.token_price !== undefined && object.token_price !== null) {
      message.tokenPrice = TokenPrice.fromAmino(object.token_price);
    }
    return message;
  },
  toAmino(message: TokenPriceResponse): TokenPriceResponseAmino {
    const obj: any = {};
    obj.base_denom_unwrapped = message.baseDenomUnwrapped === "" ? undefined : message.baseDenomUnwrapped;
    obj.quote_denom_unwrapped = message.quoteDenomUnwrapped === "" ? undefined : message.quoteDenomUnwrapped;
    obj.token_price = message.tokenPrice ? TokenPrice.toAmino(message.tokenPrice) : undefined;
    return obj;
  },
  fromAminoMsg(object: TokenPriceResponseAminoMsg): TokenPriceResponse {
    return TokenPriceResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: TokenPriceResponseProtoMsg): TokenPriceResponse {
    return TokenPriceResponse.decode(message.value);
  },
  toProto(message: TokenPriceResponse): Uint8Array {
    return TokenPriceResponse.encode(message).finish();
  },
  toProtoMsg(message: TokenPriceResponse): TokenPriceResponseProtoMsg {
    return {
      typeUrl: "/stride.icqoracle.TokenPriceResponse",
      value: TokenPriceResponse.encode(message).finish()
    };
  }
};
function createBaseQueryTokenPricesResponse(): QueryTokenPricesResponse {
  return {
    tokenPrices: [],
    pagination: undefined
  };
}
export const QueryTokenPricesResponse = {
  typeUrl: "/stride.icqoracle.QueryTokenPricesResponse",
  encode(message: QueryTokenPricesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.tokenPrices) {
      TokenPriceResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTokenPricesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTokenPricesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokenPrices.push(TokenPriceResponse.decode(reader, reader.uint32()));
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
  fromPartial(object: Partial<QueryTokenPricesResponse>): QueryTokenPricesResponse {
    const message = createBaseQueryTokenPricesResponse();
    message.tokenPrices = object.tokenPrices?.map(e => TokenPriceResponse.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryTokenPricesResponseAmino): QueryTokenPricesResponse {
    const message = createBaseQueryTokenPricesResponse();
    message.tokenPrices = object.token_prices?.map(e => TokenPriceResponse.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryTokenPricesResponse): QueryTokenPricesResponseAmino {
    const obj: any = {};
    if (message.tokenPrices) {
      obj.token_prices = message.tokenPrices.map(e => e ? TokenPriceResponse.toAmino(e) : undefined);
    } else {
      obj.token_prices = message.tokenPrices;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryTokenPricesResponseAminoMsg): QueryTokenPricesResponse {
    return QueryTokenPricesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTokenPricesResponseProtoMsg): QueryTokenPricesResponse {
    return QueryTokenPricesResponse.decode(message.value);
  },
  toProto(message: QueryTokenPricesResponse): Uint8Array {
    return QueryTokenPricesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTokenPricesResponse): QueryTokenPricesResponseProtoMsg {
    return {
      typeUrl: "/stride.icqoracle.QueryTokenPricesResponse",
      value: QueryTokenPricesResponse.encode(message).finish()
    };
  }
};
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/stride.icqoracle.QueryParamsRequest",
  encode(_: QueryParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  toAmino(_: QueryParamsRequest): QueryParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest {
    return QueryParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest {
    return QueryParamsRequest.decode(message.value);
  },
  toProto(message: QueryParamsRequest): Uint8Array {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg {
    return {
      typeUrl: "/stride.icqoracle.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const QueryParamsResponse = {
  typeUrl: "/stride.icqoracle.QueryParamsResponse",
  encode(message: QueryParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: QueryParamsResponse): QueryParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse {
    return QueryParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message: QueryParamsResponse): Uint8Array {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
    return {
      typeUrl: "/stride.icqoracle.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryTokenPriceForQuoteDenomRequest(): QueryTokenPriceForQuoteDenomRequest {
  return {
    baseDenom: "",
    quoteDenom: ""
  };
}
export const QueryTokenPriceForQuoteDenomRequest = {
  typeUrl: "/stride.icqoracle.QueryTokenPriceForQuoteDenomRequest",
  encode(message: QueryTokenPriceForQuoteDenomRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.baseDenom !== "") {
      writer.uint32(10).string(message.baseDenom);
    }
    if (message.quoteDenom !== "") {
      writer.uint32(18).string(message.quoteDenom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTokenPriceForQuoteDenomRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  fromPartial(object: Partial<QueryTokenPriceForQuoteDenomRequest>): QueryTokenPriceForQuoteDenomRequest {
    const message = createBaseQueryTokenPriceForQuoteDenomRequest();
    message.baseDenom = object.baseDenom ?? "";
    message.quoteDenom = object.quoteDenom ?? "";
    return message;
  },
  fromAmino(object: QueryTokenPriceForQuoteDenomRequestAmino): QueryTokenPriceForQuoteDenomRequest {
    const message = createBaseQueryTokenPriceForQuoteDenomRequest();
    if (object.base_denom !== undefined && object.base_denom !== null) {
      message.baseDenom = object.base_denom;
    }
    if (object.quote_denom !== undefined && object.quote_denom !== null) {
      message.quoteDenom = object.quote_denom;
    }
    return message;
  },
  toAmino(message: QueryTokenPriceForQuoteDenomRequest): QueryTokenPriceForQuoteDenomRequestAmino {
    const obj: any = {};
    obj.base_denom = message.baseDenom === "" ? undefined : message.baseDenom;
    obj.quote_denom = message.quoteDenom === "" ? undefined : message.quoteDenom;
    return obj;
  },
  fromAminoMsg(object: QueryTokenPriceForQuoteDenomRequestAminoMsg): QueryTokenPriceForQuoteDenomRequest {
    return QueryTokenPriceForQuoteDenomRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTokenPriceForQuoteDenomRequestProtoMsg): QueryTokenPriceForQuoteDenomRequest {
    return QueryTokenPriceForQuoteDenomRequest.decode(message.value);
  },
  toProto(message: QueryTokenPriceForQuoteDenomRequest): Uint8Array {
    return QueryTokenPriceForQuoteDenomRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTokenPriceForQuoteDenomRequest): QueryTokenPriceForQuoteDenomRequestProtoMsg {
    return {
      typeUrl: "/stride.icqoracle.QueryTokenPriceForQuoteDenomRequest",
      value: QueryTokenPriceForQuoteDenomRequest.encode(message).finish()
    };
  }
};
function createBaseQueryTokenPriceForQuoteDenomResponse(): QueryTokenPriceForQuoteDenomResponse {
  return {
    price: ""
  };
}
export const QueryTokenPriceForQuoteDenomResponse = {
  typeUrl: "/stride.icqoracle.QueryTokenPriceForQuoteDenomResponse",
  encode(message: QueryTokenPriceForQuoteDenomResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.price !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.price, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTokenPriceForQuoteDenomResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTokenPriceForQuoteDenomResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.price = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryTokenPriceForQuoteDenomResponse>): QueryTokenPriceForQuoteDenomResponse {
    const message = createBaseQueryTokenPriceForQuoteDenomResponse();
    message.price = object.price ?? "";
    return message;
  },
  fromAmino(object: QueryTokenPriceForQuoteDenomResponseAmino): QueryTokenPriceForQuoteDenomResponse {
    const message = createBaseQueryTokenPriceForQuoteDenomResponse();
    if (object.price !== undefined && object.price !== null) {
      message.price = object.price;
    }
    return message;
  },
  toAmino(message: QueryTokenPriceForQuoteDenomResponse): QueryTokenPriceForQuoteDenomResponseAmino {
    const obj: any = {};
    obj.price = message.price === "" ? undefined : Decimal.fromUserInput(message.price, 18).atomics;
    return obj;
  },
  fromAminoMsg(object: QueryTokenPriceForQuoteDenomResponseAminoMsg): QueryTokenPriceForQuoteDenomResponse {
    return QueryTokenPriceForQuoteDenomResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTokenPriceForQuoteDenomResponseProtoMsg): QueryTokenPriceForQuoteDenomResponse {
    return QueryTokenPriceForQuoteDenomResponse.decode(message.value);
  },
  toProto(message: QueryTokenPriceForQuoteDenomResponse): Uint8Array {
    return QueryTokenPriceForQuoteDenomResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTokenPriceForQuoteDenomResponse): QueryTokenPriceForQuoteDenomResponseProtoMsg {
    return {
      typeUrl: "/stride.icqoracle.QueryTokenPriceForQuoteDenomResponse",
      value: QueryTokenPriceForQuoteDenomResponse.encode(message).finish()
    };
  }
};