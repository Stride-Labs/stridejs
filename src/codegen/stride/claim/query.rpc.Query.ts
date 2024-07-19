import { Rpc } from "../../helpers";
import { BinaryReader } from "../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryDistributorAccountBalanceRequest, QueryDistributorAccountBalanceResponse, QueryParamsRequest, QueryParamsResponse, QueryClaimRecordRequest, QueryClaimRecordResponse, QueryClaimableForActionRequest, QueryClaimableForActionResponse, QueryTotalClaimableRequest, QueryTotalClaimableResponse, QueryUserVestingsRequest, QueryUserVestingsResponse, QueryClaimStatusRequest, QueryClaimStatusResponse, QueryClaimMetadataRequest, QueryClaimMetadataResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  distributorAccountBalance(request: QueryDistributorAccountBalanceRequest): Promise<QueryDistributorAccountBalanceResponse>;
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  claimRecord(request: QueryClaimRecordRequest): Promise<QueryClaimRecordResponse>;
  claimableForAction(request: QueryClaimableForActionRequest): Promise<QueryClaimableForActionResponse>;
  totalClaimable(request: QueryTotalClaimableRequest): Promise<QueryTotalClaimableResponse>;
  userVestings(request: QueryUserVestingsRequest): Promise<QueryUserVestingsResponse>;
  claimStatus(request: QueryClaimStatusRequest): Promise<QueryClaimStatusResponse>;
  claimMetadata(request?: QueryClaimMetadataRequest): Promise<QueryClaimMetadataResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.distributorAccountBalance = this.distributorAccountBalance.bind(this);
    this.params = this.params.bind(this);
    this.claimRecord = this.claimRecord.bind(this);
    this.claimableForAction = this.claimableForAction.bind(this);
    this.totalClaimable = this.totalClaimable.bind(this);
    this.userVestings = this.userVestings.bind(this);
    this.claimStatus = this.claimStatus.bind(this);
    this.claimMetadata = this.claimMetadata.bind(this);
  }
  distributorAccountBalance(request: QueryDistributorAccountBalanceRequest): Promise<QueryDistributorAccountBalanceResponse> {
    const data = QueryDistributorAccountBalanceRequest.encode(request).finish();
    const promise = this.rpc.request("stride.claim.Query", "DistributorAccountBalance", data);
    return promise.then(data => QueryDistributorAccountBalanceResponse.decode(new BinaryReader(data)));
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("stride.claim.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  }
  claimRecord(request: QueryClaimRecordRequest): Promise<QueryClaimRecordResponse> {
    const data = QueryClaimRecordRequest.encode(request).finish();
    const promise = this.rpc.request("stride.claim.Query", "ClaimRecord", data);
    return promise.then(data => QueryClaimRecordResponse.decode(new BinaryReader(data)));
  }
  claimableForAction(request: QueryClaimableForActionRequest): Promise<QueryClaimableForActionResponse> {
    const data = QueryClaimableForActionRequest.encode(request).finish();
    const promise = this.rpc.request("stride.claim.Query", "ClaimableForAction", data);
    return promise.then(data => QueryClaimableForActionResponse.decode(new BinaryReader(data)));
  }
  totalClaimable(request: QueryTotalClaimableRequest): Promise<QueryTotalClaimableResponse> {
    const data = QueryTotalClaimableRequest.encode(request).finish();
    const promise = this.rpc.request("stride.claim.Query", "TotalClaimable", data);
    return promise.then(data => QueryTotalClaimableResponse.decode(new BinaryReader(data)));
  }
  userVestings(request: QueryUserVestingsRequest): Promise<QueryUserVestingsResponse> {
    const data = QueryUserVestingsRequest.encode(request).finish();
    const promise = this.rpc.request("stride.claim.Query", "UserVestings", data);
    return promise.then(data => QueryUserVestingsResponse.decode(new BinaryReader(data)));
  }
  claimStatus(request: QueryClaimStatusRequest): Promise<QueryClaimStatusResponse> {
    const data = QueryClaimStatusRequest.encode(request).finish();
    const promise = this.rpc.request("stride.claim.Query", "ClaimStatus", data);
    return promise.then(data => QueryClaimStatusResponse.decode(new BinaryReader(data)));
  }
  claimMetadata(request: QueryClaimMetadataRequest = {}): Promise<QueryClaimMetadataResponse> {
    const data = QueryClaimMetadataRequest.encode(request).finish();
    const promise = this.rpc.request("stride.claim.Query", "ClaimMetadata", data);
    return promise.then(data => QueryClaimMetadataResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    distributorAccountBalance(request: QueryDistributorAccountBalanceRequest): Promise<QueryDistributorAccountBalanceResponse> {
      return queryService.distributorAccountBalance(request);
    },
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    claimRecord(request: QueryClaimRecordRequest): Promise<QueryClaimRecordResponse> {
      return queryService.claimRecord(request);
    },
    claimableForAction(request: QueryClaimableForActionRequest): Promise<QueryClaimableForActionResponse> {
      return queryService.claimableForAction(request);
    },
    totalClaimable(request: QueryTotalClaimableRequest): Promise<QueryTotalClaimableResponse> {
      return queryService.totalClaimable(request);
    },
    userVestings(request: QueryUserVestingsRequest): Promise<QueryUserVestingsResponse> {
      return queryService.userVestings(request);
    },
    claimStatus(request: QueryClaimStatusRequest): Promise<QueryClaimStatusResponse> {
      return queryService.claimStatus(request);
    },
    claimMetadata(request?: QueryClaimMetadataRequest): Promise<QueryClaimMetadataResponse> {
      return queryService.claimMetadata(request);
    }
  };
};