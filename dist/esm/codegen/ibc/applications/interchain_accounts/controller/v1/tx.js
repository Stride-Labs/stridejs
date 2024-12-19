import { InterchainAccountPacketData } from "../../v1/packet";
import { BinaryReader, BinaryWriter } from "../../../../../binary";
function createBaseMsgRegisterInterchainAccount() {
  return {
    owner: "",
    connectionId: "",
    version: ""
  };
}
const MsgRegisterInterchainAccount = {
  typeUrl: "/ibc.applications.interchain_accounts.controller.v1.MsgRegisterInterchainAccount",
  encode(message, writer = BinaryWriter.create()) {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.connectionId !== "") {
      writer.uint32(18).string(message.connectionId);
    }
    if (message.version !== "") {
      writer.uint32(26).string(message.version);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterInterchainAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.connectionId = reader.string();
          break;
        case 3:
          message.version = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgRegisterInterchainAccount();
    message.owner = object.owner ?? "";
    message.connectionId = object.connectionId ?? "";
    message.version = object.version ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgRegisterInterchainAccount();
    if (object.owner !== void 0 && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.connection_id !== void 0 && object.connection_id !== null) {
      message.connectionId = object.connection_id;
    }
    if (object.version !== void 0 && object.version !== null) {
      message.version = object.version;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.owner = message.owner === "" ? void 0 : message.owner;
    obj.connection_id = message.connectionId === "" ? void 0 : message.connectionId;
    obj.version = message.version === "" ? void 0 : message.version;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgRegisterInterchainAccount.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgRegisterInterchainAccount",
      value: MsgRegisterInterchainAccount.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgRegisterInterchainAccount.decode(message.value);
  },
  toProto(message) {
    return MsgRegisterInterchainAccount.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.applications.interchain_accounts.controller.v1.MsgRegisterInterchainAccount",
      value: MsgRegisterInterchainAccount.encode(message).finish()
    };
  }
};
function createBaseMsgRegisterInterchainAccountResponse() {
  return {
    channelId: "",
    portId: ""
  };
}
const MsgRegisterInterchainAccountResponse = {
  typeUrl: "/ibc.applications.interchain_accounts.controller.v1.MsgRegisterInterchainAccountResponse",
  encode(message, writer = BinaryWriter.create()) {
    if (message.channelId !== "") {
      writer.uint32(10).string(message.channelId);
    }
    if (message.portId !== "") {
      writer.uint32(18).string(message.portId);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterInterchainAccountResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.channelId = reader.string();
          break;
        case 2:
          message.portId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgRegisterInterchainAccountResponse();
    message.channelId = object.channelId ?? "";
    message.portId = object.portId ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgRegisterInterchainAccountResponse();
    if (object.channel_id !== void 0 && object.channel_id !== null) {
      message.channelId = object.channel_id;
    }
    if (object.port_id !== void 0 && object.port_id !== null) {
      message.portId = object.port_id;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.channel_id = message.channelId === "" ? void 0 : message.channelId;
    obj.port_id = message.portId === "" ? void 0 : message.portId;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgRegisterInterchainAccountResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgRegisterInterchainAccountResponse",
      value: MsgRegisterInterchainAccountResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgRegisterInterchainAccountResponse.decode(message.value);
  },
  toProto(message) {
    return MsgRegisterInterchainAccountResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.applications.interchain_accounts.controller.v1.MsgRegisterInterchainAccountResponse",
      value: MsgRegisterInterchainAccountResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSendTx() {
  return {
    owner: "",
    connectionId: "",
    packetData: InterchainAccountPacketData.fromPartial({}),
    relativeTimeout: BigInt(0)
  };
}
const MsgSendTx = {
  typeUrl: "/ibc.applications.interchain_accounts.controller.v1.MsgSendTx",
  encode(message, writer = BinaryWriter.create()) {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.connectionId !== "") {
      writer.uint32(18).string(message.connectionId);
    }
    if (message.packetData !== void 0) {
      InterchainAccountPacketData.encode(message.packetData, writer.uint32(26).fork()).ldelim();
    }
    if (message.relativeTimeout !== BigInt(0)) {
      writer.uint32(32).uint64(message.relativeTimeout);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgSendTx();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.connectionId = reader.string();
          break;
        case 3:
          message.packetData = InterchainAccountPacketData.decode(reader, reader.uint32());
          break;
        case 4:
          message.relativeTimeout = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgSendTx();
    message.owner = object.owner ?? "";
    message.connectionId = object.connectionId ?? "";
    message.packetData = object.packetData !== void 0 && object.packetData !== null ? InterchainAccountPacketData.fromPartial(object.packetData) : void 0;
    message.relativeTimeout = object.relativeTimeout !== void 0 && object.relativeTimeout !== null ? BigInt(object.relativeTimeout.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgSendTx();
    if (object.owner !== void 0 && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.connection_id !== void 0 && object.connection_id !== null) {
      message.connectionId = object.connection_id;
    }
    if (object.packet_data !== void 0 && object.packet_data !== null) {
      message.packetData = InterchainAccountPacketData.fromAmino(object.packet_data);
    }
    if (object.relative_timeout !== void 0 && object.relative_timeout !== null) {
      message.relativeTimeout = BigInt(object.relative_timeout);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.owner = message.owner === "" ? void 0 : message.owner;
    obj.connection_id = message.connectionId === "" ? void 0 : message.connectionId;
    obj.packet_data = message.packetData ? InterchainAccountPacketData.toAmino(message.packetData) : void 0;
    obj.relative_timeout = message.relativeTimeout !== BigInt(0) ? message.relativeTimeout.toString() : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgSendTx.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgSendTx",
      value: MsgSendTx.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgSendTx.decode(message.value);
  },
  toProto(message) {
    return MsgSendTx.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.applications.interchain_accounts.controller.v1.MsgSendTx",
      value: MsgSendTx.encode(message).finish()
    };
  }
};
function createBaseMsgSendTxResponse() {
  return {
    sequence: BigInt(0)
  };
}
const MsgSendTxResponse = {
  typeUrl: "/ibc.applications.interchain_accounts.controller.v1.MsgSendTxResponse",
  encode(message, writer = BinaryWriter.create()) {
    if (message.sequence !== BigInt(0)) {
      writer.uint32(8).uint64(message.sequence);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgSendTxResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
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
    const message = createBaseMsgSendTxResponse();
    message.sequence = object.sequence !== void 0 && object.sequence !== null ? BigInt(object.sequence.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgSendTxResponse();
    if (object.sequence !== void 0 && object.sequence !== null) {
      message.sequence = BigInt(object.sequence);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.sequence = message.sequence !== BigInt(0) ? message.sequence.toString() : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgSendTxResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgSendTxResponse",
      value: MsgSendTxResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgSendTxResponse.decode(message.value);
  },
  toProto(message) {
    return MsgSendTxResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.applications.interchain_accounts.controller.v1.MsgSendTxResponse",
      value: MsgSendTxResponse.encode(message).finish()
    };
  }
};
export {
  MsgRegisterInterchainAccount,
  MsgRegisterInterchainAccountResponse,
  MsgSendTx,
  MsgSendTxResponse
};
