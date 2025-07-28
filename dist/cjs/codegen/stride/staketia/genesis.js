"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var genesis_exports = {};
__export(genesis_exports, {
  GenesisState: () => GenesisState,
  Params: () => Params,
  TransferInProgressRecordIds: () => TransferInProgressRecordIds
});
module.exports = __toCommonJS(genesis_exports);
var import_staketia = require("./staketia");
var import_binary = require("../../binary");
function createBaseParams() {
  return {};
}
const Params = {
  typeUrl: "/stride.staketia.Params",
  encode(_, writer = import_binary.BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
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
      typeUrl: "/stride.staketia.Params",
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
  typeUrl: "/stride.staketia.TransferInProgressRecordIds",
  encode(message, writer = import_binary.BinaryWriter.create()) {
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
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
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
    obj.sequence = message.sequence !== BigInt(0) ? message.sequence?.toString() : void 0;
    obj.record_id = message.recordId !== BigInt(0) ? message.recordId?.toString() : void 0;
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
      typeUrl: "/stride.staketia.TransferInProgressRecordIds",
      value: TransferInProgressRecordIds.encode(message).finish()
    };
  }
};
function createBaseGenesisState() {
  return {
    params: Params.fromPartial({}),
    hostZone: import_staketia.HostZone.fromPartial({}),
    delegationRecords: [],
    unbondingRecords: [],
    redemptionRecords: [],
    slashRecords: [],
    transferInProgressRecordIds: []
  };
}
const GenesisState = {
  typeUrl: "/stride.staketia.GenesisState",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.params !== void 0) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.hostZone !== void 0) {
      import_staketia.HostZone.encode(message.hostZone, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.delegationRecords) {
      import_staketia.DelegationRecord.encode(v, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.unbondingRecords) {
      import_staketia.UnbondingRecord.encode(v, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.redemptionRecords) {
      import_staketia.RedemptionRecord.encode(v, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.slashRecords) {
      import_staketia.SlashRecord.encode(v, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.transferInProgressRecordIds) {
      TransferInProgressRecordIds.encode(v, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.hostZone = import_staketia.HostZone.decode(reader, reader.uint32());
          break;
        case 3:
          message.delegationRecords.push(import_staketia.DelegationRecord.decode(reader, reader.uint32()));
          break;
        case 4:
          message.unbondingRecords.push(import_staketia.UnbondingRecord.decode(reader, reader.uint32()));
          break;
        case 5:
          message.redemptionRecords.push(import_staketia.RedemptionRecord.decode(reader, reader.uint32()));
          break;
        case 6:
          message.slashRecords.push(import_staketia.SlashRecord.decode(reader, reader.uint32()));
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
    message.hostZone = object.hostZone !== void 0 && object.hostZone !== null ? import_staketia.HostZone.fromPartial(object.hostZone) : void 0;
    message.delegationRecords = object.delegationRecords?.map((e) => import_staketia.DelegationRecord.fromPartial(e)) || [];
    message.unbondingRecords = object.unbondingRecords?.map((e) => import_staketia.UnbondingRecord.fromPartial(e)) || [];
    message.redemptionRecords = object.redemptionRecords?.map((e) => import_staketia.RedemptionRecord.fromPartial(e)) || [];
    message.slashRecords = object.slashRecords?.map((e) => import_staketia.SlashRecord.fromPartial(e)) || [];
    message.transferInProgressRecordIds = object.transferInProgressRecordIds?.map((e) => TransferInProgressRecordIds.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseGenesisState();
    if (object.params !== void 0 && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    if (object.host_zone !== void 0 && object.host_zone !== null) {
      message.hostZone = import_staketia.HostZone.fromAmino(object.host_zone);
    }
    message.delegationRecords = object.delegation_records?.map((e) => import_staketia.DelegationRecord.fromAmino(e)) || [];
    message.unbondingRecords = object.unbonding_records?.map((e) => import_staketia.UnbondingRecord.fromAmino(e)) || [];
    message.redemptionRecords = object.redemption_records?.map((e) => import_staketia.RedemptionRecord.fromAmino(e)) || [];
    message.slashRecords = object.slash_records?.map((e) => import_staketia.SlashRecord.fromAmino(e)) || [];
    message.transferInProgressRecordIds = object.transfer_in_progress_record_ids?.map((e) => TransferInProgressRecordIds.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.params = message.params ? Params.toAmino(message.params) : void 0;
    obj.host_zone = message.hostZone ? import_staketia.HostZone.toAmino(message.hostZone) : void 0;
    if (message.delegationRecords) {
      obj.delegation_records = message.delegationRecords.map((e) => e ? import_staketia.DelegationRecord.toAmino(e) : void 0);
    } else {
      obj.delegation_records = message.delegationRecords;
    }
    if (message.unbondingRecords) {
      obj.unbonding_records = message.unbondingRecords.map((e) => e ? import_staketia.UnbondingRecord.toAmino(e) : void 0);
    } else {
      obj.unbonding_records = message.unbondingRecords;
    }
    if (message.redemptionRecords) {
      obj.redemption_records = message.redemptionRecords.map((e) => e ? import_staketia.RedemptionRecord.toAmino(e) : void 0);
    } else {
      obj.redemption_records = message.redemptionRecords;
    }
    if (message.slashRecords) {
      obj.slash_records = message.slashRecords.map((e) => e ? import_staketia.SlashRecord.toAmino(e) : void 0);
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
      typeUrl: "/stride.staketia.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
// Removed broken CommonJS export annotation
