import { Metric } from "./icaoracle";
import { BinaryReader, BinaryWriter } from "../../binary";
function createBaseInstantiateOracleCallback() {
  return {
    oracleChainId: ""
  };
}
const InstantiateOracleCallback = {
  typeUrl: "/stride.icaoracle.InstantiateOracleCallback",
  encode(message, writer = BinaryWriter.create()) {
    if (message.oracleChainId !== "") {
      writer.uint32(10).string(message.oracleChainId);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
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
  fromPartial(object) {
    const message = createBaseInstantiateOracleCallback();
    message.oracleChainId = object.oracleChainId ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseInstantiateOracleCallback();
    if (object.oracle_chain_id !== void 0 && object.oracle_chain_id !== null) {
      message.oracleChainId = object.oracle_chain_id;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.oracle_chain_id = message.oracleChainId === "" ? void 0 : message.oracleChainId;
    return obj;
  },
  fromAminoMsg(object) {
    return InstantiateOracleCallback.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return InstantiateOracleCallback.decode(message.value);
  },
  toProto(message) {
    return InstantiateOracleCallback.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.icaoracle.InstantiateOracleCallback",
      value: InstantiateOracleCallback.encode(message).finish()
    };
  }
};
function createBaseUpdateOracleCallback() {
  return {
    oracleChainId: "",
    metric: void 0
  };
}
const UpdateOracleCallback = {
  typeUrl: "/stride.icaoracle.UpdateOracleCallback",
  encode(message, writer = BinaryWriter.create()) {
    if (message.oracleChainId !== "") {
      writer.uint32(10).string(message.oracleChainId);
    }
    if (message.metric !== void 0) {
      Metric.encode(message.metric, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
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
  fromPartial(object) {
    const message = createBaseUpdateOracleCallback();
    message.oracleChainId = object.oracleChainId ?? "";
    message.metric = object.metric !== void 0 && object.metric !== null ? Metric.fromPartial(object.metric) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseUpdateOracleCallback();
    if (object.oracle_chain_id !== void 0 && object.oracle_chain_id !== null) {
      message.oracleChainId = object.oracle_chain_id;
    }
    if (object.metric !== void 0 && object.metric !== null) {
      message.metric = Metric.fromAmino(object.metric);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.oracle_chain_id = message.oracleChainId === "" ? void 0 : message.oracleChainId;
    obj.metric = message.metric ? Metric.toAmino(message.metric) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return UpdateOracleCallback.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return UpdateOracleCallback.decode(message.value);
  },
  toProto(message) {
    return UpdateOracleCallback.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.icaoracle.UpdateOracleCallback",
      value: UpdateOracleCallback.encode(message).finish()
    };
  }
};
export {
  InstantiateOracleCallback,
  UpdateOracleCallback
};
