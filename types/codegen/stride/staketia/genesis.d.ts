import { HostZone, HostZoneSDKType, DelegationRecord, DelegationRecordSDKType, UnbondingRecord, UnbondingRecordSDKType, RedemptionRecord, RedemptionRecordSDKType, SlashRecord, SlashRecordSDKType } from "./staketia";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
/** Params defines the staketia module parameters. */
export interface Params {
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
    sequence: Long;
    recordId: Long;
}
/**
 * TransferInProgressRecordIds stores record IDs for delegation records
 * that have a transfer in progress
 */
export interface TransferInProgressRecordIdsSDKType {
    channel_id: string;
    sequence: Long;
    record_id: Long;
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
    encode(_: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromPartial(_: DeepPartial<Params>): Params;
};
export declare const TransferInProgressRecordIds: {
    encode(message: TransferInProgressRecordIds, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TransferInProgressRecordIds;
    fromPartial(object: DeepPartial<TransferInProgressRecordIds>): TransferInProgressRecordIds;
};
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
