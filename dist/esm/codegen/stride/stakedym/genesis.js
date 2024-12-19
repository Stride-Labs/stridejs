import { HostZone, DelegationRecord, UnbondingRecord, RedemptionRecord, SlashRecord } from "./stakedym";
import { BinaryReader, BinaryWriter } from "../../binary";
function createBaseParams() {
  return {};
}
const Params = {
  typeUrl: "/stride.stakedym.Params",
  encode(_, writer = BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
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
  fromPartial(_) {
    const message = createBaseParams();
    return message;
  },
  fromAmino(_) {
    const message = createBaseParams();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return Params.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return Params.decode(message.value);
  },
  toProto(message) {
    return Params.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.stakedym.Params",
      value: Params.encode(message).finish()
    };
  }
};
function createBaseTransferInProgressRecordIds() {
  return {
    channelId: "",
    sequence: BigInt(0),
    recordId: BigInt(0)
  };
}
const TransferInProgressRecordIds = {
  typeUrl: "/stride.stakedym.TransferInProgressRecordIds",
  encode(message, writer = BinaryWriter.create()) {
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
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
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
  fromPartial(object) {
    const message = createBaseTransferInProgressRecordIds();
    message.channelId = object.channelId ?? "";
    message.sequence = object.sequence !== void 0 && object.sequence !== null ? BigInt(object.sequence.toString()) : BigInt(0);
    message.recordId = object.recordId !== void 0 && object.recordId !== null ? BigInt(object.recordId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object) {
    const message = createBaseTransferInProgressRecordIds();
    if (object.channel_id !== void 0 && object.channel_id !== null) {
      message.channelId = object.channel_id;
    }
    if (object.sequence !== void 0 && object.sequence !== null) {
      message.sequence = BigInt(object.sequence);
    }
    if (object.record_id !== void 0 && object.record_id !== null) {
      message.recordId = BigInt(object.record_id);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.channel_id = message.channelId === "" ? void 0 : message.channelId;
    obj.sequence = message.sequence !== BigInt(0) ? message.sequence.toString() : void 0;
    obj.record_id = message.recordId !== BigInt(0) ? message.recordId.toString() : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return TransferInProgressRecordIds.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return TransferInProgressRecordIds.decode(message.value);
  },
  toProto(message) {
    return TransferInProgressRecordIds.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.stakedym.TransferInProgressRecordIds",
      value: TransferInProgressRecordIds.encode(message).finish()
    };
  }
};
function createBaseGenesisState() {
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
const GenesisState = {
  typeUrl: "/stride.stakedym.GenesisState",
  encode(message, writer = BinaryWriter.create()) {
    if (message.params !== void 0) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.hostZone !== void 0) {
      HostZone.encode(message.hostZone, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.delegationRecords) {
      DelegationRecord.encode(v, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.unbondingRecords) {
      UnbondingRecord.encode(v, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.redemptionRecords) {
      RedemptionRecord.encode(v, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.slashRecords) {
      SlashRecord.encode(v, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.transferInProgressRecordIds) {
      TransferInProgressRecordIds.encode(v, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
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
  fromPartial(object) {
    const message = createBaseGenesisState();
    message.params = object.params !== void 0 && object.params !== null ? Params.fromPartial(object.params) : void 0;
    message.hostZone = object.hostZone !== void 0 && object.hostZone !== null ? HostZone.fromPartial(object.hostZone) : void 0;
    message.delegationRecords = object.delegationRecords?.map((e) => DelegationRecord.fromPartial(e)) || [];
    message.unbondingRecords = object.unbondingRecords?.map((e) => UnbondingRecord.fromPartial(e)) || [];
    message.redemptionRecords = object.redemptionRecords?.map((e) => RedemptionRecord.fromPartial(e)) || [];
    message.slashRecords = object.slashRecords?.map((e) => SlashRecord.fromPartial(e)) || [];
    message.transferInProgressRecordIds = object.transferInProgressRecordIds?.map((e) => TransferInProgressRecordIds.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseGenesisState();
    if (object.params !== void 0 && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    if (object.host_zone !== void 0 && object.host_zone !== null) {
      message.hostZone = HostZone.fromAmino(object.host_zone);
    }
    message.delegationRecords = object.delegation_records?.map((e) => DelegationRecord.fromAmino(e)) || [];
    message.unbondingRecords = object.unbonding_records?.map((e) => UnbondingRecord.fromAmino(e)) || [];
    message.redemptionRecords = object.redemption_records?.map((e) => RedemptionRecord.fromAmino(e)) || [];
    message.slashRecords = object.slash_records?.map((e) => SlashRecord.fromAmino(e)) || [];
    message.transferInProgressRecordIds = object.transfer_in_progress_record_ids?.map((e) => TransferInProgressRecordIds.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.params = message.params ? Params.toAmino(message.params) : void 0;
    obj.host_zone = message.hostZone ? HostZone.toAmino(message.hostZone) : void 0;
    if (message.delegationRecords) {
      obj.delegation_records = message.delegationRecords.map((e) => e ? DelegationRecord.toAmino(e) : void 0);
    } else {
      obj.delegation_records = message.delegationRecords;
    }
    if (message.unbondingRecords) {
      obj.unbonding_records = message.unbondingRecords.map((e) => e ? UnbondingRecord.toAmino(e) : void 0);
    } else {
      obj.unbonding_records = message.unbondingRecords;
    }
    if (message.redemptionRecords) {
      obj.redemption_records = message.redemptionRecords.map((e) => e ? RedemptionRecord.toAmino(e) : void 0);
    } else {
      obj.redemption_records = message.redemptionRecords;
    }
    if (message.slashRecords) {
      obj.slash_records = message.slashRecords.map((e) => e ? SlashRecord.toAmino(e) : void 0);
    } else {
      obj.slash_records = message.slashRecords;
    }
    if (message.transferInProgressRecordIds) {
      obj.transfer_in_progress_record_ids = message.transferInProgressRecordIds.map((e) => e ? TransferInProgressRecordIds.toAmino(e) : void 0);
    } else {
      obj.transfer_in_progress_record_ids = message.transferInProgressRecordIds;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return GenesisState.decode(message.value);
  },
  toProto(message) {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.stakedym.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
export {
  GenesisState,
  Params,
  TransferInProgressRecordIds
};
