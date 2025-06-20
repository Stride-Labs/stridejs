import { Order } from "../../../../core/channel/v1/channel";
import { InterchainAccountPacketData, InterchainAccountPacketDataAmino, InterchainAccountPacketDataSDKType } from "../../v1/packet";
import { BinaryReader, BinaryWriter } from "../../../../../binary";
/** MsgRegisterInterchainAccount defines the payload for Msg/RegisterAccount */
export interface MsgRegisterInterchainAccount {
    owner: string;
    connectionId: string;
    version: string;
    ordering: Order;
}
export interface MsgRegisterInterchainAccountProtoMsg {
    typeUrl: "/ibc.applications.interchain_accounts.controller.v1.MsgRegisterInterchainAccount";
    value: Uint8Array;
}
/**
 * MsgRegisterInterchainAccount defines the payload for Msg/RegisterAccount
 * @name MsgRegisterInterchainAccountAmino
 * @package ibc.applications.interchain_accounts.controller.v1
 * @see proto type: ibc.applications.interchain_accounts.controller.v1.MsgRegisterInterchainAccount
 */
export interface MsgRegisterInterchainAccountAmino {
    owner?: string;
    connection_id?: string;
    version?: string;
    ordering?: Order;
}
export interface MsgRegisterInterchainAccountAminoMsg {
    type: "cosmos-sdk/MsgRegisterInterchainAccount";
    value: MsgRegisterInterchainAccountAmino;
}
/** MsgRegisterInterchainAccount defines the payload for Msg/RegisterAccount */
export interface MsgRegisterInterchainAccountSDKType {
    owner: string;
    connection_id: string;
    version: string;
    ordering: Order;
}
/** MsgRegisterInterchainAccountResponse defines the response for Msg/RegisterAccount */
export interface MsgRegisterInterchainAccountResponse {
    channelId: string;
    portId: string;
}
export interface MsgRegisterInterchainAccountResponseProtoMsg {
    typeUrl: "/ibc.applications.interchain_accounts.controller.v1.MsgRegisterInterchainAccountResponse";
    value: Uint8Array;
}
/**
 * MsgRegisterInterchainAccountResponse defines the response for Msg/RegisterAccount
 * @name MsgRegisterInterchainAccountResponseAmino
 * @package ibc.applications.interchain_accounts.controller.v1
 * @see proto type: ibc.applications.interchain_accounts.controller.v1.MsgRegisterInterchainAccountResponse
 */
export interface MsgRegisterInterchainAccountResponseAmino {
    channel_id?: string;
    port_id?: string;
}
export interface MsgRegisterInterchainAccountResponseAminoMsg {
    type: "cosmos-sdk/MsgRegisterInterchainAccountResponse";
    value: MsgRegisterInterchainAccountResponseAmino;
}
/** MsgRegisterInterchainAccountResponse defines the response for Msg/RegisterAccount */
export interface MsgRegisterInterchainAccountResponseSDKType {
    channel_id: string;
    port_id: string;
}
/** MsgSendTx defines the payload for Msg/SendTx */
export interface MsgSendTx {
    owner: string;
    connectionId: string;
    packetData: InterchainAccountPacketData;
    /**
     * Relative timeout timestamp provided will be added to the current block time during transaction execution.
     * The timeout timestamp must be non-zero.
     */
    relativeTimeout: bigint;
}
export interface MsgSendTxProtoMsg {
    typeUrl: "/ibc.applications.interchain_accounts.controller.v1.MsgSendTx";
    value: Uint8Array;
}
/**
 * MsgSendTx defines the payload for Msg/SendTx
 * @name MsgSendTxAmino
 * @package ibc.applications.interchain_accounts.controller.v1
 * @see proto type: ibc.applications.interchain_accounts.controller.v1.MsgSendTx
 */
export interface MsgSendTxAmino {
    owner?: string;
    connection_id?: string;
    packet_data?: InterchainAccountPacketDataAmino;
    /**
     * Relative timeout timestamp provided will be added to the current block time during transaction execution.
     * The timeout timestamp must be non-zero.
     */
    relative_timeout?: string;
}
export interface MsgSendTxAminoMsg {
    type: "cosmos-sdk/MsgSendTx";
    value: MsgSendTxAmino;
}
/** MsgSendTx defines the payload for Msg/SendTx */
export interface MsgSendTxSDKType {
    owner: string;
    connection_id: string;
    packet_data: InterchainAccountPacketDataSDKType;
    relative_timeout: bigint;
}
/** MsgSendTxResponse defines the response for MsgSendTx */
export interface MsgSendTxResponse {
    sequence: bigint;
}
export interface MsgSendTxResponseProtoMsg {
    typeUrl: "/ibc.applications.interchain_accounts.controller.v1.MsgSendTxResponse";
    value: Uint8Array;
}
/**
 * MsgSendTxResponse defines the response for MsgSendTx
 * @name MsgSendTxResponseAmino
 * @package ibc.applications.interchain_accounts.controller.v1
 * @see proto type: ibc.applications.interchain_accounts.controller.v1.MsgSendTxResponse
 */
export interface MsgSendTxResponseAmino {
    sequence?: string;
}
export interface MsgSendTxResponseAminoMsg {
    type: "cosmos-sdk/MsgSendTxResponse";
    value: MsgSendTxResponseAmino;
}
/** MsgSendTxResponse defines the response for MsgSendTx */
export interface MsgSendTxResponseSDKType {
    sequence: bigint;
}
export declare const MsgRegisterInterchainAccount: {
    typeUrl: string;
    encode(message: MsgRegisterInterchainAccount, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgRegisterInterchainAccount;
    fromPartial(object: Partial<MsgRegisterInterchainAccount>): MsgRegisterInterchainAccount;
    fromAmino(object: MsgRegisterInterchainAccountAmino): MsgRegisterInterchainAccount;
    toAmino(message: MsgRegisterInterchainAccount): MsgRegisterInterchainAccountAmino;
    fromAminoMsg(object: MsgRegisterInterchainAccountAminoMsg): MsgRegisterInterchainAccount;
    toAminoMsg(message: MsgRegisterInterchainAccount): MsgRegisterInterchainAccountAminoMsg;
    fromProtoMsg(message: MsgRegisterInterchainAccountProtoMsg): MsgRegisterInterchainAccount;
    toProto(message: MsgRegisterInterchainAccount): Uint8Array;
    toProtoMsg(message: MsgRegisterInterchainAccount): MsgRegisterInterchainAccountProtoMsg;
};
export declare const MsgRegisterInterchainAccountResponse: {
    typeUrl: string;
    encode(message: MsgRegisterInterchainAccountResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgRegisterInterchainAccountResponse;
    fromPartial(object: Partial<MsgRegisterInterchainAccountResponse>): MsgRegisterInterchainAccountResponse;
    fromAmino(object: MsgRegisterInterchainAccountResponseAmino): MsgRegisterInterchainAccountResponse;
    toAmino(message: MsgRegisterInterchainAccountResponse): MsgRegisterInterchainAccountResponseAmino;
    fromAminoMsg(object: MsgRegisterInterchainAccountResponseAminoMsg): MsgRegisterInterchainAccountResponse;
    toAminoMsg(message: MsgRegisterInterchainAccountResponse): MsgRegisterInterchainAccountResponseAminoMsg;
    fromProtoMsg(message: MsgRegisterInterchainAccountResponseProtoMsg): MsgRegisterInterchainAccountResponse;
    toProto(message: MsgRegisterInterchainAccountResponse): Uint8Array;
    toProtoMsg(message: MsgRegisterInterchainAccountResponse): MsgRegisterInterchainAccountResponseProtoMsg;
};
export declare const MsgSendTx: {
    typeUrl: string;
    encode(message: MsgSendTx, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgSendTx;
    fromPartial(object: Partial<MsgSendTx>): MsgSendTx;
    fromAmino(object: MsgSendTxAmino): MsgSendTx;
    toAmino(message: MsgSendTx): MsgSendTxAmino;
    fromAminoMsg(object: MsgSendTxAminoMsg): MsgSendTx;
    toAminoMsg(message: MsgSendTx): MsgSendTxAminoMsg;
    fromProtoMsg(message: MsgSendTxProtoMsg): MsgSendTx;
    toProto(message: MsgSendTx): Uint8Array;
    toProtoMsg(message: MsgSendTx): MsgSendTxProtoMsg;
};
export declare const MsgSendTxResponse: {
    typeUrl: string;
    encode(message: MsgSendTxResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgSendTxResponse;
    fromPartial(object: Partial<MsgSendTxResponse>): MsgSendTxResponse;
    fromAmino(object: MsgSendTxResponseAmino): MsgSendTxResponse;
    toAmino(message: MsgSendTxResponse): MsgSendTxResponseAmino;
    fromAminoMsg(object: MsgSendTxResponseAminoMsg): MsgSendTxResponse;
    toAminoMsg(message: MsgSendTxResponse): MsgSendTxResponseAminoMsg;
    fromProtoMsg(message: MsgSendTxResponseProtoMsg): MsgSendTxResponse;
    toProto(message: MsgSendTxResponse): Uint8Array;
    toProtoMsg(message: MsgSendTxResponse): MsgSendTxResponseProtoMsg;
};
