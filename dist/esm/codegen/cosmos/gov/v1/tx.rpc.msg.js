import { BinaryReader } from "../../../binary";
import { MsgSubmitProposal, MsgSubmitProposalResponse, MsgExecLegacyContent, MsgExecLegacyContentResponse, MsgVote, MsgVoteResponse, MsgVoteWeighted, MsgVoteWeightedResponse, MsgDeposit, MsgDepositResponse, MsgUpdateParams, MsgUpdateParamsResponse } from "./tx";
class MsgClientImpl {
  rpc;
  constructor(rpc) {
    this.rpc = rpc;
    this.submitProposal = this.submitProposal.bind(this);
    this.execLegacyContent = this.execLegacyContent.bind(this);
    this.vote = this.vote.bind(this);
    this.voteWeighted = this.voteWeighted.bind(this);
    this.deposit = this.deposit.bind(this);
    this.updateParams = this.updateParams.bind(this);
  }
  submitProposal(request) {
    const data = MsgSubmitProposal.encode(request).finish();
    const promise = this.rpc.request("cosmos.gov.v1.Msg", "SubmitProposal", data);
    return promise.then((data2) => MsgSubmitProposalResponse.decode(new BinaryReader(data2)));
  }
  execLegacyContent(request) {
    const data = MsgExecLegacyContent.encode(request).finish();
    const promise = this.rpc.request("cosmos.gov.v1.Msg", "ExecLegacyContent", data);
    return promise.then((data2) => MsgExecLegacyContentResponse.decode(new BinaryReader(data2)));
  }
  vote(request) {
    const data = MsgVote.encode(request).finish();
    const promise = this.rpc.request("cosmos.gov.v1.Msg", "Vote", data);
    return promise.then((data2) => MsgVoteResponse.decode(new BinaryReader(data2)));
  }
  voteWeighted(request) {
    const data = MsgVoteWeighted.encode(request).finish();
    const promise = this.rpc.request("cosmos.gov.v1.Msg", "VoteWeighted", data);
    return promise.then((data2) => MsgVoteWeightedResponse.decode(new BinaryReader(data2)));
  }
  deposit(request) {
    const data = MsgDeposit.encode(request).finish();
    const promise = this.rpc.request("cosmos.gov.v1.Msg", "Deposit", data);
    return promise.then((data2) => MsgDepositResponse.decode(new BinaryReader(data2)));
  }
  updateParams(request) {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("cosmos.gov.v1.Msg", "UpdateParams", data);
    return promise.then((data2) => MsgUpdateParamsResponse.decode(new BinaryReader(data2)));
  }
}
export {
  MsgClientImpl
};
