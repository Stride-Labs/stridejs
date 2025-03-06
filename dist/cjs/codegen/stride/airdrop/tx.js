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
  MsgAddAllocations: () => MsgAddAllocations,
  MsgAddAllocationsResponse: () => MsgAddAllocationsResponse,
  MsgClaimDaily: () => MsgClaimDaily,
  MsgClaimDailyResponse: () => MsgClaimDailyResponse,
  MsgClaimEarly: () => MsgClaimEarly,
  MsgClaimEarlyResponse: () => MsgClaimEarlyResponse,
  MsgCreateAirdrop: () => MsgCreateAirdrop,
  MsgCreateAirdropResponse: () => MsgCreateAirdropResponse,
  MsgLinkAddresses: () => MsgLinkAddresses,
  MsgLinkAddressesResponse: () => MsgLinkAddressesResponse,
  MsgUpdateAirdrop: () => MsgUpdateAirdrop,
  MsgUpdateAirdropResponse: () => MsgUpdateAirdropResponse,
  MsgUpdateUserAllocation: () => MsgUpdateUserAllocation,
  MsgUpdateUserAllocationResponse: () => MsgUpdateUserAllocationResponse,
  RawAllocation: () => RawAllocation
});
module.exports = __toCommonJS(tx_exports);
var import_timestamp = require("../../google/protobuf/timestamp");
var import_binary = require("../../binary");
var import_helpers = require("../../helpers");
var import_math = require("@cosmjs/math");
function createBaseMsgClaimDaily() {
  return {
    claimer: "",
    airdropId: ""
  };
}
const MsgClaimDaily = {
  typeUrl: "/stride.airdrop.MsgClaimDaily",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.claimer !== "") {
      writer.uint32(10).string(message.claimer);
    }
    if (message.airdropId !== "") {
      writer.uint32(18).string(message.airdropId);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgClaimDaily();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.claimer = reader.string();
          break;
        case 2:
          message.airdropId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgClaimDaily();
    message.claimer = object.claimer ?? "";
    message.airdropId = object.airdropId ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgClaimDaily();
    if (object.claimer !== void 0 && object.claimer !== null) {
      message.claimer = object.claimer;
    }
    if (object.airdrop_id !== void 0 && object.airdrop_id !== null) {
      message.airdropId = object.airdrop_id;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.claimer = message.claimer === "" ? void 0 : message.claimer;
    obj.airdrop_id = message.airdropId === "" ? void 0 : message.airdropId;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgClaimDaily.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "airdrop/MsgClaimDaily",
      value: MsgClaimDaily.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgClaimDaily.decode(message.value);
  },
  toProto(message) {
    return MsgClaimDaily.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.airdrop.MsgClaimDaily",
      value: MsgClaimDaily.encode(message).finish()
    };
  }
};
function createBaseMsgClaimDailyResponse() {
  return {};
}
const MsgClaimDailyResponse = {
  typeUrl: "/stride.airdrop.MsgClaimDailyResponse",
  encode(_, writer = import_binary.BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgClaimDailyResponse();
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
    const message = createBaseMsgClaimDailyResponse();
    return message;
  },
  fromAmino(_) {
    const message = createBaseMsgClaimDailyResponse();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return MsgClaimDailyResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return MsgClaimDailyResponse.decode(message.value);
  },
  toProto(message) {
    return MsgClaimDailyResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.airdrop.MsgClaimDailyResponse",
      value: MsgClaimDailyResponse.encode(message).finish()
    };
  }
};
function createBaseMsgClaimEarly() {
  return {
    claimer: "",
    airdropId: ""
  };
}
const MsgClaimEarly = {
  typeUrl: "/stride.airdrop.MsgClaimEarly",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.claimer !== "") {
      writer.uint32(10).string(message.claimer);
    }
    if (message.airdropId !== "") {
      writer.uint32(18).string(message.airdropId);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgClaimEarly();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.claimer = reader.string();
          break;
        case 2:
          message.airdropId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgClaimEarly();
    message.claimer = object.claimer ?? "";
    message.airdropId = object.airdropId ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgClaimEarly();
    if (object.claimer !== void 0 && object.claimer !== null) {
      message.claimer = object.claimer;
    }
    if (object.airdrop_id !== void 0 && object.airdrop_id !== null) {
      message.airdropId = object.airdrop_id;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.claimer = message.claimer === "" ? void 0 : message.claimer;
    obj.airdrop_id = message.airdropId === "" ? void 0 : message.airdropId;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgClaimEarly.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "airdrop/MsgClaimEarly",
      value: MsgClaimEarly.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgClaimEarly.decode(message.value);
  },
  toProto(message) {
    return MsgClaimEarly.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.airdrop.MsgClaimEarly",
      value: MsgClaimEarly.encode(message).finish()
    };
  }
};
function createBaseMsgClaimEarlyResponse() {
  return {};
}
const MsgClaimEarlyResponse = {
  typeUrl: "/stride.airdrop.MsgClaimEarlyResponse",
  encode(_, writer = import_binary.BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgClaimEarlyResponse();
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
    const message = createBaseMsgClaimEarlyResponse();
    return message;
  },
  fromAmino(_) {
    const message = createBaseMsgClaimEarlyResponse();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return MsgClaimEarlyResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return MsgClaimEarlyResponse.decode(message.value);
  },
  toProto(message) {
    return MsgClaimEarlyResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.airdrop.MsgClaimEarlyResponse",
      value: MsgClaimEarlyResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCreateAirdrop() {
  return {
    admin: "",
    airdropId: "",
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
const MsgCreateAirdrop = {
  typeUrl: "/stride.airdrop.MsgCreateAirdrop",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (message.airdropId !== "") {
      writer.uint32(18).string(message.airdropId);
    }
    if (message.rewardDenom !== "") {
      writer.uint32(26).string(message.rewardDenom);
    }
    if (message.distributionStartDate !== void 0) {
      import_timestamp.Timestamp.encode((0, import_helpers.toTimestamp)(message.distributionStartDate), writer.uint32(34).fork()).ldelim();
    }
    if (message.distributionEndDate !== void 0) {
      import_timestamp.Timestamp.encode((0, import_helpers.toTimestamp)(message.distributionEndDate), writer.uint32(42).fork()).ldelim();
    }
    if (message.clawbackDate !== void 0) {
      import_timestamp.Timestamp.encode((0, import_helpers.toTimestamp)(message.clawbackDate), writer.uint32(50).fork()).ldelim();
    }
    if (message.claimTypeDeadlineDate !== void 0) {
      import_timestamp.Timestamp.encode((0, import_helpers.toTimestamp)(message.claimTypeDeadlineDate), writer.uint32(58).fork()).ldelim();
    }
    if (message.earlyClaimPenalty !== "") {
      writer.uint32(66).string(import_math.Decimal.fromUserInput(message.earlyClaimPenalty, 18).atomics);
    }
    if (message.distributorAddress !== "") {
      writer.uint32(74).string(message.distributorAddress);
    }
    if (message.allocatorAddress !== "") {
      writer.uint32(82).string(message.allocatorAddress);
    }
    if (message.linkerAddress !== "") {
      writer.uint32(90).string(message.linkerAddress);
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
          message.admin = reader.string();
          break;
        case 2:
          message.airdropId = reader.string();
          break;
        case 3:
          message.rewardDenom = reader.string();
          break;
        case 4:
          message.distributionStartDate = (0, import_helpers.fromTimestamp)(import_timestamp.Timestamp.decode(reader, reader.uint32()));
          break;
        case 5:
          message.distributionEndDate = (0, import_helpers.fromTimestamp)(import_timestamp.Timestamp.decode(reader, reader.uint32()));
          break;
        case 6:
          message.clawbackDate = (0, import_helpers.fromTimestamp)(import_timestamp.Timestamp.decode(reader, reader.uint32()));
          break;
        case 7:
          message.claimTypeDeadlineDate = (0, import_helpers.fromTimestamp)(import_timestamp.Timestamp.decode(reader, reader.uint32()));
          break;
        case 8:
          message.earlyClaimPenalty = import_math.Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 9:
          message.distributorAddress = reader.string();
          break;
        case 10:
          message.allocatorAddress = reader.string();
          break;
        case 11:
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
    const message = createBaseMsgCreateAirdrop();
    message.admin = object.admin ?? "";
    message.airdropId = object.airdropId ?? "";
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
    const message = createBaseMsgCreateAirdrop();
    if (object.admin !== void 0 && object.admin !== null) {
      message.admin = object.admin;
    }
    if (object.airdrop_id !== void 0 && object.airdrop_id !== null) {
      message.airdropId = object.airdrop_id;
    }
    if (object.reward_denom !== void 0 && object.reward_denom !== null) {
      message.rewardDenom = object.reward_denom;
    }
    if (object.distribution_start_date !== void 0 && object.distribution_start_date !== null) {
      message.distributionStartDate = (0, import_helpers.fromTimestamp)(import_timestamp.Timestamp.fromAmino(object.distribution_start_date));
    }
    if (object.distribution_end_date !== void 0 && object.distribution_end_date !== null) {
      message.distributionEndDate = (0, import_helpers.fromTimestamp)(import_timestamp.Timestamp.fromAmino(object.distribution_end_date));
    }
    if (object.clawback_date !== void 0 && object.clawback_date !== null) {
      message.clawbackDate = (0, import_helpers.fromTimestamp)(import_timestamp.Timestamp.fromAmino(object.clawback_date));
    }
    if (object.claim_type_deadline_date !== void 0 && object.claim_type_deadline_date !== null) {
      message.claimTypeDeadlineDate = (0, import_helpers.fromTimestamp)(import_timestamp.Timestamp.fromAmino(object.claim_type_deadline_date));
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
    obj.admin = message.admin === "" ? void 0 : message.admin;
    obj.airdrop_id = message.airdropId === "" ? void 0 : message.airdropId;
    obj.reward_denom = message.rewardDenom === "" ? void 0 : message.rewardDenom;
    obj.distribution_start_date = message.distributionStartDate ? import_timestamp.Timestamp.toAmino((0, import_helpers.toTimestamp)(message.distributionStartDate)) : void 0;
    obj.distribution_end_date = message.distributionEndDate ? import_timestamp.Timestamp.toAmino((0, import_helpers.toTimestamp)(message.distributionEndDate)) : void 0;
    obj.clawback_date = message.clawbackDate ? import_timestamp.Timestamp.toAmino((0, import_helpers.toTimestamp)(message.clawbackDate)) : void 0;
    obj.claim_type_deadline_date = message.claimTypeDeadlineDate ? import_timestamp.Timestamp.toAmino((0, import_helpers.toTimestamp)(message.claimTypeDeadlineDate)) : void 0;
    obj.early_claim_penalty = message.earlyClaimPenalty === "" ? void 0 : import_math.Decimal.fromUserInput(message.earlyClaimPenalty, 18).atomics;
    obj.distributor_address = message.distributorAddress === "" ? void 0 : message.distributorAddress;
    obj.allocator_address = message.allocatorAddress === "" ? void 0 : message.allocatorAddress;
    obj.linker_address = message.linkerAddress === "" ? void 0 : message.linkerAddress;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgCreateAirdrop.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "airdrop/MsgCreateAirdrop",
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
      typeUrl: "/stride.airdrop.MsgCreateAirdrop",
      value: MsgCreateAirdrop.encode(message).finish()
    };
  }
};
function createBaseMsgCreateAirdropResponse() {
  return {};
}
const MsgCreateAirdropResponse = {
  typeUrl: "/stride.airdrop.MsgCreateAirdropResponse",
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
      typeUrl: "/stride.airdrop.MsgCreateAirdropResponse",
      value: MsgCreateAirdropResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateAirdrop() {
  return {
    admin: "",
    airdropId: "",
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
const MsgUpdateAirdrop = {
  typeUrl: "/stride.airdrop.MsgUpdateAirdrop",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (message.airdropId !== "") {
      writer.uint32(18).string(message.airdropId);
    }
    if (message.rewardDenom !== "") {
      writer.uint32(26).string(message.rewardDenom);
    }
    if (message.distributionStartDate !== void 0) {
      import_timestamp.Timestamp.encode((0, import_helpers.toTimestamp)(message.distributionStartDate), writer.uint32(34).fork()).ldelim();
    }
    if (message.distributionEndDate !== void 0) {
      import_timestamp.Timestamp.encode((0, import_helpers.toTimestamp)(message.distributionEndDate), writer.uint32(42).fork()).ldelim();
    }
    if (message.clawbackDate !== void 0) {
      import_timestamp.Timestamp.encode((0, import_helpers.toTimestamp)(message.clawbackDate), writer.uint32(50).fork()).ldelim();
    }
    if (message.claimTypeDeadlineDate !== void 0) {
      import_timestamp.Timestamp.encode((0, import_helpers.toTimestamp)(message.claimTypeDeadlineDate), writer.uint32(58).fork()).ldelim();
    }
    if (message.earlyClaimPenalty !== "") {
      writer.uint32(66).string(import_math.Decimal.fromUserInput(message.earlyClaimPenalty, 18).atomics);
    }
    if (message.distributorAddress !== "") {
      writer.uint32(74).string(message.distributorAddress);
    }
    if (message.allocatorAddress !== "") {
      writer.uint32(82).string(message.allocatorAddress);
    }
    if (message.linkerAddress !== "") {
      writer.uint32(90).string(message.linkerAddress);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateAirdrop();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.airdropId = reader.string();
          break;
        case 3:
          message.rewardDenom = reader.string();
          break;
        case 4:
          message.distributionStartDate = (0, import_helpers.fromTimestamp)(import_timestamp.Timestamp.decode(reader, reader.uint32()));
          break;
        case 5:
          message.distributionEndDate = (0, import_helpers.fromTimestamp)(import_timestamp.Timestamp.decode(reader, reader.uint32()));
          break;
        case 6:
          message.clawbackDate = (0, import_helpers.fromTimestamp)(import_timestamp.Timestamp.decode(reader, reader.uint32()));
          break;
        case 7:
          message.claimTypeDeadlineDate = (0, import_helpers.fromTimestamp)(import_timestamp.Timestamp.decode(reader, reader.uint32()));
          break;
        case 8:
          message.earlyClaimPenalty = import_math.Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 9:
          message.distributorAddress = reader.string();
          break;
        case 10:
          message.allocatorAddress = reader.string();
          break;
        case 11:
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
    const message = createBaseMsgUpdateAirdrop();
    message.admin = object.admin ?? "";
    message.airdropId = object.airdropId ?? "";
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
    const message = createBaseMsgUpdateAirdrop();
    if (object.admin !== void 0 && object.admin !== null) {
      message.admin = object.admin;
    }
    if (object.airdrop_id !== void 0 && object.airdrop_id !== null) {
      message.airdropId = object.airdrop_id;
    }
    if (object.reward_denom !== void 0 && object.reward_denom !== null) {
      message.rewardDenom = object.reward_denom;
    }
    if (object.distribution_start_date !== void 0 && object.distribution_start_date !== null) {
      message.distributionStartDate = (0, import_helpers.fromTimestamp)(import_timestamp.Timestamp.fromAmino(object.distribution_start_date));
    }
    if (object.distribution_end_date !== void 0 && object.distribution_end_date !== null) {
      message.distributionEndDate = (0, import_helpers.fromTimestamp)(import_timestamp.Timestamp.fromAmino(object.distribution_end_date));
    }
    if (object.clawback_date !== void 0 && object.clawback_date !== null) {
      message.clawbackDate = (0, import_helpers.fromTimestamp)(import_timestamp.Timestamp.fromAmino(object.clawback_date));
    }
    if (object.claim_type_deadline_date !== void 0 && object.claim_type_deadline_date !== null) {
      message.claimTypeDeadlineDate = (0, import_helpers.fromTimestamp)(import_timestamp.Timestamp.fromAmino(object.claim_type_deadline_date));
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
    obj.admin = message.admin === "" ? void 0 : message.admin;
    obj.airdrop_id = message.airdropId === "" ? void 0 : message.airdropId;
    obj.reward_denom = message.rewardDenom === "" ? void 0 : message.rewardDenom;
    obj.distribution_start_date = message.distributionStartDate ? import_timestamp.Timestamp.toAmino((0, import_helpers.toTimestamp)(message.distributionStartDate)) : void 0;
    obj.distribution_end_date = message.distributionEndDate ? import_timestamp.Timestamp.toAmino((0, import_helpers.toTimestamp)(message.distributionEndDate)) : void 0;
    obj.clawback_date = message.clawbackDate ? import_timestamp.Timestamp.toAmino((0, import_helpers.toTimestamp)(message.clawbackDate)) : void 0;
    obj.claim_type_deadline_date = message.claimTypeDeadlineDate ? import_timestamp.Timestamp.toAmino((0, import_helpers.toTimestamp)(message.claimTypeDeadlineDate)) : void 0;
    obj.early_claim_penalty = message.earlyClaimPenalty === "" ? void 0 : import_math.Decimal.fromUserInput(message.earlyClaimPenalty, 18).atomics;
    obj.distributor_address = message.distributorAddress === "" ? void 0 : message.distributorAddress;
    obj.allocator_address = message.allocatorAddress === "" ? void 0 : message.allocatorAddress;
    obj.linker_address = message.linkerAddress === "" ? void 0 : message.linkerAddress;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgUpdateAirdrop.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "airdrop/MsgUpdateAirdrop",
      value: MsgUpdateAirdrop.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgUpdateAirdrop.decode(message.value);
  },
  toProto(message) {
    return MsgUpdateAirdrop.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.airdrop.MsgUpdateAirdrop",
      value: MsgUpdateAirdrop.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateAirdropResponse() {
  return {};
}
const MsgUpdateAirdropResponse = {
  typeUrl: "/stride.airdrop.MsgUpdateAirdropResponse",
  encode(_, writer = import_binary.BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateAirdropResponse();
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
    const message = createBaseMsgUpdateAirdropResponse();
    return message;
  },
  fromAmino(_) {
    const message = createBaseMsgUpdateAirdropResponse();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return MsgUpdateAirdropResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return MsgUpdateAirdropResponse.decode(message.value);
  },
  toProto(message) {
    return MsgUpdateAirdropResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.airdrop.MsgUpdateAirdropResponse",
      value: MsgUpdateAirdropResponse.encode(message).finish()
    };
  }
};
function createBaseRawAllocation() {
  return {
    userAddress: "",
    allocations: []
  };
}
const RawAllocation = {
  typeUrl: "/stride.airdrop.RawAllocation",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.userAddress !== "") {
      writer.uint32(10).string(message.userAddress);
    }
    for (const v of message.allocations) {
      writer.uint32(34).string(v);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseRawAllocation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.userAddress = reader.string();
          break;
        case 4:
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
    const message = createBaseRawAllocation();
    message.userAddress = object.userAddress ?? "";
    message.allocations = object.allocations?.map((e) => e) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseRawAllocation();
    if (object.user_address !== void 0 && object.user_address !== null) {
      message.userAddress = object.user_address;
    }
    message.allocations = object.allocations?.map((e) => e) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.user_address = message.userAddress === "" ? void 0 : message.userAddress;
    if (message.allocations) {
      obj.allocations = message.allocations.map((e) => e);
    } else {
      obj.allocations = message.allocations;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return RawAllocation.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return RawAllocation.decode(message.value);
  },
  toProto(message) {
    return RawAllocation.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.airdrop.RawAllocation",
      value: RawAllocation.encode(message).finish()
    };
  }
};
function createBaseMsgAddAllocations() {
  return {
    admin: "",
    airdropId: "",
    allocations: []
  };
}
const MsgAddAllocations = {
  typeUrl: "/stride.airdrop.MsgAddAllocations",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (message.airdropId !== "") {
      writer.uint32(18).string(message.airdropId);
    }
    for (const v of message.allocations) {
      RawAllocation.encode(v, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgAddAllocations();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.airdropId = reader.string();
          break;
        case 3:
          message.allocations.push(RawAllocation.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgAddAllocations();
    message.admin = object.admin ?? "";
    message.airdropId = object.airdropId ?? "";
    message.allocations = object.allocations?.map((e) => RawAllocation.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgAddAllocations();
    if (object.admin !== void 0 && object.admin !== null) {
      message.admin = object.admin;
    }
    if (object.airdrop_id !== void 0 && object.airdrop_id !== null) {
      message.airdropId = object.airdrop_id;
    }
    message.allocations = object.allocations?.map((e) => RawAllocation.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.admin = message.admin === "" ? void 0 : message.admin;
    obj.airdrop_id = message.airdropId === "" ? void 0 : message.airdropId;
    if (message.allocations) {
      obj.allocations = message.allocations.map((e) => e ? RawAllocation.toAmino(e) : void 0);
    } else {
      obj.allocations = message.allocations;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return MsgAddAllocations.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "airdrop/MsgAddAllocations",
      value: MsgAddAllocations.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgAddAllocations.decode(message.value);
  },
  toProto(message) {
    return MsgAddAllocations.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.airdrop.MsgAddAllocations",
      value: MsgAddAllocations.encode(message).finish()
    };
  }
};
function createBaseMsgAddAllocationsResponse() {
  return {};
}
const MsgAddAllocationsResponse = {
  typeUrl: "/stride.airdrop.MsgAddAllocationsResponse",
  encode(_, writer = import_binary.BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgAddAllocationsResponse();
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
    const message = createBaseMsgAddAllocationsResponse();
    return message;
  },
  fromAmino(_) {
    const message = createBaseMsgAddAllocationsResponse();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return MsgAddAllocationsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return MsgAddAllocationsResponse.decode(message.value);
  },
  toProto(message) {
    return MsgAddAllocationsResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.airdrop.MsgAddAllocationsResponse",
      value: MsgAddAllocationsResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateUserAllocation() {
  return {
    admin: "",
    airdropId: "",
    userAddress: "",
    allocations: []
  };
}
const MsgUpdateUserAllocation = {
  typeUrl: "/stride.airdrop.MsgUpdateUserAllocation",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (message.airdropId !== "") {
      writer.uint32(18).string(message.airdropId);
    }
    if (message.userAddress !== "") {
      writer.uint32(26).string(message.userAddress);
    }
    for (const v of message.allocations) {
      writer.uint32(34).string(v);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateUserAllocation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.airdropId = reader.string();
          break;
        case 3:
          message.userAddress = reader.string();
          break;
        case 4:
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
    const message = createBaseMsgUpdateUserAllocation();
    message.admin = object.admin ?? "";
    message.airdropId = object.airdropId ?? "";
    message.userAddress = object.userAddress ?? "";
    message.allocations = object.allocations?.map((e) => e) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgUpdateUserAllocation();
    if (object.admin !== void 0 && object.admin !== null) {
      message.admin = object.admin;
    }
    if (object.airdrop_id !== void 0 && object.airdrop_id !== null) {
      message.airdropId = object.airdrop_id;
    }
    if (object.user_address !== void 0 && object.user_address !== null) {
      message.userAddress = object.user_address;
    }
    message.allocations = object.allocations?.map((e) => e) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.admin = message.admin === "" ? void 0 : message.admin;
    obj.airdrop_id = message.airdropId === "" ? void 0 : message.airdropId;
    obj.user_address = message.userAddress === "" ? void 0 : message.userAddress;
    if (message.allocations) {
      obj.allocations = message.allocations.map((e) => e);
    } else {
      obj.allocations = message.allocations;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return MsgUpdateUserAllocation.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "airdrop/MsgUpdateUserAllocation",
      value: MsgUpdateUserAllocation.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgUpdateUserAllocation.decode(message.value);
  },
  toProto(message) {
    return MsgUpdateUserAllocation.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.airdrop.MsgUpdateUserAllocation",
      value: MsgUpdateUserAllocation.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateUserAllocationResponse() {
  return {};
}
const MsgUpdateUserAllocationResponse = {
  typeUrl: "/stride.airdrop.MsgUpdateUserAllocationResponse",
  encode(_, writer = import_binary.BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateUserAllocationResponse();
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
    const message = createBaseMsgUpdateUserAllocationResponse();
    return message;
  },
  fromAmino(_) {
    const message = createBaseMsgUpdateUserAllocationResponse();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return MsgUpdateUserAllocationResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return MsgUpdateUserAllocationResponse.decode(message.value);
  },
  toProto(message) {
    return MsgUpdateUserAllocationResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.airdrop.MsgUpdateUserAllocationResponse",
      value: MsgUpdateUserAllocationResponse.encode(message).finish()
    };
  }
};
function createBaseMsgLinkAddresses() {
  return {
    admin: "",
    airdropId: "",
    strideAddress: "",
    hostAddress: ""
  };
}
const MsgLinkAddresses = {
  typeUrl: "/stride.airdrop.MsgLinkAddresses",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (message.airdropId !== "") {
      writer.uint32(18).string(message.airdropId);
    }
    if (message.strideAddress !== "") {
      writer.uint32(26).string(message.strideAddress);
    }
    if (message.hostAddress !== "") {
      writer.uint32(34).string(message.hostAddress);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgLinkAddresses();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.airdropId = reader.string();
          break;
        case 3:
          message.strideAddress = reader.string();
          break;
        case 4:
          message.hostAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgLinkAddresses();
    message.admin = object.admin ?? "";
    message.airdropId = object.airdropId ?? "";
    message.strideAddress = object.strideAddress ?? "";
    message.hostAddress = object.hostAddress ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgLinkAddresses();
    if (object.admin !== void 0 && object.admin !== null) {
      message.admin = object.admin;
    }
    if (object.airdrop_id !== void 0 && object.airdrop_id !== null) {
      message.airdropId = object.airdrop_id;
    }
    if (object.stride_address !== void 0 && object.stride_address !== null) {
      message.strideAddress = object.stride_address;
    }
    if (object.host_address !== void 0 && object.host_address !== null) {
      message.hostAddress = object.host_address;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.admin = message.admin === "" ? void 0 : message.admin;
    obj.airdrop_id = message.airdropId === "" ? void 0 : message.airdropId;
    obj.stride_address = message.strideAddress === "" ? void 0 : message.strideAddress;
    obj.host_address = message.hostAddress === "" ? void 0 : message.hostAddress;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgLinkAddresses.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "airdrop/MsgLinkAddresses",
      value: MsgLinkAddresses.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgLinkAddresses.decode(message.value);
  },
  toProto(message) {
    return MsgLinkAddresses.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.airdrop.MsgLinkAddresses",
      value: MsgLinkAddresses.encode(message).finish()
    };
  }
};
function createBaseMsgLinkAddressesResponse() {
  return {};
}
const MsgLinkAddressesResponse = {
  typeUrl: "/stride.airdrop.MsgLinkAddressesResponse",
  encode(_, writer = import_binary.BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgLinkAddressesResponse();
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
    const message = createBaseMsgLinkAddressesResponse();
    return message;
  },
  fromAmino(_) {
    const message = createBaseMsgLinkAddressesResponse();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return MsgLinkAddressesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return MsgLinkAddressesResponse.decode(message.value);
  },
  toProto(message) {
    return MsgLinkAddressesResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.airdrop.MsgLinkAddressesResponse",
      value: MsgLinkAddressesResponse.encode(message).finish()
    };
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  MsgAddAllocations,
  MsgAddAllocationsResponse,
  MsgClaimDaily,
  MsgClaimDailyResponse,
  MsgClaimEarly,
  MsgClaimEarlyResponse,
  MsgCreateAirdrop,
  MsgCreateAirdropResponse,
  MsgLinkAddresses,
  MsgLinkAddressesResponse,
  MsgUpdateAirdrop,
  MsgUpdateAirdropResponse,
  MsgUpdateUserAllocation,
  MsgUpdateUserAllocationResponse,
  RawAllocation
});
