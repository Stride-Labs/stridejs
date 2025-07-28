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
var tx_exports = {};
__export(tx_exports, {
  MsgCreatePeriodicVestingAccount: () => MsgCreatePeriodicVestingAccount,
  MsgCreatePeriodicVestingAccountResponse: () => MsgCreatePeriodicVestingAccountResponse,
  MsgCreatePermanentLockedAccount: () => MsgCreatePermanentLockedAccount,
  MsgCreatePermanentLockedAccountResponse: () => MsgCreatePermanentLockedAccountResponse,
  MsgCreateVestingAccount: () => MsgCreateVestingAccount,
  MsgCreateVestingAccountResponse: () => MsgCreateVestingAccountResponse
});
module.exports = __toCommonJS(tx_exports);
var import_coin = require("../../base/v1beta1/coin");
var import_vesting = require("./vesting");
var import_binary = require("../../../binary");
function createBaseMsgCreateVestingAccount() {
  return {
    fromAddress: "",
    toAddress: "",
    amount: [],
    endTime: BigInt(0),
    delayed: false
  };
}
const MsgCreateVestingAccount = {
  typeUrl: "/cosmos.vesting.v1beta1.MsgCreateVestingAccount",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.fromAddress !== "") {
      writer.uint32(10).string(message.fromAddress);
    }
    if (message.toAddress !== "") {
      writer.uint32(18).string(message.toAddress);
    }
    for (const v of message.amount) {
      import_coin.Coin.encode(v, writer.uint32(26).fork()).ldelim();
    }
    if (message.endTime !== BigInt(0)) {
      writer.uint32(32).int64(message.endTime);
    }
    if (message.delayed === true) {
      writer.uint32(40).bool(message.delayed);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateVestingAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fromAddress = reader.string();
          break;
        case 2:
          message.toAddress = reader.string();
          break;
        case 3:
          message.amount.push(import_coin.Coin.decode(reader, reader.uint32()));
          break;
        case 4:
          message.endTime = reader.int64();
          break;
        case 5:
          message.delayed = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgCreateVestingAccount();
    message.fromAddress = object.fromAddress ?? "";
    message.toAddress = object.toAddress ?? "";
    message.amount = object.amount?.map((e) => import_coin.Coin.fromPartial(e)) || [];
    message.endTime = object.endTime !== void 0 && object.endTime !== null ? BigInt(object.endTime.toString()) : BigInt(0);
    message.delayed = object.delayed ?? false;
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgCreateVestingAccount();
    if (object.from_address !== void 0 && object.from_address !== null) {
      message.fromAddress = object.from_address;
    }
    if (object.to_address !== void 0 && object.to_address !== null) {
      message.toAddress = object.to_address;
    }
    message.amount = object.amount?.map((e) => import_coin.Coin.fromAmino(e)) || [];
    if (object.end_time !== void 0 && object.end_time !== null) {
      message.endTime = BigInt(object.end_time);
    }
    if (object.delayed !== void 0 && object.delayed !== null) {
      message.delayed = object.delayed;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.from_address = message.fromAddress === "" ? void 0 : message.fromAddress;
    obj.to_address = message.toAddress === "" ? void 0 : message.toAddress;
    if (message.amount) {
      obj.amount = message.amount.map((e) => e ? import_coin.Coin.toAmino(e) : void 0);
    } else {
      obj.amount = message.amount;
    }
    obj.end_time = message.endTime !== BigInt(0) ? message.endTime?.toString() : void 0;
    obj.delayed = message.delayed === false ? void 0 : message.delayed;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgCreateVestingAccount.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgCreateVestingAccount",
      value: MsgCreateVestingAccount.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgCreateVestingAccount.decode(message.value);
  },
  toProto(message) {
    return MsgCreateVestingAccount.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.vesting.v1beta1.MsgCreateVestingAccount",
      value: MsgCreateVestingAccount.encode(message).finish()
    };
  }
};
function createBaseMsgCreateVestingAccountResponse() {
  return {};
}
const MsgCreateVestingAccountResponse = {
  typeUrl: "/cosmos.vesting.v1beta1.MsgCreateVestingAccountResponse",
  encode(_, writer = import_binary.BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateVestingAccountResponse();
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
    const message = createBaseMsgCreateVestingAccountResponse();
    return message;
  },
  fromAmino(_) {
    const message = createBaseMsgCreateVestingAccountResponse();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return MsgCreateVestingAccountResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgCreateVestingAccountResponse",
      value: MsgCreateVestingAccountResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgCreateVestingAccountResponse.decode(message.value);
  },
  toProto(message) {
    return MsgCreateVestingAccountResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.vesting.v1beta1.MsgCreateVestingAccountResponse",
      value: MsgCreateVestingAccountResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCreatePermanentLockedAccount() {
  return {
    fromAddress: "",
    toAddress: "",
    amount: []
  };
}
const MsgCreatePermanentLockedAccount = {
  typeUrl: "/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccount",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.fromAddress !== "") {
      writer.uint32(10).string(message.fromAddress);
    }
    if (message.toAddress !== "") {
      writer.uint32(18).string(message.toAddress);
    }
    for (const v of message.amount) {
      import_coin.Coin.encode(v, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgCreatePermanentLockedAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fromAddress = reader.string();
          break;
        case 2:
          message.toAddress = reader.string();
          break;
        case 3:
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
    const message = createBaseMsgCreatePermanentLockedAccount();
    message.fromAddress = object.fromAddress ?? "";
    message.toAddress = object.toAddress ?? "";
    message.amount = object.amount?.map((e) => import_coin.Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgCreatePermanentLockedAccount();
    if (object.from_address !== void 0 && object.from_address !== null) {
      message.fromAddress = object.from_address;
    }
    if (object.to_address !== void 0 && object.to_address !== null) {
      message.toAddress = object.to_address;
    }
    message.amount = object.amount?.map((e) => import_coin.Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.from_address = message.fromAddress === "" ? void 0 : message.fromAddress;
    obj.to_address = message.toAddress === "" ? void 0 : message.toAddress;
    if (message.amount) {
      obj.amount = message.amount.map((e) => e ? import_coin.Coin.toAmino(e) : void 0);
    } else {
      obj.amount = message.amount;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return MsgCreatePermanentLockedAccount.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgCreatePermLockedAccount",
      value: MsgCreatePermanentLockedAccount.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgCreatePermanentLockedAccount.decode(message.value);
  },
  toProto(message) {
    return MsgCreatePermanentLockedAccount.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccount",
      value: MsgCreatePermanentLockedAccount.encode(message).finish()
    };
  }
};
function createBaseMsgCreatePermanentLockedAccountResponse() {
  return {};
}
const MsgCreatePermanentLockedAccountResponse = {
  typeUrl: "/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccountResponse",
  encode(_, writer = import_binary.BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgCreatePermanentLockedAccountResponse();
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
    const message = createBaseMsgCreatePermanentLockedAccountResponse();
    return message;
  },
  fromAmino(_) {
    const message = createBaseMsgCreatePermanentLockedAccountResponse();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return MsgCreatePermanentLockedAccountResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgCreatePermanentLockedAccountResponse",
      value: MsgCreatePermanentLockedAccountResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgCreatePermanentLockedAccountResponse.decode(message.value);
  },
  toProto(message) {
    return MsgCreatePermanentLockedAccountResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccountResponse",
      value: MsgCreatePermanentLockedAccountResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCreatePeriodicVestingAccount() {
  return {
    fromAddress: "",
    toAddress: "",
    startTime: BigInt(0),
    vestingPeriods: []
  };
}
const MsgCreatePeriodicVestingAccount = {
  typeUrl: "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.fromAddress !== "") {
      writer.uint32(10).string(message.fromAddress);
    }
    if (message.toAddress !== "") {
      writer.uint32(18).string(message.toAddress);
    }
    if (message.startTime !== BigInt(0)) {
      writer.uint32(24).int64(message.startTime);
    }
    for (const v of message.vestingPeriods) {
      import_vesting.Period.encode(v, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgCreatePeriodicVestingAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fromAddress = reader.string();
          break;
        case 2:
          message.toAddress = reader.string();
          break;
        case 3:
          message.startTime = reader.int64();
          break;
        case 4:
          message.vestingPeriods.push(import_vesting.Period.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgCreatePeriodicVestingAccount();
    message.fromAddress = object.fromAddress ?? "";
    message.toAddress = object.toAddress ?? "";
    message.startTime = object.startTime !== void 0 && object.startTime !== null ? BigInt(object.startTime.toString()) : BigInt(0);
    message.vestingPeriods = object.vestingPeriods?.map((e) => import_vesting.Period.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgCreatePeriodicVestingAccount();
    if (object.from_address !== void 0 && object.from_address !== null) {
      message.fromAddress = object.from_address;
    }
    if (object.to_address !== void 0 && object.to_address !== null) {
      message.toAddress = object.to_address;
    }
    if (object.start_time !== void 0 && object.start_time !== null) {
      message.startTime = BigInt(object.start_time);
    }
    message.vestingPeriods = object.vesting_periods?.map((e) => import_vesting.Period.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.from_address = message.fromAddress === "" ? void 0 : message.fromAddress;
    obj.to_address = message.toAddress === "" ? void 0 : message.toAddress;
    obj.start_time = message.startTime !== BigInt(0) ? message.startTime?.toString() : void 0;
    if (message.vestingPeriods) {
      obj.vesting_periods = message.vestingPeriods.map((e) => e ? import_vesting.Period.toAmino(e) : void 0);
    } else {
      obj.vesting_periods = message.vestingPeriods;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return MsgCreatePeriodicVestingAccount.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgCreatePeriodicVestingAccount",
      value: MsgCreatePeriodicVestingAccount.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgCreatePeriodicVestingAccount.decode(message.value);
  },
  toProto(message) {
    return MsgCreatePeriodicVestingAccount.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount",
      value: MsgCreatePeriodicVestingAccount.encode(message).finish()
    };
  }
};
function createBaseMsgCreatePeriodicVestingAccountResponse() {
  return {};
}
const MsgCreatePeriodicVestingAccountResponse = {
  typeUrl: "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccountResponse",
  encode(_, writer = import_binary.BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgCreatePeriodicVestingAccountResponse();
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
    const message = createBaseMsgCreatePeriodicVestingAccountResponse();
    return message;
  },
  fromAmino(_) {
    const message = createBaseMsgCreatePeriodicVestingAccountResponse();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return MsgCreatePeriodicVestingAccountResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgCreatePeriodicVestingAccountResponse",
      value: MsgCreatePeriodicVestingAccountResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgCreatePeriodicVestingAccountResponse.decode(message.value);
  },
  toProto(message) {
    return MsgCreatePeriodicVestingAccountResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccountResponse",
      value: MsgCreatePeriodicVestingAccountResponse.encode(message).finish()
    };
  }
};
// Removed broken CommonJS export annotation
