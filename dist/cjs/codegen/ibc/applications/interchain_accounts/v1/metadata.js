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
var metadata_exports = {};
__export(metadata_exports, {
  Metadata: () => Metadata
});
module.exports = __toCommonJS(metadata_exports);
var import_binary = require("../../../../binary");
function createBaseMetadata() {
  return {
    version: "",
    controllerConnectionId: "",
    hostConnectionId: "",
    address: "",
    encoding: "",
    txType: ""
  };
}
const Metadata = {
  typeUrl: "/ibc.applications.interchain_accounts.v1.Metadata",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.version !== "") {
      writer.uint32(10).string(message.version);
    }
    if (message.controllerConnectionId !== "") {
      writer.uint32(18).string(message.controllerConnectionId);
    }
    if (message.hostConnectionId !== "") {
      writer.uint32(26).string(message.hostConnectionId);
    }
    if (message.address !== "") {
      writer.uint32(34).string(message.address);
    }
    if (message.encoding !== "") {
      writer.uint32(42).string(message.encoding);
    }
    if (message.txType !== "") {
      writer.uint32(50).string(message.txType);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.version = reader.string();
          break;
        case 2:
          message.controllerConnectionId = reader.string();
          break;
        case 3:
          message.hostConnectionId = reader.string();
          break;
        case 4:
          message.address = reader.string();
          break;
        case 5:
          message.encoding = reader.string();
          break;
        case 6:
          message.txType = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMetadata();
    message.version = object.version ?? "";
    message.controllerConnectionId = object.controllerConnectionId ?? "";
    message.hostConnectionId = object.hostConnectionId ?? "";
    message.address = object.address ?? "";
    message.encoding = object.encoding ?? "";
    message.txType = object.txType ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseMetadata();
    if (object.version !== void 0 && object.version !== null) {
      message.version = object.version;
    }
    if (object.controller_connection_id !== void 0 && object.controller_connection_id !== null) {
      message.controllerConnectionId = object.controller_connection_id;
    }
    if (object.host_connection_id !== void 0 && object.host_connection_id !== null) {
      message.hostConnectionId = object.host_connection_id;
    }
    if (object.address !== void 0 && object.address !== null) {
      message.address = object.address;
    }
    if (object.encoding !== void 0 && object.encoding !== null) {
      message.encoding = object.encoding;
    }
    if (object.tx_type !== void 0 && object.tx_type !== null) {
      message.txType = object.tx_type;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.version = message.version === "" ? void 0 : message.version;
    obj.controller_connection_id = message.controllerConnectionId === "" ? void 0 : message.controllerConnectionId;
    obj.host_connection_id = message.hostConnectionId === "" ? void 0 : message.hostConnectionId;
    obj.address = message.address === "" ? void 0 : message.address;
    obj.encoding = message.encoding === "" ? void 0 : message.encoding;
    obj.tx_type = message.txType === "" ? void 0 : message.txType;
    return obj;
  },
  fromAminoMsg(object) {
    return Metadata.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/Metadata",
      value: Metadata.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return Metadata.decode(message.value);
  },
  toProto(message) {
    return Metadata.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.applications.interchain_accounts.v1.Metadata",
      value: Metadata.encode(message).finish()
    };
  }
};
// Removed broken CommonJS export annotation
