import { Params, ParamsAmino, ParamsSDKType, Airdrop, AirdropAmino, AirdropSDKType, UserAllocation, UserAllocationAmino, UserAllocationSDKType } from "./airdrop";
import { BinaryReader, BinaryWriter } from "../../binary";
/** GenesisState defines the airdrop module's genesis state. */
export interface GenesisState {
    /** Module parameters */
    params: Params;
    /** All airdrop config records */
    airdrops: Airdrop[];
    /** All allocation records across all airdrops */
    userAllocations: UserAllocation[];
}
export interface GenesisStateProtoMsg {
    typeUrl: "/stride.airdrop.GenesisState";
    value: Uint8Array;
}
/**
 * GenesisState defines the airdrop module's genesis state.
 * @name GenesisStateAmino
 * @package stride.airdrop
 * @see proto type: stride.airdrop.GenesisState
 */
export interface GenesisStateAmino {
    /**
     * Module parameters
     */
    params?: ParamsAmino;
    /**
     * All airdrop config records
     */
    airdrops?: AirdropAmino[];
    /**
     * All allocation records across all airdrops
     */
    user_allocations?: UserAllocationAmino[];
}
export interface GenesisStateAminoMsg {
    type: "/stride.airdrop.GenesisState";
    value: GenesisStateAmino;
}
/** GenesisState defines the airdrop module's genesis state. */
export interface GenesisStateSDKType {
    params: ParamsSDKType;
    airdrops: AirdropSDKType[];
    user_allocations: UserAllocationSDKType[];
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
