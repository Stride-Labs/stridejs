import { Params } from "./mint";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { bytesFromBase64, base64FromBytes } from "../../../helpers";
function createBaseQueryParamsRequest() {
  return {};
}
const QueryParamsRequest = {
  typeUrl: "/stride.mint.v1beta1.QueryParamsRequest",
  encode(_, writer = BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
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
    const message = createBaseQueryParamsRequest();
    return message;
  },
  fromAmino(_) {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return QueryParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryParamsRequest.decode(message.value);
  },
  toProto(message) {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.mint.v1beta1.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryParamsResponse() {
  return {
    params: Params.fromPartial({})
  };
}
const QueryParamsResponse = {
  typeUrl: "/stride.mint.v1beta1.QueryParamsResponse",
  encode(message, writer = BinaryWriter.create()) {
    if (message.params !== void 0) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== void 0 && object.params !== null ? Params.fromPartial(object.params) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryParamsResponse();
    if (object.params !== void 0 && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.params = message.params ? Params.toAmino(message.params) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message) {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.mint.v1beta1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryEpochProvisionsRequest() {
  return {};
}
const QueryEpochProvisionsRequest = {
  typeUrl: "/stride.mint.v1beta1.QueryEpochProvisionsRequest",
  encode(_, writer = BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryEpochProvisionsRequest();
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
    const message = createBaseQueryEpochProvisionsRequest();
    return message;
  },
  fromAmino(_) {
    const message = createBaseQueryEpochProvisionsRequest();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return QueryEpochProvisionsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryEpochProvisionsRequest.decode(message.value);
  },
  toProto(message) {
    return QueryEpochProvisionsRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.mint.v1beta1.QueryEpochProvisionsRequest",
      value: QueryEpochProvisionsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryEpochProvisionsResponse() {
  return {
    epochProvisions: new Uint8Array()
  };
}
const QueryEpochProvisionsResponse = {
  typeUrl: "/stride.mint.v1beta1.QueryEpochProvisionsResponse",
  encode(message, writer = BinaryWriter.create()) {
    if (message.epochProvisions.length !== 0) {
      writer.uint32(10).bytes(message.epochProvisions);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryEpochProvisionsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.epochProvisions = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryEpochProvisionsResponse();
    message.epochProvisions = object.epochProvisions ?? new Uint8Array();
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryEpochProvisionsResponse();
    if (object.epoch_provisions !== void 0 && object.epoch_provisions !== null) {
      message.epochProvisions = bytesFromBase64(object.epoch_provisions);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.epoch_provisions = message.epochProvisions ? base64FromBytes(message.epochProvisions) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryEpochProvisionsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryEpochProvisionsResponse.decode(message.value);
  },
  toProto(message) {
    return QueryEpochProvisionsResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.mint.v1beta1.QueryEpochProvisionsResponse",
      value: QueryEpochProvisionsResponse.encode(message).finish()
    };
  }
};
export {
  QueryEpochProvisionsRequest,
  QueryEpochProvisionsResponse,
  QueryParamsRequest,
  QueryParamsResponse
};
