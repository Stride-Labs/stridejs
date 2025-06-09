import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { Airdrop, AirdropAmino, AirdropSDKType, UserAllocation, UserAllocationAmino, UserAllocationSDKType } from "./airdrop";
import { BinaryReader, BinaryWriter } from "../../binary";
/** Airdrop */
export interface QueryAirdropRequest {
    id: string;
}
export interface QueryAirdropRequestProtoMsg {
    typeUrl: "/stride.airdrop.QueryAirdropRequest";
    value: Uint8Array;
}
/**
 * Airdrop
 * @name QueryAirdropRequestAmino
 * @package stride.airdrop
 * @see proto type: stride.airdrop.QueryAirdropRequest
 */
export interface QueryAirdropRequestAmino {
    id?: string;
}
export interface QueryAirdropRequestAminoMsg {
    type: "/stride.airdrop.QueryAirdropRequest";
    value: QueryAirdropRequestAmino;
}
/** Airdrop */
export interface QueryAirdropRequestSDKType {
    id: string;
}
export interface QueryAirdropResponse {
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
    /** The current date index into the airdrop array */
    currentDateIndex: bigint;
    /** The length of the airdrop (i.e. number of periods in the airdrop array) */
    airdropLength: bigint;
}
export interface QueryAirdropResponseProtoMsg {
    typeUrl: "/stride.airdrop.QueryAirdropResponse";
    value: Uint8Array;
}
/**
 * @name QueryAirdropResponseAmino
 * @package stride.airdrop
 * @see proto type: stride.airdrop.QueryAirdropResponse
 */
export interface QueryAirdropResponseAmino {
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
    /**
     * The current date index into the airdrop array
     */
    current_date_index?: string;
    /**
     * The length of the airdrop (i.e. number of periods in the airdrop array)
     */
    airdrop_length?: string;
}
export interface QueryAirdropResponseAminoMsg {
    type: "/stride.airdrop.QueryAirdropResponse";
    value: QueryAirdropResponseAmino;
}
export interface QueryAirdropResponseSDKType {
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
    current_date_index: bigint;
    airdrop_length: bigint;
}
/** Airdrops */
export interface QueryAllAirdropsRequest {
}
export interface QueryAllAirdropsRequestProtoMsg {
    typeUrl: "/stride.airdrop.QueryAllAirdropsRequest";
    value: Uint8Array;
}
/**
 * Airdrops
 * @name QueryAllAirdropsRequestAmino
 * @package stride.airdrop
 * @see proto type: stride.airdrop.QueryAllAirdropsRequest
 */
export interface QueryAllAirdropsRequestAmino {
}
export interface QueryAllAirdropsRequestAminoMsg {
    type: "/stride.airdrop.QueryAllAirdropsRequest";
    value: QueryAllAirdropsRequestAmino;
}
/** Airdrops */
export interface QueryAllAirdropsRequestSDKType {
}
export interface QueryAllAirdropsResponse {
    airdrops: Airdrop[];
}
export interface QueryAllAirdropsResponseProtoMsg {
    typeUrl: "/stride.airdrop.QueryAllAirdropsResponse";
    value: Uint8Array;
}
/**
 * @name QueryAllAirdropsResponseAmino
 * @package stride.airdrop
 * @see proto type: stride.airdrop.QueryAllAirdropsResponse
 */
export interface QueryAllAirdropsResponseAmino {
    airdrops?: AirdropAmino[];
}
export interface QueryAllAirdropsResponseAminoMsg {
    type: "/stride.airdrop.QueryAllAirdropsResponse";
    value: QueryAllAirdropsResponseAmino;
}
export interface QueryAllAirdropsResponseSDKType {
    airdrops: AirdropSDKType[];
}
/** UserAllocation */
export interface QueryUserAllocationRequest {
    airdropId: string;
    address: string;
}
export interface QueryUserAllocationRequestProtoMsg {
    typeUrl: "/stride.airdrop.QueryUserAllocationRequest";
    value: Uint8Array;
}
/**
 * UserAllocation
 * @name QueryUserAllocationRequestAmino
 * @package stride.airdrop
 * @see proto type: stride.airdrop.QueryUserAllocationRequest
 */
export interface QueryUserAllocationRequestAmino {
    airdrop_id?: string;
    address?: string;
}
export interface QueryUserAllocationRequestAminoMsg {
    type: "/stride.airdrop.QueryUserAllocationRequest";
    value: QueryUserAllocationRequestAmino;
}
/** UserAllocation */
export interface QueryUserAllocationRequestSDKType {
    airdrop_id: string;
    address: string;
}
export interface QueryUserAllocationResponse {
    userAllocation?: UserAllocation;
}
export interface QueryUserAllocationResponseProtoMsg {
    typeUrl: "/stride.airdrop.QueryUserAllocationResponse";
    value: Uint8Array;
}
/**
 * @name QueryUserAllocationResponseAmino
 * @package stride.airdrop
 * @see proto type: stride.airdrop.QueryUserAllocationResponse
 */
export interface QueryUserAllocationResponseAmino {
    user_allocation?: UserAllocationAmino;
}
export interface QueryUserAllocationResponseAminoMsg {
    type: "/stride.airdrop.QueryUserAllocationResponse";
    value: QueryUserAllocationResponseAmino;
}
export interface QueryUserAllocationResponseSDKType {
    user_allocation?: UserAllocationSDKType;
}
/** UserAllocations */
export interface QueryUserAllocationsRequest {
    address: string;
}
export interface QueryUserAllocationsRequestProtoMsg {
    typeUrl: "/stride.airdrop.QueryUserAllocationsRequest";
    value: Uint8Array;
}
/**
 * UserAllocations
 * @name QueryUserAllocationsRequestAmino
 * @package stride.airdrop
 * @see proto type: stride.airdrop.QueryUserAllocationsRequest
 */
export interface QueryUserAllocationsRequestAmino {
    address?: string;
}
export interface QueryUserAllocationsRequestAminoMsg {
    type: "/stride.airdrop.QueryUserAllocationsRequest";
    value: QueryUserAllocationsRequestAmino;
}
/** UserAllocations */
export interface QueryUserAllocationsRequestSDKType {
    address: string;
}
export interface QueryUserAllocationsResponse {
    userAllocations: UserAllocation[];
}
export interface QueryUserAllocationsResponseProtoMsg {
    typeUrl: "/stride.airdrop.QueryUserAllocationsResponse";
    value: Uint8Array;
}
/**
 * @name QueryUserAllocationsResponseAmino
 * @package stride.airdrop
 * @see proto type: stride.airdrop.QueryUserAllocationsResponse
 */
export interface QueryUserAllocationsResponseAmino {
    user_allocations?: UserAllocationAmino[];
}
export interface QueryUserAllocationsResponseAminoMsg {
    type: "/stride.airdrop.QueryUserAllocationsResponse";
    value: QueryUserAllocationsResponseAmino;
}
export interface QueryUserAllocationsResponseSDKType {
    user_allocations: UserAllocationSDKType[];
}
/** AllAllocations */
export interface QueryAllAllocationsRequest {
    airdropId: string;
    pagination?: PageRequest;
}
export interface QueryAllAllocationsRequestProtoMsg {
    typeUrl: "/stride.airdrop.QueryAllAllocationsRequest";
    value: Uint8Array;
}
/**
 * AllAllocations
 * @name QueryAllAllocationsRequestAmino
 * @package stride.airdrop
 * @see proto type: stride.airdrop.QueryAllAllocationsRequest
 */
export interface QueryAllAllocationsRequestAmino {
    airdrop_id?: string;
    pagination?: PageRequestAmino;
}
export interface QueryAllAllocationsRequestAminoMsg {
    type: "/stride.airdrop.QueryAllAllocationsRequest";
    value: QueryAllAllocationsRequestAmino;
}
/** AllAllocations */
export interface QueryAllAllocationsRequestSDKType {
    airdrop_id: string;
    pagination?: PageRequestSDKType;
}
export interface QueryAllAllocationsResponse {
    allocations: UserAllocation[];
    pagination?: PageResponse;
}
export interface QueryAllAllocationsResponseProtoMsg {
    typeUrl: "/stride.airdrop.QueryAllAllocationsResponse";
    value: Uint8Array;
}
/**
 * @name QueryAllAllocationsResponseAmino
 * @package stride.airdrop
 * @see proto type: stride.airdrop.QueryAllAllocationsResponse
 */
export interface QueryAllAllocationsResponseAmino {
    allocations?: UserAllocationAmino[];
    pagination?: PageResponseAmino;
}
export interface QueryAllAllocationsResponseAminoMsg {
    type: "/stride.airdrop.QueryAllAllocationsResponse";
    value: QueryAllAllocationsResponseAmino;
}
export interface QueryAllAllocationsResponseSDKType {
    allocations: UserAllocationSDKType[];
    pagination?: PageResponseSDKType;
}
/** UserSummary */
export interface QueryUserSummaryRequest {
    airdropId: string;
    address: string;
}
export interface QueryUserSummaryRequestProtoMsg {
    typeUrl: "/stride.airdrop.QueryUserSummaryRequest";
    value: Uint8Array;
}
/**
 * UserSummary
 * @name QueryUserSummaryRequestAmino
 * @package stride.airdrop
 * @see proto type: stride.airdrop.QueryUserSummaryRequest
 */
export interface QueryUserSummaryRequestAmino {
    airdrop_id?: string;
    address?: string;
}
export interface QueryUserSummaryRequestAminoMsg {
    type: "/stride.airdrop.QueryUserSummaryRequest";
    value: QueryUserSummaryRequestAmino;
}
/** UserSummary */
export interface QueryUserSummaryRequestSDKType {
    airdrop_id: string;
    address: string;
}
export interface QueryUserSummaryResponse {
    /** The claim type (claim daily or claim early) */
    claimType: string;
    /** The total rewards claimed so far */
    claimed: string;
    /** The total rewards forfeited (in the case of claiming early) */
    forfeited: string;
    /** The total rewards remaining */
    remaining: string;
    /** The total rewards that can be claimed right now */
    claimable: string;
}
export interface QueryUserSummaryResponseProtoMsg {
    typeUrl: "/stride.airdrop.QueryUserSummaryResponse";
    value: Uint8Array;
}
/**
 * @name QueryUserSummaryResponseAmino
 * @package stride.airdrop
 * @see proto type: stride.airdrop.QueryUserSummaryResponse
 */
export interface QueryUserSummaryResponseAmino {
    /**
     * The claim type (claim daily or claim early)
     */
    claim_type?: string;
    /**
     * The total rewards claimed so far
     */
    claimed?: string;
    /**
     * The total rewards forfeited (in the case of claiming early)
     */
    forfeited?: string;
    /**
     * The total rewards remaining
     */
    remaining?: string;
    /**
     * The total rewards that can be claimed right now
     */
    claimable?: string;
}
export interface QueryUserSummaryResponseAminoMsg {
    type: "/stride.airdrop.QueryUserSummaryResponse";
    value: QueryUserSummaryResponseAmino;
}
export interface QueryUserSummaryResponseSDKType {
    claim_type: string;
    claimed: string;
    forfeited: string;
    remaining: string;
    claimable: string;
}
export declare const QueryAirdropRequest: {
    typeUrl: string;
    encode(message: QueryAirdropRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAirdropRequest;
    fromPartial(object: Partial<QueryAirdropRequest>): QueryAirdropRequest;
    fromAmino(object: QueryAirdropRequestAmino): QueryAirdropRequest;
    toAmino(message: QueryAirdropRequest): QueryAirdropRequestAmino;
    fromAminoMsg(object: QueryAirdropRequestAminoMsg): QueryAirdropRequest;
    fromProtoMsg(message: QueryAirdropRequestProtoMsg): QueryAirdropRequest;
    toProto(message: QueryAirdropRequest): Uint8Array;
    toProtoMsg(message: QueryAirdropRequest): QueryAirdropRequestProtoMsg;
};
export declare const QueryAirdropResponse: {
    typeUrl: string;
    encode(message: QueryAirdropResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAirdropResponse;
    fromPartial(object: Partial<QueryAirdropResponse>): QueryAirdropResponse;
    fromAmino(object: QueryAirdropResponseAmino): QueryAirdropResponse;
    toAmino(message: QueryAirdropResponse): QueryAirdropResponseAmino;
    fromAminoMsg(object: QueryAirdropResponseAminoMsg): QueryAirdropResponse;
    fromProtoMsg(message: QueryAirdropResponseProtoMsg): QueryAirdropResponse;
    toProto(message: QueryAirdropResponse): Uint8Array;
    toProtoMsg(message: QueryAirdropResponse): QueryAirdropResponseProtoMsg;
};
export declare const QueryAllAirdropsRequest: {
    typeUrl: string;
    encode(_: QueryAllAirdropsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAllAirdropsRequest;
    fromPartial(_: Partial<QueryAllAirdropsRequest>): QueryAllAirdropsRequest;
    fromAmino(_: QueryAllAirdropsRequestAmino): QueryAllAirdropsRequest;
    toAmino(_: QueryAllAirdropsRequest): QueryAllAirdropsRequestAmino;
    fromAminoMsg(object: QueryAllAirdropsRequestAminoMsg): QueryAllAirdropsRequest;
    fromProtoMsg(message: QueryAllAirdropsRequestProtoMsg): QueryAllAirdropsRequest;
    toProto(message: QueryAllAirdropsRequest): Uint8Array;
    toProtoMsg(message: QueryAllAirdropsRequest): QueryAllAirdropsRequestProtoMsg;
};
export declare const QueryAllAirdropsResponse: {
    typeUrl: string;
    encode(message: QueryAllAirdropsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAllAirdropsResponse;
    fromPartial(object: Partial<QueryAllAirdropsResponse>): QueryAllAirdropsResponse;
    fromAmino(object: QueryAllAirdropsResponseAmino): QueryAllAirdropsResponse;
    toAmino(message: QueryAllAirdropsResponse): QueryAllAirdropsResponseAmino;
    fromAminoMsg(object: QueryAllAirdropsResponseAminoMsg): QueryAllAirdropsResponse;
    fromProtoMsg(message: QueryAllAirdropsResponseProtoMsg): QueryAllAirdropsResponse;
    toProto(message: QueryAllAirdropsResponse): Uint8Array;
    toProtoMsg(message: QueryAllAirdropsResponse): QueryAllAirdropsResponseProtoMsg;
};
export declare const QueryUserAllocationRequest: {
    typeUrl: string;
    encode(message: QueryUserAllocationRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryUserAllocationRequest;
    fromPartial(object: Partial<QueryUserAllocationRequest>): QueryUserAllocationRequest;
    fromAmino(object: QueryUserAllocationRequestAmino): QueryUserAllocationRequest;
    toAmino(message: QueryUserAllocationRequest): QueryUserAllocationRequestAmino;
    fromAminoMsg(object: QueryUserAllocationRequestAminoMsg): QueryUserAllocationRequest;
    fromProtoMsg(message: QueryUserAllocationRequestProtoMsg): QueryUserAllocationRequest;
    toProto(message: QueryUserAllocationRequest): Uint8Array;
    toProtoMsg(message: QueryUserAllocationRequest): QueryUserAllocationRequestProtoMsg;
};
export declare const QueryUserAllocationResponse: {
    typeUrl: string;
    encode(message: QueryUserAllocationResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryUserAllocationResponse;
    fromPartial(object: Partial<QueryUserAllocationResponse>): QueryUserAllocationResponse;
    fromAmino(object: QueryUserAllocationResponseAmino): QueryUserAllocationResponse;
    toAmino(message: QueryUserAllocationResponse): QueryUserAllocationResponseAmino;
    fromAminoMsg(object: QueryUserAllocationResponseAminoMsg): QueryUserAllocationResponse;
    fromProtoMsg(message: QueryUserAllocationResponseProtoMsg): QueryUserAllocationResponse;
    toProto(message: QueryUserAllocationResponse): Uint8Array;
    toProtoMsg(message: QueryUserAllocationResponse): QueryUserAllocationResponseProtoMsg;
};
export declare const QueryUserAllocationsRequest: {
    typeUrl: string;
    encode(message: QueryUserAllocationsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryUserAllocationsRequest;
    fromPartial(object: Partial<QueryUserAllocationsRequest>): QueryUserAllocationsRequest;
    fromAmino(object: QueryUserAllocationsRequestAmino): QueryUserAllocationsRequest;
    toAmino(message: QueryUserAllocationsRequest): QueryUserAllocationsRequestAmino;
    fromAminoMsg(object: QueryUserAllocationsRequestAminoMsg): QueryUserAllocationsRequest;
    fromProtoMsg(message: QueryUserAllocationsRequestProtoMsg): QueryUserAllocationsRequest;
    toProto(message: QueryUserAllocationsRequest): Uint8Array;
    toProtoMsg(message: QueryUserAllocationsRequest): QueryUserAllocationsRequestProtoMsg;
};
export declare const QueryUserAllocationsResponse: {
    typeUrl: string;
    encode(message: QueryUserAllocationsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryUserAllocationsResponse;
    fromPartial(object: Partial<QueryUserAllocationsResponse>): QueryUserAllocationsResponse;
    fromAmino(object: QueryUserAllocationsResponseAmino): QueryUserAllocationsResponse;
    toAmino(message: QueryUserAllocationsResponse): QueryUserAllocationsResponseAmino;
    fromAminoMsg(object: QueryUserAllocationsResponseAminoMsg): QueryUserAllocationsResponse;
    fromProtoMsg(message: QueryUserAllocationsResponseProtoMsg): QueryUserAllocationsResponse;
    toProto(message: QueryUserAllocationsResponse): Uint8Array;
    toProtoMsg(message: QueryUserAllocationsResponse): QueryUserAllocationsResponseProtoMsg;
};
export declare const QueryAllAllocationsRequest: {
    typeUrl: string;
    encode(message: QueryAllAllocationsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAllAllocationsRequest;
    fromPartial(object: Partial<QueryAllAllocationsRequest>): QueryAllAllocationsRequest;
    fromAmino(object: QueryAllAllocationsRequestAmino): QueryAllAllocationsRequest;
    toAmino(message: QueryAllAllocationsRequest): QueryAllAllocationsRequestAmino;
    fromAminoMsg(object: QueryAllAllocationsRequestAminoMsg): QueryAllAllocationsRequest;
    fromProtoMsg(message: QueryAllAllocationsRequestProtoMsg): QueryAllAllocationsRequest;
    toProto(message: QueryAllAllocationsRequest): Uint8Array;
    toProtoMsg(message: QueryAllAllocationsRequest): QueryAllAllocationsRequestProtoMsg;
};
export declare const QueryAllAllocationsResponse: {
    typeUrl: string;
    encode(message: QueryAllAllocationsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAllAllocationsResponse;
    fromPartial(object: Partial<QueryAllAllocationsResponse>): QueryAllAllocationsResponse;
    fromAmino(object: QueryAllAllocationsResponseAmino): QueryAllAllocationsResponse;
    toAmino(message: QueryAllAllocationsResponse): QueryAllAllocationsResponseAmino;
    fromAminoMsg(object: QueryAllAllocationsResponseAminoMsg): QueryAllAllocationsResponse;
    fromProtoMsg(message: QueryAllAllocationsResponseProtoMsg): QueryAllAllocationsResponse;
    toProto(message: QueryAllAllocationsResponse): Uint8Array;
    toProtoMsg(message: QueryAllAllocationsResponse): QueryAllAllocationsResponseProtoMsg;
};
export declare const QueryUserSummaryRequest: {
    typeUrl: string;
    encode(message: QueryUserSummaryRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryUserSummaryRequest;
    fromPartial(object: Partial<QueryUserSummaryRequest>): QueryUserSummaryRequest;
    fromAmino(object: QueryUserSummaryRequestAmino): QueryUserSummaryRequest;
    toAmino(message: QueryUserSummaryRequest): QueryUserSummaryRequestAmino;
    fromAminoMsg(object: QueryUserSummaryRequestAminoMsg): QueryUserSummaryRequest;
    fromProtoMsg(message: QueryUserSummaryRequestProtoMsg): QueryUserSummaryRequest;
    toProto(message: QueryUserSummaryRequest): Uint8Array;
    toProtoMsg(message: QueryUserSummaryRequest): QueryUserSummaryRequestProtoMsg;
};
export declare const QueryUserSummaryResponse: {
    typeUrl: string;
    encode(message: QueryUserSummaryResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryUserSummaryResponse;
    fromPartial(object: Partial<QueryUserSummaryResponse>): QueryUserSummaryResponse;
    fromAmino(object: QueryUserSummaryResponseAmino): QueryUserSummaryResponse;
    toAmino(message: QueryUserSummaryResponse): QueryUserSummaryResponseAmino;
    fromAminoMsg(object: QueryUserSummaryResponseAminoMsg): QueryUserSummaryResponse;
    fromProtoMsg(message: QueryUserSummaryResponseProtoMsg): QueryUserSummaryResponse;
    toProto(message: QueryUserSummaryResponse): Uint8Array;
    toProtoMsg(message: QueryUserSummaryResponse): QueryUserSummaryResponseProtoMsg;
};
