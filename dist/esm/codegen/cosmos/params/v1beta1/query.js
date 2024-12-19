import { ParamChange } from "./params";
import { BinaryReader, BinaryWriter } from "../../../binary";
function createBaseQueryParamsRequest() {
  return {
    subspace: "",
    key: ""
  };
}
const QueryParamsRequest = {
  typeUrl: "/cosmos.params.v1beta1.QueryParamsRequest",
  encode(message, writer = BinaryWriter.create()) {
    if (message.subspace !== "") {
      writer.uint32(10).string(message.subspace);
    }
    if (message.key !== "") {
      writer.uint32(18).string(message.key);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subspace = reader.string();
          break;
        case 2:
          message.key = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryParamsRequest();
    message.subspace = object.subspace ?? "";
    message.key = object.key ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryParamsRequest();
    if (object.subspace !== void 0 && object.subspace !== null) {
      message.subspace = object.subspace;
    }
    if (object.key !== void 0 && object.key !== null) {
      message.key = object.key;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.subspace = message.subspace === "" ? void 0 : message.subspace;
    obj.key = message.key === "" ? void 0 : message.key;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryParamsRequest.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryParamsRequest",
      value: QueryParamsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryParamsRequest.decode(message.value);
  },
  toProto(message) {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.params.v1beta1.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryParamsResponse() {
  return {
    param: ParamChange.fromPartial({})
  };
}
const QueryParamsResponse = {
  typeUrl: "/cosmos.params.v1beta1.QueryParamsResponse",
  encode(message, writer = BinaryWriter.create()) {
    if (message.param !== void 0) {
      ParamChange.encode(message.param, writer.uint32(10).fork()).ldelim();
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
          message.param = ParamChange.decode(reader, reader.uint32());
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
    message.param = object.param !== void 0 && object.param !== null ? ParamChange.fromPartial(object.param) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryParamsResponse();
    if (object.param !== void 0 && object.param !== null) {
      message.param = ParamChange.fromAmino(object.param);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.param = message.param ? ParamChange.toAmino(message.param) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryParamsResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryParamsResponse",
      value: QueryParamsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message) {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.params.v1beta1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
export {
  QueryParamsRequest,
  QueryParamsResponse
};
