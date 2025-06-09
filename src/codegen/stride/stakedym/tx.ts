import { DelegationRecord, DelegationRecordAmino, DelegationRecordSDKType, UnbondingRecord, UnbondingRecordAmino, UnbondingRecordSDKType, RedemptionRecord, RedemptionRecordAmino, RedemptionRecordSDKType } from "./stakedym";
import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../binary";
import { Decimal } from "../../decimals";
export enum OverwritableRecordType {
  RECORD_TYPE_DELEGATION = 0,
  RECORD_TYPE_UNBONDING = 1,
  RECORD_TYPE_REDEMPTION = 2,
  UNRECOGNIZED = -1,
}
export const OverwritableRecordTypeSDKType = OverwritableRecordType;
export const OverwritableRecordTypeAmino = OverwritableRecordType;
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
    case OverwritableRecordType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** LiquidStake */
export interface MsgLiquidStake {
  staker: string;
  nativeAmount: string;
}
export interface MsgLiquidStakeProtoMsg {
  typeUrl: "/stride.stakedym.MsgLiquidStake";
  value: Uint8Array;
}
/**
 * LiquidStake
 * @name MsgLiquidStakeAmino
 * @package stride.stakedym
 * @see proto type: stride.stakedym.MsgLiquidStake
 */
export interface MsgLiquidStakeAmino {
  staker?: string;
  native_amount?: string;
}
export interface MsgLiquidStakeAminoMsg {
  type: "stakedym/MsgLiquidStake";
  value: MsgLiquidStakeAmino;
}
/** LiquidStake */
export interface MsgLiquidStakeSDKType {
  staker: string;
  native_amount: string;
}
export interface MsgLiquidStakeResponse {
  stToken: Coin;
}
export interface MsgLiquidStakeResponseProtoMsg {
  typeUrl: "/stride.stakedym.MsgLiquidStakeResponse";
  value: Uint8Array;
}
/**
 * @name MsgLiquidStakeResponseAmino
 * @package stride.stakedym
 * @see proto type: stride.stakedym.MsgLiquidStakeResponse
 */
export interface MsgLiquidStakeResponseAmino {
  st_token?: CoinAmino;
}
export interface MsgLiquidStakeResponseAminoMsg {
  type: "/stride.stakedym.MsgLiquidStakeResponse";
  value: MsgLiquidStakeResponseAmino;
}
export interface MsgLiquidStakeResponseSDKType {
  st_token: CoinSDKType;
}
/** RedeemStake */
export interface MsgRedeemStake {
  redeemer: string;
  stTokenAmount: string;
}
export interface MsgRedeemStakeProtoMsg {
  typeUrl: "/stride.stakedym.MsgRedeemStake";
  value: Uint8Array;
}
/**
 * RedeemStake
 * @name MsgRedeemStakeAmino
 * @package stride.stakedym
 * @see proto type: stride.stakedym.MsgRedeemStake
 */
export interface MsgRedeemStakeAmino {
  redeemer?: string;
  st_token_amount?: string;
}
export interface MsgRedeemStakeAminoMsg {
  type: "stakedym/MsgRedeemStake";
  value: MsgRedeemStakeAmino;
}
/** RedeemStake */
export interface MsgRedeemStakeSDKType {
  redeemer: string;
  st_token_amount: string;
}
export interface MsgRedeemStakeResponse {
  nativeToken: Coin;
}
export interface MsgRedeemStakeResponseProtoMsg {
  typeUrl: "/stride.stakedym.MsgRedeemStakeResponse";
  value: Uint8Array;
}
/**
 * @name MsgRedeemStakeResponseAmino
 * @package stride.stakedym
 * @see proto type: stride.stakedym.MsgRedeemStakeResponse
 */
export interface MsgRedeemStakeResponseAmino {
  native_token?: CoinAmino;
}
export interface MsgRedeemStakeResponseAminoMsg {
  type: "/stride.stakedym.MsgRedeemStakeResponse";
  value: MsgRedeemStakeResponseAmino;
}
export interface MsgRedeemStakeResponseSDKType {
  native_token: CoinSDKType;
}
/** ConfirmDelegation */
export interface MsgConfirmDelegation {
  operator: string;
  recordId: bigint;
  txHash: string;
}
export interface MsgConfirmDelegationProtoMsg {
  typeUrl: "/stride.stakedym.MsgConfirmDelegation";
  value: Uint8Array;
}
/**
 * ConfirmDelegation
 * @name MsgConfirmDelegationAmino
 * @package stride.stakedym
 * @see proto type: stride.stakedym.MsgConfirmDelegation
 */
export interface MsgConfirmDelegationAmino {
  operator?: string;
  record_id?: string;
  tx_hash?: string;
}
export interface MsgConfirmDelegationAminoMsg {
  type: "stakedym/MsgConfirmDelegation";
  value: MsgConfirmDelegationAmino;
}
/** ConfirmDelegation */
export interface MsgConfirmDelegationSDKType {
  operator: string;
  record_id: bigint;
  tx_hash: string;
}
export interface MsgConfirmDelegationResponse {}
export interface MsgConfirmDelegationResponseProtoMsg {
  typeUrl: "/stride.stakedym.MsgConfirmDelegationResponse";
  value: Uint8Array;
}
/**
 * @name MsgConfirmDelegationResponseAmino
 * @package stride.stakedym
 * @see proto type: stride.stakedym.MsgConfirmDelegationResponse
 */
export interface MsgConfirmDelegationResponseAmino {}
export interface MsgConfirmDelegationResponseAminoMsg {
  type: "/stride.stakedym.MsgConfirmDelegationResponse";
  value: MsgConfirmDelegationResponseAmino;
}
export interface MsgConfirmDelegationResponseSDKType {}
/** ConfirmUndelegation */
export interface MsgConfirmUndelegation {
  operator: string;
  recordId: bigint;
  txHash: string;
}
export interface MsgConfirmUndelegationProtoMsg {
  typeUrl: "/stride.stakedym.MsgConfirmUndelegation";
  value: Uint8Array;
}
/**
 * ConfirmUndelegation
 * @name MsgConfirmUndelegationAmino
 * @package stride.stakedym
 * @see proto type: stride.stakedym.MsgConfirmUndelegation
 */
export interface MsgConfirmUndelegationAmino {
  operator?: string;
  record_id?: string;
  tx_hash?: string;
}
export interface MsgConfirmUndelegationAminoMsg {
  type: "stakedym/MsgConfirmUndelegation";
  value: MsgConfirmUndelegationAmino;
}
/** ConfirmUndelegation */
export interface MsgConfirmUndelegationSDKType {
  operator: string;
  record_id: bigint;
  tx_hash: string;
}
export interface MsgConfirmUndelegationResponse {}
export interface MsgConfirmUndelegationResponseProtoMsg {
  typeUrl: "/stride.stakedym.MsgConfirmUndelegationResponse";
  value: Uint8Array;
}
/**
 * @name MsgConfirmUndelegationResponseAmino
 * @package stride.stakedym
 * @see proto type: stride.stakedym.MsgConfirmUndelegationResponse
 */
export interface MsgConfirmUndelegationResponseAmino {}
export interface MsgConfirmUndelegationResponseAminoMsg {
  type: "/stride.stakedym.MsgConfirmUndelegationResponse";
  value: MsgConfirmUndelegationResponseAmino;
}
export interface MsgConfirmUndelegationResponseSDKType {}
/** ConfirmUnbondedTokenSweep */
export interface MsgConfirmUnbondedTokenSweep {
  operator: string;
  recordId: bigint;
  txHash: string;
}
export interface MsgConfirmUnbondedTokenSweepProtoMsg {
  typeUrl: "/stride.stakedym.MsgConfirmUnbondedTokenSweep";
  value: Uint8Array;
}
/**
 * ConfirmUnbondedTokenSweep
 * @name MsgConfirmUnbondedTokenSweepAmino
 * @package stride.stakedym
 * @see proto type: stride.stakedym.MsgConfirmUnbondedTokenSweep
 */
export interface MsgConfirmUnbondedTokenSweepAmino {
  operator?: string;
  record_id?: string;
  tx_hash?: string;
}
export interface MsgConfirmUnbondedTokenSweepAminoMsg {
  type: "stakedym/MsgConfirmUnbondedTokenSweep";
  value: MsgConfirmUnbondedTokenSweepAmino;
}
/** ConfirmUnbondedTokenSweep */
export interface MsgConfirmUnbondedTokenSweepSDKType {
  operator: string;
  record_id: bigint;
  tx_hash: string;
}
export interface MsgConfirmUnbondedTokenSweepResponse {}
export interface MsgConfirmUnbondedTokenSweepResponseProtoMsg {
  typeUrl: "/stride.stakedym.MsgConfirmUnbondedTokenSweepResponse";
  value: Uint8Array;
}
/**
 * @name MsgConfirmUnbondedTokenSweepResponseAmino
 * @package stride.stakedym
 * @see proto type: stride.stakedym.MsgConfirmUnbondedTokenSweepResponse
 */
export interface MsgConfirmUnbondedTokenSweepResponseAmino {}
export interface MsgConfirmUnbondedTokenSweepResponseAminoMsg {
  type: "/stride.stakedym.MsgConfirmUnbondedTokenSweepResponse";
  value: MsgConfirmUnbondedTokenSweepResponseAmino;
}
export interface MsgConfirmUnbondedTokenSweepResponseSDKType {}
/** AdjustDelegatedBalance */
export interface MsgAdjustDelegatedBalance {
  operator: string;
  delegationOffset: string;
  validatorAddress: string;
}
export interface MsgAdjustDelegatedBalanceProtoMsg {
  typeUrl: "/stride.stakedym.MsgAdjustDelegatedBalance";
  value: Uint8Array;
}
/**
 * AdjustDelegatedBalance
 * @name MsgAdjustDelegatedBalanceAmino
 * @package stride.stakedym
 * @see proto type: stride.stakedym.MsgAdjustDelegatedBalance
 */
export interface MsgAdjustDelegatedBalanceAmino {
  operator?: string;
  delegation_offset?: string;
  validator_address?: string;
}
export interface MsgAdjustDelegatedBalanceAminoMsg {
  type: "stakedym/MsgAdjustDelegatedBalance";
  value: MsgAdjustDelegatedBalanceAmino;
}
/** AdjustDelegatedBalance */
export interface MsgAdjustDelegatedBalanceSDKType {
  operator: string;
  delegation_offset: string;
  validator_address: string;
}
export interface MsgAdjustDelegatedBalanceResponse {}
export interface MsgAdjustDelegatedBalanceResponseProtoMsg {
  typeUrl: "/stride.stakedym.MsgAdjustDelegatedBalanceResponse";
  value: Uint8Array;
}
/**
 * @name MsgAdjustDelegatedBalanceResponseAmino
 * @package stride.stakedym
 * @see proto type: stride.stakedym.MsgAdjustDelegatedBalanceResponse
 */
export interface MsgAdjustDelegatedBalanceResponseAmino {}
export interface MsgAdjustDelegatedBalanceResponseAminoMsg {
  type: "/stride.stakedym.MsgAdjustDelegatedBalanceResponse";
  value: MsgAdjustDelegatedBalanceResponseAmino;
}
export interface MsgAdjustDelegatedBalanceResponseSDKType {}
/** UpdateInnerRedemptionRate */
export interface MsgUpdateInnerRedemptionRateBounds {
  creator: string;
  minInnerRedemptionRate: string;
  maxInnerRedemptionRate: string;
}
export interface MsgUpdateInnerRedemptionRateBoundsProtoMsg {
  typeUrl: "/stride.stakedym.MsgUpdateInnerRedemptionRateBounds";
  value: Uint8Array;
}
/**
 * UpdateInnerRedemptionRate
 * @name MsgUpdateInnerRedemptionRateBoundsAmino
 * @package stride.stakedym
 * @see proto type: stride.stakedym.MsgUpdateInnerRedemptionRateBounds
 */
export interface MsgUpdateInnerRedemptionRateBoundsAmino {
  creator?: string;
  min_inner_redemption_rate?: string;
  max_inner_redemption_rate?: string;
}
export interface MsgUpdateInnerRedemptionRateBoundsAminoMsg {
  type: "stakedym/MsgUpdateRedemptionRateBounds";
  value: MsgUpdateInnerRedemptionRateBoundsAmino;
}
/** UpdateInnerRedemptionRate */
export interface MsgUpdateInnerRedemptionRateBoundsSDKType {
  creator: string;
  min_inner_redemption_rate: string;
  max_inner_redemption_rate: string;
}
export interface MsgUpdateInnerRedemptionRateBoundsResponse {}
export interface MsgUpdateInnerRedemptionRateBoundsResponseProtoMsg {
  typeUrl: "/stride.stakedym.MsgUpdateInnerRedemptionRateBoundsResponse";
  value: Uint8Array;
}
/**
 * @name MsgUpdateInnerRedemptionRateBoundsResponseAmino
 * @package stride.stakedym
 * @see proto type: stride.stakedym.MsgUpdateInnerRedemptionRateBoundsResponse
 */
export interface MsgUpdateInnerRedemptionRateBoundsResponseAmino {}
export interface MsgUpdateInnerRedemptionRateBoundsResponseAminoMsg {
  type: "/stride.stakedym.MsgUpdateInnerRedemptionRateBoundsResponse";
  value: MsgUpdateInnerRedemptionRateBoundsResponseAmino;
}
export interface MsgUpdateInnerRedemptionRateBoundsResponseSDKType {}
/** ResumeHostZone */
export interface MsgResumeHostZone {
  creator: string;
}
export interface MsgResumeHostZoneProtoMsg {
  typeUrl: "/stride.stakedym.MsgResumeHostZone";
  value: Uint8Array;
}
/**
 * ResumeHostZone
 * @name MsgResumeHostZoneAmino
 * @package stride.stakedym
 * @see proto type: stride.stakedym.MsgResumeHostZone
 */
export interface MsgResumeHostZoneAmino {
  creator?: string;
}
export interface MsgResumeHostZoneAminoMsg {
  type: "stakedym/MsgResumeHostZone";
  value: MsgResumeHostZoneAmino;
}
/** ResumeHostZone */
export interface MsgResumeHostZoneSDKType {
  creator: string;
}
export interface MsgResumeHostZoneResponse {}
export interface MsgResumeHostZoneResponseProtoMsg {
  typeUrl: "/stride.stakedym.MsgResumeHostZoneResponse";
  value: Uint8Array;
}
/**
 * @name MsgResumeHostZoneResponseAmino
 * @package stride.stakedym
 * @see proto type: stride.stakedym.MsgResumeHostZoneResponse
 */
export interface MsgResumeHostZoneResponseAmino {}
export interface MsgResumeHostZoneResponseAminoMsg {
  type: "/stride.stakedym.MsgResumeHostZoneResponse";
  value: MsgResumeHostZoneResponseAmino;
}
export interface MsgResumeHostZoneResponseSDKType {}
/** RefreshRedemptionRate */
export interface MsgRefreshRedemptionRate {
  creator: string;
}
export interface MsgRefreshRedemptionRateProtoMsg {
  typeUrl: "/stride.stakedym.MsgRefreshRedemptionRate";
  value: Uint8Array;
}
/**
 * RefreshRedemptionRate
 * @name MsgRefreshRedemptionRateAmino
 * @package stride.stakedym
 * @see proto type: stride.stakedym.MsgRefreshRedemptionRate
 */
export interface MsgRefreshRedemptionRateAmino {
  creator?: string;
}
export interface MsgRefreshRedemptionRateAminoMsg {
  type: "stakedym/MsgRefreshRedemptionRate";
  value: MsgRefreshRedemptionRateAmino;
}
/** RefreshRedemptionRate */
export interface MsgRefreshRedemptionRateSDKType {
  creator: string;
}
export interface MsgRefreshRedemptionRateResponse {}
export interface MsgRefreshRedemptionRateResponseProtoMsg {
  typeUrl: "/stride.stakedym.MsgRefreshRedemptionRateResponse";
  value: Uint8Array;
}
/**
 * @name MsgRefreshRedemptionRateResponseAmino
 * @package stride.stakedym
 * @see proto type: stride.stakedym.MsgRefreshRedemptionRateResponse
 */
export interface MsgRefreshRedemptionRateResponseAmino {}
export interface MsgRefreshRedemptionRateResponseAminoMsg {
  type: "/stride.stakedym.MsgRefreshRedemptionRateResponse";
  value: MsgRefreshRedemptionRateResponseAmino;
}
export interface MsgRefreshRedemptionRateResponseSDKType {}
/** OverwriteDelegationRecord */
export interface MsgOverwriteDelegationRecord {
  creator: string;
  delegationRecord?: DelegationRecord;
}
export interface MsgOverwriteDelegationRecordProtoMsg {
  typeUrl: "/stride.stakedym.MsgOverwriteDelegationRecord";
  value: Uint8Array;
}
/**
 * OverwriteDelegationRecord
 * @name MsgOverwriteDelegationRecordAmino
 * @package stride.stakedym
 * @see proto type: stride.stakedym.MsgOverwriteDelegationRecord
 */
export interface MsgOverwriteDelegationRecordAmino {
  creator?: string;
  delegation_record?: DelegationRecordAmino;
}
export interface MsgOverwriteDelegationRecordAminoMsg {
  type: "stakedym/MsgOverwriteDelegationRecord";
  value: MsgOverwriteDelegationRecordAmino;
}
/** OverwriteDelegationRecord */
export interface MsgOverwriteDelegationRecordSDKType {
  creator: string;
  delegation_record?: DelegationRecordSDKType;
}
export interface MsgOverwriteDelegationRecordResponse {}
export interface MsgOverwriteDelegationRecordResponseProtoMsg {
  typeUrl: "/stride.stakedym.MsgOverwriteDelegationRecordResponse";
  value: Uint8Array;
}
/**
 * @name MsgOverwriteDelegationRecordResponseAmino
 * @package stride.stakedym
 * @see proto type: stride.stakedym.MsgOverwriteDelegationRecordResponse
 */
export interface MsgOverwriteDelegationRecordResponseAmino {}
export interface MsgOverwriteDelegationRecordResponseAminoMsg {
  type: "/stride.stakedym.MsgOverwriteDelegationRecordResponse";
  value: MsgOverwriteDelegationRecordResponseAmino;
}
export interface MsgOverwriteDelegationRecordResponseSDKType {}
/** OverwriteUnbondingRecord */
export interface MsgOverwriteUnbondingRecord {
  creator: string;
  unbondingRecord?: UnbondingRecord;
}
export interface MsgOverwriteUnbondingRecordProtoMsg {
  typeUrl: "/stride.stakedym.MsgOverwriteUnbondingRecord";
  value: Uint8Array;
}
/**
 * OverwriteUnbondingRecord
 * @name MsgOverwriteUnbondingRecordAmino
 * @package stride.stakedym
 * @see proto type: stride.stakedym.MsgOverwriteUnbondingRecord
 */
export interface MsgOverwriteUnbondingRecordAmino {
  creator?: string;
  unbonding_record?: UnbondingRecordAmino;
}
export interface MsgOverwriteUnbondingRecordAminoMsg {
  type: "stakedym/MsgOverwriteUnbondingRecord";
  value: MsgOverwriteUnbondingRecordAmino;
}
/** OverwriteUnbondingRecord */
export interface MsgOverwriteUnbondingRecordSDKType {
  creator: string;
  unbonding_record?: UnbondingRecordSDKType;
}
export interface MsgOverwriteUnbondingRecordResponse {}
export interface MsgOverwriteUnbondingRecordResponseProtoMsg {
  typeUrl: "/stride.stakedym.MsgOverwriteUnbondingRecordResponse";
  value: Uint8Array;
}
/**
 * @name MsgOverwriteUnbondingRecordResponseAmino
 * @package stride.stakedym
 * @see proto type: stride.stakedym.MsgOverwriteUnbondingRecordResponse
 */
export interface MsgOverwriteUnbondingRecordResponseAmino {}
export interface MsgOverwriteUnbondingRecordResponseAminoMsg {
  type: "/stride.stakedym.MsgOverwriteUnbondingRecordResponse";
  value: MsgOverwriteUnbondingRecordResponseAmino;
}
export interface MsgOverwriteUnbondingRecordResponseSDKType {}
/** OverwriteRedemptionRecord */
export interface MsgOverwriteRedemptionRecord {
  creator: string;
  redemptionRecord?: RedemptionRecord;
}
export interface MsgOverwriteRedemptionRecordProtoMsg {
  typeUrl: "/stride.stakedym.MsgOverwriteRedemptionRecord";
  value: Uint8Array;
}
/**
 * OverwriteRedemptionRecord
 * @name MsgOverwriteRedemptionRecordAmino
 * @package stride.stakedym
 * @see proto type: stride.stakedym.MsgOverwriteRedemptionRecord
 */
export interface MsgOverwriteRedemptionRecordAmino {
  creator?: string;
  redemption_record?: RedemptionRecordAmino;
}
export interface MsgOverwriteRedemptionRecordAminoMsg {
  type: "stakedym/MsgOverwriteRedemptionRecord";
  value: MsgOverwriteRedemptionRecordAmino;
}
/** OverwriteRedemptionRecord */
export interface MsgOverwriteRedemptionRecordSDKType {
  creator: string;
  redemption_record?: RedemptionRecordSDKType;
}
export interface MsgOverwriteRedemptionRecordResponse {}
export interface MsgOverwriteRedemptionRecordResponseProtoMsg {
  typeUrl: "/stride.stakedym.MsgOverwriteRedemptionRecordResponse";
  value: Uint8Array;
}
/**
 * @name MsgOverwriteRedemptionRecordResponseAmino
 * @package stride.stakedym
 * @see proto type: stride.stakedym.MsgOverwriteRedemptionRecordResponse
 */
export interface MsgOverwriteRedemptionRecordResponseAmino {}
export interface MsgOverwriteRedemptionRecordResponseAminoMsg {
  type: "/stride.stakedym.MsgOverwriteRedemptionRecordResponse";
  value: MsgOverwriteRedemptionRecordResponseAmino;
}
export interface MsgOverwriteRedemptionRecordResponseSDKType {}
/** SetOperatorAddress */
export interface MsgSetOperatorAddress {
  signer: string;
  operator: string;
}
export interface MsgSetOperatorAddressProtoMsg {
  typeUrl: "/stride.stakedym.MsgSetOperatorAddress";
  value: Uint8Array;
}
/**
 * SetOperatorAddress
 * @name MsgSetOperatorAddressAmino
 * @package stride.stakedym
 * @see proto type: stride.stakedym.MsgSetOperatorAddress
 */
export interface MsgSetOperatorAddressAmino {
  signer?: string;
  operator?: string;
}
export interface MsgSetOperatorAddressAminoMsg {
  type: "stakedym/MsgSetOperatorAddress";
  value: MsgSetOperatorAddressAmino;
}
/** SetOperatorAddress */
export interface MsgSetOperatorAddressSDKType {
  signer: string;
  operator: string;
}
export interface MsgSetOperatorAddressResponse {}
export interface MsgSetOperatorAddressResponseProtoMsg {
  typeUrl: "/stride.stakedym.MsgSetOperatorAddressResponse";
  value: Uint8Array;
}
/**
 * @name MsgSetOperatorAddressResponseAmino
 * @package stride.stakedym
 * @see proto type: stride.stakedym.MsgSetOperatorAddressResponse
 */
export interface MsgSetOperatorAddressResponseAmino {}
export interface MsgSetOperatorAddressResponseAminoMsg {
  type: "/stride.stakedym.MsgSetOperatorAddressResponse";
  value: MsgSetOperatorAddressResponseAmino;
}
export interface MsgSetOperatorAddressResponseSDKType {}
function createBaseMsgLiquidStake(): MsgLiquidStake {
  return {
    staker: "",
    nativeAmount: ""
  };
}
export const MsgLiquidStake = {
  typeUrl: "/stride.stakedym.MsgLiquidStake",
  encode(message: MsgLiquidStake, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.staker !== "") {
      writer.uint32(10).string(message.staker);
    }
    if (message.nativeAmount !== "") {
      writer.uint32(18).string(message.nativeAmount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgLiquidStake {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: Partial<MsgLiquidStake>): MsgLiquidStake {
    const message = createBaseMsgLiquidStake();
    message.staker = object.staker ?? "";
    message.nativeAmount = object.nativeAmount ?? "";
    return message;
  },
  fromAmino(object: MsgLiquidStakeAmino): MsgLiquidStake {
    const message = createBaseMsgLiquidStake();
    if (object.staker !== undefined && object.staker !== null) {
      message.staker = object.staker;
    }
    if (object.native_amount !== undefined && object.native_amount !== null) {
      message.nativeAmount = object.native_amount;
    }
    return message;
  },
  toAmino(message: MsgLiquidStake): MsgLiquidStakeAmino {
    const obj: any = {};
    obj.staker = message.staker === "" ? undefined : message.staker;
    obj.native_amount = message.nativeAmount === "" ? undefined : message.nativeAmount;
    return obj;
  },
  fromAminoMsg(object: MsgLiquidStakeAminoMsg): MsgLiquidStake {
    return MsgLiquidStake.fromAmino(object.value);
  },
  toAminoMsg(message: MsgLiquidStake): MsgLiquidStakeAminoMsg {
    return {
      type: "stakedym/MsgLiquidStake",
      value: MsgLiquidStake.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgLiquidStakeProtoMsg): MsgLiquidStake {
    return MsgLiquidStake.decode(message.value);
  },
  toProto(message: MsgLiquidStake): Uint8Array {
    return MsgLiquidStake.encode(message).finish();
  },
  toProtoMsg(message: MsgLiquidStake): MsgLiquidStakeProtoMsg {
    return {
      typeUrl: "/stride.stakedym.MsgLiquidStake",
      value: MsgLiquidStake.encode(message).finish()
    };
  }
};
function createBaseMsgLiquidStakeResponse(): MsgLiquidStakeResponse {
  return {
    stToken: Coin.fromPartial({})
  };
}
export const MsgLiquidStakeResponse = {
  typeUrl: "/stride.stakedym.MsgLiquidStakeResponse",
  encode(message: MsgLiquidStakeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.stToken !== undefined) {
      Coin.encode(message.stToken, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgLiquidStakeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: Partial<MsgLiquidStakeResponse>): MsgLiquidStakeResponse {
    const message = createBaseMsgLiquidStakeResponse();
    message.stToken = object.stToken !== undefined && object.stToken !== null ? Coin.fromPartial(object.stToken) : undefined;
    return message;
  },
  fromAmino(object: MsgLiquidStakeResponseAmino): MsgLiquidStakeResponse {
    const message = createBaseMsgLiquidStakeResponse();
    if (object.st_token !== undefined && object.st_token !== null) {
      message.stToken = Coin.fromAmino(object.st_token);
    }
    return message;
  },
  toAmino(message: MsgLiquidStakeResponse): MsgLiquidStakeResponseAmino {
    const obj: any = {};
    obj.st_token = message.stToken ? Coin.toAmino(message.stToken) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgLiquidStakeResponseAminoMsg): MsgLiquidStakeResponse {
    return MsgLiquidStakeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgLiquidStakeResponseProtoMsg): MsgLiquidStakeResponse {
    return MsgLiquidStakeResponse.decode(message.value);
  },
  toProto(message: MsgLiquidStakeResponse): Uint8Array {
    return MsgLiquidStakeResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgLiquidStakeResponse): MsgLiquidStakeResponseProtoMsg {
    return {
      typeUrl: "/stride.stakedym.MsgLiquidStakeResponse",
      value: MsgLiquidStakeResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRedeemStake(): MsgRedeemStake {
  return {
    redeemer: "",
    stTokenAmount: ""
  };
}
export const MsgRedeemStake = {
  typeUrl: "/stride.stakedym.MsgRedeemStake",
  encode(message: MsgRedeemStake, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.redeemer !== "") {
      writer.uint32(10).string(message.redeemer);
    }
    if (message.stTokenAmount !== "") {
      writer.uint32(18).string(message.stTokenAmount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRedeemStake {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: Partial<MsgRedeemStake>): MsgRedeemStake {
    const message = createBaseMsgRedeemStake();
    message.redeemer = object.redeemer ?? "";
    message.stTokenAmount = object.stTokenAmount ?? "";
    return message;
  },
  fromAmino(object: MsgRedeemStakeAmino): MsgRedeemStake {
    const message = createBaseMsgRedeemStake();
    if (object.redeemer !== undefined && object.redeemer !== null) {
      message.redeemer = object.redeemer;
    }
    if (object.st_token_amount !== undefined && object.st_token_amount !== null) {
      message.stTokenAmount = object.st_token_amount;
    }
    return message;
  },
  toAmino(message: MsgRedeemStake): MsgRedeemStakeAmino {
    const obj: any = {};
    obj.redeemer = message.redeemer === "" ? undefined : message.redeemer;
    obj.st_token_amount = message.stTokenAmount === "" ? undefined : message.stTokenAmount;
    return obj;
  },
  fromAminoMsg(object: MsgRedeemStakeAminoMsg): MsgRedeemStake {
    return MsgRedeemStake.fromAmino(object.value);
  },
  toAminoMsg(message: MsgRedeemStake): MsgRedeemStakeAminoMsg {
    return {
      type: "stakedym/MsgRedeemStake",
      value: MsgRedeemStake.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgRedeemStakeProtoMsg): MsgRedeemStake {
    return MsgRedeemStake.decode(message.value);
  },
  toProto(message: MsgRedeemStake): Uint8Array {
    return MsgRedeemStake.encode(message).finish();
  },
  toProtoMsg(message: MsgRedeemStake): MsgRedeemStakeProtoMsg {
    return {
      typeUrl: "/stride.stakedym.MsgRedeemStake",
      value: MsgRedeemStake.encode(message).finish()
    };
  }
};
function createBaseMsgRedeemStakeResponse(): MsgRedeemStakeResponse {
  return {
    nativeToken: Coin.fromPartial({})
  };
}
export const MsgRedeemStakeResponse = {
  typeUrl: "/stride.stakedym.MsgRedeemStakeResponse",
  encode(message: MsgRedeemStakeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.nativeToken !== undefined) {
      Coin.encode(message.nativeToken, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRedeemStakeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: Partial<MsgRedeemStakeResponse>): MsgRedeemStakeResponse {
    const message = createBaseMsgRedeemStakeResponse();
    message.nativeToken = object.nativeToken !== undefined && object.nativeToken !== null ? Coin.fromPartial(object.nativeToken) : undefined;
    return message;
  },
  fromAmino(object: MsgRedeemStakeResponseAmino): MsgRedeemStakeResponse {
    const message = createBaseMsgRedeemStakeResponse();
    if (object.native_token !== undefined && object.native_token !== null) {
      message.nativeToken = Coin.fromAmino(object.native_token);
    }
    return message;
  },
  toAmino(message: MsgRedeemStakeResponse): MsgRedeemStakeResponseAmino {
    const obj: any = {};
    obj.native_token = message.nativeToken ? Coin.toAmino(message.nativeToken) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgRedeemStakeResponseAminoMsg): MsgRedeemStakeResponse {
    return MsgRedeemStakeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRedeemStakeResponseProtoMsg): MsgRedeemStakeResponse {
    return MsgRedeemStakeResponse.decode(message.value);
  },
  toProto(message: MsgRedeemStakeResponse): Uint8Array {
    return MsgRedeemStakeResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRedeemStakeResponse): MsgRedeemStakeResponseProtoMsg {
    return {
      typeUrl: "/stride.stakedym.MsgRedeemStakeResponse",
      value: MsgRedeemStakeResponse.encode(message).finish()
    };
  }
};
function createBaseMsgConfirmDelegation(): MsgConfirmDelegation {
  return {
    operator: "",
    recordId: BigInt(0),
    txHash: ""
  };
}
export const MsgConfirmDelegation = {
  typeUrl: "/stride.stakedym.MsgConfirmDelegation",
  encode(message: MsgConfirmDelegation, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.operator !== "") {
      writer.uint32(10).string(message.operator);
    }
    if (message.recordId !== BigInt(0)) {
      writer.uint32(16).uint64(message.recordId);
    }
    if (message.txHash !== "") {
      writer.uint32(26).string(message.txHash);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgConfirmDelegation {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgConfirmDelegation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operator = reader.string();
          break;
        case 2:
          message.recordId = reader.uint64();
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
  fromPartial(object: Partial<MsgConfirmDelegation>): MsgConfirmDelegation {
    const message = createBaseMsgConfirmDelegation();
    message.operator = object.operator ?? "";
    message.recordId = object.recordId !== undefined && object.recordId !== null ? BigInt(object.recordId.toString()) : BigInt(0);
    message.txHash = object.txHash ?? "";
    return message;
  },
  fromAmino(object: MsgConfirmDelegationAmino): MsgConfirmDelegation {
    const message = createBaseMsgConfirmDelegation();
    if (object.operator !== undefined && object.operator !== null) {
      message.operator = object.operator;
    }
    if (object.record_id !== undefined && object.record_id !== null) {
      message.recordId = BigInt(object.record_id);
    }
    if (object.tx_hash !== undefined && object.tx_hash !== null) {
      message.txHash = object.tx_hash;
    }
    return message;
  },
  toAmino(message: MsgConfirmDelegation): MsgConfirmDelegationAmino {
    const obj: any = {};
    obj.operator = message.operator === "" ? undefined : message.operator;
    obj.record_id = message.recordId !== BigInt(0) ? message.recordId?.toString() : undefined;
    obj.tx_hash = message.txHash === "" ? undefined : message.txHash;
    return obj;
  },
  fromAminoMsg(object: MsgConfirmDelegationAminoMsg): MsgConfirmDelegation {
    return MsgConfirmDelegation.fromAmino(object.value);
  },
  toAminoMsg(message: MsgConfirmDelegation): MsgConfirmDelegationAminoMsg {
    return {
      type: "stakedym/MsgConfirmDelegation",
      value: MsgConfirmDelegation.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgConfirmDelegationProtoMsg): MsgConfirmDelegation {
    return MsgConfirmDelegation.decode(message.value);
  },
  toProto(message: MsgConfirmDelegation): Uint8Array {
    return MsgConfirmDelegation.encode(message).finish();
  },
  toProtoMsg(message: MsgConfirmDelegation): MsgConfirmDelegationProtoMsg {
    return {
      typeUrl: "/stride.stakedym.MsgConfirmDelegation",
      value: MsgConfirmDelegation.encode(message).finish()
    };
  }
};
function createBaseMsgConfirmDelegationResponse(): MsgConfirmDelegationResponse {
  return {};
}
export const MsgConfirmDelegationResponse = {
  typeUrl: "/stride.stakedym.MsgConfirmDelegationResponse",
  encode(_: MsgConfirmDelegationResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgConfirmDelegationResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(_: Partial<MsgConfirmDelegationResponse>): MsgConfirmDelegationResponse {
    const message = createBaseMsgConfirmDelegationResponse();
    return message;
  },
  fromAmino(_: MsgConfirmDelegationResponseAmino): MsgConfirmDelegationResponse {
    const message = createBaseMsgConfirmDelegationResponse();
    return message;
  },
  toAmino(_: MsgConfirmDelegationResponse): MsgConfirmDelegationResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgConfirmDelegationResponseAminoMsg): MsgConfirmDelegationResponse {
    return MsgConfirmDelegationResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgConfirmDelegationResponseProtoMsg): MsgConfirmDelegationResponse {
    return MsgConfirmDelegationResponse.decode(message.value);
  },
  toProto(message: MsgConfirmDelegationResponse): Uint8Array {
    return MsgConfirmDelegationResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgConfirmDelegationResponse): MsgConfirmDelegationResponseProtoMsg {
    return {
      typeUrl: "/stride.stakedym.MsgConfirmDelegationResponse",
      value: MsgConfirmDelegationResponse.encode(message).finish()
    };
  }
};
function createBaseMsgConfirmUndelegation(): MsgConfirmUndelegation {
  return {
    operator: "",
    recordId: BigInt(0),
    txHash: ""
  };
}
export const MsgConfirmUndelegation = {
  typeUrl: "/stride.stakedym.MsgConfirmUndelegation",
  encode(message: MsgConfirmUndelegation, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.operator !== "") {
      writer.uint32(10).string(message.operator);
    }
    if (message.recordId !== BigInt(0)) {
      writer.uint32(16).uint64(message.recordId);
    }
    if (message.txHash !== "") {
      writer.uint32(26).string(message.txHash);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgConfirmUndelegation {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgConfirmUndelegation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operator = reader.string();
          break;
        case 2:
          message.recordId = reader.uint64();
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
  fromPartial(object: Partial<MsgConfirmUndelegation>): MsgConfirmUndelegation {
    const message = createBaseMsgConfirmUndelegation();
    message.operator = object.operator ?? "";
    message.recordId = object.recordId !== undefined && object.recordId !== null ? BigInt(object.recordId.toString()) : BigInt(0);
    message.txHash = object.txHash ?? "";
    return message;
  },
  fromAmino(object: MsgConfirmUndelegationAmino): MsgConfirmUndelegation {
    const message = createBaseMsgConfirmUndelegation();
    if (object.operator !== undefined && object.operator !== null) {
      message.operator = object.operator;
    }
    if (object.record_id !== undefined && object.record_id !== null) {
      message.recordId = BigInt(object.record_id);
    }
    if (object.tx_hash !== undefined && object.tx_hash !== null) {
      message.txHash = object.tx_hash;
    }
    return message;
  },
  toAmino(message: MsgConfirmUndelegation): MsgConfirmUndelegationAmino {
    const obj: any = {};
    obj.operator = message.operator === "" ? undefined : message.operator;
    obj.record_id = message.recordId !== BigInt(0) ? message.recordId?.toString() : undefined;
    obj.tx_hash = message.txHash === "" ? undefined : message.txHash;
    return obj;
  },
  fromAminoMsg(object: MsgConfirmUndelegationAminoMsg): MsgConfirmUndelegation {
    return MsgConfirmUndelegation.fromAmino(object.value);
  },
  toAminoMsg(message: MsgConfirmUndelegation): MsgConfirmUndelegationAminoMsg {
    return {
      type: "stakedym/MsgConfirmUndelegation",
      value: MsgConfirmUndelegation.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgConfirmUndelegationProtoMsg): MsgConfirmUndelegation {
    return MsgConfirmUndelegation.decode(message.value);
  },
  toProto(message: MsgConfirmUndelegation): Uint8Array {
    return MsgConfirmUndelegation.encode(message).finish();
  },
  toProtoMsg(message: MsgConfirmUndelegation): MsgConfirmUndelegationProtoMsg {
    return {
      typeUrl: "/stride.stakedym.MsgConfirmUndelegation",
      value: MsgConfirmUndelegation.encode(message).finish()
    };
  }
};
function createBaseMsgConfirmUndelegationResponse(): MsgConfirmUndelegationResponse {
  return {};
}
export const MsgConfirmUndelegationResponse = {
  typeUrl: "/stride.stakedym.MsgConfirmUndelegationResponse",
  encode(_: MsgConfirmUndelegationResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgConfirmUndelegationResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(_: Partial<MsgConfirmUndelegationResponse>): MsgConfirmUndelegationResponse {
    const message = createBaseMsgConfirmUndelegationResponse();
    return message;
  },
  fromAmino(_: MsgConfirmUndelegationResponseAmino): MsgConfirmUndelegationResponse {
    const message = createBaseMsgConfirmUndelegationResponse();
    return message;
  },
  toAmino(_: MsgConfirmUndelegationResponse): MsgConfirmUndelegationResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgConfirmUndelegationResponseAminoMsg): MsgConfirmUndelegationResponse {
    return MsgConfirmUndelegationResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgConfirmUndelegationResponseProtoMsg): MsgConfirmUndelegationResponse {
    return MsgConfirmUndelegationResponse.decode(message.value);
  },
  toProto(message: MsgConfirmUndelegationResponse): Uint8Array {
    return MsgConfirmUndelegationResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgConfirmUndelegationResponse): MsgConfirmUndelegationResponseProtoMsg {
    return {
      typeUrl: "/stride.stakedym.MsgConfirmUndelegationResponse",
      value: MsgConfirmUndelegationResponse.encode(message).finish()
    };
  }
};
function createBaseMsgConfirmUnbondedTokenSweep(): MsgConfirmUnbondedTokenSweep {
  return {
    operator: "",
    recordId: BigInt(0),
    txHash: ""
  };
}
export const MsgConfirmUnbondedTokenSweep = {
  typeUrl: "/stride.stakedym.MsgConfirmUnbondedTokenSweep",
  encode(message: MsgConfirmUnbondedTokenSweep, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.operator !== "") {
      writer.uint32(10).string(message.operator);
    }
    if (message.recordId !== BigInt(0)) {
      writer.uint32(16).uint64(message.recordId);
    }
    if (message.txHash !== "") {
      writer.uint32(26).string(message.txHash);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgConfirmUnbondedTokenSweep {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgConfirmUnbondedTokenSweep();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operator = reader.string();
          break;
        case 2:
          message.recordId = reader.uint64();
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
  fromPartial(object: Partial<MsgConfirmUnbondedTokenSweep>): MsgConfirmUnbondedTokenSweep {
    const message = createBaseMsgConfirmUnbondedTokenSweep();
    message.operator = object.operator ?? "";
    message.recordId = object.recordId !== undefined && object.recordId !== null ? BigInt(object.recordId.toString()) : BigInt(0);
    message.txHash = object.txHash ?? "";
    return message;
  },
  fromAmino(object: MsgConfirmUnbondedTokenSweepAmino): MsgConfirmUnbondedTokenSweep {
    const message = createBaseMsgConfirmUnbondedTokenSweep();
    if (object.operator !== undefined && object.operator !== null) {
      message.operator = object.operator;
    }
    if (object.record_id !== undefined && object.record_id !== null) {
      message.recordId = BigInt(object.record_id);
    }
    if (object.tx_hash !== undefined && object.tx_hash !== null) {
      message.txHash = object.tx_hash;
    }
    return message;
  },
  toAmino(message: MsgConfirmUnbondedTokenSweep): MsgConfirmUnbondedTokenSweepAmino {
    const obj: any = {};
    obj.operator = message.operator === "" ? undefined : message.operator;
    obj.record_id = message.recordId !== BigInt(0) ? message.recordId?.toString() : undefined;
    obj.tx_hash = message.txHash === "" ? undefined : message.txHash;
    return obj;
  },
  fromAminoMsg(object: MsgConfirmUnbondedTokenSweepAminoMsg): MsgConfirmUnbondedTokenSweep {
    return MsgConfirmUnbondedTokenSweep.fromAmino(object.value);
  },
  toAminoMsg(message: MsgConfirmUnbondedTokenSweep): MsgConfirmUnbondedTokenSweepAminoMsg {
    return {
      type: "stakedym/MsgConfirmUnbondedTokenSweep",
      value: MsgConfirmUnbondedTokenSweep.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgConfirmUnbondedTokenSweepProtoMsg): MsgConfirmUnbondedTokenSweep {
    return MsgConfirmUnbondedTokenSweep.decode(message.value);
  },
  toProto(message: MsgConfirmUnbondedTokenSweep): Uint8Array {
    return MsgConfirmUnbondedTokenSweep.encode(message).finish();
  },
  toProtoMsg(message: MsgConfirmUnbondedTokenSweep): MsgConfirmUnbondedTokenSweepProtoMsg {
    return {
      typeUrl: "/stride.stakedym.MsgConfirmUnbondedTokenSweep",
      value: MsgConfirmUnbondedTokenSweep.encode(message).finish()
    };
  }
};
function createBaseMsgConfirmUnbondedTokenSweepResponse(): MsgConfirmUnbondedTokenSweepResponse {
  return {};
}
export const MsgConfirmUnbondedTokenSweepResponse = {
  typeUrl: "/stride.stakedym.MsgConfirmUnbondedTokenSweepResponse",
  encode(_: MsgConfirmUnbondedTokenSweepResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgConfirmUnbondedTokenSweepResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(_: Partial<MsgConfirmUnbondedTokenSweepResponse>): MsgConfirmUnbondedTokenSweepResponse {
    const message = createBaseMsgConfirmUnbondedTokenSweepResponse();
    return message;
  },
  fromAmino(_: MsgConfirmUnbondedTokenSweepResponseAmino): MsgConfirmUnbondedTokenSweepResponse {
    const message = createBaseMsgConfirmUnbondedTokenSweepResponse();
    return message;
  },
  toAmino(_: MsgConfirmUnbondedTokenSweepResponse): MsgConfirmUnbondedTokenSweepResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgConfirmUnbondedTokenSweepResponseAminoMsg): MsgConfirmUnbondedTokenSweepResponse {
    return MsgConfirmUnbondedTokenSweepResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgConfirmUnbondedTokenSweepResponseProtoMsg): MsgConfirmUnbondedTokenSweepResponse {
    return MsgConfirmUnbondedTokenSweepResponse.decode(message.value);
  },
  toProto(message: MsgConfirmUnbondedTokenSweepResponse): Uint8Array {
    return MsgConfirmUnbondedTokenSweepResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgConfirmUnbondedTokenSweepResponse): MsgConfirmUnbondedTokenSweepResponseProtoMsg {
    return {
      typeUrl: "/stride.stakedym.MsgConfirmUnbondedTokenSweepResponse",
      value: MsgConfirmUnbondedTokenSweepResponse.encode(message).finish()
    };
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
  typeUrl: "/stride.stakedym.MsgAdjustDelegatedBalance",
  encode(message: MsgAdjustDelegatedBalance, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAdjustDelegatedBalance {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: Partial<MsgAdjustDelegatedBalance>): MsgAdjustDelegatedBalance {
    const message = createBaseMsgAdjustDelegatedBalance();
    message.operator = object.operator ?? "";
    message.delegationOffset = object.delegationOffset ?? "";
    message.validatorAddress = object.validatorAddress ?? "";
    return message;
  },
  fromAmino(object: MsgAdjustDelegatedBalanceAmino): MsgAdjustDelegatedBalance {
    const message = createBaseMsgAdjustDelegatedBalance();
    if (object.operator !== undefined && object.operator !== null) {
      message.operator = object.operator;
    }
    if (object.delegation_offset !== undefined && object.delegation_offset !== null) {
      message.delegationOffset = object.delegation_offset;
    }
    if (object.validator_address !== undefined && object.validator_address !== null) {
      message.validatorAddress = object.validator_address;
    }
    return message;
  },
  toAmino(message: MsgAdjustDelegatedBalance): MsgAdjustDelegatedBalanceAmino {
    const obj: any = {};
    obj.operator = message.operator === "" ? undefined : message.operator;
    obj.delegation_offset = message.delegationOffset === "" ? undefined : message.delegationOffset;
    obj.validator_address = message.validatorAddress === "" ? undefined : message.validatorAddress;
    return obj;
  },
  fromAminoMsg(object: MsgAdjustDelegatedBalanceAminoMsg): MsgAdjustDelegatedBalance {
    return MsgAdjustDelegatedBalance.fromAmino(object.value);
  },
  toAminoMsg(message: MsgAdjustDelegatedBalance): MsgAdjustDelegatedBalanceAminoMsg {
    return {
      type: "stakedym/MsgAdjustDelegatedBalance",
      value: MsgAdjustDelegatedBalance.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgAdjustDelegatedBalanceProtoMsg): MsgAdjustDelegatedBalance {
    return MsgAdjustDelegatedBalance.decode(message.value);
  },
  toProto(message: MsgAdjustDelegatedBalance): Uint8Array {
    return MsgAdjustDelegatedBalance.encode(message).finish();
  },
  toProtoMsg(message: MsgAdjustDelegatedBalance): MsgAdjustDelegatedBalanceProtoMsg {
    return {
      typeUrl: "/stride.stakedym.MsgAdjustDelegatedBalance",
      value: MsgAdjustDelegatedBalance.encode(message).finish()
    };
  }
};
function createBaseMsgAdjustDelegatedBalanceResponse(): MsgAdjustDelegatedBalanceResponse {
  return {};
}
export const MsgAdjustDelegatedBalanceResponse = {
  typeUrl: "/stride.stakedym.MsgAdjustDelegatedBalanceResponse",
  encode(_: MsgAdjustDelegatedBalanceResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAdjustDelegatedBalanceResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(_: Partial<MsgAdjustDelegatedBalanceResponse>): MsgAdjustDelegatedBalanceResponse {
    const message = createBaseMsgAdjustDelegatedBalanceResponse();
    return message;
  },
  fromAmino(_: MsgAdjustDelegatedBalanceResponseAmino): MsgAdjustDelegatedBalanceResponse {
    const message = createBaseMsgAdjustDelegatedBalanceResponse();
    return message;
  },
  toAmino(_: MsgAdjustDelegatedBalanceResponse): MsgAdjustDelegatedBalanceResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgAdjustDelegatedBalanceResponseAminoMsg): MsgAdjustDelegatedBalanceResponse {
    return MsgAdjustDelegatedBalanceResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAdjustDelegatedBalanceResponseProtoMsg): MsgAdjustDelegatedBalanceResponse {
    return MsgAdjustDelegatedBalanceResponse.decode(message.value);
  },
  toProto(message: MsgAdjustDelegatedBalanceResponse): Uint8Array {
    return MsgAdjustDelegatedBalanceResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgAdjustDelegatedBalanceResponse): MsgAdjustDelegatedBalanceResponseProtoMsg {
    return {
      typeUrl: "/stride.stakedym.MsgAdjustDelegatedBalanceResponse",
      value: MsgAdjustDelegatedBalanceResponse.encode(message).finish()
    };
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
  typeUrl: "/stride.stakedym.MsgUpdateInnerRedemptionRateBounds",
  encode(message: MsgUpdateInnerRedemptionRateBounds, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.minInnerRedemptionRate !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.minInnerRedemptionRate, 18).atomics);
    }
    if (message.maxInnerRedemptionRate !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.maxInnerRedemptionRate, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateInnerRedemptionRateBounds {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateInnerRedemptionRateBounds();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.minInnerRedemptionRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.maxInnerRedemptionRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUpdateInnerRedemptionRateBounds>): MsgUpdateInnerRedemptionRateBounds {
    const message = createBaseMsgUpdateInnerRedemptionRateBounds();
    message.creator = object.creator ?? "";
    message.minInnerRedemptionRate = object.minInnerRedemptionRate ?? "";
    message.maxInnerRedemptionRate = object.maxInnerRedemptionRate ?? "";
    return message;
  },
  fromAmino(object: MsgUpdateInnerRedemptionRateBoundsAmino): MsgUpdateInnerRedemptionRateBounds {
    const message = createBaseMsgUpdateInnerRedemptionRateBounds();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.min_inner_redemption_rate !== undefined && object.min_inner_redemption_rate !== null) {
      message.minInnerRedemptionRate = object.min_inner_redemption_rate;
    }
    if (object.max_inner_redemption_rate !== undefined && object.max_inner_redemption_rate !== null) {
      message.maxInnerRedemptionRate = object.max_inner_redemption_rate;
    }
    return message;
  },
  toAmino(message: MsgUpdateInnerRedemptionRateBounds): MsgUpdateInnerRedemptionRateBoundsAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.min_inner_redemption_rate = message.minInnerRedemptionRate === "" ? undefined : message.minInnerRedemptionRate;
    obj.max_inner_redemption_rate = message.maxInnerRedemptionRate === "" ? undefined : message.maxInnerRedemptionRate;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateInnerRedemptionRateBoundsAminoMsg): MsgUpdateInnerRedemptionRateBounds {
    return MsgUpdateInnerRedemptionRateBounds.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateInnerRedemptionRateBounds): MsgUpdateInnerRedemptionRateBoundsAminoMsg {
    return {
      type: "stakedym/MsgUpdateRedemptionRateBounds",
      value: MsgUpdateInnerRedemptionRateBounds.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateInnerRedemptionRateBoundsProtoMsg): MsgUpdateInnerRedemptionRateBounds {
    return MsgUpdateInnerRedemptionRateBounds.decode(message.value);
  },
  toProto(message: MsgUpdateInnerRedemptionRateBounds): Uint8Array {
    return MsgUpdateInnerRedemptionRateBounds.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateInnerRedemptionRateBounds): MsgUpdateInnerRedemptionRateBoundsProtoMsg {
    return {
      typeUrl: "/stride.stakedym.MsgUpdateInnerRedemptionRateBounds",
      value: MsgUpdateInnerRedemptionRateBounds.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateInnerRedemptionRateBoundsResponse(): MsgUpdateInnerRedemptionRateBoundsResponse {
  return {};
}
export const MsgUpdateInnerRedemptionRateBoundsResponse = {
  typeUrl: "/stride.stakedym.MsgUpdateInnerRedemptionRateBoundsResponse",
  encode(_: MsgUpdateInnerRedemptionRateBoundsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateInnerRedemptionRateBoundsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(_: Partial<MsgUpdateInnerRedemptionRateBoundsResponse>): MsgUpdateInnerRedemptionRateBoundsResponse {
    const message = createBaseMsgUpdateInnerRedemptionRateBoundsResponse();
    return message;
  },
  fromAmino(_: MsgUpdateInnerRedemptionRateBoundsResponseAmino): MsgUpdateInnerRedemptionRateBoundsResponse {
    const message = createBaseMsgUpdateInnerRedemptionRateBoundsResponse();
    return message;
  },
  toAmino(_: MsgUpdateInnerRedemptionRateBoundsResponse): MsgUpdateInnerRedemptionRateBoundsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateInnerRedemptionRateBoundsResponseAminoMsg): MsgUpdateInnerRedemptionRateBoundsResponse {
    return MsgUpdateInnerRedemptionRateBoundsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateInnerRedemptionRateBoundsResponseProtoMsg): MsgUpdateInnerRedemptionRateBoundsResponse {
    return MsgUpdateInnerRedemptionRateBoundsResponse.decode(message.value);
  },
  toProto(message: MsgUpdateInnerRedemptionRateBoundsResponse): Uint8Array {
    return MsgUpdateInnerRedemptionRateBoundsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateInnerRedemptionRateBoundsResponse): MsgUpdateInnerRedemptionRateBoundsResponseProtoMsg {
    return {
      typeUrl: "/stride.stakedym.MsgUpdateInnerRedemptionRateBoundsResponse",
      value: MsgUpdateInnerRedemptionRateBoundsResponse.encode(message).finish()
    };
  }
};
function createBaseMsgResumeHostZone(): MsgResumeHostZone {
  return {
    creator: ""
  };
}
export const MsgResumeHostZone = {
  typeUrl: "/stride.stakedym.MsgResumeHostZone",
  encode(message: MsgResumeHostZone, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgResumeHostZone {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: Partial<MsgResumeHostZone>): MsgResumeHostZone {
    const message = createBaseMsgResumeHostZone();
    message.creator = object.creator ?? "";
    return message;
  },
  fromAmino(object: MsgResumeHostZoneAmino): MsgResumeHostZone {
    const message = createBaseMsgResumeHostZone();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    return message;
  },
  toAmino(message: MsgResumeHostZone): MsgResumeHostZoneAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    return obj;
  },
  fromAminoMsg(object: MsgResumeHostZoneAminoMsg): MsgResumeHostZone {
    return MsgResumeHostZone.fromAmino(object.value);
  },
  toAminoMsg(message: MsgResumeHostZone): MsgResumeHostZoneAminoMsg {
    return {
      type: "stakedym/MsgResumeHostZone",
      value: MsgResumeHostZone.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgResumeHostZoneProtoMsg): MsgResumeHostZone {
    return MsgResumeHostZone.decode(message.value);
  },
  toProto(message: MsgResumeHostZone): Uint8Array {
    return MsgResumeHostZone.encode(message).finish();
  },
  toProtoMsg(message: MsgResumeHostZone): MsgResumeHostZoneProtoMsg {
    return {
      typeUrl: "/stride.stakedym.MsgResumeHostZone",
      value: MsgResumeHostZone.encode(message).finish()
    };
  }
};
function createBaseMsgResumeHostZoneResponse(): MsgResumeHostZoneResponse {
  return {};
}
export const MsgResumeHostZoneResponse = {
  typeUrl: "/stride.stakedym.MsgResumeHostZoneResponse",
  encode(_: MsgResumeHostZoneResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgResumeHostZoneResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(_: Partial<MsgResumeHostZoneResponse>): MsgResumeHostZoneResponse {
    const message = createBaseMsgResumeHostZoneResponse();
    return message;
  },
  fromAmino(_: MsgResumeHostZoneResponseAmino): MsgResumeHostZoneResponse {
    const message = createBaseMsgResumeHostZoneResponse();
    return message;
  },
  toAmino(_: MsgResumeHostZoneResponse): MsgResumeHostZoneResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgResumeHostZoneResponseAminoMsg): MsgResumeHostZoneResponse {
    return MsgResumeHostZoneResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgResumeHostZoneResponseProtoMsg): MsgResumeHostZoneResponse {
    return MsgResumeHostZoneResponse.decode(message.value);
  },
  toProto(message: MsgResumeHostZoneResponse): Uint8Array {
    return MsgResumeHostZoneResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgResumeHostZoneResponse): MsgResumeHostZoneResponseProtoMsg {
    return {
      typeUrl: "/stride.stakedym.MsgResumeHostZoneResponse",
      value: MsgResumeHostZoneResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRefreshRedemptionRate(): MsgRefreshRedemptionRate {
  return {
    creator: ""
  };
}
export const MsgRefreshRedemptionRate = {
  typeUrl: "/stride.stakedym.MsgRefreshRedemptionRate",
  encode(message: MsgRefreshRedemptionRate, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRefreshRedemptionRate {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: Partial<MsgRefreshRedemptionRate>): MsgRefreshRedemptionRate {
    const message = createBaseMsgRefreshRedemptionRate();
    message.creator = object.creator ?? "";
    return message;
  },
  fromAmino(object: MsgRefreshRedemptionRateAmino): MsgRefreshRedemptionRate {
    const message = createBaseMsgRefreshRedemptionRate();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    return message;
  },
  toAmino(message: MsgRefreshRedemptionRate): MsgRefreshRedemptionRateAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    return obj;
  },
  fromAminoMsg(object: MsgRefreshRedemptionRateAminoMsg): MsgRefreshRedemptionRate {
    return MsgRefreshRedemptionRate.fromAmino(object.value);
  },
  toAminoMsg(message: MsgRefreshRedemptionRate): MsgRefreshRedemptionRateAminoMsg {
    return {
      type: "stakedym/MsgRefreshRedemptionRate",
      value: MsgRefreshRedemptionRate.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgRefreshRedemptionRateProtoMsg): MsgRefreshRedemptionRate {
    return MsgRefreshRedemptionRate.decode(message.value);
  },
  toProto(message: MsgRefreshRedemptionRate): Uint8Array {
    return MsgRefreshRedemptionRate.encode(message).finish();
  },
  toProtoMsg(message: MsgRefreshRedemptionRate): MsgRefreshRedemptionRateProtoMsg {
    return {
      typeUrl: "/stride.stakedym.MsgRefreshRedemptionRate",
      value: MsgRefreshRedemptionRate.encode(message).finish()
    };
  }
};
function createBaseMsgRefreshRedemptionRateResponse(): MsgRefreshRedemptionRateResponse {
  return {};
}
export const MsgRefreshRedemptionRateResponse = {
  typeUrl: "/stride.stakedym.MsgRefreshRedemptionRateResponse",
  encode(_: MsgRefreshRedemptionRateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRefreshRedemptionRateResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(_: Partial<MsgRefreshRedemptionRateResponse>): MsgRefreshRedemptionRateResponse {
    const message = createBaseMsgRefreshRedemptionRateResponse();
    return message;
  },
  fromAmino(_: MsgRefreshRedemptionRateResponseAmino): MsgRefreshRedemptionRateResponse {
    const message = createBaseMsgRefreshRedemptionRateResponse();
    return message;
  },
  toAmino(_: MsgRefreshRedemptionRateResponse): MsgRefreshRedemptionRateResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRefreshRedemptionRateResponseAminoMsg): MsgRefreshRedemptionRateResponse {
    return MsgRefreshRedemptionRateResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRefreshRedemptionRateResponseProtoMsg): MsgRefreshRedemptionRateResponse {
    return MsgRefreshRedemptionRateResponse.decode(message.value);
  },
  toProto(message: MsgRefreshRedemptionRateResponse): Uint8Array {
    return MsgRefreshRedemptionRateResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRefreshRedemptionRateResponse): MsgRefreshRedemptionRateResponseProtoMsg {
    return {
      typeUrl: "/stride.stakedym.MsgRefreshRedemptionRateResponse",
      value: MsgRefreshRedemptionRateResponse.encode(message).finish()
    };
  }
};
function createBaseMsgOverwriteDelegationRecord(): MsgOverwriteDelegationRecord {
  return {
    creator: "",
    delegationRecord: undefined
  };
}
export const MsgOverwriteDelegationRecord = {
  typeUrl: "/stride.stakedym.MsgOverwriteDelegationRecord",
  encode(message: MsgOverwriteDelegationRecord, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.delegationRecord !== undefined) {
      DelegationRecord.encode(message.delegationRecord, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgOverwriteDelegationRecord {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: Partial<MsgOverwriteDelegationRecord>): MsgOverwriteDelegationRecord {
    const message = createBaseMsgOverwriteDelegationRecord();
    message.creator = object.creator ?? "";
    message.delegationRecord = object.delegationRecord !== undefined && object.delegationRecord !== null ? DelegationRecord.fromPartial(object.delegationRecord) : undefined;
    return message;
  },
  fromAmino(object: MsgOverwriteDelegationRecordAmino): MsgOverwriteDelegationRecord {
    const message = createBaseMsgOverwriteDelegationRecord();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.delegation_record !== undefined && object.delegation_record !== null) {
      message.delegationRecord = DelegationRecord.fromAmino(object.delegation_record);
    }
    return message;
  },
  toAmino(message: MsgOverwriteDelegationRecord): MsgOverwriteDelegationRecordAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.delegation_record = message.delegationRecord ? DelegationRecord.toAmino(message.delegationRecord) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgOverwriteDelegationRecordAminoMsg): MsgOverwriteDelegationRecord {
    return MsgOverwriteDelegationRecord.fromAmino(object.value);
  },
  toAminoMsg(message: MsgOverwriteDelegationRecord): MsgOverwriteDelegationRecordAminoMsg {
    return {
      type: "stakedym/MsgOverwriteDelegationRecord",
      value: MsgOverwriteDelegationRecord.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgOverwriteDelegationRecordProtoMsg): MsgOverwriteDelegationRecord {
    return MsgOverwriteDelegationRecord.decode(message.value);
  },
  toProto(message: MsgOverwriteDelegationRecord): Uint8Array {
    return MsgOverwriteDelegationRecord.encode(message).finish();
  },
  toProtoMsg(message: MsgOverwriteDelegationRecord): MsgOverwriteDelegationRecordProtoMsg {
    return {
      typeUrl: "/stride.stakedym.MsgOverwriteDelegationRecord",
      value: MsgOverwriteDelegationRecord.encode(message).finish()
    };
  }
};
function createBaseMsgOverwriteDelegationRecordResponse(): MsgOverwriteDelegationRecordResponse {
  return {};
}
export const MsgOverwriteDelegationRecordResponse = {
  typeUrl: "/stride.stakedym.MsgOverwriteDelegationRecordResponse",
  encode(_: MsgOverwriteDelegationRecordResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgOverwriteDelegationRecordResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(_: Partial<MsgOverwriteDelegationRecordResponse>): MsgOverwriteDelegationRecordResponse {
    const message = createBaseMsgOverwriteDelegationRecordResponse();
    return message;
  },
  fromAmino(_: MsgOverwriteDelegationRecordResponseAmino): MsgOverwriteDelegationRecordResponse {
    const message = createBaseMsgOverwriteDelegationRecordResponse();
    return message;
  },
  toAmino(_: MsgOverwriteDelegationRecordResponse): MsgOverwriteDelegationRecordResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgOverwriteDelegationRecordResponseAminoMsg): MsgOverwriteDelegationRecordResponse {
    return MsgOverwriteDelegationRecordResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgOverwriteDelegationRecordResponseProtoMsg): MsgOverwriteDelegationRecordResponse {
    return MsgOverwriteDelegationRecordResponse.decode(message.value);
  },
  toProto(message: MsgOverwriteDelegationRecordResponse): Uint8Array {
    return MsgOverwriteDelegationRecordResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgOverwriteDelegationRecordResponse): MsgOverwriteDelegationRecordResponseProtoMsg {
    return {
      typeUrl: "/stride.stakedym.MsgOverwriteDelegationRecordResponse",
      value: MsgOverwriteDelegationRecordResponse.encode(message).finish()
    };
  }
};
function createBaseMsgOverwriteUnbondingRecord(): MsgOverwriteUnbondingRecord {
  return {
    creator: "",
    unbondingRecord: undefined
  };
}
export const MsgOverwriteUnbondingRecord = {
  typeUrl: "/stride.stakedym.MsgOverwriteUnbondingRecord",
  encode(message: MsgOverwriteUnbondingRecord, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.unbondingRecord !== undefined) {
      UnbondingRecord.encode(message.unbondingRecord, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgOverwriteUnbondingRecord {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: Partial<MsgOverwriteUnbondingRecord>): MsgOverwriteUnbondingRecord {
    const message = createBaseMsgOverwriteUnbondingRecord();
    message.creator = object.creator ?? "";
    message.unbondingRecord = object.unbondingRecord !== undefined && object.unbondingRecord !== null ? UnbondingRecord.fromPartial(object.unbondingRecord) : undefined;
    return message;
  },
  fromAmino(object: MsgOverwriteUnbondingRecordAmino): MsgOverwriteUnbondingRecord {
    const message = createBaseMsgOverwriteUnbondingRecord();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.unbonding_record !== undefined && object.unbonding_record !== null) {
      message.unbondingRecord = UnbondingRecord.fromAmino(object.unbonding_record);
    }
    return message;
  },
  toAmino(message: MsgOverwriteUnbondingRecord): MsgOverwriteUnbondingRecordAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.unbonding_record = message.unbondingRecord ? UnbondingRecord.toAmino(message.unbondingRecord) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgOverwriteUnbondingRecordAminoMsg): MsgOverwriteUnbondingRecord {
    return MsgOverwriteUnbondingRecord.fromAmino(object.value);
  },
  toAminoMsg(message: MsgOverwriteUnbondingRecord): MsgOverwriteUnbondingRecordAminoMsg {
    return {
      type: "stakedym/MsgOverwriteUnbondingRecord",
      value: MsgOverwriteUnbondingRecord.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgOverwriteUnbondingRecordProtoMsg): MsgOverwriteUnbondingRecord {
    return MsgOverwriteUnbondingRecord.decode(message.value);
  },
  toProto(message: MsgOverwriteUnbondingRecord): Uint8Array {
    return MsgOverwriteUnbondingRecord.encode(message).finish();
  },
  toProtoMsg(message: MsgOverwriteUnbondingRecord): MsgOverwriteUnbondingRecordProtoMsg {
    return {
      typeUrl: "/stride.stakedym.MsgOverwriteUnbondingRecord",
      value: MsgOverwriteUnbondingRecord.encode(message).finish()
    };
  }
};
function createBaseMsgOverwriteUnbondingRecordResponse(): MsgOverwriteUnbondingRecordResponse {
  return {};
}
export const MsgOverwriteUnbondingRecordResponse = {
  typeUrl: "/stride.stakedym.MsgOverwriteUnbondingRecordResponse",
  encode(_: MsgOverwriteUnbondingRecordResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgOverwriteUnbondingRecordResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(_: Partial<MsgOverwriteUnbondingRecordResponse>): MsgOverwriteUnbondingRecordResponse {
    const message = createBaseMsgOverwriteUnbondingRecordResponse();
    return message;
  },
  fromAmino(_: MsgOverwriteUnbondingRecordResponseAmino): MsgOverwriteUnbondingRecordResponse {
    const message = createBaseMsgOverwriteUnbondingRecordResponse();
    return message;
  },
  toAmino(_: MsgOverwriteUnbondingRecordResponse): MsgOverwriteUnbondingRecordResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgOverwriteUnbondingRecordResponseAminoMsg): MsgOverwriteUnbondingRecordResponse {
    return MsgOverwriteUnbondingRecordResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgOverwriteUnbondingRecordResponseProtoMsg): MsgOverwriteUnbondingRecordResponse {
    return MsgOverwriteUnbondingRecordResponse.decode(message.value);
  },
  toProto(message: MsgOverwriteUnbondingRecordResponse): Uint8Array {
    return MsgOverwriteUnbondingRecordResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgOverwriteUnbondingRecordResponse): MsgOverwriteUnbondingRecordResponseProtoMsg {
    return {
      typeUrl: "/stride.stakedym.MsgOverwriteUnbondingRecordResponse",
      value: MsgOverwriteUnbondingRecordResponse.encode(message).finish()
    };
  }
};
function createBaseMsgOverwriteRedemptionRecord(): MsgOverwriteRedemptionRecord {
  return {
    creator: "",
    redemptionRecord: undefined
  };
}
export const MsgOverwriteRedemptionRecord = {
  typeUrl: "/stride.stakedym.MsgOverwriteRedemptionRecord",
  encode(message: MsgOverwriteRedemptionRecord, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.redemptionRecord !== undefined) {
      RedemptionRecord.encode(message.redemptionRecord, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgOverwriteRedemptionRecord {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: Partial<MsgOverwriteRedemptionRecord>): MsgOverwriteRedemptionRecord {
    const message = createBaseMsgOverwriteRedemptionRecord();
    message.creator = object.creator ?? "";
    message.redemptionRecord = object.redemptionRecord !== undefined && object.redemptionRecord !== null ? RedemptionRecord.fromPartial(object.redemptionRecord) : undefined;
    return message;
  },
  fromAmino(object: MsgOverwriteRedemptionRecordAmino): MsgOverwriteRedemptionRecord {
    const message = createBaseMsgOverwriteRedemptionRecord();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.redemption_record !== undefined && object.redemption_record !== null) {
      message.redemptionRecord = RedemptionRecord.fromAmino(object.redemption_record);
    }
    return message;
  },
  toAmino(message: MsgOverwriteRedemptionRecord): MsgOverwriteRedemptionRecordAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.redemption_record = message.redemptionRecord ? RedemptionRecord.toAmino(message.redemptionRecord) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgOverwriteRedemptionRecordAminoMsg): MsgOverwriteRedemptionRecord {
    return MsgOverwriteRedemptionRecord.fromAmino(object.value);
  },
  toAminoMsg(message: MsgOverwriteRedemptionRecord): MsgOverwriteRedemptionRecordAminoMsg {
    return {
      type: "stakedym/MsgOverwriteRedemptionRecord",
      value: MsgOverwriteRedemptionRecord.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgOverwriteRedemptionRecordProtoMsg): MsgOverwriteRedemptionRecord {
    return MsgOverwriteRedemptionRecord.decode(message.value);
  },
  toProto(message: MsgOverwriteRedemptionRecord): Uint8Array {
    return MsgOverwriteRedemptionRecord.encode(message).finish();
  },
  toProtoMsg(message: MsgOverwriteRedemptionRecord): MsgOverwriteRedemptionRecordProtoMsg {
    return {
      typeUrl: "/stride.stakedym.MsgOverwriteRedemptionRecord",
      value: MsgOverwriteRedemptionRecord.encode(message).finish()
    };
  }
};
function createBaseMsgOverwriteRedemptionRecordResponse(): MsgOverwriteRedemptionRecordResponse {
  return {};
}
export const MsgOverwriteRedemptionRecordResponse = {
  typeUrl: "/stride.stakedym.MsgOverwriteRedemptionRecordResponse",
  encode(_: MsgOverwriteRedemptionRecordResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgOverwriteRedemptionRecordResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(_: Partial<MsgOverwriteRedemptionRecordResponse>): MsgOverwriteRedemptionRecordResponse {
    const message = createBaseMsgOverwriteRedemptionRecordResponse();
    return message;
  },
  fromAmino(_: MsgOverwriteRedemptionRecordResponseAmino): MsgOverwriteRedemptionRecordResponse {
    const message = createBaseMsgOverwriteRedemptionRecordResponse();
    return message;
  },
  toAmino(_: MsgOverwriteRedemptionRecordResponse): MsgOverwriteRedemptionRecordResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgOverwriteRedemptionRecordResponseAminoMsg): MsgOverwriteRedemptionRecordResponse {
    return MsgOverwriteRedemptionRecordResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgOverwriteRedemptionRecordResponseProtoMsg): MsgOverwriteRedemptionRecordResponse {
    return MsgOverwriteRedemptionRecordResponse.decode(message.value);
  },
  toProto(message: MsgOverwriteRedemptionRecordResponse): Uint8Array {
    return MsgOverwriteRedemptionRecordResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgOverwriteRedemptionRecordResponse): MsgOverwriteRedemptionRecordResponseProtoMsg {
    return {
      typeUrl: "/stride.stakedym.MsgOverwriteRedemptionRecordResponse",
      value: MsgOverwriteRedemptionRecordResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSetOperatorAddress(): MsgSetOperatorAddress {
  return {
    signer: "",
    operator: ""
  };
}
export const MsgSetOperatorAddress = {
  typeUrl: "/stride.stakedym.MsgSetOperatorAddress",
  encode(message: MsgSetOperatorAddress, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }
    if (message.operator !== "") {
      writer.uint32(18).string(message.operator);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetOperatorAddress {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: Partial<MsgSetOperatorAddress>): MsgSetOperatorAddress {
    const message = createBaseMsgSetOperatorAddress();
    message.signer = object.signer ?? "";
    message.operator = object.operator ?? "";
    return message;
  },
  fromAmino(object: MsgSetOperatorAddressAmino): MsgSetOperatorAddress {
    const message = createBaseMsgSetOperatorAddress();
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    if (object.operator !== undefined && object.operator !== null) {
      message.operator = object.operator;
    }
    return message;
  },
  toAmino(message: MsgSetOperatorAddress): MsgSetOperatorAddressAmino {
    const obj: any = {};
    obj.signer = message.signer === "" ? undefined : message.signer;
    obj.operator = message.operator === "" ? undefined : message.operator;
    return obj;
  },
  fromAminoMsg(object: MsgSetOperatorAddressAminoMsg): MsgSetOperatorAddress {
    return MsgSetOperatorAddress.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSetOperatorAddress): MsgSetOperatorAddressAminoMsg {
    return {
      type: "stakedym/MsgSetOperatorAddress",
      value: MsgSetOperatorAddress.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSetOperatorAddressProtoMsg): MsgSetOperatorAddress {
    return MsgSetOperatorAddress.decode(message.value);
  },
  toProto(message: MsgSetOperatorAddress): Uint8Array {
    return MsgSetOperatorAddress.encode(message).finish();
  },
  toProtoMsg(message: MsgSetOperatorAddress): MsgSetOperatorAddressProtoMsg {
    return {
      typeUrl: "/stride.stakedym.MsgSetOperatorAddress",
      value: MsgSetOperatorAddress.encode(message).finish()
    };
  }
};
function createBaseMsgSetOperatorAddressResponse(): MsgSetOperatorAddressResponse {
  return {};
}
export const MsgSetOperatorAddressResponse = {
  typeUrl: "/stride.stakedym.MsgSetOperatorAddressResponse",
  encode(_: MsgSetOperatorAddressResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetOperatorAddressResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(_: Partial<MsgSetOperatorAddressResponse>): MsgSetOperatorAddressResponse {
    const message = createBaseMsgSetOperatorAddressResponse();
    return message;
  },
  fromAmino(_: MsgSetOperatorAddressResponseAmino): MsgSetOperatorAddressResponse {
    const message = createBaseMsgSetOperatorAddressResponse();
    return message;
  },
  toAmino(_: MsgSetOperatorAddressResponse): MsgSetOperatorAddressResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSetOperatorAddressResponseAminoMsg): MsgSetOperatorAddressResponse {
    return MsgSetOperatorAddressResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetOperatorAddressResponseProtoMsg): MsgSetOperatorAddressResponse {
    return MsgSetOperatorAddressResponse.decode(message.value);
  },
  toProto(message: MsgSetOperatorAddressResponse): Uint8Array {
    return MsgSetOperatorAddressResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSetOperatorAddressResponse): MsgSetOperatorAddressResponseProtoMsg {
    return {
      typeUrl: "/stride.stakedym.MsgSetOperatorAddressResponse",
      value: MsgSetOperatorAddressResponse.encode(message).finish()
    };
  }
};