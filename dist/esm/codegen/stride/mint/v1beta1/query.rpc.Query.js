import { BinaryReader } from "../../../binary";
import { createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryEpochProvisionsRequest, QueryEpochProvisionsResponse } from "./query";
class QueryClientImpl {
  rpc;
  constructor(rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.epochProvisions = this.epochProvisions.bind(this);
  }
  params(request = {}) {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("stride.mint.v1beta1.Query", "Params", data);
    return promise.then((data2) => QueryParamsResponse.decode(new BinaryReader(data2)));
  }
  epochProvisions(request = {}) {
    const data = QueryEpochProvisionsRequest.encode(request).finish();
    const promise = this.rpc.request("stride.mint.v1beta1.Query", "EpochProvisions", data);
    return promise.then((data2) => QueryEpochProvisionsResponse.decode(new BinaryReader(data2)));
  }
}
const createRpcQueryExtension = (base) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request) {
      return queryService.params(request);
    },
    epochProvisions(request) {
      return queryService.epochProvisions(request);
    }
  };
};
export {
  QueryClientImpl,
  createRpcQueryExtension
};
