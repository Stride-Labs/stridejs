import { Oracle, OracleSDKType, Metric, MetricSDKType } from "./icaoracle";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
/** Query's a specific oracle */
export interface QueryOracleRequest {
    /** Query's a specific oracle */
    chainId: string;
}
/** Query's a specific oracle */
export interface QueryOracleRequestSDKType {
    /** Query's a specific oracle */
    chain_id: string;
}
export interface QueryOracleResponse {
    oracle: Oracle;
}
export interface QueryOracleResponseSDKType {
    oracle: OracleSDKType;
}
/** Query's all oracle's */
export interface QueryAllOraclesRequest {
}
/** Query's all oracle's */
export interface QueryAllOraclesRequestSDKType {
}
export interface QueryAllOraclesResponse {
    oracles: Oracle[];
}
export interface QueryAllOraclesResponseSDKType {
    oracles: OracleSDKType[];
}
/** Query's all oracle with a filter for whether they're active */
export interface QueryActiveOraclesRequest {
    /** Query's all oracle with a filter for whether they're active */
    active?: boolean;
}
/** Query's all oracle with a filter for whether they're active */
export interface QueryActiveOraclesRequestSDKType {
    /** Query's all oracle with a filter for whether they're active */
    active?: boolean;
}
export interface QueryActiveOraclesResponse {
    oracles: Oracle[];
}
export interface QueryActiveOraclesResponseSDKType {
    oracles: OracleSDKType[];
}
/** Query's metric's with optional filters */
export interface QueryMetricsRequest {
    metricKey?: string;
    oracleChainId?: string;
}
/** Query's metric's with optional filters */
export interface QueryMetricsRequestSDKType {
    metric_key?: string;
    oracle_chain_id?: string;
}
export interface QueryMetricsResponse {
    metrics: Metric[];
}
export interface QueryMetricsResponseSDKType {
    metrics: MetricSDKType[];
}
export declare const QueryOracleRequest: {
    encode(message: QueryOracleRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryOracleRequest;
    fromPartial(object: DeepPartial<QueryOracleRequest>): QueryOracleRequest;
};
export declare const QueryOracleResponse: {
    encode(message: QueryOracleResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryOracleResponse;
    fromPartial(object: DeepPartial<QueryOracleResponse>): QueryOracleResponse;
};
export declare const QueryAllOraclesRequest: {
    encode(_: QueryAllOraclesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllOraclesRequest;
    fromPartial(_: DeepPartial<QueryAllOraclesRequest>): QueryAllOraclesRequest;
};
export declare const QueryAllOraclesResponse: {
    encode(message: QueryAllOraclesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllOraclesResponse;
    fromPartial(object: DeepPartial<QueryAllOraclesResponse>): QueryAllOraclesResponse;
};
export declare const QueryActiveOraclesRequest: {
    encode(message: QueryActiveOraclesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryActiveOraclesRequest;
    fromPartial(object: DeepPartial<QueryActiveOraclesRequest>): QueryActiveOraclesRequest;
};
export declare const QueryActiveOraclesResponse: {
    encode(message: QueryActiveOraclesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryActiveOraclesResponse;
    fromPartial(object: DeepPartial<QueryActiveOraclesResponse>): QueryActiveOraclesResponse;
};
export declare const QueryMetricsRequest: {
    encode(message: QueryMetricsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryMetricsRequest;
    fromPartial(object: DeepPartial<QueryMetricsRequest>): QueryMetricsRequest;
};
export declare const QueryMetricsResponse: {
    encode(message: QueryMetricsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryMetricsResponse;
    fromPartial(object: DeepPartial<QueryMetricsResponse>): QueryMetricsResponse;
};
