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
    this.hostZone = this.hostZone.bind(this);
    this.delegationRecords = this.delegationRecords.bind(this);
    this.unbondingRecords = this.unbondingRecords.bind(this);
    this.redemptionRecord = this.redemptionRecord.bind(this);
    this.redemptionRecords = this.redemptionRecords.bind(this);
    this.slashRecords = this.slashRecords.bind(this);
  }
  hostZone(request = {}) {
    const data = import_query.QueryHostZoneRequest.encode(request).finish();
    const promise = this.rpc.request("stride.staketia.Query", "HostZone", data);
    return promise.then((data2) => import_query.QueryHostZoneResponse.decode(new import_binary.BinaryReader(data2)));
  }
  delegationRecords(request) {
    const data = import_query.QueryDelegationRecordsRequest.encode(request).finish();
    const promise = this.rpc.request("stride.staketia.Query", "DelegationRecords", data);
    return promise.then((data2) => import_query.QueryDelegationRecordsResponse.decode(new import_binary.BinaryReader(data2)));
  }
  unbondingRecords(request) {
    const data = import_query.QueryUnbondingRecordsRequest.encode(request).finish();
    const promise = this.rpc.request("stride.staketia.Query", "UnbondingRecords", data);
    return promise.then((data2) => import_query.QueryUnbondingRecordsResponse.decode(new import_binary.BinaryReader(data2)));
  }
  redemptionRecord(request) {
    const data = import_query.QueryRedemptionRecordRequest.encode(request).finish();
    const promise = this.rpc.request("stride.staketia.Query", "RedemptionRecord", data);
    return promise.then((data2) => import_query.QueryRedemptionRecordResponse.decode(new import_binary.BinaryReader(data2)));
  }
  redemptionRecords(request) {
    const data = import_query.QueryRedemptionRecordsRequest.encode(request).finish();
    const promise = this.rpc.request("stride.staketia.Query", "RedemptionRecords", data);
    return promise.then((data2) => import_query.QueryRedemptionRecordsResponse.decode(new import_binary.BinaryReader(data2)));
  }
  slashRecords(request = {}) {
    const data = import_query.QuerySlashRecordsRequest.encode(request).finish();
    const promise = this.rpc.request("stride.staketia.Query", "SlashRecords", data);
    return promise.then((data2) => import_query.QuerySlashRecordsResponse.decode(new import_binary.BinaryReader(data2)));
  }
}
const createRpcQueryExtension = (base) => {
  const rpc = (0, import_stargate.createProtobufRpcClient)(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    hostZone(request) {
      return queryService.hostZone(request);
    },
    delegationRecords(request) {
      return queryService.delegationRecords(request);
    },
    unbondingRecords(request) {
      return queryService.unbondingRecords(request);
    },
    redemptionRecord(request) {
      return queryService.redemptionRecord(request);
    },
    redemptionRecords(request) {
      return queryService.redemptionRecords(request);
    },
    slashRecords(request) {
      return queryService.slashRecords(request);
    }
  };
};
// Proper CommonJS exports for dynamic imports
module.exports = {
  QueryClientImpl,
  createRpcQueryExtension
};
