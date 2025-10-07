import { BinaryReader, BinaryWriter } from "../../../../binary";
import { bytesFromBase64, base64FromBytes } from "../../../../helpers";
function createBaseGenesisState() {
  return {
    contracts: []
  };
}
const GenesisState = {
  typeUrl: "/ibc.lightclients.wasm.v1.GenesisState",
  encode(message, writer = BinaryWriter.create()) {
    for (const v of message.contracts) {
      Contract.encode(v, writer.uint32(10).fork()).ldelim();
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
          message.contracts.push(Contract.decode(reader, reader.uint32()));
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
    message.contracts = object.contracts?.map((e) => Contract.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseGenesisState();
    message.contracts = object.contracts?.map((e) => Contract.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.contracts) {
      obj.contracts = message.contracts.map((e) => e ? Contract.toAmino(e) : void 0);
    } else {
      obj.contracts = message.contracts;
    }
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
      typeUrl: "/ibc.lightclients.wasm.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
function createBaseContract() {
  return {
    codeBytes: new Uint8Array()
  };
}
const Contract = {
  typeUrl: "/ibc.lightclients.wasm.v1.Contract",
  encode(message, writer = BinaryWriter.create()) {
    if (message.codeBytes.length !== 0) {
      writer.uint32(10).bytes(message.codeBytes);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseContract();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.codeBytes = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseContract();
    message.codeBytes = object.codeBytes ?? new Uint8Array();
    return message;
  },
  fromAmino(object) {
    const message = createBaseContract();
    if (object.code_bytes !== void 0 && object.code_bytes !== null) {
      message.codeBytes = bytesFromBase64(object.code_bytes);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.code_bytes = message.codeBytes ? base64FromBytes(message.codeBytes) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return Contract.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/Contract",
      value: Contract.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return Contract.decode(message.value);
  },
  toProto(message) {
    return Contract.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.lightclients.wasm.v1.Contract",
      value: Contract.encode(message).finish()
    };
  }
};
export {
  Contract,
  GenesisState
};
