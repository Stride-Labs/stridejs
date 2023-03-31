import { RateLimit, RateLimitSDKType } from "./ratelimit";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
export interface QueryAllRateLimitsRequest {
}
export interface QueryAllRateLimitsRequestSDKType {
}
export interface QueryAllRateLimitsResponse {
    rateLimits: RateLimit[];
}
export interface QueryAllRateLimitsResponseSDKType {
    rate_limits: RateLimitSDKType[];
}
export interface QueryRateLimitRequest {
    denom?: string;
    channelId: string;
}
export interface QueryRateLimitRequestSDKType {
    denom?: string;
    channel_id: string;
}
export interface QueryRateLimitResponse {
    rateLimit: RateLimit;
}
export interface QueryRateLimitResponseSDKType {
    rate_limit: RateLimitSDKType;
}
export interface QueryRateLimitsByChainIdRequest {
    chainId: string;
}
export interface QueryRateLimitsByChainIdRequestSDKType {
    chain_id: string;
}
export interface QueryRateLimitsByChainIdResponse {
    rateLimits: RateLimit[];
}
export interface QueryRateLimitsByChainIdResponseSDKType {
    rate_limits: RateLimitSDKType[];
}
export interface QueryRateLimitsByChannelIdRequest {
    channelId: string;
}
export interface QueryRateLimitsByChannelIdRequestSDKType {
    channel_id: string;
}
export interface QueryRateLimitsByChannelIdResponse {
    rateLimits: RateLimit[];
}
export interface QueryRateLimitsByChannelIdResponseSDKType {
    rate_limits: RateLimitSDKType[];
}
export declare const QueryAllRateLimitsRequest: {
    encode(_: QueryAllRateLimitsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllRateLimitsRequest;
    fromPartial(_: DeepPartial<QueryAllRateLimitsRequest>): QueryAllRateLimitsRequest;
};
export declare const QueryAllRateLimitsResponse: {
    encode(message: QueryAllRateLimitsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllRateLimitsResponse;
    fromPartial(object: DeepPartial<QueryAllRateLimitsResponse>): QueryAllRateLimitsResponse;
};
export declare const QueryRateLimitRequest: {
    encode(message: QueryRateLimitRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryRateLimitRequest;
    fromPartial(object: DeepPartial<QueryRateLimitRequest>): QueryRateLimitRequest;
};
export declare const QueryRateLimitResponse: {
    encode(message: QueryRateLimitResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryRateLimitResponse;
    fromPartial(object: DeepPartial<QueryRateLimitResponse>): QueryRateLimitResponse;
};
export declare const QueryRateLimitsByChainIdRequest: {
    encode(message: QueryRateLimitsByChainIdRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryRateLimitsByChainIdRequest;
    fromPartial(object: DeepPartial<QueryRateLimitsByChainIdRequest>): QueryRateLimitsByChainIdRequest;
};
export declare const QueryRateLimitsByChainIdResponse: {
    encode(message: QueryRateLimitsByChainIdResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryRateLimitsByChainIdResponse;
    fromPartial(object: DeepPartial<QueryRateLimitsByChainIdResponse>): QueryRateLimitsByChainIdResponse;
};
export declare const QueryRateLimitsByChannelIdRequest: {
    encode(message: QueryRateLimitsByChannelIdRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryRateLimitsByChannelIdRequest;
    fromPartial(object: DeepPartial<QueryRateLimitsByChannelIdRequest>): QueryRateLimitsByChannelIdRequest;
};
export declare const QueryRateLimitsByChannelIdResponse: {
    encode(message: QueryRateLimitsByChannelIdResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryRateLimitsByChannelIdResponse;
    fromPartial(object: DeepPartial<QueryRateLimitsByChannelIdResponse>): QueryRateLimitsByChannelIdResponse;
};
