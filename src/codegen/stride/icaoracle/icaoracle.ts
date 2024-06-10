import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
/** MetricStatus indicates whether the Metric update ICA has been sent */

export enum MetricStatus {
  METRIC_STATUS_UNSPECIFIED = 0,
  METRIC_STATUS_QUEUED = 1,
  METRIC_STATUS_IN_PROGRESS = 2,
  UNRECOGNIZED = -1,
}
/** MetricStatus indicates whether the Metric update ICA has been sent */

export enum MetricStatusSDKType {
  METRIC_STATUS_UNSPECIFIED = 0,
  METRIC_STATUS_QUEUED = 1,
  METRIC_STATUS_IN_PROGRESS = 2,
  UNRECOGNIZED = -1,
}
export function metricStatusFromJSON(object: any): MetricStatus {
  switch (object) {
    case 0:
    case "METRIC_STATUS_UNSPECIFIED":
      return MetricStatus.METRIC_STATUS_UNSPECIFIED;

    case 1:
    case "METRIC_STATUS_QUEUED":
      return MetricStatus.METRIC_STATUS_QUEUED;

    case 2:
    case "METRIC_STATUS_IN_PROGRESS":
      return MetricStatus.METRIC_STATUS_IN_PROGRESS;

    case -1:
    case "UNRECOGNIZED":
    default:
      return MetricStatus.UNRECOGNIZED;
  }
}
export function metricStatusToJSON(object: MetricStatus): string {
  switch (object) {
    case MetricStatus.METRIC_STATUS_UNSPECIFIED:
      return "METRIC_STATUS_UNSPECIFIED";

    case MetricStatus.METRIC_STATUS_QUEUED:
      return "METRIC_STATUS_QUEUED";

    case MetricStatus.METRIC_STATUS_IN_PROGRESS:
      return "METRIC_STATUS_IN_PROGRESS";

    default:
      return "UNKNOWN";
  }
}
/** Oracle structure stores context about the CW oracle sitting a different chain */

export interface Oracle {
  chainId: string;
  connectionId: string;
  channelId: string;
  portId: string;
  icaAddress: string;
  contractAddress: string;
  active: boolean;
}
/** Oracle structure stores context about the CW oracle sitting a different chain */

export interface OracleSDKType {
  chain_id: string;
  connection_id: string;
  channel_id: string;
  port_id: string;
  ica_address: string;
  contract_address: string;
  active: boolean;
}
/**
 * Metric structure stores a generic metric using a key value structure
 * along with additional context
 */

export interface Metric {
  key: string;
  value: string;
  metricType: string;
  updateTime: Long;
  blockHeight: Long;
  attributes: string;
  destinationOracle: string;
  status: MetricStatus;
}
/**
 * Metric structure stores a generic metric using a key value structure
 * along with additional context
 */

export interface MetricSDKType {
  key: string;
  value: string;
  metric_type: string;
  update_time: Long;
  block_height: Long;
  attributes: string;
  destination_oracle: string;
  status: MetricStatusSDKType;
}
/** Attributes associated with a RedemptionRate metric update */

export interface RedemptionRateAttributes {
  /** Attributes associated with a RedemptionRate metric update */
  sttokenDenom: string;
}
/** Attributes associated with a RedemptionRate metric update */

export interface RedemptionRateAttributesSDKType {
  /** Attributes associated with a RedemptionRate metric update */
  sttoken_denom: string;
}

function createBaseOracle(): Oracle {
  return {
    chainId: "",
    connectionId: "",
    channelId: "",
    portId: "",
    icaAddress: "",
    contractAddress: "",
    active: false
  };
}

export const Oracle = {
  encode(message: Oracle, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }

    if (message.connectionId !== "") {
      writer.uint32(18).string(message.connectionId);
    }

    if (message.channelId !== "") {
      writer.uint32(26).string(message.channelId);
    }

    if (message.portId !== "") {
      writer.uint32(34).string(message.portId);
    }

    if (message.icaAddress !== "") {
      writer.uint32(42).string(message.icaAddress);
    }

    if (message.contractAddress !== "") {
      writer.uint32(50).string(message.contractAddress);
    }

    if (message.active === true) {
      writer.uint32(56).bool(message.active);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Oracle {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOracle();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.chainId = reader.string();
          break;

        case 2:
          message.connectionId = reader.string();
          break;

        case 3:
          message.channelId = reader.string();
          break;

        case 4:
          message.portId = reader.string();
          break;

        case 5:
          message.icaAddress = reader.string();
          break;

        case 6:
          message.contractAddress = reader.string();
          break;

        case 7:
          message.active = reader.bool();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<Oracle>): Oracle {
    const message = createBaseOracle();
    message.chainId = object.chainId ?? "";
    message.connectionId = object.connectionId ?? "";
    message.channelId = object.channelId ?? "";
    message.portId = object.portId ?? "";
    message.icaAddress = object.icaAddress ?? "";
    message.contractAddress = object.contractAddress ?? "";
    message.active = object.active ?? false;
    return message;
  }

};

function createBaseMetric(): Metric {
  return {
    key: "",
    value: "",
    metricType: "",
    updateTime: Long.ZERO,
    blockHeight: Long.ZERO,
    attributes: "",
    destinationOracle: "",
    status: 0
  };
}

export const Metric = {
  encode(message: Metric, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }

    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }

    if (message.metricType !== "") {
      writer.uint32(26).string(message.metricType);
    }

    if (!message.updateTime.isZero()) {
      writer.uint32(32).int64(message.updateTime);
    }

    if (!message.blockHeight.isZero()) {
      writer.uint32(40).int64(message.blockHeight);
    }

    if (message.attributes !== "") {
      writer.uint32(50).string(message.attributes);
    }

    if (message.destinationOracle !== "") {
      writer.uint32(58).string(message.destinationOracle);
    }

    if (message.status !== 0) {
      writer.uint32(64).int32(message.status);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Metric {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMetric();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;

        case 2:
          message.value = reader.string();
          break;

        case 3:
          message.metricType = reader.string();
          break;

        case 4:
          message.updateTime = (reader.int64() as Long);
          break;

        case 5:
          message.blockHeight = (reader.int64() as Long);
          break;

        case 6:
          message.attributes = reader.string();
          break;

        case 7:
          message.destinationOracle = reader.string();
          break;

        case 8:
          message.status = (reader.int32() as any);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<Metric>): Metric {
    const message = createBaseMetric();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    message.metricType = object.metricType ?? "";
    message.updateTime = object.updateTime !== undefined && object.updateTime !== null ? Long.fromValue(object.updateTime) : Long.ZERO;
    message.blockHeight = object.blockHeight !== undefined && object.blockHeight !== null ? Long.fromValue(object.blockHeight) : Long.ZERO;
    message.attributes = object.attributes ?? "";
    message.destinationOracle = object.destinationOracle ?? "";
    message.status = object.status ?? 0;
    return message;
  }

};

function createBaseRedemptionRateAttributes(): RedemptionRateAttributes {
  return {
    sttokenDenom: ""
  };
}

export const RedemptionRateAttributes = {
  encode(message: RedemptionRateAttributes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sttokenDenom !== "") {
      writer.uint32(10).string(message.sttokenDenom);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RedemptionRateAttributes {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRedemptionRateAttributes();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sttokenDenom = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<RedemptionRateAttributes>): RedemptionRateAttributes {
    const message = createBaseRedemptionRateAttributes();
    message.sttokenDenom = object.sttokenDenom ?? "";
    return message;
  }

};