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
    this.incentivizedPackets = this.incentivizedPackets.bind(this);
    this.incentivizedPacket = this.incentivizedPacket.bind(this);
    this.incentivizedPacketsForChannel = this.incentivizedPacketsForChannel.bind(this);
    this.totalRecvFees = this.totalRecvFees.bind(this);
    this.totalAckFees = this.totalAckFees.bind(this);
    this.totalTimeoutFees = this.totalTimeoutFees.bind(this);
    this.payee = this.payee.bind(this);
    this.counterpartyPayee = this.counterpartyPayee.bind(this);
    this.feeEnabledChannels = this.feeEnabledChannels.bind(this);
    this.feeEnabledChannel = this.feeEnabledChannel.bind(this);
  }
  incentivizedPackets(request) {
    const data = import_query.QueryIncentivizedPacketsRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.applications.fee.v1.Query", "IncentivizedPackets", data);
    return promise.then((data2) => import_query.QueryIncentivizedPacketsResponse.decode(new import_binary.BinaryReader(data2)));
  }
  incentivizedPacket(request) {
    const data = import_query.QueryIncentivizedPacketRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.applications.fee.v1.Query", "IncentivizedPacket", data);
    return promise.then((data2) => import_query.QueryIncentivizedPacketResponse.decode(new import_binary.BinaryReader(data2)));
  }
  incentivizedPacketsForChannel(request) {
    const data = import_query.QueryIncentivizedPacketsForChannelRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.applications.fee.v1.Query", "IncentivizedPacketsForChannel", data);
    return promise.then((data2) => import_query.QueryIncentivizedPacketsForChannelResponse.decode(new import_binary.BinaryReader(data2)));
  }
  totalRecvFees(request) {
    const data = import_query.QueryTotalRecvFeesRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.applications.fee.v1.Query", "TotalRecvFees", data);
    return promise.then((data2) => import_query.QueryTotalRecvFeesResponse.decode(new import_binary.BinaryReader(data2)));
  }
  totalAckFees(request) {
    const data = import_query.QueryTotalAckFeesRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.applications.fee.v1.Query", "TotalAckFees", data);
    return promise.then((data2) => import_query.QueryTotalAckFeesResponse.decode(new import_binary.BinaryReader(data2)));
  }
  totalTimeoutFees(request) {
    const data = import_query.QueryTotalTimeoutFeesRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.applications.fee.v1.Query", "TotalTimeoutFees", data);
    return promise.then((data2) => import_query.QueryTotalTimeoutFeesResponse.decode(new import_binary.BinaryReader(data2)));
  }
  payee(request) {
    const data = import_query.QueryPayeeRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.applications.fee.v1.Query", "Payee", data);
    return promise.then((data2) => import_query.QueryPayeeResponse.decode(new import_binary.BinaryReader(data2)));
  }
  counterpartyPayee(request) {
    const data = import_query.QueryCounterpartyPayeeRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.applications.fee.v1.Query", "CounterpartyPayee", data);
    return promise.then((data2) => import_query.QueryCounterpartyPayeeResponse.decode(new import_binary.BinaryReader(data2)));
  }
  feeEnabledChannels(request) {
    const data = import_query.QueryFeeEnabledChannelsRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.applications.fee.v1.Query", "FeeEnabledChannels", data);
    return promise.then((data2) => import_query.QueryFeeEnabledChannelsResponse.decode(new import_binary.BinaryReader(data2)));
  }
  feeEnabledChannel(request) {
    const data = import_query.QueryFeeEnabledChannelRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.applications.fee.v1.Query", "FeeEnabledChannel", data);
    return promise.then((data2) => import_query.QueryFeeEnabledChannelResponse.decode(new import_binary.BinaryReader(data2)));
  }
}
const createRpcQueryExtension = (base) => {
  const rpc = (0, import_stargate.createProtobufRpcClient)(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    incentivizedPackets(request) {
      return queryService.incentivizedPackets(request);
    },
    incentivizedPacket(request) {
      return queryService.incentivizedPacket(request);
    },
    incentivizedPacketsForChannel(request) {
      return queryService.incentivizedPacketsForChannel(request);
    },
    totalRecvFees(request) {
      return queryService.totalRecvFees(request);
    },
    totalAckFees(request) {
      return queryService.totalAckFees(request);
    },
    totalTimeoutFees(request) {
      return queryService.totalTimeoutFees(request);
    },
    payee(request) {
      return queryService.payee(request);
    },
    counterpartyPayee(request) {
      return queryService.counterpartyPayee(request);
    },
    feeEnabledChannels(request) {
      return queryService.feeEnabledChannels(request);
    },
    feeEnabledChannel(request) {
      return queryService.feeEnabledChannel(request);
    }
  };
};
// Removed broken CommonJS export annotation
