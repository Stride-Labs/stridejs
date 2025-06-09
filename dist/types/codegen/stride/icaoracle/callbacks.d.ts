import { Metric, MetricAmino, MetricSDKType } from "./icaoracle";
import { BinaryReader, BinaryWriter } from "../../binary";
/** Callback data for instantiating an oracle */
export interface InstantiateOracleCallback {
    oracleChainId: string;
}
export interface InstantiateOracleCallbackProtoMsg {
    typeUrl: "/stride.icaoracle.InstantiateOracleCallback";
    value: Uint8Array;
}
/**
 * Callback data for instantiating an oracle
 * @name InstantiateOracleCallbackAmino
 * @package stride.icaoracle
 * @see proto type: stride.icaoracle.InstantiateOracleCallback
 */
export interface InstantiateOracleCallbackAmino {
    oracle_chain_id?: string;
}
export interface InstantiateOracleCallbackAminoMsg {
    type: "/stride.icaoracle.InstantiateOracleCallback";
    value: InstantiateOracleCallbackAmino;
}
/** Callback data for instantiating an oracle */
export interface InstantiateOracleCallbackSDKType {
    oracle_chain_id: string;
}
/** Callback data for updating a value in the oracle */
export interface UpdateOracleCallback {
    oracleChainId: string;
    metric?: Metric;
}
export interface UpdateOracleCallbackProtoMsg {
    typeUrl: "/stride.icaoracle.UpdateOracleCallback";
    value: Uint8Array;
}
/**
 * Callback data for updating a value in the oracle
 * @name UpdateOracleCallbackAmino
 * @package stride.icaoracle
 * @see proto type: stride.icaoracle.UpdateOracleCallback
 */
export interface UpdateOracleCallbackAmino {
    oracle_chain_id?: string;
    metric?: MetricAmino;
}
export interface UpdateOracleCallbackAminoMsg {
    type: "/stride.icaoracle.UpdateOracleCallback";
    value: UpdateOracleCallbackAmino;
}
/** Callback data for updating a value in the oracle */
export interface UpdateOracleCallbackSDKType {
    oracle_chain_id: string;
    metric?: MetricSDKType;
}
export declare const InstantiateOracleCallback: {
    typeUrl: string;
    encode(message: InstantiateOracleCallback, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): InstantiateOracleCallback;
    fromPartial(object: Partial<InstantiateOracleCallback>): InstantiateOracleCallback;
    fromAmino(object: InstantiateOracleCallbackAmino): InstantiateOracleCallback;
    toAmino(message: InstantiateOracleCallback): InstantiateOracleCallbackAmino;
    fromAminoMsg(object: InstantiateOracleCallbackAminoMsg): InstantiateOracleCallback;
    fromProtoMsg(message: InstantiateOracleCallbackProtoMsg): InstantiateOracleCallback;
    toProto(message: InstantiateOracleCallback): Uint8Array;
    toProtoMsg(message: InstantiateOracleCallback): InstantiateOracleCallbackProtoMsg;
};
export declare const UpdateOracleCallback: {
    typeUrl: string;
    encode(message: UpdateOracleCallback, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): UpdateOracleCallback;
    fromPartial(object: Partial<UpdateOracleCallback>): UpdateOracleCallback;
    fromAmino(object: UpdateOracleCallbackAmino): UpdateOracleCallback;
    toAmino(message: UpdateOracleCallback): UpdateOracleCallbackAmino;
    fromAminoMsg(object: UpdateOracleCallbackAminoMsg): UpdateOracleCallback;
    fromProtoMsg(message: UpdateOracleCallbackProtoMsg): UpdateOracleCallback;
    toProto(message: UpdateOracleCallback): Uint8Array;
    toProtoMsg(message: UpdateOracleCallback): UpdateOracleCallbackProtoMsg;
};
