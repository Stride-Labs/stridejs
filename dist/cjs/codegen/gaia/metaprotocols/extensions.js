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
var extensions_exports = {};
__export(extensions_exports, {
  ExtensionData: () => ExtensionData
});
module.exports = __toCommonJS(extensions_exports);
var import_binary = require("../../binary");
var import_helpers = require("../../helpers");
function createBaseExtensionData() {
  return {
    protocolId: "",
    protocolVersion: "",
    data: new Uint8Array()
  };
}
const ExtensionData = {
  typeUrl: "/gaia.metaprotocols.ExtensionData",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.protocolId !== "") {
      writer.uint32(10).string(message.protocolId);
    }
    if (message.protocolVersion !== "") {
      writer.uint32(18).string(message.protocolVersion);
    }
    if (message.data.length !== 0) {
      writer.uint32(26).bytes(message.data);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseExtensionData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.protocolId = reader.string();
          break;
        case 2:
          message.protocolVersion = reader.string();
          break;
        case 3:
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
    const message = createBaseExtensionData();
    message.protocolId = object.protocolId ?? "";
    message.protocolVersion = object.protocolVersion ?? "";
    message.data = object.data ?? new Uint8Array();
    return message;
  },
  fromAmino(object) {
    const message = createBaseExtensionData();
    if (object.protocol_id !== void 0 && object.protocol_id !== null) {
      message.protocolId = object.protocol_id;
    }
    if (object.protocol_version !== void 0 && object.protocol_version !== null) {
      message.protocolVersion = object.protocol_version;
    }
    if (object.data !== void 0 && object.data !== null) {
      message.data = (0, import_helpers.bytesFromBase64)(object.data);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.protocol_id = message.protocolId === "" ? void 0 : message.protocolId;
    obj.protocol_version = message.protocolVersion === "" ? void 0 : message.protocolVersion;
    obj.data = message.data ? (0, import_helpers.base64FromBytes)(message.data) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return ExtensionData.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return ExtensionData.decode(message.value);
  },
  toProto(message) {
    return ExtensionData.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/gaia.metaprotocols.ExtensionData",
      value: ExtensionData.encode(message).finish()
    };
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ExtensionData
});
