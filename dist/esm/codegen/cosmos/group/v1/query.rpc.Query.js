import { BinaryReader } from "../../../binary";
import { createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryGroupInfoRequest, QueryGroupInfoResponse, QueryGroupPolicyInfoRequest, QueryGroupPolicyInfoResponse, QueryGroupMembersRequest, QueryGroupMembersResponse, QueryGroupsByAdminRequest, QueryGroupsByAdminResponse, QueryGroupPoliciesByGroupRequest, QueryGroupPoliciesByGroupResponse, QueryGroupPoliciesByAdminRequest, QueryGroupPoliciesByAdminResponse, QueryProposalRequest, QueryProposalResponse, QueryProposalsByGroupPolicyRequest, QueryProposalsByGroupPolicyResponse, QueryVoteByProposalVoterRequest, QueryVoteByProposalVoterResponse, QueryVotesByProposalRequest, QueryVotesByProposalResponse, QueryVotesByVoterRequest, QueryVotesByVoterResponse, QueryGroupsByMemberRequest, QueryGroupsByMemberResponse, QueryTallyResultRequest, QueryTallyResultResponse, QueryGroupsRequest, QueryGroupsResponse } from "./query";
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
    const data = QueryGroupInfoRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.group.v1.Query", "GroupInfo", data);
    return promise.then((data2) => QueryGroupInfoResponse.decode(new BinaryReader(data2)));
  }
  groupPolicyInfo(request) {
    const data = QueryGroupPolicyInfoRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.group.v1.Query", "GroupPolicyInfo", data);
    return promise.then((data2) => QueryGroupPolicyInfoResponse.decode(new BinaryReader(data2)));
  }
  groupMembers(request) {
    const data = QueryGroupMembersRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.group.v1.Query", "GroupMembers", data);
    return promise.then((data2) => QueryGroupMembersResponse.decode(new BinaryReader(data2)));
  }
  groupsByAdmin(request) {
    const data = QueryGroupsByAdminRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.group.v1.Query", "GroupsByAdmin", data);
    return promise.then((data2) => QueryGroupsByAdminResponse.decode(new BinaryReader(data2)));
  }
  groupPoliciesByGroup(request) {
    const data = QueryGroupPoliciesByGroupRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.group.v1.Query", "GroupPoliciesByGroup", data);
    return promise.then((data2) => QueryGroupPoliciesByGroupResponse.decode(new BinaryReader(data2)));
  }
  groupPoliciesByAdmin(request) {
    const data = QueryGroupPoliciesByAdminRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.group.v1.Query", "GroupPoliciesByAdmin", data);
    return promise.then((data2) => QueryGroupPoliciesByAdminResponse.decode(new BinaryReader(data2)));
  }
  proposal(request) {
    const data = QueryProposalRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.group.v1.Query", "Proposal", data);
    return promise.then((data2) => QueryProposalResponse.decode(new BinaryReader(data2)));
  }
  proposalsByGroupPolicy(request) {
    const data = QueryProposalsByGroupPolicyRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.group.v1.Query", "ProposalsByGroupPolicy", data);
    return promise.then((data2) => QueryProposalsByGroupPolicyResponse.decode(new BinaryReader(data2)));
  }
  voteByProposalVoter(request) {
    const data = QueryVoteByProposalVoterRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.group.v1.Query", "VoteByProposalVoter", data);
    return promise.then((data2) => QueryVoteByProposalVoterResponse.decode(new BinaryReader(data2)));
  }
  votesByProposal(request) {
    const data = QueryVotesByProposalRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.group.v1.Query", "VotesByProposal", data);
    return promise.then((data2) => QueryVotesByProposalResponse.decode(new BinaryReader(data2)));
  }
  votesByVoter(request) {
    const data = QueryVotesByVoterRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.group.v1.Query", "VotesByVoter", data);
    return promise.then((data2) => QueryVotesByVoterResponse.decode(new BinaryReader(data2)));
  }
  groupsByMember(request) {
    const data = QueryGroupsByMemberRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.group.v1.Query", "GroupsByMember", data);
    return promise.then((data2) => QueryGroupsByMemberResponse.decode(new BinaryReader(data2)));
  }
  tallyResult(request) {
    const data = QueryTallyResultRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.group.v1.Query", "TallyResult", data);
    return promise.then((data2) => QueryTallyResultResponse.decode(new BinaryReader(data2)));
  }
  groups(request = {
    pagination: void 0
  }) {
    const data = QueryGroupsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.group.v1.Query", "Groups", data);
    return promise.then((data2) => QueryGroupsResponse.decode(new BinaryReader(data2)));
  }
}
const createRpcQueryExtension = (base) => {
  const rpc = createProtobufRpcClient(base);
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
export {
  QueryClientImpl,
  createRpcQueryExtension
};
