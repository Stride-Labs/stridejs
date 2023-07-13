import { Validator, ValidatorSDKType } from "./validator";
import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
export interface HostZone {
  chainId: string;
  bech32prefix: string;
  connectionId: string;
  transferChannelId: string;
  /** ibc denom on stride */

  ibcDenom: string;
  /** native denom on host zone */

  hostDenom: string;
  unbondingPeriod: Long;
  validators: Validator[];
  depositAddress: string;
  withdrawalIcaAddress: string;
  feeIcaAddress: string;
  delegationIcaAddress: string;
  redemptionIcaAddress: string;
  totalDelegations: string;
  lastRedemptionRate: string;
  redemptionRate: string;
  minRedemptionRate: string;
  maxRedemptionRate: string;
  lsmLiquidStakeEnabled: boolean;
  halted: boolean;
}
export interface HostZoneSDKType {
  chain_id: string;
  bech32prefix: string;
  connection_id: string;
  transfer_channel_id: string;
  /** ibc denom on stride */

  ibc_denom: string;
  /** native denom on host zone */

  host_denom: string;
  unbonding_period: Long;
  validators: ValidatorSDKType[];
  deposit_address: string;
  withdrawal_ica_address: string;
  fee_ica_address: string;
  delegation_ica_address: string;
  redemption_ica_address: string;
  total_delegations: string;
  last_redemption_rate: string;
  redemption_rate: string;
  min_redemption_rate: string;
  max_redemption_rate: string;
  lsm_liquid_stake_enabled: boolean;
  halted: boolean;
}

function createBaseHostZone(): HostZone {
  return {
    chainId: "",
    bech32prefix: "",
    connectionId: "",
    transferChannelId: "",
    ibcDenom: "",
    hostDenom: "",
    unbondingPeriod: Long.UZERO,
    validators: [],
    depositAddress: "",
    withdrawalIcaAddress: "",
    feeIcaAddress: "",
    delegationIcaAddress: "",
    redemptionIcaAddress: "",
    totalDelegations: "",
    lastRedemptionRate: "",
    redemptionRate: "",
    minRedemptionRate: "",
    maxRedemptionRate: "",
    lsmLiquidStakeEnabled: false,
    halted: false
  };
}

export const HostZone = {
  encode(message: HostZone, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }

    if (message.bech32prefix !== "") {
      writer.uint32(138).string(message.bech32prefix);
    }

    if (message.connectionId !== "") {
      writer.uint32(18).string(message.connectionId);
    }

    if (message.transferChannelId !== "") {
      writer.uint32(98).string(message.transferChannelId);
    }

    if (message.ibcDenom !== "") {
      writer.uint32(66).string(message.ibcDenom);
    }

    if (message.hostDenom !== "") {
      writer.uint32(74).string(message.hostDenom);
    }

    if (!message.unbondingPeriod.isZero()) {
      writer.uint32(208).uint64(message.unbondingPeriod);
    }

    for (const v of message.validators) {
      Validator.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    if (message.depositAddress !== "") {
      writer.uint32(146).string(message.depositAddress);
    }

    if (message.withdrawalIcaAddress !== "") {
      writer.uint32(178).string(message.withdrawalIcaAddress);
    }

    if (message.feeIcaAddress !== "") {
      writer.uint32(186).string(message.feeIcaAddress);
    }

    if (message.delegationIcaAddress !== "") {
      writer.uint32(194).string(message.delegationIcaAddress);
    }

    if (message.redemptionIcaAddress !== "") {
      writer.uint32(202).string(message.redemptionIcaAddress);
    }

    if (message.totalDelegations !== "") {
      writer.uint32(106).string(message.totalDelegations);
    }

    if (message.lastRedemptionRate !== "") {
      writer.uint32(82).string(message.lastRedemptionRate);
    }

    if (message.redemptionRate !== "") {
      writer.uint32(90).string(message.redemptionRate);
    }

    if (message.minRedemptionRate !== "") {
      writer.uint32(162).string(message.minRedemptionRate);
    }

    if (message.maxRedemptionRate !== "") {
      writer.uint32(170).string(message.maxRedemptionRate);
    }

    if (message.lsmLiquidStakeEnabled === true) {
      writer.uint32(216).bool(message.lsmLiquidStakeEnabled);
    }

    if (message.halted === true) {
      writer.uint32(152).bool(message.halted);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HostZone {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHostZone();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.chainId = reader.string();
          break;

        case 17:
          message.bech32prefix = reader.string();
          break;

        case 2:
          message.connectionId = reader.string();
          break;

        case 12:
          message.transferChannelId = reader.string();
          break;

        case 8:
          message.ibcDenom = reader.string();
          break;

        case 9:
          message.hostDenom = reader.string();
          break;

        case 26:
          message.unbondingPeriod = (reader.uint64() as Long);
          break;

        case 3:
          message.validators.push(Validator.decode(reader, reader.uint32()));
          break;

        case 18:
          message.depositAddress = reader.string();
          break;

        case 22:
          message.withdrawalIcaAddress = reader.string();
          break;

        case 23:
          message.feeIcaAddress = reader.string();
          break;

        case 24:
          message.delegationIcaAddress = reader.string();
          break;

        case 25:
          message.redemptionIcaAddress = reader.string();
          break;

        case 13:
          message.totalDelegations = reader.string();
          break;

        case 10:
          message.lastRedemptionRate = reader.string();
          break;

        case 11:
          message.redemptionRate = reader.string();
          break;

        case 20:
          message.minRedemptionRate = reader.string();
          break;

        case 21:
          message.maxRedemptionRate = reader.string();
          break;

        case 27:
          message.lsmLiquidStakeEnabled = reader.bool();
          break;

        case 19:
          message.halted = reader.bool();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<HostZone>): HostZone {
    const message = createBaseHostZone();
    message.chainId = object.chainId ?? "";
    message.bech32prefix = object.bech32prefix ?? "";
    message.connectionId = object.connectionId ?? "";
    message.transferChannelId = object.transferChannelId ?? "";
    message.ibcDenom = object.ibcDenom ?? "";
    message.hostDenom = object.hostDenom ?? "";
    message.unbondingPeriod = object.unbondingPeriod !== undefined && object.unbondingPeriod !== null ? Long.fromValue(object.unbondingPeriod) : Long.UZERO;
    message.validators = object.validators?.map(e => Validator.fromPartial(e)) || [];
    message.depositAddress = object.depositAddress ?? "";
    message.withdrawalIcaAddress = object.withdrawalIcaAddress ?? "";
    message.feeIcaAddress = object.feeIcaAddress ?? "";
    message.delegationIcaAddress = object.delegationIcaAddress ?? "";
    message.redemptionIcaAddress = object.redemptionIcaAddress ?? "";
    message.totalDelegations = object.totalDelegations ?? "";
    message.lastRedemptionRate = object.lastRedemptionRate ?? "";
    message.redemptionRate = object.redemptionRate ?? "";
    message.minRedemptionRate = object.minRedemptionRate ?? "";
    message.maxRedemptionRate = object.maxRedemptionRate ?? "";
    message.lsmLiquidStakeEnabled = object.lsmLiquidStakeEnabled ?? false;
    message.halted = object.halted ?? false;
    return message;
  }

};