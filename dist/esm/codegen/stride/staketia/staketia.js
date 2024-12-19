import { BinaryReader, BinaryWriter } from "../../binary";
import { Decimal } from "@cosmjs/math";
var DelegationRecordStatus = /* @__PURE__ */ ((DelegationRecordStatus2) => {
  DelegationRecordStatus2[DelegationRecordStatus2["TRANSFER_IN_PROGRESS"] = 0] = "TRANSFER_IN_PROGRESS";
  DelegationRecordStatus2[DelegationRecordStatus2["TRANSFER_FAILED"] = 1] = "TRANSFER_FAILED";
  DelegationRecordStatus2[DelegationRecordStatus2["DELEGATION_QUEUE"] = 2] = "DELEGATION_QUEUE";
  DelegationRecordStatus2[DelegationRecordStatus2["DELEGATION_COMPLETE"] = 3] = "DELEGATION_COMPLETE";
  DelegationRecordStatus2[DelegationRecordStatus2["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return DelegationRecordStatus2;
})(DelegationRecordStatus || {});
const DelegationRecordStatusSDKType = DelegationRecordStatus;
const DelegationRecordStatusAmino = DelegationRecordStatus;
function delegationRecordStatusFromJSON(object) {
  switch (object) {
    case 0:
    case "TRANSFER_IN_PROGRESS":
      return 0 /* TRANSFER_IN_PROGRESS */;
    case 1:
    case "TRANSFER_FAILED":
      return 1 /* TRANSFER_FAILED */;
    case 2:
    case "DELEGATION_QUEUE":
      return 2 /* DELEGATION_QUEUE */;
    case 3:
    case "DELEGATION_COMPLETE":
      return 3 /* DELEGATION_COMPLETE */;
    case -1:
    case "UNRECOGNIZED":
    default:
      return -1 /* UNRECOGNIZED */;
  }
}
function delegationRecordStatusToJSON(object) {
  switch (object) {
    case 0 /* TRANSFER_IN_PROGRESS */:
      return "TRANSFER_IN_PROGRESS";
    case 1 /* TRANSFER_FAILED */:
      return "TRANSFER_FAILED";
    case 2 /* DELEGATION_QUEUE */:
      return "DELEGATION_QUEUE";
    case 3 /* DELEGATION_COMPLETE */:
      return "DELEGATION_COMPLETE";
    case -1 /* UNRECOGNIZED */:
    default:
      return "UNRECOGNIZED";
  }
}
var UnbondingRecordStatus = /* @__PURE__ */ ((UnbondingRecordStatus2) => {
  UnbondingRecordStatus2[UnbondingRecordStatus2["ACCUMULATING_REDEMPTIONS"] = 0] = "ACCUMULATING_REDEMPTIONS";
  UnbondingRecordStatus2[UnbondingRecordStatus2["UNBONDING_QUEUE"] = 1] = "UNBONDING_QUEUE";
  UnbondingRecordStatus2[UnbondingRecordStatus2["UNBONDING_IN_PROGRESS"] = 2] = "UNBONDING_IN_PROGRESS";
  UnbondingRecordStatus2[UnbondingRecordStatus2["UNBONDED"] = 3] = "UNBONDED";
  UnbondingRecordStatus2[UnbondingRecordStatus2["CLAIMABLE"] = 4] = "CLAIMABLE";
  UnbondingRecordStatus2[UnbondingRecordStatus2["CLAIMED"] = 5] = "CLAIMED";
  UnbondingRecordStatus2[UnbondingRecordStatus2["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return UnbondingRecordStatus2;
})(UnbondingRecordStatus || {});
const UnbondingRecordStatusSDKType = UnbondingRecordStatus;
const UnbondingRecordStatusAmino = UnbondingRecordStatus;
function unbondingRecordStatusFromJSON(object) {
  switch (object) {
    case 0:
    case "ACCUMULATING_REDEMPTIONS":
      return 0 /* ACCUMULATING_REDEMPTIONS */;
    case 1:
    case "UNBONDING_QUEUE":
      return 1 /* UNBONDING_QUEUE */;
    case 2:
    case "UNBONDING_IN_PROGRESS":
      return 2 /* UNBONDING_IN_PROGRESS */;
    case 3:
    case "UNBONDED":
      return 3 /* UNBONDED */;
    case 4:
    case "CLAIMABLE":
      return 4 /* CLAIMABLE */;
    case 5:
    case "CLAIMED":
      return 5 /* CLAIMED */;
    case -1:
    case "UNRECOGNIZED":
    default:
      return -1 /* UNRECOGNIZED */;
  }
}
function unbondingRecordStatusToJSON(object) {
  switch (object) {
    case 0 /* ACCUMULATING_REDEMPTIONS */:
      return "ACCUMULATING_REDEMPTIONS";
    case 1 /* UNBONDING_QUEUE */:
      return "UNBONDING_QUEUE";
    case 2 /* UNBONDING_IN_PROGRESS */:
      return "UNBONDING_IN_PROGRESS";
    case 3 /* UNBONDED */:
      return "UNBONDED";
    case 4 /* CLAIMABLE */:
      return "CLAIMABLE";
    case 5 /* CLAIMED */:
      return "CLAIMED";
    case -1 /* UNRECOGNIZED */:
    default:
      return "UNRECOGNIZED";
  }
}
function createBaseHostZone() {
  return {
    chainId: "",
    nativeTokenDenom: "",
    nativeTokenIbcDenom: "",
    transferChannelId: "",
    delegationAddress: "",
    rewardAddress: "",
    depositAddress: "",
    redemptionAddress: "",
    claimAddress: "",
    operatorAddressOnStride: "",
    safeAddressOnStride: "",
    lastRedemptionRate: "",
    redemptionRate: "",
    minRedemptionRate: "",
    maxRedemptionRate: "",
    minInnerRedemptionRate: "",
    maxInnerRedemptionRate: "",
    delegatedBalance: "",
    unbondingPeriodSeconds: BigInt(0),
    halted: false
  };
}
const HostZone = {
  typeUrl: "/stride.staketia.HostZone",
  encode(message, writer = BinaryWriter.create()) {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }
    if (message.nativeTokenDenom !== "") {
      writer.uint32(18).string(message.nativeTokenDenom);
    }
    if (message.nativeTokenIbcDenom !== "") {
      writer.uint32(26).string(message.nativeTokenIbcDenom);
    }
    if (message.transferChannelId !== "") {
      writer.uint32(34).string(message.transferChannelId);
    }
    if (message.delegationAddress !== "") {
      writer.uint32(42).string(message.delegationAddress);
    }
    if (message.rewardAddress !== "") {
      writer.uint32(50).string(message.rewardAddress);
    }
    if (message.depositAddress !== "") {
      writer.uint32(58).string(message.depositAddress);
    }
    if (message.redemptionAddress !== "") {
      writer.uint32(66).string(message.redemptionAddress);
    }
    if (message.claimAddress !== "") {
      writer.uint32(74).string(message.claimAddress);
    }
    if (message.operatorAddressOnStride !== "") {
      writer.uint32(82).string(message.operatorAddressOnStride);
    }
    if (message.safeAddressOnStride !== "") {
      writer.uint32(90).string(message.safeAddressOnStride);
    }
    if (message.lastRedemptionRate !== "") {
      writer.uint32(98).string(Decimal.fromUserInput(message.lastRedemptionRate, 18).atomics);
    }
    if (message.redemptionRate !== "") {
      writer.uint32(106).string(Decimal.fromUserInput(message.redemptionRate, 18).atomics);
    }
    if (message.minRedemptionRate !== "") {
      writer.uint32(114).string(Decimal.fromUserInput(message.minRedemptionRate, 18).atomics);
    }
    if (message.maxRedemptionRate !== "") {
      writer.uint32(122).string(Decimal.fromUserInput(message.maxRedemptionRate, 18).atomics);
    }
    if (message.minInnerRedemptionRate !== "") {
      writer.uint32(130).string(Decimal.fromUserInput(message.minInnerRedemptionRate, 18).atomics);
    }
    if (message.maxInnerRedemptionRate !== "") {
      writer.uint32(138).string(Decimal.fromUserInput(message.maxInnerRedemptionRate, 18).atomics);
    }
    if (message.delegatedBalance !== "") {
      writer.uint32(146).string(message.delegatedBalance);
    }
    if (message.unbondingPeriodSeconds !== BigInt(0)) {
      writer.uint32(152).uint64(message.unbondingPeriodSeconds);
    }
    if (message.halted === true) {
      writer.uint32(160).bool(message.halted);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseHostZone();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chainId = reader.string();
          break;
        case 2:
          message.nativeTokenDenom = reader.string();
          break;
        case 3:
          message.nativeTokenIbcDenom = reader.string();
          break;
        case 4:
          message.transferChannelId = reader.string();
          break;
        case 5:
          message.delegationAddress = reader.string();
          break;
        case 6:
          message.rewardAddress = reader.string();
          break;
        case 7:
          message.depositAddress = reader.string();
          break;
        case 8:
          message.redemptionAddress = reader.string();
          break;
        case 9:
          message.claimAddress = reader.string();
          break;
        case 10:
          message.operatorAddressOnStride = reader.string();
          break;
        case 11:
          message.safeAddressOnStride = reader.string();
          break;
        case 12:
          message.lastRedemptionRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 13:
          message.redemptionRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 14:
          message.minRedemptionRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 15:
          message.maxRedemptionRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 16:
          message.minInnerRedemptionRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 17:
          message.maxInnerRedemptionRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 18:
          message.delegatedBalance = reader.string();
          break;
        case 19:
          message.unbondingPeriodSeconds = reader.uint64();
          break;
        case 20:
          message.halted = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseHostZone();
    message.chainId = object.chainId ?? "";
    message.nativeTokenDenom = object.nativeTokenDenom ?? "";
    message.nativeTokenIbcDenom = object.nativeTokenIbcDenom ?? "";
    message.transferChannelId = object.transferChannelId ?? "";
    message.delegationAddress = object.delegationAddress ?? "";
    message.rewardAddress = object.rewardAddress ?? "";
    message.depositAddress = object.depositAddress ?? "";
    message.redemptionAddress = object.redemptionAddress ?? "";
    message.claimAddress = object.claimAddress ?? "";
    message.operatorAddressOnStride = object.operatorAddressOnStride ?? "";
    message.safeAddressOnStride = object.safeAddressOnStride ?? "";
    message.lastRedemptionRate = object.lastRedemptionRate ?? "";
    message.redemptionRate = object.redemptionRate ?? "";
    message.minRedemptionRate = object.minRedemptionRate ?? "";
    message.maxRedemptionRate = object.maxRedemptionRate ?? "";
    message.minInnerRedemptionRate = object.minInnerRedemptionRate ?? "";
    message.maxInnerRedemptionRate = object.maxInnerRedemptionRate ?? "";
    message.delegatedBalance = object.delegatedBalance ?? "";
    message.unbondingPeriodSeconds = object.unbondingPeriodSeconds !== void 0 && object.unbondingPeriodSeconds !== null ? BigInt(object.unbondingPeriodSeconds.toString()) : BigInt(0);
    message.halted = object.halted ?? false;
    return message;
  },
  fromAmino(object) {
    const message = createBaseHostZone();
    if (object.chain_id !== void 0 && object.chain_id !== null) {
      message.chainId = object.chain_id;
    }
    if (object.native_token_denom !== void 0 && object.native_token_denom !== null) {
      message.nativeTokenDenom = object.native_token_denom;
    }
    if (object.native_token_ibc_denom !== void 0 && object.native_token_ibc_denom !== null) {
      message.nativeTokenIbcDenom = object.native_token_ibc_denom;
    }
    if (object.transfer_channel_id !== void 0 && object.transfer_channel_id !== null) {
      message.transferChannelId = object.transfer_channel_id;
    }
    if (object.delegation_address !== void 0 && object.delegation_address !== null) {
      message.delegationAddress = object.delegation_address;
    }
    if (object.reward_address !== void 0 && object.reward_address !== null) {
      message.rewardAddress = object.reward_address;
    }
    if (object.deposit_address !== void 0 && object.deposit_address !== null) {
      message.depositAddress = object.deposit_address;
    }
    if (object.redemption_address !== void 0 && object.redemption_address !== null) {
      message.redemptionAddress = object.redemption_address;
    }
    if (object.claim_address !== void 0 && object.claim_address !== null) {
      message.claimAddress = object.claim_address;
    }
    if (object.operator_address_on_stride !== void 0 && object.operator_address_on_stride !== null) {
      message.operatorAddressOnStride = object.operator_address_on_stride;
    }
    if (object.safe_address_on_stride !== void 0 && object.safe_address_on_stride !== null) {
      message.safeAddressOnStride = object.safe_address_on_stride;
    }
    if (object.last_redemption_rate !== void 0 && object.last_redemption_rate !== null) {
      message.lastRedemptionRate = object.last_redemption_rate;
    }
    if (object.redemption_rate !== void 0 && object.redemption_rate !== null) {
      message.redemptionRate = object.redemption_rate;
    }
    if (object.min_redemption_rate !== void 0 && object.min_redemption_rate !== null) {
      message.minRedemptionRate = object.min_redemption_rate;
    }
    if (object.max_redemption_rate !== void 0 && object.max_redemption_rate !== null) {
      message.maxRedemptionRate = object.max_redemption_rate;
    }
    if (object.min_inner_redemption_rate !== void 0 && object.min_inner_redemption_rate !== null) {
      message.minInnerRedemptionRate = object.min_inner_redemption_rate;
    }
    if (object.max_inner_redemption_rate !== void 0 && object.max_inner_redemption_rate !== null) {
      message.maxInnerRedemptionRate = object.max_inner_redemption_rate;
    }
    if (object.delegated_balance !== void 0 && object.delegated_balance !== null) {
      message.delegatedBalance = object.delegated_balance;
    }
    if (object.unbonding_period_seconds !== void 0 && object.unbonding_period_seconds !== null) {
      message.unbondingPeriodSeconds = BigInt(object.unbonding_period_seconds);
    }
    if (object.halted !== void 0 && object.halted !== null) {
      message.halted = object.halted;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.chain_id = message.chainId === "" ? void 0 : message.chainId;
    obj.native_token_denom = message.nativeTokenDenom === "" ? void 0 : message.nativeTokenDenom;
    obj.native_token_ibc_denom = message.nativeTokenIbcDenom === "" ? void 0 : message.nativeTokenIbcDenom;
    obj.transfer_channel_id = message.transferChannelId === "" ? void 0 : message.transferChannelId;
    obj.delegation_address = message.delegationAddress === "" ? void 0 : message.delegationAddress;
    obj.reward_address = message.rewardAddress === "" ? void 0 : message.rewardAddress;
    obj.deposit_address = message.depositAddress === "" ? void 0 : message.depositAddress;
    obj.redemption_address = message.redemptionAddress === "" ? void 0 : message.redemptionAddress;
    obj.claim_address = message.claimAddress === "" ? void 0 : message.claimAddress;
    obj.operator_address_on_stride = message.operatorAddressOnStride === "" ? void 0 : message.operatorAddressOnStride;
    obj.safe_address_on_stride = message.safeAddressOnStride === "" ? void 0 : message.safeAddressOnStride;
    obj.last_redemption_rate = message.lastRedemptionRate === "" ? void 0 : message.lastRedemptionRate;
    obj.redemption_rate = message.redemptionRate === "" ? void 0 : message.redemptionRate;
    obj.min_redemption_rate = message.minRedemptionRate === "" ? void 0 : message.minRedemptionRate;
    obj.max_redemption_rate = message.maxRedemptionRate === "" ? void 0 : message.maxRedemptionRate;
    obj.min_inner_redemption_rate = message.minInnerRedemptionRate === "" ? void 0 : message.minInnerRedemptionRate;
    obj.max_inner_redemption_rate = message.maxInnerRedemptionRate === "" ? void 0 : message.maxInnerRedemptionRate;
    obj.delegated_balance = message.delegatedBalance === "" ? void 0 : message.delegatedBalance;
    obj.unbonding_period_seconds = message.unbondingPeriodSeconds !== BigInt(0) ? message.unbondingPeriodSeconds.toString() : void 0;
    obj.halted = message.halted === false ? void 0 : message.halted;
    return obj;
  },
  fromAminoMsg(object) {
    return HostZone.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return HostZone.decode(message.value);
  },
  toProto(message) {
    return HostZone.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.staketia.HostZone",
      value: HostZone.encode(message).finish()
    };
  }
};
function createBaseDelegationRecord() {
  return {
    id: BigInt(0),
    nativeAmount: "",
    status: 0,
    txHash: ""
  };
}
const DelegationRecord = {
  typeUrl: "/stride.staketia.DelegationRecord",
  encode(message, writer = BinaryWriter.create()) {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.nativeAmount !== "") {
      writer.uint32(18).string(message.nativeAmount);
    }
    if (message.status !== 0) {
      writer.uint32(24).int32(message.status);
    }
    if (message.txHash !== "") {
      writer.uint32(34).string(message.txHash);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseDelegationRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        case 2:
          message.nativeAmount = reader.string();
          break;
        case 3:
          message.status = reader.int32();
          break;
        case 4:
          message.txHash = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseDelegationRecord();
    message.id = object.id !== void 0 && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.nativeAmount = object.nativeAmount ?? "";
    message.status = object.status ?? 0;
    message.txHash = object.txHash ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseDelegationRecord();
    if (object.id !== void 0 && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.native_amount !== void 0 && object.native_amount !== null) {
      message.nativeAmount = object.native_amount;
    }
    if (object.status !== void 0 && object.status !== null) {
      message.status = object.status;
    }
    if (object.tx_hash !== void 0 && object.tx_hash !== null) {
      message.txHash = object.tx_hash;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.id = message.id !== BigInt(0) ? message.id.toString() : void 0;
    obj.native_amount = message.nativeAmount === "" ? void 0 : message.nativeAmount;
    obj.status = message.status === 0 ? void 0 : message.status;
    obj.tx_hash = message.txHash === "" ? void 0 : message.txHash;
    return obj;
  },
  fromAminoMsg(object) {
    return DelegationRecord.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return DelegationRecord.decode(message.value);
  },
  toProto(message) {
    return DelegationRecord.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.staketia.DelegationRecord",
      value: DelegationRecord.encode(message).finish()
    };
  }
};
function createBaseUnbondingRecord() {
  return {
    id: BigInt(0),
    status: 0,
    stTokenAmount: "",
    nativeAmount: "",
    unbondingCompletionTimeSeconds: BigInt(0),
    undelegationTxHash: "",
    unbondedTokenSweepTxHash: ""
  };
}
const UnbondingRecord = {
  typeUrl: "/stride.staketia.UnbondingRecord",
  encode(message, writer = BinaryWriter.create()) {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.status !== 0) {
      writer.uint32(16).int32(message.status);
    }
    if (message.stTokenAmount !== "") {
      writer.uint32(26).string(message.stTokenAmount);
    }
    if (message.nativeAmount !== "") {
      writer.uint32(34).string(message.nativeAmount);
    }
    if (message.unbondingCompletionTimeSeconds !== BigInt(0)) {
      writer.uint32(40).uint64(message.unbondingCompletionTimeSeconds);
    }
    if (message.undelegationTxHash !== "") {
      writer.uint32(50).string(message.undelegationTxHash);
    }
    if (message.unbondedTokenSweepTxHash !== "") {
      writer.uint32(58).string(message.unbondedTokenSweepTxHash);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseUnbondingRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        case 2:
          message.status = reader.int32();
          break;
        case 3:
          message.stTokenAmount = reader.string();
          break;
        case 4:
          message.nativeAmount = reader.string();
          break;
        case 5:
          message.unbondingCompletionTimeSeconds = reader.uint64();
          break;
        case 6:
          message.undelegationTxHash = reader.string();
          break;
        case 7:
          message.unbondedTokenSweepTxHash = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseUnbondingRecord();
    message.id = object.id !== void 0 && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.status = object.status ?? 0;
    message.stTokenAmount = object.stTokenAmount ?? "";
    message.nativeAmount = object.nativeAmount ?? "";
    message.unbondingCompletionTimeSeconds = object.unbondingCompletionTimeSeconds !== void 0 && object.unbondingCompletionTimeSeconds !== null ? BigInt(object.unbondingCompletionTimeSeconds.toString()) : BigInt(0);
    message.undelegationTxHash = object.undelegationTxHash ?? "";
    message.unbondedTokenSweepTxHash = object.unbondedTokenSweepTxHash ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseUnbondingRecord();
    if (object.id !== void 0 && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.status !== void 0 && object.status !== null) {
      message.status = object.status;
    }
    if (object.st_token_amount !== void 0 && object.st_token_amount !== null) {
      message.stTokenAmount = object.st_token_amount;
    }
    if (object.native_amount !== void 0 && object.native_amount !== null) {
      message.nativeAmount = object.native_amount;
    }
    if (object.unbonding_completion_time_seconds !== void 0 && object.unbonding_completion_time_seconds !== null) {
      message.unbondingCompletionTimeSeconds = BigInt(object.unbonding_completion_time_seconds);
    }
    if (object.undelegation_tx_hash !== void 0 && object.undelegation_tx_hash !== null) {
      message.undelegationTxHash = object.undelegation_tx_hash;
    }
    if (object.unbonded_token_sweep_tx_hash !== void 0 && object.unbonded_token_sweep_tx_hash !== null) {
      message.unbondedTokenSweepTxHash = object.unbonded_token_sweep_tx_hash;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.id = message.id !== BigInt(0) ? message.id.toString() : void 0;
    obj.status = message.status === 0 ? void 0 : message.status;
    obj.st_token_amount = message.stTokenAmount === "" ? void 0 : message.stTokenAmount;
    obj.native_amount = message.nativeAmount === "" ? void 0 : message.nativeAmount;
    obj.unbonding_completion_time_seconds = message.unbondingCompletionTimeSeconds !== BigInt(0) ? message.unbondingCompletionTimeSeconds.toString() : void 0;
    obj.undelegation_tx_hash = message.undelegationTxHash === "" ? void 0 : message.undelegationTxHash;
    obj.unbonded_token_sweep_tx_hash = message.unbondedTokenSweepTxHash === "" ? void 0 : message.unbondedTokenSweepTxHash;
    return obj;
  },
  fromAminoMsg(object) {
    return UnbondingRecord.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return UnbondingRecord.decode(message.value);
  },
  toProto(message) {
    return UnbondingRecord.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.staketia.UnbondingRecord",
      value: UnbondingRecord.encode(message).finish()
    };
  }
};
function createBaseRedemptionRecord() {
  return {
    unbondingRecordId: BigInt(0),
    redeemer: "",
    stTokenAmount: "",
    nativeAmount: ""
  };
}
const RedemptionRecord = {
  typeUrl: "/stride.staketia.RedemptionRecord",
  encode(message, writer = BinaryWriter.create()) {
    if (message.unbondingRecordId !== BigInt(0)) {
      writer.uint32(8).uint64(message.unbondingRecordId);
    }
    if (message.redeemer !== "") {
      writer.uint32(18).string(message.redeemer);
    }
    if (message.stTokenAmount !== "") {
      writer.uint32(26).string(message.stTokenAmount);
    }
    if (message.nativeAmount !== "") {
      writer.uint32(34).string(message.nativeAmount);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseRedemptionRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.unbondingRecordId = reader.uint64();
          break;
        case 2:
          message.redeemer = reader.string();
          break;
        case 3:
          message.stTokenAmount = reader.string();
          break;
        case 4:
          message.nativeAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseRedemptionRecord();
    message.unbondingRecordId = object.unbondingRecordId !== void 0 && object.unbondingRecordId !== null ? BigInt(object.unbondingRecordId.toString()) : BigInt(0);
    message.redeemer = object.redeemer ?? "";
    message.stTokenAmount = object.stTokenAmount ?? "";
    message.nativeAmount = object.nativeAmount ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseRedemptionRecord();
    if (object.unbonding_record_id !== void 0 && object.unbonding_record_id !== null) {
      message.unbondingRecordId = BigInt(object.unbonding_record_id);
    }
    if (object.redeemer !== void 0 && object.redeemer !== null) {
      message.redeemer = object.redeemer;
    }
    if (object.st_token_amount !== void 0 && object.st_token_amount !== null) {
      message.stTokenAmount = object.st_token_amount;
    }
    if (object.native_amount !== void 0 && object.native_amount !== null) {
      message.nativeAmount = object.native_amount;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.unbonding_record_id = message.unbondingRecordId !== BigInt(0) ? message.unbondingRecordId.toString() : void 0;
    obj.redeemer = message.redeemer === "" ? void 0 : message.redeemer;
    obj.st_token_amount = message.stTokenAmount === "" ? void 0 : message.stTokenAmount;
    obj.native_amount = message.nativeAmount === "" ? void 0 : message.nativeAmount;
    return obj;
  },
  fromAminoMsg(object) {
    return RedemptionRecord.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return RedemptionRecord.decode(message.value);
  },
  toProto(message) {
    return RedemptionRecord.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.staketia.RedemptionRecord",
      value: RedemptionRecord.encode(message).finish()
    };
  }
};
function createBaseSlashRecord() {
  return {
    id: BigInt(0),
    time: BigInt(0),
    nativeAmount: "",
    validatorAddress: ""
  };
}
const SlashRecord = {
  typeUrl: "/stride.staketia.SlashRecord",
  encode(message, writer = BinaryWriter.create()) {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.time !== BigInt(0)) {
      writer.uint32(16).uint64(message.time);
    }
    if (message.nativeAmount !== "") {
      writer.uint32(26).string(message.nativeAmount);
    }
    if (message.validatorAddress !== "") {
      writer.uint32(34).string(message.validatorAddress);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseSlashRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        case 2:
          message.time = reader.uint64();
          break;
        case 3:
          message.nativeAmount = reader.string();
          break;
        case 4:
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
    const message = createBaseSlashRecord();
    message.id = object.id !== void 0 && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.time = object.time !== void 0 && object.time !== null ? BigInt(object.time.toString()) : BigInt(0);
    message.nativeAmount = object.nativeAmount ?? "";
    message.validatorAddress = object.validatorAddress ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseSlashRecord();
    if (object.id !== void 0 && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.time !== void 0 && object.time !== null) {
      message.time = BigInt(object.time);
    }
    if (object.native_amount !== void 0 && object.native_amount !== null) {
      message.nativeAmount = object.native_amount;
    }
    if (object.validator_address !== void 0 && object.validator_address !== null) {
      message.validatorAddress = object.validator_address;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.id = message.id !== BigInt(0) ? message.id.toString() : void 0;
    obj.time = message.time !== BigInt(0) ? message.time.toString() : void 0;
    obj.native_amount = message.nativeAmount === "" ? void 0 : message.nativeAmount;
    obj.validator_address = message.validatorAddress === "" ? void 0 : message.validatorAddress;
    return obj;
  },
  fromAminoMsg(object) {
    return SlashRecord.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return SlashRecord.decode(message.value);
  },
  toProto(message) {
    return SlashRecord.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.staketia.SlashRecord",
      value: SlashRecord.encode(message).finish()
    };
  }
};
export {
  DelegationRecord,
  DelegationRecordStatus,
  DelegationRecordStatusAmino,
  DelegationRecordStatusSDKType,
  HostZone,
  RedemptionRecord,
  SlashRecord,
  UnbondingRecord,
  UnbondingRecordStatus,
  UnbondingRecordStatusAmino,
  UnbondingRecordStatusSDKType,
  delegationRecordStatusFromJSON,
  delegationRecordStatusToJSON,
  unbondingRecordStatusFromJSON,
  unbondingRecordStatusToJSON
};
