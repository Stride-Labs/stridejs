import { Coin } from "../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../binary";
var DepositRecord_Status = /* @__PURE__ */ ((DepositRecord_Status2) => {
  DepositRecord_Status2[DepositRecord_Status2["TRANSFER_QUEUE"] = 0] = "TRANSFER_QUEUE";
  DepositRecord_Status2[DepositRecord_Status2["TRANSFER_IN_PROGRESS"] = 2] = "TRANSFER_IN_PROGRESS";
  DepositRecord_Status2[DepositRecord_Status2["DELEGATION_QUEUE"] = 1] = "DELEGATION_QUEUE";
  DepositRecord_Status2[DepositRecord_Status2["DELEGATION_IN_PROGRESS"] = 3] = "DELEGATION_IN_PROGRESS";
  DepositRecord_Status2[DepositRecord_Status2["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return DepositRecord_Status2;
})(DepositRecord_Status || {});
const DepositRecord_StatusSDKType = DepositRecord_Status;
const DepositRecord_StatusAmino = DepositRecord_Status;
function depositRecord_StatusFromJSON(object) {
  switch (object) {
    case 0:
    case "TRANSFER_QUEUE":
      return 0 /* TRANSFER_QUEUE */;
    case 2:
    case "TRANSFER_IN_PROGRESS":
      return 2 /* TRANSFER_IN_PROGRESS */;
    case 1:
    case "DELEGATION_QUEUE":
      return 1 /* DELEGATION_QUEUE */;
    case 3:
    case "DELEGATION_IN_PROGRESS":
      return 3 /* DELEGATION_IN_PROGRESS */;
    case -1:
    case "UNRECOGNIZED":
    default:
      return -1 /* UNRECOGNIZED */;
  }
}
function depositRecord_StatusToJSON(object) {
  switch (object) {
    case 0 /* TRANSFER_QUEUE */:
      return "TRANSFER_QUEUE";
    case 2 /* TRANSFER_IN_PROGRESS */:
      return "TRANSFER_IN_PROGRESS";
    case 1 /* DELEGATION_QUEUE */:
      return "DELEGATION_QUEUE";
    case 3 /* DELEGATION_IN_PROGRESS */:
      return "DELEGATION_IN_PROGRESS";
    case -1 /* UNRECOGNIZED */:
    default:
      return "UNRECOGNIZED";
  }
}
var DepositRecord_Source = /* @__PURE__ */ ((DepositRecord_Source2) => {
  DepositRecord_Source2[DepositRecord_Source2["STRIDE"] = 0] = "STRIDE";
  DepositRecord_Source2[DepositRecord_Source2["WITHDRAWAL_ICA"] = 1] = "WITHDRAWAL_ICA";
  DepositRecord_Source2[DepositRecord_Source2["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return DepositRecord_Source2;
})(DepositRecord_Source || {});
const DepositRecord_SourceSDKType = DepositRecord_Source;
const DepositRecord_SourceAmino = DepositRecord_Source;
function depositRecord_SourceFromJSON(object) {
  switch (object) {
    case 0:
    case "STRIDE":
      return 0 /* STRIDE */;
    case 1:
    case "WITHDRAWAL_ICA":
      return 1 /* WITHDRAWAL_ICA */;
    case -1:
    case "UNRECOGNIZED":
    default:
      return -1 /* UNRECOGNIZED */;
  }
}
function depositRecord_SourceToJSON(object) {
  switch (object) {
    case 0 /* STRIDE */:
      return "STRIDE";
    case 1 /* WITHDRAWAL_ICA */:
      return "WITHDRAWAL_ICA";
    case -1 /* UNRECOGNIZED */:
    default:
      return "UNRECOGNIZED";
  }
}
var HostZoneUnbonding_Status = /* @__PURE__ */ ((HostZoneUnbonding_Status2) => {
  HostZoneUnbonding_Status2[HostZoneUnbonding_Status2["UNBONDING_QUEUE"] = 0] = "UNBONDING_QUEUE";
  HostZoneUnbonding_Status2[HostZoneUnbonding_Status2["UNBONDING_IN_PROGRESS"] = 3] = "UNBONDING_IN_PROGRESS";
  HostZoneUnbonding_Status2[HostZoneUnbonding_Status2["UNBONDING_RETRY_QUEUE"] = 5] = "UNBONDING_RETRY_QUEUE";
  HostZoneUnbonding_Status2[HostZoneUnbonding_Status2["EXIT_TRANSFER_QUEUE"] = 1] = "EXIT_TRANSFER_QUEUE";
  HostZoneUnbonding_Status2[HostZoneUnbonding_Status2["EXIT_TRANSFER_IN_PROGRESS"] = 4] = "EXIT_TRANSFER_IN_PROGRESS";
  HostZoneUnbonding_Status2[HostZoneUnbonding_Status2["CLAIMABLE"] = 2] = "CLAIMABLE";
  HostZoneUnbonding_Status2[HostZoneUnbonding_Status2["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return HostZoneUnbonding_Status2;
})(HostZoneUnbonding_Status || {});
const HostZoneUnbonding_StatusSDKType = HostZoneUnbonding_Status;
const HostZoneUnbonding_StatusAmino = HostZoneUnbonding_Status;
function hostZoneUnbonding_StatusFromJSON(object) {
  switch (object) {
    case 0:
    case "UNBONDING_QUEUE":
      return 0 /* UNBONDING_QUEUE */;
    case 3:
    case "UNBONDING_IN_PROGRESS":
      return 3 /* UNBONDING_IN_PROGRESS */;
    case 5:
    case "UNBONDING_RETRY_QUEUE":
      return 5 /* UNBONDING_RETRY_QUEUE */;
    case 1:
    case "EXIT_TRANSFER_QUEUE":
      return 1 /* EXIT_TRANSFER_QUEUE */;
    case 4:
    case "EXIT_TRANSFER_IN_PROGRESS":
      return 4 /* EXIT_TRANSFER_IN_PROGRESS */;
    case 2:
    case "CLAIMABLE":
      return 2 /* CLAIMABLE */;
    case -1:
    case "UNRECOGNIZED":
    default:
      return -1 /* UNRECOGNIZED */;
  }
}
function hostZoneUnbonding_StatusToJSON(object) {
  switch (object) {
    case 0 /* UNBONDING_QUEUE */:
      return "UNBONDING_QUEUE";
    case 3 /* UNBONDING_IN_PROGRESS */:
      return "UNBONDING_IN_PROGRESS";
    case 5 /* UNBONDING_RETRY_QUEUE */:
      return "UNBONDING_RETRY_QUEUE";
    case 1 /* EXIT_TRANSFER_QUEUE */:
      return "EXIT_TRANSFER_QUEUE";
    case 4 /* EXIT_TRANSFER_IN_PROGRESS */:
      return "EXIT_TRANSFER_IN_PROGRESS";
    case 2 /* CLAIMABLE */:
      return "CLAIMABLE";
    case -1 /* UNRECOGNIZED */:
    default:
      return "UNRECOGNIZED";
  }
}
var LSMTokenDeposit_Status = /* @__PURE__ */ ((LSMTokenDeposit_Status2) => {
  LSMTokenDeposit_Status2[LSMTokenDeposit_Status2["DEPOSIT_PENDING"] = 0] = "DEPOSIT_PENDING";
  LSMTokenDeposit_Status2[LSMTokenDeposit_Status2["TRANSFER_QUEUE"] = 1] = "TRANSFER_QUEUE";
  LSMTokenDeposit_Status2[LSMTokenDeposit_Status2["TRANSFER_IN_PROGRESS"] = 2] = "TRANSFER_IN_PROGRESS";
  LSMTokenDeposit_Status2[LSMTokenDeposit_Status2["TRANSFER_FAILED"] = 3] = "TRANSFER_FAILED";
  LSMTokenDeposit_Status2[LSMTokenDeposit_Status2["DETOKENIZATION_QUEUE"] = 4] = "DETOKENIZATION_QUEUE";
  LSMTokenDeposit_Status2[LSMTokenDeposit_Status2["DETOKENIZATION_IN_PROGRESS"] = 5] = "DETOKENIZATION_IN_PROGRESS";
  LSMTokenDeposit_Status2[LSMTokenDeposit_Status2["DETOKENIZATION_FAILED"] = 6] = "DETOKENIZATION_FAILED";
  LSMTokenDeposit_Status2[LSMTokenDeposit_Status2["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return LSMTokenDeposit_Status2;
})(LSMTokenDeposit_Status || {});
const LSMTokenDeposit_StatusSDKType = LSMTokenDeposit_Status;
const LSMTokenDeposit_StatusAmino = LSMTokenDeposit_Status;
function lSMTokenDeposit_StatusFromJSON(object) {
  switch (object) {
    case 0:
    case "DEPOSIT_PENDING":
      return 0 /* DEPOSIT_PENDING */;
    case 1:
    case "TRANSFER_QUEUE":
      return 1 /* TRANSFER_QUEUE */;
    case 2:
    case "TRANSFER_IN_PROGRESS":
      return 2 /* TRANSFER_IN_PROGRESS */;
    case 3:
    case "TRANSFER_FAILED":
      return 3 /* TRANSFER_FAILED */;
    case 4:
    case "DETOKENIZATION_QUEUE":
      return 4 /* DETOKENIZATION_QUEUE */;
    case 5:
    case "DETOKENIZATION_IN_PROGRESS":
      return 5 /* DETOKENIZATION_IN_PROGRESS */;
    case 6:
    case "DETOKENIZATION_FAILED":
      return 6 /* DETOKENIZATION_FAILED */;
    case -1:
    case "UNRECOGNIZED":
    default:
      return -1 /* UNRECOGNIZED */;
  }
}
function lSMTokenDeposit_StatusToJSON(object) {
  switch (object) {
    case 0 /* DEPOSIT_PENDING */:
      return "DEPOSIT_PENDING";
    case 1 /* TRANSFER_QUEUE */:
      return "TRANSFER_QUEUE";
    case 2 /* TRANSFER_IN_PROGRESS */:
      return "TRANSFER_IN_PROGRESS";
    case 3 /* TRANSFER_FAILED */:
      return "TRANSFER_FAILED";
    case 4 /* DETOKENIZATION_QUEUE */:
      return "DETOKENIZATION_QUEUE";
    case 5 /* DETOKENIZATION_IN_PROGRESS */:
      return "DETOKENIZATION_IN_PROGRESS";
    case 6 /* DETOKENIZATION_FAILED */:
      return "DETOKENIZATION_FAILED";
    case -1 /* UNRECOGNIZED */:
    default:
      return "UNRECOGNIZED";
  }
}
function createBaseUserRedemptionRecord() {
  return {
    id: "",
    receiver: "",
    nativeTokenAmount: "",
    denom: "",
    hostZoneId: "",
    epochNumber: BigInt(0),
    claimIsPending: false,
    stTokenAmount: ""
  };
}
const UserRedemptionRecord = {
  typeUrl: "/stride.records.UserRedemptionRecord",
  encode(message, writer = BinaryWriter.create()) {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.receiver !== "") {
      writer.uint32(26).string(message.receiver);
    }
    if (message.nativeTokenAmount !== "") {
      writer.uint32(34).string(message.nativeTokenAmount);
    }
    if (message.denom !== "") {
      writer.uint32(42).string(message.denom);
    }
    if (message.hostZoneId !== "") {
      writer.uint32(50).string(message.hostZoneId);
    }
    if (message.epochNumber !== BigInt(0)) {
      writer.uint32(56).uint64(message.epochNumber);
    }
    if (message.claimIsPending === true) {
      writer.uint32(64).bool(message.claimIsPending);
    }
    if (message.stTokenAmount !== "") {
      writer.uint32(74).string(message.stTokenAmount);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseUserRedemptionRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 3:
          message.receiver = reader.string();
          break;
        case 4:
          message.nativeTokenAmount = reader.string();
          break;
        case 5:
          message.denom = reader.string();
          break;
        case 6:
          message.hostZoneId = reader.string();
          break;
        case 7:
          message.epochNumber = reader.uint64();
          break;
        case 8:
          message.claimIsPending = reader.bool();
          break;
        case 9:
          message.stTokenAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseUserRedemptionRecord();
    message.id = object.id ?? "";
    message.receiver = object.receiver ?? "";
    message.nativeTokenAmount = object.nativeTokenAmount ?? "";
    message.denom = object.denom ?? "";
    message.hostZoneId = object.hostZoneId ?? "";
    message.epochNumber = object.epochNumber !== void 0 && object.epochNumber !== null ? BigInt(object.epochNumber.toString()) : BigInt(0);
    message.claimIsPending = object.claimIsPending ?? false;
    message.stTokenAmount = object.stTokenAmount ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseUserRedemptionRecord();
    if (object.id !== void 0 && object.id !== null) {
      message.id = object.id;
    }
    if (object.receiver !== void 0 && object.receiver !== null) {
      message.receiver = object.receiver;
    }
    if (object.native_token_amount !== void 0 && object.native_token_amount !== null) {
      message.nativeTokenAmount = object.native_token_amount;
    }
    if (object.denom !== void 0 && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.host_zone_id !== void 0 && object.host_zone_id !== null) {
      message.hostZoneId = object.host_zone_id;
    }
    if (object.epoch_number !== void 0 && object.epoch_number !== null) {
      message.epochNumber = BigInt(object.epoch_number);
    }
    if (object.claim_is_pending !== void 0 && object.claim_is_pending !== null) {
      message.claimIsPending = object.claim_is_pending;
    }
    if (object.st_token_amount !== void 0 && object.st_token_amount !== null) {
      message.stTokenAmount = object.st_token_amount;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.id = message.id === "" ? void 0 : message.id;
    obj.receiver = message.receiver === "" ? void 0 : message.receiver;
    obj.native_token_amount = message.nativeTokenAmount === "" ? void 0 : message.nativeTokenAmount;
    obj.denom = message.denom === "" ? void 0 : message.denom;
    obj.host_zone_id = message.hostZoneId === "" ? void 0 : message.hostZoneId;
    obj.epoch_number = message.epochNumber !== BigInt(0) ? message.epochNumber?.toString() : void 0;
    obj.claim_is_pending = message.claimIsPending === false ? void 0 : message.claimIsPending;
    obj.st_token_amount = message.stTokenAmount === "" ? void 0 : message.stTokenAmount;
    return obj;
  },
  fromAminoMsg(object) {
    return UserRedemptionRecord.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return UserRedemptionRecord.decode(message.value);
  },
  toProto(message) {
    return UserRedemptionRecord.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.records.UserRedemptionRecord",
      value: UserRedemptionRecord.encode(message).finish()
    };
  }
};
function createBaseDepositRecord() {
  return {
    id: BigInt(0),
    amount: "",
    denom: "",
    hostZoneId: "",
    status: 0,
    depositEpochNumber: BigInt(0),
    source: 0,
    delegationTxsInProgress: BigInt(0)
  };
}
const DepositRecord = {
  typeUrl: "/stride.records.DepositRecord",
  encode(message, writer = BinaryWriter.create()) {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    if (message.denom !== "") {
      writer.uint32(26).string(message.denom);
    }
    if (message.hostZoneId !== "") {
      writer.uint32(34).string(message.hostZoneId);
    }
    if (message.status !== 0) {
      writer.uint32(48).int32(message.status);
    }
    if (message.depositEpochNumber !== BigInt(0)) {
      writer.uint32(56).uint64(message.depositEpochNumber);
    }
    if (message.source !== 0) {
      writer.uint32(64).int32(message.source);
    }
    if (message.delegationTxsInProgress !== BigInt(0)) {
      writer.uint32(72).uint64(message.delegationTxsInProgress);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseDepositRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        case 2:
          message.amount = reader.string();
          break;
        case 3:
          message.denom = reader.string();
          break;
        case 4:
          message.hostZoneId = reader.string();
          break;
        case 6:
          message.status = reader.int32();
          break;
        case 7:
          message.depositEpochNumber = reader.uint64();
          break;
        case 8:
          message.source = reader.int32();
          break;
        case 9:
          message.delegationTxsInProgress = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseDepositRecord();
    message.id = object.id !== void 0 && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.amount = object.amount ?? "";
    message.denom = object.denom ?? "";
    message.hostZoneId = object.hostZoneId ?? "";
    message.status = object.status ?? 0;
    message.depositEpochNumber = object.depositEpochNumber !== void 0 && object.depositEpochNumber !== null ? BigInt(object.depositEpochNumber.toString()) : BigInt(0);
    message.source = object.source ?? 0;
    message.delegationTxsInProgress = object.delegationTxsInProgress !== void 0 && object.delegationTxsInProgress !== null ? BigInt(object.delegationTxsInProgress.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object) {
    const message = createBaseDepositRecord();
    if (object.id !== void 0 && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.amount !== void 0 && object.amount !== null) {
      message.amount = object.amount;
    }
    if (object.denom !== void 0 && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.host_zone_id !== void 0 && object.host_zone_id !== null) {
      message.hostZoneId = object.host_zone_id;
    }
    if (object.status !== void 0 && object.status !== null) {
      message.status = object.status;
    }
    if (object.deposit_epoch_number !== void 0 && object.deposit_epoch_number !== null) {
      message.depositEpochNumber = BigInt(object.deposit_epoch_number);
    }
    if (object.source !== void 0 && object.source !== null) {
      message.source = object.source;
    }
    if (object.delegation_txs_in_progress !== void 0 && object.delegation_txs_in_progress !== null) {
      message.delegationTxsInProgress = BigInt(object.delegation_txs_in_progress);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : void 0;
    obj.amount = message.amount === "" ? void 0 : message.amount;
    obj.denom = message.denom === "" ? void 0 : message.denom;
    obj.host_zone_id = message.hostZoneId === "" ? void 0 : message.hostZoneId;
    obj.status = message.status === 0 ? void 0 : message.status;
    obj.deposit_epoch_number = message.depositEpochNumber !== BigInt(0) ? message.depositEpochNumber?.toString() : void 0;
    obj.source = message.source === 0 ? void 0 : message.source;
    obj.delegation_txs_in_progress = message.delegationTxsInProgress !== BigInt(0) ? message.delegationTxsInProgress?.toString() : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return DepositRecord.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return DepositRecord.decode(message.value);
  },
  toProto(message) {
    return DepositRecord.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.records.DepositRecord",
      value: DepositRecord.encode(message).finish()
    };
  }
};
function createBaseHostZoneUnbonding() {
  return {
    stTokenAmount: "",
    nativeTokenAmount: "",
    stTokensToBurn: "",
    nativeTokensToUnbond: "",
    claimableNativeTokens: "",
    undelegationTxsInProgress: BigInt(0),
    denom: "",
    hostZoneId: "",
    unbondingTime: BigInt(0),
    status: 0,
    userRedemptionRecords: []
  };
}
const HostZoneUnbonding = {
  typeUrl: "/stride.records.HostZoneUnbonding",
  encode(message, writer = BinaryWriter.create()) {
    if (message.stTokenAmount !== "") {
      writer.uint32(10).string(message.stTokenAmount);
    }
    if (message.nativeTokenAmount !== "") {
      writer.uint32(18).string(message.nativeTokenAmount);
    }
    if (message.stTokensToBurn !== "") {
      writer.uint32(66).string(message.stTokensToBurn);
    }
    if (message.nativeTokensToUnbond !== "") {
      writer.uint32(74).string(message.nativeTokensToUnbond);
    }
    if (message.claimableNativeTokens !== "") {
      writer.uint32(82).string(message.claimableNativeTokens);
    }
    if (message.undelegationTxsInProgress !== BigInt(0)) {
      writer.uint32(88).uint64(message.undelegationTxsInProgress);
    }
    if (message.denom !== "") {
      writer.uint32(26).string(message.denom);
    }
    if (message.hostZoneId !== "") {
      writer.uint32(34).string(message.hostZoneId);
    }
    if (message.unbondingTime !== BigInt(0)) {
      writer.uint32(40).uint64(message.unbondingTime);
    }
    if (message.status !== 0) {
      writer.uint32(48).int32(message.status);
    }
    for (const v of message.userRedemptionRecords) {
      writer.uint32(58).string(v);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseHostZoneUnbonding();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.stTokenAmount = reader.string();
          break;
        case 2:
          message.nativeTokenAmount = reader.string();
          break;
        case 8:
          message.stTokensToBurn = reader.string();
          break;
        case 9:
          message.nativeTokensToUnbond = reader.string();
          break;
        case 10:
          message.claimableNativeTokens = reader.string();
          break;
        case 11:
          message.undelegationTxsInProgress = reader.uint64();
          break;
        case 3:
          message.denom = reader.string();
          break;
        case 4:
          message.hostZoneId = reader.string();
          break;
        case 5:
          message.unbondingTime = reader.uint64();
          break;
        case 6:
          message.status = reader.int32();
          break;
        case 7:
          message.userRedemptionRecords.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseHostZoneUnbonding();
    message.stTokenAmount = object.stTokenAmount ?? "";
    message.nativeTokenAmount = object.nativeTokenAmount ?? "";
    message.stTokensToBurn = object.stTokensToBurn ?? "";
    message.nativeTokensToUnbond = object.nativeTokensToUnbond ?? "";
    message.claimableNativeTokens = object.claimableNativeTokens ?? "";
    message.undelegationTxsInProgress = object.undelegationTxsInProgress !== void 0 && object.undelegationTxsInProgress !== null ? BigInt(object.undelegationTxsInProgress.toString()) : BigInt(0);
    message.denom = object.denom ?? "";
    message.hostZoneId = object.hostZoneId ?? "";
    message.unbondingTime = object.unbondingTime !== void 0 && object.unbondingTime !== null ? BigInt(object.unbondingTime.toString()) : BigInt(0);
    message.status = object.status ?? 0;
    message.userRedemptionRecords = object.userRedemptionRecords?.map((e) => e) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseHostZoneUnbonding();
    if (object.st_token_amount !== void 0 && object.st_token_amount !== null) {
      message.stTokenAmount = object.st_token_amount;
    }
    if (object.native_token_amount !== void 0 && object.native_token_amount !== null) {
      message.nativeTokenAmount = object.native_token_amount;
    }
    if (object.st_tokens_to_burn !== void 0 && object.st_tokens_to_burn !== null) {
      message.stTokensToBurn = object.st_tokens_to_burn;
    }
    if (object.native_tokens_to_unbond !== void 0 && object.native_tokens_to_unbond !== null) {
      message.nativeTokensToUnbond = object.native_tokens_to_unbond;
    }
    if (object.claimable_native_tokens !== void 0 && object.claimable_native_tokens !== null) {
      message.claimableNativeTokens = object.claimable_native_tokens;
    }
    if (object.undelegation_txs_in_progress !== void 0 && object.undelegation_txs_in_progress !== null) {
      message.undelegationTxsInProgress = BigInt(object.undelegation_txs_in_progress);
    }
    if (object.denom !== void 0 && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.host_zone_id !== void 0 && object.host_zone_id !== null) {
      message.hostZoneId = object.host_zone_id;
    }
    if (object.unbonding_time !== void 0 && object.unbonding_time !== null) {
      message.unbondingTime = BigInt(object.unbonding_time);
    }
    if (object.status !== void 0 && object.status !== null) {
      message.status = object.status;
    }
    message.userRedemptionRecords = object.user_redemption_records?.map((e) => e) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.st_token_amount = message.stTokenAmount === "" ? void 0 : message.stTokenAmount;
    obj.native_token_amount = message.nativeTokenAmount === "" ? void 0 : message.nativeTokenAmount;
    obj.st_tokens_to_burn = message.stTokensToBurn === "" ? void 0 : message.stTokensToBurn;
    obj.native_tokens_to_unbond = message.nativeTokensToUnbond === "" ? void 0 : message.nativeTokensToUnbond;
    obj.claimable_native_tokens = message.claimableNativeTokens === "" ? void 0 : message.claimableNativeTokens;
    obj.undelegation_txs_in_progress = message.undelegationTxsInProgress !== BigInt(0) ? message.undelegationTxsInProgress?.toString() : void 0;
    obj.denom = message.denom === "" ? void 0 : message.denom;
    obj.host_zone_id = message.hostZoneId === "" ? void 0 : message.hostZoneId;
    obj.unbonding_time = message.unbondingTime !== BigInt(0) ? message.unbondingTime?.toString() : void 0;
    obj.status = message.status === 0 ? void 0 : message.status;
    if (message.userRedemptionRecords) {
      obj.user_redemption_records = message.userRedemptionRecords.map((e) => e);
    } else {
      obj.user_redemption_records = message.userRedemptionRecords;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return HostZoneUnbonding.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return HostZoneUnbonding.decode(message.value);
  },
  toProto(message) {
    return HostZoneUnbonding.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.records.HostZoneUnbonding",
      value: HostZoneUnbonding.encode(message).finish()
    };
  }
};
function createBaseEpochUnbondingRecord() {
  return {
    epochNumber: BigInt(0),
    hostZoneUnbondings: []
  };
}
const EpochUnbondingRecord = {
  typeUrl: "/stride.records.EpochUnbondingRecord",
  encode(message, writer = BinaryWriter.create()) {
    if (message.epochNumber !== BigInt(0)) {
      writer.uint32(8).uint64(message.epochNumber);
    }
    for (const v of message.hostZoneUnbondings) {
      HostZoneUnbonding.encode(v, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseEpochUnbondingRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.epochNumber = reader.uint64();
          break;
        case 3:
          message.hostZoneUnbondings.push(HostZoneUnbonding.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseEpochUnbondingRecord();
    message.epochNumber = object.epochNumber !== void 0 && object.epochNumber !== null ? BigInt(object.epochNumber.toString()) : BigInt(0);
    message.hostZoneUnbondings = object.hostZoneUnbondings?.map((e) => HostZoneUnbonding.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseEpochUnbondingRecord();
    if (object.epoch_number !== void 0 && object.epoch_number !== null) {
      message.epochNumber = BigInt(object.epoch_number);
    }
    message.hostZoneUnbondings = object.host_zone_unbondings?.map((e) => HostZoneUnbonding.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.epoch_number = message.epochNumber !== BigInt(0) ? message.epochNumber?.toString() : void 0;
    if (message.hostZoneUnbondings) {
      obj.host_zone_unbondings = message.hostZoneUnbondings.map((e) => e ? HostZoneUnbonding.toAmino(e) : void 0);
    } else {
      obj.host_zone_unbondings = message.hostZoneUnbondings;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return EpochUnbondingRecord.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return EpochUnbondingRecord.decode(message.value);
  },
  toProto(message) {
    return EpochUnbondingRecord.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.records.EpochUnbondingRecord",
      value: EpochUnbondingRecord.encode(message).finish()
    };
  }
};
function createBaseLSMTokenDeposit() {
  return {
    depositId: "",
    chainId: "",
    denom: "",
    ibcDenom: "",
    stakerAddress: "",
    validatorAddress: "",
    amount: "",
    stToken: Coin.fromPartial({}),
    status: 0
  };
}
const LSMTokenDeposit = {
  typeUrl: "/stride.records.LSMTokenDeposit",
  encode(message, writer = BinaryWriter.create()) {
    if (message.depositId !== "") {
      writer.uint32(10).string(message.depositId);
    }
    if (message.chainId !== "") {
      writer.uint32(18).string(message.chainId);
    }
    if (message.denom !== "") {
      writer.uint32(26).string(message.denom);
    }
    if (message.ibcDenom !== "") {
      writer.uint32(34).string(message.ibcDenom);
    }
    if (message.stakerAddress !== "") {
      writer.uint32(42).string(message.stakerAddress);
    }
    if (message.validatorAddress !== "") {
      writer.uint32(50).string(message.validatorAddress);
    }
    if (message.amount !== "") {
      writer.uint32(58).string(message.amount);
    }
    if (message.stToken !== void 0) {
      Coin.encode(message.stToken, writer.uint32(66).fork()).ldelim();
    }
    if (message.status !== 0) {
      writer.uint32(72).int32(message.status);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseLSMTokenDeposit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.depositId = reader.string();
          break;
        case 2:
          message.chainId = reader.string();
          break;
        case 3:
          message.denom = reader.string();
          break;
        case 4:
          message.ibcDenom = reader.string();
          break;
        case 5:
          message.stakerAddress = reader.string();
          break;
        case 6:
          message.validatorAddress = reader.string();
          break;
        case 7:
          message.amount = reader.string();
          break;
        case 8:
          message.stToken = Coin.decode(reader, reader.uint32());
          break;
        case 9:
          message.status = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseLSMTokenDeposit();
    message.depositId = object.depositId ?? "";
    message.chainId = object.chainId ?? "";
    message.denom = object.denom ?? "";
    message.ibcDenom = object.ibcDenom ?? "";
    message.stakerAddress = object.stakerAddress ?? "";
    message.validatorAddress = object.validatorAddress ?? "";
    message.amount = object.amount ?? "";
    message.stToken = object.stToken !== void 0 && object.stToken !== null ? Coin.fromPartial(object.stToken) : void 0;
    message.status = object.status ?? 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseLSMTokenDeposit();
    if (object.deposit_id !== void 0 && object.deposit_id !== null) {
      message.depositId = object.deposit_id;
    }
    if (object.chain_id !== void 0 && object.chain_id !== null) {
      message.chainId = object.chain_id;
    }
    if (object.denom !== void 0 && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.ibc_denom !== void 0 && object.ibc_denom !== null) {
      message.ibcDenom = object.ibc_denom;
    }
    if (object.staker_address !== void 0 && object.staker_address !== null) {
      message.stakerAddress = object.staker_address;
    }
    if (object.validator_address !== void 0 && object.validator_address !== null) {
      message.validatorAddress = object.validator_address;
    }
    if (object.amount !== void 0 && object.amount !== null) {
      message.amount = object.amount;
    }
    if (object.st_token !== void 0 && object.st_token !== null) {
      message.stToken = Coin.fromAmino(object.st_token);
    }
    if (object.status !== void 0 && object.status !== null) {
      message.status = object.status;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.deposit_id = message.depositId === "" ? void 0 : message.depositId;
    obj.chain_id = message.chainId === "" ? void 0 : message.chainId;
    obj.denom = message.denom === "" ? void 0 : message.denom;
    obj.ibc_denom = message.ibcDenom === "" ? void 0 : message.ibcDenom;
    obj.staker_address = message.stakerAddress === "" ? void 0 : message.stakerAddress;
    obj.validator_address = message.validatorAddress === "" ? void 0 : message.validatorAddress;
    obj.amount = message.amount === "" ? void 0 : message.amount;
    obj.st_token = message.stToken ? Coin.toAmino(message.stToken) : void 0;
    obj.status = message.status === 0 ? void 0 : message.status;
    return obj;
  },
  fromAminoMsg(object) {
    return LSMTokenDeposit.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return LSMTokenDeposit.decode(message.value);
  },
  toProto(message) {
    return LSMTokenDeposit.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.records.LSMTokenDeposit",
      value: LSMTokenDeposit.encode(message).finish()
    };
  }
};
export {
  DepositRecord,
  DepositRecord_Source,
  DepositRecord_SourceAmino,
  DepositRecord_SourceSDKType,
  DepositRecord_Status,
  DepositRecord_StatusAmino,
  DepositRecord_StatusSDKType,
  EpochUnbondingRecord,
  HostZoneUnbonding,
  HostZoneUnbonding_Status,
  HostZoneUnbonding_StatusAmino,
  HostZoneUnbonding_StatusSDKType,
  LSMTokenDeposit,
  LSMTokenDeposit_Status,
  LSMTokenDeposit_StatusAmino,
  LSMTokenDeposit_StatusSDKType,
  UserRedemptionRecord,
  depositRecord_SourceFromJSON,
  depositRecord_SourceToJSON,
  depositRecord_StatusFromJSON,
  depositRecord_StatusToJSON,
  hostZoneUnbonding_StatusFromJSON,
  hostZoneUnbonding_StatusToJSON,
  lSMTokenDeposit_StatusFromJSON,
  lSMTokenDeposit_StatusToJSON
};
