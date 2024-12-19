import { Params, Validator, Delegation, UnbondingDelegation, Redelegation, TokenizeShareRecord } from "./staking";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { bytesFromBase64, base64FromBytes, toTimestamp, fromTimestamp } from "../../../helpers";
function createBaseGenesisState() {
  return {
    params: Params.fromPartial({}),
    lastTotalPower: new Uint8Array(),
    lastValidatorPowers: [],
    validators: [],
    delegations: [],
    unbondingDelegations: [],
    redelegations: [],
    exported: false,
    tokenizeShareRecords: [],
    lastTokenizeShareRecordId: BigInt(0),
    totalLiquidStakedTokens: new Uint8Array(),
    tokenizeShareLocks: []
  };
}
const GenesisState = {
  typeUrl: "/cosmos.staking.v1beta1.GenesisState",
  encode(message, writer = BinaryWriter.create()) {
    if (message.params !== void 0) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.lastTotalPower.length !== 0) {
      writer.uint32(18).bytes(message.lastTotalPower);
    }
    for (const v of message.lastValidatorPowers) {
      LastValidatorPower.encode(v, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.validators) {
      Validator.encode(v, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.delegations) {
      Delegation.encode(v, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.unbondingDelegations) {
      UnbondingDelegation.encode(v, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.redelegations) {
      Redelegation.encode(v, writer.uint32(58).fork()).ldelim();
    }
    if (message.exported === true) {
      writer.uint32(64).bool(message.exported);
    }
    for (const v of message.tokenizeShareRecords) {
      TokenizeShareRecord.encode(v, writer.uint32(74).fork()).ldelim();
    }
    if (message.lastTokenizeShareRecordId !== BigInt(0)) {
      writer.uint32(80).uint64(message.lastTokenizeShareRecordId);
    }
    if (message.totalLiquidStakedTokens.length !== 0) {
      writer.uint32(90).bytes(message.totalLiquidStakedTokens);
    }
    for (const v of message.tokenizeShareLocks) {
      TokenizeShareLock.encode(v, writer.uint32(98).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.lastTotalPower = reader.bytes();
          break;
        case 3:
          message.lastValidatorPowers.push(LastValidatorPower.decode(reader, reader.uint32()));
          break;
        case 4:
          message.validators.push(Validator.decode(reader, reader.uint32()));
          break;
        case 5:
          message.delegations.push(Delegation.decode(reader, reader.uint32()));
          break;
        case 6:
          message.unbondingDelegations.push(UnbondingDelegation.decode(reader, reader.uint32()));
          break;
        case 7:
          message.redelegations.push(Redelegation.decode(reader, reader.uint32()));
          break;
        case 8:
          message.exported = reader.bool();
          break;
        case 9:
          message.tokenizeShareRecords.push(TokenizeShareRecord.decode(reader, reader.uint32()));
          break;
        case 10:
          message.lastTokenizeShareRecordId = reader.uint64();
          break;
        case 11:
          message.totalLiquidStakedTokens = reader.bytes();
          break;
        case 12:
          message.tokenizeShareLocks.push(TokenizeShareLock.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseGenesisState();
    message.params = object.params !== void 0 && object.params !== null ? Params.fromPartial(object.params) : void 0;
    message.lastTotalPower = object.lastTotalPower ?? new Uint8Array();
    message.lastValidatorPowers = object.lastValidatorPowers?.map((e) => LastValidatorPower.fromPartial(e)) || [];
    message.validators = object.validators?.map((e) => Validator.fromPartial(e)) || [];
    message.delegations = object.delegations?.map((e) => Delegation.fromPartial(e)) || [];
    message.unbondingDelegations = object.unbondingDelegations?.map((e) => UnbondingDelegation.fromPartial(e)) || [];
    message.redelegations = object.redelegations?.map((e) => Redelegation.fromPartial(e)) || [];
    message.exported = object.exported ?? false;
    message.tokenizeShareRecords = object.tokenizeShareRecords?.map((e) => TokenizeShareRecord.fromPartial(e)) || [];
    message.lastTokenizeShareRecordId = object.lastTokenizeShareRecordId !== void 0 && object.lastTokenizeShareRecordId !== null ? BigInt(object.lastTokenizeShareRecordId.toString()) : BigInt(0);
    message.totalLiquidStakedTokens = object.totalLiquidStakedTokens ?? new Uint8Array();
    message.tokenizeShareLocks = object.tokenizeShareLocks?.map((e) => TokenizeShareLock.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseGenesisState();
    if (object.params !== void 0 && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    if (object.last_total_power !== void 0 && object.last_total_power !== null) {
      message.lastTotalPower = bytesFromBase64(object.last_total_power);
    }
    message.lastValidatorPowers = object.last_validator_powers?.map((e) => LastValidatorPower.fromAmino(e)) || [];
    message.validators = object.validators?.map((e) => Validator.fromAmino(e)) || [];
    message.delegations = object.delegations?.map((e) => Delegation.fromAmino(e)) || [];
    message.unbondingDelegations = object.unbonding_delegations?.map((e) => UnbondingDelegation.fromAmino(e)) || [];
    message.redelegations = object.redelegations?.map((e) => Redelegation.fromAmino(e)) || [];
    if (object.exported !== void 0 && object.exported !== null) {
      message.exported = object.exported;
    }
    message.tokenizeShareRecords = object.tokenize_share_records?.map((e) => TokenizeShareRecord.fromAmino(e)) || [];
    if (object.last_tokenize_share_record_id !== void 0 && object.last_tokenize_share_record_id !== null) {
      message.lastTokenizeShareRecordId = BigInt(object.last_tokenize_share_record_id);
    }
    if (object.total_liquid_staked_tokens !== void 0 && object.total_liquid_staked_tokens !== null) {
      message.totalLiquidStakedTokens = bytesFromBase64(object.total_liquid_staked_tokens);
    }
    message.tokenizeShareLocks = object.tokenize_share_locks?.map((e) => TokenizeShareLock.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.params = message.params ? Params.toAmino(message.params) : void 0;
    obj.last_total_power = message.lastTotalPower ? base64FromBytes(message.lastTotalPower) : void 0;
    if (message.lastValidatorPowers) {
      obj.last_validator_powers = message.lastValidatorPowers.map((e) => e ? LastValidatorPower.toAmino(e) : void 0);
    } else {
      obj.last_validator_powers = message.lastValidatorPowers;
    }
    if (message.validators) {
      obj.validators = message.validators.map((e) => e ? Validator.toAmino(e) : void 0);
    } else {
      obj.validators = message.validators;
    }
    if (message.delegations) {
      obj.delegations = message.delegations.map((e) => e ? Delegation.toAmino(e) : void 0);
    } else {
      obj.delegations = message.delegations;
    }
    if (message.unbondingDelegations) {
      obj.unbonding_delegations = message.unbondingDelegations.map((e) => e ? UnbondingDelegation.toAmino(e) : void 0);
    } else {
      obj.unbonding_delegations = message.unbondingDelegations;
    }
    if (message.redelegations) {
      obj.redelegations = message.redelegations.map((e) => e ? Redelegation.toAmino(e) : void 0);
    } else {
      obj.redelegations = message.redelegations;
    }
    obj.exported = message.exported === false ? void 0 : message.exported;
    if (message.tokenizeShareRecords) {
      obj.tokenize_share_records = message.tokenizeShareRecords.map((e) => e ? TokenizeShareRecord.toAmino(e) : void 0);
    } else {
      obj.tokenize_share_records = message.tokenizeShareRecords;
    }
    obj.last_tokenize_share_record_id = message.lastTokenizeShareRecordId !== BigInt(0) ? message.lastTokenizeShareRecordId.toString() : void 0;
    obj.total_liquid_staked_tokens = message.totalLiquidStakedTokens ? base64FromBytes(message.totalLiquidStakedTokens) : void 0;
    if (message.tokenizeShareLocks) {
      obj.tokenize_share_locks = message.tokenizeShareLocks.map((e) => e ? TokenizeShareLock.toAmino(e) : void 0);
    } else {
      obj.tokenize_share_locks = message.tokenizeShareLocks;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return GenesisState.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/GenesisState",
      value: GenesisState.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return GenesisState.decode(message.value);
  },
  toProto(message) {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.staking.v1beta1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
function createBaseTokenizeShareLock() {
  return {
    address: "",
    status: "",
    completionTime: /* @__PURE__ */ new Date()
  };
}
const TokenizeShareLock = {
  typeUrl: "/cosmos.staking.v1beta1.TokenizeShareLock",
  encode(message, writer = BinaryWriter.create()) {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.status !== "") {
      writer.uint32(18).string(message.status);
    }
    if (message.completionTime !== void 0) {
      Timestamp.encode(toTimestamp(message.completionTime), writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseTokenizeShareLock();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.status = reader.string();
          break;
        case 3:
          message.completionTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseTokenizeShareLock();
    message.address = object.address ?? "";
    message.status = object.status ?? "";
    message.completionTime = object.completionTime ?? void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseTokenizeShareLock();
    if (object.address !== void 0 && object.address !== null) {
      message.address = object.address;
    }
    if (object.status !== void 0 && object.status !== null) {
      message.status = object.status;
    }
    if (object.completion_time !== void 0 && object.completion_time !== null) {
      message.completionTime = fromTimestamp(Timestamp.fromAmino(object.completion_time));
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.address = message.address === "" ? void 0 : message.address;
    obj.status = message.status === "" ? void 0 : message.status;
    obj.completion_time = message.completionTime ? Timestamp.toAmino(toTimestamp(message.completionTime)) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return TokenizeShareLock.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/TokenizeShareLock",
      value: TokenizeShareLock.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return TokenizeShareLock.decode(message.value);
  },
  toProto(message) {
    return TokenizeShareLock.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.staking.v1beta1.TokenizeShareLock",
      value: TokenizeShareLock.encode(message).finish()
    };
  }
};
function createBaseLastValidatorPower() {
  return {
    address: "",
    power: BigInt(0)
  };
}
const LastValidatorPower = {
  typeUrl: "/cosmos.staking.v1beta1.LastValidatorPower",
  encode(message, writer = BinaryWriter.create()) {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.power !== BigInt(0)) {
      writer.uint32(16).int64(message.power);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseLastValidatorPower();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.power = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseLastValidatorPower();
    message.address = object.address ?? "";
    message.power = object.power !== void 0 && object.power !== null ? BigInt(object.power.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object) {
    const message = createBaseLastValidatorPower();
    if (object.address !== void 0 && object.address !== null) {
      message.address = object.address;
    }
    if (object.power !== void 0 && object.power !== null) {
      message.power = BigInt(object.power);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.address = message.address === "" ? void 0 : message.address;
    obj.power = message.power !== BigInt(0) ? message.power.toString() : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return LastValidatorPower.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/LastValidatorPower",
      value: LastValidatorPower.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return LastValidatorPower.decode(message.value);
  },
  toProto(message) {
    return LastValidatorPower.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.staking.v1beta1.LastValidatorPower",
      value: LastValidatorPower.encode(message).finish()
    };
  }
};
export {
  GenesisState,
  LastValidatorPower,
  TokenizeShareLock
};
