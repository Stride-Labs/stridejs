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
  DelegatorStartingInfoRecord: () => DelegatorStartingInfoRecord,
  DelegatorWithdrawInfo: () => DelegatorWithdrawInfo,
  GenesisState: () => GenesisState,
  ValidatorAccumulatedCommissionRecord: () => ValidatorAccumulatedCommissionRecord,
  ValidatorCurrentRewardsRecord: () => ValidatorCurrentRewardsRecord,
  ValidatorHistoricalRewardsRecord: () => ValidatorHistoricalRewardsRecord,
  ValidatorOutstandingRewardsRecord: () => ValidatorOutstandingRewardsRecord,
  ValidatorSlashEventRecord: () => ValidatorSlashEventRecord
});
module.exports = __toCommonJS(genesis_exports);
var import_coin = require("../../base/v1beta1/coin");
var import_distribution = require("./distribution");
var import_binary = require("../../../binary");
function createBaseDelegatorWithdrawInfo() {
  return {
    delegatorAddress: "",
    withdrawAddress: ""
  };
}
const DelegatorWithdrawInfo = {
  typeUrl: "/cosmos.distribution.v1beta1.DelegatorWithdrawInfo",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.withdrawAddress !== "") {
      writer.uint32(18).string(message.withdrawAddress);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseDelegatorWithdrawInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        case 2:
          message.withdrawAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseDelegatorWithdrawInfo();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.withdrawAddress = object.withdrawAddress ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseDelegatorWithdrawInfo();
    if (object.delegator_address !== void 0 && object.delegator_address !== null) {
      message.delegatorAddress = object.delegator_address;
    }
    if (object.withdraw_address !== void 0 && object.withdraw_address !== null) {
      message.withdrawAddress = object.withdraw_address;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.delegator_address = message.delegatorAddress === "" ? void 0 : message.delegatorAddress;
    obj.withdraw_address = message.withdrawAddress === "" ? void 0 : message.withdrawAddress;
    return obj;
  },
  fromAminoMsg(object) {
    return DelegatorWithdrawInfo.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/DelegatorWithdrawInfo",
      value: DelegatorWithdrawInfo.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return DelegatorWithdrawInfo.decode(message.value);
  },
  toProto(message) {
    return DelegatorWithdrawInfo.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.DelegatorWithdrawInfo",
      value: DelegatorWithdrawInfo.encode(message).finish()
    };
  }
};
function createBaseValidatorOutstandingRewardsRecord() {
  return {
    validatorAddress: "",
    outstandingRewards: []
  };
}
const ValidatorOutstandingRewardsRecord = {
  typeUrl: "/cosmos.distribution.v1beta1.ValidatorOutstandingRewardsRecord",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }
    for (const v of message.outstandingRewards) {
      import_coin.DecCoin.encode(v, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseValidatorOutstandingRewardsRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddress = reader.string();
          break;
        case 2:
          message.outstandingRewards.push(import_coin.DecCoin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseValidatorOutstandingRewardsRecord();
    message.validatorAddress = object.validatorAddress ?? "";
    message.outstandingRewards = object.outstandingRewards?.map((e) => import_coin.DecCoin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseValidatorOutstandingRewardsRecord();
    if (object.validator_address !== void 0 && object.validator_address !== null) {
      message.validatorAddress = object.validator_address;
    }
    message.outstandingRewards = object.outstanding_rewards?.map((e) => import_coin.DecCoin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.validator_address = message.validatorAddress === "" ? void 0 : message.validatorAddress;
    if (message.outstandingRewards) {
      obj.outstanding_rewards = message.outstandingRewards.map((e) => e ? import_coin.DecCoin.toAmino(e) : void 0);
    } else {
      obj.outstanding_rewards = message.outstandingRewards;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return ValidatorOutstandingRewardsRecord.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/ValidatorOutstandingRewardsRecord",
      value: ValidatorOutstandingRewardsRecord.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return ValidatorOutstandingRewardsRecord.decode(message.value);
  },
  toProto(message) {
    return ValidatorOutstandingRewardsRecord.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.ValidatorOutstandingRewardsRecord",
      value: ValidatorOutstandingRewardsRecord.encode(message).finish()
    };
  }
};
function createBaseValidatorAccumulatedCommissionRecord() {
  return {
    validatorAddress: "",
    accumulated: import_distribution.ValidatorAccumulatedCommission.fromPartial({})
  };
}
const ValidatorAccumulatedCommissionRecord = {
  typeUrl: "/cosmos.distribution.v1beta1.ValidatorAccumulatedCommissionRecord",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }
    if (message.accumulated !== void 0) {
      import_distribution.ValidatorAccumulatedCommission.encode(message.accumulated, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseValidatorAccumulatedCommissionRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddress = reader.string();
          break;
        case 2:
          message.accumulated = import_distribution.ValidatorAccumulatedCommission.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseValidatorAccumulatedCommissionRecord();
    message.validatorAddress = object.validatorAddress ?? "";
    message.accumulated = object.accumulated !== void 0 && object.accumulated !== null ? import_distribution.ValidatorAccumulatedCommission.fromPartial(object.accumulated) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseValidatorAccumulatedCommissionRecord();
    if (object.validator_address !== void 0 && object.validator_address !== null) {
      message.validatorAddress = object.validator_address;
    }
    if (object.accumulated !== void 0 && object.accumulated !== null) {
      message.accumulated = import_distribution.ValidatorAccumulatedCommission.fromAmino(object.accumulated);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.validator_address = message.validatorAddress === "" ? void 0 : message.validatorAddress;
    obj.accumulated = message.accumulated ? import_distribution.ValidatorAccumulatedCommission.toAmino(message.accumulated) : import_distribution.ValidatorAccumulatedCommission.toAmino(import_distribution.ValidatorAccumulatedCommission.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object) {
    return ValidatorAccumulatedCommissionRecord.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/ValidatorAccumulatedCommissionRecord",
      value: ValidatorAccumulatedCommissionRecord.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return ValidatorAccumulatedCommissionRecord.decode(message.value);
  },
  toProto(message) {
    return ValidatorAccumulatedCommissionRecord.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.ValidatorAccumulatedCommissionRecord",
      value: ValidatorAccumulatedCommissionRecord.encode(message).finish()
    };
  }
};
function createBaseValidatorHistoricalRewardsRecord() {
  return {
    validatorAddress: "",
    period: BigInt(0),
    rewards: import_distribution.ValidatorHistoricalRewards.fromPartial({})
  };
}
const ValidatorHistoricalRewardsRecord = {
  typeUrl: "/cosmos.distribution.v1beta1.ValidatorHistoricalRewardsRecord",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }
    if (message.period !== BigInt(0)) {
      writer.uint32(16).uint64(message.period);
    }
    if (message.rewards !== void 0) {
      import_distribution.ValidatorHistoricalRewards.encode(message.rewards, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseValidatorHistoricalRewardsRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddress = reader.string();
          break;
        case 2:
          message.period = reader.uint64();
          break;
        case 3:
          message.rewards = import_distribution.ValidatorHistoricalRewards.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseValidatorHistoricalRewardsRecord();
    message.validatorAddress = object.validatorAddress ?? "";
    message.period = object.period !== void 0 && object.period !== null ? BigInt(object.period.toString()) : BigInt(0);
    message.rewards = object.rewards !== void 0 && object.rewards !== null ? import_distribution.ValidatorHistoricalRewards.fromPartial(object.rewards) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseValidatorHistoricalRewardsRecord();
    if (object.validator_address !== void 0 && object.validator_address !== null) {
      message.validatorAddress = object.validator_address;
    }
    if (object.period !== void 0 && object.period !== null) {
      message.period = BigInt(object.period);
    }
    if (object.rewards !== void 0 && object.rewards !== null) {
      message.rewards = import_distribution.ValidatorHistoricalRewards.fromAmino(object.rewards);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.validator_address = message.validatorAddress === "" ? void 0 : message.validatorAddress;
    obj.period = message.period !== BigInt(0) ? message.period?.toString() : void 0;
    obj.rewards = message.rewards ? import_distribution.ValidatorHistoricalRewards.toAmino(message.rewards) : import_distribution.ValidatorHistoricalRewards.toAmino(import_distribution.ValidatorHistoricalRewards.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object) {
    return ValidatorHistoricalRewardsRecord.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/ValidatorHistoricalRewardsRecord",
      value: ValidatorHistoricalRewardsRecord.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return ValidatorHistoricalRewardsRecord.decode(message.value);
  },
  toProto(message) {
    return ValidatorHistoricalRewardsRecord.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.ValidatorHistoricalRewardsRecord",
      value: ValidatorHistoricalRewardsRecord.encode(message).finish()
    };
  }
};
function createBaseValidatorCurrentRewardsRecord() {
  return {
    validatorAddress: "",
    rewards: import_distribution.ValidatorCurrentRewards.fromPartial({})
  };
}
const ValidatorCurrentRewardsRecord = {
  typeUrl: "/cosmos.distribution.v1beta1.ValidatorCurrentRewardsRecord",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }
    if (message.rewards !== void 0) {
      import_distribution.ValidatorCurrentRewards.encode(message.rewards, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseValidatorCurrentRewardsRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddress = reader.string();
          break;
        case 2:
          message.rewards = import_distribution.ValidatorCurrentRewards.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseValidatorCurrentRewardsRecord();
    message.validatorAddress = object.validatorAddress ?? "";
    message.rewards = object.rewards !== void 0 && object.rewards !== null ? import_distribution.ValidatorCurrentRewards.fromPartial(object.rewards) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseValidatorCurrentRewardsRecord();
    if (object.validator_address !== void 0 && object.validator_address !== null) {
      message.validatorAddress = object.validator_address;
    }
    if (object.rewards !== void 0 && object.rewards !== null) {
      message.rewards = import_distribution.ValidatorCurrentRewards.fromAmino(object.rewards);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.validator_address = message.validatorAddress === "" ? void 0 : message.validatorAddress;
    obj.rewards = message.rewards ? import_distribution.ValidatorCurrentRewards.toAmino(message.rewards) : import_distribution.ValidatorCurrentRewards.toAmino(import_distribution.ValidatorCurrentRewards.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object) {
    return ValidatorCurrentRewardsRecord.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/ValidatorCurrentRewardsRecord",
      value: ValidatorCurrentRewardsRecord.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return ValidatorCurrentRewardsRecord.decode(message.value);
  },
  toProto(message) {
    return ValidatorCurrentRewardsRecord.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.ValidatorCurrentRewardsRecord",
      value: ValidatorCurrentRewardsRecord.encode(message).finish()
    };
  }
};
function createBaseDelegatorStartingInfoRecord() {
  return {
    delegatorAddress: "",
    validatorAddress: "",
    startingInfo: import_distribution.DelegatorStartingInfo.fromPartial({})
  };
}
const DelegatorStartingInfoRecord = {
  typeUrl: "/cosmos.distribution.v1beta1.DelegatorStartingInfoRecord",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.validatorAddress !== "") {
      writer.uint32(18).string(message.validatorAddress);
    }
    if (message.startingInfo !== void 0) {
      import_distribution.DelegatorStartingInfo.encode(message.startingInfo, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseDelegatorStartingInfoRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        case 2:
          message.validatorAddress = reader.string();
          break;
        case 3:
          message.startingInfo = import_distribution.DelegatorStartingInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseDelegatorStartingInfoRecord();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.validatorAddress = object.validatorAddress ?? "";
    message.startingInfo = object.startingInfo !== void 0 && object.startingInfo !== null ? import_distribution.DelegatorStartingInfo.fromPartial(object.startingInfo) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseDelegatorStartingInfoRecord();
    if (object.delegator_address !== void 0 && object.delegator_address !== null) {
      message.delegatorAddress = object.delegator_address;
    }
    if (object.validator_address !== void 0 && object.validator_address !== null) {
      message.validatorAddress = object.validator_address;
    }
    if (object.starting_info !== void 0 && object.starting_info !== null) {
      message.startingInfo = import_distribution.DelegatorStartingInfo.fromAmino(object.starting_info);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.delegator_address = message.delegatorAddress === "" ? void 0 : message.delegatorAddress;
    obj.validator_address = message.validatorAddress === "" ? void 0 : message.validatorAddress;
    obj.starting_info = message.startingInfo ? import_distribution.DelegatorStartingInfo.toAmino(message.startingInfo) : import_distribution.DelegatorStartingInfo.toAmino(import_distribution.DelegatorStartingInfo.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object) {
    return DelegatorStartingInfoRecord.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/DelegatorStartingInfoRecord",
      value: DelegatorStartingInfoRecord.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return DelegatorStartingInfoRecord.decode(message.value);
  },
  toProto(message) {
    return DelegatorStartingInfoRecord.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.DelegatorStartingInfoRecord",
      value: DelegatorStartingInfoRecord.encode(message).finish()
    };
  }
};
function createBaseValidatorSlashEventRecord() {
  return {
    validatorAddress: "",
    height: BigInt(0),
    period: BigInt(0),
    validatorSlashEvent: import_distribution.ValidatorSlashEvent.fromPartial({})
  };
}
const ValidatorSlashEventRecord = {
  typeUrl: "/cosmos.distribution.v1beta1.ValidatorSlashEventRecord",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }
    if (message.height !== BigInt(0)) {
      writer.uint32(16).uint64(message.height);
    }
    if (message.period !== BigInt(0)) {
      writer.uint32(24).uint64(message.period);
    }
    if (message.validatorSlashEvent !== void 0) {
      import_distribution.ValidatorSlashEvent.encode(message.validatorSlashEvent, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseValidatorSlashEventRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddress = reader.string();
          break;
        case 2:
          message.height = reader.uint64();
          break;
        case 3:
          message.period = reader.uint64();
          break;
        case 4:
          message.validatorSlashEvent = import_distribution.ValidatorSlashEvent.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseValidatorSlashEventRecord();
    message.validatorAddress = object.validatorAddress ?? "";
    message.height = object.height !== void 0 && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    message.period = object.period !== void 0 && object.period !== null ? BigInt(object.period.toString()) : BigInt(0);
    message.validatorSlashEvent = object.validatorSlashEvent !== void 0 && object.validatorSlashEvent !== null ? import_distribution.ValidatorSlashEvent.fromPartial(object.validatorSlashEvent) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseValidatorSlashEventRecord();
    if (object.validator_address !== void 0 && object.validator_address !== null) {
      message.validatorAddress = object.validator_address;
    }
    if (object.height !== void 0 && object.height !== null) {
      message.height = BigInt(object.height);
    }
    if (object.period !== void 0 && object.period !== null) {
      message.period = BigInt(object.period);
    }
    if (object.validator_slash_event !== void 0 && object.validator_slash_event !== null) {
      message.validatorSlashEvent = import_distribution.ValidatorSlashEvent.fromAmino(object.validator_slash_event);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.validator_address = message.validatorAddress === "" ? void 0 : message.validatorAddress;
    obj.height = message.height !== BigInt(0) ? message.height?.toString() : void 0;
    obj.period = message.period !== BigInt(0) ? message.period?.toString() : void 0;
    obj.validator_slash_event = message.validatorSlashEvent ? import_distribution.ValidatorSlashEvent.toAmino(message.validatorSlashEvent) : import_distribution.ValidatorSlashEvent.toAmino(import_distribution.ValidatorSlashEvent.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object) {
    return ValidatorSlashEventRecord.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/ValidatorSlashEventRecord",
      value: ValidatorSlashEventRecord.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return ValidatorSlashEventRecord.decode(message.value);
  },
  toProto(message) {
    return ValidatorSlashEventRecord.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.ValidatorSlashEventRecord",
      value: ValidatorSlashEventRecord.encode(message).finish()
    };
  }
};
function createBaseGenesisState() {
  return {
    params: import_distribution.Params.fromPartial({}),
    feePool: import_distribution.FeePool.fromPartial({}),
    delegatorWithdrawInfos: [],
    previousProposer: "",
    outstandingRewards: [],
    validatorAccumulatedCommissions: [],
    validatorHistoricalRewards: [],
    validatorCurrentRewards: [],
    delegatorStartingInfos: [],
    validatorSlashEvents: []
  };
}
const GenesisState = {
  typeUrl: "/cosmos.distribution.v1beta1.GenesisState",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.params !== void 0) {
      import_distribution.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.feePool !== void 0) {
      import_distribution.FeePool.encode(message.feePool, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.delegatorWithdrawInfos) {
      DelegatorWithdrawInfo.encode(v, writer.uint32(26).fork()).ldelim();
    }
    if (message.previousProposer !== "") {
      writer.uint32(34).string(message.previousProposer);
    }
    for (const v of message.outstandingRewards) {
      ValidatorOutstandingRewardsRecord.encode(v, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.validatorAccumulatedCommissions) {
      ValidatorAccumulatedCommissionRecord.encode(v, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.validatorHistoricalRewards) {
      ValidatorHistoricalRewardsRecord.encode(v, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.validatorCurrentRewards) {
      ValidatorCurrentRewardsRecord.encode(v, writer.uint32(66).fork()).ldelim();
    }
    for (const v of message.delegatorStartingInfos) {
      DelegatorStartingInfoRecord.encode(v, writer.uint32(74).fork()).ldelim();
    }
    for (const v of message.validatorSlashEvents) {
      ValidatorSlashEventRecord.encode(v, writer.uint32(82).fork()).ldelim();
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
          message.params = import_distribution.Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.feePool = import_distribution.FeePool.decode(reader, reader.uint32());
          break;
        case 3:
          message.delegatorWithdrawInfos.push(DelegatorWithdrawInfo.decode(reader, reader.uint32()));
          break;
        case 4:
          message.previousProposer = reader.string();
          break;
        case 5:
          message.outstandingRewards.push(ValidatorOutstandingRewardsRecord.decode(reader, reader.uint32()));
          break;
        case 6:
          message.validatorAccumulatedCommissions.push(ValidatorAccumulatedCommissionRecord.decode(reader, reader.uint32()));
          break;
        case 7:
          message.validatorHistoricalRewards.push(ValidatorHistoricalRewardsRecord.decode(reader, reader.uint32()));
          break;
        case 8:
          message.validatorCurrentRewards.push(ValidatorCurrentRewardsRecord.decode(reader, reader.uint32()));
          break;
        case 9:
          message.delegatorStartingInfos.push(DelegatorStartingInfoRecord.decode(reader, reader.uint32()));
          break;
        case 10:
          message.validatorSlashEvents.push(ValidatorSlashEventRecord.decode(reader, reader.uint32()));
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
    message.params = object.params !== void 0 && object.params !== null ? import_distribution.Params.fromPartial(object.params) : void 0;
    message.feePool = object.feePool !== void 0 && object.feePool !== null ? import_distribution.FeePool.fromPartial(object.feePool) : void 0;
    message.delegatorWithdrawInfos = object.delegatorWithdrawInfos?.map((e) => DelegatorWithdrawInfo.fromPartial(e)) || [];
    message.previousProposer = object.previousProposer ?? "";
    message.outstandingRewards = object.outstandingRewards?.map((e) => ValidatorOutstandingRewardsRecord.fromPartial(e)) || [];
    message.validatorAccumulatedCommissions = object.validatorAccumulatedCommissions?.map((e) => ValidatorAccumulatedCommissionRecord.fromPartial(e)) || [];
    message.validatorHistoricalRewards = object.validatorHistoricalRewards?.map((e) => ValidatorHistoricalRewardsRecord.fromPartial(e)) || [];
    message.validatorCurrentRewards = object.validatorCurrentRewards?.map((e) => ValidatorCurrentRewardsRecord.fromPartial(e)) || [];
    message.delegatorStartingInfos = object.delegatorStartingInfos?.map((e) => DelegatorStartingInfoRecord.fromPartial(e)) || [];
    message.validatorSlashEvents = object.validatorSlashEvents?.map((e) => ValidatorSlashEventRecord.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseGenesisState();
    if (object.params !== void 0 && object.params !== null) {
      message.params = import_distribution.Params.fromAmino(object.params);
    }
    if (object.fee_pool !== void 0 && object.fee_pool !== null) {
      message.feePool = import_distribution.FeePool.fromAmino(object.fee_pool);
    }
    message.delegatorWithdrawInfos = object.delegator_withdraw_infos?.map((e) => DelegatorWithdrawInfo.fromAmino(e)) || [];
    if (object.previous_proposer !== void 0 && object.previous_proposer !== null) {
      message.previousProposer = object.previous_proposer;
    }
    message.outstandingRewards = object.outstanding_rewards?.map((e) => ValidatorOutstandingRewardsRecord.fromAmino(e)) || [];
    message.validatorAccumulatedCommissions = object.validator_accumulated_commissions?.map((e) => ValidatorAccumulatedCommissionRecord.fromAmino(e)) || [];
    message.validatorHistoricalRewards = object.validator_historical_rewards?.map((e) => ValidatorHistoricalRewardsRecord.fromAmino(e)) || [];
    message.validatorCurrentRewards = object.validator_current_rewards?.map((e) => ValidatorCurrentRewardsRecord.fromAmino(e)) || [];
    message.delegatorStartingInfos = object.delegator_starting_infos?.map((e) => DelegatorStartingInfoRecord.fromAmino(e)) || [];
    message.validatorSlashEvents = object.validator_slash_events?.map((e) => ValidatorSlashEventRecord.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.params = message.params ? import_distribution.Params.toAmino(message.params) : import_distribution.Params.toAmino(import_distribution.Params.fromPartial({}));
    obj.fee_pool = message.feePool ? import_distribution.FeePool.toAmino(message.feePool) : import_distribution.FeePool.toAmino(import_distribution.FeePool.fromPartial({}));
    if (message.delegatorWithdrawInfos) {
      obj.delegator_withdraw_infos = message.delegatorWithdrawInfos.map((e) => e ? DelegatorWithdrawInfo.toAmino(e) : void 0);
    } else {
      obj.delegator_withdraw_infos = message.delegatorWithdrawInfos;
    }
    obj.previous_proposer = message.previousProposer === "" ? void 0 : message.previousProposer;
    if (message.outstandingRewards) {
      obj.outstanding_rewards = message.outstandingRewards.map((e) => e ? ValidatorOutstandingRewardsRecord.toAmino(e) : void 0);
    } else {
      obj.outstanding_rewards = message.outstandingRewards;
    }
    if (message.validatorAccumulatedCommissions) {
      obj.validator_accumulated_commissions = message.validatorAccumulatedCommissions.map((e) => e ? ValidatorAccumulatedCommissionRecord.toAmino(e) : void 0);
    } else {
      obj.validator_accumulated_commissions = message.validatorAccumulatedCommissions;
    }
    if (message.validatorHistoricalRewards) {
      obj.validator_historical_rewards = message.validatorHistoricalRewards.map((e) => e ? ValidatorHistoricalRewardsRecord.toAmino(e) : void 0);
    } else {
      obj.validator_historical_rewards = message.validatorHistoricalRewards;
    }
    if (message.validatorCurrentRewards) {
      obj.validator_current_rewards = message.validatorCurrentRewards.map((e) => e ? ValidatorCurrentRewardsRecord.toAmino(e) : void 0);
    } else {
      obj.validator_current_rewards = message.validatorCurrentRewards;
    }
    if (message.delegatorStartingInfos) {
      obj.delegator_starting_infos = message.delegatorStartingInfos.map((e) => e ? DelegatorStartingInfoRecord.toAmino(e) : void 0);
    } else {
      obj.delegator_starting_infos = message.delegatorStartingInfos;
    }
    if (message.validatorSlashEvents) {
      obj.validator_slash_events = message.validatorSlashEvents.map((e) => e ? ValidatorSlashEventRecord.toAmino(e) : void 0);
    } else {
      obj.validator_slash_events = message.validatorSlashEvents;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return GenesisState.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/GenesisState",
      value: GenesisState.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return GenesisState.decode(message.value);
  },
  toProto(message) {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
// Removed broken CommonJS export annotation
