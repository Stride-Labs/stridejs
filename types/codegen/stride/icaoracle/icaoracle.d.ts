import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
/** MetricStatus indicates whether the Metric update ICA has been sent */
export declare enum MetricStatus {
    METRIC_STATUS_UNSPECIFIED = 0,
    METRIC_STATUS_QUEUED = 1,
    METRIC_STATUS_IN_PROGRESS = 2,
    UNRECOGNIZED = -1
}
/** MetricStatus indicates whether the Metric update ICA has been sent */
export declare enum MetricStatusSDKType {
    METRIC_STATUS_UNSPECIFIED = 0,
    METRIC_STATUS_QUEUED = 1,
    METRIC_STATUS_IN_PROGRESS = 2,
    UNRECOGNIZED = -1
}
export declare function metricStatusFromJSON(object: any): MetricStatus;
export declare function metricStatusToJSON(object: MetricStatus): string;
/** Oracle structure stores context about the CW oracle sitting a different chain */
export interface Oracle {
    chainId: string;
    connectionId: string;
    channelId: string;
    portId: string;
    icaAddress: string;
    contractAddress: string;
    active: boolean;
}
/** Oracle structure stores context about the CW oracle sitting a different chain */
export interface OracleSDKType {
    chain_id: string;
    connection_id: string;
    channel_id: string;
    port_id: string;
    ica_address: string;
    contract_address: string;
    active: boolean;
}
/**
 * Metric structure stores a generic metric using a key value structure
 * along with additional context
 */
export interface Metric {
    key: string;
    value: string;
    metricType: string;
    updateTime: Long;
    blockHeight: Long;
    attributes: string;
    destinationOracle: string;
    status: MetricStatus;
}
/**
 * Metric structure stores a generic metric using a key value structure
 * along with additional context
 */
export interface MetricSDKType {
    key: string;
    value: string;
    metric_type: string;
    update_time: Long;
    block_height: Long;
    attributes: string;
    destination_oracle: string;
    status: MetricStatusSDKType;
}
/** Attributes associated with a RedemptionRate metric update */
export interface RedemptionRateAttributes {
    /** Attributes associated with a RedemptionRate metric update */
    sttokenDenom: string;
}
/** Attributes associated with a RedemptionRate metric update */
export interface RedemptionRateAttributesSDKType {
    /** Attributes associated with a RedemptionRate metric update */
    sttoken_denom: string;
}
export declare const Oracle: {
    encode(message: Oracle, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Oracle;
    fromPartial(object: DeepPartial<Oracle>): Oracle;
};
export declare const Metric: {
    encode(message: Metric, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Metric;
    fromPartial(object: DeepPartial<Metric>): Metric;
};
export declare const RedemptionRateAttributes: {
    encode(message: RedemptionRateAttributes, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RedemptionRateAttributes;
    fromPartial(object: DeepPartial<RedemptionRateAttributes>): RedemptionRateAttributes;
};
