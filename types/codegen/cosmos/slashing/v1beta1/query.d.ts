import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { Params, ParamsAmino, ParamsSDKType, ValidatorSigningInfo, ValidatorSigningInfoAmino, ValidatorSigningInfoSDKType } from "./slashing";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** QueryParamsRequest is the request type for the Query/Params RPC method */
export interface QueryParamsRequest {
}
export interface QueryParamsRequestProtoMsg {
    typeUrl: "/cosmos.slashing.v1beta1.QueryParamsRequest";
    value: Uint8Array;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method */
export interface QueryParamsRequestAmino {
}
export interface QueryParamsRequestAminoMsg {
    type: "cosmos-sdk/QueryParamsRequest";
    value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method */
export interface QueryParamsRequestSDKType {
}
/** QueryParamsResponse is the response type for the Query/Params RPC method */
export interface QueryParamsResponse {
    params: Params;
}
export interface QueryParamsResponseProtoMsg {
    typeUrl: "/cosmos.slashing.v1beta1.QueryParamsResponse";
    value: Uint8Array;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method */
export interface QueryParamsResponseAmino {
    params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
    type: "cosmos-sdk/QueryParamsResponse";
    value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method */
export interface QueryParamsResponseSDKType {
    params: ParamsSDKType;
}
/**
 * QuerySigningInfoRequest is the request type for the Query/SigningInfo RPC
 * method
 */
export interface QuerySigningInfoRequest {
    /** cons_address is the address to query signing info of */
    consAddress: string;
}
export interface QuerySigningInfoRequestProtoMsg {
    typeUrl: "/cosmos.slashing.v1beta1.QuerySigningInfoRequest";
    value: Uint8Array;
}
/**
 * QuerySigningInfoRequest is the request type for the Query/SigningInfo RPC
 * method
 */
export interface QuerySigningInfoRequestAmino {
    /** cons_address is the address to query signing info of */
    cons_address?: string;
}
export interface QuerySigningInfoRequestAminoMsg {
    type: "cosmos-sdk/QuerySigningInfoRequest";
    value: QuerySigningInfoRequestAmino;
}
/**
 * QuerySigningInfoRequest is the request type for the Query/SigningInfo RPC
 * method
 */
export interface QuerySigningInfoRequestSDKType {
    cons_address: string;
}
/**
 * QuerySigningInfoResponse is the response type for the Query/SigningInfo RPC
 * method
 */
export interface QuerySigningInfoResponse {
    /** val_signing_info is the signing info of requested val cons address */
    valSigningInfo: ValidatorSigningInfo;
}
export interface QuerySigningInfoResponseProtoMsg {
    typeUrl: "/cosmos.slashing.v1beta1.QuerySigningInfoResponse";
    value: Uint8Array;
}
/**
 * QuerySigningInfoResponse is the response type for the Query/SigningInfo RPC
 * method
 */
export interface QuerySigningInfoResponseAmino {
    /** val_signing_info is the signing info of requested val cons address */
    val_signing_info?: ValidatorSigningInfoAmino;
}
export interface QuerySigningInfoResponseAminoMsg {
    type: "cosmos-sdk/QuerySigningInfoResponse";
    value: QuerySigningInfoResponseAmino;
}
/**
 * QuerySigningInfoResponse is the response type for the Query/SigningInfo RPC
 * method
 */
export interface QuerySigningInfoResponseSDKType {
    val_signing_info: ValidatorSigningInfoSDKType;
}
/**
 * QuerySigningInfosRequest is the request type for the Query/SigningInfos RPC
 * method
 */
export interface QuerySigningInfosRequest {
    pagination?: PageRequest;
}
export interface QuerySigningInfosRequestProtoMsg {
    typeUrl: "/cosmos.slashing.v1beta1.QuerySigningInfosRequest";
    value: Uint8Array;
}
/**
 * QuerySigningInfosRequest is the request type for the Query/SigningInfos RPC
 * method
 */
export interface QuerySigningInfosRequestAmino {
    pagination?: PageRequestAmino;
}
export interface QuerySigningInfosRequestAminoMsg {
    type: "cosmos-sdk/QuerySigningInfosRequest";
    value: QuerySigningInfosRequestAmino;
}
/**
 * QuerySigningInfosRequest is the request type for the Query/SigningInfos RPC
 * method
 */
export interface QuerySigningInfosRequestSDKType {
    pagination?: PageRequestSDKType;
}
/**
 * QuerySigningInfosResponse is the response type for the Query/SigningInfos RPC
 * method
 */
export interface QuerySigningInfosResponse {
    /** info is the signing info of all validators */
    info: ValidatorSigningInfo[];
    pagination?: PageResponse;
}
export interface QuerySigningInfosResponseProtoMsg {
    typeUrl: "/cosmos.slashing.v1beta1.QuerySigningInfosResponse";
    value: Uint8Array;
}
/**
 * QuerySigningInfosResponse is the response type for the Query/SigningInfos RPC
 * method
 */
export interface QuerySigningInfosResponseAmino {
    /** info is the signing info of all validators */
    info?: ValidatorSigningInfoAmino[];
    pagination?: PageResponseAmino;
}
export interface QuerySigningInfosResponseAminoMsg {
    type: "cosmos-sdk/QuerySigningInfosResponse";
    value: QuerySigningInfosResponseAmino;
}
/**
 * QuerySigningInfosResponse is the response type for the Query/SigningInfos RPC
 * method
 */
export interface QuerySigningInfosResponseSDKType {
    info: ValidatorSigningInfoSDKType[];
    pagination?: PageResponseSDKType;
}
export declare const QueryParamsRequest: {
    typeUrl: string;
    encode(_: QueryParamsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest;
    fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest;
    fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest;
    toAmino(_: QueryParamsRequest): QueryParamsRequestAmino;
    fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest;
    toAminoMsg(message: QueryParamsRequest): QueryParamsRequestAminoMsg;
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
    toAminoMsg(message: QueryParamsResponse): QueryParamsResponseAminoMsg;
    fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse;
    toProto(message: QueryParamsResponse): Uint8Array;
    toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg;
};
export declare const QuerySigningInfoRequest: {
    typeUrl: string;
    encode(message: QuerySigningInfoRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QuerySigningInfoRequest;
    fromPartial(object: Partial<QuerySigningInfoRequest>): QuerySigningInfoRequest;
    fromAmino(object: QuerySigningInfoRequestAmino): QuerySigningInfoRequest;
    toAmino(message: QuerySigningInfoRequest): QuerySigningInfoRequestAmino;
    fromAminoMsg(object: QuerySigningInfoRequestAminoMsg): QuerySigningInfoRequest;
    toAminoMsg(message: QuerySigningInfoRequest): QuerySigningInfoRequestAminoMsg;
    fromProtoMsg(message: QuerySigningInfoRequestProtoMsg): QuerySigningInfoRequest;
    toProto(message: QuerySigningInfoRequest): Uint8Array;
    toProtoMsg(message: QuerySigningInfoRequest): QuerySigningInfoRequestProtoMsg;
};
export declare const QuerySigningInfoResponse: {
    typeUrl: string;
    encode(message: QuerySigningInfoResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QuerySigningInfoResponse;
    fromPartial(object: Partial<QuerySigningInfoResponse>): QuerySigningInfoResponse;
    fromAmino(object: QuerySigningInfoResponseAmino): QuerySigningInfoResponse;
    toAmino(message: QuerySigningInfoResponse): QuerySigningInfoResponseAmino;
    fromAminoMsg(object: QuerySigningInfoResponseAminoMsg): QuerySigningInfoResponse;
    toAminoMsg(message: QuerySigningInfoResponse): QuerySigningInfoResponseAminoMsg;
    fromProtoMsg(message: QuerySigningInfoResponseProtoMsg): QuerySigningInfoResponse;
    toProto(message: QuerySigningInfoResponse): Uint8Array;
    toProtoMsg(message: QuerySigningInfoResponse): QuerySigningInfoResponseProtoMsg;
};
export declare const QuerySigningInfosRequest: {
    typeUrl: string;
    encode(message: QuerySigningInfosRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QuerySigningInfosRequest;
    fromPartial(object: Partial<QuerySigningInfosRequest>): QuerySigningInfosRequest;
    fromAmino(object: QuerySigningInfosRequestAmino): QuerySigningInfosRequest;
    toAmino(message: QuerySigningInfosRequest): QuerySigningInfosRequestAmino;
    fromAminoMsg(object: QuerySigningInfosRequestAminoMsg): QuerySigningInfosRequest;
    toAminoMsg(message: QuerySigningInfosRequest): QuerySigningInfosRequestAminoMsg;
    fromProtoMsg(message: QuerySigningInfosRequestProtoMsg): QuerySigningInfosRequest;
    toProto(message: QuerySigningInfosRequest): Uint8Array;
    toProtoMsg(message: QuerySigningInfosRequest): QuerySigningInfosRequestProtoMsg;
};
export declare const QuerySigningInfosResponse: {
    typeUrl: string;
    encode(message: QuerySigningInfosResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QuerySigningInfosResponse;
    fromPartial(object: Partial<QuerySigningInfosResponse>): QuerySigningInfosResponse;
    fromAmino(object: QuerySigningInfosResponseAmino): QuerySigningInfosResponse;
    toAmino(message: QuerySigningInfosResponse): QuerySigningInfosResponseAmino;
    fromAminoMsg(object: QuerySigningInfosResponseAminoMsg): QuerySigningInfosResponse;
    toAminoMsg(message: QuerySigningInfosResponse): QuerySigningInfosResponseAminoMsg;
    fromProtoMsg(message: QuerySigningInfosResponseProtoMsg): QuerySigningInfosResponse;
    toProto(message: QuerySigningInfosResponse): Uint8Array;
    toProtoMsg(message: QuerySigningInfosResponse): QuerySigningInfosResponseProtoMsg;
};
