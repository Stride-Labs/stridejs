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
  Authz_Authorization_FromAmino: () => Authz_Authorization_FromAmino,
  Authz_Authorization_InterfaceDecoder: () => Authz_Authorization_InterfaceDecoder,
  Authz_Authorization_ToAmino: () => Authz_Authorization_ToAmino,
  MsgExec: () => MsgExec,
  MsgExecResponse: () => MsgExecResponse,
  MsgGrant: () => MsgGrant,
  MsgGrantResponse: () => MsgGrantResponse,
  MsgRevoke: () => MsgRevoke,
  MsgRevokeResponse: () => MsgRevokeResponse,
  Sdk_Msg_FromAmino: () => Sdk_Msg_FromAmino,
  Sdk_Msg_InterfaceDecoder: () => Sdk_Msg_InterfaceDecoder,
  Sdk_Msg_ToAmino: () => Sdk_Msg_ToAmino
});
module.exports = __toCommonJS(tx_exports);
var import_authz = require("./authz");
var import_any = require("../../../google/protobuf/any");
var import_binary = require("../../../binary");
var import_helpers = require("../../../helpers");
function createBaseMsgGrant() {
  return {
    granter: "",
    grantee: "",
    grant: import_authz.Grant.fromPartial({})
  };
}
const MsgGrant = {
  typeUrl: "/cosmos.authz.v1beta1.MsgGrant",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.granter !== "") {
      writer.uint32(10).string(message.granter);
    }
    if (message.grantee !== "") {
      writer.uint32(18).string(message.grantee);
    }
    if (message.grant !== void 0) {
      import_authz.Grant.encode(message.grant, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgGrant();
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
          message.grant = import_authz.Grant.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgGrant();
    message.granter = object.granter ?? "";
    message.grantee = object.grantee ?? "";
    message.grant = object.grant !== void 0 && object.grant !== null ? import_authz.Grant.fromPartial(object.grant) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgGrant();
    if (object.granter !== void 0 && object.granter !== null) {
      message.granter = object.granter;
    }
    if (object.grantee !== void 0 && object.grantee !== null) {
      message.grantee = object.grantee;
    }
    if (object.grant !== void 0 && object.grant !== null) {
      message.grant = import_authz.Grant.fromAmino(object.grant);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.granter = message.granter === "" ? void 0 : message.granter;
    obj.grantee = message.grantee === "" ? void 0 : message.grantee;
    obj.grant = message.grant ? import_authz.Grant.toAmino(message.grant) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgGrant.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgGrant",
      value: MsgGrant.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgGrant.decode(message.value);
  },
  toProto(message) {
    return MsgGrant.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.authz.v1beta1.MsgGrant",
      value: MsgGrant.encode(message).finish()
    };
  }
};
function createBaseMsgExecResponse() {
  return {
    results: []
  };
}
const MsgExecResponse = {
  typeUrl: "/cosmos.authz.v1beta1.MsgExecResponse",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    for (const v of message.results) {
      writer.uint32(10).bytes(v);
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
        case 1:
          message.results.push(reader.bytes());
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
    message.results = object.results?.map((e) => e) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgExecResponse();
    message.results = object.results?.map((e) => (0, import_helpers.bytesFromBase64)(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.results) {
      obj.results = message.results.map((e) => (0, import_helpers.base64FromBytes)(e));
    } else {
      obj.results = message.results;
    }
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
      typeUrl: "/cosmos.authz.v1beta1.MsgExecResponse",
      value: MsgExecResponse.encode(message).finish()
    };
  }
};
function createBaseMsgExec() {
  return {
    grantee: "",
    msgs: []
  };
}
const MsgExec = {
  typeUrl: "/cosmos.authz.v1beta1.MsgExec",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.grantee !== "") {
      writer.uint32(10).string(message.grantee);
    }
    for (const v of message.msgs) {
      import_any.Any.encode(v, writer.uint32(18).fork()).ldelim();
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
          message.grantee = reader.string();
          break;
        case 2:
          message.msgs.push(import_any.Any.decode(reader, reader.uint32()));
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
    message.grantee = object.grantee ?? "";
    message.msgs = object.msgs?.map((e) => import_any.Any.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgExec();
    if (object.grantee !== void 0 && object.grantee !== null) {
      message.grantee = object.grantee;
    }
    message.msgs = object.msgs?.map((e) => Sdk_MsgauthzAuthorization_FromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.grantee = message.grantee === "" ? void 0 : message.grantee;
    if (message.msgs) {
      obj.msgs = message.msgs.map((e) => e ? Sdk_MsgauthzAuthorization_ToAmino(e) : void 0);
    } else {
      obj.msgs = message.msgs;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return MsgExec.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgExec",
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
      typeUrl: "/cosmos.authz.v1beta1.MsgExec",
      value: MsgExec.encode(message).finish()
    };
  }
};
function createBaseMsgGrantResponse() {
  return {};
}
const MsgGrantResponse = {
  typeUrl: "/cosmos.authz.v1beta1.MsgGrantResponse",
  encode(_, writer = import_binary.BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgGrantResponse();
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
    const message = createBaseMsgGrantResponse();
    return message;
  },
  fromAmino(_) {
    const message = createBaseMsgGrantResponse();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return MsgGrantResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgGrantResponse",
      value: MsgGrantResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgGrantResponse.decode(message.value);
  },
  toProto(message) {
    return MsgGrantResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.authz.v1beta1.MsgGrantResponse",
      value: MsgGrantResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRevoke() {
  return {
    granter: "",
    grantee: "",
    msgTypeUrl: ""
  };
}
const MsgRevoke = {
  typeUrl: "/cosmos.authz.v1beta1.MsgRevoke",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.granter !== "") {
      writer.uint32(10).string(message.granter);
    }
    if (message.grantee !== "") {
      writer.uint32(18).string(message.grantee);
    }
    if (message.msgTypeUrl !== "") {
      writer.uint32(26).string(message.msgTypeUrl);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgRevoke();
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
          message.msgTypeUrl = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgRevoke();
    message.granter = object.granter ?? "";
    message.grantee = object.grantee ?? "";
    message.msgTypeUrl = object.msgTypeUrl ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgRevoke();
    if (object.granter !== void 0 && object.granter !== null) {
      message.granter = object.granter;
    }
    if (object.grantee !== void 0 && object.grantee !== null) {
      message.grantee = object.grantee;
    }
    if (object.msg_type_url !== void 0 && object.msg_type_url !== null) {
      message.msgTypeUrl = object.msg_type_url;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.granter = message.granter === "" ? void 0 : message.granter;
    obj.grantee = message.grantee === "" ? void 0 : message.grantee;
    obj.msg_type_url = message.msgTypeUrl === "" ? void 0 : message.msgTypeUrl;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgRevoke.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgRevoke",
      value: MsgRevoke.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgRevoke.decode(message.value);
  },
  toProto(message) {
    return MsgRevoke.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.authz.v1beta1.MsgRevoke",
      value: MsgRevoke.encode(message).finish()
    };
  }
};
function createBaseMsgRevokeResponse() {
  return {};
}
const MsgRevokeResponse = {
  typeUrl: "/cosmos.authz.v1beta1.MsgRevokeResponse",
  encode(_, writer = import_binary.BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgRevokeResponse();
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
    const message = createBaseMsgRevokeResponse();
    return message;
  },
  fromAmino(_) {
    const message = createBaseMsgRevokeResponse();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return MsgRevokeResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgRevokeResponse",
      value: MsgRevokeResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgRevokeResponse.decode(message.value);
  },
  toProto(message) {
    return MsgRevokeResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.authz.v1beta1.MsgRevokeResponse",
      value: MsgRevokeResponse.encode(message).finish()
    };
  }
};
const Sdk_Msg_InterfaceDecoder = (input) => {
  const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
  const data = import_any.Any.decode(reader, reader.uint32());
  switch (data.typeUrl) {
    default:
      return data;
  }
};
const Sdk_Msg_FromAmino = (content) => {
  return import_any.Any.fromAmino(content);
};
const Sdk_Msg_ToAmino = (content) => {
  return import_any.Any.toAmino(content);
};
const Authz_Authorization_InterfaceDecoder = (input) => {
  const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
  const data = import_any.Any.decode(reader, reader.uint32());
  switch (data.typeUrl) {
    default:
      return data;
  }
};
const Authz_Authorization_FromAmino = (content) => {
  return import_any.Any.fromAmino(content);
};
const Authz_Authorization_ToAmino = (content) => {
  return import_any.Any.toAmino(content);
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Authz_Authorization_FromAmino,
  Authz_Authorization_InterfaceDecoder,
  Authz_Authorization_ToAmino,
  MsgExec,
  MsgExecResponse,
  MsgGrant,
  MsgGrantResponse,
  MsgRevoke,
  MsgRevokeResponse,
  Sdk_Msg_FromAmino,
  Sdk_Msg_InterfaceDecoder,
  Sdk_Msg_ToAmino
});
