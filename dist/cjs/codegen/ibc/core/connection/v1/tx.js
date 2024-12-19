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
  MsgConnectionOpenAck: () => MsgConnectionOpenAck,
  MsgConnectionOpenAckResponse: () => MsgConnectionOpenAckResponse,
  MsgConnectionOpenConfirm: () => MsgConnectionOpenConfirm,
  MsgConnectionOpenConfirmResponse: () => MsgConnectionOpenConfirmResponse,
  MsgConnectionOpenInit: () => MsgConnectionOpenInit,
  MsgConnectionOpenInitResponse: () => MsgConnectionOpenInitResponse,
  MsgConnectionOpenTry: () => MsgConnectionOpenTry,
  MsgConnectionOpenTryResponse: () => MsgConnectionOpenTryResponse
});
module.exports = __toCommonJS(tx_exports);
var import_connection = require("./connection");
var import_any = require("../../../../google/protobuf/any");
var import_client = require("../../client/v1/client");
var import_binary = require("../../../../binary");
var import_helpers = require("../../../../helpers");
function createBaseMsgConnectionOpenInit() {
  return {
    clientId: "",
    counterparty: import_connection.Counterparty.fromPartial({}),
    version: void 0,
    delayPeriod: BigInt(0),
    signer: ""
  };
}
const MsgConnectionOpenInit = {
  typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenInit",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }
    if (message.counterparty !== void 0) {
      import_connection.Counterparty.encode(message.counterparty, writer.uint32(18).fork()).ldelim();
    }
    if (message.version !== void 0) {
      import_connection.Version.encode(message.version, writer.uint32(26).fork()).ldelim();
    }
    if (message.delayPeriod !== BigInt(0)) {
      writer.uint32(32).uint64(message.delayPeriod);
    }
    if (message.signer !== "") {
      writer.uint32(42).string(message.signer);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgConnectionOpenInit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;
        case 2:
          message.counterparty = import_connection.Counterparty.decode(reader, reader.uint32());
          break;
        case 3:
          message.version = import_connection.Version.decode(reader, reader.uint32());
          break;
        case 4:
          message.delayPeriod = reader.uint64();
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
    const message = createBaseMsgConnectionOpenInit();
    message.clientId = object.clientId ?? "";
    message.counterparty = object.counterparty !== void 0 && object.counterparty !== null ? import_connection.Counterparty.fromPartial(object.counterparty) : void 0;
    message.version = object.version !== void 0 && object.version !== null ? import_connection.Version.fromPartial(object.version) : void 0;
    message.delayPeriod = object.delayPeriod !== void 0 && object.delayPeriod !== null ? BigInt(object.delayPeriod.toString()) : BigInt(0);
    message.signer = object.signer ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgConnectionOpenInit();
    if (object.client_id !== void 0 && object.client_id !== null) {
      message.clientId = object.client_id;
    }
    if (object.counterparty !== void 0 && object.counterparty !== null) {
      message.counterparty = import_connection.Counterparty.fromAmino(object.counterparty);
    }
    if (object.version !== void 0 && object.version !== null) {
      message.version = import_connection.Version.fromAmino(object.version);
    }
    if (object.delay_period !== void 0 && object.delay_period !== null) {
      message.delayPeriod = BigInt(object.delay_period);
    }
    if (object.signer !== void 0 && object.signer !== null) {
      message.signer = object.signer;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.client_id = message.clientId === "" ? void 0 : message.clientId;
    obj.counterparty = message.counterparty ? import_connection.Counterparty.toAmino(message.counterparty) : void 0;
    obj.version = message.version ? import_connection.Version.toAmino(message.version) : void 0;
    obj.delay_period = message.delayPeriod !== BigInt(0) ? message.delayPeriod.toString() : void 0;
    obj.signer = message.signer === "" ? void 0 : message.signer;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgConnectionOpenInit.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgConnectionOpenInit",
      value: MsgConnectionOpenInit.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgConnectionOpenInit.decode(message.value);
  },
  toProto(message) {
    return MsgConnectionOpenInit.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenInit",
      value: MsgConnectionOpenInit.encode(message).finish()
    };
  }
};
function createBaseMsgConnectionOpenInitResponse() {
  return {};
}
const MsgConnectionOpenInitResponse = {
  typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenInitResponse",
  encode(_, writer = import_binary.BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgConnectionOpenInitResponse();
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
    const message = createBaseMsgConnectionOpenInitResponse();
    return message;
  },
  fromAmino(_) {
    const message = createBaseMsgConnectionOpenInitResponse();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return MsgConnectionOpenInitResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgConnectionOpenInitResponse",
      value: MsgConnectionOpenInitResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgConnectionOpenInitResponse.decode(message.value);
  },
  toProto(message) {
    return MsgConnectionOpenInitResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenInitResponse",
      value: MsgConnectionOpenInitResponse.encode(message).finish()
    };
  }
};
function createBaseMsgConnectionOpenTry() {
  return {
    clientId: "",
    previousConnectionId: "",
    clientState: void 0,
    counterparty: import_connection.Counterparty.fromPartial({}),
    delayPeriod: BigInt(0),
    counterpartyVersions: [],
    proofHeight: import_client.Height.fromPartial({}),
    proofInit: new Uint8Array(),
    proofClient: new Uint8Array(),
    proofConsensus: new Uint8Array(),
    consensusHeight: import_client.Height.fromPartial({}),
    signer: "",
    hostConsensusStateProof: new Uint8Array()
  };
}
const MsgConnectionOpenTry = {
  typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenTry",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }
    if (message.previousConnectionId !== "") {
      writer.uint32(18).string(message.previousConnectionId);
    }
    if (message.clientState !== void 0) {
      import_any.Any.encode(message.clientState, writer.uint32(26).fork()).ldelim();
    }
    if (message.counterparty !== void 0) {
      import_connection.Counterparty.encode(message.counterparty, writer.uint32(34).fork()).ldelim();
    }
    if (message.delayPeriod !== BigInt(0)) {
      writer.uint32(40).uint64(message.delayPeriod);
    }
    for (const v of message.counterpartyVersions) {
      import_connection.Version.encode(v, writer.uint32(50).fork()).ldelim();
    }
    if (message.proofHeight !== void 0) {
      import_client.Height.encode(message.proofHeight, writer.uint32(58).fork()).ldelim();
    }
    if (message.proofInit.length !== 0) {
      writer.uint32(66).bytes(message.proofInit);
    }
    if (message.proofClient.length !== 0) {
      writer.uint32(74).bytes(message.proofClient);
    }
    if (message.proofConsensus.length !== 0) {
      writer.uint32(82).bytes(message.proofConsensus);
    }
    if (message.consensusHeight !== void 0) {
      import_client.Height.encode(message.consensusHeight, writer.uint32(90).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(98).string(message.signer);
    }
    if (message.hostConsensusStateProof.length !== 0) {
      writer.uint32(106).bytes(message.hostConsensusStateProof);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgConnectionOpenTry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;
        case 2:
          message.previousConnectionId = reader.string();
          break;
        case 3:
          message.clientState = import_any.Any.decode(reader, reader.uint32());
          break;
        case 4:
          message.counterparty = import_connection.Counterparty.decode(reader, reader.uint32());
          break;
        case 5:
          message.delayPeriod = reader.uint64();
          break;
        case 6:
          message.counterpartyVersions.push(import_connection.Version.decode(reader, reader.uint32()));
          break;
        case 7:
          message.proofHeight = import_client.Height.decode(reader, reader.uint32());
          break;
        case 8:
          message.proofInit = reader.bytes();
          break;
        case 9:
          message.proofClient = reader.bytes();
          break;
        case 10:
          message.proofConsensus = reader.bytes();
          break;
        case 11:
          message.consensusHeight = import_client.Height.decode(reader, reader.uint32());
          break;
        case 12:
          message.signer = reader.string();
          break;
        case 13:
          message.hostConsensusStateProof = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgConnectionOpenTry();
    message.clientId = object.clientId ?? "";
    message.previousConnectionId = object.previousConnectionId ?? "";
    message.clientState = object.clientState !== void 0 && object.clientState !== null ? import_any.Any.fromPartial(object.clientState) : void 0;
    message.counterparty = object.counterparty !== void 0 && object.counterparty !== null ? import_connection.Counterparty.fromPartial(object.counterparty) : void 0;
    message.delayPeriod = object.delayPeriod !== void 0 && object.delayPeriod !== null ? BigInt(object.delayPeriod.toString()) : BigInt(0);
    message.counterpartyVersions = object.counterpartyVersions?.map((e) => import_connection.Version.fromPartial(e)) || [];
    message.proofHeight = object.proofHeight !== void 0 && object.proofHeight !== null ? import_client.Height.fromPartial(object.proofHeight) : void 0;
    message.proofInit = object.proofInit ?? new Uint8Array();
    message.proofClient = object.proofClient ?? new Uint8Array();
    message.proofConsensus = object.proofConsensus ?? new Uint8Array();
    message.consensusHeight = object.consensusHeight !== void 0 && object.consensusHeight !== null ? import_client.Height.fromPartial(object.consensusHeight) : void 0;
    message.signer = object.signer ?? "";
    message.hostConsensusStateProof = object.hostConsensusStateProof ?? new Uint8Array();
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgConnectionOpenTry();
    if (object.client_id !== void 0 && object.client_id !== null) {
      message.clientId = object.client_id;
    }
    if (object.previous_connection_id !== void 0 && object.previous_connection_id !== null) {
      message.previousConnectionId = object.previous_connection_id;
    }
    if (object.client_state !== void 0 && object.client_state !== null) {
      message.clientState = import_any.Any.fromAmino(object.client_state);
    }
    if (object.counterparty !== void 0 && object.counterparty !== null) {
      message.counterparty = import_connection.Counterparty.fromAmino(object.counterparty);
    }
    if (object.delay_period !== void 0 && object.delay_period !== null) {
      message.delayPeriod = BigInt(object.delay_period);
    }
    message.counterpartyVersions = object.counterparty_versions?.map((e) => import_connection.Version.fromAmino(e)) || [];
    if (object.proof_height !== void 0 && object.proof_height !== null) {
      message.proofHeight = import_client.Height.fromAmino(object.proof_height);
    }
    if (object.proof_init !== void 0 && object.proof_init !== null) {
      message.proofInit = (0, import_helpers.bytesFromBase64)(object.proof_init);
    }
    if (object.proof_client !== void 0 && object.proof_client !== null) {
      message.proofClient = (0, import_helpers.bytesFromBase64)(object.proof_client);
    }
    if (object.proof_consensus !== void 0 && object.proof_consensus !== null) {
      message.proofConsensus = (0, import_helpers.bytesFromBase64)(object.proof_consensus);
    }
    if (object.consensus_height !== void 0 && object.consensus_height !== null) {
      message.consensusHeight = import_client.Height.fromAmino(object.consensus_height);
    }
    if (object.signer !== void 0 && object.signer !== null) {
      message.signer = object.signer;
    }
    if (object.host_consensus_state_proof !== void 0 && object.host_consensus_state_proof !== null) {
      message.hostConsensusStateProof = (0, import_helpers.bytesFromBase64)(object.host_consensus_state_proof);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.client_id = message.clientId === "" ? void 0 : message.clientId;
    obj.previous_connection_id = message.previousConnectionId === "" ? void 0 : message.previousConnectionId;
    obj.client_state = message.clientState ? import_any.Any.toAmino(message.clientState) : void 0;
    obj.counterparty = message.counterparty ? import_connection.Counterparty.toAmino(message.counterparty) : void 0;
    obj.delay_period = message.delayPeriod !== BigInt(0) ? message.delayPeriod.toString() : void 0;
    if (message.counterpartyVersions) {
      obj.counterparty_versions = message.counterpartyVersions.map((e) => e ? import_connection.Version.toAmino(e) : void 0);
    } else {
      obj.counterparty_versions = message.counterpartyVersions;
    }
    obj.proof_height = message.proofHeight ? import_client.Height.toAmino(message.proofHeight) : {};
    obj.proof_init = message.proofInit ? (0, import_helpers.base64FromBytes)(message.proofInit) : void 0;
    obj.proof_client = message.proofClient ? (0, import_helpers.base64FromBytes)(message.proofClient) : void 0;
    obj.proof_consensus = message.proofConsensus ? (0, import_helpers.base64FromBytes)(message.proofConsensus) : void 0;
    obj.consensus_height = message.consensusHeight ? import_client.Height.toAmino(message.consensusHeight) : {};
    obj.signer = message.signer === "" ? void 0 : message.signer;
    obj.host_consensus_state_proof = message.hostConsensusStateProof ? (0, import_helpers.base64FromBytes)(message.hostConsensusStateProof) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgConnectionOpenTry.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgConnectionOpenTry",
      value: MsgConnectionOpenTry.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgConnectionOpenTry.decode(message.value);
  },
  toProto(message) {
    return MsgConnectionOpenTry.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenTry",
      value: MsgConnectionOpenTry.encode(message).finish()
    };
  }
};
function createBaseMsgConnectionOpenTryResponse() {
  return {};
}
const MsgConnectionOpenTryResponse = {
  typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenTryResponse",
  encode(_, writer = import_binary.BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgConnectionOpenTryResponse();
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
    const message = createBaseMsgConnectionOpenTryResponse();
    return message;
  },
  fromAmino(_) {
    const message = createBaseMsgConnectionOpenTryResponse();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return MsgConnectionOpenTryResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgConnectionOpenTryResponse",
      value: MsgConnectionOpenTryResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgConnectionOpenTryResponse.decode(message.value);
  },
  toProto(message) {
    return MsgConnectionOpenTryResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenTryResponse",
      value: MsgConnectionOpenTryResponse.encode(message).finish()
    };
  }
};
function createBaseMsgConnectionOpenAck() {
  return {
    connectionId: "",
    counterpartyConnectionId: "",
    version: void 0,
    clientState: void 0,
    proofHeight: import_client.Height.fromPartial({}),
    proofTry: new Uint8Array(),
    proofClient: new Uint8Array(),
    proofConsensus: new Uint8Array(),
    consensusHeight: import_client.Height.fromPartial({}),
    signer: "",
    hostConsensusStateProof: new Uint8Array()
  };
}
const MsgConnectionOpenAck = {
  typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenAck",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.connectionId !== "") {
      writer.uint32(10).string(message.connectionId);
    }
    if (message.counterpartyConnectionId !== "") {
      writer.uint32(18).string(message.counterpartyConnectionId);
    }
    if (message.version !== void 0) {
      import_connection.Version.encode(message.version, writer.uint32(26).fork()).ldelim();
    }
    if (message.clientState !== void 0) {
      import_any.Any.encode(message.clientState, writer.uint32(34).fork()).ldelim();
    }
    if (message.proofHeight !== void 0) {
      import_client.Height.encode(message.proofHeight, writer.uint32(42).fork()).ldelim();
    }
    if (message.proofTry.length !== 0) {
      writer.uint32(50).bytes(message.proofTry);
    }
    if (message.proofClient.length !== 0) {
      writer.uint32(58).bytes(message.proofClient);
    }
    if (message.proofConsensus.length !== 0) {
      writer.uint32(66).bytes(message.proofConsensus);
    }
    if (message.consensusHeight !== void 0) {
      import_client.Height.encode(message.consensusHeight, writer.uint32(74).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(82).string(message.signer);
    }
    if (message.hostConsensusStateProof.length !== 0) {
      writer.uint32(90).bytes(message.hostConsensusStateProof);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgConnectionOpenAck();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.connectionId = reader.string();
          break;
        case 2:
          message.counterpartyConnectionId = reader.string();
          break;
        case 3:
          message.version = import_connection.Version.decode(reader, reader.uint32());
          break;
        case 4:
          message.clientState = import_any.Any.decode(reader, reader.uint32());
          break;
        case 5:
          message.proofHeight = import_client.Height.decode(reader, reader.uint32());
          break;
        case 6:
          message.proofTry = reader.bytes();
          break;
        case 7:
          message.proofClient = reader.bytes();
          break;
        case 8:
          message.proofConsensus = reader.bytes();
          break;
        case 9:
          message.consensusHeight = import_client.Height.decode(reader, reader.uint32());
          break;
        case 10:
          message.signer = reader.string();
          break;
        case 11:
          message.hostConsensusStateProof = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgConnectionOpenAck();
    message.connectionId = object.connectionId ?? "";
    message.counterpartyConnectionId = object.counterpartyConnectionId ?? "";
    message.version = object.version !== void 0 && object.version !== null ? import_connection.Version.fromPartial(object.version) : void 0;
    message.clientState = object.clientState !== void 0 && object.clientState !== null ? import_any.Any.fromPartial(object.clientState) : void 0;
    message.proofHeight = object.proofHeight !== void 0 && object.proofHeight !== null ? import_client.Height.fromPartial(object.proofHeight) : void 0;
    message.proofTry = object.proofTry ?? new Uint8Array();
    message.proofClient = object.proofClient ?? new Uint8Array();
    message.proofConsensus = object.proofConsensus ?? new Uint8Array();
    message.consensusHeight = object.consensusHeight !== void 0 && object.consensusHeight !== null ? import_client.Height.fromPartial(object.consensusHeight) : void 0;
    message.signer = object.signer ?? "";
    message.hostConsensusStateProof = object.hostConsensusStateProof ?? new Uint8Array();
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgConnectionOpenAck();
    if (object.connection_id !== void 0 && object.connection_id !== null) {
      message.connectionId = object.connection_id;
    }
    if (object.counterparty_connection_id !== void 0 && object.counterparty_connection_id !== null) {
      message.counterpartyConnectionId = object.counterparty_connection_id;
    }
    if (object.version !== void 0 && object.version !== null) {
      message.version = import_connection.Version.fromAmino(object.version);
    }
    if (object.client_state !== void 0 && object.client_state !== null) {
      message.clientState = import_any.Any.fromAmino(object.client_state);
    }
    if (object.proof_height !== void 0 && object.proof_height !== null) {
      message.proofHeight = import_client.Height.fromAmino(object.proof_height);
    }
    if (object.proof_try !== void 0 && object.proof_try !== null) {
      message.proofTry = (0, import_helpers.bytesFromBase64)(object.proof_try);
    }
    if (object.proof_client !== void 0 && object.proof_client !== null) {
      message.proofClient = (0, import_helpers.bytesFromBase64)(object.proof_client);
    }
    if (object.proof_consensus !== void 0 && object.proof_consensus !== null) {
      message.proofConsensus = (0, import_helpers.bytesFromBase64)(object.proof_consensus);
    }
    if (object.consensus_height !== void 0 && object.consensus_height !== null) {
      message.consensusHeight = import_client.Height.fromAmino(object.consensus_height);
    }
    if (object.signer !== void 0 && object.signer !== null) {
      message.signer = object.signer;
    }
    if (object.host_consensus_state_proof !== void 0 && object.host_consensus_state_proof !== null) {
      message.hostConsensusStateProof = (0, import_helpers.bytesFromBase64)(object.host_consensus_state_proof);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.connection_id = message.connectionId === "" ? void 0 : message.connectionId;
    obj.counterparty_connection_id = message.counterpartyConnectionId === "" ? void 0 : message.counterpartyConnectionId;
    obj.version = message.version ? import_connection.Version.toAmino(message.version) : void 0;
    obj.client_state = message.clientState ? import_any.Any.toAmino(message.clientState) : void 0;
    obj.proof_height = message.proofHeight ? import_client.Height.toAmino(message.proofHeight) : {};
    obj.proof_try = message.proofTry ? (0, import_helpers.base64FromBytes)(message.proofTry) : void 0;
    obj.proof_client = message.proofClient ? (0, import_helpers.base64FromBytes)(message.proofClient) : void 0;
    obj.proof_consensus = message.proofConsensus ? (0, import_helpers.base64FromBytes)(message.proofConsensus) : void 0;
    obj.consensus_height = message.consensusHeight ? import_client.Height.toAmino(message.consensusHeight) : {};
    obj.signer = message.signer === "" ? void 0 : message.signer;
    obj.host_consensus_state_proof = message.hostConsensusStateProof ? (0, import_helpers.base64FromBytes)(message.hostConsensusStateProof) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgConnectionOpenAck.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgConnectionOpenAck",
      value: MsgConnectionOpenAck.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgConnectionOpenAck.decode(message.value);
  },
  toProto(message) {
    return MsgConnectionOpenAck.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenAck",
      value: MsgConnectionOpenAck.encode(message).finish()
    };
  }
};
function createBaseMsgConnectionOpenAckResponse() {
  return {};
}
const MsgConnectionOpenAckResponse = {
  typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenAckResponse",
  encode(_, writer = import_binary.BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgConnectionOpenAckResponse();
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
    const message = createBaseMsgConnectionOpenAckResponse();
    return message;
  },
  fromAmino(_) {
    const message = createBaseMsgConnectionOpenAckResponse();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return MsgConnectionOpenAckResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgConnectionOpenAckResponse",
      value: MsgConnectionOpenAckResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgConnectionOpenAckResponse.decode(message.value);
  },
  toProto(message) {
    return MsgConnectionOpenAckResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenAckResponse",
      value: MsgConnectionOpenAckResponse.encode(message).finish()
    };
  }
};
function createBaseMsgConnectionOpenConfirm() {
  return {
    connectionId: "",
    proofAck: new Uint8Array(),
    proofHeight: import_client.Height.fromPartial({}),
    signer: ""
  };
}
const MsgConnectionOpenConfirm = {
  typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenConfirm",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.connectionId !== "") {
      writer.uint32(10).string(message.connectionId);
    }
    if (message.proofAck.length !== 0) {
      writer.uint32(18).bytes(message.proofAck);
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
    const message = createBaseMsgConnectionOpenConfirm();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.connectionId = reader.string();
          break;
        case 2:
          message.proofAck = reader.bytes();
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
    const message = createBaseMsgConnectionOpenConfirm();
    message.connectionId = object.connectionId ?? "";
    message.proofAck = object.proofAck ?? new Uint8Array();
    message.proofHeight = object.proofHeight !== void 0 && object.proofHeight !== null ? import_client.Height.fromPartial(object.proofHeight) : void 0;
    message.signer = object.signer ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgConnectionOpenConfirm();
    if (object.connection_id !== void 0 && object.connection_id !== null) {
      message.connectionId = object.connection_id;
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
    obj.connection_id = message.connectionId === "" ? void 0 : message.connectionId;
    obj.proof_ack = message.proofAck ? (0, import_helpers.base64FromBytes)(message.proofAck) : void 0;
    obj.proof_height = message.proofHeight ? import_client.Height.toAmino(message.proofHeight) : {};
    obj.signer = message.signer === "" ? void 0 : message.signer;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgConnectionOpenConfirm.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgConnectionOpenConfirm",
      value: MsgConnectionOpenConfirm.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgConnectionOpenConfirm.decode(message.value);
  },
  toProto(message) {
    return MsgConnectionOpenConfirm.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenConfirm",
      value: MsgConnectionOpenConfirm.encode(message).finish()
    };
  }
};
function createBaseMsgConnectionOpenConfirmResponse() {
  return {};
}
const MsgConnectionOpenConfirmResponse = {
  typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenConfirmResponse",
  encode(_, writer = import_binary.BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgConnectionOpenConfirmResponse();
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
    const message = createBaseMsgConnectionOpenConfirmResponse();
    return message;
  },
  fromAmino(_) {
    const message = createBaseMsgConnectionOpenConfirmResponse();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return MsgConnectionOpenConfirmResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgConnectionOpenConfirmResponse",
      value: MsgConnectionOpenConfirmResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgConnectionOpenConfirmResponse.decode(message.value);
  },
  toProto(message) {
    return MsgConnectionOpenConfirmResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenConfirmResponse",
      value: MsgConnectionOpenConfirmResponse.encode(message).finish()
    };
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  MsgConnectionOpenAck,
  MsgConnectionOpenAckResponse,
  MsgConnectionOpenConfirm,
  MsgConnectionOpenConfirmResponse,
  MsgConnectionOpenInit,
  MsgConnectionOpenInitResponse,
  MsgConnectionOpenTry,
  MsgConnectionOpenTryResponse
});
