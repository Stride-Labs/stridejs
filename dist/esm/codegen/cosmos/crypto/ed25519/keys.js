import { BinaryReader, BinaryWriter } from "../../../binary";
import { bytesFromBase64, base64FromBytes } from "../../../helpers";
function createBasePubKey() {
  return {
    key: new Uint8Array()
  };
}
const PubKey = {
  typeUrl: "/cosmos.crypto.ed25519.PubKey",
  encode(message, writer = BinaryWriter.create()) {
    if (message.key.length !== 0) {
      writer.uint32(10).bytes(message.key);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBasePubKey();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBasePubKey();
    message.key = object.key ?? new Uint8Array();
    return message;
  },
  fromAmino(object) {
    const message = createBasePubKey();
    if (object.key !== void 0 && object.key !== null) {
      message.key = bytesFromBase64(object.key);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.key = message.key ? base64FromBytes(message.key) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return PubKey.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "tendermint/PubKeyEd25519",
      value: PubKey.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return PubKey.decode(message.value);
  },
  toProto(message) {
    return PubKey.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.crypto.ed25519.PubKey",
      value: PubKey.encode(message).finish()
    };
  }
};
function createBasePrivKey() {
  return {
    key: new Uint8Array()
  };
}
const PrivKey = {
  typeUrl: "/cosmos.crypto.ed25519.PrivKey",
  encode(message, writer = BinaryWriter.create()) {
    if (message.key.length !== 0) {
      writer.uint32(10).bytes(message.key);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBasePrivKey();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBasePrivKey();
    message.key = object.key ?? new Uint8Array();
    return message;
  },
  fromAmino(object) {
    const message = createBasePrivKey();
    if (object.key !== void 0 && object.key !== null) {
      message.key = bytesFromBase64(object.key);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.key = message.key ? base64FromBytes(message.key) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return PrivKey.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "tendermint/PrivKeyEd25519",
      value: PrivKey.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return PrivKey.decode(message.value);
  },
  toProto(message) {
    return PrivKey.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.crypto.ed25519.PrivKey",
      value: PrivKey.encode(message).finish()
    };
  }
};
export {
  PrivKey,
  PubKey
};
