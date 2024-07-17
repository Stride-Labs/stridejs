import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { Airdrop, AirdropSDKType, UserAllocation, UserAllocationSDKType } from "./airdrop";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
/** Airdrop */

export interface QueryAirdropRequest {
  /** Airdrop */
  id: string;
}
/** Airdrop */

export interface QueryAirdropRequestSDKType {
  /** Airdrop */
  id: string;
}
export interface QueryAirdropResponse {
  airdrop: Airdrop;
}
export interface QueryAirdropResponseSDKType {
  airdrop: AirdropSDKType;
}
/** Airdrops */

export interface QueryAllAirdropsRequest {}
/** Airdrops */

export interface QueryAllAirdropsRequestSDKType {}
export interface QueryAllAirdropsResponse {
  airdrops: Airdrop[];
}
export interface QueryAllAirdropsResponseSDKType {
  airdrops: AirdropSDKType[];
}
/** UserAllocation */

export interface QueryUserAllocationRequest {
  airdropId: string;
  address: string;
}
/** UserAllocation */

export interface QueryUserAllocationRequestSDKType {
  airdrop_id: string;
  address: string;
}
export interface QueryUserAllocationResponse {
  userAllocation: UserAllocation;
}
export interface QueryUserAllocationResponseSDKType {
  user_allocation: UserAllocationSDKType;
}
/** UserAllocations */

export interface QueryUserAllocationsRequest {
  address: string;
}
/** UserAllocations */

export interface QueryUserAllocationsRequestSDKType {
  address: string;
}
export interface QueryUserAllocationsResponse {
  userAllocations: UserAllocation[];
}
export interface QueryUserAllocationsResponseSDKType {
  user_allocations: UserAllocationSDKType[];
}
/** AllAllocations */

export interface QueryAllAllocationsRequest {
  airdropId: string;
  pagination?: PageRequest;
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
export interface QueryAllAllocationsResponseSDKType {
  allocations: UserAllocationSDKType[];
  pagination?: PageResponseSDKType;
}
/** UserSummary */

export interface QueryUserSummaryRequest {
  airdropId: string;
  address: string;
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
  /** The current date index into the airdrop array */

  currentDateIndex: Long;
}
export interface QueryUserSummaryResponseSDKType {
  /** The claim type (claim daily or claim early) */
  claim_type: string;
  /** The total rewards claimed so far */

  claimed: string;
  /** The total rewards forfeited (in the case of claiming early) */

  forfeited: string;
  /** The total rewards remaining */

  remaining: string;
  /** The total rewards that can be claimed right now */

  claimable: string;
  /** The current date index into the airdrop array */

  current_date_index: Long;
}

function createBaseQueryAirdropRequest(): QueryAirdropRequest {
  return {
    id: ""
  };
}

export const QueryAirdropRequest = {
  encode(message: QueryAirdropRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAirdropRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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

  fromPartial(object: DeepPartial<QueryAirdropRequest>): QueryAirdropRequest {
    const message = createBaseQueryAirdropRequest();
    message.id = object.id ?? "";
    return message;
  }

};

function createBaseQueryAirdropResponse(): QueryAirdropResponse {
  return {
    airdrop: undefined
  };
}

export const QueryAirdropResponse = {
  encode(message: QueryAirdropResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.airdrop !== undefined) {
      Airdrop.encode(message.airdrop, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAirdropResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAirdropResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.airdrop = Airdrop.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryAirdropResponse>): QueryAirdropResponse {
    const message = createBaseQueryAirdropResponse();
    message.airdrop = object.airdrop !== undefined && object.airdrop !== null ? Airdrop.fromPartial(object.airdrop) : undefined;
    return message;
  }

};

function createBaseQueryAllAirdropsRequest(): QueryAllAirdropsRequest {
  return {};
}

export const QueryAllAirdropsRequest = {
  encode(_: QueryAllAirdropsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllAirdropsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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

  fromPartial(_: DeepPartial<QueryAllAirdropsRequest>): QueryAllAirdropsRequest {
    const message = createBaseQueryAllAirdropsRequest();
    return message;
  }

};

function createBaseQueryAllAirdropsResponse(): QueryAllAirdropsResponse {
  return {
    airdrops: []
  };
}

export const QueryAllAirdropsResponse = {
  encode(message: QueryAllAirdropsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.airdrops) {
      Airdrop.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllAirdropsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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

  fromPartial(object: DeepPartial<QueryAllAirdropsResponse>): QueryAllAirdropsResponse {
    const message = createBaseQueryAllAirdropsResponse();
    message.airdrops = object.airdrops?.map(e => Airdrop.fromPartial(e)) || [];
    return message;
  }

};

function createBaseQueryUserAllocationRequest(): QueryUserAllocationRequest {
  return {
    airdropId: "",
    address: ""
  };
}

export const QueryUserAllocationRequest = {
  encode(message: QueryUserAllocationRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.airdropId !== "") {
      writer.uint32(10).string(message.airdropId);
    }

    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryUserAllocationRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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

  fromPartial(object: DeepPartial<QueryUserAllocationRequest>): QueryUserAllocationRequest {
    const message = createBaseQueryUserAllocationRequest();
    message.airdropId = object.airdropId ?? "";
    message.address = object.address ?? "";
    return message;
  }

};

function createBaseQueryUserAllocationResponse(): QueryUserAllocationResponse {
  return {
    userAllocation: undefined
  };
}

export const QueryUserAllocationResponse = {
  encode(message: QueryUserAllocationResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userAllocation !== undefined) {
      UserAllocation.encode(message.userAllocation, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryUserAllocationResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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

  fromPartial(object: DeepPartial<QueryUserAllocationResponse>): QueryUserAllocationResponse {
    const message = createBaseQueryUserAllocationResponse();
    message.userAllocation = object.userAllocation !== undefined && object.userAllocation !== null ? UserAllocation.fromPartial(object.userAllocation) : undefined;
    return message;
  }

};

function createBaseQueryUserAllocationsRequest(): QueryUserAllocationsRequest {
  return {
    address: ""
  };
}

export const QueryUserAllocationsRequest = {
  encode(message: QueryUserAllocationsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryUserAllocationsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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

  fromPartial(object: DeepPartial<QueryUserAllocationsRequest>): QueryUserAllocationsRequest {
    const message = createBaseQueryUserAllocationsRequest();
    message.address = object.address ?? "";
    return message;
  }

};

function createBaseQueryUserAllocationsResponse(): QueryUserAllocationsResponse {
  return {
    userAllocations: []
  };
}

export const QueryUserAllocationsResponse = {
  encode(message: QueryUserAllocationsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.userAllocations) {
      UserAllocation.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryUserAllocationsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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

  fromPartial(object: DeepPartial<QueryUserAllocationsResponse>): QueryUserAllocationsResponse {
    const message = createBaseQueryUserAllocationsResponse();
    message.userAllocations = object.userAllocations?.map(e => UserAllocation.fromPartial(e)) || [];
    return message;
  }

};

function createBaseQueryAllAllocationsRequest(): QueryAllAllocationsRequest {
  return {
    airdropId: "",
    pagination: undefined
  };
}

export const QueryAllAllocationsRequest = {
  encode(message: QueryAllAllocationsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.airdropId !== "") {
      writer.uint32(10).string(message.airdropId);
    }

    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllAllocationsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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

  fromPartial(object: DeepPartial<QueryAllAllocationsRequest>): QueryAllAllocationsRequest {
    const message = createBaseQueryAllAllocationsRequest();
    message.airdropId = object.airdropId ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryAllAllocationsResponse(): QueryAllAllocationsResponse {
  return {
    allocations: [],
    pagination: undefined
  };
}

export const QueryAllAllocationsResponse = {
  encode(message: QueryAllAllocationsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.allocations) {
      UserAllocation.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllAllocationsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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

  fromPartial(object: DeepPartial<QueryAllAllocationsResponse>): QueryAllAllocationsResponse {
    const message = createBaseQueryAllAllocationsResponse();
    message.allocations = object.allocations?.map(e => UserAllocation.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryUserSummaryRequest(): QueryUserSummaryRequest {
  return {
    airdropId: "",
    address: ""
  };
}

export const QueryUserSummaryRequest = {
  encode(message: QueryUserSummaryRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.airdropId !== "") {
      writer.uint32(10).string(message.airdropId);
    }

    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryUserSummaryRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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

  fromPartial(object: DeepPartial<QueryUserSummaryRequest>): QueryUserSummaryRequest {
    const message = createBaseQueryUserSummaryRequest();
    message.airdropId = object.airdropId ?? "";
    message.address = object.address ?? "";
    return message;
  }

};

function createBaseQueryUserSummaryResponse(): QueryUserSummaryResponse {
  return {
    claimType: "",
    claimed: "",
    forfeited: "",
    remaining: "",
    claimable: "",
    currentDateIndex: Long.ZERO
  };
}

export const QueryUserSummaryResponse = {
  encode(message: QueryUserSummaryResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

    if (!message.currentDateIndex.isZero()) {
      writer.uint32(48).int64(message.currentDateIndex);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryUserSummaryResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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

        case 6:
          message.currentDateIndex = (reader.int64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryUserSummaryResponse>): QueryUserSummaryResponse {
    const message = createBaseQueryUserSummaryResponse();
    message.claimType = object.claimType ?? "";
    message.claimed = object.claimed ?? "";
    message.forfeited = object.forfeited ?? "";
    message.remaining = object.remaining ?? "";
    message.claimable = object.claimable ?? "";
    message.currentDateIndex = object.currentDateIndex !== undefined && object.currentDateIndex !== null ? Long.fromValue(object.currentDateIndex) : Long.ZERO;
    return message;
  }

};