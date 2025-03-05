import { AuctionType } from "./auction";
import { BinaryReader, BinaryWriter } from "../../binary";
import { Decimal } from "@cosmjs/math";
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
export interface MsgPlaceBidResponse {}
export interface MsgPlaceBidResponseProtoMsg {
  typeUrl: "/stride.auction.MsgPlaceBidResponse";
  value: Uint8Array;
}
export interface MsgPlaceBidResponseAmino {}
export interface MsgPlaceBidResponseAminoMsg {
  type: "/stride.auction.MsgPlaceBidResponse";
  value: MsgPlaceBidResponseAmino;
}
export interface MsgPlaceBidResponseSDKType {}
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
export interface MsgCreateAuctionResponse {}
export interface MsgCreateAuctionResponseProtoMsg {
  typeUrl: "/stride.auction.MsgCreateAuctionResponse";
  value: Uint8Array;
}
export interface MsgCreateAuctionResponseAmino {}
export interface MsgCreateAuctionResponseAminoMsg {
  type: "/stride.auction.MsgCreateAuctionResponse";
  value: MsgCreateAuctionResponseAmino;
}
export interface MsgCreateAuctionResponseSDKType {}
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
export interface MsgUpdateAuctionResponse {}
export interface MsgUpdateAuctionResponseProtoMsg {
  typeUrl: "/stride.auction.MsgUpdateAuctionResponse";
  value: Uint8Array;
}
export interface MsgUpdateAuctionResponseAmino {}
export interface MsgUpdateAuctionResponseAminoMsg {
  type: "/stride.auction.MsgUpdateAuctionResponse";
  value: MsgUpdateAuctionResponseAmino;
}
export interface MsgUpdateAuctionResponseSDKType {}
function createBaseMsgPlaceBid(): MsgPlaceBid {
  return {
    bidder: "",
    auctionName: "",
    sellingTokenAmount: "",
    paymentTokenAmount: ""
  };
}
export const MsgPlaceBid = {
  typeUrl: "/stride.auction.MsgPlaceBid",
  encode(message: MsgPlaceBid, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.bidder !== "") {
      writer.uint32(10).string(message.bidder);
    }
    if (message.auctionName !== "") {
      writer.uint32(18).string(message.auctionName);
    }
    if (message.sellingTokenAmount !== "") {
      writer.uint32(26).string(message.sellingTokenAmount);
    }
    if (message.paymentTokenAmount !== "") {
      writer.uint32(34).string(message.paymentTokenAmount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgPlaceBid {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPlaceBid();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bidder = reader.string();
          break;
        case 2:
          message.auctionName = reader.string();
          break;
        case 3:
          message.sellingTokenAmount = reader.string();
          break;
        case 4:
          message.paymentTokenAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgPlaceBid>): MsgPlaceBid {
    const message = createBaseMsgPlaceBid();
    message.bidder = object.bidder ?? "";
    message.auctionName = object.auctionName ?? "";
    message.sellingTokenAmount = object.sellingTokenAmount ?? "";
    message.paymentTokenAmount = object.paymentTokenAmount ?? "";
    return message;
  },
  fromAmino(object: MsgPlaceBidAmino): MsgPlaceBid {
    const message = createBaseMsgPlaceBid();
    if (object.bidder !== undefined && object.bidder !== null) {
      message.bidder = object.bidder;
    }
    if (object.auction_name !== undefined && object.auction_name !== null) {
      message.auctionName = object.auction_name;
    }
    if (object.selling_token_amount !== undefined && object.selling_token_amount !== null) {
      message.sellingTokenAmount = object.selling_token_amount;
    }
    if (object.payment_token_amount !== undefined && object.payment_token_amount !== null) {
      message.paymentTokenAmount = object.payment_token_amount;
    }
    return message;
  },
  toAmino(message: MsgPlaceBid): MsgPlaceBidAmino {
    const obj: any = {};
    obj.bidder = message.bidder === "" ? undefined : message.bidder;
    obj.auction_name = message.auctionName === "" ? undefined : message.auctionName;
    obj.selling_token_amount = message.sellingTokenAmount === "" ? undefined : message.sellingTokenAmount;
    obj.payment_token_amount = message.paymentTokenAmount === "" ? undefined : message.paymentTokenAmount;
    return obj;
  },
  fromAminoMsg(object: MsgPlaceBidAminoMsg): MsgPlaceBid {
    return MsgPlaceBid.fromAmino(object.value);
  },
  toAminoMsg(message: MsgPlaceBid): MsgPlaceBidAminoMsg {
    return {
      type: "auction/MsgPlaceBid",
      value: MsgPlaceBid.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgPlaceBidProtoMsg): MsgPlaceBid {
    return MsgPlaceBid.decode(message.value);
  },
  toProto(message: MsgPlaceBid): Uint8Array {
    return MsgPlaceBid.encode(message).finish();
  },
  toProtoMsg(message: MsgPlaceBid): MsgPlaceBidProtoMsg {
    return {
      typeUrl: "/stride.auction.MsgPlaceBid",
      value: MsgPlaceBid.encode(message).finish()
    };
  }
};
function createBaseMsgPlaceBidResponse(): MsgPlaceBidResponse {
  return {};
}
export const MsgPlaceBidResponse = {
  typeUrl: "/stride.auction.MsgPlaceBidResponse",
  encode(_: MsgPlaceBidResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgPlaceBidResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPlaceBidResponse();
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
  fromPartial(_: Partial<MsgPlaceBidResponse>): MsgPlaceBidResponse {
    const message = createBaseMsgPlaceBidResponse();
    return message;
  },
  fromAmino(_: MsgPlaceBidResponseAmino): MsgPlaceBidResponse {
    const message = createBaseMsgPlaceBidResponse();
    return message;
  },
  toAmino(_: MsgPlaceBidResponse): MsgPlaceBidResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgPlaceBidResponseAminoMsg): MsgPlaceBidResponse {
    return MsgPlaceBidResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgPlaceBidResponseProtoMsg): MsgPlaceBidResponse {
    return MsgPlaceBidResponse.decode(message.value);
  },
  toProto(message: MsgPlaceBidResponse): Uint8Array {
    return MsgPlaceBidResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgPlaceBidResponse): MsgPlaceBidResponseProtoMsg {
    return {
      typeUrl: "/stride.auction.MsgPlaceBidResponse",
      value: MsgPlaceBidResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCreateAuction(): MsgCreateAuction {
  return {
    admin: "",
    auctionName: "",
    auctionType: 0,
    sellingDenom: "",
    paymentDenom: "",
    enabled: false,
    minPriceMultiplier: "",
    minBidAmount: "",
    beneficiary: ""
  };
}
export const MsgCreateAuction = {
  typeUrl: "/stride.auction.MsgCreateAuction",
  encode(message: MsgCreateAuction, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (message.auctionName !== "") {
      writer.uint32(18).string(message.auctionName);
    }
    if (message.auctionType !== 0) {
      writer.uint32(24).int32(message.auctionType);
    }
    if (message.sellingDenom !== "") {
      writer.uint32(34).string(message.sellingDenom);
    }
    if (message.paymentDenom !== "") {
      writer.uint32(42).string(message.paymentDenom);
    }
    if (message.enabled === true) {
      writer.uint32(48).bool(message.enabled);
    }
    if (message.minPriceMultiplier !== "") {
      writer.uint32(58).string(Decimal.fromUserInput(message.minPriceMultiplier, 18).atomics);
    }
    if (message.minBidAmount !== "") {
      writer.uint32(66).string(message.minBidAmount);
    }
    if (message.beneficiary !== "") {
      writer.uint32(74).string(message.beneficiary);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateAuction {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateAuction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.auctionName = reader.string();
          break;
        case 3:
          message.auctionType = reader.int32() as any;
          break;
        case 4:
          message.sellingDenom = reader.string();
          break;
        case 5:
          message.paymentDenom = reader.string();
          break;
        case 6:
          message.enabled = reader.bool();
          break;
        case 7:
          message.minPriceMultiplier = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 8:
          message.minBidAmount = reader.string();
          break;
        case 9:
          message.beneficiary = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgCreateAuction>): MsgCreateAuction {
    const message = createBaseMsgCreateAuction();
    message.admin = object.admin ?? "";
    message.auctionName = object.auctionName ?? "";
    message.auctionType = object.auctionType ?? 0;
    message.sellingDenom = object.sellingDenom ?? "";
    message.paymentDenom = object.paymentDenom ?? "";
    message.enabled = object.enabled ?? false;
    message.minPriceMultiplier = object.minPriceMultiplier ?? "";
    message.minBidAmount = object.minBidAmount ?? "";
    message.beneficiary = object.beneficiary ?? "";
    return message;
  },
  fromAmino(object: MsgCreateAuctionAmino): MsgCreateAuction {
    const message = createBaseMsgCreateAuction();
    if (object.admin !== undefined && object.admin !== null) {
      message.admin = object.admin;
    }
    if (object.auction_name !== undefined && object.auction_name !== null) {
      message.auctionName = object.auction_name;
    }
    if (object.auction_type !== undefined && object.auction_type !== null) {
      message.auctionType = object.auction_type;
    }
    if (object.selling_denom !== undefined && object.selling_denom !== null) {
      message.sellingDenom = object.selling_denom;
    }
    if (object.payment_denom !== undefined && object.payment_denom !== null) {
      message.paymentDenom = object.payment_denom;
    }
    if (object.enabled !== undefined && object.enabled !== null) {
      message.enabled = object.enabled;
    }
    if (object.min_price_multiplier !== undefined && object.min_price_multiplier !== null) {
      message.minPriceMultiplier = object.min_price_multiplier;
    }
    if (object.min_bid_amount !== undefined && object.min_bid_amount !== null) {
      message.minBidAmount = object.min_bid_amount;
    }
    if (object.beneficiary !== undefined && object.beneficiary !== null) {
      message.beneficiary = object.beneficiary;
    }
    return message;
  },
  toAmino(message: MsgCreateAuction): MsgCreateAuctionAmino {
    const obj: any = {};
    obj.admin = message.admin === "" ? undefined : message.admin;
    obj.auction_name = message.auctionName === "" ? undefined : message.auctionName;
    obj.auction_type = message.auctionType === 0 ? undefined : message.auctionType;
    obj.selling_denom = message.sellingDenom === "" ? undefined : message.sellingDenom;
    obj.payment_denom = message.paymentDenom === "" ? undefined : message.paymentDenom;
    obj.enabled = message.enabled === false ? undefined : message.enabled;
    obj.min_price_multiplier = message.minPriceMultiplier === "" ? undefined : message.minPriceMultiplier;
    obj.min_bid_amount = message.minBidAmount === "" ? undefined : message.minBidAmount;
    obj.beneficiary = message.beneficiary === "" ? undefined : message.beneficiary;
    return obj;
  },
  fromAminoMsg(object: MsgCreateAuctionAminoMsg): MsgCreateAuction {
    return MsgCreateAuction.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCreateAuction): MsgCreateAuctionAminoMsg {
    return {
      type: "auction/MsgCreateAuction",
      value: MsgCreateAuction.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCreateAuctionProtoMsg): MsgCreateAuction {
    return MsgCreateAuction.decode(message.value);
  },
  toProto(message: MsgCreateAuction): Uint8Array {
    return MsgCreateAuction.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateAuction): MsgCreateAuctionProtoMsg {
    return {
      typeUrl: "/stride.auction.MsgCreateAuction",
      value: MsgCreateAuction.encode(message).finish()
    };
  }
};
function createBaseMsgCreateAuctionResponse(): MsgCreateAuctionResponse {
  return {};
}
export const MsgCreateAuctionResponse = {
  typeUrl: "/stride.auction.MsgCreateAuctionResponse",
  encode(_: MsgCreateAuctionResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateAuctionResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateAuctionResponse();
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
  fromPartial(_: Partial<MsgCreateAuctionResponse>): MsgCreateAuctionResponse {
    const message = createBaseMsgCreateAuctionResponse();
    return message;
  },
  fromAmino(_: MsgCreateAuctionResponseAmino): MsgCreateAuctionResponse {
    const message = createBaseMsgCreateAuctionResponse();
    return message;
  },
  toAmino(_: MsgCreateAuctionResponse): MsgCreateAuctionResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCreateAuctionResponseAminoMsg): MsgCreateAuctionResponse {
    return MsgCreateAuctionResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateAuctionResponseProtoMsg): MsgCreateAuctionResponse {
    return MsgCreateAuctionResponse.decode(message.value);
  },
  toProto(message: MsgCreateAuctionResponse): Uint8Array {
    return MsgCreateAuctionResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateAuctionResponse): MsgCreateAuctionResponseProtoMsg {
    return {
      typeUrl: "/stride.auction.MsgCreateAuctionResponse",
      value: MsgCreateAuctionResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateAuction(): MsgUpdateAuction {
  return {
    admin: "",
    auctionName: "",
    auctionType: 0,
    enabled: false,
    minPriceMultiplier: "",
    minBidAmount: "",
    beneficiary: ""
  };
}
export const MsgUpdateAuction = {
  typeUrl: "/stride.auction.MsgUpdateAuction",
  encode(message: MsgUpdateAuction, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (message.auctionName !== "") {
      writer.uint32(18).string(message.auctionName);
    }
    if (message.auctionType !== 0) {
      writer.uint32(24).int32(message.auctionType);
    }
    if (message.enabled === true) {
      writer.uint32(32).bool(message.enabled);
    }
    if (message.minPriceMultiplier !== "") {
      writer.uint32(42).string(Decimal.fromUserInput(message.minPriceMultiplier, 18).atomics);
    }
    if (message.minBidAmount !== "") {
      writer.uint32(50).string(message.minBidAmount);
    }
    if (message.beneficiary !== "") {
      writer.uint32(58).string(message.beneficiary);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateAuction {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateAuction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.auctionName = reader.string();
          break;
        case 3:
          message.auctionType = reader.int32() as any;
          break;
        case 4:
          message.enabled = reader.bool();
          break;
        case 5:
          message.minPriceMultiplier = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 6:
          message.minBidAmount = reader.string();
          break;
        case 7:
          message.beneficiary = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUpdateAuction>): MsgUpdateAuction {
    const message = createBaseMsgUpdateAuction();
    message.admin = object.admin ?? "";
    message.auctionName = object.auctionName ?? "";
    message.auctionType = object.auctionType ?? 0;
    message.enabled = object.enabled ?? false;
    message.minPriceMultiplier = object.minPriceMultiplier ?? "";
    message.minBidAmount = object.minBidAmount ?? "";
    message.beneficiary = object.beneficiary ?? "";
    return message;
  },
  fromAmino(object: MsgUpdateAuctionAmino): MsgUpdateAuction {
    const message = createBaseMsgUpdateAuction();
    if (object.admin !== undefined && object.admin !== null) {
      message.admin = object.admin;
    }
    if (object.auction_name !== undefined && object.auction_name !== null) {
      message.auctionName = object.auction_name;
    }
    if (object.auction_type !== undefined && object.auction_type !== null) {
      message.auctionType = object.auction_type;
    }
    if (object.enabled !== undefined && object.enabled !== null) {
      message.enabled = object.enabled;
    }
    if (object.min_price_multiplier !== undefined && object.min_price_multiplier !== null) {
      message.minPriceMultiplier = object.min_price_multiplier;
    }
    if (object.min_bid_amount !== undefined && object.min_bid_amount !== null) {
      message.minBidAmount = object.min_bid_amount;
    }
    if (object.beneficiary !== undefined && object.beneficiary !== null) {
      message.beneficiary = object.beneficiary;
    }
    return message;
  },
  toAmino(message: MsgUpdateAuction): MsgUpdateAuctionAmino {
    const obj: any = {};
    obj.admin = message.admin === "" ? undefined : message.admin;
    obj.auction_name = message.auctionName === "" ? undefined : message.auctionName;
    obj.auction_type = message.auctionType === 0 ? undefined : message.auctionType;
    obj.enabled = message.enabled === false ? undefined : message.enabled;
    obj.min_price_multiplier = message.minPriceMultiplier === "" ? undefined : message.minPriceMultiplier;
    obj.min_bid_amount = message.minBidAmount === "" ? undefined : message.minBidAmount;
    obj.beneficiary = message.beneficiary === "" ? undefined : message.beneficiary;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateAuctionAminoMsg): MsgUpdateAuction {
    return MsgUpdateAuction.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateAuction): MsgUpdateAuctionAminoMsg {
    return {
      type: "auction/MsgUpdateAuction",
      value: MsgUpdateAuction.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateAuctionProtoMsg): MsgUpdateAuction {
    return MsgUpdateAuction.decode(message.value);
  },
  toProto(message: MsgUpdateAuction): Uint8Array {
    return MsgUpdateAuction.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateAuction): MsgUpdateAuctionProtoMsg {
    return {
      typeUrl: "/stride.auction.MsgUpdateAuction",
      value: MsgUpdateAuction.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateAuctionResponse(): MsgUpdateAuctionResponse {
  return {};
}
export const MsgUpdateAuctionResponse = {
  typeUrl: "/stride.auction.MsgUpdateAuctionResponse",
  encode(_: MsgUpdateAuctionResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateAuctionResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateAuctionResponse();
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
  fromPartial(_: Partial<MsgUpdateAuctionResponse>): MsgUpdateAuctionResponse {
    const message = createBaseMsgUpdateAuctionResponse();
    return message;
  },
  fromAmino(_: MsgUpdateAuctionResponseAmino): MsgUpdateAuctionResponse {
    const message = createBaseMsgUpdateAuctionResponse();
    return message;
  },
  toAmino(_: MsgUpdateAuctionResponse): MsgUpdateAuctionResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateAuctionResponseAminoMsg): MsgUpdateAuctionResponse {
    return MsgUpdateAuctionResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateAuctionResponseProtoMsg): MsgUpdateAuctionResponse {
    return MsgUpdateAuctionResponse.decode(message.value);
  },
  toProto(message: MsgUpdateAuctionResponse): Uint8Array {
    return MsgUpdateAuctionResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateAuctionResponse): MsgUpdateAuctionResponseProtoMsg {
    return {
      typeUrl: "/stride.auction.MsgUpdateAuctionResponse",
      value: MsgUpdateAuctionResponse.encode(message).finish()
    };
  }
};