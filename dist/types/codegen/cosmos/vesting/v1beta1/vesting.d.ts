import { BaseAccount, BaseAccountAmino, BaseAccountSDKType } from "../../auth/v1beta1/auth";
import { Coin, CoinAmino, CoinSDKType } from "../../base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
/**
 * BaseVestingAccount implements the VestingAccount interface. It contains all
 * the necessary fields needed for any vesting account implementation.
 */
export interface BaseVestingAccount {
    baseAccount?: BaseAccount;
    originalVesting: Coin[];
    delegatedFree: Coin[];
    delegatedVesting: Coin[];
    /** Vesting end time, as unix timestamp (in seconds). */
    endTime: bigint;
}
export interface BaseVestingAccountProtoMsg {
    typeUrl: "/cosmos.vesting.v1beta1.BaseVestingAccount";
    value: Uint8Array;
}
/**
 * BaseVestingAccount implements the VestingAccount interface. It contains all
 * the necessary fields needed for any vesting account implementation.
 * @name BaseVestingAccountAmino
 * @package cosmos.vesting.v1beta1
 * @see proto type: cosmos.vesting.v1beta1.BaseVestingAccount
 */
export interface BaseVestingAccountAmino {
    base_account?: BaseAccountAmino;
    original_vesting: CoinAmino[];
    delegated_free: CoinAmino[];
    delegated_vesting: CoinAmino[];
    /**
     * Vesting end time, as unix timestamp (in seconds).
     */
    end_time?: string;
}
export interface BaseVestingAccountAminoMsg {
    type: "cosmos-sdk/BaseVestingAccount";
    value: BaseVestingAccountAmino;
}
/**
 * BaseVestingAccount implements the VestingAccount interface. It contains all
 * the necessary fields needed for any vesting account implementation.
 */
export interface BaseVestingAccountSDKType {
    base_account?: BaseAccountSDKType;
    original_vesting: CoinSDKType[];
    delegated_free: CoinSDKType[];
    delegated_vesting: CoinSDKType[];
    end_time: bigint;
}
/**
 * ContinuousVestingAccount implements the VestingAccount interface. It
 * continuously vests by unlocking coins linearly with respect to time.
 */
export interface ContinuousVestingAccount {
    baseVestingAccount?: BaseVestingAccount;
    /** Vesting start time, as unix timestamp (in seconds). */
    startTime: bigint;
}
export interface ContinuousVestingAccountProtoMsg {
    typeUrl: "/cosmos.vesting.v1beta1.ContinuousVestingAccount";
    value: Uint8Array;
}
/**
 * ContinuousVestingAccount implements the VestingAccount interface. It
 * continuously vests by unlocking coins linearly with respect to time.
 * @name ContinuousVestingAccountAmino
 * @package cosmos.vesting.v1beta1
 * @see proto type: cosmos.vesting.v1beta1.ContinuousVestingAccount
 */
export interface ContinuousVestingAccountAmino {
    base_vesting_account?: BaseVestingAccountAmino;
    /**
     * Vesting start time, as unix timestamp (in seconds).
     */
    start_time?: string;
}
export interface ContinuousVestingAccountAminoMsg {
    type: "cosmos-sdk/ContinuousVestingAccount";
    value: ContinuousVestingAccountAmino;
}
/**
 * ContinuousVestingAccount implements the VestingAccount interface. It
 * continuously vests by unlocking coins linearly with respect to time.
 */
export interface ContinuousVestingAccountSDKType {
    base_vesting_account?: BaseVestingAccountSDKType;
    start_time: bigint;
}
/**
 * DelayedVestingAccount implements the VestingAccount interface. It vests all
 * coins after a specific time, but non prior. In other words, it keeps them
 * locked until a specified time.
 */
export interface DelayedVestingAccount {
    baseVestingAccount?: BaseVestingAccount;
}
export interface DelayedVestingAccountProtoMsg {
    typeUrl: "/cosmos.vesting.v1beta1.DelayedVestingAccount";
    value: Uint8Array;
}
/**
 * DelayedVestingAccount implements the VestingAccount interface. It vests all
 * coins after a specific time, but non prior. In other words, it keeps them
 * locked until a specified time.
 * @name DelayedVestingAccountAmino
 * @package cosmos.vesting.v1beta1
 * @see proto type: cosmos.vesting.v1beta1.DelayedVestingAccount
 */
export interface DelayedVestingAccountAmino {
    base_vesting_account?: BaseVestingAccountAmino;
}
export interface DelayedVestingAccountAminoMsg {
    type: "cosmos-sdk/DelayedVestingAccount";
    value: DelayedVestingAccountAmino;
}
/**
 * DelayedVestingAccount implements the VestingAccount interface. It vests all
 * coins after a specific time, but non prior. In other words, it keeps them
 * locked until a specified time.
 */
export interface DelayedVestingAccountSDKType {
    base_vesting_account?: BaseVestingAccountSDKType;
}
/** Period defines a length of time and amount of coins that will vest. */
export interface Period {
    /** Period duration in seconds. */
    length: bigint;
    amount: Coin[];
}
export interface PeriodProtoMsg {
    typeUrl: "/cosmos.vesting.v1beta1.Period";
    value: Uint8Array;
}
/**
 * Period defines a length of time and amount of coins that will vest.
 * @name PeriodAmino
 * @package cosmos.vesting.v1beta1
 * @see proto type: cosmos.vesting.v1beta1.Period
 */
export interface PeriodAmino {
    /**
     * Period duration in seconds.
     */
    length?: string;
    amount: CoinAmino[];
}
export interface PeriodAminoMsg {
    type: "cosmos-sdk/Period";
    value: PeriodAmino;
}
/** Period defines a length of time and amount of coins that will vest. */
export interface PeriodSDKType {
    length: bigint;
    amount: CoinSDKType[];
}
/**
 * PeriodicVestingAccount implements the VestingAccount interface. It
 * periodically vests by unlocking coins during each specified period.
 */
export interface PeriodicVestingAccount {
    baseVestingAccount?: BaseVestingAccount;
    startTime: bigint;
    vestingPeriods: Period[];
}
export interface PeriodicVestingAccountProtoMsg {
    typeUrl: "/cosmos.vesting.v1beta1.PeriodicVestingAccount";
    value: Uint8Array;
}
/**
 * PeriodicVestingAccount implements the VestingAccount interface. It
 * periodically vests by unlocking coins during each specified period.
 * @name PeriodicVestingAccountAmino
 * @package cosmos.vesting.v1beta1
 * @see proto type: cosmos.vesting.v1beta1.PeriodicVestingAccount
 */
export interface PeriodicVestingAccountAmino {
    base_vesting_account?: BaseVestingAccountAmino;
    start_time?: string;
    vesting_periods: PeriodAmino[];
}
export interface PeriodicVestingAccountAminoMsg {
    type: "cosmos-sdk/PeriodicVestingAccount";
    value: PeriodicVestingAccountAmino;
}
/**
 * PeriodicVestingAccount implements the VestingAccount interface. It
 * periodically vests by unlocking coins during each specified period.
 */
export interface PeriodicVestingAccountSDKType {
    base_vesting_account?: BaseVestingAccountSDKType;
    start_time: bigint;
    vesting_periods: PeriodSDKType[];
}
/**
 * PermanentLockedAccount implements the VestingAccount interface. It does
 * not ever release coins, locking them indefinitely. Coins in this account can
 * still be used for delegating and for governance votes even while locked.
 *
 * Since: cosmos-sdk 0.43
 */
export interface PermanentLockedAccount {
    baseVestingAccount?: BaseVestingAccount;
}
export interface PermanentLockedAccountProtoMsg {
    typeUrl: "/cosmos.vesting.v1beta1.PermanentLockedAccount";
    value: Uint8Array;
}
/**
 * PermanentLockedAccount implements the VestingAccount interface. It does
 * not ever release coins, locking them indefinitely. Coins in this account can
 * still be used for delegating and for governance votes even while locked.
 *
 * Since: cosmos-sdk 0.43
 * @name PermanentLockedAccountAmino
 * @package cosmos.vesting.v1beta1
 * @see proto type: cosmos.vesting.v1beta1.PermanentLockedAccount
 */
export interface PermanentLockedAccountAmino {
    base_vesting_account?: BaseVestingAccountAmino;
}
export interface PermanentLockedAccountAminoMsg {
    type: "cosmos-sdk/PermanentLockedAccount";
    value: PermanentLockedAccountAmino;
}
/**
 * PermanentLockedAccount implements the VestingAccount interface. It does
 * not ever release coins, locking them indefinitely. Coins in this account can
 * still be used for delegating and for governance votes even while locked.
 *
 * Since: cosmos-sdk 0.43
 */
export interface PermanentLockedAccountSDKType {
    base_vesting_account?: BaseVestingAccountSDKType;
}
export declare const BaseVestingAccount: {
    typeUrl: string;
    encode(message: BaseVestingAccount, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): BaseVestingAccount;
    fromPartial(object: Partial<BaseVestingAccount>): BaseVestingAccount;
    fromAmino(object: BaseVestingAccountAmino): BaseVestingAccount;
    toAmino(message: BaseVestingAccount): BaseVestingAccountAmino;
    fromAminoMsg(object: BaseVestingAccountAminoMsg): BaseVestingAccount;
    toAminoMsg(message: BaseVestingAccount): BaseVestingAccountAminoMsg;
    fromProtoMsg(message: BaseVestingAccountProtoMsg): BaseVestingAccount;
    toProto(message: BaseVestingAccount): Uint8Array;
    toProtoMsg(message: BaseVestingAccount): BaseVestingAccountProtoMsg;
};
export declare const ContinuousVestingAccount: {
    typeUrl: string;
    encode(message: ContinuousVestingAccount, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ContinuousVestingAccount;
    fromPartial(object: Partial<ContinuousVestingAccount>): ContinuousVestingAccount;
    fromAmino(object: ContinuousVestingAccountAmino): ContinuousVestingAccount;
    toAmino(message: ContinuousVestingAccount): ContinuousVestingAccountAmino;
    fromAminoMsg(object: ContinuousVestingAccountAminoMsg): ContinuousVestingAccount;
    toAminoMsg(message: ContinuousVestingAccount): ContinuousVestingAccountAminoMsg;
    fromProtoMsg(message: ContinuousVestingAccountProtoMsg): ContinuousVestingAccount;
    toProto(message: ContinuousVestingAccount): Uint8Array;
    toProtoMsg(message: ContinuousVestingAccount): ContinuousVestingAccountProtoMsg;
};
export declare const DelayedVestingAccount: {
    typeUrl: string;
    encode(message: DelayedVestingAccount, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): DelayedVestingAccount;
    fromPartial(object: Partial<DelayedVestingAccount>): DelayedVestingAccount;
    fromAmino(object: DelayedVestingAccountAmino): DelayedVestingAccount;
    toAmino(message: DelayedVestingAccount): DelayedVestingAccountAmino;
    fromAminoMsg(object: DelayedVestingAccountAminoMsg): DelayedVestingAccount;
    toAminoMsg(message: DelayedVestingAccount): DelayedVestingAccountAminoMsg;
    fromProtoMsg(message: DelayedVestingAccountProtoMsg): DelayedVestingAccount;
    toProto(message: DelayedVestingAccount): Uint8Array;
    toProtoMsg(message: DelayedVestingAccount): DelayedVestingAccountProtoMsg;
};
export declare const Period: {
    typeUrl: string;
    encode(message: Period, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Period;
    fromPartial(object: Partial<Period>): Period;
    fromAmino(object: PeriodAmino): Period;
    toAmino(message: Period): PeriodAmino;
    fromAminoMsg(object: PeriodAminoMsg): Period;
    toAminoMsg(message: Period): PeriodAminoMsg;
    fromProtoMsg(message: PeriodProtoMsg): Period;
    toProto(message: Period): Uint8Array;
    toProtoMsg(message: Period): PeriodProtoMsg;
};
export declare const PeriodicVestingAccount: {
    typeUrl: string;
    encode(message: PeriodicVestingAccount, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): PeriodicVestingAccount;
    fromPartial(object: Partial<PeriodicVestingAccount>): PeriodicVestingAccount;
    fromAmino(object: PeriodicVestingAccountAmino): PeriodicVestingAccount;
    toAmino(message: PeriodicVestingAccount): PeriodicVestingAccountAmino;
    fromAminoMsg(object: PeriodicVestingAccountAminoMsg): PeriodicVestingAccount;
    toAminoMsg(message: PeriodicVestingAccount): PeriodicVestingAccountAminoMsg;
    fromProtoMsg(message: PeriodicVestingAccountProtoMsg): PeriodicVestingAccount;
    toProto(message: PeriodicVestingAccount): Uint8Array;
    toProtoMsg(message: PeriodicVestingAccount): PeriodicVestingAccountProtoMsg;
};
export declare const PermanentLockedAccount: {
    typeUrl: string;
    encode(message: PermanentLockedAccount, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): PermanentLockedAccount;
    fromPartial(object: Partial<PermanentLockedAccount>): PermanentLockedAccount;
    fromAmino(object: PermanentLockedAccountAmino): PermanentLockedAccount;
    toAmino(message: PermanentLockedAccount): PermanentLockedAccountAmino;
    fromAminoMsg(object: PermanentLockedAccountAminoMsg): PermanentLockedAccount;
    toAminoMsg(message: PermanentLockedAccount): PermanentLockedAccountAminoMsg;
    fromProtoMsg(message: PermanentLockedAccountProtoMsg): PermanentLockedAccount;
    toProto(message: PermanentLockedAccount): Uint8Array;
    toProtoMsg(message: PermanentLockedAccount): PermanentLockedAccountProtoMsg;
};
