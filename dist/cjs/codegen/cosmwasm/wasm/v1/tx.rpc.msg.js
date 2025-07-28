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
var import_binary = require("../../../binary");
var import_tx = require("./tx");
class MsgClientImpl {
  rpc;
  constructor(rpc) {
    this.rpc = rpc;
    this.storeCode = this.storeCode.bind(this);
    this.instantiateContract = this.instantiateContract.bind(this);
    this.instantiateContract2 = this.instantiateContract2.bind(this);
    this.executeContract = this.executeContract.bind(this);
    this.migrateContract = this.migrateContract.bind(this);
    this.updateAdmin = this.updateAdmin.bind(this);
    this.clearAdmin = this.clearAdmin.bind(this);
    this.updateInstantiateConfig = this.updateInstantiateConfig.bind(this);
    this.updateParams = this.updateParams.bind(this);
    this.sudoContract = this.sudoContract.bind(this);
    this.pinCodes = this.pinCodes.bind(this);
    this.unpinCodes = this.unpinCodes.bind(this);
    this.storeAndInstantiateContract = this.storeAndInstantiateContract.bind(this);
    this.removeCodeUploadParamsAddresses = this.removeCodeUploadParamsAddresses.bind(this);
    this.addCodeUploadParamsAddresses = this.addCodeUploadParamsAddresses.bind(this);
    this.storeAndMigrateContract = this.storeAndMigrateContract.bind(this);
    this.updateContractLabel = this.updateContractLabel.bind(this);
  }
  storeCode(request) {
    const data = import_tx.MsgStoreCode.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Msg", "StoreCode", data);
    return promise.then((data2) => import_tx.MsgStoreCodeResponse.decode(new import_binary.BinaryReader(data2)));
  }
  instantiateContract(request) {
    const data = import_tx.MsgInstantiateContract.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Msg", "InstantiateContract", data);
    return promise.then((data2) => import_tx.MsgInstantiateContractResponse.decode(new import_binary.BinaryReader(data2)));
  }
  instantiateContract2(request) {
    const data = import_tx.MsgInstantiateContract2.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Msg", "InstantiateContract2", data);
    return promise.then((data2) => import_tx.MsgInstantiateContract2Response.decode(new import_binary.BinaryReader(data2)));
  }
  executeContract(request) {
    const data = import_tx.MsgExecuteContract.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Msg", "ExecuteContract", data);
    return promise.then((data2) => import_tx.MsgExecuteContractResponse.decode(new import_binary.BinaryReader(data2)));
  }
  migrateContract(request) {
    const data = import_tx.MsgMigrateContract.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Msg", "MigrateContract", data);
    return promise.then((data2) => import_tx.MsgMigrateContractResponse.decode(new import_binary.BinaryReader(data2)));
  }
  updateAdmin(request) {
    const data = import_tx.MsgUpdateAdmin.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Msg", "UpdateAdmin", data);
    return promise.then((data2) => import_tx.MsgUpdateAdminResponse.decode(new import_binary.BinaryReader(data2)));
  }
  clearAdmin(request) {
    const data = import_tx.MsgClearAdmin.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Msg", "ClearAdmin", data);
    return promise.then((data2) => import_tx.MsgClearAdminResponse.decode(new import_binary.BinaryReader(data2)));
  }
  updateInstantiateConfig(request) {
    const data = import_tx.MsgUpdateInstantiateConfig.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Msg", "UpdateInstantiateConfig", data);
    return promise.then((data2) => import_tx.MsgUpdateInstantiateConfigResponse.decode(new import_binary.BinaryReader(data2)));
  }
  updateParams(request) {
    const data = import_tx.MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Msg", "UpdateParams", data);
    return promise.then((data2) => import_tx.MsgUpdateParamsResponse.decode(new import_binary.BinaryReader(data2)));
  }
  sudoContract(request) {
    const data = import_tx.MsgSudoContract.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Msg", "SudoContract", data);
    return promise.then((data2) => import_tx.MsgSudoContractResponse.decode(new import_binary.BinaryReader(data2)));
  }
  pinCodes(request) {
    const data = import_tx.MsgPinCodes.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Msg", "PinCodes", data);
    return promise.then((data2) => import_tx.MsgPinCodesResponse.decode(new import_binary.BinaryReader(data2)));
  }
  unpinCodes(request) {
    const data = import_tx.MsgUnpinCodes.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Msg", "UnpinCodes", data);
    return promise.then((data2) => import_tx.MsgUnpinCodesResponse.decode(new import_binary.BinaryReader(data2)));
  }
  storeAndInstantiateContract(request) {
    const data = import_tx.MsgStoreAndInstantiateContract.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Msg", "StoreAndInstantiateContract", data);
    return promise.then((data2) => import_tx.MsgStoreAndInstantiateContractResponse.decode(new import_binary.BinaryReader(data2)));
  }
  removeCodeUploadParamsAddresses(request) {
    const data = import_tx.MsgRemoveCodeUploadParamsAddresses.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Msg", "RemoveCodeUploadParamsAddresses", data);
    return promise.then((data2) => import_tx.MsgRemoveCodeUploadParamsAddressesResponse.decode(new import_binary.BinaryReader(data2)));
  }
  addCodeUploadParamsAddresses(request) {
    const data = import_tx.MsgAddCodeUploadParamsAddresses.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Msg", "AddCodeUploadParamsAddresses", data);
    return promise.then((data2) => import_tx.MsgAddCodeUploadParamsAddressesResponse.decode(new import_binary.BinaryReader(data2)));
  }
  storeAndMigrateContract(request) {
    const data = import_tx.MsgStoreAndMigrateContract.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Msg", "StoreAndMigrateContract", data);
    return promise.then((data2) => import_tx.MsgStoreAndMigrateContractResponse.decode(new import_binary.BinaryReader(data2)));
  }
  updateContractLabel(request) {
    const data = import_tx.MsgUpdateContractLabel.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Msg", "UpdateContractLabel", data);
    return promise.then((data2) => import_tx.MsgUpdateContractLabelResponse.decode(new import_binary.BinaryReader(data2)));
  }
}
// Removed broken CommonJS export annotation
