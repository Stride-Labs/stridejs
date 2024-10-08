import { TxRpc } from "../../types";
import { BinaryReader } from "../../binary";
import { MsgClaimDaily, MsgClaimDailyResponse, MsgClaimEarly, MsgClaimEarlyResponse, MsgCreateAirdrop, MsgCreateAirdropResponse, MsgUpdateAirdrop, MsgUpdateAirdropResponse, MsgAddAllocations, MsgAddAllocationsResponse, MsgUpdateUserAllocation, MsgUpdateUserAllocationResponse, MsgLinkAddresses, MsgLinkAddressesResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
  /** User transaction to claim all the pending daily airdrop rewards */
  claimDaily(request: MsgClaimDaily): Promise<MsgClaimDailyResponse>;
  /**
   * User transaction to claim a portion of their total amount now, and forfeit
   * the remainder to be clawed back
   */
  claimEarly(request: MsgClaimEarly): Promise<MsgClaimEarlyResponse>;
  /** Admin transaction to create a new airdrop */
  createAirdrop(request: MsgCreateAirdrop): Promise<MsgCreateAirdropResponse>;
  /** Admin transaction to update an existing airdrop */
  updateAirdrop(request: MsgUpdateAirdrop): Promise<MsgUpdateAirdropResponse>;
  /** Admin transaction to add multiple user allocations for a given airdrop */
  addAllocations(request: MsgAddAllocations): Promise<MsgAddAllocationsResponse>;
  /** Admin transaction to update a user's allocation to an airdrop */
  updateUserAllocation(request: MsgUpdateUserAllocation): Promise<MsgUpdateUserAllocationResponse>;
  /**
   * Admin address to link a stride and non-stride address, merging their
   * allocations
   */
  linkAddresses(request: MsgLinkAddresses): Promise<MsgLinkAddressesResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
    this.claimDaily = this.claimDaily.bind(this);
    this.claimEarly = this.claimEarly.bind(this);
    this.createAirdrop = this.createAirdrop.bind(this);
    this.updateAirdrop = this.updateAirdrop.bind(this);
    this.addAllocations = this.addAllocations.bind(this);
    this.updateUserAllocation = this.updateUserAllocation.bind(this);
    this.linkAddresses = this.linkAddresses.bind(this);
  }
  claimDaily(request: MsgClaimDaily): Promise<MsgClaimDailyResponse> {
    const data = MsgClaimDaily.encode(request).finish();
    const promise = this.rpc.request("stride.airdrop.Msg", "ClaimDaily", data);
    return promise.then(data => MsgClaimDailyResponse.decode(new BinaryReader(data)));
  }
  claimEarly(request: MsgClaimEarly): Promise<MsgClaimEarlyResponse> {
    const data = MsgClaimEarly.encode(request).finish();
    const promise = this.rpc.request("stride.airdrop.Msg", "ClaimEarly", data);
    return promise.then(data => MsgClaimEarlyResponse.decode(new BinaryReader(data)));
  }
  createAirdrop(request: MsgCreateAirdrop): Promise<MsgCreateAirdropResponse> {
    const data = MsgCreateAirdrop.encode(request).finish();
    const promise = this.rpc.request("stride.airdrop.Msg", "CreateAirdrop", data);
    return promise.then(data => MsgCreateAirdropResponse.decode(new BinaryReader(data)));
  }
  updateAirdrop(request: MsgUpdateAirdrop): Promise<MsgUpdateAirdropResponse> {
    const data = MsgUpdateAirdrop.encode(request).finish();
    const promise = this.rpc.request("stride.airdrop.Msg", "UpdateAirdrop", data);
    return promise.then(data => MsgUpdateAirdropResponse.decode(new BinaryReader(data)));
  }
  addAllocations(request: MsgAddAllocations): Promise<MsgAddAllocationsResponse> {
    const data = MsgAddAllocations.encode(request).finish();
    const promise = this.rpc.request("stride.airdrop.Msg", "AddAllocations", data);
    return promise.then(data => MsgAddAllocationsResponse.decode(new BinaryReader(data)));
  }
  updateUserAllocation(request: MsgUpdateUserAllocation): Promise<MsgUpdateUserAllocationResponse> {
    const data = MsgUpdateUserAllocation.encode(request).finish();
    const promise = this.rpc.request("stride.airdrop.Msg", "UpdateUserAllocation", data);
    return promise.then(data => MsgUpdateUserAllocationResponse.decode(new BinaryReader(data)));
  }
  linkAddresses(request: MsgLinkAddresses): Promise<MsgLinkAddressesResponse> {
    const data = MsgLinkAddresses.encode(request).finish();
    const promise = this.rpc.request("stride.airdrop.Msg", "LinkAddresses", data);
    return promise.then(data => MsgLinkAddressesResponse.decode(new BinaryReader(data)));
  }
}