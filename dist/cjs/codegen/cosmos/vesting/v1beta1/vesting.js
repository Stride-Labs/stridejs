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
var vesting_exports = {};
__export(vesting_exports, {
  BaseVestingAccount: () => BaseVestingAccount,
  ContinuousVestingAccount: () => ContinuousVestingAccount,
  DelayedVestingAccount: () => DelayedVestingAccount,
  Period: () => Period,
  PeriodicVestingAccount: () => PeriodicVestingAccount,
  PermanentLockedAccount: () => PermanentLockedAccount
});
module.exports = __toCommonJS(vesting_exports);
var import_auth = require("../../auth/v1beta1/auth");
var import_coin = require("../../base/v1beta1/coin");
var import_binary = require("../../../binary");
function createBaseBaseVestingAccount() {
  return {
    baseAccount: void 0,
    originalVesting: [],
    delegatedFree: [],
    delegatedVesting: [],
    endTime: BigInt(0)
  };
}
const BaseVestingAccount = {
  typeUrl: "/cosmos.vesting.v1beta1.BaseVestingAccount",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.baseAccount !== void 0) {
      import_auth.BaseAccount.encode(message.baseAccount, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.originalVesting) {
      import_coin.Coin.encode(v, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.delegatedFree) {
      import_coin.Coin.encode(v, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.delegatedVesting) {
      import_coin.Coin.encode(v, writer.uint32(34).fork()).ldelim();
    }
    if (message.endTime !== BigInt(0)) {
      writer.uint32(40).int64(message.endTime);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseBaseVestingAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.baseAccount = import_auth.BaseAccount.decode(reader, reader.uint32());
          break;
        case 2:
          message.originalVesting.push(import_coin.Coin.decode(reader, reader.uint32()));
          break;
        case 3:
          message.delegatedFree.push(import_coin.Coin.decode(reader, reader.uint32()));
          break;
        case 4:
          message.delegatedVesting.push(import_coin.Coin.decode(reader, reader.uint32()));
          break;
        case 5:
          message.endTime = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseBaseVestingAccount();
    message.baseAccount = object.baseAccount !== void 0 && object.baseAccount !== null ? import_auth.BaseAccount.fromPartial(object.baseAccount) : void 0;
    message.originalVesting = object.originalVesting?.map((e) => import_coin.Coin.fromPartial(e)) || [];
    message.delegatedFree = object.delegatedFree?.map((e) => import_coin.Coin.fromPartial(e)) || [];
    message.delegatedVesting = object.delegatedVesting?.map((e) => import_coin.Coin.fromPartial(e)) || [];
    message.endTime = object.endTime !== void 0 && object.endTime !== null ? BigInt(object.endTime.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object) {
    const message = createBaseBaseVestingAccount();
    if (object.base_account !== void 0 && object.base_account !== null) {
      message.baseAccount = import_auth.BaseAccount.fromAmino(object.base_account);
    }
    message.originalVesting = object.original_vesting?.map((e) => import_coin.Coin.fromAmino(e)) || [];
    message.delegatedFree = object.delegated_free?.map((e) => import_coin.Coin.fromAmino(e)) || [];
    message.delegatedVesting = object.delegated_vesting?.map((e) => import_coin.Coin.fromAmino(e)) || [];
    if (object.end_time !== void 0 && object.end_time !== null) {
      message.endTime = BigInt(object.end_time);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.base_account = message.baseAccount ? import_auth.BaseAccount.toAmino(message.baseAccount) : void 0;
    if (message.originalVesting) {
      obj.original_vesting = message.originalVesting.map((e) => e ? import_coin.Coin.toAmino(e) : void 0);
    } else {
      obj.original_vesting = message.originalVesting;
    }
    if (message.delegatedFree) {
      obj.delegated_free = message.delegatedFree.map((e) => e ? import_coin.Coin.toAmino(e) : void 0);
    } else {
      obj.delegated_free = message.delegatedFree;
    }
    if (message.delegatedVesting) {
      obj.delegated_vesting = message.delegatedVesting.map((e) => e ? import_coin.Coin.toAmino(e) : void 0);
    } else {
      obj.delegated_vesting = message.delegatedVesting;
    }
    obj.end_time = message.endTime !== BigInt(0) ? message.endTime.toString() : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return BaseVestingAccount.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/BaseVestingAccount",
      value: BaseVestingAccount.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return BaseVestingAccount.decode(message.value);
  },
  toProto(message) {
    return BaseVestingAccount.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.vesting.v1beta1.BaseVestingAccount",
      value: BaseVestingAccount.encode(message).finish()
    };
  }
};
function createBaseContinuousVestingAccount() {
  return {
    baseVestingAccount: void 0,
    startTime: BigInt(0)
  };
}
const ContinuousVestingAccount = {
  typeUrl: "/cosmos.vesting.v1beta1.ContinuousVestingAccount",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.baseVestingAccount !== void 0) {
      BaseVestingAccount.encode(message.baseVestingAccount, writer.uint32(10).fork()).ldelim();
    }
    if (message.startTime !== BigInt(0)) {
      writer.uint32(16).int64(message.startTime);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseContinuousVestingAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.baseVestingAccount = BaseVestingAccount.decode(reader, reader.uint32());
          break;
        case 2:
          message.startTime = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseContinuousVestingAccount();
    message.baseVestingAccount = object.baseVestingAccount !== void 0 && object.baseVestingAccount !== null ? BaseVestingAccount.fromPartial(object.baseVestingAccount) : void 0;
    message.startTime = object.startTime !== void 0 && object.startTime !== null ? BigInt(object.startTime.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object) {
    const message = createBaseContinuousVestingAccount();
    if (object.base_vesting_account !== void 0 && object.base_vesting_account !== null) {
      message.baseVestingAccount = BaseVestingAccount.fromAmino(object.base_vesting_account);
    }
    if (object.start_time !== void 0 && object.start_time !== null) {
      message.startTime = BigInt(object.start_time);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.base_vesting_account = message.baseVestingAccount ? BaseVestingAccount.toAmino(message.baseVestingAccount) : void 0;
    obj.start_time = message.startTime !== BigInt(0) ? message.startTime.toString() : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return ContinuousVestingAccount.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/ContinuousVestingAccount",
      value: ContinuousVestingAccount.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return ContinuousVestingAccount.decode(message.value);
  },
  toProto(message) {
    return ContinuousVestingAccount.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.vesting.v1beta1.ContinuousVestingAccount",
      value: ContinuousVestingAccount.encode(message).finish()
    };
  }
};
function createBaseDelayedVestingAccount() {
  return {
    baseVestingAccount: void 0
  };
}
const DelayedVestingAccount = {
  typeUrl: "/cosmos.vesting.v1beta1.DelayedVestingAccount",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.baseVestingAccount !== void 0) {
      BaseVestingAccount.encode(message.baseVestingAccount, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseDelayedVestingAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.baseVestingAccount = BaseVestingAccount.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseDelayedVestingAccount();
    message.baseVestingAccount = object.baseVestingAccount !== void 0 && object.baseVestingAccount !== null ? BaseVestingAccount.fromPartial(object.baseVestingAccount) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseDelayedVestingAccount();
    if (object.base_vesting_account !== void 0 && object.base_vesting_account !== null) {
      message.baseVestingAccount = BaseVestingAccount.fromAmino(object.base_vesting_account);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.base_vesting_account = message.baseVestingAccount ? BaseVestingAccount.toAmino(message.baseVestingAccount) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return DelayedVestingAccount.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/DelayedVestingAccount",
      value: DelayedVestingAccount.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return DelayedVestingAccount.decode(message.value);
  },
  toProto(message) {
    return DelayedVestingAccount.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.vesting.v1beta1.DelayedVestingAccount",
      value: DelayedVestingAccount.encode(message).finish()
    };
  }
};
function createBasePeriod() {
  return {
    length: BigInt(0),
    amount: []
  };
}
const Period = {
  typeUrl: "/cosmos.vesting.v1beta1.Period",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.length !== BigInt(0)) {
      writer.uint32(8).int64(message.length);
    }
    for (const v of message.amount) {
      import_coin.Coin.encode(v, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBasePeriod();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.length = reader.int64();
          break;
        case 2:
          message.amount.push(import_coin.Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBasePeriod();
    message.length = object.length !== void 0 && object.length !== null ? BigInt(object.length.toString()) : BigInt(0);
    message.amount = object.amount?.map((e) => import_coin.Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBasePeriod();
    if (object.length !== void 0 && object.length !== null) {
      message.length = BigInt(object.length);
    }
    message.amount = object.amount?.map((e) => import_coin.Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.length = message.length !== BigInt(0) ? message.length.toString() : void 0;
    if (message.amount) {
      obj.amount = message.amount.map((e) => e ? import_coin.Coin.toAmino(e) : void 0);
    } else {
      obj.amount = message.amount;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return Period.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/Period",
      value: Period.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return Period.decode(message.value);
  },
  toProto(message) {
    return Period.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.vesting.v1beta1.Period",
      value: Period.encode(message).finish()
    };
  }
};
function createBasePeriodicVestingAccount() {
  return {
    baseVestingAccount: void 0,
    startTime: BigInt(0),
    vestingPeriods: []
  };
}
const PeriodicVestingAccount = {
  typeUrl: "/cosmos.vesting.v1beta1.PeriodicVestingAccount",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.baseVestingAccount !== void 0) {
      BaseVestingAccount.encode(message.baseVestingAccount, writer.uint32(10).fork()).ldelim();
    }
    if (message.startTime !== BigInt(0)) {
      writer.uint32(16).int64(message.startTime);
    }
    for (const v of message.vestingPeriods) {
      Period.encode(v, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBasePeriodicVestingAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.baseVestingAccount = BaseVestingAccount.decode(reader, reader.uint32());
          break;
        case 2:
          message.startTime = reader.int64();
          break;
        case 3:
          message.vestingPeriods.push(Period.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBasePeriodicVestingAccount();
    message.baseVestingAccount = object.baseVestingAccount !== void 0 && object.baseVestingAccount !== null ? BaseVestingAccount.fromPartial(object.baseVestingAccount) : void 0;
    message.startTime = object.startTime !== void 0 && object.startTime !== null ? BigInt(object.startTime.toString()) : BigInt(0);
    message.vestingPeriods = object.vestingPeriods?.map((e) => Period.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBasePeriodicVestingAccount();
    if (object.base_vesting_account !== void 0 && object.base_vesting_account !== null) {
      message.baseVestingAccount = BaseVestingAccount.fromAmino(object.base_vesting_account);
    }
    if (object.start_time !== void 0 && object.start_time !== null) {
      message.startTime = BigInt(object.start_time);
    }
    message.vestingPeriods = object.vesting_periods?.map((e) => Period.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.base_vesting_account = message.baseVestingAccount ? BaseVestingAccount.toAmino(message.baseVestingAccount) : void 0;
    obj.start_time = message.startTime !== BigInt(0) ? message.startTime.toString() : void 0;
    if (message.vestingPeriods) {
      obj.vesting_periods = message.vestingPeriods.map((e) => e ? Period.toAmino(e) : void 0);
    } else {
      obj.vesting_periods = message.vestingPeriods;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return PeriodicVestingAccount.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/PeriodicVestingAccount",
      value: PeriodicVestingAccount.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return PeriodicVestingAccount.decode(message.value);
  },
  toProto(message) {
    return PeriodicVestingAccount.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.vesting.v1beta1.PeriodicVestingAccount",
      value: PeriodicVestingAccount.encode(message).finish()
    };
  }
};
function createBasePermanentLockedAccount() {
  return {
    baseVestingAccount: void 0
  };
}
const PermanentLockedAccount = {
  typeUrl: "/cosmos.vesting.v1beta1.PermanentLockedAccount",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.baseVestingAccount !== void 0) {
      BaseVestingAccount.encode(message.baseVestingAccount, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBasePermanentLockedAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.baseVestingAccount = BaseVestingAccount.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBasePermanentLockedAccount();
    message.baseVestingAccount = object.baseVestingAccount !== void 0 && object.baseVestingAccount !== null ? BaseVestingAccount.fromPartial(object.baseVestingAccount) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBasePermanentLockedAccount();
    if (object.base_vesting_account !== void 0 && object.base_vesting_account !== null) {
      message.baseVestingAccount = BaseVestingAccount.fromAmino(object.base_vesting_account);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.base_vesting_account = message.baseVestingAccount ? BaseVestingAccount.toAmino(message.baseVestingAccount) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return PermanentLockedAccount.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/PermanentLockedAccount",
      value: PermanentLockedAccount.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return PermanentLockedAccount.decode(message.value);
  },
  toProto(message) {
    return PermanentLockedAccount.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.vesting.v1beta1.PermanentLockedAccount",
      value: PermanentLockedAccount.encode(message).finish()
    };
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  BaseVestingAccount,
  ContinuousVestingAccount,
  DelayedVestingAccount,
  Period,
  PeriodicVestingAccount,
  PermanentLockedAccount
});
