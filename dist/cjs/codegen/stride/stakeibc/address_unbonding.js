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
var address_unbonding_exports = {};
__export(address_unbonding_exports, {
  AddressUnbonding: () => AddressUnbonding
});
module.exports = __toCommonJS(address_unbonding_exports);
var import_binary = require("../../binary");
function createBaseAddressUnbonding() {
  return {
    address: "",
    receiver: "",
    unbondingEstimatedTime: "",
    amount: "",
    denom: "",
    claimIsPending: false,
    epochNumber: BigInt(0)
  };
}
const AddressUnbonding = {
  typeUrl: "/stride.stakeibc.AddressUnbonding",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.receiver !== "") {
      writer.uint32(18).string(message.receiver);
    }
    if (message.unbondingEstimatedTime !== "") {
      writer.uint32(26).string(message.unbondingEstimatedTime);
    }
    if (message.amount !== "") {
      writer.uint32(34).string(message.amount);
    }
    if (message.denom !== "") {
      writer.uint32(42).string(message.denom);
    }
    if (message.claimIsPending === true) {
      writer.uint32(64).bool(message.claimIsPending);
    }
    if (message.epochNumber !== BigInt(0)) {
      writer.uint32(72).uint64(message.epochNumber);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseAddressUnbonding();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.receiver = reader.string();
          break;
        case 3:
          message.unbondingEstimatedTime = reader.string();
          break;
        case 4:
          message.amount = reader.string();
          break;
        case 5:
          message.denom = reader.string();
          break;
        case 8:
          message.claimIsPending = reader.bool();
          break;
        case 9:
          message.epochNumber = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseAddressUnbonding();
    message.address = object.address ?? "";
    message.receiver = object.receiver ?? "";
    message.unbondingEstimatedTime = object.unbondingEstimatedTime ?? "";
    message.amount = object.amount ?? "";
    message.denom = object.denom ?? "";
    message.claimIsPending = object.claimIsPending ?? false;
    message.epochNumber = object.epochNumber !== void 0 && object.epochNumber !== null ? BigInt(object.epochNumber.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object) {
    const message = createBaseAddressUnbonding();
    if (object.address !== void 0 && object.address !== null) {
      message.address = object.address;
    }
    if (object.receiver !== void 0 && object.receiver !== null) {
      message.receiver = object.receiver;
    }
    if (object.unbonding_estimated_time !== void 0 && object.unbonding_estimated_time !== null) {
      message.unbondingEstimatedTime = object.unbonding_estimated_time;
    }
    if (object.amount !== void 0 && object.amount !== null) {
      message.amount = object.amount;
    }
    if (object.denom !== void 0 && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.claim_is_pending !== void 0 && object.claim_is_pending !== null) {
      message.claimIsPending = object.claim_is_pending;
    }
    if (object.epoch_number !== void 0 && object.epoch_number !== null) {
      message.epochNumber = BigInt(object.epoch_number);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.address = message.address === "" ? void 0 : message.address;
    obj.receiver = message.receiver === "" ? void 0 : message.receiver;
    obj.unbonding_estimated_time = message.unbondingEstimatedTime === "" ? void 0 : message.unbondingEstimatedTime;
    obj.amount = message.amount === "" ? void 0 : message.amount;
    obj.denom = message.denom === "" ? void 0 : message.denom;
    obj.claim_is_pending = message.claimIsPending === false ? void 0 : message.claimIsPending;
    obj.epoch_number = message.epochNumber !== BigInt(0) ? message.epochNumber?.toString() : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return AddressUnbonding.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return AddressUnbonding.decode(message.value);
  },
  toProto(message) {
    return AddressUnbonding.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.stakeibc.AddressUnbonding",
      value: AddressUnbonding.encode(message).finish()
    };
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AddressUnbonding
});
