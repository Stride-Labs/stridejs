import { Any } from "../../../../google/protobuf/any";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { bytesFromBase64, base64FromBytes } from "../../../../helpers";
function createBaseClientState() {
  return {
    sequence: BigInt(0),
    isFrozen: false,
    consensusState: void 0
  };
}
const ClientState = {
  typeUrl: "/ibc.lightclients.solomachine.v3.ClientState",
  encode(message, writer = BinaryWriter.create()) {
    if (message.sequence !== BigInt(0)) {
      writer.uint32(8).uint64(message.sequence);
    }
    if (message.isFrozen === true) {
      writer.uint32(16).bool(message.isFrozen);
    }
    if (message.consensusState !== void 0) {
      ConsensusState.encode(message.consensusState, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseClientState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sequence = reader.uint64();
          break;
        case 2:
          message.isFrozen = reader.bool();
          break;
        case 3:
          message.consensusState = ConsensusState.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseClientState();
    message.sequence = object.sequence !== void 0 && object.sequence !== null ? BigInt(object.sequence.toString()) : BigInt(0);
    message.isFrozen = object.isFrozen ?? false;
    message.consensusState = object.consensusState !== void 0 && object.consensusState !== null ? ConsensusState.fromPartial(object.consensusState) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseClientState();
    if (object.sequence !== void 0 && object.sequence !== null) {
      message.sequence = BigInt(object.sequence);
    }
    if (object.is_frozen !== void 0 && object.is_frozen !== null) {
      message.isFrozen = object.is_frozen;
    }
    if (object.consensus_state !== void 0 && object.consensus_state !== null) {
      message.consensusState = ConsensusState.fromAmino(object.consensus_state);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.sequence = message.sequence !== BigInt(0) ? message.sequence.toString() : void 0;
    obj.is_frozen = message.isFrozen === false ? void 0 : message.isFrozen;
    obj.consensus_state = message.consensusState ? ConsensusState.toAmino(message.consensusState) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return ClientState.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/ClientState",
      value: ClientState.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return ClientState.decode(message.value);
  },
  toProto(message) {
    return ClientState.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.lightclients.solomachine.v3.ClientState",
      value: ClientState.encode(message).finish()
    };
  }
};
function createBaseConsensusState() {
  return {
    publicKey: void 0,
    diversifier: "",
    timestamp: BigInt(0)
  };
}
const ConsensusState = {
  typeUrl: "/ibc.lightclients.solomachine.v3.ConsensusState",
  encode(message, writer = BinaryWriter.create()) {
    if (message.publicKey !== void 0) {
      Any.encode(message.publicKey, writer.uint32(10).fork()).ldelim();
    }
    if (message.diversifier !== "") {
      writer.uint32(18).string(message.diversifier);
    }
    if (message.timestamp !== BigInt(0)) {
      writer.uint32(24).uint64(message.timestamp);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseConsensusState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.publicKey = Any.decode(reader, reader.uint32());
          break;
        case 2:
          message.diversifier = reader.string();
          break;
        case 3:
          message.timestamp = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseConsensusState();
    message.publicKey = object.publicKey !== void 0 && object.publicKey !== null ? Any.fromPartial(object.publicKey) : void 0;
    message.diversifier = object.diversifier ?? "";
    message.timestamp = object.timestamp !== void 0 && object.timestamp !== null ? BigInt(object.timestamp.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object) {
    const message = createBaseConsensusState();
    if (object.public_key !== void 0 && object.public_key !== null) {
      message.publicKey = Any.fromAmino(object.public_key);
    }
    if (object.diversifier !== void 0 && object.diversifier !== null) {
      message.diversifier = object.diversifier;
    }
    if (object.timestamp !== void 0 && object.timestamp !== null) {
      message.timestamp = BigInt(object.timestamp);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.public_key = message.publicKey ? Any.toAmino(message.publicKey) : void 0;
    obj.diversifier = message.diversifier === "" ? void 0 : message.diversifier;
    obj.timestamp = message.timestamp !== BigInt(0) ? message.timestamp.toString() : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return ConsensusState.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/ConsensusState",
      value: ConsensusState.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return ConsensusState.decode(message.value);
  },
  toProto(message) {
    return ConsensusState.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.lightclients.solomachine.v3.ConsensusState",
      value: ConsensusState.encode(message).finish()
    };
  }
};
function createBaseHeader() {
  return {
    timestamp: BigInt(0),
    signature: new Uint8Array(),
    newPublicKey: void 0,
    newDiversifier: ""
  };
}
const Header = {
  typeUrl: "/ibc.lightclients.solomachine.v3.Header",
  encode(message, writer = BinaryWriter.create()) {
    if (message.timestamp !== BigInt(0)) {
      writer.uint32(8).uint64(message.timestamp);
    }
    if (message.signature.length !== 0) {
      writer.uint32(18).bytes(message.signature);
    }
    if (message.newPublicKey !== void 0) {
      Any.encode(message.newPublicKey, writer.uint32(26).fork()).ldelim();
    }
    if (message.newDiversifier !== "") {
      writer.uint32(34).string(message.newDiversifier);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseHeader();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.timestamp = reader.uint64();
          break;
        case 2:
          message.signature = reader.bytes();
          break;
        case 3:
          message.newPublicKey = Any.decode(reader, reader.uint32());
          break;
        case 4:
          message.newDiversifier = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseHeader();
    message.timestamp = object.timestamp !== void 0 && object.timestamp !== null ? BigInt(object.timestamp.toString()) : BigInt(0);
    message.signature = object.signature ?? new Uint8Array();
    message.newPublicKey = object.newPublicKey !== void 0 && object.newPublicKey !== null ? Any.fromPartial(object.newPublicKey) : void 0;
    message.newDiversifier = object.newDiversifier ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseHeader();
    if (object.timestamp !== void 0 && object.timestamp !== null) {
      message.timestamp = BigInt(object.timestamp);
    }
    if (object.signature !== void 0 && object.signature !== null) {
      message.signature = bytesFromBase64(object.signature);
    }
    if (object.new_public_key !== void 0 && object.new_public_key !== null) {
      message.newPublicKey = Any.fromAmino(object.new_public_key);
    }
    if (object.new_diversifier !== void 0 && object.new_diversifier !== null) {
      message.newDiversifier = object.new_diversifier;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.timestamp = message.timestamp !== BigInt(0) ? message.timestamp.toString() : void 0;
    obj.signature = message.signature ? base64FromBytes(message.signature) : void 0;
    obj.new_public_key = message.newPublicKey ? Any.toAmino(message.newPublicKey) : void 0;
    obj.new_diversifier = message.newDiversifier === "" ? void 0 : message.newDiversifier;
    return obj;
  },
  fromAminoMsg(object) {
    return Header.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/Header",
      value: Header.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return Header.decode(message.value);
  },
  toProto(message) {
    return Header.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.lightclients.solomachine.v3.Header",
      value: Header.encode(message).finish()
    };
  }
};
function createBaseMisbehaviour() {
  return {
    sequence: BigInt(0),
    signatureOne: void 0,
    signatureTwo: void 0
  };
}
const Misbehaviour = {
  typeUrl: "/ibc.lightclients.solomachine.v3.Misbehaviour",
  encode(message, writer = BinaryWriter.create()) {
    if (message.sequence !== BigInt(0)) {
      writer.uint32(8).uint64(message.sequence);
    }
    if (message.signatureOne !== void 0) {
      SignatureAndData.encode(message.signatureOne, writer.uint32(18).fork()).ldelim();
    }
    if (message.signatureTwo !== void 0) {
      SignatureAndData.encode(message.signatureTwo, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMisbehaviour();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sequence = reader.uint64();
          break;
        case 2:
          message.signatureOne = SignatureAndData.decode(reader, reader.uint32());
          break;
        case 3:
          message.signatureTwo = SignatureAndData.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMisbehaviour();
    message.sequence = object.sequence !== void 0 && object.sequence !== null ? BigInt(object.sequence.toString()) : BigInt(0);
    message.signatureOne = object.signatureOne !== void 0 && object.signatureOne !== null ? SignatureAndData.fromPartial(object.signatureOne) : void 0;
    message.signatureTwo = object.signatureTwo !== void 0 && object.signatureTwo !== null ? SignatureAndData.fromPartial(object.signatureTwo) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseMisbehaviour();
    if (object.sequence !== void 0 && object.sequence !== null) {
      message.sequence = BigInt(object.sequence);
    }
    if (object.signature_one !== void 0 && object.signature_one !== null) {
      message.signatureOne = SignatureAndData.fromAmino(object.signature_one);
    }
    if (object.signature_two !== void 0 && object.signature_two !== null) {
      message.signatureTwo = SignatureAndData.fromAmino(object.signature_two);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.sequence = message.sequence !== BigInt(0) ? message.sequence.toString() : void 0;
    obj.signature_one = message.signatureOne ? SignatureAndData.toAmino(message.signatureOne) : void 0;
    obj.signature_two = message.signatureTwo ? SignatureAndData.toAmino(message.signatureTwo) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return Misbehaviour.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/Misbehaviour",
      value: Misbehaviour.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return Misbehaviour.decode(message.value);
  },
  toProto(message) {
    return Misbehaviour.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.lightclients.solomachine.v3.Misbehaviour",
      value: Misbehaviour.encode(message).finish()
    };
  }
};
function createBaseSignatureAndData() {
  return {
    signature: new Uint8Array(),
    path: new Uint8Array(),
    data: new Uint8Array(),
    timestamp: BigInt(0)
  };
}
const SignatureAndData = {
  typeUrl: "/ibc.lightclients.solomachine.v3.SignatureAndData",
  encode(message, writer = BinaryWriter.create()) {
    if (message.signature.length !== 0) {
      writer.uint32(10).bytes(message.signature);
    }
    if (message.path.length !== 0) {
      writer.uint32(18).bytes(message.path);
    }
    if (message.data.length !== 0) {
      writer.uint32(26).bytes(message.data);
    }
    if (message.timestamp !== BigInt(0)) {
      writer.uint32(32).uint64(message.timestamp);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseSignatureAndData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signature = reader.bytes();
          break;
        case 2:
          message.path = reader.bytes();
          break;
        case 3:
          message.data = reader.bytes();
          break;
        case 4:
          message.timestamp = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseSignatureAndData();
    message.signature = object.signature ?? new Uint8Array();
    message.path = object.path ?? new Uint8Array();
    message.data = object.data ?? new Uint8Array();
    message.timestamp = object.timestamp !== void 0 && object.timestamp !== null ? BigInt(object.timestamp.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object) {
    const message = createBaseSignatureAndData();
    if (object.signature !== void 0 && object.signature !== null) {
      message.signature = bytesFromBase64(object.signature);
    }
    if (object.path !== void 0 && object.path !== null) {
      message.path = bytesFromBase64(object.path);
    }
    if (object.data !== void 0 && object.data !== null) {
      message.data = bytesFromBase64(object.data);
    }
    if (object.timestamp !== void 0 && object.timestamp !== null) {
      message.timestamp = BigInt(object.timestamp);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.signature = message.signature ? base64FromBytes(message.signature) : void 0;
    obj.path = message.path ? base64FromBytes(message.path) : void 0;
    obj.data = message.data ? base64FromBytes(message.data) : void 0;
    obj.timestamp = message.timestamp !== BigInt(0) ? message.timestamp.toString() : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return SignatureAndData.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/SignatureAndData",
      value: SignatureAndData.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return SignatureAndData.decode(message.value);
  },
  toProto(message) {
    return SignatureAndData.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.lightclients.solomachine.v3.SignatureAndData",
      value: SignatureAndData.encode(message).finish()
    };
  }
};
function createBaseTimestampedSignatureData() {
  return {
    signatureData: new Uint8Array(),
    timestamp: BigInt(0)
  };
}
const TimestampedSignatureData = {
  typeUrl: "/ibc.lightclients.solomachine.v3.TimestampedSignatureData",
  encode(message, writer = BinaryWriter.create()) {
    if (message.signatureData.length !== 0) {
      writer.uint32(10).bytes(message.signatureData);
    }
    if (message.timestamp !== BigInt(0)) {
      writer.uint32(16).uint64(message.timestamp);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseTimestampedSignatureData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signatureData = reader.bytes();
          break;
        case 2:
          message.timestamp = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseTimestampedSignatureData();
    message.signatureData = object.signatureData ?? new Uint8Array();
    message.timestamp = object.timestamp !== void 0 && object.timestamp !== null ? BigInt(object.timestamp.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object) {
    const message = createBaseTimestampedSignatureData();
    if (object.signature_data !== void 0 && object.signature_data !== null) {
      message.signatureData = bytesFromBase64(object.signature_data);
    }
    if (object.timestamp !== void 0 && object.timestamp !== null) {
      message.timestamp = BigInt(object.timestamp);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.signature_data = message.signatureData ? base64FromBytes(message.signatureData) : void 0;
    obj.timestamp = message.timestamp !== BigInt(0) ? message.timestamp.toString() : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return TimestampedSignatureData.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/TimestampedSignatureData",
      value: TimestampedSignatureData.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return TimestampedSignatureData.decode(message.value);
  },
  toProto(message) {
    return TimestampedSignatureData.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.lightclients.solomachine.v3.TimestampedSignatureData",
      value: TimestampedSignatureData.encode(message).finish()
    };
  }
};
function createBaseSignBytes() {
  return {
    sequence: BigInt(0),
    timestamp: BigInt(0),
    diversifier: "",
    path: new Uint8Array(),
    data: new Uint8Array()
  };
}
const SignBytes = {
  typeUrl: "/ibc.lightclients.solomachine.v3.SignBytes",
  encode(message, writer = BinaryWriter.create()) {
    if (message.sequence !== BigInt(0)) {
      writer.uint32(8).uint64(message.sequence);
    }
    if (message.timestamp !== BigInt(0)) {
      writer.uint32(16).uint64(message.timestamp);
    }
    if (message.diversifier !== "") {
      writer.uint32(26).string(message.diversifier);
    }
    if (message.path.length !== 0) {
      writer.uint32(34).bytes(message.path);
    }
    if (message.data.length !== 0) {
      writer.uint32(42).bytes(message.data);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseSignBytes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sequence = reader.uint64();
          break;
        case 2:
          message.timestamp = reader.uint64();
          break;
        case 3:
          message.diversifier = reader.string();
          break;
        case 4:
          message.path = reader.bytes();
          break;
        case 5:
          message.data = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseSignBytes();
    message.sequence = object.sequence !== void 0 && object.sequence !== null ? BigInt(object.sequence.toString()) : BigInt(0);
    message.timestamp = object.timestamp !== void 0 && object.timestamp !== null ? BigInt(object.timestamp.toString()) : BigInt(0);
    message.diversifier = object.diversifier ?? "";
    message.path = object.path ?? new Uint8Array();
    message.data = object.data ?? new Uint8Array();
    return message;
  },
  fromAmino(object) {
    const message = createBaseSignBytes();
    if (object.sequence !== void 0 && object.sequence !== null) {
      message.sequence = BigInt(object.sequence);
    }
    if (object.timestamp !== void 0 && object.timestamp !== null) {
      message.timestamp = BigInt(object.timestamp);
    }
    if (object.diversifier !== void 0 && object.diversifier !== null) {
      message.diversifier = object.diversifier;
    }
    if (object.path !== void 0 && object.path !== null) {
      message.path = bytesFromBase64(object.path);
    }
    if (object.data !== void 0 && object.data !== null) {
      message.data = bytesFromBase64(object.data);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.sequence = message.sequence !== BigInt(0) ? message.sequence.toString() : void 0;
    obj.timestamp = message.timestamp !== BigInt(0) ? message.timestamp.toString() : void 0;
    obj.diversifier = message.diversifier === "" ? void 0 : message.diversifier;
    obj.path = message.path ? base64FromBytes(message.path) : void 0;
    obj.data = message.data ? base64FromBytes(message.data) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return SignBytes.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/SignBytes",
      value: SignBytes.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return SignBytes.decode(message.value);
  },
  toProto(message) {
    return SignBytes.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.lightclients.solomachine.v3.SignBytes",
      value: SignBytes.encode(message).finish()
    };
  }
};
function createBaseHeaderData() {
  return {
    newPubKey: void 0,
    newDiversifier: ""
  };
}
const HeaderData = {
  typeUrl: "/ibc.lightclients.solomachine.v3.HeaderData",
  encode(message, writer = BinaryWriter.create()) {
    if (message.newPubKey !== void 0) {
      Any.encode(message.newPubKey, writer.uint32(10).fork()).ldelim();
    }
    if (message.newDiversifier !== "") {
      writer.uint32(18).string(message.newDiversifier);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseHeaderData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.newPubKey = Any.decode(reader, reader.uint32());
          break;
        case 2:
          message.newDiversifier = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseHeaderData();
    message.newPubKey = object.newPubKey !== void 0 && object.newPubKey !== null ? Any.fromPartial(object.newPubKey) : void 0;
    message.newDiversifier = object.newDiversifier ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseHeaderData();
    if (object.new_pub_key !== void 0 && object.new_pub_key !== null) {
      message.newPubKey = Any.fromAmino(object.new_pub_key);
    }
    if (object.new_diversifier !== void 0 && object.new_diversifier !== null) {
      message.newDiversifier = object.new_diversifier;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.new_pub_key = message.newPubKey ? Any.toAmino(message.newPubKey) : void 0;
    obj.new_diversifier = message.newDiversifier === "" ? void 0 : message.newDiversifier;
    return obj;
  },
  fromAminoMsg(object) {
    return HeaderData.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/HeaderData",
      value: HeaderData.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return HeaderData.decode(message.value);
  },
  toProto(message) {
    return HeaderData.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.lightclients.solomachine.v3.HeaderData",
      value: HeaderData.encode(message).finish()
    };
  }
};
export {
  ClientState,
  ConsensusState,
  Header,
  HeaderData,
  Misbehaviour,
  SignBytes,
  SignatureAndData,
  TimestampedSignatureData
};
