import { TxRpc } from "../../../types";
import { QueryClient } from "@cosmjs/stargate";
import { QueryContractInfoRequest, QueryContractInfoResponse, QueryContractHistoryRequest, QueryContractHistoryResponse, QueryContractsByCodeRequest, QueryContractsByCodeResponse, QueryAllContractStateRequest, QueryAllContractStateResponse, QueryRawContractStateRequest, QueryRawContractStateResponse, QuerySmartContractStateRequest, QuerySmartContractStateResponse, QueryCodeRequest, QueryCodeResponse, QueryCodesRequest, QueryCodesResponse, QueryCodeInfoRequest, QueryCodeInfoResponse, QueryPinnedCodesRequest, QueryPinnedCodesResponse, QueryParamsRequest, QueryParamsResponse, QueryContractsByCreatorRequest, QueryContractsByCreatorResponse, QueryWasmLimitsConfigRequest, QueryWasmLimitsConfigResponse, QueryBuildAddressRequest, QueryBuildAddressResponse } from "./query";
/** Query provides defines the gRPC querier service */
export interface Query {
    /** ContractInfo gets the contract meta data */
    contractInfo(request: QueryContractInfoRequest): Promise<QueryContractInfoResponse>;
    /** ContractHistory gets the contract code history */
    contractHistory(request: QueryContractHistoryRequest): Promise<QueryContractHistoryResponse>;
    /** ContractsByCode lists all smart contracts for a code id */
    contractsByCode(request: QueryContractsByCodeRequest): Promise<QueryContractsByCodeResponse>;
    /** AllContractState gets all raw store data for a single contract */
    allContractState(request: QueryAllContractStateRequest): Promise<QueryAllContractStateResponse>;
    /** RawContractState gets single key from the raw store data of a contract */
    rawContractState(request: QueryRawContractStateRequest): Promise<QueryRawContractStateResponse>;
    /** SmartContractState get smart query result from the contract */
    smartContractState(request: QuerySmartContractStateRequest): Promise<QuerySmartContractStateResponse>;
    /** Code gets the binary code and metadata for a single wasm code */
    code(request: QueryCodeRequest): Promise<QueryCodeResponse>;
    /** Codes gets the metadata for all stored wasm codes */
    codes(request?: QueryCodesRequest): Promise<QueryCodesResponse>;
    /** CodeInfo gets the metadata for a single wasm code */
    codeInfo(request: QueryCodeInfoRequest): Promise<QueryCodeInfoResponse>;
    /** PinnedCodes gets the pinned code ids */
    pinnedCodes(request?: QueryPinnedCodesRequest): Promise<QueryPinnedCodesResponse>;
    /** Params gets the module params */
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** ContractsByCreator gets the contracts by creator */
    contractsByCreator(request: QueryContractsByCreatorRequest): Promise<QueryContractsByCreatorResponse>;
    /**
     * WasmLimitsConfig gets the configured limits for static validation of Wasm
     * files, encoded in JSON.
     */
    wasmLimitsConfig(request?: QueryWasmLimitsConfigRequest): Promise<QueryWasmLimitsConfigResponse>;
    /** BuildAddress builds a contract address */
    buildAddress(request: QueryBuildAddressRequest): Promise<QueryBuildAddressResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: TxRpc);
    contractInfo(request: QueryContractInfoRequest): Promise<QueryContractInfoResponse>;
    contractHistory(request: QueryContractHistoryRequest): Promise<QueryContractHistoryResponse>;
    contractsByCode(request: QueryContractsByCodeRequest): Promise<QueryContractsByCodeResponse>;
    allContractState(request: QueryAllContractStateRequest): Promise<QueryAllContractStateResponse>;
    rawContractState(request: QueryRawContractStateRequest): Promise<QueryRawContractStateResponse>;
    smartContractState(request: QuerySmartContractStateRequest): Promise<QuerySmartContractStateResponse>;
    code(request: QueryCodeRequest): Promise<QueryCodeResponse>;
    codes(request?: QueryCodesRequest): Promise<QueryCodesResponse>;
    codeInfo(request: QueryCodeInfoRequest): Promise<QueryCodeInfoResponse>;
    pinnedCodes(request?: QueryPinnedCodesRequest): Promise<QueryPinnedCodesResponse>;
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    contractsByCreator(request: QueryContractsByCreatorRequest): Promise<QueryContractsByCreatorResponse>;
    wasmLimitsConfig(request?: QueryWasmLimitsConfigRequest): Promise<QueryWasmLimitsConfigResponse>;
    buildAddress(request: QueryBuildAddressRequest): Promise<QueryBuildAddressResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    contractInfo(request: QueryContractInfoRequest): Promise<QueryContractInfoResponse>;
    contractHistory(request: QueryContractHistoryRequest): Promise<QueryContractHistoryResponse>;
    contractsByCode(request: QueryContractsByCodeRequest): Promise<QueryContractsByCodeResponse>;
    allContractState(request: QueryAllContractStateRequest): Promise<QueryAllContractStateResponse>;
    rawContractState(request: QueryRawContractStateRequest): Promise<QueryRawContractStateResponse>;
    smartContractState(request: QuerySmartContractStateRequest): Promise<QuerySmartContractStateResponse>;
    code(request: QueryCodeRequest): Promise<QueryCodeResponse>;
    codes(request?: QueryCodesRequest): Promise<QueryCodesResponse>;
    codeInfo(request: QueryCodeInfoRequest): Promise<QueryCodeInfoResponse>;
    pinnedCodes(request?: QueryPinnedCodesRequest): Promise<QueryPinnedCodesResponse>;
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    contractsByCreator(request: QueryContractsByCreatorRequest): Promise<QueryContractsByCreatorResponse>;
    wasmLimitsConfig(request?: QueryWasmLimitsConfigRequest): Promise<QueryWasmLimitsConfigResponse>;
    buildAddress(request: QueryBuildAddressRequest): Promise<QueryBuildAddressResponse>;
};
