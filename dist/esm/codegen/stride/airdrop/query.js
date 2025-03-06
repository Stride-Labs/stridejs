import { PageRequest, PageResponse } from "../../cosmos/base/query/v1beta1/pagination";
import { Timestamp } from "../../google/protobuf/timestamp";
import { Airdrop, UserAllocation } from "./airdrop";
import { BinaryReader, BinaryWriter } from "../../binary";
import { toTimestamp, fromTimestamp } from "../../helpers";
import { Decimal } from "@cosmjs/math";
function createBaseQueryAirdropRequest() {
  return {
    id: ""
  };
}
const QueryAirdropRequest = {
  typeUrl: "/stride.airdrop.QueryAirdropRequest",
  encode(message, writer = BinaryWriter.create()) {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
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
  fromPartial(object) {
    const message = createBaseQueryAirdropRequest();
    message.id = object.id ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryAirdropRequest();
    if (object.id !== void 0 && object.id !== null) {
      message.id = object.id;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.id = message.id === "" ? void 0 : message.id;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryAirdropRequest.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryAirdropRequest.decode(message.value);
  },
  toProto(message) {
    return QueryAirdropRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.airdrop.QueryAirdropRequest",
      value: QueryAirdropRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAirdropResponse() {
  return {
    id: "",
    rewardDenom: "",
    distributionStartDate: void 0,
    distributionEndDate: void 0,
    clawbackDate: void 0,
    claimTypeDeadlineDate: void 0,
    earlyClaimPenalty: "",
    distributorAddress: "",
    allocatorAddress: "",
    linkerAddress: "",
    currentDateIndex: BigInt(0),
    airdropLength: BigInt(0)
  };
}
const QueryAirdropResponse = {
  typeUrl: "/stride.airdrop.QueryAirdropResponse",
  encode(message, writer = BinaryWriter.create()) {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.rewardDenom !== "") {
      writer.uint32(18).string(message.rewardDenom);
    }
    if (message.distributionStartDate !== void 0) {
      Timestamp.encode(toTimestamp(message.distributionStartDate), writer.uint32(26).fork()).ldelim();
    }
    if (message.distributionEndDate !== void 0) {
      Timestamp.encode(toTimestamp(message.distributionEndDate), writer.uint32(34).fork()).ldelim();
    }
    if (message.clawbackDate !== void 0) {
      Timestamp.encode(toTimestamp(message.clawbackDate), writer.uint32(42).fork()).ldelim();
    }
    if (message.claimTypeDeadlineDate !== void 0) {
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
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
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
  fromPartial(object) {
    const message = createBaseQueryAirdropResponse();
    message.id = object.id ?? "";
    message.rewardDenom = object.rewardDenom ?? "";
    message.distributionStartDate = object.distributionStartDate ?? void 0;
    message.distributionEndDate = object.distributionEndDate ?? void 0;
    message.clawbackDate = object.clawbackDate ?? void 0;
    message.claimTypeDeadlineDate = object.claimTypeDeadlineDate ?? void 0;
    message.earlyClaimPenalty = object.earlyClaimPenalty ?? "";
    message.distributorAddress = object.distributorAddress ?? "";
    message.allocatorAddress = object.allocatorAddress ?? "";
    message.linkerAddress = object.linkerAddress ?? "";
    message.currentDateIndex = object.currentDateIndex !== void 0 && object.currentDateIndex !== null ? BigInt(object.currentDateIndex.toString()) : BigInt(0);
    message.airdropLength = object.airdropLength !== void 0 && object.airdropLength !== null ? BigInt(object.airdropLength.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryAirdropResponse();
    if (object.id !== void 0 && object.id !== null) {
      message.id = object.id;
    }
    if (object.reward_denom !== void 0 && object.reward_denom !== null) {
      message.rewardDenom = object.reward_denom;
    }
    if (object.distribution_start_date !== void 0 && object.distribution_start_date !== null) {
      message.distributionStartDate = fromTimestamp(Timestamp.fromAmino(object.distribution_start_date));
    }
    if (object.distribution_end_date !== void 0 && object.distribution_end_date !== null) {
      message.distributionEndDate = fromTimestamp(Timestamp.fromAmino(object.distribution_end_date));
    }
    if (object.clawback_date !== void 0 && object.clawback_date !== null) {
      message.clawbackDate = fromTimestamp(Timestamp.fromAmino(object.clawback_date));
    }
    if (object.claim_type_deadline_date !== void 0 && object.claim_type_deadline_date !== null) {
      message.claimTypeDeadlineDate = fromTimestamp(Timestamp.fromAmino(object.claim_type_deadline_date));
    }
    if (object.early_claim_penalty !== void 0 && object.early_claim_penalty !== null) {
      message.earlyClaimPenalty = object.early_claim_penalty;
    }
    if (object.distributor_address !== void 0 && object.distributor_address !== null) {
      message.distributorAddress = object.distributor_address;
    }
    if (object.allocator_address !== void 0 && object.allocator_address !== null) {
      message.allocatorAddress = object.allocator_address;
    }
    if (object.linker_address !== void 0 && object.linker_address !== null) {
      message.linkerAddress = object.linker_address;
    }
    if (object.current_date_index !== void 0 && object.current_date_index !== null) {
      message.currentDateIndex = BigInt(object.current_date_index);
    }
    if (object.airdrop_length !== void 0 && object.airdrop_length !== null) {
      message.airdropLength = BigInt(object.airdrop_length);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.id = message.id === "" ? void 0 : message.id;
    obj.reward_denom = message.rewardDenom === "" ? void 0 : message.rewardDenom;
    obj.distribution_start_date = message.distributionStartDate ? Timestamp.toAmino(toTimestamp(message.distributionStartDate)) : void 0;
    obj.distribution_end_date = message.distributionEndDate ? Timestamp.toAmino(toTimestamp(message.distributionEndDate)) : void 0;
    obj.clawback_date = message.clawbackDate ? Timestamp.toAmino(toTimestamp(message.clawbackDate)) : void 0;
    obj.claim_type_deadline_date = message.claimTypeDeadlineDate ? Timestamp.toAmino(toTimestamp(message.claimTypeDeadlineDate)) : void 0;
    obj.early_claim_penalty = message.earlyClaimPenalty === "" ? void 0 : Decimal.fromUserInput(message.earlyClaimPenalty, 18).atomics;
    obj.distributor_address = message.distributorAddress === "" ? void 0 : message.distributorAddress;
    obj.allocator_address = message.allocatorAddress === "" ? void 0 : message.allocatorAddress;
    obj.linker_address = message.linkerAddress === "" ? void 0 : message.linkerAddress;
    obj.current_date_index = message.currentDateIndex !== BigInt(0) ? message.currentDateIndex?.toString() : void 0;
    obj.airdrop_length = message.airdropLength !== BigInt(0) ? message.airdropLength?.toString() : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryAirdropResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryAirdropResponse.decode(message.value);
  },
  toProto(message) {
    return QueryAirdropResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.airdrop.QueryAirdropResponse",
      value: QueryAirdropResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllAirdropsRequest() {
  return {};
}
const QueryAllAirdropsRequest = {
  typeUrl: "/stride.airdrop.QueryAllAirdropsRequest",
  encode(_, writer = BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
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
  fromPartial(_) {
    const message = createBaseQueryAllAirdropsRequest();
    return message;
  },
  fromAmino(_) {
    const message = createBaseQueryAllAirdropsRequest();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return QueryAllAirdropsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryAllAirdropsRequest.decode(message.value);
  },
  toProto(message) {
    return QueryAllAirdropsRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.airdrop.QueryAllAirdropsRequest",
      value: QueryAllAirdropsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllAirdropsResponse() {
  return {
    airdrops: []
  };
}
const QueryAllAirdropsResponse = {
  typeUrl: "/stride.airdrop.QueryAllAirdropsResponse",
  encode(message, writer = BinaryWriter.create()) {
    for (const v of message.airdrops) {
      Airdrop.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
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
  fromPartial(object) {
    const message = createBaseQueryAllAirdropsResponse();
    message.airdrops = object.airdrops?.map((e) => Airdrop.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryAllAirdropsResponse();
    message.airdrops = object.airdrops?.map((e) => Airdrop.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.airdrops) {
      obj.airdrops = message.airdrops.map((e) => e ? Airdrop.toAmino(e) : void 0);
    } else {
      obj.airdrops = message.airdrops;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return QueryAllAirdropsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryAllAirdropsResponse.decode(message.value);
  },
  toProto(message) {
    return QueryAllAirdropsResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.airdrop.QueryAllAirdropsResponse",
      value: QueryAllAirdropsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryUserAllocationRequest() {
  return {
    airdropId: "",
    address: ""
  };
}
const QueryUserAllocationRequest = {
  typeUrl: "/stride.airdrop.QueryUserAllocationRequest",
  encode(message, writer = BinaryWriter.create()) {
    if (message.airdropId !== "") {
      writer.uint32(10).string(message.airdropId);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
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
  fromPartial(object) {
    const message = createBaseQueryUserAllocationRequest();
    message.airdropId = object.airdropId ?? "";
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryUserAllocationRequest();
    if (object.airdrop_id !== void 0 && object.airdrop_id !== null) {
      message.airdropId = object.airdrop_id;
    }
    if (object.address !== void 0 && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.airdrop_id = message.airdropId === "" ? void 0 : message.airdropId;
    obj.address = message.address === "" ? void 0 : message.address;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryUserAllocationRequest.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryUserAllocationRequest.decode(message.value);
  },
  toProto(message) {
    return QueryUserAllocationRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.airdrop.QueryUserAllocationRequest",
      value: QueryUserAllocationRequest.encode(message).finish()
    };
  }
};
function createBaseQueryUserAllocationResponse() {
  return {
    userAllocation: void 0
  };
}
const QueryUserAllocationResponse = {
  typeUrl: "/stride.airdrop.QueryUserAllocationResponse",
  encode(message, writer = BinaryWriter.create()) {
    if (message.userAllocation !== void 0) {
      UserAllocation.encode(message.userAllocation, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
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
  fromPartial(object) {
    const message = createBaseQueryUserAllocationResponse();
    message.userAllocation = object.userAllocation !== void 0 && object.userAllocation !== null ? UserAllocation.fromPartial(object.userAllocation) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryUserAllocationResponse();
    if (object.user_allocation !== void 0 && object.user_allocation !== null) {
      message.userAllocation = UserAllocation.fromAmino(object.user_allocation);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.user_allocation = message.userAllocation ? UserAllocation.toAmino(message.userAllocation) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryUserAllocationResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryUserAllocationResponse.decode(message.value);
  },
  toProto(message) {
    return QueryUserAllocationResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.airdrop.QueryUserAllocationResponse",
      value: QueryUserAllocationResponse.encode(message).finish()
    };
  }
};
function createBaseQueryUserAllocationsRequest() {
  return {
    address: ""
  };
}
const QueryUserAllocationsRequest = {
  typeUrl: "/stride.airdrop.QueryUserAllocationsRequest",
  encode(message, writer = BinaryWriter.create()) {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
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
  fromPartial(object) {
    const message = createBaseQueryUserAllocationsRequest();
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryUserAllocationsRequest();
    if (object.address !== void 0 && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.address = message.address === "" ? void 0 : message.address;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryUserAllocationsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryUserAllocationsRequest.decode(message.value);
  },
  toProto(message) {
    return QueryUserAllocationsRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.airdrop.QueryUserAllocationsRequest",
      value: QueryUserAllocationsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryUserAllocationsResponse() {
  return {
    userAllocations: []
  };
}
const QueryUserAllocationsResponse = {
  typeUrl: "/stride.airdrop.QueryUserAllocationsResponse",
  encode(message, writer = BinaryWriter.create()) {
    for (const v of message.userAllocations) {
      UserAllocation.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
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
  fromPartial(object) {
    const message = createBaseQueryUserAllocationsResponse();
    message.userAllocations = object.userAllocations?.map((e) => UserAllocation.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryUserAllocationsResponse();
    message.userAllocations = object.user_allocations?.map((e) => UserAllocation.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.userAllocations) {
      obj.user_allocations = message.userAllocations.map((e) => e ? UserAllocation.toAmino(e) : void 0);
    } else {
      obj.user_allocations = message.userAllocations;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return QueryUserAllocationsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryUserAllocationsResponse.decode(message.value);
  },
  toProto(message) {
    return QueryUserAllocationsResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.airdrop.QueryUserAllocationsResponse",
      value: QueryUserAllocationsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllAllocationsRequest() {
  return {
    airdropId: "",
    pagination: void 0
  };
}
const QueryAllAllocationsRequest = {
  typeUrl: "/stride.airdrop.QueryAllAllocationsRequest",
  encode(message, writer = BinaryWriter.create()) {
    if (message.airdropId !== "") {
      writer.uint32(10).string(message.airdropId);
    }
    if (message.pagination !== void 0) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
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
  fromPartial(object) {
    const message = createBaseQueryAllAllocationsRequest();
    message.airdropId = object.airdropId ?? "";
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryAllAllocationsRequest();
    if (object.airdrop_id !== void 0 && object.airdrop_id !== null) {
      message.airdropId = object.airdrop_id;
    }
    if (object.pagination !== void 0 && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.airdrop_id = message.airdropId === "" ? void 0 : message.airdropId;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryAllAllocationsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryAllAllocationsRequest.decode(message.value);
  },
  toProto(message) {
    return QueryAllAllocationsRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.airdrop.QueryAllAllocationsRequest",
      value: QueryAllAllocationsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllAllocationsResponse() {
  return {
    allocations: [],
    pagination: void 0
  };
}
const QueryAllAllocationsResponse = {
  typeUrl: "/stride.airdrop.QueryAllAllocationsResponse",
  encode(message, writer = BinaryWriter.create()) {
    for (const v of message.allocations) {
      UserAllocation.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== void 0) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
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
  fromPartial(object) {
    const message = createBaseQueryAllAllocationsResponse();
    message.allocations = object.allocations?.map((e) => UserAllocation.fromPartial(e)) || [];
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryAllAllocationsResponse();
    message.allocations = object.allocations?.map((e) => UserAllocation.fromAmino(e)) || [];
    if (object.pagination !== void 0 && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.allocations) {
      obj.allocations = message.allocations.map((e) => e ? UserAllocation.toAmino(e) : void 0);
    } else {
      obj.allocations = message.allocations;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryAllAllocationsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryAllAllocationsResponse.decode(message.value);
  },
  toProto(message) {
    return QueryAllAllocationsResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.airdrop.QueryAllAllocationsResponse",
      value: QueryAllAllocationsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryUserSummaryRequest() {
  return {
    airdropId: "",
    address: ""
  };
}
const QueryUserSummaryRequest = {
  typeUrl: "/stride.airdrop.QueryUserSummaryRequest",
  encode(message, writer = BinaryWriter.create()) {
    if (message.airdropId !== "") {
      writer.uint32(10).string(message.airdropId);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
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
  fromPartial(object) {
    const message = createBaseQueryUserSummaryRequest();
    message.airdropId = object.airdropId ?? "";
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryUserSummaryRequest();
    if (object.airdrop_id !== void 0 && object.airdrop_id !== null) {
      message.airdropId = object.airdrop_id;
    }
    if (object.address !== void 0 && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.airdrop_id = message.airdropId === "" ? void 0 : message.airdropId;
    obj.address = message.address === "" ? void 0 : message.address;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryUserSummaryRequest.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryUserSummaryRequest.decode(message.value);
  },
  toProto(message) {
    return QueryUserSummaryRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.airdrop.QueryUserSummaryRequest",
      value: QueryUserSummaryRequest.encode(message).finish()
    };
  }
};
function createBaseQueryUserSummaryResponse() {
  return {
    claimType: "",
    claimed: "",
    forfeited: "",
    remaining: "",
    claimable: ""
  };
}
const QueryUserSummaryResponse = {
  typeUrl: "/stride.airdrop.QueryUserSummaryResponse",
  encode(message, writer = BinaryWriter.create()) {
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
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
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
  fromPartial(object) {
    const message = createBaseQueryUserSummaryResponse();
    message.claimType = object.claimType ?? "";
    message.claimed = object.claimed ?? "";
    message.forfeited = object.forfeited ?? "";
    message.remaining = object.remaining ?? "";
    message.claimable = object.claimable ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryUserSummaryResponse();
    if (object.claim_type !== void 0 && object.claim_type !== null) {
      message.claimType = object.claim_type;
    }
    if (object.claimed !== void 0 && object.claimed !== null) {
      message.claimed = object.claimed;
    }
    if (object.forfeited !== void 0 && object.forfeited !== null) {
      message.forfeited = object.forfeited;
    }
    if (object.remaining !== void 0 && object.remaining !== null) {
      message.remaining = object.remaining;
    }
    if (object.claimable !== void 0 && object.claimable !== null) {
      message.claimable = object.claimable;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.claim_type = message.claimType === "" ? void 0 : message.claimType;
    obj.claimed = message.claimed === "" ? void 0 : message.claimed;
    obj.forfeited = message.forfeited === "" ? void 0 : message.forfeited;
    obj.remaining = message.remaining === "" ? void 0 : message.remaining;
    obj.claimable = message.claimable === "" ? void 0 : message.claimable;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryUserSummaryResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryUserSummaryResponse.decode(message.value);
  },
  toProto(message) {
    return QueryUserSummaryResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.airdrop.QueryUserSummaryResponse",
      value: QueryUserSummaryResponse.encode(message).finish()
    };
  }
};
export {
  QueryAirdropRequest,
  QueryAirdropResponse,
  QueryAllAirdropsRequest,
  QueryAllAirdropsResponse,
  QueryAllAllocationsRequest,
  QueryAllAllocationsResponse,
  QueryUserAllocationRequest,
  QueryUserAllocationResponse,
  QueryUserAllocationsRequest,
  QueryUserAllocationsResponse,
  QueryUserSummaryRequest,
  QueryUserSummaryResponse
};
