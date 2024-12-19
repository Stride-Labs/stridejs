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
var genesis_exports = {};
__export(genesis_exports, {
  GenesisState: () => GenesisState,
  LastValidatorPower: () => LastValidatorPower
});
module.exports = __toCommonJS(genesis_exports);
var import_staking = require("./staking");
var import_binary = require("../../../binary");
var import_helpers = require("../../../helpers");
function createBaseGenesisState() {
  return {
    params: import_staking.Params.fromPartial({}),
    lastTotalPower: new Uint8Array(),
    lastValidatorPowers: [],
    validators: [],
    delegations: [],
    unbondingDelegations: [],
    redelegations: [],
    exported: false
  };
}
const GenesisState = {
  typeUrl: "/cosmos.staking.v1beta1.GenesisState",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.params !== void 0) {
      import_staking.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.lastTotalPower.length !== 0) {
      writer.uint32(18).bytes(message.lastTotalPower);
    }
    for (const v of message.lastValidatorPowers) {
      LastValidatorPower.encode(v, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.validators) {
      import_staking.Validator.encode(v, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.delegations) {
      import_staking.Delegation.encode(v, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.unbondingDelegations) {
      import_staking.UnbondingDelegation.encode(v, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.redelegations) {
      import_staking.Redelegation.encode(v, writer.uint32(58).fork()).ldelim();
    }
    if (message.exported === true) {
      writer.uint32(64).bool(message.exported);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = import_staking.Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.lastTotalPower = reader.bytes();
          break;
        case 3:
          message.lastValidatorPowers.push(LastValidatorPower.decode(reader, reader.uint32()));
          break;
        case 4:
          message.validators.push(import_staking.Validator.decode(reader, reader.uint32()));
          break;
        case 5:
          message.delegations.push(import_staking.Delegation.decode(reader, reader.uint32()));
          break;
        case 6:
          message.unbondingDelegations.push(import_staking.UnbondingDelegation.decode(reader, reader.uint32()));
          break;
        case 7:
          message.redelegations.push(import_staking.Redelegation.decode(reader, reader.uint32()));
          break;
        case 8:
          message.exported = reader.bool();
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
    message.params = object.params !== void 0 && object.params !== null ? import_staking.Params.fromPartial(object.params) : void 0;
    message.lastTotalPower = object.lastTotalPower ?? new Uint8Array();
    message.lastValidatorPowers = object.lastValidatorPowers?.map((e) => LastValidatorPower.fromPartial(e)) || [];
    message.validators = object.validators?.map((e) => import_staking.Validator.fromPartial(e)) || [];
    message.delegations = object.delegations?.map((e) => import_staking.Delegation.fromPartial(e)) || [];
    message.unbondingDelegations = object.unbondingDelegations?.map((e) => import_staking.UnbondingDelegation.fromPartial(e)) || [];
    message.redelegations = object.redelegations?.map((e) => import_staking.Redelegation.fromPartial(e)) || [];
    message.exported = object.exported ?? false;
    return message;
  },
  fromAmino(object) {
    const message = createBaseGenesisState();
    if (object.params !== void 0 && object.params !== null) {
      message.params = import_staking.Params.fromAmino(object.params);
    }
    if (object.last_total_power !== void 0 && object.last_total_power !== null) {
      message.lastTotalPower = (0, import_helpers.bytesFromBase64)(object.last_total_power);
    }
    message.lastValidatorPowers = object.last_validator_powers?.map((e) => LastValidatorPower.fromAmino(e)) || [];
    message.validators = object.validators?.map((e) => import_staking.Validator.fromAmino(e)) || [];
    message.delegations = object.delegations?.map((e) => import_staking.Delegation.fromAmino(e)) || [];
    message.unbondingDelegations = object.unbonding_delegations?.map((e) => import_staking.UnbondingDelegation.fromAmino(e)) || [];
    message.redelegations = object.redelegations?.map((e) => import_staking.Redelegation.fromAmino(e)) || [];
    if (object.exported !== void 0 && object.exported !== null) {
      message.exported = object.exported;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.params = message.params ? import_staking.Params.toAmino(message.params) : import_staking.Params.toAmino(import_staking.Params.fromPartial({}));
    obj.last_total_power = message.lastTotalPower ? (0, import_helpers.base64FromBytes)(message.lastTotalPower) : "";
    if (message.lastValidatorPowers) {
      obj.last_validator_powers = message.lastValidatorPowers.map((e) => e ? LastValidatorPower.toAmino(e) : void 0);
    } else {
      obj.last_validator_powers = message.lastValidatorPowers;
    }
    if (message.validators) {
      obj.validators = message.validators.map((e) => e ? import_staking.Validator.toAmino(e) : void 0);
    } else {
      obj.validators = message.validators;
    }
    if (message.delegations) {
      obj.delegations = message.delegations.map((e) => e ? import_staking.Delegation.toAmino(e) : void 0);
    } else {
      obj.delegations = message.delegations;
    }
    if (message.unbondingDelegations) {
      obj.unbonding_delegations = message.unbondingDelegations.map((e) => e ? import_staking.UnbondingDelegation.toAmino(e) : void 0);
    } else {
      obj.unbonding_delegations = message.unbondingDelegations;
    }
    if (message.redelegations) {
      obj.redelegations = message.redelegations.map((e) => e ? import_staking.Redelegation.toAmino(e) : void 0);
    } else {
      obj.redelegations = message.redelegations;
    }
    obj.exported = message.exported === false ? void 0 : message.exported;
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
function createBaseLastValidatorPower() {
  return {
    address: "",
    power: BigInt(0)
  };
}
const LastValidatorPower = {
  typeUrl: "/cosmos.staking.v1beta1.LastValidatorPower",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.power !== BigInt(0)) {
      writer.uint32(16).int64(message.power);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  GenesisState,
  LastValidatorPower
});
