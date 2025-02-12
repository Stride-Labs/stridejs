import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { EpochInfo, EpochInfoAmino, EpochInfoSDKType } from "./genesis";
import { BinaryReader, BinaryWriter } from "../../binary";
export interface QueryEpochsInfoRequest {
    pagination?: PageRequest;
}
export interface QueryEpochsInfoRequestProtoMsg {
    typeUrl: "/stride.epochs.QueryEpochsInfoRequest";
    value: Uint8Array;
}
export interface QueryEpochsInfoRequestAmino {
    pagination?: PageRequestAmino;
}
export interface QueryEpochsInfoRequestAminoMsg {
    type: "/stride.epochs.QueryEpochsInfoRequest";
    value: QueryEpochsInfoRequestAmino;
}
export interface QueryEpochsInfoRequestSDKType {
    pagination?: PageRequestSDKType;
}
export interface QueryEpochsInfoResponse {
    epochs: EpochInfo[];
    pagination?: PageResponse;
}
export interface QueryEpochsInfoResponseProtoMsg {
    typeUrl: "/stride.epochs.QueryEpochsInfoResponse";
    value: Uint8Array;
}
export interface QueryEpochsInfoResponseAmino {
    epochs?: EpochInfoAmino[];
    pagination?: PageResponseAmino;
}
export interface QueryEpochsInfoResponseAminoMsg {
    type: "/stride.epochs.QueryEpochsInfoResponse";
    value: QueryEpochsInfoResponseAmino;
}
export interface QueryEpochsInfoResponseSDKType {
    epochs: EpochInfoSDKType[];
    pagination?: PageResponseSDKType;
}
export interface QueryCurrentEpochRequest {
    identifier: string;
}
export interface QueryCurrentEpochRequestProtoMsg {
    typeUrl: "/stride.epochs.QueryCurrentEpochRequest";
    value: Uint8Array;
}
export interface QueryCurrentEpochRequestAmino {
    identifier?: string;
}
export interface QueryCurrentEpochRequestAminoMsg {
    type: "/stride.epochs.QueryCurrentEpochRequest";
    value: QueryCurrentEpochRequestAmino;
}
export interface QueryCurrentEpochRequestSDKType {
    identifier: string;
}
export interface QueryCurrentEpochResponse {
    currentEpoch: bigint;
}
export interface QueryCurrentEpochResponseProtoMsg {
    typeUrl: "/stride.epochs.QueryCurrentEpochResponse";
    value: Uint8Array;
}
export interface QueryCurrentEpochResponseAmino {
    current_epoch?: string;
}
export interface QueryCurrentEpochResponseAminoMsg {
    type: "/stride.epochs.QueryCurrentEpochResponse";
    value: QueryCurrentEpochResponseAmino;
}
export interface QueryCurrentEpochResponseSDKType {
    current_epoch: bigint;
}
export interface QueryEpochInfoRequest {
    identifier: string;
}
export interface QueryEpochInfoRequestProtoMsg {
    typeUrl: "/stride.epochs.QueryEpochInfoRequest";
    value: Uint8Array;
}
export interface QueryEpochInfoRequestAmino {
    identifier?: string;
}
export interface QueryEpochInfoRequestAminoMsg {
    type: "/stride.epochs.QueryEpochInfoRequest";
    value: QueryEpochInfoRequestAmino;
}
export interface QueryEpochInfoRequestSDKType {
    identifier: string;
}
export interface QueryEpochInfoResponse {
    epoch: EpochInfo;
}
export interface QueryEpochInfoResponseProtoMsg {
    typeUrl: "/stride.epochs.QueryEpochInfoResponse";
    value: Uint8Array;
}
export interface QueryEpochInfoResponseAmino {
    epoch?: EpochInfoAmino;
}
export interface QueryEpochInfoResponseAminoMsg {
    type: "/stride.epochs.QueryEpochInfoResponse";
    value: QueryEpochInfoResponseAmino;
}
export interface QueryEpochInfoResponseSDKType {
    epoch: EpochInfoSDKType;
}
export declare const QueryEpochsInfoRequest: {
    typeUrl: string;
    encode(message: QueryEpochsInfoRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryEpochsInfoRequest;
    fromPartial(object: Partial<QueryEpochsInfoRequest>): QueryEpochsInfoRequest;
    fromAmino(object: QueryEpochsInfoRequestAmino): QueryEpochsInfoRequest;
    toAmino(message: QueryEpochsInfoRequest): QueryEpochsInfoRequestAmino;
    fromAminoMsg(object: QueryEpochsInfoRequestAminoMsg): QueryEpochsInfoRequest;
    fromProtoMsg(message: QueryEpochsInfoRequestProtoMsg): QueryEpochsInfoRequest;
    toProto(message: QueryEpochsInfoRequest): Uint8Array;
    toProtoMsg(message: QueryEpochsInfoRequest): QueryEpochsInfoRequestProtoMsg;
};
export declare const QueryEpochsInfoResponse: {
    typeUrl: string;
    encode(message: QueryEpochsInfoResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryEpochsInfoResponse;
    fromPartial(object: Partial<QueryEpochsInfoResponse>): QueryEpochsInfoResponse;
    fromAmino(object: QueryEpochsInfoResponseAmino): QueryEpochsInfoResponse;
    toAmino(message: QueryEpochsInfoResponse): QueryEpochsInfoResponseAmino;
    fromAminoMsg(object: QueryEpochsInfoResponseAminoMsg): QueryEpochsInfoResponse;
    fromProtoMsg(message: QueryEpochsInfoResponseProtoMsg): QueryEpochsInfoResponse;
    toProto(message: QueryEpochsInfoResponse): Uint8Array;
    toProtoMsg(message: QueryEpochsInfoResponse): QueryEpochsInfoResponseProtoMsg;
};
export declare const QueryCurrentEpochRequest: {
    typeUrl: string;
    encode(message: QueryCurrentEpochRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryCurrentEpochRequest;
    fromPartial(object: Partial<QueryCurrentEpochRequest>): QueryCurrentEpochRequest;
    fromAmino(object: QueryCurrentEpochRequestAmino): QueryCurrentEpochRequest;
    toAmino(message: QueryCurrentEpochRequest): QueryCurrentEpochRequestAmino;
    fromAminoMsg(object: QueryCurrentEpochRequestAminoMsg): QueryCurrentEpochRequest;
    fromProtoMsg(message: QueryCurrentEpochRequestProtoMsg): QueryCurrentEpochRequest;
    toProto(message: QueryCurrentEpochRequest): Uint8Array;
    toProtoMsg(message: QueryCurrentEpochRequest): QueryCurrentEpochRequestProtoMsg;
};
export declare const QueryCurrentEpochResponse: {
    typeUrl: string;
    encode(message: QueryCurrentEpochResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryCurrentEpochResponse;
    fromPartial(object: Partial<QueryCurrentEpochResponse>): QueryCurrentEpochResponse;
    fromAmino(object: QueryCurrentEpochResponseAmino): QueryCurrentEpochResponse;
    toAmino(message: QueryCurrentEpochResponse): QueryCurrentEpochResponseAmino;
    fromAminoMsg(object: QueryCurrentEpochResponseAminoMsg): QueryCurrentEpochResponse;
    fromProtoMsg(message: QueryCurrentEpochResponseProtoMsg): QueryCurrentEpochResponse;
    toProto(message: QueryCurrentEpochResponse): Uint8Array;
    toProtoMsg(message: QueryCurrentEpochResponse): QueryCurrentEpochResponseProtoMsg;
};
export declare const QueryEpochInfoRequest: {
    typeUrl: string;
    encode(message: QueryEpochInfoRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryEpochInfoRequest;
    fromPartial(object: Partial<QueryEpochInfoRequest>): QueryEpochInfoRequest;
    fromAmino(object: QueryEpochInfoRequestAmino): QueryEpochInfoRequest;
    toAmino(message: QueryEpochInfoRequest): QueryEpochInfoRequestAmino;
    fromAminoMsg(object: QueryEpochInfoRequestAminoMsg): QueryEpochInfoRequest;
    fromProtoMsg(message: QueryEpochInfoRequestProtoMsg): QueryEpochInfoRequest;
    toProto(message: QueryEpochInfoRequest): Uint8Array;
    toProtoMsg(message: QueryEpochInfoRequest): QueryEpochInfoRequestProtoMsg;
};
export declare const QueryEpochInfoResponse: {
    typeUrl: string;
    encode(message: QueryEpochInfoResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryEpochInfoResponse;
    fromPartial(object: Partial<QueryEpochInfoResponse>): QueryEpochInfoResponse;
    fromAmino(object: QueryEpochInfoResponseAmino): QueryEpochInfoResponse;
    toAmino(message: QueryEpochInfoResponse): QueryEpochInfoResponseAmino;
    fromAminoMsg(object: QueryEpochInfoResponseAminoMsg): QueryEpochInfoResponse;
    fromProtoMsg(message: QueryEpochInfoResponseProtoMsg): QueryEpochInfoResponse;
    toProto(message: QueryEpochInfoResponse): Uint8Array;
    toProtoMsg(message: QueryEpochInfoResponse): QueryEpochInfoResponseProtoMsg;
};
