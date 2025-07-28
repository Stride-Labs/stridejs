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
var claim_exports = {};
__export(claim_exports, {
  Action: () => Action,
  ActionAmino: () => ActionAmino,
  ActionSDKType: () => ActionSDKType,
  ClaimRecord: () => ClaimRecord,
  actionFromJSON: () => actionFromJSON,
  actionToJSON: () => actionToJSON
});
module.exports = __toCommonJS(claim_exports);
var import_binary = require("../../binary");
var import_decimals = require("../../decimals");
var Action = /* @__PURE__ */ ((Action2) => {
  Action2[Action2["ACTION_FREE"] = 0] = "ACTION_FREE";
  Action2[Action2["ACTION_LIQUID_STAKE"] = 1] = "ACTION_LIQUID_STAKE";
  Action2[Action2["ACTION_DELEGATE_STAKE"] = 2] = "ACTION_DELEGATE_STAKE";
  Action2[Action2["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return Action2;
})(Action || {});
const ActionSDKType = Action;
const ActionAmino = Action;
function actionFromJSON(object) {
  switch (object) {
    case 0:
    case "ACTION_FREE":
      return 0 /* ACTION_FREE */;
    case 1:
    case "ACTION_LIQUID_STAKE":
      return 1 /* ACTION_LIQUID_STAKE */;
    case 2:
    case "ACTION_DELEGATE_STAKE":
      return 2 /* ACTION_DELEGATE_STAKE */;
    case -1:
    case "UNRECOGNIZED":
    default:
      return -1 /* UNRECOGNIZED */;
  }
}
function actionToJSON(object) {
  switch (object) {
    case 0 /* ACTION_FREE */:
      return "ACTION_FREE";
    case 1 /* ACTION_LIQUID_STAKE */:
      return "ACTION_LIQUID_STAKE";
    case 2 /* ACTION_DELEGATE_STAKE */:
      return "ACTION_DELEGATE_STAKE";
    case -1 /* UNRECOGNIZED */:
    default:
      return "UNRECOGNIZED";
  }
}
function createBaseClaimRecord() {
  return {
    airdropIdentifier: "",
    address: "",
    weight: "",
    actionCompleted: []
  };
}
const ClaimRecord = {
  typeUrl: "/stride.claim.ClaimRecord",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.airdropIdentifier !== "") {
      writer.uint32(10).string(message.airdropIdentifier);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.weight !== "") {
      writer.uint32(26).string(import_decimals.Decimal.fromUserInput(message.weight, 18).atomics);
    }
    writer.uint32(34).fork();
    for (const v of message.actionCompleted) {
      writer.bool(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseClaimRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.airdropIdentifier = reader.string();
          break;
        case 2:
          message.address = reader.string();
          break;
        case 3:
          message.weight = import_decimals.Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 4:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.actionCompleted.push(reader.bool());
            }
          } else {
            message.actionCompleted.push(reader.bool());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseClaimRecord();
    message.airdropIdentifier = object.airdropIdentifier ?? "";
    message.address = object.address ?? "";
    message.weight = object.weight ?? "";
    message.actionCompleted = object.actionCompleted?.map((e) => e) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseClaimRecord();
    if (object.airdrop_identifier !== void 0 && object.airdrop_identifier !== null) {
      message.airdropIdentifier = object.airdrop_identifier;
    }
    if (object.address !== void 0 && object.address !== null) {
      message.address = object.address;
    }
    if (object.weight !== void 0 && object.weight !== null) {
      message.weight = object.weight;
    }
    message.actionCompleted = object.action_completed?.map((e) => e) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.airdrop_identifier = message.airdropIdentifier === "" ? void 0 : message.airdropIdentifier;
    obj.address = message.address === "" ? void 0 : message.address;
    obj.weight = message.weight === "" ? void 0 : message.weight;
    if (message.actionCompleted) {
      obj.action_completed = message.actionCompleted.map((e) => e);
    } else {
      obj.action_completed = message.actionCompleted;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return ClaimRecord.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return ClaimRecord.decode(message.value);
  },
  toProto(message) {
    return ClaimRecord.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.claim.ClaimRecord",
      value: ClaimRecord.encode(message).finish()
    };
  }
};
// Removed broken CommonJS export annotation
