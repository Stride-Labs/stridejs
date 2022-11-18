import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsSDKType } from "./params";
import { Validator, ValidatorSDKType } from "./validator";
import { ICAAccount, ICAAccountSDKType } from "./ica_account";
import { HostZone, HostZoneSDKType } from "./host_zone";
import { EpochTracker, EpochTrackerSDKType } from "./epoch_tracker";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
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
export interface QueryParamsRequest {
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {
}
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
export interface QueryGetICAAccountRequest {
}
export interface QueryGetICAAccountRequestSDKType {
}
export interface QueryGetICAAccountResponse {
    icaAccount: ICAAccount;
}
export interface QueryGetICAAccountResponseSDKType {
    ica_account: ICAAccountSDKType;
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
export interface QueryAllEpochTrackerRequest {
    pagination?: PageRequest;
}
export interface QueryAllEpochTrackerRequestSDKType {
    pagination?: PageRequestSDKType;
}
export interface QueryAllEpochTrackerResponse {
    epochTracker: EpochTracker[];
    pagination?: PageResponse;
}
export interface QueryAllEpochTrackerResponseSDKType {
    epoch_tracker: EpochTrackerSDKType[];
    pagination?: PageResponseSDKType;
}
export declare const QueryInterchainAccountFromAddressRequest: {
    encode(message: QueryInterchainAccountFromAddressRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryInterchainAccountFromAddressRequest;
    fromPartial(object: DeepPartial<QueryInterchainAccountFromAddressRequest>): QueryInterchainAccountFromAddressRequest;
};
export declare const QueryInterchainAccountFromAddressResponse: {
    encode(message: QueryInterchainAccountFromAddressResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryInterchainAccountFromAddressResponse;
    fromPartial(object: DeepPartial<QueryInterchainAccountFromAddressResponse>): QueryInterchainAccountFromAddressResponse;
};
export declare const QueryParamsRequest: {
    encode(_: QueryParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest;
    fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest;
};
export declare const QueryParamsResponse: {
    encode(message: QueryParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse;
    fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse;
};
export declare const QueryGetValidatorsRequest: {
    encode(message: QueryGetValidatorsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetValidatorsRequest;
    fromPartial(object: DeepPartial<QueryGetValidatorsRequest>): QueryGetValidatorsRequest;
};
export declare const QueryGetValidatorsResponse: {
    encode(message: QueryGetValidatorsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetValidatorsResponse;
    fromPartial(object: DeepPartial<QueryGetValidatorsResponse>): QueryGetValidatorsResponse;
};
export declare const QueryGetICAAccountRequest: {
    encode(_: QueryGetICAAccountRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetICAAccountRequest;
    fromPartial(_: DeepPartial<QueryGetICAAccountRequest>): QueryGetICAAccountRequest;
};
export declare const QueryGetICAAccountResponse: {
    encode(message: QueryGetICAAccountResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetICAAccountResponse;
    fromPartial(object: DeepPartial<QueryGetICAAccountResponse>): QueryGetICAAccountResponse;
};
export declare const QueryGetHostZoneRequest: {
    encode(message: QueryGetHostZoneRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetHostZoneRequest;
    fromPartial(object: DeepPartial<QueryGetHostZoneRequest>): QueryGetHostZoneRequest;
};
export declare const QueryGetHostZoneResponse: {
    encode(message: QueryGetHostZoneResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetHostZoneResponse;
    fromPartial(object: DeepPartial<QueryGetHostZoneResponse>): QueryGetHostZoneResponse;
};
export declare const QueryAllHostZoneRequest: {
    encode(message: QueryAllHostZoneRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllHostZoneRequest;
    fromPartial(object: DeepPartial<QueryAllHostZoneRequest>): QueryAllHostZoneRequest;
};
export declare const QueryAllHostZoneResponse: {
    encode(message: QueryAllHostZoneResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllHostZoneResponse;
    fromPartial(object: DeepPartial<QueryAllHostZoneResponse>): QueryAllHostZoneResponse;
};
export declare const QueryModuleAddressRequest: {
    encode(message: QueryModuleAddressRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryModuleAddressRequest;
    fromPartial(object: DeepPartial<QueryModuleAddressRequest>): QueryModuleAddressRequest;
};
export declare const QueryModuleAddressResponse: {
    encode(message: QueryModuleAddressResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryModuleAddressResponse;
    fromPartial(object: DeepPartial<QueryModuleAddressResponse>): QueryModuleAddressResponse;
};
export declare const QueryGetEpochTrackerRequest: {
    encode(message: QueryGetEpochTrackerRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetEpochTrackerRequest;
    fromPartial(object: DeepPartial<QueryGetEpochTrackerRequest>): QueryGetEpochTrackerRequest;
};
export declare const QueryGetEpochTrackerResponse: {
    encode(message: QueryGetEpochTrackerResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetEpochTrackerResponse;
    fromPartial(object: DeepPartial<QueryGetEpochTrackerResponse>): QueryGetEpochTrackerResponse;
};
export declare const QueryAllEpochTrackerRequest: {
    encode(message: QueryAllEpochTrackerRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllEpochTrackerRequest;
    fromPartial(object: DeepPartial<QueryAllEpochTrackerRequest>): QueryAllEpochTrackerRequest;
};
export declare const QueryAllEpochTrackerResponse: {
    encode(message: QueryAllEpochTrackerResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllEpochTrackerResponse;
    fromPartial(object: DeepPartial<QueryAllEpochTrackerResponse>): QueryAllEpochTrackerResponse;
};
