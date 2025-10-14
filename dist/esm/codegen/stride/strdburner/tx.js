import { BinaryReader, BinaryWriter } from "../../binary";
function createBaseMsgBurn() {
  return {
    burner: "",
    amount: ""
  };
}
const MsgBurn = {
  typeUrl: "/stride.strdburner.MsgBurn",
  encode(message, writer = BinaryWriter.create()) {
    if (message.burner !== "") {
      writer.uint32(10).string(message.burner);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgBurn();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.burner = reader.string();
          break;
        case 2:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgBurn();
    message.burner = object.burner ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgBurn();
    if (object.burner !== void 0 && object.burner !== null) {
      message.burner = object.burner;
    }
    if (object.amount !== void 0 && object.amount !== null) {
      message.amount = object.amount;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.burner = message.burner === "" ? void 0 : message.burner;
    obj.amount = message.amount === "" ? void 0 : message.amount;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgBurn.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "strdburner/MsgBurn",
      value: MsgBurn.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgBurn.decode(message.value);
  },
  toProto(message) {
    return MsgBurn.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.strdburner.MsgBurn",
      value: MsgBurn.encode(message).finish()
    };
  }
};
function createBaseMsgBurnResponse() {
  return {};
}
const MsgBurnResponse = {
  typeUrl: "/stride.strdburner.MsgBurnResponse",
  encode(_, writer = BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgBurnResponse();
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
    const message = createBaseMsgBurnResponse();
    return message;
  },
  fromAmino(_) {
    const message = createBaseMsgBurnResponse();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return MsgBurnResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return MsgBurnResponse.decode(message.value);
  },
  toProto(message) {
    return MsgBurnResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.strdburner.MsgBurnResponse",
      value: MsgBurnResponse.encode(message).finish()
    };
  }
};
function createBaseMsgLink() {
  return {
    strideAddress: "",
    linkedAddress: ""
  };
}
const MsgLink = {
  typeUrl: "/stride.strdburner.MsgLink",
  encode(message, writer = BinaryWriter.create()) {
    if (message.strideAddress !== "") {
      writer.uint32(10).string(message.strideAddress);
    }
    if (message.linkedAddress !== "") {
      writer.uint32(18).string(message.linkedAddress);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgLink();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.strideAddress = reader.string();
          break;
        case 2:
          message.linkedAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgLink();
    message.strideAddress = object.strideAddress ?? "";
    message.linkedAddress = object.linkedAddress ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgLink();
    if (object.stride_address !== void 0 && object.stride_address !== null) {
      message.strideAddress = object.stride_address;
    }
    if (object.linked_address !== void 0 && object.linked_address !== null) {
      message.linkedAddress = object.linked_address;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.stride_address = message.strideAddress === "" ? void 0 : message.strideAddress;
    obj.linked_address = message.linkedAddress === "" ? void 0 : message.linkedAddress;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgLink.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "strdburner/MsgLink",
      value: MsgLink.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgLink.decode(message.value);
  },
  toProto(message) {
    return MsgLink.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.strdburner.MsgLink",
      value: MsgLink.encode(message).finish()
    };
  }
};
function createBaseMsgLinkResponse() {
  return {};
}
const MsgLinkResponse = {
  typeUrl: "/stride.strdburner.MsgLinkResponse",
  encode(_, writer = BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgLinkResponse();
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
    const message = createBaseMsgLinkResponse();
    return message;
  },
  fromAmino(_) {
    const message = createBaseMsgLinkResponse();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return MsgLinkResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return MsgLinkResponse.decode(message.value);
  },
  toProto(message) {
    return MsgLinkResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.strdburner.MsgLinkResponse",
      value: MsgLinkResponse.encode(message).finish()
    };
  }
};
export {
  MsgBurn,
  MsgBurnResponse,
  MsgLink,
  MsgLinkResponse
};
