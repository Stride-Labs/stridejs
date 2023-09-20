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

function createBaseTransferLSMTokenCallback(): TransferLSMTokenCallback {
  return {
    deposit: undefined
  };
}

export const TransferLSMTokenCallback = {
  encode(message: TransferLSMTokenCallback, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.deposit !== undefined) {
      LSMTokenDeposit.encode(message.deposit, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TransferLSMTokenCallback {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTransferLSMTokenCallback();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.deposit = LSMTokenDeposit.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<TransferLSMTokenCallback>): TransferLSMTokenCallback {
    const message = createBaseTransferLSMTokenCallback();
    message.deposit = object.deposit !== undefined && object.deposit !== null ? LSMTokenDeposit.fromPartial(object.deposit) : undefined;
    return message;
  }

};