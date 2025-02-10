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
  QueryBalanceRequest: () => QueryBalanceRequest,
  QueryBalanceResponse: () => QueryBalanceResponse,
  QueryClassRequest: () => QueryClassRequest,
  QueryClassResponse: () => QueryClassResponse,
  QueryClassesRequest: () => QueryClassesRequest,
  QueryClassesResponse: () => QueryClassesResponse,
  QueryNFTRequest: () => QueryNFTRequest,
  QueryNFTResponse: () => QueryNFTResponse,
  QueryNFTsRequest: () => QueryNFTsRequest,
  QueryNFTsResponse: () => QueryNFTsResponse,
  QueryOwnerRequest: () => QueryOwnerRequest,
  QueryOwnerResponse: () => QueryOwnerResponse,
  QuerySupplyRequest: () => QuerySupplyRequest,
  QuerySupplyResponse: () => QuerySupplyResponse
});
module.exports = __toCommonJS(query_exports);
var import_pagination = require("../../base/query/v1beta1/pagination");
var import_nft = require("./nft");
var import_binary = require("../../../binary");
function createBaseQueryBalanceRequest() {
  return {
    classId: "",
    owner: ""
  };
}
const QueryBalanceRequest = {
  typeUrl: "/cosmos.nft.v1beta1.QueryBalanceRequest",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryBalanceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
          break;
        case 2:
          message.owner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryBalanceRequest();
    message.classId = object.classId ?? "";
    message.owner = object.owner ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryBalanceRequest();
    if (object.class_id !== void 0 && object.class_id !== null) {
      message.classId = object.class_id;
    }
    if (object.owner !== void 0 && object.owner !== null) {
      message.owner = object.owner;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.class_id = message.classId === "" ? void 0 : message.classId;
    obj.owner = message.owner === "" ? void 0 : message.owner;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryBalanceRequest.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryBalanceRequest",
      value: QueryBalanceRequest.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryBalanceRequest.decode(message.value);
  },
  toProto(message) {
    return QueryBalanceRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.nft.v1beta1.QueryBalanceRequest",
      value: QueryBalanceRequest.encode(message).finish()
    };
  }
};
function createBaseQueryBalanceResponse() {
  return {
    amount: BigInt(0)
  };
}
const QueryBalanceResponse = {
  typeUrl: "/cosmos.nft.v1beta1.QueryBalanceResponse",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.amount !== BigInt(0)) {
      writer.uint32(8).uint64(message.amount);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryBalanceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryBalanceResponse();
    message.amount = object.amount !== void 0 && object.amount !== null ? BigInt(object.amount.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryBalanceResponse();
    if (object.amount !== void 0 && object.amount !== null) {
      message.amount = BigInt(object.amount);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.amount = message.amount !== BigInt(0) ? message.amount?.toString() : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryBalanceResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryBalanceResponse",
      value: QueryBalanceResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryBalanceResponse.decode(message.value);
  },
  toProto(message) {
    return QueryBalanceResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.nft.v1beta1.QueryBalanceResponse",
      value: QueryBalanceResponse.encode(message).finish()
    };
  }
};
function createBaseQueryOwnerRequest() {
  return {
    classId: "",
    id: ""
  };
}
const QueryOwnerRequest = {
  typeUrl: "/cosmos.nft.v1beta1.QueryOwnerRequest",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryOwnerRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
          break;
        case 2:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryOwnerRequest();
    message.classId = object.classId ?? "";
    message.id = object.id ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryOwnerRequest();
    if (object.class_id !== void 0 && object.class_id !== null) {
      message.classId = object.class_id;
    }
    if (object.id !== void 0 && object.id !== null) {
      message.id = object.id;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.class_id = message.classId === "" ? void 0 : message.classId;
    obj.id = message.id === "" ? void 0 : message.id;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryOwnerRequest.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryOwnerRequest",
      value: QueryOwnerRequest.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryOwnerRequest.decode(message.value);
  },
  toProto(message) {
    return QueryOwnerRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.nft.v1beta1.QueryOwnerRequest",
      value: QueryOwnerRequest.encode(message).finish()
    };
  }
};
function createBaseQueryOwnerResponse() {
  return {
    owner: ""
  };
}
const QueryOwnerResponse = {
  typeUrl: "/cosmos.nft.v1beta1.QueryOwnerResponse",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryOwnerResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryOwnerResponse();
    message.owner = object.owner ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryOwnerResponse();
    if (object.owner !== void 0 && object.owner !== null) {
      message.owner = object.owner;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.owner = message.owner === "" ? void 0 : message.owner;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryOwnerResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryOwnerResponse",
      value: QueryOwnerResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryOwnerResponse.decode(message.value);
  },
  toProto(message) {
    return QueryOwnerResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.nft.v1beta1.QueryOwnerResponse",
      value: QueryOwnerResponse.encode(message).finish()
    };
  }
};
function createBaseQuerySupplyRequest() {
  return {
    classId: ""
  };
}
const QuerySupplyRequest = {
  typeUrl: "/cosmos.nft.v1beta1.QuerySupplyRequest",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQuerySupplyRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQuerySupplyRequest();
    message.classId = object.classId ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseQuerySupplyRequest();
    if (object.class_id !== void 0 && object.class_id !== null) {
      message.classId = object.class_id;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.class_id = message.classId === "" ? void 0 : message.classId;
    return obj;
  },
  fromAminoMsg(object) {
    return QuerySupplyRequest.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QuerySupplyRequest",
      value: QuerySupplyRequest.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QuerySupplyRequest.decode(message.value);
  },
  toProto(message) {
    return QuerySupplyRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.nft.v1beta1.QuerySupplyRequest",
      value: QuerySupplyRequest.encode(message).finish()
    };
  }
};
function createBaseQuerySupplyResponse() {
  return {
    amount: BigInt(0)
  };
}
const QuerySupplyResponse = {
  typeUrl: "/cosmos.nft.v1beta1.QuerySupplyResponse",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.amount !== BigInt(0)) {
      writer.uint32(8).uint64(message.amount);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQuerySupplyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQuerySupplyResponse();
    message.amount = object.amount !== void 0 && object.amount !== null ? BigInt(object.amount.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object) {
    const message = createBaseQuerySupplyResponse();
    if (object.amount !== void 0 && object.amount !== null) {
      message.amount = BigInt(object.amount);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.amount = message.amount !== BigInt(0) ? message.amount?.toString() : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return QuerySupplyResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QuerySupplyResponse",
      value: QuerySupplyResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QuerySupplyResponse.decode(message.value);
  },
  toProto(message) {
    return QuerySupplyResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.nft.v1beta1.QuerySupplyResponse",
      value: QuerySupplyResponse.encode(message).finish()
    };
  }
};
function createBaseQueryNFTsRequest() {
  return {
    classId: "",
    owner: "",
    pagination: void 0
  };
}
const QueryNFTsRequest = {
  typeUrl: "/cosmos.nft.v1beta1.QueryNFTsRequest",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    if (message.pagination !== void 0) {
      import_pagination.PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryNFTsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
          break;
        case 2:
          message.owner = reader.string();
          break;
        case 3:
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
    const message = createBaseQueryNFTsRequest();
    message.classId = object.classId ?? "";
    message.owner = object.owner ?? "";
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? import_pagination.PageRequest.fromPartial(object.pagination) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryNFTsRequest();
    if (object.class_id !== void 0 && object.class_id !== null) {
      message.classId = object.class_id;
    }
    if (object.owner !== void 0 && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.pagination !== void 0 && object.pagination !== null) {
      message.pagination = import_pagination.PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.class_id = message.classId === "" ? void 0 : message.classId;
    obj.owner = message.owner === "" ? void 0 : message.owner;
    obj.pagination = message.pagination ? import_pagination.PageRequest.toAmino(message.pagination) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryNFTsRequest.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryNFTsRequest",
      value: QueryNFTsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryNFTsRequest.decode(message.value);
  },
  toProto(message) {
    return QueryNFTsRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.nft.v1beta1.QueryNFTsRequest",
      value: QueryNFTsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryNFTsResponse() {
  return {
    nfts: [],
    pagination: void 0
  };
}
const QueryNFTsResponse = {
  typeUrl: "/cosmos.nft.v1beta1.QueryNFTsResponse",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    for (const v of message.nfts) {
      import_nft.NFT.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== void 0) {
      import_pagination.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryNFTsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nfts.push(import_nft.NFT.decode(reader, reader.uint32()));
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
    const message = createBaseQueryNFTsResponse();
    message.nfts = object.nfts?.map((e) => import_nft.NFT.fromPartial(e)) || [];
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? import_pagination.PageResponse.fromPartial(object.pagination) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryNFTsResponse();
    message.nfts = object.nfts?.map((e) => import_nft.NFT.fromAmino(e)) || [];
    if (object.pagination !== void 0 && object.pagination !== null) {
      message.pagination = import_pagination.PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.nfts) {
      obj.nfts = message.nfts.map((e) => e ? import_nft.NFT.toAmino(e) : void 0);
    } else {
      obj.nfts = message.nfts;
    }
    obj.pagination = message.pagination ? import_pagination.PageResponse.toAmino(message.pagination) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryNFTsResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryNFTsResponse",
      value: QueryNFTsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryNFTsResponse.decode(message.value);
  },
  toProto(message) {
    return QueryNFTsResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.nft.v1beta1.QueryNFTsResponse",
      value: QueryNFTsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryNFTRequest() {
  return {
    classId: "",
    id: ""
  };
}
const QueryNFTRequest = {
  typeUrl: "/cosmos.nft.v1beta1.QueryNFTRequest",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryNFTRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
          break;
        case 2:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryNFTRequest();
    message.classId = object.classId ?? "";
    message.id = object.id ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryNFTRequest();
    if (object.class_id !== void 0 && object.class_id !== null) {
      message.classId = object.class_id;
    }
    if (object.id !== void 0 && object.id !== null) {
      message.id = object.id;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.class_id = message.classId === "" ? void 0 : message.classId;
    obj.id = message.id === "" ? void 0 : message.id;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryNFTRequest.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryNFTRequest",
      value: QueryNFTRequest.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryNFTRequest.decode(message.value);
  },
  toProto(message) {
    return QueryNFTRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.nft.v1beta1.QueryNFTRequest",
      value: QueryNFTRequest.encode(message).finish()
    };
  }
};
function createBaseQueryNFTResponse() {
  return {
    nft: void 0
  };
}
const QueryNFTResponse = {
  typeUrl: "/cosmos.nft.v1beta1.QueryNFTResponse",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.nft !== void 0) {
      import_nft.NFT.encode(message.nft, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryNFTResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nft = import_nft.NFT.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryNFTResponse();
    message.nft = object.nft !== void 0 && object.nft !== null ? import_nft.NFT.fromPartial(object.nft) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryNFTResponse();
    if (object.nft !== void 0 && object.nft !== null) {
      message.nft = import_nft.NFT.fromAmino(object.nft);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.nft = message.nft ? import_nft.NFT.toAmino(message.nft) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryNFTResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryNFTResponse",
      value: QueryNFTResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryNFTResponse.decode(message.value);
  },
  toProto(message) {
    return QueryNFTResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.nft.v1beta1.QueryNFTResponse",
      value: QueryNFTResponse.encode(message).finish()
    };
  }
};
function createBaseQueryClassRequest() {
  return {
    classId: ""
  };
}
const QueryClassRequest = {
  typeUrl: "/cosmos.nft.v1beta1.QueryClassRequest",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryClassRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryClassRequest();
    message.classId = object.classId ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryClassRequest();
    if (object.class_id !== void 0 && object.class_id !== null) {
      message.classId = object.class_id;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.class_id = message.classId === "" ? void 0 : message.classId;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryClassRequest.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryClassRequest",
      value: QueryClassRequest.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryClassRequest.decode(message.value);
  },
  toProto(message) {
    return QueryClassRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.nft.v1beta1.QueryClassRequest",
      value: QueryClassRequest.encode(message).finish()
    };
  }
};
function createBaseQueryClassResponse() {
  return {
    class: void 0
  };
}
const QueryClassResponse = {
  typeUrl: "/cosmos.nft.v1beta1.QueryClassResponse",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.class !== void 0) {
      import_nft.Class.encode(message.class, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryClassResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.class = import_nft.Class.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryClassResponse();
    message.class = object.class !== void 0 && object.class !== null ? import_nft.Class.fromPartial(object.class) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryClassResponse();
    if (object.class !== void 0 && object.class !== null) {
      message.class = import_nft.Class.fromAmino(object.class);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.class = message.class ? import_nft.Class.toAmino(message.class) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryClassResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryClassResponse",
      value: QueryClassResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryClassResponse.decode(message.value);
  },
  toProto(message) {
    return QueryClassResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.nft.v1beta1.QueryClassResponse",
      value: QueryClassResponse.encode(message).finish()
    };
  }
};
function createBaseQueryClassesRequest() {
  return {
    pagination: void 0
  };
}
const QueryClassesRequest = {
  typeUrl: "/cosmos.nft.v1beta1.QueryClassesRequest",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.pagination !== void 0) {
      import_pagination.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryClassesRequest();
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
    const message = createBaseQueryClassesRequest();
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? import_pagination.PageRequest.fromPartial(object.pagination) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryClassesRequest();
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
    return QueryClassesRequest.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryClassesRequest",
      value: QueryClassesRequest.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryClassesRequest.decode(message.value);
  },
  toProto(message) {
    return QueryClassesRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.nft.v1beta1.QueryClassesRequest",
      value: QueryClassesRequest.encode(message).finish()
    };
  }
};
function createBaseQueryClassesResponse() {
  return {
    classes: [],
    pagination: void 0
  };
}
const QueryClassesResponse = {
  typeUrl: "/cosmos.nft.v1beta1.QueryClassesResponse",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    for (const v of message.classes) {
      import_nft.Class.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== void 0) {
      import_pagination.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryClassesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classes.push(import_nft.Class.decode(reader, reader.uint32()));
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
    const message = createBaseQueryClassesResponse();
    message.classes = object.classes?.map((e) => import_nft.Class.fromPartial(e)) || [];
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? import_pagination.PageResponse.fromPartial(object.pagination) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryClassesResponse();
    message.classes = object.classes?.map((e) => import_nft.Class.fromAmino(e)) || [];
    if (object.pagination !== void 0 && object.pagination !== null) {
      message.pagination = import_pagination.PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.classes) {
      obj.classes = message.classes.map((e) => e ? import_nft.Class.toAmino(e) : void 0);
    } else {
      obj.classes = message.classes;
    }
    obj.pagination = message.pagination ? import_pagination.PageResponse.toAmino(message.pagination) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryClassesResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryClassesResponse",
      value: QueryClassesResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryClassesResponse.decode(message.value);
  },
  toProto(message) {
    return QueryClassesResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.nft.v1beta1.QueryClassesResponse",
      value: QueryClassesResponse.encode(message).finish()
    };
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  QueryBalanceRequest,
  QueryBalanceResponse,
  QueryClassRequest,
  QueryClassResponse,
  QueryClassesRequest,
  QueryClassesResponse,
  QueryNFTRequest,
  QueryNFTResponse,
  QueryNFTsRequest,
  QueryNFTsResponse,
  QueryOwnerRequest,
  QueryOwnerResponse,
  QuerySupplyRequest,
  QuerySupplyResponse
});
