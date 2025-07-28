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
var proposal_legacy_exports = {};
__export(proposal_legacy_exports, {
  AccessConfigUpdate: () => AccessConfigUpdate,
  ClearAdminProposal: () => ClearAdminProposal,
  ExecuteContractProposal: () => ExecuteContractProposal,
  InstantiateContract2Proposal: () => InstantiateContract2Proposal,
  InstantiateContractProposal: () => InstantiateContractProposal,
  MigrateContractProposal: () => MigrateContractProposal,
  PinCodesProposal: () => PinCodesProposal,
  StoreAndInstantiateContractProposal: () => StoreAndInstantiateContractProposal,
  StoreCodeProposal: () => StoreCodeProposal,
  SudoContractProposal: () => SudoContractProposal,
  UnpinCodesProposal: () => UnpinCodesProposal,
  UpdateAdminProposal: () => UpdateAdminProposal,
  UpdateInstantiateConfigProposal: () => UpdateInstantiateConfigProposal
});
module.exports = __toCommonJS(proposal_legacy_exports);
var import_types = require("./types");
var import_coin = require("../../../cosmos/base/v1beta1/coin");
var import_binary = require("../../../binary");
var import_encoding = require("@cosmjs/encoding");
var import_helpers = require("../../../helpers");
function createBaseStoreCodeProposal() {
  return {
    $typeUrl: "/cosmwasm.wasm.v1.StoreCodeProposal",
    title: "",
    description: "",
    runAs: "",
    wasmByteCode: new Uint8Array(),
    instantiatePermission: void 0,
    unpinCode: false,
    source: "",
    builder: "",
    codeHash: new Uint8Array()
  };
}
const StoreCodeProposal = {
  typeUrl: "/cosmwasm.wasm.v1.StoreCodeProposal",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.runAs !== "") {
      writer.uint32(26).string(message.runAs);
    }
    if (message.wasmByteCode.length !== 0) {
      writer.uint32(34).bytes(message.wasmByteCode);
    }
    if (message.instantiatePermission !== void 0) {
      import_types.AccessConfig.encode(message.instantiatePermission, writer.uint32(58).fork()).ldelim();
    }
    if (message.unpinCode === true) {
      writer.uint32(64).bool(message.unpinCode);
    }
    if (message.source !== "") {
      writer.uint32(74).string(message.source);
    }
    if (message.builder !== "") {
      writer.uint32(82).string(message.builder);
    }
    if (message.codeHash.length !== 0) {
      writer.uint32(90).bytes(message.codeHash);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseStoreCodeProposal();
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
          message.runAs = reader.string();
          break;
        case 4:
          message.wasmByteCode = reader.bytes();
          break;
        case 7:
          message.instantiatePermission = import_types.AccessConfig.decode(reader, reader.uint32());
          break;
        case 8:
          message.unpinCode = reader.bool();
          break;
        case 9:
          message.source = reader.string();
          break;
        case 10:
          message.builder = reader.string();
          break;
        case 11:
          message.codeHash = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseStoreCodeProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.runAs = object.runAs ?? "";
    message.wasmByteCode = object.wasmByteCode ?? new Uint8Array();
    message.instantiatePermission = object.instantiatePermission !== void 0 && object.instantiatePermission !== null ? import_types.AccessConfig.fromPartial(object.instantiatePermission) : void 0;
    message.unpinCode = object.unpinCode ?? false;
    message.source = object.source ?? "";
    message.builder = object.builder ?? "";
    message.codeHash = object.codeHash ?? new Uint8Array();
    return message;
  },
  fromAmino(object) {
    const message = createBaseStoreCodeProposal();
    if (object.title !== void 0 && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== void 0 && object.description !== null) {
      message.description = object.description;
    }
    if (object.run_as !== void 0 && object.run_as !== null) {
      message.runAs = object.run_as;
    }
    if (object.wasm_byte_code !== void 0 && object.wasm_byte_code !== null) {
      message.wasmByteCode = (0, import_encoding.fromBase64)(object.wasm_byte_code);
    }
    if (object.instantiate_permission !== void 0 && object.instantiate_permission !== null) {
      message.instantiatePermission = import_types.AccessConfig.fromAmino(object.instantiate_permission);
    }
    if (object.unpin_code !== void 0 && object.unpin_code !== null) {
      message.unpinCode = object.unpin_code;
    }
    if (object.source !== void 0 && object.source !== null) {
      message.source = object.source;
    }
    if (object.builder !== void 0 && object.builder !== null) {
      message.builder = object.builder;
    }
    if (object.code_hash !== void 0 && object.code_hash !== null) {
      message.codeHash = (0, import_helpers.bytesFromBase64)(object.code_hash);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.title = message.title === "" ? void 0 : message.title;
    obj.description = message.description === "" ? void 0 : message.description;
    obj.run_as = message.runAs === "" ? void 0 : message.runAs;
    obj.wasm_byte_code = message.wasmByteCode ? (0, import_encoding.toBase64)(message.wasmByteCode) : void 0;
    obj.instantiate_permission = message.instantiatePermission ? import_types.AccessConfig.toAmino(message.instantiatePermission) : void 0;
    obj.unpin_code = message.unpinCode === false ? void 0 : message.unpinCode;
    obj.source = message.source === "" ? void 0 : message.source;
    obj.builder = message.builder === "" ? void 0 : message.builder;
    obj.code_hash = message.codeHash ? (0, import_helpers.base64FromBytes)(message.codeHash) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return StoreCodeProposal.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "wasm/StoreCodeProposal",
      value: StoreCodeProposal.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return StoreCodeProposal.decode(message.value);
  },
  toProto(message) {
    return StoreCodeProposal.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmwasm.wasm.v1.StoreCodeProposal",
      value: StoreCodeProposal.encode(message).finish()
    };
  }
};
function createBaseInstantiateContractProposal() {
  return {
    $typeUrl: "/cosmwasm.wasm.v1.InstantiateContractProposal",
    title: "",
    description: "",
    runAs: "",
    admin: "",
    codeId: BigInt(0),
    label: "",
    msg: new Uint8Array(),
    funds: []
  };
}
const InstantiateContractProposal = {
  typeUrl: "/cosmwasm.wasm.v1.InstantiateContractProposal",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.runAs !== "") {
      writer.uint32(26).string(message.runAs);
    }
    if (message.admin !== "") {
      writer.uint32(34).string(message.admin);
    }
    if (message.codeId !== BigInt(0)) {
      writer.uint32(40).uint64(message.codeId);
    }
    if (message.label !== "") {
      writer.uint32(50).string(message.label);
    }
    if (message.msg.length !== 0) {
      writer.uint32(58).bytes(message.msg);
    }
    for (const v of message.funds) {
      import_coin.Coin.encode(v, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseInstantiateContractProposal();
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
          message.runAs = reader.string();
          break;
        case 4:
          message.admin = reader.string();
          break;
        case 5:
          message.codeId = reader.uint64();
          break;
        case 6:
          message.label = reader.string();
          break;
        case 7:
          message.msg = reader.bytes();
          break;
        case 8:
          message.funds.push(import_coin.Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseInstantiateContractProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.runAs = object.runAs ?? "";
    message.admin = object.admin ?? "";
    message.codeId = object.codeId !== void 0 && object.codeId !== null ? BigInt(object.codeId.toString()) : BigInt(0);
    message.label = object.label ?? "";
    message.msg = object.msg ?? new Uint8Array();
    message.funds = object.funds?.map((e) => import_coin.Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseInstantiateContractProposal();
    if (object.title !== void 0 && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== void 0 && object.description !== null) {
      message.description = object.description;
    }
    if (object.run_as !== void 0 && object.run_as !== null) {
      message.runAs = object.run_as;
    }
    if (object.admin !== void 0 && object.admin !== null) {
      message.admin = object.admin;
    }
    if (object.code_id !== void 0 && object.code_id !== null) {
      message.codeId = BigInt(object.code_id);
    }
    if (object.label !== void 0 && object.label !== null) {
      message.label = object.label;
    }
    if (object.msg !== void 0 && object.msg !== null) {
      message.msg = (0, import_encoding.toUtf8)(JSON.stringify(object.msg));
    }
    message.funds = object.funds?.map((e) => import_coin.Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.title = message.title === "" ? void 0 : message.title;
    obj.description = message.description === "" ? void 0 : message.description;
    obj.run_as = message.runAs === "" ? void 0 : message.runAs;
    obj.admin = message.admin === "" ? void 0 : message.admin;
    obj.code_id = message.codeId !== BigInt(0) ? message.codeId?.toString() : void 0;
    obj.label = message.label === "" ? void 0 : message.label;
    obj.msg = message.msg ? JSON.parse((0, import_encoding.fromUtf8)(message.msg)) : void 0;
    if (message.funds) {
      obj.funds = message.funds.map((e) => e ? import_coin.Coin.toAmino(e) : void 0);
    } else {
      obj.funds = message.funds;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return InstantiateContractProposal.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "wasm/InstantiateContractProposal",
      value: InstantiateContractProposal.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return InstantiateContractProposal.decode(message.value);
  },
  toProto(message) {
    return InstantiateContractProposal.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmwasm.wasm.v1.InstantiateContractProposal",
      value: InstantiateContractProposal.encode(message).finish()
    };
  }
};
function createBaseInstantiateContract2Proposal() {
  return {
    $typeUrl: "/cosmwasm.wasm.v1.InstantiateContract2Proposal",
    title: "",
    description: "",
    runAs: "",
    admin: "",
    codeId: BigInt(0),
    label: "",
    msg: new Uint8Array(),
    funds: [],
    salt: new Uint8Array(),
    fixMsg: false
  };
}
const InstantiateContract2Proposal = {
  typeUrl: "/cosmwasm.wasm.v1.InstantiateContract2Proposal",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.runAs !== "") {
      writer.uint32(26).string(message.runAs);
    }
    if (message.admin !== "") {
      writer.uint32(34).string(message.admin);
    }
    if (message.codeId !== BigInt(0)) {
      writer.uint32(40).uint64(message.codeId);
    }
    if (message.label !== "") {
      writer.uint32(50).string(message.label);
    }
    if (message.msg.length !== 0) {
      writer.uint32(58).bytes(message.msg);
    }
    for (const v of message.funds) {
      import_coin.Coin.encode(v, writer.uint32(66).fork()).ldelim();
    }
    if (message.salt.length !== 0) {
      writer.uint32(74).bytes(message.salt);
    }
    if (message.fixMsg === true) {
      writer.uint32(80).bool(message.fixMsg);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseInstantiateContract2Proposal();
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
          message.runAs = reader.string();
          break;
        case 4:
          message.admin = reader.string();
          break;
        case 5:
          message.codeId = reader.uint64();
          break;
        case 6:
          message.label = reader.string();
          break;
        case 7:
          message.msg = reader.bytes();
          break;
        case 8:
          message.funds.push(import_coin.Coin.decode(reader, reader.uint32()));
          break;
        case 9:
          message.salt = reader.bytes();
          break;
        case 10:
          message.fixMsg = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseInstantiateContract2Proposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.runAs = object.runAs ?? "";
    message.admin = object.admin ?? "";
    message.codeId = object.codeId !== void 0 && object.codeId !== null ? BigInt(object.codeId.toString()) : BigInt(0);
    message.label = object.label ?? "";
    message.msg = object.msg ?? new Uint8Array();
    message.funds = object.funds?.map((e) => import_coin.Coin.fromPartial(e)) || [];
    message.salt = object.salt ?? new Uint8Array();
    message.fixMsg = object.fixMsg ?? false;
    return message;
  },
  fromAmino(object) {
    const message = createBaseInstantiateContract2Proposal();
    if (object.title !== void 0 && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== void 0 && object.description !== null) {
      message.description = object.description;
    }
    if (object.run_as !== void 0 && object.run_as !== null) {
      message.runAs = object.run_as;
    }
    if (object.admin !== void 0 && object.admin !== null) {
      message.admin = object.admin;
    }
    if (object.code_id !== void 0 && object.code_id !== null) {
      message.codeId = BigInt(object.code_id);
    }
    if (object.label !== void 0 && object.label !== null) {
      message.label = object.label;
    }
    if (object.msg !== void 0 && object.msg !== null) {
      message.msg = (0, import_encoding.toUtf8)(JSON.stringify(object.msg));
    }
    message.funds = object.funds?.map((e) => import_coin.Coin.fromAmino(e)) || [];
    if (object.salt !== void 0 && object.salt !== null) {
      message.salt = (0, import_helpers.bytesFromBase64)(object.salt);
    }
    if (object.fix_msg !== void 0 && object.fix_msg !== null) {
      message.fixMsg = object.fix_msg;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.title = message.title === "" ? void 0 : message.title;
    obj.description = message.description === "" ? void 0 : message.description;
    obj.run_as = message.runAs === "" ? void 0 : message.runAs;
    obj.admin = message.admin === "" ? void 0 : message.admin;
    obj.code_id = message.codeId !== BigInt(0) ? message.codeId?.toString() : void 0;
    obj.label = message.label === "" ? void 0 : message.label;
    obj.msg = message.msg ? JSON.parse((0, import_encoding.fromUtf8)(message.msg)) : void 0;
    if (message.funds) {
      obj.funds = message.funds.map((e) => e ? import_coin.Coin.toAmino(e) : void 0);
    } else {
      obj.funds = message.funds;
    }
    obj.salt = message.salt ? (0, import_helpers.base64FromBytes)(message.salt) : void 0;
    obj.fix_msg = message.fixMsg === false ? void 0 : message.fixMsg;
    return obj;
  },
  fromAminoMsg(object) {
    return InstantiateContract2Proposal.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "wasm/InstantiateContract2Proposal",
      value: InstantiateContract2Proposal.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return InstantiateContract2Proposal.decode(message.value);
  },
  toProto(message) {
    return InstantiateContract2Proposal.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmwasm.wasm.v1.InstantiateContract2Proposal",
      value: InstantiateContract2Proposal.encode(message).finish()
    };
  }
};
function createBaseMigrateContractProposal() {
  return {
    $typeUrl: "/cosmwasm.wasm.v1.MigrateContractProposal",
    title: "",
    description: "",
    contract: "",
    codeId: BigInt(0),
    msg: new Uint8Array()
  };
}
const MigrateContractProposal = {
  typeUrl: "/cosmwasm.wasm.v1.MigrateContractProposal",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.contract !== "") {
      writer.uint32(34).string(message.contract);
    }
    if (message.codeId !== BigInt(0)) {
      writer.uint32(40).uint64(message.codeId);
    }
    if (message.msg.length !== 0) {
      writer.uint32(50).bytes(message.msg);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMigrateContractProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 4:
          message.contract = reader.string();
          break;
        case 5:
          message.codeId = reader.uint64();
          break;
        case 6:
          message.msg = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMigrateContractProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.contract = object.contract ?? "";
    message.codeId = object.codeId !== void 0 && object.codeId !== null ? BigInt(object.codeId.toString()) : BigInt(0);
    message.msg = object.msg ?? new Uint8Array();
    return message;
  },
  fromAmino(object) {
    const message = createBaseMigrateContractProposal();
    if (object.title !== void 0 && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== void 0 && object.description !== null) {
      message.description = object.description;
    }
    if (object.contract !== void 0 && object.contract !== null) {
      message.contract = object.contract;
    }
    if (object.code_id !== void 0 && object.code_id !== null) {
      message.codeId = BigInt(object.code_id);
    }
    if (object.msg !== void 0 && object.msg !== null) {
      message.msg = (0, import_encoding.toUtf8)(JSON.stringify(object.msg));
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.title = message.title === "" ? void 0 : message.title;
    obj.description = message.description === "" ? void 0 : message.description;
    obj.contract = message.contract === "" ? void 0 : message.contract;
    obj.code_id = message.codeId !== BigInt(0) ? message.codeId?.toString() : void 0;
    obj.msg = message.msg ? JSON.parse((0, import_encoding.fromUtf8)(message.msg)) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return MigrateContractProposal.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "wasm/MigrateContractProposal",
      value: MigrateContractProposal.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MigrateContractProposal.decode(message.value);
  },
  toProto(message) {
    return MigrateContractProposal.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MigrateContractProposal",
      value: MigrateContractProposal.encode(message).finish()
    };
  }
};
function createBaseSudoContractProposal() {
  return {
    $typeUrl: "/cosmwasm.wasm.v1.SudoContractProposal",
    title: "",
    description: "",
    contract: "",
    msg: new Uint8Array()
  };
}
const SudoContractProposal = {
  typeUrl: "/cosmwasm.wasm.v1.SudoContractProposal",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.contract !== "") {
      writer.uint32(26).string(message.contract);
    }
    if (message.msg.length !== 0) {
      writer.uint32(34).bytes(message.msg);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseSudoContractProposal();
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
          message.contract = reader.string();
          break;
        case 4:
          message.msg = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseSudoContractProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.contract = object.contract ?? "";
    message.msg = object.msg ?? new Uint8Array();
    return message;
  },
  fromAmino(object) {
    const message = createBaseSudoContractProposal();
    if (object.title !== void 0 && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== void 0 && object.description !== null) {
      message.description = object.description;
    }
    if (object.contract !== void 0 && object.contract !== null) {
      message.contract = object.contract;
    }
    if (object.msg !== void 0 && object.msg !== null) {
      message.msg = (0, import_encoding.toUtf8)(JSON.stringify(object.msg));
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.title = message.title === "" ? void 0 : message.title;
    obj.description = message.description === "" ? void 0 : message.description;
    obj.contract = message.contract === "" ? void 0 : message.contract;
    obj.msg = message.msg ? JSON.parse((0, import_encoding.fromUtf8)(message.msg)) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return SudoContractProposal.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "wasm/SudoContractProposal",
      value: SudoContractProposal.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return SudoContractProposal.decode(message.value);
  },
  toProto(message) {
    return SudoContractProposal.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmwasm.wasm.v1.SudoContractProposal",
      value: SudoContractProposal.encode(message).finish()
    };
  }
};
function createBaseExecuteContractProposal() {
  return {
    $typeUrl: "/cosmwasm.wasm.v1.ExecuteContractProposal",
    title: "",
    description: "",
    runAs: "",
    contract: "",
    msg: new Uint8Array(),
    funds: []
  };
}
const ExecuteContractProposal = {
  typeUrl: "/cosmwasm.wasm.v1.ExecuteContractProposal",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.runAs !== "") {
      writer.uint32(26).string(message.runAs);
    }
    if (message.contract !== "") {
      writer.uint32(34).string(message.contract);
    }
    if (message.msg.length !== 0) {
      writer.uint32(42).bytes(message.msg);
    }
    for (const v of message.funds) {
      import_coin.Coin.encode(v, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseExecuteContractProposal();
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
          message.runAs = reader.string();
          break;
        case 4:
          message.contract = reader.string();
          break;
        case 5:
          message.msg = reader.bytes();
          break;
        case 6:
          message.funds.push(import_coin.Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseExecuteContractProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.runAs = object.runAs ?? "";
    message.contract = object.contract ?? "";
    message.msg = object.msg ?? new Uint8Array();
    message.funds = object.funds?.map((e) => import_coin.Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseExecuteContractProposal();
    if (object.title !== void 0 && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== void 0 && object.description !== null) {
      message.description = object.description;
    }
    if (object.run_as !== void 0 && object.run_as !== null) {
      message.runAs = object.run_as;
    }
    if (object.contract !== void 0 && object.contract !== null) {
      message.contract = object.contract;
    }
    if (object.msg !== void 0 && object.msg !== null) {
      message.msg = (0, import_encoding.toUtf8)(JSON.stringify(object.msg));
    }
    message.funds = object.funds?.map((e) => import_coin.Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.title = message.title === "" ? void 0 : message.title;
    obj.description = message.description === "" ? void 0 : message.description;
    obj.run_as = message.runAs === "" ? void 0 : message.runAs;
    obj.contract = message.contract === "" ? void 0 : message.contract;
    obj.msg = message.msg ? JSON.parse((0, import_encoding.fromUtf8)(message.msg)) : void 0;
    if (message.funds) {
      obj.funds = message.funds.map((e) => e ? import_coin.Coin.toAmino(e) : void 0);
    } else {
      obj.funds = message.funds;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return ExecuteContractProposal.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "wasm/ExecuteContractProposal",
      value: ExecuteContractProposal.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return ExecuteContractProposal.decode(message.value);
  },
  toProto(message) {
    return ExecuteContractProposal.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmwasm.wasm.v1.ExecuteContractProposal",
      value: ExecuteContractProposal.encode(message).finish()
    };
  }
};
function createBaseUpdateAdminProposal() {
  return {
    $typeUrl: "/cosmwasm.wasm.v1.UpdateAdminProposal",
    title: "",
    description: "",
    newAdmin: "",
    contract: ""
  };
}
const UpdateAdminProposal = {
  typeUrl: "/cosmwasm.wasm.v1.UpdateAdminProposal",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.newAdmin !== "") {
      writer.uint32(26).string(message.newAdmin);
    }
    if (message.contract !== "") {
      writer.uint32(34).string(message.contract);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseUpdateAdminProposal();
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
          message.newAdmin = reader.string();
          break;
        case 4:
          message.contract = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseUpdateAdminProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.newAdmin = object.newAdmin ?? "";
    message.contract = object.contract ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseUpdateAdminProposal();
    if (object.title !== void 0 && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== void 0 && object.description !== null) {
      message.description = object.description;
    }
    if (object.new_admin !== void 0 && object.new_admin !== null) {
      message.newAdmin = object.new_admin;
    }
    if (object.contract !== void 0 && object.contract !== null) {
      message.contract = object.contract;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.title = message.title === "" ? void 0 : message.title;
    obj.description = message.description === "" ? void 0 : message.description;
    obj.new_admin = message.newAdmin === "" ? void 0 : message.newAdmin;
    obj.contract = message.contract === "" ? void 0 : message.contract;
    return obj;
  },
  fromAminoMsg(object) {
    return UpdateAdminProposal.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "wasm/UpdateAdminProposal",
      value: UpdateAdminProposal.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return UpdateAdminProposal.decode(message.value);
  },
  toProto(message) {
    return UpdateAdminProposal.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmwasm.wasm.v1.UpdateAdminProposal",
      value: UpdateAdminProposal.encode(message).finish()
    };
  }
};
function createBaseClearAdminProposal() {
  return {
    $typeUrl: "/cosmwasm.wasm.v1.ClearAdminProposal",
    title: "",
    description: "",
    contract: ""
  };
}
const ClearAdminProposal = {
  typeUrl: "/cosmwasm.wasm.v1.ClearAdminProposal",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.contract !== "") {
      writer.uint32(26).string(message.contract);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseClearAdminProposal();
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
          message.contract = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseClearAdminProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.contract = object.contract ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseClearAdminProposal();
    if (object.title !== void 0 && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== void 0 && object.description !== null) {
      message.description = object.description;
    }
    if (object.contract !== void 0 && object.contract !== null) {
      message.contract = object.contract;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.title = message.title === "" ? void 0 : message.title;
    obj.description = message.description === "" ? void 0 : message.description;
    obj.contract = message.contract === "" ? void 0 : message.contract;
    return obj;
  },
  fromAminoMsg(object) {
    return ClearAdminProposal.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "wasm/ClearAdminProposal",
      value: ClearAdminProposal.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return ClearAdminProposal.decode(message.value);
  },
  toProto(message) {
    return ClearAdminProposal.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmwasm.wasm.v1.ClearAdminProposal",
      value: ClearAdminProposal.encode(message).finish()
    };
  }
};
function createBasePinCodesProposal() {
  return {
    $typeUrl: "/cosmwasm.wasm.v1.PinCodesProposal",
    title: "",
    description: "",
    codeIds: []
  };
}
const PinCodesProposal = {
  typeUrl: "/cosmwasm.wasm.v1.PinCodesProposal",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    writer.uint32(26).fork();
    for (const v of message.codeIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBasePinCodesProposal();
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
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.codeIds.push(reader.uint64());
            }
          } else {
            message.codeIds.push(reader.uint64());
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
    const message = createBasePinCodesProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.codeIds = object.codeIds?.map((e) => BigInt(e.toString())) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBasePinCodesProposal();
    if (object.title !== void 0 && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== void 0 && object.description !== null) {
      message.description = object.description;
    }
    message.codeIds = object.code_ids?.map((e) => BigInt(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.title = message.title === "" ? void 0 : message.title;
    obj.description = message.description === "" ? void 0 : message.description;
    if (message.codeIds) {
      obj.code_ids = message.codeIds.map((e) => e.toString());
    } else {
      obj.code_ids = message.codeIds;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return PinCodesProposal.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "wasm/PinCodesProposal",
      value: PinCodesProposal.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return PinCodesProposal.decode(message.value);
  },
  toProto(message) {
    return PinCodesProposal.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmwasm.wasm.v1.PinCodesProposal",
      value: PinCodesProposal.encode(message).finish()
    };
  }
};
function createBaseUnpinCodesProposal() {
  return {
    $typeUrl: "/cosmwasm.wasm.v1.UnpinCodesProposal",
    title: "",
    description: "",
    codeIds: []
  };
}
const UnpinCodesProposal = {
  typeUrl: "/cosmwasm.wasm.v1.UnpinCodesProposal",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    writer.uint32(26).fork();
    for (const v of message.codeIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseUnpinCodesProposal();
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
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.codeIds.push(reader.uint64());
            }
          } else {
            message.codeIds.push(reader.uint64());
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
    const message = createBaseUnpinCodesProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.codeIds = object.codeIds?.map((e) => BigInt(e.toString())) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseUnpinCodesProposal();
    if (object.title !== void 0 && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== void 0 && object.description !== null) {
      message.description = object.description;
    }
    message.codeIds = object.code_ids?.map((e) => BigInt(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.title = message.title === "" ? void 0 : message.title;
    obj.description = message.description === "" ? void 0 : message.description;
    if (message.codeIds) {
      obj.code_ids = message.codeIds.map((e) => e.toString());
    } else {
      obj.code_ids = message.codeIds;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return UnpinCodesProposal.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "wasm/UnpinCodesProposal",
      value: UnpinCodesProposal.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return UnpinCodesProposal.decode(message.value);
  },
  toProto(message) {
    return UnpinCodesProposal.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmwasm.wasm.v1.UnpinCodesProposal",
      value: UnpinCodesProposal.encode(message).finish()
    };
  }
};
function createBaseAccessConfigUpdate() {
  return {
    codeId: BigInt(0),
    instantiatePermission: import_types.AccessConfig.fromPartial({})
  };
}
const AccessConfigUpdate = {
  typeUrl: "/cosmwasm.wasm.v1.AccessConfigUpdate",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.codeId !== BigInt(0)) {
      writer.uint32(8).uint64(message.codeId);
    }
    if (message.instantiatePermission !== void 0) {
      import_types.AccessConfig.encode(message.instantiatePermission, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseAccessConfigUpdate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.codeId = reader.uint64();
          break;
        case 2:
          message.instantiatePermission = import_types.AccessConfig.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseAccessConfigUpdate();
    message.codeId = object.codeId !== void 0 && object.codeId !== null ? BigInt(object.codeId.toString()) : BigInt(0);
    message.instantiatePermission = object.instantiatePermission !== void 0 && object.instantiatePermission !== null ? import_types.AccessConfig.fromPartial(object.instantiatePermission) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseAccessConfigUpdate();
    if (object.code_id !== void 0 && object.code_id !== null) {
      message.codeId = BigInt(object.code_id);
    }
    if (object.instantiate_permission !== void 0 && object.instantiate_permission !== null) {
      message.instantiatePermission = import_types.AccessConfig.fromAmino(object.instantiate_permission);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.code_id = message.codeId !== BigInt(0) ? message.codeId?.toString() : void 0;
    obj.instantiate_permission = message.instantiatePermission ? import_types.AccessConfig.toAmino(message.instantiatePermission) : import_types.AccessConfig.toAmino(import_types.AccessConfig.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object) {
    return AccessConfigUpdate.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "wasm/AccessConfigUpdate",
      value: AccessConfigUpdate.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return AccessConfigUpdate.decode(message.value);
  },
  toProto(message) {
    return AccessConfigUpdate.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmwasm.wasm.v1.AccessConfigUpdate",
      value: AccessConfigUpdate.encode(message).finish()
    };
  }
};
function createBaseUpdateInstantiateConfigProposal() {
  return {
    $typeUrl: "/cosmwasm.wasm.v1.UpdateInstantiateConfigProposal",
    title: "",
    description: "",
    accessConfigUpdates: []
  };
}
const UpdateInstantiateConfigProposal = {
  typeUrl: "/cosmwasm.wasm.v1.UpdateInstantiateConfigProposal",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    for (const v of message.accessConfigUpdates) {
      AccessConfigUpdate.encode(v, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseUpdateInstantiateConfigProposal();
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
          message.accessConfigUpdates.push(AccessConfigUpdate.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseUpdateInstantiateConfigProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.accessConfigUpdates = object.accessConfigUpdates?.map((e) => AccessConfigUpdate.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseUpdateInstantiateConfigProposal();
    if (object.title !== void 0 && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== void 0 && object.description !== null) {
      message.description = object.description;
    }
    message.accessConfigUpdates = object.access_config_updates?.map((e) => AccessConfigUpdate.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.title = message.title === "" ? void 0 : message.title;
    obj.description = message.description === "" ? void 0 : message.description;
    if (message.accessConfigUpdates) {
      obj.access_config_updates = message.accessConfigUpdates.map((e) => e ? AccessConfigUpdate.toAmino(e) : void 0);
    } else {
      obj.access_config_updates = message.accessConfigUpdates;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return UpdateInstantiateConfigProposal.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "wasm/UpdateInstantiateConfigProposal",
      value: UpdateInstantiateConfigProposal.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return UpdateInstantiateConfigProposal.decode(message.value);
  },
  toProto(message) {
    return UpdateInstantiateConfigProposal.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmwasm.wasm.v1.UpdateInstantiateConfigProposal",
      value: UpdateInstantiateConfigProposal.encode(message).finish()
    };
  }
};
function createBaseStoreAndInstantiateContractProposal() {
  return {
    $typeUrl: "/cosmwasm.wasm.v1.StoreAndInstantiateContractProposal",
    title: "",
    description: "",
    runAs: "",
    wasmByteCode: new Uint8Array(),
    instantiatePermission: void 0,
    unpinCode: false,
    admin: "",
    label: "",
    msg: new Uint8Array(),
    funds: [],
    source: "",
    builder: "",
    codeHash: new Uint8Array()
  };
}
const StoreAndInstantiateContractProposal = {
  typeUrl: "/cosmwasm.wasm.v1.StoreAndInstantiateContractProposal",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.runAs !== "") {
      writer.uint32(26).string(message.runAs);
    }
    if (message.wasmByteCode.length !== 0) {
      writer.uint32(34).bytes(message.wasmByteCode);
    }
    if (message.instantiatePermission !== void 0) {
      import_types.AccessConfig.encode(message.instantiatePermission, writer.uint32(42).fork()).ldelim();
    }
    if (message.unpinCode === true) {
      writer.uint32(48).bool(message.unpinCode);
    }
    if (message.admin !== "") {
      writer.uint32(58).string(message.admin);
    }
    if (message.label !== "") {
      writer.uint32(66).string(message.label);
    }
    if (message.msg.length !== 0) {
      writer.uint32(74).bytes(message.msg);
    }
    for (const v of message.funds) {
      import_coin.Coin.encode(v, writer.uint32(82).fork()).ldelim();
    }
    if (message.source !== "") {
      writer.uint32(90).string(message.source);
    }
    if (message.builder !== "") {
      writer.uint32(98).string(message.builder);
    }
    if (message.codeHash.length !== 0) {
      writer.uint32(106).bytes(message.codeHash);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseStoreAndInstantiateContractProposal();
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
          message.runAs = reader.string();
          break;
        case 4:
          message.wasmByteCode = reader.bytes();
          break;
        case 5:
          message.instantiatePermission = import_types.AccessConfig.decode(reader, reader.uint32());
          break;
        case 6:
          message.unpinCode = reader.bool();
          break;
        case 7:
          message.admin = reader.string();
          break;
        case 8:
          message.label = reader.string();
          break;
        case 9:
          message.msg = reader.bytes();
          break;
        case 10:
          message.funds.push(import_coin.Coin.decode(reader, reader.uint32()));
          break;
        case 11:
          message.source = reader.string();
          break;
        case 12:
          message.builder = reader.string();
          break;
        case 13:
          message.codeHash = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseStoreAndInstantiateContractProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.runAs = object.runAs ?? "";
    message.wasmByteCode = object.wasmByteCode ?? new Uint8Array();
    message.instantiatePermission = object.instantiatePermission !== void 0 && object.instantiatePermission !== null ? import_types.AccessConfig.fromPartial(object.instantiatePermission) : void 0;
    message.unpinCode = object.unpinCode ?? false;
    message.admin = object.admin ?? "";
    message.label = object.label ?? "";
    message.msg = object.msg ?? new Uint8Array();
    message.funds = object.funds?.map((e) => import_coin.Coin.fromPartial(e)) || [];
    message.source = object.source ?? "";
    message.builder = object.builder ?? "";
    message.codeHash = object.codeHash ?? new Uint8Array();
    return message;
  },
  fromAmino(object) {
    const message = createBaseStoreAndInstantiateContractProposal();
    if (object.title !== void 0 && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== void 0 && object.description !== null) {
      message.description = object.description;
    }
    if (object.run_as !== void 0 && object.run_as !== null) {
      message.runAs = object.run_as;
    }
    if (object.wasm_byte_code !== void 0 && object.wasm_byte_code !== null) {
      message.wasmByteCode = (0, import_encoding.fromBase64)(object.wasm_byte_code);
    }
    if (object.instantiate_permission !== void 0 && object.instantiate_permission !== null) {
      message.instantiatePermission = import_types.AccessConfig.fromAmino(object.instantiate_permission);
    }
    if (object.unpin_code !== void 0 && object.unpin_code !== null) {
      message.unpinCode = object.unpin_code;
    }
    if (object.admin !== void 0 && object.admin !== null) {
      message.admin = object.admin;
    }
    if (object.label !== void 0 && object.label !== null) {
      message.label = object.label;
    }
    if (object.msg !== void 0 && object.msg !== null) {
      message.msg = (0, import_encoding.toUtf8)(JSON.stringify(object.msg));
    }
    message.funds = object.funds?.map((e) => import_coin.Coin.fromAmino(e)) || [];
    if (object.source !== void 0 && object.source !== null) {
      message.source = object.source;
    }
    if (object.builder !== void 0 && object.builder !== null) {
      message.builder = object.builder;
    }
    if (object.code_hash !== void 0 && object.code_hash !== null) {
      message.codeHash = (0, import_helpers.bytesFromBase64)(object.code_hash);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.title = message.title === "" ? void 0 : message.title;
    obj.description = message.description === "" ? void 0 : message.description;
    obj.run_as = message.runAs === "" ? void 0 : message.runAs;
    obj.wasm_byte_code = message.wasmByteCode ? (0, import_encoding.toBase64)(message.wasmByteCode) : void 0;
    obj.instantiate_permission = message.instantiatePermission ? import_types.AccessConfig.toAmino(message.instantiatePermission) : void 0;
    obj.unpin_code = message.unpinCode === false ? void 0 : message.unpinCode;
    obj.admin = message.admin === "" ? void 0 : message.admin;
    obj.label = message.label === "" ? void 0 : message.label;
    obj.msg = message.msg ? JSON.parse((0, import_encoding.fromUtf8)(message.msg)) : void 0;
    if (message.funds) {
      obj.funds = message.funds.map((e) => e ? import_coin.Coin.toAmino(e) : void 0);
    } else {
      obj.funds = message.funds;
    }
    obj.source = message.source === "" ? void 0 : message.source;
    obj.builder = message.builder === "" ? void 0 : message.builder;
    obj.code_hash = message.codeHash ? (0, import_helpers.base64FromBytes)(message.codeHash) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return StoreAndInstantiateContractProposal.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "wasm/StoreAndInstantiateContractProposal",
      value: StoreAndInstantiateContractProposal.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return StoreAndInstantiateContractProposal.decode(message.value);
  },
  toProto(message) {
    return StoreAndInstantiateContractProposal.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmwasm.wasm.v1.StoreAndInstantiateContractProposal",
      value: StoreAndInstantiateContractProposal.encode(message).finish()
    };
  }
};
// Proper CommonJS exports for dynamic imports
module.exports = {
  AccessConfigUpdate,
  ClearAdminProposal,
  ExecuteContractProposal,
  InstantiateContract2Proposal,
  InstantiateContractProposal,
  MigrateContractProposal,
  PinCodesProposal,
  StoreAndInstantiateContractProposal,
  StoreCodeProposal,
  SudoContractProposal,
  UnpinCodesProposal,
  UpdateAdminProposal,
  UpdateInstantiateConfigProposal
};
