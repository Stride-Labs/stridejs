import { Any } from "../../../../google/protobuf/any";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { bytesFromBase64, base64FromBytes } from "../../../../helpers";
function createBaseMsgCreateClient() {
  return {
    clientState: void 0,
    consensusState: void 0,
    signer: ""
  };
}
const MsgCreateClient = {
  typeUrl: "/ibc.core.client.v1.MsgCreateClient",
  encode(message, writer = BinaryWriter.create()) {
    if (message.clientState !== void 0) {
      Any.encode(message.clientState, writer.uint32(10).fork()).ldelim();
    }
    if (message.consensusState !== void 0) {
      Any.encode(message.consensusState, writer.uint32(18).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(26).string(message.signer);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateClient();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientState = Any.decode(reader, reader.uint32());
          break;
        case 2:
          message.consensusState = Any.decode(reader, reader.uint32());
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
    const message = createBaseMsgCreateClient();
    message.clientState = object.clientState !== void 0 && object.clientState !== null ? Any.fromPartial(object.clientState) : void 0;
    message.consensusState = object.consensusState !== void 0 && object.consensusState !== null ? Any.fromPartial(object.consensusState) : void 0;
    message.signer = object.signer ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgCreateClient();
    if (object.client_state !== void 0 && object.client_state !== null) {
      message.clientState = Any.fromAmino(object.client_state);
    }
    if (object.consensus_state !== void 0 && object.consensus_state !== null) {
      message.consensusState = Any.fromAmino(object.consensus_state);
    }
    if (object.signer !== void 0 && object.signer !== null) {
      message.signer = object.signer;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.client_state = message.clientState ? Any.toAmino(message.clientState) : void 0;
    obj.consensus_state = message.consensusState ? Any.toAmino(message.consensusState) : void 0;
    obj.signer = message.signer === "" ? void 0 : message.signer;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgCreateClient.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgCreateClient",
      value: MsgCreateClient.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgCreateClient.decode(message.value);
  },
  toProto(message) {
    return MsgCreateClient.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.core.client.v1.MsgCreateClient",
      value: MsgCreateClient.encode(message).finish()
    };
  }
};
function createBaseMsgCreateClientResponse() {
  return {};
}
const MsgCreateClientResponse = {
  typeUrl: "/ibc.core.client.v1.MsgCreateClientResponse",
  encode(_, writer = BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateClientResponse();
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
    const message = createBaseMsgCreateClientResponse();
    return message;
  },
  fromAmino(_) {
    const message = createBaseMsgCreateClientResponse();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return MsgCreateClientResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgCreateClientResponse",
      value: MsgCreateClientResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgCreateClientResponse.decode(message.value);
  },
  toProto(message) {
    return MsgCreateClientResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.core.client.v1.MsgCreateClientResponse",
      value: MsgCreateClientResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateClient() {
  return {
    clientId: "",
    clientMessage: void 0,
    signer: ""
  };
}
const MsgUpdateClient = {
  typeUrl: "/ibc.core.client.v1.MsgUpdateClient",
  encode(message, writer = BinaryWriter.create()) {
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }
    if (message.clientMessage !== void 0) {
      Any.encode(message.clientMessage, writer.uint32(18).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(26).string(message.signer);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateClient();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;
        case 2:
          message.clientMessage = Any.decode(reader, reader.uint32());
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
    const message = createBaseMsgUpdateClient();
    message.clientId = object.clientId ?? "";
    message.clientMessage = object.clientMessage !== void 0 && object.clientMessage !== null ? Any.fromPartial(object.clientMessage) : void 0;
    message.signer = object.signer ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgUpdateClient();
    if (object.client_id !== void 0 && object.client_id !== null) {
      message.clientId = object.client_id;
    }
    if (object.client_message !== void 0 && object.client_message !== null) {
      message.clientMessage = Any.fromAmino(object.client_message);
    }
    if (object.signer !== void 0 && object.signer !== null) {
      message.signer = object.signer;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.client_id = message.clientId === "" ? void 0 : message.clientId;
    obj.client_message = message.clientMessage ? Any.toAmino(message.clientMessage) : void 0;
    obj.signer = message.signer === "" ? void 0 : message.signer;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgUpdateClient.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgUpdateClient",
      value: MsgUpdateClient.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgUpdateClient.decode(message.value);
  },
  toProto(message) {
    return MsgUpdateClient.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.core.client.v1.MsgUpdateClient",
      value: MsgUpdateClient.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateClientResponse() {
  return {};
}
const MsgUpdateClientResponse = {
  typeUrl: "/ibc.core.client.v1.MsgUpdateClientResponse",
  encode(_, writer = BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateClientResponse();
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
    const message = createBaseMsgUpdateClientResponse();
    return message;
  },
  fromAmino(_) {
    const message = createBaseMsgUpdateClientResponse();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return MsgUpdateClientResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgUpdateClientResponse",
      value: MsgUpdateClientResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgUpdateClientResponse.decode(message.value);
  },
  toProto(message) {
    return MsgUpdateClientResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.core.client.v1.MsgUpdateClientResponse",
      value: MsgUpdateClientResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpgradeClient() {
  return {
    clientId: "",
    clientState: void 0,
    consensusState: void 0,
    proofUpgradeClient: new Uint8Array(),
    proofUpgradeConsensusState: new Uint8Array(),
    signer: ""
  };
}
const MsgUpgradeClient = {
  typeUrl: "/ibc.core.client.v1.MsgUpgradeClient",
  encode(message, writer = BinaryWriter.create()) {
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }
    if (message.clientState !== void 0) {
      Any.encode(message.clientState, writer.uint32(18).fork()).ldelim();
    }
    if (message.consensusState !== void 0) {
      Any.encode(message.consensusState, writer.uint32(26).fork()).ldelim();
    }
    if (message.proofUpgradeClient.length !== 0) {
      writer.uint32(34).bytes(message.proofUpgradeClient);
    }
    if (message.proofUpgradeConsensusState.length !== 0) {
      writer.uint32(42).bytes(message.proofUpgradeConsensusState);
    }
    if (message.signer !== "") {
      writer.uint32(50).string(message.signer);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgUpgradeClient();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;
        case 2:
          message.clientState = Any.decode(reader, reader.uint32());
          break;
        case 3:
          message.consensusState = Any.decode(reader, reader.uint32());
          break;
        case 4:
          message.proofUpgradeClient = reader.bytes();
          break;
        case 5:
          message.proofUpgradeConsensusState = reader.bytes();
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
    const message = createBaseMsgUpgradeClient();
    message.clientId = object.clientId ?? "";
    message.clientState = object.clientState !== void 0 && object.clientState !== null ? Any.fromPartial(object.clientState) : void 0;
    message.consensusState = object.consensusState !== void 0 && object.consensusState !== null ? Any.fromPartial(object.consensusState) : void 0;
    message.proofUpgradeClient = object.proofUpgradeClient ?? new Uint8Array();
    message.proofUpgradeConsensusState = object.proofUpgradeConsensusState ?? new Uint8Array();
    message.signer = object.signer ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgUpgradeClient();
    if (object.client_id !== void 0 && object.client_id !== null) {
      message.clientId = object.client_id;
    }
    if (object.client_state !== void 0 && object.client_state !== null) {
      message.clientState = Any.fromAmino(object.client_state);
    }
    if (object.consensus_state !== void 0 && object.consensus_state !== null) {
      message.consensusState = Any.fromAmino(object.consensus_state);
    }
    if (object.proof_upgrade_client !== void 0 && object.proof_upgrade_client !== null) {
      message.proofUpgradeClient = bytesFromBase64(object.proof_upgrade_client);
    }
    if (object.proof_upgrade_consensus_state !== void 0 && object.proof_upgrade_consensus_state !== null) {
      message.proofUpgradeConsensusState = bytesFromBase64(object.proof_upgrade_consensus_state);
    }
    if (object.signer !== void 0 && object.signer !== null) {
      message.signer = object.signer;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.client_id = message.clientId === "" ? void 0 : message.clientId;
    obj.client_state = message.clientState ? Any.toAmino(message.clientState) : void 0;
    obj.consensus_state = message.consensusState ? Any.toAmino(message.consensusState) : void 0;
    obj.proof_upgrade_client = message.proofUpgradeClient ? base64FromBytes(message.proofUpgradeClient) : void 0;
    obj.proof_upgrade_consensus_state = message.proofUpgradeConsensusState ? base64FromBytes(message.proofUpgradeConsensusState) : void 0;
    obj.signer = message.signer === "" ? void 0 : message.signer;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgUpgradeClient.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgUpgradeClient",
      value: MsgUpgradeClient.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgUpgradeClient.decode(message.value);
  },
  toProto(message) {
    return MsgUpgradeClient.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.core.client.v1.MsgUpgradeClient",
      value: MsgUpgradeClient.encode(message).finish()
    };
  }
};
function createBaseMsgUpgradeClientResponse() {
  return {};
}
const MsgUpgradeClientResponse = {
  typeUrl: "/ibc.core.client.v1.MsgUpgradeClientResponse",
  encode(_, writer = BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgUpgradeClientResponse();
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
    const message = createBaseMsgUpgradeClientResponse();
    return message;
  },
  fromAmino(_) {
    const message = createBaseMsgUpgradeClientResponse();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return MsgUpgradeClientResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgUpgradeClientResponse",
      value: MsgUpgradeClientResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgUpgradeClientResponse.decode(message.value);
  },
  toProto(message) {
    return MsgUpgradeClientResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.core.client.v1.MsgUpgradeClientResponse",
      value: MsgUpgradeClientResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSubmitMisbehaviour() {
  return {
    clientId: "",
    misbehaviour: void 0,
    signer: ""
  };
}
const MsgSubmitMisbehaviour = {
  typeUrl: "/ibc.core.client.v1.MsgSubmitMisbehaviour",
  encode(message, writer = BinaryWriter.create()) {
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }
    if (message.misbehaviour !== void 0) {
      Any.encode(message.misbehaviour, writer.uint32(18).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(26).string(message.signer);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitMisbehaviour();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;
        case 2:
          message.misbehaviour = Any.decode(reader, reader.uint32());
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
    const message = createBaseMsgSubmitMisbehaviour();
    message.clientId = object.clientId ?? "";
    message.misbehaviour = object.misbehaviour !== void 0 && object.misbehaviour !== null ? Any.fromPartial(object.misbehaviour) : void 0;
    message.signer = object.signer ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgSubmitMisbehaviour();
    if (object.client_id !== void 0 && object.client_id !== null) {
      message.clientId = object.client_id;
    }
    if (object.misbehaviour !== void 0 && object.misbehaviour !== null) {
      message.misbehaviour = Any.fromAmino(object.misbehaviour);
    }
    if (object.signer !== void 0 && object.signer !== null) {
      message.signer = object.signer;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.client_id = message.clientId === "" ? void 0 : message.clientId;
    obj.misbehaviour = message.misbehaviour ? Any.toAmino(message.misbehaviour) : void 0;
    obj.signer = message.signer === "" ? void 0 : message.signer;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgSubmitMisbehaviour.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgSubmitMisbehaviour",
      value: MsgSubmitMisbehaviour.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgSubmitMisbehaviour.decode(message.value);
  },
  toProto(message) {
    return MsgSubmitMisbehaviour.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.core.client.v1.MsgSubmitMisbehaviour",
      value: MsgSubmitMisbehaviour.encode(message).finish()
    };
  }
};
function createBaseMsgSubmitMisbehaviourResponse() {
  return {};
}
const MsgSubmitMisbehaviourResponse = {
  typeUrl: "/ibc.core.client.v1.MsgSubmitMisbehaviourResponse",
  encode(_, writer = BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitMisbehaviourResponse();
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
    const message = createBaseMsgSubmitMisbehaviourResponse();
    return message;
  },
  fromAmino(_) {
    const message = createBaseMsgSubmitMisbehaviourResponse();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return MsgSubmitMisbehaviourResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgSubmitMisbehaviourResponse",
      value: MsgSubmitMisbehaviourResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgSubmitMisbehaviourResponse.decode(message.value);
  },
  toProto(message) {
    return MsgSubmitMisbehaviourResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.core.client.v1.MsgSubmitMisbehaviourResponse",
      value: MsgSubmitMisbehaviourResponse.encode(message).finish()
    };
  }
};
export {
  MsgCreateClient,
  MsgCreateClientResponse,
  MsgSubmitMisbehaviour,
  MsgSubmitMisbehaviourResponse,
  MsgUpdateClient,
  MsgUpdateClientResponse,
  MsgUpgradeClient,
  MsgUpgradeClientResponse
};
