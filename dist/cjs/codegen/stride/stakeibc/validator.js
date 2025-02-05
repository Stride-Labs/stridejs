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
var validator_exports = {};
__export(validator_exports, {
  Validator: () => Validator
});
module.exports = __toCommonJS(validator_exports);
var import_binary = require("../../binary");
var import_math = require("@cosmjs/math");
function createBaseValidator() {
  return {
    name: "",
    address: "",
    weight: BigInt(0),
    delegation: "",
    slashQueryProgressTracker: "",
    slashQueryCheckpoint: "",
    sharesToTokensRate: "",
    delegationChangesInProgress: BigInt(0),
    slashQueryInProgress: false
  };
}
const Validator = {
  typeUrl: "/stride.stakeibc.Validator",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.weight !== BigInt(0)) {
      writer.uint32(48).uint64(message.weight);
    }
    if (message.delegation !== "") {
      writer.uint32(42).string(message.delegation);
    }
    if (message.slashQueryProgressTracker !== "") {
      writer.uint32(74).string(message.slashQueryProgressTracker);
    }
    if (message.slashQueryCheckpoint !== "") {
      writer.uint32(98).string(message.slashQueryCheckpoint);
    }
    if (message.sharesToTokensRate !== "") {
      writer.uint32(82).string(import_math.Decimal.fromUserInput(message.sharesToTokensRate, 18).atomics);
    }
    if (message.delegationChangesInProgress !== BigInt(0)) {
      writer.uint32(88).int64(message.delegationChangesInProgress);
    }
    if (message.slashQueryInProgress === true) {
      writer.uint32(104).bool(message.slashQueryInProgress);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseValidator();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.address = reader.string();
          break;
        case 6:
          message.weight = reader.uint64();
          break;
        case 5:
          message.delegation = reader.string();
          break;
        case 9:
          message.slashQueryProgressTracker = reader.string();
          break;
        case 12:
          message.slashQueryCheckpoint = reader.string();
          break;
        case 10:
          message.sharesToTokensRate = import_math.Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 11:
          message.delegationChangesInProgress = reader.int64();
          break;
        case 13:
          message.slashQueryInProgress = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseValidator();
    message.name = object.name ?? "";
    message.address = object.address ?? "";
    message.weight = object.weight !== void 0 && object.weight !== null ? BigInt(object.weight.toString()) : BigInt(0);
    message.delegation = object.delegation ?? "";
    message.slashQueryProgressTracker = object.slashQueryProgressTracker ?? "";
    message.slashQueryCheckpoint = object.slashQueryCheckpoint ?? "";
    message.sharesToTokensRate = object.sharesToTokensRate ?? "";
    message.delegationChangesInProgress = object.delegationChangesInProgress !== void 0 && object.delegationChangesInProgress !== null ? BigInt(object.delegationChangesInProgress.toString()) : BigInt(0);
    message.slashQueryInProgress = object.slashQueryInProgress ?? false;
    return message;
  },
  fromAmino(object) {
    const message = createBaseValidator();
    if (object.name !== void 0 && object.name !== null) {
      message.name = object.name;
    }
    if (object.address !== void 0 && object.address !== null) {
      message.address = object.address;
    }
    if (object.weight !== void 0 && object.weight !== null) {
      message.weight = BigInt(object.weight);
    }
    if (object.delegation !== void 0 && object.delegation !== null) {
      message.delegation = object.delegation;
    }
    if (object.slash_query_progress_tracker !== void 0 && object.slash_query_progress_tracker !== null) {
      message.slashQueryProgressTracker = object.slash_query_progress_tracker;
    }
    if (object.slash_query_checkpoint !== void 0 && object.slash_query_checkpoint !== null) {
      message.slashQueryCheckpoint = object.slash_query_checkpoint;
    }
    if (object.shares_to_tokens_rate !== void 0 && object.shares_to_tokens_rate !== null) {
      message.sharesToTokensRate = object.shares_to_tokens_rate;
    }
    if (object.delegation_changes_in_progress !== void 0 && object.delegation_changes_in_progress !== null) {
      message.delegationChangesInProgress = BigInt(object.delegation_changes_in_progress);
    }
    if (object.slash_query_in_progress !== void 0 && object.slash_query_in_progress !== null) {
      message.slashQueryInProgress = object.slash_query_in_progress;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.name = message.name === "" ? void 0 : message.name;
    obj.address = message.address === "" ? void 0 : message.address;
    obj.weight = message.weight !== BigInt(0) ? message.weight?.toString() : void 0;
    obj.delegation = message.delegation === "" ? void 0 : message.delegation;
    obj.slash_query_progress_tracker = message.slashQueryProgressTracker === "" ? void 0 : message.slashQueryProgressTracker;
    obj.slash_query_checkpoint = message.slashQueryCheckpoint === "" ? void 0 : message.slashQueryCheckpoint;
    obj.shares_to_tokens_rate = message.sharesToTokensRate === "" ? void 0 : message.sharesToTokensRate;
    obj.delegation_changes_in_progress = message.delegationChangesInProgress !== BigInt(0) ? message.delegationChangesInProgress?.toString() : void 0;
    obj.slash_query_in_progress = message.slashQueryInProgress === false ? void 0 : message.slashQueryInProgress;
    return obj;
  },
  fromAminoMsg(object) {
    return Validator.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return Validator.decode(message.value);
  },
  toProto(message) {
    return Validator.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.stakeibc.Validator",
      value: Validator.encode(message).finish()
    };
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Validator
});
