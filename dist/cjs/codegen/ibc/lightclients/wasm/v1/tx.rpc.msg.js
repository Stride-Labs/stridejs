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
var tx_rpc_msg_exports = {};
__export(tx_rpc_msg_exports, {
  MsgClientImpl: () => MsgClientImpl
});
module.exports = __toCommonJS(tx_rpc_msg_exports);
var import_binary = require("../../../../binary");
var import_tx = require("./tx");
class MsgClientImpl {
  rpc;
  constructor(rpc) {
    this.rpc = rpc;
    this.storeCode = this.storeCode.bind(this);
    this.removeChecksum = this.removeChecksum.bind(this);
    this.migrateContract = this.migrateContract.bind(this);
  }
  storeCode(request) {
    const data = import_tx.MsgStoreCode.encode(request).finish();
    const promise = this.rpc.request("ibc.lightclients.wasm.v1.Msg", "StoreCode", data);
    return promise.then((data2) => import_tx.MsgStoreCodeResponse.decode(new import_binary.BinaryReader(data2)));
  }
  removeChecksum(request) {
    const data = import_tx.MsgRemoveChecksum.encode(request).finish();
    const promise = this.rpc.request("ibc.lightclients.wasm.v1.Msg", "RemoveChecksum", data);
    return promise.then((data2) => import_tx.MsgRemoveChecksumResponse.decode(new import_binary.BinaryReader(data2)));
  }
  migrateContract(request) {
    const data = import_tx.MsgMigrateContract.encode(request).finish();
    const promise = this.rpc.request("ibc.lightclients.wasm.v1.Msg", "MigrateContract", data);
    return promise.then((data2) => import_tx.MsgMigrateContractResponse.decode(new import_binary.BinaryReader(data2)));
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  MsgClientImpl
});
