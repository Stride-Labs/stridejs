import { BinaryReader } from "../../../binary";
import { createProtobufRpcClient } from "@cosmjs/stargate";
import { SimulateRequest, SimulateResponse, GetTxRequest, GetTxResponse, BroadcastTxRequest, BroadcastTxResponse, GetTxsEventRequest, GetTxsEventResponse, GetBlockWithTxsRequest, GetBlockWithTxsResponse, TxDecodeRequest, TxDecodeResponse, TxEncodeRequest, TxEncodeResponse, TxEncodeAminoRequest, TxEncodeAminoResponse, TxDecodeAminoRequest, TxDecodeAminoResponse } from "./service";
class ServiceClientImpl {
  rpc;
  constructor(rpc) {
    this.rpc = rpc;
    this.simulate = this.simulate.bind(this);
    this.getTx = this.getTx.bind(this);
    this.broadcastTx = this.broadcastTx.bind(this);
    this.getTxsEvent = this.getTxsEvent.bind(this);
    this.getBlockWithTxs = this.getBlockWithTxs.bind(this);
    this.txDecode = this.txDecode.bind(this);
    this.txEncode = this.txEncode.bind(this);
    this.txEncodeAmino = this.txEncodeAmino.bind(this);
    this.txDecodeAmino = this.txDecodeAmino.bind(this);
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
  txDecode(request) {
    const data = TxDecodeRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.tx.v1beta1.Service", "TxDecode", data);
    return promise.then((data2) => TxDecodeResponse.decode(new BinaryReader(data2)));
  }
  txEncode(request) {
    const data = TxEncodeRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.tx.v1beta1.Service", "TxEncode", data);
    return promise.then((data2) => TxEncodeResponse.decode(new BinaryReader(data2)));
  }
  txEncodeAmino(request) {
    const data = TxEncodeAminoRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.tx.v1beta1.Service", "TxEncodeAmino", data);
    return promise.then((data2) => TxEncodeAminoResponse.decode(new BinaryReader(data2)));
  }
  txDecodeAmino(request) {
    const data = TxDecodeAminoRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.tx.v1beta1.Service", "TxDecodeAmino", data);
    return promise.then((data2) => TxDecodeAminoResponse.decode(new BinaryReader(data2)));
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
    },
    txDecode(request) {
      return queryService.txDecode(request);
    },
    txEncode(request) {
      return queryService.txEncode(request);
    },
    txEncodeAmino(request) {
      return queryService.txEncodeAmino(request);
    },
    txDecodeAmino(request) {
      return queryService.txDecodeAmino(request);
    }
  };
};
export {
  ServiceClientImpl,
  createRpcQueryExtension
};
