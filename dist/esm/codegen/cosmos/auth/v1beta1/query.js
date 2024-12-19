import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination";
import { Any } from "../../../google/protobuf/any";
import { Params, BaseAccount, ModuleAccount } from "./auth";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { bytesFromBase64, base64FromBytes } from "../../../helpers";
function createBaseQueryAccountsRequest() {
  return {
    pagination: void 0
  };
}
const QueryAccountsRequest = {
  typeUrl: "/cosmos.auth.v1beta1.QueryAccountsRequest",
  encode(message, writer = BinaryWriter.create()) {
    if (message.pagination !== void 0) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryAccountsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryAccountsRequest();
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryAccountsRequest();
    if (object.pagination !== void 0 && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryAccountsRequest.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryAccountsRequest",
      value: QueryAccountsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryAccountsRequest.decode(message.value);
  },
  toProto(message) {
    return QueryAccountsRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.auth.v1beta1.QueryAccountsRequest",
      value: QueryAccountsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAccountsResponse() {
  return {
    accounts: [],
    pagination: void 0
  };
}
const QueryAccountsResponse = {
  typeUrl: "/cosmos.auth.v1beta1.QueryAccountsResponse",
  encode(message, writer = BinaryWriter.create()) {
    for (const v of message.accounts) {
      Any.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== void 0) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryAccountsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accounts.push(Any.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryAccountsResponse();
    message.accounts = object.accounts?.map((e) => Any.fromPartial(e)) || [];
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryAccountsResponse();
    message.accounts = object.accounts?.map((e) => Cosmos_authv1beta1AccountI_FromAmino(e)) || [];
    if (object.pagination !== void 0 && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.accounts) {
      obj.accounts = message.accounts.map((e) => e ? Cosmos_authv1beta1AccountI_ToAmino(e) : void 0);
    } else {
      obj.accounts = message.accounts;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryAccountsResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryAccountsResponse",
      value: QueryAccountsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryAccountsResponse.decode(message.value);
  },
  toProto(message) {
    return QueryAccountsResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.auth.v1beta1.QueryAccountsResponse",
      value: QueryAccountsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAccountRequest() {
  return {
    address: ""
  };
}
const QueryAccountRequest = {
  typeUrl: "/cosmos.auth.v1beta1.QueryAccountRequest",
  encode(message, writer = BinaryWriter.create()) {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryAccountRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryAccountRequest();
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryAccountRequest();
    if (object.address !== void 0 && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.address = message.address === "" ? void 0 : message.address;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryAccountRequest.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryAccountRequest",
      value: QueryAccountRequest.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryAccountRequest.decode(message.value);
  },
  toProto(message) {
    return QueryAccountRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.auth.v1beta1.QueryAccountRequest",
      value: QueryAccountRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAccountResponse() {
  return {
    account: void 0
  };
}
const QueryAccountResponse = {
  typeUrl: "/cosmos.auth.v1beta1.QueryAccountResponse",
  encode(message, writer = BinaryWriter.create()) {
    if (message.account !== void 0) {
      Any.encode(message.account, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryAccountResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.account = Cosmos_authv1beta1AccountI_InterfaceDecoder(reader);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryAccountResponse();
    message.account = object.account !== void 0 && object.account !== null ? Any.fromPartial(object.account) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryAccountResponse();
    if (object.account !== void 0 && object.account !== null) {
      message.account = Cosmos_authv1beta1AccountI_FromAmino(object.account);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.account = message.account ? Cosmos_authv1beta1AccountI_ToAmino(message.account) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryAccountResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryAccountResponse",
      value: QueryAccountResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryAccountResponse.decode(message.value);
  },
  toProto(message) {
    return QueryAccountResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.auth.v1beta1.QueryAccountResponse",
      value: QueryAccountResponse.encode(message).finish()
    };
  }
};
function createBaseQueryParamsRequest() {
  return {};
}
const QueryParamsRequest = {
  typeUrl: "/cosmos.auth.v1beta1.QueryParamsRequest",
  encode(_, writer = BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
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
    const message = createBaseQueryParamsRequest();
    return message;
  },
  fromAmino(_) {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return QueryParamsRequest.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryParamsRequest",
      value: QueryParamsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryParamsRequest.decode(message.value);
  },
  toProto(message) {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.auth.v1beta1.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryParamsResponse() {
  return {
    params: Params.fromPartial({})
  };
}
const QueryParamsResponse = {
  typeUrl: "/cosmos.auth.v1beta1.QueryParamsResponse",
  encode(message, writer = BinaryWriter.create()) {
    if (message.params !== void 0) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
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
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== void 0 && object.params !== null ? Params.fromPartial(object.params) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryParamsResponse();
    if (object.params !== void 0 && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.params = message.params ? Params.toAmino(message.params) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryParamsResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryParamsResponse",
      value: QueryParamsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message) {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.auth.v1beta1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryModuleAccountsRequest() {
  return {};
}
const QueryModuleAccountsRequest = {
  typeUrl: "/cosmos.auth.v1beta1.QueryModuleAccountsRequest",
  encode(_, writer = BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryModuleAccountsRequest();
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
    const message = createBaseQueryModuleAccountsRequest();
    return message;
  },
  fromAmino(_) {
    const message = createBaseQueryModuleAccountsRequest();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return QueryModuleAccountsRequest.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryModuleAccountsRequest",
      value: QueryModuleAccountsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryModuleAccountsRequest.decode(message.value);
  },
  toProto(message) {
    return QueryModuleAccountsRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.auth.v1beta1.QueryModuleAccountsRequest",
      value: QueryModuleAccountsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryModuleAccountsResponse() {
  return {
    accounts: []
  };
}
const QueryModuleAccountsResponse = {
  typeUrl: "/cosmos.auth.v1beta1.QueryModuleAccountsResponse",
  encode(message, writer = BinaryWriter.create()) {
    for (const v of message.accounts) {
      Any.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryModuleAccountsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accounts.push(Any.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryModuleAccountsResponse();
    message.accounts = object.accounts?.map((e) => Any.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryModuleAccountsResponse();
    message.accounts = object.accounts?.map((e) => Cosmos_authv1beta1ModuleAccountI_FromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.accounts) {
      obj.accounts = message.accounts.map((e) => e ? Cosmos_authv1beta1ModuleAccountI_ToAmino(e) : void 0);
    } else {
      obj.accounts = message.accounts;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return QueryModuleAccountsResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryModuleAccountsResponse",
      value: QueryModuleAccountsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryModuleAccountsResponse.decode(message.value);
  },
  toProto(message) {
    return QueryModuleAccountsResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.auth.v1beta1.QueryModuleAccountsResponse",
      value: QueryModuleAccountsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryModuleAccountByNameRequest() {
  return {
    name: ""
  };
}
const QueryModuleAccountByNameRequest = {
  typeUrl: "/cosmos.auth.v1beta1.QueryModuleAccountByNameRequest",
  encode(message, writer = BinaryWriter.create()) {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryModuleAccountByNameRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryModuleAccountByNameRequest();
    message.name = object.name ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryModuleAccountByNameRequest();
    if (object.name !== void 0 && object.name !== null) {
      message.name = object.name;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.name = message.name === "" ? void 0 : message.name;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryModuleAccountByNameRequest.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryModuleAccountByNameRequest",
      value: QueryModuleAccountByNameRequest.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryModuleAccountByNameRequest.decode(message.value);
  },
  toProto(message) {
    return QueryModuleAccountByNameRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.auth.v1beta1.QueryModuleAccountByNameRequest",
      value: QueryModuleAccountByNameRequest.encode(message).finish()
    };
  }
};
function createBaseQueryModuleAccountByNameResponse() {
  return {
    account: void 0
  };
}
const QueryModuleAccountByNameResponse = {
  typeUrl: "/cosmos.auth.v1beta1.QueryModuleAccountByNameResponse",
  encode(message, writer = BinaryWriter.create()) {
    if (message.account !== void 0) {
      Any.encode(message.account, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryModuleAccountByNameResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.account = Cosmos_authv1beta1ModuleAccountI_InterfaceDecoder(reader);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryModuleAccountByNameResponse();
    message.account = object.account !== void 0 && object.account !== null ? Any.fromPartial(object.account) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryModuleAccountByNameResponse();
    if (object.account !== void 0 && object.account !== null) {
      message.account = Cosmos_authv1beta1ModuleAccountI_FromAmino(object.account);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.account = message.account ? Cosmos_authv1beta1ModuleAccountI_ToAmino(message.account) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryModuleAccountByNameResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryModuleAccountByNameResponse",
      value: QueryModuleAccountByNameResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryModuleAccountByNameResponse.decode(message.value);
  },
  toProto(message) {
    return QueryModuleAccountByNameResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.auth.v1beta1.QueryModuleAccountByNameResponse",
      value: QueryModuleAccountByNameResponse.encode(message).finish()
    };
  }
};
function createBaseBech32PrefixRequest() {
  return {};
}
const Bech32PrefixRequest = {
  typeUrl: "/cosmos.auth.v1beta1.Bech32PrefixRequest",
  encode(_, writer = BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseBech32PrefixRequest();
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
    const message = createBaseBech32PrefixRequest();
    return message;
  },
  fromAmino(_) {
    const message = createBaseBech32PrefixRequest();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return Bech32PrefixRequest.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/Bech32PrefixRequest",
      value: Bech32PrefixRequest.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return Bech32PrefixRequest.decode(message.value);
  },
  toProto(message) {
    return Bech32PrefixRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.auth.v1beta1.Bech32PrefixRequest",
      value: Bech32PrefixRequest.encode(message).finish()
    };
  }
};
function createBaseBech32PrefixResponse() {
  return {
    bech32Prefix: ""
  };
}
const Bech32PrefixResponse = {
  typeUrl: "/cosmos.auth.v1beta1.Bech32PrefixResponse",
  encode(message, writer = BinaryWriter.create()) {
    if (message.bech32Prefix !== "") {
      writer.uint32(10).string(message.bech32Prefix);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseBech32PrefixResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bech32Prefix = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseBech32PrefixResponse();
    message.bech32Prefix = object.bech32Prefix ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseBech32PrefixResponse();
    if (object.bech32_prefix !== void 0 && object.bech32_prefix !== null) {
      message.bech32Prefix = object.bech32_prefix;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.bech32_prefix = message.bech32Prefix === "" ? void 0 : message.bech32Prefix;
    return obj;
  },
  fromAminoMsg(object) {
    return Bech32PrefixResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/Bech32PrefixResponse",
      value: Bech32PrefixResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return Bech32PrefixResponse.decode(message.value);
  },
  toProto(message) {
    return Bech32PrefixResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.auth.v1beta1.Bech32PrefixResponse",
      value: Bech32PrefixResponse.encode(message).finish()
    };
  }
};
function createBaseAddressBytesToStringRequest() {
  return {
    addressBytes: new Uint8Array()
  };
}
const AddressBytesToStringRequest = {
  typeUrl: "/cosmos.auth.v1beta1.AddressBytesToStringRequest",
  encode(message, writer = BinaryWriter.create()) {
    if (message.addressBytes.length !== 0) {
      writer.uint32(10).bytes(message.addressBytes);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseAddressBytesToStringRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.addressBytes = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseAddressBytesToStringRequest();
    message.addressBytes = object.addressBytes ?? new Uint8Array();
    return message;
  },
  fromAmino(object) {
    const message = createBaseAddressBytesToStringRequest();
    if (object.address_bytes !== void 0 && object.address_bytes !== null) {
      message.addressBytes = bytesFromBase64(object.address_bytes);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.address_bytes = message.addressBytes ? base64FromBytes(message.addressBytes) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return AddressBytesToStringRequest.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/AddressBytesToStringRequest",
      value: AddressBytesToStringRequest.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return AddressBytesToStringRequest.decode(message.value);
  },
  toProto(message) {
    return AddressBytesToStringRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.auth.v1beta1.AddressBytesToStringRequest",
      value: AddressBytesToStringRequest.encode(message).finish()
    };
  }
};
function createBaseAddressBytesToStringResponse() {
  return {
    addressString: ""
  };
}
const AddressBytesToStringResponse = {
  typeUrl: "/cosmos.auth.v1beta1.AddressBytesToStringResponse",
  encode(message, writer = BinaryWriter.create()) {
    if (message.addressString !== "") {
      writer.uint32(10).string(message.addressString);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseAddressBytesToStringResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.addressString = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseAddressBytesToStringResponse();
    message.addressString = object.addressString ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseAddressBytesToStringResponse();
    if (object.address_string !== void 0 && object.address_string !== null) {
      message.addressString = object.address_string;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.address_string = message.addressString === "" ? void 0 : message.addressString;
    return obj;
  },
  fromAminoMsg(object) {
    return AddressBytesToStringResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/AddressBytesToStringResponse",
      value: AddressBytesToStringResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return AddressBytesToStringResponse.decode(message.value);
  },
  toProto(message) {
    return AddressBytesToStringResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.auth.v1beta1.AddressBytesToStringResponse",
      value: AddressBytesToStringResponse.encode(message).finish()
    };
  }
};
function createBaseAddressStringToBytesRequest() {
  return {
    addressString: ""
  };
}
const AddressStringToBytesRequest = {
  typeUrl: "/cosmos.auth.v1beta1.AddressStringToBytesRequest",
  encode(message, writer = BinaryWriter.create()) {
    if (message.addressString !== "") {
      writer.uint32(10).string(message.addressString);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseAddressStringToBytesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.addressString = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseAddressStringToBytesRequest();
    message.addressString = object.addressString ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseAddressStringToBytesRequest();
    if (object.address_string !== void 0 && object.address_string !== null) {
      message.addressString = object.address_string;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.address_string = message.addressString === "" ? void 0 : message.addressString;
    return obj;
  },
  fromAminoMsg(object) {
    return AddressStringToBytesRequest.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/AddressStringToBytesRequest",
      value: AddressStringToBytesRequest.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return AddressStringToBytesRequest.decode(message.value);
  },
  toProto(message) {
    return AddressStringToBytesRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.auth.v1beta1.AddressStringToBytesRequest",
      value: AddressStringToBytesRequest.encode(message).finish()
    };
  }
};
function createBaseAddressStringToBytesResponse() {
  return {
    addressBytes: new Uint8Array()
  };
}
const AddressStringToBytesResponse = {
  typeUrl: "/cosmos.auth.v1beta1.AddressStringToBytesResponse",
  encode(message, writer = BinaryWriter.create()) {
    if (message.addressBytes.length !== 0) {
      writer.uint32(10).bytes(message.addressBytes);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseAddressStringToBytesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.addressBytes = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseAddressStringToBytesResponse();
    message.addressBytes = object.addressBytes ?? new Uint8Array();
    return message;
  },
  fromAmino(object) {
    const message = createBaseAddressStringToBytesResponse();
    if (object.address_bytes !== void 0 && object.address_bytes !== null) {
      message.addressBytes = bytesFromBase64(object.address_bytes);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.address_bytes = message.addressBytes ? base64FromBytes(message.addressBytes) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return AddressStringToBytesResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/AddressStringToBytesResponse",
      value: AddressStringToBytesResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return AddressStringToBytesResponse.decode(message.value);
  },
  toProto(message) {
    return AddressStringToBytesResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.auth.v1beta1.AddressStringToBytesResponse",
      value: AddressStringToBytesResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAccountAddressByIDRequest() {
  return {
    id: BigInt(0),
    accountId: BigInt(0)
  };
}
const QueryAccountAddressByIDRequest = {
  typeUrl: "/cosmos.auth.v1beta1.QueryAccountAddressByIDRequest",
  encode(message, writer = BinaryWriter.create()) {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).int64(message.id);
    }
    if (message.accountId !== BigInt(0)) {
      writer.uint32(16).uint64(message.accountId);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryAccountAddressByIDRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.int64();
          break;
        case 2:
          message.accountId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryAccountAddressByIDRequest();
    message.id = object.id !== void 0 && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.accountId = object.accountId !== void 0 && object.accountId !== null ? BigInt(object.accountId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryAccountAddressByIDRequest();
    if (object.id !== void 0 && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.account_id !== void 0 && object.account_id !== null) {
      message.accountId = BigInt(object.account_id);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.id = message.id !== BigInt(0) ? message.id.toString() : void 0;
    obj.account_id = message.accountId !== BigInt(0) ? message.accountId.toString() : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryAccountAddressByIDRequest.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryAccountAddressByIDRequest",
      value: QueryAccountAddressByIDRequest.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryAccountAddressByIDRequest.decode(message.value);
  },
  toProto(message) {
    return QueryAccountAddressByIDRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.auth.v1beta1.QueryAccountAddressByIDRequest",
      value: QueryAccountAddressByIDRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAccountAddressByIDResponse() {
  return {
    accountAddress: ""
  };
}
const QueryAccountAddressByIDResponse = {
  typeUrl: "/cosmos.auth.v1beta1.QueryAccountAddressByIDResponse",
  encode(message, writer = BinaryWriter.create()) {
    if (message.accountAddress !== "") {
      writer.uint32(10).string(message.accountAddress);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryAccountAddressByIDResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accountAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryAccountAddressByIDResponse();
    message.accountAddress = object.accountAddress ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryAccountAddressByIDResponse();
    if (object.account_address !== void 0 && object.account_address !== null) {
      message.accountAddress = object.account_address;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.account_address = message.accountAddress === "" ? void 0 : message.accountAddress;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryAccountAddressByIDResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryAccountAddressByIDResponse",
      value: QueryAccountAddressByIDResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryAccountAddressByIDResponse.decode(message.value);
  },
  toProto(message) {
    return QueryAccountAddressByIDResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.auth.v1beta1.QueryAccountAddressByIDResponse",
      value: QueryAccountAddressByIDResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAccountInfoRequest() {
  return {
    address: ""
  };
}
const QueryAccountInfoRequest = {
  typeUrl: "/cosmos.auth.v1beta1.QueryAccountInfoRequest",
  encode(message, writer = BinaryWriter.create()) {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryAccountInfoRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryAccountInfoRequest();
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryAccountInfoRequest();
    if (object.address !== void 0 && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.address = message.address === "" ? void 0 : message.address;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryAccountInfoRequest.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryAccountInfoRequest",
      value: QueryAccountInfoRequest.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryAccountInfoRequest.decode(message.value);
  },
  toProto(message) {
    return QueryAccountInfoRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.auth.v1beta1.QueryAccountInfoRequest",
      value: QueryAccountInfoRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAccountInfoResponse() {
  return {
    info: void 0
  };
}
const QueryAccountInfoResponse = {
  typeUrl: "/cosmos.auth.v1beta1.QueryAccountInfoResponse",
  encode(message, writer = BinaryWriter.create()) {
    if (message.info !== void 0) {
      BaseAccount.encode(message.info, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryAccountInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.info = BaseAccount.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryAccountInfoResponse();
    message.info = object.info !== void 0 && object.info !== null ? BaseAccount.fromPartial(object.info) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryAccountInfoResponse();
    if (object.info !== void 0 && object.info !== null) {
      message.info = BaseAccount.fromAmino(object.info);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.info = message.info ? BaseAccount.toAmino(message.info) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryAccountInfoResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryAccountInfoResponse",
      value: QueryAccountInfoResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryAccountInfoResponse.decode(message.value);
  },
  toProto(message) {
    return QueryAccountInfoResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.auth.v1beta1.QueryAccountInfoResponse",
      value: QueryAccountInfoResponse.encode(message).finish()
    };
  }
};
const Cosmos_authv1beta1AccountI_InterfaceDecoder = (input) => {
  const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
  const data = Any.decode(reader, reader.uint32());
  switch (data.typeUrl) {
    case "/cosmos.auth.v1beta1.BaseAccount":
      return BaseAccount.decode(data.value);
    default:
      return data;
  }
};
const Cosmos_authv1beta1AccountI_FromAmino = (content) => {
  switch (content.type) {
    case "cosmos-sdk/BaseAccount":
      return Any.fromPartial({
        typeUrl: "/cosmos.auth.v1beta1.BaseAccount",
        value: BaseAccount.encode(BaseAccount.fromPartial(BaseAccount.fromAmino(content.value))).finish()
      });
    default:
      return Any.fromAmino(content);
  }
};
const Cosmos_authv1beta1AccountI_ToAmino = (content) => {
  switch (content.typeUrl) {
    case "/cosmos.auth.v1beta1.BaseAccount":
      return {
        type: "cosmos-sdk/BaseAccount",
        value: BaseAccount.toAmino(BaseAccount.decode(content.value, void 0))
      };
    default:
      return Any.toAmino(content);
  }
};
const Cosmos_authv1beta1ModuleAccountI_InterfaceDecoder = (input) => {
  const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
  const data = Any.decode(reader, reader.uint32());
  switch (data.typeUrl) {
    case "/cosmos.auth.v1beta1.ModuleAccount":
      return ModuleAccount.decode(data.value);
    default:
      return data;
  }
};
const Cosmos_authv1beta1ModuleAccountI_FromAmino = (content) => {
  switch (content.type) {
    case "cosmos-sdk/ModuleAccount":
      return Any.fromPartial({
        typeUrl: "/cosmos.auth.v1beta1.ModuleAccount",
        value: ModuleAccount.encode(ModuleAccount.fromPartial(ModuleAccount.fromAmino(content.value))).finish()
      });
    default:
      return Any.fromAmino(content);
  }
};
const Cosmos_authv1beta1ModuleAccountI_ToAmino = (content) => {
  switch (content.typeUrl) {
    case "/cosmos.auth.v1beta1.ModuleAccount":
      return {
        type: "cosmos-sdk/ModuleAccount",
        value: ModuleAccount.toAmino(ModuleAccount.decode(content.value, void 0))
      };
    default:
      return Any.toAmino(content);
  }
};
export {
  AddressBytesToStringRequest,
  AddressBytesToStringResponse,
  AddressStringToBytesRequest,
  AddressStringToBytesResponse,
  Bech32PrefixRequest,
  Bech32PrefixResponse,
  Cosmos_authv1beta1AccountI_FromAmino,
  Cosmos_authv1beta1AccountI_InterfaceDecoder,
  Cosmos_authv1beta1AccountI_ToAmino,
  Cosmos_authv1beta1ModuleAccountI_FromAmino,
  Cosmos_authv1beta1ModuleAccountI_InterfaceDecoder,
  Cosmos_authv1beta1ModuleAccountI_ToAmino,
  QueryAccountAddressByIDRequest,
  QueryAccountAddressByIDResponse,
  QueryAccountInfoRequest,
  QueryAccountInfoResponse,
  QueryAccountRequest,
  QueryAccountResponse,
  QueryAccountsRequest,
  QueryAccountsResponse,
  QueryModuleAccountByNameRequest,
  QueryModuleAccountByNameResponse,
  QueryModuleAccountsRequest,
  QueryModuleAccountsResponse,
  QueryParamsRequest,
  QueryParamsResponse
};
