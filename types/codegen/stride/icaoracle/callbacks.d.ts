import { Metric, MetricSDKType } from "./icaoracle";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
/** Callback data for instantiating an oracle */
export interface InstantiateOracleCallback {
    /** Callback data for instantiating an oracle */
    oracleChainId: string;
}
/** Callback data for instantiating an oracle */
export interface InstantiateOracleCallbackSDKType {
    /** Callback data for instantiating an oracle */
    oracle_chain_id: string;
}
/** Callback data for updating a value in the oracle */
export interface UpdateOracleCallback {
    oracleChainId: string;
    metric: Metric;
}
/** Callback data for updating a value in the oracle */
export interface UpdateOracleCallbackSDKType {
    oracle_chain_id: string;
    metric: MetricSDKType;
}
export declare const InstantiateOracleCallback: {
    encode(message: InstantiateOracleCallback, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): InstantiateOracleCallback;
    fromPartial(object: DeepPartial<InstantiateOracleCallback>): InstantiateOracleCallback;
};
export declare const UpdateOracleCallback: {
    encode(message: UpdateOracleCallback, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateOracleCallback;
    fromPartial(object: DeepPartial<UpdateOracleCallback>): UpdateOracleCallback;
};
