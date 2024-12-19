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
var solomachine_exports = {};
__export(solomachine_exports, {
  ChannelStateData: () => ChannelStateData,
  ClientState: () => ClientState,
  ClientStateData: () => ClientStateData,
  ConnectionStateData: () => ConnectionStateData,
  ConsensusState: () => ConsensusState,
  ConsensusStateData: () => ConsensusStateData,
  DataType: () => DataType,
  DataTypeAmino: () => DataTypeAmino,
  DataTypeSDKType: () => DataTypeSDKType,
  Header: () => Header,
  HeaderData: () => HeaderData,
  Misbehaviour: () => Misbehaviour,
  NextSequenceRecvData: () => NextSequenceRecvData,
  PacketAcknowledgementData: () => PacketAcknowledgementData,
  PacketCommitmentData: () => PacketCommitmentData,
  PacketReceiptAbsenceData: () => PacketReceiptAbsenceData,
  SignBytes: () => SignBytes,
  SignatureAndData: () => SignatureAndData,
  TimestampedSignatureData: () => TimestampedSignatureData,
  dataTypeFromJSON: () => dataTypeFromJSON,
  dataTypeToJSON: () => dataTypeToJSON
});
module.exports = __toCommonJS(solomachine_exports);
var import_any = require("../../../../google/protobuf/any");
var import_connection = require("../../../core/connection/v1/connection");
var import_channel = require("../../../core/channel/v1/channel");
var import_binary = require("../../../../binary");
var import_helpers = require("../../../../helpers");
var DataType = /* @__PURE__ */ ((DataType2) => {
  DataType2[DataType2["DATA_TYPE_UNINITIALIZED_UNSPECIFIED"] = 0] = "DATA_TYPE_UNINITIALIZED_UNSPECIFIED";
  DataType2[DataType2["DATA_TYPE_CLIENT_STATE"] = 1] = "DATA_TYPE_CLIENT_STATE";
  DataType2[DataType2["DATA_TYPE_CONSENSUS_STATE"] = 2] = "DATA_TYPE_CONSENSUS_STATE";
  DataType2[DataType2["DATA_TYPE_CONNECTION_STATE"] = 3] = "DATA_TYPE_CONNECTION_STATE";
  DataType2[DataType2["DATA_TYPE_CHANNEL_STATE"] = 4] = "DATA_TYPE_CHANNEL_STATE";
  DataType2[DataType2["DATA_TYPE_PACKET_COMMITMENT"] = 5] = "DATA_TYPE_PACKET_COMMITMENT";
  DataType2[DataType2["DATA_TYPE_PACKET_ACKNOWLEDGEMENT"] = 6] = "DATA_TYPE_PACKET_ACKNOWLEDGEMENT";
  DataType2[DataType2["DATA_TYPE_PACKET_RECEIPT_ABSENCE"] = 7] = "DATA_TYPE_PACKET_RECEIPT_ABSENCE";
  DataType2[DataType2["DATA_TYPE_NEXT_SEQUENCE_RECV"] = 8] = "DATA_TYPE_NEXT_SEQUENCE_RECV";
  DataType2[DataType2["DATA_TYPE_HEADER"] = 9] = "DATA_TYPE_HEADER";
  DataType2[DataType2["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return DataType2;
})(DataType || {});
const DataTypeSDKType = DataType;
const DataTypeAmino = DataType;
function dataTypeFromJSON(object) {
  switch (object) {
    case 0:
    case "DATA_TYPE_UNINITIALIZED_UNSPECIFIED":
      return 0 /* DATA_TYPE_UNINITIALIZED_UNSPECIFIED */;
    case 1:
    case "DATA_TYPE_CLIENT_STATE":
      return 1 /* DATA_TYPE_CLIENT_STATE */;
    case 2:
    case "DATA_TYPE_CONSENSUS_STATE":
      return 2 /* DATA_TYPE_CONSENSUS_STATE */;
    case 3:
    case "DATA_TYPE_CONNECTION_STATE":
      return 3 /* DATA_TYPE_CONNECTION_STATE */;
    case 4:
    case "DATA_TYPE_CHANNEL_STATE":
      return 4 /* DATA_TYPE_CHANNEL_STATE */;
    case 5:
    case "DATA_TYPE_PACKET_COMMITMENT":
      return 5 /* DATA_TYPE_PACKET_COMMITMENT */;
    case 6:
    case "DATA_TYPE_PACKET_ACKNOWLEDGEMENT":
      return 6 /* DATA_TYPE_PACKET_ACKNOWLEDGEMENT */;
    case 7:
    case "DATA_TYPE_PACKET_RECEIPT_ABSENCE":
      return 7 /* DATA_TYPE_PACKET_RECEIPT_ABSENCE */;
    case 8:
    case "DATA_TYPE_NEXT_SEQUENCE_RECV":
      return 8 /* DATA_TYPE_NEXT_SEQUENCE_RECV */;
    case 9:
    case "DATA_TYPE_HEADER":
      return 9 /* DATA_TYPE_HEADER */;
    case -1:
    case "UNRECOGNIZED":
    default:
      return -1 /* UNRECOGNIZED */;
  }
}
function dataTypeToJSON(object) {
  switch (object) {
    case 0 /* DATA_TYPE_UNINITIALIZED_UNSPECIFIED */:
      return "DATA_TYPE_UNINITIALIZED_UNSPECIFIED";
    case 1 /* DATA_TYPE_CLIENT_STATE */:
      return "DATA_TYPE_CLIENT_STATE";
    case 2 /* DATA_TYPE_CONSENSUS_STATE */:
      return "DATA_TYPE_CONSENSUS_STATE";
    case 3 /* DATA_TYPE_CONNECTION_STATE */:
      return "DATA_TYPE_CONNECTION_STATE";
    case 4 /* DATA_TYPE_CHANNEL_STATE */:
      return "DATA_TYPE_CHANNEL_STATE";
    case 5 /* DATA_TYPE_PACKET_COMMITMENT */:
      return "DATA_TYPE_PACKET_COMMITMENT";
    case 6 /* DATA_TYPE_PACKET_ACKNOWLEDGEMENT */:
      return "DATA_TYPE_PACKET_ACKNOWLEDGEMENT";
    case 7 /* DATA_TYPE_PACKET_RECEIPT_ABSENCE */:
      return "DATA_TYPE_PACKET_RECEIPT_ABSENCE";
    case 8 /* DATA_TYPE_NEXT_SEQUENCE_RECV */:
      return "DATA_TYPE_NEXT_SEQUENCE_RECV";
    case 9 /* DATA_TYPE_HEADER */:
      return "DATA_TYPE_HEADER";
    case -1 /* UNRECOGNIZED */:
    default:
      return "UNRECOGNIZED";
  }
}
function createBaseClientState() {
  return {
    sequence: BigInt(0),
    isFrozen: false,
    consensusState: void 0,
    allowUpdateAfterProposal: false
  };
}
const ClientState = {
  typeUrl: "/ibc.lightclients.solomachine.v2.ClientState",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.sequence !== BigInt(0)) {
      writer.uint32(8).uint64(message.sequence);
    }
    if (message.isFrozen === true) {
      writer.uint32(16).bool(message.isFrozen);
    }
    if (message.consensusState !== void 0) {
      ConsensusState.encode(message.consensusState, writer.uint32(26).fork()).ldelim();
    }
    if (message.allowUpdateAfterProposal === true) {
      writer.uint32(32).bool(message.allowUpdateAfterProposal);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
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
        case 4:
          message.allowUpdateAfterProposal = reader.bool();
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
    message.allowUpdateAfterProposal = object.allowUpdateAfterProposal ?? false;
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
    if (object.allow_update_after_proposal !== void 0 && object.allow_update_after_proposal !== null) {
      message.allowUpdateAfterProposal = object.allow_update_after_proposal;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.sequence = message.sequence !== BigInt(0) ? message.sequence.toString() : void 0;
    obj.is_frozen = message.isFrozen === false ? void 0 : message.isFrozen;
    obj.consensus_state = message.consensusState ? ConsensusState.toAmino(message.consensusState) : void 0;
    obj.allow_update_after_proposal = message.allowUpdateAfterProposal === false ? void 0 : message.allowUpdateAfterProposal;
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
      typeUrl: "/ibc.lightclients.solomachine.v2.ClientState",
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
  typeUrl: "/ibc.lightclients.solomachine.v2.ConsensusState",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.publicKey !== void 0) {
      import_any.Any.encode(message.publicKey, writer.uint32(10).fork()).ldelim();
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
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseConsensusState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.publicKey = import_any.Any.decode(reader, reader.uint32());
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
    message.publicKey = object.publicKey !== void 0 && object.publicKey !== null ? import_any.Any.fromPartial(object.publicKey) : void 0;
    message.diversifier = object.diversifier ?? "";
    message.timestamp = object.timestamp !== void 0 && object.timestamp !== null ? BigInt(object.timestamp.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object) {
    const message = createBaseConsensusState();
    if (object.public_key !== void 0 && object.public_key !== null) {
      message.publicKey = import_any.Any.fromAmino(object.public_key);
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
    obj.public_key = message.publicKey ? import_any.Any.toAmino(message.publicKey) : void 0;
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
      typeUrl: "/ibc.lightclients.solomachine.v2.ConsensusState",
      value: ConsensusState.encode(message).finish()
    };
  }
};
function createBaseHeader() {
  return {
    sequence: BigInt(0),
    timestamp: BigInt(0),
    signature: new Uint8Array(),
    newPublicKey: void 0,
    newDiversifier: ""
  };
}
const Header = {
  typeUrl: "/ibc.lightclients.solomachine.v2.Header",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.sequence !== BigInt(0)) {
      writer.uint32(8).uint64(message.sequence);
    }
    if (message.timestamp !== BigInt(0)) {
      writer.uint32(16).uint64(message.timestamp);
    }
    if (message.signature.length !== 0) {
      writer.uint32(26).bytes(message.signature);
    }
    if (message.newPublicKey !== void 0) {
      import_any.Any.encode(message.newPublicKey, writer.uint32(34).fork()).ldelim();
    }
    if (message.newDiversifier !== "") {
      writer.uint32(42).string(message.newDiversifier);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseHeader();
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
          message.signature = reader.bytes();
          break;
        case 4:
          message.newPublicKey = import_any.Any.decode(reader, reader.uint32());
          break;
        case 5:
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
    message.sequence = object.sequence !== void 0 && object.sequence !== null ? BigInt(object.sequence.toString()) : BigInt(0);
    message.timestamp = object.timestamp !== void 0 && object.timestamp !== null ? BigInt(object.timestamp.toString()) : BigInt(0);
    message.signature = object.signature ?? new Uint8Array();
    message.newPublicKey = object.newPublicKey !== void 0 && object.newPublicKey !== null ? import_any.Any.fromPartial(object.newPublicKey) : void 0;
    message.newDiversifier = object.newDiversifier ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseHeader();
    if (object.sequence !== void 0 && object.sequence !== null) {
      message.sequence = BigInt(object.sequence);
    }
    if (object.timestamp !== void 0 && object.timestamp !== null) {
      message.timestamp = BigInt(object.timestamp);
    }
    if (object.signature !== void 0 && object.signature !== null) {
      message.signature = (0, import_helpers.bytesFromBase64)(object.signature);
    }
    if (object.new_public_key !== void 0 && object.new_public_key !== null) {
      message.newPublicKey = import_any.Any.fromAmino(object.new_public_key);
    }
    if (object.new_diversifier !== void 0 && object.new_diversifier !== null) {
      message.newDiversifier = object.new_diversifier;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.sequence = message.sequence !== BigInt(0) ? message.sequence.toString() : void 0;
    obj.timestamp = message.timestamp !== BigInt(0) ? message.timestamp.toString() : void 0;
    obj.signature = message.signature ? (0, import_helpers.base64FromBytes)(message.signature) : void 0;
    obj.new_public_key = message.newPublicKey ? import_any.Any.toAmino(message.newPublicKey) : void 0;
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
      typeUrl: "/ibc.lightclients.solomachine.v2.Header",
      value: Header.encode(message).finish()
    };
  }
};
function createBaseMisbehaviour() {
  return {
    clientId: "",
    sequence: BigInt(0),
    signatureOne: void 0,
    signatureTwo: void 0
  };
}
const Misbehaviour = {
  typeUrl: "/ibc.lightclients.solomachine.v2.Misbehaviour",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }
    if (message.sequence !== BigInt(0)) {
      writer.uint32(16).uint64(message.sequence);
    }
    if (message.signatureOne !== void 0) {
      SignatureAndData.encode(message.signatureOne, writer.uint32(26).fork()).ldelim();
    }
    if (message.signatureTwo !== void 0) {
      SignatureAndData.encode(message.signatureTwo, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMisbehaviour();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;
        case 2:
          message.sequence = reader.uint64();
          break;
        case 3:
          message.signatureOne = SignatureAndData.decode(reader, reader.uint32());
          break;
        case 4:
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
    message.clientId = object.clientId ?? "";
    message.sequence = object.sequence !== void 0 && object.sequence !== null ? BigInt(object.sequence.toString()) : BigInt(0);
    message.signatureOne = object.signatureOne !== void 0 && object.signatureOne !== null ? SignatureAndData.fromPartial(object.signatureOne) : void 0;
    message.signatureTwo = object.signatureTwo !== void 0 && object.signatureTwo !== null ? SignatureAndData.fromPartial(object.signatureTwo) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseMisbehaviour();
    if (object.client_id !== void 0 && object.client_id !== null) {
      message.clientId = object.client_id;
    }
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
    obj.client_id = message.clientId === "" ? void 0 : message.clientId;
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
      typeUrl: "/ibc.lightclients.solomachine.v2.Misbehaviour",
      value: Misbehaviour.encode(message).finish()
    };
  }
};
function createBaseSignatureAndData() {
  return {
    signature: new Uint8Array(),
    dataType: 0,
    data: new Uint8Array(),
    timestamp: BigInt(0)
  };
}
const SignatureAndData = {
  typeUrl: "/ibc.lightclients.solomachine.v2.SignatureAndData",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.signature.length !== 0) {
      writer.uint32(10).bytes(message.signature);
    }
    if (message.dataType !== 0) {
      writer.uint32(16).int32(message.dataType);
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
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseSignatureAndData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signature = reader.bytes();
          break;
        case 2:
          message.dataType = reader.int32();
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
    message.dataType = object.dataType ?? 0;
    message.data = object.data ?? new Uint8Array();
    message.timestamp = object.timestamp !== void 0 && object.timestamp !== null ? BigInt(object.timestamp.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object) {
    const message = createBaseSignatureAndData();
    if (object.signature !== void 0 && object.signature !== null) {
      message.signature = (0, import_helpers.bytesFromBase64)(object.signature);
    }
    if (object.data_type !== void 0 && object.data_type !== null) {
      message.dataType = object.data_type;
    }
    if (object.data !== void 0 && object.data !== null) {
      message.data = (0, import_helpers.bytesFromBase64)(object.data);
    }
    if (object.timestamp !== void 0 && object.timestamp !== null) {
      message.timestamp = BigInt(object.timestamp);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.signature = message.signature ? (0, import_helpers.base64FromBytes)(message.signature) : void 0;
    obj.data_type = message.dataType === 0 ? void 0 : message.dataType;
    obj.data = message.data ? (0, import_helpers.base64FromBytes)(message.data) : void 0;
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
      typeUrl: "/ibc.lightclients.solomachine.v2.SignatureAndData",
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
  typeUrl: "/ibc.lightclients.solomachine.v2.TimestampedSignatureData",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.signatureData.length !== 0) {
      writer.uint32(10).bytes(message.signatureData);
    }
    if (message.timestamp !== BigInt(0)) {
      writer.uint32(16).uint64(message.timestamp);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
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
      message.signatureData = (0, import_helpers.bytesFromBase64)(object.signature_data);
    }
    if (object.timestamp !== void 0 && object.timestamp !== null) {
      message.timestamp = BigInt(object.timestamp);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.signature_data = message.signatureData ? (0, import_helpers.base64FromBytes)(message.signatureData) : void 0;
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
      typeUrl: "/ibc.lightclients.solomachine.v2.TimestampedSignatureData",
      value: TimestampedSignatureData.encode(message).finish()
    };
  }
};
function createBaseSignBytes() {
  return {
    sequence: BigInt(0),
    timestamp: BigInt(0),
    diversifier: "",
    dataType: 0,
    data: new Uint8Array()
  };
}
const SignBytes = {
  typeUrl: "/ibc.lightclients.solomachine.v2.SignBytes",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.sequence !== BigInt(0)) {
      writer.uint32(8).uint64(message.sequence);
    }
    if (message.timestamp !== BigInt(0)) {
      writer.uint32(16).uint64(message.timestamp);
    }
    if (message.diversifier !== "") {
      writer.uint32(26).string(message.diversifier);
    }
    if (message.dataType !== 0) {
      writer.uint32(32).int32(message.dataType);
    }
    if (message.data.length !== 0) {
      writer.uint32(42).bytes(message.data);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
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
          message.dataType = reader.int32();
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
    message.dataType = object.dataType ?? 0;
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
    if (object.data_type !== void 0 && object.data_type !== null) {
      message.dataType = object.data_type;
    }
    if (object.data !== void 0 && object.data !== null) {
      message.data = (0, import_helpers.bytesFromBase64)(object.data);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.sequence = message.sequence !== BigInt(0) ? message.sequence.toString() : void 0;
    obj.timestamp = message.timestamp !== BigInt(0) ? message.timestamp.toString() : void 0;
    obj.diversifier = message.diversifier === "" ? void 0 : message.diversifier;
    obj.data_type = message.dataType === 0 ? void 0 : message.dataType;
    obj.data = message.data ? (0, import_helpers.base64FromBytes)(message.data) : void 0;
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
      typeUrl: "/ibc.lightclients.solomachine.v2.SignBytes",
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
  typeUrl: "/ibc.lightclients.solomachine.v2.HeaderData",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.newPubKey !== void 0) {
      import_any.Any.encode(message.newPubKey, writer.uint32(10).fork()).ldelim();
    }
    if (message.newDiversifier !== "") {
      writer.uint32(18).string(message.newDiversifier);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseHeaderData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.newPubKey = import_any.Any.decode(reader, reader.uint32());
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
    message.newPubKey = object.newPubKey !== void 0 && object.newPubKey !== null ? import_any.Any.fromPartial(object.newPubKey) : void 0;
    message.newDiversifier = object.newDiversifier ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseHeaderData();
    if (object.new_pub_key !== void 0 && object.new_pub_key !== null) {
      message.newPubKey = import_any.Any.fromAmino(object.new_pub_key);
    }
    if (object.new_diversifier !== void 0 && object.new_diversifier !== null) {
      message.newDiversifier = object.new_diversifier;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.new_pub_key = message.newPubKey ? import_any.Any.toAmino(message.newPubKey) : void 0;
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
      typeUrl: "/ibc.lightclients.solomachine.v2.HeaderData",
      value: HeaderData.encode(message).finish()
    };
  }
};
function createBaseClientStateData() {
  return {
    path: new Uint8Array(),
    clientState: void 0
  };
}
const ClientStateData = {
  typeUrl: "/ibc.lightclients.solomachine.v2.ClientStateData",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.path.length !== 0) {
      writer.uint32(10).bytes(message.path);
    }
    if (message.clientState !== void 0) {
      import_any.Any.encode(message.clientState, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseClientStateData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.path = reader.bytes();
          break;
        case 2:
          message.clientState = import_any.Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseClientStateData();
    message.path = object.path ?? new Uint8Array();
    message.clientState = object.clientState !== void 0 && object.clientState !== null ? import_any.Any.fromPartial(object.clientState) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseClientStateData();
    if (object.path !== void 0 && object.path !== null) {
      message.path = (0, import_helpers.bytesFromBase64)(object.path);
    }
    if (object.client_state !== void 0 && object.client_state !== null) {
      message.clientState = import_any.Any.fromAmino(object.client_state);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.path = message.path ? (0, import_helpers.base64FromBytes)(message.path) : void 0;
    obj.client_state = message.clientState ? import_any.Any.toAmino(message.clientState) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return ClientStateData.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/ClientStateData",
      value: ClientStateData.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return ClientStateData.decode(message.value);
  },
  toProto(message) {
    return ClientStateData.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.lightclients.solomachine.v2.ClientStateData",
      value: ClientStateData.encode(message).finish()
    };
  }
};
function createBaseConsensusStateData() {
  return {
    path: new Uint8Array(),
    consensusState: void 0
  };
}
const ConsensusStateData = {
  typeUrl: "/ibc.lightclients.solomachine.v2.ConsensusStateData",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.path.length !== 0) {
      writer.uint32(10).bytes(message.path);
    }
    if (message.consensusState !== void 0) {
      import_any.Any.encode(message.consensusState, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseConsensusStateData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.path = reader.bytes();
          break;
        case 2:
          message.consensusState = import_any.Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseConsensusStateData();
    message.path = object.path ?? new Uint8Array();
    message.consensusState = object.consensusState !== void 0 && object.consensusState !== null ? import_any.Any.fromPartial(object.consensusState) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseConsensusStateData();
    if (object.path !== void 0 && object.path !== null) {
      message.path = (0, import_helpers.bytesFromBase64)(object.path);
    }
    if (object.consensus_state !== void 0 && object.consensus_state !== null) {
      message.consensusState = import_any.Any.fromAmino(object.consensus_state);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.path = message.path ? (0, import_helpers.base64FromBytes)(message.path) : void 0;
    obj.consensus_state = message.consensusState ? import_any.Any.toAmino(message.consensusState) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return ConsensusStateData.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/ConsensusStateData",
      value: ConsensusStateData.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return ConsensusStateData.decode(message.value);
  },
  toProto(message) {
    return ConsensusStateData.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.lightclients.solomachine.v2.ConsensusStateData",
      value: ConsensusStateData.encode(message).finish()
    };
  }
};
function createBaseConnectionStateData() {
  return {
    path: new Uint8Array(),
    connection: void 0
  };
}
const ConnectionStateData = {
  typeUrl: "/ibc.lightclients.solomachine.v2.ConnectionStateData",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.path.length !== 0) {
      writer.uint32(10).bytes(message.path);
    }
    if (message.connection !== void 0) {
      import_connection.ConnectionEnd.encode(message.connection, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseConnectionStateData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.path = reader.bytes();
          break;
        case 2:
          message.connection = import_connection.ConnectionEnd.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseConnectionStateData();
    message.path = object.path ?? new Uint8Array();
    message.connection = object.connection !== void 0 && object.connection !== null ? import_connection.ConnectionEnd.fromPartial(object.connection) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseConnectionStateData();
    if (object.path !== void 0 && object.path !== null) {
      message.path = (0, import_helpers.bytesFromBase64)(object.path);
    }
    if (object.connection !== void 0 && object.connection !== null) {
      message.connection = import_connection.ConnectionEnd.fromAmino(object.connection);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.path = message.path ? (0, import_helpers.base64FromBytes)(message.path) : void 0;
    obj.connection = message.connection ? import_connection.ConnectionEnd.toAmino(message.connection) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return ConnectionStateData.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/ConnectionStateData",
      value: ConnectionStateData.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return ConnectionStateData.decode(message.value);
  },
  toProto(message) {
    return ConnectionStateData.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.lightclients.solomachine.v2.ConnectionStateData",
      value: ConnectionStateData.encode(message).finish()
    };
  }
};
function createBaseChannelStateData() {
  return {
    path: new Uint8Array(),
    channel: void 0
  };
}
const ChannelStateData = {
  typeUrl: "/ibc.lightclients.solomachine.v2.ChannelStateData",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.path.length !== 0) {
      writer.uint32(10).bytes(message.path);
    }
    if (message.channel !== void 0) {
      import_channel.Channel.encode(message.channel, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseChannelStateData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.path = reader.bytes();
          break;
        case 2:
          message.channel = import_channel.Channel.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseChannelStateData();
    message.path = object.path ?? new Uint8Array();
    message.channel = object.channel !== void 0 && object.channel !== null ? import_channel.Channel.fromPartial(object.channel) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseChannelStateData();
    if (object.path !== void 0 && object.path !== null) {
      message.path = (0, import_helpers.bytesFromBase64)(object.path);
    }
    if (object.channel !== void 0 && object.channel !== null) {
      message.channel = import_channel.Channel.fromAmino(object.channel);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.path = message.path ? (0, import_helpers.base64FromBytes)(message.path) : void 0;
    obj.channel = message.channel ? import_channel.Channel.toAmino(message.channel) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return ChannelStateData.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/ChannelStateData",
      value: ChannelStateData.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return ChannelStateData.decode(message.value);
  },
  toProto(message) {
    return ChannelStateData.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.lightclients.solomachine.v2.ChannelStateData",
      value: ChannelStateData.encode(message).finish()
    };
  }
};
function createBasePacketCommitmentData() {
  return {
    path: new Uint8Array(),
    commitment: new Uint8Array()
  };
}
const PacketCommitmentData = {
  typeUrl: "/ibc.lightclients.solomachine.v2.PacketCommitmentData",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.path.length !== 0) {
      writer.uint32(10).bytes(message.path);
    }
    if (message.commitment.length !== 0) {
      writer.uint32(18).bytes(message.commitment);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBasePacketCommitmentData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.path = reader.bytes();
          break;
        case 2:
          message.commitment = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBasePacketCommitmentData();
    message.path = object.path ?? new Uint8Array();
    message.commitment = object.commitment ?? new Uint8Array();
    return message;
  },
  fromAmino(object) {
    const message = createBasePacketCommitmentData();
    if (object.path !== void 0 && object.path !== null) {
      message.path = (0, import_helpers.bytesFromBase64)(object.path);
    }
    if (object.commitment !== void 0 && object.commitment !== null) {
      message.commitment = (0, import_helpers.bytesFromBase64)(object.commitment);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.path = message.path ? (0, import_helpers.base64FromBytes)(message.path) : void 0;
    obj.commitment = message.commitment ? (0, import_helpers.base64FromBytes)(message.commitment) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return PacketCommitmentData.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/PacketCommitmentData",
      value: PacketCommitmentData.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return PacketCommitmentData.decode(message.value);
  },
  toProto(message) {
    return PacketCommitmentData.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.lightclients.solomachine.v2.PacketCommitmentData",
      value: PacketCommitmentData.encode(message).finish()
    };
  }
};
function createBasePacketAcknowledgementData() {
  return {
    path: new Uint8Array(),
    acknowledgement: new Uint8Array()
  };
}
const PacketAcknowledgementData = {
  typeUrl: "/ibc.lightclients.solomachine.v2.PacketAcknowledgementData",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.path.length !== 0) {
      writer.uint32(10).bytes(message.path);
    }
    if (message.acknowledgement.length !== 0) {
      writer.uint32(18).bytes(message.acknowledgement);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBasePacketAcknowledgementData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.path = reader.bytes();
          break;
        case 2:
          message.acknowledgement = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBasePacketAcknowledgementData();
    message.path = object.path ?? new Uint8Array();
    message.acknowledgement = object.acknowledgement ?? new Uint8Array();
    return message;
  },
  fromAmino(object) {
    const message = createBasePacketAcknowledgementData();
    if (object.path !== void 0 && object.path !== null) {
      message.path = (0, import_helpers.bytesFromBase64)(object.path);
    }
    if (object.acknowledgement !== void 0 && object.acknowledgement !== null) {
      message.acknowledgement = (0, import_helpers.bytesFromBase64)(object.acknowledgement);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.path = message.path ? (0, import_helpers.base64FromBytes)(message.path) : void 0;
    obj.acknowledgement = message.acknowledgement ? (0, import_helpers.base64FromBytes)(message.acknowledgement) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return PacketAcknowledgementData.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/PacketAcknowledgementData",
      value: PacketAcknowledgementData.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return PacketAcknowledgementData.decode(message.value);
  },
  toProto(message) {
    return PacketAcknowledgementData.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.lightclients.solomachine.v2.PacketAcknowledgementData",
      value: PacketAcknowledgementData.encode(message).finish()
    };
  }
};
function createBasePacketReceiptAbsenceData() {
  return {
    path: new Uint8Array()
  };
}
const PacketReceiptAbsenceData = {
  typeUrl: "/ibc.lightclients.solomachine.v2.PacketReceiptAbsenceData",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.path.length !== 0) {
      writer.uint32(10).bytes(message.path);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBasePacketReceiptAbsenceData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.path = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBasePacketReceiptAbsenceData();
    message.path = object.path ?? new Uint8Array();
    return message;
  },
  fromAmino(object) {
    const message = createBasePacketReceiptAbsenceData();
    if (object.path !== void 0 && object.path !== null) {
      message.path = (0, import_helpers.bytesFromBase64)(object.path);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.path = message.path ? (0, import_helpers.base64FromBytes)(message.path) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return PacketReceiptAbsenceData.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/PacketReceiptAbsenceData",
      value: PacketReceiptAbsenceData.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return PacketReceiptAbsenceData.decode(message.value);
  },
  toProto(message) {
    return PacketReceiptAbsenceData.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.lightclients.solomachine.v2.PacketReceiptAbsenceData",
      value: PacketReceiptAbsenceData.encode(message).finish()
    };
  }
};
function createBaseNextSequenceRecvData() {
  return {
    path: new Uint8Array(),
    nextSeqRecv: BigInt(0)
  };
}
const NextSequenceRecvData = {
  typeUrl: "/ibc.lightclients.solomachine.v2.NextSequenceRecvData",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.path.length !== 0) {
      writer.uint32(10).bytes(message.path);
    }
    if (message.nextSeqRecv !== BigInt(0)) {
      writer.uint32(16).uint64(message.nextSeqRecv);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseNextSequenceRecvData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.path = reader.bytes();
          break;
        case 2:
          message.nextSeqRecv = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseNextSequenceRecvData();
    message.path = object.path ?? new Uint8Array();
    message.nextSeqRecv = object.nextSeqRecv !== void 0 && object.nextSeqRecv !== null ? BigInt(object.nextSeqRecv.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object) {
    const message = createBaseNextSequenceRecvData();
    if (object.path !== void 0 && object.path !== null) {
      message.path = (0, import_helpers.bytesFromBase64)(object.path);
    }
    if (object.next_seq_recv !== void 0 && object.next_seq_recv !== null) {
      message.nextSeqRecv = BigInt(object.next_seq_recv);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.path = message.path ? (0, import_helpers.base64FromBytes)(message.path) : void 0;
    obj.next_seq_recv = message.nextSeqRecv !== BigInt(0) ? message.nextSeqRecv.toString() : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return NextSequenceRecvData.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/NextSequenceRecvData",
      value: NextSequenceRecvData.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return NextSequenceRecvData.decode(message.value);
  },
  toProto(message) {
    return NextSequenceRecvData.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.lightclients.solomachine.v2.NextSequenceRecvData",
      value: NextSequenceRecvData.encode(message).finish()
    };
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ChannelStateData,
  ClientState,
  ClientStateData,
  ConnectionStateData,
  ConsensusState,
  ConsensusStateData,
  DataType,
  DataTypeAmino,
  DataTypeSDKType,
  Header,
  HeaderData,
  Misbehaviour,
  NextSequenceRecvData,
  PacketAcknowledgementData,
  PacketCommitmentData,
  PacketReceiptAbsenceData,
  SignBytes,
  SignatureAndData,
  TimestampedSignatureData,
  dataTypeFromJSON,
  dataTypeToJSON
});
