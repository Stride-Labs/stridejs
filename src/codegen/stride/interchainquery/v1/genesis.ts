import { Duration, DurationSDKType } from "../../../google/protobuf/duration";
import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
export enum TimeoutPolicy {
  REJECT_QUERY_RESPONSE = 0,
  RETRY_QUERY_REQUEST = 1,
  EXECUTE_QUERY_CALLBACK = 2,
  UNRECOGNIZED = -1,
}
export enum TimeoutPolicySDKType {
  REJECT_QUERY_RESPONSE = 0,
  RETRY_QUERY_REQUEST = 1,
  EXECUTE_QUERY_CALLBACK = 2,
  UNRECOGNIZED = -1,
}
export function timeoutPolicyFromJSON(object: any): TimeoutPolicy {
  switch (object) {
    case 0:
    case "REJECT_QUERY_RESPONSE":
      return TimeoutPolicy.REJECT_QUERY_RESPONSE;

    case 1:
    case "RETRY_QUERY_REQUEST":
      return TimeoutPolicy.RETRY_QUERY_REQUEST;

    case 2:
    case "EXECUTE_QUERY_CALLBACK":
      return TimeoutPolicy.EXECUTE_QUERY_CALLBACK;

    case -1:
    case "UNRECOGNIZED":
    default:
      return TimeoutPolicy.UNRECOGNIZED;
  }
}
export function timeoutPolicyToJSON(object: TimeoutPolicy): string {
  switch (object) {
    case TimeoutPolicy.REJECT_QUERY_RESPONSE:
      return "REJECT_QUERY_RESPONSE";

    case TimeoutPolicy.RETRY_QUERY_REQUEST:
      return "RETRY_QUERY_REQUEST";

    case TimeoutPolicy.EXECUTE_QUERY_CALLBACK:
      return "EXECUTE_QUERY_CALLBACK";

    default:
      return "UNKNOWN";
  }
}
export interface Query {
  id: string;
  connectionId: string;
  chainId: string;
  queryType: string;
  requestData: Uint8Array;
  callbackModule: string;
  callbackId: string;
  callbackData: Uint8Array;
  timeoutPolicy: TimeoutPolicy;
  timeoutDuration: Duration;
  timeoutTimestamp: Long;
  requestSent: boolean;
  submissionHeight: Long;
}
export interface QuerySDKType {
  id: string;
  connection_id: string;
  chain_id: string;
  query_type: string;
  request_data: Uint8Array;
  callback_module: string;
  callback_id: string;
  callback_data: Uint8Array;
  timeout_policy: TimeoutPolicySDKType;
  timeout_duration: DurationSDKType;
  timeout_timestamp: Long;
  request_sent: boolean;
  submission_height: Long;
}
export interface DataPoint {
  id: string;
  remoteHeight: string;
  localHeight: string;
  value: Uint8Array;
}
export interface DataPointSDKType {
  id: string;
  remote_height: string;
  local_height: string;
  value: Uint8Array;
}
/** GenesisState defines the epochs module's genesis state. */

export interface GenesisState {
  queries: Query[];
}
/** GenesisState defines the epochs module's genesis state. */

export interface GenesisStateSDKType {
  queries: QuerySDKType[];
}

function createBaseQuery(): Query {
  return {
    id: "",
    connectionId: "",
    chainId: "",
    queryType: "",
    requestData: new Uint8Array(),
    callbackModule: "",
    callbackId: "",
    callbackData: new Uint8Array(),
    timeoutPolicy: 0,
    timeoutDuration: undefined,
    timeoutTimestamp: Long.UZERO,
    requestSent: false,
    submissionHeight: Long.UZERO
  };
}

export const Query = {
  encode(message: Query, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }

    if (message.connectionId !== "") {
      writer.uint32(18).string(message.connectionId);
    }

    if (message.chainId !== "") {
      writer.uint32(26).string(message.chainId);
    }

    if (message.queryType !== "") {
      writer.uint32(34).string(message.queryType);
    }

    if (message.requestData.length !== 0) {
      writer.uint32(42).bytes(message.requestData);
    }

    if (message.callbackModule !== "") {
      writer.uint32(106).string(message.callbackModule);
    }

    if (message.callbackId !== "") {
      writer.uint32(66).string(message.callbackId);
    }

    if (message.callbackData.length !== 0) {
      writer.uint32(98).bytes(message.callbackData);
    }

    if (message.timeoutPolicy !== 0) {
      writer.uint32(120).int32(message.timeoutPolicy);
    }

    if (message.timeoutDuration !== undefined) {
      Duration.encode(message.timeoutDuration, writer.uint32(114).fork()).ldelim();
    }

    if (!message.timeoutTimestamp.isZero()) {
      writer.uint32(72).uint64(message.timeoutTimestamp);
    }

    if (message.requestSent === true) {
      writer.uint32(88).bool(message.requestSent);
    }

    if (!message.submissionHeight.isZero()) {
      writer.uint32(128).uint64(message.submissionHeight);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Query {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuery();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;

        case 2:
          message.connectionId = reader.string();
          break;

        case 3:
          message.chainId = reader.string();
          break;

        case 4:
          message.queryType = reader.string();
          break;

        case 5:
          message.requestData = reader.bytes();
          break;

        case 13:
          message.callbackModule = reader.string();
          break;

        case 8:
          message.callbackId = reader.string();
          break;

        case 12:
          message.callbackData = reader.bytes();
          break;

        case 15:
          message.timeoutPolicy = (reader.int32() as any);
          break;

        case 14:
          message.timeoutDuration = Duration.decode(reader, reader.uint32());
          break;

        case 9:
          message.timeoutTimestamp = (reader.uint64() as Long);
          break;

        case 11:
          message.requestSent = reader.bool();
          break;

        case 16:
          message.submissionHeight = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<Query>): Query {
    const message = createBaseQuery();
    message.id = object.id ?? "";
    message.connectionId = object.connectionId ?? "";
    message.chainId = object.chainId ?? "";
    message.queryType = object.queryType ?? "";
    message.requestData = object.requestData ?? new Uint8Array();
    message.callbackModule = object.callbackModule ?? "";
    message.callbackId = object.callbackId ?? "";
    message.callbackData = object.callbackData ?? new Uint8Array();
    message.timeoutPolicy = object.timeoutPolicy ?? 0;
    message.timeoutDuration = object.timeoutDuration ?? undefined;
    message.timeoutTimestamp = object.timeoutTimestamp !== undefined && object.timeoutTimestamp !== null ? Long.fromValue(object.timeoutTimestamp) : Long.UZERO;
    message.requestSent = object.requestSent ?? false;
    message.submissionHeight = object.submissionHeight !== undefined && object.submissionHeight !== null ? Long.fromValue(object.submissionHeight) : Long.UZERO;
    return message;
  }

};

function createBaseDataPoint(): DataPoint {
  return {
    id: "",
    remoteHeight: "",
    localHeight: "",
    value: new Uint8Array()
  };
}

export const DataPoint = {
  encode(message: DataPoint, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }

    if (message.remoteHeight !== "") {
      writer.uint32(18).string(message.remoteHeight);
    }

    if (message.localHeight !== "") {
      writer.uint32(26).string(message.localHeight);
    }

    if (message.value.length !== 0) {
      writer.uint32(34).bytes(message.value);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DataPoint {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDataPoint();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;

        case 2:
          message.remoteHeight = reader.string();
          break;

        case 3:
          message.localHeight = reader.string();
          break;

        case 4:
          message.value = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<DataPoint>): DataPoint {
    const message = createBaseDataPoint();
    message.id = object.id ?? "";
    message.remoteHeight = object.remoteHeight ?? "";
    message.localHeight = object.localHeight ?? "";
    message.value = object.value ?? new Uint8Array();
    return message;
  }

};

function createBaseGenesisState(): GenesisState {
  return {
    queries: []
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.queries) {
      Query.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.queries.push(Query.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.queries = object.queries?.map(e => Query.fromPartial(e)) || [];
    return message;
  }

};