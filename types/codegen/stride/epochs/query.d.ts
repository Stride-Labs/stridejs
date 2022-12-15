import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { EpochInfo, EpochInfoSDKType } from "./genesis";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "../../helpers";
export interface QueryEpochsInfoRequest {
    pagination?: PageRequest;
}
export interface QueryEpochsInfoRequestSDKType {
    pagination?: PageRequestSDKType;
}
export interface QueryEpochsInfoResponse {
    epochs: EpochInfo[];
    pagination?: PageResponse;
}
export interface QueryEpochsInfoResponseSDKType {
    epochs: EpochInfoSDKType[];
    pagination?: PageResponseSDKType;
}
export interface QueryCurrentEpochRequest {
    identifier: string;
}
export interface QueryCurrentEpochRequestSDKType {
    identifier: string;
}
export interface QueryCurrentEpochResponse {
    currentEpoch: Long;
}
export interface QueryCurrentEpochResponseSDKType {
    current_epoch: Long;
}
export interface QueryEpochInfoRequest {
    identifier: string;
}
export interface QueryEpochInfoRequestSDKType {
    identifier: string;
}
export interface QueryEpochInfoResponse {
    epoch?: EpochInfo;
}
export interface QueryEpochInfoResponseSDKType {
    epoch?: EpochInfoSDKType;
}
export declare const QueryEpochsInfoRequest: {
    encode(message: QueryEpochsInfoRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryEpochsInfoRequest;
    fromPartial(object: DeepPartial<QueryEpochsInfoRequest>): QueryEpochsInfoRequest;
};
export declare const QueryEpochsInfoResponse: {
    encode(message: QueryEpochsInfoResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryEpochsInfoResponse;
    fromPartial(object: DeepPartial<QueryEpochsInfoResponse>): QueryEpochsInfoResponse;
};
export declare const QueryCurrentEpochRequest: {
    encode(message: QueryCurrentEpochRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCurrentEpochRequest;
    fromPartial(object: DeepPartial<QueryCurrentEpochRequest>): QueryCurrentEpochRequest;
};
export declare const QueryCurrentEpochResponse: {
    encode(message: QueryCurrentEpochResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCurrentEpochResponse;
    fromPartial(object: DeepPartial<QueryCurrentEpochResponse>): QueryCurrentEpochResponse;
};
export declare const QueryEpochInfoRequest: {
    encode(message: QueryEpochInfoRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryEpochInfoRequest;
    fromPartial(object: DeepPartial<QueryEpochInfoRequest>): QueryEpochInfoRequest;
};
export declare const QueryEpochInfoResponse: {
    encode(message: QueryEpochInfoResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryEpochInfoResponse;
    fromPartial(object: DeepPartial<QueryEpochInfoResponse>): QueryEpochInfoResponse;
};
