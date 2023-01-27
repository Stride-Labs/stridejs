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

function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    portId: "",
    hostZoneList: [],
    epochTrackerList: []
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }

    if (message.portId !== "") {
      writer.uint32(18).string(message.portId);
    }

    for (const v of message.hostZoneList) {
      HostZone.encode(v!, writer.uint32(42).fork()).ldelim();
    }

    for (const v of message.epochTrackerList) {
      EpochTracker.encode(v!, writer.uint32(82).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;

        case 2:
          message.portId = reader.string();
          break;

        case 5:
          message.hostZoneList.push(HostZone.decode(reader, reader.uint32()));
          break;

        case 10:
          message.epochTrackerList.push(EpochTracker.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.portId = object.portId ?? "";
    message.hostZoneList = object.hostZoneList?.map(e => HostZone.fromPartial(e)) || [];
    message.epochTrackerList = object.epochTrackerList?.map(e => EpochTracker.fromPartial(e)) || [];
    return message;
  }

};