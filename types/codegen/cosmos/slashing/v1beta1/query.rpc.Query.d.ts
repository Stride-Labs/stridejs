import { Rpc } from "../../../helpers";
import { QueryClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { ReactQueryParams } from "../../../react-query";
import { QueryParamsRequest, QueryParamsResponse, QuerySigningInfoRequest, QuerySigningInfoResponse, QuerySigningInfosRequest, QuerySigningInfosResponse } from "./query";
/** Query provides defines the gRPC querier service */
export interface Query {
    /** Params queries the parameters of slashing module */
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** SigningInfo queries the signing info of given cons address */
    signingInfo(request: QuerySigningInfoRequest): Promise<QuerySigningInfoResponse>;
    /** SigningInfos queries signing info of all validators */
    signingInfos(request?: QuerySigningInfosRequest): Promise<QuerySigningInfosResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    signingInfo(request: QuerySigningInfoRequest): Promise<QuerySigningInfoResponse>;
    signingInfos(request?: QuerySigningInfosRequest): Promise<QuerySigningInfosResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    signingInfo(request: QuerySigningInfoRequest): Promise<QuerySigningInfoResponse>;
    signingInfos(request?: QuerySigningInfosRequest): Promise<QuerySigningInfosResponse>;
};
export interface UseParamsQuery<TData> extends ReactQueryParams<QueryParamsResponse, TData> {
    request?: QueryParamsRequest;
}
export interface UseSigningInfoQuery<TData> extends ReactQueryParams<QuerySigningInfoResponse, TData> {
    request: QuerySigningInfoRequest;
}
export interface UseSigningInfosQuery<TData> extends ReactQueryParams<QuerySigningInfosResponse, TData> {
    request?: QuerySigningInfosRequest;
}
export declare const createRpcQueryHooks: (rpc: ProtobufRpcClient | undefined) => {
    /** Params queries the parameters of slashing module */
    useParams: <TData = QueryParamsResponse>({ request, options }: UseParamsQuery<TData>) => any;
    /** SigningInfo queries the signing info of given cons address */
    useSigningInfo: <TData_1 = QuerySigningInfoResponse>({ request, options }: UseSigningInfoQuery<TData_1>) => any;
    /** SigningInfos queries signing info of all validators */
    useSigningInfos: <TData_2 = QuerySigningInfosResponse>({ request, options }: UseSigningInfosQuery<TData_2>) => any;
};
