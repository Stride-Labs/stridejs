import { BinaryReader, BinaryWriter } from "../../../../binary";
import { bytesFromBase64, base64FromBytes } from "../../../../helpers";
function createBaseMsgStoreCode() {
  return {
    signer: "",
    wasmByteCode: new Uint8Array()
  };
}
const MsgStoreCode = {
  typeUrl: "/ibc.lightclients.wasm.v1.MsgStoreCode",
  encode(message, writer = BinaryWriter.create()) {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }
    if (message.wasmByteCode.length !== 0) {
      writer.uint32(18).bytes(message.wasmByteCode);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgStoreCode();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signer = reader.string();
          break;
        case 2:
          message.wasmByteCode = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgStoreCode();
    message.signer = object.signer ?? "";
    message.wasmByteCode = object.wasmByteCode ?? new Uint8Array();
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgStoreCode();
    if (object.signer !== void 0 && object.signer !== null) {
      message.signer = object.signer;
    }
    if (object.wasm_byte_code !== void 0 && object.wasm_byte_code !== null) {
      message.wasmByteCode = bytesFromBase64(object.wasm_byte_code);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.signer = message.signer === "" ? void 0 : message.signer;
    obj.wasm_byte_code = message.wasmByteCode ? base64FromBytes(message.wasmByteCode) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgStoreCode.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgStoreCode",
      value: MsgStoreCode.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgStoreCode.decode(message.value);
  },
  toProto(message) {
    return MsgStoreCode.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.lightclients.wasm.v1.MsgStoreCode",
      value: MsgStoreCode.encode(message).finish()
    };
  }
};
function createBaseMsgStoreCodeResponse() {
  return {
    checksum: new Uint8Array()
  };
}
const MsgStoreCodeResponse = {
  typeUrl: "/ibc.lightclients.wasm.v1.MsgStoreCodeResponse",
  encode(message, writer = BinaryWriter.create()) {
    if (message.checksum.length !== 0) {
      writer.uint32(10).bytes(message.checksum);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgStoreCodeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.checksum = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgStoreCodeResponse();
    message.checksum = object.checksum ?? new Uint8Array();
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgStoreCodeResponse();
    if (object.checksum !== void 0 && object.checksum !== null) {
      message.checksum = bytesFromBase64(object.checksum);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.checksum = message.checksum ? base64FromBytes(message.checksum) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgStoreCodeResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgStoreCodeResponse",
      value: MsgStoreCodeResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgStoreCodeResponse.decode(message.value);
  },
  toProto(message) {
    return MsgStoreCodeResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.lightclients.wasm.v1.MsgStoreCodeResponse",
      value: MsgStoreCodeResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRemoveChecksum() {
  return {
    signer: "",
    checksum: new Uint8Array()
  };
}
const MsgRemoveChecksum = {
  typeUrl: "/ibc.lightclients.wasm.v1.MsgRemoveChecksum",
  encode(message, writer = BinaryWriter.create()) {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }
    if (message.checksum.length !== 0) {
      writer.uint32(18).bytes(message.checksum);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveChecksum();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signer = reader.string();
          break;
        case 2:
          message.checksum = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgRemoveChecksum();
    message.signer = object.signer ?? "";
    message.checksum = object.checksum ?? new Uint8Array();
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgRemoveChecksum();
    if (object.signer !== void 0 && object.signer !== null) {
      message.signer = object.signer;
    }
    if (object.checksum !== void 0 && object.checksum !== null) {
      message.checksum = bytesFromBase64(object.checksum);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.signer = message.signer === "" ? void 0 : message.signer;
    obj.checksum = message.checksum ? base64FromBytes(message.checksum) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgRemoveChecksum.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgRemoveChecksum",
      value: MsgRemoveChecksum.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgRemoveChecksum.decode(message.value);
  },
  toProto(message) {
    return MsgRemoveChecksum.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.lightclients.wasm.v1.MsgRemoveChecksum",
      value: MsgRemoveChecksum.encode(message).finish()
    };
  }
};
function createBaseMsgRemoveChecksumResponse() {
  return {};
}
const MsgRemoveChecksumResponse = {
  typeUrl: "/ibc.lightclients.wasm.v1.MsgRemoveChecksumResponse",
  encode(_, writer = BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveChecksumResponse();
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
    const message = createBaseMsgRemoveChecksumResponse();
    return message;
  },
  fromAmino(_) {
    const message = createBaseMsgRemoveChecksumResponse();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return MsgRemoveChecksumResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgRemoveChecksumResponse",
      value: MsgRemoveChecksumResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgRemoveChecksumResponse.decode(message.value);
  },
  toProto(message) {
    return MsgRemoveChecksumResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.lightclients.wasm.v1.MsgRemoveChecksumResponse",
      value: MsgRemoveChecksumResponse.encode(message).finish()
    };
  }
};
function createBaseMsgMigrateContract() {
  return {
    signer: "",
    clientId: "",
    checksum: new Uint8Array(),
    msg: new Uint8Array()
  };
}
const MsgMigrateContract = {
  typeUrl: "/ibc.lightclients.wasm.v1.MsgMigrateContract",
  encode(message, writer = BinaryWriter.create()) {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }
    if (message.clientId !== "") {
      writer.uint32(18).string(message.clientId);
    }
    if (message.checksum.length !== 0) {
      writer.uint32(26).bytes(message.checksum);
    }
    if (message.msg.length !== 0) {
      writer.uint32(34).bytes(message.msg);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgMigrateContract();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signer = reader.string();
          break;
        case 2:
          message.clientId = reader.string();
          break;
        case 3:
          message.checksum = reader.bytes();
          break;
        case 4:
          message.msg = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgMigrateContract();
    message.signer = object.signer ?? "";
    message.clientId = object.clientId ?? "";
    message.checksum = object.checksum ?? new Uint8Array();
    message.msg = object.msg ?? new Uint8Array();
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgMigrateContract();
    if (object.signer !== void 0 && object.signer !== null) {
      message.signer = object.signer;
    }
    if (object.client_id !== void 0 && object.client_id !== null) {
      message.clientId = object.client_id;
    }
    if (object.checksum !== void 0 && object.checksum !== null) {
      message.checksum = bytesFromBase64(object.checksum);
    }
    if (object.msg !== void 0 && object.msg !== null) {
      message.msg = bytesFromBase64(object.msg);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.signer = message.signer === "" ? void 0 : message.signer;
    obj.client_id = message.clientId === "" ? void 0 : message.clientId;
    obj.checksum = message.checksum ? base64FromBytes(message.checksum) : void 0;
    obj.msg = message.msg ? base64FromBytes(message.msg) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgMigrateContract.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgMigrateContract",
      value: MsgMigrateContract.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgMigrateContract.decode(message.value);
  },
  toProto(message) {
    return MsgMigrateContract.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.lightclients.wasm.v1.MsgMigrateContract",
      value: MsgMigrateContract.encode(message).finish()
    };
  }
};
function createBaseMsgMigrateContractResponse() {
  return {};
}
const MsgMigrateContractResponse = {
  typeUrl: "/ibc.lightclients.wasm.v1.MsgMigrateContractResponse",
  encode(_, writer = BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgMigrateContractResponse();
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
    const message = createBaseMsgMigrateContractResponse();
    return message;
  },
  fromAmino(_) {
    const message = createBaseMsgMigrateContractResponse();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return MsgMigrateContractResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgMigrateContractResponse",
      value: MsgMigrateContractResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgMigrateContractResponse.decode(message.value);
  },
  toProto(message) {
    return MsgMigrateContractResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/ibc.lightclients.wasm.v1.MsgMigrateContractResponse",
      value: MsgMigrateContractResponse.encode(message).finish()
    };
  }
};
export {
  MsgMigrateContract,
  MsgMigrateContractResponse,
  MsgRemoveChecksum,
  MsgRemoveChecksumResponse,
  MsgStoreCode,
  MsgStoreCodeResponse
};
