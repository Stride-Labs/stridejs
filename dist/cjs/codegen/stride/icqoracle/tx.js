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
  MsgRegisterTokenPriceQuery: () => MsgRegisterTokenPriceQuery,
  MsgRegisterTokenPriceQueryResponse: () => MsgRegisterTokenPriceQueryResponse,
  MsgRemoveTokenPriceQuery: () => MsgRemoveTokenPriceQuery,
  MsgRemoveTokenPriceQueryResponse: () => MsgRemoveTokenPriceQueryResponse,
  MsgUpdateParams: () => MsgUpdateParams,
  MsgUpdateParamsResponse: () => MsgUpdateParamsResponse
});
module.exports = __toCommonJS(tx_exports);
var import_icqoracle = require("./icqoracle");
var import_binary = require("../../binary");
function createBaseMsgRegisterTokenPriceQuery() {
  return {
    admin: "",
    baseDenom: "",
    quoteDenom: "",
    osmosisBaseDenom: "",
    osmosisQuoteDenom: "",
    osmosisPoolId: BigInt(0)
  };
}
const MsgRegisterTokenPriceQuery = {
  typeUrl: "/stride.icqoracle.MsgRegisterTokenPriceQuery",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (message.baseDenom !== "") {
      writer.uint32(18).string(message.baseDenom);
    }
    if (message.quoteDenom !== "") {
      writer.uint32(26).string(message.quoteDenom);
    }
    if (message.osmosisBaseDenom !== "") {
      writer.uint32(34).string(message.osmosisBaseDenom);
    }
    if (message.osmosisQuoteDenom !== "") {
      writer.uint32(42).string(message.osmosisQuoteDenom);
    }
    if (message.osmosisPoolId !== BigInt(0)) {
      writer.uint32(48).uint64(message.osmosisPoolId);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterTokenPriceQuery();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.baseDenom = reader.string();
          break;
        case 3:
          message.quoteDenom = reader.string();
          break;
        case 4:
          message.osmosisBaseDenom = reader.string();
          break;
        case 5:
          message.osmosisQuoteDenom = reader.string();
          break;
        case 6:
          message.osmosisPoolId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgRegisterTokenPriceQuery();
    message.admin = object.admin ?? "";
    message.baseDenom = object.baseDenom ?? "";
    message.quoteDenom = object.quoteDenom ?? "";
    message.osmosisBaseDenom = object.osmosisBaseDenom ?? "";
    message.osmosisQuoteDenom = object.osmosisQuoteDenom ?? "";
    message.osmosisPoolId = object.osmosisPoolId !== void 0 && object.osmosisPoolId !== null ? BigInt(object.osmosisPoolId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgRegisterTokenPriceQuery();
    if (object.admin !== void 0 && object.admin !== null) {
      message.admin = object.admin;
    }
    if (object.base_denom !== void 0 && object.base_denom !== null) {
      message.baseDenom = object.base_denom;
    }
    if (object.quote_denom !== void 0 && object.quote_denom !== null) {
      message.quoteDenom = object.quote_denom;
    }
    if (object.osmosis_base_denom !== void 0 && object.osmosis_base_denom !== null) {
      message.osmosisBaseDenom = object.osmosis_base_denom;
    }
    if (object.osmosis_quote_denom !== void 0 && object.osmosis_quote_denom !== null) {
      message.osmosisQuoteDenom = object.osmosis_quote_denom;
    }
    if (object.osmosis_pool_id !== void 0 && object.osmosis_pool_id !== null) {
      message.osmosisPoolId = BigInt(object.osmosis_pool_id);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.admin = message.admin === "" ? void 0 : message.admin;
    obj.base_denom = message.baseDenom === "" ? void 0 : message.baseDenom;
    obj.quote_denom = message.quoteDenom === "" ? void 0 : message.quoteDenom;
    obj.osmosis_base_denom = message.osmosisBaseDenom === "" ? void 0 : message.osmosisBaseDenom;
    obj.osmosis_quote_denom = message.osmosisQuoteDenom === "" ? void 0 : message.osmosisQuoteDenom;
    obj.osmosis_pool_id = message.osmosisPoolId !== BigInt(0) ? message.osmosisPoolId?.toString() : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgRegisterTokenPriceQuery.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "icqoracle/MsgRegisterTokenPriceQuery",
      value: MsgRegisterTokenPriceQuery.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgRegisterTokenPriceQuery.decode(message.value);
  },
  toProto(message) {
    return MsgRegisterTokenPriceQuery.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.icqoracle.MsgRegisterTokenPriceQuery",
      value: MsgRegisterTokenPriceQuery.encode(message).finish()
    };
  }
};
function createBaseMsgRegisterTokenPriceQueryResponse() {
  return {};
}
const MsgRegisterTokenPriceQueryResponse = {
  typeUrl: "/stride.icqoracle.MsgRegisterTokenPriceQueryResponse",
  encode(_, writer = import_binary.BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterTokenPriceQueryResponse();
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
    const message = createBaseMsgRegisterTokenPriceQueryResponse();
    return message;
  },
  fromAmino(_) {
    const message = createBaseMsgRegisterTokenPriceQueryResponse();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return MsgRegisterTokenPriceQueryResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return MsgRegisterTokenPriceQueryResponse.decode(message.value);
  },
  toProto(message) {
    return MsgRegisterTokenPriceQueryResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.icqoracle.MsgRegisterTokenPriceQueryResponse",
      value: MsgRegisterTokenPriceQueryResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRemoveTokenPriceQuery() {
  return {
    admin: "",
    baseDenom: "",
    quoteDenom: "",
    osmosisPoolId: BigInt(0)
  };
}
const MsgRemoveTokenPriceQuery = {
  typeUrl: "/stride.icqoracle.MsgRemoveTokenPriceQuery",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (message.baseDenom !== "") {
      writer.uint32(18).string(message.baseDenom);
    }
    if (message.quoteDenom !== "") {
      writer.uint32(26).string(message.quoteDenom);
    }
    if (message.osmosisPoolId !== BigInt(0)) {
      writer.uint32(32).uint64(message.osmosisPoolId);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveTokenPriceQuery();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.baseDenom = reader.string();
          break;
        case 3:
          message.quoteDenom = reader.string();
          break;
        case 4:
          message.osmosisPoolId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgRemoveTokenPriceQuery();
    message.admin = object.admin ?? "";
    message.baseDenom = object.baseDenom ?? "";
    message.quoteDenom = object.quoteDenom ?? "";
    message.osmosisPoolId = object.osmosisPoolId !== void 0 && object.osmosisPoolId !== null ? BigInt(object.osmosisPoolId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgRemoveTokenPriceQuery();
    if (object.admin !== void 0 && object.admin !== null) {
      message.admin = object.admin;
    }
    if (object.base_denom !== void 0 && object.base_denom !== null) {
      message.baseDenom = object.base_denom;
    }
    if (object.quote_denom !== void 0 && object.quote_denom !== null) {
      message.quoteDenom = object.quote_denom;
    }
    if (object.osmosis_pool_id !== void 0 && object.osmosis_pool_id !== null) {
      message.osmosisPoolId = BigInt(object.osmosis_pool_id);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.admin = message.admin === "" ? void 0 : message.admin;
    obj.base_denom = message.baseDenom === "" ? void 0 : message.baseDenom;
    obj.quote_denom = message.quoteDenom === "" ? void 0 : message.quoteDenom;
    obj.osmosis_pool_id = message.osmosisPoolId !== BigInt(0) ? message.osmosisPoolId?.toString() : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgRemoveTokenPriceQuery.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "icqoracle/MsgRemoveTokenPriceQuery",
      value: MsgRemoveTokenPriceQuery.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgRemoveTokenPriceQuery.decode(message.value);
  },
  toProto(message) {
    return MsgRemoveTokenPriceQuery.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.icqoracle.MsgRemoveTokenPriceQuery",
      value: MsgRemoveTokenPriceQuery.encode(message).finish()
    };
  }
};
function createBaseMsgRemoveTokenPriceQueryResponse() {
  return {};
}
const MsgRemoveTokenPriceQueryResponse = {
  typeUrl: "/stride.icqoracle.MsgRemoveTokenPriceQueryResponse",
  encode(_, writer = import_binary.BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveTokenPriceQueryResponse();
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
    const message = createBaseMsgRemoveTokenPriceQueryResponse();
    return message;
  },
  fromAmino(_) {
    const message = createBaseMsgRemoveTokenPriceQueryResponse();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return MsgRemoveTokenPriceQueryResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return MsgRemoveTokenPriceQueryResponse.decode(message.value);
  },
  toProto(message) {
    return MsgRemoveTokenPriceQueryResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.icqoracle.MsgRemoveTokenPriceQueryResponse",
      value: MsgRemoveTokenPriceQueryResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateParams() {
  return {
    authority: "",
    params: import_icqoracle.Params.fromPartial({})
  };
}
const MsgUpdateParams = {
  typeUrl: "/stride.icqoracle.MsgUpdateParams",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== void 0) {
      import_icqoracle.Params.encode(message.params, writer.uint32(18).fork()).ldelim();
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
          message.params = import_icqoracle.Params.decode(reader, reader.uint32());
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
    message.params = object.params !== void 0 && object.params !== null ? import_icqoracle.Params.fromPartial(object.params) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgUpdateParams();
    if (object.authority !== void 0 && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.params !== void 0 && object.params !== null) {
      message.params = import_icqoracle.Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.authority = message.authority === "" ? void 0 : message.authority;
    obj.params = message.params ? import_icqoracle.Params.toAmino(message.params) : import_icqoracle.Params.toAmino(import_icqoracle.Params.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object) {
    return MsgUpdateParams.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "icqoracle/MsgUpdateParams",
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
      typeUrl: "/stride.icqoracle.MsgUpdateParams",
      value: MsgUpdateParams.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateParamsResponse() {
  return {};
}
const MsgUpdateParamsResponse = {
  typeUrl: "/stride.icqoracle.MsgUpdateParamsResponse",
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
  fromProtoMsg(message) {
    return MsgUpdateParamsResponse.decode(message.value);
  },
  toProto(message) {
    return MsgUpdateParamsResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.icqoracle.MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.encode(message).finish()
    };
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  MsgRegisterTokenPriceQuery,
  MsgRegisterTokenPriceQueryResponse,
  MsgRemoveTokenPriceQuery,
  MsgRemoveTokenPriceQueryResponse,
  MsgUpdateParams,
  MsgUpdateParamsResponse
});
