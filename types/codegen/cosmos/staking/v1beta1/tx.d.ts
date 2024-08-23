import { Description, DescriptionAmino, DescriptionSDKType, CommissionRates, CommissionRatesAmino, CommissionRatesSDKType } from "./staking";
import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { Coin, CoinAmino, CoinSDKType } from "../../base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { Pubkey } from "@cosmjs/amino";
/** MsgCreateValidator defines a SDK message for creating a new validator. */
export interface MsgCreateValidator {
    description: Description;
    commission: CommissionRates;
    /** Deprecated: This field has been deprecated with LSM in favor of the validator bond */
    /** @deprecated */
    minSelfDelegation: string;
    delegatorAddress: string;
    validatorAddress: string;
    pubkey?: Any | undefined;
    value: Coin;
}
export interface MsgCreateValidatorProtoMsg {
    typeUrl: "/cosmos.staking.v1beta1.MsgCreateValidator";
    value: Uint8Array;
}
export declare type MsgCreateValidatorEncoded = Omit<MsgCreateValidator, "pubkey"> & {
    pubkey?: AnyProtoMsg | undefined;
};
/** MsgCreateValidator defines a SDK message for creating a new validator. */
export interface MsgCreateValidatorAmino {
    description?: DescriptionAmino;
    commission?: CommissionRatesAmino;
    /** Deprecated: This field has been deprecated with LSM in favor of the validator bond */
    /** @deprecated */
    min_self_delegation?: string;
    delegator_address?: string;
    validator_address?: string;
    pubkey?: AnyAmino;
    value?: CoinAmino;
}
export interface MsgCreateValidatorAminoMsg {
    type: "cosmos-sdk/MsgCreateValidator";
    value: MsgCreateValidatorAmino;
}
/** MsgCreateValidator defines a SDK message for creating a new validator. */
export interface MsgCreateValidatorSDKType {
    description: DescriptionSDKType;
    commission: CommissionRatesSDKType;
    /** @deprecated */
    min_self_delegation: string;
    delegator_address: string;
    validator_address: string;
    pubkey?: AnySDKType | undefined;
    value: CoinSDKType;
}
/** MsgCreateValidatorResponse defines the Msg/CreateValidator response type. */
export interface MsgCreateValidatorResponse {
}
export interface MsgCreateValidatorResponseProtoMsg {
    typeUrl: "/cosmos.staking.v1beta1.MsgCreateValidatorResponse";
    value: Uint8Array;
}
/** MsgCreateValidatorResponse defines the Msg/CreateValidator response type. */
export interface MsgCreateValidatorResponseAmino {
}
export interface MsgCreateValidatorResponseAminoMsg {
    type: "cosmos-sdk/MsgCreateValidatorResponse";
    value: MsgCreateValidatorResponseAmino;
}
/** MsgCreateValidatorResponse defines the Msg/CreateValidator response type. */
export interface MsgCreateValidatorResponseSDKType {
}
/** MsgEditValidator defines a SDK message for editing an existing validator. */
export interface MsgEditValidator {
    description: Description;
    validatorAddress: string;
    /**
     * We pass a reference to the new commission rate and min self delegation as
     * it's not mandatory to update. If not updated, the deserialized rate will be
     * zero with no way to distinguish if an update was intended.
     * REF: #2373
     */
    commissionRate: string;
    /** @deprecated */
    minSelfDelegation: string;
}
export interface MsgEditValidatorProtoMsg {
    typeUrl: "/cosmos.staking.v1beta1.MsgEditValidator";
    value: Uint8Array;
}
/** MsgEditValidator defines a SDK message for editing an existing validator. */
export interface MsgEditValidatorAmino {
    description?: DescriptionAmino;
    validator_address?: string;
    /**
     * We pass a reference to the new commission rate and min self delegation as
     * it's not mandatory to update. If not updated, the deserialized rate will be
     * zero with no way to distinguish if an update was intended.
     * REF: #2373
     */
    commission_rate?: string;
    /** @deprecated */
    min_self_delegation?: string;
}
export interface MsgEditValidatorAminoMsg {
    type: "cosmos-sdk/MsgEditValidator";
    value: MsgEditValidatorAmino;
}
/** MsgEditValidator defines a SDK message for editing an existing validator. */
export interface MsgEditValidatorSDKType {
    description: DescriptionSDKType;
    validator_address: string;
    commission_rate: string;
    /** @deprecated */
    min_self_delegation: string;
}
/** MsgEditValidatorResponse defines the Msg/EditValidator response type. */
export interface MsgEditValidatorResponse {
}
export interface MsgEditValidatorResponseProtoMsg {
    typeUrl: "/cosmos.staking.v1beta1.MsgEditValidatorResponse";
    value: Uint8Array;
}
/** MsgEditValidatorResponse defines the Msg/EditValidator response type. */
export interface MsgEditValidatorResponseAmino {
}
export interface MsgEditValidatorResponseAminoMsg {
    type: "cosmos-sdk/MsgEditValidatorResponse";
    value: MsgEditValidatorResponseAmino;
}
/** MsgEditValidatorResponse defines the Msg/EditValidator response type. */
export interface MsgEditValidatorResponseSDKType {
}
/**
 * MsgDelegate defines a SDK message for performing a delegation of coins
 * from a delegator to a validator.
 */
export interface MsgDelegate {
    delegatorAddress: string;
    validatorAddress: string;
    amount: Coin;
}
export interface MsgDelegateProtoMsg {
    typeUrl: "/cosmos.staking.v1beta1.MsgDelegate";
    value: Uint8Array;
}
/**
 * MsgDelegate defines a SDK message for performing a delegation of coins
 * from a delegator to a validator.
 */
export interface MsgDelegateAmino {
    delegator_address?: string;
    validator_address?: string;
    amount?: CoinAmino;
}
export interface MsgDelegateAminoMsg {
    type: "cosmos-sdk/MsgDelegate";
    value: MsgDelegateAmino;
}
/**
 * MsgDelegate defines a SDK message for performing a delegation of coins
 * from a delegator to a validator.
 */
export interface MsgDelegateSDKType {
    delegator_address: string;
    validator_address: string;
    amount: CoinSDKType;
}
/** MsgDelegateResponse defines the Msg/Delegate response type. */
export interface MsgDelegateResponse {
}
export interface MsgDelegateResponseProtoMsg {
    typeUrl: "/cosmos.staking.v1beta1.MsgDelegateResponse";
    value: Uint8Array;
}
/** MsgDelegateResponse defines the Msg/Delegate response type. */
export interface MsgDelegateResponseAmino {
}
export interface MsgDelegateResponseAminoMsg {
    type: "cosmos-sdk/MsgDelegateResponse";
    value: MsgDelegateResponseAmino;
}
/** MsgDelegateResponse defines the Msg/Delegate response type. */
export interface MsgDelegateResponseSDKType {
}
/**
 * MsgBeginRedelegate defines a SDK message for performing a redelegation
 * of coins from a delegator and source validator to a destination validator.
 */
export interface MsgBeginRedelegate {
    delegatorAddress: string;
    validatorSrcAddress: string;
    validatorDstAddress: string;
    amount: Coin;
}
export interface MsgBeginRedelegateProtoMsg {
    typeUrl: "/cosmos.staking.v1beta1.MsgBeginRedelegate";
    value: Uint8Array;
}
/**
 * MsgBeginRedelegate defines a SDK message for performing a redelegation
 * of coins from a delegator and source validator to a destination validator.
 */
export interface MsgBeginRedelegateAmino {
    delegator_address?: string;
    validator_src_address?: string;
    validator_dst_address?: string;
    amount?: CoinAmino;
}
export interface MsgBeginRedelegateAminoMsg {
    type: "cosmos-sdk/MsgBeginRedelegate";
    value: MsgBeginRedelegateAmino;
}
/**
 * MsgBeginRedelegate defines a SDK message for performing a redelegation
 * of coins from a delegator and source validator to a destination validator.
 */
export interface MsgBeginRedelegateSDKType {
    delegator_address: string;
    validator_src_address: string;
    validator_dst_address: string;
    amount: CoinSDKType;
}
/** MsgBeginRedelegateResponse defines the Msg/BeginRedelegate response type. */
export interface MsgBeginRedelegateResponse {
    completionTime: Date;
}
export interface MsgBeginRedelegateResponseProtoMsg {
    typeUrl: "/cosmos.staking.v1beta1.MsgBeginRedelegateResponse";
    value: Uint8Array;
}
/** MsgBeginRedelegateResponse defines the Msg/BeginRedelegate response type. */
export interface MsgBeginRedelegateResponseAmino {
    completion_time?: string;
}
export interface MsgBeginRedelegateResponseAminoMsg {
    type: "cosmos-sdk/MsgBeginRedelegateResponse";
    value: MsgBeginRedelegateResponseAmino;
}
/** MsgBeginRedelegateResponse defines the Msg/BeginRedelegate response type. */
export interface MsgBeginRedelegateResponseSDKType {
    completion_time: Date;
}
/**
 * MsgUndelegate defines a SDK message for performing an undelegation from a
 * delegate and a validator.
 */
export interface MsgUndelegate {
    delegatorAddress: string;
    validatorAddress: string;
    amount: Coin;
}
export interface MsgUndelegateProtoMsg {
    typeUrl: "/cosmos.staking.v1beta1.MsgUndelegate";
    value: Uint8Array;
}
/**
 * MsgUndelegate defines a SDK message for performing an undelegation from a
 * delegate and a validator.
 */
export interface MsgUndelegateAmino {
    delegator_address?: string;
    validator_address?: string;
    amount?: CoinAmino;
}
export interface MsgUndelegateAminoMsg {
    type: "cosmos-sdk/MsgUndelegate";
    value: MsgUndelegateAmino;
}
/**
 * MsgUndelegate defines a SDK message for performing an undelegation from a
 * delegate and a validator.
 */
export interface MsgUndelegateSDKType {
    delegator_address: string;
    validator_address: string;
    amount: CoinSDKType;
}
/** MsgUndelegateResponse defines the Msg/Undelegate response type. */
export interface MsgUndelegateResponse {
    completionTime: Date;
}
export interface MsgUndelegateResponseProtoMsg {
    typeUrl: "/cosmos.staking.v1beta1.MsgUndelegateResponse";
    value: Uint8Array;
}
/** MsgUndelegateResponse defines the Msg/Undelegate response type. */
export interface MsgUndelegateResponseAmino {
    completion_time?: string;
}
export interface MsgUndelegateResponseAminoMsg {
    type: "cosmos-sdk/MsgUndelegateResponse";
    value: MsgUndelegateResponseAmino;
}
/** MsgUndelegateResponse defines the Msg/Undelegate response type. */
export interface MsgUndelegateResponseSDKType {
    completion_time: Date;
}
/**
 * MsgUnbondValidator defines a method for performing the status transition for
 * a validator from bonded to unbonded
 */
export interface MsgUnbondValidator {
    validatorAddress: string;
}
export interface MsgUnbondValidatorProtoMsg {
    typeUrl: "/cosmos.staking.v1beta1.MsgUnbondValidator";
    value: Uint8Array;
}
/**
 * MsgUnbondValidator defines a method for performing the status transition for
 * a validator from bonded to unbonded
 */
export interface MsgUnbondValidatorAmino {
    validator_address?: string;
}
export interface MsgUnbondValidatorAminoMsg {
    type: "cosmos-sdk/MsgUnbondValidator";
    value: MsgUnbondValidatorAmino;
}
/**
 * MsgUnbondValidator defines a method for performing the status transition for
 * a validator from bonded to unbonded
 */
export interface MsgUnbondValidatorSDKType {
    validator_address: string;
}
/** MsgUnbondValidatorResponse defines the Msg/UnbondValidator response type. */
export interface MsgUnbondValidatorResponse {
}
export interface MsgUnbondValidatorResponseProtoMsg {
    typeUrl: "/cosmos.staking.v1beta1.MsgUnbondValidatorResponse";
    value: Uint8Array;
}
/** MsgUnbondValidatorResponse defines the Msg/UnbondValidator response type. */
export interface MsgUnbondValidatorResponseAmino {
}
export interface MsgUnbondValidatorResponseAminoMsg {
    type: "cosmos-sdk/MsgUnbondValidatorResponse";
    value: MsgUnbondValidatorResponseAmino;
}
/** MsgUnbondValidatorResponse defines the Msg/UnbondValidator response type. */
export interface MsgUnbondValidatorResponseSDKType {
}
/**
 * MsgCancelUnbondingDelegation defines the SDK message for performing a cancel unbonding delegation for delegator
 *
 * Since: cosmos-sdk 0.46
 */
export interface MsgCancelUnbondingDelegation {
    delegatorAddress: string;
    validatorAddress: string;
    /** amount is always less than or equal to unbonding delegation entry balance */
    amount: Coin;
    /** creation_height is the height which the unbonding took place. */
    creationHeight: bigint;
}
export interface MsgCancelUnbondingDelegationProtoMsg {
    typeUrl: "/cosmos.staking.v1beta1.MsgCancelUnbondingDelegation";
    value: Uint8Array;
}
/**
 * MsgCancelUnbondingDelegation defines the SDK message for performing a cancel unbonding delegation for delegator
 *
 * Since: cosmos-sdk 0.46
 */
export interface MsgCancelUnbondingDelegationAmino {
    delegator_address?: string;
    validator_address?: string;
    /** amount is always less than or equal to unbonding delegation entry balance */
    amount?: CoinAmino;
    /** creation_height is the height which the unbonding took place. */
    creation_height?: string;
}
export interface MsgCancelUnbondingDelegationAminoMsg {
    type: "cosmos-sdk/MsgCancelUnbondingDelegation";
    value: MsgCancelUnbondingDelegationAmino;
}
/**
 * MsgCancelUnbondingDelegation defines the SDK message for performing a cancel unbonding delegation for delegator
 *
 * Since: cosmos-sdk 0.46
 */
export interface MsgCancelUnbondingDelegationSDKType {
    delegator_address: string;
    validator_address: string;
    amount: CoinSDKType;
    creation_height: bigint;
}
/**
 * MsgCancelUnbondingDelegationResponse
 *
 * Since: cosmos-sdk 0.46
 */
export interface MsgCancelUnbondingDelegationResponse {
}
export interface MsgCancelUnbondingDelegationResponseProtoMsg {
    typeUrl: "/cosmos.staking.v1beta1.MsgCancelUnbondingDelegationResponse";
    value: Uint8Array;
}
/**
 * MsgCancelUnbondingDelegationResponse
 *
 * Since: cosmos-sdk 0.46
 */
export interface MsgCancelUnbondingDelegationResponseAmino {
}
export interface MsgCancelUnbondingDelegationResponseAminoMsg {
    type: "cosmos-sdk/MsgCancelUnbondingDelegationResponse";
    value: MsgCancelUnbondingDelegationResponseAmino;
}
/**
 * MsgCancelUnbondingDelegationResponse
 *
 * Since: cosmos-sdk 0.46
 */
export interface MsgCancelUnbondingDelegationResponseSDKType {
}
/** MsgTokenizeShares tokenizes a delegation */
export interface MsgTokenizeShares {
    delegatorAddress: string;
    validatorAddress: string;
    amount: Coin;
    tokenizedShareOwner: string;
}
export interface MsgTokenizeSharesProtoMsg {
    typeUrl: "/cosmos.staking.v1beta1.MsgTokenizeShares";
    value: Uint8Array;
}
/** MsgTokenizeShares tokenizes a delegation */
export interface MsgTokenizeSharesAmino {
    delegator_address?: string;
    validator_address?: string;
    amount?: CoinAmino;
    tokenized_share_owner?: string;
}
export interface MsgTokenizeSharesAminoMsg {
    type: "cosmos-sdk/MsgTokenizeShares";
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
    typeUrl: "/cosmos.staking.v1beta1.MsgTokenizeSharesResponse";
    value: Uint8Array;
}
/** MsgTokenizeSharesResponse defines the Msg/MsgTokenizeShares response type. */
export interface MsgTokenizeSharesResponseAmino {
    amount?: CoinAmino;
}
export interface MsgTokenizeSharesResponseAminoMsg {
    type: "cosmos-sdk/MsgTokenizeSharesResponse";
    value: MsgTokenizeSharesResponseAmino;
}
/** MsgTokenizeSharesResponse defines the Msg/MsgTokenizeShares response type. */
export interface MsgTokenizeSharesResponseSDKType {
    amount: CoinSDKType;
}
/** MsgRedeemTokensForShares redeems a tokenized share back into a native delegation */
export interface MsgRedeemTokensForShares {
    delegatorAddress: string;
    amount: Coin;
}
export interface MsgRedeemTokensForSharesProtoMsg {
    typeUrl: "/cosmos.staking.v1beta1.MsgRedeemTokensForShares";
    value: Uint8Array;
}
/** MsgRedeemTokensForShares redeems a tokenized share back into a native delegation */
export interface MsgRedeemTokensForSharesAmino {
    delegator_address?: string;
    amount?: CoinAmino;
}
export interface MsgRedeemTokensForSharesAminoMsg {
    type: "cosmos-sdk/MsgRedeemTokensForShares";
    value: MsgRedeemTokensForSharesAmino;
}
/** MsgRedeemTokensForShares redeems a tokenized share back into a native delegation */
export interface MsgRedeemTokensForSharesSDKType {
    delegator_address: string;
    amount: CoinSDKType;
}
/** MsgRedeemTokensForSharesResponse defines the Msg/MsgRedeemTokensForShares response type. */
export interface MsgRedeemTokensForSharesResponse {
    amount: Coin;
}
export interface MsgRedeemTokensForSharesResponseProtoMsg {
    typeUrl: "/cosmos.staking.v1beta1.MsgRedeemTokensForSharesResponse";
    value: Uint8Array;
}
/** MsgRedeemTokensForSharesResponse defines the Msg/MsgRedeemTokensForShares response type. */
export interface MsgRedeemTokensForSharesResponseAmino {
    amount?: CoinAmino;
}
export interface MsgRedeemTokensForSharesResponseAminoMsg {
    type: "cosmos-sdk/MsgRedeemTokensForSharesResponse";
    value: MsgRedeemTokensForSharesResponseAmino;
}
/** MsgRedeemTokensForSharesResponse defines the Msg/MsgRedeemTokensForShares response type. */
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
    typeUrl: "/cosmos.staking.v1beta1.MsgTransferTokenizeShareRecord";
    value: Uint8Array;
}
/** MsgTransferTokenizeShareRecord transfer a tokenize share record */
export interface MsgTransferTokenizeShareRecordAmino {
    tokenize_share_record_id?: string;
    sender?: string;
    new_owner?: string;
}
export interface MsgTransferTokenizeShareRecordAminoMsg {
    type: "cosmos-sdk/MsgTransferTokenizeShareRecord";
    value: MsgTransferTokenizeShareRecordAmino;
}
/** MsgTransferTokenizeShareRecord transfer a tokenize share record */
export interface MsgTransferTokenizeShareRecordSDKType {
    tokenize_share_record_id: bigint;
    sender: string;
    new_owner: string;
}
/** MsgTransferTokenizeShareRecordResponse defines the Msg/MsgTransferTokenizeShareRecord response type. */
export interface MsgTransferTokenizeShareRecordResponse {
}
export interface MsgTransferTokenizeShareRecordResponseProtoMsg {
    typeUrl: "/cosmos.staking.v1beta1.MsgTransferTokenizeShareRecordResponse";
    value: Uint8Array;
}
/** MsgTransferTokenizeShareRecordResponse defines the Msg/MsgTransferTokenizeShareRecord response type. */
export interface MsgTransferTokenizeShareRecordResponseAmino {
}
export interface MsgTransferTokenizeShareRecordResponseAminoMsg {
    type: "cosmos-sdk/MsgTransferTokenizeShareRecordResponse";
    value: MsgTransferTokenizeShareRecordResponseAmino;
}
/** MsgTransferTokenizeShareRecordResponse defines the Msg/MsgTransferTokenizeShareRecord response type. */
export interface MsgTransferTokenizeShareRecordResponseSDKType {
}
/** MsgDisableTokenizeShares prevents the tokenization of shares for a given address */
export interface MsgDisableTokenizeShares {
    delegatorAddress: string;
}
export interface MsgDisableTokenizeSharesProtoMsg {
    typeUrl: "/cosmos.staking.v1beta1.MsgDisableTokenizeShares";
    value: Uint8Array;
}
/** MsgDisableTokenizeShares prevents the tokenization of shares for a given address */
export interface MsgDisableTokenizeSharesAmino {
    delegator_address?: string;
}
export interface MsgDisableTokenizeSharesAminoMsg {
    type: "cosmos-sdk/MsgDisableTokenizeShares";
    value: MsgDisableTokenizeSharesAmino;
}
/** MsgDisableTokenizeShares prevents the tokenization of shares for a given address */
export interface MsgDisableTokenizeSharesSDKType {
    delegator_address: string;
}
/** MsgDisableTokenizeSharesResponse defines the Msg/DisableTokenizeShares response type. */
export interface MsgDisableTokenizeSharesResponse {
}
export interface MsgDisableTokenizeSharesResponseProtoMsg {
    typeUrl: "/cosmos.staking.v1beta1.MsgDisableTokenizeSharesResponse";
    value: Uint8Array;
}
/** MsgDisableTokenizeSharesResponse defines the Msg/DisableTokenizeShares response type. */
export interface MsgDisableTokenizeSharesResponseAmino {
}
export interface MsgDisableTokenizeSharesResponseAminoMsg {
    type: "cosmos-sdk/MsgDisableTokenizeSharesResponse";
    value: MsgDisableTokenizeSharesResponseAmino;
}
/** MsgDisableTokenizeSharesResponse defines the Msg/DisableTokenizeShares response type. */
export interface MsgDisableTokenizeSharesResponseSDKType {
}
/** MsgEnableTokenizeShares re-enables tokenization of shares for a given address */
export interface MsgEnableTokenizeShares {
    delegatorAddress: string;
}
export interface MsgEnableTokenizeSharesProtoMsg {
    typeUrl: "/cosmos.staking.v1beta1.MsgEnableTokenizeShares";
    value: Uint8Array;
}
/** MsgEnableTokenizeShares re-enables tokenization of shares for a given address */
export interface MsgEnableTokenizeSharesAmino {
    delegator_address?: string;
}
export interface MsgEnableTokenizeSharesAminoMsg {
    type: "cosmos-sdk/MsgEnableTokenizeShares";
    value: MsgEnableTokenizeSharesAmino;
}
/** MsgEnableTokenizeShares re-enables tokenization of shares for a given address */
export interface MsgEnableTokenizeSharesSDKType {
    delegator_address: string;
}
/** MsgEnableTokenizeSharesResponse defines the Msg/EnableTokenizeShares response type. */
export interface MsgEnableTokenizeSharesResponse {
    completionTime: Date;
}
export interface MsgEnableTokenizeSharesResponseProtoMsg {
    typeUrl: "/cosmos.staking.v1beta1.MsgEnableTokenizeSharesResponse";
    value: Uint8Array;
}
/** MsgEnableTokenizeSharesResponse defines the Msg/EnableTokenizeShares response type. */
export interface MsgEnableTokenizeSharesResponseAmino {
    completion_time?: string;
}
export interface MsgEnableTokenizeSharesResponseAminoMsg {
    type: "cosmos-sdk/MsgEnableTokenizeSharesResponse";
    value: MsgEnableTokenizeSharesResponseAmino;
}
/** MsgEnableTokenizeSharesResponse defines the Msg/EnableTokenizeShares response type. */
export interface MsgEnableTokenizeSharesResponseSDKType {
    completion_time: Date;
}
/**
 * MsgValidatorBond defines a SDK message for performing validator self-bond of delegated coins
 * from a delegator to a validator.
 */
export interface MsgValidatorBond {
    delegatorAddress: string;
    validatorAddress: string;
}
export interface MsgValidatorBondProtoMsg {
    typeUrl: "/cosmos.staking.v1beta1.MsgValidatorBond";
    value: Uint8Array;
}
/**
 * MsgValidatorBond defines a SDK message for performing validator self-bond of delegated coins
 * from a delegator to a validator.
 */
export interface MsgValidatorBondAmino {
    delegator_address?: string;
    validator_address?: string;
}
export interface MsgValidatorBondAminoMsg {
    type: "cosmos-sdk/MsgValidatorBond";
    value: MsgValidatorBondAmino;
}
/**
 * MsgValidatorBond defines a SDK message for performing validator self-bond of delegated coins
 * from a delegator to a validator.
 */
export interface MsgValidatorBondSDKType {
    delegator_address: string;
    validator_address: string;
}
/** MsgValidatorBondResponse defines the Msg/ValidatorBond response type. */
export interface MsgValidatorBondResponse {
}
export interface MsgValidatorBondResponseProtoMsg {
    typeUrl: "/cosmos.staking.v1beta1.MsgValidatorBondResponse";
    value: Uint8Array;
}
/** MsgValidatorBondResponse defines the Msg/ValidatorBond response type. */
export interface MsgValidatorBondResponseAmino {
}
export interface MsgValidatorBondResponseAminoMsg {
    type: "cosmos-sdk/MsgValidatorBondResponse";
    value: MsgValidatorBondResponseAmino;
}
/** MsgValidatorBondResponse defines the Msg/ValidatorBond response type. */
export interface MsgValidatorBondResponseSDKType {
}
export declare const MsgCreateValidator: {
    typeUrl: string;
    encode(message: MsgCreateValidator, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateValidator;
    fromPartial(object: Partial<MsgCreateValidator>): MsgCreateValidator;
    fromAmino(object: MsgCreateValidatorAmino): MsgCreateValidator;
    toAmino(message: MsgCreateValidator): MsgCreateValidatorAmino;
    fromAminoMsg(object: MsgCreateValidatorAminoMsg): MsgCreateValidator;
    toAminoMsg(message: MsgCreateValidator): MsgCreateValidatorAminoMsg;
    fromProtoMsg(message: MsgCreateValidatorProtoMsg): MsgCreateValidator;
    toProto(message: MsgCreateValidator): Uint8Array;
    toProtoMsg(message: MsgCreateValidator): MsgCreateValidatorProtoMsg;
};
export declare const MsgCreateValidatorResponse: {
    typeUrl: string;
    encode(_: MsgCreateValidatorResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateValidatorResponse;
    fromPartial(_: Partial<MsgCreateValidatorResponse>): MsgCreateValidatorResponse;
    fromAmino(_: MsgCreateValidatorResponseAmino): MsgCreateValidatorResponse;
    toAmino(_: MsgCreateValidatorResponse): MsgCreateValidatorResponseAmino;
    fromAminoMsg(object: MsgCreateValidatorResponseAminoMsg): MsgCreateValidatorResponse;
    toAminoMsg(message: MsgCreateValidatorResponse): MsgCreateValidatorResponseAminoMsg;
    fromProtoMsg(message: MsgCreateValidatorResponseProtoMsg): MsgCreateValidatorResponse;
    toProto(message: MsgCreateValidatorResponse): Uint8Array;
    toProtoMsg(message: MsgCreateValidatorResponse): MsgCreateValidatorResponseProtoMsg;
};
export declare const MsgEditValidator: {
    typeUrl: string;
    encode(message: MsgEditValidator, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgEditValidator;
    fromPartial(object: Partial<MsgEditValidator>): MsgEditValidator;
    fromAmino(object: MsgEditValidatorAmino): MsgEditValidator;
    toAmino(message: MsgEditValidator): MsgEditValidatorAmino;
    fromAminoMsg(object: MsgEditValidatorAminoMsg): MsgEditValidator;
    toAminoMsg(message: MsgEditValidator): MsgEditValidatorAminoMsg;
    fromProtoMsg(message: MsgEditValidatorProtoMsg): MsgEditValidator;
    toProto(message: MsgEditValidator): Uint8Array;
    toProtoMsg(message: MsgEditValidator): MsgEditValidatorProtoMsg;
};
export declare const MsgEditValidatorResponse: {
    typeUrl: string;
    encode(_: MsgEditValidatorResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgEditValidatorResponse;
    fromPartial(_: Partial<MsgEditValidatorResponse>): MsgEditValidatorResponse;
    fromAmino(_: MsgEditValidatorResponseAmino): MsgEditValidatorResponse;
    toAmino(_: MsgEditValidatorResponse): MsgEditValidatorResponseAmino;
    fromAminoMsg(object: MsgEditValidatorResponseAminoMsg): MsgEditValidatorResponse;
    toAminoMsg(message: MsgEditValidatorResponse): MsgEditValidatorResponseAminoMsg;
    fromProtoMsg(message: MsgEditValidatorResponseProtoMsg): MsgEditValidatorResponse;
    toProto(message: MsgEditValidatorResponse): Uint8Array;
    toProtoMsg(message: MsgEditValidatorResponse): MsgEditValidatorResponseProtoMsg;
};
export declare const MsgDelegate: {
    typeUrl: string;
    encode(message: MsgDelegate, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgDelegate;
    fromPartial(object: Partial<MsgDelegate>): MsgDelegate;
    fromAmino(object: MsgDelegateAmino): MsgDelegate;
    toAmino(message: MsgDelegate): MsgDelegateAmino;
    fromAminoMsg(object: MsgDelegateAminoMsg): MsgDelegate;
    toAminoMsg(message: MsgDelegate): MsgDelegateAminoMsg;
    fromProtoMsg(message: MsgDelegateProtoMsg): MsgDelegate;
    toProto(message: MsgDelegate): Uint8Array;
    toProtoMsg(message: MsgDelegate): MsgDelegateProtoMsg;
};
export declare const MsgDelegateResponse: {
    typeUrl: string;
    encode(_: MsgDelegateResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgDelegateResponse;
    fromPartial(_: Partial<MsgDelegateResponse>): MsgDelegateResponse;
    fromAmino(_: MsgDelegateResponseAmino): MsgDelegateResponse;
    toAmino(_: MsgDelegateResponse): MsgDelegateResponseAmino;
    fromAminoMsg(object: MsgDelegateResponseAminoMsg): MsgDelegateResponse;
    toAminoMsg(message: MsgDelegateResponse): MsgDelegateResponseAminoMsg;
    fromProtoMsg(message: MsgDelegateResponseProtoMsg): MsgDelegateResponse;
    toProto(message: MsgDelegateResponse): Uint8Array;
    toProtoMsg(message: MsgDelegateResponse): MsgDelegateResponseProtoMsg;
};
export declare const MsgBeginRedelegate: {
    typeUrl: string;
    encode(message: MsgBeginRedelegate, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgBeginRedelegate;
    fromPartial(object: Partial<MsgBeginRedelegate>): MsgBeginRedelegate;
    fromAmino(object: MsgBeginRedelegateAmino): MsgBeginRedelegate;
    toAmino(message: MsgBeginRedelegate): MsgBeginRedelegateAmino;
    fromAminoMsg(object: MsgBeginRedelegateAminoMsg): MsgBeginRedelegate;
    toAminoMsg(message: MsgBeginRedelegate): MsgBeginRedelegateAminoMsg;
    fromProtoMsg(message: MsgBeginRedelegateProtoMsg): MsgBeginRedelegate;
    toProto(message: MsgBeginRedelegate): Uint8Array;
    toProtoMsg(message: MsgBeginRedelegate): MsgBeginRedelegateProtoMsg;
};
export declare const MsgBeginRedelegateResponse: {
    typeUrl: string;
    encode(message: MsgBeginRedelegateResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgBeginRedelegateResponse;
    fromPartial(object: Partial<MsgBeginRedelegateResponse>): MsgBeginRedelegateResponse;
    fromAmino(object: MsgBeginRedelegateResponseAmino): MsgBeginRedelegateResponse;
    toAmino(message: MsgBeginRedelegateResponse): MsgBeginRedelegateResponseAmino;
    fromAminoMsg(object: MsgBeginRedelegateResponseAminoMsg): MsgBeginRedelegateResponse;
    toAminoMsg(message: MsgBeginRedelegateResponse): MsgBeginRedelegateResponseAminoMsg;
    fromProtoMsg(message: MsgBeginRedelegateResponseProtoMsg): MsgBeginRedelegateResponse;
    toProto(message: MsgBeginRedelegateResponse): Uint8Array;
    toProtoMsg(message: MsgBeginRedelegateResponse): MsgBeginRedelegateResponseProtoMsg;
};
export declare const MsgUndelegate: {
    typeUrl: string;
    encode(message: MsgUndelegate, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUndelegate;
    fromPartial(object: Partial<MsgUndelegate>): MsgUndelegate;
    fromAmino(object: MsgUndelegateAmino): MsgUndelegate;
    toAmino(message: MsgUndelegate): MsgUndelegateAmino;
    fromAminoMsg(object: MsgUndelegateAminoMsg): MsgUndelegate;
    toAminoMsg(message: MsgUndelegate): MsgUndelegateAminoMsg;
    fromProtoMsg(message: MsgUndelegateProtoMsg): MsgUndelegate;
    toProto(message: MsgUndelegate): Uint8Array;
    toProtoMsg(message: MsgUndelegate): MsgUndelegateProtoMsg;
};
export declare const MsgUndelegateResponse: {
    typeUrl: string;
    encode(message: MsgUndelegateResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUndelegateResponse;
    fromPartial(object: Partial<MsgUndelegateResponse>): MsgUndelegateResponse;
    fromAmino(object: MsgUndelegateResponseAmino): MsgUndelegateResponse;
    toAmino(message: MsgUndelegateResponse): MsgUndelegateResponseAmino;
    fromAminoMsg(object: MsgUndelegateResponseAminoMsg): MsgUndelegateResponse;
    toAminoMsg(message: MsgUndelegateResponse): MsgUndelegateResponseAminoMsg;
    fromProtoMsg(message: MsgUndelegateResponseProtoMsg): MsgUndelegateResponse;
    toProto(message: MsgUndelegateResponse): Uint8Array;
    toProtoMsg(message: MsgUndelegateResponse): MsgUndelegateResponseProtoMsg;
};
export declare const MsgUnbondValidator: {
    typeUrl: string;
    encode(message: MsgUnbondValidator, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUnbondValidator;
    fromPartial(object: Partial<MsgUnbondValidator>): MsgUnbondValidator;
    fromAmino(object: MsgUnbondValidatorAmino): MsgUnbondValidator;
    toAmino(message: MsgUnbondValidator): MsgUnbondValidatorAmino;
    fromAminoMsg(object: MsgUnbondValidatorAminoMsg): MsgUnbondValidator;
    toAminoMsg(message: MsgUnbondValidator): MsgUnbondValidatorAminoMsg;
    fromProtoMsg(message: MsgUnbondValidatorProtoMsg): MsgUnbondValidator;
    toProto(message: MsgUnbondValidator): Uint8Array;
    toProtoMsg(message: MsgUnbondValidator): MsgUnbondValidatorProtoMsg;
};
export declare const MsgUnbondValidatorResponse: {
    typeUrl: string;
    encode(_: MsgUnbondValidatorResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUnbondValidatorResponse;
    fromPartial(_: Partial<MsgUnbondValidatorResponse>): MsgUnbondValidatorResponse;
    fromAmino(_: MsgUnbondValidatorResponseAmino): MsgUnbondValidatorResponse;
    toAmino(_: MsgUnbondValidatorResponse): MsgUnbondValidatorResponseAmino;
    fromAminoMsg(object: MsgUnbondValidatorResponseAminoMsg): MsgUnbondValidatorResponse;
    toAminoMsg(message: MsgUnbondValidatorResponse): MsgUnbondValidatorResponseAminoMsg;
    fromProtoMsg(message: MsgUnbondValidatorResponseProtoMsg): MsgUnbondValidatorResponse;
    toProto(message: MsgUnbondValidatorResponse): Uint8Array;
    toProtoMsg(message: MsgUnbondValidatorResponse): MsgUnbondValidatorResponseProtoMsg;
};
export declare const MsgCancelUnbondingDelegation: {
    typeUrl: string;
    encode(message: MsgCancelUnbondingDelegation, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgCancelUnbondingDelegation;
    fromPartial(object: Partial<MsgCancelUnbondingDelegation>): MsgCancelUnbondingDelegation;
    fromAmino(object: MsgCancelUnbondingDelegationAmino): MsgCancelUnbondingDelegation;
    toAmino(message: MsgCancelUnbondingDelegation): MsgCancelUnbondingDelegationAmino;
    fromAminoMsg(object: MsgCancelUnbondingDelegationAminoMsg): MsgCancelUnbondingDelegation;
    toAminoMsg(message: MsgCancelUnbondingDelegation): MsgCancelUnbondingDelegationAminoMsg;
    fromProtoMsg(message: MsgCancelUnbondingDelegationProtoMsg): MsgCancelUnbondingDelegation;
    toProto(message: MsgCancelUnbondingDelegation): Uint8Array;
    toProtoMsg(message: MsgCancelUnbondingDelegation): MsgCancelUnbondingDelegationProtoMsg;
};
export declare const MsgCancelUnbondingDelegationResponse: {
    typeUrl: string;
    encode(_: MsgCancelUnbondingDelegationResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgCancelUnbondingDelegationResponse;
    fromPartial(_: Partial<MsgCancelUnbondingDelegationResponse>): MsgCancelUnbondingDelegationResponse;
    fromAmino(_: MsgCancelUnbondingDelegationResponseAmino): MsgCancelUnbondingDelegationResponse;
    toAmino(_: MsgCancelUnbondingDelegationResponse): MsgCancelUnbondingDelegationResponseAmino;
    fromAminoMsg(object: MsgCancelUnbondingDelegationResponseAminoMsg): MsgCancelUnbondingDelegationResponse;
    toAminoMsg(message: MsgCancelUnbondingDelegationResponse): MsgCancelUnbondingDelegationResponseAminoMsg;
    fromProtoMsg(message: MsgCancelUnbondingDelegationResponseProtoMsg): MsgCancelUnbondingDelegationResponse;
    toProto(message: MsgCancelUnbondingDelegationResponse): Uint8Array;
    toProtoMsg(message: MsgCancelUnbondingDelegationResponse): MsgCancelUnbondingDelegationResponseProtoMsg;
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
    toAminoMsg(message: MsgTokenizeSharesResponse): MsgTokenizeSharesResponseAminoMsg;
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
    toAminoMsg(message: MsgRedeemTokensForSharesResponse): MsgRedeemTokensForSharesResponseAminoMsg;
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
    toAminoMsg(message: MsgTransferTokenizeShareRecordResponse): MsgTransferTokenizeShareRecordResponseAminoMsg;
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
    toAminoMsg(message: MsgDisableTokenizeSharesResponse): MsgDisableTokenizeSharesResponseAminoMsg;
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
    toAminoMsg(message: MsgEnableTokenizeSharesResponse): MsgEnableTokenizeSharesResponseAminoMsg;
    fromProtoMsg(message: MsgEnableTokenizeSharesResponseProtoMsg): MsgEnableTokenizeSharesResponse;
    toProto(message: MsgEnableTokenizeSharesResponse): Uint8Array;
    toProtoMsg(message: MsgEnableTokenizeSharesResponse): MsgEnableTokenizeSharesResponseProtoMsg;
};
export declare const MsgValidatorBond: {
    typeUrl: string;
    encode(message: MsgValidatorBond, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgValidatorBond;
    fromPartial(object: Partial<MsgValidatorBond>): MsgValidatorBond;
    fromAmino(object: MsgValidatorBondAmino): MsgValidatorBond;
    toAmino(message: MsgValidatorBond): MsgValidatorBondAmino;
    fromAminoMsg(object: MsgValidatorBondAminoMsg): MsgValidatorBond;
    toAminoMsg(message: MsgValidatorBond): MsgValidatorBondAminoMsg;
    fromProtoMsg(message: MsgValidatorBondProtoMsg): MsgValidatorBond;
    toProto(message: MsgValidatorBond): Uint8Array;
    toProtoMsg(message: MsgValidatorBond): MsgValidatorBondProtoMsg;
};
export declare const MsgValidatorBondResponse: {
    typeUrl: string;
    encode(_: MsgValidatorBondResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgValidatorBondResponse;
    fromPartial(_: Partial<MsgValidatorBondResponse>): MsgValidatorBondResponse;
    fromAmino(_: MsgValidatorBondResponseAmino): MsgValidatorBondResponse;
    toAmino(_: MsgValidatorBondResponse): MsgValidatorBondResponseAmino;
    fromAminoMsg(object: MsgValidatorBondResponseAminoMsg): MsgValidatorBondResponse;
    toAminoMsg(message: MsgValidatorBondResponse): MsgValidatorBondResponseAminoMsg;
    fromProtoMsg(message: MsgValidatorBondResponseProtoMsg): MsgValidatorBondResponse;
    toProto(message: MsgValidatorBondResponse): Uint8Array;
    toProtoMsg(message: MsgValidatorBondResponse): MsgValidatorBondResponseProtoMsg;
};
export declare const Cosmos_cryptoPubKey_InterfaceDecoder: (input: BinaryReader | Uint8Array) => Any;
export declare const Cosmos_cryptoPubKey_FromAmino: (content: AnyAmino) => Any;
export declare const Cosmos_cryptoPubKey_ToAmino: (content: Any) => Pubkey | null;
