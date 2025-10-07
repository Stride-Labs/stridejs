import { BinaryReader, BinaryWriter } from "../../binary";
function createBaseQueryStrdBurnerAddressRequest() {
  return {};
}
const QueryStrdBurnerAddressRequest = {
  typeUrl: "/stride.strdburner.QueryStrdBurnerAddressRequest",
  encode(_, writer = BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryStrdBurnerAddressRequest();
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
    const message = createBaseQueryStrdBurnerAddressRequest();
    return message;
  },
  fromAmino(_) {
    const message = createBaseQueryStrdBurnerAddressRequest();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return QueryStrdBurnerAddressRequest.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryStrdBurnerAddressRequest.decode(message.value);
  },
  toProto(message) {
    return QueryStrdBurnerAddressRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.strdburner.QueryStrdBurnerAddressRequest",
      value: QueryStrdBurnerAddressRequest.encode(message).finish()
    };
  }
};
function createBaseQueryStrdBurnerAddressResponse() {
  return {
    address: ""
  };
}
const QueryStrdBurnerAddressResponse = {
  typeUrl: "/stride.strdburner.QueryStrdBurnerAddressResponse",
  encode(message, writer = BinaryWriter.create()) {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryStrdBurnerAddressResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryStrdBurnerAddressResponse();
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryStrdBurnerAddressResponse();
    if (object.address !== void 0 && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.address = message.address === "" ? void 0 : message.address;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryStrdBurnerAddressResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryStrdBurnerAddressResponse.decode(message.value);
  },
  toProto(message) {
    return QueryStrdBurnerAddressResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.strdburner.QueryStrdBurnerAddressResponse",
      value: QueryStrdBurnerAddressResponse.encode(message).finish()
    };
  }
};
function createBaseQueryTotalStrdBurnedRequest() {
  return {};
}
const QueryTotalStrdBurnedRequest = {
  typeUrl: "/stride.strdburner.QueryTotalStrdBurnedRequest",
  encode(_, writer = BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalStrdBurnedRequest();
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
    const message = createBaseQueryTotalStrdBurnedRequest();
    return message;
  },
  fromAmino(_) {
    const message = createBaseQueryTotalStrdBurnedRequest();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return QueryTotalStrdBurnedRequest.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryTotalStrdBurnedRequest.decode(message.value);
  },
  toProto(message) {
    return QueryTotalStrdBurnedRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.strdburner.QueryTotalStrdBurnedRequest",
      value: QueryTotalStrdBurnedRequest.encode(message).finish()
    };
  }
};
function createBaseQueryTotalStrdBurnedResponse() {
  return {
    totalBurned: "",
    protocolBurned: "",
    totalUserBurned: ""
  };
}
const QueryTotalStrdBurnedResponse = {
  typeUrl: "/stride.strdburner.QueryTotalStrdBurnedResponse",
  encode(message, writer = BinaryWriter.create()) {
    if (message.totalBurned !== "") {
      writer.uint32(10).string(message.totalBurned);
    }
    if (message.protocolBurned !== "") {
      writer.uint32(18).string(message.protocolBurned);
    }
    if (message.totalUserBurned !== "") {
      writer.uint32(26).string(message.totalUserBurned);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalStrdBurnedResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.totalBurned = reader.string();
          break;
        case 2:
          message.protocolBurned = reader.string();
          break;
        case 3:
          message.totalUserBurned = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryTotalStrdBurnedResponse();
    message.totalBurned = object.totalBurned ?? "";
    message.protocolBurned = object.protocolBurned ?? "";
    message.totalUserBurned = object.totalUserBurned ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryTotalStrdBurnedResponse();
    if (object.total_burned !== void 0 && object.total_burned !== null) {
      message.totalBurned = object.total_burned;
    }
    if (object.protocol_burned !== void 0 && object.protocol_burned !== null) {
      message.protocolBurned = object.protocol_burned;
    }
    if (object.total_user_burned !== void 0 && object.total_user_burned !== null) {
      message.totalUserBurned = object.total_user_burned;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.total_burned = message.totalBurned === "" ? void 0 : message.totalBurned;
    obj.protocol_burned = message.protocolBurned === "" ? void 0 : message.protocolBurned;
    obj.total_user_burned = message.totalUserBurned === "" ? void 0 : message.totalUserBurned;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryTotalStrdBurnedResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryTotalStrdBurnedResponse.decode(message.value);
  },
  toProto(message) {
    return QueryTotalStrdBurnedResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.strdburner.QueryTotalStrdBurnedResponse",
      value: QueryTotalStrdBurnedResponse.encode(message).finish()
    };
  }
};
function createBaseQueryStrdBurnedByAddressRequest() {
  return {
    address: ""
  };
}
const QueryStrdBurnedByAddressRequest = {
  typeUrl: "/stride.strdburner.QueryStrdBurnedByAddressRequest",
  encode(message, writer = BinaryWriter.create()) {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryStrdBurnedByAddressRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryStrdBurnedByAddressRequest();
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryStrdBurnedByAddressRequest();
    if (object.address !== void 0 && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.address = message.address === "" ? void 0 : message.address;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryStrdBurnedByAddressRequest.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryStrdBurnedByAddressRequest.decode(message.value);
  },
  toProto(message) {
    return QueryStrdBurnedByAddressRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.strdburner.QueryStrdBurnedByAddressRequest",
      value: QueryStrdBurnedByAddressRequest.encode(message).finish()
    };
  }
};
function createBaseQueryStrdBurnedByAddressResponse() {
  return {
    burnedAmount: ""
  };
}
const QueryStrdBurnedByAddressResponse = {
  typeUrl: "/stride.strdburner.QueryStrdBurnedByAddressResponse",
  encode(message, writer = BinaryWriter.create()) {
    if (message.burnedAmount !== "") {
      writer.uint32(10).string(message.burnedAmount);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryStrdBurnedByAddressResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.burnedAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryStrdBurnedByAddressResponse();
    message.burnedAmount = object.burnedAmount ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryStrdBurnedByAddressResponse();
    if (object.burned_amount !== void 0 && object.burned_amount !== null) {
      message.burnedAmount = object.burned_amount;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.burned_amount = message.burnedAmount === "" ? void 0 : message.burnedAmount;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryStrdBurnedByAddressResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryStrdBurnedByAddressResponse.decode(message.value);
  },
  toProto(message) {
    return QueryStrdBurnedByAddressResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.strdburner.QueryStrdBurnedByAddressResponse",
      value: QueryStrdBurnedByAddressResponse.encode(message).finish()
    };
  }
};
function createBaseQueryLinkedAddressRequest() {
  return {
    strideAddress: ""
  };
}
const QueryLinkedAddressRequest = {
  typeUrl: "/stride.strdburner.QueryLinkedAddressRequest",
  encode(message, writer = BinaryWriter.create()) {
    if (message.strideAddress !== "") {
      writer.uint32(10).string(message.strideAddress);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryLinkedAddressRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.strideAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryLinkedAddressRequest();
    message.strideAddress = object.strideAddress ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryLinkedAddressRequest();
    if (object.stride_address !== void 0 && object.stride_address !== null) {
      message.strideAddress = object.stride_address;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.stride_address = message.strideAddress === "" ? void 0 : message.strideAddress;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryLinkedAddressRequest.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryLinkedAddressRequest.decode(message.value);
  },
  toProto(message) {
    return QueryLinkedAddressRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.strdburner.QueryLinkedAddressRequest",
      value: QueryLinkedAddressRequest.encode(message).finish()
    };
  }
};
function createBaseQueryLinkedAddressResponse() {
  return {
    linkedAddress: ""
  };
}
const QueryLinkedAddressResponse = {
  typeUrl: "/stride.strdburner.QueryLinkedAddressResponse",
  encode(message, writer = BinaryWriter.create()) {
    if (message.linkedAddress !== "") {
      writer.uint32(10).string(message.linkedAddress);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryLinkedAddressResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
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
    const message = createBaseQueryLinkedAddressResponse();
    message.linkedAddress = object.linkedAddress ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryLinkedAddressResponse();
    if (object.linked_address !== void 0 && object.linked_address !== null) {
      message.linkedAddress = object.linked_address;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.linked_address = message.linkedAddress === "" ? void 0 : message.linkedAddress;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryLinkedAddressResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryLinkedAddressResponse.decode(message.value);
  },
  toProto(message) {
    return QueryLinkedAddressResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.strdburner.QueryLinkedAddressResponse",
      value: QueryLinkedAddressResponse.encode(message).finish()
    };
  }
};
export {
  QueryLinkedAddressRequest,
  QueryLinkedAddressResponse,
  QueryStrdBurnedByAddressRequest,
  QueryStrdBurnedByAddressResponse,
  QueryStrdBurnerAddressRequest,
  QueryStrdBurnerAddressResponse,
  QueryTotalStrdBurnedRequest,
  QueryTotalStrdBurnedResponse
};
