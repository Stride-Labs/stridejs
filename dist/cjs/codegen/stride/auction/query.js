"use strict";
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
  QueryAuctionRequest: () => QueryAuctionRequest,
  QueryAuctionResponse: () => QueryAuctionResponse,
  QueryAuctionsRequest: () => QueryAuctionsRequest,
  QueryAuctionsResponse: () => QueryAuctionsResponse
});
module.exports = __toCommonJS(query_exports);
var import_pagination = require("../../cosmos/base/query/v1beta1/pagination");
var import_auction = require("./auction");
var import_binary = require("../../binary");
function createBaseQueryAuctionRequest() {
  return {
    name: ""
  };
}
const QueryAuctionRequest = {
  typeUrl: "/stride.auction.QueryAuctionRequest",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryAuctionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryAuctionRequest();
    message.name = object.name ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryAuctionRequest();
    if (object.name !== void 0 && object.name !== null) {
      message.name = object.name;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.name = message.name === "" ? void 0 : message.name;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryAuctionRequest.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryAuctionRequest.decode(message.value);
  },
  toProto(message) {
    return QueryAuctionRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.auction.QueryAuctionRequest",
      value: QueryAuctionRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAuctionResponse() {
  return {
    auction: import_auction.Auction.fromPartial({})
  };
}
const QueryAuctionResponse = {
  typeUrl: "/stride.auction.QueryAuctionResponse",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.auction !== void 0) {
      import_auction.Auction.encode(message.auction, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryAuctionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.auction = import_auction.Auction.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryAuctionResponse();
    message.auction = object.auction !== void 0 && object.auction !== null ? import_auction.Auction.fromPartial(object.auction) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryAuctionResponse();
    if (object.auction !== void 0 && object.auction !== null) {
      message.auction = import_auction.Auction.fromAmino(object.auction);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.auction = message.auction ? import_auction.Auction.toAmino(message.auction) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryAuctionResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryAuctionResponse.decode(message.value);
  },
  toProto(message) {
    return QueryAuctionResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.auction.QueryAuctionResponse",
      value: QueryAuctionResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAuctionsRequest() {
  return {
    pagination: void 0
  };
}
const QueryAuctionsRequest = {
  typeUrl: "/stride.auction.QueryAuctionsRequest",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.pagination !== void 0) {
      import_pagination.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryAuctionsRequest();
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
    const message = createBaseQueryAuctionsRequest();
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? import_pagination.PageRequest.fromPartial(object.pagination) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryAuctionsRequest();
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
    return QueryAuctionsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryAuctionsRequest.decode(message.value);
  },
  toProto(message) {
    return QueryAuctionsRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.auction.QueryAuctionsRequest",
      value: QueryAuctionsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAuctionsResponse() {
  return {
    auctions: [],
    pagination: void 0
  };
}
const QueryAuctionsResponse = {
  typeUrl: "/stride.auction.QueryAuctionsResponse",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    for (const v of message.auctions) {
      import_auction.Auction.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== void 0) {
      import_pagination.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryAuctionsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.auctions.push(import_auction.Auction.decode(reader, reader.uint32()));
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
    const message = createBaseQueryAuctionsResponse();
    message.auctions = object.auctions?.map((e) => import_auction.Auction.fromPartial(e)) || [];
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? import_pagination.PageResponse.fromPartial(object.pagination) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryAuctionsResponse();
    message.auctions = object.auctions?.map((e) => import_auction.Auction.fromAmino(e)) || [];
    if (object.pagination !== void 0 && object.pagination !== null) {
      message.pagination = import_pagination.PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.auctions) {
      obj.auctions = message.auctions.map((e) => e ? import_auction.Auction.toAmino(e) : void 0);
    } else {
      obj.auctions = message.auctions;
    }
    obj.pagination = message.pagination ? import_pagination.PageResponse.toAmino(message.pagination) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryAuctionsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryAuctionsResponse.decode(message.value);
  },
  toProto(message) {
    return QueryAuctionsResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.auction.QueryAuctionsResponse",
      value: QueryAuctionsResponse.encode(message).finish()
    };
  }
};
// Proper CommonJS exports for dynamic imports
module.exports = {
  QueryAuctionRequest,
  QueryAuctionResponse,
  QueryAuctionsRequest,
  QueryAuctionsResponse
};
