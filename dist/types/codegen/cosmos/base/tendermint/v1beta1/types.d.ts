import { Data, DataAmino, DataSDKType, Commit, CommitAmino, CommitSDKType, BlockID, BlockIDAmino, BlockIDSDKType } from "../../../../tendermint/types/types";
import { EvidenceList, EvidenceListAmino, EvidenceListSDKType } from "../../../../tendermint/types/evidence";
import { Consensus, ConsensusAmino, ConsensusSDKType } from "../../../../tendermint/version/types";
import { BinaryReader, BinaryWriter } from "../../../../binary";
/**
 * Block is tendermint type Block, with the Header proposer address
 * field converted to bech32 string.
 */
export interface Block {
    header: Header;
    data: Data;
    evidence: EvidenceList;
    lastCommit?: Commit;
}
export interface BlockProtoMsg {
    typeUrl: "/cosmos.base.tendermint.v1beta1.Block";
    value: Uint8Array;
}
/**
 * Block is tendermint type Block, with the Header proposer address
 * field converted to bech32 string.
 */
export interface BlockAmino {
    header: HeaderAmino;
    data: DataAmino;
    evidence: EvidenceListAmino;
    last_commit?: CommitAmino;
}
export interface BlockAminoMsg {
    type: "cosmos-sdk/Block";
    value: BlockAmino;
}
/**
 * Block is tendermint type Block, with the Header proposer address
 * field converted to bech32 string.
 */
export interface BlockSDKType {
    header: HeaderSDKType;
    data: DataSDKType;
    evidence: EvidenceListSDKType;
    last_commit?: CommitSDKType;
}
/** Header defines the structure of a Tendermint block header. */
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
    /**
     * proposer_address is the original block proposer address, formatted as a Bech32 string.
     * In Tendermint, this type is `bytes`, but in the SDK, we convert it to a Bech32 string
     * for better UX.
     */
    proposerAddress: string;
}
export interface HeaderProtoMsg {
    typeUrl: "/cosmos.base.tendermint.v1beta1.Header";
    value: Uint8Array;
}
/** Header defines the structure of a Tendermint block header. */
export interface HeaderAmino {
    /** basic block info */
    version: ConsensusAmino;
    chain_id?: string;
    height?: string;
    time: string;
    /** prev block info */
    last_block_id: BlockIDAmino;
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
    /**
     * proposer_address is the original block proposer address, formatted as a Bech32 string.
     * In Tendermint, this type is `bytes`, but in the SDK, we convert it to a Bech32 string
     * for better UX.
     */
    proposer_address?: string;
}
export interface HeaderAminoMsg {
    type: "cosmos-sdk/Header";
    value: HeaderAmino;
}
/** Header defines the structure of a Tendermint block header. */
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
    proposer_address: string;
}
export declare const Block: {
    typeUrl: string;
    encode(message: Block, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Block;
    fromPartial(object: Partial<Block>): Block;
    fromAmino(object: BlockAmino): Block;
    toAmino(message: Block): BlockAmino;
    fromAminoMsg(object: BlockAminoMsg): Block;
    toAminoMsg(message: Block): BlockAminoMsg;
    fromProtoMsg(message: BlockProtoMsg): Block;
    toProto(message: Block): Uint8Array;
    toProtoMsg(message: Block): BlockProtoMsg;
};
export declare const Header: {
    typeUrl: string;
    encode(message: Header, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Header;
    fromPartial(object: Partial<Header>): Header;
    fromAmino(object: HeaderAmino): Header;
    toAmino(message: Header): HeaderAmino;
    fromAminoMsg(object: HeaderAminoMsg): Header;
    toAminoMsg(message: Header): HeaderAminoMsg;
    fromProtoMsg(message: HeaderProtoMsg): Header;
    toProto(message: Header): Uint8Array;
    toProtoMsg(message: Header): HeaderProtoMsg;
};
