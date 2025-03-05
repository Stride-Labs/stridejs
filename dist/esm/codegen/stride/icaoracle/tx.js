import { BinaryReader, BinaryWriter } from "../../binary";
function createBaseMsgAddOracle() {
  return {
    creator: "",
    connectionId: ""
  };
}
const MsgAddOracle = {
  typeUrl: "/stride.icaoracle.MsgAddOracle",
  encode(message, writer = BinaryWriter.create()) {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.connectionId !== "") {
      writer.uint32(18).string(message.connectionId);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgAddOracle();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.connectionId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgAddOracle();
    message.creator = object.creator ?? "";
    message.connectionId = object.connectionId ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgAddOracle();
    if (object.creator !== void 0 && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.connection_id !== void 0 && object.connection_id !== null) {
      message.connectionId = object.connection_id;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.creator = message.creator === "" ? void 0 : message.creator;
    obj.connection_id = message.connectionId === "" ? void 0 : message.connectionId;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgAddOracle.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "stride/x/icaoracle/MsgAddOracle",
      value: MsgAddOracle.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgAddOracle.decode(message.value);
  },
  toProto(message) {
    return MsgAddOracle.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.icaoracle.MsgAddOracle",
      value: MsgAddOracle.encode(message).finish()
    };
  }
};
function createBaseMsgAddOracleResponse() {
  return {};
}
const MsgAddOracleResponse = {
  typeUrl: "/stride.icaoracle.MsgAddOracleResponse",
  encode(_, writer = BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgAddOracleResponse();
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
    const message = createBaseMsgAddOracleResponse();
    return message;
  },
  fromAmino(_) {
    const message = createBaseMsgAddOracleResponse();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return MsgAddOracleResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return MsgAddOracleResponse.decode(message.value);
  },
  toProto(message) {
    return MsgAddOracleResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.icaoracle.MsgAddOracleResponse",
      value: MsgAddOracleResponse.encode(message).finish()
    };
  }
};
function createBaseMsgInstantiateOracle() {
  return {
    creator: "",
    oracleChainId: "",
    contractCodeId: BigInt(0),
    transferChannelOnOracle: ""
  };
}
const MsgInstantiateOracle = {
  typeUrl: "/stride.icaoracle.MsgInstantiateOracle",
  encode(message, writer = BinaryWriter.create()) {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.oracleChainId !== "") {
      writer.uint32(18).string(message.oracleChainId);
    }
    if (message.contractCodeId !== BigInt(0)) {
      writer.uint32(24).uint64(message.contractCodeId);
    }
    if (message.transferChannelOnOracle !== "") {
      writer.uint32(34).string(message.transferChannelOnOracle);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgInstantiateOracle();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.oracleChainId = reader.string();
          break;
        case 3:
          message.contractCodeId = reader.uint64();
          break;
        case 4:
          message.transferChannelOnOracle = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgInstantiateOracle();
    message.creator = object.creator ?? "";
    message.oracleChainId = object.oracleChainId ?? "";
    message.contractCodeId = object.contractCodeId !== void 0 && object.contractCodeId !== null ? BigInt(object.contractCodeId.toString()) : BigInt(0);
    message.transferChannelOnOracle = object.transferChannelOnOracle ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgInstantiateOracle();
    if (object.creator !== void 0 && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.oracle_chain_id !== void 0 && object.oracle_chain_id !== null) {
      message.oracleChainId = object.oracle_chain_id;
    }
    if (object.contract_code_id !== void 0 && object.contract_code_id !== null) {
      message.contractCodeId = BigInt(object.contract_code_id);
    }
    if (object.transfer_channel_on_oracle !== void 0 && object.transfer_channel_on_oracle !== null) {
      message.transferChannelOnOracle = object.transfer_channel_on_oracle;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.creator = message.creator === "" ? void 0 : message.creator;
    obj.oracle_chain_id = message.oracleChainId === "" ? void 0 : message.oracleChainId;
    obj.contract_code_id = message.contractCodeId !== BigInt(0) ? message.contractCodeId?.toString() : void 0;
    obj.transfer_channel_on_oracle = message.transferChannelOnOracle === "" ? void 0 : message.transferChannelOnOracle;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgInstantiateOracle.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "stride/x/icaoracle/MsgInstantiateOracle",
      value: MsgInstantiateOracle.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgInstantiateOracle.decode(message.value);
  },
  toProto(message) {
    return MsgInstantiateOracle.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.icaoracle.MsgInstantiateOracle",
      value: MsgInstantiateOracle.encode(message).finish()
    };
  }
};
function createBaseMsgInstantiateOracleResponse() {
  return {};
}
const MsgInstantiateOracleResponse = {
  typeUrl: "/stride.icaoracle.MsgInstantiateOracleResponse",
  encode(_, writer = BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgInstantiateOracleResponse();
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
    const message = createBaseMsgInstantiateOracleResponse();
    return message;
  },
  fromAmino(_) {
    const message = createBaseMsgInstantiateOracleResponse();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return MsgInstantiateOracleResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return MsgInstantiateOracleResponse.decode(message.value);
  },
  toProto(message) {
    return MsgInstantiateOracleResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.icaoracle.MsgInstantiateOracleResponse",
      value: MsgInstantiateOracleResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRestoreOracleICA() {
  return {
    creator: "",
    oracleChainId: ""
  };
}
const MsgRestoreOracleICA = {
  typeUrl: "/stride.icaoracle.MsgRestoreOracleICA",
  encode(message, writer = BinaryWriter.create()) {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.oracleChainId !== "") {
      writer.uint32(18).string(message.oracleChainId);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgRestoreOracleICA();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
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
    const message = createBaseMsgRestoreOracleICA();
    message.creator = object.creator ?? "";
    message.oracleChainId = object.oracleChainId ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgRestoreOracleICA();
    if (object.creator !== void 0 && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.oracle_chain_id !== void 0 && object.oracle_chain_id !== null) {
      message.oracleChainId = object.oracle_chain_id;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.creator = message.creator === "" ? void 0 : message.creator;
    obj.oracle_chain_id = message.oracleChainId === "" ? void 0 : message.oracleChainId;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgRestoreOracleICA.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "stride/x/icaoracle/MsgRestoreOracleICA",
      value: MsgRestoreOracleICA.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgRestoreOracleICA.decode(message.value);
  },
  toProto(message) {
    return MsgRestoreOracleICA.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.icaoracle.MsgRestoreOracleICA",
      value: MsgRestoreOracleICA.encode(message).finish()
    };
  }
};
function createBaseMsgRestoreOracleICAResponse() {
  return {};
}
const MsgRestoreOracleICAResponse = {
  typeUrl: "/stride.icaoracle.MsgRestoreOracleICAResponse",
  encode(_, writer = BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgRestoreOracleICAResponse();
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
    const message = createBaseMsgRestoreOracleICAResponse();
    return message;
  },
  fromAmino(_) {
    const message = createBaseMsgRestoreOracleICAResponse();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return MsgRestoreOracleICAResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return MsgRestoreOracleICAResponse.decode(message.value);
  },
  toProto(message) {
    return MsgRestoreOracleICAResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.icaoracle.MsgRestoreOracleICAResponse",
      value: MsgRestoreOracleICAResponse.encode(message).finish()
    };
  }
};
function createBaseMsgToggleOracle() {
  return {
    authority: "",
    oracleChainId: "",
    active: false
  };
}
const MsgToggleOracle = {
  typeUrl: "/stride.icaoracle.MsgToggleOracle",
  encode(message, writer = BinaryWriter.create()) {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.oracleChainId !== "") {
      writer.uint32(18).string(message.oracleChainId);
    }
    if (message.active === true) {
      writer.uint32(24).bool(message.active);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgToggleOracle();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.oracleChainId = reader.string();
          break;
        case 3:
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
    const message = createBaseMsgToggleOracle();
    message.authority = object.authority ?? "";
    message.oracleChainId = object.oracleChainId ?? "";
    message.active = object.active ?? false;
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgToggleOracle();
    if (object.authority !== void 0 && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.oracle_chain_id !== void 0 && object.oracle_chain_id !== null) {
      message.oracleChainId = object.oracle_chain_id;
    }
    if (object.active !== void 0 && object.active !== null) {
      message.active = object.active;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.authority = message.authority === "" ? void 0 : message.authority;
    obj.oracle_chain_id = message.oracleChainId === "" ? void 0 : message.oracleChainId;
    obj.active = message.active === false ? void 0 : message.active;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgToggleOracle.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "stride/x/icaoracle/MsgToggleOracle",
      value: MsgToggleOracle.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgToggleOracle.decode(message.value);
  },
  toProto(message) {
    return MsgToggleOracle.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.icaoracle.MsgToggleOracle",
      value: MsgToggleOracle.encode(message).finish()
    };
  }
};
function createBaseMsgToggleOracleResponse() {
  return {};
}
const MsgToggleOracleResponse = {
  typeUrl: "/stride.icaoracle.MsgToggleOracleResponse",
  encode(_, writer = BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgToggleOracleResponse();
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
    const message = createBaseMsgToggleOracleResponse();
    return message;
  },
  fromAmino(_) {
    const message = createBaseMsgToggleOracleResponse();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return MsgToggleOracleResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return MsgToggleOracleResponse.decode(message.value);
  },
  toProto(message) {
    return MsgToggleOracleResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.icaoracle.MsgToggleOracleResponse",
      value: MsgToggleOracleResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRemoveOracle() {
  return {
    authority: "",
    oracleChainId: ""
  };
}
const MsgRemoveOracle = {
  typeUrl: "/stride.icaoracle.MsgRemoveOracle",
  encode(message, writer = BinaryWriter.create()) {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.oracleChainId !== "") {
      writer.uint32(18).string(message.oracleChainId);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveOracle();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
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
    const message = createBaseMsgRemoveOracle();
    message.authority = object.authority ?? "";
    message.oracleChainId = object.oracleChainId ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgRemoveOracle();
    if (object.authority !== void 0 && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.oracle_chain_id !== void 0 && object.oracle_chain_id !== null) {
      message.oracleChainId = object.oracle_chain_id;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.authority = message.authority === "" ? void 0 : message.authority;
    obj.oracle_chain_id = message.oracleChainId === "" ? void 0 : message.oracleChainId;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgRemoveOracle.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "stride/x/icaoracle/MsgRemoveOracle",
      value: MsgRemoveOracle.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgRemoveOracle.decode(message.value);
  },
  toProto(message) {
    return MsgRemoveOracle.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.icaoracle.MsgRemoveOracle",
      value: MsgRemoveOracle.encode(message).finish()
    };
  }
};
function createBaseMsgRemoveOracleResponse() {
  return {};
}
const MsgRemoveOracleResponse = {
  typeUrl: "/stride.icaoracle.MsgRemoveOracleResponse",
  encode(_, writer = BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveOracleResponse();
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
    const message = createBaseMsgRemoveOracleResponse();
    return message;
  },
  fromAmino(_) {
    const message = createBaseMsgRemoveOracleResponse();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return MsgRemoveOracleResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return MsgRemoveOracleResponse.decode(message.value);
  },
  toProto(message) {
    return MsgRemoveOracleResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.icaoracle.MsgRemoveOracleResponse",
      value: MsgRemoveOracleResponse.encode(message).finish()
    };
  }
};
export {
  MsgAddOracle,
  MsgAddOracleResponse,
  MsgInstantiateOracle,
  MsgInstantiateOracleResponse,
  MsgRemoveOracle,
  MsgRemoveOracleResponse,
  MsgRestoreOracleICA,
  MsgRestoreOracleICAResponse,
  MsgToggleOracle,
  MsgToggleOracleResponse
};
