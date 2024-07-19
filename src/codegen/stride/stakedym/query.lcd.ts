import { setPaginationParams } from "../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { QueryHostZoneRequest, QueryHostZoneResponseSDKType, QueryDelegationRecordsRequest, QueryDelegationRecordsResponseSDKType, QueryUnbondingRecordsRequest, QueryUnbondingRecordsResponseSDKType, QueryRedemptionRecordRequest, QueryRedemptionRecordResponseSDKType, QueryRedemptionRecordsRequest, QueryRedemptionRecordsResponseSDKType, QuerySlashRecordsRequest, QuerySlashRecordsResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.hostZone = this.hostZone.bind(this);
    this.delegationRecords = this.delegationRecords.bind(this);
    this.unbondingRecords = this.unbondingRecords.bind(this);
    this.redemptionRecord = this.redemptionRecord.bind(this);
    this.redemptionRecords = this.redemptionRecords.bind(this);
    this.slashRecords = this.slashRecords.bind(this);
  }
  /* Queries the host zone struct */
  async hostZone(_params: QueryHostZoneRequest = {}): Promise<QueryHostZoneResponseSDKType> {
    const endpoint = `Stride-Labs/stride/stakedym/host_zone`;
    return await this.req.get<QueryHostZoneResponseSDKType>(endpoint);
  }
  /* Queries the delegation records with an optional to include archived records
   Ex:
   - /delegation_records
   - /delegation_records?include_archived=true */
  async delegationRecords(params: QueryDelegationRecordsRequest): Promise<QueryDelegationRecordsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.includeArchived !== "undefined") {
      options.params.include_archived = params.includeArchived;
    }
    const endpoint = `Stride-Labs/stride/stakedym/delegation_records`;
    return await this.req.get<QueryDelegationRecordsResponseSDKType>(endpoint, options);
  }
  /* Queries the unbonding records with an optional to include archived records
   Ex:
   - /unbonding_records
   - /unbonding_records?include_archived=true */
  async unbondingRecords(params: QueryUnbondingRecordsRequest): Promise<QueryUnbondingRecordsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.includeArchived !== "undefined") {
      options.params.include_archived = params.includeArchived;
    }
    const endpoint = `Stride-Labs/stride/stakedym/unbonding_records`;
    return await this.req.get<QueryUnbondingRecordsResponseSDKType>(endpoint, options);
  }
  /* Queries a single user redemption record */
  async redemptionRecord(params: QueryRedemptionRecordRequest): Promise<QueryRedemptionRecordResponseSDKType> {
    const endpoint = `Stride-Labs/stride/stakedym/redemption_record/${params.unbondingRecordId}/${params.address}`;
    return await this.req.get<QueryRedemptionRecordResponseSDKType>(endpoint);
  }
  /* Queries all redemption records with optional filters
   Ex:
   - /redemption_records
   - /redemption_records?address=strideXXX
   - /redemption_records?unbonding_record_id=100 */
  async redemptionRecords(params: QueryRedemptionRecordsRequest): Promise<QueryRedemptionRecordsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.address !== "undefined") {
      options.params.address = params.address;
    }
    if (typeof params?.unbondingRecordId !== "undefined") {
      options.params.unbonding_record_id = params.unbondingRecordId;
    }
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `Stride-Labs/stride/stakedym/redemption_records`;
    return await this.req.get<QueryRedemptionRecordsResponseSDKType>(endpoint, options);
  }
  /* Queries slash records */
  async slashRecords(_params: QuerySlashRecordsRequest = {}): Promise<QuerySlashRecordsResponseSDKType> {
    const endpoint = `Stride-Labs/stride/stakedym/slash_records`;
    return await this.req.get<QuerySlashRecordsResponseSDKType>(endpoint);
  }
}