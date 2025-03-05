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
    this.params = this.params.bind(this);
    this.userRedemptionRecord = this.userRedemptionRecord.bind(this);
    this.userRedemptionRecordAll = this.userRedemptionRecordAll.bind(this);
    this.userRedemptionRecordForUser = this.userRedemptionRecordForUser.bind(this);
    this.epochUnbondingRecord = this.epochUnbondingRecord.bind(this);
    this.epochUnbondingRecordAll = this.epochUnbondingRecordAll.bind(this);
    this.depositRecord = this.depositRecord.bind(this);
    this.depositRecordAll = this.depositRecordAll.bind(this);
    this.depositRecordByHost = this.depositRecordByHost.bind(this);
    this.lSMDeposit = this.lSMDeposit.bind(this);
    this.lSMDeposits = this.lSMDeposits.bind(this);
  }
  params(request = {}) {
    const data = import_query.QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("stride.records.Query", "Params", data);
    return promise.then((data2) => import_query.QueryParamsResponse.decode(new import_binary.BinaryReader(data2)));
  }
  userRedemptionRecord(request) {
    const data = import_query.QueryGetUserRedemptionRecordRequest.encode(request).finish();
    const promise = this.rpc.request("stride.records.Query", "UserRedemptionRecord", data);
    return promise.then((data2) => import_query.QueryGetUserRedemptionRecordResponse.decode(new import_binary.BinaryReader(data2)));
  }
  userRedemptionRecordAll(request = {
    pagination: void 0
  }) {
    const data = import_query.QueryAllUserRedemptionRecordRequest.encode(request).finish();
    const promise = this.rpc.request("stride.records.Query", "UserRedemptionRecordAll", data);
    return promise.then((data2) => import_query.QueryAllUserRedemptionRecordResponse.decode(new import_binary.BinaryReader(data2)));
  }
  userRedemptionRecordForUser(request) {
    const data = import_query.QueryAllUserRedemptionRecordForUserRequest.encode(request).finish();
    const promise = this.rpc.request("stride.records.Query", "UserRedemptionRecordForUser", data);
    return promise.then((data2) => import_query.QueryAllUserRedemptionRecordForUserResponse.decode(new import_binary.BinaryReader(data2)));
  }
  epochUnbondingRecord(request) {
    const data = import_query.QueryGetEpochUnbondingRecordRequest.encode(request).finish();
    const promise = this.rpc.request("stride.records.Query", "EpochUnbondingRecord", data);
    return promise.then((data2) => import_query.QueryGetEpochUnbondingRecordResponse.decode(new import_binary.BinaryReader(data2)));
  }
  epochUnbondingRecordAll(request = {
    pagination: void 0
  }) {
    const data = import_query.QueryAllEpochUnbondingRecordRequest.encode(request).finish();
    const promise = this.rpc.request("stride.records.Query", "EpochUnbondingRecordAll", data);
    return promise.then((data2) => import_query.QueryAllEpochUnbondingRecordResponse.decode(new import_binary.BinaryReader(data2)));
  }
  depositRecord(request) {
    const data = import_query.QueryGetDepositRecordRequest.encode(request).finish();
    const promise = this.rpc.request("stride.records.Query", "DepositRecord", data);
    return promise.then((data2) => import_query.QueryGetDepositRecordResponse.decode(new import_binary.BinaryReader(data2)));
  }
  depositRecordAll(request = {
    pagination: void 0
  }) {
    const data = import_query.QueryAllDepositRecordRequest.encode(request).finish();
    const promise = this.rpc.request("stride.records.Query", "DepositRecordAll", data);
    return promise.then((data2) => import_query.QueryAllDepositRecordResponse.decode(new import_binary.BinaryReader(data2)));
  }
  depositRecordByHost(request) {
    const data = import_query.QueryDepositRecordByHostRequest.encode(request).finish();
    const promise = this.rpc.request("stride.records.Query", "DepositRecordByHost", data);
    return promise.then((data2) => import_query.QueryDepositRecordByHostResponse.decode(new import_binary.BinaryReader(data2)));
  }
  lSMDeposit(request) {
    const data = import_query.QueryLSMDepositRequest.encode(request).finish();
    const promise = this.rpc.request("stride.records.Query", "LSMDeposit", data);
    return promise.then((data2) => import_query.QueryLSMDepositResponse.decode(new import_binary.BinaryReader(data2)));
  }
  lSMDeposits(request) {
    const data = import_query.QueryLSMDepositsRequest.encode(request).finish();
    const promise = this.rpc.request("stride.records.Query", "LSMDeposits", data);
    return promise.then((data2) => import_query.QueryLSMDepositsResponse.decode(new import_binary.BinaryReader(data2)));
  }
}
const createRpcQueryExtension = (base) => {
  const rpc = (0, import_stargate.createProtobufRpcClient)(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request) {
      return queryService.params(request);
    },
    userRedemptionRecord(request) {
      return queryService.userRedemptionRecord(request);
    },
    userRedemptionRecordAll(request) {
      return queryService.userRedemptionRecordAll(request);
    },
    userRedemptionRecordForUser(request) {
      return queryService.userRedemptionRecordForUser(request);
    },
    epochUnbondingRecord(request) {
      return queryService.epochUnbondingRecord(request);
    },
    epochUnbondingRecordAll(request) {
      return queryService.epochUnbondingRecordAll(request);
    },
    depositRecord(request) {
      return queryService.depositRecord(request);
    },
    depositRecordAll(request) {
      return queryService.depositRecordAll(request);
    },
    depositRecordByHost(request) {
      return queryService.depositRecordByHost(request);
    },
    lSMDeposit(request) {
      return queryService.lSMDeposit(request);
    },
    lSMDeposits(request) {
      return queryService.lSMDeposits(request);
    }
  };
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  QueryClientImpl,
  createRpcQueryExtension
});
