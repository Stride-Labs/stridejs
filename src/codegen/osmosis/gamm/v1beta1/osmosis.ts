import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Timestamp } from "../../../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long, toTimestamp, fromTimestamp } from "@osmonauts/helpers";
/** MsgSwapExactAmountIn stores the tx Msg type to swap tokens in the trade ICA */

export interface MsgSwapExactAmountIn {
  sender: string;
  routes: SwapAmountInRoute[];
  tokenIn: Coin;
  tokenOutMinAmount: string;
}
/** MsgSwapExactAmountIn stores the tx Msg type to swap tokens in the trade ICA */

export interface MsgSwapExactAmountInSDKType {
  sender: string;
  routes: SwapAmountInRouteSDKType[];
  token_in: CoinSDKType;
  token_out_min_amount: string;
}
export interface SwapAmountInRoute {
  poolId: Long;
  tokenOutDenom: string;
}
export interface SwapAmountInRouteSDKType {
  pool_id: Long;
  token_out_denom: string;
}
/** A TwapRecord stores the most recent price of a pair of denom's */

export interface OsmosisTwapRecord {
  poolId: Long;
  /** Lexicographically smaller denom of the pair */

  asset0Denom: string;
  /** Lexicographically larger denom of the pair */

  asset1Denom: string;
  /** height this record corresponds to, for debugging purposes */

  height: Long;
  /**
   * This field should only exist until we have a global registry in the state
   * machine, mapping prior block heights within {TIME RANGE} to times.
   */

  time: Date;
  /**
   * We store the last spot prices in the struct, so that we can interpolate
   * accumulator values for times between when accumulator records are stored.
   */

  p0LastSpotPrice: string;
  p1LastSpotPrice: string;
  p0ArithmeticTwapAccumulator: string;
  p1ArithmeticTwapAccumulator: string;
  geometricTwapAccumulator: string;
  /**
   * This field contains the time in which the last spot price error occured.
   * It is used to alert the caller if they are getting a potentially erroneous
   * TWAP, due to an unforeseen underlying error.
   */

  lastErrorTime: Date;
}
/** A TwapRecord stores the most recent price of a pair of denom's */

export interface OsmosisTwapRecordSDKType {
  pool_id: Long;
  /** Lexicographically smaller denom of the pair */

  asset0_denom: string;
  /** Lexicographically larger denom of the pair */

  asset1_denom: string;
  /** height this record corresponds to, for debugging purposes */

  height: Long;
  /**
   * This field should only exist until we have a global registry in the state
   * machine, mapping prior block heights within {TIME RANGE} to times.
   */

  time: Date;
  /**
   * We store the last spot prices in the struct, so that we can interpolate
   * accumulator values for times between when accumulator records are stored.
   */

  p0_last_spot_price: string;
  p1_last_spot_price: string;
  p0_arithmetic_twap_accumulator: string;
  p1_arithmetic_twap_accumulator: string;
  geometric_twap_accumulator: string;
  /**
   * This field contains the time in which the last spot price error occured.
   * It is used to alert the caller if they are getting a potentially erroneous
   * TWAP, due to an unforeseen underlying error.
   */

  last_error_time: Date;
}

function createBaseMsgSwapExactAmountIn(): MsgSwapExactAmountIn {
  return {
    sender: "",
    routes: [],
    tokenIn: undefined,
    tokenOutMinAmount: ""
  };
}

export const MsgSwapExactAmountIn = {
  encode(message: MsgSwapExactAmountIn, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }

    for (const v of message.routes) {
      SwapAmountInRoute.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    if (message.tokenIn !== undefined) {
      Coin.encode(message.tokenIn, writer.uint32(26).fork()).ldelim();
    }

    if (message.tokenOutMinAmount !== "") {
      writer.uint32(34).string(message.tokenOutMinAmount);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSwapExactAmountIn {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSwapExactAmountIn();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;

        case 2:
          message.routes.push(SwapAmountInRoute.decode(reader, reader.uint32()));
          break;

        case 3:
          message.tokenIn = Coin.decode(reader, reader.uint32());
          break;

        case 4:
          message.tokenOutMinAmount = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgSwapExactAmountIn>): MsgSwapExactAmountIn {
    const message = createBaseMsgSwapExactAmountIn();
    message.sender = object.sender ?? "";
    message.routes = object.routes?.map(e => SwapAmountInRoute.fromPartial(e)) || [];
    message.tokenIn = object.tokenIn !== undefined && object.tokenIn !== null ? Coin.fromPartial(object.tokenIn) : undefined;
    message.tokenOutMinAmount = object.tokenOutMinAmount ?? "";
    return message;
  }

};

function createBaseSwapAmountInRoute(): SwapAmountInRoute {
  return {
    poolId: Long.UZERO,
    tokenOutDenom: ""
  };
}

export const SwapAmountInRoute = {
  encode(message: SwapAmountInRoute, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }

    if (message.tokenOutDenom !== "") {
      writer.uint32(18).string(message.tokenOutDenom);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SwapAmountInRoute {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSwapAmountInRoute();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.poolId = (reader.uint64() as Long);
          break;

        case 2:
          message.tokenOutDenom = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<SwapAmountInRoute>): SwapAmountInRoute {
    const message = createBaseSwapAmountInRoute();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    message.tokenOutDenom = object.tokenOutDenom ?? "";
    return message;
  }

};

function createBaseOsmosisTwapRecord(): OsmosisTwapRecord {
  return {
    poolId: Long.UZERO,
    asset0Denom: "",
    asset1Denom: "",
    height: Long.ZERO,
    time: undefined,
    p0LastSpotPrice: "",
    p1LastSpotPrice: "",
    p0ArithmeticTwapAccumulator: "",
    p1ArithmeticTwapAccumulator: "",
    geometricTwapAccumulator: "",
    lastErrorTime: undefined
  };
}

export const OsmosisTwapRecord = {
  encode(message: OsmosisTwapRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }

    if (message.asset0Denom !== "") {
      writer.uint32(18).string(message.asset0Denom);
    }

    if (message.asset1Denom !== "") {
      writer.uint32(26).string(message.asset1Denom);
    }

    if (!message.height.isZero()) {
      writer.uint32(32).int64(message.height);
    }

    if (message.time !== undefined) {
      Timestamp.encode(toTimestamp(message.time), writer.uint32(42).fork()).ldelim();
    }

    if (message.p0LastSpotPrice !== "") {
      writer.uint32(50).string(message.p0LastSpotPrice);
    }

    if (message.p1LastSpotPrice !== "") {
      writer.uint32(58).string(message.p1LastSpotPrice);
    }

    if (message.p0ArithmeticTwapAccumulator !== "") {
      writer.uint32(66).string(message.p0ArithmeticTwapAccumulator);
    }

    if (message.p1ArithmeticTwapAccumulator !== "") {
      writer.uint32(74).string(message.p1ArithmeticTwapAccumulator);
    }

    if (message.geometricTwapAccumulator !== "") {
      writer.uint32(82).string(message.geometricTwapAccumulator);
    }

    if (message.lastErrorTime !== undefined) {
      Timestamp.encode(toTimestamp(message.lastErrorTime), writer.uint32(90).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OsmosisTwapRecord {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOsmosisTwapRecord();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.poolId = (reader.uint64() as Long);
          break;

        case 2:
          message.asset0Denom = reader.string();
          break;

        case 3:
          message.asset1Denom = reader.string();
          break;

        case 4:
          message.height = (reader.int64() as Long);
          break;

        case 5:
          message.time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        case 6:
          message.p0LastSpotPrice = reader.string();
          break;

        case 7:
          message.p1LastSpotPrice = reader.string();
          break;

        case 8:
          message.p0ArithmeticTwapAccumulator = reader.string();
          break;

        case 9:
          message.p1ArithmeticTwapAccumulator = reader.string();
          break;

        case 10:
          message.geometricTwapAccumulator = reader.string();
          break;

        case 11:
          message.lastErrorTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<OsmosisTwapRecord>): OsmosisTwapRecord {
    const message = createBaseOsmosisTwapRecord();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    message.asset0Denom = object.asset0Denom ?? "";
    message.asset1Denom = object.asset1Denom ?? "";
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
    message.time = object.time ?? undefined;
    message.p0LastSpotPrice = object.p0LastSpotPrice ?? "";
    message.p1LastSpotPrice = object.p1LastSpotPrice ?? "";
    message.p0ArithmeticTwapAccumulator = object.p0ArithmeticTwapAccumulator ?? "";
    message.p1ArithmeticTwapAccumulator = object.p1ArithmeticTwapAccumulator ?? "";
    message.geometricTwapAccumulator = object.geometricTwapAccumulator ?? "";
    message.lastErrorTime = object.lastErrorTime ?? undefined;
    return message;
  }

};