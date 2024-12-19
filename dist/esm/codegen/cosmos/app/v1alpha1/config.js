import { Any } from "../../../google/protobuf/any";
import { BinaryReader, BinaryWriter } from "../../../binary";
function createBaseConfig() {
  return {
    modules: [],
    golangBindings: []
  };
}
const Config = {
  typeUrl: "/cosmos.app.v1alpha1.Config",
  encode(message, writer = BinaryWriter.create()) {
    for (const v of message.modules) {
      ModuleConfig.encode(v, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.golangBindings) {
      GolangBinding.encode(v, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  encode(message, writer = BinaryWriter.create()) {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.config !== void 0) {
      Any.encode(message.config, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.golangBindings) {
      GolangBinding.encode(v, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseModuleConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.config = Any.decode(reader, reader.uint32());
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
    message.config = object.config !== void 0 && object.config !== null ? Any.fromPartial(object.config) : void 0;
    message.golangBindings = object.golangBindings?.map((e) => GolangBinding.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseModuleConfig();
    if (object.name !== void 0 && object.name !== null) {
      message.name = object.name;
    }
    if (object.config !== void 0 && object.config !== null) {
      message.config = Any.fromAmino(object.config);
    }
    message.golangBindings = object.golang_bindings?.map((e) => GolangBinding.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.name = message.name === "" ? void 0 : message.name;
    obj.config = message.config ? Any.toAmino(message.config) : void 0;
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
  encode(message, writer = BinaryWriter.create()) {
    if (message.interfaceType !== "") {
      writer.uint32(10).string(message.interfaceType);
    }
    if (message.implementation !== "") {
      writer.uint32(18).string(message.implementation);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
export {
  Config,
  GolangBinding,
  ModuleConfig
};
