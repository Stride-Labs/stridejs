import { BinaryReader, BinaryWriter } from "../../binary";
function createBaseGenesisState() {
  return {
    totalUstrdBurned: ""
  };
}
const GenesisState = {
  typeUrl: "/stride.strdburner.GenesisState",
  encode(message, writer = BinaryWriter.create()) {
    if (message.totalUstrdBurned !== "") {
      writer.uint32(74).string(message.totalUstrdBurned);
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
        case 9:
          message.totalUstrdBurned = reader.string();
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
    message.totalUstrdBurned = object.totalUstrdBurned ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseGenesisState();
    if (object.total_ustrd_burned !== void 0 && object.total_ustrd_burned !== null) {
      message.totalUstrdBurned = object.total_ustrd_burned;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.total_ustrd_burned = message.totalUstrdBurned === "" ? void 0 : message.totalUstrdBurned;
    return obj;
  },
  fromAminoMsg(object) {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return GenesisState.decode(message.value);
  },
  toProto(message) {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.strdburner.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
export {
  GenesisState
};
