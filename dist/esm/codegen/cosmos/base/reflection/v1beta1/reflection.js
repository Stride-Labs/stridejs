import { BinaryReader, BinaryWriter } from "../../../../binary";
function createBaseListAllInterfacesRequest() {
  return {};
}
const ListAllInterfacesRequest = {
  typeUrl: "/cosmos.base.reflection.v1beta1.ListAllInterfacesRequest",
  encode(_, writer = BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseListAllInterfacesRequest();
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
    const message = createBaseListAllInterfacesRequest();
    return message;
  },
  fromAmino(_) {
    const message = createBaseListAllInterfacesRequest();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return ListAllInterfacesRequest.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/ListAllInterfacesRequest",
      value: ListAllInterfacesRequest.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return ListAllInterfacesRequest.decode(message.value);
  },
  toProto(message) {
    return ListAllInterfacesRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.base.reflection.v1beta1.ListAllInterfacesRequest",
      value: ListAllInterfacesRequest.encode(message).finish()
    };
  }
};
function createBaseListAllInterfacesResponse() {
  return {
    interfaceNames: []
  };
}
const ListAllInterfacesResponse = {
  typeUrl: "/cosmos.base.reflection.v1beta1.ListAllInterfacesResponse",
  encode(message, writer = BinaryWriter.create()) {
    for (const v of message.interfaceNames) {
      writer.uint32(10).string(v);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseListAllInterfacesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.interfaceNames.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseListAllInterfacesResponse();
    message.interfaceNames = object.interfaceNames?.map((e) => e) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseListAllInterfacesResponse();
    message.interfaceNames = object.interface_names?.map((e) => e) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.interfaceNames) {
      obj.interface_names = message.interfaceNames.map((e) => e);
    } else {
      obj.interface_names = message.interfaceNames;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return ListAllInterfacesResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/ListAllInterfacesResponse",
      value: ListAllInterfacesResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return ListAllInterfacesResponse.decode(message.value);
  },
  toProto(message) {
    return ListAllInterfacesResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.base.reflection.v1beta1.ListAllInterfacesResponse",
      value: ListAllInterfacesResponse.encode(message).finish()
    };
  }
};
function createBaseListImplementationsRequest() {
  return {
    interfaceName: ""
  };
}
const ListImplementationsRequest = {
  typeUrl: "/cosmos.base.reflection.v1beta1.ListImplementationsRequest",
  encode(message, writer = BinaryWriter.create()) {
    if (message.interfaceName !== "") {
      writer.uint32(10).string(message.interfaceName);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseListImplementationsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.interfaceName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseListImplementationsRequest();
    message.interfaceName = object.interfaceName ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseListImplementationsRequest();
    if (object.interface_name !== void 0 && object.interface_name !== null) {
      message.interfaceName = object.interface_name;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.interface_name = message.interfaceName === "" ? void 0 : message.interfaceName;
    return obj;
  },
  fromAminoMsg(object) {
    return ListImplementationsRequest.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/ListImplementationsRequest",
      value: ListImplementationsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return ListImplementationsRequest.decode(message.value);
  },
  toProto(message) {
    return ListImplementationsRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.base.reflection.v1beta1.ListImplementationsRequest",
      value: ListImplementationsRequest.encode(message).finish()
    };
  }
};
function createBaseListImplementationsResponse() {
  return {
    implementationMessageNames: []
  };
}
const ListImplementationsResponse = {
  typeUrl: "/cosmos.base.reflection.v1beta1.ListImplementationsResponse",
  encode(message, writer = BinaryWriter.create()) {
    for (const v of message.implementationMessageNames) {
      writer.uint32(10).string(v);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseListImplementationsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.implementationMessageNames.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseListImplementationsResponse();
    message.implementationMessageNames = object.implementationMessageNames?.map((e) => e) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseListImplementationsResponse();
    message.implementationMessageNames = object.implementation_message_names?.map((e) => e) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.implementationMessageNames) {
      obj.implementation_message_names = message.implementationMessageNames.map((e) => e);
    } else {
      obj.implementation_message_names = message.implementationMessageNames;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return ListImplementationsResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/ListImplementationsResponse",
      value: ListImplementationsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return ListImplementationsResponse.decode(message.value);
  },
  toProto(message) {
    return ListImplementationsResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.base.reflection.v1beta1.ListImplementationsResponse",
      value: ListImplementationsResponse.encode(message).finish()
    };
  }
};
export {
  ListAllInterfacesRequest,
  ListAllInterfacesResponse,
  ListImplementationsRequest,
  ListImplementationsResponse
};
