import { Params, ParamsSDKType } from "./params";
import { ICAAccount, ICAAccountSDKType } from "./ica_account";
import { HostZone, HostZoneSDKType } from "./host_zone";
import { EpochTracker, EpochTrackerSDKType } from "./epoch_tracker";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
export interface GenesisState_DenomToHostZoneEntry {
    key: string;
    value: string;
}
export interface GenesisState_DenomToHostZoneEntrySDKType {
    key: string;
    value: string;
}
/** GenesisState defines the stakeibc module's genesis state. */
export interface GenesisState {
    params: Params;
    portId: string;
    /** list of zones that are registered by the protocol */
    iCAAccount: ICAAccount;
    hostZoneList: HostZone[];
    hostZoneCount: Long;
    /** stores a map from hostZone base denom to hostZone */
    denomToHostZone: {
        [key: string]: string;
    };
    epochTrackerList: EpochTracker[];
}
/** GenesisState defines the stakeibc module's genesis state. */
export interface GenesisStateSDKType {
    params: ParamsSDKType;
    port_id: string;
    /** list of zones that are registered by the protocol */
    iCAAccount: ICAAccountSDKType;
    hostZoneList: HostZoneSDKType[];
    hostZoneCount: Long;
    /** stores a map from hostZone base denom to hostZone */
    denomToHostZone: {
        [key: string]: string;
    };
    epochTrackerList: EpochTrackerSDKType[];
}
export declare const GenesisState_DenomToHostZoneEntry: {
    encode(message: GenesisState_DenomToHostZoneEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState_DenomToHostZoneEntry;
    fromPartial(object: DeepPartial<GenesisState_DenomToHostZoneEntry>): GenesisState_DenomToHostZoneEntry;
};
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
