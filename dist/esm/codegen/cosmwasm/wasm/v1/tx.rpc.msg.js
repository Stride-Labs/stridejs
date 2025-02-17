import { BinaryReader } from "../../../binary";
import { MsgStoreCode, MsgStoreCodeResponse, MsgInstantiateContract, MsgInstantiateContractResponse, MsgInstantiateContract2, MsgInstantiateContract2Response, MsgExecuteContract, MsgExecuteContractResponse, MsgMigrateContract, MsgMigrateContractResponse, MsgUpdateAdmin, MsgUpdateAdminResponse, MsgClearAdmin, MsgClearAdminResponse, MsgUpdateInstantiateConfig, MsgUpdateInstantiateConfigResponse, MsgUpdateParams, MsgUpdateParamsResponse, MsgSudoContract, MsgSudoContractResponse, MsgPinCodes, MsgPinCodesResponse, MsgUnpinCodes, MsgUnpinCodesResponse, MsgStoreAndInstantiateContract, MsgStoreAndInstantiateContractResponse, MsgRemoveCodeUploadParamsAddresses, MsgRemoveCodeUploadParamsAddressesResponse, MsgAddCodeUploadParamsAddresses, MsgAddCodeUploadParamsAddressesResponse, MsgStoreAndMigrateContract, MsgStoreAndMigrateContractResponse, MsgUpdateContractLabel, MsgUpdateContractLabelResponse } from "./tx";
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
    const data = MsgStoreCode.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Msg", "StoreCode", data);
    return promise.then((data2) => MsgStoreCodeResponse.decode(new BinaryReader(data2)));
  }
  instantiateContract(request) {
    const data = MsgInstantiateContract.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Msg", "InstantiateContract", data);
    return promise.then((data2) => MsgInstantiateContractResponse.decode(new BinaryReader(data2)));
  }
  instantiateContract2(request) {
    const data = MsgInstantiateContract2.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Msg", "InstantiateContract2", data);
    return promise.then((data2) => MsgInstantiateContract2Response.decode(new BinaryReader(data2)));
  }
  executeContract(request) {
    const data = MsgExecuteContract.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Msg", "ExecuteContract", data);
    return promise.then((data2) => MsgExecuteContractResponse.decode(new BinaryReader(data2)));
  }
  migrateContract(request) {
    const data = MsgMigrateContract.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Msg", "MigrateContract", data);
    return promise.then((data2) => MsgMigrateContractResponse.decode(new BinaryReader(data2)));
  }
  updateAdmin(request) {
    const data = MsgUpdateAdmin.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Msg", "UpdateAdmin", data);
    return promise.then((data2) => MsgUpdateAdminResponse.decode(new BinaryReader(data2)));
  }
  clearAdmin(request) {
    const data = MsgClearAdmin.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Msg", "ClearAdmin", data);
    return promise.then((data2) => MsgClearAdminResponse.decode(new BinaryReader(data2)));
  }
  updateInstantiateConfig(request) {
    const data = MsgUpdateInstantiateConfig.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Msg", "UpdateInstantiateConfig", data);
    return promise.then((data2) => MsgUpdateInstantiateConfigResponse.decode(new BinaryReader(data2)));
  }
  updateParams(request) {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Msg", "UpdateParams", data);
    return promise.then((data2) => MsgUpdateParamsResponse.decode(new BinaryReader(data2)));
  }
  sudoContract(request) {
    const data = MsgSudoContract.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Msg", "SudoContract", data);
    return promise.then((data2) => MsgSudoContractResponse.decode(new BinaryReader(data2)));
  }
  pinCodes(request) {
    const data = MsgPinCodes.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Msg", "PinCodes", data);
    return promise.then((data2) => MsgPinCodesResponse.decode(new BinaryReader(data2)));
  }
  unpinCodes(request) {
    const data = MsgUnpinCodes.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Msg", "UnpinCodes", data);
    return promise.then((data2) => MsgUnpinCodesResponse.decode(new BinaryReader(data2)));
  }
  storeAndInstantiateContract(request) {
    const data = MsgStoreAndInstantiateContract.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Msg", "StoreAndInstantiateContract", data);
    return promise.then((data2) => MsgStoreAndInstantiateContractResponse.decode(new BinaryReader(data2)));
  }
  removeCodeUploadParamsAddresses(request) {
    const data = MsgRemoveCodeUploadParamsAddresses.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Msg", "RemoveCodeUploadParamsAddresses", data);
    return promise.then((data2) => MsgRemoveCodeUploadParamsAddressesResponse.decode(new BinaryReader(data2)));
  }
  addCodeUploadParamsAddresses(request) {
    const data = MsgAddCodeUploadParamsAddresses.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Msg", "AddCodeUploadParamsAddresses", data);
    return promise.then((data2) => MsgAddCodeUploadParamsAddressesResponse.decode(new BinaryReader(data2)));
  }
  storeAndMigrateContract(request) {
    const data = MsgStoreAndMigrateContract.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Msg", "StoreAndMigrateContract", data);
    return promise.then((data2) => MsgStoreAndMigrateContractResponse.decode(new BinaryReader(data2)));
  }
  updateContractLabel(request) {
    const data = MsgUpdateContractLabel.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Msg", "UpdateContractLabel", data);
    return promise.then((data2) => MsgUpdateContractLabelResponse.decode(new BinaryReader(data2)));
  }
}
export {
  MsgClientImpl
};
