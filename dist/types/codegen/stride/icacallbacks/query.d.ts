import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { CallbackData, CallbackDataAmino, CallbackDataSDKType } from "./callback_data";
import { BinaryReader, BinaryWriter } from "../../binary";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
export interface QueryParamsRequestProtoMsg {
    typeUrl: "/stride.icacallbacks.QueryParamsRequest";
    value: Uint8Array;
}
/**
 * QueryParamsRequest is request type for the Query/Params RPC method.
 * @name QueryParamsRequestAmino
 * @package stride.icacallbacks
 * @see proto type: stride.icacallbacks.QueryParamsRequest
 */
export interface QueryParamsRequestAmino {
}
export interface QueryParamsRequestAminoMsg {
    type: "/stride.icacallbacks.QueryParamsRequest";
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
    typeUrl: "/stride.icacallbacks.QueryParamsResponse";
    value: Uint8Array;
}
/**
 * QueryParamsResponse is response type for the Query/Params RPC method.
 * @name QueryParamsResponseAmino
 * @package stride.icacallbacks
 * @see proto type: stride.icacallbacks.QueryParamsResponse
 */
export interface QueryParamsResponseAmino {
    /**
     * params holds all the parameters of this module.
     */
    params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
    type: "/stride.icacallbacks.QueryParamsResponse";
    value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
    params: ParamsSDKType;
}
export interface QueryGetCallbackDataRequest {
    callbackKey: string;
}
export interface QueryGetCallbackDataRequestProtoMsg {
    typeUrl: "/stride.icacallbacks.QueryGetCallbackDataRequest";
    value: Uint8Array;
}
/**
 * @name QueryGetCallbackDataRequestAmino
 * @package stride.icacallbacks
 * @see proto type: stride.icacallbacks.QueryGetCallbackDataRequest
 */
export interface QueryGetCallbackDataRequestAmino {
    callback_key?: string;
}
export interface QueryGetCallbackDataRequestAminoMsg {
    type: "/stride.icacallbacks.QueryGetCallbackDataRequest";
    value: QueryGetCallbackDataRequestAmino;
}
export interface QueryGetCallbackDataRequestSDKType {
    callback_key: string;
}
export interface QueryGetCallbackDataResponse {
    callbackData: CallbackData;
}
export interface QueryGetCallbackDataResponseProtoMsg {
    typeUrl: "/stride.icacallbacks.QueryGetCallbackDataResponse";
    value: Uint8Array;
}
/**
 * @name QueryGetCallbackDataResponseAmino
 * @package stride.icacallbacks
 * @see proto type: stride.icacallbacks.QueryGetCallbackDataResponse
 */
export interface QueryGetCallbackDataResponseAmino {
    callback_data?: CallbackDataAmino;
}
export interface QueryGetCallbackDataResponseAminoMsg {
    type: "/stride.icacallbacks.QueryGetCallbackDataResponse";
    value: QueryGetCallbackDataResponseAmino;
}
export interface QueryGetCallbackDataResponseSDKType {
    callback_data: CallbackDataSDKType;
}
export interface QueryAllCallbackDataRequest {
    pagination?: PageRequest;
}
export interface QueryAllCallbackDataRequestProtoMsg {
    typeUrl: "/stride.icacallbacks.QueryAllCallbackDataRequest";
    value: Uint8Array;
}
/**
 * @name QueryAllCallbackDataRequestAmino
 * @package stride.icacallbacks
 * @see proto type: stride.icacallbacks.QueryAllCallbackDataRequest
 */
export interface QueryAllCallbackDataRequestAmino {
    pagination?: PageRequestAmino;
}
export interface QueryAllCallbackDataRequestAminoMsg {
    type: "/stride.icacallbacks.QueryAllCallbackDataRequest";
    value: QueryAllCallbackDataRequestAmino;
}
export interface QueryAllCallbackDataRequestSDKType {
    pagination?: PageRequestSDKType;
}
export interface QueryAllCallbackDataResponse {
    callbackData: CallbackData[];
    pagination?: PageResponse;
}
export interface QueryAllCallbackDataResponseProtoMsg {
    typeUrl: "/stride.icacallbacks.QueryAllCallbackDataResponse";
    value: Uint8Array;
}
/**
 * @name QueryAllCallbackDataResponseAmino
 * @package stride.icacallbacks
 * @see proto type: stride.icacallbacks.QueryAllCallbackDataResponse
 */
export interface QueryAllCallbackDataResponseAmino {
    callback_data?: CallbackDataAmino[];
    pagination?: PageResponseAmino;
}
export interface QueryAllCallbackDataResponseAminoMsg {
    type: "/stride.icacallbacks.QueryAllCallbackDataResponse";
    value: QueryAllCallbackDataResponseAmino;
}
export interface QueryAllCallbackDataResponseSDKType {
    callback_data: CallbackDataSDKType[];
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
export declare const QueryGetCallbackDataRequest: {
    typeUrl: string;
    encode(message: QueryGetCallbackDataRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryGetCallbackDataRequest;
    fromPartial(object: Partial<QueryGetCallbackDataRequest>): QueryGetCallbackDataRequest;
    fromAmino(object: QueryGetCallbackDataRequestAmino): QueryGetCallbackDataRequest;
    toAmino(message: QueryGetCallbackDataRequest): QueryGetCallbackDataRequestAmino;
    fromAminoMsg(object: QueryGetCallbackDataRequestAminoMsg): QueryGetCallbackDataRequest;
    fromProtoMsg(message: QueryGetCallbackDataRequestProtoMsg): QueryGetCallbackDataRequest;
    toProto(message: QueryGetCallbackDataRequest): Uint8Array;
    toProtoMsg(message: QueryGetCallbackDataRequest): QueryGetCallbackDataRequestProtoMsg;
};
export declare const QueryGetCallbackDataResponse: {
    typeUrl: string;
    encode(message: QueryGetCallbackDataResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryGetCallbackDataResponse;
    fromPartial(object: Partial<QueryGetCallbackDataResponse>): QueryGetCallbackDataResponse;
    fromAmino(object: QueryGetCallbackDataResponseAmino): QueryGetCallbackDataResponse;
    toAmino(message: QueryGetCallbackDataResponse): QueryGetCallbackDataResponseAmino;
    fromAminoMsg(object: QueryGetCallbackDataResponseAminoMsg): QueryGetCallbackDataResponse;
    fromProtoMsg(message: QueryGetCallbackDataResponseProtoMsg): QueryGetCallbackDataResponse;
    toProto(message: QueryGetCallbackDataResponse): Uint8Array;
    toProtoMsg(message: QueryGetCallbackDataResponse): QueryGetCallbackDataResponseProtoMsg;
};
export declare const QueryAllCallbackDataRequest: {
    typeUrl: string;
    encode(message: QueryAllCallbackDataRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAllCallbackDataRequest;
    fromPartial(object: Partial<QueryAllCallbackDataRequest>): QueryAllCallbackDataRequest;
    fromAmino(object: QueryAllCallbackDataRequestAmino): QueryAllCallbackDataRequest;
    toAmino(message: QueryAllCallbackDataRequest): QueryAllCallbackDataRequestAmino;
    fromAminoMsg(object: QueryAllCallbackDataRequestAminoMsg): QueryAllCallbackDataRequest;
    fromProtoMsg(message: QueryAllCallbackDataRequestProtoMsg): QueryAllCallbackDataRequest;
    toProto(message: QueryAllCallbackDataRequest): Uint8Array;
    toProtoMsg(message: QueryAllCallbackDataRequest): QueryAllCallbackDataRequestProtoMsg;
};
export declare const QueryAllCallbackDataResponse: {
    typeUrl: string;
    encode(message: QueryAllCallbackDataResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAllCallbackDataResponse;
    fromPartial(object: Partial<QueryAllCallbackDataResponse>): QueryAllCallbackDataResponse;
    fromAmino(object: QueryAllCallbackDataResponseAmino): QueryAllCallbackDataResponse;
    toAmino(message: QueryAllCallbackDataResponse): QueryAllCallbackDataResponseAmino;
    fromAminoMsg(object: QueryAllCallbackDataResponseAminoMsg): QueryAllCallbackDataResponse;
    fromProtoMsg(message: QueryAllCallbackDataResponseProtoMsg): QueryAllCallbackDataResponse;
    toProto(message: QueryAllCallbackDataResponse): Uint8Array;
    toProtoMsg(message: QueryAllCallbackDataResponse): QueryAllCallbackDataResponseProtoMsg;
};
