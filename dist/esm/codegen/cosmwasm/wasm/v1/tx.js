import { AccessConfig, Params } from "./types";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { fromBase64, toBase64, toUtf8, fromUtf8 } from "@cosmjs/encoding";
import { bytesFromBase64, base64FromBytes } from "../../../helpers";
function createBaseMsgStoreCode() {
  return {
    sender: "",
    wasmByteCode: new Uint8Array(),
    instantiatePermission: void 0
  };
}
const MsgStoreCode = {
  typeUrl: "/cosmwasm.wasm.v1.MsgStoreCode",
  encode(message, writer = BinaryWriter.create()) {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.wasmByteCode.length !== 0) {
      writer.uint32(18).bytes(message.wasmByteCode);
    }
    if (message.instantiatePermission !== void 0) {
      AccessConfig.encode(message.instantiatePermission, writer.uint32(42).fork()).ldelim();
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
          message.sender = reader.string();
          break;
        case 2:
          message.wasmByteCode = reader.bytes();
          break;
        case 5:
          message.instantiatePermission = AccessConfig.decode(reader, reader.uint32());
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
    message.sender = object.sender ?? "";
    message.wasmByteCode = object.wasmByteCode ?? new Uint8Array();
    message.instantiatePermission = object.instantiatePermission !== void 0 && object.instantiatePermission !== null ? AccessConfig.fromPartial(object.instantiatePermission) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgStoreCode();
    if (object.sender !== void 0 && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.wasm_byte_code !== void 0 && object.wasm_byte_code !== null) {
      message.wasmByteCode = fromBase64(object.wasm_byte_code);
    }
    if (object.instantiate_permission !== void 0 && object.instantiate_permission !== null) {
      message.instantiatePermission = AccessConfig.fromAmino(object.instantiate_permission);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.sender = message.sender === "" ? void 0 : message.sender;
    obj.wasm_byte_code = message.wasmByteCode ? toBase64(message.wasmByteCode) : void 0;
    obj.instantiate_permission = message.instantiatePermission ? AccessConfig.toAmino(message.instantiatePermission) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgStoreCode.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "wasm/MsgStoreCode",
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
      typeUrl: "/cosmwasm.wasm.v1.MsgStoreCode",
      value: MsgStoreCode.encode(message).finish()
    };
  }
};
function createBaseMsgStoreCodeResponse() {
  return {
    codeId: BigInt(0),
    checksum: new Uint8Array()
  };
}
const MsgStoreCodeResponse = {
  typeUrl: "/cosmwasm.wasm.v1.MsgStoreCodeResponse",
  encode(message, writer = BinaryWriter.create()) {
    if (message.codeId !== BigInt(0)) {
      writer.uint32(8).uint64(message.codeId);
    }
    if (message.checksum.length !== 0) {
      writer.uint32(18).bytes(message.checksum);
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
          message.codeId = reader.uint64();
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
    const message = createBaseMsgStoreCodeResponse();
    message.codeId = object.codeId !== void 0 && object.codeId !== null ? BigInt(object.codeId.toString()) : BigInt(0);
    message.checksum = object.checksum ?? new Uint8Array();
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgStoreCodeResponse();
    if (object.code_id !== void 0 && object.code_id !== null) {
      message.codeId = BigInt(object.code_id);
    }
    if (object.checksum !== void 0 && object.checksum !== null) {
      message.checksum = bytesFromBase64(object.checksum);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.code_id = message.codeId !== BigInt(0) ? message.codeId?.toString() : void 0;
    obj.checksum = message.checksum ? base64FromBytes(message.checksum) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgStoreCodeResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "wasm/MsgStoreCodeResponse",
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
      typeUrl: "/cosmwasm.wasm.v1.MsgStoreCodeResponse",
      value: MsgStoreCodeResponse.encode(message).finish()
    };
  }
};
function createBaseMsgInstantiateContract() {
  return {
    sender: "",
    admin: "",
    codeId: BigInt(0),
    label: "",
    msg: new Uint8Array(),
    funds: []
  };
}
const MsgInstantiateContract = {
  typeUrl: "/cosmwasm.wasm.v1.MsgInstantiateContract",
  encode(message, writer = BinaryWriter.create()) {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.admin !== "") {
      writer.uint32(18).string(message.admin);
    }
    if (message.codeId !== BigInt(0)) {
      writer.uint32(24).uint64(message.codeId);
    }
    if (message.label !== "") {
      writer.uint32(34).string(message.label);
    }
    if (message.msg.length !== 0) {
      writer.uint32(42).bytes(message.msg);
    }
    for (const v of message.funds) {
      Coin.encode(v, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgInstantiateContract();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.admin = reader.string();
          break;
        case 3:
          message.codeId = reader.uint64();
          break;
        case 4:
          message.label = reader.string();
          break;
        case 5:
          message.msg = reader.bytes();
          break;
        case 6:
          message.funds.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgInstantiateContract();
    message.sender = object.sender ?? "";
    message.admin = object.admin ?? "";
    message.codeId = object.codeId !== void 0 && object.codeId !== null ? BigInt(object.codeId.toString()) : BigInt(0);
    message.label = object.label ?? "";
    message.msg = object.msg ?? new Uint8Array();
    message.funds = object.funds?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgInstantiateContract();
    if (object.sender !== void 0 && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.admin !== void 0 && object.admin !== null) {
      message.admin = object.admin;
    }
    if (object.code_id !== void 0 && object.code_id !== null) {
      message.codeId = BigInt(object.code_id);
    }
    if (object.label !== void 0 && object.label !== null) {
      message.label = object.label;
    }
    if (object.msg !== void 0 && object.msg !== null) {
      message.msg = toUtf8(JSON.stringify(object.msg));
    }
    message.funds = object.funds?.map((e) => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.sender = message.sender === "" ? void 0 : message.sender;
    obj.admin = message.admin === "" ? void 0 : message.admin;
    obj.code_id = message.codeId !== BigInt(0) ? message.codeId?.toString() : void 0;
    obj.label = message.label === "" ? void 0 : message.label;
    obj.msg = message.msg ? JSON.parse(fromUtf8(message.msg)) : void 0;
    if (message.funds) {
      obj.funds = message.funds.map((e) => e ? Coin.toAmino(e) : void 0);
    } else {
      obj.funds = message.funds;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return MsgInstantiateContract.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "wasm/MsgInstantiateContract",
      value: MsgInstantiateContract.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgInstantiateContract.decode(message.value);
  },
  toProto(message) {
    return MsgInstantiateContract.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgInstantiateContract",
      value: MsgInstantiateContract.encode(message).finish()
    };
  }
};
function createBaseMsgInstantiateContractResponse() {
  return {
    address: "",
    data: new Uint8Array()
  };
}
const MsgInstantiateContractResponse = {
  typeUrl: "/cosmwasm.wasm.v1.MsgInstantiateContractResponse",
  encode(message, writer = BinaryWriter.create()) {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.data.length !== 0) {
      writer.uint32(18).bytes(message.data);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgInstantiateContractResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.data = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgInstantiateContractResponse();
    message.address = object.address ?? "";
    message.data = object.data ?? new Uint8Array();
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgInstantiateContractResponse();
    if (object.address !== void 0 && object.address !== null) {
      message.address = object.address;
    }
    if (object.data !== void 0 && object.data !== null) {
      message.data = bytesFromBase64(object.data);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.address = message.address === "" ? void 0 : message.address;
    obj.data = message.data ? base64FromBytes(message.data) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgInstantiateContractResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "wasm/MsgInstantiateContractResponse",
      value: MsgInstantiateContractResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgInstantiateContractResponse.decode(message.value);
  },
  toProto(message) {
    return MsgInstantiateContractResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgInstantiateContractResponse",
      value: MsgInstantiateContractResponse.encode(message).finish()
    };
  }
};
function createBaseMsgInstantiateContract2() {
  return {
    sender: "",
    admin: "",
    codeId: BigInt(0),
    label: "",
    msg: new Uint8Array(),
    funds: [],
    salt: new Uint8Array(),
    fixMsg: false
  };
}
const MsgInstantiateContract2 = {
  typeUrl: "/cosmwasm.wasm.v1.MsgInstantiateContract2",
  encode(message, writer = BinaryWriter.create()) {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.admin !== "") {
      writer.uint32(18).string(message.admin);
    }
    if (message.codeId !== BigInt(0)) {
      writer.uint32(24).uint64(message.codeId);
    }
    if (message.label !== "") {
      writer.uint32(34).string(message.label);
    }
    if (message.msg.length !== 0) {
      writer.uint32(42).bytes(message.msg);
    }
    for (const v of message.funds) {
      Coin.encode(v, writer.uint32(50).fork()).ldelim();
    }
    if (message.salt.length !== 0) {
      writer.uint32(58).bytes(message.salt);
    }
    if (message.fixMsg === true) {
      writer.uint32(64).bool(message.fixMsg);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgInstantiateContract2();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.admin = reader.string();
          break;
        case 3:
          message.codeId = reader.uint64();
          break;
        case 4:
          message.label = reader.string();
          break;
        case 5:
          message.msg = reader.bytes();
          break;
        case 6:
          message.funds.push(Coin.decode(reader, reader.uint32()));
          break;
        case 7:
          message.salt = reader.bytes();
          break;
        case 8:
          message.fixMsg = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgInstantiateContract2();
    message.sender = object.sender ?? "";
    message.admin = object.admin ?? "";
    message.codeId = object.codeId !== void 0 && object.codeId !== null ? BigInt(object.codeId.toString()) : BigInt(0);
    message.label = object.label ?? "";
    message.msg = object.msg ?? new Uint8Array();
    message.funds = object.funds?.map((e) => Coin.fromPartial(e)) || [];
    message.salt = object.salt ?? new Uint8Array();
    message.fixMsg = object.fixMsg ?? false;
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgInstantiateContract2();
    if (object.sender !== void 0 && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.admin !== void 0 && object.admin !== null) {
      message.admin = object.admin;
    }
    if (object.code_id !== void 0 && object.code_id !== null) {
      message.codeId = BigInt(object.code_id);
    }
    if (object.label !== void 0 && object.label !== null) {
      message.label = object.label;
    }
    if (object.msg !== void 0 && object.msg !== null) {
      message.msg = toUtf8(JSON.stringify(object.msg));
    }
    message.funds = object.funds?.map((e) => Coin.fromAmino(e)) || [];
    if (object.salt !== void 0 && object.salt !== null) {
      message.salt = bytesFromBase64(object.salt);
    }
    if (object.fix_msg !== void 0 && object.fix_msg !== null) {
      message.fixMsg = object.fix_msg;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.sender = message.sender === "" ? void 0 : message.sender;
    obj.admin = message.admin === "" ? void 0 : message.admin;
    obj.code_id = message.codeId !== BigInt(0) ? message.codeId?.toString() : void 0;
    obj.label = message.label === "" ? void 0 : message.label;
    obj.msg = message.msg ? JSON.parse(fromUtf8(message.msg)) : void 0;
    if (message.funds) {
      obj.funds = message.funds.map((e) => e ? Coin.toAmino(e) : void 0);
    } else {
      obj.funds = message.funds;
    }
    obj.salt = message.salt ? base64FromBytes(message.salt) : void 0;
    obj.fix_msg = message.fixMsg === false ? void 0 : message.fixMsg;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgInstantiateContract2.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "wasm/MsgInstantiateContract2",
      value: MsgInstantiateContract2.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgInstantiateContract2.decode(message.value);
  },
  toProto(message) {
    return MsgInstantiateContract2.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgInstantiateContract2",
      value: MsgInstantiateContract2.encode(message).finish()
    };
  }
};
function createBaseMsgInstantiateContract2Response() {
  return {
    address: "",
    data: new Uint8Array()
  };
}
const MsgInstantiateContract2Response = {
  typeUrl: "/cosmwasm.wasm.v1.MsgInstantiateContract2Response",
  encode(message, writer = BinaryWriter.create()) {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.data.length !== 0) {
      writer.uint32(18).bytes(message.data);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgInstantiateContract2Response();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.data = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgInstantiateContract2Response();
    message.address = object.address ?? "";
    message.data = object.data ?? new Uint8Array();
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgInstantiateContract2Response();
    if (object.address !== void 0 && object.address !== null) {
      message.address = object.address;
    }
    if (object.data !== void 0 && object.data !== null) {
      message.data = bytesFromBase64(object.data);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.address = message.address === "" ? void 0 : message.address;
    obj.data = message.data ? base64FromBytes(message.data) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgInstantiateContract2Response.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "wasm/MsgInstantiateContract2Response",
      value: MsgInstantiateContract2Response.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgInstantiateContract2Response.decode(message.value);
  },
  toProto(message) {
    return MsgInstantiateContract2Response.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgInstantiateContract2Response",
      value: MsgInstantiateContract2Response.encode(message).finish()
    };
  }
};
function createBaseMsgExecuteContract() {
  return {
    sender: "",
    contract: "",
    msg: new Uint8Array(),
    funds: []
  };
}
const MsgExecuteContract = {
  typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
  encode(message, writer = BinaryWriter.create()) {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.contract !== "") {
      writer.uint32(18).string(message.contract);
    }
    if (message.msg.length !== 0) {
      writer.uint32(26).bytes(message.msg);
    }
    for (const v of message.funds) {
      Coin.encode(v, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgExecuteContract();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.contract = reader.string();
          break;
        case 3:
          message.msg = reader.bytes();
          break;
        case 5:
          message.funds.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgExecuteContract();
    message.sender = object.sender ?? "";
    message.contract = object.contract ?? "";
    message.msg = object.msg ?? new Uint8Array();
    message.funds = object.funds?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgExecuteContract();
    if (object.sender !== void 0 && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.contract !== void 0 && object.contract !== null) {
      message.contract = object.contract;
    }
    if (object.msg !== void 0 && object.msg !== null) {
      message.msg = toUtf8(JSON.stringify(object.msg));
    }
    message.funds = object.funds?.map((e) => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.sender = message.sender === "" ? void 0 : message.sender;
    obj.contract = message.contract === "" ? void 0 : message.contract;
    obj.msg = message.msg ? JSON.parse(fromUtf8(message.msg)) : void 0;
    if (message.funds) {
      obj.funds = message.funds.map((e) => e ? Coin.toAmino(e) : void 0);
    } else {
      obj.funds = message.funds;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return MsgExecuteContract.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "wasm/MsgExecuteContract",
      value: MsgExecuteContract.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgExecuteContract.decode(message.value);
  },
  toProto(message) {
    return MsgExecuteContract.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.encode(message).finish()
    };
  }
};
function createBaseMsgExecuteContractResponse() {
  return {
    data: new Uint8Array()
  };
}
const MsgExecuteContractResponse = {
  typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContractResponse",
  encode(message, writer = BinaryWriter.create()) {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgExecuteContractResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgExecuteContractResponse();
    message.data = object.data ?? new Uint8Array();
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgExecuteContractResponse();
    if (object.data !== void 0 && object.data !== null) {
      message.data = bytesFromBase64(object.data);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.data = message.data ? base64FromBytes(message.data) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgExecuteContractResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "wasm/MsgExecuteContractResponse",
      value: MsgExecuteContractResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgExecuteContractResponse.decode(message.value);
  },
  toProto(message) {
    return MsgExecuteContractResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContractResponse",
      value: MsgExecuteContractResponse.encode(message).finish()
    };
  }
};
function createBaseMsgMigrateContract() {
  return {
    sender: "",
    contract: "",
    codeId: BigInt(0),
    msg: new Uint8Array()
  };
}
const MsgMigrateContract = {
  typeUrl: "/cosmwasm.wasm.v1.MsgMigrateContract",
  encode(message, writer = BinaryWriter.create()) {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.contract !== "") {
      writer.uint32(18).string(message.contract);
    }
    if (message.codeId !== BigInt(0)) {
      writer.uint32(24).uint64(message.codeId);
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
          message.sender = reader.string();
          break;
        case 2:
          message.contract = reader.string();
          break;
        case 3:
          message.codeId = reader.uint64();
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
    message.sender = object.sender ?? "";
    message.contract = object.contract ?? "";
    message.codeId = object.codeId !== void 0 && object.codeId !== null ? BigInt(object.codeId.toString()) : BigInt(0);
    message.msg = object.msg ?? new Uint8Array();
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgMigrateContract();
    if (object.sender !== void 0 && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.contract !== void 0 && object.contract !== null) {
      message.contract = object.contract;
    }
    if (object.code_id !== void 0 && object.code_id !== null) {
      message.codeId = BigInt(object.code_id);
    }
    if (object.msg !== void 0 && object.msg !== null) {
      message.msg = toUtf8(JSON.stringify(object.msg));
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.sender = message.sender === "" ? void 0 : message.sender;
    obj.contract = message.contract === "" ? void 0 : message.contract;
    obj.code_id = message.codeId !== BigInt(0) ? message.codeId?.toString() : void 0;
    obj.msg = message.msg ? JSON.parse(fromUtf8(message.msg)) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgMigrateContract.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "wasm/MsgMigrateContract",
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
      typeUrl: "/cosmwasm.wasm.v1.MsgMigrateContract",
      value: MsgMigrateContract.encode(message).finish()
    };
  }
};
function createBaseMsgMigrateContractResponse() {
  return {
    data: new Uint8Array()
  };
}
const MsgMigrateContractResponse = {
  typeUrl: "/cosmwasm.wasm.v1.MsgMigrateContractResponse",
  encode(message, writer = BinaryWriter.create()) {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgMigrateContractResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgMigrateContractResponse();
    message.data = object.data ?? new Uint8Array();
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgMigrateContractResponse();
    if (object.data !== void 0 && object.data !== null) {
      message.data = bytesFromBase64(object.data);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.data = message.data ? base64FromBytes(message.data) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgMigrateContractResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "wasm/MsgMigrateContractResponse",
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
      typeUrl: "/cosmwasm.wasm.v1.MsgMigrateContractResponse",
      value: MsgMigrateContractResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateAdmin() {
  return {
    sender: "",
    newAdmin: "",
    contract: ""
  };
}
const MsgUpdateAdmin = {
  typeUrl: "/cosmwasm.wasm.v1.MsgUpdateAdmin",
  encode(message, writer = BinaryWriter.create()) {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.newAdmin !== "") {
      writer.uint32(18).string(message.newAdmin);
    }
    if (message.contract !== "") {
      writer.uint32(26).string(message.contract);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateAdmin();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.newAdmin = reader.string();
          break;
        case 3:
          message.contract = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgUpdateAdmin();
    message.sender = object.sender ?? "";
    message.newAdmin = object.newAdmin ?? "";
    message.contract = object.contract ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgUpdateAdmin();
    if (object.sender !== void 0 && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.new_admin !== void 0 && object.new_admin !== null) {
      message.newAdmin = object.new_admin;
    }
    if (object.contract !== void 0 && object.contract !== null) {
      message.contract = object.contract;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.sender = message.sender === "" ? void 0 : message.sender;
    obj.new_admin = message.newAdmin === "" ? void 0 : message.newAdmin;
    obj.contract = message.contract === "" ? void 0 : message.contract;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgUpdateAdmin.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "wasm/MsgUpdateAdmin",
      value: MsgUpdateAdmin.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgUpdateAdmin.decode(message.value);
  },
  toProto(message) {
    return MsgUpdateAdmin.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgUpdateAdmin",
      value: MsgUpdateAdmin.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateAdminResponse() {
  return {};
}
const MsgUpdateAdminResponse = {
  typeUrl: "/cosmwasm.wasm.v1.MsgUpdateAdminResponse",
  encode(_, writer = BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateAdminResponse();
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
    const message = createBaseMsgUpdateAdminResponse();
    return message;
  },
  fromAmino(_) {
    const message = createBaseMsgUpdateAdminResponse();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return MsgUpdateAdminResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "wasm/MsgUpdateAdminResponse",
      value: MsgUpdateAdminResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgUpdateAdminResponse.decode(message.value);
  },
  toProto(message) {
    return MsgUpdateAdminResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgUpdateAdminResponse",
      value: MsgUpdateAdminResponse.encode(message).finish()
    };
  }
};
function createBaseMsgClearAdmin() {
  return {
    sender: "",
    contract: ""
  };
}
const MsgClearAdmin = {
  typeUrl: "/cosmwasm.wasm.v1.MsgClearAdmin",
  encode(message, writer = BinaryWriter.create()) {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.contract !== "") {
      writer.uint32(26).string(message.contract);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgClearAdmin();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 3:
          message.contract = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgClearAdmin();
    message.sender = object.sender ?? "";
    message.contract = object.contract ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgClearAdmin();
    if (object.sender !== void 0 && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.contract !== void 0 && object.contract !== null) {
      message.contract = object.contract;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.sender = message.sender === "" ? void 0 : message.sender;
    obj.contract = message.contract === "" ? void 0 : message.contract;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgClearAdmin.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "wasm/MsgClearAdmin",
      value: MsgClearAdmin.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgClearAdmin.decode(message.value);
  },
  toProto(message) {
    return MsgClearAdmin.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgClearAdmin",
      value: MsgClearAdmin.encode(message).finish()
    };
  }
};
function createBaseMsgClearAdminResponse() {
  return {};
}
const MsgClearAdminResponse = {
  typeUrl: "/cosmwasm.wasm.v1.MsgClearAdminResponse",
  encode(_, writer = BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgClearAdminResponse();
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
    const message = createBaseMsgClearAdminResponse();
    return message;
  },
  fromAmino(_) {
    const message = createBaseMsgClearAdminResponse();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return MsgClearAdminResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "wasm/MsgClearAdminResponse",
      value: MsgClearAdminResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgClearAdminResponse.decode(message.value);
  },
  toProto(message) {
    return MsgClearAdminResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgClearAdminResponse",
      value: MsgClearAdminResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateInstantiateConfig() {
  return {
    sender: "",
    codeId: BigInt(0),
    newInstantiatePermission: void 0
  };
}
const MsgUpdateInstantiateConfig = {
  typeUrl: "/cosmwasm.wasm.v1.MsgUpdateInstantiateConfig",
  encode(message, writer = BinaryWriter.create()) {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.codeId !== BigInt(0)) {
      writer.uint32(16).uint64(message.codeId);
    }
    if (message.newInstantiatePermission !== void 0) {
      AccessConfig.encode(message.newInstantiatePermission, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateInstantiateConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.codeId = reader.uint64();
          break;
        case 3:
          message.newInstantiatePermission = AccessConfig.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgUpdateInstantiateConfig();
    message.sender = object.sender ?? "";
    message.codeId = object.codeId !== void 0 && object.codeId !== null ? BigInt(object.codeId.toString()) : BigInt(0);
    message.newInstantiatePermission = object.newInstantiatePermission !== void 0 && object.newInstantiatePermission !== null ? AccessConfig.fromPartial(object.newInstantiatePermission) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgUpdateInstantiateConfig();
    if (object.sender !== void 0 && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.code_id !== void 0 && object.code_id !== null) {
      message.codeId = BigInt(object.code_id);
    }
    if (object.new_instantiate_permission !== void 0 && object.new_instantiate_permission !== null) {
      message.newInstantiatePermission = AccessConfig.fromAmino(object.new_instantiate_permission);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.sender = message.sender === "" ? void 0 : message.sender;
    obj.code_id = message.codeId !== BigInt(0) ? message.codeId?.toString() : void 0;
    obj.new_instantiate_permission = message.newInstantiatePermission ? AccessConfig.toAmino(message.newInstantiatePermission) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgUpdateInstantiateConfig.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "wasm/MsgUpdateInstantiateConfig",
      value: MsgUpdateInstantiateConfig.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgUpdateInstantiateConfig.decode(message.value);
  },
  toProto(message) {
    return MsgUpdateInstantiateConfig.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgUpdateInstantiateConfig",
      value: MsgUpdateInstantiateConfig.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateInstantiateConfigResponse() {
  return {};
}
const MsgUpdateInstantiateConfigResponse = {
  typeUrl: "/cosmwasm.wasm.v1.MsgUpdateInstantiateConfigResponse",
  encode(_, writer = BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateInstantiateConfigResponse();
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
    const message = createBaseMsgUpdateInstantiateConfigResponse();
    return message;
  },
  fromAmino(_) {
    const message = createBaseMsgUpdateInstantiateConfigResponse();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return MsgUpdateInstantiateConfigResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "wasm/MsgUpdateInstantiateConfigResponse",
      value: MsgUpdateInstantiateConfigResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgUpdateInstantiateConfigResponse.decode(message.value);
  },
  toProto(message) {
    return MsgUpdateInstantiateConfigResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgUpdateInstantiateConfigResponse",
      value: MsgUpdateInstantiateConfigResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateParams() {
  return {
    authority: "",
    params: Params.fromPartial({})
  };
}
const MsgUpdateParams = {
  typeUrl: "/cosmwasm.wasm.v1.MsgUpdateParams",
  encode(message, writer = BinaryWriter.create()) {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== void 0) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.params = Params.decode(reader, reader.uint32());
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
    message.params = object.params !== void 0 && object.params !== null ? Params.fromPartial(object.params) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgUpdateParams();
    if (object.authority !== void 0 && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.params !== void 0 && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.authority = message.authority === "" ? void 0 : message.authority;
    obj.params = message.params ? Params.toAmino(message.params) : Params.toAmino(Params.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object) {
    return MsgUpdateParams.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "wasm/MsgUpdateParams",
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
      typeUrl: "/cosmwasm.wasm.v1.MsgUpdateParams",
      value: MsgUpdateParams.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateParamsResponse() {
  return {};
}
const MsgUpdateParamsResponse = {
  typeUrl: "/cosmwasm.wasm.v1.MsgUpdateParamsResponse",
  encode(_, writer = BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
      type: "wasm/MsgUpdateParamsResponse",
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
      typeUrl: "/cosmwasm.wasm.v1.MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSudoContract() {
  return {
    authority: "",
    contract: "",
    msg: new Uint8Array()
  };
}
const MsgSudoContract = {
  typeUrl: "/cosmwasm.wasm.v1.MsgSudoContract",
  encode(message, writer = BinaryWriter.create()) {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.contract !== "") {
      writer.uint32(18).string(message.contract);
    }
    if (message.msg.length !== 0) {
      writer.uint32(26).bytes(message.msg);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgSudoContract();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.contract = reader.string();
          break;
        case 3:
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
    const message = createBaseMsgSudoContract();
    message.authority = object.authority ?? "";
    message.contract = object.contract ?? "";
    message.msg = object.msg ?? new Uint8Array();
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgSudoContract();
    if (object.authority !== void 0 && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.contract !== void 0 && object.contract !== null) {
      message.contract = object.contract;
    }
    if (object.msg !== void 0 && object.msg !== null) {
      message.msg = toUtf8(JSON.stringify(object.msg));
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.authority = message.authority === "" ? void 0 : message.authority;
    obj.contract = message.contract === "" ? void 0 : message.contract;
    obj.msg = message.msg ? JSON.parse(fromUtf8(message.msg)) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgSudoContract.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "wasm/MsgSudoContract",
      value: MsgSudoContract.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgSudoContract.decode(message.value);
  },
  toProto(message) {
    return MsgSudoContract.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgSudoContract",
      value: MsgSudoContract.encode(message).finish()
    };
  }
};
function createBaseMsgSudoContractResponse() {
  return {
    data: new Uint8Array()
  };
}
const MsgSudoContractResponse = {
  typeUrl: "/cosmwasm.wasm.v1.MsgSudoContractResponse",
  encode(message, writer = BinaryWriter.create()) {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgSudoContractResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgSudoContractResponse();
    message.data = object.data ?? new Uint8Array();
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgSudoContractResponse();
    if (object.data !== void 0 && object.data !== null) {
      message.data = bytesFromBase64(object.data);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.data = message.data ? base64FromBytes(message.data) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgSudoContractResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "wasm/MsgSudoContractResponse",
      value: MsgSudoContractResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgSudoContractResponse.decode(message.value);
  },
  toProto(message) {
    return MsgSudoContractResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgSudoContractResponse",
      value: MsgSudoContractResponse.encode(message).finish()
    };
  }
};
function createBaseMsgPinCodes() {
  return {
    authority: "",
    codeIds: []
  };
}
const MsgPinCodes = {
  typeUrl: "/cosmwasm.wasm.v1.MsgPinCodes",
  encode(message, writer = BinaryWriter.create()) {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    writer.uint32(18).fork();
    for (const v of message.codeIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgPinCodes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.codeIds.push(reader.uint64());
            }
          } else {
            message.codeIds.push(reader.uint64());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgPinCodes();
    message.authority = object.authority ?? "";
    message.codeIds = object.codeIds?.map((e) => BigInt(e.toString())) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgPinCodes();
    if (object.authority !== void 0 && object.authority !== null) {
      message.authority = object.authority;
    }
    message.codeIds = object.code_ids?.map((e) => BigInt(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.authority = message.authority === "" ? void 0 : message.authority;
    if (message.codeIds) {
      obj.code_ids = message.codeIds.map((e) => e.toString());
    } else {
      obj.code_ids = message.codeIds;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return MsgPinCodes.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "wasm/MsgPinCodes",
      value: MsgPinCodes.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgPinCodes.decode(message.value);
  },
  toProto(message) {
    return MsgPinCodes.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgPinCodes",
      value: MsgPinCodes.encode(message).finish()
    };
  }
};
function createBaseMsgPinCodesResponse() {
  return {};
}
const MsgPinCodesResponse = {
  typeUrl: "/cosmwasm.wasm.v1.MsgPinCodesResponse",
  encode(_, writer = BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgPinCodesResponse();
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
    const message = createBaseMsgPinCodesResponse();
    return message;
  },
  fromAmino(_) {
    const message = createBaseMsgPinCodesResponse();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return MsgPinCodesResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "wasm/MsgPinCodesResponse",
      value: MsgPinCodesResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgPinCodesResponse.decode(message.value);
  },
  toProto(message) {
    return MsgPinCodesResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgPinCodesResponse",
      value: MsgPinCodesResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUnpinCodes() {
  return {
    authority: "",
    codeIds: []
  };
}
const MsgUnpinCodes = {
  typeUrl: "/cosmwasm.wasm.v1.MsgUnpinCodes",
  encode(message, writer = BinaryWriter.create()) {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    writer.uint32(18).fork();
    for (const v of message.codeIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgUnpinCodes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.codeIds.push(reader.uint64());
            }
          } else {
            message.codeIds.push(reader.uint64());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgUnpinCodes();
    message.authority = object.authority ?? "";
    message.codeIds = object.codeIds?.map((e) => BigInt(e.toString())) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgUnpinCodes();
    if (object.authority !== void 0 && object.authority !== null) {
      message.authority = object.authority;
    }
    message.codeIds = object.code_ids?.map((e) => BigInt(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.authority = message.authority === "" ? void 0 : message.authority;
    if (message.codeIds) {
      obj.code_ids = message.codeIds.map((e) => e.toString());
    } else {
      obj.code_ids = message.codeIds;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return MsgUnpinCodes.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "wasm/MsgUnpinCodes",
      value: MsgUnpinCodes.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgUnpinCodes.decode(message.value);
  },
  toProto(message) {
    return MsgUnpinCodes.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgUnpinCodes",
      value: MsgUnpinCodes.encode(message).finish()
    };
  }
};
function createBaseMsgUnpinCodesResponse() {
  return {};
}
const MsgUnpinCodesResponse = {
  typeUrl: "/cosmwasm.wasm.v1.MsgUnpinCodesResponse",
  encode(_, writer = BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgUnpinCodesResponse();
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
    const message = createBaseMsgUnpinCodesResponse();
    return message;
  },
  fromAmino(_) {
    const message = createBaseMsgUnpinCodesResponse();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return MsgUnpinCodesResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "wasm/MsgUnpinCodesResponse",
      value: MsgUnpinCodesResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgUnpinCodesResponse.decode(message.value);
  },
  toProto(message) {
    return MsgUnpinCodesResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgUnpinCodesResponse",
      value: MsgUnpinCodesResponse.encode(message).finish()
    };
  }
};
function createBaseMsgStoreAndInstantiateContract() {
  return {
    authority: "",
    wasmByteCode: new Uint8Array(),
    instantiatePermission: void 0,
    unpinCode: false,
    admin: "",
    label: "",
    msg: new Uint8Array(),
    funds: [],
    source: "",
    builder: "",
    codeHash: new Uint8Array()
  };
}
const MsgStoreAndInstantiateContract = {
  typeUrl: "/cosmwasm.wasm.v1.MsgStoreAndInstantiateContract",
  encode(message, writer = BinaryWriter.create()) {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.wasmByteCode.length !== 0) {
      writer.uint32(26).bytes(message.wasmByteCode);
    }
    if (message.instantiatePermission !== void 0) {
      AccessConfig.encode(message.instantiatePermission, writer.uint32(34).fork()).ldelim();
    }
    if (message.unpinCode === true) {
      writer.uint32(40).bool(message.unpinCode);
    }
    if (message.admin !== "") {
      writer.uint32(50).string(message.admin);
    }
    if (message.label !== "") {
      writer.uint32(58).string(message.label);
    }
    if (message.msg.length !== 0) {
      writer.uint32(66).bytes(message.msg);
    }
    for (const v of message.funds) {
      Coin.encode(v, writer.uint32(74).fork()).ldelim();
    }
    if (message.source !== "") {
      writer.uint32(82).string(message.source);
    }
    if (message.builder !== "") {
      writer.uint32(90).string(message.builder);
    }
    if (message.codeHash.length !== 0) {
      writer.uint32(98).bytes(message.codeHash);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgStoreAndInstantiateContract();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 3:
          message.wasmByteCode = reader.bytes();
          break;
        case 4:
          message.instantiatePermission = AccessConfig.decode(reader, reader.uint32());
          break;
        case 5:
          message.unpinCode = reader.bool();
          break;
        case 6:
          message.admin = reader.string();
          break;
        case 7:
          message.label = reader.string();
          break;
        case 8:
          message.msg = reader.bytes();
          break;
        case 9:
          message.funds.push(Coin.decode(reader, reader.uint32()));
          break;
        case 10:
          message.source = reader.string();
          break;
        case 11:
          message.builder = reader.string();
          break;
        case 12:
          message.codeHash = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgStoreAndInstantiateContract();
    message.authority = object.authority ?? "";
    message.wasmByteCode = object.wasmByteCode ?? new Uint8Array();
    message.instantiatePermission = object.instantiatePermission !== void 0 && object.instantiatePermission !== null ? AccessConfig.fromPartial(object.instantiatePermission) : void 0;
    message.unpinCode = object.unpinCode ?? false;
    message.admin = object.admin ?? "";
    message.label = object.label ?? "";
    message.msg = object.msg ?? new Uint8Array();
    message.funds = object.funds?.map((e) => Coin.fromPartial(e)) || [];
    message.source = object.source ?? "";
    message.builder = object.builder ?? "";
    message.codeHash = object.codeHash ?? new Uint8Array();
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgStoreAndInstantiateContract();
    if (object.authority !== void 0 && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.wasm_byte_code !== void 0 && object.wasm_byte_code !== null) {
      message.wasmByteCode = fromBase64(object.wasm_byte_code);
    }
    if (object.instantiate_permission !== void 0 && object.instantiate_permission !== null) {
      message.instantiatePermission = AccessConfig.fromAmino(object.instantiate_permission);
    }
    if (object.unpin_code !== void 0 && object.unpin_code !== null) {
      message.unpinCode = object.unpin_code;
    }
    if (object.admin !== void 0 && object.admin !== null) {
      message.admin = object.admin;
    }
    if (object.label !== void 0 && object.label !== null) {
      message.label = object.label;
    }
    if (object.msg !== void 0 && object.msg !== null) {
      message.msg = toUtf8(JSON.stringify(object.msg));
    }
    message.funds = object.funds?.map((e) => Coin.fromAmino(e)) || [];
    if (object.source !== void 0 && object.source !== null) {
      message.source = object.source;
    }
    if (object.builder !== void 0 && object.builder !== null) {
      message.builder = object.builder;
    }
    if (object.code_hash !== void 0 && object.code_hash !== null) {
      message.codeHash = bytesFromBase64(object.code_hash);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.authority = message.authority === "" ? void 0 : message.authority;
    obj.wasm_byte_code = message.wasmByteCode ? toBase64(message.wasmByteCode) : void 0;
    obj.instantiate_permission = message.instantiatePermission ? AccessConfig.toAmino(message.instantiatePermission) : void 0;
    obj.unpin_code = message.unpinCode === false ? void 0 : message.unpinCode;
    obj.admin = message.admin === "" ? void 0 : message.admin;
    obj.label = message.label === "" ? void 0 : message.label;
    obj.msg = message.msg ? JSON.parse(fromUtf8(message.msg)) : void 0;
    if (message.funds) {
      obj.funds = message.funds.map((e) => e ? Coin.toAmino(e) : void 0);
    } else {
      obj.funds = message.funds;
    }
    obj.source = message.source === "" ? void 0 : message.source;
    obj.builder = message.builder === "" ? void 0 : message.builder;
    obj.code_hash = message.codeHash ? base64FromBytes(message.codeHash) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgStoreAndInstantiateContract.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "wasm/MsgStoreAndInstantiateContract",
      value: MsgStoreAndInstantiateContract.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgStoreAndInstantiateContract.decode(message.value);
  },
  toProto(message) {
    return MsgStoreAndInstantiateContract.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgStoreAndInstantiateContract",
      value: MsgStoreAndInstantiateContract.encode(message).finish()
    };
  }
};
function createBaseMsgStoreAndInstantiateContractResponse() {
  return {
    address: "",
    data: new Uint8Array()
  };
}
const MsgStoreAndInstantiateContractResponse = {
  typeUrl: "/cosmwasm.wasm.v1.MsgStoreAndInstantiateContractResponse",
  encode(message, writer = BinaryWriter.create()) {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.data.length !== 0) {
      writer.uint32(18).bytes(message.data);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgStoreAndInstantiateContractResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.data = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgStoreAndInstantiateContractResponse();
    message.address = object.address ?? "";
    message.data = object.data ?? new Uint8Array();
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgStoreAndInstantiateContractResponse();
    if (object.address !== void 0 && object.address !== null) {
      message.address = object.address;
    }
    if (object.data !== void 0 && object.data !== null) {
      message.data = bytesFromBase64(object.data);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.address = message.address === "" ? void 0 : message.address;
    obj.data = message.data ? base64FromBytes(message.data) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgStoreAndInstantiateContractResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "wasm/MsgStoreAndInstantiateContractResponse",
      value: MsgStoreAndInstantiateContractResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgStoreAndInstantiateContractResponse.decode(message.value);
  },
  toProto(message) {
    return MsgStoreAndInstantiateContractResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgStoreAndInstantiateContractResponse",
      value: MsgStoreAndInstantiateContractResponse.encode(message).finish()
    };
  }
};
function createBaseMsgAddCodeUploadParamsAddresses() {
  return {
    authority: "",
    addresses: []
  };
}
const MsgAddCodeUploadParamsAddresses = {
  typeUrl: "/cosmwasm.wasm.v1.MsgAddCodeUploadParamsAddresses",
  encode(message, writer = BinaryWriter.create()) {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    for (const v of message.addresses) {
      writer.uint32(18).string(v);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgAddCodeUploadParamsAddresses();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.addresses.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgAddCodeUploadParamsAddresses();
    message.authority = object.authority ?? "";
    message.addresses = object.addresses?.map((e) => e) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgAddCodeUploadParamsAddresses();
    if (object.authority !== void 0 && object.authority !== null) {
      message.authority = object.authority;
    }
    message.addresses = object.addresses?.map((e) => e) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.authority = message.authority === "" ? void 0 : message.authority;
    if (message.addresses) {
      obj.addresses = message.addresses.map((e) => e);
    } else {
      obj.addresses = message.addresses;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return MsgAddCodeUploadParamsAddresses.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "wasm/MsgAddCodeUploadParamsAddresses",
      value: MsgAddCodeUploadParamsAddresses.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgAddCodeUploadParamsAddresses.decode(message.value);
  },
  toProto(message) {
    return MsgAddCodeUploadParamsAddresses.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgAddCodeUploadParamsAddresses",
      value: MsgAddCodeUploadParamsAddresses.encode(message).finish()
    };
  }
};
function createBaseMsgAddCodeUploadParamsAddressesResponse() {
  return {};
}
const MsgAddCodeUploadParamsAddressesResponse = {
  typeUrl: "/cosmwasm.wasm.v1.MsgAddCodeUploadParamsAddressesResponse",
  encode(_, writer = BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgAddCodeUploadParamsAddressesResponse();
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
    const message = createBaseMsgAddCodeUploadParamsAddressesResponse();
    return message;
  },
  fromAmino(_) {
    const message = createBaseMsgAddCodeUploadParamsAddressesResponse();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return MsgAddCodeUploadParamsAddressesResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "wasm/MsgAddCodeUploadParamsAddressesResponse",
      value: MsgAddCodeUploadParamsAddressesResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgAddCodeUploadParamsAddressesResponse.decode(message.value);
  },
  toProto(message) {
    return MsgAddCodeUploadParamsAddressesResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgAddCodeUploadParamsAddressesResponse",
      value: MsgAddCodeUploadParamsAddressesResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRemoveCodeUploadParamsAddresses() {
  return {
    authority: "",
    addresses: []
  };
}
const MsgRemoveCodeUploadParamsAddresses = {
  typeUrl: "/cosmwasm.wasm.v1.MsgRemoveCodeUploadParamsAddresses",
  encode(message, writer = BinaryWriter.create()) {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    for (const v of message.addresses) {
      writer.uint32(18).string(v);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveCodeUploadParamsAddresses();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.addresses.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgRemoveCodeUploadParamsAddresses();
    message.authority = object.authority ?? "";
    message.addresses = object.addresses?.map((e) => e) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgRemoveCodeUploadParamsAddresses();
    if (object.authority !== void 0 && object.authority !== null) {
      message.authority = object.authority;
    }
    message.addresses = object.addresses?.map((e) => e) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.authority = message.authority === "" ? void 0 : message.authority;
    if (message.addresses) {
      obj.addresses = message.addresses.map((e) => e);
    } else {
      obj.addresses = message.addresses;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return MsgRemoveCodeUploadParamsAddresses.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "wasm/MsgRemoveCodeUploadParamsAddresses",
      value: MsgRemoveCodeUploadParamsAddresses.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgRemoveCodeUploadParamsAddresses.decode(message.value);
  },
  toProto(message) {
    return MsgRemoveCodeUploadParamsAddresses.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgRemoveCodeUploadParamsAddresses",
      value: MsgRemoveCodeUploadParamsAddresses.encode(message).finish()
    };
  }
};
function createBaseMsgRemoveCodeUploadParamsAddressesResponse() {
  return {};
}
const MsgRemoveCodeUploadParamsAddressesResponse = {
  typeUrl: "/cosmwasm.wasm.v1.MsgRemoveCodeUploadParamsAddressesResponse",
  encode(_, writer = BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveCodeUploadParamsAddressesResponse();
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
    const message = createBaseMsgRemoveCodeUploadParamsAddressesResponse();
    return message;
  },
  fromAmino(_) {
    const message = createBaseMsgRemoveCodeUploadParamsAddressesResponse();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return MsgRemoveCodeUploadParamsAddressesResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "wasm/MsgRemoveCodeUploadParamsAddressesResponse",
      value: MsgRemoveCodeUploadParamsAddressesResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgRemoveCodeUploadParamsAddressesResponse.decode(message.value);
  },
  toProto(message) {
    return MsgRemoveCodeUploadParamsAddressesResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgRemoveCodeUploadParamsAddressesResponse",
      value: MsgRemoveCodeUploadParamsAddressesResponse.encode(message).finish()
    };
  }
};
function createBaseMsgStoreAndMigrateContract() {
  return {
    authority: "",
    wasmByteCode: new Uint8Array(),
    instantiatePermission: void 0,
    contract: "",
    msg: new Uint8Array()
  };
}
const MsgStoreAndMigrateContract = {
  typeUrl: "/cosmwasm.wasm.v1.MsgStoreAndMigrateContract",
  encode(message, writer = BinaryWriter.create()) {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.wasmByteCode.length !== 0) {
      writer.uint32(18).bytes(message.wasmByteCode);
    }
    if (message.instantiatePermission !== void 0) {
      AccessConfig.encode(message.instantiatePermission, writer.uint32(26).fork()).ldelim();
    }
    if (message.contract !== "") {
      writer.uint32(34).string(message.contract);
    }
    if (message.msg.length !== 0) {
      writer.uint32(42).bytes(message.msg);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgStoreAndMigrateContract();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.wasmByteCode = reader.bytes();
          break;
        case 3:
          message.instantiatePermission = AccessConfig.decode(reader, reader.uint32());
          break;
        case 4:
          message.contract = reader.string();
          break;
        case 5:
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
    const message = createBaseMsgStoreAndMigrateContract();
    message.authority = object.authority ?? "";
    message.wasmByteCode = object.wasmByteCode ?? new Uint8Array();
    message.instantiatePermission = object.instantiatePermission !== void 0 && object.instantiatePermission !== null ? AccessConfig.fromPartial(object.instantiatePermission) : void 0;
    message.contract = object.contract ?? "";
    message.msg = object.msg ?? new Uint8Array();
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgStoreAndMigrateContract();
    if (object.authority !== void 0 && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.wasm_byte_code !== void 0 && object.wasm_byte_code !== null) {
      message.wasmByteCode = fromBase64(object.wasm_byte_code);
    }
    if (object.instantiate_permission !== void 0 && object.instantiate_permission !== null) {
      message.instantiatePermission = AccessConfig.fromAmino(object.instantiate_permission);
    }
    if (object.contract !== void 0 && object.contract !== null) {
      message.contract = object.contract;
    }
    if (object.msg !== void 0 && object.msg !== null) {
      message.msg = toUtf8(JSON.stringify(object.msg));
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.authority = message.authority === "" ? void 0 : message.authority;
    obj.wasm_byte_code = message.wasmByteCode ? toBase64(message.wasmByteCode) : void 0;
    obj.instantiate_permission = message.instantiatePermission ? AccessConfig.toAmino(message.instantiatePermission) : void 0;
    obj.contract = message.contract === "" ? void 0 : message.contract;
    obj.msg = message.msg ? JSON.parse(fromUtf8(message.msg)) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgStoreAndMigrateContract.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "wasm/MsgStoreAndMigrateContract",
      value: MsgStoreAndMigrateContract.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgStoreAndMigrateContract.decode(message.value);
  },
  toProto(message) {
    return MsgStoreAndMigrateContract.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgStoreAndMigrateContract",
      value: MsgStoreAndMigrateContract.encode(message).finish()
    };
  }
};
function createBaseMsgStoreAndMigrateContractResponse() {
  return {
    codeId: BigInt(0),
    checksum: new Uint8Array(),
    data: new Uint8Array()
  };
}
const MsgStoreAndMigrateContractResponse = {
  typeUrl: "/cosmwasm.wasm.v1.MsgStoreAndMigrateContractResponse",
  encode(message, writer = BinaryWriter.create()) {
    if (message.codeId !== BigInt(0)) {
      writer.uint32(8).uint64(message.codeId);
    }
    if (message.checksum.length !== 0) {
      writer.uint32(18).bytes(message.checksum);
    }
    if (message.data.length !== 0) {
      writer.uint32(26).bytes(message.data);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgStoreAndMigrateContractResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.codeId = reader.uint64();
          break;
        case 2:
          message.checksum = reader.bytes();
          break;
        case 3:
          message.data = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgStoreAndMigrateContractResponse();
    message.codeId = object.codeId !== void 0 && object.codeId !== null ? BigInt(object.codeId.toString()) : BigInt(0);
    message.checksum = object.checksum ?? new Uint8Array();
    message.data = object.data ?? new Uint8Array();
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgStoreAndMigrateContractResponse();
    if (object.code_id !== void 0 && object.code_id !== null) {
      message.codeId = BigInt(object.code_id);
    }
    if (object.checksum !== void 0 && object.checksum !== null) {
      message.checksum = bytesFromBase64(object.checksum);
    }
    if (object.data !== void 0 && object.data !== null) {
      message.data = bytesFromBase64(object.data);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.code_id = message.codeId !== BigInt(0) ? message.codeId?.toString() : void 0;
    obj.checksum = message.checksum ? base64FromBytes(message.checksum) : void 0;
    obj.data = message.data ? base64FromBytes(message.data) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgStoreAndMigrateContractResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "wasm/MsgStoreAndMigrateContractResponse",
      value: MsgStoreAndMigrateContractResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgStoreAndMigrateContractResponse.decode(message.value);
  },
  toProto(message) {
    return MsgStoreAndMigrateContractResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgStoreAndMigrateContractResponse",
      value: MsgStoreAndMigrateContractResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateContractLabel() {
  return {
    sender: "",
    newLabel: "",
    contract: ""
  };
}
const MsgUpdateContractLabel = {
  typeUrl: "/cosmwasm.wasm.v1.MsgUpdateContractLabel",
  encode(message, writer = BinaryWriter.create()) {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.newLabel !== "") {
      writer.uint32(18).string(message.newLabel);
    }
    if (message.contract !== "") {
      writer.uint32(26).string(message.contract);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateContractLabel();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.newLabel = reader.string();
          break;
        case 3:
          message.contract = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgUpdateContractLabel();
    message.sender = object.sender ?? "";
    message.newLabel = object.newLabel ?? "";
    message.contract = object.contract ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgUpdateContractLabel();
    if (object.sender !== void 0 && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.new_label !== void 0 && object.new_label !== null) {
      message.newLabel = object.new_label;
    }
    if (object.contract !== void 0 && object.contract !== null) {
      message.contract = object.contract;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.sender = message.sender === "" ? void 0 : message.sender;
    obj.new_label = message.newLabel === "" ? void 0 : message.newLabel;
    obj.contract = message.contract === "" ? void 0 : message.contract;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgUpdateContractLabel.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "wasm/MsgUpdateContractLabel",
      value: MsgUpdateContractLabel.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgUpdateContractLabel.decode(message.value);
  },
  toProto(message) {
    return MsgUpdateContractLabel.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgUpdateContractLabel",
      value: MsgUpdateContractLabel.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateContractLabelResponse() {
  return {};
}
const MsgUpdateContractLabelResponse = {
  typeUrl: "/cosmwasm.wasm.v1.MsgUpdateContractLabelResponse",
  encode(_, writer = BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateContractLabelResponse();
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
    const message = createBaseMsgUpdateContractLabelResponse();
    return message;
  },
  fromAmino(_) {
    const message = createBaseMsgUpdateContractLabelResponse();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return MsgUpdateContractLabelResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "wasm/MsgUpdateContractLabelResponse",
      value: MsgUpdateContractLabelResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgUpdateContractLabelResponse.decode(message.value);
  },
  toProto(message) {
    return MsgUpdateContractLabelResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgUpdateContractLabelResponse",
      value: MsgUpdateContractLabelResponse.encode(message).finish()
    };
  }
};
export {
  MsgAddCodeUploadParamsAddresses,
  MsgAddCodeUploadParamsAddressesResponse,
  MsgClearAdmin,
  MsgClearAdminResponse,
  MsgExecuteContract,
  MsgExecuteContractResponse,
  MsgInstantiateContract,
  MsgInstantiateContract2,
  MsgInstantiateContract2Response,
  MsgInstantiateContractResponse,
  MsgMigrateContract,
  MsgMigrateContractResponse,
  MsgPinCodes,
  MsgPinCodesResponse,
  MsgRemoveCodeUploadParamsAddresses,
  MsgRemoveCodeUploadParamsAddressesResponse,
  MsgStoreAndInstantiateContract,
  MsgStoreAndInstantiateContractResponse,
  MsgStoreAndMigrateContract,
  MsgStoreAndMigrateContractResponse,
  MsgStoreCode,
  MsgStoreCodeResponse,
  MsgSudoContract,
  MsgSudoContractResponse,
  MsgUnpinCodes,
  MsgUnpinCodesResponse,
  MsgUpdateAdmin,
  MsgUpdateAdminResponse,
  MsgUpdateContractLabel,
  MsgUpdateContractLabelResponse,
  MsgUpdateInstantiateConfig,
  MsgUpdateInstantiateConfigResponse,
  MsgUpdateParams,
  MsgUpdateParamsResponse
};
