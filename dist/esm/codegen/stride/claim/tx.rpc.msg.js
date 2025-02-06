import { BinaryReader } from "../../binary";
import { MsgSetAirdropAllocations, MsgSetAirdropAllocationsResponse, MsgClaimFreeAmount, MsgClaimFreeAmountResponse, MsgCreateAirdrop, MsgCreateAirdropResponse, MsgDeleteAirdrop, MsgDeleteAirdropResponse } from "./tx";
class MsgClientImpl {
  rpc;
  constructor(rpc) {
    this.rpc = rpc;
    this.setAirdropAllocations = this.setAirdropAllocations.bind(this);
    this.claimFreeAmount = this.claimFreeAmount.bind(this);
    this.createAirdrop = this.createAirdrop.bind(this);
    this.deleteAirdrop = this.deleteAirdrop.bind(this);
  }
  setAirdropAllocations(request) {
    const data = MsgSetAirdropAllocations.encode(request).finish();
    const promise = this.rpc.request("stride.claim.Msg", "SetAirdropAllocations", data);
    return promise.then((data2) => MsgSetAirdropAllocationsResponse.decode(new BinaryReader(data2)));
  }
  claimFreeAmount(request) {
    const data = MsgClaimFreeAmount.encode(request).finish();
    const promise = this.rpc.request("stride.claim.Msg", "ClaimFreeAmount", data);
    return promise.then((data2) => MsgClaimFreeAmountResponse.decode(new BinaryReader(data2)));
  }
  createAirdrop(request) {
    const data = MsgCreateAirdrop.encode(request).finish();
    const promise = this.rpc.request("stride.claim.Msg", "CreateAirdrop", data);
    return promise.then((data2) => MsgCreateAirdropResponse.decode(new BinaryReader(data2)));
  }
  deleteAirdrop(request) {
    const data = MsgDeleteAirdrop.encode(request).finish();
    const promise = this.rpc.request("stride.claim.Msg", "DeleteAirdrop", data);
    return promise.then((data2) => MsgDeleteAirdropResponse.decode(new BinaryReader(data2)));
  }
}
export {
  MsgClientImpl
};
