import { BinaryReader, BinaryWriter } from "../../binary";
function createBaseParams() {
  return {
    stakeibcActive: false,
    claimActive: false
  };
}
const Params = {
  typeUrl: "/stride.autopilot.Params",
  encode(message, writer = BinaryWriter.create()) {
    if (message.stakeibcActive === true) {
      writer.uint32(8).bool(message.stakeibcActive);
    }
    if (message.claimActive === true) {
      writer.uint32(16).bool(message.claimActive);
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
          message.stakeibcActive = reader.bool();
          break;
        case 2:
          message.claimActive = reader.bool();
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
    message.stakeibcActive = object.stakeibcActive ?? false;
    message.claimActive = object.claimActive ?? false;
    return message;
  },
  fromAmino(object) {
    const message = createBaseParams();
    if (object.stakeibc_active !== void 0 && object.stakeibc_active !== null) {
      message.stakeibcActive = object.stakeibc_active;
    }
    if (object.claim_active !== void 0 && object.claim_active !== null) {
      message.claimActive = object.claim_active;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.stakeibc_active = message.stakeibcActive === false ? void 0 : message.stakeibcActive;
    obj.claim_active = message.claimActive === false ? void 0 : message.claimActive;
    return obj;
  },
  fromAminoMsg(object) {
    return Params.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return Params.decode(message.value);
  },
  toProto(message) {
    return Params.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.autopilot.Params",
      value: Params.encode(message).finish()
    };
  }
};
export {
  Params
};
