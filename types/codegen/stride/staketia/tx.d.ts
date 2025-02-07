import { DelegationRecord, DelegationRecordAmino, DelegationRecordSDKType, UnbondingRecord, UnbondingRecordAmino, UnbondingRecordSDKType, RedemptionRecord, RedemptionRecordAmino, RedemptionRecordSDKType } from "./staketia";
import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../binary";
export declare enum OverwritableRecordType {
    RECORD_TYPE_DELEGATION = 0,
    RECORD_TYPE_UNBONDING = 1,
    RECORD_TYPE_REDEMPTION = 2,
    UNRECOGNIZED = -1
}
export declare const OverwritableRecordTypeSDKType: typeof OverwritableRecordType;
export declare const OverwritableRecordTypeAmino: typeof OverwritableRecordType;
export declare function overwritableRecordTypeFromJSON(object: any): OverwritableRecordType;
export declare function overwritableRecordTypeToJSON(object: OverwritableRecordType): string;
/**
 * Deprecated: Liquid stakes should be handled in stakeibc
 * LiquidStake
 */
/** @deprecated */
export interface MsgLiquidStake {
    staker: string;
    nativeAmount: string;
}
export interface MsgLiquidStakeProtoMsg {
    typeUrl: "/stride.staketia.MsgLiquidStake";
    value: Uint8Array;
}
/**
 * Deprecated: Liquid stakes should be handled in stakeibc
 * LiquidStake
 */
/** @deprecated */
export interface MsgLiquidStakeAmino {
    staker?: string;
    native_amount?: string;
}
export interface MsgLiquidStakeAminoMsg {
    type: "staketia/MsgLiquidStake";
    value: MsgLiquidStakeAmino;
}
/**
 * Deprecated: Liquid stakes should be handled in stakeibc
 * LiquidStake
 */
/** @deprecated */
export interface MsgLiquidStakeSDKType {
    staker: string;
    native_amount: string;
}
/** @deprecated */
export interface MsgLiquidStakeResponse {
    stToken: Coin;
}
export interface MsgLiquidStakeResponseProtoMsg {
    typeUrl: "/stride.staketia.MsgLiquidStakeResponse";
    value: Uint8Array;
}
/** @deprecated */
export interface MsgLiquidStakeResponseAmino {
    st_token?: CoinAmino;
}
export interface MsgLiquidStakeResponseAminoMsg {
    type: "/stride.staketia.MsgLiquidStakeResponse";
    value: MsgLiquidStakeResponseAmino;
}
/** @deprecated */
export interface MsgLiquidStakeResponseSDKType {
    st_token: CoinSDKType;
}
/** RedeemStake */
export interface MsgRedeemStake {
    redeemer: string;
    stTokenAmount: string;
    /**
     * The receiver field is a celestia address
     * It is only used in the case where the redemption spills over to stakeibc
     */
    receiver: string;
}
export interface MsgRedeemStakeProtoMsg {
    typeUrl: "/stride.staketia.MsgRedeemStake";
    value: Uint8Array;
}
/** RedeemStake */
export interface MsgRedeemStakeAmino {
    redeemer?: string;
    st_token_amount?: string;
    /**
     * The receiver field is a celestia address
     * It is only used in the case where the redemption spills over to stakeibc
     */
    receiver?: string;
}
export interface MsgRedeemStakeAminoMsg {
    type: "staketia/MsgRedeemStake";
    value: MsgRedeemStakeAmino;
}
/** RedeemStake */
export interface MsgRedeemStakeSDKType {
    redeemer: string;
    st_token_amount: string;
    receiver: string;
}
export interface MsgRedeemStakeResponse {
    nativeToken: Coin;
}
export interface MsgRedeemStakeResponseProtoMsg {
    typeUrl: "/stride.staketia.MsgRedeemStakeResponse";
    value: Uint8Array;
}
export interface MsgRedeemStakeResponseAmino {
    native_token?: CoinAmino;
}
export interface MsgRedeemStakeResponseAminoMsg {
    type: "/stride.staketia.MsgRedeemStakeResponse";
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
    typeUrl: "/stride.staketia.MsgConfirmDelegation";
    value: Uint8Array;
}
/** ConfirmDelegation */
export interface MsgConfirmDelegationAmino {
    operator?: string;
    record_id?: string;
    tx_hash?: string;
}
export interface MsgConfirmDelegationAminoMsg {
    type: "staketia/MsgConfirmDelegation";
    value: MsgConfirmDelegationAmino;
}
/** ConfirmDelegation */
export interface MsgConfirmDelegationSDKType {
    operator: string;
    record_id: bigint;
    tx_hash: string;
}
export interface MsgConfirmDelegationResponse {
}
export interface MsgConfirmDelegationResponseProtoMsg {
    typeUrl: "/stride.staketia.MsgConfirmDelegationResponse";
    value: Uint8Array;
}
export interface MsgConfirmDelegationResponseAmino {
}
export interface MsgConfirmDelegationResponseAminoMsg {
    type: "/stride.staketia.MsgConfirmDelegationResponse";
    value: MsgConfirmDelegationResponseAmino;
}
export interface MsgConfirmDelegationResponseSDKType {
}
/** ConfirmUndelegation */
export interface MsgConfirmUndelegation {
    operator: string;
    recordId: bigint;
    txHash: string;
}
export interface MsgConfirmUndelegationProtoMsg {
    typeUrl: "/stride.staketia.MsgConfirmUndelegation";
    value: Uint8Array;
}
/** ConfirmUndelegation */
export interface MsgConfirmUndelegationAmino {
    operator?: string;
    record_id?: string;
    tx_hash?: string;
}
export interface MsgConfirmUndelegationAminoMsg {
    type: "staketia/MsgConfirmUndelegation";
    value: MsgConfirmUndelegationAmino;
}
/** ConfirmUndelegation */
export interface MsgConfirmUndelegationSDKType {
    operator: string;
    record_id: bigint;
    tx_hash: string;
}
export interface MsgConfirmUndelegationResponse {
}
export interface MsgConfirmUndelegationResponseProtoMsg {
    typeUrl: "/stride.staketia.MsgConfirmUndelegationResponse";
    value: Uint8Array;
}
export interface MsgConfirmUndelegationResponseAmino {
}
export interface MsgConfirmUndelegationResponseAminoMsg {
    type: "/stride.staketia.MsgConfirmUndelegationResponse";
    value: MsgConfirmUndelegationResponseAmino;
}
export interface MsgConfirmUndelegationResponseSDKType {
}
/** ConfirmUnbondedTokenSweep */
export interface MsgConfirmUnbondedTokenSweep {
    operator: string;
    recordId: bigint;
    txHash: string;
}
export interface MsgConfirmUnbondedTokenSweepProtoMsg {
    typeUrl: "/stride.staketia.MsgConfirmUnbondedTokenSweep";
    value: Uint8Array;
}
/** ConfirmUnbondedTokenSweep */
export interface MsgConfirmUnbondedTokenSweepAmino {
    operator?: string;
    record_id?: string;
    tx_hash?: string;
}
export interface MsgConfirmUnbondedTokenSweepAminoMsg {
    type: "staketia/MsgConfirmUnbondedTokenSweep";
    value: MsgConfirmUnbondedTokenSweepAmino;
}
/** ConfirmUnbondedTokenSweep */
export interface MsgConfirmUnbondedTokenSweepSDKType {
    operator: string;
    record_id: bigint;
    tx_hash: string;
}
export interface MsgConfirmUnbondedTokenSweepResponse {
}
export interface MsgConfirmUnbondedTokenSweepResponseProtoMsg {
    typeUrl: "/stride.staketia.MsgConfirmUnbondedTokenSweepResponse";
    value: Uint8Array;
}
export interface MsgConfirmUnbondedTokenSweepResponseAmino {
}
export interface MsgConfirmUnbondedTokenSweepResponseAminoMsg {
    type: "/stride.staketia.MsgConfirmUnbondedTokenSweepResponse";
    value: MsgConfirmUnbondedTokenSweepResponseAmino;
}
export interface MsgConfirmUnbondedTokenSweepResponseSDKType {
}
/** AdjustDelegatedBalance */
export interface MsgAdjustDelegatedBalance {
    operator: string;
    delegationOffset: string;
    validatorAddress: string;
}
export interface MsgAdjustDelegatedBalanceProtoMsg {
    typeUrl: "/stride.staketia.MsgAdjustDelegatedBalance";
    value: Uint8Array;
}
/** AdjustDelegatedBalance */
export interface MsgAdjustDelegatedBalanceAmino {
    operator?: string;
    delegation_offset?: string;
    validator_address?: string;
}
export interface MsgAdjustDelegatedBalanceAminoMsg {
    type: "staketia/MsgAdjustDelegatedBalance";
    value: MsgAdjustDelegatedBalanceAmino;
}
/** AdjustDelegatedBalance */
export interface MsgAdjustDelegatedBalanceSDKType {
    operator: string;
    delegation_offset: string;
    validator_address: string;
}
export interface MsgAdjustDelegatedBalanceResponse {
}
export interface MsgAdjustDelegatedBalanceResponseProtoMsg {
    typeUrl: "/stride.staketia.MsgAdjustDelegatedBalanceResponse";
    value: Uint8Array;
}
export interface MsgAdjustDelegatedBalanceResponseAmino {
}
export interface MsgAdjustDelegatedBalanceResponseAminoMsg {
    type: "/stride.staketia.MsgAdjustDelegatedBalanceResponse";
    value: MsgAdjustDelegatedBalanceResponseAmino;
}
export interface MsgAdjustDelegatedBalanceResponseSDKType {
}
/** UpdateInnerRedemptionRate */
export interface MsgUpdateInnerRedemptionRateBounds {
    creator: string;
    minInnerRedemptionRate: string;
    maxInnerRedemptionRate: string;
}
export interface MsgUpdateInnerRedemptionRateBoundsProtoMsg {
    typeUrl: "/stride.staketia.MsgUpdateInnerRedemptionRateBounds";
    value: Uint8Array;
}
/** UpdateInnerRedemptionRate */
export interface MsgUpdateInnerRedemptionRateBoundsAmino {
    creator?: string;
    min_inner_redemption_rate?: string;
    max_inner_redemption_rate?: string;
}
export interface MsgUpdateInnerRedemptionRateBoundsAminoMsg {
    type: "staketia/MsgUpdateRedemptionRateBounds";
    value: MsgUpdateInnerRedemptionRateBoundsAmino;
}
/** UpdateInnerRedemptionRate */
export interface MsgUpdateInnerRedemptionRateBoundsSDKType {
    creator: string;
    min_inner_redemption_rate: string;
    max_inner_redemption_rate: string;
}
export interface MsgUpdateInnerRedemptionRateBoundsResponse {
}
export interface MsgUpdateInnerRedemptionRateBoundsResponseProtoMsg {
    typeUrl: "/stride.staketia.MsgUpdateInnerRedemptionRateBoundsResponse";
    value: Uint8Array;
}
export interface MsgUpdateInnerRedemptionRateBoundsResponseAmino {
}
export interface MsgUpdateInnerRedemptionRateBoundsResponseAminoMsg {
    type: "/stride.staketia.MsgUpdateInnerRedemptionRateBoundsResponse";
    value: MsgUpdateInnerRedemptionRateBoundsResponseAmino;
}
export interface MsgUpdateInnerRedemptionRateBoundsResponseSDKType {
}
/** ResumeHostZone */
export interface MsgResumeHostZone {
    creator: string;
}
export interface MsgResumeHostZoneProtoMsg {
    typeUrl: "/stride.staketia.MsgResumeHostZone";
    value: Uint8Array;
}
/** ResumeHostZone */
export interface MsgResumeHostZoneAmino {
    creator?: string;
}
export interface MsgResumeHostZoneAminoMsg {
    type: "staketia/MsgResumeHostZone";
    value: MsgResumeHostZoneAmino;
}
/** ResumeHostZone */
export interface MsgResumeHostZoneSDKType {
    creator: string;
}
export interface MsgResumeHostZoneResponse {
}
export interface MsgResumeHostZoneResponseProtoMsg {
    typeUrl: "/stride.staketia.MsgResumeHostZoneResponse";
    value: Uint8Array;
}
export interface MsgResumeHostZoneResponseAmino {
}
export interface MsgResumeHostZoneResponseAminoMsg {
    type: "/stride.staketia.MsgResumeHostZoneResponse";
    value: MsgResumeHostZoneResponseAmino;
}
export interface MsgResumeHostZoneResponseSDKType {
}
/** RefreshRedemptionRate */
export interface MsgRefreshRedemptionRate {
    creator: string;
}
export interface MsgRefreshRedemptionRateProtoMsg {
    typeUrl: "/stride.staketia.MsgRefreshRedemptionRate";
    value: Uint8Array;
}
/** RefreshRedemptionRate */
export interface MsgRefreshRedemptionRateAmino {
    creator?: string;
}
export interface MsgRefreshRedemptionRateAminoMsg {
    type: "staketia/MsgRefreshRedemptionRate";
    value: MsgRefreshRedemptionRateAmino;
}
/** RefreshRedemptionRate */
export interface MsgRefreshRedemptionRateSDKType {
    creator: string;
}
export interface MsgRefreshRedemptionRateResponse {
}
export interface MsgRefreshRedemptionRateResponseProtoMsg {
    typeUrl: "/stride.staketia.MsgRefreshRedemptionRateResponse";
    value: Uint8Array;
}
export interface MsgRefreshRedemptionRateResponseAmino {
}
export interface MsgRefreshRedemptionRateResponseAminoMsg {
    type: "/stride.staketia.MsgRefreshRedemptionRateResponse";
    value: MsgRefreshRedemptionRateResponseAmino;
}
export interface MsgRefreshRedemptionRateResponseSDKType {
}
/** OverwriteDelegationRecord */
export interface MsgOverwriteDelegationRecord {
    creator: string;
    delegationRecord?: DelegationRecord;
}
export interface MsgOverwriteDelegationRecordProtoMsg {
    typeUrl: "/stride.staketia.MsgOverwriteDelegationRecord";
    value: Uint8Array;
}
/** OverwriteDelegationRecord */
export interface MsgOverwriteDelegationRecordAmino {
    creator?: string;
    delegation_record?: DelegationRecordAmino;
}
export interface MsgOverwriteDelegationRecordAminoMsg {
    type: "staketia/MsgOverwriteDelegationRecord";
    value: MsgOverwriteDelegationRecordAmino;
}
/** OverwriteDelegationRecord */
export interface MsgOverwriteDelegationRecordSDKType {
    creator: string;
    delegation_record?: DelegationRecordSDKType;
}
export interface MsgOverwriteDelegationRecordResponse {
}
export interface MsgOverwriteDelegationRecordResponseProtoMsg {
    typeUrl: "/stride.staketia.MsgOverwriteDelegationRecordResponse";
    value: Uint8Array;
}
export interface MsgOverwriteDelegationRecordResponseAmino {
}
export interface MsgOverwriteDelegationRecordResponseAminoMsg {
    type: "/stride.staketia.MsgOverwriteDelegationRecordResponse";
    value: MsgOverwriteDelegationRecordResponseAmino;
}
export interface MsgOverwriteDelegationRecordResponseSDKType {
}
/** OverwriteUnbondingRecord */
export interface MsgOverwriteUnbondingRecord {
    creator: string;
    unbondingRecord?: UnbondingRecord;
}
export interface MsgOverwriteUnbondingRecordProtoMsg {
    typeUrl: "/stride.staketia.MsgOverwriteUnbondingRecord";
    value: Uint8Array;
}
/** OverwriteUnbondingRecord */
export interface MsgOverwriteUnbondingRecordAmino {
    creator?: string;
    unbonding_record?: UnbondingRecordAmino;
}
export interface MsgOverwriteUnbondingRecordAminoMsg {
    type: "staketia/MsgOverwriteUnbondingRecord";
    value: MsgOverwriteUnbondingRecordAmino;
}
/** OverwriteUnbondingRecord */
export interface MsgOverwriteUnbondingRecordSDKType {
    creator: string;
    unbonding_record?: UnbondingRecordSDKType;
}
export interface MsgOverwriteUnbondingRecordResponse {
}
export interface MsgOverwriteUnbondingRecordResponseProtoMsg {
    typeUrl: "/stride.staketia.MsgOverwriteUnbondingRecordResponse";
    value: Uint8Array;
}
export interface MsgOverwriteUnbondingRecordResponseAmino {
}
export interface MsgOverwriteUnbondingRecordResponseAminoMsg {
    type: "/stride.staketia.MsgOverwriteUnbondingRecordResponse";
    value: MsgOverwriteUnbondingRecordResponseAmino;
}
export interface MsgOverwriteUnbondingRecordResponseSDKType {
}
/** OverwriteRedemptionRecord */
export interface MsgOverwriteRedemptionRecord {
    creator: string;
    redemptionRecord?: RedemptionRecord;
}
export interface MsgOverwriteRedemptionRecordProtoMsg {
    typeUrl: "/stride.staketia.MsgOverwriteRedemptionRecord";
    value: Uint8Array;
}
/** OverwriteRedemptionRecord */
export interface MsgOverwriteRedemptionRecordAmino {
    creator?: string;
    redemption_record?: RedemptionRecordAmino;
}
export interface MsgOverwriteRedemptionRecordAminoMsg {
    type: "staketia/MsgOverwriteRedemptionRecord";
    value: MsgOverwriteRedemptionRecordAmino;
}
/** OverwriteRedemptionRecord */
export interface MsgOverwriteRedemptionRecordSDKType {
    creator: string;
    redemption_record?: RedemptionRecordSDKType;
}
export interface MsgOverwriteRedemptionRecordResponse {
}
export interface MsgOverwriteRedemptionRecordResponseProtoMsg {
    typeUrl: "/stride.staketia.MsgOverwriteRedemptionRecordResponse";
    value: Uint8Array;
}
export interface MsgOverwriteRedemptionRecordResponseAmino {
}
export interface MsgOverwriteRedemptionRecordResponseAminoMsg {
    type: "/stride.staketia.MsgOverwriteRedemptionRecordResponse";
    value: MsgOverwriteRedemptionRecordResponseAmino;
}
export interface MsgOverwriteRedemptionRecordResponseSDKType {
}
/** SetOperatorAddress */
export interface MsgSetOperatorAddress {
    signer: string;
    operator: string;
}
export interface MsgSetOperatorAddressProtoMsg {
    typeUrl: "/stride.staketia.MsgSetOperatorAddress";
    value: Uint8Array;
}
/** SetOperatorAddress */
export interface MsgSetOperatorAddressAmino {
    signer?: string;
    operator?: string;
}
export interface MsgSetOperatorAddressAminoMsg {
    type: "staketia/MsgSetOperatorAddress";
    value: MsgSetOperatorAddressAmino;
}
/** SetOperatorAddress */
export interface MsgSetOperatorAddressSDKType {
    signer: string;
    operator: string;
}
export interface MsgSetOperatorAddressResponse {
}
export interface MsgSetOperatorAddressResponseProtoMsg {
    typeUrl: "/stride.staketia.MsgSetOperatorAddressResponse";
    value: Uint8Array;
}
export interface MsgSetOperatorAddressResponseAmino {
}
export interface MsgSetOperatorAddressResponseAminoMsg {
    type: "/stride.staketia.MsgSetOperatorAddressResponse";
    value: MsgSetOperatorAddressResponseAmino;
}
export interface MsgSetOperatorAddressResponseSDKType {
}
export declare const MsgLiquidStake: {
    typeUrl: string;
    encode(message: MsgLiquidStake, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgLiquidStake;
    fromPartial(object: Partial<MsgLiquidStake>): MsgLiquidStake;
    fromAmino(object: MsgLiquidStakeAmino): MsgLiquidStake;
    toAmino(message: MsgLiquidStake): MsgLiquidStakeAmino;
    fromAminoMsg(object: MsgLiquidStakeAminoMsg): MsgLiquidStake;
    toAminoMsg(message: MsgLiquidStake): MsgLiquidStakeAminoMsg;
    fromProtoMsg(message: MsgLiquidStakeProtoMsg): MsgLiquidStake;
    toProto(message: MsgLiquidStake): Uint8Array;
    toProtoMsg(message: MsgLiquidStake): MsgLiquidStakeProtoMsg;
};
export declare const MsgLiquidStakeResponse: {
    typeUrl: string;
    encode(message: MsgLiquidStakeResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgLiquidStakeResponse;
    fromPartial(object: Partial<MsgLiquidStakeResponse>): MsgLiquidStakeResponse;
    fromAmino(object: MsgLiquidStakeResponseAmino): MsgLiquidStakeResponse;
    toAmino(message: MsgLiquidStakeResponse): MsgLiquidStakeResponseAmino;
    fromAminoMsg(object: MsgLiquidStakeResponseAminoMsg): MsgLiquidStakeResponse;
    fromProtoMsg(message: MsgLiquidStakeResponseProtoMsg): MsgLiquidStakeResponse;
    toProto(message: MsgLiquidStakeResponse): Uint8Array;
    toProtoMsg(message: MsgLiquidStakeResponse): MsgLiquidStakeResponseProtoMsg;
};
export declare const MsgRedeemStake: {
    typeUrl: string;
    encode(message: MsgRedeemStake, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgRedeemStake;
    fromPartial(object: Partial<MsgRedeemStake>): MsgRedeemStake;
    fromAmino(object: MsgRedeemStakeAmino): MsgRedeemStake;
    toAmino(message: MsgRedeemStake): MsgRedeemStakeAmino;
    fromAminoMsg(object: MsgRedeemStakeAminoMsg): MsgRedeemStake;
    toAminoMsg(message: MsgRedeemStake): MsgRedeemStakeAminoMsg;
    fromProtoMsg(message: MsgRedeemStakeProtoMsg): MsgRedeemStake;
    toProto(message: MsgRedeemStake): Uint8Array;
    toProtoMsg(message: MsgRedeemStake): MsgRedeemStakeProtoMsg;
};
export declare const MsgRedeemStakeResponse: {
    typeUrl: string;
    encode(message: MsgRedeemStakeResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgRedeemStakeResponse;
    fromPartial(object: Partial<MsgRedeemStakeResponse>): MsgRedeemStakeResponse;
    fromAmino(object: MsgRedeemStakeResponseAmino): MsgRedeemStakeResponse;
    toAmino(message: MsgRedeemStakeResponse): MsgRedeemStakeResponseAmino;
    fromAminoMsg(object: MsgRedeemStakeResponseAminoMsg): MsgRedeemStakeResponse;
    fromProtoMsg(message: MsgRedeemStakeResponseProtoMsg): MsgRedeemStakeResponse;
    toProto(message: MsgRedeemStakeResponse): Uint8Array;
    toProtoMsg(message: MsgRedeemStakeResponse): MsgRedeemStakeResponseProtoMsg;
};
export declare const MsgConfirmDelegation: {
    typeUrl: string;
    encode(message: MsgConfirmDelegation, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgConfirmDelegation;
    fromPartial(object: Partial<MsgConfirmDelegation>): MsgConfirmDelegation;
    fromAmino(object: MsgConfirmDelegationAmino): MsgConfirmDelegation;
    toAmino(message: MsgConfirmDelegation): MsgConfirmDelegationAmino;
    fromAminoMsg(object: MsgConfirmDelegationAminoMsg): MsgConfirmDelegation;
    toAminoMsg(message: MsgConfirmDelegation): MsgConfirmDelegationAminoMsg;
    fromProtoMsg(message: MsgConfirmDelegationProtoMsg): MsgConfirmDelegation;
    toProto(message: MsgConfirmDelegation): Uint8Array;
    toProtoMsg(message: MsgConfirmDelegation): MsgConfirmDelegationProtoMsg;
};
export declare const MsgConfirmDelegationResponse: {
    typeUrl: string;
    encode(_: MsgConfirmDelegationResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgConfirmDelegationResponse;
    fromPartial(_: Partial<MsgConfirmDelegationResponse>): MsgConfirmDelegationResponse;
    fromAmino(_: MsgConfirmDelegationResponseAmino): MsgConfirmDelegationResponse;
    toAmino(_: MsgConfirmDelegationResponse): MsgConfirmDelegationResponseAmino;
    fromAminoMsg(object: MsgConfirmDelegationResponseAminoMsg): MsgConfirmDelegationResponse;
    fromProtoMsg(message: MsgConfirmDelegationResponseProtoMsg): MsgConfirmDelegationResponse;
    toProto(message: MsgConfirmDelegationResponse): Uint8Array;
    toProtoMsg(message: MsgConfirmDelegationResponse): MsgConfirmDelegationResponseProtoMsg;
};
export declare const MsgConfirmUndelegation: {
    typeUrl: string;
    encode(message: MsgConfirmUndelegation, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgConfirmUndelegation;
    fromPartial(object: Partial<MsgConfirmUndelegation>): MsgConfirmUndelegation;
    fromAmino(object: MsgConfirmUndelegationAmino): MsgConfirmUndelegation;
    toAmino(message: MsgConfirmUndelegation): MsgConfirmUndelegationAmino;
    fromAminoMsg(object: MsgConfirmUndelegationAminoMsg): MsgConfirmUndelegation;
    toAminoMsg(message: MsgConfirmUndelegation): MsgConfirmUndelegationAminoMsg;
    fromProtoMsg(message: MsgConfirmUndelegationProtoMsg): MsgConfirmUndelegation;
    toProto(message: MsgConfirmUndelegation): Uint8Array;
    toProtoMsg(message: MsgConfirmUndelegation): MsgConfirmUndelegationProtoMsg;
};
export declare const MsgConfirmUndelegationResponse: {
    typeUrl: string;
    encode(_: MsgConfirmUndelegationResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgConfirmUndelegationResponse;
    fromPartial(_: Partial<MsgConfirmUndelegationResponse>): MsgConfirmUndelegationResponse;
    fromAmino(_: MsgConfirmUndelegationResponseAmino): MsgConfirmUndelegationResponse;
    toAmino(_: MsgConfirmUndelegationResponse): MsgConfirmUndelegationResponseAmino;
    fromAminoMsg(object: MsgConfirmUndelegationResponseAminoMsg): MsgConfirmUndelegationResponse;
    fromProtoMsg(message: MsgConfirmUndelegationResponseProtoMsg): MsgConfirmUndelegationResponse;
    toProto(message: MsgConfirmUndelegationResponse): Uint8Array;
    toProtoMsg(message: MsgConfirmUndelegationResponse): MsgConfirmUndelegationResponseProtoMsg;
};
export declare const MsgConfirmUnbondedTokenSweep: {
    typeUrl: string;
    encode(message: MsgConfirmUnbondedTokenSweep, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgConfirmUnbondedTokenSweep;
    fromPartial(object: Partial<MsgConfirmUnbondedTokenSweep>): MsgConfirmUnbondedTokenSweep;
    fromAmino(object: MsgConfirmUnbondedTokenSweepAmino): MsgConfirmUnbondedTokenSweep;
    toAmino(message: MsgConfirmUnbondedTokenSweep): MsgConfirmUnbondedTokenSweepAmino;
    fromAminoMsg(object: MsgConfirmUnbondedTokenSweepAminoMsg): MsgConfirmUnbondedTokenSweep;
    toAminoMsg(message: MsgConfirmUnbondedTokenSweep): MsgConfirmUnbondedTokenSweepAminoMsg;
    fromProtoMsg(message: MsgConfirmUnbondedTokenSweepProtoMsg): MsgConfirmUnbondedTokenSweep;
    toProto(message: MsgConfirmUnbondedTokenSweep): Uint8Array;
    toProtoMsg(message: MsgConfirmUnbondedTokenSweep): MsgConfirmUnbondedTokenSweepProtoMsg;
};
export declare const MsgConfirmUnbondedTokenSweepResponse: {
    typeUrl: string;
    encode(_: MsgConfirmUnbondedTokenSweepResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgConfirmUnbondedTokenSweepResponse;
    fromPartial(_: Partial<MsgConfirmUnbondedTokenSweepResponse>): MsgConfirmUnbondedTokenSweepResponse;
    fromAmino(_: MsgConfirmUnbondedTokenSweepResponseAmino): MsgConfirmUnbondedTokenSweepResponse;
    toAmino(_: MsgConfirmUnbondedTokenSweepResponse): MsgConfirmUnbondedTokenSweepResponseAmino;
    fromAminoMsg(object: MsgConfirmUnbondedTokenSweepResponseAminoMsg): MsgConfirmUnbondedTokenSweepResponse;
    fromProtoMsg(message: MsgConfirmUnbondedTokenSweepResponseProtoMsg): MsgConfirmUnbondedTokenSweepResponse;
    toProto(message: MsgConfirmUnbondedTokenSweepResponse): Uint8Array;
    toProtoMsg(message: MsgConfirmUnbondedTokenSweepResponse): MsgConfirmUnbondedTokenSweepResponseProtoMsg;
};
export declare const MsgAdjustDelegatedBalance: {
    typeUrl: string;
    encode(message: MsgAdjustDelegatedBalance, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgAdjustDelegatedBalance;
    fromPartial(object: Partial<MsgAdjustDelegatedBalance>): MsgAdjustDelegatedBalance;
    fromAmino(object: MsgAdjustDelegatedBalanceAmino): MsgAdjustDelegatedBalance;
    toAmino(message: MsgAdjustDelegatedBalance): MsgAdjustDelegatedBalanceAmino;
    fromAminoMsg(object: MsgAdjustDelegatedBalanceAminoMsg): MsgAdjustDelegatedBalance;
    toAminoMsg(message: MsgAdjustDelegatedBalance): MsgAdjustDelegatedBalanceAminoMsg;
    fromProtoMsg(message: MsgAdjustDelegatedBalanceProtoMsg): MsgAdjustDelegatedBalance;
    toProto(message: MsgAdjustDelegatedBalance): Uint8Array;
    toProtoMsg(message: MsgAdjustDelegatedBalance): MsgAdjustDelegatedBalanceProtoMsg;
};
export declare const MsgAdjustDelegatedBalanceResponse: {
    typeUrl: string;
    encode(_: MsgAdjustDelegatedBalanceResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgAdjustDelegatedBalanceResponse;
    fromPartial(_: Partial<MsgAdjustDelegatedBalanceResponse>): MsgAdjustDelegatedBalanceResponse;
    fromAmino(_: MsgAdjustDelegatedBalanceResponseAmino): MsgAdjustDelegatedBalanceResponse;
    toAmino(_: MsgAdjustDelegatedBalanceResponse): MsgAdjustDelegatedBalanceResponseAmino;
    fromAminoMsg(object: MsgAdjustDelegatedBalanceResponseAminoMsg): MsgAdjustDelegatedBalanceResponse;
    fromProtoMsg(message: MsgAdjustDelegatedBalanceResponseProtoMsg): MsgAdjustDelegatedBalanceResponse;
    toProto(message: MsgAdjustDelegatedBalanceResponse): Uint8Array;
    toProtoMsg(message: MsgAdjustDelegatedBalanceResponse): MsgAdjustDelegatedBalanceResponseProtoMsg;
};
export declare const MsgUpdateInnerRedemptionRateBounds: {
    typeUrl: string;
    encode(message: MsgUpdateInnerRedemptionRateBounds, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateInnerRedemptionRateBounds;
    fromPartial(object: Partial<MsgUpdateInnerRedemptionRateBounds>): MsgUpdateInnerRedemptionRateBounds;
    fromAmino(object: MsgUpdateInnerRedemptionRateBoundsAmino): MsgUpdateInnerRedemptionRateBounds;
    toAmino(message: MsgUpdateInnerRedemptionRateBounds): MsgUpdateInnerRedemptionRateBoundsAmino;
    fromAminoMsg(object: MsgUpdateInnerRedemptionRateBoundsAminoMsg): MsgUpdateInnerRedemptionRateBounds;
    toAminoMsg(message: MsgUpdateInnerRedemptionRateBounds): MsgUpdateInnerRedemptionRateBoundsAminoMsg;
    fromProtoMsg(message: MsgUpdateInnerRedemptionRateBoundsProtoMsg): MsgUpdateInnerRedemptionRateBounds;
    toProto(message: MsgUpdateInnerRedemptionRateBounds): Uint8Array;
    toProtoMsg(message: MsgUpdateInnerRedemptionRateBounds): MsgUpdateInnerRedemptionRateBoundsProtoMsg;
};
export declare const MsgUpdateInnerRedemptionRateBoundsResponse: {
    typeUrl: string;
    encode(_: MsgUpdateInnerRedemptionRateBoundsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateInnerRedemptionRateBoundsResponse;
    fromPartial(_: Partial<MsgUpdateInnerRedemptionRateBoundsResponse>): MsgUpdateInnerRedemptionRateBoundsResponse;
    fromAmino(_: MsgUpdateInnerRedemptionRateBoundsResponseAmino): MsgUpdateInnerRedemptionRateBoundsResponse;
    toAmino(_: MsgUpdateInnerRedemptionRateBoundsResponse): MsgUpdateInnerRedemptionRateBoundsResponseAmino;
    fromAminoMsg(object: MsgUpdateInnerRedemptionRateBoundsResponseAminoMsg): MsgUpdateInnerRedemptionRateBoundsResponse;
    fromProtoMsg(message: MsgUpdateInnerRedemptionRateBoundsResponseProtoMsg): MsgUpdateInnerRedemptionRateBoundsResponse;
    toProto(message: MsgUpdateInnerRedemptionRateBoundsResponse): Uint8Array;
    toProtoMsg(message: MsgUpdateInnerRedemptionRateBoundsResponse): MsgUpdateInnerRedemptionRateBoundsResponseProtoMsg;
};
export declare const MsgResumeHostZone: {
    typeUrl: string;
    encode(message: MsgResumeHostZone, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgResumeHostZone;
    fromPartial(object: Partial<MsgResumeHostZone>): MsgResumeHostZone;
    fromAmino(object: MsgResumeHostZoneAmino): MsgResumeHostZone;
    toAmino(message: MsgResumeHostZone): MsgResumeHostZoneAmino;
    fromAminoMsg(object: MsgResumeHostZoneAminoMsg): MsgResumeHostZone;
    toAminoMsg(message: MsgResumeHostZone): MsgResumeHostZoneAminoMsg;
    fromProtoMsg(message: MsgResumeHostZoneProtoMsg): MsgResumeHostZone;
    toProto(message: MsgResumeHostZone): Uint8Array;
    toProtoMsg(message: MsgResumeHostZone): MsgResumeHostZoneProtoMsg;
};
export declare const MsgResumeHostZoneResponse: {
    typeUrl: string;
    encode(_: MsgResumeHostZoneResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgResumeHostZoneResponse;
    fromPartial(_: Partial<MsgResumeHostZoneResponse>): MsgResumeHostZoneResponse;
    fromAmino(_: MsgResumeHostZoneResponseAmino): MsgResumeHostZoneResponse;
    toAmino(_: MsgResumeHostZoneResponse): MsgResumeHostZoneResponseAmino;
    fromAminoMsg(object: MsgResumeHostZoneResponseAminoMsg): MsgResumeHostZoneResponse;
    fromProtoMsg(message: MsgResumeHostZoneResponseProtoMsg): MsgResumeHostZoneResponse;
    toProto(message: MsgResumeHostZoneResponse): Uint8Array;
    toProtoMsg(message: MsgResumeHostZoneResponse): MsgResumeHostZoneResponseProtoMsg;
};
export declare const MsgRefreshRedemptionRate: {
    typeUrl: string;
    encode(message: MsgRefreshRedemptionRate, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgRefreshRedemptionRate;
    fromPartial(object: Partial<MsgRefreshRedemptionRate>): MsgRefreshRedemptionRate;
    fromAmino(object: MsgRefreshRedemptionRateAmino): MsgRefreshRedemptionRate;
    toAmino(message: MsgRefreshRedemptionRate): MsgRefreshRedemptionRateAmino;
    fromAminoMsg(object: MsgRefreshRedemptionRateAminoMsg): MsgRefreshRedemptionRate;
    toAminoMsg(message: MsgRefreshRedemptionRate): MsgRefreshRedemptionRateAminoMsg;
    fromProtoMsg(message: MsgRefreshRedemptionRateProtoMsg): MsgRefreshRedemptionRate;
    toProto(message: MsgRefreshRedemptionRate): Uint8Array;
    toProtoMsg(message: MsgRefreshRedemptionRate): MsgRefreshRedemptionRateProtoMsg;
};
export declare const MsgRefreshRedemptionRateResponse: {
    typeUrl: string;
    encode(_: MsgRefreshRedemptionRateResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgRefreshRedemptionRateResponse;
    fromPartial(_: Partial<MsgRefreshRedemptionRateResponse>): MsgRefreshRedemptionRateResponse;
    fromAmino(_: MsgRefreshRedemptionRateResponseAmino): MsgRefreshRedemptionRateResponse;
    toAmino(_: MsgRefreshRedemptionRateResponse): MsgRefreshRedemptionRateResponseAmino;
    fromAminoMsg(object: MsgRefreshRedemptionRateResponseAminoMsg): MsgRefreshRedemptionRateResponse;
    fromProtoMsg(message: MsgRefreshRedemptionRateResponseProtoMsg): MsgRefreshRedemptionRateResponse;
    toProto(message: MsgRefreshRedemptionRateResponse): Uint8Array;
    toProtoMsg(message: MsgRefreshRedemptionRateResponse): MsgRefreshRedemptionRateResponseProtoMsg;
};
export declare const MsgOverwriteDelegationRecord: {
    typeUrl: string;
    encode(message: MsgOverwriteDelegationRecord, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgOverwriteDelegationRecord;
    fromPartial(object: Partial<MsgOverwriteDelegationRecord>): MsgOverwriteDelegationRecord;
    fromAmino(object: MsgOverwriteDelegationRecordAmino): MsgOverwriteDelegationRecord;
    toAmino(message: MsgOverwriteDelegationRecord): MsgOverwriteDelegationRecordAmino;
    fromAminoMsg(object: MsgOverwriteDelegationRecordAminoMsg): MsgOverwriteDelegationRecord;
    toAminoMsg(message: MsgOverwriteDelegationRecord): MsgOverwriteDelegationRecordAminoMsg;
    fromProtoMsg(message: MsgOverwriteDelegationRecordProtoMsg): MsgOverwriteDelegationRecord;
    toProto(message: MsgOverwriteDelegationRecord): Uint8Array;
    toProtoMsg(message: MsgOverwriteDelegationRecord): MsgOverwriteDelegationRecordProtoMsg;
};
export declare const MsgOverwriteDelegationRecordResponse: {
    typeUrl: string;
    encode(_: MsgOverwriteDelegationRecordResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgOverwriteDelegationRecordResponse;
    fromPartial(_: Partial<MsgOverwriteDelegationRecordResponse>): MsgOverwriteDelegationRecordResponse;
    fromAmino(_: MsgOverwriteDelegationRecordResponseAmino): MsgOverwriteDelegationRecordResponse;
    toAmino(_: MsgOverwriteDelegationRecordResponse): MsgOverwriteDelegationRecordResponseAmino;
    fromAminoMsg(object: MsgOverwriteDelegationRecordResponseAminoMsg): MsgOverwriteDelegationRecordResponse;
    fromProtoMsg(message: MsgOverwriteDelegationRecordResponseProtoMsg): MsgOverwriteDelegationRecordResponse;
    toProto(message: MsgOverwriteDelegationRecordResponse): Uint8Array;
    toProtoMsg(message: MsgOverwriteDelegationRecordResponse): MsgOverwriteDelegationRecordResponseProtoMsg;
};
export declare const MsgOverwriteUnbondingRecord: {
    typeUrl: string;
    encode(message: MsgOverwriteUnbondingRecord, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgOverwriteUnbondingRecord;
    fromPartial(object: Partial<MsgOverwriteUnbondingRecord>): MsgOverwriteUnbondingRecord;
    fromAmino(object: MsgOverwriteUnbondingRecordAmino): MsgOverwriteUnbondingRecord;
    toAmino(message: MsgOverwriteUnbondingRecord): MsgOverwriteUnbondingRecordAmino;
    fromAminoMsg(object: MsgOverwriteUnbondingRecordAminoMsg): MsgOverwriteUnbondingRecord;
    toAminoMsg(message: MsgOverwriteUnbondingRecord): MsgOverwriteUnbondingRecordAminoMsg;
    fromProtoMsg(message: MsgOverwriteUnbondingRecordProtoMsg): MsgOverwriteUnbondingRecord;
    toProto(message: MsgOverwriteUnbondingRecord): Uint8Array;
    toProtoMsg(message: MsgOverwriteUnbondingRecord): MsgOverwriteUnbondingRecordProtoMsg;
};
export declare const MsgOverwriteUnbondingRecordResponse: {
    typeUrl: string;
    encode(_: MsgOverwriteUnbondingRecordResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgOverwriteUnbondingRecordResponse;
    fromPartial(_: Partial<MsgOverwriteUnbondingRecordResponse>): MsgOverwriteUnbondingRecordResponse;
    fromAmino(_: MsgOverwriteUnbondingRecordResponseAmino): MsgOverwriteUnbondingRecordResponse;
    toAmino(_: MsgOverwriteUnbondingRecordResponse): MsgOverwriteUnbondingRecordResponseAmino;
    fromAminoMsg(object: MsgOverwriteUnbondingRecordResponseAminoMsg): MsgOverwriteUnbondingRecordResponse;
    fromProtoMsg(message: MsgOverwriteUnbondingRecordResponseProtoMsg): MsgOverwriteUnbondingRecordResponse;
    toProto(message: MsgOverwriteUnbondingRecordResponse): Uint8Array;
    toProtoMsg(message: MsgOverwriteUnbondingRecordResponse): MsgOverwriteUnbondingRecordResponseProtoMsg;
};
export declare const MsgOverwriteRedemptionRecord: {
    typeUrl: string;
    encode(message: MsgOverwriteRedemptionRecord, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgOverwriteRedemptionRecord;
    fromPartial(object: Partial<MsgOverwriteRedemptionRecord>): MsgOverwriteRedemptionRecord;
    fromAmino(object: MsgOverwriteRedemptionRecordAmino): MsgOverwriteRedemptionRecord;
    toAmino(message: MsgOverwriteRedemptionRecord): MsgOverwriteRedemptionRecordAmino;
    fromAminoMsg(object: MsgOverwriteRedemptionRecordAminoMsg): MsgOverwriteRedemptionRecord;
    toAminoMsg(message: MsgOverwriteRedemptionRecord): MsgOverwriteRedemptionRecordAminoMsg;
    fromProtoMsg(message: MsgOverwriteRedemptionRecordProtoMsg): MsgOverwriteRedemptionRecord;
    toProto(message: MsgOverwriteRedemptionRecord): Uint8Array;
    toProtoMsg(message: MsgOverwriteRedemptionRecord): MsgOverwriteRedemptionRecordProtoMsg;
};
export declare const MsgOverwriteRedemptionRecordResponse: {
    typeUrl: string;
    encode(_: MsgOverwriteRedemptionRecordResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgOverwriteRedemptionRecordResponse;
    fromPartial(_: Partial<MsgOverwriteRedemptionRecordResponse>): MsgOverwriteRedemptionRecordResponse;
    fromAmino(_: MsgOverwriteRedemptionRecordResponseAmino): MsgOverwriteRedemptionRecordResponse;
    toAmino(_: MsgOverwriteRedemptionRecordResponse): MsgOverwriteRedemptionRecordResponseAmino;
    fromAminoMsg(object: MsgOverwriteRedemptionRecordResponseAminoMsg): MsgOverwriteRedemptionRecordResponse;
    fromProtoMsg(message: MsgOverwriteRedemptionRecordResponseProtoMsg): MsgOverwriteRedemptionRecordResponse;
    toProto(message: MsgOverwriteRedemptionRecordResponse): Uint8Array;
    toProtoMsg(message: MsgOverwriteRedemptionRecordResponse): MsgOverwriteRedemptionRecordResponseProtoMsg;
};
export declare const MsgSetOperatorAddress: {
    typeUrl: string;
    encode(message: MsgSetOperatorAddress, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgSetOperatorAddress;
    fromPartial(object: Partial<MsgSetOperatorAddress>): MsgSetOperatorAddress;
    fromAmino(object: MsgSetOperatorAddressAmino): MsgSetOperatorAddress;
    toAmino(message: MsgSetOperatorAddress): MsgSetOperatorAddressAmino;
    fromAminoMsg(object: MsgSetOperatorAddressAminoMsg): MsgSetOperatorAddress;
    toAminoMsg(message: MsgSetOperatorAddress): MsgSetOperatorAddressAminoMsg;
    fromProtoMsg(message: MsgSetOperatorAddressProtoMsg): MsgSetOperatorAddress;
    toProto(message: MsgSetOperatorAddress): Uint8Array;
    toProtoMsg(message: MsgSetOperatorAddress): MsgSetOperatorAddressProtoMsg;
};
export declare const MsgSetOperatorAddressResponse: {
    typeUrl: string;
    encode(_: MsgSetOperatorAddressResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgSetOperatorAddressResponse;
    fromPartial(_: Partial<MsgSetOperatorAddressResponse>): MsgSetOperatorAddressResponse;
    fromAmino(_: MsgSetOperatorAddressResponseAmino): MsgSetOperatorAddressResponse;
    toAmino(_: MsgSetOperatorAddressResponse): MsgSetOperatorAddressResponseAmino;
    fromAminoMsg(object: MsgSetOperatorAddressResponseAminoMsg): MsgSetOperatorAddressResponse;
    fromProtoMsg(message: MsgSetOperatorAddressResponseProtoMsg): MsgSetOperatorAddressResponse;
    toProto(message: MsgSetOperatorAddressResponse): Uint8Array;
    toProtoMsg(message: MsgSetOperatorAddressResponse): MsgSetOperatorAddressResponseProtoMsg;
};
