import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "../../helpers";
export interface MsgSetAirdropAllocations {
    allocator: string;
    airdropIdentifier: string;
    users: string[];
    weights: string[];
}
export interface MsgSetAirdropAllocationsSDKType {
    allocator: string;
    airdrop_identifier: string;
    users: string[];
    weights: string[];
}
export interface MsgSetAirdropAllocationsResponse {
}
export interface MsgSetAirdropAllocationsResponseSDKType {
}
export interface MsgClaimFreeAmount {
    user: string;
}
export interface MsgClaimFreeAmountSDKType {
    user: string;
}
export interface MsgClaimFreeAmountResponse {
    claimedAmount: Coin[];
}
export interface MsgClaimFreeAmountResponseSDKType {
    claimed_amount: CoinSDKType[];
}
export interface MsgCreateAirdrop {
    distributor: string;
    identifier: string;
    startTime: Long;
    duration: Long;
    denom: string;
}
export interface MsgCreateAirdropSDKType {
    distributor: string;
    identifier: string;
    start_time: Long;
    duration: Long;
    denom: string;
}
export interface MsgCreateAirdropResponse {
}
export interface MsgCreateAirdropResponseSDKType {
}
export interface MsgDeleteAirdrop {
    distributor: string;
    identifier: string;
}
export interface MsgDeleteAirdropSDKType {
    distributor: string;
    identifier: string;
}
export interface MsgDeleteAirdropResponse {
}
export interface MsgDeleteAirdropResponseSDKType {
}
export declare const MsgSetAirdropAllocations: {
    encode(message: MsgSetAirdropAllocations, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetAirdropAllocations;
    fromPartial(object: DeepPartial<MsgSetAirdropAllocations>): MsgSetAirdropAllocations;
};
export declare const MsgSetAirdropAllocationsResponse: {
    encode(_: MsgSetAirdropAllocationsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetAirdropAllocationsResponse;
    fromPartial(_: DeepPartial<MsgSetAirdropAllocationsResponse>): MsgSetAirdropAllocationsResponse;
};
export declare const MsgClaimFreeAmount: {
    encode(message: MsgClaimFreeAmount, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgClaimFreeAmount;
    fromPartial(object: DeepPartial<MsgClaimFreeAmount>): MsgClaimFreeAmount;
};
export declare const MsgClaimFreeAmountResponse: {
    encode(message: MsgClaimFreeAmountResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgClaimFreeAmountResponse;
    fromPartial(object: DeepPartial<MsgClaimFreeAmountResponse>): MsgClaimFreeAmountResponse;
};
export declare const MsgCreateAirdrop: {
    encode(message: MsgCreateAirdrop, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateAirdrop;
    fromPartial(object: DeepPartial<MsgCreateAirdrop>): MsgCreateAirdrop;
};
export declare const MsgCreateAirdropResponse: {
    encode(_: MsgCreateAirdropResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateAirdropResponse;
    fromPartial(_: DeepPartial<MsgCreateAirdropResponse>): MsgCreateAirdropResponse;
};
export declare const MsgDeleteAirdrop: {
    encode(message: MsgDeleteAirdrop, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteAirdrop;
    fromPartial(object: DeepPartial<MsgDeleteAirdrop>): MsgDeleteAirdrop;
};
export declare const MsgDeleteAirdropResponse: {
    encode(_: MsgDeleteAirdropResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteAirdropResponse;
    fromPartial(_: DeepPartial<MsgDeleteAirdropResponse>): MsgDeleteAirdropResponse;
};
