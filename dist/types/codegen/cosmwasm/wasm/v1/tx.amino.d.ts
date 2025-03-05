import { MsgStoreCode, MsgInstantiateContract, MsgInstantiateContract2, MsgExecuteContract, MsgMigrateContract, MsgUpdateAdmin, MsgClearAdmin, MsgUpdateInstantiateConfig, MsgUpdateParams, MsgSudoContract, MsgPinCodes, MsgUnpinCodes, MsgStoreAndInstantiateContract, MsgRemoveCodeUploadParamsAddresses, MsgAddCodeUploadParamsAddresses, MsgStoreAndMigrateContract, MsgUpdateContractLabel } from "./tx";
export declare const AminoConverter: {
    "/cosmwasm.wasm.v1.MsgStoreCode": {
        aminoType: string;
        toAmino: (message: MsgStoreCode) => import("./tx").MsgStoreCodeAmino;
        fromAmino: (object: import("./tx").MsgStoreCodeAmino) => MsgStoreCode;
    };
    "/cosmwasm.wasm.v1.MsgInstantiateContract": {
        aminoType: string;
        toAmino: (message: MsgInstantiateContract) => import("./tx").MsgInstantiateContractAmino;
        fromAmino: (object: import("./tx").MsgInstantiateContractAmino) => MsgInstantiateContract;
    };
    "/cosmwasm.wasm.v1.MsgInstantiateContract2": {
        aminoType: string;
        toAmino: (message: MsgInstantiateContract2) => import("./tx").MsgInstantiateContract2Amino;
        fromAmino: (object: import("./tx").MsgInstantiateContract2Amino) => MsgInstantiateContract2;
    };
    "/cosmwasm.wasm.v1.MsgExecuteContract": {
        aminoType: string;
        toAmino: (message: MsgExecuteContract) => import("./tx").MsgExecuteContractAmino;
        fromAmino: (object: import("./tx").MsgExecuteContractAmino) => MsgExecuteContract;
    };
    "/cosmwasm.wasm.v1.MsgMigrateContract": {
        aminoType: string;
        toAmino: (message: MsgMigrateContract) => import("./tx").MsgMigrateContractAmino;
        fromAmino: (object: import("./tx").MsgMigrateContractAmino) => MsgMigrateContract;
    };
    "/cosmwasm.wasm.v1.MsgUpdateAdmin": {
        aminoType: string;
        toAmino: (message: MsgUpdateAdmin) => import("./tx").MsgUpdateAdminAmino;
        fromAmino: (object: import("./tx").MsgUpdateAdminAmino) => MsgUpdateAdmin;
    };
    "/cosmwasm.wasm.v1.MsgClearAdmin": {
        aminoType: string;
        toAmino: (message: MsgClearAdmin) => import("./tx").MsgClearAdminAmino;
        fromAmino: (object: import("./tx").MsgClearAdminAmino) => MsgClearAdmin;
    };
    "/cosmwasm.wasm.v1.MsgUpdateInstantiateConfig": {
        aminoType: string;
        toAmino: (message: MsgUpdateInstantiateConfig) => import("./tx").MsgUpdateInstantiateConfigAmino;
        fromAmino: (object: import("./tx").MsgUpdateInstantiateConfigAmino) => MsgUpdateInstantiateConfig;
    };
    "/cosmwasm.wasm.v1.MsgUpdateParams": {
        aminoType: string;
        toAmino: (message: MsgUpdateParams) => import("./tx").MsgUpdateParamsAmino;
        fromAmino: (object: import("./tx").MsgUpdateParamsAmino) => MsgUpdateParams;
    };
    "/cosmwasm.wasm.v1.MsgSudoContract": {
        aminoType: string;
        toAmino: (message: MsgSudoContract) => import("./tx").MsgSudoContractAmino;
        fromAmino: (object: import("./tx").MsgSudoContractAmino) => MsgSudoContract;
    };
    "/cosmwasm.wasm.v1.MsgPinCodes": {
        aminoType: string;
        toAmino: (message: MsgPinCodes) => import("./tx").MsgPinCodesAmino;
        fromAmino: (object: import("./tx").MsgPinCodesAmino) => MsgPinCodes;
    };
    "/cosmwasm.wasm.v1.MsgUnpinCodes": {
        aminoType: string;
        toAmino: (message: MsgUnpinCodes) => import("./tx").MsgUnpinCodesAmino;
        fromAmino: (object: import("./tx").MsgUnpinCodesAmino) => MsgUnpinCodes;
    };
    "/cosmwasm.wasm.v1.MsgStoreAndInstantiateContract": {
        aminoType: string;
        toAmino: (message: MsgStoreAndInstantiateContract) => import("./tx").MsgStoreAndInstantiateContractAmino;
        fromAmino: (object: import("./tx").MsgStoreAndInstantiateContractAmino) => MsgStoreAndInstantiateContract;
    };
    "/cosmwasm.wasm.v1.MsgRemoveCodeUploadParamsAddresses": {
        aminoType: string;
        toAmino: (message: MsgRemoveCodeUploadParamsAddresses) => import("./tx").MsgRemoveCodeUploadParamsAddressesAmino;
        fromAmino: (object: import("./tx").MsgRemoveCodeUploadParamsAddressesAmino) => MsgRemoveCodeUploadParamsAddresses;
    };
    "/cosmwasm.wasm.v1.MsgAddCodeUploadParamsAddresses": {
        aminoType: string;
        toAmino: (message: MsgAddCodeUploadParamsAddresses) => import("./tx").MsgAddCodeUploadParamsAddressesAmino;
        fromAmino: (object: import("./tx").MsgAddCodeUploadParamsAddressesAmino) => MsgAddCodeUploadParamsAddresses;
    };
    "/cosmwasm.wasm.v1.MsgStoreAndMigrateContract": {
        aminoType: string;
        toAmino: (message: MsgStoreAndMigrateContract) => import("./tx").MsgStoreAndMigrateContractAmino;
        fromAmino: (object: import("./tx").MsgStoreAndMigrateContractAmino) => MsgStoreAndMigrateContract;
    };
    "/cosmwasm.wasm.v1.MsgUpdateContractLabel": {
        aminoType: string;
        toAmino: (message: MsgUpdateContractLabel) => import("./tx").MsgUpdateContractLabelAmino;
        fromAmino: (object: import("./tx").MsgUpdateContractLabelAmino) => MsgUpdateContractLabel;
    };
};
