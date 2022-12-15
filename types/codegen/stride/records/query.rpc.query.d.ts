import { Rpc } from "../../helpers";
import { QueryClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { ReactQueryParams } from "../../react-query";
import { QueryParamsRequest, QueryParamsResponse, QueryGetUserRedemptionRecordRequest, QueryGetUserRedemptionRecordResponse, QueryAllUserRedemptionRecordRequest, QueryAllUserRedemptionRecordResponse, QueryAllUserRedemptionRecordForUserRequest, QueryAllUserRedemptionRecordForUserResponse, QueryGetEpochUnbondingRecordRequest, QueryGetEpochUnbondingRecordResponse, QueryAllEpochUnbondingRecordRequest, QueryAllEpochUnbondingRecordResponse, QueryGetDepositRecordRequest, QueryGetDepositRecordResponse, QueryAllDepositRecordRequest, QueryAllDepositRecordResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
    /** Parameters queries the parameters of the module. */
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** Queries a UserRedemptionRecord by id. */
    userRedemptionRecord(request: QueryGetUserRedemptionRecordRequest): Promise<QueryGetUserRedemptionRecordResponse>;
    /** Queries a list of UserRedemptionRecord items. */
    userRedemptionRecordAll(request?: QueryAllUserRedemptionRecordRequest): Promise<QueryAllUserRedemptionRecordResponse>;
    /** Queries a list of UserRedemptionRecord items by chainId / userId pair. */
    userRedemptionRecordForUser(request: QueryAllUserRedemptionRecordForUserRequest): Promise<QueryAllUserRedemptionRecordForUserResponse>;
    /** Queries a EpochUnbondingRecord by id. */
    epochUnbondingRecord(request: QueryGetEpochUnbondingRecordRequest): Promise<QueryGetEpochUnbondingRecordResponse>;
    /** Queries a list of EpochUnbondingRecord items. */
    epochUnbondingRecordAll(request?: QueryAllEpochUnbondingRecordRequest): Promise<QueryAllEpochUnbondingRecordResponse>;
    /** Queries a DepositRecord by id. */
    depositRecord(request: QueryGetDepositRecordRequest): Promise<QueryGetDepositRecordResponse>;
    /** Queries a list of DepositRecord items. */
    depositRecordAll(request?: QueryAllDepositRecordRequest): Promise<QueryAllDepositRecordResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    userRedemptionRecord(request: QueryGetUserRedemptionRecordRequest): Promise<QueryGetUserRedemptionRecordResponse>;
    userRedemptionRecordAll(request?: QueryAllUserRedemptionRecordRequest): Promise<QueryAllUserRedemptionRecordResponse>;
    userRedemptionRecordForUser(request: QueryAllUserRedemptionRecordForUserRequest): Promise<QueryAllUserRedemptionRecordForUserResponse>;
    epochUnbondingRecord(request: QueryGetEpochUnbondingRecordRequest): Promise<QueryGetEpochUnbondingRecordResponse>;
    epochUnbondingRecordAll(request?: QueryAllEpochUnbondingRecordRequest): Promise<QueryAllEpochUnbondingRecordResponse>;
    depositRecord(request: QueryGetDepositRecordRequest): Promise<QueryGetDepositRecordResponse>;
    depositRecordAll(request?: QueryAllDepositRecordRequest): Promise<QueryAllDepositRecordResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    userRedemptionRecord(request: QueryGetUserRedemptionRecordRequest): Promise<QueryGetUserRedemptionRecordResponse>;
    userRedemptionRecordAll(request?: QueryAllUserRedemptionRecordRequest): Promise<QueryAllUserRedemptionRecordResponse>;
    userRedemptionRecordForUser(request: QueryAllUserRedemptionRecordForUserRequest): Promise<QueryAllUserRedemptionRecordForUserResponse>;
    epochUnbondingRecord(request: QueryGetEpochUnbondingRecordRequest): Promise<QueryGetEpochUnbondingRecordResponse>;
    epochUnbondingRecordAll(request?: QueryAllEpochUnbondingRecordRequest): Promise<QueryAllEpochUnbondingRecordResponse>;
    depositRecord(request: QueryGetDepositRecordRequest): Promise<QueryGetDepositRecordResponse>;
    depositRecordAll(request?: QueryAllDepositRecordRequest): Promise<QueryAllDepositRecordResponse>;
};
export interface UseParamsQuery<TData> extends ReactQueryParams<QueryParamsResponse, TData> {
    request?: QueryParamsRequest;
}
export interface UseUserRedemptionRecordQuery<TData> extends ReactQueryParams<QueryGetUserRedemptionRecordResponse, TData> {
    request: QueryGetUserRedemptionRecordRequest;
}
export interface UseUserRedemptionRecordAllQuery<TData> extends ReactQueryParams<QueryAllUserRedemptionRecordResponse, TData> {
    request?: QueryAllUserRedemptionRecordRequest;
}
export interface UseUserRedemptionRecordForUserQuery<TData> extends ReactQueryParams<QueryAllUserRedemptionRecordForUserResponse, TData> {
    request: QueryAllUserRedemptionRecordForUserRequest;
}
export interface UseEpochUnbondingRecordQuery<TData> extends ReactQueryParams<QueryGetEpochUnbondingRecordResponse, TData> {
    request: QueryGetEpochUnbondingRecordRequest;
}
export interface UseEpochUnbondingRecordAllQuery<TData> extends ReactQueryParams<QueryAllEpochUnbondingRecordResponse, TData> {
    request?: QueryAllEpochUnbondingRecordRequest;
}
export interface UseDepositRecordQuery<TData> extends ReactQueryParams<QueryGetDepositRecordResponse, TData> {
    request: QueryGetDepositRecordRequest;
}
export interface UseDepositRecordAllQuery<TData> extends ReactQueryParams<QueryAllDepositRecordResponse, TData> {
    request?: QueryAllDepositRecordRequest;
}
export declare const createRpcQueryHooks: (rpc: ProtobufRpcClient | undefined) => {
    /** Parameters queries the parameters of the module. */
    useParams: <TData = QueryParamsResponse>({ request, options }: UseParamsQuery<TData>) => any;
    /** Queries a UserRedemptionRecord by id. */
    useUserRedemptionRecord: <TData_1 = QueryGetUserRedemptionRecordResponse>({ request, options }: UseUserRedemptionRecordQuery<TData_1>) => any;
    /** Queries a list of UserRedemptionRecord items. */
    useUserRedemptionRecordAll: <TData_2 = QueryAllUserRedemptionRecordResponse>({ request, options }: UseUserRedemptionRecordAllQuery<TData_2>) => any;
    /** Queries a list of UserRedemptionRecord items by chainId / userId pair. */
    useUserRedemptionRecordForUser: <TData_3 = QueryAllUserRedemptionRecordForUserResponse>({ request, options }: UseUserRedemptionRecordForUserQuery<TData_3>) => any;
    /** Queries a EpochUnbondingRecord by id. */
    useEpochUnbondingRecord: <TData_4 = QueryGetEpochUnbondingRecordResponse>({ request, options }: UseEpochUnbondingRecordQuery<TData_4>) => any;
    /** Queries a list of EpochUnbondingRecord items. */
    useEpochUnbondingRecordAll: <TData_5 = QueryAllEpochUnbondingRecordResponse>({ request, options }: UseEpochUnbondingRecordAllQuery<TData_5>) => any;
    /** Queries a DepositRecord by id. */
    useDepositRecord: <TData_6 = QueryGetDepositRecordResponse>({ request, options }: UseDepositRecordQuery<TData_6>) => any;
    /** Queries a list of DepositRecord items. */
    useDepositRecordAll: <TData_7 = QueryAllDepositRecordResponse>({ request, options }: UseDepositRecordAllQuery<TData_7>) => any;
};
