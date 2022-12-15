import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsSDKType } from "./params";
import { CallbackData, CallbackDataSDKType } from "./callback_data";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../helpers";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params holds all the parameters of this module. */
    params?: Params;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
    /** params holds all the parameters of this module. */
    params?: ParamsSDKType;
}
export interface QueryGetCallbackDataRequest {
    callbackKey: string;
}
export interface QueryGetCallbackDataRequestSDKType {
    callback_key: string;
}
export interface QueryGetCallbackDataResponse {
    callbackData?: CallbackData;
}
export interface QueryGetCallbackDataResponseSDKType {
    callback_data?: CallbackDataSDKType;
}
export interface QueryAllCallbackDataRequest {
    pagination?: PageRequest;
}
export interface QueryAllCallbackDataRequestSDKType {
    pagination?: PageRequestSDKType;
}
export interface QueryAllCallbackDataResponse {
    callbackData: CallbackData[];
    pagination?: PageResponse;
}
export interface QueryAllCallbackDataResponseSDKType {
    callback_data: CallbackDataSDKType[];
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
export declare const QueryGetCallbackDataRequest: {
    encode(message: QueryGetCallbackDataRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetCallbackDataRequest;
    fromPartial(object: DeepPartial<QueryGetCallbackDataRequest>): QueryGetCallbackDataRequest;
};
export declare const QueryGetCallbackDataResponse: {
    encode(message: QueryGetCallbackDataResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetCallbackDataResponse;
    fromPartial(object: DeepPartial<QueryGetCallbackDataResponse>): QueryGetCallbackDataResponse;
};
export declare const QueryAllCallbackDataRequest: {
    encode(message: QueryAllCallbackDataRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllCallbackDataRequest;
    fromPartial(object: DeepPartial<QueryAllCallbackDataRequest>): QueryAllCallbackDataRequest;
};
export declare const QueryAllCallbackDataResponse: {
    encode(message: QueryAllCallbackDataResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllCallbackDataResponse;
    fromPartial(object: DeepPartial<QueryAllCallbackDataResponse>): QueryAllCallbackDataResponse;
};
