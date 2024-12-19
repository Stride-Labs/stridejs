import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination";
import { Any } from "../../../google/protobuf/any";
import { Params } from "./auth";
import { BinaryReader, BinaryWriter } from "../../../binary";
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
    message.accounts = object.accounts?.map((e) => AccountI_FromAmino(e)) || [];
    if (object.pagination !== void 0 && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.accounts) {
      obj.accounts = message.accounts.map((e) => e ? AccountI_ToAmino(e) : void 0);
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
          message.account = AccountI_InterfaceDecoder(reader);
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
      message.account = AccountI_FromAmino(object.account);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.account = message.account ? AccountI_ToAmino(message.account) : void 0;
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
          message.account = ModuleAccountI_InterfaceDecoder(reader);
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
      message.account = ModuleAccountI_FromAmino(object.account);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.account = message.account ? ModuleAccountI_ToAmino(message.account) : void 0;
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
const AccountI_InterfaceDecoder = (input) => {
  const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
  const data = Any.decode(reader, reader.uint32());
  switch (data.typeUrl) {
    default:
      return data;
  }
};
const AccountI_FromAmino = (content) => {
  return Any.fromAmino(content);
};
const AccountI_ToAmino = (content) => {
  return Any.toAmino(content);
};
const ModuleAccountI_InterfaceDecoder = (input) => {
  const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
  const data = Any.decode(reader, reader.uint32());
  switch (data.typeUrl) {
    default:
      return data;
  }
};
const ModuleAccountI_FromAmino = (content) => {
  return Any.fromAmino(content);
};
const ModuleAccountI_ToAmino = (content) => {
  return Any.toAmino(content);
};
export {
  AccountI_FromAmino,
  AccountI_InterfaceDecoder,
  AccountI_ToAmino,
  ModuleAccountI_FromAmino,
  ModuleAccountI_InterfaceDecoder,
  ModuleAccountI_ToAmino,
  QueryAccountRequest,
  QueryAccountResponse,
  QueryAccountsRequest,
  QueryAccountsResponse,
  QueryModuleAccountByNameRequest,
  QueryModuleAccountByNameResponse,
  QueryParamsRequest,
  QueryParamsResponse
};
