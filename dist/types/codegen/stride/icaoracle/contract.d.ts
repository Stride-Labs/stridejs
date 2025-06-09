import { BinaryReader, BinaryWriter } from "../../binary";
/** InstanitateOracleContract is the contract-specific instantiate message */
export interface MsgInstantiateOracleContract {
    adminAddress: string;
    transferChannelId: string;
}
export interface MsgInstantiateOracleContractProtoMsg {
    typeUrl: "/stride.icaoracle.MsgInstantiateOracleContract";
    value: Uint8Array;
}
/**
 * InstanitateOracleContract is the contract-specific instantiate message
 * @name MsgInstantiateOracleContractAmino
 * @package stride.icaoracle
 * @see proto type: stride.icaoracle.MsgInstantiateOracleContract
 */
export interface MsgInstantiateOracleContractAmino {
    admin_address?: string;
    transfer_channel_id?: string;
}
export interface MsgInstantiateOracleContractAminoMsg {
    type: "/stride.icaoracle.MsgInstantiateOracleContract";
    value: MsgInstantiateOracleContractAmino;
}
/** InstanitateOracleContract is the contract-specific instantiate message */
export interface MsgInstantiateOracleContractSDKType {
    admin_address: string;
    transfer_channel_id: string;
}
/** ExecuteContractPostMetric is the contract-specific metric update message */
export interface MsgExecuteContractPostMetric {
    postMetric?: MsgPostMetric;
}
export interface MsgExecuteContractPostMetricProtoMsg {
    typeUrl: "/stride.icaoracle.MsgExecuteContractPostMetric";
    value: Uint8Array;
}
/**
 * ExecuteContractPostMetric is the contract-specific metric update message
 * @name MsgExecuteContractPostMetricAmino
 * @package stride.icaoracle
 * @see proto type: stride.icaoracle.MsgExecuteContractPostMetric
 */
export interface MsgExecuteContractPostMetricAmino {
    post_metric?: MsgPostMetricAmino;
}
export interface MsgExecuteContractPostMetricAminoMsg {
    type: "/stride.icaoracle.MsgExecuteContractPostMetric";
    value: MsgExecuteContractPostMetricAmino;
}
/** ExecuteContractPostMetric is the contract-specific metric update message */
export interface MsgExecuteContractPostMetricSDKType {
    post_metric?: MsgPostMetricSDKType;
}
/** Body of PostMetric contract message */
export interface MsgPostMetric {
    key: string;
    value: string;
    metricType: string;
    updateTime: bigint;
    blockHeight: bigint;
    attributes: string;
}
export interface MsgPostMetricProtoMsg {
    typeUrl: "/stride.icaoracle.MsgPostMetric";
    value: Uint8Array;
}
/**
 * Body of PostMetric contract message
 * @name MsgPostMetricAmino
 * @package stride.icaoracle
 * @see proto type: stride.icaoracle.MsgPostMetric
 */
export interface MsgPostMetricAmino {
    key?: string;
    value?: string;
    metric_type?: string;
    update_time?: string;
    block_height?: string;
    attributes?: string;
}
export interface MsgPostMetricAminoMsg {
    type: "/stride.icaoracle.MsgPostMetric";
    value: MsgPostMetricAmino;
}
/** Body of PostMetric contract message */
export interface MsgPostMetricSDKType {
    key: string;
    value: string;
    metric_type: string;
    update_time: bigint;
    block_height: bigint;
    attributes: string;
}
export declare const MsgInstantiateOracleContract: {
    typeUrl: string;
    encode(message: MsgInstantiateOracleContract, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgInstantiateOracleContract;
    fromPartial(object: Partial<MsgInstantiateOracleContract>): MsgInstantiateOracleContract;
    fromAmino(object: MsgInstantiateOracleContractAmino): MsgInstantiateOracleContract;
    toAmino(message: MsgInstantiateOracleContract): MsgInstantiateOracleContractAmino;
    fromAminoMsg(object: MsgInstantiateOracleContractAminoMsg): MsgInstantiateOracleContract;
    fromProtoMsg(message: MsgInstantiateOracleContractProtoMsg): MsgInstantiateOracleContract;
    toProto(message: MsgInstantiateOracleContract): Uint8Array;
    toProtoMsg(message: MsgInstantiateOracleContract): MsgInstantiateOracleContractProtoMsg;
};
export declare const MsgExecuteContractPostMetric: {
    typeUrl: string;
    encode(message: MsgExecuteContractPostMetric, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgExecuteContractPostMetric;
    fromPartial(object: Partial<MsgExecuteContractPostMetric>): MsgExecuteContractPostMetric;
    fromAmino(object: MsgExecuteContractPostMetricAmino): MsgExecuteContractPostMetric;
    toAmino(message: MsgExecuteContractPostMetric): MsgExecuteContractPostMetricAmino;
    fromAminoMsg(object: MsgExecuteContractPostMetricAminoMsg): MsgExecuteContractPostMetric;
    fromProtoMsg(message: MsgExecuteContractPostMetricProtoMsg): MsgExecuteContractPostMetric;
    toProto(message: MsgExecuteContractPostMetric): Uint8Array;
    toProtoMsg(message: MsgExecuteContractPostMetric): MsgExecuteContractPostMetricProtoMsg;
};
export declare const MsgPostMetric: {
    typeUrl: string;
    encode(message: MsgPostMetric, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgPostMetric;
    fromPartial(object: Partial<MsgPostMetric>): MsgPostMetric;
    fromAmino(object: MsgPostMetricAmino): MsgPostMetric;
    toAmino(message: MsgPostMetric): MsgPostMetricAmino;
    fromAminoMsg(object: MsgPostMetricAminoMsg): MsgPostMetric;
    fromProtoMsg(message: MsgPostMetricProtoMsg): MsgPostMetric;
    toProto(message: MsgPostMetric): Uint8Array;
    toProtoMsg(message: MsgPostMetric): MsgPostMetricProtoMsg;
};
