import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination";
import { Coin } from "../../base/v1beta1/coin";
import { Params, Metadata, SendEnabled } from "./bank";
import { BinaryReader, BinaryWriter } from "../../../binary";
function createBaseQueryBalanceRequest() {
  return {
    address: "",
    denom: ""
  };
}
const QueryBalanceRequest = {
  typeUrl: "/cosmos.bank.v1beta1.QueryBalanceRequest",
  encode(message, writer = BinaryWriter.create()) {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  encode(message, writer = BinaryWriter.create()) {
    if (message.balance !== void 0) {
      Coin.encode(message.balance, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryBalanceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.balance = Coin.decode(reader, reader.uint32());
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
    message.balance = object.balance !== void 0 && object.balance !== null ? Coin.fromPartial(object.balance) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryBalanceResponse();
    if (object.balance !== void 0 && object.balance !== null) {
      message.balance = Coin.fromAmino(object.balance);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.balance = message.balance ? Coin.toAmino(message.balance) : void 0;
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
    pagination: void 0,
    resolveDenom: false
  };
}
const QueryAllBalancesRequest = {
  typeUrl: "/cosmos.bank.v1beta1.QueryAllBalancesRequest",
  encode(message, writer = BinaryWriter.create()) {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.pagination !== void 0) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    if (message.resolveDenom === true) {
      writer.uint32(24).bool(message.resolveDenom);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryAllBalancesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        case 3:
          message.resolveDenom = reader.bool();
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
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : void 0;
    message.resolveDenom = object.resolveDenom ?? false;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryAllBalancesRequest();
    if (object.address !== void 0 && object.address !== null) {
      message.address = object.address;
    }
    if (object.pagination !== void 0 && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    if (object.resolve_denom !== void 0 && object.resolve_denom !== null) {
      message.resolveDenom = object.resolve_denom;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.address = message.address === "" ? void 0 : message.address;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : void 0;
    obj.resolve_denom = message.resolveDenom === false ? void 0 : message.resolveDenom;
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
  encode(message, writer = BinaryWriter.create()) {
    for (const v of message.balances) {
      Coin.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== void 0) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryAllBalancesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.balances.push(Coin.decode(reader, reader.uint32()));
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
    const message = createBaseQueryAllBalancesResponse();
    message.balances = object.balances?.map((e) => Coin.fromPartial(e)) || [];
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryAllBalancesResponse();
    message.balances = object.balances?.map((e) => Coin.fromAmino(e)) || [];
    if (object.pagination !== void 0 && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.balances) {
      obj.balances = message.balances.map((e) => e ? Coin.toAmino(e) : void 0);
    } else {
      obj.balances = message.balances;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : void 0;
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
  encode(message, writer = BinaryWriter.create()) {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.pagination !== void 0) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQuerySpendableBalancesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
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
    const message = createBaseQuerySpendableBalancesRequest();
    message.address = object.address ?? "";
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQuerySpendableBalancesRequest();
    if (object.address !== void 0 && object.address !== null) {
      message.address = object.address;
    }
    if (object.pagination !== void 0 && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.address = message.address === "" ? void 0 : message.address;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : void 0;
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
  encode(message, writer = BinaryWriter.create()) {
    for (const v of message.balances) {
      Coin.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== void 0) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQuerySpendableBalancesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.balances.push(Coin.decode(reader, reader.uint32()));
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
    const message = createBaseQuerySpendableBalancesResponse();
    message.balances = object.balances?.map((e) => Coin.fromPartial(e)) || [];
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQuerySpendableBalancesResponse();
    message.balances = object.balances?.map((e) => Coin.fromAmino(e)) || [];
    if (object.pagination !== void 0 && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.balances) {
      obj.balances = message.balances.map((e) => e ? Coin.toAmino(e) : void 0);
    } else {
      obj.balances = message.balances;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : void 0;
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
  encode(message, writer = BinaryWriter.create()) {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  encode(message, writer = BinaryWriter.create()) {
    if (message.balance !== void 0) {
      Coin.encode(message.balance, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQuerySpendableBalanceByDenomResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.balance = Coin.decode(reader, reader.uint32());
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
    message.balance = object.balance !== void 0 && object.balance !== null ? Coin.fromPartial(object.balance) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQuerySpendableBalanceByDenomResponse();
    if (object.balance !== void 0 && object.balance !== null) {
      message.balance = Coin.fromAmino(object.balance);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.balance = message.balance ? Coin.toAmino(message.balance) : void 0;
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
  encode(message, writer = BinaryWriter.create()) {
    if (message.pagination !== void 0) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalSupplyRequest();
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
    const message = createBaseQueryTotalSupplyRequest();
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryTotalSupplyRequest();
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
  encode(message, writer = BinaryWriter.create()) {
    for (const v of message.supply) {
      Coin.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== void 0) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalSupplyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.supply.push(Coin.decode(reader, reader.uint32()));
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
    const message = createBaseQueryTotalSupplyResponse();
    message.supply = object.supply?.map((e) => Coin.fromPartial(e)) || [];
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryTotalSupplyResponse();
    message.supply = object.supply?.map((e) => Coin.fromAmino(e)) || [];
    if (object.pagination !== void 0 && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.supply) {
      obj.supply = message.supply.map((e) => e ? Coin.toAmino(e) : void 0);
    } else {
      obj.supply = message.supply;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : void 0;
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
  encode(message, writer = BinaryWriter.create()) {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
    amount: Coin.fromPartial({})
  };
}
const QuerySupplyOfResponse = {
  typeUrl: "/cosmos.bank.v1beta1.QuerySupplyOfResponse",
  encode(message, writer = BinaryWriter.create()) {
    if (message.amount !== void 0) {
      Coin.encode(message.amount, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQuerySupplyOfResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount = Coin.decode(reader, reader.uint32());
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
    message.amount = object.amount !== void 0 && object.amount !== null ? Coin.fromPartial(object.amount) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQuerySupplyOfResponse();
    if (object.amount !== void 0 && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.amount = message.amount ? Coin.toAmino(message.amount) : Coin.toAmino(Coin.fromPartial({}));
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
      typeUrl: "/cosmos.bank.v1beta1.QueryParamsRequest",
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
  typeUrl: "/cosmos.bank.v1beta1.QueryParamsResponse",
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
    obj.params = message.params ? Params.toAmino(message.params) : Params.toAmino(Params.fromPartial({}));
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
  encode(message, writer = BinaryWriter.create()) {
    if (message.pagination !== void 0) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomsMetadataRequest();
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
    const message = createBaseQueryDenomsMetadataRequest();
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryDenomsMetadataRequest();
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
  encode(message, writer = BinaryWriter.create()) {
    for (const v of message.metadatas) {
      Metadata.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== void 0) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomsMetadataResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.metadatas.push(Metadata.decode(reader, reader.uint32()));
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
    const message = createBaseQueryDenomsMetadataResponse();
    message.metadatas = object.metadatas?.map((e) => Metadata.fromPartial(e)) || [];
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryDenomsMetadataResponse();
    message.metadatas = object.metadatas?.map((e) => Metadata.fromAmino(e)) || [];
    if (object.pagination !== void 0 && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.metadatas) {
      obj.metadatas = message.metadatas.map((e) => e ? Metadata.toAmino(e) : void 0);
    } else {
      obj.metadatas = message.metadatas;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : void 0;
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
  encode(message, writer = BinaryWriter.create()) {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
    metadata: Metadata.fromPartial({})
  };
}
const QueryDenomMetadataResponse = {
  typeUrl: "/cosmos.bank.v1beta1.QueryDenomMetadataResponse",
  encode(message, writer = BinaryWriter.create()) {
    if (message.metadata !== void 0) {
      Metadata.encode(message.metadata, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomMetadataResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.metadata = Metadata.decode(reader, reader.uint32());
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
    message.metadata = object.metadata !== void 0 && object.metadata !== null ? Metadata.fromPartial(object.metadata) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryDenomMetadataResponse();
    if (object.metadata !== void 0 && object.metadata !== null) {
      message.metadata = Metadata.fromAmino(object.metadata);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.metadata = message.metadata ? Metadata.toAmino(message.metadata) : Metadata.toAmino(Metadata.fromPartial({}));
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
function createBaseQueryDenomMetadataByQueryStringRequest() {
  return {
    denom: ""
  };
}
const QueryDenomMetadataByQueryStringRequest = {
  typeUrl: "/cosmos.bank.v1beta1.QueryDenomMetadataByQueryStringRequest",
  encode(message, writer = BinaryWriter.create()) {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomMetadataByQueryStringRequest();
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
    const message = createBaseQueryDenomMetadataByQueryStringRequest();
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryDenomMetadataByQueryStringRequest();
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
    return QueryDenomMetadataByQueryStringRequest.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryDenomMetadataByQueryStringRequest",
      value: QueryDenomMetadataByQueryStringRequest.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryDenomMetadataByQueryStringRequest.decode(message.value);
  },
  toProto(message) {
    return QueryDenomMetadataByQueryStringRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.bank.v1beta1.QueryDenomMetadataByQueryStringRequest",
      value: QueryDenomMetadataByQueryStringRequest.encode(message).finish()
    };
  }
};
function createBaseQueryDenomMetadataByQueryStringResponse() {
  return {
    metadata: Metadata.fromPartial({})
  };
}
const QueryDenomMetadataByQueryStringResponse = {
  typeUrl: "/cosmos.bank.v1beta1.QueryDenomMetadataByQueryStringResponse",
  encode(message, writer = BinaryWriter.create()) {
    if (message.metadata !== void 0) {
      Metadata.encode(message.metadata, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomMetadataByQueryStringResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.metadata = Metadata.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryDenomMetadataByQueryStringResponse();
    message.metadata = object.metadata !== void 0 && object.metadata !== null ? Metadata.fromPartial(object.metadata) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryDenomMetadataByQueryStringResponse();
    if (object.metadata !== void 0 && object.metadata !== null) {
      message.metadata = Metadata.fromAmino(object.metadata);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.metadata = message.metadata ? Metadata.toAmino(message.metadata) : Metadata.toAmino(Metadata.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object) {
    return QueryDenomMetadataByQueryStringResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryDenomMetadataByQueryStringResponse",
      value: QueryDenomMetadataByQueryStringResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryDenomMetadataByQueryStringResponse.decode(message.value);
  },
  toProto(message) {
    return QueryDenomMetadataByQueryStringResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.bank.v1beta1.QueryDenomMetadataByQueryStringResponse",
      value: QueryDenomMetadataByQueryStringResponse.encode(message).finish()
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
  encode(message, writer = BinaryWriter.create()) {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.pagination !== void 0) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomOwnersRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
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
    const message = createBaseQueryDenomOwnersRequest();
    message.denom = object.denom ?? "";
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryDenomOwnersRequest();
    if (object.denom !== void 0 && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.pagination !== void 0 && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.denom = message.denom === "" ? void 0 : message.denom;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : void 0;
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
    balance: Coin.fromPartial({})
  };
}
const DenomOwner = {
  typeUrl: "/cosmos.bank.v1beta1.DenomOwner",
  encode(message, writer = BinaryWriter.create()) {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.balance !== void 0) {
      Coin.encode(message.balance, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseDenomOwner();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.balance = Coin.decode(reader, reader.uint32());
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
    message.balance = object.balance !== void 0 && object.balance !== null ? Coin.fromPartial(object.balance) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseDenomOwner();
    if (object.address !== void 0 && object.address !== null) {
      message.address = object.address;
    }
    if (object.balance !== void 0 && object.balance !== null) {
      message.balance = Coin.fromAmino(object.balance);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.address = message.address === "" ? void 0 : message.address;
    obj.balance = message.balance ? Coin.toAmino(message.balance) : Coin.toAmino(Coin.fromPartial({}));
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
  encode(message, writer = BinaryWriter.create()) {
    for (const v of message.denomOwners) {
      DenomOwner.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== void 0) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomOwnersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denomOwners.push(DenomOwner.decode(reader, reader.uint32()));
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
    const message = createBaseQueryDenomOwnersResponse();
    message.denomOwners = object.denomOwners?.map((e) => DenomOwner.fromPartial(e)) || [];
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryDenomOwnersResponse();
    message.denomOwners = object.denom_owners?.map((e) => DenomOwner.fromAmino(e)) || [];
    if (object.pagination !== void 0 && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
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
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : void 0;
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
function createBaseQueryDenomOwnersByQueryRequest() {
  return {
    denom: "",
    pagination: void 0
  };
}
const QueryDenomOwnersByQueryRequest = {
  typeUrl: "/cosmos.bank.v1beta1.QueryDenomOwnersByQueryRequest",
  encode(message, writer = BinaryWriter.create()) {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.pagination !== void 0) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomOwnersByQueryRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
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
    const message = createBaseQueryDenomOwnersByQueryRequest();
    message.denom = object.denom ?? "";
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryDenomOwnersByQueryRequest();
    if (object.denom !== void 0 && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.pagination !== void 0 && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.denom = message.denom === "" ? void 0 : message.denom;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryDenomOwnersByQueryRequest.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryDenomOwnersByQueryRequest",
      value: QueryDenomOwnersByQueryRequest.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryDenomOwnersByQueryRequest.decode(message.value);
  },
  toProto(message) {
    return QueryDenomOwnersByQueryRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.bank.v1beta1.QueryDenomOwnersByQueryRequest",
      value: QueryDenomOwnersByQueryRequest.encode(message).finish()
    };
  }
};
function createBaseQueryDenomOwnersByQueryResponse() {
  return {
    denomOwners: [],
    pagination: void 0
  };
}
const QueryDenomOwnersByQueryResponse = {
  typeUrl: "/cosmos.bank.v1beta1.QueryDenomOwnersByQueryResponse",
  encode(message, writer = BinaryWriter.create()) {
    for (const v of message.denomOwners) {
      DenomOwner.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== void 0) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomOwnersByQueryResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denomOwners.push(DenomOwner.decode(reader, reader.uint32()));
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
    const message = createBaseQueryDenomOwnersByQueryResponse();
    message.denomOwners = object.denomOwners?.map((e) => DenomOwner.fromPartial(e)) || [];
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryDenomOwnersByQueryResponse();
    message.denomOwners = object.denom_owners?.map((e) => DenomOwner.fromAmino(e)) || [];
    if (object.pagination !== void 0 && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
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
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryDenomOwnersByQueryResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryDenomOwnersByQueryResponse",
      value: QueryDenomOwnersByQueryResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryDenomOwnersByQueryResponse.decode(message.value);
  },
  toProto(message) {
    return QueryDenomOwnersByQueryResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.bank.v1beta1.QueryDenomOwnersByQueryResponse",
      value: QueryDenomOwnersByQueryResponse.encode(message).finish()
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
  encode(message, writer = BinaryWriter.create()) {
    for (const v of message.denoms) {
      writer.uint32(10).string(v);
    }
    if (message.pagination !== void 0) {
      PageRequest.encode(message.pagination, writer.uint32(794).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQuerySendEnabledRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denoms.push(reader.string());
          break;
        case 99:
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
    const message = createBaseQuerySendEnabledRequest();
    message.denoms = object.denoms?.map((e) => e) || [];
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQuerySendEnabledRequest();
    message.denoms = object.denoms?.map((e) => e) || [];
    if (object.pagination !== void 0 && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
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
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : void 0;
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
  encode(message, writer = BinaryWriter.create()) {
    for (const v of message.sendEnabled) {
      SendEnabled.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== void 0) {
      PageResponse.encode(message.pagination, writer.uint32(794).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQuerySendEnabledResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sendEnabled.push(SendEnabled.decode(reader, reader.uint32()));
          break;
        case 99:
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
    const message = createBaseQuerySendEnabledResponse();
    message.sendEnabled = object.sendEnabled?.map((e) => SendEnabled.fromPartial(e)) || [];
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQuerySendEnabledResponse();
    message.sendEnabled = object.send_enabled?.map((e) => SendEnabled.fromAmino(e)) || [];
    if (object.pagination !== void 0 && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.sendEnabled) {
      obj.send_enabled = message.sendEnabled.map((e) => e ? SendEnabled.toAmino(e) : void 0);
    } else {
      obj.send_enabled = message.sendEnabled;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : void 0;
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
export {
  DenomOwner,
  QueryAllBalancesRequest,
  QueryAllBalancesResponse,
  QueryBalanceRequest,
  QueryBalanceResponse,
  QueryDenomMetadataByQueryStringRequest,
  QueryDenomMetadataByQueryStringResponse,
  QueryDenomMetadataRequest,
  QueryDenomMetadataResponse,
  QueryDenomOwnersByQueryRequest,
  QueryDenomOwnersByQueryResponse,
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
};
