"use strict";
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
var tendermint_exports = {};
__export(tendermint_exports, {
  ClientState: () => ClientState,
  ConsensusState: () => ConsensusState,
  Fraction: () => Fraction,
  Header: () => Header,
  Misbehaviour: () => Misbehaviour
});
module.exports = __toCommonJS(tendermint_exports);
var import_duration = require("../../../../google/protobuf/duration");
var import_client = require("../../../core/client/v1/client");
var import_proofs = require("../../../../cosmos/ics23/v1/proofs");
var import_timestamp = require("../../../../google/protobuf/timestamp");
var import_commitment = require("../../../core/commitment/v1/commitment");
var import_types = require("../../../../tendermint/types/types");
var import_validator = require("../../../../tendermint/types/validator");
var import_binary = require("../../../../binary");
var import_helpers = require("../../../../helpers");
function createBaseClientState() {
  return {
    chainId: "",
    trustLevel: Fraction.fromPartial({}),
    trustingPeriod: import_duration.Duration.fromPartial({}),
    unbondingPeriod: import_duration.Duration.fromPartial({}),
    maxClockDrift: import_duration.Duration.fromPartial({}),
    frozenHeight: import_client.Height.fromPartial({}),
    latestHeight: import_client.Height.fromPartial({}),
    proofSpecs: [],
    upgradePath: [],
    allowUpdateAfterExpiry: false,
    allowUpdateAfterMisbehaviour: false
  };
}
const ClientState = {
  typeUrl: "/ibc.lightclients.tendermint.v1.ClientState",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }
    if (message.trustLevel !== void 0) {
      Fraction.encode(message.trustLevel, writer.uint32(18).fork()).ldelim();
    }
    if (message.trustingPeriod !== void 0) {
      import_duration.Duration.encode(message.trustingPeriod, writer.uint32(26).fork()).ldelim();
    }
    if (message.unbondingPeriod !== void 0) {
      import_duration.Duration.encode(message.unbondingPeriod, writer.uint32(34).fork()).ldelim();
    }
    if (message.maxClockDrift !== void 0) {
      import_duration.Duration.encode(message.maxClockDrift, writer.uint32(42).fork()).ldelim();
    }
    if (message.frozenHeight !== void 0) {
      import_client.Height.encode(message.frozenHeight, writer.uint32(50).fork()).ldelim();
    }
    if (message.latestHeight !== void 0) {
      import_client.Height.encode(message.latestHeight, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.proofSpecs) {
      import_proofs.ProofSpec.encode(v, writer.uint32(66).fork()).ldelim();
    }
    for (const v of message.upgradePath) {
      writer.uint32(74).string(v);
    }
    if (message.allowUpdateAfterExpiry === true) {
      writer.uint32(80).bool(message.allowUpdateAfterExpiry);
    }
    if (message.allowUpdateAfterMisbehaviour === true) {
      writer.uint32(88).bool(message.allowUpdateAfterMisbehaviour);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseClientState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chainId = reader.string();
          break;
        case 2:
          message.trustLevel = Fraction.decode(reader, reader.uint32());
          break;
        case 3:
          message.trustingPeriod = import_duration.Duration.decode(reader, reader.uint32());
          break;
        case 4:
          message.unbondingPeriod = import_duration.Duration.decode(reader, reader.uint32());
          break;
        case 5:
          message.maxClockDrift = import_duration.Duration.decode(reader, reader.uint32());
          break;
        case 6:
          message.frozenHeight = import_client.Height.decode(reader, reader.uint32());
          break;
        case 7:
          message.latestHeight = import_client.Height.decode(reader, reader.uint32());
          break;
        case 8:
          message.proofSpecs.push(import_proofs.ProofSpec.decode(reader, reader.uint32()));
          break;
        case 9:
          message.upgradePath.push(reader.string());
          break;
        case 10:
          message.allowUpdateAfterExpiry = reader.bool();
          break;
        case 11:
          message.allowUpdateAfterMisbehaviour = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseClientState();
    message.chainId = object.chainId ?? "";
    message.trustLevel = object.trustLevel !== void 0 && object.trustLevel !== null ? Fraction.fromPartial(object.trustLevel) : void 0;
    message.trustingPeriod = object.trustingPeriod !== void 0 && object.trustingPeriod !== null ? import_duration.Duration.fromPartial(object.trustingPeriod) : void 0;
    message.unbondingPeriod = object.unbondingPeriod !== void 0 && object.unbondingPeriod !== null ? import_duration.Duration.fromPartial(object.unbondingPeriod) : void 0;
    message.maxClockDrift = object.maxClockDrift !== void 0 && object.maxClockDrift !== null ? import_duration.Duration.fromPartial(object.maxClockDrift) : void 0;
    message.frozenHeight = object.frozenHeight !== void 0 && object.frozenHeight !== null ? import_client.Height.fromPartial(object.frozenHeight) : void 0;
    message.latestHeight = object.latestHeight !== void 0 && object.latestHeight !== null ? import_client.Height.fromPartial(object.latestHeight) : void 0;
    message.proofSpecs = object.proofSpecs?.map((e) => import_proofs.ProofSpec.fromPartial(e)) || [];
    message.upgradePath = object.upgradePath?.map((e) => e) || [];
    message.allowUpdateAfterExpiry = object.allowUpdateAfterExpiry ?? false;
    message.allowUpdateAfterMisbehaviour = object.allowUpdateAfterMisbehaviour ?? false;
    return message;
  },
  fromAmino(object) {
    const message = createBaseClientState();
    if (object.chain_id !== void 0 && object.chain_id !== null) {
      message.chainId = object.chain_id;
    }
    if (object.trust_level !== void 0 && object.trust_level !== null) {
      message.trustLevel = Fraction.fromAmino(object.trust_level);
    }
    if (object.trusting_period !== void 0 && object.trusting_period !== null) {
      message.trustingPeriod = import_duration.Duration.fromAmino(object.trusting_period);
    }
    if (object.unbonding_period !== void 0 && object.unbonding_period !== null) {
      message.unbondingPeriod = import_duration.Duration.fromAmino(object.unbonding_period);
    }
    if (object.max_clock_drift !== void 0 && object.max_clock_drift !== null) {
      message.maxClockDrift = import_duration.Duration.fromAmino(object.max_clock_drift);
    }
    if (object.frozen_height !== void 0 && object.frozen_height !== null) {
      message.frozenHeight = import_client.Height.fromAmino(object.frozen_height);
    }
    if (object.latest_height !== void 0 && object.latest_height !== null) {
      message.latestHeight = import_client.Height.fromAmino(object.latest_height);
    }
    message.proofSpecs = object.proof_specs?.map((e) => import_proofs.ProofSpec.fromAmino(e)) || [];
    message.upgradePath = object.upgrade_path?.map((e) => e) || [];
    if (object.allow_update_after_expiry !== void 0 && object.allow_update_after_expiry !== null) {
      message.allowUpdateAfterExpiry = object.allow_update_after_expiry;
    }
    if (object.allow_update_after_misbehaviour !== void 0 && object.allow_update_after_misbehaviour !== null) {
      message.allowUpdateAfterMisbehaviour = object.allow_update_after_misbehaviour;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.chain_id = message.chainId === "" ? void 0 : message.chainId;
    obj.trust_level = message.trustLevel ? Fraction.toAmino(message.trustLevel) : void 0;
    obj.trusting_period = message.trustingPeriod ? import_duration.Duration.toAmino(message.trustingPeriod) : void 0;
    obj.unbonding_period = message.unbondingPeriod ? import_duration.Duration.toAmino(message.unbondingPeriod) : void 0;
    obj.max_clock_drift = message.maxClockDrift ? import_duration.Duration.toAmino(message.maxClockDrift) : void 0;
    obj.frozen_height = message.frozenHeight ? import_client.Height.toAmino(message.frozenHeight) : {};
    obj.latest_height = message.latestHeight ? import_client.Height.toAmino(message.latestHeight) : {};
    if (message.proofSpecs) {
      obj.proof_specs = message.proofSpecs.map((e) => e ? import_proofs.ProofSpec.toAmino(e) : void 0);
    } else {
      obj.proof_specs = message.proofSpecs;
    }
    if (message.upgradePath) {
      obj.upgrade_path = message.upgradePath.map((e) => e);
    } else {
      obj.upgrade_path = message.upgradePath;
    }
    obj.allow_update_after_expiry = message.allowUpdateAfterExpiry === false ? void 0 : message.allowUpdateAfterExpiry;
    obj.allow_update_after_misbehaviour = message.allowUpdateAfterMisbehaviour === false ? void 0 : message.allowUpdateAfterMisbehaviour;
    return obj;
  },
  fromAminoMsg(object) {
    return ClientState.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/ClientState",
      value: ClientState.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return ClientState.decode(message.value);
  },
  toProto(message) {
    return ClientState.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.lightclients.tendermint.v1.ClientState",
      value: ClientState.encode(message).finish()
    };
  }
};
function createBaseConsensusState() {
  return {
    timestamp: /* @__PURE__ */ new Date(),
    root: import_commitment.MerkleRoot.fromPartial({}),
    nextValidatorsHash: new Uint8Array()
  };
}
const ConsensusState = {
  typeUrl: "/ibc.lightclients.tendermint.v1.ConsensusState",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.timestamp !== void 0) {
      import_timestamp.Timestamp.encode((0, import_helpers.toTimestamp)(message.timestamp), writer.uint32(10).fork()).ldelim();
    }
    if (message.root !== void 0) {
      import_commitment.MerkleRoot.encode(message.root, writer.uint32(18).fork()).ldelim();
    }
    if (message.nextValidatorsHash.length !== 0) {
      writer.uint32(26).bytes(message.nextValidatorsHash);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseConsensusState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.timestamp = (0, import_helpers.fromTimestamp)(import_timestamp.Timestamp.decode(reader, reader.uint32()));
          break;
        case 2:
          message.root = import_commitment.MerkleRoot.decode(reader, reader.uint32());
          break;
        case 3:
          message.nextValidatorsHash = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseConsensusState();
    message.timestamp = object.timestamp ?? void 0;
    message.root = object.root !== void 0 && object.root !== null ? import_commitment.MerkleRoot.fromPartial(object.root) : void 0;
    message.nextValidatorsHash = object.nextValidatorsHash ?? new Uint8Array();
    return message;
  },
  fromAmino(object) {
    const message = createBaseConsensusState();
    if (object.timestamp !== void 0 && object.timestamp !== null) {
      message.timestamp = (0, import_helpers.fromTimestamp)(import_timestamp.Timestamp.fromAmino(object.timestamp));
    }
    if (object.root !== void 0 && object.root !== null) {
      message.root = import_commitment.MerkleRoot.fromAmino(object.root);
    }
    if (object.next_validators_hash !== void 0 && object.next_validators_hash !== null) {
      message.nextValidatorsHash = (0, import_helpers.bytesFromBase64)(object.next_validators_hash);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.timestamp = message.timestamp ? import_timestamp.Timestamp.toAmino((0, import_helpers.toTimestamp)(message.timestamp)) : void 0;
    obj.root = message.root ? import_commitment.MerkleRoot.toAmino(message.root) : void 0;
    obj.next_validators_hash = message.nextValidatorsHash ? (0, import_helpers.base64FromBytes)(message.nextValidatorsHash) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return ConsensusState.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/ConsensusState",
      value: ConsensusState.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return ConsensusState.decode(message.value);
  },
  toProto(message) {
    return ConsensusState.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.lightclients.tendermint.v1.ConsensusState",
      value: ConsensusState.encode(message).finish()
    };
  }
};
function createBaseMisbehaviour() {
  return {
    clientId: "",
    header1: void 0,
    header2: void 0
  };
}
const Misbehaviour = {
  typeUrl: "/ibc.lightclients.tendermint.v1.Misbehaviour",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }
    if (message.header1 !== void 0) {
      Header.encode(message.header1, writer.uint32(18).fork()).ldelim();
    }
    if (message.header2 !== void 0) {
      Header.encode(message.header2, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMisbehaviour();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;
        case 2:
          message.header1 = Header.decode(reader, reader.uint32());
          break;
        case 3:
          message.header2 = Header.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMisbehaviour();
    message.clientId = object.clientId ?? "";
    message.header1 = object.header1 !== void 0 && object.header1 !== null ? Header.fromPartial(object.header1) : void 0;
    message.header2 = object.header2 !== void 0 && object.header2 !== null ? Header.fromPartial(object.header2) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseMisbehaviour();
    if (object.client_id !== void 0 && object.client_id !== null) {
      message.clientId = object.client_id;
    }
    if (object.header_1 !== void 0 && object.header_1 !== null) {
      message.header1 = Header.fromAmino(object.header_1);
    }
    if (object.header_2 !== void 0 && object.header_2 !== null) {
      message.header2 = Header.fromAmino(object.header_2);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.client_id = message.clientId === "" ? void 0 : message.clientId;
    obj.header_1 = message.header1 ? Header.toAmino(message.header1) : void 0;
    obj.header_2 = message.header2 ? Header.toAmino(message.header2) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return Misbehaviour.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/Misbehaviour",
      value: Misbehaviour.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return Misbehaviour.decode(message.value);
  },
  toProto(message) {
    return Misbehaviour.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.lightclients.tendermint.v1.Misbehaviour",
      value: Misbehaviour.encode(message).finish()
    };
  }
};
function createBaseHeader() {
  return {
    signedHeader: void 0,
    validatorSet: void 0,
    trustedHeight: import_client.Height.fromPartial({}),
    trustedValidators: void 0
  };
}
const Header = {
  typeUrl: "/ibc.lightclients.tendermint.v1.Header",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.signedHeader !== void 0) {
      import_types.SignedHeader.encode(message.signedHeader, writer.uint32(10).fork()).ldelim();
    }
    if (message.validatorSet !== void 0) {
      import_validator.ValidatorSet.encode(message.validatorSet, writer.uint32(18).fork()).ldelim();
    }
    if (message.trustedHeight !== void 0) {
      import_client.Height.encode(message.trustedHeight, writer.uint32(26).fork()).ldelim();
    }
    if (message.trustedValidators !== void 0) {
      import_validator.ValidatorSet.encode(message.trustedValidators, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseHeader();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signedHeader = import_types.SignedHeader.decode(reader, reader.uint32());
          break;
        case 2:
          message.validatorSet = import_validator.ValidatorSet.decode(reader, reader.uint32());
          break;
        case 3:
          message.trustedHeight = import_client.Height.decode(reader, reader.uint32());
          break;
        case 4:
          message.trustedValidators = import_validator.ValidatorSet.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseHeader();
    message.signedHeader = object.signedHeader !== void 0 && object.signedHeader !== null ? import_types.SignedHeader.fromPartial(object.signedHeader) : void 0;
    message.validatorSet = object.validatorSet !== void 0 && object.validatorSet !== null ? import_validator.ValidatorSet.fromPartial(object.validatorSet) : void 0;
    message.trustedHeight = object.trustedHeight !== void 0 && object.trustedHeight !== null ? import_client.Height.fromPartial(object.trustedHeight) : void 0;
    message.trustedValidators = object.trustedValidators !== void 0 && object.trustedValidators !== null ? import_validator.ValidatorSet.fromPartial(object.trustedValidators) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseHeader();
    if (object.signed_header !== void 0 && object.signed_header !== null) {
      message.signedHeader = import_types.SignedHeader.fromAmino(object.signed_header);
    }
    if (object.validator_set !== void 0 && object.validator_set !== null) {
      message.validatorSet = import_validator.ValidatorSet.fromAmino(object.validator_set);
    }
    if (object.trusted_height !== void 0 && object.trusted_height !== null) {
      message.trustedHeight = import_client.Height.fromAmino(object.trusted_height);
    }
    if (object.trusted_validators !== void 0 && object.trusted_validators !== null) {
      message.trustedValidators = import_validator.ValidatorSet.fromAmino(object.trusted_validators);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.signed_header = message.signedHeader ? import_types.SignedHeader.toAmino(message.signedHeader) : void 0;
    obj.validator_set = message.validatorSet ? import_validator.ValidatorSet.toAmino(message.validatorSet) : void 0;
    obj.trusted_height = message.trustedHeight ? import_client.Height.toAmino(message.trustedHeight) : {};
    obj.trusted_validators = message.trustedValidators ? import_validator.ValidatorSet.toAmino(message.trustedValidators) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return Header.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/Header",
      value: Header.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return Header.decode(message.value);
  },
  toProto(message) {
    return Header.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.lightclients.tendermint.v1.Header",
      value: Header.encode(message).finish()
    };
  }
};
function createBaseFraction() {
  return {
    numerator: BigInt(0),
    denominator: BigInt(0)
  };
}
const Fraction = {
  typeUrl: "/ibc.lightclients.tendermint.v1.Fraction",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.numerator !== BigInt(0)) {
      writer.uint32(8).uint64(message.numerator);
    }
    if (message.denominator !== BigInt(0)) {
      writer.uint32(16).uint64(message.denominator);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseFraction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.numerator = reader.uint64();
          break;
        case 2:
          message.denominator = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseFraction();
    message.numerator = object.numerator !== void 0 && object.numerator !== null ? BigInt(object.numerator.toString()) : BigInt(0);
    message.denominator = object.denominator !== void 0 && object.denominator !== null ? BigInt(object.denominator.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object) {
    const message = createBaseFraction();
    if (object.numerator !== void 0 && object.numerator !== null) {
      message.numerator = BigInt(object.numerator);
    }
    if (object.denominator !== void 0 && object.denominator !== null) {
      message.denominator = BigInt(object.denominator);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.numerator = message.numerator !== BigInt(0) ? message.numerator?.toString() : void 0;
    obj.denominator = message.denominator !== BigInt(0) ? message.denominator?.toString() : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return Fraction.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/Fraction",
      value: Fraction.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return Fraction.decode(message.value);
  },
  toProto(message) {
    return Fraction.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.lightclients.tendermint.v1.Fraction",
      value: Fraction.encode(message).finish()
    };
  }
};
// Removed broken CommonJS export annotation
