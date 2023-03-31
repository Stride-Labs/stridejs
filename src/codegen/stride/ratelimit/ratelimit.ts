import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
export enum PacketDirection {
  PACKET_SEND = 0,
  PACKET_RECV = 1,
  UNRECOGNIZED = -1,
}
export enum PacketDirectionSDKType {
  PACKET_SEND = 0,
  PACKET_RECV = 1,
  UNRECOGNIZED = -1,
}
export function packetDirectionFromJSON(object: any): PacketDirection {
  switch (object) {
    case 0:
    case "PACKET_SEND":
      return PacketDirection.PACKET_SEND;

    case 1:
    case "PACKET_RECV":
      return PacketDirection.PACKET_RECV;

    case -1:
    case "UNRECOGNIZED":
    default:
      return PacketDirection.UNRECOGNIZED;
  }
}
export function packetDirectionToJSON(object: PacketDirection): string {
  switch (object) {
    case PacketDirection.PACKET_SEND:
      return "PACKET_SEND";

    case PacketDirection.PACKET_RECV:
      return "PACKET_RECV";

    default:
      return "UNKNOWN";
  }
}
export interface Path {
  denom: string;
  channelId: string;
}
export interface PathSDKType {
  denom: string;
  channel_id: string;
}
export interface Quota {
  maxPercentSend: string;
  maxPercentRecv: string;
  durationHours: Long;
}
export interface QuotaSDKType {
  max_percent_send: string;
  max_percent_recv: string;
  duration_hours: Long;
}
export interface Flow {
  inflow: string;
  outflow: string;
  channelValue: string;
}
export interface FlowSDKType {
  inflow: string;
  outflow: string;
  channel_value: string;
}
export interface RateLimit {
  path: Path;
  quota: Quota;
  flow: Flow;
}
export interface RateLimitSDKType {
  path: PathSDKType;
  quota: QuotaSDKType;
  flow: FlowSDKType;
}

function createBasePath(): Path {
  return {
    denom: "",
    channelId: ""
  };
}

export const Path = {
  encode(message: Path, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }

    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Path {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePath();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;

        case 2:
          message.channelId = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<Path>): Path {
    const message = createBasePath();
    message.denom = object.denom ?? "";
    message.channelId = object.channelId ?? "";
    return message;
  }

};

function createBaseQuota(): Quota {
  return {
    maxPercentSend: "",
    maxPercentRecv: "",
    durationHours: Long.UZERO
  };
}

export const Quota = {
  encode(message: Quota, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.maxPercentSend !== "") {
      writer.uint32(10).string(message.maxPercentSend);
    }

    if (message.maxPercentRecv !== "") {
      writer.uint32(18).string(message.maxPercentRecv);
    }

    if (!message.durationHours.isZero()) {
      writer.uint32(24).uint64(message.durationHours);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Quota {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuota();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.maxPercentSend = reader.string();
          break;

        case 2:
          message.maxPercentRecv = reader.string();
          break;

        case 3:
          message.durationHours = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<Quota>): Quota {
    const message = createBaseQuota();
    message.maxPercentSend = object.maxPercentSend ?? "";
    message.maxPercentRecv = object.maxPercentRecv ?? "";
    message.durationHours = object.durationHours !== undefined && object.durationHours !== null ? Long.fromValue(object.durationHours) : Long.UZERO;
    return message;
  }

};

function createBaseFlow(): Flow {
  return {
    inflow: "",
    outflow: "",
    channelValue: ""
  };
}

export const Flow = {
  encode(message: Flow, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.inflow !== "") {
      writer.uint32(10).string(message.inflow);
    }

    if (message.outflow !== "") {
      writer.uint32(18).string(message.outflow);
    }

    if (message.channelValue !== "") {
      writer.uint32(26).string(message.channelValue);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Flow {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFlow();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.inflow = reader.string();
          break;

        case 2:
          message.outflow = reader.string();
          break;

        case 3:
          message.channelValue = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<Flow>): Flow {
    const message = createBaseFlow();
    message.inflow = object.inflow ?? "";
    message.outflow = object.outflow ?? "";
    message.channelValue = object.channelValue ?? "";
    return message;
  }

};

function createBaseRateLimit(): RateLimit {
  return {
    path: undefined,
    quota: undefined,
    flow: undefined
  };
}

export const RateLimit = {
  encode(message: RateLimit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.path !== undefined) {
      Path.encode(message.path, writer.uint32(10).fork()).ldelim();
    }

    if (message.quota !== undefined) {
      Quota.encode(message.quota, writer.uint32(18).fork()).ldelim();
    }

    if (message.flow !== undefined) {
      Flow.encode(message.flow, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RateLimit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRateLimit();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.path = Path.decode(reader, reader.uint32());
          break;

        case 2:
          message.quota = Quota.decode(reader, reader.uint32());
          break;

        case 3:
          message.flow = Flow.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<RateLimit>): RateLimit {
    const message = createBaseRateLimit();
    message.path = object.path !== undefined && object.path !== null ? Path.fromPartial(object.path) : undefined;
    message.quota = object.quota !== undefined && object.quota !== null ? Quota.fromPartial(object.quota) : undefined;
    message.flow = object.flow !== undefined && object.flow !== null ? Flow.fromPartial(object.flow) : undefined;
    return message;
  }

};