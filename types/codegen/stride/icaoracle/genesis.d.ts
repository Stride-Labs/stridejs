import { Oracle, OracleSDKType, Metric, MetricSDKType } from "./icaoracle";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
/** Params defines the icaoracle module parameters. */
export interface Params {
}
/** Params defines the icaoracle module parameters. */
export interface ParamsSDKType {
}
/** GenesisState defines the icaoracle module's genesis state. */
export interface GenesisState {
    params: Params;
    oracles: Oracle[];
    metrics: Metric[];
}
/** GenesisState defines the icaoracle module's genesis state. */
export interface GenesisStateSDKType {
    params: ParamsSDKType;
    oracles: OracleSDKType[];
    metrics: MetricSDKType[];
}
export declare const Params: {
    encode(_: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromPartial(_: DeepPartial<Params>): Params;
};
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
