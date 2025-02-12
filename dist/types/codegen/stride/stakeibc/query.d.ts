import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Validator, ValidatorAmino, ValidatorSDKType } from "./validator";
import { HostZone, HostZoneAmino, HostZoneSDKType } from "./host_zone";
import { EpochTracker, EpochTrackerAmino, EpochTrackerSDKType } from "./epoch_tracker";
import { AddressUnbonding, AddressUnbondingAmino, AddressUnbondingSDKType } from "./address_unbonding";
import { TradeRoute, TradeRouteAmino, TradeRouteSDKType } from "./trade_route";
import { BinaryReader, BinaryWriter } from "../../binary";
/**
 * QueryInterchainAccountFromAddressRequest is the request type for the
 * Query/InterchainAccountAddress RPC
 */
export interface QueryInterchainAccountFromAddressRequest {
    owner: string;
    connectionId: string;
}
export interface QueryInterchainAccountFromAddressRequestProtoMsg {
    typeUrl: "/stride.stakeibc.QueryInterchainAccountFromAddressRequest";
    value: Uint8Array;
}
/**
 * QueryInterchainAccountFromAddressRequest is the request type for the
 * Query/InterchainAccountAddress RPC
 */
export interface QueryInterchainAccountFromAddressRequestAmino {
    owner?: string;
    connection_id?: string;
}
export interface QueryInterchainAccountFromAddressRequestAminoMsg {
    type: "/stride.stakeibc.QueryInterchainAccountFromAddressRequest";
    value: QueryInterchainAccountFromAddressRequestAmino;
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
export interface QueryInterchainAccountFromAddressResponseProtoMsg {
    typeUrl: "/stride.stakeibc.QueryInterchainAccountFromAddressResponse";
    value: Uint8Array;
}
/**
 * QueryInterchainAccountFromAddressResponse the response type for the
 * Query/InterchainAccountAddress RPC
 */
export interface QueryInterchainAccountFromAddressResponseAmino {
    interchain_account_address?: string;
}
export interface QueryInterchainAccountFromAddressResponseAminoMsg {
    type: "/stride.stakeibc.QueryInterchainAccountFromAddressResponse";
    value: QueryInterchainAccountFromAddressResponseAmino;
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
export interface QueryParamsRequestProtoMsg {
    typeUrl: "/stride.stakeibc.QueryParamsRequest";
    value: Uint8Array;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {
}
export interface QueryParamsRequestAminoMsg {
    type: "/stride.stakeibc.QueryParamsRequest";
    value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params holds all the parameters of this module. */
    params: Params;
}
export interface QueryParamsResponseProtoMsg {
    typeUrl: "/stride.stakeibc.QueryParamsResponse";
    value: Uint8Array;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
    /** params holds all the parameters of this module. */
    params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
    type: "/stride.stakeibc.QueryParamsResponse";
    value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
    params: ParamsSDKType;
}
export interface QueryGetValidatorsRequest {
    chainId: string;
}
export interface QueryGetValidatorsRequestProtoMsg {
    typeUrl: "/stride.stakeibc.QueryGetValidatorsRequest";
    value: Uint8Array;
}
export interface QueryGetValidatorsRequestAmino {
    chain_id?: string;
}
export interface QueryGetValidatorsRequestAminoMsg {
    type: "/stride.stakeibc.QueryGetValidatorsRequest";
    value: QueryGetValidatorsRequestAmino;
}
export interface QueryGetValidatorsRequestSDKType {
    chain_id: string;
}
export interface QueryGetValidatorsResponse {
    validators: Validator[];
}
export interface QueryGetValidatorsResponseProtoMsg {
    typeUrl: "/stride.stakeibc.QueryGetValidatorsResponse";
    value: Uint8Array;
}
export interface QueryGetValidatorsResponseAmino {
    validators?: ValidatorAmino[];
}
export interface QueryGetValidatorsResponseAminoMsg {
    type: "/stride.stakeibc.QueryGetValidatorsResponse";
    value: QueryGetValidatorsResponseAmino;
}
export interface QueryGetValidatorsResponseSDKType {
    validators: ValidatorSDKType[];
}
export interface QueryGetHostZoneRequest {
    chainId: string;
}
export interface QueryGetHostZoneRequestProtoMsg {
    typeUrl: "/stride.stakeibc.QueryGetHostZoneRequest";
    value: Uint8Array;
}
export interface QueryGetHostZoneRequestAmino {
    chain_id?: string;
}
export interface QueryGetHostZoneRequestAminoMsg {
    type: "/stride.stakeibc.QueryGetHostZoneRequest";
    value: QueryGetHostZoneRequestAmino;
}
export interface QueryGetHostZoneRequestSDKType {
    chain_id: string;
}
export interface QueryGetHostZoneResponse {
    hostZone: HostZone;
}
export interface QueryGetHostZoneResponseProtoMsg {
    typeUrl: "/stride.stakeibc.QueryGetHostZoneResponse";
    value: Uint8Array;
}
export interface QueryGetHostZoneResponseAmino {
    host_zone?: HostZoneAmino;
}
export interface QueryGetHostZoneResponseAminoMsg {
    type: "/stride.stakeibc.QueryGetHostZoneResponse";
    value: QueryGetHostZoneResponseAmino;
}
export interface QueryGetHostZoneResponseSDKType {
    host_zone: HostZoneSDKType;
}
export interface QueryAllHostZoneRequest {
    pagination?: PageRequest;
}
export interface QueryAllHostZoneRequestProtoMsg {
    typeUrl: "/stride.stakeibc.QueryAllHostZoneRequest";
    value: Uint8Array;
}
export interface QueryAllHostZoneRequestAmino {
    pagination?: PageRequestAmino;
}
export interface QueryAllHostZoneRequestAminoMsg {
    type: "/stride.stakeibc.QueryAllHostZoneRequest";
    value: QueryAllHostZoneRequestAmino;
}
export interface QueryAllHostZoneRequestSDKType {
    pagination?: PageRequestSDKType;
}
export interface QueryAllHostZoneResponse {
    hostZone: HostZone[];
    pagination?: PageResponse;
}
export interface QueryAllHostZoneResponseProtoMsg {
    typeUrl: "/stride.stakeibc.QueryAllHostZoneResponse";
    value: Uint8Array;
}
export interface QueryAllHostZoneResponseAmino {
    host_zone?: HostZoneAmino[];
    pagination?: PageResponseAmino;
}
export interface QueryAllHostZoneResponseAminoMsg {
    type: "/stride.stakeibc.QueryAllHostZoneResponse";
    value: QueryAllHostZoneResponseAmino;
}
export interface QueryAllHostZoneResponseSDKType {
    host_zone: HostZoneSDKType[];
    pagination?: PageResponseSDKType;
}
export interface QueryModuleAddressRequest {
    name: string;
}
export interface QueryModuleAddressRequestProtoMsg {
    typeUrl: "/stride.stakeibc.QueryModuleAddressRequest";
    value: Uint8Array;
}
export interface QueryModuleAddressRequestAmino {
    name?: string;
}
export interface QueryModuleAddressRequestAminoMsg {
    type: "/stride.stakeibc.QueryModuleAddressRequest";
    value: QueryModuleAddressRequestAmino;
}
export interface QueryModuleAddressRequestSDKType {
    name: string;
}
export interface QueryModuleAddressResponse {
    addr: string;
}
export interface QueryModuleAddressResponseProtoMsg {
    typeUrl: "/stride.stakeibc.QueryModuleAddressResponse";
    value: Uint8Array;
}
export interface QueryModuleAddressResponseAmino {
    addr?: string;
}
export interface QueryModuleAddressResponseAminoMsg {
    type: "/stride.stakeibc.QueryModuleAddressResponse";
    value: QueryModuleAddressResponseAmino;
}
export interface QueryModuleAddressResponseSDKType {
    addr: string;
}
export interface QueryGetEpochTrackerRequest {
    epochIdentifier: string;
}
export interface QueryGetEpochTrackerRequestProtoMsg {
    typeUrl: "/stride.stakeibc.QueryGetEpochTrackerRequest";
    value: Uint8Array;
}
export interface QueryGetEpochTrackerRequestAmino {
    epoch_identifier?: string;
}
export interface QueryGetEpochTrackerRequestAminoMsg {
    type: "/stride.stakeibc.QueryGetEpochTrackerRequest";
    value: QueryGetEpochTrackerRequestAmino;
}
export interface QueryGetEpochTrackerRequestSDKType {
    epoch_identifier: string;
}
export interface QueryGetEpochTrackerResponse {
    epochTracker: EpochTracker;
}
export interface QueryGetEpochTrackerResponseProtoMsg {
    typeUrl: "/stride.stakeibc.QueryGetEpochTrackerResponse";
    value: Uint8Array;
}
export interface QueryGetEpochTrackerResponseAmino {
    epoch_tracker?: EpochTrackerAmino;
}
export interface QueryGetEpochTrackerResponseAminoMsg {
    type: "/stride.stakeibc.QueryGetEpochTrackerResponse";
    value: QueryGetEpochTrackerResponseAmino;
}
export interface QueryGetEpochTrackerResponseSDKType {
    epoch_tracker: EpochTrackerSDKType;
}
export interface QueryAllEpochTrackerRequest {
}
export interface QueryAllEpochTrackerRequestProtoMsg {
    typeUrl: "/stride.stakeibc.QueryAllEpochTrackerRequest";
    value: Uint8Array;
}
export interface QueryAllEpochTrackerRequestAmino {
}
export interface QueryAllEpochTrackerRequestAminoMsg {
    type: "/stride.stakeibc.QueryAllEpochTrackerRequest";
    value: QueryAllEpochTrackerRequestAmino;
}
export interface QueryAllEpochTrackerRequestSDKType {
}
export interface QueryAllEpochTrackerResponse {
    epochTracker: EpochTracker[];
}
export interface QueryAllEpochTrackerResponseProtoMsg {
    typeUrl: "/stride.stakeibc.QueryAllEpochTrackerResponse";
    value: Uint8Array;
}
export interface QueryAllEpochTrackerResponseAmino {
    epoch_tracker?: EpochTrackerAmino[];
}
export interface QueryAllEpochTrackerResponseAminoMsg {
    type: "/stride.stakeibc.QueryAllEpochTrackerResponse";
    value: QueryAllEpochTrackerResponseAmino;
}
export interface QueryAllEpochTrackerResponseSDKType {
    epoch_tracker: EpochTrackerSDKType[];
}
export interface QueryGetNextPacketSequenceRequest {
    channelId: string;
    portId: string;
}
export interface QueryGetNextPacketSequenceRequestProtoMsg {
    typeUrl: "/stride.stakeibc.QueryGetNextPacketSequenceRequest";
    value: Uint8Array;
}
export interface QueryGetNextPacketSequenceRequestAmino {
    channel_id?: string;
    port_id?: string;
}
export interface QueryGetNextPacketSequenceRequestAminoMsg {
    type: "/stride.stakeibc.QueryGetNextPacketSequenceRequest";
    value: QueryGetNextPacketSequenceRequestAmino;
}
export interface QueryGetNextPacketSequenceRequestSDKType {
    channel_id: string;
    port_id: string;
}
export interface QueryGetNextPacketSequenceResponse {
    sequence: bigint;
}
export interface QueryGetNextPacketSequenceResponseProtoMsg {
    typeUrl: "/stride.stakeibc.QueryGetNextPacketSequenceResponse";
    value: Uint8Array;
}
export interface QueryGetNextPacketSequenceResponseAmino {
    sequence?: string;
}
export interface QueryGetNextPacketSequenceResponseAminoMsg {
    type: "/stride.stakeibc.QueryGetNextPacketSequenceResponse";
    value: QueryGetNextPacketSequenceResponseAmino;
}
export interface QueryGetNextPacketSequenceResponseSDKType {
    sequence: bigint;
}
export interface QueryAddressUnbondings {
    address: string;
}
export interface QueryAddressUnbondingsProtoMsg {
    typeUrl: "/stride.stakeibc.QueryAddressUnbondings";
    value: Uint8Array;
}
export interface QueryAddressUnbondingsAmino {
    address?: string;
}
export interface QueryAddressUnbondingsAminoMsg {
    type: "/stride.stakeibc.QueryAddressUnbondings";
    value: QueryAddressUnbondingsAmino;
}
export interface QueryAddressUnbondingsSDKType {
    address: string;
}
export interface QueryAddressUnbondingsResponse {
    addressUnbondings: AddressUnbonding[];
}
export interface QueryAddressUnbondingsResponseProtoMsg {
    typeUrl: "/stride.stakeibc.QueryAddressUnbondingsResponse";
    value: Uint8Array;
}
export interface QueryAddressUnbondingsResponseAmino {
    address_unbondings?: AddressUnbondingAmino[];
}
export interface QueryAddressUnbondingsResponseAminoMsg {
    type: "/stride.stakeibc.QueryAddressUnbondingsResponse";
    value: QueryAddressUnbondingsResponseAmino;
}
export interface QueryAddressUnbondingsResponseSDKType {
    address_unbondings: AddressUnbondingSDKType[];
}
export interface QueryAllTradeRoutes {
}
export interface QueryAllTradeRoutesProtoMsg {
    typeUrl: "/stride.stakeibc.QueryAllTradeRoutes";
    value: Uint8Array;
}
export interface QueryAllTradeRoutesAmino {
}
export interface QueryAllTradeRoutesAminoMsg {
    type: "/stride.stakeibc.QueryAllTradeRoutes";
    value: QueryAllTradeRoutesAmino;
}
export interface QueryAllTradeRoutesSDKType {
}
export interface QueryAllTradeRoutesResponse {
    tradeRoutes: TradeRoute[];
}
export interface QueryAllTradeRoutesResponseProtoMsg {
    typeUrl: "/stride.stakeibc.QueryAllTradeRoutesResponse";
    value: Uint8Array;
}
export interface QueryAllTradeRoutesResponseAmino {
    trade_routes?: TradeRouteAmino[];
}
export interface QueryAllTradeRoutesResponseAminoMsg {
    type: "/stride.stakeibc.QueryAllTradeRoutesResponse";
    value: QueryAllTradeRoutesResponseAmino;
}
export interface QueryAllTradeRoutesResponseSDKType {
    trade_routes: TradeRouteSDKType[];
}
export declare const QueryInterchainAccountFromAddressRequest: {
    typeUrl: string;
    encode(message: QueryInterchainAccountFromAddressRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryInterchainAccountFromAddressRequest;
    fromPartial(object: Partial<QueryInterchainAccountFromAddressRequest>): QueryInterchainAccountFromAddressRequest;
    fromAmino(object: QueryInterchainAccountFromAddressRequestAmino): QueryInterchainAccountFromAddressRequest;
    toAmino(message: QueryInterchainAccountFromAddressRequest): QueryInterchainAccountFromAddressRequestAmino;
    fromAminoMsg(object: QueryInterchainAccountFromAddressRequestAminoMsg): QueryInterchainAccountFromAddressRequest;
    fromProtoMsg(message: QueryInterchainAccountFromAddressRequestProtoMsg): QueryInterchainAccountFromAddressRequest;
    toProto(message: QueryInterchainAccountFromAddressRequest): Uint8Array;
    toProtoMsg(message: QueryInterchainAccountFromAddressRequest): QueryInterchainAccountFromAddressRequestProtoMsg;
};
export declare const QueryInterchainAccountFromAddressResponse: {
    typeUrl: string;
    encode(message: QueryInterchainAccountFromAddressResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryInterchainAccountFromAddressResponse;
    fromPartial(object: Partial<QueryInterchainAccountFromAddressResponse>): QueryInterchainAccountFromAddressResponse;
    fromAmino(object: QueryInterchainAccountFromAddressResponseAmino): QueryInterchainAccountFromAddressResponse;
    toAmino(message: QueryInterchainAccountFromAddressResponse): QueryInterchainAccountFromAddressResponseAmino;
    fromAminoMsg(object: QueryInterchainAccountFromAddressResponseAminoMsg): QueryInterchainAccountFromAddressResponse;
    fromProtoMsg(message: QueryInterchainAccountFromAddressResponseProtoMsg): QueryInterchainAccountFromAddressResponse;
    toProto(message: QueryInterchainAccountFromAddressResponse): Uint8Array;
    toProtoMsg(message: QueryInterchainAccountFromAddressResponse): QueryInterchainAccountFromAddressResponseProtoMsg;
};
export declare const QueryParamsRequest: {
    typeUrl: string;
    encode(_: QueryParamsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest;
    fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest;
    fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest;
    toAmino(_: QueryParamsRequest): QueryParamsRequestAmino;
    fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest;
    fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest;
    toProto(message: QueryParamsRequest): Uint8Array;
    toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg;
};
export declare const QueryParamsResponse: {
    typeUrl: string;
    encode(message: QueryParamsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse;
    fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse;
    fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse;
    toAmino(message: QueryParamsResponse): QueryParamsResponseAmino;
    fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse;
    fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse;
    toProto(message: QueryParamsResponse): Uint8Array;
    toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg;
};
export declare const QueryGetValidatorsRequest: {
    typeUrl: string;
    encode(message: QueryGetValidatorsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryGetValidatorsRequest;
    fromPartial(object: Partial<QueryGetValidatorsRequest>): QueryGetValidatorsRequest;
    fromAmino(object: QueryGetValidatorsRequestAmino): QueryGetValidatorsRequest;
    toAmino(message: QueryGetValidatorsRequest): QueryGetValidatorsRequestAmino;
    fromAminoMsg(object: QueryGetValidatorsRequestAminoMsg): QueryGetValidatorsRequest;
    fromProtoMsg(message: QueryGetValidatorsRequestProtoMsg): QueryGetValidatorsRequest;
    toProto(message: QueryGetValidatorsRequest): Uint8Array;
    toProtoMsg(message: QueryGetValidatorsRequest): QueryGetValidatorsRequestProtoMsg;
};
export declare const QueryGetValidatorsResponse: {
    typeUrl: string;
    encode(message: QueryGetValidatorsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryGetValidatorsResponse;
    fromPartial(object: Partial<QueryGetValidatorsResponse>): QueryGetValidatorsResponse;
    fromAmino(object: QueryGetValidatorsResponseAmino): QueryGetValidatorsResponse;
    toAmino(message: QueryGetValidatorsResponse): QueryGetValidatorsResponseAmino;
    fromAminoMsg(object: QueryGetValidatorsResponseAminoMsg): QueryGetValidatorsResponse;
    fromProtoMsg(message: QueryGetValidatorsResponseProtoMsg): QueryGetValidatorsResponse;
    toProto(message: QueryGetValidatorsResponse): Uint8Array;
    toProtoMsg(message: QueryGetValidatorsResponse): QueryGetValidatorsResponseProtoMsg;
};
export declare const QueryGetHostZoneRequest: {
    typeUrl: string;
    encode(message: QueryGetHostZoneRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryGetHostZoneRequest;
    fromPartial(object: Partial<QueryGetHostZoneRequest>): QueryGetHostZoneRequest;
    fromAmino(object: QueryGetHostZoneRequestAmino): QueryGetHostZoneRequest;
    toAmino(message: QueryGetHostZoneRequest): QueryGetHostZoneRequestAmino;
    fromAminoMsg(object: QueryGetHostZoneRequestAminoMsg): QueryGetHostZoneRequest;
    fromProtoMsg(message: QueryGetHostZoneRequestProtoMsg): QueryGetHostZoneRequest;
    toProto(message: QueryGetHostZoneRequest): Uint8Array;
    toProtoMsg(message: QueryGetHostZoneRequest): QueryGetHostZoneRequestProtoMsg;
};
export declare const QueryGetHostZoneResponse: {
    typeUrl: string;
    encode(message: QueryGetHostZoneResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryGetHostZoneResponse;
    fromPartial(object: Partial<QueryGetHostZoneResponse>): QueryGetHostZoneResponse;
    fromAmino(object: QueryGetHostZoneResponseAmino): QueryGetHostZoneResponse;
    toAmino(message: QueryGetHostZoneResponse): QueryGetHostZoneResponseAmino;
    fromAminoMsg(object: QueryGetHostZoneResponseAminoMsg): QueryGetHostZoneResponse;
    fromProtoMsg(message: QueryGetHostZoneResponseProtoMsg): QueryGetHostZoneResponse;
    toProto(message: QueryGetHostZoneResponse): Uint8Array;
    toProtoMsg(message: QueryGetHostZoneResponse): QueryGetHostZoneResponseProtoMsg;
};
export declare const QueryAllHostZoneRequest: {
    typeUrl: string;
    encode(message: QueryAllHostZoneRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAllHostZoneRequest;
    fromPartial(object: Partial<QueryAllHostZoneRequest>): QueryAllHostZoneRequest;
    fromAmino(object: QueryAllHostZoneRequestAmino): QueryAllHostZoneRequest;
    toAmino(message: QueryAllHostZoneRequest): QueryAllHostZoneRequestAmino;
    fromAminoMsg(object: QueryAllHostZoneRequestAminoMsg): QueryAllHostZoneRequest;
    fromProtoMsg(message: QueryAllHostZoneRequestProtoMsg): QueryAllHostZoneRequest;
    toProto(message: QueryAllHostZoneRequest): Uint8Array;
    toProtoMsg(message: QueryAllHostZoneRequest): QueryAllHostZoneRequestProtoMsg;
};
export declare const QueryAllHostZoneResponse: {
    typeUrl: string;
    encode(message: QueryAllHostZoneResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAllHostZoneResponse;
    fromPartial(object: Partial<QueryAllHostZoneResponse>): QueryAllHostZoneResponse;
    fromAmino(object: QueryAllHostZoneResponseAmino): QueryAllHostZoneResponse;
    toAmino(message: QueryAllHostZoneResponse): QueryAllHostZoneResponseAmino;
    fromAminoMsg(object: QueryAllHostZoneResponseAminoMsg): QueryAllHostZoneResponse;
    fromProtoMsg(message: QueryAllHostZoneResponseProtoMsg): QueryAllHostZoneResponse;
    toProto(message: QueryAllHostZoneResponse): Uint8Array;
    toProtoMsg(message: QueryAllHostZoneResponse): QueryAllHostZoneResponseProtoMsg;
};
export declare const QueryModuleAddressRequest: {
    typeUrl: string;
    encode(message: QueryModuleAddressRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryModuleAddressRequest;
    fromPartial(object: Partial<QueryModuleAddressRequest>): QueryModuleAddressRequest;
    fromAmino(object: QueryModuleAddressRequestAmino): QueryModuleAddressRequest;
    toAmino(message: QueryModuleAddressRequest): QueryModuleAddressRequestAmino;
    fromAminoMsg(object: QueryModuleAddressRequestAminoMsg): QueryModuleAddressRequest;
    fromProtoMsg(message: QueryModuleAddressRequestProtoMsg): QueryModuleAddressRequest;
    toProto(message: QueryModuleAddressRequest): Uint8Array;
    toProtoMsg(message: QueryModuleAddressRequest): QueryModuleAddressRequestProtoMsg;
};
export declare const QueryModuleAddressResponse: {
    typeUrl: string;
    encode(message: QueryModuleAddressResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryModuleAddressResponse;
    fromPartial(object: Partial<QueryModuleAddressResponse>): QueryModuleAddressResponse;
    fromAmino(object: QueryModuleAddressResponseAmino): QueryModuleAddressResponse;
    toAmino(message: QueryModuleAddressResponse): QueryModuleAddressResponseAmino;
    fromAminoMsg(object: QueryModuleAddressResponseAminoMsg): QueryModuleAddressResponse;
    fromProtoMsg(message: QueryModuleAddressResponseProtoMsg): QueryModuleAddressResponse;
    toProto(message: QueryModuleAddressResponse): Uint8Array;
    toProtoMsg(message: QueryModuleAddressResponse): QueryModuleAddressResponseProtoMsg;
};
export declare const QueryGetEpochTrackerRequest: {
    typeUrl: string;
    encode(message: QueryGetEpochTrackerRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryGetEpochTrackerRequest;
    fromPartial(object: Partial<QueryGetEpochTrackerRequest>): QueryGetEpochTrackerRequest;
    fromAmino(object: QueryGetEpochTrackerRequestAmino): QueryGetEpochTrackerRequest;
    toAmino(message: QueryGetEpochTrackerRequest): QueryGetEpochTrackerRequestAmino;
    fromAminoMsg(object: QueryGetEpochTrackerRequestAminoMsg): QueryGetEpochTrackerRequest;
    fromProtoMsg(message: QueryGetEpochTrackerRequestProtoMsg): QueryGetEpochTrackerRequest;
    toProto(message: QueryGetEpochTrackerRequest): Uint8Array;
    toProtoMsg(message: QueryGetEpochTrackerRequest): QueryGetEpochTrackerRequestProtoMsg;
};
export declare const QueryGetEpochTrackerResponse: {
    typeUrl: string;
    encode(message: QueryGetEpochTrackerResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryGetEpochTrackerResponse;
    fromPartial(object: Partial<QueryGetEpochTrackerResponse>): QueryGetEpochTrackerResponse;
    fromAmino(object: QueryGetEpochTrackerResponseAmino): QueryGetEpochTrackerResponse;
    toAmino(message: QueryGetEpochTrackerResponse): QueryGetEpochTrackerResponseAmino;
    fromAminoMsg(object: QueryGetEpochTrackerResponseAminoMsg): QueryGetEpochTrackerResponse;
    fromProtoMsg(message: QueryGetEpochTrackerResponseProtoMsg): QueryGetEpochTrackerResponse;
    toProto(message: QueryGetEpochTrackerResponse): Uint8Array;
    toProtoMsg(message: QueryGetEpochTrackerResponse): QueryGetEpochTrackerResponseProtoMsg;
};
export declare const QueryAllEpochTrackerRequest: {
    typeUrl: string;
    encode(_: QueryAllEpochTrackerRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAllEpochTrackerRequest;
    fromPartial(_: Partial<QueryAllEpochTrackerRequest>): QueryAllEpochTrackerRequest;
    fromAmino(_: QueryAllEpochTrackerRequestAmino): QueryAllEpochTrackerRequest;
    toAmino(_: QueryAllEpochTrackerRequest): QueryAllEpochTrackerRequestAmino;
    fromAminoMsg(object: QueryAllEpochTrackerRequestAminoMsg): QueryAllEpochTrackerRequest;
    fromProtoMsg(message: QueryAllEpochTrackerRequestProtoMsg): QueryAllEpochTrackerRequest;
    toProto(message: QueryAllEpochTrackerRequest): Uint8Array;
    toProtoMsg(message: QueryAllEpochTrackerRequest): QueryAllEpochTrackerRequestProtoMsg;
};
export declare const QueryAllEpochTrackerResponse: {
    typeUrl: string;
    encode(message: QueryAllEpochTrackerResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAllEpochTrackerResponse;
    fromPartial(object: Partial<QueryAllEpochTrackerResponse>): QueryAllEpochTrackerResponse;
    fromAmino(object: QueryAllEpochTrackerResponseAmino): QueryAllEpochTrackerResponse;
    toAmino(message: QueryAllEpochTrackerResponse): QueryAllEpochTrackerResponseAmino;
    fromAminoMsg(object: QueryAllEpochTrackerResponseAminoMsg): QueryAllEpochTrackerResponse;
    fromProtoMsg(message: QueryAllEpochTrackerResponseProtoMsg): QueryAllEpochTrackerResponse;
    toProto(message: QueryAllEpochTrackerResponse): Uint8Array;
    toProtoMsg(message: QueryAllEpochTrackerResponse): QueryAllEpochTrackerResponseProtoMsg;
};
export declare const QueryGetNextPacketSequenceRequest: {
    typeUrl: string;
    encode(message: QueryGetNextPacketSequenceRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryGetNextPacketSequenceRequest;
    fromPartial(object: Partial<QueryGetNextPacketSequenceRequest>): QueryGetNextPacketSequenceRequest;
    fromAmino(object: QueryGetNextPacketSequenceRequestAmino): QueryGetNextPacketSequenceRequest;
    toAmino(message: QueryGetNextPacketSequenceRequest): QueryGetNextPacketSequenceRequestAmino;
    fromAminoMsg(object: QueryGetNextPacketSequenceRequestAminoMsg): QueryGetNextPacketSequenceRequest;
    fromProtoMsg(message: QueryGetNextPacketSequenceRequestProtoMsg): QueryGetNextPacketSequenceRequest;
    toProto(message: QueryGetNextPacketSequenceRequest): Uint8Array;
    toProtoMsg(message: QueryGetNextPacketSequenceRequest): QueryGetNextPacketSequenceRequestProtoMsg;
};
export declare const QueryGetNextPacketSequenceResponse: {
    typeUrl: string;
    encode(message: QueryGetNextPacketSequenceResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryGetNextPacketSequenceResponse;
    fromPartial(object: Partial<QueryGetNextPacketSequenceResponse>): QueryGetNextPacketSequenceResponse;
    fromAmino(object: QueryGetNextPacketSequenceResponseAmino): QueryGetNextPacketSequenceResponse;
    toAmino(message: QueryGetNextPacketSequenceResponse): QueryGetNextPacketSequenceResponseAmino;
    fromAminoMsg(object: QueryGetNextPacketSequenceResponseAminoMsg): QueryGetNextPacketSequenceResponse;
    fromProtoMsg(message: QueryGetNextPacketSequenceResponseProtoMsg): QueryGetNextPacketSequenceResponse;
    toProto(message: QueryGetNextPacketSequenceResponse): Uint8Array;
    toProtoMsg(message: QueryGetNextPacketSequenceResponse): QueryGetNextPacketSequenceResponseProtoMsg;
};
export declare const QueryAddressUnbondings: {
    typeUrl: string;
    encode(message: QueryAddressUnbondings, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAddressUnbondings;
    fromPartial(object: Partial<QueryAddressUnbondings>): QueryAddressUnbondings;
    fromAmino(object: QueryAddressUnbondingsAmino): QueryAddressUnbondings;
    toAmino(message: QueryAddressUnbondings): QueryAddressUnbondingsAmino;
    fromAminoMsg(object: QueryAddressUnbondingsAminoMsg): QueryAddressUnbondings;
    fromProtoMsg(message: QueryAddressUnbondingsProtoMsg): QueryAddressUnbondings;
    toProto(message: QueryAddressUnbondings): Uint8Array;
    toProtoMsg(message: QueryAddressUnbondings): QueryAddressUnbondingsProtoMsg;
};
export declare const QueryAddressUnbondingsResponse: {
    typeUrl: string;
    encode(message: QueryAddressUnbondingsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAddressUnbondingsResponse;
    fromPartial(object: Partial<QueryAddressUnbondingsResponse>): QueryAddressUnbondingsResponse;
    fromAmino(object: QueryAddressUnbondingsResponseAmino): QueryAddressUnbondingsResponse;
    toAmino(message: QueryAddressUnbondingsResponse): QueryAddressUnbondingsResponseAmino;
    fromAminoMsg(object: QueryAddressUnbondingsResponseAminoMsg): QueryAddressUnbondingsResponse;
    fromProtoMsg(message: QueryAddressUnbondingsResponseProtoMsg): QueryAddressUnbondingsResponse;
    toProto(message: QueryAddressUnbondingsResponse): Uint8Array;
    toProtoMsg(message: QueryAddressUnbondingsResponse): QueryAddressUnbondingsResponseProtoMsg;
};
export declare const QueryAllTradeRoutes: {
    typeUrl: string;
    encode(_: QueryAllTradeRoutes, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAllTradeRoutes;
    fromPartial(_: Partial<QueryAllTradeRoutes>): QueryAllTradeRoutes;
    fromAmino(_: QueryAllTradeRoutesAmino): QueryAllTradeRoutes;
    toAmino(_: QueryAllTradeRoutes): QueryAllTradeRoutesAmino;
    fromAminoMsg(object: QueryAllTradeRoutesAminoMsg): QueryAllTradeRoutes;
    fromProtoMsg(message: QueryAllTradeRoutesProtoMsg): QueryAllTradeRoutes;
    toProto(message: QueryAllTradeRoutes): Uint8Array;
    toProtoMsg(message: QueryAllTradeRoutes): QueryAllTradeRoutesProtoMsg;
};
export declare const QueryAllTradeRoutesResponse: {
    typeUrl: string;
    encode(message: QueryAllTradeRoutesResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAllTradeRoutesResponse;
    fromPartial(object: Partial<QueryAllTradeRoutesResponse>): QueryAllTradeRoutesResponse;
    fromAmino(object: QueryAllTradeRoutesResponseAmino): QueryAllTradeRoutesResponse;
    toAmino(message: QueryAllTradeRoutesResponse): QueryAllTradeRoutesResponseAmino;
    fromAminoMsg(object: QueryAllTradeRoutesResponseAminoMsg): QueryAllTradeRoutesResponse;
    fromProtoMsg(message: QueryAllTradeRoutesResponseProtoMsg): QueryAllTradeRoutesResponse;
    toProto(message: QueryAllTradeRoutesResponse): Uint8Array;
    toProtoMsg(message: QueryAllTradeRoutesResponse): QueryAllTradeRoutesResponseProtoMsg;
};
