import { Params, ParamsSDKType, Validator, ValidatorSDKType, Delegation, DelegationSDKType, UnbondingDelegation, UnbondingDelegationSDKType, Redelegation, RedelegationSDKType, TokenizeShareRecord, TokenizeShareRecordSDKType } from "./staking";
import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
/** GenesisState defines the staking module's genesis state. */
export interface GenesisState {
    /** params defines all the paramaters of related to deposit. */
    params: Params;
    /**
     * last_total_power tracks the total amounts of bonded tokens recorded during
     * the previous end block.
     */
    lastTotalPower: Uint8Array;
    /**
     * last_validator_powers is a special index that provides a historical list
     * of the last-block's bonded validators.
     */
    lastValidatorPowers: LastValidatorPower[];
    /** delegations defines the validator set at genesis. */
    validators: Validator[];
    /** delegations defines the delegations active at genesis. */
    delegations: Delegation[];
    /** unbonding_delegations defines the unbonding delegations active at genesis. */
    unbondingDelegations: UnbondingDelegation[];
    /** redelegations defines the redelegations active at genesis. */
    redelegations: Redelegation[];
    exported: boolean;
    /** store tokenize share records to provide reward to record owners */
    tokenizeShareRecords: TokenizeShareRecord[];
    /** last tokenize share record id, used for next share record id calculation */
    lastTokenizeShareRecordId: Long;
    /** total number of liquid staked tokens at genesis */
    totalLiquidStakedTokens: Uint8Array;
    /** tokenize shares locks at genesis */
    tokenizeShareLocks: TokenizeShareLock[];
}
/** GenesisState defines the staking module's genesis state. */
export interface GenesisStateSDKType {
    /** params defines all the paramaters of related to deposit. */
    params: ParamsSDKType;
    /**
     * last_total_power tracks the total amounts of bonded tokens recorded during
     * the previous end block.
     */
    last_total_power: Uint8Array;
    /**
     * last_validator_powers is a special index that provides a historical list
     * of the last-block's bonded validators.
     */
    last_validator_powers: LastValidatorPowerSDKType[];
    /** delegations defines the validator set at genesis. */
    validators: ValidatorSDKType[];
    /** delegations defines the delegations active at genesis. */
    delegations: DelegationSDKType[];
    /** unbonding_delegations defines the unbonding delegations active at genesis. */
    unbonding_delegations: UnbondingDelegationSDKType[];
    /** redelegations defines the redelegations active at genesis. */
    redelegations: RedelegationSDKType[];
    exported: boolean;
    /** store tokenize share records to provide reward to record owners */
    tokenize_share_records: TokenizeShareRecordSDKType[];
    /** last tokenize share record id, used for next share record id calculation */
    last_tokenize_share_record_id: Long;
    /** total number of liquid staked tokens at genesis */
    total_liquid_staked_tokens: Uint8Array;
    /** tokenize shares locks at genesis */
    tokenize_share_locks: TokenizeShareLockSDKType[];
}
/** TokenizeSharesLock required for specifying account locks at genesis */
export interface TokenizeShareLock {
    /** Address of the account that is locked */
    address: string;
    /** Status of the lock (LOCKED or LOCK_EXPIRING) */
    status: string;
    /** Completion time if the lock is expiring */
    completionTime: Date;
}
/** TokenizeSharesLock required for specifying account locks at genesis */
export interface TokenizeShareLockSDKType {
    /** Address of the account that is locked */
    address: string;
    /** Status of the lock (LOCKED or LOCK_EXPIRING) */
    status: string;
    /** Completion time if the lock is expiring */
    completion_time: Date;
}
/** LastValidatorPower required for validator set update logic. */
export interface LastValidatorPower {
    /** address is the address of the validator. */
    address: string;
    /** power defines the power of the validator. */
    power: Long;
}
/** LastValidatorPower required for validator set update logic. */
export interface LastValidatorPowerSDKType {
    /** address is the address of the validator. */
    address: string;
    /** power defines the power of the validator. */
    power: Long;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
export declare const TokenizeShareLock: {
    encode(message: TokenizeShareLock, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TokenizeShareLock;
    fromPartial(object: DeepPartial<TokenizeShareLock>): TokenizeShareLock;
};
export declare const LastValidatorPower: {
    encode(message: LastValidatorPower, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LastValidatorPower;
    fromPartial(object: DeepPartial<LastValidatorPower>): LastValidatorPower;
};
