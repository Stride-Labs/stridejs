import { PublicKey } from "../crypto/keys";
import { BinaryReader, BinaryWriter } from "../../binary";
import { bytesFromBase64, base64FromBytes } from "../../helpers";
function createBaseValidatorSet() {
  return {
    validators: [],
    proposer: void 0,
    totalVotingPower: BigInt(0)
  };
}
const ValidatorSet = {
  typeUrl: "/tendermint.types.ValidatorSet",
  encode(message, writer = BinaryWriter.create()) {
    for (const v of message.validators) {
      Validator.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.proposer !== void 0) {
      Validator.encode(message.proposer, writer.uint32(18).fork()).ldelim();
    }
    if (message.totalVotingPower !== BigInt(0)) {
      writer.uint32(24).int64(message.totalVotingPower);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseValidatorSet();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validators.push(Validator.decode(reader, reader.uint32()));
          break;
        case 2:
          message.proposer = Validator.decode(reader, reader.uint32());
          break;
        case 3:
          message.totalVotingPower = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseValidatorSet();
    message.validators = object.validators?.map((e) => Validator.fromPartial(e)) || [];
    message.proposer = object.proposer !== void 0 && object.proposer !== null ? Validator.fromPartial(object.proposer) : void 0;
    message.totalVotingPower = object.totalVotingPower !== void 0 && object.totalVotingPower !== null ? BigInt(object.totalVotingPower.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object) {
    const message = createBaseValidatorSet();
    message.validators = object.validators?.map((e) => Validator.fromAmino(e)) || [];
    if (object.proposer !== void 0 && object.proposer !== null) {
      message.proposer = Validator.fromAmino(object.proposer);
    }
    if (object.total_voting_power !== void 0 && object.total_voting_power !== null) {
      message.totalVotingPower = BigInt(object.total_voting_power);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.validators) {
      obj.validators = message.validators.map((e) => e ? Validator.toAmino(e) : void 0);
    } else {
      obj.validators = message.validators;
    }
    obj.proposer = message.proposer ? Validator.toAmino(message.proposer) : void 0;
    obj.total_voting_power = message.totalVotingPower !== BigInt(0) ? message.totalVotingPower.toString() : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return ValidatorSet.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return ValidatorSet.decode(message.value);
  },
  toProto(message) {
    return ValidatorSet.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/tendermint.types.ValidatorSet",
      value: ValidatorSet.encode(message).finish()
    };
  }
};
function createBaseValidator() {
  return {
    address: new Uint8Array(),
    pubKey: PublicKey.fromPartial({}),
    votingPower: BigInt(0),
    proposerPriority: BigInt(0)
  };
}
const Validator = {
  typeUrl: "/tendermint.types.Validator",
  encode(message, writer = BinaryWriter.create()) {
    if (message.address.length !== 0) {
      writer.uint32(10).bytes(message.address);
    }
    if (message.pubKey !== void 0) {
      PublicKey.encode(message.pubKey, writer.uint32(18).fork()).ldelim();
    }
    if (message.votingPower !== BigInt(0)) {
      writer.uint32(24).int64(message.votingPower);
    }
    if (message.proposerPriority !== BigInt(0)) {
      writer.uint32(32).int64(message.proposerPriority);
    }
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
          message.address = reader.bytes();
          break;
        case 2:
          message.pubKey = PublicKey.decode(reader, reader.uint32());
          break;
        case 3:
          message.votingPower = reader.int64();
          break;
        case 4:
          message.proposerPriority = reader.int64();
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
    message.address = object.address ?? new Uint8Array();
    message.pubKey = object.pubKey !== void 0 && object.pubKey !== null ? PublicKey.fromPartial(object.pubKey) : void 0;
    message.votingPower = object.votingPower !== void 0 && object.votingPower !== null ? BigInt(object.votingPower.toString()) : BigInt(0);
    message.proposerPriority = object.proposerPriority !== void 0 && object.proposerPriority !== null ? BigInt(object.proposerPriority.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object) {
    const message = createBaseValidator();
    if (object.address !== void 0 && object.address !== null) {
      message.address = bytesFromBase64(object.address);
    }
    if (object.pub_key !== void 0 && object.pub_key !== null) {
      message.pubKey = PublicKey.fromAmino(object.pub_key);
    }
    if (object.voting_power !== void 0 && object.voting_power !== null) {
      message.votingPower = BigInt(object.voting_power);
    }
    if (object.proposer_priority !== void 0 && object.proposer_priority !== null) {
      message.proposerPriority = BigInt(object.proposer_priority);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.address = message.address ? base64FromBytes(message.address) : void 0;
    obj.pub_key = message.pubKey ? PublicKey.toAmino(message.pubKey) : void 0;
    obj.voting_power = message.votingPower !== BigInt(0) ? message.votingPower.toString() : void 0;
    obj.proposer_priority = message.proposerPriority !== BigInt(0) ? message.proposerPriority.toString() : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return Validator.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return Validator.decode(message.value);
  },
  toProto(message) {
    return Validator.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/tendermint.types.Validator",
      value: Validator.encode(message).finish()
    };
  }
};
function createBaseSimpleValidator() {
  return {
    pubKey: void 0,
    votingPower: BigInt(0)
  };
}
const SimpleValidator = {
  typeUrl: "/tendermint.types.SimpleValidator",
  encode(message, writer = BinaryWriter.create()) {
    if (message.pubKey !== void 0) {
      PublicKey.encode(message.pubKey, writer.uint32(10).fork()).ldelim();
    }
    if (message.votingPower !== BigInt(0)) {
      writer.uint32(16).int64(message.votingPower);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseSimpleValidator();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pubKey = PublicKey.decode(reader, reader.uint32());
          break;
        case 2:
          message.votingPower = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseSimpleValidator();
    message.pubKey = object.pubKey !== void 0 && object.pubKey !== null ? PublicKey.fromPartial(object.pubKey) : void 0;
    message.votingPower = object.votingPower !== void 0 && object.votingPower !== null ? BigInt(object.votingPower.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object) {
    const message = createBaseSimpleValidator();
    if (object.pub_key !== void 0 && object.pub_key !== null) {
      message.pubKey = PublicKey.fromAmino(object.pub_key);
    }
    if (object.voting_power !== void 0 && object.voting_power !== null) {
      message.votingPower = BigInt(object.voting_power);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.pub_key = message.pubKey ? PublicKey.toAmino(message.pubKey) : void 0;
    obj.voting_power = message.votingPower !== BigInt(0) ? message.votingPower.toString() : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return SimpleValidator.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return SimpleValidator.decode(message.value);
  },
  toProto(message) {
    return SimpleValidator.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/tendermint.types.SimpleValidator",
      value: SimpleValidator.encode(message).finish()
    };
  }
};
export {
  SimpleValidator,
  Validator,
  ValidatorSet
};
