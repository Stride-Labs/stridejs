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
var types_exports = {};
__export(types_exports, {
  BlockID: () => BlockID,
  BlockMeta: () => BlockMeta,
  Commit: () => Commit,
  CommitSig: () => CommitSig,
  Data: () => Data,
  ExtendedCommit: () => ExtendedCommit,
  ExtendedCommitSig: () => ExtendedCommitSig,
  Header: () => Header,
  LightBlock: () => LightBlock,
  Part: () => Part,
  PartSetHeader: () => PartSetHeader,
  Proposal: () => Proposal,
  SignedHeader: () => SignedHeader,
  SignedMsgType: () => SignedMsgType,
  SignedMsgTypeAmino: () => SignedMsgTypeAmino,
  SignedMsgTypeSDKType: () => SignedMsgTypeSDKType,
  TxProof: () => TxProof,
  Vote: () => Vote,
  signedMsgTypeFromJSON: () => signedMsgTypeFromJSON,
  signedMsgTypeToJSON: () => signedMsgTypeToJSON
});
module.exports = __toCommonJS(types_exports);
var import_proof = require("../crypto/proof");
var import_types = require("../version/types");
var import_timestamp = require("../../google/protobuf/timestamp");
var import_validator = require("./validator");
var import_binary = require("../../binary");
var import_helpers = require("../../helpers");
var SignedMsgType = /* @__PURE__ */ ((SignedMsgType2) => {
  SignedMsgType2[SignedMsgType2["SIGNED_MSG_TYPE_UNKNOWN"] = 0] = "SIGNED_MSG_TYPE_UNKNOWN";
  SignedMsgType2[SignedMsgType2["SIGNED_MSG_TYPE_PREVOTE"] = 1] = "SIGNED_MSG_TYPE_PREVOTE";
  SignedMsgType2[SignedMsgType2["SIGNED_MSG_TYPE_PRECOMMIT"] = 2] = "SIGNED_MSG_TYPE_PRECOMMIT";
  SignedMsgType2[SignedMsgType2["SIGNED_MSG_TYPE_PROPOSAL"] = 32] = "SIGNED_MSG_TYPE_PROPOSAL";
  SignedMsgType2[SignedMsgType2["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return SignedMsgType2;
})(SignedMsgType || {});
const SignedMsgTypeSDKType = SignedMsgType;
const SignedMsgTypeAmino = SignedMsgType;
function signedMsgTypeFromJSON(object) {
  switch (object) {
    case 0:
    case "SIGNED_MSG_TYPE_UNKNOWN":
      return 0 /* SIGNED_MSG_TYPE_UNKNOWN */;
    case 1:
    case "SIGNED_MSG_TYPE_PREVOTE":
      return 1 /* SIGNED_MSG_TYPE_PREVOTE */;
    case 2:
    case "SIGNED_MSG_TYPE_PRECOMMIT":
      return 2 /* SIGNED_MSG_TYPE_PRECOMMIT */;
    case 32:
    case "SIGNED_MSG_TYPE_PROPOSAL":
      return 32 /* SIGNED_MSG_TYPE_PROPOSAL */;
    case -1:
    case "UNRECOGNIZED":
    default:
      return -1 /* UNRECOGNIZED */;
  }
}
function signedMsgTypeToJSON(object) {
  switch (object) {
    case 0 /* SIGNED_MSG_TYPE_UNKNOWN */:
      return "SIGNED_MSG_TYPE_UNKNOWN";
    case 1 /* SIGNED_MSG_TYPE_PREVOTE */:
      return "SIGNED_MSG_TYPE_PREVOTE";
    case 2 /* SIGNED_MSG_TYPE_PRECOMMIT */:
      return "SIGNED_MSG_TYPE_PRECOMMIT";
    case 32 /* SIGNED_MSG_TYPE_PROPOSAL */:
      return "SIGNED_MSG_TYPE_PROPOSAL";
    case -1 /* UNRECOGNIZED */:
    default:
      return "UNRECOGNIZED";
  }
}
function createBasePartSetHeader() {
  return {
    total: 0,
    hash: new Uint8Array()
  };
}
const PartSetHeader = {
  typeUrl: "/tendermint.types.PartSetHeader",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.total !== 0) {
      writer.uint32(8).uint32(message.total);
    }
    if (message.hash.length !== 0) {
      writer.uint32(18).bytes(message.hash);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBasePartSetHeader();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.total = reader.uint32();
          break;
        case 2:
          message.hash = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBasePartSetHeader();
    message.total = object.total ?? 0;
    message.hash = object.hash ?? new Uint8Array();
    return message;
  },
  fromAmino(object) {
    const message = createBasePartSetHeader();
    if (object.total !== void 0 && object.total !== null) {
      message.total = object.total;
    }
    if (object.hash !== void 0 && object.hash !== null) {
      message.hash = (0, import_helpers.bytesFromBase64)(object.hash);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.total = message.total === 0 ? void 0 : message.total;
    obj.hash = message.hash ? (0, import_helpers.base64FromBytes)(message.hash) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return PartSetHeader.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return PartSetHeader.decode(message.value);
  },
  toProto(message) {
    return PartSetHeader.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/tendermint.types.PartSetHeader",
      value: PartSetHeader.encode(message).finish()
    };
  }
};
function createBasePart() {
  return {
    index: 0,
    bytes: new Uint8Array(),
    proof: import_proof.Proof.fromPartial({})
  };
}
const Part = {
  typeUrl: "/tendermint.types.Part",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.index !== 0) {
      writer.uint32(8).uint32(message.index);
    }
    if (message.bytes.length !== 0) {
      writer.uint32(18).bytes(message.bytes);
    }
    if (message.proof !== void 0) {
      import_proof.Proof.encode(message.proof, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBasePart();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.uint32();
          break;
        case 2:
          message.bytes = reader.bytes();
          break;
        case 3:
          message.proof = import_proof.Proof.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBasePart();
    message.index = object.index ?? 0;
    message.bytes = object.bytes ?? new Uint8Array();
    message.proof = object.proof !== void 0 && object.proof !== null ? import_proof.Proof.fromPartial(object.proof) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBasePart();
    if (object.index !== void 0 && object.index !== null) {
      message.index = object.index;
    }
    if (object.bytes !== void 0 && object.bytes !== null) {
      message.bytes = (0, import_helpers.bytesFromBase64)(object.bytes);
    }
    if (object.proof !== void 0 && object.proof !== null) {
      message.proof = import_proof.Proof.fromAmino(object.proof);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.index = message.index === 0 ? void 0 : message.index;
    obj.bytes = message.bytes ? (0, import_helpers.base64FromBytes)(message.bytes) : void 0;
    obj.proof = message.proof ? import_proof.Proof.toAmino(message.proof) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return Part.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return Part.decode(message.value);
  },
  toProto(message) {
    return Part.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/tendermint.types.Part",
      value: Part.encode(message).finish()
    };
  }
};
function createBaseBlockID() {
  return {
    hash: new Uint8Array(),
    partSetHeader: PartSetHeader.fromPartial({})
  };
}
const BlockID = {
  typeUrl: "/tendermint.types.BlockID",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.hash.length !== 0) {
      writer.uint32(10).bytes(message.hash);
    }
    if (message.partSetHeader !== void 0) {
      PartSetHeader.encode(message.partSetHeader, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseBlockID();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hash = reader.bytes();
          break;
        case 2:
          message.partSetHeader = PartSetHeader.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseBlockID();
    message.hash = object.hash ?? new Uint8Array();
    message.partSetHeader = object.partSetHeader !== void 0 && object.partSetHeader !== null ? PartSetHeader.fromPartial(object.partSetHeader) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseBlockID();
    if (object.hash !== void 0 && object.hash !== null) {
      message.hash = (0, import_helpers.bytesFromBase64)(object.hash);
    }
    if (object.part_set_header !== void 0 && object.part_set_header !== null) {
      message.partSetHeader = PartSetHeader.fromAmino(object.part_set_header);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.hash = message.hash ? (0, import_helpers.base64FromBytes)(message.hash) : void 0;
    obj.part_set_header = message.partSetHeader ? PartSetHeader.toAmino(message.partSetHeader) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return BlockID.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return BlockID.decode(message.value);
  },
  toProto(message) {
    return BlockID.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/tendermint.types.BlockID",
      value: BlockID.encode(message).finish()
    };
  }
};
function createBaseHeader() {
  return {
    version: import_types.Consensus.fromPartial({}),
    chainId: "",
    height: BigInt(0),
    time: /* @__PURE__ */ new Date(),
    lastBlockId: BlockID.fromPartial({}),
    lastCommitHash: new Uint8Array(),
    dataHash: new Uint8Array(),
    validatorsHash: new Uint8Array(),
    nextValidatorsHash: new Uint8Array(),
    consensusHash: new Uint8Array(),
    appHash: new Uint8Array(),
    lastResultsHash: new Uint8Array(),
    evidenceHash: new Uint8Array(),
    proposerAddress: new Uint8Array()
  };
}
const Header = {
  typeUrl: "/tendermint.types.Header",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.version !== void 0) {
      import_types.Consensus.encode(message.version, writer.uint32(10).fork()).ldelim();
    }
    if (message.chainId !== "") {
      writer.uint32(18).string(message.chainId);
    }
    if (message.height !== BigInt(0)) {
      writer.uint32(24).int64(message.height);
    }
    if (message.time !== void 0) {
      import_timestamp.Timestamp.encode((0, import_helpers.toTimestamp)(message.time), writer.uint32(34).fork()).ldelim();
    }
    if (message.lastBlockId !== void 0) {
      BlockID.encode(message.lastBlockId, writer.uint32(42).fork()).ldelim();
    }
    if (message.lastCommitHash.length !== 0) {
      writer.uint32(50).bytes(message.lastCommitHash);
    }
    if (message.dataHash.length !== 0) {
      writer.uint32(58).bytes(message.dataHash);
    }
    if (message.validatorsHash.length !== 0) {
      writer.uint32(66).bytes(message.validatorsHash);
    }
    if (message.nextValidatorsHash.length !== 0) {
      writer.uint32(74).bytes(message.nextValidatorsHash);
    }
    if (message.consensusHash.length !== 0) {
      writer.uint32(82).bytes(message.consensusHash);
    }
    if (message.appHash.length !== 0) {
      writer.uint32(90).bytes(message.appHash);
    }
    if (message.lastResultsHash.length !== 0) {
      writer.uint32(98).bytes(message.lastResultsHash);
    }
    if (message.evidenceHash.length !== 0) {
      writer.uint32(106).bytes(message.evidenceHash);
    }
    if (message.proposerAddress.length !== 0) {
      writer.uint32(114).bytes(message.proposerAddress);
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
          message.version = import_types.Consensus.decode(reader, reader.uint32());
          break;
        case 2:
          message.chainId = reader.string();
          break;
        case 3:
          message.height = reader.int64();
          break;
        case 4:
          message.time = (0, import_helpers.fromTimestamp)(import_timestamp.Timestamp.decode(reader, reader.uint32()));
          break;
        case 5:
          message.lastBlockId = BlockID.decode(reader, reader.uint32());
          break;
        case 6:
          message.lastCommitHash = reader.bytes();
          break;
        case 7:
          message.dataHash = reader.bytes();
          break;
        case 8:
          message.validatorsHash = reader.bytes();
          break;
        case 9:
          message.nextValidatorsHash = reader.bytes();
          break;
        case 10:
          message.consensusHash = reader.bytes();
          break;
        case 11:
          message.appHash = reader.bytes();
          break;
        case 12:
          message.lastResultsHash = reader.bytes();
          break;
        case 13:
          message.evidenceHash = reader.bytes();
          break;
        case 14:
          message.proposerAddress = reader.bytes();
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
    message.version = object.version !== void 0 && object.version !== null ? import_types.Consensus.fromPartial(object.version) : void 0;
    message.chainId = object.chainId ?? "";
    message.height = object.height !== void 0 && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    message.time = object.time ?? void 0;
    message.lastBlockId = object.lastBlockId !== void 0 && object.lastBlockId !== null ? BlockID.fromPartial(object.lastBlockId) : void 0;
    message.lastCommitHash = object.lastCommitHash ?? new Uint8Array();
    message.dataHash = object.dataHash ?? new Uint8Array();
    message.validatorsHash = object.validatorsHash ?? new Uint8Array();
    message.nextValidatorsHash = object.nextValidatorsHash ?? new Uint8Array();
    message.consensusHash = object.consensusHash ?? new Uint8Array();
    message.appHash = object.appHash ?? new Uint8Array();
    message.lastResultsHash = object.lastResultsHash ?? new Uint8Array();
    message.evidenceHash = object.evidenceHash ?? new Uint8Array();
    message.proposerAddress = object.proposerAddress ?? new Uint8Array();
    return message;
  },
  fromAmino(object) {
    const message = createBaseHeader();
    if (object.version !== void 0 && object.version !== null) {
      message.version = import_types.Consensus.fromAmino(object.version);
    }
    if (object.chain_id !== void 0 && object.chain_id !== null) {
      message.chainId = object.chain_id;
    }
    if (object.height !== void 0 && object.height !== null) {
      message.height = BigInt(object.height);
    }
    if (object.time !== void 0 && object.time !== null) {
      message.time = (0, import_helpers.fromTimestamp)(import_timestamp.Timestamp.fromAmino(object.time));
    }
    if (object.last_block_id !== void 0 && object.last_block_id !== null) {
      message.lastBlockId = BlockID.fromAmino(object.last_block_id);
    }
    if (object.last_commit_hash !== void 0 && object.last_commit_hash !== null) {
      message.lastCommitHash = (0, import_helpers.bytesFromBase64)(object.last_commit_hash);
    }
    if (object.data_hash !== void 0 && object.data_hash !== null) {
      message.dataHash = (0, import_helpers.bytesFromBase64)(object.data_hash);
    }
    if (object.validators_hash !== void 0 && object.validators_hash !== null) {
      message.validatorsHash = (0, import_helpers.bytesFromBase64)(object.validators_hash);
    }
    if (object.next_validators_hash !== void 0 && object.next_validators_hash !== null) {
      message.nextValidatorsHash = (0, import_helpers.bytesFromBase64)(object.next_validators_hash);
    }
    if (object.consensus_hash !== void 0 && object.consensus_hash !== null) {
      message.consensusHash = (0, import_helpers.bytesFromBase64)(object.consensus_hash);
    }
    if (object.app_hash !== void 0 && object.app_hash !== null) {
      message.appHash = (0, import_helpers.bytesFromBase64)(object.app_hash);
    }
    if (object.last_results_hash !== void 0 && object.last_results_hash !== null) {
      message.lastResultsHash = (0, import_helpers.bytesFromBase64)(object.last_results_hash);
    }
    if (object.evidence_hash !== void 0 && object.evidence_hash !== null) {
      message.evidenceHash = (0, import_helpers.bytesFromBase64)(object.evidence_hash);
    }
    if (object.proposer_address !== void 0 && object.proposer_address !== null) {
      message.proposerAddress = (0, import_helpers.bytesFromBase64)(object.proposer_address);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.version = message.version ? import_types.Consensus.toAmino(message.version) : void 0;
    obj.chain_id = message.chainId === "" ? void 0 : message.chainId;
    obj.height = message.height !== BigInt(0) ? message.height?.toString() : void 0;
    obj.time = message.time ? import_timestamp.Timestamp.toAmino((0, import_helpers.toTimestamp)(message.time)) : void 0;
    obj.last_block_id = message.lastBlockId ? BlockID.toAmino(message.lastBlockId) : void 0;
    obj.last_commit_hash = message.lastCommitHash ? (0, import_helpers.base64FromBytes)(message.lastCommitHash) : void 0;
    obj.data_hash = message.dataHash ? (0, import_helpers.base64FromBytes)(message.dataHash) : void 0;
    obj.validators_hash = message.validatorsHash ? (0, import_helpers.base64FromBytes)(message.validatorsHash) : void 0;
    obj.next_validators_hash = message.nextValidatorsHash ? (0, import_helpers.base64FromBytes)(message.nextValidatorsHash) : void 0;
    obj.consensus_hash = message.consensusHash ? (0, import_helpers.base64FromBytes)(message.consensusHash) : void 0;
    obj.app_hash = message.appHash ? (0, import_helpers.base64FromBytes)(message.appHash) : void 0;
    obj.last_results_hash = message.lastResultsHash ? (0, import_helpers.base64FromBytes)(message.lastResultsHash) : void 0;
    obj.evidence_hash = message.evidenceHash ? (0, import_helpers.base64FromBytes)(message.evidenceHash) : void 0;
    obj.proposer_address = message.proposerAddress ? (0, import_helpers.base64FromBytes)(message.proposerAddress) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return Header.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return Header.decode(message.value);
  },
  toProto(message) {
    return Header.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/tendermint.types.Header",
      value: Header.encode(message).finish()
    };
  }
};
function createBaseData() {
  return {
    txs: []
  };
}
const Data = {
  typeUrl: "/tendermint.types.Data",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    for (const v of message.txs) {
      writer.uint32(10).bytes(v);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.txs.push(reader.bytes());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseData();
    message.txs = object.txs?.map((e) => e) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseData();
    message.txs = object.txs?.map((e) => (0, import_helpers.bytesFromBase64)(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.txs) {
      obj.txs = message.txs.map((e) => (0, import_helpers.base64FromBytes)(e));
    } else {
      obj.txs = message.txs;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return Data.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return Data.decode(message.value);
  },
  toProto(message) {
    return Data.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/tendermint.types.Data",
      value: Data.encode(message).finish()
    };
  }
};
function createBaseVote() {
  return {
    type: 0,
    height: BigInt(0),
    round: 0,
    blockId: BlockID.fromPartial({}),
    timestamp: /* @__PURE__ */ new Date(),
    validatorAddress: new Uint8Array(),
    validatorIndex: 0,
    signature: new Uint8Array(),
    extension: new Uint8Array(),
    extensionSignature: new Uint8Array()
  };
}
const Vote = {
  typeUrl: "/tendermint.types.Vote",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.height !== BigInt(0)) {
      writer.uint32(16).int64(message.height);
    }
    if (message.round !== 0) {
      writer.uint32(24).int32(message.round);
    }
    if (message.blockId !== void 0) {
      BlockID.encode(message.blockId, writer.uint32(34).fork()).ldelim();
    }
    if (message.timestamp !== void 0) {
      import_timestamp.Timestamp.encode((0, import_helpers.toTimestamp)(message.timestamp), writer.uint32(42).fork()).ldelim();
    }
    if (message.validatorAddress.length !== 0) {
      writer.uint32(50).bytes(message.validatorAddress);
    }
    if (message.validatorIndex !== 0) {
      writer.uint32(56).int32(message.validatorIndex);
    }
    if (message.signature.length !== 0) {
      writer.uint32(66).bytes(message.signature);
    }
    if (message.extension.length !== 0) {
      writer.uint32(74).bytes(message.extension);
    }
    if (message.extensionSignature.length !== 0) {
      writer.uint32(82).bytes(message.extensionSignature);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseVote();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.int32();
          break;
        case 2:
          message.height = reader.int64();
          break;
        case 3:
          message.round = reader.int32();
          break;
        case 4:
          message.blockId = BlockID.decode(reader, reader.uint32());
          break;
        case 5:
          message.timestamp = (0, import_helpers.fromTimestamp)(import_timestamp.Timestamp.decode(reader, reader.uint32()));
          break;
        case 6:
          message.validatorAddress = reader.bytes();
          break;
        case 7:
          message.validatorIndex = reader.int32();
          break;
        case 8:
          message.signature = reader.bytes();
          break;
        case 9:
          message.extension = reader.bytes();
          break;
        case 10:
          message.extensionSignature = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseVote();
    message.type = object.type ?? 0;
    message.height = object.height !== void 0 && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    message.round = object.round ?? 0;
    message.blockId = object.blockId !== void 0 && object.blockId !== null ? BlockID.fromPartial(object.blockId) : void 0;
    message.timestamp = object.timestamp ?? void 0;
    message.validatorAddress = object.validatorAddress ?? new Uint8Array();
    message.validatorIndex = object.validatorIndex ?? 0;
    message.signature = object.signature ?? new Uint8Array();
    message.extension = object.extension ?? new Uint8Array();
    message.extensionSignature = object.extensionSignature ?? new Uint8Array();
    return message;
  },
  fromAmino(object) {
    const message = createBaseVote();
    if (object.type !== void 0 && object.type !== null) {
      message.type = object.type;
    }
    if (object.height !== void 0 && object.height !== null) {
      message.height = BigInt(object.height);
    }
    if (object.round !== void 0 && object.round !== null) {
      message.round = object.round;
    }
    if (object.block_id !== void 0 && object.block_id !== null) {
      message.blockId = BlockID.fromAmino(object.block_id);
    }
    if (object.timestamp !== void 0 && object.timestamp !== null) {
      message.timestamp = (0, import_helpers.fromTimestamp)(import_timestamp.Timestamp.fromAmino(object.timestamp));
    }
    if (object.validator_address !== void 0 && object.validator_address !== null) {
      message.validatorAddress = (0, import_helpers.bytesFromBase64)(object.validator_address);
    }
    if (object.validator_index !== void 0 && object.validator_index !== null) {
      message.validatorIndex = object.validator_index;
    }
    if (object.signature !== void 0 && object.signature !== null) {
      message.signature = (0, import_helpers.bytesFromBase64)(object.signature);
    }
    if (object.extension !== void 0 && object.extension !== null) {
      message.extension = (0, import_helpers.bytesFromBase64)(object.extension);
    }
    if (object.extension_signature !== void 0 && object.extension_signature !== null) {
      message.extensionSignature = (0, import_helpers.bytesFromBase64)(object.extension_signature);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.type = message.type === 0 ? void 0 : message.type;
    obj.height = message.height !== BigInt(0) ? message.height?.toString() : void 0;
    obj.round = message.round === 0 ? void 0 : message.round;
    obj.block_id = message.blockId ? BlockID.toAmino(message.blockId) : void 0;
    obj.timestamp = message.timestamp ? import_timestamp.Timestamp.toAmino((0, import_helpers.toTimestamp)(message.timestamp)) : void 0;
    obj.validator_address = message.validatorAddress ? (0, import_helpers.base64FromBytes)(message.validatorAddress) : void 0;
    obj.validator_index = message.validatorIndex === 0 ? void 0 : message.validatorIndex;
    obj.signature = message.signature ? (0, import_helpers.base64FromBytes)(message.signature) : void 0;
    obj.extension = message.extension ? (0, import_helpers.base64FromBytes)(message.extension) : void 0;
    obj.extension_signature = message.extensionSignature ? (0, import_helpers.base64FromBytes)(message.extensionSignature) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return Vote.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return Vote.decode(message.value);
  },
  toProto(message) {
    return Vote.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/tendermint.types.Vote",
      value: Vote.encode(message).finish()
    };
  }
};
function createBaseCommit() {
  return {
    height: BigInt(0),
    round: 0,
    blockId: BlockID.fromPartial({}),
    signatures: []
  };
}
const Commit = {
  typeUrl: "/tendermint.types.Commit",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.height !== BigInt(0)) {
      writer.uint32(8).int64(message.height);
    }
    if (message.round !== 0) {
      writer.uint32(16).int32(message.round);
    }
    if (message.blockId !== void 0) {
      BlockID.encode(message.blockId, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.signatures) {
      CommitSig.encode(v, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseCommit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = reader.int64();
          break;
        case 2:
          message.round = reader.int32();
          break;
        case 3:
          message.blockId = BlockID.decode(reader, reader.uint32());
          break;
        case 4:
          message.signatures.push(CommitSig.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseCommit();
    message.height = object.height !== void 0 && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    message.round = object.round ?? 0;
    message.blockId = object.blockId !== void 0 && object.blockId !== null ? BlockID.fromPartial(object.blockId) : void 0;
    message.signatures = object.signatures?.map((e) => CommitSig.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseCommit();
    if (object.height !== void 0 && object.height !== null) {
      message.height = BigInt(object.height);
    }
    if (object.round !== void 0 && object.round !== null) {
      message.round = object.round;
    }
    if (object.block_id !== void 0 && object.block_id !== null) {
      message.blockId = BlockID.fromAmino(object.block_id);
    }
    message.signatures = object.signatures?.map((e) => CommitSig.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.height = message.height !== BigInt(0) ? message.height?.toString() : void 0;
    obj.round = message.round === 0 ? void 0 : message.round;
    obj.block_id = message.blockId ? BlockID.toAmino(message.blockId) : void 0;
    if (message.signatures) {
      obj.signatures = message.signatures.map((e) => e ? CommitSig.toAmino(e) : void 0);
    } else {
      obj.signatures = message.signatures;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return Commit.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return Commit.decode(message.value);
  },
  toProto(message) {
    return Commit.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/tendermint.types.Commit",
      value: Commit.encode(message).finish()
    };
  }
};
function createBaseCommitSig() {
  return {
    blockIdFlag: 0,
    validatorAddress: new Uint8Array(),
    timestamp: /* @__PURE__ */ new Date(),
    signature: new Uint8Array()
  };
}
const CommitSig = {
  typeUrl: "/tendermint.types.CommitSig",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.blockIdFlag !== 0) {
      writer.uint32(8).int32(message.blockIdFlag);
    }
    if (message.validatorAddress.length !== 0) {
      writer.uint32(18).bytes(message.validatorAddress);
    }
    if (message.timestamp !== void 0) {
      import_timestamp.Timestamp.encode((0, import_helpers.toTimestamp)(message.timestamp), writer.uint32(26).fork()).ldelim();
    }
    if (message.signature.length !== 0) {
      writer.uint32(34).bytes(message.signature);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseCommitSig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.blockIdFlag = reader.int32();
          break;
        case 2:
          message.validatorAddress = reader.bytes();
          break;
        case 3:
          message.timestamp = (0, import_helpers.fromTimestamp)(import_timestamp.Timestamp.decode(reader, reader.uint32()));
          break;
        case 4:
          message.signature = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseCommitSig();
    message.blockIdFlag = object.blockIdFlag ?? 0;
    message.validatorAddress = object.validatorAddress ?? new Uint8Array();
    message.timestamp = object.timestamp ?? void 0;
    message.signature = object.signature ?? new Uint8Array();
    return message;
  },
  fromAmino(object) {
    const message = createBaseCommitSig();
    if (object.block_id_flag !== void 0 && object.block_id_flag !== null) {
      message.blockIdFlag = object.block_id_flag;
    }
    if (object.validator_address !== void 0 && object.validator_address !== null) {
      message.validatorAddress = (0, import_helpers.bytesFromBase64)(object.validator_address);
    }
    if (object.timestamp !== void 0 && object.timestamp !== null) {
      message.timestamp = (0, import_helpers.fromTimestamp)(import_timestamp.Timestamp.fromAmino(object.timestamp));
    }
    if (object.signature !== void 0 && object.signature !== null) {
      message.signature = (0, import_helpers.bytesFromBase64)(object.signature);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.block_id_flag = message.blockIdFlag === 0 ? void 0 : message.blockIdFlag;
    obj.validator_address = message.validatorAddress ? (0, import_helpers.base64FromBytes)(message.validatorAddress) : void 0;
    obj.timestamp = message.timestamp ? import_timestamp.Timestamp.toAmino((0, import_helpers.toTimestamp)(message.timestamp)) : void 0;
    obj.signature = message.signature ? (0, import_helpers.base64FromBytes)(message.signature) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return CommitSig.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return CommitSig.decode(message.value);
  },
  toProto(message) {
    return CommitSig.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/tendermint.types.CommitSig",
      value: CommitSig.encode(message).finish()
    };
  }
};
function createBaseExtendedCommit() {
  return {
    height: BigInt(0),
    round: 0,
    blockId: BlockID.fromPartial({}),
    extendedSignatures: []
  };
}
const ExtendedCommit = {
  typeUrl: "/tendermint.types.ExtendedCommit",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.height !== BigInt(0)) {
      writer.uint32(8).int64(message.height);
    }
    if (message.round !== 0) {
      writer.uint32(16).int32(message.round);
    }
    if (message.blockId !== void 0) {
      BlockID.encode(message.blockId, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.extendedSignatures) {
      ExtendedCommitSig.encode(v, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseExtendedCommit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = reader.int64();
          break;
        case 2:
          message.round = reader.int32();
          break;
        case 3:
          message.blockId = BlockID.decode(reader, reader.uint32());
          break;
        case 4:
          message.extendedSignatures.push(ExtendedCommitSig.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseExtendedCommit();
    message.height = object.height !== void 0 && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    message.round = object.round ?? 0;
    message.blockId = object.blockId !== void 0 && object.blockId !== null ? BlockID.fromPartial(object.blockId) : void 0;
    message.extendedSignatures = object.extendedSignatures?.map((e) => ExtendedCommitSig.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseExtendedCommit();
    if (object.height !== void 0 && object.height !== null) {
      message.height = BigInt(object.height);
    }
    if (object.round !== void 0 && object.round !== null) {
      message.round = object.round;
    }
    if (object.block_id !== void 0 && object.block_id !== null) {
      message.blockId = BlockID.fromAmino(object.block_id);
    }
    message.extendedSignatures = object.extended_signatures?.map((e) => ExtendedCommitSig.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.height = message.height !== BigInt(0) ? message.height?.toString() : void 0;
    obj.round = message.round === 0 ? void 0 : message.round;
    obj.block_id = message.blockId ? BlockID.toAmino(message.blockId) : void 0;
    if (message.extendedSignatures) {
      obj.extended_signatures = message.extendedSignatures.map((e) => e ? ExtendedCommitSig.toAmino(e) : void 0);
    } else {
      obj.extended_signatures = message.extendedSignatures;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return ExtendedCommit.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return ExtendedCommit.decode(message.value);
  },
  toProto(message) {
    return ExtendedCommit.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/tendermint.types.ExtendedCommit",
      value: ExtendedCommit.encode(message).finish()
    };
  }
};
function createBaseExtendedCommitSig() {
  return {
    blockIdFlag: 0,
    validatorAddress: new Uint8Array(),
    timestamp: /* @__PURE__ */ new Date(),
    signature: new Uint8Array(),
    extension: new Uint8Array(),
    extensionSignature: new Uint8Array()
  };
}
const ExtendedCommitSig = {
  typeUrl: "/tendermint.types.ExtendedCommitSig",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.blockIdFlag !== 0) {
      writer.uint32(8).int32(message.blockIdFlag);
    }
    if (message.validatorAddress.length !== 0) {
      writer.uint32(18).bytes(message.validatorAddress);
    }
    if (message.timestamp !== void 0) {
      import_timestamp.Timestamp.encode((0, import_helpers.toTimestamp)(message.timestamp), writer.uint32(26).fork()).ldelim();
    }
    if (message.signature.length !== 0) {
      writer.uint32(34).bytes(message.signature);
    }
    if (message.extension.length !== 0) {
      writer.uint32(42).bytes(message.extension);
    }
    if (message.extensionSignature.length !== 0) {
      writer.uint32(50).bytes(message.extensionSignature);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseExtendedCommitSig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.blockIdFlag = reader.int32();
          break;
        case 2:
          message.validatorAddress = reader.bytes();
          break;
        case 3:
          message.timestamp = (0, import_helpers.fromTimestamp)(import_timestamp.Timestamp.decode(reader, reader.uint32()));
          break;
        case 4:
          message.signature = reader.bytes();
          break;
        case 5:
          message.extension = reader.bytes();
          break;
        case 6:
          message.extensionSignature = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseExtendedCommitSig();
    message.blockIdFlag = object.blockIdFlag ?? 0;
    message.validatorAddress = object.validatorAddress ?? new Uint8Array();
    message.timestamp = object.timestamp ?? void 0;
    message.signature = object.signature ?? new Uint8Array();
    message.extension = object.extension ?? new Uint8Array();
    message.extensionSignature = object.extensionSignature ?? new Uint8Array();
    return message;
  },
  fromAmino(object) {
    const message = createBaseExtendedCommitSig();
    if (object.block_id_flag !== void 0 && object.block_id_flag !== null) {
      message.blockIdFlag = object.block_id_flag;
    }
    if (object.validator_address !== void 0 && object.validator_address !== null) {
      message.validatorAddress = (0, import_helpers.bytesFromBase64)(object.validator_address);
    }
    if (object.timestamp !== void 0 && object.timestamp !== null) {
      message.timestamp = (0, import_helpers.fromTimestamp)(import_timestamp.Timestamp.fromAmino(object.timestamp));
    }
    if (object.signature !== void 0 && object.signature !== null) {
      message.signature = (0, import_helpers.bytesFromBase64)(object.signature);
    }
    if (object.extension !== void 0 && object.extension !== null) {
      message.extension = (0, import_helpers.bytesFromBase64)(object.extension);
    }
    if (object.extension_signature !== void 0 && object.extension_signature !== null) {
      message.extensionSignature = (0, import_helpers.bytesFromBase64)(object.extension_signature);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.block_id_flag = message.blockIdFlag === 0 ? void 0 : message.blockIdFlag;
    obj.validator_address = message.validatorAddress ? (0, import_helpers.base64FromBytes)(message.validatorAddress) : void 0;
    obj.timestamp = message.timestamp ? import_timestamp.Timestamp.toAmino((0, import_helpers.toTimestamp)(message.timestamp)) : void 0;
    obj.signature = message.signature ? (0, import_helpers.base64FromBytes)(message.signature) : void 0;
    obj.extension = message.extension ? (0, import_helpers.base64FromBytes)(message.extension) : void 0;
    obj.extension_signature = message.extensionSignature ? (0, import_helpers.base64FromBytes)(message.extensionSignature) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return ExtendedCommitSig.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return ExtendedCommitSig.decode(message.value);
  },
  toProto(message) {
    return ExtendedCommitSig.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/tendermint.types.ExtendedCommitSig",
      value: ExtendedCommitSig.encode(message).finish()
    };
  }
};
function createBaseProposal() {
  return {
    type: 0,
    height: BigInt(0),
    round: 0,
    polRound: 0,
    blockId: BlockID.fromPartial({}),
    timestamp: /* @__PURE__ */ new Date(),
    signature: new Uint8Array()
  };
}
const Proposal = {
  typeUrl: "/tendermint.types.Proposal",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.height !== BigInt(0)) {
      writer.uint32(16).int64(message.height);
    }
    if (message.round !== 0) {
      writer.uint32(24).int32(message.round);
    }
    if (message.polRound !== 0) {
      writer.uint32(32).int32(message.polRound);
    }
    if (message.blockId !== void 0) {
      BlockID.encode(message.blockId, writer.uint32(42).fork()).ldelim();
    }
    if (message.timestamp !== void 0) {
      import_timestamp.Timestamp.encode((0, import_helpers.toTimestamp)(message.timestamp), writer.uint32(50).fork()).ldelim();
    }
    if (message.signature.length !== 0) {
      writer.uint32(58).bytes(message.signature);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.int32();
          break;
        case 2:
          message.height = reader.int64();
          break;
        case 3:
          message.round = reader.int32();
          break;
        case 4:
          message.polRound = reader.int32();
          break;
        case 5:
          message.blockId = BlockID.decode(reader, reader.uint32());
          break;
        case 6:
          message.timestamp = (0, import_helpers.fromTimestamp)(import_timestamp.Timestamp.decode(reader, reader.uint32()));
          break;
        case 7:
          message.signature = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseProposal();
    message.type = object.type ?? 0;
    message.height = object.height !== void 0 && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    message.round = object.round ?? 0;
    message.polRound = object.polRound ?? 0;
    message.blockId = object.blockId !== void 0 && object.blockId !== null ? BlockID.fromPartial(object.blockId) : void 0;
    message.timestamp = object.timestamp ?? void 0;
    message.signature = object.signature ?? new Uint8Array();
    return message;
  },
  fromAmino(object) {
    const message = createBaseProposal();
    if (object.type !== void 0 && object.type !== null) {
      message.type = object.type;
    }
    if (object.height !== void 0 && object.height !== null) {
      message.height = BigInt(object.height);
    }
    if (object.round !== void 0 && object.round !== null) {
      message.round = object.round;
    }
    if (object.pol_round !== void 0 && object.pol_round !== null) {
      message.polRound = object.pol_round;
    }
    if (object.block_id !== void 0 && object.block_id !== null) {
      message.blockId = BlockID.fromAmino(object.block_id);
    }
    if (object.timestamp !== void 0 && object.timestamp !== null) {
      message.timestamp = (0, import_helpers.fromTimestamp)(import_timestamp.Timestamp.fromAmino(object.timestamp));
    }
    if (object.signature !== void 0 && object.signature !== null) {
      message.signature = (0, import_helpers.bytesFromBase64)(object.signature);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.type = message.type === 0 ? void 0 : message.type;
    obj.height = message.height !== BigInt(0) ? message.height?.toString() : void 0;
    obj.round = message.round === 0 ? void 0 : message.round;
    obj.pol_round = message.polRound === 0 ? void 0 : message.polRound;
    obj.block_id = message.blockId ? BlockID.toAmino(message.blockId) : void 0;
    obj.timestamp = message.timestamp ? import_timestamp.Timestamp.toAmino((0, import_helpers.toTimestamp)(message.timestamp)) : void 0;
    obj.signature = message.signature ? (0, import_helpers.base64FromBytes)(message.signature) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return Proposal.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return Proposal.decode(message.value);
  },
  toProto(message) {
    return Proposal.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/tendermint.types.Proposal",
      value: Proposal.encode(message).finish()
    };
  }
};
function createBaseSignedHeader() {
  return {
    header: void 0,
    commit: void 0
  };
}
const SignedHeader = {
  typeUrl: "/tendermint.types.SignedHeader",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.header !== void 0) {
      Header.encode(message.header, writer.uint32(10).fork()).ldelim();
    }
    if (message.commit !== void 0) {
      Commit.encode(message.commit, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseSignedHeader();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.header = Header.decode(reader, reader.uint32());
          break;
        case 2:
          message.commit = Commit.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseSignedHeader();
    message.header = object.header !== void 0 && object.header !== null ? Header.fromPartial(object.header) : void 0;
    message.commit = object.commit !== void 0 && object.commit !== null ? Commit.fromPartial(object.commit) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseSignedHeader();
    if (object.header !== void 0 && object.header !== null) {
      message.header = Header.fromAmino(object.header);
    }
    if (object.commit !== void 0 && object.commit !== null) {
      message.commit = Commit.fromAmino(object.commit);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.header = message.header ? Header.toAmino(message.header) : void 0;
    obj.commit = message.commit ? Commit.toAmino(message.commit) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return SignedHeader.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return SignedHeader.decode(message.value);
  },
  toProto(message) {
    return SignedHeader.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/tendermint.types.SignedHeader",
      value: SignedHeader.encode(message).finish()
    };
  }
};
function createBaseLightBlock() {
  return {
    signedHeader: void 0,
    validatorSet: void 0
  };
}
const LightBlock = {
  typeUrl: "/tendermint.types.LightBlock",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.signedHeader !== void 0) {
      SignedHeader.encode(message.signedHeader, writer.uint32(10).fork()).ldelim();
    }
    if (message.validatorSet !== void 0) {
      import_validator.ValidatorSet.encode(message.validatorSet, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseLightBlock();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signedHeader = SignedHeader.decode(reader, reader.uint32());
          break;
        case 2:
          message.validatorSet = import_validator.ValidatorSet.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseLightBlock();
    message.signedHeader = object.signedHeader !== void 0 && object.signedHeader !== null ? SignedHeader.fromPartial(object.signedHeader) : void 0;
    message.validatorSet = object.validatorSet !== void 0 && object.validatorSet !== null ? import_validator.ValidatorSet.fromPartial(object.validatorSet) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseLightBlock();
    if (object.signed_header !== void 0 && object.signed_header !== null) {
      message.signedHeader = SignedHeader.fromAmino(object.signed_header);
    }
    if (object.validator_set !== void 0 && object.validator_set !== null) {
      message.validatorSet = import_validator.ValidatorSet.fromAmino(object.validator_set);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.signed_header = message.signedHeader ? SignedHeader.toAmino(message.signedHeader) : void 0;
    obj.validator_set = message.validatorSet ? import_validator.ValidatorSet.toAmino(message.validatorSet) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return LightBlock.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return LightBlock.decode(message.value);
  },
  toProto(message) {
    return LightBlock.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/tendermint.types.LightBlock",
      value: LightBlock.encode(message).finish()
    };
  }
};
function createBaseBlockMeta() {
  return {
    blockId: BlockID.fromPartial({}),
    blockSize: BigInt(0),
    header: Header.fromPartial({}),
    numTxs: BigInt(0)
  };
}
const BlockMeta = {
  typeUrl: "/tendermint.types.BlockMeta",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.blockId !== void 0) {
      BlockID.encode(message.blockId, writer.uint32(10).fork()).ldelim();
    }
    if (message.blockSize !== BigInt(0)) {
      writer.uint32(16).int64(message.blockSize);
    }
    if (message.header !== void 0) {
      Header.encode(message.header, writer.uint32(26).fork()).ldelim();
    }
    if (message.numTxs !== BigInt(0)) {
      writer.uint32(32).int64(message.numTxs);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseBlockMeta();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.blockId = BlockID.decode(reader, reader.uint32());
          break;
        case 2:
          message.blockSize = reader.int64();
          break;
        case 3:
          message.header = Header.decode(reader, reader.uint32());
          break;
        case 4:
          message.numTxs = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseBlockMeta();
    message.blockId = object.blockId !== void 0 && object.blockId !== null ? BlockID.fromPartial(object.blockId) : void 0;
    message.blockSize = object.blockSize !== void 0 && object.blockSize !== null ? BigInt(object.blockSize.toString()) : BigInt(0);
    message.header = object.header !== void 0 && object.header !== null ? Header.fromPartial(object.header) : void 0;
    message.numTxs = object.numTxs !== void 0 && object.numTxs !== null ? BigInt(object.numTxs.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object) {
    const message = createBaseBlockMeta();
    if (object.block_id !== void 0 && object.block_id !== null) {
      message.blockId = BlockID.fromAmino(object.block_id);
    }
    if (object.block_size !== void 0 && object.block_size !== null) {
      message.blockSize = BigInt(object.block_size);
    }
    if (object.header !== void 0 && object.header !== null) {
      message.header = Header.fromAmino(object.header);
    }
    if (object.num_txs !== void 0 && object.num_txs !== null) {
      message.numTxs = BigInt(object.num_txs);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.block_id = message.blockId ? BlockID.toAmino(message.blockId) : void 0;
    obj.block_size = message.blockSize !== BigInt(0) ? message.blockSize?.toString() : void 0;
    obj.header = message.header ? Header.toAmino(message.header) : void 0;
    obj.num_txs = message.numTxs !== BigInt(0) ? message.numTxs?.toString() : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return BlockMeta.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return BlockMeta.decode(message.value);
  },
  toProto(message) {
    return BlockMeta.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/tendermint.types.BlockMeta",
      value: BlockMeta.encode(message).finish()
    };
  }
};
function createBaseTxProof() {
  return {
    rootHash: new Uint8Array(),
    data: new Uint8Array(),
    proof: void 0
  };
}
const TxProof = {
  typeUrl: "/tendermint.types.TxProof",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.rootHash.length !== 0) {
      writer.uint32(10).bytes(message.rootHash);
    }
    if (message.data.length !== 0) {
      writer.uint32(18).bytes(message.data);
    }
    if (message.proof !== void 0) {
      import_proof.Proof.encode(message.proof, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseTxProof();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rootHash = reader.bytes();
          break;
        case 2:
          message.data = reader.bytes();
          break;
        case 3:
          message.proof = import_proof.Proof.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseTxProof();
    message.rootHash = object.rootHash ?? new Uint8Array();
    message.data = object.data ?? new Uint8Array();
    message.proof = object.proof !== void 0 && object.proof !== null ? import_proof.Proof.fromPartial(object.proof) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseTxProof();
    if (object.root_hash !== void 0 && object.root_hash !== null) {
      message.rootHash = (0, import_helpers.bytesFromBase64)(object.root_hash);
    }
    if (object.data !== void 0 && object.data !== null) {
      message.data = (0, import_helpers.bytesFromBase64)(object.data);
    }
    if (object.proof !== void 0 && object.proof !== null) {
      message.proof = import_proof.Proof.fromAmino(object.proof);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.root_hash = message.rootHash ? (0, import_helpers.base64FromBytes)(message.rootHash) : void 0;
    obj.data = message.data ? (0, import_helpers.base64FromBytes)(message.data) : void 0;
    obj.proof = message.proof ? import_proof.Proof.toAmino(message.proof) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return TxProof.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return TxProof.decode(message.value);
  },
  toProto(message) {
    return TxProof.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/tendermint.types.TxProof",
      value: TxProof.encode(message).finish()
    };
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  BlockID,
  BlockMeta,
  Commit,
  CommitSig,
  Data,
  ExtendedCommit,
  ExtendedCommitSig,
  Header,
  LightBlock,
  Part,
  PartSetHeader,
  Proposal,
  SignedHeader,
  SignedMsgType,
  SignedMsgTypeAmino,
  SignedMsgTypeSDKType,
  TxProof,
  Vote,
  signedMsgTypeFromJSON,
  signedMsgTypeToJSON
});
