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
var query_exports = {};
__export(query_exports, {
  DenomOwner: () => DenomOwner,
  QueryAllBalancesRequest: () => QueryAllBalancesRequest,
  QueryAllBalancesResponse: () => QueryAllBalancesResponse,
  QueryBalanceRequest: () => QueryBalanceRequest,
  QueryBalanceResponse: () => QueryBalanceResponse,
  QueryDenomMetadataRequest: () => QueryDenomMetadataRequest,
  QueryDenomMetadataResponse: () => QueryDenomMetadataResponse,
  QueryDenomOwnersRequest: () => QueryDenomOwnersRequest,
  QueryDenomOwnersResponse: () => QueryDenomOwnersResponse,
  QueryDenomsMetadataRequest: () => QueryDenomsMetadataRequest,
  QueryDenomsMetadataResponse: () => QueryDenomsMetadataResponse,
  QueryParamsRequest: () => QueryParamsRequest,
  QueryParamsResponse: () => QueryParamsResponse,
  QuerySendEnabledRequest: () => QuerySendEnabledRequest,
  QuerySendEnabledResponse: () => QuerySendEnabledResponse,
  QuerySpendableBalanceByDenomRequest: () => QuerySpendableBalanceByDenomRequest,
  QuerySpendableBalanceByDenomResponse: () => QuerySpendableBalanceByDenomResponse,
  QuerySpendableBalancesRequest: () => QuerySpendableBalancesRequest,
  QuerySpendableBalancesResponse: () => QuerySpendableBalancesResponse,
  QuerySupplyOfRequest: () => QuerySupplyOfRequest,
  QuerySupplyOfResponse: () => QuerySupplyOfResponse,
  QueryTotalSupplyRequest: () => QueryTotalSupplyRequest,
  QueryTotalSupplyResponse: () => QueryTotalSupplyResponse
});
module.exports = __toCommonJS(query_exports);
var import_pagination = require("../../base/query/v1beta1/pagination");
var import_coin = require("../../base/v1beta1/coin");
var import_bank = require("./bank");
var import_binary = require("../../../binary");
function createBaseQueryBalanceRequest() {
  return {
    address: "",
    denom: ""
  };
}
const QueryBalanceRequest = {
  typeUrl: "/cosmos.bank.v1beta1.QueryBalanceRequest",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryBalanceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryBalanceRequest();
    message.address = object.address ?? "";
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryBalanceRequest();
    if (object.address !== void 0 && object.address !== null) {
      message.address = object.address;
    }
    if (object.denom !== void 0 && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.address = message.address === "" ? void 0 : message.address;
    obj.denom = message.denom === "" ? void 0 : message.denom;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryBalanceRequest.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryBalanceRequest",
      value: QueryBalanceRequest.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryBalanceRequest.decode(message.value);
  },
  toProto(message) {
    return QueryBalanceRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.bank.v1beta1.QueryBalanceRequest",
      value: QueryBalanceRequest.encode(message).finish()
    };
  }
};
function createBaseQueryBalanceResponse() {
  return {
    balance: void 0
  };
}
const QueryBalanceResponse = {
  typeUrl: "/cosmos.bank.v1beta1.QueryBalanceResponse",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.balance !== void 0) {
      import_coin.Coin.encode(message.balance, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryBalanceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.balance = import_coin.Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryBalanceResponse();
    message.balance = object.balance !== void 0 && object.balance !== null ? import_coin.Coin.fromPartial(object.balance) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryBalanceResponse();
    if (object.balance !== void 0 && object.balance !== null) {
      message.balance = import_coin.Coin.fromAmino(object.balance);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.balance = message.balance ? import_coin.Coin.toAmino(message.balance) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryBalanceResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryBalanceResponse",
      value: QueryBalanceResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryBalanceResponse.decode(message.value);
  },
  toProto(message) {
    return QueryBalanceResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.bank.v1beta1.QueryBalanceResponse",
      value: QueryBalanceResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllBalancesRequest() {
  return {
    address: "",
    pagination: void 0
  };
}
const QueryAllBalancesRequest = {
  typeUrl: "/cosmos.bank.v1beta1.QueryAllBalancesRequest",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.pagination !== void 0) {
      import_pagination.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryAllBalancesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.pagination = import_pagination.PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryAllBalancesRequest();
    message.address = object.address ?? "";
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? import_pagination.PageRequest.fromPartial(object.pagination) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryAllBalancesRequest();
    if (object.address !== void 0 && object.address !== null) {
      message.address = object.address;
    }
    if (object.pagination !== void 0 && object.pagination !== null) {
      message.pagination = import_pagination.PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.address = message.address === "" ? void 0 : message.address;
    obj.pagination = message.pagination ? import_pagination.PageRequest.toAmino(message.pagination) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryAllBalancesRequest.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryAllBalancesRequest",
      value: QueryAllBalancesRequest.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryAllBalancesRequest.decode(message.value);
  },
  toProto(message) {
    return QueryAllBalancesRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.bank.v1beta1.QueryAllBalancesRequest",
      value: QueryAllBalancesRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllBalancesResponse() {
  return {
    balances: [],
    pagination: void 0
  };
}
const QueryAllBalancesResponse = {
  typeUrl: "/cosmos.bank.v1beta1.QueryAllBalancesResponse",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    for (const v of message.balances) {
      import_coin.Coin.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== void 0) {
      import_pagination.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryAllBalancesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.balances.push(import_coin.Coin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = import_pagination.PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryAllBalancesResponse();
    message.balances = object.balances?.map((e) => import_coin.Coin.fromPartial(e)) || [];
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? import_pagination.PageResponse.fromPartial(object.pagination) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryAllBalancesResponse();
    message.balances = object.balances?.map((e) => import_coin.Coin.fromAmino(e)) || [];
    if (object.pagination !== void 0 && object.pagination !== null) {
      message.pagination = import_pagination.PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.balances) {
      obj.balances = message.balances.map((e) => e ? import_coin.Coin.toAmino(e) : void 0);
    } else {
      obj.balances = message.balances;
    }
    obj.pagination = message.pagination ? import_pagination.PageResponse.toAmino(message.pagination) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryAllBalancesResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryAllBalancesResponse",
      value: QueryAllBalancesResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryAllBalancesResponse.decode(message.value);
  },
  toProto(message) {
    return QueryAllBalancesResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.bank.v1beta1.QueryAllBalancesResponse",
      value: QueryAllBalancesResponse.encode(message).finish()
    };
  }
};
function createBaseQuerySpendableBalancesRequest() {
  return {
    address: "",
    pagination: void 0
  };
}
const QuerySpendableBalancesRequest = {
  typeUrl: "/cosmos.bank.v1beta1.QuerySpendableBalancesRequest",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.pagination !== void 0) {
      import_pagination.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQuerySpendableBalancesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.pagination = import_pagination.PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQuerySpendableBalancesRequest();
    message.address = object.address ?? "";
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? import_pagination.PageRequest.fromPartial(object.pagination) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQuerySpendableBalancesRequest();
    if (object.address !== void 0 && object.address !== null) {
      message.address = object.address;
    }
    if (object.pagination !== void 0 && object.pagination !== null) {
      message.pagination = import_pagination.PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.address = message.address === "" ? void 0 : message.address;
    obj.pagination = message.pagination ? import_pagination.PageRequest.toAmino(message.pagination) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return QuerySpendableBalancesRequest.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QuerySpendableBalancesRequest",
      value: QuerySpendableBalancesRequest.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QuerySpendableBalancesRequest.decode(message.value);
  },
  toProto(message) {
    return QuerySpendableBalancesRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.bank.v1beta1.QuerySpendableBalancesRequest",
      value: QuerySpendableBalancesRequest.encode(message).finish()
    };
  }
};
function createBaseQuerySpendableBalancesResponse() {
  return {
    balances: [],
    pagination: void 0
  };
}
const QuerySpendableBalancesResponse = {
  typeUrl: "/cosmos.bank.v1beta1.QuerySpendableBalancesResponse",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    for (const v of message.balances) {
      import_coin.Coin.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== void 0) {
      import_pagination.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQuerySpendableBalancesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.balances.push(import_coin.Coin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = import_pagination.PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQuerySpendableBalancesResponse();
    message.balances = object.balances?.map((e) => import_coin.Coin.fromPartial(e)) || [];
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? import_pagination.PageResponse.fromPartial(object.pagination) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQuerySpendableBalancesResponse();
    message.balances = object.balances?.map((e) => import_coin.Coin.fromAmino(e)) || [];
    if (object.pagination !== void 0 && object.pagination !== null) {
      message.pagination = import_pagination.PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.balances) {
      obj.balances = message.balances.map((e) => e ? import_coin.Coin.toAmino(e) : void 0);
    } else {
      obj.balances = message.balances;
    }
    obj.pagination = message.pagination ? import_pagination.PageResponse.toAmino(message.pagination) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return QuerySpendableBalancesResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QuerySpendableBalancesResponse",
      value: QuerySpendableBalancesResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QuerySpendableBalancesResponse.decode(message.value);
  },
  toProto(message) {
    return QuerySpendableBalancesResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.bank.v1beta1.QuerySpendableBalancesResponse",
      value: QuerySpendableBalancesResponse.encode(message).finish()
    };
  }
};
function createBaseQuerySpendableBalanceByDenomRequest() {
  return {
    address: "",
    denom: ""
  };
}
const QuerySpendableBalanceByDenomRequest = {
  typeUrl: "/cosmos.bank.v1beta1.QuerySpendableBalanceByDenomRequest",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQuerySpendableBalanceByDenomRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQuerySpendableBalanceByDenomRequest();
    message.address = object.address ?? "";
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseQuerySpendableBalanceByDenomRequest();
    if (object.address !== void 0 && object.address !== null) {
      message.address = object.address;
    }
    if (object.denom !== void 0 && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.address = message.address === "" ? void 0 : message.address;
    obj.denom = message.denom === "" ? void 0 : message.denom;
    return obj;
  },
  fromAminoMsg(object) {
    return QuerySpendableBalanceByDenomRequest.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QuerySpendableBalanceByDenomRequest",
      value: QuerySpendableBalanceByDenomRequest.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QuerySpendableBalanceByDenomRequest.decode(message.value);
  },
  toProto(message) {
    return QuerySpendableBalanceByDenomRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.bank.v1beta1.QuerySpendableBalanceByDenomRequest",
      value: QuerySpendableBalanceByDenomRequest.encode(message).finish()
    };
  }
};
function createBaseQuerySpendableBalanceByDenomResponse() {
  return {
    balance: void 0
  };
}
const QuerySpendableBalanceByDenomResponse = {
  typeUrl: "/cosmos.bank.v1beta1.QuerySpendableBalanceByDenomResponse",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.balance !== void 0) {
      import_coin.Coin.encode(message.balance, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQuerySpendableBalanceByDenomResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.balance = import_coin.Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQuerySpendableBalanceByDenomResponse();
    message.balance = object.balance !== void 0 && object.balance !== null ? import_coin.Coin.fromPartial(object.balance) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQuerySpendableBalanceByDenomResponse();
    if (object.balance !== void 0 && object.balance !== null) {
      message.balance = import_coin.Coin.fromAmino(object.balance);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.balance = message.balance ? import_coin.Coin.toAmino(message.balance) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return QuerySpendableBalanceByDenomResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QuerySpendableBalanceByDenomResponse",
      value: QuerySpendableBalanceByDenomResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QuerySpendableBalanceByDenomResponse.decode(message.value);
  },
  toProto(message) {
    return QuerySpendableBalanceByDenomResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.bank.v1beta1.QuerySpendableBalanceByDenomResponse",
      value: QuerySpendableBalanceByDenomResponse.encode(message).finish()
    };
  }
};
function createBaseQueryTotalSupplyRequest() {
  return {
    pagination: void 0
  };
}
const QueryTotalSupplyRequest = {
  typeUrl: "/cosmos.bank.v1beta1.QueryTotalSupplyRequest",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.pagination !== void 0) {
      import_pagination.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalSupplyRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = import_pagination.PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryTotalSupplyRequest();
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? import_pagination.PageRequest.fromPartial(object.pagination) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryTotalSupplyRequest();
    if (object.pagination !== void 0 && object.pagination !== null) {
      message.pagination = import_pagination.PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.pagination = message.pagination ? import_pagination.PageRequest.toAmino(message.pagination) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryTotalSupplyRequest.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryTotalSupplyRequest",
      value: QueryTotalSupplyRequest.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryTotalSupplyRequest.decode(message.value);
  },
  toProto(message) {
    return QueryTotalSupplyRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.bank.v1beta1.QueryTotalSupplyRequest",
      value: QueryTotalSupplyRequest.encode(message).finish()
    };
  }
};
function createBaseQueryTotalSupplyResponse() {
  return {
    supply: [],
    pagination: void 0
  };
}
const QueryTotalSupplyResponse = {
  typeUrl: "/cosmos.bank.v1beta1.QueryTotalSupplyResponse",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    for (const v of message.supply) {
      import_coin.Coin.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== void 0) {
      import_pagination.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalSupplyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.supply.push(import_coin.Coin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = import_pagination.PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryTotalSupplyResponse();
    message.supply = object.supply?.map((e) => import_coin.Coin.fromPartial(e)) || [];
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? import_pagination.PageResponse.fromPartial(object.pagination) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryTotalSupplyResponse();
    message.supply = object.supply?.map((e) => import_coin.Coin.fromAmino(e)) || [];
    if (object.pagination !== void 0 && object.pagination !== null) {
      message.pagination = import_pagination.PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.supply) {
      obj.supply = message.supply.map((e) => e ? import_coin.Coin.toAmino(e) : void 0);
    } else {
      obj.supply = message.supply;
    }
    obj.pagination = message.pagination ? import_pagination.PageResponse.toAmino(message.pagination) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryTotalSupplyResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryTotalSupplyResponse",
      value: QueryTotalSupplyResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryTotalSupplyResponse.decode(message.value);
  },
  toProto(message) {
    return QueryTotalSupplyResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.bank.v1beta1.QueryTotalSupplyResponse",
      value: QueryTotalSupplyResponse.encode(message).finish()
    };
  }
};
function createBaseQuerySupplyOfRequest() {
  return {
    denom: ""
  };
}
const QuerySupplyOfRequest = {
  typeUrl: "/cosmos.bank.v1beta1.QuerySupplyOfRequest",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQuerySupplyOfRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQuerySupplyOfRequest();
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseQuerySupplyOfRequest();
    if (object.denom !== void 0 && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.denom = message.denom === "" ? void 0 : message.denom;
    return obj;
  },
  fromAminoMsg(object) {
    return QuerySupplyOfRequest.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QuerySupplyOfRequest",
      value: QuerySupplyOfRequest.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QuerySupplyOfRequest.decode(message.value);
  },
  toProto(message) {
    return QuerySupplyOfRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.bank.v1beta1.QuerySupplyOfRequest",
      value: QuerySupplyOfRequest.encode(message).finish()
    };
  }
};
function createBaseQuerySupplyOfResponse() {
  return {
    amount: import_coin.Coin.fromPartial({})
  };
}
const QuerySupplyOfResponse = {
  typeUrl: "/cosmos.bank.v1beta1.QuerySupplyOfResponse",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.amount !== void 0) {
      import_coin.Coin.encode(message.amount, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQuerySupplyOfResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount = import_coin.Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQuerySupplyOfResponse();
    message.amount = object.amount !== void 0 && object.amount !== null ? import_coin.Coin.fromPartial(object.amount) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQuerySupplyOfResponse();
    if (object.amount !== void 0 && object.amount !== null) {
      message.amount = import_coin.Coin.fromAmino(object.amount);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.amount = message.amount ? import_coin.Coin.toAmino(message.amount) : import_coin.Coin.toAmino(import_coin.Coin.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object) {
    return QuerySupplyOfResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QuerySupplyOfResponse",
      value: QuerySupplyOfResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QuerySupplyOfResponse.decode(message.value);
  },
  toProto(message) {
    return QuerySupplyOfResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.bank.v1beta1.QuerySupplyOfResponse",
      value: QuerySupplyOfResponse.encode(message).finish()
    };
  }
};
function createBaseQueryParamsRequest() {
  return {};
}
const QueryParamsRequest = {
  typeUrl: "/cosmos.bank.v1beta1.QueryParamsRequest",
  encode(_, writer = import_binary.BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
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
      typeUrl: "/cosmos.bank.v1beta1.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryParamsResponse() {
  return {
    params: import_bank.Params.fromPartial({})
  };
}
const QueryParamsResponse = {
  typeUrl: "/cosmos.bank.v1beta1.QueryParamsResponse",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.params !== void 0) {
      import_bank.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = import_bank.Params.decode(reader, reader.uint32());
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
    message.params = object.params !== void 0 && object.params !== null ? import_bank.Params.fromPartial(object.params) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryParamsResponse();
    if (object.params !== void 0 && object.params !== null) {
      message.params = import_bank.Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.params = message.params ? import_bank.Params.toAmino(message.params) : import_bank.Params.toAmino(import_bank.Params.fromPartial({}));
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
      typeUrl: "/cosmos.bank.v1beta1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryDenomsMetadataRequest() {
  return {
    pagination: void 0
  };
}
const QueryDenomsMetadataRequest = {
  typeUrl: "/cosmos.bank.v1beta1.QueryDenomsMetadataRequest",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.pagination !== void 0) {
      import_pagination.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomsMetadataRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = import_pagination.PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryDenomsMetadataRequest();
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? import_pagination.PageRequest.fromPartial(object.pagination) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryDenomsMetadataRequest();
    if (object.pagination !== void 0 && object.pagination !== null) {
      message.pagination = import_pagination.PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.pagination = message.pagination ? import_pagination.PageRequest.toAmino(message.pagination) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryDenomsMetadataRequest.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryDenomsMetadataRequest",
      value: QueryDenomsMetadataRequest.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryDenomsMetadataRequest.decode(message.value);
  },
  toProto(message) {
    return QueryDenomsMetadataRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.bank.v1beta1.QueryDenomsMetadataRequest",
      value: QueryDenomsMetadataRequest.encode(message).finish()
    };
  }
};
function createBaseQueryDenomsMetadataResponse() {
  return {
    metadatas: [],
    pagination: void 0
  };
}
const QueryDenomsMetadataResponse = {
  typeUrl: "/cosmos.bank.v1beta1.QueryDenomsMetadataResponse",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    for (const v of message.metadatas) {
      import_bank.Metadata.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== void 0) {
      import_pagination.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomsMetadataResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.metadatas.push(import_bank.Metadata.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = import_pagination.PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryDenomsMetadataResponse();
    message.metadatas = object.metadatas?.map((e) => import_bank.Metadata.fromPartial(e)) || [];
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? import_pagination.PageResponse.fromPartial(object.pagination) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryDenomsMetadataResponse();
    message.metadatas = object.metadatas?.map((e) => import_bank.Metadata.fromAmino(e)) || [];
    if (object.pagination !== void 0 && object.pagination !== null) {
      message.pagination = import_pagination.PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.metadatas) {
      obj.metadatas = message.metadatas.map((e) => e ? import_bank.Metadata.toAmino(e) : void 0);
    } else {
      obj.metadatas = message.metadatas;
    }
    obj.pagination = message.pagination ? import_pagination.PageResponse.toAmino(message.pagination) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryDenomsMetadataResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryDenomsMetadataResponse",
      value: QueryDenomsMetadataResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryDenomsMetadataResponse.decode(message.value);
  },
  toProto(message) {
    return QueryDenomsMetadataResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.bank.v1beta1.QueryDenomsMetadataResponse",
      value: QueryDenomsMetadataResponse.encode(message).finish()
    };
  }
};
function createBaseQueryDenomMetadataRequest() {
  return {
    denom: ""
  };
}
const QueryDenomMetadataRequest = {
  typeUrl: "/cosmos.bank.v1beta1.QueryDenomMetadataRequest",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomMetadataRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryDenomMetadataRequest();
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryDenomMetadataRequest();
    if (object.denom !== void 0 && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.denom = message.denom === "" ? void 0 : message.denom;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryDenomMetadataRequest.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryDenomMetadataRequest",
      value: QueryDenomMetadataRequest.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryDenomMetadataRequest.decode(message.value);
  },
  toProto(message) {
    return QueryDenomMetadataRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.bank.v1beta1.QueryDenomMetadataRequest",
      value: QueryDenomMetadataRequest.encode(message).finish()
    };
  }
};
function createBaseQueryDenomMetadataResponse() {
  return {
    metadata: import_bank.Metadata.fromPartial({})
  };
}
const QueryDenomMetadataResponse = {
  typeUrl: "/cosmos.bank.v1beta1.QueryDenomMetadataResponse",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.metadata !== void 0) {
      import_bank.Metadata.encode(message.metadata, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomMetadataResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.metadata = import_bank.Metadata.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryDenomMetadataResponse();
    message.metadata = object.metadata !== void 0 && object.metadata !== null ? import_bank.Metadata.fromPartial(object.metadata) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryDenomMetadataResponse();
    if (object.metadata !== void 0 && object.metadata !== null) {
      message.metadata = import_bank.Metadata.fromAmino(object.metadata);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.metadata = message.metadata ? import_bank.Metadata.toAmino(message.metadata) : import_bank.Metadata.toAmino(import_bank.Metadata.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object) {
    return QueryDenomMetadataResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryDenomMetadataResponse",
      value: QueryDenomMetadataResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryDenomMetadataResponse.decode(message.value);
  },
  toProto(message) {
    return QueryDenomMetadataResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.bank.v1beta1.QueryDenomMetadataResponse",
      value: QueryDenomMetadataResponse.encode(message).finish()
    };
  }
};
function createBaseQueryDenomOwnersRequest() {
  return {
    denom: "",
    pagination: void 0
  };
}
const QueryDenomOwnersRequest = {
  typeUrl: "/cosmos.bank.v1beta1.QueryDenomOwnersRequest",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.pagination !== void 0) {
      import_pagination.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomOwnersRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.pagination = import_pagination.PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryDenomOwnersRequest();
    message.denom = object.denom ?? "";
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? import_pagination.PageRequest.fromPartial(object.pagination) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryDenomOwnersRequest();
    if (object.denom !== void 0 && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.pagination !== void 0 && object.pagination !== null) {
      message.pagination = import_pagination.PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.denom = message.denom === "" ? void 0 : message.denom;
    obj.pagination = message.pagination ? import_pagination.PageRequest.toAmino(message.pagination) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryDenomOwnersRequest.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryDenomOwnersRequest",
      value: QueryDenomOwnersRequest.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryDenomOwnersRequest.decode(message.value);
  },
  toProto(message) {
    return QueryDenomOwnersRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.bank.v1beta1.QueryDenomOwnersRequest",
      value: QueryDenomOwnersRequest.encode(message).finish()
    };
  }
};
function createBaseDenomOwner() {
  return {
    address: "",
    balance: import_coin.Coin.fromPartial({})
  };
}
const DenomOwner = {
  typeUrl: "/cosmos.bank.v1beta1.DenomOwner",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.balance !== void 0) {
      import_coin.Coin.encode(message.balance, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseDenomOwner();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.balance = import_coin.Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseDenomOwner();
    message.address = object.address ?? "";
    message.balance = object.balance !== void 0 && object.balance !== null ? import_coin.Coin.fromPartial(object.balance) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseDenomOwner();
    if (object.address !== void 0 && object.address !== null) {
      message.address = object.address;
    }
    if (object.balance !== void 0 && object.balance !== null) {
      message.balance = import_coin.Coin.fromAmino(object.balance);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.address = message.address === "" ? void 0 : message.address;
    obj.balance = message.balance ? import_coin.Coin.toAmino(message.balance) : import_coin.Coin.toAmino(import_coin.Coin.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object) {
    return DenomOwner.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/DenomOwner",
      value: DenomOwner.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return DenomOwner.decode(message.value);
  },
  toProto(message) {
    return DenomOwner.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.bank.v1beta1.DenomOwner",
      value: DenomOwner.encode(message).finish()
    };
  }
};
function createBaseQueryDenomOwnersResponse() {
  return {
    denomOwners: [],
    pagination: void 0
  };
}
const QueryDenomOwnersResponse = {
  typeUrl: "/cosmos.bank.v1beta1.QueryDenomOwnersResponse",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    for (const v of message.denomOwners) {
      DenomOwner.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== void 0) {
      import_pagination.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomOwnersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denomOwners.push(DenomOwner.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = import_pagination.PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryDenomOwnersResponse();
    message.denomOwners = object.denomOwners?.map((e) => DenomOwner.fromPartial(e)) || [];
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? import_pagination.PageResponse.fromPartial(object.pagination) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryDenomOwnersResponse();
    message.denomOwners = object.denom_owners?.map((e) => DenomOwner.fromAmino(e)) || [];
    if (object.pagination !== void 0 && object.pagination !== null) {
      message.pagination = import_pagination.PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.denomOwners) {
      obj.denom_owners = message.denomOwners.map((e) => e ? DenomOwner.toAmino(e) : void 0);
    } else {
      obj.denom_owners = message.denomOwners;
    }
    obj.pagination = message.pagination ? import_pagination.PageResponse.toAmino(message.pagination) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryDenomOwnersResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryDenomOwnersResponse",
      value: QueryDenomOwnersResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryDenomOwnersResponse.decode(message.value);
  },
  toProto(message) {
    return QueryDenomOwnersResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.bank.v1beta1.QueryDenomOwnersResponse",
      value: QueryDenomOwnersResponse.encode(message).finish()
    };
  }
};
function createBaseQuerySendEnabledRequest() {
  return {
    denoms: [],
    pagination: void 0
  };
}
const QuerySendEnabledRequest = {
  typeUrl: "/cosmos.bank.v1beta1.QuerySendEnabledRequest",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    for (const v of message.denoms) {
      writer.uint32(10).string(v);
    }
    if (message.pagination !== void 0) {
      import_pagination.PageRequest.encode(message.pagination, writer.uint32(794).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQuerySendEnabledRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denoms.push(reader.string());
          break;
        case 99:
          message.pagination = import_pagination.PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQuerySendEnabledRequest();
    message.denoms = object.denoms?.map((e) => e) || [];
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? import_pagination.PageRequest.fromPartial(object.pagination) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQuerySendEnabledRequest();
    message.denoms = object.denoms?.map((e) => e) || [];
    if (object.pagination !== void 0 && object.pagination !== null) {
      message.pagination = import_pagination.PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.denoms) {
      obj.denoms = message.denoms.map((e) => e);
    } else {
      obj.denoms = message.denoms;
    }
    obj.pagination = message.pagination ? import_pagination.PageRequest.toAmino(message.pagination) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return QuerySendEnabledRequest.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QuerySendEnabledRequest",
      value: QuerySendEnabledRequest.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QuerySendEnabledRequest.decode(message.value);
  },
  toProto(message) {
    return QuerySendEnabledRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.bank.v1beta1.QuerySendEnabledRequest",
      value: QuerySendEnabledRequest.encode(message).finish()
    };
  }
};
function createBaseQuerySendEnabledResponse() {
  return {
    sendEnabled: [],
    pagination: void 0
  };
}
const QuerySendEnabledResponse = {
  typeUrl: "/cosmos.bank.v1beta1.QuerySendEnabledResponse",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    for (const v of message.sendEnabled) {
      import_bank.SendEnabled.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== void 0) {
      import_pagination.PageResponse.encode(message.pagination, writer.uint32(794).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQuerySendEnabledResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sendEnabled.push(import_bank.SendEnabled.decode(reader, reader.uint32()));
          break;
        case 99:
          message.pagination = import_pagination.PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQuerySendEnabledResponse();
    message.sendEnabled = object.sendEnabled?.map((e) => import_bank.SendEnabled.fromPartial(e)) || [];
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? import_pagination.PageResponse.fromPartial(object.pagination) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQuerySendEnabledResponse();
    message.sendEnabled = object.send_enabled?.map((e) => import_bank.SendEnabled.fromAmino(e)) || [];
    if (object.pagination !== void 0 && object.pagination !== null) {
      message.pagination = import_pagination.PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.sendEnabled) {
      obj.send_enabled = message.sendEnabled.map((e) => e ? import_bank.SendEnabled.toAmino(e) : void 0);
    } else {
      obj.send_enabled = message.sendEnabled;
    }
    obj.pagination = message.pagination ? import_pagination.PageResponse.toAmino(message.pagination) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return QuerySendEnabledResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QuerySendEnabledResponse",
      value: QuerySendEnabledResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QuerySendEnabledResponse.decode(message.value);
  },
  toProto(message) {
    return QuerySendEnabledResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.bank.v1beta1.QuerySendEnabledResponse",
      value: QuerySendEnabledResponse.encode(message).finish()
    };
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  DenomOwner,
  QueryAllBalancesRequest,
  QueryAllBalancesResponse,
  QueryBalanceRequest,
  QueryBalanceResponse,
  QueryDenomMetadataRequest,
  QueryDenomMetadataResponse,
  QueryDenomOwnersRequest,
  QueryDenomOwnersResponse,
  QueryDenomsMetadataRequest,
  QueryDenomsMetadataResponse,
  QueryParamsRequest,
  QueryParamsResponse,
  QuerySendEnabledRequest,
  QuerySendEnabledResponse,
  QuerySpendableBalanceByDenomRequest,
  QuerySpendableBalanceByDenomResponse,
  QuerySpendableBalancesRequest,
  QuerySpendableBalancesResponse,
  QuerySupplyOfRequest,
  QuerySupplyOfResponse,
  QueryTotalSupplyRequest,
  QueryTotalSupplyResponse
});
