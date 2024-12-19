import { Coin } from "../../base/v1beta1/coin";
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
  return {};
}
const MsgWithdrawDelegatorRewardResponse = {
  typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorRewardResponse",
  encode(_, writer = BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawDelegatorRewardResponse();
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
    const message = createBaseMsgWithdrawDelegatorRewardResponse();
    return message;
  },
  fromAmino(_) {
    const message = createBaseMsgWithdrawDelegatorRewardResponse();
    return message;
  },
  toAmino(_) {
    const obj = {};
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
  return {};
}
const MsgWithdrawValidatorCommissionResponse = {
  typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommissionResponse",
  encode(_, writer = BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawValidatorCommissionResponse();
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
    const message = createBaseMsgWithdrawValidatorCommissionResponse();
    return message;
  },
  fromAmino(_) {
    const message = createBaseMsgWithdrawValidatorCommissionResponse();
    return message;
  },
  toAmino(_) {
    const obj = {};
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
function createBaseMsgWithdrawTokenizeShareRecordReward() {
  return {
    ownerAddress: "",
    recordId: BigInt(0)
  };
}
const MsgWithdrawTokenizeShareRecordReward = {
  typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawTokenizeShareRecordReward",
  encode(message, writer = BinaryWriter.create()) {
    if (message.ownerAddress !== "") {
      writer.uint32(10).string(message.ownerAddress);
    }
    if (message.recordId !== BigInt(0)) {
      writer.uint32(16).uint64(message.recordId);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawTokenizeShareRecordReward();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ownerAddress = reader.string();
          break;
        case 2:
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
    const message = createBaseMsgWithdrawTokenizeShareRecordReward();
    message.ownerAddress = object.ownerAddress ?? "";
    message.recordId = object.recordId !== void 0 && object.recordId !== null ? BigInt(object.recordId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgWithdrawTokenizeShareRecordReward();
    if (object.owner_address !== void 0 && object.owner_address !== null) {
      message.ownerAddress = object.owner_address;
    }
    if (object.record_id !== void 0 && object.record_id !== null) {
      message.recordId = BigInt(object.record_id);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.owner_address = message.ownerAddress === "" ? void 0 : message.ownerAddress;
    obj.record_id = message.recordId !== BigInt(0) ? message.recordId.toString() : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgWithdrawTokenizeShareRecordReward.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgWithdrawTokenizeShareRecordReward",
      value: MsgWithdrawTokenizeShareRecordReward.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgWithdrawTokenizeShareRecordReward.decode(message.value);
  },
  toProto(message) {
    return MsgWithdrawTokenizeShareRecordReward.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawTokenizeShareRecordReward",
      value: MsgWithdrawTokenizeShareRecordReward.encode(message).finish()
    };
  }
};
function createBaseMsgWithdrawTokenizeShareRecordRewardResponse() {
  return {};
}
const MsgWithdrawTokenizeShareRecordRewardResponse = {
  typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawTokenizeShareRecordRewardResponse",
  encode(_, writer = BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawTokenizeShareRecordRewardResponse();
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
    const message = createBaseMsgWithdrawTokenizeShareRecordRewardResponse();
    return message;
  },
  fromAmino(_) {
    const message = createBaseMsgWithdrawTokenizeShareRecordRewardResponse();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return MsgWithdrawTokenizeShareRecordRewardResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgWithdrawTokenizeShareRecordRewardResponse",
      value: MsgWithdrawTokenizeShareRecordRewardResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgWithdrawTokenizeShareRecordRewardResponse.decode(message.value);
  },
  toProto(message) {
    return MsgWithdrawTokenizeShareRecordRewardResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawTokenizeShareRecordRewardResponse",
      value: MsgWithdrawTokenizeShareRecordRewardResponse.encode(message).finish()
    };
  }
};
function createBaseMsgWithdrawAllTokenizeShareRecordReward() {
  return {
    ownerAddress: ""
  };
}
const MsgWithdrawAllTokenizeShareRecordReward = {
  typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawAllTokenizeShareRecordReward",
  encode(message, writer = BinaryWriter.create()) {
    if (message.ownerAddress !== "") {
      writer.uint32(10).string(message.ownerAddress);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawAllTokenizeShareRecordReward();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ownerAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgWithdrawAllTokenizeShareRecordReward();
    message.ownerAddress = object.ownerAddress ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgWithdrawAllTokenizeShareRecordReward();
    if (object.owner_address !== void 0 && object.owner_address !== null) {
      message.ownerAddress = object.owner_address;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.owner_address = message.ownerAddress === "" ? void 0 : message.ownerAddress;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgWithdrawAllTokenizeShareRecordReward.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgWithdrawAllTokenizeShareRecordReward",
      value: MsgWithdrawAllTokenizeShareRecordReward.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgWithdrawAllTokenizeShareRecordReward.decode(message.value);
  },
  toProto(message) {
    return MsgWithdrawAllTokenizeShareRecordReward.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawAllTokenizeShareRecordReward",
      value: MsgWithdrawAllTokenizeShareRecordReward.encode(message).finish()
    };
  }
};
function createBaseMsgWithdrawAllTokenizeShareRecordRewardResponse() {
  return {};
}
const MsgWithdrawAllTokenizeShareRecordRewardResponse = {
  typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawAllTokenizeShareRecordRewardResponse",
  encode(_, writer = BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawAllTokenizeShareRecordRewardResponse();
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
    const message = createBaseMsgWithdrawAllTokenizeShareRecordRewardResponse();
    return message;
  },
  fromAmino(_) {
    const message = createBaseMsgWithdrawAllTokenizeShareRecordRewardResponse();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return MsgWithdrawAllTokenizeShareRecordRewardResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgWithdrawAllTokenizeShareRecordRewardResponse",
      value: MsgWithdrawAllTokenizeShareRecordRewardResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgWithdrawAllTokenizeShareRecordRewardResponse.decode(message.value);
  },
  toProto(message) {
    return MsgWithdrawAllTokenizeShareRecordRewardResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawAllTokenizeShareRecordRewardResponse",
      value: MsgWithdrawAllTokenizeShareRecordRewardResponse.encode(message).finish()
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
export {
  MsgFundCommunityPool,
  MsgFundCommunityPoolResponse,
  MsgSetWithdrawAddress,
  MsgSetWithdrawAddressResponse,
  MsgWithdrawAllTokenizeShareRecordReward,
  MsgWithdrawAllTokenizeShareRecordRewardResponse,
  MsgWithdrawDelegatorReward,
  MsgWithdrawDelegatorRewardResponse,
  MsgWithdrawTokenizeShareRecordReward,
  MsgWithdrawTokenizeShareRecordRewardResponse,
  MsgWithdrawValidatorCommission,
  MsgWithdrawValidatorCommissionResponse
};
