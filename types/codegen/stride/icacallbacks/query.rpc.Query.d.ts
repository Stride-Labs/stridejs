import { Rpc } from "../../helpers";
import { QueryClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { ReactQueryParams } from "../../react-query";
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
export interface UseParamsQuery<TData> extends ReactQueryParams<QueryParamsResponse, TData> {
    request?: QueryParamsRequest;
}
export interface UseCallbackDataQuery<TData> extends ReactQueryParams<QueryGetCallbackDataResponse, TData> {
    request: QueryGetCallbackDataRequest;
}
export interface UseCallbackDataAllQuery<TData> extends ReactQueryParams<QueryAllCallbackDataResponse, TData> {
    request?: QueryAllCallbackDataRequest;
}
export declare const createRpcQueryHooks: (rpc: ProtobufRpcClient | undefined) => {
    /** Parameters queries the parameters of the module. */
    useParams: <TData = QueryParamsResponse>({ request, options }: UseParamsQuery<TData>) => any;
    /** Queries a CallbackData by index. */
    useCallbackData: <TData_1 = QueryGetCallbackDataResponse>({ request, options }: UseCallbackDataQuery<TData_1>) => any;
    /** Queries a list of CallbackData items. */
    useCallbackDataAll: <TData_2 = QueryAllCallbackDataResponse>({ request, options }: UseCallbackDataAllQuery<TData_2>) => any;
};
