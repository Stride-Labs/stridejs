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
  QueryClientConnectionsRequest: () => QueryClientConnectionsRequest,
  QueryClientConnectionsResponse: () => QueryClientConnectionsResponse,
  QueryConnectionClientStateRequest: () => QueryConnectionClientStateRequest,
  QueryConnectionClientStateResponse: () => QueryConnectionClientStateResponse,
  QueryConnectionConsensusStateRequest: () => QueryConnectionConsensusStateRequest,
  QueryConnectionConsensusStateResponse: () => QueryConnectionConsensusStateResponse,
  QueryConnectionParamsRequest: () => QueryConnectionParamsRequest,
  QueryConnectionParamsResponse: () => QueryConnectionParamsResponse,
  QueryConnectionRequest: () => QueryConnectionRequest,
  QueryConnectionResponse: () => QueryConnectionResponse,
  QueryConnectionsRequest: () => QueryConnectionsRequest,
  QueryConnectionsResponse: () => QueryConnectionsResponse
});
module.exports = __toCommonJS(query_exports);
var import_pagination = require("../../../../cosmos/base/query/v1beta1/pagination");
var import_connection = require("./connection");
var import_client = require("../../client/v1/client");
var import_any = require("../../../../google/protobuf/any");
var import_binary = require("../../../../binary");
var import_helpers = require("../../../../helpers");
function createBaseQueryConnectionRequest() {
  return {
    connectionId: ""
  };
}
const QueryConnectionRequest = {
  typeUrl: "/ibc.core.connection.v1.QueryConnectionRequest",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.connectionId !== "") {
      writer.uint32(10).string(message.connectionId);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryConnectionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.connectionId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryConnectionRequest();
    message.connectionId = object.connectionId ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryConnectionRequest();
    if (object.connection_id !== void 0 && object.connection_id !== null) {
      message.connectionId = object.connection_id;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.connection_id = message.connectionId === "" ? void 0 : message.connectionId;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryConnectionRequest.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryConnectionRequest",
      value: QueryConnectionRequest.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryConnectionRequest.decode(message.value);
  },
  toProto(message) {
    return QueryConnectionRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.core.connection.v1.QueryConnectionRequest",
      value: QueryConnectionRequest.encode(message).finish()
    };
  }
};
function createBaseQueryConnectionResponse() {
  return {
    connection: void 0,
    proof: new Uint8Array(),
    proofHeight: import_client.Height.fromPartial({})
  };
}
const QueryConnectionResponse = {
  typeUrl: "/ibc.core.connection.v1.QueryConnectionResponse",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.connection !== void 0) {
      import_connection.ConnectionEnd.encode(message.connection, writer.uint32(10).fork()).ldelim();
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
    const message = createBaseQueryConnectionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.connection = import_connection.ConnectionEnd.decode(reader, reader.uint32());
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
    const message = createBaseQueryConnectionResponse();
    message.connection = object.connection !== void 0 && object.connection !== null ? import_connection.ConnectionEnd.fromPartial(object.connection) : void 0;
    message.proof = object.proof ?? new Uint8Array();
    message.proofHeight = object.proofHeight !== void 0 && object.proofHeight !== null ? import_client.Height.fromPartial(object.proofHeight) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryConnectionResponse();
    if (object.connection !== void 0 && object.connection !== null) {
      message.connection = import_connection.ConnectionEnd.fromAmino(object.connection);
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
    obj.connection = message.connection ? import_connection.ConnectionEnd.toAmino(message.connection) : void 0;
    obj.proof = message.proof ? (0, import_helpers.base64FromBytes)(message.proof) : void 0;
    obj.proof_height = message.proofHeight ? import_client.Height.toAmino(message.proofHeight) : {};
    return obj;
  },
  fromAminoMsg(object) {
    return QueryConnectionResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryConnectionResponse",
      value: QueryConnectionResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryConnectionResponse.decode(message.value);
  },
  toProto(message) {
    return QueryConnectionResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.core.connection.v1.QueryConnectionResponse",
      value: QueryConnectionResponse.encode(message).finish()
    };
  }
};
function createBaseQueryConnectionsRequest() {
  return {
    pagination: void 0
  };
}
const QueryConnectionsRequest = {
  typeUrl: "/ibc.core.connection.v1.QueryConnectionsRequest",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.pagination !== void 0) {
      import_pagination.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryConnectionsRequest();
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
    const message = createBaseQueryConnectionsRequest();
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? import_pagination.PageRequest.fromPartial(object.pagination) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryConnectionsRequest();
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
    return QueryConnectionsRequest.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryConnectionsRequest",
      value: QueryConnectionsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryConnectionsRequest.decode(message.value);
  },
  toProto(message) {
    return QueryConnectionsRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.core.connection.v1.QueryConnectionsRequest",
      value: QueryConnectionsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryConnectionsResponse() {
  return {
    connections: [],
    pagination: void 0,
    height: import_client.Height.fromPartial({})
  };
}
const QueryConnectionsResponse = {
  typeUrl: "/ibc.core.connection.v1.QueryConnectionsResponse",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    for (const v of message.connections) {
      import_connection.IdentifiedConnection.encode(v, writer.uint32(10).fork()).ldelim();
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
    const message = createBaseQueryConnectionsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.connections.push(import_connection.IdentifiedConnection.decode(reader, reader.uint32()));
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
    const message = createBaseQueryConnectionsResponse();
    message.connections = object.connections?.map((e) => import_connection.IdentifiedConnection.fromPartial(e)) || [];
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? import_pagination.PageResponse.fromPartial(object.pagination) : void 0;
    message.height = object.height !== void 0 && object.height !== null ? import_client.Height.fromPartial(object.height) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryConnectionsResponse();
    message.connections = object.connections?.map((e) => import_connection.IdentifiedConnection.fromAmino(e)) || [];
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
    if (message.connections) {
      obj.connections = message.connections.map((e) => e ? import_connection.IdentifiedConnection.toAmino(e) : void 0);
    } else {
      obj.connections = message.connections;
    }
    obj.pagination = message.pagination ? import_pagination.PageResponse.toAmino(message.pagination) : void 0;
    obj.height = message.height ? import_client.Height.toAmino(message.height) : {};
    return obj;
  },
  fromAminoMsg(object) {
    return QueryConnectionsResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryConnectionsResponse",
      value: QueryConnectionsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryConnectionsResponse.decode(message.value);
  },
  toProto(message) {
    return QueryConnectionsResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.core.connection.v1.QueryConnectionsResponse",
      value: QueryConnectionsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryClientConnectionsRequest() {
  return {
    clientId: ""
  };
}
const QueryClientConnectionsRequest = {
  typeUrl: "/ibc.core.connection.v1.QueryClientConnectionsRequest",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryClientConnectionsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryClientConnectionsRequest();
    message.clientId = object.clientId ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryClientConnectionsRequest();
    if (object.client_id !== void 0 && object.client_id !== null) {
      message.clientId = object.client_id;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.client_id = message.clientId === "" ? void 0 : message.clientId;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryClientConnectionsRequest.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryClientConnectionsRequest",
      value: QueryClientConnectionsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryClientConnectionsRequest.decode(message.value);
  },
  toProto(message) {
    return QueryClientConnectionsRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.core.connection.v1.QueryClientConnectionsRequest",
      value: QueryClientConnectionsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryClientConnectionsResponse() {
  return {
    connectionPaths: [],
    proof: new Uint8Array(),
    proofHeight: import_client.Height.fromPartial({})
  };
}
const QueryClientConnectionsResponse = {
  typeUrl: "/ibc.core.connection.v1.QueryClientConnectionsResponse",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    for (const v of message.connectionPaths) {
      writer.uint32(10).string(v);
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
    const message = createBaseQueryClientConnectionsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.connectionPaths.push(reader.string());
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
    const message = createBaseQueryClientConnectionsResponse();
    message.connectionPaths = object.connectionPaths?.map((e) => e) || [];
    message.proof = object.proof ?? new Uint8Array();
    message.proofHeight = object.proofHeight !== void 0 && object.proofHeight !== null ? import_client.Height.fromPartial(object.proofHeight) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryClientConnectionsResponse();
    message.connectionPaths = object.connection_paths?.map((e) => e) || [];
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
    if (message.connectionPaths) {
      obj.connection_paths = message.connectionPaths.map((e) => e);
    } else {
      obj.connection_paths = message.connectionPaths;
    }
    obj.proof = message.proof ? (0, import_helpers.base64FromBytes)(message.proof) : void 0;
    obj.proof_height = message.proofHeight ? import_client.Height.toAmino(message.proofHeight) : {};
    return obj;
  },
  fromAminoMsg(object) {
    return QueryClientConnectionsResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryClientConnectionsResponse",
      value: QueryClientConnectionsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryClientConnectionsResponse.decode(message.value);
  },
  toProto(message) {
    return QueryClientConnectionsResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.core.connection.v1.QueryClientConnectionsResponse",
      value: QueryClientConnectionsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryConnectionClientStateRequest() {
  return {
    connectionId: ""
  };
}
const QueryConnectionClientStateRequest = {
  typeUrl: "/ibc.core.connection.v1.QueryConnectionClientStateRequest",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.connectionId !== "") {
      writer.uint32(10).string(message.connectionId);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryConnectionClientStateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.connectionId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryConnectionClientStateRequest();
    message.connectionId = object.connectionId ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryConnectionClientStateRequest();
    if (object.connection_id !== void 0 && object.connection_id !== null) {
      message.connectionId = object.connection_id;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.connection_id = message.connectionId === "" ? void 0 : message.connectionId;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryConnectionClientStateRequest.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryConnectionClientStateRequest",
      value: QueryConnectionClientStateRequest.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryConnectionClientStateRequest.decode(message.value);
  },
  toProto(message) {
    return QueryConnectionClientStateRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.core.connection.v1.QueryConnectionClientStateRequest",
      value: QueryConnectionClientStateRequest.encode(message).finish()
    };
  }
};
function createBaseQueryConnectionClientStateResponse() {
  return {
    identifiedClientState: void 0,
    proof: new Uint8Array(),
    proofHeight: import_client.Height.fromPartial({})
  };
}
const QueryConnectionClientStateResponse = {
  typeUrl: "/ibc.core.connection.v1.QueryConnectionClientStateResponse",
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
    const message = createBaseQueryConnectionClientStateResponse();
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
    const message = createBaseQueryConnectionClientStateResponse();
    message.identifiedClientState = object.identifiedClientState !== void 0 && object.identifiedClientState !== null ? import_client.IdentifiedClientState.fromPartial(object.identifiedClientState) : void 0;
    message.proof = object.proof ?? new Uint8Array();
    message.proofHeight = object.proofHeight !== void 0 && object.proofHeight !== null ? import_client.Height.fromPartial(object.proofHeight) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryConnectionClientStateResponse();
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
    return QueryConnectionClientStateResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryConnectionClientStateResponse",
      value: QueryConnectionClientStateResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryConnectionClientStateResponse.decode(message.value);
  },
  toProto(message) {
    return QueryConnectionClientStateResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.core.connection.v1.QueryConnectionClientStateResponse",
      value: QueryConnectionClientStateResponse.encode(message).finish()
    };
  }
};
function createBaseQueryConnectionConsensusStateRequest() {
  return {
    connectionId: "",
    revisionNumber: BigInt(0),
    revisionHeight: BigInt(0)
  };
}
const QueryConnectionConsensusStateRequest = {
  typeUrl: "/ibc.core.connection.v1.QueryConnectionConsensusStateRequest",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.connectionId !== "") {
      writer.uint32(10).string(message.connectionId);
    }
    if (message.revisionNumber !== BigInt(0)) {
      writer.uint32(16).uint64(message.revisionNumber);
    }
    if (message.revisionHeight !== BigInt(0)) {
      writer.uint32(24).uint64(message.revisionHeight);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryConnectionConsensusStateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.connectionId = reader.string();
          break;
        case 2:
          message.revisionNumber = reader.uint64();
          break;
        case 3:
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
    const message = createBaseQueryConnectionConsensusStateRequest();
    message.connectionId = object.connectionId ?? "";
    message.revisionNumber = object.revisionNumber !== void 0 && object.revisionNumber !== null ? BigInt(object.revisionNumber.toString()) : BigInt(0);
    message.revisionHeight = object.revisionHeight !== void 0 && object.revisionHeight !== null ? BigInt(object.revisionHeight.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryConnectionConsensusStateRequest();
    if (object.connection_id !== void 0 && object.connection_id !== null) {
      message.connectionId = object.connection_id;
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
    obj.connection_id = message.connectionId === "" ? void 0 : message.connectionId;
    obj.revision_number = message.revisionNumber !== BigInt(0) ? message.revisionNumber?.toString() : void 0;
    obj.revision_height = message.revisionHeight !== BigInt(0) ? message.revisionHeight?.toString() : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryConnectionConsensusStateRequest.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryConnectionConsensusStateRequest",
      value: QueryConnectionConsensusStateRequest.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryConnectionConsensusStateRequest.decode(message.value);
  },
  toProto(message) {
    return QueryConnectionConsensusStateRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.core.connection.v1.QueryConnectionConsensusStateRequest",
      value: QueryConnectionConsensusStateRequest.encode(message).finish()
    };
  }
};
function createBaseQueryConnectionConsensusStateResponse() {
  return {
    consensusState: void 0,
    clientId: "",
    proof: new Uint8Array(),
    proofHeight: import_client.Height.fromPartial({})
  };
}
const QueryConnectionConsensusStateResponse = {
  typeUrl: "/ibc.core.connection.v1.QueryConnectionConsensusStateResponse",
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
    const message = createBaseQueryConnectionConsensusStateResponse();
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
    const message = createBaseQueryConnectionConsensusStateResponse();
    message.consensusState = object.consensusState !== void 0 && object.consensusState !== null ? import_any.Any.fromPartial(object.consensusState) : void 0;
    message.clientId = object.clientId ?? "";
    message.proof = object.proof ?? new Uint8Array();
    message.proofHeight = object.proofHeight !== void 0 && object.proofHeight !== null ? import_client.Height.fromPartial(object.proofHeight) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryConnectionConsensusStateResponse();
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
    return QueryConnectionConsensusStateResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryConnectionConsensusStateResponse",
      value: QueryConnectionConsensusStateResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryConnectionConsensusStateResponse.decode(message.value);
  },
  toProto(message) {
    return QueryConnectionConsensusStateResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.core.connection.v1.QueryConnectionConsensusStateResponse",
      value: QueryConnectionConsensusStateResponse.encode(message).finish()
    };
  }
};
function createBaseQueryConnectionParamsRequest() {
  return {};
}
const QueryConnectionParamsRequest = {
  typeUrl: "/ibc.core.connection.v1.QueryConnectionParamsRequest",
  encode(_, writer = import_binary.BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryConnectionParamsRequest();
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
    const message = createBaseQueryConnectionParamsRequest();
    return message;
  },
  fromAmino(_) {
    const message = createBaseQueryConnectionParamsRequest();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return QueryConnectionParamsRequest.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryConnectionParamsRequest",
      value: QueryConnectionParamsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryConnectionParamsRequest.decode(message.value);
  },
  toProto(message) {
    return QueryConnectionParamsRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.core.connection.v1.QueryConnectionParamsRequest",
      value: QueryConnectionParamsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryConnectionParamsResponse() {
  return {
    params: void 0
  };
}
const QueryConnectionParamsResponse = {
  typeUrl: "/ibc.core.connection.v1.QueryConnectionParamsResponse",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.params !== void 0) {
      import_client.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryConnectionParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = import_client.Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryConnectionParamsResponse();
    message.params = object.params !== void 0 && object.params !== null ? import_client.Params.fromPartial(object.params) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryConnectionParamsResponse();
    if (object.params !== void 0 && object.params !== null) {
      message.params = import_client.Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.params = message.params ? import_client.Params.toAmino(message.params) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryConnectionParamsResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryConnectionParamsResponse",
      value: QueryConnectionParamsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryConnectionParamsResponse.decode(message.value);
  },
  toProto(message) {
    return QueryConnectionParamsResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.core.connection.v1.QueryConnectionParamsResponse",
      value: QueryConnectionParamsResponse.encode(message).finish()
    };
  }
};
// Proper CommonJS exports for dynamic imports
module.exports = {
  QueryClientConnectionsRequest,
  QueryClientConnectionsResponse,
  QueryConnectionClientStateRequest,
  QueryConnectionClientStateResponse,
  QueryConnectionConsensusStateRequest,
  QueryConnectionConsensusStateResponse,
  QueryConnectionParamsRequest,
  QueryConnectionParamsResponse,
  QueryConnectionRequest,
  QueryConnectionResponse,
  QueryConnectionsRequest,
  QueryConnectionsResponse
};
