import { Params, ParamsAmino, ParamsSDKType } from "./liquid";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** MsgUpdateParams is the Msg/UpdateParams request type. */
export interface MsgUpdateParams {
    /**
     * authority is the address that controls the module (defaults to x/gov unless
     * overwritten).
     */
    authority: string;
    /**
     * params defines the x/liquid parameters to update.
     *
     * NOTE: All parameters must be supplied.
     */
    params: Params;
}
export interface MsgUpdateParamsProtoMsg {
    typeUrl: "/gaia.liquid.v1beta1.MsgUpdateParams";
    value: Uint8Array;
}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 * @name MsgUpdateParamsAmino
 * @package gaia.liquid.v1beta1
 * @see proto type: gaia.liquid.v1beta1.MsgUpdateParams
 */
export interface MsgUpdateParamsAmino {
    /**
     * authority is the address that controls the module (defaults to x/gov unless
     * overwritten).
     */
    authority?: string;
    /**
     * params defines the x/liquid parameters to update.
     *
     * NOTE: All parameters must be supplied.
     */
    params: ParamsAmino;
}
export interface MsgUpdateParamsAminoMsg {
    type: "gaia/liquid/MsgUpdateParams";
    value: MsgUpdateParamsAmino;
}
/** MsgUpdateParams is the Msg/UpdateParams request type. */
export interface MsgUpdateParamsSDKType {
    authority: string;
    params: ParamsSDKType;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 */
export interface MsgUpdateParamsResponse {
}
export interface MsgUpdateParamsResponseProtoMsg {
    typeUrl: "/gaia.liquid.v1beta1.MsgUpdateParamsResponse";
    value: Uint8Array;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 * @name MsgUpdateParamsResponseAmino
 * @package gaia.liquid.v1beta1
 * @see proto type: gaia.liquid.v1beta1.MsgUpdateParamsResponse
 */
export interface MsgUpdateParamsResponseAmino {
}
export interface MsgUpdateParamsResponseAminoMsg {
    type: "/gaia.liquid.v1beta1.MsgUpdateParamsResponse";
    value: MsgUpdateParamsResponseAmino;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 */
export interface MsgUpdateParamsResponseSDKType {
}
/** MsgTokenizeShares tokenizes a delegation */
export interface MsgTokenizeShares {
    delegatorAddress: string;
    validatorAddress: string;
    amount: Coin;
    tokenizedShareOwner: string;
}
export interface MsgTokenizeSharesProtoMsg {
    typeUrl: "/gaia.liquid.v1beta1.MsgTokenizeShares";
    value: Uint8Array;
}
/**
 * MsgTokenizeShares tokenizes a delegation
 * @name MsgTokenizeSharesAmino
 * @package gaia.liquid.v1beta1
 * @see proto type: gaia.liquid.v1beta1.MsgTokenizeShares
 */
export interface MsgTokenizeSharesAmino {
    delegator_address?: string;
    validator_address?: string;
    amount?: CoinAmino;
    tokenized_share_owner?: string;
}
export interface MsgTokenizeSharesAminoMsg {
    type: "gaia/MsgTokenizeShares";
    value: MsgTokenizeSharesAmino;
}
/** MsgTokenizeShares tokenizes a delegation */
export interface MsgTokenizeSharesSDKType {
    delegator_address: string;
    validator_address: string;
    amount: CoinSDKType;
    tokenized_share_owner: string;
}
/** MsgTokenizeSharesResponse defines the Msg/MsgTokenizeShares response type. */
export interface MsgTokenizeSharesResponse {
    amount: Coin;
}
export interface MsgTokenizeSharesResponseProtoMsg {
    typeUrl: "/gaia.liquid.v1beta1.MsgTokenizeSharesResponse";
    value: Uint8Array;
}
/**
 * MsgTokenizeSharesResponse defines the Msg/MsgTokenizeShares response type.
 * @name MsgTokenizeSharesResponseAmino
 * @package gaia.liquid.v1beta1
 * @see proto type: gaia.liquid.v1beta1.MsgTokenizeSharesResponse
 */
export interface MsgTokenizeSharesResponseAmino {
    amount?: CoinAmino;
}
export interface MsgTokenizeSharesResponseAminoMsg {
    type: "/gaia.liquid.v1beta1.MsgTokenizeSharesResponse";
    value: MsgTokenizeSharesResponseAmino;
}
/** MsgTokenizeSharesResponse defines the Msg/MsgTokenizeShares response type. */
export interface MsgTokenizeSharesResponseSDKType {
    amount: CoinSDKType;
}
/**
 * MsgRedeemTokensForShares redeems a tokenized share back into a native
 * delegation
 */
export interface MsgRedeemTokensForShares {
    delegatorAddress: string;
    amount: Coin;
}
export interface MsgRedeemTokensForSharesProtoMsg {
    typeUrl: "/gaia.liquid.v1beta1.MsgRedeemTokensForShares";
    value: Uint8Array;
}
/**
 * MsgRedeemTokensForShares redeems a tokenized share back into a native
 * delegation
 * @name MsgRedeemTokensForSharesAmino
 * @package gaia.liquid.v1beta1
 * @see proto type: gaia.liquid.v1beta1.MsgRedeemTokensForShares
 */
export interface MsgRedeemTokensForSharesAmino {
    delegator_address?: string;
    amount?: CoinAmino;
}
export interface MsgRedeemTokensForSharesAminoMsg {
    type: "gaia/MsgRedeemTokensForShares";
    value: MsgRedeemTokensForSharesAmino;
}
/**
 * MsgRedeemTokensForShares redeems a tokenized share back into a native
 * delegation
 */
export interface MsgRedeemTokensForSharesSDKType {
    delegator_address: string;
    amount: CoinSDKType;
}
/**
 * MsgRedeemTokensForSharesResponse defines the Msg/MsgRedeemTokensForShares
 * response type.
 */
export interface MsgRedeemTokensForSharesResponse {
    amount: Coin;
}
export interface MsgRedeemTokensForSharesResponseProtoMsg {
    typeUrl: "/gaia.liquid.v1beta1.MsgRedeemTokensForSharesResponse";
    value: Uint8Array;
}
/**
 * MsgRedeemTokensForSharesResponse defines the Msg/MsgRedeemTokensForShares
 * response type.
 * @name MsgRedeemTokensForSharesResponseAmino
 * @package gaia.liquid.v1beta1
 * @see proto type: gaia.liquid.v1beta1.MsgRedeemTokensForSharesResponse
 */
export interface MsgRedeemTokensForSharesResponseAmino {
    amount?: CoinAmino;
}
export interface MsgRedeemTokensForSharesResponseAminoMsg {
    type: "/gaia.liquid.v1beta1.MsgRedeemTokensForSharesResponse";
    value: MsgRedeemTokensForSharesResponseAmino;
}
/**
 * MsgRedeemTokensForSharesResponse defines the Msg/MsgRedeemTokensForShares
 * response type.
 */
export interface MsgRedeemTokensForSharesResponseSDKType {
    amount: CoinSDKType;
}
/** MsgTransferTokenizeShareRecord transfer a tokenize share record */
export interface MsgTransferTokenizeShareRecord {
    tokenizeShareRecordId: bigint;
    sender: string;
    newOwner: string;
}
export interface MsgTransferTokenizeShareRecordProtoMsg {
    typeUrl: "/gaia.liquid.v1beta1.MsgTransferTokenizeShareRecord";
    value: Uint8Array;
}
/**
 * MsgTransferTokenizeShareRecord transfer a tokenize share record
 * @name MsgTransferTokenizeShareRecordAmino
 * @package gaia.liquid.v1beta1
 * @see proto type: gaia.liquid.v1beta1.MsgTransferTokenizeShareRecord
 */
export interface MsgTransferTokenizeShareRecordAmino {
    tokenize_share_record_id?: string;
    sender?: string;
    new_owner?: string;
}
export interface MsgTransferTokenizeShareRecordAminoMsg {
    type: "gaia/MsgTransferTokenizeShareRecord";
    value: MsgTransferTokenizeShareRecordAmino;
}
/** MsgTransferTokenizeShareRecord transfer a tokenize share record */
export interface MsgTransferTokenizeShareRecordSDKType {
    tokenize_share_record_id: bigint;
    sender: string;
    new_owner: string;
}
/**
 * MsgTransferTokenizeShareRecordResponse defines the
 * Msg/MsgTransferTokenizeShareRecord response type.
 */
export interface MsgTransferTokenizeShareRecordResponse {
}
export interface MsgTransferTokenizeShareRecordResponseProtoMsg {
    typeUrl: "/gaia.liquid.v1beta1.MsgTransferTokenizeShareRecordResponse";
    value: Uint8Array;
}
/**
 * MsgTransferTokenizeShareRecordResponse defines the
 * Msg/MsgTransferTokenizeShareRecord response type.
 * @name MsgTransferTokenizeShareRecordResponseAmino
 * @package gaia.liquid.v1beta1
 * @see proto type: gaia.liquid.v1beta1.MsgTransferTokenizeShareRecordResponse
 */
export interface MsgTransferTokenizeShareRecordResponseAmino {
}
export interface MsgTransferTokenizeShareRecordResponseAminoMsg {
    type: "/gaia.liquid.v1beta1.MsgTransferTokenizeShareRecordResponse";
    value: MsgTransferTokenizeShareRecordResponseAmino;
}
/**
 * MsgTransferTokenizeShareRecordResponse defines the
 * Msg/MsgTransferTokenizeShareRecord response type.
 */
export interface MsgTransferTokenizeShareRecordResponseSDKType {
}
/**
 * MsgDisableTokenizeShares prevents the tokenization of shares for a given
 * address
 */
export interface MsgDisableTokenizeShares {
    delegatorAddress: string;
}
export interface MsgDisableTokenizeSharesProtoMsg {
    typeUrl: "/gaia.liquid.v1beta1.MsgDisableTokenizeShares";
    value: Uint8Array;
}
/**
 * MsgDisableTokenizeShares prevents the tokenization of shares for a given
 * address
 * @name MsgDisableTokenizeSharesAmino
 * @package gaia.liquid.v1beta1
 * @see proto type: gaia.liquid.v1beta1.MsgDisableTokenizeShares
 */
export interface MsgDisableTokenizeSharesAmino {
    delegator_address?: string;
}
export interface MsgDisableTokenizeSharesAminoMsg {
    type: "gaia/MsgDisableTokenizeShares";
    value: MsgDisableTokenizeSharesAmino;
}
/**
 * MsgDisableTokenizeShares prevents the tokenization of shares for a given
 * address
 */
export interface MsgDisableTokenizeSharesSDKType {
    delegator_address: string;
}
/**
 * MsgDisableTokenizeSharesResponse defines the Msg/DisableTokenizeShares
 * response type.
 */
export interface MsgDisableTokenizeSharesResponse {
}
export interface MsgDisableTokenizeSharesResponseProtoMsg {
    typeUrl: "/gaia.liquid.v1beta1.MsgDisableTokenizeSharesResponse";
    value: Uint8Array;
}
/**
 * MsgDisableTokenizeSharesResponse defines the Msg/DisableTokenizeShares
 * response type.
 * @name MsgDisableTokenizeSharesResponseAmino
 * @package gaia.liquid.v1beta1
 * @see proto type: gaia.liquid.v1beta1.MsgDisableTokenizeSharesResponse
 */
export interface MsgDisableTokenizeSharesResponseAmino {
}
export interface MsgDisableTokenizeSharesResponseAminoMsg {
    type: "/gaia.liquid.v1beta1.MsgDisableTokenizeSharesResponse";
    value: MsgDisableTokenizeSharesResponseAmino;
}
/**
 * MsgDisableTokenizeSharesResponse defines the Msg/DisableTokenizeShares
 * response type.
 */
export interface MsgDisableTokenizeSharesResponseSDKType {
}
/** MsgEnableTokenizeShares re-enables tokenization of shares for a given address */
export interface MsgEnableTokenizeShares {
    delegatorAddress: string;
}
export interface MsgEnableTokenizeSharesProtoMsg {
    typeUrl: "/gaia.liquid.v1beta1.MsgEnableTokenizeShares";
    value: Uint8Array;
}
/**
 * MsgEnableTokenizeShares re-enables tokenization of shares for a given address
 * @name MsgEnableTokenizeSharesAmino
 * @package gaia.liquid.v1beta1
 * @see proto type: gaia.liquid.v1beta1.MsgEnableTokenizeShares
 */
export interface MsgEnableTokenizeSharesAmino {
    delegator_address?: string;
}
export interface MsgEnableTokenizeSharesAminoMsg {
    type: "gaia/MsgEnableTokenizeShares";
    value: MsgEnableTokenizeSharesAmino;
}
/** MsgEnableTokenizeShares re-enables tokenization of shares for a given address */
export interface MsgEnableTokenizeSharesSDKType {
    delegator_address: string;
}
/**
 * MsgEnableTokenizeSharesResponse defines the Msg/EnableTokenizeShares response
 * type.
 */
export interface MsgEnableTokenizeSharesResponse {
    completionTime: Date;
}
export interface MsgEnableTokenizeSharesResponseProtoMsg {
    typeUrl: "/gaia.liquid.v1beta1.MsgEnableTokenizeSharesResponse";
    value: Uint8Array;
}
/**
 * MsgEnableTokenizeSharesResponse defines the Msg/EnableTokenizeShares response
 * type.
 * @name MsgEnableTokenizeSharesResponseAmino
 * @package gaia.liquid.v1beta1
 * @see proto type: gaia.liquid.v1beta1.MsgEnableTokenizeSharesResponse
 */
export interface MsgEnableTokenizeSharesResponseAmino {
    completion_time?: string;
}
export interface MsgEnableTokenizeSharesResponseAminoMsg {
    type: "/gaia.liquid.v1beta1.MsgEnableTokenizeSharesResponse";
    value: MsgEnableTokenizeSharesResponseAmino;
}
/**
 * MsgEnableTokenizeSharesResponse defines the Msg/EnableTokenizeShares response
 * type.
 */
export interface MsgEnableTokenizeSharesResponseSDKType {
    completion_time: Date;
}
/**
 * MsgWithdrawTokenizeShareRecordReward withdraws tokenize share rewards for a
 * specific record
 */
export interface MsgWithdrawTokenizeShareRecordReward {
    ownerAddress: string;
    recordId: bigint;
}
export interface MsgWithdrawTokenizeShareRecordRewardProtoMsg {
    typeUrl: "/gaia.liquid.v1beta1.MsgWithdrawTokenizeShareRecordReward";
    value: Uint8Array;
}
/**
 * MsgWithdrawTokenizeShareRecordReward withdraws tokenize share rewards for a
 * specific record
 * @name MsgWithdrawTokenizeShareRecordRewardAmino
 * @package gaia.liquid.v1beta1
 * @see proto type: gaia.liquid.v1beta1.MsgWithdrawTokenizeShareRecordReward
 */
export interface MsgWithdrawTokenizeShareRecordRewardAmino {
    owner_address?: string;
    record_id?: string;
}
export interface MsgWithdrawTokenizeShareRecordRewardAminoMsg {
    type: "gaia/MsgWithdrawTokenizeShareRecordReward";
    value: MsgWithdrawTokenizeShareRecordRewardAmino;
}
/**
 * MsgWithdrawTokenizeShareRecordReward withdraws tokenize share rewards for a
 * specific record
 */
export interface MsgWithdrawTokenizeShareRecordRewardSDKType {
    owner_address: string;
    record_id: bigint;
}
/**
 * MsgWithdrawTokenizeShareRecordReward defines the
 * Msg/WithdrawTokenizeShareRecordReward response type.
 */
export interface MsgWithdrawTokenizeShareRecordRewardResponse {
}
export interface MsgWithdrawTokenizeShareRecordRewardResponseProtoMsg {
    typeUrl: "/gaia.liquid.v1beta1.MsgWithdrawTokenizeShareRecordRewardResponse";
    value: Uint8Array;
}
/**
 * MsgWithdrawTokenizeShareRecordReward defines the
 * Msg/WithdrawTokenizeShareRecordReward response type.
 * @name MsgWithdrawTokenizeShareRecordRewardResponseAmino
 * @package gaia.liquid.v1beta1
 * @see proto type: gaia.liquid.v1beta1.MsgWithdrawTokenizeShareRecordRewardResponse
 */
export interface MsgWithdrawTokenizeShareRecordRewardResponseAmino {
}
export interface MsgWithdrawTokenizeShareRecordRewardResponseAminoMsg {
    type: "/gaia.liquid.v1beta1.MsgWithdrawTokenizeShareRecordRewardResponse";
    value: MsgWithdrawTokenizeShareRecordRewardResponseAmino;
}
/**
 * MsgWithdrawTokenizeShareRecordReward defines the
 * Msg/WithdrawTokenizeShareRecordReward response type.
 */
export interface MsgWithdrawTokenizeShareRecordRewardResponseSDKType {
}
/**
 * MsgWithdrawAllTokenizeShareRecordReward withdraws tokenize share rewards or
 * all records owned by the designated owner
 */
export interface MsgWithdrawAllTokenizeShareRecordReward {
    ownerAddress: string;
}
export interface MsgWithdrawAllTokenizeShareRecordRewardProtoMsg {
    typeUrl: "/gaia.liquid.v1beta1.MsgWithdrawAllTokenizeShareRecordReward";
    value: Uint8Array;
}
/**
 * MsgWithdrawAllTokenizeShareRecordReward withdraws tokenize share rewards or
 * all records owned by the designated owner
 * @name MsgWithdrawAllTokenizeShareRecordRewardAmino
 * @package gaia.liquid.v1beta1
 * @see proto type: gaia.liquid.v1beta1.MsgWithdrawAllTokenizeShareRecordReward
 */
export interface MsgWithdrawAllTokenizeShareRecordRewardAmino {
    owner_address?: string;
}
export interface MsgWithdrawAllTokenizeShareRecordRewardAminoMsg {
    type: "gaia/MsgWithdrawAllTokenizeShareRecordReward";
    value: MsgWithdrawAllTokenizeShareRecordRewardAmino;
}
/**
 * MsgWithdrawAllTokenizeShareRecordReward withdraws tokenize share rewards or
 * all records owned by the designated owner
 */
export interface MsgWithdrawAllTokenizeShareRecordRewardSDKType {
    owner_address: string;
}
/**
 * MsgWithdrawAllTokenizeShareRecordRewardResponse defines the
 * Msg/WithdrawTokenizeShareRecordReward response type.
 */
export interface MsgWithdrawAllTokenizeShareRecordRewardResponse {
}
export interface MsgWithdrawAllTokenizeShareRecordRewardResponseProtoMsg {
    typeUrl: "/gaia.liquid.v1beta1.MsgWithdrawAllTokenizeShareRecordRewardResponse";
    value: Uint8Array;
}
/**
 * MsgWithdrawAllTokenizeShareRecordRewardResponse defines the
 * Msg/WithdrawTokenizeShareRecordReward response type.
 * @name MsgWithdrawAllTokenizeShareRecordRewardResponseAmino
 * @package gaia.liquid.v1beta1
 * @see proto type: gaia.liquid.v1beta1.MsgWithdrawAllTokenizeShareRecordRewardResponse
 */
export interface MsgWithdrawAllTokenizeShareRecordRewardResponseAmino {
}
export interface MsgWithdrawAllTokenizeShareRecordRewardResponseAminoMsg {
    type: "/gaia.liquid.v1beta1.MsgWithdrawAllTokenizeShareRecordRewardResponse";
    value: MsgWithdrawAllTokenizeShareRecordRewardResponseAmino;
}
/**
 * MsgWithdrawAllTokenizeShareRecordRewardResponse defines the
 * Msg/WithdrawTokenizeShareRecordReward response type.
 */
export interface MsgWithdrawAllTokenizeShareRecordRewardResponseSDKType {
}
export declare const MsgUpdateParams: {
    typeUrl: string;
    encode(message: MsgUpdateParams, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParams;
    fromPartial(object: Partial<MsgUpdateParams>): MsgUpdateParams;
    fromAmino(object: MsgUpdateParamsAmino): MsgUpdateParams;
    toAmino(message: MsgUpdateParams): MsgUpdateParamsAmino;
    fromAminoMsg(object: MsgUpdateParamsAminoMsg): MsgUpdateParams;
    toAminoMsg(message: MsgUpdateParams): MsgUpdateParamsAminoMsg;
    fromProtoMsg(message: MsgUpdateParamsProtoMsg): MsgUpdateParams;
    toProto(message: MsgUpdateParams): Uint8Array;
    toProtoMsg(message: MsgUpdateParams): MsgUpdateParamsProtoMsg;
};
export declare const MsgUpdateParamsResponse: {
    typeUrl: string;
    encode(_: MsgUpdateParamsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParamsResponse;
    fromPartial(_: Partial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse;
    fromAmino(_: MsgUpdateParamsResponseAmino): MsgUpdateParamsResponse;
    toAmino(_: MsgUpdateParamsResponse): MsgUpdateParamsResponseAmino;
    fromAminoMsg(object: MsgUpdateParamsResponseAminoMsg): MsgUpdateParamsResponse;
    fromProtoMsg(message: MsgUpdateParamsResponseProtoMsg): MsgUpdateParamsResponse;
    toProto(message: MsgUpdateParamsResponse): Uint8Array;
    toProtoMsg(message: MsgUpdateParamsResponse): MsgUpdateParamsResponseProtoMsg;
};
export declare const MsgTokenizeShares: {
    typeUrl: string;
    encode(message: MsgTokenizeShares, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgTokenizeShares;
    fromPartial(object: Partial<MsgTokenizeShares>): MsgTokenizeShares;
    fromAmino(object: MsgTokenizeSharesAmino): MsgTokenizeShares;
    toAmino(message: MsgTokenizeShares): MsgTokenizeSharesAmino;
    fromAminoMsg(object: MsgTokenizeSharesAminoMsg): MsgTokenizeShares;
    toAminoMsg(message: MsgTokenizeShares): MsgTokenizeSharesAminoMsg;
    fromProtoMsg(message: MsgTokenizeSharesProtoMsg): MsgTokenizeShares;
    toProto(message: MsgTokenizeShares): Uint8Array;
    toProtoMsg(message: MsgTokenizeShares): MsgTokenizeSharesProtoMsg;
};
export declare const MsgTokenizeSharesResponse: {
    typeUrl: string;
    encode(message: MsgTokenizeSharesResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgTokenizeSharesResponse;
    fromPartial(object: Partial<MsgTokenizeSharesResponse>): MsgTokenizeSharesResponse;
    fromAmino(object: MsgTokenizeSharesResponseAmino): MsgTokenizeSharesResponse;
    toAmino(message: MsgTokenizeSharesResponse): MsgTokenizeSharesResponseAmino;
    fromAminoMsg(object: MsgTokenizeSharesResponseAminoMsg): MsgTokenizeSharesResponse;
    fromProtoMsg(message: MsgTokenizeSharesResponseProtoMsg): MsgTokenizeSharesResponse;
    toProto(message: MsgTokenizeSharesResponse): Uint8Array;
    toProtoMsg(message: MsgTokenizeSharesResponse): MsgTokenizeSharesResponseProtoMsg;
};
export declare const MsgRedeemTokensForShares: {
    typeUrl: string;
    encode(message: MsgRedeemTokensForShares, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgRedeemTokensForShares;
    fromPartial(object: Partial<MsgRedeemTokensForShares>): MsgRedeemTokensForShares;
    fromAmino(object: MsgRedeemTokensForSharesAmino): MsgRedeemTokensForShares;
    toAmino(message: MsgRedeemTokensForShares): MsgRedeemTokensForSharesAmino;
    fromAminoMsg(object: MsgRedeemTokensForSharesAminoMsg): MsgRedeemTokensForShares;
    toAminoMsg(message: MsgRedeemTokensForShares): MsgRedeemTokensForSharesAminoMsg;
    fromProtoMsg(message: MsgRedeemTokensForSharesProtoMsg): MsgRedeemTokensForShares;
    toProto(message: MsgRedeemTokensForShares): Uint8Array;
    toProtoMsg(message: MsgRedeemTokensForShares): MsgRedeemTokensForSharesProtoMsg;
};
export declare const MsgRedeemTokensForSharesResponse: {
    typeUrl: string;
    encode(message: MsgRedeemTokensForSharesResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgRedeemTokensForSharesResponse;
    fromPartial(object: Partial<MsgRedeemTokensForSharesResponse>): MsgRedeemTokensForSharesResponse;
    fromAmino(object: MsgRedeemTokensForSharesResponseAmino): MsgRedeemTokensForSharesResponse;
    toAmino(message: MsgRedeemTokensForSharesResponse): MsgRedeemTokensForSharesResponseAmino;
    fromAminoMsg(object: MsgRedeemTokensForSharesResponseAminoMsg): MsgRedeemTokensForSharesResponse;
    fromProtoMsg(message: MsgRedeemTokensForSharesResponseProtoMsg): MsgRedeemTokensForSharesResponse;
    toProto(message: MsgRedeemTokensForSharesResponse): Uint8Array;
    toProtoMsg(message: MsgRedeemTokensForSharesResponse): MsgRedeemTokensForSharesResponseProtoMsg;
};
export declare const MsgTransferTokenizeShareRecord: {
    typeUrl: string;
    encode(message: MsgTransferTokenizeShareRecord, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgTransferTokenizeShareRecord;
    fromPartial(object: Partial<MsgTransferTokenizeShareRecord>): MsgTransferTokenizeShareRecord;
    fromAmino(object: MsgTransferTokenizeShareRecordAmino): MsgTransferTokenizeShareRecord;
    toAmino(message: MsgTransferTokenizeShareRecord): MsgTransferTokenizeShareRecordAmino;
    fromAminoMsg(object: MsgTransferTokenizeShareRecordAminoMsg): MsgTransferTokenizeShareRecord;
    toAminoMsg(message: MsgTransferTokenizeShareRecord): MsgTransferTokenizeShareRecordAminoMsg;
    fromProtoMsg(message: MsgTransferTokenizeShareRecordProtoMsg): MsgTransferTokenizeShareRecord;
    toProto(message: MsgTransferTokenizeShareRecord): Uint8Array;
    toProtoMsg(message: MsgTransferTokenizeShareRecord): MsgTransferTokenizeShareRecordProtoMsg;
};
export declare const MsgTransferTokenizeShareRecordResponse: {
    typeUrl: string;
    encode(_: MsgTransferTokenizeShareRecordResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgTransferTokenizeShareRecordResponse;
    fromPartial(_: Partial<MsgTransferTokenizeShareRecordResponse>): MsgTransferTokenizeShareRecordResponse;
    fromAmino(_: MsgTransferTokenizeShareRecordResponseAmino): MsgTransferTokenizeShareRecordResponse;
    toAmino(_: MsgTransferTokenizeShareRecordResponse): MsgTransferTokenizeShareRecordResponseAmino;
    fromAminoMsg(object: MsgTransferTokenizeShareRecordResponseAminoMsg): MsgTransferTokenizeShareRecordResponse;
    fromProtoMsg(message: MsgTransferTokenizeShareRecordResponseProtoMsg): MsgTransferTokenizeShareRecordResponse;
    toProto(message: MsgTransferTokenizeShareRecordResponse): Uint8Array;
    toProtoMsg(message: MsgTransferTokenizeShareRecordResponse): MsgTransferTokenizeShareRecordResponseProtoMsg;
};
export declare const MsgDisableTokenizeShares: {
    typeUrl: string;
    encode(message: MsgDisableTokenizeShares, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgDisableTokenizeShares;
    fromPartial(object: Partial<MsgDisableTokenizeShares>): MsgDisableTokenizeShares;
    fromAmino(object: MsgDisableTokenizeSharesAmino): MsgDisableTokenizeShares;
    toAmino(message: MsgDisableTokenizeShares): MsgDisableTokenizeSharesAmino;
    fromAminoMsg(object: MsgDisableTokenizeSharesAminoMsg): MsgDisableTokenizeShares;
    toAminoMsg(message: MsgDisableTokenizeShares): MsgDisableTokenizeSharesAminoMsg;
    fromProtoMsg(message: MsgDisableTokenizeSharesProtoMsg): MsgDisableTokenizeShares;
    toProto(message: MsgDisableTokenizeShares): Uint8Array;
    toProtoMsg(message: MsgDisableTokenizeShares): MsgDisableTokenizeSharesProtoMsg;
};
export declare const MsgDisableTokenizeSharesResponse: {
    typeUrl: string;
    encode(_: MsgDisableTokenizeSharesResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgDisableTokenizeSharesResponse;
    fromPartial(_: Partial<MsgDisableTokenizeSharesResponse>): MsgDisableTokenizeSharesResponse;
    fromAmino(_: MsgDisableTokenizeSharesResponseAmino): MsgDisableTokenizeSharesResponse;
    toAmino(_: MsgDisableTokenizeSharesResponse): MsgDisableTokenizeSharesResponseAmino;
    fromAminoMsg(object: MsgDisableTokenizeSharesResponseAminoMsg): MsgDisableTokenizeSharesResponse;
    fromProtoMsg(message: MsgDisableTokenizeSharesResponseProtoMsg): MsgDisableTokenizeSharesResponse;
    toProto(message: MsgDisableTokenizeSharesResponse): Uint8Array;
    toProtoMsg(message: MsgDisableTokenizeSharesResponse): MsgDisableTokenizeSharesResponseProtoMsg;
};
export declare const MsgEnableTokenizeShares: {
    typeUrl: string;
    encode(message: MsgEnableTokenizeShares, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgEnableTokenizeShares;
    fromPartial(object: Partial<MsgEnableTokenizeShares>): MsgEnableTokenizeShares;
    fromAmino(object: MsgEnableTokenizeSharesAmino): MsgEnableTokenizeShares;
    toAmino(message: MsgEnableTokenizeShares): MsgEnableTokenizeSharesAmino;
    fromAminoMsg(object: MsgEnableTokenizeSharesAminoMsg): MsgEnableTokenizeShares;
    toAminoMsg(message: MsgEnableTokenizeShares): MsgEnableTokenizeSharesAminoMsg;
    fromProtoMsg(message: MsgEnableTokenizeSharesProtoMsg): MsgEnableTokenizeShares;
    toProto(message: MsgEnableTokenizeShares): Uint8Array;
    toProtoMsg(message: MsgEnableTokenizeShares): MsgEnableTokenizeSharesProtoMsg;
};
export declare const MsgEnableTokenizeSharesResponse: {
    typeUrl: string;
    encode(message: MsgEnableTokenizeSharesResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgEnableTokenizeSharesResponse;
    fromPartial(object: Partial<MsgEnableTokenizeSharesResponse>): MsgEnableTokenizeSharesResponse;
    fromAmino(object: MsgEnableTokenizeSharesResponseAmino): MsgEnableTokenizeSharesResponse;
    toAmino(message: MsgEnableTokenizeSharesResponse): MsgEnableTokenizeSharesResponseAmino;
    fromAminoMsg(object: MsgEnableTokenizeSharesResponseAminoMsg): MsgEnableTokenizeSharesResponse;
    fromProtoMsg(message: MsgEnableTokenizeSharesResponseProtoMsg): MsgEnableTokenizeSharesResponse;
    toProto(message: MsgEnableTokenizeSharesResponse): Uint8Array;
    toProtoMsg(message: MsgEnableTokenizeSharesResponse): MsgEnableTokenizeSharesResponseProtoMsg;
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
    fromProtoMsg(message: MsgWithdrawAllTokenizeShareRecordRewardResponseProtoMsg): MsgWithdrawAllTokenizeShareRecordRewardResponse;
    toProto(message: MsgWithdrawAllTokenizeShareRecordRewardResponse): Uint8Array;
    toProtoMsg(message: MsgWithdrawAllTokenizeShareRecordRewardResponse): MsgWithdrawAllTokenizeShareRecordRewardResponseProtoMsg;
};
