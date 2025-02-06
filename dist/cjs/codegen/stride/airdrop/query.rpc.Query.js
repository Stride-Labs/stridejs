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
    this.airdrop = this.airdrop.bind(this);
    this.allAirdrops = this.allAirdrops.bind(this);
    this.userAllocation = this.userAllocation.bind(this);
    this.userAllocations = this.userAllocations.bind(this);
    this.allAllocations = this.allAllocations.bind(this);
    this.userSummary = this.userSummary.bind(this);
  }
  airdrop(request) {
    const data = import_query.QueryAirdropRequest.encode(request).finish();
    const promise = this.rpc.request("stride.airdrop.Query", "Airdrop", data);
    return promise.then((data2) => import_query.QueryAirdropResponse.decode(new import_binary.BinaryReader(data2)));
  }
  allAirdrops(request = {}) {
    const data = import_query.QueryAllAirdropsRequest.encode(request).finish();
    const promise = this.rpc.request("stride.airdrop.Query", "AllAirdrops", data);
    return promise.then((data2) => import_query.QueryAllAirdropsResponse.decode(new import_binary.BinaryReader(data2)));
  }
  userAllocation(request) {
    const data = import_query.QueryUserAllocationRequest.encode(request).finish();
    const promise = this.rpc.request("stride.airdrop.Query", "UserAllocation", data);
    return promise.then((data2) => import_query.QueryUserAllocationResponse.decode(new import_binary.BinaryReader(data2)));
  }
  userAllocations(request) {
    const data = import_query.QueryUserAllocationsRequest.encode(request).finish();
    const promise = this.rpc.request("stride.airdrop.Query", "UserAllocations", data);
    return promise.then((data2) => import_query.QueryUserAllocationsResponse.decode(new import_binary.BinaryReader(data2)));
  }
  allAllocations(request) {
    const data = import_query.QueryAllAllocationsRequest.encode(request).finish();
    const promise = this.rpc.request("stride.airdrop.Query", "AllAllocations", data);
    return promise.then((data2) => import_query.QueryAllAllocationsResponse.decode(new import_binary.BinaryReader(data2)));
  }
  userSummary(request) {
    const data = import_query.QueryUserSummaryRequest.encode(request).finish();
    const promise = this.rpc.request("stride.airdrop.Query", "UserSummary", data);
    return promise.then((data2) => import_query.QueryUserSummaryResponse.decode(new import_binary.BinaryReader(data2)));
  }
}
const createRpcQueryExtension = (base) => {
  const rpc = (0, import_stargate.createProtobufRpcClient)(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    airdrop(request) {
      return queryService.airdrop(request);
    },
    allAirdrops(request) {
      return queryService.allAirdrops(request);
    },
    userAllocation(request) {
      return queryService.userAllocation(request);
    },
    userAllocations(request) {
      return queryService.userAllocations(request);
    },
    allAllocations(request) {
      return queryService.allAllocations(request);
    },
    userSummary(request) {
      return queryService.userSummary(request);
    }
  };
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  QueryClientImpl,
  createRpcQueryExtension
});
