"use strict";
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
    this.connection = this.connection.bind(this);
    this.connections = this.connections.bind(this);
    this.clientConnections = this.clientConnections.bind(this);
    this.connectionClientState = this.connectionClientState.bind(this);
    this.connectionConsensusState = this.connectionConsensusState.bind(this);
    this.connectionParams = this.connectionParams.bind(this);
  }
  connection(request) {
    const data = import_query.QueryConnectionRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.connection.v1.Query", "Connection", data);
    return promise.then((data2) => import_query.QueryConnectionResponse.decode(new import_binary.BinaryReader(data2)));
  }
  connections(request = {
    pagination: void 0
  }) {
    const data = import_query.QueryConnectionsRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.connection.v1.Query", "Connections", data);
    return promise.then((data2) => import_query.QueryConnectionsResponse.decode(new import_binary.BinaryReader(data2)));
  }
  clientConnections(request) {
    const data = import_query.QueryClientConnectionsRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.connection.v1.Query", "ClientConnections", data);
    return promise.then((data2) => import_query.QueryClientConnectionsResponse.decode(new import_binary.BinaryReader(data2)));
  }
  connectionClientState(request) {
    const data = import_query.QueryConnectionClientStateRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.connection.v1.Query", "ConnectionClientState", data);
    return promise.then((data2) => import_query.QueryConnectionClientStateResponse.decode(new import_binary.BinaryReader(data2)));
  }
  connectionConsensusState(request) {
    const data = import_query.QueryConnectionConsensusStateRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.connection.v1.Query", "ConnectionConsensusState", data);
    return promise.then((data2) => import_query.QueryConnectionConsensusStateResponse.decode(new import_binary.BinaryReader(data2)));
  }
  connectionParams(request = {}) {
    const data = import_query.QueryConnectionParamsRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.connection.v1.Query", "ConnectionParams", data);
    return promise.then((data2) => import_query.QueryConnectionParamsResponse.decode(new import_binary.BinaryReader(data2)));
  }
}
const createRpcQueryExtension = (base) => {
  const rpc = (0, import_stargate.createProtobufRpcClient)(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    connection(request) {
      return queryService.connection(request);
    },
    connections(request) {
      return queryService.connections(request);
    },
    clientConnections(request) {
      return queryService.clientConnections(request);
    },
    connectionClientState(request) {
      return queryService.connectionClientState(request);
    },
    connectionConsensusState(request) {
      return queryService.connectionConsensusState(request);
    },
    connectionParams(request) {
      return queryService.connectionParams(request);
    }
  };
};
// Removed broken CommonJS export annotation
