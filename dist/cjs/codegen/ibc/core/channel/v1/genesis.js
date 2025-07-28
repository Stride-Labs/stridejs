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
  GenesisState: () => GenesisState,
  PacketSequence: () => PacketSequence
});
module.exports = __toCommonJS(genesis_exports);
var import_channel = require("./channel");
var import_binary = require("../../../../binary");
function createBaseGenesisState() {
  return {
    channels: [],
    acknowledgements: [],
    commitments: [],
    receipts: [],
    sendSequences: [],
    recvSequences: [],
    ackSequences: [],
    nextChannelSequence: BigInt(0)
  };
}
const GenesisState = {
  typeUrl: "/ibc.core.channel.v1.GenesisState",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    for (const v of message.channels) {
      import_channel.IdentifiedChannel.encode(v, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.acknowledgements) {
      import_channel.PacketState.encode(v, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.commitments) {
      import_channel.PacketState.encode(v, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.receipts) {
      import_channel.PacketState.encode(v, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.sendSequences) {
      PacketSequence.encode(v, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.recvSequences) {
      PacketSequence.encode(v, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.ackSequences) {
      PacketSequence.encode(v, writer.uint32(58).fork()).ldelim();
    }
    if (message.nextChannelSequence !== BigInt(0)) {
      writer.uint32(64).uint64(message.nextChannelSequence);
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
          message.channels.push(import_channel.IdentifiedChannel.decode(reader, reader.uint32()));
          break;
        case 2:
          message.acknowledgements.push(import_channel.PacketState.decode(reader, reader.uint32()));
          break;
        case 3:
          message.commitments.push(import_channel.PacketState.decode(reader, reader.uint32()));
          break;
        case 4:
          message.receipts.push(import_channel.PacketState.decode(reader, reader.uint32()));
          break;
        case 5:
          message.sendSequences.push(PacketSequence.decode(reader, reader.uint32()));
          break;
        case 6:
          message.recvSequences.push(PacketSequence.decode(reader, reader.uint32()));
          break;
        case 7:
          message.ackSequences.push(PacketSequence.decode(reader, reader.uint32()));
          break;
        case 8:
          message.nextChannelSequence = reader.uint64();
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
    message.channels = object.channels?.map((e) => import_channel.IdentifiedChannel.fromPartial(e)) || [];
    message.acknowledgements = object.acknowledgements?.map((e) => import_channel.PacketState.fromPartial(e)) || [];
    message.commitments = object.commitments?.map((e) => import_channel.PacketState.fromPartial(e)) || [];
    message.receipts = object.receipts?.map((e) => import_channel.PacketState.fromPartial(e)) || [];
    message.sendSequences = object.sendSequences?.map((e) => PacketSequence.fromPartial(e)) || [];
    message.recvSequences = object.recvSequences?.map((e) => PacketSequence.fromPartial(e)) || [];
    message.ackSequences = object.ackSequences?.map((e) => PacketSequence.fromPartial(e)) || [];
    message.nextChannelSequence = object.nextChannelSequence !== void 0 && object.nextChannelSequence !== null ? BigInt(object.nextChannelSequence.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object) {
    const message = createBaseGenesisState();
    message.channels = object.channels?.map((e) => import_channel.IdentifiedChannel.fromAmino(e)) || [];
    message.acknowledgements = object.acknowledgements?.map((e) => import_channel.PacketState.fromAmino(e)) || [];
    message.commitments = object.commitments?.map((e) => import_channel.PacketState.fromAmino(e)) || [];
    message.receipts = object.receipts?.map((e) => import_channel.PacketState.fromAmino(e)) || [];
    message.sendSequences = object.send_sequences?.map((e) => PacketSequence.fromAmino(e)) || [];
    message.recvSequences = object.recv_sequences?.map((e) => PacketSequence.fromAmino(e)) || [];
    message.ackSequences = object.ack_sequences?.map((e) => PacketSequence.fromAmino(e)) || [];
    if (object.next_channel_sequence !== void 0 && object.next_channel_sequence !== null) {
      message.nextChannelSequence = BigInt(object.next_channel_sequence);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.channels) {
      obj.channels = message.channels.map((e) => e ? import_channel.IdentifiedChannel.toAmino(e) : void 0);
    } else {
      obj.channels = message.channels;
    }
    if (message.acknowledgements) {
      obj.acknowledgements = message.acknowledgements.map((e) => e ? import_channel.PacketState.toAmino(e) : void 0);
    } else {
      obj.acknowledgements = message.acknowledgements;
    }
    if (message.commitments) {
      obj.commitments = message.commitments.map((e) => e ? import_channel.PacketState.toAmino(e) : void 0);
    } else {
      obj.commitments = message.commitments;
    }
    if (message.receipts) {
      obj.receipts = message.receipts.map((e) => e ? import_channel.PacketState.toAmino(e) : void 0);
    } else {
      obj.receipts = message.receipts;
    }
    if (message.sendSequences) {
      obj.send_sequences = message.sendSequences.map((e) => e ? PacketSequence.toAmino(e) : void 0);
    } else {
      obj.send_sequences = message.sendSequences;
    }
    if (message.recvSequences) {
      obj.recv_sequences = message.recvSequences.map((e) => e ? PacketSequence.toAmino(e) : void 0);
    } else {
      obj.recv_sequences = message.recvSequences;
    }
    if (message.ackSequences) {
      obj.ack_sequences = message.ackSequences.map((e) => e ? PacketSequence.toAmino(e) : void 0);
    } else {
      obj.ack_sequences = message.ackSequences;
    }
    obj.next_channel_sequence = message.nextChannelSequence !== BigInt(0) ? message.nextChannelSequence?.toString() : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return GenesisState.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/GenesisState",
      value: GenesisState.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return GenesisState.decode(message.value);
  },
  toProto(message) {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.core.channel.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
function createBasePacketSequence() {
  return {
    portId: "",
    channelId: "",
    sequence: BigInt(0)
  };
}
const PacketSequence = {
  typeUrl: "/ibc.core.channel.v1.PacketSequence",
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
    const message = createBasePacketSequence();
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
    const message = createBasePacketSequence();
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    message.sequence = object.sequence !== void 0 && object.sequence !== null ? BigInt(object.sequence.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object) {
    const message = createBasePacketSequence();
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
    return PacketSequence.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/PacketSequence",
      value: PacketSequence.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return PacketSequence.decode(message.value);
  },
  toProto(message) {
    return PacketSequence.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.core.channel.v1.PacketSequence",
      value: PacketSequence.encode(message).finish()
    };
  }
};
// Proper CommonJS exports for dynamic imports
module.exports = {
  GenesisState,
  PacketSequence
};
