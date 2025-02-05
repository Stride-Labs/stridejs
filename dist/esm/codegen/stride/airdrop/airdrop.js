import { Timestamp } from "../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../binary";
import { toTimestamp, fromTimestamp } from "../../helpers";
import { Decimal } from "@cosmjs/math";
var ClaimType = /* @__PURE__ */ ((ClaimType2) => {
  ClaimType2[ClaimType2["CLAIM_DAILY"] = 0] = "CLAIM_DAILY";
  ClaimType2[ClaimType2["CLAIM_EARLY"] = 1] = "CLAIM_EARLY";
  ClaimType2[ClaimType2["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return ClaimType2;
})(ClaimType || {});
const ClaimTypeSDKType = ClaimType;
const ClaimTypeAmino = ClaimType;
function claimTypeFromJSON(object) {
  switch (object) {
    case 0:
    case "CLAIM_DAILY":
      return 0 /* CLAIM_DAILY */;
    case 1:
    case "CLAIM_EARLY":
      return 1 /* CLAIM_EARLY */;
    case -1:
    case "UNRECOGNIZED":
    default:
      return -1 /* UNRECOGNIZED */;
  }
}
function claimTypeToJSON(object) {
  switch (object) {
    case 0 /* CLAIM_DAILY */:
      return "CLAIM_DAILY";
    case 1 /* CLAIM_EARLY */:
      return "CLAIM_EARLY";
    case -1 /* UNRECOGNIZED */:
    default:
      return "UNRECOGNIZED";
  }
}
function createBaseParams() {
  return {
    periodLengthSeconds: BigInt(0)
  };
}
const Params = {
  typeUrl: "/stride.airdrop.Params",
  encode(message, writer = BinaryWriter.create()) {
    if (message.periodLengthSeconds !== BigInt(0)) {
      writer.uint32(8).int64(message.periodLengthSeconds);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.periodLengthSeconds = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseParams();
    message.periodLengthSeconds = object.periodLengthSeconds !== void 0 && object.periodLengthSeconds !== null ? BigInt(object.periodLengthSeconds.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object) {
    const message = createBaseParams();
    if (object.period_length_seconds !== void 0 && object.period_length_seconds !== null) {
      message.periodLengthSeconds = BigInt(object.period_length_seconds);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.period_length_seconds = message.periodLengthSeconds !== BigInt(0) ? message.periodLengthSeconds?.toString() : void 0;
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
      typeUrl: "/stride.airdrop.Params",
      value: Params.encode(message).finish()
    };
  }
};
function createBaseUserAllocation() {
  return {
    airdropId: "",
    address: "",
    claimed: "",
    forfeited: "",
    allocations: []
  };
}
const UserAllocation = {
  typeUrl: "/stride.airdrop.UserAllocation",
  encode(message, writer = BinaryWriter.create()) {
    if (message.airdropId !== "") {
      writer.uint32(10).string(message.airdropId);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.claimed !== "") {
      writer.uint32(26).string(message.claimed);
    }
    if (message.forfeited !== "") {
      writer.uint32(34).string(message.forfeited);
    }
    for (const v of message.allocations) {
      writer.uint32(42).string(v);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseUserAllocation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.airdropId = reader.string();
          break;
        case 2:
          message.address = reader.string();
          break;
        case 3:
          message.claimed = reader.string();
          break;
        case 4:
          message.forfeited = reader.string();
          break;
        case 5:
          message.allocations.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseUserAllocation();
    message.airdropId = object.airdropId ?? "";
    message.address = object.address ?? "";
    message.claimed = object.claimed ?? "";
    message.forfeited = object.forfeited ?? "";
    message.allocations = object.allocations?.map((e) => e) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseUserAllocation();
    if (object.airdrop_id !== void 0 && object.airdrop_id !== null) {
      message.airdropId = object.airdrop_id;
    }
    if (object.address !== void 0 && object.address !== null) {
      message.address = object.address;
    }
    if (object.claimed !== void 0 && object.claimed !== null) {
      message.claimed = object.claimed;
    }
    if (object.forfeited !== void 0 && object.forfeited !== null) {
      message.forfeited = object.forfeited;
    }
    message.allocations = object.allocations?.map((e) => e) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.airdrop_id = message.airdropId === "" ? void 0 : message.airdropId;
    obj.address = message.address === "" ? void 0 : message.address;
    obj.claimed = message.claimed === "" ? void 0 : message.claimed;
    obj.forfeited = message.forfeited === "" ? void 0 : message.forfeited;
    if (message.allocations) {
      obj.allocations = message.allocations.map((e) => e);
    } else {
      obj.allocations = message.allocations;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return UserAllocation.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return UserAllocation.decode(message.value);
  },
  toProto(message) {
    return UserAllocation.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.airdrop.UserAllocation",
      value: UserAllocation.encode(message).finish()
    };
  }
};
function createBaseAirdrop() {
  return {
    id: "",
    rewardDenom: "",
    distributionStartDate: void 0,
    distributionEndDate: void 0,
    clawbackDate: void 0,
    claimTypeDeadlineDate: void 0,
    earlyClaimPenalty: "",
    distributorAddress: "",
    allocatorAddress: "",
    linkerAddress: ""
  };
}
const Airdrop = {
  typeUrl: "/stride.airdrop.Airdrop",
  encode(message, writer = BinaryWriter.create()) {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.rewardDenom !== "") {
      writer.uint32(18).string(message.rewardDenom);
    }
    if (message.distributionStartDate !== void 0) {
      Timestamp.encode(toTimestamp(message.distributionStartDate), writer.uint32(26).fork()).ldelim();
    }
    if (message.distributionEndDate !== void 0) {
      Timestamp.encode(toTimestamp(message.distributionEndDate), writer.uint32(34).fork()).ldelim();
    }
    if (message.clawbackDate !== void 0) {
      Timestamp.encode(toTimestamp(message.clawbackDate), writer.uint32(42).fork()).ldelim();
    }
    if (message.claimTypeDeadlineDate !== void 0) {
      Timestamp.encode(toTimestamp(message.claimTypeDeadlineDate), writer.uint32(50).fork()).ldelim();
    }
    if (message.earlyClaimPenalty !== "") {
      writer.uint32(58).string(Decimal.fromUserInput(message.earlyClaimPenalty, 18).atomics);
    }
    if (message.distributorAddress !== "") {
      writer.uint32(66).string(message.distributorAddress);
    }
    if (message.allocatorAddress !== "") {
      writer.uint32(74).string(message.allocatorAddress);
    }
    if (message.linkerAddress !== "") {
      writer.uint32(82).string(message.linkerAddress);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseAirdrop();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.rewardDenom = reader.string();
          break;
        case 3:
          message.distributionStartDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 4:
          message.distributionEndDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 5:
          message.clawbackDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 6:
          message.claimTypeDeadlineDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 7:
          message.earlyClaimPenalty = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 8:
          message.distributorAddress = reader.string();
          break;
        case 9:
          message.allocatorAddress = reader.string();
          break;
        case 10:
          message.linkerAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseAirdrop();
    message.id = object.id ?? "";
    message.rewardDenom = object.rewardDenom ?? "";
    message.distributionStartDate = object.distributionStartDate ?? void 0;
    message.distributionEndDate = object.distributionEndDate ?? void 0;
    message.clawbackDate = object.clawbackDate ?? void 0;
    message.claimTypeDeadlineDate = object.claimTypeDeadlineDate ?? void 0;
    message.earlyClaimPenalty = object.earlyClaimPenalty ?? "";
    message.distributorAddress = object.distributorAddress ?? "";
    message.allocatorAddress = object.allocatorAddress ?? "";
    message.linkerAddress = object.linkerAddress ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseAirdrop();
    if (object.id !== void 0 && object.id !== null) {
      message.id = object.id;
    }
    if (object.reward_denom !== void 0 && object.reward_denom !== null) {
      message.rewardDenom = object.reward_denom;
    }
    if (object.distribution_start_date !== void 0 && object.distribution_start_date !== null) {
      message.distributionStartDate = fromTimestamp(Timestamp.fromAmino(object.distribution_start_date));
    }
    if (object.distribution_end_date !== void 0 && object.distribution_end_date !== null) {
      message.distributionEndDate = fromTimestamp(Timestamp.fromAmino(object.distribution_end_date));
    }
    if (object.clawback_date !== void 0 && object.clawback_date !== null) {
      message.clawbackDate = fromTimestamp(Timestamp.fromAmino(object.clawback_date));
    }
    if (object.claim_type_deadline_date !== void 0 && object.claim_type_deadline_date !== null) {
      message.claimTypeDeadlineDate = fromTimestamp(Timestamp.fromAmino(object.claim_type_deadline_date));
    }
    if (object.early_claim_penalty !== void 0 && object.early_claim_penalty !== null) {
      message.earlyClaimPenalty = object.early_claim_penalty;
    }
    if (object.distributor_address !== void 0 && object.distributor_address !== null) {
      message.distributorAddress = object.distributor_address;
    }
    if (object.allocator_address !== void 0 && object.allocator_address !== null) {
      message.allocatorAddress = object.allocator_address;
    }
    if (object.linker_address !== void 0 && object.linker_address !== null) {
      message.linkerAddress = object.linker_address;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.id = message.id === "" ? void 0 : message.id;
    obj.reward_denom = message.rewardDenom === "" ? void 0 : message.rewardDenom;
    obj.distribution_start_date = message.distributionStartDate ? Timestamp.toAmino(toTimestamp(message.distributionStartDate)) : void 0;
    obj.distribution_end_date = message.distributionEndDate ? Timestamp.toAmino(toTimestamp(message.distributionEndDate)) : void 0;
    obj.clawback_date = message.clawbackDate ? Timestamp.toAmino(toTimestamp(message.clawbackDate)) : void 0;
    obj.claim_type_deadline_date = message.claimTypeDeadlineDate ? Timestamp.toAmino(toTimestamp(message.claimTypeDeadlineDate)) : void 0;
    obj.early_claim_penalty = message.earlyClaimPenalty === "" ? void 0 : message.earlyClaimPenalty;
    obj.distributor_address = message.distributorAddress === "" ? void 0 : message.distributorAddress;
    obj.allocator_address = message.allocatorAddress === "" ? void 0 : message.allocatorAddress;
    obj.linker_address = message.linkerAddress === "" ? void 0 : message.linkerAddress;
    return obj;
  },
  fromAminoMsg(object) {
    return Airdrop.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return Airdrop.decode(message.value);
  },
  toProto(message) {
    return Airdrop.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.airdrop.Airdrop",
      value: Airdrop.encode(message).finish()
    };
  }
};
export {
  Airdrop,
  ClaimType,
  ClaimTypeAmino,
  ClaimTypeSDKType,
  Params,
  UserAllocation,
  claimTypeFromJSON,
  claimTypeToJSON
};
