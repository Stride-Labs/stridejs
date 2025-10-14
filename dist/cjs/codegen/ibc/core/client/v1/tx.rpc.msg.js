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
    this.createClient = this.createClient.bind(this);
    this.updateClient = this.updateClient.bind(this);
    this.upgradeClient = this.upgradeClient.bind(this);
    this.submitMisbehaviour = this.submitMisbehaviour.bind(this);
    this.recoverClient = this.recoverClient.bind(this);
    this.iBCSoftwareUpgrade = this.iBCSoftwareUpgrade.bind(this);
    this.updateClientParams = this.updateClientParams.bind(this);
  }
  createClient(request) {
    const data = import_tx.MsgCreateClient.encode(request).finish();
    const promise = this.rpc.request("ibc.core.client.v1.Msg", "CreateClient", data);
    return promise.then((data2) => import_tx.MsgCreateClientResponse.decode(new import_binary.BinaryReader(data2)));
  }
  updateClient(request) {
    const data = import_tx.MsgUpdateClient.encode(request).finish();
    const promise = this.rpc.request("ibc.core.client.v1.Msg", "UpdateClient", data);
    return promise.then((data2) => import_tx.MsgUpdateClientResponse.decode(new import_binary.BinaryReader(data2)));
  }
  upgradeClient(request) {
    const data = import_tx.MsgUpgradeClient.encode(request).finish();
    const promise = this.rpc.request("ibc.core.client.v1.Msg", "UpgradeClient", data);
    return promise.then((data2) => import_tx.MsgUpgradeClientResponse.decode(new import_binary.BinaryReader(data2)));
  }
  submitMisbehaviour(request) {
    const data = import_tx.MsgSubmitMisbehaviour.encode(request).finish();
    const promise = this.rpc.request("ibc.core.client.v1.Msg", "SubmitMisbehaviour", data);
    return promise.then((data2) => import_tx.MsgSubmitMisbehaviourResponse.decode(new import_binary.BinaryReader(data2)));
  }
  recoverClient(request) {
    const data = import_tx.MsgRecoverClient.encode(request).finish();
    const promise = this.rpc.request("ibc.core.client.v1.Msg", "RecoverClient", data);
    return promise.then((data2) => import_tx.MsgRecoverClientResponse.decode(new import_binary.BinaryReader(data2)));
  }
  iBCSoftwareUpgrade(request) {
    const data = import_tx.MsgIBCSoftwareUpgrade.encode(request).finish();
    const promise = this.rpc.request("ibc.core.client.v1.Msg", "IBCSoftwareUpgrade", data);
    return promise.then((data2) => import_tx.MsgIBCSoftwareUpgradeResponse.decode(new import_binary.BinaryReader(data2)));
  }
  updateClientParams(request) {
    const data = import_tx.MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("ibc.core.client.v1.Msg", "UpdateClientParams", data);
    return promise.then((data2) => import_tx.MsgUpdateParamsResponse.decode(new import_binary.BinaryReader(data2)));
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  MsgClientImpl
});
