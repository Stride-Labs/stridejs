import { setPaginationParams } from "../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { QueryAirdropRequest, QueryAirdropResponseSDKType, QueryAllAirdropsRequest, QueryAllAirdropsResponseSDKType, QueryUserAllocationRequest, QueryUserAllocationResponseSDKType, QueryUserAllocationsRequest, QueryUserAllocationsResponseSDKType, QueryAllAllocationsRequest, QueryAllAllocationsResponseSDKType, QueryUserSummaryRequest, QueryUserSummaryResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.airdrop = this.airdrop.bind(this);
    this.allAirdrops = this.allAirdrops.bind(this);
    this.userAllocation = this.userAllocation.bind(this);
    this.userAllocations = this.userAllocations.bind(this);
    this.allAllocations = this.allAllocations.bind(this);
    this.userSummary = this.userSummary.bind(this);
  }
  /* Queries the configuration for a given airdrop */
  async airdrop(params: QueryAirdropRequest): Promise<QueryAirdropResponseSDKType> {
    const endpoint = `Stride-Labs/stride/airdrop/airdrop/${params.id}`;
    return await this.req.get<QueryAirdropResponseSDKType>(endpoint);
  }
  /* Queries all airdrop configurations */
  async allAirdrops(_params: QueryAllAirdropsRequest = {}): Promise<QueryAllAirdropsResponseSDKType> {
    const endpoint = `Stride-Labs/stride/airdrop/airdrops`;
    return await this.req.get<QueryAllAirdropsResponseSDKType>(endpoint);
  }
  /* Queries the allocation for a given user for an airdrop */
  async userAllocation(params: QueryUserAllocationRequest): Promise<QueryUserAllocationResponseSDKType> {
    const endpoint = `Stride-Labs/stride/airdrop/user_allocation/${params.airdropId}/${params.address}`;
    return await this.req.get<QueryUserAllocationResponseSDKType>(endpoint);
  }
  /* Queries the allocations for a given user across all airdrops */
  async userAllocations(params: QueryUserAllocationsRequest): Promise<QueryUserAllocationsResponseSDKType> {
    const endpoint = `Stride-Labs/stride/airdrop/user_allocations/${params.address}`;
    return await this.req.get<QueryUserAllocationsResponseSDKType>(endpoint);
  }
  /* Queries all allocations across all addresses */
  async allAllocations(params: QueryAllAllocationsRequest): Promise<QueryAllAllocationsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `Stride-Labs/stride/airdrop/all_allocations/${params.airdropId}`;
    return await this.req.get<QueryAllAllocationsResponseSDKType>(endpoint, options);
  }
  /* Queries the state of an address for an airdrop including the claim type,
   amount claimed so far, and unclaimed amount */
  async userSummary(params: QueryUserSummaryRequest): Promise<QueryUserSummaryResponseSDKType> {
    const endpoint = `Stride-Labs/stride/airdrop/user_summary/${params.airdropId}/${params.address}`;
    return await this.req.get<QueryUserSummaryResponseSDKType>(endpoint);
  }
}