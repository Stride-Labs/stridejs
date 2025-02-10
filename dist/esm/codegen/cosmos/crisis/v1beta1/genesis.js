import { Coin } from "../../base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
function createBaseGenesisState() {
  return {
    constantFee: Coin.fromPartial({})
  };
}
const GenesisState = {
  typeUrl: "/cosmos.crisis.v1beta1.GenesisState",
  encode(message, writer = BinaryWriter.create()) {
    if (message.constantFee !== void 0) {
      Coin.encode(message.constantFee, writer.uint32(26).fork()).ldelim();
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
        case 3:
          message.constantFee = Coin.decode(reader, reader.uint32());
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
    message.constantFee = object.constantFee !== void 0 && object.constantFee !== null ? Coin.fromPartial(object.constantFee) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseGenesisState();
    if (object.constant_fee !== void 0 && object.constant_fee !== null) {
      message.constantFee = Coin.fromAmino(object.constant_fee);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.constant_fee = message.constantFee ? Coin.toAmino(message.constantFee) : Coin.toAmino(Coin.fromPartial({}));
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
      typeUrl: "/cosmos.crisis.v1beta1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
export {
  GenesisState
};
