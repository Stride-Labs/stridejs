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
var types_exports = {};
__export(types_exports, {
  GenesisAccountPermissions: () => GenesisAccountPermissions,
  GenesisState: () => GenesisState,
  Permissions: () => Permissions,
  Permissions_Level: () => Permissions_Level,
  Permissions_LevelAmino: () => Permissions_LevelAmino,
  Permissions_LevelSDKType: () => Permissions_LevelSDKType,
  permissions_LevelFromJSON: () => permissions_LevelFromJSON,
  permissions_LevelToJSON: () => permissions_LevelToJSON
});
module.exports = __toCommonJS(types_exports);
var import_binary = require("../../../binary");
var Permissions_Level = /* @__PURE__ */ ((Permissions_Level2) => {
  Permissions_Level2[Permissions_Level2["LEVEL_NONE_UNSPECIFIED"] = 0] = "LEVEL_NONE_UNSPECIFIED";
  Permissions_Level2[Permissions_Level2["LEVEL_SOME_MSGS"] = 1] = "LEVEL_SOME_MSGS";
  Permissions_Level2[Permissions_Level2["LEVEL_ALL_MSGS"] = 2] = "LEVEL_ALL_MSGS";
  Permissions_Level2[Permissions_Level2["LEVEL_SUPER_ADMIN"] = 3] = "LEVEL_SUPER_ADMIN";
  Permissions_Level2[Permissions_Level2["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return Permissions_Level2;
})(Permissions_Level || {});
const Permissions_LevelSDKType = Permissions_Level;
const Permissions_LevelAmino = Permissions_Level;
function permissions_LevelFromJSON(object) {
  switch (object) {
    case 0:
    case "LEVEL_NONE_UNSPECIFIED":
      return 0 /* LEVEL_NONE_UNSPECIFIED */;
    case 1:
    case "LEVEL_SOME_MSGS":
      return 1 /* LEVEL_SOME_MSGS */;
    case 2:
    case "LEVEL_ALL_MSGS":
      return 2 /* LEVEL_ALL_MSGS */;
    case 3:
    case "LEVEL_SUPER_ADMIN":
      return 3 /* LEVEL_SUPER_ADMIN */;
    case -1:
    case "UNRECOGNIZED":
    default:
      return -1 /* UNRECOGNIZED */;
  }
}
function permissions_LevelToJSON(object) {
  switch (object) {
    case 0 /* LEVEL_NONE_UNSPECIFIED */:
      return "LEVEL_NONE_UNSPECIFIED";
    case 1 /* LEVEL_SOME_MSGS */:
      return "LEVEL_SOME_MSGS";
    case 2 /* LEVEL_ALL_MSGS */:
      return "LEVEL_ALL_MSGS";
    case 3 /* LEVEL_SUPER_ADMIN */:
      return "LEVEL_SUPER_ADMIN";
    case -1 /* UNRECOGNIZED */:
    default:
      return "UNRECOGNIZED";
  }
}
function createBasePermissions() {
  return {
    level: 0,
    limitTypeUrls: []
  };
}
const Permissions = {
  typeUrl: "/cosmos.circuit.v1.Permissions",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.level !== 0) {
      writer.uint32(8).int32(message.level);
    }
    for (const v of message.limitTypeUrls) {
      writer.uint32(18).string(v);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBasePermissions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.level = reader.int32();
          break;
        case 2:
          message.limitTypeUrls.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBasePermissions();
    message.level = object.level ?? 0;
    message.limitTypeUrls = object.limitTypeUrls?.map((e) => e) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBasePermissions();
    if (object.level !== void 0 && object.level !== null) {
      message.level = object.level;
    }
    message.limitTypeUrls = object.limit_type_urls?.map((e) => e) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.level = message.level === 0 ? void 0 : message.level;
    if (message.limitTypeUrls) {
      obj.limit_type_urls = message.limitTypeUrls.map((e) => e);
    } else {
      obj.limit_type_urls = message.limitTypeUrls;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return Permissions.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/Permissions",
      value: Permissions.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return Permissions.decode(message.value);
  },
  toProto(message) {
    return Permissions.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.circuit.v1.Permissions",
      value: Permissions.encode(message).finish()
    };
  }
};
function createBaseGenesisAccountPermissions() {
  return {
    address: "",
    permissions: void 0
  };
}
const GenesisAccountPermissions = {
  typeUrl: "/cosmos.circuit.v1.GenesisAccountPermissions",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.permissions !== void 0) {
      Permissions.encode(message.permissions, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseGenesisAccountPermissions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.permissions = Permissions.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseGenesisAccountPermissions();
    message.address = object.address ?? "";
    message.permissions = object.permissions !== void 0 && object.permissions !== null ? Permissions.fromPartial(object.permissions) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseGenesisAccountPermissions();
    if (object.address !== void 0 && object.address !== null) {
      message.address = object.address;
    }
    if (object.permissions !== void 0 && object.permissions !== null) {
      message.permissions = Permissions.fromAmino(object.permissions);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.address = message.address === "" ? void 0 : message.address;
    obj.permissions = message.permissions ? Permissions.toAmino(message.permissions) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return GenesisAccountPermissions.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/GenesisAccountPermissions",
      value: GenesisAccountPermissions.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return GenesisAccountPermissions.decode(message.value);
  },
  toProto(message) {
    return GenesisAccountPermissions.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.circuit.v1.GenesisAccountPermissions",
      value: GenesisAccountPermissions.encode(message).finish()
    };
  }
};
function createBaseGenesisState() {
  return {
    accountPermissions: [],
    disabledTypeUrls: []
  };
}
const GenesisState = {
  typeUrl: "/cosmos.circuit.v1.GenesisState",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    for (const v of message.accountPermissions) {
      GenesisAccountPermissions.encode(v, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.disabledTypeUrls) {
      writer.uint32(18).string(v);
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
          message.accountPermissions.push(GenesisAccountPermissions.decode(reader, reader.uint32()));
          break;
        case 2:
          message.disabledTypeUrls.push(reader.string());
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
    message.accountPermissions = object.accountPermissions?.map((e) => GenesisAccountPermissions.fromPartial(e)) || [];
    message.disabledTypeUrls = object.disabledTypeUrls?.map((e) => e) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseGenesisState();
    message.accountPermissions = object.account_permissions?.map((e) => GenesisAccountPermissions.fromAmino(e)) || [];
    message.disabledTypeUrls = object.disabled_type_urls?.map((e) => e) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.accountPermissions) {
      obj.account_permissions = message.accountPermissions.map((e) => e ? GenesisAccountPermissions.toAmino(e) : void 0);
    } else {
      obj.account_permissions = message.accountPermissions;
    }
    if (message.disabledTypeUrls) {
      obj.disabled_type_urls = message.disabledTypeUrls.map((e) => e);
    } else {
      obj.disabled_type_urls = message.disabledTypeUrls;
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
      typeUrl: "/cosmos.circuit.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  GenesisAccountPermissions,
  GenesisState,
  Permissions,
  Permissions_Level,
  Permissions_LevelAmino,
  Permissions_LevelSDKType,
  permissions_LevelFromJSON,
  permissions_LevelToJSON
});
