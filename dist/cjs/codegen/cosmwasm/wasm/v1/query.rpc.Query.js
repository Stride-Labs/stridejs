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
    this.contractInfo = this.contractInfo.bind(this);
    this.contractHistory = this.contractHistory.bind(this);
    this.contractsByCode = this.contractsByCode.bind(this);
    this.allContractState = this.allContractState.bind(this);
    this.rawContractState = this.rawContractState.bind(this);
    this.smartContractState = this.smartContractState.bind(this);
    this.code = this.code.bind(this);
    this.codes = this.codes.bind(this);
    this.pinnedCodes = this.pinnedCodes.bind(this);
    this.params = this.params.bind(this);
    this.contractsByCreator = this.contractsByCreator.bind(this);
  }
  contractInfo(request) {
    const data = import_query.QueryContractInfoRequest.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Query", "ContractInfo", data);
    return promise.then((data2) => import_query.QueryContractInfoResponse.decode(new import_binary.BinaryReader(data2)));
  }
  contractHistory(request) {
    const data = import_query.QueryContractHistoryRequest.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Query", "ContractHistory", data);
    return promise.then((data2) => import_query.QueryContractHistoryResponse.decode(new import_binary.BinaryReader(data2)));
  }
  contractsByCode(request) {
    const data = import_query.QueryContractsByCodeRequest.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Query", "ContractsByCode", data);
    return promise.then((data2) => import_query.QueryContractsByCodeResponse.decode(new import_binary.BinaryReader(data2)));
  }
  allContractState(request) {
    const data = import_query.QueryAllContractStateRequest.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Query", "AllContractState", data);
    return promise.then((data2) => import_query.QueryAllContractStateResponse.decode(new import_binary.BinaryReader(data2)));
  }
  rawContractState(request) {
    const data = import_query.QueryRawContractStateRequest.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Query", "RawContractState", data);
    return promise.then((data2) => import_query.QueryRawContractStateResponse.decode(new import_binary.BinaryReader(data2)));
  }
  smartContractState(request) {
    const data = import_query.QuerySmartContractStateRequest.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Query", "SmartContractState", data);
    return promise.then((data2) => import_query.QuerySmartContractStateResponse.decode(new import_binary.BinaryReader(data2)));
  }
  code(request) {
    const data = import_query.QueryCodeRequest.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Query", "Code", data);
    return promise.then((data2) => import_query.QueryCodeResponse.decode(new import_binary.BinaryReader(data2)));
  }
  codes(request = {
    pagination: void 0
  }) {
    const data = import_query.QueryCodesRequest.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Query", "Codes", data);
    return promise.then((data2) => import_query.QueryCodesResponse.decode(new import_binary.BinaryReader(data2)));
  }
  pinnedCodes(request = {
    pagination: void 0
  }) {
    const data = import_query.QueryPinnedCodesRequest.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Query", "PinnedCodes", data);
    return promise.then((data2) => import_query.QueryPinnedCodesResponse.decode(new import_binary.BinaryReader(data2)));
  }
  params(request = {}) {
    const data = import_query.QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Query", "Params", data);
    return promise.then((data2) => import_query.QueryParamsResponse.decode(new import_binary.BinaryReader(data2)));
  }
  contractsByCreator(request) {
    const data = import_query.QueryContractsByCreatorRequest.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Query", "ContractsByCreator", data);
    return promise.then((data2) => import_query.QueryContractsByCreatorResponse.decode(new import_binary.BinaryReader(data2)));
  }
}
const createRpcQueryExtension = (base) => {
  const rpc = (0, import_stargate.createProtobufRpcClient)(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    contractInfo(request) {
      return queryService.contractInfo(request);
    },
    contractHistory(request) {
      return queryService.contractHistory(request);
    },
    contractsByCode(request) {
      return queryService.contractsByCode(request);
    },
    allContractState(request) {
      return queryService.allContractState(request);
    },
    rawContractState(request) {
      return queryService.rawContractState(request);
    },
    smartContractState(request) {
      return queryService.smartContractState(request);
    },
    code(request) {
      return queryService.code(request);
    },
    codes(request) {
      return queryService.codes(request);
    },
    pinnedCodes(request) {
      return queryService.pinnedCodes(request);
    },
    params(request) {
      return queryService.params(request);
    },
    contractsByCreator(request) {
      return queryService.contractsByCreator(request);
    }
  };
};
// Proper CommonJS exports for dynamic imports
module.exports = {
  QueryClientImpl,
  createRpcQueryExtension
};
