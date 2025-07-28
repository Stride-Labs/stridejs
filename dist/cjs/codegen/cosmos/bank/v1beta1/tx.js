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
var tx_exports = {};
__export(tx_exports, {
  MsgMultiSend: () => MsgMultiSend,
  MsgMultiSendResponse: () => MsgMultiSendResponse,
  MsgSend: () => MsgSend,
  MsgSendResponse: () => MsgSendResponse,
  MsgSetSendEnabled: () => MsgSetSendEnabled,
  MsgSetSendEnabledResponse: () => MsgSetSendEnabledResponse,
  MsgUpdateParams: () => MsgUpdateParams,
  MsgUpdateParamsResponse: () => MsgUpdateParamsResponse
});
module.exports = __toCommonJS(tx_exports);
var import_coin = require("../../base/v1beta1/coin");
var import_bank = require("./bank");
var import_binary = require("../../../binary");
function createBaseMsgSend() {
  return {
    fromAddress: "",
    toAddress: "",
    amount: []
  };
}
const MsgSend = {
  typeUrl: "/cosmos.bank.v1beta1.MsgSend",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.fromAddress !== "") {
      writer.uint32(10).string(message.fromAddress);
    }
    if (message.toAddress !== "") {
      writer.uint32(18).string(message.toAddress);
    }
    for (const v of message.amount) {
      import_coin.Coin.encode(v, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgSend();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fromAddress = reader.string();
          break;
        case 2:
          message.toAddress = reader.string();
          break;
        case 3:
          message.amount.push(import_coin.Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgSend();
    message.fromAddress = object.fromAddress ?? "";
    message.toAddress = object.toAddress ?? "";
    message.amount = object.amount?.map((e) => import_coin.Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgSend();
    if (object.from_address !== void 0 && object.from_address !== null) {
      message.fromAddress = object.from_address;
    }
    if (object.to_address !== void 0 && object.to_address !== null) {
      message.toAddress = object.to_address;
    }
    message.amount = object.amount?.map((e) => import_coin.Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.from_address = message.fromAddress === "" ? void 0 : message.fromAddress;
    obj.to_address = message.toAddress === "" ? void 0 : message.toAddress;
    if (message.amount) {
      obj.amount = message.amount.map((e) => e ? import_coin.Coin.toAmino(e) : void 0);
    } else {
      obj.amount = message.amount;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return MsgSend.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgSend",
      value: MsgSend.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgSend.decode(message.value);
  },
  toProto(message) {
    return MsgSend.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.bank.v1beta1.MsgSend",
      value: MsgSend.encode(message).finish()
    };
  }
};
function createBaseMsgSendResponse() {
  return {};
}
const MsgSendResponse = {
  typeUrl: "/cosmos.bank.v1beta1.MsgSendResponse",
  encode(_, writer = import_binary.BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgSendResponse();
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
    const message = createBaseMsgSendResponse();
    return message;
  },
  fromAmino(_) {
    const message = createBaseMsgSendResponse();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return MsgSendResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgSendResponse",
      value: MsgSendResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgSendResponse.decode(message.value);
  },
  toProto(message) {
    return MsgSendResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.bank.v1beta1.MsgSendResponse",
      value: MsgSendResponse.encode(message).finish()
    };
  }
};
function createBaseMsgMultiSend() {
  return {
    inputs: [],
    outputs: []
  };
}
const MsgMultiSend = {
  typeUrl: "/cosmos.bank.v1beta1.MsgMultiSend",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    for (const v of message.inputs) {
      import_bank.Input.encode(v, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.outputs) {
      import_bank.Output.encode(v, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgMultiSend();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.inputs.push(import_bank.Input.decode(reader, reader.uint32()));
          break;
        case 2:
          message.outputs.push(import_bank.Output.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgMultiSend();
    message.inputs = object.inputs?.map((e) => import_bank.Input.fromPartial(e)) || [];
    message.outputs = object.outputs?.map((e) => import_bank.Output.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgMultiSend();
    message.inputs = object.inputs?.map((e) => import_bank.Input.fromAmino(e)) || [];
    message.outputs = object.outputs?.map((e) => import_bank.Output.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.inputs) {
      obj.inputs = message.inputs.map((e) => e ? import_bank.Input.toAmino(e) : void 0);
    } else {
      obj.inputs = message.inputs;
    }
    if (message.outputs) {
      obj.outputs = message.outputs.map((e) => e ? import_bank.Output.toAmino(e) : void 0);
    } else {
      obj.outputs = message.outputs;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return MsgMultiSend.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgMultiSend",
      value: MsgMultiSend.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgMultiSend.decode(message.value);
  },
  toProto(message) {
    return MsgMultiSend.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.bank.v1beta1.MsgMultiSend",
      value: MsgMultiSend.encode(message).finish()
    };
  }
};
function createBaseMsgMultiSendResponse() {
  return {};
}
const MsgMultiSendResponse = {
  typeUrl: "/cosmos.bank.v1beta1.MsgMultiSendResponse",
  encode(_, writer = import_binary.BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgMultiSendResponse();
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
    const message = createBaseMsgMultiSendResponse();
    return message;
  },
  fromAmino(_) {
    const message = createBaseMsgMultiSendResponse();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return MsgMultiSendResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgMultiSendResponse",
      value: MsgMultiSendResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgMultiSendResponse.decode(message.value);
  },
  toProto(message) {
    return MsgMultiSendResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.bank.v1beta1.MsgMultiSendResponse",
      value: MsgMultiSendResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateParams() {
  return {
    authority: "",
    params: import_bank.Params.fromPartial({})
  };
}
const MsgUpdateParams = {
  typeUrl: "/cosmos.bank.v1beta1.MsgUpdateParams",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== void 0) {
      import_bank.Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.params = import_bank.Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgUpdateParams();
    message.authority = object.authority ?? "";
    message.params = object.params !== void 0 && object.params !== null ? import_bank.Params.fromPartial(object.params) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgUpdateParams();
    if (object.authority !== void 0 && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.params !== void 0 && object.params !== null) {
      message.params = import_bank.Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.authority = message.authority === "" ? void 0 : message.authority;
    obj.params = message.params ? import_bank.Params.toAmino(message.params) : import_bank.Params.toAmino(import_bank.Params.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object) {
    return MsgUpdateParams.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/x/bank/MsgUpdateParams",
      value: MsgUpdateParams.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgUpdateParams.decode(message.value);
  },
  toProto(message) {
    return MsgUpdateParams.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.bank.v1beta1.MsgUpdateParams",
      value: MsgUpdateParams.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateParamsResponse() {
  return {};
}
const MsgUpdateParamsResponse = {
  typeUrl: "/cosmos.bank.v1beta1.MsgUpdateParamsResponse",
  encode(_, writer = import_binary.BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParamsResponse();
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
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  fromAmino(_) {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return MsgUpdateParamsResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgUpdateParamsResponse.decode(message.value);
  },
  toProto(message) {
    return MsgUpdateParamsResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.bank.v1beta1.MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSetSendEnabled() {
  return {
    authority: "",
    sendEnabled: [],
    useDefaultFor: []
  };
}
const MsgSetSendEnabled = {
  typeUrl: "/cosmos.bank.v1beta1.MsgSetSendEnabled",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    for (const v of message.sendEnabled) {
      import_bank.SendEnabled.encode(v, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.useDefaultFor) {
      writer.uint32(26).string(v);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgSetSendEnabled();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.sendEnabled.push(import_bank.SendEnabled.decode(reader, reader.uint32()));
          break;
        case 3:
          message.useDefaultFor.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgSetSendEnabled();
    message.authority = object.authority ?? "";
    message.sendEnabled = object.sendEnabled?.map((e) => import_bank.SendEnabled.fromPartial(e)) || [];
    message.useDefaultFor = object.useDefaultFor?.map((e) => e) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgSetSendEnabled();
    if (object.authority !== void 0 && object.authority !== null) {
      message.authority = object.authority;
    }
    message.sendEnabled = object.send_enabled?.map((e) => import_bank.SendEnabled.fromAmino(e)) || [];
    message.useDefaultFor = object.use_default_for?.map((e) => e) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.authority = message.authority === "" ? void 0 : message.authority;
    if (message.sendEnabled) {
      obj.send_enabled = message.sendEnabled.map((e) => e ? import_bank.SendEnabled.toAmino(e) : void 0);
    } else {
      obj.send_enabled = message.sendEnabled;
    }
    if (message.useDefaultFor) {
      obj.use_default_for = message.useDefaultFor.map((e) => e);
    } else {
      obj.use_default_for = message.useDefaultFor;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return MsgSetSendEnabled.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgSetSendEnabled",
      value: MsgSetSendEnabled.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgSetSendEnabled.decode(message.value);
  },
  toProto(message) {
    return MsgSetSendEnabled.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.bank.v1beta1.MsgSetSendEnabled",
      value: MsgSetSendEnabled.encode(message).finish()
    };
  }
};
function createBaseMsgSetSendEnabledResponse() {
  return {};
}
const MsgSetSendEnabledResponse = {
  typeUrl: "/cosmos.bank.v1beta1.MsgSetSendEnabledResponse",
  encode(_, writer = import_binary.BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgSetSendEnabledResponse();
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
    const message = createBaseMsgSetSendEnabledResponse();
    return message;
  },
  fromAmino(_) {
    const message = createBaseMsgSetSendEnabledResponse();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return MsgSetSendEnabledResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgSetSendEnabledResponse",
      value: MsgSetSendEnabledResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgSetSendEnabledResponse.decode(message.value);
  },
  toProto(message) {
    return MsgSetSendEnabledResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.bank.v1beta1.MsgSetSendEnabledResponse",
      value: MsgSetSendEnabledResponse.encode(message).finish()
    };
  }
};
// Removed broken CommonJS export annotation
