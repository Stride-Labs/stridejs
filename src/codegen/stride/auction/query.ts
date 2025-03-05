import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { Auction, AuctionAmino, AuctionSDKType } from "./auction";
import { BinaryReader, BinaryWriter } from "../../binary";
/**
 * QueryAuctionRequest is the request type for the Query/Auction RPC
 * method
 */
export interface QueryAuctionRequest {
  name: string;
}
export interface QueryAuctionRequestProtoMsg {
  typeUrl: "/stride.auction.QueryAuctionRequest";
  value: Uint8Array;
}
/**
 * QueryAuctionRequest is the request type for the Query/Auction RPC
 * method
 */
export interface QueryAuctionRequestAmino {
  name?: string;
}
export interface QueryAuctionRequestAminoMsg {
  type: "/stride.auction.QueryAuctionRequest";
  value: QueryAuctionRequestAmino;
}
/**
 * QueryAuctionRequest is the request type for the Query/Auction RPC
 * method
 */
export interface QueryAuctionRequestSDKType {
  name: string;
}
/**
 * QueryAuctionResponse is the response type for the Query/Auction RPC
 * method
 */
export interface QueryAuctionResponse {
  auction: Auction;
}
export interface QueryAuctionResponseProtoMsg {
  typeUrl: "/stride.auction.QueryAuctionResponse";
  value: Uint8Array;
}
/**
 * QueryAuctionResponse is the response type for the Query/Auction RPC
 * method
 */
export interface QueryAuctionResponseAmino {
  auction?: AuctionAmino;
}
export interface QueryAuctionResponseAminoMsg {
  type: "/stride.auction.QueryAuctionResponse";
  value: QueryAuctionResponseAmino;
}
/**
 * QueryAuctionResponse is the response type for the Query/Auction RPC
 * method
 */
export interface QueryAuctionResponseSDKType {
  auction: AuctionSDKType;
}
/**
 * QueryAuctionsRequest is the request type for the
 * Query/Auctions RPC method
 */
export interface QueryAuctionsRequest {
  pagination?: PageRequest;
}
export interface QueryAuctionsRequestProtoMsg {
  typeUrl: "/stride.auction.QueryAuctionsRequest";
  value: Uint8Array;
}
/**
 * QueryAuctionsRequest is the request type for the
 * Query/Auctions RPC method
 */
export interface QueryAuctionsRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAuctionsRequestAminoMsg {
  type: "/stride.auction.QueryAuctionsRequest";
  value: QueryAuctionsRequestAmino;
}
/**
 * QueryAuctionsRequest is the request type for the
 * Query/Auctions RPC method
 */
export interface QueryAuctionsRequestSDKType {
  pagination?: PageRequestSDKType;
}
/**
 * QueryAuctionsResponse is the response type for the
 * Query/Auctions RPC method
 */
export interface QueryAuctionsResponse {
  auctions: Auction[];
  pagination?: PageResponse;
}
export interface QueryAuctionsResponseProtoMsg {
  typeUrl: "/stride.auction.QueryAuctionsResponse";
  value: Uint8Array;
}
/**
 * QueryAuctionsResponse is the response type for the
 * Query/Auctions RPC method
 */
export interface QueryAuctionsResponseAmino {
  auctions?: AuctionAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAuctionsResponseAminoMsg {
  type: "/stride.auction.QueryAuctionsResponse";
  value: QueryAuctionsResponseAmino;
}
/**
 * QueryAuctionsResponse is the response type for the
 * Query/Auctions RPC method
 */
export interface QueryAuctionsResponseSDKType {
  auctions: AuctionSDKType[];
  pagination?: PageResponseSDKType;
}
function createBaseQueryAuctionRequest(): QueryAuctionRequest {
  return {
    name: ""
  };
}
export const QueryAuctionRequest = {
  typeUrl: "/stride.auction.QueryAuctionRequest",
  encode(message: QueryAuctionRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAuctionRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  fromPartial(object: Partial<QueryAuctionRequest>): QueryAuctionRequest {
    const message = createBaseQueryAuctionRequest();
    message.name = object.name ?? "";
    return message;
  },
  fromAmino(object: QueryAuctionRequestAmino): QueryAuctionRequest {
    const message = createBaseQueryAuctionRequest();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    return message;
  },
  toAmino(message: QueryAuctionRequest): QueryAuctionRequestAmino {
    const obj: any = {};
    obj.name = message.name === "" ? undefined : message.name;
    return obj;
  },
  fromAminoMsg(object: QueryAuctionRequestAminoMsg): QueryAuctionRequest {
    return QueryAuctionRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAuctionRequestProtoMsg): QueryAuctionRequest {
    return QueryAuctionRequest.decode(message.value);
  },
  toProto(message: QueryAuctionRequest): Uint8Array {
    return QueryAuctionRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAuctionRequest): QueryAuctionRequestProtoMsg {
    return {
      typeUrl: "/stride.auction.QueryAuctionRequest",
      value: QueryAuctionRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAuctionResponse(): QueryAuctionResponse {
  return {
    auction: Auction.fromPartial({})
  };
}
export const QueryAuctionResponse = {
  typeUrl: "/stride.auction.QueryAuctionResponse",
  encode(message: QueryAuctionResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.auction !== undefined) {
      Auction.encode(message.auction, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAuctionResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  fromPartial(object: Partial<QueryAuctionResponse>): QueryAuctionResponse {
    const message = createBaseQueryAuctionResponse();
    message.auction = object.auction !== undefined && object.auction !== null ? Auction.fromPartial(object.auction) : undefined;
    return message;
  },
  fromAmino(object: QueryAuctionResponseAmino): QueryAuctionResponse {
    const message = createBaseQueryAuctionResponse();
    if (object.auction !== undefined && object.auction !== null) {
      message.auction = Auction.fromAmino(object.auction);
    }
    return message;
  },
  toAmino(message: QueryAuctionResponse): QueryAuctionResponseAmino {
    const obj: any = {};
    obj.auction = message.auction ? Auction.toAmino(message.auction) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAuctionResponseAminoMsg): QueryAuctionResponse {
    return QueryAuctionResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAuctionResponseProtoMsg): QueryAuctionResponse {
    return QueryAuctionResponse.decode(message.value);
  },
  toProto(message: QueryAuctionResponse): Uint8Array {
    return QueryAuctionResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAuctionResponse): QueryAuctionResponseProtoMsg {
    return {
      typeUrl: "/stride.auction.QueryAuctionResponse",
      value: QueryAuctionResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAuctionsRequest(): QueryAuctionsRequest {
  return {
    pagination: undefined
  };
}
export const QueryAuctionsRequest = {
  typeUrl: "/stride.auction.QueryAuctionsRequest",
  encode(message: QueryAuctionsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAuctionsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  fromPartial(object: Partial<QueryAuctionsRequest>): QueryAuctionsRequest {
    const message = createBaseQueryAuctionsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAuctionsRequestAmino): QueryAuctionsRequest {
    const message = createBaseQueryAuctionsRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAuctionsRequest): QueryAuctionsRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAuctionsRequestAminoMsg): QueryAuctionsRequest {
    return QueryAuctionsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAuctionsRequestProtoMsg): QueryAuctionsRequest {
    return QueryAuctionsRequest.decode(message.value);
  },
  toProto(message: QueryAuctionsRequest): Uint8Array {
    return QueryAuctionsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAuctionsRequest): QueryAuctionsRequestProtoMsg {
    return {
      typeUrl: "/stride.auction.QueryAuctionsRequest",
      value: QueryAuctionsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAuctionsResponse(): QueryAuctionsResponse {
  return {
    auctions: [],
    pagination: undefined
  };
}
export const QueryAuctionsResponse = {
  typeUrl: "/stride.auction.QueryAuctionsResponse",
  encode(message: QueryAuctionsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.auctions) {
      Auction.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAuctionsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  fromPartial(object: Partial<QueryAuctionsResponse>): QueryAuctionsResponse {
    const message = createBaseQueryAuctionsResponse();
    message.auctions = object.auctions?.map(e => Auction.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAuctionsResponseAmino): QueryAuctionsResponse {
    const message = createBaseQueryAuctionsResponse();
    message.auctions = object.auctions?.map(e => Auction.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAuctionsResponse): QueryAuctionsResponseAmino {
    const obj: any = {};
    if (message.auctions) {
      obj.auctions = message.auctions.map(e => e ? Auction.toAmino(e) : undefined);
    } else {
      obj.auctions = message.auctions;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAuctionsResponseAminoMsg): QueryAuctionsResponse {
    return QueryAuctionsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAuctionsResponseProtoMsg): QueryAuctionsResponse {
    return QueryAuctionsResponse.decode(message.value);
  },
  toProto(message: QueryAuctionsResponse): Uint8Array {
    return QueryAuctionsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAuctionsResponse): QueryAuctionsResponseProtoMsg {
    return {
      typeUrl: "/stride.auction.QueryAuctionsResponse",
      value: QueryAuctionsResponse.encode(message).finish()
    };
  }
};