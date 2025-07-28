"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var genesis_exports = {};
__export(genesis_exports, {
  GenesisState: () => GenesisState
});
module.exports = __toCommonJS(genesis_exports);
var import_params = require("./params");
var import_host_zone = require("./host_zone");
var import_epoch_tracker = require("./epoch_tracker");
var import_trade_route = require("./trade_route");
var import_binary = require("../../binary");
function createBaseGenesisState() {
  return {
    params: import_params.Params.fromPartial({}),
    portId: "",
    hostZoneList: [],
    epochTrackerList: [],
    tradeRoutes: []
  };
}
const GenesisState = {
  typeUrl: "/stride.stakeibc.GenesisState",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.params !== void 0) {
      import_params.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.portId !== "") {
      writer.uint32(18).string(message.portId);
    }
    for (const v of message.hostZoneList) {
      import_host_zone.HostZone.encode(v, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.epochTrackerList) {
      import_epoch_tracker.EpochTracker.encode(v, writer.uint32(82).fork()).ldelim();
    }
    for (const v of message.tradeRoutes) {
      import_trade_route.TradeRoute.encode(v, writer.uint32(98).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = import_params.Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.portId = reader.string();
          break;
        case 5:
          message.hostZoneList.push(import_host_zone.HostZone.decode(reader, reader.uint32()));
          break;
        case 10:
          message.epochTrackerList.push(import_epoch_tracker.EpochTracker.decode(reader, reader.uint32()));
          break;
        case 12:
          message.tradeRoutes.push(import_trade_route.TradeRoute.decode(reader, reader.uint32()));
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
    message.params = object.params !== void 0 && object.params !== null ? import_params.Params.fromPartial(object.params) : void 0;
    message.portId = object.portId ?? "";
    message.hostZoneList = object.hostZoneList?.map((e) => import_host_zone.HostZone.fromPartial(e)) || [];
    message.epochTrackerList = object.epochTrackerList?.map((e) => import_epoch_tracker.EpochTracker.fromPartial(e)) || [];
    message.tradeRoutes = object.tradeRoutes?.map((e) => import_trade_route.TradeRoute.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseGenesisState();
    if (object.params !== void 0 && object.params !== null) {
      message.params = import_params.Params.fromAmino(object.params);
    }
    if (object.port_id !== void 0 && object.port_id !== null) {
      message.portId = object.port_id;
    }
    message.hostZoneList = object.host_zone_list?.map((e) => import_host_zone.HostZone.fromAmino(e)) || [];
    message.epochTrackerList = object.epoch_tracker_list?.map((e) => import_epoch_tracker.EpochTracker.fromAmino(e)) || [];
    message.tradeRoutes = object.trade_routes?.map((e) => import_trade_route.TradeRoute.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.params = message.params ? import_params.Params.toAmino(message.params) : void 0;
    obj.port_id = message.portId === "" ? void 0 : message.portId;
    if (message.hostZoneList) {
      obj.host_zone_list = message.hostZoneList.map((e) => e ? import_host_zone.HostZone.toAmino(e) : void 0);
    } else {
      obj.host_zone_list = message.hostZoneList;
    }
    if (message.epochTrackerList) {
      obj.epoch_tracker_list = message.epochTrackerList.map((e) => e ? import_epoch_tracker.EpochTracker.toAmino(e) : void 0);
    } else {
      obj.epoch_tracker_list = message.epochTrackerList;
    }
    if (message.tradeRoutes) {
      obj.trade_routes = message.tradeRoutes.map((e) => e ? import_trade_route.TradeRoute.toAmino(e) : void 0);
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
// Removed broken CommonJS export annotation
