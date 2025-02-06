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
  MsgUnjail: () => MsgUnjail,
  MsgUnjailResponse: () => MsgUnjailResponse
});
module.exports = __toCommonJS(tx_exports);
var import_binary = require("../../../binary");
function createBaseMsgUnjail() {
  return {
    validatorAddr: ""
  };
}
const MsgUnjail = {
  typeUrl: "/cosmos.slashing.v1beta1.MsgUnjail",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.validatorAddr !== "") {
      writer.uint32(10).string(message.validatorAddr);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgUnjail();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddr = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgUnjail();
    message.validatorAddr = object.validatorAddr ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgUnjail();
    if (object.validator_addr !== void 0 && object.validator_addr !== null) {
      message.validatorAddr = object.validator_addr;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.validator_addr = message.validatorAddr ?? "";
    return obj;
  },
  fromAminoMsg(object) {
    return MsgUnjail.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgUnjail",
      value: MsgUnjail.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgUnjail.decode(message.value);
  },
  toProto(message) {
    return MsgUnjail.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.slashing.v1beta1.MsgUnjail",
      value: MsgUnjail.encode(message).finish()
    };
  }
};
function createBaseMsgUnjailResponse() {
  return {};
}
const MsgUnjailResponse = {
  typeUrl: "/cosmos.slashing.v1beta1.MsgUnjailResponse",
  encode(_, writer = import_binary.BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgUnjailResponse();
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
    const message = createBaseMsgUnjailResponse();
    return message;
  },
  fromAmino(_) {
    const message = createBaseMsgUnjailResponse();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return MsgUnjailResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgUnjailResponse",
      value: MsgUnjailResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgUnjailResponse.decode(message.value);
  },
  toProto(message) {
    return MsgUnjailResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.slashing.v1beta1.MsgUnjailResponse",
      value: MsgUnjailResponse.encode(message).finish()
    };
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  MsgUnjail,
  MsgUnjailResponse
});
