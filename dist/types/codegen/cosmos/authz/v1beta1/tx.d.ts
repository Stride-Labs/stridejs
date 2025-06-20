import { Grant, GrantAmino, GrantSDKType } from "./authz";
import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { BinaryReader, BinaryWriter } from "../../../binary";
/**
 * MsgGrant is a request type for Grant method. It declares authorization to the grantee
 * on behalf of the granter with the provided expiration time.
 */
export interface MsgGrant {
    granter: string;
    grantee: string;
    grant: Grant;
}
export interface MsgGrantProtoMsg {
    typeUrl: "/cosmos.authz.v1beta1.MsgGrant";
    value: Uint8Array;
}
/**
 * MsgGrant is a request type for Grant method. It declares authorization to the grantee
 * on behalf of the granter with the provided expiration time.
 * @name MsgGrantAmino
 * @package cosmos.authz.v1beta1
 * @see proto type: cosmos.authz.v1beta1.MsgGrant
 */
export interface MsgGrantAmino {
    granter?: string;
    grantee?: string;
    grant: GrantAmino;
}
export interface MsgGrantAminoMsg {
    type: "cosmos-sdk/MsgGrant";
    value: MsgGrantAmino;
}
/**
 * MsgGrant is a request type for Grant method. It declares authorization to the grantee
 * on behalf of the granter with the provided expiration time.
 */
export interface MsgGrantSDKType {
    granter: string;
    grantee: string;
    grant: GrantSDKType;
}
/** MsgExecResponse defines the Msg/MsgExecResponse response type. */
export interface MsgExecResponse {
    results: Uint8Array[];
}
export interface MsgExecResponseProtoMsg {
    typeUrl: "/cosmos.authz.v1beta1.MsgExecResponse";
    value: Uint8Array;
}
/**
 * MsgExecResponse defines the Msg/MsgExecResponse response type.
 * @name MsgExecResponseAmino
 * @package cosmos.authz.v1beta1
 * @see proto type: cosmos.authz.v1beta1.MsgExecResponse
 */
export interface MsgExecResponseAmino {
    results?: string[];
}
export interface MsgExecResponseAminoMsg {
    type: "cosmos-sdk/MsgExecResponse";
    value: MsgExecResponseAmino;
}
/** MsgExecResponse defines the Msg/MsgExecResponse response type. */
export interface MsgExecResponseSDKType {
    results: Uint8Array[];
}
/**
 * MsgExec attempts to execute the provided messages using
 * authorizations granted to the grantee. Each message should have only
 * one signer corresponding to the granter of the authorization.
 */
export interface MsgExec {
    grantee: string;
    /**
     * Execute Msg.
     * The x/authz will try to find a grant matching (msg.signers[0], grantee, MsgTypeURL(msg))
     * triple and validate it.
     */
    msgs: (Any)[] | Any[];
}
export interface MsgExecProtoMsg {
    typeUrl: "/cosmos.authz.v1beta1.MsgExec";
    value: Uint8Array;
}
export declare type MsgExecEncoded = Omit<MsgExec, "msgs"> & {
    /**
     * Execute Msg.
     * The x/authz will try to find a grant matching (msg.signers[0], grantee, MsgTypeURL(msg))
     * triple and validate it.
     */
    msgs: (AnyProtoMsg)[];
};
/**
 * MsgExec attempts to execute the provided messages using
 * authorizations granted to the grantee. Each message should have only
 * one signer corresponding to the granter of the authorization.
 * @name MsgExecAmino
 * @package cosmos.authz.v1beta1
 * @see proto type: cosmos.authz.v1beta1.MsgExec
 */
export interface MsgExecAmino {
    grantee?: string;
    /**
     * Execute Msg.
     * The x/authz will try to find a grant matching (msg.signers[0], grantee, MsgTypeURL(msg))
     * triple and validate it.
     */
    msgs?: AnyAmino[];
}
export interface MsgExecAminoMsg {
    type: "cosmos-sdk/MsgExec";
    value: MsgExecAmino;
}
/**
 * MsgExec attempts to execute the provided messages using
 * authorizations granted to the grantee. Each message should have only
 * one signer corresponding to the granter of the authorization.
 */
export interface MsgExecSDKType {
    grantee: string;
    msgs: (AnySDKType)[];
}
/** MsgGrantResponse defines the Msg/MsgGrant response type. */
export interface MsgGrantResponse {
}
export interface MsgGrantResponseProtoMsg {
    typeUrl: "/cosmos.authz.v1beta1.MsgGrantResponse";
    value: Uint8Array;
}
/**
 * MsgGrantResponse defines the Msg/MsgGrant response type.
 * @name MsgGrantResponseAmino
 * @package cosmos.authz.v1beta1
 * @see proto type: cosmos.authz.v1beta1.MsgGrantResponse
 */
export interface MsgGrantResponseAmino {
}
export interface MsgGrantResponseAminoMsg {
    type: "cosmos-sdk/MsgGrantResponse";
    value: MsgGrantResponseAmino;
}
/** MsgGrantResponse defines the Msg/MsgGrant response type. */
export interface MsgGrantResponseSDKType {
}
/**
 * MsgRevoke revokes any authorization with the provided sdk.Msg type on the
 * granter's account with that has been granted to the grantee.
 */
export interface MsgRevoke {
    granter: string;
    grantee: string;
    msgTypeUrl: string;
}
export interface MsgRevokeProtoMsg {
    typeUrl: "/cosmos.authz.v1beta1.MsgRevoke";
    value: Uint8Array;
}
/**
 * MsgRevoke revokes any authorization with the provided sdk.Msg type on the
 * granter's account with that has been granted to the grantee.
 * @name MsgRevokeAmino
 * @package cosmos.authz.v1beta1
 * @see proto type: cosmos.authz.v1beta1.MsgRevoke
 */
export interface MsgRevokeAmino {
    granter?: string;
    grantee?: string;
    msg_type_url?: string;
}
export interface MsgRevokeAminoMsg {
    type: "cosmos-sdk/MsgRevoke";
    value: MsgRevokeAmino;
}
/**
 * MsgRevoke revokes any authorization with the provided sdk.Msg type on the
 * granter's account with that has been granted to the grantee.
 */
export interface MsgRevokeSDKType {
    granter: string;
    grantee: string;
    msg_type_url: string;
}
/** MsgRevokeResponse defines the Msg/MsgRevokeResponse response type. */
export interface MsgRevokeResponse {
}
export interface MsgRevokeResponseProtoMsg {
    typeUrl: "/cosmos.authz.v1beta1.MsgRevokeResponse";
    value: Uint8Array;
}
/**
 * MsgRevokeResponse defines the Msg/MsgRevokeResponse response type.
 * @name MsgRevokeResponseAmino
 * @package cosmos.authz.v1beta1
 * @see proto type: cosmos.authz.v1beta1.MsgRevokeResponse
 */
export interface MsgRevokeResponseAmino {
}
export interface MsgRevokeResponseAminoMsg {
    type: "cosmos-sdk/MsgRevokeResponse";
    value: MsgRevokeResponseAmino;
}
/** MsgRevokeResponse defines the Msg/MsgRevokeResponse response type. */
export interface MsgRevokeResponseSDKType {
}
export declare const MsgGrant: {
    typeUrl: string;
    encode(message: MsgGrant, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgGrant;
    fromPartial(object: Partial<MsgGrant>): MsgGrant;
    fromAmino(object: MsgGrantAmino): MsgGrant;
    toAmino(message: MsgGrant): MsgGrantAmino;
    fromAminoMsg(object: MsgGrantAminoMsg): MsgGrant;
    toAminoMsg(message: MsgGrant): MsgGrantAminoMsg;
    fromProtoMsg(message: MsgGrantProtoMsg): MsgGrant;
    toProto(message: MsgGrant): Uint8Array;
    toProtoMsg(message: MsgGrant): MsgGrantProtoMsg;
};
export declare const MsgExecResponse: {
    typeUrl: string;
    encode(message: MsgExecResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgExecResponse;
    fromPartial(object: Partial<MsgExecResponse>): MsgExecResponse;
    fromAmino(object: MsgExecResponseAmino): MsgExecResponse;
    toAmino(message: MsgExecResponse): MsgExecResponseAmino;
    fromAminoMsg(object: MsgExecResponseAminoMsg): MsgExecResponse;
    toAminoMsg(message: MsgExecResponse): MsgExecResponseAminoMsg;
    fromProtoMsg(message: MsgExecResponseProtoMsg): MsgExecResponse;
    toProto(message: MsgExecResponse): Uint8Array;
    toProtoMsg(message: MsgExecResponse): MsgExecResponseProtoMsg;
};
export declare const MsgExec: {
    typeUrl: string;
    encode(message: MsgExec, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgExec;
    fromPartial(object: Partial<MsgExec>): MsgExec;
    fromAmino(object: MsgExecAmino): MsgExec;
    toAmino(message: MsgExec): MsgExecAmino;
    fromAminoMsg(object: MsgExecAminoMsg): MsgExec;
    toAminoMsg(message: MsgExec): MsgExecAminoMsg;
    fromProtoMsg(message: MsgExecProtoMsg): MsgExec;
    toProto(message: MsgExec): Uint8Array;
    toProtoMsg(message: MsgExec): MsgExecProtoMsg;
};
export declare const MsgGrantResponse: {
    typeUrl: string;
    encode(_: MsgGrantResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgGrantResponse;
    fromPartial(_: Partial<MsgGrantResponse>): MsgGrantResponse;
    fromAmino(_: MsgGrantResponseAmino): MsgGrantResponse;
    toAmino(_: MsgGrantResponse): MsgGrantResponseAmino;
    fromAminoMsg(object: MsgGrantResponseAminoMsg): MsgGrantResponse;
    toAminoMsg(message: MsgGrantResponse): MsgGrantResponseAminoMsg;
    fromProtoMsg(message: MsgGrantResponseProtoMsg): MsgGrantResponse;
    toProto(message: MsgGrantResponse): Uint8Array;
    toProtoMsg(message: MsgGrantResponse): MsgGrantResponseProtoMsg;
};
export declare const MsgRevoke: {
    typeUrl: string;
    encode(message: MsgRevoke, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgRevoke;
    fromPartial(object: Partial<MsgRevoke>): MsgRevoke;
    fromAmino(object: MsgRevokeAmino): MsgRevoke;
    toAmino(message: MsgRevoke): MsgRevokeAmino;
    fromAminoMsg(object: MsgRevokeAminoMsg): MsgRevoke;
    toAminoMsg(message: MsgRevoke): MsgRevokeAminoMsg;
    fromProtoMsg(message: MsgRevokeProtoMsg): MsgRevoke;
    toProto(message: MsgRevoke): Uint8Array;
    toProtoMsg(message: MsgRevoke): MsgRevokeProtoMsg;
};
export declare const MsgRevokeResponse: {
    typeUrl: string;
    encode(_: MsgRevokeResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgRevokeResponse;
    fromPartial(_: Partial<MsgRevokeResponse>): MsgRevokeResponse;
    fromAmino(_: MsgRevokeResponseAmino): MsgRevokeResponse;
    toAmino(_: MsgRevokeResponse): MsgRevokeResponseAmino;
    fromAminoMsg(object: MsgRevokeResponseAminoMsg): MsgRevokeResponse;
    toAminoMsg(message: MsgRevokeResponse): MsgRevokeResponseAminoMsg;
    fromProtoMsg(message: MsgRevokeResponseProtoMsg): MsgRevokeResponse;
    toProto(message: MsgRevokeResponse): Uint8Array;
    toProtoMsg(message: MsgRevokeResponse): MsgRevokeResponseProtoMsg;
};
export declare const Cosmos_basev1beta1Msg_InterfaceDecoder: (input: BinaryReader | Uint8Array) => Any;
export declare const Cosmos_basev1beta1Msg_FromAmino: (content: AnyAmino) => Any;
export declare const Cosmos_basev1beta1Msg_ToAmino: (content: Any) => AnyAmino;
