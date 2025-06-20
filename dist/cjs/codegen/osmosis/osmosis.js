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
var osmosis_exports = {};
__export(osmosis_exports, {
  OsmosisTwapRecord: () => OsmosisTwapRecord
});
module.exports = __toCommonJS(osmosis_exports);
var import_timestamp = require("../google/protobuf/timestamp");
var import_binary = require("../binary");
var import_helpers = require("../helpers");
var import_decimals = require("../decimals");
function createBaseOsmosisTwapRecord() {
  return {
    poolId: BigInt(0),
    asset0Denom: "",
    asset1Denom: "",
    height: BigInt(0),
    time: /* @__PURE__ */ new Date(),
    p0LastSpotPrice: "",
    p1LastSpotPrice: "",
    p0ArithmeticTwapAccumulator: "",
    p1ArithmeticTwapAccumulator: "",
    geometricTwapAccumulator: "",
    lastErrorTime: /* @__PURE__ */ new Date()
  };
}
const OsmosisTwapRecord = {
  typeUrl: "/osmosis.OsmosisTwapRecord",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.asset0Denom !== "") {
      writer.uint32(18).string(message.asset0Denom);
    }
    if (message.asset1Denom !== "") {
      writer.uint32(26).string(message.asset1Denom);
    }
    if (message.height !== BigInt(0)) {
      writer.uint32(32).int64(message.height);
    }
    if (message.time !== void 0) {
      import_timestamp.Timestamp.encode((0, import_helpers.toTimestamp)(message.time), writer.uint32(42).fork()).ldelim();
    }
    if (message.p0LastSpotPrice !== "") {
      writer.uint32(50).string(import_decimals.Decimal.fromUserInput(message.p0LastSpotPrice, 18).atomics);
    }
    if (message.p1LastSpotPrice !== "") {
      writer.uint32(58).string(import_decimals.Decimal.fromUserInput(message.p1LastSpotPrice, 18).atomics);
    }
    if (message.p0ArithmeticTwapAccumulator !== "") {
      writer.uint32(66).string(import_decimals.Decimal.fromUserInput(message.p0ArithmeticTwapAccumulator, 18).atomics);
    }
    if (message.p1ArithmeticTwapAccumulator !== "") {
      writer.uint32(74).string(import_decimals.Decimal.fromUserInput(message.p1ArithmeticTwapAccumulator, 18).atomics);
    }
    if (message.geometricTwapAccumulator !== "") {
      writer.uint32(82).string(import_decimals.Decimal.fromUserInput(message.geometricTwapAccumulator, 18).atomics);
    }
    if (message.lastErrorTime !== void 0) {
      import_timestamp.Timestamp.encode((0, import_helpers.toTimestamp)(message.lastErrorTime), writer.uint32(90).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseOsmosisTwapRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.asset0Denom = reader.string();
          break;
        case 3:
          message.asset1Denom = reader.string();
          break;
        case 4:
          message.height = reader.int64();
          break;
        case 5:
          message.time = (0, import_helpers.fromTimestamp)(import_timestamp.Timestamp.decode(reader, reader.uint32()));
          break;
        case 6:
          message.p0LastSpotPrice = import_decimals.Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 7:
          message.p1LastSpotPrice = import_decimals.Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 8:
          message.p0ArithmeticTwapAccumulator = import_decimals.Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 9:
          message.p1ArithmeticTwapAccumulator = import_decimals.Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 10:
          message.geometricTwapAccumulator = import_decimals.Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 11:
          message.lastErrorTime = (0, import_helpers.fromTimestamp)(import_timestamp.Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseOsmosisTwapRecord();
    message.poolId = object.poolId !== void 0 && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.asset0Denom = object.asset0Denom ?? "";
    message.asset1Denom = object.asset1Denom ?? "";
    message.height = object.height !== void 0 && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    message.time = object.time ?? void 0;
    message.p0LastSpotPrice = object.p0LastSpotPrice ?? "";
    message.p1LastSpotPrice = object.p1LastSpotPrice ?? "";
    message.p0ArithmeticTwapAccumulator = object.p0ArithmeticTwapAccumulator ?? "";
    message.p1ArithmeticTwapAccumulator = object.p1ArithmeticTwapAccumulator ?? "";
    message.geometricTwapAccumulator = object.geometricTwapAccumulator ?? "";
    message.lastErrorTime = object.lastErrorTime ?? void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseOsmosisTwapRecord();
    if (object.pool_id !== void 0 && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.asset0_denom !== void 0 && object.asset0_denom !== null) {
      message.asset0Denom = object.asset0_denom;
    }
    if (object.asset1_denom !== void 0 && object.asset1_denom !== null) {
      message.asset1Denom = object.asset1_denom;
    }
    if (object.height !== void 0 && object.height !== null) {
      message.height = BigInt(object.height);
    }
    if (object.time !== void 0 && object.time !== null) {
      message.time = (0, import_helpers.fromTimestamp)(import_timestamp.Timestamp.fromAmino(object.time));
    }
    if (object.p0_last_spot_price !== void 0 && object.p0_last_spot_price !== null) {
      message.p0LastSpotPrice = object.p0_last_spot_price;
    }
    if (object.p1_last_spot_price !== void 0 && object.p1_last_spot_price !== null) {
      message.p1LastSpotPrice = object.p1_last_spot_price;
    }
    if (object.p0_arithmetic_twap_accumulator !== void 0 && object.p0_arithmetic_twap_accumulator !== null) {
      message.p0ArithmeticTwapAccumulator = object.p0_arithmetic_twap_accumulator;
    }
    if (object.p1_arithmetic_twap_accumulator !== void 0 && object.p1_arithmetic_twap_accumulator !== null) {
      message.p1ArithmeticTwapAccumulator = object.p1_arithmetic_twap_accumulator;
    }
    if (object.geometric_twap_accumulator !== void 0 && object.geometric_twap_accumulator !== null) {
      message.geometricTwapAccumulator = object.geometric_twap_accumulator;
    }
    if (object.last_error_time !== void 0 && object.last_error_time !== null) {
      message.lastErrorTime = (0, import_helpers.fromTimestamp)(import_timestamp.Timestamp.fromAmino(object.last_error_time));
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.pool_id = message.poolId !== BigInt(0) ? message.poolId?.toString() : void 0;
    obj.asset0_denom = message.asset0Denom === "" ? void 0 : message.asset0Denom;
    obj.asset1_denom = message.asset1Denom === "" ? void 0 : message.asset1Denom;
    obj.height = message.height ? message.height?.toString() : "0";
    obj.time = message.time ? import_timestamp.Timestamp.toAmino((0, import_helpers.toTimestamp)(message.time)) : void 0;
    obj.p0_last_spot_price = message.p0LastSpotPrice === "" ? void 0 : message.p0LastSpotPrice;
    obj.p1_last_spot_price = message.p1LastSpotPrice === "" ? void 0 : message.p1LastSpotPrice;
    obj.p0_arithmetic_twap_accumulator = message.p0ArithmeticTwapAccumulator === "" ? void 0 : message.p0ArithmeticTwapAccumulator;
    obj.p1_arithmetic_twap_accumulator = message.p1ArithmeticTwapAccumulator === "" ? void 0 : message.p1ArithmeticTwapAccumulator;
    obj.geometric_twap_accumulator = message.geometricTwapAccumulator === "" ? void 0 : message.geometricTwapAccumulator;
    obj.last_error_time = message.lastErrorTime ? import_timestamp.Timestamp.toAmino((0, import_helpers.toTimestamp)(message.lastErrorTime)) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return OsmosisTwapRecord.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "osmosis/osmosis-twap-record",
      value: OsmosisTwapRecord.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return OsmosisTwapRecord.decode(message.value);
  },
  toProto(message) {
    return OsmosisTwapRecord.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/osmosis.OsmosisTwapRecord",
      value: OsmosisTwapRecord.encode(message).finish()
    };
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  OsmosisTwapRecord
});
