import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination";
import { Params, ValidatorOutstandingRewards, ValidatorAccumulatedCommission, ValidatorSlashEvent, DelegationDelegatorReward, TokenizeShareRecordReward } from "./distribution";
import { DecCoin } from "../../base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
function createBaseQueryParamsRequest() {
  return {};
}
const QueryParamsRequest = {
  typeUrl: "/cosmos.distribution.v1beta1.QueryParamsRequest",
  encode(_, writer = BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
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
    const message = createBaseQueryParamsRequest();
    return message;
  },
  fromAmino(_) {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return QueryParamsRequest.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryParamsRequest",
      value: QueryParamsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryParamsRequest.decode(message.value);
  },
  toProto(message) {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryParamsResponse() {
  return {
    params: Params.fromPartial({})
  };
}
const QueryParamsResponse = {
  typeUrl: "/cosmos.distribution.v1beta1.QueryParamsResponse",
  encode(message, writer = BinaryWriter.create()) {
    if (message.params !== void 0) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== void 0 && object.params !== null ? Params.fromPartial(object.params) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryParamsResponse();
    if (object.params !== void 0 && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.params = message.params ? Params.toAmino(message.params) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryParamsResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryParamsResponse",
      value: QueryParamsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message) {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryValidatorOutstandingRewardsRequest() {
  return {
    validatorAddress: ""
  };
}
const QueryValidatorOutstandingRewardsRequest = {
  typeUrl: "/cosmos.distribution.v1beta1.QueryValidatorOutstandingRewardsRequest",
  encode(message, writer = BinaryWriter.create()) {
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorOutstandingRewardsRequest();
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
  fromPartial(object) {
    const message = createBaseQueryValidatorOutstandingRewardsRequest();
    message.validatorAddress = object.validatorAddress ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryValidatorOutstandingRewardsRequest();
    if (object.validator_address !== void 0 && object.validator_address !== null) {
      message.validatorAddress = object.validator_address;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.validator_address = message.validatorAddress === "" ? void 0 : message.validatorAddress;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryValidatorOutstandingRewardsRequest.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryValidatorOutstandingRewardsRequest",
      value: QueryValidatorOutstandingRewardsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryValidatorOutstandingRewardsRequest.decode(message.value);
  },
  toProto(message) {
    return QueryValidatorOutstandingRewardsRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.QueryValidatorOutstandingRewardsRequest",
      value: QueryValidatorOutstandingRewardsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryValidatorOutstandingRewardsResponse() {
  return {
    rewards: ValidatorOutstandingRewards.fromPartial({})
  };
}
const QueryValidatorOutstandingRewardsResponse = {
  typeUrl: "/cosmos.distribution.v1beta1.QueryValidatorOutstandingRewardsResponse",
  encode(message, writer = BinaryWriter.create()) {
    if (message.rewards !== void 0) {
      ValidatorOutstandingRewards.encode(message.rewards, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorOutstandingRewardsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rewards = ValidatorOutstandingRewards.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryValidatorOutstandingRewardsResponse();
    message.rewards = object.rewards !== void 0 && object.rewards !== null ? ValidatorOutstandingRewards.fromPartial(object.rewards) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryValidatorOutstandingRewardsResponse();
    if (object.rewards !== void 0 && object.rewards !== null) {
      message.rewards = ValidatorOutstandingRewards.fromAmino(object.rewards);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.rewards = message.rewards ? ValidatorOutstandingRewards.toAmino(message.rewards) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryValidatorOutstandingRewardsResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryValidatorOutstandingRewardsResponse",
      value: QueryValidatorOutstandingRewardsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryValidatorOutstandingRewardsResponse.decode(message.value);
  },
  toProto(message) {
    return QueryValidatorOutstandingRewardsResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.QueryValidatorOutstandingRewardsResponse",
      value: QueryValidatorOutstandingRewardsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryValidatorCommissionRequest() {
  return {
    validatorAddress: ""
  };
}
const QueryValidatorCommissionRequest = {
  typeUrl: "/cosmos.distribution.v1beta1.QueryValidatorCommissionRequest",
  encode(message, writer = BinaryWriter.create()) {
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorCommissionRequest();
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
  fromPartial(object) {
    const message = createBaseQueryValidatorCommissionRequest();
    message.validatorAddress = object.validatorAddress ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryValidatorCommissionRequest();
    if (object.validator_address !== void 0 && object.validator_address !== null) {
      message.validatorAddress = object.validator_address;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.validator_address = message.validatorAddress === "" ? void 0 : message.validatorAddress;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryValidatorCommissionRequest.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryValidatorCommissionRequest",
      value: QueryValidatorCommissionRequest.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryValidatorCommissionRequest.decode(message.value);
  },
  toProto(message) {
    return QueryValidatorCommissionRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.QueryValidatorCommissionRequest",
      value: QueryValidatorCommissionRequest.encode(message).finish()
    };
  }
};
function createBaseQueryValidatorCommissionResponse() {
  return {
    commission: ValidatorAccumulatedCommission.fromPartial({})
  };
}
const QueryValidatorCommissionResponse = {
  typeUrl: "/cosmos.distribution.v1beta1.QueryValidatorCommissionResponse",
  encode(message, writer = BinaryWriter.create()) {
    if (message.commission !== void 0) {
      ValidatorAccumulatedCommission.encode(message.commission, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorCommissionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.commission = ValidatorAccumulatedCommission.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryValidatorCommissionResponse();
    message.commission = object.commission !== void 0 && object.commission !== null ? ValidatorAccumulatedCommission.fromPartial(object.commission) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryValidatorCommissionResponse();
    if (object.commission !== void 0 && object.commission !== null) {
      message.commission = ValidatorAccumulatedCommission.fromAmino(object.commission);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.commission = message.commission ? ValidatorAccumulatedCommission.toAmino(message.commission) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryValidatorCommissionResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryValidatorCommissionResponse",
      value: QueryValidatorCommissionResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryValidatorCommissionResponse.decode(message.value);
  },
  toProto(message) {
    return QueryValidatorCommissionResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.QueryValidatorCommissionResponse",
      value: QueryValidatorCommissionResponse.encode(message).finish()
    };
  }
};
function createBaseQueryValidatorSlashesRequest() {
  return {
    validatorAddress: "",
    startingHeight: BigInt(0),
    endingHeight: BigInt(0),
    pagination: void 0
  };
}
const QueryValidatorSlashesRequest = {
  typeUrl: "/cosmos.distribution.v1beta1.QueryValidatorSlashesRequest",
  encode(message, writer = BinaryWriter.create()) {
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }
    if (message.startingHeight !== BigInt(0)) {
      writer.uint32(16).uint64(message.startingHeight);
    }
    if (message.endingHeight !== BigInt(0)) {
      writer.uint32(24).uint64(message.endingHeight);
    }
    if (message.pagination !== void 0) {
      PageRequest.encode(message.pagination, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorSlashesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddress = reader.string();
          break;
        case 2:
          message.startingHeight = reader.uint64();
          break;
        case 3:
          message.endingHeight = reader.uint64();
          break;
        case 4:
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
    const message = createBaseQueryValidatorSlashesRequest();
    message.validatorAddress = object.validatorAddress ?? "";
    message.startingHeight = object.startingHeight !== void 0 && object.startingHeight !== null ? BigInt(object.startingHeight.toString()) : BigInt(0);
    message.endingHeight = object.endingHeight !== void 0 && object.endingHeight !== null ? BigInt(object.endingHeight.toString()) : BigInt(0);
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryValidatorSlashesRequest();
    if (object.validator_address !== void 0 && object.validator_address !== null) {
      message.validatorAddress = object.validator_address;
    }
    if (object.starting_height !== void 0 && object.starting_height !== null) {
      message.startingHeight = BigInt(object.starting_height);
    }
    if (object.ending_height !== void 0 && object.ending_height !== null) {
      message.endingHeight = BigInt(object.ending_height);
    }
    if (object.pagination !== void 0 && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.validator_address = message.validatorAddress === "" ? void 0 : message.validatorAddress;
    obj.starting_height = message.startingHeight !== BigInt(0) ? message.startingHeight.toString() : void 0;
    obj.ending_height = message.endingHeight !== BigInt(0) ? message.endingHeight.toString() : void 0;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryValidatorSlashesRequest.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryValidatorSlashesRequest",
      value: QueryValidatorSlashesRequest.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryValidatorSlashesRequest.decode(message.value);
  },
  toProto(message) {
    return QueryValidatorSlashesRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.QueryValidatorSlashesRequest",
      value: QueryValidatorSlashesRequest.encode(message).finish()
    };
  }
};
function createBaseQueryValidatorSlashesResponse() {
  return {
    slashes: [],
    pagination: void 0
  };
}
const QueryValidatorSlashesResponse = {
  typeUrl: "/cosmos.distribution.v1beta1.QueryValidatorSlashesResponse",
  encode(message, writer = BinaryWriter.create()) {
    for (const v of message.slashes) {
      ValidatorSlashEvent.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== void 0) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorSlashesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.slashes.push(ValidatorSlashEvent.decode(reader, reader.uint32()));
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
    const message = createBaseQueryValidatorSlashesResponse();
    message.slashes = object.slashes?.map((e) => ValidatorSlashEvent.fromPartial(e)) || [];
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryValidatorSlashesResponse();
    message.slashes = object.slashes?.map((e) => ValidatorSlashEvent.fromAmino(e)) || [];
    if (object.pagination !== void 0 && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.slashes) {
      obj.slashes = message.slashes.map((e) => e ? ValidatorSlashEvent.toAmino(e) : void 0);
    } else {
      obj.slashes = message.slashes;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryValidatorSlashesResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryValidatorSlashesResponse",
      value: QueryValidatorSlashesResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryValidatorSlashesResponse.decode(message.value);
  },
  toProto(message) {
    return QueryValidatorSlashesResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.QueryValidatorSlashesResponse",
      value: QueryValidatorSlashesResponse.encode(message).finish()
    };
  }
};
function createBaseQueryDelegationRewardsRequest() {
  return {
    delegatorAddress: "",
    validatorAddress: ""
  };
}
const QueryDelegationRewardsRequest = {
  typeUrl: "/cosmos.distribution.v1beta1.QueryDelegationRewardsRequest",
  encode(message, writer = BinaryWriter.create()) {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.validatorAddress !== "") {
      writer.uint32(18).string(message.validatorAddress);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegationRewardsRequest();
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
  fromPartial(object) {
    const message = createBaseQueryDelegationRewardsRequest();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.validatorAddress = object.validatorAddress ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryDelegationRewardsRequest();
    if (object.delegator_address !== void 0 && object.delegator_address !== null) {
      message.delegatorAddress = object.delegator_address;
    }
    if (object.validator_address !== void 0 && object.validator_address !== null) {
      message.validatorAddress = object.validator_address;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.delegator_address = message.delegatorAddress === "" ? void 0 : message.delegatorAddress;
    obj.validator_address = message.validatorAddress === "" ? void 0 : message.validatorAddress;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryDelegationRewardsRequest.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryDelegationRewardsRequest",
      value: QueryDelegationRewardsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryDelegationRewardsRequest.decode(message.value);
  },
  toProto(message) {
    return QueryDelegationRewardsRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.QueryDelegationRewardsRequest",
      value: QueryDelegationRewardsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryDelegationRewardsResponse() {
  return {
    rewards: []
  };
}
const QueryDelegationRewardsResponse = {
  typeUrl: "/cosmos.distribution.v1beta1.QueryDelegationRewardsResponse",
  encode(message, writer = BinaryWriter.create()) {
    for (const v of message.rewards) {
      DecCoin.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegationRewardsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rewards.push(DecCoin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryDelegationRewardsResponse();
    message.rewards = object.rewards?.map((e) => DecCoin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryDelegationRewardsResponse();
    message.rewards = object.rewards?.map((e) => DecCoin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.rewards) {
      obj.rewards = message.rewards.map((e) => e ? DecCoin.toAmino(e) : void 0);
    } else {
      obj.rewards = message.rewards;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return QueryDelegationRewardsResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryDelegationRewardsResponse",
      value: QueryDelegationRewardsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryDelegationRewardsResponse.decode(message.value);
  },
  toProto(message) {
    return QueryDelegationRewardsResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.QueryDelegationRewardsResponse",
      value: QueryDelegationRewardsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryDelegationTotalRewardsRequest() {
  return {
    delegatorAddress: ""
  };
}
const QueryDelegationTotalRewardsRequest = {
  typeUrl: "/cosmos.distribution.v1beta1.QueryDelegationTotalRewardsRequest",
  encode(message, writer = BinaryWriter.create()) {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegationTotalRewardsRequest();
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
  fromPartial(object) {
    const message = createBaseQueryDelegationTotalRewardsRequest();
    message.delegatorAddress = object.delegatorAddress ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryDelegationTotalRewardsRequest();
    if (object.delegator_address !== void 0 && object.delegator_address !== null) {
      message.delegatorAddress = object.delegator_address;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.delegator_address = message.delegatorAddress === "" ? void 0 : message.delegatorAddress;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryDelegationTotalRewardsRequest.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryDelegationTotalRewardsRequest",
      value: QueryDelegationTotalRewardsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryDelegationTotalRewardsRequest.decode(message.value);
  },
  toProto(message) {
    return QueryDelegationTotalRewardsRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.QueryDelegationTotalRewardsRequest",
      value: QueryDelegationTotalRewardsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryDelegationTotalRewardsResponse() {
  return {
    rewards: [],
    total: []
  };
}
const QueryDelegationTotalRewardsResponse = {
  typeUrl: "/cosmos.distribution.v1beta1.QueryDelegationTotalRewardsResponse",
  encode(message, writer = BinaryWriter.create()) {
    for (const v of message.rewards) {
      DelegationDelegatorReward.encode(v, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.total) {
      DecCoin.encode(v, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegationTotalRewardsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rewards.push(DelegationDelegatorReward.decode(reader, reader.uint32()));
          break;
        case 2:
          message.total.push(DecCoin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryDelegationTotalRewardsResponse();
    message.rewards = object.rewards?.map((e) => DelegationDelegatorReward.fromPartial(e)) || [];
    message.total = object.total?.map((e) => DecCoin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryDelegationTotalRewardsResponse();
    message.rewards = object.rewards?.map((e) => DelegationDelegatorReward.fromAmino(e)) || [];
    message.total = object.total?.map((e) => DecCoin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.rewards) {
      obj.rewards = message.rewards.map((e) => e ? DelegationDelegatorReward.toAmino(e) : void 0);
    } else {
      obj.rewards = message.rewards;
    }
    if (message.total) {
      obj.total = message.total.map((e) => e ? DecCoin.toAmino(e) : void 0);
    } else {
      obj.total = message.total;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return QueryDelegationTotalRewardsResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryDelegationTotalRewardsResponse",
      value: QueryDelegationTotalRewardsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryDelegationTotalRewardsResponse.decode(message.value);
  },
  toProto(message) {
    return QueryDelegationTotalRewardsResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.QueryDelegationTotalRewardsResponse",
      value: QueryDelegationTotalRewardsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryDelegatorValidatorsRequest() {
  return {
    delegatorAddress: ""
  };
}
const QueryDelegatorValidatorsRequest = {
  typeUrl: "/cosmos.distribution.v1beta1.QueryDelegatorValidatorsRequest",
  encode(message, writer = BinaryWriter.create()) {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorValidatorsRequest();
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
  fromPartial(object) {
    const message = createBaseQueryDelegatorValidatorsRequest();
    message.delegatorAddress = object.delegatorAddress ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryDelegatorValidatorsRequest();
    if (object.delegator_address !== void 0 && object.delegator_address !== null) {
      message.delegatorAddress = object.delegator_address;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.delegator_address = message.delegatorAddress === "" ? void 0 : message.delegatorAddress;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryDelegatorValidatorsRequest.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryDelegatorValidatorsRequest",
      value: QueryDelegatorValidatorsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryDelegatorValidatorsRequest.decode(message.value);
  },
  toProto(message) {
    return QueryDelegatorValidatorsRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.QueryDelegatorValidatorsRequest",
      value: QueryDelegatorValidatorsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryDelegatorValidatorsResponse() {
  return {
    validators: []
  };
}
const QueryDelegatorValidatorsResponse = {
  typeUrl: "/cosmos.distribution.v1beta1.QueryDelegatorValidatorsResponse",
  encode(message, writer = BinaryWriter.create()) {
    for (const v of message.validators) {
      writer.uint32(10).string(v);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorValidatorsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validators.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryDelegatorValidatorsResponse();
    message.validators = object.validators?.map((e) => e) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryDelegatorValidatorsResponse();
    message.validators = object.validators?.map((e) => e) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.validators) {
      obj.validators = message.validators.map((e) => e);
    } else {
      obj.validators = message.validators;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return QueryDelegatorValidatorsResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryDelegatorValidatorsResponse",
      value: QueryDelegatorValidatorsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryDelegatorValidatorsResponse.decode(message.value);
  },
  toProto(message) {
    return QueryDelegatorValidatorsResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.QueryDelegatorValidatorsResponse",
      value: QueryDelegatorValidatorsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryDelegatorWithdrawAddressRequest() {
  return {
    delegatorAddress: ""
  };
}
const QueryDelegatorWithdrawAddressRequest = {
  typeUrl: "/cosmos.distribution.v1beta1.QueryDelegatorWithdrawAddressRequest",
  encode(message, writer = BinaryWriter.create()) {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorWithdrawAddressRequest();
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
  fromPartial(object) {
    const message = createBaseQueryDelegatorWithdrawAddressRequest();
    message.delegatorAddress = object.delegatorAddress ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryDelegatorWithdrawAddressRequest();
    if (object.delegator_address !== void 0 && object.delegator_address !== null) {
      message.delegatorAddress = object.delegator_address;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.delegator_address = message.delegatorAddress === "" ? void 0 : message.delegatorAddress;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryDelegatorWithdrawAddressRequest.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryDelegatorWithdrawAddressRequest",
      value: QueryDelegatorWithdrawAddressRequest.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryDelegatorWithdrawAddressRequest.decode(message.value);
  },
  toProto(message) {
    return QueryDelegatorWithdrawAddressRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.QueryDelegatorWithdrawAddressRequest",
      value: QueryDelegatorWithdrawAddressRequest.encode(message).finish()
    };
  }
};
function createBaseQueryDelegatorWithdrawAddressResponse() {
  return {
    withdrawAddress: ""
  };
}
const QueryDelegatorWithdrawAddressResponse = {
  typeUrl: "/cosmos.distribution.v1beta1.QueryDelegatorWithdrawAddressResponse",
  encode(message, writer = BinaryWriter.create()) {
    if (message.withdrawAddress !== "") {
      writer.uint32(10).string(message.withdrawAddress);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorWithdrawAddressResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.withdrawAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryDelegatorWithdrawAddressResponse();
    message.withdrawAddress = object.withdrawAddress ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryDelegatorWithdrawAddressResponse();
    if (object.withdraw_address !== void 0 && object.withdraw_address !== null) {
      message.withdrawAddress = object.withdraw_address;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.withdraw_address = message.withdrawAddress === "" ? void 0 : message.withdrawAddress;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryDelegatorWithdrawAddressResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryDelegatorWithdrawAddressResponse",
      value: QueryDelegatorWithdrawAddressResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryDelegatorWithdrawAddressResponse.decode(message.value);
  },
  toProto(message) {
    return QueryDelegatorWithdrawAddressResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.QueryDelegatorWithdrawAddressResponse",
      value: QueryDelegatorWithdrawAddressResponse.encode(message).finish()
    };
  }
};
function createBaseQueryCommunityPoolRequest() {
  return {};
}
const QueryCommunityPoolRequest = {
  typeUrl: "/cosmos.distribution.v1beta1.QueryCommunityPoolRequest",
  encode(_, writer = BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryCommunityPoolRequest();
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
    const message = createBaseQueryCommunityPoolRequest();
    return message;
  },
  fromAmino(_) {
    const message = createBaseQueryCommunityPoolRequest();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return QueryCommunityPoolRequest.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryCommunityPoolRequest",
      value: QueryCommunityPoolRequest.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryCommunityPoolRequest.decode(message.value);
  },
  toProto(message) {
    return QueryCommunityPoolRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.QueryCommunityPoolRequest",
      value: QueryCommunityPoolRequest.encode(message).finish()
    };
  }
};
function createBaseQueryCommunityPoolResponse() {
  return {
    pool: []
  };
}
const QueryCommunityPoolResponse = {
  typeUrl: "/cosmos.distribution.v1beta1.QueryCommunityPoolResponse",
  encode(message, writer = BinaryWriter.create()) {
    for (const v of message.pool) {
      DecCoin.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryCommunityPoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pool.push(DecCoin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryCommunityPoolResponse();
    message.pool = object.pool?.map((e) => DecCoin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryCommunityPoolResponse();
    message.pool = object.pool?.map((e) => DecCoin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.pool) {
      obj.pool = message.pool.map((e) => e ? DecCoin.toAmino(e) : void 0);
    } else {
      obj.pool = message.pool;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return QueryCommunityPoolResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryCommunityPoolResponse",
      value: QueryCommunityPoolResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryCommunityPoolResponse.decode(message.value);
  },
  toProto(message) {
    return QueryCommunityPoolResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.QueryCommunityPoolResponse",
      value: QueryCommunityPoolResponse.encode(message).finish()
    };
  }
};
function createBaseQueryTokenizeShareRecordRewardRequest() {
  return {
    ownerAddress: ""
  };
}
const QueryTokenizeShareRecordRewardRequest = {
  typeUrl: "/cosmos.distribution.v1beta1.QueryTokenizeShareRecordRewardRequest",
  encode(message, writer = BinaryWriter.create()) {
    if (message.ownerAddress !== "") {
      writer.uint32(10).string(message.ownerAddress);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryTokenizeShareRecordRewardRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ownerAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryTokenizeShareRecordRewardRequest();
    message.ownerAddress = object.ownerAddress ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryTokenizeShareRecordRewardRequest();
    if (object.owner_address !== void 0 && object.owner_address !== null) {
      message.ownerAddress = object.owner_address;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.owner_address = message.ownerAddress === "" ? void 0 : message.ownerAddress;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryTokenizeShareRecordRewardRequest.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryTokenizeShareRecordRewardRequest",
      value: QueryTokenizeShareRecordRewardRequest.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryTokenizeShareRecordRewardRequest.decode(message.value);
  },
  toProto(message) {
    return QueryTokenizeShareRecordRewardRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.QueryTokenizeShareRecordRewardRequest",
      value: QueryTokenizeShareRecordRewardRequest.encode(message).finish()
    };
  }
};
function createBaseQueryTokenizeShareRecordRewardResponse() {
  return {
    rewards: [],
    total: []
  };
}
const QueryTokenizeShareRecordRewardResponse = {
  typeUrl: "/cosmos.distribution.v1beta1.QueryTokenizeShareRecordRewardResponse",
  encode(message, writer = BinaryWriter.create()) {
    for (const v of message.rewards) {
      TokenizeShareRecordReward.encode(v, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.total) {
      DecCoin.encode(v, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryTokenizeShareRecordRewardResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rewards.push(TokenizeShareRecordReward.decode(reader, reader.uint32()));
          break;
        case 2:
          message.total.push(DecCoin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryTokenizeShareRecordRewardResponse();
    message.rewards = object.rewards?.map((e) => TokenizeShareRecordReward.fromPartial(e)) || [];
    message.total = object.total?.map((e) => DecCoin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryTokenizeShareRecordRewardResponse();
    message.rewards = object.rewards?.map((e) => TokenizeShareRecordReward.fromAmino(e)) || [];
    message.total = object.total?.map((e) => DecCoin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.rewards) {
      obj.rewards = message.rewards.map((e) => e ? TokenizeShareRecordReward.toAmino(e) : void 0);
    } else {
      obj.rewards = message.rewards;
    }
    if (message.total) {
      obj.total = message.total.map((e) => e ? DecCoin.toAmino(e) : void 0);
    } else {
      obj.total = message.total;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return QueryTokenizeShareRecordRewardResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryTokenizeShareRecordRewardResponse",
      value: QueryTokenizeShareRecordRewardResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryTokenizeShareRecordRewardResponse.decode(message.value);
  },
  toProto(message) {
    return QueryTokenizeShareRecordRewardResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.QueryTokenizeShareRecordRewardResponse",
      value: QueryTokenizeShareRecordRewardResponse.encode(message).finish()
    };
  }
};
export {
  QueryCommunityPoolRequest,
  QueryCommunityPoolResponse,
  QueryDelegationRewardsRequest,
  QueryDelegationRewardsResponse,
  QueryDelegationTotalRewardsRequest,
  QueryDelegationTotalRewardsResponse,
  QueryDelegatorValidatorsRequest,
  QueryDelegatorValidatorsResponse,
  QueryDelegatorWithdrawAddressRequest,
  QueryDelegatorWithdrawAddressResponse,
  QueryParamsRequest,
  QueryParamsResponse,
  QueryTokenizeShareRecordRewardRequest,
  QueryTokenizeShareRecordRewardResponse,
  QueryValidatorCommissionRequest,
  QueryValidatorCommissionResponse,
  QueryValidatorOutstandingRewardsRequest,
  QueryValidatorOutstandingRewardsResponse,
  QueryValidatorSlashesRequest,
  QueryValidatorSlashesResponse
};
