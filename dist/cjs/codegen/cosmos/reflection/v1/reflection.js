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
var reflection_exports = {};
__export(reflection_exports, {
  FileDescriptorsRequest: () => FileDescriptorsRequest,
  FileDescriptorsResponse: () => FileDescriptorsResponse
});
module.exports = __toCommonJS(reflection_exports);
var import_descriptor = require("../../../google/protobuf/descriptor");
var import_binary = require("../../../binary");
function createBaseFileDescriptorsRequest() {
  return {};
}
const FileDescriptorsRequest = {
  typeUrl: "/cosmos.reflection.v1.FileDescriptorsRequest",
  encode(_, writer = import_binary.BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseFileDescriptorsRequest();
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
    const message = createBaseFileDescriptorsRequest();
    return message;
  },
  fromAmino(_) {
    const message = createBaseFileDescriptorsRequest();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return FileDescriptorsRequest.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/FileDescriptorsRequest",
      value: FileDescriptorsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return FileDescriptorsRequest.decode(message.value);
  },
  toProto(message) {
    return FileDescriptorsRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.reflection.v1.FileDescriptorsRequest",
      value: FileDescriptorsRequest.encode(message).finish()
    };
  }
};
function createBaseFileDescriptorsResponse() {
  return {
    files: []
  };
}
const FileDescriptorsResponse = {
  typeUrl: "/cosmos.reflection.v1.FileDescriptorsResponse",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    for (const v of message.files) {
      import_descriptor.FileDescriptorProto.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseFileDescriptorsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.files.push(import_descriptor.FileDescriptorProto.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseFileDescriptorsResponse();
    message.files = object.files?.map((e) => import_descriptor.FileDescriptorProto.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseFileDescriptorsResponse();
    message.files = object.files?.map((e) => import_descriptor.FileDescriptorProto.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.files) {
      obj.files = message.files.map((e) => e ? import_descriptor.FileDescriptorProto.toAmino(e) : void 0);
    } else {
      obj.files = message.files;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return FileDescriptorsResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/FileDescriptorsResponse",
      value: FileDescriptorsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return FileDescriptorsResponse.decode(message.value);
  },
  toProto(message) {
    return FileDescriptorsResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.reflection.v1.FileDescriptorsResponse",
      value: FileDescriptorsResponse.encode(message).finish()
    };
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  FileDescriptorsRequest,
  FileDescriptorsResponse
});
