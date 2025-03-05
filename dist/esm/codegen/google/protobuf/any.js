import { BinaryReader, BinaryWriter } from "../../binary";
function createBaseAny() {
  return {
    $typeUrl: "/google.protobuf.Any",
    typeUrl: "",
    value: new Uint8Array()
  };
}
const Any = {
  typeUrl: "/google.protobuf.Any",
  encode(message, writer = BinaryWriter.create()) {
    if (message.typeUrl !== "") {
      writer.uint32(10).string(message.typeUrl);
    }
    if (message.value.length !== 0) {
      writer.uint32(18).bytes(message.value);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseAny();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.typeUrl = reader.string();
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
    const message = createBaseAny();
    message.typeUrl = object.typeUrl ?? "";
    message.value = object.value ?? new Uint8Array();
    return message;
  },
  fromAmino(object) {
    return {
      typeUrl: object.type,
      value: object.value
    };
  },
  toAmino(message) {
    const obj = {};
    obj.type = message.typeUrl;
    obj.value = message.value;
    return obj;
  },
  fromAminoMsg(object) {
    return Any.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return Any.decode(message.value);
  },
  toProto(message) {
    return Any.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/google.protobuf.Any",
      value: Any.encode(message).finish()
    };
  }
};
export {
  Any
};
