import { IdentifiedConnection, ConnectionPaths, Params } from "./connection";
import { BinaryReader, BinaryWriter } from "../../../../binary";
function createBaseGenesisState() {
  return {
    connections: [],
    clientConnectionPaths: [],
    nextConnectionSequence: BigInt(0),
    params: Params.fromPartial({})
  };
}
const GenesisState = {
  typeUrl: "/ibc.core.connection.v1.GenesisState",
  encode(message, writer = BinaryWriter.create()) {
    for (const v of message.connections) {
      IdentifiedConnection.encode(v, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.clientConnectionPaths) {
      ConnectionPaths.encode(v, writer.uint32(18).fork()).ldelim();
    }
    if (message.nextConnectionSequence !== BigInt(0)) {
      writer.uint32(24).uint64(message.nextConnectionSequence);
    }
    if (message.params !== void 0) {
      Params.encode(message.params, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.connections.push(IdentifiedConnection.decode(reader, reader.uint32()));
          break;
        case 2:
          message.clientConnectionPaths.push(ConnectionPaths.decode(reader, reader.uint32()));
          break;
        case 3:
          message.nextConnectionSequence = reader.uint64();
          break;
        case 4:
          message.params = Params.decode(reader, reader.uint32());
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
    message.connections = object.connections?.map((e) => IdentifiedConnection.fromPartial(e)) || [];
    message.clientConnectionPaths = object.clientConnectionPaths?.map((e) => ConnectionPaths.fromPartial(e)) || [];
    message.nextConnectionSequence = object.nextConnectionSequence !== void 0 && object.nextConnectionSequence !== null ? BigInt(object.nextConnectionSequence.toString()) : BigInt(0);
    message.params = object.params !== void 0 && object.params !== null ? Params.fromPartial(object.params) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseGenesisState();
    message.connections = object.connections?.map((e) => IdentifiedConnection.fromAmino(e)) || [];
    message.clientConnectionPaths = object.client_connection_paths?.map((e) => ConnectionPaths.fromAmino(e)) || [];
    if (object.next_connection_sequence !== void 0 && object.next_connection_sequence !== null) {
      message.nextConnectionSequence = BigInt(object.next_connection_sequence);
    }
    if (object.params !== void 0 && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.connections) {
      obj.connections = message.connections.map((e) => e ? IdentifiedConnection.toAmino(e) : void 0);
    } else {
      obj.connections = message.connections;
    }
    if (message.clientConnectionPaths) {
      obj.client_connection_paths = message.clientConnectionPaths.map((e) => e ? ConnectionPaths.toAmino(e) : void 0);
    } else {
      obj.client_connection_paths = message.clientConnectionPaths;
    }
    obj.next_connection_sequence = message.nextConnectionSequence !== BigInt(0) ? message.nextConnectionSequence.toString() : void 0;
    obj.params = message.params ? Params.toAmino(message.params) : void 0;
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
      typeUrl: "/ibc.core.connection.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
export {
  GenesisState
};
