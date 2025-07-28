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
    this.liquidValidator = this.liquidValidator.bind(this);
    this.tokenizeShareRecordById = this.tokenizeShareRecordById.bind(this);
    this.tokenizeShareRecordByDenom = this.tokenizeShareRecordByDenom.bind(this);
    this.tokenizeShareRecordsOwned = this.tokenizeShareRecordsOwned.bind(this);
    this.allTokenizeShareRecords = this.allTokenizeShareRecords.bind(this);
    this.lastTokenizeShareRecordId = this.lastTokenizeShareRecordId.bind(this);
    this.totalTokenizeSharedAssets = this.totalTokenizeSharedAssets.bind(this);
    this.totalLiquidStaked = this.totalLiquidStaked.bind(this);
    this.tokenizeShareLockInfo = this.tokenizeShareLockInfo.bind(this);
    this.params = this.params.bind(this);
    this.tokenizeShareRecordReward = this.tokenizeShareRecordReward.bind(this);
  }
  liquidValidator(request) {
    const data = import_query.QueryLiquidValidatorRequest.encode(request).finish();
    const promise = this.rpc.request("gaia.liquid.v1beta1.Query", "LiquidValidator", data);
    return promise.then((data2) => import_query.QueryLiquidValidatorResponse.decode(new import_binary.BinaryReader(data2)));
  }
  tokenizeShareRecordById(request) {
    const data = import_query.QueryTokenizeShareRecordByIdRequest.encode(request).finish();
    const promise = this.rpc.request("gaia.liquid.v1beta1.Query", "TokenizeShareRecordById", data);
    return promise.then((data2) => import_query.QueryTokenizeShareRecordByIdResponse.decode(new import_binary.BinaryReader(data2)));
  }
  tokenizeShareRecordByDenom(request) {
    const data = import_query.QueryTokenizeShareRecordByDenomRequest.encode(request).finish();
    const promise = this.rpc.request("gaia.liquid.v1beta1.Query", "TokenizeShareRecordByDenom", data);
    return promise.then((data2) => import_query.QueryTokenizeShareRecordByDenomResponse.decode(new import_binary.BinaryReader(data2)));
  }
  tokenizeShareRecordsOwned(request) {
    const data = import_query.QueryTokenizeShareRecordsOwnedRequest.encode(request).finish();
    const promise = this.rpc.request("gaia.liquid.v1beta1.Query", "TokenizeShareRecordsOwned", data);
    return promise.then((data2) => import_query.QueryTokenizeShareRecordsOwnedResponse.decode(new import_binary.BinaryReader(data2)));
  }
  allTokenizeShareRecords(request = {
    pagination: void 0
  }) {
    const data = import_query.QueryAllTokenizeShareRecordsRequest.encode(request).finish();
    const promise = this.rpc.request("gaia.liquid.v1beta1.Query", "AllTokenizeShareRecords", data);
    return promise.then((data2) => import_query.QueryAllTokenizeShareRecordsResponse.decode(new import_binary.BinaryReader(data2)));
  }
  lastTokenizeShareRecordId(request = {}) {
    const data = import_query.QueryLastTokenizeShareRecordIdRequest.encode(request).finish();
    const promise = this.rpc.request("gaia.liquid.v1beta1.Query", "LastTokenizeShareRecordId", data);
    return promise.then((data2) => import_query.QueryLastTokenizeShareRecordIdResponse.decode(new import_binary.BinaryReader(data2)));
  }
  totalTokenizeSharedAssets(request = {}) {
    const data = import_query.QueryTotalTokenizeSharedAssetsRequest.encode(request).finish();
    const promise = this.rpc.request("gaia.liquid.v1beta1.Query", "TotalTokenizeSharedAssets", data);
    return promise.then((data2) => import_query.QueryTotalTokenizeSharedAssetsResponse.decode(new import_binary.BinaryReader(data2)));
  }
  totalLiquidStaked(request = {}) {
    const data = import_query.QueryTotalLiquidStaked.encode(request).finish();
    const promise = this.rpc.request("gaia.liquid.v1beta1.Query", "TotalLiquidStaked", data);
    return promise.then((data2) => import_query.QueryTotalLiquidStakedResponse.decode(new import_binary.BinaryReader(data2)));
  }
  tokenizeShareLockInfo(request) {
    const data = import_query.QueryTokenizeShareLockInfo.encode(request).finish();
    const promise = this.rpc.request("gaia.liquid.v1beta1.Query", "TokenizeShareLockInfo", data);
    return promise.then((data2) => import_query.QueryTokenizeShareLockInfoResponse.decode(new import_binary.BinaryReader(data2)));
  }
  params(request = {}) {
    const data = import_query.QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("gaia.liquid.v1beta1.Query", "Params", data);
    return promise.then((data2) => import_query.QueryParamsResponse.decode(new import_binary.BinaryReader(data2)));
  }
  tokenizeShareRecordReward(request) {
    const data = import_query.QueryTokenizeShareRecordRewardRequest.encode(request).finish();
    const promise = this.rpc.request("gaia.liquid.v1beta1.Query", "TokenizeShareRecordReward", data);
    return promise.then((data2) => import_query.QueryTokenizeShareRecordRewardResponse.decode(new import_binary.BinaryReader(data2)));
  }
}
const createRpcQueryExtension = (base) => {
  const rpc = (0, import_stargate.createProtobufRpcClient)(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    liquidValidator(request) {
      return queryService.liquidValidator(request);
    },
    tokenizeShareRecordById(request) {
      return queryService.tokenizeShareRecordById(request);
    },
    tokenizeShareRecordByDenom(request) {
      return queryService.tokenizeShareRecordByDenom(request);
    },
    tokenizeShareRecordsOwned(request) {
      return queryService.tokenizeShareRecordsOwned(request);
    },
    allTokenizeShareRecords(request) {
      return queryService.allTokenizeShareRecords(request);
    },
    lastTokenizeShareRecordId(request) {
      return queryService.lastTokenizeShareRecordId(request);
    },
    totalTokenizeSharedAssets(request) {
      return queryService.totalTokenizeSharedAssets(request);
    },
    totalLiquidStaked(request) {
      return queryService.totalLiquidStaked(request);
    },
    tokenizeShareLockInfo(request) {
      return queryService.tokenizeShareLockInfo(request);
    },
    params(request) {
      return queryService.params(request);
    },
    tokenizeShareRecordReward(request) {
      return queryService.tokenizeShareRecordReward(request);
    }
  };
};
// Proper CommonJS exports for dynamic imports
module.exports = {
  QueryClientImpl,
  createRpcQueryExtension
};
