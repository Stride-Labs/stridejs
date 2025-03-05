import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { LSMTokenDeposit, LSMTokenDepositAmino, LSMTokenDepositSDKType } from "../records/records";
import { HostZone, HostZoneAmino, HostZoneSDKType } from "./host_zone";
import { Validator, ValidatorAmino, ValidatorSDKType } from "./validator";
import { ICAAccountType } from "./ica_account";
import { BinaryReader, BinaryWriter } from "../../binary";
export interface SplitDelegation {
    validator: string;
    amount: string;
}
export interface SplitDelegationProtoMsg {
    typeUrl: "/stride.stakeibc.SplitDelegation";
    value: Uint8Array;
}
export interface SplitDelegationAmino {
    validator?: string;
    amount?: string;
}
export interface SplitDelegationAminoMsg {
    type: "/stride.stakeibc.SplitDelegation";
    value: SplitDelegationAmino;
}
export interface SplitDelegationSDKType {
    validator: string;
    amount: string;
}
export interface SplitUndelegation {
    validator: string;
    nativeTokenAmount: string;
}
export interface SplitUndelegationProtoMsg {
    typeUrl: "/stride.stakeibc.SplitUndelegation";
    value: Uint8Array;
}
export interface SplitUndelegationAmino {
    validator?: string;
    native_token_amount?: string;
}
export interface SplitUndelegationAminoMsg {
    type: "/stride.stakeibc.SplitUndelegation";
    value: SplitUndelegationAmino;
}
export interface SplitUndelegationSDKType {
    validator: string;
    native_token_amount: string;
}
export interface DelegateCallback {
    hostZoneId: string;
    depositRecordId: bigint;
    splitDelegations: SplitDelegation[];
}
export interface DelegateCallbackProtoMsg {
    typeUrl: "/stride.stakeibc.DelegateCallback";
    value: Uint8Array;
}
export interface DelegateCallbackAmino {
    host_zone_id?: string;
    deposit_record_id?: string;
    split_delegations?: SplitDelegationAmino[];
}
export interface DelegateCallbackAminoMsg {
    type: "/stride.stakeibc.DelegateCallback";
    value: DelegateCallbackAmino;
}
export interface DelegateCallbackSDKType {
    host_zone_id: string;
    deposit_record_id: bigint;
    split_delegations: SplitDelegationSDKType[];
}
export interface ClaimCallback {
    userRedemptionRecordId: string;
    chainId: string;
    epochNumber: bigint;
}
export interface ClaimCallbackProtoMsg {
    typeUrl: "/stride.stakeibc.ClaimCallback";
    value: Uint8Array;
}
export interface ClaimCallbackAmino {
    user_redemption_record_id?: string;
    chain_id?: string;
    epoch_number?: string;
}
export interface ClaimCallbackAminoMsg {
    type: "/stride.stakeibc.ClaimCallback";
    value: ClaimCallbackAmino;
}
export interface ClaimCallbackSDKType {
    user_redemption_record_id: string;
    chain_id: string;
    epoch_number: bigint;
}
export interface ReinvestCallback {
    reinvestAmount: Coin;
    hostZoneId: string;
}
export interface ReinvestCallbackProtoMsg {
    typeUrl: "/stride.stakeibc.ReinvestCallback";
    value: Uint8Array;
}
export interface ReinvestCallbackAmino {
    reinvest_amount?: CoinAmino;
    host_zone_id?: string;
}
export interface ReinvestCallbackAminoMsg {
    type: "/stride.stakeibc.ReinvestCallback";
    value: ReinvestCallbackAmino;
}
export interface ReinvestCallbackSDKType {
    reinvest_amount: CoinSDKType;
    host_zone_id: string;
}
export interface UndelegateCallback {
    hostZoneId: string;
    splitUndelegations: SplitUndelegation[];
    epochUnbondingRecordIds: bigint[];
}
export interface UndelegateCallbackProtoMsg {
    typeUrl: "/stride.stakeibc.UndelegateCallback";
    value: Uint8Array;
}
export interface UndelegateCallbackAmino {
    host_zone_id?: string;
    split_undelegations?: SplitUndelegationAmino[];
    epoch_unbonding_record_ids?: string[];
}
export interface UndelegateCallbackAminoMsg {
    type: "/stride.stakeibc.UndelegateCallback";
    value: UndelegateCallbackAmino;
}
export interface UndelegateCallbackSDKType {
    host_zone_id: string;
    split_undelegations: SplitUndelegationSDKType[];
    epoch_unbonding_record_ids: bigint[];
}
export interface RedemptionCallback {
    hostZoneId: string;
    epochUnbondingRecordIds: bigint[];
}
export interface RedemptionCallbackProtoMsg {
    typeUrl: "/stride.stakeibc.RedemptionCallback";
    value: Uint8Array;
}
export interface RedemptionCallbackAmino {
    host_zone_id?: string;
    epoch_unbonding_record_ids?: string[];
}
export interface RedemptionCallbackAminoMsg {
    type: "/stride.stakeibc.RedemptionCallback";
    value: RedemptionCallbackAmino;
}
export interface RedemptionCallbackSDKType {
    host_zone_id: string;
    epoch_unbonding_record_ids: bigint[];
}
export interface Rebalancing {
    srcValidator: string;
    dstValidator: string;
    amt: string;
}
export interface RebalancingProtoMsg {
    typeUrl: "/stride.stakeibc.Rebalancing";
    value: Uint8Array;
}
export interface RebalancingAmino {
    src_validator?: string;
    dst_validator?: string;
    amt?: string;
}
export interface RebalancingAminoMsg {
    type: "/stride.stakeibc.Rebalancing";
    value: RebalancingAmino;
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
export interface RebalanceCallbackProtoMsg {
    typeUrl: "/stride.stakeibc.RebalanceCallback";
    value: Uint8Array;
}
export interface RebalanceCallbackAmino {
    host_zone_id?: string;
    rebalancings?: RebalancingAmino[];
}
export interface RebalanceCallbackAminoMsg {
    type: "/stride.stakeibc.RebalanceCallback";
    value: RebalanceCallbackAmino;
}
export interface RebalanceCallbackSDKType {
    host_zone_id: string;
    rebalancings: RebalancingSDKType[];
}
export interface DetokenizeSharesCallback {
    deposit?: LSMTokenDeposit;
}
export interface DetokenizeSharesCallbackProtoMsg {
    typeUrl: "/stride.stakeibc.DetokenizeSharesCallback";
    value: Uint8Array;
}
export interface DetokenizeSharesCallbackAmino {
    deposit?: LSMTokenDepositAmino;
}
export interface DetokenizeSharesCallbackAminoMsg {
    type: "/stride.stakeibc.DetokenizeSharesCallback";
    value: DetokenizeSharesCallbackAmino;
}
export interface DetokenizeSharesCallbackSDKType {
    deposit?: LSMTokenDepositSDKType;
}
export interface LSMLiquidStake {
    deposit?: LSMTokenDeposit;
    hostZone?: HostZone;
    validator?: Validator;
}
export interface LSMLiquidStakeProtoMsg {
    typeUrl: "/stride.stakeibc.LSMLiquidStake";
    value: Uint8Array;
}
export interface LSMLiquidStakeAmino {
    deposit?: LSMTokenDepositAmino;
    host_zone?: HostZoneAmino;
    validator?: ValidatorAmino;
}
export interface LSMLiquidStakeAminoMsg {
    type: "/stride.stakeibc.LSMLiquidStake";
    value: LSMLiquidStakeAmino;
}
export interface LSMLiquidStakeSDKType {
    deposit?: LSMTokenDepositSDKType;
    host_zone?: HostZoneSDKType;
    validator?: ValidatorSDKType;
}
export interface ValidatorSharesToTokensQueryCallback {
    lsmLiquidStake?: LSMLiquidStake;
}
export interface ValidatorSharesToTokensQueryCallbackProtoMsg {
    typeUrl: "/stride.stakeibc.ValidatorSharesToTokensQueryCallback";
    value: Uint8Array;
}
export interface ValidatorSharesToTokensQueryCallbackAmino {
    lsm_liquid_stake?: LSMLiquidStakeAmino;
}
export interface ValidatorSharesToTokensQueryCallbackAminoMsg {
    type: "/stride.stakeibc.ValidatorSharesToTokensQueryCallback";
    value: ValidatorSharesToTokensQueryCallbackAmino;
}
export interface ValidatorSharesToTokensQueryCallbackSDKType {
    lsm_liquid_stake?: LSMLiquidStakeSDKType;
}
export interface DelegatorSharesQueryCallback {
    /** Validator delegation at the time the query is submitted */
    initialValidatorDelegation: string;
}
export interface DelegatorSharesQueryCallbackProtoMsg {
    typeUrl: "/stride.stakeibc.DelegatorSharesQueryCallback";
    value: Uint8Array;
}
export interface DelegatorSharesQueryCallbackAmino {
    /** Validator delegation at the time the query is submitted */
    initial_validator_delegation?: string;
}
export interface DelegatorSharesQueryCallbackAminoMsg {
    type: "/stride.stakeibc.DelegatorSharesQueryCallback";
    value: DelegatorSharesQueryCallbackAmino;
}
export interface DelegatorSharesQueryCallbackSDKType {
    initial_validator_delegation: string;
}
export interface CommunityPoolBalanceQueryCallback {
    icaType: ICAAccountType;
    denom: string;
}
export interface CommunityPoolBalanceQueryCallbackProtoMsg {
    typeUrl: "/stride.stakeibc.CommunityPoolBalanceQueryCallback";
    value: Uint8Array;
}
export interface CommunityPoolBalanceQueryCallbackAmino {
    ica_type?: ICAAccountType;
    denom?: string;
}
export interface CommunityPoolBalanceQueryCallbackAminoMsg {
    type: "/stride.stakeibc.CommunityPoolBalanceQueryCallback";
    value: CommunityPoolBalanceQueryCallbackAmino;
}
export interface CommunityPoolBalanceQueryCallbackSDKType {
    ica_type: ICAAccountType;
    denom: string;
}
export interface TradeRouteCallback {
    rewardDenom: string;
    hostDenom: string;
}
export interface TradeRouteCallbackProtoMsg {
    typeUrl: "/stride.stakeibc.TradeRouteCallback";
    value: Uint8Array;
}
export interface TradeRouteCallbackAmino {
    reward_denom?: string;
    host_denom?: string;
}
export interface TradeRouteCallbackAminoMsg {
    type: "/stride.stakeibc.TradeRouteCallback";
    value: TradeRouteCallbackAmino;
}
export interface TradeRouteCallbackSDKType {
    reward_denom: string;
    host_denom: string;
}
export declare const SplitDelegation: {
    typeUrl: string;
    encode(message: SplitDelegation, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): SplitDelegation;
    fromPartial(object: Partial<SplitDelegation>): SplitDelegation;
    fromAmino(object: SplitDelegationAmino): SplitDelegation;
    toAmino(message: SplitDelegation): SplitDelegationAmino;
    fromAminoMsg(object: SplitDelegationAminoMsg): SplitDelegation;
    fromProtoMsg(message: SplitDelegationProtoMsg): SplitDelegation;
    toProto(message: SplitDelegation): Uint8Array;
    toProtoMsg(message: SplitDelegation): SplitDelegationProtoMsg;
};
export declare const SplitUndelegation: {
    typeUrl: string;
    encode(message: SplitUndelegation, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): SplitUndelegation;
    fromPartial(object: Partial<SplitUndelegation>): SplitUndelegation;
    fromAmino(object: SplitUndelegationAmino): SplitUndelegation;
    toAmino(message: SplitUndelegation): SplitUndelegationAmino;
    fromAminoMsg(object: SplitUndelegationAminoMsg): SplitUndelegation;
    fromProtoMsg(message: SplitUndelegationProtoMsg): SplitUndelegation;
    toProto(message: SplitUndelegation): Uint8Array;
    toProtoMsg(message: SplitUndelegation): SplitUndelegationProtoMsg;
};
export declare const DelegateCallback: {
    typeUrl: string;
    encode(message: DelegateCallback, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): DelegateCallback;
    fromPartial(object: Partial<DelegateCallback>): DelegateCallback;
    fromAmino(object: DelegateCallbackAmino): DelegateCallback;
    toAmino(message: DelegateCallback): DelegateCallbackAmino;
    fromAminoMsg(object: DelegateCallbackAminoMsg): DelegateCallback;
    fromProtoMsg(message: DelegateCallbackProtoMsg): DelegateCallback;
    toProto(message: DelegateCallback): Uint8Array;
    toProtoMsg(message: DelegateCallback): DelegateCallbackProtoMsg;
};
export declare const ClaimCallback: {
    typeUrl: string;
    encode(message: ClaimCallback, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ClaimCallback;
    fromPartial(object: Partial<ClaimCallback>): ClaimCallback;
    fromAmino(object: ClaimCallbackAmino): ClaimCallback;
    toAmino(message: ClaimCallback): ClaimCallbackAmino;
    fromAminoMsg(object: ClaimCallbackAminoMsg): ClaimCallback;
    fromProtoMsg(message: ClaimCallbackProtoMsg): ClaimCallback;
    toProto(message: ClaimCallback): Uint8Array;
    toProtoMsg(message: ClaimCallback): ClaimCallbackProtoMsg;
};
export declare const ReinvestCallback: {
    typeUrl: string;
    encode(message: ReinvestCallback, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ReinvestCallback;
    fromPartial(object: Partial<ReinvestCallback>): ReinvestCallback;
    fromAmino(object: ReinvestCallbackAmino): ReinvestCallback;
    toAmino(message: ReinvestCallback): ReinvestCallbackAmino;
    fromAminoMsg(object: ReinvestCallbackAminoMsg): ReinvestCallback;
    fromProtoMsg(message: ReinvestCallbackProtoMsg): ReinvestCallback;
    toProto(message: ReinvestCallback): Uint8Array;
    toProtoMsg(message: ReinvestCallback): ReinvestCallbackProtoMsg;
};
export declare const UndelegateCallback: {
    typeUrl: string;
    encode(message: UndelegateCallback, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): UndelegateCallback;
    fromPartial(object: Partial<UndelegateCallback>): UndelegateCallback;
    fromAmino(object: UndelegateCallbackAmino): UndelegateCallback;
    toAmino(message: UndelegateCallback): UndelegateCallbackAmino;
    fromAminoMsg(object: UndelegateCallbackAminoMsg): UndelegateCallback;
    fromProtoMsg(message: UndelegateCallbackProtoMsg): UndelegateCallback;
    toProto(message: UndelegateCallback): Uint8Array;
    toProtoMsg(message: UndelegateCallback): UndelegateCallbackProtoMsg;
};
export declare const RedemptionCallback: {
    typeUrl: string;
    encode(message: RedemptionCallback, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): RedemptionCallback;
    fromPartial(object: Partial<RedemptionCallback>): RedemptionCallback;
    fromAmino(object: RedemptionCallbackAmino): RedemptionCallback;
    toAmino(message: RedemptionCallback): RedemptionCallbackAmino;
    fromAminoMsg(object: RedemptionCallbackAminoMsg): RedemptionCallback;
    fromProtoMsg(message: RedemptionCallbackProtoMsg): RedemptionCallback;
    toProto(message: RedemptionCallback): Uint8Array;
    toProtoMsg(message: RedemptionCallback): RedemptionCallbackProtoMsg;
};
export declare const Rebalancing: {
    typeUrl: string;
    encode(message: Rebalancing, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Rebalancing;
    fromPartial(object: Partial<Rebalancing>): Rebalancing;
    fromAmino(object: RebalancingAmino): Rebalancing;
    toAmino(message: Rebalancing): RebalancingAmino;
    fromAminoMsg(object: RebalancingAminoMsg): Rebalancing;
    fromProtoMsg(message: RebalancingProtoMsg): Rebalancing;
    toProto(message: Rebalancing): Uint8Array;
    toProtoMsg(message: Rebalancing): RebalancingProtoMsg;
};
export declare const RebalanceCallback: {
    typeUrl: string;
    encode(message: RebalanceCallback, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): RebalanceCallback;
    fromPartial(object: Partial<RebalanceCallback>): RebalanceCallback;
    fromAmino(object: RebalanceCallbackAmino): RebalanceCallback;
    toAmino(message: RebalanceCallback): RebalanceCallbackAmino;
    fromAminoMsg(object: RebalanceCallbackAminoMsg): RebalanceCallback;
    fromProtoMsg(message: RebalanceCallbackProtoMsg): RebalanceCallback;
    toProto(message: RebalanceCallback): Uint8Array;
    toProtoMsg(message: RebalanceCallback): RebalanceCallbackProtoMsg;
};
export declare const DetokenizeSharesCallback: {
    typeUrl: string;
    encode(message: DetokenizeSharesCallback, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): DetokenizeSharesCallback;
    fromPartial(object: Partial<DetokenizeSharesCallback>): DetokenizeSharesCallback;
    fromAmino(object: DetokenizeSharesCallbackAmino): DetokenizeSharesCallback;
    toAmino(message: DetokenizeSharesCallback): DetokenizeSharesCallbackAmino;
    fromAminoMsg(object: DetokenizeSharesCallbackAminoMsg): DetokenizeSharesCallback;
    fromProtoMsg(message: DetokenizeSharesCallbackProtoMsg): DetokenizeSharesCallback;
    toProto(message: DetokenizeSharesCallback): Uint8Array;
    toProtoMsg(message: DetokenizeSharesCallback): DetokenizeSharesCallbackProtoMsg;
};
export declare const LSMLiquidStake: {
    typeUrl: string;
    encode(message: LSMLiquidStake, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): LSMLiquidStake;
    fromPartial(object: Partial<LSMLiquidStake>): LSMLiquidStake;
    fromAmino(object: LSMLiquidStakeAmino): LSMLiquidStake;
    toAmino(message: LSMLiquidStake): LSMLiquidStakeAmino;
    fromAminoMsg(object: LSMLiquidStakeAminoMsg): LSMLiquidStake;
    fromProtoMsg(message: LSMLiquidStakeProtoMsg): LSMLiquidStake;
    toProto(message: LSMLiquidStake): Uint8Array;
    toProtoMsg(message: LSMLiquidStake): LSMLiquidStakeProtoMsg;
};
export declare const ValidatorSharesToTokensQueryCallback: {
    typeUrl: string;
    encode(message: ValidatorSharesToTokensQueryCallback, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ValidatorSharesToTokensQueryCallback;
    fromPartial(object: Partial<ValidatorSharesToTokensQueryCallback>): ValidatorSharesToTokensQueryCallback;
    fromAmino(object: ValidatorSharesToTokensQueryCallbackAmino): ValidatorSharesToTokensQueryCallback;
    toAmino(message: ValidatorSharesToTokensQueryCallback): ValidatorSharesToTokensQueryCallbackAmino;
    fromAminoMsg(object: ValidatorSharesToTokensQueryCallbackAminoMsg): ValidatorSharesToTokensQueryCallback;
    fromProtoMsg(message: ValidatorSharesToTokensQueryCallbackProtoMsg): ValidatorSharesToTokensQueryCallback;
    toProto(message: ValidatorSharesToTokensQueryCallback): Uint8Array;
    toProtoMsg(message: ValidatorSharesToTokensQueryCallback): ValidatorSharesToTokensQueryCallbackProtoMsg;
};
export declare const DelegatorSharesQueryCallback: {
    typeUrl: string;
    encode(message: DelegatorSharesQueryCallback, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): DelegatorSharesQueryCallback;
    fromPartial(object: Partial<DelegatorSharesQueryCallback>): DelegatorSharesQueryCallback;
    fromAmino(object: DelegatorSharesQueryCallbackAmino): DelegatorSharesQueryCallback;
    toAmino(message: DelegatorSharesQueryCallback): DelegatorSharesQueryCallbackAmino;
    fromAminoMsg(object: DelegatorSharesQueryCallbackAminoMsg): DelegatorSharesQueryCallback;
    fromProtoMsg(message: DelegatorSharesQueryCallbackProtoMsg): DelegatorSharesQueryCallback;
    toProto(message: DelegatorSharesQueryCallback): Uint8Array;
    toProtoMsg(message: DelegatorSharesQueryCallback): DelegatorSharesQueryCallbackProtoMsg;
};
export declare const CommunityPoolBalanceQueryCallback: {
    typeUrl: string;
    encode(message: CommunityPoolBalanceQueryCallback, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): CommunityPoolBalanceQueryCallback;
    fromPartial(object: Partial<CommunityPoolBalanceQueryCallback>): CommunityPoolBalanceQueryCallback;
    fromAmino(object: CommunityPoolBalanceQueryCallbackAmino): CommunityPoolBalanceQueryCallback;
    toAmino(message: CommunityPoolBalanceQueryCallback): CommunityPoolBalanceQueryCallbackAmino;
    fromAminoMsg(object: CommunityPoolBalanceQueryCallbackAminoMsg): CommunityPoolBalanceQueryCallback;
    fromProtoMsg(message: CommunityPoolBalanceQueryCallbackProtoMsg): CommunityPoolBalanceQueryCallback;
    toProto(message: CommunityPoolBalanceQueryCallback): Uint8Array;
    toProtoMsg(message: CommunityPoolBalanceQueryCallback): CommunityPoolBalanceQueryCallbackProtoMsg;
};
export declare const TradeRouteCallback: {
    typeUrl: string;
    encode(message: TradeRouteCallback, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): TradeRouteCallback;
    fromPartial(object: Partial<TradeRouteCallback>): TradeRouteCallback;
    fromAmino(object: TradeRouteCallbackAmino): TradeRouteCallback;
    toAmino(message: TradeRouteCallback): TradeRouteCallbackAmino;
    fromAminoMsg(object: TradeRouteCallbackAminoMsg): TradeRouteCallback;
    fromProtoMsg(message: TradeRouteCallbackProtoMsg): TradeRouteCallback;
    toProto(message: TradeRouteCallback): Uint8Array;
    toProtoMsg(message: TradeRouteCallback): TradeRouteCallbackProtoMsg;
};
