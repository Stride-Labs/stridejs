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
var query_rpc_Query_exports = {};
__export(query_rpc_Query_exports, {
  QueryClientImpl: () => QueryClientImpl,
  createRpcQueryExtension: () => createRpcQueryExtension
});
module.exports = __toCommonJS(query_rpc_Query_exports);
var import_binary = require("../../../binary");
var import_stargate = require("@cosmjs/stargate");
var import_query = require("./query");
class QueryClientImpl {
  rpc;
  constructor(rpc) {
    this.rpc = rpc;
    this.groupInfo = this.groupInfo.bind(this);
    this.groupPolicyInfo = this.groupPolicyInfo.bind(this);
    this.groupMembers = this.groupMembers.bind(this);
    this.groupsByAdmin = this.groupsByAdmin.bind(this);
    this.groupPoliciesByGroup = this.groupPoliciesByGroup.bind(this);
    this.groupPoliciesByAdmin = this.groupPoliciesByAdmin.bind(this);
    this.proposal = this.proposal.bind(this);
    this.proposalsByGroupPolicy = this.proposalsByGroupPolicy.bind(this);
    this.voteByProposalVoter = this.voteByProposalVoter.bind(this);
    this.votesByProposal = this.votesByProposal.bind(this);
    this.votesByVoter = this.votesByVoter.bind(this);
    this.groupsByMember = this.groupsByMember.bind(this);
    this.tallyResult = this.tallyResult.bind(this);
    this.groups = this.groups.bind(this);
  }
  groupInfo(request) {
    const data = import_query.QueryGroupInfoRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.group.v1.Query", "GroupInfo", data);
    return promise.then((data2) => import_query.QueryGroupInfoResponse.decode(new import_binary.BinaryReader(data2)));
  }
  groupPolicyInfo(request) {
    const data = import_query.QueryGroupPolicyInfoRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.group.v1.Query", "GroupPolicyInfo", data);
    return promise.then((data2) => import_query.QueryGroupPolicyInfoResponse.decode(new import_binary.BinaryReader(data2)));
  }
  groupMembers(request) {
    const data = import_query.QueryGroupMembersRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.group.v1.Query", "GroupMembers", data);
    return promise.then((data2) => import_query.QueryGroupMembersResponse.decode(new import_binary.BinaryReader(data2)));
  }
  groupsByAdmin(request) {
    const data = import_query.QueryGroupsByAdminRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.group.v1.Query", "GroupsByAdmin", data);
    return promise.then((data2) => import_query.QueryGroupsByAdminResponse.decode(new import_binary.BinaryReader(data2)));
  }
  groupPoliciesByGroup(request) {
    const data = import_query.QueryGroupPoliciesByGroupRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.group.v1.Query", "GroupPoliciesByGroup", data);
    return promise.then((data2) => import_query.QueryGroupPoliciesByGroupResponse.decode(new import_binary.BinaryReader(data2)));
  }
  groupPoliciesByAdmin(request) {
    const data = import_query.QueryGroupPoliciesByAdminRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.group.v1.Query", "GroupPoliciesByAdmin", data);
    return promise.then((data2) => import_query.QueryGroupPoliciesByAdminResponse.decode(new import_binary.BinaryReader(data2)));
  }
  proposal(request) {
    const data = import_query.QueryProposalRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.group.v1.Query", "Proposal", data);
    return promise.then((data2) => import_query.QueryProposalResponse.decode(new import_binary.BinaryReader(data2)));
  }
  proposalsByGroupPolicy(request) {
    const data = import_query.QueryProposalsByGroupPolicyRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.group.v1.Query", "ProposalsByGroupPolicy", data);
    return promise.then((data2) => import_query.QueryProposalsByGroupPolicyResponse.decode(new import_binary.BinaryReader(data2)));
  }
  voteByProposalVoter(request) {
    const data = import_query.QueryVoteByProposalVoterRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.group.v1.Query", "VoteByProposalVoter", data);
    return promise.then((data2) => import_query.QueryVoteByProposalVoterResponse.decode(new import_binary.BinaryReader(data2)));
  }
  votesByProposal(request) {
    const data = import_query.QueryVotesByProposalRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.group.v1.Query", "VotesByProposal", data);
    return promise.then((data2) => import_query.QueryVotesByProposalResponse.decode(new import_binary.BinaryReader(data2)));
  }
  votesByVoter(request) {
    const data = import_query.QueryVotesByVoterRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.group.v1.Query", "VotesByVoter", data);
    return promise.then((data2) => import_query.QueryVotesByVoterResponse.decode(new import_binary.BinaryReader(data2)));
  }
  groupsByMember(request) {
    const data = import_query.QueryGroupsByMemberRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.group.v1.Query", "GroupsByMember", data);
    return promise.then((data2) => import_query.QueryGroupsByMemberResponse.decode(new import_binary.BinaryReader(data2)));
  }
  tallyResult(request) {
    const data = import_query.QueryTallyResultRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.group.v1.Query", "TallyResult", data);
    return promise.then((data2) => import_query.QueryTallyResultResponse.decode(new import_binary.BinaryReader(data2)));
  }
  groups(request = {
    pagination: void 0
  }) {
    const data = import_query.QueryGroupsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.group.v1.Query", "Groups", data);
    return promise.then((data2) => import_query.QueryGroupsResponse.decode(new import_binary.BinaryReader(data2)));
  }
}
const createRpcQueryExtension = (base) => {
  const rpc = (0, import_stargate.createProtobufRpcClient)(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    groupInfo(request) {
      return queryService.groupInfo(request);
    },
    groupPolicyInfo(request) {
      return queryService.groupPolicyInfo(request);
    },
    groupMembers(request) {
      return queryService.groupMembers(request);
    },
    groupsByAdmin(request) {
      return queryService.groupsByAdmin(request);
    },
    groupPoliciesByGroup(request) {
      return queryService.groupPoliciesByGroup(request);
    },
    groupPoliciesByAdmin(request) {
      return queryService.groupPoliciesByAdmin(request);
    },
    proposal(request) {
      return queryService.proposal(request);
    },
    proposalsByGroupPolicy(request) {
      return queryService.proposalsByGroupPolicy(request);
    },
    voteByProposalVoter(request) {
      return queryService.voteByProposalVoter(request);
    },
    votesByProposal(request) {
      return queryService.votesByProposal(request);
    },
    votesByVoter(request) {
      return queryService.votesByVoter(request);
    },
    groupsByMember(request) {
      return queryService.groupsByMember(request);
    },
    tallyResult(request) {
      return queryService.tallyResult(request);
    },
    groups(request) {
      return queryService.groups(request);
    }
  };
};
// Proper CommonJS exports for dynamic imports
module.exports = {
  QueryClientImpl,
  createRpcQueryExtension
};
