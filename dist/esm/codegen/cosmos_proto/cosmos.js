import { BinaryReader, BinaryWriter } from "../binary";
var ScalarType = /* @__PURE__ */ ((ScalarType2) => {
  ScalarType2[ScalarType2["SCALAR_TYPE_UNSPECIFIED"] = 0] = "SCALAR_TYPE_UNSPECIFIED";
  ScalarType2[ScalarType2["SCALAR_TYPE_STRING"] = 1] = "SCALAR_TYPE_STRING";
  ScalarType2[ScalarType2["SCALAR_TYPE_BYTES"] = 2] = "SCALAR_TYPE_BYTES";
  ScalarType2[ScalarType2["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return ScalarType2;
})(ScalarType || {});
const ScalarTypeSDKType = ScalarType;
const ScalarTypeAmino = ScalarType;
function scalarTypeFromJSON(object) {
  switch (object) {
    case 0:
    case "SCALAR_TYPE_UNSPECIFIED":
      return 0 /* SCALAR_TYPE_UNSPECIFIED */;
    case 1:
    case "SCALAR_TYPE_STRING":
      return 1 /* SCALAR_TYPE_STRING */;
    case 2:
    case "SCALAR_TYPE_BYTES":
      return 2 /* SCALAR_TYPE_BYTES */;
    case -1:
    case "UNRECOGNIZED":
    default:
      return -1 /* UNRECOGNIZED */;
  }
}
function scalarTypeToJSON(object) {
  switch (object) {
    case 0 /* SCALAR_TYPE_UNSPECIFIED */:
      return "SCALAR_TYPE_UNSPECIFIED";
    case 1 /* SCALAR_TYPE_STRING */:
      return "SCALAR_TYPE_STRING";
    case 2 /* SCALAR_TYPE_BYTES */:
      return "SCALAR_TYPE_BYTES";
    case -1 /* UNRECOGNIZED */:
    default:
      return "UNRECOGNIZED";
  }
}
function createBaseInterfaceDescriptor() {
  return {
    name: "",
    description: ""
  };
}
const InterfaceDescriptor = {
  typeUrl: "/cosmos_proto.InterfaceDescriptor",
  encode(message, writer = BinaryWriter.create()) {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseInterfaceDescriptor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseInterfaceDescriptor();
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseInterfaceDescriptor();
    if (object.name !== void 0 && object.name !== null) {
      message.name = object.name;
    }
    if (object.description !== void 0 && object.description !== null) {
      message.description = object.description;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.name = message.name === "" ? void 0 : message.name;
    obj.description = message.description === "" ? void 0 : message.description;
    return obj;
  },
  fromAminoMsg(object) {
    return InterfaceDescriptor.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return InterfaceDescriptor.decode(message.value);
  },
  toProto(message) {
    return InterfaceDescriptor.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos_proto.InterfaceDescriptor",
      value: InterfaceDescriptor.encode(message).finish()
    };
  }
};
function createBaseScalarDescriptor() {
  return {
    name: "",
    description: "",
    fieldType: []
  };
}
const ScalarDescriptor = {
  typeUrl: "/cosmos_proto.ScalarDescriptor",
  encode(message, writer = BinaryWriter.create()) {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    writer.uint32(26).fork();
    for (const v of message.fieldType) {
      writer.int32(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseScalarDescriptor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.fieldType.push(reader.int32());
            }
          } else {
            message.fieldType.push(reader.int32());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseScalarDescriptor();
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.fieldType = object.fieldType?.map((e) => e) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseScalarDescriptor();
    if (object.name !== void 0 && object.name !== null) {
      message.name = object.name;
    }
    if (object.description !== void 0 && object.description !== null) {
      message.description = object.description;
    }
    message.fieldType = object.field_type?.map((e) => e) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.name = message.name === "" ? void 0 : message.name;
    obj.description = message.description === "" ? void 0 : message.description;
    if (message.fieldType) {
      obj.field_type = message.fieldType.map((e) => e);
    } else {
      obj.field_type = message.fieldType;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return ScalarDescriptor.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return ScalarDescriptor.decode(message.value);
  },
  toProto(message) {
    return ScalarDescriptor.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos_proto.ScalarDescriptor",
      value: ScalarDescriptor.encode(message).finish()
    };
  }
};
export {
  InterfaceDescriptor,
  ScalarDescriptor,
  ScalarType,
  ScalarTypeAmino,
  ScalarTypeSDKType,
  scalarTypeFromJSON,
  scalarTypeToJSON
};
