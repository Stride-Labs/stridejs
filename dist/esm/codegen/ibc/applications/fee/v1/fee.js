import { Coin } from "../../../../cosmos/base/v1beta1/coin";
import { PacketId } from "../../../core/channel/v1/channel";
import { BinaryReader, BinaryWriter } from "../../../../binary";
function createBaseFee() {
  return {
    recvFee: [],
    ackFee: [],
    timeoutFee: []
  };
}
const Fee = {
  typeUrl: "/ibc.applications.fee.v1.Fee",
  encode(message, writer = BinaryWriter.create()) {
    for (const v of message.recvFee) {
      Coin.encode(v, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.ackFee) {
      Coin.encode(v, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.timeoutFee) {
      Coin.encode(v, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseFee();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.recvFee.push(Coin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.ackFee.push(Coin.decode(reader, reader.uint32()));
          break;
        case 3:
          message.timeoutFee.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseFee();
    message.recvFee = object.recvFee?.map((e) => Coin.fromPartial(e)) || [];
    message.ackFee = object.ackFee?.map((e) => Coin.fromPartial(e)) || [];
    message.timeoutFee = object.timeoutFee?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseFee();
    message.recvFee = object.recv_fee?.map((e) => Coin.fromAmino(e)) || [];
    message.ackFee = object.ack_fee?.map((e) => Coin.fromAmino(e)) || [];
    message.timeoutFee = object.timeout_fee?.map((e) => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.recvFee) {
      obj.recv_fee = message.recvFee.map((e) => e ? Coin.toAmino(e) : void 0);
    } else {
      obj.recv_fee = message.recvFee;
    }
    if (message.ackFee) {
      obj.ack_fee = message.ackFee.map((e) => e ? Coin.toAmino(e) : void 0);
    } else {
      obj.ack_fee = message.ackFee;
    }
    if (message.timeoutFee) {
      obj.timeout_fee = message.timeoutFee.map((e) => e ? Coin.toAmino(e) : void 0);
    } else {
      obj.timeout_fee = message.timeoutFee;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return Fee.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/Fee",
      value: Fee.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return Fee.decode(message.value);
  },
  toProto(message) {
    return Fee.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.applications.fee.v1.Fee",
      value: Fee.encode(message).finish()
    };
  }
};
function createBasePacketFee() {
  return {
    fee: Fee.fromPartial({}),
    refundAddress: "",
    relayers: []
  };
}
const PacketFee = {
  typeUrl: "/ibc.applications.fee.v1.PacketFee",
  encode(message, writer = BinaryWriter.create()) {
    if (message.fee !== void 0) {
      Fee.encode(message.fee, writer.uint32(10).fork()).ldelim();
    }
    if (message.refundAddress !== "") {
      writer.uint32(18).string(message.refundAddress);
    }
    for (const v of message.relayers) {
      writer.uint32(26).string(v);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBasePacketFee();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fee = Fee.decode(reader, reader.uint32());
          break;
        case 2:
          message.refundAddress = reader.string();
          break;
        case 3:
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
    const message = createBasePacketFee();
    message.fee = object.fee !== void 0 && object.fee !== null ? Fee.fromPartial(object.fee) : void 0;
    message.refundAddress = object.refundAddress ?? "";
    message.relayers = object.relayers?.map((e) => e) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBasePacketFee();
    if (object.fee !== void 0 && object.fee !== null) {
      message.fee = Fee.fromAmino(object.fee);
    }
    if (object.refund_address !== void 0 && object.refund_address !== null) {
      message.refundAddress = object.refund_address;
    }
    message.relayers = object.relayers?.map((e) => e) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.fee = message.fee ? Fee.toAmino(message.fee) : void 0;
    obj.refund_address = message.refundAddress === "" ? void 0 : message.refundAddress;
    if (message.relayers) {
      obj.relayers = message.relayers.map((e) => e);
    } else {
      obj.relayers = message.relayers;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return PacketFee.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/PacketFee",
      value: PacketFee.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return PacketFee.decode(message.value);
  },
  toProto(message) {
    return PacketFee.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.applications.fee.v1.PacketFee",
      value: PacketFee.encode(message).finish()
    };
  }
};
function createBasePacketFees() {
  return {
    packetFees: []
  };
}
const PacketFees = {
  typeUrl: "/ibc.applications.fee.v1.PacketFees",
  encode(message, writer = BinaryWriter.create()) {
    for (const v of message.packetFees) {
      PacketFee.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBasePacketFees();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.packetFees.push(PacketFee.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBasePacketFees();
    message.packetFees = object.packetFees?.map((e) => PacketFee.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBasePacketFees();
    message.packetFees = object.packet_fees?.map((e) => PacketFee.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.packetFees) {
      obj.packet_fees = message.packetFees.map((e) => e ? PacketFee.toAmino(e) : void 0);
    } else {
      obj.packet_fees = message.packetFees;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return PacketFees.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/PacketFees",
      value: PacketFees.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return PacketFees.decode(message.value);
  },
  toProto(message) {
    return PacketFees.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.applications.fee.v1.PacketFees",
      value: PacketFees.encode(message).finish()
    };
  }
};
function createBaseIdentifiedPacketFees() {
  return {
    packetId: PacketId.fromPartial({}),
    packetFees: []
  };
}
const IdentifiedPacketFees = {
  typeUrl: "/ibc.applications.fee.v1.IdentifiedPacketFees",
  encode(message, writer = BinaryWriter.create()) {
    if (message.packetId !== void 0) {
      PacketId.encode(message.packetId, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.packetFees) {
      PacketFee.encode(v, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseIdentifiedPacketFees();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.packetId = PacketId.decode(reader, reader.uint32());
          break;
        case 2:
          message.packetFees.push(PacketFee.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseIdentifiedPacketFees();
    message.packetId = object.packetId !== void 0 && object.packetId !== null ? PacketId.fromPartial(object.packetId) : void 0;
    message.packetFees = object.packetFees?.map((e) => PacketFee.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseIdentifiedPacketFees();
    if (object.packet_id !== void 0 && object.packet_id !== null) {
      message.packetId = PacketId.fromAmino(object.packet_id);
    }
    message.packetFees = object.packet_fees?.map((e) => PacketFee.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.packet_id = message.packetId ? PacketId.toAmino(message.packetId) : void 0;
    if (message.packetFees) {
      obj.packet_fees = message.packetFees.map((e) => e ? PacketFee.toAmino(e) : void 0);
    } else {
      obj.packet_fees = message.packetFees;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return IdentifiedPacketFees.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/IdentifiedPacketFees",
      value: IdentifiedPacketFees.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return IdentifiedPacketFees.decode(message.value);
  },
  toProto(message) {
    return IdentifiedPacketFees.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.applications.fee.v1.IdentifiedPacketFees",
      value: IdentifiedPacketFees.encode(message).finish()
    };
  }
};
export {
  Fee,
  IdentifiedPacketFees,
  PacketFee,
  PacketFees
};
