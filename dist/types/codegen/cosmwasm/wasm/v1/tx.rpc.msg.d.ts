import { TxRpc } from "../../../types";
import { MsgStoreCode, MsgStoreCodeResponse, MsgInstantiateContract, MsgInstantiateContractResponse, MsgInstantiateContract2, MsgInstantiateContract2Response, MsgExecuteContract, MsgExecuteContractResponse, MsgMigrateContract, MsgMigrateContractResponse, MsgUpdateAdmin, MsgUpdateAdminResponse, MsgClearAdmin, MsgClearAdminResponse, MsgUpdateInstantiateConfig, MsgUpdateInstantiateConfigResponse, MsgUpdateParams, MsgUpdateParamsResponse, MsgSudoContract, MsgSudoContractResponse, MsgPinCodes, MsgPinCodesResponse, MsgUnpinCodes, MsgUnpinCodesResponse, MsgStoreAndInstantiateContract, MsgStoreAndInstantiateContractResponse, MsgRemoveCodeUploadParamsAddresses, MsgRemoveCodeUploadParamsAddressesResponse, MsgAddCodeUploadParamsAddresses, MsgAddCodeUploadParamsAddressesResponse, MsgStoreAndMigrateContract, MsgStoreAndMigrateContractResponse, MsgUpdateContractLabel, MsgUpdateContractLabelResponse } from "./tx";
/** Msg defines the wasm Msg service. */
export interface Msg {
    /** StoreCode to submit Wasm code to the system */
    storeCode(request: MsgStoreCode): Promise<MsgStoreCodeResponse>;
    /**
     * InstantiateContract creates a new smart contract instance for the given
     *  code id.
     */
    instantiateContract(request: MsgInstantiateContract): Promise<MsgInstantiateContractResponse>;
    /**
     * InstantiateContract2 creates a new smart contract instance for the given
     *  code id with a predictable address
     */
    instantiateContract2(request: MsgInstantiateContract2): Promise<MsgInstantiateContract2Response>;
    /** Execute submits the given message data to a smart contract */
    executeContract(request: MsgExecuteContract): Promise<MsgExecuteContractResponse>;
    /** Migrate runs a code upgrade/ downgrade for a smart contract */
    migrateContract(request: MsgMigrateContract): Promise<MsgMigrateContractResponse>;
    /** UpdateAdmin sets a new admin for a smart contract */
    updateAdmin(request: MsgUpdateAdmin): Promise<MsgUpdateAdminResponse>;
    /** ClearAdmin removes any admin stored for a smart contract */
    clearAdmin(request: MsgClearAdmin): Promise<MsgClearAdminResponse>;
    /** UpdateInstantiateConfig updates instantiate config for a smart contract */
    updateInstantiateConfig(request: MsgUpdateInstantiateConfig): Promise<MsgUpdateInstantiateConfigResponse>;
    /**
     * UpdateParams defines a governance operation for updating the x/wasm
     * module parameters. The authority is defined in the keeper.
     *
     * Since: 0.40
     */
    updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
    /**
     * SudoContract defines a governance operation for calling sudo
     * on a contract. The authority is defined in the keeper.
     *
     * Since: 0.40
     */
    sudoContract(request: MsgSudoContract): Promise<MsgSudoContractResponse>;
    /**
     * PinCodes defines a governance operation for pinning a set of
     * code ids in the wasmvm cache. The authority is defined in the keeper.
     *
     * Since: 0.40
     */
    pinCodes(request: MsgPinCodes): Promise<MsgPinCodesResponse>;
    /**
     * UnpinCodes defines a governance operation for unpinning a set of
     * code ids in the wasmvm cache. The authority is defined in the keeper.
     *
     * Since: 0.40
     */
    unpinCodes(request: MsgUnpinCodes): Promise<MsgUnpinCodesResponse>;
    /**
     * StoreAndInstantiateContract defines a governance operation for storing
     * and instantiating the contract. The authority is defined in the keeper.
     *
     * Since: 0.40
     */
    storeAndInstantiateContract(request: MsgStoreAndInstantiateContract): Promise<MsgStoreAndInstantiateContractResponse>;
    /**
     * RemoveCodeUploadParamsAddresses defines a governance operation for
     * removing addresses from code upload params.
     * The authority is defined in the keeper.
     */
    removeCodeUploadParamsAddresses(request: MsgRemoveCodeUploadParamsAddresses): Promise<MsgRemoveCodeUploadParamsAddressesResponse>;
    /**
     * AddCodeUploadParamsAddresses defines a governance operation for
     * adding addresses to code upload params.
     * The authority is defined in the keeper.
     */
    addCodeUploadParamsAddresses(request: MsgAddCodeUploadParamsAddresses): Promise<MsgAddCodeUploadParamsAddressesResponse>;
    /**
     * StoreAndMigrateContract defines a governance operation for storing
     * and migrating the contract. The authority is defined in the keeper.
     *
     * Since: 0.42
     */
    storeAndMigrateContract(request: MsgStoreAndMigrateContract): Promise<MsgStoreAndMigrateContractResponse>;
    /**
     * UpdateContractLabel sets a new label for a smart contract
     *
     * Since: 0.43
     */
    updateContractLabel(request: MsgUpdateContractLabel): Promise<MsgUpdateContractLabelResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: TxRpc);
    storeCode(request: MsgStoreCode): Promise<MsgStoreCodeResponse>;
    instantiateContract(request: MsgInstantiateContract): Promise<MsgInstantiateContractResponse>;
    instantiateContract2(request: MsgInstantiateContract2): Promise<MsgInstantiateContract2Response>;
    executeContract(request: MsgExecuteContract): Promise<MsgExecuteContractResponse>;
    migrateContract(request: MsgMigrateContract): Promise<MsgMigrateContractResponse>;
    updateAdmin(request: MsgUpdateAdmin): Promise<MsgUpdateAdminResponse>;
    clearAdmin(request: MsgClearAdmin): Promise<MsgClearAdminResponse>;
    updateInstantiateConfig(request: MsgUpdateInstantiateConfig): Promise<MsgUpdateInstantiateConfigResponse>;
    updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
    sudoContract(request: MsgSudoContract): Promise<MsgSudoContractResponse>;
    pinCodes(request: MsgPinCodes): Promise<MsgPinCodesResponse>;
    unpinCodes(request: MsgUnpinCodes): Promise<MsgUnpinCodesResponse>;
    storeAndInstantiateContract(request: MsgStoreAndInstantiateContract): Promise<MsgStoreAndInstantiateContractResponse>;
    removeCodeUploadParamsAddresses(request: MsgRemoveCodeUploadParamsAddresses): Promise<MsgRemoveCodeUploadParamsAddressesResponse>;
    addCodeUploadParamsAddresses(request: MsgAddCodeUploadParamsAddresses): Promise<MsgAddCodeUploadParamsAddressesResponse>;
    storeAndMigrateContract(request: MsgStoreAndMigrateContract): Promise<MsgStoreAndMigrateContractResponse>;
    updateContractLabel(request: MsgUpdateContractLabel): Promise<MsgUpdateContractLabelResponse>;
}
