import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "../../helpers";
/** ---------------------- Transfer Callback ---------------------- // */
export interface TransferCallback {
    /** ---------------------- Transfer Callback ---------------------- // */
    depositRecordId: Long;
}
/** ---------------------- Transfer Callback ---------------------- // */
export interface TransferCallbackSDKType {
    /** ---------------------- Transfer Callback ---------------------- // */
    deposit_record_id: Long;
}
export declare const TransferCallback: {
    encode(message: TransferCallback, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TransferCallback;
    fromPartial(object: DeepPartial<TransferCallback>): TransferCallback;
};
