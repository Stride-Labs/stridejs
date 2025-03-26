import { BinaryReader, BinaryWriter } from "../../../binary";
import { bytesFromBase64, base64FromBytes } from "../../../helpers";
var StorageType = /* @__PURE__ */ ((StorageType2) => {
  StorageType2[StorageType2["STORAGE_TYPE_DEFAULT_UNSPECIFIED"] = 0] = "STORAGE_TYPE_DEFAULT_UNSPECIFIED";
  StorageType2[StorageType2["STORAGE_TYPE_MEMORY"] = 1] = "STORAGE_TYPE_MEMORY";
  StorageType2[StorageType2["STORAGE_TYPE_TRANSIENT"] = 2] = "STORAGE_TYPE_TRANSIENT";
  StorageType2[StorageType2["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return StorageType2;
})(StorageType || {});
const StorageTypeSDKType = StorageType;
const StorageTypeAmino = StorageType;
function storageTypeFromJSON(object) {
  switch (object) {
    case 0:
    case "STORAGE_TYPE_DEFAULT_UNSPECIFIED":
      return 0 /* STORAGE_TYPE_DEFAULT_UNSPECIFIED */;
    case 1:
    case "STORAGE_TYPE_MEMORY":
      return 1 /* STORAGE_TYPE_MEMORY */;
    case 2:
    case "STORAGE_TYPE_TRANSIENT":
      return 2 /* STORAGE_TYPE_TRANSIENT */;
    case -1:
    case "UNRECOGNIZED":
    default:
      return -1 /* UNRECOGNIZED */;
  }
}
function storageTypeToJSON(object) {
  switch (object) {
    case 0 /* STORAGE_TYPE_DEFAULT_UNSPECIFIED */:
      return "STORAGE_TYPE_DEFAULT_UNSPECIFIED";
    case 1 /* STORAGE_TYPE_MEMORY */:
      return "STORAGE_TYPE_MEMORY";
    case 2 /* STORAGE_TYPE_TRANSIENT */:
      return "STORAGE_TYPE_TRANSIENT";
    case -1 /* UNRECOGNIZED */:
    default:
      return "UNRECOGNIZED";
  }
}
function createBaseModuleSchemaDescriptor() {
  return {
    schemaFile: [],
    prefix: new Uint8Array()
  };
}
const ModuleSchemaDescriptor = {
  typeUrl: "/cosmos.orm.v1alpha1.ModuleSchemaDescriptor",
  encode(message, writer = BinaryWriter.create()) {
    for (const v of message.schemaFile) {
      ModuleSchemaDescriptor_FileEntry.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.prefix.length !== 0) {
      writer.uint32(18).bytes(message.prefix);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseModuleSchemaDescriptor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.schemaFile.push(ModuleSchemaDescriptor_FileEntry.decode(reader, reader.uint32()));
          break;
        case 2:
          message.prefix = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseModuleSchemaDescriptor();
    message.schemaFile = object.schemaFile?.map((e) => ModuleSchemaDescriptor_FileEntry.fromPartial(e)) || [];
    message.prefix = object.prefix ?? new Uint8Array();
    return message;
  },
  fromAmino(object) {
    const message = createBaseModuleSchemaDescriptor();
    message.schemaFile = object.schema_file?.map((e) => ModuleSchemaDescriptor_FileEntry.fromAmino(e)) || [];
    if (object.prefix !== void 0 && object.prefix !== null) {
      message.prefix = bytesFromBase64(object.prefix);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.schemaFile) {
      obj.schema_file = message.schemaFile.map((e) => e ? ModuleSchemaDescriptor_FileEntry.toAmino(e) : void 0);
    } else {
      obj.schema_file = message.schemaFile;
    }
    obj.prefix = message.prefix ? base64FromBytes(message.prefix) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return ModuleSchemaDescriptor.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/ModuleSchemaDescriptor",
      value: ModuleSchemaDescriptor.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return ModuleSchemaDescriptor.decode(message.value);
  },
  toProto(message) {
    return ModuleSchemaDescriptor.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.orm.v1alpha1.ModuleSchemaDescriptor",
      value: ModuleSchemaDescriptor.encode(message).finish()
    };
  }
};
function createBaseModuleSchemaDescriptor_FileEntry() {
  return {
    id: 0,
    protoFileName: "",
    storageType: 0
  };
}
const ModuleSchemaDescriptor_FileEntry = {
  typeUrl: "/cosmos.orm.v1alpha1.FileEntry",
  encode(message, writer = BinaryWriter.create()) {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    if (message.protoFileName !== "") {
      writer.uint32(18).string(message.protoFileName);
    }
    if (message.storageType !== 0) {
      writer.uint32(24).int32(message.storageType);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseModuleSchemaDescriptor_FileEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint32();
          break;
        case 2:
          message.protoFileName = reader.string();
          break;
        case 3:
          message.storageType = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseModuleSchemaDescriptor_FileEntry();
    message.id = object.id ?? 0;
    message.protoFileName = object.protoFileName ?? "";
    message.storageType = object.storageType ?? 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseModuleSchemaDescriptor_FileEntry();
    if (object.id !== void 0 && object.id !== null) {
      message.id = object.id;
    }
    if (object.proto_file_name !== void 0 && object.proto_file_name !== null) {
      message.protoFileName = object.proto_file_name;
    }
    if (object.storage_type !== void 0 && object.storage_type !== null) {
      message.storageType = object.storage_type;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.id = message.id === 0 ? void 0 : message.id;
    obj.proto_file_name = message.protoFileName === "" ? void 0 : message.protoFileName;
    obj.storage_type = message.storageType === 0 ? void 0 : message.storageType;
    return obj;
  },
  fromAminoMsg(object) {
    return ModuleSchemaDescriptor_FileEntry.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/FileEntry",
      value: ModuleSchemaDescriptor_FileEntry.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return ModuleSchemaDescriptor_FileEntry.decode(message.value);
  },
  toProto(message) {
    return ModuleSchemaDescriptor_FileEntry.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.orm.v1alpha1.FileEntry",
      value: ModuleSchemaDescriptor_FileEntry.encode(message).finish()
    };
  }
};
export {
  ModuleSchemaDescriptor,
  ModuleSchemaDescriptor_FileEntry,
  StorageType,
  StorageTypeAmino,
  StorageTypeSDKType,
  storageTypeFromJSON,
  storageTypeToJSON
};
