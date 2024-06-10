import { Duration, DurationSDKType } from "../../../google/protobuf/duration";
import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
export declare enum TimeoutPolicy {
    REJECT_QUERY_RESPONSE = 0,
    RETRY_QUERY_REQUEST = 1,
    EXECUTE_QUERY_CALLBACK = 2,
    UNRECOGNIZED = -1
}
export declare enum TimeoutPolicySDKType {
    REJECT_QUERY_RESPONSE = 0,
    RETRY_QUERY_REQUEST = 1,
    EXECUTE_QUERY_CALLBACK = 2,
    UNRECOGNIZED = -1
}
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
export declare const Query: {
    encode(message: Query, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Query;
    fromPartial(object: DeepPartial<Query>): Query;
};
export declare const DataPoint: {
    encode(message: DataPoint, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DataPoint;
    fromPartial(object: DeepPartial<DataPoint>): DataPoint;
};
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
