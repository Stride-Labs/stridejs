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
var gov_exports = {};
__export(gov_exports, {
  Cosmos_govv1beta1Content_FromAmino: () => Cosmos_govv1beta1Content_FromAmino,
  Cosmos_govv1beta1Content_InterfaceDecoder: () => Cosmos_govv1beta1Content_InterfaceDecoder,
  Cosmos_govv1beta1Content_ToAmino: () => Cosmos_govv1beta1Content_ToAmino,
  Deposit: () => Deposit,
  DepositParams: () => DepositParams,
  Proposal: () => Proposal,
  ProposalStatus: () => ProposalStatus,
  ProposalStatusAmino: () => ProposalStatusAmino,
  ProposalStatusSDKType: () => ProposalStatusSDKType,
  TallyParams: () => TallyParams,
  TallyResult: () => TallyResult,
  TextProposal: () => TextProposal,
  Vote: () => Vote,
  VoteOption: () => VoteOption,
  VoteOptionAmino: () => VoteOptionAmino,
  VoteOptionSDKType: () => VoteOptionSDKType,
  VotingParams: () => VotingParams,
  WeightedVoteOption: () => WeightedVoteOption,
  proposalStatusFromJSON: () => proposalStatusFromJSON,
  proposalStatusToJSON: () => proposalStatusToJSON,
  voteOptionFromJSON: () => voteOptionFromJSON,
  voteOptionToJSON: () => voteOptionToJSON
});
module.exports = __toCommonJS(gov_exports);
var import_coin = require("../../base/v1beta1/coin");
var import_any = require("../../../google/protobuf/any");
var import_timestamp = require("../../../google/protobuf/timestamp");
var import_duration = require("../../../google/protobuf/duration");
var import_distribution = require("../../distribution/v1beta1/distribution");
var import_params = require("../../params/v1beta1/params");
var import_upgrade = require("../../upgrade/v1beta1/upgrade");
var import_proposal_legacy = require("../../../cosmwasm/wasm/v1/proposal_legacy");
var import_client = require("../../../ibc/core/client/v1/client");
var import_binary = require("../../../binary");
var import_math = require("@cosmjs/math");
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
  typeUrl: "/cosmos.gov.v1beta1.WeightedVoteOption",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.option !== 0) {
      writer.uint32(8).int32(message.option);
    }
    if (message.weight !== "") {
      writer.uint32(18).string(import_math.Decimal.fromUserInput(message.weight, 18).atomics);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseWeightedVoteOption();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.option = reader.int32();
          break;
        case 2:
          message.weight = import_math.Decimal.fromAtomics(reader.string(), 18).toString();
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
    obj.weight = message.weight ?? "";
    return obj;
  },
  fromAminoMsg(object) {
    return WeightedVoteOption.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/WeightedVoteOption",
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
      typeUrl: "/cosmos.gov.v1beta1.WeightedVoteOption",
      value: WeightedVoteOption.encode(message).finish()
    };
  }
};
function createBaseTextProposal() {
  return {
    $typeUrl: "/cosmos.gov.v1beta1.TextProposal",
    title: "",
    description: ""
  };
}
const TextProposal = {
  typeUrl: "/cosmos.gov.v1beta1.TextProposal",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseTextProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseTextProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseTextProposal();
    if (object.title !== void 0 && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== void 0 && object.description !== null) {
      message.description = object.description;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.title = message.title === "" ? void 0 : message.title;
    obj.description = message.description === "" ? void 0 : message.description;
    return obj;
  },
  fromAminoMsg(object) {
    return TextProposal.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/TextProposal",
      value: TextProposal.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return TextProposal.decode(message.value);
  },
  toProto(message) {
    return TextProposal.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.gov.v1beta1.TextProposal",
      value: TextProposal.encode(message).finish()
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
  typeUrl: "/cosmos.gov.v1beta1.Deposit",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.depositor !== "") {
      writer.uint32(18).string(message.depositor);
    }
    for (const v of message.amount) {
      import_coin.Coin.encode(v, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
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
          message.amount.push(import_coin.Coin.decode(reader, reader.uint32()));
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
    message.amount = object.amount?.map((e) => import_coin.Coin.fromPartial(e)) || [];
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
    message.amount = object.amount?.map((e) => import_coin.Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.proposal_id = message.proposalId !== BigInt(0) ? message.proposalId?.toString() : void 0;
    obj.depositor = message.depositor === "" ? void 0 : message.depositor;
    if (message.amount) {
      obj.amount = message.amount.map((e) => e ? import_coin.Coin.toAmino(e) : void 0);
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
      type: "cosmos-sdk/Deposit",
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
      typeUrl: "/cosmos.gov.v1beta1.Deposit",
      value: Deposit.encode(message).finish()
    };
  }
};
function createBaseProposal() {
  return {
    proposalId: BigInt(0),
    content: void 0,
    status: 0,
    finalTallyResult: TallyResult.fromPartial({}),
    submitTime: /* @__PURE__ */ new Date(),
    depositEndTime: /* @__PURE__ */ new Date(),
    totalDeposit: [],
    votingStartTime: /* @__PURE__ */ new Date(),
    votingEndTime: /* @__PURE__ */ new Date()
  };
}
const Proposal = {
  typeUrl: "/cosmos.gov.v1beta1.Proposal",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.content !== void 0) {
      import_any.Any.encode(message.content, writer.uint32(18).fork()).ldelim();
    }
    if (message.status !== 0) {
      writer.uint32(24).int32(message.status);
    }
    if (message.finalTallyResult !== void 0) {
      TallyResult.encode(message.finalTallyResult, writer.uint32(34).fork()).ldelim();
    }
    if (message.submitTime !== void 0) {
      import_timestamp.Timestamp.encode((0, import_helpers.toTimestamp)(message.submitTime), writer.uint32(42).fork()).ldelim();
    }
    if (message.depositEndTime !== void 0) {
      import_timestamp.Timestamp.encode((0, import_helpers.toTimestamp)(message.depositEndTime), writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.totalDeposit) {
      import_coin.Coin.encode(v, writer.uint32(58).fork()).ldelim();
    }
    if (message.votingStartTime !== void 0) {
      import_timestamp.Timestamp.encode((0, import_helpers.toTimestamp)(message.votingStartTime), writer.uint32(66).fork()).ldelim();
    }
    if (message.votingEndTime !== void 0) {
      import_timestamp.Timestamp.encode((0, import_helpers.toTimestamp)(message.votingEndTime), writer.uint32(74).fork()).ldelim();
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
          message.proposalId = reader.uint64();
          break;
        case 2:
          message.content = Cosmos_govv1beta1Content_InterfaceDecoder(reader);
          break;
        case 3:
          message.status = reader.int32();
          break;
        case 4:
          message.finalTallyResult = TallyResult.decode(reader, reader.uint32());
          break;
        case 5:
          message.submitTime = (0, import_helpers.fromTimestamp)(import_timestamp.Timestamp.decode(reader, reader.uint32()));
          break;
        case 6:
          message.depositEndTime = (0, import_helpers.fromTimestamp)(import_timestamp.Timestamp.decode(reader, reader.uint32()));
          break;
        case 7:
          message.totalDeposit.push(import_coin.Coin.decode(reader, reader.uint32()));
          break;
        case 8:
          message.votingStartTime = (0, import_helpers.fromTimestamp)(import_timestamp.Timestamp.decode(reader, reader.uint32()));
          break;
        case 9:
          message.votingEndTime = (0, import_helpers.fromTimestamp)(import_timestamp.Timestamp.decode(reader, reader.uint32()));
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
    message.proposalId = object.proposalId !== void 0 && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
    message.content = object.content !== void 0 && object.content !== null ? import_any.Any.fromPartial(object.content) : void 0;
    message.status = object.status ?? 0;
    message.finalTallyResult = object.finalTallyResult !== void 0 && object.finalTallyResult !== null ? TallyResult.fromPartial(object.finalTallyResult) : void 0;
    message.submitTime = object.submitTime ?? void 0;
    message.depositEndTime = object.depositEndTime ?? void 0;
    message.totalDeposit = object.totalDeposit?.map((e) => import_coin.Coin.fromPartial(e)) || [];
    message.votingStartTime = object.votingStartTime ?? void 0;
    message.votingEndTime = object.votingEndTime ?? void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseProposal();
    if (object.proposal_id !== void 0 && object.proposal_id !== null) {
      message.proposalId = BigInt(object.proposal_id);
    }
    if (object.content !== void 0 && object.content !== null) {
      message.content = Cosmos_govv1beta1Content_FromAmino(object.content);
    }
    if (object.status !== void 0 && object.status !== null) {
      message.status = object.status;
    }
    if (object.final_tally_result !== void 0 && object.final_tally_result !== null) {
      message.finalTallyResult = TallyResult.fromAmino(object.final_tally_result);
    }
    if (object.submit_time !== void 0 && object.submit_time !== null) {
      message.submitTime = (0, import_helpers.fromTimestamp)(import_timestamp.Timestamp.fromAmino(object.submit_time));
    }
    if (object.deposit_end_time !== void 0 && object.deposit_end_time !== null) {
      message.depositEndTime = (0, import_helpers.fromTimestamp)(import_timestamp.Timestamp.fromAmino(object.deposit_end_time));
    }
    message.totalDeposit = object.total_deposit?.map((e) => import_coin.Coin.fromAmino(e)) || [];
    if (object.voting_start_time !== void 0 && object.voting_start_time !== null) {
      message.votingStartTime = (0, import_helpers.fromTimestamp)(import_timestamp.Timestamp.fromAmino(object.voting_start_time));
    }
    if (object.voting_end_time !== void 0 && object.voting_end_time !== null) {
      message.votingEndTime = (0, import_helpers.fromTimestamp)(import_timestamp.Timestamp.fromAmino(object.voting_end_time));
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.proposal_id = message.proposalId !== BigInt(0) ? message.proposalId?.toString() : void 0;
    obj.content = message.content ? Cosmos_govv1beta1Content_ToAmino(message.content) : void 0;
    obj.status = message.status === 0 ? void 0 : message.status;
    obj.final_tally_result = message.finalTallyResult ? TallyResult.toAmino(message.finalTallyResult) : TallyResult.toAmino(TallyResult.fromPartial({}));
    obj.submit_time = message.submitTime ? import_timestamp.Timestamp.toAmino((0, import_helpers.toTimestamp)(message.submitTime)) : /* @__PURE__ */ new Date();
    obj.deposit_end_time = message.depositEndTime ? import_timestamp.Timestamp.toAmino((0, import_helpers.toTimestamp)(message.depositEndTime)) : /* @__PURE__ */ new Date();
    if (message.totalDeposit) {
      obj.total_deposit = message.totalDeposit.map((e) => e ? import_coin.Coin.toAmino(e) : void 0);
    } else {
      obj.total_deposit = message.totalDeposit;
    }
    obj.voting_start_time = message.votingStartTime ? import_timestamp.Timestamp.toAmino((0, import_helpers.toTimestamp)(message.votingStartTime)) : /* @__PURE__ */ new Date();
    obj.voting_end_time = message.votingEndTime ? import_timestamp.Timestamp.toAmino((0, import_helpers.toTimestamp)(message.votingEndTime)) : /* @__PURE__ */ new Date();
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
      typeUrl: "/cosmos.gov.v1beta1.Proposal",
      value: Proposal.encode(message).finish()
    };
  }
};
function createBaseTallyResult() {
  return {
    yes: "",
    abstain: "",
    no: "",
    noWithVeto: ""
  };
}
const TallyResult = {
  typeUrl: "/cosmos.gov.v1beta1.TallyResult",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.yes !== "") {
      writer.uint32(10).string(message.yes);
    }
    if (message.abstain !== "") {
      writer.uint32(18).string(message.abstain);
    }
    if (message.no !== "") {
      writer.uint32(26).string(message.no);
    }
    if (message.noWithVeto !== "") {
      writer.uint32(34).string(message.noWithVeto);
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
          message.yes = reader.string();
          break;
        case 2:
          message.abstain = reader.string();
          break;
        case 3:
          message.no = reader.string();
          break;
        case 4:
          message.noWithVeto = reader.string();
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
    message.yes = object.yes ?? "";
    message.abstain = object.abstain ?? "";
    message.no = object.no ?? "";
    message.noWithVeto = object.noWithVeto ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseTallyResult();
    if (object.yes !== void 0 && object.yes !== null) {
      message.yes = object.yes;
    }
    if (object.abstain !== void 0 && object.abstain !== null) {
      message.abstain = object.abstain;
    }
    if (object.no !== void 0 && object.no !== null) {
      message.no = object.no;
    }
    if (object.no_with_veto !== void 0 && object.no_with_veto !== null) {
      message.noWithVeto = object.no_with_veto;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.yes = message.yes === "" ? void 0 : message.yes;
    obj.abstain = message.abstain === "" ? void 0 : message.abstain;
    obj.no = message.no === "" ? void 0 : message.no;
    obj.no_with_veto = message.noWithVeto === "" ? void 0 : message.noWithVeto;
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
      typeUrl: "/cosmos.gov.v1beta1.TallyResult",
      value: TallyResult.encode(message).finish()
    };
  }
};
function createBaseVote() {
  return {
    proposalId: BigInt(0),
    voter: "",
    option: 0,
    options: []
  };
}
const Vote = {
  typeUrl: "/cosmos.gov.v1beta1.Vote",
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
    for (const v of message.options) {
      WeightedVoteOption.encode(v, writer.uint32(34).fork()).ldelim();
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
          message.options.push(WeightedVoteOption.decode(reader, reader.uint32()));
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
    message.options = object.options?.map((e) => WeightedVoteOption.fromPartial(e)) || [];
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
    message.options = object.options?.map((e) => WeightedVoteOption.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.proposal_id = message.proposalId ? message.proposalId?.toString() : "0";
    obj.voter = message.voter === "" ? void 0 : message.voter;
    obj.option = message.option === 0 ? void 0 : message.option;
    if (message.options) {
      obj.options = message.options.map((e) => e ? WeightedVoteOption.toAmino(e) : void 0);
    } else {
      obj.options = message.options;
    }
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
      typeUrl: "/cosmos.gov.v1beta1.Vote",
      value: Vote.encode(message).finish()
    };
  }
};
function createBaseDepositParams() {
  return {
    minDeposit: [],
    maxDepositPeriod: import_duration.Duration.fromPartial({})
  };
}
const DepositParams = {
  typeUrl: "/cosmos.gov.v1beta1.DepositParams",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    for (const v of message.minDeposit) {
      import_coin.Coin.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.maxDepositPeriod !== void 0) {
      import_duration.Duration.encode(message.maxDepositPeriod, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseDepositParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.minDeposit.push(import_coin.Coin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.maxDepositPeriod = import_duration.Duration.decode(reader, reader.uint32());
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
    message.minDeposit = object.minDeposit?.map((e) => import_coin.Coin.fromPartial(e)) || [];
    message.maxDepositPeriod = object.maxDepositPeriod !== void 0 && object.maxDepositPeriod !== null ? import_duration.Duration.fromPartial(object.maxDepositPeriod) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseDepositParams();
    message.minDeposit = object.min_deposit?.map((e) => import_coin.Coin.fromAmino(e)) || [];
    if (object.max_deposit_period !== void 0 && object.max_deposit_period !== null) {
      message.maxDepositPeriod = import_duration.Duration.fromAmino(object.max_deposit_period);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.minDeposit) {
      obj.min_deposit = message.minDeposit.map((e) => e ? import_coin.Coin.toAmino(e) : void 0);
    } else {
      obj.min_deposit = message.minDeposit;
    }
    obj.max_deposit_period = message.maxDepositPeriod ? import_duration.Duration.toAmino(message.maxDepositPeriod) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return DepositParams.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/DepositParams",
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
      typeUrl: "/cosmos.gov.v1beta1.DepositParams",
      value: DepositParams.encode(message).finish()
    };
  }
};
function createBaseVotingParams() {
  return {
    votingPeriod: import_duration.Duration.fromPartial({})
  };
}
const VotingParams = {
  typeUrl: "/cosmos.gov.v1beta1.VotingParams",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.votingPeriod !== void 0) {
      import_duration.Duration.encode(message.votingPeriod, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseVotingParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.votingPeriod = import_duration.Duration.decode(reader, reader.uint32());
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
    message.votingPeriod = object.votingPeriod !== void 0 && object.votingPeriod !== null ? import_duration.Duration.fromPartial(object.votingPeriod) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseVotingParams();
    if (object.voting_period !== void 0 && object.voting_period !== null) {
      message.votingPeriod = import_duration.Duration.fromAmino(object.voting_period);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.voting_period = message.votingPeriod ? import_duration.Duration.toAmino(message.votingPeriod) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return VotingParams.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/VotingParams",
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
      typeUrl: "/cosmos.gov.v1beta1.VotingParams",
      value: VotingParams.encode(message).finish()
    };
  }
};
function createBaseTallyParams() {
  return {
    quorum: new Uint8Array(),
    threshold: new Uint8Array(),
    vetoThreshold: new Uint8Array()
  };
}
const TallyParams = {
  typeUrl: "/cosmos.gov.v1beta1.TallyParams",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.quorum.length !== 0) {
      writer.uint32(10).bytes(message.quorum);
    }
    if (message.threshold.length !== 0) {
      writer.uint32(18).bytes(message.threshold);
    }
    if (message.vetoThreshold.length !== 0) {
      writer.uint32(26).bytes(message.vetoThreshold);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseTallyParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.quorum = reader.bytes();
          break;
        case 2:
          message.threshold = reader.bytes();
          break;
        case 3:
          message.vetoThreshold = reader.bytes();
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
    message.quorum = object.quorum ?? new Uint8Array();
    message.threshold = object.threshold ?? new Uint8Array();
    message.vetoThreshold = object.vetoThreshold ?? new Uint8Array();
    return message;
  },
  fromAmino(object) {
    const message = createBaseTallyParams();
    if (object.quorum !== void 0 && object.quorum !== null) {
      message.quorum = (0, import_helpers.bytesFromBase64)(object.quorum);
    }
    if (object.threshold !== void 0 && object.threshold !== null) {
      message.threshold = (0, import_helpers.bytesFromBase64)(object.threshold);
    }
    if (object.veto_threshold !== void 0 && object.veto_threshold !== null) {
      message.vetoThreshold = (0, import_helpers.bytesFromBase64)(object.veto_threshold);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.quorum = message.quorum ? (0, import_helpers.base64FromBytes)(message.quorum) : void 0;
    obj.threshold = message.threshold ? (0, import_helpers.base64FromBytes)(message.threshold) : void 0;
    obj.veto_threshold = message.vetoThreshold ? (0, import_helpers.base64FromBytes)(message.vetoThreshold) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return TallyParams.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/TallyParams",
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
      typeUrl: "/cosmos.gov.v1beta1.TallyParams",
      value: TallyParams.encode(message).finish()
    };
  }
};
const Cosmos_govv1beta1Content_InterfaceDecoder = (input) => {
  const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
  const data = import_any.Any.decode(reader, reader.uint32());
  switch (data.typeUrl) {
    case "/cosmos.distribution.v1beta1.CommunityPoolSpendProposal":
      return import_distribution.CommunityPoolSpendProposal.decode(data.value);
    case "/cosmos.distribution.v1beta1.CommunityPoolSpendProposalWithDeposit":
      return import_distribution.CommunityPoolSpendProposalWithDeposit.decode(data.value);
    case "/cosmos.gov.v1beta1.TextProposal":
      return TextProposal.decode(data.value);
    case "/cosmos.params.v1beta1.ParameterChangeProposal":
      return import_params.ParameterChangeProposal.decode(data.value);
    case "/cosmos.upgrade.v1beta1.SoftwareUpgradeProposal":
      return import_upgrade.SoftwareUpgradeProposal.decode(data.value);
    case "/cosmos.upgrade.v1beta1.CancelSoftwareUpgradeProposal":
      return import_upgrade.CancelSoftwareUpgradeProposal.decode(data.value);
    case "/cosmwasm.wasm.v1.StoreCodeProposal":
      return import_proposal_legacy.StoreCodeProposal.decode(data.value);
    case "/cosmwasm.wasm.v1.InstantiateContractProposal":
      return import_proposal_legacy.InstantiateContractProposal.decode(data.value);
    case "/cosmwasm.wasm.v1.InstantiateContract2Proposal":
      return import_proposal_legacy.InstantiateContract2Proposal.decode(data.value);
    case "/cosmwasm.wasm.v1.MigrateContractProposal":
      return import_proposal_legacy.MigrateContractProposal.decode(data.value);
    case "/cosmwasm.wasm.v1.SudoContractProposal":
      return import_proposal_legacy.SudoContractProposal.decode(data.value);
    case "/cosmwasm.wasm.v1.ExecuteContractProposal":
      return import_proposal_legacy.ExecuteContractProposal.decode(data.value);
    case "/cosmwasm.wasm.v1.UpdateAdminProposal":
      return import_proposal_legacy.UpdateAdminProposal.decode(data.value);
    case "/cosmwasm.wasm.v1.ClearAdminProposal":
      return import_proposal_legacy.ClearAdminProposal.decode(data.value);
    case "/cosmwasm.wasm.v1.PinCodesProposal":
      return import_proposal_legacy.PinCodesProposal.decode(data.value);
    case "/cosmwasm.wasm.v1.UnpinCodesProposal":
      return import_proposal_legacy.UnpinCodesProposal.decode(data.value);
    case "/cosmwasm.wasm.v1.UpdateInstantiateConfigProposal":
      return import_proposal_legacy.UpdateInstantiateConfigProposal.decode(data.value);
    case "/cosmwasm.wasm.v1.StoreAndInstantiateContractProposal":
      return import_proposal_legacy.StoreAndInstantiateContractProposal.decode(data.value);
    case "/ibc.core.client.v1.ClientUpdateProposal":
      return import_client.ClientUpdateProposal.decode(data.value);
    case "/ibc.core.client.v1.UpgradeProposal":
      return import_client.UpgradeProposal.decode(data.value);
    default:
      return data;
  }
};
const Cosmos_govv1beta1Content_FromAmino = (content) => {
  switch (content.type) {
    case "cosmos-sdk/CommunityPoolSpendProposal":
      return import_any.Any.fromPartial({
        typeUrl: "/cosmos.distribution.v1beta1.CommunityPoolSpendProposal",
        value: import_distribution.CommunityPoolSpendProposal.encode(import_distribution.CommunityPoolSpendProposal.fromPartial(import_distribution.CommunityPoolSpendProposal.fromAmino(content.value))).finish()
      });
    case "cosmos-sdk/CommunityPoolSpendProposalWithDeposit":
      return import_any.Any.fromPartial({
        typeUrl: "/cosmos.distribution.v1beta1.CommunityPoolSpendProposalWithDeposit",
        value: import_distribution.CommunityPoolSpendProposalWithDeposit.encode(import_distribution.CommunityPoolSpendProposalWithDeposit.fromPartial(import_distribution.CommunityPoolSpendProposalWithDeposit.fromAmino(content.value))).finish()
      });
    case "cosmos-sdk/TextProposal":
      return import_any.Any.fromPartial({
        typeUrl: "/cosmos.gov.v1beta1.TextProposal",
        value: TextProposal.encode(TextProposal.fromPartial(TextProposal.fromAmino(content.value))).finish()
      });
    case "cosmos-sdk/ParameterChangeProposal":
      return import_any.Any.fromPartial({
        typeUrl: "/cosmos.params.v1beta1.ParameterChangeProposal",
        value: import_params.ParameterChangeProposal.encode(import_params.ParameterChangeProposal.fromPartial(import_params.ParameterChangeProposal.fromAmino(content.value))).finish()
      });
    case "cosmos-sdk/SoftwareUpgradeProposal":
      return import_any.Any.fromPartial({
        typeUrl: "/cosmos.upgrade.v1beta1.SoftwareUpgradeProposal",
        value: import_upgrade.SoftwareUpgradeProposal.encode(import_upgrade.SoftwareUpgradeProposal.fromPartial(import_upgrade.SoftwareUpgradeProposal.fromAmino(content.value))).finish()
      });
    case "cosmos-sdk/CancelSoftwareUpgradeProposal":
      return import_any.Any.fromPartial({
        typeUrl: "/cosmos.upgrade.v1beta1.CancelSoftwareUpgradeProposal",
        value: import_upgrade.CancelSoftwareUpgradeProposal.encode(import_upgrade.CancelSoftwareUpgradeProposal.fromPartial(import_upgrade.CancelSoftwareUpgradeProposal.fromAmino(content.value))).finish()
      });
    case "wasm/StoreCodeProposal":
      return import_any.Any.fromPartial({
        typeUrl: "/cosmwasm.wasm.v1.StoreCodeProposal",
        value: import_proposal_legacy.StoreCodeProposal.encode(import_proposal_legacy.StoreCodeProposal.fromPartial(import_proposal_legacy.StoreCodeProposal.fromAmino(content.value))).finish()
      });
    case "wasm/InstantiateContractProposal":
      return import_any.Any.fromPartial({
        typeUrl: "/cosmwasm.wasm.v1.InstantiateContractProposal",
        value: import_proposal_legacy.InstantiateContractProposal.encode(import_proposal_legacy.InstantiateContractProposal.fromPartial(import_proposal_legacy.InstantiateContractProposal.fromAmino(content.value))).finish()
      });
    case "wasm/InstantiateContract2Proposal":
      return import_any.Any.fromPartial({
        typeUrl: "/cosmwasm.wasm.v1.InstantiateContract2Proposal",
        value: import_proposal_legacy.InstantiateContract2Proposal.encode(import_proposal_legacy.InstantiateContract2Proposal.fromPartial(import_proposal_legacy.InstantiateContract2Proposal.fromAmino(content.value))).finish()
      });
    case "wasm/MigrateContractProposal":
      return import_any.Any.fromPartial({
        typeUrl: "/cosmwasm.wasm.v1.MigrateContractProposal",
        value: import_proposal_legacy.MigrateContractProposal.encode(import_proposal_legacy.MigrateContractProposal.fromPartial(import_proposal_legacy.MigrateContractProposal.fromAmino(content.value))).finish()
      });
    case "wasm/SudoContractProposal":
      return import_any.Any.fromPartial({
        typeUrl: "/cosmwasm.wasm.v1.SudoContractProposal",
        value: import_proposal_legacy.SudoContractProposal.encode(import_proposal_legacy.SudoContractProposal.fromPartial(import_proposal_legacy.SudoContractProposal.fromAmino(content.value))).finish()
      });
    case "wasm/ExecuteContractProposal":
      return import_any.Any.fromPartial({
        typeUrl: "/cosmwasm.wasm.v1.ExecuteContractProposal",
        value: import_proposal_legacy.ExecuteContractProposal.encode(import_proposal_legacy.ExecuteContractProposal.fromPartial(import_proposal_legacy.ExecuteContractProposal.fromAmino(content.value))).finish()
      });
    case "wasm/UpdateAdminProposal":
      return import_any.Any.fromPartial({
        typeUrl: "/cosmwasm.wasm.v1.UpdateAdminProposal",
        value: import_proposal_legacy.UpdateAdminProposal.encode(import_proposal_legacy.UpdateAdminProposal.fromPartial(import_proposal_legacy.UpdateAdminProposal.fromAmino(content.value))).finish()
      });
    case "wasm/ClearAdminProposal":
      return import_any.Any.fromPartial({
        typeUrl: "/cosmwasm.wasm.v1.ClearAdminProposal",
        value: import_proposal_legacy.ClearAdminProposal.encode(import_proposal_legacy.ClearAdminProposal.fromPartial(import_proposal_legacy.ClearAdminProposal.fromAmino(content.value))).finish()
      });
    case "wasm/PinCodesProposal":
      return import_any.Any.fromPartial({
        typeUrl: "/cosmwasm.wasm.v1.PinCodesProposal",
        value: import_proposal_legacy.PinCodesProposal.encode(import_proposal_legacy.PinCodesProposal.fromPartial(import_proposal_legacy.PinCodesProposal.fromAmino(content.value))).finish()
      });
    case "wasm/UnpinCodesProposal":
      return import_any.Any.fromPartial({
        typeUrl: "/cosmwasm.wasm.v1.UnpinCodesProposal",
        value: import_proposal_legacy.UnpinCodesProposal.encode(import_proposal_legacy.UnpinCodesProposal.fromPartial(import_proposal_legacy.UnpinCodesProposal.fromAmino(content.value))).finish()
      });
    case "wasm/UpdateInstantiateConfigProposal":
      return import_any.Any.fromPartial({
        typeUrl: "/cosmwasm.wasm.v1.UpdateInstantiateConfigProposal",
        value: import_proposal_legacy.UpdateInstantiateConfigProposal.encode(import_proposal_legacy.UpdateInstantiateConfigProposal.fromPartial(import_proposal_legacy.UpdateInstantiateConfigProposal.fromAmino(content.value))).finish()
      });
    case "wasm/StoreAndInstantiateContractProposal":
      return import_any.Any.fromPartial({
        typeUrl: "/cosmwasm.wasm.v1.StoreAndInstantiateContractProposal",
        value: import_proposal_legacy.StoreAndInstantiateContractProposal.encode(import_proposal_legacy.StoreAndInstantiateContractProposal.fromPartial(import_proposal_legacy.StoreAndInstantiateContractProposal.fromAmino(content.value))).finish()
      });
    case "cosmos-sdk/ClientUpdateProposal":
      return import_any.Any.fromPartial({
        typeUrl: "/ibc.core.client.v1.ClientUpdateProposal",
        value: import_client.ClientUpdateProposal.encode(import_client.ClientUpdateProposal.fromPartial(import_client.ClientUpdateProposal.fromAmino(content.value))).finish()
      });
    case "cosmos-sdk/UpgradeProposal":
      return import_any.Any.fromPartial({
        typeUrl: "/ibc.core.client.v1.UpgradeProposal",
        value: import_client.UpgradeProposal.encode(import_client.UpgradeProposal.fromPartial(import_client.UpgradeProposal.fromAmino(content.value))).finish()
      });
    default:
      return import_any.Any.fromAmino(content);
  }
};
const Cosmos_govv1beta1Content_ToAmino = (content) => {
  switch (content.typeUrl) {
    case "/cosmos.distribution.v1beta1.CommunityPoolSpendProposal":
      return {
        type: "cosmos-sdk/CommunityPoolSpendProposal",
        value: import_distribution.CommunityPoolSpendProposal.toAmino(import_distribution.CommunityPoolSpendProposal.decode(content.value, void 0))
      };
    case "/cosmos.distribution.v1beta1.CommunityPoolSpendProposalWithDeposit":
      return {
        type: "cosmos-sdk/CommunityPoolSpendProposalWithDeposit",
        value: import_distribution.CommunityPoolSpendProposalWithDeposit.toAmino(import_distribution.CommunityPoolSpendProposalWithDeposit.decode(content.value, void 0))
      };
    case "/cosmos.gov.v1beta1.TextProposal":
      return {
        type: "cosmos-sdk/TextProposal",
        value: TextProposal.toAmino(TextProposal.decode(content.value, void 0))
      };
    case "/cosmos.params.v1beta1.ParameterChangeProposal":
      return {
        type: "cosmos-sdk/ParameterChangeProposal",
        value: import_params.ParameterChangeProposal.toAmino(import_params.ParameterChangeProposal.decode(content.value, void 0))
      };
    case "/cosmos.upgrade.v1beta1.SoftwareUpgradeProposal":
      return {
        type: "cosmos-sdk/SoftwareUpgradeProposal",
        value: import_upgrade.SoftwareUpgradeProposal.toAmino(import_upgrade.SoftwareUpgradeProposal.decode(content.value, void 0))
      };
    case "/cosmos.upgrade.v1beta1.CancelSoftwareUpgradeProposal":
      return {
        type: "cosmos-sdk/CancelSoftwareUpgradeProposal",
        value: import_upgrade.CancelSoftwareUpgradeProposal.toAmino(import_upgrade.CancelSoftwareUpgradeProposal.decode(content.value, void 0))
      };
    case "/cosmwasm.wasm.v1.StoreCodeProposal":
      return {
        type: "wasm/StoreCodeProposal",
        value: import_proposal_legacy.StoreCodeProposal.toAmino(import_proposal_legacy.StoreCodeProposal.decode(content.value, void 0))
      };
    case "/cosmwasm.wasm.v1.InstantiateContractProposal":
      return {
        type: "wasm/InstantiateContractProposal",
        value: import_proposal_legacy.InstantiateContractProposal.toAmino(import_proposal_legacy.InstantiateContractProposal.decode(content.value, void 0))
      };
    case "/cosmwasm.wasm.v1.InstantiateContract2Proposal":
      return {
        type: "wasm/InstantiateContract2Proposal",
        value: import_proposal_legacy.InstantiateContract2Proposal.toAmino(import_proposal_legacy.InstantiateContract2Proposal.decode(content.value, void 0))
      };
    case "/cosmwasm.wasm.v1.MigrateContractProposal":
      return {
        type: "wasm/MigrateContractProposal",
        value: import_proposal_legacy.MigrateContractProposal.toAmino(import_proposal_legacy.MigrateContractProposal.decode(content.value, void 0))
      };
    case "/cosmwasm.wasm.v1.SudoContractProposal":
      return {
        type: "wasm/SudoContractProposal",
        value: import_proposal_legacy.SudoContractProposal.toAmino(import_proposal_legacy.SudoContractProposal.decode(content.value, void 0))
      };
    case "/cosmwasm.wasm.v1.ExecuteContractProposal":
      return {
        type: "wasm/ExecuteContractProposal",
        value: import_proposal_legacy.ExecuteContractProposal.toAmino(import_proposal_legacy.ExecuteContractProposal.decode(content.value, void 0))
      };
    case "/cosmwasm.wasm.v1.UpdateAdminProposal":
      return {
        type: "wasm/UpdateAdminProposal",
        value: import_proposal_legacy.UpdateAdminProposal.toAmino(import_proposal_legacy.UpdateAdminProposal.decode(content.value, void 0))
      };
    case "/cosmwasm.wasm.v1.ClearAdminProposal":
      return {
        type: "wasm/ClearAdminProposal",
        value: import_proposal_legacy.ClearAdminProposal.toAmino(import_proposal_legacy.ClearAdminProposal.decode(content.value, void 0))
      };
    case "/cosmwasm.wasm.v1.PinCodesProposal":
      return {
        type: "wasm/PinCodesProposal",
        value: import_proposal_legacy.PinCodesProposal.toAmino(import_proposal_legacy.PinCodesProposal.decode(content.value, void 0))
      };
    case "/cosmwasm.wasm.v1.UnpinCodesProposal":
      return {
        type: "wasm/UnpinCodesProposal",
        value: import_proposal_legacy.UnpinCodesProposal.toAmino(import_proposal_legacy.UnpinCodesProposal.decode(content.value, void 0))
      };
    case "/cosmwasm.wasm.v1.UpdateInstantiateConfigProposal":
      return {
        type: "wasm/UpdateInstantiateConfigProposal",
        value: import_proposal_legacy.UpdateInstantiateConfigProposal.toAmino(import_proposal_legacy.UpdateInstantiateConfigProposal.decode(content.value, void 0))
      };
    case "/cosmwasm.wasm.v1.StoreAndInstantiateContractProposal":
      return {
        type: "wasm/StoreAndInstantiateContractProposal",
        value: import_proposal_legacy.StoreAndInstantiateContractProposal.toAmino(import_proposal_legacy.StoreAndInstantiateContractProposal.decode(content.value, void 0))
      };
    case "/ibc.core.client.v1.ClientUpdateProposal":
      return {
        type: "cosmos-sdk/ClientUpdateProposal",
        value: import_client.ClientUpdateProposal.toAmino(import_client.ClientUpdateProposal.decode(content.value, void 0))
      };
    case "/ibc.core.client.v1.UpgradeProposal":
      return {
        type: "cosmos-sdk/UpgradeProposal",
        value: import_client.UpgradeProposal.toAmino(import_client.UpgradeProposal.decode(content.value, void 0))
      };
    default:
      return import_any.Any.toAmino(content);
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Cosmos_govv1beta1Content_FromAmino,
  Cosmos_govv1beta1Content_InterfaceDecoder,
  Cosmos_govv1beta1Content_ToAmino,
  Deposit,
  DepositParams,
  Proposal,
  ProposalStatus,
  ProposalStatusAmino,
  ProposalStatusSDKType,
  TallyParams,
  TallyResult,
  TextProposal,
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
});
