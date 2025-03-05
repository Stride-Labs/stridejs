import { Coin } from "../../base/v1beta1/coin";
import { Params } from "./distribution";
import { BinaryReader, BinaryWriter } from "../../../binary";
function createBaseMsgSetWithdrawAddress() {
  return {
    delegatorAddress: "",
    withdrawAddress: ""
  };
}
const MsgSetWithdrawAddress = {
  typeUrl: "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress",
  encode(message, writer = BinaryWriter.create()) {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.withdrawAddress !== "") {
      writer.uint32(18).string(message.withdrawAddress);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgSetWithdrawAddress();
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
    const message = createBaseMsgSetWithdrawAddress();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.withdrawAddress = object.withdrawAddress ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgSetWithdrawAddress();
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
    return MsgSetWithdrawAddress.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgModifyWithdrawAddress",
      value: MsgSetWithdrawAddress.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgSetWithdrawAddress.decode(message.value);
  },
  toProto(message) {
    return MsgSetWithdrawAddress.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress",
      value: MsgSetWithdrawAddress.encode(message).finish()
    };
  }
};
function createBaseMsgSetWithdrawAddressResponse() {
  return {};
}
const MsgSetWithdrawAddressResponse = {
  typeUrl: "/cosmos.distribution.v1beta1.MsgSetWithdrawAddressResponse",
  encode(_, writer = BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgSetWithdrawAddressResponse();
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
    const message = createBaseMsgSetWithdrawAddressResponse();
    return message;
  },
  fromAmino(_) {
    const message = createBaseMsgSetWithdrawAddressResponse();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return MsgSetWithdrawAddressResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgSetWithdrawAddressResponse",
      value: MsgSetWithdrawAddressResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgSetWithdrawAddressResponse.decode(message.value);
  },
  toProto(message) {
    return MsgSetWithdrawAddressResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.MsgSetWithdrawAddressResponse",
      value: MsgSetWithdrawAddressResponse.encode(message).finish()
    };
  }
};
function createBaseMsgWithdrawDelegatorReward() {
  return {
    delegatorAddress: "",
    validatorAddress: ""
  };
}
const MsgWithdrawDelegatorReward = {
  typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward",
  encode(message, writer = BinaryWriter.create()) {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.validatorAddress !== "") {
      writer.uint32(18).string(message.validatorAddress);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawDelegatorReward();
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
    const message = createBaseMsgWithdrawDelegatorReward();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.validatorAddress = object.validatorAddress ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgWithdrawDelegatorReward();
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
    return MsgWithdrawDelegatorReward.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgWithdrawDelegationReward",
      value: MsgWithdrawDelegatorReward.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgWithdrawDelegatorReward.decode(message.value);
  },
  toProto(message) {
    return MsgWithdrawDelegatorReward.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward",
      value: MsgWithdrawDelegatorReward.encode(message).finish()
    };
  }
};
function createBaseMsgWithdrawDelegatorRewardResponse() {
  return {
    amount: []
  };
}
const MsgWithdrawDelegatorRewardResponse = {
  typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorRewardResponse",
  encode(message, writer = BinaryWriter.create()) {
    for (const v of message.amount) {
      Coin.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawDelegatorRewardResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgWithdrawDelegatorRewardResponse();
    message.amount = object.amount?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgWithdrawDelegatorRewardResponse();
    message.amount = object.amount?.map((e) => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.amount) {
      obj.amount = message.amount.map((e) => e ? Coin.toAmino(e) : void 0);
    } else {
      obj.amount = message.amount;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return MsgWithdrawDelegatorRewardResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgWithdrawDelegatorRewardResponse",
      value: MsgWithdrawDelegatorRewardResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgWithdrawDelegatorRewardResponse.decode(message.value);
  },
  toProto(message) {
    return MsgWithdrawDelegatorRewardResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorRewardResponse",
      value: MsgWithdrawDelegatorRewardResponse.encode(message).finish()
    };
  }
};
function createBaseMsgWithdrawValidatorCommission() {
  return {
    validatorAddress: ""
  };
}
const MsgWithdrawValidatorCommission = {
  typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission",
  encode(message, writer = BinaryWriter.create()) {
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawValidatorCommission();
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
    const message = createBaseMsgWithdrawValidatorCommission();
    message.validatorAddress = object.validatorAddress ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgWithdrawValidatorCommission();
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
    return MsgWithdrawValidatorCommission.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgWithdrawValidatorCommission",
      value: MsgWithdrawValidatorCommission.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgWithdrawValidatorCommission.decode(message.value);
  },
  toProto(message) {
    return MsgWithdrawValidatorCommission.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission",
      value: MsgWithdrawValidatorCommission.encode(message).finish()
    };
  }
};
function createBaseMsgWithdrawValidatorCommissionResponse() {
  return {
    amount: []
  };
}
const MsgWithdrawValidatorCommissionResponse = {
  typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommissionResponse",
  encode(message, writer = BinaryWriter.create()) {
    for (const v of message.amount) {
      Coin.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawValidatorCommissionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgWithdrawValidatorCommissionResponse();
    message.amount = object.amount?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgWithdrawValidatorCommissionResponse();
    message.amount = object.amount?.map((e) => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.amount) {
      obj.amount = message.amount.map((e) => e ? Coin.toAmino(e) : void 0);
    } else {
      obj.amount = message.amount;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return MsgWithdrawValidatorCommissionResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgWithdrawValidatorCommissionResponse",
      value: MsgWithdrawValidatorCommissionResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgWithdrawValidatorCommissionResponse.decode(message.value);
  },
  toProto(message) {
    return MsgWithdrawValidatorCommissionResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommissionResponse",
      value: MsgWithdrawValidatorCommissionResponse.encode(message).finish()
    };
  }
};
function createBaseMsgFundCommunityPool() {
  return {
    amount: [],
    depositor: ""
  };
}
const MsgFundCommunityPool = {
  typeUrl: "/cosmos.distribution.v1beta1.MsgFundCommunityPool",
  encode(message, writer = BinaryWriter.create()) {
    for (const v of message.amount) {
      Coin.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.depositor !== "") {
      writer.uint32(18).string(message.depositor);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgFundCommunityPool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.depositor = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgFundCommunityPool();
    message.amount = object.amount?.map((e) => Coin.fromPartial(e)) || [];
    message.depositor = object.depositor ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgFundCommunityPool();
    message.amount = object.amount?.map((e) => Coin.fromAmino(e)) || [];
    if (object.depositor !== void 0 && object.depositor !== null) {
      message.depositor = object.depositor;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.amount) {
      obj.amount = message.amount.map((e) => e ? Coin.toAmino(e) : void 0);
    } else {
      obj.amount = message.amount;
    }
    obj.depositor = message.depositor === "" ? void 0 : message.depositor;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgFundCommunityPool.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgFundCommunityPool",
      value: MsgFundCommunityPool.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgFundCommunityPool.decode(message.value);
  },
  toProto(message) {
    return MsgFundCommunityPool.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.MsgFundCommunityPool",
      value: MsgFundCommunityPool.encode(message).finish()
    };
  }
};
function createBaseMsgFundCommunityPoolResponse() {
  return {};
}
const MsgFundCommunityPoolResponse = {
  typeUrl: "/cosmos.distribution.v1beta1.MsgFundCommunityPoolResponse",
  encode(_, writer = BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgFundCommunityPoolResponse();
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
    const message = createBaseMsgFundCommunityPoolResponse();
    return message;
  },
  fromAmino(_) {
    const message = createBaseMsgFundCommunityPoolResponse();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return MsgFundCommunityPoolResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgFundCommunityPoolResponse",
      value: MsgFundCommunityPoolResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgFundCommunityPoolResponse.decode(message.value);
  },
  toProto(message) {
    return MsgFundCommunityPoolResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.MsgFundCommunityPoolResponse",
      value: MsgFundCommunityPoolResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateParams() {
  return {
    authority: "",
    params: Params.fromPartial({})
  };
}
const MsgUpdateParams = {
  typeUrl: "/cosmos.distribution.v1beta1.MsgUpdateParams",
  encode(message, writer = BinaryWriter.create()) {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== void 0) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgUpdateParams();
    message.authority = object.authority ?? "";
    message.params = object.params !== void 0 && object.params !== null ? Params.fromPartial(object.params) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgUpdateParams();
    if (object.authority !== void 0 && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.params !== void 0 && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.authority = message.authority === "" ? void 0 : message.authority;
    obj.params = message.params ? Params.toAmino(message.params) : Params.toAmino(Params.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object) {
    return MsgUpdateParams.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/distribution/MsgUpdateParams",
      value: MsgUpdateParams.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgUpdateParams.decode(message.value);
  },
  toProto(message) {
    return MsgUpdateParams.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.MsgUpdateParams",
      value: MsgUpdateParams.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateParamsResponse() {
  return {};
}
const MsgUpdateParamsResponse = {
  typeUrl: "/cosmos.distribution.v1beta1.MsgUpdateParamsResponse",
  encode(_, writer = BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParamsResponse();
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
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  fromAmino(_) {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return MsgUpdateParamsResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgUpdateParamsResponse.decode(message.value);
  },
  toProto(message) {
    return MsgUpdateParamsResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCommunityPoolSpend() {
  return {
    authority: "",
    recipient: "",
    amount: []
  };
}
const MsgCommunityPoolSpend = {
  typeUrl: "/cosmos.distribution.v1beta1.MsgCommunityPoolSpend",
  encode(message, writer = BinaryWriter.create()) {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.recipient !== "") {
      writer.uint32(18).string(message.recipient);
    }
    for (const v of message.amount) {
      Coin.encode(v, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgCommunityPoolSpend();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.recipient = reader.string();
          break;
        case 3:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgCommunityPoolSpend();
    message.authority = object.authority ?? "";
    message.recipient = object.recipient ?? "";
    message.amount = object.amount?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgCommunityPoolSpend();
    if (object.authority !== void 0 && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.recipient !== void 0 && object.recipient !== null) {
      message.recipient = object.recipient;
    }
    message.amount = object.amount?.map((e) => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.authority = message.authority === "" ? void 0 : message.authority;
    obj.recipient = message.recipient === "" ? void 0 : message.recipient;
    if (message.amount) {
      obj.amount = message.amount.map((e) => e ? Coin.toAmino(e) : void 0);
    } else {
      obj.amount = message.amount;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return MsgCommunityPoolSpend.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/distr/MsgCommunityPoolSpend",
      value: MsgCommunityPoolSpend.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgCommunityPoolSpend.decode(message.value);
  },
  toProto(message) {
    return MsgCommunityPoolSpend.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.MsgCommunityPoolSpend",
      value: MsgCommunityPoolSpend.encode(message).finish()
    };
  }
};
function createBaseMsgCommunityPoolSpendResponse() {
  return {};
}
const MsgCommunityPoolSpendResponse = {
  typeUrl: "/cosmos.distribution.v1beta1.MsgCommunityPoolSpendResponse",
  encode(_, writer = BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgCommunityPoolSpendResponse();
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
    const message = createBaseMsgCommunityPoolSpendResponse();
    return message;
  },
  fromAmino(_) {
    const message = createBaseMsgCommunityPoolSpendResponse();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return MsgCommunityPoolSpendResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgCommunityPoolSpendResponse",
      value: MsgCommunityPoolSpendResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgCommunityPoolSpendResponse.decode(message.value);
  },
  toProto(message) {
    return MsgCommunityPoolSpendResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.MsgCommunityPoolSpendResponse",
      value: MsgCommunityPoolSpendResponse.encode(message).finish()
    };
  }
};
export {
  MsgCommunityPoolSpend,
  MsgCommunityPoolSpendResponse,
  MsgFundCommunityPool,
  MsgFundCommunityPoolResponse,
  MsgSetWithdrawAddress,
  MsgSetWithdrawAddressResponse,
  MsgUpdateParams,
  MsgUpdateParamsResponse,
  MsgWithdrawDelegatorReward,
  MsgWithdrawDelegatorRewardResponse,
  MsgWithdrawValidatorCommission,
  MsgWithdrawValidatorCommissionResponse
};
