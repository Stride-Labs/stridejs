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
var snapshot_exports = {};
__export(snapshot_exports, {
  Metadata: () => Metadata,
  Snapshot: () => Snapshot,
  SnapshotExtensionMeta: () => SnapshotExtensionMeta,
  SnapshotExtensionPayload: () => SnapshotExtensionPayload,
  SnapshotIAVLItem: () => SnapshotIAVLItem,
  SnapshotItem: () => SnapshotItem,
  SnapshotStoreItem: () => SnapshotStoreItem
});
module.exports = __toCommonJS(snapshot_exports);
var import_binary = require("../../../../binary");
var import_helpers = require("../../../../helpers");
function createBaseSnapshot() {
  return {
    height: BigInt(0),
    format: 0,
    chunks: 0,
    hash: new Uint8Array(),
    metadata: Metadata.fromPartial({})
  };
}
const Snapshot = {
  typeUrl: "/cosmos.base.snapshots.v1beta1.Snapshot",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.height !== BigInt(0)) {
      writer.uint32(8).uint64(message.height);
    }
    if (message.format !== 0) {
      writer.uint32(16).uint32(message.format);
    }
    if (message.chunks !== 0) {
      writer.uint32(24).uint32(message.chunks);
    }
    if (message.hash.length !== 0) {
      writer.uint32(34).bytes(message.hash);
    }
    if (message.metadata !== void 0) {
      Metadata.encode(message.metadata, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseSnapshot();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = reader.uint64();
          break;
        case 2:
          message.format = reader.uint32();
          break;
        case 3:
          message.chunks = reader.uint32();
          break;
        case 4:
          message.hash = reader.bytes();
          break;
        case 5:
          message.metadata = Metadata.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseSnapshot();
    message.height = object.height !== void 0 && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    message.format = object.format ?? 0;
    message.chunks = object.chunks ?? 0;
    message.hash = object.hash ?? new Uint8Array();
    message.metadata = object.metadata !== void 0 && object.metadata !== null ? Metadata.fromPartial(object.metadata) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseSnapshot();
    if (object.height !== void 0 && object.height !== null) {
      message.height = BigInt(object.height);
    }
    if (object.format !== void 0 && object.format !== null) {
      message.format = object.format;
    }
    if (object.chunks !== void 0 && object.chunks !== null) {
      message.chunks = object.chunks;
    }
    if (object.hash !== void 0 && object.hash !== null) {
      message.hash = (0, import_helpers.bytesFromBase64)(object.hash);
    }
    if (object.metadata !== void 0 && object.metadata !== null) {
      message.metadata = Metadata.fromAmino(object.metadata);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.height = message.height !== BigInt(0) ? message.height.toString() : void 0;
    obj.format = message.format === 0 ? void 0 : message.format;
    obj.chunks = message.chunks === 0 ? void 0 : message.chunks;
    obj.hash = message.hash ? (0, import_helpers.base64FromBytes)(message.hash) : void 0;
    obj.metadata = message.metadata ? Metadata.toAmino(message.metadata) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return Snapshot.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/Snapshot",
      value: Snapshot.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return Snapshot.decode(message.value);
  },
  toProto(message) {
    return Snapshot.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.base.snapshots.v1beta1.Snapshot",
      value: Snapshot.encode(message).finish()
    };
  }
};
function createBaseMetadata() {
  return {
    chunkHashes: []
  };
}
const Metadata = {
  typeUrl: "/cosmos.base.snapshots.v1beta1.Metadata",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    for (const v of message.chunkHashes) {
      writer.uint32(10).bytes(v);
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
          message.chunkHashes.push(reader.bytes());
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
    message.chunkHashes = object.chunkHashes?.map((e) => e) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseMetadata();
    message.chunkHashes = object.chunk_hashes?.map((e) => (0, import_helpers.bytesFromBase64)(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.chunkHashes) {
      obj.chunk_hashes = message.chunkHashes.map((e) => (0, import_helpers.base64FromBytes)(e));
    } else {
      obj.chunk_hashes = message.chunkHashes;
    }
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
      typeUrl: "/cosmos.base.snapshots.v1beta1.Metadata",
      value: Metadata.encode(message).finish()
    };
  }
};
function createBaseSnapshotItem() {
  return {
    store: void 0,
    iavl: void 0,
    extension: void 0,
    extensionPayload: void 0
  };
}
const SnapshotItem = {
  typeUrl: "/cosmos.base.snapshots.v1beta1.SnapshotItem",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.store !== void 0) {
      SnapshotStoreItem.encode(message.store, writer.uint32(10).fork()).ldelim();
    }
    if (message.iavl !== void 0) {
      SnapshotIAVLItem.encode(message.iavl, writer.uint32(18).fork()).ldelim();
    }
    if (message.extension !== void 0) {
      SnapshotExtensionMeta.encode(message.extension, writer.uint32(26).fork()).ldelim();
    }
    if (message.extensionPayload !== void 0) {
      SnapshotExtensionPayload.encode(message.extensionPayload, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseSnapshotItem();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.store = SnapshotStoreItem.decode(reader, reader.uint32());
          break;
        case 2:
          message.iavl = SnapshotIAVLItem.decode(reader, reader.uint32());
          break;
        case 3:
          message.extension = SnapshotExtensionMeta.decode(reader, reader.uint32());
          break;
        case 4:
          message.extensionPayload = SnapshotExtensionPayload.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseSnapshotItem();
    message.store = object.store !== void 0 && object.store !== null ? SnapshotStoreItem.fromPartial(object.store) : void 0;
    message.iavl = object.iavl !== void 0 && object.iavl !== null ? SnapshotIAVLItem.fromPartial(object.iavl) : void 0;
    message.extension = object.extension !== void 0 && object.extension !== null ? SnapshotExtensionMeta.fromPartial(object.extension) : void 0;
    message.extensionPayload = object.extensionPayload !== void 0 && object.extensionPayload !== null ? SnapshotExtensionPayload.fromPartial(object.extensionPayload) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseSnapshotItem();
    if (object.store !== void 0 && object.store !== null) {
      message.store = SnapshotStoreItem.fromAmino(object.store);
    }
    if (object.iavl !== void 0 && object.iavl !== null) {
      message.iavl = SnapshotIAVLItem.fromAmino(object.iavl);
    }
    if (object.extension !== void 0 && object.extension !== null) {
      message.extension = SnapshotExtensionMeta.fromAmino(object.extension);
    }
    if (object.extension_payload !== void 0 && object.extension_payload !== null) {
      message.extensionPayload = SnapshotExtensionPayload.fromAmino(object.extension_payload);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.store = message.store ? SnapshotStoreItem.toAmino(message.store) : void 0;
    obj.iavl = message.iavl ? SnapshotIAVLItem.toAmino(message.iavl) : void 0;
    obj.extension = message.extension ? SnapshotExtensionMeta.toAmino(message.extension) : void 0;
    obj.extension_payload = message.extensionPayload ? SnapshotExtensionPayload.toAmino(message.extensionPayload) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return SnapshotItem.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/SnapshotItem",
      value: SnapshotItem.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return SnapshotItem.decode(message.value);
  },
  toProto(message) {
    return SnapshotItem.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.base.snapshots.v1beta1.SnapshotItem",
      value: SnapshotItem.encode(message).finish()
    };
  }
};
function createBaseSnapshotStoreItem() {
  return {
    name: ""
  };
}
const SnapshotStoreItem = {
  typeUrl: "/cosmos.base.snapshots.v1beta1.SnapshotStoreItem",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseSnapshotStoreItem();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseSnapshotStoreItem();
    message.name = object.name ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseSnapshotStoreItem();
    if (object.name !== void 0 && object.name !== null) {
      message.name = object.name;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.name = message.name === "" ? void 0 : message.name;
    return obj;
  },
  fromAminoMsg(object) {
    return SnapshotStoreItem.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/SnapshotStoreItem",
      value: SnapshotStoreItem.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return SnapshotStoreItem.decode(message.value);
  },
  toProto(message) {
    return SnapshotStoreItem.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.base.snapshots.v1beta1.SnapshotStoreItem",
      value: SnapshotStoreItem.encode(message).finish()
    };
  }
};
function createBaseSnapshotIAVLItem() {
  return {
    key: new Uint8Array(),
    value: new Uint8Array(),
    version: BigInt(0),
    height: 0
  };
}
const SnapshotIAVLItem = {
  typeUrl: "/cosmos.base.snapshots.v1beta1.SnapshotIAVLItem",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.key.length !== 0) {
      writer.uint32(10).bytes(message.key);
    }
    if (message.value.length !== 0) {
      writer.uint32(18).bytes(message.value);
    }
    if (message.version !== BigInt(0)) {
      writer.uint32(24).int64(message.version);
    }
    if (message.height !== 0) {
      writer.uint32(32).int32(message.height);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseSnapshotIAVLItem();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.bytes();
          break;
        case 2:
          message.value = reader.bytes();
          break;
        case 3:
          message.version = reader.int64();
          break;
        case 4:
          message.height = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseSnapshotIAVLItem();
    message.key = object.key ?? new Uint8Array();
    message.value = object.value ?? new Uint8Array();
    message.version = object.version !== void 0 && object.version !== null ? BigInt(object.version.toString()) : BigInt(0);
    message.height = object.height ?? 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseSnapshotIAVLItem();
    if (object.key !== void 0 && object.key !== null) {
      message.key = (0, import_helpers.bytesFromBase64)(object.key);
    }
    if (object.value !== void 0 && object.value !== null) {
      message.value = (0, import_helpers.bytesFromBase64)(object.value);
    }
    if (object.version !== void 0 && object.version !== null) {
      message.version = BigInt(object.version);
    }
    if (object.height !== void 0 && object.height !== null) {
      message.height = object.height;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.key = message.key ? (0, import_helpers.base64FromBytes)(message.key) : void 0;
    obj.value = message.value ? (0, import_helpers.base64FromBytes)(message.value) : void 0;
    obj.version = message.version !== BigInt(0) ? message.version.toString() : void 0;
    obj.height = message.height === 0 ? void 0 : message.height;
    return obj;
  },
  fromAminoMsg(object) {
    return SnapshotIAVLItem.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/SnapshotIAVLItem",
      value: SnapshotIAVLItem.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return SnapshotIAVLItem.decode(message.value);
  },
  toProto(message) {
    return SnapshotIAVLItem.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.base.snapshots.v1beta1.SnapshotIAVLItem",
      value: SnapshotIAVLItem.encode(message).finish()
    };
  }
};
function createBaseSnapshotExtensionMeta() {
  return {
    name: "",
    format: 0
  };
}
const SnapshotExtensionMeta = {
  typeUrl: "/cosmos.base.snapshots.v1beta1.SnapshotExtensionMeta",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.format !== 0) {
      writer.uint32(16).uint32(message.format);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseSnapshotExtensionMeta();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.format = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseSnapshotExtensionMeta();
    message.name = object.name ?? "";
    message.format = object.format ?? 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseSnapshotExtensionMeta();
    if (object.name !== void 0 && object.name !== null) {
      message.name = object.name;
    }
    if (object.format !== void 0 && object.format !== null) {
      message.format = object.format;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.name = message.name === "" ? void 0 : message.name;
    obj.format = message.format === 0 ? void 0 : message.format;
    return obj;
  },
  fromAminoMsg(object) {
    return SnapshotExtensionMeta.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/SnapshotExtensionMeta",
      value: SnapshotExtensionMeta.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return SnapshotExtensionMeta.decode(message.value);
  },
  toProto(message) {
    return SnapshotExtensionMeta.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.base.snapshots.v1beta1.SnapshotExtensionMeta",
      value: SnapshotExtensionMeta.encode(message).finish()
    };
  }
};
function createBaseSnapshotExtensionPayload() {
  return {
    payload: new Uint8Array()
  };
}
const SnapshotExtensionPayload = {
  typeUrl: "/cosmos.base.snapshots.v1beta1.SnapshotExtensionPayload",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.payload.length !== 0) {
      writer.uint32(10).bytes(message.payload);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseSnapshotExtensionPayload();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.payload = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseSnapshotExtensionPayload();
    message.payload = object.payload ?? new Uint8Array();
    return message;
  },
  fromAmino(object) {
    const message = createBaseSnapshotExtensionPayload();
    if (object.payload !== void 0 && object.payload !== null) {
      message.payload = (0, import_helpers.bytesFromBase64)(object.payload);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.payload = message.payload ? (0, import_helpers.base64FromBytes)(message.payload) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return SnapshotExtensionPayload.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/SnapshotExtensionPayload",
      value: SnapshotExtensionPayload.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return SnapshotExtensionPayload.decode(message.value);
  },
  toProto(message) {
    return SnapshotExtensionPayload.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.base.snapshots.v1beta1.SnapshotExtensionPayload",
      value: SnapshotExtensionPayload.encode(message).finish()
    };
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Metadata,
  Snapshot,
  SnapshotExtensionMeta,
  SnapshotExtensionPayload,
  SnapshotIAVLItem,
  SnapshotItem,
  SnapshotStoreItem
});
