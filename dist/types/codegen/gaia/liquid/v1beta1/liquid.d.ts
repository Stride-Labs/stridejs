import { DecCoin, DecCoinAmino, DecCoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
/**
 * TokenizeShareLockStatus indicates whether the address is able to tokenize
 * shares
 */
export declare enum TokenizeShareLockStatus {
    /** TOKENIZE_SHARE_LOCK_STATUS_UNSPECIFIED - UNSPECIFIED defines an empty tokenize share lock status */
    TOKENIZE_SHARE_LOCK_STATUS_UNSPECIFIED = 0,
    /** TOKENIZE_SHARE_LOCK_STATUS_LOCKED - LOCKED indicates the account is locked and cannot tokenize shares */
    TOKENIZE_SHARE_LOCK_STATUS_LOCKED = 1,
    /** TOKENIZE_SHARE_LOCK_STATUS_UNLOCKED - UNLOCKED indicates the account is unlocked and can tokenize shares */
    TOKENIZE_SHARE_LOCK_STATUS_UNLOCKED = 2,
    /**
     * TOKENIZE_SHARE_LOCK_STATUS_LOCK_EXPIRING - LOCK_EXPIRING indicates the account is unable to tokenize shares, but
     * will be able to tokenize shortly (after 1 unbonding period)
     */
    TOKENIZE_SHARE_LOCK_STATUS_LOCK_EXPIRING = 3,
    UNRECOGNIZED = -1
}
export declare const TokenizeShareLockStatusSDKType: typeof TokenizeShareLockStatus;
export declare const TokenizeShareLockStatusAmino: typeof TokenizeShareLockStatus;
export declare function tokenizeShareLockStatusFromJSON(object: any): TokenizeShareLockStatus;
export declare function tokenizeShareLockStatusToJSON(object: TokenizeShareLockStatus): string;
/** Params defines the parameters for the x/liquid module. */
export interface Params {
    /**
     * global_liquid_staking_cap represents a cap on the portion of stake that
     * comes from liquid staking providers
     */
    globalLiquidStakingCap: string;
    /**
     * validator_liquid_staking_cap represents a cap on the portion of stake that
     * comes from liquid staking providers for a specific validator
     */
    validatorLiquidStakingCap: string;
}
export interface ParamsProtoMsg {
    typeUrl: "/gaia.liquid.v1beta1.Params";
    value: Uint8Array;
}
/**
 * Params defines the parameters for the x/liquid module.
 * @name ParamsAmino
 * @package gaia.liquid.v1beta1
 * @see proto type: gaia.liquid.v1beta1.Params
 */
export interface ParamsAmino {
    /**
     * global_liquid_staking_cap represents a cap on the portion of stake that
     * comes from liquid staking providers
     */
    global_liquid_staking_cap: string;
    /**
     * validator_liquid_staking_cap represents a cap on the portion of stake that
     * comes from liquid staking providers for a specific validator
     */
    validator_liquid_staking_cap: string;
}
export interface ParamsAminoMsg {
    type: "gaia/x/liquid/Params";
    value: ParamsAmino;
}
/** Params defines the parameters for the x/liquid module. */
export interface ParamsSDKType {
    global_liquid_staking_cap: string;
    validator_liquid_staking_cap: string;
}
/** TokenizeShareRecord represents a tokenized delegation */
export interface TokenizeShareRecord {
    id: bigint;
    owner: string;
    /** module account take the role of delegator */
    moduleAccount: string;
    /** validator delegated to for tokenize share record creation */
    validator: string;
}
export interface TokenizeShareRecordProtoMsg {
    typeUrl: "/gaia.liquid.v1beta1.TokenizeShareRecord";
    value: Uint8Array;
}
/**
 * TokenizeShareRecord represents a tokenized delegation
 * @name TokenizeShareRecordAmino
 * @package gaia.liquid.v1beta1
 * @see proto type: gaia.liquid.v1beta1.TokenizeShareRecord
 */
export interface TokenizeShareRecordAmino {
    id?: string;
    owner?: string;
    /**
     * module account take the role of delegator
     */
    module_account?: string;
    /**
     * validator delegated to for tokenize share record creation
     */
    validator?: string;
}
export interface TokenizeShareRecordAminoMsg {
    type: "/gaia.liquid.v1beta1.TokenizeShareRecord";
    value: TokenizeShareRecordAmino;
}
/** TokenizeShareRecord represents a tokenized delegation */
export interface TokenizeShareRecordSDKType {
    id: bigint;
    owner: string;
    module_account: string;
    validator: string;
}
/**
 * PendingTokenizeShareAuthorizations stores a list of addresses that have their
 * tokenize share enablement in progress
 */
export interface PendingTokenizeShareAuthorizations {
    addresses: string[];
}
export interface PendingTokenizeShareAuthorizationsProtoMsg {
    typeUrl: "/gaia.liquid.v1beta1.PendingTokenizeShareAuthorizations";
    value: Uint8Array;
}
/**
 * PendingTokenizeShareAuthorizations stores a list of addresses that have their
 * tokenize share enablement in progress
 * @name PendingTokenizeShareAuthorizationsAmino
 * @package gaia.liquid.v1beta1
 * @see proto type: gaia.liquid.v1beta1.PendingTokenizeShareAuthorizations
 */
export interface PendingTokenizeShareAuthorizationsAmino {
    addresses?: string[];
}
export interface PendingTokenizeShareAuthorizationsAminoMsg {
    type: "/gaia.liquid.v1beta1.PendingTokenizeShareAuthorizations";
    value: PendingTokenizeShareAuthorizationsAmino;
}
/**
 * PendingTokenizeShareAuthorizations stores a list of addresses that have their
 * tokenize share enablement in progress
 */
export interface PendingTokenizeShareAuthorizationsSDKType {
    addresses: string[];
}
/** TokenizeShareRecordReward represents the properties of tokenize share */
export interface TokenizeShareRecordReward {
    recordId: bigint;
    reward: DecCoin[];
}
export interface TokenizeShareRecordRewardProtoMsg {
    typeUrl: "/gaia.liquid.v1beta1.TokenizeShareRecordReward";
    value: Uint8Array;
}
/**
 * TokenizeShareRecordReward represents the properties of tokenize share
 * @name TokenizeShareRecordRewardAmino
 * @package gaia.liquid.v1beta1
 * @see proto type: gaia.liquid.v1beta1.TokenizeShareRecordReward
 */
export interface TokenizeShareRecordRewardAmino {
    record_id?: string;
    reward?: DecCoinAmino[];
}
export interface TokenizeShareRecordRewardAminoMsg {
    type: "/gaia.liquid.v1beta1.TokenizeShareRecordReward";
    value: TokenizeShareRecordRewardAmino;
}
/** TokenizeShareRecordReward represents the properties of tokenize share */
export interface TokenizeShareRecordRewardSDKType {
    record_id: bigint;
    reward: DecCoinSDKType[];
}
/**
 * LiquidValidator is the storage layout for details about a validator's liquid
 * stake.
 */
export interface LiquidValidator {
    /**
     * operator_address defines the address of the validator's operator; bech
     * encoded in JSON.
     */
    operatorAddress: string;
    /** Number of shares either tokenized or owned by a liquid staking provider */
    liquidShares: string;
}
export interface LiquidValidatorProtoMsg {
    typeUrl: "/gaia.liquid.v1beta1.LiquidValidator";
    value: Uint8Array;
}
/**
 * LiquidValidator is the storage layout for details about a validator's liquid
 * stake.
 * @name LiquidValidatorAmino
 * @package gaia.liquid.v1beta1
 * @see proto type: gaia.liquid.v1beta1.LiquidValidator
 */
export interface LiquidValidatorAmino {
    /**
     * operator_address defines the address of the validator's operator; bech
     * encoded in JSON.
     */
    operator_address?: string;
    /**
     * Number of shares either tokenized or owned by a liquid staking provider
     */
    liquid_shares?: string;
}
export interface LiquidValidatorAminoMsg {
    type: "/gaia.liquid.v1beta1.LiquidValidator";
    value: LiquidValidatorAmino;
}
/**
 * LiquidValidator is the storage layout for details about a validator's liquid
 * stake.
 */
export interface LiquidValidatorSDKType {
    operator_address: string;
    liquid_shares: string;
}
export declare const Params: {
    typeUrl: string;
    encode(message: Params, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Params;
    fromPartial(object: Partial<Params>): Params;
    fromAmino(object: ParamsAmino): Params;
    toAmino(message: Params): ParamsAmino;
    fromAminoMsg(object: ParamsAminoMsg): Params;
    toAminoMsg(message: Params): ParamsAminoMsg;
    fromProtoMsg(message: ParamsProtoMsg): Params;
    toProto(message: Params): Uint8Array;
    toProtoMsg(message: Params): ParamsProtoMsg;
};
export declare const TokenizeShareRecord: {
    typeUrl: string;
    encode(message: TokenizeShareRecord, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): TokenizeShareRecord;
    fromPartial(object: Partial<TokenizeShareRecord>): TokenizeShareRecord;
    fromAmino(object: TokenizeShareRecordAmino): TokenizeShareRecord;
    toAmino(message: TokenizeShareRecord): TokenizeShareRecordAmino;
    fromAminoMsg(object: TokenizeShareRecordAminoMsg): TokenizeShareRecord;
    fromProtoMsg(message: TokenizeShareRecordProtoMsg): TokenizeShareRecord;
    toProto(message: TokenizeShareRecord): Uint8Array;
    toProtoMsg(message: TokenizeShareRecord): TokenizeShareRecordProtoMsg;
};
export declare const PendingTokenizeShareAuthorizations: {
    typeUrl: string;
    encode(message: PendingTokenizeShareAuthorizations, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): PendingTokenizeShareAuthorizations;
    fromPartial(object: Partial<PendingTokenizeShareAuthorizations>): PendingTokenizeShareAuthorizations;
    fromAmino(object: PendingTokenizeShareAuthorizationsAmino): PendingTokenizeShareAuthorizations;
    toAmino(message: PendingTokenizeShareAuthorizations): PendingTokenizeShareAuthorizationsAmino;
    fromAminoMsg(object: PendingTokenizeShareAuthorizationsAminoMsg): PendingTokenizeShareAuthorizations;
    fromProtoMsg(message: PendingTokenizeShareAuthorizationsProtoMsg): PendingTokenizeShareAuthorizations;
    toProto(message: PendingTokenizeShareAuthorizations): Uint8Array;
    toProtoMsg(message: PendingTokenizeShareAuthorizations): PendingTokenizeShareAuthorizationsProtoMsg;
};
export declare const TokenizeShareRecordReward: {
    typeUrl: string;
    encode(message: TokenizeShareRecordReward, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): TokenizeShareRecordReward;
    fromPartial(object: Partial<TokenizeShareRecordReward>): TokenizeShareRecordReward;
    fromAmino(object: TokenizeShareRecordRewardAmino): TokenizeShareRecordReward;
    toAmino(message: TokenizeShareRecordReward): TokenizeShareRecordRewardAmino;
    fromAminoMsg(object: TokenizeShareRecordRewardAminoMsg): TokenizeShareRecordReward;
    fromProtoMsg(message: TokenizeShareRecordRewardProtoMsg): TokenizeShareRecordReward;
    toProto(message: TokenizeShareRecordReward): Uint8Array;
    toProtoMsg(message: TokenizeShareRecordReward): TokenizeShareRecordRewardProtoMsg;
};
export declare const LiquidValidator: {
    typeUrl: string;
    encode(message: LiquidValidator, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): LiquidValidator;
    fromPartial(object: Partial<LiquidValidator>): LiquidValidator;
    fromAmino(object: LiquidValidatorAmino): LiquidValidator;
    toAmino(message: LiquidValidator): LiquidValidatorAmino;
    fromAminoMsg(object: LiquidValidatorAminoMsg): LiquidValidator;
    fromProtoMsg(message: LiquidValidatorProtoMsg): LiquidValidator;
    toProto(message: LiquidValidator): Uint8Array;
    toProtoMsg(message: LiquidValidator): LiquidValidatorProtoMsg;
};
