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
  MsgClaimFreeAmount: () => MsgClaimFreeAmount,
  MsgClaimFreeAmountResponse: () => MsgClaimFreeAmountResponse,
  MsgCreateAirdrop: () => MsgCreateAirdrop,
  MsgCreateAirdropResponse: () => MsgCreateAirdropResponse,
  MsgDeleteAirdrop: () => MsgDeleteAirdrop,
  MsgDeleteAirdropResponse: () => MsgDeleteAirdropResponse,
  MsgSetAirdropAllocations: () => MsgSetAirdropAllocations,
  MsgSetAirdropAllocationsResponse: () => MsgSetAirdropAllocationsResponse
});
module.exports = __toCommonJS(tx_exports);
var import_coin = require("../../cosmos/base/v1beta1/coin");
var import_binary = require("../../binary");
var import_decimals = require("../../decimals");
function createBaseMsgSetAirdropAllocations() {
  return {
    allocator: "",
    airdropIdentifier: "",
    users: [],
    weights: []
  };
}
const MsgSetAirdropAllocations = {
  typeUrl: "/stride.claim.MsgSetAirdropAllocations",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.allocator !== "") {
      writer.uint32(10).string(message.allocator);
    }
    if (message.airdropIdentifier !== "") {
      writer.uint32(18).string(message.airdropIdentifier);
    }
    for (const v of message.users) {
      writer.uint32(26).string(v);
    }
    for (const v of message.weights) {
      writer.uint32(34).string(import_decimals.Decimal.fromUserInput(v, 18).atomics);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgSetAirdropAllocations();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.allocator = reader.string();
          break;
        case 2:
          message.airdropIdentifier = reader.string();
          break;
        case 3:
          message.users.push(reader.string());
          break;
        case 4:
          message.weights.push(import_decimals.Decimal.fromAtomics(reader.string(), 18).toString());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgSetAirdropAllocations();
    message.allocator = object.allocator ?? "";
    message.airdropIdentifier = object.airdropIdentifier ?? "";
    message.users = object.users?.map((e) => e) || [];
    message.weights = object.weights?.map((e) => e) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgSetAirdropAllocations();
    if (object.allocator !== void 0 && object.allocator !== null) {
      message.allocator = object.allocator;
    }
    if (object.airdrop_identifier !== void 0 && object.airdrop_identifier !== null) {
      message.airdropIdentifier = object.airdrop_identifier;
    }
    message.users = object.users?.map((e) => e) || [];
    message.weights = object.weights?.map((e) => e) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.allocator = message.allocator === "" ? void 0 : message.allocator;
    obj.airdrop_identifier = message.airdropIdentifier === "" ? void 0 : message.airdropIdentifier;
    if (message.users) {
      obj.users = message.users.map((e) => e);
    } else {
      obj.users = message.users;
    }
    if (message.weights) {
      obj.weights = message.weights.map((e) => e);
    } else {
      obj.weights = message.weights;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return MsgSetAirdropAllocations.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "claim/MsgSetAirdropAllocations",
      value: MsgSetAirdropAllocations.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgSetAirdropAllocations.decode(message.value);
  },
  toProto(message) {
    return MsgSetAirdropAllocations.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.claim.MsgSetAirdropAllocations",
      value: MsgSetAirdropAllocations.encode(message).finish()
    };
  }
};
function createBaseMsgSetAirdropAllocationsResponse() {
  return {};
}
const MsgSetAirdropAllocationsResponse = {
  typeUrl: "/stride.claim.MsgSetAirdropAllocationsResponse",
  encode(_, writer = import_binary.BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgSetAirdropAllocationsResponse();
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
    const message = createBaseMsgSetAirdropAllocationsResponse();
    return message;
  },
  fromAmino(_) {
    const message = createBaseMsgSetAirdropAllocationsResponse();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return MsgSetAirdropAllocationsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return MsgSetAirdropAllocationsResponse.decode(message.value);
  },
  toProto(message) {
    return MsgSetAirdropAllocationsResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.claim.MsgSetAirdropAllocationsResponse",
      value: MsgSetAirdropAllocationsResponse.encode(message).finish()
    };
  }
};
function createBaseMsgClaimFreeAmount() {
  return {
    user: ""
  };
}
const MsgClaimFreeAmount = {
  typeUrl: "/stride.claim.MsgClaimFreeAmount",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.user !== "") {
      writer.uint32(10).string(message.user);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgClaimFreeAmount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.user = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgClaimFreeAmount();
    message.user = object.user ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgClaimFreeAmount();
    if (object.user !== void 0 && object.user !== null) {
      message.user = object.user;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.user = message.user === "" ? void 0 : message.user;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgClaimFreeAmount.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "claim/MsgClaimFreeAmount",
      value: MsgClaimFreeAmount.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgClaimFreeAmount.decode(message.value);
  },
  toProto(message) {
    return MsgClaimFreeAmount.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.claim.MsgClaimFreeAmount",
      value: MsgClaimFreeAmount.encode(message).finish()
    };
  }
};
function createBaseMsgClaimFreeAmountResponse() {
  return {
    claimedAmount: []
  };
}
const MsgClaimFreeAmountResponse = {
  typeUrl: "/stride.claim.MsgClaimFreeAmountResponse",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    for (const v of message.claimedAmount) {
      import_coin.Coin.encode(v, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgClaimFreeAmountResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 3:
          message.claimedAmount.push(import_coin.Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgClaimFreeAmountResponse();
    message.claimedAmount = object.claimedAmount?.map((e) => import_coin.Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgClaimFreeAmountResponse();
    message.claimedAmount = object.claimed_amount?.map((e) => import_coin.Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.claimedAmount) {
      obj.claimed_amount = message.claimedAmount.map((e) => e ? import_coin.Coin.toAmino(e) : void 0);
    } else {
      obj.claimed_amount = message.claimedAmount;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return MsgClaimFreeAmountResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return MsgClaimFreeAmountResponse.decode(message.value);
  },
  toProto(message) {
    return MsgClaimFreeAmountResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.claim.MsgClaimFreeAmountResponse",
      value: MsgClaimFreeAmountResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCreateAirdrop() {
  return {
    distributor: "",
    identifier: "",
    chainId: "",
    denom: "",
    startTime: BigInt(0),
    duration: BigInt(0),
    autopilotEnabled: false
  };
}
const MsgCreateAirdrop = {
  typeUrl: "/stride.claim.MsgCreateAirdrop",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.distributor !== "") {
      writer.uint32(10).string(message.distributor);
    }
    if (message.identifier !== "") {
      writer.uint32(18).string(message.identifier);
    }
    if (message.chainId !== "") {
      writer.uint32(50).string(message.chainId);
    }
    if (message.denom !== "") {
      writer.uint32(42).string(message.denom);
    }
    if (message.startTime !== BigInt(0)) {
      writer.uint32(24).uint64(message.startTime);
    }
    if (message.duration !== BigInt(0)) {
      writer.uint32(32).uint64(message.duration);
    }
    if (message.autopilotEnabled === true) {
      writer.uint32(56).bool(message.autopilotEnabled);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateAirdrop();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.distributor = reader.string();
          break;
        case 2:
          message.identifier = reader.string();
          break;
        case 6:
          message.chainId = reader.string();
          break;
        case 5:
          message.denom = reader.string();
          break;
        case 3:
          message.startTime = reader.uint64();
          break;
        case 4:
          message.duration = reader.uint64();
          break;
        case 7:
          message.autopilotEnabled = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgCreateAirdrop();
    message.distributor = object.distributor ?? "";
    message.identifier = object.identifier ?? "";
    message.chainId = object.chainId ?? "";
    message.denom = object.denom ?? "";
    message.startTime = object.startTime !== void 0 && object.startTime !== null ? BigInt(object.startTime.toString()) : BigInt(0);
    message.duration = object.duration !== void 0 && object.duration !== null ? BigInt(object.duration.toString()) : BigInt(0);
    message.autopilotEnabled = object.autopilotEnabled ?? false;
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgCreateAirdrop();
    if (object.distributor !== void 0 && object.distributor !== null) {
      message.distributor = object.distributor;
    }
    if (object.identifier !== void 0 && object.identifier !== null) {
      message.identifier = object.identifier;
    }
    if (object.chain_id !== void 0 && object.chain_id !== null) {
      message.chainId = object.chain_id;
    }
    if (object.denom !== void 0 && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.start_time !== void 0 && object.start_time !== null) {
      message.startTime = BigInt(object.start_time);
    }
    if (object.duration !== void 0 && object.duration !== null) {
      message.duration = BigInt(object.duration);
    }
    if (object.autopilot_enabled !== void 0 && object.autopilot_enabled !== null) {
      message.autopilotEnabled = object.autopilot_enabled;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.distributor = message.distributor === "" ? void 0 : message.distributor;
    obj.identifier = message.identifier === "" ? void 0 : message.identifier;
    obj.chain_id = message.chainId === "" ? void 0 : message.chainId;
    obj.denom = message.denom === "" ? void 0 : message.denom;
    obj.start_time = message.startTime !== BigInt(0) ? message.startTime?.toString() : void 0;
    obj.duration = message.duration !== BigInt(0) ? message.duration?.toString() : void 0;
    obj.autopilot_enabled = message.autopilotEnabled === false ? void 0 : message.autopilotEnabled;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgCreateAirdrop.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "claim/MsgCreateAirdrop",
      value: MsgCreateAirdrop.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgCreateAirdrop.decode(message.value);
  },
  toProto(message) {
    return MsgCreateAirdrop.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.claim.MsgCreateAirdrop",
      value: MsgCreateAirdrop.encode(message).finish()
    };
  }
};
function createBaseMsgCreateAirdropResponse() {
  return {};
}
const MsgCreateAirdropResponse = {
  typeUrl: "/stride.claim.MsgCreateAirdropResponse",
  encode(_, writer = import_binary.BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateAirdropResponse();
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
    const message = createBaseMsgCreateAirdropResponse();
    return message;
  },
  fromAmino(_) {
    const message = createBaseMsgCreateAirdropResponse();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return MsgCreateAirdropResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return MsgCreateAirdropResponse.decode(message.value);
  },
  toProto(message) {
    return MsgCreateAirdropResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.claim.MsgCreateAirdropResponse",
      value: MsgCreateAirdropResponse.encode(message).finish()
    };
  }
};
function createBaseMsgDeleteAirdrop() {
  return {
    distributor: "",
    identifier: ""
  };
}
const MsgDeleteAirdrop = {
  typeUrl: "/stride.claim.MsgDeleteAirdrop",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.distributor !== "") {
      writer.uint32(10).string(message.distributor);
    }
    if (message.identifier !== "") {
      writer.uint32(18).string(message.identifier);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteAirdrop();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.distributor = reader.string();
          break;
        case 2:
          message.identifier = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgDeleteAirdrop();
    message.distributor = object.distributor ?? "";
    message.identifier = object.identifier ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgDeleteAirdrop();
    if (object.distributor !== void 0 && object.distributor !== null) {
      message.distributor = object.distributor;
    }
    if (object.identifier !== void 0 && object.identifier !== null) {
      message.identifier = object.identifier;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.distributor = message.distributor === "" ? void 0 : message.distributor;
    obj.identifier = message.identifier === "" ? void 0 : message.identifier;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgDeleteAirdrop.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "claim/MsgDeleteAirdrop",
      value: MsgDeleteAirdrop.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgDeleteAirdrop.decode(message.value);
  },
  toProto(message) {
    return MsgDeleteAirdrop.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.claim.MsgDeleteAirdrop",
      value: MsgDeleteAirdrop.encode(message).finish()
    };
  }
};
function createBaseMsgDeleteAirdropResponse() {
  return {};
}
const MsgDeleteAirdropResponse = {
  typeUrl: "/stride.claim.MsgDeleteAirdropResponse",
  encode(_, writer = import_binary.BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteAirdropResponse();
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
    const message = createBaseMsgDeleteAirdropResponse();
    return message;
  },
  fromAmino(_) {
    const message = createBaseMsgDeleteAirdropResponse();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return MsgDeleteAirdropResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return MsgDeleteAirdropResponse.decode(message.value);
  },
  toProto(message) {
    return MsgDeleteAirdropResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.claim.MsgDeleteAirdropResponse",
      value: MsgDeleteAirdropResponse.encode(message).finish()
    };
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  MsgClaimFreeAmount,
  MsgClaimFreeAmountResponse,
  MsgCreateAirdrop,
  MsgCreateAirdropResponse,
  MsgDeleteAirdrop,
  MsgDeleteAirdropResponse,
  MsgSetAirdropAllocations,
  MsgSetAirdropAllocationsResponse
});
