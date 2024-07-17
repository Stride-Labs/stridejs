import { Rpc } from "@osmonauts/helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryAirdropRequest, QueryAirdropResponse, QueryAllAirdropsRequest, QueryAllAirdropsResponse, QueryUserAllocationRequest, QueryUserAllocationResponse, QueryUserAllocationsRequest, QueryUserAllocationsResponse, QueryAllAllocationsRequest, QueryAllAllocationsResponse, QueryUserSummaryRequest, QueryUserSummaryResponse } from "./query";
/** Query defines the RPC service */
export interface Query {
    airdrop(request: QueryAirdropRequest): Promise<QueryAirdropResponse>;
    allAirdrops(request?: QueryAllAirdropsRequest): Promise<QueryAllAirdropsResponse>;
    userAllocation(request: QueryUserAllocationRequest): Promise<QueryUserAllocationResponse>;
    userAllocations(request: QueryUserAllocationsRequest): Promise<QueryUserAllocationsResponse>;
    allAllocations(request: QueryAllAllocationsRequest): Promise<QueryAllAllocationsResponse>;
    userSummary(request: QueryUserSummaryRequest): Promise<QueryUserSummaryResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
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
