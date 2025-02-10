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
  QueryAllEvidenceRequest: () => QueryAllEvidenceRequest,
  QueryAllEvidenceResponse: () => QueryAllEvidenceResponse,
  QueryEvidenceRequest: () => QueryEvidenceRequest,
  QueryEvidenceResponse: () => QueryEvidenceResponse
});
module.exports = __toCommonJS(query_exports);
var import_pagination = require("../../base/query/v1beta1/pagination");
var import_any = require("../../../google/protobuf/any");
var import_binary = require("../../../binary");
var import_helpers = require("../../../helpers");
function createBaseQueryEvidenceRequest() {
  return {
    evidenceHash: new Uint8Array(),
    hash: ""
  };
}
const QueryEvidenceRequest = {
  typeUrl: "/cosmos.evidence.v1beta1.QueryEvidenceRequest",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.evidenceHash.length !== 0) {
      writer.uint32(10).bytes(message.evidenceHash);
    }
    if (message.hash !== "") {
      writer.uint32(18).string(message.hash);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryEvidenceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.evidenceHash = reader.bytes();
          break;
        case 2:
          message.hash = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryEvidenceRequest();
    message.evidenceHash = object.evidenceHash ?? new Uint8Array();
    message.hash = object.hash ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryEvidenceRequest();
    if (object.evidence_hash !== void 0 && object.evidence_hash !== null) {
      message.evidenceHash = (0, import_helpers.bytesFromBase64)(object.evidence_hash);
    }
    if (object.hash !== void 0 && object.hash !== null) {
      message.hash = object.hash;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.evidence_hash = message.evidenceHash ? (0, import_helpers.base64FromBytes)(message.evidenceHash) : void 0;
    obj.hash = message.hash === "" ? void 0 : message.hash;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryEvidenceRequest.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryEvidenceRequest",
      value: QueryEvidenceRequest.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryEvidenceRequest.decode(message.value);
  },
  toProto(message) {
    return QueryEvidenceRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.evidence.v1beta1.QueryEvidenceRequest",
      value: QueryEvidenceRequest.encode(message).finish()
    };
  }
};
function createBaseQueryEvidenceResponse() {
  return {
    evidence: void 0
  };
}
const QueryEvidenceResponse = {
  typeUrl: "/cosmos.evidence.v1beta1.QueryEvidenceResponse",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.evidence !== void 0) {
      import_any.Any.encode(message.evidence, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryEvidenceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.evidence = import_any.Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryEvidenceResponse();
    message.evidence = object.evidence !== void 0 && object.evidence !== null ? import_any.Any.fromPartial(object.evidence) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryEvidenceResponse();
    if (object.evidence !== void 0 && object.evidence !== null) {
      message.evidence = import_any.Any.fromAmino(object.evidence);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.evidence = message.evidence ? import_any.Any.toAmino(message.evidence) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryEvidenceResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryEvidenceResponse",
      value: QueryEvidenceResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryEvidenceResponse.decode(message.value);
  },
  toProto(message) {
    return QueryEvidenceResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.evidence.v1beta1.QueryEvidenceResponse",
      value: QueryEvidenceResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllEvidenceRequest() {
  return {
    pagination: void 0
  };
}
const QueryAllEvidenceRequest = {
  typeUrl: "/cosmos.evidence.v1beta1.QueryAllEvidenceRequest",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.pagination !== void 0) {
      import_pagination.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryAllEvidenceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = import_pagination.PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryAllEvidenceRequest();
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? import_pagination.PageRequest.fromPartial(object.pagination) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryAllEvidenceRequest();
    if (object.pagination !== void 0 && object.pagination !== null) {
      message.pagination = import_pagination.PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.pagination = message.pagination ? import_pagination.PageRequest.toAmino(message.pagination) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryAllEvidenceRequest.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryAllEvidenceRequest",
      value: QueryAllEvidenceRequest.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryAllEvidenceRequest.decode(message.value);
  },
  toProto(message) {
    return QueryAllEvidenceRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.evidence.v1beta1.QueryAllEvidenceRequest",
      value: QueryAllEvidenceRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllEvidenceResponse() {
  return {
    evidence: [],
    pagination: void 0
  };
}
const QueryAllEvidenceResponse = {
  typeUrl: "/cosmos.evidence.v1beta1.QueryAllEvidenceResponse",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    for (const v of message.evidence) {
      import_any.Any.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== void 0) {
      import_pagination.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryAllEvidenceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.evidence.push(import_any.Any.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = import_pagination.PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryAllEvidenceResponse();
    message.evidence = object.evidence?.map((e) => import_any.Any.fromPartial(e)) || [];
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? import_pagination.PageResponse.fromPartial(object.pagination) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryAllEvidenceResponse();
    message.evidence = object.evidence?.map((e) => import_any.Any.fromAmino(e)) || [];
    if (object.pagination !== void 0 && object.pagination !== null) {
      message.pagination = import_pagination.PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.evidence) {
      obj.evidence = message.evidence.map((e) => e ? import_any.Any.toAmino(e) : void 0);
    } else {
      obj.evidence = message.evidence;
    }
    obj.pagination = message.pagination ? import_pagination.PageResponse.toAmino(message.pagination) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryAllEvidenceResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryAllEvidenceResponse",
      value: QueryAllEvidenceResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryAllEvidenceResponse.decode(message.value);
  },
  toProto(message) {
    return QueryAllEvidenceResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.evidence.v1beta1.QueryAllEvidenceResponse",
      value: QueryAllEvidenceResponse.encode(message).finish()
    };
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  QueryAllEvidenceRequest,
  QueryAllEvidenceResponse,
  QueryEvidenceRequest,
  QueryEvidenceResponse
});
