import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
/** InstanitateOracleContract is the contract-specific instantiate message */
export interface MsgInstantiateOracleContract {
    adminAddress: string;
    transferChannelId: string;
}
/** InstanitateOracleContract is the contract-specific instantiate message */
export interface MsgInstantiateOracleContractSDKType {
    admin_address: string;
    transfer_channel_id: string;
}
/** ExecuteContractPostMetric is the contract-specific metric update message */
export interface MsgExecuteContractPostMetric {
    /** ExecuteContractPostMetric is the contract-specific metric update message */
    postMetric: MsgPostMetric;
}
/** ExecuteContractPostMetric is the contract-specific metric update message */
export interface MsgExecuteContractPostMetricSDKType {
    /** ExecuteContractPostMetric is the contract-specific metric update message */
    post_metric: MsgPostMetricSDKType;
}
/** Body of PostMetric contract message */
export interface MsgPostMetric {
    key: string;
    value: string;
    metricType: string;
    updateTime: Long;
    blockHeight: Long;
    attributes: string;
}
/** Body of PostMetric contract message */
export interface MsgPostMetricSDKType {
    key: string;
    value: string;
    metric_type: string;
    update_time: Long;
    block_height: Long;
    attributes: string;
}
export declare const MsgInstantiateOracleContract: {
    encode(message: MsgInstantiateOracleContract, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgInstantiateOracleContract;
    fromPartial(object: DeepPartial<MsgInstantiateOracleContract>): MsgInstantiateOracleContract;
};
export declare const MsgExecuteContractPostMetric: {
    encode(message: MsgExecuteContractPostMetric, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgExecuteContractPostMetric;
    fromPartial(object: DeepPartial<MsgExecuteContractPostMetric>): MsgExecuteContractPostMetric;
};
export declare const MsgPostMetric: {
    encode(message: MsgPostMetric, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgPostMetric;
    fromPartial(object: DeepPartial<MsgPostMetric>): MsgPostMetric;
};
