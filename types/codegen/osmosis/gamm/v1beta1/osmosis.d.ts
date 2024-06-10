import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
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
export declare const MsgSwapExactAmountIn: {
    encode(message: MsgSwapExactAmountIn, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSwapExactAmountIn;
    fromPartial(object: DeepPartial<MsgSwapExactAmountIn>): MsgSwapExactAmountIn;
};
export declare const SwapAmountInRoute: {
    encode(message: SwapAmountInRoute, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SwapAmountInRoute;
    fromPartial(object: DeepPartial<SwapAmountInRoute>): SwapAmountInRoute;
};
export declare const OsmosisTwapRecord: {
    encode(message: OsmosisTwapRecord, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): OsmosisTwapRecord;
    fromPartial(object: DeepPartial<OsmosisTwapRecord>): OsmosisTwapRecord;
};
