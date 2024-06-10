import { HostZone, HostZoneSDKType, DelegationRecord, DelegationRecordSDKType, UnbondingRecord, UnbondingRecordSDKType, RedemptionRecord, RedemptionRecordSDKType, SlashRecord, SlashRecordSDKType } from "./stakedym";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
/** Params defines the stakedym module parameters. */

export interface Params {}
/** Params defines the stakedym module parameters. */

export interface ParamsSDKType {}
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
/** GenesisState defines the stakedym module's genesis state. */

export interface GenesisState {
  params: Params;
  hostZone: HostZone;
  delegationRecords: DelegationRecord[];
  unbondingRecords: UnbondingRecord[];
  redemptionRecords: RedemptionRecord[];
  slashRecords: SlashRecord[];
  transferInProgressRecordIds: TransferInProgressRecordIds[];
}
/** GenesisState defines the stakedym module's genesis state. */

export interface GenesisStateSDKType {
  params: ParamsSDKType;
  host_zone: HostZoneSDKType;
  delegation_records: DelegationRecordSDKType[];
  unbonding_records: UnbondingRecordSDKType[];
  redemption_records: RedemptionRecordSDKType[];
  slash_records: SlashRecordSDKType[];
  transfer_in_progress_record_ids: TransferInProgressRecordIdsSDKType[];
}

function createBaseParams(): Params {
  return {};
}

export const Params = {
  encode(_: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(_: DeepPartial<Params>): Params {
    const message = createBaseParams();
    return message;
  }

};

function createBaseTransferInProgressRecordIds(): TransferInProgressRecordIds {
  return {
    channelId: "",
    sequence: Long.UZERO,
    recordId: Long.UZERO
  };
}

export const TransferInProgressRecordIds = {
  encode(message: TransferInProgressRecordIds, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.channelId !== "") {
      writer.uint32(10).string(message.channelId);
    }

    if (!message.sequence.isZero()) {
      writer.uint32(16).uint64(message.sequence);
    }

    if (!message.recordId.isZero()) {
      writer.uint32(24).uint64(message.recordId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TransferInProgressRecordIds {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTransferInProgressRecordIds();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.channelId = reader.string();
          break;

        case 2:
          message.sequence = (reader.uint64() as Long);
          break;

        case 3:
          message.recordId = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<TransferInProgressRecordIds>): TransferInProgressRecordIds {
    const message = createBaseTransferInProgressRecordIds();
    message.channelId = object.channelId ?? "";
    message.sequence = object.sequence !== undefined && object.sequence !== null ? Long.fromValue(object.sequence) : Long.UZERO;
    message.recordId = object.recordId !== undefined && object.recordId !== null ? Long.fromValue(object.recordId) : Long.UZERO;
    return message;
  }

};

function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    hostZone: undefined,
    delegationRecords: [],
    unbondingRecords: [],
    redemptionRecords: [],
    slashRecords: [],
    transferInProgressRecordIds: []
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }

    if (message.hostZone !== undefined) {
      HostZone.encode(message.hostZone, writer.uint32(18).fork()).ldelim();
    }

    for (const v of message.delegationRecords) {
      DelegationRecord.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    for (const v of message.unbondingRecords) {
      UnbondingRecord.encode(v!, writer.uint32(34).fork()).ldelim();
    }

    for (const v of message.redemptionRecords) {
      RedemptionRecord.encode(v!, writer.uint32(42).fork()).ldelim();
    }

    for (const v of message.slashRecords) {
      SlashRecord.encode(v!, writer.uint32(50).fork()).ldelim();
    }

    for (const v of message.transferInProgressRecordIds) {
      TransferInProgressRecordIds.encode(v!, writer.uint32(58).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;

        case 2:
          message.hostZone = HostZone.decode(reader, reader.uint32());
          break;

        case 3:
          message.delegationRecords.push(DelegationRecord.decode(reader, reader.uint32()));
          break;

        case 4:
          message.unbondingRecords.push(UnbondingRecord.decode(reader, reader.uint32()));
          break;

        case 5:
          message.redemptionRecords.push(RedemptionRecord.decode(reader, reader.uint32()));
          break;

        case 6:
          message.slashRecords.push(SlashRecord.decode(reader, reader.uint32()));
          break;

        case 7:
          message.transferInProgressRecordIds.push(TransferInProgressRecordIds.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.hostZone = object.hostZone !== undefined && object.hostZone !== null ? HostZone.fromPartial(object.hostZone) : undefined;
    message.delegationRecords = object.delegationRecords?.map(e => DelegationRecord.fromPartial(e)) || [];
    message.unbondingRecords = object.unbondingRecords?.map(e => UnbondingRecord.fromPartial(e)) || [];
    message.redemptionRecords = object.redemptionRecords?.map(e => RedemptionRecord.fromPartial(e)) || [];
    message.slashRecords = object.slashRecords?.map(e => SlashRecord.fromPartial(e)) || [];
    message.transferInProgressRecordIds = object.transferInProgressRecordIds?.map(e => TransferInProgressRecordIds.fromPartial(e)) || [];
    return message;
  }

};