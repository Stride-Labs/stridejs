import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsSDKType, DepositRecord, DepositRecordSDKType, UserRedemptionRecord, UserRedemptionRecordSDKType, EpochUnbondingRecord, EpochUnbondingRecordSDKType } from "./genesis";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params holds all the parameters of this module. */
    params: Params;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
    /** params holds all the parameters of this module. */
    params: ParamsSDKType;
}
export interface QueryGetDepositRecordRequest {
    id: Long;
}
export interface QueryGetDepositRecordRequestSDKType {
    id: Long;
}
export interface QueryGetDepositRecordResponse {
    DepositRecord: DepositRecord;
}
export interface QueryGetDepositRecordResponseSDKType {
    DepositRecord: DepositRecordSDKType;
}
export interface QueryAllDepositRecordRequest {
    pagination?: PageRequest;
}
export interface QueryAllDepositRecordRequestSDKType {
    pagination?: PageRequestSDKType;
}
export interface QueryAllDepositRecordResponse {
    DepositRecord: DepositRecord[];
    pagination?: PageResponse;
}
export interface QueryAllDepositRecordResponseSDKType {
    DepositRecord: DepositRecordSDKType[];
    pagination?: PageResponseSDKType;
}
export interface QueryGetUserRedemptionRecordRequest {
    id: string;
}
export interface QueryGetUserRedemptionRecordRequestSDKType {
    id: string;
}
export interface QueryGetUserRedemptionRecordResponse {
    UserRedemptionRecord: UserRedemptionRecord;
}
export interface QueryGetUserRedemptionRecordResponseSDKType {
    UserRedemptionRecord: UserRedemptionRecordSDKType;
}
export interface QueryAllUserRedemptionRecordRequest {
    pagination?: PageRequest;
}
export interface QueryAllUserRedemptionRecordRequestSDKType {
    pagination?: PageRequestSDKType;
}
export interface QueryAllUserRedemptionRecordResponse {
    UserRedemptionRecord: UserRedemptionRecord[];
    pagination?: PageResponse;
}
export interface QueryAllUserRedemptionRecordResponseSDKType {
    UserRedemptionRecord: UserRedemptionRecordSDKType[];
    pagination?: PageResponseSDKType;
}
/** Query UserRedemptionRecords by chainId / userId pair */
export interface QueryAllUserRedemptionRecordForUserRequest {
    chainId: string;
    day: Long;
    address: string;
    limit: Long;
    pagination?: PageRequest;
}
/** Query UserRedemptionRecords by chainId / userId pair */
export interface QueryAllUserRedemptionRecordForUserRequestSDKType {
    chainId: string;
    day: Long;
    address: string;
    limit: Long;
    pagination?: PageRequestSDKType;
}
export interface QueryAllUserRedemptionRecordForUserResponse {
    UserRedemptionRecord: UserRedemptionRecord[];
    pagination?: PageResponse;
}
export interface QueryAllUserRedemptionRecordForUserResponseSDKType {
    UserRedemptionRecord: UserRedemptionRecordSDKType[];
    pagination?: PageResponseSDKType;
}
export interface QueryGetEpochUnbondingRecordRequest {
    epochNumber: Long;
}
export interface QueryGetEpochUnbondingRecordRequestSDKType {
    epochNumber: Long;
}
export interface QueryGetEpochUnbondingRecordResponse {
    EpochUnbondingRecord: EpochUnbondingRecord;
}
export interface QueryGetEpochUnbondingRecordResponseSDKType {
    EpochUnbondingRecord: EpochUnbondingRecordSDKType;
}
export interface QueryAllEpochUnbondingRecordRequest {
    pagination?: PageRequest;
}
export interface QueryAllEpochUnbondingRecordRequestSDKType {
    pagination?: PageRequestSDKType;
}
export interface QueryAllEpochUnbondingRecordResponse {
    EpochUnbondingRecord: EpochUnbondingRecord[];
    pagination?: PageResponse;
}
export interface QueryAllEpochUnbondingRecordResponseSDKType {
    EpochUnbondingRecord: EpochUnbondingRecordSDKType[];
    pagination?: PageResponseSDKType;
}
export declare const QueryParamsRequest: {
    encode(_: QueryParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest;
    fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest;
};
export declare const QueryParamsResponse: {
    encode(message: QueryParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse;
    fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse;
};
export declare const QueryGetDepositRecordRequest: {
    encode(message: QueryGetDepositRecordRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetDepositRecordRequest;
    fromPartial(object: DeepPartial<QueryGetDepositRecordRequest>): QueryGetDepositRecordRequest;
};
export declare const QueryGetDepositRecordResponse: {
    encode(message: QueryGetDepositRecordResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetDepositRecordResponse;
    fromPartial(object: DeepPartial<QueryGetDepositRecordResponse>): QueryGetDepositRecordResponse;
};
export declare const QueryAllDepositRecordRequest: {
    encode(message: QueryAllDepositRecordRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllDepositRecordRequest;
    fromPartial(object: DeepPartial<QueryAllDepositRecordRequest>): QueryAllDepositRecordRequest;
};
export declare const QueryAllDepositRecordResponse: {
    encode(message: QueryAllDepositRecordResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllDepositRecordResponse;
    fromPartial(object: DeepPartial<QueryAllDepositRecordResponse>): QueryAllDepositRecordResponse;
};
export declare const QueryGetUserRedemptionRecordRequest: {
    encode(message: QueryGetUserRedemptionRecordRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetUserRedemptionRecordRequest;
    fromPartial(object: DeepPartial<QueryGetUserRedemptionRecordRequest>): QueryGetUserRedemptionRecordRequest;
};
export declare const QueryGetUserRedemptionRecordResponse: {
    encode(message: QueryGetUserRedemptionRecordResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetUserRedemptionRecordResponse;
    fromPartial(object: DeepPartial<QueryGetUserRedemptionRecordResponse>): QueryGetUserRedemptionRecordResponse;
};
export declare const QueryAllUserRedemptionRecordRequest: {
    encode(message: QueryAllUserRedemptionRecordRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllUserRedemptionRecordRequest;
    fromPartial(object: DeepPartial<QueryAllUserRedemptionRecordRequest>): QueryAllUserRedemptionRecordRequest;
};
export declare const QueryAllUserRedemptionRecordResponse: {
    encode(message: QueryAllUserRedemptionRecordResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllUserRedemptionRecordResponse;
    fromPartial(object: DeepPartial<QueryAllUserRedemptionRecordResponse>): QueryAllUserRedemptionRecordResponse;
};
export declare const QueryAllUserRedemptionRecordForUserRequest: {
    encode(message: QueryAllUserRedemptionRecordForUserRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllUserRedemptionRecordForUserRequest;
    fromPartial(object: DeepPartial<QueryAllUserRedemptionRecordForUserRequest>): QueryAllUserRedemptionRecordForUserRequest;
};
export declare const QueryAllUserRedemptionRecordForUserResponse: {
    encode(message: QueryAllUserRedemptionRecordForUserResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllUserRedemptionRecordForUserResponse;
    fromPartial(object: DeepPartial<QueryAllUserRedemptionRecordForUserResponse>): QueryAllUserRedemptionRecordForUserResponse;
};
export declare const QueryGetEpochUnbondingRecordRequest: {
    encode(message: QueryGetEpochUnbondingRecordRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetEpochUnbondingRecordRequest;
    fromPartial(object: DeepPartial<QueryGetEpochUnbondingRecordRequest>): QueryGetEpochUnbondingRecordRequest;
};
export declare const QueryGetEpochUnbondingRecordResponse: {
    encode(message: QueryGetEpochUnbondingRecordResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetEpochUnbondingRecordResponse;
    fromPartial(object: DeepPartial<QueryGetEpochUnbondingRecordResponse>): QueryGetEpochUnbondingRecordResponse;
};
export declare const QueryAllEpochUnbondingRecordRequest: {
    encode(message: QueryAllEpochUnbondingRecordRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllEpochUnbondingRecordRequest;
    fromPartial(object: DeepPartial<QueryAllEpochUnbondingRecordRequest>): QueryAllEpochUnbondingRecordRequest;
};
export declare const QueryAllEpochUnbondingRecordResponse: {
    encode(message: QueryAllEpochUnbondingRecordResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllEpochUnbondingRecordResponse;
    fromPartial(object: DeepPartial<QueryAllEpochUnbondingRecordResponse>): QueryAllEpochUnbondingRecordResponse;
};
