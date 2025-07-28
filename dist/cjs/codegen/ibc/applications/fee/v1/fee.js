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
var fee_exports = {};
__export(fee_exports, {
  Fee: () => Fee,
  IdentifiedPacketFees: () => IdentifiedPacketFees,
  PacketFee: () => PacketFee,
  PacketFees: () => PacketFees
});
module.exports = __toCommonJS(fee_exports);
var import_coin = require("../../../../cosmos/base/v1beta1/coin");
var import_channel = require("../../../core/channel/v1/channel");
var import_binary = require("../../../../binary");
function createBaseFee() {
  return {
    recvFee: [],
    ackFee: [],
    timeoutFee: []
  };
}
const Fee = {
  typeUrl: "/ibc.applications.fee.v1.Fee",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    for (const v of message.recvFee) {
      import_coin.Coin.encode(v, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.ackFee) {
      import_coin.Coin.encode(v, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.timeoutFee) {
      import_coin.Coin.encode(v, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseFee();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.recvFee.push(import_coin.Coin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.ackFee.push(import_coin.Coin.decode(reader, reader.uint32()));
          break;
        case 3:
          message.timeoutFee.push(import_coin.Coin.decode(reader, reader.uint32()));
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
    message.recvFee = object.recvFee?.map((e) => import_coin.Coin.fromPartial(e)) || [];
    message.ackFee = object.ackFee?.map((e) => import_coin.Coin.fromPartial(e)) || [];
    message.timeoutFee = object.timeoutFee?.map((e) => import_coin.Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseFee();
    message.recvFee = object.recv_fee?.map((e) => import_coin.Coin.fromAmino(e)) || [];
    message.ackFee = object.ack_fee?.map((e) => import_coin.Coin.fromAmino(e)) || [];
    message.timeoutFee = object.timeout_fee?.map((e) => import_coin.Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.recvFee) {
      obj.recv_fee = message.recvFee.map((e) => e ? import_coin.Coin.toAmino(e) : void 0);
    } else {
      obj.recv_fee = message.recvFee;
    }
    if (message.ackFee) {
      obj.ack_fee = message.ackFee.map((e) => e ? import_coin.Coin.toAmino(e) : void 0);
    } else {
      obj.ack_fee = message.ackFee;
    }
    if (message.timeoutFee) {
      obj.timeout_fee = message.timeoutFee.map((e) => e ? import_coin.Coin.toAmino(e) : void 0);
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
  encode(message, writer = import_binary.BinaryWriter.create()) {
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
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
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
  encode(message, writer = import_binary.BinaryWriter.create()) {
    for (const v of message.packetFees) {
      PacketFee.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
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
    packetId: import_channel.PacketId.fromPartial({}),
    packetFees: []
  };
}
const IdentifiedPacketFees = {
  typeUrl: "/ibc.applications.fee.v1.IdentifiedPacketFees",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.packetId !== void 0) {
      import_channel.PacketId.encode(message.packetId, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.packetFees) {
      PacketFee.encode(v, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseIdentifiedPacketFees();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.packetId = import_channel.PacketId.decode(reader, reader.uint32());
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
    message.packetId = object.packetId !== void 0 && object.packetId !== null ? import_channel.PacketId.fromPartial(object.packetId) : void 0;
    message.packetFees = object.packetFees?.map((e) => PacketFee.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseIdentifiedPacketFees();
    if (object.packet_id !== void 0 && object.packet_id !== null) {
      message.packetId = import_channel.PacketId.fromAmino(object.packet_id);
    }
    message.packetFees = object.packet_fees?.map((e) => PacketFee.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.packet_id = message.packetId ? import_channel.PacketId.toAmino(message.packetId) : void 0;
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
// Removed broken CommonJS export annotation
