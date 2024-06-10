import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
export enum DepositRecord_Status {
  /** TRANSFER_QUEUE - in transfer queue to be sent to the delegation ICA */
  TRANSFER_QUEUE = 0,

  /** TRANSFER_IN_PROGRESS - transfer in progress (IBC packet sent, ack not received) */
  TRANSFER_IN_PROGRESS = 2,

  /** DELEGATION_QUEUE - in staking queue on delegation ICA */
  DELEGATION_QUEUE = 1,

  /** DELEGATION_IN_PROGRESS - staking in progress (ICA packet sent, ack not received) */
  DELEGATION_IN_PROGRESS = 3,
  UNRECOGNIZED = -1,
}
export enum DepositRecord_StatusSDKType {
  /** TRANSFER_QUEUE - in transfer queue to be sent to the delegation ICA */
  TRANSFER_QUEUE = 0,

  /** TRANSFER_IN_PROGRESS - transfer in progress (IBC packet sent, ack not received) */
  TRANSFER_IN_PROGRESS = 2,

  /** DELEGATION_QUEUE - in staking queue on delegation ICA */
  DELEGATION_QUEUE = 1,

  /** DELEGATION_IN_PROGRESS - staking in progress (ICA packet sent, ack not received) */
  DELEGATION_IN_PROGRESS = 3,
  UNRECOGNIZED = -1,
}
export function depositRecord_StatusFromJSON(object: any): DepositRecord_Status {
  switch (object) {
    case 0:
    case "TRANSFER_QUEUE":
      return DepositRecord_Status.TRANSFER_QUEUE;

    case 2:
    case "TRANSFER_IN_PROGRESS":
      return DepositRecord_Status.TRANSFER_IN_PROGRESS;

    case 1:
    case "DELEGATION_QUEUE":
      return DepositRecord_Status.DELEGATION_QUEUE;

    case 3:
    case "DELEGATION_IN_PROGRESS":
      return DepositRecord_Status.DELEGATION_IN_PROGRESS;

    case -1:
    case "UNRECOGNIZED":
    default:
      return DepositRecord_Status.UNRECOGNIZED;
  }
}
export function depositRecord_StatusToJSON(object: DepositRecord_Status): string {
  switch (object) {
    case DepositRecord_Status.TRANSFER_QUEUE:
      return "TRANSFER_QUEUE";

    case DepositRecord_Status.TRANSFER_IN_PROGRESS:
      return "TRANSFER_IN_PROGRESS";

    case DepositRecord_Status.DELEGATION_QUEUE:
      return "DELEGATION_QUEUE";

    case DepositRecord_Status.DELEGATION_IN_PROGRESS:
      return "DELEGATION_IN_PROGRESS";

    default:
      return "UNKNOWN";
  }
}
export enum DepositRecord_Source {
  STRIDE = 0,
  WITHDRAWAL_ICA = 1,
  UNRECOGNIZED = -1,
}
export enum DepositRecord_SourceSDKType {
  STRIDE = 0,
  WITHDRAWAL_ICA = 1,
  UNRECOGNIZED = -1,
}
export function depositRecord_SourceFromJSON(object: any): DepositRecord_Source {
  switch (object) {
    case 0:
    case "STRIDE":
      return DepositRecord_Source.STRIDE;

    case 1:
    case "WITHDRAWAL_ICA":
      return DepositRecord_Source.WITHDRAWAL_ICA;

    case -1:
    case "UNRECOGNIZED":
    default:
      return DepositRecord_Source.UNRECOGNIZED;
  }
}
export function depositRecord_SourceToJSON(object: DepositRecord_Source): string {
  switch (object) {
    case DepositRecord_Source.STRIDE:
      return "STRIDE";

    case DepositRecord_Source.WITHDRAWAL_ICA:
      return "WITHDRAWAL_ICA";

    default:
      return "UNKNOWN";
  }
}
export enum HostZoneUnbonding_Status {
  /** UNBONDING_QUEUE - tokens bonded on delegate account */
  UNBONDING_QUEUE = 0,
  UNBONDING_IN_PROGRESS = 3,

  /** EXIT_TRANSFER_QUEUE - unbonding completed on delegate account */
  EXIT_TRANSFER_QUEUE = 1,
  EXIT_TRANSFER_IN_PROGRESS = 4,

  /** CLAIMABLE - transfer success */
  CLAIMABLE = 2,
  UNRECOGNIZED = -1,
}
export enum HostZoneUnbonding_StatusSDKType {
  /** UNBONDING_QUEUE - tokens bonded on delegate account */
  UNBONDING_QUEUE = 0,
  UNBONDING_IN_PROGRESS = 3,

  /** EXIT_TRANSFER_QUEUE - unbonding completed on delegate account */
  EXIT_TRANSFER_QUEUE = 1,
  EXIT_TRANSFER_IN_PROGRESS = 4,

  /** CLAIMABLE - transfer success */
  CLAIMABLE = 2,
  UNRECOGNIZED = -1,
}
export function hostZoneUnbonding_StatusFromJSON(object: any): HostZoneUnbonding_Status {
  switch (object) {
    case 0:
    case "UNBONDING_QUEUE":
      return HostZoneUnbonding_Status.UNBONDING_QUEUE;

    case 3:
    case "UNBONDING_IN_PROGRESS":
      return HostZoneUnbonding_Status.UNBONDING_IN_PROGRESS;

    case 1:
    case "EXIT_TRANSFER_QUEUE":
      return HostZoneUnbonding_Status.EXIT_TRANSFER_QUEUE;

    case 4:
    case "EXIT_TRANSFER_IN_PROGRESS":
      return HostZoneUnbonding_Status.EXIT_TRANSFER_IN_PROGRESS;

    case 2:
    case "CLAIMABLE":
      return HostZoneUnbonding_Status.CLAIMABLE;

    case -1:
    case "UNRECOGNIZED":
    default:
      return HostZoneUnbonding_Status.UNRECOGNIZED;
  }
}
export function hostZoneUnbonding_StatusToJSON(object: HostZoneUnbonding_Status): string {
  switch (object) {
    case HostZoneUnbonding_Status.UNBONDING_QUEUE:
      return "UNBONDING_QUEUE";

    case HostZoneUnbonding_Status.UNBONDING_IN_PROGRESS:
      return "UNBONDING_IN_PROGRESS";

    case HostZoneUnbonding_Status.EXIT_TRANSFER_QUEUE:
      return "EXIT_TRANSFER_QUEUE";

    case HostZoneUnbonding_Status.EXIT_TRANSFER_IN_PROGRESS:
      return "EXIT_TRANSFER_IN_PROGRESS";

    case HostZoneUnbonding_Status.CLAIMABLE:
      return "CLAIMABLE";

    default:
      return "UNKNOWN";
  }
}
export enum LSMTokenDeposit_Status {
  DEPOSIT_PENDING = 0,
  TRANSFER_QUEUE = 1,
  TRANSFER_IN_PROGRESS = 2,
  TRANSFER_FAILED = 3,
  DETOKENIZATION_QUEUE = 4,
  DETOKENIZATION_IN_PROGRESS = 5,
  DETOKENIZATION_FAILED = 6,
  UNRECOGNIZED = -1,
}
export enum LSMTokenDeposit_StatusSDKType {
  DEPOSIT_PENDING = 0,
  TRANSFER_QUEUE = 1,
  TRANSFER_IN_PROGRESS = 2,
  TRANSFER_FAILED = 3,
  DETOKENIZATION_QUEUE = 4,
  DETOKENIZATION_IN_PROGRESS = 5,
  DETOKENIZATION_FAILED = 6,
  UNRECOGNIZED = -1,
}
export function lSMTokenDeposit_StatusFromJSON(object: any): LSMTokenDeposit_Status {
  switch (object) {
    case 0:
    case "DEPOSIT_PENDING":
      return LSMTokenDeposit_Status.DEPOSIT_PENDING;

    case 1:
    case "TRANSFER_QUEUE":
      return LSMTokenDeposit_Status.TRANSFER_QUEUE;

    case 2:
    case "TRANSFER_IN_PROGRESS":
      return LSMTokenDeposit_Status.TRANSFER_IN_PROGRESS;

    case 3:
    case "TRANSFER_FAILED":
      return LSMTokenDeposit_Status.TRANSFER_FAILED;

    case 4:
    case "DETOKENIZATION_QUEUE":
      return LSMTokenDeposit_Status.DETOKENIZATION_QUEUE;

    case 5:
    case "DETOKENIZATION_IN_PROGRESS":
      return LSMTokenDeposit_Status.DETOKENIZATION_IN_PROGRESS;

    case 6:
    case "DETOKENIZATION_FAILED":
      return LSMTokenDeposit_Status.DETOKENIZATION_FAILED;

    case -1:
    case "UNRECOGNIZED":
    default:
      return LSMTokenDeposit_Status.UNRECOGNIZED;
  }
}
export function lSMTokenDeposit_StatusToJSON(object: LSMTokenDeposit_Status): string {
  switch (object) {
    case LSMTokenDeposit_Status.DEPOSIT_PENDING:
      return "DEPOSIT_PENDING";

    case LSMTokenDeposit_Status.TRANSFER_QUEUE:
      return "TRANSFER_QUEUE";

    case LSMTokenDeposit_Status.TRANSFER_IN_PROGRESS:
      return "TRANSFER_IN_PROGRESS";

    case LSMTokenDeposit_Status.TRANSFER_FAILED:
      return "TRANSFER_FAILED";

    case LSMTokenDeposit_Status.DETOKENIZATION_QUEUE:
      return "DETOKENIZATION_QUEUE";

    case LSMTokenDeposit_Status.DETOKENIZATION_IN_PROGRESS:
      return "DETOKENIZATION_IN_PROGRESS";

    case LSMTokenDeposit_Status.DETOKENIZATION_FAILED:
      return "DETOKENIZATION_FAILED";

    default:
      return "UNKNOWN";
  }
}
export interface UserRedemptionRecord {
  /** {chain_id}.{epoch}.{receiver} */
  id: string;
  receiver: string;
  nativeTokenAmount: string;
  denom: string;
  hostZoneId: string;
  epochNumber: Long;
  claimIsPending: boolean;
  stTokenAmount: string;
}
export interface UserRedemptionRecordSDKType {
  /** {chain_id}.{epoch}.{receiver} */
  id: string;
  receiver: string;
  native_token_amount: string;
  denom: string;
  host_zone_id: string;
  epoch_number: Long;
  claim_is_pending: boolean;
  st_token_amount: string;
}
export interface DepositRecord {
  id: Long;
  amount: string;
  denom: string;
  hostZoneId: string;
  status: DepositRecord_Status;
  depositEpochNumber: Long;
  source: DepositRecord_Source;
}
export interface DepositRecordSDKType {
  id: Long;
  amount: string;
  denom: string;
  host_zone_id: string;
  status: DepositRecord_StatusSDKType;
  deposit_epoch_number: Long;
  source: DepositRecord_SourceSDKType;
}
export interface HostZoneUnbonding {
  stTokenAmount: string;
  nativeTokenAmount: string;
  denom: string;
  hostZoneId: string;
  unbondingTime: Long;
  status: HostZoneUnbonding_Status;
  userRedemptionRecords: string[];
}
export interface HostZoneUnbondingSDKType {
  st_token_amount: string;
  native_token_amount: string;
  denom: string;
  host_zone_id: string;
  unbonding_time: Long;
  status: HostZoneUnbonding_StatusSDKType;
  user_redemption_records: string[];
}
export interface EpochUnbondingRecord {
  epochNumber: Long;
  hostZoneUnbondings: HostZoneUnbonding[];
}
export interface EpochUnbondingRecordSDKType {
  epoch_number: Long;
  host_zone_unbondings: HostZoneUnbondingSDKType[];
}
export interface LSMTokenDeposit {
  depositId: string;
  chainId: string;
  denom: string;
  ibcDenom: string;
  stakerAddress: string;
  validatorAddress: string;
  amount: string;
  stToken: Coin;
  status: LSMTokenDeposit_Status;
}
export interface LSMTokenDepositSDKType {
  deposit_id: string;
  chain_id: string;
  denom: string;
  ibc_denom: string;
  staker_address: string;
  validator_address: string;
  amount: string;
  st_token: CoinSDKType;
  status: LSMTokenDeposit_StatusSDKType;
}

function createBaseUserRedemptionRecord(): UserRedemptionRecord {
  return {
    id: "",
    receiver: "",
    nativeTokenAmount: "",
    denom: "",
    hostZoneId: "",
    epochNumber: Long.UZERO,
    claimIsPending: false,
    stTokenAmount: ""
  };
}

export const UserRedemptionRecord = {
  encode(message: UserRedemptionRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }

    if (message.receiver !== "") {
      writer.uint32(26).string(message.receiver);
    }

    if (message.nativeTokenAmount !== "") {
      writer.uint32(34).string(message.nativeTokenAmount);
    }

    if (message.denom !== "") {
      writer.uint32(42).string(message.denom);
    }

    if (message.hostZoneId !== "") {
      writer.uint32(50).string(message.hostZoneId);
    }

    if (!message.epochNumber.isZero()) {
      writer.uint32(56).uint64(message.epochNumber);
    }

    if (message.claimIsPending === true) {
      writer.uint32(64).bool(message.claimIsPending);
    }

    if (message.stTokenAmount !== "") {
      writer.uint32(74).string(message.stTokenAmount);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserRedemptionRecord {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserRedemptionRecord();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;

        case 3:
          message.receiver = reader.string();
          break;

        case 4:
          message.nativeTokenAmount = reader.string();
          break;

        case 5:
          message.denom = reader.string();
          break;

        case 6:
          message.hostZoneId = reader.string();
          break;

        case 7:
          message.epochNumber = (reader.uint64() as Long);
          break;

        case 8:
          message.claimIsPending = reader.bool();
          break;

        case 9:
          message.stTokenAmount = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<UserRedemptionRecord>): UserRedemptionRecord {
    const message = createBaseUserRedemptionRecord();
    message.id = object.id ?? "";
    message.receiver = object.receiver ?? "";
    message.nativeTokenAmount = object.nativeTokenAmount ?? "";
    message.denom = object.denom ?? "";
    message.hostZoneId = object.hostZoneId ?? "";
    message.epochNumber = object.epochNumber !== undefined && object.epochNumber !== null ? Long.fromValue(object.epochNumber) : Long.UZERO;
    message.claimIsPending = object.claimIsPending ?? false;
    message.stTokenAmount = object.stTokenAmount ?? "";
    return message;
  }

};

function createBaseDepositRecord(): DepositRecord {
  return {
    id: Long.UZERO,
    amount: "",
    denom: "",
    hostZoneId: "",
    status: 0,
    depositEpochNumber: Long.UZERO,
    source: 0
  };
}

export const DepositRecord = {
  encode(message: DepositRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }

    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }

    if (message.denom !== "") {
      writer.uint32(26).string(message.denom);
    }

    if (message.hostZoneId !== "") {
      writer.uint32(34).string(message.hostZoneId);
    }

    if (message.status !== 0) {
      writer.uint32(48).int32(message.status);
    }

    if (!message.depositEpochNumber.isZero()) {
      writer.uint32(56).uint64(message.depositEpochNumber);
    }

    if (message.source !== 0) {
      writer.uint32(64).int32(message.source);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DepositRecord {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDepositRecord();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = (reader.uint64() as Long);
          break;

        case 2:
          message.amount = reader.string();
          break;

        case 3:
          message.denom = reader.string();
          break;

        case 4:
          message.hostZoneId = reader.string();
          break;

        case 6:
          message.status = (reader.int32() as any);
          break;

        case 7:
          message.depositEpochNumber = (reader.uint64() as Long);
          break;

        case 8:
          message.source = (reader.int32() as any);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<DepositRecord>): DepositRecord {
    const message = createBaseDepositRecord();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.amount = object.amount ?? "";
    message.denom = object.denom ?? "";
    message.hostZoneId = object.hostZoneId ?? "";
    message.status = object.status ?? 0;
    message.depositEpochNumber = object.depositEpochNumber !== undefined && object.depositEpochNumber !== null ? Long.fromValue(object.depositEpochNumber) : Long.UZERO;
    message.source = object.source ?? 0;
    return message;
  }

};

function createBaseHostZoneUnbonding(): HostZoneUnbonding {
  return {
    stTokenAmount: "",
    nativeTokenAmount: "",
    denom: "",
    hostZoneId: "",
    unbondingTime: Long.UZERO,
    status: 0,
    userRedemptionRecords: []
  };
}

export const HostZoneUnbonding = {
  encode(message: HostZoneUnbonding, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.stTokenAmount !== "") {
      writer.uint32(10).string(message.stTokenAmount);
    }

    if (message.nativeTokenAmount !== "") {
      writer.uint32(18).string(message.nativeTokenAmount);
    }

    if (message.denom !== "") {
      writer.uint32(26).string(message.denom);
    }

    if (message.hostZoneId !== "") {
      writer.uint32(34).string(message.hostZoneId);
    }

    if (!message.unbondingTime.isZero()) {
      writer.uint32(40).uint64(message.unbondingTime);
    }

    if (message.status !== 0) {
      writer.uint32(48).int32(message.status);
    }

    for (const v of message.userRedemptionRecords) {
      writer.uint32(58).string(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HostZoneUnbonding {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHostZoneUnbonding();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.stTokenAmount = reader.string();
          break;

        case 2:
          message.nativeTokenAmount = reader.string();
          break;

        case 3:
          message.denom = reader.string();
          break;

        case 4:
          message.hostZoneId = reader.string();
          break;

        case 5:
          message.unbondingTime = (reader.uint64() as Long);
          break;

        case 6:
          message.status = (reader.int32() as any);
          break;

        case 7:
          message.userRedemptionRecords.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<HostZoneUnbonding>): HostZoneUnbonding {
    const message = createBaseHostZoneUnbonding();
    message.stTokenAmount = object.stTokenAmount ?? "";
    message.nativeTokenAmount = object.nativeTokenAmount ?? "";
    message.denom = object.denom ?? "";
    message.hostZoneId = object.hostZoneId ?? "";
    message.unbondingTime = object.unbondingTime !== undefined && object.unbondingTime !== null ? Long.fromValue(object.unbondingTime) : Long.UZERO;
    message.status = object.status ?? 0;
    message.userRedemptionRecords = object.userRedemptionRecords?.map(e => e) || [];
    return message;
  }

};

function createBaseEpochUnbondingRecord(): EpochUnbondingRecord {
  return {
    epochNumber: Long.UZERO,
    hostZoneUnbondings: []
  };
}

export const EpochUnbondingRecord = {
  encode(message: EpochUnbondingRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.epochNumber.isZero()) {
      writer.uint32(8).uint64(message.epochNumber);
    }

    for (const v of message.hostZoneUnbondings) {
      HostZoneUnbonding.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EpochUnbondingRecord {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEpochUnbondingRecord();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.epochNumber = (reader.uint64() as Long);
          break;

        case 3:
          message.hostZoneUnbondings.push(HostZoneUnbonding.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<EpochUnbondingRecord>): EpochUnbondingRecord {
    const message = createBaseEpochUnbondingRecord();
    message.epochNumber = object.epochNumber !== undefined && object.epochNumber !== null ? Long.fromValue(object.epochNumber) : Long.UZERO;
    message.hostZoneUnbondings = object.hostZoneUnbondings?.map(e => HostZoneUnbonding.fromPartial(e)) || [];
    return message;
  }

};

function createBaseLSMTokenDeposit(): LSMTokenDeposit {
  return {
    depositId: "",
    chainId: "",
    denom: "",
    ibcDenom: "",
    stakerAddress: "",
    validatorAddress: "",
    amount: "",
    stToken: undefined,
    status: 0
  };
}

export const LSMTokenDeposit = {
  encode(message: LSMTokenDeposit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.depositId !== "") {
      writer.uint32(10).string(message.depositId);
    }

    if (message.chainId !== "") {
      writer.uint32(18).string(message.chainId);
    }

    if (message.denom !== "") {
      writer.uint32(26).string(message.denom);
    }

    if (message.ibcDenom !== "") {
      writer.uint32(34).string(message.ibcDenom);
    }

    if (message.stakerAddress !== "") {
      writer.uint32(42).string(message.stakerAddress);
    }

    if (message.validatorAddress !== "") {
      writer.uint32(50).string(message.validatorAddress);
    }

    if (message.amount !== "") {
      writer.uint32(58).string(message.amount);
    }

    if (message.stToken !== undefined) {
      Coin.encode(message.stToken, writer.uint32(66).fork()).ldelim();
    }

    if (message.status !== 0) {
      writer.uint32(72).int32(message.status);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LSMTokenDeposit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLSMTokenDeposit();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.depositId = reader.string();
          break;

        case 2:
          message.chainId = reader.string();
          break;

        case 3:
          message.denom = reader.string();
          break;

        case 4:
          message.ibcDenom = reader.string();
          break;

        case 5:
          message.stakerAddress = reader.string();
          break;

        case 6:
          message.validatorAddress = reader.string();
          break;

        case 7:
          message.amount = reader.string();
          break;

        case 8:
          message.stToken = Coin.decode(reader, reader.uint32());
          break;

        case 9:
          message.status = (reader.int32() as any);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<LSMTokenDeposit>): LSMTokenDeposit {
    const message = createBaseLSMTokenDeposit();
    message.depositId = object.depositId ?? "";
    message.chainId = object.chainId ?? "";
    message.denom = object.denom ?? "";
    message.ibcDenom = object.ibcDenom ?? "";
    message.stakerAddress = object.stakerAddress ?? "";
    message.validatorAddress = object.validatorAddress ?? "";
    message.amount = object.amount ?? "";
    message.stToken = object.stToken !== undefined && object.stToken !== null ? Coin.fromPartial(object.stToken) : undefined;
    message.status = object.status ?? 0;
    return message;
  }

};