import { BinaryReader, BinaryWriter } from "../../binary";
import { Decimal } from "@cosmjs/math";
export enum AuctionType {
  /** AUCTION_TYPE_UNSPECIFIED - Default value - should not be used */
  AUCTION_TYPE_UNSPECIFIED = 0,
  /** AUCTION_TYPE_FCFS - First-Come First-Served auction */
  AUCTION_TYPE_FCFS = 1,
  UNRECOGNIZED = -1,
}
export const AuctionTypeSDKType = AuctionType;
export const AuctionTypeAmino = AuctionType;
export function auctionTypeFromJSON(object: any): AuctionType {
  switch (object) {
    case 0:
    case "AUCTION_TYPE_UNSPECIFIED":
      return AuctionType.AUCTION_TYPE_UNSPECIFIED;
    case 1:
    case "AUCTION_TYPE_FCFS":
      return AuctionType.AUCTION_TYPE_FCFS;
    case -1:
    case "UNRECOGNIZED":
    default:
      return AuctionType.UNRECOGNIZED;
  }
}
export function auctionTypeToJSON(object: AuctionType): string {
  switch (object) {
    case AuctionType.AUCTION_TYPE_UNSPECIFIED:
      return "AUCTION_TYPE_UNSPECIFIED";
    case AuctionType.AUCTION_TYPE_FCFS:
      return "AUCTION_TYPE_FCFS";
    case AuctionType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export interface Params {}
export interface ParamsProtoMsg {
  typeUrl: "/stride.auction.Params";
  value: Uint8Array;
}
export interface ParamsAmino {}
export interface ParamsAminoMsg {
  type: "/stride.auction.Params";
  value: ParamsAmino;
}
export interface ParamsSDKType {}
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
export interface AuctionAmino {
  /** Auction type */
  type?: AuctionType;
  /** A unique auction name */
  name?: string;
  /** Token denom being sold in the auction */
  selling_denom?: string;
  /** Token denom used to place bids */
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
  /** Address to send the auction proceeds to */
  beneficiary?: string;
  /** Total amount of payment token received */
  total_payment_token_received?: string;
  /** Total amount of selling token sold */
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
function createBaseParams(): Params {
  return {};
}
export const Params = {
  typeUrl: "/stride.auction.Params",
  encode(_: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
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
  fromPartial(_: Partial<Params>): Params {
    const message = createBaseParams();
    return message;
  },
  fromAmino(_: ParamsAmino): Params {
    const message = createBaseParams();
    return message;
  },
  toAmino(_: Params): ParamsAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/stride.auction.Params",
      value: Params.encode(message).finish()
    };
  }
};
function createBaseAuction(): Auction {
  return {
    type: 0,
    name: "",
    sellingDenom: "",
    paymentDenom: "",
    enabled: false,
    minPriceMultiplier: "",
    minBidAmount: "",
    beneficiary: "",
    totalPaymentTokenReceived: "",
    totalSellingTokenSold: ""
  };
}
export const Auction = {
  typeUrl: "/stride.auction.Auction",
  encode(message: Auction, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.sellingDenom !== "") {
      writer.uint32(26).string(message.sellingDenom);
    }
    if (message.paymentDenom !== "") {
      writer.uint32(34).string(message.paymentDenom);
    }
    if (message.enabled === true) {
      writer.uint32(40).bool(message.enabled);
    }
    if (message.minPriceMultiplier !== "") {
      writer.uint32(50).string(Decimal.fromUserInput(message.minPriceMultiplier, 18).atomics);
    }
    if (message.minBidAmount !== "") {
      writer.uint32(58).string(message.minBidAmount);
    }
    if (message.beneficiary !== "") {
      writer.uint32(66).string(message.beneficiary);
    }
    if (message.totalPaymentTokenReceived !== "") {
      writer.uint32(74).string(message.totalPaymentTokenReceived);
    }
    if (message.totalSellingTokenSold !== "") {
      writer.uint32(82).string(message.totalSellingTokenSold);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Auction {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.int32() as any;
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.sellingDenom = reader.string();
          break;
        case 4:
          message.paymentDenom = reader.string();
          break;
        case 5:
          message.enabled = reader.bool();
          break;
        case 6:
          message.minPriceMultiplier = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 7:
          message.minBidAmount = reader.string();
          break;
        case 8:
          message.beneficiary = reader.string();
          break;
        case 9:
          message.totalPaymentTokenReceived = reader.string();
          break;
        case 10:
          message.totalSellingTokenSold = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Auction>): Auction {
    const message = createBaseAuction();
    message.type = object.type ?? 0;
    message.name = object.name ?? "";
    message.sellingDenom = object.sellingDenom ?? "";
    message.paymentDenom = object.paymentDenom ?? "";
    message.enabled = object.enabled ?? false;
    message.minPriceMultiplier = object.minPriceMultiplier ?? "";
    message.minBidAmount = object.minBidAmount ?? "";
    message.beneficiary = object.beneficiary ?? "";
    message.totalPaymentTokenReceived = object.totalPaymentTokenReceived ?? "";
    message.totalSellingTokenSold = object.totalSellingTokenSold ?? "";
    return message;
  },
  fromAmino(object: AuctionAmino): Auction {
    const message = createBaseAuction();
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
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
    if (object.total_payment_token_received !== undefined && object.total_payment_token_received !== null) {
      message.totalPaymentTokenReceived = object.total_payment_token_received;
    }
    if (object.total_selling_token_sold !== undefined && object.total_selling_token_sold !== null) {
      message.totalSellingTokenSold = object.total_selling_token_sold;
    }
    return message;
  },
  toAmino(message: Auction): AuctionAmino {
    const obj: any = {};
    obj.type = message.type === 0 ? undefined : message.type;
    obj.name = message.name === "" ? undefined : message.name;
    obj.selling_denom = message.sellingDenom === "" ? undefined : message.sellingDenom;
    obj.payment_denom = message.paymentDenom === "" ? undefined : message.paymentDenom;
    obj.enabled = message.enabled === false ? undefined : message.enabled;
    obj.min_price_multiplier = message.minPriceMultiplier === "" ? undefined : message.minPriceMultiplier;
    obj.min_bid_amount = message.minBidAmount === "" ? undefined : message.minBidAmount;
    obj.beneficiary = message.beneficiary === "" ? undefined : message.beneficiary;
    obj.total_payment_token_received = message.totalPaymentTokenReceived === "" ? undefined : message.totalPaymentTokenReceived;
    obj.total_selling_token_sold = message.totalSellingTokenSold === "" ? undefined : message.totalSellingTokenSold;
    return obj;
  },
  fromAminoMsg(object: AuctionAminoMsg): Auction {
    return Auction.fromAmino(object.value);
  },
  fromProtoMsg(message: AuctionProtoMsg): Auction {
    return Auction.decode(message.value);
  },
  toProto(message: Auction): Uint8Array {
    return Auction.encode(message).finish();
  },
  toProtoMsg(message: Auction): AuctionProtoMsg {
    return {
      typeUrl: "/stride.auction.Auction",
      value: Auction.encode(message).finish()
    };
  }
};