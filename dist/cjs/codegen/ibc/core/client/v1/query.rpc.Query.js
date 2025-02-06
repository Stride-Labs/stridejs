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
var query_rpc_Query_exports = {};
__export(query_rpc_Query_exports, {
  QueryClientImpl: () => QueryClientImpl,
  createRpcQueryExtension: () => createRpcQueryExtension
});
module.exports = __toCommonJS(query_rpc_Query_exports);
var import_binary = require("../../../../binary");
var import_stargate = require("@cosmjs/stargate");
var import_query = require("./query");
class QueryClientImpl {
  rpc;
  constructor(rpc) {
    this.rpc = rpc;
    this.clientState = this.clientState.bind(this);
    this.clientStates = this.clientStates.bind(this);
    this.consensusState = this.consensusState.bind(this);
    this.consensusStates = this.consensusStates.bind(this);
    this.consensusStateHeights = this.consensusStateHeights.bind(this);
    this.clientStatus = this.clientStatus.bind(this);
    this.clientParams = this.clientParams.bind(this);
    this.upgradedClientState = this.upgradedClientState.bind(this);
    this.upgradedConsensusState = this.upgradedConsensusState.bind(this);
  }
  clientState(request) {
    const data = import_query.QueryClientStateRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.client.v1.Query", "ClientState", data);
    return promise.then((data2) => import_query.QueryClientStateResponse.decode(new import_binary.BinaryReader(data2)));
  }
  clientStates(request = {
    pagination: void 0
  }) {
    const data = import_query.QueryClientStatesRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.client.v1.Query", "ClientStates", data);
    return promise.then((data2) => import_query.QueryClientStatesResponse.decode(new import_binary.BinaryReader(data2)));
  }
  consensusState(request) {
    const data = import_query.QueryConsensusStateRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.client.v1.Query", "ConsensusState", data);
    return promise.then((data2) => import_query.QueryConsensusStateResponse.decode(new import_binary.BinaryReader(data2)));
  }
  consensusStates(request) {
    const data = import_query.QueryConsensusStatesRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.client.v1.Query", "ConsensusStates", data);
    return promise.then((data2) => import_query.QueryConsensusStatesResponse.decode(new import_binary.BinaryReader(data2)));
  }
  consensusStateHeights(request) {
    const data = import_query.QueryConsensusStateHeightsRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.client.v1.Query", "ConsensusStateHeights", data);
    return promise.then((data2) => import_query.QueryConsensusStateHeightsResponse.decode(new import_binary.BinaryReader(data2)));
  }
  clientStatus(request) {
    const data = import_query.QueryClientStatusRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.client.v1.Query", "ClientStatus", data);
    return promise.then((data2) => import_query.QueryClientStatusResponse.decode(new import_binary.BinaryReader(data2)));
  }
  clientParams(request = {}) {
    const data = import_query.QueryClientParamsRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.client.v1.Query", "ClientParams", data);
    return promise.then((data2) => import_query.QueryClientParamsResponse.decode(new import_binary.BinaryReader(data2)));
  }
  upgradedClientState(request = {}) {
    const data = import_query.QueryUpgradedClientStateRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.client.v1.Query", "UpgradedClientState", data);
    return promise.then((data2) => import_query.QueryUpgradedClientStateResponse.decode(new import_binary.BinaryReader(data2)));
  }
  upgradedConsensusState(request = {}) {
    const data = import_query.QueryUpgradedConsensusStateRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.client.v1.Query", "UpgradedConsensusState", data);
    return promise.then((data2) => import_query.QueryUpgradedConsensusStateResponse.decode(new import_binary.BinaryReader(data2)));
  }
}
const createRpcQueryExtension = (base) => {
  const rpc = (0, import_stargate.createProtobufRpcClient)(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    clientState(request) {
      return queryService.clientState(request);
    },
    clientStates(request) {
      return queryService.clientStates(request);
    },
    consensusState(request) {
      return queryService.consensusState(request);
    },
    consensusStates(request) {
      return queryService.consensusStates(request);
    },
    consensusStateHeights(request) {
      return queryService.consensusStateHeights(request);
    },
    clientStatus(request) {
      return queryService.clientStatus(request);
    },
    clientParams(request) {
      return queryService.clientParams(request);
    },
    upgradedClientState(request) {
      return queryService.upgradedClientState(request);
    },
    upgradedConsensusState(request) {
      return queryService.upgradedConsensusState(request);
    }
  };
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  QueryClientImpl,
  createRpcQueryExtension
});
