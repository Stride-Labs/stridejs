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
var tx_exports = {};
__export(tx_exports, {
  MsgCreateAuction: () => MsgCreateAuction,
  MsgCreateAuctionResponse: () => MsgCreateAuctionResponse,
  MsgPlaceBid: () => MsgPlaceBid,
  MsgPlaceBidResponse: () => MsgPlaceBidResponse,
  MsgUpdateAuction: () => MsgUpdateAuction,
  MsgUpdateAuctionResponse: () => MsgUpdateAuctionResponse
});
module.exports = __toCommonJS(tx_exports);
var import_binary = require("../../binary");
var import_math = require("@cosmjs/math");
function createBaseMsgPlaceBid() {
  return {
    bidder: "",
    auctionName: "",
    sellingTokenAmount: "",
    paymentTokenAmount: ""
  };
}
const MsgPlaceBid = {
  typeUrl: "/stride.auction.MsgPlaceBid",
  encode(message, writer = import_binary.BinaryWriter.create()) {
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
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
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
  fromPartial(object) {
    const message = createBaseMsgPlaceBid();
    message.bidder = object.bidder ?? "";
    message.auctionName = object.auctionName ?? "";
    message.sellingTokenAmount = object.sellingTokenAmount ?? "";
    message.paymentTokenAmount = object.paymentTokenAmount ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgPlaceBid();
    if (object.bidder !== void 0 && object.bidder !== null) {
      message.bidder = object.bidder;
    }
    if (object.auction_name !== void 0 && object.auction_name !== null) {
      message.auctionName = object.auction_name;
    }
    if (object.selling_token_amount !== void 0 && object.selling_token_amount !== null) {
      message.sellingTokenAmount = object.selling_token_amount;
    }
    if (object.payment_token_amount !== void 0 && object.payment_token_amount !== null) {
      message.paymentTokenAmount = object.payment_token_amount;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.bidder = message.bidder === "" ? void 0 : message.bidder;
    obj.auction_name = message.auctionName === "" ? void 0 : message.auctionName;
    obj.selling_token_amount = message.sellingTokenAmount === "" ? void 0 : message.sellingTokenAmount;
    obj.payment_token_amount = message.paymentTokenAmount === "" ? void 0 : message.paymentTokenAmount;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgPlaceBid.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "auction/MsgPlaceBid",
      value: MsgPlaceBid.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgPlaceBid.decode(message.value);
  },
  toProto(message) {
    return MsgPlaceBid.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.auction.MsgPlaceBid",
      value: MsgPlaceBid.encode(message).finish()
    };
  }
};
function createBaseMsgPlaceBidResponse() {
  return {};
}
const MsgPlaceBidResponse = {
  typeUrl: "/stride.auction.MsgPlaceBidResponse",
  encode(_, writer = import_binary.BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
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
  fromPartial(_) {
    const message = createBaseMsgPlaceBidResponse();
    return message;
  },
  fromAmino(_) {
    const message = createBaseMsgPlaceBidResponse();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return MsgPlaceBidResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return MsgPlaceBidResponse.decode(message.value);
  },
  toProto(message) {
    return MsgPlaceBidResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.auction.MsgPlaceBidResponse",
      value: MsgPlaceBidResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCreateAuction() {
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
const MsgCreateAuction = {
  typeUrl: "/stride.auction.MsgCreateAuction",
  encode(message, writer = import_binary.BinaryWriter.create()) {
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
      writer.uint32(58).string(import_math.Decimal.fromUserInput(message.minPriceMultiplier, 18).atomics);
    }
    if (message.minBidAmount !== "") {
      writer.uint32(66).string(message.minBidAmount);
    }
    if (message.beneficiary !== "") {
      writer.uint32(74).string(message.beneficiary);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
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
          message.auctionType = reader.int32();
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
          message.minPriceMultiplier = import_math.Decimal.fromAtomics(reader.string(), 18).toString();
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
  fromPartial(object) {
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
  fromAmino(object) {
    const message = createBaseMsgCreateAuction();
    if (object.admin !== void 0 && object.admin !== null) {
      message.admin = object.admin;
    }
    if (object.auction_name !== void 0 && object.auction_name !== null) {
      message.auctionName = object.auction_name;
    }
    if (object.auction_type !== void 0 && object.auction_type !== null) {
      message.auctionType = object.auction_type;
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
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.admin = message.admin === "" ? void 0 : message.admin;
    obj.auction_name = message.auctionName === "" ? void 0 : message.auctionName;
    obj.auction_type = message.auctionType === 0 ? void 0 : message.auctionType;
    obj.selling_denom = message.sellingDenom === "" ? void 0 : message.sellingDenom;
    obj.payment_denom = message.paymentDenom === "" ? void 0 : message.paymentDenom;
    obj.enabled = message.enabled === false ? void 0 : message.enabled;
    obj.min_price_multiplier = message.minPriceMultiplier === "" ? void 0 : message.minPriceMultiplier;
    obj.min_bid_amount = message.minBidAmount === "" ? void 0 : message.minBidAmount;
    obj.beneficiary = message.beneficiary === "" ? void 0 : message.beneficiary;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgCreateAuction.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "auction/MsgCreateAuction",
      value: MsgCreateAuction.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgCreateAuction.decode(message.value);
  },
  toProto(message) {
    return MsgCreateAuction.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.auction.MsgCreateAuction",
      value: MsgCreateAuction.encode(message).finish()
    };
  }
};
function createBaseMsgCreateAuctionResponse() {
  return {};
}
const MsgCreateAuctionResponse = {
  typeUrl: "/stride.auction.MsgCreateAuctionResponse",
  encode(_, writer = import_binary.BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
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
  fromPartial(_) {
    const message = createBaseMsgCreateAuctionResponse();
    return message;
  },
  fromAmino(_) {
    const message = createBaseMsgCreateAuctionResponse();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return MsgCreateAuctionResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return MsgCreateAuctionResponse.decode(message.value);
  },
  toProto(message) {
    return MsgCreateAuctionResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.auction.MsgCreateAuctionResponse",
      value: MsgCreateAuctionResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateAuction() {
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
const MsgUpdateAuction = {
  typeUrl: "/stride.auction.MsgUpdateAuction",
  encode(message, writer = import_binary.BinaryWriter.create()) {
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
      writer.uint32(42).string(import_math.Decimal.fromUserInput(message.minPriceMultiplier, 18).atomics);
    }
    if (message.minBidAmount !== "") {
      writer.uint32(50).string(message.minBidAmount);
    }
    if (message.beneficiary !== "") {
      writer.uint32(58).string(message.beneficiary);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
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
          message.auctionType = reader.int32();
          break;
        case 4:
          message.enabled = reader.bool();
          break;
        case 5:
          message.minPriceMultiplier = import_math.Decimal.fromAtomics(reader.string(), 18).toString();
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
  fromPartial(object) {
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
  fromAmino(object) {
    const message = createBaseMsgUpdateAuction();
    if (object.admin !== void 0 && object.admin !== null) {
      message.admin = object.admin;
    }
    if (object.auction_name !== void 0 && object.auction_name !== null) {
      message.auctionName = object.auction_name;
    }
    if (object.auction_type !== void 0 && object.auction_type !== null) {
      message.auctionType = object.auction_type;
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
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.admin = message.admin === "" ? void 0 : message.admin;
    obj.auction_name = message.auctionName === "" ? void 0 : message.auctionName;
    obj.auction_type = message.auctionType === 0 ? void 0 : message.auctionType;
    obj.enabled = message.enabled === false ? void 0 : message.enabled;
    obj.min_price_multiplier = message.minPriceMultiplier === "" ? void 0 : message.minPriceMultiplier;
    obj.min_bid_amount = message.minBidAmount === "" ? void 0 : message.minBidAmount;
    obj.beneficiary = message.beneficiary === "" ? void 0 : message.beneficiary;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgUpdateAuction.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "auction/MsgUpdateAuction",
      value: MsgUpdateAuction.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgUpdateAuction.decode(message.value);
  },
  toProto(message) {
    return MsgUpdateAuction.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.auction.MsgUpdateAuction",
      value: MsgUpdateAuction.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateAuctionResponse() {
  return {};
}
const MsgUpdateAuctionResponse = {
  typeUrl: "/stride.auction.MsgUpdateAuctionResponse",
  encode(_, writer = import_binary.BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
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
  fromPartial(_) {
    const message = createBaseMsgUpdateAuctionResponse();
    return message;
  },
  fromAmino(_) {
    const message = createBaseMsgUpdateAuctionResponse();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return MsgUpdateAuctionResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return MsgUpdateAuctionResponse.decode(message.value);
  },
  toProto(message) {
    return MsgUpdateAuctionResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.auction.MsgUpdateAuctionResponse",
      value: MsgUpdateAuctionResponse.encode(message).finish()
    };
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  MsgCreateAuction,
  MsgCreateAuctionResponse,
  MsgPlaceBid,
  MsgPlaceBidResponse,
  MsgUpdateAuction,
  MsgUpdateAuctionResponse
});
