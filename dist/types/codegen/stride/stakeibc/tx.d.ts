import { Validator, ValidatorAmino, ValidatorSDKType } from "./validator";
import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../binary";
export declare enum AuthzPermissionChange {
    /** GRANT - Grant the address trade permissions */
    GRANT = 0,
    /** REVOKE - Revoke trade permissions from the address */
    REVOKE = 1,
    UNRECOGNIZED = -1
}
export declare const AuthzPermissionChangeSDKType: typeof AuthzPermissionChange;
export declare const AuthzPermissionChangeAmino: typeof AuthzPermissionChange;
export declare function authzPermissionChangeFromJSON(object: any): AuthzPermissionChange;
export declare function authzPermissionChangeToJSON(object: AuthzPermissionChange): string;
export interface MsgUpdateInnerRedemptionRateBounds {
    creator: string;
    chainId: string;
    minInnerRedemptionRate: string;
    maxInnerRedemptionRate: string;
}
export interface MsgUpdateInnerRedemptionRateBoundsProtoMsg {
    typeUrl: "/stride.stakeibc.MsgUpdateInnerRedemptionRateBounds";
    value: Uint8Array;
}
/**
 * @name MsgUpdateInnerRedemptionRateBoundsAmino
 * @package stride.stakeibc
 * @see proto type: stride.stakeibc.MsgUpdateInnerRedemptionRateBounds
 */
export interface MsgUpdateInnerRedemptionRateBoundsAmino {
    creator?: string;
    chain_id?: string;
    min_inner_redemption_rate?: string;
    max_inner_redemption_rate?: string;
}
export interface MsgUpdateInnerRedemptionRateBoundsAminoMsg {
    type: "stakeibc/MsgUpdateRedemptionRateBounds";
    value: MsgUpdateInnerRedemptionRateBoundsAmino;
}
export interface MsgUpdateInnerRedemptionRateBoundsSDKType {
    creator: string;
    chain_id: string;
    min_inner_redemption_rate: string;
    max_inner_redemption_rate: string;
}
export interface MsgUpdateInnerRedemptionRateBoundsResponse {
}
export interface MsgUpdateInnerRedemptionRateBoundsResponseProtoMsg {
    typeUrl: "/stride.stakeibc.MsgUpdateInnerRedemptionRateBoundsResponse";
    value: Uint8Array;
}
/**
 * @name MsgUpdateInnerRedemptionRateBoundsResponseAmino
 * @package stride.stakeibc
 * @see proto type: stride.stakeibc.MsgUpdateInnerRedemptionRateBoundsResponse
 */
export interface MsgUpdateInnerRedemptionRateBoundsResponseAmino {
}
export interface MsgUpdateInnerRedemptionRateBoundsResponseAminoMsg {
    type: "/stride.stakeibc.MsgUpdateInnerRedemptionRateBoundsResponse";
    value: MsgUpdateInnerRedemptionRateBoundsResponseAmino;
}
export interface MsgUpdateInnerRedemptionRateBoundsResponseSDKType {
}
export interface MsgLiquidStake {
    creator: string;
    amount: string;
    hostDenom: string;
}
export interface MsgLiquidStakeProtoMsg {
    typeUrl: "/stride.stakeibc.MsgLiquidStake";
    value: Uint8Array;
}
/**
 * @name MsgLiquidStakeAmino
 * @package stride.stakeibc
 * @see proto type: stride.stakeibc.MsgLiquidStake
 */
export interface MsgLiquidStakeAmino {
    creator?: string;
    amount?: string;
    host_denom?: string;
}
export interface MsgLiquidStakeAminoMsg {
    type: "stakeibc/MsgLiquidStake";
    value: MsgLiquidStakeAmino;
}
export interface MsgLiquidStakeSDKType {
    creator: string;
    amount: string;
    host_denom: string;
}
export interface MsgLiquidStakeResponse {
    stToken: Coin;
}
export interface MsgLiquidStakeResponseProtoMsg {
    typeUrl: "/stride.stakeibc.MsgLiquidStakeResponse";
    value: Uint8Array;
}
/**
 * @name MsgLiquidStakeResponseAmino
 * @package stride.stakeibc
 * @see proto type: stride.stakeibc.MsgLiquidStakeResponse
 */
export interface MsgLiquidStakeResponseAmino {
    st_token?: CoinAmino;
}
export interface MsgLiquidStakeResponseAminoMsg {
    type: "/stride.stakeibc.MsgLiquidStakeResponse";
    value: MsgLiquidStakeResponseAmino;
}
export interface MsgLiquidStakeResponseSDKType {
    st_token: CoinSDKType;
}
export interface MsgLSMLiquidStake {
    creator: string;
    amount: string;
    lsmTokenIbcDenom: string;
}
export interface MsgLSMLiquidStakeProtoMsg {
    typeUrl: "/stride.stakeibc.MsgLSMLiquidStake";
    value: Uint8Array;
}
/**
 * @name MsgLSMLiquidStakeAmino
 * @package stride.stakeibc
 * @see proto type: stride.stakeibc.MsgLSMLiquidStake
 */
export interface MsgLSMLiquidStakeAmino {
    creator?: string;
    amount?: string;
    lsm_token_ibc_denom?: string;
}
export interface MsgLSMLiquidStakeAminoMsg {
    type: "stakeibc/MsgLSMLiquidStake";
    value: MsgLSMLiquidStakeAmino;
}
export interface MsgLSMLiquidStakeSDKType {
    creator: string;
    amount: string;
    lsm_token_ibc_denom: string;
}
export interface MsgLSMLiquidStakeResponse {
    transactionComplete: boolean;
}
export interface MsgLSMLiquidStakeResponseProtoMsg {
    typeUrl: "/stride.stakeibc.MsgLSMLiquidStakeResponse";
    value: Uint8Array;
}
/**
 * @name MsgLSMLiquidStakeResponseAmino
 * @package stride.stakeibc
 * @see proto type: stride.stakeibc.MsgLSMLiquidStakeResponse
 */
export interface MsgLSMLiquidStakeResponseAmino {
    transaction_complete?: boolean;
}
export interface MsgLSMLiquidStakeResponseAminoMsg {
    type: "/stride.stakeibc.MsgLSMLiquidStakeResponse";
    value: MsgLSMLiquidStakeResponseAmino;
}
export interface MsgLSMLiquidStakeResponseSDKType {
    transaction_complete: boolean;
}
export interface MsgClearBalance {
    creator: string;
    chainId: string;
    amount: string;
    channel: string;
}
export interface MsgClearBalanceProtoMsg {
    typeUrl: "/stride.stakeibc.MsgClearBalance";
    value: Uint8Array;
}
/**
 * @name MsgClearBalanceAmino
 * @package stride.stakeibc
 * @see proto type: stride.stakeibc.MsgClearBalance
 */
export interface MsgClearBalanceAmino {
    creator?: string;
    chain_id?: string;
    amount?: string;
    channel?: string;
}
export interface MsgClearBalanceAminoMsg {
    type: "stakeibc/MsgClearBalance";
    value: MsgClearBalanceAmino;
}
export interface MsgClearBalanceSDKType {
    creator: string;
    chain_id: string;
    amount: string;
    channel: string;
}
export interface MsgClearBalanceResponse {
}
export interface MsgClearBalanceResponseProtoMsg {
    typeUrl: "/stride.stakeibc.MsgClearBalanceResponse";
    value: Uint8Array;
}
/**
 * @name MsgClearBalanceResponseAmino
 * @package stride.stakeibc
 * @see proto type: stride.stakeibc.MsgClearBalanceResponse
 */
export interface MsgClearBalanceResponseAmino {
}
export interface MsgClearBalanceResponseAminoMsg {
    type: "/stride.stakeibc.MsgClearBalanceResponse";
    value: MsgClearBalanceResponseAmino;
}
export interface MsgClearBalanceResponseSDKType {
}
export interface MsgRedeemStake {
    creator: string;
    amount: string;
    hostZone: string;
    receiver: string;
}
export interface MsgRedeemStakeProtoMsg {
    typeUrl: "/stride.stakeibc.MsgRedeemStake";
    value: Uint8Array;
}
/**
 * @name MsgRedeemStakeAmino
 * @package stride.stakeibc
 * @see proto type: stride.stakeibc.MsgRedeemStake
 */
export interface MsgRedeemStakeAmino {
    creator?: string;
    amount?: string;
    host_zone?: string;
    receiver?: string;
}
export interface MsgRedeemStakeAminoMsg {
    type: "stakeibc/MsgRedeemStake";
    value: MsgRedeemStakeAmino;
}
export interface MsgRedeemStakeSDKType {
    creator: string;
    amount: string;
    host_zone: string;
    receiver: string;
}
export interface MsgRedeemStakeResponse {
}
export interface MsgRedeemStakeResponseProtoMsg {
    typeUrl: "/stride.stakeibc.MsgRedeemStakeResponse";
    value: Uint8Array;
}
/**
 * @name MsgRedeemStakeResponseAmino
 * @package stride.stakeibc
 * @see proto type: stride.stakeibc.MsgRedeemStakeResponse
 */
export interface MsgRedeemStakeResponseAmino {
}
export interface MsgRedeemStakeResponseAminoMsg {
    type: "/stride.stakeibc.MsgRedeemStakeResponse";
    value: MsgRedeemStakeResponseAmino;
}
export interface MsgRedeemStakeResponseSDKType {
}
/** next: 15 */
export interface MsgRegisterHostZone {
    connectionId: string;
    bech32prefix: string;
    hostDenom: string;
    ibcDenom: string;
    creator: string;
    transferChannelId: string;
    unbondingPeriod: bigint;
    minRedemptionRate: string;
    maxRedemptionRate: string;
    lsmLiquidStakeEnabled: boolean;
    communityPoolTreasuryAddress: string;
    maxMessagesPerIcaTx: bigint;
}
export interface MsgRegisterHostZoneProtoMsg {
    typeUrl: "/stride.stakeibc.MsgRegisterHostZone";
    value: Uint8Array;
}
/**
 * next: 15
 * @name MsgRegisterHostZoneAmino
 * @package stride.stakeibc
 * @see proto type: stride.stakeibc.MsgRegisterHostZone
 */
export interface MsgRegisterHostZoneAmino {
    connection_id?: string;
    bech32prefix?: string;
    host_denom?: string;
    ibc_denom?: string;
    creator?: string;
    transfer_channel_id?: string;
    unbonding_period?: string;
    min_redemption_rate?: string;
    max_redemption_rate?: string;
    lsm_liquid_stake_enabled?: boolean;
    community_pool_treasury_address?: string;
    max_messages_per_ica_tx?: string;
}
export interface MsgRegisterHostZoneAminoMsg {
    type: "stakeibc/MsgRegisterHostZone";
    value: MsgRegisterHostZoneAmino;
}
/** next: 15 */
export interface MsgRegisterHostZoneSDKType {
    connection_id: string;
    bech32prefix: string;
    host_denom: string;
    ibc_denom: string;
    creator: string;
    transfer_channel_id: string;
    unbonding_period: bigint;
    min_redemption_rate: string;
    max_redemption_rate: string;
    lsm_liquid_stake_enabled: boolean;
    community_pool_treasury_address: string;
    max_messages_per_ica_tx: bigint;
}
export interface MsgRegisterHostZoneResponse {
}
export interface MsgRegisterHostZoneResponseProtoMsg {
    typeUrl: "/stride.stakeibc.MsgRegisterHostZoneResponse";
    value: Uint8Array;
}
/**
 * @name MsgRegisterHostZoneResponseAmino
 * @package stride.stakeibc
 * @see proto type: stride.stakeibc.MsgRegisterHostZoneResponse
 */
export interface MsgRegisterHostZoneResponseAmino {
}
export interface MsgRegisterHostZoneResponseAminoMsg {
    type: "/stride.stakeibc.MsgRegisterHostZoneResponse";
    value: MsgRegisterHostZoneResponseAmino;
}
export interface MsgRegisterHostZoneResponseSDKType {
}
export interface MsgClaimUndelegatedTokens {
    creator: string;
    /** UserUnbondingRecords are keyed on {chain_id}.{epoch}.{receiver} */
    hostZoneId: string;
    epoch: bigint;
    receiver: string;
}
export interface MsgClaimUndelegatedTokensProtoMsg {
    typeUrl: "/stride.stakeibc.MsgClaimUndelegatedTokens";
    value: Uint8Array;
}
/**
 * @name MsgClaimUndelegatedTokensAmino
 * @package stride.stakeibc
 * @see proto type: stride.stakeibc.MsgClaimUndelegatedTokens
 */
export interface MsgClaimUndelegatedTokensAmino {
    creator?: string;
    /**
     * UserUnbondingRecords are keyed on {chain_id}.{epoch}.{receiver}
     */
    host_zone_id?: string;
    epoch?: string;
    receiver?: string;
}
export interface MsgClaimUndelegatedTokensAminoMsg {
    type: "stakeibc/MsgClaimUndelegatedTokens";
    value: MsgClaimUndelegatedTokensAmino;
}
export interface MsgClaimUndelegatedTokensSDKType {
    creator: string;
    host_zone_id: string;
    epoch: bigint;
    receiver: string;
}
export interface MsgClaimUndelegatedTokensResponse {
}
export interface MsgClaimUndelegatedTokensResponseProtoMsg {
    typeUrl: "/stride.stakeibc.MsgClaimUndelegatedTokensResponse";
    value: Uint8Array;
}
/**
 * @name MsgClaimUndelegatedTokensResponseAmino
 * @package stride.stakeibc
 * @see proto type: stride.stakeibc.MsgClaimUndelegatedTokensResponse
 */
export interface MsgClaimUndelegatedTokensResponseAmino {
}
export interface MsgClaimUndelegatedTokensResponseAminoMsg {
    type: "/stride.stakeibc.MsgClaimUndelegatedTokensResponse";
    value: MsgClaimUndelegatedTokensResponseAmino;
}
export interface MsgClaimUndelegatedTokensResponseSDKType {
}
export interface MsgRebalanceValidators {
    creator: string;
    hostZone: string;
    numRebalance: bigint;
}
export interface MsgRebalanceValidatorsProtoMsg {
    typeUrl: "/stride.stakeibc.MsgRebalanceValidators";
    value: Uint8Array;
}
/**
 * @name MsgRebalanceValidatorsAmino
 * @package stride.stakeibc
 * @see proto type: stride.stakeibc.MsgRebalanceValidators
 */
export interface MsgRebalanceValidatorsAmino {
    creator?: string;
    host_zone?: string;
    num_rebalance?: string;
}
export interface MsgRebalanceValidatorsAminoMsg {
    type: "stakeibc/MsgRebalanceValidators";
    value: MsgRebalanceValidatorsAmino;
}
export interface MsgRebalanceValidatorsSDKType {
    creator: string;
    host_zone: string;
    num_rebalance: bigint;
}
export interface MsgRebalanceValidatorsResponse {
}
export interface MsgRebalanceValidatorsResponseProtoMsg {
    typeUrl: "/stride.stakeibc.MsgRebalanceValidatorsResponse";
    value: Uint8Array;
}
/**
 * @name MsgRebalanceValidatorsResponseAmino
 * @package stride.stakeibc
 * @see proto type: stride.stakeibc.MsgRebalanceValidatorsResponse
 */
export interface MsgRebalanceValidatorsResponseAmino {
}
export interface MsgRebalanceValidatorsResponseAminoMsg {
    type: "/stride.stakeibc.MsgRebalanceValidatorsResponse";
    value: MsgRebalanceValidatorsResponseAmino;
}
export interface MsgRebalanceValidatorsResponseSDKType {
}
export interface MsgAddValidators {
    creator: string;
    hostZone: string;
    validators: Validator[];
}
export interface MsgAddValidatorsProtoMsg {
    typeUrl: "/stride.stakeibc.MsgAddValidators";
    value: Uint8Array;
}
/**
 * @name MsgAddValidatorsAmino
 * @package stride.stakeibc
 * @see proto type: stride.stakeibc.MsgAddValidators
 */
export interface MsgAddValidatorsAmino {
    creator?: string;
    host_zone?: string;
    validators?: ValidatorAmino[];
}
export interface MsgAddValidatorsAminoMsg {
    type: "stakeibc/MsgAddValidators";
    value: MsgAddValidatorsAmino;
}
export interface MsgAddValidatorsSDKType {
    creator: string;
    host_zone: string;
    validators: ValidatorSDKType[];
}
export interface MsgAddValidatorsResponse {
}
export interface MsgAddValidatorsResponseProtoMsg {
    typeUrl: "/stride.stakeibc.MsgAddValidatorsResponse";
    value: Uint8Array;
}
/**
 * @name MsgAddValidatorsResponseAmino
 * @package stride.stakeibc
 * @see proto type: stride.stakeibc.MsgAddValidatorsResponse
 */
export interface MsgAddValidatorsResponseAmino {
}
export interface MsgAddValidatorsResponseAminoMsg {
    type: "/stride.stakeibc.MsgAddValidatorsResponse";
    value: MsgAddValidatorsResponseAmino;
}
export interface MsgAddValidatorsResponseSDKType {
}
export interface ValidatorWeight {
    address: string;
    weight: bigint;
}
export interface ValidatorWeightProtoMsg {
    typeUrl: "/stride.stakeibc.ValidatorWeight";
    value: Uint8Array;
}
/**
 * @name ValidatorWeightAmino
 * @package stride.stakeibc
 * @see proto type: stride.stakeibc.ValidatorWeight
 */
export interface ValidatorWeightAmino {
    address?: string;
    weight?: string;
}
export interface ValidatorWeightAminoMsg {
    type: "/stride.stakeibc.ValidatorWeight";
    value: ValidatorWeightAmino;
}
export interface ValidatorWeightSDKType {
    address: string;
    weight: bigint;
}
export interface MsgChangeValidatorWeights {
    creator: string;
    hostZone: string;
    validatorWeights: ValidatorWeight[];
}
export interface MsgChangeValidatorWeightsProtoMsg {
    typeUrl: "/stride.stakeibc.MsgChangeValidatorWeights";
    value: Uint8Array;
}
/**
 * @name MsgChangeValidatorWeightsAmino
 * @package stride.stakeibc
 * @see proto type: stride.stakeibc.MsgChangeValidatorWeights
 */
export interface MsgChangeValidatorWeightsAmino {
    creator?: string;
    host_zone?: string;
    validator_weights?: ValidatorWeightAmino[];
}
export interface MsgChangeValidatorWeightsAminoMsg {
    type: "stakeibc/MsgChangeValidatorWeights";
    value: MsgChangeValidatorWeightsAmino;
}
export interface MsgChangeValidatorWeightsSDKType {
    creator: string;
    host_zone: string;
    validator_weights: ValidatorWeightSDKType[];
}
export interface MsgChangeValidatorWeightsResponse {
}
export interface MsgChangeValidatorWeightsResponseProtoMsg {
    typeUrl: "/stride.stakeibc.MsgChangeValidatorWeightsResponse";
    value: Uint8Array;
}
/**
 * @name MsgChangeValidatorWeightsResponseAmino
 * @package stride.stakeibc
 * @see proto type: stride.stakeibc.MsgChangeValidatorWeightsResponse
 */
export interface MsgChangeValidatorWeightsResponseAmino {
}
export interface MsgChangeValidatorWeightsResponseAminoMsg {
    type: "/stride.stakeibc.MsgChangeValidatorWeightsResponse";
    value: MsgChangeValidatorWeightsResponseAmino;
}
export interface MsgChangeValidatorWeightsResponseSDKType {
}
export interface MsgDeleteValidator {
    creator: string;
    hostZone: string;
    valAddr: string;
}
export interface MsgDeleteValidatorProtoMsg {
    typeUrl: "/stride.stakeibc.MsgDeleteValidator";
    value: Uint8Array;
}
/**
 * @name MsgDeleteValidatorAmino
 * @package stride.stakeibc
 * @see proto type: stride.stakeibc.MsgDeleteValidator
 */
export interface MsgDeleteValidatorAmino {
    creator?: string;
    host_zone?: string;
    val_addr?: string;
}
export interface MsgDeleteValidatorAminoMsg {
    type: "stakeibc/MsgDeleteValidator";
    value: MsgDeleteValidatorAmino;
}
export interface MsgDeleteValidatorSDKType {
    creator: string;
    host_zone: string;
    val_addr: string;
}
export interface MsgDeleteValidatorResponse {
}
export interface MsgDeleteValidatorResponseProtoMsg {
    typeUrl: "/stride.stakeibc.MsgDeleteValidatorResponse";
    value: Uint8Array;
}
/**
 * @name MsgDeleteValidatorResponseAmino
 * @package stride.stakeibc
 * @see proto type: stride.stakeibc.MsgDeleteValidatorResponse
 */
export interface MsgDeleteValidatorResponseAmino {
}
export interface MsgDeleteValidatorResponseAminoMsg {
    type: "/stride.stakeibc.MsgDeleteValidatorResponse";
    value: MsgDeleteValidatorResponseAmino;
}
export interface MsgDeleteValidatorResponseSDKType {
}
export interface MsgRestoreInterchainAccount {
    creator: string;
    chainId: string;
    connectionId: string;
    accountOwner: string;
}
export interface MsgRestoreInterchainAccountProtoMsg {
    typeUrl: "/stride.stakeibc.MsgRestoreInterchainAccount";
    value: Uint8Array;
}
/**
 * @name MsgRestoreInterchainAccountAmino
 * @package stride.stakeibc
 * @see proto type: stride.stakeibc.MsgRestoreInterchainAccount
 */
export interface MsgRestoreInterchainAccountAmino {
    creator?: string;
    chain_id?: string;
    connection_id?: string;
    account_owner?: string;
}
export interface MsgRestoreInterchainAccountAminoMsg {
    type: "stakeibc/MsgRestoreInterchainAcco";
    value: MsgRestoreInterchainAccountAmino;
}
export interface MsgRestoreInterchainAccountSDKType {
    creator: string;
    chain_id: string;
    connection_id: string;
    account_owner: string;
}
export interface MsgRestoreInterchainAccountResponse {
}
export interface MsgRestoreInterchainAccountResponseProtoMsg {
    typeUrl: "/stride.stakeibc.MsgRestoreInterchainAccountResponse";
    value: Uint8Array;
}
/**
 * @name MsgRestoreInterchainAccountResponseAmino
 * @package stride.stakeibc
 * @see proto type: stride.stakeibc.MsgRestoreInterchainAccountResponse
 */
export interface MsgRestoreInterchainAccountResponseAmino {
}
export interface MsgRestoreInterchainAccountResponseAminoMsg {
    type: "/stride.stakeibc.MsgRestoreInterchainAccountResponse";
    value: MsgRestoreInterchainAccountResponseAmino;
}
export interface MsgRestoreInterchainAccountResponseSDKType {
}
export interface MsgCloseDelegationChannel {
    creator: string;
    chainId: string;
}
export interface MsgCloseDelegationChannelProtoMsg {
    typeUrl: "/stride.stakeibc.MsgCloseDelegationChannel";
    value: Uint8Array;
}
/**
 * @name MsgCloseDelegationChannelAmino
 * @package stride.stakeibc
 * @see proto type: stride.stakeibc.MsgCloseDelegationChannel
 */
export interface MsgCloseDelegationChannelAmino {
    creator?: string;
    chain_id?: string;
}
export interface MsgCloseDelegationChannelAminoMsg {
    type: "stakeibc/MsgCloseDelegationChanne";
    value: MsgCloseDelegationChannelAmino;
}
export interface MsgCloseDelegationChannelSDKType {
    creator: string;
    chain_id: string;
}
export interface MsgCloseDelegationChannelResponse {
}
export interface MsgCloseDelegationChannelResponseProtoMsg {
    typeUrl: "/stride.stakeibc.MsgCloseDelegationChannelResponse";
    value: Uint8Array;
}
/**
 * @name MsgCloseDelegationChannelResponseAmino
 * @package stride.stakeibc
 * @see proto type: stride.stakeibc.MsgCloseDelegationChannelResponse
 */
export interface MsgCloseDelegationChannelResponseAmino {
}
export interface MsgCloseDelegationChannelResponseAminoMsg {
    type: "/stride.stakeibc.MsgCloseDelegationChannelResponse";
    value: MsgCloseDelegationChannelResponseAmino;
}
export interface MsgCloseDelegationChannelResponseSDKType {
}
export interface MsgUpdateValidatorSharesExchRate {
    creator: string;
    chainId: string;
    valoper: string;
}
export interface MsgUpdateValidatorSharesExchRateProtoMsg {
    typeUrl: "/stride.stakeibc.MsgUpdateValidatorSharesExchRate";
    value: Uint8Array;
}
/**
 * @name MsgUpdateValidatorSharesExchRateAmino
 * @package stride.stakeibc
 * @see proto type: stride.stakeibc.MsgUpdateValidatorSharesExchRate
 */
export interface MsgUpdateValidatorSharesExchRateAmino {
    creator?: string;
    chain_id?: string;
    valoper?: string;
}
export interface MsgUpdateValidatorSharesExchRateAminoMsg {
    type: "stakeibc/MsgUpdateValSharesExchRate";
    value: MsgUpdateValidatorSharesExchRateAmino;
}
export interface MsgUpdateValidatorSharesExchRateSDKType {
    creator: string;
    chain_id: string;
    valoper: string;
}
export interface MsgUpdateValidatorSharesExchRateResponse {
}
export interface MsgUpdateValidatorSharesExchRateResponseProtoMsg {
    typeUrl: "/stride.stakeibc.MsgUpdateValidatorSharesExchRateResponse";
    value: Uint8Array;
}
/**
 * @name MsgUpdateValidatorSharesExchRateResponseAmino
 * @package stride.stakeibc
 * @see proto type: stride.stakeibc.MsgUpdateValidatorSharesExchRateResponse
 */
export interface MsgUpdateValidatorSharesExchRateResponseAmino {
}
export interface MsgUpdateValidatorSharesExchRateResponseAminoMsg {
    type: "/stride.stakeibc.MsgUpdateValidatorSharesExchRateResponse";
    value: MsgUpdateValidatorSharesExchRateResponseAmino;
}
export interface MsgUpdateValidatorSharesExchRateResponseSDKType {
}
export interface MsgCalibrateDelegation {
    creator: string;
    chainId: string;
    valoper: string;
}
export interface MsgCalibrateDelegationProtoMsg {
    typeUrl: "/stride.stakeibc.MsgCalibrateDelegation";
    value: Uint8Array;
}
/**
 * @name MsgCalibrateDelegationAmino
 * @package stride.stakeibc
 * @see proto type: stride.stakeibc.MsgCalibrateDelegation
 */
export interface MsgCalibrateDelegationAmino {
    creator?: string;
    chain_id?: string;
    valoper?: string;
}
export interface MsgCalibrateDelegationAminoMsg {
    type: "stakeibc/MsgCalibrateDelegation";
    value: MsgCalibrateDelegationAmino;
}
export interface MsgCalibrateDelegationSDKType {
    creator: string;
    chain_id: string;
    valoper: string;
}
export interface MsgCalibrateDelegationResponse {
}
export interface MsgCalibrateDelegationResponseProtoMsg {
    typeUrl: "/stride.stakeibc.MsgCalibrateDelegationResponse";
    value: Uint8Array;
}
/**
 * @name MsgCalibrateDelegationResponseAmino
 * @package stride.stakeibc
 * @see proto type: stride.stakeibc.MsgCalibrateDelegationResponse
 */
export interface MsgCalibrateDelegationResponseAmino {
}
export interface MsgCalibrateDelegationResponseAminoMsg {
    type: "/stride.stakeibc.MsgCalibrateDelegationResponse";
    value: MsgCalibrateDelegationResponseAmino;
}
export interface MsgCalibrateDelegationResponseSDKType {
}
export interface MsgResumeHostZone {
    creator: string;
    chainId: string;
}
export interface MsgResumeHostZoneProtoMsg {
    typeUrl: "/stride.stakeibc.MsgResumeHostZone";
    value: Uint8Array;
}
/**
 * @name MsgResumeHostZoneAmino
 * @package stride.stakeibc
 * @see proto type: stride.stakeibc.MsgResumeHostZone
 */
export interface MsgResumeHostZoneAmino {
    creator?: string;
    chain_id?: string;
}
export interface MsgResumeHostZoneAminoMsg {
    type: "stakeibc/MsgResumeHostZone";
    value: MsgResumeHostZoneAmino;
}
export interface MsgResumeHostZoneSDKType {
    creator: string;
    chain_id: string;
}
export interface MsgResumeHostZoneResponse {
}
export interface MsgResumeHostZoneResponseProtoMsg {
    typeUrl: "/stride.stakeibc.MsgResumeHostZoneResponse";
    value: Uint8Array;
}
/**
 * @name MsgResumeHostZoneResponseAmino
 * @package stride.stakeibc
 * @see proto type: stride.stakeibc.MsgResumeHostZoneResponse
 */
export interface MsgResumeHostZoneResponseAmino {
}
export interface MsgResumeHostZoneResponseAminoMsg {
    type: "/stride.stakeibc.MsgResumeHostZoneResponse";
    value: MsgResumeHostZoneResponseAmino;
}
export interface MsgResumeHostZoneResponseSDKType {
}
/** Creates a new trade route */
export interface MsgCreateTradeRoute {
    /**
     * authority is the address that controls the module (defaults to x/gov unless
     * overwritten).
     */
    authority: string;
    /** The chain ID of the host zone */
    hostChainId: string;
    /** Connection IDs between stride and the other zones */
    strideToRewardConnectionId: string;
    strideToTradeConnectionId: string;
    /** Transfer channels between the host, reward, and trade zones */
    hostToRewardTransferChannelId: string;
    rewardToTradeTransferChannelId: string;
    tradeToHostTransferChannelId: string;
    /** ibc denom for the reward token on the host zone (e.g. ibc/usdc on dYdX) */
    rewardDenomOnHost: string;
    /** native denom of reward token on the reward zone (e.g. usdc on Noble) */
    rewardDenomOnReward: string;
    /** ibc denom of the reward token on the trade zone (e.g. ibc/usdc on Osmosis) */
    rewardDenomOnTrade: string;
    /** ibc denom of the host's token on the trade zone (e.g. ibc/dydx on Osmosis) */
    hostDenomOnTrade: string;
    /** the host zone's native denom (e.g. dydx on dYdX) */
    hostDenomOnHost: string;
    /**
     * Deprecated, the trades are now executed off-chain via authz
     *
     * The osmosis pool ID
     */
    /** @deprecated */
    poolId: bigint;
    /**
     * Deprecated, the trades are now executed off-chain via authz
     *
     * Threshold defining the percentage of tokens that could be lost in the trade
     * This captures both the loss from slippage and from a stale price on stride
     * "0.05" means the output from the trade can be no less than a 5% deviation
     * from the current value
     */
    /** @deprecated */
    maxAllowedSwapLossRate: string;
    /**
     * Deprecated, the trades are now executed off-chain via authz
     *
     * minimum amount of reward tokens to initate a swap
     * if not provided, defaults to 0
     */
    minSwapAmount: string;
    /**
     * Deprecated, the trades are now executed off-chain via authz
     *
     * maximum amount of reward tokens in a single swap
     * if not provided, defaults to 10e24
     */
    maxSwapAmount: string;
    /**
     * Minimum amount of reward token that must be accumulated before
     * the tokens are transferred to the trade ICA
     */
    minTransferAmount: string;
}
export interface MsgCreateTradeRouteProtoMsg {
    typeUrl: "/stride.stakeibc.MsgCreateTradeRoute";
    value: Uint8Array;
}
/**
 * Creates a new trade route
 * @name MsgCreateTradeRouteAmino
 * @package stride.stakeibc
 * @see proto type: stride.stakeibc.MsgCreateTradeRoute
 */
export interface MsgCreateTradeRouteAmino {
    /**
     * authority is the address that controls the module (defaults to x/gov unless
     * overwritten).
     */
    authority?: string;
    /**
     * The chain ID of the host zone
     */
    host_chain_id?: string;
    /**
     * Connection IDs between stride and the other zones
     */
    stride_to_reward_connection_id?: string;
    stride_to_trade_connection_id?: string;
    /**
     * Transfer channels between the host, reward, and trade zones
     */
    host_to_reward_transfer_channel_id?: string;
    reward_to_trade_transfer_channel_id?: string;
    trade_to_host_transfer_channel_id?: string;
    /**
     * ibc denom for the reward token on the host zone (e.g. ibc/usdc on dYdX)
     */
    reward_denom_on_host?: string;
    /**
     * native denom of reward token on the reward zone (e.g. usdc on Noble)
     */
    reward_denom_on_reward?: string;
    /**
     * ibc denom of the reward token on the trade zone (e.g. ibc/usdc on Osmosis)
     */
    reward_denom_on_trade?: string;
    /**
     * ibc denom of the host's token on the trade zone (e.g. ibc/dydx on Osmosis)
     */
    host_denom_on_trade?: string;
    /**
     * the host zone's native denom (e.g. dydx on dYdX)
     */
    host_denom_on_host?: string;
    /**
     * Deprecated, the trades are now executed off-chain via authz
     *
     * The osmosis pool ID
     * @deprecated
     */
    pool_id?: string;
    /**
     * Deprecated, the trades are now executed off-chain via authz
     *
     * Threshold defining the percentage of tokens that could be lost in the trade
     * This captures both the loss from slippage and from a stale price on stride
     * "0.05" means the output from the trade can be no less than a 5% deviation
     * from the current value
     * @deprecated
     */
    max_allowed_swap_loss_rate?: string;
    /**
     * Deprecated, the trades are now executed off-chain via authz
     *
     * minimum amount of reward tokens to initate a swap
     * if not provided, defaults to 0
     */
    min_swap_amount?: string;
    /**
     * Deprecated, the trades are now executed off-chain via authz
     *
     * maximum amount of reward tokens in a single swap
     * if not provided, defaults to 10e24
     */
    max_swap_amount?: string;
    /**
     * Minimum amount of reward token that must be accumulated before
     * the tokens are transferred to the trade ICA
     */
    min_transfer_amount?: string;
}
export interface MsgCreateTradeRouteAminoMsg {
    type: "stakeibc/MsgCreateTradeRoute";
    value: MsgCreateTradeRouteAmino;
}
/** Creates a new trade route */
export interface MsgCreateTradeRouteSDKType {
    authority: string;
    host_chain_id: string;
    stride_to_reward_connection_id: string;
    stride_to_trade_connection_id: string;
    host_to_reward_transfer_channel_id: string;
    reward_to_trade_transfer_channel_id: string;
    trade_to_host_transfer_channel_id: string;
    reward_denom_on_host: string;
    reward_denom_on_reward: string;
    reward_denom_on_trade: string;
    host_denom_on_trade: string;
    host_denom_on_host: string;
    /** @deprecated */
    pool_id: bigint;
    /** @deprecated */
    max_allowed_swap_loss_rate: string;
    min_swap_amount: string;
    max_swap_amount: string;
    min_transfer_amount: string;
}
export interface MsgCreateTradeRouteResponse {
}
export interface MsgCreateTradeRouteResponseProtoMsg {
    typeUrl: "/stride.stakeibc.MsgCreateTradeRouteResponse";
    value: Uint8Array;
}
/**
 * @name MsgCreateTradeRouteResponseAmino
 * @package stride.stakeibc
 * @see proto type: stride.stakeibc.MsgCreateTradeRouteResponse
 */
export interface MsgCreateTradeRouteResponseAmino {
}
export interface MsgCreateTradeRouteResponseAminoMsg {
    type: "/stride.stakeibc.MsgCreateTradeRouteResponse";
    value: MsgCreateTradeRouteResponseAmino;
}
export interface MsgCreateTradeRouteResponseSDKType {
}
/** Deletes a trade route */
export interface MsgDeleteTradeRoute {
    /**
     * authority is the address that controls the module (defaults to x/gov unless
     * overwritten).
     */
    authority: string;
    /** The reward denom of the route in it's native form (e.g. usdc) */
    rewardDenom: string;
    /** The host zone's denom in it's native form (e.g. dydx) */
    hostDenom: string;
}
export interface MsgDeleteTradeRouteProtoMsg {
    typeUrl: "/stride.stakeibc.MsgDeleteTradeRoute";
    value: Uint8Array;
}
/**
 * Deletes a trade route
 * @name MsgDeleteTradeRouteAmino
 * @package stride.stakeibc
 * @see proto type: stride.stakeibc.MsgDeleteTradeRoute
 */
export interface MsgDeleteTradeRouteAmino {
    /**
     * authority is the address that controls the module (defaults to x/gov unless
     * overwritten).
     */
    authority?: string;
    /**
     * The reward denom of the route in it's native form (e.g. usdc)
     */
    reward_denom?: string;
    /**
     * The host zone's denom in it's native form (e.g. dydx)
     */
    host_denom?: string;
}
export interface MsgDeleteTradeRouteAminoMsg {
    type: "stakeibc/MsgDeleteTradeRoute";
    value: MsgDeleteTradeRouteAmino;
}
/** Deletes a trade route */
export interface MsgDeleteTradeRouteSDKType {
    authority: string;
    reward_denom: string;
    host_denom: string;
}
export interface MsgDeleteTradeRouteResponse {
}
export interface MsgDeleteTradeRouteResponseProtoMsg {
    typeUrl: "/stride.stakeibc.MsgDeleteTradeRouteResponse";
    value: Uint8Array;
}
/**
 * @name MsgDeleteTradeRouteResponseAmino
 * @package stride.stakeibc
 * @see proto type: stride.stakeibc.MsgDeleteTradeRouteResponse
 */
export interface MsgDeleteTradeRouteResponseAmino {
}
export interface MsgDeleteTradeRouteResponseAminoMsg {
    type: "/stride.stakeibc.MsgDeleteTradeRouteResponse";
    value: MsgDeleteTradeRouteResponseAmino;
}
export interface MsgDeleteTradeRouteResponseSDKType {
}
/** Updates the config of a trade route */
export interface MsgUpdateTradeRoute {
    /**
     * authority is the address that controls the module (defaults to x/gov unless
     * overwritten).
     */
    authority: string;
    /** The reward denom of the route in it's native form (e.g. usdc) */
    rewardDenom: string;
    /** The host zone's denom in it's native form (e.g. dydx) */
    hostDenom: string;
    /**
     * Deprecated, the trades are now executed off-chain via authz
     *
     * The osmosis pool ID
     */
    /** @deprecated */
    poolId: bigint;
    /**
     * Deprecated, the trades are now executed off-chain via authz
     *
     * Threshold defining the percentage of tokens that could be lost in the trade
     * This captures both the loss from slippage and from a stale price on stride
     * "0.05" means the output from the trade can be no less than a 5% deviation
     * from the current value
     */
    /** @deprecated */
    maxAllowedSwapLossRate: string;
    /**
     * Deprecated, the trades are now executed off-chain via authz
     *
     * minimum amount of reward tokens to initate a swap
     * if not provided, defaults to 0
     */
    /** @deprecated */
    minSwapAmount: string;
    /**
     * Deprecated, the trades are now executed off-chain via authz
     *
     * maximum amount of reward tokens in a single swap
     * if not provided, defaults to 10e24
     */
    /** @deprecated */
    maxSwapAmount: string;
    /**
     * Minimum amount of reward token that must be accumulated before
     * the tokens are transferred to the trade ICA
     */
    minTransferAmount: string;
}
export interface MsgUpdateTradeRouteProtoMsg {
    typeUrl: "/stride.stakeibc.MsgUpdateTradeRoute";
    value: Uint8Array;
}
/**
 * Updates the config of a trade route
 * @name MsgUpdateTradeRouteAmino
 * @package stride.stakeibc
 * @see proto type: stride.stakeibc.MsgUpdateTradeRoute
 */
export interface MsgUpdateTradeRouteAmino {
    /**
     * authority is the address that controls the module (defaults to x/gov unless
     * overwritten).
     */
    authority?: string;
    /**
     * The reward denom of the route in it's native form (e.g. usdc)
     */
    reward_denom?: string;
    /**
     * The host zone's denom in it's native form (e.g. dydx)
     */
    host_denom?: string;
    /**
     * Deprecated, the trades are now executed off-chain via authz
     *
     * The osmosis pool ID
     * @deprecated
     */
    pool_id?: string;
    /**
     * Deprecated, the trades are now executed off-chain via authz
     *
     * Threshold defining the percentage of tokens that could be lost in the trade
     * This captures both the loss from slippage and from a stale price on stride
     * "0.05" means the output from the trade can be no less than a 5% deviation
     * from the current value
     * @deprecated
     */
    max_allowed_swap_loss_rate?: string;
    /**
     * Deprecated, the trades are now executed off-chain via authz
     *
     * minimum amount of reward tokens to initate a swap
     * if not provided, defaults to 0
     * @deprecated
     */
    min_swap_amount?: string;
    /**
     * Deprecated, the trades are now executed off-chain via authz
     *
     * maximum amount of reward tokens in a single swap
     * if not provided, defaults to 10e24
     * @deprecated
     */
    max_swap_amount?: string;
    /**
     * Minimum amount of reward token that must be accumulated before
     * the tokens are transferred to the trade ICA
     */
    min_transfer_amount?: string;
}
export interface MsgUpdateTradeRouteAminoMsg {
    type: "stakeibc/MsgUpdateTradeRoute";
    value: MsgUpdateTradeRouteAmino;
}
/** Updates the config of a trade route */
export interface MsgUpdateTradeRouteSDKType {
    authority: string;
    reward_denom: string;
    host_denom: string;
    /** @deprecated */
    pool_id: bigint;
    /** @deprecated */
    max_allowed_swap_loss_rate: string;
    /** @deprecated */
    min_swap_amount: string;
    /** @deprecated */
    max_swap_amount: string;
    min_transfer_amount: string;
}
export interface MsgUpdateTradeRouteResponse {
}
export interface MsgUpdateTradeRouteResponseProtoMsg {
    typeUrl: "/stride.stakeibc.MsgUpdateTradeRouteResponse";
    value: Uint8Array;
}
/**
 * @name MsgUpdateTradeRouteResponseAmino
 * @package stride.stakeibc
 * @see proto type: stride.stakeibc.MsgUpdateTradeRouteResponse
 */
export interface MsgUpdateTradeRouteResponseAmino {
}
export interface MsgUpdateTradeRouteResponseAminoMsg {
    type: "/stride.stakeibc.MsgUpdateTradeRouteResponse";
    value: MsgUpdateTradeRouteResponseAmino;
}
export interface MsgUpdateTradeRouteResponseSDKType {
}
/**
 * Registers or updates a community pool rebate by specifying the amount liquid
 * staked
 */
export interface MsgSetCommunityPoolRebate {
    /** Message signer (admin only) */
    creator: string;
    /**
     * Chain id of the chain whose community pool has a liquid staking rebate
     * arrangement with stride
     */
    chainId: string;
    /** Rebate percentage represented as a decimal (e.g. 0.2 for 20%) */
    rebateRate: string;
    /** Number of stTokens recieved by the community pool after liquid staking */
    liquidStakedStTokenAmount: string;
}
export interface MsgSetCommunityPoolRebateProtoMsg {
    typeUrl: "/stride.stakeibc.MsgSetCommunityPoolRebate";
    value: Uint8Array;
}
/**
 * Registers or updates a community pool rebate by specifying the amount liquid
 * staked
 * @name MsgSetCommunityPoolRebateAmino
 * @package stride.stakeibc
 * @see proto type: stride.stakeibc.MsgSetCommunityPoolRebate
 */
export interface MsgSetCommunityPoolRebateAmino {
    /**
     * Message signer (admin only)
     */
    creator?: string;
    /**
     * Chain id of the chain whose community pool has a liquid staking rebate
     * arrangement with stride
     */
    chain_id?: string;
    /**
     * Rebate percentage represented as a decimal (e.g. 0.2 for 20%)
     */
    rebate_rate?: string;
    /**
     * Number of stTokens recieved by the community pool after liquid staking
     */
    liquid_staked_st_token_amount?: string;
}
export interface MsgSetCommunityPoolRebateAminoMsg {
    type: "stakeibc/MsgSetCommunityPoolRebate";
    value: MsgSetCommunityPoolRebateAmino;
}
/**
 * Registers or updates a community pool rebate by specifying the amount liquid
 * staked
 */
export interface MsgSetCommunityPoolRebateSDKType {
    creator: string;
    chain_id: string;
    rebate_rate: string;
    liquid_staked_st_token_amount: string;
}
export interface MsgSetCommunityPoolRebateResponse {
}
export interface MsgSetCommunityPoolRebateResponseProtoMsg {
    typeUrl: "/stride.stakeibc.MsgSetCommunityPoolRebateResponse";
    value: Uint8Array;
}
/**
 * @name MsgSetCommunityPoolRebateResponseAmino
 * @package stride.stakeibc
 * @see proto type: stride.stakeibc.MsgSetCommunityPoolRebateResponse
 */
export interface MsgSetCommunityPoolRebateResponseAmino {
}
export interface MsgSetCommunityPoolRebateResponseAminoMsg {
    type: "/stride.stakeibc.MsgSetCommunityPoolRebateResponse";
    value: MsgSetCommunityPoolRebateResponseAmino;
}
export interface MsgSetCommunityPoolRebateResponseSDKType {
}
/** Grants or revokes trade permissions to a given address via authz */
export interface MsgToggleTradeController {
    /** Message signer (admin only) */
    creator: string;
    /** Chain ID of the trade account */
    chainId: string;
    /** Permission change (either grant or revoke) */
    permissionChange: AuthzPermissionChange;
    /** Address of trade operator */
    address: string;
    /** Option to grant/revoke the legacy osmosis swap message */
    legacy: boolean;
}
export interface MsgToggleTradeControllerProtoMsg {
    typeUrl: "/stride.stakeibc.MsgToggleTradeController";
    value: Uint8Array;
}
/**
 * Grants or revokes trade permissions to a given address via authz
 * @name MsgToggleTradeControllerAmino
 * @package stride.stakeibc
 * @see proto type: stride.stakeibc.MsgToggleTradeController
 */
export interface MsgToggleTradeControllerAmino {
    /**
     * Message signer (admin only)
     */
    creator?: string;
    /**
     * Chain ID of the trade account
     */
    chain_id?: string;
    /**
     * Permission change (either grant or revoke)
     */
    permission_change?: AuthzPermissionChange;
    /**
     * Address of trade operator
     */
    address?: string;
    /**
     * Option to grant/revoke the legacy osmosis swap message
     */
    legacy?: boolean;
}
export interface MsgToggleTradeControllerAminoMsg {
    type: "stakeibc/MsgToggleTradeController";
    value: MsgToggleTradeControllerAmino;
}
/** Grants or revokes trade permissions to a given address via authz */
export interface MsgToggleTradeControllerSDKType {
    creator: string;
    chain_id: string;
    permission_change: AuthzPermissionChange;
    address: string;
    legacy: boolean;
}
export interface MsgToggleTradeControllerResponse {
}
export interface MsgToggleTradeControllerResponseProtoMsg {
    typeUrl: "/stride.stakeibc.MsgToggleTradeControllerResponse";
    value: Uint8Array;
}
/**
 * @name MsgToggleTradeControllerResponseAmino
 * @package stride.stakeibc
 * @see proto type: stride.stakeibc.MsgToggleTradeControllerResponse
 */
export interface MsgToggleTradeControllerResponseAmino {
}
export interface MsgToggleTradeControllerResponseAminoMsg {
    type: "/stride.stakeibc.MsgToggleTradeControllerResponse";
    value: MsgToggleTradeControllerResponseAmino;
}
export interface MsgToggleTradeControllerResponseSDKType {
}
/** Updates host zone params */
export interface MsgUpdateHostZoneParams {
    /**
     * authority is the address that controls the module (defaults to x/gov unless
     * overwritten).
     */
    authority: string;
    /** Chain ID of the host zone */
    chainId: string;
    /** Max messages that can be sent in a single ICA message */
    maxMessagesPerIcaTx: bigint;
}
export interface MsgUpdateHostZoneParamsProtoMsg {
    typeUrl: "/stride.stakeibc.MsgUpdateHostZoneParams";
    value: Uint8Array;
}
/**
 * Updates host zone params
 * @name MsgUpdateHostZoneParamsAmino
 * @package stride.stakeibc
 * @see proto type: stride.stakeibc.MsgUpdateHostZoneParams
 */
export interface MsgUpdateHostZoneParamsAmino {
    /**
     * authority is the address that controls the module (defaults to x/gov unless
     * overwritten).
     */
    authority?: string;
    /**
     * Chain ID of the host zone
     */
    chain_id?: string;
    /**
     * Max messages that can be sent in a single ICA message
     */
    max_messages_per_ica_tx?: string;
}
export interface MsgUpdateHostZoneParamsAminoMsg {
    type: "stakeibc/MsgUpdateHostZoneParams";
    value: MsgUpdateHostZoneParamsAmino;
}
/** Updates host zone params */
export interface MsgUpdateHostZoneParamsSDKType {
    authority: string;
    chain_id: string;
    max_messages_per_ica_tx: bigint;
}
export interface MsgUpdateHostZoneParamsResponse {
}
export interface MsgUpdateHostZoneParamsResponseProtoMsg {
    typeUrl: "/stride.stakeibc.MsgUpdateHostZoneParamsResponse";
    value: Uint8Array;
}
/**
 * @name MsgUpdateHostZoneParamsResponseAmino
 * @package stride.stakeibc
 * @see proto type: stride.stakeibc.MsgUpdateHostZoneParamsResponse
 */
export interface MsgUpdateHostZoneParamsResponseAmino {
}
export interface MsgUpdateHostZoneParamsResponseAminoMsg {
    type: "/stride.stakeibc.MsgUpdateHostZoneParamsResponse";
    value: MsgUpdateHostZoneParamsResponseAmino;
}
export interface MsgUpdateHostZoneParamsResponseSDKType {
}
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
export declare const MsgLSMLiquidStake: {
    typeUrl: string;
    encode(message: MsgLSMLiquidStake, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgLSMLiquidStake;
    fromPartial(object: Partial<MsgLSMLiquidStake>): MsgLSMLiquidStake;
    fromAmino(object: MsgLSMLiquidStakeAmino): MsgLSMLiquidStake;
    toAmino(message: MsgLSMLiquidStake): MsgLSMLiquidStakeAmino;
    fromAminoMsg(object: MsgLSMLiquidStakeAminoMsg): MsgLSMLiquidStake;
    toAminoMsg(message: MsgLSMLiquidStake): MsgLSMLiquidStakeAminoMsg;
    fromProtoMsg(message: MsgLSMLiquidStakeProtoMsg): MsgLSMLiquidStake;
    toProto(message: MsgLSMLiquidStake): Uint8Array;
    toProtoMsg(message: MsgLSMLiquidStake): MsgLSMLiquidStakeProtoMsg;
};
export declare const MsgLSMLiquidStakeResponse: {
    typeUrl: string;
    encode(message: MsgLSMLiquidStakeResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgLSMLiquidStakeResponse;
    fromPartial(object: Partial<MsgLSMLiquidStakeResponse>): MsgLSMLiquidStakeResponse;
    fromAmino(object: MsgLSMLiquidStakeResponseAmino): MsgLSMLiquidStakeResponse;
    toAmino(message: MsgLSMLiquidStakeResponse): MsgLSMLiquidStakeResponseAmino;
    fromAminoMsg(object: MsgLSMLiquidStakeResponseAminoMsg): MsgLSMLiquidStakeResponse;
    fromProtoMsg(message: MsgLSMLiquidStakeResponseProtoMsg): MsgLSMLiquidStakeResponse;
    toProto(message: MsgLSMLiquidStakeResponse): Uint8Array;
    toProtoMsg(message: MsgLSMLiquidStakeResponse): MsgLSMLiquidStakeResponseProtoMsg;
};
export declare const MsgClearBalance: {
    typeUrl: string;
    encode(message: MsgClearBalance, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgClearBalance;
    fromPartial(object: Partial<MsgClearBalance>): MsgClearBalance;
    fromAmino(object: MsgClearBalanceAmino): MsgClearBalance;
    toAmino(message: MsgClearBalance): MsgClearBalanceAmino;
    fromAminoMsg(object: MsgClearBalanceAminoMsg): MsgClearBalance;
    toAminoMsg(message: MsgClearBalance): MsgClearBalanceAminoMsg;
    fromProtoMsg(message: MsgClearBalanceProtoMsg): MsgClearBalance;
    toProto(message: MsgClearBalance): Uint8Array;
    toProtoMsg(message: MsgClearBalance): MsgClearBalanceProtoMsg;
};
export declare const MsgClearBalanceResponse: {
    typeUrl: string;
    encode(_: MsgClearBalanceResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgClearBalanceResponse;
    fromPartial(_: Partial<MsgClearBalanceResponse>): MsgClearBalanceResponse;
    fromAmino(_: MsgClearBalanceResponseAmino): MsgClearBalanceResponse;
    toAmino(_: MsgClearBalanceResponse): MsgClearBalanceResponseAmino;
    fromAminoMsg(object: MsgClearBalanceResponseAminoMsg): MsgClearBalanceResponse;
    fromProtoMsg(message: MsgClearBalanceResponseProtoMsg): MsgClearBalanceResponse;
    toProto(message: MsgClearBalanceResponse): Uint8Array;
    toProtoMsg(message: MsgClearBalanceResponse): MsgClearBalanceResponseProtoMsg;
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
    encode(_: MsgRedeemStakeResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgRedeemStakeResponse;
    fromPartial(_: Partial<MsgRedeemStakeResponse>): MsgRedeemStakeResponse;
    fromAmino(_: MsgRedeemStakeResponseAmino): MsgRedeemStakeResponse;
    toAmino(_: MsgRedeemStakeResponse): MsgRedeemStakeResponseAmino;
    fromAminoMsg(object: MsgRedeemStakeResponseAminoMsg): MsgRedeemStakeResponse;
    fromProtoMsg(message: MsgRedeemStakeResponseProtoMsg): MsgRedeemStakeResponse;
    toProto(message: MsgRedeemStakeResponse): Uint8Array;
    toProtoMsg(message: MsgRedeemStakeResponse): MsgRedeemStakeResponseProtoMsg;
};
export declare const MsgRegisterHostZone: {
    typeUrl: string;
    encode(message: MsgRegisterHostZone, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgRegisterHostZone;
    fromPartial(object: Partial<MsgRegisterHostZone>): MsgRegisterHostZone;
    fromAmino(object: MsgRegisterHostZoneAmino): MsgRegisterHostZone;
    toAmino(message: MsgRegisterHostZone): MsgRegisterHostZoneAmino;
    fromAminoMsg(object: MsgRegisterHostZoneAminoMsg): MsgRegisterHostZone;
    toAminoMsg(message: MsgRegisterHostZone): MsgRegisterHostZoneAminoMsg;
    fromProtoMsg(message: MsgRegisterHostZoneProtoMsg): MsgRegisterHostZone;
    toProto(message: MsgRegisterHostZone): Uint8Array;
    toProtoMsg(message: MsgRegisterHostZone): MsgRegisterHostZoneProtoMsg;
};
export declare const MsgRegisterHostZoneResponse: {
    typeUrl: string;
    encode(_: MsgRegisterHostZoneResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgRegisterHostZoneResponse;
    fromPartial(_: Partial<MsgRegisterHostZoneResponse>): MsgRegisterHostZoneResponse;
    fromAmino(_: MsgRegisterHostZoneResponseAmino): MsgRegisterHostZoneResponse;
    toAmino(_: MsgRegisterHostZoneResponse): MsgRegisterHostZoneResponseAmino;
    fromAminoMsg(object: MsgRegisterHostZoneResponseAminoMsg): MsgRegisterHostZoneResponse;
    fromProtoMsg(message: MsgRegisterHostZoneResponseProtoMsg): MsgRegisterHostZoneResponse;
    toProto(message: MsgRegisterHostZoneResponse): Uint8Array;
    toProtoMsg(message: MsgRegisterHostZoneResponse): MsgRegisterHostZoneResponseProtoMsg;
};
export declare const MsgClaimUndelegatedTokens: {
    typeUrl: string;
    encode(message: MsgClaimUndelegatedTokens, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgClaimUndelegatedTokens;
    fromPartial(object: Partial<MsgClaimUndelegatedTokens>): MsgClaimUndelegatedTokens;
    fromAmino(object: MsgClaimUndelegatedTokensAmino): MsgClaimUndelegatedTokens;
    toAmino(message: MsgClaimUndelegatedTokens): MsgClaimUndelegatedTokensAmino;
    fromAminoMsg(object: MsgClaimUndelegatedTokensAminoMsg): MsgClaimUndelegatedTokens;
    toAminoMsg(message: MsgClaimUndelegatedTokens): MsgClaimUndelegatedTokensAminoMsg;
    fromProtoMsg(message: MsgClaimUndelegatedTokensProtoMsg): MsgClaimUndelegatedTokens;
    toProto(message: MsgClaimUndelegatedTokens): Uint8Array;
    toProtoMsg(message: MsgClaimUndelegatedTokens): MsgClaimUndelegatedTokensProtoMsg;
};
export declare const MsgClaimUndelegatedTokensResponse: {
    typeUrl: string;
    encode(_: MsgClaimUndelegatedTokensResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgClaimUndelegatedTokensResponse;
    fromPartial(_: Partial<MsgClaimUndelegatedTokensResponse>): MsgClaimUndelegatedTokensResponse;
    fromAmino(_: MsgClaimUndelegatedTokensResponseAmino): MsgClaimUndelegatedTokensResponse;
    toAmino(_: MsgClaimUndelegatedTokensResponse): MsgClaimUndelegatedTokensResponseAmino;
    fromAminoMsg(object: MsgClaimUndelegatedTokensResponseAminoMsg): MsgClaimUndelegatedTokensResponse;
    fromProtoMsg(message: MsgClaimUndelegatedTokensResponseProtoMsg): MsgClaimUndelegatedTokensResponse;
    toProto(message: MsgClaimUndelegatedTokensResponse): Uint8Array;
    toProtoMsg(message: MsgClaimUndelegatedTokensResponse): MsgClaimUndelegatedTokensResponseProtoMsg;
};
export declare const MsgRebalanceValidators: {
    typeUrl: string;
    encode(message: MsgRebalanceValidators, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgRebalanceValidators;
    fromPartial(object: Partial<MsgRebalanceValidators>): MsgRebalanceValidators;
    fromAmino(object: MsgRebalanceValidatorsAmino): MsgRebalanceValidators;
    toAmino(message: MsgRebalanceValidators): MsgRebalanceValidatorsAmino;
    fromAminoMsg(object: MsgRebalanceValidatorsAminoMsg): MsgRebalanceValidators;
    toAminoMsg(message: MsgRebalanceValidators): MsgRebalanceValidatorsAminoMsg;
    fromProtoMsg(message: MsgRebalanceValidatorsProtoMsg): MsgRebalanceValidators;
    toProto(message: MsgRebalanceValidators): Uint8Array;
    toProtoMsg(message: MsgRebalanceValidators): MsgRebalanceValidatorsProtoMsg;
};
export declare const MsgRebalanceValidatorsResponse: {
    typeUrl: string;
    encode(_: MsgRebalanceValidatorsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgRebalanceValidatorsResponse;
    fromPartial(_: Partial<MsgRebalanceValidatorsResponse>): MsgRebalanceValidatorsResponse;
    fromAmino(_: MsgRebalanceValidatorsResponseAmino): MsgRebalanceValidatorsResponse;
    toAmino(_: MsgRebalanceValidatorsResponse): MsgRebalanceValidatorsResponseAmino;
    fromAminoMsg(object: MsgRebalanceValidatorsResponseAminoMsg): MsgRebalanceValidatorsResponse;
    fromProtoMsg(message: MsgRebalanceValidatorsResponseProtoMsg): MsgRebalanceValidatorsResponse;
    toProto(message: MsgRebalanceValidatorsResponse): Uint8Array;
    toProtoMsg(message: MsgRebalanceValidatorsResponse): MsgRebalanceValidatorsResponseProtoMsg;
};
export declare const MsgAddValidators: {
    typeUrl: string;
    encode(message: MsgAddValidators, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgAddValidators;
    fromPartial(object: Partial<MsgAddValidators>): MsgAddValidators;
    fromAmino(object: MsgAddValidatorsAmino): MsgAddValidators;
    toAmino(message: MsgAddValidators): MsgAddValidatorsAmino;
    fromAminoMsg(object: MsgAddValidatorsAminoMsg): MsgAddValidators;
    toAminoMsg(message: MsgAddValidators): MsgAddValidatorsAminoMsg;
    fromProtoMsg(message: MsgAddValidatorsProtoMsg): MsgAddValidators;
    toProto(message: MsgAddValidators): Uint8Array;
    toProtoMsg(message: MsgAddValidators): MsgAddValidatorsProtoMsg;
};
export declare const MsgAddValidatorsResponse: {
    typeUrl: string;
    encode(_: MsgAddValidatorsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgAddValidatorsResponse;
    fromPartial(_: Partial<MsgAddValidatorsResponse>): MsgAddValidatorsResponse;
    fromAmino(_: MsgAddValidatorsResponseAmino): MsgAddValidatorsResponse;
    toAmino(_: MsgAddValidatorsResponse): MsgAddValidatorsResponseAmino;
    fromAminoMsg(object: MsgAddValidatorsResponseAminoMsg): MsgAddValidatorsResponse;
    fromProtoMsg(message: MsgAddValidatorsResponseProtoMsg): MsgAddValidatorsResponse;
    toProto(message: MsgAddValidatorsResponse): Uint8Array;
    toProtoMsg(message: MsgAddValidatorsResponse): MsgAddValidatorsResponseProtoMsg;
};
export declare const ValidatorWeight: {
    typeUrl: string;
    encode(message: ValidatorWeight, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ValidatorWeight;
    fromPartial(object: Partial<ValidatorWeight>): ValidatorWeight;
    fromAmino(object: ValidatorWeightAmino): ValidatorWeight;
    toAmino(message: ValidatorWeight): ValidatorWeightAmino;
    fromAminoMsg(object: ValidatorWeightAminoMsg): ValidatorWeight;
    fromProtoMsg(message: ValidatorWeightProtoMsg): ValidatorWeight;
    toProto(message: ValidatorWeight): Uint8Array;
    toProtoMsg(message: ValidatorWeight): ValidatorWeightProtoMsg;
};
export declare const MsgChangeValidatorWeights: {
    typeUrl: string;
    encode(message: MsgChangeValidatorWeights, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgChangeValidatorWeights;
    fromPartial(object: Partial<MsgChangeValidatorWeights>): MsgChangeValidatorWeights;
    fromAmino(object: MsgChangeValidatorWeightsAmino): MsgChangeValidatorWeights;
    toAmino(message: MsgChangeValidatorWeights): MsgChangeValidatorWeightsAmino;
    fromAminoMsg(object: MsgChangeValidatorWeightsAminoMsg): MsgChangeValidatorWeights;
    toAminoMsg(message: MsgChangeValidatorWeights): MsgChangeValidatorWeightsAminoMsg;
    fromProtoMsg(message: MsgChangeValidatorWeightsProtoMsg): MsgChangeValidatorWeights;
    toProto(message: MsgChangeValidatorWeights): Uint8Array;
    toProtoMsg(message: MsgChangeValidatorWeights): MsgChangeValidatorWeightsProtoMsg;
};
export declare const MsgChangeValidatorWeightsResponse: {
    typeUrl: string;
    encode(_: MsgChangeValidatorWeightsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgChangeValidatorWeightsResponse;
    fromPartial(_: Partial<MsgChangeValidatorWeightsResponse>): MsgChangeValidatorWeightsResponse;
    fromAmino(_: MsgChangeValidatorWeightsResponseAmino): MsgChangeValidatorWeightsResponse;
    toAmino(_: MsgChangeValidatorWeightsResponse): MsgChangeValidatorWeightsResponseAmino;
    fromAminoMsg(object: MsgChangeValidatorWeightsResponseAminoMsg): MsgChangeValidatorWeightsResponse;
    fromProtoMsg(message: MsgChangeValidatorWeightsResponseProtoMsg): MsgChangeValidatorWeightsResponse;
    toProto(message: MsgChangeValidatorWeightsResponse): Uint8Array;
    toProtoMsg(message: MsgChangeValidatorWeightsResponse): MsgChangeValidatorWeightsResponseProtoMsg;
};
export declare const MsgDeleteValidator: {
    typeUrl: string;
    encode(message: MsgDeleteValidator, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgDeleteValidator;
    fromPartial(object: Partial<MsgDeleteValidator>): MsgDeleteValidator;
    fromAmino(object: MsgDeleteValidatorAmino): MsgDeleteValidator;
    toAmino(message: MsgDeleteValidator): MsgDeleteValidatorAmino;
    fromAminoMsg(object: MsgDeleteValidatorAminoMsg): MsgDeleteValidator;
    toAminoMsg(message: MsgDeleteValidator): MsgDeleteValidatorAminoMsg;
    fromProtoMsg(message: MsgDeleteValidatorProtoMsg): MsgDeleteValidator;
    toProto(message: MsgDeleteValidator): Uint8Array;
    toProtoMsg(message: MsgDeleteValidator): MsgDeleteValidatorProtoMsg;
};
export declare const MsgDeleteValidatorResponse: {
    typeUrl: string;
    encode(_: MsgDeleteValidatorResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgDeleteValidatorResponse;
    fromPartial(_: Partial<MsgDeleteValidatorResponse>): MsgDeleteValidatorResponse;
    fromAmino(_: MsgDeleteValidatorResponseAmino): MsgDeleteValidatorResponse;
    toAmino(_: MsgDeleteValidatorResponse): MsgDeleteValidatorResponseAmino;
    fromAminoMsg(object: MsgDeleteValidatorResponseAminoMsg): MsgDeleteValidatorResponse;
    fromProtoMsg(message: MsgDeleteValidatorResponseProtoMsg): MsgDeleteValidatorResponse;
    toProto(message: MsgDeleteValidatorResponse): Uint8Array;
    toProtoMsg(message: MsgDeleteValidatorResponse): MsgDeleteValidatorResponseProtoMsg;
};
export declare const MsgRestoreInterchainAccount: {
    typeUrl: string;
    encode(message: MsgRestoreInterchainAccount, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgRestoreInterchainAccount;
    fromPartial(object: Partial<MsgRestoreInterchainAccount>): MsgRestoreInterchainAccount;
    fromAmino(object: MsgRestoreInterchainAccountAmino): MsgRestoreInterchainAccount;
    toAmino(message: MsgRestoreInterchainAccount): MsgRestoreInterchainAccountAmino;
    fromAminoMsg(object: MsgRestoreInterchainAccountAminoMsg): MsgRestoreInterchainAccount;
    toAminoMsg(message: MsgRestoreInterchainAccount): MsgRestoreInterchainAccountAminoMsg;
    fromProtoMsg(message: MsgRestoreInterchainAccountProtoMsg): MsgRestoreInterchainAccount;
    toProto(message: MsgRestoreInterchainAccount): Uint8Array;
    toProtoMsg(message: MsgRestoreInterchainAccount): MsgRestoreInterchainAccountProtoMsg;
};
export declare const MsgRestoreInterchainAccountResponse: {
    typeUrl: string;
    encode(_: MsgRestoreInterchainAccountResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgRestoreInterchainAccountResponse;
    fromPartial(_: Partial<MsgRestoreInterchainAccountResponse>): MsgRestoreInterchainAccountResponse;
    fromAmino(_: MsgRestoreInterchainAccountResponseAmino): MsgRestoreInterchainAccountResponse;
    toAmino(_: MsgRestoreInterchainAccountResponse): MsgRestoreInterchainAccountResponseAmino;
    fromAminoMsg(object: MsgRestoreInterchainAccountResponseAminoMsg): MsgRestoreInterchainAccountResponse;
    fromProtoMsg(message: MsgRestoreInterchainAccountResponseProtoMsg): MsgRestoreInterchainAccountResponse;
    toProto(message: MsgRestoreInterchainAccountResponse): Uint8Array;
    toProtoMsg(message: MsgRestoreInterchainAccountResponse): MsgRestoreInterchainAccountResponseProtoMsg;
};
export declare const MsgCloseDelegationChannel: {
    typeUrl: string;
    encode(message: MsgCloseDelegationChannel, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgCloseDelegationChannel;
    fromPartial(object: Partial<MsgCloseDelegationChannel>): MsgCloseDelegationChannel;
    fromAmino(object: MsgCloseDelegationChannelAmino): MsgCloseDelegationChannel;
    toAmino(message: MsgCloseDelegationChannel): MsgCloseDelegationChannelAmino;
    fromAminoMsg(object: MsgCloseDelegationChannelAminoMsg): MsgCloseDelegationChannel;
    toAminoMsg(message: MsgCloseDelegationChannel): MsgCloseDelegationChannelAminoMsg;
    fromProtoMsg(message: MsgCloseDelegationChannelProtoMsg): MsgCloseDelegationChannel;
    toProto(message: MsgCloseDelegationChannel): Uint8Array;
    toProtoMsg(message: MsgCloseDelegationChannel): MsgCloseDelegationChannelProtoMsg;
};
export declare const MsgCloseDelegationChannelResponse: {
    typeUrl: string;
    encode(_: MsgCloseDelegationChannelResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgCloseDelegationChannelResponse;
    fromPartial(_: Partial<MsgCloseDelegationChannelResponse>): MsgCloseDelegationChannelResponse;
    fromAmino(_: MsgCloseDelegationChannelResponseAmino): MsgCloseDelegationChannelResponse;
    toAmino(_: MsgCloseDelegationChannelResponse): MsgCloseDelegationChannelResponseAmino;
    fromAminoMsg(object: MsgCloseDelegationChannelResponseAminoMsg): MsgCloseDelegationChannelResponse;
    fromProtoMsg(message: MsgCloseDelegationChannelResponseProtoMsg): MsgCloseDelegationChannelResponse;
    toProto(message: MsgCloseDelegationChannelResponse): Uint8Array;
    toProtoMsg(message: MsgCloseDelegationChannelResponse): MsgCloseDelegationChannelResponseProtoMsg;
};
export declare const MsgUpdateValidatorSharesExchRate: {
    typeUrl: string;
    encode(message: MsgUpdateValidatorSharesExchRate, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateValidatorSharesExchRate;
    fromPartial(object: Partial<MsgUpdateValidatorSharesExchRate>): MsgUpdateValidatorSharesExchRate;
    fromAmino(object: MsgUpdateValidatorSharesExchRateAmino): MsgUpdateValidatorSharesExchRate;
    toAmino(message: MsgUpdateValidatorSharesExchRate): MsgUpdateValidatorSharesExchRateAmino;
    fromAminoMsg(object: MsgUpdateValidatorSharesExchRateAminoMsg): MsgUpdateValidatorSharesExchRate;
    toAminoMsg(message: MsgUpdateValidatorSharesExchRate): MsgUpdateValidatorSharesExchRateAminoMsg;
    fromProtoMsg(message: MsgUpdateValidatorSharesExchRateProtoMsg): MsgUpdateValidatorSharesExchRate;
    toProto(message: MsgUpdateValidatorSharesExchRate): Uint8Array;
    toProtoMsg(message: MsgUpdateValidatorSharesExchRate): MsgUpdateValidatorSharesExchRateProtoMsg;
};
export declare const MsgUpdateValidatorSharesExchRateResponse: {
    typeUrl: string;
    encode(_: MsgUpdateValidatorSharesExchRateResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateValidatorSharesExchRateResponse;
    fromPartial(_: Partial<MsgUpdateValidatorSharesExchRateResponse>): MsgUpdateValidatorSharesExchRateResponse;
    fromAmino(_: MsgUpdateValidatorSharesExchRateResponseAmino): MsgUpdateValidatorSharesExchRateResponse;
    toAmino(_: MsgUpdateValidatorSharesExchRateResponse): MsgUpdateValidatorSharesExchRateResponseAmino;
    fromAminoMsg(object: MsgUpdateValidatorSharesExchRateResponseAminoMsg): MsgUpdateValidatorSharesExchRateResponse;
    fromProtoMsg(message: MsgUpdateValidatorSharesExchRateResponseProtoMsg): MsgUpdateValidatorSharesExchRateResponse;
    toProto(message: MsgUpdateValidatorSharesExchRateResponse): Uint8Array;
    toProtoMsg(message: MsgUpdateValidatorSharesExchRateResponse): MsgUpdateValidatorSharesExchRateResponseProtoMsg;
};
export declare const MsgCalibrateDelegation: {
    typeUrl: string;
    encode(message: MsgCalibrateDelegation, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgCalibrateDelegation;
    fromPartial(object: Partial<MsgCalibrateDelegation>): MsgCalibrateDelegation;
    fromAmino(object: MsgCalibrateDelegationAmino): MsgCalibrateDelegation;
    toAmino(message: MsgCalibrateDelegation): MsgCalibrateDelegationAmino;
    fromAminoMsg(object: MsgCalibrateDelegationAminoMsg): MsgCalibrateDelegation;
    toAminoMsg(message: MsgCalibrateDelegation): MsgCalibrateDelegationAminoMsg;
    fromProtoMsg(message: MsgCalibrateDelegationProtoMsg): MsgCalibrateDelegation;
    toProto(message: MsgCalibrateDelegation): Uint8Array;
    toProtoMsg(message: MsgCalibrateDelegation): MsgCalibrateDelegationProtoMsg;
};
export declare const MsgCalibrateDelegationResponse: {
    typeUrl: string;
    encode(_: MsgCalibrateDelegationResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgCalibrateDelegationResponse;
    fromPartial(_: Partial<MsgCalibrateDelegationResponse>): MsgCalibrateDelegationResponse;
    fromAmino(_: MsgCalibrateDelegationResponseAmino): MsgCalibrateDelegationResponse;
    toAmino(_: MsgCalibrateDelegationResponse): MsgCalibrateDelegationResponseAmino;
    fromAminoMsg(object: MsgCalibrateDelegationResponseAminoMsg): MsgCalibrateDelegationResponse;
    fromProtoMsg(message: MsgCalibrateDelegationResponseProtoMsg): MsgCalibrateDelegationResponse;
    toProto(message: MsgCalibrateDelegationResponse): Uint8Array;
    toProtoMsg(message: MsgCalibrateDelegationResponse): MsgCalibrateDelegationResponseProtoMsg;
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
export declare const MsgCreateTradeRoute: {
    typeUrl: string;
    encode(message: MsgCreateTradeRoute, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateTradeRoute;
    fromPartial(object: Partial<MsgCreateTradeRoute>): MsgCreateTradeRoute;
    fromAmino(object: MsgCreateTradeRouteAmino): MsgCreateTradeRoute;
    toAmino(message: MsgCreateTradeRoute): MsgCreateTradeRouteAmino;
    fromAminoMsg(object: MsgCreateTradeRouteAminoMsg): MsgCreateTradeRoute;
    toAminoMsg(message: MsgCreateTradeRoute): MsgCreateTradeRouteAminoMsg;
    fromProtoMsg(message: MsgCreateTradeRouteProtoMsg): MsgCreateTradeRoute;
    toProto(message: MsgCreateTradeRoute): Uint8Array;
    toProtoMsg(message: MsgCreateTradeRoute): MsgCreateTradeRouteProtoMsg;
};
export declare const MsgCreateTradeRouteResponse: {
    typeUrl: string;
    encode(_: MsgCreateTradeRouteResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateTradeRouteResponse;
    fromPartial(_: Partial<MsgCreateTradeRouteResponse>): MsgCreateTradeRouteResponse;
    fromAmino(_: MsgCreateTradeRouteResponseAmino): MsgCreateTradeRouteResponse;
    toAmino(_: MsgCreateTradeRouteResponse): MsgCreateTradeRouteResponseAmino;
    fromAminoMsg(object: MsgCreateTradeRouteResponseAminoMsg): MsgCreateTradeRouteResponse;
    fromProtoMsg(message: MsgCreateTradeRouteResponseProtoMsg): MsgCreateTradeRouteResponse;
    toProto(message: MsgCreateTradeRouteResponse): Uint8Array;
    toProtoMsg(message: MsgCreateTradeRouteResponse): MsgCreateTradeRouteResponseProtoMsg;
};
export declare const MsgDeleteTradeRoute: {
    typeUrl: string;
    encode(message: MsgDeleteTradeRoute, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgDeleteTradeRoute;
    fromPartial(object: Partial<MsgDeleteTradeRoute>): MsgDeleteTradeRoute;
    fromAmino(object: MsgDeleteTradeRouteAmino): MsgDeleteTradeRoute;
    toAmino(message: MsgDeleteTradeRoute): MsgDeleteTradeRouteAmino;
    fromAminoMsg(object: MsgDeleteTradeRouteAminoMsg): MsgDeleteTradeRoute;
    toAminoMsg(message: MsgDeleteTradeRoute): MsgDeleteTradeRouteAminoMsg;
    fromProtoMsg(message: MsgDeleteTradeRouteProtoMsg): MsgDeleteTradeRoute;
    toProto(message: MsgDeleteTradeRoute): Uint8Array;
    toProtoMsg(message: MsgDeleteTradeRoute): MsgDeleteTradeRouteProtoMsg;
};
export declare const MsgDeleteTradeRouteResponse: {
    typeUrl: string;
    encode(_: MsgDeleteTradeRouteResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgDeleteTradeRouteResponse;
    fromPartial(_: Partial<MsgDeleteTradeRouteResponse>): MsgDeleteTradeRouteResponse;
    fromAmino(_: MsgDeleteTradeRouteResponseAmino): MsgDeleteTradeRouteResponse;
    toAmino(_: MsgDeleteTradeRouteResponse): MsgDeleteTradeRouteResponseAmino;
    fromAminoMsg(object: MsgDeleteTradeRouteResponseAminoMsg): MsgDeleteTradeRouteResponse;
    fromProtoMsg(message: MsgDeleteTradeRouteResponseProtoMsg): MsgDeleteTradeRouteResponse;
    toProto(message: MsgDeleteTradeRouteResponse): Uint8Array;
    toProtoMsg(message: MsgDeleteTradeRouteResponse): MsgDeleteTradeRouteResponseProtoMsg;
};
export declare const MsgUpdateTradeRoute: {
    typeUrl: string;
    encode(message: MsgUpdateTradeRoute, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateTradeRoute;
    fromPartial(object: Partial<MsgUpdateTradeRoute>): MsgUpdateTradeRoute;
    fromAmino(object: MsgUpdateTradeRouteAmino): MsgUpdateTradeRoute;
    toAmino(message: MsgUpdateTradeRoute): MsgUpdateTradeRouteAmino;
    fromAminoMsg(object: MsgUpdateTradeRouteAminoMsg): MsgUpdateTradeRoute;
    toAminoMsg(message: MsgUpdateTradeRoute): MsgUpdateTradeRouteAminoMsg;
    fromProtoMsg(message: MsgUpdateTradeRouteProtoMsg): MsgUpdateTradeRoute;
    toProto(message: MsgUpdateTradeRoute): Uint8Array;
    toProtoMsg(message: MsgUpdateTradeRoute): MsgUpdateTradeRouteProtoMsg;
};
export declare const MsgUpdateTradeRouteResponse: {
    typeUrl: string;
    encode(_: MsgUpdateTradeRouteResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateTradeRouteResponse;
    fromPartial(_: Partial<MsgUpdateTradeRouteResponse>): MsgUpdateTradeRouteResponse;
    fromAmino(_: MsgUpdateTradeRouteResponseAmino): MsgUpdateTradeRouteResponse;
    toAmino(_: MsgUpdateTradeRouteResponse): MsgUpdateTradeRouteResponseAmino;
    fromAminoMsg(object: MsgUpdateTradeRouteResponseAminoMsg): MsgUpdateTradeRouteResponse;
    fromProtoMsg(message: MsgUpdateTradeRouteResponseProtoMsg): MsgUpdateTradeRouteResponse;
    toProto(message: MsgUpdateTradeRouteResponse): Uint8Array;
    toProtoMsg(message: MsgUpdateTradeRouteResponse): MsgUpdateTradeRouteResponseProtoMsg;
};
export declare const MsgSetCommunityPoolRebate: {
    typeUrl: string;
    encode(message: MsgSetCommunityPoolRebate, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgSetCommunityPoolRebate;
    fromPartial(object: Partial<MsgSetCommunityPoolRebate>): MsgSetCommunityPoolRebate;
    fromAmino(object: MsgSetCommunityPoolRebateAmino): MsgSetCommunityPoolRebate;
    toAmino(message: MsgSetCommunityPoolRebate): MsgSetCommunityPoolRebateAmino;
    fromAminoMsg(object: MsgSetCommunityPoolRebateAminoMsg): MsgSetCommunityPoolRebate;
    toAminoMsg(message: MsgSetCommunityPoolRebate): MsgSetCommunityPoolRebateAminoMsg;
    fromProtoMsg(message: MsgSetCommunityPoolRebateProtoMsg): MsgSetCommunityPoolRebate;
    toProto(message: MsgSetCommunityPoolRebate): Uint8Array;
    toProtoMsg(message: MsgSetCommunityPoolRebate): MsgSetCommunityPoolRebateProtoMsg;
};
export declare const MsgSetCommunityPoolRebateResponse: {
    typeUrl: string;
    encode(_: MsgSetCommunityPoolRebateResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgSetCommunityPoolRebateResponse;
    fromPartial(_: Partial<MsgSetCommunityPoolRebateResponse>): MsgSetCommunityPoolRebateResponse;
    fromAmino(_: MsgSetCommunityPoolRebateResponseAmino): MsgSetCommunityPoolRebateResponse;
    toAmino(_: MsgSetCommunityPoolRebateResponse): MsgSetCommunityPoolRebateResponseAmino;
    fromAminoMsg(object: MsgSetCommunityPoolRebateResponseAminoMsg): MsgSetCommunityPoolRebateResponse;
    fromProtoMsg(message: MsgSetCommunityPoolRebateResponseProtoMsg): MsgSetCommunityPoolRebateResponse;
    toProto(message: MsgSetCommunityPoolRebateResponse): Uint8Array;
    toProtoMsg(message: MsgSetCommunityPoolRebateResponse): MsgSetCommunityPoolRebateResponseProtoMsg;
};
export declare const MsgToggleTradeController: {
    typeUrl: string;
    encode(message: MsgToggleTradeController, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgToggleTradeController;
    fromPartial(object: Partial<MsgToggleTradeController>): MsgToggleTradeController;
    fromAmino(object: MsgToggleTradeControllerAmino): MsgToggleTradeController;
    toAmino(message: MsgToggleTradeController): MsgToggleTradeControllerAmino;
    fromAminoMsg(object: MsgToggleTradeControllerAminoMsg): MsgToggleTradeController;
    toAminoMsg(message: MsgToggleTradeController): MsgToggleTradeControllerAminoMsg;
    fromProtoMsg(message: MsgToggleTradeControllerProtoMsg): MsgToggleTradeController;
    toProto(message: MsgToggleTradeController): Uint8Array;
    toProtoMsg(message: MsgToggleTradeController): MsgToggleTradeControllerProtoMsg;
};
export declare const MsgToggleTradeControllerResponse: {
    typeUrl: string;
    encode(_: MsgToggleTradeControllerResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgToggleTradeControllerResponse;
    fromPartial(_: Partial<MsgToggleTradeControllerResponse>): MsgToggleTradeControllerResponse;
    fromAmino(_: MsgToggleTradeControllerResponseAmino): MsgToggleTradeControllerResponse;
    toAmino(_: MsgToggleTradeControllerResponse): MsgToggleTradeControllerResponseAmino;
    fromAminoMsg(object: MsgToggleTradeControllerResponseAminoMsg): MsgToggleTradeControllerResponse;
    fromProtoMsg(message: MsgToggleTradeControllerResponseProtoMsg): MsgToggleTradeControllerResponse;
    toProto(message: MsgToggleTradeControllerResponse): Uint8Array;
    toProtoMsg(message: MsgToggleTradeControllerResponse): MsgToggleTradeControllerResponseProtoMsg;
};
export declare const MsgUpdateHostZoneParams: {
    typeUrl: string;
    encode(message: MsgUpdateHostZoneParams, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateHostZoneParams;
    fromPartial(object: Partial<MsgUpdateHostZoneParams>): MsgUpdateHostZoneParams;
    fromAmino(object: MsgUpdateHostZoneParamsAmino): MsgUpdateHostZoneParams;
    toAmino(message: MsgUpdateHostZoneParams): MsgUpdateHostZoneParamsAmino;
    fromAminoMsg(object: MsgUpdateHostZoneParamsAminoMsg): MsgUpdateHostZoneParams;
    toAminoMsg(message: MsgUpdateHostZoneParams): MsgUpdateHostZoneParamsAminoMsg;
    fromProtoMsg(message: MsgUpdateHostZoneParamsProtoMsg): MsgUpdateHostZoneParams;
    toProto(message: MsgUpdateHostZoneParams): Uint8Array;
    toProtoMsg(message: MsgUpdateHostZoneParams): MsgUpdateHostZoneParamsProtoMsg;
};
export declare const MsgUpdateHostZoneParamsResponse: {
    typeUrl: string;
    encode(_: MsgUpdateHostZoneParamsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateHostZoneParamsResponse;
    fromPartial(_: Partial<MsgUpdateHostZoneParamsResponse>): MsgUpdateHostZoneParamsResponse;
    fromAmino(_: MsgUpdateHostZoneParamsResponseAmino): MsgUpdateHostZoneParamsResponse;
    toAmino(_: MsgUpdateHostZoneParamsResponse): MsgUpdateHostZoneParamsResponseAmino;
    fromAminoMsg(object: MsgUpdateHostZoneParamsResponseAminoMsg): MsgUpdateHostZoneParamsResponse;
    fromProtoMsg(message: MsgUpdateHostZoneParamsResponseProtoMsg): MsgUpdateHostZoneParamsResponse;
    toProto(message: MsgUpdateHostZoneParamsResponse): Uint8Array;
    toProtoMsg(message: MsgUpdateHostZoneParamsResponse): MsgUpdateHostZoneParamsResponseProtoMsg;
};
