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
var config_exports = {};
__export(config_exports, {
  Config: () => Config,
  GolangBinding: () => GolangBinding,
  ModuleConfig: () => ModuleConfig
});
module.exports = __toCommonJS(config_exports);
var import_any = require("../../../google/protobuf/any");
var import_binary = require("../../../binary");
function createBaseConfig() {
  return {
    modules: [],
    golangBindings: []
  };
}
const Config = {
  typeUrl: "/cosmos.app.v1alpha1.Config",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    for (const v of message.modules) {
      ModuleConfig.encode(v, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.golangBindings) {
      GolangBinding.encode(v, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.modules.push(ModuleConfig.decode(reader, reader.uint32()));
          break;
        case 2:
          message.golangBindings.push(GolangBinding.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseConfig();
    message.modules = object.modules?.map((e) => ModuleConfig.fromPartial(e)) || [];
    message.golangBindings = object.golangBindings?.map((e) => GolangBinding.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseConfig();
    message.modules = object.modules?.map((e) => ModuleConfig.fromAmino(e)) || [];
    message.golangBindings = object.golang_bindings?.map((e) => GolangBinding.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.modules) {
      obj.modules = message.modules.map((e) => e ? ModuleConfig.toAmino(e) : void 0);
    } else {
      obj.modules = message.modules;
    }
    if (message.golangBindings) {
      obj.golang_bindings = message.golangBindings.map((e) => e ? GolangBinding.toAmino(e) : void 0);
    } else {
      obj.golang_bindings = message.golangBindings;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return Config.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/Config",
      value: Config.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return Config.decode(message.value);
  },
  toProto(message) {
    return Config.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.app.v1alpha1.Config",
      value: Config.encode(message).finish()
    };
  }
};
function createBaseModuleConfig() {
  return {
    name: "",
    config: void 0,
    golangBindings: []
  };
}
const ModuleConfig = {
  typeUrl: "/cosmos.app.v1alpha1.ModuleConfig",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.config !== void 0) {
      import_any.Any.encode(message.config, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.golangBindings) {
      GolangBinding.encode(v, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseModuleConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.config = import_any.Any.decode(reader, reader.uint32());
          break;
        case 3:
          message.golangBindings.push(GolangBinding.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseModuleConfig();
    message.name = object.name ?? "";
    message.config = object.config !== void 0 && object.config !== null ? import_any.Any.fromPartial(object.config) : void 0;
    message.golangBindings = object.golangBindings?.map((e) => GolangBinding.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseModuleConfig();
    if (object.name !== void 0 && object.name !== null) {
      message.name = object.name;
    }
    if (object.config !== void 0 && object.config !== null) {
      message.config = import_any.Any.fromAmino(object.config);
    }
    message.golangBindings = object.golang_bindings?.map((e) => GolangBinding.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.name = message.name === "" ? void 0 : message.name;
    obj.config = message.config ? import_any.Any.toAmino(message.config) : void 0;
    if (message.golangBindings) {
      obj.golang_bindings = message.golangBindings.map((e) => e ? GolangBinding.toAmino(e) : void 0);
    } else {
      obj.golang_bindings = message.golangBindings;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return ModuleConfig.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/ModuleConfig",
      value: ModuleConfig.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return ModuleConfig.decode(message.value);
  },
  toProto(message) {
    return ModuleConfig.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.app.v1alpha1.ModuleConfig",
      value: ModuleConfig.encode(message).finish()
    };
  }
};
function createBaseGolangBinding() {
  return {
    interfaceType: "",
    implementation: ""
  };
}
const GolangBinding = {
  typeUrl: "/cosmos.app.v1alpha1.GolangBinding",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.interfaceType !== "") {
      writer.uint32(10).string(message.interfaceType);
    }
    if (message.implementation !== "") {
      writer.uint32(18).string(message.implementation);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseGolangBinding();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.interfaceType = reader.string();
          break;
        case 2:
          message.implementation = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseGolangBinding();
    message.interfaceType = object.interfaceType ?? "";
    message.implementation = object.implementation ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseGolangBinding();
    if (object.interface_type !== void 0 && object.interface_type !== null) {
      message.interfaceType = object.interface_type;
    }
    if (object.implementation !== void 0 && object.implementation !== null) {
      message.implementation = object.implementation;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.interface_type = message.interfaceType === "" ? void 0 : message.interfaceType;
    obj.implementation = message.implementation === "" ? void 0 : message.implementation;
    return obj;
  },
  fromAminoMsg(object) {
    return GolangBinding.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/GolangBinding",
      value: GolangBinding.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return GolangBinding.decode(message.value);
  },
  toProto(message) {
    return GolangBinding.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.app.v1alpha1.GolangBinding",
      value: GolangBinding.encode(message).finish()
    };
  }
};
// Proper CommonJS exports for dynamic imports
module.exports = {
  Config,
  GolangBinding,
  ModuleConfig
};
