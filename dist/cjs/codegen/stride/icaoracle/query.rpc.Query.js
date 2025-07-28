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
var import_binary = require("../../binary");
var import_stargate = require("@cosmjs/stargate");
var import_query = require("./query");
class QueryClientImpl {
  rpc;
  constructor(rpc) {
    this.rpc = rpc;
    this.oracle = this.oracle.bind(this);
    this.allOracles = this.allOracles.bind(this);
    this.activeOracles = this.activeOracles.bind(this);
    this.metrics = this.metrics.bind(this);
  }
  oracle(request) {
    const data = import_query.QueryOracleRequest.encode(request).finish();
    const promise = this.rpc.request("stride.icaoracle.Query", "Oracle", data);
    return promise.then((data2) => import_query.QueryOracleResponse.decode(new import_binary.BinaryReader(data2)));
  }
  allOracles(request = {}) {
    const data = import_query.QueryAllOraclesRequest.encode(request).finish();
    const promise = this.rpc.request("stride.icaoracle.Query", "AllOracles", data);
    return promise.then((data2) => import_query.QueryAllOraclesResponse.decode(new import_binary.BinaryReader(data2)));
  }
  activeOracles(request) {
    const data = import_query.QueryActiveOraclesRequest.encode(request).finish();
    const promise = this.rpc.request("stride.icaoracle.Query", "ActiveOracles", data);
    return promise.then((data2) => import_query.QueryActiveOraclesResponse.decode(new import_binary.BinaryReader(data2)));
  }
  metrics(request) {
    const data = import_query.QueryMetricsRequest.encode(request).finish();
    const promise = this.rpc.request("stride.icaoracle.Query", "Metrics", data);
    return promise.then((data2) => import_query.QueryMetricsResponse.decode(new import_binary.BinaryReader(data2)));
  }
}
const createRpcQueryExtension = (base) => {
  const rpc = (0, import_stargate.createProtobufRpcClient)(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    oracle(request) {
      return queryService.oracle(request);
    },
    allOracles(request) {
      return queryService.allOracles(request);
    },
    activeOracles(request) {
      return queryService.activeOracles(request);
    },
    metrics(request) {
      return queryService.metrics(request);
    }
  };
};
// Removed broken CommonJS export annotation
