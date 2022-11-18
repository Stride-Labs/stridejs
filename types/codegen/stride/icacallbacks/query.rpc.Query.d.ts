import { Rpc } from "../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryGetCallbackDataRequest, QueryGetCallbackDataResponse, QueryAllCallbackDataRequest, QueryAllCallbackDataResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
    /** Parameters queries the parameters of the module. */
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** Queries a CallbackData by index. */
    callbackData(request: QueryGetCallbackDataRequest): Promise<QueryGetCallbackDataResponse>;
    /** Queries a list of CallbackData items. */
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
