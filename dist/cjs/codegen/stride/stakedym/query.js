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
  QueryDelegationRecordsRequest: () => QueryDelegationRecordsRequest,
  QueryDelegationRecordsResponse: () => QueryDelegationRecordsResponse,
  QueryHostZoneRequest: () => QueryHostZoneRequest,
  QueryHostZoneResponse: () => QueryHostZoneResponse,
  QueryRedemptionRecordRequest: () => QueryRedemptionRecordRequest,
  QueryRedemptionRecordResponse: () => QueryRedemptionRecordResponse,
  QueryRedemptionRecordsRequest: () => QueryRedemptionRecordsRequest,
  QueryRedemptionRecordsResponse: () => QueryRedemptionRecordsResponse,
  QuerySlashRecordsRequest: () => QuerySlashRecordsRequest,
  QuerySlashRecordsResponse: () => QuerySlashRecordsResponse,
  QueryUnbondingRecordsRequest: () => QueryUnbondingRecordsRequest,
  QueryUnbondingRecordsResponse: () => QueryUnbondingRecordsResponse,
  RedemptionRecordResponse: () => RedemptionRecordResponse
});
module.exports = __toCommonJS(query_exports);
var import_pagination = require("../../cosmos/base/query/v1beta1/pagination");
var import_stakedym = require("./stakedym");
var import_binary = require("../../binary");
function createBaseQueryHostZoneRequest() {
  return {};
}
const QueryHostZoneRequest = {
  typeUrl: "/stride.stakedym.QueryHostZoneRequest",
  encode(_, writer = import_binary.BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryHostZoneRequest();
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
    const message = createBaseQueryHostZoneRequest();
    return message;
  },
  fromAmino(_) {
    const message = createBaseQueryHostZoneRequest();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return QueryHostZoneRequest.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryHostZoneRequest.decode(message.value);
  },
  toProto(message) {
    return QueryHostZoneRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.stakedym.QueryHostZoneRequest",
      value: QueryHostZoneRequest.encode(message).finish()
    };
  }
};
function createBaseQueryHostZoneResponse() {
  return {
    hostZone: void 0
  };
}
const QueryHostZoneResponse = {
  typeUrl: "/stride.stakedym.QueryHostZoneResponse",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.hostZone !== void 0) {
      import_stakedym.HostZone.encode(message.hostZone, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryHostZoneResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hostZone = import_stakedym.HostZone.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryHostZoneResponse();
    message.hostZone = object.hostZone !== void 0 && object.hostZone !== null ? import_stakedym.HostZone.fromPartial(object.hostZone) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryHostZoneResponse();
    if (object.host_zone !== void 0 && object.host_zone !== null) {
      message.hostZone = import_stakedym.HostZone.fromAmino(object.host_zone);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.host_zone = message.hostZone ? import_stakedym.HostZone.toAmino(message.hostZone) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryHostZoneResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryHostZoneResponse.decode(message.value);
  },
  toProto(message) {
    return QueryHostZoneResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.stakedym.QueryHostZoneResponse",
      value: QueryHostZoneResponse.encode(message).finish()
    };
  }
};
function createBaseQueryDelegationRecordsRequest() {
  return {
    includeArchived: false
  };
}
const QueryDelegationRecordsRequest = {
  typeUrl: "/stride.stakedym.QueryDelegationRecordsRequest",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.includeArchived === true) {
      writer.uint32(8).bool(message.includeArchived);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegationRecordsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.includeArchived = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryDelegationRecordsRequest();
    message.includeArchived = object.includeArchived ?? false;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryDelegationRecordsRequest();
    if (object.include_archived !== void 0 && object.include_archived !== null) {
      message.includeArchived = object.include_archived;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.include_archived = message.includeArchived === false ? void 0 : message.includeArchived;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryDelegationRecordsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryDelegationRecordsRequest.decode(message.value);
  },
  toProto(message) {
    return QueryDelegationRecordsRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.stakedym.QueryDelegationRecordsRequest",
      value: QueryDelegationRecordsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryDelegationRecordsResponse() {
  return {
    delegationRecords: []
  };
}
const QueryDelegationRecordsResponse = {
  typeUrl: "/stride.stakedym.QueryDelegationRecordsResponse",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    for (const v of message.delegationRecords) {
      import_stakedym.DelegationRecord.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegationRecordsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegationRecords.push(import_stakedym.DelegationRecord.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryDelegationRecordsResponse();
    message.delegationRecords = object.delegationRecords?.map((e) => import_stakedym.DelegationRecord.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryDelegationRecordsResponse();
    message.delegationRecords = object.delegation_records?.map((e) => import_stakedym.DelegationRecord.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.delegationRecords) {
      obj.delegation_records = message.delegationRecords.map((e) => e ? import_stakedym.DelegationRecord.toAmino(e) : void 0);
    } else {
      obj.delegation_records = message.delegationRecords;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return QueryDelegationRecordsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryDelegationRecordsResponse.decode(message.value);
  },
  toProto(message) {
    return QueryDelegationRecordsResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.stakedym.QueryDelegationRecordsResponse",
      value: QueryDelegationRecordsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryUnbondingRecordsRequest() {
  return {
    includeArchived: false
  };
}
const QueryUnbondingRecordsRequest = {
  typeUrl: "/stride.stakedym.QueryUnbondingRecordsRequest",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.includeArchived === true) {
      writer.uint32(8).bool(message.includeArchived);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryUnbondingRecordsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.includeArchived = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryUnbondingRecordsRequest();
    message.includeArchived = object.includeArchived ?? false;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryUnbondingRecordsRequest();
    if (object.include_archived !== void 0 && object.include_archived !== null) {
      message.includeArchived = object.include_archived;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.include_archived = message.includeArchived === false ? void 0 : message.includeArchived;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryUnbondingRecordsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryUnbondingRecordsRequest.decode(message.value);
  },
  toProto(message) {
    return QueryUnbondingRecordsRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.stakedym.QueryUnbondingRecordsRequest",
      value: QueryUnbondingRecordsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryUnbondingRecordsResponse() {
  return {
    unbondingRecords: []
  };
}
const QueryUnbondingRecordsResponse = {
  typeUrl: "/stride.stakedym.QueryUnbondingRecordsResponse",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    for (const v of message.unbondingRecords) {
      import_stakedym.UnbondingRecord.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryUnbondingRecordsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.unbondingRecords.push(import_stakedym.UnbondingRecord.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryUnbondingRecordsResponse();
    message.unbondingRecords = object.unbondingRecords?.map((e) => import_stakedym.UnbondingRecord.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryUnbondingRecordsResponse();
    message.unbondingRecords = object.unbonding_records?.map((e) => import_stakedym.UnbondingRecord.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.unbondingRecords) {
      obj.unbonding_records = message.unbondingRecords.map((e) => e ? import_stakedym.UnbondingRecord.toAmino(e) : void 0);
    } else {
      obj.unbonding_records = message.unbondingRecords;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return QueryUnbondingRecordsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryUnbondingRecordsResponse.decode(message.value);
  },
  toProto(message) {
    return QueryUnbondingRecordsResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.stakedym.QueryUnbondingRecordsResponse",
      value: QueryUnbondingRecordsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryRedemptionRecordRequest() {
  return {
    unbondingRecordId: BigInt(0),
    address: ""
  };
}
const QueryRedemptionRecordRequest = {
  typeUrl: "/stride.stakedym.QueryRedemptionRecordRequest",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.unbondingRecordId !== BigInt(0)) {
      writer.uint32(8).uint64(message.unbondingRecordId);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryRedemptionRecordRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.unbondingRecordId = reader.uint64();
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
    const message = createBaseQueryRedemptionRecordRequest();
    message.unbondingRecordId = object.unbondingRecordId !== void 0 && object.unbondingRecordId !== null ? BigInt(object.unbondingRecordId.toString()) : BigInt(0);
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryRedemptionRecordRequest();
    if (object.unbonding_record_id !== void 0 && object.unbonding_record_id !== null) {
      message.unbondingRecordId = BigInt(object.unbonding_record_id);
    }
    if (object.address !== void 0 && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.unbonding_record_id = message.unbondingRecordId !== BigInt(0) ? message.unbondingRecordId?.toString() : void 0;
    obj.address = message.address === "" ? void 0 : message.address;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryRedemptionRecordRequest.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryRedemptionRecordRequest.decode(message.value);
  },
  toProto(message) {
    return QueryRedemptionRecordRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.stakedym.QueryRedemptionRecordRequest",
      value: QueryRedemptionRecordRequest.encode(message).finish()
    };
  }
};
function createBaseQueryRedemptionRecordResponse() {
  return {
    redemptionRecordResponse: void 0
  };
}
const QueryRedemptionRecordResponse = {
  typeUrl: "/stride.stakedym.QueryRedemptionRecordResponse",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.redemptionRecordResponse !== void 0) {
      RedemptionRecordResponse.encode(message.redemptionRecordResponse, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryRedemptionRecordResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.redemptionRecordResponse = RedemptionRecordResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryRedemptionRecordResponse();
    message.redemptionRecordResponse = object.redemptionRecordResponse !== void 0 && object.redemptionRecordResponse !== null ? RedemptionRecordResponse.fromPartial(object.redemptionRecordResponse) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryRedemptionRecordResponse();
    if (object.redemption_record_response !== void 0 && object.redemption_record_response !== null) {
      message.redemptionRecordResponse = RedemptionRecordResponse.fromAmino(object.redemption_record_response);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.redemption_record_response = message.redemptionRecordResponse ? RedemptionRecordResponse.toAmino(message.redemptionRecordResponse) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryRedemptionRecordResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryRedemptionRecordResponse.decode(message.value);
  },
  toProto(message) {
    return QueryRedemptionRecordResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.stakedym.QueryRedemptionRecordResponse",
      value: QueryRedemptionRecordResponse.encode(message).finish()
    };
  }
};
function createBaseQueryRedemptionRecordsRequest() {
  return {
    address: "",
    unbondingRecordId: BigInt(0),
    pagination: void 0
  };
}
const QueryRedemptionRecordsRequest = {
  typeUrl: "/stride.stakedym.QueryRedemptionRecordsRequest",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.unbondingRecordId !== BigInt(0)) {
      writer.uint32(16).uint64(message.unbondingRecordId);
    }
    if (message.pagination !== void 0) {
      import_pagination.PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryRedemptionRecordsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.unbondingRecordId = reader.uint64();
          break;
        case 3:
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
    const message = createBaseQueryRedemptionRecordsRequest();
    message.address = object.address ?? "";
    message.unbondingRecordId = object.unbondingRecordId !== void 0 && object.unbondingRecordId !== null ? BigInt(object.unbondingRecordId.toString()) : BigInt(0);
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? import_pagination.PageRequest.fromPartial(object.pagination) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryRedemptionRecordsRequest();
    if (object.address !== void 0 && object.address !== null) {
      message.address = object.address;
    }
    if (object.unbonding_record_id !== void 0 && object.unbonding_record_id !== null) {
      message.unbondingRecordId = BigInt(object.unbonding_record_id);
    }
    if (object.pagination !== void 0 && object.pagination !== null) {
      message.pagination = import_pagination.PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.address = message.address === "" ? void 0 : message.address;
    obj.unbonding_record_id = message.unbondingRecordId !== BigInt(0) ? message.unbondingRecordId?.toString() : void 0;
    obj.pagination = message.pagination ? import_pagination.PageRequest.toAmino(message.pagination) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryRedemptionRecordsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryRedemptionRecordsRequest.decode(message.value);
  },
  toProto(message) {
    return QueryRedemptionRecordsRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.stakedym.QueryRedemptionRecordsRequest",
      value: QueryRedemptionRecordsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryRedemptionRecordsResponse() {
  return {
    redemptionRecordResponses: [],
    pagination: void 0
  };
}
const QueryRedemptionRecordsResponse = {
  typeUrl: "/stride.stakedym.QueryRedemptionRecordsResponse",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    for (const v of message.redemptionRecordResponses) {
      RedemptionRecordResponse.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== void 0) {
      import_pagination.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryRedemptionRecordsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.redemptionRecordResponses.push(RedemptionRecordResponse.decode(reader, reader.uint32()));
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
    const message = createBaseQueryRedemptionRecordsResponse();
    message.redemptionRecordResponses = object.redemptionRecordResponses?.map((e) => RedemptionRecordResponse.fromPartial(e)) || [];
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? import_pagination.PageResponse.fromPartial(object.pagination) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryRedemptionRecordsResponse();
    message.redemptionRecordResponses = object.redemption_record_responses?.map((e) => RedemptionRecordResponse.fromAmino(e)) || [];
    if (object.pagination !== void 0 && object.pagination !== null) {
      message.pagination = import_pagination.PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.redemptionRecordResponses) {
      obj.redemption_record_responses = message.redemptionRecordResponses.map((e) => e ? RedemptionRecordResponse.toAmino(e) : void 0);
    } else {
      obj.redemption_record_responses = message.redemptionRecordResponses;
    }
    obj.pagination = message.pagination ? import_pagination.PageResponse.toAmino(message.pagination) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryRedemptionRecordsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryRedemptionRecordsResponse.decode(message.value);
  },
  toProto(message) {
    return QueryRedemptionRecordsResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.stakedym.QueryRedemptionRecordsResponse",
      value: QueryRedemptionRecordsResponse.encode(message).finish()
    };
  }
};
function createBaseQuerySlashRecordsRequest() {
  return {};
}
const QuerySlashRecordsRequest = {
  typeUrl: "/stride.stakedym.QuerySlashRecordsRequest",
  encode(_, writer = import_binary.BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQuerySlashRecordsRequest();
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
    const message = createBaseQuerySlashRecordsRequest();
    return message;
  },
  fromAmino(_) {
    const message = createBaseQuerySlashRecordsRequest();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return QuerySlashRecordsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QuerySlashRecordsRequest.decode(message.value);
  },
  toProto(message) {
    return QuerySlashRecordsRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.stakedym.QuerySlashRecordsRequest",
      value: QuerySlashRecordsRequest.encode(message).finish()
    };
  }
};
function createBaseQuerySlashRecordsResponse() {
  return {
    slashRecords: []
  };
}
const QuerySlashRecordsResponse = {
  typeUrl: "/stride.stakedym.QuerySlashRecordsResponse",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    for (const v of message.slashRecords) {
      import_stakedym.SlashRecord.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQuerySlashRecordsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.slashRecords.push(import_stakedym.SlashRecord.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQuerySlashRecordsResponse();
    message.slashRecords = object.slashRecords?.map((e) => import_stakedym.SlashRecord.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseQuerySlashRecordsResponse();
    message.slashRecords = object.slash_records?.map((e) => import_stakedym.SlashRecord.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.slashRecords) {
      obj.slash_records = message.slashRecords.map((e) => e ? import_stakedym.SlashRecord.toAmino(e) : void 0);
    } else {
      obj.slash_records = message.slashRecords;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return QuerySlashRecordsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QuerySlashRecordsResponse.decode(message.value);
  },
  toProto(message) {
    return QuerySlashRecordsResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.stakedym.QuerySlashRecordsResponse",
      value: QuerySlashRecordsResponse.encode(message).finish()
    };
  }
};
function createBaseRedemptionRecordResponse() {
  return {
    redemptionRecord: void 0,
    unbondingCompletionTimeSeconds: BigInt(0)
  };
}
const RedemptionRecordResponse = {
  typeUrl: "/stride.stakedym.RedemptionRecordResponse",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.redemptionRecord !== void 0) {
      import_stakedym.RedemptionRecord.encode(message.redemptionRecord, writer.uint32(10).fork()).ldelim();
    }
    if (message.unbondingCompletionTimeSeconds !== BigInt(0)) {
      writer.uint32(16).uint64(message.unbondingCompletionTimeSeconds);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseRedemptionRecordResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.redemptionRecord = import_stakedym.RedemptionRecord.decode(reader, reader.uint32());
          break;
        case 2:
          message.unbondingCompletionTimeSeconds = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseRedemptionRecordResponse();
    message.redemptionRecord = object.redemptionRecord !== void 0 && object.redemptionRecord !== null ? import_stakedym.RedemptionRecord.fromPartial(object.redemptionRecord) : void 0;
    message.unbondingCompletionTimeSeconds = object.unbondingCompletionTimeSeconds !== void 0 && object.unbondingCompletionTimeSeconds !== null ? BigInt(object.unbondingCompletionTimeSeconds.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object) {
    const message = createBaseRedemptionRecordResponse();
    if (object.redemption_record !== void 0 && object.redemption_record !== null) {
      message.redemptionRecord = import_stakedym.RedemptionRecord.fromAmino(object.redemption_record);
    }
    if (object.unbonding_completion_time_seconds !== void 0 && object.unbonding_completion_time_seconds !== null) {
      message.unbondingCompletionTimeSeconds = BigInt(object.unbonding_completion_time_seconds);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.redemption_record = message.redemptionRecord ? import_stakedym.RedemptionRecord.toAmino(message.redemptionRecord) : void 0;
    obj.unbonding_completion_time_seconds = message.unbondingCompletionTimeSeconds !== BigInt(0) ? message.unbondingCompletionTimeSeconds?.toString() : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return RedemptionRecordResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return RedemptionRecordResponse.decode(message.value);
  },
  toProto(message) {
    return RedemptionRecordResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.stakedym.RedemptionRecordResponse",
      value: RedemptionRecordResponse.encode(message).finish()
    };
  }
};
// Removed broken CommonJS export annotation
