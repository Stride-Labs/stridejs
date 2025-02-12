import { Minter, MinterAmino, MinterSDKType, Params, ParamsAmino, ParamsSDKType } from "./mint";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** GenesisState defines the mint module's genesis state. */
export interface GenesisState {
    /** minter is a space for holding current rewards information. */
    minter: Minter;
    /** params defines all the paramaters of the module. */
    params: Params;
    /** current reduction period start epoch */
    reductionStartedEpoch: bigint;
}
export interface GenesisStateProtoMsg {
    typeUrl: "/stride.mint.v1beta1.GenesisState";
    value: Uint8Array;
}
/** GenesisState defines the mint module's genesis state. */
export interface GenesisStateAmino {
    /** minter is a space for holding current rewards information. */
    minter?: MinterAmino;
    /** params defines all the paramaters of the module. */
    params?: ParamsAmino;
    /** current reduction period start epoch */
    reduction_started_epoch?: string;
}
export interface GenesisStateAminoMsg {
    type: "/stride.mint.v1beta1.GenesisState";
    value: GenesisStateAmino;
}
/** GenesisState defines the mint module's genesis state. */
export interface GenesisStateSDKType {
    minter: MinterSDKType;
    params: ParamsSDKType;
    reduction_started_epoch: bigint;
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
