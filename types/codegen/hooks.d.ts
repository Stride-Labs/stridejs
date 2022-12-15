import { ProtobufRpcClient } from "@cosmjs/stargate";
import * as _CosmosAuthV1beta1Queryrpc from "./cosmos/auth/v1beta1/query.rpc.Query";
import * as _CosmosAuthzV1beta1Queryrpc from "./cosmos/authz/v1beta1/query.rpc.Query";
import * as _CosmosBankV1beta1Queryrpc from "./cosmos/bank/v1beta1/query.rpc.Query";
import * as _CosmosBaseTendermintV1beta1Queryrpc from "./cosmos/base/tendermint/v1beta1/query.rpc.Service";
import * as _CosmosDistributionV1beta1Queryrpc from "./cosmos/distribution/v1beta1/query.rpc.Query";
import * as _CosmosEvidenceV1beta1Queryrpc from "./cosmos/evidence/v1beta1/query.rpc.Query";
import * as _CosmosFeegrantV1beta1Queryrpc from "./cosmos/feegrant/v1beta1/query.rpc.Query";
import * as _CosmosGovV1beta1Queryrpc from "./cosmos/gov/v1beta1/query.rpc.Query";
import * as _CosmosMintV1beta1Queryrpc from "./cosmos/mint/v1beta1/query.rpc.Query";
import * as _CosmosParamsV1beta1Queryrpc from "./cosmos/params/v1beta1/query.rpc.Query";
import * as _CosmosSlashingV1beta1Queryrpc from "./cosmos/slashing/v1beta1/query.rpc.Query";
import * as _CosmosStakingV1beta1Queryrpc from "./cosmos/staking/v1beta1/query.rpc.Query";
import * as _CosmosTxV1beta1Servicerpc from "./cosmos/tx/v1beta1/service.rpc.Service";
import * as _CosmosUpgradeV1beta1Queryrpc from "./cosmos/upgrade/v1beta1/query.rpc.Query";
import * as _StrideClaimQueryrpc from "./stride/claim/query.rpc.Query";
import * as _StrideEpochsQueryrpc from "./stride/epochs/query.rpc.Query";
import * as _StrideIcacallbacksQueryrpc from "./stride/icacallbacks/query.rpc.Query";
import * as _StrideMintV1beta1Queryrpc from "./stride/mint/v1beta1/query.rpc.Query";
import * as _StrideRecordsQueryrpc from "./stride/records/query.rpc.Query";
import * as _StrideStakeibcQueryrpc from "./stride/stakeibc/query.rpc.Query";
export declare const createRpcQueryHooks: ({ rpc }: {
    rpc: ProtobufRpcClient | undefined;
}) => {
    cosmos: {
        auth: {
            v1beta1: {
                useAccounts: <TData = import("./cosmos/auth/v1beta1/query").QueryAccountsResponse>({ request, options }: _CosmosAuthV1beta1Queryrpc.UseAccountsQuery<TData>) => any;
                useAccount: <TData_1 = import("./cosmos/auth/v1beta1/query").QueryAccountResponse>({ request, options }: _CosmosAuthV1beta1Queryrpc.UseAccountQuery<TData_1>) => any;
                useParams: <TData_2 = import("./cosmos/auth/v1beta1/query").QueryParamsResponse>({ request, options }: _CosmosAuthV1beta1Queryrpc.UseParamsQuery<TData_2>) => any;
            };
        };
        authz: {
            v1beta1: {
                useGrants: <TData_3 = import("./cosmos/authz/v1beta1/query").QueryGrantsResponse>({ request, options }: _CosmosAuthzV1beta1Queryrpc.UseGrantsQuery<TData_3>) => any;
            };
        };
        bank: {
            v1beta1: {
                useBalance: <TData_4 = import("./cosmos/bank/v1beta1/query").QueryBalanceResponse>({ request, options }: _CosmosBankV1beta1Queryrpc.UseBalanceQuery<TData_4>) => any;
                useAllBalances: <TData_5 = import("./cosmos/bank/v1beta1/query").QueryAllBalancesResponse>({ request, options }: _CosmosBankV1beta1Queryrpc.UseAllBalancesQuery<TData_5>) => any;
                useTotalSupply: <TData_6 = import("./cosmos/bank/v1beta1/query").QueryTotalSupplyResponse>({ request, options }: _CosmosBankV1beta1Queryrpc.UseTotalSupplyQuery<TData_6>) => any;
                useSupplyOf: <TData_7 = import("./cosmos/bank/v1beta1/query").QuerySupplyOfResponse>({ request, options }: _CosmosBankV1beta1Queryrpc.UseSupplyOfQuery<TData_7>) => any;
                useParams: <TData_8 = import("./cosmos/bank/v1beta1/query").QueryParamsResponse>({ request, options }: _CosmosBankV1beta1Queryrpc.UseParamsQuery<TData_8>) => any;
                useDenomMetadata: <TData_9 = import("./cosmos/bank/v1beta1/query").QueryDenomMetadataResponse>({ request, options }: _CosmosBankV1beta1Queryrpc.UseDenomMetadataQuery<TData_9>) => any;
                useDenomsMetadata: <TData_10 = import("./cosmos/bank/v1beta1/query").QueryDenomsMetadataResponse>({ request, options }: _CosmosBankV1beta1Queryrpc.UseDenomsMetadataQuery<TData_10>) => any;
            };
        };
        base: {
            tendermint: {
                v1beta1: {
                    useGetNodeInfo: <TData_11 = import("./cosmos/base/tendermint/v1beta1/query").GetNodeInfoResponse>({ request, options }: _CosmosBaseTendermintV1beta1Queryrpc.UseGetNodeInfoQuery<TData_11>) => any;
                    useGetSyncing: <TData_12 = import("./cosmos/base/tendermint/v1beta1/query").GetSyncingResponse>({ request, options }: _CosmosBaseTendermintV1beta1Queryrpc.UseGetSyncingQuery<TData_12>) => any;
                    useGetLatestBlock: <TData_13 = import("./cosmos/base/tendermint/v1beta1/query").GetLatestBlockResponse>({ request, options }: _CosmosBaseTendermintV1beta1Queryrpc.UseGetLatestBlockQuery<TData_13>) => any;
                    useGetBlockByHeight: <TData_14 = import("./cosmos/base/tendermint/v1beta1/query").GetBlockByHeightResponse>({ request, options }: _CosmosBaseTendermintV1beta1Queryrpc.UseGetBlockByHeightQuery<TData_14>) => any;
                    useGetLatestValidatorSet: <TData_15 = import("./cosmos/base/tendermint/v1beta1/query").GetLatestValidatorSetResponse>({ request, options }: _CosmosBaseTendermintV1beta1Queryrpc.UseGetLatestValidatorSetQuery<TData_15>) => any;
                    useGetValidatorSetByHeight: <TData_16 = import("./cosmos/base/tendermint/v1beta1/query").GetValidatorSetByHeightResponse>({ request, options }: _CosmosBaseTendermintV1beta1Queryrpc.UseGetValidatorSetByHeightQuery<TData_16>) => any;
                };
            };
        };
        distribution: {
            v1beta1: {
                useParams: <TData_17 = import("./cosmos/distribution/v1beta1/query").QueryParamsResponse>({ request, options }: _CosmosDistributionV1beta1Queryrpc.UseParamsQuery<TData_17>) => any;
                useValidatorOutstandingRewards: <TData_18 = import("./cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsResponse>({ request, options }: _CosmosDistributionV1beta1Queryrpc.UseValidatorOutstandingRewardsQuery<TData_18>) => any;
                useValidatorCommission: <TData_19 = import("./cosmos/distribution/v1beta1/query").QueryValidatorCommissionResponse>({ request, options }: _CosmosDistributionV1beta1Queryrpc.UseValidatorCommissionQuery<TData_19>) => any;
                useValidatorSlashes: <TData_20 = import("./cosmos/distribution/v1beta1/query").QueryValidatorSlashesResponse>({ request, options }: _CosmosDistributionV1beta1Queryrpc.UseValidatorSlashesQuery<TData_20>) => any;
                useDelegationRewards: <TData_21 = import("./cosmos/distribution/v1beta1/query").QueryDelegationRewardsResponse>({ request, options }: _CosmosDistributionV1beta1Queryrpc.UseDelegationRewardsQuery<TData_21>) => any;
                useDelegationTotalRewards: <TData_22 = import("./cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsResponse>({ request, options }: _CosmosDistributionV1beta1Queryrpc.UseDelegationTotalRewardsQuery<TData_22>) => any;
                useDelegatorValidators: <TData_23 = import("./cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsResponse>({ request, options }: _CosmosDistributionV1beta1Queryrpc.UseDelegatorValidatorsQuery<TData_23>) => any;
                useDelegatorWithdrawAddress: <TData_24 = import("./cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressResponse>({ request, options }: _CosmosDistributionV1beta1Queryrpc.UseDelegatorWithdrawAddressQuery<TData_24>) => any;
                useCommunityPool: <TData_25 = import("./cosmos/distribution/v1beta1/query").QueryCommunityPoolResponse>({ request, options }: _CosmosDistributionV1beta1Queryrpc.UseCommunityPoolQuery<TData_25>) => any;
            };
        };
        evidence: {
            v1beta1: {
                useEvidence: <TData_26 = import("./cosmos/evidence/v1beta1/query").QueryEvidenceResponse>({ request, options }: _CosmosEvidenceV1beta1Queryrpc.UseEvidenceQuery<TData_26>) => any;
                useAllEvidence: <TData_27 = import("./cosmos/evidence/v1beta1/query").QueryAllEvidenceResponse>({ request, options }: _CosmosEvidenceV1beta1Queryrpc.UseAllEvidenceQuery<TData_27>) => any;
            };
        };
        feegrant: {
            v1beta1: {
                useAllowance: <TData_28 = import("./cosmos/feegrant/v1beta1/query").QueryAllowanceResponse>({ request, options }: _CosmosFeegrantV1beta1Queryrpc.UseAllowanceQuery<TData_28>) => any;
                useAllowances: <TData_29 = import("./cosmos/feegrant/v1beta1/query").QueryAllowancesResponse>({ request, options }: _CosmosFeegrantV1beta1Queryrpc.UseAllowancesQuery<TData_29>) => any;
            };
        };
        gov: {
            v1beta1: {
                useProposal: <TData_30 = import("./cosmos/gov/v1beta1/query").QueryProposalResponse>({ request, options }: _CosmosGovV1beta1Queryrpc.UseProposalQuery<TData_30>) => any;
                useProposals: <TData_31 = import("./cosmos/gov/v1beta1/query").QueryProposalsResponse>({ request, options }: _CosmosGovV1beta1Queryrpc.UseProposalsQuery<TData_31>) => any;
                useVote: <TData_32 = import("./cosmos/gov/v1beta1/query").QueryVoteResponse>({ request, options }: _CosmosGovV1beta1Queryrpc.UseVoteQuery<TData_32>) => any;
                useVotes: <TData_33 = import("./cosmos/gov/v1beta1/query").QueryVotesResponse>({ request, options }: _CosmosGovV1beta1Queryrpc.UseVotesQuery<TData_33>) => any;
                useParams: <TData_34 = import("./cosmos/gov/v1beta1/query").QueryParamsResponse>({ request, options }: _CosmosGovV1beta1Queryrpc.UseParamsQuery<TData_34>) => any;
                useDeposit: <TData_35 = import("./cosmos/gov/v1beta1/query").QueryDepositResponse>({ request, options }: _CosmosGovV1beta1Queryrpc.UseDepositQuery<TData_35>) => any;
                useDeposits: <TData_36 = import("./cosmos/gov/v1beta1/query").QueryDepositsResponse>({ request, options }: _CosmosGovV1beta1Queryrpc.UseDepositsQuery<TData_36>) => any;
                useTallyResult: <TData_37 = import("./cosmos/gov/v1beta1/query").QueryTallyResultResponse>({ request, options }: _CosmosGovV1beta1Queryrpc.UseTallyResultQuery<TData_37>) => any;
            };
        };
        mint: {
            v1beta1: {
                useParams: <TData_38 = import("./cosmos/mint/v1beta1/query").QueryParamsResponse>({ request, options }: _CosmosMintV1beta1Queryrpc.UseParamsQuery<TData_38>) => any;
                useInflation: <TData_39 = import("./cosmos/mint/v1beta1/query").QueryInflationResponse>({ request, options }: _CosmosMintV1beta1Queryrpc.UseInflationQuery<TData_39>) => any;
                useAnnualProvisions: <TData_40 = import("./cosmos/mint/v1beta1/query").QueryAnnualProvisionsResponse>({ request, options }: _CosmosMintV1beta1Queryrpc.UseAnnualProvisionsQuery<TData_40>) => any;
            };
        };
        params: {
            v1beta1: {
                useParams: <TData_41 = import("./cosmos/params/v1beta1/query").QueryParamsResponse>({ request, options }: _CosmosParamsV1beta1Queryrpc.UseParamsQuery<TData_41>) => any;
            };
        };
        slashing: {
            v1beta1: {
                useParams: <TData_42 = import("./cosmos/slashing/v1beta1/query").QueryParamsResponse>({ request, options }: _CosmosSlashingV1beta1Queryrpc.UseParamsQuery<TData_42>) => any;
                useSigningInfo: <TData_43 = import("./cosmos/slashing/v1beta1/query").QuerySigningInfoResponse>({ request, options }: _CosmosSlashingV1beta1Queryrpc.UseSigningInfoQuery<TData_43>) => any;
                useSigningInfos: <TData_44 = import("./cosmos/slashing/v1beta1/query").QuerySigningInfosResponse>({ request, options }: _CosmosSlashingV1beta1Queryrpc.UseSigningInfosQuery<TData_44>) => any;
            };
        };
        staking: {
            v1beta1: {
                useValidators: <TData_45 = import("./cosmos/staking/v1beta1/query").QueryValidatorsResponse>({ request, options }: _CosmosStakingV1beta1Queryrpc.UseValidatorsQuery<TData_45>) => any;
                useValidator: <TData_46 = import("./cosmos/staking/v1beta1/query").QueryValidatorResponse>({ request, options }: _CosmosStakingV1beta1Queryrpc.UseValidatorQuery<TData_46>) => any;
                useValidatorDelegations: <TData_47 = import("./cosmos/staking/v1beta1/query").QueryValidatorDelegationsResponse>({ request, options }: _CosmosStakingV1beta1Queryrpc.UseValidatorDelegationsQuery<TData_47>) => any;
                useValidatorUnbondingDelegations: <TData_48 = import("./cosmos/staking/v1beta1/query").QueryValidatorUnbondingDelegationsResponse>({ request, options }: _CosmosStakingV1beta1Queryrpc.UseValidatorUnbondingDelegationsQuery<TData_48>) => any;
                useDelegation: <TData_49 = import("./cosmos/staking/v1beta1/query").QueryDelegationResponse>({ request, options }: _CosmosStakingV1beta1Queryrpc.UseDelegationQuery<TData_49>) => any;
                useUnbondingDelegation: <TData_50 = import("./cosmos/staking/v1beta1/query").QueryUnbondingDelegationResponse>({ request, options }: _CosmosStakingV1beta1Queryrpc.UseUnbondingDelegationQuery<TData_50>) => any;
                useDelegatorDelegations: <TData_51 = import("./cosmos/staking/v1beta1/query").QueryDelegatorDelegationsResponse>({ request, options }: _CosmosStakingV1beta1Queryrpc.UseDelegatorDelegationsQuery<TData_51>) => any;
                useDelegatorUnbondingDelegations: <TData_52 = import("./cosmos/staking/v1beta1/query").QueryDelegatorUnbondingDelegationsResponse>({ request, options }: _CosmosStakingV1beta1Queryrpc.UseDelegatorUnbondingDelegationsQuery<TData_52>) => any;
                useRedelegations: <TData_53 = import("./cosmos/staking/v1beta1/query").QueryRedelegationsResponse>({ request, options }: _CosmosStakingV1beta1Queryrpc.UseRedelegationsQuery<TData_53>) => any;
                useDelegatorValidators: <TData_54 = import("./cosmos/staking/v1beta1/query").QueryDelegatorValidatorsResponse>({ request, options }: _CosmosStakingV1beta1Queryrpc.UseDelegatorValidatorsQuery<TData_54>) => any;
                useDelegatorValidator: <TData_55 = import("./cosmos/staking/v1beta1/query").QueryDelegatorValidatorResponse>({ request, options }: _CosmosStakingV1beta1Queryrpc.UseDelegatorValidatorQuery<TData_55>) => any;
                useHistoricalInfo: <TData_56 = import("./cosmos/staking/v1beta1/query").QueryHistoricalInfoResponse>({ request, options }: _CosmosStakingV1beta1Queryrpc.UseHistoricalInfoQuery<TData_56>) => any;
                usePool: <TData_57 = import("./cosmos/staking/v1beta1/query").QueryPoolResponse>({ request, options }: _CosmosStakingV1beta1Queryrpc.UsePoolQuery<TData_57>) => any;
                useParams: <TData_58 = import("./cosmos/staking/v1beta1/query").QueryParamsResponse>({ request, options }: _CosmosStakingV1beta1Queryrpc.UseParamsQuery<TData_58>) => any;
            };
        };
        tx: {
            v1beta1: {
                useSimulate: <TData_59 = import("./cosmos/tx/v1beta1/service").SimulateResponse>({ request, options }: _CosmosTxV1beta1Servicerpc.UseSimulateQuery<TData_59>) => any;
                useGetTx: <TData_60 = import("./cosmos/tx/v1beta1/service").GetTxResponse>({ request, options }: _CosmosTxV1beta1Servicerpc.UseGetTxQuery<TData_60>) => any;
                useBroadcastTx: <TData_61 = import("./cosmos/tx/v1beta1/service").BroadcastTxResponse>({ request, options }: _CosmosTxV1beta1Servicerpc.UseBroadcastTxQuery<TData_61>) => any;
                useGetTxsEvent: <TData_62 = import("./cosmos/tx/v1beta1/service").GetTxsEventResponse>({ request, options }: _CosmosTxV1beta1Servicerpc.UseGetTxsEventQuery<TData_62>) => any;
            };
        };
        upgrade: {
            v1beta1: {
                useCurrentPlan: <TData_63 = import("./cosmos/upgrade/v1beta1/query").QueryCurrentPlanResponse>({ request, options }: _CosmosUpgradeV1beta1Queryrpc.UseCurrentPlanQuery<TData_63>) => any;
                useAppliedPlan: <TData_64 = import("./cosmos/upgrade/v1beta1/query").QueryAppliedPlanResponse>({ request, options }: _CosmosUpgradeV1beta1Queryrpc.UseAppliedPlanQuery<TData_64>) => any;
                useUpgradedConsensusState: <TData_65 = import("./cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateResponse>({ request, options }: _CosmosUpgradeV1beta1Queryrpc.UseUpgradedConsensusStateQuery<TData_65>) => any;
                useModuleVersions: <TData_66 = import("./cosmos/upgrade/v1beta1/query").QueryModuleVersionsResponse>({ request, options }: _CosmosUpgradeV1beta1Queryrpc.UseModuleVersionsQuery<TData_66>) => any;
            };
        };
    };
    stride: {
        claim: {
            useDistributorAccountBalance: <TData_67 = import("./stride/claim/query").QueryDistributorAccountBalanceResponse>({ request, options }: _StrideClaimQueryrpc.UseDistributorAccountBalanceQuery<TData_67>) => any;
            useParams: <TData_68 = import("./stride/claim/query").QueryParamsResponse>({ request, options }: _StrideClaimQueryrpc.UseParamsQuery<TData_68>) => any;
            useClaimRecord: <TData_69 = import("./stride/claim/query").QueryClaimRecordResponse>({ request, options }: _StrideClaimQueryrpc.UseClaimRecordQuery<TData_69>) => any;
            useClaimableForAction: <TData_70 = import("./stride/claim/query").QueryClaimableForActionResponse>({ request, options }: _StrideClaimQueryrpc.UseClaimableForActionQuery<TData_70>) => any;
            useTotalClaimable: <TData_71 = import("./stride/claim/query").QueryTotalClaimableResponse>({ request, options }: _StrideClaimQueryrpc.UseTotalClaimableQuery<TData_71>) => any;
            useUserVestings: <TData_72 = import("./stride/claim/query").QueryUserVestingsResponse>({ request, options }: _StrideClaimQueryrpc.UseUserVestingsQuery<TData_72>) => any;
        };
        epochs: {
            useEpochInfos: <TData_73 = import("./stride/epochs/query").QueryEpochsInfoResponse>({ request, options }: _StrideEpochsQueryrpc.UseEpochInfosQuery<TData_73>) => any;
            useCurrentEpoch: <TData_74 = import("./stride/epochs/query").QueryCurrentEpochResponse>({ request, options }: _StrideEpochsQueryrpc.UseCurrentEpochQuery<TData_74>) => any;
            useEpochInfo: <TData_75 = import("./stride/epochs/query").QueryEpochInfoResponse>({ request, options }: _StrideEpochsQueryrpc.UseEpochInfoQuery<TData_75>) => any;
        };
        icacallbacks: {
            useParams: <TData_76 = import("./stride/icacallbacks/query").QueryParamsResponse>({ request, options }: _StrideIcacallbacksQueryrpc.UseParamsQuery<TData_76>) => any;
            useCallbackData: <TData_77 = import("./stride/icacallbacks/query").QueryGetCallbackDataResponse>({ request, options }: _StrideIcacallbacksQueryrpc.UseCallbackDataQuery<TData_77>) => any;
            useCallbackDataAll: <TData_78 = import("./stride/icacallbacks/query").QueryAllCallbackDataResponse>({ request, options }: _StrideIcacallbacksQueryrpc.UseCallbackDataAllQuery<TData_78>) => any;
        };
        mint: {
            v1beta1: {
                useParams: <TData_79 = import("./stride/mint/v1beta1/query").QueryParamsResponse>({ request, options }: _StrideMintV1beta1Queryrpc.UseParamsQuery<TData_79>) => any;
                useEpochProvisions: <TData_80 = import("./stride/mint/v1beta1/query").QueryEpochProvisionsResponse>({ request, options }: _StrideMintV1beta1Queryrpc.UseEpochProvisionsQuery<TData_80>) => any;
            };
        };
        records: {
            useParams: <TData_81 = import("./stride/records/query").QueryParamsResponse>({ request, options }: _StrideRecordsQueryrpc.UseParamsQuery<TData_81>) => any;
            useUserRedemptionRecord: <TData_82 = import("./stride/records/query").QueryGetUserRedemptionRecordResponse>({ request, options }: _StrideRecordsQueryrpc.UseUserRedemptionRecordQuery<TData_82>) => any;
            useUserRedemptionRecordAll: <TData_83 = import("./stride/records/query").QueryAllUserRedemptionRecordResponse>({ request, options }: _StrideRecordsQueryrpc.UseUserRedemptionRecordAllQuery<TData_83>) => any;
            useUserRedemptionRecordForUser: <TData_84 = import("./stride/records/query").QueryAllUserRedemptionRecordForUserResponse>({ request, options }: _StrideRecordsQueryrpc.UseUserRedemptionRecordForUserQuery<TData_84>) => any;
            useEpochUnbondingRecord: <TData_85 = import("./stride/records/query").QueryGetEpochUnbondingRecordResponse>({ request, options }: _StrideRecordsQueryrpc.UseEpochUnbondingRecordQuery<TData_85>) => any;
            useEpochUnbondingRecordAll: <TData_86 = import("./stride/records/query").QueryAllEpochUnbondingRecordResponse>({ request, options }: _StrideRecordsQueryrpc.UseEpochUnbondingRecordAllQuery<TData_86>) => any;
            useDepositRecord: <TData_87 = import("./stride/records/query").QueryGetDepositRecordResponse>({ request, options }: _StrideRecordsQueryrpc.UseDepositRecordQuery<TData_87>) => any;
            useDepositRecordAll: <TData_88 = import("./stride/records/query").QueryAllDepositRecordResponse>({ request, options }: _StrideRecordsQueryrpc.UseDepositRecordAllQuery<TData_88>) => any;
        };
        stakeibc: {
            useParams: <TData_89 = import("./stride/stakeibc/query").QueryParamsResponse>({ request, options }: _StrideStakeibcQueryrpc.UseParamsQuery<TData_89>) => any;
            useValidators: <TData_90 = import("./stride/stakeibc/query").QueryGetValidatorsResponse>({ request, options }: _StrideStakeibcQueryrpc.UseValidatorsQuery<TData_90>) => any;
            useICAAccount: <TData_91 = import("./stride/stakeibc/query").QueryGetICAAccountResponse>({ request, options }: _StrideStakeibcQueryrpc.UseICAAccountQuery<TData_91>) => any;
            useHostZone: <TData_92 = import("./stride/stakeibc/query").QueryGetHostZoneResponse>({ request, options }: _StrideStakeibcQueryrpc.UseHostZoneQuery<TData_92>) => any;
            useHostZoneAll: <TData_93 = import("./stride/stakeibc/query").QueryAllHostZoneResponse>({ request, options }: _StrideStakeibcQueryrpc.UseHostZoneAllQuery<TData_93>) => any;
            useModuleAddress: <TData_94 = import("./stride/stakeibc/query").QueryModuleAddressResponse>({ request, options }: _StrideStakeibcQueryrpc.UseModuleAddressQuery<TData_94>) => any;
            useInterchainAccountFromAddress: <TData_95 = import("./stride/stakeibc/query").QueryInterchainAccountFromAddressResponse>({ request, options }: _StrideStakeibcQueryrpc.UseInterchainAccountFromAddressQuery<TData_95>) => any;
            useEpochTracker: <TData_96 = import("./stride/stakeibc/query").QueryGetEpochTrackerResponse>({ request, options }: _StrideStakeibcQueryrpc.UseEpochTrackerQuery<TData_96>) => any;
            useEpochTrackerAll: <TData_97 = import("./stride/stakeibc/query").QueryAllEpochTrackerResponse>({ request, options }: _StrideStakeibcQueryrpc.UseEpochTrackerAllQuery<TData_97>) => any;
        };
    };
};
