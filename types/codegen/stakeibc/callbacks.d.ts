import { Coin, CoinSDKType } from "../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
/** ---------------------- Delegation Callbacks ---------------------- // */
export interface SplitDelegation {
    validator: string;
    amount: Long;
}
/** ---------------------- Delegation Callbacks ---------------------- // */
export interface SplitDelegationSDKType {
    validator: string;
    amount: Long;
}
export interface DelegateCallback {
    hostZoneId: string;
    depositRecordId: Long;
    splitDelegations: SplitDelegation[];
}
export interface DelegateCallbackSDKType {
    hostZoneId: string;
    depositRecordId: Long;
    splitDelegations: SplitDelegationSDKType[];
}
export interface ClaimCallback {
    userRedemptionRecordId: string;
    chainId: string;
    epochNumber: Long;
}
export interface ClaimCallbackSDKType {
    userRedemptionRecordId: string;
    chainId: string;
    epochNumber: Long;
}
/** ---------------------- Reinvest Callback ---------------------- // */
export interface ReinvestCallback {
    reinvestAmount: Coin;
    hostZoneId: string;
}
/** ---------------------- Reinvest Callback ---------------------- // */
export interface ReinvestCallbackSDKType {
    reinvestAmount: CoinSDKType;
    hostZoneId: string;
}
/** ---------------------- Undelegation Callbacks ---------------------- // */
export interface UndelegateCallback {
    hostZoneId: string;
    splitDelegations: SplitDelegation[];
    epochUnbondingRecordIds: Long[];
}
/** ---------------------- Undelegation Callbacks ---------------------- // */
export interface UndelegateCallbackSDKType {
    hostZoneId: string;
    splitDelegations: SplitDelegationSDKType[];
    epochUnbondingRecordIds: Long[];
}
/** ---------------------- Redemption Callbacks ---------------------- // */
export interface RedemptionCallback {
    hostZoneId: string;
    epochUnbondingRecordIds: Long[];
}
/** ---------------------- Redemption Callbacks ---------------------- // */
export interface RedemptionCallbackSDKType {
    hostZoneId: string;
    epochUnbondingRecordIds: Long[];
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
