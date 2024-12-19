import { BinaryReader } from "../../binary";
import { createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryGetCallbackDataRequest, QueryGetCallbackDataResponse, QueryAllCallbackDataRequest, QueryAllCallbackDataResponse } from "./query";
class QueryClientImpl {
  rpc;
  constructor(rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.callbackData = this.callbackData.bind(this);
    this.callbackDataAll = this.callbackDataAll.bind(this);
  }
  params(request = {}) {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("stride.icacallbacks.Query", "Params", data);
    return promise.then((data2) => QueryParamsResponse.decode(new BinaryReader(data2)));
  }
  callbackData(request) {
    const data = QueryGetCallbackDataRequest.encode(request).finish();
    const promise = this.rpc.request("stride.icacallbacks.Query", "CallbackData", data);
    return promise.then((data2) => QueryGetCallbackDataResponse.decode(new BinaryReader(data2)));
  }
  callbackDataAll(request = {
    pagination: void 0
  }) {
    const data = QueryAllCallbackDataRequest.encode(request).finish();
    const promise = this.rpc.request("stride.icacallbacks.Query", "CallbackDataAll", data);
    return promise.then((data2) => QueryAllCallbackDataResponse.decode(new BinaryReader(data2)));
  }
}
const createRpcQueryExtension = (base) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request) {
      return queryService.params(request);
    },
    callbackData(request) {
      return queryService.callbackData(request);
    },
    callbackDataAll(request) {
      return queryService.callbackDataAll(request);
    }
  };
};
export {
  QueryClientImpl,
  createRpcQueryExtension
};
