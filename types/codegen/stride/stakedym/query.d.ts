import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { HostZone, HostZoneSDKType, DelegationRecord, DelegationRecordSDKType, UnbondingRecord, UnbondingRecordSDKType, SlashRecord, SlashRecordSDKType, RedemptionRecord, RedemptionRecordSDKType } from "./stakedym";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
/** Host Zone */
export interface QueryHostZoneRequest {
}
/** Host Zone */
export interface QueryHostZoneRequestSDKType {
}
export interface QueryHostZoneResponse {
    hostZone: HostZone;
}
export interface QueryHostZoneResponseSDKType {
    host_zone: HostZoneSDKType;
}
/** All Delegation Records */
export interface QueryDelegationRecordsRequest {
    /** All Delegation Records */
    includeArchived?: boolean;
}
/** All Delegation Records */
export interface QueryDelegationRecordsRequestSDKType {
    /** All Delegation Records */
    include_archived?: boolean;
}
export interface QueryDelegationRecordsResponse {
    delegationRecords: DelegationRecord[];
}
export interface QueryDelegationRecordsResponseSDKType {
    delegation_records: DelegationRecordSDKType[];
}
/** All Unbonding Records */
export interface QueryUnbondingRecordsRequest {
    /** All Unbonding Records */
    includeArchived?: boolean;
}
/** All Unbonding Records */
export interface QueryUnbondingRecordsRequestSDKType {
    /** All Unbonding Records */
    include_archived?: boolean;
}
export interface QueryUnbondingRecordsResponse {
    unbondingRecords: UnbondingRecord[];
}
export interface QueryUnbondingRecordsResponseSDKType {
    unbonding_records: UnbondingRecordSDKType[];
}
/** Single Redemption Record */
export interface QueryRedemptionRecordRequest {
    unbondingRecordId: Long;
    address: string;
}
/** Single Redemption Record */
export interface QueryRedemptionRecordRequestSDKType {
    unbonding_record_id: Long;
    address: string;
}
export interface QueryRedemptionRecordResponse {
    redemptionRecordResponse: RedemptionRecordResponse;
}
export interface QueryRedemptionRecordResponseSDKType {
    redemption_record_response: RedemptionRecordResponseSDKType;
}
/** All Redemption Records */
export interface QueryRedemptionRecordsRequest {
    address?: string;
    unbondingRecordId?: Long;
    pagination?: PageRequest;
}
/** All Redemption Records */
export interface QueryRedemptionRecordsRequestSDKType {
    address?: string;
    unbonding_record_id?: Long;
    pagination?: PageRequestSDKType;
}
export interface QueryRedemptionRecordsResponse {
    redemptionRecordResponses: RedemptionRecordResponse[];
    pagination?: PageResponse;
}
export interface QueryRedemptionRecordsResponseSDKType {
    redemption_record_responses: RedemptionRecordResponseSDKType[];
    pagination?: PageResponseSDKType;
}
/** All Slash Records */
export interface QuerySlashRecordsRequest {
}
/** All Slash Records */
export interface QuerySlashRecordsRequestSDKType {
}
export interface QuerySlashRecordsResponse {
    slashRecords: SlashRecord[];
}
export interface QuerySlashRecordsResponseSDKType {
    slash_records: SlashRecordSDKType[];
}
/** Data structure for frontend to consume */
export interface RedemptionRecordResponse {
    /** Redemption record */
    redemptionRecord: RedemptionRecord;
    /**
     * The Unix timestamp (in seconds) at which the unbonding for the UR
     * associated with this RR completes
     */
    unbondingCompletionTimeSeconds: Long;
}
/** Data structure for frontend to consume */
export interface RedemptionRecordResponseSDKType {
    /** Redemption record */
    redemption_record: RedemptionRecordSDKType;
    /**
     * The Unix timestamp (in seconds) at which the unbonding for the UR
     * associated with this RR completes
     */
    unbonding_completion_time_seconds: Long;
}
export declare const QueryHostZoneRequest: {
    encode(_: QueryHostZoneRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryHostZoneRequest;
    fromPartial(_: DeepPartial<QueryHostZoneRequest>): QueryHostZoneRequest;
};
export declare const QueryHostZoneResponse: {
    encode(message: QueryHostZoneResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryHostZoneResponse;
    fromPartial(object: DeepPartial<QueryHostZoneResponse>): QueryHostZoneResponse;
};
export declare const QueryDelegationRecordsRequest: {
    encode(message: QueryDelegationRecordsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegationRecordsRequest;
    fromPartial(object: DeepPartial<QueryDelegationRecordsRequest>): QueryDelegationRecordsRequest;
};
export declare const QueryDelegationRecordsResponse: {
    encode(message: QueryDelegationRecordsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegationRecordsResponse;
    fromPartial(object: DeepPartial<QueryDelegationRecordsResponse>): QueryDelegationRecordsResponse;
};
export declare const QueryUnbondingRecordsRequest: {
    encode(message: QueryUnbondingRecordsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryUnbondingRecordsRequest;
    fromPartial(object: DeepPartial<QueryUnbondingRecordsRequest>): QueryUnbondingRecordsRequest;
};
export declare const QueryUnbondingRecordsResponse: {
    encode(message: QueryUnbondingRecordsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryUnbondingRecordsResponse;
    fromPartial(object: DeepPartial<QueryUnbondingRecordsResponse>): QueryUnbondingRecordsResponse;
};
export declare const QueryRedemptionRecordRequest: {
    encode(message: QueryRedemptionRecordRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryRedemptionRecordRequest;
    fromPartial(object: DeepPartial<QueryRedemptionRecordRequest>): QueryRedemptionRecordRequest;
};
export declare const QueryRedemptionRecordResponse: {
    encode(message: QueryRedemptionRecordResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryRedemptionRecordResponse;
    fromPartial(object: DeepPartial<QueryRedemptionRecordResponse>): QueryRedemptionRecordResponse;
};
export declare const QueryRedemptionRecordsRequest: {
    encode(message: QueryRedemptionRecordsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryRedemptionRecordsRequest;
    fromPartial(object: DeepPartial<QueryRedemptionRecordsRequest>): QueryRedemptionRecordsRequest;
};
export declare const QueryRedemptionRecordsResponse: {
    encode(message: QueryRedemptionRecordsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryRedemptionRecordsResponse;
    fromPartial(object: DeepPartial<QueryRedemptionRecordsResponse>): QueryRedemptionRecordsResponse;
};
export declare const QuerySlashRecordsRequest: {
    encode(_: QuerySlashRecordsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySlashRecordsRequest;
    fromPartial(_: DeepPartial<QuerySlashRecordsRequest>): QuerySlashRecordsRequest;
};
export declare const QuerySlashRecordsResponse: {
    encode(message: QuerySlashRecordsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySlashRecordsResponse;
    fromPartial(object: DeepPartial<QuerySlashRecordsResponse>): QuerySlashRecordsResponse;
};
export declare const RedemptionRecordResponse: {
    encode(message: RedemptionRecordResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RedemptionRecordResponse;
    fromPartial(object: DeepPartial<RedemptionRecordResponse>): RedemptionRecordResponse;
};
