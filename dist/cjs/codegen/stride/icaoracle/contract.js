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
var contract_exports = {};
__export(contract_exports, {
  MsgExecuteContractPostMetric: () => MsgExecuteContractPostMetric,
  MsgInstantiateOracleContract: () => MsgInstantiateOracleContract,
  MsgPostMetric: () => MsgPostMetric
});
module.exports = __toCommonJS(contract_exports);
var import_binary = require("../../binary");
function createBaseMsgInstantiateOracleContract() {
  return {
    adminAddress: "",
    transferChannelId: ""
  };
}
const MsgInstantiateOracleContract = {
  typeUrl: "/stride.icaoracle.MsgInstantiateOracleContract",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.adminAddress !== "") {
      writer.uint32(10).string(message.adminAddress);
    }
    if (message.transferChannelId !== "") {
      writer.uint32(18).string(message.transferChannelId);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgInstantiateOracleContract();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.adminAddress = reader.string();
          break;
        case 2:
          message.transferChannelId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgInstantiateOracleContract();
    message.adminAddress = object.adminAddress ?? "";
    message.transferChannelId = object.transferChannelId ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgInstantiateOracleContract();
    if (object.admin_address !== void 0 && object.admin_address !== null) {
      message.adminAddress = object.admin_address;
    }
    if (object.transfer_channel_id !== void 0 && object.transfer_channel_id !== null) {
      message.transferChannelId = object.transfer_channel_id;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.admin_address = message.adminAddress === "" ? void 0 : message.adminAddress;
    obj.transfer_channel_id = message.transferChannelId === "" ? void 0 : message.transferChannelId;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgInstantiateOracleContract.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return MsgInstantiateOracleContract.decode(message.value);
  },
  toProto(message) {
    return MsgInstantiateOracleContract.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.icaoracle.MsgInstantiateOracleContract",
      value: MsgInstantiateOracleContract.encode(message).finish()
    };
  }
};
function createBaseMsgExecuteContractPostMetric() {
  return {
    postMetric: void 0
  };
}
const MsgExecuteContractPostMetric = {
  typeUrl: "/stride.icaoracle.MsgExecuteContractPostMetric",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.postMetric !== void 0) {
      MsgPostMetric.encode(message.postMetric, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgExecuteContractPostMetric();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.postMetric = MsgPostMetric.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgExecuteContractPostMetric();
    message.postMetric = object.postMetric !== void 0 && object.postMetric !== null ? MsgPostMetric.fromPartial(object.postMetric) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgExecuteContractPostMetric();
    if (object.post_metric !== void 0 && object.post_metric !== null) {
      message.postMetric = MsgPostMetric.fromAmino(object.post_metric);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.post_metric = message.postMetric ? MsgPostMetric.toAmino(message.postMetric) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgExecuteContractPostMetric.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return MsgExecuteContractPostMetric.decode(message.value);
  },
  toProto(message) {
    return MsgExecuteContractPostMetric.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.icaoracle.MsgExecuteContractPostMetric",
      value: MsgExecuteContractPostMetric.encode(message).finish()
    };
  }
};
function createBaseMsgPostMetric() {
  return {
    key: "",
    value: "",
    metricType: "",
    updateTime: BigInt(0),
    blockHeight: BigInt(0),
    attributes: ""
  };
}
const MsgPostMetric = {
  typeUrl: "/stride.icaoracle.MsgPostMetric",
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
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgPostMetric();
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
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgPostMetric();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    message.metricType = object.metricType ?? "";
    message.updateTime = object.updateTime !== void 0 && object.updateTime !== null ? BigInt(object.updateTime.toString()) : BigInt(0);
    message.blockHeight = object.blockHeight !== void 0 && object.blockHeight !== null ? BigInt(object.blockHeight.toString()) : BigInt(0);
    message.attributes = object.attributes ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgPostMetric();
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
    return obj;
  },
  fromAminoMsg(object) {
    return MsgPostMetric.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return MsgPostMetric.decode(message.value);
  },
  toProto(message) {
    return MsgPostMetric.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.icaoracle.MsgPostMetric",
      value: MsgPostMetric.encode(message).finish()
    };
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  MsgExecuteContractPostMetric,
  MsgInstantiateOracleContract,
  MsgPostMetric
});
