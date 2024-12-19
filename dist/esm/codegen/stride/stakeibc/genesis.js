import { Params } from "./params";
import { HostZone } from "./host_zone";
import { EpochTracker } from "./epoch_tracker";
import { TradeRoute } from "./trade_route";
import { BinaryReader, BinaryWriter } from "../../binary";
function createBaseGenesisState() {
  return {
    params: Params.fromPartial({}),
    portId: "",
    hostZoneList: [],
    epochTrackerList: [],
    tradeRoutes: []
  };
}
const GenesisState = {
  typeUrl: "/stride.stakeibc.GenesisState",
  encode(message, writer = BinaryWriter.create()) {
    if (message.params !== void 0) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.portId !== "") {
      writer.uint32(18).string(message.portId);
    }
    for (const v of message.hostZoneList) {
      HostZone.encode(v, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.epochTrackerList) {
      EpochTracker.encode(v, writer.uint32(82).fork()).ldelim();
    }
    for (const v of message.tradeRoutes) {
      TradeRoute.encode(v, writer.uint32(98).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
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
        case 12:
          message.tradeRoutes.push(TradeRoute.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseGenesisState();
    message.params = object.params !== void 0 && object.params !== null ? Params.fromPartial(object.params) : void 0;
    message.portId = object.portId ?? "";
    message.hostZoneList = object.hostZoneList?.map((e) => HostZone.fromPartial(e)) || [];
    message.epochTrackerList = object.epochTrackerList?.map((e) => EpochTracker.fromPartial(e)) || [];
    message.tradeRoutes = object.tradeRoutes?.map((e) => TradeRoute.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseGenesisState();
    if (object.params !== void 0 && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    if (object.port_id !== void 0 && object.port_id !== null) {
      message.portId = object.port_id;
    }
    message.hostZoneList = object.host_zone_list?.map((e) => HostZone.fromAmino(e)) || [];
    message.epochTrackerList = object.epoch_tracker_list?.map((e) => EpochTracker.fromAmino(e)) || [];
    message.tradeRoutes = object.trade_routes?.map((e) => TradeRoute.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.params = message.params ? Params.toAmino(message.params) : void 0;
    obj.port_id = message.portId === "" ? void 0 : message.portId;
    if (message.hostZoneList) {
      obj.host_zone_list = message.hostZoneList.map((e) => e ? HostZone.toAmino(e) : void 0);
    } else {
      obj.host_zone_list = message.hostZoneList;
    }
    if (message.epochTrackerList) {
      obj.epoch_tracker_list = message.epochTrackerList.map((e) => e ? EpochTracker.toAmino(e) : void 0);
    } else {
      obj.epoch_tracker_list = message.epochTrackerList;
    }
    if (message.tradeRoutes) {
      obj.trade_routes = message.tradeRoutes.map((e) => e ? TradeRoute.toAmino(e) : void 0);
    } else {
      obj.trade_routes = message.tradeRoutes;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return GenesisState.decode(message.value);
  },
  toProto(message) {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.stakeibc.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
export {
  GenesisState
};
