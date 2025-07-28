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
var descriptor_exports = {};
__export(descriptor_exports, {
  DescriptorProto: () => DescriptorProto,
  DescriptorProto_ExtensionRange: () => DescriptorProto_ExtensionRange,
  DescriptorProto_ReservedRange: () => DescriptorProto_ReservedRange,
  EnumDescriptorProto: () => EnumDescriptorProto,
  EnumDescriptorProto_EnumReservedRange: () => EnumDescriptorProto_EnumReservedRange,
  EnumOptions: () => EnumOptions,
  EnumValueDescriptorProto: () => EnumValueDescriptorProto,
  EnumValueOptions: () => EnumValueOptions,
  ExtensionRangeOptions: () => ExtensionRangeOptions,
  FieldDescriptorProto: () => FieldDescriptorProto,
  FieldDescriptorProto_Label: () => FieldDescriptorProto_Label,
  FieldDescriptorProto_LabelAmino: () => FieldDescriptorProto_LabelAmino,
  FieldDescriptorProto_LabelSDKType: () => FieldDescriptorProto_LabelSDKType,
  FieldDescriptorProto_Type: () => FieldDescriptorProto_Type,
  FieldDescriptorProto_TypeAmino: () => FieldDescriptorProto_TypeAmino,
  FieldDescriptorProto_TypeSDKType: () => FieldDescriptorProto_TypeSDKType,
  FieldOptions: () => FieldOptions,
  FieldOptions_CType: () => FieldOptions_CType,
  FieldOptions_CTypeAmino: () => FieldOptions_CTypeAmino,
  FieldOptions_CTypeSDKType: () => FieldOptions_CTypeSDKType,
  FieldOptions_JSType: () => FieldOptions_JSType,
  FieldOptions_JSTypeAmino: () => FieldOptions_JSTypeAmino,
  FieldOptions_JSTypeSDKType: () => FieldOptions_JSTypeSDKType,
  FileDescriptorProto: () => FileDescriptorProto,
  FileDescriptorSet: () => FileDescriptorSet,
  FileOptions: () => FileOptions,
  FileOptions_OptimizeMode: () => FileOptions_OptimizeMode,
  FileOptions_OptimizeModeAmino: () => FileOptions_OptimizeModeAmino,
  FileOptions_OptimizeModeSDKType: () => FileOptions_OptimizeModeSDKType,
  GeneratedCodeInfo: () => GeneratedCodeInfo,
  GeneratedCodeInfo_Annotation: () => GeneratedCodeInfo_Annotation,
  MessageOptions: () => MessageOptions,
  MethodDescriptorProto: () => MethodDescriptorProto,
  MethodOptions: () => MethodOptions,
  MethodOptions_IdempotencyLevel: () => MethodOptions_IdempotencyLevel,
  MethodOptions_IdempotencyLevelAmino: () => MethodOptions_IdempotencyLevelAmino,
  MethodOptions_IdempotencyLevelSDKType: () => MethodOptions_IdempotencyLevelSDKType,
  OneofDescriptorProto: () => OneofDescriptorProto,
  OneofOptions: () => OneofOptions,
  ServiceDescriptorProto: () => ServiceDescriptorProto,
  ServiceOptions: () => ServiceOptions,
  SourceCodeInfo: () => SourceCodeInfo,
  SourceCodeInfo_Location: () => SourceCodeInfo_Location,
  UninterpretedOption: () => UninterpretedOption,
  UninterpretedOption_NamePart: () => UninterpretedOption_NamePart,
  fieldDescriptorProto_LabelFromJSON: () => fieldDescriptorProto_LabelFromJSON,
  fieldDescriptorProto_LabelToJSON: () => fieldDescriptorProto_LabelToJSON,
  fieldDescriptorProto_TypeFromJSON: () => fieldDescriptorProto_TypeFromJSON,
  fieldDescriptorProto_TypeToJSON: () => fieldDescriptorProto_TypeToJSON,
  fieldOptions_CTypeFromJSON: () => fieldOptions_CTypeFromJSON,
  fieldOptions_CTypeToJSON: () => fieldOptions_CTypeToJSON,
  fieldOptions_JSTypeFromJSON: () => fieldOptions_JSTypeFromJSON,
  fieldOptions_JSTypeToJSON: () => fieldOptions_JSTypeToJSON,
  fileOptions_OptimizeModeFromJSON: () => fileOptions_OptimizeModeFromJSON,
  fileOptions_OptimizeModeToJSON: () => fileOptions_OptimizeModeToJSON,
  methodOptions_IdempotencyLevelFromJSON: () => methodOptions_IdempotencyLevelFromJSON,
  methodOptions_IdempotencyLevelToJSON: () => methodOptions_IdempotencyLevelToJSON
});
module.exports = __toCommonJS(descriptor_exports);
var import_binary = require("../../binary");
var import_helpers = require("../../helpers");
var FieldDescriptorProto_Type = /* @__PURE__ */ ((FieldDescriptorProto_Type2) => {
  FieldDescriptorProto_Type2[FieldDescriptorProto_Type2["TYPE_DOUBLE"] = 1] = "TYPE_DOUBLE";
  FieldDescriptorProto_Type2[FieldDescriptorProto_Type2["TYPE_FLOAT"] = 2] = "TYPE_FLOAT";
  FieldDescriptorProto_Type2[FieldDescriptorProto_Type2["TYPE_INT64"] = 3] = "TYPE_INT64";
  FieldDescriptorProto_Type2[FieldDescriptorProto_Type2["TYPE_UINT64"] = 4] = "TYPE_UINT64";
  FieldDescriptorProto_Type2[FieldDescriptorProto_Type2["TYPE_INT32"] = 5] = "TYPE_INT32";
  FieldDescriptorProto_Type2[FieldDescriptorProto_Type2["TYPE_FIXED64"] = 6] = "TYPE_FIXED64";
  FieldDescriptorProto_Type2[FieldDescriptorProto_Type2["TYPE_FIXED32"] = 7] = "TYPE_FIXED32";
  FieldDescriptorProto_Type2[FieldDescriptorProto_Type2["TYPE_BOOL"] = 8] = "TYPE_BOOL";
  FieldDescriptorProto_Type2[FieldDescriptorProto_Type2["TYPE_STRING"] = 9] = "TYPE_STRING";
  FieldDescriptorProto_Type2[FieldDescriptorProto_Type2["TYPE_GROUP"] = 10] = "TYPE_GROUP";
  FieldDescriptorProto_Type2[FieldDescriptorProto_Type2["TYPE_MESSAGE"] = 11] = "TYPE_MESSAGE";
  FieldDescriptorProto_Type2[FieldDescriptorProto_Type2["TYPE_BYTES"] = 12] = "TYPE_BYTES";
  FieldDescriptorProto_Type2[FieldDescriptorProto_Type2["TYPE_UINT32"] = 13] = "TYPE_UINT32";
  FieldDescriptorProto_Type2[FieldDescriptorProto_Type2["TYPE_ENUM"] = 14] = "TYPE_ENUM";
  FieldDescriptorProto_Type2[FieldDescriptorProto_Type2["TYPE_SFIXED32"] = 15] = "TYPE_SFIXED32";
  FieldDescriptorProto_Type2[FieldDescriptorProto_Type2["TYPE_SFIXED64"] = 16] = "TYPE_SFIXED64";
  FieldDescriptorProto_Type2[FieldDescriptorProto_Type2["TYPE_SINT32"] = 17] = "TYPE_SINT32";
  FieldDescriptorProto_Type2[FieldDescriptorProto_Type2["TYPE_SINT64"] = 18] = "TYPE_SINT64";
  FieldDescriptorProto_Type2[FieldDescriptorProto_Type2["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return FieldDescriptorProto_Type2;
})(FieldDescriptorProto_Type || {});
const FieldDescriptorProto_TypeSDKType = FieldDescriptorProto_Type;
const FieldDescriptorProto_TypeAmino = FieldDescriptorProto_Type;
function fieldDescriptorProto_TypeFromJSON(object) {
  switch (object) {
    case 1:
    case "TYPE_DOUBLE":
      return 1 /* TYPE_DOUBLE */;
    case 2:
    case "TYPE_FLOAT":
      return 2 /* TYPE_FLOAT */;
    case 3:
    case "TYPE_INT64":
      return 3 /* TYPE_INT64 */;
    case 4:
    case "TYPE_UINT64":
      return 4 /* TYPE_UINT64 */;
    case 5:
    case "TYPE_INT32":
      return 5 /* TYPE_INT32 */;
    case 6:
    case "TYPE_FIXED64":
      return 6 /* TYPE_FIXED64 */;
    case 7:
    case "TYPE_FIXED32":
      return 7 /* TYPE_FIXED32 */;
    case 8:
    case "TYPE_BOOL":
      return 8 /* TYPE_BOOL */;
    case 9:
    case "TYPE_STRING":
      return 9 /* TYPE_STRING */;
    case 10:
    case "TYPE_GROUP":
      return 10 /* TYPE_GROUP */;
    case 11:
    case "TYPE_MESSAGE":
      return 11 /* TYPE_MESSAGE */;
    case 12:
    case "TYPE_BYTES":
      return 12 /* TYPE_BYTES */;
    case 13:
    case "TYPE_UINT32":
      return 13 /* TYPE_UINT32 */;
    case 14:
    case "TYPE_ENUM":
      return 14 /* TYPE_ENUM */;
    case 15:
    case "TYPE_SFIXED32":
      return 15 /* TYPE_SFIXED32 */;
    case 16:
    case "TYPE_SFIXED64":
      return 16 /* TYPE_SFIXED64 */;
    case 17:
    case "TYPE_SINT32":
      return 17 /* TYPE_SINT32 */;
    case 18:
    case "TYPE_SINT64":
      return 18 /* TYPE_SINT64 */;
    case -1:
    case "UNRECOGNIZED":
    default:
      return -1 /* UNRECOGNIZED */;
  }
}
function fieldDescriptorProto_TypeToJSON(object) {
  switch (object) {
    case 1 /* TYPE_DOUBLE */:
      return "TYPE_DOUBLE";
    case 2 /* TYPE_FLOAT */:
      return "TYPE_FLOAT";
    case 3 /* TYPE_INT64 */:
      return "TYPE_INT64";
    case 4 /* TYPE_UINT64 */:
      return "TYPE_UINT64";
    case 5 /* TYPE_INT32 */:
      return "TYPE_INT32";
    case 6 /* TYPE_FIXED64 */:
      return "TYPE_FIXED64";
    case 7 /* TYPE_FIXED32 */:
      return "TYPE_FIXED32";
    case 8 /* TYPE_BOOL */:
      return "TYPE_BOOL";
    case 9 /* TYPE_STRING */:
      return "TYPE_STRING";
    case 10 /* TYPE_GROUP */:
      return "TYPE_GROUP";
    case 11 /* TYPE_MESSAGE */:
      return "TYPE_MESSAGE";
    case 12 /* TYPE_BYTES */:
      return "TYPE_BYTES";
    case 13 /* TYPE_UINT32 */:
      return "TYPE_UINT32";
    case 14 /* TYPE_ENUM */:
      return "TYPE_ENUM";
    case 15 /* TYPE_SFIXED32 */:
      return "TYPE_SFIXED32";
    case 16 /* TYPE_SFIXED64 */:
      return "TYPE_SFIXED64";
    case 17 /* TYPE_SINT32 */:
      return "TYPE_SINT32";
    case 18 /* TYPE_SINT64 */:
      return "TYPE_SINT64";
    case -1 /* UNRECOGNIZED */:
    default:
      return "UNRECOGNIZED";
  }
}
var FieldDescriptorProto_Label = /* @__PURE__ */ ((FieldDescriptorProto_Label2) => {
  FieldDescriptorProto_Label2[FieldDescriptorProto_Label2["LABEL_OPTIONAL"] = 1] = "LABEL_OPTIONAL";
  FieldDescriptorProto_Label2[FieldDescriptorProto_Label2["LABEL_REQUIRED"] = 2] = "LABEL_REQUIRED";
  FieldDescriptorProto_Label2[FieldDescriptorProto_Label2["LABEL_REPEATED"] = 3] = "LABEL_REPEATED";
  FieldDescriptorProto_Label2[FieldDescriptorProto_Label2["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return FieldDescriptorProto_Label2;
})(FieldDescriptorProto_Label || {});
const FieldDescriptorProto_LabelSDKType = FieldDescriptorProto_Label;
const FieldDescriptorProto_LabelAmino = FieldDescriptorProto_Label;
function fieldDescriptorProto_LabelFromJSON(object) {
  switch (object) {
    case 1:
    case "LABEL_OPTIONAL":
      return 1 /* LABEL_OPTIONAL */;
    case 2:
    case "LABEL_REQUIRED":
      return 2 /* LABEL_REQUIRED */;
    case 3:
    case "LABEL_REPEATED":
      return 3 /* LABEL_REPEATED */;
    case -1:
    case "UNRECOGNIZED":
    default:
      return -1 /* UNRECOGNIZED */;
  }
}
function fieldDescriptorProto_LabelToJSON(object) {
  switch (object) {
    case 1 /* LABEL_OPTIONAL */:
      return "LABEL_OPTIONAL";
    case 2 /* LABEL_REQUIRED */:
      return "LABEL_REQUIRED";
    case 3 /* LABEL_REPEATED */:
      return "LABEL_REPEATED";
    case -1 /* UNRECOGNIZED */:
    default:
      return "UNRECOGNIZED";
  }
}
var FileOptions_OptimizeMode = /* @__PURE__ */ ((FileOptions_OptimizeMode2) => {
  FileOptions_OptimizeMode2[FileOptions_OptimizeMode2["SPEED"] = 1] = "SPEED";
  FileOptions_OptimizeMode2[FileOptions_OptimizeMode2["CODE_SIZE"] = 2] = "CODE_SIZE";
  FileOptions_OptimizeMode2[FileOptions_OptimizeMode2["LITE_RUNTIME"] = 3] = "LITE_RUNTIME";
  FileOptions_OptimizeMode2[FileOptions_OptimizeMode2["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return FileOptions_OptimizeMode2;
})(FileOptions_OptimizeMode || {});
const FileOptions_OptimizeModeSDKType = FileOptions_OptimizeMode;
const FileOptions_OptimizeModeAmino = FileOptions_OptimizeMode;
function fileOptions_OptimizeModeFromJSON(object) {
  switch (object) {
    case 1:
    case "SPEED":
      return 1 /* SPEED */;
    case 2:
    case "CODE_SIZE":
      return 2 /* CODE_SIZE */;
    case 3:
    case "LITE_RUNTIME":
      return 3 /* LITE_RUNTIME */;
    case -1:
    case "UNRECOGNIZED":
    default:
      return -1 /* UNRECOGNIZED */;
  }
}
function fileOptions_OptimizeModeToJSON(object) {
  switch (object) {
    case 1 /* SPEED */:
      return "SPEED";
    case 2 /* CODE_SIZE */:
      return "CODE_SIZE";
    case 3 /* LITE_RUNTIME */:
      return "LITE_RUNTIME";
    case -1 /* UNRECOGNIZED */:
    default:
      return "UNRECOGNIZED";
  }
}
var FieldOptions_CType = /* @__PURE__ */ ((FieldOptions_CType2) => {
  FieldOptions_CType2[FieldOptions_CType2["STRING"] = 0] = "STRING";
  FieldOptions_CType2[FieldOptions_CType2["CORD"] = 1] = "CORD";
  FieldOptions_CType2[FieldOptions_CType2["STRING_PIECE"] = 2] = "STRING_PIECE";
  FieldOptions_CType2[FieldOptions_CType2["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return FieldOptions_CType2;
})(FieldOptions_CType || {});
const FieldOptions_CTypeSDKType = FieldOptions_CType;
const FieldOptions_CTypeAmino = FieldOptions_CType;
function fieldOptions_CTypeFromJSON(object) {
  switch (object) {
    case 0:
    case "STRING":
      return 0 /* STRING */;
    case 1:
    case "CORD":
      return 1 /* CORD */;
    case 2:
    case "STRING_PIECE":
      return 2 /* STRING_PIECE */;
    case -1:
    case "UNRECOGNIZED":
    default:
      return -1 /* UNRECOGNIZED */;
  }
}
function fieldOptions_CTypeToJSON(object) {
  switch (object) {
    case 0 /* STRING */:
      return "STRING";
    case 1 /* CORD */:
      return "CORD";
    case 2 /* STRING_PIECE */:
      return "STRING_PIECE";
    case -1 /* UNRECOGNIZED */:
    default:
      return "UNRECOGNIZED";
  }
}
var FieldOptions_JSType = /* @__PURE__ */ ((FieldOptions_JSType2) => {
  FieldOptions_JSType2[FieldOptions_JSType2["JS_NORMAL"] = 0] = "JS_NORMAL";
  FieldOptions_JSType2[FieldOptions_JSType2["JS_STRING"] = 1] = "JS_STRING";
  FieldOptions_JSType2[FieldOptions_JSType2["JS_NUMBER"] = 2] = "JS_NUMBER";
  FieldOptions_JSType2[FieldOptions_JSType2["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return FieldOptions_JSType2;
})(FieldOptions_JSType || {});
const FieldOptions_JSTypeSDKType = FieldOptions_JSType;
const FieldOptions_JSTypeAmino = FieldOptions_JSType;
function fieldOptions_JSTypeFromJSON(object) {
  switch (object) {
    case 0:
    case "JS_NORMAL":
      return 0 /* JS_NORMAL */;
    case 1:
    case "JS_STRING":
      return 1 /* JS_STRING */;
    case 2:
    case "JS_NUMBER":
      return 2 /* JS_NUMBER */;
    case -1:
    case "UNRECOGNIZED":
    default:
      return -1 /* UNRECOGNIZED */;
  }
}
function fieldOptions_JSTypeToJSON(object) {
  switch (object) {
    case 0 /* JS_NORMAL */:
      return "JS_NORMAL";
    case 1 /* JS_STRING */:
      return "JS_STRING";
    case 2 /* JS_NUMBER */:
      return "JS_NUMBER";
    case -1 /* UNRECOGNIZED */:
    default:
      return "UNRECOGNIZED";
  }
}
var MethodOptions_IdempotencyLevel = /* @__PURE__ */ ((MethodOptions_IdempotencyLevel2) => {
  MethodOptions_IdempotencyLevel2[MethodOptions_IdempotencyLevel2["IDEMPOTENCY_UNKNOWN"] = 0] = "IDEMPOTENCY_UNKNOWN";
  MethodOptions_IdempotencyLevel2[MethodOptions_IdempotencyLevel2["NO_SIDE_EFFECTS"] = 1] = "NO_SIDE_EFFECTS";
  MethodOptions_IdempotencyLevel2[MethodOptions_IdempotencyLevel2["IDEMPOTENT"] = 2] = "IDEMPOTENT";
  MethodOptions_IdempotencyLevel2[MethodOptions_IdempotencyLevel2["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return MethodOptions_IdempotencyLevel2;
})(MethodOptions_IdempotencyLevel || {});
const MethodOptions_IdempotencyLevelSDKType = MethodOptions_IdempotencyLevel;
const MethodOptions_IdempotencyLevelAmino = MethodOptions_IdempotencyLevel;
function methodOptions_IdempotencyLevelFromJSON(object) {
  switch (object) {
    case 0:
    case "IDEMPOTENCY_UNKNOWN":
      return 0 /* IDEMPOTENCY_UNKNOWN */;
    case 1:
    case "NO_SIDE_EFFECTS":
      return 1 /* NO_SIDE_EFFECTS */;
    case 2:
    case "IDEMPOTENT":
      return 2 /* IDEMPOTENT */;
    case -1:
    case "UNRECOGNIZED":
    default:
      return -1 /* UNRECOGNIZED */;
  }
}
function methodOptions_IdempotencyLevelToJSON(object) {
  switch (object) {
    case 0 /* IDEMPOTENCY_UNKNOWN */:
      return "IDEMPOTENCY_UNKNOWN";
    case 1 /* NO_SIDE_EFFECTS */:
      return "NO_SIDE_EFFECTS";
    case 2 /* IDEMPOTENT */:
      return "IDEMPOTENT";
    case -1 /* UNRECOGNIZED */:
    default:
      return "UNRECOGNIZED";
  }
}
function createBaseFileDescriptorSet() {
  return {
    file: []
  };
}
const FileDescriptorSet = {
  typeUrl: "/google.protobuf.FileDescriptorSet",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    for (const v of message.file) {
      FileDescriptorProto.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseFileDescriptorSet();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.file.push(FileDescriptorProto.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseFileDescriptorSet();
    message.file = object.file?.map((e) => FileDescriptorProto.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseFileDescriptorSet();
    message.file = object.file?.map((e) => FileDescriptorProto.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.file) {
      obj.file = message.file.map((e) => e ? FileDescriptorProto.toAmino(e) : void 0);
    } else {
      obj.file = message.file;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return FileDescriptorSet.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return FileDescriptorSet.decode(message.value);
  },
  toProto(message) {
    return FileDescriptorSet.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/google.protobuf.FileDescriptorSet",
      value: FileDescriptorSet.encode(message).finish()
    };
  }
};
function createBaseFileDescriptorProto() {
  return {
    name: "",
    package: "",
    dependency: [],
    publicDependency: [],
    weakDependency: [],
    messageType: [],
    enumType: [],
    service: [],
    extension: [],
    options: void 0,
    sourceCodeInfo: void 0,
    syntax: ""
  };
}
const FileDescriptorProto = {
  typeUrl: "/google.protobuf.FileDescriptorProto",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.package !== "") {
      writer.uint32(18).string(message.package);
    }
    for (const v of message.dependency) {
      writer.uint32(26).string(v);
    }
    writer.uint32(82).fork();
    for (const v of message.publicDependency) {
      writer.int32(v);
    }
    writer.ldelim();
    writer.uint32(90).fork();
    for (const v of message.weakDependency) {
      writer.int32(v);
    }
    writer.ldelim();
    for (const v of message.messageType) {
      DescriptorProto.encode(v, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.enumType) {
      EnumDescriptorProto.encode(v, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.service) {
      ServiceDescriptorProto.encode(v, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.extension) {
      FieldDescriptorProto.encode(v, writer.uint32(58).fork()).ldelim();
    }
    if (message.options !== void 0) {
      FileOptions.encode(message.options, writer.uint32(66).fork()).ldelim();
    }
    if (message.sourceCodeInfo !== void 0) {
      SourceCodeInfo.encode(message.sourceCodeInfo, writer.uint32(74).fork()).ldelim();
    }
    if (message.syntax !== "") {
      writer.uint32(98).string(message.syntax);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseFileDescriptorProto();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.package = reader.string();
          break;
        case 3:
          message.dependency.push(reader.string());
          break;
        case 10:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.publicDependency.push(reader.int32());
            }
          } else {
            message.publicDependency.push(reader.int32());
          }
          break;
        case 11:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.weakDependency.push(reader.int32());
            }
          } else {
            message.weakDependency.push(reader.int32());
          }
          break;
        case 4:
          message.messageType.push(DescriptorProto.decode(reader, reader.uint32()));
          break;
        case 5:
          message.enumType.push(EnumDescriptorProto.decode(reader, reader.uint32()));
          break;
        case 6:
          message.service.push(ServiceDescriptorProto.decode(reader, reader.uint32()));
          break;
        case 7:
          message.extension.push(FieldDescriptorProto.decode(reader, reader.uint32()));
          break;
        case 8:
          message.options = FileOptions.decode(reader, reader.uint32());
          break;
        case 9:
          message.sourceCodeInfo = SourceCodeInfo.decode(reader, reader.uint32());
          break;
        case 12:
          message.syntax = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseFileDescriptorProto();
    message.name = object.name ?? "";
    message.package = object.package ?? "";
    message.dependency = object.dependency?.map((e) => e) || [];
    message.publicDependency = object.publicDependency?.map((e) => e) || [];
    message.weakDependency = object.weakDependency?.map((e) => e) || [];
    message.messageType = object.messageType?.map((e) => DescriptorProto.fromPartial(e)) || [];
    message.enumType = object.enumType?.map((e) => EnumDescriptorProto.fromPartial(e)) || [];
    message.service = object.service?.map((e) => ServiceDescriptorProto.fromPartial(e)) || [];
    message.extension = object.extension?.map((e) => FieldDescriptorProto.fromPartial(e)) || [];
    message.options = object.options !== void 0 && object.options !== null ? FileOptions.fromPartial(object.options) : void 0;
    message.sourceCodeInfo = object.sourceCodeInfo !== void 0 && object.sourceCodeInfo !== null ? SourceCodeInfo.fromPartial(object.sourceCodeInfo) : void 0;
    message.syntax = object.syntax ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseFileDescriptorProto();
    if (object.name !== void 0 && object.name !== null) {
      message.name = object.name;
    }
    if (object.package !== void 0 && object.package !== null) {
      message.package = object.package;
    }
    message.dependency = object.dependency?.map((e) => e) || [];
    message.publicDependency = object.public_dependency?.map((e) => e) || [];
    message.weakDependency = object.weak_dependency?.map((e) => e) || [];
    message.messageType = object.message_type?.map((e) => DescriptorProto.fromAmino(e)) || [];
    message.enumType = object.enum_type?.map((e) => EnumDescriptorProto.fromAmino(e)) || [];
    message.service = object.service?.map((e) => ServiceDescriptorProto.fromAmino(e)) || [];
    message.extension = object.extension?.map((e) => FieldDescriptorProto.fromAmino(e)) || [];
    if (object.options !== void 0 && object.options !== null) {
      message.options = FileOptions.fromAmino(object.options);
    }
    if (object.source_code_info !== void 0 && object.source_code_info !== null) {
      message.sourceCodeInfo = SourceCodeInfo.fromAmino(object.source_code_info);
    }
    if (object.syntax !== void 0 && object.syntax !== null) {
      message.syntax = object.syntax;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.name = message.name === "" ? void 0 : message.name;
    obj.package = message.package === "" ? void 0 : message.package;
    if (message.dependency) {
      obj.dependency = message.dependency.map((e) => e);
    } else {
      obj.dependency = message.dependency;
    }
    if (message.publicDependency) {
      obj.public_dependency = message.publicDependency.map((e) => e);
    } else {
      obj.public_dependency = message.publicDependency;
    }
    if (message.weakDependency) {
      obj.weak_dependency = message.weakDependency.map((e) => e);
    } else {
      obj.weak_dependency = message.weakDependency;
    }
    if (message.messageType) {
      obj.message_type = message.messageType.map((e) => e ? DescriptorProto.toAmino(e) : void 0);
    } else {
      obj.message_type = message.messageType;
    }
    if (message.enumType) {
      obj.enum_type = message.enumType.map((e) => e ? EnumDescriptorProto.toAmino(e) : void 0);
    } else {
      obj.enum_type = message.enumType;
    }
    if (message.service) {
      obj.service = message.service.map((e) => e ? ServiceDescriptorProto.toAmino(e) : void 0);
    } else {
      obj.service = message.service;
    }
    if (message.extension) {
      obj.extension = message.extension.map((e) => e ? FieldDescriptorProto.toAmino(e) : void 0);
    } else {
      obj.extension = message.extension;
    }
    obj.options = message.options ? FileOptions.toAmino(message.options) : void 0;
    obj.source_code_info = message.sourceCodeInfo ? SourceCodeInfo.toAmino(message.sourceCodeInfo) : void 0;
    obj.syntax = message.syntax === "" ? void 0 : message.syntax;
    return obj;
  },
  fromAminoMsg(object) {
    return FileDescriptorProto.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return FileDescriptorProto.decode(message.value);
  },
  toProto(message) {
    return FileDescriptorProto.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/google.protobuf.FileDescriptorProto",
      value: FileDescriptorProto.encode(message).finish()
    };
  }
};
function createBaseDescriptorProto() {
  return {
    name: "",
    field: [],
    extension: [],
    nestedType: [],
    enumType: [],
    extensionRange: [],
    oneofDecl: [],
    options: void 0,
    reservedRange: [],
    reservedName: []
  };
}
const DescriptorProto = {
  typeUrl: "/google.protobuf.DescriptorProto",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    for (const v of message.field) {
      FieldDescriptorProto.encode(v, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.extension) {
      FieldDescriptorProto.encode(v, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.nestedType) {
      DescriptorProto.encode(v, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.enumType) {
      EnumDescriptorProto.encode(v, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.extensionRange) {
      DescriptorProto_ExtensionRange.encode(v, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.oneofDecl) {
      OneofDescriptorProto.encode(v, writer.uint32(66).fork()).ldelim();
    }
    if (message.options !== void 0) {
      MessageOptions.encode(message.options, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.reservedRange) {
      DescriptorProto_ReservedRange.encode(v, writer.uint32(74).fork()).ldelim();
    }
    for (const v of message.reservedName) {
      writer.uint32(82).string(v);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseDescriptorProto();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.field.push(FieldDescriptorProto.decode(reader, reader.uint32()));
          break;
        case 6:
          message.extension.push(FieldDescriptorProto.decode(reader, reader.uint32()));
          break;
        case 3:
          message.nestedType.push(DescriptorProto.decode(reader, reader.uint32()));
          break;
        case 4:
          message.enumType.push(EnumDescriptorProto.decode(reader, reader.uint32()));
          break;
        case 5:
          message.extensionRange.push(DescriptorProto_ExtensionRange.decode(reader, reader.uint32()));
          break;
        case 8:
          message.oneofDecl.push(OneofDescriptorProto.decode(reader, reader.uint32()));
          break;
        case 7:
          message.options = MessageOptions.decode(reader, reader.uint32());
          break;
        case 9:
          message.reservedRange.push(DescriptorProto_ReservedRange.decode(reader, reader.uint32()));
          break;
        case 10:
          message.reservedName.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseDescriptorProto();
    message.name = object.name ?? "";
    message.field = object.field?.map((e) => FieldDescriptorProto.fromPartial(e)) || [];
    message.extension = object.extension?.map((e) => FieldDescriptorProto.fromPartial(e)) || [];
    message.nestedType = object.nestedType?.map((e) => DescriptorProto.fromPartial(e)) || [];
    message.enumType = object.enumType?.map((e) => EnumDescriptorProto.fromPartial(e)) || [];
    message.extensionRange = object.extensionRange?.map((e) => DescriptorProto_ExtensionRange.fromPartial(e)) || [];
    message.oneofDecl = object.oneofDecl?.map((e) => OneofDescriptorProto.fromPartial(e)) || [];
    message.options = object.options !== void 0 && object.options !== null ? MessageOptions.fromPartial(object.options) : void 0;
    message.reservedRange = object.reservedRange?.map((e) => DescriptorProto_ReservedRange.fromPartial(e)) || [];
    message.reservedName = object.reservedName?.map((e) => e) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseDescriptorProto();
    if (object.name !== void 0 && object.name !== null) {
      message.name = object.name;
    }
    message.field = object.field?.map((e) => FieldDescriptorProto.fromAmino(e)) || [];
    message.extension = object.extension?.map((e) => FieldDescriptorProto.fromAmino(e)) || [];
    message.nestedType = object.nested_type?.map((e) => DescriptorProto.fromAmino(e)) || [];
    message.enumType = object.enum_type?.map((e) => EnumDescriptorProto.fromAmino(e)) || [];
    message.extensionRange = object.extension_range?.map((e) => DescriptorProto_ExtensionRange.fromAmino(e)) || [];
    message.oneofDecl = object.oneof_decl?.map((e) => OneofDescriptorProto.fromAmino(e)) || [];
    if (object.options !== void 0 && object.options !== null) {
      message.options = MessageOptions.fromAmino(object.options);
    }
    message.reservedRange = object.reserved_range?.map((e) => DescriptorProto_ReservedRange.fromAmino(e)) || [];
    message.reservedName = object.reserved_name?.map((e) => e) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.name = message.name === "" ? void 0 : message.name;
    if (message.field) {
      obj.field = message.field.map((e) => e ? FieldDescriptorProto.toAmino(e) : void 0);
    } else {
      obj.field = message.field;
    }
    if (message.extension) {
      obj.extension = message.extension.map((e) => e ? FieldDescriptorProto.toAmino(e) : void 0);
    } else {
      obj.extension = message.extension;
    }
    if (message.nestedType) {
      obj.nested_type = message.nestedType.map((e) => e ? DescriptorProto.toAmino(e) : void 0);
    } else {
      obj.nested_type = message.nestedType;
    }
    if (message.enumType) {
      obj.enum_type = message.enumType.map((e) => e ? EnumDescriptorProto.toAmino(e) : void 0);
    } else {
      obj.enum_type = message.enumType;
    }
    if (message.extensionRange) {
      obj.extension_range = message.extensionRange.map((e) => e ? DescriptorProto_ExtensionRange.toAmino(e) : void 0);
    } else {
      obj.extension_range = message.extensionRange;
    }
    if (message.oneofDecl) {
      obj.oneof_decl = message.oneofDecl.map((e) => e ? OneofDescriptorProto.toAmino(e) : void 0);
    } else {
      obj.oneof_decl = message.oneofDecl;
    }
    obj.options = message.options ? MessageOptions.toAmino(message.options) : void 0;
    if (message.reservedRange) {
      obj.reserved_range = message.reservedRange.map((e) => e ? DescriptorProto_ReservedRange.toAmino(e) : void 0);
    } else {
      obj.reserved_range = message.reservedRange;
    }
    if (message.reservedName) {
      obj.reserved_name = message.reservedName.map((e) => e);
    } else {
      obj.reserved_name = message.reservedName;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return DescriptorProto.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return DescriptorProto.decode(message.value);
  },
  toProto(message) {
    return DescriptorProto.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/google.protobuf.DescriptorProto",
      value: DescriptorProto.encode(message).finish()
    };
  }
};
function createBaseDescriptorProto_ExtensionRange() {
  return {
    start: 0,
    end: 0,
    options: void 0
  };
}
const DescriptorProto_ExtensionRange = {
  typeUrl: "/google.protobuf.ExtensionRange",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.start !== 0) {
      writer.uint32(8).int32(message.start);
    }
    if (message.end !== 0) {
      writer.uint32(16).int32(message.end);
    }
    if (message.options !== void 0) {
      ExtensionRangeOptions.encode(message.options, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseDescriptorProto_ExtensionRange();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.start = reader.int32();
          break;
        case 2:
          message.end = reader.int32();
          break;
        case 3:
          message.options = ExtensionRangeOptions.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseDescriptorProto_ExtensionRange();
    message.start = object.start ?? 0;
    message.end = object.end ?? 0;
    message.options = object.options !== void 0 && object.options !== null ? ExtensionRangeOptions.fromPartial(object.options) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseDescriptorProto_ExtensionRange();
    if (object.start !== void 0 && object.start !== null) {
      message.start = object.start;
    }
    if (object.end !== void 0 && object.end !== null) {
      message.end = object.end;
    }
    if (object.options !== void 0 && object.options !== null) {
      message.options = ExtensionRangeOptions.fromAmino(object.options);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.start = message.start === 0 ? void 0 : message.start;
    obj.end = message.end === 0 ? void 0 : message.end;
    obj.options = message.options ? ExtensionRangeOptions.toAmino(message.options) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return DescriptorProto_ExtensionRange.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return DescriptorProto_ExtensionRange.decode(message.value);
  },
  toProto(message) {
    return DescriptorProto_ExtensionRange.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/google.protobuf.ExtensionRange",
      value: DescriptorProto_ExtensionRange.encode(message).finish()
    };
  }
};
function createBaseDescriptorProto_ReservedRange() {
  return {
    start: 0,
    end: 0
  };
}
const DescriptorProto_ReservedRange = {
  typeUrl: "/google.protobuf.ReservedRange",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.start !== 0) {
      writer.uint32(8).int32(message.start);
    }
    if (message.end !== 0) {
      writer.uint32(16).int32(message.end);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseDescriptorProto_ReservedRange();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.start = reader.int32();
          break;
        case 2:
          message.end = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseDescriptorProto_ReservedRange();
    message.start = object.start ?? 0;
    message.end = object.end ?? 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseDescriptorProto_ReservedRange();
    if (object.start !== void 0 && object.start !== null) {
      message.start = object.start;
    }
    if (object.end !== void 0 && object.end !== null) {
      message.end = object.end;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.start = message.start === 0 ? void 0 : message.start;
    obj.end = message.end === 0 ? void 0 : message.end;
    return obj;
  },
  fromAminoMsg(object) {
    return DescriptorProto_ReservedRange.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return DescriptorProto_ReservedRange.decode(message.value);
  },
  toProto(message) {
    return DescriptorProto_ReservedRange.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/google.protobuf.ReservedRange",
      value: DescriptorProto_ReservedRange.encode(message).finish()
    };
  }
};
function createBaseExtensionRangeOptions() {
  return {
    uninterpretedOption: []
  };
}
const ExtensionRangeOptions = {
  typeUrl: "/google.protobuf.ExtensionRangeOptions",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    for (const v of message.uninterpretedOption) {
      UninterpretedOption.encode(v, writer.uint32(7994).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseExtensionRangeOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 999:
          message.uninterpretedOption.push(UninterpretedOption.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseExtensionRangeOptions();
    message.uninterpretedOption = object.uninterpretedOption?.map((e) => UninterpretedOption.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseExtensionRangeOptions();
    message.uninterpretedOption = object.uninterpreted_option?.map((e) => UninterpretedOption.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.uninterpretedOption) {
      obj.uninterpreted_option = message.uninterpretedOption.map((e) => e ? UninterpretedOption.toAmino(e) : void 0);
    } else {
      obj.uninterpreted_option = message.uninterpretedOption;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return ExtensionRangeOptions.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return ExtensionRangeOptions.decode(message.value);
  },
  toProto(message) {
    return ExtensionRangeOptions.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/google.protobuf.ExtensionRangeOptions",
      value: ExtensionRangeOptions.encode(message).finish()
    };
  }
};
function createBaseFieldDescriptorProto() {
  return {
    name: "",
    number: 0,
    label: 1,
    type: 1,
    typeName: "",
    extendee: "",
    defaultValue: "",
    oneofIndex: 0,
    jsonName: "",
    options: void 0
  };
}
const FieldDescriptorProto = {
  typeUrl: "/google.protobuf.FieldDescriptorProto",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.number !== 0) {
      writer.uint32(24).int32(message.number);
    }
    if (message.label !== 1) {
      writer.uint32(32).int32(message.label);
    }
    if (message.type !== 1) {
      writer.uint32(40).int32(message.type);
    }
    if (message.typeName !== "") {
      writer.uint32(50).string(message.typeName);
    }
    if (message.extendee !== "") {
      writer.uint32(18).string(message.extendee);
    }
    if (message.defaultValue !== "") {
      writer.uint32(58).string(message.defaultValue);
    }
    if (message.oneofIndex !== 0) {
      writer.uint32(72).int32(message.oneofIndex);
    }
    if (message.jsonName !== "") {
      writer.uint32(82).string(message.jsonName);
    }
    if (message.options !== void 0) {
      FieldOptions.encode(message.options, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseFieldDescriptorProto();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 3:
          message.number = reader.int32();
          break;
        case 4:
          message.label = reader.int32();
          break;
        case 5:
          message.type = reader.int32();
          break;
        case 6:
          message.typeName = reader.string();
          break;
        case 2:
          message.extendee = reader.string();
          break;
        case 7:
          message.defaultValue = reader.string();
          break;
        case 9:
          message.oneofIndex = reader.int32();
          break;
        case 10:
          message.jsonName = reader.string();
          break;
        case 8:
          message.options = FieldOptions.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseFieldDescriptorProto();
    message.name = object.name ?? "";
    message.number = object.number ?? 0;
    message.label = object.label ?? 1;
    message.type = object.type ?? 1;
    message.typeName = object.typeName ?? "";
    message.extendee = object.extendee ?? "";
    message.defaultValue = object.defaultValue ?? "";
    message.oneofIndex = object.oneofIndex ?? 0;
    message.jsonName = object.jsonName ?? "";
    message.options = object.options !== void 0 && object.options !== null ? FieldOptions.fromPartial(object.options) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseFieldDescriptorProto();
    if (object.name !== void 0 && object.name !== null) {
      message.name = object.name;
    }
    if (object.number !== void 0 && object.number !== null) {
      message.number = object.number;
    }
    if (object.label !== void 0 && object.label !== null) {
      message.label = object.label;
    }
    if (object.type !== void 0 && object.type !== null) {
      message.type = object.type;
    }
    if (object.type_name !== void 0 && object.type_name !== null) {
      message.typeName = object.type_name;
    }
    if (object.extendee !== void 0 && object.extendee !== null) {
      message.extendee = object.extendee;
    }
    if (object.default_value !== void 0 && object.default_value !== null) {
      message.defaultValue = object.default_value;
    }
    if (object.oneof_index !== void 0 && object.oneof_index !== null) {
      message.oneofIndex = object.oneof_index;
    }
    if (object.json_name !== void 0 && object.json_name !== null) {
      message.jsonName = object.json_name;
    }
    if (object.options !== void 0 && object.options !== null) {
      message.options = FieldOptions.fromAmino(object.options);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.name = message.name === "" ? void 0 : message.name;
    obj.number = message.number === 0 ? void 0 : message.number;
    obj.label = message.label === 1 ? void 0 : message.label;
    obj.type = message.type === 1 ? void 0 : message.type;
    obj.type_name = message.typeName === "" ? void 0 : message.typeName;
    obj.extendee = message.extendee === "" ? void 0 : message.extendee;
    obj.default_value = message.defaultValue === "" ? void 0 : message.defaultValue;
    obj.oneof_index = message.oneofIndex === 0 ? void 0 : message.oneofIndex;
    obj.json_name = message.jsonName === "" ? void 0 : message.jsonName;
    obj.options = message.options ? FieldOptions.toAmino(message.options) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return FieldDescriptorProto.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return FieldDescriptorProto.decode(message.value);
  },
  toProto(message) {
    return FieldDescriptorProto.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/google.protobuf.FieldDescriptorProto",
      value: FieldDescriptorProto.encode(message).finish()
    };
  }
};
function createBaseOneofDescriptorProto() {
  return {
    name: "",
    options: void 0
  };
}
const OneofDescriptorProto = {
  typeUrl: "/google.protobuf.OneofDescriptorProto",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.options !== void 0) {
      OneofOptions.encode(message.options, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseOneofDescriptorProto();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.options = OneofOptions.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseOneofDescriptorProto();
    message.name = object.name ?? "";
    message.options = object.options !== void 0 && object.options !== null ? OneofOptions.fromPartial(object.options) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseOneofDescriptorProto();
    if (object.name !== void 0 && object.name !== null) {
      message.name = object.name;
    }
    if (object.options !== void 0 && object.options !== null) {
      message.options = OneofOptions.fromAmino(object.options);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.name = message.name === "" ? void 0 : message.name;
    obj.options = message.options ? OneofOptions.toAmino(message.options) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return OneofDescriptorProto.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return OneofDescriptorProto.decode(message.value);
  },
  toProto(message) {
    return OneofDescriptorProto.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/google.protobuf.OneofDescriptorProto",
      value: OneofDescriptorProto.encode(message).finish()
    };
  }
};
function createBaseEnumDescriptorProto() {
  return {
    name: "",
    value: [],
    options: void 0,
    reservedRange: [],
    reservedName: []
  };
}
const EnumDescriptorProto = {
  typeUrl: "/google.protobuf.EnumDescriptorProto",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    for (const v of message.value) {
      EnumValueDescriptorProto.encode(v, writer.uint32(18).fork()).ldelim();
    }
    if (message.options !== void 0) {
      EnumOptions.encode(message.options, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.reservedRange) {
      EnumDescriptorProto_EnumReservedRange.encode(v, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.reservedName) {
      writer.uint32(42).string(v);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseEnumDescriptorProto();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.value.push(EnumValueDescriptorProto.decode(reader, reader.uint32()));
          break;
        case 3:
          message.options = EnumOptions.decode(reader, reader.uint32());
          break;
        case 4:
          message.reservedRange.push(EnumDescriptorProto_EnumReservedRange.decode(reader, reader.uint32()));
          break;
        case 5:
          message.reservedName.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseEnumDescriptorProto();
    message.name = object.name ?? "";
    message.value = object.value?.map((e) => EnumValueDescriptorProto.fromPartial(e)) || [];
    message.options = object.options !== void 0 && object.options !== null ? EnumOptions.fromPartial(object.options) : void 0;
    message.reservedRange = object.reservedRange?.map((e) => EnumDescriptorProto_EnumReservedRange.fromPartial(e)) || [];
    message.reservedName = object.reservedName?.map((e) => e) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseEnumDescriptorProto();
    if (object.name !== void 0 && object.name !== null) {
      message.name = object.name;
    }
    message.value = object.value?.map((e) => EnumValueDescriptorProto.fromAmino(e)) || [];
    if (object.options !== void 0 && object.options !== null) {
      message.options = EnumOptions.fromAmino(object.options);
    }
    message.reservedRange = object.reserved_range?.map((e) => EnumDescriptorProto_EnumReservedRange.fromAmino(e)) || [];
    message.reservedName = object.reserved_name?.map((e) => e) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.name = message.name === "" ? void 0 : message.name;
    if (message.value) {
      obj.value = message.value.map((e) => e ? EnumValueDescriptorProto.toAmino(e) : void 0);
    } else {
      obj.value = message.value;
    }
    obj.options = message.options ? EnumOptions.toAmino(message.options) : void 0;
    if (message.reservedRange) {
      obj.reserved_range = message.reservedRange.map((e) => e ? EnumDescriptorProto_EnumReservedRange.toAmino(e) : void 0);
    } else {
      obj.reserved_range = message.reservedRange;
    }
    if (message.reservedName) {
      obj.reserved_name = message.reservedName.map((e) => e);
    } else {
      obj.reserved_name = message.reservedName;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return EnumDescriptorProto.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return EnumDescriptorProto.decode(message.value);
  },
  toProto(message) {
    return EnumDescriptorProto.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/google.protobuf.EnumDescriptorProto",
      value: EnumDescriptorProto.encode(message).finish()
    };
  }
};
function createBaseEnumDescriptorProto_EnumReservedRange() {
  return {
    start: 0,
    end: 0
  };
}
const EnumDescriptorProto_EnumReservedRange = {
  typeUrl: "/google.protobuf.EnumReservedRange",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.start !== 0) {
      writer.uint32(8).int32(message.start);
    }
    if (message.end !== 0) {
      writer.uint32(16).int32(message.end);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseEnumDescriptorProto_EnumReservedRange();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.start = reader.int32();
          break;
        case 2:
          message.end = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseEnumDescriptorProto_EnumReservedRange();
    message.start = object.start ?? 0;
    message.end = object.end ?? 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseEnumDescriptorProto_EnumReservedRange();
    if (object.start !== void 0 && object.start !== null) {
      message.start = object.start;
    }
    if (object.end !== void 0 && object.end !== null) {
      message.end = object.end;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.start = message.start === 0 ? void 0 : message.start;
    obj.end = message.end === 0 ? void 0 : message.end;
    return obj;
  },
  fromAminoMsg(object) {
    return EnumDescriptorProto_EnumReservedRange.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return EnumDescriptorProto_EnumReservedRange.decode(message.value);
  },
  toProto(message) {
    return EnumDescriptorProto_EnumReservedRange.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/google.protobuf.EnumReservedRange",
      value: EnumDescriptorProto_EnumReservedRange.encode(message).finish()
    };
  }
};
function createBaseEnumValueDescriptorProto() {
  return {
    name: "",
    number: 0,
    options: void 0
  };
}
const EnumValueDescriptorProto = {
  typeUrl: "/google.protobuf.EnumValueDescriptorProto",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.number !== 0) {
      writer.uint32(16).int32(message.number);
    }
    if (message.options !== void 0) {
      EnumValueOptions.encode(message.options, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseEnumValueDescriptorProto();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.number = reader.int32();
          break;
        case 3:
          message.options = EnumValueOptions.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseEnumValueDescriptorProto();
    message.name = object.name ?? "";
    message.number = object.number ?? 0;
    message.options = object.options !== void 0 && object.options !== null ? EnumValueOptions.fromPartial(object.options) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseEnumValueDescriptorProto();
    if (object.name !== void 0 && object.name !== null) {
      message.name = object.name;
    }
    if (object.number !== void 0 && object.number !== null) {
      message.number = object.number;
    }
    if (object.options !== void 0 && object.options !== null) {
      message.options = EnumValueOptions.fromAmino(object.options);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.name = message.name === "" ? void 0 : message.name;
    obj.number = message.number === 0 ? void 0 : message.number;
    obj.options = message.options ? EnumValueOptions.toAmino(message.options) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return EnumValueDescriptorProto.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return EnumValueDescriptorProto.decode(message.value);
  },
  toProto(message) {
    return EnumValueDescriptorProto.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/google.protobuf.EnumValueDescriptorProto",
      value: EnumValueDescriptorProto.encode(message).finish()
    };
  }
};
function createBaseServiceDescriptorProto() {
  return {
    name: "",
    method: [],
    options: void 0
  };
}
const ServiceDescriptorProto = {
  typeUrl: "/google.protobuf.ServiceDescriptorProto",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    for (const v of message.method) {
      MethodDescriptorProto.encode(v, writer.uint32(18).fork()).ldelim();
    }
    if (message.options !== void 0) {
      ServiceOptions.encode(message.options, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseServiceDescriptorProto();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.method.push(MethodDescriptorProto.decode(reader, reader.uint32()));
          break;
        case 3:
          message.options = ServiceOptions.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseServiceDescriptorProto();
    message.name = object.name ?? "";
    message.method = object.method?.map((e) => MethodDescriptorProto.fromPartial(e)) || [];
    message.options = object.options !== void 0 && object.options !== null ? ServiceOptions.fromPartial(object.options) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseServiceDescriptorProto();
    if (object.name !== void 0 && object.name !== null) {
      message.name = object.name;
    }
    message.method = object.method?.map((e) => MethodDescriptorProto.fromAmino(e)) || [];
    if (object.options !== void 0 && object.options !== null) {
      message.options = ServiceOptions.fromAmino(object.options);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.name = message.name === "" ? void 0 : message.name;
    if (message.method) {
      obj.method = message.method.map((e) => e ? MethodDescriptorProto.toAmino(e) : void 0);
    } else {
      obj.method = message.method;
    }
    obj.options = message.options ? ServiceOptions.toAmino(message.options) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return ServiceDescriptorProto.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return ServiceDescriptorProto.decode(message.value);
  },
  toProto(message) {
    return ServiceDescriptorProto.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/google.protobuf.ServiceDescriptorProto",
      value: ServiceDescriptorProto.encode(message).finish()
    };
  }
};
function createBaseMethodDescriptorProto() {
  return {
    name: "",
    inputType: "",
    outputType: "",
    options: void 0,
    clientStreaming: false,
    serverStreaming: false
  };
}
const MethodDescriptorProto = {
  typeUrl: "/google.protobuf.MethodDescriptorProto",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.inputType !== "") {
      writer.uint32(18).string(message.inputType);
    }
    if (message.outputType !== "") {
      writer.uint32(26).string(message.outputType);
    }
    if (message.options !== void 0) {
      MethodOptions.encode(message.options, writer.uint32(34).fork()).ldelim();
    }
    if (message.clientStreaming === true) {
      writer.uint32(40).bool(message.clientStreaming);
    }
    if (message.serverStreaming === true) {
      writer.uint32(48).bool(message.serverStreaming);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMethodDescriptorProto();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.inputType = reader.string();
          break;
        case 3:
          message.outputType = reader.string();
          break;
        case 4:
          message.options = MethodOptions.decode(reader, reader.uint32());
          break;
        case 5:
          message.clientStreaming = reader.bool();
          break;
        case 6:
          message.serverStreaming = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMethodDescriptorProto();
    message.name = object.name ?? "";
    message.inputType = object.inputType ?? "";
    message.outputType = object.outputType ?? "";
    message.options = object.options !== void 0 && object.options !== null ? MethodOptions.fromPartial(object.options) : void 0;
    message.clientStreaming = object.clientStreaming ?? false;
    message.serverStreaming = object.serverStreaming ?? false;
    return message;
  },
  fromAmino(object) {
    const message = createBaseMethodDescriptorProto();
    if (object.name !== void 0 && object.name !== null) {
      message.name = object.name;
    }
    if (object.input_type !== void 0 && object.input_type !== null) {
      message.inputType = object.input_type;
    }
    if (object.output_type !== void 0 && object.output_type !== null) {
      message.outputType = object.output_type;
    }
    if (object.options !== void 0 && object.options !== null) {
      message.options = MethodOptions.fromAmino(object.options);
    }
    if (object.client_streaming !== void 0 && object.client_streaming !== null) {
      message.clientStreaming = object.client_streaming;
    }
    if (object.server_streaming !== void 0 && object.server_streaming !== null) {
      message.serverStreaming = object.server_streaming;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.name = message.name === "" ? void 0 : message.name;
    obj.input_type = message.inputType === "" ? void 0 : message.inputType;
    obj.output_type = message.outputType === "" ? void 0 : message.outputType;
    obj.options = message.options ? MethodOptions.toAmino(message.options) : void 0;
    obj.client_streaming = message.clientStreaming === false ? void 0 : message.clientStreaming;
    obj.server_streaming = message.serverStreaming === false ? void 0 : message.serverStreaming;
    return obj;
  },
  fromAminoMsg(object) {
    return MethodDescriptorProto.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return MethodDescriptorProto.decode(message.value);
  },
  toProto(message) {
    return MethodDescriptorProto.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/google.protobuf.MethodDescriptorProto",
      value: MethodDescriptorProto.encode(message).finish()
    };
  }
};
function createBaseFileOptions() {
  return {
    javaPackage: "",
    javaOuterClassname: "",
    javaMultipleFiles: false,
    javaGenerateEqualsAndHash: false,
    javaStringCheckUtf8: false,
    optimizeFor: 1,
    goPackage: "",
    ccGenericServices: false,
    javaGenericServices: false,
    pyGenericServices: false,
    phpGenericServices: false,
    deprecated: false,
    ccEnableArenas: false,
    objcClassPrefix: "",
    csharpNamespace: "",
    swiftPrefix: "",
    phpClassPrefix: "",
    phpNamespace: "",
    phpMetadataNamespace: "",
    rubyPackage: "",
    uninterpretedOption: []
  };
}
const FileOptions = {
  typeUrl: "/google.protobuf.FileOptions",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.javaPackage !== "") {
      writer.uint32(10).string(message.javaPackage);
    }
    if (message.javaOuterClassname !== "") {
      writer.uint32(66).string(message.javaOuterClassname);
    }
    if (message.javaMultipleFiles === true) {
      writer.uint32(80).bool(message.javaMultipleFiles);
    }
    if (message.javaGenerateEqualsAndHash === true) {
      writer.uint32(160).bool(message.javaGenerateEqualsAndHash);
    }
    if (message.javaStringCheckUtf8 === true) {
      writer.uint32(216).bool(message.javaStringCheckUtf8);
    }
    if (message.optimizeFor !== 1) {
      writer.uint32(72).int32(message.optimizeFor);
    }
    if (message.goPackage !== "") {
      writer.uint32(90).string(message.goPackage);
    }
    if (message.ccGenericServices === true) {
      writer.uint32(128).bool(message.ccGenericServices);
    }
    if (message.javaGenericServices === true) {
      writer.uint32(136).bool(message.javaGenericServices);
    }
    if (message.pyGenericServices === true) {
      writer.uint32(144).bool(message.pyGenericServices);
    }
    if (message.phpGenericServices === true) {
      writer.uint32(336).bool(message.phpGenericServices);
    }
    if (message.deprecated === true) {
      writer.uint32(184).bool(message.deprecated);
    }
    if (message.ccEnableArenas === true) {
      writer.uint32(248).bool(message.ccEnableArenas);
    }
    if (message.objcClassPrefix !== "") {
      writer.uint32(290).string(message.objcClassPrefix);
    }
    if (message.csharpNamespace !== "") {
      writer.uint32(298).string(message.csharpNamespace);
    }
    if (message.swiftPrefix !== "") {
      writer.uint32(314).string(message.swiftPrefix);
    }
    if (message.phpClassPrefix !== "") {
      writer.uint32(322).string(message.phpClassPrefix);
    }
    if (message.phpNamespace !== "") {
      writer.uint32(330).string(message.phpNamespace);
    }
    if (message.phpMetadataNamespace !== "") {
      writer.uint32(354).string(message.phpMetadataNamespace);
    }
    if (message.rubyPackage !== "") {
      writer.uint32(362).string(message.rubyPackage);
    }
    for (const v of message.uninterpretedOption) {
      UninterpretedOption.encode(v, writer.uint32(7994).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseFileOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.javaPackage = reader.string();
          break;
        case 8:
          message.javaOuterClassname = reader.string();
          break;
        case 10:
          message.javaMultipleFiles = reader.bool();
          break;
        case 20:
          message.javaGenerateEqualsAndHash = reader.bool();
          break;
        case 27:
          message.javaStringCheckUtf8 = reader.bool();
          break;
        case 9:
          message.optimizeFor = reader.int32();
          break;
        case 11:
          message.goPackage = reader.string();
          break;
        case 16:
          message.ccGenericServices = reader.bool();
          break;
        case 17:
          message.javaGenericServices = reader.bool();
          break;
        case 18:
          message.pyGenericServices = reader.bool();
          break;
        case 42:
          message.phpGenericServices = reader.bool();
          break;
        case 23:
          message.deprecated = reader.bool();
          break;
        case 31:
          message.ccEnableArenas = reader.bool();
          break;
        case 36:
          message.objcClassPrefix = reader.string();
          break;
        case 37:
          message.csharpNamespace = reader.string();
          break;
        case 39:
          message.swiftPrefix = reader.string();
          break;
        case 40:
          message.phpClassPrefix = reader.string();
          break;
        case 41:
          message.phpNamespace = reader.string();
          break;
        case 44:
          message.phpMetadataNamespace = reader.string();
          break;
        case 45:
          message.rubyPackage = reader.string();
          break;
        case 999:
          message.uninterpretedOption.push(UninterpretedOption.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseFileOptions();
    message.javaPackage = object.javaPackage ?? "";
    message.javaOuterClassname = object.javaOuterClassname ?? "";
    message.javaMultipleFiles = object.javaMultipleFiles ?? false;
    message.javaGenerateEqualsAndHash = object.javaGenerateEqualsAndHash ?? false;
    message.javaStringCheckUtf8 = object.javaStringCheckUtf8 ?? false;
    message.optimizeFor = object.optimizeFor ?? 1;
    message.goPackage = object.goPackage ?? "";
    message.ccGenericServices = object.ccGenericServices ?? false;
    message.javaGenericServices = object.javaGenericServices ?? false;
    message.pyGenericServices = object.pyGenericServices ?? false;
    message.phpGenericServices = object.phpGenericServices ?? false;
    message.deprecated = object.deprecated ?? false;
    message.ccEnableArenas = object.ccEnableArenas ?? false;
    message.objcClassPrefix = object.objcClassPrefix ?? "";
    message.csharpNamespace = object.csharpNamespace ?? "";
    message.swiftPrefix = object.swiftPrefix ?? "";
    message.phpClassPrefix = object.phpClassPrefix ?? "";
    message.phpNamespace = object.phpNamespace ?? "";
    message.phpMetadataNamespace = object.phpMetadataNamespace ?? "";
    message.rubyPackage = object.rubyPackage ?? "";
    message.uninterpretedOption = object.uninterpretedOption?.map((e) => UninterpretedOption.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseFileOptions();
    if (object.java_package !== void 0 && object.java_package !== null) {
      message.javaPackage = object.java_package;
    }
    if (object.java_outer_classname !== void 0 && object.java_outer_classname !== null) {
      message.javaOuterClassname = object.java_outer_classname;
    }
    if (object.java_multiple_files !== void 0 && object.java_multiple_files !== null) {
      message.javaMultipleFiles = object.java_multiple_files;
    }
    if (object.java_generate_equals_and_hash !== void 0 && object.java_generate_equals_and_hash !== null) {
      message.javaGenerateEqualsAndHash = object.java_generate_equals_and_hash;
    }
    if (object.java_string_check_utf8 !== void 0 && object.java_string_check_utf8 !== null) {
      message.javaStringCheckUtf8 = object.java_string_check_utf8;
    }
    if (object.optimize_for !== void 0 && object.optimize_for !== null) {
      message.optimizeFor = object.optimize_for;
    }
    if (object.go_package !== void 0 && object.go_package !== null) {
      message.goPackage = object.go_package;
    }
    if (object.cc_generic_services !== void 0 && object.cc_generic_services !== null) {
      message.ccGenericServices = object.cc_generic_services;
    }
    if (object.java_generic_services !== void 0 && object.java_generic_services !== null) {
      message.javaGenericServices = object.java_generic_services;
    }
    if (object.py_generic_services !== void 0 && object.py_generic_services !== null) {
      message.pyGenericServices = object.py_generic_services;
    }
    if (object.php_generic_services !== void 0 && object.php_generic_services !== null) {
      message.phpGenericServices = object.php_generic_services;
    }
    if (object.deprecated !== void 0 && object.deprecated !== null) {
      message.deprecated = object.deprecated;
    }
    if (object.cc_enable_arenas !== void 0 && object.cc_enable_arenas !== null) {
      message.ccEnableArenas = object.cc_enable_arenas;
    }
    if (object.objc_class_prefix !== void 0 && object.objc_class_prefix !== null) {
      message.objcClassPrefix = object.objc_class_prefix;
    }
    if (object.csharp_namespace !== void 0 && object.csharp_namespace !== null) {
      message.csharpNamespace = object.csharp_namespace;
    }
    if (object.swift_prefix !== void 0 && object.swift_prefix !== null) {
      message.swiftPrefix = object.swift_prefix;
    }
    if (object.php_class_prefix !== void 0 && object.php_class_prefix !== null) {
      message.phpClassPrefix = object.php_class_prefix;
    }
    if (object.php_namespace !== void 0 && object.php_namespace !== null) {
      message.phpNamespace = object.php_namespace;
    }
    if (object.php_metadata_namespace !== void 0 && object.php_metadata_namespace !== null) {
      message.phpMetadataNamespace = object.php_metadata_namespace;
    }
    if (object.ruby_package !== void 0 && object.ruby_package !== null) {
      message.rubyPackage = object.ruby_package;
    }
    message.uninterpretedOption = object.uninterpreted_option?.map((e) => UninterpretedOption.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.java_package = message.javaPackage === "" ? void 0 : message.javaPackage;
    obj.java_outer_classname = message.javaOuterClassname === "" ? void 0 : message.javaOuterClassname;
    obj.java_multiple_files = message.javaMultipleFiles === false ? void 0 : message.javaMultipleFiles;
    obj.java_generate_equals_and_hash = message.javaGenerateEqualsAndHash === false ? void 0 : message.javaGenerateEqualsAndHash;
    obj.java_string_check_utf8 = message.javaStringCheckUtf8 === false ? void 0 : message.javaStringCheckUtf8;
    obj.optimize_for = message.optimizeFor === 1 ? void 0 : message.optimizeFor;
    obj.go_package = message.goPackage === "" ? void 0 : message.goPackage;
    obj.cc_generic_services = message.ccGenericServices === false ? void 0 : message.ccGenericServices;
    obj.java_generic_services = message.javaGenericServices === false ? void 0 : message.javaGenericServices;
    obj.py_generic_services = message.pyGenericServices === false ? void 0 : message.pyGenericServices;
    obj.php_generic_services = message.phpGenericServices === false ? void 0 : message.phpGenericServices;
    obj.deprecated = message.deprecated === false ? void 0 : message.deprecated;
    obj.cc_enable_arenas = message.ccEnableArenas === false ? void 0 : message.ccEnableArenas;
    obj.objc_class_prefix = message.objcClassPrefix === "" ? void 0 : message.objcClassPrefix;
    obj.csharp_namespace = message.csharpNamespace === "" ? void 0 : message.csharpNamespace;
    obj.swift_prefix = message.swiftPrefix === "" ? void 0 : message.swiftPrefix;
    obj.php_class_prefix = message.phpClassPrefix === "" ? void 0 : message.phpClassPrefix;
    obj.php_namespace = message.phpNamespace === "" ? void 0 : message.phpNamespace;
    obj.php_metadata_namespace = message.phpMetadataNamespace === "" ? void 0 : message.phpMetadataNamespace;
    obj.ruby_package = message.rubyPackage === "" ? void 0 : message.rubyPackage;
    if (message.uninterpretedOption) {
      obj.uninterpreted_option = message.uninterpretedOption.map((e) => e ? UninterpretedOption.toAmino(e) : void 0);
    } else {
      obj.uninterpreted_option = message.uninterpretedOption;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return FileOptions.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return FileOptions.decode(message.value);
  },
  toProto(message) {
    return FileOptions.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/google.protobuf.FileOptions",
      value: FileOptions.encode(message).finish()
    };
  }
};
function createBaseMessageOptions() {
  return {
    messageSetWireFormat: false,
    noStandardDescriptorAccessor: false,
    deprecated: false,
    mapEntry: false,
    uninterpretedOption: []
  };
}
const MessageOptions = {
  typeUrl: "/google.protobuf.MessageOptions",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.messageSetWireFormat === true) {
      writer.uint32(8).bool(message.messageSetWireFormat);
    }
    if (message.noStandardDescriptorAccessor === true) {
      writer.uint32(16).bool(message.noStandardDescriptorAccessor);
    }
    if (message.deprecated === true) {
      writer.uint32(24).bool(message.deprecated);
    }
    if (message.mapEntry === true) {
      writer.uint32(56).bool(message.mapEntry);
    }
    for (const v of message.uninterpretedOption) {
      UninterpretedOption.encode(v, writer.uint32(7994).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMessageOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.messageSetWireFormat = reader.bool();
          break;
        case 2:
          message.noStandardDescriptorAccessor = reader.bool();
          break;
        case 3:
          message.deprecated = reader.bool();
          break;
        case 7:
          message.mapEntry = reader.bool();
          break;
        case 999:
          message.uninterpretedOption.push(UninterpretedOption.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMessageOptions();
    message.messageSetWireFormat = object.messageSetWireFormat ?? false;
    message.noStandardDescriptorAccessor = object.noStandardDescriptorAccessor ?? false;
    message.deprecated = object.deprecated ?? false;
    message.mapEntry = object.mapEntry ?? false;
    message.uninterpretedOption = object.uninterpretedOption?.map((e) => UninterpretedOption.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseMessageOptions();
    if (object.message_set_wire_format !== void 0 && object.message_set_wire_format !== null) {
      message.messageSetWireFormat = object.message_set_wire_format;
    }
    if (object.no_standard_descriptor_accessor !== void 0 && object.no_standard_descriptor_accessor !== null) {
      message.noStandardDescriptorAccessor = object.no_standard_descriptor_accessor;
    }
    if (object.deprecated !== void 0 && object.deprecated !== null) {
      message.deprecated = object.deprecated;
    }
    if (object.map_entry !== void 0 && object.map_entry !== null) {
      message.mapEntry = object.map_entry;
    }
    message.uninterpretedOption = object.uninterpreted_option?.map((e) => UninterpretedOption.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.message_set_wire_format = message.messageSetWireFormat === false ? void 0 : message.messageSetWireFormat;
    obj.no_standard_descriptor_accessor = message.noStandardDescriptorAccessor === false ? void 0 : message.noStandardDescriptorAccessor;
    obj.deprecated = message.deprecated === false ? void 0 : message.deprecated;
    obj.map_entry = message.mapEntry === false ? void 0 : message.mapEntry;
    if (message.uninterpretedOption) {
      obj.uninterpreted_option = message.uninterpretedOption.map((e) => e ? UninterpretedOption.toAmino(e) : void 0);
    } else {
      obj.uninterpreted_option = message.uninterpretedOption;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return MessageOptions.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return MessageOptions.decode(message.value);
  },
  toProto(message) {
    return MessageOptions.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/google.protobuf.MessageOptions",
      value: MessageOptions.encode(message).finish()
    };
  }
};
function createBaseFieldOptions() {
  return {
    ctype: 1,
    packed: false,
    jstype: 1,
    lazy: false,
    deprecated: false,
    weak: false,
    uninterpretedOption: []
  };
}
const FieldOptions = {
  typeUrl: "/google.protobuf.FieldOptions",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.ctype !== 1) {
      writer.uint32(8).int32(message.ctype);
    }
    if (message.packed === true) {
      writer.uint32(16).bool(message.packed);
    }
    if (message.jstype !== 1) {
      writer.uint32(48).int32(message.jstype);
    }
    if (message.lazy === true) {
      writer.uint32(40).bool(message.lazy);
    }
    if (message.deprecated === true) {
      writer.uint32(24).bool(message.deprecated);
    }
    if (message.weak === true) {
      writer.uint32(80).bool(message.weak);
    }
    for (const v of message.uninterpretedOption) {
      UninterpretedOption.encode(v, writer.uint32(7994).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseFieldOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ctype = reader.int32();
          break;
        case 2:
          message.packed = reader.bool();
          break;
        case 6:
          message.jstype = reader.int32();
          break;
        case 5:
          message.lazy = reader.bool();
          break;
        case 3:
          message.deprecated = reader.bool();
          break;
        case 10:
          message.weak = reader.bool();
          break;
        case 999:
          message.uninterpretedOption.push(UninterpretedOption.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseFieldOptions();
    message.ctype = object.ctype ?? 1;
    message.packed = object.packed ?? false;
    message.jstype = object.jstype ?? 1;
    message.lazy = object.lazy ?? false;
    message.deprecated = object.deprecated ?? false;
    message.weak = object.weak ?? false;
    message.uninterpretedOption = object.uninterpretedOption?.map((e) => UninterpretedOption.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseFieldOptions();
    if (object.ctype !== void 0 && object.ctype !== null) {
      message.ctype = object.ctype;
    }
    if (object.packed !== void 0 && object.packed !== null) {
      message.packed = object.packed;
    }
    if (object.jstype !== void 0 && object.jstype !== null) {
      message.jstype = object.jstype;
    }
    if (object.lazy !== void 0 && object.lazy !== null) {
      message.lazy = object.lazy;
    }
    if (object.deprecated !== void 0 && object.deprecated !== null) {
      message.deprecated = object.deprecated;
    }
    if (object.weak !== void 0 && object.weak !== null) {
      message.weak = object.weak;
    }
    message.uninterpretedOption = object.uninterpreted_option?.map((e) => UninterpretedOption.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.ctype = message.ctype === 1 ? void 0 : message.ctype;
    obj.packed = message.packed === false ? void 0 : message.packed;
    obj.jstype = message.jstype === 1 ? void 0 : message.jstype;
    obj.lazy = message.lazy === false ? void 0 : message.lazy;
    obj.deprecated = message.deprecated === false ? void 0 : message.deprecated;
    obj.weak = message.weak === false ? void 0 : message.weak;
    if (message.uninterpretedOption) {
      obj.uninterpreted_option = message.uninterpretedOption.map((e) => e ? UninterpretedOption.toAmino(e) : void 0);
    } else {
      obj.uninterpreted_option = message.uninterpretedOption;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return FieldOptions.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return FieldOptions.decode(message.value);
  },
  toProto(message) {
    return FieldOptions.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/google.protobuf.FieldOptions",
      value: FieldOptions.encode(message).finish()
    };
  }
};
function createBaseOneofOptions() {
  return {
    uninterpretedOption: []
  };
}
const OneofOptions = {
  typeUrl: "/google.protobuf.OneofOptions",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    for (const v of message.uninterpretedOption) {
      UninterpretedOption.encode(v, writer.uint32(7994).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseOneofOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 999:
          message.uninterpretedOption.push(UninterpretedOption.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseOneofOptions();
    message.uninterpretedOption = object.uninterpretedOption?.map((e) => UninterpretedOption.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseOneofOptions();
    message.uninterpretedOption = object.uninterpreted_option?.map((e) => UninterpretedOption.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.uninterpretedOption) {
      obj.uninterpreted_option = message.uninterpretedOption.map((e) => e ? UninterpretedOption.toAmino(e) : void 0);
    } else {
      obj.uninterpreted_option = message.uninterpretedOption;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return OneofOptions.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return OneofOptions.decode(message.value);
  },
  toProto(message) {
    return OneofOptions.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/google.protobuf.OneofOptions",
      value: OneofOptions.encode(message).finish()
    };
  }
};
function createBaseEnumOptions() {
  return {
    allowAlias: false,
    deprecated: false,
    uninterpretedOption: []
  };
}
const EnumOptions = {
  typeUrl: "/google.protobuf.EnumOptions",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.allowAlias === true) {
      writer.uint32(16).bool(message.allowAlias);
    }
    if (message.deprecated === true) {
      writer.uint32(24).bool(message.deprecated);
    }
    for (const v of message.uninterpretedOption) {
      UninterpretedOption.encode(v, writer.uint32(7994).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseEnumOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.allowAlias = reader.bool();
          break;
        case 3:
          message.deprecated = reader.bool();
          break;
        case 999:
          message.uninterpretedOption.push(UninterpretedOption.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseEnumOptions();
    message.allowAlias = object.allowAlias ?? false;
    message.deprecated = object.deprecated ?? false;
    message.uninterpretedOption = object.uninterpretedOption?.map((e) => UninterpretedOption.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseEnumOptions();
    if (object.allow_alias !== void 0 && object.allow_alias !== null) {
      message.allowAlias = object.allow_alias;
    }
    if (object.deprecated !== void 0 && object.deprecated !== null) {
      message.deprecated = object.deprecated;
    }
    message.uninterpretedOption = object.uninterpreted_option?.map((e) => UninterpretedOption.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.allow_alias = message.allowAlias === false ? void 0 : message.allowAlias;
    obj.deprecated = message.deprecated === false ? void 0 : message.deprecated;
    if (message.uninterpretedOption) {
      obj.uninterpreted_option = message.uninterpretedOption.map((e) => e ? UninterpretedOption.toAmino(e) : void 0);
    } else {
      obj.uninterpreted_option = message.uninterpretedOption;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return EnumOptions.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return EnumOptions.decode(message.value);
  },
  toProto(message) {
    return EnumOptions.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/google.protobuf.EnumOptions",
      value: EnumOptions.encode(message).finish()
    };
  }
};
function createBaseEnumValueOptions() {
  return {
    deprecated: false,
    uninterpretedOption: []
  };
}
const EnumValueOptions = {
  typeUrl: "/google.protobuf.EnumValueOptions",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.deprecated === true) {
      writer.uint32(8).bool(message.deprecated);
    }
    for (const v of message.uninterpretedOption) {
      UninterpretedOption.encode(v, writer.uint32(7994).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseEnumValueOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.deprecated = reader.bool();
          break;
        case 999:
          message.uninterpretedOption.push(UninterpretedOption.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseEnumValueOptions();
    message.deprecated = object.deprecated ?? false;
    message.uninterpretedOption = object.uninterpretedOption?.map((e) => UninterpretedOption.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseEnumValueOptions();
    if (object.deprecated !== void 0 && object.deprecated !== null) {
      message.deprecated = object.deprecated;
    }
    message.uninterpretedOption = object.uninterpreted_option?.map((e) => UninterpretedOption.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.deprecated = message.deprecated === false ? void 0 : message.deprecated;
    if (message.uninterpretedOption) {
      obj.uninterpreted_option = message.uninterpretedOption.map((e) => e ? UninterpretedOption.toAmino(e) : void 0);
    } else {
      obj.uninterpreted_option = message.uninterpretedOption;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return EnumValueOptions.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return EnumValueOptions.decode(message.value);
  },
  toProto(message) {
    return EnumValueOptions.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/google.protobuf.EnumValueOptions",
      value: EnumValueOptions.encode(message).finish()
    };
  }
};
function createBaseServiceOptions() {
  return {
    deprecated: false,
    uninterpretedOption: []
  };
}
const ServiceOptions = {
  typeUrl: "/google.protobuf.ServiceOptions",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.deprecated === true) {
      writer.uint32(264).bool(message.deprecated);
    }
    for (const v of message.uninterpretedOption) {
      UninterpretedOption.encode(v, writer.uint32(7994).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseServiceOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 33:
          message.deprecated = reader.bool();
          break;
        case 999:
          message.uninterpretedOption.push(UninterpretedOption.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseServiceOptions();
    message.deprecated = object.deprecated ?? false;
    message.uninterpretedOption = object.uninterpretedOption?.map((e) => UninterpretedOption.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseServiceOptions();
    if (object.deprecated !== void 0 && object.deprecated !== null) {
      message.deprecated = object.deprecated;
    }
    message.uninterpretedOption = object.uninterpreted_option?.map((e) => UninterpretedOption.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.deprecated = message.deprecated === false ? void 0 : message.deprecated;
    if (message.uninterpretedOption) {
      obj.uninterpreted_option = message.uninterpretedOption.map((e) => e ? UninterpretedOption.toAmino(e) : void 0);
    } else {
      obj.uninterpreted_option = message.uninterpretedOption;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return ServiceOptions.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return ServiceOptions.decode(message.value);
  },
  toProto(message) {
    return ServiceOptions.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/google.protobuf.ServiceOptions",
      value: ServiceOptions.encode(message).finish()
    };
  }
};
function createBaseMethodOptions() {
  return {
    deprecated: false,
    idempotencyLevel: 1,
    uninterpretedOption: []
  };
}
const MethodOptions = {
  typeUrl: "/google.protobuf.MethodOptions",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.deprecated === true) {
      writer.uint32(264).bool(message.deprecated);
    }
    if (message.idempotencyLevel !== 1) {
      writer.uint32(272).int32(message.idempotencyLevel);
    }
    for (const v of message.uninterpretedOption) {
      UninterpretedOption.encode(v, writer.uint32(7994).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMethodOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 33:
          message.deprecated = reader.bool();
          break;
        case 34:
          message.idempotencyLevel = reader.int32();
          break;
        case 999:
          message.uninterpretedOption.push(UninterpretedOption.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMethodOptions();
    message.deprecated = object.deprecated ?? false;
    message.idempotencyLevel = object.idempotencyLevel ?? 1;
    message.uninterpretedOption = object.uninterpretedOption?.map((e) => UninterpretedOption.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseMethodOptions();
    if (object.deprecated !== void 0 && object.deprecated !== null) {
      message.deprecated = object.deprecated;
    }
    if (object.idempotency_level !== void 0 && object.idempotency_level !== null) {
      message.idempotencyLevel = object.idempotency_level;
    }
    message.uninterpretedOption = object.uninterpreted_option?.map((e) => UninterpretedOption.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.deprecated = message.deprecated === false ? void 0 : message.deprecated;
    obj.idempotency_level = message.idempotencyLevel === 1 ? void 0 : message.idempotencyLevel;
    if (message.uninterpretedOption) {
      obj.uninterpreted_option = message.uninterpretedOption.map((e) => e ? UninterpretedOption.toAmino(e) : void 0);
    } else {
      obj.uninterpreted_option = message.uninterpretedOption;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return MethodOptions.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return MethodOptions.decode(message.value);
  },
  toProto(message) {
    return MethodOptions.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/google.protobuf.MethodOptions",
      value: MethodOptions.encode(message).finish()
    };
  }
};
function createBaseUninterpretedOption() {
  return {
    name: [],
    identifierValue: "",
    positiveIntValue: BigInt(0),
    negativeIntValue: BigInt(0),
    doubleValue: 0,
    stringValue: new Uint8Array(),
    aggregateValue: ""
  };
}
const UninterpretedOption = {
  typeUrl: "/google.protobuf.UninterpretedOption",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    for (const v of message.name) {
      UninterpretedOption_NamePart.encode(v, writer.uint32(18).fork()).ldelim();
    }
    if (message.identifierValue !== "") {
      writer.uint32(26).string(message.identifierValue);
    }
    if (message.positiveIntValue !== BigInt(0)) {
      writer.uint32(32).uint64(message.positiveIntValue);
    }
    if (message.negativeIntValue !== BigInt(0)) {
      writer.uint32(40).int64(message.negativeIntValue);
    }
    if (message.doubleValue !== 0) {
      writer.uint32(49).double(message.doubleValue);
    }
    if (message.stringValue.length !== 0) {
      writer.uint32(58).bytes(message.stringValue);
    }
    if (message.aggregateValue !== "") {
      writer.uint32(66).string(message.aggregateValue);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseUninterpretedOption();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.name.push(UninterpretedOption_NamePart.decode(reader, reader.uint32()));
          break;
        case 3:
          message.identifierValue = reader.string();
          break;
        case 4:
          message.positiveIntValue = reader.uint64();
          break;
        case 5:
          message.negativeIntValue = reader.int64();
          break;
        case 6:
          message.doubleValue = reader.double();
          break;
        case 7:
          message.stringValue = reader.bytes();
          break;
        case 8:
          message.aggregateValue = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseUninterpretedOption();
    message.name = object.name?.map((e) => UninterpretedOption_NamePart.fromPartial(e)) || [];
    message.identifierValue = object.identifierValue ?? "";
    message.positiveIntValue = object.positiveIntValue !== void 0 && object.positiveIntValue !== null ? BigInt(object.positiveIntValue.toString()) : BigInt(0);
    message.negativeIntValue = object.negativeIntValue !== void 0 && object.negativeIntValue !== null ? BigInt(object.negativeIntValue.toString()) : BigInt(0);
    message.doubleValue = object.doubleValue ?? 0;
    message.stringValue = object.stringValue ?? new Uint8Array();
    message.aggregateValue = object.aggregateValue ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseUninterpretedOption();
    message.name = object.name?.map((e) => UninterpretedOption_NamePart.fromAmino(e)) || [];
    if (object.identifier_value !== void 0 && object.identifier_value !== null) {
      message.identifierValue = object.identifier_value;
    }
    if (object.positive_int_value !== void 0 && object.positive_int_value !== null) {
      message.positiveIntValue = BigInt(object.positive_int_value);
    }
    if (object.negative_int_value !== void 0 && object.negative_int_value !== null) {
      message.negativeIntValue = BigInt(object.negative_int_value);
    }
    if (object.double_value !== void 0 && object.double_value !== null) {
      message.doubleValue = object.double_value;
    }
    if (object.string_value !== void 0 && object.string_value !== null) {
      message.stringValue = (0, import_helpers.bytesFromBase64)(object.string_value);
    }
    if (object.aggregate_value !== void 0 && object.aggregate_value !== null) {
      message.aggregateValue = object.aggregate_value;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.name) {
      obj.name = message.name.map((e) => e ? UninterpretedOption_NamePart.toAmino(e) : void 0);
    } else {
      obj.name = message.name;
    }
    obj.identifier_value = message.identifierValue === "" ? void 0 : message.identifierValue;
    obj.positive_int_value = message.positiveIntValue !== BigInt(0) ? message.positiveIntValue?.toString() : void 0;
    obj.negative_int_value = message.negativeIntValue !== BigInt(0) ? message.negativeIntValue?.toString() : void 0;
    obj.double_value = message.doubleValue === 0 ? void 0 : message.doubleValue;
    obj.string_value = message.stringValue ? (0, import_helpers.base64FromBytes)(message.stringValue) : void 0;
    obj.aggregate_value = message.aggregateValue === "" ? void 0 : message.aggregateValue;
    return obj;
  },
  fromAminoMsg(object) {
    return UninterpretedOption.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return UninterpretedOption.decode(message.value);
  },
  toProto(message) {
    return UninterpretedOption.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/google.protobuf.UninterpretedOption",
      value: UninterpretedOption.encode(message).finish()
    };
  }
};
function createBaseUninterpretedOption_NamePart() {
  return {
    namePart: "",
    isExtension: false
  };
}
const UninterpretedOption_NamePart = {
  typeUrl: "/google.protobuf.NamePart",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.namePart !== "") {
      writer.uint32(10).string(message.namePart);
    }
    if (message.isExtension === true) {
      writer.uint32(16).bool(message.isExtension);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseUninterpretedOption_NamePart();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.namePart = reader.string();
          break;
        case 2:
          message.isExtension = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseUninterpretedOption_NamePart();
    message.namePart = object.namePart ?? "";
    message.isExtension = object.isExtension ?? false;
    return message;
  },
  fromAmino(object) {
    const message = createBaseUninterpretedOption_NamePart();
    if (object.name_part !== void 0 && object.name_part !== null) {
      message.namePart = object.name_part;
    }
    if (object.is_extension !== void 0 && object.is_extension !== null) {
      message.isExtension = object.is_extension;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.name_part = message.namePart === "" ? void 0 : message.namePart;
    obj.is_extension = message.isExtension === false ? void 0 : message.isExtension;
    return obj;
  },
  fromAminoMsg(object) {
    return UninterpretedOption_NamePart.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return UninterpretedOption_NamePart.decode(message.value);
  },
  toProto(message) {
    return UninterpretedOption_NamePart.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/google.protobuf.NamePart",
      value: UninterpretedOption_NamePart.encode(message).finish()
    };
  }
};
function createBaseSourceCodeInfo() {
  return {
    location: []
  };
}
const SourceCodeInfo = {
  typeUrl: "/google.protobuf.SourceCodeInfo",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    for (const v of message.location) {
      SourceCodeInfo_Location.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseSourceCodeInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.location.push(SourceCodeInfo_Location.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseSourceCodeInfo();
    message.location = object.location?.map((e) => SourceCodeInfo_Location.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseSourceCodeInfo();
    message.location = object.location?.map((e) => SourceCodeInfo_Location.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.location) {
      obj.location = message.location.map((e) => e ? SourceCodeInfo_Location.toAmino(e) : void 0);
    } else {
      obj.location = message.location;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return SourceCodeInfo.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return SourceCodeInfo.decode(message.value);
  },
  toProto(message) {
    return SourceCodeInfo.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/google.protobuf.SourceCodeInfo",
      value: SourceCodeInfo.encode(message).finish()
    };
  }
};
function createBaseSourceCodeInfo_Location() {
  return {
    path: [],
    span: [],
    leadingComments: "",
    trailingComments: "",
    leadingDetachedComments: []
  };
}
const SourceCodeInfo_Location = {
  typeUrl: "/google.protobuf.Location",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    writer.uint32(10).fork();
    for (const v of message.path) {
      writer.int32(v);
    }
    writer.ldelim();
    writer.uint32(18).fork();
    for (const v of message.span) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.leadingComments !== "") {
      writer.uint32(26).string(message.leadingComments);
    }
    if (message.trailingComments !== "") {
      writer.uint32(34).string(message.trailingComments);
    }
    for (const v of message.leadingDetachedComments) {
      writer.uint32(50).string(v);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseSourceCodeInfo_Location();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.path.push(reader.int32());
            }
          } else {
            message.path.push(reader.int32());
          }
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.span.push(reader.int32());
            }
          } else {
            message.span.push(reader.int32());
          }
          break;
        case 3:
          message.leadingComments = reader.string();
          break;
        case 4:
          message.trailingComments = reader.string();
          break;
        case 6:
          message.leadingDetachedComments.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseSourceCodeInfo_Location();
    message.path = object.path?.map((e) => e) || [];
    message.span = object.span?.map((e) => e) || [];
    message.leadingComments = object.leadingComments ?? "";
    message.trailingComments = object.trailingComments ?? "";
    message.leadingDetachedComments = object.leadingDetachedComments?.map((e) => e) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseSourceCodeInfo_Location();
    message.path = object.path?.map((e) => e) || [];
    message.span = object.span?.map((e) => e) || [];
    if (object.leading_comments !== void 0 && object.leading_comments !== null) {
      message.leadingComments = object.leading_comments;
    }
    if (object.trailing_comments !== void 0 && object.trailing_comments !== null) {
      message.trailingComments = object.trailing_comments;
    }
    message.leadingDetachedComments = object.leading_detached_comments?.map((e) => e) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.path) {
      obj.path = message.path.map((e) => e);
    } else {
      obj.path = message.path;
    }
    if (message.span) {
      obj.span = message.span.map((e) => e);
    } else {
      obj.span = message.span;
    }
    obj.leading_comments = message.leadingComments === "" ? void 0 : message.leadingComments;
    obj.trailing_comments = message.trailingComments === "" ? void 0 : message.trailingComments;
    if (message.leadingDetachedComments) {
      obj.leading_detached_comments = message.leadingDetachedComments.map((e) => e);
    } else {
      obj.leading_detached_comments = message.leadingDetachedComments;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return SourceCodeInfo_Location.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return SourceCodeInfo_Location.decode(message.value);
  },
  toProto(message) {
    return SourceCodeInfo_Location.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/google.protobuf.Location",
      value: SourceCodeInfo_Location.encode(message).finish()
    };
  }
};
function createBaseGeneratedCodeInfo() {
  return {
    annotation: []
  };
}
const GeneratedCodeInfo = {
  typeUrl: "/google.protobuf.GeneratedCodeInfo",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    for (const v of message.annotation) {
      GeneratedCodeInfo_Annotation.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseGeneratedCodeInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.annotation.push(GeneratedCodeInfo_Annotation.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseGeneratedCodeInfo();
    message.annotation = object.annotation?.map((e) => GeneratedCodeInfo_Annotation.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseGeneratedCodeInfo();
    message.annotation = object.annotation?.map((e) => GeneratedCodeInfo_Annotation.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.annotation) {
      obj.annotation = message.annotation.map((e) => e ? GeneratedCodeInfo_Annotation.toAmino(e) : void 0);
    } else {
      obj.annotation = message.annotation;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return GeneratedCodeInfo.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return GeneratedCodeInfo.decode(message.value);
  },
  toProto(message) {
    return GeneratedCodeInfo.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/google.protobuf.GeneratedCodeInfo",
      value: GeneratedCodeInfo.encode(message).finish()
    };
  }
};
function createBaseGeneratedCodeInfo_Annotation() {
  return {
    path: [],
    sourceFile: "",
    begin: 0,
    end: 0
  };
}
const GeneratedCodeInfo_Annotation = {
  typeUrl: "/google.protobuf.Annotation",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    writer.uint32(10).fork();
    for (const v of message.path) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.sourceFile !== "") {
      writer.uint32(18).string(message.sourceFile);
    }
    if (message.begin !== 0) {
      writer.uint32(24).int32(message.begin);
    }
    if (message.end !== 0) {
      writer.uint32(32).int32(message.end);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseGeneratedCodeInfo_Annotation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.path.push(reader.int32());
            }
          } else {
            message.path.push(reader.int32());
          }
          break;
        case 2:
          message.sourceFile = reader.string();
          break;
        case 3:
          message.begin = reader.int32();
          break;
        case 4:
          message.end = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseGeneratedCodeInfo_Annotation();
    message.path = object.path?.map((e) => e) || [];
    message.sourceFile = object.sourceFile ?? "";
    message.begin = object.begin ?? 0;
    message.end = object.end ?? 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseGeneratedCodeInfo_Annotation();
    message.path = object.path?.map((e) => e) || [];
    if (object.source_file !== void 0 && object.source_file !== null) {
      message.sourceFile = object.source_file;
    }
    if (object.begin !== void 0 && object.begin !== null) {
      message.begin = object.begin;
    }
    if (object.end !== void 0 && object.end !== null) {
      message.end = object.end;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.path) {
      obj.path = message.path.map((e) => e);
    } else {
      obj.path = message.path;
    }
    obj.source_file = message.sourceFile === "" ? void 0 : message.sourceFile;
    obj.begin = message.begin === 0 ? void 0 : message.begin;
    obj.end = message.end === 0 ? void 0 : message.end;
    return obj;
  },
  fromAminoMsg(object) {
    return GeneratedCodeInfo_Annotation.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return GeneratedCodeInfo_Annotation.decode(message.value);
  },
  toProto(message) {
    return GeneratedCodeInfo_Annotation.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/google.protobuf.Annotation",
      value: GeneratedCodeInfo_Annotation.encode(message).finish()
    };
  }
};
// Removed broken CommonJS export annotation
