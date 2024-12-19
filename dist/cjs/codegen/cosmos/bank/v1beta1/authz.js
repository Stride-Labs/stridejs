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
var authz_exports = {};
__export(authz_exports, {
  SendAuthorization: () => SendAuthorization
});
module.exports = __toCommonJS(authz_exports);
var import_coin = require("../../base/v1beta1/coin");
var import_binary = require("../../../binary");
function createBaseSendAuthorization() {
  return {
    $typeUrl: "/cosmos.bank.v1beta1.SendAuthorization",
    spendLimit: []
  };
}
const SendAuthorization = {
  typeUrl: "/cosmos.bank.v1beta1.SendAuthorization",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    for (const v of message.spendLimit) {
      import_coin.Coin.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseSendAuthorization();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.spendLimit.push(import_coin.Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseSendAuthorization();
    message.spendLimit = object.spendLimit?.map((e) => import_coin.Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseSendAuthorization();
    message.spendLimit = object.spend_limit?.map((e) => import_coin.Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.spendLimit) {
      obj.spend_limit = message.spendLimit.map((e) => e ? import_coin.Coin.toAmino(e) : void 0);
    } else {
      obj.spend_limit = message.spendLimit;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return SendAuthorization.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/SendAuthorization",
      value: SendAuthorization.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return SendAuthorization.decode(message.value);
  },
  toProto(message) {
    return SendAuthorization.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.bank.v1beta1.SendAuthorization",
      value: SendAuthorization.encode(message).finish()
    };
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  SendAuthorization
});
