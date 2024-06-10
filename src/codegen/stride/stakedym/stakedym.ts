import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
/**
 * Status fields for a delegation record
 * Note: There is an important assumption here that tokens in the deposit
 * account should not be tracked by these records. The record is created as soon
 * as the tokens leave stride
 * Additionally, the GetActiveDelegationRecords query filters for records that
 * are either TRANSFER_IN_PROGERSS or DELEGATION_QUEUE. If a new active status
 * is added, the keeper must be modified
 */

export enum DelegationRecordStatus {
  /**
   * TRANSFER_IN_PROGRESS - TRANSFER_IN_PROGRESS indicates the native tokens are being sent from the
   *  deposit account to the delegation account
   */
  TRANSFER_IN_PROGRESS = 0,

  /**
   * TRANSFER_FAILED - TRANSFER_FAILED indicates that the transfer either timed out or was an ack
   *  failure
   */
  TRANSFER_FAILED = 1,

  /**
   * DELEGATION_QUEUE - DELEGATION_QUEUE indicates the tokens have landed on the host zone and are
   *  ready to be delegated
   */
  DELEGATION_QUEUE = 2,

  /** DELEGATION_COMPLETE - DELEGATION_COMPLETE indicates the delegation has been completed */
  DELEGATION_COMPLETE = 3,
  UNRECOGNIZED = -1,
}
/**
 * Status fields for a delegation record
 * Note: There is an important assumption here that tokens in the deposit
 * account should not be tracked by these records. The record is created as soon
 * as the tokens leave stride
 * Additionally, the GetActiveDelegationRecords query filters for records that
 * are either TRANSFER_IN_PROGERSS or DELEGATION_QUEUE. If a new active status
 * is added, the keeper must be modified
 */

export enum DelegationRecordStatusSDKType {
  /**
   * TRANSFER_IN_PROGRESS - TRANSFER_IN_PROGRESS indicates the native tokens are being sent from the
   *  deposit account to the delegation account
   */
  TRANSFER_IN_PROGRESS = 0,

  /**
   * TRANSFER_FAILED - TRANSFER_FAILED indicates that the transfer either timed out or was an ack
   *  failure
   */
  TRANSFER_FAILED = 1,

  /**
   * DELEGATION_QUEUE - DELEGATION_QUEUE indicates the tokens have landed on the host zone and are
   *  ready to be delegated
   */
  DELEGATION_QUEUE = 2,

  /** DELEGATION_COMPLETE - DELEGATION_COMPLETE indicates the delegation has been completed */
  DELEGATION_COMPLETE = 3,
  UNRECOGNIZED = -1,
}
export function delegationRecordStatusFromJSON(object: any): DelegationRecordStatus {
  switch (object) {
    case 0:
    case "TRANSFER_IN_PROGRESS":
      return DelegationRecordStatus.TRANSFER_IN_PROGRESS;

    case 1:
    case "TRANSFER_FAILED":
      return DelegationRecordStatus.TRANSFER_FAILED;

    case 2:
    case "DELEGATION_QUEUE":
      return DelegationRecordStatus.DELEGATION_QUEUE;

    case 3:
    case "DELEGATION_COMPLETE":
      return DelegationRecordStatus.DELEGATION_COMPLETE;

    case -1:
    case "UNRECOGNIZED":
    default:
      return DelegationRecordStatus.UNRECOGNIZED;
  }
}
export function delegationRecordStatusToJSON(object: DelegationRecordStatus): string {
  switch (object) {
    case DelegationRecordStatus.TRANSFER_IN_PROGRESS:
      return "TRANSFER_IN_PROGRESS";

    case DelegationRecordStatus.TRANSFER_FAILED:
      return "TRANSFER_FAILED";

    case DelegationRecordStatus.DELEGATION_QUEUE:
      return "DELEGATION_QUEUE";

    case DelegationRecordStatus.DELEGATION_COMPLETE:
      return "DELEGATION_COMPLETE";

    default:
      return "UNKNOWN";
  }
}
/** Status fields for an unbonding record */

export enum UnbondingRecordStatus {
  /**
   * ACCUMULATING_REDEMPTIONS - ACCUMULATING_REDEMPTIONS indicates redemptions are still being accumulated
   *  on this record
   */
  ACCUMULATING_REDEMPTIONS = 0,

  /**
   * UNBONDING_QUEUE - UNBONDING_QUEUE indicates the unbond amount for this epoch has been froze
   *  and the tokens are ready to be unbonded on the host zone
   */
  UNBONDING_QUEUE = 1,

  /**
   * UNBONDING_IN_PROGRESS - UNBONDING_IN_PROGRESS indicates the unbonding is currently in progress on
   *  the host zone
   */
  UNBONDING_IN_PROGRESS = 2,

  /**
   * UNBONDED - UNBONDED indicates the unbonding is finished on the host zone and the
   *  tokens are still in the delegation account
   */
  UNBONDED = 3,

  /**
   * CLAIMABLE - CLAIMABLE indicates the unbonded tokens have been swept to stride and are
   *  ready to be distributed to users
   */
  CLAIMABLE = 4,

  /** CLAIMED - CLAIMED indicates the full unbonding cycle has been completed */
  CLAIMED = 5,
  UNRECOGNIZED = -1,
}
/** Status fields for an unbonding record */

export enum UnbondingRecordStatusSDKType {
  /**
   * ACCUMULATING_REDEMPTIONS - ACCUMULATING_REDEMPTIONS indicates redemptions are still being accumulated
   *  on this record
   */
  ACCUMULATING_REDEMPTIONS = 0,

  /**
   * UNBONDING_QUEUE - UNBONDING_QUEUE indicates the unbond amount for this epoch has been froze
   *  and the tokens are ready to be unbonded on the host zone
   */
  UNBONDING_QUEUE = 1,

  /**
   * UNBONDING_IN_PROGRESS - UNBONDING_IN_PROGRESS indicates the unbonding is currently in progress on
   *  the host zone
   */
  UNBONDING_IN_PROGRESS = 2,

  /**
   * UNBONDED - UNBONDED indicates the unbonding is finished on the host zone and the
   *  tokens are still in the delegation account
   */
  UNBONDED = 3,

  /**
   * CLAIMABLE - CLAIMABLE indicates the unbonded tokens have been swept to stride and are
   *  ready to be distributed to users
   */
  CLAIMABLE = 4,

  /** CLAIMED - CLAIMED indicates the full unbonding cycle has been completed */
  CLAIMED = 5,
  UNRECOGNIZED = -1,
}
export function unbondingRecordStatusFromJSON(object: any): UnbondingRecordStatus {
  switch (object) {
    case 0:
    case "ACCUMULATING_REDEMPTIONS":
      return UnbondingRecordStatus.ACCUMULATING_REDEMPTIONS;

    case 1:
    case "UNBONDING_QUEUE":
      return UnbondingRecordStatus.UNBONDING_QUEUE;

    case 2:
    case "UNBONDING_IN_PROGRESS":
      return UnbondingRecordStatus.UNBONDING_IN_PROGRESS;

    case 3:
    case "UNBONDED":
      return UnbondingRecordStatus.UNBONDED;

    case 4:
    case "CLAIMABLE":
      return UnbondingRecordStatus.CLAIMABLE;

    case 5:
    case "CLAIMED":
      return UnbondingRecordStatus.CLAIMED;

    case -1:
    case "UNRECOGNIZED":
    default:
      return UnbondingRecordStatus.UNRECOGNIZED;
  }
}
export function unbondingRecordStatusToJSON(object: UnbondingRecordStatus): string {
  switch (object) {
    case UnbondingRecordStatus.ACCUMULATING_REDEMPTIONS:
      return "ACCUMULATING_REDEMPTIONS";

    case UnbondingRecordStatus.UNBONDING_QUEUE:
      return "UNBONDING_QUEUE";

    case UnbondingRecordStatus.UNBONDING_IN_PROGRESS:
      return "UNBONDING_IN_PROGRESS";

    case UnbondingRecordStatus.UNBONDED:
      return "UNBONDED";

    case UnbondingRecordStatus.CLAIMABLE:
      return "CLAIMABLE";

    case UnbondingRecordStatus.CLAIMED:
      return "CLAIMED";

    default:
      return "UNKNOWN";
  }
}
export interface HostZone {
  /** Chain ID */
  chainId: string;
  /** Native token denom on the host zone (e.g. adym) */

  nativeTokenDenom: string;
  /** IBC denom of the native token as it lives on stride (e.g. ibc/...) */

  nativeTokenIbcDenom: string;
  /** Transfer channel ID from stride to the host zone */

  transferChannelId: string;
  /** Operator controlled delegation address on the host zone */

  delegationAddress: string;
  /** Operator controlled reward address on the host zone */

  rewardAddress: string;
  /** Deposit address on stride */

  depositAddress: string;
  /** Redemption address on stride */

  redemptionAddress: string;
  /** Claim address on stride */

  claimAddress: string;
  /** operator address set by safe, on stride */

  operatorAddressOnStride: string;
  /** admin address set upon host zone creation,  on stride */

  safeAddressOnStride: string;
  /** Previous redemption rate */

  lastRedemptionRate: string;
  /** Current redemption rate */

  redemptionRate: string;
  /** Min outer redemption rate - adjusted by governance */

  minRedemptionRate: string;
  /** Max outer redemption rate - adjusted by governance */

  maxRedemptionRate: string;
  /** Min inner redemption rate - adjusted by controller */

  minInnerRedemptionRate: string;
  /** Max inner redemption rate - adjusted by controller */

  maxInnerRedemptionRate: string;
  /** Total delegated balance on the host zone delegation account */

  delegatedBalance: string;
  /** The undelegation period for Dymension in days */

  unbondingPeriodSeconds: Long;
  /** Indicates whether the host zone has been halted */

  halted: boolean;
}
export interface HostZoneSDKType {
  /** Chain ID */
  chain_id: string;
  /** Native token denom on the host zone (e.g. adym) */

  native_token_denom: string;
  /** IBC denom of the native token as it lives on stride (e.g. ibc/...) */

  native_token_ibc_denom: string;
  /** Transfer channel ID from stride to the host zone */

  transfer_channel_id: string;
  /** Operator controlled delegation address on the host zone */

  delegation_address: string;
  /** Operator controlled reward address on the host zone */

  reward_address: string;
  /** Deposit address on stride */

  deposit_address: string;
  /** Redemption address on stride */

  redemption_address: string;
  /** Claim address on stride */

  claim_address: string;
  /** operator address set by safe, on stride */

  operator_address_on_stride: string;
  /** admin address set upon host zone creation,  on stride */

  safe_address_on_stride: string;
  /** Previous redemption rate */

  last_redemption_rate: string;
  /** Current redemption rate */

  redemption_rate: string;
  /** Min outer redemption rate - adjusted by governance */

  min_redemption_rate: string;
  /** Max outer redemption rate - adjusted by governance */

  max_redemption_rate: string;
  /** Min inner redemption rate - adjusted by controller */

  min_inner_redemption_rate: string;
  /** Max inner redemption rate - adjusted by controller */

  max_inner_redemption_rate: string;
  /** Total delegated balance on the host zone delegation account */

  delegated_balance: string;
  /** The undelegation period for Dymension in days */

  unbonding_period_seconds: Long;
  /** Indicates whether the host zone has been halted */

  halted: boolean;
}
/**
 * DelegationRecords track the aggregate liquid stakes and delegations
 * for a given epoch
 * Note: There is an important assumption here that tokens in the deposit
 * account should not be tracked by these records. The record is created as soon
 * as the tokens leave stride
 */

export interface DelegationRecord {
  /** Deposit record unique ID */
  id: Long;
  /** The amount of native tokens that should be delegated */

  nativeAmount: string;
  /** The status indicating the point in the delegation's lifecycle */

  status: DelegationRecordStatus;
  /** The tx hash of the delegation on the host zone */

  txHash: string;
}
/**
 * DelegationRecords track the aggregate liquid stakes and delegations
 * for a given epoch
 * Note: There is an important assumption here that tokens in the deposit
 * account should not be tracked by these records. The record is created as soon
 * as the tokens leave stride
 */

export interface DelegationRecordSDKType {
  /** Deposit record unique ID */
  id: Long;
  /** The amount of native tokens that should be delegated */

  native_amount: string;
  /** The status indicating the point in the delegation's lifecycle */

  status: DelegationRecordStatusSDKType;
  /** The tx hash of the delegation on the host zone */

  tx_hash: string;
}
/** UnbondingRecords track the aggregate unbondings across an epoch */

export interface UnbondingRecord {
  /** Unbonding record ID */
  id: Long;
  /** The status indicating the point in the delegation's lifecycle */

  status: UnbondingRecordStatus;
  /** The amount of stTokens that were redeemed */

  stTokenAmount: string;
  /** The corresponding amount of native tokens that should be unbonded */

  nativeAmount: string;
  /** The Unix timestamp (in seconds) at which the unbonding completes */

  unbondingCompletionTimeSeconds: Long;
  /** The tx hash of the undelegation on the host zone */

  undelegationTxHash: string;
  /** The tx hash of the unbonded token sweep on the host zone */

  unbondedTokenSweepTxHash: string;
}
/** UnbondingRecords track the aggregate unbondings across an epoch */

export interface UnbondingRecordSDKType {
  /** Unbonding record ID */
  id: Long;
  /** The status indicating the point in the delegation's lifecycle */

  status: UnbondingRecordStatusSDKType;
  /** The amount of stTokens that were redeemed */

  st_token_amount: string;
  /** The corresponding amount of native tokens that should be unbonded */

  native_amount: string;
  /** The Unix timestamp (in seconds) at which the unbonding completes */

  unbonding_completion_time_seconds: Long;
  /** The tx hash of the undelegation on the host zone */

  undelegation_tx_hash: string;
  /** The tx hash of the unbonded token sweep on the host zone */

  unbonded_token_sweep_tx_hash: string;
}
/** RedemptionRecords track an individual user's redemption claims */

export interface RedemptionRecord {
  /** Unbonding record ID */
  unbondingRecordId: Long;
  /** Redeemer */

  redeemer: string;
  /** The amount of stTokens that were redeemed */

  stTokenAmount: string;
  /** The corresponding amount of native tokens that should be unbonded */

  nativeAmount: string;
}
/** RedemptionRecords track an individual user's redemption claims */

export interface RedemptionRecordSDKType {
  /** Unbonding record ID */
  unbonding_record_id: Long;
  /** Redeemer */

  redeemer: string;
  /** The amount of stTokens that were redeemed */

  st_token_amount: string;
  /** The corresponding amount of native tokens that should be unbonded */

  native_amount: string;
}
/** SlashRecords log adjustments to the delegated balance */

export interface SlashRecord {
  /** The slash record monotonically increasing ID */
  id: Long;
  /**
   * The Unix timestamp (in seconds) when the slash adjustment was processed on
   * stride
   */

  time: Long;
  /** The delta by which the total delegated amount changed from slash */

  nativeAmount: string;
  /** The address (or addresses) of the validator that was slashed */

  validatorAddress: string;
}
/** SlashRecords log adjustments to the delegated balance */

export interface SlashRecordSDKType {
  /** The slash record monotonically increasing ID */
  id: Long;
  /**
   * The Unix timestamp (in seconds) when the slash adjustment was processed on
   * stride
   */

  time: Long;
  /** The delta by which the total delegated amount changed from slash */

  native_amount: string;
  /** The address (or addresses) of the validator that was slashed */

  validator_address: string;
}

function createBaseHostZone(): HostZone {
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
    unbondingPeriodSeconds: Long.UZERO,
    halted: false
  };
}

export const HostZone = {
  encode(message: HostZone, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
      writer.uint32(98).string(message.lastRedemptionRate);
    }

    if (message.redemptionRate !== "") {
      writer.uint32(106).string(message.redemptionRate);
    }

    if (message.minRedemptionRate !== "") {
      writer.uint32(114).string(message.minRedemptionRate);
    }

    if (message.maxRedemptionRate !== "") {
      writer.uint32(122).string(message.maxRedemptionRate);
    }

    if (message.minInnerRedemptionRate !== "") {
      writer.uint32(130).string(message.minInnerRedemptionRate);
    }

    if (message.maxInnerRedemptionRate !== "") {
      writer.uint32(138).string(message.maxInnerRedemptionRate);
    }

    if (message.delegatedBalance !== "") {
      writer.uint32(146).string(message.delegatedBalance);
    }

    if (!message.unbondingPeriodSeconds.isZero()) {
      writer.uint32(152).uint64(message.unbondingPeriodSeconds);
    }

    if (message.halted === true) {
      writer.uint32(160).bool(message.halted);
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
          message.lastRedemptionRate = reader.string();
          break;

        case 13:
          message.redemptionRate = reader.string();
          break;

        case 14:
          message.minRedemptionRate = reader.string();
          break;

        case 15:
          message.maxRedemptionRate = reader.string();
          break;

        case 16:
          message.minInnerRedemptionRate = reader.string();
          break;

        case 17:
          message.maxInnerRedemptionRate = reader.string();
          break;

        case 18:
          message.delegatedBalance = reader.string();
          break;

        case 19:
          message.unbondingPeriodSeconds = (reader.uint64() as Long);
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

  fromPartial(object: DeepPartial<HostZone>): HostZone {
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
    message.unbondingPeriodSeconds = object.unbondingPeriodSeconds !== undefined && object.unbondingPeriodSeconds !== null ? Long.fromValue(object.unbondingPeriodSeconds) : Long.UZERO;
    message.halted = object.halted ?? false;
    return message;
  }

};

function createBaseDelegationRecord(): DelegationRecord {
  return {
    id: Long.UZERO,
    nativeAmount: "",
    status: 0,
    txHash: ""
  };
}

export const DelegationRecord = {
  encode(message: DelegationRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): DelegationRecord {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDelegationRecord();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = (reader.uint64() as Long);
          break;

        case 2:
          message.nativeAmount = reader.string();
          break;

        case 3:
          message.status = (reader.int32() as any);
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

  fromPartial(object: DeepPartial<DelegationRecord>): DelegationRecord {
    const message = createBaseDelegationRecord();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.nativeAmount = object.nativeAmount ?? "";
    message.status = object.status ?? 0;
    message.txHash = object.txHash ?? "";
    return message;
  }

};

function createBaseUnbondingRecord(): UnbondingRecord {
  return {
    id: Long.UZERO,
    status: 0,
    stTokenAmount: "",
    nativeAmount: "",
    unbondingCompletionTimeSeconds: Long.UZERO,
    undelegationTxHash: "",
    unbondedTokenSweepTxHash: ""
  };
}

export const UnbondingRecord = {
  encode(message: UnbondingRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
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

    if (!message.unbondingCompletionTimeSeconds.isZero()) {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): UnbondingRecord {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUnbondingRecord();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = (reader.uint64() as Long);
          break;

        case 2:
          message.status = (reader.int32() as any);
          break;

        case 3:
          message.stTokenAmount = reader.string();
          break;

        case 4:
          message.nativeAmount = reader.string();
          break;

        case 5:
          message.unbondingCompletionTimeSeconds = (reader.uint64() as Long);
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

  fromPartial(object: DeepPartial<UnbondingRecord>): UnbondingRecord {
    const message = createBaseUnbondingRecord();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.status = object.status ?? 0;
    message.stTokenAmount = object.stTokenAmount ?? "";
    message.nativeAmount = object.nativeAmount ?? "";
    message.unbondingCompletionTimeSeconds = object.unbondingCompletionTimeSeconds !== undefined && object.unbondingCompletionTimeSeconds !== null ? Long.fromValue(object.unbondingCompletionTimeSeconds) : Long.UZERO;
    message.undelegationTxHash = object.undelegationTxHash ?? "";
    message.unbondedTokenSweepTxHash = object.unbondedTokenSweepTxHash ?? "";
    return message;
  }

};

function createBaseRedemptionRecord(): RedemptionRecord {
  return {
    unbondingRecordId: Long.UZERO,
    redeemer: "",
    stTokenAmount: "",
    nativeAmount: ""
  };
}

export const RedemptionRecord = {
  encode(message: RedemptionRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.unbondingRecordId.isZero()) {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): RedemptionRecord {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRedemptionRecord();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.unbondingRecordId = (reader.uint64() as Long);
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

  fromPartial(object: DeepPartial<RedemptionRecord>): RedemptionRecord {
    const message = createBaseRedemptionRecord();
    message.unbondingRecordId = object.unbondingRecordId !== undefined && object.unbondingRecordId !== null ? Long.fromValue(object.unbondingRecordId) : Long.UZERO;
    message.redeemer = object.redeemer ?? "";
    message.stTokenAmount = object.stTokenAmount ?? "";
    message.nativeAmount = object.nativeAmount ?? "";
    return message;
  }

};

function createBaseSlashRecord(): SlashRecord {
  return {
    id: Long.UZERO,
    time: Long.UZERO,
    nativeAmount: "",
    validatorAddress: ""
  };
}

export const SlashRecord = {
  encode(message: SlashRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }

    if (!message.time.isZero()) {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): SlashRecord {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSlashRecord();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = (reader.uint64() as Long);
          break;

        case 2:
          message.time = (reader.uint64() as Long);
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

  fromPartial(object: DeepPartial<SlashRecord>): SlashRecord {
    const message = createBaseSlashRecord();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.time = object.time !== undefined && object.time !== null ? Long.fromValue(object.time) : Long.UZERO;
    message.nativeAmount = object.nativeAmount ?? "";
    message.validatorAddress = object.validatorAddress ?? "";
    return message;
  }

};