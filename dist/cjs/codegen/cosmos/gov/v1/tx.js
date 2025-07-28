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
var tx_exports = {};
__export(tx_exports, {
  Cosmos_govv1beta1Content_FromAmino: () => Cosmos_govv1beta1Content_FromAmino,
  Cosmos_govv1beta1Content_InterfaceDecoder: () => Cosmos_govv1beta1Content_InterfaceDecoder,
  Cosmos_govv1beta1Content_ToAmino: () => Cosmos_govv1beta1Content_ToAmino,
  MsgDeposit: () => MsgDeposit,
  MsgDepositResponse: () => MsgDepositResponse,
  MsgExecLegacyContent: () => MsgExecLegacyContent,
  MsgExecLegacyContentResponse: () => MsgExecLegacyContentResponse,
  MsgSubmitProposal: () => MsgSubmitProposal,
  MsgSubmitProposalResponse: () => MsgSubmitProposalResponse,
  MsgUpdateParams: () => MsgUpdateParams,
  MsgUpdateParamsResponse: () => MsgUpdateParamsResponse,
  MsgVote: () => MsgVote,
  MsgVoteResponse: () => MsgVoteResponse,
  MsgVoteWeighted: () => MsgVoteWeighted,
  MsgVoteWeightedResponse: () => MsgVoteWeightedResponse
});
module.exports = __toCommonJS(tx_exports);
var import_any = require("../../../google/protobuf/any");
var import_coin = require("../../base/v1beta1/coin");
var import_gov = require("./gov");
var import_distribution = require("../../distribution/v1beta1/distribution");
var import_gov2 = require("../v1beta1/gov");
var import_params = require("../../params/v1beta1/params");
var import_upgrade = require("../../upgrade/v1beta1/upgrade");
var import_proposal_legacy = require("../../../cosmwasm/wasm/v1/proposal_legacy");
var import_client = require("../../../ibc/core/client/v1/client");
var import_binary = require("../../../binary");
function createBaseMsgSubmitProposal() {
  return {
    messages: [],
    initialDeposit: [],
    proposer: "",
    metadata: "",
    title: "",
    summary: ""
  };
}
const MsgSubmitProposal = {
  typeUrl: "/cosmos.gov.v1.MsgSubmitProposal",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    for (const v of message.messages) {
      import_any.Any.encode(v, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.initialDeposit) {
      import_coin.Coin.encode(v, writer.uint32(18).fork()).ldelim();
    }
    if (message.proposer !== "") {
      writer.uint32(26).string(message.proposer);
    }
    if (message.metadata !== "") {
      writer.uint32(34).string(message.metadata);
    }
    if (message.title !== "") {
      writer.uint32(42).string(message.title);
    }
    if (message.summary !== "") {
      writer.uint32(50).string(message.summary);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.messages.push(import_any.Any.decode(reader, reader.uint32()));
          break;
        case 2:
          message.initialDeposit.push(import_coin.Coin.decode(reader, reader.uint32()));
          break;
        case 3:
          message.proposer = reader.string();
          break;
        case 4:
          message.metadata = reader.string();
          break;
        case 5:
          message.title = reader.string();
          break;
        case 6:
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
    const message = createBaseMsgSubmitProposal();
    message.messages = object.messages?.map((e) => import_any.Any.fromPartial(e)) || [];
    message.initialDeposit = object.initialDeposit?.map((e) => import_coin.Coin.fromPartial(e)) || [];
    message.proposer = object.proposer ?? "";
    message.metadata = object.metadata ?? "";
    message.title = object.title ?? "";
    message.summary = object.summary ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgSubmitProposal();
    message.messages = object.messages?.map((e) => import_any.Any.fromAmino(e)) || [];
    message.initialDeposit = object.initial_deposit?.map((e) => import_coin.Coin.fromAmino(e)) || [];
    if (object.proposer !== void 0 && object.proposer !== null) {
      message.proposer = object.proposer;
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
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.messages) {
      obj.messages = message.messages.map((e) => e ? import_any.Any.toAmino(e) : void 0);
    } else {
      obj.messages = message.messages;
    }
    if (message.initialDeposit) {
      obj.initial_deposit = message.initialDeposit.map((e) => e ? import_coin.Coin.toAmino(e) : void 0);
    } else {
      obj.initial_deposit = message.initialDeposit;
    }
    obj.proposer = message.proposer === "" ? void 0 : message.proposer;
    obj.metadata = message.metadata === "" ? void 0 : message.metadata;
    obj.title = message.title === "" ? void 0 : message.title;
    obj.summary = message.summary === "" ? void 0 : message.summary;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgSubmitProposal.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/v1/MsgSubmitProposal",
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
      typeUrl: "/cosmos.gov.v1.MsgSubmitProposal",
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
  typeUrl: "/cosmos.gov.v1.MsgSubmitProposalResponse",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposalId);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
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
    obj.proposal_id = message.proposalId !== BigInt(0) ? message.proposalId?.toString() : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgSubmitProposalResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/v1/MsgSubmitProposalResponse",
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
      typeUrl: "/cosmos.gov.v1.MsgSubmitProposalResponse",
      value: MsgSubmitProposalResponse.encode(message).finish()
    };
  }
};
function createBaseMsgExecLegacyContent() {
  return {
    content: void 0,
    authority: ""
  };
}
const MsgExecLegacyContent = {
  typeUrl: "/cosmos.gov.v1.MsgExecLegacyContent",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.content !== void 0) {
      import_any.Any.encode(message.content, writer.uint32(10).fork()).ldelim();
    }
    if (message.authority !== "") {
      writer.uint32(18).string(message.authority);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgExecLegacyContent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.content = Cosmos_govv1beta1Content_InterfaceDecoder(reader);
          break;
        case 2:
          message.authority = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgExecLegacyContent();
    message.content = object.content !== void 0 && object.content !== null ? import_any.Any.fromPartial(object.content) : void 0;
    message.authority = object.authority ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgExecLegacyContent();
    if (object.content !== void 0 && object.content !== null) {
      message.content = Cosmos_govv1beta1Content_FromAmino(object.content);
    }
    if (object.authority !== void 0 && object.authority !== null) {
      message.authority = object.authority;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.content = message.content ? Cosmos_govv1beta1Content_ToAmino(message.content) : void 0;
    obj.authority = message.authority === "" ? void 0 : message.authority;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgExecLegacyContent.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/v1/MsgExecLegacyContent",
      value: MsgExecLegacyContent.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgExecLegacyContent.decode(message.value);
  },
  toProto(message) {
    return MsgExecLegacyContent.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.gov.v1.MsgExecLegacyContent",
      value: MsgExecLegacyContent.encode(message).finish()
    };
  }
};
function createBaseMsgExecLegacyContentResponse() {
  return {};
}
const MsgExecLegacyContentResponse = {
  typeUrl: "/cosmos.gov.v1.MsgExecLegacyContentResponse",
  encode(_, writer = import_binary.BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgExecLegacyContentResponse();
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
    const message = createBaseMsgExecLegacyContentResponse();
    return message;
  },
  fromAmino(_) {
    const message = createBaseMsgExecLegacyContentResponse();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return MsgExecLegacyContentResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/v1/MsgExecLegacyContentResponse",
      value: MsgExecLegacyContentResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgExecLegacyContentResponse.decode(message.value);
  },
  toProto(message) {
    return MsgExecLegacyContentResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.gov.v1.MsgExecLegacyContentResponse",
      value: MsgExecLegacyContentResponse.encode(message).finish()
    };
  }
};
function createBaseMsgVote() {
  return {
    proposalId: BigInt(0),
    voter: "",
    option: 0,
    metadata: ""
  };
}
const MsgVote = {
  typeUrl: "/cosmos.gov.v1.MsgVote",
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
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
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
        case 4:
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
    const message = createBaseMsgVote();
    message.proposalId = object.proposalId !== void 0 && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
    message.voter = object.voter ?? "";
    message.option = object.option ?? 0;
    message.metadata = object.metadata ?? "";
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
    if (object.metadata !== void 0 && object.metadata !== null) {
      message.metadata = object.metadata;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.proposal_id = message.proposalId ? message.proposalId?.toString() : "0";
    obj.voter = message.voter === "" ? void 0 : message.voter;
    obj.option = message.option === 0 ? void 0 : message.option;
    obj.metadata = message.metadata === "" ? void 0 : message.metadata;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgVote.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/v1/MsgVote",
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
      typeUrl: "/cosmos.gov.v1.MsgVote",
      value: MsgVote.encode(message).finish()
    };
  }
};
function createBaseMsgVoteResponse() {
  return {};
}
const MsgVoteResponse = {
  typeUrl: "/cosmos.gov.v1.MsgVoteResponse",
  encode(_, writer = import_binary.BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
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
      type: "cosmos-sdk/v1/MsgVoteResponse",
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
      typeUrl: "/cosmos.gov.v1.MsgVoteResponse",
      value: MsgVoteResponse.encode(message).finish()
    };
  }
};
function createBaseMsgVoteWeighted() {
  return {
    proposalId: BigInt(0),
    voter: "",
    options: [],
    metadata: ""
  };
}
const MsgVoteWeighted = {
  typeUrl: "/cosmos.gov.v1.MsgVoteWeighted",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.voter !== "") {
      writer.uint32(18).string(message.voter);
    }
    for (const v of message.options) {
      import_gov.WeightedVoteOption.encode(v, writer.uint32(26).fork()).ldelim();
    }
    if (message.metadata !== "") {
      writer.uint32(34).string(message.metadata);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
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
          message.options.push(import_gov.WeightedVoteOption.decode(reader, reader.uint32()));
          break;
        case 4:
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
    const message = createBaseMsgVoteWeighted();
    message.proposalId = object.proposalId !== void 0 && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
    message.voter = object.voter ?? "";
    message.options = object.options?.map((e) => import_gov.WeightedVoteOption.fromPartial(e)) || [];
    message.metadata = object.metadata ?? "";
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
    message.options = object.options?.map((e) => import_gov.WeightedVoteOption.fromAmino(e)) || [];
    if (object.metadata !== void 0 && object.metadata !== null) {
      message.metadata = object.metadata;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.proposal_id = message.proposalId ? message.proposalId?.toString() : "0";
    obj.voter = message.voter === "" ? void 0 : message.voter;
    if (message.options) {
      obj.options = message.options.map((e) => e ? import_gov.WeightedVoteOption.toAmino(e) : void 0);
    } else {
      obj.options = message.options;
    }
    obj.metadata = message.metadata === "" ? void 0 : message.metadata;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgVoteWeighted.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/v1/MsgVoteWeighted",
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
      typeUrl: "/cosmos.gov.v1.MsgVoteWeighted",
      value: MsgVoteWeighted.encode(message).finish()
    };
  }
};
function createBaseMsgVoteWeightedResponse() {
  return {};
}
const MsgVoteWeightedResponse = {
  typeUrl: "/cosmos.gov.v1.MsgVoteWeightedResponse",
  encode(_, writer = import_binary.BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
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
      type: "cosmos-sdk/v1/MsgVoteWeightedResponse",
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
      typeUrl: "/cosmos.gov.v1.MsgVoteWeightedResponse",
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
  typeUrl: "/cosmos.gov.v1.MsgDeposit",
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
    const message = createBaseMsgDeposit();
    message.proposalId = object.proposalId !== void 0 && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
    message.depositor = object.depositor ?? "";
    message.amount = object.amount?.map((e) => import_coin.Coin.fromPartial(e)) || [];
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
    message.amount = object.amount?.map((e) => import_coin.Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.proposal_id = message.proposalId ? message.proposalId?.toString() : "0";
    obj.depositor = message.depositor === "" ? void 0 : message.depositor;
    if (message.amount) {
      obj.amount = message.amount.map((e) => e ? import_coin.Coin.toAmino(e) : void 0);
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
      type: "cosmos-sdk/v1/MsgDeposit",
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
      typeUrl: "/cosmos.gov.v1.MsgDeposit",
      value: MsgDeposit.encode(message).finish()
    };
  }
};
function createBaseMsgDepositResponse() {
  return {};
}
const MsgDepositResponse = {
  typeUrl: "/cosmos.gov.v1.MsgDepositResponse",
  encode(_, writer = import_binary.BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
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
      type: "cosmos-sdk/v1/MsgDepositResponse",
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
      typeUrl: "/cosmos.gov.v1.MsgDepositResponse",
      value: MsgDepositResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateParams() {
  return {
    authority: "",
    params: import_gov.Params.fromPartial({})
  };
}
const MsgUpdateParams = {
  typeUrl: "/cosmos.gov.v1.MsgUpdateParams",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== void 0) {
      import_gov.Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.params = import_gov.Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgUpdateParams();
    message.authority = object.authority ?? "";
    message.params = object.params !== void 0 && object.params !== null ? import_gov.Params.fromPartial(object.params) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgUpdateParams();
    if (object.authority !== void 0 && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.params !== void 0 && object.params !== null) {
      message.params = import_gov.Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.authority = message.authority === "" ? void 0 : message.authority;
    obj.params = message.params ? import_gov.Params.toAmino(message.params) : import_gov.Params.toAmino(import_gov.Params.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object) {
    return MsgUpdateParams.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/x/gov/v1/MsgUpdateParams",
      value: MsgUpdateParams.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgUpdateParams.decode(message.value);
  },
  toProto(message) {
    return MsgUpdateParams.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.gov.v1.MsgUpdateParams",
      value: MsgUpdateParams.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateParamsResponse() {
  return {};
}
const MsgUpdateParamsResponse = {
  typeUrl: "/cosmos.gov.v1.MsgUpdateParamsResponse",
  encode(_, writer = import_binary.BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParamsResponse();
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
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  fromAmino(_) {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return MsgUpdateParamsResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/v1/MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgUpdateParamsResponse.decode(message.value);
  },
  toProto(message) {
    return MsgUpdateParamsResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.gov.v1.MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.encode(message).finish()
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
      return import_gov2.TextProposal.decode(data.value);
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
    case "cosmos-sdk/v1/CommunityPoolSpendProposal":
      return import_any.Any.fromPartial({
        typeUrl: "/cosmos.distribution.v1beta1.CommunityPoolSpendProposal",
        value: import_distribution.CommunityPoolSpendProposal.encode(import_distribution.CommunityPoolSpendProposal.fromPartial(import_distribution.CommunityPoolSpendProposal.fromAmino(content.value))).finish()
      });
    case "cosmos-sdk/v1/CommunityPoolSpendProposalWithDeposit":
      return import_any.Any.fromPartial({
        typeUrl: "/cosmos.distribution.v1beta1.CommunityPoolSpendProposalWithDeposit",
        value: import_distribution.CommunityPoolSpendProposalWithDeposit.encode(import_distribution.CommunityPoolSpendProposalWithDeposit.fromPartial(import_distribution.CommunityPoolSpendProposalWithDeposit.fromAmino(content.value))).finish()
      });
    case "cosmos-sdk/TextProposal":
      return import_any.Any.fromPartial({
        typeUrl: "/cosmos.gov.v1beta1.TextProposal",
        value: import_gov2.TextProposal.encode(import_gov2.TextProposal.fromPartial(import_gov2.TextProposal.fromAmino(content.value))).finish()
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
        type: "cosmos-sdk/v1/CommunityPoolSpendProposal",
        value: import_distribution.CommunityPoolSpendProposal.toAmino(import_distribution.CommunityPoolSpendProposal.decode(content.value, void 0))
      };
    case "/cosmos.distribution.v1beta1.CommunityPoolSpendProposalWithDeposit":
      return {
        type: "cosmos-sdk/v1/CommunityPoolSpendProposalWithDeposit",
        value: import_distribution.CommunityPoolSpendProposalWithDeposit.toAmino(import_distribution.CommunityPoolSpendProposalWithDeposit.decode(content.value, void 0))
      };
    case "/cosmos.gov.v1beta1.TextProposal":
      return {
        type: "cosmos-sdk/TextProposal",
        value: import_gov2.TextProposal.toAmino(import_gov2.TextProposal.decode(content.value, void 0))
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
// Removed broken CommonJS export annotation
