import { AuctionType } from "./auction";
import { BinaryReader, BinaryWriter } from "../../binary";
/** MsgPlaceBid defines the message for bidding in a token auction */
export interface MsgPlaceBid {
    /** Bidder's address */
    bidder: string;
    /** Token being bid on */
    auctionName: string;
    /** Amount of tokens requested in base units (utoken) */
    sellingTokenAmount: string;
    /** Amount of tokens being paid in base units (utoken) */
    paymentTokenAmount: string;
}
export interface MsgPlaceBidProtoMsg {
    typeUrl: "/stride.auction.MsgPlaceBid";
    value: Uint8Array;
}
/** MsgPlaceBid defines the message for bidding in a token auction */
export interface MsgPlaceBidAmino {
    /** Bidder's address */
    bidder?: string;
    /** Token being bid on */
    auction_name?: string;
    /** Amount of tokens requested in base units (utoken) */
    selling_token_amount?: string;
    /** Amount of tokens being paid in base units (utoken) */
    payment_token_amount?: string;
}
export interface MsgPlaceBidAminoMsg {
    type: "auction/MsgPlaceBid";
    value: MsgPlaceBidAmino;
}
/** MsgPlaceBid defines the message for bidding in a token auction */
export interface MsgPlaceBidSDKType {
    bidder: string;
    auction_name: string;
    selling_token_amount: string;
    payment_token_amount: string;
}
export interface MsgPlaceBidResponse {
}
export interface MsgPlaceBidResponseProtoMsg {
    typeUrl: "/stride.auction.MsgPlaceBidResponse";
    value: Uint8Array;
}
export interface MsgPlaceBidResponseAmino {
}
export interface MsgPlaceBidResponseAminoMsg {
    type: "/stride.auction.MsgPlaceBidResponse";
    value: MsgPlaceBidResponseAmino;
}
export interface MsgPlaceBidResponseSDKType {
}
/** MsgCreateAuction defines the message for adding a token auction */
export interface MsgCreateAuction {
    /** Admin's address */
    admin: string;
    /** A unique auction name */
    auctionName: string;
    /** Auction type */
    auctionType: AuctionType;
    /** Denom on Stride of the token being auctioned off (e.g. "ibc/...") */
    sellingDenom: string;
    /** Denom on Stride of the token being used to place bids (e.g. "ustrd") */
    paymentDenom: string;
    /** Whether auction is active */
    enabled: boolean;
    /**
     * Minimum price multiplier (e.g. 0.95 for 5% discount off the oracle price)
     * bids_floor_price = oracle_price * min_price_multiplier
     */
    minPriceMultiplier: string;
    /** Minimum payment token bid amount */
    minBidAmount: string;
    beneficiary: string;
}
export interface MsgCreateAuctionProtoMsg {
    typeUrl: "/stride.auction.MsgCreateAuction";
    value: Uint8Array;
}
/** MsgCreateAuction defines the message for adding a token auction */
export interface MsgCreateAuctionAmino {
    /** Admin's address */
    admin?: string;
    /** A unique auction name */
    auction_name?: string;
    /** Auction type */
    auction_type?: AuctionType;
    /** Denom on Stride of the token being auctioned off (e.g. "ibc/...") */
    selling_denom?: string;
    /** Denom on Stride of the token being used to place bids (e.g. "ustrd") */
    payment_denom?: string;
    /** Whether auction is active */
    enabled?: boolean;
    /**
     * Minimum price multiplier (e.g. 0.95 for 5% discount off the oracle price)
     * bids_floor_price = oracle_price * min_price_multiplier
     */
    min_price_multiplier?: string;
    /** Minimum payment token bid amount */
    min_bid_amount?: string;
    beneficiary?: string;
}
export interface MsgCreateAuctionAminoMsg {
    type: "auction/MsgCreateAuction";
    value: MsgCreateAuctionAmino;
}
/** MsgCreateAuction defines the message for adding a token auction */
export interface MsgCreateAuctionSDKType {
    admin: string;
    auction_name: string;
    auction_type: AuctionType;
    selling_denom: string;
    payment_denom: string;
    enabled: boolean;
    min_price_multiplier: string;
    min_bid_amount: string;
    beneficiary: string;
}
export interface MsgCreateAuctionResponse {
}
export interface MsgCreateAuctionResponseProtoMsg {
    typeUrl: "/stride.auction.MsgCreateAuctionResponse";
    value: Uint8Array;
}
export interface MsgCreateAuctionResponseAmino {
}
export interface MsgCreateAuctionResponseAminoMsg {
    type: "/stride.auction.MsgCreateAuctionResponse";
    value: MsgCreateAuctionResponseAmino;
}
export interface MsgCreateAuctionResponseSDKType {
}
/** MsgUpdateAuction defines the message for adding a token auction */
export interface MsgUpdateAuction {
    /** Admin's address */
    admin: string;
    /** A unique auction name */
    auctionName: string;
    /** Auction type */
    auctionType: AuctionType;
    /** Whether auction is active */
    enabled: boolean;
    /**
     * Minimum price multiplier (e.g. 0.95 for 5% discount off the oracle price)
     * bids_floor_price = oracle_price * min_price_multiplier
     */
    minPriceMultiplier: string;
    /** Minimum payment token bid amount */
    minBidAmount: string;
    beneficiary: string;
}
export interface MsgUpdateAuctionProtoMsg {
    typeUrl: "/stride.auction.MsgUpdateAuction";
    value: Uint8Array;
}
/** MsgUpdateAuction defines the message for adding a token auction */
export interface MsgUpdateAuctionAmino {
    /** Admin's address */
    admin?: string;
    /** A unique auction name */
    auction_name?: string;
    /** Auction type */
    auction_type?: AuctionType;
    /** Whether auction is active */
    enabled?: boolean;
    /**
     * Minimum price multiplier (e.g. 0.95 for 5% discount off the oracle price)
     * bids_floor_price = oracle_price * min_price_multiplier
     */
    min_price_multiplier?: string;
    /** Minimum payment token bid amount */
    min_bid_amount?: string;
    beneficiary?: string;
}
export interface MsgUpdateAuctionAminoMsg {
    type: "auction/MsgUpdateAuction";
    value: MsgUpdateAuctionAmino;
}
/** MsgUpdateAuction defines the message for adding a token auction */
export interface MsgUpdateAuctionSDKType {
    admin: string;
    auction_name: string;
    auction_type: AuctionType;
    enabled: boolean;
    min_price_multiplier: string;
    min_bid_amount: string;
    beneficiary: string;
}
export interface MsgUpdateAuctionResponse {
}
export interface MsgUpdateAuctionResponseProtoMsg {
    typeUrl: "/stride.auction.MsgUpdateAuctionResponse";
    value: Uint8Array;
}
export interface MsgUpdateAuctionResponseAmino {
}
export interface MsgUpdateAuctionResponseAminoMsg {
    type: "/stride.auction.MsgUpdateAuctionResponse";
    value: MsgUpdateAuctionResponseAmino;
}
export interface MsgUpdateAuctionResponseSDKType {
}
export declare const MsgPlaceBid: {
    typeUrl: string;
    encode(message: MsgPlaceBid, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgPlaceBid;
    fromPartial(object: Partial<MsgPlaceBid>): MsgPlaceBid;
    fromAmino(object: MsgPlaceBidAmino): MsgPlaceBid;
    toAmino(message: MsgPlaceBid): MsgPlaceBidAmino;
    fromAminoMsg(object: MsgPlaceBidAminoMsg): MsgPlaceBid;
    toAminoMsg(message: MsgPlaceBid): MsgPlaceBidAminoMsg;
    fromProtoMsg(message: MsgPlaceBidProtoMsg): MsgPlaceBid;
    toProto(message: MsgPlaceBid): Uint8Array;
    toProtoMsg(message: MsgPlaceBid): MsgPlaceBidProtoMsg;
};
export declare const MsgPlaceBidResponse: {
    typeUrl: string;
    encode(_: MsgPlaceBidResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgPlaceBidResponse;
    fromPartial(_: Partial<MsgPlaceBidResponse>): MsgPlaceBidResponse;
    fromAmino(_: MsgPlaceBidResponseAmino): MsgPlaceBidResponse;
    toAmino(_: MsgPlaceBidResponse): MsgPlaceBidResponseAmino;
    fromAminoMsg(object: MsgPlaceBidResponseAminoMsg): MsgPlaceBidResponse;
    fromProtoMsg(message: MsgPlaceBidResponseProtoMsg): MsgPlaceBidResponse;
    toProto(message: MsgPlaceBidResponse): Uint8Array;
    toProtoMsg(message: MsgPlaceBidResponse): MsgPlaceBidResponseProtoMsg;
};
export declare const MsgCreateAuction: {
    typeUrl: string;
    encode(message: MsgCreateAuction, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateAuction;
    fromPartial(object: Partial<MsgCreateAuction>): MsgCreateAuction;
    fromAmino(object: MsgCreateAuctionAmino): MsgCreateAuction;
    toAmino(message: MsgCreateAuction): MsgCreateAuctionAmino;
    fromAminoMsg(object: MsgCreateAuctionAminoMsg): MsgCreateAuction;
    toAminoMsg(message: MsgCreateAuction): MsgCreateAuctionAminoMsg;
    fromProtoMsg(message: MsgCreateAuctionProtoMsg): MsgCreateAuction;
    toProto(message: MsgCreateAuction): Uint8Array;
    toProtoMsg(message: MsgCreateAuction): MsgCreateAuctionProtoMsg;
};
export declare const MsgCreateAuctionResponse: {
    typeUrl: string;
    encode(_: MsgCreateAuctionResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateAuctionResponse;
    fromPartial(_: Partial<MsgCreateAuctionResponse>): MsgCreateAuctionResponse;
    fromAmino(_: MsgCreateAuctionResponseAmino): MsgCreateAuctionResponse;
    toAmino(_: MsgCreateAuctionResponse): MsgCreateAuctionResponseAmino;
    fromAminoMsg(object: MsgCreateAuctionResponseAminoMsg): MsgCreateAuctionResponse;
    fromProtoMsg(message: MsgCreateAuctionResponseProtoMsg): MsgCreateAuctionResponse;
    toProto(message: MsgCreateAuctionResponse): Uint8Array;
    toProtoMsg(message: MsgCreateAuctionResponse): MsgCreateAuctionResponseProtoMsg;
};
export declare const MsgUpdateAuction: {
    typeUrl: string;
    encode(message: MsgUpdateAuction, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateAuction;
    fromPartial(object: Partial<MsgUpdateAuction>): MsgUpdateAuction;
    fromAmino(object: MsgUpdateAuctionAmino): MsgUpdateAuction;
    toAmino(message: MsgUpdateAuction): MsgUpdateAuctionAmino;
    fromAminoMsg(object: MsgUpdateAuctionAminoMsg): MsgUpdateAuction;
    toAminoMsg(message: MsgUpdateAuction): MsgUpdateAuctionAminoMsg;
    fromProtoMsg(message: MsgUpdateAuctionProtoMsg): MsgUpdateAuction;
    toProto(message: MsgUpdateAuction): Uint8Array;
    toProtoMsg(message: MsgUpdateAuction): MsgUpdateAuctionProtoMsg;
};
export declare const MsgUpdateAuctionResponse: {
    typeUrl: string;
    encode(_: MsgUpdateAuctionResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateAuctionResponse;
    fromPartial(_: Partial<MsgUpdateAuctionResponse>): MsgUpdateAuctionResponse;
    fromAmino(_: MsgUpdateAuctionResponseAmino): MsgUpdateAuctionResponse;
    toAmino(_: MsgUpdateAuctionResponse): MsgUpdateAuctionResponseAmino;
    fromAminoMsg(object: MsgUpdateAuctionResponseAminoMsg): MsgUpdateAuctionResponse;
    fromProtoMsg(message: MsgUpdateAuctionResponseProtoMsg): MsgUpdateAuctionResponse;
    toProto(message: MsgUpdateAuctionResponse): Uint8Array;
    toProtoMsg(message: MsgUpdateAuctionResponse): MsgUpdateAuctionResponseProtoMsg;
};
