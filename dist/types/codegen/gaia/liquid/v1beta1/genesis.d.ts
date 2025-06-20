import { Params, ParamsAmino, ParamsSDKType, TokenizeShareRecord, TokenizeShareRecordAmino, TokenizeShareRecordSDKType } from "./liquid";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** GenesisState defines the liquid module's genesis state. */
export interface GenesisState {
    /** params defines all the parameters of related to deposit. */
    params: Params;
    /** store tokenize share records to provide reward to record owners */
    tokenizeShareRecords: TokenizeShareRecord[];
    /** last tokenize share record id, used for next share record id calculation */
    lastTokenizeShareRecordId: bigint;
    /** total number of liquid staked tokens at genesis */
    totalLiquidStakedTokens: Uint8Array;
    /** tokenize shares locks at genesis */
    tokenizeShareLocks: TokenizeShareLock[];
}
export interface GenesisStateProtoMsg {
    typeUrl: "/gaia.liquid.v1beta1.GenesisState";
    value: Uint8Array;
}
/**
 * GenesisState defines the liquid module's genesis state.
 * @name GenesisStateAmino
 * @package gaia.liquid.v1beta1
 * @see proto type: gaia.liquid.v1beta1.GenesisState
 */
export interface GenesisStateAmino {
    /**
     * params defines all the parameters of related to deposit.
     */
    params: ParamsAmino;
    /**
     * store tokenize share records to provide reward to record owners
     */
    tokenize_share_records?: TokenizeShareRecordAmino[];
    /**
     * last tokenize share record id, used for next share record id calculation
     */
    last_tokenize_share_record_id?: string;
    /**
     * total number of liquid staked tokens at genesis
     */
    total_liquid_staked_tokens?: string;
    /**
     * tokenize shares locks at genesis
     */
    tokenize_share_locks?: TokenizeShareLockAmino[];
}
export interface GenesisStateAminoMsg {
    type: "/gaia.liquid.v1beta1.GenesisState";
    value: GenesisStateAmino;
}
/** GenesisState defines the liquid module's genesis state. */
export interface GenesisStateSDKType {
    params: ParamsSDKType;
    tokenize_share_records: TokenizeShareRecordSDKType[];
    last_tokenize_share_record_id: bigint;
    total_liquid_staked_tokens: Uint8Array;
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
export interface TokenizeShareLockProtoMsg {
    typeUrl: "/gaia.liquid.v1beta1.TokenizeShareLock";
    value: Uint8Array;
}
/**
 * TokenizeSharesLock required for specifying account locks at genesis
 * @name TokenizeShareLockAmino
 * @package gaia.liquid.v1beta1
 * @see proto type: gaia.liquid.v1beta1.TokenizeShareLock
 */
export interface TokenizeShareLockAmino {
    /**
     * Address of the account that is locked
     */
    address?: string;
    /**
     * Status of the lock (LOCKED or LOCK_EXPIRING)
     */
    status?: string;
    /**
     * Completion time if the lock is expiring
     */
    completion_time?: string;
}
export interface TokenizeShareLockAminoMsg {
    type: "/gaia.liquid.v1beta1.TokenizeShareLock";
    value: TokenizeShareLockAmino;
}
/** TokenizeSharesLock required for specifying account locks at genesis */
export interface TokenizeShareLockSDKType {
    address: string;
    status: string;
    completion_time: Date;
}
export declare const GenesisState: {
    typeUrl: string;
    encode(message: GenesisState, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
    fromAmino(object: GenesisStateAmino): GenesisState;
    toAmino(message: GenesisState): GenesisStateAmino;
    fromAminoMsg(object: GenesisStateAminoMsg): GenesisState;
    fromProtoMsg(message: GenesisStateProtoMsg): GenesisState;
    toProto(message: GenesisState): Uint8Array;
    toProtoMsg(message: GenesisState): GenesisStateProtoMsg;
};
export declare const TokenizeShareLock: {
    typeUrl: string;
    encode(message: TokenizeShareLock, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): TokenizeShareLock;
    fromPartial(object: Partial<TokenizeShareLock>): TokenizeShareLock;
    fromAmino(object: TokenizeShareLockAmino): TokenizeShareLock;
    toAmino(message: TokenizeShareLock): TokenizeShareLockAmino;
    fromAminoMsg(object: TokenizeShareLockAminoMsg): TokenizeShareLock;
    fromProtoMsg(message: TokenizeShareLockProtoMsg): TokenizeShareLock;
    toProto(message: TokenizeShareLock): Uint8Array;
    toProtoMsg(message: TokenizeShareLock): TokenizeShareLockProtoMsg;
};
