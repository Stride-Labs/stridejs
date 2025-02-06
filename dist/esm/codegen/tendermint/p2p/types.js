import { BinaryReader, BinaryWriter } from "../../binary";
import { bytesFromBase64, base64FromBytes } from "../../helpers";
function createBaseNetAddress() {
  return {
    id: "",
    ip: "",
    port: 0
  };
}
const NetAddress = {
  typeUrl: "/tendermint.p2p.NetAddress",
  encode(message, writer = BinaryWriter.create()) {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.ip !== "") {
      writer.uint32(18).string(message.ip);
    }
    if (message.port !== 0) {
      writer.uint32(24).uint32(message.port);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseNetAddress();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.ip = reader.string();
          break;
        case 3:
          message.port = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseNetAddress();
    message.id = object.id ?? "";
    message.ip = object.ip ?? "";
    message.port = object.port ?? 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseNetAddress();
    if (object.id !== void 0 && object.id !== null) {
      message.id = object.id;
    }
    if (object.ip !== void 0 && object.ip !== null) {
      message.ip = object.ip;
    }
    if (object.port !== void 0 && object.port !== null) {
      message.port = object.port;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.id = message.id === "" ? void 0 : message.id;
    obj.ip = message.ip === "" ? void 0 : message.ip;
    obj.port = message.port === 0 ? void 0 : message.port;
    return obj;
  },
  fromAminoMsg(object) {
    return NetAddress.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return NetAddress.decode(message.value);
  },
  toProto(message) {
    return NetAddress.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/tendermint.p2p.NetAddress",
      value: NetAddress.encode(message).finish()
    };
  }
};
function createBaseProtocolVersion() {
  return {
    p2p: BigInt(0),
    block: BigInt(0),
    app: BigInt(0)
  };
}
const ProtocolVersion = {
  typeUrl: "/tendermint.p2p.ProtocolVersion",
  encode(message, writer = BinaryWriter.create()) {
    if (message.p2p !== BigInt(0)) {
      writer.uint32(8).uint64(message.p2p);
    }
    if (message.block !== BigInt(0)) {
      writer.uint32(16).uint64(message.block);
    }
    if (message.app !== BigInt(0)) {
      writer.uint32(24).uint64(message.app);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseProtocolVersion();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.p2p = reader.uint64();
          break;
        case 2:
          message.block = reader.uint64();
          break;
        case 3:
          message.app = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseProtocolVersion();
    message.p2p = object.p2p !== void 0 && object.p2p !== null ? BigInt(object.p2p.toString()) : BigInt(0);
    message.block = object.block !== void 0 && object.block !== null ? BigInt(object.block.toString()) : BigInt(0);
    message.app = object.app !== void 0 && object.app !== null ? BigInt(object.app.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object) {
    const message = createBaseProtocolVersion();
    if (object.p2p !== void 0 && object.p2p !== null) {
      message.p2p = BigInt(object.p2p);
    }
    if (object.block !== void 0 && object.block !== null) {
      message.block = BigInt(object.block);
    }
    if (object.app !== void 0 && object.app !== null) {
      message.app = BigInt(object.app);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.p2p = message.p2p !== BigInt(0) ? message.p2p?.toString() : void 0;
    obj.block = message.block !== BigInt(0) ? message.block?.toString() : void 0;
    obj.app = message.app !== BigInt(0) ? message.app?.toString() : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return ProtocolVersion.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return ProtocolVersion.decode(message.value);
  },
  toProto(message) {
    return ProtocolVersion.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/tendermint.p2p.ProtocolVersion",
      value: ProtocolVersion.encode(message).finish()
    };
  }
};
function createBaseDefaultNodeInfo() {
  return {
    protocolVersion: ProtocolVersion.fromPartial({}),
    defaultNodeId: "",
    listenAddr: "",
    network: "",
    version: "",
    channels: new Uint8Array(),
    moniker: "",
    other: DefaultNodeInfoOther.fromPartial({})
  };
}
const DefaultNodeInfo = {
  typeUrl: "/tendermint.p2p.DefaultNodeInfo",
  encode(message, writer = BinaryWriter.create()) {
    if (message.protocolVersion !== void 0) {
      ProtocolVersion.encode(message.protocolVersion, writer.uint32(10).fork()).ldelim();
    }
    if (message.defaultNodeId !== "") {
      writer.uint32(18).string(message.defaultNodeId);
    }
    if (message.listenAddr !== "") {
      writer.uint32(26).string(message.listenAddr);
    }
    if (message.network !== "") {
      writer.uint32(34).string(message.network);
    }
    if (message.version !== "") {
      writer.uint32(42).string(message.version);
    }
    if (message.channels.length !== 0) {
      writer.uint32(50).bytes(message.channels);
    }
    if (message.moniker !== "") {
      writer.uint32(58).string(message.moniker);
    }
    if (message.other !== void 0) {
      DefaultNodeInfoOther.encode(message.other, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseDefaultNodeInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.protocolVersion = ProtocolVersion.decode(reader, reader.uint32());
          break;
        case 2:
          message.defaultNodeId = reader.string();
          break;
        case 3:
          message.listenAddr = reader.string();
          break;
        case 4:
          message.network = reader.string();
          break;
        case 5:
          message.version = reader.string();
          break;
        case 6:
          message.channels = reader.bytes();
          break;
        case 7:
          message.moniker = reader.string();
          break;
        case 8:
          message.other = DefaultNodeInfoOther.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseDefaultNodeInfo();
    message.protocolVersion = object.protocolVersion !== void 0 && object.protocolVersion !== null ? ProtocolVersion.fromPartial(object.protocolVersion) : void 0;
    message.defaultNodeId = object.defaultNodeId ?? "";
    message.listenAddr = object.listenAddr ?? "";
    message.network = object.network ?? "";
    message.version = object.version ?? "";
    message.channels = object.channels ?? new Uint8Array();
    message.moniker = object.moniker ?? "";
    message.other = object.other !== void 0 && object.other !== null ? DefaultNodeInfoOther.fromPartial(object.other) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseDefaultNodeInfo();
    if (object.protocol_version !== void 0 && object.protocol_version !== null) {
      message.protocolVersion = ProtocolVersion.fromAmino(object.protocol_version);
    }
    if (object.default_node_id !== void 0 && object.default_node_id !== null) {
      message.defaultNodeId = object.default_node_id;
    }
    if (object.listen_addr !== void 0 && object.listen_addr !== null) {
      message.listenAddr = object.listen_addr;
    }
    if (object.network !== void 0 && object.network !== null) {
      message.network = object.network;
    }
    if (object.version !== void 0 && object.version !== null) {
      message.version = object.version;
    }
    if (object.channels !== void 0 && object.channels !== null) {
      message.channels = bytesFromBase64(object.channels);
    }
    if (object.moniker !== void 0 && object.moniker !== null) {
      message.moniker = object.moniker;
    }
    if (object.other !== void 0 && object.other !== null) {
      message.other = DefaultNodeInfoOther.fromAmino(object.other);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.protocol_version = message.protocolVersion ? ProtocolVersion.toAmino(message.protocolVersion) : void 0;
    obj.default_node_id = message.defaultNodeId === "" ? void 0 : message.defaultNodeId;
    obj.listen_addr = message.listenAddr === "" ? void 0 : message.listenAddr;
    obj.network = message.network === "" ? void 0 : message.network;
    obj.version = message.version === "" ? void 0 : message.version;
    obj.channels = message.channels ? base64FromBytes(message.channels) : void 0;
    obj.moniker = message.moniker === "" ? void 0 : message.moniker;
    obj.other = message.other ? DefaultNodeInfoOther.toAmino(message.other) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return DefaultNodeInfo.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return DefaultNodeInfo.decode(message.value);
  },
  toProto(message) {
    return DefaultNodeInfo.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/tendermint.p2p.DefaultNodeInfo",
      value: DefaultNodeInfo.encode(message).finish()
    };
  }
};
function createBaseDefaultNodeInfoOther() {
  return {
    txIndex: "",
    rpcAddress: ""
  };
}
const DefaultNodeInfoOther = {
  typeUrl: "/tendermint.p2p.DefaultNodeInfoOther",
  encode(message, writer = BinaryWriter.create()) {
    if (message.txIndex !== "") {
      writer.uint32(10).string(message.txIndex);
    }
    if (message.rpcAddress !== "") {
      writer.uint32(18).string(message.rpcAddress);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseDefaultNodeInfoOther();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.txIndex = reader.string();
          break;
        case 2:
          message.rpcAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseDefaultNodeInfoOther();
    message.txIndex = object.txIndex ?? "";
    message.rpcAddress = object.rpcAddress ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseDefaultNodeInfoOther();
    if (object.tx_index !== void 0 && object.tx_index !== null) {
      message.txIndex = object.tx_index;
    }
    if (object.rpc_address !== void 0 && object.rpc_address !== null) {
      message.rpcAddress = object.rpc_address;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.tx_index = message.txIndex === "" ? void 0 : message.txIndex;
    obj.rpc_address = message.rpcAddress === "" ? void 0 : message.rpcAddress;
    return obj;
  },
  fromAminoMsg(object) {
    return DefaultNodeInfoOther.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return DefaultNodeInfoOther.decode(message.value);
  },
  toProto(message) {
    return DefaultNodeInfoOther.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/tendermint.p2p.DefaultNodeInfoOther",
      value: DefaultNodeInfoOther.encode(message).finish()
    };
  }
};
export {
  DefaultNodeInfo,
  DefaultNodeInfoOther,
  NetAddress,
  ProtocolVersion
};
