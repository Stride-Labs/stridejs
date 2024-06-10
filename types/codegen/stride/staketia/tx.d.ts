import { DelegationRecord, DelegationRecordSDKType, UnbondingRecord, UnbondingRecordSDKType, RedemptionRecord, RedemptionRecordSDKType } from "./staketia";
import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
export declare enum OverwritableRecordType {
    RECORD_TYPE_DELEGATION = 0,
    RECORD_TYPE_UNBONDING = 1,
    RECORD_TYPE_REDEMPTION = 2,
    UNRECOGNIZED = -1
}
export declare enum OverwritableRecordTypeSDKType {
    RECORD_TYPE_DELEGATION = 0,
    RECORD_TYPE_UNBONDING = 1,
    RECORD_TYPE_REDEMPTION = 2,
    UNRECOGNIZED = -1
}
export declare function overwritableRecordTypeFromJSON(object: any): OverwritableRecordType;
export declare function overwritableRecordTypeToJSON(object: OverwritableRecordType): string;
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
export interface MsgConfirmDelegationResponse {
}
export interface MsgConfirmDelegationResponseSDKType {
}
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
export interface MsgConfirmUndelegationResponse {
}
export interface MsgConfirmUndelegationResponseSDKType {
}
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
export interface MsgConfirmUnbondedTokenSweepResponse {
}
export interface MsgConfirmUnbondedTokenSweepResponseSDKType {
}
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
export interface MsgAdjustDelegatedBalanceResponse {
}
export interface MsgAdjustDelegatedBalanceResponseSDKType {
}
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
export interface MsgUpdateInnerRedemptionRateBoundsResponse {
}
export interface MsgUpdateInnerRedemptionRateBoundsResponseSDKType {
}
/** ResumeHostZone */
export interface MsgResumeHostZone {
    creator: string;
}
/** ResumeHostZone */
export interface MsgResumeHostZoneSDKType {
    creator: string;
}
export interface MsgResumeHostZoneResponse {
}
export interface MsgResumeHostZoneResponseSDKType {
}
/** RefreshRedemptionRate */
export interface MsgRefreshRedemptionRate {
    creator: string;
}
/** RefreshRedemptionRate */
export interface MsgRefreshRedemptionRateSDKType {
    creator: string;
}
export interface MsgRefreshRedemptionRateResponse {
}
export interface MsgRefreshRedemptionRateResponseSDKType {
}
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
export interface MsgOverwriteDelegationRecordResponse {
}
export interface MsgOverwriteDelegationRecordResponseSDKType {
}
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
export interface MsgOverwriteUnbondingRecordResponse {
}
export interface MsgOverwriteUnbondingRecordResponseSDKType {
}
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
export interface MsgOverwriteRedemptionRecordResponse {
}
export interface MsgOverwriteRedemptionRecordResponseSDKType {
}
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
export interface MsgSetOperatorAddressResponse {
}
export interface MsgSetOperatorAddressResponseSDKType {
}
export declare const MsgLiquidStake: {
    encode(message: MsgLiquidStake, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgLiquidStake;
    fromPartial(object: DeepPartial<MsgLiquidStake>): MsgLiquidStake;
};
export declare const MsgLiquidStakeResponse: {
    encode(message: MsgLiquidStakeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgLiquidStakeResponse;
    fromPartial(object: DeepPartial<MsgLiquidStakeResponse>): MsgLiquidStakeResponse;
};
export declare const MsgRedeemStake: {
    encode(message: MsgRedeemStake, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRedeemStake;
    fromPartial(object: DeepPartial<MsgRedeemStake>): MsgRedeemStake;
};
export declare const MsgRedeemStakeResponse: {
    encode(message: MsgRedeemStakeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRedeemStakeResponse;
    fromPartial(object: DeepPartial<MsgRedeemStakeResponse>): MsgRedeemStakeResponse;
};
export declare const MsgConfirmDelegation: {
    encode(message: MsgConfirmDelegation, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgConfirmDelegation;
    fromPartial(object: DeepPartial<MsgConfirmDelegation>): MsgConfirmDelegation;
};
export declare const MsgConfirmDelegationResponse: {
    encode(_: MsgConfirmDelegationResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgConfirmDelegationResponse;
    fromPartial(_: DeepPartial<MsgConfirmDelegationResponse>): MsgConfirmDelegationResponse;
};
export declare const MsgConfirmUndelegation: {
    encode(message: MsgConfirmUndelegation, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgConfirmUndelegation;
    fromPartial(object: DeepPartial<MsgConfirmUndelegation>): MsgConfirmUndelegation;
};
export declare const MsgConfirmUndelegationResponse: {
    encode(_: MsgConfirmUndelegationResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgConfirmUndelegationResponse;
    fromPartial(_: DeepPartial<MsgConfirmUndelegationResponse>): MsgConfirmUndelegationResponse;
};
export declare const MsgConfirmUnbondedTokenSweep: {
    encode(message: MsgConfirmUnbondedTokenSweep, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgConfirmUnbondedTokenSweep;
    fromPartial(object: DeepPartial<MsgConfirmUnbondedTokenSweep>): MsgConfirmUnbondedTokenSweep;
};
export declare const MsgConfirmUnbondedTokenSweepResponse: {
    encode(_: MsgConfirmUnbondedTokenSweepResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgConfirmUnbondedTokenSweepResponse;
    fromPartial(_: DeepPartial<MsgConfirmUnbondedTokenSweepResponse>): MsgConfirmUnbondedTokenSweepResponse;
};
export declare const MsgAdjustDelegatedBalance: {
    encode(message: MsgAdjustDelegatedBalance, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgAdjustDelegatedBalance;
    fromPartial(object: DeepPartial<MsgAdjustDelegatedBalance>): MsgAdjustDelegatedBalance;
};
export declare const MsgAdjustDelegatedBalanceResponse: {
    encode(_: MsgAdjustDelegatedBalanceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgAdjustDelegatedBalanceResponse;
    fromPartial(_: DeepPartial<MsgAdjustDelegatedBalanceResponse>): MsgAdjustDelegatedBalanceResponse;
};
export declare const MsgUpdateInnerRedemptionRateBounds: {
    encode(message: MsgUpdateInnerRedemptionRateBounds, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateInnerRedemptionRateBounds;
    fromPartial(object: DeepPartial<MsgUpdateInnerRedemptionRateBounds>): MsgUpdateInnerRedemptionRateBounds;
};
export declare const MsgUpdateInnerRedemptionRateBoundsResponse: {
    encode(_: MsgUpdateInnerRedemptionRateBoundsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateInnerRedemptionRateBoundsResponse;
    fromPartial(_: DeepPartial<MsgUpdateInnerRedemptionRateBoundsResponse>): MsgUpdateInnerRedemptionRateBoundsResponse;
};
export declare const MsgResumeHostZone: {
    encode(message: MsgResumeHostZone, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgResumeHostZone;
    fromPartial(object: DeepPartial<MsgResumeHostZone>): MsgResumeHostZone;
};
export declare const MsgResumeHostZoneResponse: {
    encode(_: MsgResumeHostZoneResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgResumeHostZoneResponse;
    fromPartial(_: DeepPartial<MsgResumeHostZoneResponse>): MsgResumeHostZoneResponse;
};
export declare const MsgRefreshRedemptionRate: {
    encode(message: MsgRefreshRedemptionRate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRefreshRedemptionRate;
    fromPartial(object: DeepPartial<MsgRefreshRedemptionRate>): MsgRefreshRedemptionRate;
};
export declare const MsgRefreshRedemptionRateResponse: {
    encode(_: MsgRefreshRedemptionRateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRefreshRedemptionRateResponse;
    fromPartial(_: DeepPartial<MsgRefreshRedemptionRateResponse>): MsgRefreshRedemptionRateResponse;
};
export declare const MsgOverwriteDelegationRecord: {
    encode(message: MsgOverwriteDelegationRecord, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgOverwriteDelegationRecord;
    fromPartial(object: DeepPartial<MsgOverwriteDelegationRecord>): MsgOverwriteDelegationRecord;
};
export declare const MsgOverwriteDelegationRecordResponse: {
    encode(_: MsgOverwriteDelegationRecordResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgOverwriteDelegationRecordResponse;
    fromPartial(_: DeepPartial<MsgOverwriteDelegationRecordResponse>): MsgOverwriteDelegationRecordResponse;
};
export declare const MsgOverwriteUnbondingRecord: {
    encode(message: MsgOverwriteUnbondingRecord, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgOverwriteUnbondingRecord;
    fromPartial(object: DeepPartial<MsgOverwriteUnbondingRecord>): MsgOverwriteUnbondingRecord;
};
export declare const MsgOverwriteUnbondingRecordResponse: {
    encode(_: MsgOverwriteUnbondingRecordResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgOverwriteUnbondingRecordResponse;
    fromPartial(_: DeepPartial<MsgOverwriteUnbondingRecordResponse>): MsgOverwriteUnbondingRecordResponse;
};
export declare const MsgOverwriteRedemptionRecord: {
    encode(message: MsgOverwriteRedemptionRecord, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgOverwriteRedemptionRecord;
    fromPartial(object: DeepPartial<MsgOverwriteRedemptionRecord>): MsgOverwriteRedemptionRecord;
};
export declare const MsgOverwriteRedemptionRecordResponse: {
    encode(_: MsgOverwriteRedemptionRecordResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgOverwriteRedemptionRecordResponse;
    fromPartial(_: DeepPartial<MsgOverwriteRedemptionRecordResponse>): MsgOverwriteRedemptionRecordResponse;
};
export declare const MsgSetOperatorAddress: {
    encode(message: MsgSetOperatorAddress, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetOperatorAddress;
    fromPartial(object: DeepPartial<MsgSetOperatorAddress>): MsgSetOperatorAddress;
};
export declare const MsgSetOperatorAddressResponse: {
    encode(_: MsgSetOperatorAddressResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetOperatorAddressResponse;
    fromPartial(_: DeepPartial<MsgSetOperatorAddressResponse>): MsgSetOperatorAddressResponse;
};
