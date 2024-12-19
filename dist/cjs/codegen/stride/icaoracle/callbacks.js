var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var callbacks_exports = {};
__export(callbacks_exports, {
  InstantiateOracleCallback: () => InstantiateOracleCallback,
  UpdateOracleCallback: () => UpdateOracleCallback
});
module.exports = __toCommonJS(callbacks_exports);
var import_icaoracle = require("./icaoracle");
var import_binary = require("../../binary");
function createBaseInstantiateOracleCallback() {
  return {
    oracleChainId: ""
  };
}
const InstantiateOracleCallback = {
  typeUrl: "/stride.icaoracle.InstantiateOracleCallback",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.oracleChainId !== "") {
      writer.uint32(10).string(message.oracleChainId);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
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
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.oracleChainId !== "") {
      writer.uint32(10).string(message.oracleChainId);
    }
    if (message.metric !== void 0) {
      import_icaoracle.Metric.encode(message.metric, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseUpdateOracleCallback();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.oracleChainId = reader.string();
          break;
        case 2:
          message.metric = import_icaoracle.Metric.decode(reader, reader.uint32());
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
    message.metric = object.metric !== void 0 && object.metric !== null ? import_icaoracle.Metric.fromPartial(object.metric) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseUpdateOracleCallback();
    if (object.oracle_chain_id !== void 0 && object.oracle_chain_id !== null) {
      message.oracleChainId = object.oracle_chain_id;
    }
    if (object.metric !== void 0 && object.metric !== null) {
      message.metric = import_icaoracle.Metric.fromAmino(object.metric);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.oracle_chain_id = message.oracleChainId === "" ? void 0 : message.oracleChainId;
    obj.metric = message.metric ? import_icaoracle.Metric.toAmino(message.metric) : void 0;
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  InstantiateOracleCallback,
  UpdateOracleCallback
});
