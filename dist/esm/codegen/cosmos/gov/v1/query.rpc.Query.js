import { BinaryReader } from "../../../binary";
import { createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryProposalRequest, QueryProposalResponse, QueryProposalsRequest, QueryProposalsResponse, QueryVoteRequest, QueryVoteResponse, QueryVotesRequest, QueryVotesResponse, QueryParamsRequest, QueryParamsResponse, QueryDepositRequest, QueryDepositResponse, QueryDepositsRequest, QueryDepositsResponse, QueryTallyResultRequest, QueryTallyResultResponse } from "./query";
class QueryClientImpl {
  rpc;
  constructor(rpc) {
    this.rpc = rpc;
    this.proposal = this.proposal.bind(this);
    this.proposals = this.proposals.bind(this);
    this.vote = this.vote.bind(this);
    this.votes = this.votes.bind(this);
    this.params = this.params.bind(this);
    this.deposit = this.deposit.bind(this);
    this.deposits = this.deposits.bind(this);
    this.tallyResult = this.tallyResult.bind(this);
  }
  proposal(request) {
    const data = QueryProposalRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.gov.v1.Query", "Proposal", data);
    return promise.then((data2) => QueryProposalResponse.decode(new BinaryReader(data2)));
  }
  proposals(request) {
    const data = QueryProposalsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.gov.v1.Query", "Proposals", data);
    return promise.then((data2) => QueryProposalsResponse.decode(new BinaryReader(data2)));
  }
  vote(request) {
    const data = QueryVoteRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.gov.v1.Query", "Vote", data);
    return promise.then((data2) => QueryVoteResponse.decode(new BinaryReader(data2)));
  }
  votes(request) {
    const data = QueryVotesRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.gov.v1.Query", "Votes", data);
    return promise.then((data2) => QueryVotesResponse.decode(new BinaryReader(data2)));
  }
  params(request) {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.gov.v1.Query", "Params", data);
    return promise.then((data2) => QueryParamsResponse.decode(new BinaryReader(data2)));
  }
  deposit(request) {
    const data = QueryDepositRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.gov.v1.Query", "Deposit", data);
    return promise.then((data2) => QueryDepositResponse.decode(new BinaryReader(data2)));
  }
  deposits(request) {
    const data = QueryDepositsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.gov.v1.Query", "Deposits", data);
    return promise.then((data2) => QueryDepositsResponse.decode(new BinaryReader(data2)));
  }
  tallyResult(request) {
    const data = QueryTallyResultRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.gov.v1.Query", "TallyResult", data);
    return promise.then((data2) => QueryTallyResultResponse.decode(new BinaryReader(data2)));
  }
}
const createRpcQueryExtension = (base) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    proposal(request) {
      return queryService.proposal(request);
    },
    proposals(request) {
      return queryService.proposals(request);
    },
    vote(request) {
      return queryService.vote(request);
    },
    votes(request) {
      return queryService.votes(request);
    },
    params(request) {
      return queryService.params(request);
    },
    deposit(request) {
      return queryService.deposit(request);
    },
    deposits(request) {
      return queryService.deposits(request);
    },
    tallyResult(request) {
      return queryService.tallyResult(request);
    }
  };
};
export {
  QueryClientImpl,
  createRpcQueryExtension
};
