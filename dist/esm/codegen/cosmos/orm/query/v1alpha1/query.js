import { PageRequest, PageResponse } from "../../../base/query/v1beta1/pagination";
import { Any } from "../../../../google/protobuf/any";
import { Timestamp } from "../../../../google/protobuf/timestamp";
import { Duration } from "../../../../google/protobuf/duration";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { toTimestamp, fromTimestamp, bytesFromBase64, base64FromBytes } from "../../../../helpers";
function createBaseGetRequest() {
  return {
    messageName: "",
    index: "",
    values: []
  };
}
const GetRequest = {
  typeUrl: "/cosmos.orm.query.v1alpha1.GetRequest",
  encode(message, writer = BinaryWriter.create()) {
    if (message.messageName !== "") {
      writer.uint32(10).string(message.messageName);
    }
    if (message.index !== "") {
      writer.uint32(18).string(message.index);
    }
    for (const v of message.values) {
      IndexValue.encode(v, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseGetRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.messageName = reader.string();
          break;
        case 2:
          message.index = reader.string();
          break;
        case 3:
          message.values.push(IndexValue.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseGetRequest();
    message.messageName = object.messageName ?? "";
    message.index = object.index ?? "";
    message.values = object.values?.map((e) => IndexValue.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseGetRequest();
    if (object.message_name !== void 0 && object.message_name !== null) {
      message.messageName = object.message_name;
    }
    if (object.index !== void 0 && object.index !== null) {
      message.index = object.index;
    }
    message.values = object.values?.map((e) => IndexValue.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.message_name = message.messageName === "" ? void 0 : message.messageName;
    obj.index = message.index === "" ? void 0 : message.index;
    if (message.values) {
      obj.values = message.values.map((e) => e ? IndexValue.toAmino(e) : void 0);
    } else {
      obj.values = message.values;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return GetRequest.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/GetRequest",
      value: GetRequest.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return GetRequest.decode(message.value);
  },
  toProto(message) {
    return GetRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.orm.query.v1alpha1.GetRequest",
      value: GetRequest.encode(message).finish()
    };
  }
};
function createBaseGetResponse() {
  return {
    result: void 0
  };
}
const GetResponse = {
  typeUrl: "/cosmos.orm.query.v1alpha1.GetResponse",
  encode(message, writer = BinaryWriter.create()) {
    if (message.result !== void 0) {
      Any.encode(message.result, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseGetResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.result = Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseGetResponse();
    message.result = object.result !== void 0 && object.result !== null ? Any.fromPartial(object.result) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseGetResponse();
    if (object.result !== void 0 && object.result !== null) {
      message.result = Any.fromAmino(object.result);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.result = message.result ? Any.toAmino(message.result) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return GetResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/GetResponse",
      value: GetResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return GetResponse.decode(message.value);
  },
  toProto(message) {
    return GetResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.orm.query.v1alpha1.GetResponse",
      value: GetResponse.encode(message).finish()
    };
  }
};
function createBaseListRequest() {
  return {
    messageName: "",
    index: "",
    prefix: void 0,
    range: void 0,
    pagination: void 0
  };
}
const ListRequest = {
  typeUrl: "/cosmos.orm.query.v1alpha1.ListRequest",
  encode(message, writer = BinaryWriter.create()) {
    if (message.messageName !== "") {
      writer.uint32(10).string(message.messageName);
    }
    if (message.index !== "") {
      writer.uint32(18).string(message.index);
    }
    if (message.prefix !== void 0) {
      ListRequest_Prefix.encode(message.prefix, writer.uint32(26).fork()).ldelim();
    }
    if (message.range !== void 0) {
      ListRequest_Range.encode(message.range, writer.uint32(34).fork()).ldelim();
    }
    if (message.pagination !== void 0) {
      PageRequest.encode(message.pagination, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseListRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.messageName = reader.string();
          break;
        case 2:
          message.index = reader.string();
          break;
        case 3:
          message.prefix = ListRequest_Prefix.decode(reader, reader.uint32());
          break;
        case 4:
          message.range = ListRequest_Range.decode(reader, reader.uint32());
          break;
        case 5:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseListRequest();
    message.messageName = object.messageName ?? "";
    message.index = object.index ?? "";
    message.prefix = object.prefix !== void 0 && object.prefix !== null ? ListRequest_Prefix.fromPartial(object.prefix) : void 0;
    message.range = object.range !== void 0 && object.range !== null ? ListRequest_Range.fromPartial(object.range) : void 0;
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseListRequest();
    if (object.message_name !== void 0 && object.message_name !== null) {
      message.messageName = object.message_name;
    }
    if (object.index !== void 0 && object.index !== null) {
      message.index = object.index;
    }
    if (object.prefix !== void 0 && object.prefix !== null) {
      message.prefix = ListRequest_Prefix.fromAmino(object.prefix);
    }
    if (object.range !== void 0 && object.range !== null) {
      message.range = ListRequest_Range.fromAmino(object.range);
    }
    if (object.pagination !== void 0 && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.message_name = message.messageName === "" ? void 0 : message.messageName;
    obj.index = message.index === "" ? void 0 : message.index;
    obj.prefix = message.prefix ? ListRequest_Prefix.toAmino(message.prefix) : void 0;
    obj.range = message.range ? ListRequest_Range.toAmino(message.range) : void 0;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return ListRequest.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/ListRequest",
      value: ListRequest.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return ListRequest.decode(message.value);
  },
  toProto(message) {
    return ListRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.orm.query.v1alpha1.ListRequest",
      value: ListRequest.encode(message).finish()
    };
  }
};
function createBaseListRequest_Prefix() {
  return {
    values: []
  };
}
const ListRequest_Prefix = {
  typeUrl: "/cosmos.orm.query.v1alpha1.Prefix",
  encode(message, writer = BinaryWriter.create()) {
    for (const v of message.values) {
      IndexValue.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseListRequest_Prefix();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.values.push(IndexValue.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseListRequest_Prefix();
    message.values = object.values?.map((e) => IndexValue.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseListRequest_Prefix();
    message.values = object.values?.map((e) => IndexValue.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.values) {
      obj.values = message.values.map((e) => e ? IndexValue.toAmino(e) : void 0);
    } else {
      obj.values = message.values;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return ListRequest_Prefix.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/Prefix",
      value: ListRequest_Prefix.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return ListRequest_Prefix.decode(message.value);
  },
  toProto(message) {
    return ListRequest_Prefix.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.orm.query.v1alpha1.Prefix",
      value: ListRequest_Prefix.encode(message).finish()
    };
  }
};
function createBaseListRequest_Range() {
  return {
    start: [],
    end: []
  };
}
const ListRequest_Range = {
  typeUrl: "/cosmos.orm.query.v1alpha1.Range",
  encode(message, writer = BinaryWriter.create()) {
    for (const v of message.start) {
      IndexValue.encode(v, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.end) {
      IndexValue.encode(v, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseListRequest_Range();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.start.push(IndexValue.decode(reader, reader.uint32()));
          break;
        case 2:
          message.end.push(IndexValue.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseListRequest_Range();
    message.start = object.start?.map((e) => IndexValue.fromPartial(e)) || [];
    message.end = object.end?.map((e) => IndexValue.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseListRequest_Range();
    message.start = object.start?.map((e) => IndexValue.fromAmino(e)) || [];
    message.end = object.end?.map((e) => IndexValue.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.start) {
      obj.start = message.start.map((e) => e ? IndexValue.toAmino(e) : void 0);
    } else {
      obj.start = message.start;
    }
    if (message.end) {
      obj.end = message.end.map((e) => e ? IndexValue.toAmino(e) : void 0);
    } else {
      obj.end = message.end;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return ListRequest_Range.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/Range",
      value: ListRequest_Range.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return ListRequest_Range.decode(message.value);
  },
  toProto(message) {
    return ListRequest_Range.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.orm.query.v1alpha1.Range",
      value: ListRequest_Range.encode(message).finish()
    };
  }
};
function createBaseListResponse() {
  return {
    results: [],
    pagination: void 0
  };
}
const ListResponse = {
  typeUrl: "/cosmos.orm.query.v1alpha1.ListResponse",
  encode(message, writer = BinaryWriter.create()) {
    for (const v of message.results) {
      Any.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== void 0) {
      PageResponse.encode(message.pagination, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseListResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.results.push(Any.decode(reader, reader.uint32()));
          break;
        case 5:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseListResponse();
    message.results = object.results?.map((e) => Any.fromPartial(e)) || [];
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseListResponse();
    message.results = object.results?.map((e) => Any.fromAmino(e)) || [];
    if (object.pagination !== void 0 && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.results) {
      obj.results = message.results.map((e) => e ? Any.toAmino(e) : void 0);
    } else {
      obj.results = message.results;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return ListResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/ListResponse",
      value: ListResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return ListResponse.decode(message.value);
  },
  toProto(message) {
    return ListResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.orm.query.v1alpha1.ListResponse",
      value: ListResponse.encode(message).finish()
    };
  }
};
function createBaseIndexValue() {
  return {
    uint: void 0,
    int: void 0,
    str: void 0,
    bytes: void 0,
    enum: void 0,
    bool: void 0,
    timestamp: void 0,
    duration: void 0
  };
}
const IndexValue = {
  typeUrl: "/cosmos.orm.query.v1alpha1.IndexValue",
  encode(message, writer = BinaryWriter.create()) {
    if (message.uint !== void 0) {
      writer.uint32(8).uint64(message.uint);
    }
    if (message.int !== void 0) {
      writer.uint32(16).int64(message.int);
    }
    if (message.str !== void 0) {
      writer.uint32(26).string(message.str);
    }
    if (message.bytes !== void 0) {
      writer.uint32(34).bytes(message.bytes);
    }
    if (message.enum !== void 0) {
      writer.uint32(42).string(message.enum);
    }
    if (message.bool !== void 0) {
      writer.uint32(48).bool(message.bool);
    }
    if (message.timestamp !== void 0) {
      Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(58).fork()).ldelim();
    }
    if (message.duration !== void 0) {
      Duration.encode(message.duration, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseIndexValue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.uint = reader.uint64();
          break;
        case 2:
          message.int = reader.int64();
          break;
        case 3:
          message.str = reader.string();
          break;
        case 4:
          message.bytes = reader.bytes();
          break;
        case 5:
          message.enum = reader.string();
          break;
        case 6:
          message.bool = reader.bool();
          break;
        case 7:
          message.timestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 8:
          message.duration = Duration.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseIndexValue();
    message.uint = object.uint !== void 0 && object.uint !== null ? BigInt(object.uint.toString()) : void 0;
    message.int = object.int !== void 0 && object.int !== null ? BigInt(object.int.toString()) : void 0;
    message.str = object.str ?? void 0;
    message.bytes = object.bytes ?? void 0;
    message.enum = object.enum ?? void 0;
    message.bool = object.bool ?? void 0;
    message.timestamp = object.timestamp ?? void 0;
    message.duration = object.duration !== void 0 && object.duration !== null ? Duration.fromPartial(object.duration) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseIndexValue();
    if (object.uint !== void 0 && object.uint !== null) {
      message.uint = BigInt(object.uint);
    }
    if (object.int !== void 0 && object.int !== null) {
      message.int = BigInt(object.int);
    }
    if (object.str !== void 0 && object.str !== null) {
      message.str = object.str;
    }
    if (object.bytes !== void 0 && object.bytes !== null) {
      message.bytes = bytesFromBase64(object.bytes);
    }
    if (object.enum !== void 0 && object.enum !== null) {
      message.enum = object.enum;
    }
    if (object.bool !== void 0 && object.bool !== null) {
      message.bool = object.bool;
    }
    if (object.timestamp !== void 0 && object.timestamp !== null) {
      message.timestamp = fromTimestamp(Timestamp.fromAmino(object.timestamp));
    }
    if (object.duration !== void 0 && object.duration !== null) {
      message.duration = Duration.fromAmino(object.duration);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.uint = message.uint !== BigInt(0) ? message.uint?.toString() : void 0;
    obj.int = message.int !== BigInt(0) ? message.int?.toString() : void 0;
    obj.str = message.str === null ? void 0 : message.str;
    obj.bytes = message.bytes ? base64FromBytes(message.bytes) : void 0;
    obj.enum = message.enum === null ? void 0 : message.enum;
    obj.bool = message.bool === null ? void 0 : message.bool;
    obj.timestamp = message.timestamp ? Timestamp.toAmino(toTimestamp(message.timestamp)) : void 0;
    obj.duration = message.duration ? Duration.toAmino(message.duration) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return IndexValue.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/IndexValue",
      value: IndexValue.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return IndexValue.decode(message.value);
  },
  toProto(message) {
    return IndexValue.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.orm.query.v1alpha1.IndexValue",
      value: IndexValue.encode(message).finish()
    };
  }
};
export {
  GetRequest,
  GetResponse,
  IndexValue,
  ListRequest,
  ListRequest_Prefix,
  ListRequest_Range,
  ListResponse
};
