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
    this.epochInfos = this.epochInfos.bind(this);
    this.currentEpoch = this.currentEpoch.bind(this);
    this.epochInfo = this.epochInfo.bind(this);
  }
  epochInfos(request = {
    pagination: void 0
  }) {
    const data = import_query.QueryEpochsInfoRequest.encode(request).finish();
    const promise = this.rpc.request("stride.epochs.Query", "EpochInfos", data);
    return promise.then((data2) => import_query.QueryEpochsInfoResponse.decode(new import_binary.BinaryReader(data2)));
  }
  currentEpoch(request) {
    const data = import_query.QueryCurrentEpochRequest.encode(request).finish();
    const promise = this.rpc.request("stride.epochs.Query", "CurrentEpoch", data);
    return promise.then((data2) => import_query.QueryCurrentEpochResponse.decode(new import_binary.BinaryReader(data2)));
  }
  epochInfo(request) {
    const data = import_query.QueryEpochInfoRequest.encode(request).finish();
    const promise = this.rpc.request("stride.epochs.Query", "EpochInfo", data);
    return promise.then((data2) => import_query.QueryEpochInfoResponse.decode(new import_binary.BinaryReader(data2)));
  }
}
const createRpcQueryExtension = (base) => {
  const rpc = (0, import_stargate.createProtobufRpcClient)(base);
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
// Proper CommonJS exports for dynamic imports
module.exports = {
  QueryClientImpl,
  createRpcQueryExtension
};
