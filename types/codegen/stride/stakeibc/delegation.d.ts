import { Validator, ValidatorSDKType } from "./validator";
import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
export interface Delegation {
    delegateAcctAddress: string;
    validator: Validator;
    amt: Long;
}
export interface DelegationSDKType {
    delegate_acct_address: string;
    validator: ValidatorSDKType;
    amt: Long;
}
export declare const Delegation: {
    encode(message: Delegation, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Delegation;
    fromPartial(object: DeepPartial<Delegation>): Delegation;
};
