import { Timestamp } from "../../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial, toTimestamp, fromTimestamp } from "@osmonauts/helpers";
/**
 * ClaimType enum represents the possible claim types for a user getting an
 * airdrop
 */

export enum ClaimType {
  /**
   * CLAIM_DAILY - CLAIM_DAILY indicates that the airdrop rewards are accumulated daily
   *  A user can claim daily up front and change their decision within the
   *  deadline window
   *  This type is assigned to the user by default when their allocations are
   *  added
   */
  CLAIM_DAILY = 0,

  /**
   * CLAIM_EARLY - CLAIM_EARLY indicates that the airdrop rewards have been claimed early,
   *  with half going to the user and half being clawed back
   */
  CLAIM_EARLY = 1,
  UNRECOGNIZED = -1,
}
/**
 * ClaimType enum represents the possible claim types for a user getting an
 * airdrop
 */

export enum ClaimTypeSDKType {
  /**
   * CLAIM_DAILY - CLAIM_DAILY indicates that the airdrop rewards are accumulated daily
   *  A user can claim daily up front and change their decision within the
   *  deadline window
   *  This type is assigned to the user by default when their allocations are
   *  added
   */
  CLAIM_DAILY = 0,

  /**
   * CLAIM_EARLY - CLAIM_EARLY indicates that the airdrop rewards have been claimed early,
   *  with half going to the user and half being clawed back
   */
  CLAIM_EARLY = 1,
  UNRECOGNIZED = -1,
}
export function claimTypeFromJSON(object: any): ClaimType {
  switch (object) {
    case 0:
    case "CLAIM_DAILY":
      return ClaimType.CLAIM_DAILY;

    case 1:
    case "CLAIM_EARLY":
      return ClaimType.CLAIM_EARLY;

    case -1:
    case "UNRECOGNIZED":
    default:
      return ClaimType.UNRECOGNIZED;
  }
}
export function claimTypeToJSON(object: ClaimType): string {
  switch (object) {
    case ClaimType.CLAIM_DAILY:
      return "CLAIM_DAILY";

    case ClaimType.CLAIM_EARLY:
      return "CLAIM_EARLY";

    default:
      return "UNKNOWN";
  }
}
/** Airdrop module parameters */

export interface Params {
  /**
   * The number of seconds between each element in the allocations array
   * In practice this is always 24 hours, but it's customizable for testing
   */
  periodLengthSeconds: Long;
}
/** Airdrop module parameters */

export interface ParamsSDKType {
  /**
   * The number of seconds between each element in the allocations array
   * In practice this is always 24 hours, but it's customizable for testing
   */
  period_length_seconds: Long;
}
/**
 * UserAllocation tracks the status of an allocation for a user on a specific
 * airdrop
 */

export interface UserAllocation {
  /** ID of the airdrop */
  airdropId: string;
  /**
   * Address of the account that is receiving the airdrop allocation
   * The address does not have to be a stride address - but non-stride addresses
   * must be linked and merged into a stride address before claiming
   */

  address: string;
  /** The total amount of tokens that have already been claimed */

  claimed: string;
  /**
   * The total amount of tokens that have been forfeited by the user for
   * claiming early
   */

  forfeited: string;
  /**
   * The current state of allocations for this airdrop
   *
   * Ex 1:
   *   Day 0: {claimed:0, allocations:[10,10,10]}
   *   *MsgClaim*
   *   Day 1: {claimed:10, allocations:[0,10,10]}
   *   *MsgClaim*
   *   Day 2: {claimed:20, allocations:[0,0,10]}
   *
   * Ex 2:
   *   Day 0: {claimed:0, allocations:[10,10,10]}
   *   *MsgClaimEarly*
   *   Day 1: {claimed:15, forfeited:15, allocations:[0,0,0]}
   */

  allocations: string[];
}
/**
 * UserAllocation tracks the status of an allocation for a user on a specific
 * airdrop
 */

export interface UserAllocationSDKType {
  /** ID of the airdrop */
  airdrop_id: string;
  /**
   * Address of the account that is receiving the airdrop allocation
   * The address does not have to be a stride address - but non-stride addresses
   * must be linked and merged into a stride address before claiming
   */

  address: string;
  /** The total amount of tokens that have already been claimed */

  claimed: string;
  /**
   * The total amount of tokens that have been forfeited by the user for
   * claiming early
   */

  forfeited: string;
  /**
   * The current state of allocations for this airdrop
   *
   * Ex 1:
   *   Day 0: {claimed:0, allocations:[10,10,10]}
   *   *MsgClaim*
   *   Day 1: {claimed:10, allocations:[0,10,10]}
   *   *MsgClaim*
   *   Day 2: {claimed:20, allocations:[0,0,10]}
   *
   * Ex 2:
   *   Day 0: {claimed:0, allocations:[10,10,10]}
   *   *MsgClaimEarly*
   *   Day 1: {claimed:15, forfeited:15, allocations:[0,0,0]}
   */

  allocations: string[];
}
/** Airdrop track the aggregate unbondings across an epoch */

export interface Airdrop {
  /** Airdrop ID */
  id: string;
  /** Denom used when distributing rewards */

  rewardDenom: string;
  /** The first date that claiming begins and rewards are distributed */

  distributionStartDate: Date;
  /**
   * The last date for rewards to be distributed. Immediately after this date
   * the rewards can no longer be claimed, but rewards have not been clawed back
   * yet
   */

  distributionEndDate: Date;
  /**
   * Date with which the rewards are clawed back (occurs after the distribution
   * end date)
   */

  clawbackDate: Date;
  /** Deadline for the user to make a decision on their claim type */

  claimTypeDeadlineDate: Date;
  /**
   * Penalty for claiming rewards early - e.g. 0.5 means claiming early will
   * result in losing 50% of rewards
   */

  earlyClaimPenalty: string;
  /** Account that holds the total reward balance and distributes to users */

  distributorAddress: string;
  /** Admin account with permissions to add or update allocations */

  allocatorAddress: string;
  /** Admin account with permissions to link addresseses */

  linkerAddress: string;
}
/** Airdrop track the aggregate unbondings across an epoch */

export interface AirdropSDKType {
  /** Airdrop ID */
  id: string;
  /** Denom used when distributing rewards */

  reward_denom: string;
  /** The first date that claiming begins and rewards are distributed */

  distribution_start_date: Date;
  /**
   * The last date for rewards to be distributed. Immediately after this date
   * the rewards can no longer be claimed, but rewards have not been clawed back
   * yet
   */

  distribution_end_date: Date;
  /**
   * Date with which the rewards are clawed back (occurs after the distribution
   * end date)
   */

  clawback_date: Date;
  /** Deadline for the user to make a decision on their claim type */

  claim_type_deadline_date: Date;
  /**
   * Penalty for claiming rewards early - e.g. 0.5 means claiming early will
   * result in losing 50% of rewards
   */

  early_claim_penalty: string;
  /** Account that holds the total reward balance and distributes to users */

  distributor_address: string;
  /** Admin account with permissions to add or update allocations */

  allocator_address: string;
  /** Admin account with permissions to link addresseses */

  linker_address: string;
}

function createBaseParams(): Params {
  return {
    periodLengthSeconds: Long.ZERO
  };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.periodLengthSeconds.isZero()) {
      writer.uint32(8).int64(message.periodLengthSeconds);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.periodLengthSeconds = (reader.int64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.periodLengthSeconds = object.periodLengthSeconds !== undefined && object.periodLengthSeconds !== null ? Long.fromValue(object.periodLengthSeconds) : Long.ZERO;
    return message;
  }

};

function createBaseUserAllocation(): UserAllocation {
  return {
    airdropId: "",
    address: "",
    claimed: "",
    forfeited: "",
    allocations: []
  };
}

export const UserAllocation = {
  encode(message: UserAllocation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.airdropId !== "") {
      writer.uint32(10).string(message.airdropId);
    }

    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }

    if (message.claimed !== "") {
      writer.uint32(26).string(message.claimed);
    }

    if (message.forfeited !== "") {
      writer.uint32(34).string(message.forfeited);
    }

    for (const v of message.allocations) {
      writer.uint32(42).string(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserAllocation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserAllocation();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.airdropId = reader.string();
          break;

        case 2:
          message.address = reader.string();
          break;

        case 3:
          message.claimed = reader.string();
          break;

        case 4:
          message.forfeited = reader.string();
          break;

        case 5:
          message.allocations.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<UserAllocation>): UserAllocation {
    const message = createBaseUserAllocation();
    message.airdropId = object.airdropId ?? "";
    message.address = object.address ?? "";
    message.claimed = object.claimed ?? "";
    message.forfeited = object.forfeited ?? "";
    message.allocations = object.allocations?.map(e => e) || [];
    return message;
  }

};

function createBaseAirdrop(): Airdrop {
  return {
    id: "",
    rewardDenom: "",
    distributionStartDate: undefined,
    distributionEndDate: undefined,
    clawbackDate: undefined,
    claimTypeDeadlineDate: undefined,
    earlyClaimPenalty: "",
    distributorAddress: "",
    allocatorAddress: "",
    linkerAddress: ""
  };
}

export const Airdrop = {
  encode(message: Airdrop, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }

    if (message.rewardDenom !== "") {
      writer.uint32(18).string(message.rewardDenom);
    }

    if (message.distributionStartDate !== undefined) {
      Timestamp.encode(toTimestamp(message.distributionStartDate), writer.uint32(26).fork()).ldelim();
    }

    if (message.distributionEndDate !== undefined) {
      Timestamp.encode(toTimestamp(message.distributionEndDate), writer.uint32(34).fork()).ldelim();
    }

    if (message.clawbackDate !== undefined) {
      Timestamp.encode(toTimestamp(message.clawbackDate), writer.uint32(42).fork()).ldelim();
    }

    if (message.claimTypeDeadlineDate !== undefined) {
      Timestamp.encode(toTimestamp(message.claimTypeDeadlineDate), writer.uint32(50).fork()).ldelim();
    }

    if (message.earlyClaimPenalty !== "") {
      writer.uint32(58).string(message.earlyClaimPenalty);
    }

    if (message.distributorAddress !== "") {
      writer.uint32(66).string(message.distributorAddress);
    }

    if (message.allocatorAddress !== "") {
      writer.uint32(74).string(message.allocatorAddress);
    }

    if (message.linkerAddress !== "") {
      writer.uint32(82).string(message.linkerAddress);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Airdrop {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAirdrop();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;

        case 2:
          message.rewardDenom = reader.string();
          break;

        case 3:
          message.distributionStartDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        case 4:
          message.distributionEndDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        case 5:
          message.clawbackDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        case 6:
          message.claimTypeDeadlineDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        case 7:
          message.earlyClaimPenalty = reader.string();
          break;

        case 8:
          message.distributorAddress = reader.string();
          break;

        case 9:
          message.allocatorAddress = reader.string();
          break;

        case 10:
          message.linkerAddress = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<Airdrop>): Airdrop {
    const message = createBaseAirdrop();
    message.id = object.id ?? "";
    message.rewardDenom = object.rewardDenom ?? "";
    message.distributionStartDate = object.distributionStartDate ?? undefined;
    message.distributionEndDate = object.distributionEndDate ?? undefined;
    message.clawbackDate = object.clawbackDate ?? undefined;
    message.claimTypeDeadlineDate = object.claimTypeDeadlineDate ?? undefined;
    message.earlyClaimPenalty = object.earlyClaimPenalty ?? "";
    message.distributorAddress = object.distributorAddress ?? "";
    message.allocatorAddress = object.allocatorAddress ?? "";
    message.linkerAddress = object.linkerAddress ?? "";
    return message;
  }

};