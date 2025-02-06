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
export declare const QueryAuctionRequest: {
    typeUrl: string;
    encode(message: QueryAuctionRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAuctionRequest;
    fromPartial(object: Partial<QueryAuctionRequest>): QueryAuctionRequest;
    fromAmino(object: QueryAuctionRequestAmino): QueryAuctionRequest;
    toAmino(message: QueryAuctionRequest): QueryAuctionRequestAmino;
    fromAminoMsg(object: QueryAuctionRequestAminoMsg): QueryAuctionRequest;
    fromProtoMsg(message: QueryAuctionRequestProtoMsg): QueryAuctionRequest;
    toProto(message: QueryAuctionRequest): Uint8Array;
    toProtoMsg(message: QueryAuctionRequest): QueryAuctionRequestProtoMsg;
};
export declare const QueryAuctionResponse: {
    typeUrl: string;
    encode(message: QueryAuctionResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAuctionResponse;
    fromPartial(object: Partial<QueryAuctionResponse>): QueryAuctionResponse;
    fromAmino(object: QueryAuctionResponseAmino): QueryAuctionResponse;
    toAmino(message: QueryAuctionResponse): QueryAuctionResponseAmino;
    fromAminoMsg(object: QueryAuctionResponseAminoMsg): QueryAuctionResponse;
    fromProtoMsg(message: QueryAuctionResponseProtoMsg): QueryAuctionResponse;
    toProto(message: QueryAuctionResponse): Uint8Array;
    toProtoMsg(message: QueryAuctionResponse): QueryAuctionResponseProtoMsg;
};
export declare const QueryAuctionsRequest: {
    typeUrl: string;
    encode(message: QueryAuctionsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAuctionsRequest;
    fromPartial(object: Partial<QueryAuctionsRequest>): QueryAuctionsRequest;
    fromAmino(object: QueryAuctionsRequestAmino): QueryAuctionsRequest;
    toAmino(message: QueryAuctionsRequest): QueryAuctionsRequestAmino;
    fromAminoMsg(object: QueryAuctionsRequestAminoMsg): QueryAuctionsRequest;
    fromProtoMsg(message: QueryAuctionsRequestProtoMsg): QueryAuctionsRequest;
    toProto(message: QueryAuctionsRequest): Uint8Array;
    toProtoMsg(message: QueryAuctionsRequest): QueryAuctionsRequestProtoMsg;
};
export declare const QueryAuctionsResponse: {
    typeUrl: string;
    encode(message: QueryAuctionsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAuctionsResponse;
    fromPartial(object: Partial<QueryAuctionsResponse>): QueryAuctionsResponse;
    fromAmino(object: QueryAuctionsResponseAmino): QueryAuctionsResponse;
    toAmino(message: QueryAuctionsResponse): QueryAuctionsResponseAmino;
    fromAminoMsg(object: QueryAuctionsResponseAminoMsg): QueryAuctionsResponse;
    fromProtoMsg(message: QueryAuctionsResponseProtoMsg): QueryAuctionsResponse;
    toProto(message: QueryAuctionsResponse): Uint8Array;
    toProtoMsg(message: QueryAuctionsResponse): QueryAuctionsResponseProtoMsg;
};
