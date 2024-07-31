import { Oracle, OracleAmino, OracleSDKType, Metric, MetricAmino, MetricSDKType } from "./icaoracle";
import { BinaryReader, BinaryWriter } from "../../binary";
/** Params defines the icaoracle module parameters. */
export interface Params {
}
export interface ParamsProtoMsg {
    typeUrl: "/stride.icaoracle.Params";
    value: Uint8Array;
}
/** Params defines the icaoracle module parameters. */
export interface ParamsAmino {
}
export interface ParamsAminoMsg {
    type: "/stride.icaoracle.Params";
    value: ParamsAmino;
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
export interface GenesisStateProtoMsg {
    typeUrl: "/stride.icaoracle.GenesisState";
    value: Uint8Array;
}
/** GenesisState defines the icaoracle module's genesis state. */
export interface GenesisStateAmino {
    params?: ParamsAmino;
    oracles?: OracleAmino[];
    metrics?: MetricAmino[];
}
export interface GenesisStateAminoMsg {
    type: "/stride.icaoracle.GenesisState";
    value: GenesisStateAmino;
}
/** GenesisState defines the icaoracle module's genesis state. */
export interface GenesisStateSDKType {
    params: ParamsSDKType;
    oracles: OracleSDKType[];
    metrics: MetricSDKType[];
}
export declare const Params: {
    typeUrl: string;
    encode(_: Params, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Params;
    fromPartial(_: Partial<Params>): Params;
    fromAmino(_: ParamsAmino): Params;
    toAmino(_: Params): ParamsAmino;
    fromAminoMsg(object: ParamsAminoMsg): Params;
    fromProtoMsg(message: ParamsProtoMsg): Params;
    toProto(message: Params): Uint8Array;
    toProtoMsg(message: Params): ParamsProtoMsg;
};
export declare const GenesisState: {
    typeUrl: string;
    encode(message: GenesisState, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
    fromAmino(object: GenesisStateAmino): GenesisState;
    toAmino(message: GenesisState): GenesisStateAmino;
    fromAminoMsg(object: GenesisStateAminoMsg): GenesisState;
    fromProtoMsg(message: GenesisStateProtoMsg): GenesisState;
    toProto(message: GenesisState): Uint8Array;
    toProtoMsg(message: GenesisState): GenesisStateProtoMsg;
};
