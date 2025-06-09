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
  Period: () => Period,
  StridePeriodicVestingAccount: () => StridePeriodicVestingAccount
});
module.exports = __toCommonJS(vesting_exports);
var import_auth = require("../../cosmos/auth/v1beta1/auth");
var import_coin = require("../../cosmos/base/v1beta1/coin");
var import_binary = require("../../binary");
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
  typeUrl: "/stride.vesting.BaseVestingAccount",
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
    obj.end_time = message.endTime !== BigInt(0) ? message.endTime?.toString() : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return BaseVestingAccount.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return BaseVestingAccount.decode(message.value);
  },
  toProto(message) {
    return BaseVestingAccount.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.vesting.BaseVestingAccount",
      value: BaseVestingAccount.encode(message).finish()
    };
  }
};
function createBasePeriod() {
  return {
    startTime: BigInt(0),
    length: BigInt(0),
    amount: [],
    actionType: 0
  };
}
const Period = {
  typeUrl: "/stride.vesting.Period",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.startTime !== BigInt(0)) {
      writer.uint32(8).int64(message.startTime);
    }
    if (message.length !== BigInt(0)) {
      writer.uint32(16).int64(message.length);
    }
    for (const v of message.amount) {
      import_coin.Coin.encode(v, writer.uint32(26).fork()).ldelim();
    }
    if (message.actionType !== 0) {
      writer.uint32(32).int32(message.actionType);
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
          message.startTime = reader.int64();
          break;
        case 2:
          message.length = reader.int64();
          break;
        case 3:
          message.amount.push(import_coin.Coin.decode(reader, reader.uint32()));
          break;
        case 4:
          message.actionType = reader.int32();
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
    message.startTime = object.startTime !== void 0 && object.startTime !== null ? BigInt(object.startTime.toString()) : BigInt(0);
    message.length = object.length !== void 0 && object.length !== null ? BigInt(object.length.toString()) : BigInt(0);
    message.amount = object.amount?.map((e) => import_coin.Coin.fromPartial(e)) || [];
    message.actionType = object.actionType ?? 0;
    return message;
  },
  fromAmino(object) {
    const message = createBasePeriod();
    if (object.start_time !== void 0 && object.start_time !== null) {
      message.startTime = BigInt(object.start_time);
    }
    if (object.length !== void 0 && object.length !== null) {
      message.length = BigInt(object.length);
    }
    message.amount = object.amount?.map((e) => import_coin.Coin.fromAmino(e)) || [];
    if (object.action_type !== void 0 && object.action_type !== null) {
      message.actionType = object.action_type;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.start_time = message.startTime !== BigInt(0) ? message.startTime?.toString() : void 0;
    obj.length = message.length !== BigInt(0) ? message.length?.toString() : void 0;
    if (message.amount) {
      obj.amount = message.amount.map((e) => e ? import_coin.Coin.toAmino(e) : void 0);
    } else {
      obj.amount = message.amount;
    }
    obj.action_type = message.actionType === 0 ? void 0 : message.actionType;
    return obj;
  },
  fromAminoMsg(object) {
    return Period.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return Period.decode(message.value);
  },
  toProto(message) {
    return Period.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.vesting.Period",
      value: Period.encode(message).finish()
    };
  }
};
function createBaseStridePeriodicVestingAccount() {
  return {
    baseVestingAccount: void 0,
    vestingPeriods: []
  };
}
const StridePeriodicVestingAccount = {
  typeUrl: "/stride.vesting.StridePeriodicVestingAccount",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.baseVestingAccount !== void 0) {
      BaseVestingAccount.encode(message.baseVestingAccount, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.vestingPeriods) {
      Period.encode(v, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseStridePeriodicVestingAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.baseVestingAccount = BaseVestingAccount.decode(reader, reader.uint32());
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
    const message = createBaseStridePeriodicVestingAccount();
    message.baseVestingAccount = object.baseVestingAccount !== void 0 && object.baseVestingAccount !== null ? BaseVestingAccount.fromPartial(object.baseVestingAccount) : void 0;
    message.vestingPeriods = object.vestingPeriods?.map((e) => Period.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseStridePeriodicVestingAccount();
    if (object.base_vesting_account !== void 0 && object.base_vesting_account !== null) {
      message.baseVestingAccount = BaseVestingAccount.fromAmino(object.base_vesting_account);
    }
    message.vestingPeriods = object.vesting_periods?.map((e) => Period.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.base_vesting_account = message.baseVestingAccount ? BaseVestingAccount.toAmino(message.baseVestingAccount) : void 0;
    if (message.vestingPeriods) {
      obj.vesting_periods = message.vestingPeriods.map((e) => e ? Period.toAmino(e) : void 0);
    } else {
      obj.vesting_periods = message.vestingPeriods;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return StridePeriodicVestingAccount.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/StridePeriodicVestingAccount",
      value: StridePeriodicVestingAccount.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return StridePeriodicVestingAccount.decode(message.value);
  },
  toProto(message) {
    return StridePeriodicVestingAccount.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.vesting.StridePeriodicVestingAccount",
      value: StridePeriodicVestingAccount.encode(message).finish()
    };
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  BaseVestingAccount,
  Period,
  StridePeriodicVestingAccount
});
