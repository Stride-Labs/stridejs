import { Any, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** GenesisState defines the evidence module's genesis state. */
export interface GenesisState {
    /** evidence defines all the evidence at genesis. */
    evidence: Any[];
}
export interface GenesisStateProtoMsg {
    typeUrl: "/cosmos.evidence.v1beta1.GenesisState";
    value: Uint8Array;
}
/**
 * GenesisState defines the evidence module's genesis state.
 * @name GenesisStateAmino
 * @package cosmos.evidence.v1beta1
 * @see proto type: cosmos.evidence.v1beta1.GenesisState
 */
export interface GenesisStateAmino {
    /**
     * evidence defines all the evidence at genesis.
     */
    evidence?: AnyAmino[];
}
export interface GenesisStateAminoMsg {
    type: "cosmos-sdk/GenesisState";
    value: GenesisStateAmino;
}
/** GenesisState defines the evidence module's genesis state. */
export interface GenesisStateSDKType {
    evidence: AnySDKType[];
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
