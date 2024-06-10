import { LCDClient } from "@osmonauts/lcd";
import { QueryHostZoneRequest, QueryHostZoneResponseSDKType, QueryDelegationRecordsRequest, QueryDelegationRecordsResponseSDKType, QueryUnbondingRecordsRequest, QueryUnbondingRecordsResponseSDKType, QueryRedemptionRecordRequest, QueryRedemptionRecordResponseSDKType, QueryRedemptionRecordsRequest, QueryRedemptionRecordsResponseSDKType, QuerySlashRecordsRequest, QuerySlashRecordsResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    hostZone(_params?: QueryHostZoneRequest): Promise<QueryHostZoneResponseSDKType>;
    delegationRecords(params: QueryDelegationRecordsRequest): Promise<QueryDelegationRecordsResponseSDKType>;
    unbondingRecords(params: QueryUnbondingRecordsRequest): Promise<QueryUnbondingRecordsResponseSDKType>;
    redemptionRecord(params: QueryRedemptionRecordRequest): Promise<QueryRedemptionRecordResponseSDKType>;
    redemptionRecords(params: QueryRedemptionRecordsRequest): Promise<QueryRedemptionRecordsResponseSDKType>;
    slashRecords(_params?: QuerySlashRecordsRequest): Promise<QuerySlashRecordsResponseSDKType>;
}
