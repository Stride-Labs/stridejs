import { LCDClient } from "@osmonauts/lcd";
import { QueryAllRateLimitsRequest, QueryAllRateLimitsResponseSDKType, QueryRateLimitRequest, QueryRateLimitResponseSDKType, QueryRateLimitsByChainIdRequest, QueryRateLimitsByChainIdResponseSDKType, QueryRateLimitsByChannelIdRequest, QueryRateLimitsByChannelIdResponseSDKType, QueryAllBlacklistedDenomsRequest, QueryAllBlacklistedDenomsResponseSDKType, QueryAllWhitelistedAddressesRequest, QueryAllWhitelistedAddressesResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;

  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.allRateLimits = this.allRateLimits.bind(this);
    this.rateLimit = this.rateLimit.bind(this);
    this.rateLimitsByChainId = this.rateLimitsByChainId.bind(this);
    this.rateLimitsByChannelId = this.rateLimitsByChannelId.bind(this);
    this.allBlacklistedDenoms = this.allBlacklistedDenoms.bind(this);
    this.allWhitelistedAddresses = this.allWhitelistedAddresses.bind(this);
  }
  /* AllRateLimits */


  async allRateLimits(_params: QueryAllRateLimitsRequest = {}): Promise<QueryAllRateLimitsResponseSDKType> {
    const endpoint = `Stride-Labs/stride/ratelimit/ratelimits`;
    return await this.req.get<QueryAllRateLimitsResponseSDKType>(endpoint);
  }
  /* RateLimit */


  async rateLimit(params: QueryRateLimitRequest): Promise<QueryRateLimitResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.denom !== "undefined") {
      options.params.denom = params.denom;
    }

    const endpoint = `Stride-Labs/stride/ratelimit/ratelimit/${params.channelId}/by_denom`;
    return await this.req.get<QueryRateLimitResponseSDKType>(endpoint, options);
  }
  /* RateLimitsByChainId */


  async rateLimitsByChainId(params: QueryRateLimitsByChainIdRequest): Promise<QueryRateLimitsByChainIdResponseSDKType> {
    const endpoint = `Stride-Labs/stride/ratelimit/ratelimits/${params.chainId}`;
    return await this.req.get<QueryRateLimitsByChainIdResponseSDKType>(endpoint);
  }
  /* RateLimitsByChannelId */


  async rateLimitsByChannelId(params: QueryRateLimitsByChannelIdRequest): Promise<QueryRateLimitsByChannelIdResponseSDKType> {
    const endpoint = `Stride-Labs/stride/ratelimit/ratelimits/${params.channelId}`;
    return await this.req.get<QueryRateLimitsByChannelIdResponseSDKType>(endpoint);
  }
  /* AllBlacklistedDenoms */


  async allBlacklistedDenoms(_params: QueryAllBlacklistedDenomsRequest = {}): Promise<QueryAllBlacklistedDenomsResponseSDKType> {
    const endpoint = `Stride-Labs/stride/ratelimit/blacklisted_denoms`;
    return await this.req.get<QueryAllBlacklistedDenomsResponseSDKType>(endpoint);
  }
  /* AllWhitelistedAddresses */


  async allWhitelistedAddresses(_params: QueryAllWhitelistedAddressesRequest = {}): Promise<QueryAllWhitelistedAddressesResponseSDKType> {
    const endpoint = `Stride-Labs/stride/ratelimit/whitelisted_addresses`;
    return await this.req.get<QueryAllWhitelistedAddressesResponseSDKType>(endpoint);
  }

}