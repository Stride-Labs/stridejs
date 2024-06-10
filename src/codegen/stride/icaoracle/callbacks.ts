import { Metric, MetricSDKType } from "./icaoracle";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
/** Callback data for instantiating an oracle */

export interface InstantiateOracleCallback {
  /** Callback data for instantiating an oracle */
  oracleChainId: string;
}
/** Callback data for instantiating an oracle */

export interface InstantiateOracleCallbackSDKType {
  /** Callback data for instantiating an oracle */
  oracle_chain_id: string;
}
/** Callback data for updating a value in the oracle */

export interface UpdateOracleCallback {
  oracleChainId: string;
  metric: Metric;
}
/** Callback data for updating a value in the oracle */

export interface UpdateOracleCallbackSDKType {
  oracle_chain_id: string;
  metric: MetricSDKType;
}

function createBaseInstantiateOracleCallback(): InstantiateOracleCallback {
  return {
    oracleChainId: ""
  };
}

export const InstantiateOracleCallback = {
  encode(message: InstantiateOracleCallback, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.oracleChainId !== "") {
      writer.uint32(10).string(message.oracleChainId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InstantiateOracleCallback {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInstantiateOracleCallback();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.oracleChainId = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<InstantiateOracleCallback>): InstantiateOracleCallback {
    const message = createBaseInstantiateOracleCallback();
    message.oracleChainId = object.oracleChainId ?? "";
    return message;
  }

};

function createBaseUpdateOracleCallback(): UpdateOracleCallback {
  return {
    oracleChainId: "",
    metric: undefined
  };
}

export const UpdateOracleCallback = {
  encode(message: UpdateOracleCallback, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.oracleChainId !== "") {
      writer.uint32(10).string(message.oracleChainId);
    }

    if (message.metric !== undefined) {
      Metric.encode(message.metric, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateOracleCallback {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateOracleCallback();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.oracleChainId = reader.string();
          break;

        case 2:
          message.metric = Metric.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<UpdateOracleCallback>): UpdateOracleCallback {
    const message = createBaseUpdateOracleCallback();
    message.oracleChainId = object.oracleChainId ?? "";
    message.metric = object.metric !== undefined && object.metric !== null ? Metric.fromPartial(object.metric) : undefined;
    return message;
  }

};