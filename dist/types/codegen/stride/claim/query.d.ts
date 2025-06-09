import { Action, ClaimRecord, ClaimRecordAmino, ClaimRecordSDKType } from "./claim";
import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Period, PeriodAmino, PeriodSDKType } from "../vesting/vesting";
import { BinaryReader, BinaryWriter } from "../../binary";
export interface ClaimStatus {
    airdropIdentifier: string;
    claimed: boolean;
}
export interface ClaimStatusProtoMsg {
    typeUrl: "/stride.claim.ClaimStatus";
    value: Uint8Array;
}
/**
 * @name ClaimStatusAmino
 * @package stride.claim
 * @see proto type: stride.claim.ClaimStatus
 */
export interface ClaimStatusAmino {
    airdrop_identifier?: string;
    claimed?: boolean;
}
export interface ClaimStatusAminoMsg {
    type: "/stride.claim.ClaimStatus";
    value: ClaimStatusAmino;
}
export interface ClaimStatusSDKType {
    airdrop_identifier: string;
    claimed: boolean;
}
export interface QueryClaimStatusRequest {
    address: string;
}
export interface QueryClaimStatusRequestProtoMsg {
    typeUrl: "/stride.claim.QueryClaimStatusRequest";
    value: Uint8Array;
}
/**
 * @name QueryClaimStatusRequestAmino
 * @package stride.claim
 * @see proto type: stride.claim.QueryClaimStatusRequest
 */
export interface QueryClaimStatusRequestAmino {
    address?: string;
}
export interface QueryClaimStatusRequestAminoMsg {
    type: "/stride.claim.QueryClaimStatusRequest";
    value: QueryClaimStatusRequestAmino;
}
export interface QueryClaimStatusRequestSDKType {
    address: string;
}
export interface QueryClaimStatusResponse {
    claimStatus: ClaimStatus[];
}
export interface QueryClaimStatusResponseProtoMsg {
    typeUrl: "/stride.claim.QueryClaimStatusResponse";
    value: Uint8Array;
}
/**
 * @name QueryClaimStatusResponseAmino
 * @package stride.claim
 * @see proto type: stride.claim.QueryClaimStatusResponse
 */
export interface QueryClaimStatusResponseAmino {
    claim_status?: ClaimStatusAmino[];
}
export interface QueryClaimStatusResponseAminoMsg {
    type: "/stride.claim.QueryClaimStatusResponse";
    value: QueryClaimStatusResponseAmino;
}
export interface QueryClaimStatusResponseSDKType {
    claim_status: ClaimStatusSDKType[];
}
export interface ClaimMetadata {
    airdropIdentifier: string;
    currentRound: string;
    currentRoundStart: Date;
    currentRoundEnd: Date;
}
export interface ClaimMetadataProtoMsg {
    typeUrl: "/stride.claim.ClaimMetadata";
    value: Uint8Array;
}
/**
 * @name ClaimMetadataAmino
 * @package stride.claim
 * @see proto type: stride.claim.ClaimMetadata
 */
export interface ClaimMetadataAmino {
    airdrop_identifier?: string;
    current_round?: string;
    current_round_start?: string;
    current_round_end?: string;
}
export interface ClaimMetadataAminoMsg {
    type: "/stride.claim.ClaimMetadata";
    value: ClaimMetadataAmino;
}
export interface ClaimMetadataSDKType {
    airdrop_identifier: string;
    current_round: string;
    current_round_start: Date;
    current_round_end: Date;
}
export interface QueryClaimMetadataRequest {
}
export interface QueryClaimMetadataRequestProtoMsg {
    typeUrl: "/stride.claim.QueryClaimMetadataRequest";
    value: Uint8Array;
}
/**
 * @name QueryClaimMetadataRequestAmino
 * @package stride.claim
 * @see proto type: stride.claim.QueryClaimMetadataRequest
 */
export interface QueryClaimMetadataRequestAmino {
}
export interface QueryClaimMetadataRequestAminoMsg {
    type: "/stride.claim.QueryClaimMetadataRequest";
    value: QueryClaimMetadataRequestAmino;
}
export interface QueryClaimMetadataRequestSDKType {
}
export interface QueryClaimMetadataResponse {
    claimMetadata: ClaimMetadata[];
}
export interface QueryClaimMetadataResponseProtoMsg {
    typeUrl: "/stride.claim.QueryClaimMetadataResponse";
    value: Uint8Array;
}
/**
 * @name QueryClaimMetadataResponseAmino
 * @package stride.claim
 * @see proto type: stride.claim.QueryClaimMetadataResponse
 */
export interface QueryClaimMetadataResponseAmino {
    claim_metadata?: ClaimMetadataAmino[];
}
export interface QueryClaimMetadataResponseAminoMsg {
    type: "/stride.claim.QueryClaimMetadataResponse";
    value: QueryClaimMetadataResponseAmino;
}
export interface QueryClaimMetadataResponseSDKType {
    claim_metadata: ClaimMetadataSDKType[];
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryDistributorAccountBalanceRequest {
    airdropIdentifier: string;
}
export interface QueryDistributorAccountBalanceRequestProtoMsg {
    typeUrl: "/stride.claim.QueryDistributorAccountBalanceRequest";
    value: Uint8Array;
}
/**
 * QueryParamsRequest is the request type for the Query/Params RPC method.
 * @name QueryDistributorAccountBalanceRequestAmino
 * @package stride.claim
 * @see proto type: stride.claim.QueryDistributorAccountBalanceRequest
 */
export interface QueryDistributorAccountBalanceRequestAmino {
    airdrop_identifier?: string;
}
export interface QueryDistributorAccountBalanceRequestAminoMsg {
    type: "/stride.claim.QueryDistributorAccountBalanceRequest";
    value: QueryDistributorAccountBalanceRequestAmino;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryDistributorAccountBalanceRequestSDKType {
    airdrop_identifier: string;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryDistributorAccountBalanceResponse {
    /** params defines the parameters of the module. */
    distributorAccountBalance: Coin[];
}
export interface QueryDistributorAccountBalanceResponseProtoMsg {
    typeUrl: "/stride.claim.QueryDistributorAccountBalanceResponse";
    value: Uint8Array;
}
/**
 * QueryParamsResponse is the response type for the Query/Params RPC method.
 * @name QueryDistributorAccountBalanceResponseAmino
 * @package stride.claim
 * @see proto type: stride.claim.QueryDistributorAccountBalanceResponse
 */
export interface QueryDistributorAccountBalanceResponseAmino {
    /**
     * params defines the parameters of the module.
     */
    distributor_account_balance?: CoinAmino[];
}
export interface QueryDistributorAccountBalanceResponseAminoMsg {
    type: "/stride.claim.QueryDistributorAccountBalanceResponse";
    value: QueryDistributorAccountBalanceResponseAmino;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryDistributorAccountBalanceResponseSDKType {
    distributor_account_balance: CoinSDKType[];
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
export interface QueryParamsRequestProtoMsg {
    typeUrl: "/stride.claim.QueryParamsRequest";
    value: Uint8Array;
}
/**
 * QueryParamsRequest is the request type for the Query/Params RPC method.
 * @name QueryParamsRequestAmino
 * @package stride.claim
 * @see proto type: stride.claim.QueryParamsRequest
 */
export interface QueryParamsRequestAmino {
}
export interface QueryParamsRequestAminoMsg {
    type: "/stride.claim.QueryParamsRequest";
    value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params defines the parameters of the module. */
    params: Params;
}
export interface QueryParamsResponseProtoMsg {
    typeUrl: "/stride.claim.QueryParamsResponse";
    value: Uint8Array;
}
/**
 * QueryParamsResponse is the response type for the Query/Params RPC method.
 * @name QueryParamsResponseAmino
 * @package stride.claim
 * @see proto type: stride.claim.QueryParamsResponse
 */
export interface QueryParamsResponseAmino {
    /**
     * params defines the parameters of the module.
     */
    params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
    type: "/stride.claim.QueryParamsResponse";
    value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
    params: ParamsSDKType;
}
export interface QueryClaimRecordRequest {
    airdropIdentifier: string;
    address: string;
}
export interface QueryClaimRecordRequestProtoMsg {
    typeUrl: "/stride.claim.QueryClaimRecordRequest";
    value: Uint8Array;
}
/**
 * @name QueryClaimRecordRequestAmino
 * @package stride.claim
 * @see proto type: stride.claim.QueryClaimRecordRequest
 */
export interface QueryClaimRecordRequestAmino {
    airdrop_identifier?: string;
    address?: string;
}
export interface QueryClaimRecordRequestAminoMsg {
    type: "/stride.claim.QueryClaimRecordRequest";
    value: QueryClaimRecordRequestAmino;
}
export interface QueryClaimRecordRequestSDKType {
    airdrop_identifier: string;
    address: string;
}
export interface QueryClaimRecordResponse {
    claimRecord: ClaimRecord;
}
export interface QueryClaimRecordResponseProtoMsg {
    typeUrl: "/stride.claim.QueryClaimRecordResponse";
    value: Uint8Array;
}
/**
 * @name QueryClaimRecordResponseAmino
 * @package stride.claim
 * @see proto type: stride.claim.QueryClaimRecordResponse
 */
export interface QueryClaimRecordResponseAmino {
    claim_record?: ClaimRecordAmino;
}
export interface QueryClaimRecordResponseAminoMsg {
    type: "/stride.claim.QueryClaimRecordResponse";
    value: QueryClaimRecordResponseAmino;
}
export interface QueryClaimRecordResponseSDKType {
    claim_record: ClaimRecordSDKType;
}
export interface QueryClaimableForActionRequest {
    airdropIdentifier: string;
    address: string;
    action: Action;
}
export interface QueryClaimableForActionRequestProtoMsg {
    typeUrl: "/stride.claim.QueryClaimableForActionRequest";
    value: Uint8Array;
}
/**
 * @name QueryClaimableForActionRequestAmino
 * @package stride.claim
 * @see proto type: stride.claim.QueryClaimableForActionRequest
 */
export interface QueryClaimableForActionRequestAmino {
    airdrop_identifier?: string;
    address?: string;
    action?: Action;
}
export interface QueryClaimableForActionRequestAminoMsg {
    type: "/stride.claim.QueryClaimableForActionRequest";
    value: QueryClaimableForActionRequestAmino;
}
export interface QueryClaimableForActionRequestSDKType {
    airdrop_identifier: string;
    address: string;
    action: Action;
}
export interface QueryClaimableForActionResponse {
    coins: Coin[];
}
export interface QueryClaimableForActionResponseProtoMsg {
    typeUrl: "/stride.claim.QueryClaimableForActionResponse";
    value: Uint8Array;
}
/**
 * @name QueryClaimableForActionResponseAmino
 * @package stride.claim
 * @see proto type: stride.claim.QueryClaimableForActionResponse
 */
export interface QueryClaimableForActionResponseAmino {
    coins?: CoinAmino[];
}
export interface QueryClaimableForActionResponseAminoMsg {
    type: "/stride.claim.QueryClaimableForActionResponse";
    value: QueryClaimableForActionResponseAmino;
}
export interface QueryClaimableForActionResponseSDKType {
    coins: CoinSDKType[];
}
export interface QueryTotalClaimableRequest {
    airdropIdentifier: string;
    address: string;
    includeClaimed: boolean;
}
export interface QueryTotalClaimableRequestProtoMsg {
    typeUrl: "/stride.claim.QueryTotalClaimableRequest";
    value: Uint8Array;
}
/**
 * @name QueryTotalClaimableRequestAmino
 * @package stride.claim
 * @see proto type: stride.claim.QueryTotalClaimableRequest
 */
export interface QueryTotalClaimableRequestAmino {
    airdrop_identifier?: string;
    address?: string;
    include_claimed?: boolean;
}
export interface QueryTotalClaimableRequestAminoMsg {
    type: "/stride.claim.QueryTotalClaimableRequest";
    value: QueryTotalClaimableRequestAmino;
}
export interface QueryTotalClaimableRequestSDKType {
    airdrop_identifier: string;
    address: string;
    include_claimed: boolean;
}
export interface QueryTotalClaimableResponse {
    coins: Coin[];
}
export interface QueryTotalClaimableResponseProtoMsg {
    typeUrl: "/stride.claim.QueryTotalClaimableResponse";
    value: Uint8Array;
}
/**
 * @name QueryTotalClaimableResponseAmino
 * @package stride.claim
 * @see proto type: stride.claim.QueryTotalClaimableResponse
 */
export interface QueryTotalClaimableResponseAmino {
    coins?: CoinAmino[];
}
export interface QueryTotalClaimableResponseAminoMsg {
    type: "/stride.claim.QueryTotalClaimableResponse";
    value: QueryTotalClaimableResponseAmino;
}
export interface QueryTotalClaimableResponseSDKType {
    coins: CoinSDKType[];
}
export interface QueryUserVestingsRequest {
    address: string;
}
export interface QueryUserVestingsRequestProtoMsg {
    typeUrl: "/stride.claim.QueryUserVestingsRequest";
    value: Uint8Array;
}
/**
 * @name QueryUserVestingsRequestAmino
 * @package stride.claim
 * @see proto type: stride.claim.QueryUserVestingsRequest
 */
export interface QueryUserVestingsRequestAmino {
    address?: string;
}
export interface QueryUserVestingsRequestAminoMsg {
    type: "/stride.claim.QueryUserVestingsRequest";
    value: QueryUserVestingsRequestAmino;
}
export interface QueryUserVestingsRequestSDKType {
    address: string;
}
export interface QueryUserVestingsResponse {
    spendableCoins: Coin[];
    periods: Period[];
}
export interface QueryUserVestingsResponseProtoMsg {
    typeUrl: "/stride.claim.QueryUserVestingsResponse";
    value: Uint8Array;
}
/**
 * @name QueryUserVestingsResponseAmino
 * @package stride.claim
 * @see proto type: stride.claim.QueryUserVestingsResponse
 */
export interface QueryUserVestingsResponseAmino {
    spendable_coins?: CoinAmino[];
    periods?: PeriodAmino[];
}
export interface QueryUserVestingsResponseAminoMsg {
    type: "/stride.claim.QueryUserVestingsResponse";
    value: QueryUserVestingsResponseAmino;
}
export interface QueryUserVestingsResponseSDKType {
    spendable_coins: CoinSDKType[];
    periods: PeriodSDKType[];
}
export declare const ClaimStatus: {
    typeUrl: string;
    encode(message: ClaimStatus, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ClaimStatus;
    fromPartial(object: Partial<ClaimStatus>): ClaimStatus;
    fromAmino(object: ClaimStatusAmino): ClaimStatus;
    toAmino(message: ClaimStatus): ClaimStatusAmino;
    fromAminoMsg(object: ClaimStatusAminoMsg): ClaimStatus;
    fromProtoMsg(message: ClaimStatusProtoMsg): ClaimStatus;
    toProto(message: ClaimStatus): Uint8Array;
    toProtoMsg(message: ClaimStatus): ClaimStatusProtoMsg;
};
export declare const QueryClaimStatusRequest: {
    typeUrl: string;
    encode(message: QueryClaimStatusRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryClaimStatusRequest;
    fromPartial(object: Partial<QueryClaimStatusRequest>): QueryClaimStatusRequest;
    fromAmino(object: QueryClaimStatusRequestAmino): QueryClaimStatusRequest;
    toAmino(message: QueryClaimStatusRequest): QueryClaimStatusRequestAmino;
    fromAminoMsg(object: QueryClaimStatusRequestAminoMsg): QueryClaimStatusRequest;
    fromProtoMsg(message: QueryClaimStatusRequestProtoMsg): QueryClaimStatusRequest;
    toProto(message: QueryClaimStatusRequest): Uint8Array;
    toProtoMsg(message: QueryClaimStatusRequest): QueryClaimStatusRequestProtoMsg;
};
export declare const QueryClaimStatusResponse: {
    typeUrl: string;
    encode(message: QueryClaimStatusResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryClaimStatusResponse;
    fromPartial(object: Partial<QueryClaimStatusResponse>): QueryClaimStatusResponse;
    fromAmino(object: QueryClaimStatusResponseAmino): QueryClaimStatusResponse;
    toAmino(message: QueryClaimStatusResponse): QueryClaimStatusResponseAmino;
    fromAminoMsg(object: QueryClaimStatusResponseAminoMsg): QueryClaimStatusResponse;
    fromProtoMsg(message: QueryClaimStatusResponseProtoMsg): QueryClaimStatusResponse;
    toProto(message: QueryClaimStatusResponse): Uint8Array;
    toProtoMsg(message: QueryClaimStatusResponse): QueryClaimStatusResponseProtoMsg;
};
export declare const ClaimMetadata: {
    typeUrl: string;
    encode(message: ClaimMetadata, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ClaimMetadata;
    fromPartial(object: Partial<ClaimMetadata>): ClaimMetadata;
    fromAmino(object: ClaimMetadataAmino): ClaimMetadata;
    toAmino(message: ClaimMetadata): ClaimMetadataAmino;
    fromAminoMsg(object: ClaimMetadataAminoMsg): ClaimMetadata;
    fromProtoMsg(message: ClaimMetadataProtoMsg): ClaimMetadata;
    toProto(message: ClaimMetadata): Uint8Array;
    toProtoMsg(message: ClaimMetadata): ClaimMetadataProtoMsg;
};
export declare const QueryClaimMetadataRequest: {
    typeUrl: string;
    encode(_: QueryClaimMetadataRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryClaimMetadataRequest;
    fromPartial(_: Partial<QueryClaimMetadataRequest>): QueryClaimMetadataRequest;
    fromAmino(_: QueryClaimMetadataRequestAmino): QueryClaimMetadataRequest;
    toAmino(_: QueryClaimMetadataRequest): QueryClaimMetadataRequestAmino;
    fromAminoMsg(object: QueryClaimMetadataRequestAminoMsg): QueryClaimMetadataRequest;
    fromProtoMsg(message: QueryClaimMetadataRequestProtoMsg): QueryClaimMetadataRequest;
    toProto(message: QueryClaimMetadataRequest): Uint8Array;
    toProtoMsg(message: QueryClaimMetadataRequest): QueryClaimMetadataRequestProtoMsg;
};
export declare const QueryClaimMetadataResponse: {
    typeUrl: string;
    encode(message: QueryClaimMetadataResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryClaimMetadataResponse;
    fromPartial(object: Partial<QueryClaimMetadataResponse>): QueryClaimMetadataResponse;
    fromAmino(object: QueryClaimMetadataResponseAmino): QueryClaimMetadataResponse;
    toAmino(message: QueryClaimMetadataResponse): QueryClaimMetadataResponseAmino;
    fromAminoMsg(object: QueryClaimMetadataResponseAminoMsg): QueryClaimMetadataResponse;
    fromProtoMsg(message: QueryClaimMetadataResponseProtoMsg): QueryClaimMetadataResponse;
    toProto(message: QueryClaimMetadataResponse): Uint8Array;
    toProtoMsg(message: QueryClaimMetadataResponse): QueryClaimMetadataResponseProtoMsg;
};
export declare const QueryDistributorAccountBalanceRequest: {
    typeUrl: string;
    encode(message: QueryDistributorAccountBalanceRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDistributorAccountBalanceRequest;
    fromPartial(object: Partial<QueryDistributorAccountBalanceRequest>): QueryDistributorAccountBalanceRequest;
    fromAmino(object: QueryDistributorAccountBalanceRequestAmino): QueryDistributorAccountBalanceRequest;
    toAmino(message: QueryDistributorAccountBalanceRequest): QueryDistributorAccountBalanceRequestAmino;
    fromAminoMsg(object: QueryDistributorAccountBalanceRequestAminoMsg): QueryDistributorAccountBalanceRequest;
    fromProtoMsg(message: QueryDistributorAccountBalanceRequestProtoMsg): QueryDistributorAccountBalanceRequest;
    toProto(message: QueryDistributorAccountBalanceRequest): Uint8Array;
    toProtoMsg(message: QueryDistributorAccountBalanceRequest): QueryDistributorAccountBalanceRequestProtoMsg;
};
export declare const QueryDistributorAccountBalanceResponse: {
    typeUrl: string;
    encode(message: QueryDistributorAccountBalanceResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDistributorAccountBalanceResponse;
    fromPartial(object: Partial<QueryDistributorAccountBalanceResponse>): QueryDistributorAccountBalanceResponse;
    fromAmino(object: QueryDistributorAccountBalanceResponseAmino): QueryDistributorAccountBalanceResponse;
    toAmino(message: QueryDistributorAccountBalanceResponse): QueryDistributorAccountBalanceResponseAmino;
    fromAminoMsg(object: QueryDistributorAccountBalanceResponseAminoMsg): QueryDistributorAccountBalanceResponse;
    fromProtoMsg(message: QueryDistributorAccountBalanceResponseProtoMsg): QueryDistributorAccountBalanceResponse;
    toProto(message: QueryDistributorAccountBalanceResponse): Uint8Array;
    toProtoMsg(message: QueryDistributorAccountBalanceResponse): QueryDistributorAccountBalanceResponseProtoMsg;
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
export declare const QueryClaimRecordRequest: {
    typeUrl: string;
    encode(message: QueryClaimRecordRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryClaimRecordRequest;
    fromPartial(object: Partial<QueryClaimRecordRequest>): QueryClaimRecordRequest;
    fromAmino(object: QueryClaimRecordRequestAmino): QueryClaimRecordRequest;
    toAmino(message: QueryClaimRecordRequest): QueryClaimRecordRequestAmino;
    fromAminoMsg(object: QueryClaimRecordRequestAminoMsg): QueryClaimRecordRequest;
    fromProtoMsg(message: QueryClaimRecordRequestProtoMsg): QueryClaimRecordRequest;
    toProto(message: QueryClaimRecordRequest): Uint8Array;
    toProtoMsg(message: QueryClaimRecordRequest): QueryClaimRecordRequestProtoMsg;
};
export declare const QueryClaimRecordResponse: {
    typeUrl: string;
    encode(message: QueryClaimRecordResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryClaimRecordResponse;
    fromPartial(object: Partial<QueryClaimRecordResponse>): QueryClaimRecordResponse;
    fromAmino(object: QueryClaimRecordResponseAmino): QueryClaimRecordResponse;
    toAmino(message: QueryClaimRecordResponse): QueryClaimRecordResponseAmino;
    fromAminoMsg(object: QueryClaimRecordResponseAminoMsg): QueryClaimRecordResponse;
    fromProtoMsg(message: QueryClaimRecordResponseProtoMsg): QueryClaimRecordResponse;
    toProto(message: QueryClaimRecordResponse): Uint8Array;
    toProtoMsg(message: QueryClaimRecordResponse): QueryClaimRecordResponseProtoMsg;
};
export declare const QueryClaimableForActionRequest: {
    typeUrl: string;
    encode(message: QueryClaimableForActionRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryClaimableForActionRequest;
    fromPartial(object: Partial<QueryClaimableForActionRequest>): QueryClaimableForActionRequest;
    fromAmino(object: QueryClaimableForActionRequestAmino): QueryClaimableForActionRequest;
    toAmino(message: QueryClaimableForActionRequest): QueryClaimableForActionRequestAmino;
    fromAminoMsg(object: QueryClaimableForActionRequestAminoMsg): QueryClaimableForActionRequest;
    fromProtoMsg(message: QueryClaimableForActionRequestProtoMsg): QueryClaimableForActionRequest;
    toProto(message: QueryClaimableForActionRequest): Uint8Array;
    toProtoMsg(message: QueryClaimableForActionRequest): QueryClaimableForActionRequestProtoMsg;
};
export declare const QueryClaimableForActionResponse: {
    typeUrl: string;
    encode(message: QueryClaimableForActionResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryClaimableForActionResponse;
    fromPartial(object: Partial<QueryClaimableForActionResponse>): QueryClaimableForActionResponse;
    fromAmino(object: QueryClaimableForActionResponseAmino): QueryClaimableForActionResponse;
    toAmino(message: QueryClaimableForActionResponse): QueryClaimableForActionResponseAmino;
    fromAminoMsg(object: QueryClaimableForActionResponseAminoMsg): QueryClaimableForActionResponse;
    fromProtoMsg(message: QueryClaimableForActionResponseProtoMsg): QueryClaimableForActionResponse;
    toProto(message: QueryClaimableForActionResponse): Uint8Array;
    toProtoMsg(message: QueryClaimableForActionResponse): QueryClaimableForActionResponseProtoMsg;
};
export declare const QueryTotalClaimableRequest: {
    typeUrl: string;
    encode(message: QueryTotalClaimableRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalClaimableRequest;
    fromPartial(object: Partial<QueryTotalClaimableRequest>): QueryTotalClaimableRequest;
    fromAmino(object: QueryTotalClaimableRequestAmino): QueryTotalClaimableRequest;
    toAmino(message: QueryTotalClaimableRequest): QueryTotalClaimableRequestAmino;
    fromAminoMsg(object: QueryTotalClaimableRequestAminoMsg): QueryTotalClaimableRequest;
    fromProtoMsg(message: QueryTotalClaimableRequestProtoMsg): QueryTotalClaimableRequest;
    toProto(message: QueryTotalClaimableRequest): Uint8Array;
    toProtoMsg(message: QueryTotalClaimableRequest): QueryTotalClaimableRequestProtoMsg;
};
export declare const QueryTotalClaimableResponse: {
    typeUrl: string;
    encode(message: QueryTotalClaimableResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalClaimableResponse;
    fromPartial(object: Partial<QueryTotalClaimableResponse>): QueryTotalClaimableResponse;
    fromAmino(object: QueryTotalClaimableResponseAmino): QueryTotalClaimableResponse;
    toAmino(message: QueryTotalClaimableResponse): QueryTotalClaimableResponseAmino;
    fromAminoMsg(object: QueryTotalClaimableResponseAminoMsg): QueryTotalClaimableResponse;
    fromProtoMsg(message: QueryTotalClaimableResponseProtoMsg): QueryTotalClaimableResponse;
    toProto(message: QueryTotalClaimableResponse): Uint8Array;
    toProtoMsg(message: QueryTotalClaimableResponse): QueryTotalClaimableResponseProtoMsg;
};
export declare const QueryUserVestingsRequest: {
    typeUrl: string;
    encode(message: QueryUserVestingsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryUserVestingsRequest;
    fromPartial(object: Partial<QueryUserVestingsRequest>): QueryUserVestingsRequest;
    fromAmino(object: QueryUserVestingsRequestAmino): QueryUserVestingsRequest;
    toAmino(message: QueryUserVestingsRequest): QueryUserVestingsRequestAmino;
    fromAminoMsg(object: QueryUserVestingsRequestAminoMsg): QueryUserVestingsRequest;
    fromProtoMsg(message: QueryUserVestingsRequestProtoMsg): QueryUserVestingsRequest;
    toProto(message: QueryUserVestingsRequest): Uint8Array;
    toProtoMsg(message: QueryUserVestingsRequest): QueryUserVestingsRequestProtoMsg;
};
export declare const QueryUserVestingsResponse: {
    typeUrl: string;
    encode(message: QueryUserVestingsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryUserVestingsResponse;
    fromPartial(object: Partial<QueryUserVestingsResponse>): QueryUserVestingsResponse;
    fromAmino(object: QueryUserVestingsResponseAmino): QueryUserVestingsResponse;
    toAmino(message: QueryUserVestingsResponse): QueryUserVestingsResponseAmino;
    fromAminoMsg(object: QueryUserVestingsResponseAminoMsg): QueryUserVestingsResponse;
    fromProtoMsg(message: QueryUserVestingsResponseProtoMsg): QueryUserVestingsResponse;
    toProto(message: QueryUserVestingsResponse): Uint8Array;
    toProtoMsg(message: QueryUserVestingsResponse): QueryUserVestingsResponseProtoMsg;
};
