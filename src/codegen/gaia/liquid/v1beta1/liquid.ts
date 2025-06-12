import { DecCoin, DecCoinAmino, DecCoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { Decimal } from "../../../decimals";
/**
 * TokenizeShareLockStatus indicates whether the address is able to tokenize
 * shares
 */
export enum TokenizeShareLockStatus {
  /** TOKENIZE_SHARE_LOCK_STATUS_UNSPECIFIED - UNSPECIFIED defines an empty tokenize share lock status */
  TOKENIZE_SHARE_LOCK_STATUS_UNSPECIFIED = 0,
  /** TOKENIZE_SHARE_LOCK_STATUS_LOCKED - LOCKED indicates the account is locked and cannot tokenize shares */
  TOKENIZE_SHARE_LOCK_STATUS_LOCKED = 1,
  /** TOKENIZE_SHARE_LOCK_STATUS_UNLOCKED - UNLOCKED indicates the account is unlocked and can tokenize shares */
  TOKENIZE_SHARE_LOCK_STATUS_UNLOCKED = 2,
  /**
   * TOKENIZE_SHARE_LOCK_STATUS_LOCK_EXPIRING - LOCK_EXPIRING indicates the account is unable to tokenize shares, but
   * will be able to tokenize shortly (after 1 unbonding period)
   */
  TOKENIZE_SHARE_LOCK_STATUS_LOCK_EXPIRING = 3,
  UNRECOGNIZED = -1,
}
export const TokenizeShareLockStatusSDKType = TokenizeShareLockStatus;
export const TokenizeShareLockStatusAmino = TokenizeShareLockStatus;
export function tokenizeShareLockStatusFromJSON(object: any): TokenizeShareLockStatus {
  switch (object) {
    case 0:
    case "TOKENIZE_SHARE_LOCK_STATUS_UNSPECIFIED":
      return TokenizeShareLockStatus.TOKENIZE_SHARE_LOCK_STATUS_UNSPECIFIED;
    case 1:
    case "TOKENIZE_SHARE_LOCK_STATUS_LOCKED":
      return TokenizeShareLockStatus.TOKENIZE_SHARE_LOCK_STATUS_LOCKED;
    case 2:
    case "TOKENIZE_SHARE_LOCK_STATUS_UNLOCKED":
      return TokenizeShareLockStatus.TOKENIZE_SHARE_LOCK_STATUS_UNLOCKED;
    case 3:
    case "TOKENIZE_SHARE_LOCK_STATUS_LOCK_EXPIRING":
      return TokenizeShareLockStatus.TOKENIZE_SHARE_LOCK_STATUS_LOCK_EXPIRING;
    case -1:
    case "UNRECOGNIZED":
    default:
      return TokenizeShareLockStatus.UNRECOGNIZED;
  }
}
export function tokenizeShareLockStatusToJSON(object: TokenizeShareLockStatus): string {
  switch (object) {
    case TokenizeShareLockStatus.TOKENIZE_SHARE_LOCK_STATUS_UNSPECIFIED:
      return "TOKENIZE_SHARE_LOCK_STATUS_UNSPECIFIED";
    case TokenizeShareLockStatus.TOKENIZE_SHARE_LOCK_STATUS_LOCKED:
      return "TOKENIZE_SHARE_LOCK_STATUS_LOCKED";
    case TokenizeShareLockStatus.TOKENIZE_SHARE_LOCK_STATUS_UNLOCKED:
      return "TOKENIZE_SHARE_LOCK_STATUS_UNLOCKED";
    case TokenizeShareLockStatus.TOKENIZE_SHARE_LOCK_STATUS_LOCK_EXPIRING:
      return "TOKENIZE_SHARE_LOCK_STATUS_LOCK_EXPIRING";
    case TokenizeShareLockStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** Params defines the parameters for the x/liquid module. */
export interface Params {
  /**
   * global_liquid_staking_cap represents a cap on the portion of stake that
   * comes from liquid staking providers
   */
  globalLiquidStakingCap: string;
  /**
   * validator_liquid_staking_cap represents a cap on the portion of stake that
   * comes from liquid staking providers for a specific validator
   */
  validatorLiquidStakingCap: string;
}
export interface ParamsProtoMsg {
  typeUrl: "/gaia.liquid.v1beta1.Params";
  value: Uint8Array;
}
/**
 * Params defines the parameters for the x/liquid module.
 * @name ParamsAmino
 * @package gaia.liquid.v1beta1
 * @see proto type: gaia.liquid.v1beta1.Params
 */
export interface ParamsAmino {
  /**
   * global_liquid_staking_cap represents a cap on the portion of stake that
   * comes from liquid staking providers
   */
  global_liquid_staking_cap: string;
  /**
   * validator_liquid_staking_cap represents a cap on the portion of stake that
   * comes from liquid staking providers for a specific validator
   */
  validator_liquid_staking_cap: string;
}
export interface ParamsAminoMsg {
  type: "gaia/x/liquid/Params";
  value: ParamsAmino;
}
/** Params defines the parameters for the x/liquid module. */
export interface ParamsSDKType {
  global_liquid_staking_cap: string;
  validator_liquid_staking_cap: string;
}
/** TokenizeShareRecord represents a tokenized delegation */
export interface TokenizeShareRecord {
  id: bigint;
  owner: string;
  /** module account take the role of delegator */
  moduleAccount: string;
  /** validator delegated to for tokenize share record creation */
  validator: string;
}
export interface TokenizeShareRecordProtoMsg {
  typeUrl: "/gaia.liquid.v1beta1.TokenizeShareRecord";
  value: Uint8Array;
}
/**
 * TokenizeShareRecord represents a tokenized delegation
 * @name TokenizeShareRecordAmino
 * @package gaia.liquid.v1beta1
 * @see proto type: gaia.liquid.v1beta1.TokenizeShareRecord
 */
export interface TokenizeShareRecordAmino {
  id?: string;
  owner?: string;
  /**
   * module account take the role of delegator
   */
  module_account?: string;
  /**
   * validator delegated to for tokenize share record creation
   */
  validator?: string;
}
export interface TokenizeShareRecordAminoMsg {
  type: "/gaia.liquid.v1beta1.TokenizeShareRecord";
  value: TokenizeShareRecordAmino;
}
/** TokenizeShareRecord represents a tokenized delegation */
export interface TokenizeShareRecordSDKType {
  id: bigint;
  owner: string;
  module_account: string;
  validator: string;
}
/**
 * PendingTokenizeShareAuthorizations stores a list of addresses that have their
 * tokenize share enablement in progress
 */
export interface PendingTokenizeShareAuthorizations {
  addresses: string[];
}
export interface PendingTokenizeShareAuthorizationsProtoMsg {
  typeUrl: "/gaia.liquid.v1beta1.PendingTokenizeShareAuthorizations";
  value: Uint8Array;
}
/**
 * PendingTokenizeShareAuthorizations stores a list of addresses that have their
 * tokenize share enablement in progress
 * @name PendingTokenizeShareAuthorizationsAmino
 * @package gaia.liquid.v1beta1
 * @see proto type: gaia.liquid.v1beta1.PendingTokenizeShareAuthorizations
 */
export interface PendingTokenizeShareAuthorizationsAmino {
  addresses?: string[];
}
export interface PendingTokenizeShareAuthorizationsAminoMsg {
  type: "/gaia.liquid.v1beta1.PendingTokenizeShareAuthorizations";
  value: PendingTokenizeShareAuthorizationsAmino;
}
/**
 * PendingTokenizeShareAuthorizations stores a list of addresses that have their
 * tokenize share enablement in progress
 */
export interface PendingTokenizeShareAuthorizationsSDKType {
  addresses: string[];
}
/** TokenizeShareRecordReward represents the properties of tokenize share */
export interface TokenizeShareRecordReward {
  recordId: bigint;
  reward: DecCoin[];
}
export interface TokenizeShareRecordRewardProtoMsg {
  typeUrl: "/gaia.liquid.v1beta1.TokenizeShareRecordReward";
  value: Uint8Array;
}
/**
 * TokenizeShareRecordReward represents the properties of tokenize share
 * @name TokenizeShareRecordRewardAmino
 * @package gaia.liquid.v1beta1
 * @see proto type: gaia.liquid.v1beta1.TokenizeShareRecordReward
 */
export interface TokenizeShareRecordRewardAmino {
  record_id?: string;
  reward?: DecCoinAmino[];
}
export interface TokenizeShareRecordRewardAminoMsg {
  type: "/gaia.liquid.v1beta1.TokenizeShareRecordReward";
  value: TokenizeShareRecordRewardAmino;
}
/** TokenizeShareRecordReward represents the properties of tokenize share */
export interface TokenizeShareRecordRewardSDKType {
  record_id: bigint;
  reward: DecCoinSDKType[];
}
/**
 * LiquidValidator is the storage layout for details about a validator's liquid
 * stake.
 */
export interface LiquidValidator {
  /**
   * operator_address defines the address of the validator's operator; bech
   * encoded in JSON.
   */
  operatorAddress: string;
  /** Number of shares either tokenized or owned by a liquid staking provider */
  liquidShares: string;
}
export interface LiquidValidatorProtoMsg {
  typeUrl: "/gaia.liquid.v1beta1.LiquidValidator";
  value: Uint8Array;
}
/**
 * LiquidValidator is the storage layout for details about a validator's liquid
 * stake.
 * @name LiquidValidatorAmino
 * @package gaia.liquid.v1beta1
 * @see proto type: gaia.liquid.v1beta1.LiquidValidator
 */
export interface LiquidValidatorAmino {
  /**
   * operator_address defines the address of the validator's operator; bech
   * encoded in JSON.
   */
  operator_address?: string;
  /**
   * Number of shares either tokenized or owned by a liquid staking provider
   */
  liquid_shares?: string;
}
export interface LiquidValidatorAminoMsg {
  type: "/gaia.liquid.v1beta1.LiquidValidator";
  value: LiquidValidatorAmino;
}
/**
 * LiquidValidator is the storage layout for details about a validator's liquid
 * stake.
 */
export interface LiquidValidatorSDKType {
  operator_address: string;
  liquid_shares: string;
}
function createBaseParams(): Params {
  return {
    globalLiquidStakingCap: "",
    validatorLiquidStakingCap: ""
  };
}
export const Params = {
  typeUrl: "/gaia.liquid.v1beta1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.globalLiquidStakingCap !== "") {
      writer.uint32(66).string(Decimal.fromUserInput(message.globalLiquidStakingCap, 18).atomics);
    }
    if (message.validatorLiquidStakingCap !== "") {
      writer.uint32(74).string(Decimal.fromUserInput(message.validatorLiquidStakingCap, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 8:
          message.globalLiquidStakingCap = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 9:
          message.validatorLiquidStakingCap = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.globalLiquidStakingCap = object.globalLiquidStakingCap ?? "";
    message.validatorLiquidStakingCap = object.validatorLiquidStakingCap ?? "";
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.global_liquid_staking_cap !== undefined && object.global_liquid_staking_cap !== null) {
      message.globalLiquidStakingCap = object.global_liquid_staking_cap;
    }
    if (object.validator_liquid_staking_cap !== undefined && object.validator_liquid_staking_cap !== null) {
      message.validatorLiquidStakingCap = object.validator_liquid_staking_cap;
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.global_liquid_staking_cap = message.globalLiquidStakingCap ?? "";
    obj.validator_liquid_staking_cap = message.validatorLiquidStakingCap ?? "";
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  toAminoMsg(message: Params): ParamsAminoMsg {
    return {
      type: "gaia/x/liquid/Params",
      value: Params.toAmino(message)
    };
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/gaia.liquid.v1beta1.Params",
      value: Params.encode(message).finish()
    };
  }
};
function createBaseTokenizeShareRecord(): TokenizeShareRecord {
  return {
    id: BigInt(0),
    owner: "",
    moduleAccount: "",
    validator: ""
  };
}
export const TokenizeShareRecord = {
  typeUrl: "/gaia.liquid.v1beta1.TokenizeShareRecord",
  encode(message: TokenizeShareRecord, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    if (message.moduleAccount !== "") {
      writer.uint32(26).string(message.moduleAccount);
    }
    if (message.validator !== "") {
      writer.uint32(34).string(message.validator);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TokenizeShareRecord {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTokenizeShareRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        case 2:
          message.owner = reader.string();
          break;
        case 3:
          message.moduleAccount = reader.string();
          break;
        case 4:
          message.validator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<TokenizeShareRecord>): TokenizeShareRecord {
    const message = createBaseTokenizeShareRecord();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.owner = object.owner ?? "";
    message.moduleAccount = object.moduleAccount ?? "";
    message.validator = object.validator ?? "";
    return message;
  },
  fromAmino(object: TokenizeShareRecordAmino): TokenizeShareRecord {
    const message = createBaseTokenizeShareRecord();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.module_account !== undefined && object.module_account !== null) {
      message.moduleAccount = object.module_account;
    }
    if (object.validator !== undefined && object.validator !== null) {
      message.validator = object.validator;
    }
    return message;
  },
  toAmino(message: TokenizeShareRecord): TokenizeShareRecordAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    obj.owner = message.owner === "" ? undefined : message.owner;
    obj.module_account = message.moduleAccount === "" ? undefined : message.moduleAccount;
    obj.validator = message.validator === "" ? undefined : message.validator;
    return obj;
  },
  fromAminoMsg(object: TokenizeShareRecordAminoMsg): TokenizeShareRecord {
    return TokenizeShareRecord.fromAmino(object.value);
  },
  fromProtoMsg(message: TokenizeShareRecordProtoMsg): TokenizeShareRecord {
    return TokenizeShareRecord.decode(message.value);
  },
  toProto(message: TokenizeShareRecord): Uint8Array {
    return TokenizeShareRecord.encode(message).finish();
  },
  toProtoMsg(message: TokenizeShareRecord): TokenizeShareRecordProtoMsg {
    return {
      typeUrl: "/gaia.liquid.v1beta1.TokenizeShareRecord",
      value: TokenizeShareRecord.encode(message).finish()
    };
  }
};
function createBasePendingTokenizeShareAuthorizations(): PendingTokenizeShareAuthorizations {
  return {
    addresses: []
  };
}
export const PendingTokenizeShareAuthorizations = {
  typeUrl: "/gaia.liquid.v1beta1.PendingTokenizeShareAuthorizations",
  encode(message: PendingTokenizeShareAuthorizations, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.addresses) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PendingTokenizeShareAuthorizations {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePendingTokenizeShareAuthorizations();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.addresses.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<PendingTokenizeShareAuthorizations>): PendingTokenizeShareAuthorizations {
    const message = createBasePendingTokenizeShareAuthorizations();
    message.addresses = object.addresses?.map(e => e) || [];
    return message;
  },
  fromAmino(object: PendingTokenizeShareAuthorizationsAmino): PendingTokenizeShareAuthorizations {
    const message = createBasePendingTokenizeShareAuthorizations();
    message.addresses = object.addresses?.map(e => e) || [];
    return message;
  },
  toAmino(message: PendingTokenizeShareAuthorizations): PendingTokenizeShareAuthorizationsAmino {
    const obj: any = {};
    if (message.addresses) {
      obj.addresses = message.addresses.map(e => e);
    } else {
      obj.addresses = message.addresses;
    }
    return obj;
  },
  fromAminoMsg(object: PendingTokenizeShareAuthorizationsAminoMsg): PendingTokenizeShareAuthorizations {
    return PendingTokenizeShareAuthorizations.fromAmino(object.value);
  },
  fromProtoMsg(message: PendingTokenizeShareAuthorizationsProtoMsg): PendingTokenizeShareAuthorizations {
    return PendingTokenizeShareAuthorizations.decode(message.value);
  },
  toProto(message: PendingTokenizeShareAuthorizations): Uint8Array {
    return PendingTokenizeShareAuthorizations.encode(message).finish();
  },
  toProtoMsg(message: PendingTokenizeShareAuthorizations): PendingTokenizeShareAuthorizationsProtoMsg {
    return {
      typeUrl: "/gaia.liquid.v1beta1.PendingTokenizeShareAuthorizations",
      value: PendingTokenizeShareAuthorizations.encode(message).finish()
    };
  }
};
function createBaseTokenizeShareRecordReward(): TokenizeShareRecordReward {
  return {
    recordId: BigInt(0),
    reward: []
  };
}
export const TokenizeShareRecordReward = {
  typeUrl: "/gaia.liquid.v1beta1.TokenizeShareRecordReward",
  encode(message: TokenizeShareRecordReward, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.recordId !== BigInt(0)) {
      writer.uint32(8).uint64(message.recordId);
    }
    for (const v of message.reward) {
      DecCoin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TokenizeShareRecordReward {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTokenizeShareRecordReward();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.recordId = reader.uint64();
          break;
        case 2:
          message.reward.push(DecCoin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<TokenizeShareRecordReward>): TokenizeShareRecordReward {
    const message = createBaseTokenizeShareRecordReward();
    message.recordId = object.recordId !== undefined && object.recordId !== null ? BigInt(object.recordId.toString()) : BigInt(0);
    message.reward = object.reward?.map(e => DecCoin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: TokenizeShareRecordRewardAmino): TokenizeShareRecordReward {
    const message = createBaseTokenizeShareRecordReward();
    if (object.record_id !== undefined && object.record_id !== null) {
      message.recordId = BigInt(object.record_id);
    }
    message.reward = object.reward?.map(e => DecCoin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: TokenizeShareRecordReward): TokenizeShareRecordRewardAmino {
    const obj: any = {};
    obj.record_id = message.recordId !== BigInt(0) ? message.recordId?.toString() : undefined;
    if (message.reward) {
      obj.reward = message.reward.map(e => e ? DecCoin.toAmino(e) : undefined);
    } else {
      obj.reward = message.reward;
    }
    return obj;
  },
  fromAminoMsg(object: TokenizeShareRecordRewardAminoMsg): TokenizeShareRecordReward {
    return TokenizeShareRecordReward.fromAmino(object.value);
  },
  fromProtoMsg(message: TokenizeShareRecordRewardProtoMsg): TokenizeShareRecordReward {
    return TokenizeShareRecordReward.decode(message.value);
  },
  toProto(message: TokenizeShareRecordReward): Uint8Array {
    return TokenizeShareRecordReward.encode(message).finish();
  },
  toProtoMsg(message: TokenizeShareRecordReward): TokenizeShareRecordRewardProtoMsg {
    return {
      typeUrl: "/gaia.liquid.v1beta1.TokenizeShareRecordReward",
      value: TokenizeShareRecordReward.encode(message).finish()
    };
  }
};
function createBaseLiquidValidator(): LiquidValidator {
  return {
    operatorAddress: "",
    liquidShares: ""
  };
}
export const LiquidValidator = {
  typeUrl: "/gaia.liquid.v1beta1.LiquidValidator",
  encode(message: LiquidValidator, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.operatorAddress !== "") {
      writer.uint32(10).string(message.operatorAddress);
    }
    if (message.liquidShares !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.liquidShares, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): LiquidValidator {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLiquidValidator();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operatorAddress = reader.string();
          break;
        case 3:
          message.liquidShares = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<LiquidValidator>): LiquidValidator {
    const message = createBaseLiquidValidator();
    message.operatorAddress = object.operatorAddress ?? "";
    message.liquidShares = object.liquidShares ?? "";
    return message;
  },
  fromAmino(object: LiquidValidatorAmino): LiquidValidator {
    const message = createBaseLiquidValidator();
    if (object.operator_address !== undefined && object.operator_address !== null) {
      message.operatorAddress = object.operator_address;
    }
    if (object.liquid_shares !== undefined && object.liquid_shares !== null) {
      message.liquidShares = object.liquid_shares;
    }
    return message;
  },
  toAmino(message: LiquidValidator): LiquidValidatorAmino {
    const obj: any = {};
    obj.operator_address = message.operatorAddress === "" ? undefined : message.operatorAddress;
    obj.liquid_shares = message.liquidShares === "" ? undefined : message.liquidShares;
    return obj;
  },
  fromAminoMsg(object: LiquidValidatorAminoMsg): LiquidValidator {
    return LiquidValidator.fromAmino(object.value);
  },
  fromProtoMsg(message: LiquidValidatorProtoMsg): LiquidValidator {
    return LiquidValidator.decode(message.value);
  },
  toProto(message: LiquidValidator): Uint8Array {
    return LiquidValidator.encode(message).finish();
  },
  toProtoMsg(message: LiquidValidator): LiquidValidatorProtoMsg {
    return {
      typeUrl: "/gaia.liquid.v1beta1.LiquidValidator",
      value: LiquidValidator.encode(message).finish()
    };
  }
};