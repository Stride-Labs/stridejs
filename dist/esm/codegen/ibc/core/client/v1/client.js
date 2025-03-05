import { Any } from "../../../../google/protobuf/any";
import { Plan } from "../../../../cosmos/upgrade/v1beta1/upgrade";
import { BinaryReader, BinaryWriter } from "../../../../binary";
function createBaseIdentifiedClientState() {
  return {
    clientId: "",
    clientState: void 0
  };
}
const IdentifiedClientState = {
  typeUrl: "/ibc.core.client.v1.IdentifiedClientState",
  encode(message, writer = BinaryWriter.create()) {
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }
    if (message.clientState !== void 0) {
      Any.encode(message.clientState, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseIdentifiedClientState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;
        case 2:
          message.clientState = Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseIdentifiedClientState();
    message.clientId = object.clientId ?? "";
    message.clientState = object.clientState !== void 0 && object.clientState !== null ? Any.fromPartial(object.clientState) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseIdentifiedClientState();
    if (object.client_id !== void 0 && object.client_id !== null) {
      message.clientId = object.client_id;
    }
    if (object.client_state !== void 0 && object.client_state !== null) {
      message.clientState = Any.fromAmino(object.client_state);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.client_id = message.clientId === "" ? void 0 : message.clientId;
    obj.client_state = message.clientState ? Any.toAmino(message.clientState) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return IdentifiedClientState.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/IdentifiedClientState",
      value: IdentifiedClientState.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return IdentifiedClientState.decode(message.value);
  },
  toProto(message) {
    return IdentifiedClientState.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.core.client.v1.IdentifiedClientState",
      value: IdentifiedClientState.encode(message).finish()
    };
  }
};
function createBaseConsensusStateWithHeight() {
  return {
    height: Height.fromPartial({}),
    consensusState: void 0
  };
}
const ConsensusStateWithHeight = {
  typeUrl: "/ibc.core.client.v1.ConsensusStateWithHeight",
  encode(message, writer = BinaryWriter.create()) {
    if (message.height !== void 0) {
      Height.encode(message.height, writer.uint32(10).fork()).ldelim();
    }
    if (message.consensusState !== void 0) {
      Any.encode(message.consensusState, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseConsensusStateWithHeight();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = Height.decode(reader, reader.uint32());
          break;
        case 2:
          message.consensusState = Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseConsensusStateWithHeight();
    message.height = object.height !== void 0 && object.height !== null ? Height.fromPartial(object.height) : void 0;
    message.consensusState = object.consensusState !== void 0 && object.consensusState !== null ? Any.fromPartial(object.consensusState) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseConsensusStateWithHeight();
    if (object.height !== void 0 && object.height !== null) {
      message.height = Height.fromAmino(object.height);
    }
    if (object.consensus_state !== void 0 && object.consensus_state !== null) {
      message.consensusState = Any.fromAmino(object.consensus_state);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.height = message.height ? Height.toAmino(message.height) : void 0;
    obj.consensus_state = message.consensusState ? Any.toAmino(message.consensusState) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return ConsensusStateWithHeight.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/ConsensusStateWithHeight",
      value: ConsensusStateWithHeight.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return ConsensusStateWithHeight.decode(message.value);
  },
  toProto(message) {
    return ConsensusStateWithHeight.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.core.client.v1.ConsensusStateWithHeight",
      value: ConsensusStateWithHeight.encode(message).finish()
    };
  }
};
function createBaseClientConsensusStates() {
  return {
    clientId: "",
    consensusStates: []
  };
}
const ClientConsensusStates = {
  typeUrl: "/ibc.core.client.v1.ClientConsensusStates",
  encode(message, writer = BinaryWriter.create()) {
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }
    for (const v of message.consensusStates) {
      ConsensusStateWithHeight.encode(v, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseClientConsensusStates();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;
        case 2:
          message.consensusStates.push(ConsensusStateWithHeight.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseClientConsensusStates();
    message.clientId = object.clientId ?? "";
    message.consensusStates = object.consensusStates?.map((e) => ConsensusStateWithHeight.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseClientConsensusStates();
    if (object.client_id !== void 0 && object.client_id !== null) {
      message.clientId = object.client_id;
    }
    message.consensusStates = object.consensus_states?.map((e) => ConsensusStateWithHeight.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.client_id = message.clientId === "" ? void 0 : message.clientId;
    if (message.consensusStates) {
      obj.consensus_states = message.consensusStates.map((e) => e ? ConsensusStateWithHeight.toAmino(e) : void 0);
    } else {
      obj.consensus_states = message.consensusStates;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return ClientConsensusStates.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/ClientConsensusStates",
      value: ClientConsensusStates.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return ClientConsensusStates.decode(message.value);
  },
  toProto(message) {
    return ClientConsensusStates.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.core.client.v1.ClientConsensusStates",
      value: ClientConsensusStates.encode(message).finish()
    };
  }
};
function createBaseClientUpdateProposal() {
  return {
    $typeUrl: "/ibc.core.client.v1.ClientUpdateProposal",
    title: "",
    description: "",
    subjectClientId: "",
    substituteClientId: ""
  };
}
const ClientUpdateProposal = {
  typeUrl: "/ibc.core.client.v1.ClientUpdateProposal",
  encode(message, writer = BinaryWriter.create()) {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.subjectClientId !== "") {
      writer.uint32(26).string(message.subjectClientId);
    }
    if (message.substituteClientId !== "") {
      writer.uint32(34).string(message.substituteClientId);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseClientUpdateProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.subjectClientId = reader.string();
          break;
        case 4:
          message.substituteClientId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseClientUpdateProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.subjectClientId = object.subjectClientId ?? "";
    message.substituteClientId = object.substituteClientId ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseClientUpdateProposal();
    if (object.title !== void 0 && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== void 0 && object.description !== null) {
      message.description = object.description;
    }
    if (object.subject_client_id !== void 0 && object.subject_client_id !== null) {
      message.subjectClientId = object.subject_client_id;
    }
    if (object.substitute_client_id !== void 0 && object.substitute_client_id !== null) {
      message.substituteClientId = object.substitute_client_id;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.title = message.title === "" ? void 0 : message.title;
    obj.description = message.description === "" ? void 0 : message.description;
    obj.subject_client_id = message.subjectClientId === "" ? void 0 : message.subjectClientId;
    obj.substitute_client_id = message.substituteClientId === "" ? void 0 : message.substituteClientId;
    return obj;
  },
  fromAminoMsg(object) {
    return ClientUpdateProposal.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/ClientUpdateProposal",
      value: ClientUpdateProposal.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return ClientUpdateProposal.decode(message.value);
  },
  toProto(message) {
    return ClientUpdateProposal.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.core.client.v1.ClientUpdateProposal",
      value: ClientUpdateProposal.encode(message).finish()
    };
  }
};
function createBaseUpgradeProposal() {
  return {
    $typeUrl: "/ibc.core.client.v1.UpgradeProposal",
    title: "",
    description: "",
    plan: Plan.fromPartial({}),
    upgradedClientState: void 0
  };
}
const UpgradeProposal = {
  typeUrl: "/ibc.core.client.v1.UpgradeProposal",
  encode(message, writer = BinaryWriter.create()) {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.plan !== void 0) {
      Plan.encode(message.plan, writer.uint32(26).fork()).ldelim();
    }
    if (message.upgradedClientState !== void 0) {
      Any.encode(message.upgradedClientState, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseUpgradeProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.plan = Plan.decode(reader, reader.uint32());
          break;
        case 4:
          message.upgradedClientState = Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseUpgradeProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.plan = object.plan !== void 0 && object.plan !== null ? Plan.fromPartial(object.plan) : void 0;
    message.upgradedClientState = object.upgradedClientState !== void 0 && object.upgradedClientState !== null ? Any.fromPartial(object.upgradedClientState) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseUpgradeProposal();
    if (object.title !== void 0 && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== void 0 && object.description !== null) {
      message.description = object.description;
    }
    if (object.plan !== void 0 && object.plan !== null) {
      message.plan = Plan.fromAmino(object.plan);
    }
    if (object.upgraded_client_state !== void 0 && object.upgraded_client_state !== null) {
      message.upgradedClientState = Any.fromAmino(object.upgraded_client_state);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.title = message.title === "" ? void 0 : message.title;
    obj.description = message.description === "" ? void 0 : message.description;
    obj.plan = message.plan ? Plan.toAmino(message.plan) : void 0;
    obj.upgraded_client_state = message.upgradedClientState ? Any.toAmino(message.upgradedClientState) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return UpgradeProposal.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/UpgradeProposal",
      value: UpgradeProposal.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return UpgradeProposal.decode(message.value);
  },
  toProto(message) {
    return UpgradeProposal.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.core.client.v1.UpgradeProposal",
      value: UpgradeProposal.encode(message).finish()
    };
  }
};
function createBaseHeight() {
  return {
    revisionNumber: BigInt(0),
    revisionHeight: BigInt(0)
  };
}
const Height = {
  typeUrl: "/ibc.core.client.v1.Height",
  encode(message, writer = BinaryWriter.create()) {
    if (message.revisionNumber !== BigInt(0)) {
      writer.uint32(8).uint64(message.revisionNumber);
    }
    if (message.revisionHeight !== BigInt(0)) {
      writer.uint32(16).uint64(message.revisionHeight);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseHeight();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.revisionNumber = reader.uint64();
          break;
        case 2:
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
    const message = createBaseHeight();
    message.revisionNumber = object.revisionNumber !== void 0 && object.revisionNumber !== null ? BigInt(object.revisionNumber.toString()) : BigInt(0);
    message.revisionHeight = object.revisionHeight !== void 0 && object.revisionHeight !== null ? BigInt(object.revisionHeight.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object) {
    return {
      revisionNumber: BigInt(object.revision_number || "0"),
      revisionHeight: BigInt(object.revision_height || "0")
    };
  },
  toAmino(message) {
    const obj = {};
    obj.revision_number = message.revisionNumber !== BigInt(0) ? message.revisionNumber?.toString() : void 0;
    obj.revision_height = message.revisionHeight !== BigInt(0) ? message.revisionHeight?.toString() : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return Height.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/Height",
      value: Height.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return Height.decode(message.value);
  },
  toProto(message) {
    return Height.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.core.client.v1.Height",
      value: Height.encode(message).finish()
    };
  }
};
function createBaseParams() {
  return {
    allowedClients: []
  };
}
const Params = {
  typeUrl: "/ibc.core.client.v1.Params",
  encode(message, writer = BinaryWriter.create()) {
    for (const v of message.allowedClients) {
      writer.uint32(10).string(v);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.allowedClients.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseParams();
    message.allowedClients = object.allowedClients?.map((e) => e) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseParams();
    message.allowedClients = object.allowed_clients?.map((e) => e) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.allowedClients) {
      obj.allowed_clients = message.allowedClients.map((e) => e);
    } else {
      obj.allowed_clients = message.allowedClients;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return Params.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/Params",
      value: Params.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return Params.decode(message.value);
  },
  toProto(message) {
    return Params.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.core.client.v1.Params",
      value: Params.encode(message).finish()
    };
  }
};
export {
  ClientConsensusStates,
  ClientUpdateProposal,
  ConsensusStateWithHeight,
  Height,
  IdentifiedClientState,
  Params,
  UpgradeProposal
};
