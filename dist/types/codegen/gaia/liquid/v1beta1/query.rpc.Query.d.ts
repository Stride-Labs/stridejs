import { TxRpc } from "../../../types";
import { QueryClient } from "@cosmjs/stargate";
import { QueryLiquidValidatorRequest, QueryLiquidValidatorResponse, QueryTokenizeShareRecordByIdRequest, QueryTokenizeShareRecordByIdResponse, QueryTokenizeShareRecordByDenomRequest, QueryTokenizeShareRecordByDenomResponse, QueryTokenizeShareRecordsOwnedRequest, QueryTokenizeShareRecordsOwnedResponse, QueryAllTokenizeShareRecordsRequest, QueryAllTokenizeShareRecordsResponse, QueryLastTokenizeShareRecordIdRequest, QueryLastTokenizeShareRecordIdResponse, QueryTotalTokenizeSharedAssetsRequest, QueryTotalTokenizeSharedAssetsResponse, QueryTotalLiquidStaked, QueryTotalLiquidStakedResponse, QueryTokenizeShareLockInfo, QueryTokenizeShareLockInfoResponse, QueryParamsRequest, QueryParamsResponse, QueryTokenizeShareRecordRewardRequest, QueryTokenizeShareRecordRewardResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
    /** Query for an individual liquid validator by validator address */
    liquidValidator(request: QueryLiquidValidatorRequest): Promise<QueryLiquidValidatorResponse>;
    /** Query for individual tokenize share record information by share by id */
    tokenizeShareRecordById(request: QueryTokenizeShareRecordByIdRequest): Promise<QueryTokenizeShareRecordByIdResponse>;
    /** Query for individual tokenize share record information by share denom */
    tokenizeShareRecordByDenom(request: QueryTokenizeShareRecordByDenomRequest): Promise<QueryTokenizeShareRecordByDenomResponse>;
    /** Query tokenize share records by address */
    tokenizeShareRecordsOwned(request: QueryTokenizeShareRecordsOwnedRequest): Promise<QueryTokenizeShareRecordsOwnedResponse>;
    /** Query for all tokenize share records */
    allTokenizeShareRecords(request?: QueryAllTokenizeShareRecordsRequest): Promise<QueryAllTokenizeShareRecordsResponse>;
    /** Query for last tokenize share record id */
    lastTokenizeShareRecordId(request?: QueryLastTokenizeShareRecordIdRequest): Promise<QueryLastTokenizeShareRecordIdResponse>;
    /** Query for total tokenized staked assets */
    totalTokenizeSharedAssets(request?: QueryTotalTokenizeSharedAssetsRequest): Promise<QueryTotalTokenizeSharedAssetsResponse>;
    /**
     * Query for total liquid staked (including tokenized shares or owned by an
     * liquid staking provider)
     */
    totalLiquidStaked(request?: QueryTotalLiquidStaked): Promise<QueryTotalLiquidStakedResponse>;
    /** Query tokenize share locks */
    tokenizeShareLockInfo(request: QueryTokenizeShareLockInfo): Promise<QueryTokenizeShareLockInfoResponse>;
    /** Parameters queries the liquid parameters. */
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** TokenizeShareRecordReward queries the tokenize share record rewards */
    tokenizeShareRecordReward(request: QueryTokenizeShareRecordRewardRequest): Promise<QueryTokenizeShareRecordRewardResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: TxRpc);
    liquidValidator(request: QueryLiquidValidatorRequest): Promise<QueryLiquidValidatorResponse>;
    tokenizeShareRecordById(request: QueryTokenizeShareRecordByIdRequest): Promise<QueryTokenizeShareRecordByIdResponse>;
    tokenizeShareRecordByDenom(request: QueryTokenizeShareRecordByDenomRequest): Promise<QueryTokenizeShareRecordByDenomResponse>;
    tokenizeShareRecordsOwned(request: QueryTokenizeShareRecordsOwnedRequest): Promise<QueryTokenizeShareRecordsOwnedResponse>;
    allTokenizeShareRecords(request?: QueryAllTokenizeShareRecordsRequest): Promise<QueryAllTokenizeShareRecordsResponse>;
    lastTokenizeShareRecordId(request?: QueryLastTokenizeShareRecordIdRequest): Promise<QueryLastTokenizeShareRecordIdResponse>;
    totalTokenizeSharedAssets(request?: QueryTotalTokenizeSharedAssetsRequest): Promise<QueryTotalTokenizeSharedAssetsResponse>;
    totalLiquidStaked(request?: QueryTotalLiquidStaked): Promise<QueryTotalLiquidStakedResponse>;
    tokenizeShareLockInfo(request: QueryTokenizeShareLockInfo): Promise<QueryTokenizeShareLockInfoResponse>;
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    tokenizeShareRecordReward(request: QueryTokenizeShareRecordRewardRequest): Promise<QueryTokenizeShareRecordRewardResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    liquidValidator(request: QueryLiquidValidatorRequest): Promise<QueryLiquidValidatorResponse>;
    tokenizeShareRecordById(request: QueryTokenizeShareRecordByIdRequest): Promise<QueryTokenizeShareRecordByIdResponse>;
    tokenizeShareRecordByDenom(request: QueryTokenizeShareRecordByDenomRequest): Promise<QueryTokenizeShareRecordByDenomResponse>;
    tokenizeShareRecordsOwned(request: QueryTokenizeShareRecordsOwnedRequest): Promise<QueryTokenizeShareRecordsOwnedResponse>;
    allTokenizeShareRecords(request?: QueryAllTokenizeShareRecordsRequest): Promise<QueryAllTokenizeShareRecordsResponse>;
    lastTokenizeShareRecordId(request?: QueryLastTokenizeShareRecordIdRequest): Promise<QueryLastTokenizeShareRecordIdResponse>;
    totalTokenizeSharedAssets(request?: QueryTotalTokenizeSharedAssetsRequest): Promise<QueryTotalTokenizeSharedAssetsResponse>;
    totalLiquidStaked(request?: QueryTotalLiquidStaked): Promise<QueryTotalLiquidStakedResponse>;
    tokenizeShareLockInfo(request: QueryTokenizeShareLockInfo): Promise<QueryTokenizeShareLockInfoResponse>;
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    tokenizeShareRecordReward(request: QueryTokenizeShareRecordRewardRequest): Promise<QueryTokenizeShareRecordRewardResponse>;
};
