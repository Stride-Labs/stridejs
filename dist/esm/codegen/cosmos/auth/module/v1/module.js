import { BinaryReader, BinaryWriter } from "../../../../binary";
function createBaseModule() {
  return {
    bech32Prefix: "",
    moduleAccountPermissions: [],
    authority: ""
  };
}
const Module = {
  typeUrl: "/cosmos.auth.module.v1.Module",
  encode(message, writer = BinaryWriter.create()) {
    if (message.bech32Prefix !== "") {
      writer.uint32(10).string(message.bech32Prefix);
    }
    for (const v of message.moduleAccountPermissions) {
      ModuleAccountPermission.encode(v, writer.uint32(18).fork()).ldelim();
    }
    if (message.authority !== "") {
      writer.uint32(26).string(message.authority);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseModule();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bech32Prefix = reader.string();
          break;
        case 2:
          message.moduleAccountPermissions.push(ModuleAccountPermission.decode(reader, reader.uint32()));
          break;
        case 3:
          message.authority = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseModule();
    message.bech32Prefix = object.bech32Prefix ?? "";
    message.moduleAccountPermissions = object.moduleAccountPermissions?.map((e) => ModuleAccountPermission.fromPartial(e)) || [];
    message.authority = object.authority ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseModule();
    if (object.bech32_prefix !== void 0 && object.bech32_prefix !== null) {
      message.bech32Prefix = object.bech32_prefix;
    }
    message.moduleAccountPermissions = object.module_account_permissions?.map((e) => ModuleAccountPermission.fromAmino(e)) || [];
    if (object.authority !== void 0 && object.authority !== null) {
      message.authority = object.authority;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.bech32_prefix = message.bech32Prefix === "" ? void 0 : message.bech32Prefix;
    if (message.moduleAccountPermissions) {
      obj.module_account_permissions = message.moduleAccountPermissions.map((e) => e ? ModuleAccountPermission.toAmino(e) : void 0);
    } else {
      obj.module_account_permissions = message.moduleAccountPermissions;
    }
    obj.authority = message.authority === "" ? void 0 : message.authority;
    return obj;
  },
  fromAminoMsg(object) {
    return Module.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/Module",
      value: Module.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return Module.decode(message.value);
  },
  toProto(message) {
    return Module.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.auth.module.v1.Module",
      value: Module.encode(message).finish()
    };
  }
};
function createBaseModuleAccountPermission() {
  return {
    account: "",
    permissions: []
  };
}
const ModuleAccountPermission = {
  typeUrl: "/cosmos.auth.module.v1.ModuleAccountPermission",
  encode(message, writer = BinaryWriter.create()) {
    if (message.account !== "") {
      writer.uint32(10).string(message.account);
    }
    for (const v of message.permissions) {
      writer.uint32(18).string(v);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseModuleAccountPermission();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.account = reader.string();
          break;
        case 2:
          message.permissions.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseModuleAccountPermission();
    message.account = object.account ?? "";
    message.permissions = object.permissions?.map((e) => e) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseModuleAccountPermission();
    if (object.account !== void 0 && object.account !== null) {
      message.account = object.account;
    }
    message.permissions = object.permissions?.map((e) => e) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.account = message.account === "" ? void 0 : message.account;
    if (message.permissions) {
      obj.permissions = message.permissions.map((e) => e);
    } else {
      obj.permissions = message.permissions;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return ModuleAccountPermission.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/ModuleAccountPermission",
      value: ModuleAccountPermission.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return ModuleAccountPermission.decode(message.value);
  },
  toProto(message) {
    return ModuleAccountPermission.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.auth.module.v1.ModuleAccountPermission",
      value: ModuleAccountPermission.encode(message).finish()
    };
  }
};
export {
  Module,
  ModuleAccountPermission
};
