import { BinaryReader } from "../../../../binary";
import { createProtobufRpcClient } from "@cosmjs/stargate";
import { GetNodeInfoRequest, GetNodeInfoResponse, GetSyncingRequest, GetSyncingResponse, GetLatestBlockRequest, GetLatestBlockResponse, GetBlockByHeightRequest, GetBlockByHeightResponse, GetLatestValidatorSetRequest, GetLatestValidatorSetResponse, GetValidatorSetByHeightRequest, GetValidatorSetByHeightResponse, ABCIQueryRequest, ABCIQueryResponse } from "./query";
class ServiceClientImpl {
  rpc;
  constructor(rpc) {
    this.rpc = rpc;
    this.getNodeInfo = this.getNodeInfo.bind(this);
    this.getSyncing = this.getSyncing.bind(this);
    this.getLatestBlock = this.getLatestBlock.bind(this);
    this.getBlockByHeight = this.getBlockByHeight.bind(this);
    this.getLatestValidatorSet = this.getLatestValidatorSet.bind(this);
    this.getValidatorSetByHeight = this.getValidatorSetByHeight.bind(this);
    this.aBCIQuery = this.aBCIQuery.bind(this);
  }
  getNodeInfo(request = {}) {
    const data = GetNodeInfoRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.base.tendermint.v1beta1.Service", "GetNodeInfo", data);
    return promise.then((data2) => GetNodeInfoResponse.decode(new BinaryReader(data2)));
  }
  getSyncing(request = {}) {
    const data = GetSyncingRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.base.tendermint.v1beta1.Service", "GetSyncing", data);
    return promise.then((data2) => GetSyncingResponse.decode(new BinaryReader(data2)));
  }
  getLatestBlock(request = {}) {
    const data = GetLatestBlockRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.base.tendermint.v1beta1.Service", "GetLatestBlock", data);
    return promise.then((data2) => GetLatestBlockResponse.decode(new BinaryReader(data2)));
  }
  getBlockByHeight(request) {
    const data = GetBlockByHeightRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.base.tendermint.v1beta1.Service", "GetBlockByHeight", data);
    return promise.then((data2) => GetBlockByHeightResponse.decode(new BinaryReader(data2)));
  }
  getLatestValidatorSet(request = {
    pagination: void 0
  }) {
    const data = GetLatestValidatorSetRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.base.tendermint.v1beta1.Service", "GetLatestValidatorSet", data);
    return promise.then((data2) => GetLatestValidatorSetResponse.decode(new BinaryReader(data2)));
  }
  getValidatorSetByHeight(request) {
    const data = GetValidatorSetByHeightRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.base.tendermint.v1beta1.Service", "GetValidatorSetByHeight", data);
    return promise.then((data2) => GetValidatorSetByHeightResponse.decode(new BinaryReader(data2)));
  }
  aBCIQuery(request) {
    const data = ABCIQueryRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.base.tendermint.v1beta1.Service", "ABCIQuery", data);
    return promise.then((data2) => ABCIQueryResponse.decode(new BinaryReader(data2)));
  }
}
const createRpcQueryExtension = (base) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new ServiceClientImpl(rpc);
  return {
    getNodeInfo(request) {
      return queryService.getNodeInfo(request);
    },
    getSyncing(request) {
      return queryService.getSyncing(request);
    },
    getLatestBlock(request) {
      return queryService.getLatestBlock(request);
    },
    getBlockByHeight(request) {
      return queryService.getBlockByHeight(request);
    },
    getLatestValidatorSet(request) {
      return queryService.getLatestValidatorSet(request);
    },
    getValidatorSetByHeight(request) {
      return queryService.getValidatorSetByHeight(request);
    },
    aBCIQuery(request) {
      return queryService.aBCIQuery(request);
    }
  };
};
export {
  ServiceClientImpl,
  createRpcQueryExtension
};
