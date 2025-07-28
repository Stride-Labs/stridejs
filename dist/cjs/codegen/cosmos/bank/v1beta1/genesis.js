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
var genesis_exports = {};
__export(genesis_exports, {
  Balance: () => Balance,
  GenesisState: () => GenesisState
});
module.exports = __toCommonJS(genesis_exports);
var import_bank = require("./bank");
var import_coin = require("../../base/v1beta1/coin");
var import_binary = require("../../../binary");
function createBaseGenesisState() {
  return {
    params: import_bank.Params.fromPartial({}),
    balances: [],
    supply: [],
    denomMetadata: [],
    sendEnabled: []
  };
}
const GenesisState = {
  typeUrl: "/cosmos.bank.v1beta1.GenesisState",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.params !== void 0) {
      import_bank.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.balances) {
      Balance.encode(v, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.supply) {
      import_coin.Coin.encode(v, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.denomMetadata) {
      import_bank.Metadata.encode(v, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.sendEnabled) {
      import_bank.SendEnabled.encode(v, writer.uint32(42).fork()).ldelim();
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
        case 1:
          message.params = import_bank.Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.balances.push(Balance.decode(reader, reader.uint32()));
          break;
        case 3:
          message.supply.push(import_coin.Coin.decode(reader, reader.uint32()));
          break;
        case 4:
          message.denomMetadata.push(import_bank.Metadata.decode(reader, reader.uint32()));
          break;
        case 5:
          message.sendEnabled.push(import_bank.SendEnabled.decode(reader, reader.uint32()));
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
    message.params = object.params !== void 0 && object.params !== null ? import_bank.Params.fromPartial(object.params) : void 0;
    message.balances = object.balances?.map((e) => Balance.fromPartial(e)) || [];
    message.supply = object.supply?.map((e) => import_coin.Coin.fromPartial(e)) || [];
    message.denomMetadata = object.denomMetadata?.map((e) => import_bank.Metadata.fromPartial(e)) || [];
    message.sendEnabled = object.sendEnabled?.map((e) => import_bank.SendEnabled.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseGenesisState();
    if (object.params !== void 0 && object.params !== null) {
      message.params = import_bank.Params.fromAmino(object.params);
    }
    message.balances = object.balances?.map((e) => Balance.fromAmino(e)) || [];
    message.supply = object.supply?.map((e) => import_coin.Coin.fromAmino(e)) || [];
    message.denomMetadata = object.denom_metadata?.map((e) => import_bank.Metadata.fromAmino(e)) || [];
    message.sendEnabled = object.send_enabled?.map((e) => import_bank.SendEnabled.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.params = message.params ? import_bank.Params.toAmino(message.params) : import_bank.Params.toAmino(import_bank.Params.fromPartial({}));
    if (message.balances) {
      obj.balances = message.balances.map((e) => e ? Balance.toAmino(e) : void 0);
    } else {
      obj.balances = message.balances;
    }
    if (message.supply) {
      obj.supply = message.supply.map((e) => e ? import_coin.Coin.toAmino(e) : void 0);
    } else {
      obj.supply = message.supply;
    }
    if (message.denomMetadata) {
      obj.denom_metadata = message.denomMetadata.map((e) => e ? import_bank.Metadata.toAmino(e) : void 0);
    } else {
      obj.denom_metadata = message.denomMetadata;
    }
    if (message.sendEnabled) {
      obj.send_enabled = message.sendEnabled.map((e) => e ? import_bank.SendEnabled.toAmino(e) : void 0);
    } else {
      obj.send_enabled = message.sendEnabled;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return GenesisState.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/GenesisState",
      value: GenesisState.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return GenesisState.decode(message.value);
  },
  toProto(message) {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.bank.v1beta1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
function createBaseBalance() {
  return {
    address: "",
    coins: []
  };
}
const Balance = {
  typeUrl: "/cosmos.bank.v1beta1.Balance",
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
    const message = createBaseBalance();
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
    const message = createBaseBalance();
    message.address = object.address ?? "";
    message.coins = object.coins?.map((e) => import_coin.Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseBalance();
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
    return Balance.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/Balance",
      value: Balance.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return Balance.decode(message.value);
  },
  toProto(message) {
    return Balance.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.bank.v1beta1.Balance",
      value: Balance.encode(message).finish()
    };
  }
};
// Proper CommonJS exports for dynamic imports
module.exports = {
  Balance,
  GenesisState
};
