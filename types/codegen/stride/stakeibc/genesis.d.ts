import { Params, ParamsSDKType } from "./params";
import { HostZone, HostZoneSDKType } from "./host_zone";
import { EpochTracker, EpochTrackerSDKType } from "./epoch_tracker";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
/** GenesisState defines the stakeibc module's genesis state. */
export interface GenesisState {
    params: Params;
    portId: string;
    /** list of zones that are registered by the protocol */
    hostZoneList: HostZone[];
    epochTrackerList: EpochTracker[];
}
/** GenesisState defines the stakeibc module's genesis state. */
export interface GenesisStateSDKType {
    params: ParamsSDKType;
    port_id: string;
    /** list of zones that are registered by the protocol */
    host_zone_list: HostZoneSDKType[];
    epoch_tracker_list: EpochTrackerSDKType[];
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
