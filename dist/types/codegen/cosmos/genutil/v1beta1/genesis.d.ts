import { BinaryReader, BinaryWriter } from "../../../binary";
/** GenesisState defines the raw genesis transaction in JSON. */
export interface GenesisState {
    /** gen_txs defines the genesis transactions. */
    genTxs: Uint8Array[];
}
export interface GenesisStateProtoMsg {
    typeUrl: "/cosmos.genutil.v1beta1.GenesisState";
    value: Uint8Array;
}
/**
 * GenesisState defines the raw genesis transaction in JSON.
 * @name GenesisStateAmino
 * @package cosmos.genutil.v1beta1
 * @see proto type: cosmos.genutil.v1beta1.GenesisState
 */
export interface GenesisStateAmino {
    /**
     * gen_txs defines the genesis transactions.
     */
    gen_txs: string[];
}
export interface GenesisStateAminoMsg {
    type: "cosmos-sdk/GenesisState";
    value: GenesisStateAmino;
}
/** GenesisState defines the raw genesis transaction in JSON. */
export interface GenesisStateSDKType {
    gen_txs: Uint8Array[];
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
