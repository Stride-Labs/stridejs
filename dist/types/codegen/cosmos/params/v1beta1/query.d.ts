import { ParamChange, ParamChangeAmino, ParamChangeSDKType } from "./params";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
    /** subspace defines the module to query the parameter for. */
    subspace: string;
    /** key defines the key of the parameter in the subspace. */
    key: string;
}
export interface QueryParamsRequestProtoMsg {
    typeUrl: "/cosmos.params.v1beta1.QueryParamsRequest";
    value: Uint8Array;
}
/**
 * QueryParamsRequest is request type for the Query/Params RPC method.
 * @name QueryParamsRequestAmino
 * @package cosmos.params.v1beta1
 * @see proto type: cosmos.params.v1beta1.QueryParamsRequest
 */
export interface QueryParamsRequestAmino {
    /**
     * subspace defines the module to query the parameter for.
     */
    subspace?: string;
    /**
     * key defines the key of the parameter in the subspace.
     */
    key?: string;
}
export interface QueryParamsRequestAminoMsg {
    type: "cosmos-sdk/QueryParamsRequest";
    value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {
    subspace: string;
    key: string;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** param defines the queried parameter. */
    param: ParamChange;
}
export interface QueryParamsResponseProtoMsg {
    typeUrl: "/cosmos.params.v1beta1.QueryParamsResponse";
    value: Uint8Array;
}
/**
 * QueryParamsResponse is response type for the Query/Params RPC method.
 * @name QueryParamsResponseAmino
 * @package cosmos.params.v1beta1
 * @see proto type: cosmos.params.v1beta1.QueryParamsResponse
 */
export interface QueryParamsResponseAmino {
    /**
     * param defines the queried parameter.
     */
    param: ParamChangeAmino;
}
export interface QueryParamsResponseAminoMsg {
    type: "cosmos-sdk/QueryParamsResponse";
    value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
    param: ParamChangeSDKType;
}
/**
 * QuerySubspacesRequest defines a request type for querying for all registered
 * subspaces and all keys for a subspace.
 *
 * Since: cosmos-sdk 0.46
 */
export interface QuerySubspacesRequest {
}
export interface QuerySubspacesRequestProtoMsg {
    typeUrl: "/cosmos.params.v1beta1.QuerySubspacesRequest";
    value: Uint8Array;
}
/**
 * QuerySubspacesRequest defines a request type for querying for all registered
 * subspaces and all keys for a subspace.
 *
 * Since: cosmos-sdk 0.46
 * @name QuerySubspacesRequestAmino
 * @package cosmos.params.v1beta1
 * @see proto type: cosmos.params.v1beta1.QuerySubspacesRequest
 */
export interface QuerySubspacesRequestAmino {
}
export interface QuerySubspacesRequestAminoMsg {
    type: "cosmos-sdk/QuerySubspacesRequest";
    value: QuerySubspacesRequestAmino;
}
/**
 * QuerySubspacesRequest defines a request type for querying for all registered
 * subspaces and all keys for a subspace.
 *
 * Since: cosmos-sdk 0.46
 */
export interface QuerySubspacesRequestSDKType {
}
/**
 * QuerySubspacesResponse defines the response types for querying for all
 * registered subspaces and all keys for a subspace.
 *
 * Since: cosmos-sdk 0.46
 */
export interface QuerySubspacesResponse {
    subspaces: Subspace[];
}
export interface QuerySubspacesResponseProtoMsg {
    typeUrl: "/cosmos.params.v1beta1.QuerySubspacesResponse";
    value: Uint8Array;
}
/**
 * QuerySubspacesResponse defines the response types for querying for all
 * registered subspaces and all keys for a subspace.
 *
 * Since: cosmos-sdk 0.46
 * @name QuerySubspacesResponseAmino
 * @package cosmos.params.v1beta1
 * @see proto type: cosmos.params.v1beta1.QuerySubspacesResponse
 */
export interface QuerySubspacesResponseAmino {
    subspaces?: SubspaceAmino[];
}
export interface QuerySubspacesResponseAminoMsg {
    type: "cosmos-sdk/QuerySubspacesResponse";
    value: QuerySubspacesResponseAmino;
}
/**
 * QuerySubspacesResponse defines the response types for querying for all
 * registered subspaces and all keys for a subspace.
 *
 * Since: cosmos-sdk 0.46
 */
export interface QuerySubspacesResponseSDKType {
    subspaces: SubspaceSDKType[];
}
/**
 * Subspace defines a parameter subspace name and all the keys that exist for
 * the subspace.
 *
 * Since: cosmos-sdk 0.46
 */
export interface Subspace {
    subspace: string;
    keys: string[];
}
export interface SubspaceProtoMsg {
    typeUrl: "/cosmos.params.v1beta1.Subspace";
    value: Uint8Array;
}
/**
 * Subspace defines a parameter subspace name and all the keys that exist for
 * the subspace.
 *
 * Since: cosmos-sdk 0.46
 * @name SubspaceAmino
 * @package cosmos.params.v1beta1
 * @see proto type: cosmos.params.v1beta1.Subspace
 */
export interface SubspaceAmino {
    subspace?: string;
    keys?: string[];
}
export interface SubspaceAminoMsg {
    type: "cosmos-sdk/Subspace";
    value: SubspaceAmino;
}
/**
 * Subspace defines a parameter subspace name and all the keys that exist for
 * the subspace.
 *
 * Since: cosmos-sdk 0.46
 */
export interface SubspaceSDKType {
    subspace: string;
    keys: string[];
}
export declare const QueryParamsRequest: {
    typeUrl: string;
    encode(message: QueryParamsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest;
    fromPartial(object: Partial<QueryParamsRequest>): QueryParamsRequest;
    fromAmino(object: QueryParamsRequestAmino): QueryParamsRequest;
    toAmino(message: QueryParamsRequest): QueryParamsRequestAmino;
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
export declare const QuerySubspacesRequest: {
    typeUrl: string;
    encode(_: QuerySubspacesRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QuerySubspacesRequest;
    fromPartial(_: Partial<QuerySubspacesRequest>): QuerySubspacesRequest;
    fromAmino(_: QuerySubspacesRequestAmino): QuerySubspacesRequest;
    toAmino(_: QuerySubspacesRequest): QuerySubspacesRequestAmino;
    fromAminoMsg(object: QuerySubspacesRequestAminoMsg): QuerySubspacesRequest;
    toAminoMsg(message: QuerySubspacesRequest): QuerySubspacesRequestAminoMsg;
    fromProtoMsg(message: QuerySubspacesRequestProtoMsg): QuerySubspacesRequest;
    toProto(message: QuerySubspacesRequest): Uint8Array;
    toProtoMsg(message: QuerySubspacesRequest): QuerySubspacesRequestProtoMsg;
};
export declare const QuerySubspacesResponse: {
    typeUrl: string;
    encode(message: QuerySubspacesResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QuerySubspacesResponse;
    fromPartial(object: Partial<QuerySubspacesResponse>): QuerySubspacesResponse;
    fromAmino(object: QuerySubspacesResponseAmino): QuerySubspacesResponse;
    toAmino(message: QuerySubspacesResponse): QuerySubspacesResponseAmino;
    fromAminoMsg(object: QuerySubspacesResponseAminoMsg): QuerySubspacesResponse;
    toAminoMsg(message: QuerySubspacesResponse): QuerySubspacesResponseAminoMsg;
    fromProtoMsg(message: QuerySubspacesResponseProtoMsg): QuerySubspacesResponse;
    toProto(message: QuerySubspacesResponse): Uint8Array;
    toProtoMsg(message: QuerySubspacesResponse): QuerySubspacesResponseProtoMsg;
};
export declare const Subspace: {
    typeUrl: string;
    encode(message: Subspace, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Subspace;
    fromPartial(object: Partial<Subspace>): Subspace;
    fromAmino(object: SubspaceAmino): Subspace;
    toAmino(message: Subspace): SubspaceAmino;
    fromAminoMsg(object: SubspaceAminoMsg): Subspace;
    toAminoMsg(message: Subspace): SubspaceAminoMsg;
    fromProtoMsg(message: SubspaceProtoMsg): Subspace;
    toProto(message: Subspace): Uint8Array;
    toProtoMsg(message: Subspace): SubspaceProtoMsg;
};
