import { Config, ConfigAmino, ConfigSDKType } from "./config";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** QueryConfigRequest is the Query/Config request type. */
export interface QueryConfigRequest {
}
export interface QueryConfigRequestProtoMsg {
    typeUrl: "/cosmos.app.v1alpha1.QueryConfigRequest";
    value: Uint8Array;
}
/** QueryConfigRequest is the Query/Config request type. */
export interface QueryConfigRequestAmino {
}
export interface QueryConfigRequestAminoMsg {
    type: "cosmos-sdk/QueryConfigRequest";
    value: QueryConfigRequestAmino;
}
/** QueryConfigRequest is the Query/Config request type. */
export interface QueryConfigRequestSDKType {
}
/** QueryConfigRequest is the Query/Config response type. */
export interface QueryConfigResponse {
    /** config is the current app config. */
    config?: Config;
}
export interface QueryConfigResponseProtoMsg {
    typeUrl: "/cosmos.app.v1alpha1.QueryConfigResponse";
    value: Uint8Array;
}
/** QueryConfigRequest is the Query/Config response type. */
export interface QueryConfigResponseAmino {
    /** config is the current app config. */
    config?: ConfigAmino;
}
export interface QueryConfigResponseAminoMsg {
    type: "cosmos-sdk/QueryConfigResponse";
    value: QueryConfigResponseAmino;
}
/** QueryConfigRequest is the Query/Config response type. */
export interface QueryConfigResponseSDKType {
    config?: ConfigSDKType;
}
export declare const QueryConfigRequest: {
    typeUrl: string;
    encode(_: QueryConfigRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryConfigRequest;
    fromPartial(_: Partial<QueryConfigRequest>): QueryConfigRequest;
    fromAmino(_: QueryConfigRequestAmino): QueryConfigRequest;
    toAmino(_: QueryConfigRequest): QueryConfigRequestAmino;
    fromAminoMsg(object: QueryConfigRequestAminoMsg): QueryConfigRequest;
    toAminoMsg(message: QueryConfigRequest): QueryConfigRequestAminoMsg;
    fromProtoMsg(message: QueryConfigRequestProtoMsg): QueryConfigRequest;
    toProto(message: QueryConfigRequest): Uint8Array;
    toProtoMsg(message: QueryConfigRequest): QueryConfigRequestProtoMsg;
};
export declare const QueryConfigResponse: {
    typeUrl: string;
    encode(message: QueryConfigResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryConfigResponse;
    fromPartial(object: Partial<QueryConfigResponse>): QueryConfigResponse;
    fromAmino(object: QueryConfigResponseAmino): QueryConfigResponse;
    toAmino(message: QueryConfigResponse): QueryConfigResponseAmino;
    fromAminoMsg(object: QueryConfigResponseAminoMsg): QueryConfigResponse;
    toAminoMsg(message: QueryConfigResponse): QueryConfigResponseAminoMsg;
    fromProtoMsg(message: QueryConfigResponseProtoMsg): QueryConfigResponse;
    toProto(message: QueryConfigResponse): Uint8Array;
    toProtoMsg(message: QueryConfigResponse): QueryConfigResponseProtoMsg;
};
