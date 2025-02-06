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
    this.distributorAccountBalance = this.distributorAccountBalance.bind(this);
    this.params = this.params.bind(this);
    this.claimRecord = this.claimRecord.bind(this);
    this.claimableForAction = this.claimableForAction.bind(this);
    this.totalClaimable = this.totalClaimable.bind(this);
    this.userVestings = this.userVestings.bind(this);
    this.claimStatus = this.claimStatus.bind(this);
    this.claimMetadata = this.claimMetadata.bind(this);
  }
  distributorAccountBalance(request) {
    const data = import_query.QueryDistributorAccountBalanceRequest.encode(request).finish();
    const promise = this.rpc.request("stride.claim.Query", "DistributorAccountBalance", data);
    return promise.then((data2) => import_query.QueryDistributorAccountBalanceResponse.decode(new import_binary.BinaryReader(data2)));
  }
  params(request = {}) {
    const data = import_query.QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("stride.claim.Query", "Params", data);
    return promise.then((data2) => import_query.QueryParamsResponse.decode(new import_binary.BinaryReader(data2)));
  }
  claimRecord(request) {
    const data = import_query.QueryClaimRecordRequest.encode(request).finish();
    const promise = this.rpc.request("stride.claim.Query", "ClaimRecord", data);
    return promise.then((data2) => import_query.QueryClaimRecordResponse.decode(new import_binary.BinaryReader(data2)));
  }
  claimableForAction(request) {
    const data = import_query.QueryClaimableForActionRequest.encode(request).finish();
    const promise = this.rpc.request("stride.claim.Query", "ClaimableForAction", data);
    return promise.then((data2) => import_query.QueryClaimableForActionResponse.decode(new import_binary.BinaryReader(data2)));
  }
  totalClaimable(request) {
    const data = import_query.QueryTotalClaimableRequest.encode(request).finish();
    const promise = this.rpc.request("stride.claim.Query", "TotalClaimable", data);
    return promise.then((data2) => import_query.QueryTotalClaimableResponse.decode(new import_binary.BinaryReader(data2)));
  }
  userVestings(request) {
    const data = import_query.QueryUserVestingsRequest.encode(request).finish();
    const promise = this.rpc.request("stride.claim.Query", "UserVestings", data);
    return promise.then((data2) => import_query.QueryUserVestingsResponse.decode(new import_binary.BinaryReader(data2)));
  }
  claimStatus(request) {
    const data = import_query.QueryClaimStatusRequest.encode(request).finish();
    const promise = this.rpc.request("stride.claim.Query", "ClaimStatus", data);
    return promise.then((data2) => import_query.QueryClaimStatusResponse.decode(new import_binary.BinaryReader(data2)));
  }
  claimMetadata(request = {}) {
    const data = import_query.QueryClaimMetadataRequest.encode(request).finish();
    const promise = this.rpc.request("stride.claim.Query", "ClaimMetadata", data);
    return promise.then((data2) => import_query.QueryClaimMetadataResponse.decode(new import_binary.BinaryReader(data2)));
  }
}
const createRpcQueryExtension = (base) => {
  const rpc = (0, import_stargate.createProtobufRpcClient)(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    distributorAccountBalance(request) {
      return queryService.distributorAccountBalance(request);
    },
    params(request) {
      return queryService.params(request);
    },
    claimRecord(request) {
      return queryService.claimRecord(request);
    },
    claimableForAction(request) {
      return queryService.claimableForAction(request);
    },
    totalClaimable(request) {
      return queryService.totalClaimable(request);
    },
    userVestings(request) {
      return queryService.userVestings(request);
    },
    claimStatus(request) {
      return queryService.claimStatus(request);
    },
    claimMetadata(request) {
      return queryService.claimMetadata(request);
    }
  };
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  QueryClientImpl,
  createRpcQueryExtension
});
