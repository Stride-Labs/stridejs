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
  QueryAppliedPlanRequest: () => QueryAppliedPlanRequest,
  QueryAppliedPlanResponse: () => QueryAppliedPlanResponse,
  QueryAuthorityRequest: () => QueryAuthorityRequest,
  QueryAuthorityResponse: () => QueryAuthorityResponse,
  QueryCurrentPlanRequest: () => QueryCurrentPlanRequest,
  QueryCurrentPlanResponse: () => QueryCurrentPlanResponse,
  QueryModuleVersionsRequest: () => QueryModuleVersionsRequest,
  QueryModuleVersionsResponse: () => QueryModuleVersionsResponse,
  QueryUpgradedConsensusStateRequest: () => QueryUpgradedConsensusStateRequest,
  QueryUpgradedConsensusStateResponse: () => QueryUpgradedConsensusStateResponse
});
module.exports = __toCommonJS(query_exports);
var import_upgrade = require("./upgrade");
var import_binary = require("../../../binary");
var import_helpers = require("../../../helpers");
function createBaseQueryCurrentPlanRequest() {
  return {};
}
const QueryCurrentPlanRequest = {
  typeUrl: "/cosmos.upgrade.v1beta1.QueryCurrentPlanRequest",
  encode(_, writer = import_binary.BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryCurrentPlanRequest();
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
    const message = createBaseQueryCurrentPlanRequest();
    return message;
  },
  fromAmino(_) {
    const message = createBaseQueryCurrentPlanRequest();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return QueryCurrentPlanRequest.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryCurrentPlanRequest",
      value: QueryCurrentPlanRequest.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryCurrentPlanRequest.decode(message.value);
  },
  toProto(message) {
    return QueryCurrentPlanRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.upgrade.v1beta1.QueryCurrentPlanRequest",
      value: QueryCurrentPlanRequest.encode(message).finish()
    };
  }
};
function createBaseQueryCurrentPlanResponse() {
  return {
    plan: void 0
  };
}
const QueryCurrentPlanResponse = {
  typeUrl: "/cosmos.upgrade.v1beta1.QueryCurrentPlanResponse",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.plan !== void 0) {
      import_upgrade.Plan.encode(message.plan, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryCurrentPlanResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.plan = import_upgrade.Plan.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryCurrentPlanResponse();
    message.plan = object.plan !== void 0 && object.plan !== null ? import_upgrade.Plan.fromPartial(object.plan) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryCurrentPlanResponse();
    if (object.plan !== void 0 && object.plan !== null) {
      message.plan = import_upgrade.Plan.fromAmino(object.plan);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.plan = message.plan ? import_upgrade.Plan.toAmino(message.plan) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryCurrentPlanResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryCurrentPlanResponse",
      value: QueryCurrentPlanResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryCurrentPlanResponse.decode(message.value);
  },
  toProto(message) {
    return QueryCurrentPlanResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.upgrade.v1beta1.QueryCurrentPlanResponse",
      value: QueryCurrentPlanResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAppliedPlanRequest() {
  return {
    name: ""
  };
}
const QueryAppliedPlanRequest = {
  typeUrl: "/cosmos.upgrade.v1beta1.QueryAppliedPlanRequest",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryAppliedPlanRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryAppliedPlanRequest();
    message.name = object.name ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryAppliedPlanRequest();
    if (object.name !== void 0 && object.name !== null) {
      message.name = object.name;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.name = message.name === "" ? void 0 : message.name;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryAppliedPlanRequest.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryAppliedPlanRequest",
      value: QueryAppliedPlanRequest.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryAppliedPlanRequest.decode(message.value);
  },
  toProto(message) {
    return QueryAppliedPlanRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.upgrade.v1beta1.QueryAppliedPlanRequest",
      value: QueryAppliedPlanRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAppliedPlanResponse() {
  return {
    height: BigInt(0)
  };
}
const QueryAppliedPlanResponse = {
  typeUrl: "/cosmos.upgrade.v1beta1.QueryAppliedPlanResponse",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.height !== BigInt(0)) {
      writer.uint32(8).int64(message.height);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryAppliedPlanResponse();
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
    const message = createBaseQueryAppliedPlanResponse();
    message.height = object.height !== void 0 && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryAppliedPlanResponse();
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
    return QueryAppliedPlanResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryAppliedPlanResponse",
      value: QueryAppliedPlanResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryAppliedPlanResponse.decode(message.value);
  },
  toProto(message) {
    return QueryAppliedPlanResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.upgrade.v1beta1.QueryAppliedPlanResponse",
      value: QueryAppliedPlanResponse.encode(message).finish()
    };
  }
};
function createBaseQueryUpgradedConsensusStateRequest() {
  return {
    lastHeight: BigInt(0)
  };
}
const QueryUpgradedConsensusStateRequest = {
  typeUrl: "/cosmos.upgrade.v1beta1.QueryUpgradedConsensusStateRequest",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.lastHeight !== BigInt(0)) {
      writer.uint32(8).int64(message.lastHeight);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryUpgradedConsensusStateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lastHeight = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryUpgradedConsensusStateRequest();
    message.lastHeight = object.lastHeight !== void 0 && object.lastHeight !== null ? BigInt(object.lastHeight.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryUpgradedConsensusStateRequest();
    if (object.last_height !== void 0 && object.last_height !== null) {
      message.lastHeight = BigInt(object.last_height);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.last_height = message.lastHeight !== BigInt(0) ? message.lastHeight?.toString() : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryUpgradedConsensusStateRequest.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryUpgradedConsensusStateRequest",
      value: QueryUpgradedConsensusStateRequest.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryUpgradedConsensusStateRequest.decode(message.value);
  },
  toProto(message) {
    return QueryUpgradedConsensusStateRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.upgrade.v1beta1.QueryUpgradedConsensusStateRequest",
      value: QueryUpgradedConsensusStateRequest.encode(message).finish()
    };
  }
};
function createBaseQueryUpgradedConsensusStateResponse() {
  return {
    upgradedConsensusState: new Uint8Array()
  };
}
const QueryUpgradedConsensusStateResponse = {
  typeUrl: "/cosmos.upgrade.v1beta1.QueryUpgradedConsensusStateResponse",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.upgradedConsensusState.length !== 0) {
      writer.uint32(18).bytes(message.upgradedConsensusState);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryUpgradedConsensusStateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.upgradedConsensusState = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryUpgradedConsensusStateResponse();
    message.upgradedConsensusState = object.upgradedConsensusState ?? new Uint8Array();
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryUpgradedConsensusStateResponse();
    if (object.upgraded_consensus_state !== void 0 && object.upgraded_consensus_state !== null) {
      message.upgradedConsensusState = (0, import_helpers.bytesFromBase64)(object.upgraded_consensus_state);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.upgraded_consensus_state = message.upgradedConsensusState ? (0, import_helpers.base64FromBytes)(message.upgradedConsensusState) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryUpgradedConsensusStateResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryUpgradedConsensusStateResponse",
      value: QueryUpgradedConsensusStateResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryUpgradedConsensusStateResponse.decode(message.value);
  },
  toProto(message) {
    return QueryUpgradedConsensusStateResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.upgrade.v1beta1.QueryUpgradedConsensusStateResponse",
      value: QueryUpgradedConsensusStateResponse.encode(message).finish()
    };
  }
};
function createBaseQueryModuleVersionsRequest() {
  return {
    moduleName: ""
  };
}
const QueryModuleVersionsRequest = {
  typeUrl: "/cosmos.upgrade.v1beta1.QueryModuleVersionsRequest",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.moduleName !== "") {
      writer.uint32(10).string(message.moduleName);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryModuleVersionsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.moduleName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryModuleVersionsRequest();
    message.moduleName = object.moduleName ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryModuleVersionsRequest();
    if (object.module_name !== void 0 && object.module_name !== null) {
      message.moduleName = object.module_name;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.module_name = message.moduleName === "" ? void 0 : message.moduleName;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryModuleVersionsRequest.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryModuleVersionsRequest",
      value: QueryModuleVersionsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryModuleVersionsRequest.decode(message.value);
  },
  toProto(message) {
    return QueryModuleVersionsRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.upgrade.v1beta1.QueryModuleVersionsRequest",
      value: QueryModuleVersionsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryModuleVersionsResponse() {
  return {
    moduleVersions: []
  };
}
const QueryModuleVersionsResponse = {
  typeUrl: "/cosmos.upgrade.v1beta1.QueryModuleVersionsResponse",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    for (const v of message.moduleVersions) {
      import_upgrade.ModuleVersion.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryModuleVersionsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.moduleVersions.push(import_upgrade.ModuleVersion.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryModuleVersionsResponse();
    message.moduleVersions = object.moduleVersions?.map((e) => import_upgrade.ModuleVersion.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryModuleVersionsResponse();
    message.moduleVersions = object.module_versions?.map((e) => import_upgrade.ModuleVersion.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.moduleVersions) {
      obj.module_versions = message.moduleVersions.map((e) => e ? import_upgrade.ModuleVersion.toAmino(e) : void 0);
    } else {
      obj.module_versions = message.moduleVersions;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return QueryModuleVersionsResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryModuleVersionsResponse",
      value: QueryModuleVersionsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryModuleVersionsResponse.decode(message.value);
  },
  toProto(message) {
    return QueryModuleVersionsResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.upgrade.v1beta1.QueryModuleVersionsResponse",
      value: QueryModuleVersionsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAuthorityRequest() {
  return {};
}
const QueryAuthorityRequest = {
  typeUrl: "/cosmos.upgrade.v1beta1.QueryAuthorityRequest",
  encode(_, writer = import_binary.BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryAuthorityRequest();
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
    const message = createBaseQueryAuthorityRequest();
    return message;
  },
  fromAmino(_) {
    const message = createBaseQueryAuthorityRequest();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return QueryAuthorityRequest.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryAuthorityRequest",
      value: QueryAuthorityRequest.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryAuthorityRequest.decode(message.value);
  },
  toProto(message) {
    return QueryAuthorityRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.upgrade.v1beta1.QueryAuthorityRequest",
      value: QueryAuthorityRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAuthorityResponse() {
  return {
    address: ""
  };
}
const QueryAuthorityResponse = {
  typeUrl: "/cosmos.upgrade.v1beta1.QueryAuthorityResponse",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryAuthorityResponse();
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
    const message = createBaseQueryAuthorityResponse();
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryAuthorityResponse();
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
    return QueryAuthorityResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryAuthorityResponse",
      value: QueryAuthorityResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryAuthorityResponse.decode(message.value);
  },
  toProto(message) {
    return QueryAuthorityResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.upgrade.v1beta1.QueryAuthorityResponse",
      value: QueryAuthorityResponse.encode(message).finish()
    };
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  QueryAppliedPlanRequest,
  QueryAppliedPlanResponse,
  QueryAuthorityRequest,
  QueryAuthorityResponse,
  QueryCurrentPlanRequest,
  QueryCurrentPlanResponse,
  QueryModuleVersionsRequest,
  QueryModuleVersionsResponse,
  QueryUpgradedConsensusStateRequest,
  QueryUpgradedConsensusStateResponse
});
