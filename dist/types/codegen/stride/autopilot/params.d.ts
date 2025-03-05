import { BinaryReader, BinaryWriter } from "../../binary";
/**
 * Params defines the parameters for the module.
 * next id: 1
 */
export interface Params {
    /** optionally, turn off each module */
    stakeibcActive: boolean;
    claimActive: boolean;
}
export interface ParamsProtoMsg {
    typeUrl: "/stride.autopilot.Params";
    value: Uint8Array;
}
/**
 * Params defines the parameters for the module.
 * next id: 1
 */
export interface ParamsAmino {
    /** optionally, turn off each module */
    stakeibc_active?: boolean;
    claim_active?: boolean;
}
export interface ParamsAminoMsg {
    type: "/stride.autopilot.Params";
    value: ParamsAmino;
}
/**
 * Params defines the parameters for the module.
 * next id: 1
 */
export interface ParamsSDKType {
    stakeibc_active: boolean;
    claim_active: boolean;
}
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
