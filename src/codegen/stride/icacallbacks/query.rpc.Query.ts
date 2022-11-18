import { Rpc } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
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