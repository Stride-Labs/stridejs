import { HostZone, HostZoneAmino, HostZoneSDKType, DelegationRecord, DelegationRecordAmino, DelegationRecordSDKType, UnbondingRecord, UnbondingRecordAmino, UnbondingRecordSDKType, RedemptionRecord, RedemptionRecordAmino, RedemptionRecordSDKType, SlashRecord, SlashRecordAmino, SlashRecordSDKType } from "./staketia";
import { BinaryReader, BinaryWriter } from "../../binary";
/** Params defines the staketia module parameters. */
export interface Params {
}
export interface ParamsProtoMsg {
    typeUrl: "/stride.staketia.Params";
    value: Uint8Array;
}
/**
 * Params defines the staketia module parameters.
 * @name ParamsAmino
 * @package stride.staketia
 * @see proto type: stride.staketia.Params
 */
export interface ParamsAmino {
}
export interface ParamsAminoMsg {
    type: "/stride.staketia.Params";
    value: ParamsAmino;
}
/** Params defines the staketia module parameters. */
export interface ParamsSDKType {
}
/**
 * TransferInProgressRecordIds stores record IDs for delegation records
 * that have a transfer in progress
 */
export interface TransferInProgressRecordIds {
    channelId: string;
    sequence: bigint;
    recordId: bigint;
}
export interface TransferInProgressRecordIdsProtoMsg {
    typeUrl: "/stride.staketia.TransferInProgressRecordIds";
    value: Uint8Array;
}
/**
 * TransferInProgressRecordIds stores record IDs for delegation records
 * that have a transfer in progress
 * @name TransferInProgressRecordIdsAmino
 * @package stride.staketia
 * @see proto type: stride.staketia.TransferInProgressRecordIds
 */
export interface TransferInProgressRecordIdsAmino {
    channel_id?: string;
    sequence?: string;
    record_id?: string;
}
export interface TransferInProgressRecordIdsAminoMsg {
    type: "/stride.staketia.TransferInProgressRecordIds";
    value: TransferInProgressRecordIdsAmino;
}
/**
 * TransferInProgressRecordIds stores record IDs for delegation records
 * that have a transfer in progress
 */
export interface TransferInProgressRecordIdsSDKType {
    channel_id: string;
    sequence: bigint;
    record_id: bigint;
}
/** GenesisState defines the staketia module's genesis state. */
export interface GenesisState {
    params: Params;
    hostZone: HostZone;
    delegationRecords: DelegationRecord[];
    unbondingRecords: UnbondingRecord[];
    redemptionRecords: RedemptionRecord[];
    slashRecords: SlashRecord[];
    transferInProgressRecordIds: TransferInProgressRecordIds[];
}
export interface GenesisStateProtoMsg {
    typeUrl: "/stride.staketia.GenesisState";
    value: Uint8Array;
}
/**
 * GenesisState defines the staketia module's genesis state.
 * @name GenesisStateAmino
 * @package stride.staketia
 * @see proto type: stride.staketia.GenesisState
 */
export interface GenesisStateAmino {
    params?: ParamsAmino;
    host_zone?: HostZoneAmino;
    delegation_records?: DelegationRecordAmino[];
    unbonding_records?: UnbondingRecordAmino[];
    redemption_records?: RedemptionRecordAmino[];
    slash_records?: SlashRecordAmino[];
    transfer_in_progress_record_ids?: TransferInProgressRecordIdsAmino[];
}
export interface GenesisStateAminoMsg {
    type: "/stride.staketia.GenesisState";
    value: GenesisStateAmino;
}
/** GenesisState defines the staketia module's genesis state. */
export interface GenesisStateSDKType {
    params: ParamsSDKType;
    host_zone: HostZoneSDKType;
    delegation_records: DelegationRecordSDKType[];
    unbonding_records: UnbondingRecordSDKType[];
    redemption_records: RedemptionRecordSDKType[];
    slash_records: SlashRecordSDKType[];
    transfer_in_progress_record_ids: TransferInProgressRecordIdsSDKType[];
}
export declare const Params: {
    typeUrl: string;
    encode(_: Params, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Params;
    fromPartial(_: Partial<Params>): Params;
    fromAmino(_: ParamsAmino): Params;
    toAmino(_: Params): ParamsAmino;
    fromAminoMsg(object: ParamsAminoMsg): Params;
    fromProtoMsg(message: ParamsProtoMsg): Params;
    toProto(message: Params): Uint8Array;
    toProtoMsg(message: Params): ParamsProtoMsg;
};
export declare const TransferInProgressRecordIds: {
    typeUrl: string;
    encode(message: TransferInProgressRecordIds, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): TransferInProgressRecordIds;
    fromPartial(object: Partial<TransferInProgressRecordIds>): TransferInProgressRecordIds;
    fromAmino(object: TransferInProgressRecordIdsAmino): TransferInProgressRecordIds;
    toAmino(message: TransferInProgressRecordIds): TransferInProgressRecordIdsAmino;
    fromAminoMsg(object: TransferInProgressRecordIdsAminoMsg): TransferInProgressRecordIds;
    fromProtoMsg(message: TransferInProgressRecordIdsProtoMsg): TransferInProgressRecordIds;
    toProto(message: TransferInProgressRecordIds): Uint8Array;
    toProtoMsg(message: TransferInProgressRecordIds): TransferInProgressRecordIdsProtoMsg;
};
export declare const GenesisState: {
    typeUrl: string;
    encode(message: GenesisState, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
    fromAmino(object: GenesisStateAmino): GenesisState;
    toAmino(message: GenesisState): GenesisStateAmino;
    fromAminoMsg(object: GenesisStateAminoMsg): GenesisState;
    fromProtoMsg(message: GenesisStateProtoMsg): GenesisState;
    toProto(message: GenesisState): Uint8Array;
    toProtoMsg(message: GenesisState): GenesisStateProtoMsg;
};
