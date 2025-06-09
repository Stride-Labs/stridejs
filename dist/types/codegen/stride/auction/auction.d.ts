import { BinaryReader, BinaryWriter } from "../../binary";
export declare enum AuctionType {
    /** AUCTION_TYPE_UNSPECIFIED - Default value - should not be used */
    AUCTION_TYPE_UNSPECIFIED = 0,
    /** AUCTION_TYPE_FCFS - First-Come First-Served auction */
    AUCTION_TYPE_FCFS = 1,
    UNRECOGNIZED = -1
}
export declare const AuctionTypeSDKType: typeof AuctionType;
export declare const AuctionTypeAmino: typeof AuctionType;
export declare function auctionTypeFromJSON(object: any): AuctionType;
export declare function auctionTypeToJSON(object: AuctionType): string;
export interface Params {
}
export interface ParamsProtoMsg {
    typeUrl: "/stride.auction.Params";
    value: Uint8Array;
}
/**
 * @name ParamsAmino
 * @package stride.auction
 * @see proto type: stride.auction.Params
 */
export interface ParamsAmino {
}
export interface ParamsAminoMsg {
    type: "/stride.auction.Params";
    value: ParamsAmino;
}
export interface ParamsSDKType {
}
export interface Auction {
    /** Auction type */
    type: AuctionType;
    /** A unique auction name */
    name: string;
    /** Token denom being sold in the auction */
    sellingDenom: string;
    /** Token denom used to place bids */
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
    /** Address to send the auction proceeds to */
    beneficiary: string;
    /** Total amount of payment token received */
    totalPaymentTokenReceived: string;
    /** Total amount of selling token sold */
    totalSellingTokenSold: string;
}
export interface AuctionProtoMsg {
    typeUrl: "/stride.auction.Auction";
    value: Uint8Array;
}
/**
 * @name AuctionAmino
 * @package stride.auction
 * @see proto type: stride.auction.Auction
 */
export interface AuctionAmino {
    /**
     * Auction type
     */
    type?: AuctionType;
    /**
     * A unique auction name
     */
    name?: string;
    /**
     * Token denom being sold in the auction
     */
    selling_denom?: string;
    /**
     * Token denom used to place bids
     */
    payment_denom?: string;
    /**
     * Whether auction is active
     */
    enabled?: boolean;
    /**
     * Minimum price multiplier (e.g. 0.95 for 5% discount off the oracle price)
     * bids_floor_price = oracle_price * min_price_multiplier
     */
    min_price_multiplier?: string;
    /**
     * Minimum payment token bid amount
     */
    min_bid_amount?: string;
    /**
     * Address to send the auction proceeds to
     */
    beneficiary?: string;
    /**
     * Total amount of payment token received
     */
    total_payment_token_received?: string;
    /**
     * Total amount of selling token sold
     */
    total_selling_token_sold?: string;
}
export interface AuctionAminoMsg {
    type: "/stride.auction.Auction";
    value: AuctionAmino;
}
export interface AuctionSDKType {
    type: AuctionType;
    name: string;
    selling_denom: string;
    payment_denom: string;
    enabled: boolean;
    min_price_multiplier: string;
    min_bid_amount: string;
    beneficiary: string;
    total_payment_token_received: string;
    total_selling_token_sold: string;
}
export declare const Params: {
    typeUrl: string;
    encode(_: Params, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Params;
    fromPartial(_: Partial<Params>): Params;
    fromAmino(_: ParamsAmino): Params;
    toAmino(_: Params): ParamsAmino;
    fromAminoMsg(object: ParamsAminoMsg): Params;
    fromProtoMsg(message: ParamsProtoMsg): Params;
    toProto(message: Params): Uint8Array;
    toProtoMsg(message: Params): ParamsProtoMsg;
};
export declare const Auction: {
    typeUrl: string;
    encode(message: Auction, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Auction;
    fromPartial(object: Partial<Auction>): Auction;
    fromAmino(object: AuctionAmino): Auction;
    toAmino(message: Auction): AuctionAmino;
    fromAminoMsg(object: AuctionAminoMsg): Auction;
    fromProtoMsg(message: AuctionProtoMsg): Auction;
    toProto(message: Auction): Uint8Array;
    toProtoMsg(message: Auction): AuctionProtoMsg;
};
