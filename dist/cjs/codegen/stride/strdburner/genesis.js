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
var genesis_exports = {};
__export(genesis_exports, {
  AddressBurnedAmount: () => AddressBurnedAmount,
  GenesisState: () => GenesisState,
  LinkedAddresses: () => LinkedAddresses
});
module.exports = __toCommonJS(genesis_exports);
var import_binary = require("../../binary");
function createBaseAddressBurnedAmount() {
  return {
    address: "",
    amount: ""
  };
}
const AddressBurnedAmount = {
  typeUrl: "/stride.strdburner.AddressBurnedAmount",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseAddressBurnedAmount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseAddressBurnedAmount();
    message.address = object.address ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseAddressBurnedAmount();
    if (object.address !== void 0 && object.address !== null) {
      message.address = object.address;
    }
    if (object.amount !== void 0 && object.amount !== null) {
      message.amount = object.amount;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.address = message.address === "" ? void 0 : message.address;
    obj.amount = message.amount === "" ? void 0 : message.amount;
    return obj;
  },
  fromAminoMsg(object) {
    return AddressBurnedAmount.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return AddressBurnedAmount.decode(message.value);
  },
  toProto(message) {
    return AddressBurnedAmount.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.strdburner.AddressBurnedAmount",
      value: AddressBurnedAmount.encode(message).finish()
    };
  }
};
function createBaseLinkedAddresses() {
  return {
    strideAddress: "",
    linkedAddress: ""
  };
}
const LinkedAddresses = {
  typeUrl: "/stride.strdburner.LinkedAddresses",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.strideAddress !== "") {
      writer.uint32(10).string(message.strideAddress);
    }
    if (message.linkedAddress !== "") {
      writer.uint32(18).string(message.linkedAddress);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseLinkedAddresses();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.strideAddress = reader.string();
          break;
        case 2:
          message.linkedAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseLinkedAddresses();
    message.strideAddress = object.strideAddress ?? "";
    message.linkedAddress = object.linkedAddress ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseLinkedAddresses();
    if (object.stride_address !== void 0 && object.stride_address !== null) {
      message.strideAddress = object.stride_address;
    }
    if (object.linked_address !== void 0 && object.linked_address !== null) {
      message.linkedAddress = object.linked_address;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.stride_address = message.strideAddress === "" ? void 0 : message.strideAddress;
    obj.linked_address = message.linkedAddress === "" ? void 0 : message.linkedAddress;
    return obj;
  },
  fromAminoMsg(object) {
    return LinkedAddresses.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return LinkedAddresses.decode(message.value);
  },
  toProto(message) {
    return LinkedAddresses.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.strdburner.LinkedAddresses",
      value: LinkedAddresses.encode(message).finish()
    };
  }
};
function createBaseGenesisState() {
  return {
    totalUstrdBurned: "",
    protocolUstrdBurned: "",
    totalUserUstrdBurned: "",
    burnedByAccount: [],
    linkedAddresses: []
  };
}
const GenesisState = {
  typeUrl: "/stride.strdburner.GenesisState",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.totalUstrdBurned !== "") {
      writer.uint32(74).string(message.totalUstrdBurned);
    }
    if (message.protocolUstrdBurned !== "") {
      writer.uint32(10).string(message.protocolUstrdBurned);
    }
    if (message.totalUserUstrdBurned !== "") {
      writer.uint32(18).string(message.totalUserUstrdBurned);
    }
    for (const v of message.burnedByAccount) {
      AddressBurnedAmount.encode(v, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.linkedAddresses) {
      LinkedAddresses.encode(v, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 9:
          message.totalUstrdBurned = reader.string();
          break;
        case 1:
          message.protocolUstrdBurned = reader.string();
          break;
        case 2:
          message.totalUserUstrdBurned = reader.string();
          break;
        case 3:
          message.burnedByAccount.push(AddressBurnedAmount.decode(reader, reader.uint32()));
          break;
        case 4:
          message.linkedAddresses.push(LinkedAddresses.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseGenesisState();
    message.totalUstrdBurned = object.totalUstrdBurned ?? "";
    message.protocolUstrdBurned = object.protocolUstrdBurned ?? "";
    message.totalUserUstrdBurned = object.totalUserUstrdBurned ?? "";
    message.burnedByAccount = object.burnedByAccount?.map((e) => AddressBurnedAmount.fromPartial(e)) || [];
    message.linkedAddresses = object.linkedAddresses?.map((e) => LinkedAddresses.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseGenesisState();
    if (object.total_ustrd_burned !== void 0 && object.total_ustrd_burned !== null) {
      message.totalUstrdBurned = object.total_ustrd_burned;
    }
    if (object.protocol_ustrd_burned !== void 0 && object.protocol_ustrd_burned !== null) {
      message.protocolUstrdBurned = object.protocol_ustrd_burned;
    }
    if (object.total_user_ustrd_burned !== void 0 && object.total_user_ustrd_burned !== null) {
      message.totalUserUstrdBurned = object.total_user_ustrd_burned;
    }
    message.burnedByAccount = object.burned_by_account?.map((e) => AddressBurnedAmount.fromAmino(e)) || [];
    message.linkedAddresses = object.linked_addresses?.map((e) => LinkedAddresses.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.total_ustrd_burned = message.totalUstrdBurned === "" ? void 0 : message.totalUstrdBurned;
    obj.protocol_ustrd_burned = message.protocolUstrdBurned === "" ? void 0 : message.protocolUstrdBurned;
    obj.total_user_ustrd_burned = message.totalUserUstrdBurned === "" ? void 0 : message.totalUserUstrdBurned;
    if (message.burnedByAccount) {
      obj.burned_by_account = message.burnedByAccount.map((e) => e ? AddressBurnedAmount.toAmino(e) : void 0);
    } else {
      obj.burned_by_account = message.burnedByAccount;
    }
    if (message.linkedAddresses) {
      obj.linked_addresses = message.linkedAddresses.map((e) => e ? LinkedAddresses.toAmino(e) : void 0);
    } else {
      obj.linked_addresses = message.linkedAddresses;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return GenesisState.decode(message.value);
  },
  toProto(message) {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.strdburner.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AddressBurnedAmount,
  GenesisState,
  LinkedAddresses
});
