import { BinaryReader, BinaryWriter } from "../../binary";
/**
 * QueryStrdBurnerAddressRequest is the request type for the Query/strdburner
 * RPC method
 */
export interface QueryStrdBurnerAddressRequest {
}
export interface QueryStrdBurnerAddressRequestProtoMsg {
    typeUrl: "/stride.strdburner.QueryStrdBurnerAddressRequest";
    value: Uint8Array;
}
/**
 * QueryStrdBurnerAddressRequest is the request type for the Query/strdburner
 * RPC method
 * @name QueryStrdBurnerAddressRequestAmino
 * @package stride.strdburner
 * @see proto type: stride.strdburner.QueryStrdBurnerAddressRequest
 */
export interface QueryStrdBurnerAddressRequestAmino {
}
export interface QueryStrdBurnerAddressRequestAminoMsg {
    type: "/stride.strdburner.QueryStrdBurnerAddressRequest";
    value: QueryStrdBurnerAddressRequestAmino;
}
/**
 * QueryStrdBurnerAddressRequest is the request type for the Query/strdburner
 * RPC method
 */
export interface QueryStrdBurnerAddressRequestSDKType {
}
/**
 * QueryStrdBurnerAddressResponse is the response type for the Query/strdburner
 * RPC method
 */
export interface QueryStrdBurnerAddressResponse {
    address: string;
}
export interface QueryStrdBurnerAddressResponseProtoMsg {
    typeUrl: "/stride.strdburner.QueryStrdBurnerAddressResponse";
    value: Uint8Array;
}
/**
 * QueryStrdBurnerAddressResponse is the response type for the Query/strdburner
 * RPC method
 * @name QueryStrdBurnerAddressResponseAmino
 * @package stride.strdburner
 * @see proto type: stride.strdburner.QueryStrdBurnerAddressResponse
 */
export interface QueryStrdBurnerAddressResponseAmino {
    address?: string;
}
export interface QueryStrdBurnerAddressResponseAminoMsg {
    type: "/stride.strdburner.QueryStrdBurnerAddressResponse";
    value: QueryStrdBurnerAddressResponseAmino;
}
/**
 * QueryStrdBurnerAddressResponse is the response type for the Query/strdburner
 * RPC method
 */
export interface QueryStrdBurnerAddressResponseSDKType {
    address: string;
}
/**
 * QueryTotalStrdBurnedRequest is the request type for the Query/strdburner
 * RPC method
 */
export interface QueryTotalStrdBurnedRequest {
}
export interface QueryTotalStrdBurnedRequestProtoMsg {
    typeUrl: "/stride.strdburner.QueryTotalStrdBurnedRequest";
    value: Uint8Array;
}
/**
 * QueryTotalStrdBurnedRequest is the request type for the Query/strdburner
 * RPC method
 * @name QueryTotalStrdBurnedRequestAmino
 * @package stride.strdburner
 * @see proto type: stride.strdburner.QueryTotalStrdBurnedRequest
 */
export interface QueryTotalStrdBurnedRequestAmino {
}
export interface QueryTotalStrdBurnedRequestAminoMsg {
    type: "/stride.strdburner.QueryTotalStrdBurnedRequest";
    value: QueryTotalStrdBurnedRequestAmino;
}
/**
 * QueryTotalStrdBurnedRequest is the request type for the Query/strdburner
 * RPC method
 */
export interface QueryTotalStrdBurnedRequestSDKType {
}
/**
 * QueryTotalStrdBurnedResponse is the response type for the Query/strdburner
 * RPC method
 */
export interface QueryTotalStrdBurnedResponse {
    totalBurned: string;
    protocolBurned: string;
    totalUserBurned: string;
}
export interface QueryTotalStrdBurnedResponseProtoMsg {
    typeUrl: "/stride.strdburner.QueryTotalStrdBurnedResponse";
    value: Uint8Array;
}
/**
 * QueryTotalStrdBurnedResponse is the response type for the Query/strdburner
 * RPC method
 * @name QueryTotalStrdBurnedResponseAmino
 * @package stride.strdburner
 * @see proto type: stride.strdburner.QueryTotalStrdBurnedResponse
 */
export interface QueryTotalStrdBurnedResponseAmino {
    total_burned?: string;
    protocol_burned?: string;
    total_user_burned?: string;
}
export interface QueryTotalStrdBurnedResponseAminoMsg {
    type: "/stride.strdburner.QueryTotalStrdBurnedResponse";
    value: QueryTotalStrdBurnedResponseAmino;
}
/**
 * QueryTotalStrdBurnedResponse is the response type for the Query/strdburner
 * RPC method
 */
export interface QueryTotalStrdBurnedResponseSDKType {
    total_burned: string;
    protocol_burned: string;
    total_user_burned: string;
}
/**
 * QueryStrdBurnedByAddressRequest is the request type for the Query/strdburner
 * RPC method
 */
export interface QueryStrdBurnedByAddressRequest {
    address: string;
}
export interface QueryStrdBurnedByAddressRequestProtoMsg {
    typeUrl: "/stride.strdburner.QueryStrdBurnedByAddressRequest";
    value: Uint8Array;
}
/**
 * QueryStrdBurnedByAddressRequest is the request type for the Query/strdburner
 * RPC method
 * @name QueryStrdBurnedByAddressRequestAmino
 * @package stride.strdburner
 * @see proto type: stride.strdburner.QueryStrdBurnedByAddressRequest
 */
export interface QueryStrdBurnedByAddressRequestAmino {
    address?: string;
}
export interface QueryStrdBurnedByAddressRequestAminoMsg {
    type: "/stride.strdburner.QueryStrdBurnedByAddressRequest";
    value: QueryStrdBurnedByAddressRequestAmino;
}
/**
 * QueryStrdBurnedByAddressRequest is the request type for the Query/strdburner
 * RPC method
 */
export interface QueryStrdBurnedByAddressRequestSDKType {
    address: string;
}
/**
 * QueryStrdBurnedByAddressResponse is the response type for the
 * Query/strdburner RPC method
 */
export interface QueryStrdBurnedByAddressResponse {
    burnedAmount: string;
}
export interface QueryStrdBurnedByAddressResponseProtoMsg {
    typeUrl: "/stride.strdburner.QueryStrdBurnedByAddressResponse";
    value: Uint8Array;
}
/**
 * QueryStrdBurnedByAddressResponse is the response type for the
 * Query/strdburner RPC method
 * @name QueryStrdBurnedByAddressResponseAmino
 * @package stride.strdburner
 * @see proto type: stride.strdburner.QueryStrdBurnedByAddressResponse
 */
export interface QueryStrdBurnedByAddressResponseAmino {
    burned_amount?: string;
}
export interface QueryStrdBurnedByAddressResponseAminoMsg {
    type: "/stride.strdburner.QueryStrdBurnedByAddressResponse";
    value: QueryStrdBurnedByAddressResponseAmino;
}
/**
 * QueryStrdBurnedByAddressResponse is the response type for the
 * Query/strdburner RPC method
 */
export interface QueryStrdBurnedByAddressResponseSDKType {
    burned_amount: string;
}
/**
 * QueryLinkedAddressRequest is the request type for the Query/strdburner
 * RPC method
 */
export interface QueryLinkedAddressRequest {
    strideAddress: string;
}
export interface QueryLinkedAddressRequestProtoMsg {
    typeUrl: "/stride.strdburner.QueryLinkedAddressRequest";
    value: Uint8Array;
}
/**
 * QueryLinkedAddressRequest is the request type for the Query/strdburner
 * RPC method
 * @name QueryLinkedAddressRequestAmino
 * @package stride.strdburner
 * @see proto type: stride.strdburner.QueryLinkedAddressRequest
 */
export interface QueryLinkedAddressRequestAmino {
    stride_address?: string;
}
export interface QueryLinkedAddressRequestAminoMsg {
    type: "/stride.strdburner.QueryLinkedAddressRequest";
    value: QueryLinkedAddressRequestAmino;
}
/**
 * QueryLinkedAddressRequest is the request type for the Query/strdburner
 * RPC method
 */
export interface QueryLinkedAddressRequestSDKType {
    stride_address: string;
}
/**
 * QueryLinkedAddressResponse is the response type for the
 * Query/strdburner RPC method
 */
export interface QueryLinkedAddressResponse {
    linkedAddress: string;
}
export interface QueryLinkedAddressResponseProtoMsg {
    typeUrl: "/stride.strdburner.QueryLinkedAddressResponse";
    value: Uint8Array;
}
/**
 * QueryLinkedAddressResponse is the response type for the
 * Query/strdburner RPC method
 * @name QueryLinkedAddressResponseAmino
 * @package stride.strdburner
 * @see proto type: stride.strdburner.QueryLinkedAddressResponse
 */
export interface QueryLinkedAddressResponseAmino {
    linked_address?: string;
}
export interface QueryLinkedAddressResponseAminoMsg {
    type: "/stride.strdburner.QueryLinkedAddressResponse";
    value: QueryLinkedAddressResponseAmino;
}
/**
 * QueryLinkedAddressResponse is the response type for the
 * Query/strdburner RPC method
 */
export interface QueryLinkedAddressResponseSDKType {
    linked_address: string;
}
export declare const QueryStrdBurnerAddressRequest: {
    typeUrl: string;
    encode(_: QueryStrdBurnerAddressRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryStrdBurnerAddressRequest;
    fromPartial(_: Partial<QueryStrdBurnerAddressRequest>): QueryStrdBurnerAddressRequest;
    fromAmino(_: QueryStrdBurnerAddressRequestAmino): QueryStrdBurnerAddressRequest;
    toAmino(_: QueryStrdBurnerAddressRequest): QueryStrdBurnerAddressRequestAmino;
    fromAminoMsg(object: QueryStrdBurnerAddressRequestAminoMsg): QueryStrdBurnerAddressRequest;
    fromProtoMsg(message: QueryStrdBurnerAddressRequestProtoMsg): QueryStrdBurnerAddressRequest;
    toProto(message: QueryStrdBurnerAddressRequest): Uint8Array;
    toProtoMsg(message: QueryStrdBurnerAddressRequest): QueryStrdBurnerAddressRequestProtoMsg;
};
export declare const QueryStrdBurnerAddressResponse: {
    typeUrl: string;
    encode(message: QueryStrdBurnerAddressResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryStrdBurnerAddressResponse;
    fromPartial(object: Partial<QueryStrdBurnerAddressResponse>): QueryStrdBurnerAddressResponse;
    fromAmino(object: QueryStrdBurnerAddressResponseAmino): QueryStrdBurnerAddressResponse;
    toAmino(message: QueryStrdBurnerAddressResponse): QueryStrdBurnerAddressResponseAmino;
    fromAminoMsg(object: QueryStrdBurnerAddressResponseAminoMsg): QueryStrdBurnerAddressResponse;
    fromProtoMsg(message: QueryStrdBurnerAddressResponseProtoMsg): QueryStrdBurnerAddressResponse;
    toProto(message: QueryStrdBurnerAddressResponse): Uint8Array;
    toProtoMsg(message: QueryStrdBurnerAddressResponse): QueryStrdBurnerAddressResponseProtoMsg;
};
export declare const QueryTotalStrdBurnedRequest: {
    typeUrl: string;
    encode(_: QueryTotalStrdBurnedRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalStrdBurnedRequest;
    fromPartial(_: Partial<QueryTotalStrdBurnedRequest>): QueryTotalStrdBurnedRequest;
    fromAmino(_: QueryTotalStrdBurnedRequestAmino): QueryTotalStrdBurnedRequest;
    toAmino(_: QueryTotalStrdBurnedRequest): QueryTotalStrdBurnedRequestAmino;
    fromAminoMsg(object: QueryTotalStrdBurnedRequestAminoMsg): QueryTotalStrdBurnedRequest;
    fromProtoMsg(message: QueryTotalStrdBurnedRequestProtoMsg): QueryTotalStrdBurnedRequest;
    toProto(message: QueryTotalStrdBurnedRequest): Uint8Array;
    toProtoMsg(message: QueryTotalStrdBurnedRequest): QueryTotalStrdBurnedRequestProtoMsg;
};
export declare const QueryTotalStrdBurnedResponse: {
    typeUrl: string;
    encode(message: QueryTotalStrdBurnedResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalStrdBurnedResponse;
    fromPartial(object: Partial<QueryTotalStrdBurnedResponse>): QueryTotalStrdBurnedResponse;
    fromAmino(object: QueryTotalStrdBurnedResponseAmino): QueryTotalStrdBurnedResponse;
    toAmino(message: QueryTotalStrdBurnedResponse): QueryTotalStrdBurnedResponseAmino;
    fromAminoMsg(object: QueryTotalStrdBurnedResponseAminoMsg): QueryTotalStrdBurnedResponse;
    fromProtoMsg(message: QueryTotalStrdBurnedResponseProtoMsg): QueryTotalStrdBurnedResponse;
    toProto(message: QueryTotalStrdBurnedResponse): Uint8Array;
    toProtoMsg(message: QueryTotalStrdBurnedResponse): QueryTotalStrdBurnedResponseProtoMsg;
};
export declare const QueryStrdBurnedByAddressRequest: {
    typeUrl: string;
    encode(message: QueryStrdBurnedByAddressRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryStrdBurnedByAddressRequest;
    fromPartial(object: Partial<QueryStrdBurnedByAddressRequest>): QueryStrdBurnedByAddressRequest;
    fromAmino(object: QueryStrdBurnedByAddressRequestAmino): QueryStrdBurnedByAddressRequest;
    toAmino(message: QueryStrdBurnedByAddressRequest): QueryStrdBurnedByAddressRequestAmino;
    fromAminoMsg(object: QueryStrdBurnedByAddressRequestAminoMsg): QueryStrdBurnedByAddressRequest;
    fromProtoMsg(message: QueryStrdBurnedByAddressRequestProtoMsg): QueryStrdBurnedByAddressRequest;
    toProto(message: QueryStrdBurnedByAddressRequest): Uint8Array;
    toProtoMsg(message: QueryStrdBurnedByAddressRequest): QueryStrdBurnedByAddressRequestProtoMsg;
};
export declare const QueryStrdBurnedByAddressResponse: {
    typeUrl: string;
    encode(message: QueryStrdBurnedByAddressResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryStrdBurnedByAddressResponse;
    fromPartial(object: Partial<QueryStrdBurnedByAddressResponse>): QueryStrdBurnedByAddressResponse;
    fromAmino(object: QueryStrdBurnedByAddressResponseAmino): QueryStrdBurnedByAddressResponse;
    toAmino(message: QueryStrdBurnedByAddressResponse): QueryStrdBurnedByAddressResponseAmino;
    fromAminoMsg(object: QueryStrdBurnedByAddressResponseAminoMsg): QueryStrdBurnedByAddressResponse;
    fromProtoMsg(message: QueryStrdBurnedByAddressResponseProtoMsg): QueryStrdBurnedByAddressResponse;
    toProto(message: QueryStrdBurnedByAddressResponse): Uint8Array;
    toProtoMsg(message: QueryStrdBurnedByAddressResponse): QueryStrdBurnedByAddressResponseProtoMsg;
};
export declare const QueryLinkedAddressRequest: {
    typeUrl: string;
    encode(message: QueryLinkedAddressRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryLinkedAddressRequest;
    fromPartial(object: Partial<QueryLinkedAddressRequest>): QueryLinkedAddressRequest;
    fromAmino(object: QueryLinkedAddressRequestAmino): QueryLinkedAddressRequest;
    toAmino(message: QueryLinkedAddressRequest): QueryLinkedAddressRequestAmino;
    fromAminoMsg(object: QueryLinkedAddressRequestAminoMsg): QueryLinkedAddressRequest;
    fromProtoMsg(message: QueryLinkedAddressRequestProtoMsg): QueryLinkedAddressRequest;
    toProto(message: QueryLinkedAddressRequest): Uint8Array;
    toProtoMsg(message: QueryLinkedAddressRequest): QueryLinkedAddressRequestProtoMsg;
};
export declare const QueryLinkedAddressResponse: {
    typeUrl: string;
    encode(message: QueryLinkedAddressResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryLinkedAddressResponse;
    fromPartial(object: Partial<QueryLinkedAddressResponse>): QueryLinkedAddressResponse;
    fromAmino(object: QueryLinkedAddressResponseAmino): QueryLinkedAddressResponse;
    toAmino(message: QueryLinkedAddressResponse): QueryLinkedAddressResponseAmino;
    fromAminoMsg(object: QueryLinkedAddressResponseAminoMsg): QueryLinkedAddressResponse;
    fromProtoMsg(message: QueryLinkedAddressResponseProtoMsg): QueryLinkedAddressResponse;
    toProto(message: QueryLinkedAddressResponse): Uint8Array;
    toProtoMsg(message: QueryLinkedAddressResponse): QueryLinkedAddressResponseProtoMsg;
};
