import { GenesisState as GenesisState1 } from "../../client/v1/genesis";
import { GenesisStateAmino as GenesisState1Amino } from "../../client/v1/genesis";
import { GenesisStateSDKType as GenesisState1SDKType } from "../../client/v1/genesis";
import { GenesisState as GenesisState2 } from "../../connection/v1/genesis";
import { GenesisStateAmino as GenesisState2Amino } from "../../connection/v1/genesis";
import { GenesisStateSDKType as GenesisState2SDKType } from "../../connection/v1/genesis";
import { GenesisState as GenesisState3 } from "../../channel/v1/genesis";
import { GenesisStateAmino as GenesisState3Amino } from "../../channel/v1/genesis";
import { GenesisStateSDKType as GenesisState3SDKType } from "../../channel/v1/genesis";
import { BinaryReader, BinaryWriter } from "../../../../binary";
/** GenesisState defines the ibc module's genesis state. */
export interface GenesisState {
    /** ICS002 - Clients genesis state */
    clientGenesis: GenesisState1;
    /** ICS003 - Connections genesis state */
    connectionGenesis: GenesisState2;
    /** ICS004 - Channel genesis state */
    channelGenesis: GenesisState3;
}
export interface GenesisStateProtoMsg {
    typeUrl: "/ibc.core.types.v1.GenesisState";
    value: Uint8Array;
}
/**
 * GenesisState defines the ibc module's genesis state.
 * @name GenesisStateAmino
 * @package ibc.core.types.v1
 * @see proto type: ibc.core.types.v1.GenesisState
 */
export interface GenesisStateAmino {
    /**
     * ICS002 - Clients genesis state
     */
    client_genesis?: GenesisState1Amino;
    /**
     * ICS003 - Connections genesis state
     */
    connection_genesis?: GenesisState2Amino;
    /**
     * ICS004 - Channel genesis state
     */
    channel_genesis?: GenesisState3Amino;
}
export interface GenesisStateAminoMsg {
    type: "cosmos-sdk/GenesisState";
    value: GenesisStateAmino;
}
/** GenesisState defines the ibc module's genesis state. */
export interface GenesisStateSDKType {
    client_genesis: GenesisState1SDKType;
    connection_genesis: GenesisState2SDKType;
    channel_genesis: GenesisState3SDKType;
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
