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
var bank_exports = {};
__export(bank_exports, {
  DenomUnit: () => DenomUnit,
  Input: () => Input,
  Metadata: () => Metadata,
  Output: () => Output,
  Params: () => Params,
  SendEnabled: () => SendEnabled,
  Supply: () => Supply
});
module.exports = __toCommonJS(bank_exports);
var import_coin = require("../../base/v1beta1/coin");
var import_binary = require("../../../binary");
function createBaseParams() {
  return {
    sendEnabled: [],
    defaultSendEnabled: false
  };
}
const Params = {
  typeUrl: "/cosmos.bank.v1beta1.Params",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    for (const v of message.sendEnabled) {
      SendEnabled.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.defaultSendEnabled === true) {
      writer.uint32(16).bool(message.defaultSendEnabled);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sendEnabled.push(SendEnabled.decode(reader, reader.uint32()));
          break;
        case 2:
          message.defaultSendEnabled = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseParams();
    message.sendEnabled = object.sendEnabled?.map((e) => SendEnabled.fromPartial(e)) || [];
    message.defaultSendEnabled = object.defaultSendEnabled ?? false;
    return message;
  },
  fromAmino(object) {
    const message = createBaseParams();
    message.sendEnabled = object.send_enabled?.map((e) => SendEnabled.fromAmino(e)) || [];
    if (object.default_send_enabled !== void 0 && object.default_send_enabled !== null) {
      message.defaultSendEnabled = object.default_send_enabled;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.sendEnabled) {
      obj.send_enabled = message.sendEnabled.map((e) => e ? SendEnabled.toAmino(e) : void 0);
    } else {
      obj.send_enabled = message.sendEnabled;
    }
    obj.default_send_enabled = message.defaultSendEnabled === false ? void 0 : message.defaultSendEnabled;
    return obj;
  },
  fromAminoMsg(object) {
    return Params.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/x/bank/Params",
      value: Params.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return Params.decode(message.value);
  },
  toProto(message) {
    return Params.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.bank.v1beta1.Params",
      value: Params.encode(message).finish()
    };
  }
};
function createBaseSendEnabled() {
  return {
    denom: "",
    enabled: false
  };
}
const SendEnabled = {
  typeUrl: "/cosmos.bank.v1beta1.SendEnabled",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.enabled === true) {
      writer.uint32(16).bool(message.enabled);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseSendEnabled();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.enabled = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseSendEnabled();
    message.denom = object.denom ?? "";
    message.enabled = object.enabled ?? false;
    return message;
  },
  fromAmino(object) {
    const message = createBaseSendEnabled();
    if (object.denom !== void 0 && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.enabled !== void 0 && object.enabled !== null) {
      message.enabled = object.enabled;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.denom = message.denom === "" ? void 0 : message.denom;
    obj.enabled = message.enabled === false ? void 0 : message.enabled;
    return obj;
  },
  fromAminoMsg(object) {
    return SendEnabled.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/SendEnabled",
      value: SendEnabled.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return SendEnabled.decode(message.value);
  },
  toProto(message) {
    return SendEnabled.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.bank.v1beta1.SendEnabled",
      value: SendEnabled.encode(message).finish()
    };
  }
};
function createBaseInput() {
  return {
    address: "",
    coins: []
  };
}
const Input = {
  typeUrl: "/cosmos.bank.v1beta1.Input",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    for (const v of message.coins) {
      import_coin.Coin.encode(v, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.coins.push(import_coin.Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseInput();
    message.address = object.address ?? "";
    message.coins = object.coins?.map((e) => import_coin.Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseInput();
    if (object.address !== void 0 && object.address !== null) {
      message.address = object.address;
    }
    message.coins = object.coins?.map((e) => import_coin.Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.address = message.address === "" ? void 0 : message.address;
    if (message.coins) {
      obj.coins = message.coins.map((e) => e ? import_coin.Coin.toAmino(e) : void 0);
    } else {
      obj.coins = message.coins;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return Input.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/Input",
      value: Input.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return Input.decode(message.value);
  },
  toProto(message) {
    return Input.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.bank.v1beta1.Input",
      value: Input.encode(message).finish()
    };
  }
};
function createBaseOutput() {
  return {
    address: "",
    coins: []
  };
}
const Output = {
  typeUrl: "/cosmos.bank.v1beta1.Output",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    for (const v of message.coins) {
      import_coin.Coin.encode(v, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseOutput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.coins.push(import_coin.Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseOutput();
    message.address = object.address ?? "";
    message.coins = object.coins?.map((e) => import_coin.Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseOutput();
    if (object.address !== void 0 && object.address !== null) {
      message.address = object.address;
    }
    message.coins = object.coins?.map((e) => import_coin.Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.address = message.address === "" ? void 0 : message.address;
    if (message.coins) {
      obj.coins = message.coins.map((e) => e ? import_coin.Coin.toAmino(e) : void 0);
    } else {
      obj.coins = message.coins;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return Output.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/Output",
      value: Output.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return Output.decode(message.value);
  },
  toProto(message) {
    return Output.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.bank.v1beta1.Output",
      value: Output.encode(message).finish()
    };
  }
};
function createBaseSupply() {
  return {
    $typeUrl: "/cosmos.bank.v1beta1.Supply",
    total: []
  };
}
const Supply = {
  typeUrl: "/cosmos.bank.v1beta1.Supply",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    for (const v of message.total) {
      import_coin.Coin.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseSupply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.total.push(import_coin.Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseSupply();
    message.total = object.total?.map((e) => import_coin.Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseSupply();
    message.total = object.total?.map((e) => import_coin.Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.total) {
      obj.total = message.total.map((e) => e ? import_coin.Coin.toAmino(e) : void 0);
    } else {
      obj.total = message.total;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return Supply.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/Supply",
      value: Supply.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return Supply.decode(message.value);
  },
  toProto(message) {
    return Supply.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.bank.v1beta1.Supply",
      value: Supply.encode(message).finish()
    };
  }
};
function createBaseDenomUnit() {
  return {
    denom: "",
    exponent: 0,
    aliases: []
  };
}
const DenomUnit = {
  typeUrl: "/cosmos.bank.v1beta1.DenomUnit",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.exponent !== 0) {
      writer.uint32(16).uint32(message.exponent);
    }
    for (const v of message.aliases) {
      writer.uint32(26).string(v);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseDenomUnit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.exponent = reader.uint32();
          break;
        case 3:
          message.aliases.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseDenomUnit();
    message.denom = object.denom ?? "";
    message.exponent = object.exponent ?? 0;
    message.aliases = object.aliases?.map((e) => e) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseDenomUnit();
    if (object.denom !== void 0 && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.exponent !== void 0 && object.exponent !== null) {
      message.exponent = object.exponent;
    }
    message.aliases = object.aliases?.map((e) => e) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.denom = message.denom === "" ? void 0 : message.denom;
    obj.exponent = message.exponent === 0 ? void 0 : message.exponent;
    if (message.aliases) {
      obj.aliases = message.aliases.map((e) => e);
    } else {
      obj.aliases = message.aliases;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return DenomUnit.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/DenomUnit",
      value: DenomUnit.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return DenomUnit.decode(message.value);
  },
  toProto(message) {
    return DenomUnit.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.bank.v1beta1.DenomUnit",
      value: DenomUnit.encode(message).finish()
    };
  }
};
function createBaseMetadata() {
  return {
    description: "",
    denomUnits: [],
    base: "",
    display: "",
    name: "",
    symbol: "",
    uri: "",
    uriHash: ""
  };
}
const Metadata = {
  typeUrl: "/cosmos.bank.v1beta1.Metadata",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.description !== "") {
      writer.uint32(10).string(message.description);
    }
    for (const v of message.denomUnits) {
      DenomUnit.encode(v, writer.uint32(18).fork()).ldelim();
    }
    if (message.base !== "") {
      writer.uint32(26).string(message.base);
    }
    if (message.display !== "") {
      writer.uint32(34).string(message.display);
    }
    if (message.name !== "") {
      writer.uint32(42).string(message.name);
    }
    if (message.symbol !== "") {
      writer.uint32(50).string(message.symbol);
    }
    if (message.uri !== "") {
      writer.uint32(58).string(message.uri);
    }
    if (message.uriHash !== "") {
      writer.uint32(66).string(message.uriHash);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.description = reader.string();
          break;
        case 2:
          message.denomUnits.push(DenomUnit.decode(reader, reader.uint32()));
          break;
        case 3:
          message.base = reader.string();
          break;
        case 4:
          message.display = reader.string();
          break;
        case 5:
          message.name = reader.string();
          break;
        case 6:
          message.symbol = reader.string();
          break;
        case 7:
          message.uri = reader.string();
          break;
        case 8:
          message.uriHash = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMetadata();
    message.description = object.description ?? "";
    message.denomUnits = object.denomUnits?.map((e) => DenomUnit.fromPartial(e)) || [];
    message.base = object.base ?? "";
    message.display = object.display ?? "";
    message.name = object.name ?? "";
    message.symbol = object.symbol ?? "";
    message.uri = object.uri ?? "";
    message.uriHash = object.uriHash ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseMetadata();
    if (object.description !== void 0 && object.description !== null) {
      message.description = object.description;
    }
    message.denomUnits = object.denom_units?.map((e) => DenomUnit.fromAmino(e)) || [];
    if (object.base !== void 0 && object.base !== null) {
      message.base = object.base;
    }
    if (object.display !== void 0 && object.display !== null) {
      message.display = object.display;
    }
    if (object.name !== void 0 && object.name !== null) {
      message.name = object.name;
    }
    if (object.symbol !== void 0 && object.symbol !== null) {
      message.symbol = object.symbol;
    }
    if (object.uri !== void 0 && object.uri !== null) {
      message.uri = object.uri;
    }
    if (object.uri_hash !== void 0 && object.uri_hash !== null) {
      message.uriHash = object.uri_hash;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.description = message.description === "" ? void 0 : message.description;
    if (message.denomUnits) {
      obj.denom_units = message.denomUnits.map((e) => e ? DenomUnit.toAmino(e) : void 0);
    } else {
      obj.denom_units = message.denomUnits;
    }
    obj.base = message.base === "" ? void 0 : message.base;
    obj.display = message.display === "" ? void 0 : message.display;
    obj.name = message.name === "" ? void 0 : message.name;
    obj.symbol = message.symbol === "" ? void 0 : message.symbol;
    obj.uri = message.uri === "" ? void 0 : message.uri;
    obj.uri_hash = message.uriHash === "" ? void 0 : message.uriHash;
    return obj;
  },
  fromAminoMsg(object) {
    return Metadata.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/Metadata",
      value: Metadata.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return Metadata.decode(message.value);
  },
  toProto(message) {
    return Metadata.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.bank.v1beta1.Metadata",
      value: Metadata.encode(message).finish()
    };
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  DenomUnit,
  Input,
  Metadata,
  Output,
  Params,
  SendEnabled,
  Supply
});
