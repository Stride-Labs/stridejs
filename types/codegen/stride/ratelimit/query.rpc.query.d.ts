import { Rpc } from "@osmonauts/helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryAllRateLimitsRequest, QueryAllRateLimitsResponse, QueryRateLimitRequest, QueryRateLimitResponse, QueryRateLimitsByChainIdRequest, QueryRateLimitsByChainIdResponse, QueryRateLimitsByChannelIdRequest, QueryRateLimitsByChannelIdResponse, QueryAllBlacklistedDenomsRequest, QueryAllBlacklistedDenomsResponse, QueryAllWhitelistedAddressesRequest, QueryAllWhitelistedAddressesResponse } from "./query";
/** Query defines the RPC service */
export interface Query {
    allRateLimits(request?: QueryAllRateLimitsRequest): Promise<QueryAllRateLimitsResponse>;
    rateLimit(request: QueryRateLimitRequest): Promise<QueryRateLimitResponse>;
    rateLimitsByChainId(request: QueryRateLimitsByChainIdRequest): Promise<QueryRateLimitsByChainIdResponse>;
    rateLimitsByChannelId(request: QueryRateLimitsByChannelIdRequest): Promise<QueryRateLimitsByChannelIdResponse>;
    allBlacklistedDenoms(request?: QueryAllBlacklistedDenomsRequest): Promise<QueryAllBlacklistedDenomsResponse>;
    allWhitelistedAddresses(request?: QueryAllWhitelistedAddressesRequest): Promise<QueryAllWhitelistedAddressesResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    allRateLimits(request?: QueryAllRateLimitsRequest): Promise<QueryAllRateLimitsResponse>;
    rateLimit(request: QueryRateLimitRequest): Promise<QueryRateLimitResponse>;
    rateLimitsByChainId(request: QueryRateLimitsByChainIdRequest): Promise<QueryRateLimitsByChainIdResponse>;
    rateLimitsByChannelId(request: QueryRateLimitsByChannelIdRequest): Promise<QueryRateLimitsByChannelIdResponse>;
    allBlacklistedDenoms(request?: QueryAllBlacklistedDenomsRequest): Promise<QueryAllBlacklistedDenomsResponse>;
    allWhitelistedAddresses(request?: QueryAllWhitelistedAddressesRequest): Promise<QueryAllWhitelistedAddressesResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    allRateLimits(request?: QueryAllRateLimitsRequest): Promise<QueryAllRateLimitsResponse>;
    rateLimit(request: QueryRateLimitRequest): Promise<QueryRateLimitResponse>;
    rateLimitsByChainId(request: QueryRateLimitsByChainIdRequest): Promise<QueryRateLimitsByChainIdResponse>;
    rateLimitsByChannelId(request: QueryRateLimitsByChannelIdRequest): Promise<QueryRateLimitsByChannelIdResponse>;
    allBlacklistedDenoms(request?: QueryAllBlacklistedDenomsRequest): Promise<QueryAllBlacklistedDenomsResponse>;
    allWhitelistedAddresses(request?: QueryAllWhitelistedAddressesRequest): Promise<QueryAllWhitelistedAddressesResponse>;
};
