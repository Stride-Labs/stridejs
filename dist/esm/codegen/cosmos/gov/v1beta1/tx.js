import { Any } from "../../../google/protobuf/any";
import { Coin } from "../../base/v1beta1/coin";
import { WeightedVoteOption, TextProposal } from "./gov";
import { CommunityPoolSpendProposal, CommunityPoolSpendProposalWithDeposit } from "../../distribution/v1beta1/distribution";
import { ParameterChangeProposal } from "../../params/v1beta1/params";
import { SoftwareUpgradeProposal, CancelSoftwareUpgradeProposal } from "../../upgrade/v1beta1/upgrade";
import { StoreCodeProposal, InstantiateContractProposal, InstantiateContract2Proposal, MigrateContractProposal, SudoContractProposal, ExecuteContractProposal, UpdateAdminProposal, ClearAdminProposal, PinCodesProposal, UnpinCodesProposal, UpdateInstantiateConfigProposal, StoreAndInstantiateContractProposal } from "../../../cosmwasm/wasm/v1/proposal_legacy";
import { ClientUpdateProposal, UpgradeProposal } from "../../../ibc/core/client/v1/client";
import { BinaryReader, BinaryWriter } from "../../../binary";
function createBaseMsgSubmitProposal() {
  return {
    content: void 0,
    initialDeposit: [],
    proposer: ""
  };
}
const MsgSubmitProposal = {
  typeUrl: "/cosmos.gov.v1beta1.MsgSubmitProposal",
  encode(message, writer = BinaryWriter.create()) {
    if (message.content !== void 0) {
      Any.encode(message.content, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.initialDeposit) {
      Coin.encode(v, writer.uint32(18).fork()).ldelim();
    }
    if (message.proposer !== "") {
      writer.uint32(26).string(message.proposer);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.content = Cosmos_govv1beta1Content_InterfaceDecoder(reader);
          break;
        case 2:
          message.initialDeposit.push(Coin.decode(reader, reader.uint32()));
          break;
        case 3:
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
    const message = createBaseMsgSubmitProposal();
    message.content = object.content !== void 0 && object.content !== null ? Any.fromPartial(object.content) : void 0;
    message.initialDeposit = object.initialDeposit?.map((e) => Coin.fromPartial(e)) || [];
    message.proposer = object.proposer ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgSubmitProposal();
    if (object.content !== void 0 && object.content !== null) {
      message.content = Cosmos_govv1beta1Content_FromAmino(object.content);
    }
    message.initialDeposit = object.initial_deposit?.map((e) => Coin.fromAmino(e)) || [];
    if (object.proposer !== void 0 && object.proposer !== null) {
      message.proposer = object.proposer;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.content = message.content ? Cosmos_govv1beta1Content_ToAmino(message.content) : void 0;
    if (message.initialDeposit) {
      obj.initial_deposit = message.initialDeposit.map((e) => e ? Coin.toAmino(e) : void 0);
    } else {
      obj.initial_deposit = message.initialDeposit;
    }
    obj.proposer = message.proposer === "" ? void 0 : message.proposer;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgSubmitProposal.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgSubmitProposal",
      value: MsgSubmitProposal.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgSubmitProposal.decode(message.value);
  },
  toProto(message) {
    return MsgSubmitProposal.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.gov.v1beta1.MsgSubmitProposal",
      value: MsgSubmitProposal.encode(message).finish()
    };
  }
};
function createBaseMsgSubmitProposalResponse() {
  return {
    proposalId: BigInt(0)
  };
}
const MsgSubmitProposalResponse = {
  typeUrl: "/cosmos.gov.v1beta1.MsgSubmitProposalResponse",
  encode(message, writer = BinaryWriter.create()) {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposalId);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitProposalResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgSubmitProposalResponse();
    message.proposalId = object.proposalId !== void 0 && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgSubmitProposalResponse();
    if (object.proposal_id !== void 0 && object.proposal_id !== null) {
      message.proposalId = BigInt(object.proposal_id);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.proposal_id = message.proposalId ? message.proposalId?.toString() : "0";
    return obj;
  },
  fromAminoMsg(object) {
    return MsgSubmitProposalResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgSubmitProposalResponse",
      value: MsgSubmitProposalResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgSubmitProposalResponse.decode(message.value);
  },
  toProto(message) {
    return MsgSubmitProposalResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.gov.v1beta1.MsgSubmitProposalResponse",
      value: MsgSubmitProposalResponse.encode(message).finish()
    };
  }
};
function createBaseMsgVote() {
  return {
    proposalId: BigInt(0),
    voter: "",
    option: 0
  };
}
const MsgVote = {
  typeUrl: "/cosmos.gov.v1beta1.MsgVote",
  encode(message, writer = BinaryWriter.create()) {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.voter !== "") {
      writer.uint32(18).string(message.voter);
    }
    if (message.option !== 0) {
      writer.uint32(24).int32(message.option);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgVote();
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
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgVote();
    message.proposalId = object.proposalId !== void 0 && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
    message.voter = object.voter ?? "";
    message.option = object.option ?? 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgVote();
    if (object.proposal_id !== void 0 && object.proposal_id !== null) {
      message.proposalId = BigInt(object.proposal_id);
    }
    if (object.voter !== void 0 && object.voter !== null) {
      message.voter = object.voter;
    }
    if (object.option !== void 0 && object.option !== null) {
      message.option = object.option;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.proposal_id = message.proposalId !== BigInt(0) ? message.proposalId?.toString() : void 0;
    obj.voter = message.voter === "" ? void 0 : message.voter;
    obj.option = message.option === 0 ? void 0 : message.option;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgVote.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgVote",
      value: MsgVote.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgVote.decode(message.value);
  },
  toProto(message) {
    return MsgVote.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.gov.v1beta1.MsgVote",
      value: MsgVote.encode(message).finish()
    };
  }
};
function createBaseMsgVoteResponse() {
  return {};
}
const MsgVoteResponse = {
  typeUrl: "/cosmos.gov.v1beta1.MsgVoteResponse",
  encode(_, writer = BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgVoteResponse();
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
    const message = createBaseMsgVoteResponse();
    return message;
  },
  fromAmino(_) {
    const message = createBaseMsgVoteResponse();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return MsgVoteResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgVoteResponse",
      value: MsgVoteResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgVoteResponse.decode(message.value);
  },
  toProto(message) {
    return MsgVoteResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.gov.v1beta1.MsgVoteResponse",
      value: MsgVoteResponse.encode(message).finish()
    };
  }
};
function createBaseMsgVoteWeighted() {
  return {
    proposalId: BigInt(0),
    voter: "",
    options: []
  };
}
const MsgVoteWeighted = {
  typeUrl: "/cosmos.gov.v1beta1.MsgVoteWeighted",
  encode(message, writer = BinaryWriter.create()) {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.voter !== "") {
      writer.uint32(18).string(message.voter);
    }
    for (const v of message.options) {
      WeightedVoteOption.encode(v, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgVoteWeighted();
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
    const message = createBaseMsgVoteWeighted();
    message.proposalId = object.proposalId !== void 0 && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
    message.voter = object.voter ?? "";
    message.options = object.options?.map((e) => WeightedVoteOption.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgVoteWeighted();
    if (object.proposal_id !== void 0 && object.proposal_id !== null) {
      message.proposalId = BigInt(object.proposal_id);
    }
    if (object.voter !== void 0 && object.voter !== null) {
      message.voter = object.voter;
    }
    message.options = object.options?.map((e) => WeightedVoteOption.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.proposal_id = message.proposalId ? message.proposalId?.toString() : "0";
    obj.voter = message.voter === "" ? void 0 : message.voter;
    if (message.options) {
      obj.options = message.options.map((e) => e ? WeightedVoteOption.toAmino(e) : void 0);
    } else {
      obj.options = message.options;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return MsgVoteWeighted.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgVoteWeighted",
      value: MsgVoteWeighted.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgVoteWeighted.decode(message.value);
  },
  toProto(message) {
    return MsgVoteWeighted.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.gov.v1beta1.MsgVoteWeighted",
      value: MsgVoteWeighted.encode(message).finish()
    };
  }
};
function createBaseMsgVoteWeightedResponse() {
  return {};
}
const MsgVoteWeightedResponse = {
  typeUrl: "/cosmos.gov.v1beta1.MsgVoteWeightedResponse",
  encode(_, writer = BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgVoteWeightedResponse();
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
    const message = createBaseMsgVoteWeightedResponse();
    return message;
  },
  fromAmino(_) {
    const message = createBaseMsgVoteWeightedResponse();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return MsgVoteWeightedResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgVoteWeightedResponse",
      value: MsgVoteWeightedResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgVoteWeightedResponse.decode(message.value);
  },
  toProto(message) {
    return MsgVoteWeightedResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.gov.v1beta1.MsgVoteWeightedResponse",
      value: MsgVoteWeightedResponse.encode(message).finish()
    };
  }
};
function createBaseMsgDeposit() {
  return {
    proposalId: BigInt(0),
    depositor: "",
    amount: []
  };
}
const MsgDeposit = {
  typeUrl: "/cosmos.gov.v1beta1.MsgDeposit",
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
    const message = createBaseMsgDeposit();
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
    const message = createBaseMsgDeposit();
    message.proposalId = object.proposalId !== void 0 && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
    message.depositor = object.depositor ?? "";
    message.amount = object.amount?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgDeposit();
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
    obj.proposal_id = message.proposalId ? message.proposalId?.toString() : "0";
    obj.depositor = message.depositor === "" ? void 0 : message.depositor;
    if (message.amount) {
      obj.amount = message.amount.map((e) => e ? Coin.toAmino(e) : void 0);
    } else {
      obj.amount = message.amount;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return MsgDeposit.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgDeposit",
      value: MsgDeposit.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgDeposit.decode(message.value);
  },
  toProto(message) {
    return MsgDeposit.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.gov.v1beta1.MsgDeposit",
      value: MsgDeposit.encode(message).finish()
    };
  }
};
function createBaseMsgDepositResponse() {
  return {};
}
const MsgDepositResponse = {
  typeUrl: "/cosmos.gov.v1beta1.MsgDepositResponse",
  encode(_, writer = BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgDepositResponse();
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
    const message = createBaseMsgDepositResponse();
    return message;
  },
  fromAmino(_) {
    const message = createBaseMsgDepositResponse();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return MsgDepositResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgDepositResponse",
      value: MsgDepositResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgDepositResponse.decode(message.value);
  },
  toProto(message) {
    return MsgDepositResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.gov.v1beta1.MsgDepositResponse",
      value: MsgDepositResponse.encode(message).finish()
    };
  }
};
const Cosmos_govv1beta1Content_InterfaceDecoder = (input) => {
  const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
  const data = Any.decode(reader, reader.uint32());
  switch (data.typeUrl) {
    case "/cosmos.distribution.v1beta1.CommunityPoolSpendProposal":
      return CommunityPoolSpendProposal.decode(data.value);
    case "/cosmos.distribution.v1beta1.CommunityPoolSpendProposalWithDeposit":
      return CommunityPoolSpendProposalWithDeposit.decode(data.value);
    case "/cosmos.gov.v1beta1.TextProposal":
      return TextProposal.decode(data.value);
    case "/cosmos.params.v1beta1.ParameterChangeProposal":
      return ParameterChangeProposal.decode(data.value);
    case "/cosmos.upgrade.v1beta1.SoftwareUpgradeProposal":
      return SoftwareUpgradeProposal.decode(data.value);
    case "/cosmos.upgrade.v1beta1.CancelSoftwareUpgradeProposal":
      return CancelSoftwareUpgradeProposal.decode(data.value);
    case "/cosmwasm.wasm.v1.StoreCodeProposal":
      return StoreCodeProposal.decode(data.value);
    case "/cosmwasm.wasm.v1.InstantiateContractProposal":
      return InstantiateContractProposal.decode(data.value);
    case "/cosmwasm.wasm.v1.InstantiateContract2Proposal":
      return InstantiateContract2Proposal.decode(data.value);
    case "/cosmwasm.wasm.v1.MigrateContractProposal":
      return MigrateContractProposal.decode(data.value);
    case "/cosmwasm.wasm.v1.SudoContractProposal":
      return SudoContractProposal.decode(data.value);
    case "/cosmwasm.wasm.v1.ExecuteContractProposal":
      return ExecuteContractProposal.decode(data.value);
    case "/cosmwasm.wasm.v1.UpdateAdminProposal":
      return UpdateAdminProposal.decode(data.value);
    case "/cosmwasm.wasm.v1.ClearAdminProposal":
      return ClearAdminProposal.decode(data.value);
    case "/cosmwasm.wasm.v1.PinCodesProposal":
      return PinCodesProposal.decode(data.value);
    case "/cosmwasm.wasm.v1.UnpinCodesProposal":
      return UnpinCodesProposal.decode(data.value);
    case "/cosmwasm.wasm.v1.UpdateInstantiateConfigProposal":
      return UpdateInstantiateConfigProposal.decode(data.value);
    case "/cosmwasm.wasm.v1.StoreAndInstantiateContractProposal":
      return StoreAndInstantiateContractProposal.decode(data.value);
    case "/ibc.core.client.v1.ClientUpdateProposal":
      return ClientUpdateProposal.decode(data.value);
    case "/ibc.core.client.v1.UpgradeProposal":
      return UpgradeProposal.decode(data.value);
    default:
      return data;
  }
};
const Cosmos_govv1beta1Content_FromAmino = (content) => {
  switch (content.type) {
    case "cosmos-sdk/CommunityPoolSpendProposal":
      return Any.fromPartial({
        typeUrl: "/cosmos.distribution.v1beta1.CommunityPoolSpendProposal",
        value: CommunityPoolSpendProposal.encode(CommunityPoolSpendProposal.fromPartial(CommunityPoolSpendProposal.fromAmino(content.value))).finish()
      });
    case "cosmos-sdk/CommunityPoolSpendProposalWithDeposit":
      return Any.fromPartial({
        typeUrl: "/cosmos.distribution.v1beta1.CommunityPoolSpendProposalWithDeposit",
        value: CommunityPoolSpendProposalWithDeposit.encode(CommunityPoolSpendProposalWithDeposit.fromPartial(CommunityPoolSpendProposalWithDeposit.fromAmino(content.value))).finish()
      });
    case "cosmos-sdk/TextProposal":
      return Any.fromPartial({
        typeUrl: "/cosmos.gov.v1beta1.TextProposal",
        value: TextProposal.encode(TextProposal.fromPartial(TextProposal.fromAmino(content.value))).finish()
      });
    case "cosmos-sdk/ParameterChangeProposal":
      return Any.fromPartial({
        typeUrl: "/cosmos.params.v1beta1.ParameterChangeProposal",
        value: ParameterChangeProposal.encode(ParameterChangeProposal.fromPartial(ParameterChangeProposal.fromAmino(content.value))).finish()
      });
    case "cosmos-sdk/SoftwareUpgradeProposal":
      return Any.fromPartial({
        typeUrl: "/cosmos.upgrade.v1beta1.SoftwareUpgradeProposal",
        value: SoftwareUpgradeProposal.encode(SoftwareUpgradeProposal.fromPartial(SoftwareUpgradeProposal.fromAmino(content.value))).finish()
      });
    case "cosmos-sdk/CancelSoftwareUpgradeProposal":
      return Any.fromPartial({
        typeUrl: "/cosmos.upgrade.v1beta1.CancelSoftwareUpgradeProposal",
        value: CancelSoftwareUpgradeProposal.encode(CancelSoftwareUpgradeProposal.fromPartial(CancelSoftwareUpgradeProposal.fromAmino(content.value))).finish()
      });
    case "wasm/StoreCodeProposal":
      return Any.fromPartial({
        typeUrl: "/cosmwasm.wasm.v1.StoreCodeProposal",
        value: StoreCodeProposal.encode(StoreCodeProposal.fromPartial(StoreCodeProposal.fromAmino(content.value))).finish()
      });
    case "wasm/InstantiateContractProposal":
      return Any.fromPartial({
        typeUrl: "/cosmwasm.wasm.v1.InstantiateContractProposal",
        value: InstantiateContractProposal.encode(InstantiateContractProposal.fromPartial(InstantiateContractProposal.fromAmino(content.value))).finish()
      });
    case "wasm/InstantiateContract2Proposal":
      return Any.fromPartial({
        typeUrl: "/cosmwasm.wasm.v1.InstantiateContract2Proposal",
        value: InstantiateContract2Proposal.encode(InstantiateContract2Proposal.fromPartial(InstantiateContract2Proposal.fromAmino(content.value))).finish()
      });
    case "wasm/MigrateContractProposal":
      return Any.fromPartial({
        typeUrl: "/cosmwasm.wasm.v1.MigrateContractProposal",
        value: MigrateContractProposal.encode(MigrateContractProposal.fromPartial(MigrateContractProposal.fromAmino(content.value))).finish()
      });
    case "wasm/SudoContractProposal":
      return Any.fromPartial({
        typeUrl: "/cosmwasm.wasm.v1.SudoContractProposal",
        value: SudoContractProposal.encode(SudoContractProposal.fromPartial(SudoContractProposal.fromAmino(content.value))).finish()
      });
    case "wasm/ExecuteContractProposal":
      return Any.fromPartial({
        typeUrl: "/cosmwasm.wasm.v1.ExecuteContractProposal",
        value: ExecuteContractProposal.encode(ExecuteContractProposal.fromPartial(ExecuteContractProposal.fromAmino(content.value))).finish()
      });
    case "wasm/UpdateAdminProposal":
      return Any.fromPartial({
        typeUrl: "/cosmwasm.wasm.v1.UpdateAdminProposal",
        value: UpdateAdminProposal.encode(UpdateAdminProposal.fromPartial(UpdateAdminProposal.fromAmino(content.value))).finish()
      });
    case "wasm/ClearAdminProposal":
      return Any.fromPartial({
        typeUrl: "/cosmwasm.wasm.v1.ClearAdminProposal",
        value: ClearAdminProposal.encode(ClearAdminProposal.fromPartial(ClearAdminProposal.fromAmino(content.value))).finish()
      });
    case "wasm/PinCodesProposal":
      return Any.fromPartial({
        typeUrl: "/cosmwasm.wasm.v1.PinCodesProposal",
        value: PinCodesProposal.encode(PinCodesProposal.fromPartial(PinCodesProposal.fromAmino(content.value))).finish()
      });
    case "wasm/UnpinCodesProposal":
      return Any.fromPartial({
        typeUrl: "/cosmwasm.wasm.v1.UnpinCodesProposal",
        value: UnpinCodesProposal.encode(UnpinCodesProposal.fromPartial(UnpinCodesProposal.fromAmino(content.value))).finish()
      });
    case "wasm/UpdateInstantiateConfigProposal":
      return Any.fromPartial({
        typeUrl: "/cosmwasm.wasm.v1.UpdateInstantiateConfigProposal",
        value: UpdateInstantiateConfigProposal.encode(UpdateInstantiateConfigProposal.fromPartial(UpdateInstantiateConfigProposal.fromAmino(content.value))).finish()
      });
    case "wasm/StoreAndInstantiateContractProposal":
      return Any.fromPartial({
        typeUrl: "/cosmwasm.wasm.v1.StoreAndInstantiateContractProposal",
        value: StoreAndInstantiateContractProposal.encode(StoreAndInstantiateContractProposal.fromPartial(StoreAndInstantiateContractProposal.fromAmino(content.value))).finish()
      });
    case "cosmos-sdk/ClientUpdateProposal":
      return Any.fromPartial({
        typeUrl: "/ibc.core.client.v1.ClientUpdateProposal",
        value: ClientUpdateProposal.encode(ClientUpdateProposal.fromPartial(ClientUpdateProposal.fromAmino(content.value))).finish()
      });
    case "cosmos-sdk/UpgradeProposal":
      return Any.fromPartial({
        typeUrl: "/ibc.core.client.v1.UpgradeProposal",
        value: UpgradeProposal.encode(UpgradeProposal.fromPartial(UpgradeProposal.fromAmino(content.value))).finish()
      });
    default:
      return Any.fromAmino(content);
  }
};
const Cosmos_govv1beta1Content_ToAmino = (content) => {
  switch (content.typeUrl) {
    case "/cosmos.distribution.v1beta1.CommunityPoolSpendProposal":
      return {
        type: "cosmos-sdk/CommunityPoolSpendProposal",
        value: CommunityPoolSpendProposal.toAmino(CommunityPoolSpendProposal.decode(content.value, void 0))
      };
    case "/cosmos.distribution.v1beta1.CommunityPoolSpendProposalWithDeposit":
      return {
        type: "cosmos-sdk/CommunityPoolSpendProposalWithDeposit",
        value: CommunityPoolSpendProposalWithDeposit.toAmino(CommunityPoolSpendProposalWithDeposit.decode(content.value, void 0))
      };
    case "/cosmos.gov.v1beta1.TextProposal":
      return {
        type: "cosmos-sdk/TextProposal",
        value: TextProposal.toAmino(TextProposal.decode(content.value, void 0))
      };
    case "/cosmos.params.v1beta1.ParameterChangeProposal":
      return {
        type: "cosmos-sdk/ParameterChangeProposal",
        value: ParameterChangeProposal.toAmino(ParameterChangeProposal.decode(content.value, void 0))
      };
    case "/cosmos.upgrade.v1beta1.SoftwareUpgradeProposal":
      return {
        type: "cosmos-sdk/SoftwareUpgradeProposal",
        value: SoftwareUpgradeProposal.toAmino(SoftwareUpgradeProposal.decode(content.value, void 0))
      };
    case "/cosmos.upgrade.v1beta1.CancelSoftwareUpgradeProposal":
      return {
        type: "cosmos-sdk/CancelSoftwareUpgradeProposal",
        value: CancelSoftwareUpgradeProposal.toAmino(CancelSoftwareUpgradeProposal.decode(content.value, void 0))
      };
    case "/cosmwasm.wasm.v1.StoreCodeProposal":
      return {
        type: "wasm/StoreCodeProposal",
        value: StoreCodeProposal.toAmino(StoreCodeProposal.decode(content.value, void 0))
      };
    case "/cosmwasm.wasm.v1.InstantiateContractProposal":
      return {
        type: "wasm/InstantiateContractProposal",
        value: InstantiateContractProposal.toAmino(InstantiateContractProposal.decode(content.value, void 0))
      };
    case "/cosmwasm.wasm.v1.InstantiateContract2Proposal":
      return {
        type: "wasm/InstantiateContract2Proposal",
        value: InstantiateContract2Proposal.toAmino(InstantiateContract2Proposal.decode(content.value, void 0))
      };
    case "/cosmwasm.wasm.v1.MigrateContractProposal":
      return {
        type: "wasm/MigrateContractProposal",
        value: MigrateContractProposal.toAmino(MigrateContractProposal.decode(content.value, void 0))
      };
    case "/cosmwasm.wasm.v1.SudoContractProposal":
      return {
        type: "wasm/SudoContractProposal",
        value: SudoContractProposal.toAmino(SudoContractProposal.decode(content.value, void 0))
      };
    case "/cosmwasm.wasm.v1.ExecuteContractProposal":
      return {
        type: "wasm/ExecuteContractProposal",
        value: ExecuteContractProposal.toAmino(ExecuteContractProposal.decode(content.value, void 0))
      };
    case "/cosmwasm.wasm.v1.UpdateAdminProposal":
      return {
        type: "wasm/UpdateAdminProposal",
        value: UpdateAdminProposal.toAmino(UpdateAdminProposal.decode(content.value, void 0))
      };
    case "/cosmwasm.wasm.v1.ClearAdminProposal":
      return {
        type: "wasm/ClearAdminProposal",
        value: ClearAdminProposal.toAmino(ClearAdminProposal.decode(content.value, void 0))
      };
    case "/cosmwasm.wasm.v1.PinCodesProposal":
      return {
        type: "wasm/PinCodesProposal",
        value: PinCodesProposal.toAmino(PinCodesProposal.decode(content.value, void 0))
      };
    case "/cosmwasm.wasm.v1.UnpinCodesProposal":
      return {
        type: "wasm/UnpinCodesProposal",
        value: UnpinCodesProposal.toAmino(UnpinCodesProposal.decode(content.value, void 0))
      };
    case "/cosmwasm.wasm.v1.UpdateInstantiateConfigProposal":
      return {
        type: "wasm/UpdateInstantiateConfigProposal",
        value: UpdateInstantiateConfigProposal.toAmino(UpdateInstantiateConfigProposal.decode(content.value, void 0))
      };
    case "/cosmwasm.wasm.v1.StoreAndInstantiateContractProposal":
      return {
        type: "wasm/StoreAndInstantiateContractProposal",
        value: StoreAndInstantiateContractProposal.toAmino(StoreAndInstantiateContractProposal.decode(content.value, void 0))
      };
    case "/ibc.core.client.v1.ClientUpdateProposal":
      return {
        type: "cosmos-sdk/ClientUpdateProposal",
        value: ClientUpdateProposal.toAmino(ClientUpdateProposal.decode(content.value, void 0))
      };
    case "/ibc.core.client.v1.UpgradeProposal":
      return {
        type: "cosmos-sdk/UpgradeProposal",
        value: UpgradeProposal.toAmino(UpgradeProposal.decode(content.value, void 0))
      };
    default:
      return Any.toAmino(content);
  }
};
export {
  Cosmos_govv1beta1Content_FromAmino,
  Cosmos_govv1beta1Content_InterfaceDecoder,
  Cosmos_govv1beta1Content_ToAmino,
  MsgDeposit,
  MsgDepositResponse,
  MsgSubmitProposal,
  MsgSubmitProposalResponse,
  MsgVote,
  MsgVoteResponse,
  MsgVoteWeighted,
  MsgVoteWeightedResponse
};
