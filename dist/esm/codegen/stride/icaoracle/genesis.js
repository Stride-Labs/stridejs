import { Oracle, Metric } from "./icaoracle";
import { BinaryReader, BinaryWriter } from "../../binary";
function createBaseParams() {
  return {};
}
const Params = {
  typeUrl: "/stride.icaoracle.Params",
  encode(_, writer = BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
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
  fromPartial(_) {
    const message = createBaseParams();
    return message;
  },
  fromAmino(_) {
    const message = createBaseParams();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return Params.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return Params.decode(message.value);
  },
  toProto(message) {
    return Params.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.icaoracle.Params",
      value: Params.encode(message).finish()
    };
  }
};
function createBaseGenesisState() {
  return {
    params: Params.fromPartial({}),
    oracles: [],
    metrics: []
  };
}
const GenesisState = {
  typeUrl: "/stride.icaoracle.GenesisState",
  encode(message, writer = BinaryWriter.create()) {
    if (message.params !== void 0) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.oracles) {
      Oracle.encode(v, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.metrics) {
      Metric.encode(v, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
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
  fromPartial(object) {
    const message = createBaseGenesisState();
    message.params = object.params !== void 0 && object.params !== null ? Params.fromPartial(object.params) : void 0;
    message.oracles = object.oracles?.map((e) => Oracle.fromPartial(e)) || [];
    message.metrics = object.metrics?.map((e) => Metric.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseGenesisState();
    if (object.params !== void 0 && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    message.oracles = object.oracles?.map((e) => Oracle.fromAmino(e)) || [];
    message.metrics = object.metrics?.map((e) => Metric.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.params = message.params ? Params.toAmino(message.params) : void 0;
    if (message.oracles) {
      obj.oracles = message.oracles.map((e) => e ? Oracle.toAmino(e) : void 0);
    } else {
      obj.oracles = message.oracles;
    }
    if (message.metrics) {
      obj.metrics = message.metrics.map((e) => e ? Metric.toAmino(e) : void 0);
    } else {
      obj.metrics = message.metrics;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return GenesisState.decode(message.value);
  },
  toProto(message) {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.icaoracle.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
export {
  GenesisState,
  Params
};
