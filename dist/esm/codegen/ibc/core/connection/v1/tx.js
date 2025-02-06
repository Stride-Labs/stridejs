import { Counterparty, Version } from "./connection";
import { Any } from "../../../../google/protobuf/any";
import { Height } from "../../client/v1/client";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { bytesFromBase64, base64FromBytes } from "../../../../helpers";
function createBaseMsgConnectionOpenInit() {
  return {
    clientId: "",
    counterparty: Counterparty.fromPartial({}),
    version: void 0,
    delayPeriod: BigInt(0),
    signer: ""
  };
}
const MsgConnectionOpenInit = {
  typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenInit",
  encode(message, writer = BinaryWriter.create()) {
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }
    if (message.counterparty !== void 0) {
      Counterparty.encode(message.counterparty, writer.uint32(18).fork()).ldelim();
    }
    if (message.version !== void 0) {
      Version.encode(message.version, writer.uint32(26).fork()).ldelim();
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
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgConnectionOpenInit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;
        case 2:
          message.counterparty = Counterparty.decode(reader, reader.uint32());
          break;
        case 3:
          message.version = Version.decode(reader, reader.uint32());
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
    message.counterparty = object.counterparty !== void 0 && object.counterparty !== null ? Counterparty.fromPartial(object.counterparty) : void 0;
    message.version = object.version !== void 0 && object.version !== null ? Version.fromPartial(object.version) : void 0;
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
      message.counterparty = Counterparty.fromAmino(object.counterparty);
    }
    if (object.version !== void 0 && object.version !== null) {
      message.version = Version.fromAmino(object.version);
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
    obj.counterparty = message.counterparty ? Counterparty.toAmino(message.counterparty) : void 0;
    obj.version = message.version ? Version.toAmino(message.version) : void 0;
    obj.delay_period = message.delayPeriod !== BigInt(0) ? message.delayPeriod?.toString() : void 0;
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
  encode(_, writer = BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
    counterparty: Counterparty.fromPartial({}),
    delayPeriod: BigInt(0),
    counterpartyVersions: [],
    proofHeight: Height.fromPartial({}),
    proofInit: new Uint8Array(),
    proofClient: new Uint8Array(),
    proofConsensus: new Uint8Array(),
    consensusHeight: Height.fromPartial({}),
    signer: "",
    hostConsensusStateProof: new Uint8Array()
  };
}
const MsgConnectionOpenTry = {
  typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenTry",
  encode(message, writer = BinaryWriter.create()) {
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }
    if (message.previousConnectionId !== "") {
      writer.uint32(18).string(message.previousConnectionId);
    }
    if (message.clientState !== void 0) {
      Any.encode(message.clientState, writer.uint32(26).fork()).ldelim();
    }
    if (message.counterparty !== void 0) {
      Counterparty.encode(message.counterparty, writer.uint32(34).fork()).ldelim();
    }
    if (message.delayPeriod !== BigInt(0)) {
      writer.uint32(40).uint64(message.delayPeriod);
    }
    for (const v of message.counterpartyVersions) {
      Version.encode(v, writer.uint32(50).fork()).ldelim();
    }
    if (message.proofHeight !== void 0) {
      Height.encode(message.proofHeight, writer.uint32(58).fork()).ldelim();
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
      Height.encode(message.consensusHeight, writer.uint32(90).fork()).ldelim();
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
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
          message.clientState = Any.decode(reader, reader.uint32());
          break;
        case 4:
          message.counterparty = Counterparty.decode(reader, reader.uint32());
          break;
        case 5:
          message.delayPeriod = reader.uint64();
          break;
        case 6:
          message.counterpartyVersions.push(Version.decode(reader, reader.uint32()));
          break;
        case 7:
          message.proofHeight = Height.decode(reader, reader.uint32());
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
          message.consensusHeight = Height.decode(reader, reader.uint32());
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
    message.clientState = object.clientState !== void 0 && object.clientState !== null ? Any.fromPartial(object.clientState) : void 0;
    message.counterparty = object.counterparty !== void 0 && object.counterparty !== null ? Counterparty.fromPartial(object.counterparty) : void 0;
    message.delayPeriod = object.delayPeriod !== void 0 && object.delayPeriod !== null ? BigInt(object.delayPeriod.toString()) : BigInt(0);
    message.counterpartyVersions = object.counterpartyVersions?.map((e) => Version.fromPartial(e)) || [];
    message.proofHeight = object.proofHeight !== void 0 && object.proofHeight !== null ? Height.fromPartial(object.proofHeight) : void 0;
    message.proofInit = object.proofInit ?? new Uint8Array();
    message.proofClient = object.proofClient ?? new Uint8Array();
    message.proofConsensus = object.proofConsensus ?? new Uint8Array();
    message.consensusHeight = object.consensusHeight !== void 0 && object.consensusHeight !== null ? Height.fromPartial(object.consensusHeight) : void 0;
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
      message.clientState = Any.fromAmino(object.client_state);
    }
    if (object.counterparty !== void 0 && object.counterparty !== null) {
      message.counterparty = Counterparty.fromAmino(object.counterparty);
    }
    if (object.delay_period !== void 0 && object.delay_period !== null) {
      message.delayPeriod = BigInt(object.delay_period);
    }
    message.counterpartyVersions = object.counterparty_versions?.map((e) => Version.fromAmino(e)) || [];
    if (object.proof_height !== void 0 && object.proof_height !== null) {
      message.proofHeight = Height.fromAmino(object.proof_height);
    }
    if (object.proof_init !== void 0 && object.proof_init !== null) {
      message.proofInit = bytesFromBase64(object.proof_init);
    }
    if (object.proof_client !== void 0 && object.proof_client !== null) {
      message.proofClient = bytesFromBase64(object.proof_client);
    }
    if (object.proof_consensus !== void 0 && object.proof_consensus !== null) {
      message.proofConsensus = bytesFromBase64(object.proof_consensus);
    }
    if (object.consensus_height !== void 0 && object.consensus_height !== null) {
      message.consensusHeight = Height.fromAmino(object.consensus_height);
    }
    if (object.signer !== void 0 && object.signer !== null) {
      message.signer = object.signer;
    }
    if (object.host_consensus_state_proof !== void 0 && object.host_consensus_state_proof !== null) {
      message.hostConsensusStateProof = bytesFromBase64(object.host_consensus_state_proof);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.client_id = message.clientId === "" ? void 0 : message.clientId;
    obj.previous_connection_id = message.previousConnectionId === "" ? void 0 : message.previousConnectionId;
    obj.client_state = message.clientState ? Any.toAmino(message.clientState) : void 0;
    obj.counterparty = message.counterparty ? Counterparty.toAmino(message.counterparty) : void 0;
    obj.delay_period = message.delayPeriod !== BigInt(0) ? message.delayPeriod?.toString() : void 0;
    if (message.counterpartyVersions) {
      obj.counterparty_versions = message.counterpartyVersions.map((e) => e ? Version.toAmino(e) : void 0);
    } else {
      obj.counterparty_versions = message.counterpartyVersions;
    }
    obj.proof_height = message.proofHeight ? Height.toAmino(message.proofHeight) : {};
    obj.proof_init = message.proofInit ? base64FromBytes(message.proofInit) : void 0;
    obj.proof_client = message.proofClient ? base64FromBytes(message.proofClient) : void 0;
    obj.proof_consensus = message.proofConsensus ? base64FromBytes(message.proofConsensus) : void 0;
    obj.consensus_height = message.consensusHeight ? Height.toAmino(message.consensusHeight) : {};
    obj.signer = message.signer === "" ? void 0 : message.signer;
    obj.host_consensus_state_proof = message.hostConsensusStateProof ? base64FromBytes(message.hostConsensusStateProof) : void 0;
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
  encode(_, writer = BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
    proofHeight: Height.fromPartial({}),
    proofTry: new Uint8Array(),
    proofClient: new Uint8Array(),
    proofConsensus: new Uint8Array(),
    consensusHeight: Height.fromPartial({}),
    signer: "",
    hostConsensusStateProof: new Uint8Array()
  };
}
const MsgConnectionOpenAck = {
  typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenAck",
  encode(message, writer = BinaryWriter.create()) {
    if (message.connectionId !== "") {
      writer.uint32(10).string(message.connectionId);
    }
    if (message.counterpartyConnectionId !== "") {
      writer.uint32(18).string(message.counterpartyConnectionId);
    }
    if (message.version !== void 0) {
      Version.encode(message.version, writer.uint32(26).fork()).ldelim();
    }
    if (message.clientState !== void 0) {
      Any.encode(message.clientState, writer.uint32(34).fork()).ldelim();
    }
    if (message.proofHeight !== void 0) {
      Height.encode(message.proofHeight, writer.uint32(42).fork()).ldelim();
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
      Height.encode(message.consensusHeight, writer.uint32(74).fork()).ldelim();
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
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
          message.version = Version.decode(reader, reader.uint32());
          break;
        case 4:
          message.clientState = Any.decode(reader, reader.uint32());
          break;
        case 5:
          message.proofHeight = Height.decode(reader, reader.uint32());
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
          message.consensusHeight = Height.decode(reader, reader.uint32());
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
    message.version = object.version !== void 0 && object.version !== null ? Version.fromPartial(object.version) : void 0;
    message.clientState = object.clientState !== void 0 && object.clientState !== null ? Any.fromPartial(object.clientState) : void 0;
    message.proofHeight = object.proofHeight !== void 0 && object.proofHeight !== null ? Height.fromPartial(object.proofHeight) : void 0;
    message.proofTry = object.proofTry ?? new Uint8Array();
    message.proofClient = object.proofClient ?? new Uint8Array();
    message.proofConsensus = object.proofConsensus ?? new Uint8Array();
    message.consensusHeight = object.consensusHeight !== void 0 && object.consensusHeight !== null ? Height.fromPartial(object.consensusHeight) : void 0;
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
      message.version = Version.fromAmino(object.version);
    }
    if (object.client_state !== void 0 && object.client_state !== null) {
      message.clientState = Any.fromAmino(object.client_state);
    }
    if (object.proof_height !== void 0 && object.proof_height !== null) {
      message.proofHeight = Height.fromAmino(object.proof_height);
    }
    if (object.proof_try !== void 0 && object.proof_try !== null) {
      message.proofTry = bytesFromBase64(object.proof_try);
    }
    if (object.proof_client !== void 0 && object.proof_client !== null) {
      message.proofClient = bytesFromBase64(object.proof_client);
    }
    if (object.proof_consensus !== void 0 && object.proof_consensus !== null) {
      message.proofConsensus = bytesFromBase64(object.proof_consensus);
    }
    if (object.consensus_height !== void 0 && object.consensus_height !== null) {
      message.consensusHeight = Height.fromAmino(object.consensus_height);
    }
    if (object.signer !== void 0 && object.signer !== null) {
      message.signer = object.signer;
    }
    if (object.host_consensus_state_proof !== void 0 && object.host_consensus_state_proof !== null) {
      message.hostConsensusStateProof = bytesFromBase64(object.host_consensus_state_proof);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.connection_id = message.connectionId === "" ? void 0 : message.connectionId;
    obj.counterparty_connection_id = message.counterpartyConnectionId === "" ? void 0 : message.counterpartyConnectionId;
    obj.version = message.version ? Version.toAmino(message.version) : void 0;
    obj.client_state = message.clientState ? Any.toAmino(message.clientState) : void 0;
    obj.proof_height = message.proofHeight ? Height.toAmino(message.proofHeight) : {};
    obj.proof_try = message.proofTry ? base64FromBytes(message.proofTry) : void 0;
    obj.proof_client = message.proofClient ? base64FromBytes(message.proofClient) : void 0;
    obj.proof_consensus = message.proofConsensus ? base64FromBytes(message.proofConsensus) : void 0;
    obj.consensus_height = message.consensusHeight ? Height.toAmino(message.consensusHeight) : {};
    obj.signer = message.signer === "" ? void 0 : message.signer;
    obj.host_consensus_state_proof = message.hostConsensusStateProof ? base64FromBytes(message.hostConsensusStateProof) : void 0;
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
  encode(_, writer = BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
    proofHeight: Height.fromPartial({}),
    signer: ""
  };
}
const MsgConnectionOpenConfirm = {
  typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenConfirm",
  encode(message, writer = BinaryWriter.create()) {
    if (message.connectionId !== "") {
      writer.uint32(10).string(message.connectionId);
    }
    if (message.proofAck.length !== 0) {
      writer.uint32(18).bytes(message.proofAck);
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
    const message = createBaseMsgConnectionOpenConfirm();
    message.connectionId = object.connectionId ?? "";
    message.proofAck = object.proofAck ?? new Uint8Array();
    message.proofHeight = object.proofHeight !== void 0 && object.proofHeight !== null ? Height.fromPartial(object.proofHeight) : void 0;
    message.signer = object.signer ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgConnectionOpenConfirm();
    if (object.connection_id !== void 0 && object.connection_id !== null) {
      message.connectionId = object.connection_id;
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
    obj.connection_id = message.connectionId === "" ? void 0 : message.connectionId;
    obj.proof_ack = message.proofAck ? base64FromBytes(message.proofAck) : void 0;
    obj.proof_height = message.proofHeight ? Height.toAmino(message.proofHeight) : {};
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
  encode(_, writer = BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
export {
  MsgConnectionOpenAck,
  MsgConnectionOpenAckResponse,
  MsgConnectionOpenConfirm,
  MsgConnectionOpenConfirmResponse,
  MsgConnectionOpenInit,
  MsgConnectionOpenInitResponse,
  MsgConnectionOpenTry,
  MsgConnectionOpenTryResponse
};
