import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { Airdrop, AirdropSDKType, UserAllocation, UserAllocationSDKType } from "./airdrop";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
/** Airdrop */
export interface QueryAirdropRequest {
    /** Airdrop */
    id: string;
}
/** Airdrop */
export interface QueryAirdropRequestSDKType {
    /** Airdrop */
    id: string;
}
export interface QueryAirdropResponse {
    airdrop: Airdrop;
}
export interface QueryAirdropResponseSDKType {
    airdrop: AirdropSDKType;
}
/** Airdrops */
export interface QueryAllAirdropsRequest {
}
/** Airdrops */
export interface QueryAllAirdropsRequestSDKType {
}
export interface QueryAllAirdropsResponse {
    airdrops: Airdrop[];
}
export interface QueryAllAirdropsResponseSDKType {
    airdrops: AirdropSDKType[];
}
/** UserAllocation */
export interface QueryUserAllocationRequest {
    airdropId: string;
    address: string;
}
/** UserAllocation */
export interface QueryUserAllocationRequestSDKType {
    airdrop_id: string;
    address: string;
}
export interface QueryUserAllocationResponse {
    userAllocation: UserAllocation;
}
export interface QueryUserAllocationResponseSDKType {
    user_allocation: UserAllocationSDKType;
}
/** UserAllocations */
export interface QueryUserAllocationsRequest {
    address: string;
}
/** UserAllocations */
export interface QueryUserAllocationsRequestSDKType {
    address: string;
}
export interface QueryUserAllocationsResponse {
    userAllocations: UserAllocation[];
}
export interface QueryUserAllocationsResponseSDKType {
    user_allocations: UserAllocationSDKType[];
}
/** AllAllocations */
export interface QueryAllAllocationsRequest {
    airdropId: string;
    pagination?: PageRequest;
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
export interface QueryAllAllocationsResponseSDKType {
    allocations: UserAllocationSDKType[];
    pagination?: PageResponseSDKType;
}
/** UserSummary */
export interface QueryUserSummaryRequest {
    airdropId: string;
    address: string;
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
    /** The current date index into the airdrop array */
    currentDateIndex: Long;
}
export interface QueryUserSummaryResponseSDKType {
    /** The claim type (claim daily or claim early) */
    claim_type: string;
    /** The total rewards claimed so far */
    claimed: string;
    /** The total rewards forfeited (in the case of claiming early) */
    forfeited: string;
    /** The total rewards remaining */
    remaining: string;
    /** The total rewards that can be claimed right now */
    claimable: string;
    /** The current date index into the airdrop array */
    current_date_index: Long;
}
export declare const QueryAirdropRequest: {
    encode(message: QueryAirdropRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAirdropRequest;
    fromPartial(object: DeepPartial<QueryAirdropRequest>): QueryAirdropRequest;
};
export declare const QueryAirdropResponse: {
    encode(message: QueryAirdropResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAirdropResponse;
    fromPartial(object: DeepPartial<QueryAirdropResponse>): QueryAirdropResponse;
};
export declare const QueryAllAirdropsRequest: {
    encode(_: QueryAllAirdropsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllAirdropsRequest;
    fromPartial(_: DeepPartial<QueryAllAirdropsRequest>): QueryAllAirdropsRequest;
};
export declare const QueryAllAirdropsResponse: {
    encode(message: QueryAllAirdropsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllAirdropsResponse;
    fromPartial(object: DeepPartial<QueryAllAirdropsResponse>): QueryAllAirdropsResponse;
};
export declare const QueryUserAllocationRequest: {
    encode(message: QueryUserAllocationRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryUserAllocationRequest;
    fromPartial(object: DeepPartial<QueryUserAllocationRequest>): QueryUserAllocationRequest;
};
export declare const QueryUserAllocationResponse: {
    encode(message: QueryUserAllocationResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryUserAllocationResponse;
    fromPartial(object: DeepPartial<QueryUserAllocationResponse>): QueryUserAllocationResponse;
};
export declare const QueryUserAllocationsRequest: {
    encode(message: QueryUserAllocationsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryUserAllocationsRequest;
    fromPartial(object: DeepPartial<QueryUserAllocationsRequest>): QueryUserAllocationsRequest;
};
export declare const QueryUserAllocationsResponse: {
    encode(message: QueryUserAllocationsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryUserAllocationsResponse;
    fromPartial(object: DeepPartial<QueryUserAllocationsResponse>): QueryUserAllocationsResponse;
};
export declare const QueryAllAllocationsRequest: {
    encode(message: QueryAllAllocationsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllAllocationsRequest;
    fromPartial(object: DeepPartial<QueryAllAllocationsRequest>): QueryAllAllocationsRequest;
};
export declare const QueryAllAllocationsResponse: {
    encode(message: QueryAllAllocationsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllAllocationsResponse;
    fromPartial(object: DeepPartial<QueryAllAllocationsResponse>): QueryAllAllocationsResponse;
};
export declare const QueryUserSummaryRequest: {
    encode(message: QueryUserSummaryRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryUserSummaryRequest;
    fromPartial(object: DeepPartial<QueryUserSummaryRequest>): QueryUserSummaryRequest;
};
export declare const QueryUserSummaryResponse: {
    encode(message: QueryUserSummaryResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryUserSummaryResponse;
    fromPartial(object: DeepPartial<QueryUserSummaryResponse>): QueryUserSummaryResponse;
};
