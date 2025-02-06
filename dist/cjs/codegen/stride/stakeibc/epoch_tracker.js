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
var epoch_tracker_exports = {};
__export(epoch_tracker_exports, {
  EpochTracker: () => EpochTracker
});
module.exports = __toCommonJS(epoch_tracker_exports);
var import_binary = require("../../binary");
function createBaseEpochTracker() {
  return {
    epochIdentifier: "",
    epochNumber: BigInt(0),
    nextEpochStartTime: BigInt(0),
    duration: BigInt(0)
  };
}
const EpochTracker = {
  typeUrl: "/stride.stakeibc.EpochTracker",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.epochIdentifier !== "") {
      writer.uint32(10).string(message.epochIdentifier);
    }
    if (message.epochNumber !== BigInt(0)) {
      writer.uint32(16).uint64(message.epochNumber);
    }
    if (message.nextEpochStartTime !== BigInt(0)) {
      writer.uint32(24).uint64(message.nextEpochStartTime);
    }
    if (message.duration !== BigInt(0)) {
      writer.uint32(32).uint64(message.duration);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseEpochTracker();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.epochIdentifier = reader.string();
          break;
        case 2:
          message.epochNumber = reader.uint64();
          break;
        case 3:
          message.nextEpochStartTime = reader.uint64();
          break;
        case 4:
          message.duration = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseEpochTracker();
    message.epochIdentifier = object.epochIdentifier ?? "";
    message.epochNumber = object.epochNumber !== void 0 && object.epochNumber !== null ? BigInt(object.epochNumber.toString()) : BigInt(0);
    message.nextEpochStartTime = object.nextEpochStartTime !== void 0 && object.nextEpochStartTime !== null ? BigInt(object.nextEpochStartTime.toString()) : BigInt(0);
    message.duration = object.duration !== void 0 && object.duration !== null ? BigInt(object.duration.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object) {
    const message = createBaseEpochTracker();
    if (object.epoch_identifier !== void 0 && object.epoch_identifier !== null) {
      message.epochIdentifier = object.epoch_identifier;
    }
    if (object.epoch_number !== void 0 && object.epoch_number !== null) {
      message.epochNumber = BigInt(object.epoch_number);
    }
    if (object.next_epoch_start_time !== void 0 && object.next_epoch_start_time !== null) {
      message.nextEpochStartTime = BigInt(object.next_epoch_start_time);
    }
    if (object.duration !== void 0 && object.duration !== null) {
      message.duration = BigInt(object.duration);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.epoch_identifier = message.epochIdentifier === "" ? void 0 : message.epochIdentifier;
    obj.epoch_number = message.epochNumber !== BigInt(0) ? message.epochNumber?.toString() : void 0;
    obj.next_epoch_start_time = message.nextEpochStartTime !== BigInt(0) ? message.nextEpochStartTime?.toString() : void 0;
    obj.duration = message.duration !== BigInt(0) ? message.duration?.toString() : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return EpochTracker.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return EpochTracker.decode(message.value);
  },
  toProto(message) {
    return EpochTracker.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.stakeibc.EpochTracker",
      value: EpochTracker.encode(message).finish()
    };
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  EpochTracker
});
