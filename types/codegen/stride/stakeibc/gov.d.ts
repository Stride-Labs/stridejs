import { Validator, ValidatorSDKType } from "./validator";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
export interface AddValidatorsProposal {
    title: string;
    description: string;
    hostZone: string;
    validators: Validator[];
    deposit: string;
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
export interface ToggleLSMProposalSDKType {
    title: string;
    description: string;
    host_zone: string;
    enabled: boolean;
    deposit: string;
}
export declare const AddValidatorsProposal: {
    encode(message: AddValidatorsProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddValidatorsProposal;
    fromPartial(object: DeepPartial<AddValidatorsProposal>): AddValidatorsProposal;
};
export declare const ToggleLSMProposal: {
    encode(message: ToggleLSMProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ToggleLSMProposal;
    fromPartial(object: DeepPartial<ToggleLSMProposal>): ToggleLSMProposal;
};
