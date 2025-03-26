import { BaseAccount, BaseAccountAmino, BaseAccountSDKType } from "../../cosmos/auth/v1beta1/auth";
import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../binary";
/**
 * BaseVestingAccount implements the VestingAccount interface. It contains all
 * the necessary fields needed for any vesting account implementation.
 */
export interface BaseVestingAccount {
    baseAccount?: BaseAccount;
    originalVesting: Coin[];
    delegatedFree: Coin[];
    delegatedVesting: Coin[];
    endTime: bigint;
}
export interface BaseVestingAccountProtoMsg {
    typeUrl: "/stride.vesting.BaseVestingAccount";
    value: Uint8Array;
}
/**
 * BaseVestingAccount implements the VestingAccount interface. It contains all
 * the necessary fields needed for any vesting account implementation.
 */
export interface BaseVestingAccountAmino {
    base_account?: BaseAccountAmino;
    original_vesting?: CoinAmino[];
    delegated_free?: CoinAmino[];
    delegated_vesting?: CoinAmino[];
    end_time?: string;
}
export interface BaseVestingAccountAminoMsg {
    type: "/stride.vesting.BaseVestingAccount";
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
/** Period defines a length of time and amount of coins that will vest. */
export interface Period {
    startTime: bigint;
    length: bigint;
    amount: Coin[];
    actionType: number;
}
export interface PeriodProtoMsg {
    typeUrl: "/stride.vesting.Period";
    value: Uint8Array;
}
/** Period defines a length of time and amount of coins that will vest. */
export interface PeriodAmino {
    start_time?: string;
    length?: string;
    amount?: CoinAmino[];
    action_type?: number;
}
export interface PeriodAminoMsg {
    type: "/stride.vesting.Period";
    value: PeriodAmino;
}
/** Period defines a length of time and amount of coins that will vest. */
export interface PeriodSDKType {
    start_time: bigint;
    length: bigint;
    amount: CoinSDKType[];
    action_type: number;
}
/**
 * StridePeriodicVestingAccount implements the VestingAccount interface. It
 * periodically vests by unlocking coins during each specified period.
 */
export interface StridePeriodicVestingAccount {
    baseVestingAccount?: BaseVestingAccount;
    vestingPeriods: Period[];
}
export interface StridePeriodicVestingAccountProtoMsg {
    typeUrl: "/stride.vesting.StridePeriodicVestingAccount";
    value: Uint8Array;
}
/**
 * StridePeriodicVestingAccount implements the VestingAccount interface. It
 * periodically vests by unlocking coins during each specified period.
 */
export interface StridePeriodicVestingAccountAmino {
    base_vesting_account?: BaseVestingAccountAmino;
    vesting_periods?: PeriodAmino[];
}
export interface StridePeriodicVestingAccountAminoMsg {
    type: "cosmos-sdk/StridePeriodicVestingAccount";
    value: StridePeriodicVestingAccountAmino;
}
/**
 * StridePeriodicVestingAccount implements the VestingAccount interface. It
 * periodically vests by unlocking coins during each specified period.
 */
export interface StridePeriodicVestingAccountSDKType {
    base_vesting_account?: BaseVestingAccountSDKType;
    vesting_periods: PeriodSDKType[];
}
export declare const BaseVestingAccount: {
    typeUrl: string;
    encode(message: BaseVestingAccount, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): BaseVestingAccount;
    fromPartial(object: Partial<BaseVestingAccount>): BaseVestingAccount;
    fromAmino(object: BaseVestingAccountAmino): BaseVestingAccount;
    toAmino(message: BaseVestingAccount): BaseVestingAccountAmino;
    fromAminoMsg(object: BaseVestingAccountAminoMsg): BaseVestingAccount;
    fromProtoMsg(message: BaseVestingAccountProtoMsg): BaseVestingAccount;
    toProto(message: BaseVestingAccount): Uint8Array;
    toProtoMsg(message: BaseVestingAccount): BaseVestingAccountProtoMsg;
};
export declare const Period: {
    typeUrl: string;
    encode(message: Period, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Period;
    fromPartial(object: Partial<Period>): Period;
    fromAmino(object: PeriodAmino): Period;
    toAmino(message: Period): PeriodAmino;
    fromAminoMsg(object: PeriodAminoMsg): Period;
    fromProtoMsg(message: PeriodProtoMsg): Period;
    toProto(message: Period): Uint8Array;
    toProtoMsg(message: Period): PeriodProtoMsg;
};
export declare const StridePeriodicVestingAccount: {
    typeUrl: string;
    encode(message: StridePeriodicVestingAccount, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): StridePeriodicVestingAccount;
    fromPartial(object: Partial<StridePeriodicVestingAccount>): StridePeriodicVestingAccount;
    fromAmino(object: StridePeriodicVestingAccountAmino): StridePeriodicVestingAccount;
    toAmino(message: StridePeriodicVestingAccount): StridePeriodicVestingAccountAmino;
    fromAminoMsg(object: StridePeriodicVestingAccountAminoMsg): StridePeriodicVestingAccount;
    toAminoMsg(message: StridePeriodicVestingAccount): StridePeriodicVestingAccountAminoMsg;
    fromProtoMsg(message: StridePeriodicVestingAccountProtoMsg): StridePeriodicVestingAccount;
    toProto(message: StridePeriodicVestingAccount): Uint8Array;
    toProtoMsg(message: StridePeriodicVestingAccount): StridePeriodicVestingAccountProtoMsg;
};
