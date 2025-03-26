import { BinaryReader, BinaryWriter } from "../../../../binary";
/** Module is the config object of the bank module. */
export interface Module {
    /**
     * blocked_module_accounts_override configures exceptional module accounts which should be blocked from receiving
     * funds. If left empty it defaults to the list of account names supplied in the auth module configuration as
     * module_account_permissions
     */
    blockedModuleAccountsOverride: string[];
    /** authority defines the custom module authority. If not set, defaults to the governance module. */
    authority: string;
    /**
     * restrictions_order specifies the order of send restrictions and should be
     * a list of module names which provide a send restriction instance. If no
     * order is provided, then restrictions will be applied in alphabetical order
     * of module names.
     */
    restrictionsOrder: string[];
}
export interface ModuleProtoMsg {
    typeUrl: "/cosmos.bank.module.v1.Module";
    value: Uint8Array;
}
/** Module is the config object of the bank module. */
export interface ModuleAmino {
    /**
     * blocked_module_accounts_override configures exceptional module accounts which should be blocked from receiving
     * funds. If left empty it defaults to the list of account names supplied in the auth module configuration as
     * module_account_permissions
     */
    blocked_module_accounts_override?: string[];
    /** authority defines the custom module authority. If not set, defaults to the governance module. */
    authority?: string;
    /**
     * restrictions_order specifies the order of send restrictions and should be
     * a list of module names which provide a send restriction instance. If no
     * order is provided, then restrictions will be applied in alphabetical order
     * of module names.
     */
    restrictions_order?: string[];
}
export interface ModuleAminoMsg {
    type: "cosmos-sdk/Module";
    value: ModuleAmino;
}
/** Module is the config object of the bank module. */
export interface ModuleSDKType {
    blocked_module_accounts_override: string[];
    authority: string;
    restrictions_order: string[];
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
