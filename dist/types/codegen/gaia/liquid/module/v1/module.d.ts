import { BinaryReader, BinaryWriter } from "../../../../binary";
/** Module is the config object of the liquid module. */
export interface Module {
    /**
     * authority defines the custom module authority. If not set, defaults to the
     * governance module.
     */
    authority: string;
    /** bech32_prefix_validator is the bech32 validator prefix for the app. */
    bech32PrefixValidator: string;
    /** bech32_prefix_consensus is the bech32 consensus node prefix for the app. */
    bech32PrefixConsensus: string;
}
export interface ModuleProtoMsg {
    typeUrl: "/gaia.liquid.module.v1.Module";
    value: Uint8Array;
}
/**
 * Module is the config object of the liquid module.
 * @name ModuleAmino
 * @package gaia.liquid.module.v1
 * @see proto type: gaia.liquid.module.v1.Module
 */
export interface ModuleAmino {
    /**
     * authority defines the custom module authority. If not set, defaults to the
     * governance module.
     */
    authority?: string;
    /**
     * bech32_prefix_validator is the bech32 validator prefix for the app.
     */
    bech32_prefix_validator?: string;
    /**
     * bech32_prefix_consensus is the bech32 consensus node prefix for the app.
     */
    bech32_prefix_consensus?: string;
}
export interface ModuleAminoMsg {
    type: "/gaia.liquid.module.v1.Module";
    value: ModuleAmino;
}
/** Module is the config object of the liquid module. */
export interface ModuleSDKType {
    authority: string;
    bech32_prefix_validator: string;
    bech32_prefix_consensus: string;
}
export declare const Module: {
    typeUrl: string;
    encode(message: Module, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Module;
    fromPartial(object: Partial<Module>): Module;
    fromAmino(object: ModuleAmino): Module;
    toAmino(message: Module): ModuleAmino;
    fromAminoMsg(object: ModuleAminoMsg): Module;
    fromProtoMsg(message: ModuleProtoMsg): Module;
    toProto(message: Module): Uint8Array;
    toProtoMsg(message: Module): ModuleProtoMsg;
};
