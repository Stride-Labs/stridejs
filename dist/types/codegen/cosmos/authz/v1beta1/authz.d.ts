import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { SendAuthorization, SendAuthorizationProtoMsg, SendAuthorizationSDKType } from "../../bank/v1beta1/authz";
import { StakeAuthorization, StakeAuthorizationProtoMsg, StakeAuthorizationSDKType } from "../../staking/v1beta1/authz";
import { StoreCodeAuthorization, StoreCodeAuthorizationProtoMsg, StoreCodeAuthorizationSDKType, ContractExecutionAuthorization, ContractExecutionAuthorizationProtoMsg, ContractExecutionAuthorizationSDKType, ContractMigrationAuthorization, ContractMigrationAuthorizationProtoMsg, ContractMigrationAuthorizationSDKType } from "../../../cosmwasm/wasm/v1/authz";
import { TransferAuthorization, TransferAuthorizationProtoMsg, TransferAuthorizationSDKType } from "../../../ibc/applications/transfer/v1/authz";
import { BinaryReader, BinaryWriter } from "../../../binary";
/**
 * GenericAuthorization gives the grantee unrestricted permissions to execute
 * the provided method on behalf of the granter's account.
 */
export interface GenericAuthorization {
    $typeUrl?: "/cosmos.authz.v1beta1.GenericAuthorization";
    /** Msg, identified by it's type URL, to grant unrestricted permissions to execute */
    msg: string;
}
export interface GenericAuthorizationProtoMsg {
    typeUrl: "/cosmos.authz.v1beta1.GenericAuthorization";
    value: Uint8Array;
}
/**
 * GenericAuthorization gives the grantee unrestricted permissions to execute
 * the provided method on behalf of the granter's account.
 * @name GenericAuthorizationAmino
 * @package cosmos.authz.v1beta1
 * @see proto type: cosmos.authz.v1beta1.GenericAuthorization
 */
export interface GenericAuthorizationAmino {
    /**
     * Msg, identified by it's type URL, to grant unrestricted permissions to execute
     */
    msg?: string;
}
export interface GenericAuthorizationAminoMsg {
    type: "cosmos-sdk/GenericAuthorization";
    value: GenericAuthorizationAmino;
}
/**
 * GenericAuthorization gives the grantee unrestricted permissions to execute
 * the provided method on behalf of the granter's account.
 */
export interface GenericAuthorizationSDKType {
    $typeUrl?: "/cosmos.authz.v1beta1.GenericAuthorization";
    msg: string;
}
/**
 * Grant gives permissions to execute
 * the provide method with expiration time.
 */
export interface Grant {
    authorization?: GenericAuthorization | SendAuthorization | StakeAuthorization | StoreCodeAuthorization | ContractExecutionAuthorization | ContractMigrationAuthorization | TransferAuthorization | Any | undefined;
    /**
     * time when the grant will expire and will be pruned. If null, then the grant
     * doesn't have a time expiration (other conditions  in `authorization`
     * may apply to invalidate the grant)
     */
    expiration?: Date;
}
export interface GrantProtoMsg {
    typeUrl: "/cosmos.authz.v1beta1.Grant";
    value: Uint8Array;
}
export declare type GrantEncoded = Omit<Grant, "authorization"> & {
    authorization?: GenericAuthorizationProtoMsg | SendAuthorizationProtoMsg | StakeAuthorizationProtoMsg | StoreCodeAuthorizationProtoMsg | ContractExecutionAuthorizationProtoMsg | ContractMigrationAuthorizationProtoMsg | TransferAuthorizationProtoMsg | AnyProtoMsg | undefined;
};
/**
 * Grant gives permissions to execute
 * the provide method with expiration time.
 * @name GrantAmino
 * @package cosmos.authz.v1beta1
 * @see proto type: cosmos.authz.v1beta1.Grant
 */
export interface GrantAmino {
    authorization?: AnyAmino;
    /**
     * time when the grant will expire and will be pruned. If null, then the grant
     * doesn't have a time expiration (other conditions  in `authorization`
     * may apply to invalidate the grant)
     */
    expiration?: string;
}
export interface GrantAminoMsg {
    type: "cosmos-sdk/Grant";
    value: GrantAmino;
}
/**
 * Grant gives permissions to execute
 * the provide method with expiration time.
 */
export interface GrantSDKType {
    authorization?: GenericAuthorizationSDKType | SendAuthorizationSDKType | StakeAuthorizationSDKType | StoreCodeAuthorizationSDKType | ContractExecutionAuthorizationSDKType | ContractMigrationAuthorizationSDKType | TransferAuthorizationSDKType | AnySDKType | undefined;
    expiration?: Date;
}
/**
 * GrantAuthorization extends a grant with both the addresses of the grantee and granter.
 * It is used in genesis.proto and query.proto
 */
export interface GrantAuthorization {
    granter: string;
    grantee: string;
    authorization?: GenericAuthorization | SendAuthorization | StakeAuthorization | StoreCodeAuthorization | ContractExecutionAuthorization | ContractMigrationAuthorization | TransferAuthorization | Any | undefined;
    expiration?: Date;
}
export interface GrantAuthorizationProtoMsg {
    typeUrl: "/cosmos.authz.v1beta1.GrantAuthorization";
    value: Uint8Array;
}
export declare type GrantAuthorizationEncoded = Omit<GrantAuthorization, "authorization"> & {
    authorization?: GenericAuthorizationProtoMsg | SendAuthorizationProtoMsg | StakeAuthorizationProtoMsg | StoreCodeAuthorizationProtoMsg | ContractExecutionAuthorizationProtoMsg | ContractMigrationAuthorizationProtoMsg | TransferAuthorizationProtoMsg | AnyProtoMsg | undefined;
};
/**
 * GrantAuthorization extends a grant with both the addresses of the grantee and granter.
 * It is used in genesis.proto and query.proto
 * @name GrantAuthorizationAmino
 * @package cosmos.authz.v1beta1
 * @see proto type: cosmos.authz.v1beta1.GrantAuthorization
 */
export interface GrantAuthorizationAmino {
    granter?: string;
    grantee?: string;
    authorization?: AnyAmino;
    expiration?: string;
}
export interface GrantAuthorizationAminoMsg {
    type: "cosmos-sdk/GrantAuthorization";
    value: GrantAuthorizationAmino;
}
/**
 * GrantAuthorization extends a grant with both the addresses of the grantee and granter.
 * It is used in genesis.proto and query.proto
 */
export interface GrantAuthorizationSDKType {
    granter: string;
    grantee: string;
    authorization?: GenericAuthorizationSDKType | SendAuthorizationSDKType | StakeAuthorizationSDKType | StoreCodeAuthorizationSDKType | ContractExecutionAuthorizationSDKType | ContractMigrationAuthorizationSDKType | TransferAuthorizationSDKType | AnySDKType | undefined;
    expiration?: Date;
}
/** GrantQueueItem contains the list of TypeURL of a sdk.Msg. */
export interface GrantQueueItem {
    /** msg_type_urls contains the list of TypeURL of a sdk.Msg. */
    msgTypeUrls: string[];
}
export interface GrantQueueItemProtoMsg {
    typeUrl: "/cosmos.authz.v1beta1.GrantQueueItem";
    value: Uint8Array;
}
/**
 * GrantQueueItem contains the list of TypeURL of a sdk.Msg.
 * @name GrantQueueItemAmino
 * @package cosmos.authz.v1beta1
 * @see proto type: cosmos.authz.v1beta1.GrantQueueItem
 */
export interface GrantQueueItemAmino {
    /**
     * msg_type_urls contains the list of TypeURL of a sdk.Msg.
     */
    msg_type_urls?: string[];
}
export interface GrantQueueItemAminoMsg {
    type: "cosmos-sdk/GrantQueueItem";
    value: GrantQueueItemAmino;
}
/** GrantQueueItem contains the list of TypeURL of a sdk.Msg. */
export interface GrantQueueItemSDKType {
    msg_type_urls: string[];
}
export declare const GenericAuthorization: {
    typeUrl: string;
    encode(message: GenericAuthorization, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GenericAuthorization;
    fromPartial(object: Partial<GenericAuthorization>): GenericAuthorization;
    fromAmino(object: GenericAuthorizationAmino): GenericAuthorization;
    toAmino(message: GenericAuthorization): GenericAuthorizationAmino;
    fromAminoMsg(object: GenericAuthorizationAminoMsg): GenericAuthorization;
    toAminoMsg(message: GenericAuthorization): GenericAuthorizationAminoMsg;
    fromProtoMsg(message: GenericAuthorizationProtoMsg): GenericAuthorization;
    toProto(message: GenericAuthorization): Uint8Array;
    toProtoMsg(message: GenericAuthorization): GenericAuthorizationProtoMsg;
};
export declare const Grant: {
    typeUrl: string;
    encode(message: Grant, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Grant;
    fromPartial(object: Partial<Grant>): Grant;
    fromAmino(object: GrantAmino): Grant;
    toAmino(message: Grant): GrantAmino;
    fromAminoMsg(object: GrantAminoMsg): Grant;
    toAminoMsg(message: Grant): GrantAminoMsg;
    fromProtoMsg(message: GrantProtoMsg): Grant;
    toProto(message: Grant): Uint8Array;
    toProtoMsg(message: Grant): GrantProtoMsg;
};
export declare const GrantAuthorization: {
    typeUrl: string;
    encode(message: GrantAuthorization, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GrantAuthorization;
    fromPartial(object: Partial<GrantAuthorization>): GrantAuthorization;
    fromAmino(object: GrantAuthorizationAmino): GrantAuthorization;
    toAmino(message: GrantAuthorization): GrantAuthorizationAmino;
    fromAminoMsg(object: GrantAuthorizationAminoMsg): GrantAuthorization;
    toAminoMsg(message: GrantAuthorization): GrantAuthorizationAminoMsg;
    fromProtoMsg(message: GrantAuthorizationProtoMsg): GrantAuthorization;
    toProto(message: GrantAuthorization): Uint8Array;
    toProtoMsg(message: GrantAuthorization): GrantAuthorizationProtoMsg;
};
export declare const GrantQueueItem: {
    typeUrl: string;
    encode(message: GrantQueueItem, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GrantQueueItem;
    fromPartial(object: Partial<GrantQueueItem>): GrantQueueItem;
    fromAmino(object: GrantQueueItemAmino): GrantQueueItem;
    toAmino(message: GrantQueueItem): GrantQueueItemAmino;
    fromAminoMsg(object: GrantQueueItemAminoMsg): GrantQueueItem;
    toAminoMsg(message: GrantQueueItem): GrantQueueItemAminoMsg;
    fromProtoMsg(message: GrantQueueItemProtoMsg): GrantQueueItem;
    toProto(message: GrantQueueItem): Uint8Array;
    toProtoMsg(message: GrantQueueItem): GrantQueueItemProtoMsg;
};
export declare const Cosmos_authzv1beta1Authorization_InterfaceDecoder: (input: BinaryReader | Uint8Array) => GenericAuthorization | SendAuthorization | StakeAuthorization | StoreCodeAuthorization | ContractExecutionAuthorization | ContractMigrationAuthorization | TransferAuthorization | Any;
export declare const Cosmos_authzv1beta1Authorization_FromAmino: (content: AnyAmino) => Any;
export declare const Cosmos_authzv1beta1Authorization_ToAmino: (content: Any) => AnyAmino;
