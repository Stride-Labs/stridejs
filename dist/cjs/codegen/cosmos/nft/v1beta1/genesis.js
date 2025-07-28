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
var genesis_exports = {};
__export(genesis_exports, {
  Entry: () => Entry,
  GenesisState: () => GenesisState
});
module.exports = __toCommonJS(genesis_exports);
var import_nft = require("./nft");
var import_binary = require("../../../binary");
function createBaseGenesisState() {
  return {
    classes: [],
    entries: []
  };
}
const GenesisState = {
  typeUrl: "/cosmos.nft.v1beta1.GenesisState",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    for (const v of message.classes) {
      import_nft.Class.encode(v, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.entries) {
      Entry.encode(v, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classes.push(import_nft.Class.decode(reader, reader.uint32()));
          break;
        case 2:
          message.entries.push(Entry.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseGenesisState();
    message.classes = object.classes?.map((e) => import_nft.Class.fromPartial(e)) || [];
    message.entries = object.entries?.map((e) => Entry.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseGenesisState();
    message.classes = object.classes?.map((e) => import_nft.Class.fromAmino(e)) || [];
    message.entries = object.entries?.map((e) => Entry.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.classes) {
      obj.classes = message.classes.map((e) => e ? import_nft.Class.toAmino(e) : void 0);
    } else {
      obj.classes = message.classes;
    }
    if (message.entries) {
      obj.entries = message.entries.map((e) => e ? Entry.toAmino(e) : void 0);
    } else {
      obj.entries = message.entries;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return GenesisState.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/GenesisState",
      value: GenesisState.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return GenesisState.decode(message.value);
  },
  toProto(message) {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.nft.v1beta1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
function createBaseEntry() {
  return {
    owner: "",
    nfts: []
  };
}
const Entry = {
  typeUrl: "/cosmos.nft.v1beta1.Entry",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    for (const v of message.nfts) {
      import_nft.NFT.encode(v, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.nfts.push(import_nft.NFT.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseEntry();
    message.owner = object.owner ?? "";
    message.nfts = object.nfts?.map((e) => import_nft.NFT.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseEntry();
    if (object.owner !== void 0 && object.owner !== null) {
      message.owner = object.owner;
    }
    message.nfts = object.nfts?.map((e) => import_nft.NFT.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.owner = message.owner === "" ? void 0 : message.owner;
    if (message.nfts) {
      obj.nfts = message.nfts.map((e) => e ? import_nft.NFT.toAmino(e) : void 0);
    } else {
      obj.nfts = message.nfts;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return Entry.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/Entry",
      value: Entry.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return Entry.decode(message.value);
  },
  toProto(message) {
    return Entry.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.nft.v1beta1.Entry",
      value: Entry.encode(message).finish()
    };
  }
};
// Removed broken CommonJS export annotation
