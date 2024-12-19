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
var genesis_exports = {};
__export(genesis_exports, {
  EpochInfo: () => EpochInfo,
  GenesisState: () => GenesisState
});
module.exports = __toCommonJS(genesis_exports);
var import_timestamp = require("../../google/protobuf/timestamp");
var import_duration = require("../../google/protobuf/duration");
var import_binary = require("../../binary");
var import_helpers = require("../../helpers");
function createBaseEpochInfo() {
  return {
    identifier: "",
    startTime: /* @__PURE__ */ new Date(),
    duration: import_duration.Duration.fromPartial({}),
    currentEpoch: BigInt(0),
    currentEpochStartTime: /* @__PURE__ */ new Date(),
    epochCountingStarted: false,
    currentEpochStartHeight: BigInt(0)
  };
}
const EpochInfo = {
  typeUrl: "/stride.epochs.EpochInfo",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.identifier !== "") {
      writer.uint32(10).string(message.identifier);
    }
    if (message.startTime !== void 0) {
      import_timestamp.Timestamp.encode((0, import_helpers.toTimestamp)(message.startTime), writer.uint32(18).fork()).ldelim();
    }
    if (message.duration !== void 0) {
      import_duration.Duration.encode(message.duration, writer.uint32(26).fork()).ldelim();
    }
    if (message.currentEpoch !== BigInt(0)) {
      writer.uint32(32).int64(message.currentEpoch);
    }
    if (message.currentEpochStartTime !== void 0) {
      import_timestamp.Timestamp.encode((0, import_helpers.toTimestamp)(message.currentEpochStartTime), writer.uint32(42).fork()).ldelim();
    }
    if (message.epochCountingStarted === true) {
      writer.uint32(48).bool(message.epochCountingStarted);
    }
    if (message.currentEpochStartHeight !== BigInt(0)) {
      writer.uint32(56).int64(message.currentEpochStartHeight);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseEpochInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.identifier = reader.string();
          break;
        case 2:
          message.startTime = (0, import_helpers.fromTimestamp)(import_timestamp.Timestamp.decode(reader, reader.uint32()));
          break;
        case 3:
          message.duration = import_duration.Duration.decode(reader, reader.uint32());
          break;
        case 4:
          message.currentEpoch = reader.int64();
          break;
        case 5:
          message.currentEpochStartTime = (0, import_helpers.fromTimestamp)(import_timestamp.Timestamp.decode(reader, reader.uint32()));
          break;
        case 6:
          message.epochCountingStarted = reader.bool();
          break;
        case 7:
          message.currentEpochStartHeight = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseEpochInfo();
    message.identifier = object.identifier ?? "";
    message.startTime = object.startTime ?? void 0;
    message.duration = object.duration !== void 0 && object.duration !== null ? import_duration.Duration.fromPartial(object.duration) : void 0;
    message.currentEpoch = object.currentEpoch !== void 0 && object.currentEpoch !== null ? BigInt(object.currentEpoch.toString()) : BigInt(0);
    message.currentEpochStartTime = object.currentEpochStartTime ?? void 0;
    message.epochCountingStarted = object.epochCountingStarted ?? false;
    message.currentEpochStartHeight = object.currentEpochStartHeight !== void 0 && object.currentEpochStartHeight !== null ? BigInt(object.currentEpochStartHeight.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object) {
    const message = createBaseEpochInfo();
    if (object.identifier !== void 0 && object.identifier !== null) {
      message.identifier = object.identifier;
    }
    if (object.start_time !== void 0 && object.start_time !== null) {
      message.startTime = (0, import_helpers.fromTimestamp)(import_timestamp.Timestamp.fromAmino(object.start_time));
    }
    if (object.duration !== void 0 && object.duration !== null) {
      message.duration = import_duration.Duration.fromAmino(object.duration);
    }
    if (object.current_epoch !== void 0 && object.current_epoch !== null) {
      message.currentEpoch = BigInt(object.current_epoch);
    }
    if (object.current_epoch_start_time !== void 0 && object.current_epoch_start_time !== null) {
      message.currentEpochStartTime = (0, import_helpers.fromTimestamp)(import_timestamp.Timestamp.fromAmino(object.current_epoch_start_time));
    }
    if (object.epoch_counting_started !== void 0 && object.epoch_counting_started !== null) {
      message.epochCountingStarted = object.epoch_counting_started;
    }
    if (object.current_epoch_start_height !== void 0 && object.current_epoch_start_height !== null) {
      message.currentEpochStartHeight = BigInt(object.current_epoch_start_height);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.identifier = message.identifier === "" ? void 0 : message.identifier;
    obj.start_time = message.startTime ? import_timestamp.Timestamp.toAmino((0, import_helpers.toTimestamp)(message.startTime)) : void 0;
    obj.duration = message.duration ? import_duration.Duration.toAmino(message.duration) : void 0;
    obj.current_epoch = message.currentEpoch !== BigInt(0) ? message.currentEpoch.toString() : void 0;
    obj.current_epoch_start_time = message.currentEpochStartTime ? import_timestamp.Timestamp.toAmino((0, import_helpers.toTimestamp)(message.currentEpochStartTime)) : void 0;
    obj.epoch_counting_started = message.epochCountingStarted === false ? void 0 : message.epochCountingStarted;
    obj.current_epoch_start_height = message.currentEpochStartHeight !== BigInt(0) ? message.currentEpochStartHeight.toString() : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return EpochInfo.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return EpochInfo.decode(message.value);
  },
  toProto(message) {
    return EpochInfo.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.epochs.EpochInfo",
      value: EpochInfo.encode(message).finish()
    };
  }
};
function createBaseGenesisState() {
  return {
    epochs: []
  };
}
const GenesisState = {
  typeUrl: "/stride.epochs.GenesisState",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    for (const v of message.epochs) {
      EpochInfo.encode(v, writer.uint32(10).fork()).ldelim();
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
          message.epochs.push(EpochInfo.decode(reader, reader.uint32()));
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
    message.epochs = object.epochs?.map((e) => EpochInfo.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseGenesisState();
    message.epochs = object.epochs?.map((e) => EpochInfo.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.epochs) {
      obj.epochs = message.epochs.map((e) => e ? EpochInfo.toAmino(e) : void 0);
    } else {
      obj.epochs = message.epochs;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return GenesisState.decode(message.value);
  },
  toProto(message) {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.epochs.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  EpochInfo,
  GenesisState
});
