import { PublicKey, PublicKeyAmino, PublicKeySDKType } from "../crypto/keys";
import { BinaryReader, BinaryWriter } from "../../binary";
export interface ValidatorSet {
    validators: Validator[];
    proposer?: Validator;
    totalVotingPower: bigint;
}
export interface ValidatorSetProtoMsg {
    typeUrl: "/tendermint.types.ValidatorSet";
    value: Uint8Array;
}
export interface ValidatorSetAmino {
    validators?: ValidatorAmino[];
    proposer?: ValidatorAmino;
    total_voting_power?: string;
}
export interface ValidatorSetAminoMsg {
    type: "/tendermint.types.ValidatorSet";
    value: ValidatorSetAmino;
}
export interface ValidatorSetSDKType {
    validators: ValidatorSDKType[];
    proposer?: ValidatorSDKType;
    total_voting_power: bigint;
}
export interface Validator {
    address: Uint8Array;
    pubKey: PublicKey;
    votingPower: bigint;
    proposerPriority: bigint;
}
export interface ValidatorProtoMsg {
    typeUrl: "/tendermint.types.Validator";
    value: Uint8Array;
}
export interface ValidatorAmino {
    address?: string;
    pub_key?: PublicKeyAmino;
    voting_power?: string;
    proposer_priority?: string;
}
export interface ValidatorAminoMsg {
    type: "/tendermint.types.Validator";
    value: ValidatorAmino;
}
export interface ValidatorSDKType {
    address: Uint8Array;
    pub_key: PublicKeySDKType;
    voting_power: bigint;
    proposer_priority: bigint;
}
export interface SimpleValidator {
    pubKey?: PublicKey;
    votingPower: bigint;
}
export interface SimpleValidatorProtoMsg {
    typeUrl: "/tendermint.types.SimpleValidator";
    value: Uint8Array;
}
export interface SimpleValidatorAmino {
    pub_key?: PublicKeyAmino;
    voting_power?: string;
}
export interface SimpleValidatorAminoMsg {
    type: "/tendermint.types.SimpleValidator";
    value: SimpleValidatorAmino;
}
export interface SimpleValidatorSDKType {
    pub_key?: PublicKeySDKType;
    voting_power: bigint;
}
export declare const ValidatorSet: {
    typeUrl: string;
    encode(message: ValidatorSet, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ValidatorSet;
    fromPartial(object: Partial<ValidatorSet>): ValidatorSet;
    fromAmino(object: ValidatorSetAmino): ValidatorSet;
    toAmino(message: ValidatorSet): ValidatorSetAmino;
    fromAminoMsg(object: ValidatorSetAminoMsg): ValidatorSet;
    fromProtoMsg(message: ValidatorSetProtoMsg): ValidatorSet;
    toProto(message: ValidatorSet): Uint8Array;
    toProtoMsg(message: ValidatorSet): ValidatorSetProtoMsg;
};
export declare const Validator: {
    typeUrl: string;
    encode(message: Validator, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Validator;
    fromPartial(object: Partial<Validator>): Validator;
    fromAmino(object: ValidatorAmino): Validator;
    toAmino(message: Validator): ValidatorAmino;
    fromAminoMsg(object: ValidatorAminoMsg): Validator;
    fromProtoMsg(message: ValidatorProtoMsg): Validator;
    toProto(message: Validator): Uint8Array;
    toProtoMsg(message: Validator): ValidatorProtoMsg;
};
export declare const SimpleValidator: {
    typeUrl: string;
    encode(message: SimpleValidator, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): SimpleValidator;
    fromPartial(object: Partial<SimpleValidator>): SimpleValidator;
    fromAmino(object: SimpleValidatorAmino): SimpleValidator;
    toAmino(message: SimpleValidator): SimpleValidatorAmino;
    fromAminoMsg(object: SimpleValidatorAminoMsg): SimpleValidator;
    fromProtoMsg(message: SimpleValidatorProtoMsg): SimpleValidator;
    toProto(message: SimpleValidator): Uint8Array;
    toProtoMsg(message: SimpleValidator): SimpleValidatorProtoMsg;
};
