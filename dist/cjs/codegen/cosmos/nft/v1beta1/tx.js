"use strict";
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
  MsgSend: () => MsgSend,
  MsgSendResponse: () => MsgSendResponse
});
module.exports = __toCommonJS(tx_exports);
var import_binary = require("../../../binary");
function createBaseMsgSend() {
  return {
    classId: "",
    id: "",
    sender: "",
    receiver: ""
  };
}
const MsgSend = {
  typeUrl: "/cosmos.nft.v1beta1.MsgSend",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    if (message.sender !== "") {
      writer.uint32(26).string(message.sender);
    }
    if (message.receiver !== "") {
      writer.uint32(34).string(message.receiver);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgSend();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
          break;
        case 2:
          message.id = reader.string();
          break;
        case 3:
          message.sender = reader.string();
          break;
        case 4:
          message.receiver = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgSend();
    message.classId = object.classId ?? "";
    message.id = object.id ?? "";
    message.sender = object.sender ?? "";
    message.receiver = object.receiver ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgSend();
    if (object.class_id !== void 0 && object.class_id !== null) {
      message.classId = object.class_id;
    }
    if (object.id !== void 0 && object.id !== null) {
      message.id = object.id;
    }
    if (object.sender !== void 0 && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.receiver !== void 0 && object.receiver !== null) {
      message.receiver = object.receiver;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.class_id = message.classId === "" ? void 0 : message.classId;
    obj.id = message.id === "" ? void 0 : message.id;
    obj.sender = message.sender === "" ? void 0 : message.sender;
    obj.receiver = message.receiver === "" ? void 0 : message.receiver;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgSend.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgNFTSend",
      value: MsgSend.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgSend.decode(message.value);
  },
  toProto(message) {
    return MsgSend.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.nft.v1beta1.MsgSend",
      value: MsgSend.encode(message).finish()
    };
  }
};
function createBaseMsgSendResponse() {
  return {};
}
const MsgSendResponse = {
  typeUrl: "/cosmos.nft.v1beta1.MsgSendResponse",
  encode(_, writer = import_binary.BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgSendResponse();
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
    const message = createBaseMsgSendResponse();
    return message;
  },
  fromAmino(_) {
    const message = createBaseMsgSendResponse();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return MsgSendResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgSendResponse",
      value: MsgSendResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgSendResponse.decode(message.value);
  },
  toProto(message) {
    return MsgSendResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.nft.v1beta1.MsgSendResponse",
      value: MsgSendResponse.encode(message).finish()
    };
  }
};
// Removed broken CommonJS export annotation
