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
var query_exports = {};
__export(query_exports, {
  ConfigRequest: () => ConfigRequest,
  ConfigResponse: () => ConfigResponse,
  StatusRequest: () => StatusRequest,
  StatusResponse: () => StatusResponse
});
module.exports = __toCommonJS(query_exports);
var import_timestamp = require("../../../../google/protobuf/timestamp");
var import_binary = require("../../../../binary");
var import_helpers = require("../../../../helpers");
function createBaseConfigRequest() {
  return {};
}
const ConfigRequest = {
  typeUrl: "/cosmos.base.node.v1beta1.ConfigRequest",
  encode(_, writer = import_binary.BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseConfigRequest();
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
    const message = createBaseConfigRequest();
    return message;
  },
  fromAmino(_) {
    const message = createBaseConfigRequest();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return ConfigRequest.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/ConfigRequest",
      value: ConfigRequest.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return ConfigRequest.decode(message.value);
  },
  toProto(message) {
    return ConfigRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.base.node.v1beta1.ConfigRequest",
      value: ConfigRequest.encode(message).finish()
    };
  }
};
function createBaseConfigResponse() {
  return {
    minimumGasPrice: "",
    pruningKeepRecent: "",
    pruningInterval: "",
    haltHeight: BigInt(0)
  };
}
const ConfigResponse = {
  typeUrl: "/cosmos.base.node.v1beta1.ConfigResponse",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.minimumGasPrice !== "") {
      writer.uint32(10).string(message.minimumGasPrice);
    }
    if (message.pruningKeepRecent !== "") {
      writer.uint32(18).string(message.pruningKeepRecent);
    }
    if (message.pruningInterval !== "") {
      writer.uint32(26).string(message.pruningInterval);
    }
    if (message.haltHeight !== BigInt(0)) {
      writer.uint32(32).uint64(message.haltHeight);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseConfigResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.minimumGasPrice = reader.string();
          break;
        case 2:
          message.pruningKeepRecent = reader.string();
          break;
        case 3:
          message.pruningInterval = reader.string();
          break;
        case 4:
          message.haltHeight = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseConfigResponse();
    message.minimumGasPrice = object.minimumGasPrice ?? "";
    message.pruningKeepRecent = object.pruningKeepRecent ?? "";
    message.pruningInterval = object.pruningInterval ?? "";
    message.haltHeight = object.haltHeight !== void 0 && object.haltHeight !== null ? BigInt(object.haltHeight.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object) {
    const message = createBaseConfigResponse();
    if (object.minimum_gas_price !== void 0 && object.minimum_gas_price !== null) {
      message.minimumGasPrice = object.minimum_gas_price;
    }
    if (object.pruning_keep_recent !== void 0 && object.pruning_keep_recent !== null) {
      message.pruningKeepRecent = object.pruning_keep_recent;
    }
    if (object.pruning_interval !== void 0 && object.pruning_interval !== null) {
      message.pruningInterval = object.pruning_interval;
    }
    if (object.halt_height !== void 0 && object.halt_height !== null) {
      message.haltHeight = BigInt(object.halt_height);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.minimum_gas_price = message.minimumGasPrice === "" ? void 0 : message.minimumGasPrice;
    obj.pruning_keep_recent = message.pruningKeepRecent === "" ? void 0 : message.pruningKeepRecent;
    obj.pruning_interval = message.pruningInterval === "" ? void 0 : message.pruningInterval;
    obj.halt_height = message.haltHeight !== BigInt(0) ? message.haltHeight?.toString() : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return ConfigResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/ConfigResponse",
      value: ConfigResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return ConfigResponse.decode(message.value);
  },
  toProto(message) {
    return ConfigResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.base.node.v1beta1.ConfigResponse",
      value: ConfigResponse.encode(message).finish()
    };
  }
};
function createBaseStatusRequest() {
  return {};
}
const StatusRequest = {
  typeUrl: "/cosmos.base.node.v1beta1.StatusRequest",
  encode(_, writer = import_binary.BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseStatusRequest();
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
    const message = createBaseStatusRequest();
    return message;
  },
  fromAmino(_) {
    const message = createBaseStatusRequest();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return StatusRequest.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/StatusRequest",
      value: StatusRequest.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return StatusRequest.decode(message.value);
  },
  toProto(message) {
    return StatusRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.base.node.v1beta1.StatusRequest",
      value: StatusRequest.encode(message).finish()
    };
  }
};
function createBaseStatusResponse() {
  return {
    earliestStoreHeight: BigInt(0),
    height: BigInt(0),
    timestamp: void 0,
    appHash: new Uint8Array(),
    validatorHash: new Uint8Array()
  };
}
const StatusResponse = {
  typeUrl: "/cosmos.base.node.v1beta1.StatusResponse",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.earliestStoreHeight !== BigInt(0)) {
      writer.uint32(8).uint64(message.earliestStoreHeight);
    }
    if (message.height !== BigInt(0)) {
      writer.uint32(16).uint64(message.height);
    }
    if (message.timestamp !== void 0) {
      import_timestamp.Timestamp.encode((0, import_helpers.toTimestamp)(message.timestamp), writer.uint32(26).fork()).ldelim();
    }
    if (message.appHash.length !== 0) {
      writer.uint32(34).bytes(message.appHash);
    }
    if (message.validatorHash.length !== 0) {
      writer.uint32(42).bytes(message.validatorHash);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseStatusResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.earliestStoreHeight = reader.uint64();
          break;
        case 2:
          message.height = reader.uint64();
          break;
        case 3:
          message.timestamp = (0, import_helpers.fromTimestamp)(import_timestamp.Timestamp.decode(reader, reader.uint32()));
          break;
        case 4:
          message.appHash = reader.bytes();
          break;
        case 5:
          message.validatorHash = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseStatusResponse();
    message.earliestStoreHeight = object.earliestStoreHeight !== void 0 && object.earliestStoreHeight !== null ? BigInt(object.earliestStoreHeight.toString()) : BigInt(0);
    message.height = object.height !== void 0 && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    message.timestamp = object.timestamp ?? void 0;
    message.appHash = object.appHash ?? new Uint8Array();
    message.validatorHash = object.validatorHash ?? new Uint8Array();
    return message;
  },
  fromAmino(object) {
    const message = createBaseStatusResponse();
    if (object.earliest_store_height !== void 0 && object.earliest_store_height !== null) {
      message.earliestStoreHeight = BigInt(object.earliest_store_height);
    }
    if (object.height !== void 0 && object.height !== null) {
      message.height = BigInt(object.height);
    }
    if (object.timestamp !== void 0 && object.timestamp !== null) {
      message.timestamp = (0, import_helpers.fromTimestamp)(import_timestamp.Timestamp.fromAmino(object.timestamp));
    }
    if (object.app_hash !== void 0 && object.app_hash !== null) {
      message.appHash = (0, import_helpers.bytesFromBase64)(object.app_hash);
    }
    if (object.validator_hash !== void 0 && object.validator_hash !== null) {
      message.validatorHash = (0, import_helpers.bytesFromBase64)(object.validator_hash);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.earliest_store_height = message.earliestStoreHeight !== BigInt(0) ? message.earliestStoreHeight?.toString() : void 0;
    obj.height = message.height !== BigInt(0) ? message.height?.toString() : void 0;
    obj.timestamp = message.timestamp ? import_timestamp.Timestamp.toAmino((0, import_helpers.toTimestamp)(message.timestamp)) : void 0;
    obj.app_hash = message.appHash ? (0, import_helpers.base64FromBytes)(message.appHash) : void 0;
    obj.validator_hash = message.validatorHash ? (0, import_helpers.base64FromBytes)(message.validatorHash) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return StatusResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/StatusResponse",
      value: StatusResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return StatusResponse.decode(message.value);
  },
  toProto(message) {
    return StatusResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.base.node.v1beta1.StatusResponse",
      value: StatusResponse.encode(message).finish()
    };
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ConfigRequest,
  ConfigResponse,
  StatusRequest,
  StatusResponse
});
