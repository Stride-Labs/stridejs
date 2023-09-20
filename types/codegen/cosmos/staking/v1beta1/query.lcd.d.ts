import { LCDClient } from "@osmonauts/lcd";
import { QueryValidatorsRequest, QueryValidatorsResponseSDKType, QueryValidatorRequest, QueryValidatorResponseSDKType, QueryValidatorDelegationsRequest, QueryValidatorDelegationsResponseSDKType, QueryValidatorUnbondingDelegationsRequest, QueryValidatorUnbondingDelegationsResponseSDKType, QueryDelegationRequest, QueryDelegationResponseSDKType, QueryUnbondingDelegationRequest, QueryUnbondingDelegationResponseSDKType, QueryDelegatorDelegationsRequest, QueryDelegatorDelegationsResponseSDKType, QueryDelegatorUnbondingDelegationsRequest, QueryDelegatorUnbondingDelegationsResponseSDKType, QueryRedelegationsRequest, QueryRedelegationsResponseSDKType, QueryDelegatorValidatorsRequest, QueryDelegatorValidatorsResponseSDKType, QueryDelegatorValidatorRequest, QueryDelegatorValidatorResponseSDKType, QueryHistoricalInfoRequest, QueryHistoricalInfoResponseSDKType, QueryPoolRequest, QueryPoolResponseSDKType, QueryParamsRequest, QueryParamsResponseSDKType, QueryTokenizeShareRecordByIdRequest, QueryTokenizeShareRecordByIdResponseSDKType, QueryTokenizeShareRecordByDenomRequest, QueryTokenizeShareRecordByDenomResponseSDKType, QueryTokenizeShareRecordsOwnedRequest, QueryTokenizeShareRecordsOwnedResponseSDKType, QueryAllTokenizeShareRecordsRequest, QueryAllTokenizeShareRecordsResponseSDKType, QueryLastTokenizeShareRecordIdRequest, QueryLastTokenizeShareRecordIdResponseSDKType, QueryTotalTokenizeSharedAssetsRequest, QueryTotalTokenizeSharedAssetsResponseSDKType, QueryTotalLiquidStaked, QueryTotalLiquidStakedResponseSDKType, QueryTokenizeShareLockInfo, QueryTokenizeShareLockInfoResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    validators(params: QueryValidatorsRequest): Promise<QueryValidatorsResponseSDKType>;
    validator(params: QueryValidatorRequest): Promise<QueryValidatorResponseSDKType>;
    validatorDelegations(params: QueryValidatorDelegationsRequest): Promise<QueryValidatorDelegationsResponseSDKType>;
    validatorUnbondingDelegations(params: QueryValidatorUnbondingDelegationsRequest): Promise<QueryValidatorUnbondingDelegationsResponseSDKType>;
    delegation(params: QueryDelegationRequest): Promise<QueryDelegationResponseSDKType>;
    unbondingDelegation(params: QueryUnbondingDelegationRequest): Promise<QueryUnbondingDelegationResponseSDKType>;
    delegatorDelegations(params: QueryDelegatorDelegationsRequest): Promise<QueryDelegatorDelegationsResponseSDKType>;
    delegatorUnbondingDelegations(params: QueryDelegatorUnbondingDelegationsRequest): Promise<QueryDelegatorUnbondingDelegationsResponseSDKType>;
    redelegations(params: QueryRedelegationsRequest): Promise<QueryRedelegationsResponseSDKType>;
    delegatorValidators(params: QueryDelegatorValidatorsRequest): Promise<QueryDelegatorValidatorsResponseSDKType>;
    delegatorValidator(params: QueryDelegatorValidatorRequest): Promise<QueryDelegatorValidatorResponseSDKType>;
    historicalInfo(params: QueryHistoricalInfoRequest): Promise<QueryHistoricalInfoResponseSDKType>;
    pool(_params?: QueryPoolRequest): Promise<QueryPoolResponseSDKType>;
    params(_params?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
    tokenizeShareRecordById(params: QueryTokenizeShareRecordByIdRequest): Promise<QueryTokenizeShareRecordByIdResponseSDKType>;
    tokenizeShareRecordByDenom(params: QueryTokenizeShareRecordByDenomRequest): Promise<QueryTokenizeShareRecordByDenomResponseSDKType>;
    tokenizeShareRecordsOwned(params: QueryTokenizeShareRecordsOwnedRequest): Promise<QueryTokenizeShareRecordsOwnedResponseSDKType>;
    allTokenizeShareRecords(params?: QueryAllTokenizeShareRecordsRequest): Promise<QueryAllTokenizeShareRecordsResponseSDKType>;
    lastTokenizeShareRecordId(_params?: QueryLastTokenizeShareRecordIdRequest): Promise<QueryLastTokenizeShareRecordIdResponseSDKType>;
    totalTokenizeSharedAssets(_params?: QueryTotalTokenizeSharedAssetsRequest): Promise<QueryTotalTokenizeSharedAssetsResponseSDKType>;
    totalLiquidStaked(_params?: QueryTotalLiquidStaked): Promise<QueryTotalLiquidStakedResponseSDKType>;
    tokenizeShareLockInfo(params: QueryTokenizeShareLockInfo): Promise<QueryTokenizeShareLockInfoResponseSDKType>;
}
