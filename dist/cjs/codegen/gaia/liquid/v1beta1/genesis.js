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
  GenesisState: () => GenesisState,
  TokenizeShareLock: () => TokenizeShareLock
});
module.exports = __toCommonJS(genesis_exports);
var import_liquid = require("./liquid");
var import_timestamp = require("../../../google/protobuf/timestamp");
var import_binary = require("../../../binary");
var import_helpers = require("../../../helpers");
function createBaseGenesisState() {
  return {
    params: import_liquid.Params.fromPartial({}),
    tokenizeShareRecords: [],
    lastTokenizeShareRecordId: BigInt(0),
    totalLiquidStakedTokens: new Uint8Array(),
    tokenizeShareLocks: []
  };
}
const GenesisState = {
  typeUrl: "/gaia.liquid.v1beta1.GenesisState",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.params !== void 0) {
      import_liquid.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.tokenizeShareRecords) {
      import_liquid.TokenizeShareRecord.encode(v, writer.uint32(74).fork()).ldelim();
    }
    if (message.lastTokenizeShareRecordId !== BigInt(0)) {
      writer.uint32(80).uint64(message.lastTokenizeShareRecordId);
    }
    if (message.totalLiquidStakedTokens.length !== 0) {
      writer.uint32(90).bytes(message.totalLiquidStakedTokens);
    }
    for (const v of message.tokenizeShareLocks) {
      TokenizeShareLock.encode(v, writer.uint32(98).fork()).ldelim();
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
          message.params = import_liquid.Params.decode(reader, reader.uint32());
          break;
        case 9:
          message.tokenizeShareRecords.push(import_liquid.TokenizeShareRecord.decode(reader, reader.uint32()));
          break;
        case 10:
          message.lastTokenizeShareRecordId = reader.uint64();
          break;
        case 11:
          message.totalLiquidStakedTokens = reader.bytes();
          break;
        case 12:
          message.tokenizeShareLocks.push(TokenizeShareLock.decode(reader, reader.uint32()));
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
    message.params = object.params !== void 0 && object.params !== null ? import_liquid.Params.fromPartial(object.params) : void 0;
    message.tokenizeShareRecords = object.tokenizeShareRecords?.map((e) => import_liquid.TokenizeShareRecord.fromPartial(e)) || [];
    message.lastTokenizeShareRecordId = object.lastTokenizeShareRecordId !== void 0 && object.lastTokenizeShareRecordId !== null ? BigInt(object.lastTokenizeShareRecordId.toString()) : BigInt(0);
    message.totalLiquidStakedTokens = object.totalLiquidStakedTokens ?? new Uint8Array();
    message.tokenizeShareLocks = object.tokenizeShareLocks?.map((e) => TokenizeShareLock.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseGenesisState();
    if (object.params !== void 0 && object.params !== null) {
      message.params = import_liquid.Params.fromAmino(object.params);
    }
    message.tokenizeShareRecords = object.tokenize_share_records?.map((e) => import_liquid.TokenizeShareRecord.fromAmino(e)) || [];
    if (object.last_tokenize_share_record_id !== void 0 && object.last_tokenize_share_record_id !== null) {
      message.lastTokenizeShareRecordId = BigInt(object.last_tokenize_share_record_id);
    }
    if (object.total_liquid_staked_tokens !== void 0 && object.total_liquid_staked_tokens !== null) {
      message.totalLiquidStakedTokens = (0, import_helpers.bytesFromBase64)(object.total_liquid_staked_tokens);
    }
    message.tokenizeShareLocks = object.tokenize_share_locks?.map((e) => TokenizeShareLock.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.params = message.params ? import_liquid.Params.toAmino(message.params) : import_liquid.Params.toAmino(import_liquid.Params.fromPartial({}));
    if (message.tokenizeShareRecords) {
      obj.tokenize_share_records = message.tokenizeShareRecords.map((e) => e ? import_liquid.TokenizeShareRecord.toAmino(e) : void 0);
    } else {
      obj.tokenize_share_records = message.tokenizeShareRecords;
    }
    obj.last_tokenize_share_record_id = message.lastTokenizeShareRecordId !== BigInt(0) ? message.lastTokenizeShareRecordId?.toString() : void 0;
    obj.total_liquid_staked_tokens = message.totalLiquidStakedTokens ? (0, import_helpers.base64FromBytes)(message.totalLiquidStakedTokens) : void 0;
    if (message.tokenizeShareLocks) {
      obj.tokenize_share_locks = message.tokenizeShareLocks.map((e) => e ? TokenizeShareLock.toAmino(e) : void 0);
    } else {
      obj.tokenize_share_locks = message.tokenizeShareLocks;
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
      typeUrl: "/gaia.liquid.v1beta1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
function createBaseTokenizeShareLock() {
  return {
    address: "",
    status: "",
    completionTime: /* @__PURE__ */ new Date()
  };
}
const TokenizeShareLock = {
  typeUrl: "/gaia.liquid.v1beta1.TokenizeShareLock",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.status !== "") {
      writer.uint32(18).string(message.status);
    }
    if (message.completionTime !== void 0) {
      import_timestamp.Timestamp.encode((0, import_helpers.toTimestamp)(message.completionTime), writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseTokenizeShareLock();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.status = reader.string();
          break;
        case 3:
          message.completionTime = (0, import_helpers.fromTimestamp)(import_timestamp.Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseTokenizeShareLock();
    message.address = object.address ?? "";
    message.status = object.status ?? "";
    message.completionTime = object.completionTime ?? void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseTokenizeShareLock();
    if (object.address !== void 0 && object.address !== null) {
      message.address = object.address;
    }
    if (object.status !== void 0 && object.status !== null) {
      message.status = object.status;
    }
    if (object.completion_time !== void 0 && object.completion_time !== null) {
      message.completionTime = (0, import_helpers.fromTimestamp)(import_timestamp.Timestamp.fromAmino(object.completion_time));
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.address = message.address === "" ? void 0 : message.address;
    obj.status = message.status === "" ? void 0 : message.status;
    obj.completion_time = message.completionTime ? import_timestamp.Timestamp.toAmino((0, import_helpers.toTimestamp)(message.completionTime)) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return TokenizeShareLock.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return TokenizeShareLock.decode(message.value);
  },
  toProto(message) {
    return TokenizeShareLock.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/gaia.liquid.v1beta1.TokenizeShareLock",
      value: TokenizeShareLock.encode(message).finish()
    };
  }
};
// Removed broken CommonJS export annotation
