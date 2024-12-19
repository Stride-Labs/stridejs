import { BinaryReader, BinaryWriter } from "../../../../binary";
function createBaseMetadata() {
  return {
    feeVersion: "",
    appVersion: ""
  };
}
const Metadata = {
  typeUrl: "/ibc.applications.fee.v1.Metadata",
  encode(message, writer = BinaryWriter.create()) {
    if (message.feeVersion !== "") {
      writer.uint32(10).string(message.feeVersion);
    }
    if (message.appVersion !== "") {
      writer.uint32(18).string(message.appVersion);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.feeVersion = reader.string();
          break;
        case 2:
          message.appVersion = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMetadata();
    message.feeVersion = object.feeVersion ?? "";
    message.appVersion = object.appVersion ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseMetadata();
    if (object.fee_version !== void 0 && object.fee_version !== null) {
      message.feeVersion = object.fee_version;
    }
    if (object.app_version !== void 0 && object.app_version !== null) {
      message.appVersion = object.app_version;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.fee_version = message.feeVersion === "" ? void 0 : message.feeVersion;
    obj.app_version = message.appVersion === "" ? void 0 : message.appVersion;
    return obj;
  },
  fromAminoMsg(object) {
    return Metadata.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/Metadata",
      value: Metadata.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return Metadata.decode(message.value);
  },
  toProto(message) {
    return Metadata.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.applications.fee.v1.Metadata",
      value: Metadata.encode(message).finish()
    };
  }
};
export {
  Metadata
};
