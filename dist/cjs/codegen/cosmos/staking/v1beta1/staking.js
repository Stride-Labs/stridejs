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
var staking_exports = {};
__export(staking_exports, {
  BondStatus: () => BondStatus,
  BondStatusAmino: () => BondStatusAmino,
  BondStatusSDKType: () => BondStatusSDKType,
  Commission: () => Commission,
  CommissionRates: () => CommissionRates,
  Cosmos_cryptoPubKey_FromAmino: () => Cosmos_cryptoPubKey_FromAmino,
  Cosmos_cryptoPubKey_InterfaceDecoder: () => Cosmos_cryptoPubKey_InterfaceDecoder,
  Cosmos_cryptoPubKey_ToAmino: () => Cosmos_cryptoPubKey_ToAmino,
  DVPair: () => DVPair,
  DVPairs: () => DVPairs,
  DVVTriplet: () => DVVTriplet,
  DVVTriplets: () => DVVTriplets,
  Delegation: () => Delegation,
  DelegationResponse: () => DelegationResponse,
  Description: () => Description,
  HistoricalInfo: () => HistoricalInfo,
  InfractionType: () => InfractionType,
  InfractionTypeAmino: () => InfractionTypeAmino,
  InfractionTypeSDKType: () => InfractionTypeSDKType,
  Params: () => Params,
  PendingTokenizeShareAuthorizations: () => PendingTokenizeShareAuthorizations,
  Pool: () => Pool,
  Redelegation: () => Redelegation,
  RedelegationEntry: () => RedelegationEntry,
  RedelegationEntryResponse: () => RedelegationEntryResponse,
  RedelegationResponse: () => RedelegationResponse,
  TokenizeShareLockStatus: () => TokenizeShareLockStatus,
  TokenizeShareLockStatusAmino: () => TokenizeShareLockStatusAmino,
  TokenizeShareLockStatusSDKType: () => TokenizeShareLockStatusSDKType,
  TokenizeShareRecord: () => TokenizeShareRecord,
  UnbondingDelegation: () => UnbondingDelegation,
  UnbondingDelegationEntry: () => UnbondingDelegationEntry,
  ValAddresses: () => ValAddresses,
  Validator: () => Validator,
  ValidatorUpdates: () => ValidatorUpdates,
  bondStatusFromJSON: () => bondStatusFromJSON,
  bondStatusToJSON: () => bondStatusToJSON,
  infractionTypeFromJSON: () => infractionTypeFromJSON,
  infractionTypeToJSON: () => infractionTypeToJSON,
  tokenizeShareLockStatusFromJSON: () => tokenizeShareLockStatusFromJSON,
  tokenizeShareLockStatusToJSON: () => tokenizeShareLockStatusToJSON
});
module.exports = __toCommonJS(staking_exports);
var import_types = require("../../../tendermint/types/types");
var import_timestamp = require("../../../google/protobuf/timestamp");
var import_any = require("../../../google/protobuf/any");
var import_duration = require("../../../google/protobuf/duration");
var import_coin = require("../../base/v1beta1/coin");
var import_types2 = require("../../../tendermint/abci/types");
var import_binary = require("../../../binary");
var import_math = require("@cosmjs/math");
var import_helpers = require("../../../helpers");
var import_proto_signing = require("@cosmjs/proto-signing");
var BondStatus = /* @__PURE__ */ ((BondStatus2) => {
  BondStatus2[BondStatus2["BOND_STATUS_UNSPECIFIED"] = 0] = "BOND_STATUS_UNSPECIFIED";
  BondStatus2[BondStatus2["BOND_STATUS_UNBONDED"] = 1] = "BOND_STATUS_UNBONDED";
  BondStatus2[BondStatus2["BOND_STATUS_UNBONDING"] = 2] = "BOND_STATUS_UNBONDING";
  BondStatus2[BondStatus2["BOND_STATUS_BONDED"] = 3] = "BOND_STATUS_BONDED";
  BondStatus2[BondStatus2["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return BondStatus2;
})(BondStatus || {});
const BondStatusSDKType = BondStatus;
const BondStatusAmino = BondStatus;
function bondStatusFromJSON(object) {
  switch (object) {
    case 0:
    case "BOND_STATUS_UNSPECIFIED":
      return 0 /* BOND_STATUS_UNSPECIFIED */;
    case 1:
    case "BOND_STATUS_UNBONDED":
      return 1 /* BOND_STATUS_UNBONDED */;
    case 2:
    case "BOND_STATUS_UNBONDING":
      return 2 /* BOND_STATUS_UNBONDING */;
    case 3:
    case "BOND_STATUS_BONDED":
      return 3 /* BOND_STATUS_BONDED */;
    case -1:
    case "UNRECOGNIZED":
    default:
      return -1 /* UNRECOGNIZED */;
  }
}
function bondStatusToJSON(object) {
  switch (object) {
    case 0 /* BOND_STATUS_UNSPECIFIED */:
      return "BOND_STATUS_UNSPECIFIED";
    case 1 /* BOND_STATUS_UNBONDED */:
      return "BOND_STATUS_UNBONDED";
    case 2 /* BOND_STATUS_UNBONDING */:
      return "BOND_STATUS_UNBONDING";
    case 3 /* BOND_STATUS_BONDED */:
      return "BOND_STATUS_BONDED";
    case -1 /* UNRECOGNIZED */:
    default:
      return "UNRECOGNIZED";
  }
}
var InfractionType = /* @__PURE__ */ ((InfractionType2) => {
  InfractionType2[InfractionType2["INFRACTION_TYPE_UNSPECIFIED"] = 0] = "INFRACTION_TYPE_UNSPECIFIED";
  InfractionType2[InfractionType2["INFRACTION_TYPE_DOUBLE_SIGN"] = 1] = "INFRACTION_TYPE_DOUBLE_SIGN";
  InfractionType2[InfractionType2["INFRACTION_TYPE_DOWNTIME"] = 2] = "INFRACTION_TYPE_DOWNTIME";
  InfractionType2[InfractionType2["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return InfractionType2;
})(InfractionType || {});
const InfractionTypeSDKType = InfractionType;
const InfractionTypeAmino = InfractionType;
function infractionTypeFromJSON(object) {
  switch (object) {
    case 0:
    case "INFRACTION_TYPE_UNSPECIFIED":
      return 0 /* INFRACTION_TYPE_UNSPECIFIED */;
    case 1:
    case "INFRACTION_TYPE_DOUBLE_SIGN":
      return 1 /* INFRACTION_TYPE_DOUBLE_SIGN */;
    case 2:
    case "INFRACTION_TYPE_DOWNTIME":
      return 2 /* INFRACTION_TYPE_DOWNTIME */;
    case -1:
    case "UNRECOGNIZED":
    default:
      return -1 /* UNRECOGNIZED */;
  }
}
function infractionTypeToJSON(object) {
  switch (object) {
    case 0 /* INFRACTION_TYPE_UNSPECIFIED */:
      return "INFRACTION_TYPE_UNSPECIFIED";
    case 1 /* INFRACTION_TYPE_DOUBLE_SIGN */:
      return "INFRACTION_TYPE_DOUBLE_SIGN";
    case 2 /* INFRACTION_TYPE_DOWNTIME */:
      return "INFRACTION_TYPE_DOWNTIME";
    case -1 /* UNRECOGNIZED */:
    default:
      return "UNRECOGNIZED";
  }
}
var TokenizeShareLockStatus = /* @__PURE__ */ ((TokenizeShareLockStatus2) => {
  TokenizeShareLockStatus2[TokenizeShareLockStatus2["TOKENIZE_SHARE_LOCK_STATUS_UNSPECIFIED"] = 0] = "TOKENIZE_SHARE_LOCK_STATUS_UNSPECIFIED";
  TokenizeShareLockStatus2[TokenizeShareLockStatus2["TOKENIZE_SHARE_LOCK_STATUS_LOCKED"] = 1] = "TOKENIZE_SHARE_LOCK_STATUS_LOCKED";
  TokenizeShareLockStatus2[TokenizeShareLockStatus2["TOKENIZE_SHARE_LOCK_STATUS_UNLOCKED"] = 2] = "TOKENIZE_SHARE_LOCK_STATUS_UNLOCKED";
  TokenizeShareLockStatus2[TokenizeShareLockStatus2["TOKENIZE_SHARE_LOCK_STATUS_LOCK_EXPIRING"] = 3] = "TOKENIZE_SHARE_LOCK_STATUS_LOCK_EXPIRING";
  TokenizeShareLockStatus2[TokenizeShareLockStatus2["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return TokenizeShareLockStatus2;
})(TokenizeShareLockStatus || {});
const TokenizeShareLockStatusSDKType = TokenizeShareLockStatus;
const TokenizeShareLockStatusAmino = TokenizeShareLockStatus;
function tokenizeShareLockStatusFromJSON(object) {
  switch (object) {
    case 0:
    case "TOKENIZE_SHARE_LOCK_STATUS_UNSPECIFIED":
      return 0 /* TOKENIZE_SHARE_LOCK_STATUS_UNSPECIFIED */;
    case 1:
    case "TOKENIZE_SHARE_LOCK_STATUS_LOCKED":
      return 1 /* TOKENIZE_SHARE_LOCK_STATUS_LOCKED */;
    case 2:
    case "TOKENIZE_SHARE_LOCK_STATUS_UNLOCKED":
      return 2 /* TOKENIZE_SHARE_LOCK_STATUS_UNLOCKED */;
    case 3:
    case "TOKENIZE_SHARE_LOCK_STATUS_LOCK_EXPIRING":
      return 3 /* TOKENIZE_SHARE_LOCK_STATUS_LOCK_EXPIRING */;
    case -1:
    case "UNRECOGNIZED":
    default:
      return -1 /* UNRECOGNIZED */;
  }
}
function tokenizeShareLockStatusToJSON(object) {
  switch (object) {
    case 0 /* TOKENIZE_SHARE_LOCK_STATUS_UNSPECIFIED */:
      return "TOKENIZE_SHARE_LOCK_STATUS_UNSPECIFIED";
    case 1 /* TOKENIZE_SHARE_LOCK_STATUS_LOCKED */:
      return "TOKENIZE_SHARE_LOCK_STATUS_LOCKED";
    case 2 /* TOKENIZE_SHARE_LOCK_STATUS_UNLOCKED */:
      return "TOKENIZE_SHARE_LOCK_STATUS_UNLOCKED";
    case 3 /* TOKENIZE_SHARE_LOCK_STATUS_LOCK_EXPIRING */:
      return "TOKENIZE_SHARE_LOCK_STATUS_LOCK_EXPIRING";
    case -1 /* UNRECOGNIZED */:
    default:
      return "UNRECOGNIZED";
  }
}
function createBaseHistoricalInfo() {
  return {
    header: import_types.Header.fromPartial({}),
    valset: []
  };
}
const HistoricalInfo = {
  typeUrl: "/cosmos.staking.v1beta1.HistoricalInfo",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.header !== void 0) {
      import_types.Header.encode(message.header, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.valset) {
      Validator.encode(v, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseHistoricalInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.header = import_types.Header.decode(reader, reader.uint32());
          break;
        case 2:
          message.valset.push(Validator.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseHistoricalInfo();
    message.header = object.header !== void 0 && object.header !== null ? import_types.Header.fromPartial(object.header) : void 0;
    message.valset = object.valset?.map((e) => Validator.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseHistoricalInfo();
    if (object.header !== void 0 && object.header !== null) {
      message.header = import_types.Header.fromAmino(object.header);
    }
    message.valset = object.valset?.map((e) => Validator.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.header = message.header ? import_types.Header.toAmino(message.header) : void 0;
    if (message.valset) {
      obj.valset = message.valset.map((e) => e ? Validator.toAmino(e) : void 0);
    } else {
      obj.valset = message.valset;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return HistoricalInfo.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/HistoricalInfo",
      value: HistoricalInfo.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return HistoricalInfo.decode(message.value);
  },
  toProto(message) {
    return HistoricalInfo.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.staking.v1beta1.HistoricalInfo",
      value: HistoricalInfo.encode(message).finish()
    };
  }
};
function createBaseCommissionRates() {
  return {
    rate: "",
    maxRate: "",
    maxChangeRate: ""
  };
}
const CommissionRates = {
  typeUrl: "/cosmos.staking.v1beta1.CommissionRates",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.rate !== "") {
      writer.uint32(10).string(import_math.Decimal.fromUserInput(message.rate, 18).atomics);
    }
    if (message.maxRate !== "") {
      writer.uint32(18).string(import_math.Decimal.fromUserInput(message.maxRate, 18).atomics);
    }
    if (message.maxChangeRate !== "") {
      writer.uint32(26).string(import_math.Decimal.fromUserInput(message.maxChangeRate, 18).atomics);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseCommissionRates();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rate = import_math.Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 2:
          message.maxRate = import_math.Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.maxChangeRate = import_math.Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseCommissionRates();
    message.rate = object.rate ?? "";
    message.maxRate = object.maxRate ?? "";
    message.maxChangeRate = object.maxChangeRate ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseCommissionRates();
    if (object.rate !== void 0 && object.rate !== null) {
      message.rate = object.rate;
    }
    if (object.max_rate !== void 0 && object.max_rate !== null) {
      message.maxRate = object.max_rate;
    }
    if (object.max_change_rate !== void 0 && object.max_change_rate !== null) {
      message.maxChangeRate = object.max_change_rate;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.rate = message.rate === "" ? void 0 : message.rate;
    obj.max_rate = message.maxRate === "" ? void 0 : message.maxRate;
    obj.max_change_rate = message.maxChangeRate === "" ? void 0 : message.maxChangeRate;
    return obj;
  },
  fromAminoMsg(object) {
    return CommissionRates.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/CommissionRates",
      value: CommissionRates.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return CommissionRates.decode(message.value);
  },
  toProto(message) {
    return CommissionRates.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.staking.v1beta1.CommissionRates",
      value: CommissionRates.encode(message).finish()
    };
  }
};
function createBaseCommission() {
  return {
    commissionRates: CommissionRates.fromPartial({}),
    updateTime: /* @__PURE__ */ new Date()
  };
}
const Commission = {
  typeUrl: "/cosmos.staking.v1beta1.Commission",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.commissionRates !== void 0) {
      CommissionRates.encode(message.commissionRates, writer.uint32(10).fork()).ldelim();
    }
    if (message.updateTime !== void 0) {
      import_timestamp.Timestamp.encode((0, import_helpers.toTimestamp)(message.updateTime), writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseCommission();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.commissionRates = CommissionRates.decode(reader, reader.uint32());
          break;
        case 2:
          message.updateTime = (0, import_helpers.fromTimestamp)(import_timestamp.Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseCommission();
    message.commissionRates = object.commissionRates !== void 0 && object.commissionRates !== null ? CommissionRates.fromPartial(object.commissionRates) : void 0;
    message.updateTime = object.updateTime ?? void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseCommission();
    if (object.commission_rates !== void 0 && object.commission_rates !== null) {
      message.commissionRates = CommissionRates.fromAmino(object.commission_rates);
    }
    if (object.update_time !== void 0 && object.update_time !== null) {
      message.updateTime = (0, import_helpers.fromTimestamp)(import_timestamp.Timestamp.fromAmino(object.update_time));
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.commission_rates = message.commissionRates ? CommissionRates.toAmino(message.commissionRates) : void 0;
    obj.update_time = message.updateTime ? import_timestamp.Timestamp.toAmino((0, import_helpers.toTimestamp)(message.updateTime)) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return Commission.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/Commission",
      value: Commission.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return Commission.decode(message.value);
  },
  toProto(message) {
    return Commission.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.staking.v1beta1.Commission",
      value: Commission.encode(message).finish()
    };
  }
};
function createBaseDescription() {
  return {
    moniker: "",
    identity: "",
    website: "",
    securityContact: "",
    details: ""
  };
}
const Description = {
  typeUrl: "/cosmos.staking.v1beta1.Description",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.moniker !== "") {
      writer.uint32(10).string(message.moniker);
    }
    if (message.identity !== "") {
      writer.uint32(18).string(message.identity);
    }
    if (message.website !== "") {
      writer.uint32(26).string(message.website);
    }
    if (message.securityContact !== "") {
      writer.uint32(34).string(message.securityContact);
    }
    if (message.details !== "") {
      writer.uint32(42).string(message.details);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseDescription();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.moniker = reader.string();
          break;
        case 2:
          message.identity = reader.string();
          break;
        case 3:
          message.website = reader.string();
          break;
        case 4:
          message.securityContact = reader.string();
          break;
        case 5:
          message.details = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseDescription();
    message.moniker = object.moniker ?? "";
    message.identity = object.identity ?? "";
    message.website = object.website ?? "";
    message.securityContact = object.securityContact ?? "";
    message.details = object.details ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseDescription();
    if (object.moniker !== void 0 && object.moniker !== null) {
      message.moniker = object.moniker;
    }
    if (object.identity !== void 0 && object.identity !== null) {
      message.identity = object.identity;
    }
    if (object.website !== void 0 && object.website !== null) {
      message.website = object.website;
    }
    if (object.security_contact !== void 0 && object.security_contact !== null) {
      message.securityContact = object.security_contact;
    }
    if (object.details !== void 0 && object.details !== null) {
      message.details = object.details;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.moniker = message.moniker === "" ? void 0 : message.moniker;
    obj.identity = message.identity === "" ? void 0 : message.identity;
    obj.website = message.website === "" ? void 0 : message.website;
    obj.security_contact = message.securityContact === "" ? void 0 : message.securityContact;
    obj.details = message.details === "" ? void 0 : message.details;
    return obj;
  },
  fromAminoMsg(object) {
    return Description.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/Description",
      value: Description.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return Description.decode(message.value);
  },
  toProto(message) {
    return Description.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.staking.v1beta1.Description",
      value: Description.encode(message).finish()
    };
  }
};
function createBaseValidator() {
  return {
    operatorAddress: "",
    consensusPubkey: void 0,
    jailed: false,
    status: 0,
    tokens: "",
    delegatorShares: "",
    description: Description.fromPartial({}),
    unbondingHeight: BigInt(0),
    unbondingTime: /* @__PURE__ */ new Date(),
    commission: Commission.fromPartial({}),
    minSelfDelegation: "",
    unbondingOnHoldRefCount: BigInt(0),
    unbondingIds: [],
    validatorBondShares: "",
    liquidShares: ""
  };
}
const Validator = {
  typeUrl: "/cosmos.staking.v1beta1.Validator",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.operatorAddress !== "") {
      writer.uint32(10).string(message.operatorAddress);
    }
    if (message.consensusPubkey !== void 0) {
      import_any.Any.encode(message.consensusPubkey, writer.uint32(18).fork()).ldelim();
    }
    if (message.jailed === true) {
      writer.uint32(24).bool(message.jailed);
    }
    if (message.status !== 0) {
      writer.uint32(32).int32(message.status);
    }
    if (message.tokens !== "") {
      writer.uint32(42).string(message.tokens);
    }
    if (message.delegatorShares !== "") {
      writer.uint32(50).string(import_math.Decimal.fromUserInput(message.delegatorShares, 18).atomics);
    }
    if (message.description !== void 0) {
      Description.encode(message.description, writer.uint32(58).fork()).ldelim();
    }
    if (message.unbondingHeight !== BigInt(0)) {
      writer.uint32(64).int64(message.unbondingHeight);
    }
    if (message.unbondingTime !== void 0) {
      import_timestamp.Timestamp.encode((0, import_helpers.toTimestamp)(message.unbondingTime), writer.uint32(74).fork()).ldelim();
    }
    if (message.commission !== void 0) {
      Commission.encode(message.commission, writer.uint32(82).fork()).ldelim();
    }
    if (message.minSelfDelegation !== "") {
      writer.uint32(90).string(message.minSelfDelegation);
    }
    if (message.unbondingOnHoldRefCount !== BigInt(0)) {
      writer.uint32(96).int64(message.unbondingOnHoldRefCount);
    }
    writer.uint32(106).fork();
    for (const v of message.unbondingIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    if (message.validatorBondShares !== "") {
      writer.uint32(114).string(import_math.Decimal.fromUserInput(message.validatorBondShares, 18).atomics);
    }
    if (message.liquidShares !== "") {
      writer.uint32(122).string(import_math.Decimal.fromUserInput(message.liquidShares, 18).atomics);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseValidator();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operatorAddress = reader.string();
          break;
        case 2:
          message.consensusPubkey = Cosmos_cryptoPubKey_InterfaceDecoder(reader);
          break;
        case 3:
          message.jailed = reader.bool();
          break;
        case 4:
          message.status = reader.int32();
          break;
        case 5:
          message.tokens = reader.string();
          break;
        case 6:
          message.delegatorShares = import_math.Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 7:
          message.description = Description.decode(reader, reader.uint32());
          break;
        case 8:
          message.unbondingHeight = reader.int64();
          break;
        case 9:
          message.unbondingTime = (0, import_helpers.fromTimestamp)(import_timestamp.Timestamp.decode(reader, reader.uint32()));
          break;
        case 10:
          message.commission = Commission.decode(reader, reader.uint32());
          break;
        case 11:
          message.minSelfDelegation = reader.string();
          break;
        case 12:
          message.unbondingOnHoldRefCount = reader.int64();
          break;
        case 13:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.unbondingIds.push(reader.uint64());
            }
          } else {
            message.unbondingIds.push(reader.uint64());
          }
          break;
        case 14:
          message.validatorBondShares = import_math.Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 15:
          message.liquidShares = import_math.Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseValidator();
    message.operatorAddress = object.operatorAddress ?? "";
    message.consensusPubkey = object.consensusPubkey !== void 0 && object.consensusPubkey !== null ? import_any.Any.fromPartial(object.consensusPubkey) : void 0;
    message.jailed = object.jailed ?? false;
    message.status = object.status ?? 0;
    message.tokens = object.tokens ?? "";
    message.delegatorShares = object.delegatorShares ?? "";
    message.description = object.description !== void 0 && object.description !== null ? Description.fromPartial(object.description) : void 0;
    message.unbondingHeight = object.unbondingHeight !== void 0 && object.unbondingHeight !== null ? BigInt(object.unbondingHeight.toString()) : BigInt(0);
    message.unbondingTime = object.unbondingTime ?? void 0;
    message.commission = object.commission !== void 0 && object.commission !== null ? Commission.fromPartial(object.commission) : void 0;
    message.minSelfDelegation = object.minSelfDelegation ?? "";
    message.unbondingOnHoldRefCount = object.unbondingOnHoldRefCount !== void 0 && object.unbondingOnHoldRefCount !== null ? BigInt(object.unbondingOnHoldRefCount.toString()) : BigInt(0);
    message.unbondingIds = object.unbondingIds?.map((e) => BigInt(e.toString())) || [];
    message.validatorBondShares = object.validatorBondShares ?? "";
    message.liquidShares = object.liquidShares ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseValidator();
    if (object.operator_address !== void 0 && object.operator_address !== null) {
      message.operatorAddress = object.operator_address;
    }
    if (object.consensus_pubkey !== void 0 && object.consensus_pubkey !== null) {
      message.consensusPubkey = (0, import_proto_signing.encodePubkey)(object.consensus_pubkey);
    }
    if (object.jailed !== void 0 && object.jailed !== null) {
      message.jailed = object.jailed;
    }
    if (object.status !== void 0 && object.status !== null) {
      message.status = object.status;
    }
    if (object.tokens !== void 0 && object.tokens !== null) {
      message.tokens = object.tokens;
    }
    if (object.delegator_shares !== void 0 && object.delegator_shares !== null) {
      message.delegatorShares = object.delegator_shares;
    }
    if (object.description !== void 0 && object.description !== null) {
      message.description = Description.fromAmino(object.description);
    }
    if (object.unbonding_height !== void 0 && object.unbonding_height !== null) {
      message.unbondingHeight = BigInt(object.unbonding_height);
    }
    if (object.unbonding_time !== void 0 && object.unbonding_time !== null) {
      message.unbondingTime = (0, import_helpers.fromTimestamp)(import_timestamp.Timestamp.fromAmino(object.unbonding_time));
    }
    if (object.commission !== void 0 && object.commission !== null) {
      message.commission = Commission.fromAmino(object.commission);
    }
    if (object.min_self_delegation !== void 0 && object.min_self_delegation !== null) {
      message.minSelfDelegation = object.min_self_delegation;
    }
    if (object.unbonding_on_hold_ref_count !== void 0 && object.unbonding_on_hold_ref_count !== null) {
      message.unbondingOnHoldRefCount = BigInt(object.unbonding_on_hold_ref_count);
    }
    message.unbondingIds = object.unbonding_ids?.map((e) => BigInt(e)) || [];
    if (object.validator_bond_shares !== void 0 && object.validator_bond_shares !== null) {
      message.validatorBondShares = object.validator_bond_shares;
    }
    if (object.liquid_shares !== void 0 && object.liquid_shares !== null) {
      message.liquidShares = object.liquid_shares;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.operator_address = message.operatorAddress === "" ? void 0 : message.operatorAddress;
    obj.consensus_pubkey = message.consensusPubkey ? (0, import_proto_signing.decodePubkey)(message.consensusPubkey) : void 0;
    obj.jailed = message.jailed === false ? void 0 : message.jailed;
    obj.status = message.status === 0 ? void 0 : message.status;
    obj.tokens = message.tokens === "" ? void 0 : message.tokens;
    obj.delegator_shares = message.delegatorShares === "" ? void 0 : message.delegatorShares;
    obj.description = message.description ? Description.toAmino(message.description) : void 0;
    obj.unbonding_height = message.unbondingHeight !== BigInt(0) ? message.unbondingHeight.toString() : void 0;
    obj.unbonding_time = message.unbondingTime ? import_timestamp.Timestamp.toAmino((0, import_helpers.toTimestamp)(message.unbondingTime)) : void 0;
    obj.commission = message.commission ? Commission.toAmino(message.commission) : void 0;
    obj.min_self_delegation = message.minSelfDelegation === "" ? void 0 : message.minSelfDelegation;
    obj.unbonding_on_hold_ref_count = message.unbondingOnHoldRefCount !== BigInt(0) ? message.unbondingOnHoldRefCount.toString() : void 0;
    if (message.unbondingIds) {
      obj.unbonding_ids = message.unbondingIds.map((e) => e.toString());
    } else {
      obj.unbonding_ids = message.unbondingIds;
    }
    obj.validator_bond_shares = message.validatorBondShares === "" ? void 0 : message.validatorBondShares;
    obj.liquid_shares = message.liquidShares === "" ? void 0 : message.liquidShares;
    return obj;
  },
  fromAminoMsg(object) {
    return Validator.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/Validator",
      value: Validator.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return Validator.decode(message.value);
  },
  toProto(message) {
    return Validator.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.staking.v1beta1.Validator",
      value: Validator.encode(message).finish()
    };
  }
};
function createBaseValAddresses() {
  return {
    addresses: []
  };
}
const ValAddresses = {
  typeUrl: "/cosmos.staking.v1beta1.ValAddresses",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    for (const v of message.addresses) {
      writer.uint32(10).string(v);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseValAddresses();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.addresses.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseValAddresses();
    message.addresses = object.addresses?.map((e) => e) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseValAddresses();
    message.addresses = object.addresses?.map((e) => e) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.addresses) {
      obj.addresses = message.addresses.map((e) => e);
    } else {
      obj.addresses = message.addresses;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return ValAddresses.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/ValAddresses",
      value: ValAddresses.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return ValAddresses.decode(message.value);
  },
  toProto(message) {
    return ValAddresses.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.staking.v1beta1.ValAddresses",
      value: ValAddresses.encode(message).finish()
    };
  }
};
function createBaseDVPair() {
  return {
    delegatorAddress: "",
    validatorAddress: ""
  };
}
const DVPair = {
  typeUrl: "/cosmos.staking.v1beta1.DVPair",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.validatorAddress !== "") {
      writer.uint32(18).string(message.validatorAddress);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseDVPair();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        case 2:
          message.validatorAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseDVPair();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.validatorAddress = object.validatorAddress ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseDVPair();
    if (object.delegator_address !== void 0 && object.delegator_address !== null) {
      message.delegatorAddress = object.delegator_address;
    }
    if (object.validator_address !== void 0 && object.validator_address !== null) {
      message.validatorAddress = object.validator_address;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.delegator_address = message.delegatorAddress === "" ? void 0 : message.delegatorAddress;
    obj.validator_address = message.validatorAddress === "" ? void 0 : message.validatorAddress;
    return obj;
  },
  fromAminoMsg(object) {
    return DVPair.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/DVPair",
      value: DVPair.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return DVPair.decode(message.value);
  },
  toProto(message) {
    return DVPair.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.staking.v1beta1.DVPair",
      value: DVPair.encode(message).finish()
    };
  }
};
function createBaseDVPairs() {
  return {
    pairs: []
  };
}
const DVPairs = {
  typeUrl: "/cosmos.staking.v1beta1.DVPairs",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    for (const v of message.pairs) {
      DVPair.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseDVPairs();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pairs.push(DVPair.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseDVPairs();
    message.pairs = object.pairs?.map((e) => DVPair.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseDVPairs();
    message.pairs = object.pairs?.map((e) => DVPair.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.pairs) {
      obj.pairs = message.pairs.map((e) => e ? DVPair.toAmino(e) : void 0);
    } else {
      obj.pairs = message.pairs;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return DVPairs.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/DVPairs",
      value: DVPairs.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return DVPairs.decode(message.value);
  },
  toProto(message) {
    return DVPairs.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.staking.v1beta1.DVPairs",
      value: DVPairs.encode(message).finish()
    };
  }
};
function createBaseDVVTriplet() {
  return {
    delegatorAddress: "",
    validatorSrcAddress: "",
    validatorDstAddress: ""
  };
}
const DVVTriplet = {
  typeUrl: "/cosmos.staking.v1beta1.DVVTriplet",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.validatorSrcAddress !== "") {
      writer.uint32(18).string(message.validatorSrcAddress);
    }
    if (message.validatorDstAddress !== "") {
      writer.uint32(26).string(message.validatorDstAddress);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseDVVTriplet();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        case 2:
          message.validatorSrcAddress = reader.string();
          break;
        case 3:
          message.validatorDstAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseDVVTriplet();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.validatorSrcAddress = object.validatorSrcAddress ?? "";
    message.validatorDstAddress = object.validatorDstAddress ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseDVVTriplet();
    if (object.delegator_address !== void 0 && object.delegator_address !== null) {
      message.delegatorAddress = object.delegator_address;
    }
    if (object.validator_src_address !== void 0 && object.validator_src_address !== null) {
      message.validatorSrcAddress = object.validator_src_address;
    }
    if (object.validator_dst_address !== void 0 && object.validator_dst_address !== null) {
      message.validatorDstAddress = object.validator_dst_address;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.delegator_address = message.delegatorAddress === "" ? void 0 : message.delegatorAddress;
    obj.validator_src_address = message.validatorSrcAddress === "" ? void 0 : message.validatorSrcAddress;
    obj.validator_dst_address = message.validatorDstAddress === "" ? void 0 : message.validatorDstAddress;
    return obj;
  },
  fromAminoMsg(object) {
    return DVVTriplet.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/DVVTriplet",
      value: DVVTriplet.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return DVVTriplet.decode(message.value);
  },
  toProto(message) {
    return DVVTriplet.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.staking.v1beta1.DVVTriplet",
      value: DVVTriplet.encode(message).finish()
    };
  }
};
function createBaseDVVTriplets() {
  return {
    triplets: []
  };
}
const DVVTriplets = {
  typeUrl: "/cosmos.staking.v1beta1.DVVTriplets",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    for (const v of message.triplets) {
      DVVTriplet.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseDVVTriplets();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.triplets.push(DVVTriplet.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseDVVTriplets();
    message.triplets = object.triplets?.map((e) => DVVTriplet.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseDVVTriplets();
    message.triplets = object.triplets?.map((e) => DVVTriplet.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.triplets) {
      obj.triplets = message.triplets.map((e) => e ? DVVTriplet.toAmino(e) : void 0);
    } else {
      obj.triplets = message.triplets;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return DVVTriplets.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/DVVTriplets",
      value: DVVTriplets.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return DVVTriplets.decode(message.value);
  },
  toProto(message) {
    return DVVTriplets.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.staking.v1beta1.DVVTriplets",
      value: DVVTriplets.encode(message).finish()
    };
  }
};
function createBaseDelegation() {
  return {
    delegatorAddress: "",
    validatorAddress: "",
    shares: "",
    validatorBond: false
  };
}
const Delegation = {
  typeUrl: "/cosmos.staking.v1beta1.Delegation",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.validatorAddress !== "") {
      writer.uint32(18).string(message.validatorAddress);
    }
    if (message.shares !== "") {
      writer.uint32(26).string(import_math.Decimal.fromUserInput(message.shares, 18).atomics);
    }
    if (message.validatorBond === true) {
      writer.uint32(32).bool(message.validatorBond);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseDelegation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        case 2:
          message.validatorAddress = reader.string();
          break;
        case 3:
          message.shares = import_math.Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 4:
          message.validatorBond = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseDelegation();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.validatorAddress = object.validatorAddress ?? "";
    message.shares = object.shares ?? "";
    message.validatorBond = object.validatorBond ?? false;
    return message;
  },
  fromAmino(object) {
    const message = createBaseDelegation();
    if (object.delegator_address !== void 0 && object.delegator_address !== null) {
      message.delegatorAddress = object.delegator_address;
    }
    if (object.validator_address !== void 0 && object.validator_address !== null) {
      message.validatorAddress = object.validator_address;
    }
    if (object.shares !== void 0 && object.shares !== null) {
      message.shares = object.shares;
    }
    if (object.validator_bond !== void 0 && object.validator_bond !== null) {
      message.validatorBond = object.validator_bond;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.delegator_address = message.delegatorAddress === "" ? void 0 : message.delegatorAddress;
    obj.validator_address = message.validatorAddress === "" ? void 0 : message.validatorAddress;
    obj.shares = message.shares === "" ? void 0 : message.shares;
    obj.validator_bond = message.validatorBond === false ? void 0 : message.validatorBond;
    return obj;
  },
  fromAminoMsg(object) {
    return Delegation.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/Delegation",
      value: Delegation.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return Delegation.decode(message.value);
  },
  toProto(message) {
    return Delegation.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.staking.v1beta1.Delegation",
      value: Delegation.encode(message).finish()
    };
  }
};
function createBaseUnbondingDelegation() {
  return {
    delegatorAddress: "",
    validatorAddress: "",
    entries: []
  };
}
const UnbondingDelegation = {
  typeUrl: "/cosmos.staking.v1beta1.UnbondingDelegation",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.validatorAddress !== "") {
      writer.uint32(18).string(message.validatorAddress);
    }
    for (const v of message.entries) {
      UnbondingDelegationEntry.encode(v, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseUnbondingDelegation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        case 2:
          message.validatorAddress = reader.string();
          break;
        case 3:
          message.entries.push(UnbondingDelegationEntry.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseUnbondingDelegation();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.validatorAddress = object.validatorAddress ?? "";
    message.entries = object.entries?.map((e) => UnbondingDelegationEntry.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseUnbondingDelegation();
    if (object.delegator_address !== void 0 && object.delegator_address !== null) {
      message.delegatorAddress = object.delegator_address;
    }
    if (object.validator_address !== void 0 && object.validator_address !== null) {
      message.validatorAddress = object.validator_address;
    }
    message.entries = object.entries?.map((e) => UnbondingDelegationEntry.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.delegator_address = message.delegatorAddress === "" ? void 0 : message.delegatorAddress;
    obj.validator_address = message.validatorAddress === "" ? void 0 : message.validatorAddress;
    if (message.entries) {
      obj.entries = message.entries.map((e) => e ? UnbondingDelegationEntry.toAmino(e) : void 0);
    } else {
      obj.entries = message.entries;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return UnbondingDelegation.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/UnbondingDelegation",
      value: UnbondingDelegation.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return UnbondingDelegation.decode(message.value);
  },
  toProto(message) {
    return UnbondingDelegation.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.staking.v1beta1.UnbondingDelegation",
      value: UnbondingDelegation.encode(message).finish()
    };
  }
};
function createBaseUnbondingDelegationEntry() {
  return {
    creationHeight: BigInt(0),
    completionTime: /* @__PURE__ */ new Date(),
    initialBalance: "",
    balance: "",
    unbondingId: BigInt(0),
    unbondingOnHoldRefCount: BigInt(0)
  };
}
const UnbondingDelegationEntry = {
  typeUrl: "/cosmos.staking.v1beta1.UnbondingDelegationEntry",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.creationHeight !== BigInt(0)) {
      writer.uint32(8).int64(message.creationHeight);
    }
    if (message.completionTime !== void 0) {
      import_timestamp.Timestamp.encode((0, import_helpers.toTimestamp)(message.completionTime), writer.uint32(18).fork()).ldelim();
    }
    if (message.initialBalance !== "") {
      writer.uint32(26).string(message.initialBalance);
    }
    if (message.balance !== "") {
      writer.uint32(34).string(message.balance);
    }
    if (message.unbondingId !== BigInt(0)) {
      writer.uint32(40).uint64(message.unbondingId);
    }
    if (message.unbondingOnHoldRefCount !== BigInt(0)) {
      writer.uint32(48).int64(message.unbondingOnHoldRefCount);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseUnbondingDelegationEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creationHeight = reader.int64();
          break;
        case 2:
          message.completionTime = (0, import_helpers.fromTimestamp)(import_timestamp.Timestamp.decode(reader, reader.uint32()));
          break;
        case 3:
          message.initialBalance = reader.string();
          break;
        case 4:
          message.balance = reader.string();
          break;
        case 5:
          message.unbondingId = reader.uint64();
          break;
        case 6:
          message.unbondingOnHoldRefCount = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseUnbondingDelegationEntry();
    message.creationHeight = object.creationHeight !== void 0 && object.creationHeight !== null ? BigInt(object.creationHeight.toString()) : BigInt(0);
    message.completionTime = object.completionTime ?? void 0;
    message.initialBalance = object.initialBalance ?? "";
    message.balance = object.balance ?? "";
    message.unbondingId = object.unbondingId !== void 0 && object.unbondingId !== null ? BigInt(object.unbondingId.toString()) : BigInt(0);
    message.unbondingOnHoldRefCount = object.unbondingOnHoldRefCount !== void 0 && object.unbondingOnHoldRefCount !== null ? BigInt(object.unbondingOnHoldRefCount.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object) {
    const message = createBaseUnbondingDelegationEntry();
    if (object.creation_height !== void 0 && object.creation_height !== null) {
      message.creationHeight = BigInt(object.creation_height);
    }
    if (object.completion_time !== void 0 && object.completion_time !== null) {
      message.completionTime = (0, import_helpers.fromTimestamp)(import_timestamp.Timestamp.fromAmino(object.completion_time));
    }
    if (object.initial_balance !== void 0 && object.initial_balance !== null) {
      message.initialBalance = object.initial_balance;
    }
    if (object.balance !== void 0 && object.balance !== null) {
      message.balance = object.balance;
    }
    if (object.unbonding_id !== void 0 && object.unbonding_id !== null) {
      message.unbondingId = BigInt(object.unbonding_id);
    }
    if (object.unbonding_on_hold_ref_count !== void 0 && object.unbonding_on_hold_ref_count !== null) {
      message.unbondingOnHoldRefCount = BigInt(object.unbonding_on_hold_ref_count);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.creation_height = message.creationHeight !== BigInt(0) ? message.creationHeight.toString() : void 0;
    obj.completion_time = message.completionTime ? import_timestamp.Timestamp.toAmino((0, import_helpers.toTimestamp)(message.completionTime)) : void 0;
    obj.initial_balance = message.initialBalance === "" ? void 0 : message.initialBalance;
    obj.balance = message.balance === "" ? void 0 : message.balance;
    obj.unbonding_id = message.unbondingId !== BigInt(0) ? message.unbondingId.toString() : void 0;
    obj.unbonding_on_hold_ref_count = message.unbondingOnHoldRefCount !== BigInt(0) ? message.unbondingOnHoldRefCount.toString() : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return UnbondingDelegationEntry.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/UnbondingDelegationEntry",
      value: UnbondingDelegationEntry.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return UnbondingDelegationEntry.decode(message.value);
  },
  toProto(message) {
    return UnbondingDelegationEntry.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.staking.v1beta1.UnbondingDelegationEntry",
      value: UnbondingDelegationEntry.encode(message).finish()
    };
  }
};
function createBaseRedelegationEntry() {
  return {
    creationHeight: BigInt(0),
    completionTime: /* @__PURE__ */ new Date(),
    initialBalance: "",
    sharesDst: "",
    unbondingId: BigInt(0),
    unbondingOnHoldRefCount: BigInt(0)
  };
}
const RedelegationEntry = {
  typeUrl: "/cosmos.staking.v1beta1.RedelegationEntry",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.creationHeight !== BigInt(0)) {
      writer.uint32(8).int64(message.creationHeight);
    }
    if (message.completionTime !== void 0) {
      import_timestamp.Timestamp.encode((0, import_helpers.toTimestamp)(message.completionTime), writer.uint32(18).fork()).ldelim();
    }
    if (message.initialBalance !== "") {
      writer.uint32(26).string(message.initialBalance);
    }
    if (message.sharesDst !== "") {
      writer.uint32(34).string(import_math.Decimal.fromUserInput(message.sharesDst, 18).atomics);
    }
    if (message.unbondingId !== BigInt(0)) {
      writer.uint32(40).uint64(message.unbondingId);
    }
    if (message.unbondingOnHoldRefCount !== BigInt(0)) {
      writer.uint32(48).int64(message.unbondingOnHoldRefCount);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseRedelegationEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creationHeight = reader.int64();
          break;
        case 2:
          message.completionTime = (0, import_helpers.fromTimestamp)(import_timestamp.Timestamp.decode(reader, reader.uint32()));
          break;
        case 3:
          message.initialBalance = reader.string();
          break;
        case 4:
          message.sharesDst = import_math.Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 5:
          message.unbondingId = reader.uint64();
          break;
        case 6:
          message.unbondingOnHoldRefCount = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseRedelegationEntry();
    message.creationHeight = object.creationHeight !== void 0 && object.creationHeight !== null ? BigInt(object.creationHeight.toString()) : BigInt(0);
    message.completionTime = object.completionTime ?? void 0;
    message.initialBalance = object.initialBalance ?? "";
    message.sharesDst = object.sharesDst ?? "";
    message.unbondingId = object.unbondingId !== void 0 && object.unbondingId !== null ? BigInt(object.unbondingId.toString()) : BigInt(0);
    message.unbondingOnHoldRefCount = object.unbondingOnHoldRefCount !== void 0 && object.unbondingOnHoldRefCount !== null ? BigInt(object.unbondingOnHoldRefCount.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object) {
    const message = createBaseRedelegationEntry();
    if (object.creation_height !== void 0 && object.creation_height !== null) {
      message.creationHeight = BigInt(object.creation_height);
    }
    if (object.completion_time !== void 0 && object.completion_time !== null) {
      message.completionTime = (0, import_helpers.fromTimestamp)(import_timestamp.Timestamp.fromAmino(object.completion_time));
    }
    if (object.initial_balance !== void 0 && object.initial_balance !== null) {
      message.initialBalance = object.initial_balance;
    }
    if (object.shares_dst !== void 0 && object.shares_dst !== null) {
      message.sharesDst = object.shares_dst;
    }
    if (object.unbonding_id !== void 0 && object.unbonding_id !== null) {
      message.unbondingId = BigInt(object.unbonding_id);
    }
    if (object.unbonding_on_hold_ref_count !== void 0 && object.unbonding_on_hold_ref_count !== null) {
      message.unbondingOnHoldRefCount = BigInt(object.unbonding_on_hold_ref_count);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.creation_height = message.creationHeight !== BigInt(0) ? message.creationHeight.toString() : void 0;
    obj.completion_time = message.completionTime ? import_timestamp.Timestamp.toAmino((0, import_helpers.toTimestamp)(message.completionTime)) : void 0;
    obj.initial_balance = message.initialBalance === "" ? void 0 : message.initialBalance;
    obj.shares_dst = message.sharesDst === "" ? void 0 : message.sharesDst;
    obj.unbonding_id = message.unbondingId !== BigInt(0) ? message.unbondingId.toString() : void 0;
    obj.unbonding_on_hold_ref_count = message.unbondingOnHoldRefCount !== BigInt(0) ? message.unbondingOnHoldRefCount.toString() : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return RedelegationEntry.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/RedelegationEntry",
      value: RedelegationEntry.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return RedelegationEntry.decode(message.value);
  },
  toProto(message) {
    return RedelegationEntry.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.staking.v1beta1.RedelegationEntry",
      value: RedelegationEntry.encode(message).finish()
    };
  }
};
function createBaseRedelegation() {
  return {
    delegatorAddress: "",
    validatorSrcAddress: "",
    validatorDstAddress: "",
    entries: []
  };
}
const Redelegation = {
  typeUrl: "/cosmos.staking.v1beta1.Redelegation",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.validatorSrcAddress !== "") {
      writer.uint32(18).string(message.validatorSrcAddress);
    }
    if (message.validatorDstAddress !== "") {
      writer.uint32(26).string(message.validatorDstAddress);
    }
    for (const v of message.entries) {
      RedelegationEntry.encode(v, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseRedelegation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        case 2:
          message.validatorSrcAddress = reader.string();
          break;
        case 3:
          message.validatorDstAddress = reader.string();
          break;
        case 4:
          message.entries.push(RedelegationEntry.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseRedelegation();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.validatorSrcAddress = object.validatorSrcAddress ?? "";
    message.validatorDstAddress = object.validatorDstAddress ?? "";
    message.entries = object.entries?.map((e) => RedelegationEntry.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseRedelegation();
    if (object.delegator_address !== void 0 && object.delegator_address !== null) {
      message.delegatorAddress = object.delegator_address;
    }
    if (object.validator_src_address !== void 0 && object.validator_src_address !== null) {
      message.validatorSrcAddress = object.validator_src_address;
    }
    if (object.validator_dst_address !== void 0 && object.validator_dst_address !== null) {
      message.validatorDstAddress = object.validator_dst_address;
    }
    message.entries = object.entries?.map((e) => RedelegationEntry.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.delegator_address = message.delegatorAddress === "" ? void 0 : message.delegatorAddress;
    obj.validator_src_address = message.validatorSrcAddress === "" ? void 0 : message.validatorSrcAddress;
    obj.validator_dst_address = message.validatorDstAddress === "" ? void 0 : message.validatorDstAddress;
    if (message.entries) {
      obj.entries = message.entries.map((e) => e ? RedelegationEntry.toAmino(e) : void 0);
    } else {
      obj.entries = message.entries;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return Redelegation.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/Redelegation",
      value: Redelegation.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return Redelegation.decode(message.value);
  },
  toProto(message) {
    return Redelegation.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.staking.v1beta1.Redelegation",
      value: Redelegation.encode(message).finish()
    };
  }
};
function createBaseParams() {
  return {
    unbondingTime: import_duration.Duration.fromPartial({}),
    maxValidators: 0,
    maxEntries: 0,
    historicalEntries: 0,
    bondDenom: "",
    validatorBondFactor: "",
    globalLiquidStakingCap: "",
    validatorLiquidStakingCap: ""
  };
}
const Params = {
  typeUrl: "/cosmos.staking.v1beta1.Params",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.unbondingTime !== void 0) {
      import_duration.Duration.encode(message.unbondingTime, writer.uint32(10).fork()).ldelim();
    }
    if (message.maxValidators !== 0) {
      writer.uint32(16).uint32(message.maxValidators);
    }
    if (message.maxEntries !== 0) {
      writer.uint32(24).uint32(message.maxEntries);
    }
    if (message.historicalEntries !== 0) {
      writer.uint32(32).uint32(message.historicalEntries);
    }
    if (message.bondDenom !== "") {
      writer.uint32(42).string(message.bondDenom);
    }
    if (message.validatorBondFactor !== "") {
      writer.uint32(58).string(import_math.Decimal.fromUserInput(message.validatorBondFactor, 18).atomics);
    }
    if (message.globalLiquidStakingCap !== "") {
      writer.uint32(66).string(import_math.Decimal.fromUserInput(message.globalLiquidStakingCap, 18).atomics);
    }
    if (message.validatorLiquidStakingCap !== "") {
      writer.uint32(74).string(import_math.Decimal.fromUserInput(message.validatorLiquidStakingCap, 18).atomics);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.unbondingTime = import_duration.Duration.decode(reader, reader.uint32());
          break;
        case 2:
          message.maxValidators = reader.uint32();
          break;
        case 3:
          message.maxEntries = reader.uint32();
          break;
        case 4:
          message.historicalEntries = reader.uint32();
          break;
        case 5:
          message.bondDenom = reader.string();
          break;
        case 7:
          message.validatorBondFactor = import_math.Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 8:
          message.globalLiquidStakingCap = import_math.Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 9:
          message.validatorLiquidStakingCap = import_math.Decimal.fromAtomics(reader.string(), 18).toString();
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
    message.unbondingTime = object.unbondingTime !== void 0 && object.unbondingTime !== null ? import_duration.Duration.fromPartial(object.unbondingTime) : void 0;
    message.maxValidators = object.maxValidators ?? 0;
    message.maxEntries = object.maxEntries ?? 0;
    message.historicalEntries = object.historicalEntries ?? 0;
    message.bondDenom = object.bondDenom ?? "";
    message.validatorBondFactor = object.validatorBondFactor ?? "";
    message.globalLiquidStakingCap = object.globalLiquidStakingCap ?? "";
    message.validatorLiquidStakingCap = object.validatorLiquidStakingCap ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseParams();
    if (object.unbonding_time !== void 0 && object.unbonding_time !== null) {
      message.unbondingTime = import_duration.Duration.fromAmino(object.unbonding_time);
    }
    if (object.max_validators !== void 0 && object.max_validators !== null) {
      message.maxValidators = object.max_validators;
    }
    if (object.max_entries !== void 0 && object.max_entries !== null) {
      message.maxEntries = object.max_entries;
    }
    if (object.historical_entries !== void 0 && object.historical_entries !== null) {
      message.historicalEntries = object.historical_entries;
    }
    if (object.bond_denom !== void 0 && object.bond_denom !== null) {
      message.bondDenom = object.bond_denom;
    }
    if (object.validator_bond_factor !== void 0 && object.validator_bond_factor !== null) {
      message.validatorBondFactor = object.validator_bond_factor;
    }
    if (object.global_liquid_staking_cap !== void 0 && object.global_liquid_staking_cap !== null) {
      message.globalLiquidStakingCap = object.global_liquid_staking_cap;
    }
    if (object.validator_liquid_staking_cap !== void 0 && object.validator_liquid_staking_cap !== null) {
      message.validatorLiquidStakingCap = object.validator_liquid_staking_cap;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.unbonding_time = message.unbondingTime ? import_duration.Duration.toAmino(message.unbondingTime) : void 0;
    obj.max_validators = message.maxValidators === 0 ? void 0 : message.maxValidators;
    obj.max_entries = message.maxEntries === 0 ? void 0 : message.maxEntries;
    obj.historical_entries = message.historicalEntries === 0 ? void 0 : message.historicalEntries;
    obj.bond_denom = message.bondDenom === "" ? void 0 : message.bondDenom;
    obj.validator_bond_factor = message.validatorBondFactor === "" ? void 0 : message.validatorBondFactor;
    obj.global_liquid_staking_cap = message.globalLiquidStakingCap === "" ? void 0 : message.globalLiquidStakingCap;
    obj.validator_liquid_staking_cap = message.validatorLiquidStakingCap === "" ? void 0 : message.validatorLiquidStakingCap;
    return obj;
  },
  fromAminoMsg(object) {
    return Params.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/Params",
      value: Params.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return Params.decode(message.value);
  },
  toProto(message) {
    return Params.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.staking.v1beta1.Params",
      value: Params.encode(message).finish()
    };
  }
};
function createBaseDelegationResponse() {
  return {
    delegation: Delegation.fromPartial({}),
    balance: import_coin.Coin.fromPartial({})
  };
}
const DelegationResponse = {
  typeUrl: "/cosmos.staking.v1beta1.DelegationResponse",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.delegation !== void 0) {
      Delegation.encode(message.delegation, writer.uint32(10).fork()).ldelim();
    }
    if (message.balance !== void 0) {
      import_coin.Coin.encode(message.balance, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseDelegationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegation = Delegation.decode(reader, reader.uint32());
          break;
        case 2:
          message.balance = import_coin.Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseDelegationResponse();
    message.delegation = object.delegation !== void 0 && object.delegation !== null ? Delegation.fromPartial(object.delegation) : void 0;
    message.balance = object.balance !== void 0 && object.balance !== null ? import_coin.Coin.fromPartial(object.balance) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseDelegationResponse();
    if (object.delegation !== void 0 && object.delegation !== null) {
      message.delegation = Delegation.fromAmino(object.delegation);
    }
    if (object.balance !== void 0 && object.balance !== null) {
      message.balance = import_coin.Coin.fromAmino(object.balance);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.delegation = message.delegation ? Delegation.toAmino(message.delegation) : void 0;
    obj.balance = message.balance ? import_coin.Coin.toAmino(message.balance) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return DelegationResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/DelegationResponse",
      value: DelegationResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return DelegationResponse.decode(message.value);
  },
  toProto(message) {
    return DelegationResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.staking.v1beta1.DelegationResponse",
      value: DelegationResponse.encode(message).finish()
    };
  }
};
function createBaseRedelegationEntryResponse() {
  return {
    redelegationEntry: RedelegationEntry.fromPartial({}),
    balance: ""
  };
}
const RedelegationEntryResponse = {
  typeUrl: "/cosmos.staking.v1beta1.RedelegationEntryResponse",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.redelegationEntry !== void 0) {
      RedelegationEntry.encode(message.redelegationEntry, writer.uint32(10).fork()).ldelim();
    }
    if (message.balance !== "") {
      writer.uint32(34).string(message.balance);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseRedelegationEntryResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.redelegationEntry = RedelegationEntry.decode(reader, reader.uint32());
          break;
        case 4:
          message.balance = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseRedelegationEntryResponse();
    message.redelegationEntry = object.redelegationEntry !== void 0 && object.redelegationEntry !== null ? RedelegationEntry.fromPartial(object.redelegationEntry) : void 0;
    message.balance = object.balance ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseRedelegationEntryResponse();
    if (object.redelegation_entry !== void 0 && object.redelegation_entry !== null) {
      message.redelegationEntry = RedelegationEntry.fromAmino(object.redelegation_entry);
    }
    if (object.balance !== void 0 && object.balance !== null) {
      message.balance = object.balance;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.redelegation_entry = message.redelegationEntry ? RedelegationEntry.toAmino(message.redelegationEntry) : void 0;
    obj.balance = message.balance === "" ? void 0 : message.balance;
    return obj;
  },
  fromAminoMsg(object) {
    return RedelegationEntryResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/RedelegationEntryResponse",
      value: RedelegationEntryResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return RedelegationEntryResponse.decode(message.value);
  },
  toProto(message) {
    return RedelegationEntryResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.staking.v1beta1.RedelegationEntryResponse",
      value: RedelegationEntryResponse.encode(message).finish()
    };
  }
};
function createBaseRedelegationResponse() {
  return {
    redelegation: Redelegation.fromPartial({}),
    entries: []
  };
}
const RedelegationResponse = {
  typeUrl: "/cosmos.staking.v1beta1.RedelegationResponse",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.redelegation !== void 0) {
      Redelegation.encode(message.redelegation, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.entries) {
      RedelegationEntryResponse.encode(v, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseRedelegationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.redelegation = Redelegation.decode(reader, reader.uint32());
          break;
        case 2:
          message.entries.push(RedelegationEntryResponse.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseRedelegationResponse();
    message.redelegation = object.redelegation !== void 0 && object.redelegation !== null ? Redelegation.fromPartial(object.redelegation) : void 0;
    message.entries = object.entries?.map((e) => RedelegationEntryResponse.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseRedelegationResponse();
    if (object.redelegation !== void 0 && object.redelegation !== null) {
      message.redelegation = Redelegation.fromAmino(object.redelegation);
    }
    message.entries = object.entries?.map((e) => RedelegationEntryResponse.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.redelegation = message.redelegation ? Redelegation.toAmino(message.redelegation) : void 0;
    if (message.entries) {
      obj.entries = message.entries.map((e) => e ? RedelegationEntryResponse.toAmino(e) : void 0);
    } else {
      obj.entries = message.entries;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return RedelegationResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/RedelegationResponse",
      value: RedelegationResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return RedelegationResponse.decode(message.value);
  },
  toProto(message) {
    return RedelegationResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.staking.v1beta1.RedelegationResponse",
      value: RedelegationResponse.encode(message).finish()
    };
  }
};
function createBasePool() {
  return {
    notBondedTokens: "",
    bondedTokens: ""
  };
}
const Pool = {
  typeUrl: "/cosmos.staking.v1beta1.Pool",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.notBondedTokens !== "") {
      writer.uint32(10).string(message.notBondedTokens);
    }
    if (message.bondedTokens !== "") {
      writer.uint32(18).string(message.bondedTokens);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBasePool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.notBondedTokens = reader.string();
          break;
        case 2:
          message.bondedTokens = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBasePool();
    message.notBondedTokens = object.notBondedTokens ?? "";
    message.bondedTokens = object.bondedTokens ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBasePool();
    if (object.not_bonded_tokens !== void 0 && object.not_bonded_tokens !== null) {
      message.notBondedTokens = object.not_bonded_tokens;
    }
    if (object.bonded_tokens !== void 0 && object.bonded_tokens !== null) {
      message.bondedTokens = object.bonded_tokens;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.not_bonded_tokens = message.notBondedTokens ?? "";
    obj.bonded_tokens = message.bondedTokens ?? "";
    return obj;
  },
  fromAminoMsg(object) {
    return Pool.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/Pool",
      value: Pool.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return Pool.decode(message.value);
  },
  toProto(message) {
    return Pool.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.staking.v1beta1.Pool",
      value: Pool.encode(message).finish()
    };
  }
};
function createBaseValidatorUpdates() {
  return {
    updates: []
  };
}
const ValidatorUpdates = {
  typeUrl: "/cosmos.staking.v1beta1.ValidatorUpdates",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    for (const v of message.updates) {
      import_types2.ValidatorUpdate.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseValidatorUpdates();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.updates.push(import_types2.ValidatorUpdate.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseValidatorUpdates();
    message.updates = object.updates?.map((e) => import_types2.ValidatorUpdate.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseValidatorUpdates();
    message.updates = object.updates?.map((e) => import_types2.ValidatorUpdate.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.updates) {
      obj.updates = message.updates.map((e) => e ? import_types2.ValidatorUpdate.toAmino(e) : void 0);
    } else {
      obj.updates = message.updates;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return ValidatorUpdates.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/ValidatorUpdates",
      value: ValidatorUpdates.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return ValidatorUpdates.decode(message.value);
  },
  toProto(message) {
    return ValidatorUpdates.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.staking.v1beta1.ValidatorUpdates",
      value: ValidatorUpdates.encode(message).finish()
    };
  }
};
function createBaseTokenizeShareRecord() {
  return {
    id: BigInt(0),
    owner: "",
    moduleAccount: "",
    validator: ""
  };
}
const TokenizeShareRecord = {
  typeUrl: "/cosmos.staking.v1beta1.TokenizeShareRecord",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    if (message.moduleAccount !== "") {
      writer.uint32(26).string(message.moduleAccount);
    }
    if (message.validator !== "") {
      writer.uint32(34).string(message.validator);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseTokenizeShareRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        case 2:
          message.owner = reader.string();
          break;
        case 3:
          message.moduleAccount = reader.string();
          break;
        case 4:
          message.validator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseTokenizeShareRecord();
    message.id = object.id !== void 0 && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.owner = object.owner ?? "";
    message.moduleAccount = object.moduleAccount ?? "";
    message.validator = object.validator ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseTokenizeShareRecord();
    if (object.id !== void 0 && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.owner !== void 0 && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.module_account !== void 0 && object.module_account !== null) {
      message.moduleAccount = object.module_account;
    }
    if (object.validator !== void 0 && object.validator !== null) {
      message.validator = object.validator;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.id = message.id !== BigInt(0) ? message.id.toString() : void 0;
    obj.owner = message.owner === "" ? void 0 : message.owner;
    obj.module_account = message.moduleAccount === "" ? void 0 : message.moduleAccount;
    obj.validator = message.validator === "" ? void 0 : message.validator;
    return obj;
  },
  fromAminoMsg(object) {
    return TokenizeShareRecord.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/TokenizeShareRecord",
      value: TokenizeShareRecord.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return TokenizeShareRecord.decode(message.value);
  },
  toProto(message) {
    return TokenizeShareRecord.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.staking.v1beta1.TokenizeShareRecord",
      value: TokenizeShareRecord.encode(message).finish()
    };
  }
};
function createBasePendingTokenizeShareAuthorizations() {
  return {
    addresses: []
  };
}
const PendingTokenizeShareAuthorizations = {
  typeUrl: "/cosmos.staking.v1beta1.PendingTokenizeShareAuthorizations",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    for (const v of message.addresses) {
      writer.uint32(10).string(v);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBasePendingTokenizeShareAuthorizations();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.addresses.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBasePendingTokenizeShareAuthorizations();
    message.addresses = object.addresses?.map((e) => e) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBasePendingTokenizeShareAuthorizations();
    message.addresses = object.addresses?.map((e) => e) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.addresses) {
      obj.addresses = message.addresses.map((e) => e);
    } else {
      obj.addresses = message.addresses;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return PendingTokenizeShareAuthorizations.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/PendingTokenizeShareAuthorizations",
      value: PendingTokenizeShareAuthorizations.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return PendingTokenizeShareAuthorizations.decode(message.value);
  },
  toProto(message) {
    return PendingTokenizeShareAuthorizations.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.staking.v1beta1.PendingTokenizeShareAuthorizations",
      value: PendingTokenizeShareAuthorizations.encode(message).finish()
    };
  }
};
const Cosmos_cryptoPubKey_InterfaceDecoder = (input) => {
  const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
  const data = import_any.Any.decode(reader, reader.uint32());
  switch (data.typeUrl) {
    default:
      return data;
  }
};
const Cosmos_cryptoPubKey_FromAmino = (content) => {
  return (0, import_proto_signing.encodePubkey)(content);
};
const Cosmos_cryptoPubKey_ToAmino = (content) => {
  return (0, import_proto_signing.decodePubkey)(content);
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  BondStatus,
  BondStatusAmino,
  BondStatusSDKType,
  Commission,
  CommissionRates,
  Cosmos_cryptoPubKey_FromAmino,
  Cosmos_cryptoPubKey_InterfaceDecoder,
  Cosmos_cryptoPubKey_ToAmino,
  DVPair,
  DVPairs,
  DVVTriplet,
  DVVTriplets,
  Delegation,
  DelegationResponse,
  Description,
  HistoricalInfo,
  InfractionType,
  InfractionTypeAmino,
  InfractionTypeSDKType,
  Params,
  PendingTokenizeShareAuthorizations,
  Pool,
  Redelegation,
  RedelegationEntry,
  RedelegationEntryResponse,
  RedelegationResponse,
  TokenizeShareLockStatus,
  TokenizeShareLockStatusAmino,
  TokenizeShareLockStatusSDKType,
  TokenizeShareRecord,
  UnbondingDelegation,
  UnbondingDelegationEntry,
  ValAddresses,
  Validator,
  ValidatorUpdates,
  bondStatusFromJSON,
  bondStatusToJSON,
  infractionTypeFromJSON,
  infractionTypeToJSON,
  tokenizeShareLockStatusFromJSON,
  tokenizeShareLockStatusToJSON
});
