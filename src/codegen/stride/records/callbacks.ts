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

function createBaseTransferCallback(): TransferCallback {
  return {
    depositRecordId: Long.UZERO
  };
}

export const TransferCallback = {
  encode(message: TransferCallback, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.depositRecordId.isZero()) {
      writer.uint32(8).uint64(message.depositRecordId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TransferCallback {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTransferCallback();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.depositRecordId = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<TransferCallback>): TransferCallback {
    const message = createBaseTransferCallback();
    message.depositRecordId = object.depositRecordId !== undefined && object.depositRecordId !== null ? Long.fromValue(object.depositRecordId) : Long.UZERO;
    return message;
  }

};