import { Params, ParamsAmino, ParamsSDKType, Airdrop, AirdropAmino, AirdropSDKType, UserAllocation, UserAllocationAmino, UserAllocationSDKType } from "./airdrop";
import { BinaryReader, BinaryWriter } from "../../binary";
/** GenesisState defines the airdrop module's genesis state. */
export interface GenesisState {
  /** Module parameters */
  params: Params;
  /** All airdrop config records */
  airdrops: Airdrop[];
  /** All allocation records across all airdrops */
  userAllocations: UserAllocation[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/stride.airdrop.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the airdrop module's genesis state. */
export interface GenesisStateAmino {
  /** Module parameters */
  params?: ParamsAmino;
  /** All airdrop config records */
  airdrops?: AirdropAmino[];
  /** All allocation records across all airdrops */
  user_allocations?: UserAllocationAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/stride.airdrop.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the airdrop module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  airdrops: AirdropSDKType[];
  user_allocations: UserAllocationSDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    airdrops: [],
    userAllocations: []
  };
}
export const GenesisState = {
  typeUrl: "/stride.airdrop.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.airdrops) {
      Airdrop.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.userAllocations) {
      UserAllocation.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.airdrops = object.airdrops?.map(e => Airdrop.fromPartial(e)) || [];
    message.userAllocations = object.userAllocations?.map(e => UserAllocation.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    message.airdrops = object.airdrops?.map(e => Airdrop.fromAmino(e)) || [];
    message.userAllocations = object.user_allocations?.map(e => UserAllocation.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    if (message.airdrops) {
      obj.airdrops = message.airdrops.map(e => e ? Airdrop.toAmino(e) : undefined);
    } else {
      obj.airdrops = message.airdrops;
    }
    if (message.userAllocations) {
      obj.user_allocations = message.userAllocations.map(e => e ? UserAllocation.toAmino(e) : undefined);
    } else {
      obj.user_allocations = message.userAllocations;
    }
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/stride.airdrop.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};