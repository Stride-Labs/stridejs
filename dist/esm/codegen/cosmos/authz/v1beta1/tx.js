import { Grant } from "./authz";
import { Any } from "../../../google/protobuf/any";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { bytesFromBase64, base64FromBytes } from "../../../helpers";
function createBaseMsgGrant() {
  return {
    granter: "",
    grantee: "",
    grant: Grant.fromPartial({})
  };
}
const MsgGrant = {
  typeUrl: "/cosmos.authz.v1beta1.MsgGrant",
  encode(message, writer = BinaryWriter.create()) {
    if (message.granter !== "") {
      writer.uint32(10).string(message.granter);
    }
    if (message.grantee !== "") {
      writer.uint32(18).string(message.grantee);
    }
    if (message.grant !== void 0) {
      Grant.encode(message.grant, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
          message.grant = Grant.decode(reader, reader.uint32());
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
    message.grant = object.grant !== void 0 && object.grant !== null ? Grant.fromPartial(object.grant) : void 0;
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
      message.grant = Grant.fromAmino(object.grant);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.granter = message.granter === "" ? void 0 : message.granter;
    obj.grantee = message.grantee === "" ? void 0 : message.grantee;
    obj.grant = message.grant ? Grant.toAmino(message.grant) : Grant.toAmino(Grant.fromPartial({}));
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
function createBaseMsgGrantResponse() {
  return {};
}
const MsgGrantResponse = {
  typeUrl: "/cosmos.authz.v1beta1.MsgGrantResponse",
  encode(_, writer = BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
function createBaseMsgExec() {
  return {
    grantee: "",
    msgs: []
  };
}
const MsgExec = {
  typeUrl: "/cosmos.authz.v1beta1.MsgExec",
  encode(message, writer = BinaryWriter.create()) {
    if (message.grantee !== "") {
      writer.uint32(10).string(message.grantee);
    }
    for (const v of message.msgs) {
      Any.encode(v, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgExec();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.grantee = reader.string();
          break;
        case 2:
          message.msgs.push(Any.decode(reader, reader.uint32()));
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
    message.msgs = object.msgs?.map((e) => Any.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgExec();
    if (object.grantee !== void 0 && object.grantee !== null) {
      message.grantee = object.grantee;
    }
    message.msgs = object.msgs?.map((e) => Cosmos_basev1beta1Msg_FromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.grantee = message.grantee === "" ? void 0 : message.grantee;
    if (message.msgs) {
      obj.msgs = message.msgs.map((e) => e ? Cosmos_basev1beta1Msg_ToAmino(e) : void 0);
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
function createBaseMsgExecResponse() {
  return {
    results: []
  };
}
const MsgExecResponse = {
  typeUrl: "/cosmos.authz.v1beta1.MsgExecResponse",
  encode(message, writer = BinaryWriter.create()) {
    for (const v of message.results) {
      writer.uint32(10).bytes(v);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
    message.results = object.results?.map((e) => bytesFromBase64(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.results) {
      obj.results = message.results.map((e) => base64FromBytes(e));
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
function createBaseMsgRevoke() {
  return {
    granter: "",
    grantee: "",
    msgTypeUrl: ""
  };
}
const MsgRevoke = {
  typeUrl: "/cosmos.authz.v1beta1.MsgRevoke",
  encode(message, writer = BinaryWriter.create()) {
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
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  encode(_, writer = BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
const Cosmos_basev1beta1Msg_InterfaceDecoder = (input) => {
  const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
  const data = Any.decode(reader, reader.uint32());
  switch (data.typeUrl) {
    default:
      return data;
  }
};
const Cosmos_basev1beta1Msg_FromAmino = (content) => {
  return Any.fromAmino(content);
};
const Cosmos_basev1beta1Msg_ToAmino = (content) => {
  return Any.toAmino(content);
};
export {
  Cosmos_basev1beta1Msg_FromAmino,
  Cosmos_basev1beta1Msg_InterfaceDecoder,
  Cosmos_basev1beta1Msg_ToAmino,
  MsgExec,
  MsgExecResponse,
  MsgGrant,
  MsgGrantResponse,
  MsgRevoke,
  MsgRevokeResponse
};
