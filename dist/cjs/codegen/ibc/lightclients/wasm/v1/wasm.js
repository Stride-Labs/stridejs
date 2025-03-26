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
var wasm_exports = {};
__export(wasm_exports, {
  Checksums: () => Checksums,
  ClientMessage: () => ClientMessage,
  ClientState: () => ClientState,
  ConsensusState: () => ConsensusState
});
module.exports = __toCommonJS(wasm_exports);
var import_client = require("../../../core/client/v1/client");
var import_binary = require("../../../../binary");
var import_helpers = require("../../../../helpers");
function createBaseClientState() {
  return {
    data: new Uint8Array(),
    checksum: new Uint8Array(),
    latestHeight: import_client.Height.fromPartial({})
  };
}
const ClientState = {
  typeUrl: "/ibc.lightclients.wasm.v1.ClientState",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }
    if (message.checksum.length !== 0) {
      writer.uint32(18).bytes(message.checksum);
    }
    if (message.latestHeight !== void 0) {
      import_client.Height.encode(message.latestHeight, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseClientState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = reader.bytes();
          break;
        case 2:
          message.checksum = reader.bytes();
          break;
        case 3:
          message.latestHeight = import_client.Height.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseClientState();
    message.data = object.data ?? new Uint8Array();
    message.checksum = object.checksum ?? new Uint8Array();
    message.latestHeight = object.latestHeight !== void 0 && object.latestHeight !== null ? import_client.Height.fromPartial(object.latestHeight) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseClientState();
    if (object.data !== void 0 && object.data !== null) {
      message.data = (0, import_helpers.bytesFromBase64)(object.data);
    }
    if (object.checksum !== void 0 && object.checksum !== null) {
      message.checksum = (0, import_helpers.bytesFromBase64)(object.checksum);
    }
    if (object.latest_height !== void 0 && object.latest_height !== null) {
      message.latestHeight = import_client.Height.fromAmino(object.latest_height);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.data = message.data ? (0, import_helpers.base64FromBytes)(message.data) : void 0;
    obj.checksum = message.checksum ? (0, import_helpers.base64FromBytes)(message.checksum) : void 0;
    obj.latest_height = message.latestHeight ? import_client.Height.toAmino(message.latestHeight) : {};
    return obj;
  },
  fromAminoMsg(object) {
    return ClientState.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/ClientState",
      value: ClientState.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return ClientState.decode(message.value);
  },
  toProto(message) {
    return ClientState.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.lightclients.wasm.v1.ClientState",
      value: ClientState.encode(message).finish()
    };
  }
};
function createBaseConsensusState() {
  return {
    data: new Uint8Array()
  };
}
const ConsensusState = {
  typeUrl: "/ibc.lightclients.wasm.v1.ConsensusState",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseConsensusState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseConsensusState();
    message.data = object.data ?? new Uint8Array();
    return message;
  },
  fromAmino(object) {
    const message = createBaseConsensusState();
    if (object.data !== void 0 && object.data !== null) {
      message.data = (0, import_helpers.bytesFromBase64)(object.data);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.data = message.data ? (0, import_helpers.base64FromBytes)(message.data) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return ConsensusState.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/ConsensusState",
      value: ConsensusState.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return ConsensusState.decode(message.value);
  },
  toProto(message) {
    return ConsensusState.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.lightclients.wasm.v1.ConsensusState",
      value: ConsensusState.encode(message).finish()
    };
  }
};
function createBaseClientMessage() {
  return {
    data: new Uint8Array()
  };
}
const ClientMessage = {
  typeUrl: "/ibc.lightclients.wasm.v1.ClientMessage",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseClientMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseClientMessage();
    message.data = object.data ?? new Uint8Array();
    return message;
  },
  fromAmino(object) {
    const message = createBaseClientMessage();
    if (object.data !== void 0 && object.data !== null) {
      message.data = (0, import_helpers.bytesFromBase64)(object.data);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.data = message.data ? (0, import_helpers.base64FromBytes)(message.data) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return ClientMessage.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/ClientMessage",
      value: ClientMessage.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return ClientMessage.decode(message.value);
  },
  toProto(message) {
    return ClientMessage.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.lightclients.wasm.v1.ClientMessage",
      value: ClientMessage.encode(message).finish()
    };
  }
};
function createBaseChecksums() {
  return {
    checksums: []
  };
}
const Checksums = {
  typeUrl: "/ibc.lightclients.wasm.v1.Checksums",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    for (const v of message.checksums) {
      writer.uint32(10).bytes(v);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseChecksums();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.checksums.push(reader.bytes());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseChecksums();
    message.checksums = object.checksums?.map((e) => e) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseChecksums();
    message.checksums = object.checksums?.map((e) => (0, import_helpers.bytesFromBase64)(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.checksums) {
      obj.checksums = message.checksums.map((e) => (0, import_helpers.base64FromBytes)(e));
    } else {
      obj.checksums = message.checksums;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return Checksums.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/Checksums",
      value: Checksums.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return Checksums.decode(message.value);
  },
  toProto(message) {
    return Checksums.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.lightclients.wasm.v1.Checksums",
      value: Checksums.encode(message).finish()
    };
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Checksums,
  ClientMessage,
  ClientState,
  ConsensusState
});
