import { Rpc } from "@osmonauts/helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { ConfigRequest, ConfigResponse } from "./query";
/** Service defines the RPC service */

export interface Service {
  config(request?: ConfigRequest): Promise<ConfigResponse>;
  /*Config queries for the operator configuration.*/

}
export class QueryClientImpl implements Service {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.config = this.config.bind(this);
  }

  config(request: ConfigRequest = {}): Promise<ConfigResponse> {
    const data = ConfigRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.base.node.v1beta1.Service", "Config", data);
    return promise.then(data => ConfigResponse.decode(new _m0.Reader(data)));
  }

}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    config(request?: ConfigRequest): Promise<ConfigResponse> {
      return queryService.config(request);
    }

  };
};