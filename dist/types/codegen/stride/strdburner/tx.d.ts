import { BinaryReader, BinaryWriter } from "../../binary";
/** Burn STRD */
export interface MsgBurn {
    burner: string;
    amount: string;
}
export interface MsgBurnProtoMsg {
    typeUrl: "/stride.strdburner.MsgBurn";
    value: Uint8Array;
}
/**
 * Burn STRD
 * @name MsgBurnAmino
 * @package stride.strdburner
 * @see proto type: stride.strdburner.MsgBurn
 */
export interface MsgBurnAmino {
    burner?: string;
    amount?: string;
}
export interface MsgBurnAminoMsg {
    type: "strdburner/MsgBurn";
    value: MsgBurnAmino;
}
/** Burn STRD */
export interface MsgBurnSDKType {
    burner: string;
    amount: string;
}
export interface MsgBurnResponse {
}
export interface MsgBurnResponseProtoMsg {
    typeUrl: "/stride.strdburner.MsgBurnResponse";
    value: Uint8Array;
}
/**
 * @name MsgBurnResponseAmino
 * @package stride.strdburner
 * @see proto type: stride.strdburner.MsgBurnResponse
 */
export interface MsgBurnResponseAmino {
}
export interface MsgBurnResponseAminoMsg {
    type: "/stride.strdburner.MsgBurnResponse";
    value: MsgBurnResponseAmino;
}
export interface MsgBurnResponseSDKType {
}
/** Link non-stride address */
export interface MsgLink {
    strideAddress: string;
    linkedAddress: string;
}
export interface MsgLinkProtoMsg {
    typeUrl: "/stride.strdburner.MsgLink";
    value: Uint8Array;
}
/**
 * Link non-stride address
 * @name MsgLinkAmino
 * @package stride.strdburner
 * @see proto type: stride.strdburner.MsgLink
 */
export interface MsgLinkAmino {
    stride_address?: string;
    linked_address?: string;
}
export interface MsgLinkAminoMsg {
    type: "strdburner/MsgLink";
    value: MsgLinkAmino;
}
/** Link non-stride address */
export interface MsgLinkSDKType {
    stride_address: string;
    linked_address: string;
}
export interface MsgLinkResponse {
}
export interface MsgLinkResponseProtoMsg {
    typeUrl: "/stride.strdburner.MsgLinkResponse";
    value: Uint8Array;
}
/**
 * @name MsgLinkResponseAmino
 * @package stride.strdburner
 * @see proto type: stride.strdburner.MsgLinkResponse
 */
export interface MsgLinkResponseAmino {
}
export interface MsgLinkResponseAminoMsg {
    type: "/stride.strdburner.MsgLinkResponse";
    value: MsgLinkResponseAmino;
}
export interface MsgLinkResponseSDKType {
}
export declare const MsgBurn: {
    typeUrl: string;
    encode(message: MsgBurn, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgBurn;
    fromPartial(object: Partial<MsgBurn>): MsgBurn;
    fromAmino(object: MsgBurnAmino): MsgBurn;
    toAmino(message: MsgBurn): MsgBurnAmino;
    fromAminoMsg(object: MsgBurnAminoMsg): MsgBurn;
    toAminoMsg(message: MsgBurn): MsgBurnAminoMsg;
    fromProtoMsg(message: MsgBurnProtoMsg): MsgBurn;
    toProto(message: MsgBurn): Uint8Array;
    toProtoMsg(message: MsgBurn): MsgBurnProtoMsg;
};
export declare const MsgBurnResponse: {
    typeUrl: string;
    encode(_: MsgBurnResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgBurnResponse;
    fromPartial(_: Partial<MsgBurnResponse>): MsgBurnResponse;
    fromAmino(_: MsgBurnResponseAmino): MsgBurnResponse;
    toAmino(_: MsgBurnResponse): MsgBurnResponseAmino;
    fromAminoMsg(object: MsgBurnResponseAminoMsg): MsgBurnResponse;
    fromProtoMsg(message: MsgBurnResponseProtoMsg): MsgBurnResponse;
    toProto(message: MsgBurnResponse): Uint8Array;
    toProtoMsg(message: MsgBurnResponse): MsgBurnResponseProtoMsg;
};
export declare const MsgLink: {
    typeUrl: string;
    encode(message: MsgLink, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgLink;
    fromPartial(object: Partial<MsgLink>): MsgLink;
    fromAmino(object: MsgLinkAmino): MsgLink;
    toAmino(message: MsgLink): MsgLinkAmino;
    fromAminoMsg(object: MsgLinkAminoMsg): MsgLink;
    toAminoMsg(message: MsgLink): MsgLinkAminoMsg;
    fromProtoMsg(message: MsgLinkProtoMsg): MsgLink;
    toProto(message: MsgLink): Uint8Array;
    toProtoMsg(message: MsgLink): MsgLinkProtoMsg;
};
export declare const MsgLinkResponse: {
    typeUrl: string;
    encode(_: MsgLinkResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgLinkResponse;
    fromPartial(_: Partial<MsgLinkResponse>): MsgLinkResponse;
    fromAmino(_: MsgLinkResponseAmino): MsgLinkResponse;
    toAmino(_: MsgLinkResponse): MsgLinkResponseAmino;
    fromAminoMsg(object: MsgLinkResponseAminoMsg): MsgLinkResponse;
    fromProtoMsg(message: MsgLinkResponseProtoMsg): MsgLinkResponse;
    toProto(message: MsgLinkResponse): Uint8Array;
    toProtoMsg(message: MsgLinkResponse): MsgLinkResponseProtoMsg;
};
