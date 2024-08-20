import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** MsgSwapExactAmountIn stores the tx Msg type to swap tokens in the trade ICA */
export interface MsgSwapExactAmountIn {
    sender: string;
    routes: SwapAmountInRoute[];
    tokenIn: Coin;
    tokenOutMinAmount: string;
}
export interface MsgSwapExactAmountInProtoMsg {
    typeUrl: "/osmosis.gamm.v1beta1.MsgSwapExactAmountIn";
    value: Uint8Array;
}
/** MsgSwapExactAmountIn stores the tx Msg type to swap tokens in the trade ICA */
export interface MsgSwapExactAmountInAmino {
    sender?: string;
    routes?: SwapAmountInRouteAmino[];
    token_in?: CoinAmino;
    token_out_min_amount?: string;
}
export interface MsgSwapExactAmountInAminoMsg {
    type: "osmosis/gamm/swap-exact-amount-in";
    value: MsgSwapExactAmountInAmino;
}
/** MsgSwapExactAmountIn stores the tx Msg type to swap tokens in the trade ICA */
export interface MsgSwapExactAmountInSDKType {
    sender: string;
    routes: SwapAmountInRouteSDKType[];
    token_in: CoinSDKType;
    token_out_min_amount: string;
}
export interface SwapAmountInRoute {
    poolId: bigint;
    tokenOutDenom: string;
}
export interface SwapAmountInRouteProtoMsg {
    typeUrl: "/osmosis.gamm.v1beta1.SwapAmountInRoute";
    value: Uint8Array;
}
export interface SwapAmountInRouteAmino {
    pool_id?: string;
    token_out_denom?: string;
}
export interface SwapAmountInRouteAminoMsg {
    type: "osmosis/gamm/swap-amount-in-route";
    value: SwapAmountInRouteAmino;
}
export interface SwapAmountInRouteSDKType {
    pool_id: bigint;
    token_out_denom: string;
}
/** A TwapRecord stores the most recent price of a pair of denom's */
export interface OsmosisTwapRecord {
    poolId: bigint;
    /** Lexicographically smaller denom of the pair */
    asset0Denom: string;
    /** Lexicographically larger denom of the pair */
    asset1Denom: string;
    /** height this record corresponds to, for debugging purposes */
    height: bigint;
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
export interface OsmosisTwapRecordProtoMsg {
    typeUrl: "/osmosis.gamm.v1beta1.OsmosisTwapRecord";
    value: Uint8Array;
}
/** A TwapRecord stores the most recent price of a pair of denom's */
export interface OsmosisTwapRecordAmino {
    pool_id?: string;
    /** Lexicographically smaller denom of the pair */
    asset0_denom?: string;
    /** Lexicographically larger denom of the pair */
    asset1_denom?: string;
    /** height this record corresponds to, for debugging purposes */
    height: string;
    /**
     * This field should only exist until we have a global registry in the state
     * machine, mapping prior block heights within {TIME RANGE} to times.
     */
    time?: string;
    /**
     * We store the last spot prices in the struct, so that we can interpolate
     * accumulator values for times between when accumulator records are stored.
     */
    p0_last_spot_price?: string;
    p1_last_spot_price?: string;
    p0_arithmetic_twap_accumulator?: string;
    p1_arithmetic_twap_accumulator?: string;
    geometric_twap_accumulator?: string;
    /**
     * This field contains the time in which the last spot price error occured.
     * It is used to alert the caller if they are getting a potentially erroneous
     * TWAP, due to an unforeseen underlying error.
     */
    last_error_time?: string;
}
export interface OsmosisTwapRecordAminoMsg {
    type: "osmosis/gamm/osmosis-twap-record";
    value: OsmosisTwapRecordAmino;
}
/** A TwapRecord stores the most recent price of a pair of denom's */
export interface OsmosisTwapRecordSDKType {
    pool_id: bigint;
    asset0_denom: string;
    asset1_denom: string;
    height: bigint;
    time: Date;
    p0_last_spot_price: string;
    p1_last_spot_price: string;
    p0_arithmetic_twap_accumulator: string;
    p1_arithmetic_twap_accumulator: string;
    geometric_twap_accumulator: string;
    last_error_time: Date;
}
export declare const MsgSwapExactAmountIn: {
    typeUrl: string;
    encode(message: MsgSwapExactAmountIn, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgSwapExactAmountIn;
    fromPartial(object: Partial<MsgSwapExactAmountIn>): MsgSwapExactAmountIn;
    fromAmino(object: MsgSwapExactAmountInAmino): MsgSwapExactAmountIn;
    toAmino(message: MsgSwapExactAmountIn): MsgSwapExactAmountInAmino;
    fromAminoMsg(object: MsgSwapExactAmountInAminoMsg): MsgSwapExactAmountIn;
    toAminoMsg(message: MsgSwapExactAmountIn): MsgSwapExactAmountInAminoMsg;
    fromProtoMsg(message: MsgSwapExactAmountInProtoMsg): MsgSwapExactAmountIn;
    toProto(message: MsgSwapExactAmountIn): Uint8Array;
    toProtoMsg(message: MsgSwapExactAmountIn): MsgSwapExactAmountInProtoMsg;
};
export declare const SwapAmountInRoute: {
    typeUrl: string;
    encode(message: SwapAmountInRoute, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): SwapAmountInRoute;
    fromPartial(object: Partial<SwapAmountInRoute>): SwapAmountInRoute;
    fromAmino(object: SwapAmountInRouteAmino): SwapAmountInRoute;
    toAmino(message: SwapAmountInRoute): SwapAmountInRouteAmino;
    fromAminoMsg(object: SwapAmountInRouteAminoMsg): SwapAmountInRoute;
    toAminoMsg(message: SwapAmountInRoute): SwapAmountInRouteAminoMsg;
    fromProtoMsg(message: SwapAmountInRouteProtoMsg): SwapAmountInRoute;
    toProto(message: SwapAmountInRoute): Uint8Array;
    toProtoMsg(message: SwapAmountInRoute): SwapAmountInRouteProtoMsg;
};
export declare const OsmosisTwapRecord: {
    typeUrl: string;
    encode(message: OsmosisTwapRecord, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): OsmosisTwapRecord;
    fromPartial(object: Partial<OsmosisTwapRecord>): OsmosisTwapRecord;
    fromAmino(object: OsmosisTwapRecordAmino): OsmosisTwapRecord;
    toAmino(message: OsmosisTwapRecord): OsmosisTwapRecordAmino;
    fromAminoMsg(object: OsmosisTwapRecordAminoMsg): OsmosisTwapRecord;
    toAminoMsg(message: OsmosisTwapRecord): OsmosisTwapRecordAminoMsg;
    fromProtoMsg(message: OsmosisTwapRecordProtoMsg): OsmosisTwapRecord;
    toProto(message: OsmosisTwapRecord): Uint8Array;
    toProtoMsg(message: OsmosisTwapRecord): OsmosisTwapRecordProtoMsg;
};
