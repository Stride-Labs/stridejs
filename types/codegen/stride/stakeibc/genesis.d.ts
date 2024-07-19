import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { HostZone, HostZoneAmino, HostZoneSDKType } from "./host_zone";
import { EpochTracker, EpochTrackerAmino, EpochTrackerSDKType } from "./epoch_tracker";
import { BinaryReader, BinaryWriter } from "../../binary";
/** GenesisState defines the stakeibc module's genesis state. */
export interface GenesisState {
    params: Params;
    portId: string;
    /** list of zones that are registered by the protocol */
    hostZoneList: HostZone[];
    epochTrackerList: EpochTracker[];
}
export interface GenesisStateProtoMsg {
    typeUrl: "/stride.stakeibc.GenesisState";
    value: Uint8Array;
}
/** GenesisState defines the stakeibc module's genesis state. */
export interface GenesisStateAmino {
    params?: ParamsAmino;
    port_id?: string;
    /** list of zones that are registered by the protocol */
    host_zone_list?: HostZoneAmino[];
    epoch_tracker_list?: EpochTrackerAmino[];
}
export interface GenesisStateAminoMsg {
    type: "/stride.stakeibc.GenesisState";
    value: GenesisStateAmino;
}
/** GenesisState defines the stakeibc module's genesis state. */
export interface GenesisStateSDKType {
    params: ParamsSDKType;
    port_id: string;
    host_zone_list: HostZoneSDKType[];
    epoch_tracker_list: EpochTrackerSDKType[];
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
