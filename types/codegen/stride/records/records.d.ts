import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../binary";
export declare enum DepositRecord_Status {
    /** TRANSFER_QUEUE - in transfer queue to be sent to the delegation ICA */
    TRANSFER_QUEUE = 0,
    /** TRANSFER_IN_PROGRESS - transfer in progress (IBC packet sent, ack not received) */
    TRANSFER_IN_PROGRESS = 2,
    /** DELEGATION_QUEUE - in staking queue on delegation ICA */
    DELEGATION_QUEUE = 1,
    /** DELEGATION_IN_PROGRESS - staking in progress (ICA packet sent, ack not received) */
    DELEGATION_IN_PROGRESS = 3,
    UNRECOGNIZED = -1
}
export declare const DepositRecord_StatusSDKType: typeof DepositRecord_Status;
export declare const DepositRecord_StatusAmino: typeof DepositRecord_Status;
export declare function depositRecord_StatusFromJSON(object: any): DepositRecord_Status;
export declare function depositRecord_StatusToJSON(object: DepositRecord_Status): string;
export declare enum DepositRecord_Source {
    STRIDE = 0,
    WITHDRAWAL_ICA = 1,
    UNRECOGNIZED = -1
}
export declare const DepositRecord_SourceSDKType: typeof DepositRecord_Source;
export declare const DepositRecord_SourceAmino: typeof DepositRecord_Source;
export declare function depositRecord_SourceFromJSON(object: any): DepositRecord_Source;
export declare function depositRecord_SourceToJSON(object: DepositRecord_Source): string;
export declare enum HostZoneUnbonding_Status {
    /** UNBONDING_QUEUE - tokens bonded on delegate account */
    UNBONDING_QUEUE = 0,
    UNBONDING_IN_PROGRESS = 3,
    /** EXIT_TRANSFER_QUEUE - unbonding completed on delegate account */
    EXIT_TRANSFER_QUEUE = 1,
    EXIT_TRANSFER_IN_PROGRESS = 4,
    /** CLAIMABLE - transfer success */
    CLAIMABLE = 2,
    UNRECOGNIZED = -1
}
export declare const HostZoneUnbonding_StatusSDKType: typeof HostZoneUnbonding_Status;
export declare const HostZoneUnbonding_StatusAmino: typeof HostZoneUnbonding_Status;
export declare function hostZoneUnbonding_StatusFromJSON(object: any): HostZoneUnbonding_Status;
export declare function hostZoneUnbonding_StatusToJSON(object: HostZoneUnbonding_Status): string;
export declare enum LSMTokenDeposit_Status {
    DEPOSIT_PENDING = 0,
    TRANSFER_QUEUE = 1,
    TRANSFER_IN_PROGRESS = 2,
    TRANSFER_FAILED = 3,
    DETOKENIZATION_QUEUE = 4,
    DETOKENIZATION_IN_PROGRESS = 5,
    DETOKENIZATION_FAILED = 6,
    UNRECOGNIZED = -1
}
export declare const LSMTokenDeposit_StatusSDKType: typeof LSMTokenDeposit_Status;
export declare const LSMTokenDeposit_StatusAmino: typeof LSMTokenDeposit_Status;
export declare function lSMTokenDeposit_StatusFromJSON(object: any): LSMTokenDeposit_Status;
export declare function lSMTokenDeposit_StatusToJSON(object: LSMTokenDeposit_Status): string;
export interface UserRedemptionRecord {
    /** {chain_id}.{epoch}.{receiver} */
    id: string;
    receiver: string;
    nativeTokenAmount: string;
    denom: string;
    hostZoneId: string;
    epochNumber: bigint;
    claimIsPending: boolean;
    stTokenAmount: string;
}
export interface UserRedemptionRecordProtoMsg {
    typeUrl: "/stride.records.UserRedemptionRecord";
    value: Uint8Array;
}
export interface UserRedemptionRecordAmino {
    /** {chain_id}.{epoch}.{receiver} */
    id?: string;
    receiver?: string;
    native_token_amount?: string;
    denom?: string;
    host_zone_id?: string;
    epoch_number?: string;
    claim_is_pending?: boolean;
    st_token_amount?: string;
}
export interface UserRedemptionRecordAminoMsg {
    type: "/stride.records.UserRedemptionRecord";
    value: UserRedemptionRecordAmino;
}
export interface UserRedemptionRecordSDKType {
    id: string;
    receiver: string;
    native_token_amount: string;
    denom: string;
    host_zone_id: string;
    epoch_number: bigint;
    claim_is_pending: boolean;
    st_token_amount: string;
}
export interface DepositRecord {
    id: bigint;
    amount: string;
    denom: string;
    hostZoneId: string;
    status: DepositRecord_Status;
    depositEpochNumber: bigint;
    source: DepositRecord_Source;
}
export interface DepositRecordProtoMsg {
    typeUrl: "/stride.records.DepositRecord";
    value: Uint8Array;
}
export interface DepositRecordAmino {
    id?: string;
    amount?: string;
    denom?: string;
    host_zone_id?: string;
    status?: DepositRecord_Status;
    deposit_epoch_number?: string;
    source?: DepositRecord_Source;
}
export interface DepositRecordAminoMsg {
    type: "/stride.records.DepositRecord";
    value: DepositRecordAmino;
}
export interface DepositRecordSDKType {
    id: bigint;
    amount: string;
    denom: string;
    host_zone_id: string;
    status: DepositRecord_Status;
    deposit_epoch_number: bigint;
    source: DepositRecord_Source;
}
export interface HostZoneUnbonding {
    stTokenAmount: string;
    nativeTokenAmount: string;
    denom: string;
    hostZoneId: string;
    unbondingTime: bigint;
    status: HostZoneUnbonding_Status;
    userRedemptionRecords: string[];
}
export interface HostZoneUnbondingProtoMsg {
    typeUrl: "/stride.records.HostZoneUnbonding";
    value: Uint8Array;
}
export interface HostZoneUnbondingAmino {
    st_token_amount?: string;
    native_token_amount?: string;
    denom?: string;
    host_zone_id?: string;
    unbonding_time?: string;
    status?: HostZoneUnbonding_Status;
    user_redemption_records?: string[];
}
export interface HostZoneUnbondingAminoMsg {
    type: "/stride.records.HostZoneUnbonding";
    value: HostZoneUnbondingAmino;
}
export interface HostZoneUnbondingSDKType {
    st_token_amount: string;
    native_token_amount: string;
    denom: string;
    host_zone_id: string;
    unbonding_time: bigint;
    status: HostZoneUnbonding_Status;
    user_redemption_records: string[];
}
export interface EpochUnbondingRecord {
    epochNumber: bigint;
    hostZoneUnbondings: HostZoneUnbonding[];
}
export interface EpochUnbondingRecordProtoMsg {
    typeUrl: "/stride.records.EpochUnbondingRecord";
    value: Uint8Array;
}
export interface EpochUnbondingRecordAmino {
    epoch_number?: string;
    host_zone_unbondings?: HostZoneUnbondingAmino[];
}
export interface EpochUnbondingRecordAminoMsg {
    type: "/stride.records.EpochUnbondingRecord";
    value: EpochUnbondingRecordAmino;
}
export interface EpochUnbondingRecordSDKType {
    epoch_number: bigint;
    host_zone_unbondings: HostZoneUnbondingSDKType[];
}
export interface LSMTokenDeposit {
    depositId: string;
    chainId: string;
    denom: string;
    ibcDenom: string;
    stakerAddress: string;
    validatorAddress: string;
    amount: string;
    stToken: Coin;
    status: LSMTokenDeposit_Status;
}
export interface LSMTokenDepositProtoMsg {
    typeUrl: "/stride.records.LSMTokenDeposit";
    value: Uint8Array;
}
export interface LSMTokenDepositAmino {
    deposit_id?: string;
    chain_id?: string;
    denom?: string;
    ibc_denom?: string;
    staker_address?: string;
    validator_address?: string;
    amount?: string;
    st_token?: CoinAmino;
    status?: LSMTokenDeposit_Status;
}
export interface LSMTokenDepositAminoMsg {
    type: "/stride.records.LSMTokenDeposit";
    value: LSMTokenDepositAmino;
}
export interface LSMTokenDepositSDKType {
    deposit_id: string;
    chain_id: string;
    denom: string;
    ibc_denom: string;
    staker_address: string;
    validator_address: string;
    amount: string;
    st_token: CoinSDKType;
    status: LSMTokenDeposit_Status;
}
export declare const UserRedemptionRecord: {
    typeUrl: string;
    encode(message: UserRedemptionRecord, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): UserRedemptionRecord;
    fromPartial(object: Partial<UserRedemptionRecord>): UserRedemptionRecord;
    fromAmino(object: UserRedemptionRecordAmino): UserRedemptionRecord;
    toAmino(message: UserRedemptionRecord): UserRedemptionRecordAmino;
    fromAminoMsg(object: UserRedemptionRecordAminoMsg): UserRedemptionRecord;
    fromProtoMsg(message: UserRedemptionRecordProtoMsg): UserRedemptionRecord;
    toProto(message: UserRedemptionRecord): Uint8Array;
    toProtoMsg(message: UserRedemptionRecord): UserRedemptionRecordProtoMsg;
};
export declare const DepositRecord: {
    typeUrl: string;
    encode(message: DepositRecord, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): DepositRecord;
    fromPartial(object: Partial<DepositRecord>): DepositRecord;
    fromAmino(object: DepositRecordAmino): DepositRecord;
    toAmino(message: DepositRecord): DepositRecordAmino;
    fromAminoMsg(object: DepositRecordAminoMsg): DepositRecord;
    fromProtoMsg(message: DepositRecordProtoMsg): DepositRecord;
    toProto(message: DepositRecord): Uint8Array;
    toProtoMsg(message: DepositRecord): DepositRecordProtoMsg;
};
export declare const HostZoneUnbonding: {
    typeUrl: string;
    encode(message: HostZoneUnbonding, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): HostZoneUnbonding;
    fromPartial(object: Partial<HostZoneUnbonding>): HostZoneUnbonding;
    fromAmino(object: HostZoneUnbondingAmino): HostZoneUnbonding;
    toAmino(message: HostZoneUnbonding): HostZoneUnbondingAmino;
    fromAminoMsg(object: HostZoneUnbondingAminoMsg): HostZoneUnbonding;
    fromProtoMsg(message: HostZoneUnbondingProtoMsg): HostZoneUnbonding;
    toProto(message: HostZoneUnbonding): Uint8Array;
    toProtoMsg(message: HostZoneUnbonding): HostZoneUnbondingProtoMsg;
};
export declare const EpochUnbondingRecord: {
    typeUrl: string;
    encode(message: EpochUnbondingRecord, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): EpochUnbondingRecord;
    fromPartial(object: Partial<EpochUnbondingRecord>): EpochUnbondingRecord;
    fromAmino(object: EpochUnbondingRecordAmino): EpochUnbondingRecord;
    toAmino(message: EpochUnbondingRecord): EpochUnbondingRecordAmino;
    fromAminoMsg(object: EpochUnbondingRecordAminoMsg): EpochUnbondingRecord;
    fromProtoMsg(message: EpochUnbondingRecordProtoMsg): EpochUnbondingRecord;
    toProto(message: EpochUnbondingRecord): Uint8Array;
    toProtoMsg(message: EpochUnbondingRecord): EpochUnbondingRecordProtoMsg;
};
export declare const LSMTokenDeposit: {
    typeUrl: string;
    encode(message: LSMTokenDeposit, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): LSMTokenDeposit;
    fromPartial(object: Partial<LSMTokenDeposit>): LSMTokenDeposit;
    fromAmino(object: LSMTokenDepositAmino): LSMTokenDeposit;
    toAmino(message: LSMTokenDeposit): LSMTokenDepositAmino;
    fromAminoMsg(object: LSMTokenDepositAminoMsg): LSMTokenDeposit;
    fromProtoMsg(message: LSMTokenDepositProtoMsg): LSMTokenDeposit;
    toProto(message: LSMTokenDeposit): Uint8Array;
    toProtoMsg(message: LSMTokenDeposit): LSMTokenDepositProtoMsg;
};
