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
  Cosmos_cryptoPubKey_FromAmino: () => Cosmos_cryptoPubKey_FromAmino,
  Cosmos_cryptoPubKey_InterfaceDecoder: () => Cosmos_cryptoPubKey_InterfaceDecoder,
  Cosmos_cryptoPubKey_ToAmino: () => Cosmos_cryptoPubKey_ToAmino,
  MsgBeginRedelegate: () => MsgBeginRedelegate,
  MsgBeginRedelegateResponse: () => MsgBeginRedelegateResponse,
  MsgCancelUnbondingDelegation: () => MsgCancelUnbondingDelegation,
  MsgCancelUnbondingDelegationResponse: () => MsgCancelUnbondingDelegationResponse,
  MsgCreateValidator: () => MsgCreateValidator,
  MsgCreateValidatorResponse: () => MsgCreateValidatorResponse,
  MsgDelegate: () => MsgDelegate,
  MsgDelegateResponse: () => MsgDelegateResponse,
  MsgDisableTokenizeShares: () => MsgDisableTokenizeShares,
  MsgDisableTokenizeSharesResponse: () => MsgDisableTokenizeSharesResponse,
  MsgEditValidator: () => MsgEditValidator,
  MsgEditValidatorResponse: () => MsgEditValidatorResponse,
  MsgEnableTokenizeShares: () => MsgEnableTokenizeShares,
  MsgEnableTokenizeSharesResponse: () => MsgEnableTokenizeSharesResponse,
  MsgRedeemTokensForShares: () => MsgRedeemTokensForShares,
  MsgRedeemTokensForSharesResponse: () => MsgRedeemTokensForSharesResponse,
  MsgTokenizeShares: () => MsgTokenizeShares,
  MsgTokenizeSharesResponse: () => MsgTokenizeSharesResponse,
  MsgTransferTokenizeShareRecord: () => MsgTransferTokenizeShareRecord,
  MsgTransferTokenizeShareRecordResponse: () => MsgTransferTokenizeShareRecordResponse,
  MsgUnbondValidator: () => MsgUnbondValidator,
  MsgUnbondValidatorResponse: () => MsgUnbondValidatorResponse,
  MsgUndelegate: () => MsgUndelegate,
  MsgUndelegateResponse: () => MsgUndelegateResponse,
  MsgValidatorBond: () => MsgValidatorBond,
  MsgValidatorBondResponse: () => MsgValidatorBondResponse
});
module.exports = __toCommonJS(tx_exports);
var import_staking = require("./staking");
var import_any = require("../../../google/protobuf/any");
var import_coin = require("../../base/v1beta1/coin");
var import_timestamp = require("../../../google/protobuf/timestamp");
var import_binary = require("../../../binary");
var import_proto_signing = require("@cosmjs/proto-signing");
var import_math = require("@cosmjs/math");
var import_helpers = require("../../../helpers");
function createBaseMsgCreateValidator() {
  return {
    description: import_staking.Description.fromPartial({}),
    commission: import_staking.CommissionRates.fromPartial({}),
    minSelfDelegation: "",
    delegatorAddress: "",
    validatorAddress: "",
    pubkey: void 0,
    value: import_coin.Coin.fromPartial({})
  };
}
const MsgCreateValidator = {
  typeUrl: "/cosmos.staking.v1beta1.MsgCreateValidator",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.description !== void 0) {
      import_staking.Description.encode(message.description, writer.uint32(10).fork()).ldelim();
    }
    if (message.commission !== void 0) {
      import_staking.CommissionRates.encode(message.commission, writer.uint32(18).fork()).ldelim();
    }
    if (message.minSelfDelegation !== "") {
      writer.uint32(26).string(message.minSelfDelegation);
    }
    if (message.delegatorAddress !== "") {
      writer.uint32(34).string(message.delegatorAddress);
    }
    if (message.validatorAddress !== "") {
      writer.uint32(42).string(message.validatorAddress);
    }
    if (message.pubkey !== void 0) {
      import_any.Any.encode(message.pubkey, writer.uint32(50).fork()).ldelim();
    }
    if (message.value !== void 0) {
      import_coin.Coin.encode(message.value, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateValidator();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.description = import_staking.Description.decode(reader, reader.uint32());
          break;
        case 2:
          message.commission = import_staking.CommissionRates.decode(reader, reader.uint32());
          break;
        case 3:
          message.minSelfDelegation = reader.string();
          break;
        case 4:
          message.delegatorAddress = reader.string();
          break;
        case 5:
          message.validatorAddress = reader.string();
          break;
        case 6:
          message.pubkey = Cosmos_cryptoPubKey_InterfaceDecoder(reader);
          break;
        case 7:
          message.value = import_coin.Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgCreateValidator();
    message.description = object.description !== void 0 && object.description !== null ? import_staking.Description.fromPartial(object.description) : void 0;
    message.commission = object.commission !== void 0 && object.commission !== null ? import_staking.CommissionRates.fromPartial(object.commission) : void 0;
    message.minSelfDelegation = object.minSelfDelegation ?? "";
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.validatorAddress = object.validatorAddress ?? "";
    message.pubkey = object.pubkey !== void 0 && object.pubkey !== null ? import_any.Any.fromPartial(object.pubkey) : void 0;
    message.value = object.value !== void 0 && object.value !== null ? import_coin.Coin.fromPartial(object.value) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgCreateValidator();
    if (object.description !== void 0 && object.description !== null) {
      message.description = import_staking.Description.fromAmino(object.description);
    }
    if (object.commission !== void 0 && object.commission !== null) {
      message.commission = import_staking.CommissionRates.fromAmino(object.commission);
    }
    if (object.min_self_delegation !== void 0 && object.min_self_delegation !== null) {
      message.minSelfDelegation = object.min_self_delegation;
    }
    if (object.delegator_address !== void 0 && object.delegator_address !== null) {
      message.delegatorAddress = object.delegator_address;
    }
    if (object.validator_address !== void 0 && object.validator_address !== null) {
      message.validatorAddress = object.validator_address;
    }
    if (object.pubkey !== void 0 && object.pubkey !== null) {
      message.pubkey = (0, import_proto_signing.encodePubkey)(object.pubkey);
    }
    if (object.value !== void 0 && object.value !== null) {
      message.value = import_coin.Coin.fromAmino(object.value);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.description = message.description ? import_staking.Description.toAmino(message.description) : void 0;
    obj.commission = message.commission ? import_staking.CommissionRates.toAmino(message.commission) : void 0;
    obj.min_self_delegation = message.minSelfDelegation === "" ? void 0 : message.minSelfDelegation;
    obj.delegator_address = message.delegatorAddress === "" ? void 0 : message.delegatorAddress;
    obj.validator_address = message.validatorAddress === "" ? void 0 : message.validatorAddress;
    obj.pubkey = message.pubkey ? (0, import_proto_signing.decodePubkey)(message.pubkey) : void 0;
    obj.value = message.value ? import_coin.Coin.toAmino(message.value) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgCreateValidator.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgCreateValidator",
      value: MsgCreateValidator.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgCreateValidator.decode(message.value);
  },
  toProto(message) {
    return MsgCreateValidator.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.staking.v1beta1.MsgCreateValidator",
      value: MsgCreateValidator.encode(message).finish()
    };
  }
};
function createBaseMsgCreateValidatorResponse() {
  return {};
}
const MsgCreateValidatorResponse = {
  typeUrl: "/cosmos.staking.v1beta1.MsgCreateValidatorResponse",
  encode(_, writer = import_binary.BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateValidatorResponse();
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
    const message = createBaseMsgCreateValidatorResponse();
    return message;
  },
  fromAmino(_) {
    const message = createBaseMsgCreateValidatorResponse();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return MsgCreateValidatorResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgCreateValidatorResponse",
      value: MsgCreateValidatorResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgCreateValidatorResponse.decode(message.value);
  },
  toProto(message) {
    return MsgCreateValidatorResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.staking.v1beta1.MsgCreateValidatorResponse",
      value: MsgCreateValidatorResponse.encode(message).finish()
    };
  }
};
function createBaseMsgEditValidator() {
  return {
    description: import_staking.Description.fromPartial({}),
    validatorAddress: "",
    commissionRate: "",
    minSelfDelegation: ""
  };
}
const MsgEditValidator = {
  typeUrl: "/cosmos.staking.v1beta1.MsgEditValidator",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.description !== void 0) {
      import_staking.Description.encode(message.description, writer.uint32(10).fork()).ldelim();
    }
    if (message.validatorAddress !== "") {
      writer.uint32(18).string(message.validatorAddress);
    }
    if (message.commissionRate !== "") {
      writer.uint32(26).string(import_math.Decimal.fromUserInput(message.commissionRate, 18).atomics);
    }
    if (message.minSelfDelegation !== "") {
      writer.uint32(34).string(message.minSelfDelegation);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgEditValidator();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.description = import_staking.Description.decode(reader, reader.uint32());
          break;
        case 2:
          message.validatorAddress = reader.string();
          break;
        case 3:
          message.commissionRate = import_math.Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 4:
          message.minSelfDelegation = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgEditValidator();
    message.description = object.description !== void 0 && object.description !== null ? import_staking.Description.fromPartial(object.description) : void 0;
    message.validatorAddress = object.validatorAddress ?? "";
    message.commissionRate = object.commissionRate ?? "";
    message.minSelfDelegation = object.minSelfDelegation ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgEditValidator();
    if (object.description !== void 0 && object.description !== null) {
      message.description = import_staking.Description.fromAmino(object.description);
    }
    if (object.validator_address !== void 0 && object.validator_address !== null) {
      message.validatorAddress = object.validator_address;
    }
    if (object.commission_rate !== void 0 && object.commission_rate !== null) {
      message.commissionRate = object.commission_rate;
    }
    if (object.min_self_delegation !== void 0 && object.min_self_delegation !== null) {
      message.minSelfDelegation = object.min_self_delegation;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.description = message.description ? import_staking.Description.toAmino(message.description) : void 0;
    obj.validator_address = message.validatorAddress === "" ? void 0 : message.validatorAddress;
    obj.commission_rate = message.commissionRate === "" ? void 0 : message.commissionRate;
    obj.min_self_delegation = message.minSelfDelegation === "" ? void 0 : message.minSelfDelegation;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgEditValidator.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgEditValidator",
      value: MsgEditValidator.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgEditValidator.decode(message.value);
  },
  toProto(message) {
    return MsgEditValidator.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.staking.v1beta1.MsgEditValidator",
      value: MsgEditValidator.encode(message).finish()
    };
  }
};
function createBaseMsgEditValidatorResponse() {
  return {};
}
const MsgEditValidatorResponse = {
  typeUrl: "/cosmos.staking.v1beta1.MsgEditValidatorResponse",
  encode(_, writer = import_binary.BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgEditValidatorResponse();
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
    const message = createBaseMsgEditValidatorResponse();
    return message;
  },
  fromAmino(_) {
    const message = createBaseMsgEditValidatorResponse();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return MsgEditValidatorResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgEditValidatorResponse",
      value: MsgEditValidatorResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgEditValidatorResponse.decode(message.value);
  },
  toProto(message) {
    return MsgEditValidatorResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.staking.v1beta1.MsgEditValidatorResponse",
      value: MsgEditValidatorResponse.encode(message).finish()
    };
  }
};
function createBaseMsgDelegate() {
  return {
    delegatorAddress: "",
    validatorAddress: "",
    amount: import_coin.Coin.fromPartial({})
  };
}
const MsgDelegate = {
  typeUrl: "/cosmos.staking.v1beta1.MsgDelegate",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.validatorAddress !== "") {
      writer.uint32(18).string(message.validatorAddress);
    }
    if (message.amount !== void 0) {
      import_coin.Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgDelegate();
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
          message.amount = import_coin.Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgDelegate();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.validatorAddress = object.validatorAddress ?? "";
    message.amount = object.amount !== void 0 && object.amount !== null ? import_coin.Coin.fromPartial(object.amount) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgDelegate();
    if (object.delegator_address !== void 0 && object.delegator_address !== null) {
      message.delegatorAddress = object.delegator_address;
    }
    if (object.validator_address !== void 0 && object.validator_address !== null) {
      message.validatorAddress = object.validator_address;
    }
    if (object.amount !== void 0 && object.amount !== null) {
      message.amount = import_coin.Coin.fromAmino(object.amount);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.delegator_address = message.delegatorAddress === "" ? void 0 : message.delegatorAddress;
    obj.validator_address = message.validatorAddress === "" ? void 0 : message.validatorAddress;
    obj.amount = message.amount ? import_coin.Coin.toAmino(message.amount) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgDelegate.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgDelegate",
      value: MsgDelegate.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgDelegate.decode(message.value);
  },
  toProto(message) {
    return MsgDelegate.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.staking.v1beta1.MsgDelegate",
      value: MsgDelegate.encode(message).finish()
    };
  }
};
function createBaseMsgDelegateResponse() {
  return {};
}
const MsgDelegateResponse = {
  typeUrl: "/cosmos.staking.v1beta1.MsgDelegateResponse",
  encode(_, writer = import_binary.BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgDelegateResponse();
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
    const message = createBaseMsgDelegateResponse();
    return message;
  },
  fromAmino(_) {
    const message = createBaseMsgDelegateResponse();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return MsgDelegateResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgDelegateResponse",
      value: MsgDelegateResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgDelegateResponse.decode(message.value);
  },
  toProto(message) {
    return MsgDelegateResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.staking.v1beta1.MsgDelegateResponse",
      value: MsgDelegateResponse.encode(message).finish()
    };
  }
};
function createBaseMsgBeginRedelegate() {
  return {
    delegatorAddress: "",
    validatorSrcAddress: "",
    validatorDstAddress: "",
    amount: import_coin.Coin.fromPartial({})
  };
}
const MsgBeginRedelegate = {
  typeUrl: "/cosmos.staking.v1beta1.MsgBeginRedelegate",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.validatorSrcAddress !== "") {
      writer.uint32(18).string(message.validatorSrcAddress);
    }
    if (message.validatorDstAddress !== "") {
      writer.uint32(26).string(message.validatorDstAddress);
    }
    if (message.amount !== void 0) {
      import_coin.Coin.encode(message.amount, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgBeginRedelegate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        case 2:
          message.validatorSrcAddress = reader.string();
          break;
        case 3:
          message.validatorDstAddress = reader.string();
          break;
        case 4:
          message.amount = import_coin.Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgBeginRedelegate();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.validatorSrcAddress = object.validatorSrcAddress ?? "";
    message.validatorDstAddress = object.validatorDstAddress ?? "";
    message.amount = object.amount !== void 0 && object.amount !== null ? import_coin.Coin.fromPartial(object.amount) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgBeginRedelegate();
    if (object.delegator_address !== void 0 && object.delegator_address !== null) {
      message.delegatorAddress = object.delegator_address;
    }
    if (object.validator_src_address !== void 0 && object.validator_src_address !== null) {
      message.validatorSrcAddress = object.validator_src_address;
    }
    if (object.validator_dst_address !== void 0 && object.validator_dst_address !== null) {
      message.validatorDstAddress = object.validator_dst_address;
    }
    if (object.amount !== void 0 && object.amount !== null) {
      message.amount = import_coin.Coin.fromAmino(object.amount);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.delegator_address = message.delegatorAddress === "" ? void 0 : message.delegatorAddress;
    obj.validator_src_address = message.validatorSrcAddress === "" ? void 0 : message.validatorSrcAddress;
    obj.validator_dst_address = message.validatorDstAddress === "" ? void 0 : message.validatorDstAddress;
    obj.amount = message.amount ? import_coin.Coin.toAmino(message.amount) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgBeginRedelegate.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgBeginRedelegate",
      value: MsgBeginRedelegate.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgBeginRedelegate.decode(message.value);
  },
  toProto(message) {
    return MsgBeginRedelegate.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.staking.v1beta1.MsgBeginRedelegate",
      value: MsgBeginRedelegate.encode(message).finish()
    };
  }
};
function createBaseMsgBeginRedelegateResponse() {
  return {
    completionTime: /* @__PURE__ */ new Date()
  };
}
const MsgBeginRedelegateResponse = {
  typeUrl: "/cosmos.staking.v1beta1.MsgBeginRedelegateResponse",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.completionTime !== void 0) {
      import_timestamp.Timestamp.encode((0, import_helpers.toTimestamp)(message.completionTime), writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgBeginRedelegateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.completionTime = (0, import_helpers.fromTimestamp)(import_timestamp.Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgBeginRedelegateResponse();
    message.completionTime = object.completionTime ?? void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgBeginRedelegateResponse();
    if (object.completion_time !== void 0 && object.completion_time !== null) {
      message.completionTime = (0, import_helpers.fromTimestamp)(import_timestamp.Timestamp.fromAmino(object.completion_time));
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.completion_time = message.completionTime ? import_timestamp.Timestamp.toAmino((0, import_helpers.toTimestamp)(message.completionTime)) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgBeginRedelegateResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgBeginRedelegateResponse",
      value: MsgBeginRedelegateResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgBeginRedelegateResponse.decode(message.value);
  },
  toProto(message) {
    return MsgBeginRedelegateResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.staking.v1beta1.MsgBeginRedelegateResponse",
      value: MsgBeginRedelegateResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUndelegate() {
  return {
    delegatorAddress: "",
    validatorAddress: "",
    amount: import_coin.Coin.fromPartial({})
  };
}
const MsgUndelegate = {
  typeUrl: "/cosmos.staking.v1beta1.MsgUndelegate",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.validatorAddress !== "") {
      writer.uint32(18).string(message.validatorAddress);
    }
    if (message.amount !== void 0) {
      import_coin.Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgUndelegate();
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
          message.amount = import_coin.Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgUndelegate();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.validatorAddress = object.validatorAddress ?? "";
    message.amount = object.amount !== void 0 && object.amount !== null ? import_coin.Coin.fromPartial(object.amount) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgUndelegate();
    if (object.delegator_address !== void 0 && object.delegator_address !== null) {
      message.delegatorAddress = object.delegator_address;
    }
    if (object.validator_address !== void 0 && object.validator_address !== null) {
      message.validatorAddress = object.validator_address;
    }
    if (object.amount !== void 0 && object.amount !== null) {
      message.amount = import_coin.Coin.fromAmino(object.amount);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.delegator_address = message.delegatorAddress === "" ? void 0 : message.delegatorAddress;
    obj.validator_address = message.validatorAddress === "" ? void 0 : message.validatorAddress;
    obj.amount = message.amount ? import_coin.Coin.toAmino(message.amount) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgUndelegate.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgUndelegate",
      value: MsgUndelegate.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgUndelegate.decode(message.value);
  },
  toProto(message) {
    return MsgUndelegate.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.staking.v1beta1.MsgUndelegate",
      value: MsgUndelegate.encode(message).finish()
    };
  }
};
function createBaseMsgUndelegateResponse() {
  return {
    completionTime: /* @__PURE__ */ new Date()
  };
}
const MsgUndelegateResponse = {
  typeUrl: "/cosmos.staking.v1beta1.MsgUndelegateResponse",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.completionTime !== void 0) {
      import_timestamp.Timestamp.encode((0, import_helpers.toTimestamp)(message.completionTime), writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgUndelegateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.completionTime = (0, import_helpers.fromTimestamp)(import_timestamp.Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgUndelegateResponse();
    message.completionTime = object.completionTime ?? void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgUndelegateResponse();
    if (object.completion_time !== void 0 && object.completion_time !== null) {
      message.completionTime = (0, import_helpers.fromTimestamp)(import_timestamp.Timestamp.fromAmino(object.completion_time));
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.completion_time = message.completionTime ? import_timestamp.Timestamp.toAmino((0, import_helpers.toTimestamp)(message.completionTime)) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgUndelegateResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgUndelegateResponse",
      value: MsgUndelegateResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgUndelegateResponse.decode(message.value);
  },
  toProto(message) {
    return MsgUndelegateResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.staking.v1beta1.MsgUndelegateResponse",
      value: MsgUndelegateResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUnbondValidator() {
  return {
    validatorAddress: ""
  };
}
const MsgUnbondValidator = {
  typeUrl: "/cosmos.staking.v1beta1.MsgUnbondValidator",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgUnbondValidator();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgUnbondValidator();
    message.validatorAddress = object.validatorAddress ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgUnbondValidator();
    if (object.validator_address !== void 0 && object.validator_address !== null) {
      message.validatorAddress = object.validator_address;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.validator_address = message.validatorAddress === "" ? void 0 : message.validatorAddress;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgUnbondValidator.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgUnbondValidator",
      value: MsgUnbondValidator.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgUnbondValidator.decode(message.value);
  },
  toProto(message) {
    return MsgUnbondValidator.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.staking.v1beta1.MsgUnbondValidator",
      value: MsgUnbondValidator.encode(message).finish()
    };
  }
};
function createBaseMsgUnbondValidatorResponse() {
  return {};
}
const MsgUnbondValidatorResponse = {
  typeUrl: "/cosmos.staking.v1beta1.MsgUnbondValidatorResponse",
  encode(_, writer = import_binary.BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgUnbondValidatorResponse();
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
    const message = createBaseMsgUnbondValidatorResponse();
    return message;
  },
  fromAmino(_) {
    const message = createBaseMsgUnbondValidatorResponse();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return MsgUnbondValidatorResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgUnbondValidatorResponse",
      value: MsgUnbondValidatorResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgUnbondValidatorResponse.decode(message.value);
  },
  toProto(message) {
    return MsgUnbondValidatorResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.staking.v1beta1.MsgUnbondValidatorResponse",
      value: MsgUnbondValidatorResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCancelUnbondingDelegation() {
  return {
    delegatorAddress: "",
    validatorAddress: "",
    amount: import_coin.Coin.fromPartial({}),
    creationHeight: BigInt(0)
  };
}
const MsgCancelUnbondingDelegation = {
  typeUrl: "/cosmos.staking.v1beta1.MsgCancelUnbondingDelegation",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.validatorAddress !== "") {
      writer.uint32(18).string(message.validatorAddress);
    }
    if (message.amount !== void 0) {
      import_coin.Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }
    if (message.creationHeight !== BigInt(0)) {
      writer.uint32(32).int64(message.creationHeight);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelUnbondingDelegation();
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
          message.amount = import_coin.Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.creationHeight = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgCancelUnbondingDelegation();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.validatorAddress = object.validatorAddress ?? "";
    message.amount = object.amount !== void 0 && object.amount !== null ? import_coin.Coin.fromPartial(object.amount) : void 0;
    message.creationHeight = object.creationHeight !== void 0 && object.creationHeight !== null ? BigInt(object.creationHeight.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgCancelUnbondingDelegation();
    if (object.delegator_address !== void 0 && object.delegator_address !== null) {
      message.delegatorAddress = object.delegator_address;
    }
    if (object.validator_address !== void 0 && object.validator_address !== null) {
      message.validatorAddress = object.validator_address;
    }
    if (object.amount !== void 0 && object.amount !== null) {
      message.amount = import_coin.Coin.fromAmino(object.amount);
    }
    if (object.creation_height !== void 0 && object.creation_height !== null) {
      message.creationHeight = BigInt(object.creation_height);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.delegator_address = message.delegatorAddress === "" ? void 0 : message.delegatorAddress;
    obj.validator_address = message.validatorAddress === "" ? void 0 : message.validatorAddress;
    obj.amount = message.amount ? import_coin.Coin.toAmino(message.amount) : void 0;
    obj.creation_height = message.creationHeight !== BigInt(0) ? message.creationHeight.toString() : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgCancelUnbondingDelegation.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgCancelUnbondingDelegation",
      value: MsgCancelUnbondingDelegation.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgCancelUnbondingDelegation.decode(message.value);
  },
  toProto(message) {
    return MsgCancelUnbondingDelegation.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.staking.v1beta1.MsgCancelUnbondingDelegation",
      value: MsgCancelUnbondingDelegation.encode(message).finish()
    };
  }
};
function createBaseMsgCancelUnbondingDelegationResponse() {
  return {};
}
const MsgCancelUnbondingDelegationResponse = {
  typeUrl: "/cosmos.staking.v1beta1.MsgCancelUnbondingDelegationResponse",
  encode(_, writer = import_binary.BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelUnbondingDelegationResponse();
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
    const message = createBaseMsgCancelUnbondingDelegationResponse();
    return message;
  },
  fromAmino(_) {
    const message = createBaseMsgCancelUnbondingDelegationResponse();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return MsgCancelUnbondingDelegationResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgCancelUnbondingDelegationResponse",
      value: MsgCancelUnbondingDelegationResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgCancelUnbondingDelegationResponse.decode(message.value);
  },
  toProto(message) {
    return MsgCancelUnbondingDelegationResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.staking.v1beta1.MsgCancelUnbondingDelegationResponse",
      value: MsgCancelUnbondingDelegationResponse.encode(message).finish()
    };
  }
};
function createBaseMsgTokenizeShares() {
  return {
    delegatorAddress: "",
    validatorAddress: "",
    amount: import_coin.Coin.fromPartial({}),
    tokenizedShareOwner: ""
  };
}
const MsgTokenizeShares = {
  typeUrl: "/cosmos.staking.v1beta1.MsgTokenizeShares",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.validatorAddress !== "") {
      writer.uint32(18).string(message.validatorAddress);
    }
    if (message.amount !== void 0) {
      import_coin.Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }
    if (message.tokenizedShareOwner !== "") {
      writer.uint32(34).string(message.tokenizedShareOwner);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgTokenizeShares();
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
          message.amount = import_coin.Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.tokenizedShareOwner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgTokenizeShares();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.validatorAddress = object.validatorAddress ?? "";
    message.amount = object.amount !== void 0 && object.amount !== null ? import_coin.Coin.fromPartial(object.amount) : void 0;
    message.tokenizedShareOwner = object.tokenizedShareOwner ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgTokenizeShares();
    if (object.delegator_address !== void 0 && object.delegator_address !== null) {
      message.delegatorAddress = object.delegator_address;
    }
    if (object.validator_address !== void 0 && object.validator_address !== null) {
      message.validatorAddress = object.validator_address;
    }
    if (object.amount !== void 0 && object.amount !== null) {
      message.amount = import_coin.Coin.fromAmino(object.amount);
    }
    if (object.tokenized_share_owner !== void 0 && object.tokenized_share_owner !== null) {
      message.tokenizedShareOwner = object.tokenized_share_owner;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.delegator_address = message.delegatorAddress === "" ? void 0 : message.delegatorAddress;
    obj.validator_address = message.validatorAddress === "" ? void 0 : message.validatorAddress;
    obj.amount = message.amount ? import_coin.Coin.toAmino(message.amount) : void 0;
    obj.tokenized_share_owner = message.tokenizedShareOwner === "" ? void 0 : message.tokenizedShareOwner;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgTokenizeShares.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgTokenizeShares",
      value: MsgTokenizeShares.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgTokenizeShares.decode(message.value);
  },
  toProto(message) {
    return MsgTokenizeShares.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.staking.v1beta1.MsgTokenizeShares",
      value: MsgTokenizeShares.encode(message).finish()
    };
  }
};
function createBaseMsgTokenizeSharesResponse() {
  return {
    amount: import_coin.Coin.fromPartial({})
  };
}
const MsgTokenizeSharesResponse = {
  typeUrl: "/cosmos.staking.v1beta1.MsgTokenizeSharesResponse",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.amount !== void 0) {
      import_coin.Coin.encode(message.amount, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgTokenizeSharesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount = import_coin.Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgTokenizeSharesResponse();
    message.amount = object.amount !== void 0 && object.amount !== null ? import_coin.Coin.fromPartial(object.amount) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgTokenizeSharesResponse();
    if (object.amount !== void 0 && object.amount !== null) {
      message.amount = import_coin.Coin.fromAmino(object.amount);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.amount = message.amount ? import_coin.Coin.toAmino(message.amount) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgTokenizeSharesResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgTokenizeSharesResponse",
      value: MsgTokenizeSharesResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgTokenizeSharesResponse.decode(message.value);
  },
  toProto(message) {
    return MsgTokenizeSharesResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.staking.v1beta1.MsgTokenizeSharesResponse",
      value: MsgTokenizeSharesResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRedeemTokensForShares() {
  return {
    delegatorAddress: "",
    amount: import_coin.Coin.fromPartial({})
  };
}
const MsgRedeemTokensForShares = {
  typeUrl: "/cosmos.staking.v1beta1.MsgRedeemTokensForShares",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.amount !== void 0) {
      import_coin.Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgRedeemTokensForShares();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        case 2:
          message.amount = import_coin.Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgRedeemTokensForShares();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.amount = object.amount !== void 0 && object.amount !== null ? import_coin.Coin.fromPartial(object.amount) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgRedeemTokensForShares();
    if (object.delegator_address !== void 0 && object.delegator_address !== null) {
      message.delegatorAddress = object.delegator_address;
    }
    if (object.amount !== void 0 && object.amount !== null) {
      message.amount = import_coin.Coin.fromAmino(object.amount);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.delegator_address = message.delegatorAddress === "" ? void 0 : message.delegatorAddress;
    obj.amount = message.amount ? import_coin.Coin.toAmino(message.amount) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgRedeemTokensForShares.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgRedeemTokensForShares",
      value: MsgRedeemTokensForShares.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgRedeemTokensForShares.decode(message.value);
  },
  toProto(message) {
    return MsgRedeemTokensForShares.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.staking.v1beta1.MsgRedeemTokensForShares",
      value: MsgRedeemTokensForShares.encode(message).finish()
    };
  }
};
function createBaseMsgRedeemTokensForSharesResponse() {
  return {
    amount: import_coin.Coin.fromPartial({})
  };
}
const MsgRedeemTokensForSharesResponse = {
  typeUrl: "/cosmos.staking.v1beta1.MsgRedeemTokensForSharesResponse",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.amount !== void 0) {
      import_coin.Coin.encode(message.amount, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgRedeemTokensForSharesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount = import_coin.Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgRedeemTokensForSharesResponse();
    message.amount = object.amount !== void 0 && object.amount !== null ? import_coin.Coin.fromPartial(object.amount) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgRedeemTokensForSharesResponse();
    if (object.amount !== void 0 && object.amount !== null) {
      message.amount = import_coin.Coin.fromAmino(object.amount);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.amount = message.amount ? import_coin.Coin.toAmino(message.amount) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgRedeemTokensForSharesResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgRedeemTokensForSharesResponse",
      value: MsgRedeemTokensForSharesResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgRedeemTokensForSharesResponse.decode(message.value);
  },
  toProto(message) {
    return MsgRedeemTokensForSharesResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.staking.v1beta1.MsgRedeemTokensForSharesResponse",
      value: MsgRedeemTokensForSharesResponse.encode(message).finish()
    };
  }
};
function createBaseMsgTransferTokenizeShareRecord() {
  return {
    tokenizeShareRecordId: BigInt(0),
    sender: "",
    newOwner: ""
  };
}
const MsgTransferTokenizeShareRecord = {
  typeUrl: "/cosmos.staking.v1beta1.MsgTransferTokenizeShareRecord",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.tokenizeShareRecordId !== BigInt(0)) {
      writer.uint32(8).uint64(message.tokenizeShareRecordId);
    }
    if (message.sender !== "") {
      writer.uint32(18).string(message.sender);
    }
    if (message.newOwner !== "") {
      writer.uint32(26).string(message.newOwner);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgTransferTokenizeShareRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokenizeShareRecordId = reader.uint64();
          break;
        case 2:
          message.sender = reader.string();
          break;
        case 3:
          message.newOwner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgTransferTokenizeShareRecord();
    message.tokenizeShareRecordId = object.tokenizeShareRecordId !== void 0 && object.tokenizeShareRecordId !== null ? BigInt(object.tokenizeShareRecordId.toString()) : BigInt(0);
    message.sender = object.sender ?? "";
    message.newOwner = object.newOwner ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgTransferTokenizeShareRecord();
    if (object.tokenize_share_record_id !== void 0 && object.tokenize_share_record_id !== null) {
      message.tokenizeShareRecordId = BigInt(object.tokenize_share_record_id);
    }
    if (object.sender !== void 0 && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.new_owner !== void 0 && object.new_owner !== null) {
      message.newOwner = object.new_owner;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.tokenize_share_record_id = message.tokenizeShareRecordId !== BigInt(0) ? message.tokenizeShareRecordId.toString() : void 0;
    obj.sender = message.sender === "" ? void 0 : message.sender;
    obj.new_owner = message.newOwner === "" ? void 0 : message.newOwner;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgTransferTokenizeShareRecord.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgTransferTokenizeShareRecord",
      value: MsgTransferTokenizeShareRecord.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgTransferTokenizeShareRecord.decode(message.value);
  },
  toProto(message) {
    return MsgTransferTokenizeShareRecord.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.staking.v1beta1.MsgTransferTokenizeShareRecord",
      value: MsgTransferTokenizeShareRecord.encode(message).finish()
    };
  }
};
function createBaseMsgTransferTokenizeShareRecordResponse() {
  return {};
}
const MsgTransferTokenizeShareRecordResponse = {
  typeUrl: "/cosmos.staking.v1beta1.MsgTransferTokenizeShareRecordResponse",
  encode(_, writer = import_binary.BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgTransferTokenizeShareRecordResponse();
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
    const message = createBaseMsgTransferTokenizeShareRecordResponse();
    return message;
  },
  fromAmino(_) {
    const message = createBaseMsgTransferTokenizeShareRecordResponse();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return MsgTransferTokenizeShareRecordResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgTransferTokenizeShareRecordResponse",
      value: MsgTransferTokenizeShareRecordResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgTransferTokenizeShareRecordResponse.decode(message.value);
  },
  toProto(message) {
    return MsgTransferTokenizeShareRecordResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.staking.v1beta1.MsgTransferTokenizeShareRecordResponse",
      value: MsgTransferTokenizeShareRecordResponse.encode(message).finish()
    };
  }
};
function createBaseMsgDisableTokenizeShares() {
  return {
    delegatorAddress: ""
  };
}
const MsgDisableTokenizeShares = {
  typeUrl: "/cosmos.staking.v1beta1.MsgDisableTokenizeShares",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgDisableTokenizeShares();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgDisableTokenizeShares();
    message.delegatorAddress = object.delegatorAddress ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgDisableTokenizeShares();
    if (object.delegator_address !== void 0 && object.delegator_address !== null) {
      message.delegatorAddress = object.delegator_address;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.delegator_address = message.delegatorAddress === "" ? void 0 : message.delegatorAddress;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgDisableTokenizeShares.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgDisableTokenizeShares",
      value: MsgDisableTokenizeShares.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgDisableTokenizeShares.decode(message.value);
  },
  toProto(message) {
    return MsgDisableTokenizeShares.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.staking.v1beta1.MsgDisableTokenizeShares",
      value: MsgDisableTokenizeShares.encode(message).finish()
    };
  }
};
function createBaseMsgDisableTokenizeSharesResponse() {
  return {};
}
const MsgDisableTokenizeSharesResponse = {
  typeUrl: "/cosmos.staking.v1beta1.MsgDisableTokenizeSharesResponse",
  encode(_, writer = import_binary.BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgDisableTokenizeSharesResponse();
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
    const message = createBaseMsgDisableTokenizeSharesResponse();
    return message;
  },
  fromAmino(_) {
    const message = createBaseMsgDisableTokenizeSharesResponse();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return MsgDisableTokenizeSharesResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgDisableTokenizeSharesResponse",
      value: MsgDisableTokenizeSharesResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgDisableTokenizeSharesResponse.decode(message.value);
  },
  toProto(message) {
    return MsgDisableTokenizeSharesResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.staking.v1beta1.MsgDisableTokenizeSharesResponse",
      value: MsgDisableTokenizeSharesResponse.encode(message).finish()
    };
  }
};
function createBaseMsgEnableTokenizeShares() {
  return {
    delegatorAddress: ""
  };
}
const MsgEnableTokenizeShares = {
  typeUrl: "/cosmos.staking.v1beta1.MsgEnableTokenizeShares",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgEnableTokenizeShares();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgEnableTokenizeShares();
    message.delegatorAddress = object.delegatorAddress ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgEnableTokenizeShares();
    if (object.delegator_address !== void 0 && object.delegator_address !== null) {
      message.delegatorAddress = object.delegator_address;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.delegator_address = message.delegatorAddress === "" ? void 0 : message.delegatorAddress;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgEnableTokenizeShares.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgEnableTokenizeShares",
      value: MsgEnableTokenizeShares.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgEnableTokenizeShares.decode(message.value);
  },
  toProto(message) {
    return MsgEnableTokenizeShares.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.staking.v1beta1.MsgEnableTokenizeShares",
      value: MsgEnableTokenizeShares.encode(message).finish()
    };
  }
};
function createBaseMsgEnableTokenizeSharesResponse() {
  return {
    completionTime: /* @__PURE__ */ new Date()
  };
}
const MsgEnableTokenizeSharesResponse = {
  typeUrl: "/cosmos.staking.v1beta1.MsgEnableTokenizeSharesResponse",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.completionTime !== void 0) {
      import_timestamp.Timestamp.encode((0, import_helpers.toTimestamp)(message.completionTime), writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgEnableTokenizeSharesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.completionTime = (0, import_helpers.fromTimestamp)(import_timestamp.Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgEnableTokenizeSharesResponse();
    message.completionTime = object.completionTime ?? void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgEnableTokenizeSharesResponse();
    if (object.completion_time !== void 0 && object.completion_time !== null) {
      message.completionTime = (0, import_helpers.fromTimestamp)(import_timestamp.Timestamp.fromAmino(object.completion_time));
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.completion_time = message.completionTime ? import_timestamp.Timestamp.toAmino((0, import_helpers.toTimestamp)(message.completionTime)) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgEnableTokenizeSharesResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgEnableTokenizeSharesResponse",
      value: MsgEnableTokenizeSharesResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgEnableTokenizeSharesResponse.decode(message.value);
  },
  toProto(message) {
    return MsgEnableTokenizeSharesResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.staking.v1beta1.MsgEnableTokenizeSharesResponse",
      value: MsgEnableTokenizeSharesResponse.encode(message).finish()
    };
  }
};
function createBaseMsgValidatorBond() {
  return {
    delegatorAddress: "",
    validatorAddress: ""
  };
}
const MsgValidatorBond = {
  typeUrl: "/cosmos.staking.v1beta1.MsgValidatorBond",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.validatorAddress !== "") {
      writer.uint32(18).string(message.validatorAddress);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgValidatorBond();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        case 2:
          message.validatorAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgValidatorBond();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.validatorAddress = object.validatorAddress ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgValidatorBond();
    if (object.delegator_address !== void 0 && object.delegator_address !== null) {
      message.delegatorAddress = object.delegator_address;
    }
    if (object.validator_address !== void 0 && object.validator_address !== null) {
      message.validatorAddress = object.validator_address;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.delegator_address = message.delegatorAddress === "" ? void 0 : message.delegatorAddress;
    obj.validator_address = message.validatorAddress === "" ? void 0 : message.validatorAddress;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgValidatorBond.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgValidatorBond",
      value: MsgValidatorBond.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgValidatorBond.decode(message.value);
  },
  toProto(message) {
    return MsgValidatorBond.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.staking.v1beta1.MsgValidatorBond",
      value: MsgValidatorBond.encode(message).finish()
    };
  }
};
function createBaseMsgValidatorBondResponse() {
  return {};
}
const MsgValidatorBondResponse = {
  typeUrl: "/cosmos.staking.v1beta1.MsgValidatorBondResponse",
  encode(_, writer = import_binary.BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgValidatorBondResponse();
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
    const message = createBaseMsgValidatorBondResponse();
    return message;
  },
  fromAmino(_) {
    const message = createBaseMsgValidatorBondResponse();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return MsgValidatorBondResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgValidatorBondResponse",
      value: MsgValidatorBondResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgValidatorBondResponse.decode(message.value);
  },
  toProto(message) {
    return MsgValidatorBondResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.staking.v1beta1.MsgValidatorBondResponse",
      value: MsgValidatorBondResponse.encode(message).finish()
    };
  }
};
const Cosmos_cryptoPubKey_InterfaceDecoder = (input) => {
  const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
  const data = import_any.Any.decode(reader, reader.uint32());
  switch (data.typeUrl) {
    default:
      return data;
  }
};
const Cosmos_cryptoPubKey_FromAmino = (content) => {
  return (0, import_proto_signing.encodePubkey)(content);
};
const Cosmos_cryptoPubKey_ToAmino = (content) => {
  return (0, import_proto_signing.decodePubkey)(content);
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Cosmos_cryptoPubKey_FromAmino,
  Cosmos_cryptoPubKey_InterfaceDecoder,
  Cosmos_cryptoPubKey_ToAmino,
  MsgBeginRedelegate,
  MsgBeginRedelegateResponse,
  MsgCancelUnbondingDelegation,
  MsgCancelUnbondingDelegationResponse,
  MsgCreateValidator,
  MsgCreateValidatorResponse,
  MsgDelegate,
  MsgDelegateResponse,
  MsgDisableTokenizeShares,
  MsgDisableTokenizeSharesResponse,
  MsgEditValidator,
  MsgEditValidatorResponse,
  MsgEnableTokenizeShares,
  MsgEnableTokenizeSharesResponse,
  MsgRedeemTokensForShares,
  MsgRedeemTokensForSharesResponse,
  MsgTokenizeShares,
  MsgTokenizeSharesResponse,
  MsgTransferTokenizeShareRecord,
  MsgTransferTokenizeShareRecordResponse,
  MsgUnbondValidator,
  MsgUnbondValidatorResponse,
  MsgUndelegate,
  MsgUndelegateResponse,
  MsgValidatorBond,
  MsgValidatorBondResponse
});
