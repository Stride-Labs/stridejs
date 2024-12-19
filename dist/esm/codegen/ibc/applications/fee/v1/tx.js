import { Fee, PacketFee } from "./fee";
import { PacketId } from "../../../core/channel/v1/channel";
import { BinaryReader, BinaryWriter } from "../../../../binary";
function createBaseMsgRegisterPayee() {
  return {
    portId: "",
    channelId: "",
    relayer: "",
    payee: ""
  };
}
const MsgRegisterPayee = {
  typeUrl: "/ibc.applications.fee.v1.MsgRegisterPayee",
  encode(message, writer = BinaryWriter.create()) {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    if (message.relayer !== "") {
      writer.uint32(26).string(message.relayer);
    }
    if (message.payee !== "") {
      writer.uint32(34).string(message.payee);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterPayee();
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
          message.relayer = reader.string();
          break;
        case 4:
          message.payee = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgRegisterPayee();
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    message.relayer = object.relayer ?? "";
    message.payee = object.payee ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgRegisterPayee();
    if (object.port_id !== void 0 && object.port_id !== null) {
      message.portId = object.port_id;
    }
    if (object.channel_id !== void 0 && object.channel_id !== null) {
      message.channelId = object.channel_id;
    }
    if (object.relayer !== void 0 && object.relayer !== null) {
      message.relayer = object.relayer;
    }
    if (object.payee !== void 0 && object.payee !== null) {
      message.payee = object.payee;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.port_id = message.portId === "" ? void 0 : message.portId;
    obj.channel_id = message.channelId === "" ? void 0 : message.channelId;
    obj.relayer = message.relayer === "" ? void 0 : message.relayer;
    obj.payee = message.payee === "" ? void 0 : message.payee;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgRegisterPayee.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgRegisterPayee",
      value: MsgRegisterPayee.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgRegisterPayee.decode(message.value);
  },
  toProto(message) {
    return MsgRegisterPayee.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.applications.fee.v1.MsgRegisterPayee",
      value: MsgRegisterPayee.encode(message).finish()
    };
  }
};
function createBaseMsgRegisterPayeeResponse() {
  return {};
}
const MsgRegisterPayeeResponse = {
  typeUrl: "/ibc.applications.fee.v1.MsgRegisterPayeeResponse",
  encode(_, writer = BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterPayeeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_) {
    const message = createBaseMsgRegisterPayeeResponse();
    return message;
  },
  fromAmino(_) {
    const message = createBaseMsgRegisterPayeeResponse();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return MsgRegisterPayeeResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgRegisterPayeeResponse",
      value: MsgRegisterPayeeResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgRegisterPayeeResponse.decode(message.value);
  },
  toProto(message) {
    return MsgRegisterPayeeResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.applications.fee.v1.MsgRegisterPayeeResponse",
      value: MsgRegisterPayeeResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRegisterCounterpartyPayee() {
  return {
    portId: "",
    channelId: "",
    relayer: "",
    counterpartyPayee: ""
  };
}
const MsgRegisterCounterpartyPayee = {
  typeUrl: "/ibc.applications.fee.v1.MsgRegisterCounterpartyPayee",
  encode(message, writer = BinaryWriter.create()) {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    if (message.relayer !== "") {
      writer.uint32(26).string(message.relayer);
    }
    if (message.counterpartyPayee !== "") {
      writer.uint32(34).string(message.counterpartyPayee);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterCounterpartyPayee();
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
          message.relayer = reader.string();
          break;
        case 4:
          message.counterpartyPayee = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgRegisterCounterpartyPayee();
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    message.relayer = object.relayer ?? "";
    message.counterpartyPayee = object.counterpartyPayee ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgRegisterCounterpartyPayee();
    if (object.port_id !== void 0 && object.port_id !== null) {
      message.portId = object.port_id;
    }
    if (object.channel_id !== void 0 && object.channel_id !== null) {
      message.channelId = object.channel_id;
    }
    if (object.relayer !== void 0 && object.relayer !== null) {
      message.relayer = object.relayer;
    }
    if (object.counterparty_payee !== void 0 && object.counterparty_payee !== null) {
      message.counterpartyPayee = object.counterparty_payee;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.port_id = message.portId === "" ? void 0 : message.portId;
    obj.channel_id = message.channelId === "" ? void 0 : message.channelId;
    obj.relayer = message.relayer === "" ? void 0 : message.relayer;
    obj.counterparty_payee = message.counterpartyPayee === "" ? void 0 : message.counterpartyPayee;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgRegisterCounterpartyPayee.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgRegisterCounterpartyPayee",
      value: MsgRegisterCounterpartyPayee.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgRegisterCounterpartyPayee.decode(message.value);
  },
  toProto(message) {
    return MsgRegisterCounterpartyPayee.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.applications.fee.v1.MsgRegisterCounterpartyPayee",
      value: MsgRegisterCounterpartyPayee.encode(message).finish()
    };
  }
};
function createBaseMsgRegisterCounterpartyPayeeResponse() {
  return {};
}
const MsgRegisterCounterpartyPayeeResponse = {
  typeUrl: "/ibc.applications.fee.v1.MsgRegisterCounterpartyPayeeResponse",
  encode(_, writer = BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterCounterpartyPayeeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_) {
    const message = createBaseMsgRegisterCounterpartyPayeeResponse();
    return message;
  },
  fromAmino(_) {
    const message = createBaseMsgRegisterCounterpartyPayeeResponse();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return MsgRegisterCounterpartyPayeeResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgRegisterCounterpartyPayeeResponse",
      value: MsgRegisterCounterpartyPayeeResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgRegisterCounterpartyPayeeResponse.decode(message.value);
  },
  toProto(message) {
    return MsgRegisterCounterpartyPayeeResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.applications.fee.v1.MsgRegisterCounterpartyPayeeResponse",
      value: MsgRegisterCounterpartyPayeeResponse.encode(message).finish()
    };
  }
};
function createBaseMsgPayPacketFee() {
  return {
    fee: Fee.fromPartial({}),
    sourcePortId: "",
    sourceChannelId: "",
    signer: "",
    relayers: []
  };
}
const MsgPayPacketFee = {
  typeUrl: "/ibc.applications.fee.v1.MsgPayPacketFee",
  encode(message, writer = BinaryWriter.create()) {
    if (message.fee !== void 0) {
      Fee.encode(message.fee, writer.uint32(10).fork()).ldelim();
    }
    if (message.sourcePortId !== "") {
      writer.uint32(18).string(message.sourcePortId);
    }
    if (message.sourceChannelId !== "") {
      writer.uint32(26).string(message.sourceChannelId);
    }
    if (message.signer !== "") {
      writer.uint32(34).string(message.signer);
    }
    for (const v of message.relayers) {
      writer.uint32(42).string(v);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgPayPacketFee();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fee = Fee.decode(reader, reader.uint32());
          break;
        case 2:
          message.sourcePortId = reader.string();
          break;
        case 3:
          message.sourceChannelId = reader.string();
          break;
        case 4:
          message.signer = reader.string();
          break;
        case 5:
          message.relayers.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgPayPacketFee();
    message.fee = object.fee !== void 0 && object.fee !== null ? Fee.fromPartial(object.fee) : void 0;
    message.sourcePortId = object.sourcePortId ?? "";
    message.sourceChannelId = object.sourceChannelId ?? "";
    message.signer = object.signer ?? "";
    message.relayers = object.relayers?.map((e) => e) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgPayPacketFee();
    if (object.fee !== void 0 && object.fee !== null) {
      message.fee = Fee.fromAmino(object.fee);
    }
    if (object.source_port_id !== void 0 && object.source_port_id !== null) {
      message.sourcePortId = object.source_port_id;
    }
    if (object.source_channel_id !== void 0 && object.source_channel_id !== null) {
      message.sourceChannelId = object.source_channel_id;
    }
    if (object.signer !== void 0 && object.signer !== null) {
      message.signer = object.signer;
    }
    message.relayers = object.relayers?.map((e) => e) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.fee = message.fee ? Fee.toAmino(message.fee) : void 0;
    obj.source_port_id = message.sourcePortId === "" ? void 0 : message.sourcePortId;
    obj.source_channel_id = message.sourceChannelId === "" ? void 0 : message.sourceChannelId;
    obj.signer = message.signer === "" ? void 0 : message.signer;
    if (message.relayers) {
      obj.relayers = message.relayers.map((e) => e);
    } else {
      obj.relayers = message.relayers;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return MsgPayPacketFee.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgPayPacketFee",
      value: MsgPayPacketFee.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgPayPacketFee.decode(message.value);
  },
  toProto(message) {
    return MsgPayPacketFee.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.applications.fee.v1.MsgPayPacketFee",
      value: MsgPayPacketFee.encode(message).finish()
    };
  }
};
function createBaseMsgPayPacketFeeResponse() {
  return {};
}
const MsgPayPacketFeeResponse = {
  typeUrl: "/ibc.applications.fee.v1.MsgPayPacketFeeResponse",
  encode(_, writer = BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgPayPacketFeeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_) {
    const message = createBaseMsgPayPacketFeeResponse();
    return message;
  },
  fromAmino(_) {
    const message = createBaseMsgPayPacketFeeResponse();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return MsgPayPacketFeeResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgPayPacketFeeResponse",
      value: MsgPayPacketFeeResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgPayPacketFeeResponse.decode(message.value);
  },
  toProto(message) {
    return MsgPayPacketFeeResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.applications.fee.v1.MsgPayPacketFeeResponse",
      value: MsgPayPacketFeeResponse.encode(message).finish()
    };
  }
};
function createBaseMsgPayPacketFeeAsync() {
  return {
    packetId: PacketId.fromPartial({}),
    packetFee: PacketFee.fromPartial({})
  };
}
const MsgPayPacketFeeAsync = {
  typeUrl: "/ibc.applications.fee.v1.MsgPayPacketFeeAsync",
  encode(message, writer = BinaryWriter.create()) {
    if (message.packetId !== void 0) {
      PacketId.encode(message.packetId, writer.uint32(10).fork()).ldelim();
    }
    if (message.packetFee !== void 0) {
      PacketFee.encode(message.packetFee, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgPayPacketFeeAsync();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.packetId = PacketId.decode(reader, reader.uint32());
          break;
        case 2:
          message.packetFee = PacketFee.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgPayPacketFeeAsync();
    message.packetId = object.packetId !== void 0 && object.packetId !== null ? PacketId.fromPartial(object.packetId) : void 0;
    message.packetFee = object.packetFee !== void 0 && object.packetFee !== null ? PacketFee.fromPartial(object.packetFee) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgPayPacketFeeAsync();
    if (object.packet_id !== void 0 && object.packet_id !== null) {
      message.packetId = PacketId.fromAmino(object.packet_id);
    }
    if (object.packet_fee !== void 0 && object.packet_fee !== null) {
      message.packetFee = PacketFee.fromAmino(object.packet_fee);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.packet_id = message.packetId ? PacketId.toAmino(message.packetId) : void 0;
    obj.packet_fee = message.packetFee ? PacketFee.toAmino(message.packetFee) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgPayPacketFeeAsync.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgPayPacketFeeAsync",
      value: MsgPayPacketFeeAsync.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgPayPacketFeeAsync.decode(message.value);
  },
  toProto(message) {
    return MsgPayPacketFeeAsync.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.applications.fee.v1.MsgPayPacketFeeAsync",
      value: MsgPayPacketFeeAsync.encode(message).finish()
    };
  }
};
function createBaseMsgPayPacketFeeAsyncResponse() {
  return {};
}
const MsgPayPacketFeeAsyncResponse = {
  typeUrl: "/ibc.applications.fee.v1.MsgPayPacketFeeAsyncResponse",
  encode(_, writer = BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgPayPacketFeeAsyncResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_) {
    const message = createBaseMsgPayPacketFeeAsyncResponse();
    return message;
  },
  fromAmino(_) {
    const message = createBaseMsgPayPacketFeeAsyncResponse();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return MsgPayPacketFeeAsyncResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgPayPacketFeeAsyncResponse",
      value: MsgPayPacketFeeAsyncResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgPayPacketFeeAsyncResponse.decode(message.value);
  },
  toProto(message) {
    return MsgPayPacketFeeAsyncResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.applications.fee.v1.MsgPayPacketFeeAsyncResponse",
      value: MsgPayPacketFeeAsyncResponse.encode(message).finish()
    };
  }
};
export {
  MsgPayPacketFee,
  MsgPayPacketFeeAsync,
  MsgPayPacketFeeAsyncResponse,
  MsgPayPacketFeeResponse,
  MsgRegisterCounterpartyPayee,
  MsgRegisterCounterpartyPayeeResponse,
  MsgRegisterPayee,
  MsgRegisterPayeeResponse
};
