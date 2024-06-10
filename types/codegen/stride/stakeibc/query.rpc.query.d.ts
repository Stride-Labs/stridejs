import { Rpc } from "@osmonauts/helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryGetValidatorsRequest, QueryGetValidatorsResponse, QueryGetHostZoneRequest, QueryGetHostZoneResponse, QueryAllHostZoneRequest, QueryAllHostZoneResponse, QueryModuleAddressRequest, QueryModuleAddressResponse, QueryInterchainAccountFromAddressRequest, QueryInterchainAccountFromAddressResponse, QueryGetEpochTrackerRequest, QueryGetEpochTrackerResponse, QueryAllEpochTrackerRequest, QueryAllEpochTrackerResponse, QueryGetNextPacketSequenceRequest, QueryGetNextPacketSequenceResponse, QueryAddressUnbondings, QueryAddressUnbondingsResponse, QueryAllTradeRoutes, QueryAllTradeRoutesResponse } from "./query";
/** Query defines the RPC service */
export interface Query {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    validators(request: QueryGetValidatorsRequest): Promise<QueryGetValidatorsResponse>;
    hostZone(request: QueryGetHostZoneRequest): Promise<QueryGetHostZoneResponse>;
    hostZoneAll(request?: QueryAllHostZoneRequest): Promise<QueryAllHostZoneResponse>;
    moduleAddress(request: QueryModuleAddressRequest): Promise<QueryModuleAddressResponse>;
    interchainAccountFromAddress(request: QueryInterchainAccountFromAddressRequest): Promise<QueryInterchainAccountFromAddressResponse>;
    epochTracker(request: QueryGetEpochTrackerRequest): Promise<QueryGetEpochTrackerResponse>;
    epochTrackerAll(request?: QueryAllEpochTrackerRequest): Promise<QueryAllEpochTrackerResponse>;
    nextPacketSequence(request: QueryGetNextPacketSequenceRequest): Promise<QueryGetNextPacketSequenceResponse>;
    addressUnbondings(request: QueryAddressUnbondings): Promise<QueryAddressUnbondingsResponse>;
    allTradeRoutes(request?: QueryAllTradeRoutes): Promise<QueryAllTradeRoutesResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    validators(request: QueryGetValidatorsRequest): Promise<QueryGetValidatorsResponse>;
    hostZone(request: QueryGetHostZoneRequest): Promise<QueryGetHostZoneResponse>;
    hostZoneAll(request?: QueryAllHostZoneRequest): Promise<QueryAllHostZoneResponse>;
    moduleAddress(request: QueryModuleAddressRequest): Promise<QueryModuleAddressResponse>;
    interchainAccountFromAddress(request: QueryInterchainAccountFromAddressRequest): Promise<QueryInterchainAccountFromAddressResponse>;
    epochTracker(request: QueryGetEpochTrackerRequest): Promise<QueryGetEpochTrackerResponse>;
    epochTrackerAll(request?: QueryAllEpochTrackerRequest): Promise<QueryAllEpochTrackerResponse>;
    nextPacketSequence(request: QueryGetNextPacketSequenceRequest): Promise<QueryGetNextPacketSequenceResponse>;
    addressUnbondings(request: QueryAddressUnbondings): Promise<QueryAddressUnbondingsResponse>;
    allTradeRoutes(request?: QueryAllTradeRoutes): Promise<QueryAllTradeRoutesResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    validators(request: QueryGetValidatorsRequest): Promise<QueryGetValidatorsResponse>;
    hostZone(request: QueryGetHostZoneRequest): Promise<QueryGetHostZoneResponse>;
    hostZoneAll(request?: QueryAllHostZoneRequest): Promise<QueryAllHostZoneResponse>;
    moduleAddress(request: QueryModuleAddressRequest): Promise<QueryModuleAddressResponse>;
    interchainAccountFromAddress(request: QueryInterchainAccountFromAddressRequest): Promise<QueryInterchainAccountFromAddressResponse>;
    epochTracker(request: QueryGetEpochTrackerRequest): Promise<QueryGetEpochTrackerResponse>;
    epochTrackerAll(request?: QueryAllEpochTrackerRequest): Promise<QueryAllEpochTrackerResponse>;
    nextPacketSequence(request: QueryGetNextPacketSequenceRequest): Promise<QueryGetNextPacketSequenceResponse>;
    addressUnbondings(request: QueryAddressUnbondings): Promise<QueryAddressUnbondingsResponse>;
    allTradeRoutes(request?: QueryAllTradeRoutes): Promise<QueryAllTradeRoutesResponse>;
};
