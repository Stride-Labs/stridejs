import { Rpc } from "@osmonauts/helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryGetCallbackDataRequest, QueryGetCallbackDataResponse, QueryAllCallbackDataRequest, QueryAllCallbackDataResponse } from "./query";
/** Query defines the RPC service */
export interface Query {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    callbackData(request: QueryGetCallbackDataRequest): Promise<QueryGetCallbackDataResponse>;
    callbackDataAll(request?: QueryAllCallbackDataRequest): Promise<QueryAllCallbackDataResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    callbackData(request: QueryGetCallbackDataRequest): Promise<QueryGetCallbackDataResponse>;
    callbackDataAll(request?: QueryAllCallbackDataRequest): Promise<QueryAllCallbackDataResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    callbackData(request: QueryGetCallbackDataRequest): Promise<QueryGetCallbackDataResponse>;
    callbackDataAll(request?: QueryAllCallbackDataRequest): Promise<QueryAllCallbackDataResponse>;
};
