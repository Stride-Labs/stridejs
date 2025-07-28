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
var block_exports = {};
__export(block_exports, {
  Block: () => Block
});
module.exports = __toCommonJS(block_exports);
var import_types = require("./types");
var import_evidence = require("./evidence");
var import_binary = require("../../binary");
function createBaseBlock() {
  return {
    header: import_types.Header.fromPartial({}),
    data: import_types.Data.fromPartial({}),
    evidence: import_evidence.EvidenceList.fromPartial({}),
    lastCommit: void 0
  };
}
const Block = {
  typeUrl: "/tendermint.types.Block",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.header !== void 0) {
      import_types.Header.encode(message.header, writer.uint32(10).fork()).ldelim();
    }
    if (message.data !== void 0) {
      import_types.Data.encode(message.data, writer.uint32(18).fork()).ldelim();
    }
    if (message.evidence !== void 0) {
      import_evidence.EvidenceList.encode(message.evidence, writer.uint32(26).fork()).ldelim();
    }
    if (message.lastCommit !== void 0) {
      import_types.Commit.encode(message.lastCommit, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseBlock();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.header = import_types.Header.decode(reader, reader.uint32());
          break;
        case 2:
          message.data = import_types.Data.decode(reader, reader.uint32());
          break;
        case 3:
          message.evidence = import_evidence.EvidenceList.decode(reader, reader.uint32());
          break;
        case 4:
          message.lastCommit = import_types.Commit.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseBlock();
    message.header = object.header !== void 0 && object.header !== null ? import_types.Header.fromPartial(object.header) : void 0;
    message.data = object.data !== void 0 && object.data !== null ? import_types.Data.fromPartial(object.data) : void 0;
    message.evidence = object.evidence !== void 0 && object.evidence !== null ? import_evidence.EvidenceList.fromPartial(object.evidence) : void 0;
    message.lastCommit = object.lastCommit !== void 0 && object.lastCommit !== null ? import_types.Commit.fromPartial(object.lastCommit) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseBlock();
    if (object.header !== void 0 && object.header !== null) {
      message.header = import_types.Header.fromAmino(object.header);
    }
    if (object.data !== void 0 && object.data !== null) {
      message.data = import_types.Data.fromAmino(object.data);
    }
    if (object.evidence !== void 0 && object.evidence !== null) {
      message.evidence = import_evidence.EvidenceList.fromAmino(object.evidence);
    }
    if (object.last_commit !== void 0 && object.last_commit !== null) {
      message.lastCommit = import_types.Commit.fromAmino(object.last_commit);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.header = message.header ? import_types.Header.toAmino(message.header) : void 0;
    obj.data = message.data ? import_types.Data.toAmino(message.data) : void 0;
    obj.evidence = message.evidence ? import_evidence.EvidenceList.toAmino(message.evidence) : void 0;
    obj.last_commit = message.lastCommit ? import_types.Commit.toAmino(message.lastCommit) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return Block.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return Block.decode(message.value);
  },
  toProto(message) {
    return Block.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/tendermint.types.Block",
      value: Block.encode(message).finish()
    };
  }
};
// Proper CommonJS exports for dynamic imports
module.exports = {
  Block
};
