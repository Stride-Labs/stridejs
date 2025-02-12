import { Params, ParamsAmino, ParamsSDKType } from "./icqoracle";
import { BinaryReader, BinaryWriter } from "../../binary";
/**
 * MsgRegisterTokenPriceQuery defines the message for adding a new token to
 * track prices
 */
export interface MsgRegisterTokenPriceQuery {
    admin: string;
    /** Token denom on Stride */
    baseDenom: string;
    /** Quote denom on Stride */
    quoteDenom: string;
    /** Decimals of base token, used for normalizing price feed from Osmosis */
    baseDenomDecimals: bigint;
    /** Decimals of quote token, used for normalizing price feed from Osmosis */
    quoteDenomDecimals: bigint;
    /** Token denom on Osmosis */
    osmosisBaseDenom: string;
    /** Quote denom on Osmosis */
    osmosisQuoteDenom: string;
    /** Pool ID on Osmosis */
    osmosisPoolId: bigint;
}
export interface MsgRegisterTokenPriceQueryProtoMsg {
    typeUrl: "/stride.icqoracle.MsgRegisterTokenPriceQuery";
    value: Uint8Array;
}
/**
 * MsgRegisterTokenPriceQuery defines the message for adding a new token to
 * track prices
 */
export interface MsgRegisterTokenPriceQueryAmino {
    admin?: string;
    /** Token denom on Stride */
    base_denom?: string;
    /** Quote denom on Stride */
    quote_denom?: string;
    /** Decimals of base token, used for normalizing price feed from Osmosis */
    base_denom_decimals?: string;
    /** Decimals of quote token, used for normalizing price feed from Osmosis */
    quote_denom_decimals?: string;
    /** Token denom on Osmosis */
    osmosis_base_denom?: string;
    /** Quote denom on Osmosis */
    osmosis_quote_denom?: string;
    /** Pool ID on Osmosis */
    osmosis_pool_id?: string;
}
export interface MsgRegisterTokenPriceQueryAminoMsg {
    type: "icqoracle/MsgRegisterTokenPriceQuery";
    value: MsgRegisterTokenPriceQueryAmino;
}
/**
 * MsgRegisterTokenPriceQuery defines the message for adding a new token to
 * track prices
 */
export interface MsgRegisterTokenPriceQuerySDKType {
    admin: string;
    base_denom: string;
    quote_denom: string;
    base_denom_decimals: bigint;
    quote_denom_decimals: bigint;
    osmosis_base_denom: string;
    osmosis_quote_denom: string;
    osmosis_pool_id: bigint;
}
export interface MsgRegisterTokenPriceQueryResponse {
}
export interface MsgRegisterTokenPriceQueryResponseProtoMsg {
    typeUrl: "/stride.icqoracle.MsgRegisterTokenPriceQueryResponse";
    value: Uint8Array;
}
export interface MsgRegisterTokenPriceQueryResponseAmino {
}
export interface MsgRegisterTokenPriceQueryResponseAminoMsg {
    type: "/stride.icqoracle.MsgRegisterTokenPriceQueryResponse";
    value: MsgRegisterTokenPriceQueryResponseAmino;
}
export interface MsgRegisterTokenPriceQueryResponseSDKType {
}
/**
 * MsgRemoveTokenPriceQuery defines the message for removing a token from price
 * tracking
 */
export interface MsgRemoveTokenPriceQuery {
    admin: string;
    /** Token denom on Stride */
    baseDenom: string;
    /** Quote denom on Stride */
    quoteDenom: string;
    /** Pool ID on Osmosis */
    osmosisPoolId: bigint;
}
export interface MsgRemoveTokenPriceQueryProtoMsg {
    typeUrl: "/stride.icqoracle.MsgRemoveTokenPriceQuery";
    value: Uint8Array;
}
/**
 * MsgRemoveTokenPriceQuery defines the message for removing a token from price
 * tracking
 */
export interface MsgRemoveTokenPriceQueryAmino {
    admin?: string;
    /** Token denom on Stride */
    base_denom?: string;
    /** Quote denom on Stride */
    quote_denom?: string;
    /** Pool ID on Osmosis */
    osmosis_pool_id?: string;
}
export interface MsgRemoveTokenPriceQueryAminoMsg {
    type: "icqoracle/MsgRemoveTokenPriceQuery";
    value: MsgRemoveTokenPriceQueryAmino;
}
/**
 * MsgRemoveTokenPriceQuery defines the message for removing a token from price
 * tracking
 */
export interface MsgRemoveTokenPriceQuerySDKType {
    admin: string;
    base_denom: string;
    quote_denom: string;
    osmosis_pool_id: bigint;
}
export interface MsgRemoveTokenPriceQueryResponse {
}
export interface MsgRemoveTokenPriceQueryResponseProtoMsg {
    typeUrl: "/stride.icqoracle.MsgRemoveTokenPriceQueryResponse";
    value: Uint8Array;
}
export interface MsgRemoveTokenPriceQueryResponseAmino {
}
export interface MsgRemoveTokenPriceQueryResponseAminoMsg {
    type: "/stride.icqoracle.MsgRemoveTokenPriceQueryResponse";
    value: MsgRemoveTokenPriceQueryResponseAmino;
}
export interface MsgRemoveTokenPriceQueryResponseSDKType {
}
/** MsgUpdateParams is the Msg/UpdateParams request type. */
export interface MsgUpdateParams {
    /**
     * authority is the address that controls the module (defaults to x/gov unless
     * overwritten).
     */
    authority: string;
    /**
     * params defines the x/icqoracle parameters to update.
     *
     * NOTE: All parameters must be supplied.
     */
    params: Params;
}
export interface MsgUpdateParamsProtoMsg {
    typeUrl: "/stride.icqoracle.MsgUpdateParams";
    value: Uint8Array;
}
/** MsgUpdateParams is the Msg/UpdateParams request type. */
export interface MsgUpdateParamsAmino {
    /**
     * authority is the address that controls the module (defaults to x/gov unless
     * overwritten).
     */
    authority?: string;
    /**
     * params defines the x/icqoracle parameters to update.
     *
     * NOTE: All parameters must be supplied.
     */
    params: ParamsAmino;
}
export interface MsgUpdateParamsAminoMsg {
    type: "icqoracle/MsgUpdateParams";
    value: MsgUpdateParamsAmino;
}
/** MsgUpdateParams is the Msg/UpdateParams request type. */
export interface MsgUpdateParamsSDKType {
    authority: string;
    params: ParamsSDKType;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 */
export interface MsgUpdateParamsResponse {
}
export interface MsgUpdateParamsResponseProtoMsg {
    typeUrl: "/stride.icqoracle.MsgUpdateParamsResponse";
    value: Uint8Array;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 */
export interface MsgUpdateParamsResponseAmino {
}
export interface MsgUpdateParamsResponseAminoMsg {
    type: "/stride.icqoracle.MsgUpdateParamsResponse";
    value: MsgUpdateParamsResponseAmino;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 */
export interface MsgUpdateParamsResponseSDKType {
}
export declare const MsgRegisterTokenPriceQuery: {
    typeUrl: string;
    encode(message: MsgRegisterTokenPriceQuery, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgRegisterTokenPriceQuery;
    fromPartial(object: Partial<MsgRegisterTokenPriceQuery>): MsgRegisterTokenPriceQuery;
    fromAmino(object: MsgRegisterTokenPriceQueryAmino): MsgRegisterTokenPriceQuery;
    toAmino(message: MsgRegisterTokenPriceQuery): MsgRegisterTokenPriceQueryAmino;
    fromAminoMsg(object: MsgRegisterTokenPriceQueryAminoMsg): MsgRegisterTokenPriceQuery;
    toAminoMsg(message: MsgRegisterTokenPriceQuery): MsgRegisterTokenPriceQueryAminoMsg;
    fromProtoMsg(message: MsgRegisterTokenPriceQueryProtoMsg): MsgRegisterTokenPriceQuery;
    toProto(message: MsgRegisterTokenPriceQuery): Uint8Array;
    toProtoMsg(message: MsgRegisterTokenPriceQuery): MsgRegisterTokenPriceQueryProtoMsg;
};
export declare const MsgRegisterTokenPriceQueryResponse: {
    typeUrl: string;
    encode(_: MsgRegisterTokenPriceQueryResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgRegisterTokenPriceQueryResponse;
    fromPartial(_: Partial<MsgRegisterTokenPriceQueryResponse>): MsgRegisterTokenPriceQueryResponse;
    fromAmino(_: MsgRegisterTokenPriceQueryResponseAmino): MsgRegisterTokenPriceQueryResponse;
    toAmino(_: MsgRegisterTokenPriceQueryResponse): MsgRegisterTokenPriceQueryResponseAmino;
    fromAminoMsg(object: MsgRegisterTokenPriceQueryResponseAminoMsg): MsgRegisterTokenPriceQueryResponse;
    fromProtoMsg(message: MsgRegisterTokenPriceQueryResponseProtoMsg): MsgRegisterTokenPriceQueryResponse;
    toProto(message: MsgRegisterTokenPriceQueryResponse): Uint8Array;
    toProtoMsg(message: MsgRegisterTokenPriceQueryResponse): MsgRegisterTokenPriceQueryResponseProtoMsg;
};
export declare const MsgRemoveTokenPriceQuery: {
    typeUrl: string;
    encode(message: MsgRemoveTokenPriceQuery, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgRemoveTokenPriceQuery;
    fromPartial(object: Partial<MsgRemoveTokenPriceQuery>): MsgRemoveTokenPriceQuery;
    fromAmino(object: MsgRemoveTokenPriceQueryAmino): MsgRemoveTokenPriceQuery;
    toAmino(message: MsgRemoveTokenPriceQuery): MsgRemoveTokenPriceQueryAmino;
    fromAminoMsg(object: MsgRemoveTokenPriceQueryAminoMsg): MsgRemoveTokenPriceQuery;
    toAminoMsg(message: MsgRemoveTokenPriceQuery): MsgRemoveTokenPriceQueryAminoMsg;
    fromProtoMsg(message: MsgRemoveTokenPriceQueryProtoMsg): MsgRemoveTokenPriceQuery;
    toProto(message: MsgRemoveTokenPriceQuery): Uint8Array;
    toProtoMsg(message: MsgRemoveTokenPriceQuery): MsgRemoveTokenPriceQueryProtoMsg;
};
export declare const MsgRemoveTokenPriceQueryResponse: {
    typeUrl: string;
    encode(_: MsgRemoveTokenPriceQueryResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgRemoveTokenPriceQueryResponse;
    fromPartial(_: Partial<MsgRemoveTokenPriceQueryResponse>): MsgRemoveTokenPriceQueryResponse;
    fromAmino(_: MsgRemoveTokenPriceQueryResponseAmino): MsgRemoveTokenPriceQueryResponse;
    toAmino(_: MsgRemoveTokenPriceQueryResponse): MsgRemoveTokenPriceQueryResponseAmino;
    fromAminoMsg(object: MsgRemoveTokenPriceQueryResponseAminoMsg): MsgRemoveTokenPriceQueryResponse;
    fromProtoMsg(message: MsgRemoveTokenPriceQueryResponseProtoMsg): MsgRemoveTokenPriceQueryResponse;
    toProto(message: MsgRemoveTokenPriceQueryResponse): Uint8Array;
    toProtoMsg(message: MsgRemoveTokenPriceQueryResponse): MsgRemoveTokenPriceQueryResponseProtoMsg;
};
export declare const MsgUpdateParams: {
    typeUrl: string;
    encode(message: MsgUpdateParams, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParams;
    fromPartial(object: Partial<MsgUpdateParams>): MsgUpdateParams;
    fromAmino(object: MsgUpdateParamsAmino): MsgUpdateParams;
    toAmino(message: MsgUpdateParams): MsgUpdateParamsAmino;
    fromAminoMsg(object: MsgUpdateParamsAminoMsg): MsgUpdateParams;
    toAminoMsg(message: MsgUpdateParams): MsgUpdateParamsAminoMsg;
    fromProtoMsg(message: MsgUpdateParamsProtoMsg): MsgUpdateParams;
    toProto(message: MsgUpdateParams): Uint8Array;
    toProtoMsg(message: MsgUpdateParams): MsgUpdateParamsProtoMsg;
};
export declare const MsgUpdateParamsResponse: {
    typeUrl: string;
    encode(_: MsgUpdateParamsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParamsResponse;
    fromPartial(_: Partial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse;
    fromAmino(_: MsgUpdateParamsResponseAmino): MsgUpdateParamsResponse;
    toAmino(_: MsgUpdateParamsResponse): MsgUpdateParamsResponseAmino;
    fromAminoMsg(object: MsgUpdateParamsResponseAminoMsg): MsgUpdateParamsResponse;
    fromProtoMsg(message: MsgUpdateParamsResponseProtoMsg): MsgUpdateParamsResponse;
    toProto(message: MsgUpdateParamsResponse): Uint8Array;
    toProtoMsg(message: MsgUpdateParamsResponse): MsgUpdateParamsResponseProtoMsg;
};
