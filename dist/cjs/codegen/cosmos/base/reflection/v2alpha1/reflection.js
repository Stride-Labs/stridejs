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
var reflection_exports = {};
__export(reflection_exports, {
  AppDescriptor: () => AppDescriptor,
  AuthnDescriptor: () => AuthnDescriptor,
  ChainDescriptor: () => ChainDescriptor,
  CodecDescriptor: () => CodecDescriptor,
  ConfigurationDescriptor: () => ConfigurationDescriptor,
  GetAuthnDescriptorRequest: () => GetAuthnDescriptorRequest,
  GetAuthnDescriptorResponse: () => GetAuthnDescriptorResponse,
  GetChainDescriptorRequest: () => GetChainDescriptorRequest,
  GetChainDescriptorResponse: () => GetChainDescriptorResponse,
  GetCodecDescriptorRequest: () => GetCodecDescriptorRequest,
  GetCodecDescriptorResponse: () => GetCodecDescriptorResponse,
  GetConfigurationDescriptorRequest: () => GetConfigurationDescriptorRequest,
  GetConfigurationDescriptorResponse: () => GetConfigurationDescriptorResponse,
  GetQueryServicesDescriptorRequest: () => GetQueryServicesDescriptorRequest,
  GetQueryServicesDescriptorResponse: () => GetQueryServicesDescriptorResponse,
  GetTxDescriptorRequest: () => GetTxDescriptorRequest,
  GetTxDescriptorResponse: () => GetTxDescriptorResponse,
  InterfaceAcceptingMessageDescriptor: () => InterfaceAcceptingMessageDescriptor,
  InterfaceDescriptor: () => InterfaceDescriptor,
  InterfaceImplementerDescriptor: () => InterfaceImplementerDescriptor,
  MsgDescriptor: () => MsgDescriptor,
  QueryMethodDescriptor: () => QueryMethodDescriptor,
  QueryServiceDescriptor: () => QueryServiceDescriptor,
  QueryServicesDescriptor: () => QueryServicesDescriptor,
  SigningModeDescriptor: () => SigningModeDescriptor,
  TxDescriptor: () => TxDescriptor
});
module.exports = __toCommonJS(reflection_exports);
var import_binary = require("../../../../binary");
function createBaseAppDescriptor() {
  return {
    authn: void 0,
    chain: void 0,
    codec: void 0,
    configuration: void 0,
    queryServices: void 0,
    tx: void 0
  };
}
const AppDescriptor = {
  typeUrl: "/cosmos.base.reflection.v2alpha1.AppDescriptor",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.authn !== void 0) {
      AuthnDescriptor.encode(message.authn, writer.uint32(10).fork()).ldelim();
    }
    if (message.chain !== void 0) {
      ChainDescriptor.encode(message.chain, writer.uint32(18).fork()).ldelim();
    }
    if (message.codec !== void 0) {
      CodecDescriptor.encode(message.codec, writer.uint32(26).fork()).ldelim();
    }
    if (message.configuration !== void 0) {
      ConfigurationDescriptor.encode(message.configuration, writer.uint32(34).fork()).ldelim();
    }
    if (message.queryServices !== void 0) {
      QueryServicesDescriptor.encode(message.queryServices, writer.uint32(42).fork()).ldelim();
    }
    if (message.tx !== void 0) {
      TxDescriptor.encode(message.tx, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseAppDescriptor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authn = AuthnDescriptor.decode(reader, reader.uint32());
          break;
        case 2:
          message.chain = ChainDescriptor.decode(reader, reader.uint32());
          break;
        case 3:
          message.codec = CodecDescriptor.decode(reader, reader.uint32());
          break;
        case 4:
          message.configuration = ConfigurationDescriptor.decode(reader, reader.uint32());
          break;
        case 5:
          message.queryServices = QueryServicesDescriptor.decode(reader, reader.uint32());
          break;
        case 6:
          message.tx = TxDescriptor.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseAppDescriptor();
    message.authn = object.authn !== void 0 && object.authn !== null ? AuthnDescriptor.fromPartial(object.authn) : void 0;
    message.chain = object.chain !== void 0 && object.chain !== null ? ChainDescriptor.fromPartial(object.chain) : void 0;
    message.codec = object.codec !== void 0 && object.codec !== null ? CodecDescriptor.fromPartial(object.codec) : void 0;
    message.configuration = object.configuration !== void 0 && object.configuration !== null ? ConfigurationDescriptor.fromPartial(object.configuration) : void 0;
    message.queryServices = object.queryServices !== void 0 && object.queryServices !== null ? QueryServicesDescriptor.fromPartial(object.queryServices) : void 0;
    message.tx = object.tx !== void 0 && object.tx !== null ? TxDescriptor.fromPartial(object.tx) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseAppDescriptor();
    if (object.authn !== void 0 && object.authn !== null) {
      message.authn = AuthnDescriptor.fromAmino(object.authn);
    }
    if (object.chain !== void 0 && object.chain !== null) {
      message.chain = ChainDescriptor.fromAmino(object.chain);
    }
    if (object.codec !== void 0 && object.codec !== null) {
      message.codec = CodecDescriptor.fromAmino(object.codec);
    }
    if (object.configuration !== void 0 && object.configuration !== null) {
      message.configuration = ConfigurationDescriptor.fromAmino(object.configuration);
    }
    if (object.query_services !== void 0 && object.query_services !== null) {
      message.queryServices = QueryServicesDescriptor.fromAmino(object.query_services);
    }
    if (object.tx !== void 0 && object.tx !== null) {
      message.tx = TxDescriptor.fromAmino(object.tx);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.authn = message.authn ? AuthnDescriptor.toAmino(message.authn) : void 0;
    obj.chain = message.chain ? ChainDescriptor.toAmino(message.chain) : void 0;
    obj.codec = message.codec ? CodecDescriptor.toAmino(message.codec) : void 0;
    obj.configuration = message.configuration ? ConfigurationDescriptor.toAmino(message.configuration) : void 0;
    obj.query_services = message.queryServices ? QueryServicesDescriptor.toAmino(message.queryServices) : void 0;
    obj.tx = message.tx ? TxDescriptor.toAmino(message.tx) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return AppDescriptor.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/AppDescriptor",
      value: AppDescriptor.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return AppDescriptor.decode(message.value);
  },
  toProto(message) {
    return AppDescriptor.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.base.reflection.v2alpha1.AppDescriptor",
      value: AppDescriptor.encode(message).finish()
    };
  }
};
function createBaseTxDescriptor() {
  return {
    fullname: "",
    msgs: []
  };
}
const TxDescriptor = {
  typeUrl: "/cosmos.base.reflection.v2alpha1.TxDescriptor",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.fullname !== "") {
      writer.uint32(10).string(message.fullname);
    }
    for (const v of message.msgs) {
      MsgDescriptor.encode(v, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseTxDescriptor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fullname = reader.string();
          break;
        case 2:
          message.msgs.push(MsgDescriptor.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseTxDescriptor();
    message.fullname = object.fullname ?? "";
    message.msgs = object.msgs?.map((e) => MsgDescriptor.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseTxDescriptor();
    if (object.fullname !== void 0 && object.fullname !== null) {
      message.fullname = object.fullname;
    }
    message.msgs = object.msgs?.map((e) => MsgDescriptor.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.fullname = message.fullname === "" ? void 0 : message.fullname;
    if (message.msgs) {
      obj.msgs = message.msgs.map((e) => e ? MsgDescriptor.toAmino(e) : void 0);
    } else {
      obj.msgs = message.msgs;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return TxDescriptor.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/TxDescriptor",
      value: TxDescriptor.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return TxDescriptor.decode(message.value);
  },
  toProto(message) {
    return TxDescriptor.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.base.reflection.v2alpha1.TxDescriptor",
      value: TxDescriptor.encode(message).finish()
    };
  }
};
function createBaseAuthnDescriptor() {
  return {
    signModes: []
  };
}
const AuthnDescriptor = {
  typeUrl: "/cosmos.base.reflection.v2alpha1.AuthnDescriptor",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    for (const v of message.signModes) {
      SigningModeDescriptor.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseAuthnDescriptor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signModes.push(SigningModeDescriptor.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseAuthnDescriptor();
    message.signModes = object.signModes?.map((e) => SigningModeDescriptor.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseAuthnDescriptor();
    message.signModes = object.sign_modes?.map((e) => SigningModeDescriptor.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.signModes) {
      obj.sign_modes = message.signModes.map((e) => e ? SigningModeDescriptor.toAmino(e) : void 0);
    } else {
      obj.sign_modes = message.signModes;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return AuthnDescriptor.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/AuthnDescriptor",
      value: AuthnDescriptor.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return AuthnDescriptor.decode(message.value);
  },
  toProto(message) {
    return AuthnDescriptor.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.base.reflection.v2alpha1.AuthnDescriptor",
      value: AuthnDescriptor.encode(message).finish()
    };
  }
};
function createBaseSigningModeDescriptor() {
  return {
    name: "",
    number: 0,
    authnInfoProviderMethodFullname: ""
  };
}
const SigningModeDescriptor = {
  typeUrl: "/cosmos.base.reflection.v2alpha1.SigningModeDescriptor",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.number !== 0) {
      writer.uint32(16).int32(message.number);
    }
    if (message.authnInfoProviderMethodFullname !== "") {
      writer.uint32(26).string(message.authnInfoProviderMethodFullname);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseSigningModeDescriptor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.number = reader.int32();
          break;
        case 3:
          message.authnInfoProviderMethodFullname = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseSigningModeDescriptor();
    message.name = object.name ?? "";
    message.number = object.number ?? 0;
    message.authnInfoProviderMethodFullname = object.authnInfoProviderMethodFullname ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseSigningModeDescriptor();
    if (object.name !== void 0 && object.name !== null) {
      message.name = object.name;
    }
    if (object.number !== void 0 && object.number !== null) {
      message.number = object.number;
    }
    if (object.authn_info_provider_method_fullname !== void 0 && object.authn_info_provider_method_fullname !== null) {
      message.authnInfoProviderMethodFullname = object.authn_info_provider_method_fullname;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.name = message.name === "" ? void 0 : message.name;
    obj.number = message.number === 0 ? void 0 : message.number;
    obj.authn_info_provider_method_fullname = message.authnInfoProviderMethodFullname === "" ? void 0 : message.authnInfoProviderMethodFullname;
    return obj;
  },
  fromAminoMsg(object) {
    return SigningModeDescriptor.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/SigningModeDescriptor",
      value: SigningModeDescriptor.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return SigningModeDescriptor.decode(message.value);
  },
  toProto(message) {
    return SigningModeDescriptor.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.base.reflection.v2alpha1.SigningModeDescriptor",
      value: SigningModeDescriptor.encode(message).finish()
    };
  }
};
function createBaseChainDescriptor() {
  return {
    id: ""
  };
}
const ChainDescriptor = {
  typeUrl: "/cosmos.base.reflection.v2alpha1.ChainDescriptor",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseChainDescriptor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseChainDescriptor();
    message.id = object.id ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseChainDescriptor();
    if (object.id !== void 0 && object.id !== null) {
      message.id = object.id;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.id = message.id === "" ? void 0 : message.id;
    return obj;
  },
  fromAminoMsg(object) {
    return ChainDescriptor.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/ChainDescriptor",
      value: ChainDescriptor.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return ChainDescriptor.decode(message.value);
  },
  toProto(message) {
    return ChainDescriptor.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.base.reflection.v2alpha1.ChainDescriptor",
      value: ChainDescriptor.encode(message).finish()
    };
  }
};
function createBaseCodecDescriptor() {
  return {
    interfaces: []
  };
}
const CodecDescriptor = {
  typeUrl: "/cosmos.base.reflection.v2alpha1.CodecDescriptor",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    for (const v of message.interfaces) {
      InterfaceDescriptor.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseCodecDescriptor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.interfaces.push(InterfaceDescriptor.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseCodecDescriptor();
    message.interfaces = object.interfaces?.map((e) => InterfaceDescriptor.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseCodecDescriptor();
    message.interfaces = object.interfaces?.map((e) => InterfaceDescriptor.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.interfaces) {
      obj.interfaces = message.interfaces.map((e) => e ? InterfaceDescriptor.toAmino(e) : void 0);
    } else {
      obj.interfaces = message.interfaces;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return CodecDescriptor.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/CodecDescriptor",
      value: CodecDescriptor.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return CodecDescriptor.decode(message.value);
  },
  toProto(message) {
    return CodecDescriptor.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.base.reflection.v2alpha1.CodecDescriptor",
      value: CodecDescriptor.encode(message).finish()
    };
  }
};
function createBaseInterfaceDescriptor() {
  return {
    fullname: "",
    interfaceAcceptingMessages: [],
    interfaceImplementers: []
  };
}
const InterfaceDescriptor = {
  typeUrl: "/cosmos.base.reflection.v2alpha1.InterfaceDescriptor",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.fullname !== "") {
      writer.uint32(10).string(message.fullname);
    }
    for (const v of message.interfaceAcceptingMessages) {
      InterfaceAcceptingMessageDescriptor.encode(v, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.interfaceImplementers) {
      InterfaceImplementerDescriptor.encode(v, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseInterfaceDescriptor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fullname = reader.string();
          break;
        case 2:
          message.interfaceAcceptingMessages.push(InterfaceAcceptingMessageDescriptor.decode(reader, reader.uint32()));
          break;
        case 3:
          message.interfaceImplementers.push(InterfaceImplementerDescriptor.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseInterfaceDescriptor();
    message.fullname = object.fullname ?? "";
    message.interfaceAcceptingMessages = object.interfaceAcceptingMessages?.map((e) => InterfaceAcceptingMessageDescriptor.fromPartial(e)) || [];
    message.interfaceImplementers = object.interfaceImplementers?.map((e) => InterfaceImplementerDescriptor.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseInterfaceDescriptor();
    if (object.fullname !== void 0 && object.fullname !== null) {
      message.fullname = object.fullname;
    }
    message.interfaceAcceptingMessages = object.interface_accepting_messages?.map((e) => InterfaceAcceptingMessageDescriptor.fromAmino(e)) || [];
    message.interfaceImplementers = object.interface_implementers?.map((e) => InterfaceImplementerDescriptor.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.fullname = message.fullname === "" ? void 0 : message.fullname;
    if (message.interfaceAcceptingMessages) {
      obj.interface_accepting_messages = message.interfaceAcceptingMessages.map((e) => e ? InterfaceAcceptingMessageDescriptor.toAmino(e) : void 0);
    } else {
      obj.interface_accepting_messages = message.interfaceAcceptingMessages;
    }
    if (message.interfaceImplementers) {
      obj.interface_implementers = message.interfaceImplementers.map((e) => e ? InterfaceImplementerDescriptor.toAmino(e) : void 0);
    } else {
      obj.interface_implementers = message.interfaceImplementers;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return InterfaceDescriptor.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/InterfaceDescriptor",
      value: InterfaceDescriptor.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return InterfaceDescriptor.decode(message.value);
  },
  toProto(message) {
    return InterfaceDescriptor.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.base.reflection.v2alpha1.InterfaceDescriptor",
      value: InterfaceDescriptor.encode(message).finish()
    };
  }
};
function createBaseInterfaceImplementerDescriptor() {
  return {
    fullname: "",
    typeUrl: ""
  };
}
const InterfaceImplementerDescriptor = {
  typeUrl: "/cosmos.base.reflection.v2alpha1.InterfaceImplementerDescriptor",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.fullname !== "") {
      writer.uint32(10).string(message.fullname);
    }
    if (message.typeUrl !== "") {
      writer.uint32(18).string(message.typeUrl);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseInterfaceImplementerDescriptor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fullname = reader.string();
          break;
        case 2:
          message.typeUrl = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseInterfaceImplementerDescriptor();
    message.fullname = object.fullname ?? "";
    message.typeUrl = object.typeUrl ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseInterfaceImplementerDescriptor();
    if (object.fullname !== void 0 && object.fullname !== null) {
      message.fullname = object.fullname;
    }
    if (object.type_url !== void 0 && object.type_url !== null) {
      message.typeUrl = object.type_url;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.fullname = message.fullname === "" ? void 0 : message.fullname;
    obj.type_url = message.typeUrl === "" ? void 0 : message.typeUrl;
    return obj;
  },
  fromAminoMsg(object) {
    return InterfaceImplementerDescriptor.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/InterfaceImplementerDescriptor",
      value: InterfaceImplementerDescriptor.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return InterfaceImplementerDescriptor.decode(message.value);
  },
  toProto(message) {
    return InterfaceImplementerDescriptor.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.base.reflection.v2alpha1.InterfaceImplementerDescriptor",
      value: InterfaceImplementerDescriptor.encode(message).finish()
    };
  }
};
function createBaseInterfaceAcceptingMessageDescriptor() {
  return {
    fullname: "",
    fieldDescriptorNames: []
  };
}
const InterfaceAcceptingMessageDescriptor = {
  typeUrl: "/cosmos.base.reflection.v2alpha1.InterfaceAcceptingMessageDescriptor",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.fullname !== "") {
      writer.uint32(10).string(message.fullname);
    }
    for (const v of message.fieldDescriptorNames) {
      writer.uint32(18).string(v);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseInterfaceAcceptingMessageDescriptor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fullname = reader.string();
          break;
        case 2:
          message.fieldDescriptorNames.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseInterfaceAcceptingMessageDescriptor();
    message.fullname = object.fullname ?? "";
    message.fieldDescriptorNames = object.fieldDescriptorNames?.map((e) => e) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseInterfaceAcceptingMessageDescriptor();
    if (object.fullname !== void 0 && object.fullname !== null) {
      message.fullname = object.fullname;
    }
    message.fieldDescriptorNames = object.field_descriptor_names?.map((e) => e) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.fullname = message.fullname === "" ? void 0 : message.fullname;
    if (message.fieldDescriptorNames) {
      obj.field_descriptor_names = message.fieldDescriptorNames.map((e) => e);
    } else {
      obj.field_descriptor_names = message.fieldDescriptorNames;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return InterfaceAcceptingMessageDescriptor.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/InterfaceAcceptingMessageDescriptor",
      value: InterfaceAcceptingMessageDescriptor.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return InterfaceAcceptingMessageDescriptor.decode(message.value);
  },
  toProto(message) {
    return InterfaceAcceptingMessageDescriptor.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.base.reflection.v2alpha1.InterfaceAcceptingMessageDescriptor",
      value: InterfaceAcceptingMessageDescriptor.encode(message).finish()
    };
  }
};
function createBaseConfigurationDescriptor() {
  return {
    bech32AccountAddressPrefix: ""
  };
}
const ConfigurationDescriptor = {
  typeUrl: "/cosmos.base.reflection.v2alpha1.ConfigurationDescriptor",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.bech32AccountAddressPrefix !== "") {
      writer.uint32(10).string(message.bech32AccountAddressPrefix);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseConfigurationDescriptor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bech32AccountAddressPrefix = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseConfigurationDescriptor();
    message.bech32AccountAddressPrefix = object.bech32AccountAddressPrefix ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseConfigurationDescriptor();
    if (object.bech32_account_address_prefix !== void 0 && object.bech32_account_address_prefix !== null) {
      message.bech32AccountAddressPrefix = object.bech32_account_address_prefix;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.bech32_account_address_prefix = message.bech32AccountAddressPrefix === "" ? void 0 : message.bech32AccountAddressPrefix;
    return obj;
  },
  fromAminoMsg(object) {
    return ConfigurationDescriptor.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/ConfigurationDescriptor",
      value: ConfigurationDescriptor.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return ConfigurationDescriptor.decode(message.value);
  },
  toProto(message) {
    return ConfigurationDescriptor.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.base.reflection.v2alpha1.ConfigurationDescriptor",
      value: ConfigurationDescriptor.encode(message).finish()
    };
  }
};
function createBaseMsgDescriptor() {
  return {
    msgTypeUrl: ""
  };
}
const MsgDescriptor = {
  typeUrl: "/cosmos.base.reflection.v2alpha1.MsgDescriptor",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.msgTypeUrl !== "") {
      writer.uint32(10).string(message.msgTypeUrl);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgDescriptor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.msgTypeUrl = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgDescriptor();
    message.msgTypeUrl = object.msgTypeUrl ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgDescriptor();
    if (object.msg_type_url !== void 0 && object.msg_type_url !== null) {
      message.msgTypeUrl = object.msg_type_url;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.msg_type_url = message.msgTypeUrl === "" ? void 0 : message.msgTypeUrl;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgDescriptor.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgDescriptor",
      value: MsgDescriptor.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgDescriptor.decode(message.value);
  },
  toProto(message) {
    return MsgDescriptor.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.base.reflection.v2alpha1.MsgDescriptor",
      value: MsgDescriptor.encode(message).finish()
    };
  }
};
function createBaseGetAuthnDescriptorRequest() {
  return {};
}
const GetAuthnDescriptorRequest = {
  typeUrl: "/cosmos.base.reflection.v2alpha1.GetAuthnDescriptorRequest",
  encode(_, writer = import_binary.BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseGetAuthnDescriptorRequest();
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
    const message = createBaseGetAuthnDescriptorRequest();
    return message;
  },
  fromAmino(_) {
    const message = createBaseGetAuthnDescriptorRequest();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return GetAuthnDescriptorRequest.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/GetAuthnDescriptorRequest",
      value: GetAuthnDescriptorRequest.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return GetAuthnDescriptorRequest.decode(message.value);
  },
  toProto(message) {
    return GetAuthnDescriptorRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.base.reflection.v2alpha1.GetAuthnDescriptorRequest",
      value: GetAuthnDescriptorRequest.encode(message).finish()
    };
  }
};
function createBaseGetAuthnDescriptorResponse() {
  return {
    authn: void 0
  };
}
const GetAuthnDescriptorResponse = {
  typeUrl: "/cosmos.base.reflection.v2alpha1.GetAuthnDescriptorResponse",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.authn !== void 0) {
      AuthnDescriptor.encode(message.authn, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseGetAuthnDescriptorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authn = AuthnDescriptor.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseGetAuthnDescriptorResponse();
    message.authn = object.authn !== void 0 && object.authn !== null ? AuthnDescriptor.fromPartial(object.authn) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseGetAuthnDescriptorResponse();
    if (object.authn !== void 0 && object.authn !== null) {
      message.authn = AuthnDescriptor.fromAmino(object.authn);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.authn = message.authn ? AuthnDescriptor.toAmino(message.authn) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return GetAuthnDescriptorResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/GetAuthnDescriptorResponse",
      value: GetAuthnDescriptorResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return GetAuthnDescriptorResponse.decode(message.value);
  },
  toProto(message) {
    return GetAuthnDescriptorResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.base.reflection.v2alpha1.GetAuthnDescriptorResponse",
      value: GetAuthnDescriptorResponse.encode(message).finish()
    };
  }
};
function createBaseGetChainDescriptorRequest() {
  return {};
}
const GetChainDescriptorRequest = {
  typeUrl: "/cosmos.base.reflection.v2alpha1.GetChainDescriptorRequest",
  encode(_, writer = import_binary.BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseGetChainDescriptorRequest();
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
    const message = createBaseGetChainDescriptorRequest();
    return message;
  },
  fromAmino(_) {
    const message = createBaseGetChainDescriptorRequest();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return GetChainDescriptorRequest.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/GetChainDescriptorRequest",
      value: GetChainDescriptorRequest.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return GetChainDescriptorRequest.decode(message.value);
  },
  toProto(message) {
    return GetChainDescriptorRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.base.reflection.v2alpha1.GetChainDescriptorRequest",
      value: GetChainDescriptorRequest.encode(message).finish()
    };
  }
};
function createBaseGetChainDescriptorResponse() {
  return {
    chain: void 0
  };
}
const GetChainDescriptorResponse = {
  typeUrl: "/cosmos.base.reflection.v2alpha1.GetChainDescriptorResponse",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.chain !== void 0) {
      ChainDescriptor.encode(message.chain, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseGetChainDescriptorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chain = ChainDescriptor.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseGetChainDescriptorResponse();
    message.chain = object.chain !== void 0 && object.chain !== null ? ChainDescriptor.fromPartial(object.chain) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseGetChainDescriptorResponse();
    if (object.chain !== void 0 && object.chain !== null) {
      message.chain = ChainDescriptor.fromAmino(object.chain);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.chain = message.chain ? ChainDescriptor.toAmino(message.chain) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return GetChainDescriptorResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/GetChainDescriptorResponse",
      value: GetChainDescriptorResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return GetChainDescriptorResponse.decode(message.value);
  },
  toProto(message) {
    return GetChainDescriptorResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.base.reflection.v2alpha1.GetChainDescriptorResponse",
      value: GetChainDescriptorResponse.encode(message).finish()
    };
  }
};
function createBaseGetCodecDescriptorRequest() {
  return {};
}
const GetCodecDescriptorRequest = {
  typeUrl: "/cosmos.base.reflection.v2alpha1.GetCodecDescriptorRequest",
  encode(_, writer = import_binary.BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseGetCodecDescriptorRequest();
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
    const message = createBaseGetCodecDescriptorRequest();
    return message;
  },
  fromAmino(_) {
    const message = createBaseGetCodecDescriptorRequest();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return GetCodecDescriptorRequest.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/GetCodecDescriptorRequest",
      value: GetCodecDescriptorRequest.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return GetCodecDescriptorRequest.decode(message.value);
  },
  toProto(message) {
    return GetCodecDescriptorRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.base.reflection.v2alpha1.GetCodecDescriptorRequest",
      value: GetCodecDescriptorRequest.encode(message).finish()
    };
  }
};
function createBaseGetCodecDescriptorResponse() {
  return {
    codec: void 0
  };
}
const GetCodecDescriptorResponse = {
  typeUrl: "/cosmos.base.reflection.v2alpha1.GetCodecDescriptorResponse",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.codec !== void 0) {
      CodecDescriptor.encode(message.codec, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseGetCodecDescriptorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.codec = CodecDescriptor.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseGetCodecDescriptorResponse();
    message.codec = object.codec !== void 0 && object.codec !== null ? CodecDescriptor.fromPartial(object.codec) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseGetCodecDescriptorResponse();
    if (object.codec !== void 0 && object.codec !== null) {
      message.codec = CodecDescriptor.fromAmino(object.codec);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.codec = message.codec ? CodecDescriptor.toAmino(message.codec) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return GetCodecDescriptorResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/GetCodecDescriptorResponse",
      value: GetCodecDescriptorResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return GetCodecDescriptorResponse.decode(message.value);
  },
  toProto(message) {
    return GetCodecDescriptorResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.base.reflection.v2alpha1.GetCodecDescriptorResponse",
      value: GetCodecDescriptorResponse.encode(message).finish()
    };
  }
};
function createBaseGetConfigurationDescriptorRequest() {
  return {};
}
const GetConfigurationDescriptorRequest = {
  typeUrl: "/cosmos.base.reflection.v2alpha1.GetConfigurationDescriptorRequest",
  encode(_, writer = import_binary.BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseGetConfigurationDescriptorRequest();
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
    const message = createBaseGetConfigurationDescriptorRequest();
    return message;
  },
  fromAmino(_) {
    const message = createBaseGetConfigurationDescriptorRequest();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return GetConfigurationDescriptorRequest.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/GetConfigurationDescriptorRequest",
      value: GetConfigurationDescriptorRequest.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return GetConfigurationDescriptorRequest.decode(message.value);
  },
  toProto(message) {
    return GetConfigurationDescriptorRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.base.reflection.v2alpha1.GetConfigurationDescriptorRequest",
      value: GetConfigurationDescriptorRequest.encode(message).finish()
    };
  }
};
function createBaseGetConfigurationDescriptorResponse() {
  return {
    config: void 0
  };
}
const GetConfigurationDescriptorResponse = {
  typeUrl: "/cosmos.base.reflection.v2alpha1.GetConfigurationDescriptorResponse",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.config !== void 0) {
      ConfigurationDescriptor.encode(message.config, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseGetConfigurationDescriptorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.config = ConfigurationDescriptor.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseGetConfigurationDescriptorResponse();
    message.config = object.config !== void 0 && object.config !== null ? ConfigurationDescriptor.fromPartial(object.config) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseGetConfigurationDescriptorResponse();
    if (object.config !== void 0 && object.config !== null) {
      message.config = ConfigurationDescriptor.fromAmino(object.config);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.config = message.config ? ConfigurationDescriptor.toAmino(message.config) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return GetConfigurationDescriptorResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/GetConfigurationDescriptorResponse",
      value: GetConfigurationDescriptorResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return GetConfigurationDescriptorResponse.decode(message.value);
  },
  toProto(message) {
    return GetConfigurationDescriptorResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.base.reflection.v2alpha1.GetConfigurationDescriptorResponse",
      value: GetConfigurationDescriptorResponse.encode(message).finish()
    };
  }
};
function createBaseGetQueryServicesDescriptorRequest() {
  return {};
}
const GetQueryServicesDescriptorRequest = {
  typeUrl: "/cosmos.base.reflection.v2alpha1.GetQueryServicesDescriptorRequest",
  encode(_, writer = import_binary.BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseGetQueryServicesDescriptorRequest();
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
    const message = createBaseGetQueryServicesDescriptorRequest();
    return message;
  },
  fromAmino(_) {
    const message = createBaseGetQueryServicesDescriptorRequest();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return GetQueryServicesDescriptorRequest.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/GetQueryServicesDescriptorRequest",
      value: GetQueryServicesDescriptorRequest.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return GetQueryServicesDescriptorRequest.decode(message.value);
  },
  toProto(message) {
    return GetQueryServicesDescriptorRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.base.reflection.v2alpha1.GetQueryServicesDescriptorRequest",
      value: GetQueryServicesDescriptorRequest.encode(message).finish()
    };
  }
};
function createBaseGetQueryServicesDescriptorResponse() {
  return {
    queries: void 0
  };
}
const GetQueryServicesDescriptorResponse = {
  typeUrl: "/cosmos.base.reflection.v2alpha1.GetQueryServicesDescriptorResponse",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.queries !== void 0) {
      QueryServicesDescriptor.encode(message.queries, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseGetQueryServicesDescriptorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.queries = QueryServicesDescriptor.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseGetQueryServicesDescriptorResponse();
    message.queries = object.queries !== void 0 && object.queries !== null ? QueryServicesDescriptor.fromPartial(object.queries) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseGetQueryServicesDescriptorResponse();
    if (object.queries !== void 0 && object.queries !== null) {
      message.queries = QueryServicesDescriptor.fromAmino(object.queries);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.queries = message.queries ? QueryServicesDescriptor.toAmino(message.queries) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return GetQueryServicesDescriptorResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/GetQueryServicesDescriptorResponse",
      value: GetQueryServicesDescriptorResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return GetQueryServicesDescriptorResponse.decode(message.value);
  },
  toProto(message) {
    return GetQueryServicesDescriptorResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.base.reflection.v2alpha1.GetQueryServicesDescriptorResponse",
      value: GetQueryServicesDescriptorResponse.encode(message).finish()
    };
  }
};
function createBaseGetTxDescriptorRequest() {
  return {};
}
const GetTxDescriptorRequest = {
  typeUrl: "/cosmos.base.reflection.v2alpha1.GetTxDescriptorRequest",
  encode(_, writer = import_binary.BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseGetTxDescriptorRequest();
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
    const message = createBaseGetTxDescriptorRequest();
    return message;
  },
  fromAmino(_) {
    const message = createBaseGetTxDescriptorRequest();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return GetTxDescriptorRequest.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/GetTxDescriptorRequest",
      value: GetTxDescriptorRequest.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return GetTxDescriptorRequest.decode(message.value);
  },
  toProto(message) {
    return GetTxDescriptorRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.base.reflection.v2alpha1.GetTxDescriptorRequest",
      value: GetTxDescriptorRequest.encode(message).finish()
    };
  }
};
function createBaseGetTxDescriptorResponse() {
  return {
    tx: void 0
  };
}
const GetTxDescriptorResponse = {
  typeUrl: "/cosmos.base.reflection.v2alpha1.GetTxDescriptorResponse",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.tx !== void 0) {
      TxDescriptor.encode(message.tx, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseGetTxDescriptorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tx = TxDescriptor.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseGetTxDescriptorResponse();
    message.tx = object.tx !== void 0 && object.tx !== null ? TxDescriptor.fromPartial(object.tx) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseGetTxDescriptorResponse();
    if (object.tx !== void 0 && object.tx !== null) {
      message.tx = TxDescriptor.fromAmino(object.tx);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.tx = message.tx ? TxDescriptor.toAmino(message.tx) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return GetTxDescriptorResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/GetTxDescriptorResponse",
      value: GetTxDescriptorResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return GetTxDescriptorResponse.decode(message.value);
  },
  toProto(message) {
    return GetTxDescriptorResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.base.reflection.v2alpha1.GetTxDescriptorResponse",
      value: GetTxDescriptorResponse.encode(message).finish()
    };
  }
};
function createBaseQueryServicesDescriptor() {
  return {
    queryServices: []
  };
}
const QueryServicesDescriptor = {
  typeUrl: "/cosmos.base.reflection.v2alpha1.QueryServicesDescriptor",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    for (const v of message.queryServices) {
      QueryServiceDescriptor.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryServicesDescriptor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.queryServices.push(QueryServiceDescriptor.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryServicesDescriptor();
    message.queryServices = object.queryServices?.map((e) => QueryServiceDescriptor.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryServicesDescriptor();
    message.queryServices = object.query_services?.map((e) => QueryServiceDescriptor.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.queryServices) {
      obj.query_services = message.queryServices.map((e) => e ? QueryServiceDescriptor.toAmino(e) : void 0);
    } else {
      obj.query_services = message.queryServices;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return QueryServicesDescriptor.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryServicesDescriptor",
      value: QueryServicesDescriptor.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryServicesDescriptor.decode(message.value);
  },
  toProto(message) {
    return QueryServicesDescriptor.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.base.reflection.v2alpha1.QueryServicesDescriptor",
      value: QueryServicesDescriptor.encode(message).finish()
    };
  }
};
function createBaseQueryServiceDescriptor() {
  return {
    fullname: "",
    isModule: false,
    methods: []
  };
}
const QueryServiceDescriptor = {
  typeUrl: "/cosmos.base.reflection.v2alpha1.QueryServiceDescriptor",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.fullname !== "") {
      writer.uint32(10).string(message.fullname);
    }
    if (message.isModule === true) {
      writer.uint32(16).bool(message.isModule);
    }
    for (const v of message.methods) {
      QueryMethodDescriptor.encode(v, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryServiceDescriptor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fullname = reader.string();
          break;
        case 2:
          message.isModule = reader.bool();
          break;
        case 3:
          message.methods.push(QueryMethodDescriptor.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryServiceDescriptor();
    message.fullname = object.fullname ?? "";
    message.isModule = object.isModule ?? false;
    message.methods = object.methods?.map((e) => QueryMethodDescriptor.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryServiceDescriptor();
    if (object.fullname !== void 0 && object.fullname !== null) {
      message.fullname = object.fullname;
    }
    if (object.is_module !== void 0 && object.is_module !== null) {
      message.isModule = object.is_module;
    }
    message.methods = object.methods?.map((e) => QueryMethodDescriptor.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.fullname = message.fullname === "" ? void 0 : message.fullname;
    obj.is_module = message.isModule === false ? void 0 : message.isModule;
    if (message.methods) {
      obj.methods = message.methods.map((e) => e ? QueryMethodDescriptor.toAmino(e) : void 0);
    } else {
      obj.methods = message.methods;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return QueryServiceDescriptor.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryServiceDescriptor",
      value: QueryServiceDescriptor.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryServiceDescriptor.decode(message.value);
  },
  toProto(message) {
    return QueryServiceDescriptor.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.base.reflection.v2alpha1.QueryServiceDescriptor",
      value: QueryServiceDescriptor.encode(message).finish()
    };
  }
};
function createBaseQueryMethodDescriptor() {
  return {
    name: "",
    fullQueryPath: ""
  };
}
const QueryMethodDescriptor = {
  typeUrl: "/cosmos.base.reflection.v2alpha1.QueryMethodDescriptor",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.fullQueryPath !== "") {
      writer.uint32(18).string(message.fullQueryPath);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryMethodDescriptor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.fullQueryPath = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryMethodDescriptor();
    message.name = object.name ?? "";
    message.fullQueryPath = object.fullQueryPath ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryMethodDescriptor();
    if (object.name !== void 0 && object.name !== null) {
      message.name = object.name;
    }
    if (object.full_query_path !== void 0 && object.full_query_path !== null) {
      message.fullQueryPath = object.full_query_path;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.name = message.name === "" ? void 0 : message.name;
    obj.full_query_path = message.fullQueryPath === "" ? void 0 : message.fullQueryPath;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryMethodDescriptor.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryMethodDescriptor",
      value: QueryMethodDescriptor.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryMethodDescriptor.decode(message.value);
  },
  toProto(message) {
    return QueryMethodDescriptor.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.base.reflection.v2alpha1.QueryMethodDescriptor",
      value: QueryMethodDescriptor.encode(message).finish()
    };
  }
};
// Removed broken CommonJS export annotation
