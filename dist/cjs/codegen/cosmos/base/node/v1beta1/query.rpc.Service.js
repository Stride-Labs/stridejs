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
var query_rpc_Service_exports = {};
__export(query_rpc_Service_exports, {
  ServiceClientImpl: () => ServiceClientImpl,
  createRpcQueryExtension: () => createRpcQueryExtension
});
module.exports = __toCommonJS(query_rpc_Service_exports);
var import_binary = require("../../../../binary");
var import_stargate = require("@cosmjs/stargate");
var import_query = require("./query");
class ServiceClientImpl {
  rpc;
  constructor(rpc) {
    this.rpc = rpc;
    this.config = this.config.bind(this);
  }
  config(request = {}) {
    const data = import_query.ConfigRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.base.node.v1beta1.Service", "Config", data);
    return promise.then((data2) => import_query.ConfigResponse.decode(new import_binary.BinaryReader(data2)));
  }
}
const createRpcQueryExtension = (base) => {
  const rpc = (0, import_stargate.createProtobufRpcClient)(base);
  const queryService = new ServiceClientImpl(rpc);
  return {
    config(request) {
      return queryService.config(request);
    }
  };
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ServiceClientImpl,
  createRpcQueryExtension
});
