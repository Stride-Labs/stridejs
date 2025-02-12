import { BinaryReader, BinaryWriter } from "../../../../binary";
/** Module is the config object of the distribution module. */
export interface Module {
    feeCollectorName: string;
    /** authority defines the custom module authority. If not set, defaults to the governance module. */
    authority: string;
}
export interface ModuleProtoMsg {
    typeUrl: "/cosmos.distribution.module.v1.Module";
    value: Uint8Array;
}
/** Module is the config object of the distribution module. */
export interface ModuleAmino {
    fee_collector_name?: string;
    /** authority defines the custom module authority. If not set, defaults to the governance module. */
    authority?: string;
}
export interface ModuleAminoMsg {
    type: "cosmos-sdk/Module";
    value: ModuleAmino;
}
/** Module is the config object of the distribution module. */
export interface ModuleSDKType {
    fee_collector_name: string;
    authority: string;
}
export declare const Module: {
    typeUrl: string;
    encode(message: Module, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Module;
    fromPartial(object: Partial<Module>): Module;
    fromAmino(object: ModuleAmino): Module;
    toAmino(message: Module): ModuleAmino;
    fromAminoMsg(object: ModuleAminoMsg): Module;
    toAminoMsg(message: Module): ModuleAminoMsg;
    fromProtoMsg(message: ModuleProtoMsg): Module;
    toProto(message: Module): Uint8Array;
    toProtoMsg(message: Module): ModuleProtoMsg;
};
