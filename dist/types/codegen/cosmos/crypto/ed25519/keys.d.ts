import { BinaryReader, BinaryWriter } from "../../../binary";
/**
 * PubKey is an ed25519 public key for handling Tendermint keys in SDK.
 * It's needed for Any serialization and SDK compatibility.
 * It must not be used in a non Tendermint key context because it doesn't implement
 * ADR-28. Nevertheless, you will like to use ed25519 in app user level
 * then you must create a new proto message and follow ADR-28 for Address construction.
 */
export interface PubKey {
    key: Uint8Array;
}
export interface PubKeyProtoMsg {
    typeUrl: "/cosmos.crypto.ed25519.PubKey";
    value: Uint8Array;
}
/**
 * PubKey is an ed25519 public key for handling Tendermint keys in SDK.
 * It's needed for Any serialization and SDK compatibility.
 * It must not be used in a non Tendermint key context because it doesn't implement
 * ADR-28. Nevertheless, you will like to use ed25519 in app user level
 * then you must create a new proto message and follow ADR-28 for Address construction.
 * @name PubKeyAmino
 * @package cosmos.crypto.ed25519
 * @see proto type: cosmos.crypto.ed25519.PubKey
 */
export interface PubKeyAmino {
    key?: string;
}
export interface PubKeyAminoMsg {
    type: "tendermint/PubKeyEd25519";
    value: PubKeyAmino;
}
/**
 * PubKey is an ed25519 public key for handling Tendermint keys in SDK.
 * It's needed for Any serialization and SDK compatibility.
 * It must not be used in a non Tendermint key context because it doesn't implement
 * ADR-28. Nevertheless, you will like to use ed25519 in app user level
 * then you must create a new proto message and follow ADR-28 for Address construction.
 */
export interface PubKeySDKType {
    key: Uint8Array;
}
/**
 * Deprecated: PrivKey defines a ed25519 private key.
 * NOTE: ed25519 keys must not be used in SDK apps except in a tendermint validator context.
 */
export interface PrivKey {
    key: Uint8Array;
}
export interface PrivKeyProtoMsg {
    typeUrl: "/cosmos.crypto.ed25519.PrivKey";
    value: Uint8Array;
}
/**
 * Deprecated: PrivKey defines a ed25519 private key.
 * NOTE: ed25519 keys must not be used in SDK apps except in a tendermint validator context.
 * @name PrivKeyAmino
 * @package cosmos.crypto.ed25519
 * @see proto type: cosmos.crypto.ed25519.PrivKey
 */
export interface PrivKeyAmino {
    key?: string;
}
export interface PrivKeyAminoMsg {
    type: "tendermint/PrivKeyEd25519";
    value: PrivKeyAmino;
}
/**
 * Deprecated: PrivKey defines a ed25519 private key.
 * NOTE: ed25519 keys must not be used in SDK apps except in a tendermint validator context.
 */
export interface PrivKeySDKType {
    key: Uint8Array;
}
export declare const PubKey: {
    typeUrl: string;
    encode(message: PubKey, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): PubKey;
    fromPartial(object: Partial<PubKey>): PubKey;
    fromAmino(object: PubKeyAmino): PubKey;
    toAmino(message: PubKey): PubKeyAmino;
    fromAminoMsg(object: PubKeyAminoMsg): PubKey;
    toAminoMsg(message: PubKey): PubKeyAminoMsg;
    fromProtoMsg(message: PubKeyProtoMsg): PubKey;
    toProto(message: PubKey): Uint8Array;
    toProtoMsg(message: PubKey): PubKeyProtoMsg;
};
export declare const PrivKey: {
    typeUrl: string;
    encode(message: PrivKey, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): PrivKey;
    fromPartial(object: Partial<PrivKey>): PrivKey;
    fromAmino(object: PrivKeyAmino): PrivKey;
    toAmino(message: PrivKey): PrivKeyAmino;
    fromAminoMsg(object: PrivKeyAminoMsg): PrivKey;
    toAminoMsg(message: PrivKey): PrivKeyAminoMsg;
    fromProtoMsg(message: PrivKeyProtoMsg): PrivKey;
    toProto(message: PrivKey): Uint8Array;
    toProtoMsg(message: PrivKey): PrivKeyProtoMsg;
};
