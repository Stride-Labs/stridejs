import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { HostZone, HostZoneAmino, HostZoneSDKType, DelegationRecord, DelegationRecordAmino, DelegationRecordSDKType, UnbondingRecord, UnbondingRecordAmino, UnbondingRecordSDKType, SlashRecord, SlashRecordAmino, SlashRecordSDKType, RedemptionRecord, RedemptionRecordAmino, RedemptionRecordSDKType } from "./staketia";
import { BinaryReader, BinaryWriter } from "../../binary";
/** Host Zone */
export interface QueryHostZoneRequest {}
export interface QueryHostZoneRequestProtoMsg {
  typeUrl: "/stride.staketia.QueryHostZoneRequest";
  value: Uint8Array;
}
/** Host Zone */
export interface QueryHostZoneRequestAmino {}
export interface QueryHostZoneRequestAminoMsg {
  type: "/stride.staketia.QueryHostZoneRequest";
  value: QueryHostZoneRequestAmino;
}
/** Host Zone */
export interface QueryHostZoneRequestSDKType {}
export interface QueryHostZoneResponse {
  hostZone?: HostZone;
}
export interface QueryHostZoneResponseProtoMsg {
  typeUrl: "/stride.staketia.QueryHostZoneResponse";
  value: Uint8Array;
}
export interface QueryHostZoneResponseAmino {
  host_zone?: HostZoneAmino;
}
export interface QueryHostZoneResponseAminoMsg {
  type: "/stride.staketia.QueryHostZoneResponse";
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
  typeUrl: "/stride.staketia.QueryDelegationRecordsRequest";
  value: Uint8Array;
}
/** All Delegation Records */
export interface QueryDelegationRecordsRequestAmino {
  include_archived?: boolean;
}
export interface QueryDelegationRecordsRequestAminoMsg {
  type: "/stride.staketia.QueryDelegationRecordsRequest";
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
  typeUrl: "/stride.staketia.QueryDelegationRecordsResponse";
  value: Uint8Array;
}
export interface QueryDelegationRecordsResponseAmino {
  delegation_records?: DelegationRecordAmino[];
}
export interface QueryDelegationRecordsResponseAminoMsg {
  type: "/stride.staketia.QueryDelegationRecordsResponse";
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
  typeUrl: "/stride.staketia.QueryUnbondingRecordsRequest";
  value: Uint8Array;
}
/** All Unbonding Records */
export interface QueryUnbondingRecordsRequestAmino {
  include_archived?: boolean;
}
export interface QueryUnbondingRecordsRequestAminoMsg {
  type: "/stride.staketia.QueryUnbondingRecordsRequest";
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
  typeUrl: "/stride.staketia.QueryUnbondingRecordsResponse";
  value: Uint8Array;
}
export interface QueryUnbondingRecordsResponseAmino {
  unbonding_records?: UnbondingRecordAmino[];
}
export interface QueryUnbondingRecordsResponseAminoMsg {
  type: "/stride.staketia.QueryUnbondingRecordsResponse";
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
  typeUrl: "/stride.staketia.QueryRedemptionRecordRequest";
  value: Uint8Array;
}
/** Single Redemption Record */
export interface QueryRedemptionRecordRequestAmino {
  unbonding_record_id?: string;
  address?: string;
}
export interface QueryRedemptionRecordRequestAminoMsg {
  type: "/stride.staketia.QueryRedemptionRecordRequest";
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
  typeUrl: "/stride.staketia.QueryRedemptionRecordResponse";
  value: Uint8Array;
}
export interface QueryRedemptionRecordResponseAmino {
  redemption_record_response?: RedemptionRecordResponseAmino;
}
export interface QueryRedemptionRecordResponseAminoMsg {
  type: "/stride.staketia.QueryRedemptionRecordResponse";
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
  typeUrl: "/stride.staketia.QueryRedemptionRecordsRequest";
  value: Uint8Array;
}
/** All Redemption Records */
export interface QueryRedemptionRecordsRequestAmino {
  address?: string;
  unbonding_record_id?: string;
  pagination?: PageRequestAmino;
}
export interface QueryRedemptionRecordsRequestAminoMsg {
  type: "/stride.staketia.QueryRedemptionRecordsRequest";
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
  typeUrl: "/stride.staketia.QueryRedemptionRecordsResponse";
  value: Uint8Array;
}
export interface QueryRedemptionRecordsResponseAmino {
  redemption_record_responses?: RedemptionRecordResponseAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryRedemptionRecordsResponseAminoMsg {
  type: "/stride.staketia.QueryRedemptionRecordsResponse";
  value: QueryRedemptionRecordsResponseAmino;
}
export interface QueryRedemptionRecordsResponseSDKType {
  redemption_record_responses: RedemptionRecordResponseSDKType[];
  pagination?: PageResponseSDKType;
}
/** All Slash Records */
export interface QuerySlashRecordsRequest {}
export interface QuerySlashRecordsRequestProtoMsg {
  typeUrl: "/stride.staketia.QuerySlashRecordsRequest";
  value: Uint8Array;
}
/** All Slash Records */
export interface QuerySlashRecordsRequestAmino {}
export interface QuerySlashRecordsRequestAminoMsg {
  type: "/stride.staketia.QuerySlashRecordsRequest";
  value: QuerySlashRecordsRequestAmino;
}
/** All Slash Records */
export interface QuerySlashRecordsRequestSDKType {}
export interface QuerySlashRecordsResponse {
  slashRecords: SlashRecord[];
}
export interface QuerySlashRecordsResponseProtoMsg {
  typeUrl: "/stride.staketia.QuerySlashRecordsResponse";
  value: Uint8Array;
}
export interface QuerySlashRecordsResponseAmino {
  slash_records?: SlashRecordAmino[];
}
export interface QuerySlashRecordsResponseAminoMsg {
  type: "/stride.staketia.QuerySlashRecordsResponse";
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
  typeUrl: "/stride.staketia.RedemptionRecordResponse";
  value: Uint8Array;
}
/** Data structure for frontend to consume */
export interface RedemptionRecordResponseAmino {
  /** Redemption record */
  redemption_record?: RedemptionRecordAmino;
  /**
   * The Unix timestamp (in seconds) at which the unbonding for the UR
   * associated with this RR completes
   */
  unbonding_completion_time_seconds?: string;
}
export interface RedemptionRecordResponseAminoMsg {
  type: "/stride.staketia.RedemptionRecordResponse";
  value: RedemptionRecordResponseAmino;
}
/** Data structure for frontend to consume */
export interface RedemptionRecordResponseSDKType {
  redemption_record?: RedemptionRecordSDKType;
  unbonding_completion_time_seconds: bigint;
}
function createBaseQueryHostZoneRequest(): QueryHostZoneRequest {
  return {};
}
export const QueryHostZoneRequest = {
  typeUrl: "/stride.staketia.QueryHostZoneRequest",
  encode(_: QueryHostZoneRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryHostZoneRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryHostZoneRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<QueryHostZoneRequest>): QueryHostZoneRequest {
    const message = createBaseQueryHostZoneRequest();
    return message;
  },
  fromAmino(_: QueryHostZoneRequestAmino): QueryHostZoneRequest {
    const message = createBaseQueryHostZoneRequest();
    return message;
  },
  toAmino(_: QueryHostZoneRequest): QueryHostZoneRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryHostZoneRequestAminoMsg): QueryHostZoneRequest {
    return QueryHostZoneRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryHostZoneRequestProtoMsg): QueryHostZoneRequest {
    return QueryHostZoneRequest.decode(message.value);
  },
  toProto(message: QueryHostZoneRequest): Uint8Array {
    return QueryHostZoneRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryHostZoneRequest): QueryHostZoneRequestProtoMsg {
    return {
      typeUrl: "/stride.staketia.QueryHostZoneRequest",
      value: QueryHostZoneRequest.encode(message).finish()
    };
  }
};
function createBaseQueryHostZoneResponse(): QueryHostZoneResponse {
  return {
    hostZone: undefined
  };
}
export const QueryHostZoneResponse = {
  typeUrl: "/stride.staketia.QueryHostZoneResponse",
  encode(message: QueryHostZoneResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.hostZone !== undefined) {
      HostZone.encode(message.hostZone, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryHostZoneResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryHostZoneResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hostZone = HostZone.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryHostZoneResponse>): QueryHostZoneResponse {
    const message = createBaseQueryHostZoneResponse();
    message.hostZone = object.hostZone !== undefined && object.hostZone !== null ? HostZone.fromPartial(object.hostZone) : undefined;
    return message;
  },
  fromAmino(object: QueryHostZoneResponseAmino): QueryHostZoneResponse {
    const message = createBaseQueryHostZoneResponse();
    if (object.host_zone !== undefined && object.host_zone !== null) {
      message.hostZone = HostZone.fromAmino(object.host_zone);
    }
    return message;
  },
  toAmino(message: QueryHostZoneResponse): QueryHostZoneResponseAmino {
    const obj: any = {};
    obj.host_zone = message.hostZone ? HostZone.toAmino(message.hostZone) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryHostZoneResponseAminoMsg): QueryHostZoneResponse {
    return QueryHostZoneResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryHostZoneResponseProtoMsg): QueryHostZoneResponse {
    return QueryHostZoneResponse.decode(message.value);
  },
  toProto(message: QueryHostZoneResponse): Uint8Array {
    return QueryHostZoneResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryHostZoneResponse): QueryHostZoneResponseProtoMsg {
    return {
      typeUrl: "/stride.staketia.QueryHostZoneResponse",
      value: QueryHostZoneResponse.encode(message).finish()
    };
  }
};
function createBaseQueryDelegationRecordsRequest(): QueryDelegationRecordsRequest {
  return {
    includeArchived: false
  };
}
export const QueryDelegationRecordsRequest = {
  typeUrl: "/stride.staketia.QueryDelegationRecordsRequest",
  encode(message: QueryDelegationRecordsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.includeArchived === true) {
      writer.uint32(8).bool(message.includeArchived);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegationRecordsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegationRecordsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.includeArchived = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryDelegationRecordsRequest>): QueryDelegationRecordsRequest {
    const message = createBaseQueryDelegationRecordsRequest();
    message.includeArchived = object.includeArchived ?? false;
    return message;
  },
  fromAmino(object: QueryDelegationRecordsRequestAmino): QueryDelegationRecordsRequest {
    const message = createBaseQueryDelegationRecordsRequest();
    if (object.include_archived !== undefined && object.include_archived !== null) {
      message.includeArchived = object.include_archived;
    }
    return message;
  },
  toAmino(message: QueryDelegationRecordsRequest): QueryDelegationRecordsRequestAmino {
    const obj: any = {};
    obj.include_archived = message.includeArchived === false ? undefined : message.includeArchived;
    return obj;
  },
  fromAminoMsg(object: QueryDelegationRecordsRequestAminoMsg): QueryDelegationRecordsRequest {
    return QueryDelegationRecordsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDelegationRecordsRequestProtoMsg): QueryDelegationRecordsRequest {
    return QueryDelegationRecordsRequest.decode(message.value);
  },
  toProto(message: QueryDelegationRecordsRequest): Uint8Array {
    return QueryDelegationRecordsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDelegationRecordsRequest): QueryDelegationRecordsRequestProtoMsg {
    return {
      typeUrl: "/stride.staketia.QueryDelegationRecordsRequest",
      value: QueryDelegationRecordsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryDelegationRecordsResponse(): QueryDelegationRecordsResponse {
  return {
    delegationRecords: []
  };
}
export const QueryDelegationRecordsResponse = {
  typeUrl: "/stride.staketia.QueryDelegationRecordsResponse",
  encode(message: QueryDelegationRecordsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.delegationRecords) {
      DelegationRecord.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegationRecordsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegationRecordsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegationRecords.push(DelegationRecord.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryDelegationRecordsResponse>): QueryDelegationRecordsResponse {
    const message = createBaseQueryDelegationRecordsResponse();
    message.delegationRecords = object.delegationRecords?.map(e => DelegationRecord.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryDelegationRecordsResponseAmino): QueryDelegationRecordsResponse {
    const message = createBaseQueryDelegationRecordsResponse();
    message.delegationRecords = object.delegation_records?.map(e => DelegationRecord.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryDelegationRecordsResponse): QueryDelegationRecordsResponseAmino {
    const obj: any = {};
    if (message.delegationRecords) {
      obj.delegation_records = message.delegationRecords.map(e => e ? DelegationRecord.toAmino(e) : undefined);
    } else {
      obj.delegation_records = message.delegationRecords;
    }
    return obj;
  },
  fromAminoMsg(object: QueryDelegationRecordsResponseAminoMsg): QueryDelegationRecordsResponse {
    return QueryDelegationRecordsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDelegationRecordsResponseProtoMsg): QueryDelegationRecordsResponse {
    return QueryDelegationRecordsResponse.decode(message.value);
  },
  toProto(message: QueryDelegationRecordsResponse): Uint8Array {
    return QueryDelegationRecordsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDelegationRecordsResponse): QueryDelegationRecordsResponseProtoMsg {
    return {
      typeUrl: "/stride.staketia.QueryDelegationRecordsResponse",
      value: QueryDelegationRecordsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryUnbondingRecordsRequest(): QueryUnbondingRecordsRequest {
  return {
    includeArchived: false
  };
}
export const QueryUnbondingRecordsRequest = {
  typeUrl: "/stride.staketia.QueryUnbondingRecordsRequest",
  encode(message: QueryUnbondingRecordsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.includeArchived === true) {
      writer.uint32(8).bool(message.includeArchived);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryUnbondingRecordsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUnbondingRecordsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.includeArchived = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryUnbondingRecordsRequest>): QueryUnbondingRecordsRequest {
    const message = createBaseQueryUnbondingRecordsRequest();
    message.includeArchived = object.includeArchived ?? false;
    return message;
  },
  fromAmino(object: QueryUnbondingRecordsRequestAmino): QueryUnbondingRecordsRequest {
    const message = createBaseQueryUnbondingRecordsRequest();
    if (object.include_archived !== undefined && object.include_archived !== null) {
      message.includeArchived = object.include_archived;
    }
    return message;
  },
  toAmino(message: QueryUnbondingRecordsRequest): QueryUnbondingRecordsRequestAmino {
    const obj: any = {};
    obj.include_archived = message.includeArchived === false ? undefined : message.includeArchived;
    return obj;
  },
  fromAminoMsg(object: QueryUnbondingRecordsRequestAminoMsg): QueryUnbondingRecordsRequest {
    return QueryUnbondingRecordsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryUnbondingRecordsRequestProtoMsg): QueryUnbondingRecordsRequest {
    return QueryUnbondingRecordsRequest.decode(message.value);
  },
  toProto(message: QueryUnbondingRecordsRequest): Uint8Array {
    return QueryUnbondingRecordsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryUnbondingRecordsRequest): QueryUnbondingRecordsRequestProtoMsg {
    return {
      typeUrl: "/stride.staketia.QueryUnbondingRecordsRequest",
      value: QueryUnbondingRecordsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryUnbondingRecordsResponse(): QueryUnbondingRecordsResponse {
  return {
    unbondingRecords: []
  };
}
export const QueryUnbondingRecordsResponse = {
  typeUrl: "/stride.staketia.QueryUnbondingRecordsResponse",
  encode(message: QueryUnbondingRecordsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.unbondingRecords) {
      UnbondingRecord.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryUnbondingRecordsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUnbondingRecordsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.unbondingRecords.push(UnbondingRecord.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryUnbondingRecordsResponse>): QueryUnbondingRecordsResponse {
    const message = createBaseQueryUnbondingRecordsResponse();
    message.unbondingRecords = object.unbondingRecords?.map(e => UnbondingRecord.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryUnbondingRecordsResponseAmino): QueryUnbondingRecordsResponse {
    const message = createBaseQueryUnbondingRecordsResponse();
    message.unbondingRecords = object.unbonding_records?.map(e => UnbondingRecord.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryUnbondingRecordsResponse): QueryUnbondingRecordsResponseAmino {
    const obj: any = {};
    if (message.unbondingRecords) {
      obj.unbonding_records = message.unbondingRecords.map(e => e ? UnbondingRecord.toAmino(e) : undefined);
    } else {
      obj.unbonding_records = message.unbondingRecords;
    }
    return obj;
  },
  fromAminoMsg(object: QueryUnbondingRecordsResponseAminoMsg): QueryUnbondingRecordsResponse {
    return QueryUnbondingRecordsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryUnbondingRecordsResponseProtoMsg): QueryUnbondingRecordsResponse {
    return QueryUnbondingRecordsResponse.decode(message.value);
  },
  toProto(message: QueryUnbondingRecordsResponse): Uint8Array {
    return QueryUnbondingRecordsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryUnbondingRecordsResponse): QueryUnbondingRecordsResponseProtoMsg {
    return {
      typeUrl: "/stride.staketia.QueryUnbondingRecordsResponse",
      value: QueryUnbondingRecordsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryRedemptionRecordRequest(): QueryRedemptionRecordRequest {
  return {
    unbondingRecordId: BigInt(0),
    address: ""
  };
}
export const QueryRedemptionRecordRequest = {
  typeUrl: "/stride.staketia.QueryRedemptionRecordRequest",
  encode(message: QueryRedemptionRecordRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.unbondingRecordId !== BigInt(0)) {
      writer.uint32(8).uint64(message.unbondingRecordId);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryRedemptionRecordRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRedemptionRecordRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.unbondingRecordId = reader.uint64();
          break;
        case 2:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryRedemptionRecordRequest>): QueryRedemptionRecordRequest {
    const message = createBaseQueryRedemptionRecordRequest();
    message.unbondingRecordId = object.unbondingRecordId !== undefined && object.unbondingRecordId !== null ? BigInt(object.unbondingRecordId.toString()) : BigInt(0);
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: QueryRedemptionRecordRequestAmino): QueryRedemptionRecordRequest {
    const message = createBaseQueryRedemptionRecordRequest();
    if (object.unbonding_record_id !== undefined && object.unbonding_record_id !== null) {
      message.unbondingRecordId = BigInt(object.unbonding_record_id);
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: QueryRedemptionRecordRequest): QueryRedemptionRecordRequestAmino {
    const obj: any = {};
    obj.unbonding_record_id = message.unbondingRecordId !== BigInt(0) ? message.unbondingRecordId.toString() : undefined;
    obj.address = message.address === "" ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(object: QueryRedemptionRecordRequestAminoMsg): QueryRedemptionRecordRequest {
    return QueryRedemptionRecordRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryRedemptionRecordRequestProtoMsg): QueryRedemptionRecordRequest {
    return QueryRedemptionRecordRequest.decode(message.value);
  },
  toProto(message: QueryRedemptionRecordRequest): Uint8Array {
    return QueryRedemptionRecordRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryRedemptionRecordRequest): QueryRedemptionRecordRequestProtoMsg {
    return {
      typeUrl: "/stride.staketia.QueryRedemptionRecordRequest",
      value: QueryRedemptionRecordRequest.encode(message).finish()
    };
  }
};
function createBaseQueryRedemptionRecordResponse(): QueryRedemptionRecordResponse {
  return {
    redemptionRecordResponse: undefined
  };
}
export const QueryRedemptionRecordResponse = {
  typeUrl: "/stride.staketia.QueryRedemptionRecordResponse",
  encode(message: QueryRedemptionRecordResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.redemptionRecordResponse !== undefined) {
      RedemptionRecordResponse.encode(message.redemptionRecordResponse, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryRedemptionRecordResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRedemptionRecordResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.redemptionRecordResponse = RedemptionRecordResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryRedemptionRecordResponse>): QueryRedemptionRecordResponse {
    const message = createBaseQueryRedemptionRecordResponse();
    message.redemptionRecordResponse = object.redemptionRecordResponse !== undefined && object.redemptionRecordResponse !== null ? RedemptionRecordResponse.fromPartial(object.redemptionRecordResponse) : undefined;
    return message;
  },
  fromAmino(object: QueryRedemptionRecordResponseAmino): QueryRedemptionRecordResponse {
    const message = createBaseQueryRedemptionRecordResponse();
    if (object.redemption_record_response !== undefined && object.redemption_record_response !== null) {
      message.redemptionRecordResponse = RedemptionRecordResponse.fromAmino(object.redemption_record_response);
    }
    return message;
  },
  toAmino(message: QueryRedemptionRecordResponse): QueryRedemptionRecordResponseAmino {
    const obj: any = {};
    obj.redemption_record_response = message.redemptionRecordResponse ? RedemptionRecordResponse.toAmino(message.redemptionRecordResponse) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryRedemptionRecordResponseAminoMsg): QueryRedemptionRecordResponse {
    return QueryRedemptionRecordResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryRedemptionRecordResponseProtoMsg): QueryRedemptionRecordResponse {
    return QueryRedemptionRecordResponse.decode(message.value);
  },
  toProto(message: QueryRedemptionRecordResponse): Uint8Array {
    return QueryRedemptionRecordResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryRedemptionRecordResponse): QueryRedemptionRecordResponseProtoMsg {
    return {
      typeUrl: "/stride.staketia.QueryRedemptionRecordResponse",
      value: QueryRedemptionRecordResponse.encode(message).finish()
    };
  }
};
function createBaseQueryRedemptionRecordsRequest(): QueryRedemptionRecordsRequest {
  return {
    address: "",
    unbondingRecordId: BigInt(0),
    pagination: undefined
  };
}
export const QueryRedemptionRecordsRequest = {
  typeUrl: "/stride.staketia.QueryRedemptionRecordsRequest",
  encode(message: QueryRedemptionRecordsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.unbondingRecordId !== BigInt(0)) {
      writer.uint32(16).uint64(message.unbondingRecordId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryRedemptionRecordsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRedemptionRecordsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.unbondingRecordId = reader.uint64();
          break;
        case 3:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryRedemptionRecordsRequest>): QueryRedemptionRecordsRequest {
    const message = createBaseQueryRedemptionRecordsRequest();
    message.address = object.address ?? "";
    message.unbondingRecordId = object.unbondingRecordId !== undefined && object.unbondingRecordId !== null ? BigInt(object.unbondingRecordId.toString()) : BigInt(0);
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryRedemptionRecordsRequestAmino): QueryRedemptionRecordsRequest {
    const message = createBaseQueryRedemptionRecordsRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.unbonding_record_id !== undefined && object.unbonding_record_id !== null) {
      message.unbondingRecordId = BigInt(object.unbonding_record_id);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryRedemptionRecordsRequest): QueryRedemptionRecordsRequestAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.unbonding_record_id = message.unbondingRecordId !== BigInt(0) ? message.unbondingRecordId.toString() : undefined;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryRedemptionRecordsRequestAminoMsg): QueryRedemptionRecordsRequest {
    return QueryRedemptionRecordsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryRedemptionRecordsRequestProtoMsg): QueryRedemptionRecordsRequest {
    return QueryRedemptionRecordsRequest.decode(message.value);
  },
  toProto(message: QueryRedemptionRecordsRequest): Uint8Array {
    return QueryRedemptionRecordsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryRedemptionRecordsRequest): QueryRedemptionRecordsRequestProtoMsg {
    return {
      typeUrl: "/stride.staketia.QueryRedemptionRecordsRequest",
      value: QueryRedemptionRecordsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryRedemptionRecordsResponse(): QueryRedemptionRecordsResponse {
  return {
    redemptionRecordResponses: [],
    pagination: undefined
  };
}
export const QueryRedemptionRecordsResponse = {
  typeUrl: "/stride.staketia.QueryRedemptionRecordsResponse",
  encode(message: QueryRedemptionRecordsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.redemptionRecordResponses) {
      RedemptionRecordResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryRedemptionRecordsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRedemptionRecordsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.redemptionRecordResponses.push(RedemptionRecordResponse.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryRedemptionRecordsResponse>): QueryRedemptionRecordsResponse {
    const message = createBaseQueryRedemptionRecordsResponse();
    message.redemptionRecordResponses = object.redemptionRecordResponses?.map(e => RedemptionRecordResponse.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryRedemptionRecordsResponseAmino): QueryRedemptionRecordsResponse {
    const message = createBaseQueryRedemptionRecordsResponse();
    message.redemptionRecordResponses = object.redemption_record_responses?.map(e => RedemptionRecordResponse.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryRedemptionRecordsResponse): QueryRedemptionRecordsResponseAmino {
    const obj: any = {};
    if (message.redemptionRecordResponses) {
      obj.redemption_record_responses = message.redemptionRecordResponses.map(e => e ? RedemptionRecordResponse.toAmino(e) : undefined);
    } else {
      obj.redemption_record_responses = message.redemptionRecordResponses;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryRedemptionRecordsResponseAminoMsg): QueryRedemptionRecordsResponse {
    return QueryRedemptionRecordsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryRedemptionRecordsResponseProtoMsg): QueryRedemptionRecordsResponse {
    return QueryRedemptionRecordsResponse.decode(message.value);
  },
  toProto(message: QueryRedemptionRecordsResponse): Uint8Array {
    return QueryRedemptionRecordsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryRedemptionRecordsResponse): QueryRedemptionRecordsResponseProtoMsg {
    return {
      typeUrl: "/stride.staketia.QueryRedemptionRecordsResponse",
      value: QueryRedemptionRecordsResponse.encode(message).finish()
    };
  }
};
function createBaseQuerySlashRecordsRequest(): QuerySlashRecordsRequest {
  return {};
}
export const QuerySlashRecordsRequest = {
  typeUrl: "/stride.staketia.QuerySlashRecordsRequest",
  encode(_: QuerySlashRecordsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySlashRecordsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySlashRecordsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<QuerySlashRecordsRequest>): QuerySlashRecordsRequest {
    const message = createBaseQuerySlashRecordsRequest();
    return message;
  },
  fromAmino(_: QuerySlashRecordsRequestAmino): QuerySlashRecordsRequest {
    const message = createBaseQuerySlashRecordsRequest();
    return message;
  },
  toAmino(_: QuerySlashRecordsRequest): QuerySlashRecordsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QuerySlashRecordsRequestAminoMsg): QuerySlashRecordsRequest {
    return QuerySlashRecordsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySlashRecordsRequestProtoMsg): QuerySlashRecordsRequest {
    return QuerySlashRecordsRequest.decode(message.value);
  },
  toProto(message: QuerySlashRecordsRequest): Uint8Array {
    return QuerySlashRecordsRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySlashRecordsRequest): QuerySlashRecordsRequestProtoMsg {
    return {
      typeUrl: "/stride.staketia.QuerySlashRecordsRequest",
      value: QuerySlashRecordsRequest.encode(message).finish()
    };
  }
};
function createBaseQuerySlashRecordsResponse(): QuerySlashRecordsResponse {
  return {
    slashRecords: []
  };
}
export const QuerySlashRecordsResponse = {
  typeUrl: "/stride.staketia.QuerySlashRecordsResponse",
  encode(message: QuerySlashRecordsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.slashRecords) {
      SlashRecord.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySlashRecordsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySlashRecordsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.slashRecords.push(SlashRecord.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QuerySlashRecordsResponse>): QuerySlashRecordsResponse {
    const message = createBaseQuerySlashRecordsResponse();
    message.slashRecords = object.slashRecords?.map(e => SlashRecord.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QuerySlashRecordsResponseAmino): QuerySlashRecordsResponse {
    const message = createBaseQuerySlashRecordsResponse();
    message.slashRecords = object.slash_records?.map(e => SlashRecord.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QuerySlashRecordsResponse): QuerySlashRecordsResponseAmino {
    const obj: any = {};
    if (message.slashRecords) {
      obj.slash_records = message.slashRecords.map(e => e ? SlashRecord.toAmino(e) : undefined);
    } else {
      obj.slash_records = message.slashRecords;
    }
    return obj;
  },
  fromAminoMsg(object: QuerySlashRecordsResponseAminoMsg): QuerySlashRecordsResponse {
    return QuerySlashRecordsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySlashRecordsResponseProtoMsg): QuerySlashRecordsResponse {
    return QuerySlashRecordsResponse.decode(message.value);
  },
  toProto(message: QuerySlashRecordsResponse): Uint8Array {
    return QuerySlashRecordsResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySlashRecordsResponse): QuerySlashRecordsResponseProtoMsg {
    return {
      typeUrl: "/stride.staketia.QuerySlashRecordsResponse",
      value: QuerySlashRecordsResponse.encode(message).finish()
    };
  }
};
function createBaseRedemptionRecordResponse(): RedemptionRecordResponse {
  return {
    redemptionRecord: undefined,
    unbondingCompletionTimeSeconds: BigInt(0)
  };
}
export const RedemptionRecordResponse = {
  typeUrl: "/stride.staketia.RedemptionRecordResponse",
  encode(message: RedemptionRecordResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.redemptionRecord !== undefined) {
      RedemptionRecord.encode(message.redemptionRecord, writer.uint32(10).fork()).ldelim();
    }
    if (message.unbondingCompletionTimeSeconds !== BigInt(0)) {
      writer.uint32(16).uint64(message.unbondingCompletionTimeSeconds);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RedemptionRecordResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRedemptionRecordResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.redemptionRecord = RedemptionRecord.decode(reader, reader.uint32());
          break;
        case 2:
          message.unbondingCompletionTimeSeconds = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<RedemptionRecordResponse>): RedemptionRecordResponse {
    const message = createBaseRedemptionRecordResponse();
    message.redemptionRecord = object.redemptionRecord !== undefined && object.redemptionRecord !== null ? RedemptionRecord.fromPartial(object.redemptionRecord) : undefined;
    message.unbondingCompletionTimeSeconds = object.unbondingCompletionTimeSeconds !== undefined && object.unbondingCompletionTimeSeconds !== null ? BigInt(object.unbondingCompletionTimeSeconds.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: RedemptionRecordResponseAmino): RedemptionRecordResponse {
    const message = createBaseRedemptionRecordResponse();
    if (object.redemption_record !== undefined && object.redemption_record !== null) {
      message.redemptionRecord = RedemptionRecord.fromAmino(object.redemption_record);
    }
    if (object.unbonding_completion_time_seconds !== undefined && object.unbonding_completion_time_seconds !== null) {
      message.unbondingCompletionTimeSeconds = BigInt(object.unbonding_completion_time_seconds);
    }
    return message;
  },
  toAmino(message: RedemptionRecordResponse): RedemptionRecordResponseAmino {
    const obj: any = {};
    obj.redemption_record = message.redemptionRecord ? RedemptionRecord.toAmino(message.redemptionRecord) : undefined;
    obj.unbonding_completion_time_seconds = message.unbondingCompletionTimeSeconds !== BigInt(0) ? message.unbondingCompletionTimeSeconds.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: RedemptionRecordResponseAminoMsg): RedemptionRecordResponse {
    return RedemptionRecordResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: RedemptionRecordResponseProtoMsg): RedemptionRecordResponse {
    return RedemptionRecordResponse.decode(message.value);
  },
  toProto(message: RedemptionRecordResponse): Uint8Array {
    return RedemptionRecordResponse.encode(message).finish();
  },
  toProtoMsg(message: RedemptionRecordResponse): RedemptionRecordResponseProtoMsg {
    return {
      typeUrl: "/stride.staketia.RedemptionRecordResponse",
      value: RedemptionRecordResponse.encode(message).finish()
    };
  }
};