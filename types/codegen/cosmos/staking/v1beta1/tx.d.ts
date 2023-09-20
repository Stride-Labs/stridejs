import { Description, DescriptionSDKType, CommissionRates, CommissionRatesSDKType } from "./staking";
import { Any, AnySDKType } from "../../../google/protobuf/any";
import { Coin, CoinSDKType } from "../../base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
/** MsgCreateValidator defines a SDK message for creating a new validator. */
export interface MsgCreateValidator {
    description: Description;
    commission: CommissionRates;
    /** Deprecated: This field has been deprecated with LSM in favor of the validator bond */
    /** @deprecated */
    minSelfDelegation: string;
    delegatorAddress: string;
    validatorAddress: string;
    pubkey: Any;
    value: Coin;
}
/** MsgCreateValidator defines a SDK message for creating a new validator. */
export interface MsgCreateValidatorSDKType {
    description: DescriptionSDKType;
    commission: CommissionRatesSDKType;
    /** Deprecated: This field has been deprecated with LSM in favor of the validator bond */
    /** @deprecated */
    min_self_delegation: string;
    delegator_address: string;
    validator_address: string;
    pubkey: AnySDKType;
    value: CoinSDKType;
}
/** MsgCreateValidatorResponse defines the Msg/CreateValidator response type. */
export interface MsgCreateValidatorResponse {
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
/** MsgEditValidator defines a SDK message for editing an existing validator. */
export interface MsgEditValidatorSDKType {
    description: DescriptionSDKType;
    validator_address: string;
    /**
     * We pass a reference to the new commission rate and min self delegation as
     * it's not mandatory to update. If not updated, the deserialized rate will be
     * zero with no way to distinguish if an update was intended.
     * REF: #2373
     */
    commission_rate: string;
    /** @deprecated */
    min_self_delegation: string;
}
/** MsgEditValidatorResponse defines the Msg/EditValidator response type. */
export interface MsgEditValidatorResponse {
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
    creationHeight: Long;
}
/**
 * MsgCancelUnbondingDelegation defines the SDK message for performing a cancel unbonding delegation for delegator
 *
 * Since: cosmos-sdk 0.46
 */
export interface MsgCancelUnbondingDelegationSDKType {
    delegator_address: string;
    validator_address: string;
    /** amount is always less than or equal to unbonding delegation entry balance */
    amount: CoinSDKType;
    /** creation_height is the height which the unbonding took place. */
    creation_height: Long;
}
/**
 * MsgCancelUnbondingDelegationResponse
 *
 * Since: cosmos-sdk 0.46
 */
export interface MsgCancelUnbondingDelegationResponse {
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
/** MsgTokenizeSharesResponse defines the Msg/MsgTokenizeShares response type. */
export interface MsgTokenizeSharesResponseSDKType {
    amount: CoinSDKType;
}
/** MsgRedeemTokensForShares redeems a tokenized share back into a native delegation */
export interface MsgRedeemTokensForShares {
    delegatorAddress: string;
    amount: Coin;
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
/** MsgRedeemTokensForSharesResponse defines the Msg/MsgRedeemTokensForShares response type. */
export interface MsgRedeemTokensForSharesResponseSDKType {
    amount: CoinSDKType;
}
/** MsgTransferTokenizeShareRecord transfer a tokenize share record */
export interface MsgTransferTokenizeShareRecord {
    tokenizeShareRecordId: Long;
    sender: string;
    newOwner: string;
}
/** MsgTransferTokenizeShareRecord transfer a tokenize share record */
export interface MsgTransferTokenizeShareRecordSDKType {
    tokenize_share_record_id: Long;
    sender: string;
    new_owner: string;
}
/** MsgTransferTokenizeShareRecordResponse defines the Msg/MsgTransferTokenizeShareRecord response type. */
export interface MsgTransferTokenizeShareRecordResponse {
}
/** MsgTransferTokenizeShareRecordResponse defines the Msg/MsgTransferTokenizeShareRecord response type. */
export interface MsgTransferTokenizeShareRecordResponseSDKType {
}
/** MsgDisableTokenizeShares prevents the tokenization of shares for a given address */
export interface MsgDisableTokenizeShares {
    delegatorAddress: string;
}
/** MsgDisableTokenizeShares prevents the tokenization of shares for a given address */
export interface MsgDisableTokenizeSharesSDKType {
    delegator_address: string;
}
/** MsgDisableTokenizeSharesResponse defines the Msg/DisableTokenizeShares response type. */
export interface MsgDisableTokenizeSharesResponse {
}
/** MsgDisableTokenizeSharesResponse defines the Msg/DisableTokenizeShares response type. */
export interface MsgDisableTokenizeSharesResponseSDKType {
}
/** MsgEnableTokenizeShares re-enables tokenization of shares for a given address */
export interface MsgEnableTokenizeShares {
    delegatorAddress: string;
}
/** MsgEnableTokenizeShares re-enables tokenization of shares for a given address */
export interface MsgEnableTokenizeSharesSDKType {
    delegator_address: string;
}
/** MsgEnableTokenizeSharesResponse defines the Msg/EnableTokenizeShares response type. */
export interface MsgEnableTokenizeSharesResponse {
    completionTime: Date;
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
/** MsgValidatorBondResponse defines the Msg/ValidatorBond response type. */
export interface MsgValidatorBondResponseSDKType {
}
export declare const MsgCreateValidator: {
    encode(message: MsgCreateValidator, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateValidator;
    fromPartial(object: DeepPartial<MsgCreateValidator>): MsgCreateValidator;
};
export declare const MsgCreateValidatorResponse: {
    encode(_: MsgCreateValidatorResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateValidatorResponse;
    fromPartial(_: DeepPartial<MsgCreateValidatorResponse>): MsgCreateValidatorResponse;
};
export declare const MsgEditValidator: {
    encode(message: MsgEditValidator, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgEditValidator;
    fromPartial(object: DeepPartial<MsgEditValidator>): MsgEditValidator;
};
export declare const MsgEditValidatorResponse: {
    encode(_: MsgEditValidatorResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgEditValidatorResponse;
    fromPartial(_: DeepPartial<MsgEditValidatorResponse>): MsgEditValidatorResponse;
};
export declare const MsgDelegate: {
    encode(message: MsgDelegate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDelegate;
    fromPartial(object: DeepPartial<MsgDelegate>): MsgDelegate;
};
export declare const MsgDelegateResponse: {
    encode(_: MsgDelegateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDelegateResponse;
    fromPartial(_: DeepPartial<MsgDelegateResponse>): MsgDelegateResponse;
};
export declare const MsgBeginRedelegate: {
    encode(message: MsgBeginRedelegate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgBeginRedelegate;
    fromPartial(object: DeepPartial<MsgBeginRedelegate>): MsgBeginRedelegate;
};
export declare const MsgBeginRedelegateResponse: {
    encode(message: MsgBeginRedelegateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgBeginRedelegateResponse;
    fromPartial(object: DeepPartial<MsgBeginRedelegateResponse>): MsgBeginRedelegateResponse;
};
export declare const MsgUndelegate: {
    encode(message: MsgUndelegate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUndelegate;
    fromPartial(object: DeepPartial<MsgUndelegate>): MsgUndelegate;
};
export declare const MsgUndelegateResponse: {
    encode(message: MsgUndelegateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUndelegateResponse;
    fromPartial(object: DeepPartial<MsgUndelegateResponse>): MsgUndelegateResponse;
};
export declare const MsgUnbondValidator: {
    encode(message: MsgUnbondValidator, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUnbondValidator;
    fromPartial(object: DeepPartial<MsgUnbondValidator>): MsgUnbondValidator;
};
export declare const MsgUnbondValidatorResponse: {
    encode(_: MsgUnbondValidatorResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUnbondValidatorResponse;
    fromPartial(_: DeepPartial<MsgUnbondValidatorResponse>): MsgUnbondValidatorResponse;
};
export declare const MsgCancelUnbondingDelegation: {
    encode(message: MsgCancelUnbondingDelegation, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelUnbondingDelegation;
    fromPartial(object: DeepPartial<MsgCancelUnbondingDelegation>): MsgCancelUnbondingDelegation;
};
export declare const MsgCancelUnbondingDelegationResponse: {
    encode(_: MsgCancelUnbondingDelegationResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelUnbondingDelegationResponse;
    fromPartial(_: DeepPartial<MsgCancelUnbondingDelegationResponse>): MsgCancelUnbondingDelegationResponse;
};
export declare const MsgTokenizeShares: {
    encode(message: MsgTokenizeShares, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgTokenizeShares;
    fromPartial(object: DeepPartial<MsgTokenizeShares>): MsgTokenizeShares;
};
export declare const MsgTokenizeSharesResponse: {
    encode(message: MsgTokenizeSharesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgTokenizeSharesResponse;
    fromPartial(object: DeepPartial<MsgTokenizeSharesResponse>): MsgTokenizeSharesResponse;
};
export declare const MsgRedeemTokensForShares: {
    encode(message: MsgRedeemTokensForShares, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRedeemTokensForShares;
    fromPartial(object: DeepPartial<MsgRedeemTokensForShares>): MsgRedeemTokensForShares;
};
export declare const MsgRedeemTokensForSharesResponse: {
    encode(message: MsgRedeemTokensForSharesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRedeemTokensForSharesResponse;
    fromPartial(object: DeepPartial<MsgRedeemTokensForSharesResponse>): MsgRedeemTokensForSharesResponse;
};
export declare const MsgTransferTokenizeShareRecord: {
    encode(message: MsgTransferTokenizeShareRecord, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgTransferTokenizeShareRecord;
    fromPartial(object: DeepPartial<MsgTransferTokenizeShareRecord>): MsgTransferTokenizeShareRecord;
};
export declare const MsgTransferTokenizeShareRecordResponse: {
    encode(_: MsgTransferTokenizeShareRecordResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgTransferTokenizeShareRecordResponse;
    fromPartial(_: DeepPartial<MsgTransferTokenizeShareRecordResponse>): MsgTransferTokenizeShareRecordResponse;
};
export declare const MsgDisableTokenizeShares: {
    encode(message: MsgDisableTokenizeShares, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDisableTokenizeShares;
    fromPartial(object: DeepPartial<MsgDisableTokenizeShares>): MsgDisableTokenizeShares;
};
export declare const MsgDisableTokenizeSharesResponse: {
    encode(_: MsgDisableTokenizeSharesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDisableTokenizeSharesResponse;
    fromPartial(_: DeepPartial<MsgDisableTokenizeSharesResponse>): MsgDisableTokenizeSharesResponse;
};
export declare const MsgEnableTokenizeShares: {
    encode(message: MsgEnableTokenizeShares, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgEnableTokenizeShares;
    fromPartial(object: DeepPartial<MsgEnableTokenizeShares>): MsgEnableTokenizeShares;
};
export declare const MsgEnableTokenizeSharesResponse: {
    encode(message: MsgEnableTokenizeSharesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgEnableTokenizeSharesResponse;
    fromPartial(object: DeepPartial<MsgEnableTokenizeSharesResponse>): MsgEnableTokenizeSharesResponse;
};
export declare const MsgValidatorBond: {
    encode(message: MsgValidatorBond, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgValidatorBond;
    fromPartial(object: DeepPartial<MsgValidatorBond>): MsgValidatorBond;
};
export declare const MsgValidatorBondResponse: {
    encode(_: MsgValidatorBondResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgValidatorBondResponse;
    fromPartial(_: DeepPartial<MsgValidatorBondResponse>): MsgValidatorBondResponse;
};
