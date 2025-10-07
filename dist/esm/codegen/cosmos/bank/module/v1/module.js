import { BinaryReader, BinaryWriter } from "../../../../binary";
function createBaseModule() {
  return {
    blockedModuleAccountsOverride: [],
    authority: "",
    restrictionsOrder: []
  };
}
const Module = {
  typeUrl: "/cosmos.bank.module.v1.Module",
  encode(message, writer = BinaryWriter.create()) {
    for (const v of message.blockedModuleAccountsOverride) {
      writer.uint32(10).string(v);
    }
    if (message.authority !== "") {
      writer.uint32(18).string(message.authority);
    }
    for (const v of message.restrictionsOrder) {
      writer.uint32(26).string(v);
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
          message.blockedModuleAccountsOverride.push(reader.string());
          break;
        case 2:
          message.authority = reader.string();
          break;
        case 3:
          message.restrictionsOrder.push(reader.string());
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
    message.blockedModuleAccountsOverride = object.blockedModuleAccountsOverride?.map((e) => e) || [];
    message.authority = object.authority ?? "";
    message.restrictionsOrder = object.restrictionsOrder?.map((e) => e) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseModule();
    message.blockedModuleAccountsOverride = object.blocked_module_accounts_override?.map((e) => e) || [];
    if (object.authority !== void 0 && object.authority !== null) {
      message.authority = object.authority;
    }
    message.restrictionsOrder = object.restrictions_order?.map((e) => e) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.blockedModuleAccountsOverride) {
      obj.blocked_module_accounts_override = message.blockedModuleAccountsOverride.map((e) => e);
    } else {
      obj.blocked_module_accounts_override = message.blockedModuleAccountsOverride;
    }
    obj.authority = message.authority === "" ? void 0 : message.authority;
    if (message.restrictionsOrder) {
      obj.restrictions_order = message.restrictionsOrder.map((e) => e);
    } else {
      obj.restrictions_order = message.restrictionsOrder;
    }
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
      typeUrl: "/cosmos.bank.module.v1.Module",
      value: Module.encode(message).finish()
    };
  }
};
export {
  Module
};
