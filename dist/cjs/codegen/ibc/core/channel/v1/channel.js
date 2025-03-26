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
var channel_exports = {};
__export(channel_exports, {
  Acknowledgement: () => Acknowledgement,
  Channel: () => Channel,
  Counterparty: () => Counterparty,
  IdentifiedChannel: () => IdentifiedChannel,
  Order: () => Order,
  OrderAmino: () => OrderAmino,
  OrderSDKType: () => OrderSDKType,
  Packet: () => Packet,
  PacketId: () => PacketId,
  PacketState: () => PacketState,
  Params: () => Params,
  State: () => State,
  StateAmino: () => StateAmino,
  StateSDKType: () => StateSDKType,
  Timeout: () => Timeout,
  orderFromJSON: () => orderFromJSON,
  orderToJSON: () => orderToJSON,
  stateFromJSON: () => stateFromJSON,
  stateToJSON: () => stateToJSON
});
module.exports = __toCommonJS(channel_exports);
var import_client = require("../../client/v1/client");
var import_binary = require("../../../../binary");
var import_helpers = require("../../../../helpers");
var State = /* @__PURE__ */ ((State2) => {
  State2[State2["STATE_UNINITIALIZED_UNSPECIFIED"] = 0] = "STATE_UNINITIALIZED_UNSPECIFIED";
  State2[State2["STATE_INIT"] = 1] = "STATE_INIT";
  State2[State2["STATE_TRYOPEN"] = 2] = "STATE_TRYOPEN";
  State2[State2["STATE_OPEN"] = 3] = "STATE_OPEN";
  State2[State2["STATE_CLOSED"] = 4] = "STATE_CLOSED";
  State2[State2["STATE_FLUSHING"] = 5] = "STATE_FLUSHING";
  State2[State2["STATE_FLUSHCOMPLETE"] = 6] = "STATE_FLUSHCOMPLETE";
  State2[State2["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return State2;
})(State || {});
const StateSDKType = State;
const StateAmino = State;
function stateFromJSON(object) {
  switch (object) {
    case 0:
    case "STATE_UNINITIALIZED_UNSPECIFIED":
      return 0 /* STATE_UNINITIALIZED_UNSPECIFIED */;
    case 1:
    case "STATE_INIT":
      return 1 /* STATE_INIT */;
    case 2:
    case "STATE_TRYOPEN":
      return 2 /* STATE_TRYOPEN */;
    case 3:
    case "STATE_OPEN":
      return 3 /* STATE_OPEN */;
    case 4:
    case "STATE_CLOSED":
      return 4 /* STATE_CLOSED */;
    case 5:
    case "STATE_FLUSHING":
      return 5 /* STATE_FLUSHING */;
    case 6:
    case "STATE_FLUSHCOMPLETE":
      return 6 /* STATE_FLUSHCOMPLETE */;
    case -1:
    case "UNRECOGNIZED":
    default:
      return -1 /* UNRECOGNIZED */;
  }
}
function stateToJSON(object) {
  switch (object) {
    case 0 /* STATE_UNINITIALIZED_UNSPECIFIED */:
      return "STATE_UNINITIALIZED_UNSPECIFIED";
    case 1 /* STATE_INIT */:
      return "STATE_INIT";
    case 2 /* STATE_TRYOPEN */:
      return "STATE_TRYOPEN";
    case 3 /* STATE_OPEN */:
      return "STATE_OPEN";
    case 4 /* STATE_CLOSED */:
      return "STATE_CLOSED";
    case 5 /* STATE_FLUSHING */:
      return "STATE_FLUSHING";
    case 6 /* STATE_FLUSHCOMPLETE */:
      return "STATE_FLUSHCOMPLETE";
    case -1 /* UNRECOGNIZED */:
    default:
      return "UNRECOGNIZED";
  }
}
var Order = /* @__PURE__ */ ((Order2) => {
  Order2[Order2["ORDER_NONE_UNSPECIFIED"] = 0] = "ORDER_NONE_UNSPECIFIED";
  Order2[Order2["ORDER_UNORDERED"] = 1] = "ORDER_UNORDERED";
  Order2[Order2["ORDER_ORDERED"] = 2] = "ORDER_ORDERED";
  Order2[Order2["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return Order2;
})(Order || {});
const OrderSDKType = Order;
const OrderAmino = Order;
function orderFromJSON(object) {
  switch (object) {
    case 0:
    case "ORDER_NONE_UNSPECIFIED":
      return 0 /* ORDER_NONE_UNSPECIFIED */;
    case 1:
    case "ORDER_UNORDERED":
      return 1 /* ORDER_UNORDERED */;
    case 2:
    case "ORDER_ORDERED":
      return 2 /* ORDER_ORDERED */;
    case -1:
    case "UNRECOGNIZED":
    default:
      return -1 /* UNRECOGNIZED */;
  }
}
function orderToJSON(object) {
  switch (object) {
    case 0 /* ORDER_NONE_UNSPECIFIED */:
      return "ORDER_NONE_UNSPECIFIED";
    case 1 /* ORDER_UNORDERED */:
      return "ORDER_UNORDERED";
    case 2 /* ORDER_ORDERED */:
      return "ORDER_ORDERED";
    case -1 /* UNRECOGNIZED */:
    default:
      return "UNRECOGNIZED";
  }
}
function createBaseChannel() {
  return {
    state: 0,
    ordering: 0,
    counterparty: Counterparty.fromPartial({}),
    connectionHops: [],
    version: "",
    upgradeSequence: BigInt(0)
  };
}
const Channel = {
  typeUrl: "/ibc.core.channel.v1.Channel",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.state !== 0) {
      writer.uint32(8).int32(message.state);
    }
    if (message.ordering !== 0) {
      writer.uint32(16).int32(message.ordering);
    }
    if (message.counterparty !== void 0) {
      Counterparty.encode(message.counterparty, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.connectionHops) {
      writer.uint32(34).string(v);
    }
    if (message.version !== "") {
      writer.uint32(42).string(message.version);
    }
    if (message.upgradeSequence !== BigInt(0)) {
      writer.uint32(48).uint64(message.upgradeSequence);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseChannel();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.state = reader.int32();
          break;
        case 2:
          message.ordering = reader.int32();
          break;
        case 3:
          message.counterparty = Counterparty.decode(reader, reader.uint32());
          break;
        case 4:
          message.connectionHops.push(reader.string());
          break;
        case 5:
          message.version = reader.string();
          break;
        case 6:
          message.upgradeSequence = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseChannel();
    message.state = object.state ?? 0;
    message.ordering = object.ordering ?? 0;
    message.counterparty = object.counterparty !== void 0 && object.counterparty !== null ? Counterparty.fromPartial(object.counterparty) : void 0;
    message.connectionHops = object.connectionHops?.map((e) => e) || [];
    message.version = object.version ?? "";
    message.upgradeSequence = object.upgradeSequence !== void 0 && object.upgradeSequence !== null ? BigInt(object.upgradeSequence.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object) {
    const message = createBaseChannel();
    if (object.state !== void 0 && object.state !== null) {
      message.state = object.state;
    }
    if (object.ordering !== void 0 && object.ordering !== null) {
      message.ordering = object.ordering;
    }
    if (object.counterparty !== void 0 && object.counterparty !== null) {
      message.counterparty = Counterparty.fromAmino(object.counterparty);
    }
    message.connectionHops = object.connection_hops?.map((e) => e) || [];
    if (object.version !== void 0 && object.version !== null) {
      message.version = object.version;
    }
    if (object.upgrade_sequence !== void 0 && object.upgrade_sequence !== null) {
      message.upgradeSequence = BigInt(object.upgrade_sequence);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.state = message.state === 0 ? void 0 : message.state;
    obj.ordering = message.ordering === 0 ? void 0 : message.ordering;
    obj.counterparty = message.counterparty ? Counterparty.toAmino(message.counterparty) : void 0;
    if (message.connectionHops) {
      obj.connection_hops = message.connectionHops.map((e) => e);
    } else {
      obj.connection_hops = message.connectionHops;
    }
    obj.version = message.version === "" ? void 0 : message.version;
    obj.upgrade_sequence = message.upgradeSequence !== BigInt(0) ? message.upgradeSequence?.toString() : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return Channel.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/Channel",
      value: Channel.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return Channel.decode(message.value);
  },
  toProto(message) {
    return Channel.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.core.channel.v1.Channel",
      value: Channel.encode(message).finish()
    };
  }
};
function createBaseIdentifiedChannel() {
  return {
    state: 0,
    ordering: 0,
    counterparty: Counterparty.fromPartial({}),
    connectionHops: [],
    version: "",
    portId: "",
    channelId: "",
    upgradeSequence: BigInt(0)
  };
}
const IdentifiedChannel = {
  typeUrl: "/ibc.core.channel.v1.IdentifiedChannel",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.state !== 0) {
      writer.uint32(8).int32(message.state);
    }
    if (message.ordering !== 0) {
      writer.uint32(16).int32(message.ordering);
    }
    if (message.counterparty !== void 0) {
      Counterparty.encode(message.counterparty, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.connectionHops) {
      writer.uint32(34).string(v);
    }
    if (message.version !== "") {
      writer.uint32(42).string(message.version);
    }
    if (message.portId !== "") {
      writer.uint32(50).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(58).string(message.channelId);
    }
    if (message.upgradeSequence !== BigInt(0)) {
      writer.uint32(64).uint64(message.upgradeSequence);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseIdentifiedChannel();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.state = reader.int32();
          break;
        case 2:
          message.ordering = reader.int32();
          break;
        case 3:
          message.counterparty = Counterparty.decode(reader, reader.uint32());
          break;
        case 4:
          message.connectionHops.push(reader.string());
          break;
        case 5:
          message.version = reader.string();
          break;
        case 6:
          message.portId = reader.string();
          break;
        case 7:
          message.channelId = reader.string();
          break;
        case 8:
          message.upgradeSequence = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseIdentifiedChannel();
    message.state = object.state ?? 0;
    message.ordering = object.ordering ?? 0;
    message.counterparty = object.counterparty !== void 0 && object.counterparty !== null ? Counterparty.fromPartial(object.counterparty) : void 0;
    message.connectionHops = object.connectionHops?.map((e) => e) || [];
    message.version = object.version ?? "";
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    message.upgradeSequence = object.upgradeSequence !== void 0 && object.upgradeSequence !== null ? BigInt(object.upgradeSequence.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object) {
    const message = createBaseIdentifiedChannel();
    if (object.state !== void 0 && object.state !== null) {
      message.state = object.state;
    }
    if (object.ordering !== void 0 && object.ordering !== null) {
      message.ordering = object.ordering;
    }
    if (object.counterparty !== void 0 && object.counterparty !== null) {
      message.counterparty = Counterparty.fromAmino(object.counterparty);
    }
    message.connectionHops = object.connection_hops?.map((e) => e) || [];
    if (object.version !== void 0 && object.version !== null) {
      message.version = object.version;
    }
    if (object.port_id !== void 0 && object.port_id !== null) {
      message.portId = object.port_id;
    }
    if (object.channel_id !== void 0 && object.channel_id !== null) {
      message.channelId = object.channel_id;
    }
    if (object.upgrade_sequence !== void 0 && object.upgrade_sequence !== null) {
      message.upgradeSequence = BigInt(object.upgrade_sequence);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.state = message.state === 0 ? void 0 : message.state;
    obj.ordering = message.ordering === 0 ? void 0 : message.ordering;
    obj.counterparty = message.counterparty ? Counterparty.toAmino(message.counterparty) : void 0;
    if (message.connectionHops) {
      obj.connection_hops = message.connectionHops.map((e) => e);
    } else {
      obj.connection_hops = message.connectionHops;
    }
    obj.version = message.version === "" ? void 0 : message.version;
    obj.port_id = message.portId === "" ? void 0 : message.portId;
    obj.channel_id = message.channelId === "" ? void 0 : message.channelId;
    obj.upgrade_sequence = message.upgradeSequence !== BigInt(0) ? message.upgradeSequence?.toString() : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return IdentifiedChannel.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/IdentifiedChannel",
      value: IdentifiedChannel.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return IdentifiedChannel.decode(message.value);
  },
  toProto(message) {
    return IdentifiedChannel.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.core.channel.v1.IdentifiedChannel",
      value: IdentifiedChannel.encode(message).finish()
    };
  }
};
function createBaseCounterparty() {
  return {
    portId: "",
    channelId: ""
  };
}
const Counterparty = {
  typeUrl: "/ibc.core.channel.v1.Counterparty",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseCounterparty();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.portId = reader.string();
          break;
        case 2:
          message.channelId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseCounterparty();
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseCounterparty();
    if (object.port_id !== void 0 && object.port_id !== null) {
      message.portId = object.port_id;
    }
    if (object.channel_id !== void 0 && object.channel_id !== null) {
      message.channelId = object.channel_id;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.port_id = message.portId === "" ? void 0 : message.portId;
    obj.channel_id = message.channelId === "" ? void 0 : message.channelId;
    return obj;
  },
  fromAminoMsg(object) {
    return Counterparty.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/Counterparty",
      value: Counterparty.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return Counterparty.decode(message.value);
  },
  toProto(message) {
    return Counterparty.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.core.channel.v1.Counterparty",
      value: Counterparty.encode(message).finish()
    };
  }
};
function createBasePacket() {
  return {
    sequence: BigInt(0),
    sourcePort: "",
    sourceChannel: "",
    destinationPort: "",
    destinationChannel: "",
    data: new Uint8Array(),
    timeoutHeight: import_client.Height.fromPartial({}),
    timeoutTimestamp: BigInt(0)
  };
}
const Packet = {
  typeUrl: "/ibc.core.channel.v1.Packet",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.sequence !== BigInt(0)) {
      writer.uint32(8).uint64(message.sequence);
    }
    if (message.sourcePort !== "") {
      writer.uint32(18).string(message.sourcePort);
    }
    if (message.sourceChannel !== "") {
      writer.uint32(26).string(message.sourceChannel);
    }
    if (message.destinationPort !== "") {
      writer.uint32(34).string(message.destinationPort);
    }
    if (message.destinationChannel !== "") {
      writer.uint32(42).string(message.destinationChannel);
    }
    if (message.data.length !== 0) {
      writer.uint32(50).bytes(message.data);
    }
    if (message.timeoutHeight !== void 0) {
      import_client.Height.encode(message.timeoutHeight, writer.uint32(58).fork()).ldelim();
    }
    if (message.timeoutTimestamp !== BigInt(0)) {
      writer.uint32(64).uint64(message.timeoutTimestamp);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBasePacket();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sequence = reader.uint64();
          break;
        case 2:
          message.sourcePort = reader.string();
          break;
        case 3:
          message.sourceChannel = reader.string();
          break;
        case 4:
          message.destinationPort = reader.string();
          break;
        case 5:
          message.destinationChannel = reader.string();
          break;
        case 6:
          message.data = reader.bytes();
          break;
        case 7:
          message.timeoutHeight = import_client.Height.decode(reader, reader.uint32());
          break;
        case 8:
          message.timeoutTimestamp = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBasePacket();
    message.sequence = object.sequence !== void 0 && object.sequence !== null ? BigInt(object.sequence.toString()) : BigInt(0);
    message.sourcePort = object.sourcePort ?? "";
    message.sourceChannel = object.sourceChannel ?? "";
    message.destinationPort = object.destinationPort ?? "";
    message.destinationChannel = object.destinationChannel ?? "";
    message.data = object.data ?? new Uint8Array();
    message.timeoutHeight = object.timeoutHeight !== void 0 && object.timeoutHeight !== null ? import_client.Height.fromPartial(object.timeoutHeight) : void 0;
    message.timeoutTimestamp = object.timeoutTimestamp !== void 0 && object.timeoutTimestamp !== null ? BigInt(object.timeoutTimestamp.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object) {
    const message = createBasePacket();
    if (object.sequence !== void 0 && object.sequence !== null) {
      message.sequence = BigInt(object.sequence);
    }
    if (object.source_port !== void 0 && object.source_port !== null) {
      message.sourcePort = object.source_port;
    }
    if (object.source_channel !== void 0 && object.source_channel !== null) {
      message.sourceChannel = object.source_channel;
    }
    if (object.destination_port !== void 0 && object.destination_port !== null) {
      message.destinationPort = object.destination_port;
    }
    if (object.destination_channel !== void 0 && object.destination_channel !== null) {
      message.destinationChannel = object.destination_channel;
    }
    if (object.data !== void 0 && object.data !== null) {
      message.data = (0, import_helpers.bytesFromBase64)(object.data);
    }
    if (object.timeout_height !== void 0 && object.timeout_height !== null) {
      message.timeoutHeight = import_client.Height.fromAmino(object.timeout_height);
    }
    if (object.timeout_timestamp !== void 0 && object.timeout_timestamp !== null) {
      message.timeoutTimestamp = BigInt(object.timeout_timestamp);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.sequence = message.sequence !== BigInt(0) ? message.sequence?.toString() : void 0;
    obj.source_port = message.sourcePort === "" ? void 0 : message.sourcePort;
    obj.source_channel = message.sourceChannel === "" ? void 0 : message.sourceChannel;
    obj.destination_port = message.destinationPort === "" ? void 0 : message.destinationPort;
    obj.destination_channel = message.destinationChannel === "" ? void 0 : message.destinationChannel;
    obj.data = message.data ? (0, import_helpers.base64FromBytes)(message.data) : void 0;
    obj.timeout_height = message.timeoutHeight ? import_client.Height.toAmino(message.timeoutHeight) : {};
    obj.timeout_timestamp = message.timeoutTimestamp !== BigInt(0) ? message.timeoutTimestamp?.toString() : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return Packet.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/Packet",
      value: Packet.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return Packet.decode(message.value);
  },
  toProto(message) {
    return Packet.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.core.channel.v1.Packet",
      value: Packet.encode(message).finish()
    };
  }
};
function createBasePacketState() {
  return {
    portId: "",
    channelId: "",
    sequence: BigInt(0),
    data: new Uint8Array()
  };
}
const PacketState = {
  typeUrl: "/ibc.core.channel.v1.PacketState",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    if (message.sequence !== BigInt(0)) {
      writer.uint32(24).uint64(message.sequence);
    }
    if (message.data.length !== 0) {
      writer.uint32(34).bytes(message.data);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBasePacketState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.portId = reader.string();
          break;
        case 2:
          message.channelId = reader.string();
          break;
        case 3:
          message.sequence = reader.uint64();
          break;
        case 4:
          message.data = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBasePacketState();
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    message.sequence = object.sequence !== void 0 && object.sequence !== null ? BigInt(object.sequence.toString()) : BigInt(0);
    message.data = object.data ?? new Uint8Array();
    return message;
  },
  fromAmino(object) {
    const message = createBasePacketState();
    if (object.port_id !== void 0 && object.port_id !== null) {
      message.portId = object.port_id;
    }
    if (object.channel_id !== void 0 && object.channel_id !== null) {
      message.channelId = object.channel_id;
    }
    if (object.sequence !== void 0 && object.sequence !== null) {
      message.sequence = BigInt(object.sequence);
    }
    if (object.data !== void 0 && object.data !== null) {
      message.data = (0, import_helpers.bytesFromBase64)(object.data);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.port_id = message.portId === "" ? void 0 : message.portId;
    obj.channel_id = message.channelId === "" ? void 0 : message.channelId;
    obj.sequence = message.sequence !== BigInt(0) ? message.sequence?.toString() : void 0;
    obj.data = message.data ? (0, import_helpers.base64FromBytes)(message.data) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return PacketState.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/PacketState",
      value: PacketState.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return PacketState.decode(message.value);
  },
  toProto(message) {
    return PacketState.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.core.channel.v1.PacketState",
      value: PacketState.encode(message).finish()
    };
  }
};
function createBasePacketId() {
  return {
    portId: "",
    channelId: "",
    sequence: BigInt(0)
  };
}
const PacketId = {
  typeUrl: "/ibc.core.channel.v1.PacketId",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    if (message.sequence !== BigInt(0)) {
      writer.uint32(24).uint64(message.sequence);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBasePacketId();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.portId = reader.string();
          break;
        case 2:
          message.channelId = reader.string();
          break;
        case 3:
          message.sequence = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBasePacketId();
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    message.sequence = object.sequence !== void 0 && object.sequence !== null ? BigInt(object.sequence.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object) {
    const message = createBasePacketId();
    if (object.port_id !== void 0 && object.port_id !== null) {
      message.portId = object.port_id;
    }
    if (object.channel_id !== void 0 && object.channel_id !== null) {
      message.channelId = object.channel_id;
    }
    if (object.sequence !== void 0 && object.sequence !== null) {
      message.sequence = BigInt(object.sequence);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.port_id = message.portId === "" ? void 0 : message.portId;
    obj.channel_id = message.channelId === "" ? void 0 : message.channelId;
    obj.sequence = message.sequence !== BigInt(0) ? message.sequence?.toString() : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return PacketId.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/PacketId",
      value: PacketId.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return PacketId.decode(message.value);
  },
  toProto(message) {
    return PacketId.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.core.channel.v1.PacketId",
      value: PacketId.encode(message).finish()
    };
  }
};
function createBaseAcknowledgement() {
  return {
    result: void 0,
    error: void 0
  };
}
const Acknowledgement = {
  typeUrl: "/ibc.core.channel.v1.Acknowledgement",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.result !== void 0) {
      writer.uint32(170).bytes(message.result);
    }
    if (message.error !== void 0) {
      writer.uint32(178).string(message.error);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseAcknowledgement();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 21:
          message.result = reader.bytes();
          break;
        case 22:
          message.error = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseAcknowledgement();
    message.result = object.result ?? void 0;
    message.error = object.error ?? void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseAcknowledgement();
    if (object.result !== void 0 && object.result !== null) {
      message.result = (0, import_helpers.bytesFromBase64)(object.result);
    }
    if (object.error !== void 0 && object.error !== null) {
      message.error = object.error;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.result = message.result ? (0, import_helpers.base64FromBytes)(message.result) : void 0;
    obj.error = message.error === null ? void 0 : message.error;
    return obj;
  },
  fromAminoMsg(object) {
    return Acknowledgement.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/Acknowledgement",
      value: Acknowledgement.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return Acknowledgement.decode(message.value);
  },
  toProto(message) {
    return Acknowledgement.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.core.channel.v1.Acknowledgement",
      value: Acknowledgement.encode(message).finish()
    };
  }
};
function createBaseTimeout() {
  return {
    height: import_client.Height.fromPartial({}),
    timestamp: BigInt(0)
  };
}
const Timeout = {
  typeUrl: "/ibc.core.channel.v1.Timeout",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.height !== void 0) {
      import_client.Height.encode(message.height, writer.uint32(10).fork()).ldelim();
    }
    if (message.timestamp !== BigInt(0)) {
      writer.uint32(16).uint64(message.timestamp);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseTimeout();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = import_client.Height.decode(reader, reader.uint32());
          break;
        case 2:
          message.timestamp = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseTimeout();
    message.height = object.height !== void 0 && object.height !== null ? import_client.Height.fromPartial(object.height) : void 0;
    message.timestamp = object.timestamp !== void 0 && object.timestamp !== null ? BigInt(object.timestamp.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object) {
    const message = createBaseTimeout();
    if (object.height !== void 0 && object.height !== null) {
      message.height = import_client.Height.fromAmino(object.height);
    }
    if (object.timestamp !== void 0 && object.timestamp !== null) {
      message.timestamp = BigInt(object.timestamp);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.height = message.height ? import_client.Height.toAmino(message.height) : {};
    obj.timestamp = message.timestamp !== BigInt(0) ? message.timestamp?.toString() : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return Timeout.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/Timeout",
      value: Timeout.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return Timeout.decode(message.value);
  },
  toProto(message) {
    return Timeout.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.core.channel.v1.Timeout",
      value: Timeout.encode(message).finish()
    };
  }
};
function createBaseParams() {
  return {
    upgradeTimeout: Timeout.fromPartial({})
  };
}
const Params = {
  typeUrl: "/ibc.core.channel.v1.Params",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.upgradeTimeout !== void 0) {
      Timeout.encode(message.upgradeTimeout, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.upgradeTimeout = Timeout.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseParams();
    message.upgradeTimeout = object.upgradeTimeout !== void 0 && object.upgradeTimeout !== null ? Timeout.fromPartial(object.upgradeTimeout) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseParams();
    if (object.upgrade_timeout !== void 0 && object.upgrade_timeout !== null) {
      message.upgradeTimeout = Timeout.fromAmino(object.upgrade_timeout);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.upgrade_timeout = message.upgradeTimeout ? Timeout.toAmino(message.upgradeTimeout) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return Params.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/Params",
      value: Params.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return Params.decode(message.value);
  },
  toProto(message) {
    return Params.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.core.channel.v1.Params",
      value: Params.encode(message).finish()
    };
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Acknowledgement,
  Channel,
  Counterparty,
  IdentifiedChannel,
  Order,
  OrderAmino,
  OrderSDKType,
  Packet,
  PacketId,
  PacketState,
  Params,
  State,
  StateAmino,
  StateSDKType,
  Timeout,
  orderFromJSON,
  orderToJSON,
  stateFromJSON,
  stateToJSON
});
