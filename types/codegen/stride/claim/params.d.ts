import { Duration, DurationSDKType } from "../../google/protobuf/duration";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
/** Params defines the claim module's parameters. */
export interface Params {
    /** Params defines the claim module's parameters. */
    airdrops: Airdrop[];
}
/** Params defines the claim module's parameters. */
export interface ParamsSDKType {
    /** Params defines the claim module's parameters. */
    airdrops: AirdropSDKType[];
}
export interface Airdrop {
    airdropIdentifier: string;
    /** seconds */
    airdropStartTime: Date;
    /** seconds */
    airdropDuration: Duration;
    /** denom of claimable asset */
    claimDenom: string;
    /** airdrop distribution account */
    distributorAddress: string;
    /** ustrd tokens claimed so far in the current period */
    claimedSoFar: Long;
}
export interface AirdropSDKType {
    airdrop_identifier: string;
    /** seconds */
    airdrop_start_time: Date;
    /** seconds */
    airdrop_duration: DurationSDKType;
    /** denom of claimable asset */
    claim_denom: string;
    /** airdrop distribution account */
    distributor_address: string;
    /** ustrd tokens claimed so far in the current period */
    claimed_so_far: Long;
}
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromPartial(object: DeepPartial<Params>): Params;
};
export declare const Airdrop: {
    encode(message: Airdrop, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Airdrop;
    fromPartial(object: DeepPartial<Airdrop>): Airdrop;
};
