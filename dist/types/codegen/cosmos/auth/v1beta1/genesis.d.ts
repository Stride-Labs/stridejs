import { Params, ParamsAmino, ParamsSDKType } from "./auth";
import { Any, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** GenesisState defines the auth module's genesis state. */
export interface GenesisState {
    /** params defines all the parameters of the module. */
    params: Params;
    /** accounts are the accounts present at genesis. */
    accounts: Any[];
}
export interface GenesisStateProtoMsg {
    typeUrl: "/cosmos.auth.v1beta1.GenesisState";
    value: Uint8Array;
}
/**
 * GenesisState defines the auth module's genesis state.
 * @name GenesisStateAmino
 * @package cosmos.auth.v1beta1
 * @see proto type: cosmos.auth.v1beta1.GenesisState
 */
export interface GenesisStateAmino {
    /**
     * params defines all the parameters of the module.
     */
    params: ParamsAmino;
    /**
     * accounts are the accounts present at genesis.
     */
    accounts?: AnyAmino[];
}
export interface GenesisStateAminoMsg {
    type: "cosmos-sdk/GenesisState";
    value: GenesisStateAmino;
}
/** GenesisState defines the auth module's genesis state. */
export interface GenesisStateSDKType {
    params: ParamsSDKType;
    accounts: AnySDKType[];
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
