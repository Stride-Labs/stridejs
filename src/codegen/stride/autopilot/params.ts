import { BinaryReader, BinaryWriter } from "../../binary";
/**
 * Params defines the parameters for the module.
 * next id: 1
 */
export interface Params {
  /** optionally, turn off each module */
  stakeibcActive: boolean;
  claimActive: boolean;
}
export interface ParamsProtoMsg {
  typeUrl: "/stride.autopilot.Params";
  value: Uint8Array;
}
/**
 * Params defines the parameters for the module.
 * next id: 1
 */
export interface ParamsAmino {
  /** optionally, turn off each module */
  stakeibc_active?: boolean;
  claim_active?: boolean;
}
export interface ParamsAminoMsg {
  type: "/stride.autopilot.Params";
  value: ParamsAmino;
}
/**
 * Params defines the parameters for the module.
 * next id: 1
 */
export interface ParamsSDKType {
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
  typeUrl: "/stride.autopilot.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.stakeibcActive === true) {
      writer.uint32(8).bool(message.stakeibcActive);
    }
    if (message.claimActive === true) {
      writer.uint32(16).bool(message.claimActive);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.stakeibcActive = object.stakeibcActive ?? false;
    message.claimActive = object.claimActive ?? false;
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.stakeibc_active !== undefined && object.stakeibc_active !== null) {
      message.stakeibcActive = object.stakeibc_active;
    }
    if (object.claim_active !== undefined && object.claim_active !== null) {
      message.claimActive = object.claim_active;
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.stakeibc_active = message.stakeibcActive === false ? undefined : message.stakeibcActive;
    obj.claim_active = message.claimActive === false ? undefined : message.claimActive;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/stride.autopilot.Params",
      value: Params.encode(message).finish()
    };
  }
};