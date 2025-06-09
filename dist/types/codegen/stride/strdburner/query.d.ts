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
