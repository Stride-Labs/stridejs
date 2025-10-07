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
    this.strdBurnerAddress = this.strdBurnerAddress.bind(this);
    this.totalStrdBurned = this.totalStrdBurned.bind(this);
    this.strdBurnedByAddress = this.strdBurnedByAddress.bind(this);
    this.linkedAddress = this.linkedAddress.bind(this);
  }
  strdBurnerAddress(request = {}) {
    const data = import_query.QueryStrdBurnerAddressRequest.encode(request).finish();
    const promise = this.rpc.request("stride.strdburner.Query", "StrdBurnerAddress", data);
    return promise.then((data2) => import_query.QueryStrdBurnerAddressResponse.decode(new import_binary.BinaryReader(data2)));
  }
  totalStrdBurned(request = {}) {
    const data = import_query.QueryTotalStrdBurnedRequest.encode(request).finish();
    const promise = this.rpc.request("stride.strdburner.Query", "TotalStrdBurned", data);
    return promise.then((data2) => import_query.QueryTotalStrdBurnedResponse.decode(new import_binary.BinaryReader(data2)));
  }
  strdBurnedByAddress(request) {
    const data = import_query.QueryStrdBurnedByAddressRequest.encode(request).finish();
    const promise = this.rpc.request("stride.strdburner.Query", "StrdBurnedByAddress", data);
    return promise.then((data2) => import_query.QueryStrdBurnedByAddressResponse.decode(new import_binary.BinaryReader(data2)));
  }
  linkedAddress(request) {
    const data = import_query.QueryLinkedAddressRequest.encode(request).finish();
    const promise = this.rpc.request("stride.strdburner.Query", "LinkedAddress", data);
    return promise.then((data2) => import_query.QueryLinkedAddressResponse.decode(new import_binary.BinaryReader(data2)));
  }
}
const createRpcQueryExtension = (base) => {
  const rpc = (0, import_stargate.createProtobufRpcClient)(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    strdBurnerAddress(request) {
      return queryService.strdBurnerAddress(request);
    },
    totalStrdBurned(request) {
      return queryService.totalStrdBurned(request);
    },
    strdBurnedByAddress(request) {
      return queryService.strdBurnedByAddress(request);
    },
    linkedAddress(request) {
      return queryService.linkedAddress(request);
    }
  };
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  QueryClientImpl,
  createRpcQueryExtension
});
