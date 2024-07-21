import { TxRpc } from "../../types";
import { BinaryReader } from "../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
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
export class QueryClientImpl implements Query {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
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
    return promise.then(data => QueryAirdropResponse.decode(new BinaryReader(data)));
  }
  allAirdrops(request: QueryAllAirdropsRequest = {}): Promise<QueryAllAirdropsResponse> {
    const data = QueryAllAirdropsRequest.encode(request).finish();
    const promise = this.rpc.request("stride.airdrop.Query", "AllAirdrops", data);
    return promise.then(data => QueryAllAirdropsResponse.decode(new BinaryReader(data)));
  }
  userAllocation(request: QueryUserAllocationRequest): Promise<QueryUserAllocationResponse> {
    const data = QueryUserAllocationRequest.encode(request).finish();
    const promise = this.rpc.request("stride.airdrop.Query", "UserAllocation", data);
    return promise.then(data => QueryUserAllocationResponse.decode(new BinaryReader(data)));
  }
  userAllocations(request: QueryUserAllocationsRequest): Promise<QueryUserAllocationsResponse> {
    const data = QueryUserAllocationsRequest.encode(request).finish();
    const promise = this.rpc.request("stride.airdrop.Query", "UserAllocations", data);
    return promise.then(data => QueryUserAllocationsResponse.decode(new BinaryReader(data)));
  }
  allAllocations(request: QueryAllAllocationsRequest): Promise<QueryAllAllocationsResponse> {
    const data = QueryAllAllocationsRequest.encode(request).finish();
    const promise = this.rpc.request("stride.airdrop.Query", "AllAllocations", data);
    return promise.then(data => QueryAllAllocationsResponse.decode(new BinaryReader(data)));
  }
  userSummary(request: QueryUserSummaryRequest): Promise<QueryUserSummaryResponse> {
    const data = QueryUserSummaryRequest.encode(request).finish();
    const promise = this.rpc.request("stride.airdrop.Query", "UserSummary", data);
    return promise.then(data => QueryUserSummaryResponse.decode(new BinaryReader(data)));
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