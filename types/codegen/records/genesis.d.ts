import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
export declare enum DepositRecord_Status {
    /** TRANSFER - pending transfer to delegate account */
    TRANSFER = 0,
    /** STAKE - pending staking on delegate account */
    STAKE = 1,
    UNRECOGNIZED = -1
}
export declare enum DepositRecord_StatusSDKType {
    /** TRANSFER - pending transfer to delegate account */
    TRANSFER = 0,
    /** STAKE - pending staking on delegate account */
    STAKE = 1,
    UNRECOGNIZED = -1
}
export declare function depositRecord_StatusFromJSON(object: any): DepositRecord_Status;
export declare function depositRecord_StatusToJSON(object: DepositRecord_Status): string;
export declare enum DepositRecord_Source {
    STRIDE = 0,
    WITHDRAWAL_ICA = 1,
    UNRECOGNIZED = -1
}
export declare enum DepositRecord_SourceSDKType {
    STRIDE = 0,
    WITHDRAWAL_ICA = 1,
    UNRECOGNIZED = -1
}
export declare function depositRecord_SourceFromJSON(object: any): DepositRecord_Source;
export declare function depositRecord_SourceToJSON(object: DepositRecord_Source): string;
export declare enum HostZoneUnbonding_Status {
    /** BONDED - tokens bonded on delegate account */
    BONDED = 0,
    /** UNBONDED - unbonding completed on delegate account */
    UNBONDED = 1,
    /** TRANSFERRED - transfer success */
    TRANSFERRED = 2,
    UNRECOGNIZED = -1
}
export declare enum HostZoneUnbonding_StatusSDKType {
    /** BONDED - tokens bonded on delegate account */
    BONDED = 0,
    /** UNBONDED - unbonding completed on delegate account */
    UNBONDED = 1,
    /** TRANSFERRED - transfer success */
    TRANSFERRED = 2,
    UNRECOGNIZED = -1
}
export declare function hostZoneUnbonding_StatusFromJSON(object: any): HostZoneUnbonding_Status;
export declare function hostZoneUnbonding_StatusToJSON(object: HostZoneUnbonding_Status): string;
export interface UserRedemptionRecord {
    /** {chain_id}.{epoch}.{sender} */
    id: string;
    sender: string;
    receiver: string;
    amount: Long;
    denom: string;
    hostZoneId: string;
    epochNumber: Long;
    claimIsPending: boolean;
}
export interface UserRedemptionRecordSDKType {
    /** {chain_id}.{epoch}.{sender} */
    id: string;
    sender: string;
    receiver: string;
    amount: Long;
    denom: string;
    hostZoneId: string;
    epochNumber: Long;
    claimIsPending: boolean;
}
/** Params defines the parameters for the module. */
export interface Params {
}
/** Params defines the parameters for the module. */
export interface ParamsSDKType {
}
export interface RecordsPacketData {
    noData?: NoData;
}
export interface RecordsPacketDataSDKType {
    noData?: NoDataSDKType;
}
export interface NoData {
}
export interface NoDataSDKType {
}
export interface DepositRecord {
    id: Long;
    amount: Long;
    denom: string;
    hostZoneId: string;
    status: DepositRecord_Status;
    depositEpochNumber: Long;
    source: DepositRecord_Source;
}
export interface DepositRecordSDKType {
    id: Long;
    amount: Long;
    denom: string;
    hostZoneId: string;
    status: DepositRecord_StatusSDKType;
    depositEpochNumber: Long;
    source: DepositRecord_SourceSDKType;
}
export interface HostZoneUnbonding {
    stTokenAmount: Long;
    nativeTokenAmount: Long;
    denom: string;
    hostZoneId: string;
    unbondingTime: Long;
    status: HostZoneUnbonding_Status;
    userRedemptionRecords: string[];
}
export interface HostZoneUnbondingSDKType {
    stTokenAmount: Long;
    nativeTokenAmount: Long;
    denom: string;
    hostZoneId: string;
    unbondingTime: Long;
    status: HostZoneUnbonding_StatusSDKType;
    userRedemptionRecords: string[];
}
export interface EpochUnbondingRecord {
    epochNumber: Long;
    hostZoneUnbondings: HostZoneUnbonding[];
}
export interface EpochUnbondingRecordSDKType {
    epochNumber: Long;
    hostZoneUnbondings: HostZoneUnbondingSDKType[];
}
/**
 * GenesisState defines the recordπs module's genesis state.
 * next id: 9
 */
export interface GenesisState {
    params: Params;
    portId: string;
    userRedemptionRecordList: UserRedemptionRecord[];
    userRedemptionRecordCount: Long;
    epochUnbondingRecordList: EpochUnbondingRecord[];
    depositRecordList: DepositRecord[];
    depositRecordCount: Long;
}
/**
 * GenesisState defines the recordπs module's genesis state.
 * next id: 9
 */
export interface GenesisStateSDKType {
    params: ParamsSDKType;
    port_id: string;
    userRedemptionRecordList: UserRedemptionRecordSDKType[];
    userRedemptionRecordCount: Long;
    epochUnbondingRecordList: EpochUnbondingRecordSDKType[];
    depositRecordList: DepositRecordSDKType[];
    depositRecordCount: Long;
}
export declare const UserRedemptionRecord: {
    encode(message: UserRedemptionRecord, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UserRedemptionRecord;
    fromPartial(object: DeepPartial<UserRedemptionRecord>): UserRedemptionRecord;
};
export declare const Params: {
    encode(_: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromPartial(_: DeepPartial<Params>): Params;
};
export declare const RecordsPacketData: {
    encode(message: RecordsPacketData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RecordsPacketData;
    fromPartial(object: DeepPartial<RecordsPacketData>): RecordsPacketData;
};
export declare const NoData: {
    encode(_: NoData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): NoData;
    fromPartial(_: DeepPartial<NoData>): NoData;
};
export declare const DepositRecord: {
    encode(message: DepositRecord, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DepositRecord;
    fromPartial(object: DeepPartial<DepositRecord>): DepositRecord;
};
export declare const HostZoneUnbonding: {
    encode(message: HostZoneUnbonding, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): HostZoneUnbonding;
    fromPartial(object: DeepPartial<HostZoneUnbonding>): HostZoneUnbonding;
};
export declare const EpochUnbondingRecord: {
    encode(message: EpochUnbondingRecord, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EpochUnbondingRecord;
    fromPartial(object: DeepPartial<EpochUnbondingRecord>): EpochUnbondingRecord;
};
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
