import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
export interface ValidatorExchangeRate {
    internalTokensToSharesRate: string;
    epochNumber: Long;
}
export interface ValidatorExchangeRateSDKType {
    internal_tokens_to_shares_rate: string;
    epoch_number: Long;
}
export interface Validator {
    name: string;
    address: string;
    delegationAmt: string;
    weight: Long;
    internalExchangeRate: ValidatorExchangeRate;
}
export interface ValidatorSDKType {
    name: string;
    address: string;
    delegation_amt: string;
    weight: Long;
    internal_exchange_rate: ValidatorExchangeRateSDKType;
}
export declare const ValidatorExchangeRate: {
    encode(message: ValidatorExchangeRate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorExchangeRate;
    fromPartial(object: DeepPartial<ValidatorExchangeRate>): ValidatorExchangeRate;
};
export declare const Validator: {
    encode(message: Validator, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Validator;
    fromPartial(object: DeepPartial<Validator>): Validator;
};
