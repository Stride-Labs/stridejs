import { Config } from "./config";
import { BinaryReader, BinaryWriter } from "../../../binary";
function createBaseQueryConfigRequest() {
  return {};
}
const QueryConfigRequest = {
  typeUrl: "/cosmos.app.v1alpha1.QueryConfigRequest",
  encode(_, writer = BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryConfigRequest();
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
    const message = createBaseQueryConfigRequest();
    return message;
  },
  fromAmino(_) {
    const message = createBaseQueryConfigRequest();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return QueryConfigRequest.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryConfigRequest",
      value: QueryConfigRequest.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryConfigRequest.decode(message.value);
  },
  toProto(message) {
    return QueryConfigRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.app.v1alpha1.QueryConfigRequest",
      value: QueryConfigRequest.encode(message).finish()
    };
  }
};
function createBaseQueryConfigResponse() {
  return {
    config: void 0
  };
}
const QueryConfigResponse = {
  typeUrl: "/cosmos.app.v1alpha1.QueryConfigResponse",
  encode(message, writer = BinaryWriter.create()) {
    if (message.config !== void 0) {
      Config.encode(message.config, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryConfigResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.config = Config.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryConfigResponse();
    message.config = object.config !== void 0 && object.config !== null ? Config.fromPartial(object.config) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryConfigResponse();
    if (object.config !== void 0 && object.config !== null) {
      message.config = Config.fromAmino(object.config);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.config = message.config ? Config.toAmino(message.config) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryConfigResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryConfigResponse",
      value: QueryConfigResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryConfigResponse.decode(message.value);
  },
  toProto(message) {
    return QueryConfigResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.app.v1alpha1.QueryConfigResponse",
      value: QueryConfigResponse.encode(message).finish()
    };
  }
};
export {
  QueryConfigRequest,
  QueryConfigResponse
};
