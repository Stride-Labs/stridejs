import { Rpc } from "../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryDistributorAccountBalanceRequest, QueryDistributorAccountBalanceResponse, QueryParamsRequest, QueryParamsResponse, QueryClaimRecordRequest, QueryClaimRecordResponse, QueryClaimableForActionRequest, QueryClaimableForActionResponse, QueryTotalClaimableRequest, QueryTotalClaimableResponse, QueryUserVestingsRequest, QueryUserVestingsResponse, QueryClaimStatusRequest, QueryClaimStatusResponse, QueryClaimMetadataRequest, QueryClaimMetadataResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
    distributorAccountBalance(request: QueryDistributorAccountBalanceRequest): Promise<QueryDistributorAccountBalanceResponse>;
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    claimRecord(request: QueryClaimRecordRequest): Promise<QueryClaimRecordResponse>;
    claimableForAction(request: QueryClaimableForActionRequest): Promise<QueryClaimableForActionResponse>;
    totalClaimable(request: QueryTotalClaimableRequest): Promise<QueryTotalClaimableResponse>;
    userVestings(request: QueryUserVestingsRequest): Promise<QueryUserVestingsResponse>;
    claimStatus(request: QueryClaimStatusRequest): Promise<QueryClaimStatusResponse>;
    claimMetadata(request?: QueryClaimMetadataRequest): Promise<QueryClaimMetadataResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    distributorAccountBalance(request: QueryDistributorAccountBalanceRequest): Promise<QueryDistributorAccountBalanceResponse>;
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    claimRecord(request: QueryClaimRecordRequest): Promise<QueryClaimRecordResponse>;
    claimableForAction(request: QueryClaimableForActionRequest): Promise<QueryClaimableForActionResponse>;
    totalClaimable(request: QueryTotalClaimableRequest): Promise<QueryTotalClaimableResponse>;
    userVestings(request: QueryUserVestingsRequest): Promise<QueryUserVestingsResponse>;
    claimStatus(request: QueryClaimStatusRequest): Promise<QueryClaimStatusResponse>;
    claimMetadata(request?: QueryClaimMetadataRequest): Promise<QueryClaimMetadataResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    distributorAccountBalance(request: QueryDistributorAccountBalanceRequest): Promise<QueryDistributorAccountBalanceResponse>;
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    claimRecord(request: QueryClaimRecordRequest): Promise<QueryClaimRecordResponse>;
    claimableForAction(request: QueryClaimableForActionRequest): Promise<QueryClaimableForActionResponse>;
    totalClaimable(request: QueryTotalClaimableRequest): Promise<QueryTotalClaimableResponse>;
    userVestings(request: QueryUserVestingsRequest): Promise<QueryUserVestingsResponse>;
    claimStatus(request: QueryClaimStatusRequest): Promise<QueryClaimStatusResponse>;
    claimMetadata(request?: QueryClaimMetadataRequest): Promise<QueryClaimMetadataResponse>;
};
