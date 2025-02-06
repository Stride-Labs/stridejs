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
var trade_route_exports = {};
__export(trade_route_exports, {
  TradeConfig: () => TradeConfig,
  TradeRoute: () => TradeRoute
});
module.exports = __toCommonJS(trade_route_exports);
var import_ica_account = require("./ica_account");
var import_binary = require("../../binary");
var import_math = require("@cosmjs/math");
function createBaseTradeConfig() {
  return {
    poolId: BigInt(0),
    swapPrice: "",
    priceUpdateTimestamp: BigInt(0),
    maxAllowedSwapLossRate: "",
    minSwapAmount: "",
    maxSwapAmount: ""
  };
}
const TradeConfig = {
  typeUrl: "/stride.stakeibc.TradeConfig",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.swapPrice !== "") {
      writer.uint32(18).string(import_math.Decimal.fromUserInput(message.swapPrice, 18).atomics);
    }
    if (message.priceUpdateTimestamp !== BigInt(0)) {
      writer.uint32(24).uint64(message.priceUpdateTimestamp);
    }
    if (message.maxAllowedSwapLossRate !== "") {
      writer.uint32(34).string(import_math.Decimal.fromUserInput(message.maxAllowedSwapLossRate, 18).atomics);
    }
    if (message.minSwapAmount !== "") {
      writer.uint32(42).string(message.minSwapAmount);
    }
    if (message.maxSwapAmount !== "") {
      writer.uint32(50).string(message.maxSwapAmount);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseTradeConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.swapPrice = import_math.Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.priceUpdateTimestamp = reader.uint64();
          break;
        case 4:
          message.maxAllowedSwapLossRate = import_math.Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 5:
          message.minSwapAmount = reader.string();
          break;
        case 6:
          message.maxSwapAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseTradeConfig();
    message.poolId = object.poolId !== void 0 && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.swapPrice = object.swapPrice ?? "";
    message.priceUpdateTimestamp = object.priceUpdateTimestamp !== void 0 && object.priceUpdateTimestamp !== null ? BigInt(object.priceUpdateTimestamp.toString()) : BigInt(0);
    message.maxAllowedSwapLossRate = object.maxAllowedSwapLossRate ?? "";
    message.minSwapAmount = object.minSwapAmount ?? "";
    message.maxSwapAmount = object.maxSwapAmount ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseTradeConfig();
    if (object.pool_id !== void 0 && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.swap_price !== void 0 && object.swap_price !== null) {
      message.swapPrice = object.swap_price;
    }
    if (object.price_update_timestamp !== void 0 && object.price_update_timestamp !== null) {
      message.priceUpdateTimestamp = BigInt(object.price_update_timestamp);
    }
    if (object.max_allowed_swap_loss_rate !== void 0 && object.max_allowed_swap_loss_rate !== null) {
      message.maxAllowedSwapLossRate = object.max_allowed_swap_loss_rate;
    }
    if (object.min_swap_amount !== void 0 && object.min_swap_amount !== null) {
      message.minSwapAmount = object.min_swap_amount;
    }
    if (object.max_swap_amount !== void 0 && object.max_swap_amount !== null) {
      message.maxSwapAmount = object.max_swap_amount;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.pool_id = message.poolId !== BigInt(0) ? message.poolId?.toString() : void 0;
    obj.swap_price = message.swapPrice === "" ? void 0 : message.swapPrice;
    obj.price_update_timestamp = message.priceUpdateTimestamp !== BigInt(0) ? message.priceUpdateTimestamp?.toString() : void 0;
    obj.max_allowed_swap_loss_rate = message.maxAllowedSwapLossRate === "" ? void 0 : message.maxAllowedSwapLossRate;
    obj.min_swap_amount = message.minSwapAmount === "" ? void 0 : message.minSwapAmount;
    obj.max_swap_amount = message.maxSwapAmount === "" ? void 0 : message.maxSwapAmount;
    return obj;
  },
  fromAminoMsg(object) {
    return TradeConfig.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return TradeConfig.decode(message.value);
  },
  toProto(message) {
    return TradeConfig.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.stakeibc.TradeConfig",
      value: TradeConfig.encode(message).finish()
    };
  }
};
function createBaseTradeRoute() {
  return {
    rewardDenomOnHostZone: "",
    rewardDenomOnRewardZone: "",
    rewardDenomOnTradeZone: "",
    hostDenomOnTradeZone: "",
    hostDenomOnHostZone: "",
    hostAccount: import_ica_account.ICAAccount.fromPartial({}),
    rewardAccount: import_ica_account.ICAAccount.fromPartial({}),
    tradeAccount: import_ica_account.ICAAccount.fromPartial({}),
    hostToRewardChannelId: "",
    rewardToTradeChannelId: "",
    tradeToHostChannelId: "",
    minTransferAmount: "",
    tradeConfig: TradeConfig.fromPartial({})
  };
}
const TradeRoute = {
  typeUrl: "/stride.stakeibc.TradeRoute",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.rewardDenomOnHostZone !== "") {
      writer.uint32(10).string(message.rewardDenomOnHostZone);
    }
    if (message.rewardDenomOnRewardZone !== "") {
      writer.uint32(18).string(message.rewardDenomOnRewardZone);
    }
    if (message.rewardDenomOnTradeZone !== "") {
      writer.uint32(26).string(message.rewardDenomOnTradeZone);
    }
    if (message.hostDenomOnTradeZone !== "") {
      writer.uint32(34).string(message.hostDenomOnTradeZone);
    }
    if (message.hostDenomOnHostZone !== "") {
      writer.uint32(42).string(message.hostDenomOnHostZone);
    }
    if (message.hostAccount !== void 0) {
      import_ica_account.ICAAccount.encode(message.hostAccount, writer.uint32(50).fork()).ldelim();
    }
    if (message.rewardAccount !== void 0) {
      import_ica_account.ICAAccount.encode(message.rewardAccount, writer.uint32(58).fork()).ldelim();
    }
    if (message.tradeAccount !== void 0) {
      import_ica_account.ICAAccount.encode(message.tradeAccount, writer.uint32(66).fork()).ldelim();
    }
    if (message.hostToRewardChannelId !== "") {
      writer.uint32(74).string(message.hostToRewardChannelId);
    }
    if (message.rewardToTradeChannelId !== "") {
      writer.uint32(82).string(message.rewardToTradeChannelId);
    }
    if (message.tradeToHostChannelId !== "") {
      writer.uint32(90).string(message.tradeToHostChannelId);
    }
    if (message.minTransferAmount !== "") {
      writer.uint32(106).string(message.minTransferAmount);
    }
    if (message.tradeConfig !== void 0) {
      TradeConfig.encode(message.tradeConfig, writer.uint32(98).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseTradeRoute();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rewardDenomOnHostZone = reader.string();
          break;
        case 2:
          message.rewardDenomOnRewardZone = reader.string();
          break;
        case 3:
          message.rewardDenomOnTradeZone = reader.string();
          break;
        case 4:
          message.hostDenomOnTradeZone = reader.string();
          break;
        case 5:
          message.hostDenomOnHostZone = reader.string();
          break;
        case 6:
          message.hostAccount = import_ica_account.ICAAccount.decode(reader, reader.uint32());
          break;
        case 7:
          message.rewardAccount = import_ica_account.ICAAccount.decode(reader, reader.uint32());
          break;
        case 8:
          message.tradeAccount = import_ica_account.ICAAccount.decode(reader, reader.uint32());
          break;
        case 9:
          message.hostToRewardChannelId = reader.string();
          break;
        case 10:
          message.rewardToTradeChannelId = reader.string();
          break;
        case 11:
          message.tradeToHostChannelId = reader.string();
          break;
        case 13:
          message.minTransferAmount = reader.string();
          break;
        case 12:
          message.tradeConfig = TradeConfig.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseTradeRoute();
    message.rewardDenomOnHostZone = object.rewardDenomOnHostZone ?? "";
    message.rewardDenomOnRewardZone = object.rewardDenomOnRewardZone ?? "";
    message.rewardDenomOnTradeZone = object.rewardDenomOnTradeZone ?? "";
    message.hostDenomOnTradeZone = object.hostDenomOnTradeZone ?? "";
    message.hostDenomOnHostZone = object.hostDenomOnHostZone ?? "";
    message.hostAccount = object.hostAccount !== void 0 && object.hostAccount !== null ? import_ica_account.ICAAccount.fromPartial(object.hostAccount) : void 0;
    message.rewardAccount = object.rewardAccount !== void 0 && object.rewardAccount !== null ? import_ica_account.ICAAccount.fromPartial(object.rewardAccount) : void 0;
    message.tradeAccount = object.tradeAccount !== void 0 && object.tradeAccount !== null ? import_ica_account.ICAAccount.fromPartial(object.tradeAccount) : void 0;
    message.hostToRewardChannelId = object.hostToRewardChannelId ?? "";
    message.rewardToTradeChannelId = object.rewardToTradeChannelId ?? "";
    message.tradeToHostChannelId = object.tradeToHostChannelId ?? "";
    message.minTransferAmount = object.minTransferAmount ?? "";
    message.tradeConfig = object.tradeConfig !== void 0 && object.tradeConfig !== null ? TradeConfig.fromPartial(object.tradeConfig) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseTradeRoute();
    if (object.reward_denom_on_host_zone !== void 0 && object.reward_denom_on_host_zone !== null) {
      message.rewardDenomOnHostZone = object.reward_denom_on_host_zone;
    }
    if (object.reward_denom_on_reward_zone !== void 0 && object.reward_denom_on_reward_zone !== null) {
      message.rewardDenomOnRewardZone = object.reward_denom_on_reward_zone;
    }
    if (object.reward_denom_on_trade_zone !== void 0 && object.reward_denom_on_trade_zone !== null) {
      message.rewardDenomOnTradeZone = object.reward_denom_on_trade_zone;
    }
    if (object.host_denom_on_trade_zone !== void 0 && object.host_denom_on_trade_zone !== null) {
      message.hostDenomOnTradeZone = object.host_denom_on_trade_zone;
    }
    if (object.host_denom_on_host_zone !== void 0 && object.host_denom_on_host_zone !== null) {
      message.hostDenomOnHostZone = object.host_denom_on_host_zone;
    }
    if (object.host_account !== void 0 && object.host_account !== null) {
      message.hostAccount = import_ica_account.ICAAccount.fromAmino(object.host_account);
    }
    if (object.reward_account !== void 0 && object.reward_account !== null) {
      message.rewardAccount = import_ica_account.ICAAccount.fromAmino(object.reward_account);
    }
    if (object.trade_account !== void 0 && object.trade_account !== null) {
      message.tradeAccount = import_ica_account.ICAAccount.fromAmino(object.trade_account);
    }
    if (object.host_to_reward_channel_id !== void 0 && object.host_to_reward_channel_id !== null) {
      message.hostToRewardChannelId = object.host_to_reward_channel_id;
    }
    if (object.reward_to_trade_channel_id !== void 0 && object.reward_to_trade_channel_id !== null) {
      message.rewardToTradeChannelId = object.reward_to_trade_channel_id;
    }
    if (object.trade_to_host_channel_id !== void 0 && object.trade_to_host_channel_id !== null) {
      message.tradeToHostChannelId = object.trade_to_host_channel_id;
    }
    if (object.min_transfer_amount !== void 0 && object.min_transfer_amount !== null) {
      message.minTransferAmount = object.min_transfer_amount;
    }
    if (object.trade_config !== void 0 && object.trade_config !== null) {
      message.tradeConfig = TradeConfig.fromAmino(object.trade_config);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.reward_denom_on_host_zone = message.rewardDenomOnHostZone === "" ? void 0 : message.rewardDenomOnHostZone;
    obj.reward_denom_on_reward_zone = message.rewardDenomOnRewardZone === "" ? void 0 : message.rewardDenomOnRewardZone;
    obj.reward_denom_on_trade_zone = message.rewardDenomOnTradeZone === "" ? void 0 : message.rewardDenomOnTradeZone;
    obj.host_denom_on_trade_zone = message.hostDenomOnTradeZone === "" ? void 0 : message.hostDenomOnTradeZone;
    obj.host_denom_on_host_zone = message.hostDenomOnHostZone === "" ? void 0 : message.hostDenomOnHostZone;
    obj.host_account = message.hostAccount ? import_ica_account.ICAAccount.toAmino(message.hostAccount) : void 0;
    obj.reward_account = message.rewardAccount ? import_ica_account.ICAAccount.toAmino(message.rewardAccount) : void 0;
    obj.trade_account = message.tradeAccount ? import_ica_account.ICAAccount.toAmino(message.tradeAccount) : void 0;
    obj.host_to_reward_channel_id = message.hostToRewardChannelId === "" ? void 0 : message.hostToRewardChannelId;
    obj.reward_to_trade_channel_id = message.rewardToTradeChannelId === "" ? void 0 : message.rewardToTradeChannelId;
    obj.trade_to_host_channel_id = message.tradeToHostChannelId === "" ? void 0 : message.tradeToHostChannelId;
    obj.min_transfer_amount = message.minTransferAmount === "" ? void 0 : message.minTransferAmount;
    obj.trade_config = message.tradeConfig ? TradeConfig.toAmino(message.tradeConfig) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return TradeRoute.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return TradeRoute.decode(message.value);
  },
  toProto(message) {
    return TradeRoute.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.stakeibc.TradeRoute",
      value: TradeRoute.encode(message).finish()
    };
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  TradeConfig,
  TradeRoute
});
