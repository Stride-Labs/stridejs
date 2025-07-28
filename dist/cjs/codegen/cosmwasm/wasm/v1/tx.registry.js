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
var tx_registry_exports = {};
__export(tx_registry_exports, {
  MessageComposer: () => MessageComposer,
  load: () => load,
  registry: () => registry
});
module.exports = __toCommonJS(tx_registry_exports);
var import_tx = require("./tx");
const registry = [["/cosmwasm.wasm.v1.MsgStoreCode", import_tx.MsgStoreCode], ["/cosmwasm.wasm.v1.MsgInstantiateContract", import_tx.MsgInstantiateContract], ["/cosmwasm.wasm.v1.MsgInstantiateContract2", import_tx.MsgInstantiateContract2], ["/cosmwasm.wasm.v1.MsgExecuteContract", import_tx.MsgExecuteContract], ["/cosmwasm.wasm.v1.MsgMigrateContract", import_tx.MsgMigrateContract], ["/cosmwasm.wasm.v1.MsgUpdateAdmin", import_tx.MsgUpdateAdmin], ["/cosmwasm.wasm.v1.MsgClearAdmin", import_tx.MsgClearAdmin], ["/cosmwasm.wasm.v1.MsgUpdateInstantiateConfig", import_tx.MsgUpdateInstantiateConfig], ["/cosmwasm.wasm.v1.MsgUpdateParams", import_tx.MsgUpdateParams], ["/cosmwasm.wasm.v1.MsgSudoContract", import_tx.MsgSudoContract], ["/cosmwasm.wasm.v1.MsgPinCodes", import_tx.MsgPinCodes], ["/cosmwasm.wasm.v1.MsgUnpinCodes", import_tx.MsgUnpinCodes], ["/cosmwasm.wasm.v1.MsgStoreAndInstantiateContract", import_tx.MsgStoreAndInstantiateContract], ["/cosmwasm.wasm.v1.MsgRemoveCodeUploadParamsAddresses", import_tx.MsgRemoveCodeUploadParamsAddresses], ["/cosmwasm.wasm.v1.MsgAddCodeUploadParamsAddresses", import_tx.MsgAddCodeUploadParamsAddresses], ["/cosmwasm.wasm.v1.MsgStoreAndMigrateContract", import_tx.MsgStoreAndMigrateContract], ["/cosmwasm.wasm.v1.MsgUpdateContractLabel", import_tx.MsgUpdateContractLabel]];
const load = (protoRegistry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
const MessageComposer = {
  encoded: {
    storeCode(value) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgStoreCode",
        value: import_tx.MsgStoreCode.encode(value).finish()
      };
    },
    instantiateContract(value) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgInstantiateContract",
        value: import_tx.MsgInstantiateContract.encode(value).finish()
      };
    },
    instantiateContract2(value) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgInstantiateContract2",
        value: import_tx.MsgInstantiateContract2.encode(value).finish()
      };
    },
    executeContract(value) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
        value: import_tx.MsgExecuteContract.encode(value).finish()
      };
    },
    migrateContract(value) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgMigrateContract",
        value: import_tx.MsgMigrateContract.encode(value).finish()
      };
    },
    updateAdmin(value) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgUpdateAdmin",
        value: import_tx.MsgUpdateAdmin.encode(value).finish()
      };
    },
    clearAdmin(value) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgClearAdmin",
        value: import_tx.MsgClearAdmin.encode(value).finish()
      };
    },
    updateInstantiateConfig(value) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgUpdateInstantiateConfig",
        value: import_tx.MsgUpdateInstantiateConfig.encode(value).finish()
      };
    },
    updateParams(value) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgUpdateParams",
        value: import_tx.MsgUpdateParams.encode(value).finish()
      };
    },
    sudoContract(value) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgSudoContract",
        value: import_tx.MsgSudoContract.encode(value).finish()
      };
    },
    pinCodes(value) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgPinCodes",
        value: import_tx.MsgPinCodes.encode(value).finish()
      };
    },
    unpinCodes(value) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgUnpinCodes",
        value: import_tx.MsgUnpinCodes.encode(value).finish()
      };
    },
    storeAndInstantiateContract(value) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgStoreAndInstantiateContract",
        value: import_tx.MsgStoreAndInstantiateContract.encode(value).finish()
      };
    },
    removeCodeUploadParamsAddresses(value) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgRemoveCodeUploadParamsAddresses",
        value: import_tx.MsgRemoveCodeUploadParamsAddresses.encode(value).finish()
      };
    },
    addCodeUploadParamsAddresses(value) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgAddCodeUploadParamsAddresses",
        value: import_tx.MsgAddCodeUploadParamsAddresses.encode(value).finish()
      };
    },
    storeAndMigrateContract(value) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgStoreAndMigrateContract",
        value: import_tx.MsgStoreAndMigrateContract.encode(value).finish()
      };
    },
    updateContractLabel(value) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgUpdateContractLabel",
        value: import_tx.MsgUpdateContractLabel.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    storeCode(value) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgStoreCode",
        value
      };
    },
    instantiateContract(value) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgInstantiateContract",
        value
      };
    },
    instantiateContract2(value) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgInstantiateContract2",
        value
      };
    },
    executeContract(value) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
        value
      };
    },
    migrateContract(value) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgMigrateContract",
        value
      };
    },
    updateAdmin(value) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgUpdateAdmin",
        value
      };
    },
    clearAdmin(value) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgClearAdmin",
        value
      };
    },
    updateInstantiateConfig(value) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgUpdateInstantiateConfig",
        value
      };
    },
    updateParams(value) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgUpdateParams",
        value
      };
    },
    sudoContract(value) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgSudoContract",
        value
      };
    },
    pinCodes(value) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgPinCodes",
        value
      };
    },
    unpinCodes(value) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgUnpinCodes",
        value
      };
    },
    storeAndInstantiateContract(value) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgStoreAndInstantiateContract",
        value
      };
    },
    removeCodeUploadParamsAddresses(value) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgRemoveCodeUploadParamsAddresses",
        value
      };
    },
    addCodeUploadParamsAddresses(value) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgAddCodeUploadParamsAddresses",
        value
      };
    },
    storeAndMigrateContract(value) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgStoreAndMigrateContract",
        value
      };
    },
    updateContractLabel(value) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgUpdateContractLabel",
        value
      };
    }
  },
  fromPartial: {
    storeCode(value) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgStoreCode",
        value: import_tx.MsgStoreCode.fromPartial(value)
      };
    },
    instantiateContract(value) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgInstantiateContract",
        value: import_tx.MsgInstantiateContract.fromPartial(value)
      };
    },
    instantiateContract2(value) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgInstantiateContract2",
        value: import_tx.MsgInstantiateContract2.fromPartial(value)
      };
    },
    executeContract(value) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
        value: import_tx.MsgExecuteContract.fromPartial(value)
      };
    },
    migrateContract(value) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgMigrateContract",
        value: import_tx.MsgMigrateContract.fromPartial(value)
      };
    },
    updateAdmin(value) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgUpdateAdmin",
        value: import_tx.MsgUpdateAdmin.fromPartial(value)
      };
    },
    clearAdmin(value) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgClearAdmin",
        value: import_tx.MsgClearAdmin.fromPartial(value)
      };
    },
    updateInstantiateConfig(value) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgUpdateInstantiateConfig",
        value: import_tx.MsgUpdateInstantiateConfig.fromPartial(value)
      };
    },
    updateParams(value) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgUpdateParams",
        value: import_tx.MsgUpdateParams.fromPartial(value)
      };
    },
    sudoContract(value) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgSudoContract",
        value: import_tx.MsgSudoContract.fromPartial(value)
      };
    },
    pinCodes(value) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgPinCodes",
        value: import_tx.MsgPinCodes.fromPartial(value)
      };
    },
    unpinCodes(value) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgUnpinCodes",
        value: import_tx.MsgUnpinCodes.fromPartial(value)
      };
    },
    storeAndInstantiateContract(value) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgStoreAndInstantiateContract",
        value: import_tx.MsgStoreAndInstantiateContract.fromPartial(value)
      };
    },
    removeCodeUploadParamsAddresses(value) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgRemoveCodeUploadParamsAddresses",
        value: import_tx.MsgRemoveCodeUploadParamsAddresses.fromPartial(value)
      };
    },
    addCodeUploadParamsAddresses(value) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgAddCodeUploadParamsAddresses",
        value: import_tx.MsgAddCodeUploadParamsAddresses.fromPartial(value)
      };
    },
    storeAndMigrateContract(value) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgStoreAndMigrateContract",
        value: import_tx.MsgStoreAndMigrateContract.fromPartial(value)
      };
    },
    updateContractLabel(value) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgUpdateContractLabel",
        value: import_tx.MsgUpdateContractLabel.fromPartial(value)
      };
    }
  }
};
// Removed broken CommonJS export annotation
