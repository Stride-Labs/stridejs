import { Rpc } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { ReactQueryParams } from "../../react-query";
import { useQuery } from "@tanstack/react-query";
import { QueryParamsRequest, QueryParamsResponse, QueryGetUserRedemptionRecordRequest, QueryGetUserRedemptionRecordResponse, QueryAllUserRedemptionRecordRequest, QueryAllUserRedemptionRecordResponse, QueryAllUserRedemptionRecordForUserRequest, QueryAllUserRedemptionRecordForUserResponse, QueryGetEpochUnbondingRecordRequest, QueryGetEpochUnbondingRecordResponse, QueryAllEpochUnbondingRecordRequest, QueryAllEpochUnbondingRecordResponse, QueryGetDepositRecordRequest, QueryGetDepositRecordResponse, QueryAllDepositRecordRequest, QueryAllDepositRecordResponse } from "./query";
/** Query defines the gRPC querier service. */

export interface Query {
  /** Parameters queries the parameters of the module. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a UserRedemptionRecord by id. */

  userRedemptionRecord(request: QueryGetUserRedemptionRecordRequest): Promise<QueryGetUserRedemptionRecordResponse>;
  /** Queries a list of UserRedemptionRecord items. */

  userRedemptionRecordAll(request?: QueryAllUserRedemptionRecordRequest): Promise<QueryAllUserRedemptionRecordResponse>;
  /** Queries a list of UserRedemptionRecord items by chainId / userId pair. */

  userRedemptionRecordForUser(request: QueryAllUserRedemptionRecordForUserRequest): Promise<QueryAllUserRedemptionRecordForUserResponse>;
  /** Queries a EpochUnbondingRecord by id. */

  epochUnbondingRecord(request: QueryGetEpochUnbondingRecordRequest): Promise<QueryGetEpochUnbondingRecordResponse>;
  /** Queries a list of EpochUnbondingRecord items. */

  epochUnbondingRecordAll(request?: QueryAllEpochUnbondingRecordRequest): Promise<QueryAllEpochUnbondingRecordResponse>;
  /** Queries a DepositRecord by id. */

  depositRecord(request: QueryGetDepositRecordRequest): Promise<QueryGetDepositRecordResponse>;
  /** Queries a list of DepositRecord items. */

  depositRecordAll(request?: QueryAllDepositRecordRequest): Promise<QueryAllDepositRecordResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.userRedemptionRecord = this.userRedemptionRecord.bind(this);
    this.userRedemptionRecordAll = this.userRedemptionRecordAll.bind(this);
    this.userRedemptionRecordForUser = this.userRedemptionRecordForUser.bind(this);
    this.epochUnbondingRecord = this.epochUnbondingRecord.bind(this);
    this.epochUnbondingRecordAll = this.epochUnbondingRecordAll.bind(this);
    this.depositRecord = this.depositRecord.bind(this);
    this.depositRecordAll = this.depositRecordAll.bind(this);
  }

  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("stride.records.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  userRedemptionRecord(request: QueryGetUserRedemptionRecordRequest): Promise<QueryGetUserRedemptionRecordResponse> {
    const data = QueryGetUserRedemptionRecordRequest.encode(request).finish();
    const promise = this.rpc.request("stride.records.Query", "UserRedemptionRecord", data);
    return promise.then(data => QueryGetUserRedemptionRecordResponse.decode(new _m0.Reader(data)));
  }

  userRedemptionRecordAll(request: QueryAllUserRedemptionRecordRequest = {
    pagination: undefined
  }): Promise<QueryAllUserRedemptionRecordResponse> {
    const data = QueryAllUserRedemptionRecordRequest.encode(request).finish();
    const promise = this.rpc.request("stride.records.Query", "UserRedemptionRecordAll", data);
    return promise.then(data => QueryAllUserRedemptionRecordResponse.decode(new _m0.Reader(data)));
  }

  userRedemptionRecordForUser(request: QueryAllUserRedemptionRecordForUserRequest): Promise<QueryAllUserRedemptionRecordForUserResponse> {
    const data = QueryAllUserRedemptionRecordForUserRequest.encode(request).finish();
    const promise = this.rpc.request("stride.records.Query", "UserRedemptionRecordForUser", data);
    return promise.then(data => QueryAllUserRedemptionRecordForUserResponse.decode(new _m0.Reader(data)));
  }

  epochUnbondingRecord(request: QueryGetEpochUnbondingRecordRequest): Promise<QueryGetEpochUnbondingRecordResponse> {
    const data = QueryGetEpochUnbondingRecordRequest.encode(request).finish();
    const promise = this.rpc.request("stride.records.Query", "EpochUnbondingRecord", data);
    return promise.then(data => QueryGetEpochUnbondingRecordResponse.decode(new _m0.Reader(data)));
  }

  epochUnbondingRecordAll(request: QueryAllEpochUnbondingRecordRequest = {
    pagination: undefined
  }): Promise<QueryAllEpochUnbondingRecordResponse> {
    const data = QueryAllEpochUnbondingRecordRequest.encode(request).finish();
    const promise = this.rpc.request("stride.records.Query", "EpochUnbondingRecordAll", data);
    return promise.then(data => QueryAllEpochUnbondingRecordResponse.decode(new _m0.Reader(data)));
  }

  depositRecord(request: QueryGetDepositRecordRequest): Promise<QueryGetDepositRecordResponse> {
    const data = QueryGetDepositRecordRequest.encode(request).finish();
    const promise = this.rpc.request("stride.records.Query", "DepositRecord", data);
    return promise.then(data => QueryGetDepositRecordResponse.decode(new _m0.Reader(data)));
  }

  depositRecordAll(request: QueryAllDepositRecordRequest = {
    pagination: undefined
  }): Promise<QueryAllDepositRecordResponse> {
    const data = QueryAllDepositRecordRequest.encode(request).finish();
    const promise = this.rpc.request("stride.records.Query", "DepositRecordAll", data);
    return promise.then(data => QueryAllDepositRecordResponse.decode(new _m0.Reader(data)));
  }

}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },

    userRedemptionRecord(request: QueryGetUserRedemptionRecordRequest): Promise<QueryGetUserRedemptionRecordResponse> {
      return queryService.userRedemptionRecord(request);
    },

    userRedemptionRecordAll(request?: QueryAllUserRedemptionRecordRequest): Promise<QueryAllUserRedemptionRecordResponse> {
      return queryService.userRedemptionRecordAll(request);
    },

    userRedemptionRecordForUser(request: QueryAllUserRedemptionRecordForUserRequest): Promise<QueryAllUserRedemptionRecordForUserResponse> {
      return queryService.userRedemptionRecordForUser(request);
    },

    epochUnbondingRecord(request: QueryGetEpochUnbondingRecordRequest): Promise<QueryGetEpochUnbondingRecordResponse> {
      return queryService.epochUnbondingRecord(request);
    },

    epochUnbondingRecordAll(request?: QueryAllEpochUnbondingRecordRequest): Promise<QueryAllEpochUnbondingRecordResponse> {
      return queryService.epochUnbondingRecordAll(request);
    },

    depositRecord(request: QueryGetDepositRecordRequest): Promise<QueryGetDepositRecordResponse> {
      return queryService.depositRecord(request);
    },

    depositRecordAll(request?: QueryAllDepositRecordRequest): Promise<QueryAllDepositRecordResponse> {
      return queryService.depositRecordAll(request);
    }

  };
};
export interface UseParamsQuery<TData> extends ReactQueryParams<QueryParamsResponse, TData> {
  request?: QueryParamsRequest;
}
export interface UseUserRedemptionRecordQuery<TData> extends ReactQueryParams<QueryGetUserRedemptionRecordResponse, TData> {
  request: QueryGetUserRedemptionRecordRequest;
}
export interface UseUserRedemptionRecordAllQuery<TData> extends ReactQueryParams<QueryAllUserRedemptionRecordResponse, TData> {
  request?: QueryAllUserRedemptionRecordRequest;
}
export interface UseUserRedemptionRecordForUserQuery<TData> extends ReactQueryParams<QueryAllUserRedemptionRecordForUserResponse, TData> {
  request: QueryAllUserRedemptionRecordForUserRequest;
}
export interface UseEpochUnbondingRecordQuery<TData> extends ReactQueryParams<QueryGetEpochUnbondingRecordResponse, TData> {
  request: QueryGetEpochUnbondingRecordRequest;
}
export interface UseEpochUnbondingRecordAllQuery<TData> extends ReactQueryParams<QueryAllEpochUnbondingRecordResponse, TData> {
  request?: QueryAllEpochUnbondingRecordRequest;
}
export interface UseDepositRecordQuery<TData> extends ReactQueryParams<QueryGetDepositRecordResponse, TData> {
  request: QueryGetDepositRecordRequest;
}
export interface UseDepositRecordAllQuery<TData> extends ReactQueryParams<QueryAllDepositRecordResponse, TData> {
  request?: QueryAllDepositRecordRequest;
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

  const useParams = <TData = QueryParamsResponse,>({
    request,
    options
  }: UseParamsQuery<TData>) => {
    return useQuery<QueryParamsResponse, Error, TData>(["paramsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.params(request);
    }, options);
  };

  const useUserRedemptionRecord = <TData = QueryGetUserRedemptionRecordResponse,>({
    request,
    options
  }: UseUserRedemptionRecordQuery<TData>) => {
    return useQuery<QueryGetUserRedemptionRecordResponse, Error, TData>(["userRedemptionRecordQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.userRedemptionRecord(request);
    }, options);
  };

  const useUserRedemptionRecordAll = <TData = QueryAllUserRedemptionRecordResponse,>({
    request,
    options
  }: UseUserRedemptionRecordAllQuery<TData>) => {
    return useQuery<QueryAllUserRedemptionRecordResponse, Error, TData>(["userRedemptionRecordAllQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.userRedemptionRecordAll(request);
    }, options);
  };

  const useUserRedemptionRecordForUser = <TData = QueryAllUserRedemptionRecordForUserResponse,>({
    request,
    options
  }: UseUserRedemptionRecordForUserQuery<TData>) => {
    return useQuery<QueryAllUserRedemptionRecordForUserResponse, Error, TData>(["userRedemptionRecordForUserQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.userRedemptionRecordForUser(request);
    }, options);
  };

  const useEpochUnbondingRecord = <TData = QueryGetEpochUnbondingRecordResponse,>({
    request,
    options
  }: UseEpochUnbondingRecordQuery<TData>) => {
    return useQuery<QueryGetEpochUnbondingRecordResponse, Error, TData>(["epochUnbondingRecordQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.epochUnbondingRecord(request);
    }, options);
  };

  const useEpochUnbondingRecordAll = <TData = QueryAllEpochUnbondingRecordResponse,>({
    request,
    options
  }: UseEpochUnbondingRecordAllQuery<TData>) => {
    return useQuery<QueryAllEpochUnbondingRecordResponse, Error, TData>(["epochUnbondingRecordAllQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.epochUnbondingRecordAll(request);
    }, options);
  };

  const useDepositRecord = <TData = QueryGetDepositRecordResponse,>({
    request,
    options
  }: UseDepositRecordQuery<TData>) => {
    return useQuery<QueryGetDepositRecordResponse, Error, TData>(["depositRecordQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.depositRecord(request);
    }, options);
  };

  const useDepositRecordAll = <TData = QueryAllDepositRecordResponse,>({
    request,
    options
  }: UseDepositRecordAllQuery<TData>) => {
    return useQuery<QueryAllDepositRecordResponse, Error, TData>(["depositRecordAllQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.depositRecordAll(request);
    }, options);
  };

  return {
    /** Parameters queries the parameters of the module. */
    useParams,

    /** Queries a UserRedemptionRecord by id. */
    useUserRedemptionRecord,

    /** Queries a list of UserRedemptionRecord items. */
    useUserRedemptionRecordAll,

    /** Queries a list of UserRedemptionRecord items by chainId / userId pair. */
    useUserRedemptionRecordForUser,

    /** Queries a EpochUnbondingRecord by id. */
    useEpochUnbondingRecord,

    /** Queries a list of EpochUnbondingRecord items. */
    useEpochUnbondingRecordAll,

    /** Queries a DepositRecord by id. */
    useDepositRecord,

    /** Queries a list of DepositRecord items. */
    useDepositRecordAll
  };
};