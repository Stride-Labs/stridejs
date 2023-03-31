import { Action, ActionSDKType, ClaimRecord, ClaimRecordSDKType } from "./claim";
import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { Params, ParamsSDKType } from "./params";
import { Period, PeriodSDKType } from "../vesting/vesting";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
export interface ClaimStatus {
    airdropIdentifier: string;
    claimed: boolean;
}
export interface ClaimStatusSDKType {
    airdrop_identifier: string;
    claimed: boolean;
}
export interface QueryClaimStatusRequest {
    address: string;
}
export interface QueryClaimStatusRequestSDKType {
    address: string;
}
export interface QueryClaimStatusResponse {
    claimStatus: ClaimStatus[];
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
export interface ClaimMetadataSDKType {
    airdrop_identifier: string;
    current_round: string;
    current_round_start: Date;
    current_round_end: Date;
}
export interface QueryClaimMetadataRequest {
}
export interface QueryClaimMetadataRequestSDKType {
}
export interface QueryClaimMetadataResponse {
    claimMetadata: ClaimMetadata[];
}
export interface QueryClaimMetadataResponseSDKType {
    claim_metadata: ClaimMetadataSDKType[];
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryDistributorAccountBalanceRequest {
    airdropIdentifier?: string;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryDistributorAccountBalanceRequestSDKType {
    airdrop_identifier?: string;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryDistributorAccountBalanceResponse {
    /** params defines the parameters of the module. */
    distributorAccountBalance: Coin[];
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryDistributorAccountBalanceResponseSDKType {
    /** params defines the parameters of the module. */
    distributor_account_balance: CoinSDKType[];
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params defines the parameters of the module. */
    params: Params;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
    /** params defines the parameters of the module. */
    params: ParamsSDKType;
}
export interface QueryClaimRecordRequest {
    airdropIdentifier?: string;
    address: string;
}
export interface QueryClaimRecordRequestSDKType {
    airdrop_identifier?: string;
    address: string;
}
export interface QueryClaimRecordResponse {
    claimRecord: ClaimRecord;
}
export interface QueryClaimRecordResponseSDKType {
    claim_record: ClaimRecordSDKType;
}
export interface QueryClaimableForActionRequest {
    airdropIdentifier?: string;
    address: string;
    action: Action;
}
export interface QueryClaimableForActionRequestSDKType {
    airdrop_identifier?: string;
    address: string;
    action: ActionSDKType;
}
export interface QueryClaimableForActionResponse {
    coins: Coin[];
}
export interface QueryClaimableForActionResponseSDKType {
    coins: CoinSDKType[];
}
export interface QueryTotalClaimableRequest {
    airdropIdentifier?: string;
    address: string;
    includeClaimed?: boolean;
}
export interface QueryTotalClaimableRequestSDKType {
    airdrop_identifier?: string;
    address: string;
    include_claimed?: boolean;
}
export interface QueryTotalClaimableResponse {
    coins: Coin[];
}
export interface QueryTotalClaimableResponseSDKType {
    coins: CoinSDKType[];
}
export interface QueryUserVestingsRequest {
    address: string;
}
export interface QueryUserVestingsRequestSDKType {
    address: string;
}
export interface QueryUserVestingsResponse {
    spendableCoins: Coin[];
    periods: Period[];
}
export interface QueryUserVestingsResponseSDKType {
    spendable_coins: CoinSDKType[];
    periods: PeriodSDKType[];
}
export declare const ClaimStatus: {
    encode(message: ClaimStatus, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ClaimStatus;
    fromPartial(object: DeepPartial<ClaimStatus>): ClaimStatus;
};
export declare const QueryClaimStatusRequest: {
    encode(message: QueryClaimStatusRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryClaimStatusRequest;
    fromPartial(object: DeepPartial<QueryClaimStatusRequest>): QueryClaimStatusRequest;
};
export declare const QueryClaimStatusResponse: {
    encode(message: QueryClaimStatusResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryClaimStatusResponse;
    fromPartial(object: DeepPartial<QueryClaimStatusResponse>): QueryClaimStatusResponse;
};
export declare const ClaimMetadata: {
    encode(message: ClaimMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ClaimMetadata;
    fromPartial(object: DeepPartial<ClaimMetadata>): ClaimMetadata;
};
export declare const QueryClaimMetadataRequest: {
    encode(_: QueryClaimMetadataRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryClaimMetadataRequest;
    fromPartial(_: DeepPartial<QueryClaimMetadataRequest>): QueryClaimMetadataRequest;
};
export declare const QueryClaimMetadataResponse: {
    encode(message: QueryClaimMetadataResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryClaimMetadataResponse;
    fromPartial(object: DeepPartial<QueryClaimMetadataResponse>): QueryClaimMetadataResponse;
};
export declare const QueryDistributorAccountBalanceRequest: {
    encode(message: QueryDistributorAccountBalanceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDistributorAccountBalanceRequest;
    fromPartial(object: DeepPartial<QueryDistributorAccountBalanceRequest>): QueryDistributorAccountBalanceRequest;
};
export declare const QueryDistributorAccountBalanceResponse: {
    encode(message: QueryDistributorAccountBalanceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDistributorAccountBalanceResponse;
    fromPartial(object: DeepPartial<QueryDistributorAccountBalanceResponse>): QueryDistributorAccountBalanceResponse;
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
export declare const QueryClaimRecordRequest: {
    encode(message: QueryClaimRecordRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryClaimRecordRequest;
    fromPartial(object: DeepPartial<QueryClaimRecordRequest>): QueryClaimRecordRequest;
};
export declare const QueryClaimRecordResponse: {
    encode(message: QueryClaimRecordResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryClaimRecordResponse;
    fromPartial(object: DeepPartial<QueryClaimRecordResponse>): QueryClaimRecordResponse;
};
export declare const QueryClaimableForActionRequest: {
    encode(message: QueryClaimableForActionRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryClaimableForActionRequest;
    fromPartial(object: DeepPartial<QueryClaimableForActionRequest>): QueryClaimableForActionRequest;
};
export declare const QueryClaimableForActionResponse: {
    encode(message: QueryClaimableForActionResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryClaimableForActionResponse;
    fromPartial(object: DeepPartial<QueryClaimableForActionResponse>): QueryClaimableForActionResponse;
};
export declare const QueryTotalClaimableRequest: {
    encode(message: QueryTotalClaimableRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalClaimableRequest;
    fromPartial(object: DeepPartial<QueryTotalClaimableRequest>): QueryTotalClaimableRequest;
};
export declare const QueryTotalClaimableResponse: {
    encode(message: QueryTotalClaimableResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalClaimableResponse;
    fromPartial(object: DeepPartial<QueryTotalClaimableResponse>): QueryTotalClaimableResponse;
};
export declare const QueryUserVestingsRequest: {
    encode(message: QueryUserVestingsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryUserVestingsRequest;
    fromPartial(object: DeepPartial<QueryUserVestingsRequest>): QueryUserVestingsRequest;
};
export declare const QueryUserVestingsResponse: {
    encode(message: QueryUserVestingsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryUserVestingsResponse;
    fromPartial(object: DeepPartial<QueryUserVestingsResponse>): QueryUserVestingsResponse;
};
