import { MerklePrefix } from "../../commitment/v1/commitment";
import { BinaryReader, BinaryWriter } from "../../../../binary";
var State = /* @__PURE__ */ ((State2) => {
  State2[State2["STATE_UNINITIALIZED_UNSPECIFIED"] = 0] = "STATE_UNINITIALIZED_UNSPECIFIED";
  State2[State2["STATE_INIT"] = 1] = "STATE_INIT";
  State2[State2["STATE_TRYOPEN"] = 2] = "STATE_TRYOPEN";
  State2[State2["STATE_OPEN"] = 3] = "STATE_OPEN";
  State2[State2["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return State2;
})(State || {});
const StateSDKType = State;
const StateAmino = State;
function stateFromJSON(object) {
  switch (object) {
    case 0:
    case "STATE_UNINITIALIZED_UNSPECIFIED":
      return 0 /* STATE_UNINITIALIZED_UNSPECIFIED */;
    case 1:
    case "STATE_INIT":
      return 1 /* STATE_INIT */;
    case 2:
    case "STATE_TRYOPEN":
      return 2 /* STATE_TRYOPEN */;
    case 3:
    case "STATE_OPEN":
      return 3 /* STATE_OPEN */;
    case -1:
    case "UNRECOGNIZED":
    default:
      return -1 /* UNRECOGNIZED */;
  }
}
function stateToJSON(object) {
  switch (object) {
    case 0 /* STATE_UNINITIALIZED_UNSPECIFIED */:
      return "STATE_UNINITIALIZED_UNSPECIFIED";
    case 1 /* STATE_INIT */:
      return "STATE_INIT";
    case 2 /* STATE_TRYOPEN */:
      return "STATE_TRYOPEN";
    case 3 /* STATE_OPEN */:
      return "STATE_OPEN";
    case -1 /* UNRECOGNIZED */:
    default:
      return "UNRECOGNIZED";
  }
}
function createBaseConnectionEnd() {
  return {
    clientId: "",
    versions: [],
    state: 0,
    counterparty: Counterparty.fromPartial({}),
    delayPeriod: BigInt(0)
  };
}
const ConnectionEnd = {
  typeUrl: "/ibc.core.connection.v1.ConnectionEnd",
  encode(message, writer = BinaryWriter.create()) {
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }
    for (const v of message.versions) {
      Version.encode(v, writer.uint32(18).fork()).ldelim();
    }
    if (message.state !== 0) {
      writer.uint32(24).int32(message.state);
    }
    if (message.counterparty !== void 0) {
      Counterparty.encode(message.counterparty, writer.uint32(34).fork()).ldelim();
    }
    if (message.delayPeriod !== BigInt(0)) {
      writer.uint32(40).uint64(message.delayPeriod);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseConnectionEnd();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;
        case 2:
          message.versions.push(Version.decode(reader, reader.uint32()));
          break;
        case 3:
          message.state = reader.int32();
          break;
        case 4:
          message.counterparty = Counterparty.decode(reader, reader.uint32());
          break;
        case 5:
          message.delayPeriod = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseConnectionEnd();
    message.clientId = object.clientId ?? "";
    message.versions = object.versions?.map((e) => Version.fromPartial(e)) || [];
    message.state = object.state ?? 0;
    message.counterparty = object.counterparty !== void 0 && object.counterparty !== null ? Counterparty.fromPartial(object.counterparty) : void 0;
    message.delayPeriod = object.delayPeriod !== void 0 && object.delayPeriod !== null ? BigInt(object.delayPeriod.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object) {
    const message = createBaseConnectionEnd();
    if (object.client_id !== void 0 && object.client_id !== null) {
      message.clientId = object.client_id;
    }
    message.versions = object.versions?.map((e) => Version.fromAmino(e)) || [];
    if (object.state !== void 0 && object.state !== null) {
      message.state = object.state;
    }
    if (object.counterparty !== void 0 && object.counterparty !== null) {
      message.counterparty = Counterparty.fromAmino(object.counterparty);
    }
    if (object.delay_period !== void 0 && object.delay_period !== null) {
      message.delayPeriod = BigInt(object.delay_period);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.client_id = message.clientId === "" ? void 0 : message.clientId;
    if (message.versions) {
      obj.versions = message.versions.map((e) => e ? Version.toAmino(e) : void 0);
    } else {
      obj.versions = message.versions;
    }
    obj.state = message.state === 0 ? void 0 : message.state;
    obj.counterparty = message.counterparty ? Counterparty.toAmino(message.counterparty) : void 0;
    obj.delay_period = message.delayPeriod !== BigInt(0) ? message.delayPeriod.toString() : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return ConnectionEnd.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/ConnectionEnd",
      value: ConnectionEnd.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return ConnectionEnd.decode(message.value);
  },
  toProto(message) {
    return ConnectionEnd.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.core.connection.v1.ConnectionEnd",
      value: ConnectionEnd.encode(message).finish()
    };
  }
};
function createBaseIdentifiedConnection() {
  return {
    id: "",
    clientId: "",
    versions: [],
    state: 0,
    counterparty: Counterparty.fromPartial({}),
    delayPeriod: BigInt(0)
  };
}
const IdentifiedConnection = {
  typeUrl: "/ibc.core.connection.v1.IdentifiedConnection",
  encode(message, writer = BinaryWriter.create()) {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.clientId !== "") {
      writer.uint32(18).string(message.clientId);
    }
    for (const v of message.versions) {
      Version.encode(v, writer.uint32(26).fork()).ldelim();
    }
    if (message.state !== 0) {
      writer.uint32(32).int32(message.state);
    }
    if (message.counterparty !== void 0) {
      Counterparty.encode(message.counterparty, writer.uint32(42).fork()).ldelim();
    }
    if (message.delayPeriod !== BigInt(0)) {
      writer.uint32(48).uint64(message.delayPeriod);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseIdentifiedConnection();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.clientId = reader.string();
          break;
        case 3:
          message.versions.push(Version.decode(reader, reader.uint32()));
          break;
        case 4:
          message.state = reader.int32();
          break;
        case 5:
          message.counterparty = Counterparty.decode(reader, reader.uint32());
          break;
        case 6:
          message.delayPeriod = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseIdentifiedConnection();
    message.id = object.id ?? "";
    message.clientId = object.clientId ?? "";
    message.versions = object.versions?.map((e) => Version.fromPartial(e)) || [];
    message.state = object.state ?? 0;
    message.counterparty = object.counterparty !== void 0 && object.counterparty !== null ? Counterparty.fromPartial(object.counterparty) : void 0;
    message.delayPeriod = object.delayPeriod !== void 0 && object.delayPeriod !== null ? BigInt(object.delayPeriod.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object) {
    const message = createBaseIdentifiedConnection();
    if (object.id !== void 0 && object.id !== null) {
      message.id = object.id;
    }
    if (object.client_id !== void 0 && object.client_id !== null) {
      message.clientId = object.client_id;
    }
    message.versions = object.versions?.map((e) => Version.fromAmino(e)) || [];
    if (object.state !== void 0 && object.state !== null) {
      message.state = object.state;
    }
    if (object.counterparty !== void 0 && object.counterparty !== null) {
      message.counterparty = Counterparty.fromAmino(object.counterparty);
    }
    if (object.delay_period !== void 0 && object.delay_period !== null) {
      message.delayPeriod = BigInt(object.delay_period);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.id = message.id === "" ? void 0 : message.id;
    obj.client_id = message.clientId === "" ? void 0 : message.clientId;
    if (message.versions) {
      obj.versions = message.versions.map((e) => e ? Version.toAmino(e) : void 0);
    } else {
      obj.versions = message.versions;
    }
    obj.state = message.state === 0 ? void 0 : message.state;
    obj.counterparty = message.counterparty ? Counterparty.toAmino(message.counterparty) : void 0;
    obj.delay_period = message.delayPeriod !== BigInt(0) ? message.delayPeriod.toString() : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return IdentifiedConnection.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/IdentifiedConnection",
      value: IdentifiedConnection.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return IdentifiedConnection.decode(message.value);
  },
  toProto(message) {
    return IdentifiedConnection.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.core.connection.v1.IdentifiedConnection",
      value: IdentifiedConnection.encode(message).finish()
    };
  }
};
function createBaseCounterparty() {
  return {
    clientId: "",
    connectionId: "",
    prefix: MerklePrefix.fromPartial({})
  };
}
const Counterparty = {
  typeUrl: "/ibc.core.connection.v1.Counterparty",
  encode(message, writer = BinaryWriter.create()) {
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }
    if (message.connectionId !== "") {
      writer.uint32(18).string(message.connectionId);
    }
    if (message.prefix !== void 0) {
      MerklePrefix.encode(message.prefix, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseCounterparty();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;
        case 2:
          message.connectionId = reader.string();
          break;
        case 3:
          message.prefix = MerklePrefix.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseCounterparty();
    message.clientId = object.clientId ?? "";
    message.connectionId = object.connectionId ?? "";
    message.prefix = object.prefix !== void 0 && object.prefix !== null ? MerklePrefix.fromPartial(object.prefix) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseCounterparty();
    if (object.client_id !== void 0 && object.client_id !== null) {
      message.clientId = object.client_id;
    }
    if (object.connection_id !== void 0 && object.connection_id !== null) {
      message.connectionId = object.connection_id;
    }
    if (object.prefix !== void 0 && object.prefix !== null) {
      message.prefix = MerklePrefix.fromAmino(object.prefix);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.client_id = message.clientId === "" ? void 0 : message.clientId;
    obj.connection_id = message.connectionId === "" ? void 0 : message.connectionId;
    obj.prefix = message.prefix ? MerklePrefix.toAmino(message.prefix) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return Counterparty.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/Counterparty",
      value: Counterparty.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return Counterparty.decode(message.value);
  },
  toProto(message) {
    return Counterparty.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.core.connection.v1.Counterparty",
      value: Counterparty.encode(message).finish()
    };
  }
};
function createBaseClientPaths() {
  return {
    paths: []
  };
}
const ClientPaths = {
  typeUrl: "/ibc.core.connection.v1.ClientPaths",
  encode(message, writer = BinaryWriter.create()) {
    for (const v of message.paths) {
      writer.uint32(10).string(v);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseClientPaths();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.paths.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseClientPaths();
    message.paths = object.paths?.map((e) => e) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseClientPaths();
    message.paths = object.paths?.map((e) => e) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.paths) {
      obj.paths = message.paths.map((e) => e);
    } else {
      obj.paths = message.paths;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return ClientPaths.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/ClientPaths",
      value: ClientPaths.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return ClientPaths.decode(message.value);
  },
  toProto(message) {
    return ClientPaths.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.core.connection.v1.ClientPaths",
      value: ClientPaths.encode(message).finish()
    };
  }
};
function createBaseConnectionPaths() {
  return {
    clientId: "",
    paths: []
  };
}
const ConnectionPaths = {
  typeUrl: "/ibc.core.connection.v1.ConnectionPaths",
  encode(message, writer = BinaryWriter.create()) {
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }
    for (const v of message.paths) {
      writer.uint32(18).string(v);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseConnectionPaths();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;
        case 2:
          message.paths.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseConnectionPaths();
    message.clientId = object.clientId ?? "";
    message.paths = object.paths?.map((e) => e) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseConnectionPaths();
    if (object.client_id !== void 0 && object.client_id !== null) {
      message.clientId = object.client_id;
    }
    message.paths = object.paths?.map((e) => e) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.client_id = message.clientId === "" ? void 0 : message.clientId;
    if (message.paths) {
      obj.paths = message.paths.map((e) => e);
    } else {
      obj.paths = message.paths;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return ConnectionPaths.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/ConnectionPaths",
      value: ConnectionPaths.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return ConnectionPaths.decode(message.value);
  },
  toProto(message) {
    return ConnectionPaths.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.core.connection.v1.ConnectionPaths",
      value: ConnectionPaths.encode(message).finish()
    };
  }
};
function createBaseVersion() {
  return {
    identifier: "",
    features: []
  };
}
const Version = {
  typeUrl: "/ibc.core.connection.v1.Version",
  encode(message, writer = BinaryWriter.create()) {
    if (message.identifier !== "") {
      writer.uint32(10).string(message.identifier);
    }
    for (const v of message.features) {
      writer.uint32(18).string(v);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseVersion();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.identifier = reader.string();
          break;
        case 2:
          message.features.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseVersion();
    message.identifier = object.identifier ?? "";
    message.features = object.features?.map((e) => e) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseVersion();
    if (object.identifier !== void 0 && object.identifier !== null) {
      message.identifier = object.identifier;
    }
    message.features = object.features?.map((e) => e) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.identifier = message.identifier === "" ? void 0 : message.identifier;
    if (message.features) {
      obj.features = message.features.map((e) => e);
    } else {
      obj.features = message.features;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return Version.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/Version",
      value: Version.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return Version.decode(message.value);
  },
  toProto(message) {
    return Version.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.core.connection.v1.Version",
      value: Version.encode(message).finish()
    };
  }
};
function createBaseParams() {
  return {
    maxExpectedTimePerBlock: BigInt(0)
  };
}
const Params = {
  typeUrl: "/ibc.core.connection.v1.Params",
  encode(message, writer = BinaryWriter.create()) {
    if (message.maxExpectedTimePerBlock !== BigInt(0)) {
      writer.uint32(8).uint64(message.maxExpectedTimePerBlock);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.maxExpectedTimePerBlock = reader.uint64();
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
    message.maxExpectedTimePerBlock = object.maxExpectedTimePerBlock !== void 0 && object.maxExpectedTimePerBlock !== null ? BigInt(object.maxExpectedTimePerBlock.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object) {
    const message = createBaseParams();
    if (object.max_expected_time_per_block !== void 0 && object.max_expected_time_per_block !== null) {
      message.maxExpectedTimePerBlock = BigInt(object.max_expected_time_per_block);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.max_expected_time_per_block = message.maxExpectedTimePerBlock !== BigInt(0) ? message.maxExpectedTimePerBlock.toString() : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return Params.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/Params",
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
      typeUrl: "/ibc.core.connection.v1.Params",
      value: Params.encode(message).finish()
    };
  }
};
export {
  ClientPaths,
  ConnectionEnd,
  ConnectionPaths,
  Counterparty,
  IdentifiedConnection,
  Params,
  State,
  StateAmino,
  StateSDKType,
  Version,
  stateFromJSON,
  stateToJSON
};
