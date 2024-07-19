import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryGetUserRedemptionRecordRequest, QueryGetUserRedemptionRecordResponseSDKType, QueryAllUserRedemptionRecordRequest, QueryAllUserRedemptionRecordResponseSDKType, QueryAllUserRedemptionRecordForUserRequest, QueryAllUserRedemptionRecordForUserResponseSDKType, QueryGetEpochUnbondingRecordRequest, QueryGetEpochUnbondingRecordResponseSDKType, QueryAllEpochUnbondingRecordRequest, QueryAllEpochUnbondingRecordResponseSDKType, QueryGetDepositRecordRequest, QueryGetDepositRecordResponseSDKType, QueryAllDepositRecordRequest, QueryAllDepositRecordResponseSDKType, QueryDepositRecordByHostRequest, QueryDepositRecordByHostResponseSDKType, QueryLSMDepositRequest, QueryLSMDepositResponseSDKType, QueryLSMDepositsRequest, QueryLSMDepositsResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    params(_params?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
    userRedemptionRecord(params: QueryGetUserRedemptionRecordRequest): Promise<QueryGetUserRedemptionRecordResponseSDKType>;
    userRedemptionRecordAll(params?: QueryAllUserRedemptionRecordRequest): Promise<QueryAllUserRedemptionRecordResponseSDKType>;
    userRedemptionRecordForUser(params: QueryAllUserRedemptionRecordForUserRequest): Promise<QueryAllUserRedemptionRecordForUserResponseSDKType>;
    epochUnbondingRecord(params: QueryGetEpochUnbondingRecordRequest): Promise<QueryGetEpochUnbondingRecordResponseSDKType>;
    epochUnbondingRecordAll(params?: QueryAllEpochUnbondingRecordRequest): Promise<QueryAllEpochUnbondingRecordResponseSDKType>;
    depositRecord(params: QueryGetDepositRecordRequest): Promise<QueryGetDepositRecordResponseSDKType>;
    depositRecordAll(params?: QueryAllDepositRecordRequest): Promise<QueryAllDepositRecordResponseSDKType>;
    depositRecordByHost(params: QueryDepositRecordByHostRequest): Promise<QueryDepositRecordByHostResponseSDKType>;
    lSMDeposit(params: QueryLSMDepositRequest): Promise<QueryLSMDepositResponseSDKType>;
    lSMDeposits(params: QueryLSMDepositsRequest): Promise<QueryLSMDepositsResponseSDKType>;
}
