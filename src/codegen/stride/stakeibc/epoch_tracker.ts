import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
export interface EpochTracker {
  epochIdentifier: string;
  epochNumber: Long;
  nextEpochStartTime: Long;
  duration: Long;
}
export interface EpochTrackerSDKType {
  epoch_identifier: string;
  epoch_number: Long;
  next_epoch_start_time: Long;
  duration: Long;
}

function createBaseEpochTracker(): EpochTracker {
  return {
    epochIdentifier: "",
    epochNumber: Long.UZERO,
    nextEpochStartTime: Long.UZERO,
    duration: Long.UZERO
  };
}

export const EpochTracker = {
  encode(message: EpochTracker, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.epochIdentifier !== "") {
      writer.uint32(10).string(message.epochIdentifier);
    }

    if (!message.epochNumber.isZero()) {
      writer.uint32(16).uint64(message.epochNumber);
    }

    if (!message.nextEpochStartTime.isZero()) {
      writer.uint32(24).uint64(message.nextEpochStartTime);
    }

    if (!message.duration.isZero()) {
      writer.uint32(32).uint64(message.duration);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EpochTracker {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEpochTracker();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.epochIdentifier = reader.string();
          break;

        case 2:
          message.epochNumber = (reader.uint64() as Long);
          break;

        case 3:
          message.nextEpochStartTime = (reader.uint64() as Long);
          break;

        case 4:
          message.duration = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<EpochTracker>): EpochTracker {
    const message = createBaseEpochTracker();
    message.epochIdentifier = object.epochIdentifier ?? "";
    message.epochNumber = object.epochNumber !== undefined && object.epochNumber !== null ? Long.fromValue(object.epochNumber) : Long.UZERO;
    message.nextEpochStartTime = object.nextEpochStartTime !== undefined && object.nextEpochStartTime !== null ? Long.fromValue(object.nextEpochStartTime) : Long.UZERO;
    message.duration = object.duration !== undefined && object.duration !== null ? Long.fromValue(object.duration) : Long.UZERO;
    return message;
  }

};