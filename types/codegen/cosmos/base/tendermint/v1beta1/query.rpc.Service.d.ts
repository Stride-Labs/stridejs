import { Rpc } from "../../../../helpers";
import { QueryClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { ReactQueryParams } from "../../../../react-query";
import { GetNodeInfoRequest, GetNodeInfoResponse, GetSyncingRequest, GetSyncingResponse, GetLatestBlockRequest, GetLatestBlockResponse, GetBlockByHeightRequest, GetBlockByHeightResponse, GetLatestValidatorSetRequest, GetLatestValidatorSetResponse, GetValidatorSetByHeightRequest, GetValidatorSetByHeightResponse } from "./query";
/** Service defines the gRPC querier service for tendermint queries. */
export interface Service {
    /** GetNodeInfo queries the current node info. */
    getNodeInfo(request?: GetNodeInfoRequest): Promise<GetNodeInfoResponse>;
    /** GetSyncing queries node syncing. */
    getSyncing(request?: GetSyncingRequest): Promise<GetSyncingResponse>;
    /** GetLatestBlock returns the latest block. */
    getLatestBlock(request?: GetLatestBlockRequest): Promise<GetLatestBlockResponse>;
    /** GetBlockByHeight queries block for given height. */
    getBlockByHeight(request: GetBlockByHeightRequest): Promise<GetBlockByHeightResponse>;
    /** GetLatestValidatorSet queries latest validator-set. */
    getLatestValidatorSet(request?: GetLatestValidatorSetRequest): Promise<GetLatestValidatorSetResponse>;
    /** GetValidatorSetByHeight queries validator-set at a given height. */
    getValidatorSetByHeight(request: GetValidatorSetByHeightRequest): Promise<GetValidatorSetByHeightResponse>;
}
export declare class ServiceClientImpl implements Service {
    private readonly rpc;
    constructor(rpc: Rpc);
    getNodeInfo(request?: GetNodeInfoRequest): Promise<GetNodeInfoResponse>;
    getSyncing(request?: GetSyncingRequest): Promise<GetSyncingResponse>;
    getLatestBlock(request?: GetLatestBlockRequest): Promise<GetLatestBlockResponse>;
    getBlockByHeight(request: GetBlockByHeightRequest): Promise<GetBlockByHeightResponse>;
    getLatestValidatorSet(request?: GetLatestValidatorSetRequest): Promise<GetLatestValidatorSetResponse>;
    getValidatorSetByHeight(request: GetValidatorSetByHeightRequest): Promise<GetValidatorSetByHeightResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    getNodeInfo(request?: GetNodeInfoRequest): Promise<GetNodeInfoResponse>;
    getSyncing(request?: GetSyncingRequest): Promise<GetSyncingResponse>;
    getLatestBlock(request?: GetLatestBlockRequest): Promise<GetLatestBlockResponse>;
    getBlockByHeight(request: GetBlockByHeightRequest): Promise<GetBlockByHeightResponse>;
    getLatestValidatorSet(request?: GetLatestValidatorSetRequest): Promise<GetLatestValidatorSetResponse>;
    getValidatorSetByHeight(request: GetValidatorSetByHeightRequest): Promise<GetValidatorSetByHeightResponse>;
};
export interface UseGetNodeInfoQuery<TData> extends ReactQueryParams<GetNodeInfoResponse, TData> {
    request?: GetNodeInfoRequest;
}
export interface UseGetSyncingQuery<TData> extends ReactQueryParams<GetSyncingResponse, TData> {
    request?: GetSyncingRequest;
}
export interface UseGetLatestBlockQuery<TData> extends ReactQueryParams<GetLatestBlockResponse, TData> {
    request?: GetLatestBlockRequest;
}
export interface UseGetBlockByHeightQuery<TData> extends ReactQueryParams<GetBlockByHeightResponse, TData> {
    request: GetBlockByHeightRequest;
}
export interface UseGetLatestValidatorSetQuery<TData> extends ReactQueryParams<GetLatestValidatorSetResponse, TData> {
    request?: GetLatestValidatorSetRequest;
}
export interface UseGetValidatorSetByHeightQuery<TData> extends ReactQueryParams<GetValidatorSetByHeightResponse, TData> {
    request: GetValidatorSetByHeightRequest;
}
export declare const createRpcQueryHooks: (rpc: ProtobufRpcClient | undefined) => {
    /** GetNodeInfo queries the current node info. */
    useGetNodeInfo: <TData = GetNodeInfoResponse>({ request, options }: UseGetNodeInfoQuery<TData>) => any;
    /** GetSyncing queries node syncing. */
    useGetSyncing: <TData_1 = GetSyncingResponse>({ request, options }: UseGetSyncingQuery<TData_1>) => any;
    /** GetLatestBlock returns the latest block. */
    useGetLatestBlock: <TData_2 = GetLatestBlockResponse>({ request, options }: UseGetLatestBlockQuery<TData_2>) => any;
    /** GetBlockByHeight queries block for given height. */
    useGetBlockByHeight: <TData_3 = GetBlockByHeightResponse>({ request, options }: UseGetBlockByHeightQuery<TData_3>) => any;
    /** GetLatestValidatorSet queries latest validator-set. */
    useGetLatestValidatorSet: <TData_4 = GetLatestValidatorSetResponse>({ request, options }: UseGetLatestValidatorSetQuery<TData_4>) => any;
    /** GetValidatorSetByHeight queries validator-set at a given height. */
    useGetValidatorSetByHeight: <TData_5 = GetValidatorSetByHeightResponse>({ request, options }: UseGetValidatorSetByHeightQuery<TData_5>) => any;
};
