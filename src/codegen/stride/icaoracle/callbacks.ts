import { Metric, MetricAmino, MetricSDKType } from "./icaoracle";
import { BinaryReader, BinaryWriter } from "../../binary";
/** Callback data for instantiating an oracle */
export interface InstantiateOracleCallback {
  oracleChainId: string;
}
export interface InstantiateOracleCallbackProtoMsg {
  typeUrl: "/stride.icaoracle.InstantiateOracleCallback";
  value: Uint8Array;
}
/** Callback data for instantiating an oracle */
export interface InstantiateOracleCallbackAmino {
  oracle_chain_id?: string;
}
export interface InstantiateOracleCallbackAminoMsg {
  type: "/stride.icaoracle.InstantiateOracleCallback";
  value: InstantiateOracleCallbackAmino;
}
/** Callback data for instantiating an oracle */
export interface InstantiateOracleCallbackSDKType {
  oracle_chain_id: string;
}
/** Callback data for updating a value in the oracle */
export interface UpdateOracleCallback {
  oracleChainId: string;
  metric?: Metric;
}
export interface UpdateOracleCallbackProtoMsg {
  typeUrl: "/stride.icaoracle.UpdateOracleCallback";
  value: Uint8Array;
}
/** Callback data for updating a value in the oracle */
export interface UpdateOracleCallbackAmino {
  oracle_chain_id?: string;
  metric?: MetricAmino;
}
export interface UpdateOracleCallbackAminoMsg {
  type: "/stride.icaoracle.UpdateOracleCallback";
  value: UpdateOracleCallbackAmino;
}
/** Callback data for updating a value in the oracle */
export interface UpdateOracleCallbackSDKType {
  oracle_chain_id: string;
  metric?: MetricSDKType;
}
function createBaseInstantiateOracleCallback(): InstantiateOracleCallback {
  return {
    oracleChainId: ""
  };
}
export const InstantiateOracleCallback = {
  typeUrl: "/stride.icaoracle.InstantiateOracleCallback",
  encode(message: InstantiateOracleCallback, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.oracleChainId !== "") {
      writer.uint32(10).string(message.oracleChainId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): InstantiateOracleCallback {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: Partial<InstantiateOracleCallback>): InstantiateOracleCallback {
    const message = createBaseInstantiateOracleCallback();
    message.oracleChainId = object.oracleChainId ?? "";
    return message;
  },
  fromAmino(object: InstantiateOracleCallbackAmino): InstantiateOracleCallback {
    const message = createBaseInstantiateOracleCallback();
    if (object.oracle_chain_id !== undefined && object.oracle_chain_id !== null) {
      message.oracleChainId = object.oracle_chain_id;
    }
    return message;
  },
  toAmino(message: InstantiateOracleCallback): InstantiateOracleCallbackAmino {
    const obj: any = {};
    obj.oracle_chain_id = message.oracleChainId === "" ? undefined : message.oracleChainId;
    return obj;
  },
  fromAminoMsg(object: InstantiateOracleCallbackAminoMsg): InstantiateOracleCallback {
    return InstantiateOracleCallback.fromAmino(object.value);
  },
  fromProtoMsg(message: InstantiateOracleCallbackProtoMsg): InstantiateOracleCallback {
    return InstantiateOracleCallback.decode(message.value);
  },
  toProto(message: InstantiateOracleCallback): Uint8Array {
    return InstantiateOracleCallback.encode(message).finish();
  },
  toProtoMsg(message: InstantiateOracleCallback): InstantiateOracleCallbackProtoMsg {
    return {
      typeUrl: "/stride.icaoracle.InstantiateOracleCallback",
      value: InstantiateOracleCallback.encode(message).finish()
    };
  }
};
function createBaseUpdateOracleCallback(): UpdateOracleCallback {
  return {
    oracleChainId: "",
    metric: undefined
  };
}
export const UpdateOracleCallback = {
  typeUrl: "/stride.icaoracle.UpdateOracleCallback",
  encode(message: UpdateOracleCallback, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.oracleChainId !== "") {
      writer.uint32(10).string(message.oracleChainId);
    }
    if (message.metric !== undefined) {
      Metric.encode(message.metric, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): UpdateOracleCallback {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: Partial<UpdateOracleCallback>): UpdateOracleCallback {
    const message = createBaseUpdateOracleCallback();
    message.oracleChainId = object.oracleChainId ?? "";
    message.metric = object.metric !== undefined && object.metric !== null ? Metric.fromPartial(object.metric) : undefined;
    return message;
  },
  fromAmino(object: UpdateOracleCallbackAmino): UpdateOracleCallback {
    const message = createBaseUpdateOracleCallback();
    if (object.oracle_chain_id !== undefined && object.oracle_chain_id !== null) {
      message.oracleChainId = object.oracle_chain_id;
    }
    if (object.metric !== undefined && object.metric !== null) {
      message.metric = Metric.fromAmino(object.metric);
    }
    return message;
  },
  toAmino(message: UpdateOracleCallback): UpdateOracleCallbackAmino {
    const obj: any = {};
    obj.oracle_chain_id = message.oracleChainId === "" ? undefined : message.oracleChainId;
    obj.metric = message.metric ? Metric.toAmino(message.metric) : undefined;
    return obj;
  },
  fromAminoMsg(object: UpdateOracleCallbackAminoMsg): UpdateOracleCallback {
    return UpdateOracleCallback.fromAmino(object.value);
  },
  fromProtoMsg(message: UpdateOracleCallbackProtoMsg): UpdateOracleCallback {
    return UpdateOracleCallback.decode(message.value);
  },
  toProto(message: UpdateOracleCallback): Uint8Array {
    return UpdateOracleCallback.encode(message).finish();
  },
  toProtoMsg(message: UpdateOracleCallback): UpdateOracleCallbackProtoMsg {
    return {
      typeUrl: "/stride.icaoracle.UpdateOracleCallback",
      value: UpdateOracleCallback.encode(message).finish()
    };
  }
};