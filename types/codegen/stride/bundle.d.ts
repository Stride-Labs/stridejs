import * as _90 from "./epochs/genesis";
import * as _91 from "./epochs/query";
import * as _92 from "./icacallbacks/callback_data";
import * as _93 from "./icacallbacks/genesis";
import * as _94 from "./icacallbacks/packet";
import * as _95 from "./icacallbacks/params";
import * as _96 from "./icacallbacks/query";
import * as _98 from "./interchainquery/v1/genesis";
import * as _99 from "./interchainquery/v1/messages";
import * as _100 from "./mint/v1beta1/genesis";
import * as _101 from "./mint/v1beta1/mint";
import * as _102 from "./mint/v1beta1/query";
import * as _103 from "./records/callbacks";
import * as _104 from "./records/genesis";
import * as _105 from "./records/query";
import * as _106 from "./stakeibc/callbacks";
import * as _107 from "./stakeibc/delegation";
import * as _108 from "./stakeibc/epoch_tracker";
import * as _109 from "./stakeibc/genesis";
import * as _110 from "./stakeibc/gov";
import * as _111 from "./stakeibc/host_zone";
import * as _112 from "./stakeibc/ica_account";
import * as _113 from "./stakeibc/min_validator_requirements";
import * as _114 from "./stakeibc/packet";
import * as _115 from "./stakeibc/params";
import * as _116 from "./stakeibc/query";
import * as _117 from "./stakeibc/tx";
import * as _118 from "./stakeibc/validator";
import * as _197 from "./epochs/query.lcd";
import * as _198 from "./icacallbacks/query.lcd";
import * as _199 from "./mint/v1beta1/query.lcd";
import * as _200 from "./records/query.lcd";
import * as _201 from "./stakeibc/query.lcd";
import * as _202 from "./epochs/query.rpc.query";
import * as _203 from "./icacallbacks/query.rpc.query";
import * as _204 from "./mint/v1beta1/query.rpc.query";
import * as _205 from "./records/query.rpc.query";
import * as _206 from "./stakeibc/query.rpc.query";
import * as _207 from "./interchainquery/v1/messages.rpc.msg";
import * as _208 from "./stakeibc/tx.rpc.msg";
export declare namespace stride {
    const epochs: {
        QueryClientImpl: typeof _202.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            epochInfos(request?: _91.QueryEpochsInfoRequest): Promise<_91.QueryEpochsInfoResponse>;
            currentEpoch(request: _91.QueryCurrentEpochRequest): Promise<_91.QueryCurrentEpochResponse>;
            epochInfo(request: _91.QueryEpochInfoRequest): Promise<_91.QueryEpochInfoResponse>;
        };
        LCDQueryClient: typeof _197.LCDQueryClient;
        QueryEpochsInfoRequest: {
            encode(message: _91.QueryEpochsInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.QueryEpochsInfoRequest;
            fromPartial(object: {
                pagination?: {
                    key?: Uint8Array;
                    offset?: any;
                    limit?: any;
                    countTotal?: boolean;
                    reverse?: boolean;
                };
            }): _91.QueryEpochsInfoRequest;
        };
        QueryEpochsInfoResponse: {
            encode(message: _91.QueryEpochsInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.QueryEpochsInfoResponse;
            fromPartial(object: {
                epochs?: {
                    identifier?: string;
                    startTime?: Date;
                    duration?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    currentEpoch?: any;
                    currentEpochStartTime?: Date;
                    epochCountingStarted?: boolean;
                    currentEpochStartHeight?: any;
                }[];
                pagination?: {
                    nextKey?: Uint8Array;
                    total?: any;
                };
            }): _91.QueryEpochsInfoResponse;
        };
        QueryCurrentEpochRequest: {
            encode(message: _91.QueryCurrentEpochRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.QueryCurrentEpochRequest;
            fromPartial(object: {
                identifier?: string;
            }): _91.QueryCurrentEpochRequest;
        };
        QueryCurrentEpochResponse: {
            encode(message: _91.QueryCurrentEpochResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.QueryCurrentEpochResponse;
            fromPartial(object: {
                currentEpoch?: any;
            }): _91.QueryCurrentEpochResponse;
        };
        QueryEpochInfoRequest: {
            encode(message: _91.QueryEpochInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.QueryEpochInfoRequest;
            fromPartial(object: {
                identifier?: string;
            }): _91.QueryEpochInfoRequest;
        };
        QueryEpochInfoResponse: {
            encode(message: _91.QueryEpochInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.QueryEpochInfoResponse;
            fromPartial(object: {
                epoch?: {
                    identifier?: string;
                    startTime?: Date;
                    duration?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    currentEpoch?: any;
                    currentEpochStartTime?: Date;
                    epochCountingStarted?: boolean;
                    currentEpochStartHeight?: any;
                };
            }): _91.QueryEpochInfoResponse;
        };
        EpochInfo: {
            encode(message: _90.EpochInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.EpochInfo;
            fromPartial(object: {
                identifier?: string;
                startTime?: Date;
                duration?: {
                    seconds?: any;
                    nanos?: number;
                };
                currentEpoch?: any;
                currentEpochStartTime?: Date;
                epochCountingStarted?: boolean;
                currentEpochStartHeight?: any;
            }): _90.EpochInfo;
        };
        GenesisState: {
            encode(message: _90.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.GenesisState;
            fromPartial(object: {
                epochs?: {
                    identifier?: string;
                    startTime?: Date;
                    duration?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    currentEpoch?: any;
                    currentEpochStartTime?: Date;
                    epochCountingStarted?: boolean;
                    currentEpochStartHeight?: any;
                }[];
            }): _90.GenesisState;
        };
    };
    const icacallbacks: {
        QueryClientImpl: typeof _203.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            params(request?: _96.QueryParamsRequest): Promise<_96.QueryParamsResponse>;
            callbackData(request: _96.QueryGetCallbackDataRequest): Promise<_96.QueryGetCallbackDataResponse>;
            callbackDataAll(request?: _96.QueryAllCallbackDataRequest): Promise<_96.QueryAllCallbackDataResponse>;
        };
        LCDQueryClient: typeof _198.LCDQueryClient;
        QueryParamsRequest: {
            encode(_: _96.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.QueryParamsRequest;
            fromPartial(_: {}): _96.QueryParamsRequest;
        };
        QueryParamsResponse: {
            encode(message: _96.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.QueryParamsResponse;
            fromPartial(object: {
                params?: {};
            }): _96.QueryParamsResponse;
        };
        QueryGetCallbackDataRequest: {
            encode(message: _96.QueryGetCallbackDataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.QueryGetCallbackDataRequest;
            fromPartial(object: {
                callbackKey?: string;
            }): _96.QueryGetCallbackDataRequest;
        };
        QueryGetCallbackDataResponse: {
            encode(message: _96.QueryGetCallbackDataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.QueryGetCallbackDataResponse;
            fromPartial(object: {
                callbackData?: {
                    callbackKey?: string;
                    portId?: string;
                    channelId?: string;
                    sequence?: any;
                    callbackId?: string;
                    callbackArgs?: Uint8Array;
                };
            }): _96.QueryGetCallbackDataResponse;
        };
        QueryAllCallbackDataRequest: {
            encode(message: _96.QueryAllCallbackDataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.QueryAllCallbackDataRequest;
            fromPartial(object: {
                pagination?: {
                    key?: Uint8Array;
                    offset?: any;
                    limit?: any;
                    countTotal?: boolean;
                    reverse?: boolean;
                };
            }): _96.QueryAllCallbackDataRequest;
        };
        QueryAllCallbackDataResponse: {
            encode(message: _96.QueryAllCallbackDataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.QueryAllCallbackDataResponse;
            fromPartial(object: {
                callbackData?: {
                    callbackKey?: string;
                    portId?: string;
                    channelId?: string;
                    sequence?: any;
                    callbackId?: string;
                    callbackArgs?: Uint8Array;
                }[];
                pagination?: {
                    nextKey?: Uint8Array;
                    total?: any;
                };
            }): _96.QueryAllCallbackDataResponse;
        };
        Params: {
            encode(_: _95.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.Params;
            fromPartial(_: {}): _95.Params;
        };
        IcacallbacksPacketData: {
            encode(message: _94.IcacallbacksPacketData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.IcacallbacksPacketData;
            fromPartial(object: {
                noData?: {};
            }): _94.IcacallbacksPacketData;
        };
        NoData: {
            encode(_: _94.NoData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.NoData;
            fromPartial(_: {}): _94.NoData;
        };
        GenesisState: {
            encode(message: _93.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.GenesisState;
            fromPartial(object: {
                params?: {};
                portId?: string;
                callbackDataList?: {
                    callbackKey?: string;
                    portId?: string;
                    channelId?: string;
                    sequence?: any;
                    callbackId?: string;
                    callbackArgs?: Uint8Array;
                }[];
            }): _93.GenesisState;
        };
        CallbackData: {
            encode(message: _92.CallbackData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.CallbackData;
            fromPartial(object: {
                callbackKey?: string;
                portId?: string;
                channelId?: string;
                sequence?: any;
                callbackId?: string;
                callbackArgs?: Uint8Array;
            }): _92.CallbackData;
        };
    };
    namespace interchainquery {
        const v1: {
            MsgClientImpl: typeof _207.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitQueryResponse(value: _99.MsgSubmitQueryResponse): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitQueryResponse(value: _99.MsgSubmitQueryResponse): {
                        typeUrl: string;
                        value: _99.MsgSubmitQueryResponse;
                    };
                };
                fromPartial: {
                    submitQueryResponse(value: _99.MsgSubmitQueryResponse): {
                        typeUrl: string;
                        value: _99.MsgSubmitQueryResponse;
                    };
                };
            };
            AminoConverter: {
                "/stride.interchainquery.v1.MsgSubmitQueryResponse": {
                    aminoType: string;
                    toAmino: ({ chainId, queryId, result, proofOps, height, fromAddress }: _99.MsgSubmitQueryResponse) => {
                        chain_id: string;
                        query_id: string;
                        result: Uint8Array;
                        proof_ops: {
                            ops: {
                                type: string;
                                key: Uint8Array;
                                data: Uint8Array;
                            }[];
                        };
                        height: string;
                        from_address: string;
                    };
                    fromAmino: ({ chain_id, query_id, result, proof_ops, height, from_address }: {
                        chain_id: string;
                        query_id: string;
                        result: Uint8Array;
                        proof_ops: {
                            ops: {
                                type: string;
                                key: Uint8Array;
                                data: Uint8Array;
                            }[];
                        };
                        height: string;
                        from_address: string;
                    }) => _99.MsgSubmitQueryResponse;
                };
            };
            MsgSubmitQueryResponse: {
                encode(message: _99.MsgSubmitQueryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.MsgSubmitQueryResponse;
                fromPartial(object: {
                    chainId?: string;
                    queryId?: string;
                    result?: Uint8Array;
                    proofOps?: {
                        ops?: {
                            type?: string;
                            key?: Uint8Array;
                            data?: Uint8Array;
                        }[];
                    };
                    height?: any;
                    fromAddress?: string;
                }): _99.MsgSubmitQueryResponse;
            };
            MsgSubmitQueryResponseResponse: {
                encode(_: _99.MsgSubmitQueryResponseResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.MsgSubmitQueryResponseResponse;
                fromPartial(_: {}): _99.MsgSubmitQueryResponseResponse;
            };
            Query: {
                encode(message: _98.Query, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.Query;
                fromPartial(object: {
                    id?: string;
                    connectionId?: string;
                    chainId?: string;
                    queryType?: string;
                    request?: Uint8Array;
                    period?: string;
                    lastHeight?: string;
                    callbackId?: string;
                    ttl?: any;
                    height?: any;
                }): _98.Query;
            };
            DataPoint: {
                encode(message: _98.DataPoint, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.DataPoint;
                fromPartial(object: {
                    id?: string;
                    remoteHeight?: string;
                    localHeight?: string;
                    value?: Uint8Array;
                }): _98.DataPoint;
            };
            GenesisState: {
                encode(message: _98.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.GenesisState;
                fromPartial(object: {
                    queries?: {
                        id?: string;
                        connectionId?: string;
                        chainId?: string;
                        queryType?: string;
                        request?: Uint8Array;
                        period?: string;
                        lastHeight?: string;
                        callbackId?: string;
                        ttl?: any;
                        height?: any;
                    }[];
                }): _98.GenesisState;
            };
        };
    }
    namespace mint {
        const v1beta1: {
            QueryClientImpl: typeof _204.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _102.QueryParamsRequest): Promise<_102.QueryParamsResponse>;
                epochProvisions(request?: _102.QueryEpochProvisionsRequest): Promise<_102.QueryEpochProvisionsResponse>;
            };
            LCDQueryClient: typeof _199.LCDQueryClient;
            QueryParamsRequest: {
                encode(_: _102.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.QueryParamsRequest;
                fromPartial(_: {}): _102.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _102.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.QueryParamsResponse;
                fromPartial(object: {
                    params?: {
                        mintDenom?: string;
                        genesisEpochProvisions?: string;
                        epochIdentifier?: string;
                        reductionPeriodInEpochs?: any;
                        reductionFactor?: string;
                        distributionProportions?: {
                            staking?: string;
                            communityPoolGrowth?: string;
                            communityPoolSecurityBudget?: string;
                            strategicReserve?: string;
                        };
                        mintingRewardsDistributionStartEpoch?: any;
                    };
                }): _102.QueryParamsResponse;
            };
            QueryEpochProvisionsRequest: {
                encode(_: _102.QueryEpochProvisionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.QueryEpochProvisionsRequest;
                fromPartial(_: {}): _102.QueryEpochProvisionsRequest;
            };
            QueryEpochProvisionsResponse: {
                encode(message: _102.QueryEpochProvisionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.QueryEpochProvisionsResponse;
                fromPartial(object: {
                    epochProvisions?: Uint8Array;
                }): _102.QueryEpochProvisionsResponse;
            };
            Minter: {
                encode(message: _101.Minter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.Minter;
                fromPartial(object: {
                    epochProvisions?: string;
                }): _101.Minter;
            };
            DistributionProportions: {
                encode(message: _101.DistributionProportions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.DistributionProportions;
                fromPartial(object: {
                    staking?: string;
                    communityPoolGrowth?: string;
                    communityPoolSecurityBudget?: string;
                    strategicReserve?: string;
                }): _101.DistributionProportions;
            };
            Params: {
                encode(message: _101.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.Params;
                fromPartial(object: {
                    mintDenom?: string;
                    genesisEpochProvisions?: string;
                    epochIdentifier?: string;
                    reductionPeriodInEpochs?: any;
                    reductionFactor?: string;
                    distributionProportions?: {
                        staking?: string;
                        communityPoolGrowth?: string;
                        communityPoolSecurityBudget?: string;
                        strategicReserve?: string;
                    };
                    mintingRewardsDistributionStartEpoch?: any;
                }): _101.Params;
            };
            GenesisState: {
                encode(message: _100.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.GenesisState;
                fromPartial(object: {
                    minter?: {
                        epochProvisions?: string;
                    };
                    params?: {
                        mintDenom?: string;
                        genesisEpochProvisions?: string;
                        epochIdentifier?: string;
                        reductionPeriodInEpochs?: any;
                        reductionFactor?: string;
                        distributionProportions?: {
                            staking?: string;
                            communityPoolGrowth?: string;
                            communityPoolSecurityBudget?: string;
                            strategicReserve?: string;
                        };
                        mintingRewardsDistributionStartEpoch?: any;
                    };
                    reductionStartedEpoch?: any;
                }): _100.GenesisState;
            };
        };
    }
    const records: {
        QueryClientImpl: typeof _205.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            params(request?: _105.QueryParamsRequest): Promise<_105.QueryParamsResponse>;
            userRedemptionRecord(request: _105.QueryGetUserRedemptionRecordRequest): Promise<_105.QueryGetUserRedemptionRecordResponse>;
            userRedemptionRecordAll(request?: _105.QueryAllUserRedemptionRecordRequest): Promise<_105.QueryAllUserRedemptionRecordResponse>;
            userRedemptionRecordForUser(request: _105.QueryAllUserRedemptionRecordForUserRequest): Promise<_105.QueryAllUserRedemptionRecordForUserResponse>;
            epochUnbondingRecord(request: _105.QueryGetEpochUnbondingRecordRequest): Promise<_105.QueryGetEpochUnbondingRecordResponse>;
            epochUnbondingRecordAll(request?: _105.QueryAllEpochUnbondingRecordRequest): Promise<_105.QueryAllEpochUnbondingRecordResponse>;
            depositRecord(request: _105.QueryGetDepositRecordRequest): Promise<_105.QueryGetDepositRecordResponse>;
            depositRecordAll(request?: _105.QueryAllDepositRecordRequest): Promise<_105.QueryAllDepositRecordResponse>;
        };
        LCDQueryClient: typeof _200.LCDQueryClient;
        QueryParamsRequest: {
            encode(_: _105.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.QueryParamsRequest;
            fromPartial(_: {}): _105.QueryParamsRequest;
        };
        QueryParamsResponse: {
            encode(message: _105.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.QueryParamsResponse;
            fromPartial(object: {
                params?: {};
            }): _105.QueryParamsResponse;
        };
        QueryGetDepositRecordRequest: {
            encode(message: _105.QueryGetDepositRecordRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.QueryGetDepositRecordRequest;
            fromPartial(object: {
                id?: any;
            }): _105.QueryGetDepositRecordRequest;
        };
        QueryGetDepositRecordResponse: {
            encode(message: _105.QueryGetDepositRecordResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.QueryGetDepositRecordResponse;
            fromPartial(object: {
                depositRecord?: {
                    id?: any;
                    amount?: any;
                    denom?: string;
                    hostZoneId?: string;
                    status?: _104.DepositRecord_Status;
                    depositEpochNumber?: any;
                    source?: _104.DepositRecord_Source;
                };
            }): _105.QueryGetDepositRecordResponse;
        };
        QueryAllDepositRecordRequest: {
            encode(message: _105.QueryAllDepositRecordRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.QueryAllDepositRecordRequest;
            fromPartial(object: {
                pagination?: {
                    key?: Uint8Array;
                    offset?: any;
                    limit?: any;
                    countTotal?: boolean;
                    reverse?: boolean;
                };
            }): _105.QueryAllDepositRecordRequest;
        };
        QueryAllDepositRecordResponse: {
            encode(message: _105.QueryAllDepositRecordResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.QueryAllDepositRecordResponse;
            fromPartial(object: {
                depositRecord?: {
                    id?: any;
                    amount?: any;
                    denom?: string;
                    hostZoneId?: string;
                    status?: _104.DepositRecord_Status;
                    depositEpochNumber?: any;
                    source?: _104.DepositRecord_Source;
                }[];
                pagination?: {
                    nextKey?: Uint8Array;
                    total?: any;
                };
            }): _105.QueryAllDepositRecordResponse;
        };
        QueryGetUserRedemptionRecordRequest: {
            encode(message: _105.QueryGetUserRedemptionRecordRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.QueryGetUserRedemptionRecordRequest;
            fromPartial(object: {
                id?: string;
            }): _105.QueryGetUserRedemptionRecordRequest;
        };
        QueryGetUserRedemptionRecordResponse: {
            encode(message: _105.QueryGetUserRedemptionRecordResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.QueryGetUserRedemptionRecordResponse;
            fromPartial(object: {
                userRedemptionRecord?: {
                    id?: string;
                    sender?: string;
                    receiver?: string;
                    amount?: any;
                    denom?: string;
                    hostZoneId?: string;
                    epochNumber?: any;
                    claimIsPending?: boolean;
                };
            }): _105.QueryGetUserRedemptionRecordResponse;
        };
        QueryAllUserRedemptionRecordRequest: {
            encode(message: _105.QueryAllUserRedemptionRecordRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.QueryAllUserRedemptionRecordRequest;
            fromPartial(object: {
                pagination?: {
                    key?: Uint8Array;
                    offset?: any;
                    limit?: any;
                    countTotal?: boolean;
                    reverse?: boolean;
                };
            }): _105.QueryAllUserRedemptionRecordRequest;
        };
        QueryAllUserRedemptionRecordResponse: {
            encode(message: _105.QueryAllUserRedemptionRecordResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.QueryAllUserRedemptionRecordResponse;
            fromPartial(object: {
                userRedemptionRecord?: {
                    id?: string;
                    sender?: string;
                    receiver?: string;
                    amount?: any;
                    denom?: string;
                    hostZoneId?: string;
                    epochNumber?: any;
                    claimIsPending?: boolean;
                }[];
                pagination?: {
                    nextKey?: Uint8Array;
                    total?: any;
                };
            }): _105.QueryAllUserRedemptionRecordResponse;
        };
        QueryAllUserRedemptionRecordForUserRequest: {
            encode(message: _105.QueryAllUserRedemptionRecordForUserRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.QueryAllUserRedemptionRecordForUserRequest;
            fromPartial(object: {
                chainId?: string;
                day?: any;
                address?: string;
                limit?: any;
                pagination?: {
                    key?: Uint8Array;
                    offset?: any;
                    limit?: any;
                    countTotal?: boolean;
                    reverse?: boolean;
                };
            }): _105.QueryAllUserRedemptionRecordForUserRequest;
        };
        QueryAllUserRedemptionRecordForUserResponse: {
            encode(message: _105.QueryAllUserRedemptionRecordForUserResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.QueryAllUserRedemptionRecordForUserResponse;
            fromPartial(object: {
                userRedemptionRecord?: {
                    id?: string;
                    sender?: string;
                    receiver?: string;
                    amount?: any;
                    denom?: string;
                    hostZoneId?: string;
                    epochNumber?: any;
                    claimIsPending?: boolean;
                }[];
                pagination?: {
                    nextKey?: Uint8Array;
                    total?: any;
                };
            }): _105.QueryAllUserRedemptionRecordForUserResponse;
        };
        QueryGetEpochUnbondingRecordRequest: {
            encode(message: _105.QueryGetEpochUnbondingRecordRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.QueryGetEpochUnbondingRecordRequest;
            fromPartial(object: {
                epochNumber?: any;
            }): _105.QueryGetEpochUnbondingRecordRequest;
        };
        QueryGetEpochUnbondingRecordResponse: {
            encode(message: _105.QueryGetEpochUnbondingRecordResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.QueryGetEpochUnbondingRecordResponse;
            fromPartial(object: {
                epochUnbondingRecord?: {
                    epochNumber?: any;
                    hostZoneUnbondings?: {
                        stTokenAmount?: any;
                        nativeTokenAmount?: any;
                        denom?: string;
                        hostZoneId?: string;
                        unbondingTime?: any;
                        status?: _104.HostZoneUnbonding_Status;
                        userRedemptionRecords?: string[];
                    }[];
                };
            }): _105.QueryGetEpochUnbondingRecordResponse;
        };
        QueryAllEpochUnbondingRecordRequest: {
            encode(message: _105.QueryAllEpochUnbondingRecordRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.QueryAllEpochUnbondingRecordRequest;
            fromPartial(object: {
                pagination?: {
                    key?: Uint8Array;
                    offset?: any;
                    limit?: any;
                    countTotal?: boolean;
                    reverse?: boolean;
                };
            }): _105.QueryAllEpochUnbondingRecordRequest;
        };
        QueryAllEpochUnbondingRecordResponse: {
            encode(message: _105.QueryAllEpochUnbondingRecordResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.QueryAllEpochUnbondingRecordResponse;
            fromPartial(object: {
                epochUnbondingRecord?: {
                    epochNumber?: any;
                    hostZoneUnbondings?: {
                        stTokenAmount?: any;
                        nativeTokenAmount?: any;
                        denom?: string;
                        hostZoneId?: string;
                        unbondingTime?: any;
                        status?: _104.HostZoneUnbonding_Status;
                        userRedemptionRecords?: string[];
                    }[];
                }[];
                pagination?: {
                    nextKey?: Uint8Array;
                    total?: any;
                };
            }): _105.QueryAllEpochUnbondingRecordResponse;
        };
        depositRecord_StatusFromJSON(object: any): _104.DepositRecord_Status;
        depositRecord_StatusToJSON(object: _104.DepositRecord_Status): string;
        depositRecord_SourceFromJSON(object: any): _104.DepositRecord_Source;
        depositRecord_SourceToJSON(object: _104.DepositRecord_Source): string;
        hostZoneUnbonding_StatusFromJSON(object: any): _104.HostZoneUnbonding_Status;
        hostZoneUnbonding_StatusToJSON(object: _104.HostZoneUnbonding_Status): string;
        DepositRecord_Status: typeof _104.DepositRecord_Status;
        DepositRecord_StatusSDKType: typeof _104.DepositRecord_StatusSDKType;
        DepositRecord_Source: typeof _104.DepositRecord_Source;
        DepositRecord_SourceSDKType: typeof _104.DepositRecord_SourceSDKType;
        HostZoneUnbonding_Status: typeof _104.HostZoneUnbonding_Status;
        HostZoneUnbonding_StatusSDKType: typeof _104.HostZoneUnbonding_StatusSDKType;
        UserRedemptionRecord: {
            encode(message: _104.UserRedemptionRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.UserRedemptionRecord;
            fromPartial(object: {
                id?: string;
                sender?: string;
                receiver?: string;
                amount?: any;
                denom?: string;
                hostZoneId?: string;
                epochNumber?: any;
                claimIsPending?: boolean;
            }): _104.UserRedemptionRecord;
        };
        Params: {
            encode(_: _104.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.Params;
            fromPartial(_: {}): _104.Params;
        };
        RecordsPacketData: {
            encode(message: _104.RecordsPacketData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.RecordsPacketData;
            fromPartial(object: {
                noData?: {};
            }): _104.RecordsPacketData;
        };
        NoData: {
            encode(_: _104.NoData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.NoData;
            fromPartial(_: {}): _104.NoData;
        };
        DepositRecord: {
            encode(message: _104.DepositRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.DepositRecord;
            fromPartial(object: {
                id?: any;
                amount?: any;
                denom?: string;
                hostZoneId?: string;
                status?: _104.DepositRecord_Status;
                depositEpochNumber?: any;
                source?: _104.DepositRecord_Source;
            }): _104.DepositRecord;
        };
        HostZoneUnbonding: {
            encode(message: _104.HostZoneUnbonding, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.HostZoneUnbonding;
            fromPartial(object: {
                stTokenAmount?: any;
                nativeTokenAmount?: any;
                denom?: string;
                hostZoneId?: string;
                unbondingTime?: any;
                status?: _104.HostZoneUnbonding_Status;
                userRedemptionRecords?: string[];
            }): _104.HostZoneUnbonding;
        };
        EpochUnbondingRecord: {
            encode(message: _104.EpochUnbondingRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.EpochUnbondingRecord;
            fromPartial(object: {
                epochNumber?: any;
                hostZoneUnbondings?: {
                    stTokenAmount?: any;
                    nativeTokenAmount?: any;
                    denom?: string;
                    hostZoneId?: string;
                    unbondingTime?: any;
                    status?: _104.HostZoneUnbonding_Status;
                    userRedemptionRecords?: string[];
                }[];
            }): _104.EpochUnbondingRecord;
        };
        GenesisState: {
            encode(message: _104.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.GenesisState;
            fromPartial(object: {
                params?: {};
                portId?: string;
                userRedemptionRecordList?: {
                    id?: string;
                    sender?: string;
                    receiver?: string;
                    amount?: any;
                    denom?: string;
                    hostZoneId?: string;
                    epochNumber?: any;
                    claimIsPending?: boolean;
                }[];
                userRedemptionRecordCount?: any;
                epochUnbondingRecordList?: {
                    epochNumber?: any;
                    hostZoneUnbondings?: {
                        stTokenAmount?: any;
                        nativeTokenAmount?: any;
                        denom?: string;
                        hostZoneId?: string;
                        unbondingTime?: any;
                        status?: _104.HostZoneUnbonding_Status;
                        userRedemptionRecords?: string[];
                    }[];
                }[];
                depositRecordList?: {
                    id?: any;
                    amount?: any;
                    denom?: string;
                    hostZoneId?: string;
                    status?: _104.DepositRecord_Status;
                    depositEpochNumber?: any;
                    source?: _104.DepositRecord_Source;
                }[];
                depositRecordCount?: any;
            }): _104.GenesisState;
        };
        TransferCallback: {
            encode(message: _103.TransferCallback, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.TransferCallback;
            fromPartial(object: {
                depositRecordId?: any;
            }): _103.TransferCallback;
        };
    };
    const stakeibc: {
        MsgClientImpl: typeof _208.MsgClientImpl;
        QueryClientImpl: typeof _206.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            params(request?: _116.QueryParamsRequest): Promise<_116.QueryParamsResponse>;
            validators(request: _116.QueryGetValidatorsRequest): Promise<_116.QueryGetValidatorsResponse>;
            iCAAccount(request?: _116.QueryGetICAAccountRequest): Promise<_116.QueryGetICAAccountResponse>;
            hostZone(request: _116.QueryGetHostZoneRequest): Promise<_116.QueryGetHostZoneResponse>;
            hostZoneAll(request?: _116.QueryAllHostZoneRequest): Promise<_116.QueryAllHostZoneResponse>;
            moduleAddress(request: _116.QueryModuleAddressRequest): Promise<_116.QueryModuleAddressResponse>;
            interchainAccountFromAddress(request: _116.QueryInterchainAccountFromAddressRequest): Promise<_116.QueryInterchainAccountFromAddressResponse>;
            epochTracker(request: _116.QueryGetEpochTrackerRequest): Promise<_116.QueryGetEpochTrackerResponse>;
            epochTrackerAll(request?: _116.QueryAllEpochTrackerRequest): Promise<_116.QueryAllEpochTrackerResponse>;
        };
        LCDQueryClient: typeof _201.LCDQueryClient;
        registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                liquidStake(value: _117.MsgLiquidStake): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                redeemStake(value: _117.MsgRedeemStake): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                registerHostZone(value: _117.MsgRegisterHostZone): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                claimUndelegatedTokens(value: _117.MsgClaimUndelegatedTokens): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                rebalanceValidators(value: _117.MsgRebalanceValidators): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                addValidator(value: _117.MsgAddValidator): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                changeValidatorWeight(value: _117.MsgChangeValidatorWeight): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                deleteValidator(value: _117.MsgDeleteValidator): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                restoreInterchainAccount(value: _117.MsgRestoreInterchainAccount): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                updateValidatorSharesExchRate(value: _117.MsgUpdateValidatorSharesExchRate): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                clearBalance(value: _117.MsgClearBalance): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                liquidStake(value: _117.MsgLiquidStake): {
                    typeUrl: string;
                    value: _117.MsgLiquidStake;
                };
                redeemStake(value: _117.MsgRedeemStake): {
                    typeUrl: string;
                    value: _117.MsgRedeemStake;
                };
                registerHostZone(value: _117.MsgRegisterHostZone): {
                    typeUrl: string;
                    value: _117.MsgRegisterHostZone;
                };
                claimUndelegatedTokens(value: _117.MsgClaimUndelegatedTokens): {
                    typeUrl: string;
                    value: _117.MsgClaimUndelegatedTokens;
                };
                rebalanceValidators(value: _117.MsgRebalanceValidators): {
                    typeUrl: string;
                    value: _117.MsgRebalanceValidators;
                };
                addValidator(value: _117.MsgAddValidator): {
                    typeUrl: string;
                    value: _117.MsgAddValidator;
                };
                changeValidatorWeight(value: _117.MsgChangeValidatorWeight): {
                    typeUrl: string;
                    value: _117.MsgChangeValidatorWeight;
                };
                deleteValidator(value: _117.MsgDeleteValidator): {
                    typeUrl: string;
                    value: _117.MsgDeleteValidator;
                };
                restoreInterchainAccount(value: _117.MsgRestoreInterchainAccount): {
                    typeUrl: string;
                    value: _117.MsgRestoreInterchainAccount;
                };
                updateValidatorSharesExchRate(value: _117.MsgUpdateValidatorSharesExchRate): {
                    typeUrl: string;
                    value: _117.MsgUpdateValidatorSharesExchRate;
                };
                clearBalance(value: _117.MsgClearBalance): {
                    typeUrl: string;
                    value: _117.MsgClearBalance;
                };
            };
            fromPartial: {
                liquidStake(value: _117.MsgLiquidStake): {
                    typeUrl: string;
                    value: _117.MsgLiquidStake;
                };
                redeemStake(value: _117.MsgRedeemStake): {
                    typeUrl: string;
                    value: _117.MsgRedeemStake;
                };
                registerHostZone(value: _117.MsgRegisterHostZone): {
                    typeUrl: string;
                    value: _117.MsgRegisterHostZone;
                };
                claimUndelegatedTokens(value: _117.MsgClaimUndelegatedTokens): {
                    typeUrl: string;
                    value: _117.MsgClaimUndelegatedTokens;
                };
                rebalanceValidators(value: _117.MsgRebalanceValidators): {
                    typeUrl: string;
                    value: _117.MsgRebalanceValidators;
                };
                addValidator(value: _117.MsgAddValidator): {
                    typeUrl: string;
                    value: _117.MsgAddValidator;
                };
                changeValidatorWeight(value: _117.MsgChangeValidatorWeight): {
                    typeUrl: string;
                    value: _117.MsgChangeValidatorWeight;
                };
                deleteValidator(value: _117.MsgDeleteValidator): {
                    typeUrl: string;
                    value: _117.MsgDeleteValidator;
                };
                restoreInterchainAccount(value: _117.MsgRestoreInterchainAccount): {
                    typeUrl: string;
                    value: _117.MsgRestoreInterchainAccount;
                };
                updateValidatorSharesExchRate(value: _117.MsgUpdateValidatorSharesExchRate): {
                    typeUrl: string;
                    value: _117.MsgUpdateValidatorSharesExchRate;
                };
                clearBalance(value: _117.MsgClearBalance): {
                    typeUrl: string;
                    value: _117.MsgClearBalance;
                };
            };
        };
        AminoConverter: {
            "/stride.stakeibc.MsgLiquidStake": {
                aminoType: string;
                toAmino: ({ creator, amount, hostDenom }: _117.MsgLiquidStake) => {
                    creator: string;
                    amount: string;
                    host_denom: string;
                };
                fromAmino: ({ creator, amount, host_denom }: {
                    creator: string;
                    amount: string;
                    host_denom: string;
                }) => _117.MsgLiquidStake;
            };
            "/stride.stakeibc.MsgRedeemStake": {
                aminoType: string;
                toAmino: ({ creator, amount, hostZone, receiver }: _117.MsgRedeemStake) => {
                    creator: string;
                    amount: string;
                    host_zone: string;
                    receiver: string;
                };
                fromAmino: ({ creator, amount, host_zone, receiver }: {
                    creator: string;
                    amount: string;
                    host_zone: string;
                    receiver: string;
                }) => _117.MsgRedeemStake;
            };
            "/stride.stakeibc.MsgRegisterHostZone": {
                aminoType: string;
                toAmino: ({ connectionId, bech32prefix, hostDenom, ibcDenom, creator, transferChannelId, unbondingFrequency }: _117.MsgRegisterHostZone) => {
                    connection_id: string;
                    bech32prefix: string;
                    host_denom: string;
                    ibc_denom: string;
                    creator: string;
                    transfer_channel_id: string;
                    unbonding_frequency: string;
                };
                fromAmino: ({ connection_id, bech32prefix, host_denom, ibc_denom, creator, transfer_channel_id, unbonding_frequency }: {
                    connection_id: string;
                    bech32prefix: string;
                    host_denom: string;
                    ibc_denom: string;
                    creator: string;
                    transfer_channel_id: string;
                    unbonding_frequency: string;
                }) => _117.MsgRegisterHostZone;
            };
            "/stride.stakeibc.MsgClaimUndelegatedTokens": {
                aminoType: string;
                toAmino: ({ creator, hostZoneId, epoch, sender }: _117.MsgClaimUndelegatedTokens) => {
                    creator: string;
                    host_zone_id: string;
                    epoch: string;
                    sender: string;
                };
                fromAmino: ({ creator, host_zone_id, epoch, sender }: {
                    creator: string;
                    host_zone_id: string;
                    epoch: string;
                    sender: string;
                }) => _117.MsgClaimUndelegatedTokens;
            };
            "/stride.stakeibc.MsgRebalanceValidators": {
                aminoType: string;
                toAmino: ({ creator, hostZone, numRebalance }: _117.MsgRebalanceValidators) => {
                    creator: string;
                    host_zone: string;
                    num_rebalance: string;
                };
                fromAmino: ({ creator, host_zone, num_rebalance }: {
                    creator: string;
                    host_zone: string;
                    num_rebalance: string;
                }) => _117.MsgRebalanceValidators;
            };
            "/stride.stakeibc.MsgAddValidator": {
                aminoType: string;
                toAmino: ({ creator, hostZone, name, address, commission, weight }: _117.MsgAddValidator) => {
                    creator: string;
                    host_zone: string;
                    name: string;
                    address: string;
                    commission: string;
                    weight: string;
                };
                fromAmino: ({ creator, host_zone, name, address, commission, weight }: {
                    creator: string;
                    host_zone: string;
                    name: string;
                    address: string;
                    commission: string;
                    weight: string;
                }) => _117.MsgAddValidator;
            };
            "/stride.stakeibc.MsgChangeValidatorWeight": {
                aminoType: string;
                toAmino: ({ creator, hostZone, valAddr, weight }: _117.MsgChangeValidatorWeight) => {
                    creator: string;
                    host_zone: string;
                    val_addr: string;
                    weight: string;
                };
                fromAmino: ({ creator, host_zone, val_addr, weight }: {
                    creator: string;
                    host_zone: string;
                    val_addr: string;
                    weight: string;
                }) => _117.MsgChangeValidatorWeight;
            };
            "/stride.stakeibc.MsgDeleteValidator": {
                aminoType: string;
                toAmino: ({ creator, hostZone, valAddr }: _117.MsgDeleteValidator) => {
                    creator: string;
                    host_zone: string;
                    val_addr: string;
                };
                fromAmino: ({ creator, host_zone, val_addr }: {
                    creator: string;
                    host_zone: string;
                    val_addr: string;
                }) => _117.MsgDeleteValidator;
            };
            "/stride.stakeibc.MsgRestoreInterchainAccount": {
                aminoType: string;
                toAmino: ({ creator, chainId, accountType }: _117.MsgRestoreInterchainAccount) => {
                    creator: string;
                    chain_id: string;
                    account_type: number;
                };
                fromAmino: ({ creator, chain_id, account_type }: {
                    creator: string;
                    chain_id: string;
                    account_type: number;
                }) => _117.MsgRestoreInterchainAccount;
            };
            "/stride.stakeibc.MsgUpdateValidatorSharesExchRate": {
                aminoType: string;
                toAmino: ({ creator, chainId, valoper }: _117.MsgUpdateValidatorSharesExchRate) => {
                    creator: string;
                    chain_id: string;
                    valoper: string;
                };
                fromAmino: ({ creator, chain_id, valoper }: {
                    creator: string;
                    chain_id: string;
                    valoper: string;
                }) => _117.MsgUpdateValidatorSharesExchRate;
            };
            "/stride.stakeibc.MsgClearBalance": {
                aminoType: string;
                toAmino: ({ creator, chainId, amount, channel }: _117.MsgClearBalance) => {
                    creator: string;
                    chain_id: string;
                    amount: string;
                    channel: string;
                };
                fromAmino: ({ creator, chain_id, amount, channel }: {
                    creator: string;
                    chain_id: string;
                    amount: string;
                    channel: string;
                }) => _117.MsgClearBalance;
            };
        };
        validator_ValidatorStatusFromJSON(object: any): _118.Validator_ValidatorStatus;
        validator_ValidatorStatusToJSON(object: _118.Validator_ValidatorStatus): string;
        Validator_ValidatorStatus: typeof _118.Validator_ValidatorStatus;
        Validator_ValidatorStatusSDKType: typeof _118.Validator_ValidatorStatusSDKType;
        ValidatorExchangeRate: {
            encode(message: _118.ValidatorExchangeRate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.ValidatorExchangeRate;
            fromPartial(object: {
                internalTokensToSharesRate?: string;
                epochNumber?: any;
            }): _118.ValidatorExchangeRate;
        };
        Validator: {
            encode(message: _118.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.Validator;
            fromPartial(object: {
                name?: string;
                address?: string;
                status?: _118.Validator_ValidatorStatus;
                commissionRate?: any;
                delegationAmt?: any;
                weight?: any;
                internalExchangeRate?: {
                    internalTokensToSharesRate?: string;
                    epochNumber?: any;
                };
            }): _118.Validator;
        };
        MsgLiquidStake: {
            encode(message: _117.MsgLiquidStake, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.MsgLiquidStake;
            fromPartial(object: {
                creator?: string;
                amount?: any;
                hostDenom?: string;
            }): _117.MsgLiquidStake;
        };
        MsgLiquidStakeResponse: {
            encode(_: _117.MsgLiquidStakeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.MsgLiquidStakeResponse;
            fromPartial(_: {}): _117.MsgLiquidStakeResponse;
        };
        MsgClearBalance: {
            encode(message: _117.MsgClearBalance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.MsgClearBalance;
            fromPartial(object: {
                creator?: string;
                chainId?: string;
                amount?: any;
                channel?: string;
            }): _117.MsgClearBalance;
        };
        MsgClearBalanceResponse: {
            encode(_: _117.MsgClearBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.MsgClearBalanceResponse;
            fromPartial(_: {}): _117.MsgClearBalanceResponse;
        };
        MsgRedeemStake: {
            encode(message: _117.MsgRedeemStake, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.MsgRedeemStake;
            fromPartial(object: {
                creator?: string;
                amount?: any;
                hostZone?: string;
                receiver?: string;
            }): _117.MsgRedeemStake;
        };
        MsgRedeemStakeResponse: {
            encode(_: _117.MsgRedeemStakeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.MsgRedeemStakeResponse;
            fromPartial(_: {}): _117.MsgRedeemStakeResponse;
        };
        MsgRegisterHostZone: {
            encode(message: _117.MsgRegisterHostZone, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.MsgRegisterHostZone;
            fromPartial(object: {
                connectionId?: string;
                bech32prefix?: string;
                hostDenom?: string;
                ibcDenom?: string;
                creator?: string;
                transferChannelId?: string;
                unbondingFrequency?: any;
            }): _117.MsgRegisterHostZone;
        };
        MsgRegisterHostZoneResponse: {
            encode(_: _117.MsgRegisterHostZoneResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.MsgRegisterHostZoneResponse;
            fromPartial(_: {}): _117.MsgRegisterHostZoneResponse;
        };
        MsgClaimUndelegatedTokens: {
            encode(message: _117.MsgClaimUndelegatedTokens, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.MsgClaimUndelegatedTokens;
            fromPartial(object: {
                creator?: string;
                hostZoneId?: string;
                epoch?: any;
                sender?: string;
            }): _117.MsgClaimUndelegatedTokens;
        };
        MsgClaimUndelegatedTokensResponse: {
            encode(_: _117.MsgClaimUndelegatedTokensResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.MsgClaimUndelegatedTokensResponse;
            fromPartial(_: {}): _117.MsgClaimUndelegatedTokensResponse;
        };
        MsgRebalanceValidators: {
            encode(message: _117.MsgRebalanceValidators, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.MsgRebalanceValidators;
            fromPartial(object: {
                creator?: string;
                hostZone?: string;
                numRebalance?: any;
            }): _117.MsgRebalanceValidators;
        };
        MsgRebalanceValidatorsResponse: {
            encode(_: _117.MsgRebalanceValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.MsgRebalanceValidatorsResponse;
            fromPartial(_: {}): _117.MsgRebalanceValidatorsResponse;
        };
        MsgAddValidator: {
            encode(message: _117.MsgAddValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.MsgAddValidator;
            fromPartial(object: {
                creator?: string;
                hostZone?: string;
                name?: string;
                address?: string;
                commission?: any;
                weight?: any;
            }): _117.MsgAddValidator;
        };
        MsgAddValidatorResponse: {
            encode(_: _117.MsgAddValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.MsgAddValidatorResponse;
            fromPartial(_: {}): _117.MsgAddValidatorResponse;
        };
        MsgChangeValidatorWeight: {
            encode(message: _117.MsgChangeValidatorWeight, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.MsgChangeValidatorWeight;
            fromPartial(object: {
                creator?: string;
                hostZone?: string;
                valAddr?: string;
                weight?: any;
            }): _117.MsgChangeValidatorWeight;
        };
        MsgChangeValidatorWeightResponse: {
            encode(_: _117.MsgChangeValidatorWeightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.MsgChangeValidatorWeightResponse;
            fromPartial(_: {}): _117.MsgChangeValidatorWeightResponse;
        };
        MsgDeleteValidator: {
            encode(message: _117.MsgDeleteValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.MsgDeleteValidator;
            fromPartial(object: {
                creator?: string;
                hostZone?: string;
                valAddr?: string;
            }): _117.MsgDeleteValidator;
        };
        MsgDeleteValidatorResponse: {
            encode(_: _117.MsgDeleteValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.MsgDeleteValidatorResponse;
            fromPartial(_: {}): _117.MsgDeleteValidatorResponse;
        };
        MsgRestoreInterchainAccount: {
            encode(message: _117.MsgRestoreInterchainAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.MsgRestoreInterchainAccount;
            fromPartial(object: {
                creator?: string;
                chainId?: string;
                accountType?: _112.ICAAccountType;
            }): _117.MsgRestoreInterchainAccount;
        };
        MsgRestoreInterchainAccountResponse: {
            encode(_: _117.MsgRestoreInterchainAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.MsgRestoreInterchainAccountResponse;
            fromPartial(_: {}): _117.MsgRestoreInterchainAccountResponse;
        };
        MsgUpdateValidatorSharesExchRate: {
            encode(message: _117.MsgUpdateValidatorSharesExchRate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.MsgUpdateValidatorSharesExchRate;
            fromPartial(object: {
                creator?: string;
                chainId?: string;
                valoper?: string;
            }): _117.MsgUpdateValidatorSharesExchRate;
        };
        MsgUpdateValidatorSharesExchRateResponse: {
            encode(_: _117.MsgUpdateValidatorSharesExchRateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.MsgUpdateValidatorSharesExchRateResponse;
            fromPartial(_: {}): _117.MsgUpdateValidatorSharesExchRateResponse;
        };
        QueryInterchainAccountFromAddressRequest: {
            encode(message: _116.QueryInterchainAccountFromAddressRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.QueryInterchainAccountFromAddressRequest;
            fromPartial(object: {
                owner?: string;
                connectionId?: string;
            }): _116.QueryInterchainAccountFromAddressRequest;
        };
        QueryInterchainAccountFromAddressResponse: {
            encode(message: _116.QueryInterchainAccountFromAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.QueryInterchainAccountFromAddressResponse;
            fromPartial(object: {
                interchainAccountAddress?: string;
            }): _116.QueryInterchainAccountFromAddressResponse;
        };
        QueryParamsRequest: {
            encode(_: _116.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.QueryParamsRequest;
            fromPartial(_: {}): _116.QueryParamsRequest;
        };
        QueryParamsResponse: {
            encode(message: _116.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.QueryParamsResponse;
            fromPartial(object: {
                params?: {
                    rewardsInterval?: any;
                    delegateInterval?: any;
                    depositInterval?: any;
                    redemptionRateInterval?: any;
                    strideCommission?: any;
                    zoneComAddress?: {
                        [x: string]: string;
                    };
                    reinvestInterval?: any;
                    validatorRebalancingThreshold?: any;
                    icaTimeoutNanos?: any;
                    bufferSize?: any;
                    ibcTimeoutBlocks?: any;
                    feeTransferTimeoutNanos?: any;
                    maxStakeIcaCallsPerEpoch?: any;
                    safetyMinRedemptionRateThreshold?: any;
                    safetyMaxRedemptionRateThreshold?: any;
                    ibcTransferTimeoutNanos?: any;
                    safetyNumValidators?: any;
                };
            }): _116.QueryParamsResponse;
        };
        QueryGetValidatorsRequest: {
            encode(message: _116.QueryGetValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.QueryGetValidatorsRequest;
            fromPartial(object: {
                chainId?: string;
            }): _116.QueryGetValidatorsRequest;
        };
        QueryGetValidatorsResponse: {
            encode(message: _116.QueryGetValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.QueryGetValidatorsResponse;
            fromPartial(object: {
                validators?: {
                    name?: string;
                    address?: string;
                    status?: _118.Validator_ValidatorStatus;
                    commissionRate?: any;
                    delegationAmt?: any;
                    weight?: any;
                    internalExchangeRate?: {
                        internalTokensToSharesRate?: string;
                        epochNumber?: any;
                    };
                }[];
            }): _116.QueryGetValidatorsResponse;
        };
        QueryGetICAAccountRequest: {
            encode(_: _116.QueryGetICAAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.QueryGetICAAccountRequest;
            fromPartial(_: {}): _116.QueryGetICAAccountRequest;
        };
        QueryGetICAAccountResponse: {
            encode(message: _116.QueryGetICAAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.QueryGetICAAccountResponse;
            fromPartial(object: {
                icaAccount?: {
                    address?: string;
                    delegations?: {
                        delegateAcctAddress?: string;
                        validator?: {
                            name?: string;
                            address?: string;
                            status?: _118.Validator_ValidatorStatus;
                            commissionRate?: any;
                            delegationAmt?: any;
                            weight?: any;
                            internalExchangeRate?: {
                                internalTokensToSharesRate?: string;
                                epochNumber?: any;
                            };
                        };
                        amt?: any;
                    }[];
                    target?: _112.ICAAccountType;
                };
            }): _116.QueryGetICAAccountResponse;
        };
        QueryGetHostZoneRequest: {
            encode(message: _116.QueryGetHostZoneRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.QueryGetHostZoneRequest;
            fromPartial(object: {
                chainId?: string;
            }): _116.QueryGetHostZoneRequest;
        };
        QueryGetHostZoneResponse: {
            encode(message: _116.QueryGetHostZoneResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.QueryGetHostZoneResponse;
            fromPartial(object: {
                hostZone?: {
                    chainId?: string;
                    connectionId?: string;
                    bech32prefix?: string;
                    transferChannelId?: string;
                    validators?: {
                        name?: string;
                        address?: string;
                        status?: _118.Validator_ValidatorStatus;
                        commissionRate?: any;
                        delegationAmt?: any;
                        weight?: any;
                        internalExchangeRate?: {
                            internalTokensToSharesRate?: string;
                            epochNumber?: any;
                        };
                    }[];
                    blacklistedValidators?: {
                        name?: string;
                        address?: string;
                        status?: _118.Validator_ValidatorStatus;
                        commissionRate?: any;
                        delegationAmt?: any;
                        weight?: any;
                        internalExchangeRate?: {
                            internalTokensToSharesRate?: string;
                            epochNumber?: any;
                        };
                    }[];
                    withdrawalAccount?: {
                        address?: string;
                        delegations?: {
                            delegateAcctAddress?: string;
                            validator?: {
                                name?: string;
                                address?: string;
                                status?: _118.Validator_ValidatorStatus;
                                commissionRate?: any;
                                delegationAmt?: any;
                                weight?: any;
                                internalExchangeRate?: {
                                    internalTokensToSharesRate?: string;
                                    epochNumber?: any;
                                };
                            };
                            amt?: any;
                        }[];
                        target?: _112.ICAAccountType;
                    };
                    feeAccount?: {
                        address?: string;
                        delegations?: {
                            delegateAcctAddress?: string;
                            validator?: {
                                name?: string;
                                address?: string;
                                status?: _118.Validator_ValidatorStatus;
                                commissionRate?: any;
                                delegationAmt?: any;
                                weight?: any;
                                internalExchangeRate?: {
                                    internalTokensToSharesRate?: string;
                                    epochNumber?: any;
                                };
                            };
                            amt?: any;
                        }[];
                        target?: _112.ICAAccountType;
                    };
                    delegationAccount?: {
                        address?: string;
                        delegations?: {
                            delegateAcctAddress?: string;
                            validator?: {
                                name?: string;
                                address?: string;
                                status?: _118.Validator_ValidatorStatus;
                                commissionRate?: any;
                                delegationAmt?: any;
                                weight?: any;
                                internalExchangeRate?: {
                                    internalTokensToSharesRate?: string;
                                    epochNumber?: any;
                                };
                            };
                            amt?: any;
                        }[];
                        target?: _112.ICAAccountType;
                    };
                    redemptionAccount?: {
                        address?: string;
                        delegations?: {
                            delegateAcctAddress?: string;
                            validator?: {
                                name?: string;
                                address?: string;
                                status?: _118.Validator_ValidatorStatus;
                                commissionRate?: any;
                                delegationAmt?: any;
                                weight?: any;
                                internalExchangeRate?: {
                                    internalTokensToSharesRate?: string;
                                    epochNumber?: any;
                                };
                            };
                            amt?: any;
                        }[];
                        target?: _112.ICAAccountType;
                    };
                    ibcDenom?: string;
                    hostDenom?: string;
                    lastRedemptionRate?: string;
                    redemptionRate?: string;
                    unbondingFrequency?: any;
                    stakedBal?: any;
                    address?: string;
                };
            }): _116.QueryGetHostZoneResponse;
        };
        QueryAllHostZoneRequest: {
            encode(message: _116.QueryAllHostZoneRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.QueryAllHostZoneRequest;
            fromPartial(object: {
                pagination?: {
                    key?: Uint8Array;
                    offset?: any;
                    limit?: any;
                    countTotal?: boolean;
                    reverse?: boolean;
                };
            }): _116.QueryAllHostZoneRequest;
        };
        QueryAllHostZoneResponse: {
            encode(message: _116.QueryAllHostZoneResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.QueryAllHostZoneResponse;
            fromPartial(object: {
                hostZone?: {
                    chainId?: string;
                    connectionId?: string;
                    bech32prefix?: string;
                    transferChannelId?: string;
                    validators?: {
                        name?: string;
                        address?: string;
                        status?: _118.Validator_ValidatorStatus;
                        commissionRate?: any;
                        delegationAmt?: any;
                        weight?: any;
                        internalExchangeRate?: {
                            internalTokensToSharesRate?: string;
                            epochNumber?: any;
                        };
                    }[];
                    blacklistedValidators?: {
                        name?: string;
                        address?: string;
                        status?: _118.Validator_ValidatorStatus;
                        commissionRate?: any;
                        delegationAmt?: any;
                        weight?: any;
                        internalExchangeRate?: {
                            internalTokensToSharesRate?: string;
                            epochNumber?: any;
                        };
                    }[];
                    withdrawalAccount?: {
                        address?: string;
                        delegations?: {
                            delegateAcctAddress?: string;
                            validator?: {
                                name?: string;
                                address?: string;
                                status?: _118.Validator_ValidatorStatus;
                                commissionRate?: any;
                                delegationAmt?: any;
                                weight?: any;
                                internalExchangeRate?: {
                                    internalTokensToSharesRate?: string;
                                    epochNumber?: any;
                                };
                            };
                            amt?: any;
                        }[];
                        target?: _112.ICAAccountType;
                    };
                    feeAccount?: {
                        address?: string;
                        delegations?: {
                            delegateAcctAddress?: string;
                            validator?: {
                                name?: string;
                                address?: string;
                                status?: _118.Validator_ValidatorStatus;
                                commissionRate?: any;
                                delegationAmt?: any;
                                weight?: any;
                                internalExchangeRate?: {
                                    internalTokensToSharesRate?: string;
                                    epochNumber?: any;
                                };
                            };
                            amt?: any;
                        }[];
                        target?: _112.ICAAccountType;
                    };
                    delegationAccount?: {
                        address?: string;
                        delegations?: {
                            delegateAcctAddress?: string;
                            validator?: {
                                name?: string;
                                address?: string;
                                status?: _118.Validator_ValidatorStatus;
                                commissionRate?: any;
                                delegationAmt?: any;
                                weight?: any;
                                internalExchangeRate?: {
                                    internalTokensToSharesRate?: string;
                                    epochNumber?: any;
                                };
                            };
                            amt?: any;
                        }[];
                        target?: _112.ICAAccountType;
                    };
                    redemptionAccount?: {
                        address?: string;
                        delegations?: {
                            delegateAcctAddress?: string;
                            validator?: {
                                name?: string;
                                address?: string;
                                status?: _118.Validator_ValidatorStatus;
                                commissionRate?: any;
                                delegationAmt?: any;
                                weight?: any;
                                internalExchangeRate?: {
                                    internalTokensToSharesRate?: string;
                                    epochNumber?: any;
                                };
                            };
                            amt?: any;
                        }[];
                        target?: _112.ICAAccountType;
                    };
                    ibcDenom?: string;
                    hostDenom?: string;
                    lastRedemptionRate?: string;
                    redemptionRate?: string;
                    unbondingFrequency?: any;
                    stakedBal?: any;
                    address?: string;
                }[];
                pagination?: {
                    nextKey?: Uint8Array;
                    total?: any;
                };
            }): _116.QueryAllHostZoneResponse;
        };
        QueryModuleAddressRequest: {
            encode(message: _116.QueryModuleAddressRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.QueryModuleAddressRequest;
            fromPartial(object: {
                name?: string;
            }): _116.QueryModuleAddressRequest;
        };
        QueryModuleAddressResponse: {
            encode(message: _116.QueryModuleAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.QueryModuleAddressResponse;
            fromPartial(object: {
                addr?: string;
            }): _116.QueryModuleAddressResponse;
        };
        QueryGetEpochTrackerRequest: {
            encode(message: _116.QueryGetEpochTrackerRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.QueryGetEpochTrackerRequest;
            fromPartial(object: {
                epochIdentifier?: string;
            }): _116.QueryGetEpochTrackerRequest;
        };
        QueryGetEpochTrackerResponse: {
            encode(message: _116.QueryGetEpochTrackerResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.QueryGetEpochTrackerResponse;
            fromPartial(object: {
                epochTracker?: {
                    epochIdentifier?: string;
                    epochNumber?: any;
                    nextEpochStartTime?: any;
                    duration?: any;
                };
            }): _116.QueryGetEpochTrackerResponse;
        };
        QueryAllEpochTrackerRequest: {
            encode(message: _116.QueryAllEpochTrackerRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.QueryAllEpochTrackerRequest;
            fromPartial(object: {
                pagination?: {
                    key?: Uint8Array;
                    offset?: any;
                    limit?: any;
                    countTotal?: boolean;
                    reverse?: boolean;
                };
            }): _116.QueryAllEpochTrackerRequest;
        };
        QueryAllEpochTrackerResponse: {
            encode(message: _116.QueryAllEpochTrackerResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.QueryAllEpochTrackerResponse;
            fromPartial(object: {
                epochTracker?: {
                    epochIdentifier?: string;
                    epochNumber?: any;
                    nextEpochStartTime?: any;
                    duration?: any;
                }[];
                pagination?: {
                    nextKey?: Uint8Array;
                    total?: any;
                };
            }): _116.QueryAllEpochTrackerResponse;
        };
        Params_ZoneComAddressEntry: {
            encode(message: _115.Params_ZoneComAddressEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.Params_ZoneComAddressEntry;
            fromPartial(object: {
                key?: string;
                value?: string;
            }): _115.Params_ZoneComAddressEntry;
        };
        Params: {
            encode(message: _115.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.Params;
            fromPartial(object: {
                rewardsInterval?: any;
                delegateInterval?: any;
                depositInterval?: any;
                redemptionRateInterval?: any;
                strideCommission?: any;
                zoneComAddress?: {
                    [x: string]: string;
                };
                reinvestInterval?: any;
                validatorRebalancingThreshold?: any;
                icaTimeoutNanos?: any;
                bufferSize?: any;
                ibcTimeoutBlocks?: any;
                feeTransferTimeoutNanos?: any;
                maxStakeIcaCallsPerEpoch?: any;
                safetyMinRedemptionRateThreshold?: any;
                safetyMaxRedemptionRateThreshold?: any;
                ibcTransferTimeoutNanos?: any;
                safetyNumValidators?: any;
            }): _115.Params;
        };
        StakeibcPacketData: {
            encode(message: _114.StakeibcPacketData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.StakeibcPacketData;
            fromPartial(object: {
                noData?: {};
            }): _114.StakeibcPacketData;
        };
        NoData: {
            encode(_: _114.NoData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.NoData;
            fromPartial(_: {}): _114.NoData;
        };
        MinValidatorRequirements: {
            encode(message: _113.MinValidatorRequirements, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.MinValidatorRequirements;
            fromPartial(object: {
                commissionRate?: number;
                uptime?: number;
            }): _113.MinValidatorRequirements;
        };
        iCAAccountTypeFromJSON(object: any): _112.ICAAccountType;
        iCAAccountTypeToJSON(object: _112.ICAAccountType): string;
        ICAAccountType: typeof _112.ICAAccountType;
        ICAAccountTypeSDKType: typeof _112.ICAAccountTypeSDKType;
        ICAAccount: {
            encode(message: _112.ICAAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.ICAAccount;
            fromPartial(object: {
                address?: string;
                delegations?: {
                    delegateAcctAddress?: string;
                    validator?: {
                        name?: string;
                        address?: string;
                        status?: _118.Validator_ValidatorStatus;
                        commissionRate?: any;
                        delegationAmt?: any;
                        weight?: any;
                        internalExchangeRate?: {
                            internalTokensToSharesRate?: string;
                            epochNumber?: any;
                        };
                    };
                    amt?: any;
                }[];
                target?: _112.ICAAccountType;
            }): _112.ICAAccount;
        };
        HostZone: {
            encode(message: _111.HostZone, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.HostZone;
            fromPartial(object: {
                chainId?: string;
                connectionId?: string;
                bech32prefix?: string;
                transferChannelId?: string;
                validators?: {
                    name?: string;
                    address?: string;
                    status?: _118.Validator_ValidatorStatus;
                    commissionRate?: any;
                    delegationAmt?: any;
                    weight?: any;
                    internalExchangeRate?: {
                        internalTokensToSharesRate?: string;
                        epochNumber?: any;
                    };
                }[];
                blacklistedValidators?: {
                    name?: string;
                    address?: string;
                    status?: _118.Validator_ValidatorStatus;
                    commissionRate?: any;
                    delegationAmt?: any;
                    weight?: any;
                    internalExchangeRate?: {
                        internalTokensToSharesRate?: string;
                        epochNumber?: any;
                    };
                }[];
                withdrawalAccount?: {
                    address?: string;
                    delegations?: {
                        delegateAcctAddress?: string;
                        validator?: {
                            name?: string;
                            address?: string;
                            status?: _118.Validator_ValidatorStatus;
                            commissionRate?: any;
                            delegationAmt?: any;
                            weight?: any;
                            internalExchangeRate?: {
                                internalTokensToSharesRate?: string;
                                epochNumber?: any;
                            };
                        };
                        amt?: any;
                    }[];
                    target?: _112.ICAAccountType;
                };
                feeAccount?: {
                    address?: string;
                    delegations?: {
                        delegateAcctAddress?: string;
                        validator?: {
                            name?: string;
                            address?: string;
                            status?: _118.Validator_ValidatorStatus;
                            commissionRate?: any;
                            delegationAmt?: any;
                            weight?: any;
                            internalExchangeRate?: {
                                internalTokensToSharesRate?: string;
                                epochNumber?: any;
                            };
                        };
                        amt?: any;
                    }[];
                    target?: _112.ICAAccountType;
                };
                delegationAccount?: {
                    address?: string;
                    delegations?: {
                        delegateAcctAddress?: string;
                        validator?: {
                            name?: string;
                            address?: string;
                            status?: _118.Validator_ValidatorStatus;
                            commissionRate?: any;
                            delegationAmt?: any;
                            weight?: any;
                            internalExchangeRate?: {
                                internalTokensToSharesRate?: string;
                                epochNumber?: any;
                            };
                        };
                        amt?: any;
                    }[];
                    target?: _112.ICAAccountType;
                };
                redemptionAccount?: {
                    address?: string;
                    delegations?: {
                        delegateAcctAddress?: string;
                        validator?: {
                            name?: string;
                            address?: string;
                            status?: _118.Validator_ValidatorStatus;
                            commissionRate?: any;
                            delegationAmt?: any;
                            weight?: any;
                            internalExchangeRate?: {
                                internalTokensToSharesRate?: string;
                                epochNumber?: any;
                            };
                        };
                        amt?: any;
                    }[];
                    target?: _112.ICAAccountType;
                };
                ibcDenom?: string;
                hostDenom?: string;
                lastRedemptionRate?: string;
                redemptionRate?: string;
                unbondingFrequency?: any;
                stakedBal?: any;
                address?: string;
            }): _111.HostZone;
        };
        AddValidatorProposal: {
            encode(message: _110.AddValidatorProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.AddValidatorProposal;
            fromPartial(object: {
                title?: string;
                description?: string;
                hostZone?: string;
                validatorName?: string;
                validatorAddress?: string;
            }): _110.AddValidatorProposal;
        };
        GenesisState_DenomToHostZoneEntry: {
            encode(message: _109.GenesisState_DenomToHostZoneEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.GenesisState_DenomToHostZoneEntry;
            fromPartial(object: {
                key?: string;
                value?: string;
            }): _109.GenesisState_DenomToHostZoneEntry;
        };
        GenesisState: {
            encode(message: _109.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.GenesisState;
            fromPartial(object: {
                params?: {
                    rewardsInterval?: any;
                    delegateInterval?: any;
                    depositInterval?: any;
                    redemptionRateInterval?: any;
                    strideCommission?: any;
                    zoneComAddress?: {
                        [x: string]: string;
                    };
                    reinvestInterval?: any;
                    validatorRebalancingThreshold?: any;
                    icaTimeoutNanos?: any;
                    bufferSize?: any;
                    ibcTimeoutBlocks?: any;
                    feeTransferTimeoutNanos?: any;
                    maxStakeIcaCallsPerEpoch?: any;
                    safetyMinRedemptionRateThreshold?: any;
                    safetyMaxRedemptionRateThreshold?: any;
                    ibcTransferTimeoutNanos?: any;
                    safetyNumValidators?: any;
                };
                portId?: string;
                icaAccount?: {
                    address?: string;
                    delegations?: {
                        delegateAcctAddress?: string;
                        validator?: {
                            name?: string;
                            address?: string;
                            status?: _118.Validator_ValidatorStatus;
                            commissionRate?: any;
                            delegationAmt?: any;
                            weight?: any;
                            internalExchangeRate?: {
                                internalTokensToSharesRate?: string;
                                epochNumber?: any;
                            };
                        };
                        amt?: any;
                    }[];
                    target?: _112.ICAAccountType;
                };
                hostZoneList?: {
                    chainId?: string;
                    connectionId?: string;
                    bech32prefix?: string;
                    transferChannelId?: string;
                    validators?: {
                        name?: string;
                        address?: string;
                        status?: _118.Validator_ValidatorStatus;
                        commissionRate?: any;
                        delegationAmt?: any;
                        weight?: any;
                        internalExchangeRate?: {
                            internalTokensToSharesRate?: string;
                            epochNumber?: any;
                        };
                    }[];
                    blacklistedValidators?: {
                        name?: string;
                        address?: string;
                        status?: _118.Validator_ValidatorStatus;
                        commissionRate?: any;
                        delegationAmt?: any;
                        weight?: any;
                        internalExchangeRate?: {
                            internalTokensToSharesRate?: string;
                            epochNumber?: any;
                        };
                    }[];
                    withdrawalAccount?: {
                        address?: string;
                        delegations?: {
                            delegateAcctAddress?: string;
                            validator?: {
                                name?: string;
                                address?: string;
                                status?: _118.Validator_ValidatorStatus;
                                commissionRate?: any;
                                delegationAmt?: any;
                                weight?: any;
                                internalExchangeRate?: {
                                    internalTokensToSharesRate?: string;
                                    epochNumber?: any;
                                };
                            };
                            amt?: any;
                        }[];
                        target?: _112.ICAAccountType;
                    };
                    feeAccount?: {
                        address?: string;
                        delegations?: {
                            delegateAcctAddress?: string;
                            validator?: {
                                name?: string;
                                address?: string;
                                status?: _118.Validator_ValidatorStatus;
                                commissionRate?: any;
                                delegationAmt?: any;
                                weight?: any;
                                internalExchangeRate?: {
                                    internalTokensToSharesRate?: string;
                                    epochNumber?: any;
                                };
                            };
                            amt?: any;
                        }[];
                        target?: _112.ICAAccountType;
                    };
                    delegationAccount?: {
                        address?: string;
                        delegations?: {
                            delegateAcctAddress?: string;
                            validator?: {
                                name?: string;
                                address?: string;
                                status?: _118.Validator_ValidatorStatus;
                                commissionRate?: any;
                                delegationAmt?: any;
                                weight?: any;
                                internalExchangeRate?: {
                                    internalTokensToSharesRate?: string;
                                    epochNumber?: any;
                                };
                            };
                            amt?: any;
                        }[];
                        target?: _112.ICAAccountType;
                    };
                    redemptionAccount?: {
                        address?: string;
                        delegations?: {
                            delegateAcctAddress?: string;
                            validator?: {
                                name?: string;
                                address?: string;
                                status?: _118.Validator_ValidatorStatus;
                                commissionRate?: any;
                                delegationAmt?: any;
                                weight?: any;
                                internalExchangeRate?: {
                                    internalTokensToSharesRate?: string;
                                    epochNumber?: any;
                                };
                            };
                            amt?: any;
                        }[];
                        target?: _112.ICAAccountType;
                    };
                    ibcDenom?: string;
                    hostDenom?: string;
                    lastRedemptionRate?: string;
                    redemptionRate?: string;
                    unbondingFrequency?: any;
                    stakedBal?: any;
                    address?: string;
                }[];
                hostZoneCount?: any;
                denomToHostZone?: {
                    [x: string]: string;
                };
                epochTrackerList?: {
                    epochIdentifier?: string;
                    epochNumber?: any;
                    nextEpochStartTime?: any;
                    duration?: any;
                }[];
            }): _109.GenesisState;
        };
        EpochTracker: {
            encode(message: _108.EpochTracker, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.EpochTracker;
            fromPartial(object: {
                epochIdentifier?: string;
                epochNumber?: any;
                nextEpochStartTime?: any;
                duration?: any;
            }): _108.EpochTracker;
        };
        Delegation: {
            encode(message: _107.Delegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.Delegation;
            fromPartial(object: {
                delegateAcctAddress?: string;
                validator?: {
                    name?: string;
                    address?: string;
                    status?: _118.Validator_ValidatorStatus;
                    commissionRate?: any;
                    delegationAmt?: any;
                    weight?: any;
                    internalExchangeRate?: {
                        internalTokensToSharesRate?: string;
                        epochNumber?: any;
                    };
                };
                amt?: any;
            }): _107.Delegation;
        };
        SplitDelegation: {
            encode(message: _106.SplitDelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.SplitDelegation;
            fromPartial(object: {
                validator?: string;
                amount?: any;
            }): _106.SplitDelegation;
        };
        DelegateCallback: {
            encode(message: _106.DelegateCallback, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.DelegateCallback;
            fromPartial(object: {
                hostZoneId?: string;
                depositRecordId?: any;
                splitDelegations?: {
                    validator?: string;
                    amount?: any;
                }[];
            }): _106.DelegateCallback;
        };
        ClaimCallback: {
            encode(message: _106.ClaimCallback, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.ClaimCallback;
            fromPartial(object: {
                userRedemptionRecordId?: string;
                chainId?: string;
                epochNumber?: any;
            }): _106.ClaimCallback;
        };
        ReinvestCallback: {
            encode(message: _106.ReinvestCallback, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.ReinvestCallback;
            fromPartial(object: {
                reinvestAmount?: {
                    denom?: string;
                    amount?: string;
                };
                hostZoneId?: string;
            }): _106.ReinvestCallback;
        };
        UndelegateCallback: {
            encode(message: _106.UndelegateCallback, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.UndelegateCallback;
            fromPartial(object: {
                hostZoneId?: string;
                splitDelegations?: {
                    validator?: string;
                    amount?: any;
                }[];
                epochUnbondingRecordIds?: any[];
            }): _106.UndelegateCallback;
        };
        RedemptionCallback: {
            encode(message: _106.RedemptionCallback, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.RedemptionCallback;
            fromPartial(object: {
                hostZoneId?: string;
                epochUnbondingRecordIds?: any[];
            }): _106.RedemptionCallback;
        };
        Rebalancing: {
            encode(message: _106.Rebalancing, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.Rebalancing;
            fromPartial(object: {
                srcValidator?: string;
                dstValidator?: string;
                amt?: any;
            }): _106.Rebalancing;
        };
        RebalanceCallback: {
            encode(message: _106.RebalanceCallback, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.RebalanceCallback;
            fromPartial(object: {
                hostZoneId?: string;
                rebalancings?: {
                    srcValidator?: string;
                    dstValidator?: string;
                    amt?: any;
                }[];
            }): _106.RebalanceCallback;
        };
    };
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("@osmonauts/helpers").Rpc;
        }) => Promise<{
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
            stride: {
                interchainquery: {
                    v1: _207.MsgClientImpl;
                };
                stakeibc: _208.MsgClientImpl;
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string;
        }) => Promise<{
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
            stride: {
                epochs: {
                    epochInfos(request?: _91.QueryEpochsInfoRequest): Promise<_91.QueryEpochsInfoResponse>;
                    currentEpoch(request: _91.QueryCurrentEpochRequest): Promise<_91.QueryCurrentEpochResponse>;
                    epochInfo(request: _91.QueryEpochInfoRequest): Promise<_91.QueryEpochInfoResponse>;
                };
                icacallbacks: {
                    params(request?: _96.QueryParamsRequest): Promise<_96.QueryParamsResponse>;
                    callbackData(request: _96.QueryGetCallbackDataRequest): Promise<_96.QueryGetCallbackDataResponse>;
                    callbackDataAll(request?: _96.QueryAllCallbackDataRequest): Promise<_96.QueryAllCallbackDataResponse>;
                };
                mint: {
                    v1beta1: {
                        params(request?: _102.QueryParamsRequest): Promise<_102.QueryParamsResponse>;
                        epochProvisions(request?: _102.QueryEpochProvisionsRequest): Promise<_102.QueryEpochProvisionsResponse>;
                    };
                };
                records: {
                    params(request?: _105.QueryParamsRequest): Promise<_105.QueryParamsResponse>;
                    userRedemptionRecord(request: _105.QueryGetUserRedemptionRecordRequest): Promise<_105.QueryGetUserRedemptionRecordResponse>;
                    userRedemptionRecordAll(request?: _105.QueryAllUserRedemptionRecordRequest): Promise<_105.QueryAllUserRedemptionRecordResponse>;
                    userRedemptionRecordForUser(request: _105.QueryAllUserRedemptionRecordForUserRequest): Promise<_105.QueryAllUserRedemptionRecordForUserResponse>;
                    epochUnbondingRecord(request: _105.QueryGetEpochUnbondingRecordRequest): Promise<_105.QueryGetEpochUnbondingRecordResponse>;
                    epochUnbondingRecordAll(request?: _105.QueryAllEpochUnbondingRecordRequest): Promise<_105.QueryAllEpochUnbondingRecordResponse>;
                    depositRecord(request: _105.QueryGetDepositRecordRequest): Promise<_105.QueryGetDepositRecordResponse>;
                    depositRecordAll(request?: _105.QueryAllDepositRecordRequest): Promise<_105.QueryAllDepositRecordResponse>;
                };
                stakeibc: {
                    params(request?: _116.QueryParamsRequest): Promise<_116.QueryParamsResponse>;
                    validators(request: _116.QueryGetValidatorsRequest): Promise<_116.QueryGetValidatorsResponse>;
                    iCAAccount(request?: _116.QueryGetICAAccountRequest): Promise<_116.QueryGetICAAccountResponse>;
                    hostZone(request: _116.QueryGetHostZoneRequest): Promise<_116.QueryGetHostZoneResponse>;
                    hostZoneAll(request?: _116.QueryAllHostZoneRequest): Promise<_116.QueryAllHostZoneResponse>;
                    moduleAddress(request: _116.QueryModuleAddressRequest): Promise<_116.QueryModuleAddressResponse>;
                    interchainAccountFromAddress(request: _116.QueryInterchainAccountFromAddressRequest): Promise<_116.QueryInterchainAccountFromAddressResponse>;
                    epochTracker(request: _116.QueryGetEpochTrackerRequest): Promise<_116.QueryGetEpochTrackerResponse>;
                    epochTrackerAll(request?: _116.QueryAllEpochTrackerRequest): Promise<_116.QueryAllEpochTrackerResponse>;
                };
            };
        }>;
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
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
            stride: {
                epochs: _197.LCDQueryClient;
                icacallbacks: _198.LCDQueryClient;
                mint: {
                    v1beta1: _199.LCDQueryClient;
                };
                records: _200.LCDQueryClient;
                stakeibc: _201.LCDQueryClient;
            };
        }>;
    };
}
