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
var authz_exports = {};
__export(authz_exports, {
  Cosmos_authzv1beta1Authorization_FromAmino: () => Cosmos_authzv1beta1Authorization_FromAmino,
  Cosmos_authzv1beta1Authorization_InterfaceDecoder: () => Cosmos_authzv1beta1Authorization_InterfaceDecoder,
  Cosmos_authzv1beta1Authorization_ToAmino: () => Cosmos_authzv1beta1Authorization_ToAmino,
  GenericAuthorization: () => GenericAuthorization,
  Grant: () => Grant,
  GrantAuthorization: () => GrantAuthorization,
  GrantQueueItem: () => GrantQueueItem
});
module.exports = __toCommonJS(authz_exports);
var import_any = require("../../../google/protobuf/any");
var import_timestamp = require("../../../google/protobuf/timestamp");
var import_authz = require("../../bank/v1beta1/authz");
var import_authz2 = require("../../staking/v1beta1/authz");
var import_authz3 = require("../../../cosmwasm/wasm/v1/authz");
var import_authz4 = require("../../../ibc/applications/transfer/v1/authz");
var import_binary = require("../../../binary");
var import_helpers = require("../../../helpers");
function createBaseGenericAuthorization() {
  return {
    $typeUrl: "/cosmos.authz.v1beta1.GenericAuthorization",
    msg: ""
  };
}
const GenericAuthorization = {
  typeUrl: "/cosmos.authz.v1beta1.GenericAuthorization",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.msg !== "") {
      writer.uint32(10).string(message.msg);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseGenericAuthorization();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.msg = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseGenericAuthorization();
    message.msg = object.msg ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseGenericAuthorization();
    if (object.msg !== void 0 && object.msg !== null) {
      message.msg = object.msg;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.msg = message.msg === "" ? void 0 : message.msg;
    return obj;
  },
  fromAminoMsg(object) {
    return GenericAuthorization.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/GenericAuthorization",
      value: GenericAuthorization.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return GenericAuthorization.decode(message.value);
  },
  toProto(message) {
    return GenericAuthorization.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.authz.v1beta1.GenericAuthorization",
      value: GenericAuthorization.encode(message).finish()
    };
  }
};
function createBaseGrant() {
  return {
    authorization: void 0,
    expiration: void 0
  };
}
const Grant = {
  typeUrl: "/cosmos.authz.v1beta1.Grant",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.authorization !== void 0) {
      import_any.Any.encode(message.authorization, writer.uint32(10).fork()).ldelim();
    }
    if (message.expiration !== void 0) {
      import_timestamp.Timestamp.encode((0, import_helpers.toTimestamp)(message.expiration), writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseGrant();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authorization = Cosmos_authzv1beta1Authorization_InterfaceDecoder(reader);
          break;
        case 2:
          message.expiration = (0, import_helpers.fromTimestamp)(import_timestamp.Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseGrant();
    message.authorization = object.authorization !== void 0 && object.authorization !== null ? import_any.Any.fromPartial(object.authorization) : void 0;
    message.expiration = object.expiration ?? void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseGrant();
    if (object.authorization !== void 0 && object.authorization !== null) {
      message.authorization = Cosmos_authzv1beta1Authorization_FromAmino(object.authorization);
    }
    if (object.expiration !== void 0 && object.expiration !== null) {
      message.expiration = (0, import_helpers.fromTimestamp)(import_timestamp.Timestamp.fromAmino(object.expiration));
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.authorization = message.authorization ? Cosmos_authzv1beta1Authorization_ToAmino(message.authorization) : void 0;
    obj.expiration = message.expiration ? import_timestamp.Timestamp.toAmino((0, import_helpers.toTimestamp)(message.expiration)) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return Grant.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/Grant",
      value: Grant.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return Grant.decode(message.value);
  },
  toProto(message) {
    return Grant.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.authz.v1beta1.Grant",
      value: Grant.encode(message).finish()
    };
  }
};
function createBaseGrantAuthorization() {
  return {
    granter: "",
    grantee: "",
    authorization: void 0,
    expiration: void 0
  };
}
const GrantAuthorization = {
  typeUrl: "/cosmos.authz.v1beta1.GrantAuthorization",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.granter !== "") {
      writer.uint32(10).string(message.granter);
    }
    if (message.grantee !== "") {
      writer.uint32(18).string(message.grantee);
    }
    if (message.authorization !== void 0) {
      import_any.Any.encode(message.authorization, writer.uint32(26).fork()).ldelim();
    }
    if (message.expiration !== void 0) {
      import_timestamp.Timestamp.encode((0, import_helpers.toTimestamp)(message.expiration), writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseGrantAuthorization();
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
          message.authorization = Cosmos_authzv1beta1Authorization_InterfaceDecoder(reader);
          break;
        case 4:
          message.expiration = (0, import_helpers.fromTimestamp)(import_timestamp.Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseGrantAuthorization();
    message.granter = object.granter ?? "";
    message.grantee = object.grantee ?? "";
    message.authorization = object.authorization !== void 0 && object.authorization !== null ? import_any.Any.fromPartial(object.authorization) : void 0;
    message.expiration = object.expiration ?? void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseGrantAuthorization();
    if (object.granter !== void 0 && object.granter !== null) {
      message.granter = object.granter;
    }
    if (object.grantee !== void 0 && object.grantee !== null) {
      message.grantee = object.grantee;
    }
    if (object.authorization !== void 0 && object.authorization !== null) {
      message.authorization = Cosmos_authzv1beta1Authorization_FromAmino(object.authorization);
    }
    if (object.expiration !== void 0 && object.expiration !== null) {
      message.expiration = (0, import_helpers.fromTimestamp)(import_timestamp.Timestamp.fromAmino(object.expiration));
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.granter = message.granter === "" ? void 0 : message.granter;
    obj.grantee = message.grantee === "" ? void 0 : message.grantee;
    obj.authorization = message.authorization ? Cosmos_authzv1beta1Authorization_ToAmino(message.authorization) : void 0;
    obj.expiration = message.expiration ? import_timestamp.Timestamp.toAmino((0, import_helpers.toTimestamp)(message.expiration)) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return GrantAuthorization.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/GrantAuthorization",
      value: GrantAuthorization.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return GrantAuthorization.decode(message.value);
  },
  toProto(message) {
    return GrantAuthorization.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.authz.v1beta1.GrantAuthorization",
      value: GrantAuthorization.encode(message).finish()
    };
  }
};
function createBaseGrantQueueItem() {
  return {
    msgTypeUrls: []
  };
}
const GrantQueueItem = {
  typeUrl: "/cosmos.authz.v1beta1.GrantQueueItem",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    for (const v of message.msgTypeUrls) {
      writer.uint32(10).string(v);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseGrantQueueItem();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.msgTypeUrls.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseGrantQueueItem();
    message.msgTypeUrls = object.msgTypeUrls?.map((e) => e) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseGrantQueueItem();
    message.msgTypeUrls = object.msg_type_urls?.map((e) => e) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.msgTypeUrls) {
      obj.msg_type_urls = message.msgTypeUrls.map((e) => e);
    } else {
      obj.msg_type_urls = message.msgTypeUrls;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return GrantQueueItem.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/GrantQueueItem",
      value: GrantQueueItem.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return GrantQueueItem.decode(message.value);
  },
  toProto(message) {
    return GrantQueueItem.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.authz.v1beta1.GrantQueueItem",
      value: GrantQueueItem.encode(message).finish()
    };
  }
};
const Cosmos_authzv1beta1Authorization_InterfaceDecoder = (input) => {
  const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
  const data = import_any.Any.decode(reader, reader.uint32());
  switch (data.typeUrl) {
    case "/cosmos.authz.v1beta1.GenericAuthorization":
      return GenericAuthorization.decode(data.value);
    case "/cosmos.bank.v1beta1.SendAuthorization":
      return import_authz.SendAuthorization.decode(data.value);
    case "/cosmos.staking.v1beta1.StakeAuthorization":
      return import_authz2.StakeAuthorization.decode(data.value);
    case "/cosmwasm.wasm.v1.StoreCodeAuthorization":
      return import_authz3.StoreCodeAuthorization.decode(data.value);
    case "/cosmwasm.wasm.v1.ContractExecutionAuthorization":
      return import_authz3.ContractExecutionAuthorization.decode(data.value);
    case "/cosmwasm.wasm.v1.ContractMigrationAuthorization":
      return import_authz3.ContractMigrationAuthorization.decode(data.value);
    case "/ibc.applications.transfer.v1.TransferAuthorization":
      return import_authz4.TransferAuthorization.decode(data.value);
    default:
      return data;
  }
};
const Cosmos_authzv1beta1Authorization_FromAmino = (content) => {
  switch (content.type) {
    case "cosmos-sdk/GenericAuthorization":
      return import_any.Any.fromPartial({
        typeUrl: "/cosmos.authz.v1beta1.GenericAuthorization",
        value: GenericAuthorization.encode(GenericAuthorization.fromPartial(GenericAuthorization.fromAmino(content.value))).finish()
      });
    case "cosmos-sdk/SendAuthorization":
      return import_any.Any.fromPartial({
        typeUrl: "/cosmos.bank.v1beta1.SendAuthorization",
        value: import_authz.SendAuthorization.encode(import_authz.SendAuthorization.fromPartial(import_authz.SendAuthorization.fromAmino(content.value))).finish()
      });
    case "cosmos-sdk/StakeAuthorization":
      return import_any.Any.fromPartial({
        typeUrl: "/cosmos.staking.v1beta1.StakeAuthorization",
        value: import_authz2.StakeAuthorization.encode(import_authz2.StakeAuthorization.fromPartial(import_authz2.StakeAuthorization.fromAmino(content.value))).finish()
      });
    case "wasm/StoreCodeAuthorization":
      return import_any.Any.fromPartial({
        typeUrl: "/cosmwasm.wasm.v1.StoreCodeAuthorization",
        value: import_authz3.StoreCodeAuthorization.encode(import_authz3.StoreCodeAuthorization.fromPartial(import_authz3.StoreCodeAuthorization.fromAmino(content.value))).finish()
      });
    case "wasm/ContractExecutionAuthorization":
      return import_any.Any.fromPartial({
        typeUrl: "/cosmwasm.wasm.v1.ContractExecutionAuthorization",
        value: import_authz3.ContractExecutionAuthorization.encode(import_authz3.ContractExecutionAuthorization.fromPartial(import_authz3.ContractExecutionAuthorization.fromAmino(content.value))).finish()
      });
    case "wasm/ContractMigrationAuthorization":
      return import_any.Any.fromPartial({
        typeUrl: "/cosmwasm.wasm.v1.ContractMigrationAuthorization",
        value: import_authz3.ContractMigrationAuthorization.encode(import_authz3.ContractMigrationAuthorization.fromPartial(import_authz3.ContractMigrationAuthorization.fromAmino(content.value))).finish()
      });
    case "cosmos-sdk/TransferAuthorization":
      return import_any.Any.fromPartial({
        typeUrl: "/ibc.applications.transfer.v1.TransferAuthorization",
        value: import_authz4.TransferAuthorization.encode(import_authz4.TransferAuthorization.fromPartial(import_authz4.TransferAuthorization.fromAmino(content.value))).finish()
      });
    default:
      return import_any.Any.fromAmino(content);
  }
};
const Cosmos_authzv1beta1Authorization_ToAmino = (content) => {
  switch (content.typeUrl) {
    case "/cosmos.authz.v1beta1.GenericAuthorization":
      return {
        type: "cosmos-sdk/GenericAuthorization",
        value: GenericAuthorization.toAmino(GenericAuthorization.decode(content.value, void 0))
      };
    case "/cosmos.bank.v1beta1.SendAuthorization":
      return {
        type: "cosmos-sdk/SendAuthorization",
        value: import_authz.SendAuthorization.toAmino(import_authz.SendAuthorization.decode(content.value, void 0))
      };
    case "/cosmos.staking.v1beta1.StakeAuthorization":
      return {
        type: "cosmos-sdk/StakeAuthorization",
        value: import_authz2.StakeAuthorization.toAmino(import_authz2.StakeAuthorization.decode(content.value, void 0))
      };
    case "/cosmwasm.wasm.v1.StoreCodeAuthorization":
      return {
        type: "wasm/StoreCodeAuthorization",
        value: import_authz3.StoreCodeAuthorization.toAmino(import_authz3.StoreCodeAuthorization.decode(content.value, void 0))
      };
    case "/cosmwasm.wasm.v1.ContractExecutionAuthorization":
      return {
        type: "wasm/ContractExecutionAuthorization",
        value: import_authz3.ContractExecutionAuthorization.toAmino(import_authz3.ContractExecutionAuthorization.decode(content.value, void 0))
      };
    case "/cosmwasm.wasm.v1.ContractMigrationAuthorization":
      return {
        type: "wasm/ContractMigrationAuthorization",
        value: import_authz3.ContractMigrationAuthorization.toAmino(import_authz3.ContractMigrationAuthorization.decode(content.value, void 0))
      };
    case "/ibc.applications.transfer.v1.TransferAuthorization":
      return {
        type: "cosmos-sdk/TransferAuthorization",
        value: import_authz4.TransferAuthorization.toAmino(import_authz4.TransferAuthorization.decode(content.value, void 0))
      };
    default:
      return import_any.Any.toAmino(content);
  }
};
// Removed broken CommonJS export annotation
