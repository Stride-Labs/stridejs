import { BinaryReader, BinaryWriter } from "../../../../binary";
/** Module is the config object of the capability module. */
export interface Module {
    /**
     * seal_keeper defines if keeper.Seal() will run on BeginBlock() to prevent further modules from creating a scoped
     * keeper. For more details check x/capability/keeper.go.
     */
    sealKeeper: boolean;
}
export interface ModuleProtoMsg {
    typeUrl: "/cosmos.capability.module.v1.Module";
    value: Uint8Array;
}
/**
 * Module is the config object of the capability module.
 * @name ModuleAmino
 * @package cosmos.capability.module.v1
 * @see proto type: cosmos.capability.module.v1.Module
 */
export interface ModuleAmino {
    /**
     * seal_keeper defines if keeper.Seal() will run on BeginBlock() to prevent further modules from creating a scoped
     * keeper. For more details check x/capability/keeper.go.
     */
    seal_keeper?: boolean;
}
export interface ModuleAminoMsg {
    type: "cosmos-sdk/Module";
    value: ModuleAmino;
}
/** Module is the config object of the capability module. */
export interface ModuleSDKType {
    seal_keeper: boolean;
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
