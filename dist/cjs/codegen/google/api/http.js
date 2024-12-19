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
var http_exports = {};
__export(http_exports, {
  CustomHttpPattern: () => CustomHttpPattern,
  Http: () => Http,
  HttpRule: () => HttpRule
});
module.exports = __toCommonJS(http_exports);
var import_binary = require("../../binary");
function createBaseHttp() {
  return {
    rules: [],
    fullyDecodeReservedExpansion: false
  };
}
const Http = {
  typeUrl: "/google.api.Http",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    for (const v of message.rules) {
      HttpRule.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.fullyDecodeReservedExpansion === true) {
      writer.uint32(16).bool(message.fullyDecodeReservedExpansion);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseHttp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rules.push(HttpRule.decode(reader, reader.uint32()));
          break;
        case 2:
          message.fullyDecodeReservedExpansion = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseHttp();
    message.rules = object.rules?.map((e) => HttpRule.fromPartial(e)) || [];
    message.fullyDecodeReservedExpansion = object.fullyDecodeReservedExpansion ?? false;
    return message;
  },
  fromAmino(object) {
    const message = createBaseHttp();
    message.rules = object.rules?.map((e) => HttpRule.fromAmino(e)) || [];
    if (object.fully_decode_reserved_expansion !== void 0 && object.fully_decode_reserved_expansion !== null) {
      message.fullyDecodeReservedExpansion = object.fully_decode_reserved_expansion;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.rules) {
      obj.rules = message.rules.map((e) => e ? HttpRule.toAmino(e) : void 0);
    } else {
      obj.rules = message.rules;
    }
    obj.fully_decode_reserved_expansion = message.fullyDecodeReservedExpansion === false ? void 0 : message.fullyDecodeReservedExpansion;
    return obj;
  },
  fromAminoMsg(object) {
    return Http.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return Http.decode(message.value);
  },
  toProto(message) {
    return Http.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/google.api.Http",
      value: Http.encode(message).finish()
    };
  }
};
function createBaseHttpRule() {
  return {
    selector: "",
    get: void 0,
    put: void 0,
    post: void 0,
    delete: void 0,
    patch: void 0,
    custom: void 0,
    body: "",
    responseBody: "",
    additionalBindings: []
  };
}
const HttpRule = {
  typeUrl: "/google.api.HttpRule",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.selector !== "") {
      writer.uint32(10).string(message.selector);
    }
    if (message.get !== void 0) {
      writer.uint32(18).string(message.get);
    }
    if (message.put !== void 0) {
      writer.uint32(26).string(message.put);
    }
    if (message.post !== void 0) {
      writer.uint32(34).string(message.post);
    }
    if (message.delete !== void 0) {
      writer.uint32(42).string(message.delete);
    }
    if (message.patch !== void 0) {
      writer.uint32(50).string(message.patch);
    }
    if (message.custom !== void 0) {
      CustomHttpPattern.encode(message.custom, writer.uint32(66).fork()).ldelim();
    }
    if (message.body !== "") {
      writer.uint32(58).string(message.body);
    }
    if (message.responseBody !== "") {
      writer.uint32(98).string(message.responseBody);
    }
    for (const v of message.additionalBindings) {
      HttpRule.encode(v, writer.uint32(90).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseHttpRule();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.selector = reader.string();
          break;
        case 2:
          message.get = reader.string();
          break;
        case 3:
          message.put = reader.string();
          break;
        case 4:
          message.post = reader.string();
          break;
        case 5:
          message.delete = reader.string();
          break;
        case 6:
          message.patch = reader.string();
          break;
        case 8:
          message.custom = CustomHttpPattern.decode(reader, reader.uint32());
          break;
        case 7:
          message.body = reader.string();
          break;
        case 12:
          message.responseBody = reader.string();
          break;
        case 11:
          message.additionalBindings.push(HttpRule.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseHttpRule();
    message.selector = object.selector ?? "";
    message.get = object.get ?? void 0;
    message.put = object.put ?? void 0;
    message.post = object.post ?? void 0;
    message.delete = object.delete ?? void 0;
    message.patch = object.patch ?? void 0;
    message.custom = object.custom !== void 0 && object.custom !== null ? CustomHttpPattern.fromPartial(object.custom) : void 0;
    message.body = object.body ?? "";
    message.responseBody = object.responseBody ?? "";
    message.additionalBindings = object.additionalBindings?.map((e) => HttpRule.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseHttpRule();
    if (object.selector !== void 0 && object.selector !== null) {
      message.selector = object.selector;
    }
    if (object.get !== void 0 && object.get !== null) {
      message.get = object.get;
    }
    if (object.put !== void 0 && object.put !== null) {
      message.put = object.put;
    }
    if (object.post !== void 0 && object.post !== null) {
      message.post = object.post;
    }
    if (object.delete !== void 0 && object.delete !== null) {
      message.delete = object.delete;
    }
    if (object.patch !== void 0 && object.patch !== null) {
      message.patch = object.patch;
    }
    if (object.custom !== void 0 && object.custom !== null) {
      message.custom = CustomHttpPattern.fromAmino(object.custom);
    }
    if (object.body !== void 0 && object.body !== null) {
      message.body = object.body;
    }
    if (object.response_body !== void 0 && object.response_body !== null) {
      message.responseBody = object.response_body;
    }
    message.additionalBindings = object.additional_bindings?.map((e) => HttpRule.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.selector = message.selector === "" ? void 0 : message.selector;
    obj.get = message.get === null ? void 0 : message.get;
    obj.put = message.put === null ? void 0 : message.put;
    obj.post = message.post === null ? void 0 : message.post;
    obj.delete = message.delete === null ? void 0 : message.delete;
    obj.patch = message.patch === null ? void 0 : message.patch;
    obj.custom = message.custom ? CustomHttpPattern.toAmino(message.custom) : void 0;
    obj.body = message.body === "" ? void 0 : message.body;
    obj.response_body = message.responseBody === "" ? void 0 : message.responseBody;
    if (message.additionalBindings) {
      obj.additional_bindings = message.additionalBindings.map((e) => e ? HttpRule.toAmino(e) : void 0);
    } else {
      obj.additional_bindings = message.additionalBindings;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return HttpRule.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return HttpRule.decode(message.value);
  },
  toProto(message) {
    return HttpRule.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/google.api.HttpRule",
      value: HttpRule.encode(message).finish()
    };
  }
};
function createBaseCustomHttpPattern() {
  return {
    kind: "",
    path: ""
  };
}
const CustomHttpPattern = {
  typeUrl: "/google.api.CustomHttpPattern",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.kind !== "") {
      writer.uint32(10).string(message.kind);
    }
    if (message.path !== "") {
      writer.uint32(18).string(message.path);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseCustomHttpPattern();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.kind = reader.string();
          break;
        case 2:
          message.path = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseCustomHttpPattern();
    message.kind = object.kind ?? "";
    message.path = object.path ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseCustomHttpPattern();
    if (object.kind !== void 0 && object.kind !== null) {
      message.kind = object.kind;
    }
    if (object.path !== void 0 && object.path !== null) {
      message.path = object.path;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.kind = message.kind === "" ? void 0 : message.kind;
    obj.path = message.path === "" ? void 0 : message.path;
    return obj;
  },
  fromAminoMsg(object) {
    return CustomHttpPattern.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return CustomHttpPattern.decode(message.value);
  },
  toProto(message) {
    return CustomHttpPattern.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/google.api.CustomHttpPattern",
      value: CustomHttpPattern.encode(message).finish()
    };
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CustomHttpPattern,
  Http,
  HttpRule
});
