import { Timestamp } from "../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../binary";
import { toTimestamp, fromTimestamp } from "../../helpers";
import { Decimal } from "@cosmjs/math";
/** ClaimDaily */
export interface MsgClaimDaily {
  /** Address of the claimer */
  claimer: string;
  /** Airdrop ID */
  airdropId: string;
}
export interface MsgClaimDailyProtoMsg {
  typeUrl: "/stride.airdrop.MsgClaimDaily";
  value: Uint8Array;
}
/** ClaimDaily */
export interface MsgClaimDailyAmino {
  /** Address of the claimer */
  claimer?: string;
  /** Airdrop ID */
  airdrop_id?: string;
}
export interface MsgClaimDailyAminoMsg {
  type: "airdrop/MsgClaimDaily";
  value: MsgClaimDailyAmino;
}
/** ClaimDaily */
export interface MsgClaimDailySDKType {
  claimer: string;
  airdrop_id: string;
}
export interface MsgClaimDailyResponse {}
export interface MsgClaimDailyResponseProtoMsg {
  typeUrl: "/stride.airdrop.MsgClaimDailyResponse";
  value: Uint8Array;
}
export interface MsgClaimDailyResponseAmino {}
export interface MsgClaimDailyResponseAminoMsg {
  type: "/stride.airdrop.MsgClaimDailyResponse";
  value: MsgClaimDailyResponseAmino;
}
export interface MsgClaimDailyResponseSDKType {}
/** ClaimEarly */
export interface MsgClaimEarly {
  /** Address of the claimer */
  claimer: string;
  /** Airdrop ID */
  airdropId: string;
}
export interface MsgClaimEarlyProtoMsg {
  typeUrl: "/stride.airdrop.MsgClaimEarly";
  value: Uint8Array;
}
/** ClaimEarly */
export interface MsgClaimEarlyAmino {
  /** Address of the claimer */
  claimer?: string;
  /** Airdrop ID */
  airdrop_id?: string;
}
export interface MsgClaimEarlyAminoMsg {
  type: "airdrop/MsgClaimEarly";
  value: MsgClaimEarlyAmino;
}
/** ClaimEarly */
export interface MsgClaimEarlySDKType {
  claimer: string;
  airdrop_id: string;
}
export interface MsgClaimEarlyResponse {}
export interface MsgClaimEarlyResponseProtoMsg {
  typeUrl: "/stride.airdrop.MsgClaimEarlyResponse";
  value: Uint8Array;
}
export interface MsgClaimEarlyResponseAmino {}
export interface MsgClaimEarlyResponseAminoMsg {
  type: "/stride.airdrop.MsgClaimEarlyResponse";
  value: MsgClaimEarlyResponseAmino;
}
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
  distributionStartDate?: Date;
  /**
   * The last date for rewards to be distributed. Immediately after this date
   * the rewards can no longer be claimed, but rewards have not been clawed back
   * yet
   */
  distributionEndDate?: Date;
  /**
   * Date with which the rewards are clawed back (occurs after the distribution
   * end date)
   */
  clawbackDate?: Date;
  /** Deadline for the user to make a decision on their claim type */
  claimTypeDeadlineDate?: Date;
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
export interface MsgCreateAirdropProtoMsg {
  typeUrl: "/stride.airdrop.MsgCreateAirdrop";
  value: Uint8Array;
}
/** CreateAirdrop */
export interface MsgCreateAirdropAmino {
  /** Airdrop admin address */
  admin?: string;
  /** Airdrop ID */
  airdrop_id?: string;
  /** Denom used when distributing rewards */
  reward_denom?: string;
  /** The first date that claiming begins and rewards are distributed */
  distribution_start_date?: string;
  /**
   * The last date for rewards to be distributed. Immediately after this date
   * the rewards can no longer be claimed, but rewards have not been clawed back
   * yet
   */
  distribution_end_date?: string;
  /**
   * Date with which the rewards are clawed back (occurs after the distribution
   * end date)
   */
  clawback_date?: string;
  /** Deadline for the user to make a decision on their claim type */
  claim_type_deadline_date?: string;
  /**
   * Penalty for claiming rewards early - e.g. 0.5 means claiming early will
   * result in losing 50% of rewards
   */
  early_claim_penalty?: string;
  /** Account that holds the total reward balance and distributes to users */
  distributor_address?: string;
  /** Admin account with permissions to add or update allocations */
  allocator_address?: string;
  /** Admin account with permissions to link addresseses */
  linker_address?: string;
}
export interface MsgCreateAirdropAminoMsg {
  type: "airdrop/MsgCreateAirdrop";
  value: MsgCreateAirdropAmino;
}
/** CreateAirdrop */
export interface MsgCreateAirdropSDKType {
  admin: string;
  airdrop_id: string;
  reward_denom: string;
  distribution_start_date?: Date;
  distribution_end_date?: Date;
  clawback_date?: Date;
  claim_type_deadline_date?: Date;
  early_claim_penalty: string;
  distributor_address: string;
  allocator_address: string;
  linker_address: string;
}
export interface MsgCreateAirdropResponse {}
export interface MsgCreateAirdropResponseProtoMsg {
  typeUrl: "/stride.airdrop.MsgCreateAirdropResponse";
  value: Uint8Array;
}
export interface MsgCreateAirdropResponseAmino {}
export interface MsgCreateAirdropResponseAminoMsg {
  type: "/stride.airdrop.MsgCreateAirdropResponse";
  value: MsgCreateAirdropResponseAmino;
}
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
  distributionStartDate?: Date;
  /**
   * The last date for rewards to be distributed. Immediately after this date
   * the rewards can no longer be claimed, but rewards have not been clawed back
   * yet
   */
  distributionEndDate?: Date;
  /**
   * Date with which the rewards are clawed back (occurs after the distribution
   * end date)
   */
  clawbackDate?: Date;
  /** Deadline for the user to make a decision on their claim type */
  claimTypeDeadlineDate?: Date;
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
export interface MsgUpdateAirdropProtoMsg {
  typeUrl: "/stride.airdrop.MsgUpdateAirdrop";
  value: Uint8Array;
}
/** UpdateAirdrop */
export interface MsgUpdateAirdropAmino {
  /** Airdrop admin address */
  admin?: string;
  /** Airdrop ID */
  airdrop_id?: string;
  /** Denom used when distributing rewards */
  reward_denom?: string;
  /** The first date that claiming begins and rewards are distributed */
  distribution_start_date?: string;
  /**
   * The last date for rewards to be distributed. Immediately after this date
   * the rewards can no longer be claimed, but rewards have not been clawed back
   * yet
   */
  distribution_end_date?: string;
  /**
   * Date with which the rewards are clawed back (occurs after the distribution
   * end date)
   */
  clawback_date?: string;
  /** Deadline for the user to make a decision on their claim type */
  claim_type_deadline_date?: string;
  /**
   * Penalty for claiming rewards early - e.g. 0.5 means claiming early will
   * result in losing 50% of rewards
   */
  early_claim_penalty?: string;
  /** Account that holds the total reward balance and distributes to users */
  distributor_address?: string;
  /** Admin account with permissions to add or update allocations */
  allocator_address?: string;
  /** Admin account with permissions to link addresseses */
  linker_address?: string;
}
export interface MsgUpdateAirdropAminoMsg {
  type: "airdrop/MsgUpdateAirdrop";
  value: MsgUpdateAirdropAmino;
}
/** UpdateAirdrop */
export interface MsgUpdateAirdropSDKType {
  admin: string;
  airdrop_id: string;
  reward_denom: string;
  distribution_start_date?: Date;
  distribution_end_date?: Date;
  clawback_date?: Date;
  claim_type_deadline_date?: Date;
  early_claim_penalty: string;
  distributor_address: string;
  allocator_address: string;
  linker_address: string;
}
export interface MsgUpdateAirdropResponse {}
export interface MsgUpdateAirdropResponseProtoMsg {
  typeUrl: "/stride.airdrop.MsgUpdateAirdropResponse";
  value: Uint8Array;
}
export interface MsgUpdateAirdropResponseAmino {}
export interface MsgUpdateAirdropResponseAminoMsg {
  type: "/stride.airdrop.MsgUpdateAirdropResponse";
  value: MsgUpdateAirdropResponseAmino;
}
export interface MsgUpdateAirdropResponseSDKType {}
/** Allocation specification when bootstrapping reward data */
export interface RawAllocation {
  userAddress: string;
  allocations: string[];
}
export interface RawAllocationProtoMsg {
  typeUrl: "/stride.airdrop.RawAllocation";
  value: Uint8Array;
}
/** Allocation specification when bootstrapping reward data */
export interface RawAllocationAmino {
  user_address?: string;
  allocations?: string[];
}
export interface RawAllocationAminoMsg {
  type: "/stride.airdrop.RawAllocation";
  value: RawAllocationAmino;
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
export interface MsgAddAllocationsProtoMsg {
  typeUrl: "/stride.airdrop.MsgAddAllocations";
  value: Uint8Array;
}
/** AddAllocations */
export interface MsgAddAllocationsAmino {
  /** Airdrop admin address */
  admin?: string;
  /** Airdrop ID */
  airdrop_id?: string;
  /** List of address/allocation pairs for each user */
  allocations?: RawAllocationAmino[];
}
export interface MsgAddAllocationsAminoMsg {
  type: "airdrop/MsgAddAllocations";
  value: MsgAddAllocationsAmino;
}
/** AddAllocations */
export interface MsgAddAllocationsSDKType {
  admin: string;
  airdrop_id: string;
  allocations: RawAllocationSDKType[];
}
export interface MsgAddAllocationsResponse {}
export interface MsgAddAllocationsResponseProtoMsg {
  typeUrl: "/stride.airdrop.MsgAddAllocationsResponse";
  value: Uint8Array;
}
export interface MsgAddAllocationsResponseAmino {}
export interface MsgAddAllocationsResponseAminoMsg {
  type: "/stride.airdrop.MsgAddAllocationsResponse";
  value: MsgAddAllocationsResponseAmino;
}
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
export interface MsgUpdateUserAllocationProtoMsg {
  typeUrl: "/stride.airdrop.MsgUpdateUserAllocation";
  value: Uint8Array;
}
/** UpdateUserAllocation */
export interface MsgUpdateUserAllocationAmino {
  /** Airdrop admin address */
  admin?: string;
  /** Airdrop ID */
  airdrop_id?: string;
  /** Address of the airdrop recipient */
  user_address?: string;
  /**
   * Allocations - as an array where each element represents the rewards for a
   * day
   */
  allocations?: string[];
}
export interface MsgUpdateUserAllocationAminoMsg {
  type: "airdrop/MsgUpdateUserAllocation";
  value: MsgUpdateUserAllocationAmino;
}
/** UpdateUserAllocation */
export interface MsgUpdateUserAllocationSDKType {
  admin: string;
  airdrop_id: string;
  user_address: string;
  allocations: string[];
}
export interface MsgUpdateUserAllocationResponse {}
export interface MsgUpdateUserAllocationResponseProtoMsg {
  typeUrl: "/stride.airdrop.MsgUpdateUserAllocationResponse";
  value: Uint8Array;
}
export interface MsgUpdateUserAllocationResponseAmino {}
export interface MsgUpdateUserAllocationResponseAminoMsg {
  type: "/stride.airdrop.MsgUpdateUserAllocationResponse";
  value: MsgUpdateUserAllocationResponseAmino;
}
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
export interface MsgLinkAddressesProtoMsg {
  typeUrl: "/stride.airdrop.MsgLinkAddresses";
  value: Uint8Array;
}
/** LinkAddresses */
export interface MsgLinkAddressesAmino {
  /** Airdrop admin address */
  admin?: string;
  /** Airdrop ID */
  airdrop_id?: string;
  /** Stride address - this address may or may not exist in allocations yet */
  stride_address?: string;
  /** Host address - this address must exist */
  host_address?: string;
}
export interface MsgLinkAddressesAminoMsg {
  type: "airdrop/MsgLinkAddresses";
  value: MsgLinkAddressesAmino;
}
/** LinkAddresses */
export interface MsgLinkAddressesSDKType {
  admin: string;
  airdrop_id: string;
  stride_address: string;
  host_address: string;
}
export interface MsgLinkAddressesResponse {}
export interface MsgLinkAddressesResponseProtoMsg {
  typeUrl: "/stride.airdrop.MsgLinkAddressesResponse";
  value: Uint8Array;
}
export interface MsgLinkAddressesResponseAmino {}
export interface MsgLinkAddressesResponseAminoMsg {
  type: "/stride.airdrop.MsgLinkAddressesResponse";
  value: MsgLinkAddressesResponseAmino;
}
export interface MsgLinkAddressesResponseSDKType {}
function createBaseMsgClaimDaily(): MsgClaimDaily {
  return {
    claimer: "",
    airdropId: ""
  };
}
export const MsgClaimDaily = {
  typeUrl: "/stride.airdrop.MsgClaimDaily",
  encode(message: MsgClaimDaily, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.claimer !== "") {
      writer.uint32(10).string(message.claimer);
    }
    if (message.airdropId !== "") {
      writer.uint32(18).string(message.airdropId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgClaimDaily {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: Partial<MsgClaimDaily>): MsgClaimDaily {
    const message = createBaseMsgClaimDaily();
    message.claimer = object.claimer ?? "";
    message.airdropId = object.airdropId ?? "";
    return message;
  },
  fromAmino(object: MsgClaimDailyAmino): MsgClaimDaily {
    const message = createBaseMsgClaimDaily();
    if (object.claimer !== undefined && object.claimer !== null) {
      message.claimer = object.claimer;
    }
    if (object.airdrop_id !== undefined && object.airdrop_id !== null) {
      message.airdropId = object.airdrop_id;
    }
    return message;
  },
  toAmino(message: MsgClaimDaily): MsgClaimDailyAmino {
    const obj: any = {};
    obj.claimer = message.claimer === "" ? undefined : message.claimer;
    obj.airdrop_id = message.airdropId === "" ? undefined : message.airdropId;
    return obj;
  },
  fromAminoMsg(object: MsgClaimDailyAminoMsg): MsgClaimDaily {
    return MsgClaimDaily.fromAmino(object.value);
  },
  toAminoMsg(message: MsgClaimDaily): MsgClaimDailyAminoMsg {
    return {
      type: "airdrop/MsgClaimDaily",
      value: MsgClaimDaily.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgClaimDailyProtoMsg): MsgClaimDaily {
    return MsgClaimDaily.decode(message.value);
  },
  toProto(message: MsgClaimDaily): Uint8Array {
    return MsgClaimDaily.encode(message).finish();
  },
  toProtoMsg(message: MsgClaimDaily): MsgClaimDailyProtoMsg {
    return {
      typeUrl: "/stride.airdrop.MsgClaimDaily",
      value: MsgClaimDaily.encode(message).finish()
    };
  }
};
function createBaseMsgClaimDailyResponse(): MsgClaimDailyResponse {
  return {};
}
export const MsgClaimDailyResponse = {
  typeUrl: "/stride.airdrop.MsgClaimDailyResponse",
  encode(_: MsgClaimDailyResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgClaimDailyResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(_: Partial<MsgClaimDailyResponse>): MsgClaimDailyResponse {
    const message = createBaseMsgClaimDailyResponse();
    return message;
  },
  fromAmino(_: MsgClaimDailyResponseAmino): MsgClaimDailyResponse {
    const message = createBaseMsgClaimDailyResponse();
    return message;
  },
  toAmino(_: MsgClaimDailyResponse): MsgClaimDailyResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgClaimDailyResponseAminoMsg): MsgClaimDailyResponse {
    return MsgClaimDailyResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgClaimDailyResponseProtoMsg): MsgClaimDailyResponse {
    return MsgClaimDailyResponse.decode(message.value);
  },
  toProto(message: MsgClaimDailyResponse): Uint8Array {
    return MsgClaimDailyResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgClaimDailyResponse): MsgClaimDailyResponseProtoMsg {
    return {
      typeUrl: "/stride.airdrop.MsgClaimDailyResponse",
      value: MsgClaimDailyResponse.encode(message).finish()
    };
  }
};
function createBaseMsgClaimEarly(): MsgClaimEarly {
  return {
    claimer: "",
    airdropId: ""
  };
}
export const MsgClaimEarly = {
  typeUrl: "/stride.airdrop.MsgClaimEarly",
  encode(message: MsgClaimEarly, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.claimer !== "") {
      writer.uint32(10).string(message.claimer);
    }
    if (message.airdropId !== "") {
      writer.uint32(18).string(message.airdropId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgClaimEarly {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: Partial<MsgClaimEarly>): MsgClaimEarly {
    const message = createBaseMsgClaimEarly();
    message.claimer = object.claimer ?? "";
    message.airdropId = object.airdropId ?? "";
    return message;
  },
  fromAmino(object: MsgClaimEarlyAmino): MsgClaimEarly {
    const message = createBaseMsgClaimEarly();
    if (object.claimer !== undefined && object.claimer !== null) {
      message.claimer = object.claimer;
    }
    if (object.airdrop_id !== undefined && object.airdrop_id !== null) {
      message.airdropId = object.airdrop_id;
    }
    return message;
  },
  toAmino(message: MsgClaimEarly): MsgClaimEarlyAmino {
    const obj: any = {};
    obj.claimer = message.claimer === "" ? undefined : message.claimer;
    obj.airdrop_id = message.airdropId === "" ? undefined : message.airdropId;
    return obj;
  },
  fromAminoMsg(object: MsgClaimEarlyAminoMsg): MsgClaimEarly {
    return MsgClaimEarly.fromAmino(object.value);
  },
  toAminoMsg(message: MsgClaimEarly): MsgClaimEarlyAminoMsg {
    return {
      type: "airdrop/MsgClaimEarly",
      value: MsgClaimEarly.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgClaimEarlyProtoMsg): MsgClaimEarly {
    return MsgClaimEarly.decode(message.value);
  },
  toProto(message: MsgClaimEarly): Uint8Array {
    return MsgClaimEarly.encode(message).finish();
  },
  toProtoMsg(message: MsgClaimEarly): MsgClaimEarlyProtoMsg {
    return {
      typeUrl: "/stride.airdrop.MsgClaimEarly",
      value: MsgClaimEarly.encode(message).finish()
    };
  }
};
function createBaseMsgClaimEarlyResponse(): MsgClaimEarlyResponse {
  return {};
}
export const MsgClaimEarlyResponse = {
  typeUrl: "/stride.airdrop.MsgClaimEarlyResponse",
  encode(_: MsgClaimEarlyResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgClaimEarlyResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(_: Partial<MsgClaimEarlyResponse>): MsgClaimEarlyResponse {
    const message = createBaseMsgClaimEarlyResponse();
    return message;
  },
  fromAmino(_: MsgClaimEarlyResponseAmino): MsgClaimEarlyResponse {
    const message = createBaseMsgClaimEarlyResponse();
    return message;
  },
  toAmino(_: MsgClaimEarlyResponse): MsgClaimEarlyResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgClaimEarlyResponseAminoMsg): MsgClaimEarlyResponse {
    return MsgClaimEarlyResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgClaimEarlyResponseProtoMsg): MsgClaimEarlyResponse {
    return MsgClaimEarlyResponse.decode(message.value);
  },
  toProto(message: MsgClaimEarlyResponse): Uint8Array {
    return MsgClaimEarlyResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgClaimEarlyResponse): MsgClaimEarlyResponseProtoMsg {
    return {
      typeUrl: "/stride.airdrop.MsgClaimEarlyResponse",
      value: MsgClaimEarlyResponse.encode(message).finish()
    };
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
  typeUrl: "/stride.airdrop.MsgCreateAirdrop",
  encode(message: MsgCreateAirdrop, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
      writer.uint32(66).string(Decimal.fromUserInput(message.earlyClaimPenalty, 18).atomics);
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
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateAirdrop {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
          message.earlyClaimPenalty = Decimal.fromAtomics(reader.string(), 18).toString();
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
  fromPartial(object: Partial<MsgCreateAirdrop>): MsgCreateAirdrop {
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
  },
  fromAmino(object: MsgCreateAirdropAmino): MsgCreateAirdrop {
    const message = createBaseMsgCreateAirdrop();
    if (object.admin !== undefined && object.admin !== null) {
      message.admin = object.admin;
    }
    if (object.airdrop_id !== undefined && object.airdrop_id !== null) {
      message.airdropId = object.airdrop_id;
    }
    if (object.reward_denom !== undefined && object.reward_denom !== null) {
      message.rewardDenom = object.reward_denom;
    }
    if (object.distribution_start_date !== undefined && object.distribution_start_date !== null) {
      message.distributionStartDate = fromTimestamp(Timestamp.fromAmino(object.distribution_start_date));
    }
    if (object.distribution_end_date !== undefined && object.distribution_end_date !== null) {
      message.distributionEndDate = fromTimestamp(Timestamp.fromAmino(object.distribution_end_date));
    }
    if (object.clawback_date !== undefined && object.clawback_date !== null) {
      message.clawbackDate = fromTimestamp(Timestamp.fromAmino(object.clawback_date));
    }
    if (object.claim_type_deadline_date !== undefined && object.claim_type_deadline_date !== null) {
      message.claimTypeDeadlineDate = fromTimestamp(Timestamp.fromAmino(object.claim_type_deadline_date));
    }
    if (object.early_claim_penalty !== undefined && object.early_claim_penalty !== null) {
      message.earlyClaimPenalty = object.early_claim_penalty;
    }
    if (object.distributor_address !== undefined && object.distributor_address !== null) {
      message.distributorAddress = object.distributor_address;
    }
    if (object.allocator_address !== undefined && object.allocator_address !== null) {
      message.allocatorAddress = object.allocator_address;
    }
    if (object.linker_address !== undefined && object.linker_address !== null) {
      message.linkerAddress = object.linker_address;
    }
    return message;
  },
  toAmino(message: MsgCreateAirdrop): MsgCreateAirdropAmino {
    const obj: any = {};
    obj.admin = message.admin === "" ? undefined : message.admin;
    obj.airdrop_id = message.airdropId === "" ? undefined : message.airdropId;
    obj.reward_denom = message.rewardDenom === "" ? undefined : message.rewardDenom;
    obj.distribution_start_date = message.distributionStartDate ? Timestamp.toAmino(toTimestamp(message.distributionStartDate)) : undefined;
    obj.distribution_end_date = message.distributionEndDate ? Timestamp.toAmino(toTimestamp(message.distributionEndDate)) : undefined;
    obj.clawback_date = message.clawbackDate ? Timestamp.toAmino(toTimestamp(message.clawbackDate)) : undefined;
    obj.claim_type_deadline_date = message.claimTypeDeadlineDate ? Timestamp.toAmino(toTimestamp(message.claimTypeDeadlineDate)) : undefined;
    obj.early_claim_penalty = message.earlyClaimPenalty === "" ? undefined : message.earlyClaimPenalty;
    obj.distributor_address = message.distributorAddress === "" ? undefined : message.distributorAddress;
    obj.allocator_address = message.allocatorAddress === "" ? undefined : message.allocatorAddress;
    obj.linker_address = message.linkerAddress === "" ? undefined : message.linkerAddress;
    return obj;
  },
  fromAminoMsg(object: MsgCreateAirdropAminoMsg): MsgCreateAirdrop {
    return MsgCreateAirdrop.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCreateAirdrop): MsgCreateAirdropAminoMsg {
    return {
      type: "airdrop/MsgCreateAirdrop",
      value: MsgCreateAirdrop.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCreateAirdropProtoMsg): MsgCreateAirdrop {
    return MsgCreateAirdrop.decode(message.value);
  },
  toProto(message: MsgCreateAirdrop): Uint8Array {
    return MsgCreateAirdrop.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateAirdrop): MsgCreateAirdropProtoMsg {
    return {
      typeUrl: "/stride.airdrop.MsgCreateAirdrop",
      value: MsgCreateAirdrop.encode(message).finish()
    };
  }
};
function createBaseMsgCreateAirdropResponse(): MsgCreateAirdropResponse {
  return {};
}
export const MsgCreateAirdropResponse = {
  typeUrl: "/stride.airdrop.MsgCreateAirdropResponse",
  encode(_: MsgCreateAirdropResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateAirdropResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(_: Partial<MsgCreateAirdropResponse>): MsgCreateAirdropResponse {
    const message = createBaseMsgCreateAirdropResponse();
    return message;
  },
  fromAmino(_: MsgCreateAirdropResponseAmino): MsgCreateAirdropResponse {
    const message = createBaseMsgCreateAirdropResponse();
    return message;
  },
  toAmino(_: MsgCreateAirdropResponse): MsgCreateAirdropResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCreateAirdropResponseAminoMsg): MsgCreateAirdropResponse {
    return MsgCreateAirdropResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateAirdropResponseProtoMsg): MsgCreateAirdropResponse {
    return MsgCreateAirdropResponse.decode(message.value);
  },
  toProto(message: MsgCreateAirdropResponse): Uint8Array {
    return MsgCreateAirdropResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateAirdropResponse): MsgCreateAirdropResponseProtoMsg {
    return {
      typeUrl: "/stride.airdrop.MsgCreateAirdropResponse",
      value: MsgCreateAirdropResponse.encode(message).finish()
    };
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
  typeUrl: "/stride.airdrop.MsgUpdateAirdrop",
  encode(message: MsgUpdateAirdrop, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
      writer.uint32(66).string(Decimal.fromUserInput(message.earlyClaimPenalty, 18).atomics);
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
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateAirdrop {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
          message.earlyClaimPenalty = Decimal.fromAtomics(reader.string(), 18).toString();
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
  fromPartial(object: Partial<MsgUpdateAirdrop>): MsgUpdateAirdrop {
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
  },
  fromAmino(object: MsgUpdateAirdropAmino): MsgUpdateAirdrop {
    const message = createBaseMsgUpdateAirdrop();
    if (object.admin !== undefined && object.admin !== null) {
      message.admin = object.admin;
    }
    if (object.airdrop_id !== undefined && object.airdrop_id !== null) {
      message.airdropId = object.airdrop_id;
    }
    if (object.reward_denom !== undefined && object.reward_denom !== null) {
      message.rewardDenom = object.reward_denom;
    }
    if (object.distribution_start_date !== undefined && object.distribution_start_date !== null) {
      message.distributionStartDate = fromTimestamp(Timestamp.fromAmino(object.distribution_start_date));
    }
    if (object.distribution_end_date !== undefined && object.distribution_end_date !== null) {
      message.distributionEndDate = fromTimestamp(Timestamp.fromAmino(object.distribution_end_date));
    }
    if (object.clawback_date !== undefined && object.clawback_date !== null) {
      message.clawbackDate = fromTimestamp(Timestamp.fromAmino(object.clawback_date));
    }
    if (object.claim_type_deadline_date !== undefined && object.claim_type_deadline_date !== null) {
      message.claimTypeDeadlineDate = fromTimestamp(Timestamp.fromAmino(object.claim_type_deadline_date));
    }
    if (object.early_claim_penalty !== undefined && object.early_claim_penalty !== null) {
      message.earlyClaimPenalty = object.early_claim_penalty;
    }
    if (object.distributor_address !== undefined && object.distributor_address !== null) {
      message.distributorAddress = object.distributor_address;
    }
    if (object.allocator_address !== undefined && object.allocator_address !== null) {
      message.allocatorAddress = object.allocator_address;
    }
    if (object.linker_address !== undefined && object.linker_address !== null) {
      message.linkerAddress = object.linker_address;
    }
    return message;
  },
  toAmino(message: MsgUpdateAirdrop): MsgUpdateAirdropAmino {
    const obj: any = {};
    obj.admin = message.admin === "" ? undefined : message.admin;
    obj.airdrop_id = message.airdropId === "" ? undefined : message.airdropId;
    obj.reward_denom = message.rewardDenom === "" ? undefined : message.rewardDenom;
    obj.distribution_start_date = message.distributionStartDate ? Timestamp.toAmino(toTimestamp(message.distributionStartDate)) : undefined;
    obj.distribution_end_date = message.distributionEndDate ? Timestamp.toAmino(toTimestamp(message.distributionEndDate)) : undefined;
    obj.clawback_date = message.clawbackDate ? Timestamp.toAmino(toTimestamp(message.clawbackDate)) : undefined;
    obj.claim_type_deadline_date = message.claimTypeDeadlineDate ? Timestamp.toAmino(toTimestamp(message.claimTypeDeadlineDate)) : undefined;
    obj.early_claim_penalty = message.earlyClaimPenalty === "" ? undefined : message.earlyClaimPenalty;
    obj.distributor_address = message.distributorAddress === "" ? undefined : message.distributorAddress;
    obj.allocator_address = message.allocatorAddress === "" ? undefined : message.allocatorAddress;
    obj.linker_address = message.linkerAddress === "" ? undefined : message.linkerAddress;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateAirdropAminoMsg): MsgUpdateAirdrop {
    return MsgUpdateAirdrop.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateAirdrop): MsgUpdateAirdropAminoMsg {
    return {
      type: "airdrop/MsgUpdateAirdrop",
      value: MsgUpdateAirdrop.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateAirdropProtoMsg): MsgUpdateAirdrop {
    return MsgUpdateAirdrop.decode(message.value);
  },
  toProto(message: MsgUpdateAirdrop): Uint8Array {
    return MsgUpdateAirdrop.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateAirdrop): MsgUpdateAirdropProtoMsg {
    return {
      typeUrl: "/stride.airdrop.MsgUpdateAirdrop",
      value: MsgUpdateAirdrop.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateAirdropResponse(): MsgUpdateAirdropResponse {
  return {};
}
export const MsgUpdateAirdropResponse = {
  typeUrl: "/stride.airdrop.MsgUpdateAirdropResponse",
  encode(_: MsgUpdateAirdropResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateAirdropResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(_: Partial<MsgUpdateAirdropResponse>): MsgUpdateAirdropResponse {
    const message = createBaseMsgUpdateAirdropResponse();
    return message;
  },
  fromAmino(_: MsgUpdateAirdropResponseAmino): MsgUpdateAirdropResponse {
    const message = createBaseMsgUpdateAirdropResponse();
    return message;
  },
  toAmino(_: MsgUpdateAirdropResponse): MsgUpdateAirdropResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateAirdropResponseAminoMsg): MsgUpdateAirdropResponse {
    return MsgUpdateAirdropResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateAirdropResponseProtoMsg): MsgUpdateAirdropResponse {
    return MsgUpdateAirdropResponse.decode(message.value);
  },
  toProto(message: MsgUpdateAirdropResponse): Uint8Array {
    return MsgUpdateAirdropResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateAirdropResponse): MsgUpdateAirdropResponseProtoMsg {
    return {
      typeUrl: "/stride.airdrop.MsgUpdateAirdropResponse",
      value: MsgUpdateAirdropResponse.encode(message).finish()
    };
  }
};
function createBaseRawAllocation(): RawAllocation {
  return {
    userAddress: "",
    allocations: []
  };
}
export const RawAllocation = {
  typeUrl: "/stride.airdrop.RawAllocation",
  encode(message: RawAllocation, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.userAddress !== "") {
      writer.uint32(10).string(message.userAddress);
    }
    for (const v of message.allocations) {
      writer.uint32(34).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RawAllocation {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: Partial<RawAllocation>): RawAllocation {
    const message = createBaseRawAllocation();
    message.userAddress = object.userAddress ?? "";
    message.allocations = object.allocations?.map(e => e) || [];
    return message;
  },
  fromAmino(object: RawAllocationAmino): RawAllocation {
    const message = createBaseRawAllocation();
    if (object.user_address !== undefined && object.user_address !== null) {
      message.userAddress = object.user_address;
    }
    message.allocations = object.allocations?.map(e => e) || [];
    return message;
  },
  toAmino(message: RawAllocation): RawAllocationAmino {
    const obj: any = {};
    obj.user_address = message.userAddress === "" ? undefined : message.userAddress;
    if (message.allocations) {
      obj.allocations = message.allocations.map(e => e);
    } else {
      obj.allocations = message.allocations;
    }
    return obj;
  },
  fromAminoMsg(object: RawAllocationAminoMsg): RawAllocation {
    return RawAllocation.fromAmino(object.value);
  },
  fromProtoMsg(message: RawAllocationProtoMsg): RawAllocation {
    return RawAllocation.decode(message.value);
  },
  toProto(message: RawAllocation): Uint8Array {
    return RawAllocation.encode(message).finish();
  },
  toProtoMsg(message: RawAllocation): RawAllocationProtoMsg {
    return {
      typeUrl: "/stride.airdrop.RawAllocation",
      value: RawAllocation.encode(message).finish()
    };
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
  typeUrl: "/stride.airdrop.MsgAddAllocations",
  encode(message: MsgAddAllocations, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAddAllocations {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: Partial<MsgAddAllocations>): MsgAddAllocations {
    const message = createBaseMsgAddAllocations();
    message.admin = object.admin ?? "";
    message.airdropId = object.airdropId ?? "";
    message.allocations = object.allocations?.map(e => RawAllocation.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgAddAllocationsAmino): MsgAddAllocations {
    const message = createBaseMsgAddAllocations();
    if (object.admin !== undefined && object.admin !== null) {
      message.admin = object.admin;
    }
    if (object.airdrop_id !== undefined && object.airdrop_id !== null) {
      message.airdropId = object.airdrop_id;
    }
    message.allocations = object.allocations?.map(e => RawAllocation.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgAddAllocations): MsgAddAllocationsAmino {
    const obj: any = {};
    obj.admin = message.admin === "" ? undefined : message.admin;
    obj.airdrop_id = message.airdropId === "" ? undefined : message.airdropId;
    if (message.allocations) {
      obj.allocations = message.allocations.map(e => e ? RawAllocation.toAmino(e) : undefined);
    } else {
      obj.allocations = message.allocations;
    }
    return obj;
  },
  fromAminoMsg(object: MsgAddAllocationsAminoMsg): MsgAddAllocations {
    return MsgAddAllocations.fromAmino(object.value);
  },
  toAminoMsg(message: MsgAddAllocations): MsgAddAllocationsAminoMsg {
    return {
      type: "airdrop/MsgAddAllocations",
      value: MsgAddAllocations.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgAddAllocationsProtoMsg): MsgAddAllocations {
    return MsgAddAllocations.decode(message.value);
  },
  toProto(message: MsgAddAllocations): Uint8Array {
    return MsgAddAllocations.encode(message).finish();
  },
  toProtoMsg(message: MsgAddAllocations): MsgAddAllocationsProtoMsg {
    return {
      typeUrl: "/stride.airdrop.MsgAddAllocations",
      value: MsgAddAllocations.encode(message).finish()
    };
  }
};
function createBaseMsgAddAllocationsResponse(): MsgAddAllocationsResponse {
  return {};
}
export const MsgAddAllocationsResponse = {
  typeUrl: "/stride.airdrop.MsgAddAllocationsResponse",
  encode(_: MsgAddAllocationsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAddAllocationsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(_: Partial<MsgAddAllocationsResponse>): MsgAddAllocationsResponse {
    const message = createBaseMsgAddAllocationsResponse();
    return message;
  },
  fromAmino(_: MsgAddAllocationsResponseAmino): MsgAddAllocationsResponse {
    const message = createBaseMsgAddAllocationsResponse();
    return message;
  },
  toAmino(_: MsgAddAllocationsResponse): MsgAddAllocationsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgAddAllocationsResponseAminoMsg): MsgAddAllocationsResponse {
    return MsgAddAllocationsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAddAllocationsResponseProtoMsg): MsgAddAllocationsResponse {
    return MsgAddAllocationsResponse.decode(message.value);
  },
  toProto(message: MsgAddAllocationsResponse): Uint8Array {
    return MsgAddAllocationsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgAddAllocationsResponse): MsgAddAllocationsResponseProtoMsg {
    return {
      typeUrl: "/stride.airdrop.MsgAddAllocationsResponse",
      value: MsgAddAllocationsResponse.encode(message).finish()
    };
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
  typeUrl: "/stride.airdrop.MsgUpdateUserAllocation",
  encode(message: MsgUpdateUserAllocation, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateUserAllocation {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: Partial<MsgUpdateUserAllocation>): MsgUpdateUserAllocation {
    const message = createBaseMsgUpdateUserAllocation();
    message.admin = object.admin ?? "";
    message.airdropId = object.airdropId ?? "";
    message.userAddress = object.userAddress ?? "";
    message.allocations = object.allocations?.map(e => e) || [];
    return message;
  },
  fromAmino(object: MsgUpdateUserAllocationAmino): MsgUpdateUserAllocation {
    const message = createBaseMsgUpdateUserAllocation();
    if (object.admin !== undefined && object.admin !== null) {
      message.admin = object.admin;
    }
    if (object.airdrop_id !== undefined && object.airdrop_id !== null) {
      message.airdropId = object.airdrop_id;
    }
    if (object.user_address !== undefined && object.user_address !== null) {
      message.userAddress = object.user_address;
    }
    message.allocations = object.allocations?.map(e => e) || [];
    return message;
  },
  toAmino(message: MsgUpdateUserAllocation): MsgUpdateUserAllocationAmino {
    const obj: any = {};
    obj.admin = message.admin === "" ? undefined : message.admin;
    obj.airdrop_id = message.airdropId === "" ? undefined : message.airdropId;
    obj.user_address = message.userAddress === "" ? undefined : message.userAddress;
    if (message.allocations) {
      obj.allocations = message.allocations.map(e => e);
    } else {
      obj.allocations = message.allocations;
    }
    return obj;
  },
  fromAminoMsg(object: MsgUpdateUserAllocationAminoMsg): MsgUpdateUserAllocation {
    return MsgUpdateUserAllocation.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateUserAllocation): MsgUpdateUserAllocationAminoMsg {
    return {
      type: "airdrop/MsgUpdateUserAllocation",
      value: MsgUpdateUserAllocation.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateUserAllocationProtoMsg): MsgUpdateUserAllocation {
    return MsgUpdateUserAllocation.decode(message.value);
  },
  toProto(message: MsgUpdateUserAllocation): Uint8Array {
    return MsgUpdateUserAllocation.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateUserAllocation): MsgUpdateUserAllocationProtoMsg {
    return {
      typeUrl: "/stride.airdrop.MsgUpdateUserAllocation",
      value: MsgUpdateUserAllocation.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateUserAllocationResponse(): MsgUpdateUserAllocationResponse {
  return {};
}
export const MsgUpdateUserAllocationResponse = {
  typeUrl: "/stride.airdrop.MsgUpdateUserAllocationResponse",
  encode(_: MsgUpdateUserAllocationResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateUserAllocationResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(_: Partial<MsgUpdateUserAllocationResponse>): MsgUpdateUserAllocationResponse {
    const message = createBaseMsgUpdateUserAllocationResponse();
    return message;
  },
  fromAmino(_: MsgUpdateUserAllocationResponseAmino): MsgUpdateUserAllocationResponse {
    const message = createBaseMsgUpdateUserAllocationResponse();
    return message;
  },
  toAmino(_: MsgUpdateUserAllocationResponse): MsgUpdateUserAllocationResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateUserAllocationResponseAminoMsg): MsgUpdateUserAllocationResponse {
    return MsgUpdateUserAllocationResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateUserAllocationResponseProtoMsg): MsgUpdateUserAllocationResponse {
    return MsgUpdateUserAllocationResponse.decode(message.value);
  },
  toProto(message: MsgUpdateUserAllocationResponse): Uint8Array {
    return MsgUpdateUserAllocationResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateUserAllocationResponse): MsgUpdateUserAllocationResponseProtoMsg {
    return {
      typeUrl: "/stride.airdrop.MsgUpdateUserAllocationResponse",
      value: MsgUpdateUserAllocationResponse.encode(message).finish()
    };
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
  typeUrl: "/stride.airdrop.MsgLinkAddresses",
  encode(message: MsgLinkAddresses, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number): MsgLinkAddresses {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: Partial<MsgLinkAddresses>): MsgLinkAddresses {
    const message = createBaseMsgLinkAddresses();
    message.admin = object.admin ?? "";
    message.airdropId = object.airdropId ?? "";
    message.strideAddress = object.strideAddress ?? "";
    message.hostAddress = object.hostAddress ?? "";
    return message;
  },
  fromAmino(object: MsgLinkAddressesAmino): MsgLinkAddresses {
    const message = createBaseMsgLinkAddresses();
    if (object.admin !== undefined && object.admin !== null) {
      message.admin = object.admin;
    }
    if (object.airdrop_id !== undefined && object.airdrop_id !== null) {
      message.airdropId = object.airdrop_id;
    }
    if (object.stride_address !== undefined && object.stride_address !== null) {
      message.strideAddress = object.stride_address;
    }
    if (object.host_address !== undefined && object.host_address !== null) {
      message.hostAddress = object.host_address;
    }
    return message;
  },
  toAmino(message: MsgLinkAddresses): MsgLinkAddressesAmino {
    const obj: any = {};
    obj.admin = message.admin === "" ? undefined : message.admin;
    obj.airdrop_id = message.airdropId === "" ? undefined : message.airdropId;
    obj.stride_address = message.strideAddress === "" ? undefined : message.strideAddress;
    obj.host_address = message.hostAddress === "" ? undefined : message.hostAddress;
    return obj;
  },
  fromAminoMsg(object: MsgLinkAddressesAminoMsg): MsgLinkAddresses {
    return MsgLinkAddresses.fromAmino(object.value);
  },
  toAminoMsg(message: MsgLinkAddresses): MsgLinkAddressesAminoMsg {
    return {
      type: "airdrop/MsgLinkAddresses",
      value: MsgLinkAddresses.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgLinkAddressesProtoMsg): MsgLinkAddresses {
    return MsgLinkAddresses.decode(message.value);
  },
  toProto(message: MsgLinkAddresses): Uint8Array {
    return MsgLinkAddresses.encode(message).finish();
  },
  toProtoMsg(message: MsgLinkAddresses): MsgLinkAddressesProtoMsg {
    return {
      typeUrl: "/stride.airdrop.MsgLinkAddresses",
      value: MsgLinkAddresses.encode(message).finish()
    };
  }
};
function createBaseMsgLinkAddressesResponse(): MsgLinkAddressesResponse {
  return {};
}
export const MsgLinkAddressesResponse = {
  typeUrl: "/stride.airdrop.MsgLinkAddressesResponse",
  encode(_: MsgLinkAddressesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgLinkAddressesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(_: Partial<MsgLinkAddressesResponse>): MsgLinkAddressesResponse {
    const message = createBaseMsgLinkAddressesResponse();
    return message;
  },
  fromAmino(_: MsgLinkAddressesResponseAmino): MsgLinkAddressesResponse {
    const message = createBaseMsgLinkAddressesResponse();
    return message;
  },
  toAmino(_: MsgLinkAddressesResponse): MsgLinkAddressesResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgLinkAddressesResponseAminoMsg): MsgLinkAddressesResponse {
    return MsgLinkAddressesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgLinkAddressesResponseProtoMsg): MsgLinkAddressesResponse {
    return MsgLinkAddressesResponse.decode(message.value);
  },
  toProto(message: MsgLinkAddressesResponse): Uint8Array {
    return MsgLinkAddressesResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgLinkAddressesResponse): MsgLinkAddressesResponseProtoMsg {
    return {
      typeUrl: "/stride.airdrop.MsgLinkAddressesResponse",
      value: MsgLinkAddressesResponse.encode(message).finish()
    };
  }
};