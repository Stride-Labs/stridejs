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
var tx_exports = {};
__export(tx_exports, {
  Cosmos_feegrantv1beta1FeeAllowanceI_FromAmino: () => Cosmos_feegrantv1beta1FeeAllowanceI_FromAmino,
  Cosmos_feegrantv1beta1FeeAllowanceI_InterfaceDecoder: () => Cosmos_feegrantv1beta1FeeAllowanceI_InterfaceDecoder,
  Cosmos_feegrantv1beta1FeeAllowanceI_ToAmino: () => Cosmos_feegrantv1beta1FeeAllowanceI_ToAmino,
  MsgGrantAllowance: () => MsgGrantAllowance,
  MsgGrantAllowanceResponse: () => MsgGrantAllowanceResponse,
  MsgRevokeAllowance: () => MsgRevokeAllowance,
  MsgRevokeAllowanceResponse: () => MsgRevokeAllowanceResponse
});
module.exports = __toCommonJS(tx_exports);
var import_any = require("../../../google/protobuf/any");
var import_feegrant = require("./feegrant");
var import_binary = require("../../../binary");
function createBaseMsgGrantAllowance() {
  return {
    granter: "",
    grantee: "",
    allowance: void 0
  };
}
const MsgGrantAllowance = {
  typeUrl: "/cosmos.feegrant.v1beta1.MsgGrantAllowance",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.granter !== "") {
      writer.uint32(10).string(message.granter);
    }
    if (message.grantee !== "") {
      writer.uint32(18).string(message.grantee);
    }
    if (message.allowance !== void 0) {
      import_any.Any.encode(message.allowance, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgGrantAllowance();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.granter = reader.string();
          break;
        case 2:
          message.grantee = reader.string();
          break;
        case 3:
          message.allowance = Cosmos_feegrantv1beta1FeeAllowanceI_InterfaceDecoder(reader);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgGrantAllowance();
    message.granter = object.granter ?? "";
    message.grantee = object.grantee ?? "";
    message.allowance = object.allowance !== void 0 && object.allowance !== null ? import_any.Any.fromPartial(object.allowance) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgGrantAllowance();
    if (object.granter !== void 0 && object.granter !== null) {
      message.granter = object.granter;
    }
    if (object.grantee !== void 0 && object.grantee !== null) {
      message.grantee = object.grantee;
    }
    if (object.allowance !== void 0 && object.allowance !== null) {
      message.allowance = Cosmos_feegrantv1beta1FeeAllowanceI_FromAmino(object.allowance);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.granter = message.granter === "" ? void 0 : message.granter;
    obj.grantee = message.grantee === "" ? void 0 : message.grantee;
    obj.allowance = message.allowance ? Cosmos_feegrantv1beta1FeeAllowanceI_ToAmino(message.allowance) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgGrantAllowance.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgGrantAllowance",
      value: MsgGrantAllowance.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgGrantAllowance.decode(message.value);
  },
  toProto(message) {
    return MsgGrantAllowance.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.feegrant.v1beta1.MsgGrantAllowance",
      value: MsgGrantAllowance.encode(message).finish()
    };
  }
};
function createBaseMsgGrantAllowanceResponse() {
  return {};
}
const MsgGrantAllowanceResponse = {
  typeUrl: "/cosmos.feegrant.v1beta1.MsgGrantAllowanceResponse",
  encode(_, writer = import_binary.BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgGrantAllowanceResponse();
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
    const message = createBaseMsgGrantAllowanceResponse();
    return message;
  },
  fromAmino(_) {
    const message = createBaseMsgGrantAllowanceResponse();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return MsgGrantAllowanceResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgGrantAllowanceResponse",
      value: MsgGrantAllowanceResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgGrantAllowanceResponse.decode(message.value);
  },
  toProto(message) {
    return MsgGrantAllowanceResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.feegrant.v1beta1.MsgGrantAllowanceResponse",
      value: MsgGrantAllowanceResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRevokeAllowance() {
  return {
    granter: "",
    grantee: ""
  };
}
const MsgRevokeAllowance = {
  typeUrl: "/cosmos.feegrant.v1beta1.MsgRevokeAllowance",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.granter !== "") {
      writer.uint32(10).string(message.granter);
    }
    if (message.grantee !== "") {
      writer.uint32(18).string(message.grantee);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgRevokeAllowance();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.granter = reader.string();
          break;
        case 2:
          message.grantee = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgRevokeAllowance();
    message.granter = object.granter ?? "";
    message.grantee = object.grantee ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgRevokeAllowance();
    if (object.granter !== void 0 && object.granter !== null) {
      message.granter = object.granter;
    }
    if (object.grantee !== void 0 && object.grantee !== null) {
      message.grantee = object.grantee;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.granter = message.granter === "" ? void 0 : message.granter;
    obj.grantee = message.grantee === "" ? void 0 : message.grantee;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgRevokeAllowance.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgRevokeAllowance",
      value: MsgRevokeAllowance.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgRevokeAllowance.decode(message.value);
  },
  toProto(message) {
    return MsgRevokeAllowance.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.feegrant.v1beta1.MsgRevokeAllowance",
      value: MsgRevokeAllowance.encode(message).finish()
    };
  }
};
function createBaseMsgRevokeAllowanceResponse() {
  return {};
}
const MsgRevokeAllowanceResponse = {
  typeUrl: "/cosmos.feegrant.v1beta1.MsgRevokeAllowanceResponse",
  encode(_, writer = import_binary.BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgRevokeAllowanceResponse();
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
    const message = createBaseMsgRevokeAllowanceResponse();
    return message;
  },
  fromAmino(_) {
    const message = createBaseMsgRevokeAllowanceResponse();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return MsgRevokeAllowanceResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgRevokeAllowanceResponse",
      value: MsgRevokeAllowanceResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgRevokeAllowanceResponse.decode(message.value);
  },
  toProto(message) {
    return MsgRevokeAllowanceResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.feegrant.v1beta1.MsgRevokeAllowanceResponse",
      value: MsgRevokeAllowanceResponse.encode(message).finish()
    };
  }
};
const Cosmos_feegrantv1beta1FeeAllowanceI_InterfaceDecoder = (input) => {
  const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
  const data = import_any.Any.decode(reader, reader.uint32());
  switch (data.typeUrl) {
    case "/cosmos.feegrant.v1beta1.BasicAllowance":
      return import_feegrant.BasicAllowance.decode(data.value);
    case "/cosmos.feegrant.v1beta1.PeriodicAllowance":
      return import_feegrant.PeriodicAllowance.decode(data.value);
    case "/cosmos.feegrant.v1beta1.AllowedMsgAllowance":
      return import_feegrant.AllowedMsgAllowance.decode(data.value);
    default:
      return data;
  }
};
const Cosmos_feegrantv1beta1FeeAllowanceI_FromAmino = (content) => {
  switch (content.type) {
    case "cosmos-sdk/BasicAllowance":
      return import_any.Any.fromPartial({
        typeUrl: "/cosmos.feegrant.v1beta1.BasicAllowance",
        value: import_feegrant.BasicAllowance.encode(import_feegrant.BasicAllowance.fromPartial(import_feegrant.BasicAllowance.fromAmino(content.value))).finish()
      });
    case "cosmos-sdk/PeriodicAllowance":
      return import_any.Any.fromPartial({
        typeUrl: "/cosmos.feegrant.v1beta1.PeriodicAllowance",
        value: import_feegrant.PeriodicAllowance.encode(import_feegrant.PeriodicAllowance.fromPartial(import_feegrant.PeriodicAllowance.fromAmino(content.value))).finish()
      });
    case "cosmos-sdk/AllowedMsgAllowance":
      return import_any.Any.fromPartial({
        typeUrl: "/cosmos.feegrant.v1beta1.AllowedMsgAllowance",
        value: import_feegrant.AllowedMsgAllowance.encode(import_feegrant.AllowedMsgAllowance.fromPartial(import_feegrant.AllowedMsgAllowance.fromAmino(content.value))).finish()
      });
    default:
      return import_any.Any.fromAmino(content);
  }
};
const Cosmos_feegrantv1beta1FeeAllowanceI_ToAmino = (content) => {
  switch (content.typeUrl) {
    case "/cosmos.feegrant.v1beta1.BasicAllowance":
      return {
        type: "cosmos-sdk/BasicAllowance",
        value: import_feegrant.BasicAllowance.toAmino(import_feegrant.BasicAllowance.decode(content.value, void 0))
      };
    case "/cosmos.feegrant.v1beta1.PeriodicAllowance":
      return {
        type: "cosmos-sdk/PeriodicAllowance",
        value: import_feegrant.PeriodicAllowance.toAmino(import_feegrant.PeriodicAllowance.decode(content.value, void 0))
      };
    case "/cosmos.feegrant.v1beta1.AllowedMsgAllowance":
      return {
        type: "cosmos-sdk/AllowedMsgAllowance",
        value: import_feegrant.AllowedMsgAllowance.toAmino(import_feegrant.AllowedMsgAllowance.decode(content.value, void 0))
      };
    default:
      return import_any.Any.toAmino(content);
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Cosmos_feegrantv1beta1FeeAllowanceI_FromAmino,
  Cosmos_feegrantv1beta1FeeAllowanceI_InterfaceDecoder,
  Cosmos_feegrantv1beta1FeeAllowanceI_ToAmino,
  MsgGrantAllowance,
  MsgGrantAllowanceResponse,
  MsgRevokeAllowance,
  MsgRevokeAllowanceResponse
});
