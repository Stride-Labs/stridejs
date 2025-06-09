import { Duration, DurationAmino, DurationSDKType } from "../../../google/protobuf/duration";
import { BinaryReader, BinaryWriter } from "../../../binary";
export declare enum TimeoutPolicy {
    REJECT_QUERY_RESPONSE = 0,
    RETRY_QUERY_REQUEST = 1,
    EXECUTE_QUERY_CALLBACK = 2,
    UNRECOGNIZED = -1
}
export declare const TimeoutPolicySDKType: typeof TimeoutPolicy;
export declare const TimeoutPolicyAmino: typeof TimeoutPolicy;
export declare function timeoutPolicyFromJSON(object: any): TimeoutPolicy;
export declare function timeoutPolicyToJSON(object: TimeoutPolicy): string;
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
export declare const Query: {
    typeUrl: string;
    encode(message: Query, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Query;
    fromPartial(object: Partial<Query>): Query;
    fromAmino(object: QueryAmino): Query;
    toAmino(message: Query): QueryAmino;
    fromAminoMsg(object: QueryAminoMsg): Query;
    fromProtoMsg(message: QueryProtoMsg): Query;
    toProto(message: Query): Uint8Array;
    toProtoMsg(message: Query): QueryProtoMsg;
};
export declare const DataPoint: {
    typeUrl: string;
    encode(message: DataPoint, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): DataPoint;
    fromPartial(object: Partial<DataPoint>): DataPoint;
    fromAmino(object: DataPointAmino): DataPoint;
    toAmino(message: DataPoint): DataPointAmino;
    fromAminoMsg(object: DataPointAminoMsg): DataPoint;
    fromProtoMsg(message: DataPointProtoMsg): DataPoint;
    toProto(message: DataPoint): Uint8Array;
    toProtoMsg(message: DataPoint): DataPointProtoMsg;
};
export declare const GenesisState: {
    typeUrl: string;
    encode(message: GenesisState, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
    fromAmino(object: GenesisStateAmino): GenesisState;
    toAmino(message: GenesisState): GenesisStateAmino;
    fromAminoMsg(object: GenesisStateAminoMsg): GenesisState;
    fromProtoMsg(message: GenesisStateProtoMsg): GenesisState;
    toProto(message: GenesisState): Uint8Array;
    toProtoMsg(message: GenesisState): GenesisStateProtoMsg;
};
