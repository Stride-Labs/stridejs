import { Rpc } from "../../../helpers";
import { QueryClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { ReactQueryParams } from "../../../react-query";
import { QueryBalanceRequest, QueryBalanceResponse, QueryAllBalancesRequest, QueryAllBalancesResponse, QueryTotalSupplyRequest, QueryTotalSupplyResponse, QuerySupplyOfRequest, QuerySupplyOfResponse, QueryParamsRequest, QueryParamsResponse, QueryDenomMetadataRequest, QueryDenomMetadataResponse, QueryDenomsMetadataRequest, QueryDenomsMetadataResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
    /** Balance queries the balance of a single coin for a single account. */
    balance(request: QueryBalanceRequest): Promise<QueryBalanceResponse>;
    /** AllBalances queries the balance of all coins for a single account. */
    allBalances(request: QueryAllBalancesRequest): Promise<QueryAllBalancesResponse>;
    /** TotalSupply queries the total supply of all coins. */
    totalSupply(request?: QueryTotalSupplyRequest): Promise<QueryTotalSupplyResponse>;
    /** SupplyOf queries the supply of a single coin. */
    supplyOf(request: QuerySupplyOfRequest): Promise<QuerySupplyOfResponse>;
    /** Params queries the parameters of x/bank module. */
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** DenomsMetadata queries the client metadata of a given coin denomination. */
    denomMetadata(request: QueryDenomMetadataRequest): Promise<QueryDenomMetadataResponse>;
    /** DenomsMetadata queries the client metadata for all registered coin denominations. */
    denomsMetadata(request?: QueryDenomsMetadataRequest): Promise<QueryDenomsMetadataResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    balance(request: QueryBalanceRequest): Promise<QueryBalanceResponse>;
    allBalances(request: QueryAllBalancesRequest): Promise<QueryAllBalancesResponse>;
    totalSupply(request?: QueryTotalSupplyRequest): Promise<QueryTotalSupplyResponse>;
    supplyOf(request: QuerySupplyOfRequest): Promise<QuerySupplyOfResponse>;
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    denomMetadata(request: QueryDenomMetadataRequest): Promise<QueryDenomMetadataResponse>;
    denomsMetadata(request?: QueryDenomsMetadataRequest): Promise<QueryDenomsMetadataResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    balance(request: QueryBalanceRequest): Promise<QueryBalanceResponse>;
    allBalances(request: QueryAllBalancesRequest): Promise<QueryAllBalancesResponse>;
    totalSupply(request?: QueryTotalSupplyRequest): Promise<QueryTotalSupplyResponse>;
    supplyOf(request: QuerySupplyOfRequest): Promise<QuerySupplyOfResponse>;
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    denomMetadata(request: QueryDenomMetadataRequest): Promise<QueryDenomMetadataResponse>;
    denomsMetadata(request?: QueryDenomsMetadataRequest): Promise<QueryDenomsMetadataResponse>;
};
export interface UseBalanceQuery<TData> extends ReactQueryParams<QueryBalanceResponse, TData> {
    request: QueryBalanceRequest;
}
export interface UseAllBalancesQuery<TData> extends ReactQueryParams<QueryAllBalancesResponse, TData> {
    request: QueryAllBalancesRequest;
}
export interface UseTotalSupplyQuery<TData> extends ReactQueryParams<QueryTotalSupplyResponse, TData> {
    request?: QueryTotalSupplyRequest;
}
export interface UseSupplyOfQuery<TData> extends ReactQueryParams<QuerySupplyOfResponse, TData> {
    request: QuerySupplyOfRequest;
}
export interface UseParamsQuery<TData> extends ReactQueryParams<QueryParamsResponse, TData> {
    request?: QueryParamsRequest;
}
export interface UseDenomMetadataQuery<TData> extends ReactQueryParams<QueryDenomMetadataResponse, TData> {
    request: QueryDenomMetadataRequest;
}
export interface UseDenomsMetadataQuery<TData> extends ReactQueryParams<QueryDenomsMetadataResponse, TData> {
    request?: QueryDenomsMetadataRequest;
}
export declare const createRpcQueryHooks: (rpc: ProtobufRpcClient | undefined) => {
    /** Balance queries the balance of a single coin for a single account. */
    useBalance: <TData = QueryBalanceResponse>({ request, options }: UseBalanceQuery<TData>) => any;
    /** AllBalances queries the balance of all coins for a single account. */
    useAllBalances: <TData_1 = QueryAllBalancesResponse>({ request, options }: UseAllBalancesQuery<TData_1>) => any;
    /** TotalSupply queries the total supply of all coins. */
    useTotalSupply: <TData_2 = QueryTotalSupplyResponse>({ request, options }: UseTotalSupplyQuery<TData_2>) => any;
    /** SupplyOf queries the supply of a single coin. */
    useSupplyOf: <TData_3 = QuerySupplyOfResponse>({ request, options }: UseSupplyOfQuery<TData_3>) => any;
    /** Params queries the parameters of x/bank module. */
    useParams: <TData_4 = QueryParamsResponse>({ request, options }: UseParamsQuery<TData_4>) => any;
    /** DenomsMetadata queries the client metadata of a given coin denomination. */
    useDenomMetadata: <TData_5 = QueryDenomMetadataResponse>({ request, options }: UseDenomMetadataQuery<TData_5>) => any;
    /** DenomsMetadata queries the client metadata for all registered coin denominations. */
    useDenomsMetadata: <TData_6 = QueryDenomsMetadataResponse>({ request, options }: UseDenomsMetadataQuery<TData_6>) => any;
};
