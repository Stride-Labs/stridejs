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
var packet_exports = {};
__export(packet_exports, {
  IcacallbacksPacketData: () => IcacallbacksPacketData,
  NoData: () => NoData
});
module.exports = __toCommonJS(packet_exports);
var import_binary = require("../../binary");
function createBaseIcacallbacksPacketData() {
  return {
    noData: void 0
  };
}
const IcacallbacksPacketData = {
  typeUrl: "/stride.icacallbacks.IcacallbacksPacketData",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.noData !== void 0) {
      NoData.encode(message.noData, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseIcacallbacksPacketData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.noData = NoData.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseIcacallbacksPacketData();
    message.noData = object.noData !== void 0 && object.noData !== null ? NoData.fromPartial(object.noData) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseIcacallbacksPacketData();
    if (object.no_data !== void 0 && object.no_data !== null) {
      message.noData = NoData.fromAmino(object.no_data);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.no_data = message.noData ? NoData.toAmino(message.noData) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return IcacallbacksPacketData.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return IcacallbacksPacketData.decode(message.value);
  },
  toProto(message) {
    return IcacallbacksPacketData.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.icacallbacks.IcacallbacksPacketData",
      value: IcacallbacksPacketData.encode(message).finish()
    };
  }
};
function createBaseNoData() {
  return {};
}
const NoData = {
  typeUrl: "/stride.icacallbacks.NoData",
  encode(_, writer = import_binary.BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseNoData();
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
    const message = createBaseNoData();
    return message;
  },
  fromAmino(_) {
    const message = createBaseNoData();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return NoData.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return NoData.decode(message.value);
  },
  toProto(message) {
    return NoData.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.icacallbacks.NoData",
      value: NoData.encode(message).finish()
    };
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  IcacallbacksPacketData,
  NoData
});
