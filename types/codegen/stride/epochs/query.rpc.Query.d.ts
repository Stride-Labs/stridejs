import { Rpc } from "../../helpers";
import { QueryClient } from "@cosmjs/stargate";
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
