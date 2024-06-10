import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
/**
 * Status fields for a delegation record
 * Note: There is an important assumption here that tokens in the deposit
 * account should not be tracked by these records. The record is created as soon
 * as the tokens leave stride
 * Additionally, the GetActiveDelegationRecords query filters for records that
 * are either TRANSFER_IN_PROGERSS or DELEGATION_QUEUE. If a new active status
 * is added, the keeper must be modified
 */
export declare enum DelegationRecordStatus {
    /**
     * TRANSFER_IN_PROGRESS - TRANSFER_IN_PROGRESS indicates the native tokens are being sent from the
     *  deposit account to the delegation account
     */
    TRANSFER_IN_PROGRESS = 0,
    /**
     * TRANSFER_FAILED - TRANSFER_FAILED indicates that the transfer either timed out or was an ack
     *  failure
     */
    TRANSFER_FAILED = 1,
    /**
     * DELEGATION_QUEUE - DELEGATION_QUEUE indicates the tokens have landed on the host zone and are
     *  ready to be delegated
     */
    DELEGATION_QUEUE = 2,
    /** DELEGATION_COMPLETE - DELEGATION_COMPLETE indicates the delegation has been completed */
    DELEGATION_COMPLETE = 3,
    UNRECOGNIZED = -1
}
/**
 * Status fields for a delegation record
 * Note: There is an important assumption here that tokens in the deposit
 * account should not be tracked by these records. The record is created as soon
 * as the tokens leave stride
 * Additionally, the GetActiveDelegationRecords query filters for records that
 * are either TRANSFER_IN_PROGERSS or DELEGATION_QUEUE. If a new active status
 * is added, the keeper must be modified
 */
export declare enum DelegationRecordStatusSDKType {
    /**
     * TRANSFER_IN_PROGRESS - TRANSFER_IN_PROGRESS indicates the native tokens are being sent from the
     *  deposit account to the delegation account
     */
    TRANSFER_IN_PROGRESS = 0,
    /**
     * TRANSFER_FAILED - TRANSFER_FAILED indicates that the transfer either timed out or was an ack
     *  failure
     */
    TRANSFER_FAILED = 1,
    /**
     * DELEGATION_QUEUE - DELEGATION_QUEUE indicates the tokens have landed on the host zone and are
     *  ready to be delegated
     */
    DELEGATION_QUEUE = 2,
    /** DELEGATION_COMPLETE - DELEGATION_COMPLETE indicates the delegation has been completed */
    DELEGATION_COMPLETE = 3,
    UNRECOGNIZED = -1
}
export declare function delegationRecordStatusFromJSON(object: any): DelegationRecordStatus;
export declare function delegationRecordStatusToJSON(object: DelegationRecordStatus): string;
/** Status fields for an unbonding record */
export declare enum UnbondingRecordStatus {
    /**
     * ACCUMULATING_REDEMPTIONS - ACCUMULATING_REDEMPTIONS indicates redemptions are still being accumulated
     *  on this record
     */
    ACCUMULATING_REDEMPTIONS = 0,
    /**
     * UNBONDING_QUEUE - UNBONDING_QUEUE indicates the unbond amount for this epoch has been froze
     *  and the tokens are ready to be unbonded on the host zone
     */
    UNBONDING_QUEUE = 1,
    /**
     * UNBONDING_IN_PROGRESS - UNBONDING_IN_PROGRESS indicates the unbonding is currently in progress on
     *  the host zone
     */
    UNBONDING_IN_PROGRESS = 2,
    /**
     * UNBONDED - UNBONDED indicates the unbonding is finished on the host zone and the
     *  tokens are still in the delegation account
     */
    UNBONDED = 3,
    /**
     * CLAIMABLE - CLAIMABLE indicates the unbonded tokens have been swept to stride and are
     *  ready to be distributed to users
     */
    CLAIMABLE = 4,
    /** CLAIMED - CLAIMED indicates the full unbonding cycle has been completed */
    CLAIMED = 5,
    UNRECOGNIZED = -1
}
/** Status fields for an unbonding record */
export declare enum UnbondingRecordStatusSDKType {
    /**
     * ACCUMULATING_REDEMPTIONS - ACCUMULATING_REDEMPTIONS indicates redemptions are still being accumulated
     *  on this record
     */
    ACCUMULATING_REDEMPTIONS = 0,
    /**
     * UNBONDING_QUEUE - UNBONDING_QUEUE indicates the unbond amount for this epoch has been froze
     *  and the tokens are ready to be unbonded on the host zone
     */
    UNBONDING_QUEUE = 1,
    /**
     * UNBONDING_IN_PROGRESS - UNBONDING_IN_PROGRESS indicates the unbonding is currently in progress on
     *  the host zone
     */
    UNBONDING_IN_PROGRESS = 2,
    /**
     * UNBONDED - UNBONDED indicates the unbonding is finished on the host zone and the
     *  tokens are still in the delegation account
     */
    UNBONDED = 3,
    /**
     * CLAIMABLE - CLAIMABLE indicates the unbonded tokens have been swept to stride and are
     *  ready to be distributed to users
     */
    CLAIMABLE = 4,
    /** CLAIMED - CLAIMED indicates the full unbonding cycle has been completed */
    CLAIMED = 5,
    UNRECOGNIZED = -1
}
export declare function unbondingRecordStatusFromJSON(object: any): UnbondingRecordStatus;
export declare function unbondingRecordStatusToJSON(object: UnbondingRecordStatus): string;
export interface HostZone {
    /** Chain ID */
    chainId: string;
    /** Native token denom on the host zone (e.g. adym) */
    nativeTokenDenom: string;
    /** IBC denom of the native token as it lives on stride (e.g. ibc/...) */
    nativeTokenIbcDenom: string;
    /** Transfer channel ID from stride to the host zone */
    transferChannelId: string;
    /** Operator controlled delegation address on the host zone */
    delegationAddress: string;
    /** Operator controlled reward address on the host zone */
    rewardAddress: string;
    /** Deposit address on stride */
    depositAddress: string;
    /** Redemption address on stride */
    redemptionAddress: string;
    /** Claim address on stride */
    claimAddress: string;
    /** operator address set by safe, on stride */
    operatorAddressOnStride: string;
    /** admin address set upon host zone creation,  on stride */
    safeAddressOnStride: string;
    /** Previous redemption rate */
    lastRedemptionRate: string;
    /** Current redemption rate */
    redemptionRate: string;
    /** Min outer redemption rate - adjusted by governance */
    minRedemptionRate: string;
    /** Max outer redemption rate - adjusted by governance */
    maxRedemptionRate: string;
    /** Min inner redemption rate - adjusted by controller */
    minInnerRedemptionRate: string;
    /** Max inner redemption rate - adjusted by controller */
    maxInnerRedemptionRate: string;
    /** Total delegated balance on the host zone delegation account */
    delegatedBalance: string;
    /** The undelegation period for Dymension in days */
    unbondingPeriodSeconds: Long;
    /** Indicates whether the host zone has been halted */
    halted: boolean;
}
export interface HostZoneSDKType {
    /** Chain ID */
    chain_id: string;
    /** Native token denom on the host zone (e.g. adym) */
    native_token_denom: string;
    /** IBC denom of the native token as it lives on stride (e.g. ibc/...) */
    native_token_ibc_denom: string;
    /** Transfer channel ID from stride to the host zone */
    transfer_channel_id: string;
    /** Operator controlled delegation address on the host zone */
    delegation_address: string;
    /** Operator controlled reward address on the host zone */
    reward_address: string;
    /** Deposit address on stride */
    deposit_address: string;
    /** Redemption address on stride */
    redemption_address: string;
    /** Claim address on stride */
    claim_address: string;
    /** operator address set by safe, on stride */
    operator_address_on_stride: string;
    /** admin address set upon host zone creation,  on stride */
    safe_address_on_stride: string;
    /** Previous redemption rate */
    last_redemption_rate: string;
    /** Current redemption rate */
    redemption_rate: string;
    /** Min outer redemption rate - adjusted by governance */
    min_redemption_rate: string;
    /** Max outer redemption rate - adjusted by governance */
    max_redemption_rate: string;
    /** Min inner redemption rate - adjusted by controller */
    min_inner_redemption_rate: string;
    /** Max inner redemption rate - adjusted by controller */
    max_inner_redemption_rate: string;
    /** Total delegated balance on the host zone delegation account */
    delegated_balance: string;
    /** The undelegation period for Dymension in days */
    unbonding_period_seconds: Long;
    /** Indicates whether the host zone has been halted */
    halted: boolean;
}
/**
 * DelegationRecords track the aggregate liquid stakes and delegations
 * for a given epoch
 * Note: There is an important assumption here that tokens in the deposit
 * account should not be tracked by these records. The record is created as soon
 * as the tokens leave stride
 */
export interface DelegationRecord {
    /** Deposit record unique ID */
    id: Long;
    /** The amount of native tokens that should be delegated */
    nativeAmount: string;
    /** The status indicating the point in the delegation's lifecycle */
    status: DelegationRecordStatus;
    /** The tx hash of the delegation on the host zone */
    txHash: string;
}
/**
 * DelegationRecords track the aggregate liquid stakes and delegations
 * for a given epoch
 * Note: There is an important assumption here that tokens in the deposit
 * account should not be tracked by these records. The record is created as soon
 * as the tokens leave stride
 */
export interface DelegationRecordSDKType {
    /** Deposit record unique ID */
    id: Long;
    /** The amount of native tokens that should be delegated */
    native_amount: string;
    /** The status indicating the point in the delegation's lifecycle */
    status: DelegationRecordStatusSDKType;
    /** The tx hash of the delegation on the host zone */
    tx_hash: string;
}
/** UnbondingRecords track the aggregate unbondings across an epoch */
export interface UnbondingRecord {
    /** Unbonding record ID */
    id: Long;
    /** The status indicating the point in the delegation's lifecycle */
    status: UnbondingRecordStatus;
    /** The amount of stTokens that were redeemed */
    stTokenAmount: string;
    /** The corresponding amount of native tokens that should be unbonded */
    nativeAmount: string;
    /** The Unix timestamp (in seconds) at which the unbonding completes */
    unbondingCompletionTimeSeconds: Long;
    /** The tx hash of the undelegation on the host zone */
    undelegationTxHash: string;
    /** The tx hash of the unbonded token sweep on the host zone */
    unbondedTokenSweepTxHash: string;
}
/** UnbondingRecords track the aggregate unbondings across an epoch */
export interface UnbondingRecordSDKType {
    /** Unbonding record ID */
    id: Long;
    /** The status indicating the point in the delegation's lifecycle */
    status: UnbondingRecordStatusSDKType;
    /** The amount of stTokens that were redeemed */
    st_token_amount: string;
    /** The corresponding amount of native tokens that should be unbonded */
    native_amount: string;
    /** The Unix timestamp (in seconds) at which the unbonding completes */
    unbonding_completion_time_seconds: Long;
    /** The tx hash of the undelegation on the host zone */
    undelegation_tx_hash: string;
    /** The tx hash of the unbonded token sweep on the host zone */
    unbonded_token_sweep_tx_hash: string;
}
/** RedemptionRecords track an individual user's redemption claims */
export interface RedemptionRecord {
    /** Unbonding record ID */
    unbondingRecordId: Long;
    /** Redeemer */
    redeemer: string;
    /** The amount of stTokens that were redeemed */
    stTokenAmount: string;
    /** The corresponding amount of native tokens that should be unbonded */
    nativeAmount: string;
}
/** RedemptionRecords track an individual user's redemption claims */
export interface RedemptionRecordSDKType {
    /** Unbonding record ID */
    unbonding_record_id: Long;
    /** Redeemer */
    redeemer: string;
    /** The amount of stTokens that were redeemed */
    st_token_amount: string;
    /** The corresponding amount of native tokens that should be unbonded */
    native_amount: string;
}
/** SlashRecords log adjustments to the delegated balance */
export interface SlashRecord {
    /** The slash record monotonically increasing ID */
    id: Long;
    /**
     * The Unix timestamp (in seconds) when the slash adjustment was processed on
     * stride
     */
    time: Long;
    /** The delta by which the total delegated amount changed from slash */
    nativeAmount: string;
    /** The address (or addresses) of the validator that was slashed */
    validatorAddress: string;
}
/** SlashRecords log adjustments to the delegated balance */
export interface SlashRecordSDKType {
    /** The slash record monotonically increasing ID */
    id: Long;
    /**
     * The Unix timestamp (in seconds) when the slash adjustment was processed on
     * stride
     */
    time: Long;
    /** The delta by which the total delegated amount changed from slash */
    native_amount: string;
    /** The address (or addresses) of the validator that was slashed */
    validator_address: string;
}
export declare const HostZone: {
    encode(message: HostZone, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): HostZone;
    fromPartial(object: DeepPartial<HostZone>): HostZone;
};
export declare const DelegationRecord: {
    encode(message: DelegationRecord, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DelegationRecord;
    fromPartial(object: DeepPartial<DelegationRecord>): DelegationRecord;
};
export declare const UnbondingRecord: {
    encode(message: UnbondingRecord, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UnbondingRecord;
    fromPartial(object: DeepPartial<UnbondingRecord>): UnbondingRecord;
};
export declare const RedemptionRecord: {
    encode(message: RedemptionRecord, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RedemptionRecord;
    fromPartial(object: DeepPartial<RedemptionRecord>): RedemptionRecord;
};
export declare const SlashRecord: {
    encode(message: SlashRecord, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SlashRecord;
    fromPartial(object: DeepPartial<SlashRecord>): SlashRecord;
};
