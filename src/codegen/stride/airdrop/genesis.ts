import { Params, ParamsSDKType, Airdrop, AirdropSDKType, UserAllocation, UserAllocationSDKType } from "./airdrop";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
/** GenesisState defines the airdrop module's genesis state. */

export interface GenesisState {
  /** Module parameters */
  params: Params;
  /** All airdrop config records */

  airdrops: Airdrop[];
  /** All allocation records across all airdrops */

  userAllocations: UserAllocation[];
}
/** GenesisState defines the airdrop module's genesis state. */

export interface GenesisStateSDKType {
  /** Module parameters */
  params: ParamsSDKType;
  /** All airdrop config records */

  airdrops: AirdropSDKType[];
  /** All allocation records across all airdrops */

  user_allocations: UserAllocationSDKType[];
}

function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    airdrops: [],
    userAllocations: []
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.airdrops = object.airdrops?.map(e => Airdrop.fromPartial(e)) || [];
    message.userAllocations = object.userAllocations?.map(e => UserAllocation.fromPartial(e)) || [];
    return message;
  }

};