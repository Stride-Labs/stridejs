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
  Cosmos_groupv1DecisionPolicy_FromAmino: () => Cosmos_groupv1DecisionPolicy_FromAmino,
  Cosmos_groupv1DecisionPolicy_InterfaceDecoder: () => Cosmos_groupv1DecisionPolicy_InterfaceDecoder,
  Cosmos_groupv1DecisionPolicy_ToAmino: () => Cosmos_groupv1DecisionPolicy_ToAmino,
  DecisionPolicyWindows: () => DecisionPolicyWindows,
  GroupInfo: () => GroupInfo,
  GroupMember: () => GroupMember,
  GroupPolicyInfo: () => GroupPolicyInfo,
  Member: () => Member,
  MemberRequest: () => MemberRequest,
  PercentageDecisionPolicy: () => PercentageDecisionPolicy,
  Proposal: () => Proposal,
  ProposalExecutorResult: () => ProposalExecutorResult,
  ProposalExecutorResultAmino: () => ProposalExecutorResultAmino,
  ProposalExecutorResultSDKType: () => ProposalExecutorResultSDKType,
  ProposalStatus: () => ProposalStatus,
  ProposalStatusAmino: () => ProposalStatusAmino,
  ProposalStatusSDKType: () => ProposalStatusSDKType,
  TallyResult: () => TallyResult,
  ThresholdDecisionPolicy: () => ThresholdDecisionPolicy,
  Vote: () => Vote,
  VoteOption: () => VoteOption,
  VoteOptionAmino: () => VoteOptionAmino,
  VoteOptionSDKType: () => VoteOptionSDKType,
  proposalExecutorResultFromJSON: () => proposalExecutorResultFromJSON,
  proposalExecutorResultToJSON: () => proposalExecutorResultToJSON,
  proposalStatusFromJSON: () => proposalStatusFromJSON,
  proposalStatusToJSON: () => proposalStatusToJSON,
  voteOptionFromJSON: () => voteOptionFromJSON,
  voteOptionToJSON: () => voteOptionToJSON
});
module.exports = __toCommonJS(types_exports);
var import_timestamp = require("../../../google/protobuf/timestamp");
var import_duration = require("../../../google/protobuf/duration");
var import_any = require("../../../google/protobuf/any");
var import_binary = require("../../../binary");
var import_helpers = require("../../../helpers");
var VoteOption = /* @__PURE__ */ ((VoteOption2) => {
  VoteOption2[VoteOption2["VOTE_OPTION_UNSPECIFIED"] = 0] = "VOTE_OPTION_UNSPECIFIED";
  VoteOption2[VoteOption2["VOTE_OPTION_YES"] = 1] = "VOTE_OPTION_YES";
  VoteOption2[VoteOption2["VOTE_OPTION_ABSTAIN"] = 2] = "VOTE_OPTION_ABSTAIN";
  VoteOption2[VoteOption2["VOTE_OPTION_NO"] = 3] = "VOTE_OPTION_NO";
  VoteOption2[VoteOption2["VOTE_OPTION_NO_WITH_VETO"] = 4] = "VOTE_OPTION_NO_WITH_VETO";
  VoteOption2[VoteOption2["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return VoteOption2;
})(VoteOption || {});
const VoteOptionSDKType = VoteOption;
const VoteOptionAmino = VoteOption;
function voteOptionFromJSON(object) {
  switch (object) {
    case 0:
    case "VOTE_OPTION_UNSPECIFIED":
      return 0 /* VOTE_OPTION_UNSPECIFIED */;
    case 1:
    case "VOTE_OPTION_YES":
      return 1 /* VOTE_OPTION_YES */;
    case 2:
    case "VOTE_OPTION_ABSTAIN":
      return 2 /* VOTE_OPTION_ABSTAIN */;
    case 3:
    case "VOTE_OPTION_NO":
      return 3 /* VOTE_OPTION_NO */;
    case 4:
    case "VOTE_OPTION_NO_WITH_VETO":
      return 4 /* VOTE_OPTION_NO_WITH_VETO */;
    case -1:
    case "UNRECOGNIZED":
    default:
      return -1 /* UNRECOGNIZED */;
  }
}
function voteOptionToJSON(object) {
  switch (object) {
    case 0 /* VOTE_OPTION_UNSPECIFIED */:
      return "VOTE_OPTION_UNSPECIFIED";
    case 1 /* VOTE_OPTION_YES */:
      return "VOTE_OPTION_YES";
    case 2 /* VOTE_OPTION_ABSTAIN */:
      return "VOTE_OPTION_ABSTAIN";
    case 3 /* VOTE_OPTION_NO */:
      return "VOTE_OPTION_NO";
    case 4 /* VOTE_OPTION_NO_WITH_VETO */:
      return "VOTE_OPTION_NO_WITH_VETO";
    case -1 /* UNRECOGNIZED */:
    default:
      return "UNRECOGNIZED";
  }
}
var ProposalStatus = /* @__PURE__ */ ((ProposalStatus2) => {
  ProposalStatus2[ProposalStatus2["PROPOSAL_STATUS_UNSPECIFIED"] = 0] = "PROPOSAL_STATUS_UNSPECIFIED";
  ProposalStatus2[ProposalStatus2["PROPOSAL_STATUS_SUBMITTED"] = 1] = "PROPOSAL_STATUS_SUBMITTED";
  ProposalStatus2[ProposalStatus2["PROPOSAL_STATUS_ACCEPTED"] = 2] = "PROPOSAL_STATUS_ACCEPTED";
  ProposalStatus2[ProposalStatus2["PROPOSAL_STATUS_REJECTED"] = 3] = "PROPOSAL_STATUS_REJECTED";
  ProposalStatus2[ProposalStatus2["PROPOSAL_STATUS_ABORTED"] = 4] = "PROPOSAL_STATUS_ABORTED";
  ProposalStatus2[ProposalStatus2["PROPOSAL_STATUS_WITHDRAWN"] = 5] = "PROPOSAL_STATUS_WITHDRAWN";
  ProposalStatus2[ProposalStatus2["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return ProposalStatus2;
})(ProposalStatus || {});
const ProposalStatusSDKType = ProposalStatus;
const ProposalStatusAmino = ProposalStatus;
function proposalStatusFromJSON(object) {
  switch (object) {
    case 0:
    case "PROPOSAL_STATUS_UNSPECIFIED":
      return 0 /* PROPOSAL_STATUS_UNSPECIFIED */;
    case 1:
    case "PROPOSAL_STATUS_SUBMITTED":
      return 1 /* PROPOSAL_STATUS_SUBMITTED */;
    case 2:
    case "PROPOSAL_STATUS_ACCEPTED":
      return 2 /* PROPOSAL_STATUS_ACCEPTED */;
    case 3:
    case "PROPOSAL_STATUS_REJECTED":
      return 3 /* PROPOSAL_STATUS_REJECTED */;
    case 4:
    case "PROPOSAL_STATUS_ABORTED":
      return 4 /* PROPOSAL_STATUS_ABORTED */;
    case 5:
    case "PROPOSAL_STATUS_WITHDRAWN":
      return 5 /* PROPOSAL_STATUS_WITHDRAWN */;
    case -1:
    case "UNRECOGNIZED":
    default:
      return -1 /* UNRECOGNIZED */;
  }
}
function proposalStatusToJSON(object) {
  switch (object) {
    case 0 /* PROPOSAL_STATUS_UNSPECIFIED */:
      return "PROPOSAL_STATUS_UNSPECIFIED";
    case 1 /* PROPOSAL_STATUS_SUBMITTED */:
      return "PROPOSAL_STATUS_SUBMITTED";
    case 2 /* PROPOSAL_STATUS_ACCEPTED */:
      return "PROPOSAL_STATUS_ACCEPTED";
    case 3 /* PROPOSAL_STATUS_REJECTED */:
      return "PROPOSAL_STATUS_REJECTED";
    case 4 /* PROPOSAL_STATUS_ABORTED */:
      return "PROPOSAL_STATUS_ABORTED";
    case 5 /* PROPOSAL_STATUS_WITHDRAWN */:
      return "PROPOSAL_STATUS_WITHDRAWN";
    case -1 /* UNRECOGNIZED */:
    default:
      return "UNRECOGNIZED";
  }
}
var ProposalExecutorResult = /* @__PURE__ */ ((ProposalExecutorResult2) => {
  ProposalExecutorResult2[ProposalExecutorResult2["PROPOSAL_EXECUTOR_RESULT_UNSPECIFIED"] = 0] = "PROPOSAL_EXECUTOR_RESULT_UNSPECIFIED";
  ProposalExecutorResult2[ProposalExecutorResult2["PROPOSAL_EXECUTOR_RESULT_NOT_RUN"] = 1] = "PROPOSAL_EXECUTOR_RESULT_NOT_RUN";
  ProposalExecutorResult2[ProposalExecutorResult2["PROPOSAL_EXECUTOR_RESULT_SUCCESS"] = 2] = "PROPOSAL_EXECUTOR_RESULT_SUCCESS";
  ProposalExecutorResult2[ProposalExecutorResult2["PROPOSAL_EXECUTOR_RESULT_FAILURE"] = 3] = "PROPOSAL_EXECUTOR_RESULT_FAILURE";
  ProposalExecutorResult2[ProposalExecutorResult2["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return ProposalExecutorResult2;
})(ProposalExecutorResult || {});
const ProposalExecutorResultSDKType = ProposalExecutorResult;
const ProposalExecutorResultAmino = ProposalExecutorResult;
function proposalExecutorResultFromJSON(object) {
  switch (object) {
    case 0:
    case "PROPOSAL_EXECUTOR_RESULT_UNSPECIFIED":
      return 0 /* PROPOSAL_EXECUTOR_RESULT_UNSPECIFIED */;
    case 1:
    case "PROPOSAL_EXECUTOR_RESULT_NOT_RUN":
      return 1 /* PROPOSAL_EXECUTOR_RESULT_NOT_RUN */;
    case 2:
    case "PROPOSAL_EXECUTOR_RESULT_SUCCESS":
      return 2 /* PROPOSAL_EXECUTOR_RESULT_SUCCESS */;
    case 3:
    case "PROPOSAL_EXECUTOR_RESULT_FAILURE":
      return 3 /* PROPOSAL_EXECUTOR_RESULT_FAILURE */;
    case -1:
    case "UNRECOGNIZED":
    default:
      return -1 /* UNRECOGNIZED */;
  }
}
function proposalExecutorResultToJSON(object) {
  switch (object) {
    case 0 /* PROPOSAL_EXECUTOR_RESULT_UNSPECIFIED */:
      return "PROPOSAL_EXECUTOR_RESULT_UNSPECIFIED";
    case 1 /* PROPOSAL_EXECUTOR_RESULT_NOT_RUN */:
      return "PROPOSAL_EXECUTOR_RESULT_NOT_RUN";
    case 2 /* PROPOSAL_EXECUTOR_RESULT_SUCCESS */:
      return "PROPOSAL_EXECUTOR_RESULT_SUCCESS";
    case 3 /* PROPOSAL_EXECUTOR_RESULT_FAILURE */:
      return "PROPOSAL_EXECUTOR_RESULT_FAILURE";
    case -1 /* UNRECOGNIZED */:
    default:
      return "UNRECOGNIZED";
  }
}
function createBaseMember() {
  return {
    address: "",
    weight: "",
    metadata: "",
    addedAt: /* @__PURE__ */ new Date()
  };
}
const Member = {
  typeUrl: "/cosmos.group.v1.Member",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.weight !== "") {
      writer.uint32(18).string(message.weight);
    }
    if (message.metadata !== "") {
      writer.uint32(26).string(message.metadata);
    }
    if (message.addedAt !== void 0) {
      import_timestamp.Timestamp.encode((0, import_helpers.toTimestamp)(message.addedAt), writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMember();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.weight = reader.string();
          break;
        case 3:
          message.metadata = reader.string();
          break;
        case 4:
          message.addedAt = (0, import_helpers.fromTimestamp)(import_timestamp.Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMember();
    message.address = object.address ?? "";
    message.weight = object.weight ?? "";
    message.metadata = object.metadata ?? "";
    message.addedAt = object.addedAt ?? void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseMember();
    if (object.address !== void 0 && object.address !== null) {
      message.address = object.address;
    }
    if (object.weight !== void 0 && object.weight !== null) {
      message.weight = object.weight;
    }
    if (object.metadata !== void 0 && object.metadata !== null) {
      message.metadata = object.metadata;
    }
    if (object.added_at !== void 0 && object.added_at !== null) {
      message.addedAt = (0, import_helpers.fromTimestamp)(import_timestamp.Timestamp.fromAmino(object.added_at));
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.address = message.address === "" ? void 0 : message.address;
    obj.weight = message.weight === "" ? void 0 : message.weight;
    obj.metadata = message.metadata === "" ? void 0 : message.metadata;
    obj.added_at = message.addedAt ? import_timestamp.Timestamp.toAmino((0, import_helpers.toTimestamp)(message.addedAt)) : /* @__PURE__ */ new Date();
    return obj;
  },
  fromAminoMsg(object) {
    return Member.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/Member",
      value: Member.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return Member.decode(message.value);
  },
  toProto(message) {
    return Member.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.group.v1.Member",
      value: Member.encode(message).finish()
    };
  }
};
function createBaseMemberRequest() {
  return {
    address: "",
    weight: "",
    metadata: ""
  };
}
const MemberRequest = {
  typeUrl: "/cosmos.group.v1.MemberRequest",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.weight !== "") {
      writer.uint32(18).string(message.weight);
    }
    if (message.metadata !== "") {
      writer.uint32(26).string(message.metadata);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMemberRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.weight = reader.string();
          break;
        case 3:
          message.metadata = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMemberRequest();
    message.address = object.address ?? "";
    message.weight = object.weight ?? "";
    message.metadata = object.metadata ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseMemberRequest();
    if (object.address !== void 0 && object.address !== null) {
      message.address = object.address;
    }
    if (object.weight !== void 0 && object.weight !== null) {
      message.weight = object.weight;
    }
    if (object.metadata !== void 0 && object.metadata !== null) {
      message.metadata = object.metadata;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.address = message.address === "" ? void 0 : message.address;
    obj.weight = message.weight === "" ? void 0 : message.weight;
    obj.metadata = message.metadata === "" ? void 0 : message.metadata;
    return obj;
  },
  fromAminoMsg(object) {
    return MemberRequest.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MemberRequest",
      value: MemberRequest.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MemberRequest.decode(message.value);
  },
  toProto(message) {
    return MemberRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.group.v1.MemberRequest",
      value: MemberRequest.encode(message).finish()
    };
  }
};
function createBaseThresholdDecisionPolicy() {
  return {
    $typeUrl: "/cosmos.group.v1.ThresholdDecisionPolicy",
    threshold: "",
    windows: void 0
  };
}
const ThresholdDecisionPolicy = {
  typeUrl: "/cosmos.group.v1.ThresholdDecisionPolicy",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.threshold !== "") {
      writer.uint32(10).string(message.threshold);
    }
    if (message.windows !== void 0) {
      DecisionPolicyWindows.encode(message.windows, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseThresholdDecisionPolicy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.threshold = reader.string();
          break;
        case 2:
          message.windows = DecisionPolicyWindows.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseThresholdDecisionPolicy();
    message.threshold = object.threshold ?? "";
    message.windows = object.windows !== void 0 && object.windows !== null ? DecisionPolicyWindows.fromPartial(object.windows) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseThresholdDecisionPolicy();
    if (object.threshold !== void 0 && object.threshold !== null) {
      message.threshold = object.threshold;
    }
    if (object.windows !== void 0 && object.windows !== null) {
      message.windows = DecisionPolicyWindows.fromAmino(object.windows);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.threshold = message.threshold === "" ? void 0 : message.threshold;
    obj.windows = message.windows ? DecisionPolicyWindows.toAmino(message.windows) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return ThresholdDecisionPolicy.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/ThresholdDecisionPolicy",
      value: ThresholdDecisionPolicy.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return ThresholdDecisionPolicy.decode(message.value);
  },
  toProto(message) {
    return ThresholdDecisionPolicy.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.group.v1.ThresholdDecisionPolicy",
      value: ThresholdDecisionPolicy.encode(message).finish()
    };
  }
};
function createBasePercentageDecisionPolicy() {
  return {
    $typeUrl: "/cosmos.group.v1.PercentageDecisionPolicy",
    percentage: "",
    windows: void 0
  };
}
const PercentageDecisionPolicy = {
  typeUrl: "/cosmos.group.v1.PercentageDecisionPolicy",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.percentage !== "") {
      writer.uint32(10).string(message.percentage);
    }
    if (message.windows !== void 0) {
      DecisionPolicyWindows.encode(message.windows, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBasePercentageDecisionPolicy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.percentage = reader.string();
          break;
        case 2:
          message.windows = DecisionPolicyWindows.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBasePercentageDecisionPolicy();
    message.percentage = object.percentage ?? "";
    message.windows = object.windows !== void 0 && object.windows !== null ? DecisionPolicyWindows.fromPartial(object.windows) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBasePercentageDecisionPolicy();
    if (object.percentage !== void 0 && object.percentage !== null) {
      message.percentage = object.percentage;
    }
    if (object.windows !== void 0 && object.windows !== null) {
      message.windows = DecisionPolicyWindows.fromAmino(object.windows);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.percentage = message.percentage === "" ? void 0 : message.percentage;
    obj.windows = message.windows ? DecisionPolicyWindows.toAmino(message.windows) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return PercentageDecisionPolicy.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/PercentageDecisionPolicy",
      value: PercentageDecisionPolicy.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return PercentageDecisionPolicy.decode(message.value);
  },
  toProto(message) {
    return PercentageDecisionPolicy.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.group.v1.PercentageDecisionPolicy",
      value: PercentageDecisionPolicy.encode(message).finish()
    };
  }
};
function createBaseDecisionPolicyWindows() {
  return {
    votingPeriod: import_duration.Duration.fromPartial({}),
    minExecutionPeriod: import_duration.Duration.fromPartial({})
  };
}
const DecisionPolicyWindows = {
  typeUrl: "/cosmos.group.v1.DecisionPolicyWindows",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.votingPeriod !== void 0) {
      import_duration.Duration.encode(message.votingPeriod, writer.uint32(10).fork()).ldelim();
    }
    if (message.minExecutionPeriod !== void 0) {
      import_duration.Duration.encode(message.minExecutionPeriod, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseDecisionPolicyWindows();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.votingPeriod = import_duration.Duration.decode(reader, reader.uint32());
          break;
        case 2:
          message.minExecutionPeriod = import_duration.Duration.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseDecisionPolicyWindows();
    message.votingPeriod = object.votingPeriod !== void 0 && object.votingPeriod !== null ? import_duration.Duration.fromPartial(object.votingPeriod) : void 0;
    message.minExecutionPeriod = object.minExecutionPeriod !== void 0 && object.minExecutionPeriod !== null ? import_duration.Duration.fromPartial(object.minExecutionPeriod) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseDecisionPolicyWindows();
    if (object.voting_period !== void 0 && object.voting_period !== null) {
      message.votingPeriod = import_duration.Duration.fromAmino(object.voting_period);
    }
    if (object.min_execution_period !== void 0 && object.min_execution_period !== null) {
      message.minExecutionPeriod = import_duration.Duration.fromAmino(object.min_execution_period);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.voting_period = message.votingPeriod ? import_duration.Duration.toAmino(message.votingPeriod) : import_duration.Duration.toAmino(import_duration.Duration.fromPartial({}));
    obj.min_execution_period = message.minExecutionPeriod ? import_duration.Duration.toAmino(message.minExecutionPeriod) : import_duration.Duration.toAmino(import_duration.Duration.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object) {
    return DecisionPolicyWindows.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/DecisionPolicyWindows",
      value: DecisionPolicyWindows.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return DecisionPolicyWindows.decode(message.value);
  },
  toProto(message) {
    return DecisionPolicyWindows.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.group.v1.DecisionPolicyWindows",
      value: DecisionPolicyWindows.encode(message).finish()
    };
  }
};
function createBaseGroupInfo() {
  return {
    id: BigInt(0),
    admin: "",
    metadata: "",
    version: BigInt(0),
    totalWeight: "",
    createdAt: /* @__PURE__ */ new Date()
  };
}
const GroupInfo = {
  typeUrl: "/cosmos.group.v1.GroupInfo",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.admin !== "") {
      writer.uint32(18).string(message.admin);
    }
    if (message.metadata !== "") {
      writer.uint32(26).string(message.metadata);
    }
    if (message.version !== BigInt(0)) {
      writer.uint32(32).uint64(message.version);
    }
    if (message.totalWeight !== "") {
      writer.uint32(42).string(message.totalWeight);
    }
    if (message.createdAt !== void 0) {
      import_timestamp.Timestamp.encode((0, import_helpers.toTimestamp)(message.createdAt), writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseGroupInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        case 2:
          message.admin = reader.string();
          break;
        case 3:
          message.metadata = reader.string();
          break;
        case 4:
          message.version = reader.uint64();
          break;
        case 5:
          message.totalWeight = reader.string();
          break;
        case 6:
          message.createdAt = (0, import_helpers.fromTimestamp)(import_timestamp.Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseGroupInfo();
    message.id = object.id !== void 0 && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.admin = object.admin ?? "";
    message.metadata = object.metadata ?? "";
    message.version = object.version !== void 0 && object.version !== null ? BigInt(object.version.toString()) : BigInt(0);
    message.totalWeight = object.totalWeight ?? "";
    message.createdAt = object.createdAt ?? void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseGroupInfo();
    if (object.id !== void 0 && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.admin !== void 0 && object.admin !== null) {
      message.admin = object.admin;
    }
    if (object.metadata !== void 0 && object.metadata !== null) {
      message.metadata = object.metadata;
    }
    if (object.version !== void 0 && object.version !== null) {
      message.version = BigInt(object.version);
    }
    if (object.total_weight !== void 0 && object.total_weight !== null) {
      message.totalWeight = object.total_weight;
    }
    if (object.created_at !== void 0 && object.created_at !== null) {
      message.createdAt = (0, import_helpers.fromTimestamp)(import_timestamp.Timestamp.fromAmino(object.created_at));
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : void 0;
    obj.admin = message.admin === "" ? void 0 : message.admin;
    obj.metadata = message.metadata === "" ? void 0 : message.metadata;
    obj.version = message.version !== BigInt(0) ? message.version?.toString() : void 0;
    obj.total_weight = message.totalWeight === "" ? void 0 : message.totalWeight;
    obj.created_at = message.createdAt ? import_timestamp.Timestamp.toAmino((0, import_helpers.toTimestamp)(message.createdAt)) : /* @__PURE__ */ new Date();
    return obj;
  },
  fromAminoMsg(object) {
    return GroupInfo.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/GroupInfo",
      value: GroupInfo.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return GroupInfo.decode(message.value);
  },
  toProto(message) {
    return GroupInfo.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.group.v1.GroupInfo",
      value: GroupInfo.encode(message).finish()
    };
  }
};
function createBaseGroupMember() {
  return {
    groupId: BigInt(0),
    member: void 0
  };
}
const GroupMember = {
  typeUrl: "/cosmos.group.v1.GroupMember",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.groupId !== BigInt(0)) {
      writer.uint32(8).uint64(message.groupId);
    }
    if (message.member !== void 0) {
      Member.encode(message.member, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseGroupMember();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupId = reader.uint64();
          break;
        case 2:
          message.member = Member.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseGroupMember();
    message.groupId = object.groupId !== void 0 && object.groupId !== null ? BigInt(object.groupId.toString()) : BigInt(0);
    message.member = object.member !== void 0 && object.member !== null ? Member.fromPartial(object.member) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseGroupMember();
    if (object.group_id !== void 0 && object.group_id !== null) {
      message.groupId = BigInt(object.group_id);
    }
    if (object.member !== void 0 && object.member !== null) {
      message.member = Member.fromAmino(object.member);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.group_id = message.groupId !== BigInt(0) ? message.groupId?.toString() : void 0;
    obj.member = message.member ? Member.toAmino(message.member) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return GroupMember.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/GroupMember",
      value: GroupMember.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return GroupMember.decode(message.value);
  },
  toProto(message) {
    return GroupMember.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.group.v1.GroupMember",
      value: GroupMember.encode(message).finish()
    };
  }
};
function createBaseGroupPolicyInfo() {
  return {
    address: "",
    groupId: BigInt(0),
    admin: "",
    metadata: "",
    version: BigInt(0),
    decisionPolicy: void 0,
    createdAt: /* @__PURE__ */ new Date()
  };
}
const GroupPolicyInfo = {
  typeUrl: "/cosmos.group.v1.GroupPolicyInfo",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.groupId !== BigInt(0)) {
      writer.uint32(16).uint64(message.groupId);
    }
    if (message.admin !== "") {
      writer.uint32(26).string(message.admin);
    }
    if (message.metadata !== "") {
      writer.uint32(34).string(message.metadata);
    }
    if (message.version !== BigInt(0)) {
      writer.uint32(40).uint64(message.version);
    }
    if (message.decisionPolicy !== void 0) {
      import_any.Any.encode(message.decisionPolicy, writer.uint32(50).fork()).ldelim();
    }
    if (message.createdAt !== void 0) {
      import_timestamp.Timestamp.encode((0, import_helpers.toTimestamp)(message.createdAt), writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseGroupPolicyInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.groupId = reader.uint64();
          break;
        case 3:
          message.admin = reader.string();
          break;
        case 4:
          message.metadata = reader.string();
          break;
        case 5:
          message.version = reader.uint64();
          break;
        case 6:
          message.decisionPolicy = Cosmos_groupv1DecisionPolicy_InterfaceDecoder(reader);
          break;
        case 7:
          message.createdAt = (0, import_helpers.fromTimestamp)(import_timestamp.Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseGroupPolicyInfo();
    message.address = object.address ?? "";
    message.groupId = object.groupId !== void 0 && object.groupId !== null ? BigInt(object.groupId.toString()) : BigInt(0);
    message.admin = object.admin ?? "";
    message.metadata = object.metadata ?? "";
    message.version = object.version !== void 0 && object.version !== null ? BigInt(object.version.toString()) : BigInt(0);
    message.decisionPolicy = object.decisionPolicy !== void 0 && object.decisionPolicy !== null ? import_any.Any.fromPartial(object.decisionPolicy) : void 0;
    message.createdAt = object.createdAt ?? void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseGroupPolicyInfo();
    if (object.address !== void 0 && object.address !== null) {
      message.address = object.address;
    }
    if (object.group_id !== void 0 && object.group_id !== null) {
      message.groupId = BigInt(object.group_id);
    }
    if (object.admin !== void 0 && object.admin !== null) {
      message.admin = object.admin;
    }
    if (object.metadata !== void 0 && object.metadata !== null) {
      message.metadata = object.metadata;
    }
    if (object.version !== void 0 && object.version !== null) {
      message.version = BigInt(object.version);
    }
    if (object.decision_policy !== void 0 && object.decision_policy !== null) {
      message.decisionPolicy = Cosmos_groupv1DecisionPolicy_FromAmino(object.decision_policy);
    }
    if (object.created_at !== void 0 && object.created_at !== null) {
      message.createdAt = (0, import_helpers.fromTimestamp)(import_timestamp.Timestamp.fromAmino(object.created_at));
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.address = message.address === "" ? void 0 : message.address;
    obj.group_id = message.groupId !== BigInt(0) ? message.groupId?.toString() : void 0;
    obj.admin = message.admin === "" ? void 0 : message.admin;
    obj.metadata = message.metadata === "" ? void 0 : message.metadata;
    obj.version = message.version !== BigInt(0) ? message.version?.toString() : void 0;
    obj.decision_policy = message.decisionPolicy ? Cosmos_groupv1DecisionPolicy_ToAmino(message.decisionPolicy) : void 0;
    obj.created_at = message.createdAt ? import_timestamp.Timestamp.toAmino((0, import_helpers.toTimestamp)(message.createdAt)) : /* @__PURE__ */ new Date();
    return obj;
  },
  fromAminoMsg(object) {
    return GroupPolicyInfo.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/GroupPolicyInfo",
      value: GroupPolicyInfo.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return GroupPolicyInfo.decode(message.value);
  },
  toProto(message) {
    return GroupPolicyInfo.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.group.v1.GroupPolicyInfo",
      value: GroupPolicyInfo.encode(message).finish()
    };
  }
};
function createBaseProposal() {
  return {
    id: BigInt(0),
    groupPolicyAddress: "",
    metadata: "",
    proposers: [],
    submitTime: /* @__PURE__ */ new Date(),
    groupVersion: BigInt(0),
    groupPolicyVersion: BigInt(0),
    status: 0,
    finalTallyResult: TallyResult.fromPartial({}),
    votingPeriodEnd: /* @__PURE__ */ new Date(),
    executorResult: 0,
    messages: [],
    title: "",
    summary: ""
  };
}
const Proposal = {
  typeUrl: "/cosmos.group.v1.Proposal",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.groupPolicyAddress !== "") {
      writer.uint32(18).string(message.groupPolicyAddress);
    }
    if (message.metadata !== "") {
      writer.uint32(26).string(message.metadata);
    }
    for (const v of message.proposers) {
      writer.uint32(34).string(v);
    }
    if (message.submitTime !== void 0) {
      import_timestamp.Timestamp.encode((0, import_helpers.toTimestamp)(message.submitTime), writer.uint32(42).fork()).ldelim();
    }
    if (message.groupVersion !== BigInt(0)) {
      writer.uint32(48).uint64(message.groupVersion);
    }
    if (message.groupPolicyVersion !== BigInt(0)) {
      writer.uint32(56).uint64(message.groupPolicyVersion);
    }
    if (message.status !== 0) {
      writer.uint32(64).int32(message.status);
    }
    if (message.finalTallyResult !== void 0) {
      TallyResult.encode(message.finalTallyResult, writer.uint32(74).fork()).ldelim();
    }
    if (message.votingPeriodEnd !== void 0) {
      import_timestamp.Timestamp.encode((0, import_helpers.toTimestamp)(message.votingPeriodEnd), writer.uint32(82).fork()).ldelim();
    }
    if (message.executorResult !== 0) {
      writer.uint32(88).int32(message.executorResult);
    }
    for (const v of message.messages) {
      import_any.Any.encode(v, writer.uint32(98).fork()).ldelim();
    }
    if (message.title !== "") {
      writer.uint32(106).string(message.title);
    }
    if (message.summary !== "") {
      writer.uint32(114).string(message.summary);
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
          message.id = reader.uint64();
          break;
        case 2:
          message.groupPolicyAddress = reader.string();
          break;
        case 3:
          message.metadata = reader.string();
          break;
        case 4:
          message.proposers.push(reader.string());
          break;
        case 5:
          message.submitTime = (0, import_helpers.fromTimestamp)(import_timestamp.Timestamp.decode(reader, reader.uint32()));
          break;
        case 6:
          message.groupVersion = reader.uint64();
          break;
        case 7:
          message.groupPolicyVersion = reader.uint64();
          break;
        case 8:
          message.status = reader.int32();
          break;
        case 9:
          message.finalTallyResult = TallyResult.decode(reader, reader.uint32());
          break;
        case 10:
          message.votingPeriodEnd = (0, import_helpers.fromTimestamp)(import_timestamp.Timestamp.decode(reader, reader.uint32()));
          break;
        case 11:
          message.executorResult = reader.int32();
          break;
        case 12:
          message.messages.push(import_any.Any.decode(reader, reader.uint32()));
          break;
        case 13:
          message.title = reader.string();
          break;
        case 14:
          message.summary = reader.string();
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
    message.id = object.id !== void 0 && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.groupPolicyAddress = object.groupPolicyAddress ?? "";
    message.metadata = object.metadata ?? "";
    message.proposers = object.proposers?.map((e) => e) || [];
    message.submitTime = object.submitTime ?? void 0;
    message.groupVersion = object.groupVersion !== void 0 && object.groupVersion !== null ? BigInt(object.groupVersion.toString()) : BigInt(0);
    message.groupPolicyVersion = object.groupPolicyVersion !== void 0 && object.groupPolicyVersion !== null ? BigInt(object.groupPolicyVersion.toString()) : BigInt(0);
    message.status = object.status ?? 0;
    message.finalTallyResult = object.finalTallyResult !== void 0 && object.finalTallyResult !== null ? TallyResult.fromPartial(object.finalTallyResult) : void 0;
    message.votingPeriodEnd = object.votingPeriodEnd ?? void 0;
    message.executorResult = object.executorResult ?? 0;
    message.messages = object.messages?.map((e) => import_any.Any.fromPartial(e)) || [];
    message.title = object.title ?? "";
    message.summary = object.summary ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseProposal();
    if (object.id !== void 0 && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.group_policy_address !== void 0 && object.group_policy_address !== null) {
      message.groupPolicyAddress = object.group_policy_address;
    }
    if (object.metadata !== void 0 && object.metadata !== null) {
      message.metadata = object.metadata;
    }
    message.proposers = object.proposers?.map((e) => e) || [];
    if (object.submit_time !== void 0 && object.submit_time !== null) {
      message.submitTime = (0, import_helpers.fromTimestamp)(import_timestamp.Timestamp.fromAmino(object.submit_time));
    }
    if (object.group_version !== void 0 && object.group_version !== null) {
      message.groupVersion = BigInt(object.group_version);
    }
    if (object.group_policy_version !== void 0 && object.group_policy_version !== null) {
      message.groupPolicyVersion = BigInt(object.group_policy_version);
    }
    if (object.status !== void 0 && object.status !== null) {
      message.status = object.status;
    }
    if (object.final_tally_result !== void 0 && object.final_tally_result !== null) {
      message.finalTallyResult = TallyResult.fromAmino(object.final_tally_result);
    }
    if (object.voting_period_end !== void 0 && object.voting_period_end !== null) {
      message.votingPeriodEnd = (0, import_helpers.fromTimestamp)(import_timestamp.Timestamp.fromAmino(object.voting_period_end));
    }
    if (object.executor_result !== void 0 && object.executor_result !== null) {
      message.executorResult = object.executor_result;
    }
    message.messages = object.messages?.map((e) => import_any.Any.fromAmino(e)) || [];
    if (object.title !== void 0 && object.title !== null) {
      message.title = object.title;
    }
    if (object.summary !== void 0 && object.summary !== null) {
      message.summary = object.summary;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : void 0;
    obj.group_policy_address = message.groupPolicyAddress === "" ? void 0 : message.groupPolicyAddress;
    obj.metadata = message.metadata === "" ? void 0 : message.metadata;
    if (message.proposers) {
      obj.proposers = message.proposers.map((e) => e);
    } else {
      obj.proposers = message.proposers;
    }
    obj.submit_time = message.submitTime ? import_timestamp.Timestamp.toAmino((0, import_helpers.toTimestamp)(message.submitTime)) : /* @__PURE__ */ new Date();
    obj.group_version = message.groupVersion !== BigInt(0) ? message.groupVersion?.toString() : void 0;
    obj.group_policy_version = message.groupPolicyVersion !== BigInt(0) ? message.groupPolicyVersion?.toString() : void 0;
    obj.status = message.status === 0 ? void 0 : message.status;
    obj.final_tally_result = message.finalTallyResult ? TallyResult.toAmino(message.finalTallyResult) : TallyResult.toAmino(TallyResult.fromPartial({}));
    obj.voting_period_end = message.votingPeriodEnd ? import_timestamp.Timestamp.toAmino((0, import_helpers.toTimestamp)(message.votingPeriodEnd)) : /* @__PURE__ */ new Date();
    obj.executor_result = message.executorResult === 0 ? void 0 : message.executorResult;
    if (message.messages) {
      obj.messages = message.messages.map((e) => e ? import_any.Any.toAmino(e) : void 0);
    } else {
      obj.messages = message.messages;
    }
    obj.title = message.title === "" ? void 0 : message.title;
    obj.summary = message.summary === "" ? void 0 : message.summary;
    return obj;
  },
  fromAminoMsg(object) {
    return Proposal.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/Proposal",
      value: Proposal.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return Proposal.decode(message.value);
  },
  toProto(message) {
    return Proposal.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.group.v1.Proposal",
      value: Proposal.encode(message).finish()
    };
  }
};
function createBaseTallyResult() {
  return {
    yesCount: "",
    abstainCount: "",
    noCount: "",
    noWithVetoCount: ""
  };
}
const TallyResult = {
  typeUrl: "/cosmos.group.v1.TallyResult",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.yesCount !== "") {
      writer.uint32(10).string(message.yesCount);
    }
    if (message.abstainCount !== "") {
      writer.uint32(18).string(message.abstainCount);
    }
    if (message.noCount !== "") {
      writer.uint32(26).string(message.noCount);
    }
    if (message.noWithVetoCount !== "") {
      writer.uint32(34).string(message.noWithVetoCount);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseTallyResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.yesCount = reader.string();
          break;
        case 2:
          message.abstainCount = reader.string();
          break;
        case 3:
          message.noCount = reader.string();
          break;
        case 4:
          message.noWithVetoCount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseTallyResult();
    message.yesCount = object.yesCount ?? "";
    message.abstainCount = object.abstainCount ?? "";
    message.noCount = object.noCount ?? "";
    message.noWithVetoCount = object.noWithVetoCount ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseTallyResult();
    if (object.yes_count !== void 0 && object.yes_count !== null) {
      message.yesCount = object.yes_count;
    }
    if (object.abstain_count !== void 0 && object.abstain_count !== null) {
      message.abstainCount = object.abstain_count;
    }
    if (object.no_count !== void 0 && object.no_count !== null) {
      message.noCount = object.no_count;
    }
    if (object.no_with_veto_count !== void 0 && object.no_with_veto_count !== null) {
      message.noWithVetoCount = object.no_with_veto_count;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.yes_count = message.yesCount === "" ? void 0 : message.yesCount;
    obj.abstain_count = message.abstainCount === "" ? void 0 : message.abstainCount;
    obj.no_count = message.noCount === "" ? void 0 : message.noCount;
    obj.no_with_veto_count = message.noWithVetoCount === "" ? void 0 : message.noWithVetoCount;
    return obj;
  },
  fromAminoMsg(object) {
    return TallyResult.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/TallyResult",
      value: TallyResult.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return TallyResult.decode(message.value);
  },
  toProto(message) {
    return TallyResult.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.group.v1.TallyResult",
      value: TallyResult.encode(message).finish()
    };
  }
};
function createBaseVote() {
  return {
    proposalId: BigInt(0),
    voter: "",
    option: 0,
    metadata: "",
    submitTime: /* @__PURE__ */ new Date()
  };
}
const Vote = {
  typeUrl: "/cosmos.group.v1.Vote",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.voter !== "") {
      writer.uint32(18).string(message.voter);
    }
    if (message.option !== 0) {
      writer.uint32(24).int32(message.option);
    }
    if (message.metadata !== "") {
      writer.uint32(34).string(message.metadata);
    }
    if (message.submitTime !== void 0) {
      import_timestamp.Timestamp.encode((0, import_helpers.toTimestamp)(message.submitTime), writer.uint32(42).fork()).ldelim();
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
          message.proposalId = reader.uint64();
          break;
        case 2:
          message.voter = reader.string();
          break;
        case 3:
          message.option = reader.int32();
          break;
        case 4:
          message.metadata = reader.string();
          break;
        case 5:
          message.submitTime = (0, import_helpers.fromTimestamp)(import_timestamp.Timestamp.decode(reader, reader.uint32()));
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
    message.proposalId = object.proposalId !== void 0 && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
    message.voter = object.voter ?? "";
    message.option = object.option ?? 0;
    message.metadata = object.metadata ?? "";
    message.submitTime = object.submitTime ?? void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseVote();
    if (object.proposal_id !== void 0 && object.proposal_id !== null) {
      message.proposalId = BigInt(object.proposal_id);
    }
    if (object.voter !== void 0 && object.voter !== null) {
      message.voter = object.voter;
    }
    if (object.option !== void 0 && object.option !== null) {
      message.option = object.option;
    }
    if (object.metadata !== void 0 && object.metadata !== null) {
      message.metadata = object.metadata;
    }
    if (object.submit_time !== void 0 && object.submit_time !== null) {
      message.submitTime = (0, import_helpers.fromTimestamp)(import_timestamp.Timestamp.fromAmino(object.submit_time));
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.proposal_id = message.proposalId !== BigInt(0) ? message.proposalId?.toString() : void 0;
    obj.voter = message.voter === "" ? void 0 : message.voter;
    obj.option = message.option === 0 ? void 0 : message.option;
    obj.metadata = message.metadata === "" ? void 0 : message.metadata;
    obj.submit_time = message.submitTime ? import_timestamp.Timestamp.toAmino((0, import_helpers.toTimestamp)(message.submitTime)) : /* @__PURE__ */ new Date();
    return obj;
  },
  fromAminoMsg(object) {
    return Vote.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/Vote",
      value: Vote.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return Vote.decode(message.value);
  },
  toProto(message) {
    return Vote.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.group.v1.Vote",
      value: Vote.encode(message).finish()
    };
  }
};
const Cosmos_groupv1DecisionPolicy_InterfaceDecoder = (input) => {
  const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
  const data = import_any.Any.decode(reader, reader.uint32());
  switch (data.typeUrl) {
    case "/cosmos.group.v1.ThresholdDecisionPolicy":
      return ThresholdDecisionPolicy.decode(data.value);
    case "/cosmos.group.v1.PercentageDecisionPolicy":
      return PercentageDecisionPolicy.decode(data.value);
    default:
      return data;
  }
};
const Cosmos_groupv1DecisionPolicy_FromAmino = (content) => {
  switch (content.type) {
    case "cosmos-sdk/ThresholdDecisionPolicy":
      return import_any.Any.fromPartial({
        typeUrl: "/cosmos.group.v1.ThresholdDecisionPolicy",
        value: ThresholdDecisionPolicy.encode(ThresholdDecisionPolicy.fromPartial(ThresholdDecisionPolicy.fromAmino(content.value))).finish()
      });
    case "cosmos-sdk/PercentageDecisionPolicy":
      return import_any.Any.fromPartial({
        typeUrl: "/cosmos.group.v1.PercentageDecisionPolicy",
        value: PercentageDecisionPolicy.encode(PercentageDecisionPolicy.fromPartial(PercentageDecisionPolicy.fromAmino(content.value))).finish()
      });
    default:
      return import_any.Any.fromAmino(content);
  }
};
const Cosmos_groupv1DecisionPolicy_ToAmino = (content) => {
  switch (content.typeUrl) {
    case "/cosmos.group.v1.ThresholdDecisionPolicy":
      return {
        type: "cosmos-sdk/ThresholdDecisionPolicy",
        value: ThresholdDecisionPolicy.toAmino(ThresholdDecisionPolicy.decode(content.value, void 0))
      };
    case "/cosmos.group.v1.PercentageDecisionPolicy":
      return {
        type: "cosmos-sdk/PercentageDecisionPolicy",
        value: PercentageDecisionPolicy.toAmino(PercentageDecisionPolicy.decode(content.value, void 0))
      };
    default:
      return import_any.Any.toAmino(content);
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Cosmos_groupv1DecisionPolicy_FromAmino,
  Cosmos_groupv1DecisionPolicy_InterfaceDecoder,
  Cosmos_groupv1DecisionPolicy_ToAmino,
  DecisionPolicyWindows,
  GroupInfo,
  GroupMember,
  GroupPolicyInfo,
  Member,
  MemberRequest,
  PercentageDecisionPolicy,
  Proposal,
  ProposalExecutorResult,
  ProposalExecutorResultAmino,
  ProposalExecutorResultSDKType,
  ProposalStatus,
  ProposalStatusAmino,
  ProposalStatusSDKType,
  TallyResult,
  ThresholdDecisionPolicy,
  Vote,
  VoteOption,
  VoteOptionAmino,
  VoteOptionSDKType,
  proposalExecutorResultFromJSON,
  proposalExecutorResultToJSON,
  proposalStatusFromJSON,
  proposalStatusToJSON,
  voteOptionFromJSON,
  voteOptionToJSON
});
