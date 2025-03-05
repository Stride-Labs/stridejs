import { GenesisState as GenesisState1 } from "../../client/v1/genesis";
import { GenesisState as GenesisState2 } from "../../connection/v1/genesis";
import { GenesisState as GenesisState3 } from "../../channel/v1/genesis";
import { BinaryReader, BinaryWriter } from "../../../../binary";
function createBaseGenesisState() {
  return {
    clientGenesis: GenesisState1.fromPartial({}),
    connectionGenesis: GenesisState2.fromPartial({}),
    channelGenesis: GenesisState3.fromPartial({})
  };
}
const GenesisState = {
  typeUrl: "/ibc.core.types.v1.GenesisState",
  encode(message, writer = BinaryWriter.create()) {
    if (message.clientGenesis !== void 0) {
      GenesisState1.encode(message.clientGenesis, writer.uint32(10).fork()).ldelim();
    }
    if (message.connectionGenesis !== void 0) {
      GenesisState2.encode(message.connectionGenesis, writer.uint32(18).fork()).ldelim();
    }
    if (message.channelGenesis !== void 0) {
      GenesisState3.encode(message.channelGenesis, writer.uint32(26).fork()).ldelim();
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
          message.clientGenesis = GenesisState1.decode(reader, reader.uint32());
          break;
        case 2:
          message.connectionGenesis = GenesisState2.decode(reader, reader.uint32());
          break;
        case 3:
          message.channelGenesis = GenesisState3.decode(reader, reader.uint32());
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
    message.clientGenesis = object.clientGenesis !== void 0 && object.clientGenesis !== null ? GenesisState1.fromPartial(object.clientGenesis) : void 0;
    message.connectionGenesis = object.connectionGenesis !== void 0 && object.connectionGenesis !== null ? GenesisState2.fromPartial(object.connectionGenesis) : void 0;
    message.channelGenesis = object.channelGenesis !== void 0 && object.channelGenesis !== null ? GenesisState3.fromPartial(object.channelGenesis) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseGenesisState();
    if (object.client_genesis !== void 0 && object.client_genesis !== null) {
      message.clientGenesis = GenesisState1.fromAmino(object.client_genesis);
    }
    if (object.connection_genesis !== void 0 && object.connection_genesis !== null) {
      message.connectionGenesis = GenesisState2.fromAmino(object.connection_genesis);
    }
    if (object.channel_genesis !== void 0 && object.channel_genesis !== null) {
      message.channelGenesis = GenesisState3.fromAmino(object.channel_genesis);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.client_genesis = message.clientGenesis ? GenesisState1.toAmino(message.clientGenesis) : void 0;
    obj.connection_genesis = message.connectionGenesis ? GenesisState2.toAmino(message.connectionGenesis) : void 0;
    obj.channel_genesis = message.channelGenesis ? GenesisState3.toAmino(message.channelGenesis) : void 0;
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
      typeUrl: "/ibc.core.types.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
export {
  GenesisState
};
