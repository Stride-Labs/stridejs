import { BinaryReader, BinaryWriter } from "../../../../binary";
/** ListAllInterfacesRequest is the request type of the ListAllInterfaces RPC. */
export interface ListAllInterfacesRequest {
}
export interface ListAllInterfacesRequestProtoMsg {
    typeUrl: "/cosmos.base.reflection.v1beta1.ListAllInterfacesRequest";
    value: Uint8Array;
}
/** ListAllInterfacesRequest is the request type of the ListAllInterfaces RPC. */
export interface ListAllInterfacesRequestAmino {
}
export interface ListAllInterfacesRequestAminoMsg {
    type: "cosmos-sdk/ListAllInterfacesRequest";
    value: ListAllInterfacesRequestAmino;
}
/** ListAllInterfacesRequest is the request type of the ListAllInterfaces RPC. */
export interface ListAllInterfacesRequestSDKType {
}
/** ListAllInterfacesResponse is the response type of the ListAllInterfaces RPC. */
export interface ListAllInterfacesResponse {
    /** interface_names is an array of all the registered interfaces. */
    interfaceNames: string[];
}
export interface ListAllInterfacesResponseProtoMsg {
    typeUrl: "/cosmos.base.reflection.v1beta1.ListAllInterfacesResponse";
    value: Uint8Array;
}
/** ListAllInterfacesResponse is the response type of the ListAllInterfaces RPC. */
export interface ListAllInterfacesResponseAmino {
    /** interface_names is an array of all the registered interfaces. */
    interface_names?: string[];
}
export interface ListAllInterfacesResponseAminoMsg {
    type: "cosmos-sdk/ListAllInterfacesResponse";
    value: ListAllInterfacesResponseAmino;
}
/** ListAllInterfacesResponse is the response type of the ListAllInterfaces RPC. */
export interface ListAllInterfacesResponseSDKType {
    interface_names: string[];
}
/**
 * ListImplementationsRequest is the request type of the ListImplementations
 * RPC.
 */
export interface ListImplementationsRequest {
    /** interface_name defines the interface to query the implementations for. */
    interfaceName: string;
}
export interface ListImplementationsRequestProtoMsg {
    typeUrl: "/cosmos.base.reflection.v1beta1.ListImplementationsRequest";
    value: Uint8Array;
}
/**
 * ListImplementationsRequest is the request type of the ListImplementations
 * RPC.
 */
export interface ListImplementationsRequestAmino {
    /** interface_name defines the interface to query the implementations for. */
    interface_name?: string;
}
export interface ListImplementationsRequestAminoMsg {
    type: "cosmos-sdk/ListImplementationsRequest";
    value: ListImplementationsRequestAmino;
}
/**
 * ListImplementationsRequest is the request type of the ListImplementations
 * RPC.
 */
export interface ListImplementationsRequestSDKType {
    interface_name: string;
}
/**
 * ListImplementationsResponse is the response type of the ListImplementations
 * RPC.
 */
export interface ListImplementationsResponse {
    implementationMessageNames: string[];
}
export interface ListImplementationsResponseProtoMsg {
    typeUrl: "/cosmos.base.reflection.v1beta1.ListImplementationsResponse";
    value: Uint8Array;
}
/**
 * ListImplementationsResponse is the response type of the ListImplementations
 * RPC.
 */
export interface ListImplementationsResponseAmino {
    implementation_message_names?: string[];
}
export interface ListImplementationsResponseAminoMsg {
    type: "cosmos-sdk/ListImplementationsResponse";
    value: ListImplementationsResponseAmino;
}
/**
 * ListImplementationsResponse is the response type of the ListImplementations
 * RPC.
 */
export interface ListImplementationsResponseSDKType {
    implementation_message_names: string[];
}
export declare const ListAllInterfacesRequest: {
    typeUrl: string;
    encode(_: ListAllInterfacesRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ListAllInterfacesRequest;
    fromPartial(_: Partial<ListAllInterfacesRequest>): ListAllInterfacesRequest;
    fromAmino(_: ListAllInterfacesRequestAmino): ListAllInterfacesRequest;
    toAmino(_: ListAllInterfacesRequest): ListAllInterfacesRequestAmino;
    fromAminoMsg(object: ListAllInterfacesRequestAminoMsg): ListAllInterfacesRequest;
    toAminoMsg(message: ListAllInterfacesRequest): ListAllInterfacesRequestAminoMsg;
    fromProtoMsg(message: ListAllInterfacesRequestProtoMsg): ListAllInterfacesRequest;
    toProto(message: ListAllInterfacesRequest): Uint8Array;
    toProtoMsg(message: ListAllInterfacesRequest): ListAllInterfacesRequestProtoMsg;
};
export declare const ListAllInterfacesResponse: {
    typeUrl: string;
    encode(message: ListAllInterfacesResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ListAllInterfacesResponse;
    fromPartial(object: Partial<ListAllInterfacesResponse>): ListAllInterfacesResponse;
    fromAmino(object: ListAllInterfacesResponseAmino): ListAllInterfacesResponse;
    toAmino(message: ListAllInterfacesResponse): ListAllInterfacesResponseAmino;
    fromAminoMsg(object: ListAllInterfacesResponseAminoMsg): ListAllInterfacesResponse;
    toAminoMsg(message: ListAllInterfacesResponse): ListAllInterfacesResponseAminoMsg;
    fromProtoMsg(message: ListAllInterfacesResponseProtoMsg): ListAllInterfacesResponse;
    toProto(message: ListAllInterfacesResponse): Uint8Array;
    toProtoMsg(message: ListAllInterfacesResponse): ListAllInterfacesResponseProtoMsg;
};
export declare const ListImplementationsRequest: {
    typeUrl: string;
    encode(message: ListImplementationsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ListImplementationsRequest;
    fromPartial(object: Partial<ListImplementationsRequest>): ListImplementationsRequest;
    fromAmino(object: ListImplementationsRequestAmino): ListImplementationsRequest;
    toAmino(message: ListImplementationsRequest): ListImplementationsRequestAmino;
    fromAminoMsg(object: ListImplementationsRequestAminoMsg): ListImplementationsRequest;
    toAminoMsg(message: ListImplementationsRequest): ListImplementationsRequestAminoMsg;
    fromProtoMsg(message: ListImplementationsRequestProtoMsg): ListImplementationsRequest;
    toProto(message: ListImplementationsRequest): Uint8Array;
    toProtoMsg(message: ListImplementationsRequest): ListImplementationsRequestProtoMsg;
};
export declare const ListImplementationsResponse: {
    typeUrl: string;
    encode(message: ListImplementationsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ListImplementationsResponse;
    fromPartial(object: Partial<ListImplementationsResponse>): ListImplementationsResponse;
    fromAmino(object: ListImplementationsResponseAmino): ListImplementationsResponse;
    toAmino(message: ListImplementationsResponse): ListImplementationsResponseAmino;
    fromAminoMsg(object: ListImplementationsResponseAminoMsg): ListImplementationsResponse;
    toAminoMsg(message: ListImplementationsResponse): ListImplementationsResponseAminoMsg;
    fromProtoMsg(message: ListImplementationsResponseProtoMsg): ListImplementationsResponse;
    toProto(message: ListImplementationsResponse): Uint8Array;
    toProtoMsg(message: ListImplementationsResponse): ListImplementationsResponseProtoMsg;
};
