import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
/**
 * ClaimType enum represents the possible claim types for a user getting an
 * airdrop
 */
export declare enum ClaimType {
    /**
     * CLAIM_DAILY - CLAIM_DAILY indicates that the airdrop rewards are accumulated daily
     *  A user can claim daily up front and change their decision within the
     *  deadline window
     *  This type is assigned to the user by default when their allocations are
     *  added
     */
    CLAIM_DAILY = 0,
    /**
     * CLAIM_EARLY - CLAIM_EARLY indicates that the airdrop rewards have been claimed early,
     *  with half going to the user and half being clawed back
     */
    CLAIM_EARLY = 1,
    UNRECOGNIZED = -1
}
/**
 * ClaimType enum represents the possible claim types for a user getting an
 * airdrop
 */
export declare enum ClaimTypeSDKType {
    /**
     * CLAIM_DAILY - CLAIM_DAILY indicates that the airdrop rewards are accumulated daily
     *  A user can claim daily up front and change their decision within the
     *  deadline window
     *  This type is assigned to the user by default when their allocations are
     *  added
     */
    CLAIM_DAILY = 0,
    /**
     * CLAIM_EARLY - CLAIM_EARLY indicates that the airdrop rewards have been claimed early,
     *  with half going to the user and half being clawed back
     */
    CLAIM_EARLY = 1,
    UNRECOGNIZED = -1
}
export declare function claimTypeFromJSON(object: any): ClaimType;
export declare function claimTypeToJSON(object: ClaimType): string;
/** Airdrop module parameters */
export interface Params {
    /**
     * The number of seconds between each element in the allocations array
     * In practice this is always 24 hours, but it's customizable for testing
     */
    allocationWindowSeconds: Long;
}
/** Airdrop module parameters */
export interface ParamsSDKType {
    /**
     * The number of seconds between each element in the allocations array
     * In practice this is always 24 hours, but it's customizable for testing
     */
    allocation_window_seconds: Long;
}
/**
 * UserAllocation tracks the status of an allocation for a user on a specific
 * airdrop
 */
export interface UserAllocation {
    /** ID of the airdrop */
    airdropId: string;
    /**
     * Address of the account that is receiving the airdrop allocation
     * The address does not have to be a stride address - but non-stride addresses
     * must be linked and merged into a stride address before claiming
     */
    address: string;
    /** The total amount of tokens that have already been claimed */
    claimed: string;
    /**
     * The total amount of tokens that have been forfeited by the user for
     * claiming early
     */
    forfeited: string;
    /**
     * The current state of allocations for this airdrop
     *
     * Ex 1:
     *   Day 0: {claimed:0, allocations:[10,10,10], claim_type:DAILY}
     *   *MsgClaim*
     *   Day 1: {claimed:10, allocations:[0,10,10], claim_type:DAILY}
     *   *MsgClaim*
     *   Day 2: {claimed:20, allocations:[0,0,10], claim_type:DAILY}
     *
     * Ex 2:
     *   Day 0: {claimed:0, allocations:[10,10,10], claim_type:DAILY}
     *   *MsgClaimAndStake*
     *   Day 1: {claimed:30, allocations:[0,0,0], claim_type:CLAIM_AND_STAKE}
     *
     * Ex 3:
     *   Day 0: {claimed:0, allocations:[10,10,10], claim_type:DAILY}
     *   *MsgClaimEarly*
     *   Day 1: {claimed:15, allocations:[0,0,0], claim_type:CLAIM_EARLY}
     */
    allocations: string[];
    /** The claim type (claim daily or claim early) */
    claimType: ClaimType;
}
/**
 * UserAllocation tracks the status of an allocation for a user on a specific
 * airdrop
 */
export interface UserAllocationSDKType {
    /** ID of the airdrop */
    airdrop_id: string;
    /**
     * Address of the account that is receiving the airdrop allocation
     * The address does not have to be a stride address - but non-stride addresses
     * must be linked and merged into a stride address before claiming
     */
    address: string;
    /** The total amount of tokens that have already been claimed */
    claimed: string;
    /**
     * The total amount of tokens that have been forfeited by the user for
     * claiming early
     */
    forfeited: string;
    /**
     * The current state of allocations for this airdrop
     *
     * Ex 1:
     *   Day 0: {claimed:0, allocations:[10,10,10], claim_type:DAILY}
     *   *MsgClaim*
     *   Day 1: {claimed:10, allocations:[0,10,10], claim_type:DAILY}
     *   *MsgClaim*
     *   Day 2: {claimed:20, allocations:[0,0,10], claim_type:DAILY}
     *
     * Ex 2:
     *   Day 0: {claimed:0, allocations:[10,10,10], claim_type:DAILY}
     *   *MsgClaimAndStake*
     *   Day 1: {claimed:30, allocations:[0,0,0], claim_type:CLAIM_AND_STAKE}
     *
     * Ex 3:
     *   Day 0: {claimed:0, allocations:[10,10,10], claim_type:DAILY}
     *   *MsgClaimEarly*
     *   Day 1: {claimed:15, allocations:[0,0,0], claim_type:CLAIM_EARLY}
     */
    allocations: string[];
    /** The claim type (claim daily or claim early) */
    claim_type: ClaimTypeSDKType;
}
/** Airdrop track the aggregate unbondings across an epoch */
export interface Airdrop {
    /** Airdrop ID */
    id: string;
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
    distributionAddress: string;
}
/** Airdrop track the aggregate unbondings across an epoch */
export interface AirdropSDKType {
    /** Airdrop ID */
    id: string;
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
    distribution_address: string;
}
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromPartial(object: DeepPartial<Params>): Params;
};
export declare const UserAllocation: {
    encode(message: UserAllocation, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UserAllocation;
    fromPartial(object: DeepPartial<UserAllocation>): UserAllocation;
};
export declare const Airdrop: {
    encode(message: Airdrop, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Airdrop;
    fromPartial(object: DeepPartial<Airdrop>): Airdrop;
};
