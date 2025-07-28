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
  GenesisState: () => GenesisState
});
module.exports = __toCommonJS(genesis_exports);
var import_params = require("./params");
var import_records = require("./records");
var import_binary = require("../../binary");
function createBaseGenesisState() {
  return {
    params: import_params.Params.fromPartial({}),
    portId: "",
    userRedemptionRecordList: [],
    userRedemptionRecordCount: BigInt(0),
    epochUnbondingRecordList: [],
    depositRecordList: [],
    depositRecordCount: BigInt(0),
    lsmTokenDepositList: []
  };
}
const GenesisState = {
  typeUrl: "/stride.records.GenesisState",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.params !== void 0) {
      import_params.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.portId !== "") {
      writer.uint32(18).string(message.portId);
    }
    for (const v of message.userRedemptionRecordList) {
      import_records.UserRedemptionRecord.encode(v, writer.uint32(26).fork()).ldelim();
    }
    if (message.userRedemptionRecordCount !== BigInt(0)) {
      writer.uint32(32).uint64(message.userRedemptionRecordCount);
    }
    for (const v of message.epochUnbondingRecordList) {
      import_records.EpochUnbondingRecord.encode(v, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.depositRecordList) {
      import_records.DepositRecord.encode(v, writer.uint32(58).fork()).ldelim();
    }
    if (message.depositRecordCount !== BigInt(0)) {
      writer.uint32(64).uint64(message.depositRecordCount);
    }
    for (const v of message.lsmTokenDepositList) {
      import_records.LSMTokenDeposit.encode(v, writer.uint32(74).fork()).ldelim();
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
          message.params = import_params.Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.portId = reader.string();
          break;
        case 3:
          message.userRedemptionRecordList.push(import_records.UserRedemptionRecord.decode(reader, reader.uint32()));
          break;
        case 4:
          message.userRedemptionRecordCount = reader.uint64();
          break;
        case 5:
          message.epochUnbondingRecordList.push(import_records.EpochUnbondingRecord.decode(reader, reader.uint32()));
          break;
        case 7:
          message.depositRecordList.push(import_records.DepositRecord.decode(reader, reader.uint32()));
          break;
        case 8:
          message.depositRecordCount = reader.uint64();
          break;
        case 9:
          message.lsmTokenDepositList.push(import_records.LSMTokenDeposit.decode(reader, reader.uint32()));
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
    message.params = object.params !== void 0 && object.params !== null ? import_params.Params.fromPartial(object.params) : void 0;
    message.portId = object.portId ?? "";
    message.userRedemptionRecordList = object.userRedemptionRecordList?.map((e) => import_records.UserRedemptionRecord.fromPartial(e)) || [];
    message.userRedemptionRecordCount = object.userRedemptionRecordCount !== void 0 && object.userRedemptionRecordCount !== null ? BigInt(object.userRedemptionRecordCount.toString()) : BigInt(0);
    message.epochUnbondingRecordList = object.epochUnbondingRecordList?.map((e) => import_records.EpochUnbondingRecord.fromPartial(e)) || [];
    message.depositRecordList = object.depositRecordList?.map((e) => import_records.DepositRecord.fromPartial(e)) || [];
    message.depositRecordCount = object.depositRecordCount !== void 0 && object.depositRecordCount !== null ? BigInt(object.depositRecordCount.toString()) : BigInt(0);
    message.lsmTokenDepositList = object.lsmTokenDepositList?.map((e) => import_records.LSMTokenDeposit.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseGenesisState();
    if (object.params !== void 0 && object.params !== null) {
      message.params = import_params.Params.fromAmino(object.params);
    }
    if (object.port_id !== void 0 && object.port_id !== null) {
      message.portId = object.port_id;
    }
    message.userRedemptionRecordList = object.user_redemption_record_list?.map((e) => import_records.UserRedemptionRecord.fromAmino(e)) || [];
    if (object.user_redemption_record_count !== void 0 && object.user_redemption_record_count !== null) {
      message.userRedemptionRecordCount = BigInt(object.user_redemption_record_count);
    }
    message.epochUnbondingRecordList = object.epoch_unbonding_record_list?.map((e) => import_records.EpochUnbondingRecord.fromAmino(e)) || [];
    message.depositRecordList = object.deposit_record_list?.map((e) => import_records.DepositRecord.fromAmino(e)) || [];
    if (object.deposit_record_count !== void 0 && object.deposit_record_count !== null) {
      message.depositRecordCount = BigInt(object.deposit_record_count);
    }
    message.lsmTokenDepositList = object.lsm_token_deposit_list?.map((e) => import_records.LSMTokenDeposit.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.params = message.params ? import_params.Params.toAmino(message.params) : void 0;
    obj.port_id = message.portId === "" ? void 0 : message.portId;
    if (message.userRedemptionRecordList) {
      obj.user_redemption_record_list = message.userRedemptionRecordList.map((e) => e ? import_records.UserRedemptionRecord.toAmino(e) : void 0);
    } else {
      obj.user_redemption_record_list = message.userRedemptionRecordList;
    }
    obj.user_redemption_record_count = message.userRedemptionRecordCount !== BigInt(0) ? message.userRedemptionRecordCount?.toString() : void 0;
    if (message.epochUnbondingRecordList) {
      obj.epoch_unbonding_record_list = message.epochUnbondingRecordList.map((e) => e ? import_records.EpochUnbondingRecord.toAmino(e) : void 0);
    } else {
      obj.epoch_unbonding_record_list = message.epochUnbondingRecordList;
    }
    if (message.depositRecordList) {
      obj.deposit_record_list = message.depositRecordList.map((e) => e ? import_records.DepositRecord.toAmino(e) : void 0);
    } else {
      obj.deposit_record_list = message.depositRecordList;
    }
    obj.deposit_record_count = message.depositRecordCount !== BigInt(0) ? message.depositRecordCount?.toString() : void 0;
    if (message.lsmTokenDepositList) {
      obj.lsm_token_deposit_list = message.lsmTokenDepositList.map((e) => e ? import_records.LSMTokenDeposit.toAmino(e) : void 0);
    } else {
      obj.lsm_token_deposit_list = message.lsmTokenDepositList;
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
      typeUrl: "/stride.records.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
// Removed broken CommonJS export annotation
