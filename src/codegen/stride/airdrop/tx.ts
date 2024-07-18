import { Timestamp } from "../../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, toTimestamp, fromTimestamp } from "@osmonauts/helpers";
/** ClaimDaily */

export interface MsgClaimDaily {
  /** Address of the claimer */
  claimer: string;
  /** Airdrop ID */

  airdropId: string;
}
/** ClaimDaily */

export interface MsgClaimDailySDKType {
  /** Address of the claimer */
  claimer: string;
  /** Airdrop ID */

  airdrop_id: string;
}
export interface MsgClaimDailyResponse {}
export interface MsgClaimDailyResponseSDKType {}
/** ClaimEarly */

export interface MsgClaimEarly {
  /** Address of the claimer */
  claimer: string;
  /** Airdrop ID */

  airdropId: string;
}
/** ClaimEarly */

export interface MsgClaimEarlySDKType {
  /** Address of the claimer */
  claimer: string;
  /** Airdrop ID */

  airdrop_id: string;
}
export interface MsgClaimEarlyResponse {}
export interface MsgClaimEarlyResponseSDKType {}
/** CreateAirdrop */

export interface MsgCreateAirdrop {
  /** Airdrop admin address */
  admin: string;
  /** Airdrop ID */

  airdropId: string;
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
/** CreateAirdrop */

export interface MsgCreateAirdropSDKType {
  /** Airdrop admin address */
  admin: string;
  /** Airdrop ID */

  airdrop_id: string;
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
export interface MsgCreateAirdropResponse {}
export interface MsgCreateAirdropResponseSDKType {}
/** UpdateAirdrop */

export interface MsgUpdateAirdrop {
  /** Airdrop admin address */
  admin: string;
  /** Airdrop ID */

  airdropId: string;
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
/** UpdateAirdrop */

export interface MsgUpdateAirdropSDKType {
  /** Airdrop admin address */
  admin: string;
  /** Airdrop ID */

  airdrop_id: string;
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
export interface MsgUpdateAirdropResponse {}
export interface MsgUpdateAirdropResponseSDKType {}
/** Allocation specification when bootstrapping reward data */

export interface RawAllocation {
  userAddress: string;
  allocations: string[];
}
/** Allocation specification when bootstrapping reward data */

export interface RawAllocationSDKType {
  user_address: string;
  allocations: string[];
}
/** AddAllocations */

export interface MsgAddAllocations {
  /** Airdrop admin address */
  admin: string;
  /** Airdrop ID */

  airdropId: string;
  /** List of address/allocation pairs for each user */

  allocations: RawAllocation[];
}
/** AddAllocations */

export interface MsgAddAllocationsSDKType {
  /** Airdrop admin address */
  admin: string;
  /** Airdrop ID */

  airdrop_id: string;
  /** List of address/allocation pairs for each user */

  allocations: RawAllocationSDKType[];
}
export interface MsgAddAllocationsResponse {}
export interface MsgAddAllocationsResponseSDKType {}
/** UpdateUserAllocation */

export interface MsgUpdateUserAllocation {
  /** Airdrop admin address */
  admin: string;
  /** Airdrop ID */

  airdropId: string;
  /** Address of the airdrop recipient */

  userAddress: string;
  /**
   * Allocations - as an array where each element represents the rewards for a
   * day
   */

  allocations: string[];
}
/** UpdateUserAllocation */

export interface MsgUpdateUserAllocationSDKType {
  /** Airdrop admin address */
  admin: string;
  /** Airdrop ID */

  airdrop_id: string;
  /** Address of the airdrop recipient */

  user_address: string;
  /**
   * Allocations - as an array where each element represents the rewards for a
   * day
   */

  allocations: string[];
}
export interface MsgUpdateUserAllocationResponse {}
export interface MsgUpdateUserAllocationResponseSDKType {}
/** LinkAddresses */

export interface MsgLinkAddresses {
  /** Airdrop admin address */
  admin: string;
  /** Airdrop ID */

  airdropId: string;
  /** Stride address - this address may or may not exist in allocations yet */

  strideAddress: string;
  /** Host address - this address must exist */

  hostAddress: string;
}
/** LinkAddresses */

export interface MsgLinkAddressesSDKType {
  /** Airdrop admin address */
  admin: string;
  /** Airdrop ID */

  airdrop_id: string;
  /** Stride address - this address may or may not exist in allocations yet */

  stride_address: string;
  /** Host address - this address must exist */

  host_address: string;
}
export interface MsgLinkAddressesResponse {}
export interface MsgLinkAddressesResponseSDKType {}

function createBaseMsgClaimDaily(): MsgClaimDaily {
  return {
    claimer: "",
    airdropId: ""
  };
}

export const MsgClaimDaily = {
  encode(message: MsgClaimDaily, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.claimer !== "") {
      writer.uint32(10).string(message.claimer);
    }

    if (message.airdropId !== "") {
      writer.uint32(18).string(message.airdropId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgClaimDaily {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaimDaily();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.claimer = reader.string();
          break;

        case 2:
          message.airdropId = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgClaimDaily>): MsgClaimDaily {
    const message = createBaseMsgClaimDaily();
    message.claimer = object.claimer ?? "";
    message.airdropId = object.airdropId ?? "";
    return message;
  }

};

function createBaseMsgClaimDailyResponse(): MsgClaimDailyResponse {
  return {};
}

export const MsgClaimDailyResponse = {
  encode(_: MsgClaimDailyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgClaimDailyResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaimDailyResponse();

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

  fromPartial(_: DeepPartial<MsgClaimDailyResponse>): MsgClaimDailyResponse {
    const message = createBaseMsgClaimDailyResponse();
    return message;
  }

};

function createBaseMsgClaimEarly(): MsgClaimEarly {
  return {
    claimer: "",
    airdropId: ""
  };
}

export const MsgClaimEarly = {
  encode(message: MsgClaimEarly, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.claimer !== "") {
      writer.uint32(10).string(message.claimer);
    }

    if (message.airdropId !== "") {
      writer.uint32(18).string(message.airdropId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgClaimEarly {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaimEarly();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.claimer = reader.string();
          break;

        case 2:
          message.airdropId = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgClaimEarly>): MsgClaimEarly {
    const message = createBaseMsgClaimEarly();
    message.claimer = object.claimer ?? "";
    message.airdropId = object.airdropId ?? "";
    return message;
  }

};

function createBaseMsgClaimEarlyResponse(): MsgClaimEarlyResponse {
  return {};
}

export const MsgClaimEarlyResponse = {
  encode(_: MsgClaimEarlyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgClaimEarlyResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaimEarlyResponse();

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

  fromPartial(_: DeepPartial<MsgClaimEarlyResponse>): MsgClaimEarlyResponse {
    const message = createBaseMsgClaimEarlyResponse();
    return message;
  }

};

function createBaseMsgCreateAirdrop(): MsgCreateAirdrop {
  return {
    admin: "",
    airdropId: "",
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

export const MsgCreateAirdrop = {
  encode(message: MsgCreateAirdrop, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }

    if (message.airdropId !== "") {
      writer.uint32(18).string(message.airdropId);
    }

    if (message.rewardDenom !== "") {
      writer.uint32(26).string(message.rewardDenom);
    }

    if (message.distributionStartDate !== undefined) {
      Timestamp.encode(toTimestamp(message.distributionStartDate), writer.uint32(34).fork()).ldelim();
    }

    if (message.distributionEndDate !== undefined) {
      Timestamp.encode(toTimestamp(message.distributionEndDate), writer.uint32(42).fork()).ldelim();
    }

    if (message.clawbackDate !== undefined) {
      Timestamp.encode(toTimestamp(message.clawbackDate), writer.uint32(50).fork()).ldelim();
    }

    if (message.claimTypeDeadlineDate !== undefined) {
      Timestamp.encode(toTimestamp(message.claimTypeDeadlineDate), writer.uint32(58).fork()).ldelim();
    }

    if (message.earlyClaimPenalty !== "") {
      writer.uint32(66).string(message.earlyClaimPenalty);
    }

    if (message.distributorAddress !== "") {
      writer.uint32(74).string(message.distributorAddress);
    }

    if (message.allocatorAddress !== "") {
      writer.uint32(82).string(message.allocatorAddress);
    }

    if (message.linkerAddress !== "") {
      writer.uint32(90).string(message.linkerAddress);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateAirdrop {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateAirdrop();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;

        case 2:
          message.airdropId = reader.string();
          break;

        case 3:
          message.rewardDenom = reader.string();
          break;

        case 4:
          message.distributionStartDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        case 5:
          message.distributionEndDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        case 6:
          message.clawbackDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        case 7:
          message.claimTypeDeadlineDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        case 8:
          message.earlyClaimPenalty = reader.string();
          break;

        case 9:
          message.distributorAddress = reader.string();
          break;

        case 10:
          message.allocatorAddress = reader.string();
          break;

        case 11:
          message.linkerAddress = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgCreateAirdrop>): MsgCreateAirdrop {
    const message = createBaseMsgCreateAirdrop();
    message.admin = object.admin ?? "";
    message.airdropId = object.airdropId ?? "";
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

function createBaseMsgCreateAirdropResponse(): MsgCreateAirdropResponse {
  return {};
}

export const MsgCreateAirdropResponse = {
  encode(_: MsgCreateAirdropResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateAirdropResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateAirdropResponse();

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

  fromPartial(_: DeepPartial<MsgCreateAirdropResponse>): MsgCreateAirdropResponse {
    const message = createBaseMsgCreateAirdropResponse();
    return message;
  }

};

function createBaseMsgUpdateAirdrop(): MsgUpdateAirdrop {
  return {
    admin: "",
    airdropId: "",
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

export const MsgUpdateAirdrop = {
  encode(message: MsgUpdateAirdrop, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }

    if (message.airdropId !== "") {
      writer.uint32(18).string(message.airdropId);
    }

    if (message.rewardDenom !== "") {
      writer.uint32(26).string(message.rewardDenom);
    }

    if (message.distributionStartDate !== undefined) {
      Timestamp.encode(toTimestamp(message.distributionStartDate), writer.uint32(34).fork()).ldelim();
    }

    if (message.distributionEndDate !== undefined) {
      Timestamp.encode(toTimestamp(message.distributionEndDate), writer.uint32(42).fork()).ldelim();
    }

    if (message.clawbackDate !== undefined) {
      Timestamp.encode(toTimestamp(message.clawbackDate), writer.uint32(50).fork()).ldelim();
    }

    if (message.claimTypeDeadlineDate !== undefined) {
      Timestamp.encode(toTimestamp(message.claimTypeDeadlineDate), writer.uint32(58).fork()).ldelim();
    }

    if (message.earlyClaimPenalty !== "") {
      writer.uint32(66).string(message.earlyClaimPenalty);
    }

    if (message.distributorAddress !== "") {
      writer.uint32(74).string(message.distributorAddress);
    }

    if (message.allocatorAddress !== "") {
      writer.uint32(82).string(message.allocatorAddress);
    }

    if (message.linkerAddress !== "") {
      writer.uint32(90).string(message.linkerAddress);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateAirdrop {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateAirdrop();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;

        case 2:
          message.airdropId = reader.string();
          break;

        case 3:
          message.rewardDenom = reader.string();
          break;

        case 4:
          message.distributionStartDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        case 5:
          message.distributionEndDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        case 6:
          message.clawbackDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        case 7:
          message.claimTypeDeadlineDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        case 8:
          message.earlyClaimPenalty = reader.string();
          break;

        case 9:
          message.distributorAddress = reader.string();
          break;

        case 10:
          message.allocatorAddress = reader.string();
          break;

        case 11:
          message.linkerAddress = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgUpdateAirdrop>): MsgUpdateAirdrop {
    const message = createBaseMsgUpdateAirdrop();
    message.admin = object.admin ?? "";
    message.airdropId = object.airdropId ?? "";
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

function createBaseMsgUpdateAirdropResponse(): MsgUpdateAirdropResponse {
  return {};
}

export const MsgUpdateAirdropResponse = {
  encode(_: MsgUpdateAirdropResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateAirdropResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateAirdropResponse();

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

  fromPartial(_: DeepPartial<MsgUpdateAirdropResponse>): MsgUpdateAirdropResponse {
    const message = createBaseMsgUpdateAirdropResponse();
    return message;
  }

};

function createBaseRawAllocation(): RawAllocation {
  return {
    userAddress: "",
    allocations: []
  };
}

export const RawAllocation = {
  encode(message: RawAllocation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userAddress !== "") {
      writer.uint32(10).string(message.userAddress);
    }

    for (const v of message.allocations) {
      writer.uint32(34).string(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RawAllocation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRawAllocation();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.userAddress = reader.string();
          break;

        case 4:
          message.allocations.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<RawAllocation>): RawAllocation {
    const message = createBaseRawAllocation();
    message.userAddress = object.userAddress ?? "";
    message.allocations = object.allocations?.map(e => e) || [];
    return message;
  }

};

function createBaseMsgAddAllocations(): MsgAddAllocations {
  return {
    admin: "",
    airdropId: "",
    allocations: []
  };
}

export const MsgAddAllocations = {
  encode(message: MsgAddAllocations, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }

    if (message.airdropId !== "") {
      writer.uint32(18).string(message.airdropId);
    }

    for (const v of message.allocations) {
      RawAllocation.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddAllocations {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddAllocations();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;

        case 2:
          message.airdropId = reader.string();
          break;

        case 3:
          message.allocations.push(RawAllocation.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgAddAllocations>): MsgAddAllocations {
    const message = createBaseMsgAddAllocations();
    message.admin = object.admin ?? "";
    message.airdropId = object.airdropId ?? "";
    message.allocations = object.allocations?.map(e => RawAllocation.fromPartial(e)) || [];
    return message;
  }

};

function createBaseMsgAddAllocationsResponse(): MsgAddAllocationsResponse {
  return {};
}

export const MsgAddAllocationsResponse = {
  encode(_: MsgAddAllocationsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddAllocationsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddAllocationsResponse();

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

  fromPartial(_: DeepPartial<MsgAddAllocationsResponse>): MsgAddAllocationsResponse {
    const message = createBaseMsgAddAllocationsResponse();
    return message;
  }

};

function createBaseMsgUpdateUserAllocation(): MsgUpdateUserAllocation {
  return {
    admin: "",
    airdropId: "",
    userAddress: "",
    allocations: []
  };
}

export const MsgUpdateUserAllocation = {
  encode(message: MsgUpdateUserAllocation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }

    if (message.airdropId !== "") {
      writer.uint32(18).string(message.airdropId);
    }

    if (message.userAddress !== "") {
      writer.uint32(26).string(message.userAddress);
    }

    for (const v of message.allocations) {
      writer.uint32(34).string(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateUserAllocation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateUserAllocation();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;

        case 2:
          message.airdropId = reader.string();
          break;

        case 3:
          message.userAddress = reader.string();
          break;

        case 4:
          message.allocations.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgUpdateUserAllocation>): MsgUpdateUserAllocation {
    const message = createBaseMsgUpdateUserAllocation();
    message.admin = object.admin ?? "";
    message.airdropId = object.airdropId ?? "";
    message.userAddress = object.userAddress ?? "";
    message.allocations = object.allocations?.map(e => e) || [];
    return message;
  }

};

function createBaseMsgUpdateUserAllocationResponse(): MsgUpdateUserAllocationResponse {
  return {};
}

export const MsgUpdateUserAllocationResponse = {
  encode(_: MsgUpdateUserAllocationResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateUserAllocationResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateUserAllocationResponse();

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

  fromPartial(_: DeepPartial<MsgUpdateUserAllocationResponse>): MsgUpdateUserAllocationResponse {
    const message = createBaseMsgUpdateUserAllocationResponse();
    return message;
  }

};

function createBaseMsgLinkAddresses(): MsgLinkAddresses {
  return {
    admin: "",
    airdropId: "",
    strideAddress: "",
    hostAddress: ""
  };
}

export const MsgLinkAddresses = {
  encode(message: MsgLinkAddresses, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }

    if (message.airdropId !== "") {
      writer.uint32(18).string(message.airdropId);
    }

    if (message.strideAddress !== "") {
      writer.uint32(26).string(message.strideAddress);
    }

    if (message.hostAddress !== "") {
      writer.uint32(34).string(message.hostAddress);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgLinkAddresses {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgLinkAddresses();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;

        case 2:
          message.airdropId = reader.string();
          break;

        case 3:
          message.strideAddress = reader.string();
          break;

        case 4:
          message.hostAddress = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgLinkAddresses>): MsgLinkAddresses {
    const message = createBaseMsgLinkAddresses();
    message.admin = object.admin ?? "";
    message.airdropId = object.airdropId ?? "";
    message.strideAddress = object.strideAddress ?? "";
    message.hostAddress = object.hostAddress ?? "";
    return message;
  }

};

function createBaseMsgLinkAddressesResponse(): MsgLinkAddressesResponse {
  return {};
}

export const MsgLinkAddressesResponse = {
  encode(_: MsgLinkAddressesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgLinkAddressesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgLinkAddressesResponse();

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

  fromPartial(_: DeepPartial<MsgLinkAddressesResponse>): MsgLinkAddressesResponse {
    const message = createBaseMsgLinkAddressesResponse();
    return message;
  }

};