import { Rpc } from "@osmonauts/helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgSetAirdropAllocations, MsgSetAirdropAllocationsResponse, MsgClaimFreeAmount, MsgClaimFreeAmountResponse, MsgCreateAirdrop, MsgCreateAirdropResponse, MsgDeleteAirdrop, MsgDeleteAirdropResponse } from "./tx";
/** Msg defines the RPC service */

export interface Msg {
  setAirdropAllocations(request: MsgSetAirdropAllocations): Promise<MsgSetAirdropAllocationsResponse>;
  /*null*/

  claimFreeAmount(request: MsgClaimFreeAmount): Promise<MsgClaimFreeAmountResponse>;
  /*null*/

  createAirdrop(request: MsgCreateAirdrop): Promise<MsgCreateAirdropResponse>;
  /*null*/

  deleteAirdrop(request: MsgDeleteAirdrop): Promise<MsgDeleteAirdropResponse>;
  /*null*/

}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.setAirdropAllocations = this.setAirdropAllocations.bind(this);
    this.claimFreeAmount = this.claimFreeAmount.bind(this);
    this.createAirdrop = this.createAirdrop.bind(this);
    this.deleteAirdrop = this.deleteAirdrop.bind(this);
  }

  setAirdropAllocations(request: MsgSetAirdropAllocations): Promise<MsgSetAirdropAllocationsResponse> {
    const data = MsgSetAirdropAllocations.encode(request).finish();
    const promise = this.rpc.request("Stridelabs.stride.claim.v1beta1.Msg", "SetAirdropAllocations", data);
    return promise.then(data => MsgSetAirdropAllocationsResponse.decode(new _m0.Reader(data)));
  }

  claimFreeAmount(request: MsgClaimFreeAmount): Promise<MsgClaimFreeAmountResponse> {
    const data = MsgClaimFreeAmount.encode(request).finish();
    const promise = this.rpc.request("Stridelabs.stride.claim.v1beta1.Msg", "ClaimFreeAmount", data);
    return promise.then(data => MsgClaimFreeAmountResponse.decode(new _m0.Reader(data)));
  }

  createAirdrop(request: MsgCreateAirdrop): Promise<MsgCreateAirdropResponse> {
    const data = MsgCreateAirdrop.encode(request).finish();
    const promise = this.rpc.request("Stridelabs.stride.claim.v1beta1.Msg", "CreateAirdrop", data);
    return promise.then(data => MsgCreateAirdropResponse.decode(new _m0.Reader(data)));
  }

  deleteAirdrop(request: MsgDeleteAirdrop): Promise<MsgDeleteAirdropResponse> {
    const data = MsgDeleteAirdrop.encode(request).finish();
    const promise = this.rpc.request("Stridelabs.stride.claim.v1beta1.Msg", "DeleteAirdrop", data);
    return promise.then(data => MsgDeleteAirdropResponse.decode(new _m0.Reader(data)));
  }

}