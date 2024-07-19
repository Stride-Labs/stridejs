import { LCDClient } from "@cosmology/lcd";
import { QueryAirdropRequest, QueryAirdropResponseSDKType, QueryAllAirdropsRequest, QueryAllAirdropsResponseSDKType, QueryUserAllocationRequest, QueryUserAllocationResponseSDKType, QueryUserAllocationsRequest, QueryUserAllocationsResponseSDKType, QueryAllAllocationsRequest, QueryAllAllocationsResponseSDKType, QueryUserSummaryRequest, QueryUserSummaryResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    airdrop(params: QueryAirdropRequest): Promise<QueryAirdropResponseSDKType>;
    allAirdrops(_params?: QueryAllAirdropsRequest): Promise<QueryAllAirdropsResponseSDKType>;
    userAllocation(params: QueryUserAllocationRequest): Promise<QueryUserAllocationResponseSDKType>;
    userAllocations(params: QueryUserAllocationsRequest): Promise<QueryUserAllocationsResponseSDKType>;
    allAllocations(params: QueryAllAllocationsRequest): Promise<QueryAllAllocationsResponseSDKType>;
    userSummary(params: QueryUserSummaryRequest): Promise<QueryUserSummaryResponseSDKType>;
}
