import { Any } from "../../../../google/protobuf/any";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { bytesFromBase64, base64FromBytes } from "../../../../helpers";
var Type = /* @__PURE__ */ ((Type2) => {
  Type2[Type2["TYPE_UNSPECIFIED"] = 0] = "TYPE_UNSPECIFIED";
  Type2[Type2["TYPE_EXECUTE_TX"] = 1] = "TYPE_EXECUTE_TX";
  Type2[Type2["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return Type2;
})(Type || {});
const TypeSDKType = Type;
const TypeAmino = Type;
function typeFromJSON(object) {
  switch (object) {
    case 0:
    case "TYPE_UNSPECIFIED":
      return 0 /* TYPE_UNSPECIFIED */;
    case 1:
    case "TYPE_EXECUTE_TX":
      return 1 /* TYPE_EXECUTE_TX */;
    case -1:
    case "UNRECOGNIZED":
    default:
      return -1 /* UNRECOGNIZED */;
  }
}
function typeToJSON(object) {
  switch (object) {
    case 0 /* TYPE_UNSPECIFIED */:
      return "TYPE_UNSPECIFIED";
    case 1 /* TYPE_EXECUTE_TX */:
      return "TYPE_EXECUTE_TX";
    case -1 /* UNRECOGNIZED */:
    default:
      return "UNRECOGNIZED";
  }
}
function createBaseInterchainAccountPacketData() {
  return {
    type: 0,
    data: new Uint8Array(),
    memo: ""
  };
}
const InterchainAccountPacketData = {
  typeUrl: "/ibc.applications.interchain_accounts.v1.InterchainAccountPacketData",
  encode(message, writer = BinaryWriter.create()) {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.data.length !== 0) {
      writer.uint32(18).bytes(message.data);
    }
    if (message.memo !== "") {
      writer.uint32(26).string(message.memo);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseInterchainAccountPacketData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.int32();
          break;
        case 2:
          message.data = reader.bytes();
          break;
        case 3:
          message.memo = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseInterchainAccountPacketData();
    message.type = object.type ?? 0;
    message.data = object.data ?? new Uint8Array();
    message.memo = object.memo ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseInterchainAccountPacketData();
    if (object.type !== void 0 && object.type !== null) {
      message.type = object.type;
    }
    if (object.data !== void 0 && object.data !== null) {
      message.data = bytesFromBase64(object.data);
    }
    if (object.memo !== void 0 && object.memo !== null) {
      message.memo = object.memo;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.type = message.type === 0 ? void 0 : message.type;
    obj.data = message.data ? base64FromBytes(message.data) : void 0;
    obj.memo = message.memo === "" ? void 0 : message.memo;
    return obj;
  },
  fromAminoMsg(object) {
    return InterchainAccountPacketData.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/InterchainAccountPacketData",
      value: InterchainAccountPacketData.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return InterchainAccountPacketData.decode(message.value);
  },
  toProto(message) {
    return InterchainAccountPacketData.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.applications.interchain_accounts.v1.InterchainAccountPacketData",
      value: InterchainAccountPacketData.encode(message).finish()
    };
  }
};
function createBaseCosmosTx() {
  return {
    messages: []
  };
}
const CosmosTx = {
  typeUrl: "/ibc.applications.interchain_accounts.v1.CosmosTx",
  encode(message, writer = BinaryWriter.create()) {
    for (const v of message.messages) {
      Any.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseCosmosTx();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.messages.push(Any.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseCosmosTx();
    message.messages = object.messages?.map((e) => Any.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseCosmosTx();
    message.messages = object.messages?.map((e) => Any.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.messages) {
      obj.messages = message.messages.map((e) => e ? Any.toAmino(e) : void 0);
    } else {
      obj.messages = message.messages;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return CosmosTx.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/CosmosTx",
      value: CosmosTx.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return CosmosTx.decode(message.value);
  },
  toProto(message) {
    return CosmosTx.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.applications.interchain_accounts.v1.CosmosTx",
      value: CosmosTx.encode(message).finish()
    };
  }
};
export {
  CosmosTx,
  InterchainAccountPacketData,
  Type,
  TypeAmino,
  TypeSDKType,
  typeFromJSON,
  typeToJSON
};
