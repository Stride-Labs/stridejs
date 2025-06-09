import { Duration, DurationAmino, DurationSDKType } from "../../../google/protobuf/duration";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { bytesFromBase64, base64FromBytes } from "../../../helpers";
export enum TimeoutPolicy {
  REJECT_QUERY_RESPONSE = 0,
  RETRY_QUERY_REQUEST = 1,
  EXECUTE_QUERY_CALLBACK = 2,
  UNRECOGNIZED = -1,
}
export const TimeoutPolicySDKType = TimeoutPolicy;
export const TimeoutPolicyAmino = TimeoutPolicy;
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
    case TimeoutPolicy.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
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
  timeoutTimestamp: bigint;
  requestSent: boolean;
  submissionHeight: bigint;
}
export interface QueryProtoMsg {
  typeUrl: "/stride.interchainquery.v1.Query";
  value: Uint8Array;
}
/**
 * @name QueryAmino
 * @package stride.interchainquery.v1
 * @see proto type: stride.interchainquery.v1.Query
 */
export interface QueryAmino {
  id?: string;
  connection_id?: string;
  chain_id?: string;
  query_type?: string;
  request_data?: string;
  callback_module?: string;
  callback_id?: string;
  callback_data?: string;
  timeout_policy?: TimeoutPolicy;
  timeout_duration?: DurationAmino;
  timeout_timestamp?: string;
  request_sent?: boolean;
  submission_height?: string;
}
export interface QueryAminoMsg {
  type: "/stride.interchainquery.v1.Query";
  value: QueryAmino;
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
  timeout_policy: TimeoutPolicy;
  timeout_duration: DurationSDKType;
  timeout_timestamp: bigint;
  request_sent: boolean;
  submission_height: bigint;
}
export interface DataPoint {
  id: string;
  remoteHeight: string;
  localHeight: string;
  value: Uint8Array;
}
export interface DataPointProtoMsg {
  typeUrl: "/stride.interchainquery.v1.DataPoint";
  value: Uint8Array;
}
/**
 * @name DataPointAmino
 * @package stride.interchainquery.v1
 * @see proto type: stride.interchainquery.v1.DataPoint
 */
export interface DataPointAmino {
  id?: string;
  remote_height?: string;
  local_height?: string;
  value?: string;
}
export interface DataPointAminoMsg {
  type: "/stride.interchainquery.v1.DataPoint";
  value: DataPointAmino;
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
export interface GenesisStateProtoMsg {
  typeUrl: "/stride.interchainquery.v1.GenesisState";
  value: Uint8Array;
}
/**
 * GenesisState defines the epochs module's genesis state.
 * @name GenesisStateAmino
 * @package stride.interchainquery.v1
 * @see proto type: stride.interchainquery.v1.GenesisState
 */
export interface GenesisStateAmino {
  queries?: QueryAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/stride.interchainquery.v1.GenesisState";
  value: GenesisStateAmino;
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
    timeoutDuration: Duration.fromPartial({}),
    timeoutTimestamp: BigInt(0),
    requestSent: false,
    submissionHeight: BigInt(0)
  };
}
export const Query = {
  typeUrl: "/stride.interchainquery.v1.Query",
  encode(message: Query, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
    if (message.timeoutTimestamp !== BigInt(0)) {
      writer.uint32(72).uint64(message.timeoutTimestamp);
    }
    if (message.requestSent === true) {
      writer.uint32(88).bool(message.requestSent);
    }
    if (message.submissionHeight !== BigInt(0)) {
      writer.uint32(128).uint64(message.submissionHeight);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Query {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
          message.timeoutPolicy = reader.int32() as any;
          break;
        case 14:
          message.timeoutDuration = Duration.decode(reader, reader.uint32());
          break;
        case 9:
          message.timeoutTimestamp = reader.uint64();
          break;
        case 11:
          message.requestSent = reader.bool();
          break;
        case 16:
          message.submissionHeight = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Query>): Query {
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
    message.timeoutDuration = object.timeoutDuration !== undefined && object.timeoutDuration !== null ? Duration.fromPartial(object.timeoutDuration) : undefined;
    message.timeoutTimestamp = object.timeoutTimestamp !== undefined && object.timeoutTimestamp !== null ? BigInt(object.timeoutTimestamp.toString()) : BigInt(0);
    message.requestSent = object.requestSent ?? false;
    message.submissionHeight = object.submissionHeight !== undefined && object.submissionHeight !== null ? BigInt(object.submissionHeight.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryAmino): Query {
    const message = createBaseQuery();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    if (object.connection_id !== undefined && object.connection_id !== null) {
      message.connectionId = object.connection_id;
    }
    if (object.chain_id !== undefined && object.chain_id !== null) {
      message.chainId = object.chain_id;
    }
    if (object.query_type !== undefined && object.query_type !== null) {
      message.queryType = object.query_type;
    }
    if (object.request_data !== undefined && object.request_data !== null) {
      message.requestData = bytesFromBase64(object.request_data);
    }
    if (object.callback_module !== undefined && object.callback_module !== null) {
      message.callbackModule = object.callback_module;
    }
    if (object.callback_id !== undefined && object.callback_id !== null) {
      message.callbackId = object.callback_id;
    }
    if (object.callback_data !== undefined && object.callback_data !== null) {
      message.callbackData = bytesFromBase64(object.callback_data);
    }
    if (object.timeout_policy !== undefined && object.timeout_policy !== null) {
      message.timeoutPolicy = object.timeout_policy;
    }
    if (object.timeout_duration !== undefined && object.timeout_duration !== null) {
      message.timeoutDuration = Duration.fromAmino(object.timeout_duration);
    }
    if (object.timeout_timestamp !== undefined && object.timeout_timestamp !== null) {
      message.timeoutTimestamp = BigInt(object.timeout_timestamp);
    }
    if (object.request_sent !== undefined && object.request_sent !== null) {
      message.requestSent = object.request_sent;
    }
    if (object.submission_height !== undefined && object.submission_height !== null) {
      message.submissionHeight = BigInt(object.submission_height);
    }
    return message;
  },
  toAmino(message: Query): QueryAmino {
    const obj: any = {};
    obj.id = message.id === "" ? undefined : message.id;
    obj.connection_id = message.connectionId === "" ? undefined : message.connectionId;
    obj.chain_id = message.chainId === "" ? undefined : message.chainId;
    obj.query_type = message.queryType === "" ? undefined : message.queryType;
    obj.request_data = message.requestData ? base64FromBytes(message.requestData) : undefined;
    obj.callback_module = message.callbackModule === "" ? undefined : message.callbackModule;
    obj.callback_id = message.callbackId === "" ? undefined : message.callbackId;
    obj.callback_data = message.callbackData ? base64FromBytes(message.callbackData) : undefined;
    obj.timeout_policy = message.timeoutPolicy === 0 ? undefined : message.timeoutPolicy;
    obj.timeout_duration = message.timeoutDuration ? Duration.toAmino(message.timeoutDuration) : undefined;
    obj.timeout_timestamp = message.timeoutTimestamp !== BigInt(0) ? message.timeoutTimestamp?.toString() : undefined;
    obj.request_sent = message.requestSent === false ? undefined : message.requestSent;
    obj.submission_height = message.submissionHeight !== BigInt(0) ? message.submissionHeight?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAminoMsg): Query {
    return Query.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryProtoMsg): Query {
    return Query.decode(message.value);
  },
  toProto(message: Query): Uint8Array {
    return Query.encode(message).finish();
  },
  toProtoMsg(message: Query): QueryProtoMsg {
    return {
      typeUrl: "/stride.interchainquery.v1.Query",
      value: Query.encode(message).finish()
    };
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
  typeUrl: "/stride.interchainquery.v1.DataPoint",
  encode(message: DataPoint, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number): DataPoint {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: Partial<DataPoint>): DataPoint {
    const message = createBaseDataPoint();
    message.id = object.id ?? "";
    message.remoteHeight = object.remoteHeight ?? "";
    message.localHeight = object.localHeight ?? "";
    message.value = object.value ?? new Uint8Array();
    return message;
  },
  fromAmino(object: DataPointAmino): DataPoint {
    const message = createBaseDataPoint();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    if (object.remote_height !== undefined && object.remote_height !== null) {
      message.remoteHeight = object.remote_height;
    }
    if (object.local_height !== undefined && object.local_height !== null) {
      message.localHeight = object.local_height;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = bytesFromBase64(object.value);
    }
    return message;
  },
  toAmino(message: DataPoint): DataPointAmino {
    const obj: any = {};
    obj.id = message.id === "" ? undefined : message.id;
    obj.remote_height = message.remoteHeight === "" ? undefined : message.remoteHeight;
    obj.local_height = message.localHeight === "" ? undefined : message.localHeight;
    obj.value = message.value ? base64FromBytes(message.value) : undefined;
    return obj;
  },
  fromAminoMsg(object: DataPointAminoMsg): DataPoint {
    return DataPoint.fromAmino(object.value);
  },
  fromProtoMsg(message: DataPointProtoMsg): DataPoint {
    return DataPoint.decode(message.value);
  },
  toProto(message: DataPoint): Uint8Array {
    return DataPoint.encode(message).finish();
  },
  toProtoMsg(message: DataPoint): DataPointProtoMsg {
    return {
      typeUrl: "/stride.interchainquery.v1.DataPoint",
      value: DataPoint.encode(message).finish()
    };
  }
};
function createBaseGenesisState(): GenesisState {
  return {
    queries: []
  };
}
export const GenesisState = {
  typeUrl: "/stride.interchainquery.v1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.queries) {
      Query.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.queries = object.queries?.map(e => Query.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    message.queries = object.queries?.map(e => Query.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    if (message.queries) {
      obj.queries = message.queries.map(e => e ? Query.toAmino(e) : undefined);
    } else {
      obj.queries = message.queries;
    }
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/stride.interchainquery.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};