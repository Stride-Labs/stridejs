import { Tx, TxAmino, TxSDKType } from "./tx";
import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { TxResponse, TxResponseAmino, TxResponseSDKType, GasInfo, GasInfoAmino, GasInfoSDKType, Result, ResultAmino, ResultSDKType } from "../../base/abci/v1beta1/abci";
import { BlockID, BlockIDAmino, BlockIDSDKType } from "../../../tendermint/types/types";
import { Block, BlockAmino, BlockSDKType } from "../../../tendermint/types/block";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** OrderBy defines the sorting order */
export declare enum OrderBy {
    /**
     * ORDER_BY_UNSPECIFIED - ORDER_BY_UNSPECIFIED specifies an unknown sorting order. OrderBy defaults
     * to ASC in this case.
     */
    ORDER_BY_UNSPECIFIED = 0,
    /** ORDER_BY_ASC - ORDER_BY_ASC defines ascending order */
    ORDER_BY_ASC = 1,
    /** ORDER_BY_DESC - ORDER_BY_DESC defines descending order */
    ORDER_BY_DESC = 2,
    UNRECOGNIZED = -1
}
export declare const OrderBySDKType: typeof OrderBy;
export declare const OrderByAmino: typeof OrderBy;
export declare function orderByFromJSON(object: any): OrderBy;
export declare function orderByToJSON(object: OrderBy): string;
/**
 * BroadcastMode specifies the broadcast mode for the TxService.Broadcast RPC
 * method.
 */
export declare enum BroadcastMode {
    /** BROADCAST_MODE_UNSPECIFIED - zero-value for mode ordering */
    BROADCAST_MODE_UNSPECIFIED = 0,
    /**
     * BROADCAST_MODE_BLOCK - DEPRECATED: use BROADCAST_MODE_SYNC instead,
     * BROADCAST_MODE_BLOCK is not supported by the SDK from v0.47.x onwards.
     */
    BROADCAST_MODE_BLOCK = 1,
    /**
     * BROADCAST_MODE_SYNC - BROADCAST_MODE_SYNC defines a tx broadcasting mode where the client waits
     * for a CheckTx execution response only.
     */
    BROADCAST_MODE_SYNC = 2,
    /**
     * BROADCAST_MODE_ASYNC - BROADCAST_MODE_ASYNC defines a tx broadcasting mode where the client
     * returns immediately.
     */
    BROADCAST_MODE_ASYNC = 3,
    UNRECOGNIZED = -1
}
export declare const BroadcastModeSDKType: typeof BroadcastMode;
export declare const BroadcastModeAmino: typeof BroadcastMode;
export declare function broadcastModeFromJSON(object: any): BroadcastMode;
export declare function broadcastModeToJSON(object: BroadcastMode): string;
/**
 * GetTxsEventRequest is the request type for the Service.TxsByEvents
 * RPC method.
 */
export interface GetTxsEventRequest {
    /**
     * events is the list of transaction event type.
     * Deprecated post v0.47.x: use query instead, which should contain a valid
     * events query.
     */
    /** @deprecated */
    events: string[];
    /**
     * pagination defines a pagination for the request.
     * Deprecated post v0.46.x: use page and limit instead.
     */
    /** @deprecated */
    pagination?: PageRequest;
    orderBy: OrderBy;
    /**
     * page is the page number to query, starts at 1. If not provided, will
     * default to first page.
     */
    page: bigint;
    /**
     * limit is the total number of results to be returned in the result page.
     * If left empty it will default to a value to be set by each app.
     */
    limit: bigint;
    /**
     * query defines the transaction event query that is proxied to Tendermint's
     * TxSearch RPC method. The query must be valid.
     *
     * Since cosmos-sdk 0.50
     */
    query: string;
}
export interface GetTxsEventRequestProtoMsg {
    typeUrl: "/cosmos.tx.v1beta1.GetTxsEventRequest";
    value: Uint8Array;
}
/**
 * GetTxsEventRequest is the request type for the Service.TxsByEvents
 * RPC method.
 */
export interface GetTxsEventRequestAmino {
    /**
     * events is the list of transaction event type.
     * Deprecated post v0.47.x: use query instead, which should contain a valid
     * events query.
     */
    /** @deprecated */
    events?: string[];
    /**
     * pagination defines a pagination for the request.
     * Deprecated post v0.46.x: use page and limit instead.
     */
    /** @deprecated */
    pagination?: PageRequestAmino;
    order_by?: OrderBy;
    /**
     * page is the page number to query, starts at 1. If not provided, will
     * default to first page.
     */
    page?: string;
    /**
     * limit is the total number of results to be returned in the result page.
     * If left empty it will default to a value to be set by each app.
     */
    limit?: string;
    /**
     * query defines the transaction event query that is proxied to Tendermint's
     * TxSearch RPC method. The query must be valid.
     *
     * Since cosmos-sdk 0.50
     */
    query?: string;
}
export interface GetTxsEventRequestAminoMsg {
    type: "cosmos-sdk/GetTxsEventRequest";
    value: GetTxsEventRequestAmino;
}
/**
 * GetTxsEventRequest is the request type for the Service.TxsByEvents
 * RPC method.
 */
export interface GetTxsEventRequestSDKType {
    /** @deprecated */
    events: string[];
    /** @deprecated */
    pagination?: PageRequestSDKType;
    order_by: OrderBy;
    page: bigint;
    limit: bigint;
    query: string;
}
/**
 * GetTxsEventResponse is the response type for the Service.TxsByEvents
 * RPC method.
 */
export interface GetTxsEventResponse {
    /** txs is the list of queried transactions. */
    txs: Tx[];
    /** tx_responses is the list of queried TxResponses. */
    txResponses: TxResponse[];
    /**
     * pagination defines a pagination for the response.
     * Deprecated post v0.46.x: use total instead.
     */
    /** @deprecated */
    pagination?: PageResponse;
    /** total is total number of results available */
    total: bigint;
}
export interface GetTxsEventResponseProtoMsg {
    typeUrl: "/cosmos.tx.v1beta1.GetTxsEventResponse";
    value: Uint8Array;
}
/**
 * GetTxsEventResponse is the response type for the Service.TxsByEvents
 * RPC method.
 */
export interface GetTxsEventResponseAmino {
    /** txs is the list of queried transactions. */
    txs?: TxAmino[];
    /** tx_responses is the list of queried TxResponses. */
    tx_responses?: TxResponseAmino[];
    /**
     * pagination defines a pagination for the response.
     * Deprecated post v0.46.x: use total instead.
     */
    /** @deprecated */
    pagination?: PageResponseAmino;
    /** total is total number of results available */
    total?: string;
}
export interface GetTxsEventResponseAminoMsg {
    type: "cosmos-sdk/GetTxsEventResponse";
    value: GetTxsEventResponseAmino;
}
/**
 * GetTxsEventResponse is the response type for the Service.TxsByEvents
 * RPC method.
 */
export interface GetTxsEventResponseSDKType {
    txs: TxSDKType[];
    tx_responses: TxResponseSDKType[];
    /** @deprecated */
    pagination?: PageResponseSDKType;
    total: bigint;
}
/**
 * BroadcastTxRequest is the request type for the Service.BroadcastTxRequest
 * RPC method.
 */
export interface BroadcastTxRequest {
    /** tx_bytes is the raw transaction. */
    txBytes: Uint8Array;
    mode: BroadcastMode;
}
export interface BroadcastTxRequestProtoMsg {
    typeUrl: "/cosmos.tx.v1beta1.BroadcastTxRequest";
    value: Uint8Array;
}
/**
 * BroadcastTxRequest is the request type for the Service.BroadcastTxRequest
 * RPC method.
 */
export interface BroadcastTxRequestAmino {
    /** tx_bytes is the raw transaction. */
    tx_bytes?: string;
    mode?: BroadcastMode;
}
export interface BroadcastTxRequestAminoMsg {
    type: "cosmos-sdk/BroadcastTxRequest";
    value: BroadcastTxRequestAmino;
}
/**
 * BroadcastTxRequest is the request type for the Service.BroadcastTxRequest
 * RPC method.
 */
export interface BroadcastTxRequestSDKType {
    tx_bytes: Uint8Array;
    mode: BroadcastMode;
}
/**
 * BroadcastTxResponse is the response type for the
 * Service.BroadcastTx method.
 */
export interface BroadcastTxResponse {
    /** tx_response is the queried TxResponses. */
    txResponse?: TxResponse;
}
export interface BroadcastTxResponseProtoMsg {
    typeUrl: "/cosmos.tx.v1beta1.BroadcastTxResponse";
    value: Uint8Array;
}
/**
 * BroadcastTxResponse is the response type for the
 * Service.BroadcastTx method.
 */
export interface BroadcastTxResponseAmino {
    /** tx_response is the queried TxResponses. */
    tx_response?: TxResponseAmino;
}
export interface BroadcastTxResponseAminoMsg {
    type: "cosmos-sdk/BroadcastTxResponse";
    value: BroadcastTxResponseAmino;
}
/**
 * BroadcastTxResponse is the response type for the
 * Service.BroadcastTx method.
 */
export interface BroadcastTxResponseSDKType {
    tx_response?: TxResponseSDKType;
}
/**
 * SimulateRequest is the request type for the Service.Simulate
 * RPC method.
 */
export interface SimulateRequest {
    /**
     * tx is the transaction to simulate.
     * Deprecated. Send raw tx bytes instead.
     */
    /** @deprecated */
    tx?: Tx;
    /**
     * tx_bytes is the raw transaction.
     *
     * Since: cosmos-sdk 0.43
     */
    txBytes: Uint8Array;
}
export interface SimulateRequestProtoMsg {
    typeUrl: "/cosmos.tx.v1beta1.SimulateRequest";
    value: Uint8Array;
}
/**
 * SimulateRequest is the request type for the Service.Simulate
 * RPC method.
 */
export interface SimulateRequestAmino {
    /**
     * tx is the transaction to simulate.
     * Deprecated. Send raw tx bytes instead.
     */
    /** @deprecated */
    tx?: TxAmino;
    /**
     * tx_bytes is the raw transaction.
     *
     * Since: cosmos-sdk 0.43
     */
    tx_bytes?: string;
}
export interface SimulateRequestAminoMsg {
    type: "cosmos-sdk/SimulateRequest";
    value: SimulateRequestAmino;
}
/**
 * SimulateRequest is the request type for the Service.Simulate
 * RPC method.
 */
export interface SimulateRequestSDKType {
    /** @deprecated */
    tx?: TxSDKType;
    tx_bytes: Uint8Array;
}
/**
 * SimulateResponse is the response type for the
 * Service.SimulateRPC method.
 */
export interface SimulateResponse {
    /** gas_info is the information about gas used in the simulation. */
    gasInfo?: GasInfo;
    /** result is the result of the simulation. */
    result?: Result;
}
export interface SimulateResponseProtoMsg {
    typeUrl: "/cosmos.tx.v1beta1.SimulateResponse";
    value: Uint8Array;
}
/**
 * SimulateResponse is the response type for the
 * Service.SimulateRPC method.
 */
export interface SimulateResponseAmino {
    /** gas_info is the information about gas used in the simulation. */
    gas_info?: GasInfoAmino;
    /** result is the result of the simulation. */
    result?: ResultAmino;
}
export interface SimulateResponseAminoMsg {
    type: "cosmos-sdk/SimulateResponse";
    value: SimulateResponseAmino;
}
/**
 * SimulateResponse is the response type for the
 * Service.SimulateRPC method.
 */
export interface SimulateResponseSDKType {
    gas_info?: GasInfoSDKType;
    result?: ResultSDKType;
}
/**
 * GetTxRequest is the request type for the Service.GetTx
 * RPC method.
 */
export interface GetTxRequest {
    /** hash is the tx hash to query, encoded as a hex string. */
    hash: string;
}
export interface GetTxRequestProtoMsg {
    typeUrl: "/cosmos.tx.v1beta1.GetTxRequest";
    value: Uint8Array;
}
/**
 * GetTxRequest is the request type for the Service.GetTx
 * RPC method.
 */
export interface GetTxRequestAmino {
    /** hash is the tx hash to query, encoded as a hex string. */
    hash?: string;
}
export interface GetTxRequestAminoMsg {
    type: "cosmos-sdk/GetTxRequest";
    value: GetTxRequestAmino;
}
/**
 * GetTxRequest is the request type for the Service.GetTx
 * RPC method.
 */
export interface GetTxRequestSDKType {
    hash: string;
}
/** GetTxResponse is the response type for the Service.GetTx method. */
export interface GetTxResponse {
    /** tx is the queried transaction. */
    tx?: Tx;
    /** tx_response is the queried TxResponses. */
    txResponse?: TxResponse;
}
export interface GetTxResponseProtoMsg {
    typeUrl: "/cosmos.tx.v1beta1.GetTxResponse";
    value: Uint8Array;
}
/** GetTxResponse is the response type for the Service.GetTx method. */
export interface GetTxResponseAmino {
    /** tx is the queried transaction. */
    tx?: TxAmino;
    /** tx_response is the queried TxResponses. */
    tx_response?: TxResponseAmino;
}
export interface GetTxResponseAminoMsg {
    type: "cosmos-sdk/GetTxResponse";
    value: GetTxResponseAmino;
}
/** GetTxResponse is the response type for the Service.GetTx method. */
export interface GetTxResponseSDKType {
    tx?: TxSDKType;
    tx_response?: TxResponseSDKType;
}
/**
 * GetBlockWithTxsRequest is the request type for the Service.GetBlockWithTxs
 * RPC method.
 *
 * Since: cosmos-sdk 0.45.2
 */
export interface GetBlockWithTxsRequest {
    /** height is the height of the block to query. */
    height: bigint;
    /** pagination defines a pagination for the request. */
    pagination?: PageRequest;
}
export interface GetBlockWithTxsRequestProtoMsg {
    typeUrl: "/cosmos.tx.v1beta1.GetBlockWithTxsRequest";
    value: Uint8Array;
}
/**
 * GetBlockWithTxsRequest is the request type for the Service.GetBlockWithTxs
 * RPC method.
 *
 * Since: cosmos-sdk 0.45.2
 */
export interface GetBlockWithTxsRequestAmino {
    /** height is the height of the block to query. */
    height?: string;
    /** pagination defines a pagination for the request. */
    pagination?: PageRequestAmino;
}
export interface GetBlockWithTxsRequestAminoMsg {
    type: "cosmos-sdk/GetBlockWithTxsRequest";
    value: GetBlockWithTxsRequestAmino;
}
/**
 * GetBlockWithTxsRequest is the request type for the Service.GetBlockWithTxs
 * RPC method.
 *
 * Since: cosmos-sdk 0.45.2
 */
export interface GetBlockWithTxsRequestSDKType {
    height: bigint;
    pagination?: PageRequestSDKType;
}
/**
 * GetBlockWithTxsResponse is the response type for the Service.GetBlockWithTxs
 * method.
 *
 * Since: cosmos-sdk 0.45.2
 */
export interface GetBlockWithTxsResponse {
    /** txs are the transactions in the block. */
    txs: Tx[];
    blockId?: BlockID;
    block?: Block;
    /** pagination defines a pagination for the response. */
    pagination?: PageResponse;
}
export interface GetBlockWithTxsResponseProtoMsg {
    typeUrl: "/cosmos.tx.v1beta1.GetBlockWithTxsResponse";
    value: Uint8Array;
}
/**
 * GetBlockWithTxsResponse is the response type for the Service.GetBlockWithTxs
 * method.
 *
 * Since: cosmos-sdk 0.45.2
 */
export interface GetBlockWithTxsResponseAmino {
    /** txs are the transactions in the block. */
    txs?: TxAmino[];
    block_id?: BlockIDAmino;
    block?: BlockAmino;
    /** pagination defines a pagination for the response. */
    pagination?: PageResponseAmino;
}
export interface GetBlockWithTxsResponseAminoMsg {
    type: "cosmos-sdk/GetBlockWithTxsResponse";
    value: GetBlockWithTxsResponseAmino;
}
/**
 * GetBlockWithTxsResponse is the response type for the Service.GetBlockWithTxs
 * method.
 *
 * Since: cosmos-sdk 0.45.2
 */
export interface GetBlockWithTxsResponseSDKType {
    txs: TxSDKType[];
    block_id?: BlockIDSDKType;
    block?: BlockSDKType;
    pagination?: PageResponseSDKType;
}
/**
 * TxDecodeRequest is the request type for the Service.TxDecode
 * RPC method.
 *
 * Since: cosmos-sdk 0.47
 */
export interface TxDecodeRequest {
    /** tx_bytes is the raw transaction. */
    txBytes: Uint8Array;
}
export interface TxDecodeRequestProtoMsg {
    typeUrl: "/cosmos.tx.v1beta1.TxDecodeRequest";
    value: Uint8Array;
}
/**
 * TxDecodeRequest is the request type for the Service.TxDecode
 * RPC method.
 *
 * Since: cosmos-sdk 0.47
 */
export interface TxDecodeRequestAmino {
    /** tx_bytes is the raw transaction. */
    tx_bytes?: string;
}
export interface TxDecodeRequestAminoMsg {
    type: "cosmos-sdk/TxDecodeRequest";
    value: TxDecodeRequestAmino;
}
/**
 * TxDecodeRequest is the request type for the Service.TxDecode
 * RPC method.
 *
 * Since: cosmos-sdk 0.47
 */
export interface TxDecodeRequestSDKType {
    tx_bytes: Uint8Array;
}
/**
 * TxDecodeResponse is the response type for the
 * Service.TxDecode method.
 *
 * Since: cosmos-sdk 0.47
 */
export interface TxDecodeResponse {
    /** tx is the decoded transaction. */
    tx?: Tx;
}
export interface TxDecodeResponseProtoMsg {
    typeUrl: "/cosmos.tx.v1beta1.TxDecodeResponse";
    value: Uint8Array;
}
/**
 * TxDecodeResponse is the response type for the
 * Service.TxDecode method.
 *
 * Since: cosmos-sdk 0.47
 */
export interface TxDecodeResponseAmino {
    /** tx is the decoded transaction. */
    tx?: TxAmino;
}
export interface TxDecodeResponseAminoMsg {
    type: "cosmos-sdk/TxDecodeResponse";
    value: TxDecodeResponseAmino;
}
/**
 * TxDecodeResponse is the response type for the
 * Service.TxDecode method.
 *
 * Since: cosmos-sdk 0.47
 */
export interface TxDecodeResponseSDKType {
    tx?: TxSDKType;
}
/**
 * TxEncodeRequest is the request type for the Service.TxEncode
 * RPC method.
 *
 * Since: cosmos-sdk 0.47
 */
export interface TxEncodeRequest {
    /** tx is the transaction to encode. */
    tx?: Tx;
}
export interface TxEncodeRequestProtoMsg {
    typeUrl: "/cosmos.tx.v1beta1.TxEncodeRequest";
    value: Uint8Array;
}
/**
 * TxEncodeRequest is the request type for the Service.TxEncode
 * RPC method.
 *
 * Since: cosmos-sdk 0.47
 */
export interface TxEncodeRequestAmino {
    /** tx is the transaction to encode. */
    tx?: TxAmino;
}
export interface TxEncodeRequestAminoMsg {
    type: "cosmos-sdk/TxEncodeRequest";
    value: TxEncodeRequestAmino;
}
/**
 * TxEncodeRequest is the request type for the Service.TxEncode
 * RPC method.
 *
 * Since: cosmos-sdk 0.47
 */
export interface TxEncodeRequestSDKType {
    tx?: TxSDKType;
}
/**
 * TxEncodeResponse is the response type for the
 * Service.TxEncode method.
 *
 * Since: cosmos-sdk 0.47
 */
export interface TxEncodeResponse {
    /** tx_bytes is the encoded transaction bytes. */
    txBytes: Uint8Array;
}
export interface TxEncodeResponseProtoMsg {
    typeUrl: "/cosmos.tx.v1beta1.TxEncodeResponse";
    value: Uint8Array;
}
/**
 * TxEncodeResponse is the response type for the
 * Service.TxEncode method.
 *
 * Since: cosmos-sdk 0.47
 */
export interface TxEncodeResponseAmino {
    /** tx_bytes is the encoded transaction bytes. */
    tx_bytes?: string;
}
export interface TxEncodeResponseAminoMsg {
    type: "cosmos-sdk/TxEncodeResponse";
    value: TxEncodeResponseAmino;
}
/**
 * TxEncodeResponse is the response type for the
 * Service.TxEncode method.
 *
 * Since: cosmos-sdk 0.47
 */
export interface TxEncodeResponseSDKType {
    tx_bytes: Uint8Array;
}
/**
 * TxEncodeAminoRequest is the request type for the Service.TxEncodeAmino
 * RPC method.
 *
 * Since: cosmos-sdk 0.47
 */
export interface TxEncodeAminoRequest {
    aminoJson: string;
}
export interface TxEncodeAminoRequestProtoMsg {
    typeUrl: "/cosmos.tx.v1beta1.TxEncodeAminoRequest";
    value: Uint8Array;
}
/**
 * TxEncodeAminoRequest is the request type for the Service.TxEncodeAmino
 * RPC method.
 *
 * Since: cosmos-sdk 0.47
 */
export interface TxEncodeAminoRequestAmino {
    amino_json?: string;
}
export interface TxEncodeAminoRequestAminoMsg {
    type: "cosmos-sdk/TxEncodeAminoRequest";
    value: TxEncodeAminoRequestAmino;
}
/**
 * TxEncodeAminoRequest is the request type for the Service.TxEncodeAmino
 * RPC method.
 *
 * Since: cosmos-sdk 0.47
 */
export interface TxEncodeAminoRequestSDKType {
    amino_json: string;
}
/**
 * TxEncodeAminoResponse is the response type for the Service.TxEncodeAmino
 * RPC method.
 *
 * Since: cosmos-sdk 0.47
 */
export interface TxEncodeAminoResponse {
    aminoBinary: Uint8Array;
}
export interface TxEncodeAminoResponseProtoMsg {
    typeUrl: "/cosmos.tx.v1beta1.TxEncodeAminoResponse";
    value: Uint8Array;
}
/**
 * TxEncodeAminoResponse is the response type for the Service.TxEncodeAmino
 * RPC method.
 *
 * Since: cosmos-sdk 0.47
 */
export interface TxEncodeAminoResponseAmino {
    amino_binary?: string;
}
export interface TxEncodeAminoResponseAminoMsg {
    type: "cosmos-sdk/TxEncodeAminoResponse";
    value: TxEncodeAminoResponseAmino;
}
/**
 * TxEncodeAminoResponse is the response type for the Service.TxEncodeAmino
 * RPC method.
 *
 * Since: cosmos-sdk 0.47
 */
export interface TxEncodeAminoResponseSDKType {
    amino_binary: Uint8Array;
}
/**
 * TxDecodeAminoRequest is the request type for the Service.TxDecodeAmino
 * RPC method.
 *
 * Since: cosmos-sdk 0.47
 */
export interface TxDecodeAminoRequest {
    aminoBinary: Uint8Array;
}
export interface TxDecodeAminoRequestProtoMsg {
    typeUrl: "/cosmos.tx.v1beta1.TxDecodeAminoRequest";
    value: Uint8Array;
}
/**
 * TxDecodeAminoRequest is the request type for the Service.TxDecodeAmino
 * RPC method.
 *
 * Since: cosmos-sdk 0.47
 */
export interface TxDecodeAminoRequestAmino {
    amino_binary?: string;
}
export interface TxDecodeAminoRequestAminoMsg {
    type: "cosmos-sdk/TxDecodeAminoRequest";
    value: TxDecodeAminoRequestAmino;
}
/**
 * TxDecodeAminoRequest is the request type for the Service.TxDecodeAmino
 * RPC method.
 *
 * Since: cosmos-sdk 0.47
 */
export interface TxDecodeAminoRequestSDKType {
    amino_binary: Uint8Array;
}
/**
 * TxDecodeAminoResponse is the response type for the Service.TxDecodeAmino
 * RPC method.
 *
 * Since: cosmos-sdk 0.47
 */
export interface TxDecodeAminoResponse {
    aminoJson: string;
}
export interface TxDecodeAminoResponseProtoMsg {
    typeUrl: "/cosmos.tx.v1beta1.TxDecodeAminoResponse";
    value: Uint8Array;
}
/**
 * TxDecodeAminoResponse is the response type for the Service.TxDecodeAmino
 * RPC method.
 *
 * Since: cosmos-sdk 0.47
 */
export interface TxDecodeAminoResponseAmino {
    amino_json?: string;
}
export interface TxDecodeAminoResponseAminoMsg {
    type: "cosmos-sdk/TxDecodeAminoResponse";
    value: TxDecodeAminoResponseAmino;
}
/**
 * TxDecodeAminoResponse is the response type for the Service.TxDecodeAmino
 * RPC method.
 *
 * Since: cosmos-sdk 0.47
 */
export interface TxDecodeAminoResponseSDKType {
    amino_json: string;
}
export declare const GetTxsEventRequest: {
    typeUrl: string;
    encode(message: GetTxsEventRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GetTxsEventRequest;
    fromPartial(object: Partial<GetTxsEventRequest>): GetTxsEventRequest;
    fromAmino(object: GetTxsEventRequestAmino): GetTxsEventRequest;
    toAmino(message: GetTxsEventRequest): GetTxsEventRequestAmino;
    fromAminoMsg(object: GetTxsEventRequestAminoMsg): GetTxsEventRequest;
    toAminoMsg(message: GetTxsEventRequest): GetTxsEventRequestAminoMsg;
    fromProtoMsg(message: GetTxsEventRequestProtoMsg): GetTxsEventRequest;
    toProto(message: GetTxsEventRequest): Uint8Array;
    toProtoMsg(message: GetTxsEventRequest): GetTxsEventRequestProtoMsg;
};
export declare const GetTxsEventResponse: {
    typeUrl: string;
    encode(message: GetTxsEventResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GetTxsEventResponse;
    fromPartial(object: Partial<GetTxsEventResponse>): GetTxsEventResponse;
    fromAmino(object: GetTxsEventResponseAmino): GetTxsEventResponse;
    toAmino(message: GetTxsEventResponse): GetTxsEventResponseAmino;
    fromAminoMsg(object: GetTxsEventResponseAminoMsg): GetTxsEventResponse;
    toAminoMsg(message: GetTxsEventResponse): GetTxsEventResponseAminoMsg;
    fromProtoMsg(message: GetTxsEventResponseProtoMsg): GetTxsEventResponse;
    toProto(message: GetTxsEventResponse): Uint8Array;
    toProtoMsg(message: GetTxsEventResponse): GetTxsEventResponseProtoMsg;
};
export declare const BroadcastTxRequest: {
    typeUrl: string;
    encode(message: BroadcastTxRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): BroadcastTxRequest;
    fromPartial(object: Partial<BroadcastTxRequest>): BroadcastTxRequest;
    fromAmino(object: BroadcastTxRequestAmino): BroadcastTxRequest;
    toAmino(message: BroadcastTxRequest): BroadcastTxRequestAmino;
    fromAminoMsg(object: BroadcastTxRequestAminoMsg): BroadcastTxRequest;
    toAminoMsg(message: BroadcastTxRequest): BroadcastTxRequestAminoMsg;
    fromProtoMsg(message: BroadcastTxRequestProtoMsg): BroadcastTxRequest;
    toProto(message: BroadcastTxRequest): Uint8Array;
    toProtoMsg(message: BroadcastTxRequest): BroadcastTxRequestProtoMsg;
};
export declare const BroadcastTxResponse: {
    typeUrl: string;
    encode(message: BroadcastTxResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): BroadcastTxResponse;
    fromPartial(object: Partial<BroadcastTxResponse>): BroadcastTxResponse;
    fromAmino(object: BroadcastTxResponseAmino): BroadcastTxResponse;
    toAmino(message: BroadcastTxResponse): BroadcastTxResponseAmino;
    fromAminoMsg(object: BroadcastTxResponseAminoMsg): BroadcastTxResponse;
    toAminoMsg(message: BroadcastTxResponse): BroadcastTxResponseAminoMsg;
    fromProtoMsg(message: BroadcastTxResponseProtoMsg): BroadcastTxResponse;
    toProto(message: BroadcastTxResponse): Uint8Array;
    toProtoMsg(message: BroadcastTxResponse): BroadcastTxResponseProtoMsg;
};
export declare const SimulateRequest: {
    typeUrl: string;
    encode(message: SimulateRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): SimulateRequest;
    fromPartial(object: Partial<SimulateRequest>): SimulateRequest;
    fromAmino(object: SimulateRequestAmino): SimulateRequest;
    toAmino(message: SimulateRequest): SimulateRequestAmino;
    fromAminoMsg(object: SimulateRequestAminoMsg): SimulateRequest;
    toAminoMsg(message: SimulateRequest): SimulateRequestAminoMsg;
    fromProtoMsg(message: SimulateRequestProtoMsg): SimulateRequest;
    toProto(message: SimulateRequest): Uint8Array;
    toProtoMsg(message: SimulateRequest): SimulateRequestProtoMsg;
};
export declare const SimulateResponse: {
    typeUrl: string;
    encode(message: SimulateResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): SimulateResponse;
    fromPartial(object: Partial<SimulateResponse>): SimulateResponse;
    fromAmino(object: SimulateResponseAmino): SimulateResponse;
    toAmino(message: SimulateResponse): SimulateResponseAmino;
    fromAminoMsg(object: SimulateResponseAminoMsg): SimulateResponse;
    toAminoMsg(message: SimulateResponse): SimulateResponseAminoMsg;
    fromProtoMsg(message: SimulateResponseProtoMsg): SimulateResponse;
    toProto(message: SimulateResponse): Uint8Array;
    toProtoMsg(message: SimulateResponse): SimulateResponseProtoMsg;
};
export declare const GetTxRequest: {
    typeUrl: string;
    encode(message: GetTxRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GetTxRequest;
    fromPartial(object: Partial<GetTxRequest>): GetTxRequest;
    fromAmino(object: GetTxRequestAmino): GetTxRequest;
    toAmino(message: GetTxRequest): GetTxRequestAmino;
    fromAminoMsg(object: GetTxRequestAminoMsg): GetTxRequest;
    toAminoMsg(message: GetTxRequest): GetTxRequestAminoMsg;
    fromProtoMsg(message: GetTxRequestProtoMsg): GetTxRequest;
    toProto(message: GetTxRequest): Uint8Array;
    toProtoMsg(message: GetTxRequest): GetTxRequestProtoMsg;
};
export declare const GetTxResponse: {
    typeUrl: string;
    encode(message: GetTxResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GetTxResponse;
    fromPartial(object: Partial<GetTxResponse>): GetTxResponse;
    fromAmino(object: GetTxResponseAmino): GetTxResponse;
    toAmino(message: GetTxResponse): GetTxResponseAmino;
    fromAminoMsg(object: GetTxResponseAminoMsg): GetTxResponse;
    toAminoMsg(message: GetTxResponse): GetTxResponseAminoMsg;
    fromProtoMsg(message: GetTxResponseProtoMsg): GetTxResponse;
    toProto(message: GetTxResponse): Uint8Array;
    toProtoMsg(message: GetTxResponse): GetTxResponseProtoMsg;
};
export declare const GetBlockWithTxsRequest: {
    typeUrl: string;
    encode(message: GetBlockWithTxsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GetBlockWithTxsRequest;
    fromPartial(object: Partial<GetBlockWithTxsRequest>): GetBlockWithTxsRequest;
    fromAmino(object: GetBlockWithTxsRequestAmino): GetBlockWithTxsRequest;
    toAmino(message: GetBlockWithTxsRequest): GetBlockWithTxsRequestAmino;
    fromAminoMsg(object: GetBlockWithTxsRequestAminoMsg): GetBlockWithTxsRequest;
    toAminoMsg(message: GetBlockWithTxsRequest): GetBlockWithTxsRequestAminoMsg;
    fromProtoMsg(message: GetBlockWithTxsRequestProtoMsg): GetBlockWithTxsRequest;
    toProto(message: GetBlockWithTxsRequest): Uint8Array;
    toProtoMsg(message: GetBlockWithTxsRequest): GetBlockWithTxsRequestProtoMsg;
};
export declare const GetBlockWithTxsResponse: {
    typeUrl: string;
    encode(message: GetBlockWithTxsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GetBlockWithTxsResponse;
    fromPartial(object: Partial<GetBlockWithTxsResponse>): GetBlockWithTxsResponse;
    fromAmino(object: GetBlockWithTxsResponseAmino): GetBlockWithTxsResponse;
    toAmino(message: GetBlockWithTxsResponse): GetBlockWithTxsResponseAmino;
    fromAminoMsg(object: GetBlockWithTxsResponseAminoMsg): GetBlockWithTxsResponse;
    toAminoMsg(message: GetBlockWithTxsResponse): GetBlockWithTxsResponseAminoMsg;
    fromProtoMsg(message: GetBlockWithTxsResponseProtoMsg): GetBlockWithTxsResponse;
    toProto(message: GetBlockWithTxsResponse): Uint8Array;
    toProtoMsg(message: GetBlockWithTxsResponse): GetBlockWithTxsResponseProtoMsg;
};
export declare const TxDecodeRequest: {
    typeUrl: string;
    encode(message: TxDecodeRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): TxDecodeRequest;
    fromPartial(object: Partial<TxDecodeRequest>): TxDecodeRequest;
    fromAmino(object: TxDecodeRequestAmino): TxDecodeRequest;
    toAmino(message: TxDecodeRequest): TxDecodeRequestAmino;
    fromAminoMsg(object: TxDecodeRequestAminoMsg): TxDecodeRequest;
    toAminoMsg(message: TxDecodeRequest): TxDecodeRequestAminoMsg;
    fromProtoMsg(message: TxDecodeRequestProtoMsg): TxDecodeRequest;
    toProto(message: TxDecodeRequest): Uint8Array;
    toProtoMsg(message: TxDecodeRequest): TxDecodeRequestProtoMsg;
};
export declare const TxDecodeResponse: {
    typeUrl: string;
    encode(message: TxDecodeResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): TxDecodeResponse;
    fromPartial(object: Partial<TxDecodeResponse>): TxDecodeResponse;
    fromAmino(object: TxDecodeResponseAmino): TxDecodeResponse;
    toAmino(message: TxDecodeResponse): TxDecodeResponseAmino;
    fromAminoMsg(object: TxDecodeResponseAminoMsg): TxDecodeResponse;
    toAminoMsg(message: TxDecodeResponse): TxDecodeResponseAminoMsg;
    fromProtoMsg(message: TxDecodeResponseProtoMsg): TxDecodeResponse;
    toProto(message: TxDecodeResponse): Uint8Array;
    toProtoMsg(message: TxDecodeResponse): TxDecodeResponseProtoMsg;
};
export declare const TxEncodeRequest: {
    typeUrl: string;
    encode(message: TxEncodeRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): TxEncodeRequest;
    fromPartial(object: Partial<TxEncodeRequest>): TxEncodeRequest;
    fromAmino(object: TxEncodeRequestAmino): TxEncodeRequest;
    toAmino(message: TxEncodeRequest): TxEncodeRequestAmino;
    fromAminoMsg(object: TxEncodeRequestAminoMsg): TxEncodeRequest;
    toAminoMsg(message: TxEncodeRequest): TxEncodeRequestAminoMsg;
    fromProtoMsg(message: TxEncodeRequestProtoMsg): TxEncodeRequest;
    toProto(message: TxEncodeRequest): Uint8Array;
    toProtoMsg(message: TxEncodeRequest): TxEncodeRequestProtoMsg;
};
export declare const TxEncodeResponse: {
    typeUrl: string;
    encode(message: TxEncodeResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): TxEncodeResponse;
    fromPartial(object: Partial<TxEncodeResponse>): TxEncodeResponse;
    fromAmino(object: TxEncodeResponseAmino): TxEncodeResponse;
    toAmino(message: TxEncodeResponse): TxEncodeResponseAmino;
    fromAminoMsg(object: TxEncodeResponseAminoMsg): TxEncodeResponse;
    toAminoMsg(message: TxEncodeResponse): TxEncodeResponseAminoMsg;
    fromProtoMsg(message: TxEncodeResponseProtoMsg): TxEncodeResponse;
    toProto(message: TxEncodeResponse): Uint8Array;
    toProtoMsg(message: TxEncodeResponse): TxEncodeResponseProtoMsg;
};
export declare const TxEncodeAminoRequest: {
    typeUrl: string;
    encode(message: TxEncodeAminoRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): TxEncodeAminoRequest;
    fromPartial(object: Partial<TxEncodeAminoRequest>): TxEncodeAminoRequest;
    fromAmino(object: TxEncodeAminoRequestAmino): TxEncodeAminoRequest;
    toAmino(message: TxEncodeAminoRequest): TxEncodeAminoRequestAmino;
    fromAminoMsg(object: TxEncodeAminoRequestAminoMsg): TxEncodeAminoRequest;
    toAminoMsg(message: TxEncodeAminoRequest): TxEncodeAminoRequestAminoMsg;
    fromProtoMsg(message: TxEncodeAminoRequestProtoMsg): TxEncodeAminoRequest;
    toProto(message: TxEncodeAminoRequest): Uint8Array;
    toProtoMsg(message: TxEncodeAminoRequest): TxEncodeAminoRequestProtoMsg;
};
export declare const TxEncodeAminoResponse: {
    typeUrl: string;
    encode(message: TxEncodeAminoResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): TxEncodeAminoResponse;
    fromPartial(object: Partial<TxEncodeAminoResponse>): TxEncodeAminoResponse;
    fromAmino(object: TxEncodeAminoResponseAmino): TxEncodeAminoResponse;
    toAmino(message: TxEncodeAminoResponse): TxEncodeAminoResponseAmino;
    fromAminoMsg(object: TxEncodeAminoResponseAminoMsg): TxEncodeAminoResponse;
    toAminoMsg(message: TxEncodeAminoResponse): TxEncodeAminoResponseAminoMsg;
    fromProtoMsg(message: TxEncodeAminoResponseProtoMsg): TxEncodeAminoResponse;
    toProto(message: TxEncodeAminoResponse): Uint8Array;
    toProtoMsg(message: TxEncodeAminoResponse): TxEncodeAminoResponseProtoMsg;
};
export declare const TxDecodeAminoRequest: {
    typeUrl: string;
    encode(message: TxDecodeAminoRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): TxDecodeAminoRequest;
    fromPartial(object: Partial<TxDecodeAminoRequest>): TxDecodeAminoRequest;
    fromAmino(object: TxDecodeAminoRequestAmino): TxDecodeAminoRequest;
    toAmino(message: TxDecodeAminoRequest): TxDecodeAminoRequestAmino;
    fromAminoMsg(object: TxDecodeAminoRequestAminoMsg): TxDecodeAminoRequest;
    toAminoMsg(message: TxDecodeAminoRequest): TxDecodeAminoRequestAminoMsg;
    fromProtoMsg(message: TxDecodeAminoRequestProtoMsg): TxDecodeAminoRequest;
    toProto(message: TxDecodeAminoRequest): Uint8Array;
    toProtoMsg(message: TxDecodeAminoRequest): TxDecodeAminoRequestProtoMsg;
};
export declare const TxDecodeAminoResponse: {
    typeUrl: string;
    encode(message: TxDecodeAminoResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): TxDecodeAminoResponse;
    fromPartial(object: Partial<TxDecodeAminoResponse>): TxDecodeAminoResponse;
    fromAmino(object: TxDecodeAminoResponseAmino): TxDecodeAminoResponse;
    toAmino(message: TxDecodeAminoResponse): TxDecodeAminoResponseAmino;
    fromAminoMsg(object: TxDecodeAminoResponseAminoMsg): TxDecodeAminoResponse;
    toAminoMsg(message: TxDecodeAminoResponse): TxDecodeAminoResponseAminoMsg;
    fromProtoMsg(message: TxDecodeAminoResponseProtoMsg): TxDecodeAminoResponse;
    toProto(message: TxDecodeAminoResponse): Uint8Array;
    toProtoMsg(message: TxDecodeAminoResponse): TxDecodeAminoResponseProtoMsg;
};
