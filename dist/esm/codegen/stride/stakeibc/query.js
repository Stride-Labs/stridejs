import { PageRequest, PageResponse } from "../../cosmos/base/query/v1beta1/pagination";
import { Params } from "./params";
import { Validator } from "./validator";
import { HostZone } from "./host_zone";
import { EpochTracker } from "./epoch_tracker";
import { AddressUnbonding } from "./address_unbonding";
import { TradeRoute } from "./trade_route";
import { BinaryReader, BinaryWriter } from "../../binary";
function createBaseQueryInterchainAccountFromAddressRequest() {
  return {
    owner: "",
    connectionId: ""
  };
}
const QueryInterchainAccountFromAddressRequest = {
  typeUrl: "/stride.stakeibc.QueryInterchainAccountFromAddressRequest",
  encode(message, writer = BinaryWriter.create()) {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.connectionId !== "") {
      writer.uint32(18).string(message.connectionId);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryInterchainAccountFromAddressRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
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
    const message = createBaseQueryInterchainAccountFromAddressRequest();
    message.owner = object.owner ?? "";
    message.connectionId = object.connectionId ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryInterchainAccountFromAddressRequest();
    if (object.owner !== void 0 && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.connection_id !== void 0 && object.connection_id !== null) {
      message.connectionId = object.connection_id;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.owner = message.owner === "" ? void 0 : message.owner;
    obj.connection_id = message.connectionId === "" ? void 0 : message.connectionId;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryInterchainAccountFromAddressRequest.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryInterchainAccountFromAddressRequest.decode(message.value);
  },
  toProto(message) {
    return QueryInterchainAccountFromAddressRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.stakeibc.QueryInterchainAccountFromAddressRequest",
      value: QueryInterchainAccountFromAddressRequest.encode(message).finish()
    };
  }
};
function createBaseQueryInterchainAccountFromAddressResponse() {
  return {
    interchainAccountAddress: ""
  };
}
const QueryInterchainAccountFromAddressResponse = {
  typeUrl: "/stride.stakeibc.QueryInterchainAccountFromAddressResponse",
  encode(message, writer = BinaryWriter.create()) {
    if (message.interchainAccountAddress !== "") {
      writer.uint32(10).string(message.interchainAccountAddress);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryInterchainAccountFromAddressResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.interchainAccountAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryInterchainAccountFromAddressResponse();
    message.interchainAccountAddress = object.interchainAccountAddress ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryInterchainAccountFromAddressResponse();
    if (object.interchain_account_address !== void 0 && object.interchain_account_address !== null) {
      message.interchainAccountAddress = object.interchain_account_address;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.interchain_account_address = message.interchainAccountAddress === "" ? void 0 : message.interchainAccountAddress;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryInterchainAccountFromAddressResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryInterchainAccountFromAddressResponse.decode(message.value);
  },
  toProto(message) {
    return QueryInterchainAccountFromAddressResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.stakeibc.QueryInterchainAccountFromAddressResponse",
      value: QueryInterchainAccountFromAddressResponse.encode(message).finish()
    };
  }
};
function createBaseQueryParamsRequest() {
  return {};
}
const QueryParamsRequest = {
  typeUrl: "/stride.stakeibc.QueryParamsRequest",
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
  fromProtoMsg(message) {
    return QueryParamsRequest.decode(message.value);
  },
  toProto(message) {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.stakeibc.QueryParamsRequest",
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
  typeUrl: "/stride.stakeibc.QueryParamsResponse",
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
  fromProtoMsg(message) {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message) {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.stakeibc.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetValidatorsRequest() {
  return {
    chainId: ""
  };
}
const QueryGetValidatorsRequest = {
  typeUrl: "/stride.stakeibc.QueryGetValidatorsRequest",
  encode(message, writer = BinaryWriter.create()) {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryGetValidatorsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chainId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryGetValidatorsRequest();
    message.chainId = object.chainId ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryGetValidatorsRequest();
    if (object.chain_id !== void 0 && object.chain_id !== null) {
      message.chainId = object.chain_id;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.chain_id = message.chainId === "" ? void 0 : message.chainId;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryGetValidatorsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryGetValidatorsRequest.decode(message.value);
  },
  toProto(message) {
    return QueryGetValidatorsRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.stakeibc.QueryGetValidatorsRequest",
      value: QueryGetValidatorsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetValidatorsResponse() {
  return {
    validators: []
  };
}
const QueryGetValidatorsResponse = {
  typeUrl: "/stride.stakeibc.QueryGetValidatorsResponse",
  encode(message, writer = BinaryWriter.create()) {
    for (const v of message.validators) {
      Validator.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryGetValidatorsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validators.push(Validator.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryGetValidatorsResponse();
    message.validators = object.validators?.map((e) => Validator.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryGetValidatorsResponse();
    message.validators = object.validators?.map((e) => Validator.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.validators) {
      obj.validators = message.validators.map((e) => e ? Validator.toAmino(e) : void 0);
    } else {
      obj.validators = message.validators;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return QueryGetValidatorsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryGetValidatorsResponse.decode(message.value);
  },
  toProto(message) {
    return QueryGetValidatorsResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.stakeibc.QueryGetValidatorsResponse",
      value: QueryGetValidatorsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetHostZoneRequest() {
  return {
    chainId: ""
  };
}
const QueryGetHostZoneRequest = {
  typeUrl: "/stride.stakeibc.QueryGetHostZoneRequest",
  encode(message, writer = BinaryWriter.create()) {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryGetHostZoneRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chainId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryGetHostZoneRequest();
    message.chainId = object.chainId ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryGetHostZoneRequest();
    if (object.chain_id !== void 0 && object.chain_id !== null) {
      message.chainId = object.chain_id;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.chain_id = message.chainId === "" ? void 0 : message.chainId;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryGetHostZoneRequest.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryGetHostZoneRequest.decode(message.value);
  },
  toProto(message) {
    return QueryGetHostZoneRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.stakeibc.QueryGetHostZoneRequest",
      value: QueryGetHostZoneRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetHostZoneResponse() {
  return {
    hostZone: HostZone.fromPartial({})
  };
}
const QueryGetHostZoneResponse = {
  typeUrl: "/stride.stakeibc.QueryGetHostZoneResponse",
  encode(message, writer = BinaryWriter.create()) {
    if (message.hostZone !== void 0) {
      HostZone.encode(message.hostZone, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryGetHostZoneResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hostZone = HostZone.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryGetHostZoneResponse();
    message.hostZone = object.hostZone !== void 0 && object.hostZone !== null ? HostZone.fromPartial(object.hostZone) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryGetHostZoneResponse();
    if (object.host_zone !== void 0 && object.host_zone !== null) {
      message.hostZone = HostZone.fromAmino(object.host_zone);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.host_zone = message.hostZone ? HostZone.toAmino(message.hostZone) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryGetHostZoneResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryGetHostZoneResponse.decode(message.value);
  },
  toProto(message) {
    return QueryGetHostZoneResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.stakeibc.QueryGetHostZoneResponse",
      value: QueryGetHostZoneResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllHostZoneRequest() {
  return {
    pagination: void 0
  };
}
const QueryAllHostZoneRequest = {
  typeUrl: "/stride.stakeibc.QueryAllHostZoneRequest",
  encode(message, writer = BinaryWriter.create()) {
    if (message.pagination !== void 0) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryAllHostZoneRequest();
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
    const message = createBaseQueryAllHostZoneRequest();
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryAllHostZoneRequest();
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
    return QueryAllHostZoneRequest.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryAllHostZoneRequest.decode(message.value);
  },
  toProto(message) {
    return QueryAllHostZoneRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.stakeibc.QueryAllHostZoneRequest",
      value: QueryAllHostZoneRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllHostZoneResponse() {
  return {
    hostZone: [],
    pagination: void 0
  };
}
const QueryAllHostZoneResponse = {
  typeUrl: "/stride.stakeibc.QueryAllHostZoneResponse",
  encode(message, writer = BinaryWriter.create()) {
    for (const v of message.hostZone) {
      HostZone.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== void 0) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryAllHostZoneResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hostZone.push(HostZone.decode(reader, reader.uint32()));
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
    const message = createBaseQueryAllHostZoneResponse();
    message.hostZone = object.hostZone?.map((e) => HostZone.fromPartial(e)) || [];
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryAllHostZoneResponse();
    message.hostZone = object.host_zone?.map((e) => HostZone.fromAmino(e)) || [];
    if (object.pagination !== void 0 && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.hostZone) {
      obj.host_zone = message.hostZone.map((e) => e ? HostZone.toAmino(e) : void 0);
    } else {
      obj.host_zone = message.hostZone;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryAllHostZoneResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryAllHostZoneResponse.decode(message.value);
  },
  toProto(message) {
    return QueryAllHostZoneResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.stakeibc.QueryAllHostZoneResponse",
      value: QueryAllHostZoneResponse.encode(message).finish()
    };
  }
};
function createBaseQueryModuleAddressRequest() {
  return {
    name: ""
  };
}
const QueryModuleAddressRequest = {
  typeUrl: "/stride.stakeibc.QueryModuleAddressRequest",
  encode(message, writer = BinaryWriter.create()) {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryModuleAddressRequest();
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
    const message = createBaseQueryModuleAddressRequest();
    message.name = object.name ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryModuleAddressRequest();
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
    return QueryModuleAddressRequest.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryModuleAddressRequest.decode(message.value);
  },
  toProto(message) {
    return QueryModuleAddressRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.stakeibc.QueryModuleAddressRequest",
      value: QueryModuleAddressRequest.encode(message).finish()
    };
  }
};
function createBaseQueryModuleAddressResponse() {
  return {
    addr: ""
  };
}
const QueryModuleAddressResponse = {
  typeUrl: "/stride.stakeibc.QueryModuleAddressResponse",
  encode(message, writer = BinaryWriter.create()) {
    if (message.addr !== "") {
      writer.uint32(10).string(message.addr);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryModuleAddressResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.addr = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryModuleAddressResponse();
    message.addr = object.addr ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryModuleAddressResponse();
    if (object.addr !== void 0 && object.addr !== null) {
      message.addr = object.addr;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.addr = message.addr === "" ? void 0 : message.addr;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryModuleAddressResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryModuleAddressResponse.decode(message.value);
  },
  toProto(message) {
    return QueryModuleAddressResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.stakeibc.QueryModuleAddressResponse",
      value: QueryModuleAddressResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetEpochTrackerRequest() {
  return {
    epochIdentifier: ""
  };
}
const QueryGetEpochTrackerRequest = {
  typeUrl: "/stride.stakeibc.QueryGetEpochTrackerRequest",
  encode(message, writer = BinaryWriter.create()) {
    if (message.epochIdentifier !== "") {
      writer.uint32(10).string(message.epochIdentifier);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryGetEpochTrackerRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.epochIdentifier = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryGetEpochTrackerRequest();
    message.epochIdentifier = object.epochIdentifier ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryGetEpochTrackerRequest();
    if (object.epoch_identifier !== void 0 && object.epoch_identifier !== null) {
      message.epochIdentifier = object.epoch_identifier;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.epoch_identifier = message.epochIdentifier === "" ? void 0 : message.epochIdentifier;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryGetEpochTrackerRequest.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryGetEpochTrackerRequest.decode(message.value);
  },
  toProto(message) {
    return QueryGetEpochTrackerRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.stakeibc.QueryGetEpochTrackerRequest",
      value: QueryGetEpochTrackerRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetEpochTrackerResponse() {
  return {
    epochTracker: EpochTracker.fromPartial({})
  };
}
const QueryGetEpochTrackerResponse = {
  typeUrl: "/stride.stakeibc.QueryGetEpochTrackerResponse",
  encode(message, writer = BinaryWriter.create()) {
    if (message.epochTracker !== void 0) {
      EpochTracker.encode(message.epochTracker, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryGetEpochTrackerResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.epochTracker = EpochTracker.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryGetEpochTrackerResponse();
    message.epochTracker = object.epochTracker !== void 0 && object.epochTracker !== null ? EpochTracker.fromPartial(object.epochTracker) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryGetEpochTrackerResponse();
    if (object.epoch_tracker !== void 0 && object.epoch_tracker !== null) {
      message.epochTracker = EpochTracker.fromAmino(object.epoch_tracker);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.epoch_tracker = message.epochTracker ? EpochTracker.toAmino(message.epochTracker) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryGetEpochTrackerResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryGetEpochTrackerResponse.decode(message.value);
  },
  toProto(message) {
    return QueryGetEpochTrackerResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.stakeibc.QueryGetEpochTrackerResponse",
      value: QueryGetEpochTrackerResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllEpochTrackerRequest() {
  return {};
}
const QueryAllEpochTrackerRequest = {
  typeUrl: "/stride.stakeibc.QueryAllEpochTrackerRequest",
  encode(_, writer = BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryAllEpochTrackerRequest();
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
    const message = createBaseQueryAllEpochTrackerRequest();
    return message;
  },
  fromAmino(_) {
    const message = createBaseQueryAllEpochTrackerRequest();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return QueryAllEpochTrackerRequest.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryAllEpochTrackerRequest.decode(message.value);
  },
  toProto(message) {
    return QueryAllEpochTrackerRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.stakeibc.QueryAllEpochTrackerRequest",
      value: QueryAllEpochTrackerRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllEpochTrackerResponse() {
  return {
    epochTracker: []
  };
}
const QueryAllEpochTrackerResponse = {
  typeUrl: "/stride.stakeibc.QueryAllEpochTrackerResponse",
  encode(message, writer = BinaryWriter.create()) {
    for (const v of message.epochTracker) {
      EpochTracker.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryAllEpochTrackerResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.epochTracker.push(EpochTracker.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryAllEpochTrackerResponse();
    message.epochTracker = object.epochTracker?.map((e) => EpochTracker.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryAllEpochTrackerResponse();
    message.epochTracker = object.epoch_tracker?.map((e) => EpochTracker.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.epochTracker) {
      obj.epoch_tracker = message.epochTracker.map((e) => e ? EpochTracker.toAmino(e) : void 0);
    } else {
      obj.epoch_tracker = message.epochTracker;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return QueryAllEpochTrackerResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryAllEpochTrackerResponse.decode(message.value);
  },
  toProto(message) {
    return QueryAllEpochTrackerResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.stakeibc.QueryAllEpochTrackerResponse",
      value: QueryAllEpochTrackerResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetNextPacketSequenceRequest() {
  return {
    channelId: "",
    portId: ""
  };
}
const QueryGetNextPacketSequenceRequest = {
  typeUrl: "/stride.stakeibc.QueryGetNextPacketSequenceRequest",
  encode(message, writer = BinaryWriter.create()) {
    if (message.channelId !== "") {
      writer.uint32(10).string(message.channelId);
    }
    if (message.portId !== "") {
      writer.uint32(18).string(message.portId);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryGetNextPacketSequenceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.channelId = reader.string();
          break;
        case 2:
          message.portId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryGetNextPacketSequenceRequest();
    message.channelId = object.channelId ?? "";
    message.portId = object.portId ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryGetNextPacketSequenceRequest();
    if (object.channel_id !== void 0 && object.channel_id !== null) {
      message.channelId = object.channel_id;
    }
    if (object.port_id !== void 0 && object.port_id !== null) {
      message.portId = object.port_id;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.channel_id = message.channelId === "" ? void 0 : message.channelId;
    obj.port_id = message.portId === "" ? void 0 : message.portId;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryGetNextPacketSequenceRequest.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryGetNextPacketSequenceRequest.decode(message.value);
  },
  toProto(message) {
    return QueryGetNextPacketSequenceRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.stakeibc.QueryGetNextPacketSequenceRequest",
      value: QueryGetNextPacketSequenceRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetNextPacketSequenceResponse() {
  return {
    sequence: BigInt(0)
  };
}
const QueryGetNextPacketSequenceResponse = {
  typeUrl: "/stride.stakeibc.QueryGetNextPacketSequenceResponse",
  encode(message, writer = BinaryWriter.create()) {
    if (message.sequence !== BigInt(0)) {
      writer.uint32(8).uint64(message.sequence);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryGetNextPacketSequenceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sequence = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryGetNextPacketSequenceResponse();
    message.sequence = object.sequence !== void 0 && object.sequence !== null ? BigInt(object.sequence.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryGetNextPacketSequenceResponse();
    if (object.sequence !== void 0 && object.sequence !== null) {
      message.sequence = BigInt(object.sequence);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.sequence = message.sequence !== BigInt(0) ? message.sequence.toString() : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryGetNextPacketSequenceResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryGetNextPacketSequenceResponse.decode(message.value);
  },
  toProto(message) {
    return QueryGetNextPacketSequenceResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.stakeibc.QueryGetNextPacketSequenceResponse",
      value: QueryGetNextPacketSequenceResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAddressUnbondings() {
  return {
    address: ""
  };
}
const QueryAddressUnbondings = {
  typeUrl: "/stride.stakeibc.QueryAddressUnbondings",
  encode(message, writer = BinaryWriter.create()) {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryAddressUnbondings();
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
    const message = createBaseQueryAddressUnbondings();
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryAddressUnbondings();
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
    return QueryAddressUnbondings.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryAddressUnbondings.decode(message.value);
  },
  toProto(message) {
    return QueryAddressUnbondings.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.stakeibc.QueryAddressUnbondings",
      value: QueryAddressUnbondings.encode(message).finish()
    };
  }
};
function createBaseQueryAddressUnbondingsResponse() {
  return {
    addressUnbondings: []
  };
}
const QueryAddressUnbondingsResponse = {
  typeUrl: "/stride.stakeibc.QueryAddressUnbondingsResponse",
  encode(message, writer = BinaryWriter.create()) {
    for (const v of message.addressUnbondings) {
      AddressUnbonding.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryAddressUnbondingsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.addressUnbondings.push(AddressUnbonding.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryAddressUnbondingsResponse();
    message.addressUnbondings = object.addressUnbondings?.map((e) => AddressUnbonding.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryAddressUnbondingsResponse();
    message.addressUnbondings = object.address_unbondings?.map((e) => AddressUnbonding.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.addressUnbondings) {
      obj.address_unbondings = message.addressUnbondings.map((e) => e ? AddressUnbonding.toAmino(e) : void 0);
    } else {
      obj.address_unbondings = message.addressUnbondings;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return QueryAddressUnbondingsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryAddressUnbondingsResponse.decode(message.value);
  },
  toProto(message) {
    return QueryAddressUnbondingsResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.stakeibc.QueryAddressUnbondingsResponse",
      value: QueryAddressUnbondingsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllTradeRoutes() {
  return {};
}
const QueryAllTradeRoutes = {
  typeUrl: "/stride.stakeibc.QueryAllTradeRoutes",
  encode(_, writer = BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryAllTradeRoutes();
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
    const message = createBaseQueryAllTradeRoutes();
    return message;
  },
  fromAmino(_) {
    const message = createBaseQueryAllTradeRoutes();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return QueryAllTradeRoutes.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryAllTradeRoutes.decode(message.value);
  },
  toProto(message) {
    return QueryAllTradeRoutes.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.stakeibc.QueryAllTradeRoutes",
      value: QueryAllTradeRoutes.encode(message).finish()
    };
  }
};
function createBaseQueryAllTradeRoutesResponse() {
  return {
    tradeRoutes: []
  };
}
const QueryAllTradeRoutesResponse = {
  typeUrl: "/stride.stakeibc.QueryAllTradeRoutesResponse",
  encode(message, writer = BinaryWriter.create()) {
    for (const v of message.tradeRoutes) {
      TradeRoute.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryAllTradeRoutesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tradeRoutes.push(TradeRoute.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryAllTradeRoutesResponse();
    message.tradeRoutes = object.tradeRoutes?.map((e) => TradeRoute.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryAllTradeRoutesResponse();
    message.tradeRoutes = object.trade_routes?.map((e) => TradeRoute.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.tradeRoutes) {
      obj.trade_routes = message.tradeRoutes.map((e) => e ? TradeRoute.toAmino(e) : void 0);
    } else {
      obj.trade_routes = message.tradeRoutes;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return QueryAllTradeRoutesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryAllTradeRoutesResponse.decode(message.value);
  },
  toProto(message) {
    return QueryAllTradeRoutesResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.stakeibc.QueryAllTradeRoutesResponse",
      value: QueryAllTradeRoutesResponse.encode(message).finish()
    };
  }
};
export {
  QueryAddressUnbondings,
  QueryAddressUnbondingsResponse,
  QueryAllEpochTrackerRequest,
  QueryAllEpochTrackerResponse,
  QueryAllHostZoneRequest,
  QueryAllHostZoneResponse,
  QueryAllTradeRoutes,
  QueryAllTradeRoutesResponse,
  QueryGetEpochTrackerRequest,
  QueryGetEpochTrackerResponse,
  QueryGetHostZoneRequest,
  QueryGetHostZoneResponse,
  QueryGetNextPacketSequenceRequest,
  QueryGetNextPacketSequenceResponse,
  QueryGetValidatorsRequest,
  QueryGetValidatorsResponse,
  QueryInterchainAccountFromAddressRequest,
  QueryInterchainAccountFromAddressResponse,
  QueryModuleAddressRequest,
  QueryModuleAddressResponse,
  QueryParamsRequest,
  QueryParamsResponse
};
