import { BaseAccount, BaseAccountSDKType } from "../cosmos/auth/v1beta1/auth";
import { Coin, CoinSDKType } from "../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
/**
 * BaseVestingAccount implements the VestingAccount interface. It contains all
 * the necessary fields needed for any vesting account implementation.
 */
export interface BaseVestingAccount {
    baseAccount: BaseAccount;
    originalVesting: Coin[];
    delegatedFree: Coin[];
    delegatedVesting: Coin[];
    endTime: Long;
}
/**
 * BaseVestingAccount implements the VestingAccount interface. It contains all
 * the necessary fields needed for any vesting account implementation.
 */
export interface BaseVestingAccountSDKType {
    base_account: BaseAccountSDKType;
    original_vesting: CoinSDKType[];
    delegated_free: CoinSDKType[];
    delegated_vesting: CoinSDKType[];
    end_time: Long;
}
/** Period defines a length of time and amount of coins that will vest. */
export interface Period {
    startTime: Long;
    length: Long;
    amount: Coin[];
}
/** Period defines a length of time and amount of coins that will vest. */
export interface PeriodSDKType {
    start_time: Long;
    length: Long;
    amount: CoinSDKType[];
}
/**
 * StridePeriodicVestingAccount implements the VestingAccount interface. It
 * periodically vests by unlocking coins during each specified period.
 */
export interface StridePeriodicVestingAccount {
    baseVestingAccount: BaseVestingAccount;
    vestingPeriods: Period[];
}
/**
 * StridePeriodicVestingAccount implements the VestingAccount interface. It
 * periodically vests by unlocking coins during each specified period.
 */
export interface StridePeriodicVestingAccountSDKType {
    base_vesting_account: BaseVestingAccountSDKType;
    vesting_periods: PeriodSDKType[];
}
export declare const BaseVestingAccount: {
    encode(message: BaseVestingAccount, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BaseVestingAccount;
    fromPartial(object: DeepPartial<BaseVestingAccount>): BaseVestingAccount;
};
export declare const Period: {
    encode(message: Period, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Period;
    fromPartial(object: DeepPartial<Period>): Period;
};
export declare const StridePeriodicVestingAccount: {
    encode(message: StridePeriodicVestingAccount, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StridePeriodicVestingAccount;
    fromPartial(object: DeepPartial<StridePeriodicVestingAccount>): StridePeriodicVestingAccount;
};
