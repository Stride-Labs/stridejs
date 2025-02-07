import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { DepositRecord, DepositRecordAmino, DepositRecordSDKType, UserRedemptionRecord, UserRedemptionRecordAmino, UserRedemptionRecordSDKType, EpochUnbondingRecord, EpochUnbondingRecordAmino, EpochUnbondingRecordSDKType, LSMTokenDeposit, LSMTokenDepositAmino, LSMTokenDepositSDKType } from "./records";
import { BinaryReader, BinaryWriter } from "../../binary";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/stride.records.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/stride.records.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/stride.records.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
  /** params holds all the parameters of this module. */
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/stride.records.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
export interface QueryGetDepositRecordRequest {
  id: bigint;
}
export interface QueryGetDepositRecordRequestProtoMsg {
  typeUrl: "/stride.records.QueryGetDepositRecordRequest";
  value: Uint8Array;
}
export interface QueryGetDepositRecordRequestAmino {
  id?: string;
}
export interface QueryGetDepositRecordRequestAminoMsg {
  type: "/stride.records.QueryGetDepositRecordRequest";
  value: QueryGetDepositRecordRequestAmino;
}
export interface QueryGetDepositRecordRequestSDKType {
  id: bigint;
}
export interface QueryGetDepositRecordResponse {
  depositRecord: DepositRecord;
}
export interface QueryGetDepositRecordResponseProtoMsg {
  typeUrl: "/stride.records.QueryGetDepositRecordResponse";
  value: Uint8Array;
}
export interface QueryGetDepositRecordResponseAmino {
  deposit_record?: DepositRecordAmino;
}
export interface QueryGetDepositRecordResponseAminoMsg {
  type: "/stride.records.QueryGetDepositRecordResponse";
  value: QueryGetDepositRecordResponseAmino;
}
export interface QueryGetDepositRecordResponseSDKType {
  deposit_record: DepositRecordSDKType;
}
export interface QueryAllDepositRecordRequest {
  pagination?: PageRequest;
}
export interface QueryAllDepositRecordRequestProtoMsg {
  typeUrl: "/stride.records.QueryAllDepositRecordRequest";
  value: Uint8Array;
}
export interface QueryAllDepositRecordRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllDepositRecordRequestAminoMsg {
  type: "/stride.records.QueryAllDepositRecordRequest";
  value: QueryAllDepositRecordRequestAmino;
}
export interface QueryAllDepositRecordRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryAllDepositRecordResponse {
  depositRecord: DepositRecord[];
  pagination?: PageResponse;
}
export interface QueryAllDepositRecordResponseProtoMsg {
  typeUrl: "/stride.records.QueryAllDepositRecordResponse";
  value: Uint8Array;
}
export interface QueryAllDepositRecordResponseAmino {
  deposit_record?: DepositRecordAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllDepositRecordResponseAminoMsg {
  type: "/stride.records.QueryAllDepositRecordResponse";
  value: QueryAllDepositRecordResponseAmino;
}
export interface QueryAllDepositRecordResponseSDKType {
  deposit_record: DepositRecordSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryDepositRecordByHostRequest {
  hostZoneId: string;
}
export interface QueryDepositRecordByHostRequestProtoMsg {
  typeUrl: "/stride.records.QueryDepositRecordByHostRequest";
  value: Uint8Array;
}
export interface QueryDepositRecordByHostRequestAmino {
  host_zone_id?: string;
}
export interface QueryDepositRecordByHostRequestAminoMsg {
  type: "/stride.records.QueryDepositRecordByHostRequest";
  value: QueryDepositRecordByHostRequestAmino;
}
export interface QueryDepositRecordByHostRequestSDKType {
  host_zone_id: string;
}
export interface QueryDepositRecordByHostResponse {
  depositRecord: DepositRecord[];
}
export interface QueryDepositRecordByHostResponseProtoMsg {
  typeUrl: "/stride.records.QueryDepositRecordByHostResponse";
  value: Uint8Array;
}
export interface QueryDepositRecordByHostResponseAmino {
  deposit_record?: DepositRecordAmino[];
}
export interface QueryDepositRecordByHostResponseAminoMsg {
  type: "/stride.records.QueryDepositRecordByHostResponse";
  value: QueryDepositRecordByHostResponseAmino;
}
export interface QueryDepositRecordByHostResponseSDKType {
  deposit_record: DepositRecordSDKType[];
}
export interface QueryGetUserRedemptionRecordRequest {
  id: string;
}
export interface QueryGetUserRedemptionRecordRequestProtoMsg {
  typeUrl: "/stride.records.QueryGetUserRedemptionRecordRequest";
  value: Uint8Array;
}
export interface QueryGetUserRedemptionRecordRequestAmino {
  id?: string;
}
export interface QueryGetUserRedemptionRecordRequestAminoMsg {
  type: "/stride.records.QueryGetUserRedemptionRecordRequest";
  value: QueryGetUserRedemptionRecordRequestAmino;
}
export interface QueryGetUserRedemptionRecordRequestSDKType {
  id: string;
}
export interface QueryGetUserRedemptionRecordResponse {
  userRedemptionRecord: UserRedemptionRecord;
}
export interface QueryGetUserRedemptionRecordResponseProtoMsg {
  typeUrl: "/stride.records.QueryGetUserRedemptionRecordResponse";
  value: Uint8Array;
}
export interface QueryGetUserRedemptionRecordResponseAmino {
  user_redemption_record?: UserRedemptionRecordAmino;
}
export interface QueryGetUserRedemptionRecordResponseAminoMsg {
  type: "/stride.records.QueryGetUserRedemptionRecordResponse";
  value: QueryGetUserRedemptionRecordResponseAmino;
}
export interface QueryGetUserRedemptionRecordResponseSDKType {
  user_redemption_record: UserRedemptionRecordSDKType;
}
export interface QueryAllUserRedemptionRecordRequest {
  pagination?: PageRequest;
}
export interface QueryAllUserRedemptionRecordRequestProtoMsg {
  typeUrl: "/stride.records.QueryAllUserRedemptionRecordRequest";
  value: Uint8Array;
}
export interface QueryAllUserRedemptionRecordRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllUserRedemptionRecordRequestAminoMsg {
  type: "/stride.records.QueryAllUserRedemptionRecordRequest";
  value: QueryAllUserRedemptionRecordRequestAmino;
}
export interface QueryAllUserRedemptionRecordRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryAllUserRedemptionRecordResponse {
  userRedemptionRecord: UserRedemptionRecord[];
  pagination?: PageResponse;
}
export interface QueryAllUserRedemptionRecordResponseProtoMsg {
  typeUrl: "/stride.records.QueryAllUserRedemptionRecordResponse";
  value: Uint8Array;
}
export interface QueryAllUserRedemptionRecordResponseAmino {
  user_redemption_record?: UserRedemptionRecordAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllUserRedemptionRecordResponseAminoMsg {
  type: "/stride.records.QueryAllUserRedemptionRecordResponse";
  value: QueryAllUserRedemptionRecordResponseAmino;
}
export interface QueryAllUserRedemptionRecordResponseSDKType {
  user_redemption_record: UserRedemptionRecordSDKType[];
  pagination?: PageResponseSDKType;
}
/** Query UserRedemptionRecords by chainId / userId pair */
export interface QueryAllUserRedemptionRecordForUserRequest {
  chainId: string;
  day: bigint;
  address: string;
  limit: bigint;
  pagination?: PageRequest;
}
export interface QueryAllUserRedemptionRecordForUserRequestProtoMsg {
  typeUrl: "/stride.records.QueryAllUserRedemptionRecordForUserRequest";
  value: Uint8Array;
}
/** Query UserRedemptionRecords by chainId / userId pair */
export interface QueryAllUserRedemptionRecordForUserRequestAmino {
  chain_id?: string;
  day?: string;
  address?: string;
  limit?: string;
  pagination?: PageRequestAmino;
}
export interface QueryAllUserRedemptionRecordForUserRequestAminoMsg {
  type: "/stride.records.QueryAllUserRedemptionRecordForUserRequest";
  value: QueryAllUserRedemptionRecordForUserRequestAmino;
}
/** Query UserRedemptionRecords by chainId / userId pair */
export interface QueryAllUserRedemptionRecordForUserRequestSDKType {
  chain_id: string;
  day: bigint;
  address: string;
  limit: bigint;
  pagination?: PageRequestSDKType;
}
export interface QueryAllUserRedemptionRecordForUserResponse {
  userRedemptionRecord: UserRedemptionRecord[];
  pagination?: PageResponse;
}
export interface QueryAllUserRedemptionRecordForUserResponseProtoMsg {
  typeUrl: "/stride.records.QueryAllUserRedemptionRecordForUserResponse";
  value: Uint8Array;
}
export interface QueryAllUserRedemptionRecordForUserResponseAmino {
  user_redemption_record?: UserRedemptionRecordAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllUserRedemptionRecordForUserResponseAminoMsg {
  type: "/stride.records.QueryAllUserRedemptionRecordForUserResponse";
  value: QueryAllUserRedemptionRecordForUserResponseAmino;
}
export interface QueryAllUserRedemptionRecordForUserResponseSDKType {
  user_redemption_record: UserRedemptionRecordSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryGetEpochUnbondingRecordRequest {
  epochNumber: bigint;
}
export interface QueryGetEpochUnbondingRecordRequestProtoMsg {
  typeUrl: "/stride.records.QueryGetEpochUnbondingRecordRequest";
  value: Uint8Array;
}
export interface QueryGetEpochUnbondingRecordRequestAmino {
  epoch_number?: string;
}
export interface QueryGetEpochUnbondingRecordRequestAminoMsg {
  type: "/stride.records.QueryGetEpochUnbondingRecordRequest";
  value: QueryGetEpochUnbondingRecordRequestAmino;
}
export interface QueryGetEpochUnbondingRecordRequestSDKType {
  epoch_number: bigint;
}
export interface QueryGetEpochUnbondingRecordResponse {
  epochUnbondingRecord: EpochUnbondingRecord;
}
export interface QueryGetEpochUnbondingRecordResponseProtoMsg {
  typeUrl: "/stride.records.QueryGetEpochUnbondingRecordResponse";
  value: Uint8Array;
}
export interface QueryGetEpochUnbondingRecordResponseAmino {
  epoch_unbonding_record?: EpochUnbondingRecordAmino;
}
export interface QueryGetEpochUnbondingRecordResponseAminoMsg {
  type: "/stride.records.QueryGetEpochUnbondingRecordResponse";
  value: QueryGetEpochUnbondingRecordResponseAmino;
}
export interface QueryGetEpochUnbondingRecordResponseSDKType {
  epoch_unbonding_record: EpochUnbondingRecordSDKType;
}
export interface QueryAllEpochUnbondingRecordRequest {
  pagination?: PageRequest;
}
export interface QueryAllEpochUnbondingRecordRequestProtoMsg {
  typeUrl: "/stride.records.QueryAllEpochUnbondingRecordRequest";
  value: Uint8Array;
}
export interface QueryAllEpochUnbondingRecordRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllEpochUnbondingRecordRequestAminoMsg {
  type: "/stride.records.QueryAllEpochUnbondingRecordRequest";
  value: QueryAllEpochUnbondingRecordRequestAmino;
}
export interface QueryAllEpochUnbondingRecordRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryAllEpochUnbondingRecordResponse {
  epochUnbondingRecord: EpochUnbondingRecord[];
  pagination?: PageResponse;
}
export interface QueryAllEpochUnbondingRecordResponseProtoMsg {
  typeUrl: "/stride.records.QueryAllEpochUnbondingRecordResponse";
  value: Uint8Array;
}
export interface QueryAllEpochUnbondingRecordResponseAmino {
  epoch_unbonding_record?: EpochUnbondingRecordAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllEpochUnbondingRecordResponseAminoMsg {
  type: "/stride.records.QueryAllEpochUnbondingRecordResponse";
  value: QueryAllEpochUnbondingRecordResponseAmino;
}
export interface QueryAllEpochUnbondingRecordResponseSDKType {
  epoch_unbonding_record: EpochUnbondingRecordSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryLSMDepositRequest {
  chainId: string;
  denom: string;
}
export interface QueryLSMDepositRequestProtoMsg {
  typeUrl: "/stride.records.QueryLSMDepositRequest";
  value: Uint8Array;
}
export interface QueryLSMDepositRequestAmino {
  chain_id?: string;
  denom?: string;
}
export interface QueryLSMDepositRequestAminoMsg {
  type: "/stride.records.QueryLSMDepositRequest";
  value: QueryLSMDepositRequestAmino;
}
export interface QueryLSMDepositRequestSDKType {
  chain_id: string;
  denom: string;
}
export interface QueryLSMDepositResponse {
  deposit: LSMTokenDeposit;
}
export interface QueryLSMDepositResponseProtoMsg {
  typeUrl: "/stride.records.QueryLSMDepositResponse";
  value: Uint8Array;
}
export interface QueryLSMDepositResponseAmino {
  deposit?: LSMTokenDepositAmino;
}
export interface QueryLSMDepositResponseAminoMsg {
  type: "/stride.records.QueryLSMDepositResponse";
  value: QueryLSMDepositResponseAmino;
}
export interface QueryLSMDepositResponseSDKType {
  deposit: LSMTokenDepositSDKType;
}
export interface QueryLSMDepositsRequest {
  chainId: string;
  validatorAddress: string;
  status: string;
}
export interface QueryLSMDepositsRequestProtoMsg {
  typeUrl: "/stride.records.QueryLSMDepositsRequest";
  value: Uint8Array;
}
export interface QueryLSMDepositsRequestAmino {
  chain_id?: string;
  validator_address?: string;
  status?: string;
}
export interface QueryLSMDepositsRequestAminoMsg {
  type: "/stride.records.QueryLSMDepositsRequest";
  value: QueryLSMDepositsRequestAmino;
}
export interface QueryLSMDepositsRequestSDKType {
  chain_id: string;
  validator_address: string;
  status: string;
}
export interface QueryLSMDepositsResponse {
  deposits: LSMTokenDeposit[];
}
export interface QueryLSMDepositsResponseProtoMsg {
  typeUrl: "/stride.records.QueryLSMDepositsResponse";
  value: Uint8Array;
}
export interface QueryLSMDepositsResponseAmino {
  deposits?: LSMTokenDepositAmino[];
}
export interface QueryLSMDepositsResponseAminoMsg {
  type: "/stride.records.QueryLSMDepositsResponse";
  value: QueryLSMDepositsResponseAmino;
}
export interface QueryLSMDepositsResponseSDKType {
  deposits: LSMTokenDepositSDKType[];
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/stride.records.QueryParamsRequest",
  encode(_: QueryParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
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
  fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  toAmino(_: QueryParamsRequest): QueryParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest {
    return QueryParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest {
    return QueryParamsRequest.decode(message.value);
  },
  toProto(message: QueryParamsRequest): Uint8Array {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg {
    return {
      typeUrl: "/stride.records.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const QueryParamsResponse = {
  typeUrl: "/stride.records.QueryParamsResponse",
  encode(message: QueryParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: QueryParamsResponse): QueryParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse {
    return QueryParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message: QueryParamsResponse): Uint8Array {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
    return {
      typeUrl: "/stride.records.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetDepositRecordRequest(): QueryGetDepositRecordRequest {
  return {
    id: BigInt(0)
  };
}
export const QueryGetDepositRecordRequest = {
  typeUrl: "/stride.records.QueryGetDepositRecordRequest",
  encode(message: QueryGetDepositRecordRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetDepositRecordRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetDepositRecordRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGetDepositRecordRequest>): QueryGetDepositRecordRequest {
    const message = createBaseQueryGetDepositRecordRequest();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryGetDepositRecordRequestAmino): QueryGetDepositRecordRequest {
    const message = createBaseQueryGetDepositRecordRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: QueryGetDepositRecordRequest): QueryGetDepositRecordRequestAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetDepositRecordRequestAminoMsg): QueryGetDepositRecordRequest {
    return QueryGetDepositRecordRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetDepositRecordRequestProtoMsg): QueryGetDepositRecordRequest {
    return QueryGetDepositRecordRequest.decode(message.value);
  },
  toProto(message: QueryGetDepositRecordRequest): Uint8Array {
    return QueryGetDepositRecordRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetDepositRecordRequest): QueryGetDepositRecordRequestProtoMsg {
    return {
      typeUrl: "/stride.records.QueryGetDepositRecordRequest",
      value: QueryGetDepositRecordRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetDepositRecordResponse(): QueryGetDepositRecordResponse {
  return {
    depositRecord: DepositRecord.fromPartial({})
  };
}
export const QueryGetDepositRecordResponse = {
  typeUrl: "/stride.records.QueryGetDepositRecordResponse",
  encode(message: QueryGetDepositRecordResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.depositRecord !== undefined) {
      DepositRecord.encode(message.depositRecord, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetDepositRecordResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetDepositRecordResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.depositRecord = DepositRecord.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGetDepositRecordResponse>): QueryGetDepositRecordResponse {
    const message = createBaseQueryGetDepositRecordResponse();
    message.depositRecord = object.depositRecord !== undefined && object.depositRecord !== null ? DepositRecord.fromPartial(object.depositRecord) : undefined;
    return message;
  },
  fromAmino(object: QueryGetDepositRecordResponseAmino): QueryGetDepositRecordResponse {
    const message = createBaseQueryGetDepositRecordResponse();
    if (object.deposit_record !== undefined && object.deposit_record !== null) {
      message.depositRecord = DepositRecord.fromAmino(object.deposit_record);
    }
    return message;
  },
  toAmino(message: QueryGetDepositRecordResponse): QueryGetDepositRecordResponseAmino {
    const obj: any = {};
    obj.deposit_record = message.depositRecord ? DepositRecord.toAmino(message.depositRecord) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetDepositRecordResponseAminoMsg): QueryGetDepositRecordResponse {
    return QueryGetDepositRecordResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetDepositRecordResponseProtoMsg): QueryGetDepositRecordResponse {
    return QueryGetDepositRecordResponse.decode(message.value);
  },
  toProto(message: QueryGetDepositRecordResponse): Uint8Array {
    return QueryGetDepositRecordResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetDepositRecordResponse): QueryGetDepositRecordResponseProtoMsg {
    return {
      typeUrl: "/stride.records.QueryGetDepositRecordResponse",
      value: QueryGetDepositRecordResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllDepositRecordRequest(): QueryAllDepositRecordRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllDepositRecordRequest = {
  typeUrl: "/stride.records.QueryAllDepositRecordRequest",
  encode(message: QueryAllDepositRecordRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllDepositRecordRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllDepositRecordRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryAllDepositRecordRequest>): QueryAllDepositRecordRequest {
    const message = createBaseQueryAllDepositRecordRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllDepositRecordRequestAmino): QueryAllDepositRecordRequest {
    const message = createBaseQueryAllDepositRecordRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllDepositRecordRequest): QueryAllDepositRecordRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllDepositRecordRequestAminoMsg): QueryAllDepositRecordRequest {
    return QueryAllDepositRecordRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllDepositRecordRequestProtoMsg): QueryAllDepositRecordRequest {
    return QueryAllDepositRecordRequest.decode(message.value);
  },
  toProto(message: QueryAllDepositRecordRequest): Uint8Array {
    return QueryAllDepositRecordRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllDepositRecordRequest): QueryAllDepositRecordRequestProtoMsg {
    return {
      typeUrl: "/stride.records.QueryAllDepositRecordRequest",
      value: QueryAllDepositRecordRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllDepositRecordResponse(): QueryAllDepositRecordResponse {
  return {
    depositRecord: [],
    pagination: undefined
  };
}
export const QueryAllDepositRecordResponse = {
  typeUrl: "/stride.records.QueryAllDepositRecordResponse",
  encode(message: QueryAllDepositRecordResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.depositRecord) {
      DepositRecord.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllDepositRecordResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllDepositRecordResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.depositRecord.push(DepositRecord.decode(reader, reader.uint32()));
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
  fromPartial(object: Partial<QueryAllDepositRecordResponse>): QueryAllDepositRecordResponse {
    const message = createBaseQueryAllDepositRecordResponse();
    message.depositRecord = object.depositRecord?.map(e => DepositRecord.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllDepositRecordResponseAmino): QueryAllDepositRecordResponse {
    const message = createBaseQueryAllDepositRecordResponse();
    message.depositRecord = object.deposit_record?.map(e => DepositRecord.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllDepositRecordResponse): QueryAllDepositRecordResponseAmino {
    const obj: any = {};
    if (message.depositRecord) {
      obj.deposit_record = message.depositRecord.map(e => e ? DepositRecord.toAmino(e) : undefined);
    } else {
      obj.deposit_record = message.depositRecord;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllDepositRecordResponseAminoMsg): QueryAllDepositRecordResponse {
    return QueryAllDepositRecordResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllDepositRecordResponseProtoMsg): QueryAllDepositRecordResponse {
    return QueryAllDepositRecordResponse.decode(message.value);
  },
  toProto(message: QueryAllDepositRecordResponse): Uint8Array {
    return QueryAllDepositRecordResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllDepositRecordResponse): QueryAllDepositRecordResponseProtoMsg {
    return {
      typeUrl: "/stride.records.QueryAllDepositRecordResponse",
      value: QueryAllDepositRecordResponse.encode(message).finish()
    };
  }
};
function createBaseQueryDepositRecordByHostRequest(): QueryDepositRecordByHostRequest {
  return {
    hostZoneId: ""
  };
}
export const QueryDepositRecordByHostRequest = {
  typeUrl: "/stride.records.QueryDepositRecordByHostRequest",
  encode(message: QueryDepositRecordByHostRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.hostZoneId !== "") {
      writer.uint32(10).string(message.hostZoneId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDepositRecordByHostRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDepositRecordByHostRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hostZoneId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryDepositRecordByHostRequest>): QueryDepositRecordByHostRequest {
    const message = createBaseQueryDepositRecordByHostRequest();
    message.hostZoneId = object.hostZoneId ?? "";
    return message;
  },
  fromAmino(object: QueryDepositRecordByHostRequestAmino): QueryDepositRecordByHostRequest {
    const message = createBaseQueryDepositRecordByHostRequest();
    if (object.host_zone_id !== undefined && object.host_zone_id !== null) {
      message.hostZoneId = object.host_zone_id;
    }
    return message;
  },
  toAmino(message: QueryDepositRecordByHostRequest): QueryDepositRecordByHostRequestAmino {
    const obj: any = {};
    obj.host_zone_id = message.hostZoneId === "" ? undefined : message.hostZoneId;
    return obj;
  },
  fromAminoMsg(object: QueryDepositRecordByHostRequestAminoMsg): QueryDepositRecordByHostRequest {
    return QueryDepositRecordByHostRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDepositRecordByHostRequestProtoMsg): QueryDepositRecordByHostRequest {
    return QueryDepositRecordByHostRequest.decode(message.value);
  },
  toProto(message: QueryDepositRecordByHostRequest): Uint8Array {
    return QueryDepositRecordByHostRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDepositRecordByHostRequest): QueryDepositRecordByHostRequestProtoMsg {
    return {
      typeUrl: "/stride.records.QueryDepositRecordByHostRequest",
      value: QueryDepositRecordByHostRequest.encode(message).finish()
    };
  }
};
function createBaseQueryDepositRecordByHostResponse(): QueryDepositRecordByHostResponse {
  return {
    depositRecord: []
  };
}
export const QueryDepositRecordByHostResponse = {
  typeUrl: "/stride.records.QueryDepositRecordByHostResponse",
  encode(message: QueryDepositRecordByHostResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.depositRecord) {
      DepositRecord.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDepositRecordByHostResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDepositRecordByHostResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.depositRecord.push(DepositRecord.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryDepositRecordByHostResponse>): QueryDepositRecordByHostResponse {
    const message = createBaseQueryDepositRecordByHostResponse();
    message.depositRecord = object.depositRecord?.map(e => DepositRecord.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryDepositRecordByHostResponseAmino): QueryDepositRecordByHostResponse {
    const message = createBaseQueryDepositRecordByHostResponse();
    message.depositRecord = object.deposit_record?.map(e => DepositRecord.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryDepositRecordByHostResponse): QueryDepositRecordByHostResponseAmino {
    const obj: any = {};
    if (message.depositRecord) {
      obj.deposit_record = message.depositRecord.map(e => e ? DepositRecord.toAmino(e) : undefined);
    } else {
      obj.deposit_record = message.depositRecord;
    }
    return obj;
  },
  fromAminoMsg(object: QueryDepositRecordByHostResponseAminoMsg): QueryDepositRecordByHostResponse {
    return QueryDepositRecordByHostResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDepositRecordByHostResponseProtoMsg): QueryDepositRecordByHostResponse {
    return QueryDepositRecordByHostResponse.decode(message.value);
  },
  toProto(message: QueryDepositRecordByHostResponse): Uint8Array {
    return QueryDepositRecordByHostResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDepositRecordByHostResponse): QueryDepositRecordByHostResponseProtoMsg {
    return {
      typeUrl: "/stride.records.QueryDepositRecordByHostResponse",
      value: QueryDepositRecordByHostResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetUserRedemptionRecordRequest(): QueryGetUserRedemptionRecordRequest {
  return {
    id: ""
  };
}
export const QueryGetUserRedemptionRecordRequest = {
  typeUrl: "/stride.records.QueryGetUserRedemptionRecordRequest",
  encode(message: QueryGetUserRedemptionRecordRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetUserRedemptionRecordRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetUserRedemptionRecordRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGetUserRedemptionRecordRequest>): QueryGetUserRedemptionRecordRequest {
    const message = createBaseQueryGetUserRedemptionRecordRequest();
    message.id = object.id ?? "";
    return message;
  },
  fromAmino(object: QueryGetUserRedemptionRecordRequestAmino): QueryGetUserRedemptionRecordRequest {
    const message = createBaseQueryGetUserRedemptionRecordRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    return message;
  },
  toAmino(message: QueryGetUserRedemptionRecordRequest): QueryGetUserRedemptionRecordRequestAmino {
    const obj: any = {};
    obj.id = message.id === "" ? undefined : message.id;
    return obj;
  },
  fromAminoMsg(object: QueryGetUserRedemptionRecordRequestAminoMsg): QueryGetUserRedemptionRecordRequest {
    return QueryGetUserRedemptionRecordRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetUserRedemptionRecordRequestProtoMsg): QueryGetUserRedemptionRecordRequest {
    return QueryGetUserRedemptionRecordRequest.decode(message.value);
  },
  toProto(message: QueryGetUserRedemptionRecordRequest): Uint8Array {
    return QueryGetUserRedemptionRecordRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetUserRedemptionRecordRequest): QueryGetUserRedemptionRecordRequestProtoMsg {
    return {
      typeUrl: "/stride.records.QueryGetUserRedemptionRecordRequest",
      value: QueryGetUserRedemptionRecordRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetUserRedemptionRecordResponse(): QueryGetUserRedemptionRecordResponse {
  return {
    userRedemptionRecord: UserRedemptionRecord.fromPartial({})
  };
}
export const QueryGetUserRedemptionRecordResponse = {
  typeUrl: "/stride.records.QueryGetUserRedemptionRecordResponse",
  encode(message: QueryGetUserRedemptionRecordResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.userRedemptionRecord !== undefined) {
      UserRedemptionRecord.encode(message.userRedemptionRecord, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetUserRedemptionRecordResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetUserRedemptionRecordResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.userRedemptionRecord = UserRedemptionRecord.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGetUserRedemptionRecordResponse>): QueryGetUserRedemptionRecordResponse {
    const message = createBaseQueryGetUserRedemptionRecordResponse();
    message.userRedemptionRecord = object.userRedemptionRecord !== undefined && object.userRedemptionRecord !== null ? UserRedemptionRecord.fromPartial(object.userRedemptionRecord) : undefined;
    return message;
  },
  fromAmino(object: QueryGetUserRedemptionRecordResponseAmino): QueryGetUserRedemptionRecordResponse {
    const message = createBaseQueryGetUserRedemptionRecordResponse();
    if (object.user_redemption_record !== undefined && object.user_redemption_record !== null) {
      message.userRedemptionRecord = UserRedemptionRecord.fromAmino(object.user_redemption_record);
    }
    return message;
  },
  toAmino(message: QueryGetUserRedemptionRecordResponse): QueryGetUserRedemptionRecordResponseAmino {
    const obj: any = {};
    obj.user_redemption_record = message.userRedemptionRecord ? UserRedemptionRecord.toAmino(message.userRedemptionRecord) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetUserRedemptionRecordResponseAminoMsg): QueryGetUserRedemptionRecordResponse {
    return QueryGetUserRedemptionRecordResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetUserRedemptionRecordResponseProtoMsg): QueryGetUserRedemptionRecordResponse {
    return QueryGetUserRedemptionRecordResponse.decode(message.value);
  },
  toProto(message: QueryGetUserRedemptionRecordResponse): Uint8Array {
    return QueryGetUserRedemptionRecordResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetUserRedemptionRecordResponse): QueryGetUserRedemptionRecordResponseProtoMsg {
    return {
      typeUrl: "/stride.records.QueryGetUserRedemptionRecordResponse",
      value: QueryGetUserRedemptionRecordResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllUserRedemptionRecordRequest(): QueryAllUserRedemptionRecordRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllUserRedemptionRecordRequest = {
  typeUrl: "/stride.records.QueryAllUserRedemptionRecordRequest",
  encode(message: QueryAllUserRedemptionRecordRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllUserRedemptionRecordRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllUserRedemptionRecordRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryAllUserRedemptionRecordRequest>): QueryAllUserRedemptionRecordRequest {
    const message = createBaseQueryAllUserRedemptionRecordRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllUserRedemptionRecordRequestAmino): QueryAllUserRedemptionRecordRequest {
    const message = createBaseQueryAllUserRedemptionRecordRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllUserRedemptionRecordRequest): QueryAllUserRedemptionRecordRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllUserRedemptionRecordRequestAminoMsg): QueryAllUserRedemptionRecordRequest {
    return QueryAllUserRedemptionRecordRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllUserRedemptionRecordRequestProtoMsg): QueryAllUserRedemptionRecordRequest {
    return QueryAllUserRedemptionRecordRequest.decode(message.value);
  },
  toProto(message: QueryAllUserRedemptionRecordRequest): Uint8Array {
    return QueryAllUserRedemptionRecordRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllUserRedemptionRecordRequest): QueryAllUserRedemptionRecordRequestProtoMsg {
    return {
      typeUrl: "/stride.records.QueryAllUserRedemptionRecordRequest",
      value: QueryAllUserRedemptionRecordRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllUserRedemptionRecordResponse(): QueryAllUserRedemptionRecordResponse {
  return {
    userRedemptionRecord: [],
    pagination: undefined
  };
}
export const QueryAllUserRedemptionRecordResponse = {
  typeUrl: "/stride.records.QueryAllUserRedemptionRecordResponse",
  encode(message: QueryAllUserRedemptionRecordResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.userRedemptionRecord) {
      UserRedemptionRecord.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllUserRedemptionRecordResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllUserRedemptionRecordResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.userRedemptionRecord.push(UserRedemptionRecord.decode(reader, reader.uint32()));
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
  fromPartial(object: Partial<QueryAllUserRedemptionRecordResponse>): QueryAllUserRedemptionRecordResponse {
    const message = createBaseQueryAllUserRedemptionRecordResponse();
    message.userRedemptionRecord = object.userRedemptionRecord?.map(e => UserRedemptionRecord.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllUserRedemptionRecordResponseAmino): QueryAllUserRedemptionRecordResponse {
    const message = createBaseQueryAllUserRedemptionRecordResponse();
    message.userRedemptionRecord = object.user_redemption_record?.map(e => UserRedemptionRecord.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllUserRedemptionRecordResponse): QueryAllUserRedemptionRecordResponseAmino {
    const obj: any = {};
    if (message.userRedemptionRecord) {
      obj.user_redemption_record = message.userRedemptionRecord.map(e => e ? UserRedemptionRecord.toAmino(e) : undefined);
    } else {
      obj.user_redemption_record = message.userRedemptionRecord;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllUserRedemptionRecordResponseAminoMsg): QueryAllUserRedemptionRecordResponse {
    return QueryAllUserRedemptionRecordResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllUserRedemptionRecordResponseProtoMsg): QueryAllUserRedemptionRecordResponse {
    return QueryAllUserRedemptionRecordResponse.decode(message.value);
  },
  toProto(message: QueryAllUserRedemptionRecordResponse): Uint8Array {
    return QueryAllUserRedemptionRecordResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllUserRedemptionRecordResponse): QueryAllUserRedemptionRecordResponseProtoMsg {
    return {
      typeUrl: "/stride.records.QueryAllUserRedemptionRecordResponse",
      value: QueryAllUserRedemptionRecordResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllUserRedemptionRecordForUserRequest(): QueryAllUserRedemptionRecordForUserRequest {
  return {
    chainId: "",
    day: BigInt(0),
    address: "",
    limit: BigInt(0),
    pagination: undefined
  };
}
export const QueryAllUserRedemptionRecordForUserRequest = {
  typeUrl: "/stride.records.QueryAllUserRedemptionRecordForUserRequest",
  encode(message: QueryAllUserRedemptionRecordForUserRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }
    if (message.day !== BigInt(0)) {
      writer.uint32(16).uint64(message.day);
    }
    if (message.address !== "") {
      writer.uint32(26).string(message.address);
    }
    if (message.limit !== BigInt(0)) {
      writer.uint32(32).uint64(message.limit);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllUserRedemptionRecordForUserRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllUserRedemptionRecordForUserRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chainId = reader.string();
          break;
        case 2:
          message.day = reader.uint64();
          break;
        case 3:
          message.address = reader.string();
          break;
        case 4:
          message.limit = reader.uint64();
          break;
        case 5:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryAllUserRedemptionRecordForUserRequest>): QueryAllUserRedemptionRecordForUserRequest {
    const message = createBaseQueryAllUserRedemptionRecordForUserRequest();
    message.chainId = object.chainId ?? "";
    message.day = object.day !== undefined && object.day !== null ? BigInt(object.day.toString()) : BigInt(0);
    message.address = object.address ?? "";
    message.limit = object.limit !== undefined && object.limit !== null ? BigInt(object.limit.toString()) : BigInt(0);
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllUserRedemptionRecordForUserRequestAmino): QueryAllUserRedemptionRecordForUserRequest {
    const message = createBaseQueryAllUserRedemptionRecordForUserRequest();
    if (object.chain_id !== undefined && object.chain_id !== null) {
      message.chainId = object.chain_id;
    }
    if (object.day !== undefined && object.day !== null) {
      message.day = BigInt(object.day);
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.limit !== undefined && object.limit !== null) {
      message.limit = BigInt(object.limit);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllUserRedemptionRecordForUserRequest): QueryAllUserRedemptionRecordForUserRequestAmino {
    const obj: any = {};
    obj.chain_id = message.chainId === "" ? undefined : message.chainId;
    obj.day = message.day !== BigInt(0) ? message.day?.toString() : undefined;
    obj.address = message.address === "" ? undefined : message.address;
    obj.limit = message.limit !== BigInt(0) ? message.limit?.toString() : undefined;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllUserRedemptionRecordForUserRequestAminoMsg): QueryAllUserRedemptionRecordForUserRequest {
    return QueryAllUserRedemptionRecordForUserRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllUserRedemptionRecordForUserRequestProtoMsg): QueryAllUserRedemptionRecordForUserRequest {
    return QueryAllUserRedemptionRecordForUserRequest.decode(message.value);
  },
  toProto(message: QueryAllUserRedemptionRecordForUserRequest): Uint8Array {
    return QueryAllUserRedemptionRecordForUserRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllUserRedemptionRecordForUserRequest): QueryAllUserRedemptionRecordForUserRequestProtoMsg {
    return {
      typeUrl: "/stride.records.QueryAllUserRedemptionRecordForUserRequest",
      value: QueryAllUserRedemptionRecordForUserRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllUserRedemptionRecordForUserResponse(): QueryAllUserRedemptionRecordForUserResponse {
  return {
    userRedemptionRecord: [],
    pagination: undefined
  };
}
export const QueryAllUserRedemptionRecordForUserResponse = {
  typeUrl: "/stride.records.QueryAllUserRedemptionRecordForUserResponse",
  encode(message: QueryAllUserRedemptionRecordForUserResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.userRedemptionRecord) {
      UserRedemptionRecord.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllUserRedemptionRecordForUserResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllUserRedemptionRecordForUserResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.userRedemptionRecord.push(UserRedemptionRecord.decode(reader, reader.uint32()));
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
  fromPartial(object: Partial<QueryAllUserRedemptionRecordForUserResponse>): QueryAllUserRedemptionRecordForUserResponse {
    const message = createBaseQueryAllUserRedemptionRecordForUserResponse();
    message.userRedemptionRecord = object.userRedemptionRecord?.map(e => UserRedemptionRecord.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllUserRedemptionRecordForUserResponseAmino): QueryAllUserRedemptionRecordForUserResponse {
    const message = createBaseQueryAllUserRedemptionRecordForUserResponse();
    message.userRedemptionRecord = object.user_redemption_record?.map(e => UserRedemptionRecord.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllUserRedemptionRecordForUserResponse): QueryAllUserRedemptionRecordForUserResponseAmino {
    const obj: any = {};
    if (message.userRedemptionRecord) {
      obj.user_redemption_record = message.userRedemptionRecord.map(e => e ? UserRedemptionRecord.toAmino(e) : undefined);
    } else {
      obj.user_redemption_record = message.userRedemptionRecord;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllUserRedemptionRecordForUserResponseAminoMsg): QueryAllUserRedemptionRecordForUserResponse {
    return QueryAllUserRedemptionRecordForUserResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllUserRedemptionRecordForUserResponseProtoMsg): QueryAllUserRedemptionRecordForUserResponse {
    return QueryAllUserRedemptionRecordForUserResponse.decode(message.value);
  },
  toProto(message: QueryAllUserRedemptionRecordForUserResponse): Uint8Array {
    return QueryAllUserRedemptionRecordForUserResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllUserRedemptionRecordForUserResponse): QueryAllUserRedemptionRecordForUserResponseProtoMsg {
    return {
      typeUrl: "/stride.records.QueryAllUserRedemptionRecordForUserResponse",
      value: QueryAllUserRedemptionRecordForUserResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetEpochUnbondingRecordRequest(): QueryGetEpochUnbondingRecordRequest {
  return {
    epochNumber: BigInt(0)
  };
}
export const QueryGetEpochUnbondingRecordRequest = {
  typeUrl: "/stride.records.QueryGetEpochUnbondingRecordRequest",
  encode(message: QueryGetEpochUnbondingRecordRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.epochNumber !== BigInt(0)) {
      writer.uint32(8).uint64(message.epochNumber);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetEpochUnbondingRecordRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetEpochUnbondingRecordRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.epochNumber = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGetEpochUnbondingRecordRequest>): QueryGetEpochUnbondingRecordRequest {
    const message = createBaseQueryGetEpochUnbondingRecordRequest();
    message.epochNumber = object.epochNumber !== undefined && object.epochNumber !== null ? BigInt(object.epochNumber.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryGetEpochUnbondingRecordRequestAmino): QueryGetEpochUnbondingRecordRequest {
    const message = createBaseQueryGetEpochUnbondingRecordRequest();
    if (object.epoch_number !== undefined && object.epoch_number !== null) {
      message.epochNumber = BigInt(object.epoch_number);
    }
    return message;
  },
  toAmino(message: QueryGetEpochUnbondingRecordRequest): QueryGetEpochUnbondingRecordRequestAmino {
    const obj: any = {};
    obj.epoch_number = message.epochNumber !== BigInt(0) ? message.epochNumber?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetEpochUnbondingRecordRequestAminoMsg): QueryGetEpochUnbondingRecordRequest {
    return QueryGetEpochUnbondingRecordRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetEpochUnbondingRecordRequestProtoMsg): QueryGetEpochUnbondingRecordRequest {
    return QueryGetEpochUnbondingRecordRequest.decode(message.value);
  },
  toProto(message: QueryGetEpochUnbondingRecordRequest): Uint8Array {
    return QueryGetEpochUnbondingRecordRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetEpochUnbondingRecordRequest): QueryGetEpochUnbondingRecordRequestProtoMsg {
    return {
      typeUrl: "/stride.records.QueryGetEpochUnbondingRecordRequest",
      value: QueryGetEpochUnbondingRecordRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetEpochUnbondingRecordResponse(): QueryGetEpochUnbondingRecordResponse {
  return {
    epochUnbondingRecord: EpochUnbondingRecord.fromPartial({})
  };
}
export const QueryGetEpochUnbondingRecordResponse = {
  typeUrl: "/stride.records.QueryGetEpochUnbondingRecordResponse",
  encode(message: QueryGetEpochUnbondingRecordResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.epochUnbondingRecord !== undefined) {
      EpochUnbondingRecord.encode(message.epochUnbondingRecord, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetEpochUnbondingRecordResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetEpochUnbondingRecordResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.epochUnbondingRecord = EpochUnbondingRecord.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGetEpochUnbondingRecordResponse>): QueryGetEpochUnbondingRecordResponse {
    const message = createBaseQueryGetEpochUnbondingRecordResponse();
    message.epochUnbondingRecord = object.epochUnbondingRecord !== undefined && object.epochUnbondingRecord !== null ? EpochUnbondingRecord.fromPartial(object.epochUnbondingRecord) : undefined;
    return message;
  },
  fromAmino(object: QueryGetEpochUnbondingRecordResponseAmino): QueryGetEpochUnbondingRecordResponse {
    const message = createBaseQueryGetEpochUnbondingRecordResponse();
    if (object.epoch_unbonding_record !== undefined && object.epoch_unbonding_record !== null) {
      message.epochUnbondingRecord = EpochUnbondingRecord.fromAmino(object.epoch_unbonding_record);
    }
    return message;
  },
  toAmino(message: QueryGetEpochUnbondingRecordResponse): QueryGetEpochUnbondingRecordResponseAmino {
    const obj: any = {};
    obj.epoch_unbonding_record = message.epochUnbondingRecord ? EpochUnbondingRecord.toAmino(message.epochUnbondingRecord) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetEpochUnbondingRecordResponseAminoMsg): QueryGetEpochUnbondingRecordResponse {
    return QueryGetEpochUnbondingRecordResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetEpochUnbondingRecordResponseProtoMsg): QueryGetEpochUnbondingRecordResponse {
    return QueryGetEpochUnbondingRecordResponse.decode(message.value);
  },
  toProto(message: QueryGetEpochUnbondingRecordResponse): Uint8Array {
    return QueryGetEpochUnbondingRecordResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetEpochUnbondingRecordResponse): QueryGetEpochUnbondingRecordResponseProtoMsg {
    return {
      typeUrl: "/stride.records.QueryGetEpochUnbondingRecordResponse",
      value: QueryGetEpochUnbondingRecordResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllEpochUnbondingRecordRequest(): QueryAllEpochUnbondingRecordRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllEpochUnbondingRecordRequest = {
  typeUrl: "/stride.records.QueryAllEpochUnbondingRecordRequest",
  encode(message: QueryAllEpochUnbondingRecordRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllEpochUnbondingRecordRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllEpochUnbondingRecordRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryAllEpochUnbondingRecordRequest>): QueryAllEpochUnbondingRecordRequest {
    const message = createBaseQueryAllEpochUnbondingRecordRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllEpochUnbondingRecordRequestAmino): QueryAllEpochUnbondingRecordRequest {
    const message = createBaseQueryAllEpochUnbondingRecordRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllEpochUnbondingRecordRequest): QueryAllEpochUnbondingRecordRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllEpochUnbondingRecordRequestAminoMsg): QueryAllEpochUnbondingRecordRequest {
    return QueryAllEpochUnbondingRecordRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllEpochUnbondingRecordRequestProtoMsg): QueryAllEpochUnbondingRecordRequest {
    return QueryAllEpochUnbondingRecordRequest.decode(message.value);
  },
  toProto(message: QueryAllEpochUnbondingRecordRequest): Uint8Array {
    return QueryAllEpochUnbondingRecordRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllEpochUnbondingRecordRequest): QueryAllEpochUnbondingRecordRequestProtoMsg {
    return {
      typeUrl: "/stride.records.QueryAllEpochUnbondingRecordRequest",
      value: QueryAllEpochUnbondingRecordRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllEpochUnbondingRecordResponse(): QueryAllEpochUnbondingRecordResponse {
  return {
    epochUnbondingRecord: [],
    pagination: undefined
  };
}
export const QueryAllEpochUnbondingRecordResponse = {
  typeUrl: "/stride.records.QueryAllEpochUnbondingRecordResponse",
  encode(message: QueryAllEpochUnbondingRecordResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.epochUnbondingRecord) {
      EpochUnbondingRecord.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllEpochUnbondingRecordResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllEpochUnbondingRecordResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.epochUnbondingRecord.push(EpochUnbondingRecord.decode(reader, reader.uint32()));
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
  fromPartial(object: Partial<QueryAllEpochUnbondingRecordResponse>): QueryAllEpochUnbondingRecordResponse {
    const message = createBaseQueryAllEpochUnbondingRecordResponse();
    message.epochUnbondingRecord = object.epochUnbondingRecord?.map(e => EpochUnbondingRecord.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllEpochUnbondingRecordResponseAmino): QueryAllEpochUnbondingRecordResponse {
    const message = createBaseQueryAllEpochUnbondingRecordResponse();
    message.epochUnbondingRecord = object.epoch_unbonding_record?.map(e => EpochUnbondingRecord.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllEpochUnbondingRecordResponse): QueryAllEpochUnbondingRecordResponseAmino {
    const obj: any = {};
    if (message.epochUnbondingRecord) {
      obj.epoch_unbonding_record = message.epochUnbondingRecord.map(e => e ? EpochUnbondingRecord.toAmino(e) : undefined);
    } else {
      obj.epoch_unbonding_record = message.epochUnbondingRecord;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllEpochUnbondingRecordResponseAminoMsg): QueryAllEpochUnbondingRecordResponse {
    return QueryAllEpochUnbondingRecordResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllEpochUnbondingRecordResponseProtoMsg): QueryAllEpochUnbondingRecordResponse {
    return QueryAllEpochUnbondingRecordResponse.decode(message.value);
  },
  toProto(message: QueryAllEpochUnbondingRecordResponse): Uint8Array {
    return QueryAllEpochUnbondingRecordResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllEpochUnbondingRecordResponse): QueryAllEpochUnbondingRecordResponseProtoMsg {
    return {
      typeUrl: "/stride.records.QueryAllEpochUnbondingRecordResponse",
      value: QueryAllEpochUnbondingRecordResponse.encode(message).finish()
    };
  }
};
function createBaseQueryLSMDepositRequest(): QueryLSMDepositRequest {
  return {
    chainId: "",
    denom: ""
  };
}
export const QueryLSMDepositRequest = {
  typeUrl: "/stride.records.QueryLSMDepositRequest",
  encode(message: QueryLSMDepositRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryLSMDepositRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLSMDepositRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chainId = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryLSMDepositRequest>): QueryLSMDepositRequest {
    const message = createBaseQueryLSMDepositRequest();
    message.chainId = object.chainId ?? "";
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: QueryLSMDepositRequestAmino): QueryLSMDepositRequest {
    const message = createBaseQueryLSMDepositRequest();
    if (object.chain_id !== undefined && object.chain_id !== null) {
      message.chainId = object.chain_id;
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: QueryLSMDepositRequest): QueryLSMDepositRequestAmino {
    const obj: any = {};
    obj.chain_id = message.chainId === "" ? undefined : message.chainId;
    obj.denom = message.denom === "" ? undefined : message.denom;
    return obj;
  },
  fromAminoMsg(object: QueryLSMDepositRequestAminoMsg): QueryLSMDepositRequest {
    return QueryLSMDepositRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryLSMDepositRequestProtoMsg): QueryLSMDepositRequest {
    return QueryLSMDepositRequest.decode(message.value);
  },
  toProto(message: QueryLSMDepositRequest): Uint8Array {
    return QueryLSMDepositRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryLSMDepositRequest): QueryLSMDepositRequestProtoMsg {
    return {
      typeUrl: "/stride.records.QueryLSMDepositRequest",
      value: QueryLSMDepositRequest.encode(message).finish()
    };
  }
};
function createBaseQueryLSMDepositResponse(): QueryLSMDepositResponse {
  return {
    deposit: LSMTokenDeposit.fromPartial({})
  };
}
export const QueryLSMDepositResponse = {
  typeUrl: "/stride.records.QueryLSMDepositResponse",
  encode(message: QueryLSMDepositResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.deposit !== undefined) {
      LSMTokenDeposit.encode(message.deposit, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryLSMDepositResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLSMDepositResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.deposit = LSMTokenDeposit.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryLSMDepositResponse>): QueryLSMDepositResponse {
    const message = createBaseQueryLSMDepositResponse();
    message.deposit = object.deposit !== undefined && object.deposit !== null ? LSMTokenDeposit.fromPartial(object.deposit) : undefined;
    return message;
  },
  fromAmino(object: QueryLSMDepositResponseAmino): QueryLSMDepositResponse {
    const message = createBaseQueryLSMDepositResponse();
    if (object.deposit !== undefined && object.deposit !== null) {
      message.deposit = LSMTokenDeposit.fromAmino(object.deposit);
    }
    return message;
  },
  toAmino(message: QueryLSMDepositResponse): QueryLSMDepositResponseAmino {
    const obj: any = {};
    obj.deposit = message.deposit ? LSMTokenDeposit.toAmino(message.deposit) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryLSMDepositResponseAminoMsg): QueryLSMDepositResponse {
    return QueryLSMDepositResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryLSMDepositResponseProtoMsg): QueryLSMDepositResponse {
    return QueryLSMDepositResponse.decode(message.value);
  },
  toProto(message: QueryLSMDepositResponse): Uint8Array {
    return QueryLSMDepositResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryLSMDepositResponse): QueryLSMDepositResponseProtoMsg {
    return {
      typeUrl: "/stride.records.QueryLSMDepositResponse",
      value: QueryLSMDepositResponse.encode(message).finish()
    };
  }
};
function createBaseQueryLSMDepositsRequest(): QueryLSMDepositsRequest {
  return {
    chainId: "",
    validatorAddress: "",
    status: ""
  };
}
export const QueryLSMDepositsRequest = {
  typeUrl: "/stride.records.QueryLSMDepositsRequest",
  encode(message: QueryLSMDepositsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }
    if (message.validatorAddress !== "") {
      writer.uint32(18).string(message.validatorAddress);
    }
    if (message.status !== "") {
      writer.uint32(26).string(message.status);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryLSMDepositsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLSMDepositsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chainId = reader.string();
          break;
        case 2:
          message.validatorAddress = reader.string();
          break;
        case 3:
          message.status = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryLSMDepositsRequest>): QueryLSMDepositsRequest {
    const message = createBaseQueryLSMDepositsRequest();
    message.chainId = object.chainId ?? "";
    message.validatorAddress = object.validatorAddress ?? "";
    message.status = object.status ?? "";
    return message;
  },
  fromAmino(object: QueryLSMDepositsRequestAmino): QueryLSMDepositsRequest {
    const message = createBaseQueryLSMDepositsRequest();
    if (object.chain_id !== undefined && object.chain_id !== null) {
      message.chainId = object.chain_id;
    }
    if (object.validator_address !== undefined && object.validator_address !== null) {
      message.validatorAddress = object.validator_address;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    return message;
  },
  toAmino(message: QueryLSMDepositsRequest): QueryLSMDepositsRequestAmino {
    const obj: any = {};
    obj.chain_id = message.chainId === "" ? undefined : message.chainId;
    obj.validator_address = message.validatorAddress === "" ? undefined : message.validatorAddress;
    obj.status = message.status === "" ? undefined : message.status;
    return obj;
  },
  fromAminoMsg(object: QueryLSMDepositsRequestAminoMsg): QueryLSMDepositsRequest {
    return QueryLSMDepositsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryLSMDepositsRequestProtoMsg): QueryLSMDepositsRequest {
    return QueryLSMDepositsRequest.decode(message.value);
  },
  toProto(message: QueryLSMDepositsRequest): Uint8Array {
    return QueryLSMDepositsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryLSMDepositsRequest): QueryLSMDepositsRequestProtoMsg {
    return {
      typeUrl: "/stride.records.QueryLSMDepositsRequest",
      value: QueryLSMDepositsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryLSMDepositsResponse(): QueryLSMDepositsResponse {
  return {
    deposits: []
  };
}
export const QueryLSMDepositsResponse = {
  typeUrl: "/stride.records.QueryLSMDepositsResponse",
  encode(message: QueryLSMDepositsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.deposits) {
      LSMTokenDeposit.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryLSMDepositsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLSMDepositsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.deposits.push(LSMTokenDeposit.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryLSMDepositsResponse>): QueryLSMDepositsResponse {
    const message = createBaseQueryLSMDepositsResponse();
    message.deposits = object.deposits?.map(e => LSMTokenDeposit.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryLSMDepositsResponseAmino): QueryLSMDepositsResponse {
    const message = createBaseQueryLSMDepositsResponse();
    message.deposits = object.deposits?.map(e => LSMTokenDeposit.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryLSMDepositsResponse): QueryLSMDepositsResponseAmino {
    const obj: any = {};
    if (message.deposits) {
      obj.deposits = message.deposits.map(e => e ? LSMTokenDeposit.toAmino(e) : undefined);
    } else {
      obj.deposits = message.deposits;
    }
    return obj;
  },
  fromAminoMsg(object: QueryLSMDepositsResponseAminoMsg): QueryLSMDepositsResponse {
    return QueryLSMDepositsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryLSMDepositsResponseProtoMsg): QueryLSMDepositsResponse {
    return QueryLSMDepositsResponse.decode(message.value);
  },
  toProto(message: QueryLSMDepositsResponse): Uint8Array {
    return QueryLSMDepositsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryLSMDepositsResponse): QueryLSMDepositsResponseProtoMsg {
    return {
      typeUrl: "/stride.records.QueryLSMDepositsResponse",
      value: QueryLSMDepositsResponse.encode(message).finish()
    };
  }
};