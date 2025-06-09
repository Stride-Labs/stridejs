import { HostZone, HostZoneAmino, HostZoneSDKType, DelegationRecord, DelegationRecordAmino, DelegationRecordSDKType, UnbondingRecord, UnbondingRecordAmino, UnbondingRecordSDKType, RedemptionRecord, RedemptionRecordAmino, RedemptionRecordSDKType, SlashRecord, SlashRecordAmino, SlashRecordSDKType } from "./stakedym";
import { BinaryReader, BinaryWriter } from "../../binary";
/** Params defines the stakedym module parameters. */
export interface Params {}
export interface ParamsProtoMsg {
  typeUrl: "/stride.stakedym.Params";
  value: Uint8Array;
}
/**
 * Params defines the stakedym module parameters.
 * @name ParamsAmino
 * @package stride.stakedym
 * @see proto type: stride.stakedym.Params
 */
export interface ParamsAmino {}
export interface ParamsAminoMsg {
  type: "/stride.stakedym.Params";
  value: ParamsAmino;
}
/** Params defines the stakedym module parameters. */
export interface ParamsSDKType {}
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
  typeUrl: "/stride.stakedym.TransferInProgressRecordIds";
  value: Uint8Array;
}
/**
 * TransferInProgressRecordIds stores record IDs for delegation records
 * that have a transfer in progress
 * @name TransferInProgressRecordIdsAmino
 * @package stride.stakedym
 * @see proto type: stride.stakedym.TransferInProgressRecordIds
 */
export interface TransferInProgressRecordIdsAmino {
  channel_id?: string;
  sequence?: string;
  record_id?: string;
}
export interface TransferInProgressRecordIdsAminoMsg {
  type: "/stride.stakedym.TransferInProgressRecordIds";
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
export interface GenesisStateProtoMsg {
  typeUrl: "/stride.stakedym.GenesisState";
  value: Uint8Array;
}
/**
 * GenesisState defines the stakedym module's genesis state.
 * @name GenesisStateAmino
 * @package stride.stakedym
 * @see proto type: stride.stakedym.GenesisState
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
  type: "/stride.stakedym.GenesisState";
  value: GenesisStateAmino;
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
  typeUrl: "/stride.stakedym.Params",
  encode(_: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(_: Partial<Params>): Params {
    const message = createBaseParams();
    return message;
  },
  fromAmino(_: ParamsAmino): Params {
    const message = createBaseParams();
    return message;
  },
  toAmino(_: Params): ParamsAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/stride.stakedym.Params",
      value: Params.encode(message).finish()
    };
  }
};
function createBaseTransferInProgressRecordIds(): TransferInProgressRecordIds {
  return {
    channelId: "",
    sequence: BigInt(0),
    recordId: BigInt(0)
  };
}
export const TransferInProgressRecordIds = {
  typeUrl: "/stride.stakedym.TransferInProgressRecordIds",
  encode(message: TransferInProgressRecordIds, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.channelId !== "") {
      writer.uint32(10).string(message.channelId);
    }
    if (message.sequence !== BigInt(0)) {
      writer.uint32(16).uint64(message.sequence);
    }
    if (message.recordId !== BigInt(0)) {
      writer.uint32(24).uint64(message.recordId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TransferInProgressRecordIds {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTransferInProgressRecordIds();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.channelId = reader.string();
          break;
        case 2:
          message.sequence = reader.uint64();
          break;
        case 3:
          message.recordId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<TransferInProgressRecordIds>): TransferInProgressRecordIds {
    const message = createBaseTransferInProgressRecordIds();
    message.channelId = object.channelId ?? "";
    message.sequence = object.sequence !== undefined && object.sequence !== null ? BigInt(object.sequence.toString()) : BigInt(0);
    message.recordId = object.recordId !== undefined && object.recordId !== null ? BigInt(object.recordId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: TransferInProgressRecordIdsAmino): TransferInProgressRecordIds {
    const message = createBaseTransferInProgressRecordIds();
    if (object.channel_id !== undefined && object.channel_id !== null) {
      message.channelId = object.channel_id;
    }
    if (object.sequence !== undefined && object.sequence !== null) {
      message.sequence = BigInt(object.sequence);
    }
    if (object.record_id !== undefined && object.record_id !== null) {
      message.recordId = BigInt(object.record_id);
    }
    return message;
  },
  toAmino(message: TransferInProgressRecordIds): TransferInProgressRecordIdsAmino {
    const obj: any = {};
    obj.channel_id = message.channelId === "" ? undefined : message.channelId;
    obj.sequence = message.sequence !== BigInt(0) ? message.sequence?.toString() : undefined;
    obj.record_id = message.recordId !== BigInt(0) ? message.recordId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: TransferInProgressRecordIdsAminoMsg): TransferInProgressRecordIds {
    return TransferInProgressRecordIds.fromAmino(object.value);
  },
  fromProtoMsg(message: TransferInProgressRecordIdsProtoMsg): TransferInProgressRecordIds {
    return TransferInProgressRecordIds.decode(message.value);
  },
  toProto(message: TransferInProgressRecordIds): Uint8Array {
    return TransferInProgressRecordIds.encode(message).finish();
  },
  toProtoMsg(message: TransferInProgressRecordIds): TransferInProgressRecordIdsProtoMsg {
    return {
      typeUrl: "/stride.stakedym.TransferInProgressRecordIds",
      value: TransferInProgressRecordIds.encode(message).finish()
    };
  }
};
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    hostZone: HostZone.fromPartial({}),
    delegationRecords: [],
    unbondingRecords: [],
    redemptionRecords: [],
    slashRecords: [],
    transferInProgressRecordIds: []
  };
}
export const GenesisState = {
  typeUrl: "/stride.stakedym.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.hostZone = object.hostZone !== undefined && object.hostZone !== null ? HostZone.fromPartial(object.hostZone) : undefined;
    message.delegationRecords = object.delegationRecords?.map(e => DelegationRecord.fromPartial(e)) || [];
    message.unbondingRecords = object.unbondingRecords?.map(e => UnbondingRecord.fromPartial(e)) || [];
    message.redemptionRecords = object.redemptionRecords?.map(e => RedemptionRecord.fromPartial(e)) || [];
    message.slashRecords = object.slashRecords?.map(e => SlashRecord.fromPartial(e)) || [];
    message.transferInProgressRecordIds = object.transferInProgressRecordIds?.map(e => TransferInProgressRecordIds.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    if (object.host_zone !== undefined && object.host_zone !== null) {
      message.hostZone = HostZone.fromAmino(object.host_zone);
    }
    message.delegationRecords = object.delegation_records?.map(e => DelegationRecord.fromAmino(e)) || [];
    message.unbondingRecords = object.unbonding_records?.map(e => UnbondingRecord.fromAmino(e)) || [];
    message.redemptionRecords = object.redemption_records?.map(e => RedemptionRecord.fromAmino(e)) || [];
    message.slashRecords = object.slash_records?.map(e => SlashRecord.fromAmino(e)) || [];
    message.transferInProgressRecordIds = object.transfer_in_progress_record_ids?.map(e => TransferInProgressRecordIds.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    obj.host_zone = message.hostZone ? HostZone.toAmino(message.hostZone) : undefined;
    if (message.delegationRecords) {
      obj.delegation_records = message.delegationRecords.map(e => e ? DelegationRecord.toAmino(e) : undefined);
    } else {
      obj.delegation_records = message.delegationRecords;
    }
    if (message.unbondingRecords) {
      obj.unbonding_records = message.unbondingRecords.map(e => e ? UnbondingRecord.toAmino(e) : undefined);
    } else {
      obj.unbonding_records = message.unbondingRecords;
    }
    if (message.redemptionRecords) {
      obj.redemption_records = message.redemptionRecords.map(e => e ? RedemptionRecord.toAmino(e) : undefined);
    } else {
      obj.redemption_records = message.redemptionRecords;
    }
    if (message.slashRecords) {
      obj.slash_records = message.slashRecords.map(e => e ? SlashRecord.toAmino(e) : undefined);
    } else {
      obj.slash_records = message.slashRecords;
    }
    if (message.transferInProgressRecordIds) {
      obj.transfer_in_progress_record_ids = message.transferInProgressRecordIds.map(e => e ? TransferInProgressRecordIds.toAmino(e) : undefined);
    } else {
      obj.transfer_in_progress_record_ids = message.transferInProgressRecordIds;
    }
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/stride.stakedym.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};