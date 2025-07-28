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
var ack_exports = {};
__export(ack_exports, {
  IncentivizedAcknowledgement: () => IncentivizedAcknowledgement
});
module.exports = __toCommonJS(ack_exports);
var import_binary = require("../../../../binary");
var import_helpers = require("../../../../helpers");
function createBaseIncentivizedAcknowledgement() {
  return {
    appAcknowledgement: new Uint8Array(),
    forwardRelayerAddress: "",
    underlyingAppSuccess: false
  };
}
const IncentivizedAcknowledgement = {
  typeUrl: "/ibc.applications.fee.v1.IncentivizedAcknowledgement",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.appAcknowledgement.length !== 0) {
      writer.uint32(10).bytes(message.appAcknowledgement);
    }
    if (message.forwardRelayerAddress !== "") {
      writer.uint32(18).string(message.forwardRelayerAddress);
    }
    if (message.underlyingAppSuccess === true) {
      writer.uint32(24).bool(message.underlyingAppSuccess);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseIncentivizedAcknowledgement();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appAcknowledgement = reader.bytes();
          break;
        case 2:
          message.forwardRelayerAddress = reader.string();
          break;
        case 3:
          message.underlyingAppSuccess = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseIncentivizedAcknowledgement();
    message.appAcknowledgement = object.appAcknowledgement ?? new Uint8Array();
    message.forwardRelayerAddress = object.forwardRelayerAddress ?? "";
    message.underlyingAppSuccess = object.underlyingAppSuccess ?? false;
    return message;
  },
  fromAmino(object) {
    const message = createBaseIncentivizedAcknowledgement();
    if (object.app_acknowledgement !== void 0 && object.app_acknowledgement !== null) {
      message.appAcknowledgement = (0, import_helpers.bytesFromBase64)(object.app_acknowledgement);
    }
    if (object.forward_relayer_address !== void 0 && object.forward_relayer_address !== null) {
      message.forwardRelayerAddress = object.forward_relayer_address;
    }
    if (object.underlying_app_success !== void 0 && object.underlying_app_success !== null) {
      message.underlyingAppSuccess = object.underlying_app_success;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.app_acknowledgement = message.appAcknowledgement ? (0, import_helpers.base64FromBytes)(message.appAcknowledgement) : void 0;
    obj.forward_relayer_address = message.forwardRelayerAddress === "" ? void 0 : message.forwardRelayerAddress;
    obj.underlying_app_success = message.underlyingAppSuccess === false ? void 0 : message.underlyingAppSuccess;
    return obj;
  },
  fromAminoMsg(object) {
    return IncentivizedAcknowledgement.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/IncentivizedAcknowledgement",
      value: IncentivizedAcknowledgement.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return IncentivizedAcknowledgement.decode(message.value);
  },
  toProto(message) {
    return IncentivizedAcknowledgement.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.applications.fee.v1.IncentivizedAcknowledgement",
      value: IncentivizedAcknowledgement.encode(message).finish()
    };
  }
};
// Proper CommonJS exports for dynamic imports
module.exports = {
  IncentivizedAcknowledgement
};
