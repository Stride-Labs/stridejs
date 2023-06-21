import { Rpc } from "@osmonauts/helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryAllRateLimitsRequest, QueryAllRateLimitsResponse, QueryRateLimitRequest, QueryRateLimitResponse, QueryRateLimitsByChainIdRequest, QueryRateLimitsByChainIdResponse, QueryRateLimitsByChannelIdRequest, QueryRateLimitsByChannelIdResponse, QueryAllBlacklistedDenomsRequest, QueryAllBlacklistedDenomsResponse, QueryAllWhitelistedAddressesRequest, QueryAllWhitelistedAddressesResponse } from "./query";
/** Query defines the RPC service */

export interface Query {
  allRateLimits(request?: QueryAllRateLimitsRequest): Promise<QueryAllRateLimitsResponse>;
  /*null*/

  rateLimit(request: QueryRateLimitRequest): Promise<QueryRateLimitResponse>;
  /*null*/

  rateLimitsByChainId(request: QueryRateLimitsByChainIdRequest): Promise<QueryRateLimitsByChainIdResponse>;
  /*null*/

  rateLimitsByChannelId(request: QueryRateLimitsByChannelIdRequest): Promise<QueryRateLimitsByChannelIdResponse>;
  /*null*/

  allBlacklistedDenoms(request?: QueryAllBlacklistedDenomsRequest): Promise<QueryAllBlacklistedDenomsResponse>;
  /*null*/

  allWhitelistedAddresses(request?: QueryAllWhitelistedAddressesRequest): Promise<QueryAllWhitelistedAddressesResponse>;
  /*null*/

}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.allRateLimits = this.allRateLimits.bind(this);
    this.rateLimit = this.rateLimit.bind(this);
    this.rateLimitsByChainId = this.rateLimitsByChainId.bind(this);
    this.rateLimitsByChannelId = this.rateLimitsByChannelId.bind(this);
    this.allBlacklistedDenoms = this.allBlacklistedDenoms.bind(this);
    this.allWhitelistedAddresses = this.allWhitelistedAddresses.bind(this);
  }

  allRateLimits(request: QueryAllRateLimitsRequest = {}): Promise<QueryAllRateLimitsResponse> {
    const data = QueryAllRateLimitsRequest.encode(request).finish();
    const promise = this.rpc.request("stride.ratelimit.Query", "AllRateLimits", data);
    return promise.then(data => QueryAllRateLimitsResponse.decode(new _m0.Reader(data)));
  }

  rateLimit(request: QueryRateLimitRequest): Promise<QueryRateLimitResponse> {
    const data = QueryRateLimitRequest.encode(request).finish();
    const promise = this.rpc.request("stride.ratelimit.Query", "RateLimit", data);
    return promise.then(data => QueryRateLimitResponse.decode(new _m0.Reader(data)));
  }

  rateLimitsByChainId(request: QueryRateLimitsByChainIdRequest): Promise<QueryRateLimitsByChainIdResponse> {
    const data = QueryRateLimitsByChainIdRequest.encode(request).finish();
    const promise = this.rpc.request("stride.ratelimit.Query", "RateLimitsByChainId", data);
    return promise.then(data => QueryRateLimitsByChainIdResponse.decode(new _m0.Reader(data)));
  }

  rateLimitsByChannelId(request: QueryRateLimitsByChannelIdRequest): Promise<QueryRateLimitsByChannelIdResponse> {
    const data = QueryRateLimitsByChannelIdRequest.encode(request).finish();
    const promise = this.rpc.request("stride.ratelimit.Query", "RateLimitsByChannelId", data);
    return promise.then(data => QueryRateLimitsByChannelIdResponse.decode(new _m0.Reader(data)));
  }

  allBlacklistedDenoms(request: QueryAllBlacklistedDenomsRequest = {}): Promise<QueryAllBlacklistedDenomsResponse> {
    const data = QueryAllBlacklistedDenomsRequest.encode(request).finish();
    const promise = this.rpc.request("stride.ratelimit.Query", "AllBlacklistedDenoms", data);
    return promise.then(data => QueryAllBlacklistedDenomsResponse.decode(new _m0.Reader(data)));
  }

  allWhitelistedAddresses(request: QueryAllWhitelistedAddressesRequest = {}): Promise<QueryAllWhitelistedAddressesResponse> {
    const data = QueryAllWhitelistedAddressesRequest.encode(request).finish();
    const promise = this.rpc.request("stride.ratelimit.Query", "AllWhitelistedAddresses", data);
    return promise.then(data => QueryAllWhitelistedAddressesResponse.decode(new _m0.Reader(data)));
  }

}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    allRateLimits(request?: QueryAllRateLimitsRequest): Promise<QueryAllRateLimitsResponse> {
      return queryService.allRateLimits(request);
    },

    rateLimit(request: QueryRateLimitRequest): Promise<QueryRateLimitResponse> {
      return queryService.rateLimit(request);
    },

    rateLimitsByChainId(request: QueryRateLimitsByChainIdRequest): Promise<QueryRateLimitsByChainIdResponse> {
      return queryService.rateLimitsByChainId(request);
    },

    rateLimitsByChannelId(request: QueryRateLimitsByChannelIdRequest): Promise<QueryRateLimitsByChannelIdResponse> {
      return queryService.rateLimitsByChannelId(request);
    },

    allBlacklistedDenoms(request?: QueryAllBlacklistedDenomsRequest): Promise<QueryAllBlacklistedDenomsResponse> {
      return queryService.allBlacklistedDenoms(request);
    },

    allWhitelistedAddresses(request?: QueryAllWhitelistedAddressesRequest): Promise<QueryAllWhitelistedAddressesResponse> {
      return queryService.allWhitelistedAddresses(request);
    }

  };
};