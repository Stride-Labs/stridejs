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
  MsgModuleQuerySafe: () => MsgModuleQuerySafe,
  MsgModuleQuerySafeResponse: () => MsgModuleQuerySafeResponse
});
module.exports = __toCommonJS(tx_exports);
var import_host = require("./host");
var import_binary = require("../../../../../binary");
var import_helpers = require("../../../../../helpers");
function createBaseMsgModuleQuerySafe() {
  return {
    signer: "",
    requests: []
  };
}
const MsgModuleQuerySafe = {
  typeUrl: "/ibc.applications.interchain_accounts.host.v1.MsgModuleQuerySafe",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }
    for (const v of message.requests) {
      import_host.QueryRequest.encode(v, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgModuleQuerySafe();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signer = reader.string();
          break;
        case 2:
          message.requests.push(import_host.QueryRequest.decode(reader, reader.uint32()));
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
    message.requests = object.requests?.map((e) => import_host.QueryRequest.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgModuleQuerySafe();
    if (object.signer !== void 0 && object.signer !== null) {
      message.signer = object.signer;
    }
    message.requests = object.requests?.map((e) => import_host.QueryRequest.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.signer = message.signer === "" ? void 0 : message.signer;
    if (message.requests) {
      obj.requests = message.requests.map((e) => e ? import_host.QueryRequest.toAmino(e) : void 0);
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
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.height !== BigInt(0)) {
      writer.uint32(8).uint64(message.height);
    }
    for (const v of message.responses) {
      writer.uint32(18).bytes(v);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
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
    message.responses = object.responses?.map((e) => (0, import_helpers.bytesFromBase64)(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.height = message.height !== BigInt(0) ? message.height?.toString() : void 0;
    if (message.responses) {
      obj.responses = message.responses.map((e) => (0, import_helpers.base64FromBytes)(e));
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  MsgModuleQuerySafe,
  MsgModuleQuerySafeResponse
});
