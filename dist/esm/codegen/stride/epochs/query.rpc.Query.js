import { BinaryReader } from "../../binary";
import { createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryEpochsInfoRequest, QueryEpochsInfoResponse, QueryCurrentEpochRequest, QueryCurrentEpochResponse, QueryEpochInfoRequest, QueryEpochInfoResponse } from "./query";
class QueryClientImpl {
  rpc;
  constructor(rpc) {
    this.rpc = rpc;
    this.epochInfos = this.epochInfos.bind(this);
    this.currentEpoch = this.currentEpoch.bind(this);
    this.epochInfo = this.epochInfo.bind(this);
  }
  epochInfos(request = {
    pagination: void 0
  }) {
    const data = QueryEpochsInfoRequest.encode(request).finish();
    const promise = this.rpc.request("stride.epochs.Query", "EpochInfos", data);
    return promise.then((data2) => QueryEpochsInfoResponse.decode(new BinaryReader(data2)));
  }
  currentEpoch(request) {
    const data = QueryCurrentEpochRequest.encode(request).finish();
    const promise = this.rpc.request("stride.epochs.Query", "CurrentEpoch", data);
    return promise.then((data2) => QueryCurrentEpochResponse.decode(new BinaryReader(data2)));
  }
  epochInfo(request) {
    const data = QueryEpochInfoRequest.encode(request).finish();
    const promise = this.rpc.request("stride.epochs.Query", "EpochInfo", data);
    return promise.then((data2) => QueryEpochInfoResponse.decode(new BinaryReader(data2)));
  }
}
const createRpcQueryExtension = (base) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    epochInfos(request) {
      return queryService.epochInfos(request);
    },
    currentEpoch(request) {
      return queryService.currentEpoch(request);
    },
    epochInfo(request) {
      return queryService.epochInfo(request);
    }
  };
};
export {
  QueryClientImpl,
  createRpcQueryExtension
};
