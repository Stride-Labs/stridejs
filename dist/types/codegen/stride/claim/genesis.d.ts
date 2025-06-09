import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { ClaimRecord, ClaimRecordAmino, ClaimRecordSDKType } from "./claim";
import { BinaryReader, BinaryWriter } from "../../binary";
/** GenesisState defines the claim module's genesis state. */
export interface GenesisState {
    /** params defines all the parameters of the module. */
    params: Params;
    /** list of claim records, one for every airdrop recipient */
    claimRecords: ClaimRecord[];
}
export interface GenesisStateProtoMsg {
    typeUrl: "/stride.claim.GenesisState";
    value: Uint8Array;
}
/**
 * GenesisState defines the claim module's genesis state.
 * @name GenesisStateAmino
 * @package stride.claim
 * @see proto type: stride.claim.GenesisState
 */
export interface GenesisStateAmino {
    /**
     * params defines all the parameters of the module.
     */
    params?: ParamsAmino;
    /**
     * list of claim records, one for every airdrop recipient
     */
    claim_records?: ClaimRecordAmino[];
}
export interface GenesisStateAminoMsg {
    type: "/stride.claim.GenesisState";
    value: GenesisStateAmino;
}
/** GenesisState defines the claim module's genesis state. */
export interface GenesisStateSDKType {
    params: ParamsSDKType;
    claim_records: ClaimRecordSDKType[];
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
