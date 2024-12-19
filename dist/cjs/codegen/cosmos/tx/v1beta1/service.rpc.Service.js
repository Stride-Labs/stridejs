var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var service_rpc_Service_exports = {};
__export(service_rpc_Service_exports, {
  ServiceClientImpl: () => ServiceClientImpl,
  createRpcQueryExtension: () => createRpcQueryExtension
});
module.exports = __toCommonJS(service_rpc_Service_exports);
var import_binary = require("../../../binary");
var import_stargate = require("@cosmjs/stargate");
var import_service = require("./service");
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
    const data = import_service.SimulateRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.tx.v1beta1.Service", "Simulate", data);
    return promise.then((data2) => import_service.SimulateResponse.decode(new import_binary.BinaryReader(data2)));
  }
  getTx(request) {
    const data = import_service.GetTxRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.tx.v1beta1.Service", "GetTx", data);
    return promise.then((data2) => import_service.GetTxResponse.decode(new import_binary.BinaryReader(data2)));
  }
  broadcastTx(request) {
    const data = import_service.BroadcastTxRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.tx.v1beta1.Service", "BroadcastTx", data);
    return promise.then((data2) => import_service.BroadcastTxResponse.decode(new import_binary.BinaryReader(data2)));
  }
  getTxsEvent(request) {
    const data = import_service.GetTxsEventRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.tx.v1beta1.Service", "GetTxsEvent", data);
    return promise.then((data2) => import_service.GetTxsEventResponse.decode(new import_binary.BinaryReader(data2)));
  }
  getBlockWithTxs(request) {
    const data = import_service.GetBlockWithTxsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.tx.v1beta1.Service", "GetBlockWithTxs", data);
    return promise.then((data2) => import_service.GetBlockWithTxsResponse.decode(new import_binary.BinaryReader(data2)));
  }
}
const createRpcQueryExtension = (base) => {
  const rpc = (0, import_stargate.createProtobufRpcClient)(base);
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ServiceClientImpl,
  createRpcQueryExtension
});
