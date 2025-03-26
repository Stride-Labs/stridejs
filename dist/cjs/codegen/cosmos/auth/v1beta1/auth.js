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
var auth_exports = {};
__export(auth_exports, {
  BaseAccount: () => BaseAccount,
  ModuleAccount: () => ModuleAccount,
  ModuleCredential: () => ModuleCredential,
  Params: () => Params
});
module.exports = __toCommonJS(auth_exports);
var import_any = require("../../../google/protobuf/any");
var import_binary = require("../../../binary");
var import_helpers = require("../../../helpers");
function createBaseBaseAccount() {
  return {
    $typeUrl: "/cosmos.auth.v1beta1.BaseAccount",
    address: "",
    pubKey: void 0,
    accountNumber: BigInt(0),
    sequence: BigInt(0)
  };
}
const BaseAccount = {
  typeUrl: "/cosmos.auth.v1beta1.BaseAccount",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.pubKey !== void 0) {
      import_any.Any.encode(message.pubKey, writer.uint32(18).fork()).ldelim();
    }
    if (message.accountNumber !== BigInt(0)) {
      writer.uint32(24).uint64(message.accountNumber);
    }
    if (message.sequence !== BigInt(0)) {
      writer.uint32(32).uint64(message.sequence);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseBaseAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.pubKey = import_any.Any.decode(reader, reader.uint32());
          break;
        case 3:
          message.accountNumber = reader.uint64();
          break;
        case 4:
          message.sequence = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseBaseAccount();
    message.address = object.address ?? "";
    message.pubKey = object.pubKey !== void 0 && object.pubKey !== null ? import_any.Any.fromPartial(object.pubKey) : void 0;
    message.accountNumber = object.accountNumber !== void 0 && object.accountNumber !== null ? BigInt(object.accountNumber.toString()) : BigInt(0);
    message.sequence = object.sequence !== void 0 && object.sequence !== null ? BigInt(object.sequence.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object) {
    const message = createBaseBaseAccount();
    if (object.address !== void 0 && object.address !== null) {
      message.address = object.address;
    }
    if (object.pub_key !== void 0 && object.pub_key !== null) {
      message.pubKey = import_any.Any.fromAmino(object.pub_key);
    }
    if (object.account_number !== void 0 && object.account_number !== null) {
      message.accountNumber = BigInt(object.account_number);
    }
    if (object.sequence !== void 0 && object.sequence !== null) {
      message.sequence = BigInt(object.sequence);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.address = message.address === "" ? void 0 : message.address;
    obj.pub_key = message.pubKey ? import_any.Any.toAmino(message.pubKey) : void 0;
    obj.account_number = message.accountNumber !== BigInt(0) ? message.accountNumber?.toString() : void 0;
    obj.sequence = message.sequence !== BigInt(0) ? message.sequence?.toString() : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return BaseAccount.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/BaseAccount",
      value: BaseAccount.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return BaseAccount.decode(message.value);
  },
  toProto(message) {
    return BaseAccount.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.auth.v1beta1.BaseAccount",
      value: BaseAccount.encode(message).finish()
    };
  }
};
function createBaseModuleAccount() {
  return {
    $typeUrl: "/cosmos.auth.v1beta1.ModuleAccount",
    baseAccount: void 0,
    name: "",
    permissions: []
  };
}
const ModuleAccount = {
  typeUrl: "/cosmos.auth.v1beta1.ModuleAccount",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.baseAccount !== void 0) {
      BaseAccount.encode(message.baseAccount, writer.uint32(10).fork()).ldelim();
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    for (const v of message.permissions) {
      writer.uint32(26).string(v);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseModuleAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.baseAccount = BaseAccount.decode(reader, reader.uint32());
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.permissions.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseModuleAccount();
    message.baseAccount = object.baseAccount !== void 0 && object.baseAccount !== null ? BaseAccount.fromPartial(object.baseAccount) : void 0;
    message.name = object.name ?? "";
    message.permissions = object.permissions?.map((e) => e) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseModuleAccount();
    if (object.base_account !== void 0 && object.base_account !== null) {
      message.baseAccount = BaseAccount.fromAmino(object.base_account);
    }
    if (object.name !== void 0 && object.name !== null) {
      message.name = object.name;
    }
    message.permissions = object.permissions?.map((e) => e) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.base_account = message.baseAccount ? BaseAccount.toAmino(message.baseAccount) : void 0;
    obj.name = message.name === "" ? void 0 : message.name;
    if (message.permissions) {
      obj.permissions = message.permissions.map((e) => e);
    } else {
      obj.permissions = message.permissions;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return ModuleAccount.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/ModuleAccount",
      value: ModuleAccount.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return ModuleAccount.decode(message.value);
  },
  toProto(message) {
    return ModuleAccount.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.auth.v1beta1.ModuleAccount",
      value: ModuleAccount.encode(message).finish()
    };
  }
};
function createBaseModuleCredential() {
  return {
    moduleName: "",
    derivationKeys: []
  };
}
const ModuleCredential = {
  typeUrl: "/cosmos.auth.v1beta1.ModuleCredential",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.moduleName !== "") {
      writer.uint32(10).string(message.moduleName);
    }
    for (const v of message.derivationKeys) {
      writer.uint32(18).bytes(v);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseModuleCredential();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.moduleName = reader.string();
          break;
        case 2:
          message.derivationKeys.push(reader.bytes());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseModuleCredential();
    message.moduleName = object.moduleName ?? "";
    message.derivationKeys = object.derivationKeys?.map((e) => e) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseModuleCredential();
    if (object.module_name !== void 0 && object.module_name !== null) {
      message.moduleName = object.module_name;
    }
    message.derivationKeys = object.derivation_keys?.map((e) => (0, import_helpers.bytesFromBase64)(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.module_name = message.moduleName === "" ? void 0 : message.moduleName;
    if (message.derivationKeys) {
      obj.derivation_keys = message.derivationKeys.map((e) => (0, import_helpers.base64FromBytes)(e));
    } else {
      obj.derivation_keys = message.derivationKeys;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return ModuleCredential.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/GroupAccountCredential",
      value: ModuleCredential.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return ModuleCredential.decode(message.value);
  },
  toProto(message) {
    return ModuleCredential.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.auth.v1beta1.ModuleCredential",
      value: ModuleCredential.encode(message).finish()
    };
  }
};
function createBaseParams() {
  return {
    maxMemoCharacters: BigInt(0),
    txSigLimit: BigInt(0),
    txSizeCostPerByte: BigInt(0),
    sigVerifyCostEd25519: BigInt(0),
    sigVerifyCostSecp256k1: BigInt(0)
  };
}
const Params = {
  typeUrl: "/cosmos.auth.v1beta1.Params",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.maxMemoCharacters !== BigInt(0)) {
      writer.uint32(8).uint64(message.maxMemoCharacters);
    }
    if (message.txSigLimit !== BigInt(0)) {
      writer.uint32(16).uint64(message.txSigLimit);
    }
    if (message.txSizeCostPerByte !== BigInt(0)) {
      writer.uint32(24).uint64(message.txSizeCostPerByte);
    }
    if (message.sigVerifyCostEd25519 !== BigInt(0)) {
      writer.uint32(32).uint64(message.sigVerifyCostEd25519);
    }
    if (message.sigVerifyCostSecp256k1 !== BigInt(0)) {
      writer.uint32(40).uint64(message.sigVerifyCostSecp256k1);
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
          message.maxMemoCharacters = reader.uint64();
          break;
        case 2:
          message.txSigLimit = reader.uint64();
          break;
        case 3:
          message.txSizeCostPerByte = reader.uint64();
          break;
        case 4:
          message.sigVerifyCostEd25519 = reader.uint64();
          break;
        case 5:
          message.sigVerifyCostSecp256k1 = reader.uint64();
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
    message.maxMemoCharacters = object.maxMemoCharacters !== void 0 && object.maxMemoCharacters !== null ? BigInt(object.maxMemoCharacters.toString()) : BigInt(0);
    message.txSigLimit = object.txSigLimit !== void 0 && object.txSigLimit !== null ? BigInt(object.txSigLimit.toString()) : BigInt(0);
    message.txSizeCostPerByte = object.txSizeCostPerByte !== void 0 && object.txSizeCostPerByte !== null ? BigInt(object.txSizeCostPerByte.toString()) : BigInt(0);
    message.sigVerifyCostEd25519 = object.sigVerifyCostEd25519 !== void 0 && object.sigVerifyCostEd25519 !== null ? BigInt(object.sigVerifyCostEd25519.toString()) : BigInt(0);
    message.sigVerifyCostSecp256k1 = object.sigVerifyCostSecp256k1 !== void 0 && object.sigVerifyCostSecp256k1 !== null ? BigInt(object.sigVerifyCostSecp256k1.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object) {
    const message = createBaseParams();
    if (object.max_memo_characters !== void 0 && object.max_memo_characters !== null) {
      message.maxMemoCharacters = BigInt(object.max_memo_characters);
    }
    if (object.tx_sig_limit !== void 0 && object.tx_sig_limit !== null) {
      message.txSigLimit = BigInt(object.tx_sig_limit);
    }
    if (object.tx_size_cost_per_byte !== void 0 && object.tx_size_cost_per_byte !== null) {
      message.txSizeCostPerByte = BigInt(object.tx_size_cost_per_byte);
    }
    if (object.sig_verify_cost_ed25519 !== void 0 && object.sig_verify_cost_ed25519 !== null) {
      message.sigVerifyCostEd25519 = BigInt(object.sig_verify_cost_ed25519);
    }
    if (object.sig_verify_cost_secp256k1 !== void 0 && object.sig_verify_cost_secp256k1 !== null) {
      message.sigVerifyCostSecp256k1 = BigInt(object.sig_verify_cost_secp256k1);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.max_memo_characters = message.maxMemoCharacters !== BigInt(0) ? message.maxMemoCharacters?.toString() : void 0;
    obj.tx_sig_limit = message.txSigLimit !== BigInt(0) ? message.txSigLimit?.toString() : void 0;
    obj.tx_size_cost_per_byte = message.txSizeCostPerByte !== BigInt(0) ? message.txSizeCostPerByte?.toString() : void 0;
    obj.sig_verify_cost_ed25519 = message.sigVerifyCostEd25519 !== BigInt(0) ? message.sigVerifyCostEd25519?.toString() : void 0;
    obj.sig_verify_cost_secp256k1 = message.sigVerifyCostSecp256k1 !== BigInt(0) ? message.sigVerifyCostSecp256k1?.toString() : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return Params.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/x/auth/Params",
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
      typeUrl: "/cosmos.auth.v1beta1.Params",
      value: Params.encode(message).finish()
    };
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  BaseAccount,
  ModuleAccount,
  ModuleCredential,
  Params
});
