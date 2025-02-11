import { BinaryReader, BinaryWriter } from "../../binary";
/** The type of the Osmosis pool (gamm or CL), needed to determine the ICQ format */
export declare enum OsmosisPoolType {
    /** GAMM - Gamm (Balancer) pool */
    GAMM = 0,
    /** CONCENTRATED_LIQUIDITY - Concentrated liquidity pool */
    CONCENTRATED_LIQUIDITY = 1,
    UNRECOGNIZED = -1
}
export declare const OsmosisPoolTypeSDKType: typeof OsmosisPoolType;
export declare const OsmosisPoolTypeAmino: typeof OsmosisPoolType;
export declare function osmosisPoolTypeFromJSON(object: any): OsmosisPoolType;
export declare function osmosisPoolTypeToJSON(object: OsmosisPoolType): string;
/** TokenPrice stores latest price data for a token */
export interface TokenPrice {
    /** Base denom on Stride */
    baseDenom: string;
    /** Quote denom on Stride */
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
export interface TokenPriceProtoMsg {
    typeUrl: "/stride.icqoracle.TokenPrice";
    value: Uint8Array;
}
/** TokenPrice stores latest price data for a token */
export interface TokenPriceAmino {
    /** Base denom on Stride */
    base_denom?: string;
    /** Quote denom on Stride */
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
export interface TokenPriceAminoMsg {
    type: "/stride.icqoracle.TokenPrice";
    value: TokenPriceAmino;
}
/** TokenPrice stores latest price data for a token */
export interface TokenPriceSDKType {
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
/** OracleParams stores global oracle parameters */
export interface Params {
    /** Osmosis chain identifier */
    osmosisChainId: string;
    /** Osmosis IBC connection identifier */
    osmosisConnectionId: string;
    /**
     * Time between price updates
     * Also used to timeout icq requests
     */
    updateIntervalSec: bigint;
    /** Max time before price is considered stale/expired */
    priceExpirationTimeoutSec: bigint;
}
export interface ParamsProtoMsg {
    typeUrl: "/stride.icqoracle.Params";
    value: Uint8Array;
}
/** OracleParams stores global oracle parameters */
export interface ParamsAmino {
    /** Osmosis chain identifier */
    osmosis_chain_id: string;
    /** Osmosis IBC connection identifier */
    osmosis_connection_id: string;
    /**
     * Time between price updates
     * Also used to timeout icq requests
     */
    update_interval_sec: string;
    /** Max time before price is considered stale/expired */
    price_expiration_timeout_sec: string;
}
export interface ParamsAminoMsg {
    type: "/stride.icqoracle.Params";
    value: ParamsAmino;
}
/** OracleParams stores global oracle parameters */
export interface ParamsSDKType {
    osmosis_chain_id: string;
    osmosis_connection_id: string;
    update_interval_sec: bigint;
    price_expiration_timeout_sec: bigint;
}
export declare const TokenPrice: {
    typeUrl: string;
    encode(message: TokenPrice, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): TokenPrice;
    fromPartial(object: Partial<TokenPrice>): TokenPrice;
    fromAmino(object: TokenPriceAmino): TokenPrice;
    toAmino(message: TokenPrice): TokenPriceAmino;
    fromAminoMsg(object: TokenPriceAminoMsg): TokenPrice;
    fromProtoMsg(message: TokenPriceProtoMsg): TokenPrice;
    toProto(message: TokenPrice): Uint8Array;
    toProtoMsg(message: TokenPrice): TokenPriceProtoMsg;
};
export declare const Params: {
    typeUrl: string;
    encode(message: Params, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Params;
    fromPartial(object: Partial<Params>): Params;
    fromAmino(object: ParamsAmino): Params;
    toAmino(message: Params): ParamsAmino;
    fromAminoMsg(object: ParamsAminoMsg): Params;
    fromProtoMsg(message: ParamsProtoMsg): Params;
    toProto(message: Params): Uint8Array;
    toProtoMsg(message: Params): ParamsProtoMsg;
};
