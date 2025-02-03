import { Timestamp } from "../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../binary";
import { Decimal } from "@cosmjs/math";
import { toTimestamp, fromTimestamp } from "../../helpers";
function createBaseTokenPrice() {
  return {
    baseDenom: "",
    quoteDenom: "",
    baseDenomDecimals: BigInt(0),
    quoteDenomDecimals: BigInt(0),
    osmosisBaseDenom: "",
    osmosisQuoteDenom: "",
    osmosisPoolId: "",
    spotPrice: "",
    updatedAt: /* @__PURE__ */ new Date(),
    queryInProgress: false
  };
}
const TokenPrice = {
  typeUrl: "/stride.icqoracle.TokenPrice",
  encode(message, writer = BinaryWriter.create()) {
    if (message.baseDenom !== "") {
      writer.uint32(10).string(message.baseDenom);
    }
    if (message.quoteDenom !== "") {
      writer.uint32(18).string(message.quoteDenom);
    }
    if (message.baseDenomDecimals !== BigInt(0)) {
      writer.uint32(24).int64(message.baseDenomDecimals);
    }
    if (message.quoteDenomDecimals !== BigInt(0)) {
      writer.uint32(32).int64(message.quoteDenomDecimals);
    }
    if (message.osmosisBaseDenom !== "") {
      writer.uint32(42).string(message.osmosisBaseDenom);
    }
    if (message.osmosisQuoteDenom !== "") {
      writer.uint32(50).string(message.osmosisQuoteDenom);
    }
    if (message.osmosisPoolId !== "") {
      writer.uint32(58).string(message.osmosisPoolId);
    }
    if (message.spotPrice !== "") {
      writer.uint32(66).string(Decimal.fromUserInput(message.spotPrice, 18).atomics);
    }
    if (message.updatedAt !== void 0) {
      Timestamp.encode(toTimestamp(message.updatedAt), writer.uint32(74).fork()).ldelim();
    }
    if (message.queryInProgress === true) {
      writer.uint32(80).bool(message.queryInProgress);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
          message.baseDenomDecimals = reader.int64();
          break;
        case 4:
          message.quoteDenomDecimals = reader.int64();
          break;
        case 5:
          message.osmosisBaseDenom = reader.string();
          break;
        case 6:
          message.osmosisQuoteDenom = reader.string();
          break;
        case 7:
          message.osmosisPoolId = reader.string();
          break;
        case 8:
          message.spotPrice = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 9:
          message.updatedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 10:
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
    message.baseDenomDecimals = object.baseDenomDecimals !== void 0 && object.baseDenomDecimals !== null ? BigInt(object.baseDenomDecimals.toString()) : BigInt(0);
    message.quoteDenomDecimals = object.quoteDenomDecimals !== void 0 && object.quoteDenomDecimals !== null ? BigInt(object.quoteDenomDecimals.toString()) : BigInt(0);
    message.osmosisBaseDenom = object.osmosisBaseDenom ?? "";
    message.osmosisQuoteDenom = object.osmosisQuoteDenom ?? "";
    message.osmosisPoolId = object.osmosisPoolId ?? "";
    message.spotPrice = object.spotPrice ?? "";
    message.updatedAt = object.updatedAt ?? void 0;
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
    if (object.base_denom_decimals !== void 0 && object.base_denom_decimals !== null) {
      message.baseDenomDecimals = BigInt(object.base_denom_decimals);
    }
    if (object.quote_denom_decimals !== void 0 && object.quote_denom_decimals !== null) {
      message.quoteDenomDecimals = BigInt(object.quote_denom_decimals);
    }
    if (object.osmosis_base_denom !== void 0 && object.osmosis_base_denom !== null) {
      message.osmosisBaseDenom = object.osmosis_base_denom;
    }
    if (object.osmosis_quote_denom !== void 0 && object.osmosis_quote_denom !== null) {
      message.osmosisQuoteDenom = object.osmosis_quote_denom;
    }
    if (object.osmosis_pool_id !== void 0 && object.osmosis_pool_id !== null) {
      message.osmosisPoolId = object.osmosis_pool_id;
    }
    if (object.spot_price !== void 0 && object.spot_price !== null) {
      message.spotPrice = object.spot_price;
    }
    if (object.updated_at !== void 0 && object.updated_at !== null) {
      message.updatedAt = fromTimestamp(Timestamp.fromAmino(object.updated_at));
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
    obj.base_denom_decimals = message.baseDenomDecimals !== BigInt(0) ? message.baseDenomDecimals.toString() : void 0;
    obj.quote_denom_decimals = message.quoteDenomDecimals !== BigInt(0) ? message.quoteDenomDecimals.toString() : void 0;
    obj.osmosis_base_denom = message.osmosisBaseDenom === "" ? void 0 : message.osmosisBaseDenom;
    obj.osmosis_quote_denom = message.osmosisQuoteDenom === "" ? void 0 : message.osmosisQuoteDenom;
    obj.osmosis_pool_id = message.osmosisPoolId === "" ? void 0 : message.osmosisPoolId;
    obj.spot_price = message.spotPrice === "" ? void 0 : message.spotPrice;
    obj.updated_at = message.updatedAt ? Timestamp.toAmino(toTimestamp(message.updatedAt)) : void 0;
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
    priceExpirationTimeoutSec: BigInt(0),
    icqTimeoutSec: BigInt(0)
  };
}
const Params = {
  typeUrl: "/stride.icqoracle.Params",
  encode(message, writer = BinaryWriter.create()) {
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
    if (message.icqTimeoutSec !== BigInt(0)) {
      writer.uint32(40).uint64(message.icqTimeoutSec);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        case 5:
          message.icqTimeoutSec = reader.uint64();
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
    message.icqTimeoutSec = object.icqTimeoutSec !== void 0 && object.icqTimeoutSec !== null ? BigInt(object.icqTimeoutSec.toString()) : BigInt(0);
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
    if (object.icq_timeout_sec !== void 0 && object.icq_timeout_sec !== null) {
      message.icqTimeoutSec = BigInt(object.icq_timeout_sec);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.osmosis_chain_id = message.osmosisChainId ?? "";
    obj.osmosis_connection_id = message.osmosisConnectionId ?? "";
    obj.update_interval_sec = message.updateIntervalSec ? message.updateIntervalSec.toString() : "0";
    obj.price_expiration_timeout_sec = message.priceExpirationTimeoutSec ? message.priceExpirationTimeoutSec.toString() : "0";
    obj.icq_timeout_sec = message.icqTimeoutSec ? message.icqTimeoutSec.toString() : "0";
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
export {
  Params,
  TokenPrice
};
