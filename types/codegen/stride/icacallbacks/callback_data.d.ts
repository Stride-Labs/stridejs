import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "../../helpers";
export interface CallbackData {
    callbackKey: string;
    portId: string;
    channelId: string;
    sequence: Long;
    callbackId: string;
    callbackArgs: Uint8Array;
}
export interface CallbackDataSDKType {
    callback_key: string;
    port_id: string;
    channel_id: string;
    sequence: Long;
    callback_id: string;
    callback_args: Uint8Array;
}
export declare const CallbackData: {
    encode(message: CallbackData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CallbackData;
    fromPartial(object: DeepPartial<CallbackData>): CallbackData;
};
