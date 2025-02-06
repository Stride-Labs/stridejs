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
var httpbody_exports = {};
__export(httpbody_exports, {
  HttpBody: () => HttpBody
});
module.exports = __toCommonJS(httpbody_exports);
var import_any = require("../protobuf/any");
var import_binary = require("../../binary");
var import_helpers = require("../../helpers");
function createBaseHttpBody() {
  return {
    contentType: "",
    data: new Uint8Array(),
    extensions: []
  };
}
const HttpBody = {
  typeUrl: "/google.api.HttpBody",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.contentType !== "") {
      writer.uint32(10).string(message.contentType);
    }
    if (message.data.length !== 0) {
      writer.uint32(18).bytes(message.data);
    }
    for (const v of message.extensions) {
      import_any.Any.encode(v, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseHttpBody();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contentType = reader.string();
          break;
        case 2:
          message.data = reader.bytes();
          break;
        case 3:
          message.extensions.push(import_any.Any.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseHttpBody();
    message.contentType = object.contentType ?? "";
    message.data = object.data ?? new Uint8Array();
    message.extensions = object.extensions?.map((e) => import_any.Any.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseHttpBody();
    if (object.content_type !== void 0 && object.content_type !== null) {
      message.contentType = object.content_type;
    }
    if (object.data !== void 0 && object.data !== null) {
      message.data = (0, import_helpers.bytesFromBase64)(object.data);
    }
    message.extensions = object.extensions?.map((e) => import_any.Any.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.content_type = message.contentType === "" ? void 0 : message.contentType;
    obj.data = message.data ? (0, import_helpers.base64FromBytes)(message.data) : void 0;
    if (message.extensions) {
      obj.extensions = message.extensions.map((e) => e ? import_any.Any.toAmino(e) : void 0);
    } else {
      obj.extensions = message.extensions;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return HttpBody.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return HttpBody.decode(message.value);
  },
  toProto(message) {
    return HttpBody.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/google.api.HttpBody",
      value: HttpBody.encode(message).finish()
    };
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  HttpBody
});
