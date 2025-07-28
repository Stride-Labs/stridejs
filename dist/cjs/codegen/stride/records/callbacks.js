"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var callbacks_exports = {};
__export(callbacks_exports, {
  TransferCallback: () => TransferCallback,
  TransferLSMTokenCallback: () => TransferLSMTokenCallback
});
module.exports = __toCommonJS(callbacks_exports);
var import_records = require("./records");
var import_binary = require("../../binary");
function createBaseTransferCallback() {
  return {
    depositRecordId: BigInt(0)
  };
}
const TransferCallback = {
  typeUrl: "/stride.records.TransferCallback",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.depositRecordId !== BigInt(0)) {
      writer.uint32(8).uint64(message.depositRecordId);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseTransferCallback();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.depositRecordId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseTransferCallback();
    message.depositRecordId = object.depositRecordId !== void 0 && object.depositRecordId !== null ? BigInt(object.depositRecordId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object) {
    const message = createBaseTransferCallback();
    if (object.deposit_record_id !== void 0 && object.deposit_record_id !== null) {
      message.depositRecordId = BigInt(object.deposit_record_id);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.deposit_record_id = message.depositRecordId !== BigInt(0) ? message.depositRecordId?.toString() : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return TransferCallback.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return TransferCallback.decode(message.value);
  },
  toProto(message) {
    return TransferCallback.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.records.TransferCallback",
      value: TransferCallback.encode(message).finish()
    };
  }
};
function createBaseTransferLSMTokenCallback() {
  return {
    deposit: void 0
  };
}
const TransferLSMTokenCallback = {
  typeUrl: "/stride.records.TransferLSMTokenCallback",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.deposit !== void 0) {
      import_records.LSMTokenDeposit.encode(message.deposit, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseTransferLSMTokenCallback();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.deposit = import_records.LSMTokenDeposit.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseTransferLSMTokenCallback();
    message.deposit = object.deposit !== void 0 && object.deposit !== null ? import_records.LSMTokenDeposit.fromPartial(object.deposit) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseTransferLSMTokenCallback();
    if (object.deposit !== void 0 && object.deposit !== null) {
      message.deposit = import_records.LSMTokenDeposit.fromAmino(object.deposit);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.deposit = message.deposit ? import_records.LSMTokenDeposit.toAmino(message.deposit) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return TransferLSMTokenCallback.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return TransferLSMTokenCallback.decode(message.value);
  },
  toProto(message) {
    return TransferLSMTokenCallback.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.records.TransferLSMTokenCallback",
      value: TransferLSMTokenCallback.encode(message).finish()
    };
  }
};
// Proper CommonJS exports for dynamic imports
module.exports = {
  TransferCallback,
  TransferLSMTokenCallback
};
