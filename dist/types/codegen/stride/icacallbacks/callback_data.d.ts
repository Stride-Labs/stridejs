import { BinaryReader, BinaryWriter } from "../../binary";
export interface CallbackData {
    callbackKey: string;
    portId: string;
    channelId: string;
    sequence: bigint;
    callbackId: string;
    callbackArgs: Uint8Array;
}
export interface CallbackDataProtoMsg {
    typeUrl: "/stride.icacallbacks.CallbackData";
    value: Uint8Array;
}
/**
 * @name CallbackDataAmino
 * @package stride.icacallbacks
 * @see proto type: stride.icacallbacks.CallbackData
 */
export interface CallbackDataAmino {
    callback_key?: string;
    port_id?: string;
    channel_id?: string;
    sequence?: string;
    callback_id?: string;
    callback_args?: string;
}
export interface CallbackDataAminoMsg {
    type: "/stride.icacallbacks.CallbackData";
    value: CallbackDataAmino;
}
export interface CallbackDataSDKType {
    callback_key: string;
    port_id: string;
    channel_id: string;
    sequence: bigint;
    callback_id: string;
    callback_args: Uint8Array;
}
export declare const CallbackData: {
    typeUrl: string;
    encode(message: CallbackData, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): CallbackData;
    fromPartial(object: Partial<CallbackData>): CallbackData;
    fromAmino(object: CallbackDataAmino): CallbackData;
    toAmino(message: CallbackData): CallbackDataAmino;
    fromAminoMsg(object: CallbackDataAminoMsg): CallbackData;
    fromProtoMsg(message: CallbackDataProtoMsg): CallbackData;
    toProto(message: CallbackData): Uint8Array;
    toProtoMsg(message: CallbackData): CallbackDataProtoMsg;
};
