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
var upgrade_exports = {};
__export(upgrade_exports, {
  ErrorReceipt: () => ErrorReceipt,
  Upgrade: () => Upgrade,
  UpgradeFields: () => UpgradeFields
});
module.exports = __toCommonJS(upgrade_exports);
var import_channel = require("./channel");
var import_binary = require("../../../../binary");
function createBaseUpgrade() {
  return {
    fields: UpgradeFields.fromPartial({}),
    timeout: import_channel.Timeout.fromPartial({}),
    nextSequenceSend: BigInt(0)
  };
}
const Upgrade = {
  typeUrl: "/ibc.core.channel.v1.Upgrade",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.fields !== void 0) {
      UpgradeFields.encode(message.fields, writer.uint32(10).fork()).ldelim();
    }
    if (message.timeout !== void 0) {
      import_channel.Timeout.encode(message.timeout, writer.uint32(18).fork()).ldelim();
    }
    if (message.nextSequenceSend !== BigInt(0)) {
      writer.uint32(24).uint64(message.nextSequenceSend);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseUpgrade();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fields = UpgradeFields.decode(reader, reader.uint32());
          break;
        case 2:
          message.timeout = import_channel.Timeout.decode(reader, reader.uint32());
          break;
        case 3:
          message.nextSequenceSend = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseUpgrade();
    message.fields = object.fields !== void 0 && object.fields !== null ? UpgradeFields.fromPartial(object.fields) : void 0;
    message.timeout = object.timeout !== void 0 && object.timeout !== null ? import_channel.Timeout.fromPartial(object.timeout) : void 0;
    message.nextSequenceSend = object.nextSequenceSend !== void 0 && object.nextSequenceSend !== null ? BigInt(object.nextSequenceSend.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object) {
    const message = createBaseUpgrade();
    if (object.fields !== void 0 && object.fields !== null) {
      message.fields = UpgradeFields.fromAmino(object.fields);
    }
    if (object.timeout !== void 0 && object.timeout !== null) {
      message.timeout = import_channel.Timeout.fromAmino(object.timeout);
    }
    if (object.next_sequence_send !== void 0 && object.next_sequence_send !== null) {
      message.nextSequenceSend = BigInt(object.next_sequence_send);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.fields = message.fields ? UpgradeFields.toAmino(message.fields) : void 0;
    obj.timeout = message.timeout ? import_channel.Timeout.toAmino(message.timeout) : void 0;
    obj.next_sequence_send = message.nextSequenceSend !== BigInt(0) ? message.nextSequenceSend?.toString() : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return Upgrade.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/Upgrade",
      value: Upgrade.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return Upgrade.decode(message.value);
  },
  toProto(message) {
    return Upgrade.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.core.channel.v1.Upgrade",
      value: Upgrade.encode(message).finish()
    };
  }
};
function createBaseUpgradeFields() {
  return {
    ordering: 0,
    connectionHops: [],
    version: ""
  };
}
const UpgradeFields = {
  typeUrl: "/ibc.core.channel.v1.UpgradeFields",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.ordering !== 0) {
      writer.uint32(8).int32(message.ordering);
    }
    for (const v of message.connectionHops) {
      writer.uint32(18).string(v);
    }
    if (message.version !== "") {
      writer.uint32(26).string(message.version);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseUpgradeFields();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ordering = reader.int32();
          break;
        case 2:
          message.connectionHops.push(reader.string());
          break;
        case 3:
          message.version = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseUpgradeFields();
    message.ordering = object.ordering ?? 0;
    message.connectionHops = object.connectionHops?.map((e) => e) || [];
    message.version = object.version ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseUpgradeFields();
    if (object.ordering !== void 0 && object.ordering !== null) {
      message.ordering = object.ordering;
    }
    message.connectionHops = object.connection_hops?.map((e) => e) || [];
    if (object.version !== void 0 && object.version !== null) {
      message.version = object.version;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.ordering = message.ordering === 0 ? void 0 : message.ordering;
    if (message.connectionHops) {
      obj.connection_hops = message.connectionHops.map((e) => e);
    } else {
      obj.connection_hops = message.connectionHops;
    }
    obj.version = message.version === "" ? void 0 : message.version;
    return obj;
  },
  fromAminoMsg(object) {
    return UpgradeFields.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/UpgradeFields",
      value: UpgradeFields.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return UpgradeFields.decode(message.value);
  },
  toProto(message) {
    return UpgradeFields.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.core.channel.v1.UpgradeFields",
      value: UpgradeFields.encode(message).finish()
    };
  }
};
function createBaseErrorReceipt() {
  return {
    sequence: BigInt(0),
    message: ""
  };
}
const ErrorReceipt = {
  typeUrl: "/ibc.core.channel.v1.ErrorReceipt",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.sequence !== BigInt(0)) {
      writer.uint32(8).uint64(message.sequence);
    }
    if (message.message !== "") {
      writer.uint32(18).string(message.message);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseErrorReceipt();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sequence = reader.uint64();
          break;
        case 2:
          message.message = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseErrorReceipt();
    message.sequence = object.sequence !== void 0 && object.sequence !== null ? BigInt(object.sequence.toString()) : BigInt(0);
    message.message = object.message ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseErrorReceipt();
    if (object.sequence !== void 0 && object.sequence !== null) {
      message.sequence = BigInt(object.sequence);
    }
    if (object.message !== void 0 && object.message !== null) {
      message.message = object.message;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.sequence = message.sequence !== BigInt(0) ? message.sequence?.toString() : void 0;
    obj.message = message.message === "" ? void 0 : message.message;
    return obj;
  },
  fromAminoMsg(object) {
    return ErrorReceipt.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/ErrorReceipt",
      value: ErrorReceipt.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return ErrorReceipt.decode(message.value);
  },
  toProto(message) {
    return ErrorReceipt.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.core.channel.v1.ErrorReceipt",
      value: ErrorReceipt.encode(message).finish()
    };
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ErrorReceipt,
  Upgrade,
  UpgradeFields
});
