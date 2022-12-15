import { Rpc } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { ReactQueryParams } from "../../react-query";
import { useQuery } from "@tanstack/react-query";
import { QueryEpochsInfoRequest, QueryEpochsInfoResponse, QueryCurrentEpochRequest, QueryCurrentEpochResponse, QueryEpochInfoRequest, QueryEpochInfoResponse } from "./query";
/** Query defines the gRPC querier service. */

export interface Query {
  /** EpochInfos provide running epochInfos */
  epochInfos(request?: QueryEpochsInfoRequest): Promise<QueryEpochsInfoResponse>;
  /** CurrentEpoch provide current epoch of specified identifier */

  currentEpoch(request: QueryCurrentEpochRequest): Promise<QueryCurrentEpochResponse>;
  /** CurrentEpoch provide current epoch of specified identifier */

  epochInfo(request: QueryEpochInfoRequest): Promise<QueryEpochInfoResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.epochInfos = this.epochInfos.bind(this);
    this.currentEpoch = this.currentEpoch.bind(this);
    this.epochInfo = this.epochInfo.bind(this);
  }

  epochInfos(request: QueryEpochsInfoRequest = {
    pagination: undefined
  }): Promise<QueryEpochsInfoResponse> {
    const data = QueryEpochsInfoRequest.encode(request).finish();
    const promise = this.rpc.request("stride.epochs.Query", "EpochInfos", data);
    return promise.then(data => QueryEpochsInfoResponse.decode(new _m0.Reader(data)));
  }

  currentEpoch(request: QueryCurrentEpochRequest): Promise<QueryCurrentEpochResponse> {
    const data = QueryCurrentEpochRequest.encode(request).finish();
    const promise = this.rpc.request("stride.epochs.Query", "CurrentEpoch", data);
    return promise.then(data => QueryCurrentEpochResponse.decode(new _m0.Reader(data)));
  }

  epochInfo(request: QueryEpochInfoRequest): Promise<QueryEpochInfoResponse> {
    const data = QueryEpochInfoRequest.encode(request).finish();
    const promise = this.rpc.request("stride.epochs.Query", "EpochInfo", data);
    return promise.then(data => QueryEpochInfoResponse.decode(new _m0.Reader(data)));
  }

}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    epochInfos(request?: QueryEpochsInfoRequest): Promise<QueryEpochsInfoResponse> {
      return queryService.epochInfos(request);
    },

    currentEpoch(request: QueryCurrentEpochRequest): Promise<QueryCurrentEpochResponse> {
      return queryService.currentEpoch(request);
    },

    epochInfo(request: QueryEpochInfoRequest): Promise<QueryEpochInfoResponse> {
      return queryService.epochInfo(request);
    }

  };
};
export interface UseEpochInfosQuery<TData> extends ReactQueryParams<QueryEpochsInfoResponse, TData> {
  request?: QueryEpochsInfoRequest;
}
export interface UseCurrentEpochQuery<TData> extends ReactQueryParams<QueryCurrentEpochResponse, TData> {
  request: QueryCurrentEpochRequest;
}
export interface UseEpochInfoQuery<TData> extends ReactQueryParams<QueryEpochInfoResponse, TData> {
  request: QueryEpochInfoRequest;
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

  const useEpochInfos = <TData = QueryEpochsInfoResponse,>({
    request,
    options
  }: UseEpochInfosQuery<TData>) => {
    return useQuery<QueryEpochsInfoResponse, Error, TData>(["epochInfosQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.epochInfos(request);
    }, options);
  };

  const useCurrentEpoch = <TData = QueryCurrentEpochResponse,>({
    request,
    options
  }: UseCurrentEpochQuery<TData>) => {
    return useQuery<QueryCurrentEpochResponse, Error, TData>(["currentEpochQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.currentEpoch(request);
    }, options);
  };

  const useEpochInfo = <TData = QueryEpochInfoResponse,>({
    request,
    options
  }: UseEpochInfoQuery<TData>) => {
    return useQuery<QueryEpochInfoResponse, Error, TData>(["epochInfoQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.epochInfo(request);
    }, options);
  };

  return {
    /** EpochInfos provide running epochInfos */
    useEpochInfos,

    /** CurrentEpoch provide current epoch of specified identifier */
    useCurrentEpoch,

    /** CurrentEpoch provide current epoch of specified identifier */
    useEpochInfo
  };
};