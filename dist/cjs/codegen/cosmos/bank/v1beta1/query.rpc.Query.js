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
var import_binary = require("../../../binary");
var import_stargate = require("@cosmjs/stargate");
var import_query = require("./query");
class QueryClientImpl {
  rpc;
  constructor(rpc) {
    this.rpc = rpc;
    this.balance = this.balance.bind(this);
    this.allBalances = this.allBalances.bind(this);
    this.spendableBalances = this.spendableBalances.bind(this);
    this.spendableBalanceByDenom = this.spendableBalanceByDenom.bind(this);
    this.totalSupply = this.totalSupply.bind(this);
    this.supplyOf = this.supplyOf.bind(this);
    this.params = this.params.bind(this);
    this.denomMetadata = this.denomMetadata.bind(this);
    this.denomsMetadata = this.denomsMetadata.bind(this);
    this.denomOwners = this.denomOwners.bind(this);
    this.sendEnabled = this.sendEnabled.bind(this);
  }
  balance(request) {
    const data = import_query.QueryBalanceRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.bank.v1beta1.Query", "Balance", data);
    return promise.then((data2) => import_query.QueryBalanceResponse.decode(new import_binary.BinaryReader(data2)));
  }
  allBalances(request) {
    const data = import_query.QueryAllBalancesRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.bank.v1beta1.Query", "AllBalances", data);
    return promise.then((data2) => import_query.QueryAllBalancesResponse.decode(new import_binary.BinaryReader(data2)));
  }
  spendableBalances(request) {
    const data = import_query.QuerySpendableBalancesRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.bank.v1beta1.Query", "SpendableBalances", data);
    return promise.then((data2) => import_query.QuerySpendableBalancesResponse.decode(new import_binary.BinaryReader(data2)));
  }
  spendableBalanceByDenom(request) {
    const data = import_query.QuerySpendableBalanceByDenomRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.bank.v1beta1.Query", "SpendableBalanceByDenom", data);
    return promise.then((data2) => import_query.QuerySpendableBalanceByDenomResponse.decode(new import_binary.BinaryReader(data2)));
  }
  totalSupply(request = {
    pagination: void 0
  }) {
    const data = import_query.QueryTotalSupplyRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.bank.v1beta1.Query", "TotalSupply", data);
    return promise.then((data2) => import_query.QueryTotalSupplyResponse.decode(new import_binary.BinaryReader(data2)));
  }
  supplyOf(request) {
    const data = import_query.QuerySupplyOfRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.bank.v1beta1.Query", "SupplyOf", data);
    return promise.then((data2) => import_query.QuerySupplyOfResponse.decode(new import_binary.BinaryReader(data2)));
  }
  params(request = {}) {
    const data = import_query.QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.bank.v1beta1.Query", "Params", data);
    return promise.then((data2) => import_query.QueryParamsResponse.decode(new import_binary.BinaryReader(data2)));
  }
  denomMetadata(request) {
    const data = import_query.QueryDenomMetadataRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.bank.v1beta1.Query", "DenomMetadata", data);
    return promise.then((data2) => import_query.QueryDenomMetadataResponse.decode(new import_binary.BinaryReader(data2)));
  }
  denomsMetadata(request = {
    pagination: void 0
  }) {
    const data = import_query.QueryDenomsMetadataRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.bank.v1beta1.Query", "DenomsMetadata", data);
    return promise.then((data2) => import_query.QueryDenomsMetadataResponse.decode(new import_binary.BinaryReader(data2)));
  }
  denomOwners(request) {
    const data = import_query.QueryDenomOwnersRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.bank.v1beta1.Query", "DenomOwners", data);
    return promise.then((data2) => import_query.QueryDenomOwnersResponse.decode(new import_binary.BinaryReader(data2)));
  }
  sendEnabled(request) {
    const data = import_query.QuerySendEnabledRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.bank.v1beta1.Query", "SendEnabled", data);
    return promise.then((data2) => import_query.QuerySendEnabledResponse.decode(new import_binary.BinaryReader(data2)));
  }
}
const createRpcQueryExtension = (base) => {
  const rpc = (0, import_stargate.createProtobufRpcClient)(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    balance(request) {
      return queryService.balance(request);
    },
    allBalances(request) {
      return queryService.allBalances(request);
    },
    spendableBalances(request) {
      return queryService.spendableBalances(request);
    },
    spendableBalanceByDenom(request) {
      return queryService.spendableBalanceByDenom(request);
    },
    totalSupply(request) {
      return queryService.totalSupply(request);
    },
    supplyOf(request) {
      return queryService.supplyOf(request);
    },
    params(request) {
      return queryService.params(request);
    },
    denomMetadata(request) {
      return queryService.denomMetadata(request);
    },
    denomsMetadata(request) {
      return queryService.denomsMetadata(request);
    },
    denomOwners(request) {
      return queryService.denomOwners(request);
    },
    sendEnabled(request) {
      return queryService.sendEnabled(request);
    }
  };
};
// Proper CommonJS exports for dynamic imports
module.exports = {
  QueryClientImpl,
  createRpcQueryExtension
};
