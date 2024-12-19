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
var tx_exports = {};
__export(tx_exports, {
  Cosmos_groupv1DecisionPolicy_FromAmino: () => Cosmos_groupv1DecisionPolicy_FromAmino,
  Cosmos_groupv1DecisionPolicy_InterfaceDecoder: () => Cosmos_groupv1DecisionPolicy_InterfaceDecoder,
  Cosmos_groupv1DecisionPolicy_ToAmino: () => Cosmos_groupv1DecisionPolicy_ToAmino,
  Exec: () => Exec,
  ExecAmino: () => ExecAmino,
  ExecSDKType: () => ExecSDKType,
  MsgCreateGroup: () => MsgCreateGroup,
  MsgCreateGroupPolicy: () => MsgCreateGroupPolicy,
  MsgCreateGroupPolicyResponse: () => MsgCreateGroupPolicyResponse,
  MsgCreateGroupResponse: () => MsgCreateGroupResponse,
  MsgCreateGroupWithPolicy: () => MsgCreateGroupWithPolicy,
  MsgCreateGroupWithPolicyResponse: () => MsgCreateGroupWithPolicyResponse,
  MsgExec: () => MsgExec,
  MsgExecResponse: () => MsgExecResponse,
  MsgLeaveGroup: () => MsgLeaveGroup,
  MsgLeaveGroupResponse: () => MsgLeaveGroupResponse,
  MsgSubmitProposal: () => MsgSubmitProposal,
  MsgSubmitProposalResponse: () => MsgSubmitProposalResponse,
  MsgUpdateGroupAdmin: () => MsgUpdateGroupAdmin,
  MsgUpdateGroupAdminResponse: () => MsgUpdateGroupAdminResponse,
  MsgUpdateGroupMembers: () => MsgUpdateGroupMembers,
  MsgUpdateGroupMembersResponse: () => MsgUpdateGroupMembersResponse,
  MsgUpdateGroupMetadata: () => MsgUpdateGroupMetadata,
  MsgUpdateGroupMetadataResponse: () => MsgUpdateGroupMetadataResponse,
  MsgUpdateGroupPolicyAdmin: () => MsgUpdateGroupPolicyAdmin,
  MsgUpdateGroupPolicyAdminResponse: () => MsgUpdateGroupPolicyAdminResponse,
  MsgUpdateGroupPolicyDecisionPolicy: () => MsgUpdateGroupPolicyDecisionPolicy,
  MsgUpdateGroupPolicyDecisionPolicyResponse: () => MsgUpdateGroupPolicyDecisionPolicyResponse,
  MsgUpdateGroupPolicyMetadata: () => MsgUpdateGroupPolicyMetadata,
  MsgUpdateGroupPolicyMetadataResponse: () => MsgUpdateGroupPolicyMetadataResponse,
  MsgVote: () => MsgVote,
  MsgVoteResponse: () => MsgVoteResponse,
  MsgWithdrawProposal: () => MsgWithdrawProposal,
  MsgWithdrawProposalResponse: () => MsgWithdrawProposalResponse,
  execFromJSON: () => execFromJSON,
  execToJSON: () => execToJSON
});
module.exports = __toCommonJS(tx_exports);
var import_types = require("./types");
var import_any = require("../../../google/protobuf/any");
var import_binary = require("../../../binary");
var Exec = /* @__PURE__ */ ((Exec2) => {
  Exec2[Exec2["EXEC_UNSPECIFIED"] = 0] = "EXEC_UNSPECIFIED";
  Exec2[Exec2["EXEC_TRY"] = 1] = "EXEC_TRY";
  Exec2[Exec2["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return Exec2;
})(Exec || {});
const ExecSDKType = Exec;
const ExecAmino = Exec;
function execFromJSON(object) {
  switch (object) {
    case 0:
    case "EXEC_UNSPECIFIED":
      return 0 /* EXEC_UNSPECIFIED */;
    case 1:
    case "EXEC_TRY":
      return 1 /* EXEC_TRY */;
    case -1:
    case "UNRECOGNIZED":
    default:
      return -1 /* UNRECOGNIZED */;
  }
}
function execToJSON(object) {
  switch (object) {
    case 0 /* EXEC_UNSPECIFIED */:
      return "EXEC_UNSPECIFIED";
    case 1 /* EXEC_TRY */:
      return "EXEC_TRY";
    case -1 /* UNRECOGNIZED */:
    default:
      return "UNRECOGNIZED";
  }
}
function createBaseMsgCreateGroup() {
  return {
    admin: "",
    members: [],
    metadata: ""
  };
}
const MsgCreateGroup = {
  typeUrl: "/cosmos.group.v1.MsgCreateGroup",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    for (const v of message.members) {
      import_types.MemberRequest.encode(v, writer.uint32(18).fork()).ldelim();
    }
    if (message.metadata !== "") {
      writer.uint32(26).string(message.metadata);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateGroup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.members.push(import_types.MemberRequest.decode(reader, reader.uint32()));
          break;
        case 3:
          message.metadata = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgCreateGroup();
    message.admin = object.admin ?? "";
    message.members = object.members?.map((e) => import_types.MemberRequest.fromPartial(e)) || [];
    message.metadata = object.metadata ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgCreateGroup();
    if (object.admin !== void 0 && object.admin !== null) {
      message.admin = object.admin;
    }
    message.members = object.members?.map((e) => import_types.MemberRequest.fromAmino(e)) || [];
    if (object.metadata !== void 0 && object.metadata !== null) {
      message.metadata = object.metadata;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.admin = message.admin === "" ? void 0 : message.admin;
    if (message.members) {
      obj.members = message.members.map((e) => e ? import_types.MemberRequest.toAmino(e) : void 0);
    } else {
      obj.members = message.members;
    }
    obj.metadata = message.metadata === "" ? void 0 : message.metadata;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgCreateGroup.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgCreateGroup",
      value: MsgCreateGroup.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgCreateGroup.decode(message.value);
  },
  toProto(message) {
    return MsgCreateGroup.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.group.v1.MsgCreateGroup",
      value: MsgCreateGroup.encode(message).finish()
    };
  }
};
function createBaseMsgCreateGroupResponse() {
  return {
    groupId: BigInt(0)
  };
}
const MsgCreateGroupResponse = {
  typeUrl: "/cosmos.group.v1.MsgCreateGroupResponse",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.groupId !== BigInt(0)) {
      writer.uint32(8).uint64(message.groupId);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateGroupResponse();
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
    const message = createBaseMsgCreateGroupResponse();
    message.groupId = object.groupId !== void 0 && object.groupId !== null ? BigInt(object.groupId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgCreateGroupResponse();
    if (object.group_id !== void 0 && object.group_id !== null) {
      message.groupId = BigInt(object.group_id);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.group_id = message.groupId !== BigInt(0) ? message.groupId.toString() : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgCreateGroupResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgCreateGroupResponse",
      value: MsgCreateGroupResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgCreateGroupResponse.decode(message.value);
  },
  toProto(message) {
    return MsgCreateGroupResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.group.v1.MsgCreateGroupResponse",
      value: MsgCreateGroupResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateGroupMembers() {
  return {
    admin: "",
    groupId: BigInt(0),
    memberUpdates: []
  };
}
const MsgUpdateGroupMembers = {
  typeUrl: "/cosmos.group.v1.MsgUpdateGroupMembers",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (message.groupId !== BigInt(0)) {
      writer.uint32(16).uint64(message.groupId);
    }
    for (const v of message.memberUpdates) {
      import_types.MemberRequest.encode(v, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateGroupMembers();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.groupId = reader.uint64();
          break;
        case 3:
          message.memberUpdates.push(import_types.MemberRequest.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgUpdateGroupMembers();
    message.admin = object.admin ?? "";
    message.groupId = object.groupId !== void 0 && object.groupId !== null ? BigInt(object.groupId.toString()) : BigInt(0);
    message.memberUpdates = object.memberUpdates?.map((e) => import_types.MemberRequest.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgUpdateGroupMembers();
    if (object.admin !== void 0 && object.admin !== null) {
      message.admin = object.admin;
    }
    if (object.group_id !== void 0 && object.group_id !== null) {
      message.groupId = BigInt(object.group_id);
    }
    message.memberUpdates = object.member_updates?.map((e) => import_types.MemberRequest.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.admin = message.admin === "" ? void 0 : message.admin;
    obj.group_id = message.groupId !== BigInt(0) ? message.groupId.toString() : void 0;
    if (message.memberUpdates) {
      obj.member_updates = message.memberUpdates.map((e) => e ? import_types.MemberRequest.toAmino(e) : void 0);
    } else {
      obj.member_updates = message.memberUpdates;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return MsgUpdateGroupMembers.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgUpdateGroupMembers",
      value: MsgUpdateGroupMembers.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgUpdateGroupMembers.decode(message.value);
  },
  toProto(message) {
    return MsgUpdateGroupMembers.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.group.v1.MsgUpdateGroupMembers",
      value: MsgUpdateGroupMembers.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateGroupMembersResponse() {
  return {};
}
const MsgUpdateGroupMembersResponse = {
  typeUrl: "/cosmos.group.v1.MsgUpdateGroupMembersResponse",
  encode(_, writer = import_binary.BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateGroupMembersResponse();
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
    const message = createBaseMsgUpdateGroupMembersResponse();
    return message;
  },
  fromAmino(_) {
    const message = createBaseMsgUpdateGroupMembersResponse();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return MsgUpdateGroupMembersResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgUpdateGroupMembersResponse",
      value: MsgUpdateGroupMembersResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgUpdateGroupMembersResponse.decode(message.value);
  },
  toProto(message) {
    return MsgUpdateGroupMembersResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.group.v1.MsgUpdateGroupMembersResponse",
      value: MsgUpdateGroupMembersResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateGroupAdmin() {
  return {
    admin: "",
    groupId: BigInt(0),
    newAdmin: ""
  };
}
const MsgUpdateGroupAdmin = {
  typeUrl: "/cosmos.group.v1.MsgUpdateGroupAdmin",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (message.groupId !== BigInt(0)) {
      writer.uint32(16).uint64(message.groupId);
    }
    if (message.newAdmin !== "") {
      writer.uint32(26).string(message.newAdmin);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateGroupAdmin();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.groupId = reader.uint64();
          break;
        case 3:
          message.newAdmin = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgUpdateGroupAdmin();
    message.admin = object.admin ?? "";
    message.groupId = object.groupId !== void 0 && object.groupId !== null ? BigInt(object.groupId.toString()) : BigInt(0);
    message.newAdmin = object.newAdmin ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgUpdateGroupAdmin();
    if (object.admin !== void 0 && object.admin !== null) {
      message.admin = object.admin;
    }
    if (object.group_id !== void 0 && object.group_id !== null) {
      message.groupId = BigInt(object.group_id);
    }
    if (object.new_admin !== void 0 && object.new_admin !== null) {
      message.newAdmin = object.new_admin;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.admin = message.admin === "" ? void 0 : message.admin;
    obj.group_id = message.groupId !== BigInt(0) ? message.groupId.toString() : void 0;
    obj.new_admin = message.newAdmin === "" ? void 0 : message.newAdmin;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgUpdateGroupAdmin.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgUpdateGroupAdmin",
      value: MsgUpdateGroupAdmin.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgUpdateGroupAdmin.decode(message.value);
  },
  toProto(message) {
    return MsgUpdateGroupAdmin.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.group.v1.MsgUpdateGroupAdmin",
      value: MsgUpdateGroupAdmin.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateGroupAdminResponse() {
  return {};
}
const MsgUpdateGroupAdminResponse = {
  typeUrl: "/cosmos.group.v1.MsgUpdateGroupAdminResponse",
  encode(_, writer = import_binary.BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateGroupAdminResponse();
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
    const message = createBaseMsgUpdateGroupAdminResponse();
    return message;
  },
  fromAmino(_) {
    const message = createBaseMsgUpdateGroupAdminResponse();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return MsgUpdateGroupAdminResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgUpdateGroupAdminResponse",
      value: MsgUpdateGroupAdminResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgUpdateGroupAdminResponse.decode(message.value);
  },
  toProto(message) {
    return MsgUpdateGroupAdminResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.group.v1.MsgUpdateGroupAdminResponse",
      value: MsgUpdateGroupAdminResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateGroupMetadata() {
  return {
    admin: "",
    groupId: BigInt(0),
    metadata: ""
  };
}
const MsgUpdateGroupMetadata = {
  typeUrl: "/cosmos.group.v1.MsgUpdateGroupMetadata",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (message.groupId !== BigInt(0)) {
      writer.uint32(16).uint64(message.groupId);
    }
    if (message.metadata !== "") {
      writer.uint32(26).string(message.metadata);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateGroupMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.groupId = reader.uint64();
          break;
        case 3:
          message.metadata = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgUpdateGroupMetadata();
    message.admin = object.admin ?? "";
    message.groupId = object.groupId !== void 0 && object.groupId !== null ? BigInt(object.groupId.toString()) : BigInt(0);
    message.metadata = object.metadata ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgUpdateGroupMetadata();
    if (object.admin !== void 0 && object.admin !== null) {
      message.admin = object.admin;
    }
    if (object.group_id !== void 0 && object.group_id !== null) {
      message.groupId = BigInt(object.group_id);
    }
    if (object.metadata !== void 0 && object.metadata !== null) {
      message.metadata = object.metadata;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.admin = message.admin === "" ? void 0 : message.admin;
    obj.group_id = message.groupId !== BigInt(0) ? message.groupId.toString() : void 0;
    obj.metadata = message.metadata === "" ? void 0 : message.metadata;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgUpdateGroupMetadata.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgUpdateGroupMetadata",
      value: MsgUpdateGroupMetadata.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgUpdateGroupMetadata.decode(message.value);
  },
  toProto(message) {
    return MsgUpdateGroupMetadata.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.group.v1.MsgUpdateGroupMetadata",
      value: MsgUpdateGroupMetadata.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateGroupMetadataResponse() {
  return {};
}
const MsgUpdateGroupMetadataResponse = {
  typeUrl: "/cosmos.group.v1.MsgUpdateGroupMetadataResponse",
  encode(_, writer = import_binary.BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateGroupMetadataResponse();
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
    const message = createBaseMsgUpdateGroupMetadataResponse();
    return message;
  },
  fromAmino(_) {
    const message = createBaseMsgUpdateGroupMetadataResponse();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return MsgUpdateGroupMetadataResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgUpdateGroupMetadataResponse",
      value: MsgUpdateGroupMetadataResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgUpdateGroupMetadataResponse.decode(message.value);
  },
  toProto(message) {
    return MsgUpdateGroupMetadataResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.group.v1.MsgUpdateGroupMetadataResponse",
      value: MsgUpdateGroupMetadataResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCreateGroupPolicy() {
  return {
    admin: "",
    groupId: BigInt(0),
    metadata: "",
    decisionPolicy: void 0
  };
}
const MsgCreateGroupPolicy = {
  typeUrl: "/cosmos.group.v1.MsgCreateGroupPolicy",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (message.groupId !== BigInt(0)) {
      writer.uint32(16).uint64(message.groupId);
    }
    if (message.metadata !== "") {
      writer.uint32(26).string(message.metadata);
    }
    if (message.decisionPolicy !== void 0) {
      import_any.Any.encode(message.decisionPolicy, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateGroupPolicy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.groupId = reader.uint64();
          break;
        case 3:
          message.metadata = reader.string();
          break;
        case 4:
          message.decisionPolicy = Cosmos_groupv1DecisionPolicy_InterfaceDecoder(reader);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgCreateGroupPolicy();
    message.admin = object.admin ?? "";
    message.groupId = object.groupId !== void 0 && object.groupId !== null ? BigInt(object.groupId.toString()) : BigInt(0);
    message.metadata = object.metadata ?? "";
    message.decisionPolicy = object.decisionPolicy !== void 0 && object.decisionPolicy !== null ? import_any.Any.fromPartial(object.decisionPolicy) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgCreateGroupPolicy();
    if (object.admin !== void 0 && object.admin !== null) {
      message.admin = object.admin;
    }
    if (object.group_id !== void 0 && object.group_id !== null) {
      message.groupId = BigInt(object.group_id);
    }
    if (object.metadata !== void 0 && object.metadata !== null) {
      message.metadata = object.metadata;
    }
    if (object.decision_policy !== void 0 && object.decision_policy !== null) {
      message.decisionPolicy = Cosmos_groupv1DecisionPolicy_FromAmino(object.decision_policy);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.admin = message.admin === "" ? void 0 : message.admin;
    obj.group_id = message.groupId !== BigInt(0) ? message.groupId.toString() : void 0;
    obj.metadata = message.metadata === "" ? void 0 : message.metadata;
    obj.decision_policy = message.decisionPolicy ? Cosmos_groupv1DecisionPolicy_ToAmino(message.decisionPolicy) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgCreateGroupPolicy.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgCreateGroupPolicy",
      value: MsgCreateGroupPolicy.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgCreateGroupPolicy.decode(message.value);
  },
  toProto(message) {
    return MsgCreateGroupPolicy.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.group.v1.MsgCreateGroupPolicy",
      value: MsgCreateGroupPolicy.encode(message).finish()
    };
  }
};
function createBaseMsgCreateGroupPolicyResponse() {
  return {
    address: ""
  };
}
const MsgCreateGroupPolicyResponse = {
  typeUrl: "/cosmos.group.v1.MsgCreateGroupPolicyResponse",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateGroupPolicyResponse();
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
    const message = createBaseMsgCreateGroupPolicyResponse();
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgCreateGroupPolicyResponse();
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
    return MsgCreateGroupPolicyResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgCreateGroupPolicyResponse",
      value: MsgCreateGroupPolicyResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgCreateGroupPolicyResponse.decode(message.value);
  },
  toProto(message) {
    return MsgCreateGroupPolicyResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.group.v1.MsgCreateGroupPolicyResponse",
      value: MsgCreateGroupPolicyResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateGroupPolicyAdmin() {
  return {
    admin: "",
    groupPolicyAddress: "",
    newAdmin: ""
  };
}
const MsgUpdateGroupPolicyAdmin = {
  typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyAdmin",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (message.groupPolicyAddress !== "") {
      writer.uint32(18).string(message.groupPolicyAddress);
    }
    if (message.newAdmin !== "") {
      writer.uint32(26).string(message.newAdmin);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateGroupPolicyAdmin();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.groupPolicyAddress = reader.string();
          break;
        case 3:
          message.newAdmin = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgUpdateGroupPolicyAdmin();
    message.admin = object.admin ?? "";
    message.groupPolicyAddress = object.groupPolicyAddress ?? "";
    message.newAdmin = object.newAdmin ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgUpdateGroupPolicyAdmin();
    if (object.admin !== void 0 && object.admin !== null) {
      message.admin = object.admin;
    }
    if (object.group_policy_address !== void 0 && object.group_policy_address !== null) {
      message.groupPolicyAddress = object.group_policy_address;
    }
    if (object.new_admin !== void 0 && object.new_admin !== null) {
      message.newAdmin = object.new_admin;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.admin = message.admin === "" ? void 0 : message.admin;
    obj.group_policy_address = message.groupPolicyAddress === "" ? void 0 : message.groupPolicyAddress;
    obj.new_admin = message.newAdmin === "" ? void 0 : message.newAdmin;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgUpdateGroupPolicyAdmin.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgUpdateGroupPolicyAdmin",
      value: MsgUpdateGroupPolicyAdmin.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgUpdateGroupPolicyAdmin.decode(message.value);
  },
  toProto(message) {
    return MsgUpdateGroupPolicyAdmin.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyAdmin",
      value: MsgUpdateGroupPolicyAdmin.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateGroupPolicyAdminResponse() {
  return {};
}
const MsgUpdateGroupPolicyAdminResponse = {
  typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyAdminResponse",
  encode(_, writer = import_binary.BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateGroupPolicyAdminResponse();
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
    const message = createBaseMsgUpdateGroupPolicyAdminResponse();
    return message;
  },
  fromAmino(_) {
    const message = createBaseMsgUpdateGroupPolicyAdminResponse();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return MsgUpdateGroupPolicyAdminResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgUpdateGroupPolicyAdminResponse",
      value: MsgUpdateGroupPolicyAdminResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgUpdateGroupPolicyAdminResponse.decode(message.value);
  },
  toProto(message) {
    return MsgUpdateGroupPolicyAdminResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyAdminResponse",
      value: MsgUpdateGroupPolicyAdminResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCreateGroupWithPolicy() {
  return {
    admin: "",
    members: [],
    groupMetadata: "",
    groupPolicyMetadata: "",
    groupPolicyAsAdmin: false,
    decisionPolicy: void 0
  };
}
const MsgCreateGroupWithPolicy = {
  typeUrl: "/cosmos.group.v1.MsgCreateGroupWithPolicy",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    for (const v of message.members) {
      import_types.MemberRequest.encode(v, writer.uint32(18).fork()).ldelim();
    }
    if (message.groupMetadata !== "") {
      writer.uint32(26).string(message.groupMetadata);
    }
    if (message.groupPolicyMetadata !== "") {
      writer.uint32(34).string(message.groupPolicyMetadata);
    }
    if (message.groupPolicyAsAdmin === true) {
      writer.uint32(40).bool(message.groupPolicyAsAdmin);
    }
    if (message.decisionPolicy !== void 0) {
      import_any.Any.encode(message.decisionPolicy, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateGroupWithPolicy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.members.push(import_types.MemberRequest.decode(reader, reader.uint32()));
          break;
        case 3:
          message.groupMetadata = reader.string();
          break;
        case 4:
          message.groupPolicyMetadata = reader.string();
          break;
        case 5:
          message.groupPolicyAsAdmin = reader.bool();
          break;
        case 6:
          message.decisionPolicy = Cosmos_groupv1DecisionPolicy_InterfaceDecoder(reader);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgCreateGroupWithPolicy();
    message.admin = object.admin ?? "";
    message.members = object.members?.map((e) => import_types.MemberRequest.fromPartial(e)) || [];
    message.groupMetadata = object.groupMetadata ?? "";
    message.groupPolicyMetadata = object.groupPolicyMetadata ?? "";
    message.groupPolicyAsAdmin = object.groupPolicyAsAdmin ?? false;
    message.decisionPolicy = object.decisionPolicy !== void 0 && object.decisionPolicy !== null ? import_any.Any.fromPartial(object.decisionPolicy) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgCreateGroupWithPolicy();
    if (object.admin !== void 0 && object.admin !== null) {
      message.admin = object.admin;
    }
    message.members = object.members?.map((e) => import_types.MemberRequest.fromAmino(e)) || [];
    if (object.group_metadata !== void 0 && object.group_metadata !== null) {
      message.groupMetadata = object.group_metadata;
    }
    if (object.group_policy_metadata !== void 0 && object.group_policy_metadata !== null) {
      message.groupPolicyMetadata = object.group_policy_metadata;
    }
    if (object.group_policy_as_admin !== void 0 && object.group_policy_as_admin !== null) {
      message.groupPolicyAsAdmin = object.group_policy_as_admin;
    }
    if (object.decision_policy !== void 0 && object.decision_policy !== null) {
      message.decisionPolicy = Cosmos_groupv1DecisionPolicy_FromAmino(object.decision_policy);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.admin = message.admin === "" ? void 0 : message.admin;
    if (message.members) {
      obj.members = message.members.map((e) => e ? import_types.MemberRequest.toAmino(e) : void 0);
    } else {
      obj.members = message.members;
    }
    obj.group_metadata = message.groupMetadata === "" ? void 0 : message.groupMetadata;
    obj.group_policy_metadata = message.groupPolicyMetadata === "" ? void 0 : message.groupPolicyMetadata;
    obj.group_policy_as_admin = message.groupPolicyAsAdmin === false ? void 0 : message.groupPolicyAsAdmin;
    obj.decision_policy = message.decisionPolicy ? Cosmos_groupv1DecisionPolicy_ToAmino(message.decisionPolicy) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgCreateGroupWithPolicy.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgCreateGroupWithPolicy",
      value: MsgCreateGroupWithPolicy.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgCreateGroupWithPolicy.decode(message.value);
  },
  toProto(message) {
    return MsgCreateGroupWithPolicy.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.group.v1.MsgCreateGroupWithPolicy",
      value: MsgCreateGroupWithPolicy.encode(message).finish()
    };
  }
};
function createBaseMsgCreateGroupWithPolicyResponse() {
  return {
    groupId: BigInt(0),
    groupPolicyAddress: ""
  };
}
const MsgCreateGroupWithPolicyResponse = {
  typeUrl: "/cosmos.group.v1.MsgCreateGroupWithPolicyResponse",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.groupId !== BigInt(0)) {
      writer.uint32(8).uint64(message.groupId);
    }
    if (message.groupPolicyAddress !== "") {
      writer.uint32(18).string(message.groupPolicyAddress);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateGroupWithPolicyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupId = reader.uint64();
          break;
        case 2:
          message.groupPolicyAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgCreateGroupWithPolicyResponse();
    message.groupId = object.groupId !== void 0 && object.groupId !== null ? BigInt(object.groupId.toString()) : BigInt(0);
    message.groupPolicyAddress = object.groupPolicyAddress ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgCreateGroupWithPolicyResponse();
    if (object.group_id !== void 0 && object.group_id !== null) {
      message.groupId = BigInt(object.group_id);
    }
    if (object.group_policy_address !== void 0 && object.group_policy_address !== null) {
      message.groupPolicyAddress = object.group_policy_address;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.group_id = message.groupId !== BigInt(0) ? message.groupId.toString() : void 0;
    obj.group_policy_address = message.groupPolicyAddress === "" ? void 0 : message.groupPolicyAddress;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgCreateGroupWithPolicyResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgCreateGroupWithPolicyResponse",
      value: MsgCreateGroupWithPolicyResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgCreateGroupWithPolicyResponse.decode(message.value);
  },
  toProto(message) {
    return MsgCreateGroupWithPolicyResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.group.v1.MsgCreateGroupWithPolicyResponse",
      value: MsgCreateGroupWithPolicyResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateGroupPolicyDecisionPolicy() {
  return {
    admin: "",
    groupPolicyAddress: "",
    decisionPolicy: void 0
  };
}
const MsgUpdateGroupPolicyDecisionPolicy = {
  typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (message.groupPolicyAddress !== "") {
      writer.uint32(18).string(message.groupPolicyAddress);
    }
    if (message.decisionPolicy !== void 0) {
      import_any.Any.encode(message.decisionPolicy, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateGroupPolicyDecisionPolicy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.groupPolicyAddress = reader.string();
          break;
        case 3:
          message.decisionPolicy = Cosmos_groupv1DecisionPolicy_InterfaceDecoder(reader);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgUpdateGroupPolicyDecisionPolicy();
    message.admin = object.admin ?? "";
    message.groupPolicyAddress = object.groupPolicyAddress ?? "";
    message.decisionPolicy = object.decisionPolicy !== void 0 && object.decisionPolicy !== null ? import_any.Any.fromPartial(object.decisionPolicy) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgUpdateGroupPolicyDecisionPolicy();
    if (object.admin !== void 0 && object.admin !== null) {
      message.admin = object.admin;
    }
    if (object.group_policy_address !== void 0 && object.group_policy_address !== null) {
      message.groupPolicyAddress = object.group_policy_address;
    }
    if (object.decision_policy !== void 0 && object.decision_policy !== null) {
      message.decisionPolicy = Cosmos_groupv1DecisionPolicy_FromAmino(object.decision_policy);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.admin = message.admin === "" ? void 0 : message.admin;
    obj.group_policy_address = message.groupPolicyAddress === "" ? void 0 : message.groupPolicyAddress;
    obj.decision_policy = message.decisionPolicy ? Cosmos_groupv1DecisionPolicy_ToAmino(message.decisionPolicy) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgUpdateGroupPolicyDecisionPolicy.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgUpdateGroupDecisionPolicy",
      value: MsgUpdateGroupPolicyDecisionPolicy.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgUpdateGroupPolicyDecisionPolicy.decode(message.value);
  },
  toProto(message) {
    return MsgUpdateGroupPolicyDecisionPolicy.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy",
      value: MsgUpdateGroupPolicyDecisionPolicy.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateGroupPolicyDecisionPolicyResponse() {
  return {};
}
const MsgUpdateGroupPolicyDecisionPolicyResponse = {
  typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicyResponse",
  encode(_, writer = import_binary.BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateGroupPolicyDecisionPolicyResponse();
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
    const message = createBaseMsgUpdateGroupPolicyDecisionPolicyResponse();
    return message;
  },
  fromAmino(_) {
    const message = createBaseMsgUpdateGroupPolicyDecisionPolicyResponse();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return MsgUpdateGroupPolicyDecisionPolicyResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgUpdateGroupPolicyDecisionPolicyResponse",
      value: MsgUpdateGroupPolicyDecisionPolicyResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgUpdateGroupPolicyDecisionPolicyResponse.decode(message.value);
  },
  toProto(message) {
    return MsgUpdateGroupPolicyDecisionPolicyResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicyResponse",
      value: MsgUpdateGroupPolicyDecisionPolicyResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateGroupPolicyMetadata() {
  return {
    admin: "",
    groupPolicyAddress: "",
    metadata: ""
  };
}
const MsgUpdateGroupPolicyMetadata = {
  typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyMetadata",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (message.groupPolicyAddress !== "") {
      writer.uint32(18).string(message.groupPolicyAddress);
    }
    if (message.metadata !== "") {
      writer.uint32(26).string(message.metadata);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateGroupPolicyMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.groupPolicyAddress = reader.string();
          break;
        case 3:
          message.metadata = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgUpdateGroupPolicyMetadata();
    message.admin = object.admin ?? "";
    message.groupPolicyAddress = object.groupPolicyAddress ?? "";
    message.metadata = object.metadata ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgUpdateGroupPolicyMetadata();
    if (object.admin !== void 0 && object.admin !== null) {
      message.admin = object.admin;
    }
    if (object.group_policy_address !== void 0 && object.group_policy_address !== null) {
      message.groupPolicyAddress = object.group_policy_address;
    }
    if (object.metadata !== void 0 && object.metadata !== null) {
      message.metadata = object.metadata;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.admin = message.admin === "" ? void 0 : message.admin;
    obj.group_policy_address = message.groupPolicyAddress === "" ? void 0 : message.groupPolicyAddress;
    obj.metadata = message.metadata === "" ? void 0 : message.metadata;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgUpdateGroupPolicyMetadata.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgUpdateGroupPolicyMetadata",
      value: MsgUpdateGroupPolicyMetadata.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgUpdateGroupPolicyMetadata.decode(message.value);
  },
  toProto(message) {
    return MsgUpdateGroupPolicyMetadata.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyMetadata",
      value: MsgUpdateGroupPolicyMetadata.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateGroupPolicyMetadataResponse() {
  return {};
}
const MsgUpdateGroupPolicyMetadataResponse = {
  typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyMetadataResponse",
  encode(_, writer = import_binary.BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateGroupPolicyMetadataResponse();
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
    const message = createBaseMsgUpdateGroupPolicyMetadataResponse();
    return message;
  },
  fromAmino(_) {
    const message = createBaseMsgUpdateGroupPolicyMetadataResponse();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return MsgUpdateGroupPolicyMetadataResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgUpdateGroupPolicyMetadataResponse",
      value: MsgUpdateGroupPolicyMetadataResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgUpdateGroupPolicyMetadataResponse.decode(message.value);
  },
  toProto(message) {
    return MsgUpdateGroupPolicyMetadataResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyMetadataResponse",
      value: MsgUpdateGroupPolicyMetadataResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSubmitProposal() {
  return {
    groupPolicyAddress: "",
    proposers: [],
    metadata: "",
    messages: [],
    exec: 0,
    title: "",
    summary: ""
  };
}
const MsgSubmitProposal = {
  typeUrl: "/cosmos.group.v1.MsgSubmitProposal",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.groupPolicyAddress !== "") {
      writer.uint32(10).string(message.groupPolicyAddress);
    }
    for (const v of message.proposers) {
      writer.uint32(18).string(v);
    }
    if (message.metadata !== "") {
      writer.uint32(26).string(message.metadata);
    }
    for (const v of message.messages) {
      import_any.Any.encode(v, writer.uint32(34).fork()).ldelim();
    }
    if (message.exec !== 0) {
      writer.uint32(40).int32(message.exec);
    }
    if (message.title !== "") {
      writer.uint32(50).string(message.title);
    }
    if (message.summary !== "") {
      writer.uint32(58).string(message.summary);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupPolicyAddress = reader.string();
          break;
        case 2:
          message.proposers.push(reader.string());
          break;
        case 3:
          message.metadata = reader.string();
          break;
        case 4:
          message.messages.push(import_any.Any.decode(reader, reader.uint32()));
          break;
        case 5:
          message.exec = reader.int32();
          break;
        case 6:
          message.title = reader.string();
          break;
        case 7:
          message.summary = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgSubmitProposal();
    message.groupPolicyAddress = object.groupPolicyAddress ?? "";
    message.proposers = object.proposers?.map((e) => e) || [];
    message.metadata = object.metadata ?? "";
    message.messages = object.messages?.map((e) => import_any.Any.fromPartial(e)) || [];
    message.exec = object.exec ?? 0;
    message.title = object.title ?? "";
    message.summary = object.summary ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgSubmitProposal();
    if (object.group_policy_address !== void 0 && object.group_policy_address !== null) {
      message.groupPolicyAddress = object.group_policy_address;
    }
    message.proposers = object.proposers?.map((e) => e) || [];
    if (object.metadata !== void 0 && object.metadata !== null) {
      message.metadata = object.metadata;
    }
    message.messages = object.messages?.map((e) => import_any.Any.fromAmino(e)) || [];
    if (object.exec !== void 0 && object.exec !== null) {
      message.exec = object.exec;
    }
    if (object.title !== void 0 && object.title !== null) {
      message.title = object.title;
    }
    if (object.summary !== void 0 && object.summary !== null) {
      message.summary = object.summary;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.group_policy_address = message.groupPolicyAddress === "" ? void 0 : message.groupPolicyAddress;
    if (message.proposers) {
      obj.proposers = message.proposers.map((e) => e);
    } else {
      obj.proposers = message.proposers;
    }
    obj.metadata = message.metadata === "" ? void 0 : message.metadata;
    if (message.messages) {
      obj.messages = message.messages.map((e) => e ? import_any.Any.toAmino(e) : void 0);
    } else {
      obj.messages = message.messages;
    }
    obj.exec = message.exec === 0 ? void 0 : message.exec;
    obj.title = message.title === "" ? void 0 : message.title;
    obj.summary = message.summary === "" ? void 0 : message.summary;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgSubmitProposal.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/group/MsgSubmitProposal",
      value: MsgSubmitProposal.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgSubmitProposal.decode(message.value);
  },
  toProto(message) {
    return MsgSubmitProposal.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.group.v1.MsgSubmitProposal",
      value: MsgSubmitProposal.encode(message).finish()
    };
  }
};
function createBaseMsgSubmitProposalResponse() {
  return {
    proposalId: BigInt(0)
  };
}
const MsgSubmitProposalResponse = {
  typeUrl: "/cosmos.group.v1.MsgSubmitProposalResponse",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposalId);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitProposalResponse();
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
    const message = createBaseMsgSubmitProposalResponse();
    message.proposalId = object.proposalId !== void 0 && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgSubmitProposalResponse();
    if (object.proposal_id !== void 0 && object.proposal_id !== null) {
      message.proposalId = BigInt(object.proposal_id);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.proposal_id = message.proposalId !== BigInt(0) ? message.proposalId.toString() : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgSubmitProposalResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgSubmitProposalResponse",
      value: MsgSubmitProposalResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgSubmitProposalResponse.decode(message.value);
  },
  toProto(message) {
    return MsgSubmitProposalResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.group.v1.MsgSubmitProposalResponse",
      value: MsgSubmitProposalResponse.encode(message).finish()
    };
  }
};
function createBaseMsgWithdrawProposal() {
  return {
    proposalId: BigInt(0),
    address: ""
  };
}
const MsgWithdrawProposal = {
  typeUrl: "/cosmos.group.v1.MsgWithdrawProposal",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64();
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
    const message = createBaseMsgWithdrawProposal();
    message.proposalId = object.proposalId !== void 0 && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgWithdrawProposal();
    if (object.proposal_id !== void 0 && object.proposal_id !== null) {
      message.proposalId = BigInt(object.proposal_id);
    }
    if (object.address !== void 0 && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.proposal_id = message.proposalId !== BigInt(0) ? message.proposalId.toString() : void 0;
    obj.address = message.address === "" ? void 0 : message.address;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgWithdrawProposal.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/group/MsgWithdrawProposal",
      value: MsgWithdrawProposal.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgWithdrawProposal.decode(message.value);
  },
  toProto(message) {
    return MsgWithdrawProposal.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.group.v1.MsgWithdrawProposal",
      value: MsgWithdrawProposal.encode(message).finish()
    };
  }
};
function createBaseMsgWithdrawProposalResponse() {
  return {};
}
const MsgWithdrawProposalResponse = {
  typeUrl: "/cosmos.group.v1.MsgWithdrawProposalResponse",
  encode(_, writer = import_binary.BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawProposalResponse();
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
    const message = createBaseMsgWithdrawProposalResponse();
    return message;
  },
  fromAmino(_) {
    const message = createBaseMsgWithdrawProposalResponse();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return MsgWithdrawProposalResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgWithdrawProposalResponse",
      value: MsgWithdrawProposalResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgWithdrawProposalResponse.decode(message.value);
  },
  toProto(message) {
    return MsgWithdrawProposalResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.group.v1.MsgWithdrawProposalResponse",
      value: MsgWithdrawProposalResponse.encode(message).finish()
    };
  }
};
function createBaseMsgVote() {
  return {
    proposalId: BigInt(0),
    voter: "",
    option: 0,
    metadata: "",
    exec: 0
  };
}
const MsgVote = {
  typeUrl: "/cosmos.group.v1.MsgVote",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.voter !== "") {
      writer.uint32(18).string(message.voter);
    }
    if (message.option !== 0) {
      writer.uint32(24).int32(message.option);
    }
    if (message.metadata !== "") {
      writer.uint32(34).string(message.metadata);
    }
    if (message.exec !== 0) {
      writer.uint32(40).int32(message.exec);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgVote();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64();
          break;
        case 2:
          message.voter = reader.string();
          break;
        case 3:
          message.option = reader.int32();
          break;
        case 4:
          message.metadata = reader.string();
          break;
        case 5:
          message.exec = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgVote();
    message.proposalId = object.proposalId !== void 0 && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
    message.voter = object.voter ?? "";
    message.option = object.option ?? 0;
    message.metadata = object.metadata ?? "";
    message.exec = object.exec ?? 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgVote();
    if (object.proposal_id !== void 0 && object.proposal_id !== null) {
      message.proposalId = BigInt(object.proposal_id);
    }
    if (object.voter !== void 0 && object.voter !== null) {
      message.voter = object.voter;
    }
    if (object.option !== void 0 && object.option !== null) {
      message.option = object.option;
    }
    if (object.metadata !== void 0 && object.metadata !== null) {
      message.metadata = object.metadata;
    }
    if (object.exec !== void 0 && object.exec !== null) {
      message.exec = object.exec;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.proposal_id = message.proposalId !== BigInt(0) ? message.proposalId.toString() : void 0;
    obj.voter = message.voter === "" ? void 0 : message.voter;
    obj.option = message.option === 0 ? void 0 : message.option;
    obj.metadata = message.metadata === "" ? void 0 : message.metadata;
    obj.exec = message.exec === 0 ? void 0 : message.exec;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgVote.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/group/MsgVote",
      value: MsgVote.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgVote.decode(message.value);
  },
  toProto(message) {
    return MsgVote.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.group.v1.MsgVote",
      value: MsgVote.encode(message).finish()
    };
  }
};
function createBaseMsgVoteResponse() {
  return {};
}
const MsgVoteResponse = {
  typeUrl: "/cosmos.group.v1.MsgVoteResponse",
  encode(_, writer = import_binary.BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgVoteResponse();
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
    const message = createBaseMsgVoteResponse();
    return message;
  },
  fromAmino(_) {
    const message = createBaseMsgVoteResponse();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return MsgVoteResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgVoteResponse",
      value: MsgVoteResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgVoteResponse.decode(message.value);
  },
  toProto(message) {
    return MsgVoteResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.group.v1.MsgVoteResponse",
      value: MsgVoteResponse.encode(message).finish()
    };
  }
};
function createBaseMsgExec() {
  return {
    proposalId: BigInt(0),
    executor: ""
  };
}
const MsgExec = {
  typeUrl: "/cosmos.group.v1.MsgExec",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.executor !== "") {
      writer.uint32(18).string(message.executor);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgExec();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64();
          break;
        case 2:
          message.executor = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgExec();
    message.proposalId = object.proposalId !== void 0 && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
    message.executor = object.executor ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgExec();
    if (object.proposal_id !== void 0 && object.proposal_id !== null) {
      message.proposalId = BigInt(object.proposal_id);
    }
    if (object.executor !== void 0 && object.executor !== null) {
      message.executor = object.executor;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.proposal_id = message.proposalId !== BigInt(0) ? message.proposalId.toString() : void 0;
    obj.executor = message.executor === "" ? void 0 : message.executor;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgExec.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/group/MsgExec",
      value: MsgExec.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgExec.decode(message.value);
  },
  toProto(message) {
    return MsgExec.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.group.v1.MsgExec",
      value: MsgExec.encode(message).finish()
    };
  }
};
function createBaseMsgExecResponse() {
  return {
    result: 0
  };
}
const MsgExecResponse = {
  typeUrl: "/cosmos.group.v1.MsgExecResponse",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.result !== 0) {
      writer.uint32(16).int32(message.result);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgExecResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.result = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgExecResponse();
    message.result = object.result ?? 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgExecResponse();
    if (object.result !== void 0 && object.result !== null) {
      message.result = object.result;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.result = message.result === 0 ? void 0 : message.result;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgExecResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgExecResponse",
      value: MsgExecResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgExecResponse.decode(message.value);
  },
  toProto(message) {
    return MsgExecResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.group.v1.MsgExecResponse",
      value: MsgExecResponse.encode(message).finish()
    };
  }
};
function createBaseMsgLeaveGroup() {
  return {
    address: "",
    groupId: BigInt(0)
  };
}
const MsgLeaveGroup = {
  typeUrl: "/cosmos.group.v1.MsgLeaveGroup",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.groupId !== BigInt(0)) {
      writer.uint32(16).uint64(message.groupId);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgLeaveGroup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
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
    const message = createBaseMsgLeaveGroup();
    message.address = object.address ?? "";
    message.groupId = object.groupId !== void 0 && object.groupId !== null ? BigInt(object.groupId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgLeaveGroup();
    if (object.address !== void 0 && object.address !== null) {
      message.address = object.address;
    }
    if (object.group_id !== void 0 && object.group_id !== null) {
      message.groupId = BigInt(object.group_id);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.address = message.address === "" ? void 0 : message.address;
    obj.group_id = message.groupId !== BigInt(0) ? message.groupId.toString() : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgLeaveGroup.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/group/MsgLeaveGroup",
      value: MsgLeaveGroup.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgLeaveGroup.decode(message.value);
  },
  toProto(message) {
    return MsgLeaveGroup.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.group.v1.MsgLeaveGroup",
      value: MsgLeaveGroup.encode(message).finish()
    };
  }
};
function createBaseMsgLeaveGroupResponse() {
  return {};
}
const MsgLeaveGroupResponse = {
  typeUrl: "/cosmos.group.v1.MsgLeaveGroupResponse",
  encode(_, writer = import_binary.BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgLeaveGroupResponse();
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
    const message = createBaseMsgLeaveGroupResponse();
    return message;
  },
  fromAmino(_) {
    const message = createBaseMsgLeaveGroupResponse();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return MsgLeaveGroupResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgLeaveGroupResponse",
      value: MsgLeaveGroupResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgLeaveGroupResponse.decode(message.value);
  },
  toProto(message) {
    return MsgLeaveGroupResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.group.v1.MsgLeaveGroupResponse",
      value: MsgLeaveGroupResponse.encode(message).finish()
    };
  }
};
const Cosmos_groupv1DecisionPolicy_InterfaceDecoder = (input) => {
  const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
  const data = import_any.Any.decode(reader, reader.uint32());
  switch (data.typeUrl) {
    case "/cosmos.group.v1.ThresholdDecisionPolicy":
      return import_types.ThresholdDecisionPolicy.decode(data.value);
    case "/cosmos.group.v1.PercentageDecisionPolicy":
      return import_types.PercentageDecisionPolicy.decode(data.value);
    default:
      return data;
  }
};
const Cosmos_groupv1DecisionPolicy_FromAmino = (content) => {
  switch (content.type) {
    case "cosmos-sdk/ThresholdDecisionPolicy":
      return import_any.Any.fromPartial({
        typeUrl: "/cosmos.group.v1.ThresholdDecisionPolicy",
        value: import_types.ThresholdDecisionPolicy.encode(import_types.ThresholdDecisionPolicy.fromPartial(import_types.ThresholdDecisionPolicy.fromAmino(content.value))).finish()
      });
    case "cosmos-sdk/PercentageDecisionPolicy":
      return import_any.Any.fromPartial({
        typeUrl: "/cosmos.group.v1.PercentageDecisionPolicy",
        value: import_types.PercentageDecisionPolicy.encode(import_types.PercentageDecisionPolicy.fromPartial(import_types.PercentageDecisionPolicy.fromAmino(content.value))).finish()
      });
    default:
      return import_any.Any.fromAmino(content);
  }
};
const Cosmos_groupv1DecisionPolicy_ToAmino = (content) => {
  switch (content.typeUrl) {
    case "/cosmos.group.v1.ThresholdDecisionPolicy":
      return {
        type: "cosmos-sdk/ThresholdDecisionPolicy",
        value: import_types.ThresholdDecisionPolicy.toAmino(import_types.ThresholdDecisionPolicy.decode(content.value, void 0))
      };
    case "/cosmos.group.v1.PercentageDecisionPolicy":
      return {
        type: "cosmos-sdk/PercentageDecisionPolicy",
        value: import_types.PercentageDecisionPolicy.toAmino(import_types.PercentageDecisionPolicy.decode(content.value, void 0))
      };
    default:
      return import_any.Any.toAmino(content);
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Cosmos_groupv1DecisionPolicy_FromAmino,
  Cosmos_groupv1DecisionPolicy_InterfaceDecoder,
  Cosmos_groupv1DecisionPolicy_ToAmino,
  Exec,
  ExecAmino,
  ExecSDKType,
  MsgCreateGroup,
  MsgCreateGroupPolicy,
  MsgCreateGroupPolicyResponse,
  MsgCreateGroupResponse,
  MsgCreateGroupWithPolicy,
  MsgCreateGroupWithPolicyResponse,
  MsgExec,
  MsgExecResponse,
  MsgLeaveGroup,
  MsgLeaveGroupResponse,
  MsgSubmitProposal,
  MsgSubmitProposalResponse,
  MsgUpdateGroupAdmin,
  MsgUpdateGroupAdminResponse,
  MsgUpdateGroupMembers,
  MsgUpdateGroupMembersResponse,
  MsgUpdateGroupMetadata,
  MsgUpdateGroupMetadataResponse,
  MsgUpdateGroupPolicyAdmin,
  MsgUpdateGroupPolicyAdminResponse,
  MsgUpdateGroupPolicyDecisionPolicy,
  MsgUpdateGroupPolicyDecisionPolicyResponse,
  MsgUpdateGroupPolicyMetadata,
  MsgUpdateGroupPolicyMetadataResponse,
  MsgVote,
  MsgVoteResponse,
  MsgWithdrawProposal,
  MsgWithdrawProposalResponse,
  execFromJSON,
  execToJSON
});
