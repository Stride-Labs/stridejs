import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { DepositRecord, DepositRecordAmino, DepositRecordSDKType, UserRedemptionRecord, UserRedemptionRecordAmino, UserRedemptionRecordSDKType, EpochUnbondingRecord, EpochUnbondingRecordAmino, EpochUnbondingRecordSDKType, LSMTokenDeposit, LSMTokenDepositAmino, LSMTokenDepositSDKType } from "./records";
import { BinaryReader, BinaryWriter } from "../../binary";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
export interface QueryParamsRequestProtoMsg {
    typeUrl: "/stride.records.QueryParamsRequest";
    value: Uint8Array;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {
}
export interface QueryParamsRequestAminoMsg {
    type: "/stride.records.QueryParamsRequest";
    value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {
}
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
export declare const QueryParamsRequest: {
    typeUrl: string;
    encode(_: QueryParamsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest;
    fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest;
    fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest;
    toAmino(_: QueryParamsRequest): QueryParamsRequestAmino;
    fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest;
    fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest;
    toProto(message: QueryParamsRequest): Uint8Array;
    toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg;
};
export declare const QueryParamsResponse: {
    typeUrl: string;
    encode(message: QueryParamsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse;
    fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse;
    fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse;
    toAmino(message: QueryParamsResponse): QueryParamsResponseAmino;
    fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse;
    fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse;
    toProto(message: QueryParamsResponse): Uint8Array;
    toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg;
};
export declare const QueryGetDepositRecordRequest: {
    typeUrl: string;
    encode(message: QueryGetDepositRecordRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryGetDepositRecordRequest;
    fromPartial(object: Partial<QueryGetDepositRecordRequest>): QueryGetDepositRecordRequest;
    fromAmino(object: QueryGetDepositRecordRequestAmino): QueryGetDepositRecordRequest;
    toAmino(message: QueryGetDepositRecordRequest): QueryGetDepositRecordRequestAmino;
    fromAminoMsg(object: QueryGetDepositRecordRequestAminoMsg): QueryGetDepositRecordRequest;
    fromProtoMsg(message: QueryGetDepositRecordRequestProtoMsg): QueryGetDepositRecordRequest;
    toProto(message: QueryGetDepositRecordRequest): Uint8Array;
    toProtoMsg(message: QueryGetDepositRecordRequest): QueryGetDepositRecordRequestProtoMsg;
};
export declare const QueryGetDepositRecordResponse: {
    typeUrl: string;
    encode(message: QueryGetDepositRecordResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryGetDepositRecordResponse;
    fromPartial(object: Partial<QueryGetDepositRecordResponse>): QueryGetDepositRecordResponse;
    fromAmino(object: QueryGetDepositRecordResponseAmino): QueryGetDepositRecordResponse;
    toAmino(message: QueryGetDepositRecordResponse): QueryGetDepositRecordResponseAmino;
    fromAminoMsg(object: QueryGetDepositRecordResponseAminoMsg): QueryGetDepositRecordResponse;
    fromProtoMsg(message: QueryGetDepositRecordResponseProtoMsg): QueryGetDepositRecordResponse;
    toProto(message: QueryGetDepositRecordResponse): Uint8Array;
    toProtoMsg(message: QueryGetDepositRecordResponse): QueryGetDepositRecordResponseProtoMsg;
};
export declare const QueryAllDepositRecordRequest: {
    typeUrl: string;
    encode(message: QueryAllDepositRecordRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAllDepositRecordRequest;
    fromPartial(object: Partial<QueryAllDepositRecordRequest>): QueryAllDepositRecordRequest;
    fromAmino(object: QueryAllDepositRecordRequestAmino): QueryAllDepositRecordRequest;
    toAmino(message: QueryAllDepositRecordRequest): QueryAllDepositRecordRequestAmino;
    fromAminoMsg(object: QueryAllDepositRecordRequestAminoMsg): QueryAllDepositRecordRequest;
    fromProtoMsg(message: QueryAllDepositRecordRequestProtoMsg): QueryAllDepositRecordRequest;
    toProto(message: QueryAllDepositRecordRequest): Uint8Array;
    toProtoMsg(message: QueryAllDepositRecordRequest): QueryAllDepositRecordRequestProtoMsg;
};
export declare const QueryAllDepositRecordResponse: {
    typeUrl: string;
    encode(message: QueryAllDepositRecordResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAllDepositRecordResponse;
    fromPartial(object: Partial<QueryAllDepositRecordResponse>): QueryAllDepositRecordResponse;
    fromAmino(object: QueryAllDepositRecordResponseAmino): QueryAllDepositRecordResponse;
    toAmino(message: QueryAllDepositRecordResponse): QueryAllDepositRecordResponseAmino;
    fromAminoMsg(object: QueryAllDepositRecordResponseAminoMsg): QueryAllDepositRecordResponse;
    fromProtoMsg(message: QueryAllDepositRecordResponseProtoMsg): QueryAllDepositRecordResponse;
    toProto(message: QueryAllDepositRecordResponse): Uint8Array;
    toProtoMsg(message: QueryAllDepositRecordResponse): QueryAllDepositRecordResponseProtoMsg;
};
export declare const QueryDepositRecordByHostRequest: {
    typeUrl: string;
    encode(message: QueryDepositRecordByHostRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDepositRecordByHostRequest;
    fromPartial(object: Partial<QueryDepositRecordByHostRequest>): QueryDepositRecordByHostRequest;
    fromAmino(object: QueryDepositRecordByHostRequestAmino): QueryDepositRecordByHostRequest;
    toAmino(message: QueryDepositRecordByHostRequest): QueryDepositRecordByHostRequestAmino;
    fromAminoMsg(object: QueryDepositRecordByHostRequestAminoMsg): QueryDepositRecordByHostRequest;
    fromProtoMsg(message: QueryDepositRecordByHostRequestProtoMsg): QueryDepositRecordByHostRequest;
    toProto(message: QueryDepositRecordByHostRequest): Uint8Array;
    toProtoMsg(message: QueryDepositRecordByHostRequest): QueryDepositRecordByHostRequestProtoMsg;
};
export declare const QueryDepositRecordByHostResponse: {
    typeUrl: string;
    encode(message: QueryDepositRecordByHostResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDepositRecordByHostResponse;
    fromPartial(object: Partial<QueryDepositRecordByHostResponse>): QueryDepositRecordByHostResponse;
    fromAmino(object: QueryDepositRecordByHostResponseAmino): QueryDepositRecordByHostResponse;
    toAmino(message: QueryDepositRecordByHostResponse): QueryDepositRecordByHostResponseAmino;
    fromAminoMsg(object: QueryDepositRecordByHostResponseAminoMsg): QueryDepositRecordByHostResponse;
    fromProtoMsg(message: QueryDepositRecordByHostResponseProtoMsg): QueryDepositRecordByHostResponse;
    toProto(message: QueryDepositRecordByHostResponse): Uint8Array;
    toProtoMsg(message: QueryDepositRecordByHostResponse): QueryDepositRecordByHostResponseProtoMsg;
};
export declare const QueryGetUserRedemptionRecordRequest: {
    typeUrl: string;
    encode(message: QueryGetUserRedemptionRecordRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryGetUserRedemptionRecordRequest;
    fromPartial(object: Partial<QueryGetUserRedemptionRecordRequest>): QueryGetUserRedemptionRecordRequest;
    fromAmino(object: QueryGetUserRedemptionRecordRequestAmino): QueryGetUserRedemptionRecordRequest;
    toAmino(message: QueryGetUserRedemptionRecordRequest): QueryGetUserRedemptionRecordRequestAmino;
    fromAminoMsg(object: QueryGetUserRedemptionRecordRequestAminoMsg): QueryGetUserRedemptionRecordRequest;
    fromProtoMsg(message: QueryGetUserRedemptionRecordRequestProtoMsg): QueryGetUserRedemptionRecordRequest;
    toProto(message: QueryGetUserRedemptionRecordRequest): Uint8Array;
    toProtoMsg(message: QueryGetUserRedemptionRecordRequest): QueryGetUserRedemptionRecordRequestProtoMsg;
};
export declare const QueryGetUserRedemptionRecordResponse: {
    typeUrl: string;
    encode(message: QueryGetUserRedemptionRecordResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryGetUserRedemptionRecordResponse;
    fromPartial(object: Partial<QueryGetUserRedemptionRecordResponse>): QueryGetUserRedemptionRecordResponse;
    fromAmino(object: QueryGetUserRedemptionRecordResponseAmino): QueryGetUserRedemptionRecordResponse;
    toAmino(message: QueryGetUserRedemptionRecordResponse): QueryGetUserRedemptionRecordResponseAmino;
    fromAminoMsg(object: QueryGetUserRedemptionRecordResponseAminoMsg): QueryGetUserRedemptionRecordResponse;
    fromProtoMsg(message: QueryGetUserRedemptionRecordResponseProtoMsg): QueryGetUserRedemptionRecordResponse;
    toProto(message: QueryGetUserRedemptionRecordResponse): Uint8Array;
    toProtoMsg(message: QueryGetUserRedemptionRecordResponse): QueryGetUserRedemptionRecordResponseProtoMsg;
};
export declare const QueryAllUserRedemptionRecordRequest: {
    typeUrl: string;
    encode(message: QueryAllUserRedemptionRecordRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAllUserRedemptionRecordRequest;
    fromPartial(object: Partial<QueryAllUserRedemptionRecordRequest>): QueryAllUserRedemptionRecordRequest;
    fromAmino(object: QueryAllUserRedemptionRecordRequestAmino): QueryAllUserRedemptionRecordRequest;
    toAmino(message: QueryAllUserRedemptionRecordRequest): QueryAllUserRedemptionRecordRequestAmino;
    fromAminoMsg(object: QueryAllUserRedemptionRecordRequestAminoMsg): QueryAllUserRedemptionRecordRequest;
    fromProtoMsg(message: QueryAllUserRedemptionRecordRequestProtoMsg): QueryAllUserRedemptionRecordRequest;
    toProto(message: QueryAllUserRedemptionRecordRequest): Uint8Array;
    toProtoMsg(message: QueryAllUserRedemptionRecordRequest): QueryAllUserRedemptionRecordRequestProtoMsg;
};
export declare const QueryAllUserRedemptionRecordResponse: {
    typeUrl: string;
    encode(message: QueryAllUserRedemptionRecordResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAllUserRedemptionRecordResponse;
    fromPartial(object: Partial<QueryAllUserRedemptionRecordResponse>): QueryAllUserRedemptionRecordResponse;
    fromAmino(object: QueryAllUserRedemptionRecordResponseAmino): QueryAllUserRedemptionRecordResponse;
    toAmino(message: QueryAllUserRedemptionRecordResponse): QueryAllUserRedemptionRecordResponseAmino;
    fromAminoMsg(object: QueryAllUserRedemptionRecordResponseAminoMsg): QueryAllUserRedemptionRecordResponse;
    fromProtoMsg(message: QueryAllUserRedemptionRecordResponseProtoMsg): QueryAllUserRedemptionRecordResponse;
    toProto(message: QueryAllUserRedemptionRecordResponse): Uint8Array;
    toProtoMsg(message: QueryAllUserRedemptionRecordResponse): QueryAllUserRedemptionRecordResponseProtoMsg;
};
export declare const QueryAllUserRedemptionRecordForUserRequest: {
    typeUrl: string;
    encode(message: QueryAllUserRedemptionRecordForUserRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAllUserRedemptionRecordForUserRequest;
    fromPartial(object: Partial<QueryAllUserRedemptionRecordForUserRequest>): QueryAllUserRedemptionRecordForUserRequest;
    fromAmino(object: QueryAllUserRedemptionRecordForUserRequestAmino): QueryAllUserRedemptionRecordForUserRequest;
    toAmino(message: QueryAllUserRedemptionRecordForUserRequest): QueryAllUserRedemptionRecordForUserRequestAmino;
    fromAminoMsg(object: QueryAllUserRedemptionRecordForUserRequestAminoMsg): QueryAllUserRedemptionRecordForUserRequest;
    fromProtoMsg(message: QueryAllUserRedemptionRecordForUserRequestProtoMsg): QueryAllUserRedemptionRecordForUserRequest;
    toProto(message: QueryAllUserRedemptionRecordForUserRequest): Uint8Array;
    toProtoMsg(message: QueryAllUserRedemptionRecordForUserRequest): QueryAllUserRedemptionRecordForUserRequestProtoMsg;
};
export declare const QueryAllUserRedemptionRecordForUserResponse: {
    typeUrl: string;
    encode(message: QueryAllUserRedemptionRecordForUserResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAllUserRedemptionRecordForUserResponse;
    fromPartial(object: Partial<QueryAllUserRedemptionRecordForUserResponse>): QueryAllUserRedemptionRecordForUserResponse;
    fromAmino(object: QueryAllUserRedemptionRecordForUserResponseAmino): QueryAllUserRedemptionRecordForUserResponse;
    toAmino(message: QueryAllUserRedemptionRecordForUserResponse): QueryAllUserRedemptionRecordForUserResponseAmino;
    fromAminoMsg(object: QueryAllUserRedemptionRecordForUserResponseAminoMsg): QueryAllUserRedemptionRecordForUserResponse;
    fromProtoMsg(message: QueryAllUserRedemptionRecordForUserResponseProtoMsg): QueryAllUserRedemptionRecordForUserResponse;
    toProto(message: QueryAllUserRedemptionRecordForUserResponse): Uint8Array;
    toProtoMsg(message: QueryAllUserRedemptionRecordForUserResponse): QueryAllUserRedemptionRecordForUserResponseProtoMsg;
};
export declare const QueryGetEpochUnbondingRecordRequest: {
    typeUrl: string;
    encode(message: QueryGetEpochUnbondingRecordRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryGetEpochUnbondingRecordRequest;
    fromPartial(object: Partial<QueryGetEpochUnbondingRecordRequest>): QueryGetEpochUnbondingRecordRequest;
    fromAmino(object: QueryGetEpochUnbondingRecordRequestAmino): QueryGetEpochUnbondingRecordRequest;
    toAmino(message: QueryGetEpochUnbondingRecordRequest): QueryGetEpochUnbondingRecordRequestAmino;
    fromAminoMsg(object: QueryGetEpochUnbondingRecordRequestAminoMsg): QueryGetEpochUnbondingRecordRequest;
    fromProtoMsg(message: QueryGetEpochUnbondingRecordRequestProtoMsg): QueryGetEpochUnbondingRecordRequest;
    toProto(message: QueryGetEpochUnbondingRecordRequest): Uint8Array;
    toProtoMsg(message: QueryGetEpochUnbondingRecordRequest): QueryGetEpochUnbondingRecordRequestProtoMsg;
};
export declare const QueryGetEpochUnbondingRecordResponse: {
    typeUrl: string;
    encode(message: QueryGetEpochUnbondingRecordResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryGetEpochUnbondingRecordResponse;
    fromPartial(object: Partial<QueryGetEpochUnbondingRecordResponse>): QueryGetEpochUnbondingRecordResponse;
    fromAmino(object: QueryGetEpochUnbondingRecordResponseAmino): QueryGetEpochUnbondingRecordResponse;
    toAmino(message: QueryGetEpochUnbondingRecordResponse): QueryGetEpochUnbondingRecordResponseAmino;
    fromAminoMsg(object: QueryGetEpochUnbondingRecordResponseAminoMsg): QueryGetEpochUnbondingRecordResponse;
    fromProtoMsg(message: QueryGetEpochUnbondingRecordResponseProtoMsg): QueryGetEpochUnbondingRecordResponse;
    toProto(message: QueryGetEpochUnbondingRecordResponse): Uint8Array;
    toProtoMsg(message: QueryGetEpochUnbondingRecordResponse): QueryGetEpochUnbondingRecordResponseProtoMsg;
};
export declare const QueryAllEpochUnbondingRecordRequest: {
    typeUrl: string;
    encode(message: QueryAllEpochUnbondingRecordRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAllEpochUnbondingRecordRequest;
    fromPartial(object: Partial<QueryAllEpochUnbondingRecordRequest>): QueryAllEpochUnbondingRecordRequest;
    fromAmino(object: QueryAllEpochUnbondingRecordRequestAmino): QueryAllEpochUnbondingRecordRequest;
    toAmino(message: QueryAllEpochUnbondingRecordRequest): QueryAllEpochUnbondingRecordRequestAmino;
    fromAminoMsg(object: QueryAllEpochUnbondingRecordRequestAminoMsg): QueryAllEpochUnbondingRecordRequest;
    fromProtoMsg(message: QueryAllEpochUnbondingRecordRequestProtoMsg): QueryAllEpochUnbondingRecordRequest;
    toProto(message: QueryAllEpochUnbondingRecordRequest): Uint8Array;
    toProtoMsg(message: QueryAllEpochUnbondingRecordRequest): QueryAllEpochUnbondingRecordRequestProtoMsg;
};
export declare const QueryAllEpochUnbondingRecordResponse: {
    typeUrl: string;
    encode(message: QueryAllEpochUnbondingRecordResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAllEpochUnbondingRecordResponse;
    fromPartial(object: Partial<QueryAllEpochUnbondingRecordResponse>): QueryAllEpochUnbondingRecordResponse;
    fromAmino(object: QueryAllEpochUnbondingRecordResponseAmino): QueryAllEpochUnbondingRecordResponse;
    toAmino(message: QueryAllEpochUnbondingRecordResponse): QueryAllEpochUnbondingRecordResponseAmino;
    fromAminoMsg(object: QueryAllEpochUnbondingRecordResponseAminoMsg): QueryAllEpochUnbondingRecordResponse;
    fromProtoMsg(message: QueryAllEpochUnbondingRecordResponseProtoMsg): QueryAllEpochUnbondingRecordResponse;
    toProto(message: QueryAllEpochUnbondingRecordResponse): Uint8Array;
    toProtoMsg(message: QueryAllEpochUnbondingRecordResponse): QueryAllEpochUnbondingRecordResponseProtoMsg;
};
export declare const QueryLSMDepositRequest: {
    typeUrl: string;
    encode(message: QueryLSMDepositRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryLSMDepositRequest;
    fromPartial(object: Partial<QueryLSMDepositRequest>): QueryLSMDepositRequest;
    fromAmino(object: QueryLSMDepositRequestAmino): QueryLSMDepositRequest;
    toAmino(message: QueryLSMDepositRequest): QueryLSMDepositRequestAmino;
    fromAminoMsg(object: QueryLSMDepositRequestAminoMsg): QueryLSMDepositRequest;
    fromProtoMsg(message: QueryLSMDepositRequestProtoMsg): QueryLSMDepositRequest;
    toProto(message: QueryLSMDepositRequest): Uint8Array;
    toProtoMsg(message: QueryLSMDepositRequest): QueryLSMDepositRequestProtoMsg;
};
export declare const QueryLSMDepositResponse: {
    typeUrl: string;
    encode(message: QueryLSMDepositResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryLSMDepositResponse;
    fromPartial(object: Partial<QueryLSMDepositResponse>): QueryLSMDepositResponse;
    fromAmino(object: QueryLSMDepositResponseAmino): QueryLSMDepositResponse;
    toAmino(message: QueryLSMDepositResponse): QueryLSMDepositResponseAmino;
    fromAminoMsg(object: QueryLSMDepositResponseAminoMsg): QueryLSMDepositResponse;
    fromProtoMsg(message: QueryLSMDepositResponseProtoMsg): QueryLSMDepositResponse;
    toProto(message: QueryLSMDepositResponse): Uint8Array;
    toProtoMsg(message: QueryLSMDepositResponse): QueryLSMDepositResponseProtoMsg;
};
export declare const QueryLSMDepositsRequest: {
    typeUrl: string;
    encode(message: QueryLSMDepositsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryLSMDepositsRequest;
    fromPartial(object: Partial<QueryLSMDepositsRequest>): QueryLSMDepositsRequest;
    fromAmino(object: QueryLSMDepositsRequestAmino): QueryLSMDepositsRequest;
    toAmino(message: QueryLSMDepositsRequest): QueryLSMDepositsRequestAmino;
    fromAminoMsg(object: QueryLSMDepositsRequestAminoMsg): QueryLSMDepositsRequest;
    fromProtoMsg(message: QueryLSMDepositsRequestProtoMsg): QueryLSMDepositsRequest;
    toProto(message: QueryLSMDepositsRequest): Uint8Array;
    toProtoMsg(message: QueryLSMDepositsRequest): QueryLSMDepositsRequestProtoMsg;
};
export declare const QueryLSMDepositsResponse: {
    typeUrl: string;
    encode(message: QueryLSMDepositsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryLSMDepositsResponse;
    fromPartial(object: Partial<QueryLSMDepositsResponse>): QueryLSMDepositsResponse;
    fromAmino(object: QueryLSMDepositsResponseAmino): QueryLSMDepositsResponse;
    toAmino(message: QueryLSMDepositsResponse): QueryLSMDepositsResponseAmino;
    fromAminoMsg(object: QueryLSMDepositsResponseAminoMsg): QueryLSMDepositsResponse;
    fromProtoMsg(message: QueryLSMDepositsResponseProtoMsg): QueryLSMDepositsResponse;
    toProto(message: QueryLSMDepositsResponse): Uint8Array;
    toProtoMsg(message: QueryLSMDepositsResponse): QueryLSMDepositsResponseProtoMsg;
};
