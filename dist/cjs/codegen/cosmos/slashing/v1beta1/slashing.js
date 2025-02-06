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
var slashing_exports = {};
__export(slashing_exports, {
  Params: () => Params,
  ValidatorSigningInfo: () => ValidatorSigningInfo
});
module.exports = __toCommonJS(slashing_exports);
var import_timestamp = require("../../../google/protobuf/timestamp");
var import_duration = require("../../../google/protobuf/duration");
var import_binary = require("../../../binary");
var import_helpers = require("../../../helpers");
function createBaseValidatorSigningInfo() {
  return {
    address: "",
    startHeight: BigInt(0),
    indexOffset: BigInt(0),
    jailedUntil: /* @__PURE__ */ new Date(),
    tombstoned: false,
    missedBlocksCounter: BigInt(0)
  };
}
const ValidatorSigningInfo = {
  typeUrl: "/cosmos.slashing.v1beta1.ValidatorSigningInfo",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.startHeight !== BigInt(0)) {
      writer.uint32(16).int64(message.startHeight);
    }
    if (message.indexOffset !== BigInt(0)) {
      writer.uint32(24).int64(message.indexOffset);
    }
    if (message.jailedUntil !== void 0) {
      import_timestamp.Timestamp.encode((0, import_helpers.toTimestamp)(message.jailedUntil), writer.uint32(34).fork()).ldelim();
    }
    if (message.tombstoned === true) {
      writer.uint32(40).bool(message.tombstoned);
    }
    if (message.missedBlocksCounter !== BigInt(0)) {
      writer.uint32(48).int64(message.missedBlocksCounter);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseValidatorSigningInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.startHeight = reader.int64();
          break;
        case 3:
          message.indexOffset = reader.int64();
          break;
        case 4:
          message.jailedUntil = (0, import_helpers.fromTimestamp)(import_timestamp.Timestamp.decode(reader, reader.uint32()));
          break;
        case 5:
          message.tombstoned = reader.bool();
          break;
        case 6:
          message.missedBlocksCounter = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseValidatorSigningInfo();
    message.address = object.address ?? "";
    message.startHeight = object.startHeight !== void 0 && object.startHeight !== null ? BigInt(object.startHeight.toString()) : BigInt(0);
    message.indexOffset = object.indexOffset !== void 0 && object.indexOffset !== null ? BigInt(object.indexOffset.toString()) : BigInt(0);
    message.jailedUntil = object.jailedUntil ?? void 0;
    message.tombstoned = object.tombstoned ?? false;
    message.missedBlocksCounter = object.missedBlocksCounter !== void 0 && object.missedBlocksCounter !== null ? BigInt(object.missedBlocksCounter.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object) {
    const message = createBaseValidatorSigningInfo();
    if (object.address !== void 0 && object.address !== null) {
      message.address = object.address;
    }
    if (object.start_height !== void 0 && object.start_height !== null) {
      message.startHeight = BigInt(object.start_height);
    }
    if (object.index_offset !== void 0 && object.index_offset !== null) {
      message.indexOffset = BigInt(object.index_offset);
    }
    if (object.jailed_until !== void 0 && object.jailed_until !== null) {
      message.jailedUntil = (0, import_helpers.fromTimestamp)(import_timestamp.Timestamp.fromAmino(object.jailed_until));
    }
    if (object.tombstoned !== void 0 && object.tombstoned !== null) {
      message.tombstoned = object.tombstoned;
    }
    if (object.missed_blocks_counter !== void 0 && object.missed_blocks_counter !== null) {
      message.missedBlocksCounter = BigInt(object.missed_blocks_counter);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.address = message.address === "" ? void 0 : message.address;
    obj.start_height = message.startHeight !== BigInt(0) ? message.startHeight?.toString() : void 0;
    obj.index_offset = message.indexOffset !== BigInt(0) ? message.indexOffset?.toString() : void 0;
    obj.jailed_until = message.jailedUntil ? import_timestamp.Timestamp.toAmino((0, import_helpers.toTimestamp)(message.jailedUntil)) : void 0;
    obj.tombstoned = message.tombstoned === false ? void 0 : message.tombstoned;
    obj.missed_blocks_counter = message.missedBlocksCounter !== BigInt(0) ? message.missedBlocksCounter?.toString() : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return ValidatorSigningInfo.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/ValidatorSigningInfo",
      value: ValidatorSigningInfo.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return ValidatorSigningInfo.decode(message.value);
  },
  toProto(message) {
    return ValidatorSigningInfo.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.slashing.v1beta1.ValidatorSigningInfo",
      value: ValidatorSigningInfo.encode(message).finish()
    };
  }
};
function createBaseParams() {
  return {
    signedBlocksWindow: BigInt(0),
    minSignedPerWindow: new Uint8Array(),
    downtimeJailDuration: import_duration.Duration.fromPartial({}),
    slashFractionDoubleSign: new Uint8Array(),
    slashFractionDowntime: new Uint8Array()
  };
}
const Params = {
  typeUrl: "/cosmos.slashing.v1beta1.Params",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.signedBlocksWindow !== BigInt(0)) {
      writer.uint32(8).int64(message.signedBlocksWindow);
    }
    if (message.minSignedPerWindow.length !== 0) {
      writer.uint32(18).bytes(message.minSignedPerWindow);
    }
    if (message.downtimeJailDuration !== void 0) {
      import_duration.Duration.encode(message.downtimeJailDuration, writer.uint32(26).fork()).ldelim();
    }
    if (message.slashFractionDoubleSign.length !== 0) {
      writer.uint32(34).bytes(message.slashFractionDoubleSign);
    }
    if (message.slashFractionDowntime.length !== 0) {
      writer.uint32(42).bytes(message.slashFractionDowntime);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signedBlocksWindow = reader.int64();
          break;
        case 2:
          message.minSignedPerWindow = reader.bytes();
          break;
        case 3:
          message.downtimeJailDuration = import_duration.Duration.decode(reader, reader.uint32());
          break;
        case 4:
          message.slashFractionDoubleSign = reader.bytes();
          break;
        case 5:
          message.slashFractionDowntime = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseParams();
    message.signedBlocksWindow = object.signedBlocksWindow !== void 0 && object.signedBlocksWindow !== null ? BigInt(object.signedBlocksWindow.toString()) : BigInt(0);
    message.minSignedPerWindow = object.minSignedPerWindow ?? new Uint8Array();
    message.downtimeJailDuration = object.downtimeJailDuration !== void 0 && object.downtimeJailDuration !== null ? import_duration.Duration.fromPartial(object.downtimeJailDuration) : void 0;
    message.slashFractionDoubleSign = object.slashFractionDoubleSign ?? new Uint8Array();
    message.slashFractionDowntime = object.slashFractionDowntime ?? new Uint8Array();
    return message;
  },
  fromAmino(object) {
    const message = createBaseParams();
    if (object.signed_blocks_window !== void 0 && object.signed_blocks_window !== null) {
      message.signedBlocksWindow = BigInt(object.signed_blocks_window);
    }
    if (object.min_signed_per_window !== void 0 && object.min_signed_per_window !== null) {
      message.minSignedPerWindow = (0, import_helpers.bytesFromBase64)(object.min_signed_per_window);
    }
    if (object.downtime_jail_duration !== void 0 && object.downtime_jail_duration !== null) {
      message.downtimeJailDuration = import_duration.Duration.fromAmino(object.downtime_jail_duration);
    }
    if (object.slash_fraction_double_sign !== void 0 && object.slash_fraction_double_sign !== null) {
      message.slashFractionDoubleSign = (0, import_helpers.bytesFromBase64)(object.slash_fraction_double_sign);
    }
    if (object.slash_fraction_downtime !== void 0 && object.slash_fraction_downtime !== null) {
      message.slashFractionDowntime = (0, import_helpers.bytesFromBase64)(object.slash_fraction_downtime);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.signed_blocks_window = message.signedBlocksWindow !== BigInt(0) ? message.signedBlocksWindow?.toString() : void 0;
    obj.min_signed_per_window = message.minSignedPerWindow ? (0, import_helpers.base64FromBytes)(message.minSignedPerWindow) : void 0;
    obj.downtime_jail_duration = message.downtimeJailDuration ? import_duration.Duration.toAmino(message.downtimeJailDuration) : void 0;
    obj.slash_fraction_double_sign = message.slashFractionDoubleSign ? (0, import_helpers.base64FromBytes)(message.slashFractionDoubleSign) : void 0;
    obj.slash_fraction_downtime = message.slashFractionDowntime ? (0, import_helpers.base64FromBytes)(message.slashFractionDowntime) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return Params.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/Params",
      value: Params.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return Params.decode(message.value);
  },
  toProto(message) {
    return Params.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.slashing.v1beta1.Params",
      value: Params.encode(message).finish()
    };
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Params,
  ValidatorSigningInfo
});
