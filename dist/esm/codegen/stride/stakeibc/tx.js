import { Validator } from "./validator";
import { Coin } from "../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../binary";
import { Decimal } from "@cosmjs/math";
var AuthzPermissionChange = /* @__PURE__ */ ((AuthzPermissionChange2) => {
  AuthzPermissionChange2[AuthzPermissionChange2["GRANT"] = 0] = "GRANT";
  AuthzPermissionChange2[AuthzPermissionChange2["REVOKE"] = 1] = "REVOKE";
  AuthzPermissionChange2[AuthzPermissionChange2["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return AuthzPermissionChange2;
})(AuthzPermissionChange || {});
const AuthzPermissionChangeSDKType = AuthzPermissionChange;
const AuthzPermissionChangeAmino = AuthzPermissionChange;
function authzPermissionChangeFromJSON(object) {
  switch (object) {
    case 0:
    case "GRANT":
      return 0 /* GRANT */;
    case 1:
    case "REVOKE":
      return 1 /* REVOKE */;
    case -1:
    case "UNRECOGNIZED":
    default:
      return -1 /* UNRECOGNIZED */;
  }
}
function authzPermissionChangeToJSON(object) {
  switch (object) {
    case 0 /* GRANT */:
      return "GRANT";
    case 1 /* REVOKE */:
      return "REVOKE";
    case -1 /* UNRECOGNIZED */:
    default:
      return "UNRECOGNIZED";
  }
}
function createBaseMsgUpdateInnerRedemptionRateBounds() {
  return {
    creator: "",
    chainId: "",
    minInnerRedemptionRate: "",
    maxInnerRedemptionRate: ""
  };
}
const MsgUpdateInnerRedemptionRateBounds = {
  typeUrl: "/stride.stakeibc.MsgUpdateInnerRedemptionRateBounds",
  encode(message, writer = BinaryWriter.create()) {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.chainId !== "") {
      writer.uint32(18).string(message.chainId);
    }
    if (message.minInnerRedemptionRate !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.minInnerRedemptionRate, 18).atomics);
    }
    if (message.maxInnerRedemptionRate !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.maxInnerRedemptionRate, 18).atomics);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateInnerRedemptionRateBounds();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.chainId = reader.string();
          break;
        case 3:
          message.minInnerRedemptionRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 4:
          message.maxInnerRedemptionRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgUpdateInnerRedemptionRateBounds();
    message.creator = object.creator ?? "";
    message.chainId = object.chainId ?? "";
    message.minInnerRedemptionRate = object.minInnerRedemptionRate ?? "";
    message.maxInnerRedemptionRate = object.maxInnerRedemptionRate ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgUpdateInnerRedemptionRateBounds();
    if (object.creator !== void 0 && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.chain_id !== void 0 && object.chain_id !== null) {
      message.chainId = object.chain_id;
    }
    if (object.min_inner_redemption_rate !== void 0 && object.min_inner_redemption_rate !== null) {
      message.minInnerRedemptionRate = object.min_inner_redemption_rate;
    }
    if (object.max_inner_redemption_rate !== void 0 && object.max_inner_redemption_rate !== null) {
      message.maxInnerRedemptionRate = object.max_inner_redemption_rate;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.creator = message.creator === "" ? void 0 : message.creator;
    obj.chain_id = message.chainId === "" ? void 0 : message.chainId;
    obj.min_inner_redemption_rate = message.minInnerRedemptionRate === "" ? void 0 : Decimal.fromUserInput(message.minInnerRedemptionRate, 18).atomics;
    obj.max_inner_redemption_rate = message.maxInnerRedemptionRate === "" ? void 0 : Decimal.fromUserInput(message.maxInnerRedemptionRate, 18).atomics;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgUpdateInnerRedemptionRateBounds.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return MsgUpdateInnerRedemptionRateBounds.decode(message.value);
  },
  toProto(message) {
    return MsgUpdateInnerRedemptionRateBounds.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.stakeibc.MsgUpdateInnerRedemptionRateBounds",
      value: MsgUpdateInnerRedemptionRateBounds.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateInnerRedemptionRateBoundsResponse() {
  return {};
}
const MsgUpdateInnerRedemptionRateBoundsResponse = {
  typeUrl: "/stride.stakeibc.MsgUpdateInnerRedemptionRateBoundsResponse",
  encode(_, writer = BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateInnerRedemptionRateBoundsResponse();
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
    const message = createBaseMsgUpdateInnerRedemptionRateBoundsResponse();
    return message;
  },
  fromAmino(_) {
    const message = createBaseMsgUpdateInnerRedemptionRateBoundsResponse();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return MsgUpdateInnerRedemptionRateBoundsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return MsgUpdateInnerRedemptionRateBoundsResponse.decode(message.value);
  },
  toProto(message) {
    return MsgUpdateInnerRedemptionRateBoundsResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.stakeibc.MsgUpdateInnerRedemptionRateBoundsResponse",
      value: MsgUpdateInnerRedemptionRateBoundsResponse.encode(message).finish()
    };
  }
};
function createBaseMsgLiquidStake() {
  return {
    creator: "",
    amount: "",
    hostDenom: ""
  };
}
const MsgLiquidStake = {
  typeUrl: "/stride.stakeibc.MsgLiquidStake",
  encode(message, writer = BinaryWriter.create()) {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    if (message.hostDenom !== "") {
      writer.uint32(26).string(message.hostDenom);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgLiquidStake();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.amount = reader.string();
          break;
        case 3:
          message.hostDenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgLiquidStake();
    message.creator = object.creator ?? "";
    message.amount = object.amount ?? "";
    message.hostDenom = object.hostDenom ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgLiquidStake();
    if (object.creator !== void 0 && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.amount !== void 0 && object.amount !== null) {
      message.amount = object.amount;
    }
    if (object.host_denom !== void 0 && object.host_denom !== null) {
      message.hostDenom = object.host_denom;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.creator = message.creator === "" ? void 0 : message.creator;
    obj.amount = message.amount === "" ? void 0 : message.amount;
    obj.host_denom = message.hostDenom === "" ? void 0 : message.hostDenom;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgLiquidStake.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "stakeibc/LiquidStake",
      value: MsgLiquidStake.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgLiquidStake.decode(message.value);
  },
  toProto(message) {
    return MsgLiquidStake.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.stakeibc.MsgLiquidStake",
      value: MsgLiquidStake.encode(message).finish()
    };
  }
};
function createBaseMsgLiquidStakeResponse() {
  return {
    stToken: Coin.fromPartial({})
  };
}
const MsgLiquidStakeResponse = {
  typeUrl: "/stride.stakeibc.MsgLiquidStakeResponse",
  encode(message, writer = BinaryWriter.create()) {
    if (message.stToken !== void 0) {
      Coin.encode(message.stToken, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgLiquidStakeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.stToken = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgLiquidStakeResponse();
    message.stToken = object.stToken !== void 0 && object.stToken !== null ? Coin.fromPartial(object.stToken) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgLiquidStakeResponse();
    if (object.st_token !== void 0 && object.st_token !== null) {
      message.stToken = Coin.fromAmino(object.st_token);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.st_token = message.stToken ? Coin.toAmino(message.stToken) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgLiquidStakeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return MsgLiquidStakeResponse.decode(message.value);
  },
  toProto(message) {
    return MsgLiquidStakeResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.stakeibc.MsgLiquidStakeResponse",
      value: MsgLiquidStakeResponse.encode(message).finish()
    };
  }
};
function createBaseMsgLSMLiquidStake() {
  return {
    creator: "",
    amount: "",
    lsmTokenIbcDenom: ""
  };
}
const MsgLSMLiquidStake = {
  typeUrl: "/stride.stakeibc.MsgLSMLiquidStake",
  encode(message, writer = BinaryWriter.create()) {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    if (message.lsmTokenIbcDenom !== "") {
      writer.uint32(26).string(message.lsmTokenIbcDenom);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgLSMLiquidStake();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.amount = reader.string();
          break;
        case 3:
          message.lsmTokenIbcDenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgLSMLiquidStake();
    message.creator = object.creator ?? "";
    message.amount = object.amount ?? "";
    message.lsmTokenIbcDenom = object.lsmTokenIbcDenom ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgLSMLiquidStake();
    if (object.creator !== void 0 && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.amount !== void 0 && object.amount !== null) {
      message.amount = object.amount;
    }
    if (object.lsm_token_ibc_denom !== void 0 && object.lsm_token_ibc_denom !== null) {
      message.lsmTokenIbcDenom = object.lsm_token_ibc_denom;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.creator = message.creator === "" ? void 0 : message.creator;
    obj.amount = message.amount === "" ? void 0 : message.amount;
    obj.lsm_token_ibc_denom = message.lsmTokenIbcDenom === "" ? void 0 : message.lsmTokenIbcDenom;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgLSMLiquidStake.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "stakeibc/LSMLiquidStake",
      value: MsgLSMLiquidStake.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgLSMLiquidStake.decode(message.value);
  },
  toProto(message) {
    return MsgLSMLiquidStake.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.stakeibc.MsgLSMLiquidStake",
      value: MsgLSMLiquidStake.encode(message).finish()
    };
  }
};
function createBaseMsgLSMLiquidStakeResponse() {
  return {
    transactionComplete: false
  };
}
const MsgLSMLiquidStakeResponse = {
  typeUrl: "/stride.stakeibc.MsgLSMLiquidStakeResponse",
  encode(message, writer = BinaryWriter.create()) {
    if (message.transactionComplete === true) {
      writer.uint32(8).bool(message.transactionComplete);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgLSMLiquidStakeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.transactionComplete = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgLSMLiquidStakeResponse();
    message.transactionComplete = object.transactionComplete ?? false;
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgLSMLiquidStakeResponse();
    if (object.transaction_complete !== void 0 && object.transaction_complete !== null) {
      message.transactionComplete = object.transaction_complete;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.transaction_complete = message.transactionComplete === false ? void 0 : message.transactionComplete;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgLSMLiquidStakeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return MsgLSMLiquidStakeResponse.decode(message.value);
  },
  toProto(message) {
    return MsgLSMLiquidStakeResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.stakeibc.MsgLSMLiquidStakeResponse",
      value: MsgLSMLiquidStakeResponse.encode(message).finish()
    };
  }
};
function createBaseMsgClearBalance() {
  return {
    creator: "",
    chainId: "",
    amount: "",
    channel: ""
  };
}
const MsgClearBalance = {
  typeUrl: "/stride.stakeibc.MsgClearBalance",
  encode(message, writer = BinaryWriter.create()) {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.chainId !== "") {
      writer.uint32(18).string(message.chainId);
    }
    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }
    if (message.channel !== "") {
      writer.uint32(34).string(message.channel);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgClearBalance();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.chainId = reader.string();
          break;
        case 3:
          message.amount = reader.string();
          break;
        case 4:
          message.channel = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgClearBalance();
    message.creator = object.creator ?? "";
    message.chainId = object.chainId ?? "";
    message.amount = object.amount ?? "";
    message.channel = object.channel ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgClearBalance();
    if (object.creator !== void 0 && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.chain_id !== void 0 && object.chain_id !== null) {
      message.chainId = object.chain_id;
    }
    if (object.amount !== void 0 && object.amount !== null) {
      message.amount = object.amount;
    }
    if (object.channel !== void 0 && object.channel !== null) {
      message.channel = object.channel;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.creator = message.creator === "" ? void 0 : message.creator;
    obj.chain_id = message.chainId === "" ? void 0 : message.chainId;
    obj.amount = message.amount === "" ? void 0 : message.amount;
    obj.channel = message.channel === "" ? void 0 : message.channel;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgClearBalance.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "still-no-defined",
      value: MsgClearBalance.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgClearBalance.decode(message.value);
  },
  toProto(message) {
    return MsgClearBalance.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.stakeibc.MsgClearBalance",
      value: MsgClearBalance.encode(message).finish()
    };
  }
};
function createBaseMsgClearBalanceResponse() {
  return {};
}
const MsgClearBalanceResponse = {
  typeUrl: "/stride.stakeibc.MsgClearBalanceResponse",
  encode(_, writer = BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgClearBalanceResponse();
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
    const message = createBaseMsgClearBalanceResponse();
    return message;
  },
  fromAmino(_) {
    const message = createBaseMsgClearBalanceResponse();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return MsgClearBalanceResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return MsgClearBalanceResponse.decode(message.value);
  },
  toProto(message) {
    return MsgClearBalanceResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.stakeibc.MsgClearBalanceResponse",
      value: MsgClearBalanceResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRedeemStake() {
  return {
    creator: "",
    amount: "",
    hostZone: "",
    receiver: ""
  };
}
const MsgRedeemStake = {
  typeUrl: "/stride.stakeibc.MsgRedeemStake",
  encode(message, writer = BinaryWriter.create()) {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    if (message.hostZone !== "") {
      writer.uint32(26).string(message.hostZone);
    }
    if (message.receiver !== "") {
      writer.uint32(34).string(message.receiver);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgRedeemStake();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.amount = reader.string();
          break;
        case 3:
          message.hostZone = reader.string();
          break;
        case 4:
          message.receiver = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgRedeemStake();
    message.creator = object.creator ?? "";
    message.amount = object.amount ?? "";
    message.hostZone = object.hostZone ?? "";
    message.receiver = object.receiver ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgRedeemStake();
    if (object.creator !== void 0 && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.amount !== void 0 && object.amount !== null) {
      message.amount = object.amount;
    }
    if (object.host_zone !== void 0 && object.host_zone !== null) {
      message.hostZone = object.host_zone;
    }
    if (object.receiver !== void 0 && object.receiver !== null) {
      message.receiver = object.receiver;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.creator = message.creator === "" ? void 0 : message.creator;
    obj.amount = message.amount === "" ? void 0 : message.amount;
    obj.host_zone = message.hostZone === "" ? void 0 : message.hostZone;
    obj.receiver = message.receiver === "" ? void 0 : message.receiver;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgRedeemStake.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "stakeibc/RedeemStake",
      value: MsgRedeemStake.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgRedeemStake.decode(message.value);
  },
  toProto(message) {
    return MsgRedeemStake.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.stakeibc.MsgRedeemStake",
      value: MsgRedeemStake.encode(message).finish()
    };
  }
};
function createBaseMsgRedeemStakeResponse() {
  return {};
}
const MsgRedeemStakeResponse = {
  typeUrl: "/stride.stakeibc.MsgRedeemStakeResponse",
  encode(_, writer = BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgRedeemStakeResponse();
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
    const message = createBaseMsgRedeemStakeResponse();
    return message;
  },
  fromAmino(_) {
    const message = createBaseMsgRedeemStakeResponse();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return MsgRedeemStakeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return MsgRedeemStakeResponse.decode(message.value);
  },
  toProto(message) {
    return MsgRedeemStakeResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.stakeibc.MsgRedeemStakeResponse",
      value: MsgRedeemStakeResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRegisterHostZone() {
  return {
    connectionId: "",
    bech32prefix: "",
    hostDenom: "",
    ibcDenom: "",
    creator: "",
    transferChannelId: "",
    unbondingPeriod: BigInt(0),
    minRedemptionRate: "",
    maxRedemptionRate: "",
    lsmLiquidStakeEnabled: false,
    communityPoolTreasuryAddress: "",
    maxMessagesPerIcaTx: BigInt(0)
  };
}
const MsgRegisterHostZone = {
  typeUrl: "/stride.stakeibc.MsgRegisterHostZone",
  encode(message, writer = BinaryWriter.create()) {
    if (message.connectionId !== "") {
      writer.uint32(18).string(message.connectionId);
    }
    if (message.bech32prefix !== "") {
      writer.uint32(98).string(message.bech32prefix);
    }
    if (message.hostDenom !== "") {
      writer.uint32(34).string(message.hostDenom);
    }
    if (message.ibcDenom !== "") {
      writer.uint32(42).string(message.ibcDenom);
    }
    if (message.creator !== "") {
      writer.uint32(50).string(message.creator);
    }
    if (message.transferChannelId !== "") {
      writer.uint32(82).string(message.transferChannelId);
    }
    if (message.unbondingPeriod !== BigInt(0)) {
      writer.uint32(88).uint64(message.unbondingPeriod);
    }
    if (message.minRedemptionRate !== "") {
      writer.uint32(106).string(Decimal.fromUserInput(message.minRedemptionRate, 18).atomics);
    }
    if (message.maxRedemptionRate !== "") {
      writer.uint32(114).string(Decimal.fromUserInput(message.maxRedemptionRate, 18).atomics);
    }
    if (message.lsmLiquidStakeEnabled === true) {
      writer.uint32(120).bool(message.lsmLiquidStakeEnabled);
    }
    if (message.communityPoolTreasuryAddress !== "") {
      writer.uint32(130).string(message.communityPoolTreasuryAddress);
    }
    if (message.maxMessagesPerIcaTx !== BigInt(0)) {
      writer.uint32(136).uint64(message.maxMessagesPerIcaTx);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterHostZone();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.connectionId = reader.string();
          break;
        case 12:
          message.bech32prefix = reader.string();
          break;
        case 4:
          message.hostDenom = reader.string();
          break;
        case 5:
          message.ibcDenom = reader.string();
          break;
        case 6:
          message.creator = reader.string();
          break;
        case 10:
          message.transferChannelId = reader.string();
          break;
        case 11:
          message.unbondingPeriod = reader.uint64();
          break;
        case 13:
          message.minRedemptionRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 14:
          message.maxRedemptionRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 15:
          message.lsmLiquidStakeEnabled = reader.bool();
          break;
        case 16:
          message.communityPoolTreasuryAddress = reader.string();
          break;
        case 17:
          message.maxMessagesPerIcaTx = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgRegisterHostZone();
    message.connectionId = object.connectionId ?? "";
    message.bech32prefix = object.bech32prefix ?? "";
    message.hostDenom = object.hostDenom ?? "";
    message.ibcDenom = object.ibcDenom ?? "";
    message.creator = object.creator ?? "";
    message.transferChannelId = object.transferChannelId ?? "";
    message.unbondingPeriod = object.unbondingPeriod !== void 0 && object.unbondingPeriod !== null ? BigInt(object.unbondingPeriod.toString()) : BigInt(0);
    message.minRedemptionRate = object.minRedemptionRate ?? "";
    message.maxRedemptionRate = object.maxRedemptionRate ?? "";
    message.lsmLiquidStakeEnabled = object.lsmLiquidStakeEnabled ?? false;
    message.communityPoolTreasuryAddress = object.communityPoolTreasuryAddress ?? "";
    message.maxMessagesPerIcaTx = object.maxMessagesPerIcaTx !== void 0 && object.maxMessagesPerIcaTx !== null ? BigInt(object.maxMessagesPerIcaTx.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgRegisterHostZone();
    if (object.connection_id !== void 0 && object.connection_id !== null) {
      message.connectionId = object.connection_id;
    }
    if (object.bech32prefix !== void 0 && object.bech32prefix !== null) {
      message.bech32prefix = object.bech32prefix;
    }
    if (object.host_denom !== void 0 && object.host_denom !== null) {
      message.hostDenom = object.host_denom;
    }
    if (object.ibc_denom !== void 0 && object.ibc_denom !== null) {
      message.ibcDenom = object.ibc_denom;
    }
    if (object.creator !== void 0 && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.transfer_channel_id !== void 0 && object.transfer_channel_id !== null) {
      message.transferChannelId = object.transfer_channel_id;
    }
    if (object.unbonding_period !== void 0 && object.unbonding_period !== null) {
      message.unbondingPeriod = BigInt(object.unbonding_period);
    }
    if (object.min_redemption_rate !== void 0 && object.min_redemption_rate !== null) {
      message.minRedemptionRate = object.min_redemption_rate;
    }
    if (object.max_redemption_rate !== void 0 && object.max_redemption_rate !== null) {
      message.maxRedemptionRate = object.max_redemption_rate;
    }
    if (object.lsm_liquid_stake_enabled !== void 0 && object.lsm_liquid_stake_enabled !== null) {
      message.lsmLiquidStakeEnabled = object.lsm_liquid_stake_enabled;
    }
    if (object.community_pool_treasury_address !== void 0 && object.community_pool_treasury_address !== null) {
      message.communityPoolTreasuryAddress = object.community_pool_treasury_address;
    }
    if (object.max_messages_per_ica_tx !== void 0 && object.max_messages_per_ica_tx !== null) {
      message.maxMessagesPerIcaTx = BigInt(object.max_messages_per_ica_tx);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.connection_id = message.connectionId === "" ? void 0 : message.connectionId;
    obj.bech32prefix = message.bech32prefix === "" ? void 0 : message.bech32prefix;
    obj.host_denom = message.hostDenom === "" ? void 0 : message.hostDenom;
    obj.ibc_denom = message.ibcDenom === "" ? void 0 : message.ibcDenom;
    obj.creator = message.creator === "" ? void 0 : message.creator;
    obj.transfer_channel_id = message.transferChannelId === "" ? void 0 : message.transferChannelId;
    obj.unbonding_period = message.unbondingPeriod !== BigInt(0) ? message.unbondingPeriod?.toString() : void 0;
    obj.min_redemption_rate = message.minRedemptionRate === "" ? void 0 : Decimal.fromUserInput(message.minRedemptionRate, 18).atomics;
    obj.max_redemption_rate = message.maxRedemptionRate === "" ? void 0 : Decimal.fromUserInput(message.maxRedemptionRate, 18).atomics;
    obj.lsm_liquid_stake_enabled = message.lsmLiquidStakeEnabled === false ? void 0 : message.lsmLiquidStakeEnabled;
    obj.community_pool_treasury_address = message.communityPoolTreasuryAddress === "" ? void 0 : message.communityPoolTreasuryAddress;
    obj.max_messages_per_ica_tx = message.maxMessagesPerIcaTx !== BigInt(0) ? message.maxMessagesPerIcaTx?.toString() : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgRegisterHostZone.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "stakeibc/RegisterHostZone",
      value: MsgRegisterHostZone.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgRegisterHostZone.decode(message.value);
  },
  toProto(message) {
    return MsgRegisterHostZone.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.stakeibc.MsgRegisterHostZone",
      value: MsgRegisterHostZone.encode(message).finish()
    };
  }
};
function createBaseMsgRegisterHostZoneResponse() {
  return {};
}
const MsgRegisterHostZoneResponse = {
  typeUrl: "/stride.stakeibc.MsgRegisterHostZoneResponse",
  encode(_, writer = BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterHostZoneResponse();
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
    const message = createBaseMsgRegisterHostZoneResponse();
    return message;
  },
  fromAmino(_) {
    const message = createBaseMsgRegisterHostZoneResponse();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return MsgRegisterHostZoneResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return MsgRegisterHostZoneResponse.decode(message.value);
  },
  toProto(message) {
    return MsgRegisterHostZoneResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.stakeibc.MsgRegisterHostZoneResponse",
      value: MsgRegisterHostZoneResponse.encode(message).finish()
    };
  }
};
function createBaseMsgClaimUndelegatedTokens() {
  return {
    creator: "",
    hostZoneId: "",
    epoch: BigInt(0),
    receiver: ""
  };
}
const MsgClaimUndelegatedTokens = {
  typeUrl: "/stride.stakeibc.MsgClaimUndelegatedTokens",
  encode(message, writer = BinaryWriter.create()) {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.hostZoneId !== "") {
      writer.uint32(18).string(message.hostZoneId);
    }
    if (message.epoch !== BigInt(0)) {
      writer.uint32(24).uint64(message.epoch);
    }
    if (message.receiver !== "") {
      writer.uint32(42).string(message.receiver);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgClaimUndelegatedTokens();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.hostZoneId = reader.string();
          break;
        case 3:
          message.epoch = reader.uint64();
          break;
        case 5:
          message.receiver = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgClaimUndelegatedTokens();
    message.creator = object.creator ?? "";
    message.hostZoneId = object.hostZoneId ?? "";
    message.epoch = object.epoch !== void 0 && object.epoch !== null ? BigInt(object.epoch.toString()) : BigInt(0);
    message.receiver = object.receiver ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgClaimUndelegatedTokens();
    if (object.creator !== void 0 && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.host_zone_id !== void 0 && object.host_zone_id !== null) {
      message.hostZoneId = object.host_zone_id;
    }
    if (object.epoch !== void 0 && object.epoch !== null) {
      message.epoch = BigInt(object.epoch);
    }
    if (object.receiver !== void 0 && object.receiver !== null) {
      message.receiver = object.receiver;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.creator = message.creator === "" ? void 0 : message.creator;
    obj.host_zone_id = message.hostZoneId === "" ? void 0 : message.hostZoneId;
    obj.epoch = message.epoch !== BigInt(0) ? message.epoch?.toString() : void 0;
    obj.receiver = message.receiver === "" ? void 0 : message.receiver;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgClaimUndelegatedTokens.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "stakeibc/ClaimUndelegatedTokens",
      value: MsgClaimUndelegatedTokens.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgClaimUndelegatedTokens.decode(message.value);
  },
  toProto(message) {
    return MsgClaimUndelegatedTokens.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.stakeibc.MsgClaimUndelegatedTokens",
      value: MsgClaimUndelegatedTokens.encode(message).finish()
    };
  }
};
function createBaseMsgClaimUndelegatedTokensResponse() {
  return {};
}
const MsgClaimUndelegatedTokensResponse = {
  typeUrl: "/stride.stakeibc.MsgClaimUndelegatedTokensResponse",
  encode(_, writer = BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgClaimUndelegatedTokensResponse();
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
    const message = createBaseMsgClaimUndelegatedTokensResponse();
    return message;
  },
  fromAmino(_) {
    const message = createBaseMsgClaimUndelegatedTokensResponse();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return MsgClaimUndelegatedTokensResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return MsgClaimUndelegatedTokensResponse.decode(message.value);
  },
  toProto(message) {
    return MsgClaimUndelegatedTokensResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.stakeibc.MsgClaimUndelegatedTokensResponse",
      value: MsgClaimUndelegatedTokensResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRebalanceValidators() {
  return {
    creator: "",
    hostZone: "",
    numRebalance: BigInt(0)
  };
}
const MsgRebalanceValidators = {
  typeUrl: "/stride.stakeibc.MsgRebalanceValidators",
  encode(message, writer = BinaryWriter.create()) {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.hostZone !== "") {
      writer.uint32(18).string(message.hostZone);
    }
    if (message.numRebalance !== BigInt(0)) {
      writer.uint32(24).uint64(message.numRebalance);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgRebalanceValidators();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.hostZone = reader.string();
          break;
        case 3:
          message.numRebalance = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgRebalanceValidators();
    message.creator = object.creator ?? "";
    message.hostZone = object.hostZone ?? "";
    message.numRebalance = object.numRebalance !== void 0 && object.numRebalance !== null ? BigInt(object.numRebalance.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgRebalanceValidators();
    if (object.creator !== void 0 && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.host_zone !== void 0 && object.host_zone !== null) {
      message.hostZone = object.host_zone;
    }
    if (object.num_rebalance !== void 0 && object.num_rebalance !== null) {
      message.numRebalance = BigInt(object.num_rebalance);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.creator = message.creator === "" ? void 0 : message.creator;
    obj.host_zone = message.hostZone === "" ? void 0 : message.hostZone;
    obj.num_rebalance = message.numRebalance !== BigInt(0) ? message.numRebalance?.toString() : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgRebalanceValidators.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "stakeibc/RebalanceValidators",
      value: MsgRebalanceValidators.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgRebalanceValidators.decode(message.value);
  },
  toProto(message) {
    return MsgRebalanceValidators.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.stakeibc.MsgRebalanceValidators",
      value: MsgRebalanceValidators.encode(message).finish()
    };
  }
};
function createBaseMsgRebalanceValidatorsResponse() {
  return {};
}
const MsgRebalanceValidatorsResponse = {
  typeUrl: "/stride.stakeibc.MsgRebalanceValidatorsResponse",
  encode(_, writer = BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgRebalanceValidatorsResponse();
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
    const message = createBaseMsgRebalanceValidatorsResponse();
    return message;
  },
  fromAmino(_) {
    const message = createBaseMsgRebalanceValidatorsResponse();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return MsgRebalanceValidatorsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return MsgRebalanceValidatorsResponse.decode(message.value);
  },
  toProto(message) {
    return MsgRebalanceValidatorsResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.stakeibc.MsgRebalanceValidatorsResponse",
      value: MsgRebalanceValidatorsResponse.encode(message).finish()
    };
  }
};
function createBaseMsgAddValidators() {
  return {
    creator: "",
    hostZone: "",
    validators: []
  };
}
const MsgAddValidators = {
  typeUrl: "/stride.stakeibc.MsgAddValidators",
  encode(message, writer = BinaryWriter.create()) {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.hostZone !== "") {
      writer.uint32(18).string(message.hostZone);
    }
    for (const v of message.validators) {
      Validator.encode(v, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgAddValidators();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.hostZone = reader.string();
          break;
        case 3:
          message.validators.push(Validator.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgAddValidators();
    message.creator = object.creator ?? "";
    message.hostZone = object.hostZone ?? "";
    message.validators = object.validators?.map((e) => Validator.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgAddValidators();
    if (object.creator !== void 0 && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.host_zone !== void 0 && object.host_zone !== null) {
      message.hostZone = object.host_zone;
    }
    message.validators = object.validators?.map((e) => Validator.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.creator = message.creator === "" ? void 0 : message.creator;
    obj.host_zone = message.hostZone === "" ? void 0 : message.hostZone;
    if (message.validators) {
      obj.validators = message.validators.map((e) => e ? Validator.toAmino(e) : void 0);
    } else {
      obj.validators = message.validators;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return MsgAddValidators.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return MsgAddValidators.decode(message.value);
  },
  toProto(message) {
    return MsgAddValidators.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.stakeibc.MsgAddValidators",
      value: MsgAddValidators.encode(message).finish()
    };
  }
};
function createBaseMsgAddValidatorsResponse() {
  return {};
}
const MsgAddValidatorsResponse = {
  typeUrl: "/stride.stakeibc.MsgAddValidatorsResponse",
  encode(_, writer = BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgAddValidatorsResponse();
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
    const message = createBaseMsgAddValidatorsResponse();
    return message;
  },
  fromAmino(_) {
    const message = createBaseMsgAddValidatorsResponse();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return MsgAddValidatorsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return MsgAddValidatorsResponse.decode(message.value);
  },
  toProto(message) {
    return MsgAddValidatorsResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.stakeibc.MsgAddValidatorsResponse",
      value: MsgAddValidatorsResponse.encode(message).finish()
    };
  }
};
function createBaseValidatorWeight() {
  return {
    address: "",
    weight: BigInt(0)
  };
}
const ValidatorWeight = {
  typeUrl: "/stride.stakeibc.ValidatorWeight",
  encode(message, writer = BinaryWriter.create()) {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.weight !== BigInt(0)) {
      writer.uint32(16).uint64(message.weight);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseValidatorWeight();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.weight = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseValidatorWeight();
    message.address = object.address ?? "";
    message.weight = object.weight !== void 0 && object.weight !== null ? BigInt(object.weight.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object) {
    const message = createBaseValidatorWeight();
    if (object.address !== void 0 && object.address !== null) {
      message.address = object.address;
    }
    if (object.weight !== void 0 && object.weight !== null) {
      message.weight = BigInt(object.weight);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.address = message.address === "" ? void 0 : message.address;
    obj.weight = message.weight !== BigInt(0) ? message.weight?.toString() : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return ValidatorWeight.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return ValidatorWeight.decode(message.value);
  },
  toProto(message) {
    return ValidatorWeight.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.stakeibc.ValidatorWeight",
      value: ValidatorWeight.encode(message).finish()
    };
  }
};
function createBaseMsgChangeValidatorWeights() {
  return {
    creator: "",
    hostZone: "",
    validatorWeights: []
  };
}
const MsgChangeValidatorWeights = {
  typeUrl: "/stride.stakeibc.MsgChangeValidatorWeights",
  encode(message, writer = BinaryWriter.create()) {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.hostZone !== "") {
      writer.uint32(18).string(message.hostZone);
    }
    for (const v of message.validatorWeights) {
      ValidatorWeight.encode(v, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgChangeValidatorWeights();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.hostZone = reader.string();
          break;
        case 3:
          message.validatorWeights.push(ValidatorWeight.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgChangeValidatorWeights();
    message.creator = object.creator ?? "";
    message.hostZone = object.hostZone ?? "";
    message.validatorWeights = object.validatorWeights?.map((e) => ValidatorWeight.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgChangeValidatorWeights();
    if (object.creator !== void 0 && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.host_zone !== void 0 && object.host_zone !== null) {
      message.hostZone = object.host_zone;
    }
    message.validatorWeights = object.validator_weights?.map((e) => ValidatorWeight.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.creator = message.creator === "" ? void 0 : message.creator;
    obj.host_zone = message.hostZone === "" ? void 0 : message.hostZone;
    if (message.validatorWeights) {
      obj.validator_weights = message.validatorWeights.map((e) => e ? ValidatorWeight.toAmino(e) : void 0);
    } else {
      obj.validator_weights = message.validatorWeights;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return MsgChangeValidatorWeights.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return MsgChangeValidatorWeights.decode(message.value);
  },
  toProto(message) {
    return MsgChangeValidatorWeights.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.stakeibc.MsgChangeValidatorWeights",
      value: MsgChangeValidatorWeights.encode(message).finish()
    };
  }
};
function createBaseMsgChangeValidatorWeightsResponse() {
  return {};
}
const MsgChangeValidatorWeightsResponse = {
  typeUrl: "/stride.stakeibc.MsgChangeValidatorWeightsResponse",
  encode(_, writer = BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgChangeValidatorWeightsResponse();
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
    const message = createBaseMsgChangeValidatorWeightsResponse();
    return message;
  },
  fromAmino(_) {
    const message = createBaseMsgChangeValidatorWeightsResponse();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return MsgChangeValidatorWeightsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return MsgChangeValidatorWeightsResponse.decode(message.value);
  },
  toProto(message) {
    return MsgChangeValidatorWeightsResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.stakeibc.MsgChangeValidatorWeightsResponse",
      value: MsgChangeValidatorWeightsResponse.encode(message).finish()
    };
  }
};
function createBaseMsgDeleteValidator() {
  return {
    creator: "",
    hostZone: "",
    valAddr: ""
  };
}
const MsgDeleteValidator = {
  typeUrl: "/stride.stakeibc.MsgDeleteValidator",
  encode(message, writer = BinaryWriter.create()) {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.hostZone !== "") {
      writer.uint32(18).string(message.hostZone);
    }
    if (message.valAddr !== "") {
      writer.uint32(26).string(message.valAddr);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteValidator();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.hostZone = reader.string();
          break;
        case 3:
          message.valAddr = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgDeleteValidator();
    message.creator = object.creator ?? "";
    message.hostZone = object.hostZone ?? "";
    message.valAddr = object.valAddr ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgDeleteValidator();
    if (object.creator !== void 0 && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.host_zone !== void 0 && object.host_zone !== null) {
      message.hostZone = object.host_zone;
    }
    if (object.val_addr !== void 0 && object.val_addr !== null) {
      message.valAddr = object.val_addr;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.creator = message.creator === "" ? void 0 : message.creator;
    obj.host_zone = message.hostZone === "" ? void 0 : message.hostZone;
    obj.val_addr = message.valAddr === "" ? void 0 : message.valAddr;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgDeleteValidator.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "stakeibc/DeleteValidator",
      value: MsgDeleteValidator.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgDeleteValidator.decode(message.value);
  },
  toProto(message) {
    return MsgDeleteValidator.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.stakeibc.MsgDeleteValidator",
      value: MsgDeleteValidator.encode(message).finish()
    };
  }
};
function createBaseMsgDeleteValidatorResponse() {
  return {};
}
const MsgDeleteValidatorResponse = {
  typeUrl: "/stride.stakeibc.MsgDeleteValidatorResponse",
  encode(_, writer = BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteValidatorResponse();
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
    const message = createBaseMsgDeleteValidatorResponse();
    return message;
  },
  fromAmino(_) {
    const message = createBaseMsgDeleteValidatorResponse();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return MsgDeleteValidatorResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return MsgDeleteValidatorResponse.decode(message.value);
  },
  toProto(message) {
    return MsgDeleteValidatorResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.stakeibc.MsgDeleteValidatorResponse",
      value: MsgDeleteValidatorResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRestoreInterchainAccount() {
  return {
    creator: "",
    chainId: "",
    connectionId: "",
    accountOwner: ""
  };
}
const MsgRestoreInterchainAccount = {
  typeUrl: "/stride.stakeibc.MsgRestoreInterchainAccount",
  encode(message, writer = BinaryWriter.create()) {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.chainId !== "") {
      writer.uint32(18).string(message.chainId);
    }
    if (message.connectionId !== "") {
      writer.uint32(26).string(message.connectionId);
    }
    if (message.accountOwner !== "") {
      writer.uint32(34).string(message.accountOwner);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgRestoreInterchainAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.chainId = reader.string();
          break;
        case 3:
          message.connectionId = reader.string();
          break;
        case 4:
          message.accountOwner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgRestoreInterchainAccount();
    message.creator = object.creator ?? "";
    message.chainId = object.chainId ?? "";
    message.connectionId = object.connectionId ?? "";
    message.accountOwner = object.accountOwner ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgRestoreInterchainAccount();
    if (object.creator !== void 0 && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.chain_id !== void 0 && object.chain_id !== null) {
      message.chainId = object.chain_id;
    }
    if (object.connection_id !== void 0 && object.connection_id !== null) {
      message.connectionId = object.connection_id;
    }
    if (object.account_owner !== void 0 && object.account_owner !== null) {
      message.accountOwner = object.account_owner;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.creator = message.creator === "" ? void 0 : message.creator;
    obj.chain_id = message.chainId === "" ? void 0 : message.chainId;
    obj.connection_id = message.connectionId === "" ? void 0 : message.connectionId;
    obj.account_owner = message.accountOwner === "" ? void 0 : message.accountOwner;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgRestoreInterchainAccount.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "stakeibc/RestoreInterchainAccount",
      value: MsgRestoreInterchainAccount.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgRestoreInterchainAccount.decode(message.value);
  },
  toProto(message) {
    return MsgRestoreInterchainAccount.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.stakeibc.MsgRestoreInterchainAccount",
      value: MsgRestoreInterchainAccount.encode(message).finish()
    };
  }
};
function createBaseMsgRestoreInterchainAccountResponse() {
  return {};
}
const MsgRestoreInterchainAccountResponse = {
  typeUrl: "/stride.stakeibc.MsgRestoreInterchainAccountResponse",
  encode(_, writer = BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgRestoreInterchainAccountResponse();
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
    const message = createBaseMsgRestoreInterchainAccountResponse();
    return message;
  },
  fromAmino(_) {
    const message = createBaseMsgRestoreInterchainAccountResponse();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return MsgRestoreInterchainAccountResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return MsgRestoreInterchainAccountResponse.decode(message.value);
  },
  toProto(message) {
    return MsgRestoreInterchainAccountResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.stakeibc.MsgRestoreInterchainAccountResponse",
      value: MsgRestoreInterchainAccountResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCloseDelegationChannel() {
  return {
    creator: "",
    chainId: ""
  };
}
const MsgCloseDelegationChannel = {
  typeUrl: "/stride.stakeibc.MsgCloseDelegationChannel",
  encode(message, writer = BinaryWriter.create()) {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.chainId !== "") {
      writer.uint32(18).string(message.chainId);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgCloseDelegationChannel();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.chainId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgCloseDelegationChannel();
    message.creator = object.creator ?? "";
    message.chainId = object.chainId ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgCloseDelegationChannel();
    if (object.creator !== void 0 && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.chain_id !== void 0 && object.chain_id !== null) {
      message.chainId = object.chain_id;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.creator = message.creator === "" ? void 0 : message.creator;
    obj.chain_id = message.chainId === "" ? void 0 : message.chainId;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgCloseDelegationChannel.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return MsgCloseDelegationChannel.decode(message.value);
  },
  toProto(message) {
    return MsgCloseDelegationChannel.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.stakeibc.MsgCloseDelegationChannel",
      value: MsgCloseDelegationChannel.encode(message).finish()
    };
  }
};
function createBaseMsgCloseDelegationChannelResponse() {
  return {};
}
const MsgCloseDelegationChannelResponse = {
  typeUrl: "/stride.stakeibc.MsgCloseDelegationChannelResponse",
  encode(_, writer = BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgCloseDelegationChannelResponse();
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
    const message = createBaseMsgCloseDelegationChannelResponse();
    return message;
  },
  fromAmino(_) {
    const message = createBaseMsgCloseDelegationChannelResponse();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return MsgCloseDelegationChannelResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return MsgCloseDelegationChannelResponse.decode(message.value);
  },
  toProto(message) {
    return MsgCloseDelegationChannelResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.stakeibc.MsgCloseDelegationChannelResponse",
      value: MsgCloseDelegationChannelResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateValidatorSharesExchRate() {
  return {
    creator: "",
    chainId: "",
    valoper: ""
  };
}
const MsgUpdateValidatorSharesExchRate = {
  typeUrl: "/stride.stakeibc.MsgUpdateValidatorSharesExchRate",
  encode(message, writer = BinaryWriter.create()) {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.chainId !== "") {
      writer.uint32(18).string(message.chainId);
    }
    if (message.valoper !== "") {
      writer.uint32(26).string(message.valoper);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateValidatorSharesExchRate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.chainId = reader.string();
          break;
        case 3:
          message.valoper = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgUpdateValidatorSharesExchRate();
    message.creator = object.creator ?? "";
    message.chainId = object.chainId ?? "";
    message.valoper = object.valoper ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgUpdateValidatorSharesExchRate();
    if (object.creator !== void 0 && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.chain_id !== void 0 && object.chain_id !== null) {
      message.chainId = object.chain_id;
    }
    if (object.valoper !== void 0 && object.valoper !== null) {
      message.valoper = object.valoper;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.creator = message.creator === "" ? void 0 : message.creator;
    obj.chain_id = message.chainId === "" ? void 0 : message.chainId;
    obj.valoper = message.valoper === "" ? void 0 : message.valoper;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgUpdateValidatorSharesExchRate.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "stakeibc/UpdateValidatorSharesExchRate",
      value: MsgUpdateValidatorSharesExchRate.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgUpdateValidatorSharesExchRate.decode(message.value);
  },
  toProto(message) {
    return MsgUpdateValidatorSharesExchRate.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.stakeibc.MsgUpdateValidatorSharesExchRate",
      value: MsgUpdateValidatorSharesExchRate.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateValidatorSharesExchRateResponse() {
  return {};
}
const MsgUpdateValidatorSharesExchRateResponse = {
  typeUrl: "/stride.stakeibc.MsgUpdateValidatorSharesExchRateResponse",
  encode(_, writer = BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateValidatorSharesExchRateResponse();
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
    const message = createBaseMsgUpdateValidatorSharesExchRateResponse();
    return message;
  },
  fromAmino(_) {
    const message = createBaseMsgUpdateValidatorSharesExchRateResponse();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return MsgUpdateValidatorSharesExchRateResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return MsgUpdateValidatorSharesExchRateResponse.decode(message.value);
  },
  toProto(message) {
    return MsgUpdateValidatorSharesExchRateResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.stakeibc.MsgUpdateValidatorSharesExchRateResponse",
      value: MsgUpdateValidatorSharesExchRateResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCalibrateDelegation() {
  return {
    creator: "",
    chainId: "",
    valoper: ""
  };
}
const MsgCalibrateDelegation = {
  typeUrl: "/stride.stakeibc.MsgCalibrateDelegation",
  encode(message, writer = BinaryWriter.create()) {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.chainId !== "") {
      writer.uint32(18).string(message.chainId);
    }
    if (message.valoper !== "") {
      writer.uint32(26).string(message.valoper);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgCalibrateDelegation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.chainId = reader.string();
          break;
        case 3:
          message.valoper = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgCalibrateDelegation();
    message.creator = object.creator ?? "";
    message.chainId = object.chainId ?? "";
    message.valoper = object.valoper ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgCalibrateDelegation();
    if (object.creator !== void 0 && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.chain_id !== void 0 && object.chain_id !== null) {
      message.chainId = object.chain_id;
    }
    if (object.valoper !== void 0 && object.valoper !== null) {
      message.valoper = object.valoper;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.creator = message.creator === "" ? void 0 : message.creator;
    obj.chain_id = message.chainId === "" ? void 0 : message.chainId;
    obj.valoper = message.valoper === "" ? void 0 : message.valoper;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgCalibrateDelegation.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return MsgCalibrateDelegation.decode(message.value);
  },
  toProto(message) {
    return MsgCalibrateDelegation.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.stakeibc.MsgCalibrateDelegation",
      value: MsgCalibrateDelegation.encode(message).finish()
    };
  }
};
function createBaseMsgCalibrateDelegationResponse() {
  return {};
}
const MsgCalibrateDelegationResponse = {
  typeUrl: "/stride.stakeibc.MsgCalibrateDelegationResponse",
  encode(_, writer = BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgCalibrateDelegationResponse();
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
    const message = createBaseMsgCalibrateDelegationResponse();
    return message;
  },
  fromAmino(_) {
    const message = createBaseMsgCalibrateDelegationResponse();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return MsgCalibrateDelegationResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return MsgCalibrateDelegationResponse.decode(message.value);
  },
  toProto(message) {
    return MsgCalibrateDelegationResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.stakeibc.MsgCalibrateDelegationResponse",
      value: MsgCalibrateDelegationResponse.encode(message).finish()
    };
  }
};
function createBaseMsgResumeHostZone() {
  return {
    creator: "",
    chainId: ""
  };
}
const MsgResumeHostZone = {
  typeUrl: "/stride.stakeibc.MsgResumeHostZone",
  encode(message, writer = BinaryWriter.create()) {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.chainId !== "") {
      writer.uint32(18).string(message.chainId);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgResumeHostZone();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.chainId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgResumeHostZone();
    message.creator = object.creator ?? "";
    message.chainId = object.chainId ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgResumeHostZone();
    if (object.creator !== void 0 && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.chain_id !== void 0 && object.chain_id !== null) {
      message.chainId = object.chain_id;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.creator = message.creator === "" ? void 0 : message.creator;
    obj.chain_id = message.chainId === "" ? void 0 : message.chainId;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgResumeHostZone.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return MsgResumeHostZone.decode(message.value);
  },
  toProto(message) {
    return MsgResumeHostZone.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.stakeibc.MsgResumeHostZone",
      value: MsgResumeHostZone.encode(message).finish()
    };
  }
};
function createBaseMsgResumeHostZoneResponse() {
  return {};
}
const MsgResumeHostZoneResponse = {
  typeUrl: "/stride.stakeibc.MsgResumeHostZoneResponse",
  encode(_, writer = BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgResumeHostZoneResponse();
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
    const message = createBaseMsgResumeHostZoneResponse();
    return message;
  },
  fromAmino(_) {
    const message = createBaseMsgResumeHostZoneResponse();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return MsgResumeHostZoneResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return MsgResumeHostZoneResponse.decode(message.value);
  },
  toProto(message) {
    return MsgResumeHostZoneResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.stakeibc.MsgResumeHostZoneResponse",
      value: MsgResumeHostZoneResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCreateTradeRoute() {
  return {
    authority: "",
    hostChainId: "",
    strideToRewardConnectionId: "",
    strideToTradeConnectionId: "",
    hostToRewardTransferChannelId: "",
    rewardToTradeTransferChannelId: "",
    tradeToHostTransferChannelId: "",
    rewardDenomOnHost: "",
    rewardDenomOnReward: "",
    rewardDenomOnTrade: "",
    hostDenomOnTrade: "",
    hostDenomOnHost: "",
    poolId: BigInt(0),
    maxAllowedSwapLossRate: "",
    minSwapAmount: "",
    maxSwapAmount: "",
    minTransferAmount: ""
  };
}
const MsgCreateTradeRoute = {
  typeUrl: "/stride.stakeibc.MsgCreateTradeRoute",
  encode(message, writer = BinaryWriter.create()) {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.hostChainId !== "") {
      writer.uint32(18).string(message.hostChainId);
    }
    if (message.strideToRewardConnectionId !== "") {
      writer.uint32(26).string(message.strideToRewardConnectionId);
    }
    if (message.strideToTradeConnectionId !== "") {
      writer.uint32(34).string(message.strideToTradeConnectionId);
    }
    if (message.hostToRewardTransferChannelId !== "") {
      writer.uint32(42).string(message.hostToRewardTransferChannelId);
    }
    if (message.rewardToTradeTransferChannelId !== "") {
      writer.uint32(50).string(message.rewardToTradeTransferChannelId);
    }
    if (message.tradeToHostTransferChannelId !== "") {
      writer.uint32(58).string(message.tradeToHostTransferChannelId);
    }
    if (message.rewardDenomOnHost !== "") {
      writer.uint32(66).string(message.rewardDenomOnHost);
    }
    if (message.rewardDenomOnReward !== "") {
      writer.uint32(74).string(message.rewardDenomOnReward);
    }
    if (message.rewardDenomOnTrade !== "") {
      writer.uint32(82).string(message.rewardDenomOnTrade);
    }
    if (message.hostDenomOnTrade !== "") {
      writer.uint32(90).string(message.hostDenomOnTrade);
    }
    if (message.hostDenomOnHost !== "") {
      writer.uint32(98).string(message.hostDenomOnHost);
    }
    if (message.poolId !== BigInt(0)) {
      writer.uint32(104).uint64(message.poolId);
    }
    if (message.maxAllowedSwapLossRate !== "") {
      writer.uint32(114).string(message.maxAllowedSwapLossRate);
    }
    if (message.minSwapAmount !== "") {
      writer.uint32(122).string(message.minSwapAmount);
    }
    if (message.maxSwapAmount !== "") {
      writer.uint32(130).string(message.maxSwapAmount);
    }
    if (message.minTransferAmount !== "") {
      writer.uint32(138).string(message.minTransferAmount);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateTradeRoute();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.hostChainId = reader.string();
          break;
        case 3:
          message.strideToRewardConnectionId = reader.string();
          break;
        case 4:
          message.strideToTradeConnectionId = reader.string();
          break;
        case 5:
          message.hostToRewardTransferChannelId = reader.string();
          break;
        case 6:
          message.rewardToTradeTransferChannelId = reader.string();
          break;
        case 7:
          message.tradeToHostTransferChannelId = reader.string();
          break;
        case 8:
          message.rewardDenomOnHost = reader.string();
          break;
        case 9:
          message.rewardDenomOnReward = reader.string();
          break;
        case 10:
          message.rewardDenomOnTrade = reader.string();
          break;
        case 11:
          message.hostDenomOnTrade = reader.string();
          break;
        case 12:
          message.hostDenomOnHost = reader.string();
          break;
        case 13:
          message.poolId = reader.uint64();
          break;
        case 14:
          message.maxAllowedSwapLossRate = reader.string();
          break;
        case 15:
          message.minSwapAmount = reader.string();
          break;
        case 16:
          message.maxSwapAmount = reader.string();
          break;
        case 17:
          message.minTransferAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgCreateTradeRoute();
    message.authority = object.authority ?? "";
    message.hostChainId = object.hostChainId ?? "";
    message.strideToRewardConnectionId = object.strideToRewardConnectionId ?? "";
    message.strideToTradeConnectionId = object.strideToTradeConnectionId ?? "";
    message.hostToRewardTransferChannelId = object.hostToRewardTransferChannelId ?? "";
    message.rewardToTradeTransferChannelId = object.rewardToTradeTransferChannelId ?? "";
    message.tradeToHostTransferChannelId = object.tradeToHostTransferChannelId ?? "";
    message.rewardDenomOnHost = object.rewardDenomOnHost ?? "";
    message.rewardDenomOnReward = object.rewardDenomOnReward ?? "";
    message.rewardDenomOnTrade = object.rewardDenomOnTrade ?? "";
    message.hostDenomOnTrade = object.hostDenomOnTrade ?? "";
    message.hostDenomOnHost = object.hostDenomOnHost ?? "";
    message.poolId = object.poolId !== void 0 && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.maxAllowedSwapLossRate = object.maxAllowedSwapLossRate ?? "";
    message.minSwapAmount = object.minSwapAmount ?? "";
    message.maxSwapAmount = object.maxSwapAmount ?? "";
    message.minTransferAmount = object.minTransferAmount ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgCreateTradeRoute();
    if (object.authority !== void 0 && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.host_chain_id !== void 0 && object.host_chain_id !== null) {
      message.hostChainId = object.host_chain_id;
    }
    if (object.stride_to_reward_connection_id !== void 0 && object.stride_to_reward_connection_id !== null) {
      message.strideToRewardConnectionId = object.stride_to_reward_connection_id;
    }
    if (object.stride_to_trade_connection_id !== void 0 && object.stride_to_trade_connection_id !== null) {
      message.strideToTradeConnectionId = object.stride_to_trade_connection_id;
    }
    if (object.host_to_reward_transfer_channel_id !== void 0 && object.host_to_reward_transfer_channel_id !== null) {
      message.hostToRewardTransferChannelId = object.host_to_reward_transfer_channel_id;
    }
    if (object.reward_to_trade_transfer_channel_id !== void 0 && object.reward_to_trade_transfer_channel_id !== null) {
      message.rewardToTradeTransferChannelId = object.reward_to_trade_transfer_channel_id;
    }
    if (object.trade_to_host_transfer_channel_id !== void 0 && object.trade_to_host_transfer_channel_id !== null) {
      message.tradeToHostTransferChannelId = object.trade_to_host_transfer_channel_id;
    }
    if (object.reward_denom_on_host !== void 0 && object.reward_denom_on_host !== null) {
      message.rewardDenomOnHost = object.reward_denom_on_host;
    }
    if (object.reward_denom_on_reward !== void 0 && object.reward_denom_on_reward !== null) {
      message.rewardDenomOnReward = object.reward_denom_on_reward;
    }
    if (object.reward_denom_on_trade !== void 0 && object.reward_denom_on_trade !== null) {
      message.rewardDenomOnTrade = object.reward_denom_on_trade;
    }
    if (object.host_denom_on_trade !== void 0 && object.host_denom_on_trade !== null) {
      message.hostDenomOnTrade = object.host_denom_on_trade;
    }
    if (object.host_denom_on_host !== void 0 && object.host_denom_on_host !== null) {
      message.hostDenomOnHost = object.host_denom_on_host;
    }
    if (object.pool_id !== void 0 && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
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
    if (object.min_transfer_amount !== void 0 && object.min_transfer_amount !== null) {
      message.minTransferAmount = object.min_transfer_amount;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.authority = message.authority === "" ? void 0 : message.authority;
    obj.host_chain_id = message.hostChainId === "" ? void 0 : message.hostChainId;
    obj.stride_to_reward_connection_id = message.strideToRewardConnectionId === "" ? void 0 : message.strideToRewardConnectionId;
    obj.stride_to_trade_connection_id = message.strideToTradeConnectionId === "" ? void 0 : message.strideToTradeConnectionId;
    obj.host_to_reward_transfer_channel_id = message.hostToRewardTransferChannelId === "" ? void 0 : message.hostToRewardTransferChannelId;
    obj.reward_to_trade_transfer_channel_id = message.rewardToTradeTransferChannelId === "" ? void 0 : message.rewardToTradeTransferChannelId;
    obj.trade_to_host_transfer_channel_id = message.tradeToHostTransferChannelId === "" ? void 0 : message.tradeToHostTransferChannelId;
    obj.reward_denom_on_host = message.rewardDenomOnHost === "" ? void 0 : message.rewardDenomOnHost;
    obj.reward_denom_on_reward = message.rewardDenomOnReward === "" ? void 0 : message.rewardDenomOnReward;
    obj.reward_denom_on_trade = message.rewardDenomOnTrade === "" ? void 0 : message.rewardDenomOnTrade;
    obj.host_denom_on_trade = message.hostDenomOnTrade === "" ? void 0 : message.hostDenomOnTrade;
    obj.host_denom_on_host = message.hostDenomOnHost === "" ? void 0 : message.hostDenomOnHost;
    obj.pool_id = message.poolId !== BigInt(0) ? message.poolId?.toString() : void 0;
    obj.max_allowed_swap_loss_rate = message.maxAllowedSwapLossRate === "" ? void 0 : message.maxAllowedSwapLossRate;
    obj.min_swap_amount = message.minSwapAmount === "" ? void 0 : message.minSwapAmount;
    obj.max_swap_amount = message.maxSwapAmount === "" ? void 0 : message.maxSwapAmount;
    obj.min_transfer_amount = message.minTransferAmount === "" ? void 0 : message.minTransferAmount;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgCreateTradeRoute.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "stride/x/stakeibc/MsgCreateTradeRoute",
      value: MsgCreateTradeRoute.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgCreateTradeRoute.decode(message.value);
  },
  toProto(message) {
    return MsgCreateTradeRoute.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.stakeibc.MsgCreateTradeRoute",
      value: MsgCreateTradeRoute.encode(message).finish()
    };
  }
};
function createBaseMsgCreateTradeRouteResponse() {
  return {};
}
const MsgCreateTradeRouteResponse = {
  typeUrl: "/stride.stakeibc.MsgCreateTradeRouteResponse",
  encode(_, writer = BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateTradeRouteResponse();
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
    const message = createBaseMsgCreateTradeRouteResponse();
    return message;
  },
  fromAmino(_) {
    const message = createBaseMsgCreateTradeRouteResponse();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return MsgCreateTradeRouteResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return MsgCreateTradeRouteResponse.decode(message.value);
  },
  toProto(message) {
    return MsgCreateTradeRouteResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.stakeibc.MsgCreateTradeRouteResponse",
      value: MsgCreateTradeRouteResponse.encode(message).finish()
    };
  }
};
function createBaseMsgDeleteTradeRoute() {
  return {
    authority: "",
    rewardDenom: "",
    hostDenom: ""
  };
}
const MsgDeleteTradeRoute = {
  typeUrl: "/stride.stakeibc.MsgDeleteTradeRoute",
  encode(message, writer = BinaryWriter.create()) {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.rewardDenom !== "") {
      writer.uint32(18).string(message.rewardDenom);
    }
    if (message.hostDenom !== "") {
      writer.uint32(26).string(message.hostDenom);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteTradeRoute();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.rewardDenom = reader.string();
          break;
        case 3:
          message.hostDenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgDeleteTradeRoute();
    message.authority = object.authority ?? "";
    message.rewardDenom = object.rewardDenom ?? "";
    message.hostDenom = object.hostDenom ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgDeleteTradeRoute();
    if (object.authority !== void 0 && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.reward_denom !== void 0 && object.reward_denom !== null) {
      message.rewardDenom = object.reward_denom;
    }
    if (object.host_denom !== void 0 && object.host_denom !== null) {
      message.hostDenom = object.host_denom;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.authority = message.authority === "" ? void 0 : message.authority;
    obj.reward_denom = message.rewardDenom === "" ? void 0 : message.rewardDenom;
    obj.host_denom = message.hostDenom === "" ? void 0 : message.hostDenom;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgDeleteTradeRoute.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "stride/x/stakeibc/MsgDeleteTradeRoute",
      value: MsgDeleteTradeRoute.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgDeleteTradeRoute.decode(message.value);
  },
  toProto(message) {
    return MsgDeleteTradeRoute.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.stakeibc.MsgDeleteTradeRoute",
      value: MsgDeleteTradeRoute.encode(message).finish()
    };
  }
};
function createBaseMsgDeleteTradeRouteResponse() {
  return {};
}
const MsgDeleteTradeRouteResponse = {
  typeUrl: "/stride.stakeibc.MsgDeleteTradeRouteResponse",
  encode(_, writer = BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteTradeRouteResponse();
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
    const message = createBaseMsgDeleteTradeRouteResponse();
    return message;
  },
  fromAmino(_) {
    const message = createBaseMsgDeleteTradeRouteResponse();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return MsgDeleteTradeRouteResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return MsgDeleteTradeRouteResponse.decode(message.value);
  },
  toProto(message) {
    return MsgDeleteTradeRouteResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.stakeibc.MsgDeleteTradeRouteResponse",
      value: MsgDeleteTradeRouteResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateTradeRoute() {
  return {
    authority: "",
    rewardDenom: "",
    hostDenom: "",
    poolId: BigInt(0),
    maxAllowedSwapLossRate: "",
    minSwapAmount: "",
    maxSwapAmount: "",
    minTransferAmount: ""
  };
}
const MsgUpdateTradeRoute = {
  typeUrl: "/stride.stakeibc.MsgUpdateTradeRoute",
  encode(message, writer = BinaryWriter.create()) {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.rewardDenom !== "") {
      writer.uint32(18).string(message.rewardDenom);
    }
    if (message.hostDenom !== "") {
      writer.uint32(26).string(message.hostDenom);
    }
    if (message.poolId !== BigInt(0)) {
      writer.uint32(32).uint64(message.poolId);
    }
    if (message.maxAllowedSwapLossRate !== "") {
      writer.uint32(42).string(message.maxAllowedSwapLossRate);
    }
    if (message.minSwapAmount !== "") {
      writer.uint32(50).string(message.minSwapAmount);
    }
    if (message.maxSwapAmount !== "") {
      writer.uint32(58).string(message.maxSwapAmount);
    }
    if (message.minTransferAmount !== "") {
      writer.uint32(138).string(message.minTransferAmount);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateTradeRoute();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.rewardDenom = reader.string();
          break;
        case 3:
          message.hostDenom = reader.string();
          break;
        case 4:
          message.poolId = reader.uint64();
          break;
        case 5:
          message.maxAllowedSwapLossRate = reader.string();
          break;
        case 6:
          message.minSwapAmount = reader.string();
          break;
        case 7:
          message.maxSwapAmount = reader.string();
          break;
        case 17:
          message.minTransferAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgUpdateTradeRoute();
    message.authority = object.authority ?? "";
    message.rewardDenom = object.rewardDenom ?? "";
    message.hostDenom = object.hostDenom ?? "";
    message.poolId = object.poolId !== void 0 && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.maxAllowedSwapLossRate = object.maxAllowedSwapLossRate ?? "";
    message.minSwapAmount = object.minSwapAmount ?? "";
    message.maxSwapAmount = object.maxSwapAmount ?? "";
    message.minTransferAmount = object.minTransferAmount ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgUpdateTradeRoute();
    if (object.authority !== void 0 && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.reward_denom !== void 0 && object.reward_denom !== null) {
      message.rewardDenom = object.reward_denom;
    }
    if (object.host_denom !== void 0 && object.host_denom !== null) {
      message.hostDenom = object.host_denom;
    }
    if (object.pool_id !== void 0 && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
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
    if (object.min_transfer_amount !== void 0 && object.min_transfer_amount !== null) {
      message.minTransferAmount = object.min_transfer_amount;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.authority = message.authority === "" ? void 0 : message.authority;
    obj.reward_denom = message.rewardDenom === "" ? void 0 : message.rewardDenom;
    obj.host_denom = message.hostDenom === "" ? void 0 : message.hostDenom;
    obj.pool_id = message.poolId !== BigInt(0) ? message.poolId?.toString() : void 0;
    obj.max_allowed_swap_loss_rate = message.maxAllowedSwapLossRate === "" ? void 0 : message.maxAllowedSwapLossRate;
    obj.min_swap_amount = message.minSwapAmount === "" ? void 0 : message.minSwapAmount;
    obj.max_swap_amount = message.maxSwapAmount === "" ? void 0 : message.maxSwapAmount;
    obj.min_transfer_amount = message.minTransferAmount === "" ? void 0 : message.minTransferAmount;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgUpdateTradeRoute.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "stride/x/stakeibc/MsgUpdateTradeRoute",
      value: MsgUpdateTradeRoute.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgUpdateTradeRoute.decode(message.value);
  },
  toProto(message) {
    return MsgUpdateTradeRoute.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.stakeibc.MsgUpdateTradeRoute",
      value: MsgUpdateTradeRoute.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateTradeRouteResponse() {
  return {};
}
const MsgUpdateTradeRouteResponse = {
  typeUrl: "/stride.stakeibc.MsgUpdateTradeRouteResponse",
  encode(_, writer = BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateTradeRouteResponse();
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
    const message = createBaseMsgUpdateTradeRouteResponse();
    return message;
  },
  fromAmino(_) {
    const message = createBaseMsgUpdateTradeRouteResponse();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return MsgUpdateTradeRouteResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return MsgUpdateTradeRouteResponse.decode(message.value);
  },
  toProto(message) {
    return MsgUpdateTradeRouteResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.stakeibc.MsgUpdateTradeRouteResponse",
      value: MsgUpdateTradeRouteResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSetCommunityPoolRebate() {
  return {
    creator: "",
    chainId: "",
    rebateRate: "",
    liquidStakedStTokenAmount: ""
  };
}
const MsgSetCommunityPoolRebate = {
  typeUrl: "/stride.stakeibc.MsgSetCommunityPoolRebate",
  encode(message, writer = BinaryWriter.create()) {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.chainId !== "") {
      writer.uint32(18).string(message.chainId);
    }
    if (message.rebateRate !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.rebateRate, 18).atomics);
    }
    if (message.liquidStakedStTokenAmount !== "") {
      writer.uint32(34).string(message.liquidStakedStTokenAmount);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgSetCommunityPoolRebate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.chainId = reader.string();
          break;
        case 3:
          message.rebateRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 4:
          message.liquidStakedStTokenAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgSetCommunityPoolRebate();
    message.creator = object.creator ?? "";
    message.chainId = object.chainId ?? "";
    message.rebateRate = object.rebateRate ?? "";
    message.liquidStakedStTokenAmount = object.liquidStakedStTokenAmount ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgSetCommunityPoolRebate();
    if (object.creator !== void 0 && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.chain_id !== void 0 && object.chain_id !== null) {
      message.chainId = object.chain_id;
    }
    if (object.rebate_rate !== void 0 && object.rebate_rate !== null) {
      message.rebateRate = object.rebate_rate;
    }
    if (object.liquid_staked_st_token_amount !== void 0 && object.liquid_staked_st_token_amount !== null) {
      message.liquidStakedStTokenAmount = object.liquid_staked_st_token_amount;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.creator = message.creator === "" ? void 0 : message.creator;
    obj.chain_id = message.chainId === "" ? void 0 : message.chainId;
    obj.rebate_rate = message.rebateRate === "" ? void 0 : Decimal.fromUserInput(message.rebateRate, 18).atomics;
    obj.liquid_staked_st_token_amount = message.liquidStakedStTokenAmount === "" ? void 0 : message.liquidStakedStTokenAmount;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgSetCommunityPoolRebate.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "stride/x/stakeibc/MsgSetCommunityPoolRebate",
      value: MsgSetCommunityPoolRebate.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgSetCommunityPoolRebate.decode(message.value);
  },
  toProto(message) {
    return MsgSetCommunityPoolRebate.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.stakeibc.MsgSetCommunityPoolRebate",
      value: MsgSetCommunityPoolRebate.encode(message).finish()
    };
  }
};
function createBaseMsgSetCommunityPoolRebateResponse() {
  return {};
}
const MsgSetCommunityPoolRebateResponse = {
  typeUrl: "/stride.stakeibc.MsgSetCommunityPoolRebateResponse",
  encode(_, writer = BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgSetCommunityPoolRebateResponse();
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
    const message = createBaseMsgSetCommunityPoolRebateResponse();
    return message;
  },
  fromAmino(_) {
    const message = createBaseMsgSetCommunityPoolRebateResponse();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return MsgSetCommunityPoolRebateResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return MsgSetCommunityPoolRebateResponse.decode(message.value);
  },
  toProto(message) {
    return MsgSetCommunityPoolRebateResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.stakeibc.MsgSetCommunityPoolRebateResponse",
      value: MsgSetCommunityPoolRebateResponse.encode(message).finish()
    };
  }
};
function createBaseMsgToggleTradeController() {
  return {
    creator: "",
    chainId: "",
    permissionChange: 0,
    address: "",
    legacy: false
  };
}
const MsgToggleTradeController = {
  typeUrl: "/stride.stakeibc.MsgToggleTradeController",
  encode(message, writer = BinaryWriter.create()) {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.chainId !== "") {
      writer.uint32(18).string(message.chainId);
    }
    if (message.permissionChange !== 0) {
      writer.uint32(24).int32(message.permissionChange);
    }
    if (message.address !== "") {
      writer.uint32(34).string(message.address);
    }
    if (message.legacy === true) {
      writer.uint32(40).bool(message.legacy);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgToggleTradeController();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.chainId = reader.string();
          break;
        case 3:
          message.permissionChange = reader.int32();
          break;
        case 4:
          message.address = reader.string();
          break;
        case 5:
          message.legacy = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgToggleTradeController();
    message.creator = object.creator ?? "";
    message.chainId = object.chainId ?? "";
    message.permissionChange = object.permissionChange ?? 0;
    message.address = object.address ?? "";
    message.legacy = object.legacy ?? false;
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgToggleTradeController();
    if (object.creator !== void 0 && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.chain_id !== void 0 && object.chain_id !== null) {
      message.chainId = object.chain_id;
    }
    if (object.permission_change !== void 0 && object.permission_change !== null) {
      message.permissionChange = object.permission_change;
    }
    if (object.address !== void 0 && object.address !== null) {
      message.address = object.address;
    }
    if (object.legacy !== void 0 && object.legacy !== null) {
      message.legacy = object.legacy;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.creator = message.creator === "" ? void 0 : message.creator;
    obj.chain_id = message.chainId === "" ? void 0 : message.chainId;
    obj.permission_change = message.permissionChange === 0 ? void 0 : message.permissionChange;
    obj.address = message.address === "" ? void 0 : message.address;
    obj.legacy = message.legacy === false ? void 0 : message.legacy;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgToggleTradeController.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "stride/x/stakeibc/MsgToggleTradeController",
      value: MsgToggleTradeController.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgToggleTradeController.decode(message.value);
  },
  toProto(message) {
    return MsgToggleTradeController.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.stakeibc.MsgToggleTradeController",
      value: MsgToggleTradeController.encode(message).finish()
    };
  }
};
function createBaseMsgToggleTradeControllerResponse() {
  return {};
}
const MsgToggleTradeControllerResponse = {
  typeUrl: "/stride.stakeibc.MsgToggleTradeControllerResponse",
  encode(_, writer = BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgToggleTradeControllerResponse();
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
    const message = createBaseMsgToggleTradeControllerResponse();
    return message;
  },
  fromAmino(_) {
    const message = createBaseMsgToggleTradeControllerResponse();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return MsgToggleTradeControllerResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return MsgToggleTradeControllerResponse.decode(message.value);
  },
  toProto(message) {
    return MsgToggleTradeControllerResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.stakeibc.MsgToggleTradeControllerResponse",
      value: MsgToggleTradeControllerResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateHostZoneParams() {
  return {
    authority: "",
    chainId: "",
    maxMessagesPerIcaTx: BigInt(0)
  };
}
const MsgUpdateHostZoneParams = {
  typeUrl: "/stride.stakeibc.MsgUpdateHostZoneParams",
  encode(message, writer = BinaryWriter.create()) {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.chainId !== "") {
      writer.uint32(18).string(message.chainId);
    }
    if (message.maxMessagesPerIcaTx !== BigInt(0)) {
      writer.uint32(24).uint64(message.maxMessagesPerIcaTx);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateHostZoneParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.chainId = reader.string();
          break;
        case 3:
          message.maxMessagesPerIcaTx = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgUpdateHostZoneParams();
    message.authority = object.authority ?? "";
    message.chainId = object.chainId ?? "";
    message.maxMessagesPerIcaTx = object.maxMessagesPerIcaTx !== void 0 && object.maxMessagesPerIcaTx !== null ? BigInt(object.maxMessagesPerIcaTx.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgUpdateHostZoneParams();
    if (object.authority !== void 0 && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.chain_id !== void 0 && object.chain_id !== null) {
      message.chainId = object.chain_id;
    }
    if (object.max_messages_per_ica_tx !== void 0 && object.max_messages_per_ica_tx !== null) {
      message.maxMessagesPerIcaTx = BigInt(object.max_messages_per_ica_tx);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.authority = message.authority === "" ? void 0 : message.authority;
    obj.chain_id = message.chainId === "" ? void 0 : message.chainId;
    obj.max_messages_per_ica_tx = message.maxMessagesPerIcaTx !== BigInt(0) ? message.maxMessagesPerIcaTx?.toString() : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgUpdateHostZoneParams.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "stride/x/stakeibc/MsgUpdateHostZoneParams",
      value: MsgUpdateHostZoneParams.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgUpdateHostZoneParams.decode(message.value);
  },
  toProto(message) {
    return MsgUpdateHostZoneParams.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.stakeibc.MsgUpdateHostZoneParams",
      value: MsgUpdateHostZoneParams.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateHostZoneParamsResponse() {
  return {};
}
const MsgUpdateHostZoneParamsResponse = {
  typeUrl: "/stride.stakeibc.MsgUpdateHostZoneParamsResponse",
  encode(_, writer = BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateHostZoneParamsResponse();
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
    const message = createBaseMsgUpdateHostZoneParamsResponse();
    return message;
  },
  fromAmino(_) {
    const message = createBaseMsgUpdateHostZoneParamsResponse();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return MsgUpdateHostZoneParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return MsgUpdateHostZoneParamsResponse.decode(message.value);
  },
  toProto(message) {
    return MsgUpdateHostZoneParamsResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.stakeibc.MsgUpdateHostZoneParamsResponse",
      value: MsgUpdateHostZoneParamsResponse.encode(message).finish()
    };
  }
};
export {
  AuthzPermissionChange,
  AuthzPermissionChangeAmino,
  AuthzPermissionChangeSDKType,
  MsgAddValidators,
  MsgAddValidatorsResponse,
  MsgCalibrateDelegation,
  MsgCalibrateDelegationResponse,
  MsgChangeValidatorWeights,
  MsgChangeValidatorWeightsResponse,
  MsgClaimUndelegatedTokens,
  MsgClaimUndelegatedTokensResponse,
  MsgClearBalance,
  MsgClearBalanceResponse,
  MsgCloseDelegationChannel,
  MsgCloseDelegationChannelResponse,
  MsgCreateTradeRoute,
  MsgCreateTradeRouteResponse,
  MsgDeleteTradeRoute,
  MsgDeleteTradeRouteResponse,
  MsgDeleteValidator,
  MsgDeleteValidatorResponse,
  MsgLSMLiquidStake,
  MsgLSMLiquidStakeResponse,
  MsgLiquidStake,
  MsgLiquidStakeResponse,
  MsgRebalanceValidators,
  MsgRebalanceValidatorsResponse,
  MsgRedeemStake,
  MsgRedeemStakeResponse,
  MsgRegisterHostZone,
  MsgRegisterHostZoneResponse,
  MsgRestoreInterchainAccount,
  MsgRestoreInterchainAccountResponse,
  MsgResumeHostZone,
  MsgResumeHostZoneResponse,
  MsgSetCommunityPoolRebate,
  MsgSetCommunityPoolRebateResponse,
  MsgToggleTradeController,
  MsgToggleTradeControllerResponse,
  MsgUpdateHostZoneParams,
  MsgUpdateHostZoneParamsResponse,
  MsgUpdateInnerRedemptionRateBounds,
  MsgUpdateInnerRedemptionRateBoundsResponse,
  MsgUpdateTradeRoute,
  MsgUpdateTradeRouteResponse,
  MsgUpdateValidatorSharesExchRate,
  MsgUpdateValidatorSharesExchRateResponse,
  ValidatorWeight,
  authzPermissionChangeFromJSON,
  authzPermissionChangeToJSON
};
