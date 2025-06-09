import { Query, QueryAmino, QuerySDKType } from "./genesis";
import { BinaryReader, BinaryWriter } from "../../../binary";
export interface QueryPendingQueriesRequest {
}
export interface QueryPendingQueriesRequestProtoMsg {
    typeUrl: "/stride.interchainquery.v1.QueryPendingQueriesRequest";
    value: Uint8Array;
}
/**
 * @name QueryPendingQueriesRequestAmino
 * @package stride.interchainquery.v1
 * @see proto type: stride.interchainquery.v1.QueryPendingQueriesRequest
 */
export interface QueryPendingQueriesRequestAmino {
}
export interface QueryPendingQueriesRequestAminoMsg {
    type: "/stride.interchainquery.v1.QueryPendingQueriesRequest";
    value: QueryPendingQueriesRequestAmino;
}
export interface QueryPendingQueriesRequestSDKType {
}
export interface QueryPendingQueriesResponse {
    pendingQueries: Query[];
}
export interface QueryPendingQueriesResponseProtoMsg {
    typeUrl: "/stride.interchainquery.v1.QueryPendingQueriesResponse";
    value: Uint8Array;
}
/**
 * @name QueryPendingQueriesResponseAmino
 * @package stride.interchainquery.v1
 * @see proto type: stride.interchainquery.v1.QueryPendingQueriesResponse
 */
export interface QueryPendingQueriesResponseAmino {
    pending_queries?: QueryAmino[];
}
export interface QueryPendingQueriesResponseAminoMsg {
    type: "/stride.interchainquery.v1.QueryPendingQueriesResponse";
    value: QueryPendingQueriesResponseAmino;
}
export interface QueryPendingQueriesResponseSDKType {
    pending_queries: QuerySDKType[];
}
export declare const QueryPendingQueriesRequest: {
    typeUrl: string;
    encode(_: QueryPendingQueriesRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryPendingQueriesRequest;
    fromPartial(_: Partial<QueryPendingQueriesRequest>): QueryPendingQueriesRequest;
    fromAmino(_: QueryPendingQueriesRequestAmino): QueryPendingQueriesRequest;
    toAmino(_: QueryPendingQueriesRequest): QueryPendingQueriesRequestAmino;
    fromAminoMsg(object: QueryPendingQueriesRequestAminoMsg): QueryPendingQueriesRequest;
    fromProtoMsg(message: QueryPendingQueriesRequestProtoMsg): QueryPendingQueriesRequest;
    toProto(message: QueryPendingQueriesRequest): Uint8Array;
    toProtoMsg(message: QueryPendingQueriesRequest): QueryPendingQueriesRequestProtoMsg;
};
export declare const QueryPendingQueriesResponse: {
    typeUrl: string;
    encode(message: QueryPendingQueriesResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryPendingQueriesResponse;
    fromPartial(object: Partial<QueryPendingQueriesResponse>): QueryPendingQueriesResponse;
    fromAmino(object: QueryPendingQueriesResponseAmino): QueryPendingQueriesResponse;
    toAmino(message: QueryPendingQueriesResponse): QueryPendingQueriesResponseAmino;
    fromAminoMsg(object: QueryPendingQueriesResponseAminoMsg): QueryPendingQueriesResponse;
    fromProtoMsg(message: QueryPendingQueriesResponseProtoMsg): QueryPendingQueriesResponse;
    toProto(message: QueryPendingQueriesResponse): Uint8Array;
    toProtoMsg(message: QueryPendingQueriesResponse): QueryPendingQueriesResponseProtoMsg;
};
