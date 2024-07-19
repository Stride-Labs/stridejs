import { Rpc } from "../../helpers";
import { BinaryReader } from "../../binary";
import { MsgSetAirdropAllocations, MsgSetAirdropAllocationsResponse, MsgClaimFreeAmount, MsgClaimFreeAmountResponse, MsgCreateAirdrop, MsgCreateAirdropResponse, MsgDeleteAirdrop, MsgDeleteAirdropResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
  setAirdropAllocations(request: MsgSetAirdropAllocations): Promise<MsgSetAirdropAllocationsResponse>;
  claimFreeAmount(request: MsgClaimFreeAmount): Promise<MsgClaimFreeAmountResponse>;
  createAirdrop(request: MsgCreateAirdrop): Promise<MsgCreateAirdropResponse>;
  deleteAirdrop(request: MsgDeleteAirdrop): Promise<MsgDeleteAirdropResponse>;
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
    const promise = this.rpc.request("stride.claim.Msg", "SetAirdropAllocations", data);
    return promise.then(data => MsgSetAirdropAllocationsResponse.decode(new BinaryReader(data)));
  }
  claimFreeAmount(request: MsgClaimFreeAmount): Promise<MsgClaimFreeAmountResponse> {
    const data = MsgClaimFreeAmount.encode(request).finish();
    const promise = this.rpc.request("stride.claim.Msg", "ClaimFreeAmount", data);
    return promise.then(data => MsgClaimFreeAmountResponse.decode(new BinaryReader(data)));
  }
  createAirdrop(request: MsgCreateAirdrop): Promise<MsgCreateAirdropResponse> {
    const data = MsgCreateAirdrop.encode(request).finish();
    const promise = this.rpc.request("stride.claim.Msg", "CreateAirdrop", data);
    return promise.then(data => MsgCreateAirdropResponse.decode(new BinaryReader(data)));
  }
  deleteAirdrop(request: MsgDeleteAirdrop): Promise<MsgDeleteAirdropResponse> {
    const data = MsgDeleteAirdrop.encode(request).finish();
    const promise = this.rpc.request("stride.claim.Msg", "DeleteAirdrop", data);
    return promise.then(data => MsgDeleteAirdropResponse.decode(new BinaryReader(data)));
  }
}