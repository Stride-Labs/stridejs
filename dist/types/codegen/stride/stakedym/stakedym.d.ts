import { BinaryReader, BinaryWriter } from "../../binary";
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
     * deposit account to the delegation account
     */
    TRANSFER_IN_PROGRESS = 0,
    /**
     * TRANSFER_FAILED - TRANSFER_FAILED indicates that the transfer either timed out or was an ack
     * failure
     */
    TRANSFER_FAILED = 1,
    /**
     * DELEGATION_QUEUE - DELEGATION_QUEUE indicates the tokens have landed on the host zone and are
     * ready to be delegated
     */
    DELEGATION_QUEUE = 2,
    /** DELEGATION_COMPLETE - DELEGATION_COMPLETE indicates the delegation has been completed */
    DELEGATION_COMPLETE = 3,
    UNRECOGNIZED = -1
}
export declare const DelegationRecordStatusSDKType: typeof DelegationRecordStatus;
export declare const DelegationRecordStatusAmino: typeof DelegationRecordStatus;
export declare function delegationRecordStatusFromJSON(object: any): DelegationRecordStatus;
export declare function delegationRecordStatusToJSON(object: DelegationRecordStatus): string;
/** Status fields for an unbonding record */
export declare enum UnbondingRecordStatus {
    /**
     * ACCUMULATING_REDEMPTIONS - ACCUMULATING_REDEMPTIONS indicates redemptions are still being accumulated
     * on this record
     */
    ACCUMULATING_REDEMPTIONS = 0,
    /**
     * UNBONDING_QUEUE - UNBONDING_QUEUE indicates the unbond amount for this epoch has been froze
     * and the tokens are ready to be unbonded on the host zone
     */
    UNBONDING_QUEUE = 1,
    /**
     * UNBONDING_IN_PROGRESS - UNBONDING_IN_PROGRESS indicates the unbonding is currently in progress on
     * the host zone
     */
    UNBONDING_IN_PROGRESS = 2,
    /**
     * UNBONDED - UNBONDED indicates the unbonding is finished on the host zone and the
     * tokens are still in the delegation account
     */
    UNBONDED = 3,
    /**
     * CLAIMABLE - CLAIMABLE indicates the unbonded tokens have been swept to stride and are
     * ready to be distributed to users
     */
    CLAIMABLE = 4,
    /** CLAIMED - CLAIMED indicates the full unbonding cycle has been completed */
    CLAIMED = 5,
    UNRECOGNIZED = -1
}
export declare const UnbondingRecordStatusSDKType: typeof UnbondingRecordStatus;
export declare const UnbondingRecordStatusAmino: typeof UnbondingRecordStatus;
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
    unbondingPeriodSeconds: bigint;
    /** Indicates whether the host zone has been halted */
    halted: boolean;
}
export interface HostZoneProtoMsg {
    typeUrl: "/stride.stakedym.HostZone";
    value: Uint8Array;
}
/**
 * @name HostZoneAmino
 * @package stride.stakedym
 * @see proto type: stride.stakedym.HostZone
 */
export interface HostZoneAmino {
    /**
     * Chain ID
     */
    chain_id?: string;
    /**
     * Native token denom on the host zone (e.g. adym)
     */
    native_token_denom?: string;
    /**
     * IBC denom of the native token as it lives on stride (e.g. ibc/...)
     */
    native_token_ibc_denom?: string;
    /**
     * Transfer channel ID from stride to the host zone
     */
    transfer_channel_id?: string;
    /**
     * Operator controlled delegation address on the host zone
     */
    delegation_address?: string;
    /**
     * Operator controlled reward address on the host zone
     */
    reward_address?: string;
    /**
     * Deposit address on stride
     */
    deposit_address?: string;
    /**
     * Redemption address on stride
     */
    redemption_address?: string;
    /**
     * Claim address on stride
     */
    claim_address?: string;
    /**
     * operator address set by safe, on stride
     */
    operator_address_on_stride?: string;
    /**
     * admin address set upon host zone creation,  on stride
     */
    safe_address_on_stride?: string;
    /**
     * Previous redemption rate
     */
    last_redemption_rate?: string;
    /**
     * Current redemption rate
     */
    redemption_rate?: string;
    /**
     * Min outer redemption rate - adjusted by governance
     */
    min_redemption_rate?: string;
    /**
     * Max outer redemption rate - adjusted by governance
     */
    max_redemption_rate?: string;
    /**
     * Min inner redemption rate - adjusted by controller
     */
    min_inner_redemption_rate?: string;
    /**
     * Max inner redemption rate - adjusted by controller
     */
    max_inner_redemption_rate?: string;
    /**
     * Total delegated balance on the host zone delegation account
     */
    delegated_balance?: string;
    /**
     * The undelegation period for Dymension in days
     */
    unbonding_period_seconds?: string;
    /**
     * Indicates whether the host zone has been halted
     */
    halted?: boolean;
}
export interface HostZoneAminoMsg {
    type: "/stride.stakedym.HostZone";
    value: HostZoneAmino;
}
export interface HostZoneSDKType {
    chain_id: string;
    native_token_denom: string;
    native_token_ibc_denom: string;
    transfer_channel_id: string;
    delegation_address: string;
    reward_address: string;
    deposit_address: string;
    redemption_address: string;
    claim_address: string;
    operator_address_on_stride: string;
    safe_address_on_stride: string;
    last_redemption_rate: string;
    redemption_rate: string;
    min_redemption_rate: string;
    max_redemption_rate: string;
    min_inner_redemption_rate: string;
    max_inner_redemption_rate: string;
    delegated_balance: string;
    unbonding_period_seconds: bigint;
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
    id: bigint;
    /** The amount of native tokens that should be delegated */
    nativeAmount: string;
    /** The status indicating the point in the delegation's lifecycle */
    status: DelegationRecordStatus;
    /** The tx hash of the delegation on the host zone */
    txHash: string;
}
export interface DelegationRecordProtoMsg {
    typeUrl: "/stride.stakedym.DelegationRecord";
    value: Uint8Array;
}
/**
 * DelegationRecords track the aggregate liquid stakes and delegations
 * for a given epoch
 * Note: There is an important assumption here that tokens in the deposit
 * account should not be tracked by these records. The record is created as soon
 * as the tokens leave stride
 * @name DelegationRecordAmino
 * @package stride.stakedym
 * @see proto type: stride.stakedym.DelegationRecord
 */
export interface DelegationRecordAmino {
    /**
     * Deposit record unique ID
     */
    id?: string;
    /**
     * The amount of native tokens that should be delegated
     */
    native_amount?: string;
    /**
     * The status indicating the point in the delegation's lifecycle
     */
    status?: DelegationRecordStatus;
    /**
     * The tx hash of the delegation on the host zone
     */
    tx_hash?: string;
}
export interface DelegationRecordAminoMsg {
    type: "/stride.stakedym.DelegationRecord";
    value: DelegationRecordAmino;
}
/**
 * DelegationRecords track the aggregate liquid stakes and delegations
 * for a given epoch
 * Note: There is an important assumption here that tokens in the deposit
 * account should not be tracked by these records. The record is created as soon
 * as the tokens leave stride
 */
export interface DelegationRecordSDKType {
    id: bigint;
    native_amount: string;
    status: DelegationRecordStatus;
    tx_hash: string;
}
/** UnbondingRecords track the aggregate unbondings across an epoch */
export interface UnbondingRecord {
    /** Unbonding record ID */
    id: bigint;
    /** The status indicating the point in the delegation's lifecycle */
    status: UnbondingRecordStatus;
    /** The amount of stTokens that were redeemed */
    stTokenAmount: string;
    /** The corresponding amount of native tokens that should be unbonded */
    nativeAmount: string;
    /** The Unix timestamp (in seconds) at which the unbonding completes */
    unbondingCompletionTimeSeconds: bigint;
    /** The tx hash of the undelegation on the host zone */
    undelegationTxHash: string;
    /** The tx hash of the unbonded token sweep on the host zone */
    unbondedTokenSweepTxHash: string;
}
export interface UnbondingRecordProtoMsg {
    typeUrl: "/stride.stakedym.UnbondingRecord";
    value: Uint8Array;
}
/**
 * UnbondingRecords track the aggregate unbondings across an epoch
 * @name UnbondingRecordAmino
 * @package stride.stakedym
 * @see proto type: stride.stakedym.UnbondingRecord
 */
export interface UnbondingRecordAmino {
    /**
     * Unbonding record ID
     */
    id?: string;
    /**
     * The status indicating the point in the delegation's lifecycle
     */
    status?: UnbondingRecordStatus;
    /**
     * The amount of stTokens that were redeemed
     */
    st_token_amount?: string;
    /**
     * The corresponding amount of native tokens that should be unbonded
     */
    native_amount?: string;
    /**
     * The Unix timestamp (in seconds) at which the unbonding completes
     */
    unbonding_completion_time_seconds?: string;
    /**
     * The tx hash of the undelegation on the host zone
     */
    undelegation_tx_hash?: string;
    /**
     * The tx hash of the unbonded token sweep on the host zone
     */
    unbonded_token_sweep_tx_hash?: string;
}
export interface UnbondingRecordAminoMsg {
    type: "/stride.stakedym.UnbondingRecord";
    value: UnbondingRecordAmino;
}
/** UnbondingRecords track the aggregate unbondings across an epoch */
export interface UnbondingRecordSDKType {
    id: bigint;
    status: UnbondingRecordStatus;
    st_token_amount: string;
    native_amount: string;
    unbonding_completion_time_seconds: bigint;
    undelegation_tx_hash: string;
    unbonded_token_sweep_tx_hash: string;
}
/** RedemptionRecords track an individual user's redemption claims */
export interface RedemptionRecord {
    /** Unbonding record ID */
    unbondingRecordId: bigint;
    /** Redeemer */
    redeemer: string;
    /** The amount of stTokens that were redeemed */
    stTokenAmount: string;
    /** The corresponding amount of native tokens that should be unbonded */
    nativeAmount: string;
}
export interface RedemptionRecordProtoMsg {
    typeUrl: "/stride.stakedym.RedemptionRecord";
    value: Uint8Array;
}
/**
 * RedemptionRecords track an individual user's redemption claims
 * @name RedemptionRecordAmino
 * @package stride.stakedym
 * @see proto type: stride.stakedym.RedemptionRecord
 */
export interface RedemptionRecordAmino {
    /**
     * Unbonding record ID
     */
    unbonding_record_id?: string;
    /**
     * Redeemer
     */
    redeemer?: string;
    /**
     * The amount of stTokens that were redeemed
     */
    st_token_amount?: string;
    /**
     * The corresponding amount of native tokens that should be unbonded
     */
    native_amount?: string;
}
export interface RedemptionRecordAminoMsg {
    type: "/stride.stakedym.RedemptionRecord";
    value: RedemptionRecordAmino;
}
/** RedemptionRecords track an individual user's redemption claims */
export interface RedemptionRecordSDKType {
    unbonding_record_id: bigint;
    redeemer: string;
    st_token_amount: string;
    native_amount: string;
}
/** SlashRecords log adjustments to the delegated balance */
export interface SlashRecord {
    /** The slash record monotonically increasing ID */
    id: bigint;
    /**
     * The Unix timestamp (in seconds) when the slash adjustment was processed on
     * stride
     */
    time: bigint;
    /** The delta by which the total delegated amount changed from slash */
    nativeAmount: string;
    /** The address (or addresses) of the validator that was slashed */
    validatorAddress: string;
}
export interface SlashRecordProtoMsg {
    typeUrl: "/stride.stakedym.SlashRecord";
    value: Uint8Array;
}
/**
 * SlashRecords log adjustments to the delegated balance
 * @name SlashRecordAmino
 * @package stride.stakedym
 * @see proto type: stride.stakedym.SlashRecord
 */
export interface SlashRecordAmino {
    /**
     * The slash record monotonically increasing ID
     */
    id?: string;
    /**
     * The Unix timestamp (in seconds) when the slash adjustment was processed on
     * stride
     */
    time?: string;
    /**
     * The delta by which the total delegated amount changed from slash
     */
    native_amount?: string;
    /**
     * The address (or addresses) of the validator that was slashed
     */
    validator_address?: string;
}
export interface SlashRecordAminoMsg {
    type: "/stride.stakedym.SlashRecord";
    value: SlashRecordAmino;
}
/** SlashRecords log adjustments to the delegated balance */
export interface SlashRecordSDKType {
    id: bigint;
    time: bigint;
    native_amount: string;
    validator_address: string;
}
export declare const HostZone: {
    typeUrl: string;
    encode(message: HostZone, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): HostZone;
    fromPartial(object: Partial<HostZone>): HostZone;
    fromAmino(object: HostZoneAmino): HostZone;
    toAmino(message: HostZone): HostZoneAmino;
    fromAminoMsg(object: HostZoneAminoMsg): HostZone;
    fromProtoMsg(message: HostZoneProtoMsg): HostZone;
    toProto(message: HostZone): Uint8Array;
    toProtoMsg(message: HostZone): HostZoneProtoMsg;
};
export declare const DelegationRecord: {
    typeUrl: string;
    encode(message: DelegationRecord, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): DelegationRecord;
    fromPartial(object: Partial<DelegationRecord>): DelegationRecord;
    fromAmino(object: DelegationRecordAmino): DelegationRecord;
    toAmino(message: DelegationRecord): DelegationRecordAmino;
    fromAminoMsg(object: DelegationRecordAminoMsg): DelegationRecord;
    fromProtoMsg(message: DelegationRecordProtoMsg): DelegationRecord;
    toProto(message: DelegationRecord): Uint8Array;
    toProtoMsg(message: DelegationRecord): DelegationRecordProtoMsg;
};
export declare const UnbondingRecord: {
    typeUrl: string;
    encode(message: UnbondingRecord, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): UnbondingRecord;
    fromPartial(object: Partial<UnbondingRecord>): UnbondingRecord;
    fromAmino(object: UnbondingRecordAmino): UnbondingRecord;
    toAmino(message: UnbondingRecord): UnbondingRecordAmino;
    fromAminoMsg(object: UnbondingRecordAminoMsg): UnbondingRecord;
    fromProtoMsg(message: UnbondingRecordProtoMsg): UnbondingRecord;
    toProto(message: UnbondingRecord): Uint8Array;
    toProtoMsg(message: UnbondingRecord): UnbondingRecordProtoMsg;
};
export declare const RedemptionRecord: {
    typeUrl: string;
    encode(message: RedemptionRecord, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): RedemptionRecord;
    fromPartial(object: Partial<RedemptionRecord>): RedemptionRecord;
    fromAmino(object: RedemptionRecordAmino): RedemptionRecord;
    toAmino(message: RedemptionRecord): RedemptionRecordAmino;
    fromAminoMsg(object: RedemptionRecordAminoMsg): RedemptionRecord;
    fromProtoMsg(message: RedemptionRecordProtoMsg): RedemptionRecord;
    toProto(message: RedemptionRecord): Uint8Array;
    toProtoMsg(message: RedemptionRecord): RedemptionRecordProtoMsg;
};
export declare const SlashRecord: {
    typeUrl: string;
    encode(message: SlashRecord, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): SlashRecord;
    fromPartial(object: Partial<SlashRecord>): SlashRecord;
    fromAmino(object: SlashRecordAmino): SlashRecord;
    toAmino(message: SlashRecord): SlashRecordAmino;
    fromAminoMsg(object: SlashRecordAminoMsg): SlashRecord;
    fromProtoMsg(message: SlashRecordProtoMsg): SlashRecord;
    toProto(message: SlashRecord): Uint8Array;
    toProtoMsg(message: SlashRecord): SlashRecordProtoMsg;
};
