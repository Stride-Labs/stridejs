import { Oracle, OracleAmino, OracleSDKType, Metric, MetricAmino, MetricSDKType } from "./icaoracle";
import { BinaryReader, BinaryWriter } from "../../binary";
/** Params defines the icaoracle module parameters. */
export interface Params {}
export interface ParamsProtoMsg {
  typeUrl: "/stride.icaoracle.Params";
  value: Uint8Array;
}
/** Params defines the icaoracle module parameters. */
export interface ParamsAmino {}
export interface ParamsAminoMsg {
  type: "/stride.icaoracle.Params";
  value: ParamsAmino;
}
/** Params defines the icaoracle module parameters. */
export interface ParamsSDKType {}
/** GenesisState defines the icaoracle module's genesis state. */
export interface GenesisState {
  params: Params;
  oracles: Oracle[];
  metrics: Metric[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/stride.icaoracle.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the icaoracle module's genesis state. */
export interface GenesisStateAmino {
  params?: ParamsAmino;
  oracles?: OracleAmino[];
  metrics?: MetricAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/stride.icaoracle.GenesisState";
  value: GenesisStateAmino;
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
  typeUrl: "/stride.icaoracle.Params",
  encode(_: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(_: Partial<Params>): Params {
    const message = createBaseParams();
    return message;
  },
  fromAmino(_: ParamsAmino): Params {
    const message = createBaseParams();
    return message;
  },
  toAmino(_: Params): ParamsAmino {
    const obj: any = {};
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
      typeUrl: "/stride.icaoracle.Params",
      value: Params.encode(message).finish()
    };
  }
};
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    oracles: [],
    metrics: []
  };
}
export const GenesisState = {
  typeUrl: "/stride.icaoracle.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.oracles = object.oracles?.map(e => Oracle.fromPartial(e)) || [];
    message.metrics = object.metrics?.map(e => Metric.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    message.oracles = object.oracles?.map(e => Oracle.fromAmino(e)) || [];
    message.metrics = object.metrics?.map(e => Metric.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    if (message.oracles) {
      obj.oracles = message.oracles.map(e => e ? Oracle.toAmino(e) : undefined);
    } else {
      obj.oracles = message.oracles;
    }
    if (message.metrics) {
      obj.metrics = message.metrics.map(e => e ? Metric.toAmino(e) : undefined);
    } else {
      obj.metrics = message.metrics;
    }
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/stride.icaoracle.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};