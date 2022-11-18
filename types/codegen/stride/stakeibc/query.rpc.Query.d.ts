import { Rpc } from "../../helpers";
import { QueryClient } from "@cosmjs/stargate";
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
