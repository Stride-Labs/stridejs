import { LCDClient } from "@osmonauts/lcd";
import { QueryAllRateLimitsRequest, QueryAllRateLimitsResponseSDKType, QueryRateLimitRequest, QueryRateLimitResponseSDKType, QueryRateLimitsByChainIdRequest, QueryRateLimitsByChainIdResponseSDKType, QueryRateLimitsByChannelIdRequest, QueryRateLimitsByChannelIdResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    allRateLimits(_params?: QueryAllRateLimitsRequest): Promise<QueryAllRateLimitsResponseSDKType>;
    rateLimit(params: QueryRateLimitRequest): Promise<QueryRateLimitResponseSDKType>;
    rateLimitsByChainId(params: QueryRateLimitsByChainIdRequest): Promise<QueryRateLimitsByChainIdResponseSDKType>;
    rateLimitsByChannelId(params: QueryRateLimitsByChannelIdRequest): Promise<QueryRateLimitsByChannelIdResponseSDKType>;
}
