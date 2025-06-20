import { ProposalStatus, Proposal, ProposalAmino, ProposalSDKType, Vote, VoteAmino, VoteSDKType, VotingParams, VotingParamsAmino, VotingParamsSDKType, DepositParams, DepositParamsAmino, DepositParamsSDKType, TallyParams, TallyParamsAmino, TallyParamsSDKType, Params, ParamsAmino, ParamsSDKType, Deposit, DepositAmino, DepositSDKType, TallyResult, TallyResultAmino, TallyResultSDKType } from "./gov";
import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** QueryProposalRequest is the request type for the Query/Proposal RPC method. */
export interface QueryProposalRequest {
    /** proposal_id defines the unique id of the proposal. */
    proposalId: bigint;
}
export interface QueryProposalRequestProtoMsg {
    typeUrl: "/cosmos.gov.v1.QueryProposalRequest";
    value: Uint8Array;
}
/**
 * QueryProposalRequest is the request type for the Query/Proposal RPC method.
 * @name QueryProposalRequestAmino
 * @package cosmos.gov.v1
 * @see proto type: cosmos.gov.v1.QueryProposalRequest
 */
export interface QueryProposalRequestAmino {
    /**
     * proposal_id defines the unique id of the proposal.
     */
    proposal_id?: string;
}
export interface QueryProposalRequestAminoMsg {
    type: "cosmos-sdk/v1/QueryProposalRequest";
    value: QueryProposalRequestAmino;
}
/** QueryProposalRequest is the request type for the Query/Proposal RPC method. */
export interface QueryProposalRequestSDKType {
    proposal_id: bigint;
}
/** QueryProposalResponse is the response type for the Query/Proposal RPC method. */
export interface QueryProposalResponse {
    /** proposal is the requested governance proposal. */
    proposal?: Proposal;
}
export interface QueryProposalResponseProtoMsg {
    typeUrl: "/cosmos.gov.v1.QueryProposalResponse";
    value: Uint8Array;
}
/**
 * QueryProposalResponse is the response type for the Query/Proposal RPC method.
 * @name QueryProposalResponseAmino
 * @package cosmos.gov.v1
 * @see proto type: cosmos.gov.v1.QueryProposalResponse
 */
export interface QueryProposalResponseAmino {
    /**
     * proposal is the requested governance proposal.
     */
    proposal?: ProposalAmino;
}
export interface QueryProposalResponseAminoMsg {
    type: "cosmos-sdk/v1/QueryProposalResponse";
    value: QueryProposalResponseAmino;
}
/** QueryProposalResponse is the response type for the Query/Proposal RPC method. */
export interface QueryProposalResponseSDKType {
    proposal?: ProposalSDKType;
}
/** QueryProposalsRequest is the request type for the Query/Proposals RPC method. */
export interface QueryProposalsRequest {
    /** proposal_status defines the status of the proposals. */
    proposalStatus: ProposalStatus;
    /** voter defines the voter address for the proposals. */
    voter: string;
    /** depositor defines the deposit addresses from the proposals. */
    depositor: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
export interface QueryProposalsRequestProtoMsg {
    typeUrl: "/cosmos.gov.v1.QueryProposalsRequest";
    value: Uint8Array;
}
/**
 * QueryProposalsRequest is the request type for the Query/Proposals RPC method.
 * @name QueryProposalsRequestAmino
 * @package cosmos.gov.v1
 * @see proto type: cosmos.gov.v1.QueryProposalsRequest
 */
export interface QueryProposalsRequestAmino {
    /**
     * proposal_status defines the status of the proposals.
     */
    proposal_status?: ProposalStatus;
    /**
     * voter defines the voter address for the proposals.
     */
    voter?: string;
    /**
     * depositor defines the deposit addresses from the proposals.
     */
    depositor?: string;
    /**
     * pagination defines an optional pagination for the request.
     */
    pagination?: PageRequestAmino;
}
export interface QueryProposalsRequestAminoMsg {
    type: "cosmos-sdk/v1/QueryProposalsRequest";
    value: QueryProposalsRequestAmino;
}
/** QueryProposalsRequest is the request type for the Query/Proposals RPC method. */
export interface QueryProposalsRequestSDKType {
    proposal_status: ProposalStatus;
    voter: string;
    depositor: string;
    pagination?: PageRequestSDKType;
}
/**
 * QueryProposalsResponse is the response type for the Query/Proposals RPC
 * method.
 */
export interface QueryProposalsResponse {
    /** proposals defines all the requested governance proposals. */
    proposals: Proposal[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
export interface QueryProposalsResponseProtoMsg {
    typeUrl: "/cosmos.gov.v1.QueryProposalsResponse";
    value: Uint8Array;
}
/**
 * QueryProposalsResponse is the response type for the Query/Proposals RPC
 * method.
 * @name QueryProposalsResponseAmino
 * @package cosmos.gov.v1
 * @see proto type: cosmos.gov.v1.QueryProposalsResponse
 */
export interface QueryProposalsResponseAmino {
    /**
     * proposals defines all the requested governance proposals.
     */
    proposals?: ProposalAmino[];
    /**
     * pagination defines the pagination in the response.
     */
    pagination?: PageResponseAmino;
}
export interface QueryProposalsResponseAminoMsg {
    type: "cosmos-sdk/v1/QueryProposalsResponse";
    value: QueryProposalsResponseAmino;
}
/**
 * QueryProposalsResponse is the response type for the Query/Proposals RPC
 * method.
 */
export interface QueryProposalsResponseSDKType {
    proposals: ProposalSDKType[];
    pagination?: PageResponseSDKType;
}
/** QueryVoteRequest is the request type for the Query/Vote RPC method. */
export interface QueryVoteRequest {
    /** proposal_id defines the unique id of the proposal. */
    proposalId: bigint;
    /** voter defines the voter address for the proposals. */
    voter: string;
}
export interface QueryVoteRequestProtoMsg {
    typeUrl: "/cosmos.gov.v1.QueryVoteRequest";
    value: Uint8Array;
}
/**
 * QueryVoteRequest is the request type for the Query/Vote RPC method.
 * @name QueryVoteRequestAmino
 * @package cosmos.gov.v1
 * @see proto type: cosmos.gov.v1.QueryVoteRequest
 */
export interface QueryVoteRequestAmino {
    /**
     * proposal_id defines the unique id of the proposal.
     */
    proposal_id?: string;
    /**
     * voter defines the voter address for the proposals.
     */
    voter?: string;
}
export interface QueryVoteRequestAminoMsg {
    type: "cosmos-sdk/v1/QueryVoteRequest";
    value: QueryVoteRequestAmino;
}
/** QueryVoteRequest is the request type for the Query/Vote RPC method. */
export interface QueryVoteRequestSDKType {
    proposal_id: bigint;
    voter: string;
}
/** QueryVoteResponse is the response type for the Query/Vote RPC method. */
export interface QueryVoteResponse {
    /** vote defines the queried vote. */
    vote?: Vote;
}
export interface QueryVoteResponseProtoMsg {
    typeUrl: "/cosmos.gov.v1.QueryVoteResponse";
    value: Uint8Array;
}
/**
 * QueryVoteResponse is the response type for the Query/Vote RPC method.
 * @name QueryVoteResponseAmino
 * @package cosmos.gov.v1
 * @see proto type: cosmos.gov.v1.QueryVoteResponse
 */
export interface QueryVoteResponseAmino {
    /**
     * vote defines the queried vote.
     */
    vote?: VoteAmino;
}
export interface QueryVoteResponseAminoMsg {
    type: "cosmos-sdk/v1/QueryVoteResponse";
    value: QueryVoteResponseAmino;
}
/** QueryVoteResponse is the response type for the Query/Vote RPC method. */
export interface QueryVoteResponseSDKType {
    vote?: VoteSDKType;
}
/** QueryVotesRequest is the request type for the Query/Votes RPC method. */
export interface QueryVotesRequest {
    /** proposal_id defines the unique id of the proposal. */
    proposalId: bigint;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
export interface QueryVotesRequestProtoMsg {
    typeUrl: "/cosmos.gov.v1.QueryVotesRequest";
    value: Uint8Array;
}
/**
 * QueryVotesRequest is the request type for the Query/Votes RPC method.
 * @name QueryVotesRequestAmino
 * @package cosmos.gov.v1
 * @see proto type: cosmos.gov.v1.QueryVotesRequest
 */
export interface QueryVotesRequestAmino {
    /**
     * proposal_id defines the unique id of the proposal.
     */
    proposal_id?: string;
    /**
     * pagination defines an optional pagination for the request.
     */
    pagination?: PageRequestAmino;
}
export interface QueryVotesRequestAminoMsg {
    type: "cosmos-sdk/v1/QueryVotesRequest";
    value: QueryVotesRequestAmino;
}
/** QueryVotesRequest is the request type for the Query/Votes RPC method. */
export interface QueryVotesRequestSDKType {
    proposal_id: bigint;
    pagination?: PageRequestSDKType;
}
/** QueryVotesResponse is the response type for the Query/Votes RPC method. */
export interface QueryVotesResponse {
    /** votes defines the queried votes. */
    votes: Vote[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
export interface QueryVotesResponseProtoMsg {
    typeUrl: "/cosmos.gov.v1.QueryVotesResponse";
    value: Uint8Array;
}
/**
 * QueryVotesResponse is the response type for the Query/Votes RPC method.
 * @name QueryVotesResponseAmino
 * @package cosmos.gov.v1
 * @see proto type: cosmos.gov.v1.QueryVotesResponse
 */
export interface QueryVotesResponseAmino {
    /**
     * votes defines the queried votes.
     */
    votes?: VoteAmino[];
    /**
     * pagination defines the pagination in the response.
     */
    pagination?: PageResponseAmino;
}
export interface QueryVotesResponseAminoMsg {
    type: "cosmos-sdk/v1/QueryVotesResponse";
    value: QueryVotesResponseAmino;
}
/** QueryVotesResponse is the response type for the Query/Votes RPC method. */
export interface QueryVotesResponseSDKType {
    votes: VoteSDKType[];
    pagination?: PageResponseSDKType;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
    /**
     * params_type defines which parameters to query for, can be one of "voting",
     * "tallying" or "deposit".
     */
    paramsType: string;
}
export interface QueryParamsRequestProtoMsg {
    typeUrl: "/cosmos.gov.v1.QueryParamsRequest";
    value: Uint8Array;
}
/**
 * QueryParamsRequest is the request type for the Query/Params RPC method.
 * @name QueryParamsRequestAmino
 * @package cosmos.gov.v1
 * @see proto type: cosmos.gov.v1.QueryParamsRequest
 */
export interface QueryParamsRequestAmino {
    /**
     * params_type defines which parameters to query for, can be one of "voting",
     * "tallying" or "deposit".
     */
    params_type?: string;
}
export interface QueryParamsRequestAminoMsg {
    type: "cosmos-sdk/v1/QueryParamsRequest";
    value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {
    params_type: string;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /**
     * Deprecated: Prefer to use `params` instead.
     * voting_params defines the parameters related to voting.
     */
    /** @deprecated */
    votingParams?: VotingParams;
    /**
     * Deprecated: Prefer to use `params` instead.
     * deposit_params defines the parameters related to deposit.
     */
    /** @deprecated */
    depositParams?: DepositParams;
    /**
     * Deprecated: Prefer to use `params` instead.
     * tally_params defines the parameters related to tally.
     */
    /** @deprecated */
    tallyParams?: TallyParams;
    /**
     * params defines all the paramaters of x/gov module.
     *
     * Since: cosmos-sdk 0.47
     */
    params?: Params;
}
export interface QueryParamsResponseProtoMsg {
    typeUrl: "/cosmos.gov.v1.QueryParamsResponse";
    value: Uint8Array;
}
/**
 * QueryParamsResponse is the response type for the Query/Params RPC method.
 * @name QueryParamsResponseAmino
 * @package cosmos.gov.v1
 * @see proto type: cosmos.gov.v1.QueryParamsResponse
 */
export interface QueryParamsResponseAmino {
    /**
     * Deprecated: Prefer to use `params` instead.
     * voting_params defines the parameters related to voting.
     * @deprecated
     */
    voting_params?: VotingParamsAmino;
    /**
     * Deprecated: Prefer to use `params` instead.
     * deposit_params defines the parameters related to deposit.
     * @deprecated
     */
    deposit_params?: DepositParamsAmino;
    /**
     * Deprecated: Prefer to use `params` instead.
     * tally_params defines the parameters related to tally.
     * @deprecated
     */
    tally_params?: TallyParamsAmino;
    /**
     * params defines all the paramaters of x/gov module.
     *
     * Since: cosmos-sdk 0.47
     */
    params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
    type: "cosmos-sdk/v1/QueryParamsResponse";
    value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
    /** @deprecated */
    voting_params?: VotingParamsSDKType;
    /** @deprecated */
    deposit_params?: DepositParamsSDKType;
    /** @deprecated */
    tally_params?: TallyParamsSDKType;
    params?: ParamsSDKType;
}
/** QueryDepositRequest is the request type for the Query/Deposit RPC method. */
export interface QueryDepositRequest {
    /** proposal_id defines the unique id of the proposal. */
    proposalId: bigint;
    /** depositor defines the deposit addresses from the proposals. */
    depositor: string;
}
export interface QueryDepositRequestProtoMsg {
    typeUrl: "/cosmos.gov.v1.QueryDepositRequest";
    value: Uint8Array;
}
/**
 * QueryDepositRequest is the request type for the Query/Deposit RPC method.
 * @name QueryDepositRequestAmino
 * @package cosmos.gov.v1
 * @see proto type: cosmos.gov.v1.QueryDepositRequest
 */
export interface QueryDepositRequestAmino {
    /**
     * proposal_id defines the unique id of the proposal.
     */
    proposal_id?: string;
    /**
     * depositor defines the deposit addresses from the proposals.
     */
    depositor?: string;
}
export interface QueryDepositRequestAminoMsg {
    type: "cosmos-sdk/v1/QueryDepositRequest";
    value: QueryDepositRequestAmino;
}
/** QueryDepositRequest is the request type for the Query/Deposit RPC method. */
export interface QueryDepositRequestSDKType {
    proposal_id: bigint;
    depositor: string;
}
/** QueryDepositResponse is the response type for the Query/Deposit RPC method. */
export interface QueryDepositResponse {
    /** deposit defines the requested deposit. */
    deposit?: Deposit;
}
export interface QueryDepositResponseProtoMsg {
    typeUrl: "/cosmos.gov.v1.QueryDepositResponse";
    value: Uint8Array;
}
/**
 * QueryDepositResponse is the response type for the Query/Deposit RPC method.
 * @name QueryDepositResponseAmino
 * @package cosmos.gov.v1
 * @see proto type: cosmos.gov.v1.QueryDepositResponse
 */
export interface QueryDepositResponseAmino {
    /**
     * deposit defines the requested deposit.
     */
    deposit?: DepositAmino;
}
export interface QueryDepositResponseAminoMsg {
    type: "cosmos-sdk/v1/QueryDepositResponse";
    value: QueryDepositResponseAmino;
}
/** QueryDepositResponse is the response type for the Query/Deposit RPC method. */
export interface QueryDepositResponseSDKType {
    deposit?: DepositSDKType;
}
/** QueryDepositsRequest is the request type for the Query/Deposits RPC method. */
export interface QueryDepositsRequest {
    /** proposal_id defines the unique id of the proposal. */
    proposalId: bigint;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
export interface QueryDepositsRequestProtoMsg {
    typeUrl: "/cosmos.gov.v1.QueryDepositsRequest";
    value: Uint8Array;
}
/**
 * QueryDepositsRequest is the request type for the Query/Deposits RPC method.
 * @name QueryDepositsRequestAmino
 * @package cosmos.gov.v1
 * @see proto type: cosmos.gov.v1.QueryDepositsRequest
 */
export interface QueryDepositsRequestAmino {
    /**
     * proposal_id defines the unique id of the proposal.
     */
    proposal_id?: string;
    /**
     * pagination defines an optional pagination for the request.
     */
    pagination?: PageRequestAmino;
}
export interface QueryDepositsRequestAminoMsg {
    type: "cosmos-sdk/v1/QueryDepositsRequest";
    value: QueryDepositsRequestAmino;
}
/** QueryDepositsRequest is the request type for the Query/Deposits RPC method. */
export interface QueryDepositsRequestSDKType {
    proposal_id: bigint;
    pagination?: PageRequestSDKType;
}
/** QueryDepositsResponse is the response type for the Query/Deposits RPC method. */
export interface QueryDepositsResponse {
    /** deposits defines the requested deposits. */
    deposits: Deposit[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
export interface QueryDepositsResponseProtoMsg {
    typeUrl: "/cosmos.gov.v1.QueryDepositsResponse";
    value: Uint8Array;
}
/**
 * QueryDepositsResponse is the response type for the Query/Deposits RPC method.
 * @name QueryDepositsResponseAmino
 * @package cosmos.gov.v1
 * @see proto type: cosmos.gov.v1.QueryDepositsResponse
 */
export interface QueryDepositsResponseAmino {
    /**
     * deposits defines the requested deposits.
     */
    deposits?: DepositAmino[];
    /**
     * pagination defines the pagination in the response.
     */
    pagination?: PageResponseAmino;
}
export interface QueryDepositsResponseAminoMsg {
    type: "cosmos-sdk/v1/QueryDepositsResponse";
    value: QueryDepositsResponseAmino;
}
/** QueryDepositsResponse is the response type for the Query/Deposits RPC method. */
export interface QueryDepositsResponseSDKType {
    deposits: DepositSDKType[];
    pagination?: PageResponseSDKType;
}
/** QueryTallyResultRequest is the request type for the Query/Tally RPC method. */
export interface QueryTallyResultRequest {
    /** proposal_id defines the unique id of the proposal. */
    proposalId: bigint;
}
export interface QueryTallyResultRequestProtoMsg {
    typeUrl: "/cosmos.gov.v1.QueryTallyResultRequest";
    value: Uint8Array;
}
/**
 * QueryTallyResultRequest is the request type for the Query/Tally RPC method.
 * @name QueryTallyResultRequestAmino
 * @package cosmos.gov.v1
 * @see proto type: cosmos.gov.v1.QueryTallyResultRequest
 */
export interface QueryTallyResultRequestAmino {
    /**
     * proposal_id defines the unique id of the proposal.
     */
    proposal_id?: string;
}
export interface QueryTallyResultRequestAminoMsg {
    type: "cosmos-sdk/v1/QueryTallyResultRequest";
    value: QueryTallyResultRequestAmino;
}
/** QueryTallyResultRequest is the request type for the Query/Tally RPC method. */
export interface QueryTallyResultRequestSDKType {
    proposal_id: bigint;
}
/** QueryTallyResultResponse is the response type for the Query/Tally RPC method. */
export interface QueryTallyResultResponse {
    /** tally defines the requested tally. */
    tally?: TallyResult;
}
export interface QueryTallyResultResponseProtoMsg {
    typeUrl: "/cosmos.gov.v1.QueryTallyResultResponse";
    value: Uint8Array;
}
/**
 * QueryTallyResultResponse is the response type for the Query/Tally RPC method.
 * @name QueryTallyResultResponseAmino
 * @package cosmos.gov.v1
 * @see proto type: cosmos.gov.v1.QueryTallyResultResponse
 */
export interface QueryTallyResultResponseAmino {
    /**
     * tally defines the requested tally.
     */
    tally?: TallyResultAmino;
}
export interface QueryTallyResultResponseAminoMsg {
    type: "cosmos-sdk/v1/QueryTallyResultResponse";
    value: QueryTallyResultResponseAmino;
}
/** QueryTallyResultResponse is the response type for the Query/Tally RPC method. */
export interface QueryTallyResultResponseSDKType {
    tally?: TallyResultSDKType;
}
export declare const QueryProposalRequest: {
    typeUrl: string;
    encode(message: QueryProposalRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryProposalRequest;
    fromPartial(object: Partial<QueryProposalRequest>): QueryProposalRequest;
    fromAmino(object: QueryProposalRequestAmino): QueryProposalRequest;
    toAmino(message: QueryProposalRequest): QueryProposalRequestAmino;
    fromAminoMsg(object: QueryProposalRequestAminoMsg): QueryProposalRequest;
    toAminoMsg(message: QueryProposalRequest): QueryProposalRequestAminoMsg;
    fromProtoMsg(message: QueryProposalRequestProtoMsg): QueryProposalRequest;
    toProto(message: QueryProposalRequest): Uint8Array;
    toProtoMsg(message: QueryProposalRequest): QueryProposalRequestProtoMsg;
};
export declare const QueryProposalResponse: {
    typeUrl: string;
    encode(message: QueryProposalResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryProposalResponse;
    fromPartial(object: Partial<QueryProposalResponse>): QueryProposalResponse;
    fromAmino(object: QueryProposalResponseAmino): QueryProposalResponse;
    toAmino(message: QueryProposalResponse): QueryProposalResponseAmino;
    fromAminoMsg(object: QueryProposalResponseAminoMsg): QueryProposalResponse;
    toAminoMsg(message: QueryProposalResponse): QueryProposalResponseAminoMsg;
    fromProtoMsg(message: QueryProposalResponseProtoMsg): QueryProposalResponse;
    toProto(message: QueryProposalResponse): Uint8Array;
    toProtoMsg(message: QueryProposalResponse): QueryProposalResponseProtoMsg;
};
export declare const QueryProposalsRequest: {
    typeUrl: string;
    encode(message: QueryProposalsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryProposalsRequest;
    fromPartial(object: Partial<QueryProposalsRequest>): QueryProposalsRequest;
    fromAmino(object: QueryProposalsRequestAmino): QueryProposalsRequest;
    toAmino(message: QueryProposalsRequest): QueryProposalsRequestAmino;
    fromAminoMsg(object: QueryProposalsRequestAminoMsg): QueryProposalsRequest;
    toAminoMsg(message: QueryProposalsRequest): QueryProposalsRequestAminoMsg;
    fromProtoMsg(message: QueryProposalsRequestProtoMsg): QueryProposalsRequest;
    toProto(message: QueryProposalsRequest): Uint8Array;
    toProtoMsg(message: QueryProposalsRequest): QueryProposalsRequestProtoMsg;
};
export declare const QueryProposalsResponse: {
    typeUrl: string;
    encode(message: QueryProposalsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryProposalsResponse;
    fromPartial(object: Partial<QueryProposalsResponse>): QueryProposalsResponse;
    fromAmino(object: QueryProposalsResponseAmino): QueryProposalsResponse;
    toAmino(message: QueryProposalsResponse): QueryProposalsResponseAmino;
    fromAminoMsg(object: QueryProposalsResponseAminoMsg): QueryProposalsResponse;
    toAminoMsg(message: QueryProposalsResponse): QueryProposalsResponseAminoMsg;
    fromProtoMsg(message: QueryProposalsResponseProtoMsg): QueryProposalsResponse;
    toProto(message: QueryProposalsResponse): Uint8Array;
    toProtoMsg(message: QueryProposalsResponse): QueryProposalsResponseProtoMsg;
};
export declare const QueryVoteRequest: {
    typeUrl: string;
    encode(message: QueryVoteRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryVoteRequest;
    fromPartial(object: Partial<QueryVoteRequest>): QueryVoteRequest;
    fromAmino(object: QueryVoteRequestAmino): QueryVoteRequest;
    toAmino(message: QueryVoteRequest): QueryVoteRequestAmino;
    fromAminoMsg(object: QueryVoteRequestAminoMsg): QueryVoteRequest;
    toAminoMsg(message: QueryVoteRequest): QueryVoteRequestAminoMsg;
    fromProtoMsg(message: QueryVoteRequestProtoMsg): QueryVoteRequest;
    toProto(message: QueryVoteRequest): Uint8Array;
    toProtoMsg(message: QueryVoteRequest): QueryVoteRequestProtoMsg;
};
export declare const QueryVoteResponse: {
    typeUrl: string;
    encode(message: QueryVoteResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryVoteResponse;
    fromPartial(object: Partial<QueryVoteResponse>): QueryVoteResponse;
    fromAmino(object: QueryVoteResponseAmino): QueryVoteResponse;
    toAmino(message: QueryVoteResponse): QueryVoteResponseAmino;
    fromAminoMsg(object: QueryVoteResponseAminoMsg): QueryVoteResponse;
    toAminoMsg(message: QueryVoteResponse): QueryVoteResponseAminoMsg;
    fromProtoMsg(message: QueryVoteResponseProtoMsg): QueryVoteResponse;
    toProto(message: QueryVoteResponse): Uint8Array;
    toProtoMsg(message: QueryVoteResponse): QueryVoteResponseProtoMsg;
};
export declare const QueryVotesRequest: {
    typeUrl: string;
    encode(message: QueryVotesRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryVotesRequest;
    fromPartial(object: Partial<QueryVotesRequest>): QueryVotesRequest;
    fromAmino(object: QueryVotesRequestAmino): QueryVotesRequest;
    toAmino(message: QueryVotesRequest): QueryVotesRequestAmino;
    fromAminoMsg(object: QueryVotesRequestAminoMsg): QueryVotesRequest;
    toAminoMsg(message: QueryVotesRequest): QueryVotesRequestAminoMsg;
    fromProtoMsg(message: QueryVotesRequestProtoMsg): QueryVotesRequest;
    toProto(message: QueryVotesRequest): Uint8Array;
    toProtoMsg(message: QueryVotesRequest): QueryVotesRequestProtoMsg;
};
export declare const QueryVotesResponse: {
    typeUrl: string;
    encode(message: QueryVotesResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryVotesResponse;
    fromPartial(object: Partial<QueryVotesResponse>): QueryVotesResponse;
    fromAmino(object: QueryVotesResponseAmino): QueryVotesResponse;
    toAmino(message: QueryVotesResponse): QueryVotesResponseAmino;
    fromAminoMsg(object: QueryVotesResponseAminoMsg): QueryVotesResponse;
    toAminoMsg(message: QueryVotesResponse): QueryVotesResponseAminoMsg;
    fromProtoMsg(message: QueryVotesResponseProtoMsg): QueryVotesResponse;
    toProto(message: QueryVotesResponse): Uint8Array;
    toProtoMsg(message: QueryVotesResponse): QueryVotesResponseProtoMsg;
};
export declare const QueryParamsRequest: {
    typeUrl: string;
    encode(message: QueryParamsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest;
    fromPartial(object: Partial<QueryParamsRequest>): QueryParamsRequest;
    fromAmino(object: QueryParamsRequestAmino): QueryParamsRequest;
    toAmino(message: QueryParamsRequest): QueryParamsRequestAmino;
    fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest;
    toAminoMsg(message: QueryParamsRequest): QueryParamsRequestAminoMsg;
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
    toAminoMsg(message: QueryParamsResponse): QueryParamsResponseAminoMsg;
    fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse;
    toProto(message: QueryParamsResponse): Uint8Array;
    toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg;
};
export declare const QueryDepositRequest: {
    typeUrl: string;
    encode(message: QueryDepositRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDepositRequest;
    fromPartial(object: Partial<QueryDepositRequest>): QueryDepositRequest;
    fromAmino(object: QueryDepositRequestAmino): QueryDepositRequest;
    toAmino(message: QueryDepositRequest): QueryDepositRequestAmino;
    fromAminoMsg(object: QueryDepositRequestAminoMsg): QueryDepositRequest;
    toAminoMsg(message: QueryDepositRequest): QueryDepositRequestAminoMsg;
    fromProtoMsg(message: QueryDepositRequestProtoMsg): QueryDepositRequest;
    toProto(message: QueryDepositRequest): Uint8Array;
    toProtoMsg(message: QueryDepositRequest): QueryDepositRequestProtoMsg;
};
export declare const QueryDepositResponse: {
    typeUrl: string;
    encode(message: QueryDepositResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDepositResponse;
    fromPartial(object: Partial<QueryDepositResponse>): QueryDepositResponse;
    fromAmino(object: QueryDepositResponseAmino): QueryDepositResponse;
    toAmino(message: QueryDepositResponse): QueryDepositResponseAmino;
    fromAminoMsg(object: QueryDepositResponseAminoMsg): QueryDepositResponse;
    toAminoMsg(message: QueryDepositResponse): QueryDepositResponseAminoMsg;
    fromProtoMsg(message: QueryDepositResponseProtoMsg): QueryDepositResponse;
    toProto(message: QueryDepositResponse): Uint8Array;
    toProtoMsg(message: QueryDepositResponse): QueryDepositResponseProtoMsg;
};
export declare const QueryDepositsRequest: {
    typeUrl: string;
    encode(message: QueryDepositsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDepositsRequest;
    fromPartial(object: Partial<QueryDepositsRequest>): QueryDepositsRequest;
    fromAmino(object: QueryDepositsRequestAmino): QueryDepositsRequest;
    toAmino(message: QueryDepositsRequest): QueryDepositsRequestAmino;
    fromAminoMsg(object: QueryDepositsRequestAminoMsg): QueryDepositsRequest;
    toAminoMsg(message: QueryDepositsRequest): QueryDepositsRequestAminoMsg;
    fromProtoMsg(message: QueryDepositsRequestProtoMsg): QueryDepositsRequest;
    toProto(message: QueryDepositsRequest): Uint8Array;
    toProtoMsg(message: QueryDepositsRequest): QueryDepositsRequestProtoMsg;
};
export declare const QueryDepositsResponse: {
    typeUrl: string;
    encode(message: QueryDepositsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDepositsResponse;
    fromPartial(object: Partial<QueryDepositsResponse>): QueryDepositsResponse;
    fromAmino(object: QueryDepositsResponseAmino): QueryDepositsResponse;
    toAmino(message: QueryDepositsResponse): QueryDepositsResponseAmino;
    fromAminoMsg(object: QueryDepositsResponseAminoMsg): QueryDepositsResponse;
    toAminoMsg(message: QueryDepositsResponse): QueryDepositsResponseAminoMsg;
    fromProtoMsg(message: QueryDepositsResponseProtoMsg): QueryDepositsResponse;
    toProto(message: QueryDepositsResponse): Uint8Array;
    toProtoMsg(message: QueryDepositsResponse): QueryDepositsResponseProtoMsg;
};
export declare const QueryTallyResultRequest: {
    typeUrl: string;
    encode(message: QueryTallyResultRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryTallyResultRequest;
    fromPartial(object: Partial<QueryTallyResultRequest>): QueryTallyResultRequest;
    fromAmino(object: QueryTallyResultRequestAmino): QueryTallyResultRequest;
    toAmino(message: QueryTallyResultRequest): QueryTallyResultRequestAmino;
    fromAminoMsg(object: QueryTallyResultRequestAminoMsg): QueryTallyResultRequest;
    toAminoMsg(message: QueryTallyResultRequest): QueryTallyResultRequestAminoMsg;
    fromProtoMsg(message: QueryTallyResultRequestProtoMsg): QueryTallyResultRequest;
    toProto(message: QueryTallyResultRequest): Uint8Array;
    toProtoMsg(message: QueryTallyResultRequest): QueryTallyResultRequestProtoMsg;
};
export declare const QueryTallyResultResponse: {
    typeUrl: string;
    encode(message: QueryTallyResultResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryTallyResultResponse;
    fromPartial(object: Partial<QueryTallyResultResponse>): QueryTallyResultResponse;
    fromAmino(object: QueryTallyResultResponseAmino): QueryTallyResultResponse;
    toAmino(message: QueryTallyResultResponse): QueryTallyResultResponseAmino;
    fromAminoMsg(object: QueryTallyResultResponseAminoMsg): QueryTallyResultResponse;
    toAminoMsg(message: QueryTallyResultResponse): QueryTallyResultResponseAminoMsg;
    fromProtoMsg(message: QueryTallyResultResponseProtoMsg): QueryTallyResultResponse;
    toProto(message: QueryTallyResultResponse): Uint8Array;
    toProtoMsg(message: QueryTallyResultResponse): QueryTallyResultResponseProtoMsg;
};
