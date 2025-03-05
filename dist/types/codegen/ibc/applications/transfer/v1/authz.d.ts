import { Coin, CoinAmino, CoinSDKType } from "../../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../../binary";
/** Allocation defines the spend limit for a particular port and channel */
export interface Allocation {
    /** the port on which the packet will be sent */
    sourcePort: string;
    /** the channel by which the packet will be sent */
    sourceChannel: string;
    /** spend limitation on the channel */
    spendLimit: Coin[];
    /** allow list of receivers, an empty allow list permits any receiver address */
    allowList: string[];
    /**
     * allow list of memo strings, an empty list prohibits all memo strings;
     * a list only with "*" permits any memo string
     */
    allowedPacketData: string[];
}
export interface AllocationProtoMsg {
    typeUrl: "/ibc.applications.transfer.v1.Allocation";
    value: Uint8Array;
}
/** Allocation defines the spend limit for a particular port and channel */
export interface AllocationAmino {
    /** the port on which the packet will be sent */
    source_port?: string;
    /** the channel by which the packet will be sent */
    source_channel?: string;
    /** spend limitation on the channel */
    spend_limit?: CoinAmino[];
    /** allow list of receivers, an empty allow list permits any receiver address */
    allow_list?: string[];
    /**
     * allow list of memo strings, an empty list prohibits all memo strings;
     * a list only with "*" permits any memo string
     */
    allowed_packet_data?: string[];
}
export interface AllocationAminoMsg {
    type: "cosmos-sdk/Allocation";
    value: AllocationAmino;
}
/** Allocation defines the spend limit for a particular port and channel */
export interface AllocationSDKType {
    source_port: string;
    source_channel: string;
    spend_limit: CoinSDKType[];
    allow_list: string[];
    allowed_packet_data: string[];
}
/**
 * TransferAuthorization allows the grantee to spend up to spend_limit coins from
 * the granter's account for ibc transfer on a specific channel
 */
export interface TransferAuthorization {
    $typeUrl?: "/ibc.applications.transfer.v1.TransferAuthorization";
    /** port and channel amounts */
    allocations: Allocation[];
}
export interface TransferAuthorizationProtoMsg {
    typeUrl: "/ibc.applications.transfer.v1.TransferAuthorization";
    value: Uint8Array;
}
/**
 * TransferAuthorization allows the grantee to spend up to spend_limit coins from
 * the granter's account for ibc transfer on a specific channel
 */
export interface TransferAuthorizationAmino {
    /** port and channel amounts */
    allocations?: AllocationAmino[];
}
export interface TransferAuthorizationAminoMsg {
    type: "cosmos-sdk/TransferAuthorization";
    value: TransferAuthorizationAmino;
}
/**
 * TransferAuthorization allows the grantee to spend up to spend_limit coins from
 * the granter's account for ibc transfer on a specific channel
 */
export interface TransferAuthorizationSDKType {
    $typeUrl?: "/ibc.applications.transfer.v1.TransferAuthorization";
    allocations: AllocationSDKType[];
}
export declare const Allocation: {
    typeUrl: string;
    encode(message: Allocation, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Allocation;
    fromPartial(object: Partial<Allocation>): Allocation;
    fromAmino(object: AllocationAmino): Allocation;
    toAmino(message: Allocation): AllocationAmino;
    fromAminoMsg(object: AllocationAminoMsg): Allocation;
    toAminoMsg(message: Allocation): AllocationAminoMsg;
    fromProtoMsg(message: AllocationProtoMsg): Allocation;
    toProto(message: Allocation): Uint8Array;
    toProtoMsg(message: Allocation): AllocationProtoMsg;
};
export declare const TransferAuthorization: {
    typeUrl: string;
    encode(message: TransferAuthorization, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): TransferAuthorization;
    fromPartial(object: Partial<TransferAuthorization>): TransferAuthorization;
    fromAmino(object: TransferAuthorizationAmino): TransferAuthorization;
    toAmino(message: TransferAuthorization): TransferAuthorizationAmino;
    fromAminoMsg(object: TransferAuthorizationAminoMsg): TransferAuthorization;
    toAminoMsg(message: TransferAuthorization): TransferAuthorizationAminoMsg;
    fromProtoMsg(message: TransferAuthorizationProtoMsg): TransferAuthorization;
    toProto(message: TransferAuthorization): Uint8Array;
    toProtoMsg(message: TransferAuthorization): TransferAuthorizationProtoMsg;
};
