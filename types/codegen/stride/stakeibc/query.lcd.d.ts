import { LCDClient } from "@osmonauts/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryGetValidatorsRequest, QueryGetValidatorsResponseSDKType, QueryGetHostZoneRequest, QueryGetHostZoneResponseSDKType, QueryAllHostZoneRequest, QueryAllHostZoneResponseSDKType, QueryModuleAddressRequest, QueryModuleAddressResponseSDKType, QueryGetEpochTrackerRequest, QueryGetEpochTrackerResponseSDKType, QueryAllEpochTrackerRequest, QueryAllEpochTrackerResponseSDKType, QueryGetNextPacketSequenceRequest, QueryGetNextPacketSequenceResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    params(_params?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
    validators(params: QueryGetValidatorsRequest): Promise<QueryGetValidatorsResponseSDKType>;
    hostZone(params: QueryGetHostZoneRequest): Promise<QueryGetHostZoneResponseSDKType>;
    hostZoneAll(params?: QueryAllHostZoneRequest): Promise<QueryAllHostZoneResponseSDKType>;
    moduleAddress(params: QueryModuleAddressRequest): Promise<QueryModuleAddressResponseSDKType>;
    epochTracker(params: QueryGetEpochTrackerRequest): Promise<QueryGetEpochTrackerResponseSDKType>;
    epochTrackerAll(_params?: QueryAllEpochTrackerRequest): Promise<QueryAllEpochTrackerResponseSDKType>;
    nextPacketSequence(params: QueryGetNextPacketSequenceRequest): Promise<QueryGetNextPacketSequenceResponseSDKType>;
}
