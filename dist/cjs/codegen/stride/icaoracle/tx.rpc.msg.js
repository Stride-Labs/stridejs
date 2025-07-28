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
var tx_rpc_msg_exports = {};
__export(tx_rpc_msg_exports, {
  MsgClientImpl: () => MsgClientImpl
});
module.exports = __toCommonJS(tx_rpc_msg_exports);
var import_binary = require("../../binary");
var import_tx = require("./tx");
class MsgClientImpl {
  rpc;
  constructor(rpc) {
    this.rpc = rpc;
    this.addOracle = this.addOracle.bind(this);
    this.instantiateOracle = this.instantiateOracle.bind(this);
    this.restoreOracleICA = this.restoreOracleICA.bind(this);
    this.toggleOracle = this.toggleOracle.bind(this);
    this.removeOracle = this.removeOracle.bind(this);
  }
  addOracle(request) {
    const data = import_tx.MsgAddOracle.encode(request).finish();
    const promise = this.rpc.request("stride.icaoracle.Msg", "AddOracle", data);
    return promise.then((data2) => import_tx.MsgAddOracleResponse.decode(new import_binary.BinaryReader(data2)));
  }
  instantiateOracle(request) {
    const data = import_tx.MsgInstantiateOracle.encode(request).finish();
    const promise = this.rpc.request("stride.icaoracle.Msg", "InstantiateOracle", data);
    return promise.then((data2) => import_tx.MsgInstantiateOracleResponse.decode(new import_binary.BinaryReader(data2)));
  }
  restoreOracleICA(request) {
    const data = import_tx.MsgRestoreOracleICA.encode(request).finish();
    const promise = this.rpc.request("stride.icaoracle.Msg", "RestoreOracleICA", data);
    return promise.then((data2) => import_tx.MsgRestoreOracleICAResponse.decode(new import_binary.BinaryReader(data2)));
  }
  toggleOracle(request) {
    const data = import_tx.MsgToggleOracle.encode(request).finish();
    const promise = this.rpc.request("stride.icaoracle.Msg", "ToggleOracle", data);
    return promise.then((data2) => import_tx.MsgToggleOracleResponse.decode(new import_binary.BinaryReader(data2)));
  }
  removeOracle(request) {
    const data = import_tx.MsgRemoveOracle.encode(request).finish();
    const promise = this.rpc.request("stride.icaoracle.Msg", "RemoveOracle", data);
    return promise.then((data2) => import_tx.MsgRemoveOracleResponse.decode(new import_binary.BinaryReader(data2)));
  }
}
// Removed broken CommonJS export annotation
