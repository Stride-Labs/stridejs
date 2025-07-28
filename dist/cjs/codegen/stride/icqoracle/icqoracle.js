"use strict";
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
var icqoracle_exports = {};
__export(icqoracle_exports, {
  Params: () => Params,
  TokenPrice: () => TokenPrice
});
module.exports = __toCommonJS(icqoracle_exports);
var import_timestamp = require("../../google/protobuf/timestamp");
var import_binary = require("../../binary");
var import_decimals = require("../../decimals");
var import_helpers = require("../../helpers");
function createBaseTokenPrice() {
  return {
    baseDenom: "",
    quoteDenom: "",
    osmosisBaseDenom: "",
    osmosisQuoteDenom: "",
    osmosisPoolId: BigInt(0),
    spotPrice: "",
    lastRequestTime: /* @__PURE__ */ new Date(),
    lastResponseTime: /* @__PURE__ */ new Date(),
    queryInProgress: false
  };
}
const TokenPrice = {
  typeUrl: "/stride.icqoracle.TokenPrice",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.baseDenom !== "") {
      writer.uint32(10).string(message.baseDenom);
    }
    if (message.quoteDenom !== "") {
      writer.uint32(18).string(message.quoteDenom);
    }
    if (message.osmosisBaseDenom !== "") {
      writer.uint32(26).string(message.osmosisBaseDenom);
    }
    if (message.osmosisQuoteDenom !== "") {
      writer.uint32(34).string(message.osmosisQuoteDenom);
    }
    if (message.osmosisPoolId !== BigInt(0)) {
      writer.uint32(40).uint64(message.osmosisPoolId);
    }
    if (message.spotPrice !== "") {
      writer.uint32(50).string(import_decimals.Decimal.fromUserInput(message.spotPrice, 18).atomics);
    }
    if (message.lastRequestTime !== void 0) {
      import_timestamp.Timestamp.encode((0, import_helpers.toTimestamp)(message.lastRequestTime), writer.uint32(58).fork()).ldelim();
    }
    if (message.lastResponseTime !== void 0) {
      import_timestamp.Timestamp.encode((0, import_helpers.toTimestamp)(message.lastResponseTime), writer.uint32(66).fork()).ldelim();
    }
    if (message.queryInProgress === true) {
      writer.uint32(72).bool(message.queryInProgress);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseTokenPrice();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.baseDenom = reader.string();
          break;
        case 2:
          message.quoteDenom = reader.string();
          break;
        case 3:
          message.osmosisBaseDenom = reader.string();
          break;
        case 4:
          message.osmosisQuoteDenom = reader.string();
          break;
        case 5:
          message.osmosisPoolId = reader.uint64();
          break;
        case 6:
          message.spotPrice = import_decimals.Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 7:
          message.lastRequestTime = (0, import_helpers.fromTimestamp)(import_timestamp.Timestamp.decode(reader, reader.uint32()));
          break;
        case 8:
          message.lastResponseTime = (0, import_helpers.fromTimestamp)(import_timestamp.Timestamp.decode(reader, reader.uint32()));
          break;
        case 9:
          message.queryInProgress = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseTokenPrice();
    message.baseDenom = object.baseDenom ?? "";
    message.quoteDenom = object.quoteDenom ?? "";
    message.osmosisBaseDenom = object.osmosisBaseDenom ?? "";
    message.osmosisQuoteDenom = object.osmosisQuoteDenom ?? "";
    message.osmosisPoolId = object.osmosisPoolId !== void 0 && object.osmosisPoolId !== null ? BigInt(object.osmosisPoolId.toString()) : BigInt(0);
    message.spotPrice = object.spotPrice ?? "";
    message.lastRequestTime = object.lastRequestTime ?? void 0;
    message.lastResponseTime = object.lastResponseTime ?? void 0;
    message.queryInProgress = object.queryInProgress ?? false;
    return message;
  },
  fromAmino(object) {
    const message = createBaseTokenPrice();
    if (object.base_denom !== void 0 && object.base_denom !== null) {
      message.baseDenom = object.base_denom;
    }
    if (object.quote_denom !== void 0 && object.quote_denom !== null) {
      message.quoteDenom = object.quote_denom;
    }
    if (object.osmosis_base_denom !== void 0 && object.osmosis_base_denom !== null) {
      message.osmosisBaseDenom = object.osmosis_base_denom;
    }
    if (object.osmosis_quote_denom !== void 0 && object.osmosis_quote_denom !== null) {
      message.osmosisQuoteDenom = object.osmosis_quote_denom;
    }
    if (object.osmosis_pool_id !== void 0 && object.osmosis_pool_id !== null) {
      message.osmosisPoolId = BigInt(object.osmosis_pool_id);
    }
    if (object.spot_price !== void 0 && object.spot_price !== null) {
      message.spotPrice = object.spot_price;
    }
    if (object.last_request_time !== void 0 && object.last_request_time !== null) {
      message.lastRequestTime = (0, import_helpers.fromTimestamp)(import_timestamp.Timestamp.fromAmino(object.last_request_time));
    }
    if (object.last_response_time !== void 0 && object.last_response_time !== null) {
      message.lastResponseTime = (0, import_helpers.fromTimestamp)(import_timestamp.Timestamp.fromAmino(object.last_response_time));
    }
    if (object.query_in_progress !== void 0 && object.query_in_progress !== null) {
      message.queryInProgress = object.query_in_progress;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.base_denom = message.baseDenom === "" ? void 0 : message.baseDenom;
    obj.quote_denom = message.quoteDenom === "" ? void 0 : message.quoteDenom;
    obj.osmosis_base_denom = message.osmosisBaseDenom === "" ? void 0 : message.osmosisBaseDenom;
    obj.osmosis_quote_denom = message.osmosisQuoteDenom === "" ? void 0 : message.osmosisQuoteDenom;
    obj.osmosis_pool_id = message.osmosisPoolId !== BigInt(0) ? message.osmosisPoolId?.toString() : void 0;
    obj.spot_price = message.spotPrice === "" ? void 0 : message.spotPrice;
    obj.last_request_time = message.lastRequestTime ? import_timestamp.Timestamp.toAmino((0, import_helpers.toTimestamp)(message.lastRequestTime)) : void 0;
    obj.last_response_time = message.lastResponseTime ? import_timestamp.Timestamp.toAmino((0, import_helpers.toTimestamp)(message.lastResponseTime)) : void 0;
    obj.query_in_progress = message.queryInProgress === false ? void 0 : message.queryInProgress;
    return obj;
  },
  fromAminoMsg(object) {
    return TokenPrice.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return TokenPrice.decode(message.value);
  },
  toProto(message) {
    return TokenPrice.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.icqoracle.TokenPrice",
      value: TokenPrice.encode(message).finish()
    };
  }
};
function createBaseParams() {
  return {
    osmosisChainId: "",
    osmosisConnectionId: "",
    updateIntervalSec: BigInt(0),
    priceExpirationTimeoutSec: BigInt(0)
  };
}
const Params = {
  typeUrl: "/stride.icqoracle.Params",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.osmosisChainId !== "") {
      writer.uint32(10).string(message.osmosisChainId);
    }
    if (message.osmosisConnectionId !== "") {
      writer.uint32(18).string(message.osmosisConnectionId);
    }
    if (message.updateIntervalSec !== BigInt(0)) {
      writer.uint32(24).uint64(message.updateIntervalSec);
    }
    if (message.priceExpirationTimeoutSec !== BigInt(0)) {
      writer.uint32(32).uint64(message.priceExpirationTimeoutSec);
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
          message.osmosisChainId = reader.string();
          break;
        case 2:
          message.osmosisConnectionId = reader.string();
          break;
        case 3:
          message.updateIntervalSec = reader.uint64();
          break;
        case 4:
          message.priceExpirationTimeoutSec = reader.uint64();
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
    message.osmosisChainId = object.osmosisChainId ?? "";
    message.osmosisConnectionId = object.osmosisConnectionId ?? "";
    message.updateIntervalSec = object.updateIntervalSec !== void 0 && object.updateIntervalSec !== null ? BigInt(object.updateIntervalSec.toString()) : BigInt(0);
    message.priceExpirationTimeoutSec = object.priceExpirationTimeoutSec !== void 0 && object.priceExpirationTimeoutSec !== null ? BigInt(object.priceExpirationTimeoutSec.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object) {
    const message = createBaseParams();
    if (object.osmosis_chain_id !== void 0 && object.osmosis_chain_id !== null) {
      message.osmosisChainId = object.osmosis_chain_id;
    }
    if (object.osmosis_connection_id !== void 0 && object.osmosis_connection_id !== null) {
      message.osmosisConnectionId = object.osmosis_connection_id;
    }
    if (object.update_interval_sec !== void 0 && object.update_interval_sec !== null) {
      message.updateIntervalSec = BigInt(object.update_interval_sec);
    }
    if (object.price_expiration_timeout_sec !== void 0 && object.price_expiration_timeout_sec !== null) {
      message.priceExpirationTimeoutSec = BigInt(object.price_expiration_timeout_sec);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.osmosis_chain_id = message.osmosisChainId ?? "";
    obj.osmosis_connection_id = message.osmosisConnectionId ?? "";
    obj.update_interval_sec = message.updateIntervalSec ? message.updateIntervalSec?.toString() : "0";
    obj.price_expiration_timeout_sec = message.priceExpirationTimeoutSec ? message.priceExpirationTimeoutSec?.toString() : "0";
    return obj;
  },
  fromAminoMsg(object) {
    return Params.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return Params.decode(message.value);
  },
  toProto(message) {
    return Params.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.icqoracle.Params",
      value: Params.encode(message).finish()
    };
  }
};
// Proper CommonJS exports for dynamic imports
module.exports = {
  Params,
  TokenPrice
};
