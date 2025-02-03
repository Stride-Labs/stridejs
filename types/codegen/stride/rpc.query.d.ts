import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
export declare const createRPCQueryClient: ({ rpcEndpoint }: {
    rpcEndpoint: string | HttpEndpoint;
}) => Promise<{
    cosmos: {
        auth: {
            v1beta1: {
                accounts(request?: import("../cosmos/auth/v1beta1/query").QueryAccountsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountsResponse>;
                account(request: import("../cosmos/auth/v1beta1/query").QueryAccountRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountResponse>;
                params(request?: import("../cosmos/auth/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryParamsResponse>;
                moduleAccountByName(request: import("../cosmos/auth/v1beta1/query").QueryModuleAccountByNameRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryModuleAccountByNameResponse>;
            };
        };
        authz: {
            v1beta1: {
                grants(request: import("../cosmos/authz/v1beta1/query").QueryGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGrantsResponse>;
                granterGrants(request: import("../cosmos/authz/v1beta1/query").QueryGranterGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGranterGrantsResponse>;
                granteeGrants(request: import("../cosmos/authz/v1beta1/query").QueryGranteeGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGranteeGrantsResponse>;
            };
        };
        bank: {
            v1beta1: {
                balance(request: import("../cosmos/bank/v1beta1/query").QueryBalanceRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryBalanceResponse>;
                allBalances(request: import("../cosmos/bank/v1beta1/query").QueryAllBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryAllBalancesResponse>;
                spendableBalances(request: import("../cosmos/bank/v1beta1/query").QuerySpendableBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySpendableBalancesResponse>;
                totalSupply(request?: import("../cosmos/bank/v1beta1/query").QueryTotalSupplyRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryTotalSupplyResponse>;
                supplyOf(request: import("../cosmos/bank/v1beta1/query").QuerySupplyOfRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySupplyOfResponse>;
                params(request?: import("../cosmos/bank/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryParamsResponse>;
                denomMetadata(request: import("../cosmos/bank/v1beta1/query").QueryDenomMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomMetadataResponse>;
                denomsMetadata(request?: import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataResponse>;
            };
        };
        base: {
            node: {
                v1beta1: {
                    config(request?: import("../cosmos/base/node/v1beta1/query").ConfigRequest): Promise<import("../cosmos/base/node/v1beta1/query").ConfigResponse>;
                };
            };
            tendermint: {
                v1beta1: {
                    getNodeInfo(request?: import("../cosmos/base/tendermint/v1beta1/query").GetNodeInfoRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetNodeInfoResponse>;
                    getSyncing(request?: import("../cosmos/base/tendermint/v1beta1/query").GetSyncingRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetSyncingResponse>;
                    getLatestBlock(request?: import("../cosmos/base/tendermint/v1beta1/query").GetLatestBlockRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetLatestBlockResponse>;
                    getBlockByHeight(request: import("../cosmos/base/tendermint/v1beta1/query").GetBlockByHeightRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetBlockByHeightResponse>;
                    getLatestValidatorSet(request?: import("../cosmos/base/tendermint/v1beta1/query").GetLatestValidatorSetRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetLatestValidatorSetResponse>;
                    getValidatorSetByHeight(request: import("../cosmos/base/tendermint/v1beta1/query").GetValidatorSetByHeightRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetValidatorSetByHeightResponse>;
                };
            };
        };
        distribution: {
            v1beta1: {
                params(request?: import("../cosmos/distribution/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryParamsResponse>;
                validatorOutstandingRewards(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsResponse>;
                validatorCommission(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorCommissionRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorCommissionResponse>;
                validatorSlashes(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorSlashesRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorSlashesResponse>;
                delegationRewards(request: import("../cosmos/distribution/v1beta1/query").QueryDelegationRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegationRewardsResponse>;
                delegationTotalRewards(request: import("../cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsResponse>;
                delegatorValidators(request: import("../cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsResponse>;
                delegatorWithdrawAddress(request: import("../cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressResponse>;
                communityPool(request?: import("../cosmos/distribution/v1beta1/query").QueryCommunityPoolRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryCommunityPoolResponse>;
                tokenizeShareRecordReward(request: import("../cosmos/distribution/v1beta1/query").QueryTokenizeShareRecordRewardRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryTokenizeShareRecordRewardResponse>;
            };
        };
        evidence: {
            v1beta1: {
                evidence(request: import("../cosmos/evidence/v1beta1/query").QueryEvidenceRequest): Promise<import("../cosmos/evidence/v1beta1/query").QueryEvidenceResponse>;
                allEvidence(request?: import("../cosmos/evidence/v1beta1/query").QueryAllEvidenceRequest): Promise<import("../cosmos/evidence/v1beta1/query").QueryAllEvidenceResponse>;
            };
        };
        feegrant: {
            v1beta1: {
                allowance(request: import("../cosmos/feegrant/v1beta1/query").QueryAllowanceRequest): Promise<import("../cosmos/feegrant/v1beta1/query").QueryAllowanceResponse>;
                allowances(request: import("../cosmos/feegrant/v1beta1/query").QueryAllowancesRequest): Promise<import("../cosmos/feegrant/v1beta1/query").QueryAllowancesResponse>;
                allowancesByGranter(request: import("../cosmos/feegrant/v1beta1/query").QueryAllowancesByGranterRequest): Promise<import("../cosmos/feegrant/v1beta1/query").QueryAllowancesByGranterResponse>;
            };
        };
        gov: {
            v1beta1: {
                proposal(request: import("../cosmos/gov/v1beta1/query").QueryProposalRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryProposalResponse>;
                proposals(request: import("../cosmos/gov/v1beta1/query").QueryProposalsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryProposalsResponse>;
                vote(request: import("../cosmos/gov/v1beta1/query").QueryVoteRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryVoteResponse>;
                votes(request: import("../cosmos/gov/v1beta1/query").QueryVotesRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryVotesResponse>;
                params(request: import("../cosmos/gov/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryParamsResponse>;
                deposit(request: import("../cosmos/gov/v1beta1/query").QueryDepositRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryDepositResponse>;
                deposits(request: import("../cosmos/gov/v1beta1/query").QueryDepositsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryDepositsResponse>;
                tallyResult(request: import("../cosmos/gov/v1beta1/query").QueryTallyResultRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryTallyResultResponse>;
            };
        };
        mint: {
            v1beta1: {
                params(request?: import("../cosmos/mint/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryParamsResponse>;
                inflation(request?: import("../cosmos/mint/v1beta1/query").QueryInflationRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryInflationResponse>;
                annualProvisions(request?: import("../cosmos/mint/v1beta1/query").QueryAnnualProvisionsRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryAnnualProvisionsResponse>;
            };
        };
        params: {
            v1beta1: {
                params(request: import("../cosmos/params/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/params/v1beta1/query").QueryParamsResponse>;
            };
        };
        slashing: {
            v1beta1: {
                params(request?: import("../cosmos/slashing/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/slashing/v1beta1/query").QueryParamsResponse>;
                signingInfo(request: import("../cosmos/slashing/v1beta1/query").QuerySigningInfoRequest): Promise<import("../cosmos/slashing/v1beta1/query").QuerySigningInfoResponse>;
                signingInfos(request?: import("../cosmos/slashing/v1beta1/query").QuerySigningInfosRequest): Promise<import("../cosmos/slashing/v1beta1/query").QuerySigningInfosResponse>;
            };
        };
        staking: {
            v1beta1: {
                validators(request: import("../cosmos/staking/v1beta1/query").QueryValidatorsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorsResponse>;
                validator(request: import("../cosmos/staking/v1beta1/query").QueryValidatorRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorResponse>;
                validatorDelegations(request: import("../cosmos/staking/v1beta1/query").QueryValidatorDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorDelegationsResponse>;
                validatorUnbondingDelegations(request: import("../cosmos/staking/v1beta1/query").QueryValidatorUnbondingDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorUnbondingDelegationsResponse>;
                delegation(request: import("../cosmos/staking/v1beta1/query").QueryDelegationRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegationResponse>;
                unbondingDelegation(request: import("../cosmos/staking/v1beta1/query").QueryUnbondingDelegationRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryUnbondingDelegationResponse>;
                delegatorDelegations(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorDelegationsResponse>;
                delegatorUnbondingDelegations(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorUnbondingDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorUnbondingDelegationsResponse>;
                redelegations(request: import("../cosmos/staking/v1beta1/query").QueryRedelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryRedelegationsResponse>;
                delegatorValidators(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorsResponse>;
                delegatorValidator(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorResponse>;
                historicalInfo(request: import("../cosmos/staking/v1beta1/query").QueryHistoricalInfoRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryHistoricalInfoResponse>;
                pool(request?: import("../cosmos/staking/v1beta1/query").QueryPoolRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryPoolResponse>;
                params(request?: import("../cosmos/staking/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryParamsResponse>;
                tokenizeShareRecordById(request: import("../cosmos/staking/v1beta1/query").QueryTokenizeShareRecordByIdRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryTokenizeShareRecordByIdResponse>;
                tokenizeShareRecordByDenom(request: import("../cosmos/staking/v1beta1/query").QueryTokenizeShareRecordByDenomRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryTokenizeShareRecordByDenomResponse>;
                tokenizeShareRecordsOwned(request: import("../cosmos/staking/v1beta1/query").QueryTokenizeShareRecordsOwnedRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryTokenizeShareRecordsOwnedResponse>;
                allTokenizeShareRecords(request?: import("../cosmos/staking/v1beta1/query").QueryAllTokenizeShareRecordsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryAllTokenizeShareRecordsResponse>;
                lastTokenizeShareRecordId(request?: import("../cosmos/staking/v1beta1/query").QueryLastTokenizeShareRecordIdRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryLastTokenizeShareRecordIdResponse>;
                totalTokenizeSharedAssets(request?: import("../cosmos/staking/v1beta1/query").QueryTotalTokenizeSharedAssetsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryTotalTokenizeSharedAssetsResponse>;
                totalLiquidStaked(request?: import("../cosmos/staking/v1beta1/query").QueryTotalLiquidStaked): Promise<import("../cosmos/staking/v1beta1/query").QueryTotalLiquidStakedResponse>;
                tokenizeShareLockInfo(request: import("../cosmos/staking/v1beta1/query").QueryTokenizeShareLockInfo): Promise<import("../cosmos/staking/v1beta1/query").QueryTokenizeShareLockInfoResponse>;
            };
        };
        tx: {
            v1beta1: {
                simulate(request: import("../cosmos/tx/v1beta1/service").SimulateRequest): Promise<import("../cosmos/tx/v1beta1/service").SimulateResponse>;
                getTx(request: import("../cosmos/tx/v1beta1/service").GetTxRequest): Promise<import("../cosmos/tx/v1beta1/service").GetTxResponse>;
                broadcastTx(request: import("../cosmos/tx/v1beta1/service").BroadcastTxRequest): Promise<import("../cosmos/tx/v1beta1/service").BroadcastTxResponse>;
                getTxsEvent(request: import("../cosmos/tx/v1beta1/service").GetTxsEventRequest): Promise<import("../cosmos/tx/v1beta1/service").GetTxsEventResponse>;
                getBlockWithTxs(request: import("../cosmos/tx/v1beta1/service").GetBlockWithTxsRequest): Promise<import("../cosmos/tx/v1beta1/service").GetBlockWithTxsResponse>;
            };
        };
        upgrade: {
            v1beta1: {
                currentPlan(request?: import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanResponse>;
                appliedPlan(request: import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanResponse>;
                upgradedConsensusState(request: import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateResponse>;
                moduleVersions(request: import("../cosmos/upgrade/v1beta1/query").QueryModuleVersionsRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryModuleVersionsResponse>;
            };
        };
    };
    stride: {
        airdrop: {
            airdrop(request: import("./airdrop/query").QueryAirdropRequest): Promise<import("./airdrop/query").QueryAirdropResponse>;
            allAirdrops(request?: import("./airdrop/query").QueryAllAirdropsRequest): Promise<import("./airdrop/query").QueryAllAirdropsResponse>;
            userAllocation(request: import("./airdrop/query").QueryUserAllocationRequest): Promise<import("./airdrop/query").QueryUserAllocationResponse>;
            userAllocations(request: import("./airdrop/query").QueryUserAllocationsRequest): Promise<import("./airdrop/query").QueryUserAllocationsResponse>;
            allAllocations(request: import("./airdrop/query").QueryAllAllocationsRequest): Promise<import("./airdrop/query").QueryAllAllocationsResponse>;
            userSummary(request: import("./airdrop/query").QueryUserSummaryRequest): Promise<import("./airdrop/query").QueryUserSummaryResponse>;
        };
        auction: {
            auction(request: import("./auction/query").QueryAuctionRequest): Promise<import("./auction/query").QueryAuctionResponse>;
            auctions(request?: import("./auction/query").QueryAuctionsRequest): Promise<import("./auction/query").QueryAuctionsResponse>;
        };
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
        icaoracle: {
            oracle(request: import("./icaoracle/query").QueryOracleRequest): Promise<import("./icaoracle/query").QueryOracleResponse>;
            allOracles(request?: import("./icaoracle/query").QueryAllOraclesRequest): Promise<import("./icaoracle/query").QueryAllOraclesResponse>;
            activeOracles(request: import("./icaoracle/query").QueryActiveOraclesRequest): Promise<import("./icaoracle/query").QueryActiveOraclesResponse>;
            metrics(request: import("./icaoracle/query").QueryMetricsRequest): Promise<import("./icaoracle/query").QueryMetricsResponse>;
        };
        icqoracle: {
            tokenPrice(request: import("./icqoracle/query").QueryTokenPriceRequest): Promise<import("./icqoracle/query").QueryTokenPriceResponse>;
            tokenPrices(request?: import("./icqoracle/query").QueryTokenPricesRequest): Promise<import("./icqoracle/query").QueryTokenPricesResponse>;
            params(request?: import("./icqoracle/query").QueryParamsRequest): Promise<import("./icqoracle/query").QueryParamsResponse>;
            tokenPriceForQuoteDenom(request: import("./icqoracle/query").QueryTokenPriceForQuoteDenomRequest): Promise<import("./icqoracle/query").QueryTokenPriceForQuoteDenomResponse>;
        };
        mint: {
            v1beta1: {
                params(request?: import("./mint/v1beta1/query").QueryParamsRequest): Promise<import("./mint/v1beta1/query").QueryParamsResponse>;
                epochProvisions(request?: import("./mint/v1beta1/query").QueryEpochProvisionsRequest): Promise<import("./mint/v1beta1/query").QueryEpochProvisionsResponse>;
            };
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
            lSMDeposit(request: import("./records/query").QueryLSMDepositRequest): Promise<import("./records/query").QueryLSMDepositResponse>;
            lSMDeposits(request: import("./records/query").QueryLSMDepositsRequest): Promise<import("./records/query").QueryLSMDepositsResponse>;
        };
        stakedym: {
            hostZone(request?: import("./stakedym/query").QueryHostZoneRequest): Promise<import("./stakedym/query").QueryHostZoneResponse>;
            delegationRecords(request: import("./stakedym/query").QueryDelegationRecordsRequest): Promise<import("./stakedym/query").QueryDelegationRecordsResponse>;
            unbondingRecords(request: import("./stakedym/query").QueryUnbondingRecordsRequest): Promise<import("./stakedym/query").QueryUnbondingRecordsResponse>;
            redemptionRecord(request: import("./stakedym/query").QueryRedemptionRecordRequest): Promise<import("./stakedym/query").QueryRedemptionRecordResponse>;
            redemptionRecords(request: import("./stakedym/query").QueryRedemptionRecordsRequest): Promise<import("./stakedym/query").QueryRedemptionRecordsResponse>;
            slashRecords(request?: import("./stakedym/query").QuerySlashRecordsRequest): Promise<import("./stakedym/query").QuerySlashRecordsResponse>;
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
            allTradeRoutes(request?: import("./stakeibc/query").QueryAllTradeRoutes): Promise<import("./stakeibc/query").QueryAllTradeRoutesResponse>;
        };
        staketia: {
            hostZone(request?: import("./staketia/query").QueryHostZoneRequest): Promise<import("./staketia/query").QueryHostZoneResponse>;
            delegationRecords(request: import("./staketia/query").QueryDelegationRecordsRequest): Promise<import("./staketia/query").QueryDelegationRecordsResponse>;
            unbondingRecords(request: import("./staketia/query").QueryUnbondingRecordsRequest): Promise<import("./staketia/query").QueryUnbondingRecordsResponse>;
            redemptionRecord(request: import("./staketia/query").QueryRedemptionRecordRequest): Promise<import("./staketia/query").QueryRedemptionRecordResponse>;
            redemptionRecords(request: import("./staketia/query").QueryRedemptionRecordsRequest): Promise<import("./staketia/query").QueryRedemptionRecordsResponse>;
            slashRecords(request?: import("./staketia/query").QuerySlashRecordsRequest): Promise<import("./staketia/query").QuerySlashRecordsResponse>;
        };
        strdburner: {
            strdBurnerAddress(request?: import("./strdburner/query").QueryStrdBurnerAddressRequest): Promise<import("./strdburner/query").QueryStrdBurnerAddressResponse>;
            totalStrdBurned(request?: import("./strdburner/query").QueryTotalStrdBurnedRequest): Promise<import("./strdburner/query").QueryTotalStrdBurnedResponse>;
        };
    };
}>;
