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
  QueryDelegationRequest: () => QueryDelegationRequest,
  QueryDelegationResponse: () => QueryDelegationResponse,
  QueryDelegatorDelegationsRequest: () => QueryDelegatorDelegationsRequest,
  QueryDelegatorDelegationsResponse: () => QueryDelegatorDelegationsResponse,
  QueryDelegatorUnbondingDelegationsRequest: () => QueryDelegatorUnbondingDelegationsRequest,
  QueryDelegatorUnbondingDelegationsResponse: () => QueryDelegatorUnbondingDelegationsResponse,
  QueryDelegatorValidatorRequest: () => QueryDelegatorValidatorRequest,
  QueryDelegatorValidatorResponse: () => QueryDelegatorValidatorResponse,
  QueryDelegatorValidatorsRequest: () => QueryDelegatorValidatorsRequest,
  QueryDelegatorValidatorsResponse: () => QueryDelegatorValidatorsResponse,
  QueryHistoricalInfoRequest: () => QueryHistoricalInfoRequest,
  QueryHistoricalInfoResponse: () => QueryHistoricalInfoResponse,
  QueryParamsRequest: () => QueryParamsRequest,
  QueryParamsResponse: () => QueryParamsResponse,
  QueryPoolRequest: () => QueryPoolRequest,
  QueryPoolResponse: () => QueryPoolResponse,
  QueryRedelegationsRequest: () => QueryRedelegationsRequest,
  QueryRedelegationsResponse: () => QueryRedelegationsResponse,
  QueryUnbondingDelegationRequest: () => QueryUnbondingDelegationRequest,
  QueryUnbondingDelegationResponse: () => QueryUnbondingDelegationResponse,
  QueryValidatorDelegationsRequest: () => QueryValidatorDelegationsRequest,
  QueryValidatorDelegationsResponse: () => QueryValidatorDelegationsResponse,
  QueryValidatorRequest: () => QueryValidatorRequest,
  QueryValidatorResponse: () => QueryValidatorResponse,
  QueryValidatorUnbondingDelegationsRequest: () => QueryValidatorUnbondingDelegationsRequest,
  QueryValidatorUnbondingDelegationsResponse: () => QueryValidatorUnbondingDelegationsResponse,
  QueryValidatorsRequest: () => QueryValidatorsRequest,
  QueryValidatorsResponse: () => QueryValidatorsResponse
});
module.exports = __toCommonJS(query_exports);
var import_pagination = require("../../base/query/v1beta1/pagination");
var import_staking = require("./staking");
var import_binary = require("../../../binary");
function createBaseQueryValidatorsRequest() {
  return {
    status: "",
    pagination: void 0
  };
}
const QueryValidatorsRequest = {
  typeUrl: "/cosmos.staking.v1beta1.QueryValidatorsRequest",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.status !== "") {
      writer.uint32(10).string(message.status);
    }
    if (message.pagination !== void 0) {
      import_pagination.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.status = reader.string();
          break;
        case 2:
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
    const message = createBaseQueryValidatorsRequest();
    message.status = object.status ?? "";
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? import_pagination.PageRequest.fromPartial(object.pagination) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryValidatorsRequest();
    if (object.status !== void 0 && object.status !== null) {
      message.status = object.status;
    }
    if (object.pagination !== void 0 && object.pagination !== null) {
      message.pagination = import_pagination.PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.status = message.status === "" ? void 0 : message.status;
    obj.pagination = message.pagination ? import_pagination.PageRequest.toAmino(message.pagination) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryValidatorsRequest.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryValidatorsRequest",
      value: QueryValidatorsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryValidatorsRequest.decode(message.value);
  },
  toProto(message) {
    return QueryValidatorsRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryValidatorsRequest",
      value: QueryValidatorsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryValidatorsResponse() {
  return {
    validators: [],
    pagination: void 0
  };
}
const QueryValidatorsResponse = {
  typeUrl: "/cosmos.staking.v1beta1.QueryValidatorsResponse",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    for (const v of message.validators) {
      import_staking.Validator.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== void 0) {
      import_pagination.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validators.push(import_staking.Validator.decode(reader, reader.uint32()));
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
    const message = createBaseQueryValidatorsResponse();
    message.validators = object.validators?.map((e) => import_staking.Validator.fromPartial(e)) || [];
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? import_pagination.PageResponse.fromPartial(object.pagination) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryValidatorsResponse();
    message.validators = object.validators?.map((e) => import_staking.Validator.fromAmino(e)) || [];
    if (object.pagination !== void 0 && object.pagination !== null) {
      message.pagination = import_pagination.PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.validators) {
      obj.validators = message.validators.map((e) => e ? import_staking.Validator.toAmino(e) : void 0);
    } else {
      obj.validators = message.validators;
    }
    obj.pagination = message.pagination ? import_pagination.PageResponse.toAmino(message.pagination) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryValidatorsResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryValidatorsResponse",
      value: QueryValidatorsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryValidatorsResponse.decode(message.value);
  },
  toProto(message) {
    return QueryValidatorsResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryValidatorsResponse",
      value: QueryValidatorsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryValidatorRequest() {
  return {
    validatorAddr: ""
  };
}
const QueryValidatorRequest = {
  typeUrl: "/cosmos.staking.v1beta1.QueryValidatorRequest",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.validatorAddr !== "") {
      writer.uint32(10).string(message.validatorAddr);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddr = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryValidatorRequest();
    message.validatorAddr = object.validatorAddr ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryValidatorRequest();
    if (object.validator_addr !== void 0 && object.validator_addr !== null) {
      message.validatorAddr = object.validator_addr;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.validator_addr = message.validatorAddr === "" ? void 0 : message.validatorAddr;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryValidatorRequest.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryValidatorRequest",
      value: QueryValidatorRequest.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryValidatorRequest.decode(message.value);
  },
  toProto(message) {
    return QueryValidatorRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryValidatorRequest",
      value: QueryValidatorRequest.encode(message).finish()
    };
  }
};
function createBaseQueryValidatorResponse() {
  return {
    validator: import_staking.Validator.fromPartial({})
  };
}
const QueryValidatorResponse = {
  typeUrl: "/cosmos.staking.v1beta1.QueryValidatorResponse",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.validator !== void 0) {
      import_staking.Validator.encode(message.validator, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validator = import_staking.Validator.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryValidatorResponse();
    message.validator = object.validator !== void 0 && object.validator !== null ? import_staking.Validator.fromPartial(object.validator) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryValidatorResponse();
    if (object.validator !== void 0 && object.validator !== null) {
      message.validator = import_staking.Validator.fromAmino(object.validator);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.validator = message.validator ? import_staking.Validator.toAmino(message.validator) : import_staking.Validator.toAmino(import_staking.Validator.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object) {
    return QueryValidatorResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryValidatorResponse",
      value: QueryValidatorResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryValidatorResponse.decode(message.value);
  },
  toProto(message) {
    return QueryValidatorResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryValidatorResponse",
      value: QueryValidatorResponse.encode(message).finish()
    };
  }
};
function createBaseQueryValidatorDelegationsRequest() {
  return {
    validatorAddr: "",
    pagination: void 0
  };
}
const QueryValidatorDelegationsRequest = {
  typeUrl: "/cosmos.staking.v1beta1.QueryValidatorDelegationsRequest",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.validatorAddr !== "") {
      writer.uint32(10).string(message.validatorAddr);
    }
    if (message.pagination !== void 0) {
      import_pagination.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorDelegationsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddr = reader.string();
          break;
        case 2:
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
    const message = createBaseQueryValidatorDelegationsRequest();
    message.validatorAddr = object.validatorAddr ?? "";
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? import_pagination.PageRequest.fromPartial(object.pagination) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryValidatorDelegationsRequest();
    if (object.validator_addr !== void 0 && object.validator_addr !== null) {
      message.validatorAddr = object.validator_addr;
    }
    if (object.pagination !== void 0 && object.pagination !== null) {
      message.pagination = import_pagination.PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.validator_addr = message.validatorAddr === "" ? void 0 : message.validatorAddr;
    obj.pagination = message.pagination ? import_pagination.PageRequest.toAmino(message.pagination) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryValidatorDelegationsRequest.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryValidatorDelegationsRequest",
      value: QueryValidatorDelegationsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryValidatorDelegationsRequest.decode(message.value);
  },
  toProto(message) {
    return QueryValidatorDelegationsRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryValidatorDelegationsRequest",
      value: QueryValidatorDelegationsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryValidatorDelegationsResponse() {
  return {
    delegationResponses: [],
    pagination: void 0
  };
}
const QueryValidatorDelegationsResponse = {
  typeUrl: "/cosmos.staking.v1beta1.QueryValidatorDelegationsResponse",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    for (const v of message.delegationResponses) {
      import_staking.DelegationResponse.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== void 0) {
      import_pagination.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorDelegationsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegationResponses.push(import_staking.DelegationResponse.decode(reader, reader.uint32()));
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
    const message = createBaseQueryValidatorDelegationsResponse();
    message.delegationResponses = object.delegationResponses?.map((e) => import_staking.DelegationResponse.fromPartial(e)) || [];
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? import_pagination.PageResponse.fromPartial(object.pagination) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryValidatorDelegationsResponse();
    message.delegationResponses = object.delegation_responses?.map((e) => import_staking.DelegationResponse.fromAmino(e)) || [];
    if (object.pagination !== void 0 && object.pagination !== null) {
      message.pagination = import_pagination.PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.delegationResponses) {
      obj.delegation_responses = message.delegationResponses.map((e) => e ? import_staking.DelegationResponse.toAmino(e) : void 0);
    } else {
      obj.delegation_responses = message.delegationResponses;
    }
    obj.pagination = message.pagination ? import_pagination.PageResponse.toAmino(message.pagination) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryValidatorDelegationsResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryValidatorDelegationsResponse",
      value: QueryValidatorDelegationsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryValidatorDelegationsResponse.decode(message.value);
  },
  toProto(message) {
    return QueryValidatorDelegationsResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryValidatorDelegationsResponse",
      value: QueryValidatorDelegationsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryValidatorUnbondingDelegationsRequest() {
  return {
    validatorAddr: "",
    pagination: void 0
  };
}
const QueryValidatorUnbondingDelegationsRequest = {
  typeUrl: "/cosmos.staking.v1beta1.QueryValidatorUnbondingDelegationsRequest",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.validatorAddr !== "") {
      writer.uint32(10).string(message.validatorAddr);
    }
    if (message.pagination !== void 0) {
      import_pagination.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorUnbondingDelegationsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddr = reader.string();
          break;
        case 2:
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
    const message = createBaseQueryValidatorUnbondingDelegationsRequest();
    message.validatorAddr = object.validatorAddr ?? "";
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? import_pagination.PageRequest.fromPartial(object.pagination) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryValidatorUnbondingDelegationsRequest();
    if (object.validator_addr !== void 0 && object.validator_addr !== null) {
      message.validatorAddr = object.validator_addr;
    }
    if (object.pagination !== void 0 && object.pagination !== null) {
      message.pagination = import_pagination.PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.validator_addr = message.validatorAddr === "" ? void 0 : message.validatorAddr;
    obj.pagination = message.pagination ? import_pagination.PageRequest.toAmino(message.pagination) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryValidatorUnbondingDelegationsRequest.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryValidatorUnbondingDelegationsRequest",
      value: QueryValidatorUnbondingDelegationsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryValidatorUnbondingDelegationsRequest.decode(message.value);
  },
  toProto(message) {
    return QueryValidatorUnbondingDelegationsRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryValidatorUnbondingDelegationsRequest",
      value: QueryValidatorUnbondingDelegationsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryValidatorUnbondingDelegationsResponse() {
  return {
    unbondingResponses: [],
    pagination: void 0
  };
}
const QueryValidatorUnbondingDelegationsResponse = {
  typeUrl: "/cosmos.staking.v1beta1.QueryValidatorUnbondingDelegationsResponse",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    for (const v of message.unbondingResponses) {
      import_staking.UnbondingDelegation.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== void 0) {
      import_pagination.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorUnbondingDelegationsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.unbondingResponses.push(import_staking.UnbondingDelegation.decode(reader, reader.uint32()));
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
    const message = createBaseQueryValidatorUnbondingDelegationsResponse();
    message.unbondingResponses = object.unbondingResponses?.map((e) => import_staking.UnbondingDelegation.fromPartial(e)) || [];
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? import_pagination.PageResponse.fromPartial(object.pagination) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryValidatorUnbondingDelegationsResponse();
    message.unbondingResponses = object.unbonding_responses?.map((e) => import_staking.UnbondingDelegation.fromAmino(e)) || [];
    if (object.pagination !== void 0 && object.pagination !== null) {
      message.pagination = import_pagination.PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.unbondingResponses) {
      obj.unbonding_responses = message.unbondingResponses.map((e) => e ? import_staking.UnbondingDelegation.toAmino(e) : void 0);
    } else {
      obj.unbonding_responses = message.unbondingResponses;
    }
    obj.pagination = message.pagination ? import_pagination.PageResponse.toAmino(message.pagination) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryValidatorUnbondingDelegationsResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryValidatorUnbondingDelegationsResponse",
      value: QueryValidatorUnbondingDelegationsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryValidatorUnbondingDelegationsResponse.decode(message.value);
  },
  toProto(message) {
    return QueryValidatorUnbondingDelegationsResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryValidatorUnbondingDelegationsResponse",
      value: QueryValidatorUnbondingDelegationsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryDelegationRequest() {
  return {
    delegatorAddr: "",
    validatorAddr: ""
  };
}
const QueryDelegationRequest = {
  typeUrl: "/cosmos.staking.v1beta1.QueryDelegationRequest",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.delegatorAddr !== "") {
      writer.uint32(10).string(message.delegatorAddr);
    }
    if (message.validatorAddr !== "") {
      writer.uint32(18).string(message.validatorAddr);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddr = reader.string();
          break;
        case 2:
          message.validatorAddr = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryDelegationRequest();
    message.delegatorAddr = object.delegatorAddr ?? "";
    message.validatorAddr = object.validatorAddr ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryDelegationRequest();
    if (object.delegator_addr !== void 0 && object.delegator_addr !== null) {
      message.delegatorAddr = object.delegator_addr;
    }
    if (object.validator_addr !== void 0 && object.validator_addr !== null) {
      message.validatorAddr = object.validator_addr;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.delegator_addr = message.delegatorAddr === "" ? void 0 : message.delegatorAddr;
    obj.validator_addr = message.validatorAddr === "" ? void 0 : message.validatorAddr;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryDelegationRequest.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryDelegationRequest",
      value: QueryDelegationRequest.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryDelegationRequest.decode(message.value);
  },
  toProto(message) {
    return QueryDelegationRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryDelegationRequest",
      value: QueryDelegationRequest.encode(message).finish()
    };
  }
};
function createBaseQueryDelegationResponse() {
  return {
    delegationResponse: void 0
  };
}
const QueryDelegationResponse = {
  typeUrl: "/cosmos.staking.v1beta1.QueryDelegationResponse",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.delegationResponse !== void 0) {
      import_staking.DelegationResponse.encode(message.delegationResponse, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegationResponse = import_staking.DelegationResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryDelegationResponse();
    message.delegationResponse = object.delegationResponse !== void 0 && object.delegationResponse !== null ? import_staking.DelegationResponse.fromPartial(object.delegationResponse) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryDelegationResponse();
    if (object.delegation_response !== void 0 && object.delegation_response !== null) {
      message.delegationResponse = import_staking.DelegationResponse.fromAmino(object.delegation_response);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.delegation_response = message.delegationResponse ? import_staking.DelegationResponse.toAmino(message.delegationResponse) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryDelegationResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryDelegationResponse",
      value: QueryDelegationResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryDelegationResponse.decode(message.value);
  },
  toProto(message) {
    return QueryDelegationResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryDelegationResponse",
      value: QueryDelegationResponse.encode(message).finish()
    };
  }
};
function createBaseQueryUnbondingDelegationRequest() {
  return {
    delegatorAddr: "",
    validatorAddr: ""
  };
}
const QueryUnbondingDelegationRequest = {
  typeUrl: "/cosmos.staking.v1beta1.QueryUnbondingDelegationRequest",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.delegatorAddr !== "") {
      writer.uint32(10).string(message.delegatorAddr);
    }
    if (message.validatorAddr !== "") {
      writer.uint32(18).string(message.validatorAddr);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryUnbondingDelegationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddr = reader.string();
          break;
        case 2:
          message.validatorAddr = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryUnbondingDelegationRequest();
    message.delegatorAddr = object.delegatorAddr ?? "";
    message.validatorAddr = object.validatorAddr ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryUnbondingDelegationRequest();
    if (object.delegator_addr !== void 0 && object.delegator_addr !== null) {
      message.delegatorAddr = object.delegator_addr;
    }
    if (object.validator_addr !== void 0 && object.validator_addr !== null) {
      message.validatorAddr = object.validator_addr;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.delegator_addr = message.delegatorAddr === "" ? void 0 : message.delegatorAddr;
    obj.validator_addr = message.validatorAddr === "" ? void 0 : message.validatorAddr;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryUnbondingDelegationRequest.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryUnbondingDelegationRequest",
      value: QueryUnbondingDelegationRequest.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryUnbondingDelegationRequest.decode(message.value);
  },
  toProto(message) {
    return QueryUnbondingDelegationRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryUnbondingDelegationRequest",
      value: QueryUnbondingDelegationRequest.encode(message).finish()
    };
  }
};
function createBaseQueryUnbondingDelegationResponse() {
  return {
    unbond: import_staking.UnbondingDelegation.fromPartial({})
  };
}
const QueryUnbondingDelegationResponse = {
  typeUrl: "/cosmos.staking.v1beta1.QueryUnbondingDelegationResponse",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.unbond !== void 0) {
      import_staking.UnbondingDelegation.encode(message.unbond, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryUnbondingDelegationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.unbond = import_staking.UnbondingDelegation.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryUnbondingDelegationResponse();
    message.unbond = object.unbond !== void 0 && object.unbond !== null ? import_staking.UnbondingDelegation.fromPartial(object.unbond) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryUnbondingDelegationResponse();
    if (object.unbond !== void 0 && object.unbond !== null) {
      message.unbond = import_staking.UnbondingDelegation.fromAmino(object.unbond);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.unbond = message.unbond ? import_staking.UnbondingDelegation.toAmino(message.unbond) : import_staking.UnbondingDelegation.toAmino(import_staking.UnbondingDelegation.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object) {
    return QueryUnbondingDelegationResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryUnbondingDelegationResponse",
      value: QueryUnbondingDelegationResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryUnbondingDelegationResponse.decode(message.value);
  },
  toProto(message) {
    return QueryUnbondingDelegationResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryUnbondingDelegationResponse",
      value: QueryUnbondingDelegationResponse.encode(message).finish()
    };
  }
};
function createBaseQueryDelegatorDelegationsRequest() {
  return {
    delegatorAddr: "",
    pagination: void 0
  };
}
const QueryDelegatorDelegationsRequest = {
  typeUrl: "/cosmos.staking.v1beta1.QueryDelegatorDelegationsRequest",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.delegatorAddr !== "") {
      writer.uint32(10).string(message.delegatorAddr);
    }
    if (message.pagination !== void 0) {
      import_pagination.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorDelegationsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddr = reader.string();
          break;
        case 2:
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
    const message = createBaseQueryDelegatorDelegationsRequest();
    message.delegatorAddr = object.delegatorAddr ?? "";
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? import_pagination.PageRequest.fromPartial(object.pagination) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryDelegatorDelegationsRequest();
    if (object.delegator_addr !== void 0 && object.delegator_addr !== null) {
      message.delegatorAddr = object.delegator_addr;
    }
    if (object.pagination !== void 0 && object.pagination !== null) {
      message.pagination = import_pagination.PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.delegator_addr = message.delegatorAddr === "" ? void 0 : message.delegatorAddr;
    obj.pagination = message.pagination ? import_pagination.PageRequest.toAmino(message.pagination) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryDelegatorDelegationsRequest.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryDelegatorDelegationsRequest",
      value: QueryDelegatorDelegationsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryDelegatorDelegationsRequest.decode(message.value);
  },
  toProto(message) {
    return QueryDelegatorDelegationsRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryDelegatorDelegationsRequest",
      value: QueryDelegatorDelegationsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryDelegatorDelegationsResponse() {
  return {
    delegationResponses: [],
    pagination: void 0
  };
}
const QueryDelegatorDelegationsResponse = {
  typeUrl: "/cosmos.staking.v1beta1.QueryDelegatorDelegationsResponse",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    for (const v of message.delegationResponses) {
      import_staking.DelegationResponse.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== void 0) {
      import_pagination.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorDelegationsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegationResponses.push(import_staking.DelegationResponse.decode(reader, reader.uint32()));
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
    const message = createBaseQueryDelegatorDelegationsResponse();
    message.delegationResponses = object.delegationResponses?.map((e) => import_staking.DelegationResponse.fromPartial(e)) || [];
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? import_pagination.PageResponse.fromPartial(object.pagination) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryDelegatorDelegationsResponse();
    message.delegationResponses = object.delegation_responses?.map((e) => import_staking.DelegationResponse.fromAmino(e)) || [];
    if (object.pagination !== void 0 && object.pagination !== null) {
      message.pagination = import_pagination.PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.delegationResponses) {
      obj.delegation_responses = message.delegationResponses.map((e) => e ? import_staking.DelegationResponse.toAmino(e) : void 0);
    } else {
      obj.delegation_responses = message.delegationResponses;
    }
    obj.pagination = message.pagination ? import_pagination.PageResponse.toAmino(message.pagination) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryDelegatorDelegationsResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryDelegatorDelegationsResponse",
      value: QueryDelegatorDelegationsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryDelegatorDelegationsResponse.decode(message.value);
  },
  toProto(message) {
    return QueryDelegatorDelegationsResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryDelegatorDelegationsResponse",
      value: QueryDelegatorDelegationsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryDelegatorUnbondingDelegationsRequest() {
  return {
    delegatorAddr: "",
    pagination: void 0
  };
}
const QueryDelegatorUnbondingDelegationsRequest = {
  typeUrl: "/cosmos.staking.v1beta1.QueryDelegatorUnbondingDelegationsRequest",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.delegatorAddr !== "") {
      writer.uint32(10).string(message.delegatorAddr);
    }
    if (message.pagination !== void 0) {
      import_pagination.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorUnbondingDelegationsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddr = reader.string();
          break;
        case 2:
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
    const message = createBaseQueryDelegatorUnbondingDelegationsRequest();
    message.delegatorAddr = object.delegatorAddr ?? "";
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? import_pagination.PageRequest.fromPartial(object.pagination) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryDelegatorUnbondingDelegationsRequest();
    if (object.delegator_addr !== void 0 && object.delegator_addr !== null) {
      message.delegatorAddr = object.delegator_addr;
    }
    if (object.pagination !== void 0 && object.pagination !== null) {
      message.pagination = import_pagination.PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.delegator_addr = message.delegatorAddr === "" ? void 0 : message.delegatorAddr;
    obj.pagination = message.pagination ? import_pagination.PageRequest.toAmino(message.pagination) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryDelegatorUnbondingDelegationsRequest.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryDelegatorUnbondingDelegationsRequest",
      value: QueryDelegatorUnbondingDelegationsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryDelegatorUnbondingDelegationsRequest.decode(message.value);
  },
  toProto(message) {
    return QueryDelegatorUnbondingDelegationsRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryDelegatorUnbondingDelegationsRequest",
      value: QueryDelegatorUnbondingDelegationsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryDelegatorUnbondingDelegationsResponse() {
  return {
    unbondingResponses: [],
    pagination: void 0
  };
}
const QueryDelegatorUnbondingDelegationsResponse = {
  typeUrl: "/cosmos.staking.v1beta1.QueryDelegatorUnbondingDelegationsResponse",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    for (const v of message.unbondingResponses) {
      import_staking.UnbondingDelegation.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== void 0) {
      import_pagination.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorUnbondingDelegationsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.unbondingResponses.push(import_staking.UnbondingDelegation.decode(reader, reader.uint32()));
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
    const message = createBaseQueryDelegatorUnbondingDelegationsResponse();
    message.unbondingResponses = object.unbondingResponses?.map((e) => import_staking.UnbondingDelegation.fromPartial(e)) || [];
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? import_pagination.PageResponse.fromPartial(object.pagination) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryDelegatorUnbondingDelegationsResponse();
    message.unbondingResponses = object.unbonding_responses?.map((e) => import_staking.UnbondingDelegation.fromAmino(e)) || [];
    if (object.pagination !== void 0 && object.pagination !== null) {
      message.pagination = import_pagination.PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.unbondingResponses) {
      obj.unbonding_responses = message.unbondingResponses.map((e) => e ? import_staking.UnbondingDelegation.toAmino(e) : void 0);
    } else {
      obj.unbonding_responses = message.unbondingResponses;
    }
    obj.pagination = message.pagination ? import_pagination.PageResponse.toAmino(message.pagination) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryDelegatorUnbondingDelegationsResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryDelegatorUnbondingDelegationsResponse",
      value: QueryDelegatorUnbondingDelegationsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryDelegatorUnbondingDelegationsResponse.decode(message.value);
  },
  toProto(message) {
    return QueryDelegatorUnbondingDelegationsResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryDelegatorUnbondingDelegationsResponse",
      value: QueryDelegatorUnbondingDelegationsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryRedelegationsRequest() {
  return {
    delegatorAddr: "",
    srcValidatorAddr: "",
    dstValidatorAddr: "",
    pagination: void 0
  };
}
const QueryRedelegationsRequest = {
  typeUrl: "/cosmos.staking.v1beta1.QueryRedelegationsRequest",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.delegatorAddr !== "") {
      writer.uint32(10).string(message.delegatorAddr);
    }
    if (message.srcValidatorAddr !== "") {
      writer.uint32(18).string(message.srcValidatorAddr);
    }
    if (message.dstValidatorAddr !== "") {
      writer.uint32(26).string(message.dstValidatorAddr);
    }
    if (message.pagination !== void 0) {
      import_pagination.PageRequest.encode(message.pagination, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryRedelegationsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddr = reader.string();
          break;
        case 2:
          message.srcValidatorAddr = reader.string();
          break;
        case 3:
          message.dstValidatorAddr = reader.string();
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
    const message = createBaseQueryRedelegationsRequest();
    message.delegatorAddr = object.delegatorAddr ?? "";
    message.srcValidatorAddr = object.srcValidatorAddr ?? "";
    message.dstValidatorAddr = object.dstValidatorAddr ?? "";
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? import_pagination.PageRequest.fromPartial(object.pagination) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryRedelegationsRequest();
    if (object.delegator_addr !== void 0 && object.delegator_addr !== null) {
      message.delegatorAddr = object.delegator_addr;
    }
    if (object.src_validator_addr !== void 0 && object.src_validator_addr !== null) {
      message.srcValidatorAddr = object.src_validator_addr;
    }
    if (object.dst_validator_addr !== void 0 && object.dst_validator_addr !== null) {
      message.dstValidatorAddr = object.dst_validator_addr;
    }
    if (object.pagination !== void 0 && object.pagination !== null) {
      message.pagination = import_pagination.PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.delegator_addr = message.delegatorAddr === "" ? void 0 : message.delegatorAddr;
    obj.src_validator_addr = message.srcValidatorAddr === "" ? void 0 : message.srcValidatorAddr;
    obj.dst_validator_addr = message.dstValidatorAddr === "" ? void 0 : message.dstValidatorAddr;
    obj.pagination = message.pagination ? import_pagination.PageRequest.toAmino(message.pagination) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryRedelegationsRequest.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryRedelegationsRequest",
      value: QueryRedelegationsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryRedelegationsRequest.decode(message.value);
  },
  toProto(message) {
    return QueryRedelegationsRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryRedelegationsRequest",
      value: QueryRedelegationsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryRedelegationsResponse() {
  return {
    redelegationResponses: [],
    pagination: void 0
  };
}
const QueryRedelegationsResponse = {
  typeUrl: "/cosmos.staking.v1beta1.QueryRedelegationsResponse",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    for (const v of message.redelegationResponses) {
      import_staking.RedelegationResponse.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== void 0) {
      import_pagination.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryRedelegationsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.redelegationResponses.push(import_staking.RedelegationResponse.decode(reader, reader.uint32()));
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
    const message = createBaseQueryRedelegationsResponse();
    message.redelegationResponses = object.redelegationResponses?.map((e) => import_staking.RedelegationResponse.fromPartial(e)) || [];
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? import_pagination.PageResponse.fromPartial(object.pagination) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryRedelegationsResponse();
    message.redelegationResponses = object.redelegation_responses?.map((e) => import_staking.RedelegationResponse.fromAmino(e)) || [];
    if (object.pagination !== void 0 && object.pagination !== null) {
      message.pagination = import_pagination.PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.redelegationResponses) {
      obj.redelegation_responses = message.redelegationResponses.map((e) => e ? import_staking.RedelegationResponse.toAmino(e) : void 0);
    } else {
      obj.redelegation_responses = message.redelegationResponses;
    }
    obj.pagination = message.pagination ? import_pagination.PageResponse.toAmino(message.pagination) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryRedelegationsResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryRedelegationsResponse",
      value: QueryRedelegationsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryRedelegationsResponse.decode(message.value);
  },
  toProto(message) {
    return QueryRedelegationsResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryRedelegationsResponse",
      value: QueryRedelegationsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryDelegatorValidatorsRequest() {
  return {
    delegatorAddr: "",
    pagination: void 0
  };
}
const QueryDelegatorValidatorsRequest = {
  typeUrl: "/cosmos.staking.v1beta1.QueryDelegatorValidatorsRequest",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.delegatorAddr !== "") {
      writer.uint32(10).string(message.delegatorAddr);
    }
    if (message.pagination !== void 0) {
      import_pagination.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
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
          message.delegatorAddr = reader.string();
          break;
        case 2:
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
    const message = createBaseQueryDelegatorValidatorsRequest();
    message.delegatorAddr = object.delegatorAddr ?? "";
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? import_pagination.PageRequest.fromPartial(object.pagination) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryDelegatorValidatorsRequest();
    if (object.delegator_addr !== void 0 && object.delegator_addr !== null) {
      message.delegatorAddr = object.delegator_addr;
    }
    if (object.pagination !== void 0 && object.pagination !== null) {
      message.pagination = import_pagination.PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.delegator_addr = message.delegatorAddr === "" ? void 0 : message.delegatorAddr;
    obj.pagination = message.pagination ? import_pagination.PageRequest.toAmino(message.pagination) : void 0;
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
      typeUrl: "/cosmos.staking.v1beta1.QueryDelegatorValidatorsRequest",
      value: QueryDelegatorValidatorsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryDelegatorValidatorsResponse() {
  return {
    validators: [],
    pagination: void 0
  };
}
const QueryDelegatorValidatorsResponse = {
  typeUrl: "/cosmos.staking.v1beta1.QueryDelegatorValidatorsResponse",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    for (const v of message.validators) {
      import_staking.Validator.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== void 0) {
      import_pagination.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
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
          message.validators.push(import_staking.Validator.decode(reader, reader.uint32()));
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
    const message = createBaseQueryDelegatorValidatorsResponse();
    message.validators = object.validators?.map((e) => import_staking.Validator.fromPartial(e)) || [];
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? import_pagination.PageResponse.fromPartial(object.pagination) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryDelegatorValidatorsResponse();
    message.validators = object.validators?.map((e) => import_staking.Validator.fromAmino(e)) || [];
    if (object.pagination !== void 0 && object.pagination !== null) {
      message.pagination = import_pagination.PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.validators) {
      obj.validators = message.validators.map((e) => e ? import_staking.Validator.toAmino(e) : void 0);
    } else {
      obj.validators = message.validators;
    }
    obj.pagination = message.pagination ? import_pagination.PageResponse.toAmino(message.pagination) : void 0;
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
      typeUrl: "/cosmos.staking.v1beta1.QueryDelegatorValidatorsResponse",
      value: QueryDelegatorValidatorsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryDelegatorValidatorRequest() {
  return {
    delegatorAddr: "",
    validatorAddr: ""
  };
}
const QueryDelegatorValidatorRequest = {
  typeUrl: "/cosmos.staking.v1beta1.QueryDelegatorValidatorRequest",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.delegatorAddr !== "") {
      writer.uint32(10).string(message.delegatorAddr);
    }
    if (message.validatorAddr !== "") {
      writer.uint32(18).string(message.validatorAddr);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorValidatorRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddr = reader.string();
          break;
        case 2:
          message.validatorAddr = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryDelegatorValidatorRequest();
    message.delegatorAddr = object.delegatorAddr ?? "";
    message.validatorAddr = object.validatorAddr ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryDelegatorValidatorRequest();
    if (object.delegator_addr !== void 0 && object.delegator_addr !== null) {
      message.delegatorAddr = object.delegator_addr;
    }
    if (object.validator_addr !== void 0 && object.validator_addr !== null) {
      message.validatorAddr = object.validator_addr;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.delegator_addr = message.delegatorAddr === "" ? void 0 : message.delegatorAddr;
    obj.validator_addr = message.validatorAddr === "" ? void 0 : message.validatorAddr;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryDelegatorValidatorRequest.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryDelegatorValidatorRequest",
      value: QueryDelegatorValidatorRequest.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryDelegatorValidatorRequest.decode(message.value);
  },
  toProto(message) {
    return QueryDelegatorValidatorRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryDelegatorValidatorRequest",
      value: QueryDelegatorValidatorRequest.encode(message).finish()
    };
  }
};
function createBaseQueryDelegatorValidatorResponse() {
  return {
    validator: import_staking.Validator.fromPartial({})
  };
}
const QueryDelegatorValidatorResponse = {
  typeUrl: "/cosmos.staking.v1beta1.QueryDelegatorValidatorResponse",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.validator !== void 0) {
      import_staking.Validator.encode(message.validator, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorValidatorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validator = import_staking.Validator.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryDelegatorValidatorResponse();
    message.validator = object.validator !== void 0 && object.validator !== null ? import_staking.Validator.fromPartial(object.validator) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryDelegatorValidatorResponse();
    if (object.validator !== void 0 && object.validator !== null) {
      message.validator = import_staking.Validator.fromAmino(object.validator);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.validator = message.validator ? import_staking.Validator.toAmino(message.validator) : import_staking.Validator.toAmino(import_staking.Validator.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object) {
    return QueryDelegatorValidatorResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryDelegatorValidatorResponse",
      value: QueryDelegatorValidatorResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryDelegatorValidatorResponse.decode(message.value);
  },
  toProto(message) {
    return QueryDelegatorValidatorResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryDelegatorValidatorResponse",
      value: QueryDelegatorValidatorResponse.encode(message).finish()
    };
  }
};
function createBaseQueryHistoricalInfoRequest() {
  return {
    height: BigInt(0)
  };
}
const QueryHistoricalInfoRequest = {
  typeUrl: "/cosmos.staking.v1beta1.QueryHistoricalInfoRequest",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.height !== BigInt(0)) {
      writer.uint32(8).int64(message.height);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryHistoricalInfoRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryHistoricalInfoRequest();
    message.height = object.height !== void 0 && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryHistoricalInfoRequest();
    if (object.height !== void 0 && object.height !== null) {
      message.height = BigInt(object.height);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.height = message.height !== BigInt(0) ? message.height?.toString() : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryHistoricalInfoRequest.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryHistoricalInfoRequest",
      value: QueryHistoricalInfoRequest.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryHistoricalInfoRequest.decode(message.value);
  },
  toProto(message) {
    return QueryHistoricalInfoRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryHistoricalInfoRequest",
      value: QueryHistoricalInfoRequest.encode(message).finish()
    };
  }
};
function createBaseQueryHistoricalInfoResponse() {
  return {
    hist: void 0
  };
}
const QueryHistoricalInfoResponse = {
  typeUrl: "/cosmos.staking.v1beta1.QueryHistoricalInfoResponse",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.hist !== void 0) {
      import_staking.HistoricalInfo.encode(message.hist, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryHistoricalInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hist = import_staking.HistoricalInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryHistoricalInfoResponse();
    message.hist = object.hist !== void 0 && object.hist !== null ? import_staking.HistoricalInfo.fromPartial(object.hist) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryHistoricalInfoResponse();
    if (object.hist !== void 0 && object.hist !== null) {
      message.hist = import_staking.HistoricalInfo.fromAmino(object.hist);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.hist = message.hist ? import_staking.HistoricalInfo.toAmino(message.hist) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryHistoricalInfoResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryHistoricalInfoResponse",
      value: QueryHistoricalInfoResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryHistoricalInfoResponse.decode(message.value);
  },
  toProto(message) {
    return QueryHistoricalInfoResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryHistoricalInfoResponse",
      value: QueryHistoricalInfoResponse.encode(message).finish()
    };
  }
};
function createBaseQueryPoolRequest() {
  return {};
}
const QueryPoolRequest = {
  typeUrl: "/cosmos.staking.v1beta1.QueryPoolRequest",
  encode(_, writer = import_binary.BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolRequest();
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
    const message = createBaseQueryPoolRequest();
    return message;
  },
  fromAmino(_) {
    const message = createBaseQueryPoolRequest();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return QueryPoolRequest.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryPoolRequest",
      value: QueryPoolRequest.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryPoolRequest.decode(message.value);
  },
  toProto(message) {
    return QueryPoolRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryPoolRequest",
      value: QueryPoolRequest.encode(message).finish()
    };
  }
};
function createBaseQueryPoolResponse() {
  return {
    pool: import_staking.Pool.fromPartial({})
  };
}
const QueryPoolResponse = {
  typeUrl: "/cosmos.staking.v1beta1.QueryPoolResponse",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.pool !== void 0) {
      import_staking.Pool.encode(message.pool, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pool = import_staking.Pool.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryPoolResponse();
    message.pool = object.pool !== void 0 && object.pool !== null ? import_staking.Pool.fromPartial(object.pool) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryPoolResponse();
    if (object.pool !== void 0 && object.pool !== null) {
      message.pool = import_staking.Pool.fromAmino(object.pool);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.pool = message.pool ? import_staking.Pool.toAmino(message.pool) : import_staking.Pool.toAmino(import_staking.Pool.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object) {
    return QueryPoolResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryPoolResponse",
      value: QueryPoolResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryPoolResponse.decode(message.value);
  },
  toProto(message) {
    return QueryPoolResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryPoolResponse",
      value: QueryPoolResponse.encode(message).finish()
    };
  }
};
function createBaseQueryParamsRequest() {
  return {};
}
const QueryParamsRequest = {
  typeUrl: "/cosmos.staking.v1beta1.QueryParamsRequest",
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
      typeUrl: "/cosmos.staking.v1beta1.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryParamsResponse() {
  return {
    params: import_staking.Params.fromPartial({})
  };
}
const QueryParamsResponse = {
  typeUrl: "/cosmos.staking.v1beta1.QueryParamsResponse",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.params !== void 0) {
      import_staking.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
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
          message.params = import_staking.Params.decode(reader, reader.uint32());
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
    message.params = object.params !== void 0 && object.params !== null ? import_staking.Params.fromPartial(object.params) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryParamsResponse();
    if (object.params !== void 0 && object.params !== null) {
      message.params = import_staking.Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.params = message.params ? import_staking.Params.toAmino(message.params) : import_staking.Params.toAmino(import_staking.Params.fromPartial({}));
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
      typeUrl: "/cosmos.staking.v1beta1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  QueryDelegationRequest,
  QueryDelegationResponse,
  QueryDelegatorDelegationsRequest,
  QueryDelegatorDelegationsResponse,
  QueryDelegatorUnbondingDelegationsRequest,
  QueryDelegatorUnbondingDelegationsResponse,
  QueryDelegatorValidatorRequest,
  QueryDelegatorValidatorResponse,
  QueryDelegatorValidatorsRequest,
  QueryDelegatorValidatorsResponse,
  QueryHistoricalInfoRequest,
  QueryHistoricalInfoResponse,
  QueryParamsRequest,
  QueryParamsResponse,
  QueryPoolRequest,
  QueryPoolResponse,
  QueryRedelegationsRequest,
  QueryRedelegationsResponse,
  QueryUnbondingDelegationRequest,
  QueryUnbondingDelegationResponse,
  QueryValidatorDelegationsRequest,
  QueryValidatorDelegationsResponse,
  QueryValidatorRequest,
  QueryValidatorResponse,
  QueryValidatorUnbondingDelegationsRequest,
  QueryValidatorUnbondingDelegationsResponse,
  QueryValidatorsRequest,
  QueryValidatorsResponse
});
