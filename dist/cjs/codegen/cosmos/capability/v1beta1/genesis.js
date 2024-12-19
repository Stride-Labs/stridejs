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
  GenesisOwners: () => GenesisOwners,
  GenesisState: () => GenesisState
});
module.exports = __toCommonJS(genesis_exports);
var import_capability = require("./capability");
var import_binary = require("../../../binary");
function createBaseGenesisOwners() {
  return {
    index: BigInt(0),
    indexOwners: import_capability.CapabilityOwners.fromPartial({})
  };
}
const GenesisOwners = {
  typeUrl: "/cosmos.capability.v1beta1.GenesisOwners",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.index !== BigInt(0)) {
      writer.uint32(8).uint64(message.index);
    }
    if (message.indexOwners !== void 0) {
      import_capability.CapabilityOwners.encode(message.indexOwners, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseGenesisOwners();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.uint64();
          break;
        case 2:
          message.indexOwners = import_capability.CapabilityOwners.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseGenesisOwners();
    message.index = object.index !== void 0 && object.index !== null ? BigInt(object.index.toString()) : BigInt(0);
    message.indexOwners = object.indexOwners !== void 0 && object.indexOwners !== null ? import_capability.CapabilityOwners.fromPartial(object.indexOwners) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseGenesisOwners();
    if (object.index !== void 0 && object.index !== null) {
      message.index = BigInt(object.index);
    }
    if (object.index_owners !== void 0 && object.index_owners !== null) {
      message.indexOwners = import_capability.CapabilityOwners.fromAmino(object.index_owners);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.index = message.index !== BigInt(0) ? message.index.toString() : void 0;
    obj.index_owners = message.indexOwners ? import_capability.CapabilityOwners.toAmino(message.indexOwners) : import_capability.CapabilityOwners.toAmino(import_capability.CapabilityOwners.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object) {
    return GenesisOwners.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/GenesisOwners",
      value: GenesisOwners.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return GenesisOwners.decode(message.value);
  },
  toProto(message) {
    return GenesisOwners.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.capability.v1beta1.GenesisOwners",
      value: GenesisOwners.encode(message).finish()
    };
  }
};
function createBaseGenesisState() {
  return {
    index: BigInt(0),
    owners: []
  };
}
const GenesisState = {
  typeUrl: "/cosmos.capability.v1beta1.GenesisState",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.index !== BigInt(0)) {
      writer.uint32(8).uint64(message.index);
    }
    for (const v of message.owners) {
      GenesisOwners.encode(v, writer.uint32(18).fork()).ldelim();
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
          message.index = reader.uint64();
          break;
        case 2:
          message.owners.push(GenesisOwners.decode(reader, reader.uint32()));
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
    message.index = object.index !== void 0 && object.index !== null ? BigInt(object.index.toString()) : BigInt(0);
    message.owners = object.owners?.map((e) => GenesisOwners.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseGenesisState();
    if (object.index !== void 0 && object.index !== null) {
      message.index = BigInt(object.index);
    }
    message.owners = object.owners?.map((e) => GenesisOwners.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.index = message.index !== BigInt(0) ? message.index.toString() : void 0;
    if (message.owners) {
      obj.owners = message.owners.map((e) => e ? GenesisOwners.toAmino(e) : void 0);
    } else {
      obj.owners = message.owners;
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
      typeUrl: "/cosmos.capability.v1beta1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  GenesisOwners,
  GenesisState
});
