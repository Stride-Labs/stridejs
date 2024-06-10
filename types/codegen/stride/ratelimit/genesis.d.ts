import { Params, ParamsSDKType } from "./params";
import { RateLimit, RateLimitSDKType, WhitelistedAddressPair, WhitelistedAddressPairSDKType } from "./ratelimit";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
/** GenesisState defines the ratelimit module's genesis state. */
export interface GenesisState {
    params: Params;
    rateLimits: RateLimit[];
    whitelistedAddressPairs: WhitelistedAddressPair[];
    blacklistedDenoms: string[];
    pendingSendPacketSequenceNumbers: string[];
}
/** GenesisState defines the ratelimit module's genesis state. */
export interface GenesisStateSDKType {
    params: ParamsSDKType;
    rate_limits: RateLimitSDKType[];
    whitelisted_address_pairs: WhitelistedAddressPairSDKType[];
    blacklisted_denoms: string[];
    pending_send_packet_sequence_numbers: string[];
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
