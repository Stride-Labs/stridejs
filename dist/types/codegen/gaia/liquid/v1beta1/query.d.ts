import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { LiquidValidator, LiquidValidatorAmino, LiquidValidatorSDKType, Params, ParamsAmino, ParamsSDKType, TokenizeShareRecord, TokenizeShareRecordAmino, TokenizeShareRecordSDKType, TokenizeShareRecordReward, TokenizeShareRecordRewardAmino, TokenizeShareRecordRewardSDKType } from "./liquid";
import { Coin, CoinAmino, CoinSDKType, DecCoin, DecCoinAmino, DecCoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** QueryLiquidValidatorRequest is the request type for the Query/LiquidValidator RPC method. */
export interface QueryLiquidValidatorRequest {
    validatorAddr: string;
}
export interface QueryLiquidValidatorRequestProtoMsg {
    typeUrl: "/gaia.liquid.v1beta1.QueryLiquidValidatorRequest";
    value: Uint8Array;
}
/**
 * QueryLiquidValidatorRequest is the request type for the Query/LiquidValidator RPC method.
 * @name QueryLiquidValidatorRequestAmino
 * @package gaia.liquid.v1beta1
 * @see proto type: gaia.liquid.v1beta1.QueryLiquidValidatorRequest
 */
export interface QueryLiquidValidatorRequestAmino {
    validator_addr?: string;
}
export interface QueryLiquidValidatorRequestAminoMsg {
    type: "/gaia.liquid.v1beta1.QueryLiquidValidatorRequest";
    value: QueryLiquidValidatorRequestAmino;
}
/** QueryLiquidValidatorRequest is the request type for the Query/LiquidValidator RPC method. */
export interface QueryLiquidValidatorRequestSDKType {
    validator_addr: string;
}
/** QueryLiquidValidatorResponse is the response type for the Query/LiquidValidator RPC method. */
export interface QueryLiquidValidatorResponse {
    liquidValidator: LiquidValidator;
}
export interface QueryLiquidValidatorResponseProtoMsg {
    typeUrl: "/gaia.liquid.v1beta1.QueryLiquidValidatorResponse";
    value: Uint8Array;
}
/**
 * QueryLiquidValidatorResponse is the response type for the Query/LiquidValidator RPC method.
 * @name QueryLiquidValidatorResponseAmino
 * @package gaia.liquid.v1beta1
 * @see proto type: gaia.liquid.v1beta1.QueryLiquidValidatorResponse
 */
export interface QueryLiquidValidatorResponseAmino {
    liquid_validator: LiquidValidatorAmino;
}
export interface QueryLiquidValidatorResponseAminoMsg {
    type: "/gaia.liquid.v1beta1.QueryLiquidValidatorResponse";
    value: QueryLiquidValidatorResponseAmino;
}
/** QueryLiquidValidatorResponse is the response type for the Query/LiquidValidator RPC method. */
export interface QueryLiquidValidatorResponseSDKType {
    liquid_validator: LiquidValidatorSDKType;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
export interface QueryParamsRequestProtoMsg {
    typeUrl: "/gaia.liquid.v1beta1.QueryParamsRequest";
    value: Uint8Array;
}
/**
 * QueryParamsRequest is request type for the Query/Params RPC method.
 * @name QueryParamsRequestAmino
 * @package gaia.liquid.v1beta1
 * @see proto type: gaia.liquid.v1beta1.QueryParamsRequest
 */
export interface QueryParamsRequestAmino {
}
export interface QueryParamsRequestAminoMsg {
    type: "/gaia.liquid.v1beta1.QueryParamsRequest";
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
    typeUrl: "/gaia.liquid.v1beta1.QueryParamsResponse";
    value: Uint8Array;
}
/**
 * QueryParamsResponse is response type for the Query/Params RPC method.
 * @name QueryParamsResponseAmino
 * @package gaia.liquid.v1beta1
 * @see proto type: gaia.liquid.v1beta1.QueryParamsResponse
 */
export interface QueryParamsResponseAmino {
    /**
     * params holds all the parameters of this module.
     */
    params: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
    type: "/gaia.liquid.v1beta1.QueryParamsResponse";
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
    typeUrl: "/gaia.liquid.v1beta1.QueryTokenizeShareRecordByIdRequest";
    value: Uint8Array;
}
/**
 * QueryTokenizeShareRecordByIdRequest is request type for the
 * Query/QueryTokenizeShareRecordById RPC method.
 * @name QueryTokenizeShareRecordByIdRequestAmino
 * @package gaia.liquid.v1beta1
 * @see proto type: gaia.liquid.v1beta1.QueryTokenizeShareRecordByIdRequest
 */
export interface QueryTokenizeShareRecordByIdRequestAmino {
    id?: string;
}
export interface QueryTokenizeShareRecordByIdRequestAminoMsg {
    type: "/gaia.liquid.v1beta1.QueryTokenizeShareRecordByIdRequest";
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
    typeUrl: "/gaia.liquid.v1beta1.QueryTokenizeShareRecordByIdResponse";
    value: Uint8Array;
}
/**
 * QueryTokenizeShareRecordByIdRequest is response type for the
 * Query/QueryTokenizeShareRecordById RPC method.
 * @name QueryTokenizeShareRecordByIdResponseAmino
 * @package gaia.liquid.v1beta1
 * @see proto type: gaia.liquid.v1beta1.QueryTokenizeShareRecordByIdResponse
 */
export interface QueryTokenizeShareRecordByIdResponseAmino {
    record?: TokenizeShareRecordAmino;
}
export interface QueryTokenizeShareRecordByIdResponseAminoMsg {
    type: "/gaia.liquid.v1beta1.QueryTokenizeShareRecordByIdResponse";
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
    typeUrl: "/gaia.liquid.v1beta1.QueryTokenizeShareRecordByDenomRequest";
    value: Uint8Array;
}
/**
 * QueryTokenizeShareRecordByDenomRequest is request type for the
 * Query/QueryTokenizeShareRecordByDenom RPC method.
 * @name QueryTokenizeShareRecordByDenomRequestAmino
 * @package gaia.liquid.v1beta1
 * @see proto type: gaia.liquid.v1beta1.QueryTokenizeShareRecordByDenomRequest
 */
export interface QueryTokenizeShareRecordByDenomRequestAmino {
    denom?: string;
}
export interface QueryTokenizeShareRecordByDenomRequestAminoMsg {
    type: "/gaia.liquid.v1beta1.QueryTokenizeShareRecordByDenomRequest";
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
    typeUrl: "/gaia.liquid.v1beta1.QueryTokenizeShareRecordByDenomResponse";
    value: Uint8Array;
}
/**
 * QueryTokenizeShareRecordByDenomResponse is response type for the
 * Query/QueryTokenizeShareRecordByDenom RPC method.
 * @name QueryTokenizeShareRecordByDenomResponseAmino
 * @package gaia.liquid.v1beta1
 * @see proto type: gaia.liquid.v1beta1.QueryTokenizeShareRecordByDenomResponse
 */
export interface QueryTokenizeShareRecordByDenomResponseAmino {
    record?: TokenizeShareRecordAmino;
}
export interface QueryTokenizeShareRecordByDenomResponseAminoMsg {
    type: "/gaia.liquid.v1beta1.QueryTokenizeShareRecordByDenomResponse";
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
    typeUrl: "/gaia.liquid.v1beta1.QueryTokenizeShareRecordsOwnedRequest";
    value: Uint8Array;
}
/**
 * QueryTokenizeShareRecordsOwnedRequest is request type for the
 * Query/QueryTokenizeShareRecordsOwned RPC method.
 * @name QueryTokenizeShareRecordsOwnedRequestAmino
 * @package gaia.liquid.v1beta1
 * @see proto type: gaia.liquid.v1beta1.QueryTokenizeShareRecordsOwnedRequest
 */
export interface QueryTokenizeShareRecordsOwnedRequestAmino {
    owner?: string;
}
export interface QueryTokenizeShareRecordsOwnedRequestAminoMsg {
    type: "/gaia.liquid.v1beta1.QueryTokenizeShareRecordsOwnedRequest";
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
    typeUrl: "/gaia.liquid.v1beta1.QueryTokenizeShareRecordsOwnedResponse";
    value: Uint8Array;
}
/**
 * QueryTokenizeShareRecordsOwnedResponse is response type for the
 * Query/QueryTokenizeShareRecordsOwned RPC method.
 * @name QueryTokenizeShareRecordsOwnedResponseAmino
 * @package gaia.liquid.v1beta1
 * @see proto type: gaia.liquid.v1beta1.QueryTokenizeShareRecordsOwnedResponse
 */
export interface QueryTokenizeShareRecordsOwnedResponseAmino {
    records?: TokenizeShareRecordAmino[];
}
export interface QueryTokenizeShareRecordsOwnedResponseAminoMsg {
    type: "/gaia.liquid.v1beta1.QueryTokenizeShareRecordsOwnedResponse";
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
    typeUrl: "/gaia.liquid.v1beta1.QueryAllTokenizeShareRecordsRequest";
    value: Uint8Array;
}
/**
 * QueryAllTokenizeShareRecordsRequest is request type for the
 * Query/QueryAllTokenizeShareRecords RPC method.
 * @name QueryAllTokenizeShareRecordsRequestAmino
 * @package gaia.liquid.v1beta1
 * @see proto type: gaia.liquid.v1beta1.QueryAllTokenizeShareRecordsRequest
 */
export interface QueryAllTokenizeShareRecordsRequestAmino {
    /**
     * pagination defines an optional pagination for the request.
     */
    pagination?: PageRequestAmino;
}
export interface QueryAllTokenizeShareRecordsRequestAminoMsg {
    type: "/gaia.liquid.v1beta1.QueryAllTokenizeShareRecordsRequest";
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
    typeUrl: "/gaia.liquid.v1beta1.QueryAllTokenizeShareRecordsResponse";
    value: Uint8Array;
}
/**
 * QueryAllTokenizeShareRecordsResponse is response type for the
 * Query/QueryAllTokenizeShareRecords RPC method.
 * @name QueryAllTokenizeShareRecordsResponseAmino
 * @package gaia.liquid.v1beta1
 * @see proto type: gaia.liquid.v1beta1.QueryAllTokenizeShareRecordsResponse
 */
export interface QueryAllTokenizeShareRecordsResponseAmino {
    records?: TokenizeShareRecordAmino[];
    /**
     * pagination defines the pagination in the response.
     */
    pagination?: PageResponseAmino;
}
export interface QueryAllTokenizeShareRecordsResponseAminoMsg {
    type: "/gaia.liquid.v1beta1.QueryAllTokenizeShareRecordsResponse";
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
export interface QueryLastTokenizeShareRecordIdRequest {
}
export interface QueryLastTokenizeShareRecordIdRequestProtoMsg {
    typeUrl: "/gaia.liquid.v1beta1.QueryLastTokenizeShareRecordIdRequest";
    value: Uint8Array;
}
/**
 * QueryLastTokenizeShareRecordIdRequest is request type for the
 * Query/QueryLastTokenizeShareRecordId RPC method.
 * @name QueryLastTokenizeShareRecordIdRequestAmino
 * @package gaia.liquid.v1beta1
 * @see proto type: gaia.liquid.v1beta1.QueryLastTokenizeShareRecordIdRequest
 */
export interface QueryLastTokenizeShareRecordIdRequestAmino {
}
export interface QueryLastTokenizeShareRecordIdRequestAminoMsg {
    type: "/gaia.liquid.v1beta1.QueryLastTokenizeShareRecordIdRequest";
    value: QueryLastTokenizeShareRecordIdRequestAmino;
}
/**
 * QueryLastTokenizeShareRecordIdRequest is request type for the
 * Query/QueryLastTokenizeShareRecordId RPC method.
 */
export interface QueryLastTokenizeShareRecordIdRequestSDKType {
}
/**
 * QueryLastTokenizeShareRecordIdResponse is response type for the
 * Query/QueryLastTokenizeShareRecordId RPC method.
 */
export interface QueryLastTokenizeShareRecordIdResponse {
    id: bigint;
}
export interface QueryLastTokenizeShareRecordIdResponseProtoMsg {
    typeUrl: "/gaia.liquid.v1beta1.QueryLastTokenizeShareRecordIdResponse";
    value: Uint8Array;
}
/**
 * QueryLastTokenizeShareRecordIdResponse is response type for the
 * Query/QueryLastTokenizeShareRecordId RPC method.
 * @name QueryLastTokenizeShareRecordIdResponseAmino
 * @package gaia.liquid.v1beta1
 * @see proto type: gaia.liquid.v1beta1.QueryLastTokenizeShareRecordIdResponse
 */
export interface QueryLastTokenizeShareRecordIdResponseAmino {
    id?: string;
}
export interface QueryLastTokenizeShareRecordIdResponseAminoMsg {
    type: "/gaia.liquid.v1beta1.QueryLastTokenizeShareRecordIdResponse";
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
export interface QueryTotalTokenizeSharedAssetsRequest {
}
export interface QueryTotalTokenizeSharedAssetsRequestProtoMsg {
    typeUrl: "/gaia.liquid.v1beta1.QueryTotalTokenizeSharedAssetsRequest";
    value: Uint8Array;
}
/**
 * QueryTotalTokenizeSharedAssetsRequest is request type for the
 * Query/QueryTotalTokenizeSharedAssets RPC method.
 * @name QueryTotalTokenizeSharedAssetsRequestAmino
 * @package gaia.liquid.v1beta1
 * @see proto type: gaia.liquid.v1beta1.QueryTotalTokenizeSharedAssetsRequest
 */
export interface QueryTotalTokenizeSharedAssetsRequestAmino {
}
export interface QueryTotalTokenizeSharedAssetsRequestAminoMsg {
    type: "/gaia.liquid.v1beta1.QueryTotalTokenizeSharedAssetsRequest";
    value: QueryTotalTokenizeSharedAssetsRequestAmino;
}
/**
 * QueryTotalTokenizeSharedAssetsRequest is request type for the
 * Query/QueryTotalTokenizeSharedAssets RPC method.
 */
export interface QueryTotalTokenizeSharedAssetsRequestSDKType {
}
/**
 * QueryTotalTokenizeSharedAssetsResponse is response type for the
 * Query/QueryTotalTokenizeSharedAssets RPC method.
 */
export interface QueryTotalTokenizeSharedAssetsResponse {
    value: Coin;
}
export interface QueryTotalTokenizeSharedAssetsResponseProtoMsg {
    typeUrl: "/gaia.liquid.v1beta1.QueryTotalTokenizeSharedAssetsResponse";
    value: Uint8Array;
}
/**
 * QueryTotalTokenizeSharedAssetsResponse is response type for the
 * Query/QueryTotalTokenizeSharedAssets RPC method.
 * @name QueryTotalTokenizeSharedAssetsResponseAmino
 * @package gaia.liquid.v1beta1
 * @see proto type: gaia.liquid.v1beta1.QueryTotalTokenizeSharedAssetsResponse
 */
export interface QueryTotalTokenizeSharedAssetsResponseAmino {
    value?: CoinAmino;
}
export interface QueryTotalTokenizeSharedAssetsResponseAminoMsg {
    type: "/gaia.liquid.v1beta1.QueryTotalTokenizeSharedAssetsResponse";
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
export interface QueryTotalLiquidStaked {
}
export interface QueryTotalLiquidStakedProtoMsg {
    typeUrl: "/gaia.liquid.v1beta1.QueryTotalLiquidStaked";
    value: Uint8Array;
}
/**
 * QueryTotalLiquidStakedRequest is request type for the
 * Query/QueryQueryTotalLiquidStaked RPC method.
 * @name QueryTotalLiquidStakedAmino
 * @package gaia.liquid.v1beta1
 * @see proto type: gaia.liquid.v1beta1.QueryTotalLiquidStaked
 */
export interface QueryTotalLiquidStakedAmino {
}
export interface QueryTotalLiquidStakedAminoMsg {
    type: "/gaia.liquid.v1beta1.QueryTotalLiquidStaked";
    value: QueryTotalLiquidStakedAmino;
}
/**
 * QueryTotalLiquidStakedRequest is request type for the
 * Query/QueryQueryTotalLiquidStaked RPC method.
 */
export interface QueryTotalLiquidStakedSDKType {
}
/**
 * QueryTotalLiquidStakedResponse is response type for the
 * Query/QueryQueryTotalLiquidStaked RPC method.
 */
export interface QueryTotalLiquidStakedResponse {
    tokens: string;
}
export interface QueryTotalLiquidStakedResponseProtoMsg {
    typeUrl: "/gaia.liquid.v1beta1.QueryTotalLiquidStakedResponse";
    value: Uint8Array;
}
/**
 * QueryTotalLiquidStakedResponse is response type for the
 * Query/QueryQueryTotalLiquidStaked RPC method.
 * @name QueryTotalLiquidStakedResponseAmino
 * @package gaia.liquid.v1beta1
 * @see proto type: gaia.liquid.v1beta1.QueryTotalLiquidStakedResponse
 */
export interface QueryTotalLiquidStakedResponseAmino {
    tokens?: string;
}
export interface QueryTotalLiquidStakedResponseAminoMsg {
    type: "/gaia.liquid.v1beta1.QueryTotalLiquidStakedResponse";
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
    typeUrl: "/gaia.liquid.v1beta1.QueryTokenizeShareLockInfo";
    value: Uint8Array;
}
/**
 * QueryTokenizeShareLockInfo queries the tokenize share lock information
 * associated with given account
 * @name QueryTokenizeShareLockInfoAmino
 * @package gaia.liquid.v1beta1
 * @see proto type: gaia.liquid.v1beta1.QueryTokenizeShareLockInfo
 */
export interface QueryTokenizeShareLockInfoAmino {
    address?: string;
}
export interface QueryTokenizeShareLockInfoAminoMsg {
    type: "/gaia.liquid.v1beta1.QueryTokenizeShareLockInfo";
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
    typeUrl: "/gaia.liquid.v1beta1.QueryTokenizeShareLockInfoResponse";
    value: Uint8Array;
}
/**
 * QueryTokenizeShareLockInfoResponse is the response from the
 * QueryTokenizeShareLockInfo query
 * @name QueryTokenizeShareLockInfoResponseAmino
 * @package gaia.liquid.v1beta1
 * @see proto type: gaia.liquid.v1beta1.QueryTokenizeShareLockInfoResponse
 */
export interface QueryTokenizeShareLockInfoResponseAmino {
    status?: string;
    expiration_time?: string;
}
export interface QueryTokenizeShareLockInfoResponseAminoMsg {
    type: "/gaia.liquid.v1beta1.QueryTokenizeShareLockInfoResponse";
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
/**
 * QueryTokenizeShareRecordRewardRequest is the request type for the
 * Query/TokenizeShareRecordReward RPC method.
 */
export interface QueryTokenizeShareRecordRewardRequest {
    ownerAddress: string;
}
export interface QueryTokenizeShareRecordRewardRequestProtoMsg {
    typeUrl: "/gaia.liquid.v1beta1.QueryTokenizeShareRecordRewardRequest";
    value: Uint8Array;
}
/**
 * QueryTokenizeShareRecordRewardRequest is the request type for the
 * Query/TokenizeShareRecordReward RPC method.
 * @name QueryTokenizeShareRecordRewardRequestAmino
 * @package gaia.liquid.v1beta1
 * @see proto type: gaia.liquid.v1beta1.QueryTokenizeShareRecordRewardRequest
 */
export interface QueryTokenizeShareRecordRewardRequestAmino {
    owner_address?: string;
}
export interface QueryTokenizeShareRecordRewardRequestAminoMsg {
    type: "/gaia.liquid.v1beta1.QueryTokenizeShareRecordRewardRequest";
    value: QueryTokenizeShareRecordRewardRequestAmino;
}
/**
 * QueryTokenizeShareRecordRewardRequest is the request type for the
 * Query/TokenizeShareRecordReward RPC method.
 */
export interface QueryTokenizeShareRecordRewardRequestSDKType {
    owner_address: string;
}
/**
 * QueryTokenizeShareRecordRewardResponse is the response type for the
 * Query/TokenizeShareRecordReward RPC method.
 */
export interface QueryTokenizeShareRecordRewardResponse {
    /** rewards defines all the rewards accrued by a delegator. */
    rewards: TokenizeShareRecordReward[];
    /** total defines the sum of all the rewards. */
    total: DecCoin[];
}
export interface QueryTokenizeShareRecordRewardResponseProtoMsg {
    typeUrl: "/gaia.liquid.v1beta1.QueryTokenizeShareRecordRewardResponse";
    value: Uint8Array;
}
/**
 * QueryTokenizeShareRecordRewardResponse is the response type for the
 * Query/TokenizeShareRecordReward RPC method.
 * @name QueryTokenizeShareRecordRewardResponseAmino
 * @package gaia.liquid.v1beta1
 * @see proto type: gaia.liquid.v1beta1.QueryTokenizeShareRecordRewardResponse
 */
export interface QueryTokenizeShareRecordRewardResponseAmino {
    /**
     * rewards defines all the rewards accrued by a delegator.
     */
    rewards?: TokenizeShareRecordRewardAmino[];
    /**
     * total defines the sum of all the rewards.
     */
    total?: DecCoinAmino[];
}
export interface QueryTokenizeShareRecordRewardResponseAminoMsg {
    type: "/gaia.liquid.v1beta1.QueryTokenizeShareRecordRewardResponse";
    value: QueryTokenizeShareRecordRewardResponseAmino;
}
/**
 * QueryTokenizeShareRecordRewardResponse is the response type for the
 * Query/TokenizeShareRecordReward RPC method.
 */
export interface QueryTokenizeShareRecordRewardResponseSDKType {
    rewards: TokenizeShareRecordRewardSDKType[];
    total: DecCoinSDKType[];
}
export declare const QueryLiquidValidatorRequest: {
    typeUrl: string;
    encode(message: QueryLiquidValidatorRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryLiquidValidatorRequest;
    fromPartial(object: Partial<QueryLiquidValidatorRequest>): QueryLiquidValidatorRequest;
    fromAmino(object: QueryLiquidValidatorRequestAmino): QueryLiquidValidatorRequest;
    toAmino(message: QueryLiquidValidatorRequest): QueryLiquidValidatorRequestAmino;
    fromAminoMsg(object: QueryLiquidValidatorRequestAminoMsg): QueryLiquidValidatorRequest;
    fromProtoMsg(message: QueryLiquidValidatorRequestProtoMsg): QueryLiquidValidatorRequest;
    toProto(message: QueryLiquidValidatorRequest): Uint8Array;
    toProtoMsg(message: QueryLiquidValidatorRequest): QueryLiquidValidatorRequestProtoMsg;
};
export declare const QueryLiquidValidatorResponse: {
    typeUrl: string;
    encode(message: QueryLiquidValidatorResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryLiquidValidatorResponse;
    fromPartial(object: Partial<QueryLiquidValidatorResponse>): QueryLiquidValidatorResponse;
    fromAmino(object: QueryLiquidValidatorResponseAmino): QueryLiquidValidatorResponse;
    toAmino(message: QueryLiquidValidatorResponse): QueryLiquidValidatorResponseAmino;
    fromAminoMsg(object: QueryLiquidValidatorResponseAminoMsg): QueryLiquidValidatorResponse;
    fromProtoMsg(message: QueryLiquidValidatorResponseProtoMsg): QueryLiquidValidatorResponse;
    toProto(message: QueryLiquidValidatorResponse): Uint8Array;
    toProtoMsg(message: QueryLiquidValidatorResponse): QueryLiquidValidatorResponseProtoMsg;
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
export declare const QueryTokenizeShareRecordByIdRequest: {
    typeUrl: string;
    encode(message: QueryTokenizeShareRecordByIdRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryTokenizeShareRecordByIdRequest;
    fromPartial(object: Partial<QueryTokenizeShareRecordByIdRequest>): QueryTokenizeShareRecordByIdRequest;
    fromAmino(object: QueryTokenizeShareRecordByIdRequestAmino): QueryTokenizeShareRecordByIdRequest;
    toAmino(message: QueryTokenizeShareRecordByIdRequest): QueryTokenizeShareRecordByIdRequestAmino;
    fromAminoMsg(object: QueryTokenizeShareRecordByIdRequestAminoMsg): QueryTokenizeShareRecordByIdRequest;
    fromProtoMsg(message: QueryTokenizeShareRecordByIdRequestProtoMsg): QueryTokenizeShareRecordByIdRequest;
    toProto(message: QueryTokenizeShareRecordByIdRequest): Uint8Array;
    toProtoMsg(message: QueryTokenizeShareRecordByIdRequest): QueryTokenizeShareRecordByIdRequestProtoMsg;
};
export declare const QueryTokenizeShareRecordByIdResponse: {
    typeUrl: string;
    encode(message: QueryTokenizeShareRecordByIdResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryTokenizeShareRecordByIdResponse;
    fromPartial(object: Partial<QueryTokenizeShareRecordByIdResponse>): QueryTokenizeShareRecordByIdResponse;
    fromAmino(object: QueryTokenizeShareRecordByIdResponseAmino): QueryTokenizeShareRecordByIdResponse;
    toAmino(message: QueryTokenizeShareRecordByIdResponse): QueryTokenizeShareRecordByIdResponseAmino;
    fromAminoMsg(object: QueryTokenizeShareRecordByIdResponseAminoMsg): QueryTokenizeShareRecordByIdResponse;
    fromProtoMsg(message: QueryTokenizeShareRecordByIdResponseProtoMsg): QueryTokenizeShareRecordByIdResponse;
    toProto(message: QueryTokenizeShareRecordByIdResponse): Uint8Array;
    toProtoMsg(message: QueryTokenizeShareRecordByIdResponse): QueryTokenizeShareRecordByIdResponseProtoMsg;
};
export declare const QueryTokenizeShareRecordByDenomRequest: {
    typeUrl: string;
    encode(message: QueryTokenizeShareRecordByDenomRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryTokenizeShareRecordByDenomRequest;
    fromPartial(object: Partial<QueryTokenizeShareRecordByDenomRequest>): QueryTokenizeShareRecordByDenomRequest;
    fromAmino(object: QueryTokenizeShareRecordByDenomRequestAmino): QueryTokenizeShareRecordByDenomRequest;
    toAmino(message: QueryTokenizeShareRecordByDenomRequest): QueryTokenizeShareRecordByDenomRequestAmino;
    fromAminoMsg(object: QueryTokenizeShareRecordByDenomRequestAminoMsg): QueryTokenizeShareRecordByDenomRequest;
    fromProtoMsg(message: QueryTokenizeShareRecordByDenomRequestProtoMsg): QueryTokenizeShareRecordByDenomRequest;
    toProto(message: QueryTokenizeShareRecordByDenomRequest): Uint8Array;
    toProtoMsg(message: QueryTokenizeShareRecordByDenomRequest): QueryTokenizeShareRecordByDenomRequestProtoMsg;
};
export declare const QueryTokenizeShareRecordByDenomResponse: {
    typeUrl: string;
    encode(message: QueryTokenizeShareRecordByDenomResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryTokenizeShareRecordByDenomResponse;
    fromPartial(object: Partial<QueryTokenizeShareRecordByDenomResponse>): QueryTokenizeShareRecordByDenomResponse;
    fromAmino(object: QueryTokenizeShareRecordByDenomResponseAmino): QueryTokenizeShareRecordByDenomResponse;
    toAmino(message: QueryTokenizeShareRecordByDenomResponse): QueryTokenizeShareRecordByDenomResponseAmino;
    fromAminoMsg(object: QueryTokenizeShareRecordByDenomResponseAminoMsg): QueryTokenizeShareRecordByDenomResponse;
    fromProtoMsg(message: QueryTokenizeShareRecordByDenomResponseProtoMsg): QueryTokenizeShareRecordByDenomResponse;
    toProto(message: QueryTokenizeShareRecordByDenomResponse): Uint8Array;
    toProtoMsg(message: QueryTokenizeShareRecordByDenomResponse): QueryTokenizeShareRecordByDenomResponseProtoMsg;
};
export declare const QueryTokenizeShareRecordsOwnedRequest: {
    typeUrl: string;
    encode(message: QueryTokenizeShareRecordsOwnedRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryTokenizeShareRecordsOwnedRequest;
    fromPartial(object: Partial<QueryTokenizeShareRecordsOwnedRequest>): QueryTokenizeShareRecordsOwnedRequest;
    fromAmino(object: QueryTokenizeShareRecordsOwnedRequestAmino): QueryTokenizeShareRecordsOwnedRequest;
    toAmino(message: QueryTokenizeShareRecordsOwnedRequest): QueryTokenizeShareRecordsOwnedRequestAmino;
    fromAminoMsg(object: QueryTokenizeShareRecordsOwnedRequestAminoMsg): QueryTokenizeShareRecordsOwnedRequest;
    fromProtoMsg(message: QueryTokenizeShareRecordsOwnedRequestProtoMsg): QueryTokenizeShareRecordsOwnedRequest;
    toProto(message: QueryTokenizeShareRecordsOwnedRequest): Uint8Array;
    toProtoMsg(message: QueryTokenizeShareRecordsOwnedRequest): QueryTokenizeShareRecordsOwnedRequestProtoMsg;
};
export declare const QueryTokenizeShareRecordsOwnedResponse: {
    typeUrl: string;
    encode(message: QueryTokenizeShareRecordsOwnedResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryTokenizeShareRecordsOwnedResponse;
    fromPartial(object: Partial<QueryTokenizeShareRecordsOwnedResponse>): QueryTokenizeShareRecordsOwnedResponse;
    fromAmino(object: QueryTokenizeShareRecordsOwnedResponseAmino): QueryTokenizeShareRecordsOwnedResponse;
    toAmino(message: QueryTokenizeShareRecordsOwnedResponse): QueryTokenizeShareRecordsOwnedResponseAmino;
    fromAminoMsg(object: QueryTokenizeShareRecordsOwnedResponseAminoMsg): QueryTokenizeShareRecordsOwnedResponse;
    fromProtoMsg(message: QueryTokenizeShareRecordsOwnedResponseProtoMsg): QueryTokenizeShareRecordsOwnedResponse;
    toProto(message: QueryTokenizeShareRecordsOwnedResponse): Uint8Array;
    toProtoMsg(message: QueryTokenizeShareRecordsOwnedResponse): QueryTokenizeShareRecordsOwnedResponseProtoMsg;
};
export declare const QueryAllTokenizeShareRecordsRequest: {
    typeUrl: string;
    encode(message: QueryAllTokenizeShareRecordsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAllTokenizeShareRecordsRequest;
    fromPartial(object: Partial<QueryAllTokenizeShareRecordsRequest>): QueryAllTokenizeShareRecordsRequest;
    fromAmino(object: QueryAllTokenizeShareRecordsRequestAmino): QueryAllTokenizeShareRecordsRequest;
    toAmino(message: QueryAllTokenizeShareRecordsRequest): QueryAllTokenizeShareRecordsRequestAmino;
    fromAminoMsg(object: QueryAllTokenizeShareRecordsRequestAminoMsg): QueryAllTokenizeShareRecordsRequest;
    fromProtoMsg(message: QueryAllTokenizeShareRecordsRequestProtoMsg): QueryAllTokenizeShareRecordsRequest;
    toProto(message: QueryAllTokenizeShareRecordsRequest): Uint8Array;
    toProtoMsg(message: QueryAllTokenizeShareRecordsRequest): QueryAllTokenizeShareRecordsRequestProtoMsg;
};
export declare const QueryAllTokenizeShareRecordsResponse: {
    typeUrl: string;
    encode(message: QueryAllTokenizeShareRecordsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAllTokenizeShareRecordsResponse;
    fromPartial(object: Partial<QueryAllTokenizeShareRecordsResponse>): QueryAllTokenizeShareRecordsResponse;
    fromAmino(object: QueryAllTokenizeShareRecordsResponseAmino): QueryAllTokenizeShareRecordsResponse;
    toAmino(message: QueryAllTokenizeShareRecordsResponse): QueryAllTokenizeShareRecordsResponseAmino;
    fromAminoMsg(object: QueryAllTokenizeShareRecordsResponseAminoMsg): QueryAllTokenizeShareRecordsResponse;
    fromProtoMsg(message: QueryAllTokenizeShareRecordsResponseProtoMsg): QueryAllTokenizeShareRecordsResponse;
    toProto(message: QueryAllTokenizeShareRecordsResponse): Uint8Array;
    toProtoMsg(message: QueryAllTokenizeShareRecordsResponse): QueryAllTokenizeShareRecordsResponseProtoMsg;
};
export declare const QueryLastTokenizeShareRecordIdRequest: {
    typeUrl: string;
    encode(_: QueryLastTokenizeShareRecordIdRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryLastTokenizeShareRecordIdRequest;
    fromPartial(_: Partial<QueryLastTokenizeShareRecordIdRequest>): QueryLastTokenizeShareRecordIdRequest;
    fromAmino(_: QueryLastTokenizeShareRecordIdRequestAmino): QueryLastTokenizeShareRecordIdRequest;
    toAmino(_: QueryLastTokenizeShareRecordIdRequest): QueryLastTokenizeShareRecordIdRequestAmino;
    fromAminoMsg(object: QueryLastTokenizeShareRecordIdRequestAminoMsg): QueryLastTokenizeShareRecordIdRequest;
    fromProtoMsg(message: QueryLastTokenizeShareRecordIdRequestProtoMsg): QueryLastTokenizeShareRecordIdRequest;
    toProto(message: QueryLastTokenizeShareRecordIdRequest): Uint8Array;
    toProtoMsg(message: QueryLastTokenizeShareRecordIdRequest): QueryLastTokenizeShareRecordIdRequestProtoMsg;
};
export declare const QueryLastTokenizeShareRecordIdResponse: {
    typeUrl: string;
    encode(message: QueryLastTokenizeShareRecordIdResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryLastTokenizeShareRecordIdResponse;
    fromPartial(object: Partial<QueryLastTokenizeShareRecordIdResponse>): QueryLastTokenizeShareRecordIdResponse;
    fromAmino(object: QueryLastTokenizeShareRecordIdResponseAmino): QueryLastTokenizeShareRecordIdResponse;
    toAmino(message: QueryLastTokenizeShareRecordIdResponse): QueryLastTokenizeShareRecordIdResponseAmino;
    fromAminoMsg(object: QueryLastTokenizeShareRecordIdResponseAminoMsg): QueryLastTokenizeShareRecordIdResponse;
    fromProtoMsg(message: QueryLastTokenizeShareRecordIdResponseProtoMsg): QueryLastTokenizeShareRecordIdResponse;
    toProto(message: QueryLastTokenizeShareRecordIdResponse): Uint8Array;
    toProtoMsg(message: QueryLastTokenizeShareRecordIdResponse): QueryLastTokenizeShareRecordIdResponseProtoMsg;
};
export declare const QueryTotalTokenizeSharedAssetsRequest: {
    typeUrl: string;
    encode(_: QueryTotalTokenizeSharedAssetsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalTokenizeSharedAssetsRequest;
    fromPartial(_: Partial<QueryTotalTokenizeSharedAssetsRequest>): QueryTotalTokenizeSharedAssetsRequest;
    fromAmino(_: QueryTotalTokenizeSharedAssetsRequestAmino): QueryTotalTokenizeSharedAssetsRequest;
    toAmino(_: QueryTotalTokenizeSharedAssetsRequest): QueryTotalTokenizeSharedAssetsRequestAmino;
    fromAminoMsg(object: QueryTotalTokenizeSharedAssetsRequestAminoMsg): QueryTotalTokenizeSharedAssetsRequest;
    fromProtoMsg(message: QueryTotalTokenizeSharedAssetsRequestProtoMsg): QueryTotalTokenizeSharedAssetsRequest;
    toProto(message: QueryTotalTokenizeSharedAssetsRequest): Uint8Array;
    toProtoMsg(message: QueryTotalTokenizeSharedAssetsRequest): QueryTotalTokenizeSharedAssetsRequestProtoMsg;
};
export declare const QueryTotalTokenizeSharedAssetsResponse: {
    typeUrl: string;
    encode(message: QueryTotalTokenizeSharedAssetsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalTokenizeSharedAssetsResponse;
    fromPartial(object: Partial<QueryTotalTokenizeSharedAssetsResponse>): QueryTotalTokenizeSharedAssetsResponse;
    fromAmino(object: QueryTotalTokenizeSharedAssetsResponseAmino): QueryTotalTokenizeSharedAssetsResponse;
    toAmino(message: QueryTotalTokenizeSharedAssetsResponse): QueryTotalTokenizeSharedAssetsResponseAmino;
    fromAminoMsg(object: QueryTotalTokenizeSharedAssetsResponseAminoMsg): QueryTotalTokenizeSharedAssetsResponse;
    fromProtoMsg(message: QueryTotalTokenizeSharedAssetsResponseProtoMsg): QueryTotalTokenizeSharedAssetsResponse;
    toProto(message: QueryTotalTokenizeSharedAssetsResponse): Uint8Array;
    toProtoMsg(message: QueryTotalTokenizeSharedAssetsResponse): QueryTotalTokenizeSharedAssetsResponseProtoMsg;
};
export declare const QueryTotalLiquidStaked: {
    typeUrl: string;
    encode(_: QueryTotalLiquidStaked, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalLiquidStaked;
    fromPartial(_: Partial<QueryTotalLiquidStaked>): QueryTotalLiquidStaked;
    fromAmino(_: QueryTotalLiquidStakedAmino): QueryTotalLiquidStaked;
    toAmino(_: QueryTotalLiquidStaked): QueryTotalLiquidStakedAmino;
    fromAminoMsg(object: QueryTotalLiquidStakedAminoMsg): QueryTotalLiquidStaked;
    fromProtoMsg(message: QueryTotalLiquidStakedProtoMsg): QueryTotalLiquidStaked;
    toProto(message: QueryTotalLiquidStaked): Uint8Array;
    toProtoMsg(message: QueryTotalLiquidStaked): QueryTotalLiquidStakedProtoMsg;
};
export declare const QueryTotalLiquidStakedResponse: {
    typeUrl: string;
    encode(message: QueryTotalLiquidStakedResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalLiquidStakedResponse;
    fromPartial(object: Partial<QueryTotalLiquidStakedResponse>): QueryTotalLiquidStakedResponse;
    fromAmino(object: QueryTotalLiquidStakedResponseAmino): QueryTotalLiquidStakedResponse;
    toAmino(message: QueryTotalLiquidStakedResponse): QueryTotalLiquidStakedResponseAmino;
    fromAminoMsg(object: QueryTotalLiquidStakedResponseAminoMsg): QueryTotalLiquidStakedResponse;
    fromProtoMsg(message: QueryTotalLiquidStakedResponseProtoMsg): QueryTotalLiquidStakedResponse;
    toProto(message: QueryTotalLiquidStakedResponse): Uint8Array;
    toProtoMsg(message: QueryTotalLiquidStakedResponse): QueryTotalLiquidStakedResponseProtoMsg;
};
export declare const QueryTokenizeShareLockInfo: {
    typeUrl: string;
    encode(message: QueryTokenizeShareLockInfo, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryTokenizeShareLockInfo;
    fromPartial(object: Partial<QueryTokenizeShareLockInfo>): QueryTokenizeShareLockInfo;
    fromAmino(object: QueryTokenizeShareLockInfoAmino): QueryTokenizeShareLockInfo;
    toAmino(message: QueryTokenizeShareLockInfo): QueryTokenizeShareLockInfoAmino;
    fromAminoMsg(object: QueryTokenizeShareLockInfoAminoMsg): QueryTokenizeShareLockInfo;
    fromProtoMsg(message: QueryTokenizeShareLockInfoProtoMsg): QueryTokenizeShareLockInfo;
    toProto(message: QueryTokenizeShareLockInfo): Uint8Array;
    toProtoMsg(message: QueryTokenizeShareLockInfo): QueryTokenizeShareLockInfoProtoMsg;
};
export declare const QueryTokenizeShareLockInfoResponse: {
    typeUrl: string;
    encode(message: QueryTokenizeShareLockInfoResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryTokenizeShareLockInfoResponse;
    fromPartial(object: Partial<QueryTokenizeShareLockInfoResponse>): QueryTokenizeShareLockInfoResponse;
    fromAmino(object: QueryTokenizeShareLockInfoResponseAmino): QueryTokenizeShareLockInfoResponse;
    toAmino(message: QueryTokenizeShareLockInfoResponse): QueryTokenizeShareLockInfoResponseAmino;
    fromAminoMsg(object: QueryTokenizeShareLockInfoResponseAminoMsg): QueryTokenizeShareLockInfoResponse;
    fromProtoMsg(message: QueryTokenizeShareLockInfoResponseProtoMsg): QueryTokenizeShareLockInfoResponse;
    toProto(message: QueryTokenizeShareLockInfoResponse): Uint8Array;
    toProtoMsg(message: QueryTokenizeShareLockInfoResponse): QueryTokenizeShareLockInfoResponseProtoMsg;
};
export declare const QueryTokenizeShareRecordRewardRequest: {
    typeUrl: string;
    encode(message: QueryTokenizeShareRecordRewardRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryTokenizeShareRecordRewardRequest;
    fromPartial(object: Partial<QueryTokenizeShareRecordRewardRequest>): QueryTokenizeShareRecordRewardRequest;
    fromAmino(object: QueryTokenizeShareRecordRewardRequestAmino): QueryTokenizeShareRecordRewardRequest;
    toAmino(message: QueryTokenizeShareRecordRewardRequest): QueryTokenizeShareRecordRewardRequestAmino;
    fromAminoMsg(object: QueryTokenizeShareRecordRewardRequestAminoMsg): QueryTokenizeShareRecordRewardRequest;
    fromProtoMsg(message: QueryTokenizeShareRecordRewardRequestProtoMsg): QueryTokenizeShareRecordRewardRequest;
    toProto(message: QueryTokenizeShareRecordRewardRequest): Uint8Array;
    toProtoMsg(message: QueryTokenizeShareRecordRewardRequest): QueryTokenizeShareRecordRewardRequestProtoMsg;
};
export declare const QueryTokenizeShareRecordRewardResponse: {
    typeUrl: string;
    encode(message: QueryTokenizeShareRecordRewardResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryTokenizeShareRecordRewardResponse;
    fromPartial(object: Partial<QueryTokenizeShareRecordRewardResponse>): QueryTokenizeShareRecordRewardResponse;
    fromAmino(object: QueryTokenizeShareRecordRewardResponseAmino): QueryTokenizeShareRecordRewardResponse;
    toAmino(message: QueryTokenizeShareRecordRewardResponse): QueryTokenizeShareRecordRewardResponseAmino;
    fromAminoMsg(object: QueryTokenizeShareRecordRewardResponseAminoMsg): QueryTokenizeShareRecordRewardResponse;
    fromProtoMsg(message: QueryTokenizeShareRecordRewardResponseProtoMsg): QueryTokenizeShareRecordRewardResponse;
    toProto(message: QueryTokenizeShareRecordRewardResponse): Uint8Array;
    toProtoMsg(message: QueryTokenizeShareRecordRewardResponse): QueryTokenizeShareRecordRewardResponseProtoMsg;
};
