import { Rpc } from "@osmonauts/helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryHostZoneRequest, QueryHostZoneResponse, QueryDelegationRecordsRequest, QueryDelegationRecordsResponse, QueryUnbondingRecordsRequest, QueryUnbondingRecordsResponse, QueryRedemptionRecordRequest, QueryRedemptionRecordResponse, QueryRedemptionRecordsRequest, QueryRedemptionRecordsResponse, QuerySlashRecordsRequest, QuerySlashRecordsResponse } from "./query";
/** Query defines the RPC service */
export interface Query {
    hostZone(request?: QueryHostZoneRequest): Promise<QueryHostZoneResponse>;
    delegationRecords(request: QueryDelegationRecordsRequest): Promise<QueryDelegationRecordsResponse>;
    unbondingRecords(request: QueryUnbondingRecordsRequest): Promise<QueryUnbondingRecordsResponse>;
    redemptionRecord(request: QueryRedemptionRecordRequest): Promise<QueryRedemptionRecordResponse>;
    redemptionRecords(request: QueryRedemptionRecordsRequest): Promise<QueryRedemptionRecordsResponse>;
    slashRecords(request?: QuerySlashRecordsRequest): Promise<QuerySlashRecordsResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    hostZone(request?: QueryHostZoneRequest): Promise<QueryHostZoneResponse>;
    delegationRecords(request: QueryDelegationRecordsRequest): Promise<QueryDelegationRecordsResponse>;
    unbondingRecords(request: QueryUnbondingRecordsRequest): Promise<QueryUnbondingRecordsResponse>;
    redemptionRecord(request: QueryRedemptionRecordRequest): Promise<QueryRedemptionRecordResponse>;
    redemptionRecords(request: QueryRedemptionRecordsRequest): Promise<QueryRedemptionRecordsResponse>;
    slashRecords(request?: QuerySlashRecordsRequest): Promise<QuerySlashRecordsResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    hostZone(request?: QueryHostZoneRequest): Promise<QueryHostZoneResponse>;
    delegationRecords(request: QueryDelegationRecordsRequest): Promise<QueryDelegationRecordsResponse>;
    unbondingRecords(request: QueryUnbondingRecordsRequest): Promise<QueryUnbondingRecordsResponse>;
    redemptionRecord(request: QueryRedemptionRecordRequest): Promise<QueryRedemptionRecordResponse>;
    redemptionRecords(request: QueryRedemptionRecordsRequest): Promise<QueryRedemptionRecordsResponse>;
    slashRecords(request?: QuerySlashRecordsRequest): Promise<QuerySlashRecordsResponse>;
};
