import { BinaryReader } from "../../../binary";
import { createProtobufRpcClient } from "@cosmjs/stargate";
import { SimulateRequest, SimulateResponse, GetTxRequest, GetTxResponse, BroadcastTxRequest, BroadcastTxResponse, GetTxsEventRequest, GetTxsEventResponse, GetBlockWithTxsRequest, GetBlockWithTxsResponse } from "./service";
class ServiceClientImpl {
  rpc;
  constructor(rpc) {
    this.rpc = rpc;
    this.simulate = this.simulate.bind(this);
    this.getTx = this.getTx.bind(this);
    this.broadcastTx = this.broadcastTx.bind(this);
    this.getTxsEvent = this.getTxsEvent.bind(this);
    this.getBlockWithTxs = this.getBlockWithTxs.bind(this);
  }
  simulate(request) {
    const data = SimulateRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.tx.v1beta1.Service", "Simulate", data);
    return promise.then((data2) => SimulateResponse.decode(new BinaryReader(data2)));
  }
  getTx(request) {
    const data = GetTxRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.tx.v1beta1.Service", "GetTx", data);
    return promise.then((data2) => GetTxResponse.decode(new BinaryReader(data2)));
  }
  broadcastTx(request) {
    const data = BroadcastTxRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.tx.v1beta1.Service", "BroadcastTx", data);
    return promise.then((data2) => BroadcastTxResponse.decode(new BinaryReader(data2)));
  }
  getTxsEvent(request) {
    const data = GetTxsEventRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.tx.v1beta1.Service", "GetTxsEvent", data);
    return promise.then((data2) => GetTxsEventResponse.decode(new BinaryReader(data2)));
  }
  getBlockWithTxs(request) {
    const data = GetBlockWithTxsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.tx.v1beta1.Service", "GetBlockWithTxs", data);
    return promise.then((data2) => GetBlockWithTxsResponse.decode(new BinaryReader(data2)));
  }
}
const createRpcQueryExtension = (base) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new ServiceClientImpl(rpc);
  return {
    simulate(request) {
      return queryService.simulate(request);
    },
    getTx(request) {
      return queryService.getTx(request);
    },
    broadcastTx(request) {
      return queryService.broadcastTx(request);
    },
    getTxsEvent(request) {
      return queryService.getTxsEvent(request);
    },
    getBlockWithTxs(request) {
      return queryService.getBlockWithTxs(request);
    }
  };
};
export {
  ServiceClientImpl,
  createRpcQueryExtension
};
