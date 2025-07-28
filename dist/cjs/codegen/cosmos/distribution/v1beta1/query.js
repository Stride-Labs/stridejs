"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var query_exports = {};
__export(query_exports, {
  QueryCommunityPoolRequest: () => QueryCommunityPoolRequest,
  QueryCommunityPoolResponse: () => QueryCommunityPoolResponse,
  QueryDelegationRewardsRequest: () => QueryDelegationRewardsRequest,
  QueryDelegationRewardsResponse: () => QueryDelegationRewardsResponse,
  QueryDelegationTotalRewardsRequest: () => QueryDelegationTotalRewardsRequest,
  QueryDelegationTotalRewardsResponse: () => QueryDelegationTotalRewardsResponse,
  QueryDelegatorValidatorsRequest: () => QueryDelegatorValidatorsRequest,
  QueryDelegatorValidatorsResponse: () => QueryDelegatorValidatorsResponse,
  QueryDelegatorWithdrawAddressRequest: () => QueryDelegatorWithdrawAddressRequest,
  QueryDelegatorWithdrawAddressResponse: () => QueryDelegatorWithdrawAddressResponse,
  QueryParamsRequest: () => QueryParamsRequest,
  QueryParamsResponse: () => QueryParamsResponse,
  QueryValidatorCommissionRequest: () => QueryValidatorCommissionRequest,
  QueryValidatorCommissionResponse: () => QueryValidatorCommissionResponse,
  QueryValidatorDistributionInfoRequest: () => QueryValidatorDistributionInfoRequest,
  QueryValidatorDistributionInfoResponse: () => QueryValidatorDistributionInfoResponse,
  QueryValidatorOutstandingRewardsRequest: () => QueryValidatorOutstandingRewardsRequest,
  QueryValidatorOutstandingRewardsResponse: () => QueryValidatorOutstandingRewardsResponse,
  QueryValidatorSlashesRequest: () => QueryValidatorSlashesRequest,
  QueryValidatorSlashesResponse: () => QueryValidatorSlashesResponse
});
module.exports = __toCommonJS(query_exports);
var import_pagination = require("../../base/query/v1beta1/pagination");
var import_distribution = require("./distribution");
var import_coin = require("../../base/v1beta1/coin");
var import_binary = require("../../../binary");
function createBaseQueryParamsRequest() {
  return {};
}
const QueryParamsRequest = {
  typeUrl: "/cosmos.distribution.v1beta1.QueryParamsRequest",
  encode(_, writer = import_binary.BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
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
    params: import_distribution.Params.fromPartial({})
  };
}
const QueryParamsResponse = {
  typeUrl: "/cosmos.distribution.v1beta1.QueryParamsResponse",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.params !== void 0) {
      import_distribution.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = import_distribution.Params.decode(reader, reader.uint32());
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
    message.params = object.params !== void 0 && object.params !== null ? import_distribution.Params.fromPartial(object.params) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryParamsResponse();
    if (object.params !== void 0 && object.params !== null) {
      message.params = import_distribution.Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.params = message.params ? import_distribution.Params.toAmino(message.params) : import_distribution.Params.toAmino(import_distribution.Params.fromPartial({}));
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
function createBaseQueryValidatorDistributionInfoRequest() {
  return {
    validatorAddress: ""
  };
}
const QueryValidatorDistributionInfoRequest = {
  typeUrl: "/cosmos.distribution.v1beta1.QueryValidatorDistributionInfoRequest",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorDistributionInfoRequest();
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
    const message = createBaseQueryValidatorDistributionInfoRequest();
    message.validatorAddress = object.validatorAddress ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryValidatorDistributionInfoRequest();
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
    return QueryValidatorDistributionInfoRequest.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryValidatorDistributionInfoRequest",
      value: QueryValidatorDistributionInfoRequest.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryValidatorDistributionInfoRequest.decode(message.value);
  },
  toProto(message) {
    return QueryValidatorDistributionInfoRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.QueryValidatorDistributionInfoRequest",
      value: QueryValidatorDistributionInfoRequest.encode(message).finish()
    };
  }
};
function createBaseQueryValidatorDistributionInfoResponse() {
  return {
    operatorAddress: "",
    selfBondRewards: [],
    commission: []
  };
}
const QueryValidatorDistributionInfoResponse = {
  typeUrl: "/cosmos.distribution.v1beta1.QueryValidatorDistributionInfoResponse",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.operatorAddress !== "") {
      writer.uint32(10).string(message.operatorAddress);
    }
    for (const v of message.selfBondRewards) {
      import_coin.DecCoin.encode(v, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.commission) {
      import_coin.DecCoin.encode(v, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorDistributionInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operatorAddress = reader.string();
          break;
        case 2:
          message.selfBondRewards.push(import_coin.DecCoin.decode(reader, reader.uint32()));
          break;
        case 3:
          message.commission.push(import_coin.DecCoin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryValidatorDistributionInfoResponse();
    message.operatorAddress = object.operatorAddress ?? "";
    message.selfBondRewards = object.selfBondRewards?.map((e) => import_coin.DecCoin.fromPartial(e)) || [];
    message.commission = object.commission?.map((e) => import_coin.DecCoin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryValidatorDistributionInfoResponse();
    if (object.operator_address !== void 0 && object.operator_address !== null) {
      message.operatorAddress = object.operator_address;
    }
    message.selfBondRewards = object.self_bond_rewards?.map((e) => import_coin.DecCoin.fromAmino(e)) || [];
    message.commission = object.commission?.map((e) => import_coin.DecCoin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.operator_address = message.operatorAddress === "" ? void 0 : message.operatorAddress;
    if (message.selfBondRewards) {
      obj.self_bond_rewards = message.selfBondRewards.map((e) => e ? import_coin.DecCoin.toAmino(e) : void 0);
    } else {
      obj.self_bond_rewards = message.selfBondRewards;
    }
    if (message.commission) {
      obj.commission = message.commission.map((e) => e ? import_coin.DecCoin.toAmino(e) : void 0);
    } else {
      obj.commission = message.commission;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return QueryValidatorDistributionInfoResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryValidatorDistributionInfoResponse",
      value: QueryValidatorDistributionInfoResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryValidatorDistributionInfoResponse.decode(message.value);
  },
  toProto(message) {
    return QueryValidatorDistributionInfoResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.QueryValidatorDistributionInfoResponse",
      value: QueryValidatorDistributionInfoResponse.encode(message).finish()
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
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
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
    rewards: import_distribution.ValidatorOutstandingRewards.fromPartial({})
  };
}
const QueryValidatorOutstandingRewardsResponse = {
  typeUrl: "/cosmos.distribution.v1beta1.QueryValidatorOutstandingRewardsResponse",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.rewards !== void 0) {
      import_distribution.ValidatorOutstandingRewards.encode(message.rewards, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorOutstandingRewardsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rewards = import_distribution.ValidatorOutstandingRewards.decode(reader, reader.uint32());
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
    message.rewards = object.rewards !== void 0 && object.rewards !== null ? import_distribution.ValidatorOutstandingRewards.fromPartial(object.rewards) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryValidatorOutstandingRewardsResponse();
    if (object.rewards !== void 0 && object.rewards !== null) {
      message.rewards = import_distribution.ValidatorOutstandingRewards.fromAmino(object.rewards);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.rewards = message.rewards ? import_distribution.ValidatorOutstandingRewards.toAmino(message.rewards) : import_distribution.ValidatorOutstandingRewards.toAmino(import_distribution.ValidatorOutstandingRewards.fromPartial({}));
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
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
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
    commission: import_distribution.ValidatorAccumulatedCommission.fromPartial({})
  };
}
const QueryValidatorCommissionResponse = {
  typeUrl: "/cosmos.distribution.v1beta1.QueryValidatorCommissionResponse",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.commission !== void 0) {
      import_distribution.ValidatorAccumulatedCommission.encode(message.commission, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorCommissionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.commission = import_distribution.ValidatorAccumulatedCommission.decode(reader, reader.uint32());
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
    message.commission = object.commission !== void 0 && object.commission !== null ? import_distribution.ValidatorAccumulatedCommission.fromPartial(object.commission) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryValidatorCommissionResponse();
    if (object.commission !== void 0 && object.commission !== null) {
      message.commission = import_distribution.ValidatorAccumulatedCommission.fromAmino(object.commission);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.commission = message.commission ? import_distribution.ValidatorAccumulatedCommission.toAmino(message.commission) : import_distribution.ValidatorAccumulatedCommission.toAmino(import_distribution.ValidatorAccumulatedCommission.fromPartial({}));
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
  encode(message, writer = import_binary.BinaryWriter.create()) {
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
      import_pagination.PageRequest.encode(message.pagination, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
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
          message.pagination = import_pagination.PageRequest.decode(reader, reader.uint32());
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
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? import_pagination.PageRequest.fromPartial(object.pagination) : void 0;
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
      message.pagination = import_pagination.PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.validator_address = message.validatorAddress === "" ? void 0 : message.validatorAddress;
    obj.starting_height = message.startingHeight !== BigInt(0) ? message.startingHeight?.toString() : void 0;
    obj.ending_height = message.endingHeight !== BigInt(0) ? message.endingHeight?.toString() : void 0;
    obj.pagination = message.pagination ? import_pagination.PageRequest.toAmino(message.pagination) : void 0;
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
  encode(message, writer = import_binary.BinaryWriter.create()) {
    for (const v of message.slashes) {
      import_distribution.ValidatorSlashEvent.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== void 0) {
      import_pagination.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorSlashesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.slashes.push(import_distribution.ValidatorSlashEvent.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = import_pagination.PageResponse.decode(reader, reader.uint32());
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
    message.slashes = object.slashes?.map((e) => import_distribution.ValidatorSlashEvent.fromPartial(e)) || [];
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? import_pagination.PageResponse.fromPartial(object.pagination) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryValidatorSlashesResponse();
    message.slashes = object.slashes?.map((e) => import_distribution.ValidatorSlashEvent.fromAmino(e)) || [];
    if (object.pagination !== void 0 && object.pagination !== null) {
      message.pagination = import_pagination.PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.slashes) {
      obj.slashes = message.slashes.map((e) => e ? import_distribution.ValidatorSlashEvent.toAmino(e) : void 0);
    } else {
      obj.slashes = message.slashes;
    }
    obj.pagination = message.pagination ? import_pagination.PageResponse.toAmino(message.pagination) : void 0;
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
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.validatorAddress !== "") {
      writer.uint32(18).string(message.validatorAddress);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
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
  encode(message, writer = import_binary.BinaryWriter.create()) {
    for (const v of message.rewards) {
      import_coin.DecCoin.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegationRewardsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rewards.push(import_coin.DecCoin.decode(reader, reader.uint32()));
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
    message.rewards = object.rewards?.map((e) => import_coin.DecCoin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryDelegationRewardsResponse();
    message.rewards = object.rewards?.map((e) => import_coin.DecCoin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.rewards) {
      obj.rewards = message.rewards.map((e) => e ? import_coin.DecCoin.toAmino(e) : void 0);
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
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
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
  encode(message, writer = import_binary.BinaryWriter.create()) {
    for (const v of message.rewards) {
      import_distribution.DelegationDelegatorReward.encode(v, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.total) {
      import_coin.DecCoin.encode(v, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegationTotalRewardsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rewards.push(import_distribution.DelegationDelegatorReward.decode(reader, reader.uint32()));
          break;
        case 2:
          message.total.push(import_coin.DecCoin.decode(reader, reader.uint32()));
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
    message.rewards = object.rewards?.map((e) => import_distribution.DelegationDelegatorReward.fromPartial(e)) || [];
    message.total = object.total?.map((e) => import_coin.DecCoin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryDelegationTotalRewardsResponse();
    message.rewards = object.rewards?.map((e) => import_distribution.DelegationDelegatorReward.fromAmino(e)) || [];
    message.total = object.total?.map((e) => import_coin.DecCoin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.rewards) {
      obj.rewards = message.rewards.map((e) => e ? import_distribution.DelegationDelegatorReward.toAmino(e) : void 0);
    } else {
      obj.rewards = message.rewards;
    }
    if (message.total) {
      obj.total = message.total.map((e) => e ? import_coin.DecCoin.toAmino(e) : void 0);
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
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
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
  encode(message, writer = import_binary.BinaryWriter.create()) {
    for (const v of message.validators) {
      writer.uint32(10).string(v);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
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
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
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
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.withdrawAddress !== "") {
      writer.uint32(10).string(message.withdrawAddress);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
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
  encode(_, writer = import_binary.BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
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
  encode(message, writer = import_binary.BinaryWriter.create()) {
    for (const v of message.pool) {
      import_coin.DecCoin.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryCommunityPoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pool.push(import_coin.DecCoin.decode(reader, reader.uint32()));
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
    message.pool = object.pool?.map((e) => import_coin.DecCoin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryCommunityPoolResponse();
    message.pool = object.pool?.map((e) => import_coin.DecCoin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.pool) {
      obj.pool = message.pool.map((e) => e ? import_coin.DecCoin.toAmino(e) : void 0);
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
// Removed broken CommonJS export annotation
