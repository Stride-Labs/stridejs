import { QueryRequest, QueryRequestAmino, QueryRequestSDKType } from "./host";
import { BinaryReader, BinaryWriter } from "../../../../../binary";
/** MsgModuleQuerySafe defines the payload for Msg/ModuleQuerySafe */
export interface MsgModuleQuerySafe {
    /** signer address */
    signer: string;
    /** requests defines the module safe queries to execute. */
    requests: QueryRequest[];
}
export interface MsgModuleQuerySafeProtoMsg {
    typeUrl: "/ibc.applications.interchain_accounts.host.v1.MsgModuleQuerySafe";
    value: Uint8Array;
}
/** MsgModuleQuerySafe defines the payload for Msg/ModuleQuerySafe */
export interface MsgModuleQuerySafeAmino {
    /** signer address */
    signer?: string;
    /** requests defines the module safe queries to execute. */
    requests?: QueryRequestAmino[];
}
export interface MsgModuleQuerySafeAminoMsg {
    type: "cosmos-sdk/MsgModuleQuerySafe";
    value: MsgModuleQuerySafeAmino;
}
/** MsgModuleQuerySafe defines the payload for Msg/ModuleQuerySafe */
export interface MsgModuleQuerySafeSDKType {
    signer: string;
    requests: QueryRequestSDKType[];
}
/** MsgModuleQuerySafeResponse defines the response for Msg/ModuleQuerySafe */
export interface MsgModuleQuerySafeResponse {
    /** height at which the responses were queried */
    height: bigint;
    /** protobuf encoded responses for each query */
    responses: Uint8Array[];
}
export interface MsgModuleQuerySafeResponseProtoMsg {
    typeUrl: "/ibc.applications.interchain_accounts.host.v1.MsgModuleQuerySafeResponse";
    value: Uint8Array;
}
/** MsgModuleQuerySafeResponse defines the response for Msg/ModuleQuerySafe */
export interface MsgModuleQuerySafeResponseAmino {
    /** height at which the responses were queried */
    height?: string;
    /** protobuf encoded responses for each query */
    responses?: string[];
}
export interface MsgModuleQuerySafeResponseAminoMsg {
    type: "cosmos-sdk/MsgModuleQuerySafeResponse";
    value: MsgModuleQuerySafeResponseAmino;
}
/** MsgModuleQuerySafeResponse defines the response for Msg/ModuleQuerySafe */
export interface MsgModuleQuerySafeResponseSDKType {
    height: bigint;
    responses: Uint8Array[];
}
export declare const MsgModuleQuerySafe: {
    typeUrl: string;
    encode(message: MsgModuleQuerySafe, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgModuleQuerySafe;
    fromPartial(object: Partial<MsgModuleQuerySafe>): MsgModuleQuerySafe;
    fromAmino(object: MsgModuleQuerySafeAmino): MsgModuleQuerySafe;
    toAmino(message: MsgModuleQuerySafe): MsgModuleQuerySafeAmino;
    fromAminoMsg(object: MsgModuleQuerySafeAminoMsg): MsgModuleQuerySafe;
    toAminoMsg(message: MsgModuleQuerySafe): MsgModuleQuerySafeAminoMsg;
    fromProtoMsg(message: MsgModuleQuerySafeProtoMsg): MsgModuleQuerySafe;
    toProto(message: MsgModuleQuerySafe): Uint8Array;
    toProtoMsg(message: MsgModuleQuerySafe): MsgModuleQuerySafeProtoMsg;
};
export declare const MsgModuleQuerySafeResponse: {
    typeUrl: string;
    encode(message: MsgModuleQuerySafeResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgModuleQuerySafeResponse;
    fromPartial(object: Partial<MsgModuleQuerySafeResponse>): MsgModuleQuerySafeResponse;
    fromAmino(object: MsgModuleQuerySafeResponseAmino): MsgModuleQuerySafeResponse;
    toAmino(message: MsgModuleQuerySafeResponse): MsgModuleQuerySafeResponseAmino;
    fromAminoMsg(object: MsgModuleQuerySafeResponseAminoMsg): MsgModuleQuerySafeResponse;
    toAminoMsg(message: MsgModuleQuerySafeResponse): MsgModuleQuerySafeResponseAminoMsg;
    fromProtoMsg(message: MsgModuleQuerySafeResponseProtoMsg): MsgModuleQuerySafeResponse;
    toProto(message: MsgModuleQuerySafeResponse): Uint8Array;
    toProtoMsg(message: MsgModuleQuerySafeResponse): MsgModuleQuerySafeResponseProtoMsg;
};
