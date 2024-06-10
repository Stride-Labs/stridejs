import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
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
export declare enum DepositRecord_StatusSDKType {
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
export declare enum HostZoneUnbonding_StatusSDKType {
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
export declare enum LSMTokenDeposit_StatusSDKType {
    DEPOSIT_PENDING = 0,
    TRANSFER_QUEUE = 1,
    TRANSFER_IN_PROGRESS = 2,
    TRANSFER_FAILED = 3,
    DETOKENIZATION_QUEUE = 4,
    DETOKENIZATION_IN_PROGRESS = 5,
    DETOKENIZATION_FAILED = 6,
    UNRECOGNIZED = -1
}
export declare function lSMTokenDeposit_StatusFromJSON(object: any): LSMTokenDeposit_Status;
export declare function lSMTokenDeposit_StatusToJSON(object: LSMTokenDeposit_Status): string;
export interface UserRedemptionRecord {
    /** {chain_id}.{epoch}.{receiver} */
    id: string;
    receiver: string;
    nativeTokenAmount: string;
    denom: string;
    hostZoneId: string;
    epochNumber: Long;
    claimIsPending: boolean;
    stTokenAmount: string;
}
export interface UserRedemptionRecordSDKType {
    /** {chain_id}.{epoch}.{receiver} */
    id: string;
    receiver: string;
    native_token_amount: string;
    denom: string;
    host_zone_id: string;
    epoch_number: Long;
    claim_is_pending: boolean;
    st_token_amount: string;
}
export interface DepositRecord {
    id: Long;
    amount: string;
    denom: string;
    hostZoneId: string;
    status: DepositRecord_Status;
    depositEpochNumber: Long;
    source: DepositRecord_Source;
}
export interface DepositRecordSDKType {
    id: Long;
    amount: string;
    denom: string;
    host_zone_id: string;
    status: DepositRecord_StatusSDKType;
    deposit_epoch_number: Long;
    source: DepositRecord_SourceSDKType;
}
export interface HostZoneUnbonding {
    stTokenAmount: string;
    nativeTokenAmount: string;
    denom: string;
    hostZoneId: string;
    unbondingTime: Long;
    status: HostZoneUnbonding_Status;
    userRedemptionRecords: string[];
}
export interface HostZoneUnbondingSDKType {
    st_token_amount: string;
    native_token_amount: string;
    denom: string;
    host_zone_id: string;
    unbonding_time: Long;
    status: HostZoneUnbonding_StatusSDKType;
    user_redemption_records: string[];
}
export interface EpochUnbondingRecord {
    epochNumber: Long;
    hostZoneUnbondings: HostZoneUnbonding[];
}
export interface EpochUnbondingRecordSDKType {
    epoch_number: Long;
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
export interface LSMTokenDepositSDKType {
    deposit_id: string;
    chain_id: string;
    denom: string;
    ibc_denom: string;
    staker_address: string;
    validator_address: string;
    amount: string;
    st_token: CoinSDKType;
    status: LSMTokenDeposit_StatusSDKType;
}
export declare const UserRedemptionRecord: {
    encode(message: UserRedemptionRecord, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UserRedemptionRecord;
    fromPartial(object: DeepPartial<UserRedemptionRecord>): UserRedemptionRecord;
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
export declare const LSMTokenDeposit: {
    encode(message: LSMTokenDeposit, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LSMTokenDeposit;
    fromPartial(object: DeepPartial<LSMTokenDeposit>): LSMTokenDeposit;
};
