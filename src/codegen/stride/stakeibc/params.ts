import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "../../helpers";
export interface Params_ZoneComAddressEntry {
  key: string;
  value: string;
}
export interface Params_ZoneComAddressEntrySDKType {
  key: string;
  value: string;
}
/**
 * Params defines the parameters for the module.
 * next id: 18
 */

export interface Params {
  /** define epoch lengths, in stride_epochs */
  rewardsInterval: Long;
  delegateInterval: Long;
  depositInterval: Long;
  redemptionRateInterval: Long;
  strideCommission: Long;
  /**
   * zone_com_address stores which addresses to
   * send the Stride commission too, as well as what portion
   * of the fee each address is entitled to
   * TODO implement this
   */

  zoneComAddress: {
    [key: string]: string;
  };
  reinvestInterval: Long;
  validatorRebalancingThreshold: Long;
  icaTimeoutNanos: Long;
  bufferSize: Long;
  ibcTimeoutBlocks: Long;
  feeTransferTimeoutNanos: Long;
  maxStakeIcaCallsPerEpoch: Long;
  safetyMinRedemptionRateThreshold: Long;
  safetyMaxRedemptionRateThreshold: Long;
  ibcTransferTimeoutNanos: Long;
  safetyNumValidators: Long;
}
/**
 * Params defines the parameters for the module.
 * next id: 18
 */

export interface ParamsSDKType {
  /** define epoch lengths, in stride_epochs */
  rewards_interval: Long;
  delegate_interval: Long;
  deposit_interval: Long;
  redemption_rate_interval: Long;
  stride_commission: Long;
  /**
   * zone_com_address stores which addresses to
   * send the Stride commission too, as well as what portion
   * of the fee each address is entitled to
   * TODO implement this
   */

  zone_com_address: {
    [key: string]: string;
  };
  reinvest_interval: Long;
  validator_rebalancing_threshold: Long;
  ica_timeout_nanos: Long;
  buffer_size: Long;
  ibc_timeout_blocks: Long;
  fee_transfer_timeout_nanos: Long;
  max_stake_ica_calls_per_epoch: Long;
  safety_min_redemption_rate_threshold: Long;
  safety_max_redemption_rate_threshold: Long;
  ibc_transfer_timeout_nanos: Long;
  safety_num_validators: Long;
}

function createBaseParams_ZoneComAddressEntry(): Params_ZoneComAddressEntry {
  return {
    key: "",
    value: ""
  };
}

export const Params_ZoneComAddressEntry = {
  encode(message: Params_ZoneComAddressEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }

    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params_ZoneComAddressEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams_ZoneComAddressEntry();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;

        case 2:
          message.value = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<Params_ZoneComAddressEntry>): Params_ZoneComAddressEntry {
    const message = createBaseParams_ZoneComAddressEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  }

};

function createBaseParams(): Params {
  return {
    rewardsInterval: Long.UZERO,
    delegateInterval: Long.UZERO,
    depositInterval: Long.UZERO,
    redemptionRateInterval: Long.UZERO,
    strideCommission: Long.UZERO,
    zoneComAddress: {},
    reinvestInterval: Long.UZERO,
    validatorRebalancingThreshold: Long.UZERO,
    icaTimeoutNanos: Long.UZERO,
    bufferSize: Long.UZERO,
    ibcTimeoutBlocks: Long.UZERO,
    feeTransferTimeoutNanos: Long.UZERO,
    maxStakeIcaCallsPerEpoch: Long.UZERO,
    safetyMinRedemptionRateThreshold: Long.UZERO,
    safetyMaxRedemptionRateThreshold: Long.UZERO,
    ibcTransferTimeoutNanos: Long.UZERO,
    safetyNumValidators: Long.UZERO
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

    Object.entries(message.zoneComAddress).forEach(([key, value]) => {
      Params_ZoneComAddressEntry.encode({
        key: (key as any),
        value
      }, writer.uint32(42).fork()).ldelim();
    });

    if (!message.reinvestInterval.isZero()) {
      writer.uint32(56).uint64(message.reinvestInterval);
    }

    if (!message.validatorRebalancingThreshold.isZero()) {
      writer.uint32(64).uint64(message.validatorRebalancingThreshold);
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

    if (!message.safetyMinRedemptionRateThreshold.isZero()) {
      writer.uint32(112).uint64(message.safetyMinRedemptionRateThreshold);
    }

    if (!message.safetyMaxRedemptionRateThreshold.isZero()) {
      writer.uint32(120).uint64(message.safetyMaxRedemptionRateThreshold);
    }

    if (!message.ibcTransferTimeoutNanos.isZero()) {
      writer.uint32(128).uint64(message.ibcTransferTimeoutNanos);
    }

    if (!message.safetyNumValidators.isZero()) {
      writer.uint32(136).uint64(message.safetyNumValidators);
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

        case 5:
          const entry5 = Params_ZoneComAddressEntry.decode(reader, reader.uint32());

          if (entry5.value !== undefined) {
            message.zoneComAddress[entry5.key] = entry5.value;
          }

          break;

        case 7:
          message.reinvestInterval = (reader.uint64() as Long);
          break;

        case 8:
          message.validatorRebalancingThreshold = (reader.uint64() as Long);
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
          message.safetyMinRedemptionRateThreshold = (reader.uint64() as Long);
          break;

        case 15:
          message.safetyMaxRedemptionRateThreshold = (reader.uint64() as Long);
          break;

        case 16:
          message.ibcTransferTimeoutNanos = (reader.uint64() as Long);
          break;

        case 17:
          message.safetyNumValidators = (reader.uint64() as Long);
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
    message.zoneComAddress = Object.entries(object.zoneComAddress ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }

      return acc;
    }, {});
    message.reinvestInterval = object.reinvestInterval !== undefined && object.reinvestInterval !== null ? Long.fromValue(object.reinvestInterval) : Long.UZERO;
    message.validatorRebalancingThreshold = object.validatorRebalancingThreshold !== undefined && object.validatorRebalancingThreshold !== null ? Long.fromValue(object.validatorRebalancingThreshold) : Long.UZERO;
    message.icaTimeoutNanos = object.icaTimeoutNanos !== undefined && object.icaTimeoutNanos !== null ? Long.fromValue(object.icaTimeoutNanos) : Long.UZERO;
    message.bufferSize = object.bufferSize !== undefined && object.bufferSize !== null ? Long.fromValue(object.bufferSize) : Long.UZERO;
    message.ibcTimeoutBlocks = object.ibcTimeoutBlocks !== undefined && object.ibcTimeoutBlocks !== null ? Long.fromValue(object.ibcTimeoutBlocks) : Long.UZERO;
    message.feeTransferTimeoutNanos = object.feeTransferTimeoutNanos !== undefined && object.feeTransferTimeoutNanos !== null ? Long.fromValue(object.feeTransferTimeoutNanos) : Long.UZERO;
    message.maxStakeIcaCallsPerEpoch = object.maxStakeIcaCallsPerEpoch !== undefined && object.maxStakeIcaCallsPerEpoch !== null ? Long.fromValue(object.maxStakeIcaCallsPerEpoch) : Long.UZERO;
    message.safetyMinRedemptionRateThreshold = object.safetyMinRedemptionRateThreshold !== undefined && object.safetyMinRedemptionRateThreshold !== null ? Long.fromValue(object.safetyMinRedemptionRateThreshold) : Long.UZERO;
    message.safetyMaxRedemptionRateThreshold = object.safetyMaxRedemptionRateThreshold !== undefined && object.safetyMaxRedemptionRateThreshold !== null ? Long.fromValue(object.safetyMaxRedemptionRateThreshold) : Long.UZERO;
    message.ibcTransferTimeoutNanos = object.ibcTransferTimeoutNanos !== undefined && object.ibcTransferTimeoutNanos !== null ? Long.fromValue(object.ibcTransferTimeoutNanos) : Long.UZERO;
    message.safetyNumValidators = object.safetyNumValidators !== undefined && object.safetyNumValidators !== null ? Long.fromValue(object.safetyNumValidators) : Long.UZERO;
    return message;
  }

};