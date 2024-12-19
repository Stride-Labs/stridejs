import { BinaryReader, BinaryWriter } from "../../binary";
function createBaseStakeibcPacketData() {
  return {
    noData: void 0
  };
}
const StakeibcPacketData = {
  typeUrl: "/stride.stakeibc.StakeibcPacketData",
  encode(message, writer = BinaryWriter.create()) {
    if (message.noData !== void 0) {
      NoData.encode(message.noData, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseStakeibcPacketData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.noData = NoData.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseStakeibcPacketData();
    message.noData = object.noData !== void 0 && object.noData !== null ? NoData.fromPartial(object.noData) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseStakeibcPacketData();
    if (object.no_data !== void 0 && object.no_data !== null) {
      message.noData = NoData.fromAmino(object.no_data);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.no_data = message.noData ? NoData.toAmino(message.noData) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return StakeibcPacketData.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return StakeibcPacketData.decode(message.value);
  },
  toProto(message) {
    return StakeibcPacketData.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.stakeibc.StakeibcPacketData",
      value: StakeibcPacketData.encode(message).finish()
    };
  }
};
function createBaseNoData() {
  return {};
}
const NoData = {
  typeUrl: "/stride.stakeibc.NoData",
  encode(_, writer = BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseNoData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_) {
    const message = createBaseNoData();
    return message;
  },
  fromAmino(_) {
    const message = createBaseNoData();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return NoData.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return NoData.decode(message.value);
  },
  toProto(message) {
    return NoData.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.stakeibc.NoData",
      value: NoData.encode(message).finish()
    };
  }
};
export {
  NoData,
  StakeibcPacketData
};
