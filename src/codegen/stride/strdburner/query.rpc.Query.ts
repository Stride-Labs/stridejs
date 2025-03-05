import { TxRpc } from "../../types";
import { BinaryReader } from "../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryStrdBurnerAddressRequest, QueryStrdBurnerAddressResponse, QueryTotalStrdBurnedRequest, QueryTotalStrdBurnedResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** StrdBurnerAddress queries the address of the strdburner module */
  strdBurnerAddress(request?: QueryStrdBurnerAddressRequest): Promise<QueryStrdBurnerAddressResponse>;
  /** StrdBurnerAddress queries the address of the strdburner module */
  totalStrdBurned(request?: QueryTotalStrdBurnedRequest): Promise<QueryTotalStrdBurnedResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
    this.strdBurnerAddress = this.strdBurnerAddress.bind(this);
    this.totalStrdBurned = this.totalStrdBurned.bind(this);
  }
  strdBurnerAddress(request: QueryStrdBurnerAddressRequest = {}): Promise<QueryStrdBurnerAddressResponse> {
    const data = QueryStrdBurnerAddressRequest.encode(request).finish();
    const promise = this.rpc.request("stride.strdburner.Query", "StrdBurnerAddress", data);
    return promise.then(data => QueryStrdBurnerAddressResponse.decode(new BinaryReader(data)));
  }
  totalStrdBurned(request: QueryTotalStrdBurnedRequest = {}): Promise<QueryTotalStrdBurnedResponse> {
    const data = QueryTotalStrdBurnedRequest.encode(request).finish();
    const promise = this.rpc.request("stride.strdburner.Query", "TotalStrdBurned", data);
    return promise.then(data => QueryTotalStrdBurnedResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    strdBurnerAddress(request?: QueryStrdBurnerAddressRequest): Promise<QueryStrdBurnerAddressResponse> {
      return queryService.strdBurnerAddress(request);
    },
    totalStrdBurned(request?: QueryTotalStrdBurnedRequest): Promise<QueryTotalStrdBurnedResponse> {
      return queryService.totalStrdBurned(request);
    }
  };
};