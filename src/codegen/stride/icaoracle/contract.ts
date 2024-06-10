import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
/** InstanitateOracleContract is the contract-specific instantiate message */

export interface MsgInstantiateOracleContract {
  adminAddress: string;
  transferChannelId: string;
}
/** InstanitateOracleContract is the contract-specific instantiate message */

export interface MsgInstantiateOracleContractSDKType {
  admin_address: string;
  transfer_channel_id: string;
}
/** ExecuteContractPostMetric is the contract-specific metric update message */

export interface MsgExecuteContractPostMetric {
  /** ExecuteContractPostMetric is the contract-specific metric update message */
  postMetric: MsgPostMetric;
}
/** ExecuteContractPostMetric is the contract-specific metric update message */

export interface MsgExecuteContractPostMetricSDKType {
  /** ExecuteContractPostMetric is the contract-specific metric update message */
  post_metric: MsgPostMetricSDKType;
}
/** Body of PostMetric contract message */

export interface MsgPostMetric {
  key: string;
  value: string;
  metricType: string;
  updateTime: Long;
  blockHeight: Long;
  attributes: string;
}
/** Body of PostMetric contract message */

export interface MsgPostMetricSDKType {
  key: string;
  value: string;
  metric_type: string;
  update_time: Long;
  block_height: Long;
  attributes: string;
}

function createBaseMsgInstantiateOracleContract(): MsgInstantiateOracleContract {
  return {
    adminAddress: "",
    transferChannelId: ""
  };
}

export const MsgInstantiateOracleContract = {
  encode(message: MsgInstantiateOracleContract, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.adminAddress !== "") {
      writer.uint32(10).string(message.adminAddress);
    }

    if (message.transferChannelId !== "") {
      writer.uint32(18).string(message.transferChannelId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgInstantiateOracleContract {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgInstantiateOracleContract();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.adminAddress = reader.string();
          break;

        case 2:
          message.transferChannelId = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgInstantiateOracleContract>): MsgInstantiateOracleContract {
    const message = createBaseMsgInstantiateOracleContract();
    message.adminAddress = object.adminAddress ?? "";
    message.transferChannelId = object.transferChannelId ?? "";
    return message;
  }

};

function createBaseMsgExecuteContractPostMetric(): MsgExecuteContractPostMetric {
  return {
    postMetric: undefined
  };
}

export const MsgExecuteContractPostMetric = {
  encode(message: MsgExecuteContractPostMetric, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.postMetric !== undefined) {
      MsgPostMetric.encode(message.postMetric, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgExecuteContractPostMetric {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExecuteContractPostMetric();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.postMetric = MsgPostMetric.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgExecuteContractPostMetric>): MsgExecuteContractPostMetric {
    const message = createBaseMsgExecuteContractPostMetric();
    message.postMetric = object.postMetric !== undefined && object.postMetric !== null ? MsgPostMetric.fromPartial(object.postMetric) : undefined;
    return message;
  }

};

function createBaseMsgPostMetric(): MsgPostMetric {
  return {
    key: "",
    value: "",
    metricType: "",
    updateTime: Long.ZERO,
    blockHeight: Long.ZERO,
    attributes: ""
  };
}

export const MsgPostMetric = {
  encode(message: MsgPostMetric, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgPostMetric {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPostMetric();

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

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgPostMetric>): MsgPostMetric {
    const message = createBaseMsgPostMetric();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    message.metricType = object.metricType ?? "";
    message.updateTime = object.updateTime !== undefined && object.updateTime !== null ? Long.fromValue(object.updateTime) : Long.ZERO;
    message.blockHeight = object.blockHeight !== undefined && object.blockHeight !== null ? Long.fromValue(object.blockHeight) : Long.ZERO;
    message.attributes = object.attributes ?? "";
    return message;
  }

};