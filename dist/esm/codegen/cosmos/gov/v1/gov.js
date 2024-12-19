import { Coin } from "../../base/v1beta1/coin";
import { Any } from "../../../google/protobuf/any";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { Duration } from "../../../google/protobuf/duration";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { toTimestamp, fromTimestamp } from "../../../helpers";
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
  ProposalStatus2[ProposalStatus2["PROPOSAL_STATUS_DEPOSIT_PERIOD"] = 1] = "PROPOSAL_STATUS_DEPOSIT_PERIOD";
  ProposalStatus2[ProposalStatus2["PROPOSAL_STATUS_VOTING_PERIOD"] = 2] = "PROPOSAL_STATUS_VOTING_PERIOD";
  ProposalStatus2[ProposalStatus2["PROPOSAL_STATUS_PASSED"] = 3] = "PROPOSAL_STATUS_PASSED";
  ProposalStatus2[ProposalStatus2["PROPOSAL_STATUS_REJECTED"] = 4] = "PROPOSAL_STATUS_REJECTED";
  ProposalStatus2[ProposalStatus2["PROPOSAL_STATUS_FAILED"] = 5] = "PROPOSAL_STATUS_FAILED";
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
    case "PROPOSAL_STATUS_DEPOSIT_PERIOD":
      return 1 /* PROPOSAL_STATUS_DEPOSIT_PERIOD */;
    case 2:
    case "PROPOSAL_STATUS_VOTING_PERIOD":
      return 2 /* PROPOSAL_STATUS_VOTING_PERIOD */;
    case 3:
    case "PROPOSAL_STATUS_PASSED":
      return 3 /* PROPOSAL_STATUS_PASSED */;
    case 4:
    case "PROPOSAL_STATUS_REJECTED":
      return 4 /* PROPOSAL_STATUS_REJECTED */;
    case 5:
    case "PROPOSAL_STATUS_FAILED":
      return 5 /* PROPOSAL_STATUS_FAILED */;
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
    case 1 /* PROPOSAL_STATUS_DEPOSIT_PERIOD */:
      return "PROPOSAL_STATUS_DEPOSIT_PERIOD";
    case 2 /* PROPOSAL_STATUS_VOTING_PERIOD */:
      return "PROPOSAL_STATUS_VOTING_PERIOD";
    case 3 /* PROPOSAL_STATUS_PASSED */:
      return "PROPOSAL_STATUS_PASSED";
    case 4 /* PROPOSAL_STATUS_REJECTED */:
      return "PROPOSAL_STATUS_REJECTED";
    case 5 /* PROPOSAL_STATUS_FAILED */:
      return "PROPOSAL_STATUS_FAILED";
    case -1 /* UNRECOGNIZED */:
    default:
      return "UNRECOGNIZED";
  }
}
function createBaseWeightedVoteOption() {
  return {
    option: 0,
    weight: ""
  };
}
const WeightedVoteOption = {
  typeUrl: "/cosmos.gov.v1.WeightedVoteOption",
  encode(message, writer = BinaryWriter.create()) {
    if (message.option !== 0) {
      writer.uint32(8).int32(message.option);
    }
    if (message.weight !== "") {
      writer.uint32(18).string(message.weight);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseWeightedVoteOption();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.option = reader.int32();
          break;
        case 2:
          message.weight = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseWeightedVoteOption();
    message.option = object.option ?? 0;
    message.weight = object.weight ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseWeightedVoteOption();
    if (object.option !== void 0 && object.option !== null) {
      message.option = object.option;
    }
    if (object.weight !== void 0 && object.weight !== null) {
      message.weight = object.weight;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.option = message.option === 0 ? void 0 : message.option;
    obj.weight = message.weight === "" ? void 0 : message.weight;
    return obj;
  },
  fromAminoMsg(object) {
    return WeightedVoteOption.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/v1/WeightedVoteOption",
      value: WeightedVoteOption.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return WeightedVoteOption.decode(message.value);
  },
  toProto(message) {
    return WeightedVoteOption.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.gov.v1.WeightedVoteOption",
      value: WeightedVoteOption.encode(message).finish()
    };
  }
};
function createBaseDeposit() {
  return {
    proposalId: BigInt(0),
    depositor: "",
    amount: []
  };
}
const Deposit = {
  typeUrl: "/cosmos.gov.v1.Deposit",
  encode(message, writer = BinaryWriter.create()) {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.depositor !== "") {
      writer.uint32(18).string(message.depositor);
    }
    for (const v of message.amount) {
      Coin.encode(v, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseDeposit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64();
          break;
        case 2:
          message.depositor = reader.string();
          break;
        case 3:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseDeposit();
    message.proposalId = object.proposalId !== void 0 && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
    message.depositor = object.depositor ?? "";
    message.amount = object.amount?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseDeposit();
    if (object.proposal_id !== void 0 && object.proposal_id !== null) {
      message.proposalId = BigInt(object.proposal_id);
    }
    if (object.depositor !== void 0 && object.depositor !== null) {
      message.depositor = object.depositor;
    }
    message.amount = object.amount?.map((e) => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.proposal_id = message.proposalId !== BigInt(0) ? message.proposalId.toString() : void 0;
    obj.depositor = message.depositor === "" ? void 0 : message.depositor;
    if (message.amount) {
      obj.amount = message.amount.map((e) => e ? Coin.toAmino(e) : void 0);
    } else {
      obj.amount = message.amount;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return Deposit.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/v1/Deposit",
      value: Deposit.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return Deposit.decode(message.value);
  },
  toProto(message) {
    return Deposit.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.gov.v1.Deposit",
      value: Deposit.encode(message).finish()
    };
  }
};
function createBaseProposal() {
  return {
    id: BigInt(0),
    messages: [],
    status: 0,
    finalTallyResult: void 0,
    submitTime: void 0,
    depositEndTime: void 0,
    totalDeposit: [],
    votingStartTime: void 0,
    votingEndTime: void 0,
    metadata: "",
    title: "",
    summary: "",
    proposer: ""
  };
}
const Proposal = {
  typeUrl: "/cosmos.gov.v1.Proposal",
  encode(message, writer = BinaryWriter.create()) {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    for (const v of message.messages) {
      Any.encode(v, writer.uint32(18).fork()).ldelim();
    }
    if (message.status !== 0) {
      writer.uint32(24).int32(message.status);
    }
    if (message.finalTallyResult !== void 0) {
      TallyResult.encode(message.finalTallyResult, writer.uint32(34).fork()).ldelim();
    }
    if (message.submitTime !== void 0) {
      Timestamp.encode(toTimestamp(message.submitTime), writer.uint32(42).fork()).ldelim();
    }
    if (message.depositEndTime !== void 0) {
      Timestamp.encode(toTimestamp(message.depositEndTime), writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.totalDeposit) {
      Coin.encode(v, writer.uint32(58).fork()).ldelim();
    }
    if (message.votingStartTime !== void 0) {
      Timestamp.encode(toTimestamp(message.votingStartTime), writer.uint32(66).fork()).ldelim();
    }
    if (message.votingEndTime !== void 0) {
      Timestamp.encode(toTimestamp(message.votingEndTime), writer.uint32(74).fork()).ldelim();
    }
    if (message.metadata !== "") {
      writer.uint32(82).string(message.metadata);
    }
    if (message.title !== "") {
      writer.uint32(90).string(message.title);
    }
    if (message.summary !== "") {
      writer.uint32(98).string(message.summary);
    }
    if (message.proposer !== "") {
      writer.uint32(106).string(message.proposer);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        case 2:
          message.messages.push(Any.decode(reader, reader.uint32()));
          break;
        case 3:
          message.status = reader.int32();
          break;
        case 4:
          message.finalTallyResult = TallyResult.decode(reader, reader.uint32());
          break;
        case 5:
          message.submitTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 6:
          message.depositEndTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 7:
          message.totalDeposit.push(Coin.decode(reader, reader.uint32()));
          break;
        case 8:
          message.votingStartTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 9:
          message.votingEndTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 10:
          message.metadata = reader.string();
          break;
        case 11:
          message.title = reader.string();
          break;
        case 12:
          message.summary = reader.string();
          break;
        case 13:
          message.proposer = reader.string();
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
    message.messages = object.messages?.map((e) => Any.fromPartial(e)) || [];
    message.status = object.status ?? 0;
    message.finalTallyResult = object.finalTallyResult !== void 0 && object.finalTallyResult !== null ? TallyResult.fromPartial(object.finalTallyResult) : void 0;
    message.submitTime = object.submitTime ?? void 0;
    message.depositEndTime = object.depositEndTime ?? void 0;
    message.totalDeposit = object.totalDeposit?.map((e) => Coin.fromPartial(e)) || [];
    message.votingStartTime = object.votingStartTime ?? void 0;
    message.votingEndTime = object.votingEndTime ?? void 0;
    message.metadata = object.metadata ?? "";
    message.title = object.title ?? "";
    message.summary = object.summary ?? "";
    message.proposer = object.proposer ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseProposal();
    if (object.id !== void 0 && object.id !== null) {
      message.id = BigInt(object.id);
    }
    message.messages = object.messages?.map((e) => Any.fromAmino(e)) || [];
    if (object.status !== void 0 && object.status !== null) {
      message.status = object.status;
    }
    if (object.final_tally_result !== void 0 && object.final_tally_result !== null) {
      message.finalTallyResult = TallyResult.fromAmino(object.final_tally_result);
    }
    if (object.submit_time !== void 0 && object.submit_time !== null) {
      message.submitTime = fromTimestamp(Timestamp.fromAmino(object.submit_time));
    }
    if (object.deposit_end_time !== void 0 && object.deposit_end_time !== null) {
      message.depositEndTime = fromTimestamp(Timestamp.fromAmino(object.deposit_end_time));
    }
    message.totalDeposit = object.total_deposit?.map((e) => Coin.fromAmino(e)) || [];
    if (object.voting_start_time !== void 0 && object.voting_start_time !== null) {
      message.votingStartTime = fromTimestamp(Timestamp.fromAmino(object.voting_start_time));
    }
    if (object.voting_end_time !== void 0 && object.voting_end_time !== null) {
      message.votingEndTime = fromTimestamp(Timestamp.fromAmino(object.voting_end_time));
    }
    if (object.metadata !== void 0 && object.metadata !== null) {
      message.metadata = object.metadata;
    }
    if (object.title !== void 0 && object.title !== null) {
      message.title = object.title;
    }
    if (object.summary !== void 0 && object.summary !== null) {
      message.summary = object.summary;
    }
    if (object.proposer !== void 0 && object.proposer !== null) {
      message.proposer = object.proposer;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.id = message.id !== BigInt(0) ? message.id.toString() : void 0;
    if (message.messages) {
      obj.messages = message.messages.map((e) => e ? Any.toAmino(e) : void 0);
    } else {
      obj.messages = message.messages;
    }
    obj.status = message.status === 0 ? void 0 : message.status;
    obj.final_tally_result = message.finalTallyResult ? TallyResult.toAmino(message.finalTallyResult) : void 0;
    obj.submit_time = message.submitTime ? Timestamp.toAmino(toTimestamp(message.submitTime)) : void 0;
    obj.deposit_end_time = message.depositEndTime ? Timestamp.toAmino(toTimestamp(message.depositEndTime)) : void 0;
    if (message.totalDeposit) {
      obj.total_deposit = message.totalDeposit.map((e) => e ? Coin.toAmino(e) : void 0);
    } else {
      obj.total_deposit = message.totalDeposit;
    }
    obj.voting_start_time = message.votingStartTime ? Timestamp.toAmino(toTimestamp(message.votingStartTime)) : void 0;
    obj.voting_end_time = message.votingEndTime ? Timestamp.toAmino(toTimestamp(message.votingEndTime)) : void 0;
    obj.metadata = message.metadata === "" ? void 0 : message.metadata;
    obj.title = message.title === "" ? void 0 : message.title;
    obj.summary = message.summary === "" ? void 0 : message.summary;
    obj.proposer = message.proposer === "" ? void 0 : message.proposer;
    return obj;
  },
  fromAminoMsg(object) {
    return Proposal.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/v1/Proposal",
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
      typeUrl: "/cosmos.gov.v1.Proposal",
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
  typeUrl: "/cosmos.gov.v1.TallyResult",
  encode(message, writer = BinaryWriter.create()) {
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
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
      type: "cosmos-sdk/v1/TallyResult",
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
      typeUrl: "/cosmos.gov.v1.TallyResult",
      value: TallyResult.encode(message).finish()
    };
  }
};
function createBaseVote() {
  return {
    proposalId: BigInt(0),
    voter: "",
    options: [],
    metadata: ""
  };
}
const Vote = {
  typeUrl: "/cosmos.gov.v1.Vote",
  encode(message, writer = BinaryWriter.create()) {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.voter !== "") {
      writer.uint32(18).string(message.voter);
    }
    for (const v of message.options) {
      WeightedVoteOption.encode(v, writer.uint32(34).fork()).ldelim();
    }
    if (message.metadata !== "") {
      writer.uint32(42).string(message.metadata);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        case 4:
          message.options.push(WeightedVoteOption.decode(reader, reader.uint32()));
          break;
        case 5:
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
    const message = createBaseVote();
    message.proposalId = object.proposalId !== void 0 && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
    message.voter = object.voter ?? "";
    message.options = object.options?.map((e) => WeightedVoteOption.fromPartial(e)) || [];
    message.metadata = object.metadata ?? "";
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
    message.options = object.options?.map((e) => WeightedVoteOption.fromAmino(e)) || [];
    if (object.metadata !== void 0 && object.metadata !== null) {
      message.metadata = object.metadata;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.proposal_id = message.proposalId !== BigInt(0) ? message.proposalId.toString() : void 0;
    obj.voter = message.voter === "" ? void 0 : message.voter;
    if (message.options) {
      obj.options = message.options.map((e) => e ? WeightedVoteOption.toAmino(e) : void 0);
    } else {
      obj.options = message.options;
    }
    obj.metadata = message.metadata === "" ? void 0 : message.metadata;
    return obj;
  },
  fromAminoMsg(object) {
    return Vote.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/v1/Vote",
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
      typeUrl: "/cosmos.gov.v1.Vote",
      value: Vote.encode(message).finish()
    };
  }
};
function createBaseDepositParams() {
  return {
    minDeposit: [],
    maxDepositPeriod: void 0
  };
}
const DepositParams = {
  typeUrl: "/cosmos.gov.v1.DepositParams",
  encode(message, writer = BinaryWriter.create()) {
    for (const v of message.minDeposit) {
      Coin.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.maxDepositPeriod !== void 0) {
      Duration.encode(message.maxDepositPeriod, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseDepositParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.minDeposit.push(Coin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.maxDepositPeriod = Duration.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseDepositParams();
    message.minDeposit = object.minDeposit?.map((e) => Coin.fromPartial(e)) || [];
    message.maxDepositPeriod = object.maxDepositPeriod !== void 0 && object.maxDepositPeriod !== null ? Duration.fromPartial(object.maxDepositPeriod) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseDepositParams();
    message.minDeposit = object.min_deposit?.map((e) => Coin.fromAmino(e)) || [];
    if (object.max_deposit_period !== void 0 && object.max_deposit_period !== null) {
      message.maxDepositPeriod = Duration.fromAmino(object.max_deposit_period);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.minDeposit) {
      obj.min_deposit = message.minDeposit.map((e) => e ? Coin.toAmino(e) : void 0);
    } else {
      obj.min_deposit = message.minDeposit;
    }
    obj.max_deposit_period = message.maxDepositPeriod ? Duration.toAmino(message.maxDepositPeriod) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return DepositParams.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/v1/DepositParams",
      value: DepositParams.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return DepositParams.decode(message.value);
  },
  toProto(message) {
    return DepositParams.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.gov.v1.DepositParams",
      value: DepositParams.encode(message).finish()
    };
  }
};
function createBaseVotingParams() {
  return {
    votingPeriod: void 0
  };
}
const VotingParams = {
  typeUrl: "/cosmos.gov.v1.VotingParams",
  encode(message, writer = BinaryWriter.create()) {
    if (message.votingPeriod !== void 0) {
      Duration.encode(message.votingPeriod, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseVotingParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.votingPeriod = Duration.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseVotingParams();
    message.votingPeriod = object.votingPeriod !== void 0 && object.votingPeriod !== null ? Duration.fromPartial(object.votingPeriod) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseVotingParams();
    if (object.voting_period !== void 0 && object.voting_period !== null) {
      message.votingPeriod = Duration.fromAmino(object.voting_period);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.voting_period = message.votingPeriod ? Duration.toAmino(message.votingPeriod) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return VotingParams.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/v1/VotingParams",
      value: VotingParams.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return VotingParams.decode(message.value);
  },
  toProto(message) {
    return VotingParams.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.gov.v1.VotingParams",
      value: VotingParams.encode(message).finish()
    };
  }
};
function createBaseTallyParams() {
  return {
    quorum: "",
    threshold: "",
    vetoThreshold: ""
  };
}
const TallyParams = {
  typeUrl: "/cosmos.gov.v1.TallyParams",
  encode(message, writer = BinaryWriter.create()) {
    if (message.quorum !== "") {
      writer.uint32(10).string(message.quorum);
    }
    if (message.threshold !== "") {
      writer.uint32(18).string(message.threshold);
    }
    if (message.vetoThreshold !== "") {
      writer.uint32(26).string(message.vetoThreshold);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseTallyParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.quorum = reader.string();
          break;
        case 2:
          message.threshold = reader.string();
          break;
        case 3:
          message.vetoThreshold = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseTallyParams();
    message.quorum = object.quorum ?? "";
    message.threshold = object.threshold ?? "";
    message.vetoThreshold = object.vetoThreshold ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseTallyParams();
    if (object.quorum !== void 0 && object.quorum !== null) {
      message.quorum = object.quorum;
    }
    if (object.threshold !== void 0 && object.threshold !== null) {
      message.threshold = object.threshold;
    }
    if (object.veto_threshold !== void 0 && object.veto_threshold !== null) {
      message.vetoThreshold = object.veto_threshold;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.quorum = message.quorum === "" ? void 0 : message.quorum;
    obj.threshold = message.threshold === "" ? void 0 : message.threshold;
    obj.veto_threshold = message.vetoThreshold === "" ? void 0 : message.vetoThreshold;
    return obj;
  },
  fromAminoMsg(object) {
    return TallyParams.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/v1/TallyParams",
      value: TallyParams.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return TallyParams.decode(message.value);
  },
  toProto(message) {
    return TallyParams.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.gov.v1.TallyParams",
      value: TallyParams.encode(message).finish()
    };
  }
};
function createBaseParams() {
  return {
    minDeposit: [],
    maxDepositPeriod: void 0,
    votingPeriod: void 0,
    quorum: "",
    threshold: "",
    vetoThreshold: "",
    minInitialDepositRatio: "",
    burnVoteQuorum: false,
    burnProposalDepositPrevote: false,
    burnVoteVeto: false
  };
}
const Params = {
  typeUrl: "/cosmos.gov.v1.Params",
  encode(message, writer = BinaryWriter.create()) {
    for (const v of message.minDeposit) {
      Coin.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.maxDepositPeriod !== void 0) {
      Duration.encode(message.maxDepositPeriod, writer.uint32(18).fork()).ldelim();
    }
    if (message.votingPeriod !== void 0) {
      Duration.encode(message.votingPeriod, writer.uint32(26).fork()).ldelim();
    }
    if (message.quorum !== "") {
      writer.uint32(34).string(message.quorum);
    }
    if (message.threshold !== "") {
      writer.uint32(42).string(message.threshold);
    }
    if (message.vetoThreshold !== "") {
      writer.uint32(50).string(message.vetoThreshold);
    }
    if (message.minInitialDepositRatio !== "") {
      writer.uint32(58).string(message.minInitialDepositRatio);
    }
    if (message.burnVoteQuorum === true) {
      writer.uint32(104).bool(message.burnVoteQuorum);
    }
    if (message.burnProposalDepositPrevote === true) {
      writer.uint32(112).bool(message.burnProposalDepositPrevote);
    }
    if (message.burnVoteVeto === true) {
      writer.uint32(120).bool(message.burnVoteVeto);
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
          message.minDeposit.push(Coin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.maxDepositPeriod = Duration.decode(reader, reader.uint32());
          break;
        case 3:
          message.votingPeriod = Duration.decode(reader, reader.uint32());
          break;
        case 4:
          message.quorum = reader.string();
          break;
        case 5:
          message.threshold = reader.string();
          break;
        case 6:
          message.vetoThreshold = reader.string();
          break;
        case 7:
          message.minInitialDepositRatio = reader.string();
          break;
        case 13:
          message.burnVoteQuorum = reader.bool();
          break;
        case 14:
          message.burnProposalDepositPrevote = reader.bool();
          break;
        case 15:
          message.burnVoteVeto = reader.bool();
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
    message.minDeposit = object.minDeposit?.map((e) => Coin.fromPartial(e)) || [];
    message.maxDepositPeriod = object.maxDepositPeriod !== void 0 && object.maxDepositPeriod !== null ? Duration.fromPartial(object.maxDepositPeriod) : void 0;
    message.votingPeriod = object.votingPeriod !== void 0 && object.votingPeriod !== null ? Duration.fromPartial(object.votingPeriod) : void 0;
    message.quorum = object.quorum ?? "";
    message.threshold = object.threshold ?? "";
    message.vetoThreshold = object.vetoThreshold ?? "";
    message.minInitialDepositRatio = object.minInitialDepositRatio ?? "";
    message.burnVoteQuorum = object.burnVoteQuorum ?? false;
    message.burnProposalDepositPrevote = object.burnProposalDepositPrevote ?? false;
    message.burnVoteVeto = object.burnVoteVeto ?? false;
    return message;
  },
  fromAmino(object) {
    const message = createBaseParams();
    message.minDeposit = object.min_deposit?.map((e) => Coin.fromAmino(e)) || [];
    if (object.max_deposit_period !== void 0 && object.max_deposit_period !== null) {
      message.maxDepositPeriod = Duration.fromAmino(object.max_deposit_period);
    }
    if (object.voting_period !== void 0 && object.voting_period !== null) {
      message.votingPeriod = Duration.fromAmino(object.voting_period);
    }
    if (object.quorum !== void 0 && object.quorum !== null) {
      message.quorum = object.quorum;
    }
    if (object.threshold !== void 0 && object.threshold !== null) {
      message.threshold = object.threshold;
    }
    if (object.veto_threshold !== void 0 && object.veto_threshold !== null) {
      message.vetoThreshold = object.veto_threshold;
    }
    if (object.min_initial_deposit_ratio !== void 0 && object.min_initial_deposit_ratio !== null) {
      message.minInitialDepositRatio = object.min_initial_deposit_ratio;
    }
    if (object.burn_vote_quorum !== void 0 && object.burn_vote_quorum !== null) {
      message.burnVoteQuorum = object.burn_vote_quorum;
    }
    if (object.burn_proposal_deposit_prevote !== void 0 && object.burn_proposal_deposit_prevote !== null) {
      message.burnProposalDepositPrevote = object.burn_proposal_deposit_prevote;
    }
    if (object.burn_vote_veto !== void 0 && object.burn_vote_veto !== null) {
      message.burnVoteVeto = object.burn_vote_veto;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.minDeposit) {
      obj.min_deposit = message.minDeposit.map((e) => e ? Coin.toAmino(e) : void 0);
    } else {
      obj.min_deposit = message.minDeposit;
    }
    obj.max_deposit_period = message.maxDepositPeriod ? Duration.toAmino(message.maxDepositPeriod) : void 0;
    obj.voting_period = message.votingPeriod ? Duration.toAmino(message.votingPeriod) : void 0;
    obj.quorum = message.quorum === "" ? void 0 : message.quorum;
    obj.threshold = message.threshold === "" ? void 0 : message.threshold;
    obj.veto_threshold = message.vetoThreshold === "" ? void 0 : message.vetoThreshold;
    obj.min_initial_deposit_ratio = message.minInitialDepositRatio === "" ? void 0 : message.minInitialDepositRatio;
    obj.burn_vote_quorum = message.burnVoteQuorum === false ? void 0 : message.burnVoteQuorum;
    obj.burn_proposal_deposit_prevote = message.burnProposalDepositPrevote === false ? void 0 : message.burnProposalDepositPrevote;
    obj.burn_vote_veto = message.burnVoteVeto === false ? void 0 : message.burnVoteVeto;
    return obj;
  },
  fromAminoMsg(object) {
    return Params.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/v1/Params",
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
      typeUrl: "/cosmos.gov.v1.Params",
      value: Params.encode(message).finish()
    };
  }
};
export {
  Deposit,
  DepositParams,
  Params,
  Proposal,
  ProposalStatus,
  ProposalStatusAmino,
  ProposalStatusSDKType,
  TallyParams,
  TallyResult,
  Vote,
  VoteOption,
  VoteOptionAmino,
  VoteOptionSDKType,
  VotingParams,
  WeightedVoteOption,
  proposalStatusFromJSON,
  proposalStatusToJSON,
  voteOptionFromJSON,
  voteOptionToJSON
};
