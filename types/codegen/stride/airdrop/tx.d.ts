import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
/** ClaimDaily */
export interface MsgClaimDaily {
    /** Address of the claimer */
    claimer: string;
    /** Airdrop ID */
    airdropId: string;
}
/** ClaimDaily */
export interface MsgClaimDailySDKType {
    /** Address of the claimer */
    claimer: string;
    /** Airdrop ID */
    airdrop_id: string;
}
export interface MsgClaimDailyResponse {
}
export interface MsgClaimDailyResponseSDKType {
}
/** ClaimEarly */
export interface MsgClaimEarly {
    /** Address of the claimer */
    claimer: string;
    /** Airdrop ID */
    airdropId: string;
}
/** ClaimEarly */
export interface MsgClaimEarlySDKType {
    /** Address of the claimer */
    claimer: string;
    /** Airdrop ID */
    airdrop_id: string;
}
export interface MsgClaimEarlyResponse {
}
export interface MsgClaimEarlyResponseSDKType {
}
/** CreateAirdrop */
export interface MsgCreateAirdrop {
    /** Airdrop admin address */
    admin: string;
    /** Airdrop ID */
    airdropId: string;
    /** Denom used when distributing rewards */
    rewardDenom: string;
    /** The first date that claiming begins and rewards are distributed */
    distributionStartDate: Date;
    /**
     * The last date for rewards to be distributed. Immediately after this date
     * the rewards can no longer be claimed, but rewards have not been clawed back
     * yet
     */
    distributionEndDate: Date;
    /**
     * Date with which the rewards are clawed back (occurs after the distribution
     * end date)
     */
    clawbackDate: Date;
    /** Deadline for the user to make a decision on their claim type */
    claimTypeDeadlineDate: Date;
    /**
     * Penalty for claiming rewards early - e.g. 0.5 means claiming early will
     * result in losing 50% of rewards
     */
    earlyClaimPenalty: string;
    /** Account that holds the total reward balance and distributes to users */
    distributorAddress: string;
    /** Admin account with permissions to add or update allocations */
    allocatorAddress: string;
    /** Admin account with permissions to link addresseses */
    linkerAddress: string;
}
/** CreateAirdrop */
export interface MsgCreateAirdropSDKType {
    /** Airdrop admin address */
    admin: string;
    /** Airdrop ID */
    airdrop_id: string;
    /** Denom used when distributing rewards */
    reward_denom: string;
    /** The first date that claiming begins and rewards are distributed */
    distribution_start_date: Date;
    /**
     * The last date for rewards to be distributed. Immediately after this date
     * the rewards can no longer be claimed, but rewards have not been clawed back
     * yet
     */
    distribution_end_date: Date;
    /**
     * Date with which the rewards are clawed back (occurs after the distribution
     * end date)
     */
    clawback_date: Date;
    /** Deadline for the user to make a decision on their claim type */
    claim_type_deadline_date: Date;
    /**
     * Penalty for claiming rewards early - e.g. 0.5 means claiming early will
     * result in losing 50% of rewards
     */
    early_claim_penalty: string;
    /** Account that holds the total reward balance and distributes to users */
    distributor_address: string;
    /** Admin account with permissions to add or update allocations */
    allocator_address: string;
    /** Admin account with permissions to link addresseses */
    linker_address: string;
}
export interface MsgCreateAirdropResponse {
}
export interface MsgCreateAirdropResponseSDKType {
}
/** UpdateAirdrop */
export interface MsgUpdateAirdrop {
    /** Airdrop admin address */
    admin: string;
    /** Airdrop ID */
    airdropId: string;
    /** Denom used when distributing rewards */
    rewardDenom: string;
    /** The first date that claiming begins and rewards are distributed */
    distributionStartDate: Date;
    /**
     * The last date for rewards to be distributed. Immediately after this date
     * the rewards can no longer be claimed, but rewards have not been clawed back
     * yet
     */
    distributionEndDate: Date;
    /**
     * Date with which the rewards are clawed back (occurs after the distribution
     * end date)
     */
    clawbackDate: Date;
    /** Deadline for the user to make a decision on their claim type */
    claimTypeDeadlineDate: Date;
    /**
     * Penalty for claiming rewards early - e.g. 0.5 means claiming early will
     * result in losing 50% of rewards
     */
    earlyClaimPenalty: string;
    /** Account that holds the total reward balance and distributes to users */
    distributorAddress: string;
    /** Admin account with permissions to add or update allocations */
    allocatorAddress: string;
    /** Admin account with permissions to link addresseses */
    linkerAddress: string;
}
/** UpdateAirdrop */
export interface MsgUpdateAirdropSDKType {
    /** Airdrop admin address */
    admin: string;
    /** Airdrop ID */
    airdrop_id: string;
    /** Denom used when distributing rewards */
    reward_denom: string;
    /** The first date that claiming begins and rewards are distributed */
    distribution_start_date: Date;
    /**
     * The last date for rewards to be distributed. Immediately after this date
     * the rewards can no longer be claimed, but rewards have not been clawed back
     * yet
     */
    distribution_end_date: Date;
    /**
     * Date with which the rewards are clawed back (occurs after the distribution
     * end date)
     */
    clawback_date: Date;
    /** Deadline for the user to make a decision on their claim type */
    claim_type_deadline_date: Date;
    /**
     * Penalty for claiming rewards early - e.g. 0.5 means claiming early will
     * result in losing 50% of rewards
     */
    early_claim_penalty: string;
    /** Account that holds the total reward balance and distributes to users */
    distributor_address: string;
    /** Admin account with permissions to add or update allocations */
    allocator_address: string;
    /** Admin account with permissions to link addresseses */
    linker_address: string;
}
export interface MsgUpdateAirdropResponse {
}
export interface MsgUpdateAirdropResponseSDKType {
}
/** Allocation specification when bootstrapping reward data */
export interface RawAllocation {
    userAddress: string;
    allocations: string[];
}
/** Allocation specification when bootstrapping reward data */
export interface RawAllocationSDKType {
    user_address: string;
    allocations: string[];
}
/** AddAllocations */
export interface MsgAddAllocations {
    /** Airdrop admin address */
    admin: string;
    /** Airdrop ID */
    airdropId: string;
    /** List of address/allocation pairs for each user */
    allocations: RawAllocation[];
}
/** AddAllocations */
export interface MsgAddAllocationsSDKType {
    /** Airdrop admin address */
    admin: string;
    /** Airdrop ID */
    airdrop_id: string;
    /** List of address/allocation pairs for each user */
    allocations: RawAllocationSDKType[];
}
export interface MsgAddAllocationsResponse {
}
export interface MsgAddAllocationsResponseSDKType {
}
/** UpdateUserAllocation */
export interface MsgUpdateUserAllocation {
    /** Airdrop admin address */
    admin: string;
    /** Airdrop ID */
    airdropId: string;
    /** Address of the airdrop recipient */
    userAddress: string;
    /**
     * Allocations - as an array where each element represents the rewards for a
     * day
     */
    allocations: string[];
}
/** UpdateUserAllocation */
export interface MsgUpdateUserAllocationSDKType {
    /** Airdrop admin address */
    admin: string;
    /** Airdrop ID */
    airdrop_id: string;
    /** Address of the airdrop recipient */
    user_address: string;
    /**
     * Allocations - as an array where each element represents the rewards for a
     * day
     */
    allocations: string[];
}
export interface MsgUpdateUserAllocationResponse {
}
export interface MsgUpdateUserAllocationResponseSDKType {
}
/** LinkAddresses */
export interface MsgLinkAddresses {
    /** Airdrop admin address */
    admin: string;
    /** Airdrop ID */
    airdropId: string;
    /** Stride address - this address may or may not exist in allocations yet */
    strideAddress: string;
    /** Host address - this address must exist */
    hostAddress: string;
}
/** LinkAddresses */
export interface MsgLinkAddressesSDKType {
    /** Airdrop admin address */
    admin: string;
    /** Airdrop ID */
    airdrop_id: string;
    /** Stride address - this address may or may not exist in allocations yet */
    stride_address: string;
    /** Host address - this address must exist */
    host_address: string;
}
export interface MsgLinkAddressesResponse {
}
export interface MsgLinkAddressesResponseSDKType {
}
export declare const MsgClaimDaily: {
    encode(message: MsgClaimDaily, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgClaimDaily;
    fromPartial(object: DeepPartial<MsgClaimDaily>): MsgClaimDaily;
};
export declare const MsgClaimDailyResponse: {
    encode(_: MsgClaimDailyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgClaimDailyResponse;
    fromPartial(_: DeepPartial<MsgClaimDailyResponse>): MsgClaimDailyResponse;
};
export declare const MsgClaimEarly: {
    encode(message: MsgClaimEarly, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgClaimEarly;
    fromPartial(object: DeepPartial<MsgClaimEarly>): MsgClaimEarly;
};
export declare const MsgClaimEarlyResponse: {
    encode(_: MsgClaimEarlyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgClaimEarlyResponse;
    fromPartial(_: DeepPartial<MsgClaimEarlyResponse>): MsgClaimEarlyResponse;
};
export declare const MsgCreateAirdrop: {
    encode(message: MsgCreateAirdrop, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateAirdrop;
    fromPartial(object: DeepPartial<MsgCreateAirdrop>): MsgCreateAirdrop;
};
export declare const MsgCreateAirdropResponse: {
    encode(_: MsgCreateAirdropResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateAirdropResponse;
    fromPartial(_: DeepPartial<MsgCreateAirdropResponse>): MsgCreateAirdropResponse;
};
export declare const MsgUpdateAirdrop: {
    encode(message: MsgUpdateAirdrop, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateAirdrop;
    fromPartial(object: DeepPartial<MsgUpdateAirdrop>): MsgUpdateAirdrop;
};
export declare const MsgUpdateAirdropResponse: {
    encode(_: MsgUpdateAirdropResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateAirdropResponse;
    fromPartial(_: DeepPartial<MsgUpdateAirdropResponse>): MsgUpdateAirdropResponse;
};
export declare const RawAllocation: {
    encode(message: RawAllocation, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RawAllocation;
    fromPartial(object: DeepPartial<RawAllocation>): RawAllocation;
};
export declare const MsgAddAllocations: {
    encode(message: MsgAddAllocations, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddAllocations;
    fromPartial(object: DeepPartial<MsgAddAllocations>): MsgAddAllocations;
};
export declare const MsgAddAllocationsResponse: {
    encode(_: MsgAddAllocationsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddAllocationsResponse;
    fromPartial(_: DeepPartial<MsgAddAllocationsResponse>): MsgAddAllocationsResponse;
};
export declare const MsgUpdateUserAllocation: {
    encode(message: MsgUpdateUserAllocation, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateUserAllocation;
    fromPartial(object: DeepPartial<MsgUpdateUserAllocation>): MsgUpdateUserAllocation;
};
export declare const MsgUpdateUserAllocationResponse: {
    encode(_: MsgUpdateUserAllocationResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateUserAllocationResponse;
    fromPartial(_: DeepPartial<MsgUpdateUserAllocationResponse>): MsgUpdateUserAllocationResponse;
};
export declare const MsgLinkAddresses: {
    encode(message: MsgLinkAddresses, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgLinkAddresses;
    fromPartial(object: DeepPartial<MsgLinkAddresses>): MsgLinkAddresses;
};
export declare const MsgLinkAddressesResponse: {
    encode(_: MsgLinkAddressesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgLinkAddressesResponse;
    fromPartial(_: DeepPartial<MsgLinkAddressesResponse>): MsgLinkAddressesResponse;
};
