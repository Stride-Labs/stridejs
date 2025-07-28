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
var event_exports = {};
__export(event_exports, {
  EventBurn: () => EventBurn,
  EventMint: () => EventMint,
  EventSend: () => EventSend
});
module.exports = __toCommonJS(event_exports);
var import_binary = require("../../../binary");
function createBaseEventSend() {
  return {
    classId: "",
    id: "",
    sender: "",
    receiver: ""
  };
}
const EventSend = {
  typeUrl: "/cosmos.nft.v1beta1.EventSend",
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
    const message = createBaseEventSend();
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
    const message = createBaseEventSend();
    message.classId = object.classId ?? "";
    message.id = object.id ?? "";
    message.sender = object.sender ?? "";
    message.receiver = object.receiver ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseEventSend();
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
    return EventSend.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/EventSend",
      value: EventSend.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return EventSend.decode(message.value);
  },
  toProto(message) {
    return EventSend.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.nft.v1beta1.EventSend",
      value: EventSend.encode(message).finish()
    };
  }
};
function createBaseEventMint() {
  return {
    classId: "",
    id: "",
    owner: ""
  };
}
const EventMint = {
  typeUrl: "/cosmos.nft.v1beta1.EventMint",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    if (message.owner !== "") {
      writer.uint32(26).string(message.owner);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseEventMint();
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
          message.owner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseEventMint();
    message.classId = object.classId ?? "";
    message.id = object.id ?? "";
    message.owner = object.owner ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseEventMint();
    if (object.class_id !== void 0 && object.class_id !== null) {
      message.classId = object.class_id;
    }
    if (object.id !== void 0 && object.id !== null) {
      message.id = object.id;
    }
    if (object.owner !== void 0 && object.owner !== null) {
      message.owner = object.owner;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.class_id = message.classId === "" ? void 0 : message.classId;
    obj.id = message.id === "" ? void 0 : message.id;
    obj.owner = message.owner === "" ? void 0 : message.owner;
    return obj;
  },
  fromAminoMsg(object) {
    return EventMint.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/EventMint",
      value: EventMint.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return EventMint.decode(message.value);
  },
  toProto(message) {
    return EventMint.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.nft.v1beta1.EventMint",
      value: EventMint.encode(message).finish()
    };
  }
};
function createBaseEventBurn() {
  return {
    classId: "",
    id: "",
    owner: ""
  };
}
const EventBurn = {
  typeUrl: "/cosmos.nft.v1beta1.EventBurn",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    if (message.owner !== "") {
      writer.uint32(26).string(message.owner);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseEventBurn();
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
          message.owner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseEventBurn();
    message.classId = object.classId ?? "";
    message.id = object.id ?? "";
    message.owner = object.owner ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseEventBurn();
    if (object.class_id !== void 0 && object.class_id !== null) {
      message.classId = object.class_id;
    }
    if (object.id !== void 0 && object.id !== null) {
      message.id = object.id;
    }
    if (object.owner !== void 0 && object.owner !== null) {
      message.owner = object.owner;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.class_id = message.classId === "" ? void 0 : message.classId;
    obj.id = message.id === "" ? void 0 : message.id;
    obj.owner = message.owner === "" ? void 0 : message.owner;
    return obj;
  },
  fromAminoMsg(object) {
    return EventBurn.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/EventBurn",
      value: EventBurn.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return EventBurn.decode(message.value);
  },
  toProto(message) {
    return EventBurn.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.nft.v1beta1.EventBurn",
      value: EventBurn.encode(message).finish()
    };
  }
};
// Removed broken CommonJS export annotation
