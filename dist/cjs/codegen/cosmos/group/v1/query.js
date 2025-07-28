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
  QueryGroupInfoRequest: () => QueryGroupInfoRequest,
  QueryGroupInfoResponse: () => QueryGroupInfoResponse,
  QueryGroupMembersRequest: () => QueryGroupMembersRequest,
  QueryGroupMembersResponse: () => QueryGroupMembersResponse,
  QueryGroupPoliciesByAdminRequest: () => QueryGroupPoliciesByAdminRequest,
  QueryGroupPoliciesByAdminResponse: () => QueryGroupPoliciesByAdminResponse,
  QueryGroupPoliciesByGroupRequest: () => QueryGroupPoliciesByGroupRequest,
  QueryGroupPoliciesByGroupResponse: () => QueryGroupPoliciesByGroupResponse,
  QueryGroupPolicyInfoRequest: () => QueryGroupPolicyInfoRequest,
  QueryGroupPolicyInfoResponse: () => QueryGroupPolicyInfoResponse,
  QueryGroupsByAdminRequest: () => QueryGroupsByAdminRequest,
  QueryGroupsByAdminResponse: () => QueryGroupsByAdminResponse,
  QueryGroupsByMemberRequest: () => QueryGroupsByMemberRequest,
  QueryGroupsByMemberResponse: () => QueryGroupsByMemberResponse,
  QueryGroupsRequest: () => QueryGroupsRequest,
  QueryGroupsResponse: () => QueryGroupsResponse,
  QueryProposalRequest: () => QueryProposalRequest,
  QueryProposalResponse: () => QueryProposalResponse,
  QueryProposalsByGroupPolicyRequest: () => QueryProposalsByGroupPolicyRequest,
  QueryProposalsByGroupPolicyResponse: () => QueryProposalsByGroupPolicyResponse,
  QueryTallyResultRequest: () => QueryTallyResultRequest,
  QueryTallyResultResponse: () => QueryTallyResultResponse,
  QueryVoteByProposalVoterRequest: () => QueryVoteByProposalVoterRequest,
  QueryVoteByProposalVoterResponse: () => QueryVoteByProposalVoterResponse,
  QueryVotesByProposalRequest: () => QueryVotesByProposalRequest,
  QueryVotesByProposalResponse: () => QueryVotesByProposalResponse,
  QueryVotesByVoterRequest: () => QueryVotesByVoterRequest,
  QueryVotesByVoterResponse: () => QueryVotesByVoterResponse
});
module.exports = __toCommonJS(query_exports);
var import_pagination = require("../../base/query/v1beta1/pagination");
var import_types = require("./types");
var import_binary = require("../../../binary");
function createBaseQueryGroupInfoRequest() {
  return {
    groupId: BigInt(0)
  };
}
const QueryGroupInfoRequest = {
  typeUrl: "/cosmos.group.v1.QueryGroupInfoRequest",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.groupId !== BigInt(0)) {
      writer.uint32(8).uint64(message.groupId);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryGroupInfoRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryGroupInfoRequest();
    message.groupId = object.groupId !== void 0 && object.groupId !== null ? BigInt(object.groupId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryGroupInfoRequest();
    if (object.group_id !== void 0 && object.group_id !== null) {
      message.groupId = BigInt(object.group_id);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.group_id = message.groupId !== BigInt(0) ? message.groupId?.toString() : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryGroupInfoRequest.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryGroupInfoRequest",
      value: QueryGroupInfoRequest.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryGroupInfoRequest.decode(message.value);
  },
  toProto(message) {
    return QueryGroupInfoRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.group.v1.QueryGroupInfoRequest",
      value: QueryGroupInfoRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGroupInfoResponse() {
  return {
    info: void 0
  };
}
const QueryGroupInfoResponse = {
  typeUrl: "/cosmos.group.v1.QueryGroupInfoResponse",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.info !== void 0) {
      import_types.GroupInfo.encode(message.info, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryGroupInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.info = import_types.GroupInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryGroupInfoResponse();
    message.info = object.info !== void 0 && object.info !== null ? import_types.GroupInfo.fromPartial(object.info) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryGroupInfoResponse();
    if (object.info !== void 0 && object.info !== null) {
      message.info = import_types.GroupInfo.fromAmino(object.info);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.info = message.info ? import_types.GroupInfo.toAmino(message.info) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryGroupInfoResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryGroupInfoResponse",
      value: QueryGroupInfoResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryGroupInfoResponse.decode(message.value);
  },
  toProto(message) {
    return QueryGroupInfoResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.group.v1.QueryGroupInfoResponse",
      value: QueryGroupInfoResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGroupPolicyInfoRequest() {
  return {
    address: ""
  };
}
const QueryGroupPolicyInfoRequest = {
  typeUrl: "/cosmos.group.v1.QueryGroupPolicyInfoRequest",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryGroupPolicyInfoRequest();
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
    const message = createBaseQueryGroupPolicyInfoRequest();
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryGroupPolicyInfoRequest();
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
    return QueryGroupPolicyInfoRequest.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryGroupPolicyInfoRequest",
      value: QueryGroupPolicyInfoRequest.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryGroupPolicyInfoRequest.decode(message.value);
  },
  toProto(message) {
    return QueryGroupPolicyInfoRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.group.v1.QueryGroupPolicyInfoRequest",
      value: QueryGroupPolicyInfoRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGroupPolicyInfoResponse() {
  return {
    info: void 0
  };
}
const QueryGroupPolicyInfoResponse = {
  typeUrl: "/cosmos.group.v1.QueryGroupPolicyInfoResponse",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.info !== void 0) {
      import_types.GroupPolicyInfo.encode(message.info, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryGroupPolicyInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.info = import_types.GroupPolicyInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryGroupPolicyInfoResponse();
    message.info = object.info !== void 0 && object.info !== null ? import_types.GroupPolicyInfo.fromPartial(object.info) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryGroupPolicyInfoResponse();
    if (object.info !== void 0 && object.info !== null) {
      message.info = import_types.GroupPolicyInfo.fromAmino(object.info);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.info = message.info ? import_types.GroupPolicyInfo.toAmino(message.info) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryGroupPolicyInfoResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryGroupPolicyInfoResponse",
      value: QueryGroupPolicyInfoResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryGroupPolicyInfoResponse.decode(message.value);
  },
  toProto(message) {
    return QueryGroupPolicyInfoResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.group.v1.QueryGroupPolicyInfoResponse",
      value: QueryGroupPolicyInfoResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGroupMembersRequest() {
  return {
    groupId: BigInt(0),
    pagination: void 0
  };
}
const QueryGroupMembersRequest = {
  typeUrl: "/cosmos.group.v1.QueryGroupMembersRequest",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.groupId !== BigInt(0)) {
      writer.uint32(8).uint64(message.groupId);
    }
    if (message.pagination !== void 0) {
      import_pagination.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryGroupMembersRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupId = reader.uint64();
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
    const message = createBaseQueryGroupMembersRequest();
    message.groupId = object.groupId !== void 0 && object.groupId !== null ? BigInt(object.groupId.toString()) : BigInt(0);
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? import_pagination.PageRequest.fromPartial(object.pagination) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryGroupMembersRequest();
    if (object.group_id !== void 0 && object.group_id !== null) {
      message.groupId = BigInt(object.group_id);
    }
    if (object.pagination !== void 0 && object.pagination !== null) {
      message.pagination = import_pagination.PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.group_id = message.groupId !== BigInt(0) ? message.groupId?.toString() : void 0;
    obj.pagination = message.pagination ? import_pagination.PageRequest.toAmino(message.pagination) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryGroupMembersRequest.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryGroupMembersRequest",
      value: QueryGroupMembersRequest.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryGroupMembersRequest.decode(message.value);
  },
  toProto(message) {
    return QueryGroupMembersRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.group.v1.QueryGroupMembersRequest",
      value: QueryGroupMembersRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGroupMembersResponse() {
  return {
    members: [],
    pagination: void 0
  };
}
const QueryGroupMembersResponse = {
  typeUrl: "/cosmos.group.v1.QueryGroupMembersResponse",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    for (const v of message.members) {
      import_types.GroupMember.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== void 0) {
      import_pagination.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryGroupMembersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.members.push(import_types.GroupMember.decode(reader, reader.uint32()));
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
    const message = createBaseQueryGroupMembersResponse();
    message.members = object.members?.map((e) => import_types.GroupMember.fromPartial(e)) || [];
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? import_pagination.PageResponse.fromPartial(object.pagination) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryGroupMembersResponse();
    message.members = object.members?.map((e) => import_types.GroupMember.fromAmino(e)) || [];
    if (object.pagination !== void 0 && object.pagination !== null) {
      message.pagination = import_pagination.PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.members) {
      obj.members = message.members.map((e) => e ? import_types.GroupMember.toAmino(e) : void 0);
    } else {
      obj.members = message.members;
    }
    obj.pagination = message.pagination ? import_pagination.PageResponse.toAmino(message.pagination) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryGroupMembersResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryGroupMembersResponse",
      value: QueryGroupMembersResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryGroupMembersResponse.decode(message.value);
  },
  toProto(message) {
    return QueryGroupMembersResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.group.v1.QueryGroupMembersResponse",
      value: QueryGroupMembersResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGroupsByAdminRequest() {
  return {
    admin: "",
    pagination: void 0
  };
}
const QueryGroupsByAdminRequest = {
  typeUrl: "/cosmos.group.v1.QueryGroupsByAdminRequest",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (message.pagination !== void 0) {
      import_pagination.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryGroupsByAdminRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
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
    const message = createBaseQueryGroupsByAdminRequest();
    message.admin = object.admin ?? "";
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? import_pagination.PageRequest.fromPartial(object.pagination) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryGroupsByAdminRequest();
    if (object.admin !== void 0 && object.admin !== null) {
      message.admin = object.admin;
    }
    if (object.pagination !== void 0 && object.pagination !== null) {
      message.pagination = import_pagination.PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.admin = message.admin === "" ? void 0 : message.admin;
    obj.pagination = message.pagination ? import_pagination.PageRequest.toAmino(message.pagination) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryGroupsByAdminRequest.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryGroupsByAdminRequest",
      value: QueryGroupsByAdminRequest.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryGroupsByAdminRequest.decode(message.value);
  },
  toProto(message) {
    return QueryGroupsByAdminRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.group.v1.QueryGroupsByAdminRequest",
      value: QueryGroupsByAdminRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGroupsByAdminResponse() {
  return {
    groups: [],
    pagination: void 0
  };
}
const QueryGroupsByAdminResponse = {
  typeUrl: "/cosmos.group.v1.QueryGroupsByAdminResponse",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    for (const v of message.groups) {
      import_types.GroupInfo.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== void 0) {
      import_pagination.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryGroupsByAdminResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groups.push(import_types.GroupInfo.decode(reader, reader.uint32()));
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
    const message = createBaseQueryGroupsByAdminResponse();
    message.groups = object.groups?.map((e) => import_types.GroupInfo.fromPartial(e)) || [];
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? import_pagination.PageResponse.fromPartial(object.pagination) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryGroupsByAdminResponse();
    message.groups = object.groups?.map((e) => import_types.GroupInfo.fromAmino(e)) || [];
    if (object.pagination !== void 0 && object.pagination !== null) {
      message.pagination = import_pagination.PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.groups) {
      obj.groups = message.groups.map((e) => e ? import_types.GroupInfo.toAmino(e) : void 0);
    } else {
      obj.groups = message.groups;
    }
    obj.pagination = message.pagination ? import_pagination.PageResponse.toAmino(message.pagination) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryGroupsByAdminResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryGroupsByAdminResponse",
      value: QueryGroupsByAdminResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryGroupsByAdminResponse.decode(message.value);
  },
  toProto(message) {
    return QueryGroupsByAdminResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.group.v1.QueryGroupsByAdminResponse",
      value: QueryGroupsByAdminResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGroupPoliciesByGroupRequest() {
  return {
    groupId: BigInt(0),
    pagination: void 0
  };
}
const QueryGroupPoliciesByGroupRequest = {
  typeUrl: "/cosmos.group.v1.QueryGroupPoliciesByGroupRequest",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.groupId !== BigInt(0)) {
      writer.uint32(8).uint64(message.groupId);
    }
    if (message.pagination !== void 0) {
      import_pagination.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryGroupPoliciesByGroupRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupId = reader.uint64();
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
    const message = createBaseQueryGroupPoliciesByGroupRequest();
    message.groupId = object.groupId !== void 0 && object.groupId !== null ? BigInt(object.groupId.toString()) : BigInt(0);
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? import_pagination.PageRequest.fromPartial(object.pagination) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryGroupPoliciesByGroupRequest();
    if (object.group_id !== void 0 && object.group_id !== null) {
      message.groupId = BigInt(object.group_id);
    }
    if (object.pagination !== void 0 && object.pagination !== null) {
      message.pagination = import_pagination.PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.group_id = message.groupId !== BigInt(0) ? message.groupId?.toString() : void 0;
    obj.pagination = message.pagination ? import_pagination.PageRequest.toAmino(message.pagination) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryGroupPoliciesByGroupRequest.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryGroupPoliciesByGroupRequest",
      value: QueryGroupPoliciesByGroupRequest.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryGroupPoliciesByGroupRequest.decode(message.value);
  },
  toProto(message) {
    return QueryGroupPoliciesByGroupRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.group.v1.QueryGroupPoliciesByGroupRequest",
      value: QueryGroupPoliciesByGroupRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGroupPoliciesByGroupResponse() {
  return {
    groupPolicies: [],
    pagination: void 0
  };
}
const QueryGroupPoliciesByGroupResponse = {
  typeUrl: "/cosmos.group.v1.QueryGroupPoliciesByGroupResponse",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    for (const v of message.groupPolicies) {
      import_types.GroupPolicyInfo.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== void 0) {
      import_pagination.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryGroupPoliciesByGroupResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupPolicies.push(import_types.GroupPolicyInfo.decode(reader, reader.uint32()));
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
    const message = createBaseQueryGroupPoliciesByGroupResponse();
    message.groupPolicies = object.groupPolicies?.map((e) => import_types.GroupPolicyInfo.fromPartial(e)) || [];
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? import_pagination.PageResponse.fromPartial(object.pagination) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryGroupPoliciesByGroupResponse();
    message.groupPolicies = object.group_policies?.map((e) => import_types.GroupPolicyInfo.fromAmino(e)) || [];
    if (object.pagination !== void 0 && object.pagination !== null) {
      message.pagination = import_pagination.PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.groupPolicies) {
      obj.group_policies = message.groupPolicies.map((e) => e ? import_types.GroupPolicyInfo.toAmino(e) : void 0);
    } else {
      obj.group_policies = message.groupPolicies;
    }
    obj.pagination = message.pagination ? import_pagination.PageResponse.toAmino(message.pagination) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryGroupPoliciesByGroupResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryGroupPoliciesByGroupResponse",
      value: QueryGroupPoliciesByGroupResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryGroupPoliciesByGroupResponse.decode(message.value);
  },
  toProto(message) {
    return QueryGroupPoliciesByGroupResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.group.v1.QueryGroupPoliciesByGroupResponse",
      value: QueryGroupPoliciesByGroupResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGroupPoliciesByAdminRequest() {
  return {
    admin: "",
    pagination: void 0
  };
}
const QueryGroupPoliciesByAdminRequest = {
  typeUrl: "/cosmos.group.v1.QueryGroupPoliciesByAdminRequest",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (message.pagination !== void 0) {
      import_pagination.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryGroupPoliciesByAdminRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
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
    const message = createBaseQueryGroupPoliciesByAdminRequest();
    message.admin = object.admin ?? "";
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? import_pagination.PageRequest.fromPartial(object.pagination) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryGroupPoliciesByAdminRequest();
    if (object.admin !== void 0 && object.admin !== null) {
      message.admin = object.admin;
    }
    if (object.pagination !== void 0 && object.pagination !== null) {
      message.pagination = import_pagination.PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.admin = message.admin === "" ? void 0 : message.admin;
    obj.pagination = message.pagination ? import_pagination.PageRequest.toAmino(message.pagination) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryGroupPoliciesByAdminRequest.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryGroupPoliciesByAdminRequest",
      value: QueryGroupPoliciesByAdminRequest.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryGroupPoliciesByAdminRequest.decode(message.value);
  },
  toProto(message) {
    return QueryGroupPoliciesByAdminRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.group.v1.QueryGroupPoliciesByAdminRequest",
      value: QueryGroupPoliciesByAdminRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGroupPoliciesByAdminResponse() {
  return {
    groupPolicies: [],
    pagination: void 0
  };
}
const QueryGroupPoliciesByAdminResponse = {
  typeUrl: "/cosmos.group.v1.QueryGroupPoliciesByAdminResponse",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    for (const v of message.groupPolicies) {
      import_types.GroupPolicyInfo.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== void 0) {
      import_pagination.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryGroupPoliciesByAdminResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupPolicies.push(import_types.GroupPolicyInfo.decode(reader, reader.uint32()));
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
    const message = createBaseQueryGroupPoliciesByAdminResponse();
    message.groupPolicies = object.groupPolicies?.map((e) => import_types.GroupPolicyInfo.fromPartial(e)) || [];
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? import_pagination.PageResponse.fromPartial(object.pagination) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryGroupPoliciesByAdminResponse();
    message.groupPolicies = object.group_policies?.map((e) => import_types.GroupPolicyInfo.fromAmino(e)) || [];
    if (object.pagination !== void 0 && object.pagination !== null) {
      message.pagination = import_pagination.PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.groupPolicies) {
      obj.group_policies = message.groupPolicies.map((e) => e ? import_types.GroupPolicyInfo.toAmino(e) : void 0);
    } else {
      obj.group_policies = message.groupPolicies;
    }
    obj.pagination = message.pagination ? import_pagination.PageResponse.toAmino(message.pagination) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryGroupPoliciesByAdminResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryGroupPoliciesByAdminResponse",
      value: QueryGroupPoliciesByAdminResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryGroupPoliciesByAdminResponse.decode(message.value);
  },
  toProto(message) {
    return QueryGroupPoliciesByAdminResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.group.v1.QueryGroupPoliciesByAdminResponse",
      value: QueryGroupPoliciesByAdminResponse.encode(message).finish()
    };
  }
};
function createBaseQueryProposalRequest() {
  return {
    proposalId: BigInt(0)
  };
}
const QueryProposalRequest = {
  typeUrl: "/cosmos.group.v1.QueryProposalRequest",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposalId);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryProposalRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryProposalRequest();
    message.proposalId = object.proposalId !== void 0 && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryProposalRequest();
    if (object.proposal_id !== void 0 && object.proposal_id !== null) {
      message.proposalId = BigInt(object.proposal_id);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.proposal_id = message.proposalId !== BigInt(0) ? message.proposalId?.toString() : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryProposalRequest.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryProposalRequest",
      value: QueryProposalRequest.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryProposalRequest.decode(message.value);
  },
  toProto(message) {
    return QueryProposalRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.group.v1.QueryProposalRequest",
      value: QueryProposalRequest.encode(message).finish()
    };
  }
};
function createBaseQueryProposalResponse() {
  return {
    proposal: void 0
  };
}
const QueryProposalResponse = {
  typeUrl: "/cosmos.group.v1.QueryProposalResponse",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.proposal !== void 0) {
      import_types.Proposal.encode(message.proposal, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryProposalResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposal = import_types.Proposal.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryProposalResponse();
    message.proposal = object.proposal !== void 0 && object.proposal !== null ? import_types.Proposal.fromPartial(object.proposal) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryProposalResponse();
    if (object.proposal !== void 0 && object.proposal !== null) {
      message.proposal = import_types.Proposal.fromAmino(object.proposal);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.proposal = message.proposal ? import_types.Proposal.toAmino(message.proposal) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryProposalResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryProposalResponse",
      value: QueryProposalResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryProposalResponse.decode(message.value);
  },
  toProto(message) {
    return QueryProposalResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.group.v1.QueryProposalResponse",
      value: QueryProposalResponse.encode(message).finish()
    };
  }
};
function createBaseQueryProposalsByGroupPolicyRequest() {
  return {
    address: "",
    pagination: void 0
  };
}
const QueryProposalsByGroupPolicyRequest = {
  typeUrl: "/cosmos.group.v1.QueryProposalsByGroupPolicyRequest",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.pagination !== void 0) {
      import_pagination.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryProposalsByGroupPolicyRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
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
    const message = createBaseQueryProposalsByGroupPolicyRequest();
    message.address = object.address ?? "";
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? import_pagination.PageRequest.fromPartial(object.pagination) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryProposalsByGroupPolicyRequest();
    if (object.address !== void 0 && object.address !== null) {
      message.address = object.address;
    }
    if (object.pagination !== void 0 && object.pagination !== null) {
      message.pagination = import_pagination.PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.address = message.address === "" ? void 0 : message.address;
    obj.pagination = message.pagination ? import_pagination.PageRequest.toAmino(message.pagination) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryProposalsByGroupPolicyRequest.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryProposalsByGroupPolicyRequest",
      value: QueryProposalsByGroupPolicyRequest.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryProposalsByGroupPolicyRequest.decode(message.value);
  },
  toProto(message) {
    return QueryProposalsByGroupPolicyRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.group.v1.QueryProposalsByGroupPolicyRequest",
      value: QueryProposalsByGroupPolicyRequest.encode(message).finish()
    };
  }
};
function createBaseQueryProposalsByGroupPolicyResponse() {
  return {
    proposals: [],
    pagination: void 0
  };
}
const QueryProposalsByGroupPolicyResponse = {
  typeUrl: "/cosmos.group.v1.QueryProposalsByGroupPolicyResponse",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    for (const v of message.proposals) {
      import_types.Proposal.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== void 0) {
      import_pagination.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryProposalsByGroupPolicyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposals.push(import_types.Proposal.decode(reader, reader.uint32()));
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
    const message = createBaseQueryProposalsByGroupPolicyResponse();
    message.proposals = object.proposals?.map((e) => import_types.Proposal.fromPartial(e)) || [];
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? import_pagination.PageResponse.fromPartial(object.pagination) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryProposalsByGroupPolicyResponse();
    message.proposals = object.proposals?.map((e) => import_types.Proposal.fromAmino(e)) || [];
    if (object.pagination !== void 0 && object.pagination !== null) {
      message.pagination = import_pagination.PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.proposals) {
      obj.proposals = message.proposals.map((e) => e ? import_types.Proposal.toAmino(e) : void 0);
    } else {
      obj.proposals = message.proposals;
    }
    obj.pagination = message.pagination ? import_pagination.PageResponse.toAmino(message.pagination) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryProposalsByGroupPolicyResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryProposalsByGroupPolicyResponse",
      value: QueryProposalsByGroupPolicyResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryProposalsByGroupPolicyResponse.decode(message.value);
  },
  toProto(message) {
    return QueryProposalsByGroupPolicyResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.group.v1.QueryProposalsByGroupPolicyResponse",
      value: QueryProposalsByGroupPolicyResponse.encode(message).finish()
    };
  }
};
function createBaseQueryVoteByProposalVoterRequest() {
  return {
    proposalId: BigInt(0),
    voter: ""
  };
}
const QueryVoteByProposalVoterRequest = {
  typeUrl: "/cosmos.group.v1.QueryVoteByProposalVoterRequest",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.voter !== "") {
      writer.uint32(18).string(message.voter);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryVoteByProposalVoterRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64();
          break;
        case 2:
          message.voter = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryVoteByProposalVoterRequest();
    message.proposalId = object.proposalId !== void 0 && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
    message.voter = object.voter ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryVoteByProposalVoterRequest();
    if (object.proposal_id !== void 0 && object.proposal_id !== null) {
      message.proposalId = BigInt(object.proposal_id);
    }
    if (object.voter !== void 0 && object.voter !== null) {
      message.voter = object.voter;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.proposal_id = message.proposalId !== BigInt(0) ? message.proposalId?.toString() : void 0;
    obj.voter = message.voter === "" ? void 0 : message.voter;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryVoteByProposalVoterRequest.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryVoteByProposalVoterRequest",
      value: QueryVoteByProposalVoterRequest.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryVoteByProposalVoterRequest.decode(message.value);
  },
  toProto(message) {
    return QueryVoteByProposalVoterRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.group.v1.QueryVoteByProposalVoterRequest",
      value: QueryVoteByProposalVoterRequest.encode(message).finish()
    };
  }
};
function createBaseQueryVoteByProposalVoterResponse() {
  return {
    vote: void 0
  };
}
const QueryVoteByProposalVoterResponse = {
  typeUrl: "/cosmos.group.v1.QueryVoteByProposalVoterResponse",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.vote !== void 0) {
      import_types.Vote.encode(message.vote, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryVoteByProposalVoterResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.vote = import_types.Vote.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryVoteByProposalVoterResponse();
    message.vote = object.vote !== void 0 && object.vote !== null ? import_types.Vote.fromPartial(object.vote) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryVoteByProposalVoterResponse();
    if (object.vote !== void 0 && object.vote !== null) {
      message.vote = import_types.Vote.fromAmino(object.vote);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.vote = message.vote ? import_types.Vote.toAmino(message.vote) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryVoteByProposalVoterResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryVoteByProposalVoterResponse",
      value: QueryVoteByProposalVoterResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryVoteByProposalVoterResponse.decode(message.value);
  },
  toProto(message) {
    return QueryVoteByProposalVoterResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.group.v1.QueryVoteByProposalVoterResponse",
      value: QueryVoteByProposalVoterResponse.encode(message).finish()
    };
  }
};
function createBaseQueryVotesByProposalRequest() {
  return {
    proposalId: BigInt(0),
    pagination: void 0
  };
}
const QueryVotesByProposalRequest = {
  typeUrl: "/cosmos.group.v1.QueryVotesByProposalRequest",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.pagination !== void 0) {
      import_pagination.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryVotesByProposalRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64();
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
    const message = createBaseQueryVotesByProposalRequest();
    message.proposalId = object.proposalId !== void 0 && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? import_pagination.PageRequest.fromPartial(object.pagination) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryVotesByProposalRequest();
    if (object.proposal_id !== void 0 && object.proposal_id !== null) {
      message.proposalId = BigInt(object.proposal_id);
    }
    if (object.pagination !== void 0 && object.pagination !== null) {
      message.pagination = import_pagination.PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.proposal_id = message.proposalId !== BigInt(0) ? message.proposalId?.toString() : void 0;
    obj.pagination = message.pagination ? import_pagination.PageRequest.toAmino(message.pagination) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryVotesByProposalRequest.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryVotesByProposalRequest",
      value: QueryVotesByProposalRequest.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryVotesByProposalRequest.decode(message.value);
  },
  toProto(message) {
    return QueryVotesByProposalRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.group.v1.QueryVotesByProposalRequest",
      value: QueryVotesByProposalRequest.encode(message).finish()
    };
  }
};
function createBaseQueryVotesByProposalResponse() {
  return {
    votes: [],
    pagination: void 0
  };
}
const QueryVotesByProposalResponse = {
  typeUrl: "/cosmos.group.v1.QueryVotesByProposalResponse",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    for (const v of message.votes) {
      import_types.Vote.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== void 0) {
      import_pagination.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryVotesByProposalResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.votes.push(import_types.Vote.decode(reader, reader.uint32()));
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
    const message = createBaseQueryVotesByProposalResponse();
    message.votes = object.votes?.map((e) => import_types.Vote.fromPartial(e)) || [];
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? import_pagination.PageResponse.fromPartial(object.pagination) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryVotesByProposalResponse();
    message.votes = object.votes?.map((e) => import_types.Vote.fromAmino(e)) || [];
    if (object.pagination !== void 0 && object.pagination !== null) {
      message.pagination = import_pagination.PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.votes) {
      obj.votes = message.votes.map((e) => e ? import_types.Vote.toAmino(e) : void 0);
    } else {
      obj.votes = message.votes;
    }
    obj.pagination = message.pagination ? import_pagination.PageResponse.toAmino(message.pagination) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryVotesByProposalResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryVotesByProposalResponse",
      value: QueryVotesByProposalResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryVotesByProposalResponse.decode(message.value);
  },
  toProto(message) {
    return QueryVotesByProposalResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.group.v1.QueryVotesByProposalResponse",
      value: QueryVotesByProposalResponse.encode(message).finish()
    };
  }
};
function createBaseQueryVotesByVoterRequest() {
  return {
    voter: "",
    pagination: void 0
  };
}
const QueryVotesByVoterRequest = {
  typeUrl: "/cosmos.group.v1.QueryVotesByVoterRequest",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.voter !== "") {
      writer.uint32(10).string(message.voter);
    }
    if (message.pagination !== void 0) {
      import_pagination.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryVotesByVoterRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.voter = reader.string();
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
    const message = createBaseQueryVotesByVoterRequest();
    message.voter = object.voter ?? "";
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? import_pagination.PageRequest.fromPartial(object.pagination) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryVotesByVoterRequest();
    if (object.voter !== void 0 && object.voter !== null) {
      message.voter = object.voter;
    }
    if (object.pagination !== void 0 && object.pagination !== null) {
      message.pagination = import_pagination.PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.voter = message.voter === "" ? void 0 : message.voter;
    obj.pagination = message.pagination ? import_pagination.PageRequest.toAmino(message.pagination) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryVotesByVoterRequest.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryVotesByVoterRequest",
      value: QueryVotesByVoterRequest.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryVotesByVoterRequest.decode(message.value);
  },
  toProto(message) {
    return QueryVotesByVoterRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.group.v1.QueryVotesByVoterRequest",
      value: QueryVotesByVoterRequest.encode(message).finish()
    };
  }
};
function createBaseQueryVotesByVoterResponse() {
  return {
    votes: [],
    pagination: void 0
  };
}
const QueryVotesByVoterResponse = {
  typeUrl: "/cosmos.group.v1.QueryVotesByVoterResponse",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    for (const v of message.votes) {
      import_types.Vote.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== void 0) {
      import_pagination.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryVotesByVoterResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.votes.push(import_types.Vote.decode(reader, reader.uint32()));
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
    const message = createBaseQueryVotesByVoterResponse();
    message.votes = object.votes?.map((e) => import_types.Vote.fromPartial(e)) || [];
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? import_pagination.PageResponse.fromPartial(object.pagination) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryVotesByVoterResponse();
    message.votes = object.votes?.map((e) => import_types.Vote.fromAmino(e)) || [];
    if (object.pagination !== void 0 && object.pagination !== null) {
      message.pagination = import_pagination.PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.votes) {
      obj.votes = message.votes.map((e) => e ? import_types.Vote.toAmino(e) : void 0);
    } else {
      obj.votes = message.votes;
    }
    obj.pagination = message.pagination ? import_pagination.PageResponse.toAmino(message.pagination) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryVotesByVoterResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryVotesByVoterResponse",
      value: QueryVotesByVoterResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryVotesByVoterResponse.decode(message.value);
  },
  toProto(message) {
    return QueryVotesByVoterResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.group.v1.QueryVotesByVoterResponse",
      value: QueryVotesByVoterResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGroupsByMemberRequest() {
  return {
    address: "",
    pagination: void 0
  };
}
const QueryGroupsByMemberRequest = {
  typeUrl: "/cosmos.group.v1.QueryGroupsByMemberRequest",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.pagination !== void 0) {
      import_pagination.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryGroupsByMemberRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
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
    const message = createBaseQueryGroupsByMemberRequest();
    message.address = object.address ?? "";
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? import_pagination.PageRequest.fromPartial(object.pagination) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryGroupsByMemberRequest();
    if (object.address !== void 0 && object.address !== null) {
      message.address = object.address;
    }
    if (object.pagination !== void 0 && object.pagination !== null) {
      message.pagination = import_pagination.PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.address = message.address === "" ? void 0 : message.address;
    obj.pagination = message.pagination ? import_pagination.PageRequest.toAmino(message.pagination) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryGroupsByMemberRequest.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryGroupsByMemberRequest",
      value: QueryGroupsByMemberRequest.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryGroupsByMemberRequest.decode(message.value);
  },
  toProto(message) {
    return QueryGroupsByMemberRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.group.v1.QueryGroupsByMemberRequest",
      value: QueryGroupsByMemberRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGroupsByMemberResponse() {
  return {
    groups: [],
    pagination: void 0
  };
}
const QueryGroupsByMemberResponse = {
  typeUrl: "/cosmos.group.v1.QueryGroupsByMemberResponse",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    for (const v of message.groups) {
      import_types.GroupInfo.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== void 0) {
      import_pagination.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryGroupsByMemberResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groups.push(import_types.GroupInfo.decode(reader, reader.uint32()));
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
    const message = createBaseQueryGroupsByMemberResponse();
    message.groups = object.groups?.map((e) => import_types.GroupInfo.fromPartial(e)) || [];
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? import_pagination.PageResponse.fromPartial(object.pagination) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryGroupsByMemberResponse();
    message.groups = object.groups?.map((e) => import_types.GroupInfo.fromAmino(e)) || [];
    if (object.pagination !== void 0 && object.pagination !== null) {
      message.pagination = import_pagination.PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.groups) {
      obj.groups = message.groups.map((e) => e ? import_types.GroupInfo.toAmino(e) : void 0);
    } else {
      obj.groups = message.groups;
    }
    obj.pagination = message.pagination ? import_pagination.PageResponse.toAmino(message.pagination) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryGroupsByMemberResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryGroupsByMemberResponse",
      value: QueryGroupsByMemberResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryGroupsByMemberResponse.decode(message.value);
  },
  toProto(message) {
    return QueryGroupsByMemberResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.group.v1.QueryGroupsByMemberResponse",
      value: QueryGroupsByMemberResponse.encode(message).finish()
    };
  }
};
function createBaseQueryTallyResultRequest() {
  return {
    proposalId: BigInt(0)
  };
}
const QueryTallyResultRequest = {
  typeUrl: "/cosmos.group.v1.QueryTallyResultRequest",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposalId);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryTallyResultRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryTallyResultRequest();
    message.proposalId = object.proposalId !== void 0 && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryTallyResultRequest();
    if (object.proposal_id !== void 0 && object.proposal_id !== null) {
      message.proposalId = BigInt(object.proposal_id);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.proposal_id = message.proposalId !== BigInt(0) ? message.proposalId?.toString() : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryTallyResultRequest.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryTallyResultRequest",
      value: QueryTallyResultRequest.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryTallyResultRequest.decode(message.value);
  },
  toProto(message) {
    return QueryTallyResultRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.group.v1.QueryTallyResultRequest",
      value: QueryTallyResultRequest.encode(message).finish()
    };
  }
};
function createBaseQueryTallyResultResponse() {
  return {
    tally: import_types.TallyResult.fromPartial({})
  };
}
const QueryTallyResultResponse = {
  typeUrl: "/cosmos.group.v1.QueryTallyResultResponse",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.tally !== void 0) {
      import_types.TallyResult.encode(message.tally, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryTallyResultResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tally = import_types.TallyResult.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryTallyResultResponse();
    message.tally = object.tally !== void 0 && object.tally !== null ? import_types.TallyResult.fromPartial(object.tally) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryTallyResultResponse();
    if (object.tally !== void 0 && object.tally !== null) {
      message.tally = import_types.TallyResult.fromAmino(object.tally);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.tally = message.tally ? import_types.TallyResult.toAmino(message.tally) : import_types.TallyResult.toAmino(import_types.TallyResult.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object) {
    return QueryTallyResultResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryTallyResultResponse",
      value: QueryTallyResultResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryTallyResultResponse.decode(message.value);
  },
  toProto(message) {
    return QueryTallyResultResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.group.v1.QueryTallyResultResponse",
      value: QueryTallyResultResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGroupsRequest() {
  return {
    pagination: void 0
  };
}
const QueryGroupsRequest = {
  typeUrl: "/cosmos.group.v1.QueryGroupsRequest",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.pagination !== void 0) {
      import_pagination.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryGroupsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
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
    const message = createBaseQueryGroupsRequest();
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? import_pagination.PageRequest.fromPartial(object.pagination) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryGroupsRequest();
    if (object.pagination !== void 0 && object.pagination !== null) {
      message.pagination = import_pagination.PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.pagination = message.pagination ? import_pagination.PageRequest.toAmino(message.pagination) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryGroupsRequest.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryGroupsRequest",
      value: QueryGroupsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryGroupsRequest.decode(message.value);
  },
  toProto(message) {
    return QueryGroupsRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.group.v1.QueryGroupsRequest",
      value: QueryGroupsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGroupsResponse() {
  return {
    groups: [],
    pagination: void 0
  };
}
const QueryGroupsResponse = {
  typeUrl: "/cosmos.group.v1.QueryGroupsResponse",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    for (const v of message.groups) {
      import_types.GroupInfo.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== void 0) {
      import_pagination.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryGroupsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groups.push(import_types.GroupInfo.decode(reader, reader.uint32()));
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
    const message = createBaseQueryGroupsResponse();
    message.groups = object.groups?.map((e) => import_types.GroupInfo.fromPartial(e)) || [];
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? import_pagination.PageResponse.fromPartial(object.pagination) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryGroupsResponse();
    message.groups = object.groups?.map((e) => import_types.GroupInfo.fromAmino(e)) || [];
    if (object.pagination !== void 0 && object.pagination !== null) {
      message.pagination = import_pagination.PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.groups) {
      obj.groups = message.groups.map((e) => e ? import_types.GroupInfo.toAmino(e) : void 0);
    } else {
      obj.groups = message.groups;
    }
    obj.pagination = message.pagination ? import_pagination.PageResponse.toAmino(message.pagination) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryGroupsResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryGroupsResponse",
      value: QueryGroupsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryGroupsResponse.decode(message.value);
  },
  toProto(message) {
    return QueryGroupsResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.group.v1.QueryGroupsResponse",
      value: QueryGroupsResponse.encode(message).finish()
    };
  }
};
// Removed broken CommonJS export annotation
