import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
export declare enum PacketDirection {
    PACKET_SEND = 0,
    PACKET_RECV = 1,
    UNRECOGNIZED = -1
}
export declare enum PacketDirectionSDKType {
    PACKET_SEND = 0,
    PACKET_RECV = 1,
    UNRECOGNIZED = -1
}
export declare function packetDirectionFromJSON(object: any): PacketDirection;
export declare function packetDirectionToJSON(object: PacketDirection): string;
export interface Path {
    denom: string;
    channelId: string;
}
export interface PathSDKType {
    denom: string;
    channel_id: string;
}
export interface Quota {
    maxPercentSend: string;
    maxPercentRecv: string;
    durationHours: Long;
}
export interface QuotaSDKType {
    max_percent_send: string;
    max_percent_recv: string;
    duration_hours: Long;
}
export interface Flow {
    inflow: string;
    outflow: string;
    channelValue: string;
}
export interface FlowSDKType {
    inflow: string;
    outflow: string;
    channel_value: string;
}
export interface RateLimit {
    path: Path;
    quota: Quota;
    flow: Flow;
}
export interface RateLimitSDKType {
    path: PathSDKType;
    quota: QuotaSDKType;
    flow: FlowSDKType;
}
export declare const Path: {
    encode(message: Path, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Path;
    fromPartial(object: DeepPartial<Path>): Path;
};
export declare const Quota: {
    encode(message: Quota, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Quota;
    fromPartial(object: DeepPartial<Quota>): Quota;
};
export declare const Flow: {
    encode(message: Flow, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Flow;
    fromPartial(object: DeepPartial<Flow>): Flow;
};
export declare const RateLimit: {
    encode(message: RateLimit, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RateLimit;
    fromPartial(object: DeepPartial<RateLimit>): RateLimit;
};
