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
var gov_exports = {};
__export(gov_exports, {
  AddValidatorsProposal: () => AddValidatorsProposal,
  ToggleLSMProposal: () => ToggleLSMProposal
});
module.exports = __toCommonJS(gov_exports);
var import_validator = require("./validator");
var import_binary = require("../../binary");
function createBaseAddValidatorsProposal() {
  return {
    title: "",
    description: "",
    hostZone: "",
    validators: [],
    deposit: ""
  };
}
const AddValidatorsProposal = {
  typeUrl: "/stride.stakeibc.AddValidatorsProposal",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.hostZone !== "") {
      writer.uint32(26).string(message.hostZone);
    }
    for (const v of message.validators) {
      import_validator.Validator.encode(v, writer.uint32(34).fork()).ldelim();
    }
    if (message.deposit !== "") {
      writer.uint32(42).string(message.deposit);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseAddValidatorsProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.hostZone = reader.string();
          break;
        case 4:
          message.validators.push(import_validator.Validator.decode(reader, reader.uint32()));
          break;
        case 5:
          message.deposit = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseAddValidatorsProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.hostZone = object.hostZone ?? "";
    message.validators = object.validators?.map((e) => import_validator.Validator.fromPartial(e)) || [];
    message.deposit = object.deposit ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseAddValidatorsProposal();
    if (object.title !== void 0 && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== void 0 && object.description !== null) {
      message.description = object.description;
    }
    if (object.host_zone !== void 0 && object.host_zone !== null) {
      message.hostZone = object.host_zone;
    }
    message.validators = object.validators?.map((e) => import_validator.Validator.fromAmino(e)) || [];
    if (object.deposit !== void 0 && object.deposit !== null) {
      message.deposit = object.deposit;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.title = message.title === "" ? void 0 : message.title;
    obj.description = message.description === "" ? void 0 : message.description;
    obj.host_zone = message.hostZone === "" ? void 0 : message.hostZone;
    if (message.validators) {
      obj.validators = message.validators.map((e) => e ? import_validator.Validator.toAmino(e) : void 0);
    } else {
      obj.validators = message.validators;
    }
    obj.deposit = message.deposit === "" ? void 0 : message.deposit;
    return obj;
  },
  fromAminoMsg(object) {
    return AddValidatorsProposal.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "stakeibc/AddValidatorsProposal",
      value: AddValidatorsProposal.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return AddValidatorsProposal.decode(message.value);
  },
  toProto(message) {
    return AddValidatorsProposal.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.stakeibc.AddValidatorsProposal",
      value: AddValidatorsProposal.encode(message).finish()
    };
  }
};
function createBaseToggleLSMProposal() {
  return {
    title: "",
    description: "",
    hostZone: "",
    enabled: false,
    deposit: ""
  };
}
const ToggleLSMProposal = {
  typeUrl: "/stride.stakeibc.ToggleLSMProposal",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.hostZone !== "") {
      writer.uint32(26).string(message.hostZone);
    }
    if (message.enabled === true) {
      writer.uint32(32).bool(message.enabled);
    }
    if (message.deposit !== "") {
      writer.uint32(42).string(message.deposit);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseToggleLSMProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.hostZone = reader.string();
          break;
        case 4:
          message.enabled = reader.bool();
          break;
        case 5:
          message.deposit = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseToggleLSMProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.hostZone = object.hostZone ?? "";
    message.enabled = object.enabled ?? false;
    message.deposit = object.deposit ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseToggleLSMProposal();
    if (object.title !== void 0 && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== void 0 && object.description !== null) {
      message.description = object.description;
    }
    if (object.host_zone !== void 0 && object.host_zone !== null) {
      message.hostZone = object.host_zone;
    }
    if (object.enabled !== void 0 && object.enabled !== null) {
      message.enabled = object.enabled;
    }
    if (object.deposit !== void 0 && object.deposit !== null) {
      message.deposit = object.deposit;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.title = message.title === "" ? void 0 : message.title;
    obj.description = message.description === "" ? void 0 : message.description;
    obj.host_zone = message.hostZone === "" ? void 0 : message.hostZone;
    obj.enabled = message.enabled === false ? void 0 : message.enabled;
    obj.deposit = message.deposit === "" ? void 0 : message.deposit;
    return obj;
  },
  fromAminoMsg(object) {
    return ToggleLSMProposal.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "stakeibc/ToggleLSMProposal",
      value: ToggleLSMProposal.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return ToggleLSMProposal.decode(message.value);
  },
  toProto(message) {
    return ToggleLSMProposal.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.stakeibc.ToggleLSMProposal",
      value: ToggleLSMProposal.encode(message).finish()
    };
  }
};
// Removed broken CommonJS export annotation
