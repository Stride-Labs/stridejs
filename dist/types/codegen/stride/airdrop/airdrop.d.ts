import { BinaryReader, BinaryWriter } from "../../binary";
/**
 * ClaimType enum represents the possible claim types for a user getting an
 * airdrop
 */
export declare enum ClaimType {
    /**
     * CLAIM_DAILY - CLAIM_DAILY indicates that the airdrop rewards are accumulated daily
     * A user can claim daily up front and change their decision within the
     * deadline window
     * This type is assigned to the user by default when their allocations are
     * added
     */
    CLAIM_DAILY = 0,
    /**
     * CLAIM_EARLY - CLAIM_EARLY indicates that the airdrop rewards have been claimed early,
     * with half going to the user and half being clawed back
     */
    CLAIM_EARLY = 1,
    UNRECOGNIZED = -1
}
export declare const ClaimTypeSDKType: typeof ClaimType;
export declare const ClaimTypeAmino: typeof ClaimType;
export declare function claimTypeFromJSON(object: any): ClaimType;
export declare function claimTypeToJSON(object: ClaimType): string;
/** Airdrop module parameters */
export interface Params {
    /**
     * The number of seconds between each element in the allocations array
     * In practice this is always 24 hours, but it's customizable for testing
     */
    periodLengthSeconds: bigint;
}
export interface ParamsProtoMsg {
    typeUrl: "/stride.airdrop.Params";
    value: Uint8Array;
}
/**
 * Airdrop module parameters
 * @name ParamsAmino
 * @package stride.airdrop
 * @see proto type: stride.airdrop.Params
 */
export interface ParamsAmino {
    /**
     * The number of seconds between each element in the allocations array
     * In practice this is always 24 hours, but it's customizable for testing
     */
    period_length_seconds?: string;
}
export interface ParamsAminoMsg {
    type: "/stride.airdrop.Params";
    value: ParamsAmino;
}
/** Airdrop module parameters */
export interface ParamsSDKType {
    period_length_seconds: bigint;
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
     *   Day 0: {claimed:0, allocations:[10,10,10]}
     *   *MsgClaim*
     *   Day 1: {claimed:10, allocations:[0,10,10]}
     *   *MsgClaim*
     *   Day 2: {claimed:20, allocations:[0,0,10]}
     *
     * Ex 2:
     *   Day 0: {claimed:0, allocations:[10,10,10]}
     *   *MsgClaimEarly*
     *   Day 1: {claimed:15, forfeited:15, allocations:[0,0,0]}
     */
    allocations: string[];
}
export interface UserAllocationProtoMsg {
    typeUrl: "/stride.airdrop.UserAllocation";
    value: Uint8Array;
}
/**
 * UserAllocation tracks the status of an allocation for a user on a specific
 * airdrop
 * @name UserAllocationAmino
 * @package stride.airdrop
 * @see proto type: stride.airdrop.UserAllocation
 */
export interface UserAllocationAmino {
    /**
     * ID of the airdrop
     */
    airdrop_id?: string;
    /**
     * Address of the account that is receiving the airdrop allocation
     * The address does not have to be a stride address - but non-stride addresses
     * must be linked and merged into a stride address before claiming
     */
    address?: string;
    /**
     * The total amount of tokens that have already been claimed
     */
    claimed?: string;
    /**
     * The total amount of tokens that have been forfeited by the user for
     * claiming early
     */
    forfeited?: string;
    /**
     * The current state of allocations for this airdrop
     *
     * Ex 1:
     *   Day 0: {claimed:0, allocations:[10,10,10]}
     *   *MsgClaim*
     *   Day 1: {claimed:10, allocations:[0,10,10]}
     *   *MsgClaim*
     *   Day 2: {claimed:20, allocations:[0,0,10]}
     *
     * Ex 2:
     *   Day 0: {claimed:0, allocations:[10,10,10]}
     *   *MsgClaimEarly*
     *   Day 1: {claimed:15, forfeited:15, allocations:[0,0,0]}
     */
    allocations?: string[];
}
export interface UserAllocationAminoMsg {
    type: "/stride.airdrop.UserAllocation";
    value: UserAllocationAmino;
}
/**
 * UserAllocation tracks the status of an allocation for a user on a specific
 * airdrop
 */
export interface UserAllocationSDKType {
    airdrop_id: string;
    address: string;
    claimed: string;
    forfeited: string;
    allocations: string[];
}
/** Airdrop track the aggregate unbondings across an epoch */
export interface Airdrop {
    /** Airdrop ID */
    id: string;
    /** Denom used when distributing rewards */
    rewardDenom: string;
    /** The first date that claiming begins and rewards are distributed */
    distributionStartDate?: Date;
    /**
     * The last date for rewards to be distributed. Immediately after this date
     * the rewards can no longer be claimed, but rewards have not been clawed back
     * yet
     */
    distributionEndDate?: Date;
    /**
     * Date with which the rewards are clawed back (occurs after the distribution
     * end date)
     */
    clawbackDate?: Date;
    /** Deadline for the user to make a decision on their claim type */
    claimTypeDeadlineDate?: Date;
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
export interface AirdropProtoMsg {
    typeUrl: "/stride.airdrop.Airdrop";
    value: Uint8Array;
}
/**
 * Airdrop track the aggregate unbondings across an epoch
 * @name AirdropAmino
 * @package stride.airdrop
 * @see proto type: stride.airdrop.Airdrop
 */
export interface AirdropAmino {
    /**
     * Airdrop ID
     */
    id?: string;
    /**
     * Denom used when distributing rewards
     */
    reward_denom?: string;
    /**
     * The first date that claiming begins and rewards are distributed
     */
    distribution_start_date?: string;
    /**
     * The last date for rewards to be distributed. Immediately after this date
     * the rewards can no longer be claimed, but rewards have not been clawed back
     * yet
     */
    distribution_end_date?: string;
    /**
     * Date with which the rewards are clawed back (occurs after the distribution
     * end date)
     */
    clawback_date?: string;
    /**
     * Deadline for the user to make a decision on their claim type
     */
    claim_type_deadline_date?: string;
    /**
     * Penalty for claiming rewards early - e.g. 0.5 means claiming early will
     * result in losing 50% of rewards
     */
    early_claim_penalty?: string;
    /**
     * Account that holds the total reward balance and distributes to users
     */
    distributor_address?: string;
    /**
     * Admin account with permissions to add or update allocations
     */
    allocator_address?: string;
    /**
     * Admin account with permissions to link addresseses
     */
    linker_address?: string;
}
export interface AirdropAminoMsg {
    type: "/stride.airdrop.Airdrop";
    value: AirdropAmino;
}
/** Airdrop track the aggregate unbondings across an epoch */
export interface AirdropSDKType {
    id: string;
    reward_denom: string;
    distribution_start_date?: Date;
    distribution_end_date?: Date;
    clawback_date?: Date;
    claim_type_deadline_date?: Date;
    early_claim_penalty: string;
    distributor_address: string;
    allocator_address: string;
    linker_address: string;
}
export declare const Params: {
    typeUrl: string;
    encode(message: Params, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Params;
    fromPartial(object: Partial<Params>): Params;
    fromAmino(object: ParamsAmino): Params;
    toAmino(message: Params): ParamsAmino;
    fromAminoMsg(object: ParamsAminoMsg): Params;
    fromProtoMsg(message: ParamsProtoMsg): Params;
    toProto(message: Params): Uint8Array;
    toProtoMsg(message: Params): ParamsProtoMsg;
};
export declare const UserAllocation: {
    typeUrl: string;
    encode(message: UserAllocation, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): UserAllocation;
    fromPartial(object: Partial<UserAllocation>): UserAllocation;
    fromAmino(object: UserAllocationAmino): UserAllocation;
    toAmino(message: UserAllocation): UserAllocationAmino;
    fromAminoMsg(object: UserAllocationAminoMsg): UserAllocation;
    fromProtoMsg(message: UserAllocationProtoMsg): UserAllocation;
    toProto(message: UserAllocation): Uint8Array;
    toProtoMsg(message: UserAllocation): UserAllocationProtoMsg;
};
export declare const Airdrop: {
    typeUrl: string;
    encode(message: Airdrop, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Airdrop;
    fromPartial(object: Partial<Airdrop>): Airdrop;
    fromAmino(object: AirdropAmino): Airdrop;
    toAmino(message: Airdrop): AirdropAmino;
    fromAminoMsg(object: AirdropAminoMsg): Airdrop;
    fromProtoMsg(message: AirdropProtoMsg): Airdrop;
    toProto(message: Airdrop): Uint8Array;
    toProtoMsg(message: Airdrop): AirdropProtoMsg;
};
