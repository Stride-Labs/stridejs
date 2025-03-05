import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { TokenPrice, TokenPriceAmino, TokenPriceSDKType, Params, ParamsAmino, ParamsSDKType } from "./icqoracle";
import { BinaryReader, BinaryWriter } from "../../binary";
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
export interface QueryParamsRequest {
}
export interface QueryParamsRequestProtoMsg {
    typeUrl: "/stride.icqoracle.QueryParamsRequest";
    value: Uint8Array;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method */
export interface QueryParamsRequestAmino {
}
export interface QueryParamsRequestAminoMsg {
    type: "/stride.icqoracle.QueryParamsRequest";
    value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method */
export interface QueryParamsRequestSDKType {
}
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
export declare const QueryTokenPriceRequest: {
    typeUrl: string;
    encode(message: QueryTokenPriceRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryTokenPriceRequest;
    fromPartial(object: Partial<QueryTokenPriceRequest>): QueryTokenPriceRequest;
    fromAmino(object: QueryTokenPriceRequestAmino): QueryTokenPriceRequest;
    toAmino(message: QueryTokenPriceRequest): QueryTokenPriceRequestAmino;
    fromAminoMsg(object: QueryTokenPriceRequestAminoMsg): QueryTokenPriceRequest;
    fromProtoMsg(message: QueryTokenPriceRequestProtoMsg): QueryTokenPriceRequest;
    toProto(message: QueryTokenPriceRequest): Uint8Array;
    toProtoMsg(message: QueryTokenPriceRequest): QueryTokenPriceRequestProtoMsg;
};
export declare const QueryTokenPricesRequest: {
    typeUrl: string;
    encode(message: QueryTokenPricesRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryTokenPricesRequest;
    fromPartial(object: Partial<QueryTokenPricesRequest>): QueryTokenPricesRequest;
    fromAmino(object: QueryTokenPricesRequestAmino): QueryTokenPricesRequest;
    toAmino(message: QueryTokenPricesRequest): QueryTokenPricesRequestAmino;
    fromAminoMsg(object: QueryTokenPricesRequestAminoMsg): QueryTokenPricesRequest;
    fromProtoMsg(message: QueryTokenPricesRequestProtoMsg): QueryTokenPricesRequest;
    toProto(message: QueryTokenPricesRequest): Uint8Array;
    toProtoMsg(message: QueryTokenPricesRequest): QueryTokenPricesRequestProtoMsg;
};
export declare const TokenPriceResponse: {
    typeUrl: string;
    encode(message: TokenPriceResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): TokenPriceResponse;
    fromPartial(object: Partial<TokenPriceResponse>): TokenPriceResponse;
    fromAmino(object: TokenPriceResponseAmino): TokenPriceResponse;
    toAmino(message: TokenPriceResponse): TokenPriceResponseAmino;
    fromAminoMsg(object: TokenPriceResponseAminoMsg): TokenPriceResponse;
    fromProtoMsg(message: TokenPriceResponseProtoMsg): TokenPriceResponse;
    toProto(message: TokenPriceResponse): Uint8Array;
    toProtoMsg(message: TokenPriceResponse): TokenPriceResponseProtoMsg;
};
export declare const QueryTokenPricesResponse: {
    typeUrl: string;
    encode(message: QueryTokenPricesResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryTokenPricesResponse;
    fromPartial(object: Partial<QueryTokenPricesResponse>): QueryTokenPricesResponse;
    fromAmino(object: QueryTokenPricesResponseAmino): QueryTokenPricesResponse;
    toAmino(message: QueryTokenPricesResponse): QueryTokenPricesResponseAmino;
    fromAminoMsg(object: QueryTokenPricesResponseAminoMsg): QueryTokenPricesResponse;
    fromProtoMsg(message: QueryTokenPricesResponseProtoMsg): QueryTokenPricesResponse;
    toProto(message: QueryTokenPricesResponse): Uint8Array;
    toProtoMsg(message: QueryTokenPricesResponse): QueryTokenPricesResponseProtoMsg;
};
export declare const QueryParamsRequest: {
    typeUrl: string;
    encode(_: QueryParamsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest;
    fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest;
    fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest;
    toAmino(_: QueryParamsRequest): QueryParamsRequestAmino;
    fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest;
    fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest;
    toProto(message: QueryParamsRequest): Uint8Array;
    toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg;
};
export declare const QueryParamsResponse: {
    typeUrl: string;
    encode(message: QueryParamsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse;
    fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse;
    fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse;
    toAmino(message: QueryParamsResponse): QueryParamsResponseAmino;
    fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse;
    fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse;
    toProto(message: QueryParamsResponse): Uint8Array;
    toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg;
};
export declare const QueryTokenPriceForQuoteDenomRequest: {
    typeUrl: string;
    encode(message: QueryTokenPriceForQuoteDenomRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryTokenPriceForQuoteDenomRequest;
    fromPartial(object: Partial<QueryTokenPriceForQuoteDenomRequest>): QueryTokenPriceForQuoteDenomRequest;
    fromAmino(object: QueryTokenPriceForQuoteDenomRequestAmino): QueryTokenPriceForQuoteDenomRequest;
    toAmino(message: QueryTokenPriceForQuoteDenomRequest): QueryTokenPriceForQuoteDenomRequestAmino;
    fromAminoMsg(object: QueryTokenPriceForQuoteDenomRequestAminoMsg): QueryTokenPriceForQuoteDenomRequest;
    fromProtoMsg(message: QueryTokenPriceForQuoteDenomRequestProtoMsg): QueryTokenPriceForQuoteDenomRequest;
    toProto(message: QueryTokenPriceForQuoteDenomRequest): Uint8Array;
    toProtoMsg(message: QueryTokenPriceForQuoteDenomRequest): QueryTokenPriceForQuoteDenomRequestProtoMsg;
};
export declare const QueryTokenPriceForQuoteDenomResponse: {
    typeUrl: string;
    encode(message: QueryTokenPriceForQuoteDenomResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryTokenPriceForQuoteDenomResponse;
    fromPartial(object: Partial<QueryTokenPriceForQuoteDenomResponse>): QueryTokenPriceForQuoteDenomResponse;
    fromAmino(object: QueryTokenPriceForQuoteDenomResponseAmino): QueryTokenPriceForQuoteDenomResponse;
    toAmino(message: QueryTokenPriceForQuoteDenomResponse): QueryTokenPriceForQuoteDenomResponseAmino;
    fromAminoMsg(object: QueryTokenPriceForQuoteDenomResponseAminoMsg): QueryTokenPriceForQuoteDenomResponse;
    fromProtoMsg(message: QueryTokenPriceForQuoteDenomResponseProtoMsg): QueryTokenPriceForQuoteDenomResponse;
    toProto(message: QueryTokenPriceForQuoteDenomResponse): Uint8Array;
    toProtoMsg(message: QueryTokenPriceForQuoteDenomResponse): QueryTokenPriceForQuoteDenomResponseProtoMsg;
};
