import { Proof, ProofAmino, ProofSDKType } from "../crypto/proof";
import { Consensus, ConsensusAmino, ConsensusSDKType } from "../version/types";
import { BlockIDFlag, ValidatorSet, ValidatorSetAmino, ValidatorSetSDKType } from "./validator";
import { BinaryReader, BinaryWriter } from "../../binary";
/** SignedMsgType is a type of signed message in the consensus. */
export declare enum SignedMsgType {
    SIGNED_MSG_TYPE_UNKNOWN = 0,
    /** SIGNED_MSG_TYPE_PREVOTE - Votes */
    SIGNED_MSG_TYPE_PREVOTE = 1,
    SIGNED_MSG_TYPE_PRECOMMIT = 2,
    /** SIGNED_MSG_TYPE_PROPOSAL - Proposals */
    SIGNED_MSG_TYPE_PROPOSAL = 32,
    UNRECOGNIZED = -1
}
export declare const SignedMsgTypeSDKType: typeof SignedMsgType;
export declare const SignedMsgTypeAmino: typeof SignedMsgType;
export declare function signedMsgTypeFromJSON(object: any): SignedMsgType;
export declare function signedMsgTypeToJSON(object: SignedMsgType): string;
/** PartsetHeader */
export interface PartSetHeader {
    total: number;
    hash: Uint8Array;
}
export interface PartSetHeaderProtoMsg {
    typeUrl: "/tendermint.types.PartSetHeader";
    value: Uint8Array;
}
/** PartsetHeader */
export interface PartSetHeaderAmino {
    total?: number;
    hash?: string;
}
export interface PartSetHeaderAminoMsg {
    type: "/tendermint.types.PartSetHeader";
    value: PartSetHeaderAmino;
}
/** PartsetHeader */
export interface PartSetHeaderSDKType {
    total: number;
    hash: Uint8Array;
}
export interface Part {
    index: number;
    bytes: Uint8Array;
    proof: Proof;
}
export interface PartProtoMsg {
    typeUrl: "/tendermint.types.Part";
    value: Uint8Array;
}
export interface PartAmino {
    index?: number;
    bytes?: string;
    proof?: ProofAmino;
}
export interface PartAminoMsg {
    type: "/tendermint.types.Part";
    value: PartAmino;
}
export interface PartSDKType {
    index: number;
    bytes: Uint8Array;
    proof: ProofSDKType;
}
/** BlockID */
export interface BlockID {
    hash: Uint8Array;
    partSetHeader: PartSetHeader;
}
export interface BlockIDProtoMsg {
    typeUrl: "/tendermint.types.BlockID";
    value: Uint8Array;
}
/** BlockID */
export interface BlockIDAmino {
    hash?: string;
    part_set_header?: PartSetHeaderAmino;
}
export interface BlockIDAminoMsg {
    type: "/tendermint.types.BlockID";
    value: BlockIDAmino;
}
/** BlockID */
export interface BlockIDSDKType {
    hash: Uint8Array;
    part_set_header: PartSetHeaderSDKType;
}
/** Header defines the structure of a block header. */
export interface Header {
    /** basic block info */
    version: Consensus;
    chainId: string;
    height: bigint;
    time: Date;
    /** prev block info */
    lastBlockId: BlockID;
    /** hashes of block data */
    lastCommitHash: Uint8Array;
    /** transactions */
    dataHash: Uint8Array;
    /** hashes from the app output from the prev block */
    validatorsHash: Uint8Array;
    /** validators for the next block */
    nextValidatorsHash: Uint8Array;
    /** consensus params for current block */
    consensusHash: Uint8Array;
    /** state after txs from the previous block */
    appHash: Uint8Array;
    /** root hash of all results from the txs from the previous block */
    lastResultsHash: Uint8Array;
    /** consensus info */
    evidenceHash: Uint8Array;
    /** original proposer of the block */
    proposerAddress: Uint8Array;
}
export interface HeaderProtoMsg {
    typeUrl: "/tendermint.types.Header";
    value: Uint8Array;
}
/** Header defines the structure of a block header. */
export interface HeaderAmino {
    /** basic block info */
    version?: ConsensusAmino;
    chain_id?: string;
    height?: string;
    time?: string;
    /** prev block info */
    last_block_id?: BlockIDAmino;
    /** hashes of block data */
    last_commit_hash?: string;
    /** transactions */
    data_hash?: string;
    /** hashes from the app output from the prev block */
    validators_hash?: string;
    /** validators for the next block */
    next_validators_hash?: string;
    /** consensus params for current block */
    consensus_hash?: string;
    /** state after txs from the previous block */
    app_hash?: string;
    /** root hash of all results from the txs from the previous block */
    last_results_hash?: string;
    /** consensus info */
    evidence_hash?: string;
    /** original proposer of the block */
    proposer_address?: string;
}
export interface HeaderAminoMsg {
    type: "/tendermint.types.Header";
    value: HeaderAmino;
}
/** Header defines the structure of a block header. */
export interface HeaderSDKType {
    version: ConsensusSDKType;
    chain_id: string;
    height: bigint;
    time: Date;
    last_block_id: BlockIDSDKType;
    last_commit_hash: Uint8Array;
    data_hash: Uint8Array;
    validators_hash: Uint8Array;
    next_validators_hash: Uint8Array;
    consensus_hash: Uint8Array;
    app_hash: Uint8Array;
    last_results_hash: Uint8Array;
    evidence_hash: Uint8Array;
    proposer_address: Uint8Array;
}
/** Data contains the set of transactions included in the block */
export interface Data {
    /**
     * Txs that will be applied by state @ block.Height+1.
     * NOTE: not all txs here are valid.  We're just agreeing on the order first.
     * This means that block.AppHash does not include these txs.
     */
    txs: Uint8Array[];
}
export interface DataProtoMsg {
    typeUrl: "/tendermint.types.Data";
    value: Uint8Array;
}
/** Data contains the set of transactions included in the block */
export interface DataAmino {
    /**
     * Txs that will be applied by state @ block.Height+1.
     * NOTE: not all txs here are valid.  We're just agreeing on the order first.
     * This means that block.AppHash does not include these txs.
     */
    txs?: string[];
}
export interface DataAminoMsg {
    type: "/tendermint.types.Data";
    value: DataAmino;
}
/** Data contains the set of transactions included in the block */
export interface DataSDKType {
    txs: Uint8Array[];
}
/**
 * Vote represents a prevote or precommit vote from validators for
 * consensus.
 */
export interface Vote {
    type: SignedMsgType;
    height: bigint;
    round: number;
    blockId: BlockID;
    timestamp: Date;
    validatorAddress: Uint8Array;
    validatorIndex: number;
    /**
     * Vote signature by the validator if they participated in consensus for the
     * associated block.
     */
    signature: Uint8Array;
    /**
     * Vote extension provided by the application. Only valid for precommit
     * messages.
     */
    extension: Uint8Array;
    /**
     * Vote extension signature by the validator if they participated in
     * consensus for the associated block.
     * Only valid for precommit messages.
     */
    extensionSignature: Uint8Array;
}
export interface VoteProtoMsg {
    typeUrl: "/tendermint.types.Vote";
    value: Uint8Array;
}
/**
 * Vote represents a prevote or precommit vote from validators for
 * consensus.
 */
export interface VoteAmino {
    type?: SignedMsgType;
    height?: string;
    round?: number;
    block_id?: BlockIDAmino;
    timestamp?: string;
    validator_address?: string;
    validator_index?: number;
    /**
     * Vote signature by the validator if they participated in consensus for the
     * associated block.
     */
    signature?: string;
    /**
     * Vote extension provided by the application. Only valid for precommit
     * messages.
     */
    extension?: string;
    /**
     * Vote extension signature by the validator if they participated in
     * consensus for the associated block.
     * Only valid for precommit messages.
     */
    extension_signature?: string;
}
export interface VoteAminoMsg {
    type: "/tendermint.types.Vote";
    value: VoteAmino;
}
/**
 * Vote represents a prevote or precommit vote from validators for
 * consensus.
 */
export interface VoteSDKType {
    type: SignedMsgType;
    height: bigint;
    round: number;
    block_id: BlockIDSDKType;
    timestamp: Date;
    validator_address: Uint8Array;
    validator_index: number;
    signature: Uint8Array;
    extension: Uint8Array;
    extension_signature: Uint8Array;
}
/** Commit contains the evidence that a block was committed by a set of validators. */
export interface Commit {
    height: bigint;
    round: number;
    blockId: BlockID;
    signatures: CommitSig[];
}
export interface CommitProtoMsg {
    typeUrl: "/tendermint.types.Commit";
    value: Uint8Array;
}
/** Commit contains the evidence that a block was committed by a set of validators. */
export interface CommitAmino {
    height?: string;
    round?: number;
    block_id?: BlockIDAmino;
    signatures?: CommitSigAmino[];
}
export interface CommitAminoMsg {
    type: "/tendermint.types.Commit";
    value: CommitAmino;
}
/** Commit contains the evidence that a block was committed by a set of validators. */
export interface CommitSDKType {
    height: bigint;
    round: number;
    block_id: BlockIDSDKType;
    signatures: CommitSigSDKType[];
}
/** CommitSig is a part of the Vote included in a Commit. */
export interface CommitSig {
    blockIdFlag: BlockIDFlag;
    validatorAddress: Uint8Array;
    timestamp: Date;
    signature: Uint8Array;
}
export interface CommitSigProtoMsg {
    typeUrl: "/tendermint.types.CommitSig";
    value: Uint8Array;
}
/** CommitSig is a part of the Vote included in a Commit. */
export interface CommitSigAmino {
    block_id_flag?: BlockIDFlag;
    validator_address?: string;
    timestamp?: string;
    signature?: string;
}
export interface CommitSigAminoMsg {
    type: "/tendermint.types.CommitSig";
    value: CommitSigAmino;
}
/** CommitSig is a part of the Vote included in a Commit. */
export interface CommitSigSDKType {
    block_id_flag: BlockIDFlag;
    validator_address: Uint8Array;
    timestamp: Date;
    signature: Uint8Array;
}
export interface ExtendedCommit {
    height: bigint;
    round: number;
    blockId: BlockID;
    extendedSignatures: ExtendedCommitSig[];
}
export interface ExtendedCommitProtoMsg {
    typeUrl: "/tendermint.types.ExtendedCommit";
    value: Uint8Array;
}
export interface ExtendedCommitAmino {
    height?: string;
    round?: number;
    block_id?: BlockIDAmino;
    extended_signatures?: ExtendedCommitSigAmino[];
}
export interface ExtendedCommitAminoMsg {
    type: "/tendermint.types.ExtendedCommit";
    value: ExtendedCommitAmino;
}
export interface ExtendedCommitSDKType {
    height: bigint;
    round: number;
    block_id: BlockIDSDKType;
    extended_signatures: ExtendedCommitSigSDKType[];
}
/**
 * ExtendedCommitSig retains all the same fields as CommitSig but adds vote
 * extension-related fields. We use two signatures to ensure backwards compatibility.
 * That is the digest of the original signature is still the same in prior versions
 */
export interface ExtendedCommitSig {
    blockIdFlag: BlockIDFlag;
    validatorAddress: Uint8Array;
    timestamp: Date;
    signature: Uint8Array;
    /** Vote extension data */
    extension: Uint8Array;
    /** Vote extension signature */
    extensionSignature: Uint8Array;
}
export interface ExtendedCommitSigProtoMsg {
    typeUrl: "/tendermint.types.ExtendedCommitSig";
    value: Uint8Array;
}
/**
 * ExtendedCommitSig retains all the same fields as CommitSig but adds vote
 * extension-related fields. We use two signatures to ensure backwards compatibility.
 * That is the digest of the original signature is still the same in prior versions
 */
export interface ExtendedCommitSigAmino {
    block_id_flag?: BlockIDFlag;
    validator_address?: string;
    timestamp?: string;
    signature?: string;
    /** Vote extension data */
    extension?: string;
    /** Vote extension signature */
    extension_signature?: string;
}
export interface ExtendedCommitSigAminoMsg {
    type: "/tendermint.types.ExtendedCommitSig";
    value: ExtendedCommitSigAmino;
}
/**
 * ExtendedCommitSig retains all the same fields as CommitSig but adds vote
 * extension-related fields. We use two signatures to ensure backwards compatibility.
 * That is the digest of the original signature is still the same in prior versions
 */
export interface ExtendedCommitSigSDKType {
    block_id_flag: BlockIDFlag;
    validator_address: Uint8Array;
    timestamp: Date;
    signature: Uint8Array;
    extension: Uint8Array;
    extension_signature: Uint8Array;
}
export interface Proposal {
    type: SignedMsgType;
    height: bigint;
    round: number;
    polRound: number;
    blockId: BlockID;
    timestamp: Date;
    signature: Uint8Array;
}
export interface ProposalProtoMsg {
    typeUrl: "/tendermint.types.Proposal";
    value: Uint8Array;
}
export interface ProposalAmino {
    type?: SignedMsgType;
    height?: string;
    round?: number;
    pol_round?: number;
    block_id?: BlockIDAmino;
    timestamp?: string;
    signature?: string;
}
export interface ProposalAminoMsg {
    type: "/tendermint.types.Proposal";
    value: ProposalAmino;
}
export interface ProposalSDKType {
    type: SignedMsgType;
    height: bigint;
    round: number;
    pol_round: number;
    block_id: BlockIDSDKType;
    timestamp: Date;
    signature: Uint8Array;
}
export interface SignedHeader {
    header?: Header;
    commit?: Commit;
}
export interface SignedHeaderProtoMsg {
    typeUrl: "/tendermint.types.SignedHeader";
    value: Uint8Array;
}
export interface SignedHeaderAmino {
    header?: HeaderAmino;
    commit?: CommitAmino;
}
export interface SignedHeaderAminoMsg {
    type: "/tendermint.types.SignedHeader";
    value: SignedHeaderAmino;
}
export interface SignedHeaderSDKType {
    header?: HeaderSDKType;
    commit?: CommitSDKType;
}
export interface LightBlock {
    signedHeader?: SignedHeader;
    validatorSet?: ValidatorSet;
}
export interface LightBlockProtoMsg {
    typeUrl: "/tendermint.types.LightBlock";
    value: Uint8Array;
}
export interface LightBlockAmino {
    signed_header?: SignedHeaderAmino;
    validator_set?: ValidatorSetAmino;
}
export interface LightBlockAminoMsg {
    type: "/tendermint.types.LightBlock";
    value: LightBlockAmino;
}
export interface LightBlockSDKType {
    signed_header?: SignedHeaderSDKType;
    validator_set?: ValidatorSetSDKType;
}
export interface BlockMeta {
    blockId: BlockID;
    blockSize: bigint;
    header: Header;
    numTxs: bigint;
}
export interface BlockMetaProtoMsg {
    typeUrl: "/tendermint.types.BlockMeta";
    value: Uint8Array;
}
export interface BlockMetaAmino {
    block_id?: BlockIDAmino;
    block_size?: string;
    header?: HeaderAmino;
    num_txs?: string;
}
export interface BlockMetaAminoMsg {
    type: "/tendermint.types.BlockMeta";
    value: BlockMetaAmino;
}
export interface BlockMetaSDKType {
    block_id: BlockIDSDKType;
    block_size: bigint;
    header: HeaderSDKType;
    num_txs: bigint;
}
/** TxProof represents a Merkle proof of the presence of a transaction in the Merkle tree. */
export interface TxProof {
    rootHash: Uint8Array;
    data: Uint8Array;
    proof?: Proof;
}
export interface TxProofProtoMsg {
    typeUrl: "/tendermint.types.TxProof";
    value: Uint8Array;
}
/** TxProof represents a Merkle proof of the presence of a transaction in the Merkle tree. */
export interface TxProofAmino {
    root_hash?: string;
    data?: string;
    proof?: ProofAmino;
}
export interface TxProofAminoMsg {
    type: "/tendermint.types.TxProof";
    value: TxProofAmino;
}
/** TxProof represents a Merkle proof of the presence of a transaction in the Merkle tree. */
export interface TxProofSDKType {
    root_hash: Uint8Array;
    data: Uint8Array;
    proof?: ProofSDKType;
}
export declare const PartSetHeader: {
    typeUrl: string;
    encode(message: PartSetHeader, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): PartSetHeader;
    fromPartial(object: Partial<PartSetHeader>): PartSetHeader;
    fromAmino(object: PartSetHeaderAmino): PartSetHeader;
    toAmino(message: PartSetHeader): PartSetHeaderAmino;
    fromAminoMsg(object: PartSetHeaderAminoMsg): PartSetHeader;
    fromProtoMsg(message: PartSetHeaderProtoMsg): PartSetHeader;
    toProto(message: PartSetHeader): Uint8Array;
    toProtoMsg(message: PartSetHeader): PartSetHeaderProtoMsg;
};
export declare const Part: {
    typeUrl: string;
    encode(message: Part, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Part;
    fromPartial(object: Partial<Part>): Part;
    fromAmino(object: PartAmino): Part;
    toAmino(message: Part): PartAmino;
    fromAminoMsg(object: PartAminoMsg): Part;
    fromProtoMsg(message: PartProtoMsg): Part;
    toProto(message: Part): Uint8Array;
    toProtoMsg(message: Part): PartProtoMsg;
};
export declare const BlockID: {
    typeUrl: string;
    encode(message: BlockID, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): BlockID;
    fromPartial(object: Partial<BlockID>): BlockID;
    fromAmino(object: BlockIDAmino): BlockID;
    toAmino(message: BlockID): BlockIDAmino;
    fromAminoMsg(object: BlockIDAminoMsg): BlockID;
    fromProtoMsg(message: BlockIDProtoMsg): BlockID;
    toProto(message: BlockID): Uint8Array;
    toProtoMsg(message: BlockID): BlockIDProtoMsg;
};
export declare const Header: {
    typeUrl: string;
    encode(message: Header, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Header;
    fromPartial(object: Partial<Header>): Header;
    fromAmino(object: HeaderAmino): Header;
    toAmino(message: Header): HeaderAmino;
    fromAminoMsg(object: HeaderAminoMsg): Header;
    fromProtoMsg(message: HeaderProtoMsg): Header;
    toProto(message: Header): Uint8Array;
    toProtoMsg(message: Header): HeaderProtoMsg;
};
export declare const Data: {
    typeUrl: string;
    encode(message: Data, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Data;
    fromPartial(object: Partial<Data>): Data;
    fromAmino(object: DataAmino): Data;
    toAmino(message: Data): DataAmino;
    fromAminoMsg(object: DataAminoMsg): Data;
    fromProtoMsg(message: DataProtoMsg): Data;
    toProto(message: Data): Uint8Array;
    toProtoMsg(message: Data): DataProtoMsg;
};
export declare const Vote: {
    typeUrl: string;
    encode(message: Vote, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Vote;
    fromPartial(object: Partial<Vote>): Vote;
    fromAmino(object: VoteAmino): Vote;
    toAmino(message: Vote): VoteAmino;
    fromAminoMsg(object: VoteAminoMsg): Vote;
    fromProtoMsg(message: VoteProtoMsg): Vote;
    toProto(message: Vote): Uint8Array;
    toProtoMsg(message: Vote): VoteProtoMsg;
};
export declare const Commit: {
    typeUrl: string;
    encode(message: Commit, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Commit;
    fromPartial(object: Partial<Commit>): Commit;
    fromAmino(object: CommitAmino): Commit;
    toAmino(message: Commit): CommitAmino;
    fromAminoMsg(object: CommitAminoMsg): Commit;
    fromProtoMsg(message: CommitProtoMsg): Commit;
    toProto(message: Commit): Uint8Array;
    toProtoMsg(message: Commit): CommitProtoMsg;
};
export declare const CommitSig: {
    typeUrl: string;
    encode(message: CommitSig, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): CommitSig;
    fromPartial(object: Partial<CommitSig>): CommitSig;
    fromAmino(object: CommitSigAmino): CommitSig;
    toAmino(message: CommitSig): CommitSigAmino;
    fromAminoMsg(object: CommitSigAminoMsg): CommitSig;
    fromProtoMsg(message: CommitSigProtoMsg): CommitSig;
    toProto(message: CommitSig): Uint8Array;
    toProtoMsg(message: CommitSig): CommitSigProtoMsg;
};
export declare const ExtendedCommit: {
    typeUrl: string;
    encode(message: ExtendedCommit, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ExtendedCommit;
    fromPartial(object: Partial<ExtendedCommit>): ExtendedCommit;
    fromAmino(object: ExtendedCommitAmino): ExtendedCommit;
    toAmino(message: ExtendedCommit): ExtendedCommitAmino;
    fromAminoMsg(object: ExtendedCommitAminoMsg): ExtendedCommit;
    fromProtoMsg(message: ExtendedCommitProtoMsg): ExtendedCommit;
    toProto(message: ExtendedCommit): Uint8Array;
    toProtoMsg(message: ExtendedCommit): ExtendedCommitProtoMsg;
};
export declare const ExtendedCommitSig: {
    typeUrl: string;
    encode(message: ExtendedCommitSig, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ExtendedCommitSig;
    fromPartial(object: Partial<ExtendedCommitSig>): ExtendedCommitSig;
    fromAmino(object: ExtendedCommitSigAmino): ExtendedCommitSig;
    toAmino(message: ExtendedCommitSig): ExtendedCommitSigAmino;
    fromAminoMsg(object: ExtendedCommitSigAminoMsg): ExtendedCommitSig;
    fromProtoMsg(message: ExtendedCommitSigProtoMsg): ExtendedCommitSig;
    toProto(message: ExtendedCommitSig): Uint8Array;
    toProtoMsg(message: ExtendedCommitSig): ExtendedCommitSigProtoMsg;
};
export declare const Proposal: {
    typeUrl: string;
    encode(message: Proposal, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Proposal;
    fromPartial(object: Partial<Proposal>): Proposal;
    fromAmino(object: ProposalAmino): Proposal;
    toAmino(message: Proposal): ProposalAmino;
    fromAminoMsg(object: ProposalAminoMsg): Proposal;
    fromProtoMsg(message: ProposalProtoMsg): Proposal;
    toProto(message: Proposal): Uint8Array;
    toProtoMsg(message: Proposal): ProposalProtoMsg;
};
export declare const SignedHeader: {
    typeUrl: string;
    encode(message: SignedHeader, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): SignedHeader;
    fromPartial(object: Partial<SignedHeader>): SignedHeader;
    fromAmino(object: SignedHeaderAmino): SignedHeader;
    toAmino(message: SignedHeader): SignedHeaderAmino;
    fromAminoMsg(object: SignedHeaderAminoMsg): SignedHeader;
    fromProtoMsg(message: SignedHeaderProtoMsg): SignedHeader;
    toProto(message: SignedHeader): Uint8Array;
    toProtoMsg(message: SignedHeader): SignedHeaderProtoMsg;
};
export declare const LightBlock: {
    typeUrl: string;
    encode(message: LightBlock, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): LightBlock;
    fromPartial(object: Partial<LightBlock>): LightBlock;
    fromAmino(object: LightBlockAmino): LightBlock;
    toAmino(message: LightBlock): LightBlockAmino;
    fromAminoMsg(object: LightBlockAminoMsg): LightBlock;
    fromProtoMsg(message: LightBlockProtoMsg): LightBlock;
    toProto(message: LightBlock): Uint8Array;
    toProtoMsg(message: LightBlock): LightBlockProtoMsg;
};
export declare const BlockMeta: {
    typeUrl: string;
    encode(message: BlockMeta, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): BlockMeta;
    fromPartial(object: Partial<BlockMeta>): BlockMeta;
    fromAmino(object: BlockMetaAmino): BlockMeta;
    toAmino(message: BlockMeta): BlockMetaAmino;
    fromAminoMsg(object: BlockMetaAminoMsg): BlockMeta;
    fromProtoMsg(message: BlockMetaProtoMsg): BlockMeta;
    toProto(message: BlockMeta): Uint8Array;
    toProtoMsg(message: BlockMeta): BlockMetaProtoMsg;
};
export declare const TxProof: {
    typeUrl: string;
    encode(message: TxProof, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): TxProof;
    fromPartial(object: Partial<TxProof>): TxProof;
    fromAmino(object: TxProofAmino): TxProof;
    toAmino(message: TxProof): TxProofAmino;
    fromAminoMsg(object: TxProofAminoMsg): TxProof;
    fromProtoMsg(message: TxProofProtoMsg): TxProof;
    toProto(message: TxProof): Uint8Array;
    toProtoMsg(message: TxProof): TxProofProtoMsg;
};
