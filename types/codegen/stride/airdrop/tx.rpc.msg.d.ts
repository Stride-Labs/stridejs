import { Rpc } from "../../helpers";
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
