import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
/**
 * Params defines the parameters for the module.
 * next id: 1
 */
export interface Params {
    /** optionally, turn off each module */
    stakeibcActive: boolean;
    claimActive: boolean;
}
/**
 * Params defines the parameters for the module.
 * next id: 1
 */
export interface ParamsSDKType {
    /** optionally, turn off each module */
    stakeibc_active: boolean;
    claim_active: boolean;
}
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromPartial(object: DeepPartial<Params>): Params;
};
