import { Minter, MinterAmino, MinterSDKType, Params, ParamsAmino, ParamsSDKType } from "./mint";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** GenesisState defines the mint module's genesis state. */
export interface GenesisState {
    /** minter is a space for holding current inflation information. */
    minter: Minter;
    /** params defines all the parameters of the module. */
    params: Params;
}
export interface GenesisStateProtoMsg {
    typeUrl: "/cosmos.mint.v1beta1.GenesisState";
    value: Uint8Array;
}
/**
 * GenesisState defines the mint module's genesis state.
 * @name GenesisStateAmino
 * @package cosmos.mint.v1beta1
 * @see proto type: cosmos.mint.v1beta1.GenesisState
 */
export interface GenesisStateAmino {
    /**
     * minter is a space for holding current inflation information.
     */
    minter: MinterAmino;
    /**
     * params defines all the parameters of the module.
     */
    params: ParamsAmino;
}
export interface GenesisStateAminoMsg {
    type: "cosmos-sdk/GenesisState";
    value: GenesisStateAmino;
}
/** GenesisState defines the mint module's genesis state. */
export interface GenesisStateSDKType {
    minter: MinterSDKType;
    params: ParamsSDKType;
}
export declare const GenesisState: {
    typeUrl: string;
    encode(message: GenesisState, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
    fromAmino(object: GenesisStateAmino): GenesisState;
    toAmino(message: GenesisState): GenesisStateAmino;
    fromAminoMsg(object: GenesisStateAminoMsg): GenesisState;
    toAminoMsg(message: GenesisState): GenesisStateAminoMsg;
    fromProtoMsg(message: GenesisStateProtoMsg): GenesisState;
    toProto(message: GenesisState): Uint8Array;
    toProtoMsg(message: GenesisState): GenesisStateProtoMsg;
};
