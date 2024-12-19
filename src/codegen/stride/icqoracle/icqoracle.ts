import { Timestamp } from "../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../binary";
import { Decimal } from "@cosmjs/math";
import { toTimestamp, fromTimestamp } from "../../helpers";
/** TokenPrice stores latest price data for a token */
export interface TokenPrice {
  /** Token denom on Stride */
  baseDenom: string;
  /** Quote denom on Stride */
  quoteDenom: string;
  /** Token denom on Osmosis */
  osmosisBaseDenom: string;
  /** Quote denom on Osmosis */
  osmosisQuoteDenom: string;
  /** Pool ID on Osmosis */
  osmosisPoolId: string;
  /** Spot price of base_denom denominated in quote_denom */
  spotPrice: string;
  /** Last update timestamp */
  updatedAt: Date;
  /** Whether there is a spot price query currently in progress */
  queryInProgress: boolean;
}
export interface TokenPriceProtoMsg {
  typeUrl: "/stride.icqoracle.TokenPrice";
  value: Uint8Array;
}
/** TokenPrice stores latest price data for a token */
export interface TokenPriceAmino {
  /** Token denom on Stride */
  base_denom?: string;
  /** Quote denom on Stride */
  quote_denom?: string;
  /** Token denom on Osmosis */
  osmosis_base_denom?: string;
  /** Quote denom on Osmosis */
  osmosis_quote_denom?: string;
  /** Pool ID on Osmosis */
  osmosis_pool_id?: string;
  /** Spot price of base_denom denominated in quote_denom */
  spot_price?: string;
  /** Last update timestamp */
  updated_at?: string;
  /** Whether there is a spot price query currently in progress */
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
  osmosis_pool_id: string;
  spot_price: string;
  updated_at: Date;
  query_in_progress: boolean;
}
/** OracleParams stores global oracle parameters */
export interface Params {
  /** Osmosis chain identifier */
  osmosisChainId: string;
  /** Osmosis IBC connection identifier */
  osmosisConnectionId: string;
  /** Time between price updates */
  updateIntervalSec: bigint;
  /** Max time before price is considered stale/expired */
  priceExpirationTimeoutSec: bigint;
  /** ICQ timeout */
  icqTimeoutSec: bigint;
}
export interface ParamsProtoMsg {
  typeUrl: "/stride.icqoracle.Params";
  value: Uint8Array;
}
/** OracleParams stores global oracle parameters */
export interface ParamsAmino {
  /** Osmosis chain identifier */
  osmosis_chain_id: string;
  /** Osmosis IBC connection identifier */
  osmosis_connection_id: string;
  /** Time between price updates */
  update_interval_sec: string;
  /** Max time before price is considered stale/expired */
  price_expiration_timeout_sec: string;
  /** ICQ timeout */
  icq_timeout_sec: string;
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
  icq_timeout_sec: bigint;
}
function createBaseTokenPrice(): TokenPrice {
  return {
    baseDenom: "",
    quoteDenom: "",
    osmosisBaseDenom: "",
    osmosisQuoteDenom: "",
    osmosisPoolId: "",
    spotPrice: "",
    updatedAt: new Date(),
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
    if (message.osmosisPoolId !== "") {
      writer.uint32(42).string(message.osmosisPoolId);
    }
    if (message.spotPrice !== "") {
      writer.uint32(50).string(Decimal.fromUserInput(message.spotPrice, 18).atomics);
    }
    if (message.updatedAt !== undefined) {
      Timestamp.encode(toTimestamp(message.updatedAt), writer.uint32(58).fork()).ldelim();
    }
    if (message.queryInProgress === true) {
      writer.uint32(64).bool(message.queryInProgress);
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
          message.osmosisPoolId = reader.string();
          break;
        case 6:
          message.spotPrice = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 7:
          message.updatedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 8:
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
    message.osmosisPoolId = object.osmosisPoolId ?? "";
    message.spotPrice = object.spotPrice ?? "";
    message.updatedAt = object.updatedAt ?? undefined;
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
      message.osmosisPoolId = object.osmosis_pool_id;
    }
    if (object.spot_price !== undefined && object.spot_price !== null) {
      message.spotPrice = object.spot_price;
    }
    if (object.updated_at !== undefined && object.updated_at !== null) {
      message.updatedAt = fromTimestamp(Timestamp.fromAmino(object.updated_at));
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
    obj.osmosis_pool_id = message.osmosisPoolId === "" ? undefined : message.osmosisPoolId;
    obj.spot_price = message.spotPrice === "" ? undefined : message.spotPrice;
    obj.updated_at = message.updatedAt ? Timestamp.toAmino(toTimestamp(message.updatedAt)) : undefined;
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
    priceExpirationTimeoutSec: BigInt(0),
    icqTimeoutSec: BigInt(0)
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
    if (message.icqTimeoutSec !== BigInt(0)) {
      writer.uint32(40).uint64(message.icqTimeoutSec);
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
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.osmosisChainId = object.osmosisChainId ?? "";
    message.osmosisConnectionId = object.osmosisConnectionId ?? "";
    message.updateIntervalSec = object.updateIntervalSec !== undefined && object.updateIntervalSec !== null ? BigInt(object.updateIntervalSec.toString()) : BigInt(0);
    message.priceExpirationTimeoutSec = object.priceExpirationTimeoutSec !== undefined && object.priceExpirationTimeoutSec !== null ? BigInt(object.priceExpirationTimeoutSec.toString()) : BigInt(0);
    message.icqTimeoutSec = object.icqTimeoutSec !== undefined && object.icqTimeoutSec !== null ? BigInt(object.icqTimeoutSec.toString()) : BigInt(0);
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
    if (object.icq_timeout_sec !== undefined && object.icq_timeout_sec !== null) {
      message.icqTimeoutSec = BigInt(object.icq_timeout_sec);
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.osmosis_chain_id = message.osmosisChainId ?? "";
    obj.osmosis_connection_id = message.osmosisConnectionId ?? "";
    obj.update_interval_sec = message.updateIntervalSec ? message.updateIntervalSec.toString() : "0";
    obj.price_expiration_timeout_sec = message.priceExpirationTimeoutSec ? message.priceExpirationTimeoutSec.toString() : "0";
    obj.icq_timeout_sec = message.icqTimeoutSec ? message.icqTimeoutSec.toString() : "0";
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