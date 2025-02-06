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
  MsgVerifyInvariant: () => MsgVerifyInvariant,
  MsgVerifyInvariantResponse: () => MsgVerifyInvariantResponse
});
module.exports = __toCommonJS(tx_exports);
var import_binary = require("../../../binary");
function createBaseMsgVerifyInvariant() {
  return {
    sender: "",
    invariantModuleName: "",
    invariantRoute: ""
  };
}
const MsgVerifyInvariant = {
  typeUrl: "/cosmos.crisis.v1beta1.MsgVerifyInvariant",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.invariantModuleName !== "") {
      writer.uint32(18).string(message.invariantModuleName);
    }
    if (message.invariantRoute !== "") {
      writer.uint32(26).string(message.invariantRoute);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgVerifyInvariant();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.invariantModuleName = reader.string();
          break;
        case 3:
          message.invariantRoute = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgVerifyInvariant();
    message.sender = object.sender ?? "";
    message.invariantModuleName = object.invariantModuleName ?? "";
    message.invariantRoute = object.invariantRoute ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgVerifyInvariant();
    if (object.sender !== void 0 && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.invariant_module_name !== void 0 && object.invariant_module_name !== null) {
      message.invariantModuleName = object.invariant_module_name;
    }
    if (object.invariant_route !== void 0 && object.invariant_route !== null) {
      message.invariantRoute = object.invariant_route;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.sender = message.sender === "" ? void 0 : message.sender;
    obj.invariant_module_name = message.invariantModuleName === "" ? void 0 : message.invariantModuleName;
    obj.invariant_route = message.invariantRoute === "" ? void 0 : message.invariantRoute;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgVerifyInvariant.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgVerifyInvariant",
      value: MsgVerifyInvariant.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgVerifyInvariant.decode(message.value);
  },
  toProto(message) {
    return MsgVerifyInvariant.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.crisis.v1beta1.MsgVerifyInvariant",
      value: MsgVerifyInvariant.encode(message).finish()
    };
  }
};
function createBaseMsgVerifyInvariantResponse() {
  return {};
}
const MsgVerifyInvariantResponse = {
  typeUrl: "/cosmos.crisis.v1beta1.MsgVerifyInvariantResponse",
  encode(_, writer = import_binary.BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgVerifyInvariantResponse();
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
    const message = createBaseMsgVerifyInvariantResponse();
    return message;
  },
  fromAmino(_) {
    const message = createBaseMsgVerifyInvariantResponse();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return MsgVerifyInvariantResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgVerifyInvariantResponse",
      value: MsgVerifyInvariantResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgVerifyInvariantResponse.decode(message.value);
  },
  toProto(message) {
    return MsgVerifyInvariantResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.crisis.v1beta1.MsgVerifyInvariantResponse",
      value: MsgVerifyInvariantResponse.encode(message).finish()
    };
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  MsgVerifyInvariant,
  MsgVerifyInvariantResponse
});
