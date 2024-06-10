import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { LSMTokenDeposit, LSMTokenDepositSDKType } from "../records/records";
import { HostZone, HostZoneSDKType } from "./host_zone";
import { Validator, ValidatorSDKType } from "./validator";
import { ICAAccountType, ICAAccountTypeSDKType } from "./ica_account";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
export interface SplitDelegation {
    validator: string;
    amount: string;
}
export interface SplitDelegationSDKType {
    validator: string;
    amount: string;
}
export interface DelegateCallback {
    hostZoneId: string;
    depositRecordId: Long;
    splitDelegations: SplitDelegation[];
}
export interface DelegateCallbackSDKType {
    host_zone_id: string;
    deposit_record_id: Long;
    split_delegations: SplitDelegationSDKType[];
}
export interface ClaimCallback {
    userRedemptionRecordId: string;
    chainId: string;
    epochNumber: Long;
}
export interface ClaimCallbackSDKType {
    user_redemption_record_id: string;
    chain_id: string;
    epoch_number: Long;
}
export interface ReinvestCallback {
    reinvestAmount: Coin;
    hostZoneId: string;
}
export interface ReinvestCallbackSDKType {
    reinvest_amount: CoinSDKType;
    host_zone_id: string;
}
export interface UndelegateCallback {
    hostZoneId: string;
    splitDelegations: SplitDelegation[];
    epochUnbondingRecordIds: Long[];
}
export interface UndelegateCallbackSDKType {
    host_zone_id: string;
    split_delegations: SplitDelegationSDKType[];
    epoch_unbonding_record_ids: Long[];
}
export interface RedemptionCallback {
    hostZoneId: string;
    epochUnbondingRecordIds: Long[];
}
export interface RedemptionCallbackSDKType {
    host_zone_id: string;
    epoch_unbonding_record_ids: Long[];
}
export interface Rebalancing {
    srcValidator: string;
    dstValidator: string;
    amt: string;
}
export interface RebalancingSDKType {
    src_validator: string;
    dst_validator: string;
    amt: string;
}
export interface RebalanceCallback {
    hostZoneId: string;
    rebalancings: Rebalancing[];
}
export interface RebalanceCallbackSDKType {
    host_zone_id: string;
    rebalancings: RebalancingSDKType[];
}
export interface DetokenizeSharesCallback {
    deposit: LSMTokenDeposit;
}
export interface DetokenizeSharesCallbackSDKType {
    deposit: LSMTokenDepositSDKType;
}
export interface LSMLiquidStake {
    deposit: LSMTokenDeposit;
    hostZone: HostZone;
    validator: Validator;
}
export interface LSMLiquidStakeSDKType {
    deposit: LSMTokenDepositSDKType;
    host_zone: HostZoneSDKType;
    validator: ValidatorSDKType;
}
export interface ValidatorSharesToTokensQueryCallback {
    lsmLiquidStake: LSMLiquidStake;
}
export interface ValidatorSharesToTokensQueryCallbackSDKType {
    lsm_liquid_stake: LSMLiquidStakeSDKType;
}
export interface DelegatorSharesQueryCallback {
    /** Validator delegation at the time the query is submitted */
    initialValidatorDelegation: string;
}
export interface DelegatorSharesQueryCallbackSDKType {
    /** Validator delegation at the time the query is submitted */
    initial_validator_delegation: string;
}
export interface CommunityPoolBalanceQueryCallback {
    icaType: ICAAccountType;
    denom: string;
}
export interface CommunityPoolBalanceQueryCallbackSDKType {
    ica_type: ICAAccountTypeSDKType;
    denom: string;
}
export interface TradeRouteCallback {
    rewardDenom: string;
    hostDenom: string;
}
export interface TradeRouteCallbackSDKType {
    reward_denom: string;
    host_denom: string;
}
export declare const SplitDelegation: {
    encode(message: SplitDelegation, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SplitDelegation;
    fromPartial(object: DeepPartial<SplitDelegation>): SplitDelegation;
};
export declare const DelegateCallback: {
    encode(message: DelegateCallback, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DelegateCallback;
    fromPartial(object: DeepPartial<DelegateCallback>): DelegateCallback;
};
export declare const ClaimCallback: {
    encode(message: ClaimCallback, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ClaimCallback;
    fromPartial(object: DeepPartial<ClaimCallback>): ClaimCallback;
};
export declare const ReinvestCallback: {
    encode(message: ReinvestCallback, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ReinvestCallback;
    fromPartial(object: DeepPartial<ReinvestCallback>): ReinvestCallback;
};
export declare const UndelegateCallback: {
    encode(message: UndelegateCallback, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UndelegateCallback;
    fromPartial(object: DeepPartial<UndelegateCallback>): UndelegateCallback;
};
export declare const RedemptionCallback: {
    encode(message: RedemptionCallback, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RedemptionCallback;
    fromPartial(object: DeepPartial<RedemptionCallback>): RedemptionCallback;
};
export declare const Rebalancing: {
    encode(message: Rebalancing, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Rebalancing;
    fromPartial(object: DeepPartial<Rebalancing>): Rebalancing;
};
export declare const RebalanceCallback: {
    encode(message: RebalanceCallback, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RebalanceCallback;
    fromPartial(object: DeepPartial<RebalanceCallback>): RebalanceCallback;
};
export declare const DetokenizeSharesCallback: {
    encode(message: DetokenizeSharesCallback, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DetokenizeSharesCallback;
    fromPartial(object: DeepPartial<DetokenizeSharesCallback>): DetokenizeSharesCallback;
};
export declare const LSMLiquidStake: {
    encode(message: LSMLiquidStake, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LSMLiquidStake;
    fromPartial(object: DeepPartial<LSMLiquidStake>): LSMLiquidStake;
};
export declare const ValidatorSharesToTokensQueryCallback: {
    encode(message: ValidatorSharesToTokensQueryCallback, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorSharesToTokensQueryCallback;
    fromPartial(object: DeepPartial<ValidatorSharesToTokensQueryCallback>): ValidatorSharesToTokensQueryCallback;
};
export declare const DelegatorSharesQueryCallback: {
    encode(message: DelegatorSharesQueryCallback, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DelegatorSharesQueryCallback;
    fromPartial(object: DeepPartial<DelegatorSharesQueryCallback>): DelegatorSharesQueryCallback;
};
export declare const CommunityPoolBalanceQueryCallback: {
    encode(message: CommunityPoolBalanceQueryCallback, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CommunityPoolBalanceQueryCallback;
    fromPartial(object: DeepPartial<CommunityPoolBalanceQueryCallback>): CommunityPoolBalanceQueryCallback;
};
export declare const TradeRouteCallback: {
    encode(message: TradeRouteCallback, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TradeRouteCallback;
    fromPartial(object: DeepPartial<TradeRouteCallback>): TradeRouteCallback;
};
