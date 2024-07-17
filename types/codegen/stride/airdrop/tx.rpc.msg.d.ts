import { Rpc } from "@osmonauts/helpers";
import { MsgClaimDaily, MsgClaimDailyResponse, MsgClaimEarly, MsgClaimEarlyResponse, MsgCreateAirdrop, MsgCreateAirdropResponse, MsgUpdateAirdrop, MsgUpdateAirdropResponse, MsgAddAllocations, MsgAddAllocationsResponse, MsgUpdateUserAllocation, MsgUpdateUserAllocationResponse, MsgLinkAddresses, MsgLinkAddressesResponse } from "./tx";
/** Msg defines the RPC service */
export interface Msg {
    claimDaily(request: MsgClaimDaily): Promise<MsgClaimDailyResponse>;
    claimEarly(request: MsgClaimEarly): Promise<MsgClaimEarlyResponse>;
    createAirdrop(request: MsgCreateAirdrop): Promise<MsgCreateAirdropResponse>;
    updateAirdrop(request: MsgUpdateAirdrop): Promise<MsgUpdateAirdropResponse>;
    addAllocations(request: MsgAddAllocations): Promise<MsgAddAllocationsResponse>;
    updateUserAllocation(request: MsgUpdateUserAllocation): Promise<MsgUpdateUserAllocationResponse>;
    linkAddresses(request: MsgLinkAddresses): Promise<MsgLinkAddressesResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    claimDaily(request: MsgClaimDaily): Promise<MsgClaimDailyResponse>;
    claimEarly(request: MsgClaimEarly): Promise<MsgClaimEarlyResponse>;
    createAirdrop(request: MsgCreateAirdrop): Promise<MsgCreateAirdropResponse>;
    updateAirdrop(request: MsgUpdateAirdrop): Promise<MsgUpdateAirdropResponse>;
    addAllocations(request: MsgAddAllocations): Promise<MsgAddAllocationsResponse>;
    updateUserAllocation(request: MsgUpdateUserAllocation): Promise<MsgUpdateUserAllocationResponse>;
    linkAddresses(request: MsgLinkAddresses): Promise<MsgLinkAddressesResponse>;
}
