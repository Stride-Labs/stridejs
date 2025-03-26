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
    this.account = this.account.bind(this);
    this.accounts = this.accounts.bind(this);
    this.disabledList = this.disabledList.bind(this);
  }
  account(request) {
    const data = import_query.QueryAccountRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.circuit.v1.Query", "Account", data);
    return promise.then((data2) => import_query.AccountResponse.decode(new import_binary.BinaryReader(data2)));
  }
  accounts(request = {
    pagination: void 0
  }) {
    const data = import_query.QueryAccountsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.circuit.v1.Query", "Accounts", data);
    return promise.then((data2) => import_query.AccountsResponse.decode(new import_binary.BinaryReader(data2)));
  }
  disabledList(request = {}) {
    const data = import_query.QueryDisabledListRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.circuit.v1.Query", "DisabledList", data);
    return promise.then((data2) => import_query.DisabledListResponse.decode(new import_binary.BinaryReader(data2)));
  }
}
const createRpcQueryExtension = (base) => {
  const rpc = (0, import_stargate.createProtobufRpcClient)(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    account(request) {
      return queryService.account(request);
    },
    accounts(request) {
      return queryService.accounts(request);
    },
    disabledList(request) {
      return queryService.disabledList(request);
    }
  };
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  QueryClientImpl,
  createRpcQueryExtension
});
