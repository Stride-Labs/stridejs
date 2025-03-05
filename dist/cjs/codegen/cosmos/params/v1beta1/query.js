var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var query_exports = {};
__export(query_exports, {
  QueryParamsRequest: () => QueryParamsRequest,
  QueryParamsResponse: () => QueryParamsResponse,
  QuerySubspacesRequest: () => QuerySubspacesRequest,
  QuerySubspacesResponse: () => QuerySubspacesResponse,
  Subspace: () => Subspace
});
module.exports = __toCommonJS(query_exports);
var import_params = require("./params");
var import_binary = require("../../../binary");
function createBaseQueryParamsRequest() {
  return {
    subspace: "",
    key: ""
  };
}
const QueryParamsRequest = {
  typeUrl: "/cosmos.params.v1beta1.QueryParamsRequest",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.subspace !== "") {
      writer.uint32(10).string(message.subspace);
    }
    if (message.key !== "") {
      writer.uint32(18).string(message.key);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
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
    param: import_params.ParamChange.fromPartial({})
  };
}
const QueryParamsResponse = {
  typeUrl: "/cosmos.params.v1beta1.QueryParamsResponse",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.param !== void 0) {
      import_params.ParamChange.encode(message.param, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.param = import_params.ParamChange.decode(reader, reader.uint32());
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
    message.param = object.param !== void 0 && object.param !== null ? import_params.ParamChange.fromPartial(object.param) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryParamsResponse();
    if (object.param !== void 0 && object.param !== null) {
      message.param = import_params.ParamChange.fromAmino(object.param);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.param = message.param ? import_params.ParamChange.toAmino(message.param) : import_params.ParamChange.toAmino(import_params.ParamChange.fromPartial({}));
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
function createBaseQuerySubspacesRequest() {
  return {};
}
const QuerySubspacesRequest = {
  typeUrl: "/cosmos.params.v1beta1.QuerySubspacesRequest",
  encode(_, writer = import_binary.BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQuerySubspacesRequest();
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
    const message = createBaseQuerySubspacesRequest();
    return message;
  },
  fromAmino(_) {
    const message = createBaseQuerySubspacesRequest();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return QuerySubspacesRequest.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QuerySubspacesRequest",
      value: QuerySubspacesRequest.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QuerySubspacesRequest.decode(message.value);
  },
  toProto(message) {
    return QuerySubspacesRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.params.v1beta1.QuerySubspacesRequest",
      value: QuerySubspacesRequest.encode(message).finish()
    };
  }
};
function createBaseQuerySubspacesResponse() {
  return {
    subspaces: []
  };
}
const QuerySubspacesResponse = {
  typeUrl: "/cosmos.params.v1beta1.QuerySubspacesResponse",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    for (const v of message.subspaces) {
      Subspace.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQuerySubspacesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subspaces.push(Subspace.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQuerySubspacesResponse();
    message.subspaces = object.subspaces?.map((e) => Subspace.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseQuerySubspacesResponse();
    message.subspaces = object.subspaces?.map((e) => Subspace.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.subspaces) {
      obj.subspaces = message.subspaces.map((e) => e ? Subspace.toAmino(e) : void 0);
    } else {
      obj.subspaces = message.subspaces;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return QuerySubspacesResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QuerySubspacesResponse",
      value: QuerySubspacesResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QuerySubspacesResponse.decode(message.value);
  },
  toProto(message) {
    return QuerySubspacesResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.params.v1beta1.QuerySubspacesResponse",
      value: QuerySubspacesResponse.encode(message).finish()
    };
  }
};
function createBaseSubspace() {
  return {
    subspace: "",
    keys: []
  };
}
const Subspace = {
  typeUrl: "/cosmos.params.v1beta1.Subspace",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.subspace !== "") {
      writer.uint32(10).string(message.subspace);
    }
    for (const v of message.keys) {
      writer.uint32(18).string(v);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseSubspace();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subspace = reader.string();
          break;
        case 2:
          message.keys.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseSubspace();
    message.subspace = object.subspace ?? "";
    message.keys = object.keys?.map((e) => e) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseSubspace();
    if (object.subspace !== void 0 && object.subspace !== null) {
      message.subspace = object.subspace;
    }
    message.keys = object.keys?.map((e) => e) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.subspace = message.subspace === "" ? void 0 : message.subspace;
    if (message.keys) {
      obj.keys = message.keys.map((e) => e);
    } else {
      obj.keys = message.keys;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return Subspace.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/Subspace",
      value: Subspace.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return Subspace.decode(message.value);
  },
  toProto(message) {
    return Subspace.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.params.v1beta1.Subspace",
      value: Subspace.encode(message).finish()
    };
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  QueryParamsRequest,
  QueryParamsResponse,
  QuerySubspacesRequest,
  QuerySubspacesResponse,
  Subspace
});
