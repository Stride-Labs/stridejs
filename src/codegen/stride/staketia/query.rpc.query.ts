import { Rpc } from "@osmonauts/helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryHostZoneRequest, QueryHostZoneResponse, QueryDelegationRecordsRequest, QueryDelegationRecordsResponse, QueryUnbondingRecordsRequest, QueryUnbondingRecordsResponse, QueryRedemptionRecordRequest, QueryRedemptionRecordResponse, QueryRedemptionRecordsRequest, QueryRedemptionRecordsResponse, QuerySlashRecordsRequest, QuerySlashRecordsResponse } from "./query";
/** Query defines the RPC service */

export interface Query {
  hostZone(request?: QueryHostZoneRequest): Promise<QueryHostZoneResponse>;
  /*Queries the host zone struct*/

  delegationRecords(request: QueryDelegationRecordsRequest): Promise<QueryDelegationRecordsResponse>;
  /*Queries the delegation records with an optional to include archived records
   Ex:
   - /delegation_records
   - /delegation_records?include_archived=true*/

  unbondingRecords(request: QueryUnbondingRecordsRequest): Promise<QueryUnbondingRecordsResponse>;
  /*Queries the unbonding records with an optional to include archived records
   Ex:
   - /unbonding_records
   - /unbonding_records?include_archived=true*/

  redemptionRecord(request: QueryRedemptionRecordRequest): Promise<QueryRedemptionRecordResponse>;
  /*Queries a single user redemption record*/

  redemptionRecords(request: QueryRedemptionRecordsRequest): Promise<QueryRedemptionRecordsResponse>;
  /*Queries all redemption records with optional filters
   Ex:
   - /redemption_records
   - /redemption_records?address=strideXXX
   - /redemption_records?unbonding_record_id=100*/

  slashRecords(request?: QuerySlashRecordsRequest): Promise<QuerySlashRecordsResponse>;
  /*Queries slash records*/

}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.hostZone = this.hostZone.bind(this);
    this.delegationRecords = this.delegationRecords.bind(this);
    this.unbondingRecords = this.unbondingRecords.bind(this);
    this.redemptionRecord = this.redemptionRecord.bind(this);
    this.redemptionRecords = this.redemptionRecords.bind(this);
    this.slashRecords = this.slashRecords.bind(this);
  }

  hostZone(request: QueryHostZoneRequest = {}): Promise<QueryHostZoneResponse> {
    const data = QueryHostZoneRequest.encode(request).finish();
    const promise = this.rpc.request("stride.staketia.Query", "HostZone", data);
    return promise.then(data => QueryHostZoneResponse.decode(new _m0.Reader(data)));
  }

  delegationRecords(request: QueryDelegationRecordsRequest): Promise<QueryDelegationRecordsResponse> {
    const data = QueryDelegationRecordsRequest.encode(request).finish();
    const promise = this.rpc.request("stride.staketia.Query", "DelegationRecords", data);
    return promise.then(data => QueryDelegationRecordsResponse.decode(new _m0.Reader(data)));
  }

  unbondingRecords(request: QueryUnbondingRecordsRequest): Promise<QueryUnbondingRecordsResponse> {
    const data = QueryUnbondingRecordsRequest.encode(request).finish();
    const promise = this.rpc.request("stride.staketia.Query", "UnbondingRecords", data);
    return promise.then(data => QueryUnbondingRecordsResponse.decode(new _m0.Reader(data)));
  }

  redemptionRecord(request: QueryRedemptionRecordRequest): Promise<QueryRedemptionRecordResponse> {
    const data = QueryRedemptionRecordRequest.encode(request).finish();
    const promise = this.rpc.request("stride.staketia.Query", "RedemptionRecord", data);
    return promise.then(data => QueryRedemptionRecordResponse.decode(new _m0.Reader(data)));
  }

  redemptionRecords(request: QueryRedemptionRecordsRequest): Promise<QueryRedemptionRecordsResponse> {
    const data = QueryRedemptionRecordsRequest.encode(request).finish();
    const promise = this.rpc.request("stride.staketia.Query", "RedemptionRecords", data);
    return promise.then(data => QueryRedemptionRecordsResponse.decode(new _m0.Reader(data)));
  }

  slashRecords(request: QuerySlashRecordsRequest = {}): Promise<QuerySlashRecordsResponse> {
    const data = QuerySlashRecordsRequest.encode(request).finish();
    const promise = this.rpc.request("stride.staketia.Query", "SlashRecords", data);
    return promise.then(data => QuerySlashRecordsResponse.decode(new _m0.Reader(data)));
  }

}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    hostZone(request?: QueryHostZoneRequest): Promise<QueryHostZoneResponse> {
      return queryService.hostZone(request);
    },

    delegationRecords(request: QueryDelegationRecordsRequest): Promise<QueryDelegationRecordsResponse> {
      return queryService.delegationRecords(request);
    },

    unbondingRecords(request: QueryUnbondingRecordsRequest): Promise<QueryUnbondingRecordsResponse> {
      return queryService.unbondingRecords(request);
    },

    redemptionRecord(request: QueryRedemptionRecordRequest): Promise<QueryRedemptionRecordResponse> {
      return queryService.redemptionRecord(request);
    },

    redemptionRecords(request: QueryRedemptionRecordsRequest): Promise<QueryRedemptionRecordsResponse> {
      return queryService.redemptionRecords(request);
    },

    slashRecords(request?: QuerySlashRecordsRequest): Promise<QuerySlashRecordsResponse> {
      return queryService.slashRecords(request);
    }

  };
};