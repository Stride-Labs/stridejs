import { TxRpc } from "../../types";
import { BinaryReader } from "../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryStrdBurnerAddressRequest, QueryStrdBurnerAddressResponse, QueryTotalStrdBurnedRequest, QueryTotalStrdBurnedResponse, QueryStrdBurnedByAddressRequest, QueryStrdBurnedByAddressResponse, QueryLinkedAddressRequest, QueryLinkedAddressResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** StrdBurnerAddress queries the address of the strdburner module */
  strdBurnerAddress(request?: QueryStrdBurnerAddressRequest): Promise<QueryStrdBurnerAddressResponse>;
  /** StrdBurnerAddress queries the address of the strdburner module */
  totalStrdBurned(request?: QueryTotalStrdBurnedRequest): Promise<QueryTotalStrdBurnedResponse>;
  /** StrdBurnerAddress queries amount burned from a given address */
  strdBurnedByAddress(request: QueryStrdBurnedByAddressRequest): Promise<QueryStrdBurnedByAddressResponse>;
  /** LinkedAddress queries the linked address for a given stride address */
  linkedAddress(request: QueryLinkedAddressRequest): Promise<QueryLinkedAddressResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
    this.strdBurnerAddress = this.strdBurnerAddress.bind(this);
    this.totalStrdBurned = this.totalStrdBurned.bind(this);
    this.strdBurnedByAddress = this.strdBurnedByAddress.bind(this);
    this.linkedAddress = this.linkedAddress.bind(this);
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
  strdBurnedByAddress(request: QueryStrdBurnedByAddressRequest): Promise<QueryStrdBurnedByAddressResponse> {
    const data = QueryStrdBurnedByAddressRequest.encode(request).finish();
    const promise = this.rpc.request("stride.strdburner.Query", "StrdBurnedByAddress", data);
    return promise.then(data => QueryStrdBurnedByAddressResponse.decode(new BinaryReader(data)));
  }
  linkedAddress(request: QueryLinkedAddressRequest): Promise<QueryLinkedAddressResponse> {
    const data = QueryLinkedAddressRequest.encode(request).finish();
    const promise = this.rpc.request("stride.strdburner.Query", "LinkedAddress", data);
    return promise.then(data => QueryLinkedAddressResponse.decode(new BinaryReader(data)));
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
    },
    strdBurnedByAddress(request: QueryStrdBurnedByAddressRequest): Promise<QueryStrdBurnedByAddressResponse> {
      return queryService.strdBurnedByAddress(request);
    },
    linkedAddress(request: QueryLinkedAddressRequest): Promise<QueryLinkedAddressResponse> {
      return queryService.linkedAddress(request);
    }
  };
};