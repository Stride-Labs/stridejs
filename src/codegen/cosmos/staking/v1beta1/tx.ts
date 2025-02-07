import { Description, DescriptionAmino, DescriptionSDKType, CommissionRates, CommissionRatesAmino, CommissionRatesSDKType } from "./staking";
import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { Coin, CoinAmino, CoinSDKType } from "../../base/v1beta1/coin";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { encodePubkey, decodePubkey } from "@cosmjs/proto-signing";
import { Decimal } from "@cosmjs/math";
import { toTimestamp, fromTimestamp } from "../../../helpers";
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
export type MsgCreateValidatorEncoded = Omit<MsgCreateValidator, "pubkey"> & {
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
export interface MsgCreateValidatorResponse {}
export interface MsgCreateValidatorResponseProtoMsg {
  typeUrl: "/cosmos.staking.v1beta1.MsgCreateValidatorResponse";
  value: Uint8Array;
}
/** MsgCreateValidatorResponse defines the Msg/CreateValidator response type. */
export interface MsgCreateValidatorResponseAmino {}
export interface MsgCreateValidatorResponseAminoMsg {
  type: "cosmos-sdk/MsgCreateValidatorResponse";
  value: MsgCreateValidatorResponseAmino;
}
/** MsgCreateValidatorResponse defines the Msg/CreateValidator response type. */
export interface MsgCreateValidatorResponseSDKType {}
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
export interface MsgEditValidatorResponse {}
export interface MsgEditValidatorResponseProtoMsg {
  typeUrl: "/cosmos.staking.v1beta1.MsgEditValidatorResponse";
  value: Uint8Array;
}
/** MsgEditValidatorResponse defines the Msg/EditValidator response type. */
export interface MsgEditValidatorResponseAmino {}
export interface MsgEditValidatorResponseAminoMsg {
  type: "cosmos-sdk/MsgEditValidatorResponse";
  value: MsgEditValidatorResponseAmino;
}
/** MsgEditValidatorResponse defines the Msg/EditValidator response type. */
export interface MsgEditValidatorResponseSDKType {}
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
export interface MsgDelegateResponse {}
export interface MsgDelegateResponseProtoMsg {
  typeUrl: "/cosmos.staking.v1beta1.MsgDelegateResponse";
  value: Uint8Array;
}
/** MsgDelegateResponse defines the Msg/Delegate response type. */
export interface MsgDelegateResponseAmino {}
export interface MsgDelegateResponseAminoMsg {
  type: "cosmos-sdk/MsgDelegateResponse";
  value: MsgDelegateResponseAmino;
}
/** MsgDelegateResponse defines the Msg/Delegate response type. */
export interface MsgDelegateResponseSDKType {}
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
export interface MsgUnbondValidatorResponse {}
export interface MsgUnbondValidatorResponseProtoMsg {
  typeUrl: "/cosmos.staking.v1beta1.MsgUnbondValidatorResponse";
  value: Uint8Array;
}
/** MsgUnbondValidatorResponse defines the Msg/UnbondValidator response type. */
export interface MsgUnbondValidatorResponseAmino {}
export interface MsgUnbondValidatorResponseAminoMsg {
  type: "cosmos-sdk/MsgUnbondValidatorResponse";
  value: MsgUnbondValidatorResponseAmino;
}
/** MsgUnbondValidatorResponse defines the Msg/UnbondValidator response type. */
export interface MsgUnbondValidatorResponseSDKType {}
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
export interface MsgCancelUnbondingDelegationResponse {}
export interface MsgCancelUnbondingDelegationResponseProtoMsg {
  typeUrl: "/cosmos.staking.v1beta1.MsgCancelUnbondingDelegationResponse";
  value: Uint8Array;
}
/**
 * MsgCancelUnbondingDelegationResponse
 * 
 * Since: cosmos-sdk 0.46
 */
export interface MsgCancelUnbondingDelegationResponseAmino {}
export interface MsgCancelUnbondingDelegationResponseAminoMsg {
  type: "cosmos-sdk/MsgCancelUnbondingDelegationResponse";
  value: MsgCancelUnbondingDelegationResponseAmino;
}
/**
 * MsgCancelUnbondingDelegationResponse
 * 
 * Since: cosmos-sdk 0.46
 */
export interface MsgCancelUnbondingDelegationResponseSDKType {}
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
export interface MsgTransferTokenizeShareRecordResponse {}
export interface MsgTransferTokenizeShareRecordResponseProtoMsg {
  typeUrl: "/cosmos.staking.v1beta1.MsgTransferTokenizeShareRecordResponse";
  value: Uint8Array;
}
/** MsgTransferTokenizeShareRecordResponse defines the Msg/MsgTransferTokenizeShareRecord response type. */
export interface MsgTransferTokenizeShareRecordResponseAmino {}
export interface MsgTransferTokenizeShareRecordResponseAminoMsg {
  type: "cosmos-sdk/MsgTransferTokenizeShareRecordResponse";
  value: MsgTransferTokenizeShareRecordResponseAmino;
}
/** MsgTransferTokenizeShareRecordResponse defines the Msg/MsgTransferTokenizeShareRecord response type. */
export interface MsgTransferTokenizeShareRecordResponseSDKType {}
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
export interface MsgDisableTokenizeSharesResponse {}
export interface MsgDisableTokenizeSharesResponseProtoMsg {
  typeUrl: "/cosmos.staking.v1beta1.MsgDisableTokenizeSharesResponse";
  value: Uint8Array;
}
/** MsgDisableTokenizeSharesResponse defines the Msg/DisableTokenizeShares response type. */
export interface MsgDisableTokenizeSharesResponseAmino {}
export interface MsgDisableTokenizeSharesResponseAminoMsg {
  type: "cosmos-sdk/MsgDisableTokenizeSharesResponse";
  value: MsgDisableTokenizeSharesResponseAmino;
}
/** MsgDisableTokenizeSharesResponse defines the Msg/DisableTokenizeShares response type. */
export interface MsgDisableTokenizeSharesResponseSDKType {}
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
export interface MsgValidatorBondResponse {}
export interface MsgValidatorBondResponseProtoMsg {
  typeUrl: "/cosmos.staking.v1beta1.MsgValidatorBondResponse";
  value: Uint8Array;
}
/** MsgValidatorBondResponse defines the Msg/ValidatorBond response type. */
export interface MsgValidatorBondResponseAmino {}
export interface MsgValidatorBondResponseAminoMsg {
  type: "cosmos-sdk/MsgValidatorBondResponse";
  value: MsgValidatorBondResponseAmino;
}
/** MsgValidatorBondResponse defines the Msg/ValidatorBond response type. */
export interface MsgValidatorBondResponseSDKType {}
function createBaseMsgCreateValidator(): MsgCreateValidator {
  return {
    description: Description.fromPartial({}),
    commission: CommissionRates.fromPartial({}),
    minSelfDelegation: "",
    delegatorAddress: "",
    validatorAddress: "",
    pubkey: undefined,
    value: Coin.fromPartial({})
  };
}
export const MsgCreateValidator = {
  typeUrl: "/cosmos.staking.v1beta1.MsgCreateValidator",
  encode(message: MsgCreateValidator, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.description !== undefined) {
      Description.encode(message.description, writer.uint32(10).fork()).ldelim();
    }
    if (message.commission !== undefined) {
      CommissionRates.encode(message.commission, writer.uint32(18).fork()).ldelim();
    }
    if (message.minSelfDelegation !== "") {
      writer.uint32(26).string(message.minSelfDelegation);
    }
    if (message.delegatorAddress !== "") {
      writer.uint32(34).string(message.delegatorAddress);
    }
    if (message.validatorAddress !== "") {
      writer.uint32(42).string(message.validatorAddress);
    }
    if (message.pubkey !== undefined) {
      Any.encode(message.pubkey as Any, writer.uint32(50).fork()).ldelim();
    }
    if (message.value !== undefined) {
      Coin.encode(message.value, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateValidator {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateValidator();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.description = Description.decode(reader, reader.uint32());
          break;
        case 2:
          message.commission = CommissionRates.decode(reader, reader.uint32());
          break;
        case 3:
          message.minSelfDelegation = reader.string();
          break;
        case 4:
          message.delegatorAddress = reader.string();
          break;
        case 5:
          message.validatorAddress = reader.string();
          break;
        case 6:
          message.pubkey = Cosmos_cryptoPubKey_InterfaceDecoder(reader) as Any;
          break;
        case 7:
          message.value = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgCreateValidator>): MsgCreateValidator {
    const message = createBaseMsgCreateValidator();
    message.description = object.description !== undefined && object.description !== null ? Description.fromPartial(object.description) : undefined;
    message.commission = object.commission !== undefined && object.commission !== null ? CommissionRates.fromPartial(object.commission) : undefined;
    message.minSelfDelegation = object.minSelfDelegation ?? "";
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.validatorAddress = object.validatorAddress ?? "";
    message.pubkey = object.pubkey !== undefined && object.pubkey !== null ? Any.fromPartial(object.pubkey) : undefined;
    message.value = object.value !== undefined && object.value !== null ? Coin.fromPartial(object.value) : undefined;
    return message;
  },
  fromAmino(object: MsgCreateValidatorAmino): MsgCreateValidator {
    const message = createBaseMsgCreateValidator();
    if (object.description !== undefined && object.description !== null) {
      message.description = Description.fromAmino(object.description);
    }
    if (object.commission !== undefined && object.commission !== null) {
      message.commission = CommissionRates.fromAmino(object.commission);
    }
    if (object.min_self_delegation !== undefined && object.min_self_delegation !== null) {
      message.minSelfDelegation = object.min_self_delegation;
    }
    if (object.delegator_address !== undefined && object.delegator_address !== null) {
      message.delegatorAddress = object.delegator_address;
    }
    if (object.validator_address !== undefined && object.validator_address !== null) {
      message.validatorAddress = object.validator_address;
    }
    if (object.pubkey !== undefined && object.pubkey !== null) {
      message.pubkey = encodePubkey(object.pubkey);
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Coin.fromAmino(object.value);
    }
    return message;
  },
  toAmino(message: MsgCreateValidator): MsgCreateValidatorAmino {
    const obj: any = {};
    obj.description = message.description ? Description.toAmino(message.description) : undefined;
    obj.commission = message.commission ? CommissionRates.toAmino(message.commission) : undefined;
    obj.min_self_delegation = message.minSelfDelegation === "" ? undefined : message.minSelfDelegation;
    obj.delegator_address = message.delegatorAddress === "" ? undefined : message.delegatorAddress;
    obj.validator_address = message.validatorAddress === "" ? undefined : message.validatorAddress;
    obj.pubkey = message.pubkey ? decodePubkey(message.pubkey) : undefined;
    obj.value = message.value ? Coin.toAmino(message.value) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCreateValidatorAminoMsg): MsgCreateValidator {
    return MsgCreateValidator.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCreateValidator): MsgCreateValidatorAminoMsg {
    return {
      type: "cosmos-sdk/MsgCreateValidator",
      value: MsgCreateValidator.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCreateValidatorProtoMsg): MsgCreateValidator {
    return MsgCreateValidator.decode(message.value);
  },
  toProto(message: MsgCreateValidator): Uint8Array {
    return MsgCreateValidator.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateValidator): MsgCreateValidatorProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.MsgCreateValidator",
      value: MsgCreateValidator.encode(message).finish()
    };
  }
};
function createBaseMsgCreateValidatorResponse(): MsgCreateValidatorResponse {
  return {};
}
export const MsgCreateValidatorResponse = {
  typeUrl: "/cosmos.staking.v1beta1.MsgCreateValidatorResponse",
  encode(_: MsgCreateValidatorResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateValidatorResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateValidatorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<MsgCreateValidatorResponse>): MsgCreateValidatorResponse {
    const message = createBaseMsgCreateValidatorResponse();
    return message;
  },
  fromAmino(_: MsgCreateValidatorResponseAmino): MsgCreateValidatorResponse {
    const message = createBaseMsgCreateValidatorResponse();
    return message;
  },
  toAmino(_: MsgCreateValidatorResponse): MsgCreateValidatorResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCreateValidatorResponseAminoMsg): MsgCreateValidatorResponse {
    return MsgCreateValidatorResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCreateValidatorResponse): MsgCreateValidatorResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgCreateValidatorResponse",
      value: MsgCreateValidatorResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCreateValidatorResponseProtoMsg): MsgCreateValidatorResponse {
    return MsgCreateValidatorResponse.decode(message.value);
  },
  toProto(message: MsgCreateValidatorResponse): Uint8Array {
    return MsgCreateValidatorResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateValidatorResponse): MsgCreateValidatorResponseProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.MsgCreateValidatorResponse",
      value: MsgCreateValidatorResponse.encode(message).finish()
    };
  }
};
function createBaseMsgEditValidator(): MsgEditValidator {
  return {
    description: Description.fromPartial({}),
    validatorAddress: "",
    commissionRate: "",
    minSelfDelegation: ""
  };
}
export const MsgEditValidator = {
  typeUrl: "/cosmos.staking.v1beta1.MsgEditValidator",
  encode(message: MsgEditValidator, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.description !== undefined) {
      Description.encode(message.description, writer.uint32(10).fork()).ldelim();
    }
    if (message.validatorAddress !== "") {
      writer.uint32(18).string(message.validatorAddress);
    }
    if (message.commissionRate !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.commissionRate, 18).atomics);
    }
    if (message.minSelfDelegation !== "") {
      writer.uint32(34).string(message.minSelfDelegation);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgEditValidator {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEditValidator();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.description = Description.decode(reader, reader.uint32());
          break;
        case 2:
          message.validatorAddress = reader.string();
          break;
        case 3:
          message.commissionRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 4:
          message.minSelfDelegation = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgEditValidator>): MsgEditValidator {
    const message = createBaseMsgEditValidator();
    message.description = object.description !== undefined && object.description !== null ? Description.fromPartial(object.description) : undefined;
    message.validatorAddress = object.validatorAddress ?? "";
    message.commissionRate = object.commissionRate ?? "";
    message.minSelfDelegation = object.minSelfDelegation ?? "";
    return message;
  },
  fromAmino(object: MsgEditValidatorAmino): MsgEditValidator {
    const message = createBaseMsgEditValidator();
    if (object.description !== undefined && object.description !== null) {
      message.description = Description.fromAmino(object.description);
    }
    if (object.validator_address !== undefined && object.validator_address !== null) {
      message.validatorAddress = object.validator_address;
    }
    if (object.commission_rate !== undefined && object.commission_rate !== null) {
      message.commissionRate = object.commission_rate;
    }
    if (object.min_self_delegation !== undefined && object.min_self_delegation !== null) {
      message.minSelfDelegation = object.min_self_delegation;
    }
    return message;
  },
  toAmino(message: MsgEditValidator): MsgEditValidatorAmino {
    const obj: any = {};
    obj.description = message.description ? Description.toAmino(message.description) : undefined;
    obj.validator_address = message.validatorAddress === "" ? undefined : message.validatorAddress;
    obj.commission_rate = message.commissionRate === "" ? undefined : message.commissionRate;
    obj.min_self_delegation = message.minSelfDelegation === "" ? undefined : message.minSelfDelegation;
    return obj;
  },
  fromAminoMsg(object: MsgEditValidatorAminoMsg): MsgEditValidator {
    return MsgEditValidator.fromAmino(object.value);
  },
  toAminoMsg(message: MsgEditValidator): MsgEditValidatorAminoMsg {
    return {
      type: "cosmos-sdk/MsgEditValidator",
      value: MsgEditValidator.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgEditValidatorProtoMsg): MsgEditValidator {
    return MsgEditValidator.decode(message.value);
  },
  toProto(message: MsgEditValidator): Uint8Array {
    return MsgEditValidator.encode(message).finish();
  },
  toProtoMsg(message: MsgEditValidator): MsgEditValidatorProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.MsgEditValidator",
      value: MsgEditValidator.encode(message).finish()
    };
  }
};
function createBaseMsgEditValidatorResponse(): MsgEditValidatorResponse {
  return {};
}
export const MsgEditValidatorResponse = {
  typeUrl: "/cosmos.staking.v1beta1.MsgEditValidatorResponse",
  encode(_: MsgEditValidatorResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgEditValidatorResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEditValidatorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<MsgEditValidatorResponse>): MsgEditValidatorResponse {
    const message = createBaseMsgEditValidatorResponse();
    return message;
  },
  fromAmino(_: MsgEditValidatorResponseAmino): MsgEditValidatorResponse {
    const message = createBaseMsgEditValidatorResponse();
    return message;
  },
  toAmino(_: MsgEditValidatorResponse): MsgEditValidatorResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgEditValidatorResponseAminoMsg): MsgEditValidatorResponse {
    return MsgEditValidatorResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgEditValidatorResponse): MsgEditValidatorResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgEditValidatorResponse",
      value: MsgEditValidatorResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgEditValidatorResponseProtoMsg): MsgEditValidatorResponse {
    return MsgEditValidatorResponse.decode(message.value);
  },
  toProto(message: MsgEditValidatorResponse): Uint8Array {
    return MsgEditValidatorResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgEditValidatorResponse): MsgEditValidatorResponseProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.MsgEditValidatorResponse",
      value: MsgEditValidatorResponse.encode(message).finish()
    };
  }
};
function createBaseMsgDelegate(): MsgDelegate {
  return {
    delegatorAddress: "",
    validatorAddress: "",
    amount: Coin.fromPartial({})
  };
}
export const MsgDelegate = {
  typeUrl: "/cosmos.staking.v1beta1.MsgDelegate",
  encode(message: MsgDelegate, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.validatorAddress !== "") {
      writer.uint32(18).string(message.validatorAddress);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDelegate {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDelegate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        case 2:
          message.validatorAddress = reader.string();
          break;
        case 3:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgDelegate>): MsgDelegate {
    const message = createBaseMsgDelegate();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.validatorAddress = object.validatorAddress ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  },
  fromAmino(object: MsgDelegateAmino): MsgDelegate {
    const message = createBaseMsgDelegate();
    if (object.delegator_address !== undefined && object.delegator_address !== null) {
      message.delegatorAddress = object.delegator_address;
    }
    if (object.validator_address !== undefined && object.validator_address !== null) {
      message.validatorAddress = object.validator_address;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    return message;
  },
  toAmino(message: MsgDelegate): MsgDelegateAmino {
    const obj: any = {};
    obj.delegator_address = message.delegatorAddress === "" ? undefined : message.delegatorAddress;
    obj.validator_address = message.validatorAddress === "" ? undefined : message.validatorAddress;
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgDelegateAminoMsg): MsgDelegate {
    return MsgDelegate.fromAmino(object.value);
  },
  toAminoMsg(message: MsgDelegate): MsgDelegateAminoMsg {
    return {
      type: "cosmos-sdk/MsgDelegate",
      value: MsgDelegate.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgDelegateProtoMsg): MsgDelegate {
    return MsgDelegate.decode(message.value);
  },
  toProto(message: MsgDelegate): Uint8Array {
    return MsgDelegate.encode(message).finish();
  },
  toProtoMsg(message: MsgDelegate): MsgDelegateProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.MsgDelegate",
      value: MsgDelegate.encode(message).finish()
    };
  }
};
function createBaseMsgDelegateResponse(): MsgDelegateResponse {
  return {};
}
export const MsgDelegateResponse = {
  typeUrl: "/cosmos.staking.v1beta1.MsgDelegateResponse",
  encode(_: MsgDelegateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDelegateResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDelegateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<MsgDelegateResponse>): MsgDelegateResponse {
    const message = createBaseMsgDelegateResponse();
    return message;
  },
  fromAmino(_: MsgDelegateResponseAmino): MsgDelegateResponse {
    const message = createBaseMsgDelegateResponse();
    return message;
  },
  toAmino(_: MsgDelegateResponse): MsgDelegateResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDelegateResponseAminoMsg): MsgDelegateResponse {
    return MsgDelegateResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgDelegateResponse): MsgDelegateResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgDelegateResponse",
      value: MsgDelegateResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgDelegateResponseProtoMsg): MsgDelegateResponse {
    return MsgDelegateResponse.decode(message.value);
  },
  toProto(message: MsgDelegateResponse): Uint8Array {
    return MsgDelegateResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDelegateResponse): MsgDelegateResponseProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.MsgDelegateResponse",
      value: MsgDelegateResponse.encode(message).finish()
    };
  }
};
function createBaseMsgBeginRedelegate(): MsgBeginRedelegate {
  return {
    delegatorAddress: "",
    validatorSrcAddress: "",
    validatorDstAddress: "",
    amount: Coin.fromPartial({})
  };
}
export const MsgBeginRedelegate = {
  typeUrl: "/cosmos.staking.v1beta1.MsgBeginRedelegate",
  encode(message: MsgBeginRedelegate, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.validatorSrcAddress !== "") {
      writer.uint32(18).string(message.validatorSrcAddress);
    }
    if (message.validatorDstAddress !== "") {
      writer.uint32(26).string(message.validatorDstAddress);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgBeginRedelegate {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBeginRedelegate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        case 2:
          message.validatorSrcAddress = reader.string();
          break;
        case 3:
          message.validatorDstAddress = reader.string();
          break;
        case 4:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgBeginRedelegate>): MsgBeginRedelegate {
    const message = createBaseMsgBeginRedelegate();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.validatorSrcAddress = object.validatorSrcAddress ?? "";
    message.validatorDstAddress = object.validatorDstAddress ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  },
  fromAmino(object: MsgBeginRedelegateAmino): MsgBeginRedelegate {
    const message = createBaseMsgBeginRedelegate();
    if (object.delegator_address !== undefined && object.delegator_address !== null) {
      message.delegatorAddress = object.delegator_address;
    }
    if (object.validator_src_address !== undefined && object.validator_src_address !== null) {
      message.validatorSrcAddress = object.validator_src_address;
    }
    if (object.validator_dst_address !== undefined && object.validator_dst_address !== null) {
      message.validatorDstAddress = object.validator_dst_address;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    return message;
  },
  toAmino(message: MsgBeginRedelegate): MsgBeginRedelegateAmino {
    const obj: any = {};
    obj.delegator_address = message.delegatorAddress === "" ? undefined : message.delegatorAddress;
    obj.validator_src_address = message.validatorSrcAddress === "" ? undefined : message.validatorSrcAddress;
    obj.validator_dst_address = message.validatorDstAddress === "" ? undefined : message.validatorDstAddress;
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgBeginRedelegateAminoMsg): MsgBeginRedelegate {
    return MsgBeginRedelegate.fromAmino(object.value);
  },
  toAminoMsg(message: MsgBeginRedelegate): MsgBeginRedelegateAminoMsg {
    return {
      type: "cosmos-sdk/MsgBeginRedelegate",
      value: MsgBeginRedelegate.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgBeginRedelegateProtoMsg): MsgBeginRedelegate {
    return MsgBeginRedelegate.decode(message.value);
  },
  toProto(message: MsgBeginRedelegate): Uint8Array {
    return MsgBeginRedelegate.encode(message).finish();
  },
  toProtoMsg(message: MsgBeginRedelegate): MsgBeginRedelegateProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.MsgBeginRedelegate",
      value: MsgBeginRedelegate.encode(message).finish()
    };
  }
};
function createBaseMsgBeginRedelegateResponse(): MsgBeginRedelegateResponse {
  return {
    completionTime: new Date()
  };
}
export const MsgBeginRedelegateResponse = {
  typeUrl: "/cosmos.staking.v1beta1.MsgBeginRedelegateResponse",
  encode(message: MsgBeginRedelegateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.completionTime !== undefined) {
      Timestamp.encode(toTimestamp(message.completionTime), writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgBeginRedelegateResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBeginRedelegateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.completionTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgBeginRedelegateResponse>): MsgBeginRedelegateResponse {
    const message = createBaseMsgBeginRedelegateResponse();
    message.completionTime = object.completionTime ?? undefined;
    return message;
  },
  fromAmino(object: MsgBeginRedelegateResponseAmino): MsgBeginRedelegateResponse {
    const message = createBaseMsgBeginRedelegateResponse();
    if (object.completion_time !== undefined && object.completion_time !== null) {
      message.completionTime = fromTimestamp(Timestamp.fromAmino(object.completion_time));
    }
    return message;
  },
  toAmino(message: MsgBeginRedelegateResponse): MsgBeginRedelegateResponseAmino {
    const obj: any = {};
    obj.completion_time = message.completionTime ? Timestamp.toAmino(toTimestamp(message.completionTime)) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgBeginRedelegateResponseAminoMsg): MsgBeginRedelegateResponse {
    return MsgBeginRedelegateResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgBeginRedelegateResponse): MsgBeginRedelegateResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgBeginRedelegateResponse",
      value: MsgBeginRedelegateResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgBeginRedelegateResponseProtoMsg): MsgBeginRedelegateResponse {
    return MsgBeginRedelegateResponse.decode(message.value);
  },
  toProto(message: MsgBeginRedelegateResponse): Uint8Array {
    return MsgBeginRedelegateResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgBeginRedelegateResponse): MsgBeginRedelegateResponseProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.MsgBeginRedelegateResponse",
      value: MsgBeginRedelegateResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUndelegate(): MsgUndelegate {
  return {
    delegatorAddress: "",
    validatorAddress: "",
    amount: Coin.fromPartial({})
  };
}
export const MsgUndelegate = {
  typeUrl: "/cosmos.staking.v1beta1.MsgUndelegate",
  encode(message: MsgUndelegate, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.validatorAddress !== "") {
      writer.uint32(18).string(message.validatorAddress);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUndelegate {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUndelegate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        case 2:
          message.validatorAddress = reader.string();
          break;
        case 3:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUndelegate>): MsgUndelegate {
    const message = createBaseMsgUndelegate();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.validatorAddress = object.validatorAddress ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  },
  fromAmino(object: MsgUndelegateAmino): MsgUndelegate {
    const message = createBaseMsgUndelegate();
    if (object.delegator_address !== undefined && object.delegator_address !== null) {
      message.delegatorAddress = object.delegator_address;
    }
    if (object.validator_address !== undefined && object.validator_address !== null) {
      message.validatorAddress = object.validator_address;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    return message;
  },
  toAmino(message: MsgUndelegate): MsgUndelegateAmino {
    const obj: any = {};
    obj.delegator_address = message.delegatorAddress === "" ? undefined : message.delegatorAddress;
    obj.validator_address = message.validatorAddress === "" ? undefined : message.validatorAddress;
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUndelegateAminoMsg): MsgUndelegate {
    return MsgUndelegate.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUndelegate): MsgUndelegateAminoMsg {
    return {
      type: "cosmos-sdk/MsgUndelegate",
      value: MsgUndelegate.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUndelegateProtoMsg): MsgUndelegate {
    return MsgUndelegate.decode(message.value);
  },
  toProto(message: MsgUndelegate): Uint8Array {
    return MsgUndelegate.encode(message).finish();
  },
  toProtoMsg(message: MsgUndelegate): MsgUndelegateProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.MsgUndelegate",
      value: MsgUndelegate.encode(message).finish()
    };
  }
};
function createBaseMsgUndelegateResponse(): MsgUndelegateResponse {
  return {
    completionTime: new Date()
  };
}
export const MsgUndelegateResponse = {
  typeUrl: "/cosmos.staking.v1beta1.MsgUndelegateResponse",
  encode(message: MsgUndelegateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.completionTime !== undefined) {
      Timestamp.encode(toTimestamp(message.completionTime), writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUndelegateResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUndelegateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.completionTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUndelegateResponse>): MsgUndelegateResponse {
    const message = createBaseMsgUndelegateResponse();
    message.completionTime = object.completionTime ?? undefined;
    return message;
  },
  fromAmino(object: MsgUndelegateResponseAmino): MsgUndelegateResponse {
    const message = createBaseMsgUndelegateResponse();
    if (object.completion_time !== undefined && object.completion_time !== null) {
      message.completionTime = fromTimestamp(Timestamp.fromAmino(object.completion_time));
    }
    return message;
  },
  toAmino(message: MsgUndelegateResponse): MsgUndelegateResponseAmino {
    const obj: any = {};
    obj.completion_time = message.completionTime ? Timestamp.toAmino(toTimestamp(message.completionTime)) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUndelegateResponseAminoMsg): MsgUndelegateResponse {
    return MsgUndelegateResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUndelegateResponse): MsgUndelegateResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgUndelegateResponse",
      value: MsgUndelegateResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUndelegateResponseProtoMsg): MsgUndelegateResponse {
    return MsgUndelegateResponse.decode(message.value);
  },
  toProto(message: MsgUndelegateResponse): Uint8Array {
    return MsgUndelegateResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUndelegateResponse): MsgUndelegateResponseProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.MsgUndelegateResponse",
      value: MsgUndelegateResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUnbondValidator(): MsgUnbondValidator {
  return {
    validatorAddress: ""
  };
}
export const MsgUnbondValidator = {
  typeUrl: "/cosmos.staking.v1beta1.MsgUnbondValidator",
  encode(message: MsgUnbondValidator, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUnbondValidator {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnbondValidator();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUnbondValidator>): MsgUnbondValidator {
    const message = createBaseMsgUnbondValidator();
    message.validatorAddress = object.validatorAddress ?? "";
    return message;
  },
  fromAmino(object: MsgUnbondValidatorAmino): MsgUnbondValidator {
    const message = createBaseMsgUnbondValidator();
    if (object.validator_address !== undefined && object.validator_address !== null) {
      message.validatorAddress = object.validator_address;
    }
    return message;
  },
  toAmino(message: MsgUnbondValidator): MsgUnbondValidatorAmino {
    const obj: any = {};
    obj.validator_address = message.validatorAddress === "" ? undefined : message.validatorAddress;
    return obj;
  },
  fromAminoMsg(object: MsgUnbondValidatorAminoMsg): MsgUnbondValidator {
    return MsgUnbondValidator.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUnbondValidator): MsgUnbondValidatorAminoMsg {
    return {
      type: "cosmos-sdk/MsgUnbondValidator",
      value: MsgUnbondValidator.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUnbondValidatorProtoMsg): MsgUnbondValidator {
    return MsgUnbondValidator.decode(message.value);
  },
  toProto(message: MsgUnbondValidator): Uint8Array {
    return MsgUnbondValidator.encode(message).finish();
  },
  toProtoMsg(message: MsgUnbondValidator): MsgUnbondValidatorProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.MsgUnbondValidator",
      value: MsgUnbondValidator.encode(message).finish()
    };
  }
};
function createBaseMsgUnbondValidatorResponse(): MsgUnbondValidatorResponse {
  return {};
}
export const MsgUnbondValidatorResponse = {
  typeUrl: "/cosmos.staking.v1beta1.MsgUnbondValidatorResponse",
  encode(_: MsgUnbondValidatorResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUnbondValidatorResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnbondValidatorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<MsgUnbondValidatorResponse>): MsgUnbondValidatorResponse {
    const message = createBaseMsgUnbondValidatorResponse();
    return message;
  },
  fromAmino(_: MsgUnbondValidatorResponseAmino): MsgUnbondValidatorResponse {
    const message = createBaseMsgUnbondValidatorResponse();
    return message;
  },
  toAmino(_: MsgUnbondValidatorResponse): MsgUnbondValidatorResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUnbondValidatorResponseAminoMsg): MsgUnbondValidatorResponse {
    return MsgUnbondValidatorResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUnbondValidatorResponse): MsgUnbondValidatorResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgUnbondValidatorResponse",
      value: MsgUnbondValidatorResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUnbondValidatorResponseProtoMsg): MsgUnbondValidatorResponse {
    return MsgUnbondValidatorResponse.decode(message.value);
  },
  toProto(message: MsgUnbondValidatorResponse): Uint8Array {
    return MsgUnbondValidatorResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUnbondValidatorResponse): MsgUnbondValidatorResponseProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.MsgUnbondValidatorResponse",
      value: MsgUnbondValidatorResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCancelUnbondingDelegation(): MsgCancelUnbondingDelegation {
  return {
    delegatorAddress: "",
    validatorAddress: "",
    amount: Coin.fromPartial({}),
    creationHeight: BigInt(0)
  };
}
export const MsgCancelUnbondingDelegation = {
  typeUrl: "/cosmos.staking.v1beta1.MsgCancelUnbondingDelegation",
  encode(message: MsgCancelUnbondingDelegation, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.validatorAddress !== "") {
      writer.uint32(18).string(message.validatorAddress);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }
    if (message.creationHeight !== BigInt(0)) {
      writer.uint32(32).int64(message.creationHeight);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCancelUnbondingDelegation {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelUnbondingDelegation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        case 2:
          message.validatorAddress = reader.string();
          break;
        case 3:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.creationHeight = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgCancelUnbondingDelegation>): MsgCancelUnbondingDelegation {
    const message = createBaseMsgCancelUnbondingDelegation();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.validatorAddress = object.validatorAddress ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    message.creationHeight = object.creationHeight !== undefined && object.creationHeight !== null ? BigInt(object.creationHeight.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgCancelUnbondingDelegationAmino): MsgCancelUnbondingDelegation {
    const message = createBaseMsgCancelUnbondingDelegation();
    if (object.delegator_address !== undefined && object.delegator_address !== null) {
      message.delegatorAddress = object.delegator_address;
    }
    if (object.validator_address !== undefined && object.validator_address !== null) {
      message.validatorAddress = object.validator_address;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    if (object.creation_height !== undefined && object.creation_height !== null) {
      message.creationHeight = BigInt(object.creation_height);
    }
    return message;
  },
  toAmino(message: MsgCancelUnbondingDelegation): MsgCancelUnbondingDelegationAmino {
    const obj: any = {};
    obj.delegator_address = message.delegatorAddress === "" ? undefined : message.delegatorAddress;
    obj.validator_address = message.validatorAddress === "" ? undefined : message.validatorAddress;
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    obj.creation_height = message.creationHeight !== BigInt(0) ? message.creationHeight?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCancelUnbondingDelegationAminoMsg): MsgCancelUnbondingDelegation {
    return MsgCancelUnbondingDelegation.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCancelUnbondingDelegation): MsgCancelUnbondingDelegationAminoMsg {
    return {
      type: "cosmos-sdk/MsgCancelUnbondingDelegation",
      value: MsgCancelUnbondingDelegation.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCancelUnbondingDelegationProtoMsg): MsgCancelUnbondingDelegation {
    return MsgCancelUnbondingDelegation.decode(message.value);
  },
  toProto(message: MsgCancelUnbondingDelegation): Uint8Array {
    return MsgCancelUnbondingDelegation.encode(message).finish();
  },
  toProtoMsg(message: MsgCancelUnbondingDelegation): MsgCancelUnbondingDelegationProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.MsgCancelUnbondingDelegation",
      value: MsgCancelUnbondingDelegation.encode(message).finish()
    };
  }
};
function createBaseMsgCancelUnbondingDelegationResponse(): MsgCancelUnbondingDelegationResponse {
  return {};
}
export const MsgCancelUnbondingDelegationResponse = {
  typeUrl: "/cosmos.staking.v1beta1.MsgCancelUnbondingDelegationResponse",
  encode(_: MsgCancelUnbondingDelegationResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCancelUnbondingDelegationResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelUnbondingDelegationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<MsgCancelUnbondingDelegationResponse>): MsgCancelUnbondingDelegationResponse {
    const message = createBaseMsgCancelUnbondingDelegationResponse();
    return message;
  },
  fromAmino(_: MsgCancelUnbondingDelegationResponseAmino): MsgCancelUnbondingDelegationResponse {
    const message = createBaseMsgCancelUnbondingDelegationResponse();
    return message;
  },
  toAmino(_: MsgCancelUnbondingDelegationResponse): MsgCancelUnbondingDelegationResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCancelUnbondingDelegationResponseAminoMsg): MsgCancelUnbondingDelegationResponse {
    return MsgCancelUnbondingDelegationResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCancelUnbondingDelegationResponse): MsgCancelUnbondingDelegationResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgCancelUnbondingDelegationResponse",
      value: MsgCancelUnbondingDelegationResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCancelUnbondingDelegationResponseProtoMsg): MsgCancelUnbondingDelegationResponse {
    return MsgCancelUnbondingDelegationResponse.decode(message.value);
  },
  toProto(message: MsgCancelUnbondingDelegationResponse): Uint8Array {
    return MsgCancelUnbondingDelegationResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCancelUnbondingDelegationResponse): MsgCancelUnbondingDelegationResponseProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.MsgCancelUnbondingDelegationResponse",
      value: MsgCancelUnbondingDelegationResponse.encode(message).finish()
    };
  }
};
function createBaseMsgTokenizeShares(): MsgTokenizeShares {
  return {
    delegatorAddress: "",
    validatorAddress: "",
    amount: Coin.fromPartial({}),
    tokenizedShareOwner: ""
  };
}
export const MsgTokenizeShares = {
  typeUrl: "/cosmos.staking.v1beta1.MsgTokenizeShares",
  encode(message: MsgTokenizeShares, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.validatorAddress !== "") {
      writer.uint32(18).string(message.validatorAddress);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }
    if (message.tokenizedShareOwner !== "") {
      writer.uint32(34).string(message.tokenizedShareOwner);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgTokenizeShares {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTokenizeShares();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        case 2:
          message.validatorAddress = reader.string();
          break;
        case 3:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.tokenizedShareOwner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgTokenizeShares>): MsgTokenizeShares {
    const message = createBaseMsgTokenizeShares();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.validatorAddress = object.validatorAddress ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    message.tokenizedShareOwner = object.tokenizedShareOwner ?? "";
    return message;
  },
  fromAmino(object: MsgTokenizeSharesAmino): MsgTokenizeShares {
    const message = createBaseMsgTokenizeShares();
    if (object.delegator_address !== undefined && object.delegator_address !== null) {
      message.delegatorAddress = object.delegator_address;
    }
    if (object.validator_address !== undefined && object.validator_address !== null) {
      message.validatorAddress = object.validator_address;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    if (object.tokenized_share_owner !== undefined && object.tokenized_share_owner !== null) {
      message.tokenizedShareOwner = object.tokenized_share_owner;
    }
    return message;
  },
  toAmino(message: MsgTokenizeShares): MsgTokenizeSharesAmino {
    const obj: any = {};
    obj.delegator_address = message.delegatorAddress === "" ? undefined : message.delegatorAddress;
    obj.validator_address = message.validatorAddress === "" ? undefined : message.validatorAddress;
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    obj.tokenized_share_owner = message.tokenizedShareOwner === "" ? undefined : message.tokenizedShareOwner;
    return obj;
  },
  fromAminoMsg(object: MsgTokenizeSharesAminoMsg): MsgTokenizeShares {
    return MsgTokenizeShares.fromAmino(object.value);
  },
  toAminoMsg(message: MsgTokenizeShares): MsgTokenizeSharesAminoMsg {
    return {
      type: "cosmos-sdk/MsgTokenizeShares",
      value: MsgTokenizeShares.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgTokenizeSharesProtoMsg): MsgTokenizeShares {
    return MsgTokenizeShares.decode(message.value);
  },
  toProto(message: MsgTokenizeShares): Uint8Array {
    return MsgTokenizeShares.encode(message).finish();
  },
  toProtoMsg(message: MsgTokenizeShares): MsgTokenizeSharesProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.MsgTokenizeShares",
      value: MsgTokenizeShares.encode(message).finish()
    };
  }
};
function createBaseMsgTokenizeSharesResponse(): MsgTokenizeSharesResponse {
  return {
    amount: Coin.fromPartial({})
  };
}
export const MsgTokenizeSharesResponse = {
  typeUrl: "/cosmos.staking.v1beta1.MsgTokenizeSharesResponse",
  encode(message: MsgTokenizeSharesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgTokenizeSharesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTokenizeSharesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgTokenizeSharesResponse>): MsgTokenizeSharesResponse {
    const message = createBaseMsgTokenizeSharesResponse();
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  },
  fromAmino(object: MsgTokenizeSharesResponseAmino): MsgTokenizeSharesResponse {
    const message = createBaseMsgTokenizeSharesResponse();
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    return message;
  },
  toAmino(message: MsgTokenizeSharesResponse): MsgTokenizeSharesResponseAmino {
    const obj: any = {};
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgTokenizeSharesResponseAminoMsg): MsgTokenizeSharesResponse {
    return MsgTokenizeSharesResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgTokenizeSharesResponse): MsgTokenizeSharesResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgTokenizeSharesResponse",
      value: MsgTokenizeSharesResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgTokenizeSharesResponseProtoMsg): MsgTokenizeSharesResponse {
    return MsgTokenizeSharesResponse.decode(message.value);
  },
  toProto(message: MsgTokenizeSharesResponse): Uint8Array {
    return MsgTokenizeSharesResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgTokenizeSharesResponse): MsgTokenizeSharesResponseProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.MsgTokenizeSharesResponse",
      value: MsgTokenizeSharesResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRedeemTokensForShares(): MsgRedeemTokensForShares {
  return {
    delegatorAddress: "",
    amount: Coin.fromPartial({})
  };
}
export const MsgRedeemTokensForShares = {
  typeUrl: "/cosmos.staking.v1beta1.MsgRedeemTokensForShares",
  encode(message: MsgRedeemTokensForShares, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRedeemTokensForShares {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRedeemTokensForShares();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        case 2:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgRedeemTokensForShares>): MsgRedeemTokensForShares {
    const message = createBaseMsgRedeemTokensForShares();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  },
  fromAmino(object: MsgRedeemTokensForSharesAmino): MsgRedeemTokensForShares {
    const message = createBaseMsgRedeemTokensForShares();
    if (object.delegator_address !== undefined && object.delegator_address !== null) {
      message.delegatorAddress = object.delegator_address;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    return message;
  },
  toAmino(message: MsgRedeemTokensForShares): MsgRedeemTokensForSharesAmino {
    const obj: any = {};
    obj.delegator_address = message.delegatorAddress === "" ? undefined : message.delegatorAddress;
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgRedeemTokensForSharesAminoMsg): MsgRedeemTokensForShares {
    return MsgRedeemTokensForShares.fromAmino(object.value);
  },
  toAminoMsg(message: MsgRedeemTokensForShares): MsgRedeemTokensForSharesAminoMsg {
    return {
      type: "cosmos-sdk/MsgRedeemTokensForShares",
      value: MsgRedeemTokensForShares.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgRedeemTokensForSharesProtoMsg): MsgRedeemTokensForShares {
    return MsgRedeemTokensForShares.decode(message.value);
  },
  toProto(message: MsgRedeemTokensForShares): Uint8Array {
    return MsgRedeemTokensForShares.encode(message).finish();
  },
  toProtoMsg(message: MsgRedeemTokensForShares): MsgRedeemTokensForSharesProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.MsgRedeemTokensForShares",
      value: MsgRedeemTokensForShares.encode(message).finish()
    };
  }
};
function createBaseMsgRedeemTokensForSharesResponse(): MsgRedeemTokensForSharesResponse {
  return {
    amount: Coin.fromPartial({})
  };
}
export const MsgRedeemTokensForSharesResponse = {
  typeUrl: "/cosmos.staking.v1beta1.MsgRedeemTokensForSharesResponse",
  encode(message: MsgRedeemTokensForSharesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRedeemTokensForSharesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRedeemTokensForSharesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgRedeemTokensForSharesResponse>): MsgRedeemTokensForSharesResponse {
    const message = createBaseMsgRedeemTokensForSharesResponse();
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  },
  fromAmino(object: MsgRedeemTokensForSharesResponseAmino): MsgRedeemTokensForSharesResponse {
    const message = createBaseMsgRedeemTokensForSharesResponse();
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    return message;
  },
  toAmino(message: MsgRedeemTokensForSharesResponse): MsgRedeemTokensForSharesResponseAmino {
    const obj: any = {};
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgRedeemTokensForSharesResponseAminoMsg): MsgRedeemTokensForSharesResponse {
    return MsgRedeemTokensForSharesResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgRedeemTokensForSharesResponse): MsgRedeemTokensForSharesResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgRedeemTokensForSharesResponse",
      value: MsgRedeemTokensForSharesResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgRedeemTokensForSharesResponseProtoMsg): MsgRedeemTokensForSharesResponse {
    return MsgRedeemTokensForSharesResponse.decode(message.value);
  },
  toProto(message: MsgRedeemTokensForSharesResponse): Uint8Array {
    return MsgRedeemTokensForSharesResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRedeemTokensForSharesResponse): MsgRedeemTokensForSharesResponseProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.MsgRedeemTokensForSharesResponse",
      value: MsgRedeemTokensForSharesResponse.encode(message).finish()
    };
  }
};
function createBaseMsgTransferTokenizeShareRecord(): MsgTransferTokenizeShareRecord {
  return {
    tokenizeShareRecordId: BigInt(0),
    sender: "",
    newOwner: ""
  };
}
export const MsgTransferTokenizeShareRecord = {
  typeUrl: "/cosmos.staking.v1beta1.MsgTransferTokenizeShareRecord",
  encode(message: MsgTransferTokenizeShareRecord, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tokenizeShareRecordId !== BigInt(0)) {
      writer.uint32(8).uint64(message.tokenizeShareRecordId);
    }
    if (message.sender !== "") {
      writer.uint32(18).string(message.sender);
    }
    if (message.newOwner !== "") {
      writer.uint32(26).string(message.newOwner);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgTransferTokenizeShareRecord {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTransferTokenizeShareRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokenizeShareRecordId = reader.uint64();
          break;
        case 2:
          message.sender = reader.string();
          break;
        case 3:
          message.newOwner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgTransferTokenizeShareRecord>): MsgTransferTokenizeShareRecord {
    const message = createBaseMsgTransferTokenizeShareRecord();
    message.tokenizeShareRecordId = object.tokenizeShareRecordId !== undefined && object.tokenizeShareRecordId !== null ? BigInt(object.tokenizeShareRecordId.toString()) : BigInt(0);
    message.sender = object.sender ?? "";
    message.newOwner = object.newOwner ?? "";
    return message;
  },
  fromAmino(object: MsgTransferTokenizeShareRecordAmino): MsgTransferTokenizeShareRecord {
    const message = createBaseMsgTransferTokenizeShareRecord();
    if (object.tokenize_share_record_id !== undefined && object.tokenize_share_record_id !== null) {
      message.tokenizeShareRecordId = BigInt(object.tokenize_share_record_id);
    }
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.new_owner !== undefined && object.new_owner !== null) {
      message.newOwner = object.new_owner;
    }
    return message;
  },
  toAmino(message: MsgTransferTokenizeShareRecord): MsgTransferTokenizeShareRecordAmino {
    const obj: any = {};
    obj.tokenize_share_record_id = message.tokenizeShareRecordId !== BigInt(0) ? message.tokenizeShareRecordId?.toString() : undefined;
    obj.sender = message.sender === "" ? undefined : message.sender;
    obj.new_owner = message.newOwner === "" ? undefined : message.newOwner;
    return obj;
  },
  fromAminoMsg(object: MsgTransferTokenizeShareRecordAminoMsg): MsgTransferTokenizeShareRecord {
    return MsgTransferTokenizeShareRecord.fromAmino(object.value);
  },
  toAminoMsg(message: MsgTransferTokenizeShareRecord): MsgTransferTokenizeShareRecordAminoMsg {
    return {
      type: "cosmos-sdk/MsgTransferTokenizeShareRecord",
      value: MsgTransferTokenizeShareRecord.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgTransferTokenizeShareRecordProtoMsg): MsgTransferTokenizeShareRecord {
    return MsgTransferTokenizeShareRecord.decode(message.value);
  },
  toProto(message: MsgTransferTokenizeShareRecord): Uint8Array {
    return MsgTransferTokenizeShareRecord.encode(message).finish();
  },
  toProtoMsg(message: MsgTransferTokenizeShareRecord): MsgTransferTokenizeShareRecordProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.MsgTransferTokenizeShareRecord",
      value: MsgTransferTokenizeShareRecord.encode(message).finish()
    };
  }
};
function createBaseMsgTransferTokenizeShareRecordResponse(): MsgTransferTokenizeShareRecordResponse {
  return {};
}
export const MsgTransferTokenizeShareRecordResponse = {
  typeUrl: "/cosmos.staking.v1beta1.MsgTransferTokenizeShareRecordResponse",
  encode(_: MsgTransferTokenizeShareRecordResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgTransferTokenizeShareRecordResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTransferTokenizeShareRecordResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<MsgTransferTokenizeShareRecordResponse>): MsgTransferTokenizeShareRecordResponse {
    const message = createBaseMsgTransferTokenizeShareRecordResponse();
    return message;
  },
  fromAmino(_: MsgTransferTokenizeShareRecordResponseAmino): MsgTransferTokenizeShareRecordResponse {
    const message = createBaseMsgTransferTokenizeShareRecordResponse();
    return message;
  },
  toAmino(_: MsgTransferTokenizeShareRecordResponse): MsgTransferTokenizeShareRecordResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgTransferTokenizeShareRecordResponseAminoMsg): MsgTransferTokenizeShareRecordResponse {
    return MsgTransferTokenizeShareRecordResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgTransferTokenizeShareRecordResponse): MsgTransferTokenizeShareRecordResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgTransferTokenizeShareRecordResponse",
      value: MsgTransferTokenizeShareRecordResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgTransferTokenizeShareRecordResponseProtoMsg): MsgTransferTokenizeShareRecordResponse {
    return MsgTransferTokenizeShareRecordResponse.decode(message.value);
  },
  toProto(message: MsgTransferTokenizeShareRecordResponse): Uint8Array {
    return MsgTransferTokenizeShareRecordResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgTransferTokenizeShareRecordResponse): MsgTransferTokenizeShareRecordResponseProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.MsgTransferTokenizeShareRecordResponse",
      value: MsgTransferTokenizeShareRecordResponse.encode(message).finish()
    };
  }
};
function createBaseMsgDisableTokenizeShares(): MsgDisableTokenizeShares {
  return {
    delegatorAddress: ""
  };
}
export const MsgDisableTokenizeShares = {
  typeUrl: "/cosmos.staking.v1beta1.MsgDisableTokenizeShares",
  encode(message: MsgDisableTokenizeShares, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDisableTokenizeShares {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDisableTokenizeShares();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgDisableTokenizeShares>): MsgDisableTokenizeShares {
    const message = createBaseMsgDisableTokenizeShares();
    message.delegatorAddress = object.delegatorAddress ?? "";
    return message;
  },
  fromAmino(object: MsgDisableTokenizeSharesAmino): MsgDisableTokenizeShares {
    const message = createBaseMsgDisableTokenizeShares();
    if (object.delegator_address !== undefined && object.delegator_address !== null) {
      message.delegatorAddress = object.delegator_address;
    }
    return message;
  },
  toAmino(message: MsgDisableTokenizeShares): MsgDisableTokenizeSharesAmino {
    const obj: any = {};
    obj.delegator_address = message.delegatorAddress === "" ? undefined : message.delegatorAddress;
    return obj;
  },
  fromAminoMsg(object: MsgDisableTokenizeSharesAminoMsg): MsgDisableTokenizeShares {
    return MsgDisableTokenizeShares.fromAmino(object.value);
  },
  toAminoMsg(message: MsgDisableTokenizeShares): MsgDisableTokenizeSharesAminoMsg {
    return {
      type: "cosmos-sdk/MsgDisableTokenizeShares",
      value: MsgDisableTokenizeShares.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgDisableTokenizeSharesProtoMsg): MsgDisableTokenizeShares {
    return MsgDisableTokenizeShares.decode(message.value);
  },
  toProto(message: MsgDisableTokenizeShares): Uint8Array {
    return MsgDisableTokenizeShares.encode(message).finish();
  },
  toProtoMsg(message: MsgDisableTokenizeShares): MsgDisableTokenizeSharesProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.MsgDisableTokenizeShares",
      value: MsgDisableTokenizeShares.encode(message).finish()
    };
  }
};
function createBaseMsgDisableTokenizeSharesResponse(): MsgDisableTokenizeSharesResponse {
  return {};
}
export const MsgDisableTokenizeSharesResponse = {
  typeUrl: "/cosmos.staking.v1beta1.MsgDisableTokenizeSharesResponse",
  encode(_: MsgDisableTokenizeSharesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDisableTokenizeSharesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDisableTokenizeSharesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<MsgDisableTokenizeSharesResponse>): MsgDisableTokenizeSharesResponse {
    const message = createBaseMsgDisableTokenizeSharesResponse();
    return message;
  },
  fromAmino(_: MsgDisableTokenizeSharesResponseAmino): MsgDisableTokenizeSharesResponse {
    const message = createBaseMsgDisableTokenizeSharesResponse();
    return message;
  },
  toAmino(_: MsgDisableTokenizeSharesResponse): MsgDisableTokenizeSharesResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDisableTokenizeSharesResponseAminoMsg): MsgDisableTokenizeSharesResponse {
    return MsgDisableTokenizeSharesResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgDisableTokenizeSharesResponse): MsgDisableTokenizeSharesResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgDisableTokenizeSharesResponse",
      value: MsgDisableTokenizeSharesResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgDisableTokenizeSharesResponseProtoMsg): MsgDisableTokenizeSharesResponse {
    return MsgDisableTokenizeSharesResponse.decode(message.value);
  },
  toProto(message: MsgDisableTokenizeSharesResponse): Uint8Array {
    return MsgDisableTokenizeSharesResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDisableTokenizeSharesResponse): MsgDisableTokenizeSharesResponseProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.MsgDisableTokenizeSharesResponse",
      value: MsgDisableTokenizeSharesResponse.encode(message).finish()
    };
  }
};
function createBaseMsgEnableTokenizeShares(): MsgEnableTokenizeShares {
  return {
    delegatorAddress: ""
  };
}
export const MsgEnableTokenizeShares = {
  typeUrl: "/cosmos.staking.v1beta1.MsgEnableTokenizeShares",
  encode(message: MsgEnableTokenizeShares, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgEnableTokenizeShares {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEnableTokenizeShares();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgEnableTokenizeShares>): MsgEnableTokenizeShares {
    const message = createBaseMsgEnableTokenizeShares();
    message.delegatorAddress = object.delegatorAddress ?? "";
    return message;
  },
  fromAmino(object: MsgEnableTokenizeSharesAmino): MsgEnableTokenizeShares {
    const message = createBaseMsgEnableTokenizeShares();
    if (object.delegator_address !== undefined && object.delegator_address !== null) {
      message.delegatorAddress = object.delegator_address;
    }
    return message;
  },
  toAmino(message: MsgEnableTokenizeShares): MsgEnableTokenizeSharesAmino {
    const obj: any = {};
    obj.delegator_address = message.delegatorAddress === "" ? undefined : message.delegatorAddress;
    return obj;
  },
  fromAminoMsg(object: MsgEnableTokenizeSharesAminoMsg): MsgEnableTokenizeShares {
    return MsgEnableTokenizeShares.fromAmino(object.value);
  },
  toAminoMsg(message: MsgEnableTokenizeShares): MsgEnableTokenizeSharesAminoMsg {
    return {
      type: "cosmos-sdk/MsgEnableTokenizeShares",
      value: MsgEnableTokenizeShares.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgEnableTokenizeSharesProtoMsg): MsgEnableTokenizeShares {
    return MsgEnableTokenizeShares.decode(message.value);
  },
  toProto(message: MsgEnableTokenizeShares): Uint8Array {
    return MsgEnableTokenizeShares.encode(message).finish();
  },
  toProtoMsg(message: MsgEnableTokenizeShares): MsgEnableTokenizeSharesProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.MsgEnableTokenizeShares",
      value: MsgEnableTokenizeShares.encode(message).finish()
    };
  }
};
function createBaseMsgEnableTokenizeSharesResponse(): MsgEnableTokenizeSharesResponse {
  return {
    completionTime: new Date()
  };
}
export const MsgEnableTokenizeSharesResponse = {
  typeUrl: "/cosmos.staking.v1beta1.MsgEnableTokenizeSharesResponse",
  encode(message: MsgEnableTokenizeSharesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.completionTime !== undefined) {
      Timestamp.encode(toTimestamp(message.completionTime), writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgEnableTokenizeSharesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEnableTokenizeSharesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.completionTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgEnableTokenizeSharesResponse>): MsgEnableTokenizeSharesResponse {
    const message = createBaseMsgEnableTokenizeSharesResponse();
    message.completionTime = object.completionTime ?? undefined;
    return message;
  },
  fromAmino(object: MsgEnableTokenizeSharesResponseAmino): MsgEnableTokenizeSharesResponse {
    const message = createBaseMsgEnableTokenizeSharesResponse();
    if (object.completion_time !== undefined && object.completion_time !== null) {
      message.completionTime = fromTimestamp(Timestamp.fromAmino(object.completion_time));
    }
    return message;
  },
  toAmino(message: MsgEnableTokenizeSharesResponse): MsgEnableTokenizeSharesResponseAmino {
    const obj: any = {};
    obj.completion_time = message.completionTime ? Timestamp.toAmino(toTimestamp(message.completionTime)) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgEnableTokenizeSharesResponseAminoMsg): MsgEnableTokenizeSharesResponse {
    return MsgEnableTokenizeSharesResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgEnableTokenizeSharesResponse): MsgEnableTokenizeSharesResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgEnableTokenizeSharesResponse",
      value: MsgEnableTokenizeSharesResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgEnableTokenizeSharesResponseProtoMsg): MsgEnableTokenizeSharesResponse {
    return MsgEnableTokenizeSharesResponse.decode(message.value);
  },
  toProto(message: MsgEnableTokenizeSharesResponse): Uint8Array {
    return MsgEnableTokenizeSharesResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgEnableTokenizeSharesResponse): MsgEnableTokenizeSharesResponseProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.MsgEnableTokenizeSharesResponse",
      value: MsgEnableTokenizeSharesResponse.encode(message).finish()
    };
  }
};
function createBaseMsgValidatorBond(): MsgValidatorBond {
  return {
    delegatorAddress: "",
    validatorAddress: ""
  };
}
export const MsgValidatorBond = {
  typeUrl: "/cosmos.staking.v1beta1.MsgValidatorBond",
  encode(message: MsgValidatorBond, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.validatorAddress !== "") {
      writer.uint32(18).string(message.validatorAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgValidatorBond {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgValidatorBond();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        case 2:
          message.validatorAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgValidatorBond>): MsgValidatorBond {
    const message = createBaseMsgValidatorBond();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.validatorAddress = object.validatorAddress ?? "";
    return message;
  },
  fromAmino(object: MsgValidatorBondAmino): MsgValidatorBond {
    const message = createBaseMsgValidatorBond();
    if (object.delegator_address !== undefined && object.delegator_address !== null) {
      message.delegatorAddress = object.delegator_address;
    }
    if (object.validator_address !== undefined && object.validator_address !== null) {
      message.validatorAddress = object.validator_address;
    }
    return message;
  },
  toAmino(message: MsgValidatorBond): MsgValidatorBondAmino {
    const obj: any = {};
    obj.delegator_address = message.delegatorAddress === "" ? undefined : message.delegatorAddress;
    obj.validator_address = message.validatorAddress === "" ? undefined : message.validatorAddress;
    return obj;
  },
  fromAminoMsg(object: MsgValidatorBondAminoMsg): MsgValidatorBond {
    return MsgValidatorBond.fromAmino(object.value);
  },
  toAminoMsg(message: MsgValidatorBond): MsgValidatorBondAminoMsg {
    return {
      type: "cosmos-sdk/MsgValidatorBond",
      value: MsgValidatorBond.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgValidatorBondProtoMsg): MsgValidatorBond {
    return MsgValidatorBond.decode(message.value);
  },
  toProto(message: MsgValidatorBond): Uint8Array {
    return MsgValidatorBond.encode(message).finish();
  },
  toProtoMsg(message: MsgValidatorBond): MsgValidatorBondProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.MsgValidatorBond",
      value: MsgValidatorBond.encode(message).finish()
    };
  }
};
function createBaseMsgValidatorBondResponse(): MsgValidatorBondResponse {
  return {};
}
export const MsgValidatorBondResponse = {
  typeUrl: "/cosmos.staking.v1beta1.MsgValidatorBondResponse",
  encode(_: MsgValidatorBondResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgValidatorBondResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgValidatorBondResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<MsgValidatorBondResponse>): MsgValidatorBondResponse {
    const message = createBaseMsgValidatorBondResponse();
    return message;
  },
  fromAmino(_: MsgValidatorBondResponseAmino): MsgValidatorBondResponse {
    const message = createBaseMsgValidatorBondResponse();
    return message;
  },
  toAmino(_: MsgValidatorBondResponse): MsgValidatorBondResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgValidatorBondResponseAminoMsg): MsgValidatorBondResponse {
    return MsgValidatorBondResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgValidatorBondResponse): MsgValidatorBondResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgValidatorBondResponse",
      value: MsgValidatorBondResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgValidatorBondResponseProtoMsg): MsgValidatorBondResponse {
    return MsgValidatorBondResponse.decode(message.value);
  },
  toProto(message: MsgValidatorBondResponse): Uint8Array {
    return MsgValidatorBondResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgValidatorBondResponse): MsgValidatorBondResponseProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.MsgValidatorBondResponse",
      value: MsgValidatorBondResponse.encode(message).finish()
    };
  }
};
export const Cosmos_cryptoPubKey_InterfaceDecoder = (input: BinaryReader | Uint8Array): Any => {
  const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
  const data = Any.decode(reader, reader.uint32());
  switch (data.typeUrl) {
    default:
      return data;
  }
};
export const Cosmos_cryptoPubKey_FromAmino = (content: AnyAmino): Any => {
  return encodePubkey(content);
};
export const Cosmos_cryptoPubKey_ToAmino = (content: Any): Pubkey | null => {
  return decodePubkey(content);
};