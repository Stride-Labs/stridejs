import { Any } from "../../../google/protobuf/any";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { bytesFromBase64, base64FromBytes } from "../../../helpers";
import { toUtf8, fromUtf8 } from "@cosmjs/encoding";
var AccessType = /* @__PURE__ */ ((AccessType2) => {
  AccessType2[AccessType2["ACCESS_TYPE_UNSPECIFIED"] = 0] = "ACCESS_TYPE_UNSPECIFIED";
  AccessType2[AccessType2["ACCESS_TYPE_NOBODY"] = 1] = "ACCESS_TYPE_NOBODY";
  AccessType2[AccessType2["ACCESS_TYPE_EVERYBODY"] = 3] = "ACCESS_TYPE_EVERYBODY";
  AccessType2[AccessType2["ACCESS_TYPE_ANY_OF_ADDRESSES"] = 4] = "ACCESS_TYPE_ANY_OF_ADDRESSES";
  AccessType2[AccessType2["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return AccessType2;
})(AccessType || {});
const AccessTypeSDKType = AccessType;
const AccessTypeAmino = AccessType;
function accessTypeFromJSON(object) {
  switch (object) {
    case 0:
    case "ACCESS_TYPE_UNSPECIFIED":
      return 0 /* ACCESS_TYPE_UNSPECIFIED */;
    case 1:
    case "ACCESS_TYPE_NOBODY":
      return 1 /* ACCESS_TYPE_NOBODY */;
    case 3:
    case "ACCESS_TYPE_EVERYBODY":
      return 3 /* ACCESS_TYPE_EVERYBODY */;
    case 4:
    case "ACCESS_TYPE_ANY_OF_ADDRESSES":
      return 4 /* ACCESS_TYPE_ANY_OF_ADDRESSES */;
    case -1:
    case "UNRECOGNIZED":
    default:
      return -1 /* UNRECOGNIZED */;
  }
}
function accessTypeToJSON(object) {
  switch (object) {
    case 0 /* ACCESS_TYPE_UNSPECIFIED */:
      return "ACCESS_TYPE_UNSPECIFIED";
    case 1 /* ACCESS_TYPE_NOBODY */:
      return "ACCESS_TYPE_NOBODY";
    case 3 /* ACCESS_TYPE_EVERYBODY */:
      return "ACCESS_TYPE_EVERYBODY";
    case 4 /* ACCESS_TYPE_ANY_OF_ADDRESSES */:
      return "ACCESS_TYPE_ANY_OF_ADDRESSES";
    case -1 /* UNRECOGNIZED */:
    default:
      return "UNRECOGNIZED";
  }
}
var ContractCodeHistoryOperationType = /* @__PURE__ */ ((ContractCodeHistoryOperationType2) => {
  ContractCodeHistoryOperationType2[ContractCodeHistoryOperationType2["CONTRACT_CODE_HISTORY_OPERATION_TYPE_UNSPECIFIED"] = 0] = "CONTRACT_CODE_HISTORY_OPERATION_TYPE_UNSPECIFIED";
  ContractCodeHistoryOperationType2[ContractCodeHistoryOperationType2["CONTRACT_CODE_HISTORY_OPERATION_TYPE_INIT"] = 1] = "CONTRACT_CODE_HISTORY_OPERATION_TYPE_INIT";
  ContractCodeHistoryOperationType2[ContractCodeHistoryOperationType2["CONTRACT_CODE_HISTORY_OPERATION_TYPE_MIGRATE"] = 2] = "CONTRACT_CODE_HISTORY_OPERATION_TYPE_MIGRATE";
  ContractCodeHistoryOperationType2[ContractCodeHistoryOperationType2["CONTRACT_CODE_HISTORY_OPERATION_TYPE_GENESIS"] = 3] = "CONTRACT_CODE_HISTORY_OPERATION_TYPE_GENESIS";
  ContractCodeHistoryOperationType2[ContractCodeHistoryOperationType2["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return ContractCodeHistoryOperationType2;
})(ContractCodeHistoryOperationType || {});
const ContractCodeHistoryOperationTypeSDKType = ContractCodeHistoryOperationType;
const ContractCodeHistoryOperationTypeAmino = ContractCodeHistoryOperationType;
function contractCodeHistoryOperationTypeFromJSON(object) {
  switch (object) {
    case 0:
    case "CONTRACT_CODE_HISTORY_OPERATION_TYPE_UNSPECIFIED":
      return 0 /* CONTRACT_CODE_HISTORY_OPERATION_TYPE_UNSPECIFIED */;
    case 1:
    case "CONTRACT_CODE_HISTORY_OPERATION_TYPE_INIT":
      return 1 /* CONTRACT_CODE_HISTORY_OPERATION_TYPE_INIT */;
    case 2:
    case "CONTRACT_CODE_HISTORY_OPERATION_TYPE_MIGRATE":
      return 2 /* CONTRACT_CODE_HISTORY_OPERATION_TYPE_MIGRATE */;
    case 3:
    case "CONTRACT_CODE_HISTORY_OPERATION_TYPE_GENESIS":
      return 3 /* CONTRACT_CODE_HISTORY_OPERATION_TYPE_GENESIS */;
    case -1:
    case "UNRECOGNIZED":
    default:
      return -1 /* UNRECOGNIZED */;
  }
}
function contractCodeHistoryOperationTypeToJSON(object) {
  switch (object) {
    case 0 /* CONTRACT_CODE_HISTORY_OPERATION_TYPE_UNSPECIFIED */:
      return "CONTRACT_CODE_HISTORY_OPERATION_TYPE_UNSPECIFIED";
    case 1 /* CONTRACT_CODE_HISTORY_OPERATION_TYPE_INIT */:
      return "CONTRACT_CODE_HISTORY_OPERATION_TYPE_INIT";
    case 2 /* CONTRACT_CODE_HISTORY_OPERATION_TYPE_MIGRATE */:
      return "CONTRACT_CODE_HISTORY_OPERATION_TYPE_MIGRATE";
    case 3 /* CONTRACT_CODE_HISTORY_OPERATION_TYPE_GENESIS */:
      return "CONTRACT_CODE_HISTORY_OPERATION_TYPE_GENESIS";
    case -1 /* UNRECOGNIZED */:
    default:
      return "UNRECOGNIZED";
  }
}
function createBaseAccessTypeParam() {
  return {
    value: 0
  };
}
const AccessTypeParam = {
  typeUrl: "/cosmwasm.wasm.v1.AccessTypeParam",
  encode(message, writer = BinaryWriter.create()) {
    if (message.value !== 0) {
      writer.uint32(8).int32(message.value);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseAccessTypeParam();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.value = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseAccessTypeParam();
    message.value = object.value ?? 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseAccessTypeParam();
    if (object.value !== void 0 && object.value !== null) {
      message.value = object.value;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.value = message.value === 0 ? void 0 : message.value;
    return obj;
  },
  fromAminoMsg(object) {
    return AccessTypeParam.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "wasm/AccessTypeParam",
      value: AccessTypeParam.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return AccessTypeParam.decode(message.value);
  },
  toProto(message) {
    return AccessTypeParam.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmwasm.wasm.v1.AccessTypeParam",
      value: AccessTypeParam.encode(message).finish()
    };
  }
};
function createBaseAccessConfig() {
  return {
    permission: 0,
    addresses: []
  };
}
const AccessConfig = {
  typeUrl: "/cosmwasm.wasm.v1.AccessConfig",
  encode(message, writer = BinaryWriter.create()) {
    if (message.permission !== 0) {
      writer.uint32(8).int32(message.permission);
    }
    for (const v of message.addresses) {
      writer.uint32(26).string(v);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseAccessConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.permission = reader.int32();
          break;
        case 3:
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
    const message = createBaseAccessConfig();
    message.permission = object.permission ?? 0;
    message.addresses = object.addresses?.map((e) => e) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseAccessConfig();
    if (object.permission !== void 0 && object.permission !== null) {
      message.permission = object.permission;
    }
    message.addresses = object.addresses?.map((e) => e) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.permission = message.permission === 0 ? void 0 : message.permission;
    if (message.addresses) {
      obj.addresses = message.addresses.map((e) => e);
    } else {
      obj.addresses = message.addresses;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return AccessConfig.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "wasm/AccessConfig",
      value: AccessConfig.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return AccessConfig.decode(message.value);
  },
  toProto(message) {
    return AccessConfig.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmwasm.wasm.v1.AccessConfig",
      value: AccessConfig.encode(message).finish()
    };
  }
};
function createBaseParams() {
  return {
    codeUploadAccess: AccessConfig.fromPartial({}),
    instantiateDefaultPermission: 0
  };
}
const Params = {
  typeUrl: "/cosmwasm.wasm.v1.Params",
  encode(message, writer = BinaryWriter.create()) {
    if (message.codeUploadAccess !== void 0) {
      AccessConfig.encode(message.codeUploadAccess, writer.uint32(10).fork()).ldelim();
    }
    if (message.instantiateDefaultPermission !== 0) {
      writer.uint32(16).int32(message.instantiateDefaultPermission);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.codeUploadAccess = AccessConfig.decode(reader, reader.uint32());
          break;
        case 2:
          message.instantiateDefaultPermission = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseParams();
    message.codeUploadAccess = object.codeUploadAccess !== void 0 && object.codeUploadAccess !== null ? AccessConfig.fromPartial(object.codeUploadAccess) : void 0;
    message.instantiateDefaultPermission = object.instantiateDefaultPermission ?? 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseParams();
    if (object.code_upload_access !== void 0 && object.code_upload_access !== null) {
      message.codeUploadAccess = AccessConfig.fromAmino(object.code_upload_access);
    }
    if (object.instantiate_default_permission !== void 0 && object.instantiate_default_permission !== null) {
      message.instantiateDefaultPermission = object.instantiate_default_permission;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.code_upload_access = message.codeUploadAccess ? AccessConfig.toAmino(message.codeUploadAccess) : AccessConfig.toAmino(AccessConfig.fromPartial({}));
    obj.instantiate_default_permission = message.instantiateDefaultPermission === 0 ? void 0 : message.instantiateDefaultPermission;
    return obj;
  },
  fromAminoMsg(object) {
    return Params.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "wasm/Params",
      value: Params.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return Params.decode(message.value);
  },
  toProto(message) {
    return Params.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmwasm.wasm.v1.Params",
      value: Params.encode(message).finish()
    };
  }
};
function createBaseCodeInfo() {
  return {
    codeHash: new Uint8Array(),
    creator: "",
    instantiateConfig: AccessConfig.fromPartial({})
  };
}
const CodeInfo = {
  typeUrl: "/cosmwasm.wasm.v1.CodeInfo",
  encode(message, writer = BinaryWriter.create()) {
    if (message.codeHash.length !== 0) {
      writer.uint32(10).bytes(message.codeHash);
    }
    if (message.creator !== "") {
      writer.uint32(18).string(message.creator);
    }
    if (message.instantiateConfig !== void 0) {
      AccessConfig.encode(message.instantiateConfig, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseCodeInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.codeHash = reader.bytes();
          break;
        case 2:
          message.creator = reader.string();
          break;
        case 5:
          message.instantiateConfig = AccessConfig.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseCodeInfo();
    message.codeHash = object.codeHash ?? new Uint8Array();
    message.creator = object.creator ?? "";
    message.instantiateConfig = object.instantiateConfig !== void 0 && object.instantiateConfig !== null ? AccessConfig.fromPartial(object.instantiateConfig) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseCodeInfo();
    if (object.code_hash !== void 0 && object.code_hash !== null) {
      message.codeHash = bytesFromBase64(object.code_hash);
    }
    if (object.creator !== void 0 && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.instantiate_config !== void 0 && object.instantiate_config !== null) {
      message.instantiateConfig = AccessConfig.fromAmino(object.instantiate_config);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.code_hash = message.codeHash ? base64FromBytes(message.codeHash) : void 0;
    obj.creator = message.creator === "" ? void 0 : message.creator;
    obj.instantiate_config = message.instantiateConfig ? AccessConfig.toAmino(message.instantiateConfig) : AccessConfig.toAmino(AccessConfig.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object) {
    return CodeInfo.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "wasm/CodeInfo",
      value: CodeInfo.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return CodeInfo.decode(message.value);
  },
  toProto(message) {
    return CodeInfo.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmwasm.wasm.v1.CodeInfo",
      value: CodeInfo.encode(message).finish()
    };
  }
};
function createBaseContractInfo() {
  return {
    codeId: BigInt(0),
    creator: "",
    admin: "",
    label: "",
    created: void 0,
    ibcPortId: "",
    extension: void 0
  };
}
const ContractInfo = {
  typeUrl: "/cosmwasm.wasm.v1.ContractInfo",
  encode(message, writer = BinaryWriter.create()) {
    if (message.codeId !== BigInt(0)) {
      writer.uint32(8).uint64(message.codeId);
    }
    if (message.creator !== "") {
      writer.uint32(18).string(message.creator);
    }
    if (message.admin !== "") {
      writer.uint32(26).string(message.admin);
    }
    if (message.label !== "") {
      writer.uint32(34).string(message.label);
    }
    if (message.created !== void 0) {
      AbsoluteTxPosition.encode(message.created, writer.uint32(42).fork()).ldelim();
    }
    if (message.ibcPortId !== "") {
      writer.uint32(50).string(message.ibcPortId);
    }
    if (message.extension !== void 0) {
      Any.encode(message.extension, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseContractInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.codeId = reader.uint64();
          break;
        case 2:
          message.creator = reader.string();
          break;
        case 3:
          message.admin = reader.string();
          break;
        case 4:
          message.label = reader.string();
          break;
        case 5:
          message.created = AbsoluteTxPosition.decode(reader, reader.uint32());
          break;
        case 6:
          message.ibcPortId = reader.string();
          break;
        case 7:
          message.extension = Cosmwasm_wasmv1ContractInfoExtension_InterfaceDecoder(reader);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseContractInfo();
    message.codeId = object.codeId !== void 0 && object.codeId !== null ? BigInt(object.codeId.toString()) : BigInt(0);
    message.creator = object.creator ?? "";
    message.admin = object.admin ?? "";
    message.label = object.label ?? "";
    message.created = object.created !== void 0 && object.created !== null ? AbsoluteTxPosition.fromPartial(object.created) : void 0;
    message.ibcPortId = object.ibcPortId ?? "";
    message.extension = object.extension !== void 0 && object.extension !== null ? Any.fromPartial(object.extension) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseContractInfo();
    if (object.code_id !== void 0 && object.code_id !== null) {
      message.codeId = BigInt(object.code_id);
    }
    if (object.creator !== void 0 && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.admin !== void 0 && object.admin !== null) {
      message.admin = object.admin;
    }
    if (object.label !== void 0 && object.label !== null) {
      message.label = object.label;
    }
    if (object.created !== void 0 && object.created !== null) {
      message.created = AbsoluteTxPosition.fromAmino(object.created);
    }
    if (object.ibc_port_id !== void 0 && object.ibc_port_id !== null) {
      message.ibcPortId = object.ibc_port_id;
    }
    if (object.extension !== void 0 && object.extension !== null) {
      message.extension = Cosmwasm_wasmv1ContractInfoExtension_FromAmino(object.extension);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.code_id = message.codeId !== BigInt(0) ? message.codeId?.toString() : void 0;
    obj.creator = message.creator === "" ? void 0 : message.creator;
    obj.admin = message.admin === "" ? void 0 : message.admin;
    obj.label = message.label === "" ? void 0 : message.label;
    obj.created = message.created ? AbsoluteTxPosition.toAmino(message.created) : void 0;
    obj.ibc_port_id = message.ibcPortId === "" ? void 0 : message.ibcPortId;
    obj.extension = message.extension ? Cosmwasm_wasmv1ContractInfoExtension_ToAmino(message.extension) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return ContractInfo.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "wasm/ContractInfo",
      value: ContractInfo.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return ContractInfo.decode(message.value);
  },
  toProto(message) {
    return ContractInfo.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmwasm.wasm.v1.ContractInfo",
      value: ContractInfo.encode(message).finish()
    };
  }
};
function createBaseContractCodeHistoryEntry() {
  return {
    operation: 0,
    codeId: BigInt(0),
    updated: void 0,
    msg: new Uint8Array()
  };
}
const ContractCodeHistoryEntry = {
  typeUrl: "/cosmwasm.wasm.v1.ContractCodeHistoryEntry",
  encode(message, writer = BinaryWriter.create()) {
    if (message.operation !== 0) {
      writer.uint32(8).int32(message.operation);
    }
    if (message.codeId !== BigInt(0)) {
      writer.uint32(16).uint64(message.codeId);
    }
    if (message.updated !== void 0) {
      AbsoluteTxPosition.encode(message.updated, writer.uint32(26).fork()).ldelim();
    }
    if (message.msg.length !== 0) {
      writer.uint32(34).bytes(message.msg);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseContractCodeHistoryEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operation = reader.int32();
          break;
        case 2:
          message.codeId = reader.uint64();
          break;
        case 3:
          message.updated = AbsoluteTxPosition.decode(reader, reader.uint32());
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
    const message = createBaseContractCodeHistoryEntry();
    message.operation = object.operation ?? 0;
    message.codeId = object.codeId !== void 0 && object.codeId !== null ? BigInt(object.codeId.toString()) : BigInt(0);
    message.updated = object.updated !== void 0 && object.updated !== null ? AbsoluteTxPosition.fromPartial(object.updated) : void 0;
    message.msg = object.msg ?? new Uint8Array();
    return message;
  },
  fromAmino(object) {
    const message = createBaseContractCodeHistoryEntry();
    if (object.operation !== void 0 && object.operation !== null) {
      message.operation = object.operation;
    }
    if (object.code_id !== void 0 && object.code_id !== null) {
      message.codeId = BigInt(object.code_id);
    }
    if (object.updated !== void 0 && object.updated !== null) {
      message.updated = AbsoluteTxPosition.fromAmino(object.updated);
    }
    if (object.msg !== void 0 && object.msg !== null) {
      message.msg = toUtf8(JSON.stringify(object.msg));
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.operation = message.operation === 0 ? void 0 : message.operation;
    obj.code_id = message.codeId !== BigInt(0) ? message.codeId?.toString() : void 0;
    obj.updated = message.updated ? AbsoluteTxPosition.toAmino(message.updated) : void 0;
    obj.msg = message.msg ? JSON.parse(fromUtf8(message.msg)) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return ContractCodeHistoryEntry.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "wasm/ContractCodeHistoryEntry",
      value: ContractCodeHistoryEntry.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return ContractCodeHistoryEntry.decode(message.value);
  },
  toProto(message) {
    return ContractCodeHistoryEntry.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmwasm.wasm.v1.ContractCodeHistoryEntry",
      value: ContractCodeHistoryEntry.encode(message).finish()
    };
  }
};
function createBaseAbsoluteTxPosition() {
  return {
    blockHeight: BigInt(0),
    txIndex: BigInt(0)
  };
}
const AbsoluteTxPosition = {
  typeUrl: "/cosmwasm.wasm.v1.AbsoluteTxPosition",
  encode(message, writer = BinaryWriter.create()) {
    if (message.blockHeight !== BigInt(0)) {
      writer.uint32(8).uint64(message.blockHeight);
    }
    if (message.txIndex !== BigInt(0)) {
      writer.uint32(16).uint64(message.txIndex);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseAbsoluteTxPosition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.blockHeight = reader.uint64();
          break;
        case 2:
          message.txIndex = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseAbsoluteTxPosition();
    message.blockHeight = object.blockHeight !== void 0 && object.blockHeight !== null ? BigInt(object.blockHeight.toString()) : BigInt(0);
    message.txIndex = object.txIndex !== void 0 && object.txIndex !== null ? BigInt(object.txIndex.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object) {
    const message = createBaseAbsoluteTxPosition();
    if (object.block_height !== void 0 && object.block_height !== null) {
      message.blockHeight = BigInt(object.block_height);
    }
    if (object.tx_index !== void 0 && object.tx_index !== null) {
      message.txIndex = BigInt(object.tx_index);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.block_height = message.blockHeight !== BigInt(0) ? message.blockHeight?.toString() : void 0;
    obj.tx_index = message.txIndex !== BigInt(0) ? message.txIndex?.toString() : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return AbsoluteTxPosition.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "wasm/AbsoluteTxPosition",
      value: AbsoluteTxPosition.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return AbsoluteTxPosition.decode(message.value);
  },
  toProto(message) {
    return AbsoluteTxPosition.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmwasm.wasm.v1.AbsoluteTxPosition",
      value: AbsoluteTxPosition.encode(message).finish()
    };
  }
};
function createBaseModel() {
  return {
    key: new Uint8Array(),
    value: new Uint8Array()
  };
}
const Model = {
  typeUrl: "/cosmwasm.wasm.v1.Model",
  encode(message, writer = BinaryWriter.create()) {
    if (message.key.length !== 0) {
      writer.uint32(10).bytes(message.key);
    }
    if (message.value.length !== 0) {
      writer.uint32(18).bytes(message.value);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseModel();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.bytes();
          break;
        case 2:
          message.value = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseModel();
    message.key = object.key ?? new Uint8Array();
    message.value = object.value ?? new Uint8Array();
    return message;
  },
  fromAmino(object) {
    const message = createBaseModel();
    if (object.key !== void 0 && object.key !== null) {
      message.key = bytesFromBase64(object.key);
    }
    if (object.value !== void 0 && object.value !== null) {
      message.value = bytesFromBase64(object.value);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.key = message.key ? base64FromBytes(message.key) : void 0;
    obj.value = message.value ? base64FromBytes(message.value) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return Model.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "wasm/Model",
      value: Model.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return Model.decode(message.value);
  },
  toProto(message) {
    return Model.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmwasm.wasm.v1.Model",
      value: Model.encode(message).finish()
    };
  }
};
const Cosmwasm_wasmv1ContractInfoExtension_InterfaceDecoder = (input) => {
  const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
  const data = Any.decode(reader, reader.uint32());
  switch (data.typeUrl) {
    default:
      return data;
  }
};
const Cosmwasm_wasmv1ContractInfoExtension_FromAmino = (content) => {
  return Any.fromAmino(content);
};
const Cosmwasm_wasmv1ContractInfoExtension_ToAmino = (content) => {
  return Any.toAmino(content);
};
export {
  AbsoluteTxPosition,
  AccessConfig,
  AccessType,
  AccessTypeAmino,
  AccessTypeParam,
  AccessTypeSDKType,
  CodeInfo,
  ContractCodeHistoryEntry,
  ContractCodeHistoryOperationType,
  ContractCodeHistoryOperationTypeAmino,
  ContractCodeHistoryOperationTypeSDKType,
  ContractInfo,
  Cosmwasm_wasmv1ContractInfoExtension_FromAmino,
  Cosmwasm_wasmv1ContractInfoExtension_InterfaceDecoder,
  Cosmwasm_wasmv1ContractInfoExtension_ToAmino,
  Model,
  Params,
  accessTypeFromJSON,
  accessTypeToJSON,
  contractCodeHistoryOperationTypeFromJSON,
  contractCodeHistoryOperationTypeToJSON
};
