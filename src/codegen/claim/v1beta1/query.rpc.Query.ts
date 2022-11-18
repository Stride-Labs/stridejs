import { Rpc } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryDistributorAccountBalanceRequest, QueryDistributorAccountBalanceResponse, QueryParamsRequest, QueryParamsResponse, QueryClaimRecordRequest, QueryClaimRecordResponse, QueryClaimableForActionRequest, QueryClaimableForActionResponse, QueryTotalClaimableRequest, QueryTotalClaimableResponse } from "./query";
/** Query defines the gRPC querier service. */

export interface Query {
  distributorAccountBalance(request: QueryDistributorAccountBalanceRequest): Promise<QueryDistributorAccountBalanceResponse>;
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  claimRecord(request: QueryClaimRecordRequest): Promise<QueryClaimRecordResponse>;
  claimableForAction(request: QueryClaimableForActionRequest): Promise<QueryClaimableForActionResponse>;
  totalClaimable(request: QueryTotalClaimableRequest): Promise<QueryTotalClaimableResponse>;
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
  }

  distributorAccountBalance(request: QueryDistributorAccountBalanceRequest): Promise<QueryDistributorAccountBalanceResponse> {
    const data = QueryDistributorAccountBalanceRequest.encode(request).finish();
    const promise = this.rpc.request("Stridelabs.stride.claim.v1beta1.Query", "DistributorAccountBalance", data);
    return promise.then(data => QueryDistributorAccountBalanceResponse.decode(new _m0.Reader(data)));
  }

  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("Stridelabs.stride.claim.v1beta1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  claimRecord(request: QueryClaimRecordRequest): Promise<QueryClaimRecordResponse> {
    const data = QueryClaimRecordRequest.encode(request).finish();
    const promise = this.rpc.request("Stridelabs.stride.claim.v1beta1.Query", "ClaimRecord", data);
    return promise.then(data => QueryClaimRecordResponse.decode(new _m0.Reader(data)));
  }

  claimableForAction(request: QueryClaimableForActionRequest): Promise<QueryClaimableForActionResponse> {
    const data = QueryClaimableForActionRequest.encode(request).finish();
    const promise = this.rpc.request("Stridelabs.stride.claim.v1beta1.Query", "ClaimableForAction", data);
    return promise.then(data => QueryClaimableForActionResponse.decode(new _m0.Reader(data)));
  }

  totalClaimable(request: QueryTotalClaimableRequest): Promise<QueryTotalClaimableResponse> {
    const data = QueryTotalClaimableRequest.encode(request).finish();
    const promise = this.rpc.request("Stridelabs.stride.claim.v1beta1.Query", "TotalClaimable", data);
    return promise.then(data => QueryTotalClaimableResponse.decode(new _m0.Reader(data)));
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
    }

  };
};