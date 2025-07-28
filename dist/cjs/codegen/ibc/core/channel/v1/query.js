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
var query_exports = {};
__export(query_exports, {
  QueryChannelClientStateRequest: () => QueryChannelClientStateRequest,
  QueryChannelClientStateResponse: () => QueryChannelClientStateResponse,
  QueryChannelConsensusStateRequest: () => QueryChannelConsensusStateRequest,
  QueryChannelConsensusStateResponse: () => QueryChannelConsensusStateResponse,
  QueryChannelRequest: () => QueryChannelRequest,
  QueryChannelResponse: () => QueryChannelResponse,
  QueryChannelsRequest: () => QueryChannelsRequest,
  QueryChannelsResponse: () => QueryChannelsResponse,
  QueryConnectionChannelsRequest: () => QueryConnectionChannelsRequest,
  QueryConnectionChannelsResponse: () => QueryConnectionChannelsResponse,
  QueryNextSequenceReceiveRequest: () => QueryNextSequenceReceiveRequest,
  QueryNextSequenceReceiveResponse: () => QueryNextSequenceReceiveResponse,
  QueryPacketAcknowledgementRequest: () => QueryPacketAcknowledgementRequest,
  QueryPacketAcknowledgementResponse: () => QueryPacketAcknowledgementResponse,
  QueryPacketAcknowledgementsRequest: () => QueryPacketAcknowledgementsRequest,
  QueryPacketAcknowledgementsResponse: () => QueryPacketAcknowledgementsResponse,
  QueryPacketCommitmentRequest: () => QueryPacketCommitmentRequest,
  QueryPacketCommitmentResponse: () => QueryPacketCommitmentResponse,
  QueryPacketCommitmentsRequest: () => QueryPacketCommitmentsRequest,
  QueryPacketCommitmentsResponse: () => QueryPacketCommitmentsResponse,
  QueryPacketReceiptRequest: () => QueryPacketReceiptRequest,
  QueryPacketReceiptResponse: () => QueryPacketReceiptResponse,
  QueryUnreceivedAcksRequest: () => QueryUnreceivedAcksRequest,
  QueryUnreceivedAcksResponse: () => QueryUnreceivedAcksResponse,
  QueryUnreceivedPacketsRequest: () => QueryUnreceivedPacketsRequest,
  QueryUnreceivedPacketsResponse: () => QueryUnreceivedPacketsResponse
});
module.exports = __toCommonJS(query_exports);
var import_pagination = require("../../../../cosmos/base/query/v1beta1/pagination");
var import_channel = require("./channel");
var import_client = require("../../client/v1/client");
var import_any = require("../../../../google/protobuf/any");
var import_binary = require("../../../../binary");
var import_helpers = require("../../../../helpers");
function createBaseQueryChannelRequest() {
  return {
    portId: "",
    channelId: ""
  };
}
const QueryChannelRequest = {
  typeUrl: "/ibc.core.channel.v1.QueryChannelRequest",
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
    const message = createBaseQueryChannelRequest();
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
    const message = createBaseQueryChannelRequest();
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryChannelRequest();
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
    return QueryChannelRequest.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryChannelRequest",
      value: QueryChannelRequest.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryChannelRequest.decode(message.value);
  },
  toProto(message) {
    return QueryChannelRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.core.channel.v1.QueryChannelRequest",
      value: QueryChannelRequest.encode(message).finish()
    };
  }
};
function createBaseQueryChannelResponse() {
  return {
    channel: void 0,
    proof: new Uint8Array(),
    proofHeight: import_client.Height.fromPartial({})
  };
}
const QueryChannelResponse = {
  typeUrl: "/ibc.core.channel.v1.QueryChannelResponse",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.channel !== void 0) {
      import_channel.Channel.encode(message.channel, writer.uint32(10).fork()).ldelim();
    }
    if (message.proof.length !== 0) {
      writer.uint32(18).bytes(message.proof);
    }
    if (message.proofHeight !== void 0) {
      import_client.Height.encode(message.proofHeight, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryChannelResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.channel = import_channel.Channel.decode(reader, reader.uint32());
          break;
        case 2:
          message.proof = reader.bytes();
          break;
        case 3:
          message.proofHeight = import_client.Height.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryChannelResponse();
    message.channel = object.channel !== void 0 && object.channel !== null ? import_channel.Channel.fromPartial(object.channel) : void 0;
    message.proof = object.proof ?? new Uint8Array();
    message.proofHeight = object.proofHeight !== void 0 && object.proofHeight !== null ? import_client.Height.fromPartial(object.proofHeight) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryChannelResponse();
    if (object.channel !== void 0 && object.channel !== null) {
      message.channel = import_channel.Channel.fromAmino(object.channel);
    }
    if (object.proof !== void 0 && object.proof !== null) {
      message.proof = (0, import_helpers.bytesFromBase64)(object.proof);
    }
    if (object.proof_height !== void 0 && object.proof_height !== null) {
      message.proofHeight = import_client.Height.fromAmino(object.proof_height);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.channel = message.channel ? import_channel.Channel.toAmino(message.channel) : void 0;
    obj.proof = message.proof ? (0, import_helpers.base64FromBytes)(message.proof) : void 0;
    obj.proof_height = message.proofHeight ? import_client.Height.toAmino(message.proofHeight) : {};
    return obj;
  },
  fromAminoMsg(object) {
    return QueryChannelResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryChannelResponse",
      value: QueryChannelResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryChannelResponse.decode(message.value);
  },
  toProto(message) {
    return QueryChannelResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.core.channel.v1.QueryChannelResponse",
      value: QueryChannelResponse.encode(message).finish()
    };
  }
};
function createBaseQueryChannelsRequest() {
  return {
    pagination: void 0
  };
}
const QueryChannelsRequest = {
  typeUrl: "/ibc.core.channel.v1.QueryChannelsRequest",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.pagination !== void 0) {
      import_pagination.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryChannelsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = import_pagination.PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryChannelsRequest();
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? import_pagination.PageRequest.fromPartial(object.pagination) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryChannelsRequest();
    if (object.pagination !== void 0 && object.pagination !== null) {
      message.pagination = import_pagination.PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.pagination = message.pagination ? import_pagination.PageRequest.toAmino(message.pagination) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryChannelsRequest.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryChannelsRequest",
      value: QueryChannelsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryChannelsRequest.decode(message.value);
  },
  toProto(message) {
    return QueryChannelsRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.core.channel.v1.QueryChannelsRequest",
      value: QueryChannelsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryChannelsResponse() {
  return {
    channels: [],
    pagination: void 0,
    height: import_client.Height.fromPartial({})
  };
}
const QueryChannelsResponse = {
  typeUrl: "/ibc.core.channel.v1.QueryChannelsResponse",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    for (const v of message.channels) {
      import_channel.IdentifiedChannel.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== void 0) {
      import_pagination.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    if (message.height !== void 0) {
      import_client.Height.encode(message.height, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryChannelsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.channels.push(import_channel.IdentifiedChannel.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = import_pagination.PageResponse.decode(reader, reader.uint32());
          break;
        case 3:
          message.height = import_client.Height.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryChannelsResponse();
    message.channels = object.channels?.map((e) => import_channel.IdentifiedChannel.fromPartial(e)) || [];
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? import_pagination.PageResponse.fromPartial(object.pagination) : void 0;
    message.height = object.height !== void 0 && object.height !== null ? import_client.Height.fromPartial(object.height) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryChannelsResponse();
    message.channels = object.channels?.map((e) => import_channel.IdentifiedChannel.fromAmino(e)) || [];
    if (object.pagination !== void 0 && object.pagination !== null) {
      message.pagination = import_pagination.PageResponse.fromAmino(object.pagination);
    }
    if (object.height !== void 0 && object.height !== null) {
      message.height = import_client.Height.fromAmino(object.height);
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
    obj.pagination = message.pagination ? import_pagination.PageResponse.toAmino(message.pagination) : void 0;
    obj.height = message.height ? import_client.Height.toAmino(message.height) : {};
    return obj;
  },
  fromAminoMsg(object) {
    return QueryChannelsResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryChannelsResponse",
      value: QueryChannelsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryChannelsResponse.decode(message.value);
  },
  toProto(message) {
    return QueryChannelsResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.core.channel.v1.QueryChannelsResponse",
      value: QueryChannelsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryConnectionChannelsRequest() {
  return {
    connection: "",
    pagination: void 0
  };
}
const QueryConnectionChannelsRequest = {
  typeUrl: "/ibc.core.channel.v1.QueryConnectionChannelsRequest",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.connection !== "") {
      writer.uint32(10).string(message.connection);
    }
    if (message.pagination !== void 0) {
      import_pagination.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryConnectionChannelsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.connection = reader.string();
          break;
        case 2:
          message.pagination = import_pagination.PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryConnectionChannelsRequest();
    message.connection = object.connection ?? "";
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? import_pagination.PageRequest.fromPartial(object.pagination) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryConnectionChannelsRequest();
    if (object.connection !== void 0 && object.connection !== null) {
      message.connection = object.connection;
    }
    if (object.pagination !== void 0 && object.pagination !== null) {
      message.pagination = import_pagination.PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.connection = message.connection === "" ? void 0 : message.connection;
    obj.pagination = message.pagination ? import_pagination.PageRequest.toAmino(message.pagination) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryConnectionChannelsRequest.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryConnectionChannelsRequest",
      value: QueryConnectionChannelsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryConnectionChannelsRequest.decode(message.value);
  },
  toProto(message) {
    return QueryConnectionChannelsRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.core.channel.v1.QueryConnectionChannelsRequest",
      value: QueryConnectionChannelsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryConnectionChannelsResponse() {
  return {
    channels: [],
    pagination: void 0,
    height: import_client.Height.fromPartial({})
  };
}
const QueryConnectionChannelsResponse = {
  typeUrl: "/ibc.core.channel.v1.QueryConnectionChannelsResponse",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    for (const v of message.channels) {
      import_channel.IdentifiedChannel.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== void 0) {
      import_pagination.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    if (message.height !== void 0) {
      import_client.Height.encode(message.height, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryConnectionChannelsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.channels.push(import_channel.IdentifiedChannel.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = import_pagination.PageResponse.decode(reader, reader.uint32());
          break;
        case 3:
          message.height = import_client.Height.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryConnectionChannelsResponse();
    message.channels = object.channels?.map((e) => import_channel.IdentifiedChannel.fromPartial(e)) || [];
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? import_pagination.PageResponse.fromPartial(object.pagination) : void 0;
    message.height = object.height !== void 0 && object.height !== null ? import_client.Height.fromPartial(object.height) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryConnectionChannelsResponse();
    message.channels = object.channels?.map((e) => import_channel.IdentifiedChannel.fromAmino(e)) || [];
    if (object.pagination !== void 0 && object.pagination !== null) {
      message.pagination = import_pagination.PageResponse.fromAmino(object.pagination);
    }
    if (object.height !== void 0 && object.height !== null) {
      message.height = import_client.Height.fromAmino(object.height);
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
    obj.pagination = message.pagination ? import_pagination.PageResponse.toAmino(message.pagination) : void 0;
    obj.height = message.height ? import_client.Height.toAmino(message.height) : {};
    return obj;
  },
  fromAminoMsg(object) {
    return QueryConnectionChannelsResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryConnectionChannelsResponse",
      value: QueryConnectionChannelsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryConnectionChannelsResponse.decode(message.value);
  },
  toProto(message) {
    return QueryConnectionChannelsResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.core.channel.v1.QueryConnectionChannelsResponse",
      value: QueryConnectionChannelsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryChannelClientStateRequest() {
  return {
    portId: "",
    channelId: ""
  };
}
const QueryChannelClientStateRequest = {
  typeUrl: "/ibc.core.channel.v1.QueryChannelClientStateRequest",
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
    const message = createBaseQueryChannelClientStateRequest();
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
    const message = createBaseQueryChannelClientStateRequest();
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryChannelClientStateRequest();
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
    return QueryChannelClientStateRequest.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryChannelClientStateRequest",
      value: QueryChannelClientStateRequest.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryChannelClientStateRequest.decode(message.value);
  },
  toProto(message) {
    return QueryChannelClientStateRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.core.channel.v1.QueryChannelClientStateRequest",
      value: QueryChannelClientStateRequest.encode(message).finish()
    };
  }
};
function createBaseQueryChannelClientStateResponse() {
  return {
    identifiedClientState: void 0,
    proof: new Uint8Array(),
    proofHeight: import_client.Height.fromPartial({})
  };
}
const QueryChannelClientStateResponse = {
  typeUrl: "/ibc.core.channel.v1.QueryChannelClientStateResponse",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.identifiedClientState !== void 0) {
      import_client.IdentifiedClientState.encode(message.identifiedClientState, writer.uint32(10).fork()).ldelim();
    }
    if (message.proof.length !== 0) {
      writer.uint32(18).bytes(message.proof);
    }
    if (message.proofHeight !== void 0) {
      import_client.Height.encode(message.proofHeight, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryChannelClientStateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.identifiedClientState = import_client.IdentifiedClientState.decode(reader, reader.uint32());
          break;
        case 2:
          message.proof = reader.bytes();
          break;
        case 3:
          message.proofHeight = import_client.Height.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryChannelClientStateResponse();
    message.identifiedClientState = object.identifiedClientState !== void 0 && object.identifiedClientState !== null ? import_client.IdentifiedClientState.fromPartial(object.identifiedClientState) : void 0;
    message.proof = object.proof ?? new Uint8Array();
    message.proofHeight = object.proofHeight !== void 0 && object.proofHeight !== null ? import_client.Height.fromPartial(object.proofHeight) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryChannelClientStateResponse();
    if (object.identified_client_state !== void 0 && object.identified_client_state !== null) {
      message.identifiedClientState = import_client.IdentifiedClientState.fromAmino(object.identified_client_state);
    }
    if (object.proof !== void 0 && object.proof !== null) {
      message.proof = (0, import_helpers.bytesFromBase64)(object.proof);
    }
    if (object.proof_height !== void 0 && object.proof_height !== null) {
      message.proofHeight = import_client.Height.fromAmino(object.proof_height);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.identified_client_state = message.identifiedClientState ? import_client.IdentifiedClientState.toAmino(message.identifiedClientState) : void 0;
    obj.proof = message.proof ? (0, import_helpers.base64FromBytes)(message.proof) : void 0;
    obj.proof_height = message.proofHeight ? import_client.Height.toAmino(message.proofHeight) : {};
    return obj;
  },
  fromAminoMsg(object) {
    return QueryChannelClientStateResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryChannelClientStateResponse",
      value: QueryChannelClientStateResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryChannelClientStateResponse.decode(message.value);
  },
  toProto(message) {
    return QueryChannelClientStateResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.core.channel.v1.QueryChannelClientStateResponse",
      value: QueryChannelClientStateResponse.encode(message).finish()
    };
  }
};
function createBaseQueryChannelConsensusStateRequest() {
  return {
    portId: "",
    channelId: "",
    revisionNumber: BigInt(0),
    revisionHeight: BigInt(0)
  };
}
const QueryChannelConsensusStateRequest = {
  typeUrl: "/ibc.core.channel.v1.QueryChannelConsensusStateRequest",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    if (message.revisionNumber !== BigInt(0)) {
      writer.uint32(24).uint64(message.revisionNumber);
    }
    if (message.revisionHeight !== BigInt(0)) {
      writer.uint32(32).uint64(message.revisionHeight);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryChannelConsensusStateRequest();
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
          message.revisionNumber = reader.uint64();
          break;
        case 4:
          message.revisionHeight = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryChannelConsensusStateRequest();
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    message.revisionNumber = object.revisionNumber !== void 0 && object.revisionNumber !== null ? BigInt(object.revisionNumber.toString()) : BigInt(0);
    message.revisionHeight = object.revisionHeight !== void 0 && object.revisionHeight !== null ? BigInt(object.revisionHeight.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryChannelConsensusStateRequest();
    if (object.port_id !== void 0 && object.port_id !== null) {
      message.portId = object.port_id;
    }
    if (object.channel_id !== void 0 && object.channel_id !== null) {
      message.channelId = object.channel_id;
    }
    if (object.revision_number !== void 0 && object.revision_number !== null) {
      message.revisionNumber = BigInt(object.revision_number);
    }
    if (object.revision_height !== void 0 && object.revision_height !== null) {
      message.revisionHeight = BigInt(object.revision_height);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.port_id = message.portId === "" ? void 0 : message.portId;
    obj.channel_id = message.channelId === "" ? void 0 : message.channelId;
    obj.revision_number = message.revisionNumber !== BigInt(0) ? message.revisionNumber?.toString() : void 0;
    obj.revision_height = message.revisionHeight !== BigInt(0) ? message.revisionHeight?.toString() : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryChannelConsensusStateRequest.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryChannelConsensusStateRequest",
      value: QueryChannelConsensusStateRequest.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryChannelConsensusStateRequest.decode(message.value);
  },
  toProto(message) {
    return QueryChannelConsensusStateRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.core.channel.v1.QueryChannelConsensusStateRequest",
      value: QueryChannelConsensusStateRequest.encode(message).finish()
    };
  }
};
function createBaseQueryChannelConsensusStateResponse() {
  return {
    consensusState: void 0,
    clientId: "",
    proof: new Uint8Array(),
    proofHeight: import_client.Height.fromPartial({})
  };
}
const QueryChannelConsensusStateResponse = {
  typeUrl: "/ibc.core.channel.v1.QueryChannelConsensusStateResponse",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.consensusState !== void 0) {
      import_any.Any.encode(message.consensusState, writer.uint32(10).fork()).ldelim();
    }
    if (message.clientId !== "") {
      writer.uint32(18).string(message.clientId);
    }
    if (message.proof.length !== 0) {
      writer.uint32(26).bytes(message.proof);
    }
    if (message.proofHeight !== void 0) {
      import_client.Height.encode(message.proofHeight, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryChannelConsensusStateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.consensusState = import_any.Any.decode(reader, reader.uint32());
          break;
        case 2:
          message.clientId = reader.string();
          break;
        case 3:
          message.proof = reader.bytes();
          break;
        case 4:
          message.proofHeight = import_client.Height.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryChannelConsensusStateResponse();
    message.consensusState = object.consensusState !== void 0 && object.consensusState !== null ? import_any.Any.fromPartial(object.consensusState) : void 0;
    message.clientId = object.clientId ?? "";
    message.proof = object.proof ?? new Uint8Array();
    message.proofHeight = object.proofHeight !== void 0 && object.proofHeight !== null ? import_client.Height.fromPartial(object.proofHeight) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryChannelConsensusStateResponse();
    if (object.consensus_state !== void 0 && object.consensus_state !== null) {
      message.consensusState = import_any.Any.fromAmino(object.consensus_state);
    }
    if (object.client_id !== void 0 && object.client_id !== null) {
      message.clientId = object.client_id;
    }
    if (object.proof !== void 0 && object.proof !== null) {
      message.proof = (0, import_helpers.bytesFromBase64)(object.proof);
    }
    if (object.proof_height !== void 0 && object.proof_height !== null) {
      message.proofHeight = import_client.Height.fromAmino(object.proof_height);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.consensus_state = message.consensusState ? import_any.Any.toAmino(message.consensusState) : void 0;
    obj.client_id = message.clientId === "" ? void 0 : message.clientId;
    obj.proof = message.proof ? (0, import_helpers.base64FromBytes)(message.proof) : void 0;
    obj.proof_height = message.proofHeight ? import_client.Height.toAmino(message.proofHeight) : {};
    return obj;
  },
  fromAminoMsg(object) {
    return QueryChannelConsensusStateResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryChannelConsensusStateResponse",
      value: QueryChannelConsensusStateResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryChannelConsensusStateResponse.decode(message.value);
  },
  toProto(message) {
    return QueryChannelConsensusStateResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.core.channel.v1.QueryChannelConsensusStateResponse",
      value: QueryChannelConsensusStateResponse.encode(message).finish()
    };
  }
};
function createBaseQueryPacketCommitmentRequest() {
  return {
    portId: "",
    channelId: "",
    sequence: BigInt(0)
  };
}
const QueryPacketCommitmentRequest = {
  typeUrl: "/ibc.core.channel.v1.QueryPacketCommitmentRequest",
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
    const message = createBaseQueryPacketCommitmentRequest();
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
    const message = createBaseQueryPacketCommitmentRequest();
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    message.sequence = object.sequence !== void 0 && object.sequence !== null ? BigInt(object.sequence.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryPacketCommitmentRequest();
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
    return QueryPacketCommitmentRequest.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryPacketCommitmentRequest",
      value: QueryPacketCommitmentRequest.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryPacketCommitmentRequest.decode(message.value);
  },
  toProto(message) {
    return QueryPacketCommitmentRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.core.channel.v1.QueryPacketCommitmentRequest",
      value: QueryPacketCommitmentRequest.encode(message).finish()
    };
  }
};
function createBaseQueryPacketCommitmentResponse() {
  return {
    commitment: new Uint8Array(),
    proof: new Uint8Array(),
    proofHeight: import_client.Height.fromPartial({})
  };
}
const QueryPacketCommitmentResponse = {
  typeUrl: "/ibc.core.channel.v1.QueryPacketCommitmentResponse",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.commitment.length !== 0) {
      writer.uint32(10).bytes(message.commitment);
    }
    if (message.proof.length !== 0) {
      writer.uint32(18).bytes(message.proof);
    }
    if (message.proofHeight !== void 0) {
      import_client.Height.encode(message.proofHeight, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryPacketCommitmentResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.commitment = reader.bytes();
          break;
        case 2:
          message.proof = reader.bytes();
          break;
        case 3:
          message.proofHeight = import_client.Height.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryPacketCommitmentResponse();
    message.commitment = object.commitment ?? new Uint8Array();
    message.proof = object.proof ?? new Uint8Array();
    message.proofHeight = object.proofHeight !== void 0 && object.proofHeight !== null ? import_client.Height.fromPartial(object.proofHeight) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryPacketCommitmentResponse();
    if (object.commitment !== void 0 && object.commitment !== null) {
      message.commitment = (0, import_helpers.bytesFromBase64)(object.commitment);
    }
    if (object.proof !== void 0 && object.proof !== null) {
      message.proof = (0, import_helpers.bytesFromBase64)(object.proof);
    }
    if (object.proof_height !== void 0 && object.proof_height !== null) {
      message.proofHeight = import_client.Height.fromAmino(object.proof_height);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.commitment = message.commitment ? (0, import_helpers.base64FromBytes)(message.commitment) : void 0;
    obj.proof = message.proof ? (0, import_helpers.base64FromBytes)(message.proof) : void 0;
    obj.proof_height = message.proofHeight ? import_client.Height.toAmino(message.proofHeight) : {};
    return obj;
  },
  fromAminoMsg(object) {
    return QueryPacketCommitmentResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryPacketCommitmentResponse",
      value: QueryPacketCommitmentResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryPacketCommitmentResponse.decode(message.value);
  },
  toProto(message) {
    return QueryPacketCommitmentResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.core.channel.v1.QueryPacketCommitmentResponse",
      value: QueryPacketCommitmentResponse.encode(message).finish()
    };
  }
};
function createBaseQueryPacketCommitmentsRequest() {
  return {
    portId: "",
    channelId: "",
    pagination: void 0
  };
}
const QueryPacketCommitmentsRequest = {
  typeUrl: "/ibc.core.channel.v1.QueryPacketCommitmentsRequest",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    if (message.pagination !== void 0) {
      import_pagination.PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryPacketCommitmentsRequest();
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
          message.pagination = import_pagination.PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryPacketCommitmentsRequest();
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? import_pagination.PageRequest.fromPartial(object.pagination) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryPacketCommitmentsRequest();
    if (object.port_id !== void 0 && object.port_id !== null) {
      message.portId = object.port_id;
    }
    if (object.channel_id !== void 0 && object.channel_id !== null) {
      message.channelId = object.channel_id;
    }
    if (object.pagination !== void 0 && object.pagination !== null) {
      message.pagination = import_pagination.PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.port_id = message.portId === "" ? void 0 : message.portId;
    obj.channel_id = message.channelId === "" ? void 0 : message.channelId;
    obj.pagination = message.pagination ? import_pagination.PageRequest.toAmino(message.pagination) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryPacketCommitmentsRequest.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryPacketCommitmentsRequest",
      value: QueryPacketCommitmentsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryPacketCommitmentsRequest.decode(message.value);
  },
  toProto(message) {
    return QueryPacketCommitmentsRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.core.channel.v1.QueryPacketCommitmentsRequest",
      value: QueryPacketCommitmentsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryPacketCommitmentsResponse() {
  return {
    commitments: [],
    pagination: void 0,
    height: import_client.Height.fromPartial({})
  };
}
const QueryPacketCommitmentsResponse = {
  typeUrl: "/ibc.core.channel.v1.QueryPacketCommitmentsResponse",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    for (const v of message.commitments) {
      import_channel.PacketState.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== void 0) {
      import_pagination.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    if (message.height !== void 0) {
      import_client.Height.encode(message.height, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryPacketCommitmentsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.commitments.push(import_channel.PacketState.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = import_pagination.PageResponse.decode(reader, reader.uint32());
          break;
        case 3:
          message.height = import_client.Height.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryPacketCommitmentsResponse();
    message.commitments = object.commitments?.map((e) => import_channel.PacketState.fromPartial(e)) || [];
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? import_pagination.PageResponse.fromPartial(object.pagination) : void 0;
    message.height = object.height !== void 0 && object.height !== null ? import_client.Height.fromPartial(object.height) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryPacketCommitmentsResponse();
    message.commitments = object.commitments?.map((e) => import_channel.PacketState.fromAmino(e)) || [];
    if (object.pagination !== void 0 && object.pagination !== null) {
      message.pagination = import_pagination.PageResponse.fromAmino(object.pagination);
    }
    if (object.height !== void 0 && object.height !== null) {
      message.height = import_client.Height.fromAmino(object.height);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.commitments) {
      obj.commitments = message.commitments.map((e) => e ? import_channel.PacketState.toAmino(e) : void 0);
    } else {
      obj.commitments = message.commitments;
    }
    obj.pagination = message.pagination ? import_pagination.PageResponse.toAmino(message.pagination) : void 0;
    obj.height = message.height ? import_client.Height.toAmino(message.height) : {};
    return obj;
  },
  fromAminoMsg(object) {
    return QueryPacketCommitmentsResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryPacketCommitmentsResponse",
      value: QueryPacketCommitmentsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryPacketCommitmentsResponse.decode(message.value);
  },
  toProto(message) {
    return QueryPacketCommitmentsResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.core.channel.v1.QueryPacketCommitmentsResponse",
      value: QueryPacketCommitmentsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryPacketReceiptRequest() {
  return {
    portId: "",
    channelId: "",
    sequence: BigInt(0)
  };
}
const QueryPacketReceiptRequest = {
  typeUrl: "/ibc.core.channel.v1.QueryPacketReceiptRequest",
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
    const message = createBaseQueryPacketReceiptRequest();
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
    const message = createBaseQueryPacketReceiptRequest();
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    message.sequence = object.sequence !== void 0 && object.sequence !== null ? BigInt(object.sequence.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryPacketReceiptRequest();
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
    return QueryPacketReceiptRequest.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryPacketReceiptRequest",
      value: QueryPacketReceiptRequest.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryPacketReceiptRequest.decode(message.value);
  },
  toProto(message) {
    return QueryPacketReceiptRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.core.channel.v1.QueryPacketReceiptRequest",
      value: QueryPacketReceiptRequest.encode(message).finish()
    };
  }
};
function createBaseQueryPacketReceiptResponse() {
  return {
    received: false,
    proof: new Uint8Array(),
    proofHeight: import_client.Height.fromPartial({})
  };
}
const QueryPacketReceiptResponse = {
  typeUrl: "/ibc.core.channel.v1.QueryPacketReceiptResponse",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.received === true) {
      writer.uint32(16).bool(message.received);
    }
    if (message.proof.length !== 0) {
      writer.uint32(26).bytes(message.proof);
    }
    if (message.proofHeight !== void 0) {
      import_client.Height.encode(message.proofHeight, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryPacketReceiptResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.received = reader.bool();
          break;
        case 3:
          message.proof = reader.bytes();
          break;
        case 4:
          message.proofHeight = import_client.Height.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryPacketReceiptResponse();
    message.received = object.received ?? false;
    message.proof = object.proof ?? new Uint8Array();
    message.proofHeight = object.proofHeight !== void 0 && object.proofHeight !== null ? import_client.Height.fromPartial(object.proofHeight) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryPacketReceiptResponse();
    if (object.received !== void 0 && object.received !== null) {
      message.received = object.received;
    }
    if (object.proof !== void 0 && object.proof !== null) {
      message.proof = (0, import_helpers.bytesFromBase64)(object.proof);
    }
    if (object.proof_height !== void 0 && object.proof_height !== null) {
      message.proofHeight = import_client.Height.fromAmino(object.proof_height);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.received = message.received === false ? void 0 : message.received;
    obj.proof = message.proof ? (0, import_helpers.base64FromBytes)(message.proof) : void 0;
    obj.proof_height = message.proofHeight ? import_client.Height.toAmino(message.proofHeight) : {};
    return obj;
  },
  fromAminoMsg(object) {
    return QueryPacketReceiptResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryPacketReceiptResponse",
      value: QueryPacketReceiptResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryPacketReceiptResponse.decode(message.value);
  },
  toProto(message) {
    return QueryPacketReceiptResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.core.channel.v1.QueryPacketReceiptResponse",
      value: QueryPacketReceiptResponse.encode(message).finish()
    };
  }
};
function createBaseQueryPacketAcknowledgementRequest() {
  return {
    portId: "",
    channelId: "",
    sequence: BigInt(0)
  };
}
const QueryPacketAcknowledgementRequest = {
  typeUrl: "/ibc.core.channel.v1.QueryPacketAcknowledgementRequest",
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
    const message = createBaseQueryPacketAcknowledgementRequest();
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
    const message = createBaseQueryPacketAcknowledgementRequest();
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    message.sequence = object.sequence !== void 0 && object.sequence !== null ? BigInt(object.sequence.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryPacketAcknowledgementRequest();
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
    return QueryPacketAcknowledgementRequest.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryPacketAcknowledgementRequest",
      value: QueryPacketAcknowledgementRequest.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryPacketAcknowledgementRequest.decode(message.value);
  },
  toProto(message) {
    return QueryPacketAcknowledgementRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.core.channel.v1.QueryPacketAcknowledgementRequest",
      value: QueryPacketAcknowledgementRequest.encode(message).finish()
    };
  }
};
function createBaseQueryPacketAcknowledgementResponse() {
  return {
    acknowledgement: new Uint8Array(),
    proof: new Uint8Array(),
    proofHeight: import_client.Height.fromPartial({})
  };
}
const QueryPacketAcknowledgementResponse = {
  typeUrl: "/ibc.core.channel.v1.QueryPacketAcknowledgementResponse",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.acknowledgement.length !== 0) {
      writer.uint32(10).bytes(message.acknowledgement);
    }
    if (message.proof.length !== 0) {
      writer.uint32(18).bytes(message.proof);
    }
    if (message.proofHeight !== void 0) {
      import_client.Height.encode(message.proofHeight, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryPacketAcknowledgementResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.acknowledgement = reader.bytes();
          break;
        case 2:
          message.proof = reader.bytes();
          break;
        case 3:
          message.proofHeight = import_client.Height.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryPacketAcknowledgementResponse();
    message.acknowledgement = object.acknowledgement ?? new Uint8Array();
    message.proof = object.proof ?? new Uint8Array();
    message.proofHeight = object.proofHeight !== void 0 && object.proofHeight !== null ? import_client.Height.fromPartial(object.proofHeight) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryPacketAcknowledgementResponse();
    if (object.acknowledgement !== void 0 && object.acknowledgement !== null) {
      message.acknowledgement = (0, import_helpers.bytesFromBase64)(object.acknowledgement);
    }
    if (object.proof !== void 0 && object.proof !== null) {
      message.proof = (0, import_helpers.bytesFromBase64)(object.proof);
    }
    if (object.proof_height !== void 0 && object.proof_height !== null) {
      message.proofHeight = import_client.Height.fromAmino(object.proof_height);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.acknowledgement = message.acknowledgement ? (0, import_helpers.base64FromBytes)(message.acknowledgement) : void 0;
    obj.proof = message.proof ? (0, import_helpers.base64FromBytes)(message.proof) : void 0;
    obj.proof_height = message.proofHeight ? import_client.Height.toAmino(message.proofHeight) : {};
    return obj;
  },
  fromAminoMsg(object) {
    return QueryPacketAcknowledgementResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryPacketAcknowledgementResponse",
      value: QueryPacketAcknowledgementResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryPacketAcknowledgementResponse.decode(message.value);
  },
  toProto(message) {
    return QueryPacketAcknowledgementResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.core.channel.v1.QueryPacketAcknowledgementResponse",
      value: QueryPacketAcknowledgementResponse.encode(message).finish()
    };
  }
};
function createBaseQueryPacketAcknowledgementsRequest() {
  return {
    portId: "",
    channelId: "",
    pagination: void 0,
    packetCommitmentSequences: []
  };
}
const QueryPacketAcknowledgementsRequest = {
  typeUrl: "/ibc.core.channel.v1.QueryPacketAcknowledgementsRequest",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    if (message.pagination !== void 0) {
      import_pagination.PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    writer.uint32(34).fork();
    for (const v of message.packetCommitmentSequences) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryPacketAcknowledgementsRequest();
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
          message.pagination = import_pagination.PageRequest.decode(reader, reader.uint32());
          break;
        case 4:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.packetCommitmentSequences.push(reader.uint64());
            }
          } else {
            message.packetCommitmentSequences.push(reader.uint64());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryPacketAcknowledgementsRequest();
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? import_pagination.PageRequest.fromPartial(object.pagination) : void 0;
    message.packetCommitmentSequences = object.packetCommitmentSequences?.map((e) => BigInt(e.toString())) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryPacketAcknowledgementsRequest();
    if (object.port_id !== void 0 && object.port_id !== null) {
      message.portId = object.port_id;
    }
    if (object.channel_id !== void 0 && object.channel_id !== null) {
      message.channelId = object.channel_id;
    }
    if (object.pagination !== void 0 && object.pagination !== null) {
      message.pagination = import_pagination.PageRequest.fromAmino(object.pagination);
    }
    message.packetCommitmentSequences = object.packet_commitment_sequences?.map((e) => BigInt(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.port_id = message.portId === "" ? void 0 : message.portId;
    obj.channel_id = message.channelId === "" ? void 0 : message.channelId;
    obj.pagination = message.pagination ? import_pagination.PageRequest.toAmino(message.pagination) : void 0;
    if (message.packetCommitmentSequences) {
      obj.packet_commitment_sequences = message.packetCommitmentSequences.map((e) => e.toString());
    } else {
      obj.packet_commitment_sequences = message.packetCommitmentSequences;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return QueryPacketAcknowledgementsRequest.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryPacketAcknowledgementsRequest",
      value: QueryPacketAcknowledgementsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryPacketAcknowledgementsRequest.decode(message.value);
  },
  toProto(message) {
    return QueryPacketAcknowledgementsRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.core.channel.v1.QueryPacketAcknowledgementsRequest",
      value: QueryPacketAcknowledgementsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryPacketAcknowledgementsResponse() {
  return {
    acknowledgements: [],
    pagination: void 0,
    height: import_client.Height.fromPartial({})
  };
}
const QueryPacketAcknowledgementsResponse = {
  typeUrl: "/ibc.core.channel.v1.QueryPacketAcknowledgementsResponse",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    for (const v of message.acknowledgements) {
      import_channel.PacketState.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== void 0) {
      import_pagination.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    if (message.height !== void 0) {
      import_client.Height.encode(message.height, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryPacketAcknowledgementsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.acknowledgements.push(import_channel.PacketState.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = import_pagination.PageResponse.decode(reader, reader.uint32());
          break;
        case 3:
          message.height = import_client.Height.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryPacketAcknowledgementsResponse();
    message.acknowledgements = object.acknowledgements?.map((e) => import_channel.PacketState.fromPartial(e)) || [];
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? import_pagination.PageResponse.fromPartial(object.pagination) : void 0;
    message.height = object.height !== void 0 && object.height !== null ? import_client.Height.fromPartial(object.height) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryPacketAcknowledgementsResponse();
    message.acknowledgements = object.acknowledgements?.map((e) => import_channel.PacketState.fromAmino(e)) || [];
    if (object.pagination !== void 0 && object.pagination !== null) {
      message.pagination = import_pagination.PageResponse.fromAmino(object.pagination);
    }
    if (object.height !== void 0 && object.height !== null) {
      message.height = import_client.Height.fromAmino(object.height);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.acknowledgements) {
      obj.acknowledgements = message.acknowledgements.map((e) => e ? import_channel.PacketState.toAmino(e) : void 0);
    } else {
      obj.acknowledgements = message.acknowledgements;
    }
    obj.pagination = message.pagination ? import_pagination.PageResponse.toAmino(message.pagination) : void 0;
    obj.height = message.height ? import_client.Height.toAmino(message.height) : {};
    return obj;
  },
  fromAminoMsg(object) {
    return QueryPacketAcknowledgementsResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryPacketAcknowledgementsResponse",
      value: QueryPacketAcknowledgementsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryPacketAcknowledgementsResponse.decode(message.value);
  },
  toProto(message) {
    return QueryPacketAcknowledgementsResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.core.channel.v1.QueryPacketAcknowledgementsResponse",
      value: QueryPacketAcknowledgementsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryUnreceivedPacketsRequest() {
  return {
    portId: "",
    channelId: "",
    packetCommitmentSequences: []
  };
}
const QueryUnreceivedPacketsRequest = {
  typeUrl: "/ibc.core.channel.v1.QueryUnreceivedPacketsRequest",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    writer.uint32(26).fork();
    for (const v of message.packetCommitmentSequences) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryUnreceivedPacketsRequest();
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
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.packetCommitmentSequences.push(reader.uint64());
            }
          } else {
            message.packetCommitmentSequences.push(reader.uint64());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryUnreceivedPacketsRequest();
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    message.packetCommitmentSequences = object.packetCommitmentSequences?.map((e) => BigInt(e.toString())) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryUnreceivedPacketsRequest();
    if (object.port_id !== void 0 && object.port_id !== null) {
      message.portId = object.port_id;
    }
    if (object.channel_id !== void 0 && object.channel_id !== null) {
      message.channelId = object.channel_id;
    }
    message.packetCommitmentSequences = object.packet_commitment_sequences?.map((e) => BigInt(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.port_id = message.portId === "" ? void 0 : message.portId;
    obj.channel_id = message.channelId === "" ? void 0 : message.channelId;
    if (message.packetCommitmentSequences) {
      obj.packet_commitment_sequences = message.packetCommitmentSequences.map((e) => e.toString());
    } else {
      obj.packet_commitment_sequences = message.packetCommitmentSequences;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return QueryUnreceivedPacketsRequest.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryUnreceivedPacketsRequest",
      value: QueryUnreceivedPacketsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryUnreceivedPacketsRequest.decode(message.value);
  },
  toProto(message) {
    return QueryUnreceivedPacketsRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.core.channel.v1.QueryUnreceivedPacketsRequest",
      value: QueryUnreceivedPacketsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryUnreceivedPacketsResponse() {
  return {
    sequences: [],
    height: import_client.Height.fromPartial({})
  };
}
const QueryUnreceivedPacketsResponse = {
  typeUrl: "/ibc.core.channel.v1.QueryUnreceivedPacketsResponse",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    writer.uint32(10).fork();
    for (const v of message.sequences) {
      writer.uint64(v);
    }
    writer.ldelim();
    if (message.height !== void 0) {
      import_client.Height.encode(message.height, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryUnreceivedPacketsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.sequences.push(reader.uint64());
            }
          } else {
            message.sequences.push(reader.uint64());
          }
          break;
        case 2:
          message.height = import_client.Height.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryUnreceivedPacketsResponse();
    message.sequences = object.sequences?.map((e) => BigInt(e.toString())) || [];
    message.height = object.height !== void 0 && object.height !== null ? import_client.Height.fromPartial(object.height) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryUnreceivedPacketsResponse();
    message.sequences = object.sequences?.map((e) => BigInt(e)) || [];
    if (object.height !== void 0 && object.height !== null) {
      message.height = import_client.Height.fromAmino(object.height);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.sequences) {
      obj.sequences = message.sequences.map((e) => e.toString());
    } else {
      obj.sequences = message.sequences;
    }
    obj.height = message.height ? import_client.Height.toAmino(message.height) : {};
    return obj;
  },
  fromAminoMsg(object) {
    return QueryUnreceivedPacketsResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryUnreceivedPacketsResponse",
      value: QueryUnreceivedPacketsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryUnreceivedPacketsResponse.decode(message.value);
  },
  toProto(message) {
    return QueryUnreceivedPacketsResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.core.channel.v1.QueryUnreceivedPacketsResponse",
      value: QueryUnreceivedPacketsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryUnreceivedAcksRequest() {
  return {
    portId: "",
    channelId: "",
    packetAckSequences: []
  };
}
const QueryUnreceivedAcksRequest = {
  typeUrl: "/ibc.core.channel.v1.QueryUnreceivedAcksRequest",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    writer.uint32(26).fork();
    for (const v of message.packetAckSequences) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryUnreceivedAcksRequest();
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
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.packetAckSequences.push(reader.uint64());
            }
          } else {
            message.packetAckSequences.push(reader.uint64());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryUnreceivedAcksRequest();
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    message.packetAckSequences = object.packetAckSequences?.map((e) => BigInt(e.toString())) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryUnreceivedAcksRequest();
    if (object.port_id !== void 0 && object.port_id !== null) {
      message.portId = object.port_id;
    }
    if (object.channel_id !== void 0 && object.channel_id !== null) {
      message.channelId = object.channel_id;
    }
    message.packetAckSequences = object.packet_ack_sequences?.map((e) => BigInt(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.port_id = message.portId === "" ? void 0 : message.portId;
    obj.channel_id = message.channelId === "" ? void 0 : message.channelId;
    if (message.packetAckSequences) {
      obj.packet_ack_sequences = message.packetAckSequences.map((e) => e.toString());
    } else {
      obj.packet_ack_sequences = message.packetAckSequences;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return QueryUnreceivedAcksRequest.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryUnreceivedAcksRequest",
      value: QueryUnreceivedAcksRequest.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryUnreceivedAcksRequest.decode(message.value);
  },
  toProto(message) {
    return QueryUnreceivedAcksRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.core.channel.v1.QueryUnreceivedAcksRequest",
      value: QueryUnreceivedAcksRequest.encode(message).finish()
    };
  }
};
function createBaseQueryUnreceivedAcksResponse() {
  return {
    sequences: [],
    height: import_client.Height.fromPartial({})
  };
}
const QueryUnreceivedAcksResponse = {
  typeUrl: "/ibc.core.channel.v1.QueryUnreceivedAcksResponse",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    writer.uint32(10).fork();
    for (const v of message.sequences) {
      writer.uint64(v);
    }
    writer.ldelim();
    if (message.height !== void 0) {
      import_client.Height.encode(message.height, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryUnreceivedAcksResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.sequences.push(reader.uint64());
            }
          } else {
            message.sequences.push(reader.uint64());
          }
          break;
        case 2:
          message.height = import_client.Height.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryUnreceivedAcksResponse();
    message.sequences = object.sequences?.map((e) => BigInt(e.toString())) || [];
    message.height = object.height !== void 0 && object.height !== null ? import_client.Height.fromPartial(object.height) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryUnreceivedAcksResponse();
    message.sequences = object.sequences?.map((e) => BigInt(e)) || [];
    if (object.height !== void 0 && object.height !== null) {
      message.height = import_client.Height.fromAmino(object.height);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.sequences) {
      obj.sequences = message.sequences.map((e) => e.toString());
    } else {
      obj.sequences = message.sequences;
    }
    obj.height = message.height ? import_client.Height.toAmino(message.height) : {};
    return obj;
  },
  fromAminoMsg(object) {
    return QueryUnreceivedAcksResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryUnreceivedAcksResponse",
      value: QueryUnreceivedAcksResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryUnreceivedAcksResponse.decode(message.value);
  },
  toProto(message) {
    return QueryUnreceivedAcksResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.core.channel.v1.QueryUnreceivedAcksResponse",
      value: QueryUnreceivedAcksResponse.encode(message).finish()
    };
  }
};
function createBaseQueryNextSequenceReceiveRequest() {
  return {
    portId: "",
    channelId: ""
  };
}
const QueryNextSequenceReceiveRequest = {
  typeUrl: "/ibc.core.channel.v1.QueryNextSequenceReceiveRequest",
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
    const message = createBaseQueryNextSequenceReceiveRequest();
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
    const message = createBaseQueryNextSequenceReceiveRequest();
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryNextSequenceReceiveRequest();
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
    return QueryNextSequenceReceiveRequest.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryNextSequenceReceiveRequest",
      value: QueryNextSequenceReceiveRequest.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryNextSequenceReceiveRequest.decode(message.value);
  },
  toProto(message) {
    return QueryNextSequenceReceiveRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.core.channel.v1.QueryNextSequenceReceiveRequest",
      value: QueryNextSequenceReceiveRequest.encode(message).finish()
    };
  }
};
function createBaseQueryNextSequenceReceiveResponse() {
  return {
    nextSequenceReceive: BigInt(0),
    proof: new Uint8Array(),
    proofHeight: import_client.Height.fromPartial({})
  };
}
const QueryNextSequenceReceiveResponse = {
  typeUrl: "/ibc.core.channel.v1.QueryNextSequenceReceiveResponse",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.nextSequenceReceive !== BigInt(0)) {
      writer.uint32(8).uint64(message.nextSequenceReceive);
    }
    if (message.proof.length !== 0) {
      writer.uint32(18).bytes(message.proof);
    }
    if (message.proofHeight !== void 0) {
      import_client.Height.encode(message.proofHeight, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryNextSequenceReceiveResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nextSequenceReceive = reader.uint64();
          break;
        case 2:
          message.proof = reader.bytes();
          break;
        case 3:
          message.proofHeight = import_client.Height.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryNextSequenceReceiveResponse();
    message.nextSequenceReceive = object.nextSequenceReceive !== void 0 && object.nextSequenceReceive !== null ? BigInt(object.nextSequenceReceive.toString()) : BigInt(0);
    message.proof = object.proof ?? new Uint8Array();
    message.proofHeight = object.proofHeight !== void 0 && object.proofHeight !== null ? import_client.Height.fromPartial(object.proofHeight) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryNextSequenceReceiveResponse();
    if (object.next_sequence_receive !== void 0 && object.next_sequence_receive !== null) {
      message.nextSequenceReceive = BigInt(object.next_sequence_receive);
    }
    if (object.proof !== void 0 && object.proof !== null) {
      message.proof = (0, import_helpers.bytesFromBase64)(object.proof);
    }
    if (object.proof_height !== void 0 && object.proof_height !== null) {
      message.proofHeight = import_client.Height.fromAmino(object.proof_height);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.next_sequence_receive = message.nextSequenceReceive !== BigInt(0) ? message.nextSequenceReceive?.toString() : void 0;
    obj.proof = message.proof ? (0, import_helpers.base64FromBytes)(message.proof) : void 0;
    obj.proof_height = message.proofHeight ? import_client.Height.toAmino(message.proofHeight) : {};
    return obj;
  },
  fromAminoMsg(object) {
    return QueryNextSequenceReceiveResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryNextSequenceReceiveResponse",
      value: QueryNextSequenceReceiveResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryNextSequenceReceiveResponse.decode(message.value);
  },
  toProto(message) {
    return QueryNextSequenceReceiveResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.core.channel.v1.QueryNextSequenceReceiveResponse",
      value: QueryNextSequenceReceiveResponse.encode(message).finish()
    };
  }
};
// Proper CommonJS exports for dynamic imports
module.exports = {
  QueryChannelClientStateRequest,
  QueryChannelClientStateResponse,
  QueryChannelConsensusStateRequest,
  QueryChannelConsensusStateResponse,
  QueryChannelRequest,
  QueryChannelResponse,
  QueryChannelsRequest,
  QueryChannelsResponse,
  QueryConnectionChannelsRequest,
  QueryConnectionChannelsResponse,
  QueryNextSequenceReceiveRequest,
  QueryNextSequenceReceiveResponse,
  QueryPacketAcknowledgementRequest,
  QueryPacketAcknowledgementResponse,
  QueryPacketAcknowledgementsRequest,
  QueryPacketAcknowledgementsResponse,
  QueryPacketCommitmentRequest,
  QueryPacketCommitmentResponse,
  QueryPacketCommitmentsRequest,
  QueryPacketCommitmentsResponse,
  QueryPacketReceiptRequest,
  QueryPacketReceiptResponse,
  QueryUnreceivedAcksRequest,
  QueryUnreceivedAcksResponse,
  QueryUnreceivedPacketsRequest,
  QueryUnreceivedPacketsResponse
};
