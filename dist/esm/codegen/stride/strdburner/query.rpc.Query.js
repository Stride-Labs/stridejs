import { BinaryReader } from "../../binary";
import { createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryStrdBurnerAddressRequest, QueryStrdBurnerAddressResponse, QueryTotalStrdBurnedRequest, QueryTotalStrdBurnedResponse, QueryStrdBurnedByAddressRequest, QueryStrdBurnedByAddressResponse, QueryLinkedAddressRequest, QueryLinkedAddressResponse } from "./query";
class QueryClientImpl {
  rpc;
  constructor(rpc) {
    this.rpc = rpc;
    this.strdBurnerAddress = this.strdBurnerAddress.bind(this);
    this.totalStrdBurned = this.totalStrdBurned.bind(this);
    this.strdBurnedByAddress = this.strdBurnedByAddress.bind(this);
    this.linkedAddress = this.linkedAddress.bind(this);
  }
  strdBurnerAddress(request = {}) {
    const data = QueryStrdBurnerAddressRequest.encode(request).finish();
    const promise = this.rpc.request("stride.strdburner.Query", "StrdBurnerAddress", data);
    return promise.then((data2) => QueryStrdBurnerAddressResponse.decode(new BinaryReader(data2)));
  }
  totalStrdBurned(request = {}) {
    const data = QueryTotalStrdBurnedRequest.encode(request).finish();
    const promise = this.rpc.request("stride.strdburner.Query", "TotalStrdBurned", data);
    return promise.then((data2) => QueryTotalStrdBurnedResponse.decode(new BinaryReader(data2)));
  }
  strdBurnedByAddress(request) {
    const data = QueryStrdBurnedByAddressRequest.encode(request).finish();
    const promise = this.rpc.request("stride.strdburner.Query", "StrdBurnedByAddress", data);
    return promise.then((data2) => QueryStrdBurnedByAddressResponse.decode(new BinaryReader(data2)));
  }
  linkedAddress(request) {
    const data = QueryLinkedAddressRequest.encode(request).finish();
    const promise = this.rpc.request("stride.strdburner.Query", "LinkedAddress", data);
    return promise.then((data2) => QueryLinkedAddressResponse.decode(new BinaryReader(data2)));
  }
}
const createRpcQueryExtension = (base) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    strdBurnerAddress(request) {
      return queryService.strdBurnerAddress(request);
    },
    totalStrdBurned(request) {
      return queryService.totalStrdBurned(request);
    },
    strdBurnedByAddress(request) {
      return queryService.strdBurnedByAddress(request);
    },
    linkedAddress(request) {
      return queryService.linkedAddress(request);
    }
  };
};
export {
  QueryClientImpl,
  createRpcQueryExtension
};
