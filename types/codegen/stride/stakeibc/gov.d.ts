import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
export interface AddValidatorProposal {
    title: string;
    description: string;
    hostZone: string;
    validatorName: string;
    validatorAddress: string;
    deposit: string;
}
export interface AddValidatorProposalSDKType {
    title: string;
    description: string;
    host_zone: string;
    validator_name: string;
    validator_address: string;
    deposit: string;
}
export declare const AddValidatorProposal: {
    encode(message: AddValidatorProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddValidatorProposal;
    fromPartial(object: DeepPartial<AddValidatorProposal>): AddValidatorProposal;
};
