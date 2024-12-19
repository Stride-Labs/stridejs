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
var tx_exports = {};
__export(tx_exports, {
  MsgCancelUpgrade: () => MsgCancelUpgrade,
  MsgCancelUpgradeResponse: () => MsgCancelUpgradeResponse,
  MsgSoftwareUpgrade: () => MsgSoftwareUpgrade,
  MsgSoftwareUpgradeResponse: () => MsgSoftwareUpgradeResponse
});
module.exports = __toCommonJS(tx_exports);
var import_upgrade = require("./upgrade");
var import_binary = require("../../../binary");
function createBaseMsgSoftwareUpgrade() {
  return {
    authority: "",
    plan: import_upgrade.Plan.fromPartial({})
  };
}
const MsgSoftwareUpgrade = {
  typeUrl: "/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.plan !== void 0) {
      import_upgrade.Plan.encode(message.plan, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgSoftwareUpgrade();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.plan = import_upgrade.Plan.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgSoftwareUpgrade();
    message.authority = object.authority ?? "";
    message.plan = object.plan !== void 0 && object.plan !== null ? import_upgrade.Plan.fromPartial(object.plan) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgSoftwareUpgrade();
    if (object.authority !== void 0 && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.plan !== void 0 && object.plan !== null) {
      message.plan = import_upgrade.Plan.fromAmino(object.plan);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.authority = message.authority === "" ? void 0 : message.authority;
    obj.plan = message.plan ? import_upgrade.Plan.toAmino(message.plan) : import_upgrade.Plan.toAmino(import_upgrade.Plan.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object) {
    return MsgSoftwareUpgrade.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgSoftwareUpgrade",
      value: MsgSoftwareUpgrade.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgSoftwareUpgrade.decode(message.value);
  },
  toProto(message) {
    return MsgSoftwareUpgrade.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade",
      value: MsgSoftwareUpgrade.encode(message).finish()
    };
  }
};
function createBaseMsgSoftwareUpgradeResponse() {
  return {};
}
const MsgSoftwareUpgradeResponse = {
  typeUrl: "/cosmos.upgrade.v1beta1.MsgSoftwareUpgradeResponse",
  encode(_, writer = import_binary.BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgSoftwareUpgradeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_) {
    const message = createBaseMsgSoftwareUpgradeResponse();
    return message;
  },
  fromAmino(_) {
    const message = createBaseMsgSoftwareUpgradeResponse();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return MsgSoftwareUpgradeResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgSoftwareUpgradeResponse",
      value: MsgSoftwareUpgradeResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgSoftwareUpgradeResponse.decode(message.value);
  },
  toProto(message) {
    return MsgSoftwareUpgradeResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.upgrade.v1beta1.MsgSoftwareUpgradeResponse",
      value: MsgSoftwareUpgradeResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCancelUpgrade() {
  return {
    authority: ""
  };
}
const MsgCancelUpgrade = {
  typeUrl: "/cosmos.upgrade.v1beta1.MsgCancelUpgrade",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelUpgrade();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
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
    const message = createBaseMsgCancelUpgrade();
    message.authority = object.authority ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgCancelUpgrade();
    if (object.authority !== void 0 && object.authority !== null) {
      message.authority = object.authority;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.authority = message.authority === "" ? void 0 : message.authority;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgCancelUpgrade.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgCancelUpgrade",
      value: MsgCancelUpgrade.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgCancelUpgrade.decode(message.value);
  },
  toProto(message) {
    return MsgCancelUpgrade.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.upgrade.v1beta1.MsgCancelUpgrade",
      value: MsgCancelUpgrade.encode(message).finish()
    };
  }
};
function createBaseMsgCancelUpgradeResponse() {
  return {};
}
const MsgCancelUpgradeResponse = {
  typeUrl: "/cosmos.upgrade.v1beta1.MsgCancelUpgradeResponse",
  encode(_, writer = import_binary.BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelUpgradeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_) {
    const message = createBaseMsgCancelUpgradeResponse();
    return message;
  },
  fromAmino(_) {
    const message = createBaseMsgCancelUpgradeResponse();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return MsgCancelUpgradeResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgCancelUpgradeResponse",
      value: MsgCancelUpgradeResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgCancelUpgradeResponse.decode(message.value);
  },
  toProto(message) {
    return MsgCancelUpgradeResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.upgrade.v1beta1.MsgCancelUpgradeResponse",
      value: MsgCancelUpgradeResponse.encode(message).finish()
    };
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  MsgCancelUpgrade,
  MsgCancelUpgradeResponse,
  MsgSoftwareUpgrade,
  MsgSoftwareUpgradeResponse
});
