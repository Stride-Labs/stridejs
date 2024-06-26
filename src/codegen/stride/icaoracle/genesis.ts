import { Oracle, OracleSDKType, Metric, MetricSDKType } from "./icaoracle";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
/** Params defines the icaoracle module parameters. */

export interface Params {}
/** Params defines the icaoracle module parameters. */

export interface ParamsSDKType {}
/** GenesisState defines the icaoracle module's genesis state. */

export interface GenesisState {
  params: Params;
  oracles: Oracle[];
  metrics: Metric[];
}
/** GenesisState defines the icaoracle module's genesis state. */

export interface GenesisStateSDKType {
  params: ParamsSDKType;
  oracles: OracleSDKType[];
  metrics: MetricSDKType[];
}

function createBaseParams(): Params {
  return {};
}

export const Params = {
  encode(_: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(_: DeepPartial<Params>): Params {
    const message = createBaseParams();
    return message;
  }

};

function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    oracles: [],
    metrics: []
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.oracles) {
      Oracle.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    for (const v of message.metrics) {
      Metric.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;

        case 2:
          message.oracles.push(Oracle.decode(reader, reader.uint32()));
          break;

        case 3:
          message.metrics.push(Metric.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.oracles = object.oracles?.map(e => Oracle.fromPartial(e)) || [];
    message.metrics = object.metrics?.map(e => Metric.fromPartial(e)) || [];
    return message;
  }

};