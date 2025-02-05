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
var genesis_exports = {};
__export(genesis_exports, {
  DataPoint: () => DataPoint,
  GenesisState: () => GenesisState,
  Query: () => Query,
  TimeoutPolicy: () => TimeoutPolicy,
  TimeoutPolicyAmino: () => TimeoutPolicyAmino,
  TimeoutPolicySDKType: () => TimeoutPolicySDKType,
  timeoutPolicyFromJSON: () => timeoutPolicyFromJSON,
  timeoutPolicyToJSON: () => timeoutPolicyToJSON
});
module.exports = __toCommonJS(genesis_exports);
var import_duration = require("../../../google/protobuf/duration");
var import_binary = require("../../../binary");
var import_helpers = require("../../../helpers");
var TimeoutPolicy = /* @__PURE__ */ ((TimeoutPolicy2) => {
  TimeoutPolicy2[TimeoutPolicy2["REJECT_QUERY_RESPONSE"] = 0] = "REJECT_QUERY_RESPONSE";
  TimeoutPolicy2[TimeoutPolicy2["RETRY_QUERY_REQUEST"] = 1] = "RETRY_QUERY_REQUEST";
  TimeoutPolicy2[TimeoutPolicy2["EXECUTE_QUERY_CALLBACK"] = 2] = "EXECUTE_QUERY_CALLBACK";
  TimeoutPolicy2[TimeoutPolicy2["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return TimeoutPolicy2;
})(TimeoutPolicy || {});
const TimeoutPolicySDKType = TimeoutPolicy;
const TimeoutPolicyAmino = TimeoutPolicy;
function timeoutPolicyFromJSON(object) {
  switch (object) {
    case 0:
    case "REJECT_QUERY_RESPONSE":
      return 0 /* REJECT_QUERY_RESPONSE */;
    case 1:
    case "RETRY_QUERY_REQUEST":
      return 1 /* RETRY_QUERY_REQUEST */;
    case 2:
    case "EXECUTE_QUERY_CALLBACK":
      return 2 /* EXECUTE_QUERY_CALLBACK */;
    case -1:
    case "UNRECOGNIZED":
    default:
      return -1 /* UNRECOGNIZED */;
  }
}
function timeoutPolicyToJSON(object) {
  switch (object) {
    case 0 /* REJECT_QUERY_RESPONSE */:
      return "REJECT_QUERY_RESPONSE";
    case 1 /* RETRY_QUERY_REQUEST */:
      return "RETRY_QUERY_REQUEST";
    case 2 /* EXECUTE_QUERY_CALLBACK */:
      return "EXECUTE_QUERY_CALLBACK";
    case -1 /* UNRECOGNIZED */:
    default:
      return "UNRECOGNIZED";
  }
}
function createBaseQuery() {
  return {
    id: "",
    connectionId: "",
    chainId: "",
    queryType: "",
    requestData: new Uint8Array(),
    callbackModule: "",
    callbackId: "",
    callbackData: new Uint8Array(),
    timeoutPolicy: 0,
    timeoutDuration: import_duration.Duration.fromPartial({}),
    timeoutTimestamp: BigInt(0),
    requestSent: false,
    submissionHeight: BigInt(0)
  };
}
const Query = {
  typeUrl: "/stride.interchainquery.v1.Query",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.connectionId !== "") {
      writer.uint32(18).string(message.connectionId);
    }
    if (message.chainId !== "") {
      writer.uint32(26).string(message.chainId);
    }
    if (message.queryType !== "") {
      writer.uint32(34).string(message.queryType);
    }
    if (message.requestData.length !== 0) {
      writer.uint32(42).bytes(message.requestData);
    }
    if (message.callbackModule !== "") {
      writer.uint32(106).string(message.callbackModule);
    }
    if (message.callbackId !== "") {
      writer.uint32(66).string(message.callbackId);
    }
    if (message.callbackData.length !== 0) {
      writer.uint32(98).bytes(message.callbackData);
    }
    if (message.timeoutPolicy !== 0) {
      writer.uint32(120).int32(message.timeoutPolicy);
    }
    if (message.timeoutDuration !== void 0) {
      import_duration.Duration.encode(message.timeoutDuration, writer.uint32(114).fork()).ldelim();
    }
    if (message.timeoutTimestamp !== BigInt(0)) {
      writer.uint32(72).uint64(message.timeoutTimestamp);
    }
    if (message.requestSent === true) {
      writer.uint32(88).bool(message.requestSent);
    }
    if (message.submissionHeight !== BigInt(0)) {
      writer.uint32(128).uint64(message.submissionHeight);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQuery();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.connectionId = reader.string();
          break;
        case 3:
          message.chainId = reader.string();
          break;
        case 4:
          message.queryType = reader.string();
          break;
        case 5:
          message.requestData = reader.bytes();
          break;
        case 13:
          message.callbackModule = reader.string();
          break;
        case 8:
          message.callbackId = reader.string();
          break;
        case 12:
          message.callbackData = reader.bytes();
          break;
        case 15:
          message.timeoutPolicy = reader.int32();
          break;
        case 14:
          message.timeoutDuration = import_duration.Duration.decode(reader, reader.uint32());
          break;
        case 9:
          message.timeoutTimestamp = reader.uint64();
          break;
        case 11:
          message.requestSent = reader.bool();
          break;
        case 16:
          message.submissionHeight = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQuery();
    message.id = object.id ?? "";
    message.connectionId = object.connectionId ?? "";
    message.chainId = object.chainId ?? "";
    message.queryType = object.queryType ?? "";
    message.requestData = object.requestData ?? new Uint8Array();
    message.callbackModule = object.callbackModule ?? "";
    message.callbackId = object.callbackId ?? "";
    message.callbackData = object.callbackData ?? new Uint8Array();
    message.timeoutPolicy = object.timeoutPolicy ?? 0;
    message.timeoutDuration = object.timeoutDuration !== void 0 && object.timeoutDuration !== null ? import_duration.Duration.fromPartial(object.timeoutDuration) : void 0;
    message.timeoutTimestamp = object.timeoutTimestamp !== void 0 && object.timeoutTimestamp !== null ? BigInt(object.timeoutTimestamp.toString()) : BigInt(0);
    message.requestSent = object.requestSent ?? false;
    message.submissionHeight = object.submissionHeight !== void 0 && object.submissionHeight !== null ? BigInt(object.submissionHeight.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object) {
    const message = createBaseQuery();
    if (object.id !== void 0 && object.id !== null) {
      message.id = object.id;
    }
    if (object.connection_id !== void 0 && object.connection_id !== null) {
      message.connectionId = object.connection_id;
    }
    if (object.chain_id !== void 0 && object.chain_id !== null) {
      message.chainId = object.chain_id;
    }
    if (object.query_type !== void 0 && object.query_type !== null) {
      message.queryType = object.query_type;
    }
    if (object.request_data !== void 0 && object.request_data !== null) {
      message.requestData = (0, import_helpers.bytesFromBase64)(object.request_data);
    }
    if (object.callback_module !== void 0 && object.callback_module !== null) {
      message.callbackModule = object.callback_module;
    }
    if (object.callback_id !== void 0 && object.callback_id !== null) {
      message.callbackId = object.callback_id;
    }
    if (object.callback_data !== void 0 && object.callback_data !== null) {
      message.callbackData = (0, import_helpers.bytesFromBase64)(object.callback_data);
    }
    if (object.timeout_policy !== void 0 && object.timeout_policy !== null) {
      message.timeoutPolicy = object.timeout_policy;
    }
    if (object.timeout_duration !== void 0 && object.timeout_duration !== null) {
      message.timeoutDuration = import_duration.Duration.fromAmino(object.timeout_duration);
    }
    if (object.timeout_timestamp !== void 0 && object.timeout_timestamp !== null) {
      message.timeoutTimestamp = BigInt(object.timeout_timestamp);
    }
    if (object.request_sent !== void 0 && object.request_sent !== null) {
      message.requestSent = object.request_sent;
    }
    if (object.submission_height !== void 0 && object.submission_height !== null) {
      message.submissionHeight = BigInt(object.submission_height);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.id = message.id === "" ? void 0 : message.id;
    obj.connection_id = message.connectionId === "" ? void 0 : message.connectionId;
    obj.chain_id = message.chainId === "" ? void 0 : message.chainId;
    obj.query_type = message.queryType === "" ? void 0 : message.queryType;
    obj.request_data = message.requestData ? (0, import_helpers.base64FromBytes)(message.requestData) : void 0;
    obj.callback_module = message.callbackModule === "" ? void 0 : message.callbackModule;
    obj.callback_id = message.callbackId === "" ? void 0 : message.callbackId;
    obj.callback_data = message.callbackData ? (0, import_helpers.base64FromBytes)(message.callbackData) : void 0;
    obj.timeout_policy = message.timeoutPolicy === 0 ? void 0 : message.timeoutPolicy;
    obj.timeout_duration = message.timeoutDuration ? import_duration.Duration.toAmino(message.timeoutDuration) : void 0;
    obj.timeout_timestamp = message.timeoutTimestamp !== BigInt(0) ? message.timeoutTimestamp?.toString() : void 0;
    obj.request_sent = message.requestSent === false ? void 0 : message.requestSent;
    obj.submission_height = message.submissionHeight !== BigInt(0) ? message.submissionHeight?.toString() : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return Query.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return Query.decode(message.value);
  },
  toProto(message) {
    return Query.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.interchainquery.v1.Query",
      value: Query.encode(message).finish()
    };
  }
};
function createBaseDataPoint() {
  return {
    id: "",
    remoteHeight: "",
    localHeight: "",
    value: new Uint8Array()
  };
}
const DataPoint = {
  typeUrl: "/stride.interchainquery.v1.DataPoint",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.remoteHeight !== "") {
      writer.uint32(18).string(message.remoteHeight);
    }
    if (message.localHeight !== "") {
      writer.uint32(26).string(message.localHeight);
    }
    if (message.value.length !== 0) {
      writer.uint32(34).bytes(message.value);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseDataPoint();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.remoteHeight = reader.string();
          break;
        case 3:
          message.localHeight = reader.string();
          break;
        case 4:
          message.value = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseDataPoint();
    message.id = object.id ?? "";
    message.remoteHeight = object.remoteHeight ?? "";
    message.localHeight = object.localHeight ?? "";
    message.value = object.value ?? new Uint8Array();
    return message;
  },
  fromAmino(object) {
    const message = createBaseDataPoint();
    if (object.id !== void 0 && object.id !== null) {
      message.id = object.id;
    }
    if (object.remote_height !== void 0 && object.remote_height !== null) {
      message.remoteHeight = object.remote_height;
    }
    if (object.local_height !== void 0 && object.local_height !== null) {
      message.localHeight = object.local_height;
    }
    if (object.value !== void 0 && object.value !== null) {
      message.value = (0, import_helpers.bytesFromBase64)(object.value);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.id = message.id === "" ? void 0 : message.id;
    obj.remote_height = message.remoteHeight === "" ? void 0 : message.remoteHeight;
    obj.local_height = message.localHeight === "" ? void 0 : message.localHeight;
    obj.value = message.value ? (0, import_helpers.base64FromBytes)(message.value) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return DataPoint.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return DataPoint.decode(message.value);
  },
  toProto(message) {
    return DataPoint.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.interchainquery.v1.DataPoint",
      value: DataPoint.encode(message).finish()
    };
  }
};
function createBaseGenesisState() {
  return {
    queries: []
  };
}
const GenesisState = {
  typeUrl: "/stride.interchainquery.v1.GenesisState",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    for (const v of message.queries) {
      Query.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.queries.push(Query.decode(reader, reader.uint32()));
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
    message.queries = object.queries?.map((e) => Query.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseGenesisState();
    message.queries = object.queries?.map((e) => Query.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.queries) {
      obj.queries = message.queries.map((e) => e ? Query.toAmino(e) : void 0);
    } else {
      obj.queries = message.queries;
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
      typeUrl: "/stride.interchainquery.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  DataPoint,
  GenesisState,
  Query,
  TimeoutPolicy,
  TimeoutPolicyAmino,
  TimeoutPolicySDKType,
  timeoutPolicyFromJSON,
  timeoutPolicyToJSON
});
