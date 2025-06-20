import { BinaryReader, BinaryWriter } from "../../../../binary";
/** Module is the config object of the evidence module. */
export interface Module {
}
export interface ModuleProtoMsg {
    typeUrl: "/cosmos.evidence.module.v1.Module";
    value: Uint8Array;
}
/**
 * Module is the config object of the evidence module.
 * @name ModuleAmino
 * @package cosmos.evidence.module.v1
 * @see proto type: cosmos.evidence.module.v1.Module
 */
export interface ModuleAmino {
}
export interface ModuleAminoMsg {
    type: "cosmos-sdk/Module";
    value: ModuleAmino;
}
/** Module is the config object of the evidence module. */
export interface ModuleSDKType {
}
export declare const Module: {
    typeUrl: string;
    encode(_: Module, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Module;
    fromPartial(_: Partial<Module>): Module;
    fromAmino(_: ModuleAmino): Module;
    toAmino(_: Module): ModuleAmino;
    fromAminoMsg(object: ModuleAminoMsg): Module;
    toAminoMsg(message: Module): ModuleAminoMsg;
    fromProtoMsg(message: ModuleProtoMsg): Module;
    toProto(message: Module): Uint8Array;
    toProtoMsg(message: Module): ModuleProtoMsg;
};
