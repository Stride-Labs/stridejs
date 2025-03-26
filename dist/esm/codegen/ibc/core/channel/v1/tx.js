import { Channel, Packet } from "./channel";
import { Height, Params } from "../../client/v1/client";
import { UpgradeFields, Upgrade, ErrorReceipt } from "./upgrade";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { bytesFromBase64, base64FromBytes } from "../../../../helpers";
var ResponseResultType = /* @__PURE__ */ ((ResponseResultType2) => {
  ResponseResultType2[ResponseResultType2["RESPONSE_RESULT_TYPE_UNSPECIFIED"] = 0] = "RESPONSE_RESULT_TYPE_UNSPECIFIED";
  ResponseResultType2[ResponseResultType2["RESPONSE_RESULT_TYPE_NOOP"] = 1] = "RESPONSE_RESULT_TYPE_NOOP";
  ResponseResultType2[ResponseResultType2["RESPONSE_RESULT_TYPE_SUCCESS"] = 2] = "RESPONSE_RESULT_TYPE_SUCCESS";
  ResponseResultType2[ResponseResultType2["RESPONSE_RESULT_TYPE_FAILURE"] = 3] = "RESPONSE_RESULT_TYPE_FAILURE";
  ResponseResultType2[ResponseResultType2["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return ResponseResultType2;
})(ResponseResultType || {});
const ResponseResultTypeSDKType = ResponseResultType;
const ResponseResultTypeAmino = ResponseResultType;
function responseResultTypeFromJSON(object) {
  switch (object) {
    case 0:
    case "RESPONSE_RESULT_TYPE_UNSPECIFIED":
      return 0 /* RESPONSE_RESULT_TYPE_UNSPECIFIED */;
    case 1:
    case "RESPONSE_RESULT_TYPE_NOOP":
      return 1 /* RESPONSE_RESULT_TYPE_NOOP */;
    case 2:
    case "RESPONSE_RESULT_TYPE_SUCCESS":
      return 2 /* RESPONSE_RESULT_TYPE_SUCCESS */;
    case 3:
    case "RESPONSE_RESULT_TYPE_FAILURE":
      return 3 /* RESPONSE_RESULT_TYPE_FAILURE */;
    case -1:
    case "UNRECOGNIZED":
    default:
      return -1 /* UNRECOGNIZED */;
  }
}
function responseResultTypeToJSON(object) {
  switch (object) {
    case 0 /* RESPONSE_RESULT_TYPE_UNSPECIFIED */:
      return "RESPONSE_RESULT_TYPE_UNSPECIFIED";
    case 1 /* RESPONSE_RESULT_TYPE_NOOP */:
      return "RESPONSE_RESULT_TYPE_NOOP";
    case 2 /* RESPONSE_RESULT_TYPE_SUCCESS */:
      return "RESPONSE_RESULT_TYPE_SUCCESS";
    case 3 /* RESPONSE_RESULT_TYPE_FAILURE */:
      return "RESPONSE_RESULT_TYPE_FAILURE";
    case -1 /* UNRECOGNIZED */:
    default:
      return "UNRECOGNIZED";
  }
}
function createBaseMsgChannelOpenInit() {
  return {
    portId: "",
    channel: Channel.fromPartial({}),
    signer: ""
  };
}
const MsgChannelOpenInit = {
  typeUrl: "/ibc.core.channel.v1.MsgChannelOpenInit",
  encode(message, writer = BinaryWriter.create()) {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.channel !== void 0) {
      Channel.encode(message.channel, writer.uint32(18).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(26).string(message.signer);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgChannelOpenInit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.portId = reader.string();
          break;
        case 2:
          message.channel = Channel.decode(reader, reader.uint32());
          break;
        case 3:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgChannelOpenInit();
    message.portId = object.portId ?? "";
    message.channel = object.channel !== void 0 && object.channel !== null ? Channel.fromPartial(object.channel) : void 0;
    message.signer = object.signer ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgChannelOpenInit();
    if (object.port_id !== void 0 && object.port_id !== null) {
      message.portId = object.port_id;
    }
    if (object.channel !== void 0 && object.channel !== null) {
      message.channel = Channel.fromAmino(object.channel);
    }
    if (object.signer !== void 0 && object.signer !== null) {
      message.signer = object.signer;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.port_id = message.portId === "" ? void 0 : message.portId;
    obj.channel = message.channel ? Channel.toAmino(message.channel) : void 0;
    obj.signer = message.signer === "" ? void 0 : message.signer;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgChannelOpenInit.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgChannelOpenInit",
      value: MsgChannelOpenInit.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgChannelOpenInit.decode(message.value);
  },
  toProto(message) {
    return MsgChannelOpenInit.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.core.channel.v1.MsgChannelOpenInit",
      value: MsgChannelOpenInit.encode(message).finish()
    };
  }
};
function createBaseMsgChannelOpenInitResponse() {
  return {
    channelId: "",
    version: ""
  };
}
const MsgChannelOpenInitResponse = {
  typeUrl: "/ibc.core.channel.v1.MsgChannelOpenInitResponse",
  encode(message, writer = BinaryWriter.create()) {
    if (message.channelId !== "") {
      writer.uint32(10).string(message.channelId);
    }
    if (message.version !== "") {
      writer.uint32(18).string(message.version);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgChannelOpenInitResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.channelId = reader.string();
          break;
        case 2:
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
    const message = createBaseMsgChannelOpenInitResponse();
    message.channelId = object.channelId ?? "";
    message.version = object.version ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgChannelOpenInitResponse();
    if (object.channel_id !== void 0 && object.channel_id !== null) {
      message.channelId = object.channel_id;
    }
    if (object.version !== void 0 && object.version !== null) {
      message.version = object.version;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.channel_id = message.channelId === "" ? void 0 : message.channelId;
    obj.version = message.version === "" ? void 0 : message.version;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgChannelOpenInitResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgChannelOpenInitResponse",
      value: MsgChannelOpenInitResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgChannelOpenInitResponse.decode(message.value);
  },
  toProto(message) {
    return MsgChannelOpenInitResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.core.channel.v1.MsgChannelOpenInitResponse",
      value: MsgChannelOpenInitResponse.encode(message).finish()
    };
  }
};
function createBaseMsgChannelOpenTry() {
  return {
    portId: "",
    previousChannelId: "",
    channel: Channel.fromPartial({}),
    counterpartyVersion: "",
    proofInit: new Uint8Array(),
    proofHeight: Height.fromPartial({}),
    signer: ""
  };
}
const MsgChannelOpenTry = {
  typeUrl: "/ibc.core.channel.v1.MsgChannelOpenTry",
  encode(message, writer = BinaryWriter.create()) {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.previousChannelId !== "") {
      writer.uint32(18).string(message.previousChannelId);
    }
    if (message.channel !== void 0) {
      Channel.encode(message.channel, writer.uint32(26).fork()).ldelim();
    }
    if (message.counterpartyVersion !== "") {
      writer.uint32(34).string(message.counterpartyVersion);
    }
    if (message.proofInit.length !== 0) {
      writer.uint32(42).bytes(message.proofInit);
    }
    if (message.proofHeight !== void 0) {
      Height.encode(message.proofHeight, writer.uint32(50).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(58).string(message.signer);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgChannelOpenTry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.portId = reader.string();
          break;
        case 2:
          message.previousChannelId = reader.string();
          break;
        case 3:
          message.channel = Channel.decode(reader, reader.uint32());
          break;
        case 4:
          message.counterpartyVersion = reader.string();
          break;
        case 5:
          message.proofInit = reader.bytes();
          break;
        case 6:
          message.proofHeight = Height.decode(reader, reader.uint32());
          break;
        case 7:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgChannelOpenTry();
    message.portId = object.portId ?? "";
    message.previousChannelId = object.previousChannelId ?? "";
    message.channel = object.channel !== void 0 && object.channel !== null ? Channel.fromPartial(object.channel) : void 0;
    message.counterpartyVersion = object.counterpartyVersion ?? "";
    message.proofInit = object.proofInit ?? new Uint8Array();
    message.proofHeight = object.proofHeight !== void 0 && object.proofHeight !== null ? Height.fromPartial(object.proofHeight) : void 0;
    message.signer = object.signer ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgChannelOpenTry();
    if (object.port_id !== void 0 && object.port_id !== null) {
      message.portId = object.port_id;
    }
    if (object.previous_channel_id !== void 0 && object.previous_channel_id !== null) {
      message.previousChannelId = object.previous_channel_id;
    }
    if (object.channel !== void 0 && object.channel !== null) {
      message.channel = Channel.fromAmino(object.channel);
    }
    if (object.counterparty_version !== void 0 && object.counterparty_version !== null) {
      message.counterpartyVersion = object.counterparty_version;
    }
    if (object.proof_init !== void 0 && object.proof_init !== null) {
      message.proofInit = bytesFromBase64(object.proof_init);
    }
    if (object.proof_height !== void 0 && object.proof_height !== null) {
      message.proofHeight = Height.fromAmino(object.proof_height);
    }
    if (object.signer !== void 0 && object.signer !== null) {
      message.signer = object.signer;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.port_id = message.portId === "" ? void 0 : message.portId;
    obj.previous_channel_id = message.previousChannelId === "" ? void 0 : message.previousChannelId;
    obj.channel = message.channel ? Channel.toAmino(message.channel) : void 0;
    obj.counterparty_version = message.counterpartyVersion === "" ? void 0 : message.counterpartyVersion;
    obj.proof_init = message.proofInit ? base64FromBytes(message.proofInit) : void 0;
    obj.proof_height = message.proofHeight ? Height.toAmino(message.proofHeight) : {};
    obj.signer = message.signer === "" ? void 0 : message.signer;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgChannelOpenTry.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgChannelOpenTry",
      value: MsgChannelOpenTry.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgChannelOpenTry.decode(message.value);
  },
  toProto(message) {
    return MsgChannelOpenTry.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.core.channel.v1.MsgChannelOpenTry",
      value: MsgChannelOpenTry.encode(message).finish()
    };
  }
};
function createBaseMsgChannelOpenTryResponse() {
  return {
    version: "",
    channelId: ""
  };
}
const MsgChannelOpenTryResponse = {
  typeUrl: "/ibc.core.channel.v1.MsgChannelOpenTryResponse",
  encode(message, writer = BinaryWriter.create()) {
    if (message.version !== "") {
      writer.uint32(10).string(message.version);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgChannelOpenTryResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.version = reader.string();
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
    const message = createBaseMsgChannelOpenTryResponse();
    message.version = object.version ?? "";
    message.channelId = object.channelId ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgChannelOpenTryResponse();
    if (object.version !== void 0 && object.version !== null) {
      message.version = object.version;
    }
    if (object.channel_id !== void 0 && object.channel_id !== null) {
      message.channelId = object.channel_id;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.version = message.version === "" ? void 0 : message.version;
    obj.channel_id = message.channelId === "" ? void 0 : message.channelId;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgChannelOpenTryResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgChannelOpenTryResponse",
      value: MsgChannelOpenTryResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgChannelOpenTryResponse.decode(message.value);
  },
  toProto(message) {
    return MsgChannelOpenTryResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.core.channel.v1.MsgChannelOpenTryResponse",
      value: MsgChannelOpenTryResponse.encode(message).finish()
    };
  }
};
function createBaseMsgChannelOpenAck() {
  return {
    portId: "",
    channelId: "",
    counterpartyChannelId: "",
    counterpartyVersion: "",
    proofTry: new Uint8Array(),
    proofHeight: Height.fromPartial({}),
    signer: ""
  };
}
const MsgChannelOpenAck = {
  typeUrl: "/ibc.core.channel.v1.MsgChannelOpenAck",
  encode(message, writer = BinaryWriter.create()) {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    if (message.counterpartyChannelId !== "") {
      writer.uint32(26).string(message.counterpartyChannelId);
    }
    if (message.counterpartyVersion !== "") {
      writer.uint32(34).string(message.counterpartyVersion);
    }
    if (message.proofTry.length !== 0) {
      writer.uint32(42).bytes(message.proofTry);
    }
    if (message.proofHeight !== void 0) {
      Height.encode(message.proofHeight, writer.uint32(50).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(58).string(message.signer);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgChannelOpenAck();
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
          message.counterpartyChannelId = reader.string();
          break;
        case 4:
          message.counterpartyVersion = reader.string();
          break;
        case 5:
          message.proofTry = reader.bytes();
          break;
        case 6:
          message.proofHeight = Height.decode(reader, reader.uint32());
          break;
        case 7:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgChannelOpenAck();
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    message.counterpartyChannelId = object.counterpartyChannelId ?? "";
    message.counterpartyVersion = object.counterpartyVersion ?? "";
    message.proofTry = object.proofTry ?? new Uint8Array();
    message.proofHeight = object.proofHeight !== void 0 && object.proofHeight !== null ? Height.fromPartial(object.proofHeight) : void 0;
    message.signer = object.signer ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgChannelOpenAck();
    if (object.port_id !== void 0 && object.port_id !== null) {
      message.portId = object.port_id;
    }
    if (object.channel_id !== void 0 && object.channel_id !== null) {
      message.channelId = object.channel_id;
    }
    if (object.counterparty_channel_id !== void 0 && object.counterparty_channel_id !== null) {
      message.counterpartyChannelId = object.counterparty_channel_id;
    }
    if (object.counterparty_version !== void 0 && object.counterparty_version !== null) {
      message.counterpartyVersion = object.counterparty_version;
    }
    if (object.proof_try !== void 0 && object.proof_try !== null) {
      message.proofTry = bytesFromBase64(object.proof_try);
    }
    if (object.proof_height !== void 0 && object.proof_height !== null) {
      message.proofHeight = Height.fromAmino(object.proof_height);
    }
    if (object.signer !== void 0 && object.signer !== null) {
      message.signer = object.signer;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.port_id = message.portId === "" ? void 0 : message.portId;
    obj.channel_id = message.channelId === "" ? void 0 : message.channelId;
    obj.counterparty_channel_id = message.counterpartyChannelId === "" ? void 0 : message.counterpartyChannelId;
    obj.counterparty_version = message.counterpartyVersion === "" ? void 0 : message.counterpartyVersion;
    obj.proof_try = message.proofTry ? base64FromBytes(message.proofTry) : void 0;
    obj.proof_height = message.proofHeight ? Height.toAmino(message.proofHeight) : {};
    obj.signer = message.signer === "" ? void 0 : message.signer;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgChannelOpenAck.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgChannelOpenAck",
      value: MsgChannelOpenAck.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgChannelOpenAck.decode(message.value);
  },
  toProto(message) {
    return MsgChannelOpenAck.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.core.channel.v1.MsgChannelOpenAck",
      value: MsgChannelOpenAck.encode(message).finish()
    };
  }
};
function createBaseMsgChannelOpenAckResponse() {
  return {};
}
const MsgChannelOpenAckResponse = {
  typeUrl: "/ibc.core.channel.v1.MsgChannelOpenAckResponse",
  encode(_, writer = BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgChannelOpenAckResponse();
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
    const message = createBaseMsgChannelOpenAckResponse();
    return message;
  },
  fromAmino(_) {
    const message = createBaseMsgChannelOpenAckResponse();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return MsgChannelOpenAckResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgChannelOpenAckResponse",
      value: MsgChannelOpenAckResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgChannelOpenAckResponse.decode(message.value);
  },
  toProto(message) {
    return MsgChannelOpenAckResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.core.channel.v1.MsgChannelOpenAckResponse",
      value: MsgChannelOpenAckResponse.encode(message).finish()
    };
  }
};
function createBaseMsgChannelOpenConfirm() {
  return {
    portId: "",
    channelId: "",
    proofAck: new Uint8Array(),
    proofHeight: Height.fromPartial({}),
    signer: ""
  };
}
const MsgChannelOpenConfirm = {
  typeUrl: "/ibc.core.channel.v1.MsgChannelOpenConfirm",
  encode(message, writer = BinaryWriter.create()) {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    if (message.proofAck.length !== 0) {
      writer.uint32(26).bytes(message.proofAck);
    }
    if (message.proofHeight !== void 0) {
      Height.encode(message.proofHeight, writer.uint32(34).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(42).string(message.signer);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgChannelOpenConfirm();
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
          message.proofAck = reader.bytes();
          break;
        case 4:
          message.proofHeight = Height.decode(reader, reader.uint32());
          break;
        case 5:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgChannelOpenConfirm();
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    message.proofAck = object.proofAck ?? new Uint8Array();
    message.proofHeight = object.proofHeight !== void 0 && object.proofHeight !== null ? Height.fromPartial(object.proofHeight) : void 0;
    message.signer = object.signer ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgChannelOpenConfirm();
    if (object.port_id !== void 0 && object.port_id !== null) {
      message.portId = object.port_id;
    }
    if (object.channel_id !== void 0 && object.channel_id !== null) {
      message.channelId = object.channel_id;
    }
    if (object.proof_ack !== void 0 && object.proof_ack !== null) {
      message.proofAck = bytesFromBase64(object.proof_ack);
    }
    if (object.proof_height !== void 0 && object.proof_height !== null) {
      message.proofHeight = Height.fromAmino(object.proof_height);
    }
    if (object.signer !== void 0 && object.signer !== null) {
      message.signer = object.signer;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.port_id = message.portId === "" ? void 0 : message.portId;
    obj.channel_id = message.channelId === "" ? void 0 : message.channelId;
    obj.proof_ack = message.proofAck ? base64FromBytes(message.proofAck) : void 0;
    obj.proof_height = message.proofHeight ? Height.toAmino(message.proofHeight) : {};
    obj.signer = message.signer === "" ? void 0 : message.signer;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgChannelOpenConfirm.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgChannelOpenConfirm",
      value: MsgChannelOpenConfirm.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgChannelOpenConfirm.decode(message.value);
  },
  toProto(message) {
    return MsgChannelOpenConfirm.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.core.channel.v1.MsgChannelOpenConfirm",
      value: MsgChannelOpenConfirm.encode(message).finish()
    };
  }
};
function createBaseMsgChannelOpenConfirmResponse() {
  return {};
}
const MsgChannelOpenConfirmResponse = {
  typeUrl: "/ibc.core.channel.v1.MsgChannelOpenConfirmResponse",
  encode(_, writer = BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgChannelOpenConfirmResponse();
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
    const message = createBaseMsgChannelOpenConfirmResponse();
    return message;
  },
  fromAmino(_) {
    const message = createBaseMsgChannelOpenConfirmResponse();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return MsgChannelOpenConfirmResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgChannelOpenConfirmResponse",
      value: MsgChannelOpenConfirmResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgChannelOpenConfirmResponse.decode(message.value);
  },
  toProto(message) {
    return MsgChannelOpenConfirmResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.core.channel.v1.MsgChannelOpenConfirmResponse",
      value: MsgChannelOpenConfirmResponse.encode(message).finish()
    };
  }
};
function createBaseMsgChannelCloseInit() {
  return {
    portId: "",
    channelId: "",
    signer: ""
  };
}
const MsgChannelCloseInit = {
  typeUrl: "/ibc.core.channel.v1.MsgChannelCloseInit",
  encode(message, writer = BinaryWriter.create()) {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    if (message.signer !== "") {
      writer.uint32(26).string(message.signer);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgChannelCloseInit();
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
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgChannelCloseInit();
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    message.signer = object.signer ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgChannelCloseInit();
    if (object.port_id !== void 0 && object.port_id !== null) {
      message.portId = object.port_id;
    }
    if (object.channel_id !== void 0 && object.channel_id !== null) {
      message.channelId = object.channel_id;
    }
    if (object.signer !== void 0 && object.signer !== null) {
      message.signer = object.signer;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.port_id = message.portId === "" ? void 0 : message.portId;
    obj.channel_id = message.channelId === "" ? void 0 : message.channelId;
    obj.signer = message.signer === "" ? void 0 : message.signer;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgChannelCloseInit.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgChannelCloseInit",
      value: MsgChannelCloseInit.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgChannelCloseInit.decode(message.value);
  },
  toProto(message) {
    return MsgChannelCloseInit.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.core.channel.v1.MsgChannelCloseInit",
      value: MsgChannelCloseInit.encode(message).finish()
    };
  }
};
function createBaseMsgChannelCloseInitResponse() {
  return {};
}
const MsgChannelCloseInitResponse = {
  typeUrl: "/ibc.core.channel.v1.MsgChannelCloseInitResponse",
  encode(_, writer = BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgChannelCloseInitResponse();
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
    const message = createBaseMsgChannelCloseInitResponse();
    return message;
  },
  fromAmino(_) {
    const message = createBaseMsgChannelCloseInitResponse();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return MsgChannelCloseInitResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgChannelCloseInitResponse",
      value: MsgChannelCloseInitResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgChannelCloseInitResponse.decode(message.value);
  },
  toProto(message) {
    return MsgChannelCloseInitResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.core.channel.v1.MsgChannelCloseInitResponse",
      value: MsgChannelCloseInitResponse.encode(message).finish()
    };
  }
};
function createBaseMsgChannelCloseConfirm() {
  return {
    portId: "",
    channelId: "",
    proofInit: new Uint8Array(),
    proofHeight: Height.fromPartial({}),
    signer: "",
    counterpartyUpgradeSequence: BigInt(0)
  };
}
const MsgChannelCloseConfirm = {
  typeUrl: "/ibc.core.channel.v1.MsgChannelCloseConfirm",
  encode(message, writer = BinaryWriter.create()) {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    if (message.proofInit.length !== 0) {
      writer.uint32(26).bytes(message.proofInit);
    }
    if (message.proofHeight !== void 0) {
      Height.encode(message.proofHeight, writer.uint32(34).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(42).string(message.signer);
    }
    if (message.counterpartyUpgradeSequence !== BigInt(0)) {
      writer.uint32(48).uint64(message.counterpartyUpgradeSequence);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgChannelCloseConfirm();
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
          message.proofInit = reader.bytes();
          break;
        case 4:
          message.proofHeight = Height.decode(reader, reader.uint32());
          break;
        case 5:
          message.signer = reader.string();
          break;
        case 6:
          message.counterpartyUpgradeSequence = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgChannelCloseConfirm();
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    message.proofInit = object.proofInit ?? new Uint8Array();
    message.proofHeight = object.proofHeight !== void 0 && object.proofHeight !== null ? Height.fromPartial(object.proofHeight) : void 0;
    message.signer = object.signer ?? "";
    message.counterpartyUpgradeSequence = object.counterpartyUpgradeSequence !== void 0 && object.counterpartyUpgradeSequence !== null ? BigInt(object.counterpartyUpgradeSequence.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgChannelCloseConfirm();
    if (object.port_id !== void 0 && object.port_id !== null) {
      message.portId = object.port_id;
    }
    if (object.channel_id !== void 0 && object.channel_id !== null) {
      message.channelId = object.channel_id;
    }
    if (object.proof_init !== void 0 && object.proof_init !== null) {
      message.proofInit = bytesFromBase64(object.proof_init);
    }
    if (object.proof_height !== void 0 && object.proof_height !== null) {
      message.proofHeight = Height.fromAmino(object.proof_height);
    }
    if (object.signer !== void 0 && object.signer !== null) {
      message.signer = object.signer;
    }
    if (object.counterparty_upgrade_sequence !== void 0 && object.counterparty_upgrade_sequence !== null) {
      message.counterpartyUpgradeSequence = BigInt(object.counterparty_upgrade_sequence);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.port_id = message.portId === "" ? void 0 : message.portId;
    obj.channel_id = message.channelId === "" ? void 0 : message.channelId;
    obj.proof_init = message.proofInit ? base64FromBytes(message.proofInit) : void 0;
    obj.proof_height = message.proofHeight ? Height.toAmino(message.proofHeight) : {};
    obj.signer = message.signer === "" ? void 0 : message.signer;
    obj.counterparty_upgrade_sequence = message.counterpartyUpgradeSequence !== BigInt(0) ? message.counterpartyUpgradeSequence?.toString() : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgChannelCloseConfirm.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgChannelCloseConfirm",
      value: MsgChannelCloseConfirm.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgChannelCloseConfirm.decode(message.value);
  },
  toProto(message) {
    return MsgChannelCloseConfirm.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.core.channel.v1.MsgChannelCloseConfirm",
      value: MsgChannelCloseConfirm.encode(message).finish()
    };
  }
};
function createBaseMsgChannelCloseConfirmResponse() {
  return {};
}
const MsgChannelCloseConfirmResponse = {
  typeUrl: "/ibc.core.channel.v1.MsgChannelCloseConfirmResponse",
  encode(_, writer = BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgChannelCloseConfirmResponse();
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
    const message = createBaseMsgChannelCloseConfirmResponse();
    return message;
  },
  fromAmino(_) {
    const message = createBaseMsgChannelCloseConfirmResponse();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return MsgChannelCloseConfirmResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgChannelCloseConfirmResponse",
      value: MsgChannelCloseConfirmResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgChannelCloseConfirmResponse.decode(message.value);
  },
  toProto(message) {
    return MsgChannelCloseConfirmResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.core.channel.v1.MsgChannelCloseConfirmResponse",
      value: MsgChannelCloseConfirmResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRecvPacket() {
  return {
    packet: Packet.fromPartial({}),
    proofCommitment: new Uint8Array(),
    proofHeight: Height.fromPartial({}),
    signer: ""
  };
}
const MsgRecvPacket = {
  typeUrl: "/ibc.core.channel.v1.MsgRecvPacket",
  encode(message, writer = BinaryWriter.create()) {
    if (message.packet !== void 0) {
      Packet.encode(message.packet, writer.uint32(10).fork()).ldelim();
    }
    if (message.proofCommitment.length !== 0) {
      writer.uint32(18).bytes(message.proofCommitment);
    }
    if (message.proofHeight !== void 0) {
      Height.encode(message.proofHeight, writer.uint32(26).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(34).string(message.signer);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgRecvPacket();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.packet = Packet.decode(reader, reader.uint32());
          break;
        case 2:
          message.proofCommitment = reader.bytes();
          break;
        case 3:
          message.proofHeight = Height.decode(reader, reader.uint32());
          break;
        case 4:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgRecvPacket();
    message.packet = object.packet !== void 0 && object.packet !== null ? Packet.fromPartial(object.packet) : void 0;
    message.proofCommitment = object.proofCommitment ?? new Uint8Array();
    message.proofHeight = object.proofHeight !== void 0 && object.proofHeight !== null ? Height.fromPartial(object.proofHeight) : void 0;
    message.signer = object.signer ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgRecvPacket();
    if (object.packet !== void 0 && object.packet !== null) {
      message.packet = Packet.fromAmino(object.packet);
    }
    if (object.proof_commitment !== void 0 && object.proof_commitment !== null) {
      message.proofCommitment = bytesFromBase64(object.proof_commitment);
    }
    if (object.proof_height !== void 0 && object.proof_height !== null) {
      message.proofHeight = Height.fromAmino(object.proof_height);
    }
    if (object.signer !== void 0 && object.signer !== null) {
      message.signer = object.signer;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.packet = message.packet ? Packet.toAmino(message.packet) : void 0;
    obj.proof_commitment = message.proofCommitment ? base64FromBytes(message.proofCommitment) : void 0;
    obj.proof_height = message.proofHeight ? Height.toAmino(message.proofHeight) : {};
    obj.signer = message.signer === "" ? void 0 : message.signer;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgRecvPacket.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgRecvPacket",
      value: MsgRecvPacket.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgRecvPacket.decode(message.value);
  },
  toProto(message) {
    return MsgRecvPacket.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.core.channel.v1.MsgRecvPacket",
      value: MsgRecvPacket.encode(message).finish()
    };
  }
};
function createBaseMsgRecvPacketResponse() {
  return {
    result: 0
  };
}
const MsgRecvPacketResponse = {
  typeUrl: "/ibc.core.channel.v1.MsgRecvPacketResponse",
  encode(message, writer = BinaryWriter.create()) {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgRecvPacketResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.result = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgRecvPacketResponse();
    message.result = object.result ?? 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgRecvPacketResponse();
    if (object.result !== void 0 && object.result !== null) {
      message.result = object.result;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.result = message.result === 0 ? void 0 : message.result;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgRecvPacketResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgRecvPacketResponse",
      value: MsgRecvPacketResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgRecvPacketResponse.decode(message.value);
  },
  toProto(message) {
    return MsgRecvPacketResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.core.channel.v1.MsgRecvPacketResponse",
      value: MsgRecvPacketResponse.encode(message).finish()
    };
  }
};
function createBaseMsgTimeout() {
  return {
    packet: Packet.fromPartial({}),
    proofUnreceived: new Uint8Array(),
    proofHeight: Height.fromPartial({}),
    nextSequenceRecv: BigInt(0),
    signer: ""
  };
}
const MsgTimeout = {
  typeUrl: "/ibc.core.channel.v1.MsgTimeout",
  encode(message, writer = BinaryWriter.create()) {
    if (message.packet !== void 0) {
      Packet.encode(message.packet, writer.uint32(10).fork()).ldelim();
    }
    if (message.proofUnreceived.length !== 0) {
      writer.uint32(18).bytes(message.proofUnreceived);
    }
    if (message.proofHeight !== void 0) {
      Height.encode(message.proofHeight, writer.uint32(26).fork()).ldelim();
    }
    if (message.nextSequenceRecv !== BigInt(0)) {
      writer.uint32(32).uint64(message.nextSequenceRecv);
    }
    if (message.signer !== "") {
      writer.uint32(42).string(message.signer);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgTimeout();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.packet = Packet.decode(reader, reader.uint32());
          break;
        case 2:
          message.proofUnreceived = reader.bytes();
          break;
        case 3:
          message.proofHeight = Height.decode(reader, reader.uint32());
          break;
        case 4:
          message.nextSequenceRecv = reader.uint64();
          break;
        case 5:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgTimeout();
    message.packet = object.packet !== void 0 && object.packet !== null ? Packet.fromPartial(object.packet) : void 0;
    message.proofUnreceived = object.proofUnreceived ?? new Uint8Array();
    message.proofHeight = object.proofHeight !== void 0 && object.proofHeight !== null ? Height.fromPartial(object.proofHeight) : void 0;
    message.nextSequenceRecv = object.nextSequenceRecv !== void 0 && object.nextSequenceRecv !== null ? BigInt(object.nextSequenceRecv.toString()) : BigInt(0);
    message.signer = object.signer ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgTimeout();
    if (object.packet !== void 0 && object.packet !== null) {
      message.packet = Packet.fromAmino(object.packet);
    }
    if (object.proof_unreceived !== void 0 && object.proof_unreceived !== null) {
      message.proofUnreceived = bytesFromBase64(object.proof_unreceived);
    }
    if (object.proof_height !== void 0 && object.proof_height !== null) {
      message.proofHeight = Height.fromAmino(object.proof_height);
    }
    if (object.next_sequence_recv !== void 0 && object.next_sequence_recv !== null) {
      message.nextSequenceRecv = BigInt(object.next_sequence_recv);
    }
    if (object.signer !== void 0 && object.signer !== null) {
      message.signer = object.signer;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.packet = message.packet ? Packet.toAmino(message.packet) : void 0;
    obj.proof_unreceived = message.proofUnreceived ? base64FromBytes(message.proofUnreceived) : void 0;
    obj.proof_height = message.proofHeight ? Height.toAmino(message.proofHeight) : {};
    obj.next_sequence_recv = message.nextSequenceRecv !== BigInt(0) ? message.nextSequenceRecv?.toString() : void 0;
    obj.signer = message.signer === "" ? void 0 : message.signer;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgTimeout.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgTimeout",
      value: MsgTimeout.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgTimeout.decode(message.value);
  },
  toProto(message) {
    return MsgTimeout.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.core.channel.v1.MsgTimeout",
      value: MsgTimeout.encode(message).finish()
    };
  }
};
function createBaseMsgTimeoutResponse() {
  return {
    result: 0
  };
}
const MsgTimeoutResponse = {
  typeUrl: "/ibc.core.channel.v1.MsgTimeoutResponse",
  encode(message, writer = BinaryWriter.create()) {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgTimeoutResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.result = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgTimeoutResponse();
    message.result = object.result ?? 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgTimeoutResponse();
    if (object.result !== void 0 && object.result !== null) {
      message.result = object.result;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.result = message.result === 0 ? void 0 : message.result;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgTimeoutResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgTimeoutResponse",
      value: MsgTimeoutResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgTimeoutResponse.decode(message.value);
  },
  toProto(message) {
    return MsgTimeoutResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.core.channel.v1.MsgTimeoutResponse",
      value: MsgTimeoutResponse.encode(message).finish()
    };
  }
};
function createBaseMsgTimeoutOnClose() {
  return {
    packet: Packet.fromPartial({}),
    proofUnreceived: new Uint8Array(),
    proofClose: new Uint8Array(),
    proofHeight: Height.fromPartial({}),
    nextSequenceRecv: BigInt(0),
    signer: "",
    counterpartyUpgradeSequence: BigInt(0)
  };
}
const MsgTimeoutOnClose = {
  typeUrl: "/ibc.core.channel.v1.MsgTimeoutOnClose",
  encode(message, writer = BinaryWriter.create()) {
    if (message.packet !== void 0) {
      Packet.encode(message.packet, writer.uint32(10).fork()).ldelim();
    }
    if (message.proofUnreceived.length !== 0) {
      writer.uint32(18).bytes(message.proofUnreceived);
    }
    if (message.proofClose.length !== 0) {
      writer.uint32(26).bytes(message.proofClose);
    }
    if (message.proofHeight !== void 0) {
      Height.encode(message.proofHeight, writer.uint32(34).fork()).ldelim();
    }
    if (message.nextSequenceRecv !== BigInt(0)) {
      writer.uint32(40).uint64(message.nextSequenceRecv);
    }
    if (message.signer !== "") {
      writer.uint32(50).string(message.signer);
    }
    if (message.counterpartyUpgradeSequence !== BigInt(0)) {
      writer.uint32(56).uint64(message.counterpartyUpgradeSequence);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgTimeoutOnClose();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.packet = Packet.decode(reader, reader.uint32());
          break;
        case 2:
          message.proofUnreceived = reader.bytes();
          break;
        case 3:
          message.proofClose = reader.bytes();
          break;
        case 4:
          message.proofHeight = Height.decode(reader, reader.uint32());
          break;
        case 5:
          message.nextSequenceRecv = reader.uint64();
          break;
        case 6:
          message.signer = reader.string();
          break;
        case 7:
          message.counterpartyUpgradeSequence = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgTimeoutOnClose();
    message.packet = object.packet !== void 0 && object.packet !== null ? Packet.fromPartial(object.packet) : void 0;
    message.proofUnreceived = object.proofUnreceived ?? new Uint8Array();
    message.proofClose = object.proofClose ?? new Uint8Array();
    message.proofHeight = object.proofHeight !== void 0 && object.proofHeight !== null ? Height.fromPartial(object.proofHeight) : void 0;
    message.nextSequenceRecv = object.nextSequenceRecv !== void 0 && object.nextSequenceRecv !== null ? BigInt(object.nextSequenceRecv.toString()) : BigInt(0);
    message.signer = object.signer ?? "";
    message.counterpartyUpgradeSequence = object.counterpartyUpgradeSequence !== void 0 && object.counterpartyUpgradeSequence !== null ? BigInt(object.counterpartyUpgradeSequence.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgTimeoutOnClose();
    if (object.packet !== void 0 && object.packet !== null) {
      message.packet = Packet.fromAmino(object.packet);
    }
    if (object.proof_unreceived !== void 0 && object.proof_unreceived !== null) {
      message.proofUnreceived = bytesFromBase64(object.proof_unreceived);
    }
    if (object.proof_close !== void 0 && object.proof_close !== null) {
      message.proofClose = bytesFromBase64(object.proof_close);
    }
    if (object.proof_height !== void 0 && object.proof_height !== null) {
      message.proofHeight = Height.fromAmino(object.proof_height);
    }
    if (object.next_sequence_recv !== void 0 && object.next_sequence_recv !== null) {
      message.nextSequenceRecv = BigInt(object.next_sequence_recv);
    }
    if (object.signer !== void 0 && object.signer !== null) {
      message.signer = object.signer;
    }
    if (object.counterparty_upgrade_sequence !== void 0 && object.counterparty_upgrade_sequence !== null) {
      message.counterpartyUpgradeSequence = BigInt(object.counterparty_upgrade_sequence);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.packet = message.packet ? Packet.toAmino(message.packet) : void 0;
    obj.proof_unreceived = message.proofUnreceived ? base64FromBytes(message.proofUnreceived) : void 0;
    obj.proof_close = message.proofClose ? base64FromBytes(message.proofClose) : void 0;
    obj.proof_height = message.proofHeight ? Height.toAmino(message.proofHeight) : {};
    obj.next_sequence_recv = message.nextSequenceRecv !== BigInt(0) ? message.nextSequenceRecv?.toString() : void 0;
    obj.signer = message.signer === "" ? void 0 : message.signer;
    obj.counterparty_upgrade_sequence = message.counterpartyUpgradeSequence !== BigInt(0) ? message.counterpartyUpgradeSequence?.toString() : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgTimeoutOnClose.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgTimeoutOnClose",
      value: MsgTimeoutOnClose.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgTimeoutOnClose.decode(message.value);
  },
  toProto(message) {
    return MsgTimeoutOnClose.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.core.channel.v1.MsgTimeoutOnClose",
      value: MsgTimeoutOnClose.encode(message).finish()
    };
  }
};
function createBaseMsgTimeoutOnCloseResponse() {
  return {
    result: 0
  };
}
const MsgTimeoutOnCloseResponse = {
  typeUrl: "/ibc.core.channel.v1.MsgTimeoutOnCloseResponse",
  encode(message, writer = BinaryWriter.create()) {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgTimeoutOnCloseResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.result = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgTimeoutOnCloseResponse();
    message.result = object.result ?? 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgTimeoutOnCloseResponse();
    if (object.result !== void 0 && object.result !== null) {
      message.result = object.result;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.result = message.result === 0 ? void 0 : message.result;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgTimeoutOnCloseResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgTimeoutOnCloseResponse",
      value: MsgTimeoutOnCloseResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgTimeoutOnCloseResponse.decode(message.value);
  },
  toProto(message) {
    return MsgTimeoutOnCloseResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.core.channel.v1.MsgTimeoutOnCloseResponse",
      value: MsgTimeoutOnCloseResponse.encode(message).finish()
    };
  }
};
function createBaseMsgAcknowledgement() {
  return {
    packet: Packet.fromPartial({}),
    acknowledgement: new Uint8Array(),
    proofAcked: new Uint8Array(),
    proofHeight: Height.fromPartial({}),
    signer: ""
  };
}
const MsgAcknowledgement = {
  typeUrl: "/ibc.core.channel.v1.MsgAcknowledgement",
  encode(message, writer = BinaryWriter.create()) {
    if (message.packet !== void 0) {
      Packet.encode(message.packet, writer.uint32(10).fork()).ldelim();
    }
    if (message.acknowledgement.length !== 0) {
      writer.uint32(18).bytes(message.acknowledgement);
    }
    if (message.proofAcked.length !== 0) {
      writer.uint32(26).bytes(message.proofAcked);
    }
    if (message.proofHeight !== void 0) {
      Height.encode(message.proofHeight, writer.uint32(34).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(42).string(message.signer);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgAcknowledgement();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.packet = Packet.decode(reader, reader.uint32());
          break;
        case 2:
          message.acknowledgement = reader.bytes();
          break;
        case 3:
          message.proofAcked = reader.bytes();
          break;
        case 4:
          message.proofHeight = Height.decode(reader, reader.uint32());
          break;
        case 5:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgAcknowledgement();
    message.packet = object.packet !== void 0 && object.packet !== null ? Packet.fromPartial(object.packet) : void 0;
    message.acknowledgement = object.acknowledgement ?? new Uint8Array();
    message.proofAcked = object.proofAcked ?? new Uint8Array();
    message.proofHeight = object.proofHeight !== void 0 && object.proofHeight !== null ? Height.fromPartial(object.proofHeight) : void 0;
    message.signer = object.signer ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgAcknowledgement();
    if (object.packet !== void 0 && object.packet !== null) {
      message.packet = Packet.fromAmino(object.packet);
    }
    if (object.acknowledgement !== void 0 && object.acknowledgement !== null) {
      message.acknowledgement = bytesFromBase64(object.acknowledgement);
    }
    if (object.proof_acked !== void 0 && object.proof_acked !== null) {
      message.proofAcked = bytesFromBase64(object.proof_acked);
    }
    if (object.proof_height !== void 0 && object.proof_height !== null) {
      message.proofHeight = Height.fromAmino(object.proof_height);
    }
    if (object.signer !== void 0 && object.signer !== null) {
      message.signer = object.signer;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.packet = message.packet ? Packet.toAmino(message.packet) : void 0;
    obj.acknowledgement = message.acknowledgement ? base64FromBytes(message.acknowledgement) : void 0;
    obj.proof_acked = message.proofAcked ? base64FromBytes(message.proofAcked) : void 0;
    obj.proof_height = message.proofHeight ? Height.toAmino(message.proofHeight) : {};
    obj.signer = message.signer === "" ? void 0 : message.signer;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgAcknowledgement.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgAcknowledgement",
      value: MsgAcknowledgement.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgAcknowledgement.decode(message.value);
  },
  toProto(message) {
    return MsgAcknowledgement.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.core.channel.v1.MsgAcknowledgement",
      value: MsgAcknowledgement.encode(message).finish()
    };
  }
};
function createBaseMsgAcknowledgementResponse() {
  return {
    result: 0
  };
}
const MsgAcknowledgementResponse = {
  typeUrl: "/ibc.core.channel.v1.MsgAcknowledgementResponse",
  encode(message, writer = BinaryWriter.create()) {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgAcknowledgementResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.result = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgAcknowledgementResponse();
    message.result = object.result ?? 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgAcknowledgementResponse();
    if (object.result !== void 0 && object.result !== null) {
      message.result = object.result;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.result = message.result === 0 ? void 0 : message.result;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgAcknowledgementResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgAcknowledgementResponse",
      value: MsgAcknowledgementResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgAcknowledgementResponse.decode(message.value);
  },
  toProto(message) {
    return MsgAcknowledgementResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.core.channel.v1.MsgAcknowledgementResponse",
      value: MsgAcknowledgementResponse.encode(message).finish()
    };
  }
};
function createBaseMsgChannelUpgradeInit() {
  return {
    portId: "",
    channelId: "",
    fields: UpgradeFields.fromPartial({}),
    signer: ""
  };
}
const MsgChannelUpgradeInit = {
  typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeInit",
  encode(message, writer = BinaryWriter.create()) {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    if (message.fields !== void 0) {
      UpgradeFields.encode(message.fields, writer.uint32(26).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(34).string(message.signer);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgChannelUpgradeInit();
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
          message.fields = UpgradeFields.decode(reader, reader.uint32());
          break;
        case 4:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgChannelUpgradeInit();
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    message.fields = object.fields !== void 0 && object.fields !== null ? UpgradeFields.fromPartial(object.fields) : void 0;
    message.signer = object.signer ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgChannelUpgradeInit();
    if (object.port_id !== void 0 && object.port_id !== null) {
      message.portId = object.port_id;
    }
    if (object.channel_id !== void 0 && object.channel_id !== null) {
      message.channelId = object.channel_id;
    }
    if (object.fields !== void 0 && object.fields !== null) {
      message.fields = UpgradeFields.fromAmino(object.fields);
    }
    if (object.signer !== void 0 && object.signer !== null) {
      message.signer = object.signer;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.port_id = message.portId === "" ? void 0 : message.portId;
    obj.channel_id = message.channelId === "" ? void 0 : message.channelId;
    obj.fields = message.fields ? UpgradeFields.toAmino(message.fields) : void 0;
    obj.signer = message.signer === "" ? void 0 : message.signer;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgChannelUpgradeInit.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgChannelUpgradeInit",
      value: MsgChannelUpgradeInit.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgChannelUpgradeInit.decode(message.value);
  },
  toProto(message) {
    return MsgChannelUpgradeInit.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeInit",
      value: MsgChannelUpgradeInit.encode(message).finish()
    };
  }
};
function createBaseMsgChannelUpgradeInitResponse() {
  return {
    upgrade: Upgrade.fromPartial({}),
    upgradeSequence: BigInt(0)
  };
}
const MsgChannelUpgradeInitResponse = {
  typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeInitResponse",
  encode(message, writer = BinaryWriter.create()) {
    if (message.upgrade !== void 0) {
      Upgrade.encode(message.upgrade, writer.uint32(10).fork()).ldelim();
    }
    if (message.upgradeSequence !== BigInt(0)) {
      writer.uint32(16).uint64(message.upgradeSequence);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgChannelUpgradeInitResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.upgrade = Upgrade.decode(reader, reader.uint32());
          break;
        case 2:
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
    const message = createBaseMsgChannelUpgradeInitResponse();
    message.upgrade = object.upgrade !== void 0 && object.upgrade !== null ? Upgrade.fromPartial(object.upgrade) : void 0;
    message.upgradeSequence = object.upgradeSequence !== void 0 && object.upgradeSequence !== null ? BigInt(object.upgradeSequence.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgChannelUpgradeInitResponse();
    if (object.upgrade !== void 0 && object.upgrade !== null) {
      message.upgrade = Upgrade.fromAmino(object.upgrade);
    }
    if (object.upgrade_sequence !== void 0 && object.upgrade_sequence !== null) {
      message.upgradeSequence = BigInt(object.upgrade_sequence);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.upgrade = message.upgrade ? Upgrade.toAmino(message.upgrade) : void 0;
    obj.upgrade_sequence = message.upgradeSequence !== BigInt(0) ? message.upgradeSequence?.toString() : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgChannelUpgradeInitResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgChannelUpgradeInitResponse",
      value: MsgChannelUpgradeInitResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgChannelUpgradeInitResponse.decode(message.value);
  },
  toProto(message) {
    return MsgChannelUpgradeInitResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeInitResponse",
      value: MsgChannelUpgradeInitResponse.encode(message).finish()
    };
  }
};
function createBaseMsgChannelUpgradeTry() {
  return {
    portId: "",
    channelId: "",
    proposedUpgradeConnectionHops: [],
    counterpartyUpgradeFields: UpgradeFields.fromPartial({}),
    counterpartyUpgradeSequence: BigInt(0),
    proofChannel: new Uint8Array(),
    proofUpgrade: new Uint8Array(),
    proofHeight: Height.fromPartial({}),
    signer: ""
  };
}
const MsgChannelUpgradeTry = {
  typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeTry",
  encode(message, writer = BinaryWriter.create()) {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    for (const v of message.proposedUpgradeConnectionHops) {
      writer.uint32(26).string(v);
    }
    if (message.counterpartyUpgradeFields !== void 0) {
      UpgradeFields.encode(message.counterpartyUpgradeFields, writer.uint32(34).fork()).ldelim();
    }
    if (message.counterpartyUpgradeSequence !== BigInt(0)) {
      writer.uint32(40).uint64(message.counterpartyUpgradeSequence);
    }
    if (message.proofChannel.length !== 0) {
      writer.uint32(50).bytes(message.proofChannel);
    }
    if (message.proofUpgrade.length !== 0) {
      writer.uint32(58).bytes(message.proofUpgrade);
    }
    if (message.proofHeight !== void 0) {
      Height.encode(message.proofHeight, writer.uint32(66).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(74).string(message.signer);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgChannelUpgradeTry();
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
          message.proposedUpgradeConnectionHops.push(reader.string());
          break;
        case 4:
          message.counterpartyUpgradeFields = UpgradeFields.decode(reader, reader.uint32());
          break;
        case 5:
          message.counterpartyUpgradeSequence = reader.uint64();
          break;
        case 6:
          message.proofChannel = reader.bytes();
          break;
        case 7:
          message.proofUpgrade = reader.bytes();
          break;
        case 8:
          message.proofHeight = Height.decode(reader, reader.uint32());
          break;
        case 9:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgChannelUpgradeTry();
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    message.proposedUpgradeConnectionHops = object.proposedUpgradeConnectionHops?.map((e) => e) || [];
    message.counterpartyUpgradeFields = object.counterpartyUpgradeFields !== void 0 && object.counterpartyUpgradeFields !== null ? UpgradeFields.fromPartial(object.counterpartyUpgradeFields) : void 0;
    message.counterpartyUpgradeSequence = object.counterpartyUpgradeSequence !== void 0 && object.counterpartyUpgradeSequence !== null ? BigInt(object.counterpartyUpgradeSequence.toString()) : BigInt(0);
    message.proofChannel = object.proofChannel ?? new Uint8Array();
    message.proofUpgrade = object.proofUpgrade ?? new Uint8Array();
    message.proofHeight = object.proofHeight !== void 0 && object.proofHeight !== null ? Height.fromPartial(object.proofHeight) : void 0;
    message.signer = object.signer ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgChannelUpgradeTry();
    if (object.port_id !== void 0 && object.port_id !== null) {
      message.portId = object.port_id;
    }
    if (object.channel_id !== void 0 && object.channel_id !== null) {
      message.channelId = object.channel_id;
    }
    message.proposedUpgradeConnectionHops = object.proposed_upgrade_connection_hops?.map((e) => e) || [];
    if (object.counterparty_upgrade_fields !== void 0 && object.counterparty_upgrade_fields !== null) {
      message.counterpartyUpgradeFields = UpgradeFields.fromAmino(object.counterparty_upgrade_fields);
    }
    if (object.counterparty_upgrade_sequence !== void 0 && object.counterparty_upgrade_sequence !== null) {
      message.counterpartyUpgradeSequence = BigInt(object.counterparty_upgrade_sequence);
    }
    if (object.proof_channel !== void 0 && object.proof_channel !== null) {
      message.proofChannel = bytesFromBase64(object.proof_channel);
    }
    if (object.proof_upgrade !== void 0 && object.proof_upgrade !== null) {
      message.proofUpgrade = bytesFromBase64(object.proof_upgrade);
    }
    if (object.proof_height !== void 0 && object.proof_height !== null) {
      message.proofHeight = Height.fromAmino(object.proof_height);
    }
    if (object.signer !== void 0 && object.signer !== null) {
      message.signer = object.signer;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.port_id = message.portId === "" ? void 0 : message.portId;
    obj.channel_id = message.channelId === "" ? void 0 : message.channelId;
    if (message.proposedUpgradeConnectionHops) {
      obj.proposed_upgrade_connection_hops = message.proposedUpgradeConnectionHops.map((e) => e);
    } else {
      obj.proposed_upgrade_connection_hops = message.proposedUpgradeConnectionHops;
    }
    obj.counterparty_upgrade_fields = message.counterpartyUpgradeFields ? UpgradeFields.toAmino(message.counterpartyUpgradeFields) : void 0;
    obj.counterparty_upgrade_sequence = message.counterpartyUpgradeSequence !== BigInt(0) ? message.counterpartyUpgradeSequence?.toString() : void 0;
    obj.proof_channel = message.proofChannel ? base64FromBytes(message.proofChannel) : void 0;
    obj.proof_upgrade = message.proofUpgrade ? base64FromBytes(message.proofUpgrade) : void 0;
    obj.proof_height = message.proofHeight ? Height.toAmino(message.proofHeight) : {};
    obj.signer = message.signer === "" ? void 0 : message.signer;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgChannelUpgradeTry.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgChannelUpgradeTry",
      value: MsgChannelUpgradeTry.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgChannelUpgradeTry.decode(message.value);
  },
  toProto(message) {
    return MsgChannelUpgradeTry.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeTry",
      value: MsgChannelUpgradeTry.encode(message).finish()
    };
  }
};
function createBaseMsgChannelUpgradeTryResponse() {
  return {
    upgrade: Upgrade.fromPartial({}),
    upgradeSequence: BigInt(0),
    result: 0
  };
}
const MsgChannelUpgradeTryResponse = {
  typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeTryResponse",
  encode(message, writer = BinaryWriter.create()) {
    if (message.upgrade !== void 0) {
      Upgrade.encode(message.upgrade, writer.uint32(10).fork()).ldelim();
    }
    if (message.upgradeSequence !== BigInt(0)) {
      writer.uint32(16).uint64(message.upgradeSequence);
    }
    if (message.result !== 0) {
      writer.uint32(24).int32(message.result);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgChannelUpgradeTryResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.upgrade = Upgrade.decode(reader, reader.uint32());
          break;
        case 2:
          message.upgradeSequence = reader.uint64();
          break;
        case 3:
          message.result = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgChannelUpgradeTryResponse();
    message.upgrade = object.upgrade !== void 0 && object.upgrade !== null ? Upgrade.fromPartial(object.upgrade) : void 0;
    message.upgradeSequence = object.upgradeSequence !== void 0 && object.upgradeSequence !== null ? BigInt(object.upgradeSequence.toString()) : BigInt(0);
    message.result = object.result ?? 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgChannelUpgradeTryResponse();
    if (object.upgrade !== void 0 && object.upgrade !== null) {
      message.upgrade = Upgrade.fromAmino(object.upgrade);
    }
    if (object.upgrade_sequence !== void 0 && object.upgrade_sequence !== null) {
      message.upgradeSequence = BigInt(object.upgrade_sequence);
    }
    if (object.result !== void 0 && object.result !== null) {
      message.result = object.result;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.upgrade = message.upgrade ? Upgrade.toAmino(message.upgrade) : void 0;
    obj.upgrade_sequence = message.upgradeSequence !== BigInt(0) ? message.upgradeSequence?.toString() : void 0;
    obj.result = message.result === 0 ? void 0 : message.result;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgChannelUpgradeTryResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgChannelUpgradeTryResponse",
      value: MsgChannelUpgradeTryResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgChannelUpgradeTryResponse.decode(message.value);
  },
  toProto(message) {
    return MsgChannelUpgradeTryResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeTryResponse",
      value: MsgChannelUpgradeTryResponse.encode(message).finish()
    };
  }
};
function createBaseMsgChannelUpgradeAck() {
  return {
    portId: "",
    channelId: "",
    counterpartyUpgrade: Upgrade.fromPartial({}),
    proofChannel: new Uint8Array(),
    proofUpgrade: new Uint8Array(),
    proofHeight: Height.fromPartial({}),
    signer: ""
  };
}
const MsgChannelUpgradeAck = {
  typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeAck",
  encode(message, writer = BinaryWriter.create()) {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    if (message.counterpartyUpgrade !== void 0) {
      Upgrade.encode(message.counterpartyUpgrade, writer.uint32(26).fork()).ldelim();
    }
    if (message.proofChannel.length !== 0) {
      writer.uint32(34).bytes(message.proofChannel);
    }
    if (message.proofUpgrade.length !== 0) {
      writer.uint32(42).bytes(message.proofUpgrade);
    }
    if (message.proofHeight !== void 0) {
      Height.encode(message.proofHeight, writer.uint32(50).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(58).string(message.signer);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgChannelUpgradeAck();
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
          message.counterpartyUpgrade = Upgrade.decode(reader, reader.uint32());
          break;
        case 4:
          message.proofChannel = reader.bytes();
          break;
        case 5:
          message.proofUpgrade = reader.bytes();
          break;
        case 6:
          message.proofHeight = Height.decode(reader, reader.uint32());
          break;
        case 7:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgChannelUpgradeAck();
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    message.counterpartyUpgrade = object.counterpartyUpgrade !== void 0 && object.counterpartyUpgrade !== null ? Upgrade.fromPartial(object.counterpartyUpgrade) : void 0;
    message.proofChannel = object.proofChannel ?? new Uint8Array();
    message.proofUpgrade = object.proofUpgrade ?? new Uint8Array();
    message.proofHeight = object.proofHeight !== void 0 && object.proofHeight !== null ? Height.fromPartial(object.proofHeight) : void 0;
    message.signer = object.signer ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgChannelUpgradeAck();
    if (object.port_id !== void 0 && object.port_id !== null) {
      message.portId = object.port_id;
    }
    if (object.channel_id !== void 0 && object.channel_id !== null) {
      message.channelId = object.channel_id;
    }
    if (object.counterparty_upgrade !== void 0 && object.counterparty_upgrade !== null) {
      message.counterpartyUpgrade = Upgrade.fromAmino(object.counterparty_upgrade);
    }
    if (object.proof_channel !== void 0 && object.proof_channel !== null) {
      message.proofChannel = bytesFromBase64(object.proof_channel);
    }
    if (object.proof_upgrade !== void 0 && object.proof_upgrade !== null) {
      message.proofUpgrade = bytesFromBase64(object.proof_upgrade);
    }
    if (object.proof_height !== void 0 && object.proof_height !== null) {
      message.proofHeight = Height.fromAmino(object.proof_height);
    }
    if (object.signer !== void 0 && object.signer !== null) {
      message.signer = object.signer;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.port_id = message.portId === "" ? void 0 : message.portId;
    obj.channel_id = message.channelId === "" ? void 0 : message.channelId;
    obj.counterparty_upgrade = message.counterpartyUpgrade ? Upgrade.toAmino(message.counterpartyUpgrade) : void 0;
    obj.proof_channel = message.proofChannel ? base64FromBytes(message.proofChannel) : void 0;
    obj.proof_upgrade = message.proofUpgrade ? base64FromBytes(message.proofUpgrade) : void 0;
    obj.proof_height = message.proofHeight ? Height.toAmino(message.proofHeight) : {};
    obj.signer = message.signer === "" ? void 0 : message.signer;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgChannelUpgradeAck.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgChannelUpgradeAck",
      value: MsgChannelUpgradeAck.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgChannelUpgradeAck.decode(message.value);
  },
  toProto(message) {
    return MsgChannelUpgradeAck.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeAck",
      value: MsgChannelUpgradeAck.encode(message).finish()
    };
  }
};
function createBaseMsgChannelUpgradeAckResponse() {
  return {
    result: 0
  };
}
const MsgChannelUpgradeAckResponse = {
  typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeAckResponse",
  encode(message, writer = BinaryWriter.create()) {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgChannelUpgradeAckResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.result = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgChannelUpgradeAckResponse();
    message.result = object.result ?? 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgChannelUpgradeAckResponse();
    if (object.result !== void 0 && object.result !== null) {
      message.result = object.result;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.result = message.result === 0 ? void 0 : message.result;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgChannelUpgradeAckResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgChannelUpgradeAckResponse",
      value: MsgChannelUpgradeAckResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgChannelUpgradeAckResponse.decode(message.value);
  },
  toProto(message) {
    return MsgChannelUpgradeAckResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeAckResponse",
      value: MsgChannelUpgradeAckResponse.encode(message).finish()
    };
  }
};
function createBaseMsgChannelUpgradeConfirm() {
  return {
    portId: "",
    channelId: "",
    counterpartyChannelState: 0,
    counterpartyUpgrade: Upgrade.fromPartial({}),
    proofChannel: new Uint8Array(),
    proofUpgrade: new Uint8Array(),
    proofHeight: Height.fromPartial({}),
    signer: ""
  };
}
const MsgChannelUpgradeConfirm = {
  typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeConfirm",
  encode(message, writer = BinaryWriter.create()) {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    if (message.counterpartyChannelState !== 0) {
      writer.uint32(24).int32(message.counterpartyChannelState);
    }
    if (message.counterpartyUpgrade !== void 0) {
      Upgrade.encode(message.counterpartyUpgrade, writer.uint32(34).fork()).ldelim();
    }
    if (message.proofChannel.length !== 0) {
      writer.uint32(42).bytes(message.proofChannel);
    }
    if (message.proofUpgrade.length !== 0) {
      writer.uint32(50).bytes(message.proofUpgrade);
    }
    if (message.proofHeight !== void 0) {
      Height.encode(message.proofHeight, writer.uint32(58).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(66).string(message.signer);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgChannelUpgradeConfirm();
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
          message.counterpartyChannelState = reader.int32();
          break;
        case 4:
          message.counterpartyUpgrade = Upgrade.decode(reader, reader.uint32());
          break;
        case 5:
          message.proofChannel = reader.bytes();
          break;
        case 6:
          message.proofUpgrade = reader.bytes();
          break;
        case 7:
          message.proofHeight = Height.decode(reader, reader.uint32());
          break;
        case 8:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgChannelUpgradeConfirm();
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    message.counterpartyChannelState = object.counterpartyChannelState ?? 0;
    message.counterpartyUpgrade = object.counterpartyUpgrade !== void 0 && object.counterpartyUpgrade !== null ? Upgrade.fromPartial(object.counterpartyUpgrade) : void 0;
    message.proofChannel = object.proofChannel ?? new Uint8Array();
    message.proofUpgrade = object.proofUpgrade ?? new Uint8Array();
    message.proofHeight = object.proofHeight !== void 0 && object.proofHeight !== null ? Height.fromPartial(object.proofHeight) : void 0;
    message.signer = object.signer ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgChannelUpgradeConfirm();
    if (object.port_id !== void 0 && object.port_id !== null) {
      message.portId = object.port_id;
    }
    if (object.channel_id !== void 0 && object.channel_id !== null) {
      message.channelId = object.channel_id;
    }
    if (object.counterparty_channel_state !== void 0 && object.counterparty_channel_state !== null) {
      message.counterpartyChannelState = object.counterparty_channel_state;
    }
    if (object.counterparty_upgrade !== void 0 && object.counterparty_upgrade !== null) {
      message.counterpartyUpgrade = Upgrade.fromAmino(object.counterparty_upgrade);
    }
    if (object.proof_channel !== void 0 && object.proof_channel !== null) {
      message.proofChannel = bytesFromBase64(object.proof_channel);
    }
    if (object.proof_upgrade !== void 0 && object.proof_upgrade !== null) {
      message.proofUpgrade = bytesFromBase64(object.proof_upgrade);
    }
    if (object.proof_height !== void 0 && object.proof_height !== null) {
      message.proofHeight = Height.fromAmino(object.proof_height);
    }
    if (object.signer !== void 0 && object.signer !== null) {
      message.signer = object.signer;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.port_id = message.portId === "" ? void 0 : message.portId;
    obj.channel_id = message.channelId === "" ? void 0 : message.channelId;
    obj.counterparty_channel_state = message.counterpartyChannelState === 0 ? void 0 : message.counterpartyChannelState;
    obj.counterparty_upgrade = message.counterpartyUpgrade ? Upgrade.toAmino(message.counterpartyUpgrade) : void 0;
    obj.proof_channel = message.proofChannel ? base64FromBytes(message.proofChannel) : void 0;
    obj.proof_upgrade = message.proofUpgrade ? base64FromBytes(message.proofUpgrade) : void 0;
    obj.proof_height = message.proofHeight ? Height.toAmino(message.proofHeight) : {};
    obj.signer = message.signer === "" ? void 0 : message.signer;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgChannelUpgradeConfirm.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgChannelUpgradeConfirm",
      value: MsgChannelUpgradeConfirm.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgChannelUpgradeConfirm.decode(message.value);
  },
  toProto(message) {
    return MsgChannelUpgradeConfirm.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeConfirm",
      value: MsgChannelUpgradeConfirm.encode(message).finish()
    };
  }
};
function createBaseMsgChannelUpgradeConfirmResponse() {
  return {
    result: 0
  };
}
const MsgChannelUpgradeConfirmResponse = {
  typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeConfirmResponse",
  encode(message, writer = BinaryWriter.create()) {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgChannelUpgradeConfirmResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.result = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgChannelUpgradeConfirmResponse();
    message.result = object.result ?? 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgChannelUpgradeConfirmResponse();
    if (object.result !== void 0 && object.result !== null) {
      message.result = object.result;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.result = message.result === 0 ? void 0 : message.result;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgChannelUpgradeConfirmResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgChannelUpgradeConfirmResponse",
      value: MsgChannelUpgradeConfirmResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgChannelUpgradeConfirmResponse.decode(message.value);
  },
  toProto(message) {
    return MsgChannelUpgradeConfirmResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeConfirmResponse",
      value: MsgChannelUpgradeConfirmResponse.encode(message).finish()
    };
  }
};
function createBaseMsgChannelUpgradeOpen() {
  return {
    portId: "",
    channelId: "",
    counterpartyChannelState: 0,
    counterpartyUpgradeSequence: BigInt(0),
    proofChannel: new Uint8Array(),
    proofHeight: Height.fromPartial({}),
    signer: ""
  };
}
const MsgChannelUpgradeOpen = {
  typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeOpen",
  encode(message, writer = BinaryWriter.create()) {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    if (message.counterpartyChannelState !== 0) {
      writer.uint32(24).int32(message.counterpartyChannelState);
    }
    if (message.counterpartyUpgradeSequence !== BigInt(0)) {
      writer.uint32(32).uint64(message.counterpartyUpgradeSequence);
    }
    if (message.proofChannel.length !== 0) {
      writer.uint32(42).bytes(message.proofChannel);
    }
    if (message.proofHeight !== void 0) {
      Height.encode(message.proofHeight, writer.uint32(50).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(58).string(message.signer);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgChannelUpgradeOpen();
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
          message.counterpartyChannelState = reader.int32();
          break;
        case 4:
          message.counterpartyUpgradeSequence = reader.uint64();
          break;
        case 5:
          message.proofChannel = reader.bytes();
          break;
        case 6:
          message.proofHeight = Height.decode(reader, reader.uint32());
          break;
        case 7:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgChannelUpgradeOpen();
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    message.counterpartyChannelState = object.counterpartyChannelState ?? 0;
    message.counterpartyUpgradeSequence = object.counterpartyUpgradeSequence !== void 0 && object.counterpartyUpgradeSequence !== null ? BigInt(object.counterpartyUpgradeSequence.toString()) : BigInt(0);
    message.proofChannel = object.proofChannel ?? new Uint8Array();
    message.proofHeight = object.proofHeight !== void 0 && object.proofHeight !== null ? Height.fromPartial(object.proofHeight) : void 0;
    message.signer = object.signer ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgChannelUpgradeOpen();
    if (object.port_id !== void 0 && object.port_id !== null) {
      message.portId = object.port_id;
    }
    if (object.channel_id !== void 0 && object.channel_id !== null) {
      message.channelId = object.channel_id;
    }
    if (object.counterparty_channel_state !== void 0 && object.counterparty_channel_state !== null) {
      message.counterpartyChannelState = object.counterparty_channel_state;
    }
    if (object.counterparty_upgrade_sequence !== void 0 && object.counterparty_upgrade_sequence !== null) {
      message.counterpartyUpgradeSequence = BigInt(object.counterparty_upgrade_sequence);
    }
    if (object.proof_channel !== void 0 && object.proof_channel !== null) {
      message.proofChannel = bytesFromBase64(object.proof_channel);
    }
    if (object.proof_height !== void 0 && object.proof_height !== null) {
      message.proofHeight = Height.fromAmino(object.proof_height);
    }
    if (object.signer !== void 0 && object.signer !== null) {
      message.signer = object.signer;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.port_id = message.portId === "" ? void 0 : message.portId;
    obj.channel_id = message.channelId === "" ? void 0 : message.channelId;
    obj.counterparty_channel_state = message.counterpartyChannelState === 0 ? void 0 : message.counterpartyChannelState;
    obj.counterparty_upgrade_sequence = message.counterpartyUpgradeSequence !== BigInt(0) ? message.counterpartyUpgradeSequence?.toString() : void 0;
    obj.proof_channel = message.proofChannel ? base64FromBytes(message.proofChannel) : void 0;
    obj.proof_height = message.proofHeight ? Height.toAmino(message.proofHeight) : {};
    obj.signer = message.signer === "" ? void 0 : message.signer;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgChannelUpgradeOpen.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgChannelUpgradeOpen",
      value: MsgChannelUpgradeOpen.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgChannelUpgradeOpen.decode(message.value);
  },
  toProto(message) {
    return MsgChannelUpgradeOpen.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeOpen",
      value: MsgChannelUpgradeOpen.encode(message).finish()
    };
  }
};
function createBaseMsgChannelUpgradeOpenResponse() {
  return {};
}
const MsgChannelUpgradeOpenResponse = {
  typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeOpenResponse",
  encode(_, writer = BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgChannelUpgradeOpenResponse();
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
    const message = createBaseMsgChannelUpgradeOpenResponse();
    return message;
  },
  fromAmino(_) {
    const message = createBaseMsgChannelUpgradeOpenResponse();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return MsgChannelUpgradeOpenResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgChannelUpgradeOpenResponse",
      value: MsgChannelUpgradeOpenResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgChannelUpgradeOpenResponse.decode(message.value);
  },
  toProto(message) {
    return MsgChannelUpgradeOpenResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeOpenResponse",
      value: MsgChannelUpgradeOpenResponse.encode(message).finish()
    };
  }
};
function createBaseMsgChannelUpgradeTimeout() {
  return {
    portId: "",
    channelId: "",
    counterpartyChannel: Channel.fromPartial({}),
    proofChannel: new Uint8Array(),
    proofHeight: Height.fromPartial({}),
    signer: ""
  };
}
const MsgChannelUpgradeTimeout = {
  typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeTimeout",
  encode(message, writer = BinaryWriter.create()) {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    if (message.counterpartyChannel !== void 0) {
      Channel.encode(message.counterpartyChannel, writer.uint32(26).fork()).ldelim();
    }
    if (message.proofChannel.length !== 0) {
      writer.uint32(34).bytes(message.proofChannel);
    }
    if (message.proofHeight !== void 0) {
      Height.encode(message.proofHeight, writer.uint32(42).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(50).string(message.signer);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgChannelUpgradeTimeout();
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
          message.counterpartyChannel = Channel.decode(reader, reader.uint32());
          break;
        case 4:
          message.proofChannel = reader.bytes();
          break;
        case 5:
          message.proofHeight = Height.decode(reader, reader.uint32());
          break;
        case 6:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgChannelUpgradeTimeout();
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    message.counterpartyChannel = object.counterpartyChannel !== void 0 && object.counterpartyChannel !== null ? Channel.fromPartial(object.counterpartyChannel) : void 0;
    message.proofChannel = object.proofChannel ?? new Uint8Array();
    message.proofHeight = object.proofHeight !== void 0 && object.proofHeight !== null ? Height.fromPartial(object.proofHeight) : void 0;
    message.signer = object.signer ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgChannelUpgradeTimeout();
    if (object.port_id !== void 0 && object.port_id !== null) {
      message.portId = object.port_id;
    }
    if (object.channel_id !== void 0 && object.channel_id !== null) {
      message.channelId = object.channel_id;
    }
    if (object.counterparty_channel !== void 0 && object.counterparty_channel !== null) {
      message.counterpartyChannel = Channel.fromAmino(object.counterparty_channel);
    }
    if (object.proof_channel !== void 0 && object.proof_channel !== null) {
      message.proofChannel = bytesFromBase64(object.proof_channel);
    }
    if (object.proof_height !== void 0 && object.proof_height !== null) {
      message.proofHeight = Height.fromAmino(object.proof_height);
    }
    if (object.signer !== void 0 && object.signer !== null) {
      message.signer = object.signer;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.port_id = message.portId === "" ? void 0 : message.portId;
    obj.channel_id = message.channelId === "" ? void 0 : message.channelId;
    obj.counterparty_channel = message.counterpartyChannel ? Channel.toAmino(message.counterpartyChannel) : void 0;
    obj.proof_channel = message.proofChannel ? base64FromBytes(message.proofChannel) : void 0;
    obj.proof_height = message.proofHeight ? Height.toAmino(message.proofHeight) : {};
    obj.signer = message.signer === "" ? void 0 : message.signer;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgChannelUpgradeTimeout.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgChannelUpgradeTimeout",
      value: MsgChannelUpgradeTimeout.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgChannelUpgradeTimeout.decode(message.value);
  },
  toProto(message) {
    return MsgChannelUpgradeTimeout.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeTimeout",
      value: MsgChannelUpgradeTimeout.encode(message).finish()
    };
  }
};
function createBaseMsgChannelUpgradeTimeoutResponse() {
  return {};
}
const MsgChannelUpgradeTimeoutResponse = {
  typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeTimeoutResponse",
  encode(_, writer = BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgChannelUpgradeTimeoutResponse();
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
    const message = createBaseMsgChannelUpgradeTimeoutResponse();
    return message;
  },
  fromAmino(_) {
    const message = createBaseMsgChannelUpgradeTimeoutResponse();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return MsgChannelUpgradeTimeoutResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgChannelUpgradeTimeoutResponse",
      value: MsgChannelUpgradeTimeoutResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgChannelUpgradeTimeoutResponse.decode(message.value);
  },
  toProto(message) {
    return MsgChannelUpgradeTimeoutResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeTimeoutResponse",
      value: MsgChannelUpgradeTimeoutResponse.encode(message).finish()
    };
  }
};
function createBaseMsgChannelUpgradeCancel() {
  return {
    portId: "",
    channelId: "",
    errorReceipt: ErrorReceipt.fromPartial({}),
    proofErrorReceipt: new Uint8Array(),
    proofHeight: Height.fromPartial({}),
    signer: ""
  };
}
const MsgChannelUpgradeCancel = {
  typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeCancel",
  encode(message, writer = BinaryWriter.create()) {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    if (message.errorReceipt !== void 0) {
      ErrorReceipt.encode(message.errorReceipt, writer.uint32(26).fork()).ldelim();
    }
    if (message.proofErrorReceipt.length !== 0) {
      writer.uint32(34).bytes(message.proofErrorReceipt);
    }
    if (message.proofHeight !== void 0) {
      Height.encode(message.proofHeight, writer.uint32(42).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(50).string(message.signer);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgChannelUpgradeCancel();
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
          message.errorReceipt = ErrorReceipt.decode(reader, reader.uint32());
          break;
        case 4:
          message.proofErrorReceipt = reader.bytes();
          break;
        case 5:
          message.proofHeight = Height.decode(reader, reader.uint32());
          break;
        case 6:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgChannelUpgradeCancel();
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    message.errorReceipt = object.errorReceipt !== void 0 && object.errorReceipt !== null ? ErrorReceipt.fromPartial(object.errorReceipt) : void 0;
    message.proofErrorReceipt = object.proofErrorReceipt ?? new Uint8Array();
    message.proofHeight = object.proofHeight !== void 0 && object.proofHeight !== null ? Height.fromPartial(object.proofHeight) : void 0;
    message.signer = object.signer ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgChannelUpgradeCancel();
    if (object.port_id !== void 0 && object.port_id !== null) {
      message.portId = object.port_id;
    }
    if (object.channel_id !== void 0 && object.channel_id !== null) {
      message.channelId = object.channel_id;
    }
    if (object.error_receipt !== void 0 && object.error_receipt !== null) {
      message.errorReceipt = ErrorReceipt.fromAmino(object.error_receipt);
    }
    if (object.proof_error_receipt !== void 0 && object.proof_error_receipt !== null) {
      message.proofErrorReceipt = bytesFromBase64(object.proof_error_receipt);
    }
    if (object.proof_height !== void 0 && object.proof_height !== null) {
      message.proofHeight = Height.fromAmino(object.proof_height);
    }
    if (object.signer !== void 0 && object.signer !== null) {
      message.signer = object.signer;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.port_id = message.portId === "" ? void 0 : message.portId;
    obj.channel_id = message.channelId === "" ? void 0 : message.channelId;
    obj.error_receipt = message.errorReceipt ? ErrorReceipt.toAmino(message.errorReceipt) : void 0;
    obj.proof_error_receipt = message.proofErrorReceipt ? base64FromBytes(message.proofErrorReceipt) : void 0;
    obj.proof_height = message.proofHeight ? Height.toAmino(message.proofHeight) : {};
    obj.signer = message.signer === "" ? void 0 : message.signer;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgChannelUpgradeCancel.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgChannelUpgradeCancel",
      value: MsgChannelUpgradeCancel.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgChannelUpgradeCancel.decode(message.value);
  },
  toProto(message) {
    return MsgChannelUpgradeCancel.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeCancel",
      value: MsgChannelUpgradeCancel.encode(message).finish()
    };
  }
};
function createBaseMsgChannelUpgradeCancelResponse() {
  return {};
}
const MsgChannelUpgradeCancelResponse = {
  typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeCancelResponse",
  encode(_, writer = BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgChannelUpgradeCancelResponse();
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
    const message = createBaseMsgChannelUpgradeCancelResponse();
    return message;
  },
  fromAmino(_) {
    const message = createBaseMsgChannelUpgradeCancelResponse();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return MsgChannelUpgradeCancelResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgChannelUpgradeCancelResponse",
      value: MsgChannelUpgradeCancelResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgChannelUpgradeCancelResponse.decode(message.value);
  },
  toProto(message) {
    return MsgChannelUpgradeCancelResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeCancelResponse",
      value: MsgChannelUpgradeCancelResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateParams() {
  return {
    authority: "",
    params: Params.fromPartial({})
  };
}
const MsgUpdateParams = {
  typeUrl: "/ibc.core.channel.v1.MsgUpdateParams",
  encode(message, writer = BinaryWriter.create()) {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== void 0) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgUpdateParams();
    message.authority = object.authority ?? "";
    message.params = object.params !== void 0 && object.params !== null ? Params.fromPartial(object.params) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgUpdateParams();
    if (object.authority !== void 0 && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.params !== void 0 && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.authority = message.authority === "" ? void 0 : message.authority;
    obj.params = message.params ? Params.toAmino(message.params) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgUpdateParams.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgUpdateParams",
      value: MsgUpdateParams.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgUpdateParams.decode(message.value);
  },
  toProto(message) {
    return MsgUpdateParams.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.core.channel.v1.MsgUpdateParams",
      value: MsgUpdateParams.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateParamsResponse() {
  return {};
}
const MsgUpdateParamsResponse = {
  typeUrl: "/ibc.core.channel.v1.MsgUpdateParamsResponse",
  encode(_, writer = BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParamsResponse();
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
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  fromAmino(_) {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return MsgUpdateParamsResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgUpdateParamsResponse.decode(message.value);
  },
  toProto(message) {
    return MsgUpdateParamsResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.core.channel.v1.MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.encode(message).finish()
    };
  }
};
function createBaseMsgPruneAcknowledgements() {
  return {
    portId: "",
    channelId: "",
    limit: BigInt(0),
    signer: ""
  };
}
const MsgPruneAcknowledgements = {
  typeUrl: "/ibc.core.channel.v1.MsgPruneAcknowledgements",
  encode(message, writer = BinaryWriter.create()) {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    if (message.limit !== BigInt(0)) {
      writer.uint32(24).uint64(message.limit);
    }
    if (message.signer !== "") {
      writer.uint32(34).string(message.signer);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgPruneAcknowledgements();
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
          message.limit = reader.uint64();
          break;
        case 4:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgPruneAcknowledgements();
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    message.limit = object.limit !== void 0 && object.limit !== null ? BigInt(object.limit.toString()) : BigInt(0);
    message.signer = object.signer ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgPruneAcknowledgements();
    if (object.port_id !== void 0 && object.port_id !== null) {
      message.portId = object.port_id;
    }
    if (object.channel_id !== void 0 && object.channel_id !== null) {
      message.channelId = object.channel_id;
    }
    if (object.limit !== void 0 && object.limit !== null) {
      message.limit = BigInt(object.limit);
    }
    if (object.signer !== void 0 && object.signer !== null) {
      message.signer = object.signer;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.port_id = message.portId === "" ? void 0 : message.portId;
    obj.channel_id = message.channelId === "" ? void 0 : message.channelId;
    obj.limit = message.limit !== BigInt(0) ? message.limit?.toString() : void 0;
    obj.signer = message.signer === "" ? void 0 : message.signer;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgPruneAcknowledgements.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgPruneAcknowledgements",
      value: MsgPruneAcknowledgements.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgPruneAcknowledgements.decode(message.value);
  },
  toProto(message) {
    return MsgPruneAcknowledgements.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.core.channel.v1.MsgPruneAcknowledgements",
      value: MsgPruneAcknowledgements.encode(message).finish()
    };
  }
};
function createBaseMsgPruneAcknowledgementsResponse() {
  return {
    totalPrunedSequences: BigInt(0),
    totalRemainingSequences: BigInt(0)
  };
}
const MsgPruneAcknowledgementsResponse = {
  typeUrl: "/ibc.core.channel.v1.MsgPruneAcknowledgementsResponse",
  encode(message, writer = BinaryWriter.create()) {
    if (message.totalPrunedSequences !== BigInt(0)) {
      writer.uint32(8).uint64(message.totalPrunedSequences);
    }
    if (message.totalRemainingSequences !== BigInt(0)) {
      writer.uint32(16).uint64(message.totalRemainingSequences);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgPruneAcknowledgementsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.totalPrunedSequences = reader.uint64();
          break;
        case 2:
          message.totalRemainingSequences = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgPruneAcknowledgementsResponse();
    message.totalPrunedSequences = object.totalPrunedSequences !== void 0 && object.totalPrunedSequences !== null ? BigInt(object.totalPrunedSequences.toString()) : BigInt(0);
    message.totalRemainingSequences = object.totalRemainingSequences !== void 0 && object.totalRemainingSequences !== null ? BigInt(object.totalRemainingSequences.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgPruneAcknowledgementsResponse();
    if (object.total_pruned_sequences !== void 0 && object.total_pruned_sequences !== null) {
      message.totalPrunedSequences = BigInt(object.total_pruned_sequences);
    }
    if (object.total_remaining_sequences !== void 0 && object.total_remaining_sequences !== null) {
      message.totalRemainingSequences = BigInt(object.total_remaining_sequences);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.total_pruned_sequences = message.totalPrunedSequences !== BigInt(0) ? message.totalPrunedSequences?.toString() : void 0;
    obj.total_remaining_sequences = message.totalRemainingSequences !== BigInt(0) ? message.totalRemainingSequences?.toString() : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgPruneAcknowledgementsResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgPruneAcknowledgementsResponse",
      value: MsgPruneAcknowledgementsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgPruneAcknowledgementsResponse.decode(message.value);
  },
  toProto(message) {
    return MsgPruneAcknowledgementsResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.core.channel.v1.MsgPruneAcknowledgementsResponse",
      value: MsgPruneAcknowledgementsResponse.encode(message).finish()
    };
  }
};
export {
  MsgAcknowledgement,
  MsgAcknowledgementResponse,
  MsgChannelCloseConfirm,
  MsgChannelCloseConfirmResponse,
  MsgChannelCloseInit,
  MsgChannelCloseInitResponse,
  MsgChannelOpenAck,
  MsgChannelOpenAckResponse,
  MsgChannelOpenConfirm,
  MsgChannelOpenConfirmResponse,
  MsgChannelOpenInit,
  MsgChannelOpenInitResponse,
  MsgChannelOpenTry,
  MsgChannelOpenTryResponse,
  MsgChannelUpgradeAck,
  MsgChannelUpgradeAckResponse,
  MsgChannelUpgradeCancel,
  MsgChannelUpgradeCancelResponse,
  MsgChannelUpgradeConfirm,
  MsgChannelUpgradeConfirmResponse,
  MsgChannelUpgradeInit,
  MsgChannelUpgradeInitResponse,
  MsgChannelUpgradeOpen,
  MsgChannelUpgradeOpenResponse,
  MsgChannelUpgradeTimeout,
  MsgChannelUpgradeTimeoutResponse,
  MsgChannelUpgradeTry,
  MsgChannelUpgradeTryResponse,
  MsgPruneAcknowledgements,
  MsgPruneAcknowledgementsResponse,
  MsgRecvPacket,
  MsgRecvPacketResponse,
  MsgTimeout,
  MsgTimeoutOnClose,
  MsgTimeoutOnCloseResponse,
  MsgTimeoutResponse,
  MsgUpdateParams,
  MsgUpdateParamsResponse,
  ResponseResultType,
  ResponseResultTypeAmino,
  ResponseResultTypeSDKType,
  responseResultTypeFromJSON,
  responseResultTypeToJSON
};
