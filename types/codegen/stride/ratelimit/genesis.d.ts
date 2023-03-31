import { Params, ParamsSDKType } from "./params";
import { RateLimit, RateLimitSDKType } from "./ratelimit";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
/** GenesisState defines the ratelimit module's genesis state. */
export interface GenesisState {
    /** params defines all the parameters of the module. */
    params: Params;
    /** list of rate limits */
    rateLimits: RateLimit[];
}
/** GenesisState defines the ratelimit module's genesis state. */
export interface GenesisStateSDKType {
    /** params defines all the parameters of the module. */
    params: ParamsSDKType;
    /** list of rate limits */
    rate_limits: RateLimitSDKType[];
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
