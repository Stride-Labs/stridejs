import { BinaryReader, BinaryWriter } from "../../binary";
/** MetricStatus indicates whether the Metric update ICA has been sent */
export enum MetricStatus {
  METRIC_STATUS_UNSPECIFIED = 0,
  METRIC_STATUS_QUEUED = 1,
  METRIC_STATUS_IN_PROGRESS = 2,
  UNRECOGNIZED = -1,
}
export const MetricStatusSDKType = MetricStatus;
export const MetricStatusAmino = MetricStatus;
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
    case MetricStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
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
export interface OracleProtoMsg {
  typeUrl: "/stride.icaoracle.Oracle";
  value: Uint8Array;
}
/** Oracle structure stores context about the CW oracle sitting a different chain */
export interface OracleAmino {
  chain_id?: string;
  connection_id?: string;
  channel_id?: string;
  port_id?: string;
  ica_address?: string;
  contract_address?: string;
  active?: boolean;
}
export interface OracleAminoMsg {
  type: "/stride.icaoracle.Oracle";
  value: OracleAmino;
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
  updateTime: bigint;
  blockHeight: bigint;
  attributes: string;
  destinationOracle: string;
  status: MetricStatus;
}
export interface MetricProtoMsg {
  typeUrl: "/stride.icaoracle.Metric";
  value: Uint8Array;
}
/**
 * Metric structure stores a generic metric using a key value structure
 * along with additional context
 */
export interface MetricAmino {
  key?: string;
  value?: string;
  metric_type?: string;
  update_time?: string;
  block_height?: string;
  attributes?: string;
  destination_oracle?: string;
  status?: MetricStatus;
}
export interface MetricAminoMsg {
  type: "/stride.icaoracle.Metric";
  value: MetricAmino;
}
/**
 * Metric structure stores a generic metric using a key value structure
 * along with additional context
 */
export interface MetricSDKType {
  key: string;
  value: string;
  metric_type: string;
  update_time: bigint;
  block_height: bigint;
  attributes: string;
  destination_oracle: string;
  status: MetricStatus;
}
/** Attributes associated with a RedemptionRate metric update */
export interface RedemptionRateAttributes {
  sttokenDenom: string;
}
export interface RedemptionRateAttributesProtoMsg {
  typeUrl: "/stride.icaoracle.RedemptionRateAttributes";
  value: Uint8Array;
}
/** Attributes associated with a RedemptionRate metric update */
export interface RedemptionRateAttributesAmino {
  sttoken_denom?: string;
}
export interface RedemptionRateAttributesAminoMsg {
  type: "/stride.icaoracle.RedemptionRateAttributes";
  value: RedemptionRateAttributesAmino;
}
/** Attributes associated with a RedemptionRate metric update */
export interface RedemptionRateAttributesSDKType {
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
  typeUrl: "/stride.icaoracle.Oracle",
  encode(message: Oracle, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number): Oracle {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: Partial<Oracle>): Oracle {
    const message = createBaseOracle();
    message.chainId = object.chainId ?? "";
    message.connectionId = object.connectionId ?? "";
    message.channelId = object.channelId ?? "";
    message.portId = object.portId ?? "";
    message.icaAddress = object.icaAddress ?? "";
    message.contractAddress = object.contractAddress ?? "";
    message.active = object.active ?? false;
    return message;
  },
  fromAmino(object: OracleAmino): Oracle {
    const message = createBaseOracle();
    if (object.chain_id !== undefined && object.chain_id !== null) {
      message.chainId = object.chain_id;
    }
    if (object.connection_id !== undefined && object.connection_id !== null) {
      message.connectionId = object.connection_id;
    }
    if (object.channel_id !== undefined && object.channel_id !== null) {
      message.channelId = object.channel_id;
    }
    if (object.port_id !== undefined && object.port_id !== null) {
      message.portId = object.port_id;
    }
    if (object.ica_address !== undefined && object.ica_address !== null) {
      message.icaAddress = object.ica_address;
    }
    if (object.contract_address !== undefined && object.contract_address !== null) {
      message.contractAddress = object.contract_address;
    }
    if (object.active !== undefined && object.active !== null) {
      message.active = object.active;
    }
    return message;
  },
  toAmino(message: Oracle): OracleAmino {
    const obj: any = {};
    obj.chain_id = message.chainId === "" ? undefined : message.chainId;
    obj.connection_id = message.connectionId === "" ? undefined : message.connectionId;
    obj.channel_id = message.channelId === "" ? undefined : message.channelId;
    obj.port_id = message.portId === "" ? undefined : message.portId;
    obj.ica_address = message.icaAddress === "" ? undefined : message.icaAddress;
    obj.contract_address = message.contractAddress === "" ? undefined : message.contractAddress;
    obj.active = message.active === false ? undefined : message.active;
    return obj;
  },
  fromAminoMsg(object: OracleAminoMsg): Oracle {
    return Oracle.fromAmino(object.value);
  },
  fromProtoMsg(message: OracleProtoMsg): Oracle {
    return Oracle.decode(message.value);
  },
  toProto(message: Oracle): Uint8Array {
    return Oracle.encode(message).finish();
  },
  toProtoMsg(message: Oracle): OracleProtoMsg {
    return {
      typeUrl: "/stride.icaoracle.Oracle",
      value: Oracle.encode(message).finish()
    };
  }
};
function createBaseMetric(): Metric {
  return {
    key: "",
    value: "",
    metricType: "",
    updateTime: BigInt(0),
    blockHeight: BigInt(0),
    attributes: "",
    destinationOracle: "",
    status: 0
  };
}
export const Metric = {
  typeUrl: "/stride.icaoracle.Metric",
  encode(message: Metric, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    if (message.metricType !== "") {
      writer.uint32(26).string(message.metricType);
    }
    if (message.updateTime !== BigInt(0)) {
      writer.uint32(32).int64(message.updateTime);
    }
    if (message.blockHeight !== BigInt(0)) {
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
  decode(input: BinaryReader | Uint8Array, length?: number): Metric {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
          message.updateTime = reader.int64();
          break;
        case 5:
          message.blockHeight = reader.int64();
          break;
        case 6:
          message.attributes = reader.string();
          break;
        case 7:
          message.destinationOracle = reader.string();
          break;
        case 8:
          message.status = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Metric>): Metric {
    const message = createBaseMetric();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    message.metricType = object.metricType ?? "";
    message.updateTime = object.updateTime !== undefined && object.updateTime !== null ? BigInt(object.updateTime.toString()) : BigInt(0);
    message.blockHeight = object.blockHeight !== undefined && object.blockHeight !== null ? BigInt(object.blockHeight.toString()) : BigInt(0);
    message.attributes = object.attributes ?? "";
    message.destinationOracle = object.destinationOracle ?? "";
    message.status = object.status ?? 0;
    return message;
  },
  fromAmino(object: MetricAmino): Metric {
    const message = createBaseMetric();
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    }
    if (object.metric_type !== undefined && object.metric_type !== null) {
      message.metricType = object.metric_type;
    }
    if (object.update_time !== undefined && object.update_time !== null) {
      message.updateTime = BigInt(object.update_time);
    }
    if (object.block_height !== undefined && object.block_height !== null) {
      message.blockHeight = BigInt(object.block_height);
    }
    if (object.attributes !== undefined && object.attributes !== null) {
      message.attributes = object.attributes;
    }
    if (object.destination_oracle !== undefined && object.destination_oracle !== null) {
      message.destinationOracle = object.destination_oracle;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    return message;
  },
  toAmino(message: Metric): MetricAmino {
    const obj: any = {};
    obj.key = message.key === "" ? undefined : message.key;
    obj.value = message.value === "" ? undefined : message.value;
    obj.metric_type = message.metricType === "" ? undefined : message.metricType;
    obj.update_time = message.updateTime !== BigInt(0) ? message.updateTime?.toString() : undefined;
    obj.block_height = message.blockHeight !== BigInt(0) ? message.blockHeight?.toString() : undefined;
    obj.attributes = message.attributes === "" ? undefined : message.attributes;
    obj.destination_oracle = message.destinationOracle === "" ? undefined : message.destinationOracle;
    obj.status = message.status === 0 ? undefined : message.status;
    return obj;
  },
  fromAminoMsg(object: MetricAminoMsg): Metric {
    return Metric.fromAmino(object.value);
  },
  fromProtoMsg(message: MetricProtoMsg): Metric {
    return Metric.decode(message.value);
  },
  toProto(message: Metric): Uint8Array {
    return Metric.encode(message).finish();
  },
  toProtoMsg(message: Metric): MetricProtoMsg {
    return {
      typeUrl: "/stride.icaoracle.Metric",
      value: Metric.encode(message).finish()
    };
  }
};
function createBaseRedemptionRateAttributes(): RedemptionRateAttributes {
  return {
    sttokenDenom: ""
  };
}
export const RedemptionRateAttributes = {
  typeUrl: "/stride.icaoracle.RedemptionRateAttributes",
  encode(message: RedemptionRateAttributes, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sttokenDenom !== "") {
      writer.uint32(10).string(message.sttokenDenom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RedemptionRateAttributes {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: Partial<RedemptionRateAttributes>): RedemptionRateAttributes {
    const message = createBaseRedemptionRateAttributes();
    message.sttokenDenom = object.sttokenDenom ?? "";
    return message;
  },
  fromAmino(object: RedemptionRateAttributesAmino): RedemptionRateAttributes {
    const message = createBaseRedemptionRateAttributes();
    if (object.sttoken_denom !== undefined && object.sttoken_denom !== null) {
      message.sttokenDenom = object.sttoken_denom;
    }
    return message;
  },
  toAmino(message: RedemptionRateAttributes): RedemptionRateAttributesAmino {
    const obj: any = {};
    obj.sttoken_denom = message.sttokenDenom === "" ? undefined : message.sttokenDenom;
    return obj;
  },
  fromAminoMsg(object: RedemptionRateAttributesAminoMsg): RedemptionRateAttributes {
    return RedemptionRateAttributes.fromAmino(object.value);
  },
  fromProtoMsg(message: RedemptionRateAttributesProtoMsg): RedemptionRateAttributes {
    return RedemptionRateAttributes.decode(message.value);
  },
  toProto(message: RedemptionRateAttributes): Uint8Array {
    return RedemptionRateAttributes.encode(message).finish();
  },
  toProtoMsg(message: RedemptionRateAttributes): RedemptionRateAttributesProtoMsg {
    return {
      typeUrl: "/stride.icaoracle.RedemptionRateAttributes",
      value: RedemptionRateAttributes.encode(message).finish()
    };
  }
};