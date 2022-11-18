import { ICAAccountType, ICAAccountTypeSDKType } from "./ica_account";
import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
export interface MsgLiquidStake {
    creator: string;
    amount: Long;
    /** TODO(TEST-86): Update Denom -> HostDenom */
    hostDenom: string;
}
export interface MsgLiquidStakeSDKType {
    creator: string;
    amount: Long;
    /** TODO(TEST-86): Update Denom -> HostDenom */
    host_denom: string;
}
export interface MsgLiquidStakeResponse {
}
export interface MsgLiquidStakeResponseSDKType {
}
export interface MsgClearBalance {
    creator: string;
    chainId: string;
    amount: Long;
    channel: string;
}
export interface MsgClearBalanceSDKType {
    creator: string;
    chain_id: string;
    amount: Long;
    channel: string;
}
export interface MsgClearBalanceResponse {
}
export interface MsgClearBalanceResponseSDKType {
}
export interface MsgRedeemStake {
    creator: string;
    amount: Long;
    hostZone: string;
    receiver: string;
}
export interface MsgRedeemStakeSDKType {
    creator: string;
    amount: Long;
    hostZone: string;
    receiver: string;
}
export interface MsgRedeemStakeResponse {
}
export interface MsgRedeemStakeResponseSDKType {
}
/** next: 13 */
export interface MsgRegisterHostZone {
    connectionId: string;
    bech32prefix: string;
    hostDenom: string;
    ibcDenom: string;
    creator: string;
    transferChannelId: string;
    unbondingFrequency: Long;
}
/** next: 13 */
export interface MsgRegisterHostZoneSDKType {
    connection_id: string;
    bech32prefix: string;
    host_denom: string;
    ibc_denom: string;
    creator: string;
    transfer_channel_id: string;
    unbonding_frequency: Long;
}
/** TODO(TEST-53): Remove this pre-launch (no need for clients to create / interact with ICAs) */
export interface MsgRegisterHostZoneResponse {
}
/** TODO(TEST-53): Remove this pre-launch (no need for clients to create / interact with ICAs) */
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
    hostZoneId: string;
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
    hostZone: string;
    numRebalance: Long;
}
export interface MsgRebalanceValidatorsResponse {
}
export interface MsgRebalanceValidatorsResponseSDKType {
}
export interface MsgAddValidator {
    creator: string;
    hostZone: string;
    name: string;
    address: string;
    commission: Long;
    weight: Long;
}
export interface MsgAddValidatorSDKType {
    creator: string;
    hostZone: string;
    name: string;
    address: string;
    commission: Long;
    weight: Long;
}
export interface MsgAddValidatorResponse {
}
export interface MsgAddValidatorResponseSDKType {
}
export interface MsgChangeValidatorWeight {
    creator: string;
    hostZone: string;
    valAddr: string;
    weight: Long;
}
export interface MsgChangeValidatorWeightSDKType {
    creator: string;
    hostZone: string;
    valAddr: string;
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
    hostZone: string;
    valAddr: string;
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
    chainId: string;
    accountType: ICAAccountTypeSDKType;
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
    chainId: string;
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
export declare const MsgAddValidator: {
    encode(message: MsgAddValidator, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddValidator;
    fromPartial(object: DeepPartial<MsgAddValidator>): MsgAddValidator;
};
export declare const MsgAddValidatorResponse: {
    encode(_: MsgAddValidatorResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddValidatorResponse;
    fromPartial(_: DeepPartial<MsgAddValidatorResponse>): MsgAddValidatorResponse;
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
