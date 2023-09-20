import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
/**
 * Params defines the parameters for the module.
 * next id: 20
 */

export interface Params {
  /** define epoch lengths, in stride_epochs */
  rewardsInterval: Long;
  delegateInterval: Long;
  depositInterval: Long;
  redemptionRateInterval: Long;
  strideCommission: Long;
  reinvestInterval: Long;
  icaTimeoutNanos: Long;
  bufferSize: Long;
  ibcTimeoutBlocks: Long;
  feeTransferTimeoutNanos: Long;
  maxStakeIcaCallsPerEpoch: Long;
  defaultMinRedemptionRateThreshold: Long;
  defaultMaxRedemptionRateThreshold: Long;
  ibcTransferTimeoutNanos: Long;
  safetyMaxSlashPercent: Long;
  validatorSlashQueryThreshold: Long;
}
/**
 * Params defines the parameters for the module.
 * next id: 20
 */

export interface ParamsSDKType {
  /** define epoch lengths, in stride_epochs */
  rewards_interval: Long;
  delegate_interval: Long;
  deposit_interval: Long;
  redemption_rate_interval: Long;
  stride_commission: Long;
  reinvest_interval: Long;
  ica_timeout_nanos: Long;
  buffer_size: Long;
  ibc_timeout_blocks: Long;
  fee_transfer_timeout_nanos: Long;
  max_stake_ica_calls_per_epoch: Long;
  default_min_redemption_rate_threshold: Long;
  default_max_redemption_rate_threshold: Long;
  ibc_transfer_timeout_nanos: Long;
  safety_max_slash_percent: Long;
  validator_slash_query_threshold: Long;
}

function createBaseParams(): Params {
  return {
    rewardsInterval: Long.UZERO,
    delegateInterval: Long.UZERO,
    depositInterval: Long.UZERO,
    redemptionRateInterval: Long.UZERO,
    strideCommission: Long.UZERO,
    reinvestInterval: Long.UZERO,
    icaTimeoutNanos: Long.UZERO,
    bufferSize: Long.UZERO,
    ibcTimeoutBlocks: Long.UZERO,
    feeTransferTimeoutNanos: Long.UZERO,
    maxStakeIcaCallsPerEpoch: Long.UZERO,
    defaultMinRedemptionRateThreshold: Long.UZERO,
    defaultMaxRedemptionRateThreshold: Long.UZERO,
    ibcTransferTimeoutNanos: Long.UZERO,
    safetyMaxSlashPercent: Long.UZERO,
    validatorSlashQueryThreshold: Long.UZERO
  };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.rewardsInterval.isZero()) {
      writer.uint32(8).uint64(message.rewardsInterval);
    }

    if (!message.delegateInterval.isZero()) {
      writer.uint32(48).uint64(message.delegateInterval);
    }

    if (!message.depositInterval.isZero()) {
      writer.uint32(16).uint64(message.depositInterval);
    }

    if (!message.redemptionRateInterval.isZero()) {
      writer.uint32(24).uint64(message.redemptionRateInterval);
    }

    if (!message.strideCommission.isZero()) {
      writer.uint32(32).uint64(message.strideCommission);
    }

    if (!message.reinvestInterval.isZero()) {
      writer.uint32(56).uint64(message.reinvestInterval);
    }

    if (!message.icaTimeoutNanos.isZero()) {
      writer.uint32(72).uint64(message.icaTimeoutNanos);
    }

    if (!message.bufferSize.isZero()) {
      writer.uint32(80).uint64(message.bufferSize);
    }

    if (!message.ibcTimeoutBlocks.isZero()) {
      writer.uint32(88).uint64(message.ibcTimeoutBlocks);
    }

    if (!message.feeTransferTimeoutNanos.isZero()) {
      writer.uint32(96).uint64(message.feeTransferTimeoutNanos);
    }

    if (!message.maxStakeIcaCallsPerEpoch.isZero()) {
      writer.uint32(104).uint64(message.maxStakeIcaCallsPerEpoch);
    }

    if (!message.defaultMinRedemptionRateThreshold.isZero()) {
      writer.uint32(112).uint64(message.defaultMinRedemptionRateThreshold);
    }

    if (!message.defaultMaxRedemptionRateThreshold.isZero()) {
      writer.uint32(120).uint64(message.defaultMaxRedemptionRateThreshold);
    }

    if (!message.ibcTransferTimeoutNanos.isZero()) {
      writer.uint32(128).uint64(message.ibcTransferTimeoutNanos);
    }

    if (!message.safetyMaxSlashPercent.isZero()) {
      writer.uint32(144).uint64(message.safetyMaxSlashPercent);
    }

    if (!message.validatorSlashQueryThreshold.isZero()) {
      writer.uint32(152).uint64(message.validatorSlashQueryThreshold);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.rewardsInterval = (reader.uint64() as Long);
          break;

        case 6:
          message.delegateInterval = (reader.uint64() as Long);
          break;

        case 2:
          message.depositInterval = (reader.uint64() as Long);
          break;

        case 3:
          message.redemptionRateInterval = (reader.uint64() as Long);
          break;

        case 4:
          message.strideCommission = (reader.uint64() as Long);
          break;

        case 7:
          message.reinvestInterval = (reader.uint64() as Long);
          break;

        case 9:
          message.icaTimeoutNanos = (reader.uint64() as Long);
          break;

        case 10:
          message.bufferSize = (reader.uint64() as Long);
          break;

        case 11:
          message.ibcTimeoutBlocks = (reader.uint64() as Long);
          break;

        case 12:
          message.feeTransferTimeoutNanos = (reader.uint64() as Long);
          break;

        case 13:
          message.maxStakeIcaCallsPerEpoch = (reader.uint64() as Long);
          break;

        case 14:
          message.defaultMinRedemptionRateThreshold = (reader.uint64() as Long);
          break;

        case 15:
          message.defaultMaxRedemptionRateThreshold = (reader.uint64() as Long);
          break;

        case 16:
          message.ibcTransferTimeoutNanos = (reader.uint64() as Long);
          break;

        case 18:
          message.safetyMaxSlashPercent = (reader.uint64() as Long);
          break;

        case 19:
          message.validatorSlashQueryThreshold = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.rewardsInterval = object.rewardsInterval !== undefined && object.rewardsInterval !== null ? Long.fromValue(object.rewardsInterval) : Long.UZERO;
    message.delegateInterval = object.delegateInterval !== undefined && object.delegateInterval !== null ? Long.fromValue(object.delegateInterval) : Long.UZERO;
    message.depositInterval = object.depositInterval !== undefined && object.depositInterval !== null ? Long.fromValue(object.depositInterval) : Long.UZERO;
    message.redemptionRateInterval = object.redemptionRateInterval !== undefined && object.redemptionRateInterval !== null ? Long.fromValue(object.redemptionRateInterval) : Long.UZERO;
    message.strideCommission = object.strideCommission !== undefined && object.strideCommission !== null ? Long.fromValue(object.strideCommission) : Long.UZERO;
    message.reinvestInterval = object.reinvestInterval !== undefined && object.reinvestInterval !== null ? Long.fromValue(object.reinvestInterval) : Long.UZERO;
    message.icaTimeoutNanos = object.icaTimeoutNanos !== undefined && object.icaTimeoutNanos !== null ? Long.fromValue(object.icaTimeoutNanos) : Long.UZERO;
    message.bufferSize = object.bufferSize !== undefined && object.bufferSize !== null ? Long.fromValue(object.bufferSize) : Long.UZERO;
    message.ibcTimeoutBlocks = object.ibcTimeoutBlocks !== undefined && object.ibcTimeoutBlocks !== null ? Long.fromValue(object.ibcTimeoutBlocks) : Long.UZERO;
    message.feeTransferTimeoutNanos = object.feeTransferTimeoutNanos !== undefined && object.feeTransferTimeoutNanos !== null ? Long.fromValue(object.feeTransferTimeoutNanos) : Long.UZERO;
    message.maxStakeIcaCallsPerEpoch = object.maxStakeIcaCallsPerEpoch !== undefined && object.maxStakeIcaCallsPerEpoch !== null ? Long.fromValue(object.maxStakeIcaCallsPerEpoch) : Long.UZERO;
    message.defaultMinRedemptionRateThreshold = object.defaultMinRedemptionRateThreshold !== undefined && object.defaultMinRedemptionRateThreshold !== null ? Long.fromValue(object.defaultMinRedemptionRateThreshold) : Long.UZERO;
    message.defaultMaxRedemptionRateThreshold = object.defaultMaxRedemptionRateThreshold !== undefined && object.defaultMaxRedemptionRateThreshold !== null ? Long.fromValue(object.defaultMaxRedemptionRateThreshold) : Long.UZERO;
    message.ibcTransferTimeoutNanos = object.ibcTransferTimeoutNanos !== undefined && object.ibcTransferTimeoutNanos !== null ? Long.fromValue(object.ibcTransferTimeoutNanos) : Long.UZERO;
    message.safetyMaxSlashPercent = object.safetyMaxSlashPercent !== undefined && object.safetyMaxSlashPercent !== null ? Long.fromValue(object.safetyMaxSlashPercent) : Long.UZERO;
    message.validatorSlashQueryThreshold = object.validatorSlashQueryThreshold !== undefined && object.validatorSlashQueryThreshold !== null ? Long.fromValue(object.validatorSlashQueryThreshold) : Long.UZERO;
    return message;
  }

};