import { Minter, Params } from "./mint";
import { BinaryReader, BinaryWriter } from "../../../binary";
function createBaseGenesisState() {
  return {
    minter: Minter.fromPartial({}),
    params: Params.fromPartial({}),
    reductionStartedEpoch: BigInt(0)
  };
}
const GenesisState = {
  typeUrl: "/stride.mint.v1beta1.GenesisState",
  encode(message, writer = BinaryWriter.create()) {
    if (message.minter !== void 0) {
      Minter.encode(message.minter, writer.uint32(10).fork()).ldelim();
    }
    if (message.params !== void 0) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    if (message.reductionStartedEpoch !== BigInt(0)) {
      writer.uint32(24).int64(message.reductionStartedEpoch);
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
          message.minter = Minter.decode(reader, reader.uint32());
          break;
        case 2:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 3:
          message.reductionStartedEpoch = reader.int64();
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
    message.minter = object.minter !== void 0 && object.minter !== null ? Minter.fromPartial(object.minter) : void 0;
    message.params = object.params !== void 0 && object.params !== null ? Params.fromPartial(object.params) : void 0;
    message.reductionStartedEpoch = object.reductionStartedEpoch !== void 0 && object.reductionStartedEpoch !== null ? BigInt(object.reductionStartedEpoch.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object) {
    const message = createBaseGenesisState();
    if (object.minter !== void 0 && object.minter !== null) {
      message.minter = Minter.fromAmino(object.minter);
    }
    if (object.params !== void 0 && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    if (object.reduction_started_epoch !== void 0 && object.reduction_started_epoch !== null) {
      message.reductionStartedEpoch = BigInt(object.reduction_started_epoch);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.minter = message.minter ? Minter.toAmino(message.minter) : void 0;
    obj.params = message.params ? Params.toAmino(message.params) : void 0;
    obj.reduction_started_epoch = message.reductionStartedEpoch !== BigInt(0) ? message.reductionStartedEpoch?.toString() : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return GenesisState.decode(message.value);
  },
  toProto(message) {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.mint.v1beta1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
export {
  GenesisState
};
