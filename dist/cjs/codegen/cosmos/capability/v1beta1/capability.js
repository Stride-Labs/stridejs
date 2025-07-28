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
var capability_exports = {};
__export(capability_exports, {
  Capability: () => Capability,
  CapabilityOwners: () => CapabilityOwners,
  Owner: () => Owner
});
module.exports = __toCommonJS(capability_exports);
var import_binary = require("../../../binary");
function createBaseCapability() {
  return {
    index: BigInt(0)
  };
}
const Capability = {
  typeUrl: "/cosmos.capability.v1beta1.Capability",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.index !== BigInt(0)) {
      writer.uint32(8).uint64(message.index);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseCapability();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseCapability();
    message.index = object.index !== void 0 && object.index !== null ? BigInt(object.index.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object) {
    const message = createBaseCapability();
    if (object.index !== void 0 && object.index !== null) {
      message.index = BigInt(object.index);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.index = message.index !== BigInt(0) ? message.index?.toString() : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return Capability.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/Capability",
      value: Capability.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return Capability.decode(message.value);
  },
  toProto(message) {
    return Capability.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.capability.v1beta1.Capability",
      value: Capability.encode(message).finish()
    };
  }
};
function createBaseOwner() {
  return {
    module: "",
    name: ""
  };
}
const Owner = {
  typeUrl: "/cosmos.capability.v1beta1.Owner",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.module !== "") {
      writer.uint32(10).string(message.module);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseOwner();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.module = reader.string();
          break;
        case 2:
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
    const message = createBaseOwner();
    message.module = object.module ?? "";
    message.name = object.name ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseOwner();
    if (object.module !== void 0 && object.module !== null) {
      message.module = object.module;
    }
    if (object.name !== void 0 && object.name !== null) {
      message.name = object.name;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.module = message.module === "" ? void 0 : message.module;
    obj.name = message.name === "" ? void 0 : message.name;
    return obj;
  },
  fromAminoMsg(object) {
    return Owner.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/Owner",
      value: Owner.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return Owner.decode(message.value);
  },
  toProto(message) {
    return Owner.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.capability.v1beta1.Owner",
      value: Owner.encode(message).finish()
    };
  }
};
function createBaseCapabilityOwners() {
  return {
    owners: []
  };
}
const CapabilityOwners = {
  typeUrl: "/cosmos.capability.v1beta1.CapabilityOwners",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    for (const v of message.owners) {
      Owner.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseCapabilityOwners();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owners.push(Owner.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseCapabilityOwners();
    message.owners = object.owners?.map((e) => Owner.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseCapabilityOwners();
    message.owners = object.owners?.map((e) => Owner.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.owners) {
      obj.owners = message.owners.map((e) => e ? Owner.toAmino(e) : void 0);
    } else {
      obj.owners = message.owners;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return CapabilityOwners.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/CapabilityOwners",
      value: CapabilityOwners.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return CapabilityOwners.decode(message.value);
  },
  toProto(message) {
    return CapabilityOwners.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.capability.v1beta1.CapabilityOwners",
      value: CapabilityOwners.encode(message).finish()
    };
  }
};
// Proper CommonJS exports for dynamic imports
module.exports = {
  Capability,
  CapabilityOwners,
  Owner
};
