import { Header } from "../../../tendermint/types/types";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { Any } from "../../../google/protobuf/any";
import { Duration } from "../../../google/protobuf/duration";
import { Coin } from "../../base/v1beta1/coin";
import { ValidatorUpdate } from "../../../tendermint/abci/types";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { Decimal } from "../../../decimals";
import { toTimestamp, fromTimestamp } from "../../../helpers";
import { encodePubkey, decodePubkey } from "@cosmjs/proto-signing";
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
var Infraction = /* @__PURE__ */ ((Infraction2) => {
  Infraction2[Infraction2["INFRACTION_UNSPECIFIED"] = 0] = "INFRACTION_UNSPECIFIED";
  Infraction2[Infraction2["INFRACTION_DOUBLE_SIGN"] = 1] = "INFRACTION_DOUBLE_SIGN";
  Infraction2[Infraction2["INFRACTION_DOWNTIME"] = 2] = "INFRACTION_DOWNTIME";
  Infraction2[Infraction2["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return Infraction2;
})(Infraction || {});
const InfractionSDKType = Infraction;
const InfractionAmino = Infraction;
function infractionFromJSON(object) {
  switch (object) {
    case 0:
    case "INFRACTION_UNSPECIFIED":
      return 0 /* INFRACTION_UNSPECIFIED */;
    case 1:
    case "INFRACTION_DOUBLE_SIGN":
      return 1 /* INFRACTION_DOUBLE_SIGN */;
    case 2:
    case "INFRACTION_DOWNTIME":
      return 2 /* INFRACTION_DOWNTIME */;
    case -1:
    case "UNRECOGNIZED":
    default:
      return -1 /* UNRECOGNIZED */;
  }
}
function infractionToJSON(object) {
  switch (object) {
    case 0 /* INFRACTION_UNSPECIFIED */:
      return "INFRACTION_UNSPECIFIED";
    case 1 /* INFRACTION_DOUBLE_SIGN */:
      return "INFRACTION_DOUBLE_SIGN";
    case 2 /* INFRACTION_DOWNTIME */:
      return "INFRACTION_DOWNTIME";
    case -1 /* UNRECOGNIZED */:
    default:
      return "UNRECOGNIZED";
  }
}
function createBaseHistoricalInfo() {
  return {
    header: Header.fromPartial({}),
    valset: []
  };
}
const HistoricalInfo = {
  typeUrl: "/cosmos.staking.v1beta1.HistoricalInfo",
  encode(message, writer = BinaryWriter.create()) {
    if (message.header !== void 0) {
      Header.encode(message.header, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.valset) {
      Validator.encode(v, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseHistoricalInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.header = Header.decode(reader, reader.uint32());
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
    message.header = object.header !== void 0 && object.header !== null ? Header.fromPartial(object.header) : void 0;
    message.valset = object.valset?.map((e) => Validator.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseHistoricalInfo();
    if (object.header !== void 0 && object.header !== null) {
      message.header = Header.fromAmino(object.header);
    }
    message.valset = object.valset?.map((e) => Validator.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.header = message.header ? Header.toAmino(message.header) : Header.toAmino(Header.fromPartial({}));
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
  encode(message, writer = BinaryWriter.create()) {
    if (message.rate !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.rate, 18).atomics);
    }
    if (message.maxRate !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.maxRate, 18).atomics);
    }
    if (message.maxChangeRate !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.maxChangeRate, 18).atomics);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseCommissionRates();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 2:
          message.maxRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.maxChangeRate = Decimal.fromAtomics(reader.string(), 18).toString();
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
  encode(message, writer = BinaryWriter.create()) {
    if (message.commissionRates !== void 0) {
      CommissionRates.encode(message.commissionRates, writer.uint32(10).fork()).ldelim();
    }
    if (message.updateTime !== void 0) {
      Timestamp.encode(toTimestamp(message.updateTime), writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseCommission();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.commissionRates = CommissionRates.decode(reader, reader.uint32());
          break;
        case 2:
          message.updateTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
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
      message.updateTime = fromTimestamp(Timestamp.fromAmino(object.update_time));
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.commission_rates = message.commissionRates ? CommissionRates.toAmino(message.commissionRates) : CommissionRates.toAmino(CommissionRates.fromPartial({}));
    obj.update_time = message.updateTime ? Timestamp.toAmino(toTimestamp(message.updateTime)) : /* @__PURE__ */ new Date();
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
  encode(message, writer = BinaryWriter.create()) {
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
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
    unbondingIds: []
  };
}
const Validator = {
  typeUrl: "/cosmos.staking.v1beta1.Validator",
  encode(message, writer = BinaryWriter.create()) {
    if (message.operatorAddress !== "") {
      writer.uint32(10).string(message.operatorAddress);
    }
    if (message.consensusPubkey !== void 0) {
      Any.encode(message.consensusPubkey, writer.uint32(18).fork()).ldelim();
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
      writer.uint32(50).string(Decimal.fromUserInput(message.delegatorShares, 18).atomics);
    }
    if (message.description !== void 0) {
      Description.encode(message.description, writer.uint32(58).fork()).ldelim();
    }
    if (message.unbondingHeight !== BigInt(0)) {
      writer.uint32(64).int64(message.unbondingHeight);
    }
    if (message.unbondingTime !== void 0) {
      Timestamp.encode(toTimestamp(message.unbondingTime), writer.uint32(74).fork()).ldelim();
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
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
          message.delegatorShares = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 7:
          message.description = Description.decode(reader, reader.uint32());
          break;
        case 8:
          message.unbondingHeight = reader.int64();
          break;
        case 9:
          message.unbondingTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
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
    message.consensusPubkey = object.consensusPubkey !== void 0 && object.consensusPubkey !== null ? Any.fromPartial(object.consensusPubkey) : void 0;
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
    return message;
  },
  fromAmino(object) {
    const message = createBaseValidator();
    if (object.operator_address !== void 0 && object.operator_address !== null) {
      message.operatorAddress = object.operator_address;
    }
    if (object.consensus_pubkey !== void 0 && object.consensus_pubkey !== null) {
      message.consensusPubkey = encodePubkey(object.consensus_pubkey);
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
      message.unbondingTime = fromTimestamp(Timestamp.fromAmino(object.unbonding_time));
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
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.operator_address = message.operatorAddress === "" ? void 0 : message.operatorAddress;
    obj.consensus_pubkey = message.consensusPubkey ? decodePubkey(message.consensusPubkey) : void 0;
    obj.jailed = message.jailed === false ? void 0 : message.jailed;
    obj.status = message.status === 0 ? void 0 : message.status;
    obj.tokens = message.tokens === "" ? void 0 : message.tokens;
    obj.delegator_shares = message.delegatorShares === "" ? void 0 : message.delegatorShares;
    obj.description = message.description ? Description.toAmino(message.description) : Description.toAmino(Description.fromPartial({}));
    obj.unbonding_height = message.unbondingHeight !== BigInt(0) ? message.unbondingHeight?.toString() : void 0;
    obj.unbonding_time = message.unbondingTime ? Timestamp.toAmino(toTimestamp(message.unbondingTime)) : /* @__PURE__ */ new Date();
    obj.commission = message.commission ? Commission.toAmino(message.commission) : Commission.toAmino(Commission.fromPartial({}));
    obj.min_self_delegation = message.minSelfDelegation === "" ? void 0 : message.minSelfDelegation;
    obj.unbonding_on_hold_ref_count = message.unbondingOnHoldRefCount !== BigInt(0) ? message.unbondingOnHoldRefCount?.toString() : void 0;
    if (message.unbondingIds) {
      obj.unbonding_ids = message.unbondingIds.map((e) => e.toString());
    } else {
      obj.unbonding_ids = message.unbondingIds;
    }
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
  encode(message, writer = BinaryWriter.create()) {
    for (const v of message.addresses) {
      writer.uint32(10).string(v);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  encode(message, writer = BinaryWriter.create()) {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.validatorAddress !== "") {
      writer.uint32(18).string(message.validatorAddress);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  encode(message, writer = BinaryWriter.create()) {
    for (const v of message.pairs) {
      DVPair.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  encode(message, writer = BinaryWriter.create()) {
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
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  encode(message, writer = BinaryWriter.create()) {
    for (const v of message.triplets) {
      DVVTriplet.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
    shares: ""
  };
}
const Delegation = {
  typeUrl: "/cosmos.staking.v1beta1.Delegation",
  encode(message, writer = BinaryWriter.create()) {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.validatorAddress !== "") {
      writer.uint32(18).string(message.validatorAddress);
    }
    if (message.shares !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.shares, 18).atomics);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
          message.shares = Decimal.fromAtomics(reader.string(), 18).toString();
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
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.delegator_address = message.delegatorAddress === "" ? void 0 : message.delegatorAddress;
    obj.validator_address = message.validatorAddress === "" ? void 0 : message.validatorAddress;
    obj.shares = message.shares === "" ? void 0 : message.shares;
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
  encode(message, writer = BinaryWriter.create()) {
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
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  encode(message, writer = BinaryWriter.create()) {
    if (message.creationHeight !== BigInt(0)) {
      writer.uint32(8).int64(message.creationHeight);
    }
    if (message.completionTime !== void 0) {
      Timestamp.encode(toTimestamp(message.completionTime), writer.uint32(18).fork()).ldelim();
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
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseUnbondingDelegationEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creationHeight = reader.int64();
          break;
        case 2:
          message.completionTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
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
      message.completionTime = fromTimestamp(Timestamp.fromAmino(object.completion_time));
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
    obj.creation_height = message.creationHeight !== BigInt(0) ? message.creationHeight?.toString() : void 0;
    obj.completion_time = message.completionTime ? Timestamp.toAmino(toTimestamp(message.completionTime)) : /* @__PURE__ */ new Date();
    obj.initial_balance = message.initialBalance === "" ? void 0 : message.initialBalance;
    obj.balance = message.balance === "" ? void 0 : message.balance;
    obj.unbonding_id = message.unbondingId !== BigInt(0) ? message.unbondingId?.toString() : void 0;
    obj.unbonding_on_hold_ref_count = message.unbondingOnHoldRefCount !== BigInt(0) ? message.unbondingOnHoldRefCount?.toString() : void 0;
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
  encode(message, writer = BinaryWriter.create()) {
    if (message.creationHeight !== BigInt(0)) {
      writer.uint32(8).int64(message.creationHeight);
    }
    if (message.completionTime !== void 0) {
      Timestamp.encode(toTimestamp(message.completionTime), writer.uint32(18).fork()).ldelim();
    }
    if (message.initialBalance !== "") {
      writer.uint32(26).string(message.initialBalance);
    }
    if (message.sharesDst !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.sharesDst, 18).atomics);
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
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseRedelegationEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creationHeight = reader.int64();
          break;
        case 2:
          message.completionTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 3:
          message.initialBalance = reader.string();
          break;
        case 4:
          message.sharesDst = Decimal.fromAtomics(reader.string(), 18).toString();
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
      message.completionTime = fromTimestamp(Timestamp.fromAmino(object.completion_time));
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
    obj.creation_height = message.creationHeight !== BigInt(0) ? message.creationHeight?.toString() : void 0;
    obj.completion_time = message.completionTime ? Timestamp.toAmino(toTimestamp(message.completionTime)) : /* @__PURE__ */ new Date();
    obj.initial_balance = message.initialBalance === "" ? void 0 : message.initialBalance;
    obj.shares_dst = message.sharesDst === "" ? void 0 : message.sharesDst;
    obj.unbonding_id = message.unbondingId !== BigInt(0) ? message.unbondingId?.toString() : void 0;
    obj.unbonding_on_hold_ref_count = message.unbondingOnHoldRefCount !== BigInt(0) ? message.unbondingOnHoldRefCount?.toString() : void 0;
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
  encode(message, writer = BinaryWriter.create()) {
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
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
    unbondingTime: Duration.fromPartial({}),
    maxValidators: 0,
    maxEntries: 0,
    historicalEntries: 0,
    bondDenom: "",
    minCommissionRate: ""
  };
}
const Params = {
  typeUrl: "/cosmos.staking.v1beta1.Params",
  encode(message, writer = BinaryWriter.create()) {
    if (message.unbondingTime !== void 0) {
      Duration.encode(message.unbondingTime, writer.uint32(10).fork()).ldelim();
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
    if (message.minCommissionRate !== "") {
      writer.uint32(50).string(Decimal.fromUserInput(message.minCommissionRate, 18).atomics);
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
          message.unbondingTime = Duration.decode(reader, reader.uint32());
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
        case 6:
          message.minCommissionRate = Decimal.fromAtomics(reader.string(), 18).toString();
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
    message.unbondingTime = object.unbondingTime !== void 0 && object.unbondingTime !== null ? Duration.fromPartial(object.unbondingTime) : void 0;
    message.maxValidators = object.maxValidators ?? 0;
    message.maxEntries = object.maxEntries ?? 0;
    message.historicalEntries = object.historicalEntries ?? 0;
    message.bondDenom = object.bondDenom ?? "";
    message.minCommissionRate = object.minCommissionRate ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseParams();
    if (object.unbonding_time !== void 0 && object.unbonding_time !== null) {
      message.unbondingTime = Duration.fromAmino(object.unbonding_time);
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
    if (object.min_commission_rate !== void 0 && object.min_commission_rate !== null) {
      message.minCommissionRate = object.min_commission_rate;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.unbonding_time = message.unbondingTime ? Duration.toAmino(message.unbondingTime) : Duration.toAmino(Duration.fromPartial({}));
    obj.max_validators = message.maxValidators === 0 ? void 0 : message.maxValidators;
    obj.max_entries = message.maxEntries === 0 ? void 0 : message.maxEntries;
    obj.historical_entries = message.historicalEntries === 0 ? void 0 : message.historicalEntries;
    obj.bond_denom = message.bondDenom === "" ? void 0 : message.bondDenom;
    obj.min_commission_rate = message.minCommissionRate === "" ? void 0 : message.minCommissionRate;
    return obj;
  },
  fromAminoMsg(object) {
    return Params.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/x/staking/Params",
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
    balance: Coin.fromPartial({})
  };
}
const DelegationResponse = {
  typeUrl: "/cosmos.staking.v1beta1.DelegationResponse",
  encode(message, writer = BinaryWriter.create()) {
    if (message.delegation !== void 0) {
      Delegation.encode(message.delegation, writer.uint32(10).fork()).ldelim();
    }
    if (message.balance !== void 0) {
      Coin.encode(message.balance, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseDelegationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegation = Delegation.decode(reader, reader.uint32());
          break;
        case 2:
          message.balance = Coin.decode(reader, reader.uint32());
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
    message.balance = object.balance !== void 0 && object.balance !== null ? Coin.fromPartial(object.balance) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseDelegationResponse();
    if (object.delegation !== void 0 && object.delegation !== null) {
      message.delegation = Delegation.fromAmino(object.delegation);
    }
    if (object.balance !== void 0 && object.balance !== null) {
      message.balance = Coin.fromAmino(object.balance);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.delegation = message.delegation ? Delegation.toAmino(message.delegation) : Delegation.toAmino(Delegation.fromPartial({}));
    obj.balance = message.balance ? Coin.toAmino(message.balance) : Coin.toAmino(Coin.fromPartial({}));
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
  encode(message, writer = BinaryWriter.create()) {
    if (message.redelegationEntry !== void 0) {
      RedelegationEntry.encode(message.redelegationEntry, writer.uint32(10).fork()).ldelim();
    }
    if (message.balance !== "") {
      writer.uint32(34).string(message.balance);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
    obj.redelegation_entry = message.redelegationEntry ? RedelegationEntry.toAmino(message.redelegationEntry) : RedelegationEntry.toAmino(RedelegationEntry.fromPartial({}));
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
  encode(message, writer = BinaryWriter.create()) {
    if (message.redelegation !== void 0) {
      Redelegation.encode(message.redelegation, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.entries) {
      RedelegationEntryResponse.encode(v, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
    obj.redelegation = message.redelegation ? Redelegation.toAmino(message.redelegation) : Redelegation.toAmino(Redelegation.fromPartial({}));
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
  encode(message, writer = BinaryWriter.create()) {
    if (message.notBondedTokens !== "") {
      writer.uint32(10).string(message.notBondedTokens);
    }
    if (message.bondedTokens !== "") {
      writer.uint32(18).string(message.bondedTokens);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  encode(message, writer = BinaryWriter.create()) {
    for (const v of message.updates) {
      ValidatorUpdate.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseValidatorUpdates();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.updates.push(ValidatorUpdate.decode(reader, reader.uint32()));
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
    message.updates = object.updates?.map((e) => ValidatorUpdate.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseValidatorUpdates();
    message.updates = object.updates?.map((e) => ValidatorUpdate.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.updates) {
      obj.updates = message.updates.map((e) => e ? ValidatorUpdate.toAmino(e) : void 0);
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
const Cosmos_cryptoPubKey_InterfaceDecoder = (input) => {
  const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
  const data = Any.decode(reader, reader.uint32());
  switch (data.typeUrl) {
    default:
      return data;
  }
};
const Cosmos_cryptoPubKey_FromAmino = (content) => {
  return encodePubkey(content);
};
const Cosmos_cryptoPubKey_ToAmino = (content) => {
  return decodePubkey(content);
};
export {
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
  Infraction,
  InfractionAmino,
  InfractionSDKType,
  Params,
  Pool,
  Redelegation,
  RedelegationEntry,
  RedelegationEntryResponse,
  RedelegationResponse,
  UnbondingDelegation,
  UnbondingDelegationEntry,
  ValAddresses,
  Validator,
  ValidatorUpdates,
  bondStatusFromJSON,
  bondStatusToJSON,
  infractionFromJSON,
  infractionToJSON
};
