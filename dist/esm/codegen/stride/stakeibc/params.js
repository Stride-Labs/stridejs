import { BinaryReader, BinaryWriter } from "../../binary";
function createBaseParams() {
  return {
    rewardsInterval: BigInt(0),
    delegateInterval: BigInt(0),
    depositInterval: BigInt(0),
    redemptionRateInterval: BigInt(0),
    strideCommission: BigInt(0),
    reinvestInterval: BigInt(0),
    icaTimeoutNanos: BigInt(0),
    bufferSize: BigInt(0),
    ibcTimeoutBlocks: BigInt(0),
    feeTransferTimeoutNanos: BigInt(0),
    maxStakeIcaCallsPerEpoch: BigInt(0),
    defaultMinRedemptionRateThreshold: BigInt(0),
    defaultMaxRedemptionRateThreshold: BigInt(0),
    ibcTransferTimeoutNanos: BigInt(0),
    validatorSlashQueryThreshold: BigInt(0),
    validatorWeightCap: BigInt(0)
  };
}
const Params = {
  typeUrl: "/stride.stakeibc.Params",
  encode(message, writer = BinaryWriter.create()) {
    if (message.rewardsInterval !== BigInt(0)) {
      writer.uint32(8).uint64(message.rewardsInterval);
    }
    if (message.delegateInterval !== BigInt(0)) {
      writer.uint32(48).uint64(message.delegateInterval);
    }
    if (message.depositInterval !== BigInt(0)) {
      writer.uint32(16).uint64(message.depositInterval);
    }
    if (message.redemptionRateInterval !== BigInt(0)) {
      writer.uint32(24).uint64(message.redemptionRateInterval);
    }
    if (message.strideCommission !== BigInt(0)) {
      writer.uint32(32).uint64(message.strideCommission);
    }
    if (message.reinvestInterval !== BigInt(0)) {
      writer.uint32(56).uint64(message.reinvestInterval);
    }
    if (message.icaTimeoutNanos !== BigInt(0)) {
      writer.uint32(72).uint64(message.icaTimeoutNanos);
    }
    if (message.bufferSize !== BigInt(0)) {
      writer.uint32(80).uint64(message.bufferSize);
    }
    if (message.ibcTimeoutBlocks !== BigInt(0)) {
      writer.uint32(88).uint64(message.ibcTimeoutBlocks);
    }
    if (message.feeTransferTimeoutNanos !== BigInt(0)) {
      writer.uint32(96).uint64(message.feeTransferTimeoutNanos);
    }
    if (message.maxStakeIcaCallsPerEpoch !== BigInt(0)) {
      writer.uint32(104).uint64(message.maxStakeIcaCallsPerEpoch);
    }
    if (message.defaultMinRedemptionRateThreshold !== BigInt(0)) {
      writer.uint32(112).uint64(message.defaultMinRedemptionRateThreshold);
    }
    if (message.defaultMaxRedemptionRateThreshold !== BigInt(0)) {
      writer.uint32(120).uint64(message.defaultMaxRedemptionRateThreshold);
    }
    if (message.ibcTransferTimeoutNanos !== BigInt(0)) {
      writer.uint32(128).uint64(message.ibcTransferTimeoutNanos);
    }
    if (message.validatorSlashQueryThreshold !== BigInt(0)) {
      writer.uint32(152).uint64(message.validatorSlashQueryThreshold);
    }
    if (message.validatorWeightCap !== BigInt(0)) {
      writer.uint32(160).uint64(message.validatorWeightCap);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rewardsInterval = reader.uint64();
          break;
        case 6:
          message.delegateInterval = reader.uint64();
          break;
        case 2:
          message.depositInterval = reader.uint64();
          break;
        case 3:
          message.redemptionRateInterval = reader.uint64();
          break;
        case 4:
          message.strideCommission = reader.uint64();
          break;
        case 7:
          message.reinvestInterval = reader.uint64();
          break;
        case 9:
          message.icaTimeoutNanos = reader.uint64();
          break;
        case 10:
          message.bufferSize = reader.uint64();
          break;
        case 11:
          message.ibcTimeoutBlocks = reader.uint64();
          break;
        case 12:
          message.feeTransferTimeoutNanos = reader.uint64();
          break;
        case 13:
          message.maxStakeIcaCallsPerEpoch = reader.uint64();
          break;
        case 14:
          message.defaultMinRedemptionRateThreshold = reader.uint64();
          break;
        case 15:
          message.defaultMaxRedemptionRateThreshold = reader.uint64();
          break;
        case 16:
          message.ibcTransferTimeoutNanos = reader.uint64();
          break;
        case 19:
          message.validatorSlashQueryThreshold = reader.uint64();
          break;
        case 20:
          message.validatorWeightCap = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseParams();
    message.rewardsInterval = object.rewardsInterval !== void 0 && object.rewardsInterval !== null ? BigInt(object.rewardsInterval.toString()) : BigInt(0);
    message.delegateInterval = object.delegateInterval !== void 0 && object.delegateInterval !== null ? BigInt(object.delegateInterval.toString()) : BigInt(0);
    message.depositInterval = object.depositInterval !== void 0 && object.depositInterval !== null ? BigInt(object.depositInterval.toString()) : BigInt(0);
    message.redemptionRateInterval = object.redemptionRateInterval !== void 0 && object.redemptionRateInterval !== null ? BigInt(object.redemptionRateInterval.toString()) : BigInt(0);
    message.strideCommission = object.strideCommission !== void 0 && object.strideCommission !== null ? BigInt(object.strideCommission.toString()) : BigInt(0);
    message.reinvestInterval = object.reinvestInterval !== void 0 && object.reinvestInterval !== null ? BigInt(object.reinvestInterval.toString()) : BigInt(0);
    message.icaTimeoutNanos = object.icaTimeoutNanos !== void 0 && object.icaTimeoutNanos !== null ? BigInt(object.icaTimeoutNanos.toString()) : BigInt(0);
    message.bufferSize = object.bufferSize !== void 0 && object.bufferSize !== null ? BigInt(object.bufferSize.toString()) : BigInt(0);
    message.ibcTimeoutBlocks = object.ibcTimeoutBlocks !== void 0 && object.ibcTimeoutBlocks !== null ? BigInt(object.ibcTimeoutBlocks.toString()) : BigInt(0);
    message.feeTransferTimeoutNanos = object.feeTransferTimeoutNanos !== void 0 && object.feeTransferTimeoutNanos !== null ? BigInt(object.feeTransferTimeoutNanos.toString()) : BigInt(0);
    message.maxStakeIcaCallsPerEpoch = object.maxStakeIcaCallsPerEpoch !== void 0 && object.maxStakeIcaCallsPerEpoch !== null ? BigInt(object.maxStakeIcaCallsPerEpoch.toString()) : BigInt(0);
    message.defaultMinRedemptionRateThreshold = object.defaultMinRedemptionRateThreshold !== void 0 && object.defaultMinRedemptionRateThreshold !== null ? BigInt(object.defaultMinRedemptionRateThreshold.toString()) : BigInt(0);
    message.defaultMaxRedemptionRateThreshold = object.defaultMaxRedemptionRateThreshold !== void 0 && object.defaultMaxRedemptionRateThreshold !== null ? BigInt(object.defaultMaxRedemptionRateThreshold.toString()) : BigInt(0);
    message.ibcTransferTimeoutNanos = object.ibcTransferTimeoutNanos !== void 0 && object.ibcTransferTimeoutNanos !== null ? BigInt(object.ibcTransferTimeoutNanos.toString()) : BigInt(0);
    message.validatorSlashQueryThreshold = object.validatorSlashQueryThreshold !== void 0 && object.validatorSlashQueryThreshold !== null ? BigInt(object.validatorSlashQueryThreshold.toString()) : BigInt(0);
    message.validatorWeightCap = object.validatorWeightCap !== void 0 && object.validatorWeightCap !== null ? BigInt(object.validatorWeightCap.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object) {
    const message = createBaseParams();
    if (object.rewards_interval !== void 0 && object.rewards_interval !== null) {
      message.rewardsInterval = BigInt(object.rewards_interval);
    }
    if (object.delegate_interval !== void 0 && object.delegate_interval !== null) {
      message.delegateInterval = BigInt(object.delegate_interval);
    }
    if (object.deposit_interval !== void 0 && object.deposit_interval !== null) {
      message.depositInterval = BigInt(object.deposit_interval);
    }
    if (object.redemption_rate_interval !== void 0 && object.redemption_rate_interval !== null) {
      message.redemptionRateInterval = BigInt(object.redemption_rate_interval);
    }
    if (object.stride_commission !== void 0 && object.stride_commission !== null) {
      message.strideCommission = BigInt(object.stride_commission);
    }
    if (object.reinvest_interval !== void 0 && object.reinvest_interval !== null) {
      message.reinvestInterval = BigInt(object.reinvest_interval);
    }
    if (object.ica_timeout_nanos !== void 0 && object.ica_timeout_nanos !== null) {
      message.icaTimeoutNanos = BigInt(object.ica_timeout_nanos);
    }
    if (object.buffer_size !== void 0 && object.buffer_size !== null) {
      message.bufferSize = BigInt(object.buffer_size);
    }
    if (object.ibc_timeout_blocks !== void 0 && object.ibc_timeout_blocks !== null) {
      message.ibcTimeoutBlocks = BigInt(object.ibc_timeout_blocks);
    }
    if (object.fee_transfer_timeout_nanos !== void 0 && object.fee_transfer_timeout_nanos !== null) {
      message.feeTransferTimeoutNanos = BigInt(object.fee_transfer_timeout_nanos);
    }
    if (object.max_stake_ica_calls_per_epoch !== void 0 && object.max_stake_ica_calls_per_epoch !== null) {
      message.maxStakeIcaCallsPerEpoch = BigInt(object.max_stake_ica_calls_per_epoch);
    }
    if (object.default_min_redemption_rate_threshold !== void 0 && object.default_min_redemption_rate_threshold !== null) {
      message.defaultMinRedemptionRateThreshold = BigInt(object.default_min_redemption_rate_threshold);
    }
    if (object.default_max_redemption_rate_threshold !== void 0 && object.default_max_redemption_rate_threshold !== null) {
      message.defaultMaxRedemptionRateThreshold = BigInt(object.default_max_redemption_rate_threshold);
    }
    if (object.ibc_transfer_timeout_nanos !== void 0 && object.ibc_transfer_timeout_nanos !== null) {
      message.ibcTransferTimeoutNanos = BigInt(object.ibc_transfer_timeout_nanos);
    }
    if (object.validator_slash_query_threshold !== void 0 && object.validator_slash_query_threshold !== null) {
      message.validatorSlashQueryThreshold = BigInt(object.validator_slash_query_threshold);
    }
    if (object.validator_weight_cap !== void 0 && object.validator_weight_cap !== null) {
      message.validatorWeightCap = BigInt(object.validator_weight_cap);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.rewards_interval = message.rewardsInterval !== BigInt(0) ? message.rewardsInterval.toString() : void 0;
    obj.delegate_interval = message.delegateInterval !== BigInt(0) ? message.delegateInterval.toString() : void 0;
    obj.deposit_interval = message.depositInterval !== BigInt(0) ? message.depositInterval.toString() : void 0;
    obj.redemption_rate_interval = message.redemptionRateInterval !== BigInt(0) ? message.redemptionRateInterval.toString() : void 0;
    obj.stride_commission = message.strideCommission !== BigInt(0) ? message.strideCommission.toString() : void 0;
    obj.reinvest_interval = message.reinvestInterval !== BigInt(0) ? message.reinvestInterval.toString() : void 0;
    obj.ica_timeout_nanos = message.icaTimeoutNanos !== BigInt(0) ? message.icaTimeoutNanos.toString() : void 0;
    obj.buffer_size = message.bufferSize !== BigInt(0) ? message.bufferSize.toString() : void 0;
    obj.ibc_timeout_blocks = message.ibcTimeoutBlocks !== BigInt(0) ? message.ibcTimeoutBlocks.toString() : void 0;
    obj.fee_transfer_timeout_nanos = message.feeTransferTimeoutNanos !== BigInt(0) ? message.feeTransferTimeoutNanos.toString() : void 0;
    obj.max_stake_ica_calls_per_epoch = message.maxStakeIcaCallsPerEpoch !== BigInt(0) ? message.maxStakeIcaCallsPerEpoch.toString() : void 0;
    obj.default_min_redemption_rate_threshold = message.defaultMinRedemptionRateThreshold !== BigInt(0) ? message.defaultMinRedemptionRateThreshold.toString() : void 0;
    obj.default_max_redemption_rate_threshold = message.defaultMaxRedemptionRateThreshold !== BigInt(0) ? message.defaultMaxRedemptionRateThreshold.toString() : void 0;
    obj.ibc_transfer_timeout_nanos = message.ibcTransferTimeoutNanos !== BigInt(0) ? message.ibcTransferTimeoutNanos.toString() : void 0;
    obj.validator_slash_query_threshold = message.validatorSlashQueryThreshold !== BigInt(0) ? message.validatorSlashQueryThreshold.toString() : void 0;
    obj.validator_weight_cap = message.validatorWeightCap !== BigInt(0) ? message.validatorWeightCap.toString() : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return Params.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return Params.decode(message.value);
  },
  toProto(message) {
    return Params.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.stakeibc.Params",
      value: Params.encode(message).finish()
    };
  }
};
export {
  Params
};
