import { Params, Airdrop, UserAllocation } from "./airdrop";
import { BinaryReader, BinaryWriter } from "../../binary";
function createBaseGenesisState() {
  return {
    params: Params.fromPartial({}),
    airdrops: [],
    userAllocations: []
  };
}
const GenesisState = {
  typeUrl: "/stride.airdrop.GenesisState",
  encode(message, writer = BinaryWriter.create()) {
    if (message.params !== void 0) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.airdrops) {
      Airdrop.encode(v, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.userAllocations) {
      UserAllocation.encode(v, writer.uint32(26).fork()).ldelim();
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
          message.airdrops.push(Airdrop.decode(reader, reader.uint32()));
          break;
        case 3:
          message.userAllocations.push(UserAllocation.decode(reader, reader.uint32()));
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
    message.airdrops = object.airdrops?.map((e) => Airdrop.fromPartial(e)) || [];
    message.userAllocations = object.userAllocations?.map((e) => UserAllocation.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseGenesisState();
    if (object.params !== void 0 && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    message.airdrops = object.airdrops?.map((e) => Airdrop.fromAmino(e)) || [];
    message.userAllocations = object.user_allocations?.map((e) => UserAllocation.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.params = message.params ? Params.toAmino(message.params) : void 0;
    if (message.airdrops) {
      obj.airdrops = message.airdrops.map((e) => e ? Airdrop.toAmino(e) : void 0);
    } else {
      obj.airdrops = message.airdrops;
    }
    if (message.userAllocations) {
      obj.user_allocations = message.userAllocations.map((e) => e ? UserAllocation.toAmino(e) : void 0);
    } else {
      obj.user_allocations = message.userAllocations;
    }
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
      typeUrl: "/stride.airdrop.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
export {
  GenesisState
};
