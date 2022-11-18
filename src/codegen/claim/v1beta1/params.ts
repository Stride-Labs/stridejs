import { Timestamp } from "../../google/protobuf/timestamp";
import { Duration, DurationSDKType } from "../../google/protobuf/duration";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, toTimestamp, fromTimestamp } from "@osmonauts/helpers";
/** Params defines the claim module's parameters. */

export interface Params {
  airdrops: Airdrop[];
}
/** Params defines the claim module's parameters. */

export interface ParamsSDKType {
  airdrops: AirdropSDKType[];
}
export interface Airdrop {
  airdropIdentifier: string;
  /** seconds */

  airdropStartTime: Date;
  /** seconds */

  airdropDuration: Duration;
  /** denom of claimable asset */

  claimDenom: string;
  /** airdrop distribution account */

  distributorAddress: string;
}
export interface AirdropSDKType {
  airdrop_identifier: string;
  /** seconds */

  airdrop_start_time: Date;
  /** seconds */

  airdrop_duration: DurationSDKType;
  /** denom of claimable asset */

  claim_denom: string;
  /** airdrop distribution account */

  distributor_address: string;
}

function createBaseParams(): Params {
  return {
    airdrops: []
  };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.airdrops) {
      Airdrop.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.airdrops.push(Airdrop.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.airdrops = object.airdrops?.map(e => Airdrop.fromPartial(e)) || [];
    return message;
  }

};

function createBaseAirdrop(): Airdrop {
  return {
    airdropIdentifier: "",
    airdropStartTime: undefined,
    airdropDuration: undefined,
    claimDenom: "",
    distributorAddress: ""
  };
}

export const Airdrop = {
  encode(message: Airdrop, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.airdropIdentifier !== "") {
      writer.uint32(10).string(message.airdropIdentifier);
    }

    if (message.airdropStartTime !== undefined) {
      Timestamp.encode(toTimestamp(message.airdropStartTime), writer.uint32(18).fork()).ldelim();
    }

    if (message.airdropDuration !== undefined) {
      Duration.encode(message.airdropDuration, writer.uint32(26).fork()).ldelim();
    }

    if (message.claimDenom !== "") {
      writer.uint32(34).string(message.claimDenom);
    }

    if (message.distributorAddress !== "") {
      writer.uint32(42).string(message.distributorAddress);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Airdrop {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAirdrop();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.airdropIdentifier = reader.string();
          break;

        case 2:
          message.airdropStartTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        case 3:
          message.airdropDuration = Duration.decode(reader, reader.uint32());
          break;

        case 4:
          message.claimDenom = reader.string();
          break;

        case 5:
          message.distributorAddress = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<Airdrop>): Airdrop {
    const message = createBaseAirdrop();
    message.airdropIdentifier = object.airdropIdentifier ?? "";
    message.airdropStartTime = object.airdropStartTime ?? undefined;
    message.airdropDuration = object.airdropDuration ?? undefined;
    message.claimDenom = object.claimDenom ?? "";
    message.distributorAddress = object.distributorAddress ?? "";
    return message;
  }

};