import { BinaryReader, BinaryWriter } from "../../binary";
import { Decimal } from "@cosmjs/math";
var AuctionType = /* @__PURE__ */ ((AuctionType2) => {
  AuctionType2[AuctionType2["AUCTION_TYPE_UNSPECIFIED"] = 0] = "AUCTION_TYPE_UNSPECIFIED";
  AuctionType2[AuctionType2["AUCTION_TYPE_FCFS"] = 1] = "AUCTION_TYPE_FCFS";
  AuctionType2[AuctionType2["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return AuctionType2;
})(AuctionType || {});
const AuctionTypeSDKType = AuctionType;
const AuctionTypeAmino = AuctionType;
function auctionTypeFromJSON(object) {
  switch (object) {
    case 0:
    case "AUCTION_TYPE_UNSPECIFIED":
      return 0 /* AUCTION_TYPE_UNSPECIFIED */;
    case 1:
    case "AUCTION_TYPE_FCFS":
      return 1 /* AUCTION_TYPE_FCFS */;
    case -1:
    case "UNRECOGNIZED":
    default:
      return -1 /* UNRECOGNIZED */;
  }
}
function auctionTypeToJSON(object) {
  switch (object) {
    case 0 /* AUCTION_TYPE_UNSPECIFIED */:
      return "AUCTION_TYPE_UNSPECIFIED";
    case 1 /* AUCTION_TYPE_FCFS */:
      return "AUCTION_TYPE_FCFS";
    case -1 /* UNRECOGNIZED */:
    default:
      return "UNRECOGNIZED";
  }
}
function createBaseParams() {
  return {};
}
const Params = {
  typeUrl: "/stride.auction.Params",
  encode(_, writer = BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
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
  fromPartial(_) {
    const message = createBaseParams();
    return message;
  },
  fromAmino(_) {
    const message = createBaseParams();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return Params.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return Params.decode(message.value);
  },
  toProto(message) {
    return Params.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.auction.Params",
      value: Params.encode(message).finish()
    };
  }
};
function createBaseAuction() {
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
const Auction = {
  typeUrl: "/stride.auction.Auction",
  encode(message, writer = BinaryWriter.create()) {
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
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseAuction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.int32();
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
  fromPartial(object) {
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
  fromAmino(object) {
    const message = createBaseAuction();
    if (object.type !== void 0 && object.type !== null) {
      message.type = object.type;
    }
    if (object.name !== void 0 && object.name !== null) {
      message.name = object.name;
    }
    if (object.selling_denom !== void 0 && object.selling_denom !== null) {
      message.sellingDenom = object.selling_denom;
    }
    if (object.payment_denom !== void 0 && object.payment_denom !== null) {
      message.paymentDenom = object.payment_denom;
    }
    if (object.enabled !== void 0 && object.enabled !== null) {
      message.enabled = object.enabled;
    }
    if (object.min_price_multiplier !== void 0 && object.min_price_multiplier !== null) {
      message.minPriceMultiplier = object.min_price_multiplier;
    }
    if (object.min_bid_amount !== void 0 && object.min_bid_amount !== null) {
      message.minBidAmount = object.min_bid_amount;
    }
    if (object.beneficiary !== void 0 && object.beneficiary !== null) {
      message.beneficiary = object.beneficiary;
    }
    if (object.total_payment_token_received !== void 0 && object.total_payment_token_received !== null) {
      message.totalPaymentTokenReceived = object.total_payment_token_received;
    }
    if (object.total_selling_token_sold !== void 0 && object.total_selling_token_sold !== null) {
      message.totalSellingTokenSold = object.total_selling_token_sold;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.type = message.type === 0 ? void 0 : message.type;
    obj.name = message.name === "" ? void 0 : message.name;
    obj.selling_denom = message.sellingDenom === "" ? void 0 : message.sellingDenom;
    obj.payment_denom = message.paymentDenom === "" ? void 0 : message.paymentDenom;
    obj.enabled = message.enabled === false ? void 0 : message.enabled;
    obj.min_price_multiplier = message.minPriceMultiplier === "" ? void 0 : message.minPriceMultiplier;
    obj.min_bid_amount = message.minBidAmount === "" ? void 0 : message.minBidAmount;
    obj.beneficiary = message.beneficiary === "" ? void 0 : message.beneficiary;
    obj.total_payment_token_received = message.totalPaymentTokenReceived === "" ? void 0 : message.totalPaymentTokenReceived;
    obj.total_selling_token_sold = message.totalSellingTokenSold === "" ? void 0 : message.totalSellingTokenSold;
    return obj;
  },
  fromAminoMsg(object) {
    return Auction.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return Auction.decode(message.value);
  },
  toProto(message) {
    return Auction.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.auction.Auction",
      value: Auction.encode(message).finish()
    };
  }
};
export {
  Auction,
  AuctionType,
  AuctionTypeAmino,
  AuctionTypeSDKType,
  Params,
  auctionTypeFromJSON,
  auctionTypeToJSON
};
