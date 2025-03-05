import { QueryRequest } from "./host";
import { BinaryReader, BinaryWriter } from "../../../../../binary";
import { bytesFromBase64, base64FromBytes } from "../../../../../helpers";
function createBaseMsgModuleQuerySafe() {
  return {
    signer: "",
    requests: []
  };
}
const MsgModuleQuerySafe = {
  typeUrl: "/ibc.applications.interchain_accounts.host.v1.MsgModuleQuerySafe",
  encode(message, writer = BinaryWriter.create()) {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }
    for (const v of message.requests) {
      QueryRequest.encode(v, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgModuleQuerySafe();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signer = reader.string();
          break;
        case 2:
          message.requests.push(QueryRequest.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgModuleQuerySafe();
    message.signer = object.signer ?? "";
    message.requests = object.requests?.map((e) => QueryRequest.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgModuleQuerySafe();
    if (object.signer !== void 0 && object.signer !== null) {
      message.signer = object.signer;
    }
    message.requests = object.requests?.map((e) => QueryRequest.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.signer = message.signer === "" ? void 0 : message.signer;
    if (message.requests) {
      obj.requests = message.requests.map((e) => e ? QueryRequest.toAmino(e) : void 0);
    } else {
      obj.requests = message.requests;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return MsgModuleQuerySafe.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgModuleQuerySafe",
      value: MsgModuleQuerySafe.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgModuleQuerySafe.decode(message.value);
  },
  toProto(message) {
    return MsgModuleQuerySafe.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.applications.interchain_accounts.host.v1.MsgModuleQuerySafe",
      value: MsgModuleQuerySafe.encode(message).finish()
    };
  }
};
function createBaseMsgModuleQuerySafeResponse() {
  return {
    height: BigInt(0),
    responses: []
  };
}
const MsgModuleQuerySafeResponse = {
  typeUrl: "/ibc.applications.interchain_accounts.host.v1.MsgModuleQuerySafeResponse",
  encode(message, writer = BinaryWriter.create()) {
    if (message.height !== BigInt(0)) {
      writer.uint32(8).uint64(message.height);
    }
    for (const v of message.responses) {
      writer.uint32(18).bytes(v);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgModuleQuerySafeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = reader.uint64();
          break;
        case 2:
          message.responses.push(reader.bytes());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgModuleQuerySafeResponse();
    message.height = object.height !== void 0 && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    message.responses = object.responses?.map((e) => e) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgModuleQuerySafeResponse();
    if (object.height !== void 0 && object.height !== null) {
      message.height = BigInt(object.height);
    }
    message.responses = object.responses?.map((e) => bytesFromBase64(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.height = message.height !== BigInt(0) ? message.height?.toString() : void 0;
    if (message.responses) {
      obj.responses = message.responses.map((e) => base64FromBytes(e));
    } else {
      obj.responses = message.responses;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return MsgModuleQuerySafeResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgModuleQuerySafeResponse",
      value: MsgModuleQuerySafeResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgModuleQuerySafeResponse.decode(message.value);
  },
  toProto(message) {
    return MsgModuleQuerySafeResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.applications.interchain_accounts.host.v1.MsgModuleQuerySafeResponse",
      value: MsgModuleQuerySafeResponse.encode(message).finish()
    };
  }
};
export {
  MsgModuleQuerySafe,
  MsgModuleQuerySafeResponse
};
