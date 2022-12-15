import { Rpc } from "../../helpers";
import { QueryClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { ReactQueryParams } from "../../react-query";
import { QueryDistributorAccountBalanceRequest, QueryDistributorAccountBalanceResponse, QueryParamsRequest, QueryParamsResponse, QueryClaimRecordRequest, QueryClaimRecordResponse, QueryClaimableForActionRequest, QueryClaimableForActionResponse, QueryTotalClaimableRequest, QueryTotalClaimableResponse, QueryUserVestingsRequest, QueryUserVestingsResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
    distributorAccountBalance(request: QueryDistributorAccountBalanceRequest): Promise<QueryDistributorAccountBalanceResponse>;
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    claimRecord(request: QueryClaimRecordRequest): Promise<QueryClaimRecordResponse>;
    claimableForAction(request: QueryClaimableForActionRequest): Promise<QueryClaimableForActionResponse>;
    totalClaimable(request: QueryTotalClaimableRequest): Promise<QueryTotalClaimableResponse>;
    userVestings(request: QueryUserVestingsRequest): Promise<QueryUserVestingsResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    distributorAccountBalance(request: QueryDistributorAccountBalanceRequest): Promise<QueryDistributorAccountBalanceResponse>;
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    claimRecord(request: QueryClaimRecordRequest): Promise<QueryClaimRecordResponse>;
    claimableForAction(request: QueryClaimableForActionRequest): Promise<QueryClaimableForActionResponse>;
    totalClaimable(request: QueryTotalClaimableRequest): Promise<QueryTotalClaimableResponse>;
    userVestings(request: QueryUserVestingsRequest): Promise<QueryUserVestingsResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    distributorAccountBalance(request: QueryDistributorAccountBalanceRequest): Promise<QueryDistributorAccountBalanceResponse>;
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    claimRecord(request: QueryClaimRecordRequest): Promise<QueryClaimRecordResponse>;
    claimableForAction(request: QueryClaimableForActionRequest): Promise<QueryClaimableForActionResponse>;
    totalClaimable(request: QueryTotalClaimableRequest): Promise<QueryTotalClaimableResponse>;
    userVestings(request: QueryUserVestingsRequest): Promise<QueryUserVestingsResponse>;
};
export interface UseDistributorAccountBalanceQuery<TData> extends ReactQueryParams<QueryDistributorAccountBalanceResponse, TData> {
    request: QueryDistributorAccountBalanceRequest;
}
export interface UseParamsQuery<TData> extends ReactQueryParams<QueryParamsResponse, TData> {
    request?: QueryParamsRequest;
}
export interface UseClaimRecordQuery<TData> extends ReactQueryParams<QueryClaimRecordResponse, TData> {
    request: QueryClaimRecordRequest;
}
export interface UseClaimableForActionQuery<TData> extends ReactQueryParams<QueryClaimableForActionResponse, TData> {
    request: QueryClaimableForActionRequest;
}
export interface UseTotalClaimableQuery<TData> extends ReactQueryParams<QueryTotalClaimableResponse, TData> {
    request: QueryTotalClaimableRequest;
}
export interface UseUserVestingsQuery<TData> extends ReactQueryParams<QueryUserVestingsResponse, TData> {
    request: QueryUserVestingsRequest;
}
export declare const createRpcQueryHooks: (rpc: ProtobufRpcClient | undefined) => {
    useDistributorAccountBalance: <TData = QueryDistributorAccountBalanceResponse>({ request, options }: UseDistributorAccountBalanceQuery<TData>) => any;
    useParams: <TData_1 = QueryParamsResponse>({ request, options }: UseParamsQuery<TData_1>) => any;
    useClaimRecord: <TData_2 = QueryClaimRecordResponse>({ request, options }: UseClaimRecordQuery<TData_2>) => any;
    useClaimableForAction: <TData_3 = QueryClaimableForActionResponse>({ request, options }: UseClaimableForActionQuery<TData_3>) => any;
    useTotalClaimable: <TData_4 = QueryTotalClaimableResponse>({ request, options }: UseTotalClaimableQuery<TData_4>) => any;
    useUserVestings: <TData_5 = QueryUserVestingsResponse>({ request, options }: UseUserVestingsQuery<TData_5>) => any;
};
