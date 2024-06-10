import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { HostZone, HostZoneSDKType, DelegationRecord, DelegationRecordSDKType, UnbondingRecord, UnbondingRecordSDKType, SlashRecord, SlashRecordSDKType, RedemptionRecord, RedemptionRecordSDKType } from "./stakedym";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
/** Host Zone */

export interface QueryHostZoneRequest {}
/** Host Zone */

export interface QueryHostZoneRequestSDKType {}
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

export interface QuerySlashRecordsRequest {}
/** All Slash Records */

export interface QuerySlashRecordsRequestSDKType {}
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

function createBaseQueryHostZoneRequest(): QueryHostZoneRequest {
  return {};
}

export const QueryHostZoneRequest = {
  encode(_: QueryHostZoneRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryHostZoneRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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

  fromPartial(_: DeepPartial<QueryHostZoneRequest>): QueryHostZoneRequest {
    const message = createBaseQueryHostZoneRequest();
    return message;
  }

};

function createBaseQueryHostZoneResponse(): QueryHostZoneResponse {
  return {
    hostZone: undefined
  };
}

export const QueryHostZoneResponse = {
  encode(message: QueryHostZoneResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.hostZone !== undefined) {
      HostZone.encode(message.hostZone, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryHostZoneResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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

  fromPartial(object: DeepPartial<QueryHostZoneResponse>): QueryHostZoneResponse {
    const message = createBaseQueryHostZoneResponse();
    message.hostZone = object.hostZone !== undefined && object.hostZone !== null ? HostZone.fromPartial(object.hostZone) : undefined;
    return message;
  }

};

function createBaseQueryDelegationRecordsRequest(): QueryDelegationRecordsRequest {
  return {
    includeArchived: false
  };
}

export const QueryDelegationRecordsRequest = {
  encode(message: QueryDelegationRecordsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.includeArchived === true) {
      writer.uint32(8).bool(message.includeArchived);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegationRecordsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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

  fromPartial(object: DeepPartial<QueryDelegationRecordsRequest>): QueryDelegationRecordsRequest {
    const message = createBaseQueryDelegationRecordsRequest();
    message.includeArchived = object.includeArchived ?? false;
    return message;
  }

};

function createBaseQueryDelegationRecordsResponse(): QueryDelegationRecordsResponse {
  return {
    delegationRecords: []
  };
}

export const QueryDelegationRecordsResponse = {
  encode(message: QueryDelegationRecordsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.delegationRecords) {
      DelegationRecord.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegationRecordsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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

  fromPartial(object: DeepPartial<QueryDelegationRecordsResponse>): QueryDelegationRecordsResponse {
    const message = createBaseQueryDelegationRecordsResponse();
    message.delegationRecords = object.delegationRecords?.map(e => DelegationRecord.fromPartial(e)) || [];
    return message;
  }

};

function createBaseQueryUnbondingRecordsRequest(): QueryUnbondingRecordsRequest {
  return {
    includeArchived: false
  };
}

export const QueryUnbondingRecordsRequest = {
  encode(message: QueryUnbondingRecordsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.includeArchived === true) {
      writer.uint32(8).bool(message.includeArchived);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryUnbondingRecordsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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

  fromPartial(object: DeepPartial<QueryUnbondingRecordsRequest>): QueryUnbondingRecordsRequest {
    const message = createBaseQueryUnbondingRecordsRequest();
    message.includeArchived = object.includeArchived ?? false;
    return message;
  }

};

function createBaseQueryUnbondingRecordsResponse(): QueryUnbondingRecordsResponse {
  return {
    unbondingRecords: []
  };
}

export const QueryUnbondingRecordsResponse = {
  encode(message: QueryUnbondingRecordsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.unbondingRecords) {
      UnbondingRecord.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryUnbondingRecordsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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

  fromPartial(object: DeepPartial<QueryUnbondingRecordsResponse>): QueryUnbondingRecordsResponse {
    const message = createBaseQueryUnbondingRecordsResponse();
    message.unbondingRecords = object.unbondingRecords?.map(e => UnbondingRecord.fromPartial(e)) || [];
    return message;
  }

};

function createBaseQueryRedemptionRecordRequest(): QueryRedemptionRecordRequest {
  return {
    unbondingRecordId: Long.UZERO,
    address: ""
  };
}

export const QueryRedemptionRecordRequest = {
  encode(message: QueryRedemptionRecordRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.unbondingRecordId.isZero()) {
      writer.uint32(8).uint64(message.unbondingRecordId);
    }

    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRedemptionRecordRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRedemptionRecordRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.unbondingRecordId = (reader.uint64() as Long);
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

  fromPartial(object: DeepPartial<QueryRedemptionRecordRequest>): QueryRedemptionRecordRequest {
    const message = createBaseQueryRedemptionRecordRequest();
    message.unbondingRecordId = object.unbondingRecordId !== undefined && object.unbondingRecordId !== null ? Long.fromValue(object.unbondingRecordId) : Long.UZERO;
    message.address = object.address ?? "";
    return message;
  }

};

function createBaseQueryRedemptionRecordResponse(): QueryRedemptionRecordResponse {
  return {
    redemptionRecordResponse: undefined
  };
}

export const QueryRedemptionRecordResponse = {
  encode(message: QueryRedemptionRecordResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.redemptionRecordResponse !== undefined) {
      RedemptionRecordResponse.encode(message.redemptionRecordResponse, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRedemptionRecordResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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

  fromPartial(object: DeepPartial<QueryRedemptionRecordResponse>): QueryRedemptionRecordResponse {
    const message = createBaseQueryRedemptionRecordResponse();
    message.redemptionRecordResponse = object.redemptionRecordResponse !== undefined && object.redemptionRecordResponse !== null ? RedemptionRecordResponse.fromPartial(object.redemptionRecordResponse) : undefined;
    return message;
  }

};

function createBaseQueryRedemptionRecordsRequest(): QueryRedemptionRecordsRequest {
  return {
    address: "",
    unbondingRecordId: Long.UZERO,
    pagination: undefined
  };
}

export const QueryRedemptionRecordsRequest = {
  encode(message: QueryRedemptionRecordsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }

    if (!message.unbondingRecordId.isZero()) {
      writer.uint32(16).uint64(message.unbondingRecordId);
    }

    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRedemptionRecordsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRedemptionRecordsRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;

        case 2:
          message.unbondingRecordId = (reader.uint64() as Long);
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

  fromPartial(object: DeepPartial<QueryRedemptionRecordsRequest>): QueryRedemptionRecordsRequest {
    const message = createBaseQueryRedemptionRecordsRequest();
    message.address = object.address ?? "";
    message.unbondingRecordId = object.unbondingRecordId !== undefined && object.unbondingRecordId !== null ? Long.fromValue(object.unbondingRecordId) : Long.UZERO;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryRedemptionRecordsResponse(): QueryRedemptionRecordsResponse {
  return {
    redemptionRecordResponses: [],
    pagination: undefined
  };
}

export const QueryRedemptionRecordsResponse = {
  encode(message: QueryRedemptionRecordsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.redemptionRecordResponses) {
      RedemptionRecordResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRedemptionRecordsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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

  fromPartial(object: DeepPartial<QueryRedemptionRecordsResponse>): QueryRedemptionRecordsResponse {
    const message = createBaseQueryRedemptionRecordsResponse();
    message.redemptionRecordResponses = object.redemptionRecordResponses?.map(e => RedemptionRecordResponse.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQuerySlashRecordsRequest(): QuerySlashRecordsRequest {
  return {};
}

export const QuerySlashRecordsRequest = {
  encode(_: QuerySlashRecordsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySlashRecordsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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

  fromPartial(_: DeepPartial<QuerySlashRecordsRequest>): QuerySlashRecordsRequest {
    const message = createBaseQuerySlashRecordsRequest();
    return message;
  }

};

function createBaseQuerySlashRecordsResponse(): QuerySlashRecordsResponse {
  return {
    slashRecords: []
  };
}

export const QuerySlashRecordsResponse = {
  encode(message: QuerySlashRecordsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.slashRecords) {
      SlashRecord.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySlashRecordsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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

  fromPartial(object: DeepPartial<QuerySlashRecordsResponse>): QuerySlashRecordsResponse {
    const message = createBaseQuerySlashRecordsResponse();
    message.slashRecords = object.slashRecords?.map(e => SlashRecord.fromPartial(e)) || [];
    return message;
  }

};

function createBaseRedemptionRecordResponse(): RedemptionRecordResponse {
  return {
    redemptionRecord: undefined,
    unbondingCompletionTimeSeconds: Long.UZERO
  };
}

export const RedemptionRecordResponse = {
  encode(message: RedemptionRecordResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.redemptionRecord !== undefined) {
      RedemptionRecord.encode(message.redemptionRecord, writer.uint32(10).fork()).ldelim();
    }

    if (!message.unbondingCompletionTimeSeconds.isZero()) {
      writer.uint32(16).uint64(message.unbondingCompletionTimeSeconds);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RedemptionRecordResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRedemptionRecordResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.redemptionRecord = RedemptionRecord.decode(reader, reader.uint32());
          break;

        case 2:
          message.unbondingCompletionTimeSeconds = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<RedemptionRecordResponse>): RedemptionRecordResponse {
    const message = createBaseRedemptionRecordResponse();
    message.redemptionRecord = object.redemptionRecord !== undefined && object.redemptionRecord !== null ? RedemptionRecord.fromPartial(object.redemptionRecord) : undefined;
    message.unbondingCompletionTimeSeconds = object.unbondingCompletionTimeSeconds !== undefined && object.unbondingCompletionTimeSeconds !== null ? Long.fromValue(object.unbondingCompletionTimeSeconds) : Long.UZERO;
    return message;
  }

};