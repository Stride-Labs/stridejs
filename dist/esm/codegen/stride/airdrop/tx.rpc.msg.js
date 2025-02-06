import { BinaryReader } from "../../binary";
import { MsgClaimDaily, MsgClaimDailyResponse, MsgClaimEarly, MsgClaimEarlyResponse, MsgCreateAirdrop, MsgCreateAirdropResponse, MsgUpdateAirdrop, MsgUpdateAirdropResponse, MsgAddAllocations, MsgAddAllocationsResponse, MsgUpdateUserAllocation, MsgUpdateUserAllocationResponse, MsgLinkAddresses, MsgLinkAddressesResponse } from "./tx";
class MsgClientImpl {
  rpc;
  constructor(rpc) {
    this.rpc = rpc;
    this.claimDaily = this.claimDaily.bind(this);
    this.claimEarly = this.claimEarly.bind(this);
    this.createAirdrop = this.createAirdrop.bind(this);
    this.updateAirdrop = this.updateAirdrop.bind(this);
    this.addAllocations = this.addAllocations.bind(this);
    this.updateUserAllocation = this.updateUserAllocation.bind(this);
    this.linkAddresses = this.linkAddresses.bind(this);
  }
  claimDaily(request) {
    const data = MsgClaimDaily.encode(request).finish();
    const promise = this.rpc.request("stride.airdrop.Msg", "ClaimDaily", data);
    return promise.then((data2) => MsgClaimDailyResponse.decode(new BinaryReader(data2)));
  }
  claimEarly(request) {
    const data = MsgClaimEarly.encode(request).finish();
    const promise = this.rpc.request("stride.airdrop.Msg", "ClaimEarly", data);
    return promise.then((data2) => MsgClaimEarlyResponse.decode(new BinaryReader(data2)));
  }
  createAirdrop(request) {
    const data = MsgCreateAirdrop.encode(request).finish();
    const promise = this.rpc.request("stride.airdrop.Msg", "CreateAirdrop", data);
    return promise.then((data2) => MsgCreateAirdropResponse.decode(new BinaryReader(data2)));
  }
  updateAirdrop(request) {
    const data = MsgUpdateAirdrop.encode(request).finish();
    const promise = this.rpc.request("stride.airdrop.Msg", "UpdateAirdrop", data);
    return promise.then((data2) => MsgUpdateAirdropResponse.decode(new BinaryReader(data2)));
  }
  addAllocations(request) {
    const data = MsgAddAllocations.encode(request).finish();
    const promise = this.rpc.request("stride.airdrop.Msg", "AddAllocations", data);
    return promise.then((data2) => MsgAddAllocationsResponse.decode(new BinaryReader(data2)));
  }
  updateUserAllocation(request) {
    const data = MsgUpdateUserAllocation.encode(request).finish();
    const promise = this.rpc.request("stride.airdrop.Msg", "UpdateUserAllocation", data);
    return promise.then((data2) => MsgUpdateUserAllocationResponse.decode(new BinaryReader(data2)));
  }
  linkAddresses(request) {
    const data = MsgLinkAddresses.encode(request).finish();
    const promise = this.rpc.request("stride.airdrop.Msg", "LinkAddresses", data);
    return promise.then((data2) => MsgLinkAddressesResponse.decode(new BinaryReader(data2)));
  }
}
export {
  MsgClientImpl
};
