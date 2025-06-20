import { BinaryReader, BinaryWriter } from "../../../../binary";
/** Module is the config object of the crisis module. */
export interface Module {
    /** fee_collector_name is the name of the FeeCollector ModuleAccount. */
    feeCollectorName: string;
    /** authority defines the custom module authority. If not set, defaults to the governance module. */
    authority: string;
}
export interface ModuleProtoMsg {
    typeUrl: "/cosmos.crisis.module.v1.Module";
    value: Uint8Array;
}
/**
 * Module is the config object of the crisis module.
 * @name ModuleAmino
 * @package cosmos.crisis.module.v1
 * @see proto type: cosmos.crisis.module.v1.Module
 */
export interface ModuleAmino {
    /**
     * fee_collector_name is the name of the FeeCollector ModuleAccount.
     */
    fee_collector_name?: string;
    /**
     * authority defines the custom module authority. If not set, defaults to the governance module.
     */
    authority?: string;
}
export interface ModuleAminoMsg {
    type: "cosmos-sdk/Module";
    value: ModuleAmino;
}
/** Module is the config object of the crisis module. */
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
