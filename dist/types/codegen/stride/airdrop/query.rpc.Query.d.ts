import { TxRpc } from "../../types";
import { QueryClient } from "@cosmjs/stargate";
import { QueryAirdropRequest, QueryAirdropResponse, QueryAllAirdropsRequest, QueryAllAirdropsResponse, QueryUserAllocationRequest, QueryUserAllocationResponse, QueryUserAllocationsRequest, QueryUserAllocationsResponse, QueryAllAllocationsRequest, QueryAllAllocationsResponse, QueryUserSummaryRequest, QueryUserSummaryResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
    /** Queries the configuration for a given airdrop */
    airdrop(request: QueryAirdropRequest): Promise<QueryAirdropResponse>;
    /** Queries all airdrop configurations */
    allAirdrops(request?: QueryAllAirdropsRequest): Promise<QueryAllAirdropsResponse>;
    /** Queries the allocation for a given user for an airdrop */
    userAllocation(request: QueryUserAllocationRequest): Promise<QueryUserAllocationResponse>;
    /** Queries the allocations for a given user across all airdrops */
    userAllocations(request: QueryUserAllocationsRequest): Promise<QueryUserAllocationsResponse>;
    /** Queries all allocations across all addresses */
    allAllocations(request: QueryAllAllocationsRequest): Promise<QueryAllAllocationsResponse>;
    /**
     * Queries the state of an address for an airdrop including the claim type,
     * amount claimed so far, and unclaimed amount
     */
    userSummary(request: QueryUserSummaryRequest): Promise<QueryUserSummaryResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: TxRpc);
    airdrop(request: QueryAirdropRequest): Promise<QueryAirdropResponse>;
    allAirdrops(request?: QueryAllAirdropsRequest): Promise<QueryAllAirdropsResponse>;
    userAllocation(request: QueryUserAllocationRequest): Promise<QueryUserAllocationResponse>;
    userAllocations(request: QueryUserAllocationsRequest): Promise<QueryUserAllocationsResponse>;
    allAllocations(request: QueryAllAllocationsRequest): Promise<QueryAllAllocationsResponse>;
    userSummary(request: QueryUserSummaryRequest): Promise<QueryUserSummaryResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    airdrop(request: QueryAirdropRequest): Promise<QueryAirdropResponse>;
    allAirdrops(request?: QueryAllAirdropsRequest): Promise<QueryAllAirdropsResponse>;
    userAllocation(request: QueryUserAllocationRequest): Promise<QueryUserAllocationResponse>;
    userAllocations(request: QueryUserAllocationsRequest): Promise<QueryUserAllocationsResponse>;
    allAllocations(request: QueryAllAllocationsRequest): Promise<QueryAllAllocationsResponse>;
    userSummary(request: QueryUserSummaryRequest): Promise<QueryUserSummaryResponse>;
};
