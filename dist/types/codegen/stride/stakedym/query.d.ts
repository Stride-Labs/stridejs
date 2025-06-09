import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { HostZone, HostZoneAmino, HostZoneSDKType, DelegationRecord, DelegationRecordAmino, DelegationRecordSDKType, UnbondingRecord, UnbondingRecordAmino, UnbondingRecordSDKType, SlashRecord, SlashRecordAmino, SlashRecordSDKType, RedemptionRecord, RedemptionRecordAmino, RedemptionRecordSDKType } from "./stakedym";
import { BinaryReader, BinaryWriter } from "../../binary";
/** Host Zone */
export interface QueryHostZoneRequest {
}
export interface QueryHostZoneRequestProtoMsg {
    typeUrl: "/stride.stakedym.QueryHostZoneRequest";
    value: Uint8Array;
}
/**
 * Host Zone
 * @name QueryHostZoneRequestAmino
 * @package stride.stakedym
 * @see proto type: stride.stakedym.QueryHostZoneRequest
 */
export interface QueryHostZoneRequestAmino {
}
export interface QueryHostZoneRequestAminoMsg {
    type: "/stride.stakedym.QueryHostZoneRequest";
    value: QueryHostZoneRequestAmino;
}
/** Host Zone */
export interface QueryHostZoneRequestSDKType {
}
export interface QueryHostZoneResponse {
    hostZone?: HostZone;
}
export interface QueryHostZoneResponseProtoMsg {
    typeUrl: "/stride.stakedym.QueryHostZoneResponse";
    value: Uint8Array;
}
/**
 * @name QueryHostZoneResponseAmino
 * @package stride.stakedym
 * @see proto type: stride.stakedym.QueryHostZoneResponse
 */
export interface QueryHostZoneResponseAmino {
    host_zone?: HostZoneAmino;
}
export interface QueryHostZoneResponseAminoMsg {
    type: "/stride.stakedym.QueryHostZoneResponse";
    value: QueryHostZoneResponseAmino;
}
export interface QueryHostZoneResponseSDKType {
    host_zone?: HostZoneSDKType;
}
/** All Delegation Records */
export interface QueryDelegationRecordsRequest {
    includeArchived: boolean;
}
export interface QueryDelegationRecordsRequestProtoMsg {
    typeUrl: "/stride.stakedym.QueryDelegationRecordsRequest";
    value: Uint8Array;
}
/**
 * All Delegation Records
 * @name QueryDelegationRecordsRequestAmino
 * @package stride.stakedym
 * @see proto type: stride.stakedym.QueryDelegationRecordsRequest
 */
export interface QueryDelegationRecordsRequestAmino {
    include_archived?: boolean;
}
export interface QueryDelegationRecordsRequestAminoMsg {
    type: "/stride.stakedym.QueryDelegationRecordsRequest";
    value: QueryDelegationRecordsRequestAmino;
}
/** All Delegation Records */
export interface QueryDelegationRecordsRequestSDKType {
    include_archived: boolean;
}
export interface QueryDelegationRecordsResponse {
    delegationRecords: DelegationRecord[];
}
export interface QueryDelegationRecordsResponseProtoMsg {
    typeUrl: "/stride.stakedym.QueryDelegationRecordsResponse";
    value: Uint8Array;
}
/**
 * @name QueryDelegationRecordsResponseAmino
 * @package stride.stakedym
 * @see proto type: stride.stakedym.QueryDelegationRecordsResponse
 */
export interface QueryDelegationRecordsResponseAmino {
    delegation_records?: DelegationRecordAmino[];
}
export interface QueryDelegationRecordsResponseAminoMsg {
    type: "/stride.stakedym.QueryDelegationRecordsResponse";
    value: QueryDelegationRecordsResponseAmino;
}
export interface QueryDelegationRecordsResponseSDKType {
    delegation_records: DelegationRecordSDKType[];
}
/** All Unbonding Records */
export interface QueryUnbondingRecordsRequest {
    includeArchived: boolean;
}
export interface QueryUnbondingRecordsRequestProtoMsg {
    typeUrl: "/stride.stakedym.QueryUnbondingRecordsRequest";
    value: Uint8Array;
}
/**
 * All Unbonding Records
 * @name QueryUnbondingRecordsRequestAmino
 * @package stride.stakedym
 * @see proto type: stride.stakedym.QueryUnbondingRecordsRequest
 */
export interface QueryUnbondingRecordsRequestAmino {
    include_archived?: boolean;
}
export interface QueryUnbondingRecordsRequestAminoMsg {
    type: "/stride.stakedym.QueryUnbondingRecordsRequest";
    value: QueryUnbondingRecordsRequestAmino;
}
/** All Unbonding Records */
export interface QueryUnbondingRecordsRequestSDKType {
    include_archived: boolean;
}
export interface QueryUnbondingRecordsResponse {
    unbondingRecords: UnbondingRecord[];
}
export interface QueryUnbondingRecordsResponseProtoMsg {
    typeUrl: "/stride.stakedym.QueryUnbondingRecordsResponse";
    value: Uint8Array;
}
/**
 * @name QueryUnbondingRecordsResponseAmino
 * @package stride.stakedym
 * @see proto type: stride.stakedym.QueryUnbondingRecordsResponse
 */
export interface QueryUnbondingRecordsResponseAmino {
    unbonding_records?: UnbondingRecordAmino[];
}
export interface QueryUnbondingRecordsResponseAminoMsg {
    type: "/stride.stakedym.QueryUnbondingRecordsResponse";
    value: QueryUnbondingRecordsResponseAmino;
}
export interface QueryUnbondingRecordsResponseSDKType {
    unbonding_records: UnbondingRecordSDKType[];
}
/** Single Redemption Record */
export interface QueryRedemptionRecordRequest {
    unbondingRecordId: bigint;
    address: string;
}
export interface QueryRedemptionRecordRequestProtoMsg {
    typeUrl: "/stride.stakedym.QueryRedemptionRecordRequest";
    value: Uint8Array;
}
/**
 * Single Redemption Record
 * @name QueryRedemptionRecordRequestAmino
 * @package stride.stakedym
 * @see proto type: stride.stakedym.QueryRedemptionRecordRequest
 */
export interface QueryRedemptionRecordRequestAmino {
    unbonding_record_id?: string;
    address?: string;
}
export interface QueryRedemptionRecordRequestAminoMsg {
    type: "/stride.stakedym.QueryRedemptionRecordRequest";
    value: QueryRedemptionRecordRequestAmino;
}
/** Single Redemption Record */
export interface QueryRedemptionRecordRequestSDKType {
    unbonding_record_id: bigint;
    address: string;
}
export interface QueryRedemptionRecordResponse {
    redemptionRecordResponse?: RedemptionRecordResponse;
}
export interface QueryRedemptionRecordResponseProtoMsg {
    typeUrl: "/stride.stakedym.QueryRedemptionRecordResponse";
    value: Uint8Array;
}
/**
 * @name QueryRedemptionRecordResponseAmino
 * @package stride.stakedym
 * @see proto type: stride.stakedym.QueryRedemptionRecordResponse
 */
export interface QueryRedemptionRecordResponseAmino {
    redemption_record_response?: RedemptionRecordResponseAmino;
}
export interface QueryRedemptionRecordResponseAminoMsg {
    type: "/stride.stakedym.QueryRedemptionRecordResponse";
    value: QueryRedemptionRecordResponseAmino;
}
export interface QueryRedemptionRecordResponseSDKType {
    redemption_record_response?: RedemptionRecordResponseSDKType;
}
/** All Redemption Records */
export interface QueryRedemptionRecordsRequest {
    address: string;
    unbondingRecordId: bigint;
    pagination?: PageRequest;
}
export interface QueryRedemptionRecordsRequestProtoMsg {
    typeUrl: "/stride.stakedym.QueryRedemptionRecordsRequest";
    value: Uint8Array;
}
/**
 * All Redemption Records
 * @name QueryRedemptionRecordsRequestAmino
 * @package stride.stakedym
 * @see proto type: stride.stakedym.QueryRedemptionRecordsRequest
 */
export interface QueryRedemptionRecordsRequestAmino {
    address?: string;
    unbonding_record_id?: string;
    pagination?: PageRequestAmino;
}
export interface QueryRedemptionRecordsRequestAminoMsg {
    type: "/stride.stakedym.QueryRedemptionRecordsRequest";
    value: QueryRedemptionRecordsRequestAmino;
}
/** All Redemption Records */
export interface QueryRedemptionRecordsRequestSDKType {
    address: string;
    unbonding_record_id: bigint;
    pagination?: PageRequestSDKType;
}
export interface QueryRedemptionRecordsResponse {
    redemptionRecordResponses: RedemptionRecordResponse[];
    pagination?: PageResponse;
}
export interface QueryRedemptionRecordsResponseProtoMsg {
    typeUrl: "/stride.stakedym.QueryRedemptionRecordsResponse";
    value: Uint8Array;
}
/**
 * @name QueryRedemptionRecordsResponseAmino
 * @package stride.stakedym
 * @see proto type: stride.stakedym.QueryRedemptionRecordsResponse
 */
export interface QueryRedemptionRecordsResponseAmino {
    redemption_record_responses?: RedemptionRecordResponseAmino[];
    pagination?: PageResponseAmino;
}
export interface QueryRedemptionRecordsResponseAminoMsg {
    type: "/stride.stakedym.QueryRedemptionRecordsResponse";
    value: QueryRedemptionRecordsResponseAmino;
}
export interface QueryRedemptionRecordsResponseSDKType {
    redemption_record_responses: RedemptionRecordResponseSDKType[];
    pagination?: PageResponseSDKType;
}
/** All Slash Records */
export interface QuerySlashRecordsRequest {
}
export interface QuerySlashRecordsRequestProtoMsg {
    typeUrl: "/stride.stakedym.QuerySlashRecordsRequest";
    value: Uint8Array;
}
/**
 * All Slash Records
 * @name QuerySlashRecordsRequestAmino
 * @package stride.stakedym
 * @see proto type: stride.stakedym.QuerySlashRecordsRequest
 */
export interface QuerySlashRecordsRequestAmino {
}
export interface QuerySlashRecordsRequestAminoMsg {
    type: "/stride.stakedym.QuerySlashRecordsRequest";
    value: QuerySlashRecordsRequestAmino;
}
/** All Slash Records */
export interface QuerySlashRecordsRequestSDKType {
}
export interface QuerySlashRecordsResponse {
    slashRecords: SlashRecord[];
}
export interface QuerySlashRecordsResponseProtoMsg {
    typeUrl: "/stride.stakedym.QuerySlashRecordsResponse";
    value: Uint8Array;
}
/**
 * @name QuerySlashRecordsResponseAmino
 * @package stride.stakedym
 * @see proto type: stride.stakedym.QuerySlashRecordsResponse
 */
export interface QuerySlashRecordsResponseAmino {
    slash_records?: SlashRecordAmino[];
}
export interface QuerySlashRecordsResponseAminoMsg {
    type: "/stride.stakedym.QuerySlashRecordsResponse";
    value: QuerySlashRecordsResponseAmino;
}
export interface QuerySlashRecordsResponseSDKType {
    slash_records: SlashRecordSDKType[];
}
/** Data structure for frontend to consume */
export interface RedemptionRecordResponse {
    /** Redemption record */
    redemptionRecord?: RedemptionRecord;
    /**
     * The Unix timestamp (in seconds) at which the unbonding for the UR
     * associated with this RR completes
     */
    unbondingCompletionTimeSeconds: bigint;
}
export interface RedemptionRecordResponseProtoMsg {
    typeUrl: "/stride.stakedym.RedemptionRecordResponse";
    value: Uint8Array;
}
/**
 * Data structure for frontend to consume
 * @name RedemptionRecordResponseAmino
 * @package stride.stakedym
 * @see proto type: stride.stakedym.RedemptionRecordResponse
 */
export interface RedemptionRecordResponseAmino {
    /**
     * Redemption record
     */
    redemption_record?: RedemptionRecordAmino;
    /**
     * The Unix timestamp (in seconds) at which the unbonding for the UR
     * associated with this RR completes
     */
    unbonding_completion_time_seconds?: string;
}
export interface RedemptionRecordResponseAminoMsg {
    type: "/stride.stakedym.RedemptionRecordResponse";
    value: RedemptionRecordResponseAmino;
}
/** Data structure for frontend to consume */
export interface RedemptionRecordResponseSDKType {
    redemption_record?: RedemptionRecordSDKType;
    unbonding_completion_time_seconds: bigint;
}
export declare const QueryHostZoneRequest: {
    typeUrl: string;
    encode(_: QueryHostZoneRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryHostZoneRequest;
    fromPartial(_: Partial<QueryHostZoneRequest>): QueryHostZoneRequest;
    fromAmino(_: QueryHostZoneRequestAmino): QueryHostZoneRequest;
    toAmino(_: QueryHostZoneRequest): QueryHostZoneRequestAmino;
    fromAminoMsg(object: QueryHostZoneRequestAminoMsg): QueryHostZoneRequest;
    fromProtoMsg(message: QueryHostZoneRequestProtoMsg): QueryHostZoneRequest;
    toProto(message: QueryHostZoneRequest): Uint8Array;
    toProtoMsg(message: QueryHostZoneRequest): QueryHostZoneRequestProtoMsg;
};
export declare const QueryHostZoneResponse: {
    typeUrl: string;
    encode(message: QueryHostZoneResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryHostZoneResponse;
    fromPartial(object: Partial<QueryHostZoneResponse>): QueryHostZoneResponse;
    fromAmino(object: QueryHostZoneResponseAmino): QueryHostZoneResponse;
    toAmino(message: QueryHostZoneResponse): QueryHostZoneResponseAmino;
    fromAminoMsg(object: QueryHostZoneResponseAminoMsg): QueryHostZoneResponse;
    fromProtoMsg(message: QueryHostZoneResponseProtoMsg): QueryHostZoneResponse;
    toProto(message: QueryHostZoneResponse): Uint8Array;
    toProtoMsg(message: QueryHostZoneResponse): QueryHostZoneResponseProtoMsg;
};
export declare const QueryDelegationRecordsRequest: {
    typeUrl: string;
    encode(message: QueryDelegationRecordsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegationRecordsRequest;
    fromPartial(object: Partial<QueryDelegationRecordsRequest>): QueryDelegationRecordsRequest;
    fromAmino(object: QueryDelegationRecordsRequestAmino): QueryDelegationRecordsRequest;
    toAmino(message: QueryDelegationRecordsRequest): QueryDelegationRecordsRequestAmino;
    fromAminoMsg(object: QueryDelegationRecordsRequestAminoMsg): QueryDelegationRecordsRequest;
    fromProtoMsg(message: QueryDelegationRecordsRequestProtoMsg): QueryDelegationRecordsRequest;
    toProto(message: QueryDelegationRecordsRequest): Uint8Array;
    toProtoMsg(message: QueryDelegationRecordsRequest): QueryDelegationRecordsRequestProtoMsg;
};
export declare const QueryDelegationRecordsResponse: {
    typeUrl: string;
    encode(message: QueryDelegationRecordsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegationRecordsResponse;
    fromPartial(object: Partial<QueryDelegationRecordsResponse>): QueryDelegationRecordsResponse;
    fromAmino(object: QueryDelegationRecordsResponseAmino): QueryDelegationRecordsResponse;
    toAmino(message: QueryDelegationRecordsResponse): QueryDelegationRecordsResponseAmino;
    fromAminoMsg(object: QueryDelegationRecordsResponseAminoMsg): QueryDelegationRecordsResponse;
    fromProtoMsg(message: QueryDelegationRecordsResponseProtoMsg): QueryDelegationRecordsResponse;
    toProto(message: QueryDelegationRecordsResponse): Uint8Array;
    toProtoMsg(message: QueryDelegationRecordsResponse): QueryDelegationRecordsResponseProtoMsg;
};
export declare const QueryUnbondingRecordsRequest: {
    typeUrl: string;
    encode(message: QueryUnbondingRecordsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryUnbondingRecordsRequest;
    fromPartial(object: Partial<QueryUnbondingRecordsRequest>): QueryUnbondingRecordsRequest;
    fromAmino(object: QueryUnbondingRecordsRequestAmino): QueryUnbondingRecordsRequest;
    toAmino(message: QueryUnbondingRecordsRequest): QueryUnbondingRecordsRequestAmino;
    fromAminoMsg(object: QueryUnbondingRecordsRequestAminoMsg): QueryUnbondingRecordsRequest;
    fromProtoMsg(message: QueryUnbondingRecordsRequestProtoMsg): QueryUnbondingRecordsRequest;
    toProto(message: QueryUnbondingRecordsRequest): Uint8Array;
    toProtoMsg(message: QueryUnbondingRecordsRequest): QueryUnbondingRecordsRequestProtoMsg;
};
export declare const QueryUnbondingRecordsResponse: {
    typeUrl: string;
    encode(message: QueryUnbondingRecordsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryUnbondingRecordsResponse;
    fromPartial(object: Partial<QueryUnbondingRecordsResponse>): QueryUnbondingRecordsResponse;
    fromAmino(object: QueryUnbondingRecordsResponseAmino): QueryUnbondingRecordsResponse;
    toAmino(message: QueryUnbondingRecordsResponse): QueryUnbondingRecordsResponseAmino;
    fromAminoMsg(object: QueryUnbondingRecordsResponseAminoMsg): QueryUnbondingRecordsResponse;
    fromProtoMsg(message: QueryUnbondingRecordsResponseProtoMsg): QueryUnbondingRecordsResponse;
    toProto(message: QueryUnbondingRecordsResponse): Uint8Array;
    toProtoMsg(message: QueryUnbondingRecordsResponse): QueryUnbondingRecordsResponseProtoMsg;
};
export declare const QueryRedemptionRecordRequest: {
    typeUrl: string;
    encode(message: QueryRedemptionRecordRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryRedemptionRecordRequest;
    fromPartial(object: Partial<QueryRedemptionRecordRequest>): QueryRedemptionRecordRequest;
    fromAmino(object: QueryRedemptionRecordRequestAmino): QueryRedemptionRecordRequest;
    toAmino(message: QueryRedemptionRecordRequest): QueryRedemptionRecordRequestAmino;
    fromAminoMsg(object: QueryRedemptionRecordRequestAminoMsg): QueryRedemptionRecordRequest;
    fromProtoMsg(message: QueryRedemptionRecordRequestProtoMsg): QueryRedemptionRecordRequest;
    toProto(message: QueryRedemptionRecordRequest): Uint8Array;
    toProtoMsg(message: QueryRedemptionRecordRequest): QueryRedemptionRecordRequestProtoMsg;
};
export declare const QueryRedemptionRecordResponse: {
    typeUrl: string;
    encode(message: QueryRedemptionRecordResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryRedemptionRecordResponse;
    fromPartial(object: Partial<QueryRedemptionRecordResponse>): QueryRedemptionRecordResponse;
    fromAmino(object: QueryRedemptionRecordResponseAmino): QueryRedemptionRecordResponse;
    toAmino(message: QueryRedemptionRecordResponse): QueryRedemptionRecordResponseAmino;
    fromAminoMsg(object: QueryRedemptionRecordResponseAminoMsg): QueryRedemptionRecordResponse;
    fromProtoMsg(message: QueryRedemptionRecordResponseProtoMsg): QueryRedemptionRecordResponse;
    toProto(message: QueryRedemptionRecordResponse): Uint8Array;
    toProtoMsg(message: QueryRedemptionRecordResponse): QueryRedemptionRecordResponseProtoMsg;
};
export declare const QueryRedemptionRecordsRequest: {
    typeUrl: string;
    encode(message: QueryRedemptionRecordsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryRedemptionRecordsRequest;
    fromPartial(object: Partial<QueryRedemptionRecordsRequest>): QueryRedemptionRecordsRequest;
    fromAmino(object: QueryRedemptionRecordsRequestAmino): QueryRedemptionRecordsRequest;
    toAmino(message: QueryRedemptionRecordsRequest): QueryRedemptionRecordsRequestAmino;
    fromAminoMsg(object: QueryRedemptionRecordsRequestAminoMsg): QueryRedemptionRecordsRequest;
    fromProtoMsg(message: QueryRedemptionRecordsRequestProtoMsg): QueryRedemptionRecordsRequest;
    toProto(message: QueryRedemptionRecordsRequest): Uint8Array;
    toProtoMsg(message: QueryRedemptionRecordsRequest): QueryRedemptionRecordsRequestProtoMsg;
};
export declare const QueryRedemptionRecordsResponse: {
    typeUrl: string;
    encode(message: QueryRedemptionRecordsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryRedemptionRecordsResponse;
    fromPartial(object: Partial<QueryRedemptionRecordsResponse>): QueryRedemptionRecordsResponse;
    fromAmino(object: QueryRedemptionRecordsResponseAmino): QueryRedemptionRecordsResponse;
    toAmino(message: QueryRedemptionRecordsResponse): QueryRedemptionRecordsResponseAmino;
    fromAminoMsg(object: QueryRedemptionRecordsResponseAminoMsg): QueryRedemptionRecordsResponse;
    fromProtoMsg(message: QueryRedemptionRecordsResponseProtoMsg): QueryRedemptionRecordsResponse;
    toProto(message: QueryRedemptionRecordsResponse): Uint8Array;
    toProtoMsg(message: QueryRedemptionRecordsResponse): QueryRedemptionRecordsResponseProtoMsg;
};
export declare const QuerySlashRecordsRequest: {
    typeUrl: string;
    encode(_: QuerySlashRecordsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QuerySlashRecordsRequest;
    fromPartial(_: Partial<QuerySlashRecordsRequest>): QuerySlashRecordsRequest;
    fromAmino(_: QuerySlashRecordsRequestAmino): QuerySlashRecordsRequest;
    toAmino(_: QuerySlashRecordsRequest): QuerySlashRecordsRequestAmino;
    fromAminoMsg(object: QuerySlashRecordsRequestAminoMsg): QuerySlashRecordsRequest;
    fromProtoMsg(message: QuerySlashRecordsRequestProtoMsg): QuerySlashRecordsRequest;
    toProto(message: QuerySlashRecordsRequest): Uint8Array;
    toProtoMsg(message: QuerySlashRecordsRequest): QuerySlashRecordsRequestProtoMsg;
};
export declare const QuerySlashRecordsResponse: {
    typeUrl: string;
    encode(message: QuerySlashRecordsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QuerySlashRecordsResponse;
    fromPartial(object: Partial<QuerySlashRecordsResponse>): QuerySlashRecordsResponse;
    fromAmino(object: QuerySlashRecordsResponseAmino): QuerySlashRecordsResponse;
    toAmino(message: QuerySlashRecordsResponse): QuerySlashRecordsResponseAmino;
    fromAminoMsg(object: QuerySlashRecordsResponseAminoMsg): QuerySlashRecordsResponse;
    fromProtoMsg(message: QuerySlashRecordsResponseProtoMsg): QuerySlashRecordsResponse;
    toProto(message: QuerySlashRecordsResponse): Uint8Array;
    toProtoMsg(message: QuerySlashRecordsResponse): QuerySlashRecordsResponseProtoMsg;
};
export declare const RedemptionRecordResponse: {
    typeUrl: string;
    encode(message: RedemptionRecordResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): RedemptionRecordResponse;
    fromPartial(object: Partial<RedemptionRecordResponse>): RedemptionRecordResponse;
    fromAmino(object: RedemptionRecordResponseAmino): RedemptionRecordResponse;
    toAmino(message: RedemptionRecordResponse): RedemptionRecordResponseAmino;
    fromAminoMsg(object: RedemptionRecordResponseAminoMsg): RedemptionRecordResponse;
    fromProtoMsg(message: RedemptionRecordResponseProtoMsg): RedemptionRecordResponse;
    toProto(message: RedemptionRecordResponse): Uint8Array;
    toProtoMsg(message: RedemptionRecordResponse): RedemptionRecordResponseProtoMsg;
};
