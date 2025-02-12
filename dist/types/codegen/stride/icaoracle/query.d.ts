import { Oracle, OracleAmino, OracleSDKType, Metric, MetricAmino, MetricSDKType } from "./icaoracle";
import { BinaryReader, BinaryWriter } from "../../binary";
/** Query's a specific oracle */
export interface QueryOracleRequest {
    chainId: string;
}
export interface QueryOracleRequestProtoMsg {
    typeUrl: "/stride.icaoracle.QueryOracleRequest";
    value: Uint8Array;
}
/** Query's a specific oracle */
export interface QueryOracleRequestAmino {
    chain_id?: string;
}
export interface QueryOracleRequestAminoMsg {
    type: "/stride.icaoracle.QueryOracleRequest";
    value: QueryOracleRequestAmino;
}
/** Query's a specific oracle */
export interface QueryOracleRequestSDKType {
    chain_id: string;
}
export interface QueryOracleResponse {
    oracle?: Oracle;
}
export interface QueryOracleResponseProtoMsg {
    typeUrl: "/stride.icaoracle.QueryOracleResponse";
    value: Uint8Array;
}
export interface QueryOracleResponseAmino {
    oracle?: OracleAmino;
}
export interface QueryOracleResponseAminoMsg {
    type: "/stride.icaoracle.QueryOracleResponse";
    value: QueryOracleResponseAmino;
}
export interface QueryOracleResponseSDKType {
    oracle?: OracleSDKType;
}
/** Query's all oracle's */
export interface QueryAllOraclesRequest {
}
export interface QueryAllOraclesRequestProtoMsg {
    typeUrl: "/stride.icaoracle.QueryAllOraclesRequest";
    value: Uint8Array;
}
/** Query's all oracle's */
export interface QueryAllOraclesRequestAmino {
}
export interface QueryAllOraclesRequestAminoMsg {
    type: "/stride.icaoracle.QueryAllOraclesRequest";
    value: QueryAllOraclesRequestAmino;
}
/** Query's all oracle's */
export interface QueryAllOraclesRequestSDKType {
}
export interface QueryAllOraclesResponse {
    oracles: Oracle[];
}
export interface QueryAllOraclesResponseProtoMsg {
    typeUrl: "/stride.icaoracle.QueryAllOraclesResponse";
    value: Uint8Array;
}
export interface QueryAllOraclesResponseAmino {
    oracles?: OracleAmino[];
}
export interface QueryAllOraclesResponseAminoMsg {
    type: "/stride.icaoracle.QueryAllOraclesResponse";
    value: QueryAllOraclesResponseAmino;
}
export interface QueryAllOraclesResponseSDKType {
    oracles: OracleSDKType[];
}
/** Query's all oracle with a filter for whether they're active */
export interface QueryActiveOraclesRequest {
    active: boolean;
}
export interface QueryActiveOraclesRequestProtoMsg {
    typeUrl: "/stride.icaoracle.QueryActiveOraclesRequest";
    value: Uint8Array;
}
/** Query's all oracle with a filter for whether they're active */
export interface QueryActiveOraclesRequestAmino {
    active?: boolean;
}
export interface QueryActiveOraclesRequestAminoMsg {
    type: "/stride.icaoracle.QueryActiveOraclesRequest";
    value: QueryActiveOraclesRequestAmino;
}
/** Query's all oracle with a filter for whether they're active */
export interface QueryActiveOraclesRequestSDKType {
    active: boolean;
}
export interface QueryActiveOraclesResponse {
    oracles: Oracle[];
}
export interface QueryActiveOraclesResponseProtoMsg {
    typeUrl: "/stride.icaoracle.QueryActiveOraclesResponse";
    value: Uint8Array;
}
export interface QueryActiveOraclesResponseAmino {
    oracles?: OracleAmino[];
}
export interface QueryActiveOraclesResponseAminoMsg {
    type: "/stride.icaoracle.QueryActiveOraclesResponse";
    value: QueryActiveOraclesResponseAmino;
}
export interface QueryActiveOraclesResponseSDKType {
    oracles: OracleSDKType[];
}
/** Query's metric's with optional filters */
export interface QueryMetricsRequest {
    metricKey: string;
    oracleChainId: string;
}
export interface QueryMetricsRequestProtoMsg {
    typeUrl: "/stride.icaoracle.QueryMetricsRequest";
    value: Uint8Array;
}
/** Query's metric's with optional filters */
export interface QueryMetricsRequestAmino {
    metric_key?: string;
    oracle_chain_id?: string;
}
export interface QueryMetricsRequestAminoMsg {
    type: "/stride.icaoracle.QueryMetricsRequest";
    value: QueryMetricsRequestAmino;
}
/** Query's metric's with optional filters */
export interface QueryMetricsRequestSDKType {
    metric_key: string;
    oracle_chain_id: string;
}
export interface QueryMetricsResponse {
    metrics: Metric[];
}
export interface QueryMetricsResponseProtoMsg {
    typeUrl: "/stride.icaoracle.QueryMetricsResponse";
    value: Uint8Array;
}
export interface QueryMetricsResponseAmino {
    metrics?: MetricAmino[];
}
export interface QueryMetricsResponseAminoMsg {
    type: "/stride.icaoracle.QueryMetricsResponse";
    value: QueryMetricsResponseAmino;
}
export interface QueryMetricsResponseSDKType {
    metrics: MetricSDKType[];
}
export declare const QueryOracleRequest: {
    typeUrl: string;
    encode(message: QueryOracleRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryOracleRequest;
    fromPartial(object: Partial<QueryOracleRequest>): QueryOracleRequest;
    fromAmino(object: QueryOracleRequestAmino): QueryOracleRequest;
    toAmino(message: QueryOracleRequest): QueryOracleRequestAmino;
    fromAminoMsg(object: QueryOracleRequestAminoMsg): QueryOracleRequest;
    fromProtoMsg(message: QueryOracleRequestProtoMsg): QueryOracleRequest;
    toProto(message: QueryOracleRequest): Uint8Array;
    toProtoMsg(message: QueryOracleRequest): QueryOracleRequestProtoMsg;
};
export declare const QueryOracleResponse: {
    typeUrl: string;
    encode(message: QueryOracleResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryOracleResponse;
    fromPartial(object: Partial<QueryOracleResponse>): QueryOracleResponse;
    fromAmino(object: QueryOracleResponseAmino): QueryOracleResponse;
    toAmino(message: QueryOracleResponse): QueryOracleResponseAmino;
    fromAminoMsg(object: QueryOracleResponseAminoMsg): QueryOracleResponse;
    fromProtoMsg(message: QueryOracleResponseProtoMsg): QueryOracleResponse;
    toProto(message: QueryOracleResponse): Uint8Array;
    toProtoMsg(message: QueryOracleResponse): QueryOracleResponseProtoMsg;
};
export declare const QueryAllOraclesRequest: {
    typeUrl: string;
    encode(_: QueryAllOraclesRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAllOraclesRequest;
    fromPartial(_: Partial<QueryAllOraclesRequest>): QueryAllOraclesRequest;
    fromAmino(_: QueryAllOraclesRequestAmino): QueryAllOraclesRequest;
    toAmino(_: QueryAllOraclesRequest): QueryAllOraclesRequestAmino;
    fromAminoMsg(object: QueryAllOraclesRequestAminoMsg): QueryAllOraclesRequest;
    fromProtoMsg(message: QueryAllOraclesRequestProtoMsg): QueryAllOraclesRequest;
    toProto(message: QueryAllOraclesRequest): Uint8Array;
    toProtoMsg(message: QueryAllOraclesRequest): QueryAllOraclesRequestProtoMsg;
};
export declare const QueryAllOraclesResponse: {
    typeUrl: string;
    encode(message: QueryAllOraclesResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAllOraclesResponse;
    fromPartial(object: Partial<QueryAllOraclesResponse>): QueryAllOraclesResponse;
    fromAmino(object: QueryAllOraclesResponseAmino): QueryAllOraclesResponse;
    toAmino(message: QueryAllOraclesResponse): QueryAllOraclesResponseAmino;
    fromAminoMsg(object: QueryAllOraclesResponseAminoMsg): QueryAllOraclesResponse;
    fromProtoMsg(message: QueryAllOraclesResponseProtoMsg): QueryAllOraclesResponse;
    toProto(message: QueryAllOraclesResponse): Uint8Array;
    toProtoMsg(message: QueryAllOraclesResponse): QueryAllOraclesResponseProtoMsg;
};
export declare const QueryActiveOraclesRequest: {
    typeUrl: string;
    encode(message: QueryActiveOraclesRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryActiveOraclesRequest;
    fromPartial(object: Partial<QueryActiveOraclesRequest>): QueryActiveOraclesRequest;
    fromAmino(object: QueryActiveOraclesRequestAmino): QueryActiveOraclesRequest;
    toAmino(message: QueryActiveOraclesRequest): QueryActiveOraclesRequestAmino;
    fromAminoMsg(object: QueryActiveOraclesRequestAminoMsg): QueryActiveOraclesRequest;
    fromProtoMsg(message: QueryActiveOraclesRequestProtoMsg): QueryActiveOraclesRequest;
    toProto(message: QueryActiveOraclesRequest): Uint8Array;
    toProtoMsg(message: QueryActiveOraclesRequest): QueryActiveOraclesRequestProtoMsg;
};
export declare const QueryActiveOraclesResponse: {
    typeUrl: string;
    encode(message: QueryActiveOraclesResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryActiveOraclesResponse;
    fromPartial(object: Partial<QueryActiveOraclesResponse>): QueryActiveOraclesResponse;
    fromAmino(object: QueryActiveOraclesResponseAmino): QueryActiveOraclesResponse;
    toAmino(message: QueryActiveOraclesResponse): QueryActiveOraclesResponseAmino;
    fromAminoMsg(object: QueryActiveOraclesResponseAminoMsg): QueryActiveOraclesResponse;
    fromProtoMsg(message: QueryActiveOraclesResponseProtoMsg): QueryActiveOraclesResponse;
    toProto(message: QueryActiveOraclesResponse): Uint8Array;
    toProtoMsg(message: QueryActiveOraclesResponse): QueryActiveOraclesResponseProtoMsg;
};
export declare const QueryMetricsRequest: {
    typeUrl: string;
    encode(message: QueryMetricsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryMetricsRequest;
    fromPartial(object: Partial<QueryMetricsRequest>): QueryMetricsRequest;
    fromAmino(object: QueryMetricsRequestAmino): QueryMetricsRequest;
    toAmino(message: QueryMetricsRequest): QueryMetricsRequestAmino;
    fromAminoMsg(object: QueryMetricsRequestAminoMsg): QueryMetricsRequest;
    fromProtoMsg(message: QueryMetricsRequestProtoMsg): QueryMetricsRequest;
    toProto(message: QueryMetricsRequest): Uint8Array;
    toProtoMsg(message: QueryMetricsRequest): QueryMetricsRequestProtoMsg;
};
export declare const QueryMetricsResponse: {
    typeUrl: string;
    encode(message: QueryMetricsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryMetricsResponse;
    fromPartial(object: Partial<QueryMetricsResponse>): QueryMetricsResponse;
    fromAmino(object: QueryMetricsResponseAmino): QueryMetricsResponse;
    toAmino(message: QueryMetricsResponse): QueryMetricsResponseAmino;
    fromAminoMsg(object: QueryMetricsResponseAminoMsg): QueryMetricsResponse;
    fromProtoMsg(message: QueryMetricsResponseProtoMsg): QueryMetricsResponse;
    toProto(message: QueryMetricsResponse): Uint8Array;
    toProtoMsg(message: QueryMetricsResponse): QueryMetricsResponseProtoMsg;
};
