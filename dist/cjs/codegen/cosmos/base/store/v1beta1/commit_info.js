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
var commit_info_exports = {};
__export(commit_info_exports, {
  CommitID: () => CommitID,
  CommitInfo: () => CommitInfo,
  StoreInfo: () => StoreInfo
});
module.exports = __toCommonJS(commit_info_exports);
var import_timestamp = require("../../../../google/protobuf/timestamp");
var import_binary = require("../../../../binary");
var import_helpers = require("../../../../helpers");
function createBaseCommitInfo() {
  return {
    version: BigInt(0),
    storeInfos: [],
    timestamp: /* @__PURE__ */ new Date()
  };
}
const CommitInfo = {
  typeUrl: "/cosmos.base.store.v1beta1.CommitInfo",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.version !== BigInt(0)) {
      writer.uint32(8).int64(message.version);
    }
    for (const v of message.storeInfos) {
      StoreInfo.encode(v, writer.uint32(18).fork()).ldelim();
    }
    if (message.timestamp !== void 0) {
      import_timestamp.Timestamp.encode((0, import_helpers.toTimestamp)(message.timestamp), writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseCommitInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.version = reader.int64();
          break;
        case 2:
          message.storeInfos.push(StoreInfo.decode(reader, reader.uint32()));
          break;
        case 3:
          message.timestamp = (0, import_helpers.fromTimestamp)(import_timestamp.Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseCommitInfo();
    message.version = object.version !== void 0 && object.version !== null ? BigInt(object.version.toString()) : BigInt(0);
    message.storeInfos = object.storeInfos?.map((e) => StoreInfo.fromPartial(e)) || [];
    message.timestamp = object.timestamp ?? void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseCommitInfo();
    if (object.version !== void 0 && object.version !== null) {
      message.version = BigInt(object.version);
    }
    message.storeInfos = object.store_infos?.map((e) => StoreInfo.fromAmino(e)) || [];
    if (object.timestamp !== void 0 && object.timestamp !== null) {
      message.timestamp = (0, import_helpers.fromTimestamp)(import_timestamp.Timestamp.fromAmino(object.timestamp));
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.version = message.version !== BigInt(0) ? message.version.toString() : void 0;
    if (message.storeInfos) {
      obj.store_infos = message.storeInfos.map((e) => e ? StoreInfo.toAmino(e) : void 0);
    } else {
      obj.store_infos = message.storeInfos;
    }
    obj.timestamp = message.timestamp ? import_timestamp.Timestamp.toAmino((0, import_helpers.toTimestamp)(message.timestamp)) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return CommitInfo.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/CommitInfo",
      value: CommitInfo.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return CommitInfo.decode(message.value);
  },
  toProto(message) {
    return CommitInfo.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.base.store.v1beta1.CommitInfo",
      value: CommitInfo.encode(message).finish()
    };
  }
};
function createBaseStoreInfo() {
  return {
    name: "",
    commitId: CommitID.fromPartial({})
  };
}
const StoreInfo = {
  typeUrl: "/cosmos.base.store.v1beta1.StoreInfo",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.commitId !== void 0) {
      CommitID.encode(message.commitId, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseStoreInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.commitId = CommitID.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseStoreInfo();
    message.name = object.name ?? "";
    message.commitId = object.commitId !== void 0 && object.commitId !== null ? CommitID.fromPartial(object.commitId) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseStoreInfo();
    if (object.name !== void 0 && object.name !== null) {
      message.name = object.name;
    }
    if (object.commit_id !== void 0 && object.commit_id !== null) {
      message.commitId = CommitID.fromAmino(object.commit_id);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.name = message.name === "" ? void 0 : message.name;
    obj.commit_id = message.commitId ? CommitID.toAmino(message.commitId) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return StoreInfo.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/StoreInfo",
      value: StoreInfo.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return StoreInfo.decode(message.value);
  },
  toProto(message) {
    return StoreInfo.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.base.store.v1beta1.StoreInfo",
      value: StoreInfo.encode(message).finish()
    };
  }
};
function createBaseCommitID() {
  return {
    version: BigInt(0),
    hash: new Uint8Array()
  };
}
const CommitID = {
  typeUrl: "/cosmos.base.store.v1beta1.CommitID",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.version !== BigInt(0)) {
      writer.uint32(8).int64(message.version);
    }
    if (message.hash.length !== 0) {
      writer.uint32(18).bytes(message.hash);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseCommitID();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.version = reader.int64();
          break;
        case 2:
          message.hash = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseCommitID();
    message.version = object.version !== void 0 && object.version !== null ? BigInt(object.version.toString()) : BigInt(0);
    message.hash = object.hash ?? new Uint8Array();
    return message;
  },
  fromAmino(object) {
    const message = createBaseCommitID();
    if (object.version !== void 0 && object.version !== null) {
      message.version = BigInt(object.version);
    }
    if (object.hash !== void 0 && object.hash !== null) {
      message.hash = (0, import_helpers.bytesFromBase64)(object.hash);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.version = message.version !== BigInt(0) ? message.version.toString() : void 0;
    obj.hash = message.hash ? (0, import_helpers.base64FromBytes)(message.hash) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return CommitID.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/CommitID",
      value: CommitID.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return CommitID.decode(message.value);
  },
  toProto(message) {
    return CommitID.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.base.store.v1beta1.CommitID",
      value: CommitID.encode(message).finish()
    };
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CommitID,
  CommitInfo,
  StoreInfo
});
