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
var authz_exports = {};
__export(authz_exports, {
  Allocation: () => Allocation,
  TransferAuthorization: () => TransferAuthorization
});
module.exports = __toCommonJS(authz_exports);
var import_coin = require("../../../../cosmos/base/v1beta1/coin");
var import_binary = require("../../../../binary");
function createBaseAllocation() {
  return {
    sourcePort: "",
    sourceChannel: "",
    spendLimit: [],
    allowList: [],
    allowedPacketData: []
  };
}
const Allocation = {
  typeUrl: "/ibc.applications.transfer.v1.Allocation",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.sourcePort !== "") {
      writer.uint32(10).string(message.sourcePort);
    }
    if (message.sourceChannel !== "") {
      writer.uint32(18).string(message.sourceChannel);
    }
    for (const v of message.spendLimit) {
      import_coin.Coin.encode(v, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.allowList) {
      writer.uint32(34).string(v);
    }
    for (const v of message.allowedPacketData) {
      writer.uint32(42).string(v);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseAllocation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sourcePort = reader.string();
          break;
        case 2:
          message.sourceChannel = reader.string();
          break;
        case 3:
          message.spendLimit.push(import_coin.Coin.decode(reader, reader.uint32()));
          break;
        case 4:
          message.allowList.push(reader.string());
          break;
        case 5:
          message.allowedPacketData.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseAllocation();
    message.sourcePort = object.sourcePort ?? "";
    message.sourceChannel = object.sourceChannel ?? "";
    message.spendLimit = object.spendLimit?.map((e) => import_coin.Coin.fromPartial(e)) || [];
    message.allowList = object.allowList?.map((e) => e) || [];
    message.allowedPacketData = object.allowedPacketData?.map((e) => e) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseAllocation();
    if (object.source_port !== void 0 && object.source_port !== null) {
      message.sourcePort = object.source_port;
    }
    if (object.source_channel !== void 0 && object.source_channel !== null) {
      message.sourceChannel = object.source_channel;
    }
    message.spendLimit = object.spend_limit?.map((e) => import_coin.Coin.fromAmino(e)) || [];
    message.allowList = object.allow_list?.map((e) => e) || [];
    message.allowedPacketData = object.allowed_packet_data?.map((e) => e) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.source_port = message.sourcePort === "" ? void 0 : message.sourcePort;
    obj.source_channel = message.sourceChannel === "" ? void 0 : message.sourceChannel;
    if (message.spendLimit) {
      obj.spend_limit = message.spendLimit.map((e) => e ? import_coin.Coin.toAmino(e) : void 0);
    } else {
      obj.spend_limit = message.spendLimit;
    }
    if (message.allowList) {
      obj.allow_list = message.allowList.map((e) => e);
    } else {
      obj.allow_list = message.allowList;
    }
    if (message.allowedPacketData) {
      obj.allowed_packet_data = message.allowedPacketData.map((e) => e);
    } else {
      obj.allowed_packet_data = message.allowedPacketData;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return Allocation.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/Allocation",
      value: Allocation.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return Allocation.decode(message.value);
  },
  toProto(message) {
    return Allocation.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.applications.transfer.v1.Allocation",
      value: Allocation.encode(message).finish()
    };
  }
};
function createBaseTransferAuthorization() {
  return {
    $typeUrl: "/ibc.applications.transfer.v1.TransferAuthorization",
    allocations: []
  };
}
const TransferAuthorization = {
  typeUrl: "/ibc.applications.transfer.v1.TransferAuthorization",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    for (const v of message.allocations) {
      Allocation.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseTransferAuthorization();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.allocations.push(Allocation.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseTransferAuthorization();
    message.allocations = object.allocations?.map((e) => Allocation.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseTransferAuthorization();
    message.allocations = object.allocations?.map((e) => Allocation.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.allocations) {
      obj.allocations = message.allocations.map((e) => e ? Allocation.toAmino(e) : void 0);
    } else {
      obj.allocations = message.allocations;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return TransferAuthorization.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/TransferAuthorization",
      value: TransferAuthorization.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return TransferAuthorization.decode(message.value);
  },
  toProto(message) {
    return TransferAuthorization.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.applications.transfer.v1.TransferAuthorization",
      value: TransferAuthorization.encode(message).finish()
    };
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Allocation,
  TransferAuthorization
});
