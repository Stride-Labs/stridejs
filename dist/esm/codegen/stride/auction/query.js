import { PageRequest, PageResponse } from "../../cosmos/base/query/v1beta1/pagination";
import { Auction } from "./auction";
import { BinaryReader, BinaryWriter } from "../../binary";
function createBaseQueryAuctionRequest() {
  return {
    name: ""
  };
}
const QueryAuctionRequest = {
  typeUrl: "/stride.auction.QueryAuctionRequest",
  encode(message, writer = BinaryWriter.create()) {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
    auction: Auction.fromPartial({})
  };
}
const QueryAuctionResponse = {
  typeUrl: "/stride.auction.QueryAuctionResponse",
  encode(message, writer = BinaryWriter.create()) {
    if (message.auction !== void 0) {
      Auction.encode(message.auction, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryAuctionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.auction = Auction.decode(reader, reader.uint32());
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
    message.auction = object.auction !== void 0 && object.auction !== null ? Auction.fromPartial(object.auction) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryAuctionResponse();
    if (object.auction !== void 0 && object.auction !== null) {
      message.auction = Auction.fromAmino(object.auction);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.auction = message.auction ? Auction.toAmino(message.auction) : void 0;
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
  encode(message, writer = BinaryWriter.create()) {
    if (message.pagination !== void 0) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryAuctionsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
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
    const message = createBaseQueryAuctionsRequest();
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryAuctionsRequest();
    if (object.pagination !== void 0 && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : void 0;
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
  encode(message, writer = BinaryWriter.create()) {
    for (const v of message.auctions) {
      Auction.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== void 0) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryAuctionsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.auctions.push(Auction.decode(reader, reader.uint32()));
          break;
        case 2:
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
    const message = createBaseQueryAuctionsResponse();
    message.auctions = object.auctions?.map((e) => Auction.fromPartial(e)) || [];
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryAuctionsResponse();
    message.auctions = object.auctions?.map((e) => Auction.fromAmino(e)) || [];
    if (object.pagination !== void 0 && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.auctions) {
      obj.auctions = message.auctions.map((e) => e ? Auction.toAmino(e) : void 0);
    } else {
      obj.auctions = message.auctions;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : void 0;
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
export {
  QueryAuctionRequest,
  QueryAuctionResponse,
  QueryAuctionsRequest,
  QueryAuctionsResponse
};
