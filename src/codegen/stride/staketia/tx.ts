import { DelegationRecord, DelegationRecordSDKType, UnbondingRecord, UnbondingRecordSDKType, RedemptionRecord, RedemptionRecordSDKType } from "./staketia";
import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
export enum OverwritableRecordType {
  RECORD_TYPE_DELEGATION = 0,
  RECORD_TYPE_UNBONDING = 1,
  RECORD_TYPE_REDEMPTION = 2,
  UNRECOGNIZED = -1,
}
export enum OverwritableRecordTypeSDKType {
  RECORD_TYPE_DELEGATION = 0,
  RECORD_TYPE_UNBONDING = 1,
  RECORD_TYPE_REDEMPTION = 2,
  UNRECOGNIZED = -1,
}
export function overwritableRecordTypeFromJSON(object: any): OverwritableRecordType {
  switch (object) {
    case 0:
    case "RECORD_TYPE_DELEGATION":
      return OverwritableRecordType.RECORD_TYPE_DELEGATION;

    case 1:
    case "RECORD_TYPE_UNBONDING":
      return OverwritableRecordType.RECORD_TYPE_UNBONDING;

    case 2:
    case "RECORD_TYPE_REDEMPTION":
      return OverwritableRecordType.RECORD_TYPE_REDEMPTION;

    case -1:
    case "UNRECOGNIZED":
    default:
      return OverwritableRecordType.UNRECOGNIZED;
  }
}
export function overwritableRecordTypeToJSON(object: OverwritableRecordType): string {
  switch (object) {
    case OverwritableRecordType.RECORD_TYPE_DELEGATION:
      return "RECORD_TYPE_DELEGATION";

    case OverwritableRecordType.RECORD_TYPE_UNBONDING:
      return "RECORD_TYPE_UNBONDING";

    case OverwritableRecordType.RECORD_TYPE_REDEMPTION:
      return "RECORD_TYPE_REDEMPTION";

    default:
      return "UNKNOWN";
  }
}
/** LiquidStake */

export interface MsgLiquidStake {
  staker: string;
  nativeAmount: string;
}
/** LiquidStake */

export interface MsgLiquidStakeSDKType {
  staker: string;
  native_amount: string;
}
export interface MsgLiquidStakeResponse {
  stToken: Coin;
}
export interface MsgLiquidStakeResponseSDKType {
  st_token: CoinSDKType;
}
/** RedeemStake */

export interface MsgRedeemStake {
  redeemer: string;
  stTokenAmount: string;
}
/** RedeemStake */

export interface MsgRedeemStakeSDKType {
  redeemer: string;
  st_token_amount: string;
}
export interface MsgRedeemStakeResponse {
  nativeToken: Coin;
}
export interface MsgRedeemStakeResponseSDKType {
  native_token: CoinSDKType;
}
/** ConfirmDelegation */

export interface MsgConfirmDelegation {
  operator: string;
  recordId: Long;
  txHash: string;
}
/** ConfirmDelegation */

export interface MsgConfirmDelegationSDKType {
  operator: string;
  record_id: Long;
  tx_hash: string;
}
export interface MsgConfirmDelegationResponse {}
export interface MsgConfirmDelegationResponseSDKType {}
/** ConfirmUndelegation */

export interface MsgConfirmUndelegation {
  operator: string;
  recordId: Long;
  txHash: string;
}
/** ConfirmUndelegation */

export interface MsgConfirmUndelegationSDKType {
  operator: string;
  record_id: Long;
  tx_hash: string;
}
export interface MsgConfirmUndelegationResponse {}
export interface MsgConfirmUndelegationResponseSDKType {}
/** ConfirmUnbondedTokenSweep */

export interface MsgConfirmUnbondedTokenSweep {
  operator: string;
  recordId: Long;
  txHash: string;
}
/** ConfirmUnbondedTokenSweep */

export interface MsgConfirmUnbondedTokenSweepSDKType {
  operator: string;
  record_id: Long;
  tx_hash: string;
}
export interface MsgConfirmUnbondedTokenSweepResponse {}
export interface MsgConfirmUnbondedTokenSweepResponseSDKType {}
/** AdjustDelegatedBalance */

export interface MsgAdjustDelegatedBalance {
  operator: string;
  delegationOffset: string;
  validatorAddress: string;
}
/** AdjustDelegatedBalance */

export interface MsgAdjustDelegatedBalanceSDKType {
  operator: string;
  delegation_offset: string;
  validator_address: string;
}
export interface MsgAdjustDelegatedBalanceResponse {}
export interface MsgAdjustDelegatedBalanceResponseSDKType {}
/** UpdateInnerRedemptionRate */

export interface MsgUpdateInnerRedemptionRateBounds {
  creator: string;
  minInnerRedemptionRate: string;
  maxInnerRedemptionRate: string;
}
/** UpdateInnerRedemptionRate */

export interface MsgUpdateInnerRedemptionRateBoundsSDKType {
  creator: string;
  min_inner_redemption_rate: string;
  max_inner_redemption_rate: string;
}
export interface MsgUpdateInnerRedemptionRateBoundsResponse {}
export interface MsgUpdateInnerRedemptionRateBoundsResponseSDKType {}
/** ResumeHostZone */

export interface MsgResumeHostZone {
  creator: string;
}
/** ResumeHostZone */

export interface MsgResumeHostZoneSDKType {
  creator: string;
}
export interface MsgResumeHostZoneResponse {}
export interface MsgResumeHostZoneResponseSDKType {}
/** RefreshRedemptionRate */

export interface MsgRefreshRedemptionRate {
  creator: string;
}
/** RefreshRedemptionRate */

export interface MsgRefreshRedemptionRateSDKType {
  creator: string;
}
export interface MsgRefreshRedemptionRateResponse {}
export interface MsgRefreshRedemptionRateResponseSDKType {}
/** OverwriteDelegationRecord */

export interface MsgOverwriteDelegationRecord {
  creator: string;
  delegationRecord: DelegationRecord;
}
/** OverwriteDelegationRecord */

export interface MsgOverwriteDelegationRecordSDKType {
  creator: string;
  delegation_record: DelegationRecordSDKType;
}
export interface MsgOverwriteDelegationRecordResponse {}
export interface MsgOverwriteDelegationRecordResponseSDKType {}
/** OverwriteUnbondingRecord */

export interface MsgOverwriteUnbondingRecord {
  creator: string;
  unbondingRecord: UnbondingRecord;
}
/** OverwriteUnbondingRecord */

export interface MsgOverwriteUnbondingRecordSDKType {
  creator: string;
  unbonding_record: UnbondingRecordSDKType;
}
export interface MsgOverwriteUnbondingRecordResponse {}
export interface MsgOverwriteUnbondingRecordResponseSDKType {}
/** OverwriteRedemptionRecord */

export interface MsgOverwriteRedemptionRecord {
  creator: string;
  redemptionRecord: RedemptionRecord;
}
/** OverwriteRedemptionRecord */

export interface MsgOverwriteRedemptionRecordSDKType {
  creator: string;
  redemption_record: RedemptionRecordSDKType;
}
export interface MsgOverwriteRedemptionRecordResponse {}
export interface MsgOverwriteRedemptionRecordResponseSDKType {}
/** SetOperatorAddress */

export interface MsgSetOperatorAddress {
  signer: string;
  operator: string;
}
/** SetOperatorAddress */

export interface MsgSetOperatorAddressSDKType {
  signer: string;
  operator: string;
}
export interface MsgSetOperatorAddressResponse {}
export interface MsgSetOperatorAddressResponseSDKType {}

function createBaseMsgLiquidStake(): MsgLiquidStake {
  return {
    staker: "",
    nativeAmount: ""
  };
}

export const MsgLiquidStake = {
  encode(message: MsgLiquidStake, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.staker !== "") {
      writer.uint32(10).string(message.staker);
    }

    if (message.nativeAmount !== "") {
      writer.uint32(18).string(message.nativeAmount);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgLiquidStake {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgLiquidStake();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.staker = reader.string();
          break;

        case 2:
          message.nativeAmount = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgLiquidStake>): MsgLiquidStake {
    const message = createBaseMsgLiquidStake();
    message.staker = object.staker ?? "";
    message.nativeAmount = object.nativeAmount ?? "";
    return message;
  }

};

function createBaseMsgLiquidStakeResponse(): MsgLiquidStakeResponse {
  return {
    stToken: undefined
  };
}

export const MsgLiquidStakeResponse = {
  encode(message: MsgLiquidStakeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.stToken !== undefined) {
      Coin.encode(message.stToken, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgLiquidStakeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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

  fromPartial(object: DeepPartial<MsgLiquidStakeResponse>): MsgLiquidStakeResponse {
    const message = createBaseMsgLiquidStakeResponse();
    message.stToken = object.stToken !== undefined && object.stToken !== null ? Coin.fromPartial(object.stToken) : undefined;
    return message;
  }

};

function createBaseMsgRedeemStake(): MsgRedeemStake {
  return {
    redeemer: "",
    stTokenAmount: ""
  };
}

export const MsgRedeemStake = {
  encode(message: MsgRedeemStake, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.redeemer !== "") {
      writer.uint32(10).string(message.redeemer);
    }

    if (message.stTokenAmount !== "") {
      writer.uint32(18).string(message.stTokenAmount);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRedeemStake {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRedeemStake();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.redeemer = reader.string();
          break;

        case 2:
          message.stTokenAmount = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgRedeemStake>): MsgRedeemStake {
    const message = createBaseMsgRedeemStake();
    message.redeemer = object.redeemer ?? "";
    message.stTokenAmount = object.stTokenAmount ?? "";
    return message;
  }

};

function createBaseMsgRedeemStakeResponse(): MsgRedeemStakeResponse {
  return {
    nativeToken: undefined
  };
}

export const MsgRedeemStakeResponse = {
  encode(message: MsgRedeemStakeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nativeToken !== undefined) {
      Coin.encode(message.nativeToken, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRedeemStakeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRedeemStakeResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.nativeToken = Coin.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgRedeemStakeResponse>): MsgRedeemStakeResponse {
    const message = createBaseMsgRedeemStakeResponse();
    message.nativeToken = object.nativeToken !== undefined && object.nativeToken !== null ? Coin.fromPartial(object.nativeToken) : undefined;
    return message;
  }

};

function createBaseMsgConfirmDelegation(): MsgConfirmDelegation {
  return {
    operator: "",
    recordId: Long.UZERO,
    txHash: ""
  };
}

export const MsgConfirmDelegation = {
  encode(message: MsgConfirmDelegation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.operator !== "") {
      writer.uint32(10).string(message.operator);
    }

    if (!message.recordId.isZero()) {
      writer.uint32(16).uint64(message.recordId);
    }

    if (message.txHash !== "") {
      writer.uint32(26).string(message.txHash);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgConfirmDelegation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgConfirmDelegation();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.operator = reader.string();
          break;

        case 2:
          message.recordId = (reader.uint64() as Long);
          break;

        case 3:
          message.txHash = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgConfirmDelegation>): MsgConfirmDelegation {
    const message = createBaseMsgConfirmDelegation();
    message.operator = object.operator ?? "";
    message.recordId = object.recordId !== undefined && object.recordId !== null ? Long.fromValue(object.recordId) : Long.UZERO;
    message.txHash = object.txHash ?? "";
    return message;
  }

};

function createBaseMsgConfirmDelegationResponse(): MsgConfirmDelegationResponse {
  return {};
}

export const MsgConfirmDelegationResponse = {
  encode(_: MsgConfirmDelegationResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgConfirmDelegationResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgConfirmDelegationResponse();

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

  fromPartial(_: DeepPartial<MsgConfirmDelegationResponse>): MsgConfirmDelegationResponse {
    const message = createBaseMsgConfirmDelegationResponse();
    return message;
  }

};

function createBaseMsgConfirmUndelegation(): MsgConfirmUndelegation {
  return {
    operator: "",
    recordId: Long.UZERO,
    txHash: ""
  };
}

export const MsgConfirmUndelegation = {
  encode(message: MsgConfirmUndelegation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.operator !== "") {
      writer.uint32(10).string(message.operator);
    }

    if (!message.recordId.isZero()) {
      writer.uint32(16).uint64(message.recordId);
    }

    if (message.txHash !== "") {
      writer.uint32(26).string(message.txHash);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgConfirmUndelegation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgConfirmUndelegation();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.operator = reader.string();
          break;

        case 2:
          message.recordId = (reader.uint64() as Long);
          break;

        case 3:
          message.txHash = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgConfirmUndelegation>): MsgConfirmUndelegation {
    const message = createBaseMsgConfirmUndelegation();
    message.operator = object.operator ?? "";
    message.recordId = object.recordId !== undefined && object.recordId !== null ? Long.fromValue(object.recordId) : Long.UZERO;
    message.txHash = object.txHash ?? "";
    return message;
  }

};

function createBaseMsgConfirmUndelegationResponse(): MsgConfirmUndelegationResponse {
  return {};
}

export const MsgConfirmUndelegationResponse = {
  encode(_: MsgConfirmUndelegationResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgConfirmUndelegationResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgConfirmUndelegationResponse();

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

  fromPartial(_: DeepPartial<MsgConfirmUndelegationResponse>): MsgConfirmUndelegationResponse {
    const message = createBaseMsgConfirmUndelegationResponse();
    return message;
  }

};

function createBaseMsgConfirmUnbondedTokenSweep(): MsgConfirmUnbondedTokenSweep {
  return {
    operator: "",
    recordId: Long.UZERO,
    txHash: ""
  };
}

export const MsgConfirmUnbondedTokenSweep = {
  encode(message: MsgConfirmUnbondedTokenSweep, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.operator !== "") {
      writer.uint32(10).string(message.operator);
    }

    if (!message.recordId.isZero()) {
      writer.uint32(16).uint64(message.recordId);
    }

    if (message.txHash !== "") {
      writer.uint32(26).string(message.txHash);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgConfirmUnbondedTokenSweep {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgConfirmUnbondedTokenSweep();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.operator = reader.string();
          break;

        case 2:
          message.recordId = (reader.uint64() as Long);
          break;

        case 3:
          message.txHash = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgConfirmUnbondedTokenSweep>): MsgConfirmUnbondedTokenSweep {
    const message = createBaseMsgConfirmUnbondedTokenSweep();
    message.operator = object.operator ?? "";
    message.recordId = object.recordId !== undefined && object.recordId !== null ? Long.fromValue(object.recordId) : Long.UZERO;
    message.txHash = object.txHash ?? "";
    return message;
  }

};

function createBaseMsgConfirmUnbondedTokenSweepResponse(): MsgConfirmUnbondedTokenSweepResponse {
  return {};
}

export const MsgConfirmUnbondedTokenSweepResponse = {
  encode(_: MsgConfirmUnbondedTokenSweepResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgConfirmUnbondedTokenSweepResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgConfirmUnbondedTokenSweepResponse();

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

  fromPartial(_: DeepPartial<MsgConfirmUnbondedTokenSweepResponse>): MsgConfirmUnbondedTokenSweepResponse {
    const message = createBaseMsgConfirmUnbondedTokenSweepResponse();
    return message;
  }

};

function createBaseMsgAdjustDelegatedBalance(): MsgAdjustDelegatedBalance {
  return {
    operator: "",
    delegationOffset: "",
    validatorAddress: ""
  };
}

export const MsgAdjustDelegatedBalance = {
  encode(message: MsgAdjustDelegatedBalance, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.operator !== "") {
      writer.uint32(10).string(message.operator);
    }

    if (message.delegationOffset !== "") {
      writer.uint32(18).string(message.delegationOffset);
    }

    if (message.validatorAddress !== "") {
      writer.uint32(26).string(message.validatorAddress);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAdjustDelegatedBalance {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAdjustDelegatedBalance();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.operator = reader.string();
          break;

        case 2:
          message.delegationOffset = reader.string();
          break;

        case 3:
          message.validatorAddress = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgAdjustDelegatedBalance>): MsgAdjustDelegatedBalance {
    const message = createBaseMsgAdjustDelegatedBalance();
    message.operator = object.operator ?? "";
    message.delegationOffset = object.delegationOffset ?? "";
    message.validatorAddress = object.validatorAddress ?? "";
    return message;
  }

};

function createBaseMsgAdjustDelegatedBalanceResponse(): MsgAdjustDelegatedBalanceResponse {
  return {};
}

export const MsgAdjustDelegatedBalanceResponse = {
  encode(_: MsgAdjustDelegatedBalanceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAdjustDelegatedBalanceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAdjustDelegatedBalanceResponse();

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

  fromPartial(_: DeepPartial<MsgAdjustDelegatedBalanceResponse>): MsgAdjustDelegatedBalanceResponse {
    const message = createBaseMsgAdjustDelegatedBalanceResponse();
    return message;
  }

};

function createBaseMsgUpdateInnerRedemptionRateBounds(): MsgUpdateInnerRedemptionRateBounds {
  return {
    creator: "",
    minInnerRedemptionRate: "",
    maxInnerRedemptionRate: ""
  };
}

export const MsgUpdateInnerRedemptionRateBounds = {
  encode(message: MsgUpdateInnerRedemptionRateBounds, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.minInnerRedemptionRate !== "") {
      writer.uint32(18).string(message.minInnerRedemptionRate);
    }

    if (message.maxInnerRedemptionRate !== "") {
      writer.uint32(26).string(message.maxInnerRedemptionRate);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateInnerRedemptionRateBounds {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateInnerRedemptionRateBounds();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.minInnerRedemptionRate = reader.string();
          break;

        case 3:
          message.maxInnerRedemptionRate = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgUpdateInnerRedemptionRateBounds>): MsgUpdateInnerRedemptionRateBounds {
    const message = createBaseMsgUpdateInnerRedemptionRateBounds();
    message.creator = object.creator ?? "";
    message.minInnerRedemptionRate = object.minInnerRedemptionRate ?? "";
    message.maxInnerRedemptionRate = object.maxInnerRedemptionRate ?? "";
    return message;
  }

};

function createBaseMsgUpdateInnerRedemptionRateBoundsResponse(): MsgUpdateInnerRedemptionRateBoundsResponse {
  return {};
}

export const MsgUpdateInnerRedemptionRateBoundsResponse = {
  encode(_: MsgUpdateInnerRedemptionRateBoundsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateInnerRedemptionRateBoundsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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

  fromPartial(_: DeepPartial<MsgUpdateInnerRedemptionRateBoundsResponse>): MsgUpdateInnerRedemptionRateBoundsResponse {
    const message = createBaseMsgUpdateInnerRedemptionRateBoundsResponse();
    return message;
  }

};

function createBaseMsgResumeHostZone(): MsgResumeHostZone {
  return {
    creator: ""
  };
}

export const MsgResumeHostZone = {
  encode(message: MsgResumeHostZone, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgResumeHostZone {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgResumeHostZone();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgResumeHostZone>): MsgResumeHostZone {
    const message = createBaseMsgResumeHostZone();
    message.creator = object.creator ?? "";
    return message;
  }

};

function createBaseMsgResumeHostZoneResponse(): MsgResumeHostZoneResponse {
  return {};
}

export const MsgResumeHostZoneResponse = {
  encode(_: MsgResumeHostZoneResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgResumeHostZoneResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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

  fromPartial(_: DeepPartial<MsgResumeHostZoneResponse>): MsgResumeHostZoneResponse {
    const message = createBaseMsgResumeHostZoneResponse();
    return message;
  }

};

function createBaseMsgRefreshRedemptionRate(): MsgRefreshRedemptionRate {
  return {
    creator: ""
  };
}

export const MsgRefreshRedemptionRate = {
  encode(message: MsgRefreshRedemptionRate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRefreshRedemptionRate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRefreshRedemptionRate();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgRefreshRedemptionRate>): MsgRefreshRedemptionRate {
    const message = createBaseMsgRefreshRedemptionRate();
    message.creator = object.creator ?? "";
    return message;
  }

};

function createBaseMsgRefreshRedemptionRateResponse(): MsgRefreshRedemptionRateResponse {
  return {};
}

export const MsgRefreshRedemptionRateResponse = {
  encode(_: MsgRefreshRedemptionRateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRefreshRedemptionRateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRefreshRedemptionRateResponse();

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

  fromPartial(_: DeepPartial<MsgRefreshRedemptionRateResponse>): MsgRefreshRedemptionRateResponse {
    const message = createBaseMsgRefreshRedemptionRateResponse();
    return message;
  }

};

function createBaseMsgOverwriteDelegationRecord(): MsgOverwriteDelegationRecord {
  return {
    creator: "",
    delegationRecord: undefined
  };
}

export const MsgOverwriteDelegationRecord = {
  encode(message: MsgOverwriteDelegationRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.delegationRecord !== undefined) {
      DelegationRecord.encode(message.delegationRecord, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgOverwriteDelegationRecord {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgOverwriteDelegationRecord();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.delegationRecord = DelegationRecord.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgOverwriteDelegationRecord>): MsgOverwriteDelegationRecord {
    const message = createBaseMsgOverwriteDelegationRecord();
    message.creator = object.creator ?? "";
    message.delegationRecord = object.delegationRecord !== undefined && object.delegationRecord !== null ? DelegationRecord.fromPartial(object.delegationRecord) : undefined;
    return message;
  }

};

function createBaseMsgOverwriteDelegationRecordResponse(): MsgOverwriteDelegationRecordResponse {
  return {};
}

export const MsgOverwriteDelegationRecordResponse = {
  encode(_: MsgOverwriteDelegationRecordResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgOverwriteDelegationRecordResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgOverwriteDelegationRecordResponse();

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

  fromPartial(_: DeepPartial<MsgOverwriteDelegationRecordResponse>): MsgOverwriteDelegationRecordResponse {
    const message = createBaseMsgOverwriteDelegationRecordResponse();
    return message;
  }

};

function createBaseMsgOverwriteUnbondingRecord(): MsgOverwriteUnbondingRecord {
  return {
    creator: "",
    unbondingRecord: undefined
  };
}

export const MsgOverwriteUnbondingRecord = {
  encode(message: MsgOverwriteUnbondingRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.unbondingRecord !== undefined) {
      UnbondingRecord.encode(message.unbondingRecord, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgOverwriteUnbondingRecord {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgOverwriteUnbondingRecord();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.unbondingRecord = UnbondingRecord.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgOverwriteUnbondingRecord>): MsgOverwriteUnbondingRecord {
    const message = createBaseMsgOverwriteUnbondingRecord();
    message.creator = object.creator ?? "";
    message.unbondingRecord = object.unbondingRecord !== undefined && object.unbondingRecord !== null ? UnbondingRecord.fromPartial(object.unbondingRecord) : undefined;
    return message;
  }

};

function createBaseMsgOverwriteUnbondingRecordResponse(): MsgOverwriteUnbondingRecordResponse {
  return {};
}

export const MsgOverwriteUnbondingRecordResponse = {
  encode(_: MsgOverwriteUnbondingRecordResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgOverwriteUnbondingRecordResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgOverwriteUnbondingRecordResponse();

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

  fromPartial(_: DeepPartial<MsgOverwriteUnbondingRecordResponse>): MsgOverwriteUnbondingRecordResponse {
    const message = createBaseMsgOverwriteUnbondingRecordResponse();
    return message;
  }

};

function createBaseMsgOverwriteRedemptionRecord(): MsgOverwriteRedemptionRecord {
  return {
    creator: "",
    redemptionRecord: undefined
  };
}

export const MsgOverwriteRedemptionRecord = {
  encode(message: MsgOverwriteRedemptionRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.redemptionRecord !== undefined) {
      RedemptionRecord.encode(message.redemptionRecord, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgOverwriteRedemptionRecord {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgOverwriteRedemptionRecord();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.redemptionRecord = RedemptionRecord.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgOverwriteRedemptionRecord>): MsgOverwriteRedemptionRecord {
    const message = createBaseMsgOverwriteRedemptionRecord();
    message.creator = object.creator ?? "";
    message.redemptionRecord = object.redemptionRecord !== undefined && object.redemptionRecord !== null ? RedemptionRecord.fromPartial(object.redemptionRecord) : undefined;
    return message;
  }

};

function createBaseMsgOverwriteRedemptionRecordResponse(): MsgOverwriteRedemptionRecordResponse {
  return {};
}

export const MsgOverwriteRedemptionRecordResponse = {
  encode(_: MsgOverwriteRedemptionRecordResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgOverwriteRedemptionRecordResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgOverwriteRedemptionRecordResponse();

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

  fromPartial(_: DeepPartial<MsgOverwriteRedemptionRecordResponse>): MsgOverwriteRedemptionRecordResponse {
    const message = createBaseMsgOverwriteRedemptionRecordResponse();
    return message;
  }

};

function createBaseMsgSetOperatorAddress(): MsgSetOperatorAddress {
  return {
    signer: "",
    operator: ""
  };
}

export const MsgSetOperatorAddress = {
  encode(message: MsgSetOperatorAddress, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }

    if (message.operator !== "") {
      writer.uint32(18).string(message.operator);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetOperatorAddress {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetOperatorAddress();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.signer = reader.string();
          break;

        case 2:
          message.operator = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgSetOperatorAddress>): MsgSetOperatorAddress {
    const message = createBaseMsgSetOperatorAddress();
    message.signer = object.signer ?? "";
    message.operator = object.operator ?? "";
    return message;
  }

};

function createBaseMsgSetOperatorAddressResponse(): MsgSetOperatorAddressResponse {
  return {};
}

export const MsgSetOperatorAddressResponse = {
  encode(_: MsgSetOperatorAddressResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetOperatorAddressResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetOperatorAddressResponse();

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

  fromPartial(_: DeepPartial<MsgSetOperatorAddressResponse>): MsgSetOperatorAddressResponse {
    const message = createBaseMsgSetOperatorAddressResponse();
    return message;
  }

};