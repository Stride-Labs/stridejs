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
    /** Token denom on Osmosis */
    osmosisBaseDenom: string;
    /** Quote denom on Osmosis */
    osmosisQuoteDenom: string;
    /** Pool ID on Osmosis */
    osmosisPoolId: string;
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
    osmosis_base_denom: string;
    osmosis_quote_denom: string;
    osmosis_pool_id: string;
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
    osmosisPoolId: string;
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
    osmosis_pool_id: string;
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
