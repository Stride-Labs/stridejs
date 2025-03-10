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
var query_exports = {};
__export(query_exports, {
  QueryDepositRequest: () => QueryDepositRequest,
  QueryDepositResponse: () => QueryDepositResponse,
  QueryDepositsRequest: () => QueryDepositsRequest,
  QueryDepositsResponse: () => QueryDepositsResponse,
  QueryParamsRequest: () => QueryParamsRequest,
  QueryParamsResponse: () => QueryParamsResponse,
  QueryProposalRequest: () => QueryProposalRequest,
  QueryProposalResponse: () => QueryProposalResponse,
  QueryProposalsRequest: () => QueryProposalsRequest,
  QueryProposalsResponse: () => QueryProposalsResponse,
  QueryTallyResultRequest: () => QueryTallyResultRequest,
  QueryTallyResultResponse: () => QueryTallyResultResponse,
  QueryVoteRequest: () => QueryVoteRequest,
  QueryVoteResponse: () => QueryVoteResponse,
  QueryVotesRequest: () => QueryVotesRequest,
  QueryVotesResponse: () => QueryVotesResponse
});
module.exports = __toCommonJS(query_exports);
var import_gov = require("./gov");
var import_pagination = require("../../base/query/v1beta1/pagination");
var import_binary = require("../../../binary");
function createBaseQueryProposalRequest() {
  return {
    proposalId: BigInt(0)
  };
}
const QueryProposalRequest = {
  typeUrl: "/cosmos.gov.v1.QueryProposalRequest",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposalId);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryProposalRequest();
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
    const message = createBaseQueryProposalRequest();
    message.proposalId = object.proposalId !== void 0 && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryProposalRequest();
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
    return QueryProposalRequest.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/v1/QueryProposalRequest",
      value: QueryProposalRequest.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryProposalRequest.decode(message.value);
  },
  toProto(message) {
    return QueryProposalRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.gov.v1.QueryProposalRequest",
      value: QueryProposalRequest.encode(message).finish()
    };
  }
};
function createBaseQueryProposalResponse() {
  return {
    proposal: void 0
  };
}
const QueryProposalResponse = {
  typeUrl: "/cosmos.gov.v1.QueryProposalResponse",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.proposal !== void 0) {
      import_gov.Proposal.encode(message.proposal, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryProposalResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposal = import_gov.Proposal.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryProposalResponse();
    message.proposal = object.proposal !== void 0 && object.proposal !== null ? import_gov.Proposal.fromPartial(object.proposal) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryProposalResponse();
    if (object.proposal !== void 0 && object.proposal !== null) {
      message.proposal = import_gov.Proposal.fromAmino(object.proposal);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.proposal = message.proposal ? import_gov.Proposal.toAmino(message.proposal) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryProposalResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/v1/QueryProposalResponse",
      value: QueryProposalResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryProposalResponse.decode(message.value);
  },
  toProto(message) {
    return QueryProposalResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.gov.v1.QueryProposalResponse",
      value: QueryProposalResponse.encode(message).finish()
    };
  }
};
function createBaseQueryProposalsRequest() {
  return {
    proposalStatus: 0,
    voter: "",
    depositor: "",
    pagination: void 0
  };
}
const QueryProposalsRequest = {
  typeUrl: "/cosmos.gov.v1.QueryProposalsRequest",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.proposalStatus !== 0) {
      writer.uint32(8).int32(message.proposalStatus);
    }
    if (message.voter !== "") {
      writer.uint32(18).string(message.voter);
    }
    if (message.depositor !== "") {
      writer.uint32(26).string(message.depositor);
    }
    if (message.pagination !== void 0) {
      import_pagination.PageRequest.encode(message.pagination, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryProposalsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalStatus = reader.int32();
          break;
        case 2:
          message.voter = reader.string();
          break;
        case 3:
          message.depositor = reader.string();
          break;
        case 4:
          message.pagination = import_pagination.PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryProposalsRequest();
    message.proposalStatus = object.proposalStatus ?? 0;
    message.voter = object.voter ?? "";
    message.depositor = object.depositor ?? "";
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? import_pagination.PageRequest.fromPartial(object.pagination) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryProposalsRequest();
    if (object.proposal_status !== void 0 && object.proposal_status !== null) {
      message.proposalStatus = object.proposal_status;
    }
    if (object.voter !== void 0 && object.voter !== null) {
      message.voter = object.voter;
    }
    if (object.depositor !== void 0 && object.depositor !== null) {
      message.depositor = object.depositor;
    }
    if (object.pagination !== void 0 && object.pagination !== null) {
      message.pagination = import_pagination.PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.proposal_status = message.proposalStatus === 0 ? void 0 : message.proposalStatus;
    obj.voter = message.voter === "" ? void 0 : message.voter;
    obj.depositor = message.depositor === "" ? void 0 : message.depositor;
    obj.pagination = message.pagination ? import_pagination.PageRequest.toAmino(message.pagination) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryProposalsRequest.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/v1/QueryProposalsRequest",
      value: QueryProposalsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryProposalsRequest.decode(message.value);
  },
  toProto(message) {
    return QueryProposalsRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.gov.v1.QueryProposalsRequest",
      value: QueryProposalsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryProposalsResponse() {
  return {
    proposals: [],
    pagination: void 0
  };
}
const QueryProposalsResponse = {
  typeUrl: "/cosmos.gov.v1.QueryProposalsResponse",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    for (const v of message.proposals) {
      import_gov.Proposal.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== void 0) {
      import_pagination.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryProposalsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposals.push(import_gov.Proposal.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = import_pagination.PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryProposalsResponse();
    message.proposals = object.proposals?.map((e) => import_gov.Proposal.fromPartial(e)) || [];
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? import_pagination.PageResponse.fromPartial(object.pagination) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryProposalsResponse();
    message.proposals = object.proposals?.map((e) => import_gov.Proposal.fromAmino(e)) || [];
    if (object.pagination !== void 0 && object.pagination !== null) {
      message.pagination = import_pagination.PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.proposals) {
      obj.proposals = message.proposals.map((e) => e ? import_gov.Proposal.toAmino(e) : void 0);
    } else {
      obj.proposals = message.proposals;
    }
    obj.pagination = message.pagination ? import_pagination.PageResponse.toAmino(message.pagination) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryProposalsResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/v1/QueryProposalsResponse",
      value: QueryProposalsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryProposalsResponse.decode(message.value);
  },
  toProto(message) {
    return QueryProposalsResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.gov.v1.QueryProposalsResponse",
      value: QueryProposalsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryVoteRequest() {
  return {
    proposalId: BigInt(0),
    voter: ""
  };
}
const QueryVoteRequest = {
  typeUrl: "/cosmos.gov.v1.QueryVoteRequest",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.voter !== "") {
      writer.uint32(18).string(message.voter);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryVoteRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64();
          break;
        case 2:
          message.voter = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryVoteRequest();
    message.proposalId = object.proposalId !== void 0 && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
    message.voter = object.voter ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryVoteRequest();
    if (object.proposal_id !== void 0 && object.proposal_id !== null) {
      message.proposalId = BigInt(object.proposal_id);
    }
    if (object.voter !== void 0 && object.voter !== null) {
      message.voter = object.voter;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.proposal_id = message.proposalId !== BigInt(0) ? message.proposalId?.toString() : void 0;
    obj.voter = message.voter === "" ? void 0 : message.voter;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryVoteRequest.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/v1/QueryVoteRequest",
      value: QueryVoteRequest.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryVoteRequest.decode(message.value);
  },
  toProto(message) {
    return QueryVoteRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.gov.v1.QueryVoteRequest",
      value: QueryVoteRequest.encode(message).finish()
    };
  }
};
function createBaseQueryVoteResponse() {
  return {
    vote: void 0
  };
}
const QueryVoteResponse = {
  typeUrl: "/cosmos.gov.v1.QueryVoteResponse",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.vote !== void 0) {
      import_gov.Vote.encode(message.vote, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryVoteResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.vote = import_gov.Vote.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryVoteResponse();
    message.vote = object.vote !== void 0 && object.vote !== null ? import_gov.Vote.fromPartial(object.vote) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryVoteResponse();
    if (object.vote !== void 0 && object.vote !== null) {
      message.vote = import_gov.Vote.fromAmino(object.vote);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.vote = message.vote ? import_gov.Vote.toAmino(message.vote) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryVoteResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/v1/QueryVoteResponse",
      value: QueryVoteResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryVoteResponse.decode(message.value);
  },
  toProto(message) {
    return QueryVoteResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.gov.v1.QueryVoteResponse",
      value: QueryVoteResponse.encode(message).finish()
    };
  }
};
function createBaseQueryVotesRequest() {
  return {
    proposalId: BigInt(0),
    pagination: void 0
  };
}
const QueryVotesRequest = {
  typeUrl: "/cosmos.gov.v1.QueryVotesRequest",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.pagination !== void 0) {
      import_pagination.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryVotesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64();
          break;
        case 2:
          message.pagination = import_pagination.PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryVotesRequest();
    message.proposalId = object.proposalId !== void 0 && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? import_pagination.PageRequest.fromPartial(object.pagination) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryVotesRequest();
    if (object.proposal_id !== void 0 && object.proposal_id !== null) {
      message.proposalId = BigInt(object.proposal_id);
    }
    if (object.pagination !== void 0 && object.pagination !== null) {
      message.pagination = import_pagination.PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.proposal_id = message.proposalId !== BigInt(0) ? message.proposalId?.toString() : void 0;
    obj.pagination = message.pagination ? import_pagination.PageRequest.toAmino(message.pagination) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryVotesRequest.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/v1/QueryVotesRequest",
      value: QueryVotesRequest.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryVotesRequest.decode(message.value);
  },
  toProto(message) {
    return QueryVotesRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.gov.v1.QueryVotesRequest",
      value: QueryVotesRequest.encode(message).finish()
    };
  }
};
function createBaseQueryVotesResponse() {
  return {
    votes: [],
    pagination: void 0
  };
}
const QueryVotesResponse = {
  typeUrl: "/cosmos.gov.v1.QueryVotesResponse",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    for (const v of message.votes) {
      import_gov.Vote.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== void 0) {
      import_pagination.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryVotesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.votes.push(import_gov.Vote.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = import_pagination.PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryVotesResponse();
    message.votes = object.votes?.map((e) => import_gov.Vote.fromPartial(e)) || [];
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? import_pagination.PageResponse.fromPartial(object.pagination) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryVotesResponse();
    message.votes = object.votes?.map((e) => import_gov.Vote.fromAmino(e)) || [];
    if (object.pagination !== void 0 && object.pagination !== null) {
      message.pagination = import_pagination.PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.votes) {
      obj.votes = message.votes.map((e) => e ? import_gov.Vote.toAmino(e) : void 0);
    } else {
      obj.votes = message.votes;
    }
    obj.pagination = message.pagination ? import_pagination.PageResponse.toAmino(message.pagination) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryVotesResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/v1/QueryVotesResponse",
      value: QueryVotesResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryVotesResponse.decode(message.value);
  },
  toProto(message) {
    return QueryVotesResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.gov.v1.QueryVotesResponse",
      value: QueryVotesResponse.encode(message).finish()
    };
  }
};
function createBaseQueryParamsRequest() {
  return {
    paramsType: ""
  };
}
const QueryParamsRequest = {
  typeUrl: "/cosmos.gov.v1.QueryParamsRequest",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.paramsType !== "") {
      writer.uint32(10).string(message.paramsType);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.paramsType = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryParamsRequest();
    message.paramsType = object.paramsType ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryParamsRequest();
    if (object.params_type !== void 0 && object.params_type !== null) {
      message.paramsType = object.params_type;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.params_type = message.paramsType === "" ? void 0 : message.paramsType;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryParamsRequest.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/v1/QueryParamsRequest",
      value: QueryParamsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryParamsRequest.decode(message.value);
  },
  toProto(message) {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.gov.v1.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryParamsResponse() {
  return {
    votingParams: void 0,
    depositParams: void 0,
    tallyParams: void 0,
    params: void 0
  };
}
const QueryParamsResponse = {
  typeUrl: "/cosmos.gov.v1.QueryParamsResponse",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.votingParams !== void 0) {
      import_gov.VotingParams.encode(message.votingParams, writer.uint32(10).fork()).ldelim();
    }
    if (message.depositParams !== void 0) {
      import_gov.DepositParams.encode(message.depositParams, writer.uint32(18).fork()).ldelim();
    }
    if (message.tallyParams !== void 0) {
      import_gov.TallyParams.encode(message.tallyParams, writer.uint32(26).fork()).ldelim();
    }
    if (message.params !== void 0) {
      import_gov.Params.encode(message.params, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.votingParams = import_gov.VotingParams.decode(reader, reader.uint32());
          break;
        case 2:
          message.depositParams = import_gov.DepositParams.decode(reader, reader.uint32());
          break;
        case 3:
          message.tallyParams = import_gov.TallyParams.decode(reader, reader.uint32());
          break;
        case 4:
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
    const message = createBaseQueryParamsResponse();
    message.votingParams = object.votingParams !== void 0 && object.votingParams !== null ? import_gov.VotingParams.fromPartial(object.votingParams) : void 0;
    message.depositParams = object.depositParams !== void 0 && object.depositParams !== null ? import_gov.DepositParams.fromPartial(object.depositParams) : void 0;
    message.tallyParams = object.tallyParams !== void 0 && object.tallyParams !== null ? import_gov.TallyParams.fromPartial(object.tallyParams) : void 0;
    message.params = object.params !== void 0 && object.params !== null ? import_gov.Params.fromPartial(object.params) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryParamsResponse();
    if (object.voting_params !== void 0 && object.voting_params !== null) {
      message.votingParams = import_gov.VotingParams.fromAmino(object.voting_params);
    }
    if (object.deposit_params !== void 0 && object.deposit_params !== null) {
      message.depositParams = import_gov.DepositParams.fromAmino(object.deposit_params);
    }
    if (object.tally_params !== void 0 && object.tally_params !== null) {
      message.tallyParams = import_gov.TallyParams.fromAmino(object.tally_params);
    }
    if (object.params !== void 0 && object.params !== null) {
      message.params = import_gov.Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.voting_params = message.votingParams ? import_gov.VotingParams.toAmino(message.votingParams) : void 0;
    obj.deposit_params = message.depositParams ? import_gov.DepositParams.toAmino(message.depositParams) : void 0;
    obj.tally_params = message.tallyParams ? import_gov.TallyParams.toAmino(message.tallyParams) : void 0;
    obj.params = message.params ? import_gov.Params.toAmino(message.params) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryParamsResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/v1/QueryParamsResponse",
      value: QueryParamsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message) {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.gov.v1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryDepositRequest() {
  return {
    proposalId: BigInt(0),
    depositor: ""
  };
}
const QueryDepositRequest = {
  typeUrl: "/cosmos.gov.v1.QueryDepositRequest",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.depositor !== "") {
      writer.uint32(18).string(message.depositor);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryDepositRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64();
          break;
        case 2:
          message.depositor = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryDepositRequest();
    message.proposalId = object.proposalId !== void 0 && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
    message.depositor = object.depositor ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryDepositRequest();
    if (object.proposal_id !== void 0 && object.proposal_id !== null) {
      message.proposalId = BigInt(object.proposal_id);
    }
    if (object.depositor !== void 0 && object.depositor !== null) {
      message.depositor = object.depositor;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.proposal_id = message.proposalId !== BigInt(0) ? message.proposalId?.toString() : void 0;
    obj.depositor = message.depositor === "" ? void 0 : message.depositor;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryDepositRequest.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/v1/QueryDepositRequest",
      value: QueryDepositRequest.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryDepositRequest.decode(message.value);
  },
  toProto(message) {
    return QueryDepositRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.gov.v1.QueryDepositRequest",
      value: QueryDepositRequest.encode(message).finish()
    };
  }
};
function createBaseQueryDepositResponse() {
  return {
    deposit: void 0
  };
}
const QueryDepositResponse = {
  typeUrl: "/cosmos.gov.v1.QueryDepositResponse",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.deposit !== void 0) {
      import_gov.Deposit.encode(message.deposit, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryDepositResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.deposit = import_gov.Deposit.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryDepositResponse();
    message.deposit = object.deposit !== void 0 && object.deposit !== null ? import_gov.Deposit.fromPartial(object.deposit) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryDepositResponse();
    if (object.deposit !== void 0 && object.deposit !== null) {
      message.deposit = import_gov.Deposit.fromAmino(object.deposit);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.deposit = message.deposit ? import_gov.Deposit.toAmino(message.deposit) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryDepositResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/v1/QueryDepositResponse",
      value: QueryDepositResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryDepositResponse.decode(message.value);
  },
  toProto(message) {
    return QueryDepositResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.gov.v1.QueryDepositResponse",
      value: QueryDepositResponse.encode(message).finish()
    };
  }
};
function createBaseQueryDepositsRequest() {
  return {
    proposalId: BigInt(0),
    pagination: void 0
  };
}
const QueryDepositsRequest = {
  typeUrl: "/cosmos.gov.v1.QueryDepositsRequest",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.pagination !== void 0) {
      import_pagination.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryDepositsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64();
          break;
        case 2:
          message.pagination = import_pagination.PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryDepositsRequest();
    message.proposalId = object.proposalId !== void 0 && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? import_pagination.PageRequest.fromPartial(object.pagination) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryDepositsRequest();
    if (object.proposal_id !== void 0 && object.proposal_id !== null) {
      message.proposalId = BigInt(object.proposal_id);
    }
    if (object.pagination !== void 0 && object.pagination !== null) {
      message.pagination = import_pagination.PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.proposal_id = message.proposalId !== BigInt(0) ? message.proposalId?.toString() : void 0;
    obj.pagination = message.pagination ? import_pagination.PageRequest.toAmino(message.pagination) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryDepositsRequest.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/v1/QueryDepositsRequest",
      value: QueryDepositsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryDepositsRequest.decode(message.value);
  },
  toProto(message) {
    return QueryDepositsRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.gov.v1.QueryDepositsRequest",
      value: QueryDepositsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryDepositsResponse() {
  return {
    deposits: [],
    pagination: void 0
  };
}
const QueryDepositsResponse = {
  typeUrl: "/cosmos.gov.v1.QueryDepositsResponse",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    for (const v of message.deposits) {
      import_gov.Deposit.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== void 0) {
      import_pagination.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryDepositsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.deposits.push(import_gov.Deposit.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = import_pagination.PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryDepositsResponse();
    message.deposits = object.deposits?.map((e) => import_gov.Deposit.fromPartial(e)) || [];
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? import_pagination.PageResponse.fromPartial(object.pagination) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryDepositsResponse();
    message.deposits = object.deposits?.map((e) => import_gov.Deposit.fromAmino(e)) || [];
    if (object.pagination !== void 0 && object.pagination !== null) {
      message.pagination = import_pagination.PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.deposits) {
      obj.deposits = message.deposits.map((e) => e ? import_gov.Deposit.toAmino(e) : void 0);
    } else {
      obj.deposits = message.deposits;
    }
    obj.pagination = message.pagination ? import_pagination.PageResponse.toAmino(message.pagination) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryDepositsResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/v1/QueryDepositsResponse",
      value: QueryDepositsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryDepositsResponse.decode(message.value);
  },
  toProto(message) {
    return QueryDepositsResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.gov.v1.QueryDepositsResponse",
      value: QueryDepositsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryTallyResultRequest() {
  return {
    proposalId: BigInt(0)
  };
}
const QueryTallyResultRequest = {
  typeUrl: "/cosmos.gov.v1.QueryTallyResultRequest",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposalId);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryTallyResultRequest();
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
    const message = createBaseQueryTallyResultRequest();
    message.proposalId = object.proposalId !== void 0 && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryTallyResultRequest();
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
    return QueryTallyResultRequest.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/v1/QueryTallyResultRequest",
      value: QueryTallyResultRequest.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryTallyResultRequest.decode(message.value);
  },
  toProto(message) {
    return QueryTallyResultRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.gov.v1.QueryTallyResultRequest",
      value: QueryTallyResultRequest.encode(message).finish()
    };
  }
};
function createBaseQueryTallyResultResponse() {
  return {
    tally: void 0
  };
}
const QueryTallyResultResponse = {
  typeUrl: "/cosmos.gov.v1.QueryTallyResultResponse",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.tally !== void 0) {
      import_gov.TallyResult.encode(message.tally, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryTallyResultResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tally = import_gov.TallyResult.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryTallyResultResponse();
    message.tally = object.tally !== void 0 && object.tally !== null ? import_gov.TallyResult.fromPartial(object.tally) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryTallyResultResponse();
    if (object.tally !== void 0 && object.tally !== null) {
      message.tally = import_gov.TallyResult.fromAmino(object.tally);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.tally = message.tally ? import_gov.TallyResult.toAmino(message.tally) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryTallyResultResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/v1/QueryTallyResultResponse",
      value: QueryTallyResultResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryTallyResultResponse.decode(message.value);
  },
  toProto(message) {
    return QueryTallyResultResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.gov.v1.QueryTallyResultResponse",
      value: QueryTallyResultResponse.encode(message).finish()
    };
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  QueryDepositRequest,
  QueryDepositResponse,
  QueryDepositsRequest,
  QueryDepositsResponse,
  QueryParamsRequest,
  QueryParamsResponse,
  QueryProposalRequest,
  QueryProposalResponse,
  QueryProposalsRequest,
  QueryProposalsResponse,
  QueryTallyResultRequest,
  QueryTallyResultResponse,
  QueryVoteRequest,
  QueryVoteResponse,
  QueryVotesRequest,
  QueryVotesResponse
});
