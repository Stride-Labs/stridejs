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
var evidence_exports = {};
__export(evidence_exports, {
  Equivocation: () => Equivocation
});
module.exports = __toCommonJS(evidence_exports);
var import_timestamp = require("../../../google/protobuf/timestamp");
var import_binary = require("../../../binary");
var import_helpers = require("../../../helpers");
function createBaseEquivocation() {
  return {
    height: BigInt(0),
    time: /* @__PURE__ */ new Date(),
    power: BigInt(0),
    consensusAddress: ""
  };
}
const Equivocation = {
  typeUrl: "/cosmos.evidence.v1beta1.Equivocation",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.height !== BigInt(0)) {
      writer.uint32(8).int64(message.height);
    }
    if (message.time !== void 0) {
      import_timestamp.Timestamp.encode((0, import_helpers.toTimestamp)(message.time), writer.uint32(18).fork()).ldelim();
    }
    if (message.power !== BigInt(0)) {
      writer.uint32(24).int64(message.power);
    }
    if (message.consensusAddress !== "") {
      writer.uint32(34).string(message.consensusAddress);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseEquivocation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = reader.int64();
          break;
        case 2:
          message.time = (0, import_helpers.fromTimestamp)(import_timestamp.Timestamp.decode(reader, reader.uint32()));
          break;
        case 3:
          message.power = reader.int64();
          break;
        case 4:
          message.consensusAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseEquivocation();
    message.height = object.height !== void 0 && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    message.time = object.time ?? void 0;
    message.power = object.power !== void 0 && object.power !== null ? BigInt(object.power.toString()) : BigInt(0);
    message.consensusAddress = object.consensusAddress ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseEquivocation();
    if (object.height !== void 0 && object.height !== null) {
      message.height = BigInt(object.height);
    }
    if (object.time !== void 0 && object.time !== null) {
      message.time = (0, import_helpers.fromTimestamp)(import_timestamp.Timestamp.fromAmino(object.time));
    }
    if (object.power !== void 0 && object.power !== null) {
      message.power = BigInt(object.power);
    }
    if (object.consensus_address !== void 0 && object.consensus_address !== null) {
      message.consensusAddress = object.consensus_address;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.height = message.height !== BigInt(0) ? message.height.toString() : void 0;
    obj.time = message.time ? import_timestamp.Timestamp.toAmino((0, import_helpers.toTimestamp)(message.time)) : /* @__PURE__ */ new Date();
    obj.power = message.power !== BigInt(0) ? message.power.toString() : void 0;
    obj.consensus_address = message.consensusAddress === "" ? void 0 : message.consensusAddress;
    return obj;
  },
  fromAminoMsg(object) {
    return Equivocation.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/Equivocation",
      value: Equivocation.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return Equivocation.decode(message.value);
  },
  toProto(message) {
    return Equivocation.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.evidence.v1beta1.Equivocation",
      value: Equivocation.encode(message).finish()
    };
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Equivocation
});
