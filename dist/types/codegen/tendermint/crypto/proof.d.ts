import { BinaryReader, BinaryWriter } from "../../binary";
export interface Proof {
    total: bigint;
    index: bigint;
    leafHash: Uint8Array;
    aunts: Uint8Array[];
}
export interface ProofProtoMsg {
    typeUrl: "/tendermint.crypto.Proof";
    value: Uint8Array;
}
/**
 * @name ProofAmino
 * @package tendermint.crypto
 * @see proto type: tendermint.crypto.Proof
 */
export interface ProofAmino {
    total?: string;
    index?: string;
    leaf_hash?: string;
    aunts?: string[];
}
export interface ProofAminoMsg {
    type: "/tendermint.crypto.Proof";
    value: ProofAmino;
}
export interface ProofSDKType {
    total: bigint;
    index: bigint;
    leaf_hash: Uint8Array;
    aunts: Uint8Array[];
}
export interface ValueOp {
    /** Encoded in ProofOp.Key. */
    key: Uint8Array;
    /** To encode in ProofOp.Data */
    proof?: Proof;
}
export interface ValueOpProtoMsg {
    typeUrl: "/tendermint.crypto.ValueOp";
    value: Uint8Array;
}
/**
 * @name ValueOpAmino
 * @package tendermint.crypto
 * @see proto type: tendermint.crypto.ValueOp
 */
export interface ValueOpAmino {
    /**
     * Encoded in ProofOp.Key.
     */
    key?: string;
    /**
     * To encode in ProofOp.Data
     */
    proof?: ProofAmino;
}
export interface ValueOpAminoMsg {
    type: "/tendermint.crypto.ValueOp";
    value: ValueOpAmino;
}
export interface ValueOpSDKType {
    key: Uint8Array;
    proof?: ProofSDKType;
}
export interface DominoOp {
    key: string;
    input: string;
    output: string;
}
export interface DominoOpProtoMsg {
    typeUrl: "/tendermint.crypto.DominoOp";
    value: Uint8Array;
}
/**
 * @name DominoOpAmino
 * @package tendermint.crypto
 * @see proto type: tendermint.crypto.DominoOp
 */
export interface DominoOpAmino {
    key?: string;
    input?: string;
    output?: string;
}
export interface DominoOpAminoMsg {
    type: "/tendermint.crypto.DominoOp";
    value: DominoOpAmino;
}
export interface DominoOpSDKType {
    key: string;
    input: string;
    output: string;
}
/**
 * ProofOp defines an operation used for calculating Merkle root
 * The data could be arbitrary format, providing nessecary data
 * for example neighbouring node hash
 */
export interface ProofOp {
    type: string;
    key: Uint8Array;
    data: Uint8Array;
}
export interface ProofOpProtoMsg {
    typeUrl: "/tendermint.crypto.ProofOp";
    value: Uint8Array;
}
/**
 * ProofOp defines an operation used for calculating Merkle root
 * The data could be arbitrary format, providing nessecary data
 * for example neighbouring node hash
 * @name ProofOpAmino
 * @package tendermint.crypto
 * @see proto type: tendermint.crypto.ProofOp
 */
export interface ProofOpAmino {
    type?: string;
    key?: string;
    data?: string;
}
export interface ProofOpAminoMsg {
    type: "/tendermint.crypto.ProofOp";
    value: ProofOpAmino;
}
/**
 * ProofOp defines an operation used for calculating Merkle root
 * The data could be arbitrary format, providing nessecary data
 * for example neighbouring node hash
 */
export interface ProofOpSDKType {
    type: string;
    key: Uint8Array;
    data: Uint8Array;
}
/** ProofOps is Merkle proof defined by the list of ProofOps */
export interface ProofOps {
    ops: ProofOp[];
}
export interface ProofOpsProtoMsg {
    typeUrl: "/tendermint.crypto.ProofOps";
    value: Uint8Array;
}
/**
 * ProofOps is Merkle proof defined by the list of ProofOps
 * @name ProofOpsAmino
 * @package tendermint.crypto
 * @see proto type: tendermint.crypto.ProofOps
 */
export interface ProofOpsAmino {
    ops?: ProofOpAmino[];
}
export interface ProofOpsAminoMsg {
    type: "/tendermint.crypto.ProofOps";
    value: ProofOpsAmino;
}
/** ProofOps is Merkle proof defined by the list of ProofOps */
export interface ProofOpsSDKType {
    ops: ProofOpSDKType[];
}
export declare const Proof: {
    typeUrl: string;
    encode(message: Proof, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Proof;
    fromPartial(object: Partial<Proof>): Proof;
    fromAmino(object: ProofAmino): Proof;
    toAmino(message: Proof): ProofAmino;
    fromAminoMsg(object: ProofAminoMsg): Proof;
    fromProtoMsg(message: ProofProtoMsg): Proof;
    toProto(message: Proof): Uint8Array;
    toProtoMsg(message: Proof): ProofProtoMsg;
};
export declare const ValueOp: {
    typeUrl: string;
    encode(message: ValueOp, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ValueOp;
    fromPartial(object: Partial<ValueOp>): ValueOp;
    fromAmino(object: ValueOpAmino): ValueOp;
    toAmino(message: ValueOp): ValueOpAmino;
    fromAminoMsg(object: ValueOpAminoMsg): ValueOp;
    fromProtoMsg(message: ValueOpProtoMsg): ValueOp;
    toProto(message: ValueOp): Uint8Array;
    toProtoMsg(message: ValueOp): ValueOpProtoMsg;
};
export declare const DominoOp: {
    typeUrl: string;
    encode(message: DominoOp, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): DominoOp;
    fromPartial(object: Partial<DominoOp>): DominoOp;
    fromAmino(object: DominoOpAmino): DominoOp;
    toAmino(message: DominoOp): DominoOpAmino;
    fromAminoMsg(object: DominoOpAminoMsg): DominoOp;
    fromProtoMsg(message: DominoOpProtoMsg): DominoOp;
    toProto(message: DominoOp): Uint8Array;
    toProtoMsg(message: DominoOp): DominoOpProtoMsg;
};
export declare const ProofOp: {
    typeUrl: string;
    encode(message: ProofOp, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ProofOp;
    fromPartial(object: Partial<ProofOp>): ProofOp;
    fromAmino(object: ProofOpAmino): ProofOp;
    toAmino(message: ProofOp): ProofOpAmino;
    fromAminoMsg(object: ProofOpAminoMsg): ProofOp;
    fromProtoMsg(message: ProofOpProtoMsg): ProofOp;
    toProto(message: ProofOp): Uint8Array;
    toProtoMsg(message: ProofOp): ProofOpProtoMsg;
};
export declare const ProofOps: {
    typeUrl: string;
    encode(message: ProofOps, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ProofOps;
    fromPartial(object: Partial<ProofOps>): ProofOps;
    fromAmino(object: ProofOpsAmino): ProofOps;
    toAmino(message: ProofOps): ProofOpsAmino;
    fromAminoMsg(object: ProofOpsAminoMsg): ProofOps;
    fromProtoMsg(message: ProofOpsProtoMsg): ProofOps;
    toProto(message: ProofOps): Uint8Array;
    toProtoMsg(message: ProofOps): ProofOpsProtoMsg;
};
