import { Validator, ValidatorSDKType } from "./validator";
import { ICAAccount, ICAAccountSDKType } from "./ica_account";
import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
/** next id: 22 */

export interface HostZone {
  chainId: string;
  connectionId: string;
  bech32prefix: string;
  transferChannelId: string;
  validators: Validator[];
  blacklistedValidators: Validator[];
  withdrawalAccount: ICAAccount;
  feeAccount: ICAAccount;
  delegationAccount: ICAAccount;
  redemptionAccount: ICAAccount;
  /** ibc denom on stride */

  ibcDenom: string;
  /** native denom on host zone */

  hostDenom: string;
  /**
   * TODO(TEST-68): Should we make this an array and store the last n redemption
   * rates then calculate a TWARR?
   */

  lastRedemptionRate: string;
  redemptionRate: string;
  /** stores how many days we should wait before issuing unbondings */

  unbondingFrequency: Long;
  /** TODO(TEST-101) int to dec */

  stakedBal: string;
  address: string;
  halted: boolean;
  minRedemptionRate: string;
  maxRedemptionRate: string;
}
/** next id: 22 */

export interface HostZoneSDKType {
  chain_id: string;
  connection_id: string;
  bech32prefix: string;
  transfer_channel_id: string;
  validators: ValidatorSDKType[];
  blacklisted_validators: ValidatorSDKType[];
  withdrawal_account: ICAAccountSDKType;
  fee_account: ICAAccountSDKType;
  delegation_account: ICAAccountSDKType;
  redemption_account: ICAAccountSDKType;
  /** ibc denom on stride */

  ibc_denom: string;
  /** native denom on host zone */

  host_denom: string;
  /**
   * TODO(TEST-68): Should we make this an array and store the last n redemption
   * rates then calculate a TWARR?
   */

  last_redemption_rate: string;
  redemption_rate: string;
  /** stores how many days we should wait before issuing unbondings */

  unbonding_frequency: Long;
  /** TODO(TEST-101) int to dec */

  staked_bal: string;
  address: string;
  halted: boolean;
  min_redemption_rate: string;
  max_redemption_rate: string;
}

function createBaseHostZone(): HostZone {
  return {
    chainId: "",
    connectionId: "",
    bech32prefix: "",
    transferChannelId: "",
    validators: [],
    blacklistedValidators: [],
    withdrawalAccount: undefined,
    feeAccount: undefined,
    delegationAccount: undefined,
    redemptionAccount: undefined,
    ibcDenom: "",
    hostDenom: "",
    lastRedemptionRate: "",
    redemptionRate: "",
    unbondingFrequency: Long.UZERO,
    stakedBal: "",
    address: "",
    halted: false,
    minRedemptionRate: "",
    maxRedemptionRate: ""
  };
}

export const HostZone = {
  encode(message: HostZone, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }

    if (message.connectionId !== "") {
      writer.uint32(18).string(message.connectionId);
    }

    if (message.bech32prefix !== "") {
      writer.uint32(138).string(message.bech32prefix);
    }

    if (message.transferChannelId !== "") {
      writer.uint32(98).string(message.transferChannelId);
    }

    for (const v of message.validators) {
      Validator.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    for (const v of message.blacklistedValidators) {
      Validator.encode(v!, writer.uint32(34).fork()).ldelim();
    }

    if (message.withdrawalAccount !== undefined) {
      ICAAccount.encode(message.withdrawalAccount, writer.uint32(42).fork()).ldelim();
    }

    if (message.feeAccount !== undefined) {
      ICAAccount.encode(message.feeAccount, writer.uint32(50).fork()).ldelim();
    }

    if (message.delegationAccount !== undefined) {
      ICAAccount.encode(message.delegationAccount, writer.uint32(58).fork()).ldelim();
    }

    if (message.redemptionAccount !== undefined) {
      ICAAccount.encode(message.redemptionAccount, writer.uint32(130).fork()).ldelim();
    }

    if (message.ibcDenom !== "") {
      writer.uint32(66).string(message.ibcDenom);
    }

    if (message.hostDenom !== "") {
      writer.uint32(74).string(message.hostDenom);
    }

    if (message.lastRedemptionRate !== "") {
      writer.uint32(82).string(message.lastRedemptionRate);
    }

    if (message.redemptionRate !== "") {
      writer.uint32(90).string(message.redemptionRate);
    }

    if (!message.unbondingFrequency.isZero()) {
      writer.uint32(112).uint64(message.unbondingFrequency);
    }

    if (message.stakedBal !== "") {
      writer.uint32(106).string(message.stakedBal);
    }

    if (message.address !== "") {
      writer.uint32(146).string(message.address);
    }

    if (message.halted === true) {
      writer.uint32(152).bool(message.halted);
    }

    if (message.minRedemptionRate !== "") {
      writer.uint32(162).string(message.minRedemptionRate);
    }

    if (message.maxRedemptionRate !== "") {
      writer.uint32(170).string(message.maxRedemptionRate);
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

        case 2:
          message.connectionId = reader.string();
          break;

        case 17:
          message.bech32prefix = reader.string();
          break;

        case 12:
          message.transferChannelId = reader.string();
          break;

        case 3:
          message.validators.push(Validator.decode(reader, reader.uint32()));
          break;

        case 4:
          message.blacklistedValidators.push(Validator.decode(reader, reader.uint32()));
          break;

        case 5:
          message.withdrawalAccount = ICAAccount.decode(reader, reader.uint32());
          break;

        case 6:
          message.feeAccount = ICAAccount.decode(reader, reader.uint32());
          break;

        case 7:
          message.delegationAccount = ICAAccount.decode(reader, reader.uint32());
          break;

        case 16:
          message.redemptionAccount = ICAAccount.decode(reader, reader.uint32());
          break;

        case 8:
          message.ibcDenom = reader.string();
          break;

        case 9:
          message.hostDenom = reader.string();
          break;

        case 10:
          message.lastRedemptionRate = reader.string();
          break;

        case 11:
          message.redemptionRate = reader.string();
          break;

        case 14:
          message.unbondingFrequency = (reader.uint64() as Long);
          break;

        case 13:
          message.stakedBal = reader.string();
          break;

        case 18:
          message.address = reader.string();
          break;

        case 19:
          message.halted = reader.bool();
          break;

        case 20:
          message.minRedemptionRate = reader.string();
          break;

        case 21:
          message.maxRedemptionRate = reader.string();
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
    message.connectionId = object.connectionId ?? "";
    message.bech32prefix = object.bech32prefix ?? "";
    message.transferChannelId = object.transferChannelId ?? "";
    message.validators = object.validators?.map(e => Validator.fromPartial(e)) || [];
    message.blacklistedValidators = object.blacklistedValidators?.map(e => Validator.fromPartial(e)) || [];
    message.withdrawalAccount = object.withdrawalAccount !== undefined && object.withdrawalAccount !== null ? ICAAccount.fromPartial(object.withdrawalAccount) : undefined;
    message.feeAccount = object.feeAccount !== undefined && object.feeAccount !== null ? ICAAccount.fromPartial(object.feeAccount) : undefined;
    message.delegationAccount = object.delegationAccount !== undefined && object.delegationAccount !== null ? ICAAccount.fromPartial(object.delegationAccount) : undefined;
    message.redemptionAccount = object.redemptionAccount !== undefined && object.redemptionAccount !== null ? ICAAccount.fromPartial(object.redemptionAccount) : undefined;
    message.ibcDenom = object.ibcDenom ?? "";
    message.hostDenom = object.hostDenom ?? "";
    message.lastRedemptionRate = object.lastRedemptionRate ?? "";
    message.redemptionRate = object.redemptionRate ?? "";
    message.unbondingFrequency = object.unbondingFrequency !== undefined && object.unbondingFrequency !== null ? Long.fromValue(object.unbondingFrequency) : Long.UZERO;
    message.stakedBal = object.stakedBal ?? "";
    message.address = object.address ?? "";
    message.halted = object.halted ?? false;
    message.minRedemptionRate = object.minRedemptionRate ?? "";
    message.maxRedemptionRate = object.maxRedemptionRate ?? "";
    return message;
  }

};