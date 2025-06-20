import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { Timestamp } from "../../google/protobuf/timestamp";
import { Airdrop, AirdropAmino, AirdropSDKType, UserAllocation, UserAllocationAmino, UserAllocationSDKType } from "./airdrop";
import { BinaryReader, BinaryWriter } from "../../binary";
import { toTimestamp, fromTimestamp } from "../../helpers";
import { Decimal } from "../../decimals";
/** Airdrop */
export interface QueryAirdropRequest {
  id: string;
}
export interface QueryAirdropRequestProtoMsg {
  typeUrl: "/stride.airdrop.QueryAirdropRequest";
  value: Uint8Array;
}
/**
 * Airdrop
 * @name QueryAirdropRequestAmino
 * @package stride.airdrop
 * @see proto type: stride.airdrop.QueryAirdropRequest
 */
export interface QueryAirdropRequestAmino {
  id?: string;
}
export interface QueryAirdropRequestAminoMsg {
  type: "/stride.airdrop.QueryAirdropRequest";
  value: QueryAirdropRequestAmino;
}
/** Airdrop */
export interface QueryAirdropRequestSDKType {
  id: string;
}
export interface QueryAirdropResponse {
  /** Airdrop ID */
  id: string;
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
  /** The current date index into the airdrop array */
  currentDateIndex: bigint;
  /** The length of the airdrop (i.e. number of periods in the airdrop array) */
  airdropLength: bigint;
}
export interface QueryAirdropResponseProtoMsg {
  typeUrl: "/stride.airdrop.QueryAirdropResponse";
  value: Uint8Array;
}
/**
 * @name QueryAirdropResponseAmino
 * @package stride.airdrop
 * @see proto type: stride.airdrop.QueryAirdropResponse
 */
export interface QueryAirdropResponseAmino {
  /**
   * Airdrop ID
   */
  id?: string;
  /**
   * Denom used when distributing rewards
   */
  reward_denom?: string;
  /**
   * The first date that claiming begins and rewards are distributed
   */
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
  /**
   * Deadline for the user to make a decision on their claim type
   */
  claim_type_deadline_date?: string;
  /**
   * Penalty for claiming rewards early - e.g. 0.5 means claiming early will
   * result in losing 50% of rewards
   */
  early_claim_penalty?: string;
  /**
   * Account that holds the total reward balance and distributes to users
   */
  distributor_address?: string;
  /**
   * Admin account with permissions to add or update allocations
   */
  allocator_address?: string;
  /**
   * Admin account with permissions to link addresseses
   */
  linker_address?: string;
  /**
   * The current date index into the airdrop array
   */
  current_date_index?: string;
  /**
   * The length of the airdrop (i.e. number of periods in the airdrop array)
   */
  airdrop_length?: string;
}
export interface QueryAirdropResponseAminoMsg {
  type: "/stride.airdrop.QueryAirdropResponse";
  value: QueryAirdropResponseAmino;
}
export interface QueryAirdropResponseSDKType {
  id: string;
  reward_denom: string;
  distribution_start_date?: Date;
  distribution_end_date?: Date;
  clawback_date?: Date;
  claim_type_deadline_date?: Date;
  early_claim_penalty: string;
  distributor_address: string;
  allocator_address: string;
  linker_address: string;
  current_date_index: bigint;
  airdrop_length: bigint;
}
/** Airdrops */
export interface QueryAllAirdropsRequest {}
export interface QueryAllAirdropsRequestProtoMsg {
  typeUrl: "/stride.airdrop.QueryAllAirdropsRequest";
  value: Uint8Array;
}
/**
 * Airdrops
 * @name QueryAllAirdropsRequestAmino
 * @package stride.airdrop
 * @see proto type: stride.airdrop.QueryAllAirdropsRequest
 */
export interface QueryAllAirdropsRequestAmino {}
export interface QueryAllAirdropsRequestAminoMsg {
  type: "/stride.airdrop.QueryAllAirdropsRequest";
  value: QueryAllAirdropsRequestAmino;
}
/** Airdrops */
export interface QueryAllAirdropsRequestSDKType {}
export interface QueryAllAirdropsResponse {
  airdrops: Airdrop[];
}
export interface QueryAllAirdropsResponseProtoMsg {
  typeUrl: "/stride.airdrop.QueryAllAirdropsResponse";
  value: Uint8Array;
}
/**
 * @name QueryAllAirdropsResponseAmino
 * @package stride.airdrop
 * @see proto type: stride.airdrop.QueryAllAirdropsResponse
 */
export interface QueryAllAirdropsResponseAmino {
  airdrops?: AirdropAmino[];
}
export interface QueryAllAirdropsResponseAminoMsg {
  type: "/stride.airdrop.QueryAllAirdropsResponse";
  value: QueryAllAirdropsResponseAmino;
}
export interface QueryAllAirdropsResponseSDKType {
  airdrops: AirdropSDKType[];
}
/** UserAllocation */
export interface QueryUserAllocationRequest {
  airdropId: string;
  address: string;
}
export interface QueryUserAllocationRequestProtoMsg {
  typeUrl: "/stride.airdrop.QueryUserAllocationRequest";
  value: Uint8Array;
}
/**
 * UserAllocation
 * @name QueryUserAllocationRequestAmino
 * @package stride.airdrop
 * @see proto type: stride.airdrop.QueryUserAllocationRequest
 */
export interface QueryUserAllocationRequestAmino {
  airdrop_id?: string;
  address?: string;
}
export interface QueryUserAllocationRequestAminoMsg {
  type: "/stride.airdrop.QueryUserAllocationRequest";
  value: QueryUserAllocationRequestAmino;
}
/** UserAllocation */
export interface QueryUserAllocationRequestSDKType {
  airdrop_id: string;
  address: string;
}
export interface QueryUserAllocationResponse {
  userAllocation?: UserAllocation;
}
export interface QueryUserAllocationResponseProtoMsg {
  typeUrl: "/stride.airdrop.QueryUserAllocationResponse";
  value: Uint8Array;
}
/**
 * @name QueryUserAllocationResponseAmino
 * @package stride.airdrop
 * @see proto type: stride.airdrop.QueryUserAllocationResponse
 */
export interface QueryUserAllocationResponseAmino {
  user_allocation?: UserAllocationAmino;
}
export interface QueryUserAllocationResponseAminoMsg {
  type: "/stride.airdrop.QueryUserAllocationResponse";
  value: QueryUserAllocationResponseAmino;
}
export interface QueryUserAllocationResponseSDKType {
  user_allocation?: UserAllocationSDKType;
}
/** UserAllocations */
export interface QueryUserAllocationsRequest {
  address: string;
}
export interface QueryUserAllocationsRequestProtoMsg {
  typeUrl: "/stride.airdrop.QueryUserAllocationsRequest";
  value: Uint8Array;
}
/**
 * UserAllocations
 * @name QueryUserAllocationsRequestAmino
 * @package stride.airdrop
 * @see proto type: stride.airdrop.QueryUserAllocationsRequest
 */
export interface QueryUserAllocationsRequestAmino {
  address?: string;
}
export interface QueryUserAllocationsRequestAminoMsg {
  type: "/stride.airdrop.QueryUserAllocationsRequest";
  value: QueryUserAllocationsRequestAmino;
}
/** UserAllocations */
export interface QueryUserAllocationsRequestSDKType {
  address: string;
}
export interface QueryUserAllocationsResponse {
  userAllocations: UserAllocation[];
}
export interface QueryUserAllocationsResponseProtoMsg {
  typeUrl: "/stride.airdrop.QueryUserAllocationsResponse";
  value: Uint8Array;
}
/**
 * @name QueryUserAllocationsResponseAmino
 * @package stride.airdrop
 * @see proto type: stride.airdrop.QueryUserAllocationsResponse
 */
export interface QueryUserAllocationsResponseAmino {
  user_allocations?: UserAllocationAmino[];
}
export interface QueryUserAllocationsResponseAminoMsg {
  type: "/stride.airdrop.QueryUserAllocationsResponse";
  value: QueryUserAllocationsResponseAmino;
}
export interface QueryUserAllocationsResponseSDKType {
  user_allocations: UserAllocationSDKType[];
}
/** AllAllocations */
export interface QueryAllAllocationsRequest {
  airdropId: string;
  pagination?: PageRequest;
}
export interface QueryAllAllocationsRequestProtoMsg {
  typeUrl: "/stride.airdrop.QueryAllAllocationsRequest";
  value: Uint8Array;
}
/**
 * AllAllocations
 * @name QueryAllAllocationsRequestAmino
 * @package stride.airdrop
 * @see proto type: stride.airdrop.QueryAllAllocationsRequest
 */
export interface QueryAllAllocationsRequestAmino {
  airdrop_id?: string;
  pagination?: PageRequestAmino;
}
export interface QueryAllAllocationsRequestAminoMsg {
  type: "/stride.airdrop.QueryAllAllocationsRequest";
  value: QueryAllAllocationsRequestAmino;
}
/** AllAllocations */
export interface QueryAllAllocationsRequestSDKType {
  airdrop_id: string;
  pagination?: PageRequestSDKType;
}
export interface QueryAllAllocationsResponse {
  allocations: UserAllocation[];
  pagination?: PageResponse;
}
export interface QueryAllAllocationsResponseProtoMsg {
  typeUrl: "/stride.airdrop.QueryAllAllocationsResponse";
  value: Uint8Array;
}
/**
 * @name QueryAllAllocationsResponseAmino
 * @package stride.airdrop
 * @see proto type: stride.airdrop.QueryAllAllocationsResponse
 */
export interface QueryAllAllocationsResponseAmino {
  allocations?: UserAllocationAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllAllocationsResponseAminoMsg {
  type: "/stride.airdrop.QueryAllAllocationsResponse";
  value: QueryAllAllocationsResponseAmino;
}
export interface QueryAllAllocationsResponseSDKType {
  allocations: UserAllocationSDKType[];
  pagination?: PageResponseSDKType;
}
/** UserSummary */
export interface QueryUserSummaryRequest {
  airdropId: string;
  address: string;
}
export interface QueryUserSummaryRequestProtoMsg {
  typeUrl: "/stride.airdrop.QueryUserSummaryRequest";
  value: Uint8Array;
}
/**
 * UserSummary
 * @name QueryUserSummaryRequestAmino
 * @package stride.airdrop
 * @see proto type: stride.airdrop.QueryUserSummaryRequest
 */
export interface QueryUserSummaryRequestAmino {
  airdrop_id?: string;
  address?: string;
}
export interface QueryUserSummaryRequestAminoMsg {
  type: "/stride.airdrop.QueryUserSummaryRequest";
  value: QueryUserSummaryRequestAmino;
}
/** UserSummary */
export interface QueryUserSummaryRequestSDKType {
  airdrop_id: string;
  address: string;
}
export interface QueryUserSummaryResponse {
  /** The claim type (claim daily or claim early) */
  claimType: string;
  /** The total rewards claimed so far */
  claimed: string;
  /** The total rewards forfeited (in the case of claiming early) */
  forfeited: string;
  /** The total rewards remaining */
  remaining: string;
  /** The total rewards that can be claimed right now */
  claimable: string;
}
export interface QueryUserSummaryResponseProtoMsg {
  typeUrl: "/stride.airdrop.QueryUserSummaryResponse";
  value: Uint8Array;
}
/**
 * @name QueryUserSummaryResponseAmino
 * @package stride.airdrop
 * @see proto type: stride.airdrop.QueryUserSummaryResponse
 */
export interface QueryUserSummaryResponseAmino {
  /**
   * The claim type (claim daily or claim early)
   */
  claim_type?: string;
  /**
   * The total rewards claimed so far
   */
  claimed?: string;
  /**
   * The total rewards forfeited (in the case of claiming early)
   */
  forfeited?: string;
  /**
   * The total rewards remaining
   */
  remaining?: string;
  /**
   * The total rewards that can be claimed right now
   */
  claimable?: string;
}
export interface QueryUserSummaryResponseAminoMsg {
  type: "/stride.airdrop.QueryUserSummaryResponse";
  value: QueryUserSummaryResponseAmino;
}
export interface QueryUserSummaryResponseSDKType {
  claim_type: string;
  claimed: string;
  forfeited: string;
  remaining: string;
  claimable: string;
}
function createBaseQueryAirdropRequest(): QueryAirdropRequest {
  return {
    id: ""
  };
}
export const QueryAirdropRequest = {
  typeUrl: "/stride.airdrop.QueryAirdropRequest",
  encode(message: QueryAirdropRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAirdropRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAirdropRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryAirdropRequest>): QueryAirdropRequest {
    const message = createBaseQueryAirdropRequest();
    message.id = object.id ?? "";
    return message;
  },
  fromAmino(object: QueryAirdropRequestAmino): QueryAirdropRequest {
    const message = createBaseQueryAirdropRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    return message;
  },
  toAmino(message: QueryAirdropRequest): QueryAirdropRequestAmino {
    const obj: any = {};
    obj.id = message.id === "" ? undefined : message.id;
    return obj;
  },
  fromAminoMsg(object: QueryAirdropRequestAminoMsg): QueryAirdropRequest {
    return QueryAirdropRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAirdropRequestProtoMsg): QueryAirdropRequest {
    return QueryAirdropRequest.decode(message.value);
  },
  toProto(message: QueryAirdropRequest): Uint8Array {
    return QueryAirdropRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAirdropRequest): QueryAirdropRequestProtoMsg {
    return {
      typeUrl: "/stride.airdrop.QueryAirdropRequest",
      value: QueryAirdropRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAirdropResponse(): QueryAirdropResponse {
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
    linkerAddress: "",
    currentDateIndex: BigInt(0),
    airdropLength: BigInt(0)
  };
}
export const QueryAirdropResponse = {
  typeUrl: "/stride.airdrop.QueryAirdropResponse",
  encode(message: QueryAirdropResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
      writer.uint32(58).string(Decimal.fromUserInput(message.earlyClaimPenalty, 18).atomics);
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
    if (message.currentDateIndex !== BigInt(0)) {
      writer.uint32(88).int64(message.currentDateIndex);
    }
    if (message.airdropLength !== BigInt(0)) {
      writer.uint32(96).int64(message.airdropLength);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAirdropResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAirdropResponse();
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
          message.earlyClaimPenalty = Decimal.fromAtomics(reader.string(), 18).toString();
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
        case 11:
          message.currentDateIndex = reader.int64();
          break;
        case 12:
          message.airdropLength = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryAirdropResponse>): QueryAirdropResponse {
    const message = createBaseQueryAirdropResponse();
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
    message.currentDateIndex = object.currentDateIndex !== undefined && object.currentDateIndex !== null ? BigInt(object.currentDateIndex.toString()) : BigInt(0);
    message.airdropLength = object.airdropLength !== undefined && object.airdropLength !== null ? BigInt(object.airdropLength.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryAirdropResponseAmino): QueryAirdropResponse {
    const message = createBaseQueryAirdropResponse();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
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
    if (object.current_date_index !== undefined && object.current_date_index !== null) {
      message.currentDateIndex = BigInt(object.current_date_index);
    }
    if (object.airdrop_length !== undefined && object.airdrop_length !== null) {
      message.airdropLength = BigInt(object.airdrop_length);
    }
    return message;
  },
  toAmino(message: QueryAirdropResponse): QueryAirdropResponseAmino {
    const obj: any = {};
    obj.id = message.id === "" ? undefined : message.id;
    obj.reward_denom = message.rewardDenom === "" ? undefined : message.rewardDenom;
    obj.distribution_start_date = message.distributionStartDate ? Timestamp.toAmino(toTimestamp(message.distributionStartDate)) : undefined;
    obj.distribution_end_date = message.distributionEndDate ? Timestamp.toAmino(toTimestamp(message.distributionEndDate)) : undefined;
    obj.clawback_date = message.clawbackDate ? Timestamp.toAmino(toTimestamp(message.clawbackDate)) : undefined;
    obj.claim_type_deadline_date = message.claimTypeDeadlineDate ? Timestamp.toAmino(toTimestamp(message.claimTypeDeadlineDate)) : undefined;
    obj.early_claim_penalty = message.earlyClaimPenalty === "" ? undefined : message.earlyClaimPenalty;
    obj.distributor_address = message.distributorAddress === "" ? undefined : message.distributorAddress;
    obj.allocator_address = message.allocatorAddress === "" ? undefined : message.allocatorAddress;
    obj.linker_address = message.linkerAddress === "" ? undefined : message.linkerAddress;
    obj.current_date_index = message.currentDateIndex !== BigInt(0) ? message.currentDateIndex?.toString() : undefined;
    obj.airdrop_length = message.airdropLength !== BigInt(0) ? message.airdropLength?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAirdropResponseAminoMsg): QueryAirdropResponse {
    return QueryAirdropResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAirdropResponseProtoMsg): QueryAirdropResponse {
    return QueryAirdropResponse.decode(message.value);
  },
  toProto(message: QueryAirdropResponse): Uint8Array {
    return QueryAirdropResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAirdropResponse): QueryAirdropResponseProtoMsg {
    return {
      typeUrl: "/stride.airdrop.QueryAirdropResponse",
      value: QueryAirdropResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllAirdropsRequest(): QueryAllAirdropsRequest {
  return {};
}
export const QueryAllAirdropsRequest = {
  typeUrl: "/stride.airdrop.QueryAllAirdropsRequest",
  encode(_: QueryAllAirdropsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllAirdropsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllAirdropsRequest();
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
  fromPartial(_: Partial<QueryAllAirdropsRequest>): QueryAllAirdropsRequest {
    const message = createBaseQueryAllAirdropsRequest();
    return message;
  },
  fromAmino(_: QueryAllAirdropsRequestAmino): QueryAllAirdropsRequest {
    const message = createBaseQueryAllAirdropsRequest();
    return message;
  },
  toAmino(_: QueryAllAirdropsRequest): QueryAllAirdropsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryAllAirdropsRequestAminoMsg): QueryAllAirdropsRequest {
    return QueryAllAirdropsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllAirdropsRequestProtoMsg): QueryAllAirdropsRequest {
    return QueryAllAirdropsRequest.decode(message.value);
  },
  toProto(message: QueryAllAirdropsRequest): Uint8Array {
    return QueryAllAirdropsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllAirdropsRequest): QueryAllAirdropsRequestProtoMsg {
    return {
      typeUrl: "/stride.airdrop.QueryAllAirdropsRequest",
      value: QueryAllAirdropsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllAirdropsResponse(): QueryAllAirdropsResponse {
  return {
    airdrops: []
  };
}
export const QueryAllAirdropsResponse = {
  typeUrl: "/stride.airdrop.QueryAllAirdropsResponse",
  encode(message: QueryAllAirdropsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.airdrops) {
      Airdrop.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllAirdropsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllAirdropsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.airdrops.push(Airdrop.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryAllAirdropsResponse>): QueryAllAirdropsResponse {
    const message = createBaseQueryAllAirdropsResponse();
    message.airdrops = object.airdrops?.map(e => Airdrop.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryAllAirdropsResponseAmino): QueryAllAirdropsResponse {
    const message = createBaseQueryAllAirdropsResponse();
    message.airdrops = object.airdrops?.map(e => Airdrop.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryAllAirdropsResponse): QueryAllAirdropsResponseAmino {
    const obj: any = {};
    if (message.airdrops) {
      obj.airdrops = message.airdrops.map(e => e ? Airdrop.toAmino(e) : undefined);
    } else {
      obj.airdrops = message.airdrops;
    }
    return obj;
  },
  fromAminoMsg(object: QueryAllAirdropsResponseAminoMsg): QueryAllAirdropsResponse {
    return QueryAllAirdropsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllAirdropsResponseProtoMsg): QueryAllAirdropsResponse {
    return QueryAllAirdropsResponse.decode(message.value);
  },
  toProto(message: QueryAllAirdropsResponse): Uint8Array {
    return QueryAllAirdropsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllAirdropsResponse): QueryAllAirdropsResponseProtoMsg {
    return {
      typeUrl: "/stride.airdrop.QueryAllAirdropsResponse",
      value: QueryAllAirdropsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryUserAllocationRequest(): QueryUserAllocationRequest {
  return {
    airdropId: "",
    address: ""
  };
}
export const QueryUserAllocationRequest = {
  typeUrl: "/stride.airdrop.QueryUserAllocationRequest",
  encode(message: QueryUserAllocationRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.airdropId !== "") {
      writer.uint32(10).string(message.airdropId);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryUserAllocationRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUserAllocationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.airdropId = reader.string();
          break;
        case 2:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryUserAllocationRequest>): QueryUserAllocationRequest {
    const message = createBaseQueryUserAllocationRequest();
    message.airdropId = object.airdropId ?? "";
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: QueryUserAllocationRequestAmino): QueryUserAllocationRequest {
    const message = createBaseQueryUserAllocationRequest();
    if (object.airdrop_id !== undefined && object.airdrop_id !== null) {
      message.airdropId = object.airdrop_id;
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: QueryUserAllocationRequest): QueryUserAllocationRequestAmino {
    const obj: any = {};
    obj.airdrop_id = message.airdropId === "" ? undefined : message.airdropId;
    obj.address = message.address === "" ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(object: QueryUserAllocationRequestAminoMsg): QueryUserAllocationRequest {
    return QueryUserAllocationRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryUserAllocationRequestProtoMsg): QueryUserAllocationRequest {
    return QueryUserAllocationRequest.decode(message.value);
  },
  toProto(message: QueryUserAllocationRequest): Uint8Array {
    return QueryUserAllocationRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryUserAllocationRequest): QueryUserAllocationRequestProtoMsg {
    return {
      typeUrl: "/stride.airdrop.QueryUserAllocationRequest",
      value: QueryUserAllocationRequest.encode(message).finish()
    };
  }
};
function createBaseQueryUserAllocationResponse(): QueryUserAllocationResponse {
  return {
    userAllocation: undefined
  };
}
export const QueryUserAllocationResponse = {
  typeUrl: "/stride.airdrop.QueryUserAllocationResponse",
  encode(message: QueryUserAllocationResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.userAllocation !== undefined) {
      UserAllocation.encode(message.userAllocation, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryUserAllocationResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUserAllocationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.userAllocation = UserAllocation.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryUserAllocationResponse>): QueryUserAllocationResponse {
    const message = createBaseQueryUserAllocationResponse();
    message.userAllocation = object.userAllocation !== undefined && object.userAllocation !== null ? UserAllocation.fromPartial(object.userAllocation) : undefined;
    return message;
  },
  fromAmino(object: QueryUserAllocationResponseAmino): QueryUserAllocationResponse {
    const message = createBaseQueryUserAllocationResponse();
    if (object.user_allocation !== undefined && object.user_allocation !== null) {
      message.userAllocation = UserAllocation.fromAmino(object.user_allocation);
    }
    return message;
  },
  toAmino(message: QueryUserAllocationResponse): QueryUserAllocationResponseAmino {
    const obj: any = {};
    obj.user_allocation = message.userAllocation ? UserAllocation.toAmino(message.userAllocation) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryUserAllocationResponseAminoMsg): QueryUserAllocationResponse {
    return QueryUserAllocationResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryUserAllocationResponseProtoMsg): QueryUserAllocationResponse {
    return QueryUserAllocationResponse.decode(message.value);
  },
  toProto(message: QueryUserAllocationResponse): Uint8Array {
    return QueryUserAllocationResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryUserAllocationResponse): QueryUserAllocationResponseProtoMsg {
    return {
      typeUrl: "/stride.airdrop.QueryUserAllocationResponse",
      value: QueryUserAllocationResponse.encode(message).finish()
    };
  }
};
function createBaseQueryUserAllocationsRequest(): QueryUserAllocationsRequest {
  return {
    address: ""
  };
}
export const QueryUserAllocationsRequest = {
  typeUrl: "/stride.airdrop.QueryUserAllocationsRequest",
  encode(message: QueryUserAllocationsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryUserAllocationsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUserAllocationsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryUserAllocationsRequest>): QueryUserAllocationsRequest {
    const message = createBaseQueryUserAllocationsRequest();
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: QueryUserAllocationsRequestAmino): QueryUserAllocationsRequest {
    const message = createBaseQueryUserAllocationsRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: QueryUserAllocationsRequest): QueryUserAllocationsRequestAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(object: QueryUserAllocationsRequestAminoMsg): QueryUserAllocationsRequest {
    return QueryUserAllocationsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryUserAllocationsRequestProtoMsg): QueryUserAllocationsRequest {
    return QueryUserAllocationsRequest.decode(message.value);
  },
  toProto(message: QueryUserAllocationsRequest): Uint8Array {
    return QueryUserAllocationsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryUserAllocationsRequest): QueryUserAllocationsRequestProtoMsg {
    return {
      typeUrl: "/stride.airdrop.QueryUserAllocationsRequest",
      value: QueryUserAllocationsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryUserAllocationsResponse(): QueryUserAllocationsResponse {
  return {
    userAllocations: []
  };
}
export const QueryUserAllocationsResponse = {
  typeUrl: "/stride.airdrop.QueryUserAllocationsResponse",
  encode(message: QueryUserAllocationsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.userAllocations) {
      UserAllocation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryUserAllocationsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUserAllocationsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.userAllocations.push(UserAllocation.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryUserAllocationsResponse>): QueryUserAllocationsResponse {
    const message = createBaseQueryUserAllocationsResponse();
    message.userAllocations = object.userAllocations?.map(e => UserAllocation.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryUserAllocationsResponseAmino): QueryUserAllocationsResponse {
    const message = createBaseQueryUserAllocationsResponse();
    message.userAllocations = object.user_allocations?.map(e => UserAllocation.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryUserAllocationsResponse): QueryUserAllocationsResponseAmino {
    const obj: any = {};
    if (message.userAllocations) {
      obj.user_allocations = message.userAllocations.map(e => e ? UserAllocation.toAmino(e) : undefined);
    } else {
      obj.user_allocations = message.userAllocations;
    }
    return obj;
  },
  fromAminoMsg(object: QueryUserAllocationsResponseAminoMsg): QueryUserAllocationsResponse {
    return QueryUserAllocationsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryUserAllocationsResponseProtoMsg): QueryUserAllocationsResponse {
    return QueryUserAllocationsResponse.decode(message.value);
  },
  toProto(message: QueryUserAllocationsResponse): Uint8Array {
    return QueryUserAllocationsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryUserAllocationsResponse): QueryUserAllocationsResponseProtoMsg {
    return {
      typeUrl: "/stride.airdrop.QueryUserAllocationsResponse",
      value: QueryUserAllocationsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllAllocationsRequest(): QueryAllAllocationsRequest {
  return {
    airdropId: "",
    pagination: undefined
  };
}
export const QueryAllAllocationsRequest = {
  typeUrl: "/stride.airdrop.QueryAllAllocationsRequest",
  encode(message: QueryAllAllocationsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.airdropId !== "") {
      writer.uint32(10).string(message.airdropId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllAllocationsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllAllocationsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.airdropId = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryAllAllocationsRequest>): QueryAllAllocationsRequest {
    const message = createBaseQueryAllAllocationsRequest();
    message.airdropId = object.airdropId ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllAllocationsRequestAmino): QueryAllAllocationsRequest {
    const message = createBaseQueryAllAllocationsRequest();
    if (object.airdrop_id !== undefined && object.airdrop_id !== null) {
      message.airdropId = object.airdrop_id;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllAllocationsRequest): QueryAllAllocationsRequestAmino {
    const obj: any = {};
    obj.airdrop_id = message.airdropId === "" ? undefined : message.airdropId;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllAllocationsRequestAminoMsg): QueryAllAllocationsRequest {
    return QueryAllAllocationsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllAllocationsRequestProtoMsg): QueryAllAllocationsRequest {
    return QueryAllAllocationsRequest.decode(message.value);
  },
  toProto(message: QueryAllAllocationsRequest): Uint8Array {
    return QueryAllAllocationsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllAllocationsRequest): QueryAllAllocationsRequestProtoMsg {
    return {
      typeUrl: "/stride.airdrop.QueryAllAllocationsRequest",
      value: QueryAllAllocationsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllAllocationsResponse(): QueryAllAllocationsResponse {
  return {
    allocations: [],
    pagination: undefined
  };
}
export const QueryAllAllocationsResponse = {
  typeUrl: "/stride.airdrop.QueryAllAllocationsResponse",
  encode(message: QueryAllAllocationsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.allocations) {
      UserAllocation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllAllocationsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllAllocationsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.allocations.push(UserAllocation.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryAllAllocationsResponse>): QueryAllAllocationsResponse {
    const message = createBaseQueryAllAllocationsResponse();
    message.allocations = object.allocations?.map(e => UserAllocation.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllAllocationsResponseAmino): QueryAllAllocationsResponse {
    const message = createBaseQueryAllAllocationsResponse();
    message.allocations = object.allocations?.map(e => UserAllocation.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllAllocationsResponse): QueryAllAllocationsResponseAmino {
    const obj: any = {};
    if (message.allocations) {
      obj.allocations = message.allocations.map(e => e ? UserAllocation.toAmino(e) : undefined);
    } else {
      obj.allocations = message.allocations;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllAllocationsResponseAminoMsg): QueryAllAllocationsResponse {
    return QueryAllAllocationsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllAllocationsResponseProtoMsg): QueryAllAllocationsResponse {
    return QueryAllAllocationsResponse.decode(message.value);
  },
  toProto(message: QueryAllAllocationsResponse): Uint8Array {
    return QueryAllAllocationsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllAllocationsResponse): QueryAllAllocationsResponseProtoMsg {
    return {
      typeUrl: "/stride.airdrop.QueryAllAllocationsResponse",
      value: QueryAllAllocationsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryUserSummaryRequest(): QueryUserSummaryRequest {
  return {
    airdropId: "",
    address: ""
  };
}
export const QueryUserSummaryRequest = {
  typeUrl: "/stride.airdrop.QueryUserSummaryRequest",
  encode(message: QueryUserSummaryRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.airdropId !== "") {
      writer.uint32(10).string(message.airdropId);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryUserSummaryRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUserSummaryRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.airdropId = reader.string();
          break;
        case 2:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryUserSummaryRequest>): QueryUserSummaryRequest {
    const message = createBaseQueryUserSummaryRequest();
    message.airdropId = object.airdropId ?? "";
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: QueryUserSummaryRequestAmino): QueryUserSummaryRequest {
    const message = createBaseQueryUserSummaryRequest();
    if (object.airdrop_id !== undefined && object.airdrop_id !== null) {
      message.airdropId = object.airdrop_id;
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: QueryUserSummaryRequest): QueryUserSummaryRequestAmino {
    const obj: any = {};
    obj.airdrop_id = message.airdropId === "" ? undefined : message.airdropId;
    obj.address = message.address === "" ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(object: QueryUserSummaryRequestAminoMsg): QueryUserSummaryRequest {
    return QueryUserSummaryRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryUserSummaryRequestProtoMsg): QueryUserSummaryRequest {
    return QueryUserSummaryRequest.decode(message.value);
  },
  toProto(message: QueryUserSummaryRequest): Uint8Array {
    return QueryUserSummaryRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryUserSummaryRequest): QueryUserSummaryRequestProtoMsg {
    return {
      typeUrl: "/stride.airdrop.QueryUserSummaryRequest",
      value: QueryUserSummaryRequest.encode(message).finish()
    };
  }
};
function createBaseQueryUserSummaryResponse(): QueryUserSummaryResponse {
  return {
    claimType: "",
    claimed: "",
    forfeited: "",
    remaining: "",
    claimable: ""
  };
}
export const QueryUserSummaryResponse = {
  typeUrl: "/stride.airdrop.QueryUserSummaryResponse",
  encode(message: QueryUserSummaryResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.claimType !== "") {
      writer.uint32(10).string(message.claimType);
    }
    if (message.claimed !== "") {
      writer.uint32(18).string(message.claimed);
    }
    if (message.forfeited !== "") {
      writer.uint32(26).string(message.forfeited);
    }
    if (message.remaining !== "") {
      writer.uint32(34).string(message.remaining);
    }
    if (message.claimable !== "") {
      writer.uint32(42).string(message.claimable);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryUserSummaryResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUserSummaryResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.claimType = reader.string();
          break;
        case 2:
          message.claimed = reader.string();
          break;
        case 3:
          message.forfeited = reader.string();
          break;
        case 4:
          message.remaining = reader.string();
          break;
        case 5:
          message.claimable = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryUserSummaryResponse>): QueryUserSummaryResponse {
    const message = createBaseQueryUserSummaryResponse();
    message.claimType = object.claimType ?? "";
    message.claimed = object.claimed ?? "";
    message.forfeited = object.forfeited ?? "";
    message.remaining = object.remaining ?? "";
    message.claimable = object.claimable ?? "";
    return message;
  },
  fromAmino(object: QueryUserSummaryResponseAmino): QueryUserSummaryResponse {
    const message = createBaseQueryUserSummaryResponse();
    if (object.claim_type !== undefined && object.claim_type !== null) {
      message.claimType = object.claim_type;
    }
    if (object.claimed !== undefined && object.claimed !== null) {
      message.claimed = object.claimed;
    }
    if (object.forfeited !== undefined && object.forfeited !== null) {
      message.forfeited = object.forfeited;
    }
    if (object.remaining !== undefined && object.remaining !== null) {
      message.remaining = object.remaining;
    }
    if (object.claimable !== undefined && object.claimable !== null) {
      message.claimable = object.claimable;
    }
    return message;
  },
  toAmino(message: QueryUserSummaryResponse): QueryUserSummaryResponseAmino {
    const obj: any = {};
    obj.claim_type = message.claimType === "" ? undefined : message.claimType;
    obj.claimed = message.claimed === "" ? undefined : message.claimed;
    obj.forfeited = message.forfeited === "" ? undefined : message.forfeited;
    obj.remaining = message.remaining === "" ? undefined : message.remaining;
    obj.claimable = message.claimable === "" ? undefined : message.claimable;
    return obj;
  },
  fromAminoMsg(object: QueryUserSummaryResponseAminoMsg): QueryUserSummaryResponse {
    return QueryUserSummaryResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryUserSummaryResponseProtoMsg): QueryUserSummaryResponse {
    return QueryUserSummaryResponse.decode(message.value);
  },
  toProto(message: QueryUserSummaryResponse): Uint8Array {
    return QueryUserSummaryResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryUserSummaryResponse): QueryUserSummaryResponseProtoMsg {
    return {
      typeUrl: "/stride.airdrop.QueryUserSummaryResponse",
      value: QueryUserSummaryResponse.encode(message).finish()
    };
  }
};