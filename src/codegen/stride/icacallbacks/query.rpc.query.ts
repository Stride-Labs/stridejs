import { Rpc } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { ReactQueryParams } from "../../react-query";
import { useQuery } from "@tanstack/react-query";
import { QueryParamsRequest, QueryParamsResponse, QueryGetCallbackDataRequest, QueryGetCallbackDataResponse, QueryAllCallbackDataRequest, QueryAllCallbackDataResponse } from "./query";
/** Query defines the gRPC querier service. */

export interface Query {
  /** Parameters queries the parameters of the module. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a CallbackData by index. */

  callbackData(request: QueryGetCallbackDataRequest): Promise<QueryGetCallbackDataResponse>;
  /** Queries a list of CallbackData items. */

  callbackDataAll(request?: QueryAllCallbackDataRequest): Promise<QueryAllCallbackDataResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.callbackData = this.callbackData.bind(this);
    this.callbackDataAll = this.callbackDataAll.bind(this);
  }

  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("stride.icacallbacks.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  callbackData(request: QueryGetCallbackDataRequest): Promise<QueryGetCallbackDataResponse> {
    const data = QueryGetCallbackDataRequest.encode(request).finish();
    const promise = this.rpc.request("stride.icacallbacks.Query", "CallbackData", data);
    return promise.then(data => QueryGetCallbackDataResponse.decode(new _m0.Reader(data)));
  }

  callbackDataAll(request: QueryAllCallbackDataRequest = {
    pagination: undefined
  }): Promise<QueryAllCallbackDataResponse> {
    const data = QueryAllCallbackDataRequest.encode(request).finish();
    const promise = this.rpc.request("stride.icacallbacks.Query", "CallbackDataAll", data);
    return promise.then(data => QueryAllCallbackDataResponse.decode(new _m0.Reader(data)));
  }

}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },

    callbackData(request: QueryGetCallbackDataRequest): Promise<QueryGetCallbackDataResponse> {
      return queryService.callbackData(request);
    },

    callbackDataAll(request?: QueryAllCallbackDataRequest): Promise<QueryAllCallbackDataResponse> {
      return queryService.callbackDataAll(request);
    }

  };
};
export interface UseParamsQuery<TData> extends ReactQueryParams<QueryParamsResponse, TData> {
  request?: QueryParamsRequest;
}
export interface UseCallbackDataQuery<TData> extends ReactQueryParams<QueryGetCallbackDataResponse, TData> {
  request: QueryGetCallbackDataRequest;
}
export interface UseCallbackDataAllQuery<TData> extends ReactQueryParams<QueryAllCallbackDataResponse, TData> {
  request?: QueryAllCallbackDataRequest;
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

  const useCallbackData = <TData = QueryGetCallbackDataResponse,>({
    request,
    options
  }: UseCallbackDataQuery<TData>) => {
    return useQuery<QueryGetCallbackDataResponse, Error, TData>(["callbackDataQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.callbackData(request);
    }, options);
  };

  const useCallbackDataAll = <TData = QueryAllCallbackDataResponse,>({
    request,
    options
  }: UseCallbackDataAllQuery<TData>) => {
    return useQuery<QueryAllCallbackDataResponse, Error, TData>(["callbackDataAllQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.callbackDataAll(request);
    }, options);
  };

  return {
    /** Parameters queries the parameters of the module. */
    useParams,

    /** Queries a CallbackData by index. */
    useCallbackData,

    /** Queries a list of CallbackData items. */
    useCallbackDataAll
  };
};