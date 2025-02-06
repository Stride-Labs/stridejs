import { Any } from "../protobuf/any";
import { BinaryReader, BinaryWriter } from "../../binary";
import { bytesFromBase64, base64FromBytes } from "../../helpers";
function createBaseHttpBody() {
  return {
    contentType: "",
    data: new Uint8Array(),
    extensions: []
  };
}
const HttpBody = {
  typeUrl: "/google.api.HttpBody",
  encode(message, writer = BinaryWriter.create()) {
    if (message.contentType !== "") {
      writer.uint32(10).string(message.contentType);
    }
    if (message.data.length !== 0) {
      writer.uint32(18).bytes(message.data);
    }
    for (const v of message.extensions) {
      Any.encode(v, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseHttpBody();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contentType = reader.string();
          break;
        case 2:
          message.data = reader.bytes();
          break;
        case 3:
          message.extensions.push(Any.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseHttpBody();
    message.contentType = object.contentType ?? "";
    message.data = object.data ?? new Uint8Array();
    message.extensions = object.extensions?.map((e) => Any.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseHttpBody();
    if (object.content_type !== void 0 && object.content_type !== null) {
      message.contentType = object.content_type;
    }
    if (object.data !== void 0 && object.data !== null) {
      message.data = bytesFromBase64(object.data);
    }
    message.extensions = object.extensions?.map((e) => Any.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.content_type = message.contentType === "" ? void 0 : message.contentType;
    obj.data = message.data ? base64FromBytes(message.data) : void 0;
    if (message.extensions) {
      obj.extensions = message.extensions.map((e) => e ? Any.toAmino(e) : void 0);
    } else {
      obj.extensions = message.extensions;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return HttpBody.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return HttpBody.decode(message.value);
  },
  toProto(message) {
    return HttpBody.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/google.api.HttpBody",
      value: HttpBody.encode(message).finish()
    };
  }
};
export {
  HttpBody
};
