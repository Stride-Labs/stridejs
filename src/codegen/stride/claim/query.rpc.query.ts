import { Rpc } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { ReactQueryParams } from "../../react-query";
import { useQuery } from "@tanstack/react-query";
import { QueryDistributorAccountBalanceRequest, QueryDistributorAccountBalanceResponse, QueryParamsRequest, QueryParamsResponse, QueryClaimRecordRequest, QueryClaimRecordResponse, QueryClaimableForActionRequest, QueryClaimableForActionResponse, QueryTotalClaimableRequest, QueryTotalClaimableResponse, QueryUserVestingsRequest, QueryUserVestingsResponse } from "./query";
/** Query defines the gRPC querier service. */

export interface Query {
  distributorAccountBalance(request: QueryDistributorAccountBalanceRequest): Promise<QueryDistributorAccountBalanceResponse>;
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  claimRecord(request: QueryClaimRecordRequest): Promise<QueryClaimRecordResponse>;
  claimableForAction(request: QueryClaimableForActionRequest): Promise<QueryClaimableForActionResponse>;
  totalClaimable(request: QueryTotalClaimableRequest): Promise<QueryTotalClaimableResponse>;
  userVestings(request: QueryUserVestingsRequest): Promise<QueryUserVestingsResponse>;
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
  }

  distributorAccountBalance(request: QueryDistributorAccountBalanceRequest): Promise<QueryDistributorAccountBalanceResponse> {
    const data = QueryDistributorAccountBalanceRequest.encode(request).finish();
    const promise = this.rpc.request("stride.claim.Query", "DistributorAccountBalance", data);
    return promise.then(data => QueryDistributorAccountBalanceResponse.decode(new _m0.Reader(data)));
  }

  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("stride.claim.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  claimRecord(request: QueryClaimRecordRequest): Promise<QueryClaimRecordResponse> {
    const data = QueryClaimRecordRequest.encode(request).finish();
    const promise = this.rpc.request("stride.claim.Query", "ClaimRecord", data);
    return promise.then(data => QueryClaimRecordResponse.decode(new _m0.Reader(data)));
  }

  claimableForAction(request: QueryClaimableForActionRequest): Promise<QueryClaimableForActionResponse> {
    const data = QueryClaimableForActionRequest.encode(request).finish();
    const promise = this.rpc.request("stride.claim.Query", "ClaimableForAction", data);
    return promise.then(data => QueryClaimableForActionResponse.decode(new _m0.Reader(data)));
  }

  totalClaimable(request: QueryTotalClaimableRequest): Promise<QueryTotalClaimableResponse> {
    const data = QueryTotalClaimableRequest.encode(request).finish();
    const promise = this.rpc.request("stride.claim.Query", "TotalClaimable", data);
    return promise.then(data => QueryTotalClaimableResponse.decode(new _m0.Reader(data)));
  }

  userVestings(request: QueryUserVestingsRequest): Promise<QueryUserVestingsResponse> {
    const data = QueryUserVestingsRequest.encode(request).finish();
    const promise = this.rpc.request("stride.claim.Query", "UserVestings", data);
    return promise.then(data => QueryUserVestingsResponse.decode(new _m0.Reader(data)));
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
    }

  };
};
export interface UseDistributorAccountBalanceQuery<TData> extends ReactQueryParams<QueryDistributorAccountBalanceResponse, TData> {
  request: QueryDistributorAccountBalanceRequest;
}
export interface UseParamsQuery<TData> extends ReactQueryParams<QueryParamsResponse, TData> {
  request?: QueryParamsRequest;
}
export interface UseClaimRecordQuery<TData> extends ReactQueryParams<QueryClaimRecordResponse, TData> {
  request: QueryClaimRecordRequest;
}
export interface UseClaimableForActionQuery<TData> extends ReactQueryParams<QueryClaimableForActionResponse, TData> {
  request: QueryClaimableForActionRequest;
}
export interface UseTotalClaimableQuery<TData> extends ReactQueryParams<QueryTotalClaimableResponse, TData> {
  request: QueryTotalClaimableRequest;
}
export interface UseUserVestingsQuery<TData> extends ReactQueryParams<QueryUserVestingsResponse, TData> {
  request: QueryUserVestingsRequest;
}

const _queryClients: WeakMap<ProtobufRpcClient, QueryClientImpl> = new WeakMap();

const getQueryService = (rpc: ProtobufRpcClient | undefined): QueryClientImpl | undefined => {
  if (!rpc) return;

  if (_queryClients.has(rpc)) {
    return _queryClients.get(rpc);
  }

  const queryService = new QueryClientImpl(rpc);

  _queryClients.set(rpc, queryService);

  return queryService;
};

export const createRpcQueryHooks = (rpc: ProtobufRpcClient | undefined) => {
  const queryService = getQueryService(rpc);

  const useDistributorAccountBalance = <TData = QueryDistributorAccountBalanceResponse,>({
    request,
    options
  }: UseDistributorAccountBalanceQuery<TData>) => {
    return useQuery<QueryDistributorAccountBalanceResponse, Error, TData>(["distributorAccountBalanceQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.distributorAccountBalance(request);
    }, options);
  };

  const useParams = <TData = QueryParamsResponse,>({
    request,
    options
  }: UseParamsQuery<TData>) => {
    return useQuery<QueryParamsResponse, Error, TData>(["paramsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.params(request);
    }, options);
  };

  const useClaimRecord = <TData = QueryClaimRecordResponse,>({
    request,
    options
  }: UseClaimRecordQuery<TData>) => {
    return useQuery<QueryClaimRecordResponse, Error, TData>(["claimRecordQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.claimRecord(request);
    }, options);
  };

  const useClaimableForAction = <TData = QueryClaimableForActionResponse,>({
    request,
    options
  }: UseClaimableForActionQuery<TData>) => {
    return useQuery<QueryClaimableForActionResponse, Error, TData>(["claimableForActionQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.claimableForAction(request);
    }, options);
  };

  const useTotalClaimable = <TData = QueryTotalClaimableResponse,>({
    request,
    options
  }: UseTotalClaimableQuery<TData>) => {
    return useQuery<QueryTotalClaimableResponse, Error, TData>(["totalClaimableQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.totalClaimable(request);
    }, options);
  };

  const useUserVestings = <TData = QueryUserVestingsResponse,>({
    request,
    options
  }: UseUserVestingsQuery<TData>) => {
    return useQuery<QueryUserVestingsResponse, Error, TData>(["userVestingsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.userVestings(request);
    }, options);
  };

  return {
    useDistributorAccountBalance,
    useParams,
    useClaimRecord,
    useClaimableForAction,
    useTotalClaimable,
    useUserVestings
  };
};