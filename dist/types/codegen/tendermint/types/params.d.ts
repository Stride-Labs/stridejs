import { Duration, DurationAmino, DurationSDKType } from "../../google/protobuf/duration";
import { BinaryReader, BinaryWriter } from "../../binary";
/**
 * ConsensusParams contains consensus critical parameters that determine the
 * validity of blocks.
 */
export interface ConsensusParams {
    block?: BlockParams;
    evidence?: EvidenceParams;
    validator?: ValidatorParams;
    version?: VersionParams;
    abci?: ABCIParams;
}
export interface ConsensusParamsProtoMsg {
    typeUrl: "/tendermint.types.ConsensusParams";
    value: Uint8Array;
}
/**
 * ConsensusParams contains consensus critical parameters that determine the
 * validity of blocks.
 */
export interface ConsensusParamsAmino {
    block?: BlockParamsAmino;
    evidence?: EvidenceParamsAmino;
    validator?: ValidatorParamsAmino;
    version?: VersionParamsAmino;
    abci?: ABCIParamsAmino;
}
export interface ConsensusParamsAminoMsg {
    type: "/tendermint.types.ConsensusParams";
    value: ConsensusParamsAmino;
}
/**
 * ConsensusParams contains consensus critical parameters that determine the
 * validity of blocks.
 */
export interface ConsensusParamsSDKType {
    block?: BlockParamsSDKType;
    evidence?: EvidenceParamsSDKType;
    validator?: ValidatorParamsSDKType;
    version?: VersionParamsSDKType;
    abci?: ABCIParamsSDKType;
}
/** BlockParams contains limits on the block size. */
export interface BlockParams {
    /**
     * Max block size, in bytes.
     * Note: must be greater than 0
     */
    maxBytes: bigint;
    /**
     * Max gas per block.
     * Note: must be greater or equal to -1
     */
    maxGas: bigint;
}
export interface BlockParamsProtoMsg {
    typeUrl: "/tendermint.types.BlockParams";
    value: Uint8Array;
}
/** BlockParams contains limits on the block size. */
export interface BlockParamsAmino {
    /**
     * Max block size, in bytes.
     * Note: must be greater than 0
     */
    max_bytes?: string;
    /**
     * Max gas per block.
     * Note: must be greater or equal to -1
     */
    max_gas?: string;
}
export interface BlockParamsAminoMsg {
    type: "/tendermint.types.BlockParams";
    value: BlockParamsAmino;
}
/** BlockParams contains limits on the block size. */
export interface BlockParamsSDKType {
    max_bytes: bigint;
    max_gas: bigint;
}
/** EvidenceParams determine how we handle evidence of malfeasance. */
export interface EvidenceParams {
    /**
     * Max age of evidence, in blocks.
     *
     * The basic formula for calculating this is: MaxAgeDuration / {average block
     * time}.
     */
    maxAgeNumBlocks: bigint;
    /**
     * Max age of evidence, in time.
     *
     * It should correspond with an app's "unbonding period" or other similar
     * mechanism for handling [Nothing-At-Stake
     * attacks](https://github.com/ethereum/wiki/wiki/Proof-of-Stake-FAQ#what-is-the-nothing-at-stake-problem-and-how-can-it-be-fixed).
     */
    maxAgeDuration: Duration;
    /**
     * This sets the maximum size of total evidence in bytes that can be committed in a single block.
     * and should fall comfortably under the max block bytes.
     * Default is 1048576 or 1MB
     */
    maxBytes: bigint;
}
export interface EvidenceParamsProtoMsg {
    typeUrl: "/tendermint.types.EvidenceParams";
    value: Uint8Array;
}
/** EvidenceParams determine how we handle evidence of malfeasance. */
export interface EvidenceParamsAmino {
    /**
     * Max age of evidence, in blocks.
     *
     * The basic formula for calculating this is: MaxAgeDuration / {average block
     * time}.
     */
    max_age_num_blocks?: string;
    /**
     * Max age of evidence, in time.
     *
     * It should correspond with an app's "unbonding period" or other similar
     * mechanism for handling [Nothing-At-Stake
     * attacks](https://github.com/ethereum/wiki/wiki/Proof-of-Stake-FAQ#what-is-the-nothing-at-stake-problem-and-how-can-it-be-fixed).
     */
    max_age_duration?: DurationAmino;
    /**
     * This sets the maximum size of total evidence in bytes that can be committed in a single block.
     * and should fall comfortably under the max block bytes.
     * Default is 1048576 or 1MB
     */
    max_bytes?: string;
}
export interface EvidenceParamsAminoMsg {
    type: "/tendermint.types.EvidenceParams";
    value: EvidenceParamsAmino;
}
/** EvidenceParams determine how we handle evidence of malfeasance. */
export interface EvidenceParamsSDKType {
    max_age_num_blocks: bigint;
    max_age_duration: DurationSDKType;
    max_bytes: bigint;
}
/**
 * ValidatorParams restrict the public key types validators can use.
 * NOTE: uses ABCI pubkey naming, not Amino names.
 */
export interface ValidatorParams {
    pubKeyTypes: string[];
}
export interface ValidatorParamsProtoMsg {
    typeUrl: "/tendermint.types.ValidatorParams";
    value: Uint8Array;
}
/**
 * ValidatorParams restrict the public key types validators can use.
 * NOTE: uses ABCI pubkey naming, not Amino names.
 */
export interface ValidatorParamsAmino {
    pub_key_types?: string[];
}
export interface ValidatorParamsAminoMsg {
    type: "/tendermint.types.ValidatorParams";
    value: ValidatorParamsAmino;
}
/**
 * ValidatorParams restrict the public key types validators can use.
 * NOTE: uses ABCI pubkey naming, not Amino names.
 */
export interface ValidatorParamsSDKType {
    pub_key_types: string[];
}
/** VersionParams contains the ABCI application version. */
export interface VersionParams {
    app: bigint;
}
export interface VersionParamsProtoMsg {
    typeUrl: "/tendermint.types.VersionParams";
    value: Uint8Array;
}
/** VersionParams contains the ABCI application version. */
export interface VersionParamsAmino {
    app?: string;
}
export interface VersionParamsAminoMsg {
    type: "/tendermint.types.VersionParams";
    value: VersionParamsAmino;
}
/** VersionParams contains the ABCI application version. */
export interface VersionParamsSDKType {
    app: bigint;
}
/**
 * HashedParams is a subset of ConsensusParams.
 *
 * It is hashed into the Header.ConsensusHash.
 */
export interface HashedParams {
    blockMaxBytes: bigint;
    blockMaxGas: bigint;
}
export interface HashedParamsProtoMsg {
    typeUrl: "/tendermint.types.HashedParams";
    value: Uint8Array;
}
/**
 * HashedParams is a subset of ConsensusParams.
 *
 * It is hashed into the Header.ConsensusHash.
 */
export interface HashedParamsAmino {
    block_max_bytes?: string;
    block_max_gas?: string;
}
export interface HashedParamsAminoMsg {
    type: "/tendermint.types.HashedParams";
    value: HashedParamsAmino;
}
/**
 * HashedParams is a subset of ConsensusParams.
 *
 * It is hashed into the Header.ConsensusHash.
 */
export interface HashedParamsSDKType {
    block_max_bytes: bigint;
    block_max_gas: bigint;
}
/** ABCIParams configure functionality specific to the Application Blockchain Interface. */
export interface ABCIParams {
    /**
     * vote_extensions_enable_height configures the first height during which
     * vote extensions will be enabled. During this specified height, and for all
     * subsequent heights, precommit messages that do not contain valid extension data
     * will be considered invalid. Prior to this height, vote extensions will not
     * be used or accepted by validators on the network.
     *
     * Once enabled, vote extensions will be created by the application in ExtendVote,
     * passed to the application for validation in VerifyVoteExtension and given
     * to the application to use when proposing a block during PrepareProposal.
     */
    voteExtensionsEnableHeight: bigint;
}
export interface ABCIParamsProtoMsg {
    typeUrl: "/tendermint.types.ABCIParams";
    value: Uint8Array;
}
/** ABCIParams configure functionality specific to the Application Blockchain Interface. */
export interface ABCIParamsAmino {
    /**
     * vote_extensions_enable_height configures the first height during which
     * vote extensions will be enabled. During this specified height, and for all
     * subsequent heights, precommit messages that do not contain valid extension data
     * will be considered invalid. Prior to this height, vote extensions will not
     * be used or accepted by validators on the network.
     *
     * Once enabled, vote extensions will be created by the application in ExtendVote,
     * passed to the application for validation in VerifyVoteExtension and given
     * to the application to use when proposing a block during PrepareProposal.
     */
    vote_extensions_enable_height?: string;
}
export interface ABCIParamsAminoMsg {
    type: "/tendermint.types.ABCIParams";
    value: ABCIParamsAmino;
}
/** ABCIParams configure functionality specific to the Application Blockchain Interface. */
export interface ABCIParamsSDKType {
    vote_extensions_enable_height: bigint;
}
export declare const ConsensusParams: {
    typeUrl: string;
    encode(message: ConsensusParams, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ConsensusParams;
    fromPartial(object: Partial<ConsensusParams>): ConsensusParams;
    fromAmino(object: ConsensusParamsAmino): ConsensusParams;
    toAmino(message: ConsensusParams): ConsensusParamsAmino;
    fromAminoMsg(object: ConsensusParamsAminoMsg): ConsensusParams;
    fromProtoMsg(message: ConsensusParamsProtoMsg): ConsensusParams;
    toProto(message: ConsensusParams): Uint8Array;
    toProtoMsg(message: ConsensusParams): ConsensusParamsProtoMsg;
};
export declare const BlockParams: {
    typeUrl: string;
    encode(message: BlockParams, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): BlockParams;
    fromPartial(object: Partial<BlockParams>): BlockParams;
    fromAmino(object: BlockParamsAmino): BlockParams;
    toAmino(message: BlockParams): BlockParamsAmino;
    fromAminoMsg(object: BlockParamsAminoMsg): BlockParams;
    fromProtoMsg(message: BlockParamsProtoMsg): BlockParams;
    toProto(message: BlockParams): Uint8Array;
    toProtoMsg(message: BlockParams): BlockParamsProtoMsg;
};
export declare const EvidenceParams: {
    typeUrl: string;
    encode(message: EvidenceParams, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): EvidenceParams;
    fromPartial(object: Partial<EvidenceParams>): EvidenceParams;
    fromAmino(object: EvidenceParamsAmino): EvidenceParams;
    toAmino(message: EvidenceParams): EvidenceParamsAmino;
    fromAminoMsg(object: EvidenceParamsAminoMsg): EvidenceParams;
    fromProtoMsg(message: EvidenceParamsProtoMsg): EvidenceParams;
    toProto(message: EvidenceParams): Uint8Array;
    toProtoMsg(message: EvidenceParams): EvidenceParamsProtoMsg;
};
export declare const ValidatorParams: {
    typeUrl: string;
    encode(message: ValidatorParams, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ValidatorParams;
    fromPartial(object: Partial<ValidatorParams>): ValidatorParams;
    fromAmino(object: ValidatorParamsAmino): ValidatorParams;
    toAmino(message: ValidatorParams): ValidatorParamsAmino;
    fromAminoMsg(object: ValidatorParamsAminoMsg): ValidatorParams;
    fromProtoMsg(message: ValidatorParamsProtoMsg): ValidatorParams;
    toProto(message: ValidatorParams): Uint8Array;
    toProtoMsg(message: ValidatorParams): ValidatorParamsProtoMsg;
};
export declare const VersionParams: {
    typeUrl: string;
    encode(message: VersionParams, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): VersionParams;
    fromPartial(object: Partial<VersionParams>): VersionParams;
    fromAmino(object: VersionParamsAmino): VersionParams;
    toAmino(message: VersionParams): VersionParamsAmino;
    fromAminoMsg(object: VersionParamsAminoMsg): VersionParams;
    fromProtoMsg(message: VersionParamsProtoMsg): VersionParams;
    toProto(message: VersionParams): Uint8Array;
    toProtoMsg(message: VersionParams): VersionParamsProtoMsg;
};
export declare const HashedParams: {
    typeUrl: string;
    encode(message: HashedParams, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): HashedParams;
    fromPartial(object: Partial<HashedParams>): HashedParams;
    fromAmino(object: HashedParamsAmino): HashedParams;
    toAmino(message: HashedParams): HashedParamsAmino;
    fromAminoMsg(object: HashedParamsAminoMsg): HashedParams;
    fromProtoMsg(message: HashedParamsProtoMsg): HashedParams;
    toProto(message: HashedParams): Uint8Array;
    toProtoMsg(message: HashedParams): HashedParamsProtoMsg;
};
export declare const ABCIParams: {
    typeUrl: string;
    encode(message: ABCIParams, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ABCIParams;
    fromPartial(object: Partial<ABCIParams>): ABCIParams;
    fromAmino(object: ABCIParamsAmino): ABCIParams;
    toAmino(message: ABCIParams): ABCIParamsAmino;
    fromAminoMsg(object: ABCIParamsAminoMsg): ABCIParams;
    fromProtoMsg(message: ABCIParamsProtoMsg): ABCIParams;
    toProto(message: ABCIParams): Uint8Array;
    toProtoMsg(message: ABCIParams): ABCIParamsProtoMsg;
};
