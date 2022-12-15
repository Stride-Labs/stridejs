import { Rpc } from "../../../helpers";
import { QueryClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { ReactQueryParams } from "../../../react-query";
import { QueryAllowanceRequest, QueryAllowanceResponse, QueryAllowancesRequest, QueryAllowancesResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
    /** Allowance returns fee granted to the grantee by the granter. */
    allowance(request: QueryAllowanceRequest): Promise<QueryAllowanceResponse>;
    /** Allowances returns all the grants for address. */
    allowances(request: QueryAllowancesRequest): Promise<QueryAllowancesResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    allowance(request: QueryAllowanceRequest): Promise<QueryAllowanceResponse>;
    allowances(request: QueryAllowancesRequest): Promise<QueryAllowancesResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    allowance(request: QueryAllowanceRequest): Promise<QueryAllowanceResponse>;
    allowances(request: QueryAllowancesRequest): Promise<QueryAllowancesResponse>;
};
export interface UseAllowanceQuery<TData> extends ReactQueryParams<QueryAllowanceResponse, TData> {
    request: QueryAllowanceRequest;
}
export interface UseAllowancesQuery<TData> extends ReactQueryParams<QueryAllowancesResponse, TData> {
    request: QueryAllowancesRequest;
}
export declare const createRpcQueryHooks: (rpc: ProtobufRpcClient | undefined) => {
    /** Allowance returns fee granted to the grantee by the granter. */
    useAllowance: <TData = QueryAllowanceResponse>({ request, options }: UseAllowanceQuery<TData>) => any;
    /** Allowances returns all the grants for address. */
    useAllowances: <TData_1 = QueryAllowancesResponse>({ request, options }: UseAllowancesQuery<TData_1>) => any;
};
