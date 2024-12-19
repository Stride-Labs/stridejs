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
    this.owner = this.owner.bind(this);
    this.supply = this.supply.bind(this);
    this.nFTs = this.nFTs.bind(this);
    this.nFT = this.nFT.bind(this);
    this.class = this.class.bind(this);
    this.classes = this.classes.bind(this);
  }
  balance(request) {
    const data = import_query.QueryBalanceRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.nft.v1beta1.Query", "Balance", data);
    return promise.then((data2) => import_query.QueryBalanceResponse.decode(new import_binary.BinaryReader(data2)));
  }
  owner(request) {
    const data = import_query.QueryOwnerRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.nft.v1beta1.Query", "Owner", data);
    return promise.then((data2) => import_query.QueryOwnerResponse.decode(new import_binary.BinaryReader(data2)));
  }
  supply(request) {
    const data = import_query.QuerySupplyRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.nft.v1beta1.Query", "Supply", data);
    return promise.then((data2) => import_query.QuerySupplyResponse.decode(new import_binary.BinaryReader(data2)));
  }
  nFTs(request) {
    const data = import_query.QueryNFTsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.nft.v1beta1.Query", "NFTs", data);
    return promise.then((data2) => import_query.QueryNFTsResponse.decode(new import_binary.BinaryReader(data2)));
  }
  nFT(request) {
    const data = import_query.QueryNFTRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.nft.v1beta1.Query", "NFT", data);
    return promise.then((data2) => import_query.QueryNFTResponse.decode(new import_binary.BinaryReader(data2)));
  }
  class(request) {
    const data = import_query.QueryClassRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.nft.v1beta1.Query", "Class", data);
    return promise.then((data2) => import_query.QueryClassResponse.decode(new import_binary.BinaryReader(data2)));
  }
  classes(request = {
    pagination: void 0
  }) {
    const data = import_query.QueryClassesRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.nft.v1beta1.Query", "Classes", data);
    return promise.then((data2) => import_query.QueryClassesResponse.decode(new import_binary.BinaryReader(data2)));
  }
}
const createRpcQueryExtension = (base) => {
  const rpc = (0, import_stargate.createProtobufRpcClient)(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    balance(request) {
      return queryService.balance(request);
    },
    owner(request) {
      return queryService.owner(request);
    },
    supply(request) {
      return queryService.supply(request);
    },
    nFTs(request) {
      return queryService.nFTs(request);
    },
    nFT(request) {
      return queryService.nFT(request);
    },
    class(request) {
      return queryService.class(request);
    },
    classes(request) {
      return queryService.classes(request);
    }
  };
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  QueryClientImpl,
  createRpcQueryExtension
});
