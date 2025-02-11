import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsAmino, ParamsSDKType, OsmosisPoolType } from "./icqoracle";
import { Timestamp } from "../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../binary";
import { Decimal } from "@cosmjs/math";
import { toTimestamp, fromTimestamp } from "../../helpers";
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
 * QueryTokenPriceResponse is the response type for the Query/TokenPrice RPC
 * method
 */
export interface QueryTokenPriceResponse {
  tokenPrice: TokenPriceResponse;
}
export interface QueryTokenPriceResponseProtoMsg {
  typeUrl: "/stride.icqoracle.QueryTokenPriceResponse";
  value: Uint8Array;
}
/**
 * QueryTokenPriceResponse is the response type for the Query/TokenPrice RPC
 * method
 */
export interface QueryTokenPriceResponseAmino {
  token_price?: TokenPriceResponseAmino;
}
export interface QueryTokenPriceResponseAminoMsg {
  type: "/stride.icqoracle.QueryTokenPriceResponse";
  value: QueryTokenPriceResponseAmino;
}
/**
 * QueryTokenPriceResponse is the response type for the Query/TokenPrice RPC
 * method
 */
export interface QueryTokenPriceResponseSDKType {
  token_price: TokenPriceResponseSDKType;
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
/** TokenPriceResponse adds human readable info on to of TokenPrice */
export interface TokenPriceResponse {
  /** If IBC token, base denom unwrapped (e.g. ibc/... -> uatom) */
  baseDenomUnwrapped: string;
  /** If IBC token, Quote denom unwrapped (e.g. ibc/... -> uatom) */
  quoteDenomUnwrapped: string;
  /** Base denom on Stride, can be IBC denom */
  baseDenom: string;
  /** Quote denom on Stride, can be IBC denom */
  quoteDenom: string;
  /** Decimals of base token, used for normalizing price feed from Osmosis */
  baseDenomDecimals: bigint;
  /** Decimals of quote token, used for normalizing price feed from Osmosis */
  quoteDenomDecimals: bigint;
  /** Base denom on Osmosis */
  osmosisBaseDenom: string;
  /** Quote denom on Osmosis */
  osmosisQuoteDenom: string;
  /** Pool ID on Osmosis */
  osmosisPoolId: bigint;
  /** Osmosis pool type (gamm or CL) */
  osmosisPoolType: OsmosisPoolType;
  /** Spot price of base_denom denominated in quote_denom */
  spotPrice: string;
  /** Last time a query request was submitted */
  lastRequestTime: Date;
  /** Last time a query response was received */
  lastResponseTime: Date;
  /** Whether there is a spot price query currently in progress */
  queryInProgress: boolean;
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
  /** Base denom on Stride, can be IBC denom */
  base_denom?: string;
  /** Quote denom on Stride, can be IBC denom */
  quote_denom?: string;
  /** Decimals of base token, used for normalizing price feed from Osmosis */
  base_denom_decimals?: string;
  /** Decimals of quote token, used for normalizing price feed from Osmosis */
  quote_denom_decimals?: string;
  /** Base denom on Osmosis */
  osmosis_base_denom?: string;
  /** Quote denom on Osmosis */
  osmosis_quote_denom?: string;
  /** Pool ID on Osmosis */
  osmosis_pool_id?: string;
  /** Osmosis pool type (gamm or CL) */
  osmosis_pool_type?: OsmosisPoolType;
  /** Spot price of base_denom denominated in quote_denom */
  spot_price?: string;
  /** Last time a query request was submitted */
  last_request_time?: string;
  /** Last time a query response was received */
  last_response_time?: string;
  /** Whether there is a spot price query currently in progress */
  query_in_progress?: boolean;
}
export interface TokenPriceResponseAminoMsg {
  type: "/stride.icqoracle.TokenPriceResponse";
  value: TokenPriceResponseAmino;
}
/** TokenPriceResponse adds human readable info on to of TokenPrice */
export interface TokenPriceResponseSDKType {
  base_denom_unwrapped: string;
  quote_denom_unwrapped: string;
  base_denom: string;
  quote_denom: string;
  base_denom_decimals: bigint;
  quote_denom_decimals: bigint;
  osmosis_base_denom: string;
  osmosis_quote_denom: string;
  osmosis_pool_id: bigint;
  osmosis_pool_type: OsmosisPoolType;
  spot_price: string;
  last_request_time: Date;
  last_response_time: Date;
  query_in_progress: boolean;
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
function createBaseQueryTokenPriceResponse(): QueryTokenPriceResponse {
  return {
    tokenPrice: TokenPriceResponse.fromPartial({})
  };
}
export const QueryTokenPriceResponse = {
  typeUrl: "/stride.icqoracle.QueryTokenPriceResponse",
  encode(message: QueryTokenPriceResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tokenPrice !== undefined) {
      TokenPriceResponse.encode(message.tokenPrice, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTokenPriceResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  fromPartial(object: Partial<QueryTokenPriceResponse>): QueryTokenPriceResponse {
    const message = createBaseQueryTokenPriceResponse();
    message.tokenPrice = object.tokenPrice !== undefined && object.tokenPrice !== null ? TokenPriceResponse.fromPartial(object.tokenPrice) : undefined;
    return message;
  },
  fromAmino(object: QueryTokenPriceResponseAmino): QueryTokenPriceResponse {
    const message = createBaseQueryTokenPriceResponse();
    if (object.token_price !== undefined && object.token_price !== null) {
      message.tokenPrice = TokenPriceResponse.fromAmino(object.token_price);
    }
    return message;
  },
  toAmino(message: QueryTokenPriceResponse): QueryTokenPriceResponseAmino {
    const obj: any = {};
    obj.token_price = message.tokenPrice ? TokenPriceResponse.toAmino(message.tokenPrice) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryTokenPriceResponseAminoMsg): QueryTokenPriceResponse {
    return QueryTokenPriceResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTokenPriceResponseProtoMsg): QueryTokenPriceResponse {
    return QueryTokenPriceResponse.decode(message.value);
  },
  toProto(message: QueryTokenPriceResponse): Uint8Array {
    return QueryTokenPriceResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTokenPriceResponse): QueryTokenPriceResponseProtoMsg {
    return {
      typeUrl: "/stride.icqoracle.QueryTokenPriceResponse",
      value: QueryTokenPriceResponse.encode(message).finish()
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
    obj.price = message.price === "" ? undefined : message.price;
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
function createBaseTokenPriceResponse(): TokenPriceResponse {
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
    osmosisPoolType: 0,
    spotPrice: "",
    lastRequestTime: new Date(),
    lastResponseTime: new Date(),
    queryInProgress: false
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
    if (message.osmosisPoolType !== 0) {
      writer.uint32(80).int32(message.osmosisPoolType);
    }
    if (message.spotPrice !== "") {
      writer.uint32(90).string(Decimal.fromUserInput(message.spotPrice, 18).atomics);
    }
    if (message.lastRequestTime !== undefined) {
      Timestamp.encode(toTimestamp(message.lastRequestTime), writer.uint32(98).fork()).ldelim();
    }
    if (message.lastResponseTime !== undefined) {
      Timestamp.encode(toTimestamp(message.lastResponseTime), writer.uint32(106).fork()).ldelim();
    }
    if (message.queryInProgress === true) {
      writer.uint32(112).bool(message.queryInProgress);
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
          message.osmosisPoolType = reader.int32() as any;
          break;
        case 11:
          message.spotPrice = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 12:
          message.lastRequestTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 13:
          message.lastResponseTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 14:
          message.queryInProgress = reader.bool();
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
    message.baseDenom = object.baseDenom ?? "";
    message.quoteDenom = object.quoteDenom ?? "";
    message.baseDenomDecimals = object.baseDenomDecimals !== undefined && object.baseDenomDecimals !== null ? BigInt(object.baseDenomDecimals.toString()) : BigInt(0);
    message.quoteDenomDecimals = object.quoteDenomDecimals !== undefined && object.quoteDenomDecimals !== null ? BigInt(object.quoteDenomDecimals.toString()) : BigInt(0);
    message.osmosisBaseDenom = object.osmosisBaseDenom ?? "";
    message.osmosisQuoteDenom = object.osmosisQuoteDenom ?? "";
    message.osmosisPoolId = object.osmosisPoolId !== undefined && object.osmosisPoolId !== null ? BigInt(object.osmosisPoolId.toString()) : BigInt(0);
    message.osmosisPoolType = object.osmosisPoolType ?? 0;
    message.spotPrice = object.spotPrice ?? "";
    message.lastRequestTime = object.lastRequestTime ?? undefined;
    message.lastResponseTime = object.lastResponseTime ?? undefined;
    message.queryInProgress = object.queryInProgress ?? false;
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
    if (object.base_denom !== undefined && object.base_denom !== null) {
      message.baseDenom = object.base_denom;
    }
    if (object.quote_denom !== undefined && object.quote_denom !== null) {
      message.quoteDenom = object.quote_denom;
    }
    if (object.base_denom_decimals !== undefined && object.base_denom_decimals !== null) {
      message.baseDenomDecimals = BigInt(object.base_denom_decimals);
    }
    if (object.quote_denom_decimals !== undefined && object.quote_denom_decimals !== null) {
      message.quoteDenomDecimals = BigInt(object.quote_denom_decimals);
    }
    if (object.osmosis_base_denom !== undefined && object.osmosis_base_denom !== null) {
      message.osmosisBaseDenom = object.osmosis_base_denom;
    }
    if (object.osmosis_quote_denom !== undefined && object.osmosis_quote_denom !== null) {
      message.osmosisQuoteDenom = object.osmosis_quote_denom;
    }
    if (object.osmosis_pool_id !== undefined && object.osmosis_pool_id !== null) {
      message.osmosisPoolId = BigInt(object.osmosis_pool_id);
    }
    if (object.osmosis_pool_type !== undefined && object.osmosis_pool_type !== null) {
      message.osmosisPoolType = object.osmosis_pool_type;
    }
    if (object.spot_price !== undefined && object.spot_price !== null) {
      message.spotPrice = object.spot_price;
    }
    if (object.last_request_time !== undefined && object.last_request_time !== null) {
      message.lastRequestTime = fromTimestamp(Timestamp.fromAmino(object.last_request_time));
    }
    if (object.last_response_time !== undefined && object.last_response_time !== null) {
      message.lastResponseTime = fromTimestamp(Timestamp.fromAmino(object.last_response_time));
    }
    if (object.query_in_progress !== undefined && object.query_in_progress !== null) {
      message.queryInProgress = object.query_in_progress;
    }
    return message;
  },
  toAmino(message: TokenPriceResponse): TokenPriceResponseAmino {
    const obj: any = {};
    obj.base_denom_unwrapped = message.baseDenomUnwrapped === "" ? undefined : message.baseDenomUnwrapped;
    obj.quote_denom_unwrapped = message.quoteDenomUnwrapped === "" ? undefined : message.quoteDenomUnwrapped;
    obj.base_denom = message.baseDenom === "" ? undefined : message.baseDenom;
    obj.quote_denom = message.quoteDenom === "" ? undefined : message.quoteDenom;
    obj.base_denom_decimals = message.baseDenomDecimals !== BigInt(0) ? message.baseDenomDecimals?.toString() : undefined;
    obj.quote_denom_decimals = message.quoteDenomDecimals !== BigInt(0) ? message.quoteDenomDecimals?.toString() : undefined;
    obj.osmosis_base_denom = message.osmosisBaseDenom === "" ? undefined : message.osmosisBaseDenom;
    obj.osmosis_quote_denom = message.osmosisQuoteDenom === "" ? undefined : message.osmosisQuoteDenom;
    obj.osmosis_pool_id = message.osmosisPoolId !== BigInt(0) ? message.osmosisPoolId?.toString() : undefined;
    obj.osmosis_pool_type = message.osmosisPoolType === 0 ? undefined : message.osmosisPoolType;
    obj.spot_price = message.spotPrice === "" ? undefined : message.spotPrice;
    obj.last_request_time = message.lastRequestTime ? Timestamp.toAmino(toTimestamp(message.lastRequestTime)) : undefined;
    obj.last_response_time = message.lastResponseTime ? Timestamp.toAmino(toTimestamp(message.lastResponseTime)) : undefined;
    obj.query_in_progress = message.queryInProgress === false ? undefined : message.queryInProgress;
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