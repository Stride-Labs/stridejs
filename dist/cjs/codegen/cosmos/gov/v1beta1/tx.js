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
  Content_FromAmino: () => Content_FromAmino,
  Content_InterfaceDecoder: () => Content_InterfaceDecoder,
  Content_ToAmino: () => Content_ToAmino,
  MsgDeposit: () => MsgDeposit,
  MsgDepositResponse: () => MsgDepositResponse,
  MsgSubmitProposal: () => MsgSubmitProposal,
  MsgSubmitProposalResponse: () => MsgSubmitProposalResponse,
  MsgVote: () => MsgVote,
  MsgVoteResponse: () => MsgVoteResponse,
  MsgVoteWeighted: () => MsgVoteWeighted,
  MsgVoteWeightedResponse: () => MsgVoteWeightedResponse
});
module.exports = __toCommonJS(tx_exports);
var import_any = require("../../../google/protobuf/any");
var import_coin = require("../../base/v1beta1/coin");
var import_gov = require("./gov");
var import_binary = require("../../../binary");
function createBaseMsgSubmitProposal() {
  return {
    content: void 0,
    initialDeposit: [],
    proposer: ""
  };
}
const MsgSubmitProposal = {
  typeUrl: "/cosmos.gov.v1beta1.MsgSubmitProposal",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.content !== void 0) {
      import_any.Any.encode(message.content, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.initialDeposit) {
      import_coin.Coin.encode(v, writer.uint32(18).fork()).ldelim();
    }
    if (message.proposer !== "") {
      writer.uint32(26).string(message.proposer);
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
          message.content = Content_InterfaceDecoder(reader);
          break;
        case 2:
          message.initialDeposit.push(import_coin.Coin.decode(reader, reader.uint32()));
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
    message.content = object.content !== void 0 && object.content !== null ? import_any.Any.fromPartial(object.content) : void 0;
    message.initialDeposit = object.initialDeposit?.map((e) => import_coin.Coin.fromPartial(e)) || [];
    message.proposer = object.proposer ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgSubmitProposal();
    if (object.content !== void 0 && object.content !== null) {
      message.content = Content_FromAmino(object.content);
    }
    message.initialDeposit = object.initial_deposit?.map((e) => import_coin.Coin.fromAmino(e)) || [];
    if (object.proposer !== void 0 && object.proposer !== null) {
      message.proposer = object.proposer;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.content = message.content ? Content_ToAmino(message.content) : void 0;
    if (message.initialDeposit) {
      obj.initial_deposit = message.initialDeposit.map((e) => e ? import_coin.Coin.toAmino(e) : void 0);
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
    obj.proposal_id = message.proposalId ? message.proposalId.toString() : "0";
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
    obj.proposal_id = message.proposalId ? message.proposalId.toString() : "0";
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
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.proposal_id = message.proposalId !== BigInt(0) ? message.proposalId.toString() : void 0;
    obj.voter = message.voter === "" ? void 0 : message.voter;
    if (message.options) {
      obj.options = message.options.map((e) => e ? import_gov.WeightedVoteOption.toAmino(e) : void 0);
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
    obj.proposal_id = message.proposalId ? message.proposalId.toString() : "0";
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
const Content_InterfaceDecoder = (input) => {
  const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
  const data = import_any.Any.decode(reader, reader.uint32());
  switch (data.typeUrl) {
    case "/cosmos.gov.v1beta1.TextProposal":
      return import_gov.TextProposal.decode(data.value);
    default:
      return data;
  }
};
const Content_FromAmino = (content) => {
  switch (content.type) {
    case "cosmos-sdk/TextProposal":
      return import_any.Any.fromPartial({
        typeUrl: "/cosmos.gov.v1beta1.TextProposal",
        value: import_gov.TextProposal.encode(import_gov.TextProposal.fromPartial(import_gov.TextProposal.fromAmino(content.value))).finish()
      });
    default:
      return import_any.Any.fromAmino(content);
  }
};
const Content_ToAmino = (content) => {
  switch (content.typeUrl) {
    case "/cosmos.gov.v1beta1.TextProposal":
      return {
        type: "cosmos-sdk/TextProposal",
        value: import_gov.TextProposal.toAmino(import_gov.TextProposal.decode(content.value, void 0))
      };
    default:
      return import_any.Any.toAmino(content);
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Content_FromAmino,
  Content_InterfaceDecoder,
  Content_ToAmino,
  MsgDeposit,
  MsgDepositResponse,
  MsgSubmitProposal,
  MsgSubmitProposalResponse,
  MsgVote,
  MsgVoteResponse,
  MsgVoteWeighted,
  MsgVoteWeightedResponse
});
