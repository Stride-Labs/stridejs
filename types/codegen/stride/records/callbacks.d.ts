import { LSMTokenDeposit, LSMTokenDepositSDKType } from "./records";
import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
export interface TransferCallback {
    depositRecordId: Long;
}
export interface TransferCallbackSDKType {
    deposit_record_id: Long;
}
export interface TransferLSMTokenCallback {
    deposit: LSMTokenDeposit;
}
export interface TransferLSMTokenCallbackSDKType {
    deposit: LSMTokenDepositSDKType;
}
export declare const TransferCallback: {
    encode(message: TransferCallback, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TransferCallback;
    fromPartial(object: DeepPartial<TransferCallback>): TransferCallback;
};
export declare const TransferLSMTokenCallback: {
    encode(message: TransferLSMTokenCallback, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TransferLSMTokenCallback;
    fromPartial(object: DeepPartial<TransferLSMTokenCallback>): TransferLSMTokenCallback;
};
