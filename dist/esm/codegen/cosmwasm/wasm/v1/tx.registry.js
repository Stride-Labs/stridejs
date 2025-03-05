import { MsgStoreCode, MsgInstantiateContract, MsgInstantiateContract2, MsgExecuteContract, MsgMigrateContract, MsgUpdateAdmin, MsgClearAdmin, MsgUpdateInstantiateConfig, MsgUpdateParams, MsgSudoContract, MsgPinCodes, MsgUnpinCodes, MsgStoreAndInstantiateContract, MsgRemoveCodeUploadParamsAddresses, MsgAddCodeUploadParamsAddresses, MsgStoreAndMigrateContract, MsgUpdateContractLabel } from "./tx";
const registry = [["/cosmwasm.wasm.v1.MsgStoreCode", MsgStoreCode], ["/cosmwasm.wasm.v1.MsgInstantiateContract", MsgInstantiateContract], ["/cosmwasm.wasm.v1.MsgInstantiateContract2", MsgInstantiateContract2], ["/cosmwasm.wasm.v1.MsgExecuteContract", MsgExecuteContract], ["/cosmwasm.wasm.v1.MsgMigrateContract", MsgMigrateContract], ["/cosmwasm.wasm.v1.MsgUpdateAdmin", MsgUpdateAdmin], ["/cosmwasm.wasm.v1.MsgClearAdmin", MsgClearAdmin], ["/cosmwasm.wasm.v1.MsgUpdateInstantiateConfig", MsgUpdateInstantiateConfig], ["/cosmwasm.wasm.v1.MsgUpdateParams", MsgUpdateParams], ["/cosmwasm.wasm.v1.MsgSudoContract", MsgSudoContract], ["/cosmwasm.wasm.v1.MsgPinCodes", MsgPinCodes], ["/cosmwasm.wasm.v1.MsgUnpinCodes", MsgUnpinCodes], ["/cosmwasm.wasm.v1.MsgStoreAndInstantiateContract", MsgStoreAndInstantiateContract], ["/cosmwasm.wasm.v1.MsgRemoveCodeUploadParamsAddresses", MsgRemoveCodeUploadParamsAddresses], ["/cosmwasm.wasm.v1.MsgAddCodeUploadParamsAddresses", MsgAddCodeUploadParamsAddresses], ["/cosmwasm.wasm.v1.MsgStoreAndMigrateContract", MsgStoreAndMigrateContract], ["/cosmwasm.wasm.v1.MsgUpdateContractLabel", MsgUpdateContractLabel]];
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
        value: MsgStoreCode.encode(value).finish()
      };
    },
    instantiateContract(value) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgInstantiateContract",
        value: MsgInstantiateContract.encode(value).finish()
      };
    },
    instantiateContract2(value) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgInstantiateContract2",
        value: MsgInstantiateContract2.encode(value).finish()
      };
    },
    executeContract(value) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
        value: MsgExecuteContract.encode(value).finish()
      };
    },
    migrateContract(value) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgMigrateContract",
        value: MsgMigrateContract.encode(value).finish()
      };
    },
    updateAdmin(value) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgUpdateAdmin",
        value: MsgUpdateAdmin.encode(value).finish()
      };
    },
    clearAdmin(value) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgClearAdmin",
        value: MsgClearAdmin.encode(value).finish()
      };
    },
    updateInstantiateConfig(value) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgUpdateInstantiateConfig",
        value: MsgUpdateInstantiateConfig.encode(value).finish()
      };
    },
    updateParams(value) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    },
    sudoContract(value) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgSudoContract",
        value: MsgSudoContract.encode(value).finish()
      };
    },
    pinCodes(value) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgPinCodes",
        value: MsgPinCodes.encode(value).finish()
      };
    },
    unpinCodes(value) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgUnpinCodes",
        value: MsgUnpinCodes.encode(value).finish()
      };
    },
    storeAndInstantiateContract(value) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgStoreAndInstantiateContract",
        value: MsgStoreAndInstantiateContract.encode(value).finish()
      };
    },
    removeCodeUploadParamsAddresses(value) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgRemoveCodeUploadParamsAddresses",
        value: MsgRemoveCodeUploadParamsAddresses.encode(value).finish()
      };
    },
    addCodeUploadParamsAddresses(value) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgAddCodeUploadParamsAddresses",
        value: MsgAddCodeUploadParamsAddresses.encode(value).finish()
      };
    },
    storeAndMigrateContract(value) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgStoreAndMigrateContract",
        value: MsgStoreAndMigrateContract.encode(value).finish()
      };
    },
    updateContractLabel(value) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgUpdateContractLabel",
        value: MsgUpdateContractLabel.encode(value).finish()
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
        value: MsgStoreCode.fromPartial(value)
      };
    },
    instantiateContract(value) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgInstantiateContract",
        value: MsgInstantiateContract.fromPartial(value)
      };
    },
    instantiateContract2(value) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgInstantiateContract2",
        value: MsgInstantiateContract2.fromPartial(value)
      };
    },
    executeContract(value) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
        value: MsgExecuteContract.fromPartial(value)
      };
    },
    migrateContract(value) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgMigrateContract",
        value: MsgMigrateContract.fromPartial(value)
      };
    },
    updateAdmin(value) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgUpdateAdmin",
        value: MsgUpdateAdmin.fromPartial(value)
      };
    },
    clearAdmin(value) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgClearAdmin",
        value: MsgClearAdmin.fromPartial(value)
      };
    },
    updateInstantiateConfig(value) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgUpdateInstantiateConfig",
        value: MsgUpdateInstantiateConfig.fromPartial(value)
      };
    },
    updateParams(value) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    },
    sudoContract(value) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgSudoContract",
        value: MsgSudoContract.fromPartial(value)
      };
    },
    pinCodes(value) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgPinCodes",
        value: MsgPinCodes.fromPartial(value)
      };
    },
    unpinCodes(value) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgUnpinCodes",
        value: MsgUnpinCodes.fromPartial(value)
      };
    },
    storeAndInstantiateContract(value) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgStoreAndInstantiateContract",
        value: MsgStoreAndInstantiateContract.fromPartial(value)
      };
    },
    removeCodeUploadParamsAddresses(value) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgRemoveCodeUploadParamsAddresses",
        value: MsgRemoveCodeUploadParamsAddresses.fromPartial(value)
      };
    },
    addCodeUploadParamsAddresses(value) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgAddCodeUploadParamsAddresses",
        value: MsgAddCodeUploadParamsAddresses.fromPartial(value)
      };
    },
    storeAndMigrateContract(value) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgStoreAndMigrateContract",
        value: MsgStoreAndMigrateContract.fromPartial(value)
      };
    },
    updateContractLabel(value) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgUpdateContractLabel",
        value: MsgUpdateContractLabel.fromPartial(value)
      };
    }
  }
};
export {
  MessageComposer,
  load,
  registry
};
