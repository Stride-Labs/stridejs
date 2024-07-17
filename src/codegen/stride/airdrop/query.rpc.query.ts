import { Rpc } from "@osmonauts/helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryAirdropRequest, QueryAirdropResponse, QueryAllAirdropsRequest, QueryAllAirdropsResponse, QueryUserAllocationRequest, QueryUserAllocationResponse, QueryUserAllocationsRequest, QueryUserAllocationsResponse, QueryAllAllocationsRequest, QueryAllAllocationsResponse, QueryUserSummaryRequest, QueryUserSummaryResponse } from "./query";
/** Query defines the RPC service */

export interface Query {
  airdrop(request: QueryAirdropRequest): Promise<QueryAirdropResponse>;
  /*Queries the configuration for a given airdrop*/

  allAirdrops(request?: QueryAllAirdropsRequest): Promise<QueryAllAirdropsResponse>;
  /*Queries all airdrop configurations*/

  userAllocation(request: QueryUserAllocationRequest): Promise<QueryUserAllocationResponse>;
  /*Queries the allocation for a given user for an airdrop*/

  userAllocations(request: QueryUserAllocationsRequest): Promise<QueryUserAllocationsResponse>;
  /*Queries the allocations for a given user across all airdrops*/

  allAllocations(request: QueryAllAllocationsRequest): Promise<QueryAllAllocationsResponse>;
  /*Queries all allocations across all addresses*/

  userSummary(request: QueryUserSummaryRequest): Promise<QueryUserSummaryResponse>;
  /*Queries the state of an address for an airdrop including the claim type,
   amount claimed so far, and unclaimed amount*/

}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.airdrop = this.airdrop.bind(this);
    this.allAirdrops = this.allAirdrops.bind(this);
    this.userAllocation = this.userAllocation.bind(this);
    this.userAllocations = this.userAllocations.bind(this);
    this.allAllocations = this.allAllocations.bind(this);
    this.userSummary = this.userSummary.bind(this);
  }

  airdrop(request: QueryAirdropRequest): Promise<QueryAirdropResponse> {
    const data = QueryAirdropRequest.encode(request).finish();
    const promise = this.rpc.request("stride.airdrop.Query", "Airdrop", data);
    return promise.then(data => QueryAirdropResponse.decode(new _m0.Reader(data)));
  }

  allAirdrops(request: QueryAllAirdropsRequest = {}): Promise<QueryAllAirdropsResponse> {
    const data = QueryAllAirdropsRequest.encode(request).finish();
    const promise = this.rpc.request("stride.airdrop.Query", "AllAirdrops", data);
    return promise.then(data => QueryAllAirdropsResponse.decode(new _m0.Reader(data)));
  }

  userAllocation(request: QueryUserAllocationRequest): Promise<QueryUserAllocationResponse> {
    const data = QueryUserAllocationRequest.encode(request).finish();
    const promise = this.rpc.request("stride.airdrop.Query", "UserAllocation", data);
    return promise.then(data => QueryUserAllocationResponse.decode(new _m0.Reader(data)));
  }

  userAllocations(request: QueryUserAllocationsRequest): Promise<QueryUserAllocationsResponse> {
    const data = QueryUserAllocationsRequest.encode(request).finish();
    const promise = this.rpc.request("stride.airdrop.Query", "UserAllocations", data);
    return promise.then(data => QueryUserAllocationsResponse.decode(new _m0.Reader(data)));
  }

  allAllocations(request: QueryAllAllocationsRequest): Promise<QueryAllAllocationsResponse> {
    const data = QueryAllAllocationsRequest.encode(request).finish();
    const promise = this.rpc.request("stride.airdrop.Query", "AllAllocations", data);
    return promise.then(data => QueryAllAllocationsResponse.decode(new _m0.Reader(data)));
  }

  userSummary(request: QueryUserSummaryRequest): Promise<QueryUserSummaryResponse> {
    const data = QueryUserSummaryRequest.encode(request).finish();
    const promise = this.rpc.request("stride.airdrop.Query", "UserSummary", data);
    return promise.then(data => QueryUserSummaryResponse.decode(new _m0.Reader(data)));
  }

}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    airdrop(request: QueryAirdropRequest): Promise<QueryAirdropResponse> {
      return queryService.airdrop(request);
    },

    allAirdrops(request?: QueryAllAirdropsRequest): Promise<QueryAllAirdropsResponse> {
      return queryService.allAirdrops(request);
    },

    userAllocation(request: QueryUserAllocationRequest): Promise<QueryUserAllocationResponse> {
      return queryService.userAllocation(request);
    },

    userAllocations(request: QueryUserAllocationsRequest): Promise<QueryUserAllocationsResponse> {
      return queryService.userAllocations(request);
    },

    allAllocations(request: QueryAllAllocationsRequest): Promise<QueryAllAllocationsResponse> {
      return queryService.allAllocations(request);
    },

    userSummary(request: QueryUserSummaryRequest): Promise<QueryUserSummaryResponse> {
      return queryService.userSummary(request);
    }

  };
};