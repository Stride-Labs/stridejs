import { BinaryReader, BinaryWriter } from "../../../binary";
function createBaseModuleOptions() {
  return {
    tx: void 0,
    query: void 0
  };
}
const ModuleOptions = {
  typeUrl: "/cosmos.autocli.v1.ModuleOptions",
  encode(message, writer = BinaryWriter.create()) {
    if (message.tx !== void 0) {
      ServiceCommandDescriptor.encode(message.tx, writer.uint32(10).fork()).ldelim();
    }
    if (message.query !== void 0) {
      ServiceCommandDescriptor.encode(message.query, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseModuleOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tx = ServiceCommandDescriptor.decode(reader, reader.uint32());
          break;
        case 2:
          message.query = ServiceCommandDescriptor.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseModuleOptions();
    message.tx = object.tx !== void 0 && object.tx !== null ? ServiceCommandDescriptor.fromPartial(object.tx) : void 0;
    message.query = object.query !== void 0 && object.query !== null ? ServiceCommandDescriptor.fromPartial(object.query) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseModuleOptions();
    if (object.tx !== void 0 && object.tx !== null) {
      message.tx = ServiceCommandDescriptor.fromAmino(object.tx);
    }
    if (object.query !== void 0 && object.query !== null) {
      message.query = ServiceCommandDescriptor.fromAmino(object.query);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.tx = message.tx ? ServiceCommandDescriptor.toAmino(message.tx) : void 0;
    obj.query = message.query ? ServiceCommandDescriptor.toAmino(message.query) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return ModuleOptions.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/ModuleOptions",
      value: ModuleOptions.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return ModuleOptions.decode(message.value);
  },
  toProto(message) {
    return ModuleOptions.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.autocli.v1.ModuleOptions",
      value: ModuleOptions.encode(message).finish()
    };
  }
};
function createBaseServiceCommandDescriptor_SubCommandsEntry() {
  return {
    key: "",
    value: void 0
  };
}
const ServiceCommandDescriptor_SubCommandsEntry = {
  encode(message, writer = BinaryWriter.create()) {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== void 0) {
      ServiceCommandDescriptor.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseServiceCommandDescriptor_SubCommandsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = ServiceCommandDescriptor.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseServiceCommandDescriptor_SubCommandsEntry();
    message.key = object.key ?? "";
    message.value = object.value !== void 0 && object.value !== null ? ServiceCommandDescriptor.fromPartial(object.value) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseServiceCommandDescriptor_SubCommandsEntry();
    if (object.key !== void 0 && object.key !== null) {
      message.key = object.key;
    }
    if (object.value !== void 0 && object.value !== null) {
      message.value = ServiceCommandDescriptor.fromAmino(object.value);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.key = message.key === "" ? void 0 : message.key;
    obj.value = message.value ? ServiceCommandDescriptor.toAmino(message.value) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return ServiceCommandDescriptor_SubCommandsEntry.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return ServiceCommandDescriptor_SubCommandsEntry.decode(message.value);
  },
  toProto(message) {
    return ServiceCommandDescriptor_SubCommandsEntry.encode(message).finish();
  }
};
function createBaseServiceCommandDescriptor() {
  return {
    service: "",
    rpcCommandOptions: [],
    subCommands: {}
  };
}
const ServiceCommandDescriptor = {
  typeUrl: "/cosmos.autocli.v1.ServiceCommandDescriptor",
  encode(message, writer = BinaryWriter.create()) {
    if (message.service !== "") {
      writer.uint32(10).string(message.service);
    }
    for (const v of message.rpcCommandOptions) {
      RpcCommandOptions.encode(v, writer.uint32(18).fork()).ldelim();
    }
    Object.entries(message.subCommands).forEach(([key, value]) => {
      ServiceCommandDescriptor_SubCommandsEntry.encode({
        key,
        value
      }, writer.uint32(26).fork()).ldelim();
    });
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseServiceCommandDescriptor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.service = reader.string();
          break;
        case 2:
          message.rpcCommandOptions.push(RpcCommandOptions.decode(reader, reader.uint32()));
          break;
        case 3:
          const entry3 = ServiceCommandDescriptor_SubCommandsEntry.decode(reader, reader.uint32());
          if (entry3.value !== void 0) {
            message.subCommands[entry3.key] = entry3.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseServiceCommandDescriptor();
    message.service = object.service ?? "";
    message.rpcCommandOptions = object.rpcCommandOptions?.map((e) => RpcCommandOptions.fromPartial(e)) || [];
    message.subCommands = Object.entries(object.subCommands ?? {}).reduce((acc, [key, value]) => {
      if (value !== void 0) {
        acc[key] = ServiceCommandDescriptor.fromPartial(value);
      }
      return acc;
    }, {});
    return message;
  },
  fromAmino(object) {
    const message = createBaseServiceCommandDescriptor();
    if (object.service !== void 0 && object.service !== null) {
      message.service = object.service;
    }
    message.rpcCommandOptions = object.rpc_command_options?.map((e) => RpcCommandOptions.fromAmino(e)) || [];
    message.subCommands = Object.entries(object.sub_commands ?? {}).reduce((acc, [key, value]) => {
      if (value !== void 0) {
        acc[key] = ServiceCommandDescriptor.fromAmino(value);
      }
      return acc;
    }, {});
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.service = message.service === "" ? void 0 : message.service;
    if (message.rpcCommandOptions) {
      obj.rpc_command_options = message.rpcCommandOptions.map((e) => e ? RpcCommandOptions.toAmino(e) : void 0);
    } else {
      obj.rpc_command_options = message.rpcCommandOptions;
    }
    obj.sub_commands = {};
    if (message.subCommands) {
      Object.entries(message.subCommands).forEach(([k, v]) => {
        obj.sub_commands[k] = ServiceCommandDescriptor.toAmino(v);
      });
    }
    return obj;
  },
  fromAminoMsg(object) {
    return ServiceCommandDescriptor.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/ServiceCommandDescriptor",
      value: ServiceCommandDescriptor.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return ServiceCommandDescriptor.decode(message.value);
  },
  toProto(message) {
    return ServiceCommandDescriptor.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.autocli.v1.ServiceCommandDescriptor",
      value: ServiceCommandDescriptor.encode(message).finish()
    };
  }
};
function createBaseRpcCommandOptions_FlagOptionsEntry() {
  return {
    key: "",
    value: void 0
  };
}
const RpcCommandOptions_FlagOptionsEntry = {
  encode(message, writer = BinaryWriter.create()) {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== void 0) {
      FlagOptions.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseRpcCommandOptions_FlagOptionsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = FlagOptions.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseRpcCommandOptions_FlagOptionsEntry();
    message.key = object.key ?? "";
    message.value = object.value !== void 0 && object.value !== null ? FlagOptions.fromPartial(object.value) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseRpcCommandOptions_FlagOptionsEntry();
    if (object.key !== void 0 && object.key !== null) {
      message.key = object.key;
    }
    if (object.value !== void 0 && object.value !== null) {
      message.value = FlagOptions.fromAmino(object.value);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.key = message.key === "" ? void 0 : message.key;
    obj.value = message.value ? FlagOptions.toAmino(message.value) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return RpcCommandOptions_FlagOptionsEntry.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return RpcCommandOptions_FlagOptionsEntry.decode(message.value);
  },
  toProto(message) {
    return RpcCommandOptions_FlagOptionsEntry.encode(message).finish();
  }
};
function createBaseRpcCommandOptions() {
  return {
    rpcMethod: "",
    use: "",
    long: "",
    short: "",
    example: "",
    alias: [],
    suggestFor: [],
    deprecated: "",
    version: "",
    flagOptions: {},
    positionalArgs: [],
    skip: false
  };
}
const RpcCommandOptions = {
  typeUrl: "/cosmos.autocli.v1.RpcCommandOptions",
  encode(message, writer = BinaryWriter.create()) {
    if (message.rpcMethod !== "") {
      writer.uint32(10).string(message.rpcMethod);
    }
    if (message.use !== "") {
      writer.uint32(18).string(message.use);
    }
    if (message.long !== "") {
      writer.uint32(26).string(message.long);
    }
    if (message.short !== "") {
      writer.uint32(34).string(message.short);
    }
    if (message.example !== "") {
      writer.uint32(42).string(message.example);
    }
    for (const v of message.alias) {
      writer.uint32(50).string(v);
    }
    for (const v of message.suggestFor) {
      writer.uint32(58).string(v);
    }
    if (message.deprecated !== "") {
      writer.uint32(66).string(message.deprecated);
    }
    if (message.version !== "") {
      writer.uint32(74).string(message.version);
    }
    Object.entries(message.flagOptions).forEach(([key, value]) => {
      RpcCommandOptions_FlagOptionsEntry.encode({
        key,
        value
      }, writer.uint32(82).fork()).ldelim();
    });
    for (const v of message.positionalArgs) {
      PositionalArgDescriptor.encode(v, writer.uint32(90).fork()).ldelim();
    }
    if (message.skip === true) {
      writer.uint32(96).bool(message.skip);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseRpcCommandOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rpcMethod = reader.string();
          break;
        case 2:
          message.use = reader.string();
          break;
        case 3:
          message.long = reader.string();
          break;
        case 4:
          message.short = reader.string();
          break;
        case 5:
          message.example = reader.string();
          break;
        case 6:
          message.alias.push(reader.string());
          break;
        case 7:
          message.suggestFor.push(reader.string());
          break;
        case 8:
          message.deprecated = reader.string();
          break;
        case 9:
          message.version = reader.string();
          break;
        case 10:
          const entry10 = RpcCommandOptions_FlagOptionsEntry.decode(reader, reader.uint32());
          if (entry10.value !== void 0) {
            message.flagOptions[entry10.key] = entry10.value;
          }
          break;
        case 11:
          message.positionalArgs.push(PositionalArgDescriptor.decode(reader, reader.uint32()));
          break;
        case 12:
          message.skip = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseRpcCommandOptions();
    message.rpcMethod = object.rpcMethod ?? "";
    message.use = object.use ?? "";
    message.long = object.long ?? "";
    message.short = object.short ?? "";
    message.example = object.example ?? "";
    message.alias = object.alias?.map((e) => e) || [];
    message.suggestFor = object.suggestFor?.map((e) => e) || [];
    message.deprecated = object.deprecated ?? "";
    message.version = object.version ?? "";
    message.flagOptions = Object.entries(object.flagOptions ?? {}).reduce((acc, [key, value]) => {
      if (value !== void 0) {
        acc[key] = FlagOptions.fromPartial(value);
      }
      return acc;
    }, {});
    message.positionalArgs = object.positionalArgs?.map((e) => PositionalArgDescriptor.fromPartial(e)) || [];
    message.skip = object.skip ?? false;
    return message;
  },
  fromAmino(object) {
    const message = createBaseRpcCommandOptions();
    if (object.rpc_method !== void 0 && object.rpc_method !== null) {
      message.rpcMethod = object.rpc_method;
    }
    if (object.use !== void 0 && object.use !== null) {
      message.use = object.use;
    }
    if (object.long !== void 0 && object.long !== null) {
      message.long = object.long;
    }
    if (object.short !== void 0 && object.short !== null) {
      message.short = object.short;
    }
    if (object.example !== void 0 && object.example !== null) {
      message.example = object.example;
    }
    message.alias = object.alias?.map((e) => e) || [];
    message.suggestFor = object.suggest_for?.map((e) => e) || [];
    if (object.deprecated !== void 0 && object.deprecated !== null) {
      message.deprecated = object.deprecated;
    }
    if (object.version !== void 0 && object.version !== null) {
      message.version = object.version;
    }
    message.flagOptions = Object.entries(object.flag_options ?? {}).reduce((acc, [key, value]) => {
      if (value !== void 0) {
        acc[key] = FlagOptions.fromAmino(value);
      }
      return acc;
    }, {});
    message.positionalArgs = object.positional_args?.map((e) => PositionalArgDescriptor.fromAmino(e)) || [];
    if (object.skip !== void 0 && object.skip !== null) {
      message.skip = object.skip;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.rpc_method = message.rpcMethod === "" ? void 0 : message.rpcMethod;
    obj.use = message.use === "" ? void 0 : message.use;
    obj.long = message.long === "" ? void 0 : message.long;
    obj.short = message.short === "" ? void 0 : message.short;
    obj.example = message.example === "" ? void 0 : message.example;
    if (message.alias) {
      obj.alias = message.alias.map((e) => e);
    } else {
      obj.alias = message.alias;
    }
    if (message.suggestFor) {
      obj.suggest_for = message.suggestFor.map((e) => e);
    } else {
      obj.suggest_for = message.suggestFor;
    }
    obj.deprecated = message.deprecated === "" ? void 0 : message.deprecated;
    obj.version = message.version === "" ? void 0 : message.version;
    obj.flag_options = {};
    if (message.flagOptions) {
      Object.entries(message.flagOptions).forEach(([k, v]) => {
        obj.flag_options[k] = FlagOptions.toAmino(v);
      });
    }
    if (message.positionalArgs) {
      obj.positional_args = message.positionalArgs.map((e) => e ? PositionalArgDescriptor.toAmino(e) : void 0);
    } else {
      obj.positional_args = message.positionalArgs;
    }
    obj.skip = message.skip === false ? void 0 : message.skip;
    return obj;
  },
  fromAminoMsg(object) {
    return RpcCommandOptions.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/RpcCommandOptions",
      value: RpcCommandOptions.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return RpcCommandOptions.decode(message.value);
  },
  toProto(message) {
    return RpcCommandOptions.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.autocli.v1.RpcCommandOptions",
      value: RpcCommandOptions.encode(message).finish()
    };
  }
};
function createBaseFlagOptions() {
  return {
    name: "",
    shorthand: "",
    usage: "",
    defaultValue: "",
    deprecated: "",
    shorthandDeprecated: "",
    hidden: false
  };
}
const FlagOptions = {
  typeUrl: "/cosmos.autocli.v1.FlagOptions",
  encode(message, writer = BinaryWriter.create()) {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.shorthand !== "") {
      writer.uint32(18).string(message.shorthand);
    }
    if (message.usage !== "") {
      writer.uint32(26).string(message.usage);
    }
    if (message.defaultValue !== "") {
      writer.uint32(34).string(message.defaultValue);
    }
    if (message.deprecated !== "") {
      writer.uint32(50).string(message.deprecated);
    }
    if (message.shorthandDeprecated !== "") {
      writer.uint32(58).string(message.shorthandDeprecated);
    }
    if (message.hidden === true) {
      writer.uint32(64).bool(message.hidden);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseFlagOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.shorthand = reader.string();
          break;
        case 3:
          message.usage = reader.string();
          break;
        case 4:
          message.defaultValue = reader.string();
          break;
        case 6:
          message.deprecated = reader.string();
          break;
        case 7:
          message.shorthandDeprecated = reader.string();
          break;
        case 8:
          message.hidden = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseFlagOptions();
    message.name = object.name ?? "";
    message.shorthand = object.shorthand ?? "";
    message.usage = object.usage ?? "";
    message.defaultValue = object.defaultValue ?? "";
    message.deprecated = object.deprecated ?? "";
    message.shorthandDeprecated = object.shorthandDeprecated ?? "";
    message.hidden = object.hidden ?? false;
    return message;
  },
  fromAmino(object) {
    const message = createBaseFlagOptions();
    if (object.name !== void 0 && object.name !== null) {
      message.name = object.name;
    }
    if (object.shorthand !== void 0 && object.shorthand !== null) {
      message.shorthand = object.shorthand;
    }
    if (object.usage !== void 0 && object.usage !== null) {
      message.usage = object.usage;
    }
    if (object.default_value !== void 0 && object.default_value !== null) {
      message.defaultValue = object.default_value;
    }
    if (object.deprecated !== void 0 && object.deprecated !== null) {
      message.deprecated = object.deprecated;
    }
    if (object.shorthand_deprecated !== void 0 && object.shorthand_deprecated !== null) {
      message.shorthandDeprecated = object.shorthand_deprecated;
    }
    if (object.hidden !== void 0 && object.hidden !== null) {
      message.hidden = object.hidden;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.name = message.name === "" ? void 0 : message.name;
    obj.shorthand = message.shorthand === "" ? void 0 : message.shorthand;
    obj.usage = message.usage === "" ? void 0 : message.usage;
    obj.default_value = message.defaultValue === "" ? void 0 : message.defaultValue;
    obj.deprecated = message.deprecated === "" ? void 0 : message.deprecated;
    obj.shorthand_deprecated = message.shorthandDeprecated === "" ? void 0 : message.shorthandDeprecated;
    obj.hidden = message.hidden === false ? void 0 : message.hidden;
    return obj;
  },
  fromAminoMsg(object) {
    return FlagOptions.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/FlagOptions",
      value: FlagOptions.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return FlagOptions.decode(message.value);
  },
  toProto(message) {
    return FlagOptions.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.autocli.v1.FlagOptions",
      value: FlagOptions.encode(message).finish()
    };
  }
};
function createBasePositionalArgDescriptor() {
  return {
    protoField: "",
    varargs: false
  };
}
const PositionalArgDescriptor = {
  typeUrl: "/cosmos.autocli.v1.PositionalArgDescriptor",
  encode(message, writer = BinaryWriter.create()) {
    if (message.protoField !== "") {
      writer.uint32(10).string(message.protoField);
    }
    if (message.varargs === true) {
      writer.uint32(16).bool(message.varargs);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBasePositionalArgDescriptor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.protoField = reader.string();
          break;
        case 2:
          message.varargs = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBasePositionalArgDescriptor();
    message.protoField = object.protoField ?? "";
    message.varargs = object.varargs ?? false;
    return message;
  },
  fromAmino(object) {
    const message = createBasePositionalArgDescriptor();
    if (object.proto_field !== void 0 && object.proto_field !== null) {
      message.protoField = object.proto_field;
    }
    if (object.varargs !== void 0 && object.varargs !== null) {
      message.varargs = object.varargs;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.proto_field = message.protoField === "" ? void 0 : message.protoField;
    obj.varargs = message.varargs === false ? void 0 : message.varargs;
    return obj;
  },
  fromAminoMsg(object) {
    return PositionalArgDescriptor.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/PositionalArgDescriptor",
      value: PositionalArgDescriptor.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return PositionalArgDescriptor.decode(message.value);
  },
  toProto(message) {
    return PositionalArgDescriptor.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.autocli.v1.PositionalArgDescriptor",
      value: PositionalArgDescriptor.encode(message).finish()
    };
  }
};
export {
  FlagOptions,
  ModuleOptions,
  PositionalArgDescriptor,
  RpcCommandOptions,
  RpcCommandOptions_FlagOptionsEntry,
  ServiceCommandDescriptor,
  ServiceCommandDescriptor_SubCommandsEntry
};
