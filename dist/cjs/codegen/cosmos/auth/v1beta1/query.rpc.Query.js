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
    this.accounts = this.accounts.bind(this);
    this.account = this.account.bind(this);
    this.accountAddressByID = this.accountAddressByID.bind(this);
    this.params = this.params.bind(this);
    this.moduleAccounts = this.moduleAccounts.bind(this);
    this.moduleAccountByName = this.moduleAccountByName.bind(this);
    this.bech32Prefix = this.bech32Prefix.bind(this);
    this.addressBytesToString = this.addressBytesToString.bind(this);
    this.addressStringToBytes = this.addressStringToBytes.bind(this);
    this.accountInfo = this.accountInfo.bind(this);
  }
  accounts(request = {
    pagination: void 0
  }) {
    const data = import_query.QueryAccountsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.auth.v1beta1.Query", "Accounts", data);
    return promise.then((data2) => import_query.QueryAccountsResponse.decode(new import_binary.BinaryReader(data2)));
  }
  account(request) {
    const data = import_query.QueryAccountRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.auth.v1beta1.Query", "Account", data);
    return promise.then((data2) => import_query.QueryAccountResponse.decode(new import_binary.BinaryReader(data2)));
  }
  accountAddressByID(request) {
    const data = import_query.QueryAccountAddressByIDRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.auth.v1beta1.Query", "AccountAddressByID", data);
    return promise.then((data2) => import_query.QueryAccountAddressByIDResponse.decode(new import_binary.BinaryReader(data2)));
  }
  params(request = {}) {
    const data = import_query.QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.auth.v1beta1.Query", "Params", data);
    return promise.then((data2) => import_query.QueryParamsResponse.decode(new import_binary.BinaryReader(data2)));
  }
  moduleAccounts(request = {}) {
    const data = import_query.QueryModuleAccountsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.auth.v1beta1.Query", "ModuleAccounts", data);
    return promise.then((data2) => import_query.QueryModuleAccountsResponse.decode(new import_binary.BinaryReader(data2)));
  }
  moduleAccountByName(request) {
    const data = import_query.QueryModuleAccountByNameRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.auth.v1beta1.Query", "ModuleAccountByName", data);
    return promise.then((data2) => import_query.QueryModuleAccountByNameResponse.decode(new import_binary.BinaryReader(data2)));
  }
  bech32Prefix(request = {}) {
    const data = import_query.Bech32PrefixRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.auth.v1beta1.Query", "Bech32Prefix", data);
    return promise.then((data2) => import_query.Bech32PrefixResponse.decode(new import_binary.BinaryReader(data2)));
  }
  addressBytesToString(request) {
    const data = import_query.AddressBytesToStringRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.auth.v1beta1.Query", "AddressBytesToString", data);
    return promise.then((data2) => import_query.AddressBytesToStringResponse.decode(new import_binary.BinaryReader(data2)));
  }
  addressStringToBytes(request) {
    const data = import_query.AddressStringToBytesRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.auth.v1beta1.Query", "AddressStringToBytes", data);
    return promise.then((data2) => import_query.AddressStringToBytesResponse.decode(new import_binary.BinaryReader(data2)));
  }
  accountInfo(request) {
    const data = import_query.QueryAccountInfoRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.auth.v1beta1.Query", "AccountInfo", data);
    return promise.then((data2) => import_query.QueryAccountInfoResponse.decode(new import_binary.BinaryReader(data2)));
  }
}
const createRpcQueryExtension = (base) => {
  const rpc = (0, import_stargate.createProtobufRpcClient)(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    accounts(request) {
      return queryService.accounts(request);
    },
    account(request) {
      return queryService.account(request);
    },
    accountAddressByID(request) {
      return queryService.accountAddressByID(request);
    },
    params(request) {
      return queryService.params(request);
    },
    moduleAccounts(request) {
      return queryService.moduleAccounts(request);
    },
    moduleAccountByName(request) {
      return queryService.moduleAccountByName(request);
    },
    bech32Prefix(request) {
      return queryService.bech32Prefix(request);
    },
    addressBytesToString(request) {
      return queryService.addressBytesToString(request);
    },
    addressStringToBytes(request) {
      return queryService.addressStringToBytes(request);
    },
    accountInfo(request) {
      return queryService.accountInfo(request);
    }
  };
};
// Removed broken CommonJS export annotation
