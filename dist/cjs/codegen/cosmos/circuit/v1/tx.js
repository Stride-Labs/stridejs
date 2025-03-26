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
  MsgAuthorizeCircuitBreaker: () => MsgAuthorizeCircuitBreaker,
  MsgAuthorizeCircuitBreakerResponse: () => MsgAuthorizeCircuitBreakerResponse,
  MsgResetCircuitBreaker: () => MsgResetCircuitBreaker,
  MsgResetCircuitBreakerResponse: () => MsgResetCircuitBreakerResponse,
  MsgTripCircuitBreaker: () => MsgTripCircuitBreaker,
  MsgTripCircuitBreakerResponse: () => MsgTripCircuitBreakerResponse
});
module.exports = __toCommonJS(tx_exports);
var import_types = require("./types");
var import_binary = require("../../../binary");
function createBaseMsgAuthorizeCircuitBreaker() {
  return {
    granter: "",
    grantee: "",
    permissions: void 0
  };
}
const MsgAuthorizeCircuitBreaker = {
  typeUrl: "/cosmos.circuit.v1.MsgAuthorizeCircuitBreaker",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.granter !== "") {
      writer.uint32(10).string(message.granter);
    }
    if (message.grantee !== "") {
      writer.uint32(18).string(message.grantee);
    }
    if (message.permissions !== void 0) {
      import_types.Permissions.encode(message.permissions, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgAuthorizeCircuitBreaker();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.granter = reader.string();
          break;
        case 2:
          message.grantee = reader.string();
          break;
        case 3:
          message.permissions = import_types.Permissions.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgAuthorizeCircuitBreaker();
    message.granter = object.granter ?? "";
    message.grantee = object.grantee ?? "";
    message.permissions = object.permissions !== void 0 && object.permissions !== null ? import_types.Permissions.fromPartial(object.permissions) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgAuthorizeCircuitBreaker();
    if (object.granter !== void 0 && object.granter !== null) {
      message.granter = object.granter;
    }
    if (object.grantee !== void 0 && object.grantee !== null) {
      message.grantee = object.grantee;
    }
    if (object.permissions !== void 0 && object.permissions !== null) {
      message.permissions = import_types.Permissions.fromAmino(object.permissions);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.granter = message.granter === "" ? void 0 : message.granter;
    obj.grantee = message.grantee === "" ? void 0 : message.grantee;
    obj.permissions = message.permissions ? import_types.Permissions.toAmino(message.permissions) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgAuthorizeCircuitBreaker.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgAuthorizeCircuitBreaker",
      value: MsgAuthorizeCircuitBreaker.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgAuthorizeCircuitBreaker.decode(message.value);
  },
  toProto(message) {
    return MsgAuthorizeCircuitBreaker.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.circuit.v1.MsgAuthorizeCircuitBreaker",
      value: MsgAuthorizeCircuitBreaker.encode(message).finish()
    };
  }
};
function createBaseMsgAuthorizeCircuitBreakerResponse() {
  return {
    success: false
  };
}
const MsgAuthorizeCircuitBreakerResponse = {
  typeUrl: "/cosmos.circuit.v1.MsgAuthorizeCircuitBreakerResponse",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.success === true) {
      writer.uint32(8).bool(message.success);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgAuthorizeCircuitBreakerResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.success = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgAuthorizeCircuitBreakerResponse();
    message.success = object.success ?? false;
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgAuthorizeCircuitBreakerResponse();
    if (object.success !== void 0 && object.success !== null) {
      message.success = object.success;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.success = message.success === false ? void 0 : message.success;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgAuthorizeCircuitBreakerResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgAuthorizeCircuitBreakerResponse",
      value: MsgAuthorizeCircuitBreakerResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgAuthorizeCircuitBreakerResponse.decode(message.value);
  },
  toProto(message) {
    return MsgAuthorizeCircuitBreakerResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.circuit.v1.MsgAuthorizeCircuitBreakerResponse",
      value: MsgAuthorizeCircuitBreakerResponse.encode(message).finish()
    };
  }
};
function createBaseMsgTripCircuitBreaker() {
  return {
    authority: "",
    msgTypeUrls: []
  };
}
const MsgTripCircuitBreaker = {
  typeUrl: "/cosmos.circuit.v1.MsgTripCircuitBreaker",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    for (const v of message.msgTypeUrls) {
      writer.uint32(18).string(v);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgTripCircuitBreaker();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.msgTypeUrls.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgTripCircuitBreaker();
    message.authority = object.authority ?? "";
    message.msgTypeUrls = object.msgTypeUrls?.map((e) => e) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgTripCircuitBreaker();
    if (object.authority !== void 0 && object.authority !== null) {
      message.authority = object.authority;
    }
    message.msgTypeUrls = object.msg_type_urls?.map((e) => e) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.authority = message.authority === "" ? void 0 : message.authority;
    if (message.msgTypeUrls) {
      obj.msg_type_urls = message.msgTypeUrls.map((e) => e);
    } else {
      obj.msg_type_urls = message.msgTypeUrls;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return MsgTripCircuitBreaker.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgTripCircuitBreaker",
      value: MsgTripCircuitBreaker.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgTripCircuitBreaker.decode(message.value);
  },
  toProto(message) {
    return MsgTripCircuitBreaker.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.circuit.v1.MsgTripCircuitBreaker",
      value: MsgTripCircuitBreaker.encode(message).finish()
    };
  }
};
function createBaseMsgTripCircuitBreakerResponse() {
  return {
    success: false
  };
}
const MsgTripCircuitBreakerResponse = {
  typeUrl: "/cosmos.circuit.v1.MsgTripCircuitBreakerResponse",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.success === true) {
      writer.uint32(8).bool(message.success);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgTripCircuitBreakerResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.success = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgTripCircuitBreakerResponse();
    message.success = object.success ?? false;
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgTripCircuitBreakerResponse();
    if (object.success !== void 0 && object.success !== null) {
      message.success = object.success;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.success = message.success === false ? void 0 : message.success;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgTripCircuitBreakerResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgTripCircuitBreakerResponse",
      value: MsgTripCircuitBreakerResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgTripCircuitBreakerResponse.decode(message.value);
  },
  toProto(message) {
    return MsgTripCircuitBreakerResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.circuit.v1.MsgTripCircuitBreakerResponse",
      value: MsgTripCircuitBreakerResponse.encode(message).finish()
    };
  }
};
function createBaseMsgResetCircuitBreaker() {
  return {
    authority: "",
    msgTypeUrls: []
  };
}
const MsgResetCircuitBreaker = {
  typeUrl: "/cosmos.circuit.v1.MsgResetCircuitBreaker",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    for (const v of message.msgTypeUrls) {
      writer.uint32(26).string(v);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgResetCircuitBreaker();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 3:
          message.msgTypeUrls.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgResetCircuitBreaker();
    message.authority = object.authority ?? "";
    message.msgTypeUrls = object.msgTypeUrls?.map((e) => e) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgResetCircuitBreaker();
    if (object.authority !== void 0 && object.authority !== null) {
      message.authority = object.authority;
    }
    message.msgTypeUrls = object.msg_type_urls?.map((e) => e) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.authority = message.authority === "" ? void 0 : message.authority;
    if (message.msgTypeUrls) {
      obj.msg_type_urls = message.msgTypeUrls.map((e) => e);
    } else {
      obj.msg_type_urls = message.msgTypeUrls;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return MsgResetCircuitBreaker.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgResetCircuitBreaker",
      value: MsgResetCircuitBreaker.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgResetCircuitBreaker.decode(message.value);
  },
  toProto(message) {
    return MsgResetCircuitBreaker.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.circuit.v1.MsgResetCircuitBreaker",
      value: MsgResetCircuitBreaker.encode(message).finish()
    };
  }
};
function createBaseMsgResetCircuitBreakerResponse() {
  return {
    success: false
  };
}
const MsgResetCircuitBreakerResponse = {
  typeUrl: "/cosmos.circuit.v1.MsgResetCircuitBreakerResponse",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.success === true) {
      writer.uint32(8).bool(message.success);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgResetCircuitBreakerResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.success = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgResetCircuitBreakerResponse();
    message.success = object.success ?? false;
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgResetCircuitBreakerResponse();
    if (object.success !== void 0 && object.success !== null) {
      message.success = object.success;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.success = message.success === false ? void 0 : message.success;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgResetCircuitBreakerResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgResetCircuitBreakerResponse",
      value: MsgResetCircuitBreakerResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgResetCircuitBreakerResponse.decode(message.value);
  },
  toProto(message) {
    return MsgResetCircuitBreakerResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.circuit.v1.MsgResetCircuitBreakerResponse",
      value: MsgResetCircuitBreakerResponse.encode(message).finish()
    };
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  MsgAuthorizeCircuitBreaker,
  MsgAuthorizeCircuitBreakerResponse,
  MsgResetCircuitBreaker,
  MsgResetCircuitBreakerResponse,
  MsgTripCircuitBreaker,
  MsgTripCircuitBreakerResponse
});
