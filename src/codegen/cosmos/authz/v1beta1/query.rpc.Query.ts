import { Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { ReactQueryParams } from "../../../react-query";
import { useQuery } from "@tanstack/react-query";
import { QueryGrantsRequest, QueryGrantsResponse } from "./query";
/** Query defines the gRPC querier service. */

export interface Query {
  /** Returns list of `Authorization`, granted to the grantee by the granter. */
  grants(request: QueryGrantsRequest): Promise<QueryGrantsResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.grants = this.grants.bind(this);
  }

  grants(request: QueryGrantsRequest): Promise<QueryGrantsResponse> {
    const data = QueryGrantsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.authz.v1beta1.Query", "Grants", data);
    return promise.then(data => QueryGrantsResponse.decode(new _m0.Reader(data)));
  }

}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    grants(request: QueryGrantsRequest): Promise<QueryGrantsResponse> {
      return queryService.grants(request);
    }

  };
};
export interface UseGrantsQuery<TData> extends ReactQueryParams<QueryGrantsResponse, TData> {
  request: QueryGrantsRequest;
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

  const useGrants = <TData = QueryGrantsResponse,>({
    request,
    options
  }: UseGrantsQuery<TData>) => {
    return useQuery<QueryGrantsResponse, Error, TData>(["grantsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.grants(request);
    }, options);
  };

  return {
    /** Returns list of `Authorization`, granted to the grantee by the granter. */
    useGrants
  };
};