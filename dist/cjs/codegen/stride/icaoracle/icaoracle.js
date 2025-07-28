"use strict";
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
var icaoracle_exports = {};
__export(icaoracle_exports, {
  Metric: () => Metric,
  MetricStatus: () => MetricStatus,
  MetricStatusAmino: () => MetricStatusAmino,
  MetricStatusSDKType: () => MetricStatusSDKType,
  Oracle: () => Oracle,
  RedemptionRateAttributes: () => RedemptionRateAttributes,
  metricStatusFromJSON: () => metricStatusFromJSON,
  metricStatusToJSON: () => metricStatusToJSON
});
module.exports = __toCommonJS(icaoracle_exports);
var import_binary = require("../../binary");
var MetricStatus = /* @__PURE__ */ ((MetricStatus2) => {
  MetricStatus2[MetricStatus2["METRIC_STATUS_UNSPECIFIED"] = 0] = "METRIC_STATUS_UNSPECIFIED";
  MetricStatus2[MetricStatus2["METRIC_STATUS_QUEUED"] = 1] = "METRIC_STATUS_QUEUED";
  MetricStatus2[MetricStatus2["METRIC_STATUS_IN_PROGRESS"] = 2] = "METRIC_STATUS_IN_PROGRESS";
  MetricStatus2[MetricStatus2["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return MetricStatus2;
})(MetricStatus || {});
const MetricStatusSDKType = MetricStatus;
const MetricStatusAmino = MetricStatus;
function metricStatusFromJSON(object) {
  switch (object) {
    case 0:
    case "METRIC_STATUS_UNSPECIFIED":
      return 0 /* METRIC_STATUS_UNSPECIFIED */;
    case 1:
    case "METRIC_STATUS_QUEUED":
      return 1 /* METRIC_STATUS_QUEUED */;
    case 2:
    case "METRIC_STATUS_IN_PROGRESS":
      return 2 /* METRIC_STATUS_IN_PROGRESS */;
    case -1:
    case "UNRECOGNIZED":
    default:
      return -1 /* UNRECOGNIZED */;
  }
}
function metricStatusToJSON(object) {
  switch (object) {
    case 0 /* METRIC_STATUS_UNSPECIFIED */:
      return "METRIC_STATUS_UNSPECIFIED";
    case 1 /* METRIC_STATUS_QUEUED */:
      return "METRIC_STATUS_QUEUED";
    case 2 /* METRIC_STATUS_IN_PROGRESS */:
      return "METRIC_STATUS_IN_PROGRESS";
    case -1 /* UNRECOGNIZED */:
    default:
      return "UNRECOGNIZED";
  }
}
function createBaseOracle() {
  return {
    chainId: "",
    connectionId: "",
    channelId: "",
    portId: "",
    icaAddress: "",
    contractAddress: "",
    active: false
  };
}
const Oracle = {
  typeUrl: "/stride.icaoracle.Oracle",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }
    if (message.connectionId !== "") {
      writer.uint32(18).string(message.connectionId);
    }
    if (message.channelId !== "") {
      writer.uint32(26).string(message.channelId);
    }
    if (message.portId !== "") {
      writer.uint32(34).string(message.portId);
    }
    if (message.icaAddress !== "") {
      writer.uint32(42).string(message.icaAddress);
    }
    if (message.contractAddress !== "") {
      writer.uint32(50).string(message.contractAddress);
    }
    if (message.active === true) {
      writer.uint32(56).bool(message.active);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseOracle();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chainId = reader.string();
          break;
        case 2:
          message.connectionId = reader.string();
          break;
        case 3:
          message.channelId = reader.string();
          break;
        case 4:
          message.portId = reader.string();
          break;
        case 5:
          message.icaAddress = reader.string();
          break;
        case 6:
          message.contractAddress = reader.string();
          break;
        case 7:
          message.active = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseOracle();
    message.chainId = object.chainId ?? "";
    message.connectionId = object.connectionId ?? "";
    message.channelId = object.channelId ?? "";
    message.portId = object.portId ?? "";
    message.icaAddress = object.icaAddress ?? "";
    message.contractAddress = object.contractAddress ?? "";
    message.active = object.active ?? false;
    return message;
  },
  fromAmino(object) {
    const message = createBaseOracle();
    if (object.chain_id !== void 0 && object.chain_id !== null) {
      message.chainId = object.chain_id;
    }
    if (object.connection_id !== void 0 && object.connection_id !== null) {
      message.connectionId = object.connection_id;
    }
    if (object.channel_id !== void 0 && object.channel_id !== null) {
      message.channelId = object.channel_id;
    }
    if (object.port_id !== void 0 && object.port_id !== null) {
      message.portId = object.port_id;
    }
    if (object.ica_address !== void 0 && object.ica_address !== null) {
      message.icaAddress = object.ica_address;
    }
    if (object.contract_address !== void 0 && object.contract_address !== null) {
      message.contractAddress = object.contract_address;
    }
    if (object.active !== void 0 && object.active !== null) {
      message.active = object.active;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.chain_id = message.chainId === "" ? void 0 : message.chainId;
    obj.connection_id = message.connectionId === "" ? void 0 : message.connectionId;
    obj.channel_id = message.channelId === "" ? void 0 : message.channelId;
    obj.port_id = message.portId === "" ? void 0 : message.portId;
    obj.ica_address = message.icaAddress === "" ? void 0 : message.icaAddress;
    obj.contract_address = message.contractAddress === "" ? void 0 : message.contractAddress;
    obj.active = message.active === false ? void 0 : message.active;
    return obj;
  },
  fromAminoMsg(object) {
    return Oracle.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return Oracle.decode(message.value);
  },
  toProto(message) {
    return Oracle.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.icaoracle.Oracle",
      value: Oracle.encode(message).finish()
    };
  }
};
function createBaseMetric() {
  return {
    key: "",
    value: "",
    metricType: "",
    updateTime: BigInt(0),
    blockHeight: BigInt(0),
    attributes: "",
    destinationOracle: "",
    status: 0
  };
}
const Metric = {
  typeUrl: "/stride.icaoracle.Metric",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    if (message.metricType !== "") {
      writer.uint32(26).string(message.metricType);
    }
    if (message.updateTime !== BigInt(0)) {
      writer.uint32(32).int64(message.updateTime);
    }
    if (message.blockHeight !== BigInt(0)) {
      writer.uint32(40).int64(message.blockHeight);
    }
    if (message.attributes !== "") {
      writer.uint32(50).string(message.attributes);
    }
    if (message.destinationOracle !== "") {
      writer.uint32(58).string(message.destinationOracle);
    }
    if (message.status !== 0) {
      writer.uint32(64).int32(message.status);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMetric();
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
          message.updateTime = reader.int64();
          break;
        case 5:
          message.blockHeight = reader.int64();
          break;
        case 6:
          message.attributes = reader.string();
          break;
        case 7:
          message.destinationOracle = reader.string();
          break;
        case 8:
          message.status = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMetric();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    message.metricType = object.metricType ?? "";
    message.updateTime = object.updateTime !== void 0 && object.updateTime !== null ? BigInt(object.updateTime.toString()) : BigInt(0);
    message.blockHeight = object.blockHeight !== void 0 && object.blockHeight !== null ? BigInt(object.blockHeight.toString()) : BigInt(0);
    message.attributes = object.attributes ?? "";
    message.destinationOracle = object.destinationOracle ?? "";
    message.status = object.status ?? 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseMetric();
    if (object.key !== void 0 && object.key !== null) {
      message.key = object.key;
    }
    if (object.value !== void 0 && object.value !== null) {
      message.value = object.value;
    }
    if (object.metric_type !== void 0 && object.metric_type !== null) {
      message.metricType = object.metric_type;
    }
    if (object.update_time !== void 0 && object.update_time !== null) {
      message.updateTime = BigInt(object.update_time);
    }
    if (object.block_height !== void 0 && object.block_height !== null) {
      message.blockHeight = BigInt(object.block_height);
    }
    if (object.attributes !== void 0 && object.attributes !== null) {
      message.attributes = object.attributes;
    }
    if (object.destination_oracle !== void 0 && object.destination_oracle !== null) {
      message.destinationOracle = object.destination_oracle;
    }
    if (object.status !== void 0 && object.status !== null) {
      message.status = object.status;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.key = message.key === "" ? void 0 : message.key;
    obj.value = message.value === "" ? void 0 : message.value;
    obj.metric_type = message.metricType === "" ? void 0 : message.metricType;
    obj.update_time = message.updateTime !== BigInt(0) ? message.updateTime?.toString() : void 0;
    obj.block_height = message.blockHeight !== BigInt(0) ? message.blockHeight?.toString() : void 0;
    obj.attributes = message.attributes === "" ? void 0 : message.attributes;
    obj.destination_oracle = message.destinationOracle === "" ? void 0 : message.destinationOracle;
    obj.status = message.status === 0 ? void 0 : message.status;
    return obj;
  },
  fromAminoMsg(object) {
    return Metric.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return Metric.decode(message.value);
  },
  toProto(message) {
    return Metric.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.icaoracle.Metric",
      value: Metric.encode(message).finish()
    };
  }
};
function createBaseRedemptionRateAttributes() {
  return {
    sttokenDenom: ""
  };
}
const RedemptionRateAttributes = {
  typeUrl: "/stride.icaoracle.RedemptionRateAttributes",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.sttokenDenom !== "") {
      writer.uint32(10).string(message.sttokenDenom);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseRedemptionRateAttributes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sttokenDenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseRedemptionRateAttributes();
    message.sttokenDenom = object.sttokenDenom ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseRedemptionRateAttributes();
    if (object.sttoken_denom !== void 0 && object.sttoken_denom !== null) {
      message.sttokenDenom = object.sttoken_denom;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.sttoken_denom = message.sttokenDenom === "" ? void 0 : message.sttokenDenom;
    return obj;
  },
  fromAminoMsg(object) {
    return RedemptionRateAttributes.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return RedemptionRateAttributes.decode(message.value);
  },
  toProto(message) {
    return RedemptionRateAttributes.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.icaoracle.RedemptionRateAttributes",
      value: RedemptionRateAttributes.encode(message).finish()
    };
  }
};
// Removed broken CommonJS export annotation
