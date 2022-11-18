import * as _0 from "../claim/v1beta1/claim";
import * as _1 from "../claim/v1beta1/genesis";
import * as _2 from "../claim/v1beta1/params";
import * as _3 from "../claim/v1beta1/query";
import * as _4 from "../claim/v1beta1/tx";
import * as _6 from "../vesting/vesting";
import * as _132 from "../claim/v1beta1/query.lcd";
import * as _133 from "../claim/v1beta1/query.rpc.query";
import * as _134 from "../claim/v1beta1/tx.rpc.msg";
export declare namespace Stridelabs {
    namespace stride {
        namespace claim {
            const v1beta1: {
                MsgClientImpl: typeof _134.MsgClientImpl;
                QueryClientImpl: typeof _133.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    distributorAccountBalance(request: _3.QueryDistributorAccountBalanceRequest): Promise<_3.QueryDistributorAccountBalanceResponse>;
                    params(request?: _3.QueryParamsRequest): Promise<_3.QueryParamsResponse>;
                    claimRecord(request: _3.QueryClaimRecordRequest): Promise<_3.QueryClaimRecordResponse>;
                    claimableForAction(request: _3.QueryClaimableForActionRequest): Promise<_3.QueryClaimableForActionResponse>;
                    totalClaimable(request: _3.QueryTotalClaimableRequest): Promise<_3.QueryTotalClaimableResponse>;
                };
                LCDQueryClient: typeof _132.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        setAirdropAllocations(value: _4.MsgSetAirdropAllocations): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        claimFreeAmount(value: _4.MsgClaimFreeAmount): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        createAirdrop(value: _4.MsgCreateAirdrop): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        deleteAirdrop(value: _4.MsgDeleteAirdrop): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        setAirdropAllocations(value: _4.MsgSetAirdropAllocations): {
                            typeUrl: string;
                            value: _4.MsgSetAirdropAllocations;
                        };
                        claimFreeAmount(value: _4.MsgClaimFreeAmount): {
                            typeUrl: string;
                            value: _4.MsgClaimFreeAmount;
                        };
                        createAirdrop(value: _4.MsgCreateAirdrop): {
                            typeUrl: string;
                            value: _4.MsgCreateAirdrop;
                        };
                        deleteAirdrop(value: _4.MsgDeleteAirdrop): {
                            typeUrl: string;
                            value: _4.MsgDeleteAirdrop;
                        };
                    };
                    fromPartial: {
                        setAirdropAllocations(value: _4.MsgSetAirdropAllocations): {
                            typeUrl: string;
                            value: _4.MsgSetAirdropAllocations;
                        };
                        claimFreeAmount(value: _4.MsgClaimFreeAmount): {
                            typeUrl: string;
                            value: _4.MsgClaimFreeAmount;
                        };
                        createAirdrop(value: _4.MsgCreateAirdrop): {
                            typeUrl: string;
                            value: _4.MsgCreateAirdrop;
                        };
                        deleteAirdrop(value: _4.MsgDeleteAirdrop): {
                            typeUrl: string;
                            value: _4.MsgDeleteAirdrop;
                        };
                    };
                };
                AminoConverter: {
                    "/Stridelabs.stride.claim.v1beta1.MsgSetAirdropAllocations": {
                        aminoType: string;
                        toAmino: ({ allocator, airdropIdentifier, users, weights }: _4.MsgSetAirdropAllocations) => {
                            allocator: string;
                            airdrop_identifier: string;
                            users: string[];
                            weights: string[];
                        };
                        fromAmino: ({ allocator, airdrop_identifier, users, weights }: {
                            allocator: string;
                            airdrop_identifier: string;
                            users: string[];
                            weights: string[];
                        }) => _4.MsgSetAirdropAllocations;
                    };
                    "/Stridelabs.stride.claim.v1beta1.MsgClaimFreeAmount": {
                        aminoType: string;
                        toAmino: ({ user, airdropIdentifier }: _4.MsgClaimFreeAmount) => {
                            user: string;
                            airdrop_identifier: string;
                        };
                        fromAmino: ({ user, airdrop_identifier }: {
                            user: string;
                            airdrop_identifier: string;
                        }) => _4.MsgClaimFreeAmount;
                    };
                    "/Stridelabs.stride.claim.v1beta1.MsgCreateAirdrop": {
                        aminoType: string;
                        toAmino: ({ distributor, identifier, startTime, duration, denom }: _4.MsgCreateAirdrop) => {
                            distributor: string;
                            identifier: string;
                            start_time: string;
                            duration: string;
                            denom: string;
                        };
                        fromAmino: ({ distributor, identifier, start_time, duration, denom }: {
                            distributor: string;
                            identifier: string;
                            start_time: string;
                            duration: string;
                            denom: string;
                        }) => _4.MsgCreateAirdrop;
                    };
                    "/Stridelabs.stride.claim.v1beta1.MsgDeleteAirdrop": {
                        aminoType: string;
                        toAmino: ({ distributor, identifier }: _4.MsgDeleteAirdrop) => {
                            distributor: string;
                            identifier: string;
                        };
                        fromAmino: ({ distributor, identifier }: {
                            distributor: string;
                            identifier: string;
                        }) => _4.MsgDeleteAirdrop;
                    };
                };
                MsgSetAirdropAllocations: {
                    encode(message: _4.MsgSetAirdropAllocations, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.MsgSetAirdropAllocations;
                    fromPartial(object: {
                        allocator?: string;
                        airdropIdentifier?: string;
                        users?: string[];
                        weights?: string[];
                    }): _4.MsgSetAirdropAllocations;
                };
                MsgSetAirdropAllocationsResponse: {
                    encode(_: _4.MsgSetAirdropAllocationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.MsgSetAirdropAllocationsResponse;
                    fromPartial(_: {}): _4.MsgSetAirdropAllocationsResponse;
                };
                MsgClaimFreeAmount: {
                    encode(message: _4.MsgClaimFreeAmount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.MsgClaimFreeAmount;
                    fromPartial(object: {
                        user?: string;
                        airdropIdentifier?: string;
                    }): _4.MsgClaimFreeAmount;
                };
                MsgClaimFreeAmountResponse: {
                    encode(message: _4.MsgClaimFreeAmountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.MsgClaimFreeAmountResponse;
                    fromPartial(object: {
                        claimedAmount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }): _4.MsgClaimFreeAmountResponse;
                };
                MsgCreateAirdrop: {
                    encode(message: _4.MsgCreateAirdrop, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.MsgCreateAirdrop;
                    fromPartial(object: {
                        distributor?: string;
                        identifier?: string;
                        startTime?: any;
                        duration?: any;
                        denom?: string;
                    }): _4.MsgCreateAirdrop;
                };
                MsgCreateAirdropResponse: {
                    encode(_: _4.MsgCreateAirdropResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.MsgCreateAirdropResponse;
                    fromPartial(_: {}): _4.MsgCreateAirdropResponse;
                };
                MsgDeleteAirdrop: {
                    encode(message: _4.MsgDeleteAirdrop, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.MsgDeleteAirdrop;
                    fromPartial(object: {
                        distributor?: string;
                        identifier?: string;
                    }): _4.MsgDeleteAirdrop;
                };
                MsgDeleteAirdropResponse: {
                    encode(_: _4.MsgDeleteAirdropResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.MsgDeleteAirdropResponse;
                    fromPartial(_: {}): _4.MsgDeleteAirdropResponse;
                };
                QueryDistributorAccountBalanceRequest: {
                    encode(message: _3.QueryDistributorAccountBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.QueryDistributorAccountBalanceRequest;
                    fromPartial(object: {
                        airdropIdentifier?: string;
                    }): _3.QueryDistributorAccountBalanceRequest;
                };
                QueryDistributorAccountBalanceResponse: {
                    encode(message: _3.QueryDistributorAccountBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.QueryDistributorAccountBalanceResponse;
                    fromPartial(object: {
                        distributorAccountBalance?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }): _3.QueryDistributorAccountBalanceResponse;
                };
                QueryParamsRequest: {
                    encode(_: _3.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.QueryParamsRequest;
                    fromPartial(_: {}): _3.QueryParamsRequest;
                };
                QueryParamsResponse: {
                    encode(message: _3.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.QueryParamsResponse;
                    fromPartial(object: {
                        params?: {
                            airdrops?: {
                                airdropIdentifier?: string;
                                airdropStartTime?: Date;
                                airdropDuration?: {
                                    seconds?: any;
                                    nanos?: number;
                                };
                                claimDenom?: string;
                                distributorAddress?: string;
                            }[];
                        };
                    }): _3.QueryParamsResponse;
                };
                QueryClaimRecordRequest: {
                    encode(message: _3.QueryClaimRecordRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.QueryClaimRecordRequest;
                    fromPartial(object: {
                        airdropIdentifier?: string;
                        address?: string;
                    }): _3.QueryClaimRecordRequest;
                };
                QueryClaimRecordResponse: {
                    encode(message: _3.QueryClaimRecordResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.QueryClaimRecordResponse;
                    fromPartial(object: {
                        claimRecord?: {
                            airdropIdentifier?: string;
                            address?: string;
                            weight?: string;
                            actionCompleted?: boolean[];
                        };
                    }): _3.QueryClaimRecordResponse;
                };
                QueryClaimableForActionRequest: {
                    encode(message: _3.QueryClaimableForActionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.QueryClaimableForActionRequest;
                    fromPartial(object: {
                        airdropIdentifier?: string;
                        address?: string;
                        action?: _0.Action;
                    }): _3.QueryClaimableForActionRequest;
                };
                QueryClaimableForActionResponse: {
                    encode(message: _3.QueryClaimableForActionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.QueryClaimableForActionResponse;
                    fromPartial(object: {
                        coins?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }): _3.QueryClaimableForActionResponse;
                };
                QueryTotalClaimableRequest: {
                    encode(message: _3.QueryTotalClaimableRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.QueryTotalClaimableRequest;
                    fromPartial(object: {
                        airdropIdentifier?: string;
                        address?: string;
                    }): _3.QueryTotalClaimableRequest;
                };
                QueryTotalClaimableResponse: {
                    encode(message: _3.QueryTotalClaimableResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.QueryTotalClaimableResponse;
                    fromPartial(object: {
                        coins?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }): _3.QueryTotalClaimableResponse;
                };
                Params: {
                    encode(message: _2.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.Params;
                    fromPartial(object: {
                        airdrops?: {
                            airdropIdentifier?: string;
                            airdropStartTime?: Date;
                            airdropDuration?: {
                                seconds?: any;
                                nanos?: number;
                            };
                            claimDenom?: string;
                            distributorAddress?: string;
                        }[];
                    }): _2.Params;
                };
                Airdrop: {
                    encode(message: _2.Airdrop, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.Airdrop;
                    fromPartial(object: {
                        airdropIdentifier?: string;
                        airdropStartTime?: Date;
                        airdropDuration?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        claimDenom?: string;
                        distributorAddress?: string;
                    }): _2.Airdrop;
                };
                GenesisState: {
                    encode(message: _1.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1.GenesisState;
                    fromPartial(object: {
                        params?: {
                            airdrops?: {
                                airdropIdentifier?: string;
                                airdropStartTime?: Date;
                                airdropDuration?: {
                                    seconds?: any;
                                    nanos?: number;
                                };
                                claimDenom?: string;
                                distributorAddress?: string;
                            }[];
                        };
                        claimRecords?: {
                            airdropIdentifier?: string;
                            address?: string;
                            weight?: string;
                            actionCompleted?: boolean[];
                        }[];
                    }): _1.GenesisState;
                };
                actionFromJSON(object: any): _0.Action;
                actionToJSON(object: _0.Action): string;
                Action: typeof _0.Action;
                ActionSDKType: typeof _0.ActionSDKType;
                ClaimRecord: {
                    encode(message: _0.ClaimRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.ClaimRecord;
                    fromPartial(object: {
                        airdropIdentifier?: string;
                        address?: string;
                        weight?: string;
                        actionCompleted?: boolean[];
                    }): _0.ClaimRecord;
                };
            };
        }
        const vesting: {
            BaseVestingAccount: {
                encode(message: _6.BaseVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.BaseVestingAccount;
                fromPartial(object: {
                    baseAccount?: {
                        address?: string;
                        pubKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        accountNumber?: any;
                        sequence?: any;
                    };
                    originalVesting?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    delegatedFree?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    delegatedVesting?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    endTime?: any;
                }): _6.BaseVestingAccount;
            };
            Period: {
                encode(message: _6.Period, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.Period;
                fromPartial(object: {
                    startTime?: any;
                    length?: any;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _6.Period;
            };
            StridePeriodicVestingAccount: {
                encode(message: _6.StridePeriodicVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.StridePeriodicVestingAccount;
                fromPartial(object: {
                    baseVestingAccount?: {
                        baseAccount?: {
                            address?: string;
                            pubKey?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            accountNumber?: any;
                            sequence?: any;
                        };
                        originalVesting?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        delegatedFree?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        delegatedVesting?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        endTime?: any;
                    };
                    vestingPeriods?: {
                        startTime?: any;
                        length?: any;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                }): _6.StridePeriodicVestingAccount;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("@osmonauts/helpers").Rpc;
        }) => Promise<{
            Stridelabs: {
                stride: {
                    claim: {
                        v1beta1: _134.MsgClientImpl;
                    };
                };
            };
            cosmos: {
                authz: {
                    v1beta1: import("../cosmos/authz/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                bank: {
                    v1beta1: import("../cosmos/bank/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                crisis: {
                    v1beta1: import("../cosmos/crisis/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                distribution: {
                    v1beta1: import("../cosmos/distribution/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                evidence: {
                    v1beta1: import("../cosmos/evidence/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                feegrant: {
                    v1beta1: import("../cosmos/feegrant/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                gov: {
                    v1beta1: import("../cosmos/gov/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                slashing: {
                    v1beta1: import("../cosmos/slashing/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                staking: {
                    v1beta1: import("../cosmos/staking/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                vesting: {
                    v1beta1: import("../cosmos/vesting/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string;
        }) => Promise<{
            Stridelabs: {
                stride: {
                    claim: {
                        v1beta1: {
                            distributorAccountBalance(request: _3.QueryDistributorAccountBalanceRequest): Promise<_3.QueryDistributorAccountBalanceResponse>;
                            params(request?: _3.QueryParamsRequest): Promise<_3.QueryParamsResponse>;
                            claimRecord(request: _3.QueryClaimRecordRequest): Promise<_3.QueryClaimRecordResponse>;
                            claimableForAction(request: _3.QueryClaimableForActionRequest): Promise<_3.QueryClaimableForActionResponse>;
                            totalClaimable(request: _3.QueryTotalClaimableRequest): Promise<_3.QueryTotalClaimableResponse>;
                        };
                    };
                };
            };
            cosmos: {
                auth: {
                    v1beta1: {
                        accounts(request?: import("../cosmos/auth/v1beta1/query").QueryAccountsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountsResponse>;
                        account(request: import("../cosmos/auth/v1beta1/query").QueryAccountRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountResponse>;
                        params(request?: import("../cosmos/auth/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryParamsResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: import("../cosmos/authz/v1beta1/query").QueryGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGrantsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: import("../cosmos/bank/v1beta1/query").QueryBalanceRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryBalanceResponse>;
                        allBalances(request: import("../cosmos/bank/v1beta1/query").QueryAllBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryAllBalancesResponse>;
                        totalSupply(request?: import("../cosmos/bank/v1beta1/query").QueryTotalSupplyRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryTotalSupplyResponse>;
                        supplyOf(request: import("../cosmos/bank/v1beta1/query").QuerySupplyOfRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySupplyOfResponse>;
                        params(request?: import("../cosmos/bank/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryParamsResponse>;
                        denomMetadata(request: import("../cosmos/bank/v1beta1/query").QueryDenomMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomMetadataResponse>;
                        denomsMetadata(request?: import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataResponse>;
                    };
                };
                base: {
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
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: import("../cosmos/tx/v1beta1/service").SimulateRequest): Promise<import("../cosmos/tx/v1beta1/service").SimulateResponse>;
                        getTx(request: import("../cosmos/tx/v1beta1/service").GetTxRequest): Promise<import("../cosmos/tx/v1beta1/service").GetTxResponse>;
                        broadcastTx(request: import("../cosmos/tx/v1beta1/service").BroadcastTxRequest): Promise<import("../cosmos/tx/v1beta1/service").BroadcastTxResponse>;
                        getTxsEvent(request: import("../cosmos/tx/v1beta1/service").GetTxsEventRequest): Promise<import("../cosmos/tx/v1beta1/service").GetTxsEventResponse>;
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
        }>;
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
            Stridelabs: {
                stride: {
                    claim: {
                        v1beta1: _132.LCDQueryClient;
                    };
                };
            };
            cosmos: {
                auth: {
                    v1beta1: import("../cosmos/auth/v1beta1/query.lcd").LCDQueryClient;
                };
                authz: {
                    v1beta1: import("../cosmos/authz/v1beta1/query.lcd").LCDQueryClient;
                };
                bank: {
                    v1beta1: import("../cosmos/bank/v1beta1/query.lcd").LCDQueryClient;
                };
                base: {
                    tendermint: {
                        v1beta1: import("../cosmos/base/tendermint/v1beta1/query.lcd").LCDQueryClient;
                    };
                };
                distribution: {
                    v1beta1: import("../cosmos/distribution/v1beta1/query.lcd").LCDQueryClient;
                };
                evidence: {
                    v1beta1: import("../cosmos/evidence/v1beta1/query.lcd").LCDQueryClient;
                };
                feegrant: {
                    v1beta1: import("../cosmos/feegrant/v1beta1/query.lcd").LCDQueryClient;
                };
                gov: {
                    v1beta1: import("../cosmos/gov/v1beta1/query.lcd").LCDQueryClient;
                };
                mint: {
                    v1beta1: import("../cosmos/mint/v1beta1/query.lcd").LCDQueryClient;
                };
                params: {
                    v1beta1: import("../cosmos/params/v1beta1/query.lcd").LCDQueryClient;
                };
                slashing: {
                    v1beta1: import("../cosmos/slashing/v1beta1/query.lcd").LCDQueryClient;
                };
                staking: {
                    v1beta1: import("../cosmos/staking/v1beta1/query.lcd").LCDQueryClient;
                };
                tx: {
                    v1beta1: import("../cosmos/tx/v1beta1/service.lcd").LCDQueryClient;
                };
                upgrade: {
                    v1beta1: import("../cosmos/upgrade/v1beta1/query.lcd").LCDQueryClient;
                };
            };
        }>;
    };
}
