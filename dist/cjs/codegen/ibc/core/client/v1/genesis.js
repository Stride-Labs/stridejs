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
  GenesisMetadata: () => GenesisMetadata,
  GenesisState: () => GenesisState,
  IdentifiedGenesisMetadata: () => IdentifiedGenesisMetadata
});
module.exports = __toCommonJS(genesis_exports);
var import_client = require("./client");
var import_binary = require("../../../../binary");
var import_helpers = require("../../../../helpers");
function createBaseGenesisState() {
  return {
    clients: [],
    clientsConsensus: [],
    clientsMetadata: [],
    params: import_client.Params.fromPartial({}),
    createLocalhost: false,
    nextClientSequence: BigInt(0)
  };
}
const GenesisState = {
  typeUrl: "/ibc.core.client.v1.GenesisState",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    for (const v of message.clients) {
      import_client.IdentifiedClientState.encode(v, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.clientsConsensus) {
      import_client.ClientConsensusStates.encode(v, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.clientsMetadata) {
      IdentifiedGenesisMetadata.encode(v, writer.uint32(26).fork()).ldelim();
    }
    if (message.params !== void 0) {
      import_client.Params.encode(message.params, writer.uint32(34).fork()).ldelim();
    }
    if (message.createLocalhost === true) {
      writer.uint32(40).bool(message.createLocalhost);
    }
    if (message.nextClientSequence !== BigInt(0)) {
      writer.uint32(48).uint64(message.nextClientSequence);
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
          message.clients.push(import_client.IdentifiedClientState.decode(reader, reader.uint32()));
          break;
        case 2:
          message.clientsConsensus.push(import_client.ClientConsensusStates.decode(reader, reader.uint32()));
          break;
        case 3:
          message.clientsMetadata.push(IdentifiedGenesisMetadata.decode(reader, reader.uint32()));
          break;
        case 4:
          message.params = import_client.Params.decode(reader, reader.uint32());
          break;
        case 5:
          message.createLocalhost = reader.bool();
          break;
        case 6:
          message.nextClientSequence = reader.uint64();
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
    message.clients = object.clients?.map((e) => import_client.IdentifiedClientState.fromPartial(e)) || [];
    message.clientsConsensus = object.clientsConsensus?.map((e) => import_client.ClientConsensusStates.fromPartial(e)) || [];
    message.clientsMetadata = object.clientsMetadata?.map((e) => IdentifiedGenesisMetadata.fromPartial(e)) || [];
    message.params = object.params !== void 0 && object.params !== null ? import_client.Params.fromPartial(object.params) : void 0;
    message.createLocalhost = object.createLocalhost ?? false;
    message.nextClientSequence = object.nextClientSequence !== void 0 && object.nextClientSequence !== null ? BigInt(object.nextClientSequence.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object) {
    const message = createBaseGenesisState();
    message.clients = object.clients?.map((e) => import_client.IdentifiedClientState.fromAmino(e)) || [];
    message.clientsConsensus = object.clients_consensus?.map((e) => import_client.ClientConsensusStates.fromAmino(e)) || [];
    message.clientsMetadata = object.clients_metadata?.map((e) => IdentifiedGenesisMetadata.fromAmino(e)) || [];
    if (object.params !== void 0 && object.params !== null) {
      message.params = import_client.Params.fromAmino(object.params);
    }
    if (object.create_localhost !== void 0 && object.create_localhost !== null) {
      message.createLocalhost = object.create_localhost;
    }
    if (object.next_client_sequence !== void 0 && object.next_client_sequence !== null) {
      message.nextClientSequence = BigInt(object.next_client_sequence);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.clients) {
      obj.clients = message.clients.map((e) => e ? import_client.IdentifiedClientState.toAmino(e) : void 0);
    } else {
      obj.clients = message.clients;
    }
    if (message.clientsConsensus) {
      obj.clients_consensus = message.clientsConsensus.map((e) => e ? import_client.ClientConsensusStates.toAmino(e) : void 0);
    } else {
      obj.clients_consensus = message.clientsConsensus;
    }
    if (message.clientsMetadata) {
      obj.clients_metadata = message.clientsMetadata.map((e) => e ? IdentifiedGenesisMetadata.toAmino(e) : void 0);
    } else {
      obj.clients_metadata = message.clientsMetadata;
    }
    obj.params = message.params ? import_client.Params.toAmino(message.params) : void 0;
    obj.create_localhost = message.createLocalhost === false ? void 0 : message.createLocalhost;
    obj.next_client_sequence = message.nextClientSequence !== BigInt(0) ? message.nextClientSequence.toString() : void 0;
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
      typeUrl: "/ibc.core.client.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
function createBaseGenesisMetadata() {
  return {
    key: new Uint8Array(),
    value: new Uint8Array()
  };
}
const GenesisMetadata = {
  typeUrl: "/ibc.core.client.v1.GenesisMetadata",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.key.length !== 0) {
      writer.uint32(10).bytes(message.key);
    }
    if (message.value.length !== 0) {
      writer.uint32(18).bytes(message.value);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseGenesisMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.bytes();
          break;
        case 2:
          message.value = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseGenesisMetadata();
    message.key = object.key ?? new Uint8Array();
    message.value = object.value ?? new Uint8Array();
    return message;
  },
  fromAmino(object) {
    const message = createBaseGenesisMetadata();
    if (object.key !== void 0 && object.key !== null) {
      message.key = (0, import_helpers.bytesFromBase64)(object.key);
    }
    if (object.value !== void 0 && object.value !== null) {
      message.value = (0, import_helpers.bytesFromBase64)(object.value);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.key = message.key ? (0, import_helpers.base64FromBytes)(message.key) : void 0;
    obj.value = message.value ? (0, import_helpers.base64FromBytes)(message.value) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return GenesisMetadata.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/GenesisMetadata",
      value: GenesisMetadata.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return GenesisMetadata.decode(message.value);
  },
  toProto(message) {
    return GenesisMetadata.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.core.client.v1.GenesisMetadata",
      value: GenesisMetadata.encode(message).finish()
    };
  }
};
function createBaseIdentifiedGenesisMetadata() {
  return {
    clientId: "",
    clientMetadata: []
  };
}
const IdentifiedGenesisMetadata = {
  typeUrl: "/ibc.core.client.v1.IdentifiedGenesisMetadata",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }
    for (const v of message.clientMetadata) {
      GenesisMetadata.encode(v, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseIdentifiedGenesisMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;
        case 2:
          message.clientMetadata.push(GenesisMetadata.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseIdentifiedGenesisMetadata();
    message.clientId = object.clientId ?? "";
    message.clientMetadata = object.clientMetadata?.map((e) => GenesisMetadata.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseIdentifiedGenesisMetadata();
    if (object.client_id !== void 0 && object.client_id !== null) {
      message.clientId = object.client_id;
    }
    message.clientMetadata = object.client_metadata?.map((e) => GenesisMetadata.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.client_id = message.clientId === "" ? void 0 : message.clientId;
    if (message.clientMetadata) {
      obj.client_metadata = message.clientMetadata.map((e) => e ? GenesisMetadata.toAmino(e) : void 0);
    } else {
      obj.client_metadata = message.clientMetadata;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return IdentifiedGenesisMetadata.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/IdentifiedGenesisMetadata",
      value: IdentifiedGenesisMetadata.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return IdentifiedGenesisMetadata.decode(message.value);
  },
  toProto(message) {
    return IdentifiedGenesisMetadata.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.core.client.v1.IdentifiedGenesisMetadata",
      value: IdentifiedGenesisMetadata.encode(message).finish()
    };
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  GenesisMetadata,
  GenesisState,
  IdentifiedGenesisMetadata
});
