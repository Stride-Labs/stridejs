import { Rpc } from "../../../helpers";
import { QueryClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { ReactQueryParams } from "../../../react-query";
import { QueryParamsRequest, QueryParamsResponse, QueryInflationRequest, QueryInflationResponse, QueryAnnualProvisionsRequest, QueryAnnualProvisionsResponse } from "./query";
/** Query provides defines the gRPC querier service. */
export interface Query {
    /** Params returns the total set of minting parameters. */
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** Inflation returns the current minting inflation value. */
    inflation(request?: QueryInflationRequest): Promise<QueryInflationResponse>;
    /** AnnualProvisions current minting annual provisions value. */
    annualProvisions(request?: QueryAnnualProvisionsRequest): Promise<QueryAnnualProvisionsResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    inflation(request?: QueryInflationRequest): Promise<QueryInflationResponse>;
    annualProvisions(request?: QueryAnnualProvisionsRequest): Promise<QueryAnnualProvisionsResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    inflation(request?: QueryInflationRequest): Promise<QueryInflationResponse>;
    annualProvisions(request?: QueryAnnualProvisionsRequest): Promise<QueryAnnualProvisionsResponse>;
};
export interface UseParamsQuery<TData> extends ReactQueryParams<QueryParamsResponse, TData> {
    request?: QueryParamsRequest;
}
export interface UseInflationQuery<TData> extends ReactQueryParams<QueryInflationResponse, TData> {
    request?: QueryInflationRequest;
}
export interface UseAnnualProvisionsQuery<TData> extends ReactQueryParams<QueryAnnualProvisionsResponse, TData> {
    request?: QueryAnnualProvisionsRequest;
}
export declare const createRpcQueryHooks: (rpc: ProtobufRpcClient | undefined) => {
    /** Params returns the total set of minting parameters. */
    useParams: <TData = QueryParamsResponse>({ request, options }: UseParamsQuery<TData>) => any;
    /** Inflation returns the current minting inflation value. */
    useInflation: <TData_1 = QueryInflationResponse>({ request, options }: UseInflationQuery<TData_1>) => any;
    /** AnnualProvisions current minting annual provisions value. */
    useAnnualProvisions: <TData_2 = QueryAnnualProvisionsResponse>({ request, options }: UseAnnualProvisionsQuery<TData_2>) => any;
};
