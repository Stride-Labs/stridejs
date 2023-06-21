export declare const createRPCQueryClient: ({ rpcEndpoint }: {
    rpcEndpoint: string;
}) => Promise<{
    stride: {
        autopilot: {
            params(request?: import("./autopilot/query").QueryParamsRequest): Promise<import("./autopilot/query").QueryParamsResponse>;
        };
        claim: {
            distributorAccountBalance(request: import("./claim/query").QueryDistributorAccountBalanceRequest): Promise<import("./claim/query").QueryDistributorAccountBalanceResponse>;
            params(request?: import("./claim/query").QueryParamsRequest): Promise<import("./claim/query").QueryParamsResponse>;
            claimRecord(request: import("./claim/query").QueryClaimRecordRequest): Promise<import("./claim/query").QueryClaimRecordResponse>;
            claimableForAction(request: import("./claim/query").QueryClaimableForActionRequest): Promise<import("./claim/query").QueryClaimableForActionResponse>;
            totalClaimable(request: import("./claim/query").QueryTotalClaimableRequest): Promise<import("./claim/query").QueryTotalClaimableResponse>;
            userVestings(request: import("./claim/query").QueryUserVestingsRequest): Promise<import("./claim/query").QueryUserVestingsResponse>;
            claimStatus(request: import("./claim/query").QueryClaimStatusRequest): Promise<import("./claim/query").QueryClaimStatusResponse>;
            claimMetadata(request?: import("./claim/query").QueryClaimMetadataRequest): Promise<import("./claim/query").QueryClaimMetadataResponse>;
        };
        epochs: {
            epochInfos(request?: import("./epochs/query").QueryEpochsInfoRequest): Promise<import("./epochs/query").QueryEpochsInfoResponse>;
            currentEpoch(request: import("./epochs/query").QueryCurrentEpochRequest): Promise<import("./epochs/query").QueryCurrentEpochResponse>;
            epochInfo(request: import("./epochs/query").QueryEpochInfoRequest): Promise<import("./epochs/query").QueryEpochInfoResponse>;
        };
        icacallbacks: {
            params(request?: import("./icacallbacks/query").QueryParamsRequest): Promise<import("./icacallbacks/query").QueryParamsResponse>;
            callbackData(request: import("./icacallbacks/query").QueryGetCallbackDataRequest): Promise<import("./icacallbacks/query").QueryGetCallbackDataResponse>;
            callbackDataAll(request?: import("./icacallbacks/query").QueryAllCallbackDataRequest): Promise<import("./icacallbacks/query").QueryAllCallbackDataResponse>;
        };
        mint: {
            v1beta1: {
                params(request?: import("./mint/v1beta1/query").QueryParamsRequest): Promise<import("./mint/v1beta1/query").QueryParamsResponse>;
                epochProvisions(request?: import("./mint/v1beta1/query").QueryEpochProvisionsRequest): Promise<import("./mint/v1beta1/query").QueryEpochProvisionsResponse>;
            };
        };
        ratelimit: {
            allRateLimits(request?: import("./ratelimit/query").QueryAllRateLimitsRequest): Promise<import("./ratelimit/query").QueryAllRateLimitsResponse>;
            rateLimit(request: import("./ratelimit/query").QueryRateLimitRequest): Promise<import("./ratelimit/query").QueryRateLimitResponse>;
            rateLimitsByChainId(request: import("./ratelimit/query").QueryRateLimitsByChainIdRequest): Promise<import("./ratelimit/query").QueryRateLimitsByChainIdResponse>;
            rateLimitsByChannelId(request: import("./ratelimit/query").QueryRateLimitsByChannelIdRequest): Promise<import("./ratelimit/query").QueryRateLimitsByChannelIdResponse>;
            allBlacklistedDenoms(request?: import("./ratelimit/query").QueryAllBlacklistedDenomsRequest): Promise<import("./ratelimit/query").QueryAllBlacklistedDenomsResponse>;
            allWhitelistedAddresses(request?: import("./ratelimit/query").QueryAllWhitelistedAddressesRequest): Promise<import("./ratelimit/query").QueryAllWhitelistedAddressesResponse>;
        };
        records: {
            params(request?: import("./records/query").QueryParamsRequest): Promise<import("./records/query").QueryParamsResponse>;
            userRedemptionRecord(request: import("./records/query").QueryGetUserRedemptionRecordRequest): Promise<import("./records/query").QueryGetUserRedemptionRecordResponse>;
            userRedemptionRecordAll(request?: import("./records/query").QueryAllUserRedemptionRecordRequest): Promise<import("./records/query").QueryAllUserRedemptionRecordResponse>;
            userRedemptionRecordForUser(request: import("./records/query").QueryAllUserRedemptionRecordForUserRequest): Promise<import("./records/query").QueryAllUserRedemptionRecordForUserResponse>;
            epochUnbondingRecord(request: import("./records/query").QueryGetEpochUnbondingRecordRequest): Promise<import("./records/query").QueryGetEpochUnbondingRecordResponse>;
            epochUnbondingRecordAll(request?: import("./records/query").QueryAllEpochUnbondingRecordRequest): Promise<import("./records/query").QueryAllEpochUnbondingRecordResponse>;
            depositRecord(request: import("./records/query").QueryGetDepositRecordRequest): Promise<import("./records/query").QueryGetDepositRecordResponse>;
            depositRecordAll(request?: import("./records/query").QueryAllDepositRecordRequest): Promise<import("./records/query").QueryAllDepositRecordResponse>;
            depositRecordByHost(request: import("./records/query").QueryDepositRecordByHostRequest): Promise<import("./records/query").QueryDepositRecordByHostResponse>;
        };
        stakeibc: {
            params(request?: import("./stakeibc/query").QueryParamsRequest): Promise<import("./stakeibc/query").QueryParamsResponse>;
            validators(request: import("./stakeibc/query").QueryGetValidatorsRequest): Promise<import("./stakeibc/query").QueryGetValidatorsResponse>;
            hostZone(request: import("./stakeibc/query").QueryGetHostZoneRequest): Promise<import("./stakeibc/query").QueryGetHostZoneResponse>;
            hostZoneAll(request?: import("./stakeibc/query").QueryAllHostZoneRequest): Promise<import("./stakeibc/query").QueryAllHostZoneResponse>;
            moduleAddress(request: import("./stakeibc/query").QueryModuleAddressRequest): Promise<import("./stakeibc/query").QueryModuleAddressResponse>;
            interchainAccountFromAddress(request: import("./stakeibc/query").QueryInterchainAccountFromAddressRequest): Promise<import("./stakeibc/query").QueryInterchainAccountFromAddressResponse>;
            epochTracker(request: import("./stakeibc/query").QueryGetEpochTrackerRequest): Promise<import("./stakeibc/query").QueryGetEpochTrackerResponse>;
            epochTrackerAll(request?: import("./stakeibc/query").QueryAllEpochTrackerRequest): Promise<import("./stakeibc/query").QueryAllEpochTrackerResponse>;
            nextPacketSequence(request: import("./stakeibc/query").QueryGetNextPacketSequenceRequest): Promise<import("./stakeibc/query").QueryGetNextPacketSequenceResponse>;
            addressUnbondings(request: import("./stakeibc/query").QueryAddressUnbondings): Promise<import("./stakeibc/query").QueryAddressUnbondingsResponse>;
        };
    };
}>;
