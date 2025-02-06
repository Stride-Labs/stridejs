import { Validator } from "./validator";
import { BinaryReader, BinaryWriter } from "../../binary";
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
  encode(message, writer = BinaryWriter.create()) {
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
      Validator.encode(v, writer.uint32(34).fork()).ldelim();
    }
    if (message.deposit !== "") {
      writer.uint32(42).string(message.deposit);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
          message.validators.push(Validator.decode(reader, reader.uint32()));
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
    message.validators = object.validators?.map((e) => Validator.fromPartial(e)) || [];
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
    message.validators = object.validators?.map((e) => Validator.fromAmino(e)) || [];
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
      obj.validators = message.validators.map((e) => e ? Validator.toAmino(e) : void 0);
    } else {
      obj.validators = message.validators;
    }
    obj.deposit = message.deposit === "" ? void 0 : message.deposit;
    return obj;
  },
  fromAminoMsg(object) {
    return AddValidatorsProposal.fromAmino(object.value);
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
  encode(message, writer = BinaryWriter.create()) {
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
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
export {
  AddValidatorsProposal,
  ToggleLSMProposal
};
