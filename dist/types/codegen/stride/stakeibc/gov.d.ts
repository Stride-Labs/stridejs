import { Validator, ValidatorAmino, ValidatorSDKType } from "./validator";
import { BinaryReader, BinaryWriter } from "../../binary";
export interface AddValidatorsProposal {
    title: string;
    description: string;
    hostZone: string;
    validators: Validator[];
    deposit: string;
}
export interface AddValidatorsProposalProtoMsg {
    typeUrl: "/stride.stakeibc.AddValidatorsProposal";
    value: Uint8Array;
}
/**
 * @name AddValidatorsProposalAmino
 * @package stride.stakeibc
 * @see proto type: stride.stakeibc.AddValidatorsProposal
 */
export interface AddValidatorsProposalAmino {
    title?: string;
    description?: string;
    host_zone?: string;
    validators?: ValidatorAmino[];
    deposit?: string;
}
export interface AddValidatorsProposalAminoMsg {
    type: "stakeibc/AddValidatorsProposal";
    value: AddValidatorsProposalAmino;
}
export interface AddValidatorsProposalSDKType {
    title: string;
    description: string;
    host_zone: string;
    validators: ValidatorSDKType[];
    deposit: string;
}
export interface ToggleLSMProposal {
    title: string;
    description: string;
    hostZone: string;
    enabled: boolean;
    deposit: string;
}
export interface ToggleLSMProposalProtoMsg {
    typeUrl: "/stride.stakeibc.ToggleLSMProposal";
    value: Uint8Array;
}
/**
 * @name ToggleLSMProposalAmino
 * @package stride.stakeibc
 * @see proto type: stride.stakeibc.ToggleLSMProposal
 */
export interface ToggleLSMProposalAmino {
    title?: string;
    description?: string;
    host_zone?: string;
    enabled?: boolean;
    deposit?: string;
}
export interface ToggleLSMProposalAminoMsg {
    type: "stakeibc/ToggleLSMProposal";
    value: ToggleLSMProposalAmino;
}
export interface ToggleLSMProposalSDKType {
    title: string;
    description: string;
    host_zone: string;
    enabled: boolean;
    deposit: string;
}
export declare const AddValidatorsProposal: {
    typeUrl: string;
    encode(message: AddValidatorsProposal, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): AddValidatorsProposal;
    fromPartial(object: Partial<AddValidatorsProposal>): AddValidatorsProposal;
    fromAmino(object: AddValidatorsProposalAmino): AddValidatorsProposal;
    toAmino(message: AddValidatorsProposal): AddValidatorsProposalAmino;
    fromAminoMsg(object: AddValidatorsProposalAminoMsg): AddValidatorsProposal;
    toAminoMsg(message: AddValidatorsProposal): AddValidatorsProposalAminoMsg;
    fromProtoMsg(message: AddValidatorsProposalProtoMsg): AddValidatorsProposal;
    toProto(message: AddValidatorsProposal): Uint8Array;
    toProtoMsg(message: AddValidatorsProposal): AddValidatorsProposalProtoMsg;
};
export declare const ToggleLSMProposal: {
    typeUrl: string;
    encode(message: ToggleLSMProposal, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ToggleLSMProposal;
    fromPartial(object: Partial<ToggleLSMProposal>): ToggleLSMProposal;
    fromAmino(object: ToggleLSMProposalAmino): ToggleLSMProposal;
    toAmino(message: ToggleLSMProposal): ToggleLSMProposalAmino;
    fromAminoMsg(object: ToggleLSMProposalAminoMsg): ToggleLSMProposal;
    toAminoMsg(message: ToggleLSMProposal): ToggleLSMProposalAminoMsg;
    fromProtoMsg(message: ToggleLSMProposalProtoMsg): ToggleLSMProposal;
    toProto(message: ToggleLSMProposal): Uint8Array;
    toProtoMsg(message: ToggleLSMProposal): ToggleLSMProposalProtoMsg;
};
