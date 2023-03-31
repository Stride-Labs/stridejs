import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
export interface AddRateLimitProposal {
  title: string;
  description: string;
  denom: string;
  channelId: string;
  maxPercentSend: string;
  maxPercentRecv: string;
  durationHours: Long;
  deposit: string;
}
export interface AddRateLimitProposalSDKType {
  title: string;
  description: string;
  denom: string;
  channel_id: string;
  max_percent_send: string;
  max_percent_recv: string;
  duration_hours: Long;
  deposit: string;
}
export interface UpdateRateLimitProposal {
  title: string;
  description: string;
  denom: string;
  channelId: string;
  maxPercentSend: string;
  maxPercentRecv: string;
  durationHours: Long;
  deposit: string;
}
export interface UpdateRateLimitProposalSDKType {
  title: string;
  description: string;
  denom: string;
  channel_id: string;
  max_percent_send: string;
  max_percent_recv: string;
  duration_hours: Long;
  deposit: string;
}
export interface RemoveRateLimitProposal {
  title: string;
  description: string;
  denom: string;
  channelId: string;
  deposit: string;
}
export interface RemoveRateLimitProposalSDKType {
  title: string;
  description: string;
  denom: string;
  channel_id: string;
  deposit: string;
}
export interface ResetRateLimitProposal {
  title: string;
  description: string;
  denom: string;
  channelId: string;
  deposit: string;
}
export interface ResetRateLimitProposalSDKType {
  title: string;
  description: string;
  denom: string;
  channel_id: string;
  deposit: string;
}

function createBaseAddRateLimitProposal(): AddRateLimitProposal {
  return {
    title: "",
    description: "",
    denom: "",
    channelId: "",
    maxPercentSend: "",
    maxPercentRecv: "",
    durationHours: Long.UZERO,
    deposit: ""
  };
}

export const AddRateLimitProposal = {
  encode(message: AddRateLimitProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }

    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }

    if (message.denom !== "") {
      writer.uint32(26).string(message.denom);
    }

    if (message.channelId !== "") {
      writer.uint32(34).string(message.channelId);
    }

    if (message.maxPercentSend !== "") {
      writer.uint32(42).string(message.maxPercentSend);
    }

    if (message.maxPercentRecv !== "") {
      writer.uint32(50).string(message.maxPercentRecv);
    }

    if (!message.durationHours.isZero()) {
      writer.uint32(56).uint64(message.durationHours);
    }

    if (message.deposit !== "") {
      writer.uint32(66).string(message.deposit);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddRateLimitProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddRateLimitProposal();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;

        case 2:
          message.description = reader.string();
          break;

        case 3:
          message.denom = reader.string();
          break;

        case 4:
          message.channelId = reader.string();
          break;

        case 5:
          message.maxPercentSend = reader.string();
          break;

        case 6:
          message.maxPercentRecv = reader.string();
          break;

        case 7:
          message.durationHours = (reader.uint64() as Long);
          break;

        case 8:
          message.deposit = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<AddRateLimitProposal>): AddRateLimitProposal {
    const message = createBaseAddRateLimitProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.denom = object.denom ?? "";
    message.channelId = object.channelId ?? "";
    message.maxPercentSend = object.maxPercentSend ?? "";
    message.maxPercentRecv = object.maxPercentRecv ?? "";
    message.durationHours = object.durationHours !== undefined && object.durationHours !== null ? Long.fromValue(object.durationHours) : Long.UZERO;
    message.deposit = object.deposit ?? "";
    return message;
  }

};

function createBaseUpdateRateLimitProposal(): UpdateRateLimitProposal {
  return {
    title: "",
    description: "",
    denom: "",
    channelId: "",
    maxPercentSend: "",
    maxPercentRecv: "",
    durationHours: Long.UZERO,
    deposit: ""
  };
}

export const UpdateRateLimitProposal = {
  encode(message: UpdateRateLimitProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }

    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }

    if (message.denom !== "") {
      writer.uint32(26).string(message.denom);
    }

    if (message.channelId !== "") {
      writer.uint32(34).string(message.channelId);
    }

    if (message.maxPercentSend !== "") {
      writer.uint32(42).string(message.maxPercentSend);
    }

    if (message.maxPercentRecv !== "") {
      writer.uint32(50).string(message.maxPercentRecv);
    }

    if (!message.durationHours.isZero()) {
      writer.uint32(56).uint64(message.durationHours);
    }

    if (message.deposit !== "") {
      writer.uint32(66).string(message.deposit);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateRateLimitProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateRateLimitProposal();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;

        case 2:
          message.description = reader.string();
          break;

        case 3:
          message.denom = reader.string();
          break;

        case 4:
          message.channelId = reader.string();
          break;

        case 5:
          message.maxPercentSend = reader.string();
          break;

        case 6:
          message.maxPercentRecv = reader.string();
          break;

        case 7:
          message.durationHours = (reader.uint64() as Long);
          break;

        case 8:
          message.deposit = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<UpdateRateLimitProposal>): UpdateRateLimitProposal {
    const message = createBaseUpdateRateLimitProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.denom = object.denom ?? "";
    message.channelId = object.channelId ?? "";
    message.maxPercentSend = object.maxPercentSend ?? "";
    message.maxPercentRecv = object.maxPercentRecv ?? "";
    message.durationHours = object.durationHours !== undefined && object.durationHours !== null ? Long.fromValue(object.durationHours) : Long.UZERO;
    message.deposit = object.deposit ?? "";
    return message;
  }

};

function createBaseRemoveRateLimitProposal(): RemoveRateLimitProposal {
  return {
    title: "",
    description: "",
    denom: "",
    channelId: "",
    deposit: ""
  };
}

export const RemoveRateLimitProposal = {
  encode(message: RemoveRateLimitProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }

    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }

    if (message.denom !== "") {
      writer.uint32(26).string(message.denom);
    }

    if (message.channelId !== "") {
      writer.uint32(34).string(message.channelId);
    }

    if (message.deposit !== "") {
      writer.uint32(42).string(message.deposit);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RemoveRateLimitProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRemoveRateLimitProposal();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;

        case 2:
          message.description = reader.string();
          break;

        case 3:
          message.denom = reader.string();
          break;

        case 4:
          message.channelId = reader.string();
          break;

        case 5:
          message.deposit = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<RemoveRateLimitProposal>): RemoveRateLimitProposal {
    const message = createBaseRemoveRateLimitProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.denom = object.denom ?? "";
    message.channelId = object.channelId ?? "";
    message.deposit = object.deposit ?? "";
    return message;
  }

};

function createBaseResetRateLimitProposal(): ResetRateLimitProposal {
  return {
    title: "",
    description: "",
    denom: "",
    channelId: "",
    deposit: ""
  };
}

export const ResetRateLimitProposal = {
  encode(message: ResetRateLimitProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }

    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }

    if (message.denom !== "") {
      writer.uint32(26).string(message.denom);
    }

    if (message.channelId !== "") {
      writer.uint32(34).string(message.channelId);
    }

    if (message.deposit !== "") {
      writer.uint32(42).string(message.deposit);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResetRateLimitProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResetRateLimitProposal();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;

        case 2:
          message.description = reader.string();
          break;

        case 3:
          message.denom = reader.string();
          break;

        case 4:
          message.channelId = reader.string();
          break;

        case 5:
          message.deposit = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<ResetRateLimitProposal>): ResetRateLimitProposal {
    const message = createBaseResetRateLimitProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.denom = object.denom ?? "";
    message.channelId = object.channelId ?? "";
    message.deposit = object.deposit ?? "";
    return message;
  }

};