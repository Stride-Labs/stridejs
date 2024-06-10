import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsSDKType } from "./params";
import { Validator, ValidatorSDKType } from "./validator";
import { HostZone, HostZoneSDKType } from "./host_zone";
import { EpochTracker, EpochTrackerSDKType } from "./epoch_tracker";
import { AddressUnbonding, AddressUnbondingSDKType } from "./address_unbonding";
import { TradeRoute, TradeRouteSDKType } from "./trade_route";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
/**
 * QueryInterchainAccountFromAddressRequest is the request type for the
 * Query/InterchainAccountAddress RPC
 */

export interface QueryInterchainAccountFromAddressRequest {
  owner: string;
  connectionId: string;
}
/**
 * QueryInterchainAccountFromAddressRequest is the request type for the
 * Query/InterchainAccountAddress RPC
 */

export interface QueryInterchainAccountFromAddressRequestSDKType {
  owner: string;
  connection_id: string;
}
/**
 * QueryInterchainAccountFromAddressResponse the response type for the
 * Query/InterchainAccountAddress RPC
 */

export interface QueryInterchainAccountFromAddressResponse {
  interchainAccountAddress: string;
}
/**
 * QueryInterchainAccountFromAddressResponse the response type for the
 * Query/InterchainAccountAddress RPC
 */

export interface QueryInterchainAccountFromAddressResponseSDKType {
  interchain_account_address: string;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */

export interface QueryParamsRequest {}
/** QueryParamsRequest is request type for the Query/Params RPC method. */

export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse is response type for the Query/Params RPC method. */

export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */

export interface QueryParamsResponseSDKType {
  /** params holds all the parameters of this module. */
  params: ParamsSDKType;
}
export interface QueryGetValidatorsRequest {
  chainId: string;
}
export interface QueryGetValidatorsRequestSDKType {
  chain_id: string;
}
export interface QueryGetValidatorsResponse {
  validators: Validator[];
}
export interface QueryGetValidatorsResponseSDKType {
  validators: ValidatorSDKType[];
}
export interface QueryGetHostZoneRequest {
  chainId: string;
}
export interface QueryGetHostZoneRequestSDKType {
  chain_id: string;
}
export interface QueryGetHostZoneResponse {
  hostZone: HostZone;
}
export interface QueryGetHostZoneResponseSDKType {
  host_zone: HostZoneSDKType;
}
export interface QueryAllHostZoneRequest {
  pagination?: PageRequest;
}
export interface QueryAllHostZoneRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryAllHostZoneResponse {
  hostZone: HostZone[];
  pagination?: PageResponse;
}
export interface QueryAllHostZoneResponseSDKType {
  host_zone: HostZoneSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryModuleAddressRequest {
  name: string;
}
export interface QueryModuleAddressRequestSDKType {
  name: string;
}
export interface QueryModuleAddressResponse {
  addr: string;
}
export interface QueryModuleAddressResponseSDKType {
  addr: string;
}
export interface QueryGetEpochTrackerRequest {
  epochIdentifier: string;
}
export interface QueryGetEpochTrackerRequestSDKType {
  epoch_identifier: string;
}
export interface QueryGetEpochTrackerResponse {
  epochTracker: EpochTracker;
}
export interface QueryGetEpochTrackerResponseSDKType {
  epoch_tracker: EpochTrackerSDKType;
}
export interface QueryAllEpochTrackerRequest {}
export interface QueryAllEpochTrackerRequestSDKType {}
export interface QueryAllEpochTrackerResponse {
  epochTracker: EpochTracker[];
}
export interface QueryAllEpochTrackerResponseSDKType {
  epoch_tracker: EpochTrackerSDKType[];
}
export interface QueryGetNextPacketSequenceRequest {
  channelId: string;
  portId: string;
}
export interface QueryGetNextPacketSequenceRequestSDKType {
  channel_id: string;
  port_id: string;
}
export interface QueryGetNextPacketSequenceResponse {
  sequence: Long;
}
export interface QueryGetNextPacketSequenceResponseSDKType {
  sequence: Long;
}
export interface QueryAddressUnbondings {
  address: string;
}
export interface QueryAddressUnbondingsSDKType {
  address: string;
}
export interface QueryAddressUnbondingsResponse {
  addressUnbondings: AddressUnbonding[];
}
export interface QueryAddressUnbondingsResponseSDKType {
  address_unbondings: AddressUnbondingSDKType[];
}
export interface QueryAllTradeRoutes {}
export interface QueryAllTradeRoutesSDKType {}
export interface QueryAllTradeRoutesResponse {
  tradeRoutes: TradeRoute[];
}
export interface QueryAllTradeRoutesResponseSDKType {
  trade_routes: TradeRouteSDKType[];
}

function createBaseQueryInterchainAccountFromAddressRequest(): QueryInterchainAccountFromAddressRequest {
  return {
    owner: "",
    connectionId: ""
  };
}

export const QueryInterchainAccountFromAddressRequest = {
  encode(message: QueryInterchainAccountFromAddressRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }

    if (message.connectionId !== "") {
      writer.uint32(18).string(message.connectionId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryInterchainAccountFromAddressRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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

  fromPartial(object: DeepPartial<QueryInterchainAccountFromAddressRequest>): QueryInterchainAccountFromAddressRequest {
    const message = createBaseQueryInterchainAccountFromAddressRequest();
    message.owner = object.owner ?? "";
    message.connectionId = object.connectionId ?? "";
    return message;
  }

};

function createBaseQueryInterchainAccountFromAddressResponse(): QueryInterchainAccountFromAddressResponse {
  return {
    interchainAccountAddress: ""
  };
}

export const QueryInterchainAccountFromAddressResponse = {
  encode(message: QueryInterchainAccountFromAddressResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.interchainAccountAddress !== "") {
      writer.uint32(10).string(message.interchainAccountAddress);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryInterchainAccountFromAddressResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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

  fromPartial(object: DeepPartial<QueryInterchainAccountFromAddressResponse>): QueryInterchainAccountFromAddressResponse {
    const message = createBaseQueryInterchainAccountFromAddressResponse();
    message.interchainAccountAddress = object.interchainAccountAddress ?? "";
    return message;
  }

};

function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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

  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  }

};

function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: undefined
  };
}

export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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

  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  }

};

function createBaseQueryGetValidatorsRequest(): QueryGetValidatorsRequest {
  return {
    chainId: ""
  };
}

export const QueryGetValidatorsRequest = {
  encode(message: QueryGetValidatorsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetValidatorsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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

  fromPartial(object: DeepPartial<QueryGetValidatorsRequest>): QueryGetValidatorsRequest {
    const message = createBaseQueryGetValidatorsRequest();
    message.chainId = object.chainId ?? "";
    return message;
  }

};

function createBaseQueryGetValidatorsResponse(): QueryGetValidatorsResponse {
  return {
    validators: []
  };
}

export const QueryGetValidatorsResponse = {
  encode(message: QueryGetValidatorsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.validators) {
      Validator.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetValidatorsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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

  fromPartial(object: DeepPartial<QueryGetValidatorsResponse>): QueryGetValidatorsResponse {
    const message = createBaseQueryGetValidatorsResponse();
    message.validators = object.validators?.map(e => Validator.fromPartial(e)) || [];
    return message;
  }

};

function createBaseQueryGetHostZoneRequest(): QueryGetHostZoneRequest {
  return {
    chainId: ""
  };
}

export const QueryGetHostZoneRequest = {
  encode(message: QueryGetHostZoneRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetHostZoneRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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

  fromPartial(object: DeepPartial<QueryGetHostZoneRequest>): QueryGetHostZoneRequest {
    const message = createBaseQueryGetHostZoneRequest();
    message.chainId = object.chainId ?? "";
    return message;
  }

};

function createBaseQueryGetHostZoneResponse(): QueryGetHostZoneResponse {
  return {
    hostZone: undefined
  };
}

export const QueryGetHostZoneResponse = {
  encode(message: QueryGetHostZoneResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.hostZone !== undefined) {
      HostZone.encode(message.hostZone, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetHostZoneResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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

  fromPartial(object: DeepPartial<QueryGetHostZoneResponse>): QueryGetHostZoneResponse {
    const message = createBaseQueryGetHostZoneResponse();
    message.hostZone = object.hostZone !== undefined && object.hostZone !== null ? HostZone.fromPartial(object.hostZone) : undefined;
    return message;
  }

};

function createBaseQueryAllHostZoneRequest(): QueryAllHostZoneRequest {
  return {
    pagination: undefined
  };
}

export const QueryAllHostZoneRequest = {
  encode(message: QueryAllHostZoneRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllHostZoneRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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

  fromPartial(object: DeepPartial<QueryAllHostZoneRequest>): QueryAllHostZoneRequest {
    const message = createBaseQueryAllHostZoneRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryAllHostZoneResponse(): QueryAllHostZoneResponse {
  return {
    hostZone: [],
    pagination: undefined
  };
}

export const QueryAllHostZoneResponse = {
  encode(message: QueryAllHostZoneResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.hostZone) {
      HostZone.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllHostZoneResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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

  fromPartial(object: DeepPartial<QueryAllHostZoneResponse>): QueryAllHostZoneResponse {
    const message = createBaseQueryAllHostZoneResponse();
    message.hostZone = object.hostZone?.map(e => HostZone.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryModuleAddressRequest(): QueryModuleAddressRequest {
  return {
    name: ""
  };
}

export const QueryModuleAddressRequest = {
  encode(message: QueryModuleAddressRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryModuleAddressRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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

  fromPartial(object: DeepPartial<QueryModuleAddressRequest>): QueryModuleAddressRequest {
    const message = createBaseQueryModuleAddressRequest();
    message.name = object.name ?? "";
    return message;
  }

};

function createBaseQueryModuleAddressResponse(): QueryModuleAddressResponse {
  return {
    addr: ""
  };
}

export const QueryModuleAddressResponse = {
  encode(message: QueryModuleAddressResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.addr !== "") {
      writer.uint32(10).string(message.addr);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryModuleAddressResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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

  fromPartial(object: DeepPartial<QueryModuleAddressResponse>): QueryModuleAddressResponse {
    const message = createBaseQueryModuleAddressResponse();
    message.addr = object.addr ?? "";
    return message;
  }

};

function createBaseQueryGetEpochTrackerRequest(): QueryGetEpochTrackerRequest {
  return {
    epochIdentifier: ""
  };
}

export const QueryGetEpochTrackerRequest = {
  encode(message: QueryGetEpochTrackerRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.epochIdentifier !== "") {
      writer.uint32(10).string(message.epochIdentifier);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetEpochTrackerRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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

  fromPartial(object: DeepPartial<QueryGetEpochTrackerRequest>): QueryGetEpochTrackerRequest {
    const message = createBaseQueryGetEpochTrackerRequest();
    message.epochIdentifier = object.epochIdentifier ?? "";
    return message;
  }

};

function createBaseQueryGetEpochTrackerResponse(): QueryGetEpochTrackerResponse {
  return {
    epochTracker: undefined
  };
}

export const QueryGetEpochTrackerResponse = {
  encode(message: QueryGetEpochTrackerResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.epochTracker !== undefined) {
      EpochTracker.encode(message.epochTracker, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetEpochTrackerResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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

  fromPartial(object: DeepPartial<QueryGetEpochTrackerResponse>): QueryGetEpochTrackerResponse {
    const message = createBaseQueryGetEpochTrackerResponse();
    message.epochTracker = object.epochTracker !== undefined && object.epochTracker !== null ? EpochTracker.fromPartial(object.epochTracker) : undefined;
    return message;
  }

};

function createBaseQueryAllEpochTrackerRequest(): QueryAllEpochTrackerRequest {
  return {};
}

export const QueryAllEpochTrackerRequest = {
  encode(_: QueryAllEpochTrackerRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllEpochTrackerRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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

  fromPartial(_: DeepPartial<QueryAllEpochTrackerRequest>): QueryAllEpochTrackerRequest {
    const message = createBaseQueryAllEpochTrackerRequest();
    return message;
  }

};

function createBaseQueryAllEpochTrackerResponse(): QueryAllEpochTrackerResponse {
  return {
    epochTracker: []
  };
}

export const QueryAllEpochTrackerResponse = {
  encode(message: QueryAllEpochTrackerResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.epochTracker) {
      EpochTracker.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllEpochTrackerResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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

  fromPartial(object: DeepPartial<QueryAllEpochTrackerResponse>): QueryAllEpochTrackerResponse {
    const message = createBaseQueryAllEpochTrackerResponse();
    message.epochTracker = object.epochTracker?.map(e => EpochTracker.fromPartial(e)) || [];
    return message;
  }

};

function createBaseQueryGetNextPacketSequenceRequest(): QueryGetNextPacketSequenceRequest {
  return {
    channelId: "",
    portId: ""
  };
}

export const QueryGetNextPacketSequenceRequest = {
  encode(message: QueryGetNextPacketSequenceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.channelId !== "") {
      writer.uint32(10).string(message.channelId);
    }

    if (message.portId !== "") {
      writer.uint32(18).string(message.portId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetNextPacketSequenceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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

  fromPartial(object: DeepPartial<QueryGetNextPacketSequenceRequest>): QueryGetNextPacketSequenceRequest {
    const message = createBaseQueryGetNextPacketSequenceRequest();
    message.channelId = object.channelId ?? "";
    message.portId = object.portId ?? "";
    return message;
  }

};

function createBaseQueryGetNextPacketSequenceResponse(): QueryGetNextPacketSequenceResponse {
  return {
    sequence: Long.UZERO
  };
}

export const QueryGetNextPacketSequenceResponse = {
  encode(message: QueryGetNextPacketSequenceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.sequence.isZero()) {
      writer.uint32(8).uint64(message.sequence);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetNextPacketSequenceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetNextPacketSequenceResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sequence = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryGetNextPacketSequenceResponse>): QueryGetNextPacketSequenceResponse {
    const message = createBaseQueryGetNextPacketSequenceResponse();
    message.sequence = object.sequence !== undefined && object.sequence !== null ? Long.fromValue(object.sequence) : Long.UZERO;
    return message;
  }

};

function createBaseQueryAddressUnbondings(): QueryAddressUnbondings {
  return {
    address: ""
  };
}

export const QueryAddressUnbondings = {
  encode(message: QueryAddressUnbondings, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAddressUnbondings {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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

  fromPartial(object: DeepPartial<QueryAddressUnbondings>): QueryAddressUnbondings {
    const message = createBaseQueryAddressUnbondings();
    message.address = object.address ?? "";
    return message;
  }

};

function createBaseQueryAddressUnbondingsResponse(): QueryAddressUnbondingsResponse {
  return {
    addressUnbondings: []
  };
}

export const QueryAddressUnbondingsResponse = {
  encode(message: QueryAddressUnbondingsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.addressUnbondings) {
      AddressUnbonding.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAddressUnbondingsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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

  fromPartial(object: DeepPartial<QueryAddressUnbondingsResponse>): QueryAddressUnbondingsResponse {
    const message = createBaseQueryAddressUnbondingsResponse();
    message.addressUnbondings = object.addressUnbondings?.map(e => AddressUnbonding.fromPartial(e)) || [];
    return message;
  }

};

function createBaseQueryAllTradeRoutes(): QueryAllTradeRoutes {
  return {};
}

export const QueryAllTradeRoutes = {
  encode(_: QueryAllTradeRoutes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllTradeRoutes {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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

  fromPartial(_: DeepPartial<QueryAllTradeRoutes>): QueryAllTradeRoutes {
    const message = createBaseQueryAllTradeRoutes();
    return message;
  }

};

function createBaseQueryAllTradeRoutesResponse(): QueryAllTradeRoutesResponse {
  return {
    tradeRoutes: []
  };
}

export const QueryAllTradeRoutesResponse = {
  encode(message: QueryAllTradeRoutesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.tradeRoutes) {
      TradeRoute.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllTradeRoutesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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

  fromPartial(object: DeepPartial<QueryAllTradeRoutesResponse>): QueryAllTradeRoutesResponse {
    const message = createBaseQueryAllTradeRoutesResponse();
    message.tradeRoutes = object.tradeRoutes?.map(e => TradeRoute.fromPartial(e)) || [];
    return message;
  }

};