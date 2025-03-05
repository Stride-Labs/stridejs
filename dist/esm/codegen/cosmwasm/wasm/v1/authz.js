import { AccessConfig } from "./types";
import { Any } from "../../../google/protobuf/any";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { bytesFromBase64, base64FromBytes } from "../../../helpers";
import { toUtf8, fromUtf8 } from "@cosmjs/encoding";
function createBaseStoreCodeAuthorization() {
  return {
    $typeUrl: "/cosmwasm.wasm.v1.StoreCodeAuthorization",
    grants: []
  };
}
const StoreCodeAuthorization = {
  typeUrl: "/cosmwasm.wasm.v1.StoreCodeAuthorization",
  encode(message, writer = BinaryWriter.create()) {
    for (const v of message.grants) {
      CodeGrant.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseStoreCodeAuthorization();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.grants.push(CodeGrant.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseStoreCodeAuthorization();
    message.grants = object.grants?.map((e) => CodeGrant.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseStoreCodeAuthorization();
    message.grants = object.grants?.map((e) => CodeGrant.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.grants) {
      obj.grants = message.grants.map((e) => e ? CodeGrant.toAmino(e) : void 0);
    } else {
      obj.grants = message.grants;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return StoreCodeAuthorization.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "wasm/StoreCodeAuthorization",
      value: StoreCodeAuthorization.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return StoreCodeAuthorization.decode(message.value);
  },
  toProto(message) {
    return StoreCodeAuthorization.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmwasm.wasm.v1.StoreCodeAuthorization",
      value: StoreCodeAuthorization.encode(message).finish()
    };
  }
};
function createBaseContractExecutionAuthorization() {
  return {
    $typeUrl: "/cosmwasm.wasm.v1.ContractExecutionAuthorization",
    grants: []
  };
}
const ContractExecutionAuthorization = {
  typeUrl: "/cosmwasm.wasm.v1.ContractExecutionAuthorization",
  encode(message, writer = BinaryWriter.create()) {
    for (const v of message.grants) {
      ContractGrant.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseContractExecutionAuthorization();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.grants.push(ContractGrant.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseContractExecutionAuthorization();
    message.grants = object.grants?.map((e) => ContractGrant.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseContractExecutionAuthorization();
    message.grants = object.grants?.map((e) => ContractGrant.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.grants) {
      obj.grants = message.grants.map((e) => e ? ContractGrant.toAmino(e) : void 0);
    } else {
      obj.grants = message.grants;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return ContractExecutionAuthorization.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "wasm/ContractExecutionAuthorization",
      value: ContractExecutionAuthorization.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return ContractExecutionAuthorization.decode(message.value);
  },
  toProto(message) {
    return ContractExecutionAuthorization.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmwasm.wasm.v1.ContractExecutionAuthorization",
      value: ContractExecutionAuthorization.encode(message).finish()
    };
  }
};
function createBaseContractMigrationAuthorization() {
  return {
    $typeUrl: "/cosmwasm.wasm.v1.ContractMigrationAuthorization",
    grants: []
  };
}
const ContractMigrationAuthorization = {
  typeUrl: "/cosmwasm.wasm.v1.ContractMigrationAuthorization",
  encode(message, writer = BinaryWriter.create()) {
    for (const v of message.grants) {
      ContractGrant.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseContractMigrationAuthorization();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.grants.push(ContractGrant.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseContractMigrationAuthorization();
    message.grants = object.grants?.map((e) => ContractGrant.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseContractMigrationAuthorization();
    message.grants = object.grants?.map((e) => ContractGrant.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.grants) {
      obj.grants = message.grants.map((e) => e ? ContractGrant.toAmino(e) : void 0);
    } else {
      obj.grants = message.grants;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return ContractMigrationAuthorization.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "wasm/ContractMigrationAuthorization",
      value: ContractMigrationAuthorization.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return ContractMigrationAuthorization.decode(message.value);
  },
  toProto(message) {
    return ContractMigrationAuthorization.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmwasm.wasm.v1.ContractMigrationAuthorization",
      value: ContractMigrationAuthorization.encode(message).finish()
    };
  }
};
function createBaseCodeGrant() {
  return {
    codeHash: new Uint8Array(),
    instantiatePermission: void 0
  };
}
const CodeGrant = {
  typeUrl: "/cosmwasm.wasm.v1.CodeGrant",
  encode(message, writer = BinaryWriter.create()) {
    if (message.codeHash.length !== 0) {
      writer.uint32(10).bytes(message.codeHash);
    }
    if (message.instantiatePermission !== void 0) {
      AccessConfig.encode(message.instantiatePermission, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseCodeGrant();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.codeHash = reader.bytes();
          break;
        case 2:
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
    const message = createBaseCodeGrant();
    message.codeHash = object.codeHash ?? new Uint8Array();
    message.instantiatePermission = object.instantiatePermission !== void 0 && object.instantiatePermission !== null ? AccessConfig.fromPartial(object.instantiatePermission) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseCodeGrant();
    if (object.code_hash !== void 0 && object.code_hash !== null) {
      message.codeHash = bytesFromBase64(object.code_hash);
    }
    if (object.instantiate_permission !== void 0 && object.instantiate_permission !== null) {
      message.instantiatePermission = AccessConfig.fromAmino(object.instantiate_permission);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.code_hash = message.codeHash ? base64FromBytes(message.codeHash) : void 0;
    obj.instantiate_permission = message.instantiatePermission ? AccessConfig.toAmino(message.instantiatePermission) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return CodeGrant.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "wasm/CodeGrant",
      value: CodeGrant.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return CodeGrant.decode(message.value);
  },
  toProto(message) {
    return CodeGrant.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmwasm.wasm.v1.CodeGrant",
      value: CodeGrant.encode(message).finish()
    };
  }
};
function createBaseContractGrant() {
  return {
    contract: "",
    limit: void 0,
    filter: void 0
  };
}
const ContractGrant = {
  typeUrl: "/cosmwasm.wasm.v1.ContractGrant",
  encode(message, writer = BinaryWriter.create()) {
    if (message.contract !== "") {
      writer.uint32(10).string(message.contract);
    }
    if (message.limit !== void 0) {
      Any.encode(message.limit, writer.uint32(18).fork()).ldelim();
    }
    if (message.filter !== void 0) {
      Any.encode(message.filter, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseContractGrant();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contract = reader.string();
          break;
        case 2:
          message.limit = Cosmwasm_wasmv1ContractAuthzLimitX_InterfaceDecoder(reader);
          break;
        case 3:
          message.filter = Cosmwasm_wasmv1ContractAuthzFilterX_InterfaceDecoder(reader);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseContractGrant();
    message.contract = object.contract ?? "";
    message.limit = object.limit !== void 0 && object.limit !== null ? Any.fromPartial(object.limit) : void 0;
    message.filter = object.filter !== void 0 && object.filter !== null ? Any.fromPartial(object.filter) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseContractGrant();
    if (object.contract !== void 0 && object.contract !== null) {
      message.contract = object.contract;
    }
    if (object.limit !== void 0 && object.limit !== null) {
      message.limit = Cosmwasm_wasmv1ContractAuthzLimitX_FromAmino(object.limit);
    }
    if (object.filter !== void 0 && object.filter !== null) {
      message.filter = Cosmwasm_wasmv1ContractAuthzFilterX_FromAmino(object.filter);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.contract = message.contract === "" ? void 0 : message.contract;
    obj.limit = message.limit ? Cosmwasm_wasmv1ContractAuthzLimitX_ToAmino(message.limit) : void 0;
    obj.filter = message.filter ? Cosmwasm_wasmv1ContractAuthzFilterX_ToAmino(message.filter) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return ContractGrant.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "wasm/ContractGrant",
      value: ContractGrant.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return ContractGrant.decode(message.value);
  },
  toProto(message) {
    return ContractGrant.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmwasm.wasm.v1.ContractGrant",
      value: ContractGrant.encode(message).finish()
    };
  }
};
function createBaseMaxCallsLimit() {
  return {
    $typeUrl: "/cosmwasm.wasm.v1.MaxCallsLimit",
    remaining: BigInt(0)
  };
}
const MaxCallsLimit = {
  typeUrl: "/cosmwasm.wasm.v1.MaxCallsLimit",
  encode(message, writer = BinaryWriter.create()) {
    if (message.remaining !== BigInt(0)) {
      writer.uint32(8).uint64(message.remaining);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMaxCallsLimit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.remaining = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMaxCallsLimit();
    message.remaining = object.remaining !== void 0 && object.remaining !== null ? BigInt(object.remaining.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object) {
    const message = createBaseMaxCallsLimit();
    if (object.remaining !== void 0 && object.remaining !== null) {
      message.remaining = BigInt(object.remaining);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.remaining = message.remaining !== BigInt(0) ? message.remaining?.toString() : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return MaxCallsLimit.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "wasm/MaxCallsLimit",
      value: MaxCallsLimit.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MaxCallsLimit.decode(message.value);
  },
  toProto(message) {
    return MaxCallsLimit.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MaxCallsLimit",
      value: MaxCallsLimit.encode(message).finish()
    };
  }
};
function createBaseMaxFundsLimit() {
  return {
    $typeUrl: "/cosmwasm.wasm.v1.MaxFundsLimit",
    amounts: []
  };
}
const MaxFundsLimit = {
  typeUrl: "/cosmwasm.wasm.v1.MaxFundsLimit",
  encode(message, writer = BinaryWriter.create()) {
    for (const v of message.amounts) {
      Coin.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMaxFundsLimit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amounts.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMaxFundsLimit();
    message.amounts = object.amounts?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseMaxFundsLimit();
    message.amounts = object.amounts?.map((e) => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.amounts) {
      obj.amounts = message.amounts.map((e) => e ? Coin.toAmino(e) : void 0);
    } else {
      obj.amounts = message.amounts;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return MaxFundsLimit.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "wasm/MaxFundsLimit",
      value: MaxFundsLimit.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MaxFundsLimit.decode(message.value);
  },
  toProto(message) {
    return MaxFundsLimit.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MaxFundsLimit",
      value: MaxFundsLimit.encode(message).finish()
    };
  }
};
function createBaseCombinedLimit() {
  return {
    $typeUrl: "/cosmwasm.wasm.v1.CombinedLimit",
    callsRemaining: BigInt(0),
    amounts: []
  };
}
const CombinedLimit = {
  typeUrl: "/cosmwasm.wasm.v1.CombinedLimit",
  encode(message, writer = BinaryWriter.create()) {
    if (message.callsRemaining !== BigInt(0)) {
      writer.uint32(8).uint64(message.callsRemaining);
    }
    for (const v of message.amounts) {
      Coin.encode(v, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseCombinedLimit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.callsRemaining = reader.uint64();
          break;
        case 2:
          message.amounts.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseCombinedLimit();
    message.callsRemaining = object.callsRemaining !== void 0 && object.callsRemaining !== null ? BigInt(object.callsRemaining.toString()) : BigInt(0);
    message.amounts = object.amounts?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseCombinedLimit();
    if (object.calls_remaining !== void 0 && object.calls_remaining !== null) {
      message.callsRemaining = BigInt(object.calls_remaining);
    }
    message.amounts = object.amounts?.map((e) => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.calls_remaining = message.callsRemaining !== BigInt(0) ? message.callsRemaining?.toString() : void 0;
    if (message.amounts) {
      obj.amounts = message.amounts.map((e) => e ? Coin.toAmino(e) : void 0);
    } else {
      obj.amounts = message.amounts;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return CombinedLimit.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "wasm/CombinedLimit",
      value: CombinedLimit.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return CombinedLimit.decode(message.value);
  },
  toProto(message) {
    return CombinedLimit.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmwasm.wasm.v1.CombinedLimit",
      value: CombinedLimit.encode(message).finish()
    };
  }
};
function createBaseAllowAllMessagesFilter() {
  return {
    $typeUrl: "/cosmwasm.wasm.v1.AllowAllMessagesFilter"
  };
}
const AllowAllMessagesFilter = {
  typeUrl: "/cosmwasm.wasm.v1.AllowAllMessagesFilter",
  encode(_, writer = BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseAllowAllMessagesFilter();
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
    const message = createBaseAllowAllMessagesFilter();
    return message;
  },
  fromAmino(_) {
    const message = createBaseAllowAllMessagesFilter();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return AllowAllMessagesFilter.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "wasm/AllowAllMessagesFilter",
      value: AllowAllMessagesFilter.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return AllowAllMessagesFilter.decode(message.value);
  },
  toProto(message) {
    return AllowAllMessagesFilter.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmwasm.wasm.v1.AllowAllMessagesFilter",
      value: AllowAllMessagesFilter.encode(message).finish()
    };
  }
};
function createBaseAcceptedMessageKeysFilter() {
  return {
    $typeUrl: "/cosmwasm.wasm.v1.AcceptedMessageKeysFilter",
    keys: []
  };
}
const AcceptedMessageKeysFilter = {
  typeUrl: "/cosmwasm.wasm.v1.AcceptedMessageKeysFilter",
  encode(message, writer = BinaryWriter.create()) {
    for (const v of message.keys) {
      writer.uint32(10).string(v);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseAcceptedMessageKeysFilter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.keys.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseAcceptedMessageKeysFilter();
    message.keys = object.keys?.map((e) => e) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseAcceptedMessageKeysFilter();
    message.keys = object.keys?.map((e) => e) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.keys) {
      obj.keys = message.keys.map((e) => e);
    } else {
      obj.keys = message.keys;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return AcceptedMessageKeysFilter.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "wasm/AcceptedMessageKeysFilter",
      value: AcceptedMessageKeysFilter.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return AcceptedMessageKeysFilter.decode(message.value);
  },
  toProto(message) {
    return AcceptedMessageKeysFilter.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmwasm.wasm.v1.AcceptedMessageKeysFilter",
      value: AcceptedMessageKeysFilter.encode(message).finish()
    };
  }
};
function createBaseAcceptedMessagesFilter() {
  return {
    $typeUrl: "/cosmwasm.wasm.v1.AcceptedMessagesFilter",
    messages: []
  };
}
const AcceptedMessagesFilter = {
  typeUrl: "/cosmwasm.wasm.v1.AcceptedMessagesFilter",
  encode(message, writer = BinaryWriter.create()) {
    for (const v of message.messages) {
      writer.uint32(10).bytes(v);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseAcceptedMessagesFilter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.messages.push(reader.bytes());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseAcceptedMessagesFilter();
    message.messages = object.messages?.map((e) => e) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseAcceptedMessagesFilter();
    message.messages = object.messages?.map((e) => toUtf8(JSON.stringify(e))) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.messages) {
      obj.messages = message.messages.map((e) => JSON.parse(fromUtf8(e)));
    } else {
      obj.messages = message.messages;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return AcceptedMessagesFilter.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "wasm/AcceptedMessagesFilter",
      value: AcceptedMessagesFilter.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return AcceptedMessagesFilter.decode(message.value);
  },
  toProto(message) {
    return AcceptedMessagesFilter.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmwasm.wasm.v1.AcceptedMessagesFilter",
      value: AcceptedMessagesFilter.encode(message).finish()
    };
  }
};
const Cosmwasm_wasmv1ContractAuthzLimitX_InterfaceDecoder = (input) => {
  const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
  const data = Any.decode(reader, reader.uint32());
  switch (data.typeUrl) {
    case "/cosmwasm.wasm.v1.MaxCallsLimit":
      return MaxCallsLimit.decode(data.value);
    case "/cosmwasm.wasm.v1.MaxFundsLimit":
      return MaxFundsLimit.decode(data.value);
    case "/cosmwasm.wasm.v1.CombinedLimit":
      return CombinedLimit.decode(data.value);
    default:
      return data;
  }
};
const Cosmwasm_wasmv1ContractAuthzLimitX_FromAmino = (content) => {
  switch (content.type) {
    case "wasm/MaxCallsLimit":
      return Any.fromPartial({
        typeUrl: "/cosmwasm.wasm.v1.MaxCallsLimit",
        value: MaxCallsLimit.encode(MaxCallsLimit.fromPartial(MaxCallsLimit.fromAmino(content.value))).finish()
      });
    case "wasm/MaxFundsLimit":
      return Any.fromPartial({
        typeUrl: "/cosmwasm.wasm.v1.MaxFundsLimit",
        value: MaxFundsLimit.encode(MaxFundsLimit.fromPartial(MaxFundsLimit.fromAmino(content.value))).finish()
      });
    case "wasm/CombinedLimit":
      return Any.fromPartial({
        typeUrl: "/cosmwasm.wasm.v1.CombinedLimit",
        value: CombinedLimit.encode(CombinedLimit.fromPartial(CombinedLimit.fromAmino(content.value))).finish()
      });
    default:
      return Any.fromAmino(content);
  }
};
const Cosmwasm_wasmv1ContractAuthzLimitX_ToAmino = (content) => {
  switch (content.typeUrl) {
    case "/cosmwasm.wasm.v1.MaxCallsLimit":
      return {
        type: "wasm/MaxCallsLimit",
        value: MaxCallsLimit.toAmino(MaxCallsLimit.decode(content.value, void 0))
      };
    case "/cosmwasm.wasm.v1.MaxFundsLimit":
      return {
        type: "wasm/MaxFundsLimit",
        value: MaxFundsLimit.toAmino(MaxFundsLimit.decode(content.value, void 0))
      };
    case "/cosmwasm.wasm.v1.CombinedLimit":
      return {
        type: "wasm/CombinedLimit",
        value: CombinedLimit.toAmino(CombinedLimit.decode(content.value, void 0))
      };
    default:
      return Any.toAmino(content);
  }
};
const Cosmwasm_wasmv1ContractAuthzFilterX_InterfaceDecoder = (input) => {
  const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
  const data = Any.decode(reader, reader.uint32());
  switch (data.typeUrl) {
    case "/cosmwasm.wasm.v1.AllowAllMessagesFilter":
      return AllowAllMessagesFilter.decode(data.value);
    case "/cosmwasm.wasm.v1.AcceptedMessageKeysFilter":
      return AcceptedMessageKeysFilter.decode(data.value);
    case "/cosmwasm.wasm.v1.AcceptedMessagesFilter":
      return AcceptedMessagesFilter.decode(data.value);
    default:
      return data;
  }
};
const Cosmwasm_wasmv1ContractAuthzFilterX_FromAmino = (content) => {
  switch (content.type) {
    case "wasm/AllowAllMessagesFilter":
      return Any.fromPartial({
        typeUrl: "/cosmwasm.wasm.v1.AllowAllMessagesFilter",
        value: AllowAllMessagesFilter.encode(AllowAllMessagesFilter.fromPartial(AllowAllMessagesFilter.fromAmino(content.value))).finish()
      });
    case "wasm/AcceptedMessageKeysFilter":
      return Any.fromPartial({
        typeUrl: "/cosmwasm.wasm.v1.AcceptedMessageKeysFilter",
        value: AcceptedMessageKeysFilter.encode(AcceptedMessageKeysFilter.fromPartial(AcceptedMessageKeysFilter.fromAmino(content.value))).finish()
      });
    case "wasm/AcceptedMessagesFilter":
      return Any.fromPartial({
        typeUrl: "/cosmwasm.wasm.v1.AcceptedMessagesFilter",
        value: AcceptedMessagesFilter.encode(AcceptedMessagesFilter.fromPartial(AcceptedMessagesFilter.fromAmino(content.value))).finish()
      });
    default:
      return Any.fromAmino(content);
  }
};
const Cosmwasm_wasmv1ContractAuthzFilterX_ToAmino = (content) => {
  switch (content.typeUrl) {
    case "/cosmwasm.wasm.v1.AllowAllMessagesFilter":
      return {
        type: "wasm/AllowAllMessagesFilter",
        value: AllowAllMessagesFilter.toAmino(AllowAllMessagesFilter.decode(content.value, void 0))
      };
    case "/cosmwasm.wasm.v1.AcceptedMessageKeysFilter":
      return {
        type: "wasm/AcceptedMessageKeysFilter",
        value: AcceptedMessageKeysFilter.toAmino(AcceptedMessageKeysFilter.decode(content.value, void 0))
      };
    case "/cosmwasm.wasm.v1.AcceptedMessagesFilter":
      return {
        type: "wasm/AcceptedMessagesFilter",
        value: AcceptedMessagesFilter.toAmino(AcceptedMessagesFilter.decode(content.value, void 0))
      };
    default:
      return Any.toAmino(content);
  }
};
export {
  AcceptedMessageKeysFilter,
  AcceptedMessagesFilter,
  AllowAllMessagesFilter,
  CodeGrant,
  CombinedLimit,
  ContractExecutionAuthorization,
  ContractGrant,
  ContractMigrationAuthorization,
  Cosmwasm_wasmv1ContractAuthzFilterX_FromAmino,
  Cosmwasm_wasmv1ContractAuthzFilterX_InterfaceDecoder,
  Cosmwasm_wasmv1ContractAuthzFilterX_ToAmino,
  Cosmwasm_wasmv1ContractAuthzLimitX_FromAmino,
  Cosmwasm_wasmv1ContractAuthzLimitX_InterfaceDecoder,
  Cosmwasm_wasmv1ContractAuthzLimitX_ToAmino,
  MaxCallsLimit,
  MaxFundsLimit,
  StoreCodeAuthorization
};
