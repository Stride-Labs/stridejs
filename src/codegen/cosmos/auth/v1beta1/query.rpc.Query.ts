import { Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { ReactQueryParams } from "../../../react-query";
import { useQuery } from "@tanstack/react-query";
import { QueryAccountsRequest, QueryAccountsResponse, QueryAccountRequest, QueryAccountResponse, QueryParamsRequest, QueryParamsResponse } from "./query";
/** Query defines the gRPC querier service. */

export interface Query {
  /** Accounts returns all the existing accounts */
  accounts(request?: QueryAccountsRequest): Promise<QueryAccountsResponse>;
  /** Account returns account details based on address. */

  account(request: QueryAccountRequest): Promise<QueryAccountResponse>;
  /** Params queries all parameters. */

  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.accounts = this.accounts.bind(this);
    this.account = this.account.bind(this);
    this.params = this.params.bind(this);
  }

  accounts(request: QueryAccountsRequest = {
    pagination: undefined
  }): Promise<QueryAccountsResponse> {
    const data = QueryAccountsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.auth.v1beta1.Query", "Accounts", data);
    return promise.then(data => QueryAccountsResponse.decode(new _m0.Reader(data)));
  }

  account(request: QueryAccountRequest): Promise<QueryAccountResponse> {
    const data = QueryAccountRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.auth.v1beta1.Query", "Account", data);
    return promise.then(data => QueryAccountResponse.decode(new _m0.Reader(data)));
  }

  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.auth.v1beta1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    accounts(request?: QueryAccountsRequest): Promise<QueryAccountsResponse> {
      return queryService.accounts(request);
    },

    account(request: QueryAccountRequest): Promise<QueryAccountResponse> {
      return queryService.account(request);
    },

    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    }

  };
};
export interface UseAccountsQuery<TData> extends ReactQueryParams<QueryAccountsResponse, TData> {
  request?: QueryAccountsRequest;
}
export interface UseAccountQuery<TData> extends ReactQueryParams<QueryAccountResponse, TData> {
  request: QueryAccountRequest;
}
export interface UseParamsQuery<TData> extends ReactQueryParams<QueryParamsResponse, TData> {
  request?: QueryParamsRequest;
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

  const useAccounts = <TData = QueryAccountsResponse,>({
    request,
    options
  }: UseAccountsQuery<TData>) => {
    return useQuery<QueryAccountsResponse, Error, TData>(["accountsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.accounts(request);
    }, options);
  };

  const useAccount = <TData = QueryAccountResponse,>({
    request,
    options
  }: UseAccountQuery<TData>) => {
    return useQuery<QueryAccountResponse, Error, TData>(["accountQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.account(request);
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

  return {
    /** Accounts returns all the existing accounts */
    useAccounts,

    /** Account returns account details based on address. */
    useAccount,

    /** Params queries all parameters. */
    useParams
  };
};