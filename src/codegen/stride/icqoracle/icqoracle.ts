import { Timestamp } from "../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../binary";
import { Decimal } from "../../decimals";
import { toTimestamp, fromTimestamp } from "../../helpers";
/** TokenPrice stores latest price data for a token */
export interface TokenPrice {
  /** Base denom on Stride */
  baseDenom: string;
  /** Quote denom on Stride */
  quoteDenom: string;
  /** Base denom on Osmosis */
  osmosisBaseDenom: string;
  /** Quote denom on Osmosis */
  osmosisQuoteDenom: string;
  /** Pool ID on Osmosis */
  osmosisPoolId: bigint;
  /** Spot price of base_denom denominated in quote_denom */
  spotPrice: string;
  /** Last time a query request was submitted */
  lastRequestTime: Date;
  /** Last time a query response was received */
  lastResponseTime: Date;
  /** Whether there is a spot price query currently in progress */
  queryInProgress: boolean;
}
export interface TokenPriceProtoMsg {
  typeUrl: "/stride.icqoracle.TokenPrice";
  value: Uint8Array;
}
/**
 * TokenPrice stores latest price data for a token
 * @name TokenPriceAmino
 * @package stride.icqoracle
 * @see proto type: stride.icqoracle.TokenPrice
 */
export interface TokenPriceAmino {
  /**
   * Base denom on Stride
   */
  base_denom?: string;
  /**
   * Quote denom on Stride
   */
  quote_denom?: string;
  /**
   * Base denom on Osmosis
   */
  osmosis_base_denom?: string;
  /**
   * Quote denom on Osmosis
   */
  osmosis_quote_denom?: string;
  /**
   * Pool ID on Osmosis
   */
  osmosis_pool_id?: string;
  /**
   * Spot price of base_denom denominated in quote_denom
   */
  spot_price?: string;
  /**
   * Last time a query request was submitted
   */
  last_request_time?: string;
  /**
   * Last time a query response was received
   */
  last_response_time?: string;
  /**
   * Whether there is a spot price query currently in progress
   */
  query_in_progress?: boolean;
}
export interface TokenPriceAminoMsg {
  type: "/stride.icqoracle.TokenPrice";
  value: TokenPriceAmino;
}
/** TokenPrice stores latest price data for a token */
export interface TokenPriceSDKType {
  base_denom: string;
  quote_denom: string;
  osmosis_base_denom: string;
  osmosis_quote_denom: string;
  osmosis_pool_id: bigint;
  spot_price: string;
  last_request_time: Date;
  last_response_time: Date;
  query_in_progress: boolean;
}
/** OracleParams stores global oracle parameters */
export interface Params {
  /** Osmosis chain identifier */
  osmosisChainId: string;
  /** Osmosis IBC connection identifier */
  osmosisConnectionId: string;
  /**
   * Time between price updates
   * Also used to timeout icq requests
   */
  updateIntervalSec: bigint;
  /** Max time before price is considered stale/expired */
  priceExpirationTimeoutSec: bigint;
}
export interface ParamsProtoMsg {
  typeUrl: "/stride.icqoracle.Params";
  value: Uint8Array;
}
/**
 * OracleParams stores global oracle parameters
 * @name ParamsAmino
 * @package stride.icqoracle
 * @see proto type: stride.icqoracle.Params
 */
export interface ParamsAmino {
  /**
   * Osmosis chain identifier
   */
  osmosis_chain_id: string;
  /**
   * Osmosis IBC connection identifier
   */
  osmosis_connection_id: string;
  /**
   * Time between price updates
   * Also used to timeout icq requests
   */
  update_interval_sec: string;
  /**
   * Max time before price is considered stale/expired
   */
  price_expiration_timeout_sec: string;
}
export interface ParamsAminoMsg {
  type: "/stride.icqoracle.Params";
  value: ParamsAmino;
}
/** OracleParams stores global oracle parameters */
export interface ParamsSDKType {
  osmosis_chain_id: string;
  osmosis_connection_id: string;
  update_interval_sec: bigint;
  price_expiration_timeout_sec: bigint;
}
function createBaseTokenPrice(): TokenPrice {
  return {
    baseDenom: "",
    quoteDenom: "",
    osmosisBaseDenom: "",
    osmosisQuoteDenom: "",
    osmosisPoolId: BigInt(0),
    spotPrice: "",
    lastRequestTime: new Date(),
    lastResponseTime: new Date(),
    queryInProgress: false
  };
}
export const TokenPrice = {
  typeUrl: "/stride.icqoracle.TokenPrice",
  encode(message: TokenPrice, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
      writer.uint32(50).string(Decimal.fromUserInput(message.spotPrice, 18).atomics);
    }
    if (message.lastRequestTime !== undefined) {
      Timestamp.encode(toTimestamp(message.lastRequestTime), writer.uint32(58).fork()).ldelim();
    }
    if (message.lastResponseTime !== undefined) {
      Timestamp.encode(toTimestamp(message.lastResponseTime), writer.uint32(66).fork()).ldelim();
    }
    if (message.queryInProgress === true) {
      writer.uint32(72).bool(message.queryInProgress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TokenPrice {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
          message.spotPrice = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 7:
          message.lastRequestTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 8:
          message.lastResponseTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
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
  fromPartial(object: Partial<TokenPrice>): TokenPrice {
    const message = createBaseTokenPrice();
    message.baseDenom = object.baseDenom ?? "";
    message.quoteDenom = object.quoteDenom ?? "";
    message.osmosisBaseDenom = object.osmosisBaseDenom ?? "";
    message.osmosisQuoteDenom = object.osmosisQuoteDenom ?? "";
    message.osmosisPoolId = object.osmosisPoolId !== undefined && object.osmosisPoolId !== null ? BigInt(object.osmosisPoolId.toString()) : BigInt(0);
    message.spotPrice = object.spotPrice ?? "";
    message.lastRequestTime = object.lastRequestTime ?? undefined;
    message.lastResponseTime = object.lastResponseTime ?? undefined;
    message.queryInProgress = object.queryInProgress ?? false;
    return message;
  },
  fromAmino(object: TokenPriceAmino): TokenPrice {
    const message = createBaseTokenPrice();
    if (object.base_denom !== undefined && object.base_denom !== null) {
      message.baseDenom = object.base_denom;
    }
    if (object.quote_denom !== undefined && object.quote_denom !== null) {
      message.quoteDenom = object.quote_denom;
    }
    if (object.osmosis_base_denom !== undefined && object.osmosis_base_denom !== null) {
      message.osmosisBaseDenom = object.osmosis_base_denom;
    }
    if (object.osmosis_quote_denom !== undefined && object.osmosis_quote_denom !== null) {
      message.osmosisQuoteDenom = object.osmosis_quote_denom;
    }
    if (object.osmosis_pool_id !== undefined && object.osmosis_pool_id !== null) {
      message.osmosisPoolId = BigInt(object.osmosis_pool_id);
    }
    if (object.spot_price !== undefined && object.spot_price !== null) {
      message.spotPrice = object.spot_price;
    }
    if (object.last_request_time !== undefined && object.last_request_time !== null) {
      message.lastRequestTime = fromTimestamp(Timestamp.fromAmino(object.last_request_time));
    }
    if (object.last_response_time !== undefined && object.last_response_time !== null) {
      message.lastResponseTime = fromTimestamp(Timestamp.fromAmino(object.last_response_time));
    }
    if (object.query_in_progress !== undefined && object.query_in_progress !== null) {
      message.queryInProgress = object.query_in_progress;
    }
    return message;
  },
  toAmino(message: TokenPrice): TokenPriceAmino {
    const obj: any = {};
    obj.base_denom = message.baseDenom === "" ? undefined : message.baseDenom;
    obj.quote_denom = message.quoteDenom === "" ? undefined : message.quoteDenom;
    obj.osmosis_base_denom = message.osmosisBaseDenom === "" ? undefined : message.osmosisBaseDenom;
    obj.osmosis_quote_denom = message.osmosisQuoteDenom === "" ? undefined : message.osmosisQuoteDenom;
    obj.osmosis_pool_id = message.osmosisPoolId !== BigInt(0) ? message.osmosisPoolId?.toString() : undefined;
    obj.spot_price = message.spotPrice === "" ? undefined : message.spotPrice;
    obj.last_request_time = message.lastRequestTime ? Timestamp.toAmino(toTimestamp(message.lastRequestTime)) : undefined;
    obj.last_response_time = message.lastResponseTime ? Timestamp.toAmino(toTimestamp(message.lastResponseTime)) : undefined;
    obj.query_in_progress = message.queryInProgress === false ? undefined : message.queryInProgress;
    return obj;
  },
  fromAminoMsg(object: TokenPriceAminoMsg): TokenPrice {
    return TokenPrice.fromAmino(object.value);
  },
  fromProtoMsg(message: TokenPriceProtoMsg): TokenPrice {
    return TokenPrice.decode(message.value);
  },
  toProto(message: TokenPrice): Uint8Array {
    return TokenPrice.encode(message).finish();
  },
  toProtoMsg(message: TokenPrice): TokenPriceProtoMsg {
    return {
      typeUrl: "/stride.icqoracle.TokenPrice",
      value: TokenPrice.encode(message).finish()
    };
  }
};
function createBaseParams(): Params {
  return {
    osmosisChainId: "",
    osmosisConnectionId: "",
    updateIntervalSec: BigInt(0),
    priceExpirationTimeoutSec: BigInt(0)
  };
}
export const Params = {
  typeUrl: "/stride.icqoracle.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number): Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.osmosisChainId = object.osmosisChainId ?? "";
    message.osmosisConnectionId = object.osmosisConnectionId ?? "";
    message.updateIntervalSec = object.updateIntervalSec !== undefined && object.updateIntervalSec !== null ? BigInt(object.updateIntervalSec.toString()) : BigInt(0);
    message.priceExpirationTimeoutSec = object.priceExpirationTimeoutSec !== undefined && object.priceExpirationTimeoutSec !== null ? BigInt(object.priceExpirationTimeoutSec.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.osmosis_chain_id !== undefined && object.osmosis_chain_id !== null) {
      message.osmosisChainId = object.osmosis_chain_id;
    }
    if (object.osmosis_connection_id !== undefined && object.osmosis_connection_id !== null) {
      message.osmosisConnectionId = object.osmosis_connection_id;
    }
    if (object.update_interval_sec !== undefined && object.update_interval_sec !== null) {
      message.updateIntervalSec = BigInt(object.update_interval_sec);
    }
    if (object.price_expiration_timeout_sec !== undefined && object.price_expiration_timeout_sec !== null) {
      message.priceExpirationTimeoutSec = BigInt(object.price_expiration_timeout_sec);
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.osmosis_chain_id = message.osmosisChainId ?? "";
    obj.osmosis_connection_id = message.osmosisConnectionId ?? "";
    obj.update_interval_sec = message.updateIntervalSec ? message.updateIntervalSec?.toString() : "0";
    obj.price_expiration_timeout_sec = message.priceExpirationTimeoutSec ? message.priceExpirationTimeoutSec?.toString() : "0";
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/stride.icqoracle.Params",
      value: Params.encode(message).finish()
    };
  }
};