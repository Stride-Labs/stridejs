import { LCDClient } from "@osmonauts/lcd";
import { QueryDistributorAccountBalanceRequest, QueryDistributorAccountBalanceResponseSDKType, QueryParamsRequest, QueryParamsResponseSDKType, QueryClaimRecordRequest, QueryClaimRecordResponseSDKType, QueryClaimableForActionRequest, QueryClaimableForActionResponseSDKType, QueryTotalClaimableRequest, QueryTotalClaimableResponseSDKType, QueryUserVestingsRequest, QueryUserVestingsResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    distributorAccountBalance(params: QueryDistributorAccountBalanceRequest): Promise<QueryDistributorAccountBalanceResponseSDKType>;
    params(_params?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
    claimRecord(params: QueryClaimRecordRequest): Promise<QueryClaimRecordResponseSDKType>;
    claimableForAction(params: QueryClaimableForActionRequest): Promise<QueryClaimableForActionResponseSDKType>;
    totalClaimable(params: QueryTotalClaimableRequest): Promise<QueryTotalClaimableResponseSDKType>;
    userVestings(params: QueryUserVestingsRequest): Promise<QueryUserVestingsResponseSDKType>;
}
