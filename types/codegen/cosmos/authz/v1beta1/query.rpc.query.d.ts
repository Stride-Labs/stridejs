import { Rpc } from "../../../helpers";
import { QueryClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { ReactQueryParams } from "../../../react-query";
import { QueryGrantsRequest, QueryGrantsResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
    /** Returns list of `Authorization`, granted to the grantee by the granter. */
    grants(request: QueryGrantsRequest): Promise<QueryGrantsResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    grants(request: QueryGrantsRequest): Promise<QueryGrantsResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    grants(request: QueryGrantsRequest): Promise<QueryGrantsResponse>;
};
export interface UseGrantsQuery<TData> extends ReactQueryParams<QueryGrantsResponse, TData> {
    request: QueryGrantsRequest;
}
export declare const createRpcQueryHooks: (rpc: ProtobufRpcClient | undefined) => {
    /** Returns list of `Authorization`, granted to the grantee by the granter. */
    useGrants: <TData = QueryGrantsResponse>({ request, options }: UseGrantsQuery<TData>) => any;
};
