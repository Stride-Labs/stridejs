import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../helpers";
export interface MinValidatorRequirements {
  commissionRate: number;
  uptime: number;
}
export interface MinValidatorRequirementsSDKType {
  commission_rate: number;
  uptime: number;
}

function createBaseMinValidatorRequirements(): MinValidatorRequirements {
  return {
    commissionRate: 0,
    uptime: 0
  };
}

export const MinValidatorRequirements = {
  encode(message: MinValidatorRequirements, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.commissionRate !== 0) {
      writer.uint32(8).int32(message.commissionRate);
    }

    if (message.uptime !== 0) {
      writer.uint32(16).int32(message.uptime);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MinValidatorRequirements {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMinValidatorRequirements();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.commissionRate = reader.int32();
          break;

        case 2:
          message.uptime = reader.int32();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MinValidatorRequirements>): MinValidatorRequirements {
    const message = createBaseMinValidatorRequirements();
    message.commissionRate = object.commissionRate ?? 0;
    message.uptime = object.uptime ?? 0;
    return message;
  }

};