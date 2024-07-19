import { BinaryReader, BinaryWriter } from "../../binary";
/** MetricStatus indicates whether the Metric update ICA has been sent */
export declare enum MetricStatus {
    METRIC_STATUS_UNSPECIFIED = 0,
    METRIC_STATUS_QUEUED = 1,
    METRIC_STATUS_IN_PROGRESS = 2,
    UNRECOGNIZED = -1
}
export declare const MetricStatusSDKType: typeof MetricStatus;
export declare const MetricStatusAmino: typeof MetricStatus;
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
export interface OracleProtoMsg {
    typeUrl: "/stride.icaoracle.Oracle";
    value: Uint8Array;
}
/** Oracle structure stores context about the CW oracle sitting a different chain */
export interface OracleAmino {
    chain_id?: string;
    connection_id?: string;
    channel_id?: string;
    port_id?: string;
    ica_address?: string;
    contract_address?: string;
    active?: boolean;
}
export interface OracleAminoMsg {
    type: "/stride.icaoracle.Oracle";
    value: OracleAmino;
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
    updateTime: bigint;
    blockHeight: bigint;
    attributes: string;
    destinationOracle: string;
    status: MetricStatus;
}
export interface MetricProtoMsg {
    typeUrl: "/stride.icaoracle.Metric";
    value: Uint8Array;
}
/**
 * Metric structure stores a generic metric using a key value structure
 * along with additional context
 */
export interface MetricAmino {
    key?: string;
    value?: string;
    metric_type?: string;
    update_time?: string;
    block_height?: string;
    attributes?: string;
    destination_oracle?: string;
    status?: MetricStatus;
}
export interface MetricAminoMsg {
    type: "/stride.icaoracle.Metric";
    value: MetricAmino;
}
/**
 * Metric structure stores a generic metric using a key value structure
 * along with additional context
 */
export interface MetricSDKType {
    key: string;
    value: string;
    metric_type: string;
    update_time: bigint;
    block_height: bigint;
    attributes: string;
    destination_oracle: string;
    status: MetricStatus;
}
/** Attributes associated with a RedemptionRate metric update */
export interface RedemptionRateAttributes {
    sttokenDenom: string;
}
export interface RedemptionRateAttributesProtoMsg {
    typeUrl: "/stride.icaoracle.RedemptionRateAttributes";
    value: Uint8Array;
}
/** Attributes associated with a RedemptionRate metric update */
export interface RedemptionRateAttributesAmino {
    sttoken_denom?: string;
}
export interface RedemptionRateAttributesAminoMsg {
    type: "/stride.icaoracle.RedemptionRateAttributes";
    value: RedemptionRateAttributesAmino;
}
/** Attributes associated with a RedemptionRate metric update */
export interface RedemptionRateAttributesSDKType {
    sttoken_denom: string;
}
export declare const Oracle: {
    typeUrl: string;
    encode(message: Oracle, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Oracle;
    fromPartial(object: Partial<Oracle>): Oracle;
    fromAmino(object: OracleAmino): Oracle;
    toAmino(message: Oracle): OracleAmino;
    fromAminoMsg(object: OracleAminoMsg): Oracle;
    fromProtoMsg(message: OracleProtoMsg): Oracle;
    toProto(message: Oracle): Uint8Array;
    toProtoMsg(message: Oracle): OracleProtoMsg;
};
export declare const Metric: {
    typeUrl: string;
    encode(message: Metric, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Metric;
    fromPartial(object: Partial<Metric>): Metric;
    fromAmino(object: MetricAmino): Metric;
    toAmino(message: Metric): MetricAmino;
    fromAminoMsg(object: MetricAminoMsg): Metric;
    fromProtoMsg(message: MetricProtoMsg): Metric;
    toProto(message: Metric): Uint8Array;
    toProtoMsg(message: Metric): MetricProtoMsg;
};
export declare const RedemptionRateAttributes: {
    typeUrl: string;
    encode(message: RedemptionRateAttributes, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): RedemptionRateAttributes;
    fromPartial(object: Partial<RedemptionRateAttributes>): RedemptionRateAttributes;
    fromAmino(object: RedemptionRateAttributesAmino): RedemptionRateAttributes;
    toAmino(message: RedemptionRateAttributes): RedemptionRateAttributesAmino;
    fromAminoMsg(object: RedemptionRateAttributesAminoMsg): RedemptionRateAttributes;
    fromProtoMsg(message: RedemptionRateAttributesProtoMsg): RedemptionRateAttributes;
    toProto(message: RedemptionRateAttributes): Uint8Array;
    toProtoMsg(message: RedemptionRateAttributes): RedemptionRateAttributesProtoMsg;
};
