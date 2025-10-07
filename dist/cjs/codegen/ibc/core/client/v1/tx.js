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
  MsgCreateClient: () => MsgCreateClient,
  MsgCreateClientResponse: () => MsgCreateClientResponse,
  MsgIBCSoftwareUpgrade: () => MsgIBCSoftwareUpgrade,
  MsgIBCSoftwareUpgradeResponse: () => MsgIBCSoftwareUpgradeResponse,
  MsgRecoverClient: () => MsgRecoverClient,
  MsgRecoverClientResponse: () => MsgRecoverClientResponse,
  MsgSubmitMisbehaviour: () => MsgSubmitMisbehaviour,
  MsgSubmitMisbehaviourResponse: () => MsgSubmitMisbehaviourResponse,
  MsgUpdateClient: () => MsgUpdateClient,
  MsgUpdateClientResponse: () => MsgUpdateClientResponse,
  MsgUpdateParams: () => MsgUpdateParams,
  MsgUpdateParamsResponse: () => MsgUpdateParamsResponse,
  MsgUpgradeClient: () => MsgUpgradeClient,
  MsgUpgradeClientResponse: () => MsgUpgradeClientResponse
});
module.exports = __toCommonJS(tx_exports);
var import_any = require("../../../../google/protobuf/any");
var import_upgrade = require("../../../../cosmos/upgrade/v1beta1/upgrade");
var import_client = require("./client");
var import_binary = require("../../../../binary");
var import_helpers = require("../../../../helpers");
function createBaseMsgCreateClient() {
  return {
    clientState: void 0,
    consensusState: void 0,
    signer: ""
  };
}
const MsgCreateClient = {
  typeUrl: "/ibc.core.client.v1.MsgCreateClient",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.clientState !== void 0) {
      import_any.Any.encode(message.clientState, writer.uint32(10).fork()).ldelim();
    }
    if (message.consensusState !== void 0) {
      import_any.Any.encode(message.consensusState, writer.uint32(18).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(26).string(message.signer);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateClient();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientState = import_any.Any.decode(reader, reader.uint32());
          break;
        case 2:
          message.consensusState = import_any.Any.decode(reader, reader.uint32());
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
    message.clientState = object.clientState !== void 0 && object.clientState !== null ? import_any.Any.fromPartial(object.clientState) : void 0;
    message.consensusState = object.consensusState !== void 0 && object.consensusState !== null ? import_any.Any.fromPartial(object.consensusState) : void 0;
    message.signer = object.signer ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgCreateClient();
    if (object.client_state !== void 0 && object.client_state !== null) {
      message.clientState = import_any.Any.fromAmino(object.client_state);
    }
    if (object.consensus_state !== void 0 && object.consensus_state !== null) {
      message.consensusState = import_any.Any.fromAmino(object.consensus_state);
    }
    if (object.signer !== void 0 && object.signer !== null) {
      message.signer = object.signer;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.client_state = message.clientState ? import_any.Any.toAmino(message.clientState) : void 0;
    obj.consensus_state = message.consensusState ? import_any.Any.toAmino(message.consensusState) : void 0;
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
  encode(_, writer = import_binary.BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
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
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }
    if (message.clientMessage !== void 0) {
      import_any.Any.encode(message.clientMessage, writer.uint32(18).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(26).string(message.signer);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateClient();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;
        case 2:
          message.clientMessage = import_any.Any.decode(reader, reader.uint32());
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
    message.clientMessage = object.clientMessage !== void 0 && object.clientMessage !== null ? import_any.Any.fromPartial(object.clientMessage) : void 0;
    message.signer = object.signer ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgUpdateClient();
    if (object.client_id !== void 0 && object.client_id !== null) {
      message.clientId = object.client_id;
    }
    if (object.client_message !== void 0 && object.client_message !== null) {
      message.clientMessage = import_any.Any.fromAmino(object.client_message);
    }
    if (object.signer !== void 0 && object.signer !== null) {
      message.signer = object.signer;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.client_id = message.clientId === "" ? void 0 : message.clientId;
    obj.client_message = message.clientMessage ? import_any.Any.toAmino(message.clientMessage) : void 0;
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
  encode(_, writer = import_binary.BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
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
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }
    if (message.clientState !== void 0) {
      import_any.Any.encode(message.clientState, writer.uint32(18).fork()).ldelim();
    }
    if (message.consensusState !== void 0) {
      import_any.Any.encode(message.consensusState, writer.uint32(26).fork()).ldelim();
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
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgUpgradeClient();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;
        case 2:
          message.clientState = import_any.Any.decode(reader, reader.uint32());
          break;
        case 3:
          message.consensusState = import_any.Any.decode(reader, reader.uint32());
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
    message.clientState = object.clientState !== void 0 && object.clientState !== null ? import_any.Any.fromPartial(object.clientState) : void 0;
    message.consensusState = object.consensusState !== void 0 && object.consensusState !== null ? import_any.Any.fromPartial(object.consensusState) : void 0;
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
      message.clientState = import_any.Any.fromAmino(object.client_state);
    }
    if (object.consensus_state !== void 0 && object.consensus_state !== null) {
      message.consensusState = import_any.Any.fromAmino(object.consensus_state);
    }
    if (object.proof_upgrade_client !== void 0 && object.proof_upgrade_client !== null) {
      message.proofUpgradeClient = (0, import_helpers.bytesFromBase64)(object.proof_upgrade_client);
    }
    if (object.proof_upgrade_consensus_state !== void 0 && object.proof_upgrade_consensus_state !== null) {
      message.proofUpgradeConsensusState = (0, import_helpers.bytesFromBase64)(object.proof_upgrade_consensus_state);
    }
    if (object.signer !== void 0 && object.signer !== null) {
      message.signer = object.signer;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.client_id = message.clientId === "" ? void 0 : message.clientId;
    obj.client_state = message.clientState ? import_any.Any.toAmino(message.clientState) : void 0;
    obj.consensus_state = message.consensusState ? import_any.Any.toAmino(message.consensusState) : void 0;
    obj.proof_upgrade_client = message.proofUpgradeClient ? (0, import_helpers.base64FromBytes)(message.proofUpgradeClient) : void 0;
    obj.proof_upgrade_consensus_state = message.proofUpgradeConsensusState ? (0, import_helpers.base64FromBytes)(message.proofUpgradeConsensusState) : void 0;
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
  encode(_, writer = import_binary.BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
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
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }
    if (message.misbehaviour !== void 0) {
      import_any.Any.encode(message.misbehaviour, writer.uint32(18).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(26).string(message.signer);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitMisbehaviour();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;
        case 2:
          message.misbehaviour = import_any.Any.decode(reader, reader.uint32());
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
    message.misbehaviour = object.misbehaviour !== void 0 && object.misbehaviour !== null ? import_any.Any.fromPartial(object.misbehaviour) : void 0;
    message.signer = object.signer ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgSubmitMisbehaviour();
    if (object.client_id !== void 0 && object.client_id !== null) {
      message.clientId = object.client_id;
    }
    if (object.misbehaviour !== void 0 && object.misbehaviour !== null) {
      message.misbehaviour = import_any.Any.fromAmino(object.misbehaviour);
    }
    if (object.signer !== void 0 && object.signer !== null) {
      message.signer = object.signer;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.client_id = message.clientId === "" ? void 0 : message.clientId;
    obj.misbehaviour = message.misbehaviour ? import_any.Any.toAmino(message.misbehaviour) : void 0;
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
  encode(_, writer = import_binary.BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
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
function createBaseMsgRecoverClient() {
  return {
    subjectClientId: "",
    substituteClientId: "",
    signer: ""
  };
}
const MsgRecoverClient = {
  typeUrl: "/ibc.core.client.v1.MsgRecoverClient",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.subjectClientId !== "") {
      writer.uint32(10).string(message.subjectClientId);
    }
    if (message.substituteClientId !== "") {
      writer.uint32(18).string(message.substituteClientId);
    }
    if (message.signer !== "") {
      writer.uint32(26).string(message.signer);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgRecoverClient();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subjectClientId = reader.string();
          break;
        case 2:
          message.substituteClientId = reader.string();
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
    const message = createBaseMsgRecoverClient();
    message.subjectClientId = object.subjectClientId ?? "";
    message.substituteClientId = object.substituteClientId ?? "";
    message.signer = object.signer ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgRecoverClient();
    if (object.subject_client_id !== void 0 && object.subject_client_id !== null) {
      message.subjectClientId = object.subject_client_id;
    }
    if (object.substitute_client_id !== void 0 && object.substitute_client_id !== null) {
      message.substituteClientId = object.substitute_client_id;
    }
    if (object.signer !== void 0 && object.signer !== null) {
      message.signer = object.signer;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.subject_client_id = message.subjectClientId === "" ? void 0 : message.subjectClientId;
    obj.substitute_client_id = message.substituteClientId === "" ? void 0 : message.substituteClientId;
    obj.signer = message.signer === "" ? void 0 : message.signer;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgRecoverClient.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgRecoverClient",
      value: MsgRecoverClient.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgRecoverClient.decode(message.value);
  },
  toProto(message) {
    return MsgRecoverClient.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.core.client.v1.MsgRecoverClient",
      value: MsgRecoverClient.encode(message).finish()
    };
  }
};
function createBaseMsgRecoverClientResponse() {
  return {};
}
const MsgRecoverClientResponse = {
  typeUrl: "/ibc.core.client.v1.MsgRecoverClientResponse",
  encode(_, writer = import_binary.BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgRecoverClientResponse();
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
    const message = createBaseMsgRecoverClientResponse();
    return message;
  },
  fromAmino(_) {
    const message = createBaseMsgRecoverClientResponse();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return MsgRecoverClientResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgRecoverClientResponse",
      value: MsgRecoverClientResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgRecoverClientResponse.decode(message.value);
  },
  toProto(message) {
    return MsgRecoverClientResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.core.client.v1.MsgRecoverClientResponse",
      value: MsgRecoverClientResponse.encode(message).finish()
    };
  }
};
function createBaseMsgIBCSoftwareUpgrade() {
  return {
    plan: import_upgrade.Plan.fromPartial({}),
    upgradedClientState: void 0,
    signer: ""
  };
}
const MsgIBCSoftwareUpgrade = {
  typeUrl: "/ibc.core.client.v1.MsgIBCSoftwareUpgrade",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.plan !== void 0) {
      import_upgrade.Plan.encode(message.plan, writer.uint32(10).fork()).ldelim();
    }
    if (message.upgradedClientState !== void 0) {
      import_any.Any.encode(message.upgradedClientState, writer.uint32(18).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(26).string(message.signer);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgIBCSoftwareUpgrade();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.plan = import_upgrade.Plan.decode(reader, reader.uint32());
          break;
        case 2:
          message.upgradedClientState = import_any.Any.decode(reader, reader.uint32());
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
    const message = createBaseMsgIBCSoftwareUpgrade();
    message.plan = object.plan !== void 0 && object.plan !== null ? import_upgrade.Plan.fromPartial(object.plan) : void 0;
    message.upgradedClientState = object.upgradedClientState !== void 0 && object.upgradedClientState !== null ? import_any.Any.fromPartial(object.upgradedClientState) : void 0;
    message.signer = object.signer ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgIBCSoftwareUpgrade();
    if (object.plan !== void 0 && object.plan !== null) {
      message.plan = import_upgrade.Plan.fromAmino(object.plan);
    }
    if (object.upgraded_client_state !== void 0 && object.upgraded_client_state !== null) {
      message.upgradedClientState = import_any.Any.fromAmino(object.upgraded_client_state);
    }
    if (object.signer !== void 0 && object.signer !== null) {
      message.signer = object.signer;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.plan = message.plan ? import_upgrade.Plan.toAmino(message.plan) : void 0;
    obj.upgraded_client_state = message.upgradedClientState ? import_any.Any.toAmino(message.upgradedClientState) : void 0;
    obj.signer = message.signer === "" ? void 0 : message.signer;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgIBCSoftwareUpgrade.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgIBCSoftwareUpgrade",
      value: MsgIBCSoftwareUpgrade.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgIBCSoftwareUpgrade.decode(message.value);
  },
  toProto(message) {
    return MsgIBCSoftwareUpgrade.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.core.client.v1.MsgIBCSoftwareUpgrade",
      value: MsgIBCSoftwareUpgrade.encode(message).finish()
    };
  }
};
function createBaseMsgIBCSoftwareUpgradeResponse() {
  return {};
}
const MsgIBCSoftwareUpgradeResponse = {
  typeUrl: "/ibc.core.client.v1.MsgIBCSoftwareUpgradeResponse",
  encode(_, writer = import_binary.BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgIBCSoftwareUpgradeResponse();
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
    const message = createBaseMsgIBCSoftwareUpgradeResponse();
    return message;
  },
  fromAmino(_) {
    const message = createBaseMsgIBCSoftwareUpgradeResponse();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return MsgIBCSoftwareUpgradeResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgIBCSoftwareUpgradeResponse",
      value: MsgIBCSoftwareUpgradeResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgIBCSoftwareUpgradeResponse.decode(message.value);
  },
  toProto(message) {
    return MsgIBCSoftwareUpgradeResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.core.client.v1.MsgIBCSoftwareUpgradeResponse",
      value: MsgIBCSoftwareUpgradeResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateParams() {
  return {
    signer: "",
    params: import_client.Params.fromPartial({})
  };
}
const MsgUpdateParams = {
  typeUrl: "/ibc.core.client.v1.MsgUpdateParams",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }
    if (message.params !== void 0) {
      import_client.Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signer = reader.string();
          break;
        case 2:
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
    const message = createBaseMsgUpdateParams();
    message.signer = object.signer ?? "";
    message.params = object.params !== void 0 && object.params !== null ? import_client.Params.fromPartial(object.params) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgUpdateParams();
    if (object.signer !== void 0 && object.signer !== null) {
      message.signer = object.signer;
    }
    if (object.params !== void 0 && object.params !== null) {
      message.params = import_client.Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.signer = message.signer === "" ? void 0 : message.signer;
    obj.params = message.params ? import_client.Params.toAmino(message.params) : void 0;
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
      typeUrl: "/ibc.core.client.v1.MsgUpdateParams",
      value: MsgUpdateParams.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateParamsResponse() {
  return {};
}
const MsgUpdateParamsResponse = {
  typeUrl: "/ibc.core.client.v1.MsgUpdateParamsResponse",
  encode(_, writer = import_binary.BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
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
      typeUrl: "/ibc.core.client.v1.MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.encode(message).finish()
    };
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  MsgCreateClient,
  MsgCreateClientResponse,
  MsgIBCSoftwareUpgrade,
  MsgIBCSoftwareUpgradeResponse,
  MsgRecoverClient,
  MsgRecoverClientResponse,
  MsgSubmitMisbehaviour,
  MsgSubmitMisbehaviourResponse,
  MsgUpdateClient,
  MsgUpdateClientResponse,
  MsgUpdateParams,
  MsgUpdateParamsResponse,
  MsgUpgradeClient,
  MsgUpgradeClientResponse
});
