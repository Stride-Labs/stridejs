import { BinaryReader, BinaryWriter } from "../binary";
/**
 * A TWAP record should be indexed in state by pool_id, (asset pair), timestamp
 * The asset pair assets should be lexicographically sorted.
 * Technically (pool_id, asset_0_denom, asset_1_denom, height) do not need to
 * appear in the struct however we view this as the wrong performance tradeoff
 * given SDK today. Would rather we optimize for readability and correctness,
 * than an optimal state storage format. The system bottleneck is elsewhere for
 * now.
 */
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
     * This field contains the time in which the last spot price error occurred.
     * It is used to alert the caller if they are getting a potentially erroneous
     * TWAP, due to an unforeseen underlying error.
     */
    lastErrorTime: Date;
}
export interface OsmosisTwapRecordProtoMsg {
    typeUrl: "/osmosis.OsmosisTwapRecord";
    value: Uint8Array;
}
/**
 * A TWAP record should be indexed in state by pool_id, (asset pair), timestamp
 * The asset pair assets should be lexicographically sorted.
 * Technically (pool_id, asset_0_denom, asset_1_denom, height) do not need to
 * appear in the struct however we view this as the wrong performance tradeoff
 * given SDK today. Would rather we optimize for readability and correctness,
 * than an optimal state storage format. The system bottleneck is elsewhere for
 * now.
 */
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
     * This field contains the time in which the last spot price error occurred.
     * It is used to alert the caller if they are getting a potentially erroneous
     * TWAP, due to an unforeseen underlying error.
     */
    last_error_time?: string;
}
export interface OsmosisTwapRecordAminoMsg {
    type: "osmosis/osmosis-twap-record";
    value: OsmosisTwapRecordAmino;
}
/**
 * A TWAP record should be indexed in state by pool_id, (asset pair), timestamp
 * The asset pair assets should be lexicographically sorted.
 * Technically (pool_id, asset_0_denom, asset_1_denom, height) do not need to
 * appear in the struct however we view this as the wrong performance tradeoff
 * given SDK today. Would rather we optimize for readability and correctness,
 * than an optimal state storage format. The system bottleneck is elsewhere for
 * now.
 */
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
