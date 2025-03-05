import { BinaryReader, BinaryWriter } from "../../../../../binary";
import { bytesFromBase64, base64FromBytes } from "../../../../../helpers";
function createBaseParams() {
  return {
    hostEnabled: false,
    allowMessages: []
  };
}
const Params = {
  typeUrl: "/ibc.applications.interchain_accounts.host.v1.Params",
  encode(message, writer = BinaryWriter.create()) {
    if (message.hostEnabled === true) {
      writer.uint32(8).bool(message.hostEnabled);
    }
    for (const v of message.allowMessages) {
      writer.uint32(18).string(v);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hostEnabled = reader.bool();
          break;
        case 2:
          message.allowMessages.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseParams();
    message.hostEnabled = object.hostEnabled ?? false;
    message.allowMessages = object.allowMessages?.map((e) => e) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseParams();
    if (object.host_enabled !== void 0 && object.host_enabled !== null) {
      message.hostEnabled = object.host_enabled;
    }
    message.allowMessages = object.allow_messages?.map((e) => e) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.host_enabled = message.hostEnabled === false ? void 0 : message.hostEnabled;
    if (message.allowMessages) {
      obj.allow_messages = message.allowMessages.map((e) => e);
    } else {
      obj.allow_messages = message.allowMessages;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return Params.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/Params",
      value: Params.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return Params.decode(message.value);
  },
  toProto(message) {
    return Params.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.applications.interchain_accounts.host.v1.Params",
      value: Params.encode(message).finish()
    };
  }
};
function createBaseQueryRequest() {
  return {
    path: "",
    data: new Uint8Array()
  };
}
const QueryRequest = {
  typeUrl: "/ibc.applications.interchain_accounts.host.v1.QueryRequest",
  encode(message, writer = BinaryWriter.create()) {
    if (message.path !== "") {
      writer.uint32(10).string(message.path);
    }
    if (message.data.length !== 0) {
      writer.uint32(18).bytes(message.data);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.path = reader.string();
          break;
        case 2:
          message.data = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryRequest();
    message.path = object.path ?? "";
    message.data = object.data ?? new Uint8Array();
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryRequest();
    if (object.path !== void 0 && object.path !== null) {
      message.path = object.path;
    }
    if (object.data !== void 0 && object.data !== null) {
      message.data = bytesFromBase64(object.data);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.path = message.path === "" ? void 0 : message.path;
    obj.data = message.data ? base64FromBytes(message.data) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryRequest.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryRequest",
      value: QueryRequest.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryRequest.decode(message.value);
  },
  toProto(message) {
    return QueryRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.applications.interchain_accounts.host.v1.QueryRequest",
      value: QueryRequest.encode(message).finish()
    };
  }
};
export {
  Params,
  QueryRequest
};
