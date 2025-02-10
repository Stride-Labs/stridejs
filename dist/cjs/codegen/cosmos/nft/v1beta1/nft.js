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
var nft_exports = {};
__export(nft_exports, {
  Class: () => Class,
  NFT: () => NFT
});
module.exports = __toCommonJS(nft_exports);
var import_any = require("../../../google/protobuf/any");
var import_binary = require("../../../binary");
function createBaseClass() {
  return {
    id: "",
    name: "",
    symbol: "",
    description: "",
    uri: "",
    uriHash: "",
    data: void 0
  };
}
const Class = {
  typeUrl: "/cosmos.nft.v1beta1.Class",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.symbol !== "") {
      writer.uint32(26).string(message.symbol);
    }
    if (message.description !== "") {
      writer.uint32(34).string(message.description);
    }
    if (message.uri !== "") {
      writer.uint32(42).string(message.uri);
    }
    if (message.uriHash !== "") {
      writer.uint32(50).string(message.uriHash);
    }
    if (message.data !== void 0) {
      import_any.Any.encode(message.data, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseClass();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.symbol = reader.string();
          break;
        case 4:
          message.description = reader.string();
          break;
        case 5:
          message.uri = reader.string();
          break;
        case 6:
          message.uriHash = reader.string();
          break;
        case 7:
          message.data = import_any.Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseClass();
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    message.symbol = object.symbol ?? "";
    message.description = object.description ?? "";
    message.uri = object.uri ?? "";
    message.uriHash = object.uriHash ?? "";
    message.data = object.data !== void 0 && object.data !== null ? import_any.Any.fromPartial(object.data) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseClass();
    if (object.id !== void 0 && object.id !== null) {
      message.id = object.id;
    }
    if (object.name !== void 0 && object.name !== null) {
      message.name = object.name;
    }
    if (object.symbol !== void 0 && object.symbol !== null) {
      message.symbol = object.symbol;
    }
    if (object.description !== void 0 && object.description !== null) {
      message.description = object.description;
    }
    if (object.uri !== void 0 && object.uri !== null) {
      message.uri = object.uri;
    }
    if (object.uri_hash !== void 0 && object.uri_hash !== null) {
      message.uriHash = object.uri_hash;
    }
    if (object.data !== void 0 && object.data !== null) {
      message.data = import_any.Any.fromAmino(object.data);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.id = message.id === "" ? void 0 : message.id;
    obj.name = message.name === "" ? void 0 : message.name;
    obj.symbol = message.symbol === "" ? void 0 : message.symbol;
    obj.description = message.description === "" ? void 0 : message.description;
    obj.uri = message.uri === "" ? void 0 : message.uri;
    obj.uri_hash = message.uriHash === "" ? void 0 : message.uriHash;
    obj.data = message.data ? import_any.Any.toAmino(message.data) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return Class.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/Class",
      value: Class.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return Class.decode(message.value);
  },
  toProto(message) {
    return Class.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.nft.v1beta1.Class",
      value: Class.encode(message).finish()
    };
  }
};
function createBaseNFT() {
  return {
    classId: "",
    id: "",
    uri: "",
    uriHash: "",
    data: void 0
  };
}
const NFT = {
  typeUrl: "/cosmos.nft.v1beta1.NFT",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    if (message.uri !== "") {
      writer.uint32(26).string(message.uri);
    }
    if (message.uriHash !== "") {
      writer.uint32(34).string(message.uriHash);
    }
    if (message.data !== void 0) {
      import_any.Any.encode(message.data, writer.uint32(82).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseNFT();
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
          message.uri = reader.string();
          break;
        case 4:
          message.uriHash = reader.string();
          break;
        case 10:
          message.data = import_any.Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseNFT();
    message.classId = object.classId ?? "";
    message.id = object.id ?? "";
    message.uri = object.uri ?? "";
    message.uriHash = object.uriHash ?? "";
    message.data = object.data !== void 0 && object.data !== null ? import_any.Any.fromPartial(object.data) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseNFT();
    if (object.class_id !== void 0 && object.class_id !== null) {
      message.classId = object.class_id;
    }
    if (object.id !== void 0 && object.id !== null) {
      message.id = object.id;
    }
    if (object.uri !== void 0 && object.uri !== null) {
      message.uri = object.uri;
    }
    if (object.uri_hash !== void 0 && object.uri_hash !== null) {
      message.uriHash = object.uri_hash;
    }
    if (object.data !== void 0 && object.data !== null) {
      message.data = import_any.Any.fromAmino(object.data);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.class_id = message.classId === "" ? void 0 : message.classId;
    obj.id = message.id === "" ? void 0 : message.id;
    obj.uri = message.uri === "" ? void 0 : message.uri;
    obj.uri_hash = message.uriHash === "" ? void 0 : message.uriHash;
    obj.data = message.data ? import_any.Any.toAmino(message.data) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return NFT.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/NFT",
      value: NFT.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return NFT.decode(message.value);
  },
  toProto(message) {
    return NFT.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.nft.v1beta1.NFT",
      value: NFT.encode(message).finish()
    };
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Class,
  NFT
});
