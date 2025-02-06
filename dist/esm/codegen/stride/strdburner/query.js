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
    totalBurned: ""
  };
}
const QueryTotalStrdBurnedResponse = {
  typeUrl: "/stride.strdburner.QueryTotalStrdBurnedResponse",
  encode(message, writer = BinaryWriter.create()) {
    if (message.totalBurned !== "") {
      writer.uint32(10).string(message.totalBurned);
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
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryTotalStrdBurnedResponse();
    if (object.total_burned !== void 0 && object.total_burned !== null) {
      message.totalBurned = object.total_burned;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.total_burned = message.totalBurned === "" ? void 0 : message.totalBurned;
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
export {
  QueryStrdBurnerAddressRequest,
  QueryStrdBurnerAddressResponse,
  QueryTotalStrdBurnedRequest,
  QueryTotalStrdBurnedResponse
};
