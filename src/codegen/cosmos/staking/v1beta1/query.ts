import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { Validator, ValidatorAmino, ValidatorSDKType, DelegationResponse, DelegationResponseAmino, DelegationResponseSDKType, UnbondingDelegation, UnbondingDelegationAmino, UnbondingDelegationSDKType, RedelegationResponse, RedelegationResponseAmino, RedelegationResponseSDKType, HistoricalInfo, HistoricalInfoAmino, HistoricalInfoSDKType, Pool, PoolAmino, PoolSDKType, Params, ParamsAmino, ParamsSDKType, TokenizeShareRecord, TokenizeShareRecordAmino, TokenizeShareRecordSDKType } from "./staking";
import { Coin, CoinAmino, CoinSDKType } from "../../base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** QueryValidatorsRequest is request type for Query/Validators RPC method. */
export interface QueryValidatorsRequest {
  /** status enables to query for validators matching a given status. */
  status: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
export interface QueryValidatorsRequestProtoMsg {
  typeUrl: "/cosmos.staking.v1beta1.QueryValidatorsRequest";
  value: Uint8Array;
}
/** QueryValidatorsRequest is request type for Query/Validators RPC method. */
export interface QueryValidatorsRequestAmino {
  /** status enables to query for validators matching a given status. */
  status?: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QueryValidatorsRequestAminoMsg {
  type: "cosmos-sdk/QueryValidatorsRequest";
  value: QueryValidatorsRequestAmino;
}
/** QueryValidatorsRequest is request type for Query/Validators RPC method. */
export interface QueryValidatorsRequestSDKType {
  status: string;
  pagination?: PageRequestSDKType;
}
/** QueryValidatorsResponse is response type for the Query/Validators RPC method */
export interface QueryValidatorsResponse {
  /** validators contains all the queried validators. */
  validators: Validator[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
export interface QueryValidatorsResponseProtoMsg {
  typeUrl: "/cosmos.staking.v1beta1.QueryValidatorsResponse";
  value: Uint8Array;
}
/** QueryValidatorsResponse is response type for the Query/Validators RPC method */
export interface QueryValidatorsResponseAmino {
  /** validators contains all the queried validators. */
  validators?: ValidatorAmino[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
}
export interface QueryValidatorsResponseAminoMsg {
  type: "cosmos-sdk/QueryValidatorsResponse";
  value: QueryValidatorsResponseAmino;
}
/** QueryValidatorsResponse is response type for the Query/Validators RPC method */
export interface QueryValidatorsResponseSDKType {
  validators: ValidatorSDKType[];
  pagination?: PageResponseSDKType;
}
/** QueryValidatorRequest is response type for the Query/Validator RPC method */
export interface QueryValidatorRequest {
  /** validator_addr defines the validator address to query for. */
  validatorAddr: string;
}
export interface QueryValidatorRequestProtoMsg {
  typeUrl: "/cosmos.staking.v1beta1.QueryValidatorRequest";
  value: Uint8Array;
}
/** QueryValidatorRequest is response type for the Query/Validator RPC method */
export interface QueryValidatorRequestAmino {
  /** validator_addr defines the validator address to query for. */
  validator_addr?: string;
}
export interface QueryValidatorRequestAminoMsg {
  type: "cosmos-sdk/QueryValidatorRequest";
  value: QueryValidatorRequestAmino;
}
/** QueryValidatorRequest is response type for the Query/Validator RPC method */
export interface QueryValidatorRequestSDKType {
  validator_addr: string;
}
/** QueryValidatorResponse is response type for the Query/Validator RPC method */
export interface QueryValidatorResponse {
  /** validator defines the validator info. */
  validator: Validator;
}
export interface QueryValidatorResponseProtoMsg {
  typeUrl: "/cosmos.staking.v1beta1.QueryValidatorResponse";
  value: Uint8Array;
}
/** QueryValidatorResponse is response type for the Query/Validator RPC method */
export interface QueryValidatorResponseAmino {
  /** validator defines the validator info. */
  validator?: ValidatorAmino;
}
export interface QueryValidatorResponseAminoMsg {
  type: "cosmos-sdk/QueryValidatorResponse";
  value: QueryValidatorResponseAmino;
}
/** QueryValidatorResponse is response type for the Query/Validator RPC method */
export interface QueryValidatorResponseSDKType {
  validator: ValidatorSDKType;
}
/**
 * QueryValidatorDelegationsRequest is request type for the
 * Query/ValidatorDelegations RPC method
 */
export interface QueryValidatorDelegationsRequest {
  /** validator_addr defines the validator address to query for. */
  validatorAddr: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
export interface QueryValidatorDelegationsRequestProtoMsg {
  typeUrl: "/cosmos.staking.v1beta1.QueryValidatorDelegationsRequest";
  value: Uint8Array;
}
/**
 * QueryValidatorDelegationsRequest is request type for the
 * Query/ValidatorDelegations RPC method
 */
export interface QueryValidatorDelegationsRequestAmino {
  /** validator_addr defines the validator address to query for. */
  validator_addr?: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QueryValidatorDelegationsRequestAminoMsg {
  type: "cosmos-sdk/QueryValidatorDelegationsRequest";
  value: QueryValidatorDelegationsRequestAmino;
}
/**
 * QueryValidatorDelegationsRequest is request type for the
 * Query/ValidatorDelegations RPC method
 */
export interface QueryValidatorDelegationsRequestSDKType {
  validator_addr: string;
  pagination?: PageRequestSDKType;
}
/**
 * QueryValidatorDelegationsResponse is response type for the
 * Query/ValidatorDelegations RPC method
 */
export interface QueryValidatorDelegationsResponse {
  delegationResponses: DelegationResponse[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
export interface QueryValidatorDelegationsResponseProtoMsg {
  typeUrl: "/cosmos.staking.v1beta1.QueryValidatorDelegationsResponse";
  value: Uint8Array;
}
/**
 * QueryValidatorDelegationsResponse is response type for the
 * Query/ValidatorDelegations RPC method
 */
export interface QueryValidatorDelegationsResponseAmino {
  delegation_responses?: DelegationResponseAmino[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
}
export interface QueryValidatorDelegationsResponseAminoMsg {
  type: "cosmos-sdk/QueryValidatorDelegationsResponse";
  value: QueryValidatorDelegationsResponseAmino;
}
/**
 * QueryValidatorDelegationsResponse is response type for the
 * Query/ValidatorDelegations RPC method
 */
export interface QueryValidatorDelegationsResponseSDKType {
  delegation_responses: DelegationResponseSDKType[];
  pagination?: PageResponseSDKType;
}
/**
 * QueryValidatorUnbondingDelegationsRequest is required type for the
 * Query/ValidatorUnbondingDelegations RPC method
 */
export interface QueryValidatorUnbondingDelegationsRequest {
  /** validator_addr defines the validator address to query for. */
  validatorAddr: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
export interface QueryValidatorUnbondingDelegationsRequestProtoMsg {
  typeUrl: "/cosmos.staking.v1beta1.QueryValidatorUnbondingDelegationsRequest";
  value: Uint8Array;
}
/**
 * QueryValidatorUnbondingDelegationsRequest is required type for the
 * Query/ValidatorUnbondingDelegations RPC method
 */
export interface QueryValidatorUnbondingDelegationsRequestAmino {
  /** validator_addr defines the validator address to query for. */
  validator_addr?: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QueryValidatorUnbondingDelegationsRequestAminoMsg {
  type: "cosmos-sdk/QueryValidatorUnbondingDelegationsRequest";
  value: QueryValidatorUnbondingDelegationsRequestAmino;
}
/**
 * QueryValidatorUnbondingDelegationsRequest is required type for the
 * Query/ValidatorUnbondingDelegations RPC method
 */
export interface QueryValidatorUnbondingDelegationsRequestSDKType {
  validator_addr: string;
  pagination?: PageRequestSDKType;
}
/**
 * QueryValidatorUnbondingDelegationsResponse is response type for the
 * Query/ValidatorUnbondingDelegations RPC method.
 */
export interface QueryValidatorUnbondingDelegationsResponse {
  unbondingResponses: UnbondingDelegation[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
export interface QueryValidatorUnbondingDelegationsResponseProtoMsg {
  typeUrl: "/cosmos.staking.v1beta1.QueryValidatorUnbondingDelegationsResponse";
  value: Uint8Array;
}
/**
 * QueryValidatorUnbondingDelegationsResponse is response type for the
 * Query/ValidatorUnbondingDelegations RPC method.
 */
export interface QueryValidatorUnbondingDelegationsResponseAmino {
  unbonding_responses?: UnbondingDelegationAmino[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
}
export interface QueryValidatorUnbondingDelegationsResponseAminoMsg {
  type: "cosmos-sdk/QueryValidatorUnbondingDelegationsResponse";
  value: QueryValidatorUnbondingDelegationsResponseAmino;
}
/**
 * QueryValidatorUnbondingDelegationsResponse is response type for the
 * Query/ValidatorUnbondingDelegations RPC method.
 */
export interface QueryValidatorUnbondingDelegationsResponseSDKType {
  unbonding_responses: UnbondingDelegationSDKType[];
  pagination?: PageResponseSDKType;
}
/** QueryDelegationRequest is request type for the Query/Delegation RPC method. */
export interface QueryDelegationRequest {
  /** delegator_addr defines the delegator address to query for. */
  delegatorAddr: string;
  /** validator_addr defines the validator address to query for. */
  validatorAddr: string;
}
export interface QueryDelegationRequestProtoMsg {
  typeUrl: "/cosmos.staking.v1beta1.QueryDelegationRequest";
  value: Uint8Array;
}
/** QueryDelegationRequest is request type for the Query/Delegation RPC method. */
export interface QueryDelegationRequestAmino {
  /** delegator_addr defines the delegator address to query for. */
  delegator_addr?: string;
  /** validator_addr defines the validator address to query for. */
  validator_addr?: string;
}
export interface QueryDelegationRequestAminoMsg {
  type: "cosmos-sdk/QueryDelegationRequest";
  value: QueryDelegationRequestAmino;
}
/** QueryDelegationRequest is request type for the Query/Delegation RPC method. */
export interface QueryDelegationRequestSDKType {
  delegator_addr: string;
  validator_addr: string;
}
/** QueryDelegationResponse is response type for the Query/Delegation RPC method. */
export interface QueryDelegationResponse {
  /** delegation_responses defines the delegation info of a delegation. */
  delegationResponse?: DelegationResponse;
}
export interface QueryDelegationResponseProtoMsg {
  typeUrl: "/cosmos.staking.v1beta1.QueryDelegationResponse";
  value: Uint8Array;
}
/** QueryDelegationResponse is response type for the Query/Delegation RPC method. */
export interface QueryDelegationResponseAmino {
  /** delegation_responses defines the delegation info of a delegation. */
  delegation_response?: DelegationResponseAmino;
}
export interface QueryDelegationResponseAminoMsg {
  type: "cosmos-sdk/QueryDelegationResponse";
  value: QueryDelegationResponseAmino;
}
/** QueryDelegationResponse is response type for the Query/Delegation RPC method. */
export interface QueryDelegationResponseSDKType {
  delegation_response?: DelegationResponseSDKType;
}
/**
 * QueryUnbondingDelegationRequest is request type for the
 * Query/UnbondingDelegation RPC method.
 */
export interface QueryUnbondingDelegationRequest {
  /** delegator_addr defines the delegator address to query for. */
  delegatorAddr: string;
  /** validator_addr defines the validator address to query for. */
  validatorAddr: string;
}
export interface QueryUnbondingDelegationRequestProtoMsg {
  typeUrl: "/cosmos.staking.v1beta1.QueryUnbondingDelegationRequest";
  value: Uint8Array;
}
/**
 * QueryUnbondingDelegationRequest is request type for the
 * Query/UnbondingDelegation RPC method.
 */
export interface QueryUnbondingDelegationRequestAmino {
  /** delegator_addr defines the delegator address to query for. */
  delegator_addr?: string;
  /** validator_addr defines the validator address to query for. */
  validator_addr?: string;
}
export interface QueryUnbondingDelegationRequestAminoMsg {
  type: "cosmos-sdk/QueryUnbondingDelegationRequest";
  value: QueryUnbondingDelegationRequestAmino;
}
/**
 * QueryUnbondingDelegationRequest is request type for the
 * Query/UnbondingDelegation RPC method.
 */
export interface QueryUnbondingDelegationRequestSDKType {
  delegator_addr: string;
  validator_addr: string;
}
/**
 * QueryDelegationResponse is response type for the Query/UnbondingDelegation
 * RPC method.
 */
export interface QueryUnbondingDelegationResponse {
  /** unbond defines the unbonding information of a delegation. */
  unbond: UnbondingDelegation;
}
export interface QueryUnbondingDelegationResponseProtoMsg {
  typeUrl: "/cosmos.staking.v1beta1.QueryUnbondingDelegationResponse";
  value: Uint8Array;
}
/**
 * QueryDelegationResponse is response type for the Query/UnbondingDelegation
 * RPC method.
 */
export interface QueryUnbondingDelegationResponseAmino {
  /** unbond defines the unbonding information of a delegation. */
  unbond?: UnbondingDelegationAmino;
}
export interface QueryUnbondingDelegationResponseAminoMsg {
  type: "cosmos-sdk/QueryUnbondingDelegationResponse";
  value: QueryUnbondingDelegationResponseAmino;
}
/**
 * QueryDelegationResponse is response type for the Query/UnbondingDelegation
 * RPC method.
 */
export interface QueryUnbondingDelegationResponseSDKType {
  unbond: UnbondingDelegationSDKType;
}
/**
 * QueryDelegatorDelegationsRequest is request type for the
 * Query/DelegatorDelegations RPC method.
 */
export interface QueryDelegatorDelegationsRequest {
  /** delegator_addr defines the delegator address to query for. */
  delegatorAddr: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
export interface QueryDelegatorDelegationsRequestProtoMsg {
  typeUrl: "/cosmos.staking.v1beta1.QueryDelegatorDelegationsRequest";
  value: Uint8Array;
}
/**
 * QueryDelegatorDelegationsRequest is request type for the
 * Query/DelegatorDelegations RPC method.
 */
export interface QueryDelegatorDelegationsRequestAmino {
  /** delegator_addr defines the delegator address to query for. */
  delegator_addr?: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QueryDelegatorDelegationsRequestAminoMsg {
  type: "cosmos-sdk/QueryDelegatorDelegationsRequest";
  value: QueryDelegatorDelegationsRequestAmino;
}
/**
 * QueryDelegatorDelegationsRequest is request type for the
 * Query/DelegatorDelegations RPC method.
 */
export interface QueryDelegatorDelegationsRequestSDKType {
  delegator_addr: string;
  pagination?: PageRequestSDKType;
}
/**
 * QueryDelegatorDelegationsResponse is response type for the
 * Query/DelegatorDelegations RPC method.
 */
export interface QueryDelegatorDelegationsResponse {
  /** delegation_responses defines all the delegations' info of a delegator. */
  delegationResponses: DelegationResponse[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
export interface QueryDelegatorDelegationsResponseProtoMsg {
  typeUrl: "/cosmos.staking.v1beta1.QueryDelegatorDelegationsResponse";
  value: Uint8Array;
}
/**
 * QueryDelegatorDelegationsResponse is response type for the
 * Query/DelegatorDelegations RPC method.
 */
export interface QueryDelegatorDelegationsResponseAmino {
  /** delegation_responses defines all the delegations' info of a delegator. */
  delegation_responses?: DelegationResponseAmino[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
}
export interface QueryDelegatorDelegationsResponseAminoMsg {
  type: "cosmos-sdk/QueryDelegatorDelegationsResponse";
  value: QueryDelegatorDelegationsResponseAmino;
}
/**
 * QueryDelegatorDelegationsResponse is response type for the
 * Query/DelegatorDelegations RPC method.
 */
export interface QueryDelegatorDelegationsResponseSDKType {
  delegation_responses: DelegationResponseSDKType[];
  pagination?: PageResponseSDKType;
}
/**
 * QueryDelegatorUnbondingDelegationsRequest is request type for the
 * Query/DelegatorUnbondingDelegations RPC method.
 */
export interface QueryDelegatorUnbondingDelegationsRequest {
  /** delegator_addr defines the delegator address to query for. */
  delegatorAddr: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
export interface QueryDelegatorUnbondingDelegationsRequestProtoMsg {
  typeUrl: "/cosmos.staking.v1beta1.QueryDelegatorUnbondingDelegationsRequest";
  value: Uint8Array;
}
/**
 * QueryDelegatorUnbondingDelegationsRequest is request type for the
 * Query/DelegatorUnbondingDelegations RPC method.
 */
export interface QueryDelegatorUnbondingDelegationsRequestAmino {
  /** delegator_addr defines the delegator address to query for. */
  delegator_addr?: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QueryDelegatorUnbondingDelegationsRequestAminoMsg {
  type: "cosmos-sdk/QueryDelegatorUnbondingDelegationsRequest";
  value: QueryDelegatorUnbondingDelegationsRequestAmino;
}
/**
 * QueryDelegatorUnbondingDelegationsRequest is request type for the
 * Query/DelegatorUnbondingDelegations RPC method.
 */
export interface QueryDelegatorUnbondingDelegationsRequestSDKType {
  delegator_addr: string;
  pagination?: PageRequestSDKType;
}
/**
 * QueryUnbondingDelegatorDelegationsResponse is response type for the
 * Query/UnbondingDelegatorDelegations RPC method.
 */
export interface QueryDelegatorUnbondingDelegationsResponse {
  unbondingResponses: UnbondingDelegation[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
export interface QueryDelegatorUnbondingDelegationsResponseProtoMsg {
  typeUrl: "/cosmos.staking.v1beta1.QueryDelegatorUnbondingDelegationsResponse";
  value: Uint8Array;
}
/**
 * QueryUnbondingDelegatorDelegationsResponse is response type for the
 * Query/UnbondingDelegatorDelegations RPC method.
 */
export interface QueryDelegatorUnbondingDelegationsResponseAmino {
  unbonding_responses?: UnbondingDelegationAmino[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
}
export interface QueryDelegatorUnbondingDelegationsResponseAminoMsg {
  type: "cosmos-sdk/QueryDelegatorUnbondingDelegationsResponse";
  value: QueryDelegatorUnbondingDelegationsResponseAmino;
}
/**
 * QueryUnbondingDelegatorDelegationsResponse is response type for the
 * Query/UnbondingDelegatorDelegations RPC method.
 */
export interface QueryDelegatorUnbondingDelegationsResponseSDKType {
  unbonding_responses: UnbondingDelegationSDKType[];
  pagination?: PageResponseSDKType;
}
/**
 * QueryRedelegationsRequest is request type for the Query/Redelegations RPC
 * method.
 */
export interface QueryRedelegationsRequest {
  /** delegator_addr defines the delegator address to query for. */
  delegatorAddr: string;
  /** src_validator_addr defines the validator address to redelegate from. */
  srcValidatorAddr: string;
  /** dst_validator_addr defines the validator address to redelegate to. */
  dstValidatorAddr: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
export interface QueryRedelegationsRequestProtoMsg {
  typeUrl: "/cosmos.staking.v1beta1.QueryRedelegationsRequest";
  value: Uint8Array;
}
/**
 * QueryRedelegationsRequest is request type for the Query/Redelegations RPC
 * method.
 */
export interface QueryRedelegationsRequestAmino {
  /** delegator_addr defines the delegator address to query for. */
  delegator_addr?: string;
  /** src_validator_addr defines the validator address to redelegate from. */
  src_validator_addr?: string;
  /** dst_validator_addr defines the validator address to redelegate to. */
  dst_validator_addr?: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QueryRedelegationsRequestAminoMsg {
  type: "cosmos-sdk/QueryRedelegationsRequest";
  value: QueryRedelegationsRequestAmino;
}
/**
 * QueryRedelegationsRequest is request type for the Query/Redelegations RPC
 * method.
 */
export interface QueryRedelegationsRequestSDKType {
  delegator_addr: string;
  src_validator_addr: string;
  dst_validator_addr: string;
  pagination?: PageRequestSDKType;
}
/**
 * QueryRedelegationsResponse is response type for the Query/Redelegations RPC
 * method.
 */
export interface QueryRedelegationsResponse {
  redelegationResponses: RedelegationResponse[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
export interface QueryRedelegationsResponseProtoMsg {
  typeUrl: "/cosmos.staking.v1beta1.QueryRedelegationsResponse";
  value: Uint8Array;
}
/**
 * QueryRedelegationsResponse is response type for the Query/Redelegations RPC
 * method.
 */
export interface QueryRedelegationsResponseAmino {
  redelegation_responses?: RedelegationResponseAmino[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
}
export interface QueryRedelegationsResponseAminoMsg {
  type: "cosmos-sdk/QueryRedelegationsResponse";
  value: QueryRedelegationsResponseAmino;
}
/**
 * QueryRedelegationsResponse is response type for the Query/Redelegations RPC
 * method.
 */
export interface QueryRedelegationsResponseSDKType {
  redelegation_responses: RedelegationResponseSDKType[];
  pagination?: PageResponseSDKType;
}
/**
 * QueryDelegatorValidatorsRequest is request type for the
 * Query/DelegatorValidators RPC method.
 */
export interface QueryDelegatorValidatorsRequest {
  /** delegator_addr defines the delegator address to query for. */
  delegatorAddr: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
export interface QueryDelegatorValidatorsRequestProtoMsg {
  typeUrl: "/cosmos.staking.v1beta1.QueryDelegatorValidatorsRequest";
  value: Uint8Array;
}
/**
 * QueryDelegatorValidatorsRequest is request type for the
 * Query/DelegatorValidators RPC method.
 */
export interface QueryDelegatorValidatorsRequestAmino {
  /** delegator_addr defines the delegator address to query for. */
  delegator_addr?: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QueryDelegatorValidatorsRequestAminoMsg {
  type: "cosmos-sdk/QueryDelegatorValidatorsRequest";
  value: QueryDelegatorValidatorsRequestAmino;
}
/**
 * QueryDelegatorValidatorsRequest is request type for the
 * Query/DelegatorValidators RPC method.
 */
export interface QueryDelegatorValidatorsRequestSDKType {
  delegator_addr: string;
  pagination?: PageRequestSDKType;
}
/**
 * QueryDelegatorValidatorsResponse is response type for the
 * Query/DelegatorValidators RPC method.
 */
export interface QueryDelegatorValidatorsResponse {
  /** validators defines the validators' info of a delegator. */
  validators: Validator[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
export interface QueryDelegatorValidatorsResponseProtoMsg {
  typeUrl: "/cosmos.staking.v1beta1.QueryDelegatorValidatorsResponse";
  value: Uint8Array;
}
/**
 * QueryDelegatorValidatorsResponse is response type for the
 * Query/DelegatorValidators RPC method.
 */
export interface QueryDelegatorValidatorsResponseAmino {
  /** validators defines the validators' info of a delegator. */
  validators?: ValidatorAmino[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
}
export interface QueryDelegatorValidatorsResponseAminoMsg {
  type: "cosmos-sdk/QueryDelegatorValidatorsResponse";
  value: QueryDelegatorValidatorsResponseAmino;
}
/**
 * QueryDelegatorValidatorsResponse is response type for the
 * Query/DelegatorValidators RPC method.
 */
export interface QueryDelegatorValidatorsResponseSDKType {
  validators: ValidatorSDKType[];
  pagination?: PageResponseSDKType;
}
/**
 * QueryDelegatorValidatorRequest is request type for the
 * Query/DelegatorValidator RPC method.
 */
export interface QueryDelegatorValidatorRequest {
  /** delegator_addr defines the delegator address to query for. */
  delegatorAddr: string;
  /** validator_addr defines the validator address to query for. */
  validatorAddr: string;
}
export interface QueryDelegatorValidatorRequestProtoMsg {
  typeUrl: "/cosmos.staking.v1beta1.QueryDelegatorValidatorRequest";
  value: Uint8Array;
}
/**
 * QueryDelegatorValidatorRequest is request type for the
 * Query/DelegatorValidator RPC method.
 */
export interface QueryDelegatorValidatorRequestAmino {
  /** delegator_addr defines the delegator address to query for. */
  delegator_addr?: string;
  /** validator_addr defines the validator address to query for. */
  validator_addr?: string;
}
export interface QueryDelegatorValidatorRequestAminoMsg {
  type: "cosmos-sdk/QueryDelegatorValidatorRequest";
  value: QueryDelegatorValidatorRequestAmino;
}
/**
 * QueryDelegatorValidatorRequest is request type for the
 * Query/DelegatorValidator RPC method.
 */
export interface QueryDelegatorValidatorRequestSDKType {
  delegator_addr: string;
  validator_addr: string;
}
/**
 * QueryDelegatorValidatorResponse response type for the
 * Query/DelegatorValidator RPC method.
 */
export interface QueryDelegatorValidatorResponse {
  /** validator defines the validator info. */
  validator: Validator;
}
export interface QueryDelegatorValidatorResponseProtoMsg {
  typeUrl: "/cosmos.staking.v1beta1.QueryDelegatorValidatorResponse";
  value: Uint8Array;
}
/**
 * QueryDelegatorValidatorResponse response type for the
 * Query/DelegatorValidator RPC method.
 */
export interface QueryDelegatorValidatorResponseAmino {
  /** validator defines the validator info. */
  validator?: ValidatorAmino;
}
export interface QueryDelegatorValidatorResponseAminoMsg {
  type: "cosmos-sdk/QueryDelegatorValidatorResponse";
  value: QueryDelegatorValidatorResponseAmino;
}
/**
 * QueryDelegatorValidatorResponse response type for the
 * Query/DelegatorValidator RPC method.
 */
export interface QueryDelegatorValidatorResponseSDKType {
  validator: ValidatorSDKType;
}
/**
 * QueryHistoricalInfoRequest is request type for the Query/HistoricalInfo RPC
 * method.
 */
export interface QueryHistoricalInfoRequest {
  /** height defines at which height to query the historical info. */
  height: bigint;
}
export interface QueryHistoricalInfoRequestProtoMsg {
  typeUrl: "/cosmos.staking.v1beta1.QueryHistoricalInfoRequest";
  value: Uint8Array;
}
/**
 * QueryHistoricalInfoRequest is request type for the Query/HistoricalInfo RPC
 * method.
 */
export interface QueryHistoricalInfoRequestAmino {
  /** height defines at which height to query the historical info. */
  height?: string;
}
export interface QueryHistoricalInfoRequestAminoMsg {
  type: "cosmos-sdk/QueryHistoricalInfoRequest";
  value: QueryHistoricalInfoRequestAmino;
}
/**
 * QueryHistoricalInfoRequest is request type for the Query/HistoricalInfo RPC
 * method.
 */
export interface QueryHistoricalInfoRequestSDKType {
  height: bigint;
}
/**
 * QueryHistoricalInfoResponse is response type for the Query/HistoricalInfo RPC
 * method.
 */
export interface QueryHistoricalInfoResponse {
  /** hist defines the historical info at the given height. */
  hist?: HistoricalInfo;
}
export interface QueryHistoricalInfoResponseProtoMsg {
  typeUrl: "/cosmos.staking.v1beta1.QueryHistoricalInfoResponse";
  value: Uint8Array;
}
/**
 * QueryHistoricalInfoResponse is response type for the Query/HistoricalInfo RPC
 * method.
 */
export interface QueryHistoricalInfoResponseAmino {
  /** hist defines the historical info at the given height. */
  hist?: HistoricalInfoAmino;
}
export interface QueryHistoricalInfoResponseAminoMsg {
  type: "cosmos-sdk/QueryHistoricalInfoResponse";
  value: QueryHistoricalInfoResponseAmino;
}
/**
 * QueryHistoricalInfoResponse is response type for the Query/HistoricalInfo RPC
 * method.
 */
export interface QueryHistoricalInfoResponseSDKType {
  hist?: HistoricalInfoSDKType;
}
/** QueryPoolRequest is request type for the Query/Pool RPC method. */
export interface QueryPoolRequest {}
export interface QueryPoolRequestProtoMsg {
  typeUrl: "/cosmos.staking.v1beta1.QueryPoolRequest";
  value: Uint8Array;
}
/** QueryPoolRequest is request type for the Query/Pool RPC method. */
export interface QueryPoolRequestAmino {}
export interface QueryPoolRequestAminoMsg {
  type: "cosmos-sdk/QueryPoolRequest";
  value: QueryPoolRequestAmino;
}
/** QueryPoolRequest is request type for the Query/Pool RPC method. */
export interface QueryPoolRequestSDKType {}
/** QueryPoolResponse is response type for the Query/Pool RPC method. */
export interface QueryPoolResponse {
  /** pool defines the pool info. */
  pool: Pool;
}
export interface QueryPoolResponseProtoMsg {
  typeUrl: "/cosmos.staking.v1beta1.QueryPoolResponse";
  value: Uint8Array;
}
/** QueryPoolResponse is response type for the Query/Pool RPC method. */
export interface QueryPoolResponseAmino {
  /** pool defines the pool info. */
  pool?: PoolAmino;
}
export interface QueryPoolResponseAminoMsg {
  type: "cosmos-sdk/QueryPoolResponse";
  value: QueryPoolResponseAmino;
}
/** QueryPoolResponse is response type for the Query/Pool RPC method. */
export interface QueryPoolResponseSDKType {
  pool: PoolSDKType;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/cosmos.staking.v1beta1.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "cosmos-sdk/QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/cosmos.staking.v1beta1.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
  /** params holds all the parameters of this module. */
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "cosmos-sdk/QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
/**
 * QueryTokenizeShareRecordByIdRequest is request type for the
 * Query/QueryTokenizeShareRecordById RPC method.
 */
export interface QueryTokenizeShareRecordByIdRequest {
  id: bigint;
}
export interface QueryTokenizeShareRecordByIdRequestProtoMsg {
  typeUrl: "/cosmos.staking.v1beta1.QueryTokenizeShareRecordByIdRequest";
  value: Uint8Array;
}
/**
 * QueryTokenizeShareRecordByIdRequest is request type for the
 * Query/QueryTokenizeShareRecordById RPC method.
 */
export interface QueryTokenizeShareRecordByIdRequestAmino {
  id?: string;
}
export interface QueryTokenizeShareRecordByIdRequestAminoMsg {
  type: "cosmos-sdk/QueryTokenizeShareRecordByIdRequest";
  value: QueryTokenizeShareRecordByIdRequestAmino;
}
/**
 * QueryTokenizeShareRecordByIdRequest is request type for the
 * Query/QueryTokenizeShareRecordById RPC method.
 */
export interface QueryTokenizeShareRecordByIdRequestSDKType {
  id: bigint;
}
/**
 * QueryTokenizeShareRecordByIdRequest is response type for the
 * Query/QueryTokenizeShareRecordById RPC method.
 */
export interface QueryTokenizeShareRecordByIdResponse {
  record: TokenizeShareRecord;
}
export interface QueryTokenizeShareRecordByIdResponseProtoMsg {
  typeUrl: "/cosmos.staking.v1beta1.QueryTokenizeShareRecordByIdResponse";
  value: Uint8Array;
}
/**
 * QueryTokenizeShareRecordByIdRequest is response type for the
 * Query/QueryTokenizeShareRecordById RPC method.
 */
export interface QueryTokenizeShareRecordByIdResponseAmino {
  record?: TokenizeShareRecordAmino;
}
export interface QueryTokenizeShareRecordByIdResponseAminoMsg {
  type: "cosmos-sdk/QueryTokenizeShareRecordByIdResponse";
  value: QueryTokenizeShareRecordByIdResponseAmino;
}
/**
 * QueryTokenizeShareRecordByIdRequest is response type for the
 * Query/QueryTokenizeShareRecordById RPC method.
 */
export interface QueryTokenizeShareRecordByIdResponseSDKType {
  record: TokenizeShareRecordSDKType;
}
/**
 * QueryTokenizeShareRecordByDenomRequest is request type for the
 * Query/QueryTokenizeShareRecordByDenom RPC method.
 */
export interface QueryTokenizeShareRecordByDenomRequest {
  denom: string;
}
export interface QueryTokenizeShareRecordByDenomRequestProtoMsg {
  typeUrl: "/cosmos.staking.v1beta1.QueryTokenizeShareRecordByDenomRequest";
  value: Uint8Array;
}
/**
 * QueryTokenizeShareRecordByDenomRequest is request type for the
 * Query/QueryTokenizeShareRecordByDenom RPC method.
 */
export interface QueryTokenizeShareRecordByDenomRequestAmino {
  denom?: string;
}
export interface QueryTokenizeShareRecordByDenomRequestAminoMsg {
  type: "cosmos-sdk/QueryTokenizeShareRecordByDenomRequest";
  value: QueryTokenizeShareRecordByDenomRequestAmino;
}
/**
 * QueryTokenizeShareRecordByDenomRequest is request type for the
 * Query/QueryTokenizeShareRecordByDenom RPC method.
 */
export interface QueryTokenizeShareRecordByDenomRequestSDKType {
  denom: string;
}
/**
 * QueryTokenizeShareRecordByDenomResponse is response type for the
 * Query/QueryTokenizeShareRecordByDenom RPC method.
 */
export interface QueryTokenizeShareRecordByDenomResponse {
  record: TokenizeShareRecord;
}
export interface QueryTokenizeShareRecordByDenomResponseProtoMsg {
  typeUrl: "/cosmos.staking.v1beta1.QueryTokenizeShareRecordByDenomResponse";
  value: Uint8Array;
}
/**
 * QueryTokenizeShareRecordByDenomResponse is response type for the
 * Query/QueryTokenizeShareRecordByDenom RPC method.
 */
export interface QueryTokenizeShareRecordByDenomResponseAmino {
  record?: TokenizeShareRecordAmino;
}
export interface QueryTokenizeShareRecordByDenomResponseAminoMsg {
  type: "cosmos-sdk/QueryTokenizeShareRecordByDenomResponse";
  value: QueryTokenizeShareRecordByDenomResponseAmino;
}
/**
 * QueryTokenizeShareRecordByDenomResponse is response type for the
 * Query/QueryTokenizeShareRecordByDenom RPC method.
 */
export interface QueryTokenizeShareRecordByDenomResponseSDKType {
  record: TokenizeShareRecordSDKType;
}
/**
 * QueryTokenizeShareRecordsOwnedRequest is request type for the
 * Query/QueryTokenizeShareRecordsOwned RPC method.
 */
export interface QueryTokenizeShareRecordsOwnedRequest {
  owner: string;
}
export interface QueryTokenizeShareRecordsOwnedRequestProtoMsg {
  typeUrl: "/cosmos.staking.v1beta1.QueryTokenizeShareRecordsOwnedRequest";
  value: Uint8Array;
}
/**
 * QueryTokenizeShareRecordsOwnedRequest is request type for the
 * Query/QueryTokenizeShareRecordsOwned RPC method.
 */
export interface QueryTokenizeShareRecordsOwnedRequestAmino {
  owner?: string;
}
export interface QueryTokenizeShareRecordsOwnedRequestAminoMsg {
  type: "cosmos-sdk/QueryTokenizeShareRecordsOwnedRequest";
  value: QueryTokenizeShareRecordsOwnedRequestAmino;
}
/**
 * QueryTokenizeShareRecordsOwnedRequest is request type for the
 * Query/QueryTokenizeShareRecordsOwned RPC method.
 */
export interface QueryTokenizeShareRecordsOwnedRequestSDKType {
  owner: string;
}
/**
 * QueryTokenizeShareRecordsOwnedResponse is response type for the
 * Query/QueryTokenizeShareRecordsOwned RPC method.
 */
export interface QueryTokenizeShareRecordsOwnedResponse {
  records: TokenizeShareRecord[];
}
export interface QueryTokenizeShareRecordsOwnedResponseProtoMsg {
  typeUrl: "/cosmos.staking.v1beta1.QueryTokenizeShareRecordsOwnedResponse";
  value: Uint8Array;
}
/**
 * QueryTokenizeShareRecordsOwnedResponse is response type for the
 * Query/QueryTokenizeShareRecordsOwned RPC method.
 */
export interface QueryTokenizeShareRecordsOwnedResponseAmino {
  records?: TokenizeShareRecordAmino[];
}
export interface QueryTokenizeShareRecordsOwnedResponseAminoMsg {
  type: "cosmos-sdk/QueryTokenizeShareRecordsOwnedResponse";
  value: QueryTokenizeShareRecordsOwnedResponseAmino;
}
/**
 * QueryTokenizeShareRecordsOwnedResponse is response type for the
 * Query/QueryTokenizeShareRecordsOwned RPC method.
 */
export interface QueryTokenizeShareRecordsOwnedResponseSDKType {
  records: TokenizeShareRecordSDKType[];
}
/**
 * QueryAllTokenizeShareRecordsRequest is request type for the
 * Query/QueryAllTokenizeShareRecords RPC method.
 */
export interface QueryAllTokenizeShareRecordsRequest {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
export interface QueryAllTokenizeShareRecordsRequestProtoMsg {
  typeUrl: "/cosmos.staking.v1beta1.QueryAllTokenizeShareRecordsRequest";
  value: Uint8Array;
}
/**
 * QueryAllTokenizeShareRecordsRequest is request type for the
 * Query/QueryAllTokenizeShareRecords RPC method.
 */
export interface QueryAllTokenizeShareRecordsRequestAmino {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QueryAllTokenizeShareRecordsRequestAminoMsg {
  type: "cosmos-sdk/QueryAllTokenizeShareRecordsRequest";
  value: QueryAllTokenizeShareRecordsRequestAmino;
}
/**
 * QueryAllTokenizeShareRecordsRequest is request type for the
 * Query/QueryAllTokenizeShareRecords RPC method.
 */
export interface QueryAllTokenizeShareRecordsRequestSDKType {
  pagination?: PageRequestSDKType;
}
/**
 * QueryAllTokenizeShareRecordsResponse is response type for the
 * Query/QueryAllTokenizeShareRecords RPC method.
 */
export interface QueryAllTokenizeShareRecordsResponse {
  records: TokenizeShareRecord[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
export interface QueryAllTokenizeShareRecordsResponseProtoMsg {
  typeUrl: "/cosmos.staking.v1beta1.QueryAllTokenizeShareRecordsResponse";
  value: Uint8Array;
}
/**
 * QueryAllTokenizeShareRecordsResponse is response type for the
 * Query/QueryAllTokenizeShareRecords RPC method.
 */
export interface QueryAllTokenizeShareRecordsResponseAmino {
  records?: TokenizeShareRecordAmino[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
}
export interface QueryAllTokenizeShareRecordsResponseAminoMsg {
  type: "cosmos-sdk/QueryAllTokenizeShareRecordsResponse";
  value: QueryAllTokenizeShareRecordsResponseAmino;
}
/**
 * QueryAllTokenizeShareRecordsResponse is response type for the
 * Query/QueryAllTokenizeShareRecords RPC method.
 */
export interface QueryAllTokenizeShareRecordsResponseSDKType {
  records: TokenizeShareRecordSDKType[];
  pagination?: PageResponseSDKType;
}
/**
 * QueryLastTokenizeShareRecordIdRequest is request type for the
 * Query/QueryLastTokenizeShareRecordId RPC method.
 */
export interface QueryLastTokenizeShareRecordIdRequest {}
export interface QueryLastTokenizeShareRecordIdRequestProtoMsg {
  typeUrl: "/cosmos.staking.v1beta1.QueryLastTokenizeShareRecordIdRequest";
  value: Uint8Array;
}
/**
 * QueryLastTokenizeShareRecordIdRequest is request type for the
 * Query/QueryLastTokenizeShareRecordId RPC method.
 */
export interface QueryLastTokenizeShareRecordIdRequestAmino {}
export interface QueryLastTokenizeShareRecordIdRequestAminoMsg {
  type: "cosmos-sdk/QueryLastTokenizeShareRecordIdRequest";
  value: QueryLastTokenizeShareRecordIdRequestAmino;
}
/**
 * QueryLastTokenizeShareRecordIdRequest is request type for the
 * Query/QueryLastTokenizeShareRecordId RPC method.
 */
export interface QueryLastTokenizeShareRecordIdRequestSDKType {}
/**
 * QueryLastTokenizeShareRecordIdResponse is response type for the
 * Query/QueryLastTokenizeShareRecordId RPC method.
 */
export interface QueryLastTokenizeShareRecordIdResponse {
  id: bigint;
}
export interface QueryLastTokenizeShareRecordIdResponseProtoMsg {
  typeUrl: "/cosmos.staking.v1beta1.QueryLastTokenizeShareRecordIdResponse";
  value: Uint8Array;
}
/**
 * QueryLastTokenizeShareRecordIdResponse is response type for the
 * Query/QueryLastTokenizeShareRecordId RPC method.
 */
export interface QueryLastTokenizeShareRecordIdResponseAmino {
  id?: string;
}
export interface QueryLastTokenizeShareRecordIdResponseAminoMsg {
  type: "cosmos-sdk/QueryLastTokenizeShareRecordIdResponse";
  value: QueryLastTokenizeShareRecordIdResponseAmino;
}
/**
 * QueryLastTokenizeShareRecordIdResponse is response type for the
 * Query/QueryLastTokenizeShareRecordId RPC method.
 */
export interface QueryLastTokenizeShareRecordIdResponseSDKType {
  id: bigint;
}
/**
 * QueryTotalTokenizeSharedAssetsRequest is request type for the
 * Query/QueryTotalTokenizeSharedAssets RPC method.
 */
export interface QueryTotalTokenizeSharedAssetsRequest {}
export interface QueryTotalTokenizeSharedAssetsRequestProtoMsg {
  typeUrl: "/cosmos.staking.v1beta1.QueryTotalTokenizeSharedAssetsRequest";
  value: Uint8Array;
}
/**
 * QueryTotalTokenizeSharedAssetsRequest is request type for the
 * Query/QueryTotalTokenizeSharedAssets RPC method.
 */
export interface QueryTotalTokenizeSharedAssetsRequestAmino {}
export interface QueryTotalTokenizeSharedAssetsRequestAminoMsg {
  type: "cosmos-sdk/QueryTotalTokenizeSharedAssetsRequest";
  value: QueryTotalTokenizeSharedAssetsRequestAmino;
}
/**
 * QueryTotalTokenizeSharedAssetsRequest is request type for the
 * Query/QueryTotalTokenizeSharedAssets RPC method.
 */
export interface QueryTotalTokenizeSharedAssetsRequestSDKType {}
/**
 * QueryTotalTokenizeSharedAssetsResponse is response type for the
 * Query/QueryTotalTokenizeSharedAssets RPC method.
 */
export interface QueryTotalTokenizeSharedAssetsResponse {
  value: Coin;
}
export interface QueryTotalTokenizeSharedAssetsResponseProtoMsg {
  typeUrl: "/cosmos.staking.v1beta1.QueryTotalTokenizeSharedAssetsResponse";
  value: Uint8Array;
}
/**
 * QueryTotalTokenizeSharedAssetsResponse is response type for the
 * Query/QueryTotalTokenizeSharedAssets RPC method.
 */
export interface QueryTotalTokenizeSharedAssetsResponseAmino {
  value?: CoinAmino;
}
export interface QueryTotalTokenizeSharedAssetsResponseAminoMsg {
  type: "cosmos-sdk/QueryTotalTokenizeSharedAssetsResponse";
  value: QueryTotalTokenizeSharedAssetsResponseAmino;
}
/**
 * QueryTotalTokenizeSharedAssetsResponse is response type for the
 * Query/QueryTotalTokenizeSharedAssets RPC method.
 */
export interface QueryTotalTokenizeSharedAssetsResponseSDKType {
  value: CoinSDKType;
}
/**
 * QueryTotalLiquidStakedRequest is request type for the
 * Query/QueryQueryTotalLiquidStaked RPC method.
 */
export interface QueryTotalLiquidStaked {}
export interface QueryTotalLiquidStakedProtoMsg {
  typeUrl: "/cosmos.staking.v1beta1.QueryTotalLiquidStaked";
  value: Uint8Array;
}
/**
 * QueryTotalLiquidStakedRequest is request type for the
 * Query/QueryQueryTotalLiquidStaked RPC method.
 */
export interface QueryTotalLiquidStakedAmino {}
export interface QueryTotalLiquidStakedAminoMsg {
  type: "cosmos-sdk/QueryTotalLiquidStaked";
  value: QueryTotalLiquidStakedAmino;
}
/**
 * QueryTotalLiquidStakedRequest is request type for the
 * Query/QueryQueryTotalLiquidStaked RPC method.
 */
export interface QueryTotalLiquidStakedSDKType {}
/**
 * QueryTotalLiquidStakedResponse is response type for the
 * Query/QueryQueryTotalLiquidStaked RPC method.
 */
export interface QueryTotalLiquidStakedResponse {
  tokens: string;
}
export interface QueryTotalLiquidStakedResponseProtoMsg {
  typeUrl: "/cosmos.staking.v1beta1.QueryTotalLiquidStakedResponse";
  value: Uint8Array;
}
/**
 * QueryTotalLiquidStakedResponse is response type for the
 * Query/QueryQueryTotalLiquidStaked RPC method.
 */
export interface QueryTotalLiquidStakedResponseAmino {
  tokens?: string;
}
export interface QueryTotalLiquidStakedResponseAminoMsg {
  type: "cosmos-sdk/QueryTotalLiquidStakedResponse";
  value: QueryTotalLiquidStakedResponseAmino;
}
/**
 * QueryTotalLiquidStakedResponse is response type for the
 * Query/QueryQueryTotalLiquidStaked RPC method.
 */
export interface QueryTotalLiquidStakedResponseSDKType {
  tokens: string;
}
/**
 * QueryTokenizeShareLockInfo queries the tokenize share lock information
 * associated with given account
 */
export interface QueryTokenizeShareLockInfo {
  address: string;
}
export interface QueryTokenizeShareLockInfoProtoMsg {
  typeUrl: "/cosmos.staking.v1beta1.QueryTokenizeShareLockInfo";
  value: Uint8Array;
}
/**
 * QueryTokenizeShareLockInfo queries the tokenize share lock information
 * associated with given account
 */
export interface QueryTokenizeShareLockInfoAmino {
  address?: string;
}
export interface QueryTokenizeShareLockInfoAminoMsg {
  type: "cosmos-sdk/QueryTokenizeShareLockInfo";
  value: QueryTokenizeShareLockInfoAmino;
}
/**
 * QueryTokenizeShareLockInfo queries the tokenize share lock information
 * associated with given account
 */
export interface QueryTokenizeShareLockInfoSDKType {
  address: string;
}
/**
 * QueryTokenizeShareLockInfoResponse is the response from the
 * QueryTokenizeShareLockInfo query
 */
export interface QueryTokenizeShareLockInfoResponse {
  status: string;
  expirationTime: string;
}
export interface QueryTokenizeShareLockInfoResponseProtoMsg {
  typeUrl: "/cosmos.staking.v1beta1.QueryTokenizeShareLockInfoResponse";
  value: Uint8Array;
}
/**
 * QueryTokenizeShareLockInfoResponse is the response from the
 * QueryTokenizeShareLockInfo query
 */
export interface QueryTokenizeShareLockInfoResponseAmino {
  status?: string;
  expiration_time?: string;
}
export interface QueryTokenizeShareLockInfoResponseAminoMsg {
  type: "cosmos-sdk/QueryTokenizeShareLockInfoResponse";
  value: QueryTokenizeShareLockInfoResponseAmino;
}
/**
 * QueryTokenizeShareLockInfoResponse is the response from the
 * QueryTokenizeShareLockInfo query
 */
export interface QueryTokenizeShareLockInfoResponseSDKType {
  status: string;
  expiration_time: string;
}
function createBaseQueryValidatorsRequest(): QueryValidatorsRequest {
  return {
    status: "",
    pagination: undefined
  };
}
export const QueryValidatorsRequest = {
  typeUrl: "/cosmos.staking.v1beta1.QueryValidatorsRequest",
  encode(message: QueryValidatorsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.status !== "") {
      writer.uint32(10).string(message.status);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryValidatorsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.status = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryValidatorsRequest>): QueryValidatorsRequest {
    const message = createBaseQueryValidatorsRequest();
    message.status = object.status ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryValidatorsRequestAmino): QueryValidatorsRequest {
    const message = createBaseQueryValidatorsRequest();
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryValidatorsRequest): QueryValidatorsRequestAmino {
    const obj: any = {};
    obj.status = message.status === "" ? undefined : message.status;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryValidatorsRequestAminoMsg): QueryValidatorsRequest {
    return QueryValidatorsRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryValidatorsRequest): QueryValidatorsRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryValidatorsRequest",
      value: QueryValidatorsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryValidatorsRequestProtoMsg): QueryValidatorsRequest {
    return QueryValidatorsRequest.decode(message.value);
  },
  toProto(message: QueryValidatorsRequest): Uint8Array {
    return QueryValidatorsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryValidatorsRequest): QueryValidatorsRequestProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryValidatorsRequest",
      value: QueryValidatorsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryValidatorsResponse(): QueryValidatorsResponse {
  return {
    validators: [],
    pagination: undefined
  };
}
export const QueryValidatorsResponse = {
  typeUrl: "/cosmos.staking.v1beta1.QueryValidatorsResponse",
  encode(message: QueryValidatorsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.validators) {
      Validator.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryValidatorsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validators.push(Validator.decode(reader, reader.uint32()));
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
  fromPartial(object: Partial<QueryValidatorsResponse>): QueryValidatorsResponse {
    const message = createBaseQueryValidatorsResponse();
    message.validators = object.validators?.map(e => Validator.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryValidatorsResponseAmino): QueryValidatorsResponse {
    const message = createBaseQueryValidatorsResponse();
    message.validators = object.validators?.map(e => Validator.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryValidatorsResponse): QueryValidatorsResponseAmino {
    const obj: any = {};
    if (message.validators) {
      obj.validators = message.validators.map(e => e ? Validator.toAmino(e) : undefined);
    } else {
      obj.validators = message.validators;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryValidatorsResponseAminoMsg): QueryValidatorsResponse {
    return QueryValidatorsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryValidatorsResponse): QueryValidatorsResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryValidatorsResponse",
      value: QueryValidatorsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryValidatorsResponseProtoMsg): QueryValidatorsResponse {
    return QueryValidatorsResponse.decode(message.value);
  },
  toProto(message: QueryValidatorsResponse): Uint8Array {
    return QueryValidatorsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryValidatorsResponse): QueryValidatorsResponseProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryValidatorsResponse",
      value: QueryValidatorsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryValidatorRequest(): QueryValidatorRequest {
  return {
    validatorAddr: ""
  };
}
export const QueryValidatorRequest = {
  typeUrl: "/cosmos.staking.v1beta1.QueryValidatorRequest",
  encode(message: QueryValidatorRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validatorAddr !== "") {
      writer.uint32(10).string(message.validatorAddr);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryValidatorRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddr = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryValidatorRequest>): QueryValidatorRequest {
    const message = createBaseQueryValidatorRequest();
    message.validatorAddr = object.validatorAddr ?? "";
    return message;
  },
  fromAmino(object: QueryValidatorRequestAmino): QueryValidatorRequest {
    const message = createBaseQueryValidatorRequest();
    if (object.validator_addr !== undefined && object.validator_addr !== null) {
      message.validatorAddr = object.validator_addr;
    }
    return message;
  },
  toAmino(message: QueryValidatorRequest): QueryValidatorRequestAmino {
    const obj: any = {};
    obj.validator_addr = message.validatorAddr === "" ? undefined : message.validatorAddr;
    return obj;
  },
  fromAminoMsg(object: QueryValidatorRequestAminoMsg): QueryValidatorRequest {
    return QueryValidatorRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryValidatorRequest): QueryValidatorRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryValidatorRequest",
      value: QueryValidatorRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryValidatorRequestProtoMsg): QueryValidatorRequest {
    return QueryValidatorRequest.decode(message.value);
  },
  toProto(message: QueryValidatorRequest): Uint8Array {
    return QueryValidatorRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryValidatorRequest): QueryValidatorRequestProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryValidatorRequest",
      value: QueryValidatorRequest.encode(message).finish()
    };
  }
};
function createBaseQueryValidatorResponse(): QueryValidatorResponse {
  return {
    validator: Validator.fromPartial({})
  };
}
export const QueryValidatorResponse = {
  typeUrl: "/cosmos.staking.v1beta1.QueryValidatorResponse",
  encode(message: QueryValidatorResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validator !== undefined) {
      Validator.encode(message.validator, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryValidatorResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validator = Validator.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryValidatorResponse>): QueryValidatorResponse {
    const message = createBaseQueryValidatorResponse();
    message.validator = object.validator !== undefined && object.validator !== null ? Validator.fromPartial(object.validator) : undefined;
    return message;
  },
  fromAmino(object: QueryValidatorResponseAmino): QueryValidatorResponse {
    const message = createBaseQueryValidatorResponse();
    if (object.validator !== undefined && object.validator !== null) {
      message.validator = Validator.fromAmino(object.validator);
    }
    return message;
  },
  toAmino(message: QueryValidatorResponse): QueryValidatorResponseAmino {
    const obj: any = {};
    obj.validator = message.validator ? Validator.toAmino(message.validator) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryValidatorResponseAminoMsg): QueryValidatorResponse {
    return QueryValidatorResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryValidatorResponse): QueryValidatorResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryValidatorResponse",
      value: QueryValidatorResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryValidatorResponseProtoMsg): QueryValidatorResponse {
    return QueryValidatorResponse.decode(message.value);
  },
  toProto(message: QueryValidatorResponse): Uint8Array {
    return QueryValidatorResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryValidatorResponse): QueryValidatorResponseProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryValidatorResponse",
      value: QueryValidatorResponse.encode(message).finish()
    };
  }
};
function createBaseQueryValidatorDelegationsRequest(): QueryValidatorDelegationsRequest {
  return {
    validatorAddr: "",
    pagination: undefined
  };
}
export const QueryValidatorDelegationsRequest = {
  typeUrl: "/cosmos.staking.v1beta1.QueryValidatorDelegationsRequest",
  encode(message: QueryValidatorDelegationsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validatorAddr !== "") {
      writer.uint32(10).string(message.validatorAddr);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryValidatorDelegationsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorDelegationsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddr = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryValidatorDelegationsRequest>): QueryValidatorDelegationsRequest {
    const message = createBaseQueryValidatorDelegationsRequest();
    message.validatorAddr = object.validatorAddr ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryValidatorDelegationsRequestAmino): QueryValidatorDelegationsRequest {
    const message = createBaseQueryValidatorDelegationsRequest();
    if (object.validator_addr !== undefined && object.validator_addr !== null) {
      message.validatorAddr = object.validator_addr;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryValidatorDelegationsRequest): QueryValidatorDelegationsRequestAmino {
    const obj: any = {};
    obj.validator_addr = message.validatorAddr === "" ? undefined : message.validatorAddr;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryValidatorDelegationsRequestAminoMsg): QueryValidatorDelegationsRequest {
    return QueryValidatorDelegationsRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryValidatorDelegationsRequest): QueryValidatorDelegationsRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryValidatorDelegationsRequest",
      value: QueryValidatorDelegationsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryValidatorDelegationsRequestProtoMsg): QueryValidatorDelegationsRequest {
    return QueryValidatorDelegationsRequest.decode(message.value);
  },
  toProto(message: QueryValidatorDelegationsRequest): Uint8Array {
    return QueryValidatorDelegationsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryValidatorDelegationsRequest): QueryValidatorDelegationsRequestProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryValidatorDelegationsRequest",
      value: QueryValidatorDelegationsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryValidatorDelegationsResponse(): QueryValidatorDelegationsResponse {
  return {
    delegationResponses: [],
    pagination: undefined
  };
}
export const QueryValidatorDelegationsResponse = {
  typeUrl: "/cosmos.staking.v1beta1.QueryValidatorDelegationsResponse",
  encode(message: QueryValidatorDelegationsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.delegationResponses) {
      DelegationResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryValidatorDelegationsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorDelegationsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegationResponses.push(DelegationResponse.decode(reader, reader.uint32()));
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
  fromPartial(object: Partial<QueryValidatorDelegationsResponse>): QueryValidatorDelegationsResponse {
    const message = createBaseQueryValidatorDelegationsResponse();
    message.delegationResponses = object.delegationResponses?.map(e => DelegationResponse.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryValidatorDelegationsResponseAmino): QueryValidatorDelegationsResponse {
    const message = createBaseQueryValidatorDelegationsResponse();
    message.delegationResponses = object.delegation_responses?.map(e => DelegationResponse.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryValidatorDelegationsResponse): QueryValidatorDelegationsResponseAmino {
    const obj: any = {};
    if (message.delegationResponses) {
      obj.delegation_responses = message.delegationResponses.map(e => e ? DelegationResponse.toAmino(e) : undefined);
    } else {
      obj.delegation_responses = message.delegationResponses;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryValidatorDelegationsResponseAminoMsg): QueryValidatorDelegationsResponse {
    return QueryValidatorDelegationsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryValidatorDelegationsResponse): QueryValidatorDelegationsResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryValidatorDelegationsResponse",
      value: QueryValidatorDelegationsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryValidatorDelegationsResponseProtoMsg): QueryValidatorDelegationsResponse {
    return QueryValidatorDelegationsResponse.decode(message.value);
  },
  toProto(message: QueryValidatorDelegationsResponse): Uint8Array {
    return QueryValidatorDelegationsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryValidatorDelegationsResponse): QueryValidatorDelegationsResponseProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryValidatorDelegationsResponse",
      value: QueryValidatorDelegationsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryValidatorUnbondingDelegationsRequest(): QueryValidatorUnbondingDelegationsRequest {
  return {
    validatorAddr: "",
    pagination: undefined
  };
}
export const QueryValidatorUnbondingDelegationsRequest = {
  typeUrl: "/cosmos.staking.v1beta1.QueryValidatorUnbondingDelegationsRequest",
  encode(message: QueryValidatorUnbondingDelegationsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validatorAddr !== "") {
      writer.uint32(10).string(message.validatorAddr);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryValidatorUnbondingDelegationsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorUnbondingDelegationsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddr = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryValidatorUnbondingDelegationsRequest>): QueryValidatorUnbondingDelegationsRequest {
    const message = createBaseQueryValidatorUnbondingDelegationsRequest();
    message.validatorAddr = object.validatorAddr ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryValidatorUnbondingDelegationsRequestAmino): QueryValidatorUnbondingDelegationsRequest {
    const message = createBaseQueryValidatorUnbondingDelegationsRequest();
    if (object.validator_addr !== undefined && object.validator_addr !== null) {
      message.validatorAddr = object.validator_addr;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryValidatorUnbondingDelegationsRequest): QueryValidatorUnbondingDelegationsRequestAmino {
    const obj: any = {};
    obj.validator_addr = message.validatorAddr === "" ? undefined : message.validatorAddr;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryValidatorUnbondingDelegationsRequestAminoMsg): QueryValidatorUnbondingDelegationsRequest {
    return QueryValidatorUnbondingDelegationsRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryValidatorUnbondingDelegationsRequest): QueryValidatorUnbondingDelegationsRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryValidatorUnbondingDelegationsRequest",
      value: QueryValidatorUnbondingDelegationsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryValidatorUnbondingDelegationsRequestProtoMsg): QueryValidatorUnbondingDelegationsRequest {
    return QueryValidatorUnbondingDelegationsRequest.decode(message.value);
  },
  toProto(message: QueryValidatorUnbondingDelegationsRequest): Uint8Array {
    return QueryValidatorUnbondingDelegationsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryValidatorUnbondingDelegationsRequest): QueryValidatorUnbondingDelegationsRequestProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryValidatorUnbondingDelegationsRequest",
      value: QueryValidatorUnbondingDelegationsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryValidatorUnbondingDelegationsResponse(): QueryValidatorUnbondingDelegationsResponse {
  return {
    unbondingResponses: [],
    pagination: undefined
  };
}
export const QueryValidatorUnbondingDelegationsResponse = {
  typeUrl: "/cosmos.staking.v1beta1.QueryValidatorUnbondingDelegationsResponse",
  encode(message: QueryValidatorUnbondingDelegationsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.unbondingResponses) {
      UnbondingDelegation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryValidatorUnbondingDelegationsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorUnbondingDelegationsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.unbondingResponses.push(UnbondingDelegation.decode(reader, reader.uint32()));
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
  fromPartial(object: Partial<QueryValidatorUnbondingDelegationsResponse>): QueryValidatorUnbondingDelegationsResponse {
    const message = createBaseQueryValidatorUnbondingDelegationsResponse();
    message.unbondingResponses = object.unbondingResponses?.map(e => UnbondingDelegation.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryValidatorUnbondingDelegationsResponseAmino): QueryValidatorUnbondingDelegationsResponse {
    const message = createBaseQueryValidatorUnbondingDelegationsResponse();
    message.unbondingResponses = object.unbonding_responses?.map(e => UnbondingDelegation.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryValidatorUnbondingDelegationsResponse): QueryValidatorUnbondingDelegationsResponseAmino {
    const obj: any = {};
    if (message.unbondingResponses) {
      obj.unbonding_responses = message.unbondingResponses.map(e => e ? UnbondingDelegation.toAmino(e) : undefined);
    } else {
      obj.unbonding_responses = message.unbondingResponses;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryValidatorUnbondingDelegationsResponseAminoMsg): QueryValidatorUnbondingDelegationsResponse {
    return QueryValidatorUnbondingDelegationsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryValidatorUnbondingDelegationsResponse): QueryValidatorUnbondingDelegationsResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryValidatorUnbondingDelegationsResponse",
      value: QueryValidatorUnbondingDelegationsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryValidatorUnbondingDelegationsResponseProtoMsg): QueryValidatorUnbondingDelegationsResponse {
    return QueryValidatorUnbondingDelegationsResponse.decode(message.value);
  },
  toProto(message: QueryValidatorUnbondingDelegationsResponse): Uint8Array {
    return QueryValidatorUnbondingDelegationsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryValidatorUnbondingDelegationsResponse): QueryValidatorUnbondingDelegationsResponseProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryValidatorUnbondingDelegationsResponse",
      value: QueryValidatorUnbondingDelegationsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryDelegationRequest(): QueryDelegationRequest {
  return {
    delegatorAddr: "",
    validatorAddr: ""
  };
}
export const QueryDelegationRequest = {
  typeUrl: "/cosmos.staking.v1beta1.QueryDelegationRequest",
  encode(message: QueryDelegationRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegatorAddr !== "") {
      writer.uint32(10).string(message.delegatorAddr);
    }
    if (message.validatorAddr !== "") {
      writer.uint32(18).string(message.validatorAddr);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegationRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddr = reader.string();
          break;
        case 2:
          message.validatorAddr = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryDelegationRequest>): QueryDelegationRequest {
    const message = createBaseQueryDelegationRequest();
    message.delegatorAddr = object.delegatorAddr ?? "";
    message.validatorAddr = object.validatorAddr ?? "";
    return message;
  },
  fromAmino(object: QueryDelegationRequestAmino): QueryDelegationRequest {
    const message = createBaseQueryDelegationRequest();
    if (object.delegator_addr !== undefined && object.delegator_addr !== null) {
      message.delegatorAddr = object.delegator_addr;
    }
    if (object.validator_addr !== undefined && object.validator_addr !== null) {
      message.validatorAddr = object.validator_addr;
    }
    return message;
  },
  toAmino(message: QueryDelegationRequest): QueryDelegationRequestAmino {
    const obj: any = {};
    obj.delegator_addr = message.delegatorAddr === "" ? undefined : message.delegatorAddr;
    obj.validator_addr = message.validatorAddr === "" ? undefined : message.validatorAddr;
    return obj;
  },
  fromAminoMsg(object: QueryDelegationRequestAminoMsg): QueryDelegationRequest {
    return QueryDelegationRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryDelegationRequest): QueryDelegationRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryDelegationRequest",
      value: QueryDelegationRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryDelegationRequestProtoMsg): QueryDelegationRequest {
    return QueryDelegationRequest.decode(message.value);
  },
  toProto(message: QueryDelegationRequest): Uint8Array {
    return QueryDelegationRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDelegationRequest): QueryDelegationRequestProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryDelegationRequest",
      value: QueryDelegationRequest.encode(message).finish()
    };
  }
};
function createBaseQueryDelegationResponse(): QueryDelegationResponse {
  return {
    delegationResponse: undefined
  };
}
export const QueryDelegationResponse = {
  typeUrl: "/cosmos.staking.v1beta1.QueryDelegationResponse",
  encode(message: QueryDelegationResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegationResponse !== undefined) {
      DelegationResponse.encode(message.delegationResponse, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegationResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegationResponse = DelegationResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryDelegationResponse>): QueryDelegationResponse {
    const message = createBaseQueryDelegationResponse();
    message.delegationResponse = object.delegationResponse !== undefined && object.delegationResponse !== null ? DelegationResponse.fromPartial(object.delegationResponse) : undefined;
    return message;
  },
  fromAmino(object: QueryDelegationResponseAmino): QueryDelegationResponse {
    const message = createBaseQueryDelegationResponse();
    if (object.delegation_response !== undefined && object.delegation_response !== null) {
      message.delegationResponse = DelegationResponse.fromAmino(object.delegation_response);
    }
    return message;
  },
  toAmino(message: QueryDelegationResponse): QueryDelegationResponseAmino {
    const obj: any = {};
    obj.delegation_response = message.delegationResponse ? DelegationResponse.toAmino(message.delegationResponse) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDelegationResponseAminoMsg): QueryDelegationResponse {
    return QueryDelegationResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryDelegationResponse): QueryDelegationResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryDelegationResponse",
      value: QueryDelegationResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryDelegationResponseProtoMsg): QueryDelegationResponse {
    return QueryDelegationResponse.decode(message.value);
  },
  toProto(message: QueryDelegationResponse): Uint8Array {
    return QueryDelegationResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDelegationResponse): QueryDelegationResponseProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryDelegationResponse",
      value: QueryDelegationResponse.encode(message).finish()
    };
  }
};
function createBaseQueryUnbondingDelegationRequest(): QueryUnbondingDelegationRequest {
  return {
    delegatorAddr: "",
    validatorAddr: ""
  };
}
export const QueryUnbondingDelegationRequest = {
  typeUrl: "/cosmos.staking.v1beta1.QueryUnbondingDelegationRequest",
  encode(message: QueryUnbondingDelegationRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegatorAddr !== "") {
      writer.uint32(10).string(message.delegatorAddr);
    }
    if (message.validatorAddr !== "") {
      writer.uint32(18).string(message.validatorAddr);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryUnbondingDelegationRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUnbondingDelegationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddr = reader.string();
          break;
        case 2:
          message.validatorAddr = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryUnbondingDelegationRequest>): QueryUnbondingDelegationRequest {
    const message = createBaseQueryUnbondingDelegationRequest();
    message.delegatorAddr = object.delegatorAddr ?? "";
    message.validatorAddr = object.validatorAddr ?? "";
    return message;
  },
  fromAmino(object: QueryUnbondingDelegationRequestAmino): QueryUnbondingDelegationRequest {
    const message = createBaseQueryUnbondingDelegationRequest();
    if (object.delegator_addr !== undefined && object.delegator_addr !== null) {
      message.delegatorAddr = object.delegator_addr;
    }
    if (object.validator_addr !== undefined && object.validator_addr !== null) {
      message.validatorAddr = object.validator_addr;
    }
    return message;
  },
  toAmino(message: QueryUnbondingDelegationRequest): QueryUnbondingDelegationRequestAmino {
    const obj: any = {};
    obj.delegator_addr = message.delegatorAddr === "" ? undefined : message.delegatorAddr;
    obj.validator_addr = message.validatorAddr === "" ? undefined : message.validatorAddr;
    return obj;
  },
  fromAminoMsg(object: QueryUnbondingDelegationRequestAminoMsg): QueryUnbondingDelegationRequest {
    return QueryUnbondingDelegationRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryUnbondingDelegationRequest): QueryUnbondingDelegationRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryUnbondingDelegationRequest",
      value: QueryUnbondingDelegationRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryUnbondingDelegationRequestProtoMsg): QueryUnbondingDelegationRequest {
    return QueryUnbondingDelegationRequest.decode(message.value);
  },
  toProto(message: QueryUnbondingDelegationRequest): Uint8Array {
    return QueryUnbondingDelegationRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryUnbondingDelegationRequest): QueryUnbondingDelegationRequestProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryUnbondingDelegationRequest",
      value: QueryUnbondingDelegationRequest.encode(message).finish()
    };
  }
};
function createBaseQueryUnbondingDelegationResponse(): QueryUnbondingDelegationResponse {
  return {
    unbond: UnbondingDelegation.fromPartial({})
  };
}
export const QueryUnbondingDelegationResponse = {
  typeUrl: "/cosmos.staking.v1beta1.QueryUnbondingDelegationResponse",
  encode(message: QueryUnbondingDelegationResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.unbond !== undefined) {
      UnbondingDelegation.encode(message.unbond, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryUnbondingDelegationResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUnbondingDelegationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.unbond = UnbondingDelegation.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryUnbondingDelegationResponse>): QueryUnbondingDelegationResponse {
    const message = createBaseQueryUnbondingDelegationResponse();
    message.unbond = object.unbond !== undefined && object.unbond !== null ? UnbondingDelegation.fromPartial(object.unbond) : undefined;
    return message;
  },
  fromAmino(object: QueryUnbondingDelegationResponseAmino): QueryUnbondingDelegationResponse {
    const message = createBaseQueryUnbondingDelegationResponse();
    if (object.unbond !== undefined && object.unbond !== null) {
      message.unbond = UnbondingDelegation.fromAmino(object.unbond);
    }
    return message;
  },
  toAmino(message: QueryUnbondingDelegationResponse): QueryUnbondingDelegationResponseAmino {
    const obj: any = {};
    obj.unbond = message.unbond ? UnbondingDelegation.toAmino(message.unbond) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryUnbondingDelegationResponseAminoMsg): QueryUnbondingDelegationResponse {
    return QueryUnbondingDelegationResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryUnbondingDelegationResponse): QueryUnbondingDelegationResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryUnbondingDelegationResponse",
      value: QueryUnbondingDelegationResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryUnbondingDelegationResponseProtoMsg): QueryUnbondingDelegationResponse {
    return QueryUnbondingDelegationResponse.decode(message.value);
  },
  toProto(message: QueryUnbondingDelegationResponse): Uint8Array {
    return QueryUnbondingDelegationResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryUnbondingDelegationResponse): QueryUnbondingDelegationResponseProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryUnbondingDelegationResponse",
      value: QueryUnbondingDelegationResponse.encode(message).finish()
    };
  }
};
function createBaseQueryDelegatorDelegationsRequest(): QueryDelegatorDelegationsRequest {
  return {
    delegatorAddr: "",
    pagination: undefined
  };
}
export const QueryDelegatorDelegationsRequest = {
  typeUrl: "/cosmos.staking.v1beta1.QueryDelegatorDelegationsRequest",
  encode(message: QueryDelegatorDelegationsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegatorAddr !== "") {
      writer.uint32(10).string(message.delegatorAddr);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegatorDelegationsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorDelegationsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddr = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryDelegatorDelegationsRequest>): QueryDelegatorDelegationsRequest {
    const message = createBaseQueryDelegatorDelegationsRequest();
    message.delegatorAddr = object.delegatorAddr ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryDelegatorDelegationsRequestAmino): QueryDelegatorDelegationsRequest {
    const message = createBaseQueryDelegatorDelegationsRequest();
    if (object.delegator_addr !== undefined && object.delegator_addr !== null) {
      message.delegatorAddr = object.delegator_addr;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryDelegatorDelegationsRequest): QueryDelegatorDelegationsRequestAmino {
    const obj: any = {};
    obj.delegator_addr = message.delegatorAddr === "" ? undefined : message.delegatorAddr;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDelegatorDelegationsRequestAminoMsg): QueryDelegatorDelegationsRequest {
    return QueryDelegatorDelegationsRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryDelegatorDelegationsRequest): QueryDelegatorDelegationsRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryDelegatorDelegationsRequest",
      value: QueryDelegatorDelegationsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryDelegatorDelegationsRequestProtoMsg): QueryDelegatorDelegationsRequest {
    return QueryDelegatorDelegationsRequest.decode(message.value);
  },
  toProto(message: QueryDelegatorDelegationsRequest): Uint8Array {
    return QueryDelegatorDelegationsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDelegatorDelegationsRequest): QueryDelegatorDelegationsRequestProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryDelegatorDelegationsRequest",
      value: QueryDelegatorDelegationsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryDelegatorDelegationsResponse(): QueryDelegatorDelegationsResponse {
  return {
    delegationResponses: [],
    pagination: undefined
  };
}
export const QueryDelegatorDelegationsResponse = {
  typeUrl: "/cosmos.staking.v1beta1.QueryDelegatorDelegationsResponse",
  encode(message: QueryDelegatorDelegationsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.delegationResponses) {
      DelegationResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegatorDelegationsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorDelegationsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegationResponses.push(DelegationResponse.decode(reader, reader.uint32()));
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
  fromPartial(object: Partial<QueryDelegatorDelegationsResponse>): QueryDelegatorDelegationsResponse {
    const message = createBaseQueryDelegatorDelegationsResponse();
    message.delegationResponses = object.delegationResponses?.map(e => DelegationResponse.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryDelegatorDelegationsResponseAmino): QueryDelegatorDelegationsResponse {
    const message = createBaseQueryDelegatorDelegationsResponse();
    message.delegationResponses = object.delegation_responses?.map(e => DelegationResponse.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryDelegatorDelegationsResponse): QueryDelegatorDelegationsResponseAmino {
    const obj: any = {};
    if (message.delegationResponses) {
      obj.delegation_responses = message.delegationResponses.map(e => e ? DelegationResponse.toAmino(e) : undefined);
    } else {
      obj.delegation_responses = message.delegationResponses;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDelegatorDelegationsResponseAminoMsg): QueryDelegatorDelegationsResponse {
    return QueryDelegatorDelegationsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryDelegatorDelegationsResponse): QueryDelegatorDelegationsResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryDelegatorDelegationsResponse",
      value: QueryDelegatorDelegationsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryDelegatorDelegationsResponseProtoMsg): QueryDelegatorDelegationsResponse {
    return QueryDelegatorDelegationsResponse.decode(message.value);
  },
  toProto(message: QueryDelegatorDelegationsResponse): Uint8Array {
    return QueryDelegatorDelegationsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDelegatorDelegationsResponse): QueryDelegatorDelegationsResponseProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryDelegatorDelegationsResponse",
      value: QueryDelegatorDelegationsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryDelegatorUnbondingDelegationsRequest(): QueryDelegatorUnbondingDelegationsRequest {
  return {
    delegatorAddr: "",
    pagination: undefined
  };
}
export const QueryDelegatorUnbondingDelegationsRequest = {
  typeUrl: "/cosmos.staking.v1beta1.QueryDelegatorUnbondingDelegationsRequest",
  encode(message: QueryDelegatorUnbondingDelegationsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegatorAddr !== "") {
      writer.uint32(10).string(message.delegatorAddr);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegatorUnbondingDelegationsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorUnbondingDelegationsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddr = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryDelegatorUnbondingDelegationsRequest>): QueryDelegatorUnbondingDelegationsRequest {
    const message = createBaseQueryDelegatorUnbondingDelegationsRequest();
    message.delegatorAddr = object.delegatorAddr ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryDelegatorUnbondingDelegationsRequestAmino): QueryDelegatorUnbondingDelegationsRequest {
    const message = createBaseQueryDelegatorUnbondingDelegationsRequest();
    if (object.delegator_addr !== undefined && object.delegator_addr !== null) {
      message.delegatorAddr = object.delegator_addr;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryDelegatorUnbondingDelegationsRequest): QueryDelegatorUnbondingDelegationsRequestAmino {
    const obj: any = {};
    obj.delegator_addr = message.delegatorAddr === "" ? undefined : message.delegatorAddr;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDelegatorUnbondingDelegationsRequestAminoMsg): QueryDelegatorUnbondingDelegationsRequest {
    return QueryDelegatorUnbondingDelegationsRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryDelegatorUnbondingDelegationsRequest): QueryDelegatorUnbondingDelegationsRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryDelegatorUnbondingDelegationsRequest",
      value: QueryDelegatorUnbondingDelegationsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryDelegatorUnbondingDelegationsRequestProtoMsg): QueryDelegatorUnbondingDelegationsRequest {
    return QueryDelegatorUnbondingDelegationsRequest.decode(message.value);
  },
  toProto(message: QueryDelegatorUnbondingDelegationsRequest): Uint8Array {
    return QueryDelegatorUnbondingDelegationsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDelegatorUnbondingDelegationsRequest): QueryDelegatorUnbondingDelegationsRequestProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryDelegatorUnbondingDelegationsRequest",
      value: QueryDelegatorUnbondingDelegationsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryDelegatorUnbondingDelegationsResponse(): QueryDelegatorUnbondingDelegationsResponse {
  return {
    unbondingResponses: [],
    pagination: undefined
  };
}
export const QueryDelegatorUnbondingDelegationsResponse = {
  typeUrl: "/cosmos.staking.v1beta1.QueryDelegatorUnbondingDelegationsResponse",
  encode(message: QueryDelegatorUnbondingDelegationsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.unbondingResponses) {
      UnbondingDelegation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegatorUnbondingDelegationsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorUnbondingDelegationsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.unbondingResponses.push(UnbondingDelegation.decode(reader, reader.uint32()));
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
  fromPartial(object: Partial<QueryDelegatorUnbondingDelegationsResponse>): QueryDelegatorUnbondingDelegationsResponse {
    const message = createBaseQueryDelegatorUnbondingDelegationsResponse();
    message.unbondingResponses = object.unbondingResponses?.map(e => UnbondingDelegation.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryDelegatorUnbondingDelegationsResponseAmino): QueryDelegatorUnbondingDelegationsResponse {
    const message = createBaseQueryDelegatorUnbondingDelegationsResponse();
    message.unbondingResponses = object.unbonding_responses?.map(e => UnbondingDelegation.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryDelegatorUnbondingDelegationsResponse): QueryDelegatorUnbondingDelegationsResponseAmino {
    const obj: any = {};
    if (message.unbondingResponses) {
      obj.unbonding_responses = message.unbondingResponses.map(e => e ? UnbondingDelegation.toAmino(e) : undefined);
    } else {
      obj.unbonding_responses = message.unbondingResponses;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDelegatorUnbondingDelegationsResponseAminoMsg): QueryDelegatorUnbondingDelegationsResponse {
    return QueryDelegatorUnbondingDelegationsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryDelegatorUnbondingDelegationsResponse): QueryDelegatorUnbondingDelegationsResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryDelegatorUnbondingDelegationsResponse",
      value: QueryDelegatorUnbondingDelegationsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryDelegatorUnbondingDelegationsResponseProtoMsg): QueryDelegatorUnbondingDelegationsResponse {
    return QueryDelegatorUnbondingDelegationsResponse.decode(message.value);
  },
  toProto(message: QueryDelegatorUnbondingDelegationsResponse): Uint8Array {
    return QueryDelegatorUnbondingDelegationsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDelegatorUnbondingDelegationsResponse): QueryDelegatorUnbondingDelegationsResponseProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryDelegatorUnbondingDelegationsResponse",
      value: QueryDelegatorUnbondingDelegationsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryRedelegationsRequest(): QueryRedelegationsRequest {
  return {
    delegatorAddr: "",
    srcValidatorAddr: "",
    dstValidatorAddr: "",
    pagination: undefined
  };
}
export const QueryRedelegationsRequest = {
  typeUrl: "/cosmos.staking.v1beta1.QueryRedelegationsRequest",
  encode(message: QueryRedelegationsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegatorAddr !== "") {
      writer.uint32(10).string(message.delegatorAddr);
    }
    if (message.srcValidatorAddr !== "") {
      writer.uint32(18).string(message.srcValidatorAddr);
    }
    if (message.dstValidatorAddr !== "") {
      writer.uint32(26).string(message.dstValidatorAddr);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryRedelegationsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRedelegationsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddr = reader.string();
          break;
        case 2:
          message.srcValidatorAddr = reader.string();
          break;
        case 3:
          message.dstValidatorAddr = reader.string();
          break;
        case 4:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryRedelegationsRequest>): QueryRedelegationsRequest {
    const message = createBaseQueryRedelegationsRequest();
    message.delegatorAddr = object.delegatorAddr ?? "";
    message.srcValidatorAddr = object.srcValidatorAddr ?? "";
    message.dstValidatorAddr = object.dstValidatorAddr ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryRedelegationsRequestAmino): QueryRedelegationsRequest {
    const message = createBaseQueryRedelegationsRequest();
    if (object.delegator_addr !== undefined && object.delegator_addr !== null) {
      message.delegatorAddr = object.delegator_addr;
    }
    if (object.src_validator_addr !== undefined && object.src_validator_addr !== null) {
      message.srcValidatorAddr = object.src_validator_addr;
    }
    if (object.dst_validator_addr !== undefined && object.dst_validator_addr !== null) {
      message.dstValidatorAddr = object.dst_validator_addr;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryRedelegationsRequest): QueryRedelegationsRequestAmino {
    const obj: any = {};
    obj.delegator_addr = message.delegatorAddr === "" ? undefined : message.delegatorAddr;
    obj.src_validator_addr = message.srcValidatorAddr === "" ? undefined : message.srcValidatorAddr;
    obj.dst_validator_addr = message.dstValidatorAddr === "" ? undefined : message.dstValidatorAddr;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryRedelegationsRequestAminoMsg): QueryRedelegationsRequest {
    return QueryRedelegationsRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryRedelegationsRequest): QueryRedelegationsRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryRedelegationsRequest",
      value: QueryRedelegationsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryRedelegationsRequestProtoMsg): QueryRedelegationsRequest {
    return QueryRedelegationsRequest.decode(message.value);
  },
  toProto(message: QueryRedelegationsRequest): Uint8Array {
    return QueryRedelegationsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryRedelegationsRequest): QueryRedelegationsRequestProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryRedelegationsRequest",
      value: QueryRedelegationsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryRedelegationsResponse(): QueryRedelegationsResponse {
  return {
    redelegationResponses: [],
    pagination: undefined
  };
}
export const QueryRedelegationsResponse = {
  typeUrl: "/cosmos.staking.v1beta1.QueryRedelegationsResponse",
  encode(message: QueryRedelegationsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.redelegationResponses) {
      RedelegationResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryRedelegationsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRedelegationsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.redelegationResponses.push(RedelegationResponse.decode(reader, reader.uint32()));
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
  fromPartial(object: Partial<QueryRedelegationsResponse>): QueryRedelegationsResponse {
    const message = createBaseQueryRedelegationsResponse();
    message.redelegationResponses = object.redelegationResponses?.map(e => RedelegationResponse.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryRedelegationsResponseAmino): QueryRedelegationsResponse {
    const message = createBaseQueryRedelegationsResponse();
    message.redelegationResponses = object.redelegation_responses?.map(e => RedelegationResponse.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryRedelegationsResponse): QueryRedelegationsResponseAmino {
    const obj: any = {};
    if (message.redelegationResponses) {
      obj.redelegation_responses = message.redelegationResponses.map(e => e ? RedelegationResponse.toAmino(e) : undefined);
    } else {
      obj.redelegation_responses = message.redelegationResponses;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryRedelegationsResponseAminoMsg): QueryRedelegationsResponse {
    return QueryRedelegationsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryRedelegationsResponse): QueryRedelegationsResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryRedelegationsResponse",
      value: QueryRedelegationsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryRedelegationsResponseProtoMsg): QueryRedelegationsResponse {
    return QueryRedelegationsResponse.decode(message.value);
  },
  toProto(message: QueryRedelegationsResponse): Uint8Array {
    return QueryRedelegationsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryRedelegationsResponse): QueryRedelegationsResponseProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryRedelegationsResponse",
      value: QueryRedelegationsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryDelegatorValidatorsRequest(): QueryDelegatorValidatorsRequest {
  return {
    delegatorAddr: "",
    pagination: undefined
  };
}
export const QueryDelegatorValidatorsRequest = {
  typeUrl: "/cosmos.staking.v1beta1.QueryDelegatorValidatorsRequest",
  encode(message: QueryDelegatorValidatorsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegatorAddr !== "") {
      writer.uint32(10).string(message.delegatorAddr);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegatorValidatorsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorValidatorsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddr = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryDelegatorValidatorsRequest>): QueryDelegatorValidatorsRequest {
    const message = createBaseQueryDelegatorValidatorsRequest();
    message.delegatorAddr = object.delegatorAddr ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryDelegatorValidatorsRequestAmino): QueryDelegatorValidatorsRequest {
    const message = createBaseQueryDelegatorValidatorsRequest();
    if (object.delegator_addr !== undefined && object.delegator_addr !== null) {
      message.delegatorAddr = object.delegator_addr;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryDelegatorValidatorsRequest): QueryDelegatorValidatorsRequestAmino {
    const obj: any = {};
    obj.delegator_addr = message.delegatorAddr === "" ? undefined : message.delegatorAddr;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDelegatorValidatorsRequestAminoMsg): QueryDelegatorValidatorsRequest {
    return QueryDelegatorValidatorsRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryDelegatorValidatorsRequest): QueryDelegatorValidatorsRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryDelegatorValidatorsRequest",
      value: QueryDelegatorValidatorsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryDelegatorValidatorsRequestProtoMsg): QueryDelegatorValidatorsRequest {
    return QueryDelegatorValidatorsRequest.decode(message.value);
  },
  toProto(message: QueryDelegatorValidatorsRequest): Uint8Array {
    return QueryDelegatorValidatorsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDelegatorValidatorsRequest): QueryDelegatorValidatorsRequestProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryDelegatorValidatorsRequest",
      value: QueryDelegatorValidatorsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryDelegatorValidatorsResponse(): QueryDelegatorValidatorsResponse {
  return {
    validators: [],
    pagination: undefined
  };
}
export const QueryDelegatorValidatorsResponse = {
  typeUrl: "/cosmos.staking.v1beta1.QueryDelegatorValidatorsResponse",
  encode(message: QueryDelegatorValidatorsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.validators) {
      Validator.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegatorValidatorsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorValidatorsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validators.push(Validator.decode(reader, reader.uint32()));
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
  fromPartial(object: Partial<QueryDelegatorValidatorsResponse>): QueryDelegatorValidatorsResponse {
    const message = createBaseQueryDelegatorValidatorsResponse();
    message.validators = object.validators?.map(e => Validator.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryDelegatorValidatorsResponseAmino): QueryDelegatorValidatorsResponse {
    const message = createBaseQueryDelegatorValidatorsResponse();
    message.validators = object.validators?.map(e => Validator.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryDelegatorValidatorsResponse): QueryDelegatorValidatorsResponseAmino {
    const obj: any = {};
    if (message.validators) {
      obj.validators = message.validators.map(e => e ? Validator.toAmino(e) : undefined);
    } else {
      obj.validators = message.validators;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDelegatorValidatorsResponseAminoMsg): QueryDelegatorValidatorsResponse {
    return QueryDelegatorValidatorsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryDelegatorValidatorsResponse): QueryDelegatorValidatorsResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryDelegatorValidatorsResponse",
      value: QueryDelegatorValidatorsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryDelegatorValidatorsResponseProtoMsg): QueryDelegatorValidatorsResponse {
    return QueryDelegatorValidatorsResponse.decode(message.value);
  },
  toProto(message: QueryDelegatorValidatorsResponse): Uint8Array {
    return QueryDelegatorValidatorsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDelegatorValidatorsResponse): QueryDelegatorValidatorsResponseProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryDelegatorValidatorsResponse",
      value: QueryDelegatorValidatorsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryDelegatorValidatorRequest(): QueryDelegatorValidatorRequest {
  return {
    delegatorAddr: "",
    validatorAddr: ""
  };
}
export const QueryDelegatorValidatorRequest = {
  typeUrl: "/cosmos.staking.v1beta1.QueryDelegatorValidatorRequest",
  encode(message: QueryDelegatorValidatorRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegatorAddr !== "") {
      writer.uint32(10).string(message.delegatorAddr);
    }
    if (message.validatorAddr !== "") {
      writer.uint32(18).string(message.validatorAddr);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegatorValidatorRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorValidatorRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddr = reader.string();
          break;
        case 2:
          message.validatorAddr = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryDelegatorValidatorRequest>): QueryDelegatorValidatorRequest {
    const message = createBaseQueryDelegatorValidatorRequest();
    message.delegatorAddr = object.delegatorAddr ?? "";
    message.validatorAddr = object.validatorAddr ?? "";
    return message;
  },
  fromAmino(object: QueryDelegatorValidatorRequestAmino): QueryDelegatorValidatorRequest {
    const message = createBaseQueryDelegatorValidatorRequest();
    if (object.delegator_addr !== undefined && object.delegator_addr !== null) {
      message.delegatorAddr = object.delegator_addr;
    }
    if (object.validator_addr !== undefined && object.validator_addr !== null) {
      message.validatorAddr = object.validator_addr;
    }
    return message;
  },
  toAmino(message: QueryDelegatorValidatorRequest): QueryDelegatorValidatorRequestAmino {
    const obj: any = {};
    obj.delegator_addr = message.delegatorAddr === "" ? undefined : message.delegatorAddr;
    obj.validator_addr = message.validatorAddr === "" ? undefined : message.validatorAddr;
    return obj;
  },
  fromAminoMsg(object: QueryDelegatorValidatorRequestAminoMsg): QueryDelegatorValidatorRequest {
    return QueryDelegatorValidatorRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryDelegatorValidatorRequest): QueryDelegatorValidatorRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryDelegatorValidatorRequest",
      value: QueryDelegatorValidatorRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryDelegatorValidatorRequestProtoMsg): QueryDelegatorValidatorRequest {
    return QueryDelegatorValidatorRequest.decode(message.value);
  },
  toProto(message: QueryDelegatorValidatorRequest): Uint8Array {
    return QueryDelegatorValidatorRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDelegatorValidatorRequest): QueryDelegatorValidatorRequestProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryDelegatorValidatorRequest",
      value: QueryDelegatorValidatorRequest.encode(message).finish()
    };
  }
};
function createBaseQueryDelegatorValidatorResponse(): QueryDelegatorValidatorResponse {
  return {
    validator: Validator.fromPartial({})
  };
}
export const QueryDelegatorValidatorResponse = {
  typeUrl: "/cosmos.staking.v1beta1.QueryDelegatorValidatorResponse",
  encode(message: QueryDelegatorValidatorResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validator !== undefined) {
      Validator.encode(message.validator, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegatorValidatorResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorValidatorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validator = Validator.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryDelegatorValidatorResponse>): QueryDelegatorValidatorResponse {
    const message = createBaseQueryDelegatorValidatorResponse();
    message.validator = object.validator !== undefined && object.validator !== null ? Validator.fromPartial(object.validator) : undefined;
    return message;
  },
  fromAmino(object: QueryDelegatorValidatorResponseAmino): QueryDelegatorValidatorResponse {
    const message = createBaseQueryDelegatorValidatorResponse();
    if (object.validator !== undefined && object.validator !== null) {
      message.validator = Validator.fromAmino(object.validator);
    }
    return message;
  },
  toAmino(message: QueryDelegatorValidatorResponse): QueryDelegatorValidatorResponseAmino {
    const obj: any = {};
    obj.validator = message.validator ? Validator.toAmino(message.validator) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDelegatorValidatorResponseAminoMsg): QueryDelegatorValidatorResponse {
    return QueryDelegatorValidatorResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryDelegatorValidatorResponse): QueryDelegatorValidatorResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryDelegatorValidatorResponse",
      value: QueryDelegatorValidatorResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryDelegatorValidatorResponseProtoMsg): QueryDelegatorValidatorResponse {
    return QueryDelegatorValidatorResponse.decode(message.value);
  },
  toProto(message: QueryDelegatorValidatorResponse): Uint8Array {
    return QueryDelegatorValidatorResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDelegatorValidatorResponse): QueryDelegatorValidatorResponseProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryDelegatorValidatorResponse",
      value: QueryDelegatorValidatorResponse.encode(message).finish()
    };
  }
};
function createBaseQueryHistoricalInfoRequest(): QueryHistoricalInfoRequest {
  return {
    height: BigInt(0)
  };
}
export const QueryHistoricalInfoRequest = {
  typeUrl: "/cosmos.staking.v1beta1.QueryHistoricalInfoRequest",
  encode(message: QueryHistoricalInfoRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.height !== BigInt(0)) {
      writer.uint32(8).int64(message.height);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryHistoricalInfoRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryHistoricalInfoRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryHistoricalInfoRequest>): QueryHistoricalInfoRequest {
    const message = createBaseQueryHistoricalInfoRequest();
    message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryHistoricalInfoRequestAmino): QueryHistoricalInfoRequest {
    const message = createBaseQueryHistoricalInfoRequest();
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height);
    }
    return message;
  },
  toAmino(message: QueryHistoricalInfoRequest): QueryHistoricalInfoRequestAmino {
    const obj: any = {};
    obj.height = message.height !== BigInt(0) ? message.height.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryHistoricalInfoRequestAminoMsg): QueryHistoricalInfoRequest {
    return QueryHistoricalInfoRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryHistoricalInfoRequest): QueryHistoricalInfoRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryHistoricalInfoRequest",
      value: QueryHistoricalInfoRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryHistoricalInfoRequestProtoMsg): QueryHistoricalInfoRequest {
    return QueryHistoricalInfoRequest.decode(message.value);
  },
  toProto(message: QueryHistoricalInfoRequest): Uint8Array {
    return QueryHistoricalInfoRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryHistoricalInfoRequest): QueryHistoricalInfoRequestProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryHistoricalInfoRequest",
      value: QueryHistoricalInfoRequest.encode(message).finish()
    };
  }
};
function createBaseQueryHistoricalInfoResponse(): QueryHistoricalInfoResponse {
  return {
    hist: undefined
  };
}
export const QueryHistoricalInfoResponse = {
  typeUrl: "/cosmos.staking.v1beta1.QueryHistoricalInfoResponse",
  encode(message: QueryHistoricalInfoResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.hist !== undefined) {
      HistoricalInfo.encode(message.hist, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryHistoricalInfoResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryHistoricalInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hist = HistoricalInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryHistoricalInfoResponse>): QueryHistoricalInfoResponse {
    const message = createBaseQueryHistoricalInfoResponse();
    message.hist = object.hist !== undefined && object.hist !== null ? HistoricalInfo.fromPartial(object.hist) : undefined;
    return message;
  },
  fromAmino(object: QueryHistoricalInfoResponseAmino): QueryHistoricalInfoResponse {
    const message = createBaseQueryHistoricalInfoResponse();
    if (object.hist !== undefined && object.hist !== null) {
      message.hist = HistoricalInfo.fromAmino(object.hist);
    }
    return message;
  },
  toAmino(message: QueryHistoricalInfoResponse): QueryHistoricalInfoResponseAmino {
    const obj: any = {};
    obj.hist = message.hist ? HistoricalInfo.toAmino(message.hist) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryHistoricalInfoResponseAminoMsg): QueryHistoricalInfoResponse {
    return QueryHistoricalInfoResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryHistoricalInfoResponse): QueryHistoricalInfoResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryHistoricalInfoResponse",
      value: QueryHistoricalInfoResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryHistoricalInfoResponseProtoMsg): QueryHistoricalInfoResponse {
    return QueryHistoricalInfoResponse.decode(message.value);
  },
  toProto(message: QueryHistoricalInfoResponse): Uint8Array {
    return QueryHistoricalInfoResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryHistoricalInfoResponse): QueryHistoricalInfoResponseProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryHistoricalInfoResponse",
      value: QueryHistoricalInfoResponse.encode(message).finish()
    };
  }
};
function createBaseQueryPoolRequest(): QueryPoolRequest {
  return {};
}
export const QueryPoolRequest = {
  typeUrl: "/cosmos.staking.v1beta1.QueryPoolRequest",
  encode(_: QueryPoolRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPoolRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolRequest();
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
  fromPartial(_: Partial<QueryPoolRequest>): QueryPoolRequest {
    const message = createBaseQueryPoolRequest();
    return message;
  },
  fromAmino(_: QueryPoolRequestAmino): QueryPoolRequest {
    const message = createBaseQueryPoolRequest();
    return message;
  },
  toAmino(_: QueryPoolRequest): QueryPoolRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryPoolRequestAminoMsg): QueryPoolRequest {
    return QueryPoolRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryPoolRequest): QueryPoolRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryPoolRequest",
      value: QueryPoolRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryPoolRequestProtoMsg): QueryPoolRequest {
    return QueryPoolRequest.decode(message.value);
  },
  toProto(message: QueryPoolRequest): Uint8Array {
    return QueryPoolRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPoolRequest): QueryPoolRequestProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryPoolRequest",
      value: QueryPoolRequest.encode(message).finish()
    };
  }
};
function createBaseQueryPoolResponse(): QueryPoolResponse {
  return {
    pool: Pool.fromPartial({})
  };
}
export const QueryPoolResponse = {
  typeUrl: "/cosmos.staking.v1beta1.QueryPoolResponse",
  encode(message: QueryPoolResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pool !== undefined) {
      Pool.encode(message.pool, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPoolResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pool = Pool.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryPoolResponse>): QueryPoolResponse {
    const message = createBaseQueryPoolResponse();
    message.pool = object.pool !== undefined && object.pool !== null ? Pool.fromPartial(object.pool) : undefined;
    return message;
  },
  fromAmino(object: QueryPoolResponseAmino): QueryPoolResponse {
    const message = createBaseQueryPoolResponse();
    if (object.pool !== undefined && object.pool !== null) {
      message.pool = Pool.fromAmino(object.pool);
    }
    return message;
  },
  toAmino(message: QueryPoolResponse): QueryPoolResponseAmino {
    const obj: any = {};
    obj.pool = message.pool ? Pool.toAmino(message.pool) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPoolResponseAminoMsg): QueryPoolResponse {
    return QueryPoolResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryPoolResponse): QueryPoolResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryPoolResponse",
      value: QueryPoolResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryPoolResponseProtoMsg): QueryPoolResponse {
    return QueryPoolResponse.decode(message.value);
  },
  toProto(message: QueryPoolResponse): Uint8Array {
    return QueryPoolResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPoolResponse): QueryPoolResponseProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryPoolResponse",
      value: QueryPoolResponse.encode(message).finish()
    };
  }
};
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/cosmos.staking.v1beta1.QueryParamsRequest",
  encode(_: QueryParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  toAmino(_: QueryParamsRequest): QueryParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest {
    return QueryParamsRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryParamsRequest): QueryParamsRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryParamsRequest",
      value: QueryParamsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest {
    return QueryParamsRequest.decode(message.value);
  },
  toProto(message: QueryParamsRequest): Uint8Array {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const QueryParamsResponse = {
  typeUrl: "/cosmos.staking.v1beta1.QueryParamsResponse",
  encode(message: QueryParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: QueryParamsResponse): QueryParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse {
    return QueryParamsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryParamsResponse): QueryParamsResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryParamsResponse",
      value: QueryParamsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message: QueryParamsResponse): Uint8Array {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryTokenizeShareRecordByIdRequest(): QueryTokenizeShareRecordByIdRequest {
  return {
    id: BigInt(0)
  };
}
export const QueryTokenizeShareRecordByIdRequest = {
  typeUrl: "/cosmos.staking.v1beta1.QueryTokenizeShareRecordByIdRequest",
  encode(message: QueryTokenizeShareRecordByIdRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTokenizeShareRecordByIdRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTokenizeShareRecordByIdRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryTokenizeShareRecordByIdRequest>): QueryTokenizeShareRecordByIdRequest {
    const message = createBaseQueryTokenizeShareRecordByIdRequest();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryTokenizeShareRecordByIdRequestAmino): QueryTokenizeShareRecordByIdRequest {
    const message = createBaseQueryTokenizeShareRecordByIdRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: QueryTokenizeShareRecordByIdRequest): QueryTokenizeShareRecordByIdRequestAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryTokenizeShareRecordByIdRequestAminoMsg): QueryTokenizeShareRecordByIdRequest {
    return QueryTokenizeShareRecordByIdRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryTokenizeShareRecordByIdRequest): QueryTokenizeShareRecordByIdRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryTokenizeShareRecordByIdRequest",
      value: QueryTokenizeShareRecordByIdRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryTokenizeShareRecordByIdRequestProtoMsg): QueryTokenizeShareRecordByIdRequest {
    return QueryTokenizeShareRecordByIdRequest.decode(message.value);
  },
  toProto(message: QueryTokenizeShareRecordByIdRequest): Uint8Array {
    return QueryTokenizeShareRecordByIdRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTokenizeShareRecordByIdRequest): QueryTokenizeShareRecordByIdRequestProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryTokenizeShareRecordByIdRequest",
      value: QueryTokenizeShareRecordByIdRequest.encode(message).finish()
    };
  }
};
function createBaseQueryTokenizeShareRecordByIdResponse(): QueryTokenizeShareRecordByIdResponse {
  return {
    record: TokenizeShareRecord.fromPartial({})
  };
}
export const QueryTokenizeShareRecordByIdResponse = {
  typeUrl: "/cosmos.staking.v1beta1.QueryTokenizeShareRecordByIdResponse",
  encode(message: QueryTokenizeShareRecordByIdResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.record !== undefined) {
      TokenizeShareRecord.encode(message.record, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTokenizeShareRecordByIdResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTokenizeShareRecordByIdResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.record = TokenizeShareRecord.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryTokenizeShareRecordByIdResponse>): QueryTokenizeShareRecordByIdResponse {
    const message = createBaseQueryTokenizeShareRecordByIdResponse();
    message.record = object.record !== undefined && object.record !== null ? TokenizeShareRecord.fromPartial(object.record) : undefined;
    return message;
  },
  fromAmino(object: QueryTokenizeShareRecordByIdResponseAmino): QueryTokenizeShareRecordByIdResponse {
    const message = createBaseQueryTokenizeShareRecordByIdResponse();
    if (object.record !== undefined && object.record !== null) {
      message.record = TokenizeShareRecord.fromAmino(object.record);
    }
    return message;
  },
  toAmino(message: QueryTokenizeShareRecordByIdResponse): QueryTokenizeShareRecordByIdResponseAmino {
    const obj: any = {};
    obj.record = message.record ? TokenizeShareRecord.toAmino(message.record) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryTokenizeShareRecordByIdResponseAminoMsg): QueryTokenizeShareRecordByIdResponse {
    return QueryTokenizeShareRecordByIdResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryTokenizeShareRecordByIdResponse): QueryTokenizeShareRecordByIdResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryTokenizeShareRecordByIdResponse",
      value: QueryTokenizeShareRecordByIdResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryTokenizeShareRecordByIdResponseProtoMsg): QueryTokenizeShareRecordByIdResponse {
    return QueryTokenizeShareRecordByIdResponse.decode(message.value);
  },
  toProto(message: QueryTokenizeShareRecordByIdResponse): Uint8Array {
    return QueryTokenizeShareRecordByIdResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTokenizeShareRecordByIdResponse): QueryTokenizeShareRecordByIdResponseProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryTokenizeShareRecordByIdResponse",
      value: QueryTokenizeShareRecordByIdResponse.encode(message).finish()
    };
  }
};
function createBaseQueryTokenizeShareRecordByDenomRequest(): QueryTokenizeShareRecordByDenomRequest {
  return {
    denom: ""
  };
}
export const QueryTokenizeShareRecordByDenomRequest = {
  typeUrl: "/cosmos.staking.v1beta1.QueryTokenizeShareRecordByDenomRequest",
  encode(message: QueryTokenizeShareRecordByDenomRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTokenizeShareRecordByDenomRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTokenizeShareRecordByDenomRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryTokenizeShareRecordByDenomRequest>): QueryTokenizeShareRecordByDenomRequest {
    const message = createBaseQueryTokenizeShareRecordByDenomRequest();
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: QueryTokenizeShareRecordByDenomRequestAmino): QueryTokenizeShareRecordByDenomRequest {
    const message = createBaseQueryTokenizeShareRecordByDenomRequest();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: QueryTokenizeShareRecordByDenomRequest): QueryTokenizeShareRecordByDenomRequestAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    return obj;
  },
  fromAminoMsg(object: QueryTokenizeShareRecordByDenomRequestAminoMsg): QueryTokenizeShareRecordByDenomRequest {
    return QueryTokenizeShareRecordByDenomRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryTokenizeShareRecordByDenomRequest): QueryTokenizeShareRecordByDenomRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryTokenizeShareRecordByDenomRequest",
      value: QueryTokenizeShareRecordByDenomRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryTokenizeShareRecordByDenomRequestProtoMsg): QueryTokenizeShareRecordByDenomRequest {
    return QueryTokenizeShareRecordByDenomRequest.decode(message.value);
  },
  toProto(message: QueryTokenizeShareRecordByDenomRequest): Uint8Array {
    return QueryTokenizeShareRecordByDenomRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTokenizeShareRecordByDenomRequest): QueryTokenizeShareRecordByDenomRequestProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryTokenizeShareRecordByDenomRequest",
      value: QueryTokenizeShareRecordByDenomRequest.encode(message).finish()
    };
  }
};
function createBaseQueryTokenizeShareRecordByDenomResponse(): QueryTokenizeShareRecordByDenomResponse {
  return {
    record: TokenizeShareRecord.fromPartial({})
  };
}
export const QueryTokenizeShareRecordByDenomResponse = {
  typeUrl: "/cosmos.staking.v1beta1.QueryTokenizeShareRecordByDenomResponse",
  encode(message: QueryTokenizeShareRecordByDenomResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.record !== undefined) {
      TokenizeShareRecord.encode(message.record, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTokenizeShareRecordByDenomResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTokenizeShareRecordByDenomResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.record = TokenizeShareRecord.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryTokenizeShareRecordByDenomResponse>): QueryTokenizeShareRecordByDenomResponse {
    const message = createBaseQueryTokenizeShareRecordByDenomResponse();
    message.record = object.record !== undefined && object.record !== null ? TokenizeShareRecord.fromPartial(object.record) : undefined;
    return message;
  },
  fromAmino(object: QueryTokenizeShareRecordByDenomResponseAmino): QueryTokenizeShareRecordByDenomResponse {
    const message = createBaseQueryTokenizeShareRecordByDenomResponse();
    if (object.record !== undefined && object.record !== null) {
      message.record = TokenizeShareRecord.fromAmino(object.record);
    }
    return message;
  },
  toAmino(message: QueryTokenizeShareRecordByDenomResponse): QueryTokenizeShareRecordByDenomResponseAmino {
    const obj: any = {};
    obj.record = message.record ? TokenizeShareRecord.toAmino(message.record) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryTokenizeShareRecordByDenomResponseAminoMsg): QueryTokenizeShareRecordByDenomResponse {
    return QueryTokenizeShareRecordByDenomResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryTokenizeShareRecordByDenomResponse): QueryTokenizeShareRecordByDenomResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryTokenizeShareRecordByDenomResponse",
      value: QueryTokenizeShareRecordByDenomResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryTokenizeShareRecordByDenomResponseProtoMsg): QueryTokenizeShareRecordByDenomResponse {
    return QueryTokenizeShareRecordByDenomResponse.decode(message.value);
  },
  toProto(message: QueryTokenizeShareRecordByDenomResponse): Uint8Array {
    return QueryTokenizeShareRecordByDenomResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTokenizeShareRecordByDenomResponse): QueryTokenizeShareRecordByDenomResponseProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryTokenizeShareRecordByDenomResponse",
      value: QueryTokenizeShareRecordByDenomResponse.encode(message).finish()
    };
  }
};
function createBaseQueryTokenizeShareRecordsOwnedRequest(): QueryTokenizeShareRecordsOwnedRequest {
  return {
    owner: ""
  };
}
export const QueryTokenizeShareRecordsOwnedRequest = {
  typeUrl: "/cosmos.staking.v1beta1.QueryTokenizeShareRecordsOwnedRequest",
  encode(message: QueryTokenizeShareRecordsOwnedRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTokenizeShareRecordsOwnedRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTokenizeShareRecordsOwnedRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryTokenizeShareRecordsOwnedRequest>): QueryTokenizeShareRecordsOwnedRequest {
    const message = createBaseQueryTokenizeShareRecordsOwnedRequest();
    message.owner = object.owner ?? "";
    return message;
  },
  fromAmino(object: QueryTokenizeShareRecordsOwnedRequestAmino): QueryTokenizeShareRecordsOwnedRequest {
    const message = createBaseQueryTokenizeShareRecordsOwnedRequest();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    return message;
  },
  toAmino(message: QueryTokenizeShareRecordsOwnedRequest): QueryTokenizeShareRecordsOwnedRequestAmino {
    const obj: any = {};
    obj.owner = message.owner === "" ? undefined : message.owner;
    return obj;
  },
  fromAminoMsg(object: QueryTokenizeShareRecordsOwnedRequestAminoMsg): QueryTokenizeShareRecordsOwnedRequest {
    return QueryTokenizeShareRecordsOwnedRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryTokenizeShareRecordsOwnedRequest): QueryTokenizeShareRecordsOwnedRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryTokenizeShareRecordsOwnedRequest",
      value: QueryTokenizeShareRecordsOwnedRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryTokenizeShareRecordsOwnedRequestProtoMsg): QueryTokenizeShareRecordsOwnedRequest {
    return QueryTokenizeShareRecordsOwnedRequest.decode(message.value);
  },
  toProto(message: QueryTokenizeShareRecordsOwnedRequest): Uint8Array {
    return QueryTokenizeShareRecordsOwnedRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTokenizeShareRecordsOwnedRequest): QueryTokenizeShareRecordsOwnedRequestProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryTokenizeShareRecordsOwnedRequest",
      value: QueryTokenizeShareRecordsOwnedRequest.encode(message).finish()
    };
  }
};
function createBaseQueryTokenizeShareRecordsOwnedResponse(): QueryTokenizeShareRecordsOwnedResponse {
  return {
    records: []
  };
}
export const QueryTokenizeShareRecordsOwnedResponse = {
  typeUrl: "/cosmos.staking.v1beta1.QueryTokenizeShareRecordsOwnedResponse",
  encode(message: QueryTokenizeShareRecordsOwnedResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.records) {
      TokenizeShareRecord.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTokenizeShareRecordsOwnedResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTokenizeShareRecordsOwnedResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.records.push(TokenizeShareRecord.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryTokenizeShareRecordsOwnedResponse>): QueryTokenizeShareRecordsOwnedResponse {
    const message = createBaseQueryTokenizeShareRecordsOwnedResponse();
    message.records = object.records?.map(e => TokenizeShareRecord.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryTokenizeShareRecordsOwnedResponseAmino): QueryTokenizeShareRecordsOwnedResponse {
    const message = createBaseQueryTokenizeShareRecordsOwnedResponse();
    message.records = object.records?.map(e => TokenizeShareRecord.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryTokenizeShareRecordsOwnedResponse): QueryTokenizeShareRecordsOwnedResponseAmino {
    const obj: any = {};
    if (message.records) {
      obj.records = message.records.map(e => e ? TokenizeShareRecord.toAmino(e) : undefined);
    } else {
      obj.records = message.records;
    }
    return obj;
  },
  fromAminoMsg(object: QueryTokenizeShareRecordsOwnedResponseAminoMsg): QueryTokenizeShareRecordsOwnedResponse {
    return QueryTokenizeShareRecordsOwnedResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryTokenizeShareRecordsOwnedResponse): QueryTokenizeShareRecordsOwnedResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryTokenizeShareRecordsOwnedResponse",
      value: QueryTokenizeShareRecordsOwnedResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryTokenizeShareRecordsOwnedResponseProtoMsg): QueryTokenizeShareRecordsOwnedResponse {
    return QueryTokenizeShareRecordsOwnedResponse.decode(message.value);
  },
  toProto(message: QueryTokenizeShareRecordsOwnedResponse): Uint8Array {
    return QueryTokenizeShareRecordsOwnedResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTokenizeShareRecordsOwnedResponse): QueryTokenizeShareRecordsOwnedResponseProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryTokenizeShareRecordsOwnedResponse",
      value: QueryTokenizeShareRecordsOwnedResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllTokenizeShareRecordsRequest(): QueryAllTokenizeShareRecordsRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllTokenizeShareRecordsRequest = {
  typeUrl: "/cosmos.staking.v1beta1.QueryAllTokenizeShareRecordsRequest",
  encode(message: QueryAllTokenizeShareRecordsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllTokenizeShareRecordsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllTokenizeShareRecordsRequest();
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
  fromPartial(object: Partial<QueryAllTokenizeShareRecordsRequest>): QueryAllTokenizeShareRecordsRequest {
    const message = createBaseQueryAllTokenizeShareRecordsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllTokenizeShareRecordsRequestAmino): QueryAllTokenizeShareRecordsRequest {
    const message = createBaseQueryAllTokenizeShareRecordsRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllTokenizeShareRecordsRequest): QueryAllTokenizeShareRecordsRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllTokenizeShareRecordsRequestAminoMsg): QueryAllTokenizeShareRecordsRequest {
    return QueryAllTokenizeShareRecordsRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryAllTokenizeShareRecordsRequest): QueryAllTokenizeShareRecordsRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryAllTokenizeShareRecordsRequest",
      value: QueryAllTokenizeShareRecordsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryAllTokenizeShareRecordsRequestProtoMsg): QueryAllTokenizeShareRecordsRequest {
    return QueryAllTokenizeShareRecordsRequest.decode(message.value);
  },
  toProto(message: QueryAllTokenizeShareRecordsRequest): Uint8Array {
    return QueryAllTokenizeShareRecordsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllTokenizeShareRecordsRequest): QueryAllTokenizeShareRecordsRequestProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryAllTokenizeShareRecordsRequest",
      value: QueryAllTokenizeShareRecordsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllTokenizeShareRecordsResponse(): QueryAllTokenizeShareRecordsResponse {
  return {
    records: [],
    pagination: undefined
  };
}
export const QueryAllTokenizeShareRecordsResponse = {
  typeUrl: "/cosmos.staking.v1beta1.QueryAllTokenizeShareRecordsResponse",
  encode(message: QueryAllTokenizeShareRecordsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.records) {
      TokenizeShareRecord.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllTokenizeShareRecordsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllTokenizeShareRecordsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.records.push(TokenizeShareRecord.decode(reader, reader.uint32()));
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
  fromPartial(object: Partial<QueryAllTokenizeShareRecordsResponse>): QueryAllTokenizeShareRecordsResponse {
    const message = createBaseQueryAllTokenizeShareRecordsResponse();
    message.records = object.records?.map(e => TokenizeShareRecord.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllTokenizeShareRecordsResponseAmino): QueryAllTokenizeShareRecordsResponse {
    const message = createBaseQueryAllTokenizeShareRecordsResponse();
    message.records = object.records?.map(e => TokenizeShareRecord.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllTokenizeShareRecordsResponse): QueryAllTokenizeShareRecordsResponseAmino {
    const obj: any = {};
    if (message.records) {
      obj.records = message.records.map(e => e ? TokenizeShareRecord.toAmino(e) : undefined);
    } else {
      obj.records = message.records;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllTokenizeShareRecordsResponseAminoMsg): QueryAllTokenizeShareRecordsResponse {
    return QueryAllTokenizeShareRecordsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryAllTokenizeShareRecordsResponse): QueryAllTokenizeShareRecordsResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryAllTokenizeShareRecordsResponse",
      value: QueryAllTokenizeShareRecordsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryAllTokenizeShareRecordsResponseProtoMsg): QueryAllTokenizeShareRecordsResponse {
    return QueryAllTokenizeShareRecordsResponse.decode(message.value);
  },
  toProto(message: QueryAllTokenizeShareRecordsResponse): Uint8Array {
    return QueryAllTokenizeShareRecordsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllTokenizeShareRecordsResponse): QueryAllTokenizeShareRecordsResponseProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryAllTokenizeShareRecordsResponse",
      value: QueryAllTokenizeShareRecordsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryLastTokenizeShareRecordIdRequest(): QueryLastTokenizeShareRecordIdRequest {
  return {};
}
export const QueryLastTokenizeShareRecordIdRequest = {
  typeUrl: "/cosmos.staking.v1beta1.QueryLastTokenizeShareRecordIdRequest",
  encode(_: QueryLastTokenizeShareRecordIdRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryLastTokenizeShareRecordIdRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLastTokenizeShareRecordIdRequest();
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
  fromPartial(_: Partial<QueryLastTokenizeShareRecordIdRequest>): QueryLastTokenizeShareRecordIdRequest {
    const message = createBaseQueryLastTokenizeShareRecordIdRequest();
    return message;
  },
  fromAmino(_: QueryLastTokenizeShareRecordIdRequestAmino): QueryLastTokenizeShareRecordIdRequest {
    const message = createBaseQueryLastTokenizeShareRecordIdRequest();
    return message;
  },
  toAmino(_: QueryLastTokenizeShareRecordIdRequest): QueryLastTokenizeShareRecordIdRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryLastTokenizeShareRecordIdRequestAminoMsg): QueryLastTokenizeShareRecordIdRequest {
    return QueryLastTokenizeShareRecordIdRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryLastTokenizeShareRecordIdRequest): QueryLastTokenizeShareRecordIdRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryLastTokenizeShareRecordIdRequest",
      value: QueryLastTokenizeShareRecordIdRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryLastTokenizeShareRecordIdRequestProtoMsg): QueryLastTokenizeShareRecordIdRequest {
    return QueryLastTokenizeShareRecordIdRequest.decode(message.value);
  },
  toProto(message: QueryLastTokenizeShareRecordIdRequest): Uint8Array {
    return QueryLastTokenizeShareRecordIdRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryLastTokenizeShareRecordIdRequest): QueryLastTokenizeShareRecordIdRequestProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryLastTokenizeShareRecordIdRequest",
      value: QueryLastTokenizeShareRecordIdRequest.encode(message).finish()
    };
  }
};
function createBaseQueryLastTokenizeShareRecordIdResponse(): QueryLastTokenizeShareRecordIdResponse {
  return {
    id: BigInt(0)
  };
}
export const QueryLastTokenizeShareRecordIdResponse = {
  typeUrl: "/cosmos.staking.v1beta1.QueryLastTokenizeShareRecordIdResponse",
  encode(message: QueryLastTokenizeShareRecordIdResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryLastTokenizeShareRecordIdResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLastTokenizeShareRecordIdResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryLastTokenizeShareRecordIdResponse>): QueryLastTokenizeShareRecordIdResponse {
    const message = createBaseQueryLastTokenizeShareRecordIdResponse();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryLastTokenizeShareRecordIdResponseAmino): QueryLastTokenizeShareRecordIdResponse {
    const message = createBaseQueryLastTokenizeShareRecordIdResponse();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: QueryLastTokenizeShareRecordIdResponse): QueryLastTokenizeShareRecordIdResponseAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryLastTokenizeShareRecordIdResponseAminoMsg): QueryLastTokenizeShareRecordIdResponse {
    return QueryLastTokenizeShareRecordIdResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryLastTokenizeShareRecordIdResponse): QueryLastTokenizeShareRecordIdResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryLastTokenizeShareRecordIdResponse",
      value: QueryLastTokenizeShareRecordIdResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryLastTokenizeShareRecordIdResponseProtoMsg): QueryLastTokenizeShareRecordIdResponse {
    return QueryLastTokenizeShareRecordIdResponse.decode(message.value);
  },
  toProto(message: QueryLastTokenizeShareRecordIdResponse): Uint8Array {
    return QueryLastTokenizeShareRecordIdResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryLastTokenizeShareRecordIdResponse): QueryLastTokenizeShareRecordIdResponseProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryLastTokenizeShareRecordIdResponse",
      value: QueryLastTokenizeShareRecordIdResponse.encode(message).finish()
    };
  }
};
function createBaseQueryTotalTokenizeSharedAssetsRequest(): QueryTotalTokenizeSharedAssetsRequest {
  return {};
}
export const QueryTotalTokenizeSharedAssetsRequest = {
  typeUrl: "/cosmos.staking.v1beta1.QueryTotalTokenizeSharedAssetsRequest",
  encode(_: QueryTotalTokenizeSharedAssetsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalTokenizeSharedAssetsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalTokenizeSharedAssetsRequest();
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
  fromPartial(_: Partial<QueryTotalTokenizeSharedAssetsRequest>): QueryTotalTokenizeSharedAssetsRequest {
    const message = createBaseQueryTotalTokenizeSharedAssetsRequest();
    return message;
  },
  fromAmino(_: QueryTotalTokenizeSharedAssetsRequestAmino): QueryTotalTokenizeSharedAssetsRequest {
    const message = createBaseQueryTotalTokenizeSharedAssetsRequest();
    return message;
  },
  toAmino(_: QueryTotalTokenizeSharedAssetsRequest): QueryTotalTokenizeSharedAssetsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryTotalTokenizeSharedAssetsRequestAminoMsg): QueryTotalTokenizeSharedAssetsRequest {
    return QueryTotalTokenizeSharedAssetsRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryTotalTokenizeSharedAssetsRequest): QueryTotalTokenizeSharedAssetsRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryTotalTokenizeSharedAssetsRequest",
      value: QueryTotalTokenizeSharedAssetsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryTotalTokenizeSharedAssetsRequestProtoMsg): QueryTotalTokenizeSharedAssetsRequest {
    return QueryTotalTokenizeSharedAssetsRequest.decode(message.value);
  },
  toProto(message: QueryTotalTokenizeSharedAssetsRequest): Uint8Array {
    return QueryTotalTokenizeSharedAssetsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTotalTokenizeSharedAssetsRequest): QueryTotalTokenizeSharedAssetsRequestProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryTotalTokenizeSharedAssetsRequest",
      value: QueryTotalTokenizeSharedAssetsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryTotalTokenizeSharedAssetsResponse(): QueryTotalTokenizeSharedAssetsResponse {
  return {
    value: Coin.fromPartial({})
  };
}
export const QueryTotalTokenizeSharedAssetsResponse = {
  typeUrl: "/cosmos.staking.v1beta1.QueryTotalTokenizeSharedAssetsResponse",
  encode(message: QueryTotalTokenizeSharedAssetsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.value !== undefined) {
      Coin.encode(message.value, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalTokenizeSharedAssetsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalTokenizeSharedAssetsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.value = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryTotalTokenizeSharedAssetsResponse>): QueryTotalTokenizeSharedAssetsResponse {
    const message = createBaseQueryTotalTokenizeSharedAssetsResponse();
    message.value = object.value !== undefined && object.value !== null ? Coin.fromPartial(object.value) : undefined;
    return message;
  },
  fromAmino(object: QueryTotalTokenizeSharedAssetsResponseAmino): QueryTotalTokenizeSharedAssetsResponse {
    const message = createBaseQueryTotalTokenizeSharedAssetsResponse();
    if (object.value !== undefined && object.value !== null) {
      message.value = Coin.fromAmino(object.value);
    }
    return message;
  },
  toAmino(message: QueryTotalTokenizeSharedAssetsResponse): QueryTotalTokenizeSharedAssetsResponseAmino {
    const obj: any = {};
    obj.value = message.value ? Coin.toAmino(message.value) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryTotalTokenizeSharedAssetsResponseAminoMsg): QueryTotalTokenizeSharedAssetsResponse {
    return QueryTotalTokenizeSharedAssetsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryTotalTokenizeSharedAssetsResponse): QueryTotalTokenizeSharedAssetsResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryTotalTokenizeSharedAssetsResponse",
      value: QueryTotalTokenizeSharedAssetsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryTotalTokenizeSharedAssetsResponseProtoMsg): QueryTotalTokenizeSharedAssetsResponse {
    return QueryTotalTokenizeSharedAssetsResponse.decode(message.value);
  },
  toProto(message: QueryTotalTokenizeSharedAssetsResponse): Uint8Array {
    return QueryTotalTokenizeSharedAssetsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTotalTokenizeSharedAssetsResponse): QueryTotalTokenizeSharedAssetsResponseProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryTotalTokenizeSharedAssetsResponse",
      value: QueryTotalTokenizeSharedAssetsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryTotalLiquidStaked(): QueryTotalLiquidStaked {
  return {};
}
export const QueryTotalLiquidStaked = {
  typeUrl: "/cosmos.staking.v1beta1.QueryTotalLiquidStaked",
  encode(_: QueryTotalLiquidStaked, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalLiquidStaked {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalLiquidStaked();
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
  fromPartial(_: Partial<QueryTotalLiquidStaked>): QueryTotalLiquidStaked {
    const message = createBaseQueryTotalLiquidStaked();
    return message;
  },
  fromAmino(_: QueryTotalLiquidStakedAmino): QueryTotalLiquidStaked {
    const message = createBaseQueryTotalLiquidStaked();
    return message;
  },
  toAmino(_: QueryTotalLiquidStaked): QueryTotalLiquidStakedAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryTotalLiquidStakedAminoMsg): QueryTotalLiquidStaked {
    return QueryTotalLiquidStaked.fromAmino(object.value);
  },
  toAminoMsg(message: QueryTotalLiquidStaked): QueryTotalLiquidStakedAminoMsg {
    return {
      type: "cosmos-sdk/QueryTotalLiquidStaked",
      value: QueryTotalLiquidStaked.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryTotalLiquidStakedProtoMsg): QueryTotalLiquidStaked {
    return QueryTotalLiquidStaked.decode(message.value);
  },
  toProto(message: QueryTotalLiquidStaked): Uint8Array {
    return QueryTotalLiquidStaked.encode(message).finish();
  },
  toProtoMsg(message: QueryTotalLiquidStaked): QueryTotalLiquidStakedProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryTotalLiquidStaked",
      value: QueryTotalLiquidStaked.encode(message).finish()
    };
  }
};
function createBaseQueryTotalLiquidStakedResponse(): QueryTotalLiquidStakedResponse {
  return {
    tokens: ""
  };
}
export const QueryTotalLiquidStakedResponse = {
  typeUrl: "/cosmos.staking.v1beta1.QueryTotalLiquidStakedResponse",
  encode(message: QueryTotalLiquidStakedResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tokens !== "") {
      writer.uint32(10).string(message.tokens);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalLiquidStakedResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalLiquidStakedResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokens = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryTotalLiquidStakedResponse>): QueryTotalLiquidStakedResponse {
    const message = createBaseQueryTotalLiquidStakedResponse();
    message.tokens = object.tokens ?? "";
    return message;
  },
  fromAmino(object: QueryTotalLiquidStakedResponseAmino): QueryTotalLiquidStakedResponse {
    const message = createBaseQueryTotalLiquidStakedResponse();
    if (object.tokens !== undefined && object.tokens !== null) {
      message.tokens = object.tokens;
    }
    return message;
  },
  toAmino(message: QueryTotalLiquidStakedResponse): QueryTotalLiquidStakedResponseAmino {
    const obj: any = {};
    obj.tokens = message.tokens === "" ? undefined : message.tokens;
    return obj;
  },
  fromAminoMsg(object: QueryTotalLiquidStakedResponseAminoMsg): QueryTotalLiquidStakedResponse {
    return QueryTotalLiquidStakedResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryTotalLiquidStakedResponse): QueryTotalLiquidStakedResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryTotalLiquidStakedResponse",
      value: QueryTotalLiquidStakedResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryTotalLiquidStakedResponseProtoMsg): QueryTotalLiquidStakedResponse {
    return QueryTotalLiquidStakedResponse.decode(message.value);
  },
  toProto(message: QueryTotalLiquidStakedResponse): Uint8Array {
    return QueryTotalLiquidStakedResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTotalLiquidStakedResponse): QueryTotalLiquidStakedResponseProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryTotalLiquidStakedResponse",
      value: QueryTotalLiquidStakedResponse.encode(message).finish()
    };
  }
};
function createBaseQueryTokenizeShareLockInfo(): QueryTokenizeShareLockInfo {
  return {
    address: ""
  };
}
export const QueryTokenizeShareLockInfo = {
  typeUrl: "/cosmos.staking.v1beta1.QueryTokenizeShareLockInfo",
  encode(message: QueryTokenizeShareLockInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTokenizeShareLockInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTokenizeShareLockInfo();
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
  fromPartial(object: Partial<QueryTokenizeShareLockInfo>): QueryTokenizeShareLockInfo {
    const message = createBaseQueryTokenizeShareLockInfo();
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: QueryTokenizeShareLockInfoAmino): QueryTokenizeShareLockInfo {
    const message = createBaseQueryTokenizeShareLockInfo();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: QueryTokenizeShareLockInfo): QueryTokenizeShareLockInfoAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(object: QueryTokenizeShareLockInfoAminoMsg): QueryTokenizeShareLockInfo {
    return QueryTokenizeShareLockInfo.fromAmino(object.value);
  },
  toAminoMsg(message: QueryTokenizeShareLockInfo): QueryTokenizeShareLockInfoAminoMsg {
    return {
      type: "cosmos-sdk/QueryTokenizeShareLockInfo",
      value: QueryTokenizeShareLockInfo.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryTokenizeShareLockInfoProtoMsg): QueryTokenizeShareLockInfo {
    return QueryTokenizeShareLockInfo.decode(message.value);
  },
  toProto(message: QueryTokenizeShareLockInfo): Uint8Array {
    return QueryTokenizeShareLockInfo.encode(message).finish();
  },
  toProtoMsg(message: QueryTokenizeShareLockInfo): QueryTokenizeShareLockInfoProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryTokenizeShareLockInfo",
      value: QueryTokenizeShareLockInfo.encode(message).finish()
    };
  }
};
function createBaseQueryTokenizeShareLockInfoResponse(): QueryTokenizeShareLockInfoResponse {
  return {
    status: "",
    expirationTime: ""
  };
}
export const QueryTokenizeShareLockInfoResponse = {
  typeUrl: "/cosmos.staking.v1beta1.QueryTokenizeShareLockInfoResponse",
  encode(message: QueryTokenizeShareLockInfoResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.status !== "") {
      writer.uint32(10).string(message.status);
    }
    if (message.expirationTime !== "") {
      writer.uint32(18).string(message.expirationTime);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTokenizeShareLockInfoResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTokenizeShareLockInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.status = reader.string();
          break;
        case 2:
          message.expirationTime = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryTokenizeShareLockInfoResponse>): QueryTokenizeShareLockInfoResponse {
    const message = createBaseQueryTokenizeShareLockInfoResponse();
    message.status = object.status ?? "";
    message.expirationTime = object.expirationTime ?? "";
    return message;
  },
  fromAmino(object: QueryTokenizeShareLockInfoResponseAmino): QueryTokenizeShareLockInfoResponse {
    const message = createBaseQueryTokenizeShareLockInfoResponse();
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    if (object.expiration_time !== undefined && object.expiration_time !== null) {
      message.expirationTime = object.expiration_time;
    }
    return message;
  },
  toAmino(message: QueryTokenizeShareLockInfoResponse): QueryTokenizeShareLockInfoResponseAmino {
    const obj: any = {};
    obj.status = message.status === "" ? undefined : message.status;
    obj.expiration_time = message.expirationTime === "" ? undefined : message.expirationTime;
    return obj;
  },
  fromAminoMsg(object: QueryTokenizeShareLockInfoResponseAminoMsg): QueryTokenizeShareLockInfoResponse {
    return QueryTokenizeShareLockInfoResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryTokenizeShareLockInfoResponse): QueryTokenizeShareLockInfoResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryTokenizeShareLockInfoResponse",
      value: QueryTokenizeShareLockInfoResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryTokenizeShareLockInfoResponseProtoMsg): QueryTokenizeShareLockInfoResponse {
    return QueryTokenizeShareLockInfoResponse.decode(message.value);
  },
  toProto(message: QueryTokenizeShareLockInfoResponse): Uint8Array {
    return QueryTokenizeShareLockInfoResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTokenizeShareLockInfoResponse): QueryTokenizeShareLockInfoResponseProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryTokenizeShareLockInfoResponse",
      value: QueryTokenizeShareLockInfoResponse.encode(message).finish()
    };
  }
};