import { Rpc } from "../../helpers";
import { QueryClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { ReactQueryParams } from "../../react-query";
import { QueryEpochsInfoRequest, QueryEpochsInfoResponse, QueryCurrentEpochRequest, QueryCurrentEpochResponse, QueryEpochInfoRequest, QueryEpochInfoResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
    /** EpochInfos provide running epochInfos */
    epochInfos(request?: QueryEpochsInfoRequest): Promise<QueryEpochsInfoResponse>;
    /** CurrentEpoch provide current epoch of specified identifier */
    currentEpoch(request: QueryCurrentEpochRequest): Promise<QueryCurrentEpochResponse>;
    /** CurrentEpoch provide current epoch of specified identifier */
    epochInfo(request: QueryEpochInfoRequest): Promise<QueryEpochInfoResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    epochInfos(request?: QueryEpochsInfoRequest): Promise<QueryEpochsInfoResponse>;
    currentEpoch(request: QueryCurrentEpochRequest): Promise<QueryCurrentEpochResponse>;
    epochInfo(request: QueryEpochInfoRequest): Promise<QueryEpochInfoResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    epochInfos(request?: QueryEpochsInfoRequest): Promise<QueryEpochsInfoResponse>;
    currentEpoch(request: QueryCurrentEpochRequest): Promise<QueryCurrentEpochResponse>;
    epochInfo(request: QueryEpochInfoRequest): Promise<QueryEpochInfoResponse>;
};
export interface UseEpochInfosQuery<TData> extends ReactQueryParams<QueryEpochsInfoResponse, TData> {
    request?: QueryEpochsInfoRequest;
}
export interface UseCurrentEpochQuery<TData> extends ReactQueryParams<QueryCurrentEpochResponse, TData> {
    request: QueryCurrentEpochRequest;
}
export interface UseEpochInfoQuery<TData> extends ReactQueryParams<QueryEpochInfoResponse, TData> {
    request: QueryEpochInfoRequest;
}
export declare const createRpcQueryHooks: (rpc: ProtobufRpcClient | undefined) => {
    /** EpochInfos provide running epochInfos */
    useEpochInfos: <TData = QueryEpochsInfoResponse>({ request, options }: UseEpochInfosQuery<TData>) => any;
    /** CurrentEpoch provide current epoch of specified identifier */
    useCurrentEpoch: <TData_1 = QueryCurrentEpochResponse>({ request, options }: UseCurrentEpochQuery<TData_1>) => any;
    /** CurrentEpoch provide current epoch of specified identifier */
    useEpochInfo: <TData_2 = QueryEpochInfoResponse>({ request, options }: UseEpochInfoQuery<TData_2>) => any;
};
