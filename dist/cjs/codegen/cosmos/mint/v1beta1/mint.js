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
var mint_exports = {};
__export(mint_exports, {
  Minter: () => Minter,
  Params: () => Params
});
module.exports = __toCommonJS(mint_exports);
var import_binary = require("../../../binary");
var import_math = require("@cosmjs/math");
function createBaseMinter() {
  return {
    inflation: "",
    annualProvisions: ""
  };
}
const Minter = {
  typeUrl: "/cosmos.mint.v1beta1.Minter",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.inflation !== "") {
      writer.uint32(10).string(import_math.Decimal.fromUserInput(message.inflation, 18).atomics);
    }
    if (message.annualProvisions !== "") {
      writer.uint32(18).string(import_math.Decimal.fromUserInput(message.annualProvisions, 18).atomics);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMinter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.inflation = import_math.Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 2:
          message.annualProvisions = import_math.Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMinter();
    message.inflation = object.inflation ?? "";
    message.annualProvisions = object.annualProvisions ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseMinter();
    if (object.inflation !== void 0 && object.inflation !== null) {
      message.inflation = object.inflation;
    }
    if (object.annual_provisions !== void 0 && object.annual_provisions !== null) {
      message.annualProvisions = object.annual_provisions;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.inflation = message.inflation === "" ? void 0 : message.inflation;
    obj.annual_provisions = message.annualProvisions === "" ? void 0 : message.annualProvisions;
    return obj;
  },
  fromAminoMsg(object) {
    return Minter.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/Minter",
      value: Minter.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return Minter.decode(message.value);
  },
  toProto(message) {
    return Minter.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.mint.v1beta1.Minter",
      value: Minter.encode(message).finish()
    };
  }
};
function createBaseParams() {
  return {
    mintDenom: "",
    inflationRateChange: "",
    inflationMax: "",
    inflationMin: "",
    goalBonded: "",
    blocksPerYear: BigInt(0)
  };
}
const Params = {
  typeUrl: "/cosmos.mint.v1beta1.Params",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.mintDenom !== "") {
      writer.uint32(10).string(message.mintDenom);
    }
    if (message.inflationRateChange !== "") {
      writer.uint32(18).string(import_math.Decimal.fromUserInput(message.inflationRateChange, 18).atomics);
    }
    if (message.inflationMax !== "") {
      writer.uint32(26).string(import_math.Decimal.fromUserInput(message.inflationMax, 18).atomics);
    }
    if (message.inflationMin !== "") {
      writer.uint32(34).string(import_math.Decimal.fromUserInput(message.inflationMin, 18).atomics);
    }
    if (message.goalBonded !== "") {
      writer.uint32(42).string(import_math.Decimal.fromUserInput(message.goalBonded, 18).atomics);
    }
    if (message.blocksPerYear !== BigInt(0)) {
      writer.uint32(48).uint64(message.blocksPerYear);
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
          message.mintDenom = reader.string();
          break;
        case 2:
          message.inflationRateChange = import_math.Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.inflationMax = import_math.Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 4:
          message.inflationMin = import_math.Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 5:
          message.goalBonded = import_math.Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 6:
          message.blocksPerYear = reader.uint64();
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
    message.mintDenom = object.mintDenom ?? "";
    message.inflationRateChange = object.inflationRateChange ?? "";
    message.inflationMax = object.inflationMax ?? "";
    message.inflationMin = object.inflationMin ?? "";
    message.goalBonded = object.goalBonded ?? "";
    message.blocksPerYear = object.blocksPerYear !== void 0 && object.blocksPerYear !== null ? BigInt(object.blocksPerYear.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object) {
    const message = createBaseParams();
    if (object.mint_denom !== void 0 && object.mint_denom !== null) {
      message.mintDenom = object.mint_denom;
    }
    if (object.inflation_rate_change !== void 0 && object.inflation_rate_change !== null) {
      message.inflationRateChange = object.inflation_rate_change;
    }
    if (object.inflation_max !== void 0 && object.inflation_max !== null) {
      message.inflationMax = object.inflation_max;
    }
    if (object.inflation_min !== void 0 && object.inflation_min !== null) {
      message.inflationMin = object.inflation_min;
    }
    if (object.goal_bonded !== void 0 && object.goal_bonded !== null) {
      message.goalBonded = object.goal_bonded;
    }
    if (object.blocks_per_year !== void 0 && object.blocks_per_year !== null) {
      message.blocksPerYear = BigInt(object.blocks_per_year);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.mint_denom = message.mintDenom === "" ? void 0 : message.mintDenom;
    obj.inflation_rate_change = message.inflationRateChange === "" ? void 0 : message.inflationRateChange;
    obj.inflation_max = message.inflationMax === "" ? void 0 : message.inflationMax;
    obj.inflation_min = message.inflationMin === "" ? void 0 : message.inflationMin;
    obj.goal_bonded = message.goalBonded === "" ? void 0 : message.goalBonded;
    obj.blocks_per_year = message.blocksPerYear !== BigInt(0) ? message.blocksPerYear.toString() : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return Params.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/x/mint/Params",
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
      typeUrl: "/cosmos.mint.v1beta1.Params",
      value: Params.encode(message).finish()
    };
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Minter,
  Params
});
