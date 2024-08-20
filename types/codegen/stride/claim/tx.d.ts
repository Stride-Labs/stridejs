import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../binary";
export interface MsgSetAirdropAllocations {
    allocator: string;
    airdropIdentifier: string;
    users: string[];
    weights: string[];
}
export interface MsgSetAirdropAllocationsProtoMsg {
    typeUrl: "/stride.claim.MsgSetAirdropAllocations";
    value: Uint8Array;
}
export interface MsgSetAirdropAllocationsAmino {
    allocator?: string;
    airdrop_identifier?: string;
    users?: string[];
    weights?: string[];
}
export interface MsgSetAirdropAllocationsAminoMsg {
    type: "/stride.claim.MsgSetAirdropAllocations";
    value: MsgSetAirdropAllocationsAmino;
}
export interface MsgSetAirdropAllocationsSDKType {
    allocator: string;
    airdrop_identifier: string;
    users: string[];
    weights: string[];
}
export interface MsgSetAirdropAllocationsResponse {
}
export interface MsgSetAirdropAllocationsResponseProtoMsg {
    typeUrl: "/stride.claim.MsgSetAirdropAllocationsResponse";
    value: Uint8Array;
}
export interface MsgSetAirdropAllocationsResponseAmino {
}
export interface MsgSetAirdropAllocationsResponseAminoMsg {
    type: "/stride.claim.MsgSetAirdropAllocationsResponse";
    value: MsgSetAirdropAllocationsResponseAmino;
}
export interface MsgSetAirdropAllocationsResponseSDKType {
}
export interface MsgClaimFreeAmount {
    user: string;
}
export interface MsgClaimFreeAmountProtoMsg {
    typeUrl: "/stride.claim.MsgClaimFreeAmount";
    value: Uint8Array;
}
export interface MsgClaimFreeAmountAmino {
    user?: string;
}
export interface MsgClaimFreeAmountAminoMsg {
    type: "claim/ClaimFreeAmount";
    value: MsgClaimFreeAmountAmino;
}
export interface MsgClaimFreeAmountSDKType {
    user: string;
}
export interface MsgClaimFreeAmountResponse {
    claimedAmount: Coin[];
}
export interface MsgClaimFreeAmountResponseProtoMsg {
    typeUrl: "/stride.claim.MsgClaimFreeAmountResponse";
    value: Uint8Array;
}
export interface MsgClaimFreeAmountResponseAmino {
    claimed_amount?: CoinAmino[];
}
export interface MsgClaimFreeAmountResponseAminoMsg {
    type: "/stride.claim.MsgClaimFreeAmountResponse";
    value: MsgClaimFreeAmountResponseAmino;
}
export interface MsgClaimFreeAmountResponseSDKType {
    claimed_amount: CoinSDKType[];
}
export interface MsgCreateAirdrop {
    distributor: string;
    identifier: string;
    chainId: string;
    denom: string;
    startTime: bigint;
    duration: bigint;
    autopilotEnabled: boolean;
}
export interface MsgCreateAirdropProtoMsg {
    typeUrl: "/stride.claim.MsgCreateAirdrop";
    value: Uint8Array;
}
export interface MsgCreateAirdropAmino {
    distributor?: string;
    identifier?: string;
    chain_id?: string;
    denom?: string;
    start_time?: string;
    duration?: string;
    autopilot_enabled?: boolean;
}
export interface MsgCreateAirdropAminoMsg {
    type: "/stride.claim.MsgCreateAirdrop";
    value: MsgCreateAirdropAmino;
}
export interface MsgCreateAirdropSDKType {
    distributor: string;
    identifier: string;
    chain_id: string;
    denom: string;
    start_time: bigint;
    duration: bigint;
    autopilot_enabled: boolean;
}
export interface MsgCreateAirdropResponse {
}
export interface MsgCreateAirdropResponseProtoMsg {
    typeUrl: "/stride.claim.MsgCreateAirdropResponse";
    value: Uint8Array;
}
export interface MsgCreateAirdropResponseAmino {
}
export interface MsgCreateAirdropResponseAminoMsg {
    type: "/stride.claim.MsgCreateAirdropResponse";
    value: MsgCreateAirdropResponseAmino;
}
export interface MsgCreateAirdropResponseSDKType {
}
export interface MsgDeleteAirdrop {
    distributor: string;
    identifier: string;
}
export interface MsgDeleteAirdropProtoMsg {
    typeUrl: "/stride.claim.MsgDeleteAirdrop";
    value: Uint8Array;
}
export interface MsgDeleteAirdropAmino {
    distributor?: string;
    identifier?: string;
}
export interface MsgDeleteAirdropAminoMsg {
    type: "/stride.claim.MsgDeleteAirdrop";
    value: MsgDeleteAirdropAmino;
}
export interface MsgDeleteAirdropSDKType {
    distributor: string;
    identifier: string;
}
export interface MsgDeleteAirdropResponse {
}
export interface MsgDeleteAirdropResponseProtoMsg {
    typeUrl: "/stride.claim.MsgDeleteAirdropResponse";
    value: Uint8Array;
}
export interface MsgDeleteAirdropResponseAmino {
}
export interface MsgDeleteAirdropResponseAminoMsg {
    type: "/stride.claim.MsgDeleteAirdropResponse";
    value: MsgDeleteAirdropResponseAmino;
}
export interface MsgDeleteAirdropResponseSDKType {
}
export declare const MsgSetAirdropAllocations: {
    typeUrl: string;
    encode(message: MsgSetAirdropAllocations, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgSetAirdropAllocations;
    fromPartial(object: Partial<MsgSetAirdropAllocations>): MsgSetAirdropAllocations;
    fromAmino(object: MsgSetAirdropAllocationsAmino): MsgSetAirdropAllocations;
    toAmino(message: MsgSetAirdropAllocations): MsgSetAirdropAllocationsAmino;
    fromAminoMsg(object: MsgSetAirdropAllocationsAminoMsg): MsgSetAirdropAllocations;
    fromProtoMsg(message: MsgSetAirdropAllocationsProtoMsg): MsgSetAirdropAllocations;
    toProto(message: MsgSetAirdropAllocations): Uint8Array;
    toProtoMsg(message: MsgSetAirdropAllocations): MsgSetAirdropAllocationsProtoMsg;
};
export declare const MsgSetAirdropAllocationsResponse: {
    typeUrl: string;
    encode(_: MsgSetAirdropAllocationsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgSetAirdropAllocationsResponse;
    fromPartial(_: Partial<MsgSetAirdropAllocationsResponse>): MsgSetAirdropAllocationsResponse;
    fromAmino(_: MsgSetAirdropAllocationsResponseAmino): MsgSetAirdropAllocationsResponse;
    toAmino(_: MsgSetAirdropAllocationsResponse): MsgSetAirdropAllocationsResponseAmino;
    fromAminoMsg(object: MsgSetAirdropAllocationsResponseAminoMsg): MsgSetAirdropAllocationsResponse;
    fromProtoMsg(message: MsgSetAirdropAllocationsResponseProtoMsg): MsgSetAirdropAllocationsResponse;
    toProto(message: MsgSetAirdropAllocationsResponse): Uint8Array;
    toProtoMsg(message: MsgSetAirdropAllocationsResponse): MsgSetAirdropAllocationsResponseProtoMsg;
};
export declare const MsgClaimFreeAmount: {
    typeUrl: string;
    encode(message: MsgClaimFreeAmount, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgClaimFreeAmount;
    fromPartial(object: Partial<MsgClaimFreeAmount>): MsgClaimFreeAmount;
    fromAmino(object: MsgClaimFreeAmountAmino): MsgClaimFreeAmount;
    toAmino(message: MsgClaimFreeAmount): MsgClaimFreeAmountAmino;
    fromAminoMsg(object: MsgClaimFreeAmountAminoMsg): MsgClaimFreeAmount;
    toAminoMsg(message: MsgClaimFreeAmount): MsgClaimFreeAmountAminoMsg;
    fromProtoMsg(message: MsgClaimFreeAmountProtoMsg): MsgClaimFreeAmount;
    toProto(message: MsgClaimFreeAmount): Uint8Array;
    toProtoMsg(message: MsgClaimFreeAmount): MsgClaimFreeAmountProtoMsg;
};
export declare const MsgClaimFreeAmountResponse: {
    typeUrl: string;
    encode(message: MsgClaimFreeAmountResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgClaimFreeAmountResponse;
    fromPartial(object: Partial<MsgClaimFreeAmountResponse>): MsgClaimFreeAmountResponse;
    fromAmino(object: MsgClaimFreeAmountResponseAmino): MsgClaimFreeAmountResponse;
    toAmino(message: MsgClaimFreeAmountResponse): MsgClaimFreeAmountResponseAmino;
    fromAminoMsg(object: MsgClaimFreeAmountResponseAminoMsg): MsgClaimFreeAmountResponse;
    fromProtoMsg(message: MsgClaimFreeAmountResponseProtoMsg): MsgClaimFreeAmountResponse;
    toProto(message: MsgClaimFreeAmountResponse): Uint8Array;
    toProtoMsg(message: MsgClaimFreeAmountResponse): MsgClaimFreeAmountResponseProtoMsg;
};
export declare const MsgCreateAirdrop: {
    typeUrl: string;
    encode(message: MsgCreateAirdrop, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateAirdrop;
    fromPartial(object: Partial<MsgCreateAirdrop>): MsgCreateAirdrop;
    fromAmino(object: MsgCreateAirdropAmino): MsgCreateAirdrop;
    toAmino(message: MsgCreateAirdrop): MsgCreateAirdropAmino;
    fromAminoMsg(object: MsgCreateAirdropAminoMsg): MsgCreateAirdrop;
    fromProtoMsg(message: MsgCreateAirdropProtoMsg): MsgCreateAirdrop;
    toProto(message: MsgCreateAirdrop): Uint8Array;
    toProtoMsg(message: MsgCreateAirdrop): MsgCreateAirdropProtoMsg;
};
export declare const MsgCreateAirdropResponse: {
    typeUrl: string;
    encode(_: MsgCreateAirdropResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateAirdropResponse;
    fromPartial(_: Partial<MsgCreateAirdropResponse>): MsgCreateAirdropResponse;
    fromAmino(_: MsgCreateAirdropResponseAmino): MsgCreateAirdropResponse;
    toAmino(_: MsgCreateAirdropResponse): MsgCreateAirdropResponseAmino;
    fromAminoMsg(object: MsgCreateAirdropResponseAminoMsg): MsgCreateAirdropResponse;
    fromProtoMsg(message: MsgCreateAirdropResponseProtoMsg): MsgCreateAirdropResponse;
    toProto(message: MsgCreateAirdropResponse): Uint8Array;
    toProtoMsg(message: MsgCreateAirdropResponse): MsgCreateAirdropResponseProtoMsg;
};
export declare const MsgDeleteAirdrop: {
    typeUrl: string;
    encode(message: MsgDeleteAirdrop, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgDeleteAirdrop;
    fromPartial(object: Partial<MsgDeleteAirdrop>): MsgDeleteAirdrop;
    fromAmino(object: MsgDeleteAirdropAmino): MsgDeleteAirdrop;
    toAmino(message: MsgDeleteAirdrop): MsgDeleteAirdropAmino;
    fromAminoMsg(object: MsgDeleteAirdropAminoMsg): MsgDeleteAirdrop;
    fromProtoMsg(message: MsgDeleteAirdropProtoMsg): MsgDeleteAirdrop;
    toProto(message: MsgDeleteAirdrop): Uint8Array;
    toProtoMsg(message: MsgDeleteAirdrop): MsgDeleteAirdropProtoMsg;
};
export declare const MsgDeleteAirdropResponse: {
    typeUrl: string;
    encode(_: MsgDeleteAirdropResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgDeleteAirdropResponse;
    fromPartial(_: Partial<MsgDeleteAirdropResponse>): MsgDeleteAirdropResponse;
    fromAmino(_: MsgDeleteAirdropResponseAmino): MsgDeleteAirdropResponse;
    toAmino(_: MsgDeleteAirdropResponse): MsgDeleteAirdropResponseAmino;
    fromAminoMsg(object: MsgDeleteAirdropResponseAminoMsg): MsgDeleteAirdropResponse;
    fromProtoMsg(message: MsgDeleteAirdropResponseProtoMsg): MsgDeleteAirdropResponse;
    toProto(message: MsgDeleteAirdropResponse): Uint8Array;
    toProtoMsg(message: MsgDeleteAirdropResponse): MsgDeleteAirdropResponseProtoMsg;
};
