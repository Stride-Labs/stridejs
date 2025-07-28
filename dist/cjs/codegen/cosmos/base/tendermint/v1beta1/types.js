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
var types_exports = {};
__export(types_exports, {
  Block: () => Block,
  Header: () => Header
});
module.exports = __toCommonJS(types_exports);
var import_types = require("../../../../tendermint/types/types");
var import_evidence = require("../../../../tendermint/types/evidence");
var import_types2 = require("../../../../tendermint/version/types");
var import_timestamp = require("../../../../google/protobuf/timestamp");
var import_binary = require("../../../../binary");
var import_helpers = require("../../../../helpers");
function createBaseBlock() {
  return {
    header: Header.fromPartial({}),
    data: import_types.Data.fromPartial({}),
    evidence: import_evidence.EvidenceList.fromPartial({}),
    lastCommit: void 0
  };
}
const Block = {
  typeUrl: "/cosmos.base.tendermint.v1beta1.Block",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.header !== void 0) {
      Header.encode(message.header, writer.uint32(10).fork()).ldelim();
    }
    if (message.data !== void 0) {
      import_types.Data.encode(message.data, writer.uint32(18).fork()).ldelim();
    }
    if (message.evidence !== void 0) {
      import_evidence.EvidenceList.encode(message.evidence, writer.uint32(26).fork()).ldelim();
    }
    if (message.lastCommit !== void 0) {
      import_types.Commit.encode(message.lastCommit, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseBlock();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.header = Header.decode(reader, reader.uint32());
          break;
        case 2:
          message.data = import_types.Data.decode(reader, reader.uint32());
          break;
        case 3:
          message.evidence = import_evidence.EvidenceList.decode(reader, reader.uint32());
          break;
        case 4:
          message.lastCommit = import_types.Commit.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseBlock();
    message.header = object.header !== void 0 && object.header !== null ? Header.fromPartial(object.header) : void 0;
    message.data = object.data !== void 0 && object.data !== null ? import_types.Data.fromPartial(object.data) : void 0;
    message.evidence = object.evidence !== void 0 && object.evidence !== null ? import_evidence.EvidenceList.fromPartial(object.evidence) : void 0;
    message.lastCommit = object.lastCommit !== void 0 && object.lastCommit !== null ? import_types.Commit.fromPartial(object.lastCommit) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseBlock();
    if (object.header !== void 0 && object.header !== null) {
      message.header = Header.fromAmino(object.header);
    }
    if (object.data !== void 0 && object.data !== null) {
      message.data = import_types.Data.fromAmino(object.data);
    }
    if (object.evidence !== void 0 && object.evidence !== null) {
      message.evidence = import_evidence.EvidenceList.fromAmino(object.evidence);
    }
    if (object.last_commit !== void 0 && object.last_commit !== null) {
      message.lastCommit = import_types.Commit.fromAmino(object.last_commit);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.header = message.header ? Header.toAmino(message.header) : Header.toAmino(Header.fromPartial({}));
    obj.data = message.data ? import_types.Data.toAmino(message.data) : import_types.Data.toAmino(import_types.Data.fromPartial({}));
    obj.evidence = message.evidence ? import_evidence.EvidenceList.toAmino(message.evidence) : import_evidence.EvidenceList.toAmino(import_evidence.EvidenceList.fromPartial({}));
    obj.last_commit = message.lastCommit ? import_types.Commit.toAmino(message.lastCommit) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return Block.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/Block",
      value: Block.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return Block.decode(message.value);
  },
  toProto(message) {
    return Block.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.base.tendermint.v1beta1.Block",
      value: Block.encode(message).finish()
    };
  }
};
function createBaseHeader() {
  return {
    version: import_types2.Consensus.fromPartial({}),
    chainId: "",
    height: BigInt(0),
    time: /* @__PURE__ */ new Date(),
    lastBlockId: import_types.BlockID.fromPartial({}),
    lastCommitHash: new Uint8Array(),
    dataHash: new Uint8Array(),
    validatorsHash: new Uint8Array(),
    nextValidatorsHash: new Uint8Array(),
    consensusHash: new Uint8Array(),
    appHash: new Uint8Array(),
    lastResultsHash: new Uint8Array(),
    evidenceHash: new Uint8Array(),
    proposerAddress: ""
  };
}
const Header = {
  typeUrl: "/cosmos.base.tendermint.v1beta1.Header",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.version !== void 0) {
      import_types2.Consensus.encode(message.version, writer.uint32(10).fork()).ldelim();
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
      import_types.BlockID.encode(message.lastBlockId, writer.uint32(42).fork()).ldelim();
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
    if (message.proposerAddress !== "") {
      writer.uint32(114).string(message.proposerAddress);
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
          message.version = import_types2.Consensus.decode(reader, reader.uint32());
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
          message.lastBlockId = import_types.BlockID.decode(reader, reader.uint32());
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
          message.proposerAddress = reader.string();
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
    message.version = object.version !== void 0 && object.version !== null ? import_types2.Consensus.fromPartial(object.version) : void 0;
    message.chainId = object.chainId ?? "";
    message.height = object.height !== void 0 && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    message.time = object.time ?? void 0;
    message.lastBlockId = object.lastBlockId !== void 0 && object.lastBlockId !== null ? import_types.BlockID.fromPartial(object.lastBlockId) : void 0;
    message.lastCommitHash = object.lastCommitHash ?? new Uint8Array();
    message.dataHash = object.dataHash ?? new Uint8Array();
    message.validatorsHash = object.validatorsHash ?? new Uint8Array();
    message.nextValidatorsHash = object.nextValidatorsHash ?? new Uint8Array();
    message.consensusHash = object.consensusHash ?? new Uint8Array();
    message.appHash = object.appHash ?? new Uint8Array();
    message.lastResultsHash = object.lastResultsHash ?? new Uint8Array();
    message.evidenceHash = object.evidenceHash ?? new Uint8Array();
    message.proposerAddress = object.proposerAddress ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseHeader();
    if (object.version !== void 0 && object.version !== null) {
      message.version = import_types2.Consensus.fromAmino(object.version);
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
      message.lastBlockId = import_types.BlockID.fromAmino(object.last_block_id);
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
      message.proposerAddress = object.proposer_address;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.version = message.version ? import_types2.Consensus.toAmino(message.version) : import_types2.Consensus.toAmino(import_types2.Consensus.fromPartial({}));
    obj.chain_id = message.chainId === "" ? void 0 : message.chainId;
    obj.height = message.height !== BigInt(0) ? message.height?.toString() : void 0;
    obj.time = message.time ? import_timestamp.Timestamp.toAmino((0, import_helpers.toTimestamp)(message.time)) : /* @__PURE__ */ new Date();
    obj.last_block_id = message.lastBlockId ? import_types.BlockID.toAmino(message.lastBlockId) : import_types.BlockID.toAmino(import_types.BlockID.fromPartial({}));
    obj.last_commit_hash = message.lastCommitHash ? (0, import_helpers.base64FromBytes)(message.lastCommitHash) : void 0;
    obj.data_hash = message.dataHash ? (0, import_helpers.base64FromBytes)(message.dataHash) : void 0;
    obj.validators_hash = message.validatorsHash ? (0, import_helpers.base64FromBytes)(message.validatorsHash) : void 0;
    obj.next_validators_hash = message.nextValidatorsHash ? (0, import_helpers.base64FromBytes)(message.nextValidatorsHash) : void 0;
    obj.consensus_hash = message.consensusHash ? (0, import_helpers.base64FromBytes)(message.consensusHash) : void 0;
    obj.app_hash = message.appHash ? (0, import_helpers.base64FromBytes)(message.appHash) : void 0;
    obj.last_results_hash = message.lastResultsHash ? (0, import_helpers.base64FromBytes)(message.lastResultsHash) : void 0;
    obj.evidence_hash = message.evidenceHash ? (0, import_helpers.base64FromBytes)(message.evidenceHash) : void 0;
    obj.proposer_address = message.proposerAddress === "" ? void 0 : message.proposerAddress;
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
      typeUrl: "/cosmos.base.tendermint.v1beta1.Header",
      value: Header.encode(message).finish()
    };
  }
};
// Proper CommonJS exports for dynamic imports
module.exports = {
  Block,
  Header
};
