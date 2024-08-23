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
    ibc: {
        applications: {
            fee: {
                v1: {
                    incentivizedPackets(request: import("./applications/fee/v1/query").QueryIncentivizedPacketsRequest): Promise<import("./applications/fee/v1/query").QueryIncentivizedPacketsResponse>;
                    incentivizedPacket(request: import("./applications/fee/v1/query").QueryIncentivizedPacketRequest): Promise<import("./applications/fee/v1/query").QueryIncentivizedPacketResponse>;
                    incentivizedPacketsForChannel(request: import("./applications/fee/v1/query").QueryIncentivizedPacketsForChannelRequest): Promise<import("./applications/fee/v1/query").QueryIncentivizedPacketsForChannelResponse>;
                    totalRecvFees(request: import("./applications/fee/v1/query").QueryTotalRecvFeesRequest): Promise<import("./applications/fee/v1/query").QueryTotalRecvFeesResponse>;
                    totalAckFees(request: import("./applications/fee/v1/query").QueryTotalAckFeesRequest): Promise<import("./applications/fee/v1/query").QueryTotalAckFeesResponse>;
                    totalTimeoutFees(request: import("./applications/fee/v1/query").QueryTotalTimeoutFeesRequest): Promise<import("./applications/fee/v1/query").QueryTotalTimeoutFeesResponse>;
                    payee(request: import("./applications/fee/v1/query").QueryPayeeRequest): Promise<import("./applications/fee/v1/query").QueryPayeeResponse>;
                    counterpartyPayee(request: import("./applications/fee/v1/query").QueryCounterpartyPayeeRequest): Promise<import("./applications/fee/v1/query").QueryCounterpartyPayeeResponse>;
                    feeEnabledChannels(request: import("./applications/fee/v1/query").QueryFeeEnabledChannelsRequest): Promise<import("./applications/fee/v1/query").QueryFeeEnabledChannelsResponse>;
                    feeEnabledChannel(request: import("./applications/fee/v1/query").QueryFeeEnabledChannelRequest): Promise<import("./applications/fee/v1/query").QueryFeeEnabledChannelResponse>;
                };
            };
            interchain_accounts: {
                controller: {
                    v1: {
                        interchainAccount(request: import("./applications/interchain_accounts/controller/v1/query").QueryInterchainAccountRequest): Promise<import("./applications/interchain_accounts/controller/v1/query").QueryInterchainAccountResponse>;
                        params(request?: import("./applications/interchain_accounts/controller/v1/query").QueryParamsRequest): Promise<import("./applications/interchain_accounts/controller/v1/query").QueryParamsResponse>;
                    };
                };
                host: {
                    v1: {
                        params(request?: import("./applications/interchain_accounts/host/v1/query").QueryParamsRequest): Promise<import("./applications/interchain_accounts/host/v1/query").QueryParamsResponse>;
                    };
                };
            };
            transfer: {
                v1: {
                    denomTraces(request?: import("./applications/transfer/v1/query").QueryDenomTracesRequest): Promise<import("./applications/transfer/v1/query").QueryDenomTracesResponse>;
                    denomTrace(request: import("./applications/transfer/v1/query").QueryDenomTraceRequest): Promise<import("./applications/transfer/v1/query").QueryDenomTraceResponse>;
                    params(request?: import("./applications/transfer/v1/query").QueryParamsRequest): Promise<import("./applications/transfer/v1/query").QueryParamsResponse>;
                    denomHash(request: import("./applications/transfer/v1/query").QueryDenomHashRequest): Promise<import("./applications/transfer/v1/query").QueryDenomHashResponse>;
                    escrowAddress(request: import("./applications/transfer/v1/query").QueryEscrowAddressRequest): Promise<import("./applications/transfer/v1/query").QueryEscrowAddressResponse>;
                    totalEscrowForDenom(request: import("./applications/transfer/v1/query").QueryTotalEscrowForDenomRequest): Promise<import("./applications/transfer/v1/query").QueryTotalEscrowForDenomResponse>;
                };
            };
        };
        core: {
            channel: {
                v1: {
                    channel(request: import("./core/channel/v1/query").QueryChannelRequest): Promise<import("./core/channel/v1/query").QueryChannelResponse>;
                    channels(request?: import("./core/channel/v1/query").QueryChannelsRequest): Promise<import("./core/channel/v1/query").QueryChannelsResponse>;
                    connectionChannels(request: import("./core/channel/v1/query").QueryConnectionChannelsRequest): Promise<import("./core/channel/v1/query").QueryConnectionChannelsResponse>;
                    channelClientState(request: import("./core/channel/v1/query").QueryChannelClientStateRequest): Promise<import("./core/channel/v1/query").QueryChannelClientStateResponse>;
                    channelConsensusState(request: import("./core/channel/v1/query").QueryChannelConsensusStateRequest): Promise<import("./core/channel/v1/query").QueryChannelConsensusStateResponse>;
                    packetCommitment(request: import("./core/channel/v1/query").QueryPacketCommitmentRequest): Promise<import("./core/channel/v1/query").QueryPacketCommitmentResponse>;
                    packetCommitments(request: import("./core/channel/v1/query").QueryPacketCommitmentsRequest): Promise<import("./core/channel/v1/query").QueryPacketCommitmentsResponse>;
                    packetReceipt(request: import("./core/channel/v1/query").QueryPacketReceiptRequest): Promise<import("./core/channel/v1/query").QueryPacketReceiptResponse>;
                    packetAcknowledgement(request: import("./core/channel/v1/query").QueryPacketAcknowledgementRequest): Promise<import("./core/channel/v1/query").QueryPacketAcknowledgementResponse>;
                    packetAcknowledgements(request: import("./core/channel/v1/query").QueryPacketAcknowledgementsRequest): Promise<import("./core/channel/v1/query").QueryPacketAcknowledgementsResponse>;
                    unreceivedPackets(request: import("./core/channel/v1/query").QueryUnreceivedPacketsRequest): Promise<import("./core/channel/v1/query").QueryUnreceivedPacketsResponse>;
                    unreceivedAcks(request: import("./core/channel/v1/query").QueryUnreceivedAcksRequest): Promise<import("./core/channel/v1/query").QueryUnreceivedAcksResponse>;
                    nextSequenceReceive(request: import("./core/channel/v1/query").QueryNextSequenceReceiveRequest): Promise<import("./core/channel/v1/query").QueryNextSequenceReceiveResponse>;
                };
            };
            client: {
                v1: {
                    clientState(request: import("./core/client/v1/query").QueryClientStateRequest): Promise<import("./core/client/v1/query").QueryClientStateResponse>;
                    clientStates(request?: import("./core/client/v1/query").QueryClientStatesRequest): Promise<import("./core/client/v1/query").QueryClientStatesResponse>;
                    consensusState(request: import("./core/client/v1/query").QueryConsensusStateRequest): Promise<import("./core/client/v1/query").QueryConsensusStateResponse>;
                    consensusStates(request: import("./core/client/v1/query").QueryConsensusStatesRequest): Promise<import("./core/client/v1/query").QueryConsensusStatesResponse>;
                    consensusStateHeights(request: import("./core/client/v1/query").QueryConsensusStateHeightsRequest): Promise<import("./core/client/v1/query").QueryConsensusStateHeightsResponse>;
                    clientStatus(request: import("./core/client/v1/query").QueryClientStatusRequest): Promise<import("./core/client/v1/query").QueryClientStatusResponse>;
                    clientParams(request?: import("./core/client/v1/query").QueryClientParamsRequest): Promise<import("./core/client/v1/query").QueryClientParamsResponse>;
                    upgradedClientState(request?: import("./core/client/v1/query").QueryUpgradedClientStateRequest): Promise<import("./core/client/v1/query").QueryUpgradedClientStateResponse>;
                    upgradedConsensusState(request?: import("./core/client/v1/query").QueryUpgradedConsensusStateRequest): Promise<import("./core/client/v1/query").QueryUpgradedConsensusStateResponse>;
                };
            };
            connection: {
                v1: {
                    connection(request: import("./core/connection/v1/query").QueryConnectionRequest): Promise<import("./core/connection/v1/query").QueryConnectionResponse>;
                    connections(request?: import("./core/connection/v1/query").QueryConnectionsRequest): Promise<import("./core/connection/v1/query").QueryConnectionsResponse>;
                    clientConnections(request: import("./core/connection/v1/query").QueryClientConnectionsRequest): Promise<import("./core/connection/v1/query").QueryClientConnectionsResponse>;
                    connectionClientState(request: import("./core/connection/v1/query").QueryConnectionClientStateRequest): Promise<import("./core/connection/v1/query").QueryConnectionClientStateResponse>;
                    connectionConsensusState(request: import("./core/connection/v1/query").QueryConnectionConsensusStateRequest): Promise<import("./core/connection/v1/query").QueryConnectionConsensusStateResponse>;
                    connectionParams(request?: import("./core/connection/v1/query").QueryConnectionParamsRequest): Promise<import("./core/connection/v1/query").QueryConnectionParamsResponse>;
                };
            };
        };
    };
}>;
