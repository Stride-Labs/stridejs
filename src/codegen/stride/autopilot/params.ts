import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
/**
 * Params defines the parameters for the module.
 * next id: 1
 */

export interface Params {
  /** optionally, turn off each module */
  stakeibcActive: boolean;
  claimActive: boolean;
}
/**
 * Params defines the parameters for the module.
 * next id: 1
 */

export interface ParamsSDKType {
  /** optionally, turn off each module */
  stakeibc_active: boolean;
  claim_active: boolean;
}

function createBaseParams(): Params {
  return {
    stakeibcActive: false,
    claimActive: false
  };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.stakeibcActive === true) {
      writer.uint32(8).bool(message.stakeibcActive);
    }

    if (message.claimActive === true) {
      writer.uint32(16).bool(message.claimActive);
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
          message.stakeibcActive = reader.bool();
          break;

        case 2:
          message.claimActive = reader.bool();
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
    message.stakeibcActive = object.stakeibcActive ?? false;
    message.claimActive = object.claimActive ?? false;
    return message;
  }

};