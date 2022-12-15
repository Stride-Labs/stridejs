import { Rpc } from "../../helpers";
import { QueryClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { ReactQueryParams } from "../../react-query";
import { QueryParamsRequest, QueryParamsResponse, QueryGetValidatorsRequest, QueryGetValidatorsResponse, QueryGetICAAccountRequest, QueryGetICAAccountResponse, QueryGetHostZoneRequest, QueryGetHostZoneResponse, QueryAllHostZoneRequest, QueryAllHostZoneResponse, QueryModuleAddressRequest, QueryModuleAddressResponse, QueryInterchainAccountFromAddressRequest, QueryInterchainAccountFromAddressResponse, QueryGetEpochTrackerRequest, QueryGetEpochTrackerResponse, QueryAllEpochTrackerRequest, QueryAllEpochTrackerResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
    /** Parameters queries the parameters of the module. */
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** Queries a Validator by host zone. */
    validators(request: QueryGetValidatorsRequest): Promise<QueryGetValidatorsResponse>;
    /** Queries a ICAAccount by index. */
    iCAAccount(request?: QueryGetICAAccountRequest): Promise<QueryGetICAAccountResponse>;
    /** Queries a HostZone by id. */
    hostZone(request: QueryGetHostZoneRequest): Promise<QueryGetHostZoneResponse>;
    /** Queries a list of HostZone items. */
    hostZoneAll(request?: QueryAllHostZoneRequest): Promise<QueryAllHostZoneResponse>;
    /** Queries a list of ModuleAddress items. */
    moduleAddress(request: QueryModuleAddressRequest): Promise<QueryModuleAddressResponse>;
    /**
     * QueryInterchainAccountFromAddress returns the interchain account for given
     * owner address on a given connection pair
     */
    interchainAccountFromAddress(request: QueryInterchainAccountFromAddressRequest): Promise<QueryInterchainAccountFromAddressResponse>;
    /** Queries a EpochTracker by index. */
    epochTracker(request: QueryGetEpochTrackerRequest): Promise<QueryGetEpochTrackerResponse>;
    /** Queries a list of EpochTracker items. */
    epochTrackerAll(request?: QueryAllEpochTrackerRequest): Promise<QueryAllEpochTrackerResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    validators(request: QueryGetValidatorsRequest): Promise<QueryGetValidatorsResponse>;
    iCAAccount(request?: QueryGetICAAccountRequest): Promise<QueryGetICAAccountResponse>;
    hostZone(request: QueryGetHostZoneRequest): Promise<QueryGetHostZoneResponse>;
    hostZoneAll(request?: QueryAllHostZoneRequest): Promise<QueryAllHostZoneResponse>;
    moduleAddress(request: QueryModuleAddressRequest): Promise<QueryModuleAddressResponse>;
    interchainAccountFromAddress(request: QueryInterchainAccountFromAddressRequest): Promise<QueryInterchainAccountFromAddressResponse>;
    epochTracker(request: QueryGetEpochTrackerRequest): Promise<QueryGetEpochTrackerResponse>;
    epochTrackerAll(request?: QueryAllEpochTrackerRequest): Promise<QueryAllEpochTrackerResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    validators(request: QueryGetValidatorsRequest): Promise<QueryGetValidatorsResponse>;
    iCAAccount(request?: QueryGetICAAccountRequest): Promise<QueryGetICAAccountResponse>;
    hostZone(request: QueryGetHostZoneRequest): Promise<QueryGetHostZoneResponse>;
    hostZoneAll(request?: QueryAllHostZoneRequest): Promise<QueryAllHostZoneResponse>;
    moduleAddress(request: QueryModuleAddressRequest): Promise<QueryModuleAddressResponse>;
    interchainAccountFromAddress(request: QueryInterchainAccountFromAddressRequest): Promise<QueryInterchainAccountFromAddressResponse>;
    epochTracker(request: QueryGetEpochTrackerRequest): Promise<QueryGetEpochTrackerResponse>;
    epochTrackerAll(request?: QueryAllEpochTrackerRequest): Promise<QueryAllEpochTrackerResponse>;
};
export interface UseParamsQuery<TData> extends ReactQueryParams<QueryParamsResponse, TData> {
    request?: QueryParamsRequest;
}
export interface UseValidatorsQuery<TData> extends ReactQueryParams<QueryGetValidatorsResponse, TData> {
    request: QueryGetValidatorsRequest;
}
export interface UseICAAccountQuery<TData> extends ReactQueryParams<QueryGetICAAccountResponse, TData> {
    request?: QueryGetICAAccountRequest;
}
export interface UseHostZoneQuery<TData> extends ReactQueryParams<QueryGetHostZoneResponse, TData> {
    request: QueryGetHostZoneRequest;
}
export interface UseHostZoneAllQuery<TData> extends ReactQueryParams<QueryAllHostZoneResponse, TData> {
    request?: QueryAllHostZoneRequest;
}
export interface UseModuleAddressQuery<TData> extends ReactQueryParams<QueryModuleAddressResponse, TData> {
    request: QueryModuleAddressRequest;
}
export interface UseInterchainAccountFromAddressQuery<TData> extends ReactQueryParams<QueryInterchainAccountFromAddressResponse, TData> {
    request: QueryInterchainAccountFromAddressRequest;
}
export interface UseEpochTrackerQuery<TData> extends ReactQueryParams<QueryGetEpochTrackerResponse, TData> {
    request: QueryGetEpochTrackerRequest;
}
export interface UseEpochTrackerAllQuery<TData> extends ReactQueryParams<QueryAllEpochTrackerResponse, TData> {
    request?: QueryAllEpochTrackerRequest;
}
export declare const createRpcQueryHooks: (rpc: ProtobufRpcClient | undefined) => {
    /** Parameters queries the parameters of the module. */
    useParams: <TData = QueryParamsResponse>({ request, options }: UseParamsQuery<TData>) => any;
    /** Queries a Validator by host zone. */
    useValidators: <TData_1 = QueryGetValidatorsResponse>({ request, options }: UseValidatorsQuery<TData_1>) => any;
    /** Queries a ICAAccount by index. */
    useICAAccount: <TData_2 = QueryGetICAAccountResponse>({ request, options }: UseICAAccountQuery<TData_2>) => any;
    /** Queries a HostZone by id. */
    useHostZone: <TData_3 = QueryGetHostZoneResponse>({ request, options }: UseHostZoneQuery<TData_3>) => any;
    /** Queries a list of HostZone items. */
    useHostZoneAll: <TData_4 = QueryAllHostZoneResponse>({ request, options }: UseHostZoneAllQuery<TData_4>) => any;
    /** Queries a list of ModuleAddress items. */
    useModuleAddress: <TData_5 = QueryModuleAddressResponse>({ request, options }: UseModuleAddressQuery<TData_5>) => any;
    /**
     * QueryInterchainAccountFromAddress returns the interchain account for given
     * owner address on a given connection pair
     */
    useInterchainAccountFromAddress: <TData_6 = QueryInterchainAccountFromAddressResponse>({ request, options }: UseInterchainAccountFromAddressQuery<TData_6>) => any;
    /** Queries a EpochTracker by index. */
    useEpochTracker: <TData_7 = QueryGetEpochTrackerResponse>({ request, options }: UseEpochTrackerQuery<TData_7>) => any;
    /** Queries a list of EpochTracker items. */
    useEpochTrackerAll: <TData_8 = QueryAllEpochTrackerResponse>({ request, options }: UseEpochTrackerAllQuery<TData_8>) => any;
};
