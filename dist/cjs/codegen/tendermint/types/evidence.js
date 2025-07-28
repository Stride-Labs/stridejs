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
var evidence_exports = {};
__export(evidence_exports, {
  DuplicateVoteEvidence: () => DuplicateVoteEvidence,
  Evidence: () => Evidence,
  EvidenceList: () => EvidenceList,
  LightClientAttackEvidence: () => LightClientAttackEvidence
});
module.exports = __toCommonJS(evidence_exports);
var import_types = require("./types");
var import_timestamp = require("../../google/protobuf/timestamp");
var import_validator = require("./validator");
var import_binary = require("../../binary");
var import_helpers = require("../../helpers");
function createBaseEvidence() {
  return {
    duplicateVoteEvidence: void 0,
    lightClientAttackEvidence: void 0
  };
}
const Evidence = {
  typeUrl: "/tendermint.types.Evidence",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.duplicateVoteEvidence !== void 0) {
      DuplicateVoteEvidence.encode(message.duplicateVoteEvidence, writer.uint32(10).fork()).ldelim();
    }
    if (message.lightClientAttackEvidence !== void 0) {
      LightClientAttackEvidence.encode(message.lightClientAttackEvidence, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseEvidence();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.duplicateVoteEvidence = DuplicateVoteEvidence.decode(reader, reader.uint32());
          break;
        case 2:
          message.lightClientAttackEvidence = LightClientAttackEvidence.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseEvidence();
    message.duplicateVoteEvidence = object.duplicateVoteEvidence !== void 0 && object.duplicateVoteEvidence !== null ? DuplicateVoteEvidence.fromPartial(object.duplicateVoteEvidence) : void 0;
    message.lightClientAttackEvidence = object.lightClientAttackEvidence !== void 0 && object.lightClientAttackEvidence !== null ? LightClientAttackEvidence.fromPartial(object.lightClientAttackEvidence) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseEvidence();
    if (object.duplicate_vote_evidence !== void 0 && object.duplicate_vote_evidence !== null) {
      message.duplicateVoteEvidence = DuplicateVoteEvidence.fromAmino(object.duplicate_vote_evidence);
    }
    if (object.light_client_attack_evidence !== void 0 && object.light_client_attack_evidence !== null) {
      message.lightClientAttackEvidence = LightClientAttackEvidence.fromAmino(object.light_client_attack_evidence);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.duplicate_vote_evidence = message.duplicateVoteEvidence ? DuplicateVoteEvidence.toAmino(message.duplicateVoteEvidence) : void 0;
    obj.light_client_attack_evidence = message.lightClientAttackEvidence ? LightClientAttackEvidence.toAmino(message.lightClientAttackEvidence) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return Evidence.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return Evidence.decode(message.value);
  },
  toProto(message) {
    return Evidence.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/tendermint.types.Evidence",
      value: Evidence.encode(message).finish()
    };
  }
};
function createBaseDuplicateVoteEvidence() {
  return {
    voteA: void 0,
    voteB: void 0,
    totalVotingPower: BigInt(0),
    validatorPower: BigInt(0),
    timestamp: /* @__PURE__ */ new Date()
  };
}
const DuplicateVoteEvidence = {
  typeUrl: "/tendermint.types.DuplicateVoteEvidence",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.voteA !== void 0) {
      import_types.Vote.encode(message.voteA, writer.uint32(10).fork()).ldelim();
    }
    if (message.voteB !== void 0) {
      import_types.Vote.encode(message.voteB, writer.uint32(18).fork()).ldelim();
    }
    if (message.totalVotingPower !== BigInt(0)) {
      writer.uint32(24).int64(message.totalVotingPower);
    }
    if (message.validatorPower !== BigInt(0)) {
      writer.uint32(32).int64(message.validatorPower);
    }
    if (message.timestamp !== void 0) {
      import_timestamp.Timestamp.encode((0, import_helpers.toTimestamp)(message.timestamp), writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseDuplicateVoteEvidence();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.voteA = import_types.Vote.decode(reader, reader.uint32());
          break;
        case 2:
          message.voteB = import_types.Vote.decode(reader, reader.uint32());
          break;
        case 3:
          message.totalVotingPower = reader.int64();
          break;
        case 4:
          message.validatorPower = reader.int64();
          break;
        case 5:
          message.timestamp = (0, import_helpers.fromTimestamp)(import_timestamp.Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseDuplicateVoteEvidence();
    message.voteA = object.voteA !== void 0 && object.voteA !== null ? import_types.Vote.fromPartial(object.voteA) : void 0;
    message.voteB = object.voteB !== void 0 && object.voteB !== null ? import_types.Vote.fromPartial(object.voteB) : void 0;
    message.totalVotingPower = object.totalVotingPower !== void 0 && object.totalVotingPower !== null ? BigInt(object.totalVotingPower.toString()) : BigInt(0);
    message.validatorPower = object.validatorPower !== void 0 && object.validatorPower !== null ? BigInt(object.validatorPower.toString()) : BigInt(0);
    message.timestamp = object.timestamp ?? void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseDuplicateVoteEvidence();
    if (object.vote_a !== void 0 && object.vote_a !== null) {
      message.voteA = import_types.Vote.fromAmino(object.vote_a);
    }
    if (object.vote_b !== void 0 && object.vote_b !== null) {
      message.voteB = import_types.Vote.fromAmino(object.vote_b);
    }
    if (object.total_voting_power !== void 0 && object.total_voting_power !== null) {
      message.totalVotingPower = BigInt(object.total_voting_power);
    }
    if (object.validator_power !== void 0 && object.validator_power !== null) {
      message.validatorPower = BigInt(object.validator_power);
    }
    if (object.timestamp !== void 0 && object.timestamp !== null) {
      message.timestamp = (0, import_helpers.fromTimestamp)(import_timestamp.Timestamp.fromAmino(object.timestamp));
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.vote_a = message.voteA ? import_types.Vote.toAmino(message.voteA) : void 0;
    obj.vote_b = message.voteB ? import_types.Vote.toAmino(message.voteB) : void 0;
    obj.total_voting_power = message.totalVotingPower !== BigInt(0) ? message.totalVotingPower?.toString() : void 0;
    obj.validator_power = message.validatorPower !== BigInt(0) ? message.validatorPower?.toString() : void 0;
    obj.timestamp = message.timestamp ? import_timestamp.Timestamp.toAmino((0, import_helpers.toTimestamp)(message.timestamp)) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return DuplicateVoteEvidence.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return DuplicateVoteEvidence.decode(message.value);
  },
  toProto(message) {
    return DuplicateVoteEvidence.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/tendermint.types.DuplicateVoteEvidence",
      value: DuplicateVoteEvidence.encode(message).finish()
    };
  }
};
function createBaseLightClientAttackEvidence() {
  return {
    conflictingBlock: void 0,
    commonHeight: BigInt(0),
    byzantineValidators: [],
    totalVotingPower: BigInt(0),
    timestamp: /* @__PURE__ */ new Date()
  };
}
const LightClientAttackEvidence = {
  typeUrl: "/tendermint.types.LightClientAttackEvidence",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.conflictingBlock !== void 0) {
      import_types.LightBlock.encode(message.conflictingBlock, writer.uint32(10).fork()).ldelim();
    }
    if (message.commonHeight !== BigInt(0)) {
      writer.uint32(16).int64(message.commonHeight);
    }
    for (const v of message.byzantineValidators) {
      import_validator.Validator.encode(v, writer.uint32(26).fork()).ldelim();
    }
    if (message.totalVotingPower !== BigInt(0)) {
      writer.uint32(32).int64(message.totalVotingPower);
    }
    if (message.timestamp !== void 0) {
      import_timestamp.Timestamp.encode((0, import_helpers.toTimestamp)(message.timestamp), writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseLightClientAttackEvidence();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.conflictingBlock = import_types.LightBlock.decode(reader, reader.uint32());
          break;
        case 2:
          message.commonHeight = reader.int64();
          break;
        case 3:
          message.byzantineValidators.push(import_validator.Validator.decode(reader, reader.uint32()));
          break;
        case 4:
          message.totalVotingPower = reader.int64();
          break;
        case 5:
          message.timestamp = (0, import_helpers.fromTimestamp)(import_timestamp.Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseLightClientAttackEvidence();
    message.conflictingBlock = object.conflictingBlock !== void 0 && object.conflictingBlock !== null ? import_types.LightBlock.fromPartial(object.conflictingBlock) : void 0;
    message.commonHeight = object.commonHeight !== void 0 && object.commonHeight !== null ? BigInt(object.commonHeight.toString()) : BigInt(0);
    message.byzantineValidators = object.byzantineValidators?.map((e) => import_validator.Validator.fromPartial(e)) || [];
    message.totalVotingPower = object.totalVotingPower !== void 0 && object.totalVotingPower !== null ? BigInt(object.totalVotingPower.toString()) : BigInt(0);
    message.timestamp = object.timestamp ?? void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseLightClientAttackEvidence();
    if (object.conflicting_block !== void 0 && object.conflicting_block !== null) {
      message.conflictingBlock = import_types.LightBlock.fromAmino(object.conflicting_block);
    }
    if (object.common_height !== void 0 && object.common_height !== null) {
      message.commonHeight = BigInt(object.common_height);
    }
    message.byzantineValidators = object.byzantine_validators?.map((e) => import_validator.Validator.fromAmino(e)) || [];
    if (object.total_voting_power !== void 0 && object.total_voting_power !== null) {
      message.totalVotingPower = BigInt(object.total_voting_power);
    }
    if (object.timestamp !== void 0 && object.timestamp !== null) {
      message.timestamp = (0, import_helpers.fromTimestamp)(import_timestamp.Timestamp.fromAmino(object.timestamp));
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.conflicting_block = message.conflictingBlock ? import_types.LightBlock.toAmino(message.conflictingBlock) : void 0;
    obj.common_height = message.commonHeight !== BigInt(0) ? message.commonHeight?.toString() : void 0;
    if (message.byzantineValidators) {
      obj.byzantine_validators = message.byzantineValidators.map((e) => e ? import_validator.Validator.toAmino(e) : void 0);
    } else {
      obj.byzantine_validators = message.byzantineValidators;
    }
    obj.total_voting_power = message.totalVotingPower !== BigInt(0) ? message.totalVotingPower?.toString() : void 0;
    obj.timestamp = message.timestamp ? import_timestamp.Timestamp.toAmino((0, import_helpers.toTimestamp)(message.timestamp)) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return LightClientAttackEvidence.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return LightClientAttackEvidence.decode(message.value);
  },
  toProto(message) {
    return LightClientAttackEvidence.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/tendermint.types.LightClientAttackEvidence",
      value: LightClientAttackEvidence.encode(message).finish()
    };
  }
};
function createBaseEvidenceList() {
  return {
    evidence: []
  };
}
const EvidenceList = {
  typeUrl: "/tendermint.types.EvidenceList",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    for (const v of message.evidence) {
      Evidence.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseEvidenceList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.evidence.push(Evidence.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseEvidenceList();
    message.evidence = object.evidence?.map((e) => Evidence.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseEvidenceList();
    message.evidence = object.evidence?.map((e) => Evidence.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.evidence) {
      obj.evidence = message.evidence.map((e) => e ? Evidence.toAmino(e) : void 0);
    } else {
      obj.evidence = message.evidence;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return EvidenceList.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return EvidenceList.decode(message.value);
  },
  toProto(message) {
    return EvidenceList.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/tendermint.types.EvidenceList",
      value: EvidenceList.encode(message).finish()
    };
  }
};
// Removed broken CommonJS export annotation
