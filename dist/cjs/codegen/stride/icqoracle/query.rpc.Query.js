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
    this.tokenPrice = this.tokenPrice.bind(this);
    this.tokenPrices = this.tokenPrices.bind(this);
    this.params = this.params.bind(this);
    this.tokenPriceForQuoteDenom = this.tokenPriceForQuoteDenom.bind(this);
  }
  tokenPrice(request) {
    const data = import_query.QueryTokenPriceRequest.encode(request).finish();
    const promise = this.rpc.request("stride.icqoracle.Query", "TokenPrice", data);
    return promise.then((data2) => import_query.TokenPriceResponse.decode(new import_binary.BinaryReader(data2)));
  }
  tokenPrices(request = {
    pagination: void 0
  }) {
    const data = import_query.QueryTokenPricesRequest.encode(request).finish();
    const promise = this.rpc.request("stride.icqoracle.Query", "TokenPrices", data);
    return promise.then((data2) => import_query.QueryTokenPricesResponse.decode(new import_binary.BinaryReader(data2)));
  }
  params(request = {}) {
    const data = import_query.QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("stride.icqoracle.Query", "Params", data);
    return promise.then((data2) => import_query.QueryParamsResponse.decode(new import_binary.BinaryReader(data2)));
  }
  tokenPriceForQuoteDenom(request) {
    const data = import_query.QueryTokenPriceForQuoteDenomRequest.encode(request).finish();
    const promise = this.rpc.request("stride.icqoracle.Query", "TokenPriceForQuoteDenom", data);
    return promise.then((data2) => import_query.QueryTokenPriceForQuoteDenomResponse.decode(new import_binary.BinaryReader(data2)));
  }
}
const createRpcQueryExtension = (base) => {
  const rpc = (0, import_stargate.createProtobufRpcClient)(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    tokenPrice(request) {
      return queryService.tokenPrice(request);
    },
    tokenPrices(request) {
      return queryService.tokenPrices(request);
    },
    params(request) {
      return queryService.params(request);
    },
    tokenPriceForQuoteDenom(request) {
      return queryService.tokenPriceForQuoteDenom(request);
    }
  };
};
// Proper CommonJS exports for dynamic imports
module.exports = {
  QueryClientImpl,
  createRpcQueryExtension
};
