import { BinaryReader, BinaryWriter } from "../../binary";
/** TokenPrice stores latest price data for a token */
export interface TokenPrice {
    /** Token denom on Stride */
    baseDenom: string;
    /** Quote denom on Stride */
    quoteDenom: string;
    /** Token denom on Osmosis */
    osmosisBaseDenom: string;
    /** Quote denom on Osmosis */
    osmosisQuoteDenom: string;
    /** Pool ID on Osmosis */
    osmosisPoolId: string;
    /** Spot price of base_denom denominated in quote_denom */
    spotPrice: string;
    /** Last update timestamp */
    updatedAt: Date;
    /** Whether there is a spot price query currently in progress */
    queryInProgress: boolean;
}
export interface TokenPriceProtoMsg {
    typeUrl: "/stride.icqoracle.TokenPrice";
    value: Uint8Array;
}
/** TokenPrice stores latest price data for a token */
export interface TokenPriceAmino {
    /** Token denom on Stride */
    base_denom?: string;
    /** Quote denom on Stride */
    quote_denom?: string;
    /** Token denom on Osmosis */
    osmosis_base_denom?: string;
    /** Quote denom on Osmosis */
    osmosis_quote_denom?: string;
    /** Pool ID on Osmosis */
    osmosis_pool_id?: string;
    /** Spot price of base_denom denominated in quote_denom */
    spot_price?: string;
    /** Last update timestamp */
    updated_at?: string;
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
    osmosis_base_denom: string;
    osmosis_quote_denom: string;
    osmosis_pool_id: string;
    spot_price: string;
    updated_at: Date;
    query_in_progress: boolean;
}
/** OracleParams stores global oracle parameters */
export interface Params {
    /** Osmosis chain identifier */
    osmosisChainId: string;
    /** Osmosis IBC connection identifier */
    osmosisConnectionId: string;
    /** Time between price updates */
    updateIntervalSec: bigint;
    /** Max time before price is considered stale/expired */
    priceExpirationTimeoutSec: bigint;
    /** ICQ timeout */
    icqTimeoutSec: bigint;
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
    /** Time between price updates */
    update_interval_sec: string;
    /** Max time before price is considered stale/expired */
    price_expiration_timeout_sec: string;
    /** ICQ timeout */
    icq_timeout_sec: string;
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
    icq_timeout_sec: bigint;
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
