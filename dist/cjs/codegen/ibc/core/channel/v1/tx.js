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
var tx_exports = {};
__export(tx_exports, {
  MsgAcknowledgement: () => MsgAcknowledgement,
  MsgAcknowledgementResponse: () => MsgAcknowledgementResponse,
  MsgChannelCloseConfirm: () => MsgChannelCloseConfirm,
  MsgChannelCloseConfirmResponse: () => MsgChannelCloseConfirmResponse,
  MsgChannelCloseInit: () => MsgChannelCloseInit,
  MsgChannelCloseInitResponse: () => MsgChannelCloseInitResponse,
  MsgChannelOpenAck: () => MsgChannelOpenAck,
  MsgChannelOpenAckResponse: () => MsgChannelOpenAckResponse,
  MsgChannelOpenConfirm: () => MsgChannelOpenConfirm,
  MsgChannelOpenConfirmResponse: () => MsgChannelOpenConfirmResponse,
  MsgChannelOpenInit: () => MsgChannelOpenInit,
  MsgChannelOpenInitResponse: () => MsgChannelOpenInitResponse,
  MsgChannelOpenTry: () => MsgChannelOpenTry,
  MsgChannelOpenTryResponse: () => MsgChannelOpenTryResponse,
  MsgRecvPacket: () => MsgRecvPacket,
  MsgRecvPacketResponse: () => MsgRecvPacketResponse,
  MsgTimeout: () => MsgTimeout,
  MsgTimeoutOnClose: () => MsgTimeoutOnClose,
  MsgTimeoutOnCloseResponse: () => MsgTimeoutOnCloseResponse,
  MsgTimeoutResponse: () => MsgTimeoutResponse,
  ResponseResultType: () => ResponseResultType,
  ResponseResultTypeAmino: () => ResponseResultTypeAmino,
  ResponseResultTypeSDKType: () => ResponseResultTypeSDKType,
  responseResultTypeFromJSON: () => responseResultTypeFromJSON,
  responseResultTypeToJSON: () => responseResultTypeToJSON
});
module.exports = __toCommonJS(tx_exports);
var import_channel = require("./channel");
var import_client = require("../../client/v1/client");
var import_binary = require("../../../../binary");
var import_helpers = require("../../../../helpers");
var ResponseResultType = /* @__PURE__ */ ((ResponseResultType2) => {
  ResponseResultType2[ResponseResultType2["RESPONSE_RESULT_TYPE_UNSPECIFIED"] = 0] = "RESPONSE_RESULT_TYPE_UNSPECIFIED";
  ResponseResultType2[ResponseResultType2["RESPONSE_RESULT_TYPE_NOOP"] = 1] = "RESPONSE_RESULT_TYPE_NOOP";
  ResponseResultType2[ResponseResultType2["RESPONSE_RESULT_TYPE_SUCCESS"] = 2] = "RESPONSE_RESULT_TYPE_SUCCESS";
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
    case -1 /* UNRECOGNIZED */:
    default:
      return "UNRECOGNIZED";
  }
}
function createBaseMsgChannelOpenInit() {
  return {
    portId: "",
    channel: import_channel.Channel.fromPartial({}),
    signer: ""
  };
}
const MsgChannelOpenInit = {
  typeUrl: "/ibc.core.channel.v1.MsgChannelOpenInit",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.channel !== void 0) {
      import_channel.Channel.encode(message.channel, writer.uint32(18).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(26).string(message.signer);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgChannelOpenInit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.portId = reader.string();
          break;
        case 2:
          message.channel = import_channel.Channel.decode(reader, reader.uint32());
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
    message.channel = object.channel !== void 0 && object.channel !== null ? import_channel.Channel.fromPartial(object.channel) : void 0;
    message.signer = object.signer ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgChannelOpenInit();
    if (object.port_id !== void 0 && object.port_id !== null) {
      message.portId = object.port_id;
    }
    if (object.channel !== void 0 && object.channel !== null) {
      message.channel = import_channel.Channel.fromAmino(object.channel);
    }
    if (object.signer !== void 0 && object.signer !== null) {
      message.signer = object.signer;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.port_id = message.portId === "" ? void 0 : message.portId;
    obj.channel = message.channel ? import_channel.Channel.toAmino(message.channel) : void 0;
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
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.channelId !== "") {
      writer.uint32(10).string(message.channelId);
    }
    if (message.version !== "") {
      writer.uint32(18).string(message.version);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
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
    channel: import_channel.Channel.fromPartial({}),
    counterpartyVersion: "",
    proofInit: new Uint8Array(),
    proofHeight: import_client.Height.fromPartial({}),
    signer: ""
  };
}
const MsgChannelOpenTry = {
  typeUrl: "/ibc.core.channel.v1.MsgChannelOpenTry",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.previousChannelId !== "") {
      writer.uint32(18).string(message.previousChannelId);
    }
    if (message.channel !== void 0) {
      import_channel.Channel.encode(message.channel, writer.uint32(26).fork()).ldelim();
    }
    if (message.counterpartyVersion !== "") {
      writer.uint32(34).string(message.counterpartyVersion);
    }
    if (message.proofInit.length !== 0) {
      writer.uint32(42).bytes(message.proofInit);
    }
    if (message.proofHeight !== void 0) {
      import_client.Height.encode(message.proofHeight, writer.uint32(50).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(58).string(message.signer);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
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
          message.channel = import_channel.Channel.decode(reader, reader.uint32());
          break;
        case 4:
          message.counterpartyVersion = reader.string();
          break;
        case 5:
          message.proofInit = reader.bytes();
          break;
        case 6:
          message.proofHeight = import_client.Height.decode(reader, reader.uint32());
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
    message.channel = object.channel !== void 0 && object.channel !== null ? import_channel.Channel.fromPartial(object.channel) : void 0;
    message.counterpartyVersion = object.counterpartyVersion ?? "";
    message.proofInit = object.proofInit ?? new Uint8Array();
    message.proofHeight = object.proofHeight !== void 0 && object.proofHeight !== null ? import_client.Height.fromPartial(object.proofHeight) : void 0;
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
      message.channel = import_channel.Channel.fromAmino(object.channel);
    }
    if (object.counterparty_version !== void 0 && object.counterparty_version !== null) {
      message.counterpartyVersion = object.counterparty_version;
    }
    if (object.proof_init !== void 0 && object.proof_init !== null) {
      message.proofInit = (0, import_helpers.bytesFromBase64)(object.proof_init);
    }
    if (object.proof_height !== void 0 && object.proof_height !== null) {
      message.proofHeight = import_client.Height.fromAmino(object.proof_height);
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
    obj.channel = message.channel ? import_channel.Channel.toAmino(message.channel) : void 0;
    obj.counterparty_version = message.counterpartyVersion === "" ? void 0 : message.counterpartyVersion;
    obj.proof_init = message.proofInit ? (0, import_helpers.base64FromBytes)(message.proofInit) : void 0;
    obj.proof_height = message.proofHeight ? import_client.Height.toAmino(message.proofHeight) : {};
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
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.version !== "") {
      writer.uint32(10).string(message.version);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
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
    proofHeight: import_client.Height.fromPartial({}),
    signer: ""
  };
}
const MsgChannelOpenAck = {
  typeUrl: "/ibc.core.channel.v1.MsgChannelOpenAck",
  encode(message, writer = import_binary.BinaryWriter.create()) {
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
      import_client.Height.encode(message.proofHeight, writer.uint32(50).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(58).string(message.signer);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
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
          message.proofHeight = import_client.Height.decode(reader, reader.uint32());
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
    message.proofHeight = object.proofHeight !== void 0 && object.proofHeight !== null ? import_client.Height.fromPartial(object.proofHeight) : void 0;
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
      message.proofTry = (0, import_helpers.bytesFromBase64)(object.proof_try);
    }
    if (object.proof_height !== void 0 && object.proof_height !== null) {
      message.proofHeight = import_client.Height.fromAmino(object.proof_height);
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
    obj.proof_try = message.proofTry ? (0, import_helpers.base64FromBytes)(message.proofTry) : void 0;
    obj.proof_height = message.proofHeight ? import_client.Height.toAmino(message.proofHeight) : {};
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
  encode(_, writer = import_binary.BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
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
    proofHeight: import_client.Height.fromPartial({}),
    signer: ""
  };
}
const MsgChannelOpenConfirm = {
  typeUrl: "/ibc.core.channel.v1.MsgChannelOpenConfirm",
  encode(message, writer = import_binary.BinaryWriter.create()) {
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
      import_client.Height.encode(message.proofHeight, writer.uint32(34).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(42).string(message.signer);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
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
          message.proofHeight = import_client.Height.decode(reader, reader.uint32());
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
    message.proofHeight = object.proofHeight !== void 0 && object.proofHeight !== null ? import_client.Height.fromPartial(object.proofHeight) : void 0;
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
      message.proofAck = (0, import_helpers.bytesFromBase64)(object.proof_ack);
    }
    if (object.proof_height !== void 0 && object.proof_height !== null) {
      message.proofHeight = import_client.Height.fromAmino(object.proof_height);
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
    obj.proof_ack = message.proofAck ? (0, import_helpers.base64FromBytes)(message.proofAck) : void 0;
    obj.proof_height = message.proofHeight ? import_client.Height.toAmino(message.proofHeight) : {};
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
  encode(_, writer = import_binary.BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
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
  encode(message, writer = import_binary.BinaryWriter.create()) {
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
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
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
  encode(_, writer = import_binary.BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
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
    proofHeight: import_client.Height.fromPartial({}),
    signer: ""
  };
}
const MsgChannelCloseConfirm = {
  typeUrl: "/ibc.core.channel.v1.MsgChannelCloseConfirm",
  encode(message, writer = import_binary.BinaryWriter.create()) {
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
      import_client.Height.encode(message.proofHeight, writer.uint32(34).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(42).string(message.signer);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
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
          message.proofHeight = import_client.Height.decode(reader, reader.uint32());
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
    const message = createBaseMsgChannelCloseConfirm();
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    message.proofInit = object.proofInit ?? new Uint8Array();
    message.proofHeight = object.proofHeight !== void 0 && object.proofHeight !== null ? import_client.Height.fromPartial(object.proofHeight) : void 0;
    message.signer = object.signer ?? "";
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
      message.proofInit = (0, import_helpers.bytesFromBase64)(object.proof_init);
    }
    if (object.proof_height !== void 0 && object.proof_height !== null) {
      message.proofHeight = import_client.Height.fromAmino(object.proof_height);
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
    obj.proof_init = message.proofInit ? (0, import_helpers.base64FromBytes)(message.proofInit) : void 0;
    obj.proof_height = message.proofHeight ? import_client.Height.toAmino(message.proofHeight) : {};
    obj.signer = message.signer === "" ? void 0 : message.signer;
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
  encode(_, writer = import_binary.BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
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
    packet: import_channel.Packet.fromPartial({}),
    proofCommitment: new Uint8Array(),
    proofHeight: import_client.Height.fromPartial({}),
    signer: ""
  };
}
const MsgRecvPacket = {
  typeUrl: "/ibc.core.channel.v1.MsgRecvPacket",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.packet !== void 0) {
      import_channel.Packet.encode(message.packet, writer.uint32(10).fork()).ldelim();
    }
    if (message.proofCommitment.length !== 0) {
      writer.uint32(18).bytes(message.proofCommitment);
    }
    if (message.proofHeight !== void 0) {
      import_client.Height.encode(message.proofHeight, writer.uint32(26).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(34).string(message.signer);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgRecvPacket();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.packet = import_channel.Packet.decode(reader, reader.uint32());
          break;
        case 2:
          message.proofCommitment = reader.bytes();
          break;
        case 3:
          message.proofHeight = import_client.Height.decode(reader, reader.uint32());
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
    message.packet = object.packet !== void 0 && object.packet !== null ? import_channel.Packet.fromPartial(object.packet) : void 0;
    message.proofCommitment = object.proofCommitment ?? new Uint8Array();
    message.proofHeight = object.proofHeight !== void 0 && object.proofHeight !== null ? import_client.Height.fromPartial(object.proofHeight) : void 0;
    message.signer = object.signer ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgRecvPacket();
    if (object.packet !== void 0 && object.packet !== null) {
      message.packet = import_channel.Packet.fromAmino(object.packet);
    }
    if (object.proof_commitment !== void 0 && object.proof_commitment !== null) {
      message.proofCommitment = (0, import_helpers.bytesFromBase64)(object.proof_commitment);
    }
    if (object.proof_height !== void 0 && object.proof_height !== null) {
      message.proofHeight = import_client.Height.fromAmino(object.proof_height);
    }
    if (object.signer !== void 0 && object.signer !== null) {
      message.signer = object.signer;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.packet = message.packet ? import_channel.Packet.toAmino(message.packet) : void 0;
    obj.proof_commitment = message.proofCommitment ? (0, import_helpers.base64FromBytes)(message.proofCommitment) : void 0;
    obj.proof_height = message.proofHeight ? import_client.Height.toAmino(message.proofHeight) : {};
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
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
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
    packet: import_channel.Packet.fromPartial({}),
    proofUnreceived: new Uint8Array(),
    proofHeight: import_client.Height.fromPartial({}),
    nextSequenceRecv: BigInt(0),
    signer: ""
  };
}
const MsgTimeout = {
  typeUrl: "/ibc.core.channel.v1.MsgTimeout",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.packet !== void 0) {
      import_channel.Packet.encode(message.packet, writer.uint32(10).fork()).ldelim();
    }
    if (message.proofUnreceived.length !== 0) {
      writer.uint32(18).bytes(message.proofUnreceived);
    }
    if (message.proofHeight !== void 0) {
      import_client.Height.encode(message.proofHeight, writer.uint32(26).fork()).ldelim();
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
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgTimeout();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.packet = import_channel.Packet.decode(reader, reader.uint32());
          break;
        case 2:
          message.proofUnreceived = reader.bytes();
          break;
        case 3:
          message.proofHeight = import_client.Height.decode(reader, reader.uint32());
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
    message.packet = object.packet !== void 0 && object.packet !== null ? import_channel.Packet.fromPartial(object.packet) : void 0;
    message.proofUnreceived = object.proofUnreceived ?? new Uint8Array();
    message.proofHeight = object.proofHeight !== void 0 && object.proofHeight !== null ? import_client.Height.fromPartial(object.proofHeight) : void 0;
    message.nextSequenceRecv = object.nextSequenceRecv !== void 0 && object.nextSequenceRecv !== null ? BigInt(object.nextSequenceRecv.toString()) : BigInt(0);
    message.signer = object.signer ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgTimeout();
    if (object.packet !== void 0 && object.packet !== null) {
      message.packet = import_channel.Packet.fromAmino(object.packet);
    }
    if (object.proof_unreceived !== void 0 && object.proof_unreceived !== null) {
      message.proofUnreceived = (0, import_helpers.bytesFromBase64)(object.proof_unreceived);
    }
    if (object.proof_height !== void 0 && object.proof_height !== null) {
      message.proofHeight = import_client.Height.fromAmino(object.proof_height);
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
    obj.packet = message.packet ? import_channel.Packet.toAmino(message.packet) : void 0;
    obj.proof_unreceived = message.proofUnreceived ? (0, import_helpers.base64FromBytes)(message.proofUnreceived) : void 0;
    obj.proof_height = message.proofHeight ? import_client.Height.toAmino(message.proofHeight) : {};
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
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
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
    packet: import_channel.Packet.fromPartial({}),
    proofUnreceived: new Uint8Array(),
    proofClose: new Uint8Array(),
    proofHeight: import_client.Height.fromPartial({}),
    nextSequenceRecv: BigInt(0),
    signer: ""
  };
}
const MsgTimeoutOnClose = {
  typeUrl: "/ibc.core.channel.v1.MsgTimeoutOnClose",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.packet !== void 0) {
      import_channel.Packet.encode(message.packet, writer.uint32(10).fork()).ldelim();
    }
    if (message.proofUnreceived.length !== 0) {
      writer.uint32(18).bytes(message.proofUnreceived);
    }
    if (message.proofClose.length !== 0) {
      writer.uint32(26).bytes(message.proofClose);
    }
    if (message.proofHeight !== void 0) {
      import_client.Height.encode(message.proofHeight, writer.uint32(34).fork()).ldelim();
    }
    if (message.nextSequenceRecv !== BigInt(0)) {
      writer.uint32(40).uint64(message.nextSequenceRecv);
    }
    if (message.signer !== "") {
      writer.uint32(50).string(message.signer);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgTimeoutOnClose();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.packet = import_channel.Packet.decode(reader, reader.uint32());
          break;
        case 2:
          message.proofUnreceived = reader.bytes();
          break;
        case 3:
          message.proofClose = reader.bytes();
          break;
        case 4:
          message.proofHeight = import_client.Height.decode(reader, reader.uint32());
          break;
        case 5:
          message.nextSequenceRecv = reader.uint64();
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
    const message = createBaseMsgTimeoutOnClose();
    message.packet = object.packet !== void 0 && object.packet !== null ? import_channel.Packet.fromPartial(object.packet) : void 0;
    message.proofUnreceived = object.proofUnreceived ?? new Uint8Array();
    message.proofClose = object.proofClose ?? new Uint8Array();
    message.proofHeight = object.proofHeight !== void 0 && object.proofHeight !== null ? import_client.Height.fromPartial(object.proofHeight) : void 0;
    message.nextSequenceRecv = object.nextSequenceRecv !== void 0 && object.nextSequenceRecv !== null ? BigInt(object.nextSequenceRecv.toString()) : BigInt(0);
    message.signer = object.signer ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgTimeoutOnClose();
    if (object.packet !== void 0 && object.packet !== null) {
      message.packet = import_channel.Packet.fromAmino(object.packet);
    }
    if (object.proof_unreceived !== void 0 && object.proof_unreceived !== null) {
      message.proofUnreceived = (0, import_helpers.bytesFromBase64)(object.proof_unreceived);
    }
    if (object.proof_close !== void 0 && object.proof_close !== null) {
      message.proofClose = (0, import_helpers.bytesFromBase64)(object.proof_close);
    }
    if (object.proof_height !== void 0 && object.proof_height !== null) {
      message.proofHeight = import_client.Height.fromAmino(object.proof_height);
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
    obj.packet = message.packet ? import_channel.Packet.toAmino(message.packet) : void 0;
    obj.proof_unreceived = message.proofUnreceived ? (0, import_helpers.base64FromBytes)(message.proofUnreceived) : void 0;
    obj.proof_close = message.proofClose ? (0, import_helpers.base64FromBytes)(message.proofClose) : void 0;
    obj.proof_height = message.proofHeight ? import_client.Height.toAmino(message.proofHeight) : {};
    obj.next_sequence_recv = message.nextSequenceRecv !== BigInt(0) ? message.nextSequenceRecv?.toString() : void 0;
    obj.signer = message.signer === "" ? void 0 : message.signer;
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
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
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
    packet: import_channel.Packet.fromPartial({}),
    acknowledgement: new Uint8Array(),
    proofAcked: new Uint8Array(),
    proofHeight: import_client.Height.fromPartial({}),
    signer: ""
  };
}
const MsgAcknowledgement = {
  typeUrl: "/ibc.core.channel.v1.MsgAcknowledgement",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.packet !== void 0) {
      import_channel.Packet.encode(message.packet, writer.uint32(10).fork()).ldelim();
    }
    if (message.acknowledgement.length !== 0) {
      writer.uint32(18).bytes(message.acknowledgement);
    }
    if (message.proofAcked.length !== 0) {
      writer.uint32(26).bytes(message.proofAcked);
    }
    if (message.proofHeight !== void 0) {
      import_client.Height.encode(message.proofHeight, writer.uint32(34).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(42).string(message.signer);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgAcknowledgement();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.packet = import_channel.Packet.decode(reader, reader.uint32());
          break;
        case 2:
          message.acknowledgement = reader.bytes();
          break;
        case 3:
          message.proofAcked = reader.bytes();
          break;
        case 4:
          message.proofHeight = import_client.Height.decode(reader, reader.uint32());
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
    message.packet = object.packet !== void 0 && object.packet !== null ? import_channel.Packet.fromPartial(object.packet) : void 0;
    message.acknowledgement = object.acknowledgement ?? new Uint8Array();
    message.proofAcked = object.proofAcked ?? new Uint8Array();
    message.proofHeight = object.proofHeight !== void 0 && object.proofHeight !== null ? import_client.Height.fromPartial(object.proofHeight) : void 0;
    message.signer = object.signer ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgAcknowledgement();
    if (object.packet !== void 0 && object.packet !== null) {
      message.packet = import_channel.Packet.fromAmino(object.packet);
    }
    if (object.acknowledgement !== void 0 && object.acknowledgement !== null) {
      message.acknowledgement = (0, import_helpers.bytesFromBase64)(object.acknowledgement);
    }
    if (object.proof_acked !== void 0 && object.proof_acked !== null) {
      message.proofAcked = (0, import_helpers.bytesFromBase64)(object.proof_acked);
    }
    if (object.proof_height !== void 0 && object.proof_height !== null) {
      message.proofHeight = import_client.Height.fromAmino(object.proof_height);
    }
    if (object.signer !== void 0 && object.signer !== null) {
      message.signer = object.signer;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.packet = message.packet ? import_channel.Packet.toAmino(message.packet) : void 0;
    obj.acknowledgement = message.acknowledgement ? (0, import_helpers.base64FromBytes)(message.acknowledgement) : void 0;
    obj.proof_acked = message.proofAcked ? (0, import_helpers.base64FromBytes)(message.proofAcked) : void 0;
    obj.proof_height = message.proofHeight ? import_client.Height.toAmino(message.proofHeight) : {};
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
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
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
  MsgRecvPacket,
  MsgRecvPacketResponse,
  MsgTimeout,
  MsgTimeoutOnClose,
  MsgTimeoutOnCloseResponse,
  MsgTimeoutResponse,
  ResponseResultType,
  ResponseResultTypeAmino,
  ResponseResultTypeSDKType,
  responseResultTypeFromJSON,
  responseResultTypeToJSON
});
