import { Duration, DurationAmino, DurationSDKType } from "../../google/protobuf/duration";
import { BinaryReader, BinaryWriter } from "../../binary";
/** Params defines the claim module's parameters. */
export interface Params {
    airdrops: Airdrop[];
}
export interface ParamsProtoMsg {
    typeUrl: "/stride.claim.Params";
    value: Uint8Array;
}
/** Params defines the claim module's parameters. */
export interface ParamsAmino {
    airdrops?: AirdropAmino[];
}
export interface ParamsAminoMsg {
    type: "/stride.claim.Params";
    value: ParamsAmino;
}
/** Params defines the claim module's parameters. */
export interface ParamsSDKType {
    airdrops: AirdropSDKType[];
}
export interface Airdrop {
    airdropIdentifier: string;
    chainId: string;
    /** seconds */
    airdropStartTime: Date;
    /** seconds */
    airdropDuration: Duration;
    /** denom of claimable asset */
    claimDenom: string;
    /** airdrop distribution account */
    distributorAddress: string;
    /** ustrd tokens claimed so far in the current period */
    claimedSoFar: string;
    /** indicates the airdrop should be claimed via autopilot */
    autopilotEnabled: boolean;
}
export interface AirdropProtoMsg {
    typeUrl: "/stride.claim.Airdrop";
    value: Uint8Array;
}
export interface AirdropAmino {
    airdrop_identifier?: string;
    chain_id?: string;
    /** seconds */
    airdrop_start_time?: string;
    /** seconds */
    airdrop_duration?: DurationAmino;
    /** denom of claimable asset */
    claim_denom?: string;
    /** airdrop distribution account */
    distributor_address?: string;
    /** ustrd tokens claimed so far in the current period */
    claimed_so_far?: string;
    /** indicates the airdrop should be claimed via autopilot */
    autopilot_enabled?: boolean;
}
export interface AirdropAminoMsg {
    type: "/stride.claim.Airdrop";
    value: AirdropAmino;
}
export interface AirdropSDKType {
    airdrop_identifier: string;
    chain_id: string;
    airdrop_start_time: Date;
    airdrop_duration: DurationSDKType;
    claim_denom: string;
    distributor_address: string;
    claimed_so_far: string;
    autopilot_enabled: boolean;
}
export declare const Params: {
    typeUrl: string;
    encode(message: Params, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Params;
    fromPartial(object: Partial<Params>): Params;
    fromAmino(object: ParamsAmino): Params;
    toAmino(message: Params): ParamsAmino;
    fromAminoMsg(object: ParamsAminoMsg): Params;
    fromProtoMsg(message: ParamsProtoMsg): Params;
    toProto(message: Params): Uint8Array;
    toProtoMsg(message: Params): ParamsProtoMsg;
};
export declare const Airdrop: {
    typeUrl: string;
    encode(message: Airdrop, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Airdrop;
    fromPartial(object: Partial<Airdrop>): Airdrop;
    fromAmino(object: AirdropAmino): Airdrop;
    toAmino(message: Airdrop): AirdropAmino;
    fromAminoMsg(object: AirdropAminoMsg): Airdrop;
    fromProtoMsg(message: AirdropProtoMsg): Airdrop;
    toProto(message: Airdrop): Uint8Array;
    toProtoMsg(message: Airdrop): AirdropProtoMsg;
};
