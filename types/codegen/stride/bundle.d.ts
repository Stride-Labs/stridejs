import * as _90 from "./claim/claim";
import * as _91 from "./claim/genesis";
import * as _92 from "./claim/params";
import * as _93 from "./claim/query";
import * as _94 from "./claim/tx";
import * as _95 from "./epochs/genesis";
import * as _96 from "./epochs/query";
import * as _97 from "./icacallbacks/callback_data";
import * as _98 from "./icacallbacks/genesis";
import * as _99 from "./icacallbacks/packet";
import * as _100 from "./icacallbacks/params";
import * as _101 from "./icacallbacks/query";
import * as _103 from "./interchainquery/v1/genesis";
import * as _104 from "./interchainquery/v1/messages";
import * as _105 from "./mint/v1beta1/genesis";
import * as _106 from "./mint/v1beta1/mint";
import * as _107 from "./mint/v1beta1/query";
import * as _108 from "./records/callbacks";
import * as _109 from "./records/genesis";
import * as _110 from "./records/query";
import * as _111 from "./stakeibc/callbacks";
import * as _112 from "./stakeibc/delegation";
import * as _113 from "./stakeibc/epoch_tracker";
import * as _114 from "./stakeibc/genesis";
import * as _115 from "./stakeibc/gov";
import * as _116 from "./stakeibc/host_zone";
import * as _117 from "./stakeibc/ica_account";
import * as _118 from "./stakeibc/min_validator_requirements";
import * as _119 from "./stakeibc/packet";
import * as _120 from "./stakeibc/params";
import * as _121 from "./stakeibc/query";
import * as _122 from "./stakeibc/tx";
import * as _123 from "./stakeibc/validator";
import * as _125 from "./vesting/vesting";
import * as _190 from "./claim/query.lcd";
import * as _191 from "./epochs/query.lcd";
import * as _192 from "./icacallbacks/query.lcd";
import * as _193 from "./mint/v1beta1/query.lcd";
import * as _194 from "./records/query.lcd";
import * as _195 from "./stakeibc/query.lcd";
import * as _196 from "./claim/query.rpc.Query";
import * as _197 from "./epochs/query.rpc.Query";
import * as _198 from "./icacallbacks/query.rpc.Query";
import * as _199 from "./mint/v1beta1/query.rpc.Query";
import * as _200 from "./records/query.rpc.Query";
import * as _201 from "./stakeibc/query.rpc.Query";
import * as _202 from "./claim/tx.rpc.msg";
import * as _203 from "./interchainquery/v1/messages.rpc.msg";
import * as _204 from "./stakeibc/tx.rpc.msg";
export declare namespace stride {
    const claim: {
        MsgClientImpl: typeof _202.MsgClientImpl;
        QueryClientImpl: typeof _196.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            distributorAccountBalance(request: _93.QueryDistributorAccountBalanceRequest): Promise<_93.QueryDistributorAccountBalanceResponse>;
            params(request?: _93.QueryParamsRequest): Promise<_93.QueryParamsResponse>;
            claimRecord(request: _93.QueryClaimRecordRequest): Promise<_93.QueryClaimRecordResponse>;
            claimableForAction(request: _93.QueryClaimableForActionRequest): Promise<_93.QueryClaimableForActionResponse>;
            totalClaimable(request: _93.QueryTotalClaimableRequest): Promise<_93.QueryTotalClaimableResponse>;
            userVestings(request: _93.QueryUserVestingsRequest): Promise<_93.QueryUserVestingsResponse>;
        };
        createRpcQueryHooks: (rpc: import("@cosmjs/stargate").ProtobufRpcClient) => {
            useDistributorAccountBalance: <TData = _93.QueryDistributorAccountBalanceResponse>({ request, options }: _196.UseDistributorAccountBalanceQuery<TData>) => any;
            useParams: <TData_1 = _93.QueryParamsResponse>({ request, options }: _196.UseParamsQuery<TData_1>) => any;
            useClaimRecord: <TData_2 = _93.QueryClaimRecordResponse>({ request, options }: _196.UseClaimRecordQuery<TData_2>) => any;
            useClaimableForAction: <TData_3 = _93.QueryClaimableForActionResponse>({ request, options }: _196.UseClaimableForActionQuery<TData_3>) => any;
            useTotalClaimable: <TData_4 = _93.QueryTotalClaimableResponse>({ request, options }: _196.UseTotalClaimableQuery<TData_4>) => any;
            useUserVestings: <TData_5 = _93.QueryUserVestingsResponse>({ request, options }: _196.UseUserVestingsQuery<TData_5>) => any;
        };
        LCDQueryClient: typeof _190.LCDQueryClient;
        registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                setAirdropAllocations(value: _94.MsgSetAirdropAllocations): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                claimFreeAmount(value: _94.MsgClaimFreeAmount): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                createAirdrop(value: _94.MsgCreateAirdrop): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                deleteAirdrop(value: _94.MsgDeleteAirdrop): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                setAirdropAllocations(value: _94.MsgSetAirdropAllocations): {
                    typeUrl: string;
                    value: _94.MsgSetAirdropAllocations;
                };
                claimFreeAmount(value: _94.MsgClaimFreeAmount): {
                    typeUrl: string;
                    value: _94.MsgClaimFreeAmount;
                };
                createAirdrop(value: _94.MsgCreateAirdrop): {
                    typeUrl: string;
                    value: _94.MsgCreateAirdrop;
                };
                deleteAirdrop(value: _94.MsgDeleteAirdrop): {
                    typeUrl: string;
                    value: _94.MsgDeleteAirdrop;
                };
            };
            fromPartial: {
                setAirdropAllocations(value: _94.MsgSetAirdropAllocations): {
                    typeUrl: string;
                    value: _94.MsgSetAirdropAllocations;
                };
                claimFreeAmount(value: _94.MsgClaimFreeAmount): {
                    typeUrl: string;
                    value: _94.MsgClaimFreeAmount;
                };
                createAirdrop(value: _94.MsgCreateAirdrop): {
                    typeUrl: string;
                    value: _94.MsgCreateAirdrop;
                };
                deleteAirdrop(value: _94.MsgDeleteAirdrop): {
                    typeUrl: string;
                    value: _94.MsgDeleteAirdrop;
                };
            };
        };
        AminoConverter: {
            "/stride.claim.MsgSetAirdropAllocations": {
                aminoType: string;
                toAmino: ({ allocator, airdropIdentifier, users, weights }: _94.MsgSetAirdropAllocations) => {
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
                }) => _94.MsgSetAirdropAllocations;
            };
            "/stride.claim.MsgClaimFreeAmount": {
                aminoType: string;
                toAmino: ({ user }: _94.MsgClaimFreeAmount) => {
                    user: string;
                };
                fromAmino: ({ user }: {
                    user: string;
                }) => _94.MsgClaimFreeAmount;
            };
            "/stride.claim.MsgCreateAirdrop": {
                aminoType: string;
                toAmino: ({ distributor, identifier, startTime, duration, denom }: _94.MsgCreateAirdrop) => {
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
                }) => _94.MsgCreateAirdrop;
            };
            "/stride.claim.MsgDeleteAirdrop": {
                aminoType: string;
                toAmino: ({ distributor, identifier }: _94.MsgDeleteAirdrop) => {
                    distributor: string;
                    identifier: string;
                };
                fromAmino: ({ distributor, identifier }: {
                    distributor: string;
                    identifier: string;
                }) => _94.MsgDeleteAirdrop;
            };
        };
        MsgSetAirdropAllocations: {
            encode(message: _94.MsgSetAirdropAllocations, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.MsgSetAirdropAllocations;
            fromPartial(object: {
                allocator?: string;
                airdropIdentifier?: string;
                users?: string[];
                weights?: string[];
            }): _94.MsgSetAirdropAllocations;
        };
        MsgSetAirdropAllocationsResponse: {
            encode(_: _94.MsgSetAirdropAllocationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.MsgSetAirdropAllocationsResponse;
            fromPartial(_: {}): _94.MsgSetAirdropAllocationsResponse;
        };
        MsgClaimFreeAmount: {
            encode(message: _94.MsgClaimFreeAmount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.MsgClaimFreeAmount;
            fromPartial(object: {
                user?: string;
            }): _94.MsgClaimFreeAmount;
        };
        MsgClaimFreeAmountResponse: {
            encode(message: _94.MsgClaimFreeAmountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.MsgClaimFreeAmountResponse;
            fromPartial(object: {
                claimedAmount?: {
                    denom?: string;
                    amount?: string;
                }[];
            }): _94.MsgClaimFreeAmountResponse;
        };
        MsgCreateAirdrop: {
            encode(message: _94.MsgCreateAirdrop, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.MsgCreateAirdrop;
            fromPartial(object: {
                distributor?: string;
                identifier?: string;
                startTime?: string | number | import("long");
                duration?: string | number | import("long");
                denom?: string;
            }): _94.MsgCreateAirdrop;
        };
        MsgCreateAirdropResponse: {
            encode(_: _94.MsgCreateAirdropResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.MsgCreateAirdropResponse;
            fromPartial(_: {}): _94.MsgCreateAirdropResponse;
        };
        MsgDeleteAirdrop: {
            encode(message: _94.MsgDeleteAirdrop, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.MsgDeleteAirdrop;
            fromPartial(object: {
                distributor?: string;
                identifier?: string;
            }): _94.MsgDeleteAirdrop;
        };
        MsgDeleteAirdropResponse: {
            encode(_: _94.MsgDeleteAirdropResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.MsgDeleteAirdropResponse;
            fromPartial(_: {}): _94.MsgDeleteAirdropResponse;
        };
        QueryDistributorAccountBalanceRequest: {
            encode(message: _93.QueryDistributorAccountBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.QueryDistributorAccountBalanceRequest;
            fromPartial(object: {
                airdropIdentifier?: string;
            }): _93.QueryDistributorAccountBalanceRequest;
        };
        QueryDistributorAccountBalanceResponse: {
            encode(message: _93.QueryDistributorAccountBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.QueryDistributorAccountBalanceResponse;
            fromPartial(object: {
                distributorAccountBalance?: {
                    denom?: string;
                    amount?: string;
                }[];
            }): _93.QueryDistributorAccountBalanceResponse;
        };
        QueryParamsRequest: {
            encode(_: _93.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.QueryParamsRequest;
            fromPartial(_: {}): _93.QueryParamsRequest;
        };
        QueryParamsResponse: {
            encode(message: _93.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.QueryParamsResponse;
            fromPartial(object: {
                params?: {
                    airdrops?: {
                        airdropIdentifier?: string;
                        airdropStartTime?: Date;
                        airdropDuration?: {
                            seconds?: string | number | import("long");
                            nanos?: number;
                        };
                        claimDenom?: string;
                        distributorAddress?: string;
                        claimedSoFar?: string | number | import("long");
                    }[];
                };
            }): _93.QueryParamsResponse;
        };
        QueryClaimRecordRequest: {
            encode(message: _93.QueryClaimRecordRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.QueryClaimRecordRequest;
            fromPartial(object: {
                airdropIdentifier?: string;
                address?: string;
            }): _93.QueryClaimRecordRequest;
        };
        QueryClaimRecordResponse: {
            encode(message: _93.QueryClaimRecordResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.QueryClaimRecordResponse;
            fromPartial(object: {
                claimRecord?: {
                    airdropIdentifier?: string;
                    address?: string;
                    weight?: string;
                    actionCompleted?: boolean[];
                };
            }): _93.QueryClaimRecordResponse;
        };
        QueryClaimableForActionRequest: {
            encode(message: _93.QueryClaimableForActionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.QueryClaimableForActionRequest;
            fromPartial(object: {
                airdropIdentifier?: string;
                address?: string;
                action?: _90.Action;
            }): _93.QueryClaimableForActionRequest;
        };
        QueryClaimableForActionResponse: {
            encode(message: _93.QueryClaimableForActionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.QueryClaimableForActionResponse;
            fromPartial(object: {
                coins?: {
                    denom?: string;
                    amount?: string;
                }[];
            }): _93.QueryClaimableForActionResponse;
        };
        QueryTotalClaimableRequest: {
            encode(message: _93.QueryTotalClaimableRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.QueryTotalClaimableRequest;
            fromPartial(object: {
                airdropIdentifier?: string;
                address?: string;
                includeClaimed?: boolean;
            }): _93.QueryTotalClaimableRequest;
        };
        QueryTotalClaimableResponse: {
            encode(message: _93.QueryTotalClaimableResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.QueryTotalClaimableResponse;
            fromPartial(object: {
                coins?: {
                    denom?: string;
                    amount?: string;
                }[];
            }): _93.QueryTotalClaimableResponse;
        };
        QueryUserVestingsRequest: {
            encode(message: _93.QueryUserVestingsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.QueryUserVestingsRequest;
            fromPartial(object: {
                address?: string;
            }): _93.QueryUserVestingsRequest;
        };
        QueryUserVestingsResponse: {
            encode(message: _93.QueryUserVestingsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.QueryUserVestingsResponse;
            fromPartial(object: {
                spendableCoins?: {
                    denom?: string;
                    amount?: string;
                }[];
                periods?: {
                    startTime?: string | number | import("long");
                    length?: string | number | import("long");
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    actionType?: number;
                }[];
            }): _93.QueryUserVestingsResponse;
        };
        Params: {
            encode(message: _92.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.Params;
            fromPartial(object: {
                airdrops?: {
                    airdropIdentifier?: string;
                    airdropStartTime?: Date;
                    airdropDuration?: {
                        seconds?: string | number | import("long");
                        nanos?: number;
                    };
                    claimDenom?: string;
                    distributorAddress?: string;
                    claimedSoFar?: string | number | import("long");
                }[];
            }): _92.Params;
        };
        Airdrop: {
            encode(message: _92.Airdrop, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.Airdrop;
            fromPartial(object: {
                airdropIdentifier?: string;
                airdropStartTime?: Date;
                airdropDuration?: {
                    seconds?: string | number | import("long");
                    nanos?: number;
                };
                claimDenom?: string;
                distributorAddress?: string;
                claimedSoFar?: string | number | import("long");
            }): _92.Airdrop;
        };
        GenesisState: {
            encode(message: _91.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.GenesisState;
            fromPartial(object: {
                params?: {
                    airdrops?: {
                        airdropIdentifier?: string;
                        airdropStartTime?: Date;
                        airdropDuration?: {
                            seconds?: string | number | import("long");
                            nanos?: number;
                        };
                        claimDenom?: string;
                        distributorAddress?: string;
                        claimedSoFar?: string | number | import("long");
                    }[];
                };
                claimRecords?: {
                    airdropIdentifier?: string;
                    address?: string;
                    weight?: string;
                    actionCompleted?: boolean[];
                }[];
            }): _91.GenesisState;
        };
        actionFromJSON(object: any): _90.Action;
        actionToJSON(object: _90.Action): string;
        Action: typeof _90.Action;
        ActionSDKType: typeof _90.ActionSDKType;
        ClaimRecord: {
            encode(message: _90.ClaimRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.ClaimRecord;
            fromPartial(object: {
                airdropIdentifier?: string;
                address?: string;
                weight?: string;
                actionCompleted?: boolean[];
            }): _90.ClaimRecord;
        };
    };
    const epochs: {
        QueryClientImpl: typeof _197.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            epochInfos(request?: _96.QueryEpochsInfoRequest): Promise<_96.QueryEpochsInfoResponse>;
            currentEpoch(request: _96.QueryCurrentEpochRequest): Promise<_96.QueryCurrentEpochResponse>;
            epochInfo(request: _96.QueryEpochInfoRequest): Promise<_96.QueryEpochInfoResponse>;
        };
        createRpcQueryHooks: (rpc: import("@cosmjs/stargate").ProtobufRpcClient) => {
            useEpochInfos: <TData = _96.QueryEpochsInfoResponse>({ request, options }: _197.UseEpochInfosQuery<TData>) => any;
            useCurrentEpoch: <TData_1 = _96.QueryCurrentEpochResponse>({ request, options }: _197.UseCurrentEpochQuery<TData_1>) => any;
            useEpochInfo: <TData_2 = _96.QueryEpochInfoResponse>({ request, options }: _197.UseEpochInfoQuery<TData_2>) => any;
        };
        LCDQueryClient: typeof _191.LCDQueryClient;
        QueryEpochsInfoRequest: {
            encode(message: _96.QueryEpochsInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.QueryEpochsInfoRequest;
            fromPartial(object: {
                pagination?: {
                    key?: Uint8Array;
                    offset?: string | number | import("long");
                    limit?: string | number | import("long");
                    countTotal?: boolean;
                    reverse?: boolean;
                };
            }): _96.QueryEpochsInfoRequest;
        };
        QueryEpochsInfoResponse: {
            encode(message: _96.QueryEpochsInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.QueryEpochsInfoResponse;
            fromPartial(object: {
                epochs?: {
                    identifier?: string;
                    startTime?: Date;
                    duration?: {
                        seconds?: string | number | import("long");
                        nanos?: number;
                    };
                    currentEpoch?: string | number | import("long");
                    currentEpochStartTime?: Date;
                    epochCountingStarted?: boolean;
                    currentEpochStartHeight?: string | number | import("long");
                }[];
                pagination?: {
                    nextKey?: Uint8Array;
                    total?: string | number | import("long");
                };
            }): _96.QueryEpochsInfoResponse;
        };
        QueryCurrentEpochRequest: {
            encode(message: _96.QueryCurrentEpochRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.QueryCurrentEpochRequest;
            fromPartial(object: {
                identifier?: string;
            }): _96.QueryCurrentEpochRequest;
        };
        QueryCurrentEpochResponse: {
            encode(message: _96.QueryCurrentEpochResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.QueryCurrentEpochResponse;
            fromPartial(object: {
                currentEpoch?: string | number | import("long");
            }): _96.QueryCurrentEpochResponse;
        };
        QueryEpochInfoRequest: {
            encode(message: _96.QueryEpochInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.QueryEpochInfoRequest;
            fromPartial(object: {
                identifier?: string;
            }): _96.QueryEpochInfoRequest;
        };
        QueryEpochInfoResponse: {
            encode(message: _96.QueryEpochInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.QueryEpochInfoResponse;
            fromPartial(object: {
                epoch?: {
                    identifier?: string;
                    startTime?: Date;
                    duration?: {
                        seconds?: string | number | import("long");
                        nanos?: number;
                    };
                    currentEpoch?: string | number | import("long");
                    currentEpochStartTime?: Date;
                    epochCountingStarted?: boolean;
                    currentEpochStartHeight?: string | number | import("long");
                };
            }): _96.QueryEpochInfoResponse;
        };
        EpochInfo: {
            encode(message: _95.EpochInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.EpochInfo;
            fromPartial(object: {
                identifier?: string;
                startTime?: Date;
                duration?: {
                    seconds?: string | number | import("long");
                    nanos?: number;
                };
                currentEpoch?: string | number | import("long");
                currentEpochStartTime?: Date;
                epochCountingStarted?: boolean;
                currentEpochStartHeight?: string | number | import("long");
            }): _95.EpochInfo;
        };
        GenesisState: {
            encode(message: _95.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.GenesisState;
            fromPartial(object: {
                epochs?: {
                    identifier?: string;
                    startTime?: Date;
                    duration?: {
                        seconds?: string | number | import("long");
                        nanos?: number;
                    };
                    currentEpoch?: string | number | import("long");
                    currentEpochStartTime?: Date;
                    epochCountingStarted?: boolean;
                    currentEpochStartHeight?: string | number | import("long");
                }[];
            }): _95.GenesisState;
        };
    };
    const icacallbacks: {
        QueryClientImpl: typeof _198.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            params(request?: _101.QueryParamsRequest): Promise<_101.QueryParamsResponse>;
            callbackData(request: _101.QueryGetCallbackDataRequest): Promise<_101.QueryGetCallbackDataResponse>;
            callbackDataAll(request?: _101.QueryAllCallbackDataRequest): Promise<_101.QueryAllCallbackDataResponse>;
        };
        createRpcQueryHooks: (rpc: import("@cosmjs/stargate").ProtobufRpcClient) => {
            useParams: <TData = _101.QueryParamsResponse>({ request, options }: _198.UseParamsQuery<TData>) => any;
            useCallbackData: <TData_1 = _101.QueryGetCallbackDataResponse>({ request, options }: _198.UseCallbackDataQuery<TData_1>) => any;
            useCallbackDataAll: <TData_2 = _101.QueryAllCallbackDataResponse>({ request, options }: _198.UseCallbackDataAllQuery<TData_2>) => any;
        };
        LCDQueryClient: typeof _192.LCDQueryClient;
        QueryParamsRequest: {
            encode(_: _101.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.QueryParamsRequest;
            fromPartial(_: {}): _101.QueryParamsRequest;
        };
        QueryParamsResponse: {
            encode(message: _101.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.QueryParamsResponse;
            fromPartial(object: {
                params?: {};
            }): _101.QueryParamsResponse;
        };
        QueryGetCallbackDataRequest: {
            encode(message: _101.QueryGetCallbackDataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.QueryGetCallbackDataRequest;
            fromPartial(object: {
                callbackKey?: string;
            }): _101.QueryGetCallbackDataRequest;
        };
        QueryGetCallbackDataResponse: {
            encode(message: _101.QueryGetCallbackDataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.QueryGetCallbackDataResponse;
            fromPartial(object: {
                callbackData?: {
                    callbackKey?: string;
                    portId?: string;
                    channelId?: string;
                    sequence?: string | number | import("long");
                    callbackId?: string;
                    callbackArgs?: Uint8Array;
                };
            }): _101.QueryGetCallbackDataResponse;
        };
        QueryAllCallbackDataRequest: {
            encode(message: _101.QueryAllCallbackDataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.QueryAllCallbackDataRequest;
            fromPartial(object: {
                pagination?: {
                    key?: Uint8Array;
                    offset?: string | number | import("long");
                    limit?: string | number | import("long");
                    countTotal?: boolean;
                    reverse?: boolean;
                };
            }): _101.QueryAllCallbackDataRequest;
        };
        QueryAllCallbackDataResponse: {
            encode(message: _101.QueryAllCallbackDataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.QueryAllCallbackDataResponse;
            fromPartial(object: {
                callbackData?: {
                    callbackKey?: string;
                    portId?: string;
                    channelId?: string;
                    sequence?: string | number | import("long");
                    callbackId?: string;
                    callbackArgs?: Uint8Array;
                }[];
                pagination?: {
                    nextKey?: Uint8Array;
                    total?: string | number | import("long");
                };
            }): _101.QueryAllCallbackDataResponse;
        };
        Params: {
            encode(_: _100.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.Params;
            fromPartial(_: {}): _100.Params;
        };
        IcacallbacksPacketData: {
            encode(message: _99.IcacallbacksPacketData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.IcacallbacksPacketData;
            fromPartial(object: {
                noData?: {};
            }): _99.IcacallbacksPacketData;
        };
        NoData: {
            encode(_: _99.NoData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.NoData;
            fromPartial(_: {}): _99.NoData;
        };
        GenesisState: {
            encode(message: _98.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.GenesisState;
            fromPartial(object: {
                params?: {};
                portId?: string;
                callbackDataList?: {
                    callbackKey?: string;
                    portId?: string;
                    channelId?: string;
                    sequence?: string | number | import("long");
                    callbackId?: string;
                    callbackArgs?: Uint8Array;
                }[];
            }): _98.GenesisState;
        };
        CallbackData: {
            encode(message: _97.CallbackData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.CallbackData;
            fromPartial(object: {
                callbackKey?: string;
                portId?: string;
                channelId?: string;
                sequence?: string | number | import("long");
                callbackId?: string;
                callbackArgs?: Uint8Array;
            }): _97.CallbackData;
        };
    };
    namespace interchainquery {
        const v1: {
            MsgClientImpl: typeof _203.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitQueryResponse(value: _104.MsgSubmitQueryResponse): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitQueryResponse(value: _104.MsgSubmitQueryResponse): {
                        typeUrl: string;
                        value: _104.MsgSubmitQueryResponse;
                    };
                };
                fromPartial: {
                    submitQueryResponse(value: _104.MsgSubmitQueryResponse): {
                        typeUrl: string;
                        value: _104.MsgSubmitQueryResponse;
                    };
                };
            };
            AminoConverter: {
                "/stride.interchainquery.v1.MsgSubmitQueryResponse": {
                    aminoType: string;
                    toAmino: ({ chainId, queryId, result, proofOps, height, fromAddress }: _104.MsgSubmitQueryResponse) => {
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
                    }) => _104.MsgSubmitQueryResponse;
                };
            };
            MsgSubmitQueryResponse: {
                encode(message: _104.MsgSubmitQueryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.MsgSubmitQueryResponse;
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
                    height?: string | number | import("long");
                    fromAddress?: string;
                }): _104.MsgSubmitQueryResponse;
            };
            MsgSubmitQueryResponseResponse: {
                encode(_: _104.MsgSubmitQueryResponseResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.MsgSubmitQueryResponseResponse;
                fromPartial(_: {}): _104.MsgSubmitQueryResponseResponse;
            };
            Query: {
                encode(message: _103.Query, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.Query;
                fromPartial(object: {
                    id?: string;
                    connectionId?: string;
                    chainId?: string;
                    queryType?: string;
                    request?: Uint8Array;
                    callbackId?: string;
                    ttl?: string | number | import("long");
                    requestSent?: boolean;
                }): _103.Query;
            };
            DataPoint: {
                encode(message: _103.DataPoint, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.DataPoint;
                fromPartial(object: {
                    id?: string;
                    remoteHeight?: string;
                    localHeight?: string;
                    value?: Uint8Array;
                }): _103.DataPoint;
            };
            GenesisState: {
                encode(message: _103.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.GenesisState;
                fromPartial(object: {
                    queries?: {
                        id?: string;
                        connectionId?: string;
                        chainId?: string;
                        queryType?: string;
                        request?: Uint8Array;
                        callbackId?: string;
                        ttl?: string | number | import("long");
                        requestSent?: boolean;
                    }[];
                }): _103.GenesisState;
            };
        };
    }
    namespace mint {
        const v1beta1: {
            QueryClientImpl: typeof _199.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _107.QueryParamsRequest): Promise<_107.QueryParamsResponse>;
                epochProvisions(request?: _107.QueryEpochProvisionsRequest): Promise<_107.QueryEpochProvisionsResponse>;
            };
            createRpcQueryHooks: (rpc: import("@cosmjs/stargate").ProtobufRpcClient) => {
                useParams: <TData = _107.QueryParamsResponse>({ request, options }: _199.UseParamsQuery<TData>) => any;
                useEpochProvisions: <TData_1 = _107.QueryEpochProvisionsResponse>({ request, options }: _199.UseEpochProvisionsQuery<TData_1>) => any;
            };
            LCDQueryClient: typeof _193.LCDQueryClient;
            QueryParamsRequest: {
                encode(_: _107.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.QueryParamsRequest;
                fromPartial(_: {}): _107.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _107.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.QueryParamsResponse;
                fromPartial(object: {
                    params?: {
                        mintDenom?: string;
                        genesisEpochProvisions?: string;
                        epochIdentifier?: string;
                        reductionPeriodInEpochs?: string | number | import("long");
                        reductionFactor?: string;
                        distributionProportions?: {
                            staking?: string;
                            communityPoolGrowth?: string;
                            communityPoolSecurityBudget?: string;
                            strategicReserve?: string;
                        };
                        mintingRewardsDistributionStartEpoch?: string | number | import("long");
                    };
                }): _107.QueryParamsResponse;
            };
            QueryEpochProvisionsRequest: {
                encode(_: _107.QueryEpochProvisionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.QueryEpochProvisionsRequest;
                fromPartial(_: {}): _107.QueryEpochProvisionsRequest;
            };
            QueryEpochProvisionsResponse: {
                encode(message: _107.QueryEpochProvisionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.QueryEpochProvisionsResponse;
                fromPartial(object: {
                    epochProvisions?: Uint8Array;
                }): _107.QueryEpochProvisionsResponse;
            };
            Minter: {
                encode(message: _106.Minter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.Minter;
                fromPartial(object: {
                    epochProvisions?: string;
                }): _106.Minter;
            };
            DistributionProportions: {
                encode(message: _106.DistributionProportions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.DistributionProportions;
                fromPartial(object: {
                    staking?: string;
                    communityPoolGrowth?: string;
                    communityPoolSecurityBudget?: string;
                    strategicReserve?: string;
                }): _106.DistributionProportions;
            };
            Params: {
                encode(message: _106.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.Params;
                fromPartial(object: {
                    mintDenom?: string;
                    genesisEpochProvisions?: string;
                    epochIdentifier?: string;
                    reductionPeriodInEpochs?: string | number | import("long");
                    reductionFactor?: string;
                    distributionProportions?: {
                        staking?: string;
                        communityPoolGrowth?: string;
                        communityPoolSecurityBudget?: string;
                        strategicReserve?: string;
                    };
                    mintingRewardsDistributionStartEpoch?: string | number | import("long");
                }): _106.Params;
            };
            GenesisState: {
                encode(message: _105.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.GenesisState;
                fromPartial(object: {
                    minter?: {
                        epochProvisions?: string;
                    };
                    params?: {
                        mintDenom?: string;
                        genesisEpochProvisions?: string;
                        epochIdentifier?: string;
                        reductionPeriodInEpochs?: string | number | import("long");
                        reductionFactor?: string;
                        distributionProportions?: {
                            staking?: string;
                            communityPoolGrowth?: string;
                            communityPoolSecurityBudget?: string;
                            strategicReserve?: string;
                        };
                        mintingRewardsDistributionStartEpoch?: string | number | import("long");
                    };
                    reductionStartedEpoch?: string | number | import("long");
                }): _105.GenesisState;
            };
        };
    }
    const records: {
        QueryClientImpl: typeof _200.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            params(request?: _110.QueryParamsRequest): Promise<_110.QueryParamsResponse>;
            userRedemptionRecord(request: _110.QueryGetUserRedemptionRecordRequest): Promise<_110.QueryGetUserRedemptionRecordResponse>;
            userRedemptionRecordAll(request?: _110.QueryAllUserRedemptionRecordRequest): Promise<_110.QueryAllUserRedemptionRecordResponse>;
            userRedemptionRecordForUser(request: _110.QueryAllUserRedemptionRecordForUserRequest): Promise<_110.QueryAllUserRedemptionRecordForUserResponse>;
            epochUnbondingRecord(request: _110.QueryGetEpochUnbondingRecordRequest): Promise<_110.QueryGetEpochUnbondingRecordResponse>;
            epochUnbondingRecordAll(request?: _110.QueryAllEpochUnbondingRecordRequest): Promise<_110.QueryAllEpochUnbondingRecordResponse>;
            depositRecord(request: _110.QueryGetDepositRecordRequest): Promise<_110.QueryGetDepositRecordResponse>;
            depositRecordAll(request?: _110.QueryAllDepositRecordRequest): Promise<_110.QueryAllDepositRecordResponse>;
        };
        createRpcQueryHooks: (rpc: import("@cosmjs/stargate").ProtobufRpcClient) => {
            useParams: <TData = _110.QueryParamsResponse>({ request, options }: _200.UseParamsQuery<TData>) => any;
            useUserRedemptionRecord: <TData_1 = _110.QueryGetUserRedemptionRecordResponse>({ request, options }: _200.UseUserRedemptionRecordQuery<TData_1>) => any;
            useUserRedemptionRecordAll: <TData_2 = _110.QueryAllUserRedemptionRecordResponse>({ request, options }: _200.UseUserRedemptionRecordAllQuery<TData_2>) => any;
            useUserRedemptionRecordForUser: <TData_3 = _110.QueryAllUserRedemptionRecordForUserResponse>({ request, options }: _200.UseUserRedemptionRecordForUserQuery<TData_3>) => any;
            useEpochUnbondingRecord: <TData_4 = _110.QueryGetEpochUnbondingRecordResponse>({ request, options }: _200.UseEpochUnbondingRecordQuery<TData_4>) => any;
            useEpochUnbondingRecordAll: <TData_5 = _110.QueryAllEpochUnbondingRecordResponse>({ request, options }: _200.UseEpochUnbondingRecordAllQuery<TData_5>) => any;
            useDepositRecord: <TData_6 = _110.QueryGetDepositRecordResponse>({ request, options }: _200.UseDepositRecordQuery<TData_6>) => any;
            useDepositRecordAll: <TData_7 = _110.QueryAllDepositRecordResponse>({ request, options }: _200.UseDepositRecordAllQuery<TData_7>) => any;
        };
        LCDQueryClient: typeof _194.LCDQueryClient;
        QueryParamsRequest: {
            encode(_: _110.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.QueryParamsRequest;
            fromPartial(_: {}): _110.QueryParamsRequest;
        };
        QueryParamsResponse: {
            encode(message: _110.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.QueryParamsResponse;
            fromPartial(object: {
                params?: {};
            }): _110.QueryParamsResponse;
        };
        QueryGetDepositRecordRequest: {
            encode(message: _110.QueryGetDepositRecordRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.QueryGetDepositRecordRequest;
            fromPartial(object: {
                id?: string | number | import("long");
            }): _110.QueryGetDepositRecordRequest;
        };
        QueryGetDepositRecordResponse: {
            encode(message: _110.QueryGetDepositRecordResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.QueryGetDepositRecordResponse;
            fromPartial(object: {
                depositRecord?: {
                    id?: string | number | import("long");
                    amount?: string | number | import("long");
                    denom?: string;
                    hostZoneId?: string;
                    status?: _109.DepositRecord_Status;
                    depositEpochNumber?: string | number | import("long");
                    source?: _109.DepositRecord_Source;
                };
            }): _110.QueryGetDepositRecordResponse;
        };
        QueryAllDepositRecordRequest: {
            encode(message: _110.QueryAllDepositRecordRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.QueryAllDepositRecordRequest;
            fromPartial(object: {
                pagination?: {
                    key?: Uint8Array;
                    offset?: string | number | import("long");
                    limit?: string | number | import("long");
                    countTotal?: boolean;
                    reverse?: boolean;
                };
            }): _110.QueryAllDepositRecordRequest;
        };
        QueryAllDepositRecordResponse: {
            encode(message: _110.QueryAllDepositRecordResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.QueryAllDepositRecordResponse;
            fromPartial(object: {
                depositRecord?: {
                    id?: string | number | import("long");
                    amount?: string | number | import("long");
                    denom?: string;
                    hostZoneId?: string;
                    status?: _109.DepositRecord_Status;
                    depositEpochNumber?: string | number | import("long");
                    source?: _109.DepositRecord_Source;
                }[];
                pagination?: {
                    nextKey?: Uint8Array;
                    total?: string | number | import("long");
                };
            }): _110.QueryAllDepositRecordResponse;
        };
        QueryGetUserRedemptionRecordRequest: {
            encode(message: _110.QueryGetUserRedemptionRecordRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.QueryGetUserRedemptionRecordRequest;
            fromPartial(object: {
                id?: string;
            }): _110.QueryGetUserRedemptionRecordRequest;
        };
        QueryGetUserRedemptionRecordResponse: {
            encode(message: _110.QueryGetUserRedemptionRecordResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.QueryGetUserRedemptionRecordResponse;
            fromPartial(object: {
                userRedemptionRecord?: {
                    id?: string;
                    sender?: string;
                    receiver?: string;
                    amount?: string | number | import("long");
                    denom?: string;
                    hostZoneId?: string;
                    epochNumber?: string | number | import("long");
                    claimIsPending?: boolean;
                };
            }): _110.QueryGetUserRedemptionRecordResponse;
        };
        QueryAllUserRedemptionRecordRequest: {
            encode(message: _110.QueryAllUserRedemptionRecordRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.QueryAllUserRedemptionRecordRequest;
            fromPartial(object: {
                pagination?: {
                    key?: Uint8Array;
                    offset?: string | number | import("long");
                    limit?: string | number | import("long");
                    countTotal?: boolean;
                    reverse?: boolean;
                };
            }): _110.QueryAllUserRedemptionRecordRequest;
        };
        QueryAllUserRedemptionRecordResponse: {
            encode(message: _110.QueryAllUserRedemptionRecordResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.QueryAllUserRedemptionRecordResponse;
            fromPartial(object: {
                userRedemptionRecord?: {
                    id?: string;
                    sender?: string;
                    receiver?: string;
                    amount?: string | number | import("long");
                    denom?: string;
                    hostZoneId?: string;
                    epochNumber?: string | number | import("long");
                    claimIsPending?: boolean;
                }[];
                pagination?: {
                    nextKey?: Uint8Array;
                    total?: string | number | import("long");
                };
            }): _110.QueryAllUserRedemptionRecordResponse;
        };
        QueryAllUserRedemptionRecordForUserRequest: {
            encode(message: _110.QueryAllUserRedemptionRecordForUserRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.QueryAllUserRedemptionRecordForUserRequest;
            fromPartial(object: {
                chainId?: string;
                day?: string | number | import("long");
                address?: string;
                limit?: string | number | import("long");
                pagination?: {
                    key?: Uint8Array;
                    offset?: string | number | import("long");
                    limit?: string | number | import("long");
                    countTotal?: boolean;
                    reverse?: boolean;
                };
            }): _110.QueryAllUserRedemptionRecordForUserRequest;
        };
        QueryAllUserRedemptionRecordForUserResponse: {
            encode(message: _110.QueryAllUserRedemptionRecordForUserResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.QueryAllUserRedemptionRecordForUserResponse;
            fromPartial(object: {
                userRedemptionRecord?: {
                    id?: string;
                    sender?: string;
                    receiver?: string;
                    amount?: string | number | import("long");
                    denom?: string;
                    hostZoneId?: string;
                    epochNumber?: string | number | import("long");
                    claimIsPending?: boolean;
                }[];
                pagination?: {
                    nextKey?: Uint8Array;
                    total?: string | number | import("long");
                };
            }): _110.QueryAllUserRedemptionRecordForUserResponse;
        };
        QueryGetEpochUnbondingRecordRequest: {
            encode(message: _110.QueryGetEpochUnbondingRecordRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.QueryGetEpochUnbondingRecordRequest;
            fromPartial(object: {
                epochNumber?: string | number | import("long");
            }): _110.QueryGetEpochUnbondingRecordRequest;
        };
        QueryGetEpochUnbondingRecordResponse: {
            encode(message: _110.QueryGetEpochUnbondingRecordResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.QueryGetEpochUnbondingRecordResponse;
            fromPartial(object: {
                epochUnbondingRecord?: {
                    epochNumber?: string | number | import("long");
                    hostZoneUnbondings?: {
                        stTokenAmount?: string | number | import("long");
                        nativeTokenAmount?: string | number | import("long");
                        denom?: string;
                        hostZoneId?: string;
                        unbondingTime?: string | number | import("long");
                        status?: _109.HostZoneUnbonding_Status;
                        userRedemptionRecords?: string[];
                    }[];
                };
            }): _110.QueryGetEpochUnbondingRecordResponse;
        };
        QueryAllEpochUnbondingRecordRequest: {
            encode(message: _110.QueryAllEpochUnbondingRecordRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.QueryAllEpochUnbondingRecordRequest;
            fromPartial(object: {
                pagination?: {
                    key?: Uint8Array;
                    offset?: string | number | import("long");
                    limit?: string | number | import("long");
                    countTotal?: boolean;
                    reverse?: boolean;
                };
            }): _110.QueryAllEpochUnbondingRecordRequest;
        };
        QueryAllEpochUnbondingRecordResponse: {
            encode(message: _110.QueryAllEpochUnbondingRecordResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.QueryAllEpochUnbondingRecordResponse;
            fromPartial(object: {
                epochUnbondingRecord?: {
                    epochNumber?: string | number | import("long");
                    hostZoneUnbondings?: {
                        stTokenAmount?: string | number | import("long");
                        nativeTokenAmount?: string | number | import("long");
                        denom?: string;
                        hostZoneId?: string;
                        unbondingTime?: string | number | import("long");
                        status?: _109.HostZoneUnbonding_Status;
                        userRedemptionRecords?: string[];
                    }[];
                }[];
                pagination?: {
                    nextKey?: Uint8Array;
                    total?: string | number | import("long");
                };
            }): _110.QueryAllEpochUnbondingRecordResponse;
        };
        depositRecord_StatusFromJSON(object: any): _109.DepositRecord_Status;
        depositRecord_StatusToJSON(object: _109.DepositRecord_Status): string;
        depositRecord_SourceFromJSON(object: any): _109.DepositRecord_Source;
        depositRecord_SourceToJSON(object: _109.DepositRecord_Source): string;
        hostZoneUnbonding_StatusFromJSON(object: any): _109.HostZoneUnbonding_Status;
        hostZoneUnbonding_StatusToJSON(object: _109.HostZoneUnbonding_Status): string;
        DepositRecord_Status: typeof _109.DepositRecord_Status;
        DepositRecord_StatusSDKType: typeof _109.DepositRecord_StatusSDKType;
        DepositRecord_Source: typeof _109.DepositRecord_Source;
        DepositRecord_SourceSDKType: typeof _109.DepositRecord_SourceSDKType;
        HostZoneUnbonding_Status: typeof _109.HostZoneUnbonding_Status;
        HostZoneUnbonding_StatusSDKType: typeof _109.HostZoneUnbonding_StatusSDKType;
        UserRedemptionRecord: {
            encode(message: _109.UserRedemptionRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.UserRedemptionRecord;
            fromPartial(object: {
                id?: string;
                sender?: string;
                receiver?: string;
                amount?: string | number | import("long");
                denom?: string;
                hostZoneId?: string;
                epochNumber?: string | number | import("long");
                claimIsPending?: boolean;
            }): _109.UserRedemptionRecord;
        };
        Params: {
            encode(_: _109.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.Params;
            fromPartial(_: {}): _109.Params;
        };
        RecordsPacketData: {
            encode(message: _109.RecordsPacketData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.RecordsPacketData;
            fromPartial(object: {
                noData?: {};
            }): _109.RecordsPacketData;
        };
        NoData: {
            encode(_: _109.NoData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.NoData;
            fromPartial(_: {}): _109.NoData;
        };
        DepositRecord: {
            encode(message: _109.DepositRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.DepositRecord;
            fromPartial(object: {
                id?: string | number | import("long");
                amount?: string | number | import("long");
                denom?: string;
                hostZoneId?: string;
                status?: _109.DepositRecord_Status;
                depositEpochNumber?: string | number | import("long");
                source?: _109.DepositRecord_Source;
            }): _109.DepositRecord;
        };
        HostZoneUnbonding: {
            encode(message: _109.HostZoneUnbonding, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.HostZoneUnbonding;
            fromPartial(object: {
                stTokenAmount?: string | number | import("long");
                nativeTokenAmount?: string | number | import("long");
                denom?: string;
                hostZoneId?: string;
                unbondingTime?: string | number | import("long");
                status?: _109.HostZoneUnbonding_Status;
                userRedemptionRecords?: string[];
            }): _109.HostZoneUnbonding;
        };
        EpochUnbondingRecord: {
            encode(message: _109.EpochUnbondingRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.EpochUnbondingRecord;
            fromPartial(object: {
                epochNumber?: string | number | import("long");
                hostZoneUnbondings?: {
                    stTokenAmount?: string | number | import("long");
                    nativeTokenAmount?: string | number | import("long");
                    denom?: string;
                    hostZoneId?: string;
                    unbondingTime?: string | number | import("long");
                    status?: _109.HostZoneUnbonding_Status;
                    userRedemptionRecords?: string[];
                }[];
            }): _109.EpochUnbondingRecord;
        };
        GenesisState: {
            encode(message: _109.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.GenesisState;
            fromPartial(object: {
                params?: {};
                portId?: string;
                userRedemptionRecordList?: {
                    id?: string;
                    sender?: string;
                    receiver?: string;
                    amount?: string | number | import("long");
                    denom?: string;
                    hostZoneId?: string;
                    epochNumber?: string | number | import("long");
                    claimIsPending?: boolean;
                }[];
                userRedemptionRecordCount?: string | number | import("long");
                epochUnbondingRecordList?: {
                    epochNumber?: string | number | import("long");
                    hostZoneUnbondings?: {
                        stTokenAmount?: string | number | import("long");
                        nativeTokenAmount?: string | number | import("long");
                        denom?: string;
                        hostZoneId?: string;
                        unbondingTime?: string | number | import("long");
                        status?: _109.HostZoneUnbonding_Status;
                        userRedemptionRecords?: string[];
                    }[];
                }[];
                depositRecordList?: {
                    id?: string | number | import("long");
                    amount?: string | number | import("long");
                    denom?: string;
                    hostZoneId?: string;
                    status?: _109.DepositRecord_Status;
                    depositEpochNumber?: string | number | import("long");
                    source?: _109.DepositRecord_Source;
                }[];
                depositRecordCount?: string | number | import("long");
            }): _109.GenesisState;
        };
        TransferCallback: {
            encode(message: _108.TransferCallback, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.TransferCallback;
            fromPartial(object: {
                depositRecordId?: string | number | import("long");
            }): _108.TransferCallback;
        };
    };
    const stakeibc: {
        MsgClientImpl: typeof _204.MsgClientImpl;
        QueryClientImpl: typeof _201.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            params(request?: _121.QueryParamsRequest): Promise<_121.QueryParamsResponse>;
            validators(request: _121.QueryGetValidatorsRequest): Promise<_121.QueryGetValidatorsResponse>;
            iCAAccount(request?: _121.QueryGetICAAccountRequest): Promise<_121.QueryGetICAAccountResponse>;
            hostZone(request: _121.QueryGetHostZoneRequest): Promise<_121.QueryGetHostZoneResponse>;
            hostZoneAll(request?: _121.QueryAllHostZoneRequest): Promise<_121.QueryAllHostZoneResponse>;
            moduleAddress(request: _121.QueryModuleAddressRequest): Promise<_121.QueryModuleAddressResponse>;
            interchainAccountFromAddress(request: _121.QueryInterchainAccountFromAddressRequest): Promise<_121.QueryInterchainAccountFromAddressResponse>;
            epochTracker(request: _121.QueryGetEpochTrackerRequest): Promise<_121.QueryGetEpochTrackerResponse>;
            epochTrackerAll(request?: _121.QueryAllEpochTrackerRequest): Promise<_121.QueryAllEpochTrackerResponse>;
        };
        createRpcQueryHooks: (rpc: import("@cosmjs/stargate").ProtobufRpcClient) => {
            useParams: <TData = _121.QueryParamsResponse>({ request, options }: _201.UseParamsQuery<TData>) => any;
            useValidators: <TData_1 = _121.QueryGetValidatorsResponse>({ request, options }: _201.UseValidatorsQuery<TData_1>) => any;
            useICAAccount: <TData_2 = _121.QueryGetICAAccountResponse>({ request, options }: _201.UseICAAccountQuery<TData_2>) => any;
            useHostZone: <TData_3 = _121.QueryGetHostZoneResponse>({ request, options }: _201.UseHostZoneQuery<TData_3>) => any;
            useHostZoneAll: <TData_4 = _121.QueryAllHostZoneResponse>({ request, options }: _201.UseHostZoneAllQuery<TData_4>) => any;
            useModuleAddress: <TData_5 = _121.QueryModuleAddressResponse>({ request, options }: _201.UseModuleAddressQuery<TData_5>) => any;
            useInterchainAccountFromAddress: <TData_6 = _121.QueryInterchainAccountFromAddressResponse>({ request, options }: _201.UseInterchainAccountFromAddressQuery<TData_6>) => any;
            useEpochTracker: <TData_7 = _121.QueryGetEpochTrackerResponse>({ request, options }: _201.UseEpochTrackerQuery<TData_7>) => any;
            useEpochTrackerAll: <TData_8 = _121.QueryAllEpochTrackerResponse>({ request, options }: _201.UseEpochTrackerAllQuery<TData_8>) => any;
        };
        LCDQueryClient: typeof _195.LCDQueryClient;
        registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                liquidStake(value: _122.MsgLiquidStake): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                redeemStake(value: _122.MsgRedeemStake): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                registerHostZone(value: _122.MsgRegisterHostZone): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                claimUndelegatedTokens(value: _122.MsgClaimUndelegatedTokens): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                rebalanceValidators(value: _122.MsgRebalanceValidators): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                addValidator(value: _122.MsgAddValidator): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                changeValidatorWeight(value: _122.MsgChangeValidatorWeight): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                deleteValidator(value: _122.MsgDeleteValidator): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                restoreInterchainAccount(value: _122.MsgRestoreInterchainAccount): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                updateValidatorSharesExchRate(value: _122.MsgUpdateValidatorSharesExchRate): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                clearBalance(value: _122.MsgClearBalance): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                liquidStake(value: _122.MsgLiquidStake): {
                    typeUrl: string;
                    value: _122.MsgLiquidStake;
                };
                redeemStake(value: _122.MsgRedeemStake): {
                    typeUrl: string;
                    value: _122.MsgRedeemStake;
                };
                registerHostZone(value: _122.MsgRegisterHostZone): {
                    typeUrl: string;
                    value: _122.MsgRegisterHostZone;
                };
                claimUndelegatedTokens(value: _122.MsgClaimUndelegatedTokens): {
                    typeUrl: string;
                    value: _122.MsgClaimUndelegatedTokens;
                };
                rebalanceValidators(value: _122.MsgRebalanceValidators): {
                    typeUrl: string;
                    value: _122.MsgRebalanceValidators;
                };
                addValidator(value: _122.MsgAddValidator): {
                    typeUrl: string;
                    value: _122.MsgAddValidator;
                };
                changeValidatorWeight(value: _122.MsgChangeValidatorWeight): {
                    typeUrl: string;
                    value: _122.MsgChangeValidatorWeight;
                };
                deleteValidator(value: _122.MsgDeleteValidator): {
                    typeUrl: string;
                    value: _122.MsgDeleteValidator;
                };
                restoreInterchainAccount(value: _122.MsgRestoreInterchainAccount): {
                    typeUrl: string;
                    value: _122.MsgRestoreInterchainAccount;
                };
                updateValidatorSharesExchRate(value: _122.MsgUpdateValidatorSharesExchRate): {
                    typeUrl: string;
                    value: _122.MsgUpdateValidatorSharesExchRate;
                };
                clearBalance(value: _122.MsgClearBalance): {
                    typeUrl: string;
                    value: _122.MsgClearBalance;
                };
            };
            fromPartial: {
                liquidStake(value: _122.MsgLiquidStake): {
                    typeUrl: string;
                    value: _122.MsgLiquidStake;
                };
                redeemStake(value: _122.MsgRedeemStake): {
                    typeUrl: string;
                    value: _122.MsgRedeemStake;
                };
                registerHostZone(value: _122.MsgRegisterHostZone): {
                    typeUrl: string;
                    value: _122.MsgRegisterHostZone;
                };
                claimUndelegatedTokens(value: _122.MsgClaimUndelegatedTokens): {
                    typeUrl: string;
                    value: _122.MsgClaimUndelegatedTokens;
                };
                rebalanceValidators(value: _122.MsgRebalanceValidators): {
                    typeUrl: string;
                    value: _122.MsgRebalanceValidators;
                };
                addValidator(value: _122.MsgAddValidator): {
                    typeUrl: string;
                    value: _122.MsgAddValidator;
                };
                changeValidatorWeight(value: _122.MsgChangeValidatorWeight): {
                    typeUrl: string;
                    value: _122.MsgChangeValidatorWeight;
                };
                deleteValidator(value: _122.MsgDeleteValidator): {
                    typeUrl: string;
                    value: _122.MsgDeleteValidator;
                };
                restoreInterchainAccount(value: _122.MsgRestoreInterchainAccount): {
                    typeUrl: string;
                    value: _122.MsgRestoreInterchainAccount;
                };
                updateValidatorSharesExchRate(value: _122.MsgUpdateValidatorSharesExchRate): {
                    typeUrl: string;
                    value: _122.MsgUpdateValidatorSharesExchRate;
                };
                clearBalance(value: _122.MsgClearBalance): {
                    typeUrl: string;
                    value: _122.MsgClearBalance;
                };
            };
        };
        AminoConverter: {
            "/stride.stakeibc.MsgLiquidStake": {
                aminoType: string;
                toAmino: ({ creator, amount, hostDenom }: _122.MsgLiquidStake) => {
                    creator: string;
                    amount: string;
                    host_denom: string;
                };
                fromAmino: ({ creator, amount, host_denom }: {
                    creator: string;
                    amount: string;
                    host_denom: string;
                }) => _122.MsgLiquidStake;
            };
            "/stride.stakeibc.MsgRedeemStake": {
                aminoType: string;
                toAmino: ({ creator, amount, hostZone, receiver }: _122.MsgRedeemStake) => {
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
                }) => _122.MsgRedeemStake;
            };
            "/stride.stakeibc.MsgRegisterHostZone": {
                aminoType: string;
                toAmino: ({ connectionId, bech32prefix, hostDenom, ibcDenom, creator, transferChannelId, unbondingFrequency }: _122.MsgRegisterHostZone) => {
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
                }) => _122.MsgRegisterHostZone;
            };
            "/stride.stakeibc.MsgClaimUndelegatedTokens": {
                aminoType: string;
                toAmino: ({ creator, hostZoneId, epoch, sender }: _122.MsgClaimUndelegatedTokens) => {
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
                }) => _122.MsgClaimUndelegatedTokens;
            };
            "/stride.stakeibc.MsgRebalanceValidators": {
                aminoType: string;
                toAmino: ({ creator, hostZone, numRebalance }: _122.MsgRebalanceValidators) => {
                    creator: string;
                    host_zone: string;
                    num_rebalance: string;
                };
                fromAmino: ({ creator, host_zone, num_rebalance }: {
                    creator: string;
                    host_zone: string;
                    num_rebalance: string;
                }) => _122.MsgRebalanceValidators;
            };
            "/stride.stakeibc.MsgAddValidator": {
                aminoType: string;
                toAmino: ({ creator, hostZone, name, address, commission, weight }: _122.MsgAddValidator) => {
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
                }) => _122.MsgAddValidator;
            };
            "/stride.stakeibc.MsgChangeValidatorWeight": {
                aminoType: string;
                toAmino: ({ creator, hostZone, valAddr, weight }: _122.MsgChangeValidatorWeight) => {
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
                }) => _122.MsgChangeValidatorWeight;
            };
            "/stride.stakeibc.MsgDeleteValidator": {
                aminoType: string;
                toAmino: ({ creator, hostZone, valAddr }: _122.MsgDeleteValidator) => {
                    creator: string;
                    host_zone: string;
                    val_addr: string;
                };
                fromAmino: ({ creator, host_zone, val_addr }: {
                    creator: string;
                    host_zone: string;
                    val_addr: string;
                }) => _122.MsgDeleteValidator;
            };
            "/stride.stakeibc.MsgRestoreInterchainAccount": {
                aminoType: string;
                toAmino: ({ creator, chainId, accountType }: _122.MsgRestoreInterchainAccount) => {
                    creator: string;
                    chain_id: string;
                    account_type: number;
                };
                fromAmino: ({ creator, chain_id, account_type }: {
                    creator: string;
                    chain_id: string;
                    account_type: number;
                }) => _122.MsgRestoreInterchainAccount;
            };
            "/stride.stakeibc.MsgUpdateValidatorSharesExchRate": {
                aminoType: string;
                toAmino: ({ creator, chainId, valoper }: _122.MsgUpdateValidatorSharesExchRate) => {
                    creator: string;
                    chain_id: string;
                    valoper: string;
                };
                fromAmino: ({ creator, chain_id, valoper }: {
                    creator: string;
                    chain_id: string;
                    valoper: string;
                }) => _122.MsgUpdateValidatorSharesExchRate;
            };
            "/stride.stakeibc.MsgClearBalance": {
                aminoType: string;
                toAmino: ({ creator, chainId, amount, channel }: _122.MsgClearBalance) => {
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
                }) => _122.MsgClearBalance;
            };
        };
        validator_ValidatorStatusFromJSON(object: any): _123.Validator_ValidatorStatus;
        validator_ValidatorStatusToJSON(object: _123.Validator_ValidatorStatus): string;
        Validator_ValidatorStatus: typeof _123.Validator_ValidatorStatus;
        Validator_ValidatorStatusSDKType: typeof _123.Validator_ValidatorStatusSDKType;
        ValidatorExchangeRate: {
            encode(message: _123.ValidatorExchangeRate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.ValidatorExchangeRate;
            fromPartial(object: {
                internalTokensToSharesRate?: string;
                epochNumber?: string | number | import("long");
            }): _123.ValidatorExchangeRate;
        };
        Validator: {
            encode(message: _123.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.Validator;
            fromPartial(object: {
                name?: string;
                address?: string;
                status?: _123.Validator_ValidatorStatus;
                commissionRate?: string | number | import("long");
                delegationAmt?: string | number | import("long");
                weight?: string | number | import("long");
                internalExchangeRate?: {
                    internalTokensToSharesRate?: string;
                    epochNumber?: string | number | import("long");
                };
            }): _123.Validator;
        };
        MsgLiquidStake: {
            encode(message: _122.MsgLiquidStake, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.MsgLiquidStake;
            fromPartial(object: {
                creator?: string;
                amount?: string | number | import("long");
                hostDenom?: string;
            }): _122.MsgLiquidStake;
        };
        MsgLiquidStakeResponse: {
            encode(_: _122.MsgLiquidStakeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.MsgLiquidStakeResponse;
            fromPartial(_: {}): _122.MsgLiquidStakeResponse;
        };
        MsgClearBalance: {
            encode(message: _122.MsgClearBalance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.MsgClearBalance;
            fromPartial(object: {
                creator?: string;
                chainId?: string;
                amount?: string | number | import("long");
                channel?: string;
            }): _122.MsgClearBalance;
        };
        MsgClearBalanceResponse: {
            encode(_: _122.MsgClearBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.MsgClearBalanceResponse;
            fromPartial(_: {}): _122.MsgClearBalanceResponse;
        };
        MsgRedeemStake: {
            encode(message: _122.MsgRedeemStake, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.MsgRedeemStake;
            fromPartial(object: {
                creator?: string;
                amount?: string | number | import("long");
                hostZone?: string;
                receiver?: string;
            }): _122.MsgRedeemStake;
        };
        MsgRedeemStakeResponse: {
            encode(_: _122.MsgRedeemStakeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.MsgRedeemStakeResponse;
            fromPartial(_: {}): _122.MsgRedeemStakeResponse;
        };
        MsgRegisterHostZone: {
            encode(message: _122.MsgRegisterHostZone, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.MsgRegisterHostZone;
            fromPartial(object: {
                connectionId?: string;
                bech32prefix?: string;
                hostDenom?: string;
                ibcDenom?: string;
                creator?: string;
                transferChannelId?: string;
                unbondingFrequency?: string | number | import("long");
            }): _122.MsgRegisterHostZone;
        };
        MsgRegisterHostZoneResponse: {
            encode(_: _122.MsgRegisterHostZoneResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.MsgRegisterHostZoneResponse;
            fromPartial(_: {}): _122.MsgRegisterHostZoneResponse;
        };
        MsgClaimUndelegatedTokens: {
            encode(message: _122.MsgClaimUndelegatedTokens, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.MsgClaimUndelegatedTokens;
            fromPartial(object: {
                creator?: string;
                hostZoneId?: string;
                epoch?: string | number | import("long");
                sender?: string;
            }): _122.MsgClaimUndelegatedTokens;
        };
        MsgClaimUndelegatedTokensResponse: {
            encode(_: _122.MsgClaimUndelegatedTokensResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.MsgClaimUndelegatedTokensResponse;
            fromPartial(_: {}): _122.MsgClaimUndelegatedTokensResponse;
        };
        MsgRebalanceValidators: {
            encode(message: _122.MsgRebalanceValidators, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.MsgRebalanceValidators;
            fromPartial(object: {
                creator?: string;
                hostZone?: string;
                numRebalance?: string | number | import("long");
            }): _122.MsgRebalanceValidators;
        };
        MsgRebalanceValidatorsResponse: {
            encode(_: _122.MsgRebalanceValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.MsgRebalanceValidatorsResponse;
            fromPartial(_: {}): _122.MsgRebalanceValidatorsResponse;
        };
        MsgAddValidator: {
            encode(message: _122.MsgAddValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.MsgAddValidator;
            fromPartial(object: {
                creator?: string;
                hostZone?: string;
                name?: string;
                address?: string;
                commission?: string | number | import("long");
                weight?: string | number | import("long");
            }): _122.MsgAddValidator;
        };
        MsgAddValidatorResponse: {
            encode(_: _122.MsgAddValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.MsgAddValidatorResponse;
            fromPartial(_: {}): _122.MsgAddValidatorResponse;
        };
        MsgChangeValidatorWeight: {
            encode(message: _122.MsgChangeValidatorWeight, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.MsgChangeValidatorWeight;
            fromPartial(object: {
                creator?: string;
                hostZone?: string;
                valAddr?: string;
                weight?: string | number | import("long");
            }): _122.MsgChangeValidatorWeight;
        };
        MsgChangeValidatorWeightResponse: {
            encode(_: _122.MsgChangeValidatorWeightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.MsgChangeValidatorWeightResponse;
            fromPartial(_: {}): _122.MsgChangeValidatorWeightResponse;
        };
        MsgDeleteValidator: {
            encode(message: _122.MsgDeleteValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.MsgDeleteValidator;
            fromPartial(object: {
                creator?: string;
                hostZone?: string;
                valAddr?: string;
            }): _122.MsgDeleteValidator;
        };
        MsgDeleteValidatorResponse: {
            encode(_: _122.MsgDeleteValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.MsgDeleteValidatorResponse;
            fromPartial(_: {}): _122.MsgDeleteValidatorResponse;
        };
        MsgRestoreInterchainAccount: {
            encode(message: _122.MsgRestoreInterchainAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.MsgRestoreInterchainAccount;
            fromPartial(object: {
                creator?: string;
                chainId?: string;
                accountType?: _117.ICAAccountType;
            }): _122.MsgRestoreInterchainAccount;
        };
        MsgRestoreInterchainAccountResponse: {
            encode(_: _122.MsgRestoreInterchainAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.MsgRestoreInterchainAccountResponse;
            fromPartial(_: {}): _122.MsgRestoreInterchainAccountResponse;
        };
        MsgUpdateValidatorSharesExchRate: {
            encode(message: _122.MsgUpdateValidatorSharesExchRate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.MsgUpdateValidatorSharesExchRate;
            fromPartial(object: {
                creator?: string;
                chainId?: string;
                valoper?: string;
            }): _122.MsgUpdateValidatorSharesExchRate;
        };
        MsgUpdateValidatorSharesExchRateResponse: {
            encode(_: _122.MsgUpdateValidatorSharesExchRateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.MsgUpdateValidatorSharesExchRateResponse;
            fromPartial(_: {}): _122.MsgUpdateValidatorSharesExchRateResponse;
        };
        QueryInterchainAccountFromAddressRequest: {
            encode(message: _121.QueryInterchainAccountFromAddressRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.QueryInterchainAccountFromAddressRequest;
            fromPartial(object: {
                owner?: string;
                connectionId?: string;
            }): _121.QueryInterchainAccountFromAddressRequest;
        };
        QueryInterchainAccountFromAddressResponse: {
            encode(message: _121.QueryInterchainAccountFromAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.QueryInterchainAccountFromAddressResponse;
            fromPartial(object: {
                interchainAccountAddress?: string;
            }): _121.QueryInterchainAccountFromAddressResponse;
        };
        QueryParamsRequest: {
            encode(_: _121.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.QueryParamsRequest;
            fromPartial(_: {}): _121.QueryParamsRequest;
        };
        QueryParamsResponse: {
            encode(message: _121.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.QueryParamsResponse;
            fromPartial(object: {
                params?: {
                    rewardsInterval?: string | number | import("long");
                    delegateInterval?: string | number | import("long");
                    depositInterval?: string | number | import("long");
                    redemptionRateInterval?: string | number | import("long");
                    strideCommission?: string | number | import("long");
                    zoneComAddress?: {
                        [x: string]: string;
                    };
                    reinvestInterval?: string | number | import("long");
                    validatorRebalancingThreshold?: string | number | import("long");
                    icaTimeoutNanos?: string | number | import("long");
                    bufferSize?: string | number | import("long");
                    ibcTimeoutBlocks?: string | number | import("long");
                    feeTransferTimeoutNanos?: string | number | import("long");
                    maxStakeIcaCallsPerEpoch?: string | number | import("long");
                    safetyMinRedemptionRateThreshold?: string | number | import("long");
                    safetyMaxRedemptionRateThreshold?: string | number | import("long");
                    ibcTransferTimeoutNanos?: string | number | import("long");
                    safetyNumValidators?: string | number | import("long");
                };
            }): _121.QueryParamsResponse;
        };
        QueryGetValidatorsRequest: {
            encode(message: _121.QueryGetValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.QueryGetValidatorsRequest;
            fromPartial(object: {
                chainId?: string;
            }): _121.QueryGetValidatorsRequest;
        };
        QueryGetValidatorsResponse: {
            encode(message: _121.QueryGetValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.QueryGetValidatorsResponse;
            fromPartial(object: {
                validators?: {
                    name?: string;
                    address?: string;
                    status?: _123.Validator_ValidatorStatus;
                    commissionRate?: string | number | import("long");
                    delegationAmt?: string | number | import("long");
                    weight?: string | number | import("long");
                    internalExchangeRate?: {
                        internalTokensToSharesRate?: string;
                        epochNumber?: string | number | import("long");
                    };
                }[];
            }): _121.QueryGetValidatorsResponse;
        };
        QueryGetICAAccountRequest: {
            encode(_: _121.QueryGetICAAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.QueryGetICAAccountRequest;
            fromPartial(_: {}): _121.QueryGetICAAccountRequest;
        };
        QueryGetICAAccountResponse: {
            encode(message: _121.QueryGetICAAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.QueryGetICAAccountResponse;
            fromPartial(object: {
                icaAccount?: {
                    address?: string;
                    delegations?: {
                        delegateAcctAddress?: string;
                        validator?: {
                            name?: string;
                            address?: string;
                            status?: _123.Validator_ValidatorStatus;
                            commissionRate?: string | number | import("long");
                            delegationAmt?: string | number | import("long");
                            weight?: string | number | import("long");
                            internalExchangeRate?: {
                                internalTokensToSharesRate?: string;
                                epochNumber?: string | number | import("long");
                            };
                        };
                        amt?: string | number | import("long");
                    }[];
                    target?: _117.ICAAccountType;
                };
            }): _121.QueryGetICAAccountResponse;
        };
        QueryGetHostZoneRequest: {
            encode(message: _121.QueryGetHostZoneRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.QueryGetHostZoneRequest;
            fromPartial(object: {
                chainId?: string;
            }): _121.QueryGetHostZoneRequest;
        };
        QueryGetHostZoneResponse: {
            encode(message: _121.QueryGetHostZoneResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.QueryGetHostZoneResponse;
            fromPartial(object: {
                hostZone?: {
                    chainId?: string;
                    connectionId?: string;
                    bech32prefix?: string;
                    transferChannelId?: string;
                    validators?: {
                        name?: string;
                        address?: string;
                        status?: _123.Validator_ValidatorStatus;
                        commissionRate?: string | number | import("long");
                        delegationAmt?: string | number | import("long");
                        weight?: string | number | import("long");
                        internalExchangeRate?: {
                            internalTokensToSharesRate?: string;
                            epochNumber?: string | number | import("long");
                        };
                    }[];
                    blacklistedValidators?: {
                        name?: string;
                        address?: string;
                        status?: _123.Validator_ValidatorStatus;
                        commissionRate?: string | number | import("long");
                        delegationAmt?: string | number | import("long");
                        weight?: string | number | import("long");
                        internalExchangeRate?: {
                            internalTokensToSharesRate?: string;
                            epochNumber?: string | number | import("long");
                        };
                    }[];
                    withdrawalAccount?: {
                        address?: string;
                        delegations?: {
                            delegateAcctAddress?: string;
                            validator?: {
                                name?: string;
                                address?: string;
                                status?: _123.Validator_ValidatorStatus;
                                commissionRate?: string | number | import("long");
                                delegationAmt?: string | number | import("long");
                                weight?: string | number | import("long");
                                internalExchangeRate?: {
                                    internalTokensToSharesRate?: string;
                                    epochNumber?: string | number | import("long");
                                };
                            };
                            amt?: string | number | import("long");
                        }[];
                        target?: _117.ICAAccountType;
                    };
                    feeAccount?: {
                        address?: string;
                        delegations?: {
                            delegateAcctAddress?: string;
                            validator?: {
                                name?: string;
                                address?: string;
                                status?: _123.Validator_ValidatorStatus;
                                commissionRate?: string | number | import("long");
                                delegationAmt?: string | number | import("long");
                                weight?: string | number | import("long");
                                internalExchangeRate?: {
                                    internalTokensToSharesRate?: string;
                                    epochNumber?: string | number | import("long");
                                };
                            };
                            amt?: string | number | import("long");
                        }[];
                        target?: _117.ICAAccountType;
                    };
                    delegationAccount?: {
                        address?: string;
                        delegations?: {
                            delegateAcctAddress?: string;
                            validator?: {
                                name?: string;
                                address?: string;
                                status?: _123.Validator_ValidatorStatus;
                                commissionRate?: string | number | import("long");
                                delegationAmt?: string | number | import("long");
                                weight?: string | number | import("long");
                                internalExchangeRate?: {
                                    internalTokensToSharesRate?: string;
                                    epochNumber?: string | number | import("long");
                                };
                            };
                            amt?: string | number | import("long");
                        }[];
                        target?: _117.ICAAccountType;
                    };
                    redemptionAccount?: {
                        address?: string;
                        delegations?: {
                            delegateAcctAddress?: string;
                            validator?: {
                                name?: string;
                                address?: string;
                                status?: _123.Validator_ValidatorStatus;
                                commissionRate?: string | number | import("long");
                                delegationAmt?: string | number | import("long");
                                weight?: string | number | import("long");
                                internalExchangeRate?: {
                                    internalTokensToSharesRate?: string;
                                    epochNumber?: string | number | import("long");
                                };
                            };
                            amt?: string | number | import("long");
                        }[];
                        target?: _117.ICAAccountType;
                    };
                    ibcDenom?: string;
                    hostDenom?: string;
                    lastRedemptionRate?: string;
                    redemptionRate?: string;
                    unbondingFrequency?: string | number | import("long");
                    stakedBal?: string | number | import("long");
                    address?: string;
                };
            }): _121.QueryGetHostZoneResponse;
        };
        QueryAllHostZoneRequest: {
            encode(message: _121.QueryAllHostZoneRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.QueryAllHostZoneRequest;
            fromPartial(object: {
                pagination?: {
                    key?: Uint8Array;
                    offset?: string | number | import("long");
                    limit?: string | number | import("long");
                    countTotal?: boolean;
                    reverse?: boolean;
                };
            }): _121.QueryAllHostZoneRequest;
        };
        QueryAllHostZoneResponse: {
            encode(message: _121.QueryAllHostZoneResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.QueryAllHostZoneResponse;
            fromPartial(object: {
                hostZone?: {
                    chainId?: string;
                    connectionId?: string;
                    bech32prefix?: string;
                    transferChannelId?: string;
                    validators?: {
                        name?: string;
                        address?: string;
                        status?: _123.Validator_ValidatorStatus;
                        commissionRate?: string | number | import("long");
                        delegationAmt?: string | number | import("long");
                        weight?: string | number | import("long");
                        internalExchangeRate?: {
                            internalTokensToSharesRate?: string;
                            epochNumber?: string | number | import("long");
                        };
                    }[];
                    blacklistedValidators?: {
                        name?: string;
                        address?: string;
                        status?: _123.Validator_ValidatorStatus;
                        commissionRate?: string | number | import("long");
                        delegationAmt?: string | number | import("long");
                        weight?: string | number | import("long");
                        internalExchangeRate?: {
                            internalTokensToSharesRate?: string;
                            epochNumber?: string | number | import("long");
                        };
                    }[];
                    withdrawalAccount?: {
                        address?: string;
                        delegations?: {
                            delegateAcctAddress?: string;
                            validator?: {
                                name?: string;
                                address?: string;
                                status?: _123.Validator_ValidatorStatus;
                                commissionRate?: string | number | import("long");
                                delegationAmt?: string | number | import("long");
                                weight?: string | number | import("long");
                                internalExchangeRate?: {
                                    internalTokensToSharesRate?: string;
                                    epochNumber?: string | number | import("long");
                                };
                            };
                            amt?: string | number | import("long");
                        }[];
                        target?: _117.ICAAccountType;
                    };
                    feeAccount?: {
                        address?: string;
                        delegations?: {
                            delegateAcctAddress?: string;
                            validator?: {
                                name?: string;
                                address?: string;
                                status?: _123.Validator_ValidatorStatus;
                                commissionRate?: string | number | import("long");
                                delegationAmt?: string | number | import("long");
                                weight?: string | number | import("long");
                                internalExchangeRate?: {
                                    internalTokensToSharesRate?: string;
                                    epochNumber?: string | number | import("long");
                                };
                            };
                            amt?: string | number | import("long");
                        }[];
                        target?: _117.ICAAccountType;
                    };
                    delegationAccount?: {
                        address?: string;
                        delegations?: {
                            delegateAcctAddress?: string;
                            validator?: {
                                name?: string;
                                address?: string;
                                status?: _123.Validator_ValidatorStatus;
                                commissionRate?: string | number | import("long");
                                delegationAmt?: string | number | import("long");
                                weight?: string | number | import("long");
                                internalExchangeRate?: {
                                    internalTokensToSharesRate?: string;
                                    epochNumber?: string | number | import("long");
                                };
                            };
                            amt?: string | number | import("long");
                        }[];
                        target?: _117.ICAAccountType;
                    };
                    redemptionAccount?: {
                        address?: string;
                        delegations?: {
                            delegateAcctAddress?: string;
                            validator?: {
                                name?: string;
                                address?: string;
                                status?: _123.Validator_ValidatorStatus;
                                commissionRate?: string | number | import("long");
                                delegationAmt?: string | number | import("long");
                                weight?: string | number | import("long");
                                internalExchangeRate?: {
                                    internalTokensToSharesRate?: string;
                                    epochNumber?: string | number | import("long");
                                };
                            };
                            amt?: string | number | import("long");
                        }[];
                        target?: _117.ICAAccountType;
                    };
                    ibcDenom?: string;
                    hostDenom?: string;
                    lastRedemptionRate?: string;
                    redemptionRate?: string;
                    unbondingFrequency?: string | number | import("long");
                    stakedBal?: string | number | import("long");
                    address?: string;
                }[];
                pagination?: {
                    nextKey?: Uint8Array;
                    total?: string | number | import("long");
                };
            }): _121.QueryAllHostZoneResponse;
        };
        QueryModuleAddressRequest: {
            encode(message: _121.QueryModuleAddressRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.QueryModuleAddressRequest;
            fromPartial(object: {
                name?: string;
            }): _121.QueryModuleAddressRequest;
        };
        QueryModuleAddressResponse: {
            encode(message: _121.QueryModuleAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.QueryModuleAddressResponse;
            fromPartial(object: {
                addr?: string;
            }): _121.QueryModuleAddressResponse;
        };
        QueryGetEpochTrackerRequest: {
            encode(message: _121.QueryGetEpochTrackerRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.QueryGetEpochTrackerRequest;
            fromPartial(object: {
                epochIdentifier?: string;
            }): _121.QueryGetEpochTrackerRequest;
        };
        QueryGetEpochTrackerResponse: {
            encode(message: _121.QueryGetEpochTrackerResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.QueryGetEpochTrackerResponse;
            fromPartial(object: {
                epochTracker?: {
                    epochIdentifier?: string;
                    epochNumber?: string | number | import("long");
                    nextEpochStartTime?: string | number | import("long");
                    duration?: string | number | import("long");
                };
            }): _121.QueryGetEpochTrackerResponse;
        };
        QueryAllEpochTrackerRequest: {
            encode(message: _121.QueryAllEpochTrackerRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.QueryAllEpochTrackerRequest;
            fromPartial(object: {
                pagination?: {
                    key?: Uint8Array;
                    offset?: string | number | import("long");
                    limit?: string | number | import("long");
                    countTotal?: boolean;
                    reverse?: boolean;
                };
            }): _121.QueryAllEpochTrackerRequest;
        };
        QueryAllEpochTrackerResponse: {
            encode(message: _121.QueryAllEpochTrackerResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.QueryAllEpochTrackerResponse;
            fromPartial(object: {
                epochTracker?: {
                    epochIdentifier?: string;
                    epochNumber?: string | number | import("long");
                    nextEpochStartTime?: string | number | import("long");
                    duration?: string | number | import("long");
                }[];
                pagination?: {
                    nextKey?: Uint8Array;
                    total?: string | number | import("long");
                };
            }): _121.QueryAllEpochTrackerResponse;
        };
        Params_ZoneComAddressEntry: {
            encode(message: _120.Params_ZoneComAddressEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.Params_ZoneComAddressEntry;
            fromPartial(object: {
                key?: string;
                value?: string;
            }): _120.Params_ZoneComAddressEntry;
        };
        Params: {
            encode(message: _120.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.Params;
            fromPartial(object: {
                rewardsInterval?: string | number | import("long");
                delegateInterval?: string | number | import("long");
                depositInterval?: string | number | import("long");
                redemptionRateInterval?: string | number | import("long");
                strideCommission?: string | number | import("long");
                zoneComAddress?: {
                    [x: string]: string;
                };
                reinvestInterval?: string | number | import("long");
                validatorRebalancingThreshold?: string | number | import("long");
                icaTimeoutNanos?: string | number | import("long");
                bufferSize?: string | number | import("long");
                ibcTimeoutBlocks?: string | number | import("long");
                feeTransferTimeoutNanos?: string | number | import("long");
                maxStakeIcaCallsPerEpoch?: string | number | import("long");
                safetyMinRedemptionRateThreshold?: string | number | import("long");
                safetyMaxRedemptionRateThreshold?: string | number | import("long");
                ibcTransferTimeoutNanos?: string | number | import("long");
                safetyNumValidators?: string | number | import("long");
            }): _120.Params;
        };
        StakeibcPacketData: {
            encode(message: _119.StakeibcPacketData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.StakeibcPacketData;
            fromPartial(object: {
                noData?: {};
            }): _119.StakeibcPacketData;
        };
        NoData: {
            encode(_: _119.NoData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.NoData;
            fromPartial(_: {}): _119.NoData;
        };
        MinValidatorRequirements: {
            encode(message: _118.MinValidatorRequirements, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.MinValidatorRequirements;
            fromPartial(object: {
                commissionRate?: number;
                uptime?: number;
            }): _118.MinValidatorRequirements;
        };
        iCAAccountTypeFromJSON(object: any): _117.ICAAccountType;
        iCAAccountTypeToJSON(object: _117.ICAAccountType): string;
        ICAAccountType: typeof _117.ICAAccountType;
        ICAAccountTypeSDKType: typeof _117.ICAAccountTypeSDKType;
        ICAAccount: {
            encode(message: _117.ICAAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.ICAAccount;
            fromPartial(object: {
                address?: string;
                delegations?: {
                    delegateAcctAddress?: string;
                    validator?: {
                        name?: string;
                        address?: string;
                        status?: _123.Validator_ValidatorStatus;
                        commissionRate?: string | number | import("long");
                        delegationAmt?: string | number | import("long");
                        weight?: string | number | import("long");
                        internalExchangeRate?: {
                            internalTokensToSharesRate?: string;
                            epochNumber?: string | number | import("long");
                        };
                    };
                    amt?: string | number | import("long");
                }[];
                target?: _117.ICAAccountType;
            }): _117.ICAAccount;
        };
        HostZone: {
            encode(message: _116.HostZone, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.HostZone;
            fromPartial(object: {
                chainId?: string;
                connectionId?: string;
                bech32prefix?: string;
                transferChannelId?: string;
                validators?: {
                    name?: string;
                    address?: string;
                    status?: _123.Validator_ValidatorStatus;
                    commissionRate?: string | number | import("long");
                    delegationAmt?: string | number | import("long");
                    weight?: string | number | import("long");
                    internalExchangeRate?: {
                        internalTokensToSharesRate?: string;
                        epochNumber?: string | number | import("long");
                    };
                }[];
                blacklistedValidators?: {
                    name?: string;
                    address?: string;
                    status?: _123.Validator_ValidatorStatus;
                    commissionRate?: string | number | import("long");
                    delegationAmt?: string | number | import("long");
                    weight?: string | number | import("long");
                    internalExchangeRate?: {
                        internalTokensToSharesRate?: string;
                        epochNumber?: string | number | import("long");
                    };
                }[];
                withdrawalAccount?: {
                    address?: string;
                    delegations?: {
                        delegateAcctAddress?: string;
                        validator?: {
                            name?: string;
                            address?: string;
                            status?: _123.Validator_ValidatorStatus;
                            commissionRate?: string | number | import("long");
                            delegationAmt?: string | number | import("long");
                            weight?: string | number | import("long");
                            internalExchangeRate?: {
                                internalTokensToSharesRate?: string;
                                epochNumber?: string | number | import("long");
                            };
                        };
                        amt?: string | number | import("long");
                    }[];
                    target?: _117.ICAAccountType;
                };
                feeAccount?: {
                    address?: string;
                    delegations?: {
                        delegateAcctAddress?: string;
                        validator?: {
                            name?: string;
                            address?: string;
                            status?: _123.Validator_ValidatorStatus;
                            commissionRate?: string | number | import("long");
                            delegationAmt?: string | number | import("long");
                            weight?: string | number | import("long");
                            internalExchangeRate?: {
                                internalTokensToSharesRate?: string;
                                epochNumber?: string | number | import("long");
                            };
                        };
                        amt?: string | number | import("long");
                    }[];
                    target?: _117.ICAAccountType;
                };
                delegationAccount?: {
                    address?: string;
                    delegations?: {
                        delegateAcctAddress?: string;
                        validator?: {
                            name?: string;
                            address?: string;
                            status?: _123.Validator_ValidatorStatus;
                            commissionRate?: string | number | import("long");
                            delegationAmt?: string | number | import("long");
                            weight?: string | number | import("long");
                            internalExchangeRate?: {
                                internalTokensToSharesRate?: string;
                                epochNumber?: string | number | import("long");
                            };
                        };
                        amt?: string | number | import("long");
                    }[];
                    target?: _117.ICAAccountType;
                };
                redemptionAccount?: {
                    address?: string;
                    delegations?: {
                        delegateAcctAddress?: string;
                        validator?: {
                            name?: string;
                            address?: string;
                            status?: _123.Validator_ValidatorStatus;
                            commissionRate?: string | number | import("long");
                            delegationAmt?: string | number | import("long");
                            weight?: string | number | import("long");
                            internalExchangeRate?: {
                                internalTokensToSharesRate?: string;
                                epochNumber?: string | number | import("long");
                            };
                        };
                        amt?: string | number | import("long");
                    }[];
                    target?: _117.ICAAccountType;
                };
                ibcDenom?: string;
                hostDenom?: string;
                lastRedemptionRate?: string;
                redemptionRate?: string;
                unbondingFrequency?: string | number | import("long");
                stakedBal?: string | number | import("long");
                address?: string;
            }): _116.HostZone;
        };
        AddValidatorProposal: {
            encode(message: _115.AddValidatorProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.AddValidatorProposal;
            fromPartial(object: {
                title?: string;
                description?: string;
                hostZone?: string;
                validatorName?: string;
                validatorAddress?: string;
                deposit?: string;
            }): _115.AddValidatorProposal;
        };
        GenesisState_DenomToHostZoneEntry: {
            encode(message: _114.GenesisState_DenomToHostZoneEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.GenesisState_DenomToHostZoneEntry;
            fromPartial(object: {
                key?: string;
                value?: string;
            }): _114.GenesisState_DenomToHostZoneEntry;
        };
        GenesisState: {
            encode(message: _114.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.GenesisState;
            fromPartial(object: {
                params?: {
                    rewardsInterval?: string | number | import("long");
                    delegateInterval?: string | number | import("long");
                    depositInterval?: string | number | import("long");
                    redemptionRateInterval?: string | number | import("long");
                    strideCommission?: string | number | import("long");
                    zoneComAddress?: {
                        [x: string]: string;
                    };
                    reinvestInterval?: string | number | import("long");
                    validatorRebalancingThreshold?: string | number | import("long");
                    icaTimeoutNanos?: string | number | import("long");
                    bufferSize?: string | number | import("long");
                    ibcTimeoutBlocks?: string | number | import("long");
                    feeTransferTimeoutNanos?: string | number | import("long");
                    maxStakeIcaCallsPerEpoch?: string | number | import("long");
                    safetyMinRedemptionRateThreshold?: string | number | import("long");
                    safetyMaxRedemptionRateThreshold?: string | number | import("long");
                    ibcTransferTimeoutNanos?: string | number | import("long");
                    safetyNumValidators?: string | number | import("long");
                };
                portId?: string;
                icaAccount?: {
                    address?: string;
                    delegations?: {
                        delegateAcctAddress?: string;
                        validator?: {
                            name?: string;
                            address?: string;
                            status?: _123.Validator_ValidatorStatus;
                            commissionRate?: string | number | import("long");
                            delegationAmt?: string | number | import("long");
                            weight?: string | number | import("long");
                            internalExchangeRate?: {
                                internalTokensToSharesRate?: string;
                                epochNumber?: string | number | import("long");
                            };
                        };
                        amt?: string | number | import("long");
                    }[];
                    target?: _117.ICAAccountType;
                };
                hostZoneList?: {
                    chainId?: string;
                    connectionId?: string;
                    bech32prefix?: string;
                    transferChannelId?: string;
                    validators?: {
                        name?: string;
                        address?: string;
                        status?: _123.Validator_ValidatorStatus;
                        commissionRate?: string | number | import("long");
                        delegationAmt?: string | number | import("long");
                        weight?: string | number | import("long");
                        internalExchangeRate?: {
                            internalTokensToSharesRate?: string;
                            epochNumber?: string | number | import("long");
                        };
                    }[];
                    blacklistedValidators?: {
                        name?: string;
                        address?: string;
                        status?: _123.Validator_ValidatorStatus;
                        commissionRate?: string | number | import("long");
                        delegationAmt?: string | number | import("long");
                        weight?: string | number | import("long");
                        internalExchangeRate?: {
                            internalTokensToSharesRate?: string;
                            epochNumber?: string | number | import("long");
                        };
                    }[];
                    withdrawalAccount?: {
                        address?: string;
                        delegations?: {
                            delegateAcctAddress?: string;
                            validator?: {
                                name?: string;
                                address?: string;
                                status?: _123.Validator_ValidatorStatus;
                                commissionRate?: string | number | import("long");
                                delegationAmt?: string | number | import("long");
                                weight?: string | number | import("long");
                                internalExchangeRate?: {
                                    internalTokensToSharesRate?: string;
                                    epochNumber?: string | number | import("long");
                                };
                            };
                            amt?: string | number | import("long");
                        }[];
                        target?: _117.ICAAccountType;
                    };
                    feeAccount?: {
                        address?: string;
                        delegations?: {
                            delegateAcctAddress?: string;
                            validator?: {
                                name?: string;
                                address?: string;
                                status?: _123.Validator_ValidatorStatus;
                                commissionRate?: string | number | import("long");
                                delegationAmt?: string | number | import("long");
                                weight?: string | number | import("long");
                                internalExchangeRate?: {
                                    internalTokensToSharesRate?: string;
                                    epochNumber?: string | number | import("long");
                                };
                            };
                            amt?: string | number | import("long");
                        }[];
                        target?: _117.ICAAccountType;
                    };
                    delegationAccount?: {
                        address?: string;
                        delegations?: {
                            delegateAcctAddress?: string;
                            validator?: {
                                name?: string;
                                address?: string;
                                status?: _123.Validator_ValidatorStatus;
                                commissionRate?: string | number | import("long");
                                delegationAmt?: string | number | import("long");
                                weight?: string | number | import("long");
                                internalExchangeRate?: {
                                    internalTokensToSharesRate?: string;
                                    epochNumber?: string | number | import("long");
                                };
                            };
                            amt?: string | number | import("long");
                        }[];
                        target?: _117.ICAAccountType;
                    };
                    redemptionAccount?: {
                        address?: string;
                        delegations?: {
                            delegateAcctAddress?: string;
                            validator?: {
                                name?: string;
                                address?: string;
                                status?: _123.Validator_ValidatorStatus;
                                commissionRate?: string | number | import("long");
                                delegationAmt?: string | number | import("long");
                                weight?: string | number | import("long");
                                internalExchangeRate?: {
                                    internalTokensToSharesRate?: string;
                                    epochNumber?: string | number | import("long");
                                };
                            };
                            amt?: string | number | import("long");
                        }[];
                        target?: _117.ICAAccountType;
                    };
                    ibcDenom?: string;
                    hostDenom?: string;
                    lastRedemptionRate?: string;
                    redemptionRate?: string;
                    unbondingFrequency?: string | number | import("long");
                    stakedBal?: string | number | import("long");
                    address?: string;
                }[];
                hostZoneCount?: string | number | import("long");
                denomToHostZone?: {
                    [x: string]: string;
                };
                epochTrackerList?: {
                    epochIdentifier?: string;
                    epochNumber?: string | number | import("long");
                    nextEpochStartTime?: string | number | import("long");
                    duration?: string | number | import("long");
                }[];
            }): _114.GenesisState;
        };
        EpochTracker: {
            encode(message: _113.EpochTracker, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.EpochTracker;
            fromPartial(object: {
                epochIdentifier?: string;
                epochNumber?: string | number | import("long");
                nextEpochStartTime?: string | number | import("long");
                duration?: string | number | import("long");
            }): _113.EpochTracker;
        };
        Delegation: {
            encode(message: _112.Delegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.Delegation;
            fromPartial(object: {
                delegateAcctAddress?: string;
                validator?: {
                    name?: string;
                    address?: string;
                    status?: _123.Validator_ValidatorStatus;
                    commissionRate?: string | number | import("long");
                    delegationAmt?: string | number | import("long");
                    weight?: string | number | import("long");
                    internalExchangeRate?: {
                        internalTokensToSharesRate?: string;
                        epochNumber?: string | number | import("long");
                    };
                };
                amt?: string | number | import("long");
            }): _112.Delegation;
        };
        SplitDelegation: {
            encode(message: _111.SplitDelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.SplitDelegation;
            fromPartial(object: {
                validator?: string;
                amount?: string | number | import("long");
            }): _111.SplitDelegation;
        };
        DelegateCallback: {
            encode(message: _111.DelegateCallback, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.DelegateCallback;
            fromPartial(object: {
                hostZoneId?: string;
                depositRecordId?: string | number | import("long");
                splitDelegations?: {
                    validator?: string;
                    amount?: string | number | import("long");
                }[];
            }): _111.DelegateCallback;
        };
        ClaimCallback: {
            encode(message: _111.ClaimCallback, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.ClaimCallback;
            fromPartial(object: {
                userRedemptionRecordId?: string;
                chainId?: string;
                epochNumber?: string | number | import("long");
            }): _111.ClaimCallback;
        };
        ReinvestCallback: {
            encode(message: _111.ReinvestCallback, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.ReinvestCallback;
            fromPartial(object: {
                reinvestAmount?: {
                    denom?: string;
                    amount?: string;
                };
                hostZoneId?: string;
            }): _111.ReinvestCallback;
        };
        UndelegateCallback: {
            encode(message: _111.UndelegateCallback, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.UndelegateCallback;
            fromPartial(object: {
                hostZoneId?: string;
                splitDelegations?: {
                    validator?: string;
                    amount?: string | number | import("long");
                }[];
                epochUnbondingRecordIds?: (string | number | import("long"))[];
            }): _111.UndelegateCallback;
        };
        RedemptionCallback: {
            encode(message: _111.RedemptionCallback, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.RedemptionCallback;
            fromPartial(object: {
                hostZoneId?: string;
                epochUnbondingRecordIds?: (string | number | import("long"))[];
            }): _111.RedemptionCallback;
        };
        Rebalancing: {
            encode(message: _111.Rebalancing, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.Rebalancing;
            fromPartial(object: {
                srcValidator?: string;
                dstValidator?: string;
                amt?: string | number | import("long");
            }): _111.Rebalancing;
        };
        RebalanceCallback: {
            encode(message: _111.RebalanceCallback, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.RebalanceCallback;
            fromPartial(object: {
                hostZoneId?: string;
                rebalancings?: {
                    srcValidator?: string;
                    dstValidator?: string;
                    amt?: string | number | import("long");
                }[];
            }): _111.RebalanceCallback;
        };
    };
    const vesting: {
        BaseVestingAccount: {
            encode(message: _125.BaseVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.BaseVestingAccount;
            fromPartial(object: {
                baseAccount?: {
                    address?: string;
                    pubKey?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    accountNumber?: string | number | import("long");
                    sequence?: string | number | import("long");
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
                endTime?: string | number | import("long");
            }): _125.BaseVestingAccount;
        };
        Period: {
            encode(message: _125.Period, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.Period;
            fromPartial(object: {
                startTime?: string | number | import("long");
                length?: string | number | import("long");
                amount?: {
                    denom?: string;
                    amount?: string;
                }[];
                actionType?: number;
            }): _125.Period;
        };
        StridePeriodicVestingAccount: {
            encode(message: _125.StridePeriodicVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.StridePeriodicVestingAccount;
            fromPartial(object: {
                baseVestingAccount?: {
                    baseAccount?: {
                        address?: string;
                        pubKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        accountNumber?: string | number | import("long");
                        sequence?: string | number | import("long");
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
                    endTime?: string | number | import("long");
                };
                vestingPeriods?: {
                    startTime?: string | number | import("long");
                    length?: string | number | import("long");
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    actionType?: number;
                }[];
            }): _125.StridePeriodicVestingAccount;
        };
    };
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
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
                claim: _202.MsgClientImpl;
                interchainquery: {
                    v1: _203.MsgClientImpl;
                };
                stakeibc: _204.MsgClientImpl;
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
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
                claim: {
                    distributorAccountBalance(request: _93.QueryDistributorAccountBalanceRequest): Promise<_93.QueryDistributorAccountBalanceResponse>;
                    params(request?: _93.QueryParamsRequest): Promise<_93.QueryParamsResponse>;
                    claimRecord(request: _93.QueryClaimRecordRequest): Promise<_93.QueryClaimRecordResponse>;
                    claimableForAction(request: _93.QueryClaimableForActionRequest): Promise<_93.QueryClaimableForActionResponse>;
                    totalClaimable(request: _93.QueryTotalClaimableRequest): Promise<_93.QueryTotalClaimableResponse>;
                    userVestings(request: _93.QueryUserVestingsRequest): Promise<_93.QueryUserVestingsResponse>;
                };
                epochs: {
                    epochInfos(request?: _96.QueryEpochsInfoRequest): Promise<_96.QueryEpochsInfoResponse>;
                    currentEpoch(request: _96.QueryCurrentEpochRequest): Promise<_96.QueryCurrentEpochResponse>;
                    epochInfo(request: _96.QueryEpochInfoRequest): Promise<_96.QueryEpochInfoResponse>;
                };
                icacallbacks: {
                    params(request?: _101.QueryParamsRequest): Promise<_101.QueryParamsResponse>;
                    callbackData(request: _101.QueryGetCallbackDataRequest): Promise<_101.QueryGetCallbackDataResponse>;
                    callbackDataAll(request?: _101.QueryAllCallbackDataRequest): Promise<_101.QueryAllCallbackDataResponse>;
                };
                mint: {
                    v1beta1: {
                        params(request?: _107.QueryParamsRequest): Promise<_107.QueryParamsResponse>;
                        epochProvisions(request?: _107.QueryEpochProvisionsRequest): Promise<_107.QueryEpochProvisionsResponse>;
                    };
                };
                records: {
                    params(request?: _110.QueryParamsRequest): Promise<_110.QueryParamsResponse>;
                    userRedemptionRecord(request: _110.QueryGetUserRedemptionRecordRequest): Promise<_110.QueryGetUserRedemptionRecordResponse>;
                    userRedemptionRecordAll(request?: _110.QueryAllUserRedemptionRecordRequest): Promise<_110.QueryAllUserRedemptionRecordResponse>;
                    userRedemptionRecordForUser(request: _110.QueryAllUserRedemptionRecordForUserRequest): Promise<_110.QueryAllUserRedemptionRecordForUserResponse>;
                    epochUnbondingRecord(request: _110.QueryGetEpochUnbondingRecordRequest): Promise<_110.QueryGetEpochUnbondingRecordResponse>;
                    epochUnbondingRecordAll(request?: _110.QueryAllEpochUnbondingRecordRequest): Promise<_110.QueryAllEpochUnbondingRecordResponse>;
                    depositRecord(request: _110.QueryGetDepositRecordRequest): Promise<_110.QueryGetDepositRecordResponse>;
                    depositRecordAll(request?: _110.QueryAllDepositRecordRequest): Promise<_110.QueryAllDepositRecordResponse>;
                };
                stakeibc: {
                    params(request?: _121.QueryParamsRequest): Promise<_121.QueryParamsResponse>;
                    validators(request: _121.QueryGetValidatorsRequest): Promise<_121.QueryGetValidatorsResponse>;
                    iCAAccount(request?: _121.QueryGetICAAccountRequest): Promise<_121.QueryGetICAAccountResponse>;
                    hostZone(request: _121.QueryGetHostZoneRequest): Promise<_121.QueryGetHostZoneResponse>;
                    hostZoneAll(request?: _121.QueryAllHostZoneRequest): Promise<_121.QueryAllHostZoneResponse>;
                    moduleAddress(request: _121.QueryModuleAddressRequest): Promise<_121.QueryModuleAddressResponse>;
                    interchainAccountFromAddress(request: _121.QueryInterchainAccountFromAddressRequest): Promise<_121.QueryInterchainAccountFromAddressResponse>;
                    epochTracker(request: _121.QueryGetEpochTrackerRequest): Promise<_121.QueryGetEpochTrackerResponse>;
                    epochTrackerAll(request?: _121.QueryAllEpochTrackerRequest): Promise<_121.QueryAllEpochTrackerResponse>;
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
                claim: _190.LCDQueryClient;
                epochs: _191.LCDQueryClient;
                icacallbacks: _192.LCDQueryClient;
                mint: {
                    v1beta1: _193.LCDQueryClient;
                };
                records: _194.LCDQueryClient;
                stakeibc: _195.LCDQueryClient;
            };
        }>;
    };
}
