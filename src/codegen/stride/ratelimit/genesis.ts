import { Params, ParamsSDKType } from "./params";
import { RateLimit, RateLimitSDKType, WhitelistedAddressPair, WhitelistedAddressPairSDKType } from "./ratelimit";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
/** GenesisState defines the ratelimit module's genesis state. */

export interface GenesisState {
  params: Params;
  rateLimits: RateLimit[];
  whitelistedAddressPairs: WhitelistedAddressPair[];
  blacklistedDenoms: string[];
  pendingSendPacketSequenceNumbers: string[];
}
/** GenesisState defines the ratelimit module's genesis state. */

export interface GenesisStateSDKType {
  params: ParamsSDKType;
  rate_limits: RateLimitSDKType[];
  whitelisted_address_pairs: WhitelistedAddressPairSDKType[];
  blacklisted_denoms: string[];
  pending_send_packet_sequence_numbers: string[];
}

function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    rateLimits: [],
    whitelistedAddressPairs: [],
    blacklistedDenoms: [],
    pendingSendPacketSequenceNumbers: []
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.rateLimits) {
      RateLimit.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    for (const v of message.whitelistedAddressPairs) {
      WhitelistedAddressPair.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    for (const v of message.blacklistedDenoms) {
      writer.uint32(34).string(v!);
    }

    for (const v of message.pendingSendPacketSequenceNumbers) {
      writer.uint32(42).string(v!);
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
          message.rateLimits.push(RateLimit.decode(reader, reader.uint32()));
          break;

        case 3:
          message.whitelistedAddressPairs.push(WhitelistedAddressPair.decode(reader, reader.uint32()));
          break;

        case 4:
          message.blacklistedDenoms.push(reader.string());
          break;

        case 5:
          message.pendingSendPacketSequenceNumbers.push(reader.string());
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
    message.rateLimits = object.rateLimits?.map(e => RateLimit.fromPartial(e)) || [];
    message.whitelistedAddressPairs = object.whitelistedAddressPairs?.map(e => WhitelistedAddressPair.fromPartial(e)) || [];
    message.blacklistedDenoms = object.blacklistedDenoms?.map(e => e) || [];
    message.pendingSendPacketSequenceNumbers = object.pendingSendPacketSequenceNumbers?.map(e => e) || [];
    return message;
  }

};