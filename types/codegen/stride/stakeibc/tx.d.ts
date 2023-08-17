import { Validator, ValidatorSDKType } from "./validator";
import { ICAAccountType, ICAAccountTypeSDKType } from "./ica_account";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
export interface MsgLiquidStake {
    creator: string;
    amount: string;
    hostDenom: string;
}
export interface MsgLiquidStakeSDKType {
    creator: string;
    amount: string;
    host_denom: string;
}
export interface MsgLiquidStakeResponse {
}
export interface MsgLiquidStakeResponseSDKType {
}
export interface MsgLSMLiquidStake {
    creator: string;
    amount: string;
    lsmTokenIbcDenom: string;
}
export interface MsgLSMLiquidStakeSDKType {
    creator: string;
    amount: string;
    lsm_token_ibc_denom: string;
}
export interface MsgLSMLiquidStakeResponse {
    transactionComplete: boolean;
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
export interface MsgClearBalanceSDKType {
    creator: string;
    chain_id: string;
    amount: string;
    channel: string;
}
export interface MsgClearBalanceResponse {
}
export interface MsgClearBalanceResponseSDKType {
}
export interface MsgRedeemStake {
    creator: string;
    amount: string;
    hostZone: string;
    receiver: string;
}
export interface MsgRedeemStakeSDKType {
    creator: string;
    amount: string;
    host_zone: string;
    receiver: string;
}
export interface MsgRedeemStakeResponse {
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
    unbondingPeriod: Long;
    minRedemptionRate: string;
    maxRedemptionRate: string;
    lsmLiquidStakeEnabled: boolean;
}
/** next: 15 */
export interface MsgRegisterHostZoneSDKType {
    connection_id: string;
    bech32prefix: string;
    host_denom: string;
    ibc_denom: string;
    creator: string;
    transfer_channel_id: string;
    unbonding_period: Long;
    min_redemption_rate: string;
    max_redemption_rate: string;
    lsm_liquid_stake_enabled: boolean;
}
export interface MsgRegisterHostZoneResponse {
}
export interface MsgRegisterHostZoneResponseSDKType {
}
export interface MsgClaimUndelegatedTokens {
    creator: string;
    /** UserUnbondingRecords are keyed on {chain_id}.{epoch}.{sender} */
    hostZoneId: string;
    epoch: Long;
    sender: string;
}
export interface MsgClaimUndelegatedTokensSDKType {
    creator: string;
    /** UserUnbondingRecords are keyed on {chain_id}.{epoch}.{sender} */
    host_zone_id: string;
    epoch: Long;
    sender: string;
}
export interface MsgClaimUndelegatedTokensResponse {
}
export interface MsgClaimUndelegatedTokensResponseSDKType {
}
export interface MsgRebalanceValidators {
    creator: string;
    hostZone: string;
    numRebalance: Long;
}
export interface MsgRebalanceValidatorsSDKType {
    creator: string;
    host_zone: string;
    num_rebalance: Long;
}
export interface MsgRebalanceValidatorsResponse {
}
export interface MsgRebalanceValidatorsResponseSDKType {
}
export interface MsgAddValidators {
    creator: string;
    hostZone: string;
    validators: Validator[];
}
export interface MsgAddValidatorsSDKType {
    creator: string;
    host_zone: string;
    validators: ValidatorSDKType[];
}
export interface MsgAddValidatorsResponse {
}
export interface MsgAddValidatorsResponseSDKType {
}
export interface MsgChangeValidatorWeight {
    creator: string;
    hostZone: string;
    valAddr: string;
    weight: Long;
}
export interface MsgChangeValidatorWeightSDKType {
    creator: string;
    host_zone: string;
    val_addr: string;
    weight: Long;
}
export interface MsgChangeValidatorWeightResponse {
}
export interface MsgChangeValidatorWeightResponseSDKType {
}
export interface MsgDeleteValidator {
    creator: string;
    hostZone: string;
    valAddr: string;
}
export interface MsgDeleteValidatorSDKType {
    creator: string;
    host_zone: string;
    val_addr: string;
}
export interface MsgDeleteValidatorResponse {
}
export interface MsgDeleteValidatorResponseSDKType {
}
export interface MsgRestoreInterchainAccount {
    creator: string;
    chainId: string;
    accountType: ICAAccountType;
}
export interface MsgRestoreInterchainAccountSDKType {
    creator: string;
    chain_id: string;
    account_type: ICAAccountTypeSDKType;
}
export interface MsgRestoreInterchainAccountResponse {
}
export interface MsgRestoreInterchainAccountResponseSDKType {
}
export interface MsgUpdateValidatorSharesExchRate {
    creator: string;
    chainId: string;
    valoper: string;
}
export interface MsgUpdateValidatorSharesExchRateSDKType {
    creator: string;
    chain_id: string;
    valoper: string;
}
export interface MsgUpdateValidatorSharesExchRateResponse {
}
export interface MsgUpdateValidatorSharesExchRateResponseSDKType {
}
export declare const MsgLiquidStake: {
    encode(message: MsgLiquidStake, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgLiquidStake;
    fromPartial(object: DeepPartial<MsgLiquidStake>): MsgLiquidStake;
};
export declare const MsgLiquidStakeResponse: {
    encode(_: MsgLiquidStakeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgLiquidStakeResponse;
    fromPartial(_: DeepPartial<MsgLiquidStakeResponse>): MsgLiquidStakeResponse;
};
export declare const MsgLSMLiquidStake: {
    encode(message: MsgLSMLiquidStake, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgLSMLiquidStake;
    fromPartial(object: DeepPartial<MsgLSMLiquidStake>): MsgLSMLiquidStake;
};
export declare const MsgLSMLiquidStakeResponse: {
    encode(message: MsgLSMLiquidStakeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgLSMLiquidStakeResponse;
    fromPartial(object: DeepPartial<MsgLSMLiquidStakeResponse>): MsgLSMLiquidStakeResponse;
};
export declare const MsgClearBalance: {
    encode(message: MsgClearBalance, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgClearBalance;
    fromPartial(object: DeepPartial<MsgClearBalance>): MsgClearBalance;
};
export declare const MsgClearBalanceResponse: {
    encode(_: MsgClearBalanceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgClearBalanceResponse;
    fromPartial(_: DeepPartial<MsgClearBalanceResponse>): MsgClearBalanceResponse;
};
export declare const MsgRedeemStake: {
    encode(message: MsgRedeemStake, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRedeemStake;
    fromPartial(object: DeepPartial<MsgRedeemStake>): MsgRedeemStake;
};
export declare const MsgRedeemStakeResponse: {
    encode(_: MsgRedeemStakeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRedeemStakeResponse;
    fromPartial(_: DeepPartial<MsgRedeemStakeResponse>): MsgRedeemStakeResponse;
};
export declare const MsgRegisterHostZone: {
    encode(message: MsgRegisterHostZone, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterHostZone;
    fromPartial(object: DeepPartial<MsgRegisterHostZone>): MsgRegisterHostZone;
};
export declare const MsgRegisterHostZoneResponse: {
    encode(_: MsgRegisterHostZoneResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterHostZoneResponse;
    fromPartial(_: DeepPartial<MsgRegisterHostZoneResponse>): MsgRegisterHostZoneResponse;
};
export declare const MsgClaimUndelegatedTokens: {
    encode(message: MsgClaimUndelegatedTokens, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgClaimUndelegatedTokens;
    fromPartial(object: DeepPartial<MsgClaimUndelegatedTokens>): MsgClaimUndelegatedTokens;
};
export declare const MsgClaimUndelegatedTokensResponse: {
    encode(_: MsgClaimUndelegatedTokensResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgClaimUndelegatedTokensResponse;
    fromPartial(_: DeepPartial<MsgClaimUndelegatedTokensResponse>): MsgClaimUndelegatedTokensResponse;
};
export declare const MsgRebalanceValidators: {
    encode(message: MsgRebalanceValidators, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRebalanceValidators;
    fromPartial(object: DeepPartial<MsgRebalanceValidators>): MsgRebalanceValidators;
};
export declare const MsgRebalanceValidatorsResponse: {
    encode(_: MsgRebalanceValidatorsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRebalanceValidatorsResponse;
    fromPartial(_: DeepPartial<MsgRebalanceValidatorsResponse>): MsgRebalanceValidatorsResponse;
};
export declare const MsgAddValidators: {
    encode(message: MsgAddValidators, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddValidators;
    fromPartial(object: DeepPartial<MsgAddValidators>): MsgAddValidators;
};
export declare const MsgAddValidatorsResponse: {
    encode(_: MsgAddValidatorsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddValidatorsResponse;
    fromPartial(_: DeepPartial<MsgAddValidatorsResponse>): MsgAddValidatorsResponse;
};
export declare const MsgChangeValidatorWeight: {
    encode(message: MsgChangeValidatorWeight, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgChangeValidatorWeight;
    fromPartial(object: DeepPartial<MsgChangeValidatorWeight>): MsgChangeValidatorWeight;
};
export declare const MsgChangeValidatorWeightResponse: {
    encode(_: MsgChangeValidatorWeightResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgChangeValidatorWeightResponse;
    fromPartial(_: DeepPartial<MsgChangeValidatorWeightResponse>): MsgChangeValidatorWeightResponse;
};
export declare const MsgDeleteValidator: {
    encode(message: MsgDeleteValidator, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteValidator;
    fromPartial(object: DeepPartial<MsgDeleteValidator>): MsgDeleteValidator;
};
export declare const MsgDeleteValidatorResponse: {
    encode(_: MsgDeleteValidatorResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteValidatorResponse;
    fromPartial(_: DeepPartial<MsgDeleteValidatorResponse>): MsgDeleteValidatorResponse;
};
export declare const MsgRestoreInterchainAccount: {
    encode(message: MsgRestoreInterchainAccount, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRestoreInterchainAccount;
    fromPartial(object: DeepPartial<MsgRestoreInterchainAccount>): MsgRestoreInterchainAccount;
};
export declare const MsgRestoreInterchainAccountResponse: {
    encode(_: MsgRestoreInterchainAccountResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRestoreInterchainAccountResponse;
    fromPartial(_: DeepPartial<MsgRestoreInterchainAccountResponse>): MsgRestoreInterchainAccountResponse;
};
export declare const MsgUpdateValidatorSharesExchRate: {
    encode(message: MsgUpdateValidatorSharesExchRate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateValidatorSharesExchRate;
    fromPartial(object: DeepPartial<MsgUpdateValidatorSharesExchRate>): MsgUpdateValidatorSharesExchRate;
};
export declare const MsgUpdateValidatorSharesExchRateResponse: {
    encode(_: MsgUpdateValidatorSharesExchRateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateValidatorSharesExchRateResponse;
    fromPartial(_: DeepPartial<MsgUpdateValidatorSharesExchRateResponse>): MsgUpdateValidatorSharesExchRateResponse;
};
