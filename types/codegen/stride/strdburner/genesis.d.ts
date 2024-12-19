import { BinaryReader, BinaryWriter } from "../../binary";
/** GenesisState defines the strdburner module's genesis state */
export interface GenesisState {
    /** Total amount of ustrd burned */
    totalUstrdBurned: string;
}
export interface GenesisStateProtoMsg {
    typeUrl: "/stride.strdburner.GenesisState";
    value: Uint8Array;
}
/** GenesisState defines the strdburner module's genesis state */
export interface GenesisStateAmino {
    /** Total amount of ustrd burned */
    total_ustrd_burned?: string;
}
export interface GenesisStateAminoMsg {
    type: "/stride.strdburner.GenesisState";
    value: GenesisStateAmino;
}
/** GenesisState defines the strdburner module's genesis state */
export interface GenesisStateSDKType {
    total_ustrd_burned: string;
}
export declare const GenesisState: {
    typeUrl: string;
    encode(message: GenesisState, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
    fromAmino(object: GenesisStateAmino): GenesisState;
    toAmino(message: GenesisState): GenesisStateAmino;
    fromAminoMsg(object: GenesisStateAminoMsg): GenesisState;
    fromProtoMsg(message: GenesisStateProtoMsg): GenesisState;
    toProto(message: GenesisState): Uint8Array;
    toProtoMsg(message: GenesisState): GenesisStateProtoMsg;
};
