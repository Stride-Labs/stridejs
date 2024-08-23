import { Coin, CoinAmino, CoinSDKType } from "../../base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
/**
 * MsgSetWithdrawAddress sets the withdraw address for
 * a delegator (or validator self-delegation).
 */
export interface MsgSetWithdrawAddress {
    delegatorAddress: string;
    withdrawAddress: string;
}
export interface MsgSetWithdrawAddressProtoMsg {
    typeUrl: "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress";
    value: Uint8Array;
}
/**
 * MsgSetWithdrawAddress sets the withdraw address for
 * a delegator (or validator self-delegation).
 */
export interface MsgSetWithdrawAddressAmino {
    delegator_address?: string;
    withdraw_address?: string;
}
export interface MsgSetWithdrawAddressAminoMsg {
    type: "cosmos-sdk/MsgModifyWithdrawAddress";
    value: MsgSetWithdrawAddressAmino;
}
/**
 * MsgSetWithdrawAddress sets the withdraw address for
 * a delegator (or validator self-delegation).
 */
export interface MsgSetWithdrawAddressSDKType {
    delegator_address: string;
    withdraw_address: string;
}
/** MsgSetWithdrawAddressResponse defines the Msg/SetWithdrawAddress response type. */
export interface MsgSetWithdrawAddressResponse {
}
export interface MsgSetWithdrawAddressResponseProtoMsg {
    typeUrl: "/cosmos.distribution.v1beta1.MsgSetWithdrawAddressResponse";
    value: Uint8Array;
}
/** MsgSetWithdrawAddressResponse defines the Msg/SetWithdrawAddress response type. */
export interface MsgSetWithdrawAddressResponseAmino {
}
export interface MsgSetWithdrawAddressResponseAminoMsg {
    type: "cosmos-sdk/MsgSetWithdrawAddressResponse";
    value: MsgSetWithdrawAddressResponseAmino;
}
/** MsgSetWithdrawAddressResponse defines the Msg/SetWithdrawAddress response type. */
export interface MsgSetWithdrawAddressResponseSDKType {
}
/**
 * MsgWithdrawDelegatorReward represents delegation withdrawal to a delegator
 * from a single validator.
 */
export interface MsgWithdrawDelegatorReward {
    delegatorAddress: string;
    validatorAddress: string;
}
export interface MsgWithdrawDelegatorRewardProtoMsg {
    typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward";
    value: Uint8Array;
}
/**
 * MsgWithdrawDelegatorReward represents delegation withdrawal to a delegator
 * from a single validator.
 */
export interface MsgWithdrawDelegatorRewardAmino {
    delegator_address?: string;
    validator_address?: string;
}
export interface MsgWithdrawDelegatorRewardAminoMsg {
    type: "cosmos-sdk/MsgWithdrawDelegationReward";
    value: MsgWithdrawDelegatorRewardAmino;
}
/**
 * MsgWithdrawDelegatorReward represents delegation withdrawal to a delegator
 * from a single validator.
 */
export interface MsgWithdrawDelegatorRewardSDKType {
    delegator_address: string;
    validator_address: string;
}
/** MsgWithdrawDelegatorRewardResponse defines the Msg/WithdrawDelegatorReward response type. */
export interface MsgWithdrawDelegatorRewardResponse {
}
export interface MsgWithdrawDelegatorRewardResponseProtoMsg {
    typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorRewardResponse";
    value: Uint8Array;
}
/** MsgWithdrawDelegatorRewardResponse defines the Msg/WithdrawDelegatorReward response type. */
export interface MsgWithdrawDelegatorRewardResponseAmino {
}
export interface MsgWithdrawDelegatorRewardResponseAminoMsg {
    type: "cosmos-sdk/MsgWithdrawDelegatorRewardResponse";
    value: MsgWithdrawDelegatorRewardResponseAmino;
}
/** MsgWithdrawDelegatorRewardResponse defines the Msg/WithdrawDelegatorReward response type. */
export interface MsgWithdrawDelegatorRewardResponseSDKType {
}
/**
 * MsgWithdrawValidatorCommission withdraws the full commission to the validator
 * address.
 */
export interface MsgWithdrawValidatorCommission {
    validatorAddress: string;
}
export interface MsgWithdrawValidatorCommissionProtoMsg {
    typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission";
    value: Uint8Array;
}
/**
 * MsgWithdrawValidatorCommission withdraws the full commission to the validator
 * address.
 */
export interface MsgWithdrawValidatorCommissionAmino {
    validator_address?: string;
}
export interface MsgWithdrawValidatorCommissionAminoMsg {
    type: "cosmos-sdk/MsgWithdrawValidatorCommission";
    value: MsgWithdrawValidatorCommissionAmino;
}
/**
 * MsgWithdrawValidatorCommission withdraws the full commission to the validator
 * address.
 */
export interface MsgWithdrawValidatorCommissionSDKType {
    validator_address: string;
}
/** MsgWithdrawValidatorCommissionResponse defines the Msg/WithdrawValidatorCommission response type. */
export interface MsgWithdrawValidatorCommissionResponse {
}
export interface MsgWithdrawValidatorCommissionResponseProtoMsg {
    typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommissionResponse";
    value: Uint8Array;
}
/** MsgWithdrawValidatorCommissionResponse defines the Msg/WithdrawValidatorCommission response type. */
export interface MsgWithdrawValidatorCommissionResponseAmino {
}
export interface MsgWithdrawValidatorCommissionResponseAminoMsg {
    type: "cosmos-sdk/MsgWithdrawValidatorCommissionResponse";
    value: MsgWithdrawValidatorCommissionResponseAmino;
}
/** MsgWithdrawValidatorCommissionResponse defines the Msg/WithdrawValidatorCommission response type. */
export interface MsgWithdrawValidatorCommissionResponseSDKType {
}
/** MsgWithdrawTokenizeShareRecordReward withdraws tokenize share rewards for a specific record */
export interface MsgWithdrawTokenizeShareRecordReward {
    ownerAddress: string;
    recordId: bigint;
}
export interface MsgWithdrawTokenizeShareRecordRewardProtoMsg {
    typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawTokenizeShareRecordReward";
    value: Uint8Array;
}
/** MsgWithdrawTokenizeShareRecordReward withdraws tokenize share rewards for a specific record */
export interface MsgWithdrawTokenizeShareRecordRewardAmino {
    owner_address?: string;
    record_id?: string;
}
export interface MsgWithdrawTokenizeShareRecordRewardAminoMsg {
    type: "cosmos-sdk/MsgWithdrawTokenizeShareRecordReward";
    value: MsgWithdrawTokenizeShareRecordRewardAmino;
}
/** MsgWithdrawTokenizeShareRecordReward withdraws tokenize share rewards for a specific record */
export interface MsgWithdrawTokenizeShareRecordRewardSDKType {
    owner_address: string;
    record_id: bigint;
}
/** MsgWithdrawTokenizeShareRecordReward defines the Msg/WithdrawTokenizeShareRecordReward response type. */
export interface MsgWithdrawTokenizeShareRecordRewardResponse {
}
export interface MsgWithdrawTokenizeShareRecordRewardResponseProtoMsg {
    typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawTokenizeShareRecordRewardResponse";
    value: Uint8Array;
}
/** MsgWithdrawTokenizeShareRecordReward defines the Msg/WithdrawTokenizeShareRecordReward response type. */
export interface MsgWithdrawTokenizeShareRecordRewardResponseAmino {
}
export interface MsgWithdrawTokenizeShareRecordRewardResponseAminoMsg {
    type: "cosmos-sdk/MsgWithdrawTokenizeShareRecordRewardResponse";
    value: MsgWithdrawTokenizeShareRecordRewardResponseAmino;
}
/** MsgWithdrawTokenizeShareRecordReward defines the Msg/WithdrawTokenizeShareRecordReward response type. */
export interface MsgWithdrawTokenizeShareRecordRewardResponseSDKType {
}
/**
 * MsgWithdrawAllTokenizeShareRecordReward withdraws tokenize share rewards or all
 * records owned by the designated owner
 */
export interface MsgWithdrawAllTokenizeShareRecordReward {
    ownerAddress: string;
}
export interface MsgWithdrawAllTokenizeShareRecordRewardProtoMsg {
    typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawAllTokenizeShareRecordReward";
    value: Uint8Array;
}
/**
 * MsgWithdrawAllTokenizeShareRecordReward withdraws tokenize share rewards or all
 * records owned by the designated owner
 */
export interface MsgWithdrawAllTokenizeShareRecordRewardAmino {
    owner_address?: string;
}
export interface MsgWithdrawAllTokenizeShareRecordRewardAminoMsg {
    type: "cosmos-sdk/MsgWithdrawAllTokenizeShareRecordReward";
    value: MsgWithdrawAllTokenizeShareRecordRewardAmino;
}
/**
 * MsgWithdrawAllTokenizeShareRecordReward withdraws tokenize share rewards or all
 * records owned by the designated owner
 */
export interface MsgWithdrawAllTokenizeShareRecordRewardSDKType {
    owner_address: string;
}
/** MsgWithdrawAllTokenizeShareRecordRewardResponse defines the Msg/WithdrawTokenizeShareRecordReward response type. */
export interface MsgWithdrawAllTokenizeShareRecordRewardResponse {
}
export interface MsgWithdrawAllTokenizeShareRecordRewardResponseProtoMsg {
    typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawAllTokenizeShareRecordRewardResponse";
    value: Uint8Array;
}
/** MsgWithdrawAllTokenizeShareRecordRewardResponse defines the Msg/WithdrawTokenizeShareRecordReward response type. */
export interface MsgWithdrawAllTokenizeShareRecordRewardResponseAmino {
}
export interface MsgWithdrawAllTokenizeShareRecordRewardResponseAminoMsg {
    type: "cosmos-sdk/MsgWithdrawAllTokenizeShareRecordRewardResponse";
    value: MsgWithdrawAllTokenizeShareRecordRewardResponseAmino;
}
/** MsgWithdrawAllTokenizeShareRecordRewardResponse defines the Msg/WithdrawTokenizeShareRecordReward response type. */
export interface MsgWithdrawAllTokenizeShareRecordRewardResponseSDKType {
}
/**
 * MsgFundCommunityPool allows an account to directly
 * fund the community pool.
 */
export interface MsgFundCommunityPool {
    amount: Coin[];
    depositor: string;
}
export interface MsgFundCommunityPoolProtoMsg {
    typeUrl: "/cosmos.distribution.v1beta1.MsgFundCommunityPool";
    value: Uint8Array;
}
/**
 * MsgFundCommunityPool allows an account to directly
 * fund the community pool.
 */
export interface MsgFundCommunityPoolAmino {
    amount?: CoinAmino[];
    depositor?: string;
}
export interface MsgFundCommunityPoolAminoMsg {
    type: "cosmos-sdk/MsgFundCommunityPool";
    value: MsgFundCommunityPoolAmino;
}
/**
 * MsgFundCommunityPool allows an account to directly
 * fund the community pool.
 */
export interface MsgFundCommunityPoolSDKType {
    amount: CoinSDKType[];
    depositor: string;
}
/** MsgFundCommunityPoolResponse defines the Msg/FundCommunityPool response type. */
export interface MsgFundCommunityPoolResponse {
}
export interface MsgFundCommunityPoolResponseProtoMsg {
    typeUrl: "/cosmos.distribution.v1beta1.MsgFundCommunityPoolResponse";
    value: Uint8Array;
}
/** MsgFundCommunityPoolResponse defines the Msg/FundCommunityPool response type. */
export interface MsgFundCommunityPoolResponseAmino {
}
export interface MsgFundCommunityPoolResponseAminoMsg {
    type: "cosmos-sdk/MsgFundCommunityPoolResponse";
    value: MsgFundCommunityPoolResponseAmino;
}
/** MsgFundCommunityPoolResponse defines the Msg/FundCommunityPool response type. */
export interface MsgFundCommunityPoolResponseSDKType {
}
export declare const MsgSetWithdrawAddress: {
    typeUrl: string;
    encode(message: MsgSetWithdrawAddress, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgSetWithdrawAddress;
    fromPartial(object: Partial<MsgSetWithdrawAddress>): MsgSetWithdrawAddress;
    fromAmino(object: MsgSetWithdrawAddressAmino): MsgSetWithdrawAddress;
    toAmino(message: MsgSetWithdrawAddress): MsgSetWithdrawAddressAmino;
    fromAminoMsg(object: MsgSetWithdrawAddressAminoMsg): MsgSetWithdrawAddress;
    toAminoMsg(message: MsgSetWithdrawAddress): MsgSetWithdrawAddressAminoMsg;
    fromProtoMsg(message: MsgSetWithdrawAddressProtoMsg): MsgSetWithdrawAddress;
    toProto(message: MsgSetWithdrawAddress): Uint8Array;
    toProtoMsg(message: MsgSetWithdrawAddress): MsgSetWithdrawAddressProtoMsg;
};
export declare const MsgSetWithdrawAddressResponse: {
    typeUrl: string;
    encode(_: MsgSetWithdrawAddressResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgSetWithdrawAddressResponse;
    fromPartial(_: Partial<MsgSetWithdrawAddressResponse>): MsgSetWithdrawAddressResponse;
    fromAmino(_: MsgSetWithdrawAddressResponseAmino): MsgSetWithdrawAddressResponse;
    toAmino(_: MsgSetWithdrawAddressResponse): MsgSetWithdrawAddressResponseAmino;
    fromAminoMsg(object: MsgSetWithdrawAddressResponseAminoMsg): MsgSetWithdrawAddressResponse;
    toAminoMsg(message: MsgSetWithdrawAddressResponse): MsgSetWithdrawAddressResponseAminoMsg;
    fromProtoMsg(message: MsgSetWithdrawAddressResponseProtoMsg): MsgSetWithdrawAddressResponse;
    toProto(message: MsgSetWithdrawAddressResponse): Uint8Array;
    toProtoMsg(message: MsgSetWithdrawAddressResponse): MsgSetWithdrawAddressResponseProtoMsg;
};
export declare const MsgWithdrawDelegatorReward: {
    typeUrl: string;
    encode(message: MsgWithdrawDelegatorReward, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgWithdrawDelegatorReward;
    fromPartial(object: Partial<MsgWithdrawDelegatorReward>): MsgWithdrawDelegatorReward;
    fromAmino(object: MsgWithdrawDelegatorRewardAmino): MsgWithdrawDelegatorReward;
    toAmino(message: MsgWithdrawDelegatorReward): MsgWithdrawDelegatorRewardAmino;
    fromAminoMsg(object: MsgWithdrawDelegatorRewardAminoMsg): MsgWithdrawDelegatorReward;
    toAminoMsg(message: MsgWithdrawDelegatorReward): MsgWithdrawDelegatorRewardAminoMsg;
    fromProtoMsg(message: MsgWithdrawDelegatorRewardProtoMsg): MsgWithdrawDelegatorReward;
    toProto(message: MsgWithdrawDelegatorReward): Uint8Array;
    toProtoMsg(message: MsgWithdrawDelegatorReward): MsgWithdrawDelegatorRewardProtoMsg;
};
export declare const MsgWithdrawDelegatorRewardResponse: {
    typeUrl: string;
    encode(_: MsgWithdrawDelegatorRewardResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgWithdrawDelegatorRewardResponse;
    fromPartial(_: Partial<MsgWithdrawDelegatorRewardResponse>): MsgWithdrawDelegatorRewardResponse;
    fromAmino(_: MsgWithdrawDelegatorRewardResponseAmino): MsgWithdrawDelegatorRewardResponse;
    toAmino(_: MsgWithdrawDelegatorRewardResponse): MsgWithdrawDelegatorRewardResponseAmino;
    fromAminoMsg(object: MsgWithdrawDelegatorRewardResponseAminoMsg): MsgWithdrawDelegatorRewardResponse;
    toAminoMsg(message: MsgWithdrawDelegatorRewardResponse): MsgWithdrawDelegatorRewardResponseAminoMsg;
    fromProtoMsg(message: MsgWithdrawDelegatorRewardResponseProtoMsg): MsgWithdrawDelegatorRewardResponse;
    toProto(message: MsgWithdrawDelegatorRewardResponse): Uint8Array;
    toProtoMsg(message: MsgWithdrawDelegatorRewardResponse): MsgWithdrawDelegatorRewardResponseProtoMsg;
};
export declare const MsgWithdrawValidatorCommission: {
    typeUrl: string;
    encode(message: MsgWithdrawValidatorCommission, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgWithdrawValidatorCommission;
    fromPartial(object: Partial<MsgWithdrawValidatorCommission>): MsgWithdrawValidatorCommission;
    fromAmino(object: MsgWithdrawValidatorCommissionAmino): MsgWithdrawValidatorCommission;
    toAmino(message: MsgWithdrawValidatorCommission): MsgWithdrawValidatorCommissionAmino;
    fromAminoMsg(object: MsgWithdrawValidatorCommissionAminoMsg): MsgWithdrawValidatorCommission;
    toAminoMsg(message: MsgWithdrawValidatorCommission): MsgWithdrawValidatorCommissionAminoMsg;
    fromProtoMsg(message: MsgWithdrawValidatorCommissionProtoMsg): MsgWithdrawValidatorCommission;
    toProto(message: MsgWithdrawValidatorCommission): Uint8Array;
    toProtoMsg(message: MsgWithdrawValidatorCommission): MsgWithdrawValidatorCommissionProtoMsg;
};
export declare const MsgWithdrawValidatorCommissionResponse: {
    typeUrl: string;
    encode(_: MsgWithdrawValidatorCommissionResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgWithdrawValidatorCommissionResponse;
    fromPartial(_: Partial<MsgWithdrawValidatorCommissionResponse>): MsgWithdrawValidatorCommissionResponse;
    fromAmino(_: MsgWithdrawValidatorCommissionResponseAmino): MsgWithdrawValidatorCommissionResponse;
    toAmino(_: MsgWithdrawValidatorCommissionResponse): MsgWithdrawValidatorCommissionResponseAmino;
    fromAminoMsg(object: MsgWithdrawValidatorCommissionResponseAminoMsg): MsgWithdrawValidatorCommissionResponse;
    toAminoMsg(message: MsgWithdrawValidatorCommissionResponse): MsgWithdrawValidatorCommissionResponseAminoMsg;
    fromProtoMsg(message: MsgWithdrawValidatorCommissionResponseProtoMsg): MsgWithdrawValidatorCommissionResponse;
    toProto(message: MsgWithdrawValidatorCommissionResponse): Uint8Array;
    toProtoMsg(message: MsgWithdrawValidatorCommissionResponse): MsgWithdrawValidatorCommissionResponseProtoMsg;
};
export declare const MsgWithdrawTokenizeShareRecordReward: {
    typeUrl: string;
    encode(message: MsgWithdrawTokenizeShareRecordReward, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgWithdrawTokenizeShareRecordReward;
    fromPartial(object: Partial<MsgWithdrawTokenizeShareRecordReward>): MsgWithdrawTokenizeShareRecordReward;
    fromAmino(object: MsgWithdrawTokenizeShareRecordRewardAmino): MsgWithdrawTokenizeShareRecordReward;
    toAmino(message: MsgWithdrawTokenizeShareRecordReward): MsgWithdrawTokenizeShareRecordRewardAmino;
    fromAminoMsg(object: MsgWithdrawTokenizeShareRecordRewardAminoMsg): MsgWithdrawTokenizeShareRecordReward;
    toAminoMsg(message: MsgWithdrawTokenizeShareRecordReward): MsgWithdrawTokenizeShareRecordRewardAminoMsg;
    fromProtoMsg(message: MsgWithdrawTokenizeShareRecordRewardProtoMsg): MsgWithdrawTokenizeShareRecordReward;
    toProto(message: MsgWithdrawTokenizeShareRecordReward): Uint8Array;
    toProtoMsg(message: MsgWithdrawTokenizeShareRecordReward): MsgWithdrawTokenizeShareRecordRewardProtoMsg;
};
export declare const MsgWithdrawTokenizeShareRecordRewardResponse: {
    typeUrl: string;
    encode(_: MsgWithdrawTokenizeShareRecordRewardResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgWithdrawTokenizeShareRecordRewardResponse;
    fromPartial(_: Partial<MsgWithdrawTokenizeShareRecordRewardResponse>): MsgWithdrawTokenizeShareRecordRewardResponse;
    fromAmino(_: MsgWithdrawTokenizeShareRecordRewardResponseAmino): MsgWithdrawTokenizeShareRecordRewardResponse;
    toAmino(_: MsgWithdrawTokenizeShareRecordRewardResponse): MsgWithdrawTokenizeShareRecordRewardResponseAmino;
    fromAminoMsg(object: MsgWithdrawTokenizeShareRecordRewardResponseAminoMsg): MsgWithdrawTokenizeShareRecordRewardResponse;
    toAminoMsg(message: MsgWithdrawTokenizeShareRecordRewardResponse): MsgWithdrawTokenizeShareRecordRewardResponseAminoMsg;
    fromProtoMsg(message: MsgWithdrawTokenizeShareRecordRewardResponseProtoMsg): MsgWithdrawTokenizeShareRecordRewardResponse;
    toProto(message: MsgWithdrawTokenizeShareRecordRewardResponse): Uint8Array;
    toProtoMsg(message: MsgWithdrawTokenizeShareRecordRewardResponse): MsgWithdrawTokenizeShareRecordRewardResponseProtoMsg;
};
export declare const MsgWithdrawAllTokenizeShareRecordReward: {
    typeUrl: string;
    encode(message: MsgWithdrawAllTokenizeShareRecordReward, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgWithdrawAllTokenizeShareRecordReward;
    fromPartial(object: Partial<MsgWithdrawAllTokenizeShareRecordReward>): MsgWithdrawAllTokenizeShareRecordReward;
    fromAmino(object: MsgWithdrawAllTokenizeShareRecordRewardAmino): MsgWithdrawAllTokenizeShareRecordReward;
    toAmino(message: MsgWithdrawAllTokenizeShareRecordReward): MsgWithdrawAllTokenizeShareRecordRewardAmino;
    fromAminoMsg(object: MsgWithdrawAllTokenizeShareRecordRewardAminoMsg): MsgWithdrawAllTokenizeShareRecordReward;
    toAminoMsg(message: MsgWithdrawAllTokenizeShareRecordReward): MsgWithdrawAllTokenizeShareRecordRewardAminoMsg;
    fromProtoMsg(message: MsgWithdrawAllTokenizeShareRecordRewardProtoMsg): MsgWithdrawAllTokenizeShareRecordReward;
    toProto(message: MsgWithdrawAllTokenizeShareRecordReward): Uint8Array;
    toProtoMsg(message: MsgWithdrawAllTokenizeShareRecordReward): MsgWithdrawAllTokenizeShareRecordRewardProtoMsg;
};
export declare const MsgWithdrawAllTokenizeShareRecordRewardResponse: {
    typeUrl: string;
    encode(_: MsgWithdrawAllTokenizeShareRecordRewardResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgWithdrawAllTokenizeShareRecordRewardResponse;
    fromPartial(_: Partial<MsgWithdrawAllTokenizeShareRecordRewardResponse>): MsgWithdrawAllTokenizeShareRecordRewardResponse;
    fromAmino(_: MsgWithdrawAllTokenizeShareRecordRewardResponseAmino): MsgWithdrawAllTokenizeShareRecordRewardResponse;
    toAmino(_: MsgWithdrawAllTokenizeShareRecordRewardResponse): MsgWithdrawAllTokenizeShareRecordRewardResponseAmino;
    fromAminoMsg(object: MsgWithdrawAllTokenizeShareRecordRewardResponseAminoMsg): MsgWithdrawAllTokenizeShareRecordRewardResponse;
    toAminoMsg(message: MsgWithdrawAllTokenizeShareRecordRewardResponse): MsgWithdrawAllTokenizeShareRecordRewardResponseAminoMsg;
    fromProtoMsg(message: MsgWithdrawAllTokenizeShareRecordRewardResponseProtoMsg): MsgWithdrawAllTokenizeShareRecordRewardResponse;
    toProto(message: MsgWithdrawAllTokenizeShareRecordRewardResponse): Uint8Array;
    toProtoMsg(message: MsgWithdrawAllTokenizeShareRecordRewardResponse): MsgWithdrawAllTokenizeShareRecordRewardResponseProtoMsg;
};
export declare const MsgFundCommunityPool: {
    typeUrl: string;
    encode(message: MsgFundCommunityPool, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgFundCommunityPool;
    fromPartial(object: Partial<MsgFundCommunityPool>): MsgFundCommunityPool;
    fromAmino(object: MsgFundCommunityPoolAmino): MsgFundCommunityPool;
    toAmino(message: MsgFundCommunityPool): MsgFundCommunityPoolAmino;
    fromAminoMsg(object: MsgFundCommunityPoolAminoMsg): MsgFundCommunityPool;
    toAminoMsg(message: MsgFundCommunityPool): MsgFundCommunityPoolAminoMsg;
    fromProtoMsg(message: MsgFundCommunityPoolProtoMsg): MsgFundCommunityPool;
    toProto(message: MsgFundCommunityPool): Uint8Array;
    toProtoMsg(message: MsgFundCommunityPool): MsgFundCommunityPoolProtoMsg;
};
export declare const MsgFundCommunityPoolResponse: {
    typeUrl: string;
    encode(_: MsgFundCommunityPoolResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgFundCommunityPoolResponse;
    fromPartial(_: Partial<MsgFundCommunityPoolResponse>): MsgFundCommunityPoolResponse;
    fromAmino(_: MsgFundCommunityPoolResponseAmino): MsgFundCommunityPoolResponse;
    toAmino(_: MsgFundCommunityPoolResponse): MsgFundCommunityPoolResponseAmino;
    fromAminoMsg(object: MsgFundCommunityPoolResponseAminoMsg): MsgFundCommunityPoolResponse;
    toAminoMsg(message: MsgFundCommunityPoolResponse): MsgFundCommunityPoolResponseAminoMsg;
    fromProtoMsg(message: MsgFundCommunityPoolResponseProtoMsg): MsgFundCommunityPoolResponse;
    toProto(message: MsgFundCommunityPoolResponse): Uint8Array;
    toProtoMsg(message: MsgFundCommunityPoolResponse): MsgFundCommunityPoolResponseProtoMsg;
};
