import { Duration } from "../../google/protobuf/duration";
import { BinaryReader, BinaryWriter } from "../../binary";
function createBaseConsensusParams() {
  return {
    block: BlockParams.fromPartial({}),
    evidence: EvidenceParams.fromPartial({}),
    validator: ValidatorParams.fromPartial({}),
    version: VersionParams.fromPartial({})
  };
}
const ConsensusParams = {
  typeUrl: "/tendermint.types.ConsensusParams",
  encode(message, writer = BinaryWriter.create()) {
    if (message.block !== void 0) {
      BlockParams.encode(message.block, writer.uint32(10).fork()).ldelim();
    }
    if (message.evidence !== void 0) {
      EvidenceParams.encode(message.evidence, writer.uint32(18).fork()).ldelim();
    }
    if (message.validator !== void 0) {
      ValidatorParams.encode(message.validator, writer.uint32(26).fork()).ldelim();
    }
    if (message.version !== void 0) {
      VersionParams.encode(message.version, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseConsensusParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.block = BlockParams.decode(reader, reader.uint32());
          break;
        case 2:
          message.evidence = EvidenceParams.decode(reader, reader.uint32());
          break;
        case 3:
          message.validator = ValidatorParams.decode(reader, reader.uint32());
          break;
        case 4:
          message.version = VersionParams.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseConsensusParams();
    message.block = object.block !== void 0 && object.block !== null ? BlockParams.fromPartial(object.block) : void 0;
    message.evidence = object.evidence !== void 0 && object.evidence !== null ? EvidenceParams.fromPartial(object.evidence) : void 0;
    message.validator = object.validator !== void 0 && object.validator !== null ? ValidatorParams.fromPartial(object.validator) : void 0;
    message.version = object.version !== void 0 && object.version !== null ? VersionParams.fromPartial(object.version) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseConsensusParams();
    if (object.block !== void 0 && object.block !== null) {
      message.block = BlockParams.fromAmino(object.block);
    }
    if (object.evidence !== void 0 && object.evidence !== null) {
      message.evidence = EvidenceParams.fromAmino(object.evidence);
    }
    if (object.validator !== void 0 && object.validator !== null) {
      message.validator = ValidatorParams.fromAmino(object.validator);
    }
    if (object.version !== void 0 && object.version !== null) {
      message.version = VersionParams.fromAmino(object.version);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.block = message.block ? BlockParams.toAmino(message.block) : void 0;
    obj.evidence = message.evidence ? EvidenceParams.toAmino(message.evidence) : void 0;
    obj.validator = message.validator ? ValidatorParams.toAmino(message.validator) : void 0;
    obj.version = message.version ? VersionParams.toAmino(message.version) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return ConsensusParams.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return ConsensusParams.decode(message.value);
  },
  toProto(message) {
    return ConsensusParams.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/tendermint.types.ConsensusParams",
      value: ConsensusParams.encode(message).finish()
    };
  }
};
function createBaseBlockParams() {
  return {
    maxBytes: BigInt(0),
    maxGas: BigInt(0),
    timeIotaMs: BigInt(0)
  };
}
const BlockParams = {
  typeUrl: "/tendermint.types.BlockParams",
  encode(message, writer = BinaryWriter.create()) {
    if (message.maxBytes !== BigInt(0)) {
      writer.uint32(8).int64(message.maxBytes);
    }
    if (message.maxGas !== BigInt(0)) {
      writer.uint32(16).int64(message.maxGas);
    }
    if (message.timeIotaMs !== BigInt(0)) {
      writer.uint32(24).int64(message.timeIotaMs);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseBlockParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.maxBytes = reader.int64();
          break;
        case 2:
          message.maxGas = reader.int64();
          break;
        case 3:
          message.timeIotaMs = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseBlockParams();
    message.maxBytes = object.maxBytes !== void 0 && object.maxBytes !== null ? BigInt(object.maxBytes.toString()) : BigInt(0);
    message.maxGas = object.maxGas !== void 0 && object.maxGas !== null ? BigInt(object.maxGas.toString()) : BigInt(0);
    message.timeIotaMs = object.timeIotaMs !== void 0 && object.timeIotaMs !== null ? BigInt(object.timeIotaMs.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object) {
    const message = createBaseBlockParams();
    if (object.max_bytes !== void 0 && object.max_bytes !== null) {
      message.maxBytes = BigInt(object.max_bytes);
    }
    if (object.max_gas !== void 0 && object.max_gas !== null) {
      message.maxGas = BigInt(object.max_gas);
    }
    if (object.time_iota_ms !== void 0 && object.time_iota_ms !== null) {
      message.timeIotaMs = BigInt(object.time_iota_ms);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.max_bytes = message.maxBytes !== BigInt(0) ? message.maxBytes?.toString() : void 0;
    obj.max_gas = message.maxGas !== BigInt(0) ? message.maxGas?.toString() : void 0;
    obj.time_iota_ms = message.timeIotaMs !== BigInt(0) ? message.timeIotaMs?.toString() : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return BlockParams.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return BlockParams.decode(message.value);
  },
  toProto(message) {
    return BlockParams.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/tendermint.types.BlockParams",
      value: BlockParams.encode(message).finish()
    };
  }
};
function createBaseEvidenceParams() {
  return {
    maxAgeNumBlocks: BigInt(0),
    maxAgeDuration: Duration.fromPartial({}),
    maxBytes: BigInt(0)
  };
}
const EvidenceParams = {
  typeUrl: "/tendermint.types.EvidenceParams",
  encode(message, writer = BinaryWriter.create()) {
    if (message.maxAgeNumBlocks !== BigInt(0)) {
      writer.uint32(8).int64(message.maxAgeNumBlocks);
    }
    if (message.maxAgeDuration !== void 0) {
      Duration.encode(message.maxAgeDuration, writer.uint32(18).fork()).ldelim();
    }
    if (message.maxBytes !== BigInt(0)) {
      writer.uint32(24).int64(message.maxBytes);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseEvidenceParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.maxAgeNumBlocks = reader.int64();
          break;
        case 2:
          message.maxAgeDuration = Duration.decode(reader, reader.uint32());
          break;
        case 3:
          message.maxBytes = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseEvidenceParams();
    message.maxAgeNumBlocks = object.maxAgeNumBlocks !== void 0 && object.maxAgeNumBlocks !== null ? BigInt(object.maxAgeNumBlocks.toString()) : BigInt(0);
    message.maxAgeDuration = object.maxAgeDuration !== void 0 && object.maxAgeDuration !== null ? Duration.fromPartial(object.maxAgeDuration) : void 0;
    message.maxBytes = object.maxBytes !== void 0 && object.maxBytes !== null ? BigInt(object.maxBytes.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object) {
    const message = createBaseEvidenceParams();
    if (object.max_age_num_blocks !== void 0 && object.max_age_num_blocks !== null) {
      message.maxAgeNumBlocks = BigInt(object.max_age_num_blocks);
    }
    if (object.max_age_duration !== void 0 && object.max_age_duration !== null) {
      message.maxAgeDuration = Duration.fromAmino(object.max_age_duration);
    }
    if (object.max_bytes !== void 0 && object.max_bytes !== null) {
      message.maxBytes = BigInt(object.max_bytes);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.max_age_num_blocks = message.maxAgeNumBlocks !== BigInt(0) ? message.maxAgeNumBlocks?.toString() : void 0;
    obj.max_age_duration = message.maxAgeDuration ? Duration.toAmino(message.maxAgeDuration) : void 0;
    obj.max_bytes = message.maxBytes !== BigInt(0) ? message.maxBytes?.toString() : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return EvidenceParams.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return EvidenceParams.decode(message.value);
  },
  toProto(message) {
    return EvidenceParams.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/tendermint.types.EvidenceParams",
      value: EvidenceParams.encode(message).finish()
    };
  }
};
function createBaseValidatorParams() {
  return {
    pubKeyTypes: []
  };
}
const ValidatorParams = {
  typeUrl: "/tendermint.types.ValidatorParams",
  encode(message, writer = BinaryWriter.create()) {
    for (const v of message.pubKeyTypes) {
      writer.uint32(10).string(v);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseValidatorParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pubKeyTypes.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseValidatorParams();
    message.pubKeyTypes = object.pubKeyTypes?.map((e) => e) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseValidatorParams();
    message.pubKeyTypes = object.pub_key_types?.map((e) => e) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.pubKeyTypes) {
      obj.pub_key_types = message.pubKeyTypes.map((e) => e);
    } else {
      obj.pub_key_types = message.pubKeyTypes;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return ValidatorParams.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return ValidatorParams.decode(message.value);
  },
  toProto(message) {
    return ValidatorParams.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/tendermint.types.ValidatorParams",
      value: ValidatorParams.encode(message).finish()
    };
  }
};
function createBaseVersionParams() {
  return {
    appVersion: BigInt(0)
  };
}
const VersionParams = {
  typeUrl: "/tendermint.types.VersionParams",
  encode(message, writer = BinaryWriter.create()) {
    if (message.appVersion !== BigInt(0)) {
      writer.uint32(8).uint64(message.appVersion);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseVersionParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appVersion = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseVersionParams();
    message.appVersion = object.appVersion !== void 0 && object.appVersion !== null ? BigInt(object.appVersion.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object) {
    const message = createBaseVersionParams();
    if (object.app_version !== void 0 && object.app_version !== null) {
      message.appVersion = BigInt(object.app_version);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.app_version = message.appVersion !== BigInt(0) ? message.appVersion?.toString() : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return VersionParams.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return VersionParams.decode(message.value);
  },
  toProto(message) {
    return VersionParams.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/tendermint.types.VersionParams",
      value: VersionParams.encode(message).finish()
    };
  }
};
function createBaseHashedParams() {
  return {
    blockMaxBytes: BigInt(0),
    blockMaxGas: BigInt(0)
  };
}
const HashedParams = {
  typeUrl: "/tendermint.types.HashedParams",
  encode(message, writer = BinaryWriter.create()) {
    if (message.blockMaxBytes !== BigInt(0)) {
      writer.uint32(8).int64(message.blockMaxBytes);
    }
    if (message.blockMaxGas !== BigInt(0)) {
      writer.uint32(16).int64(message.blockMaxGas);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseHashedParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.blockMaxBytes = reader.int64();
          break;
        case 2:
          message.blockMaxGas = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseHashedParams();
    message.blockMaxBytes = object.blockMaxBytes !== void 0 && object.blockMaxBytes !== null ? BigInt(object.blockMaxBytes.toString()) : BigInt(0);
    message.blockMaxGas = object.blockMaxGas !== void 0 && object.blockMaxGas !== null ? BigInt(object.blockMaxGas.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object) {
    const message = createBaseHashedParams();
    if (object.block_max_bytes !== void 0 && object.block_max_bytes !== null) {
      message.blockMaxBytes = BigInt(object.block_max_bytes);
    }
    if (object.block_max_gas !== void 0 && object.block_max_gas !== null) {
      message.blockMaxGas = BigInt(object.block_max_gas);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.block_max_bytes = message.blockMaxBytes !== BigInt(0) ? message.blockMaxBytes?.toString() : void 0;
    obj.block_max_gas = message.blockMaxGas !== BigInt(0) ? message.blockMaxGas?.toString() : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return HashedParams.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return HashedParams.decode(message.value);
  },
  toProto(message) {
    return HashedParams.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/tendermint.types.HashedParams",
      value: HashedParams.encode(message).finish()
    };
  }
};
export {
  BlockParams,
  ConsensusParams,
  EvidenceParams,
  HashedParams,
  ValidatorParams,
  VersionParams
};
